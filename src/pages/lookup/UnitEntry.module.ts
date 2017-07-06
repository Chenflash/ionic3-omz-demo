import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UnitEntryPage } from './UnitEntry';

@NgModule({
  declarations: [
    UnitEntryPage,
  ],
  imports: [
    IonicPageModule.forChild(UnitEntryPage),
  ],
  exports: [
    UnitEntryPage
  ]
})
export class UnitEntryPageModule {}