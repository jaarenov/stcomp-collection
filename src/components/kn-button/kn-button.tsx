import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'kn-button',
  styleUrl: 'kn-button.scss',
})
export class KnButton {

  @Prop() color : string;
  @Prop() clear : boolean;
  @Prop() disabled : boolean;
  @Prop() full : boolean;
  @Prop() outline : boolean;
  @Prop() round : boolean;
  @Prop() size : string = '';
  @Prop() value : string;

  render () {
    let buttonBody : JSX.Element[];

    if (this.value) {
      buttonBody = [
        this.value,
        <span style={{ display: 'none' }}><slot /></span>
      ];
    } else {
      buttonBody = [<slot />];
    }

    return (
      <span
        class={
          (this.clear ? 'clear ' : '') +
          (this.disabled ? 'disabled ' : '') +
          (this.full ? 'full ' : '') +
          (this.outline ? 'outline ' : '') +
          (this.round ? 'round ' : '') +
          (this.size)
        }
        style={{ backgroundColor: this.color }}
      >
        { buttonBody }
      </span>
    );
  }

}
