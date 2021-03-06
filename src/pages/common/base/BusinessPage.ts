import { BasePage } from './BasePage';
import { LoginPage } from '../../login/login';
import { PDAResponseException } from '../../../models/PDAResponse';
import { ServicesPackage } from '../../../providers/services/ServicesPackage';
import { Session } from '../../../providers/sessions/session';

export abstract class BusinessPage extends BasePage {
    constructor(
        protected services: ServicesPackage
    ) {
        super();
    }

    protected ProcessResponseException(exception: PDAResponseException) {
        // show alert
        this.services.AlertService.ShowError(
            exception.ErrorID,
            exception.ErrorMessage,
            () => {
                // session timeout
                if (exception.ErrorID === "000500") {
                    // clear session
                    Session.Instance.Clear();
                    // Open Login Page
                    let loginPage = this.services.ModalService.ShowModalPage(LoginPage, null);
                    loginPage.present();
                }
            });
    }
}