import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AlertService } from './AlertService';
import { LoadingService } from './LoadingService';

@Injectable()
export class HttpService {
    constructor(
        private http: Http,
        private alertService: AlertService,
        private loadingService: LoadingService
    ) { }

    public Post(controller: string, action: string, data: any, onSuccess: (resultData: any, extraInfo: any) => void) {
        this.http.post(`http://localhost:8088/api/${controller}/${action}`, data)
            .map(result => result.json())
            .subscribe(result => {
                if (!result.ResponseException) {
                    // success method
                    onSuccess(result.Data, result.extraInfo);
                } else {
                    // dismiss loading
                    this.loadingService.Dismiss();
                    // display alert
                    this.alertService.ShowError(
                        result.ResponseException.ErrorID,
                        result.ResponseException.ErrorMessage);
                }
            });
    }
}