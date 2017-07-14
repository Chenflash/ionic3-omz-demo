import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UnitFavoritePage } from './UnitFavorite';
import { ComponentModule } from '../../components/components.module';

@NgModule({
    declarations: [
        UnitFavoritePage
    ],
    imports: [
        ComponentModule,
        IonicPageModule.forChild(UnitFavoritePage)
    ],
    exports: [
        UnitFavoritePage
    ]
})
export class UnitEntryPageModule { }