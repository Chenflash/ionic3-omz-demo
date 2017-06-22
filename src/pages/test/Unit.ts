import { Component } from '@angular/core';
import { BusinessPage } from '../common/base/BusinessPage';
import { BusinessService } from '../../providers/services/BusinessService';

@Component({
    templateUrl: "Unit.html"
})
export class UnitPage extends BusinessPage {

    constructor(
        protected businessService: BusinessService
    ) {
        super("Unit", businessService);
    }
}