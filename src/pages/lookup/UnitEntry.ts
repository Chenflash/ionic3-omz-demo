import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NavController, NavParams } from 'ionic-angular';
import { EntryBasePage } from '../common/base/EntryBasePage';
import { BusinessService } from '../../providers/services/BusinessService';
import { LoadingService } from '../../providers/services/LoadingService';
import { AlertService } from '../../providers/services/AlertService';
import { ModalService } from '../../providers/services/ModalService';
import { Session } from '../../providers/sessions/session';

@Component({
    templateUrl: "UnitEntry.html"
})
export class UnitEntryPage extends EntryBasePage {
    constructor(
        protected navCtrl: NavController,
        protected navParam: NavParams,
        protected formBuilder: FormBuilder,
        protected businessService: BusinessService,
        protected loadingService: LoadingService,
        protected alertService: AlertService,
        protected modalService: ModalService,
        protected session: Session
    ) {
        super("Unit",
            navParam,
            businessService,
            loadingService,
            alertService,
            modalService,
            session
        );

        this.dataBind.UNITT = [];
    }

    protected OnInitialize() {
        super.OnInitialize();
        this.entryForm = this.formBuilder.group({
            FUNIT: ['', [Validators.required]],
            FUNITSN: ['']
        });
    }

    protected OnUpdate({ value, valid }): void {
        let dataDto = JSON.parse(JSON.stringify(this.dataBind));
        dataDto.UNITT = [];
        dataDto.UNITT.push(value);

        super.OnUpdate(dataDto);
    }
}