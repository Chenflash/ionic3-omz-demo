import { OnInit } from '@angular/core';

export abstract class BasePage implements OnInit {
    constructor() { }

    protected OnInitialize() { }

    ngOnInit() {
        this.OnInitialize();
    }
}