import { ViewChildren, QueryList, OnDestroy } from '@angular/core';
import { NavParams, NavController } from 'ionic-angular';
import { FormGroup } from '@angular/forms';
import { BusinessPage } from './BusinessPage';
import { PDAPageOpenOption, PDAPageOpenMode } from '../../../models/PDAPageOpenOption';
import { BusinessService } from '../../../providers/services/BusinessService';
import { ServicesPackage } from '../../../providers/services/ServicesPackage';
import { AmmicKeyfieldDirective } from '../../../directives/ammic-keyfield/ammic-keyfield.directive';
import { AmmicTextBoxComponent } from '../../../components/ammic-textbox/ammic-textbox.component';
import { AmmicInputBaseComponent } from '../../../components/base/AmmicInputBaseComponent';

export class EntryBasePage extends BusinessPage implements OnDestroy {
    @ViewChildren(AmmicKeyfieldDirective)
    keyfields: QueryList<AmmicKeyfieldDirective>;
    @ViewChildren(AmmicTextBoxComponent)
    textboxComponents: QueryList<AmmicTextBoxComponent>;

    // all input components in page
    protected inputComponents: AmmicInputBaseComponent[] = [];

    protected entryForm: FormGroup;
    protected dataBind: any = {};
    protected extraInfo: any = {};
    protected dataDto: any = {};
    protected openMode: PDAPageOpenMode = PDAPageOpenMode.None;

    private controller: string;
    private collection: string;
    private service: BusinessService;

    constructor(
        controller: string,
        mainCollection: string,
        protected navCtrl: NavController,
        protected navParam: NavParams,
        protected businessService: BusinessService,
        protected services: ServicesPackage
    ) {
        super(services);

        this.controller = controller;
        this.collection = mainCollection;
        this.service = businessService;
        // create condition
        let options: PDAPageOpenOption = this.navParam.data;
        this.openMode = options.OpenMode;
        if (options) {
            this.dataBind.CONDITION = [];
            if (options.Data)
                this.dataBind.CONDITION.push(options.Data);
        }
        // initialize main collection
        this.dataBind[this.collection] = [];
    }

    protected OnInitialize() {
        this.OnPreQuery();
        this.OnQuery();
    }

    protected OnAfterViewInit() {
        this.InitializeComponents();
    }

    protected InitializeComponents() {
        this.InitializeKeyFieldComponents();
        this.InitializeInputComponents();
    }

    protected InitializeKeyFieldComponents() {
        // register key fields
        if (this.openMode != PDAPageOpenMode.AddNew) {
            this.keyfields.forEach(keyfield => keyfield.setDisplay());
        }
    }

    protected InitializeInputComponents() {
        // merge input components
        // TODO: merge other input components.
        this.inputComponents = this.textboxComponents.toArray();

        // register validation fields
        this.inputComponents
            .filter(inputComponent => inputComponent.validation)
            .forEach(inputComponent => {
                inputComponent.OnValidation.subscribe(event => {
                    this.OnValidation(this.collection, 0, event.BindField, event.Component);
                })
            });
    }

    protected OnQuery(): void {
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

        if (this.openMode != PDAPageOpenMode.AddNew) {
            // patch value to form
            this.entryForm.patchValue(data[this.collection][0]);
        }

        // refresh input value
        this.inputComponents.forEach(inputComponent => inputComponent.RefreshInputValue());
    }

    protected OnPreQuery() { }
    protected OnPostQuery() { }

