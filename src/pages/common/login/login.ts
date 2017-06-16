import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Http } from '@angular/http';
import { ViewController, ToastController } from 'ionic-angular';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  private loginForm;

  constructor(
    private viewCtrl: ViewController,
    private toastCtrl: ToastController,
    private formBuilder: FormBuilder,
    private http: Http
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      userID: ['', [Validators.required]],
      password: ['']
    });
  }

  onSubmit({ value, valid }) {
    this.http.post('http://localhost:8088/api/Account/Login', value)
      .map(result => result.json())
      .subscribe(clientUserInfo => {
        if (!clientUserInfo.ResponseException) {
          console.dir(clientUserInfo);
          this.viewCtrl.dismiss();
        } else {
          console.dir(clientUserInfo);
          this.toastCtrl.create({
            message: `${clientUserInfo.ResponseException.ErrorID}:${clientUserInfo.ResponseException.ErrorMessage}`,
            duration: 5000
          }).present();
        }
      }, error => console.dir(error));
  }
}
