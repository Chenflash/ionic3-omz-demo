import { Injectable } from '@angular/core';
import { HttpService } from './HttpService';
import { LoadingService } from './LoadingService';
import { AlertService } from './AlertService';
import { ToastService } from './ToastService';
import { Session } from '../sessions/session';

@Injectable()
export class BusinessService {
    constructor(
        private httpService: HttpService,
        private session: Session,
        private loadingService: LoadingService,
        private alertService: AlertService,
        private toastService: ToastService
    ) {
    }

    public Query(controller: string, data: any, extraInfo: any, onQuerySuccess: (resultData: any, extraInfo: any) => void) {

        this.loadingService.ShowWaitLoading();

        let requestData = {
            SysInfo: {
                SessionID: this.session.SessionID,
                FunctionID: null, //TODO: Function ID
                Updteprg: null, //TODO: Update Programme
            },
            Data: data,
            ExtraInfo: extraInfo
        }

        this.httpService.Post(controller, "Query", requestData,
            (data, extraInfo) => {
                onQuerySuccess(data, extraInfo);
                this.loadingService.Dismiss();
            });
    }
}