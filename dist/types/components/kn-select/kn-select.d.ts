import { EventEmitter } from '@stencil/core';
export declare class KnSelect {
    change: EventEmitter;
    load: EventEmitter;
    render(): JSX.Element[];
    componentDidLoad(): void;
    element: HTMLElement;
    options: JSX.Element[];
    placeholder: string;
    value: string;
    open: boolean;
    text: string;
    closeForBlur(): void;
    changeSelect(event: CustomEvent): void;
    private _toggleOpen;
}
