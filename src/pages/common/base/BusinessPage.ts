import { BasePage } from './BasePage';
import { BusinessService } from '../../../providers/services/BusinessService';

export class BusinessPage extends BasePage {

    protected controller: string;
    protected dataBind: any;
    protected extraInfo: any;
    private service: BusinessService;

    constructor(
        controller: string,
        businessService: BusinessService
    ) {
        super();

        this.controller = controller;
        this.service = businessService;
    }

    protected OnInitialize() {
        this.OnQery();
    }

    protected OnQery(): void {
        this.service.Query(this.controller, this.dataBind, this.extraInfo, this.OnQuerySuccess)
    }

    protected OnQuerySuccess(data: any, extroInfo: any): void {
        console.dir(data);
    }

    protected OnValidation(): void { }

    protected OnAddNew(): void { }

    protected OnUpdate(): void { }

    protected OnDelete(): void { }
}