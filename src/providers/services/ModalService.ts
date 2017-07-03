import { Injectable } from '@angular/core';
import { ModalController, Modal } from 'ionic-angular';

@Injectable()
export class ModalService {
    constructor(
        private modalCtrl: ModalController
    ) {
    }

    public ShowModalPage(component: any, data: any, enableBackdropDismiss = false): Modal {
        return this.modalCtrl.create(component, data, { enableBackdropDismiss: false });
    }
}