    protected OnAddNew(value: any): void {
        // do something before update
        this.OnPreAddNew();
        // create data transfer object
        let dataDto = JSON.parse(JSON.stringify(this.dataBind));
        dataDto[this.collection] = [];
        dataDto[this.collection].push(value);
        // show waiting loading
        this.services.LoadingService.ShowWaitLoading();
        // update
        this.service.AddNew(this.controller, dataDto, this.extraInfo)
            .subscribe(response => {
                if (!response.ResponseException) {
                    // query success
                    this.OnAddNewSuccess(response.Data, response.ExtraInfo);
                    // dismiss loading
                    this.services.LoadingService.Dismiss();
                    // show toast
                    this.services.ToastService.Show("Create Successfully.");
                    // post query
                    this.OnPostAddNew();
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

    protected OnAddNewSuccess(data: any, extraInfo: any) {
        this.dataBind = data;
        this.extraInfo = extraInfo;
        // patch value to form
        this.entryForm.patchValue(data[this.collection][0]);
        // change page mode
        this.openMode = PDAPageOpenMode.Modify;
    }

    protected OnPreAddNew() { }
    protected OnPostAddNew() { }

    protected OnUpdate(value: any): void {
        // do something before update
        this.OnPreUpdate();
        // create data transfer object
        let dataDto = JSON.parse(JSON.stringify(this.dataBind));
        dataDto[this.collection] = [];
        dataDto[this.collection].push(value);
        // show waiting loading
        this.services.LoadingService.ShowWaitLoading();
        // update
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
        // patch value to form
        this.entryForm.patchValue(data[this.collection][0]);
    }

    protected OnPreUpdate() { }
    protected OnPostUpdate() { }

    protected OnDelete(value: any): void {
        // do something before update
        this.OnPreDelete();
        // create data transfer object
        let dataDto = JSON.parse(JSON.stringify(this.dataBind));
        dataDto[this.collection] = [];
        dataDto[this.collection].push(value);
        // show waiting loading
        this.services.LoadingService.ShowWaitLoading();
        // update
        this.service.Delete(this.controller, dataDto, this.extraInfo)
            .subscribe(response => {
                if (!response.ResponseException) {
                    // query success
                    this.OnDeleteSuccess(response.Data, response.ExtraInfo);
                    // dismiss loading
                    this.services.LoadingService.Dismiss();
                    // show toast
                    this.services.ToastService.Show("Delete Successfully.");
                    // post query
                    this.OnPostDelete();
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

    protected OnDeleteSuccess(data: any, extraInfo: any) {
        this.navCtrl.pop();
    }

    protected OnPreDelete() { }
    protected OnPostDelete() { }

    protected OnSubmit(form: any) {
        let { value } = form;
        switch (this.openMode) {
            case PDAPageOpenMode.AddNew:
                this.OnAddNew(value);
                break;

            case PDAPageOpenMode.Modify:
                this.OnUpdate(value);
                break;

            case PDAPageOpenMode.Delete:
                this.services.AlertService.ShowConfirmForDelete(() => this.OnDelete(value));
                break;

            default:
                break;
        }
    }

    public OnValidation(currentTable: string, currentIndex: number, currentField: string, component: AmmicInputBaseComponent = null) {
        // create data transfer object
        let dataDto = JSON.parse(JSON.stringify(this.dataBind));
        dataDto[this.collection] = [];
        dataDto[this.collection].push(this.entryForm.value);
        // set extraInfo
        this.extraInfo = this.extraInfo || {};
        this.extraInfo.currentTable = currentTable;
        this.extraInfo.currentIndex = 0;
        this.extraInfo.currentField = currentField;
        // validation
        this.service.Validation(this.controller, dataDto, this.extraInfo)
            .subscribe(response => {
                if (!response.ResponseException) {
                    // query success
                    this.OnValidationSuccess(response.Data, response.ExtraInfo, component);
                } else {
                    // show alert
                    this.ProcessResponseException(response.ResponseException);
                }
            },
            error => {
                // show alert
                this.services.AlertService.ShowError("system", error);
            });
    }

    protected OnValidationSuccess(data: any, extraInfo: any, component: AmmicInputBaseComponent) {
        this.dataBind = data;
        this.extraInfo = extraInfo;
        // patch value to form
        this.entryForm.patchValue(data[this.collection][0]);
        // refresh input value
        if (component != null) {
            component.RefreshInputValue();
        }
    }

    ngOnDestroy() { }
}
