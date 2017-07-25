import { Component, Input } from '@angular/core';

@Component({
  selector: 'amc-textbox',
  templateUrl: 'ammic-textbox.component.html'
})
export class AmmicTextBoxComponent {
  @Input('label')
  protected label: string;

  constructor() { }
}
