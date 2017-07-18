import { Directive, ElementRef } from '@angular/core';

@Directive({
    selector: '[keyfield]'
})
export class AmmicKeyfieldDirective {
    constructor(el: ElementRef) {
        console.log(el);
        el.nativeElement.style.backgroundColor = 'yellow';
    }
}