import { BusinessPage } from './BusinessPage';
import { BusinessService } from '../../../providers/services/BusinessService';
import { LoadingService } from '../../../providers/services/LoadingService';
import { AlertService } from '../../../providers/services/AlertService';
import { ModalService } from '../../../providers/services/ModalService';
import { Session } from '../../../providers/sessions/session';

export class FavoriteListBasePage extends BusinessPage {
    protected dataBind: any = {};
    protected extraInfo: any = {};

    private controller: string;
    private service: BusinessService;

    constructor(
        controller: string,
        protected businessService: BusinessService,
        protected loadingService: LoadingService,
        protected alertService: AlertService,
        protected modalService: ModalService,
        protected session: Session
    ) {
        super(alertService, modalService, session);

        this.controller = controller;
        this.service = businessService;
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
                    // dismiss loading
                    this.loadingService.Dismiss();
                    // show alert
                    this.ProcessResponseException(response.ResponseException);
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
}