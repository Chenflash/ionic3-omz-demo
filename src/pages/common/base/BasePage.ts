import { OnInit } from '@angular/core';
import { ToastController } from 'ionic-angular';

export class BasePage implements OnInit {
    constructor() { }
    
    //constructor(protected toastCtrl: ToastController) { }

    ngOnInit() {
        console.dir('BasePage：ngOnInit method has been called.');
    }
}