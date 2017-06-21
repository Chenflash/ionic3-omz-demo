import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class BusinessService {
    constructor(
        private http: Http
    ) {
    }

    public OnQery(controller: string, action: string): void { }
}