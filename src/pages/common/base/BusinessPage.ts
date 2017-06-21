import { BasePage } from './BasePage';
import { Http } from '@angular/http';

export class BusinessPage extends BasePage {

    protected OnInitialize() {
        super.OnInitialize();
    }

    protected OnQery(http: Http): void { }

    protected OnValidation(http: Http): void { }

    protected OnAddNew(http: Http): void { }

    protected OnUpdate(http: Http): void { }

    protected OnDelete(http: Http): void { }
}