import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { PDAResponse } from '../../models/PDAResponse';
import { APPCONFIG_TOKEN } from '../../app/app.config';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class HttpService {
    constructor(
        private http: Http,
        @Inject(APPCONFIG_TOKEN) private appConfig
    ) { }

    public Post(controller: string, action: string, data: any): Observable<PDAResponse> {
        debugger;
        return this.http.post(`${this.appConfig.WebApiUrl}/${controller}/${action}`, data)
            .map(result => <PDAResponse>(result.json()))
    }
}