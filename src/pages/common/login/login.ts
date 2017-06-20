import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Http } from '@angular/http';
import { ViewController, ToastController, AlertController } from 'ionic-angular';
import { Session } from '../../../providers/sessions/session';
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
    private http: Http,
    private session: Session,
    private toastCtrl: ToastController,
    private alertCtrl: AlertController
  ) {
    super();
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      userID: ['', [Validators.required]],
      password: ['']
    });
  }

  onSubmit({ value, valid }) {
    this.http.post('http://localhost:8088/api/Account/Login', value)
      .map(result => result.json())
      .subscribe(result => {
        if (!result.ResponseException) {
          // cache session info
          this.session.UserInfo.UserID = result.UserID;
          this.session.UserInfo.UserName = result.UserName;
          this.session.SessionID = result.SessionID;
          // dismiss login page
          this.viewCtrl.dismiss();
        } else {
          // display alert
          this.alertCtrl.create({
            title: 'Login Failed!',
            subTitle: `${result.ResponseException.ErrorID}: ${result.ResponseException.ErrorMessage}`,
            buttons: ['OK']
          }).present();
        }
      }, error => console.dir(error));
  }
}
