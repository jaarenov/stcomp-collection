import { Component, Element, Event, EventEmitter, Listen, Prop, State } from '@stencil/core';

@Component({
  tag: 'kn-option',
  styleUrl: 'kn-option.scss',
})
export class KnOption {

  @Element() element : HTMLElement;

  @Event() select : EventEmitter;

  render () {
    return (
      <span
        class={
          'option-container ' +
          (this.selected ? 'option-selected ' : '')
        }
        onClick={ () => this._selectOption() }
      >
        <slot />
      </span>
    );
  }

  componentDidLoad () {
    this._text = this.element.textContent;
    
    if (!this.value) {
      this.value = this._text;
    }
  }

  @Prop({ mutable: true }) value : string = '';

  @State() selected : boolean;

  @Listen('parent:change,parent:load')
  setSelected (
    event : CustomEvent,
  ) {
    this.selected = event.detail === this.value;
    if (this.selected) {
      this._selectOption();
    }
  }

  private _text : string;

  private _selectOption () {
    this.select.emit({ text: this._text, value: this.value});
  }

}
