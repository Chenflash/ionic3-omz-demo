import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FavoriteListBasePage } from '../common/base/FavoriteListBasePage';
import { UnitEntryPage } from './UnitEntry';
import { BusinessService } from '../../providers/services/BusinessService';
import { LoadingService } from '../../providers/services/LoadingService';
import { AlertService } from '../../providers/services/AlertService';

@Component({
    templateUrl: "UnitFavorite.html"
})
export class UnitFavoritePage extends FavoriteListBasePage {

    constructor(
        protected navCtrl: NavController,
        protected navParam: NavParams,
        protected businessService: BusinessService,
        protected loadingService: LoadingService,
        protected alertService: AlertService
    ) {
        super("Unit",
            businessService,
            loadingService,
            alertService
        );
    }

    onItemClick(item, event) {
        this.navCtrl.push(UnitEntryPage, item);
    }
}