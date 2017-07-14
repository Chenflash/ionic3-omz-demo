import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AmmicNavbarComponent } from './ammic-navbar/ammic-navbar';
import { AmmicFavoriteListComponent } from './ammic-favorite-list/ammic-favorite-list'

@NgModule({
    declarations: [
        AmmicNavbarComponent,
        AmmicFavoriteListComponent
    ],
    imports: [
        IonicPageModule
    ],
    exports: [
        AmmicNavbarComponent,
        AmmicFavoriteListComponent
    ]
})
export class ComponentModule { }