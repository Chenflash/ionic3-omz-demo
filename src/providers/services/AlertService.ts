import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';

@Injectable()
export class AlertService {
    constructor(
        private alertCtrl: AlertController
    ) { }

    public ShowError(errorID: string, errorMessage: string) {
        this.alertCtrl.create({
            title: `Error`,
            message: `${errorID}: ${errorMessage}`,
            buttons: ['OK']
        }).present();
    }
}