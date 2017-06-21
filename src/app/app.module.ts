import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, forwardRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/common/login/login';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import './rxjs-extensions';

import { Session } from '../providers/sessions/session';
import { AlertService } from '../providers/services/AlertService';
import { HttpService } from '../providers/services/HttpService';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    forwardRef(() => Session),
    forwardRef(() => AlertService),
    forwardRef(() => HttpService)
  ]
})
export class AppModule { }
