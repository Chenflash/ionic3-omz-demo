import { Input, EventEmitter, Renderer2, AfterViewInit, OnDestroy } from '@angular/core';

export abstract class AmmicInputBaseComponent implements AfterViewInit, OnDestroy {
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
        let eventArgs: AmmicValidationEventArgs = new AmmicValidationEventArgs
        {
            eventArgs.Component = this;
            eventArgs.BindField = this.BindField;
        }

        // add listener to LostFocus event
        this.lostFocusListener = this.renderer.listen(this.InputComponent, 'blur', (event) => {
            if (this.CurrentValue !== this.PreviousValue) {
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
    // Property: Component
    private component: AmmicInputBaseComponent;
    public get Component(): AmmicInputBaseComponent {
        return this.component;
    }
    public set Component(value: AmmicInputBaseComponent) {
        this.component = value;
    }

    // Property: BindField
    private bindField: string;
    public get BindField(): string {
        return this.bindField;
    }
    public set BindField(value: string) {
        this.bindField = value;
    }
}