import { EventEmitter } from '@stencil/core';
export declare class KnOption {
    element: HTMLElement;
    select: EventEmitter;
    render(): JSX.Element;
    componentDidLoad(): void;
    value: string;
    selected: boolean;
    setSelected(event: CustomEvent): void;
    private _text;
    private _selectOption;
}
