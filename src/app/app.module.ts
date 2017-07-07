import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, forwardRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule, IonicPageModule } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
// configuration
import { APPCONFIG, APPCONFIG_TOKEN } from './app.config';
// pages
import { MyApp } from './app.component';
import { LoginPage } from '../pages/common/login/login';
import { HomePage } from '../pages/home/home';
import { UnitFavoritePage } from '../pages/lookup/UnitFavorite';
import { UnitEntryPage } from '../pages/lookup/UnitEntry';
// rxjs
import '../libs/rxjs-extensions';
// providers
import { AlertService } from '../providers/services/AlertService';
import { HttpService } from '../providers/services/HttpService';
import { LoadingService } from '../providers/services/LoadingService';
import { BusinessService } from '../providers/services/BusinessService';
import { ToastService } from '../providers/services/ToastService';
import { ModalService } from '../providers/services/ModalService';
import { ActionSheetService } from '../providers/services/ActionSheetService';
import { ServicesPackage } from '../providers/services/ServicesPackage';

import { UnitEntryPageModule } from '../pages/lookup/UnitEntry.module';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    UnitFavoritePage
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    UnitFavoritePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    { provide: APPCONFIG_TOKEN, useValue: APPCONFIG },
    forwardRef(() => AlertService),
    forwardRef(() => HttpService),
    forwardRef(() => LoadingService),
    forwardRef(() => ToastService),
    forwardRef(() => ModalService),
    forwardRef(() => ServicesPackage),
    forwardRef(() => BusinessService),
    forwardRef(() => ActionSheetService)
  ]
})
export class AppModule { }
