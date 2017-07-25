import { Directive, HostListener } from '@angular/core';

@Directive({
    selector: '[useValidation]'
})
export class AmmicValidationDirective {
    @HostListener('ionBlur', ['$event'])
    onIonBlur(elementRef:any){
        console.log(elementRef);
    }
}