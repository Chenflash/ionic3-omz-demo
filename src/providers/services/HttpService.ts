import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { PDAResponse } from '../../models/PDAResponse';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class HttpService {
    constructor(
        private http: Http,
    ) { }

    public Post(controller: string, action: string, data: any): Observable<PDAResponse> {
        return this.http.post(`http://localhost:8088/api/${controller}/${action}`, data)
            .map(result => <PDAResponse>(result.json()))
    }
}