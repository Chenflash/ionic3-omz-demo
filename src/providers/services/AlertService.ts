import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';

@Injectable()
export class AlertService {
    constructor(
        private alertCtrl: AlertController
    ) { }

    public ShowError(errorID: string, errorMessage: string, onOkClick: () => void = () => { }) {
        this.alertCtrl.create({
            title: `Error`,
            message: `${errorID}: ${errorMessage}`,
            buttons: [
                {
                    text: "OK",
                    handler: () => onOkClick()
                }
            ]
        }).present();
    }

    public ShowConfirmForDelete(onOkClick: () => void) {
        this.alertCtrl.create({
            title: `Confirm`,
            message: `Are you sure to delete this record?`,
            buttons: [
                {
                    text: "OK",
                    handler: () => onOkClick()
                },
                {
                    text: "Cancel"
                }
            ]
        }).present();
    }
}