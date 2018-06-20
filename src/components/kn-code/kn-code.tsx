import { Component, Element, Prop } from '@stencil/core';

@Component({
  tag: 'kn-code',
  styleUrl: 'kn-code.scss',
})
export class KnCode {

  render () {
    return (
      this.block
      ? <pre
          class="code-container block"
        >
          <slot />
        </pre>
      : <code
          class="code-container"
        >
          <slot />
        </code>
    );
  }

  @Element() element : HTMLElement;

  @Prop() block : boolean;

  private _html : string;

  componentWillLoad () {
    this._html = this.element.innerHTML;
    
    if (this.block) {
      const spaceLength = this._html.match(/^\s*/)[0].length - 1;
      if (spaceLength >= 0) {
        const reg = new RegExp(`\\n\\s{${ spaceLength }}`, 'g');
        this._html = this._html.replace(reg, '\n');
      }
    }

    this._html = this._html.trim();
  }
  componentDidLoad () {
    const container : HTMLElement = this.element.getElementsByClassName('code-container')[0] as HTMLElement;
    container.innerText = this._html;
  }

}
