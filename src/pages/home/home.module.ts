import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import { ComponentModule } from '../../components/components.module';

@NgModule({
    declarations: [
        HomePage
    ],
    imports: [
        ComponentModule,
        IonicPageModule.forChild(HomePage)
    ],
    exports: [
        HomePage
    ]
})
export class HomePageModule { }