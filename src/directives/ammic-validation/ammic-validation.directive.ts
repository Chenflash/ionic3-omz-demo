import { Directive, ElementRef, Renderer2, AfterViewInit, OnDestroy } from '@angular/core';

@Directive({
    selector: '[validation]'
})
export class AmmicValidationDirective implements AfterViewInit, OnDestroy {
    protected listenBlur: Function

    private parentPage: any;
    public get ParentPage(): any { return this.parentPage; }
    public set ParentPage(value) { this.parentPage = value; }

    constructor(
        private elementRef: ElementRef,
        private renderer: Renderer2
    ) {
    }

    public ngAfterViewInit() {
        // blur event
        let validationElement = this.elementRef.nativeElement.querySelector('input');
        this.listenBlur = this.renderer.listen(validationElement, 'blur', (event) => {
            this.onValidation(event);
        });
    }

    protected onValidation(event: any) {
        if (this.parentPage != null) {
            this.parentPage.OnValidation(this.parentPage.collection, 0, this.elementRef.nativeElement.attributes["formcontrolname"].value);
        }
    }

    public ngOnDestroy() {
        this.listenBlur();
    }
}