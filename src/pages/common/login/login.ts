import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ViewController, AlertController } from 'ionic-angular';
import { Session } from '../../../providers/sessions/session';
import { ServicesPackage } from '../../../providers/services/ServicesPackage';
import { BasePage } from '../base/BasePage';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage extends BasePage {

  private loginForm;

  constructor(
    private viewCtrl: ViewController,
    private formBuilder: FormBuilder,
    private services: ServicesPackage,
  ) {
    super();
  }

  protected OnInitialize() {
    super.OnInitialize();
    this.loginForm = this.formBuilder.group({
      userID: ['', [Validators.required]],
      password: ['']
    });
  }

  onSubmit({ value, valid }) {
    let loading = this.services.LoadingService.ShowWaitLoading();
    this.services.HttpService.Post('Account', 'Login', value)
      .subscribe(response => {
        if (!response.ResponseException) {
          // save to session cache 
          Session.Instance.SessionID = response.Data.SessionID;
          Session.Instance.UserInfo.UserID = response.Data.UserID;
          Session.Instance.UserInfo.UserName = response.Data.UserName;
          // dismiss loading
          this.services.LoadingService.Dismiss();
          // dismiss modal 
          this.viewCtrl.dismiss();
        } else {
          // show alert
          this.services.AlertService.ShowError(
            response.ResponseException.ErrorID,
            response.ResponseException.ErrorMessage);
          // dismiss loading
          this.services.LoadingService.Dismiss();
        }
      },
      error => {
        // show alert
        this.services.AlertService.ShowError("system", error);
        // dismiss loading
        this.services.LoadingService.Dismiss();
      });
  }
}