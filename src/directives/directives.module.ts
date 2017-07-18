import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AmmicKeyfieldDirective } from './ammic-keyfield/ammic-keyfield.directive';

@NgModule({
    declarations: [
        AmmicKeyfieldDirective
    ],
    imports: [
        IonicPageModule
    ],
    exports: [
        AmmicKeyfieldDirective
    ]
})
export class DirectivesModule{}