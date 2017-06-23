import { Component } from '@angular/core';
import { BusinessPage } from '../common/base/BusinessPage';
import { BusinessService } from '../../providers/services/BusinessService';
import { LoadingService } from '../../providers/services/LoadingService';
import { AlertService } from '../../providers/services/AlertService';

@Component({
    templateUrl: "Unit.html"
})
export class UnitPage extends BusinessPage {

    constructor(
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
}