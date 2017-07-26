import { Injectable } from '@angular/core';
import { ServicesPackage } from './ServicesPackage';
import { Session } from '../sessions/session';
import { PDARequest } from '../../models/PDARequest';
import { PDAResponse } from '../../models/PDAResponse';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class BusinessService {
    constructor(
        private services: ServicesPackage
    ) {
    }

    public Query(controller: string, data: any, extraInfo: any): Observable<PDAResponse> {
        let requestData: PDARequest = {
            SysInfo: {
                SessionID: Session.Instance.SessionID,
                FunctionID: null, //TODO: Function ID
                Updteprg: null, //TODO: Update Programme
            },
            Data: data,
            ExtraInfo: extraInfo
        };

        return this.services.HttpService.Post(controller, "Query", requestData);
    }

    public AddNew(controller: string, data: any, extraInfo: any): Observable<PDAResponse> {
        let requestData: PDARequest = {
            SysInfo: {
                SessionID: Session.Instance.SessionID,
                FunctionID: null, //TODO: Function ID
                Updteprg: null, //TODO: Update Programme
            },
            Data: data,
            ExtraInfo: extraInfo
        };

        return this.services.HttpService.Post(controller, "AddNew", requestData);
    }

    public Update(controller: string, data: any, extraInfo: any): Observable<PDAResponse> {
        let requestData: PDARequest = {
            SysInfo: {
                SessionID: Session.Instance.SessionID,
                FunctionID: null, //TODO: Function ID
                Updteprg: null, //TODO: Update Programme
            },
            Data: data,
            ExtraInfo: extraInfo
        };

        return this.services.HttpService.Post(controller, "Update", requestData);
    }

    public Delete(controller: string, data: any, extraInfo: any): Observable<PDAResponse> {
        let requestData: PDARequest = {
            SysInfo: {
                SessionID: Session.Instance.SessionID,
                FunctionID: null, //TODO: Function ID
                Updteprg: null, //TODO: Update Programme
            },
            Data: data,
            ExtraInfo: extraInfo
        };

        return this.services.HttpService.Post(controller, "Delete", requestData);
    }

    public Validation(controller: string, data: any, extraInfo: any): Observable<PDAResponse> {
         let requestData: PDARequest = {
            SysInfo: {
                SessionID: Session.Instance.SessionID,
                FunctionID: null, //TODO: Function ID
                Updteprg: null, //TODO: Update Programme
            },
            Data: data,
            ExtraInfo: extraInfo
        };

        return this.services.HttpService.Post(controller, "Validate", requestData);
    }
}