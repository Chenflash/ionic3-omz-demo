import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AmmicNavbarComponent } from './ammic-navbar/ammic-navbar.component';
import { AmmicFavoriteListComponent } from './ammic-favorite-list/ammic-favorite-list.component';
import { AmmicTextBoxComponent } from './ammic-textbox/ammic-textbox.component';

@NgModule({
    declarations: [
        AmmicNavbarComponent,
        AmmicFavoriteListComponent,
        AmmicTextBoxComponent
    ],
    imports: [
        IonicPageModule
    ],
    exports: [
        AmmicNavbarComponent,
        AmmicFavoriteListComponent,
        AmmicTextBoxComponent
    ]
})
export class ComponentModule { }