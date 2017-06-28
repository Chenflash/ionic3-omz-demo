import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ViewController, AlertController } from 'ionic-angular';
import { Session } from '../../../providers/sessions/session';
import { AlertService } from '../../../providers/services/AlertService';
import { HttpService } from '../../../providers/services/HttpService';
import { LoadingService } from '../../../providers/services/LoadingService';
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
    private session: Session,
    private alertService: AlertService,
    private httpService: HttpService,
    private loadingService: LoadingService
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
    let loading = this.loadingService.ShowWaitLoading();
    this.httpService.Post('Account', 'Login', value)
      .subscribe(response => {
        if (!response.ResponseException) {
          // save to session cache 
          this.session.SessionID = response.Data.SessionID;
          this.session.UserInfo.UserID = response.Data.UserID;
          this.session.UserInfo.UserName = response.Data.UserName;
          // dismiss loading
          this.loadingService.Dismiss();
          // dismiss modal 
          this.viewCtrl.dismiss();
        } else {
          // show alert
          this.alertService.ShowError(
            response.ResponseException.ErrorID,
            response.ResponseException.ErrorMessage);
          // dismiss loading
          this.loadingService.Dismiss();
        }
      },
      error => {
        // show alert
        this.alertService.ShowError("system", error);
        // dismiss loading
        this.loadingService.Dismiss();
      });
  }
}