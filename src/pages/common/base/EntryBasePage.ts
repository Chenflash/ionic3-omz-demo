import { NavParams } from 'ionic-angular';
import { FormGroup } from '@angular/forms';
import { BusinessPage } from './BusinessPage';
import { FormOpenMode } from './FormOpenMode';
import { BusinessService } from '../../../providers/services/BusinessService';
import { ServicesPackage } from '../../../providers/services/ServicesPackage';

export class EntryBasePage extends BusinessPage {
    protected entryForm: FormGroup;
    protected dataBind: any = {};
    protected extraInfo: any = {};
    protected dataDto: any = {};

    private openMode: FormOpenMode;
    private controller: string;
    private service: BusinessService;

    constructor(
        controller: string,
        protected navParam: NavParams,
        protected businessService: BusinessService,
        protected services: ServicesPackage
    ) {
        super(services);

        this.controller = controller;
        this.service = businessService;
        
        if (this.navParam.data) {
            this.dataBind.CONDITION = [];
            this.dataBind.CONDITION.push(this.navParam.data);
        }
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

    protected OnUpdate(dataDto: any): void {
        this.OnPreUpdate();
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
