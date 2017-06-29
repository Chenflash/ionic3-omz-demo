import { NavController, NavParams } from 'ionic-angular';
import { FormGroup } from '@angular/forms';
import { BasePage } from './BasePage';
import { BusinessService } from '../../../providers/services/BusinessService';
import { LoadingService } from '../../../providers/services/LoadingService';
import { AlertService } from '../../../providers/services/AlertService';

export class EntryBasePage extends BasePage {
    protected entryForm: FormGroup;
    protected dataBind: any = {};
    protected extraInfo: any = {};
    protected dataDto: any = {};

    private controller: string;
    private service: BusinessService;

    constructor(
        controller: string,
        protected navParam: NavParams,
        protected businessService: BusinessService,
        protected loadingService: LoadingService,
        protected alertService: AlertService,
    ) {
        super();
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
        this.loadingService.ShowWaitLoading();
        this.service.Query(this.controller, this.dataBind, this.extraInfo)
            .subscribe(response => {
                if (!response.ResponseException) {
                    // query success
                    this.OnQuerySuccess(response.Data, response.ExtraInfo);
                    // dismiss loading
                    this.loadingService.Dismiss();
                    // post query
                    this.OnPostQuery();
                } else {
                    // show alert
                    this.alertService.ShowError(
                        response.ResponseException.ErrorID,
                        response.ResponseException.ErrorMessage);
                    // dismiss loading
                    this.loadingService.Dismiss();
                }
            },
            error => {
                // show alert
                this.alertService.ShowError("system", error);
                // dismiss loading
                this.loadingService.Dismiss();
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
        this.loadingService.ShowWaitLoading();
        this.service.Update(this.controller, dataDto, this.extraInfo)
            .subscribe(response => {
                if (!response.ResponseException) {
                    // query success
                    this.OnUpdateSuccess(response.Data, response.ExtraInfo);
                    // dismiss loading
                    this.loadingService.Dismiss();
                    // post query
                    this.OnPostUpdate();
                } else {
                    // show alert
                    this.alertService.ShowError(
                        response.ResponseException.ErrorID,
                        response.ResponseException.ErrorMessage);
                    // dismiss loading
                    this.loadingService.Dismiss();
                }
            },
            error => {
                // show alert
                this.alertService.ShowError("system", error);
                // dismiss loading
                this.loadingService.Dismiss();
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