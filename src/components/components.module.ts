import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AmmicNavbarComponent } from './ammic-navbar/ammic-navbar.component';
import { AmmicFavoriteListComponent } from './ammic-favorite-list/ammic-favorite-list.component'

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