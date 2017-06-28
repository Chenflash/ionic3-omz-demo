import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BusinessPage } from '../common/base/BusinessPage';
import { BusinessService } from '../../providers/services/BusinessService';
import { LoadingService } from '../../providers/services/LoadingService';
import { AlertService } from '../../providers/services/AlertService';

@Component({
    templateUrl: "UnitEntry.html"
})
export class UnitEntryPage extends BusinessPage {
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

        if(this.navParam.data){
            this.dataBind.UNITT = [];
            this.dataBind.UNITT.push(this.navParam.data);
        }
    }
}