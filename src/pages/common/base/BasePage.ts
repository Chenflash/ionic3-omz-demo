import { OnInit } from '@angular/core';
import { ToastController } from 'ionic-angular';

export abstract class BasePage implements OnInit {
    constructor() { }

    protected OnInitialize() { }

    ngOnInit() {
        this.OnInitialize();
    }
}