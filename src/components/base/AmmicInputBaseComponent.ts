import { Input, EventEmitter, ElementRef, Renderer2, AfterViewInit, OnDestroy } from '@angular/core';

export abstract class AmmicInputBaseComponents implements AfterViewInit, OnDestroy {
    @Input('validation')
    public validation: boolean;

    // abstract methods
    public abstract get InputComponent(): ElementRef;
    public abstract get BindField(): string;
    // event listeners 
    protected lostFocusListener: Function;
    // validation objects
    private validationEventEmmiter: EventEmitter<AmmicValidationEventArgs> = new EventEmitter<AmmicValidationEventArgs>();
    public get OnValidation() {
        return this.validationEventEmmiter;
    }

    constructor(
        protected renderer: Renderer2
    ) { }

    ngAfterViewInit() {
        // --- lost focus event listen --->
        // initialize event argument
        let eventArgs: AmmicValidationEventArgs = {
            bindField: this.BindField
        };
        // add listener to LostFocus event
        this.lostFocusListener = this.renderer.listen(this.InputComponent, 'blur', (event) => {
            this.validationEventEmmiter.emit(eventArgs);
        });
        // --- lost focus event listen <---
    }

    ngOnDestroy() {
        this.lostFocusListener();
    }
}

export class AmmicValidationEventArgs {
    public bindField: string;
}