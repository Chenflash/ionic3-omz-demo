import { Injectable } from '@angular/core';
import { ActionSheetController } from 'ionic-angular';

@Injectable()
export class ActionSheetService {
    constructor(
        private actionsheetCtrl: ActionSheetController
    ) { }

    public Show(item: any) {
        this.actionsheetCtrl.create({
            buttons: [
                {
                    text: 'AddNew',
                    handler: () => {
                        console.log('AddNew');
                    }
                }, {
                    text: 'Modify',
                    handler: () => {
                        console.log('Modify');
                    }
                },
                {
                    text: 'Delete',
                    role: 'destructive',
                    handler: () => {
                        console.log('Delete');
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: () => {
                        console.log('Cancel');
                    }
                }
            ]
        });
    }
}