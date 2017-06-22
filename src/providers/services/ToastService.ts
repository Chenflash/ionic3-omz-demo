import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';

@Injectable()
export class ToastService {
    constructor(
        private toastCtrl: ToastController
    ) {

    }
}