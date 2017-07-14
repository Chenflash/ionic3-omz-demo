import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UnitEntryPage } from './UnitEntry';
import { ComponentModule } from '../../components/components.module';

@NgModule({
  declarations: [
    UnitEntryPage
  ],
  imports: [
    ComponentModule,
    IonicPageModule.forChild(UnitEntryPage)
  ],
  exports: [
    UnitEntryPage
  ]
})
export class UnitEntryPageModule {}