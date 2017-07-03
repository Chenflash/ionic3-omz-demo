import { Injectable } from '@angular/core';
import { ServicesPackage } from './ServicesPackage';
import { Session } from '../sessions/session';
import { PDARequest } from '../../models/PDARequest';
import { PDAResponse } from '../../models/PDAResponse';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class BusinessService {
    constructor(
        private services: ServicesPackage,
        private session: Session
    ) {
    }

    public Query(controller: string, data: any, extraInfo: any): Observable<PDAResponse> {
        let requestData: PDARequest = {
            SysInfo: {
                SessionID: this.session.SessionID,
                FunctionID: null, //TODO: Function ID
                Updteprg: null, //TODO: Update Programme
            },
            Data: data,
            ExtraInfo: extraInfo
        };

        return this.services.HttpService.Post(controller, "Query", requestData);
    }

    public Update(controller: string, data: any, extraInfo: any): Observable<PDAResponse> {
        let requestData: PDARequest = {
            SysInfo: {
                SessionID: this.session.SessionID,
                FunctionID: null, //TODO: Function ID
                Updteprg: null, //TODO: Update Programme
            },
            Data: data,
            ExtraInfo: extraInfo
        };

         return this.services.HttpService.Post(controller, "Update", requestData);
    }
}