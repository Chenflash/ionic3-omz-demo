import { NavParams } from 'ionic-angular';
import { FormGroup } from '@angular/forms';
import { BusinessPage } from './BusinessPage';
import { PDAPageOpenOption } from '../../../models/PDAPageOpenOption';
import { BusinessService } from '../../../providers/services/BusinessService';
import { ServicesPackage } from '../../../providers/services/ServicesPackage';

export class EntryBasePage extends BusinessPage {
    protected entryForm: FormGroup;
    protected dataBind: any = {};
    protected extraInfo: any = {};
    protected dataDto: any = {};

    private controller: string;
    private collection: string;
    private service: BusinessService;

    constructor(
        controller: string,
        masterCollection: string,
        protected navParam: NavParams,
        protected businessService: BusinessService,
        protected services: ServicesPackage
    ) {
        super(services);

        this.controller = controller;
        this.collection = masterCollection;
        this.service = businessService;

        let options: PDAPageOpenOption = this.navParam.data;
        if (options) {
            this.dataBind.CONDITION = [];
            if (options.Data)
                this.dataBind.CONDITION.push(options.Data);
        }

        this.dataBind[this.collection] = [];
    }

    protected OnInitialize() {
        this.OnPreQuery();
        this.OnQery();
    }

    protected OnQery(): void {
        this.services.LoadingService.ShowWaitLoading();
        this.service.Query(this.controller, this.dataBind, this.extraInfo)
            .subscribe(response => {
                if (!response.ResponseException) {
                    // query success
                    this.OnQuerySuccess(response.Data, response.ExtraInfo);
                    // dismiss loading
                    this.services.LoadingService.Dismiss();
                    // post query
                    this.OnPostQuery();
                } else {
                    // dismiss loading
                    this.services.LoadingService.Dismiss();
                    // show alert
                    this.ProcessResponseException(response.ResponseException);
                }
            },
            error => {
                // dismiss loading
                this.services.LoadingService.Dismiss();
                // show alert
                this.services.AlertService.ShowError("system", error);
            });
    }

    protected OnQuerySuccess(data: any, extraInfo: any) {
        this.dataBind = data;
        this.extraInfo = extraInfo;
    }

    protected OnPreQuery() { }
    protected OnPostQuery() { }

    protected OnValidation(): void { }

    protected OnAddNew(): void { }

    protected OnUpdate({ value }): void {
        this.OnPreUpdate();

        let dataDto = JSON.parse(JSON.stringify(this.dataBind));
        dataDto[this.collection] = [];
        dataDto[this.collection].push(value);

        this.services.LoadingService.ShowWaitLoading();
        this.service.Update(this.controller, dataDto, this.extraInfo)
            .subscribe(response => {
                if (!response.ResponseException) {
                    // query success
                    this.OnUpdateSuccess(response.Data, response.ExtraInfo);
                    // dismiss loading
                    this.services.LoadingService.Dismiss();
                    // show toast
                    this.services.ToastService.Show("Update Successfully.");
                    // post query
                    this.OnPostUpdate();
                } else {
                    // dismiss loading
                    this.services.LoadingService.Dismiss();
                    // show alert
                    this.ProcessResponseException(response.ResponseException);
                }
            },
            error => {
                // show alert
                this.services.AlertService.ShowError("system", error);
                // dismiss loading
                this.services.LoadingService.Dismiss();
            });
    }

    protected OnUpdateSuccess(data: any, extraInfo: any) {
        this.dataBind = data;
        this.extraInfo = extraInfo;
    }

    protected OnPreUpdate() { }
    protected OnPostUpdate() { }

    protected OnDelete(): void { }
}
