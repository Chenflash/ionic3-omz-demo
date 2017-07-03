import { OnInit } from '@angular/core';
import { BasePage } from './BasePage';
import { LoginPage } from '../login/login';
import { PDAResponseException } from '../../../models/PDAResponse';
import { ServicesPackage } from '../../../providers/services/ServicesPackage';
import { Session } from '../../../providers/sessions/session';

export abstract class BusinessPage extends BasePage {
    constructor(
        protected services: ServicesPackage,
        protected session: Session
    ) {
        super();
    }

    protected ProcessResponseException(exception: PDAResponseException) {
        // show alert
        this.services.AlertService.ShowError(
            exception.ErrorID,
            exception.ErrorMessage,
            () => {
                if (exception.ErrorID === "000500") {
                    // session timeout
                    // clear session
                    this.session.Clear();
                    // Open Login Page
                    let loginPage = this.services.ModalService.ShowModalPage(LoginPage, null);
                    loginPage.present();
                }
            });
    }
}