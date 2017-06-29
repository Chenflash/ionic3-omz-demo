import { Injectable } from '@angular/core';
import { HttpService } from './HttpService';
import { Session } from '../sessions/session';
import { PDARequest } from '../../models/PDARequest';
import { PDAResponse } from '../../models/PDAResponse';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class BusinessService {
    constructor(
        private httpService: HttpService,
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

        return this.httpService.Post(controller, "Query", requestData);
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

         return this.httpService.Post(controller, "Update", requestData);
    }
}