import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UnitEntryPage } from './UnitEntry';
import { ComponentModule } from '../../components/components.module';
import { DirectivesModule } from '../../directives/directives.module';

@NgModule({
  declarations: [
    UnitEntryPage,
  ],
  imports: [
    ComponentModule,
    DirectivesModule,
    IonicPageModule.forChild(UnitEntryPage),
  ],
  exports: [
    UnitEntryPage
  ]
})
export class UnitEntryPageModule {}