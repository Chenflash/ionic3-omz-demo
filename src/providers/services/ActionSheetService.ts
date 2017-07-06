import { Injectable } from '@angular/core';
import { ActionSheetController, ActionSheet } from 'ionic-angular';
import { BusinessPage } from '../../pages/common/base/BusinessPage';

@Injectable()
export class ActionSheetService {
    constructor(
        private actionsheetCtrl: ActionSheetController
    ) { }

    public Init(title: string, subTitle: string,
        buttons: { text?: string; role?: string; handler?: () => boolean | void; }[]): ActionSheet {
        if (buttons) {
            return this.actionsheetCtrl.create({
                title: title,
                subTitle: subTitle,
                buttons: buttons
            })
        }
    }
}