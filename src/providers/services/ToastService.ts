import { Injectable } from '@angular/core';
import { ToastController, Toast } from 'ionic-angular';

@Injectable()
export class ToastService {

    private toast: Toast = null;

    constructor(
        private toastCtrl: ToastController
    ) { }

    public Show(message: string, duration?, onDidDismiss?: () => null) {
        if (this.toast) {
            this.toast.dismiss();
            this.toast = null;
        }

        this.toast = this.toastCtrl.create({
            message: message,
            duration: duration || 3000,
        });

        if (onDidDismiss != null) {
            this.toast.onDidDismiss(onDidDismiss);
        }

        this.toast.willLeave
            .subscribe(value => { this.toast = null });

        this.toast.present();
    }

    public Dismiss() {
        if (this.toast) {
            this.toast.dismiss();
            this.toast = null;
        }
    }
}