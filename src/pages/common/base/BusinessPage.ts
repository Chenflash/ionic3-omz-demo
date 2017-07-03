import { OnInit } from '@angular/core';
import { BasePage } from './BasePage';
import { LoginPage } from '../login/login';
import { PDAResponseException } from '../../../models/PDAResponse';
import { AlertService } from '../../../providers/services/AlertService';
import { ModalService } from '../../../providers/services/ModalService';
import { Session } from '../../../providers/sessions/session';

export abstract class BusinessPage extends BasePage {
    constructor(
        protected alertService: AlertService,
        protected modalService: ModalService,
        protected session: Session
    ) {
        super();
    }

    protected ProcessResponseException(exception: PDAResponseException) {
        // show alert
        this.alertService.ShowError(
            exception.ErrorID,
            exception.ErrorMessage,
            () => {
                if (exception.ErrorID === "000500") {
                    // session timeout
                    // clear session
                    this.session.Clear();
                    // Open Login Page
                    let loginPage = this.modalService.ShowModalPage(LoginPage, null);
                    loginPage.present();
                }
            });
    }
}