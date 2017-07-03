import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FavoriteListBasePage } from '../common/base/FavoriteListBasePage';
import { UnitEntryPage } from './UnitEntry';
import { BusinessService } from '../../providers/services/BusinessService';
import { ServicesPackage } from '../../providers/services/ServicesPackage';
import { Session } from '../../providers/sessions/session';

@Component({
    templateUrl: "UnitFavorite.html"
})
export class UnitFavoritePage extends FavoriteListBasePage {

    constructor(
        protected navCtrl: NavController,
        protected navParam: NavParams,
        protected businessService: BusinessService,
        protected services: ServicesPackage,
        protected session: Session
    ) {
        super("Unit",
            businessService,
            services,
            session
        );
    }

    onItemClick(item, event) {
        this.navCtrl.push(UnitEntryPage, item);
    }
}