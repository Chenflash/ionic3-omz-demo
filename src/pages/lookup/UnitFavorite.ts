import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FavoriteListBasePage } from '../common/base/FavoriteListBasePage';
import { UnitEntryPage } from './UnitEntry';
import { BusinessService } from '../../providers/services/BusinessService';
import { LoadingService } from '../../providers/services/LoadingService';
import { AlertService } from '../../providers/services/AlertService';
import { ModalService } from '../../providers/services/ModalService';
import { Session } from '../../providers/sessions/session';

@Component({
    templateUrl: "UnitFavorite.html"
})
export class UnitFavoritePage extends FavoriteListBasePage {

    constructor(
        protected navCtrl: NavController,
        protected navParam: NavParams,
        protected businessService: BusinessService,
        protected loadingService: LoadingService,
        protected alertService: AlertService,
        protected modalService: ModalService,
        protected session: Session
    ) {
        super("Unit",
            businessService,
            loadingService,
            alertService,
            modalService,
            session
        );
    }

    onItemClick(item, event) {
        this.navCtrl.push(UnitEntryPage, item);
    }
}