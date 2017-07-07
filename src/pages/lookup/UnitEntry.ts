import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
import { EntryBasePage } from '../common/base/EntryBasePage';
import { BusinessService } from '../../providers/services/BusinessService';
import { ServicesPackage } from '../../providers/services/ServicesPackage';
import { PAGE_MASTER_COLLECTION_TOKEN, PAGE_CONTROLLER_TOKEN } from '../common/tokens/PageTokens';

@IonicPage()
@Component({
    templateUrl: "UnitEntry.html",
    providers: [
        { provide: PAGE_MASTER_COLLECTION_TOKEN, useValue: "UNITT" },
        { provide: PAGE_CONTROLLER_TOKEN, useValue: "Unit" }
    ]
})
export class UnitEntryPage extends EntryBasePage {
    constructor(
        protected navCtrl: NavController,
        protected navParam: NavParams,
        protected formBuilder: FormBuilder,
        protected businessService: BusinessService,
        protected services: ServicesPackage,
        @Inject(PAGE_MASTER_COLLECTION_TOKEN) protected masterCollection: string,
        @Inject(PAGE_CONTROLLER_TOKEN) protected controllerName: string,
    ) {
        super(controllerName,
            masterCollection,
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