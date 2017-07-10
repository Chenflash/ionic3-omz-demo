import { Component, Inject } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FavoriteListBasePage } from '../common/base/FavoriteListBasePage';
import { BusinessService } from '../../providers/services/BusinessService';
import { ServicesPackage } from '../../providers/services/ServicesPackage';
import { CONTROLLER } from '../common/tokens/PageTokens';

@Component({
    templateUrl: "UnitFavorite.html",
    providers: [
        { provide: CONTROLLER, useValue: "UnitList" }
    ]
})
export class UnitFavoritePage extends FavoriteListBasePage {
    constructor(
        protected navCtrl: NavController,
        protected navParam: NavParams,
        protected businessService: BusinessService,
        protected services: ServicesPackage,
        @Inject(CONTROLLER) protected controllerName: string
    ) {
        super(controllerName,
            businessService,
            services,
            navCtrl
        );
    }
}