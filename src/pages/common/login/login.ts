import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ViewController, AlertController } from 'ionic-angular';
import { Session } from '../../../providers/sessions/session';
import { AlertService } from '../../../providers/services/AlertService';
import { HttpService } from '../../../providers/services/HttpService';
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
    private httpService: HttpService
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
    this.httpService.Post('Account', 'Login', value,
      (data, extraInfo): void => {
        // save to session cache 
        this.session.SessionID = data.SessionID;
        this.session.UserInfo.UserID = data.UserID;
        this.session.UserInfo.UserName = data.UserName;
        // close modal 
        this.viewCtrl.dismiss();
      });
  }
}