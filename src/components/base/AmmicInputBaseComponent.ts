import { Input, EventEmitter, Renderer2, AfterViewInit, OnDestroy } from '@angular/core';

export abstract class AmmicInputBaseComponents implements AfterViewInit, OnDestroy {
    @Input('validation')
    public validation: boolean;
    // abstract methods
    public abstract get InputComponent(): any;
    public abstract get BindField(): string;
    // event listeners 
    protected lostFocusListener: Function;
    // validation objects
    private validationEventEmmiter: EventEmitter<AmmicValidationEventArgs> = new EventEmitter<AmmicValidationEventArgs>();
    public get OnValidation() {
        return this.validationEventEmmiter;
    }
    // previous value
    private previousValue: any;
    protected get PreviousValue(): any {
        return this.previousValue;
    }
    protected set PreviousValue(value: any) {
        this.previousValue = value;
    }
    // current value
    protected get CurrentValue(): any {
        return this.InputComponent.value;
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
            if (this.CurrentValue !== this.PreviousValue) {
                debugger;
                this.validationEventEmmiter.emit(eventArgs);
            }
        });
        // --- lost focus event listen <---
    }

    ngOnDestroy() {
        this.lostFocusListener();
    }

    RefreshInputValue() {
        this.PreviousValue = this.CurrentValue;
    }
}

export class AmmicValidationEventArgs {
    public bindField: string;
}