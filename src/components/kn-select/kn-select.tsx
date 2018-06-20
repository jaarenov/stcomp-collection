import { Component, Element, Event, EventEmitter, Listen, Prop, State } from '@stencil/core';

@Component({
  tag: 'kn-select',
  styleUrl: 'kn-select.scss',
})
export class KnSelect {

  @Event() change : EventEmitter;
  @Event() load : EventEmitter;
/*
  @Method()
  appendOption (
    option : { text : string, value : string }
  ) {
    this.options.push(
      <kn-option
        value={ option.value }
      >
        { option.text }
      </kn-option>
    )
  }
*/
  render () {
    return [
      <span
        class={
          'select-container ' +
          (this.open ? 'select-opened ' : '')
        }
        onClick={ () => this._toggleOpen() }
      >
        {
          this.text
            ? [
                <span class="select-text">{ this.text }</span>,
                <span class="select-more-symbol">▼</span>
              ]
            : [
                <span class="select-placeholder">{ this.placeholder }</span>,
                <span class="select-more-symbol">▼</span>
              ]
        }
      </span>,
      <span
        class={
          'options-container ' +
          (this.open ? 'options-opened ' : '')
        }
      >
        <slot />
        { this.options }
      </span>
    ];
  }

  componentDidLoad () {
    this.load.emit(this.value);
  }

  @Element() element : HTMLElement;

  @Prop() options : JSX.Element[] = [];
  @Prop() placeholder : string = '';
  @Prop({ mutable: true }) value : string;

  @State() open : boolean = false;
  @State() text : string;

  @Listen('window:click')
  closeForBlur () {
    if (
      this.open &&
      !this.element.contains(event.target as Node)
    ) {
      this.open = false;
    }
  }
  @Listen('select')
  changeSelect (
    event : CustomEvent,
  ) {
    if (this.element.contains(event.target as Node)) {
      const preValue = this.value;

      this.open = false;
      this.text = event.detail.text;
      this.value = event.detail.value;
      
      if (preValue !== this.value) {
        this.change.emit(this.value);
      }
    }
  }

  private _toggleOpen () {
    this.open = !this.open;
  }

}
