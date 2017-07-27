import { OnInit, AfterViewInit } from '@angular/core';

export abstract class BasePage implements OnInit, AfterViewInit {
    constructor() { }

    protected OnInitialize() { }
    protected OnAfterViewInit() { }

    ngOnInit() {
        this.OnInitialize();
    }

    ngAfterViewInit() {
        this.OnAfterViewInit();
    }
}