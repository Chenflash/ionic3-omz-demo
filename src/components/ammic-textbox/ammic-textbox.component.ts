import { Component, Input, ElementRef, Renderer2 } from '@angular/core';
import { AmmicInputBaseComponent } from '../base/AmmicInputBaseComponent';

@Component({
  selector: 'amc-textbox',
  templateUrl: 'ammic-textbox.component.html'
})
export class AmmicTextBoxComponent extends AmmicInputBaseComponent {
  @Input('label')
  public label: string;

  public get InputComponent(): ElementRef {
    return this.elementRef.nativeElement.querySelector('input');
  }

  public get BindField(): string {
    return this.elementRef.nativeElement.attributes["formcontrolname"].value;
  }

  constructor(
    public elementRef: ElementRef,
    public renderer: Renderer2
  ) {
    super(renderer);
  }
}