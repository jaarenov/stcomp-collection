export class KnSelect {
    constructor() {
        this.options = [];
        this.placeholder = '';
        this.open = false;
    }
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
    render() {
        return [
            h("span", { class: 'select-container ' +
                    (this.open ? 'select-opened ' : ''), onClick: () => this._toggleOpen() }, this.text
                ? [
                    h("span", { class: "select-text" }, this.text),
                    h("span", { class: "select-more-symbol" }, "\u25BC")
                ]
                : [
                    h("span", { class: "select-placeholder" }, this.placeholder),
                    h("span", { class: "select-more-symbol" }, "\u25BC")
                ]),
            h("span", { class: 'options-container ' +
                    (this.open ? 'options-opened ' : '') },
                h("slot", null),
                this.options)
        ];
    }
    componentDidLoad() {
        this.load.emit(this.value);
    }
    closeForBlur() {
        if (this.open &&
            !this.element.contains(event.target)) {
            this.open = false;
        }
    }
    changeSelect(event) {
        if (this.element.contains(event.target)) {
            const preValue = this.value;
            this.open = false;
            this.text = event.detail.text;
            this.value = event.detail.value;
            if (preValue !== this.value) {
                this.change.emit(this.value);
            }
        }
    }
    _toggleOpen() {
        this.open = !this.open;
    }
    static get is() { return "kn-select"; }
    static get properties() { return {
        "element": {
            "elementRef": true
        },
        "open": {
            "state": true
        },
        "options": {
            "type": "Any",
            "attr": "options"
        },
        "placeholder": {
            "type": String,
            "attr": "placeholder"
        },
        "text": {
            "state": true
        },
        "value": {
            "type": String,
            "attr": "value",
            "mutable": true
        }
    }; }
    static get events() { return [{
            "name": "change",
            "method": "change",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "load",
            "method": "load",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get listeners() { return [{
            "name": "window:click",
            "method": "closeForBlur"
        }, {
            "name": "select",
            "method": "changeSelect"
        }]; }
    static get style() { return "/**style-placeholder:kn-select:**/"; }
}
