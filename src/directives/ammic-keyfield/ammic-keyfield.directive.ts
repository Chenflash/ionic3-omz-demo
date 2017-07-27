import { Directive, ElementRef } from '@angular/core';

@Directive({
    selector: '[keyfield]'
})
export class AmmicKeyfieldDirective {
    constructor(private elementRef: ElementRef) { }

    public setDisplay() {
        // set controller to display status.
        let inputElement: HTMLElement = this.elementRef.nativeElement.querySelector('input');
        inputElement.setAttribute("disabled", "true");
    }
}