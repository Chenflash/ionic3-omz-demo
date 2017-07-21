import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
import { EntryBasePage } from '../common/base/EntryBasePage';
import { BusinessService } from '../../providers/services/BusinessService';
import { ServicesPackage } from '../../providers/services/ServicesPackage';
import { MAIN_COLLECTION, CONTROLLER } from '../common/tokens/PageTokens';
import { AmmicKeyfieldDirective } from '../../directives/ammic-keyfield/ammic-keyfield.directive';

@IonicPage()
@Component({
    templateUrl: "UnitEntry.html",
    providers: [
        { provide: MAIN_COLLECTION, useValue: "UNITT" },
        { provide: CONTROLLER, useValue: "Unit" }
    ]
})
export class UnitEntryPage extends EntryBasePage{
    constructor(
        protected navCtrl: NavController,
        protected navParam: NavParams,
        protected formBuilder: FormBuilder,
        protected businessService: BusinessService,
        protected services: ServicesPackage,
        @Inject(MAIN_COLLECTION) protected masterCollection: string,
        @Inject(CONTROLLER) protected controllerName: string,
    ) {
        super(controllerName,
            masterCollection,
            navCtrl,
            navParam,
            businessService,
            services
        );
    }

    protected OnInitialize() {
        super.OnInitialize();
        this.entryForm = this.formBuilder.group({
            FUNIT: ['', [Validators.required]],
            FUNITSN: ['']
        });
    }
}