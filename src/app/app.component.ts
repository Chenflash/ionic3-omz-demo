import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, IonicApp, ToastController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
// pages
import { LoginPage } from '../pages/login/login';
// services
import { ModalService } from '../providers/services/ModalService';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  private backButtonPressed: boolean = false;
  private rootPage: any = 'HomePage';
  private pages: Array<{ title: string, component: any }>;

  constructor(
    public ionicApp: IonicApp,
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public modalSevice: ModalService,
    public toastCtrl: ToastController) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: 'HomePage' },
      { title: 'UnitFavorite', component: 'UnitFavoritePage' }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      // register back button action
      this.registerBackButtonAction();

      // Open Login Page
      let loginPage = this.modalSevice.ShowModalPage(LoginPage, null);
      loginPage.present();
    });
  }

  registerBackButtonAction() {
    this.platform.registerBackButtonAction(() => {
      // TODO: need to check login page
      let activePortal = this.ionicApp._modalPortal.getActive();
      if (activePortal) {
        // press twice [BACK] to exit when login page 
        this.showExit();
      } else {
        if (this.nav.canGoBack()) {
          // press [BACK] to return parent page when child page
          this.nav.pop();
        } else if (this.nav.getActive().component.name !== "HomePage") {
          // press [BACK] to return welcome page when root page
          this.nav.setRoot('HomePage');
        } else {
          // press twice [BACK] to exit when welcome page
          this.showExit();
        }
      }
    }, 1)
  }

  // exit application by double press [BACK]
  showExit() {
    if (this.backButtonPressed) {
      this.platform.exitApp();
    } else {
      this.toastCtrl.create({
        message: '再按一次退出应用',
        duration: 2000,
        position: 'bottom'
      }).present();
      this.backButtonPressed = true;
      setTimeout(() => this.backButtonPressed = false, 2000);
    }
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
