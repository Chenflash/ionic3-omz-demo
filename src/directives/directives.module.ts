import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AmmicKeyfieldDirective } from './ammic-keyfield/ammic-keyfield.directive';
import { AmmicValidationDirective } from './ammic-validation/ammic-validation.directive';

@NgModule({
    declarations: [
        AmmicKeyfieldDirective,
        AmmicValidationDirective
    ],
    imports: [
        IonicPageModule
    ],
    exports: [
        AmmicKeyfieldDirective,
        AmmicValidationDirective
    ]
})
export class DirectivesModule{}