import { Injectable } from '@angular/core';
import { AlertService } from './AlertService';
import { HttpService } from './HttpService';
import { LoadingService } from './LoadingService';
import { ModalService } from './ModalService';
import { ToastService } from './ToastService';

@Injectable()
export class ServicesPackage {
    constructor(
        private alertService: AlertService,
        private httpService: HttpService,
        private loadingService: LoadingService,
        private modalService: ModalService,
        private toastService: ToastService,
    ) { }

    public get AlertService() {
        return this.alertService;
    }

    public get HttpService() {
        return this.httpService;
    }

    public get LoadingService() {
        return this.loadingService;
    }

    public get ModalService() {
        return this.modalService;
    }

    public get ToastService() {
        return this.toastService;
    }
}