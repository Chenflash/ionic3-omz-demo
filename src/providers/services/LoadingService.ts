import { Injectable } from '@angular/core';
import { LoadingController, Loading } from 'ionic-angular';

@Injectable()
export class LoadingService {
    private loading: Loading = null;

    constructor(private loadingCtrl: LoadingController) { }

    public ShowWaitLoading() {
        if (!this.loading) {
            this.loading = this.loadingCtrl.create({
                content: 'Please Wait...',
            });
            this.loading.present();
        }
    }

    public Dismiss() {
        if (this.loading) {
            this.loading.dismiss();
            this.loading = null;
        }
    }
}