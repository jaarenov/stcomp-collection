/*! Built with http://stenciljs.com */
const { h } = window.knitter;

class KnOption {
    constructor() {
        this.value = '';
    }
    render() {
        return (h("span", { class: 'option-container ' +
                (this.selected ? 'option-selected ' : ''), onClick: () => this._selectOption() },
            h("slot", null)));
    }
    componentDidLoad() {
        this._text = this.element.textContent;
        if (!this.value) {
            this.value = this._text;
        }
    }
    setSelected(event) {
        this.selected = event.detail === this.value;
        if (this.selected) {
            this._selectOption();
        }
    }
    _selectOption() {
        this.select.emit({ text: this._text, value: this.value });
    }
    static get is() { return "kn-option"; }
    static get properties() { return {
        "element": {
            "elementRef": true
        },
        "selected": {
            "state": true
        },
        "value": {
            "type": String,
            "attr": "value",
            "mutable": true
        }
    }; }
    static get events() { return [{
            "name": "select",
            "method": "select",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get listeners() { return [{
            "name": "parent:change",
            "method": "setSelected"
        }, {
            "name": "parent:load",
            "method": "setSelected"
        }]; }
    static get style() { return "kn-option .option-container {\n  cursor: pointer;\n  display: block;\n  padding: 8px 16px; }\n  kn-option .option-container:hover, kn-option .option-container.option-selected:hover {\n    background-color: #55f;\n    color: white; }\n  kn-option .option-container.option-selected {\n    background-color: rgba(85, 85, 255, 0.1);\n    color: #55f; }"; }
}

class KnSelect {
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
    static get style() { return "kn-select {\n  position: relative; }\n  kn-select .select-container {\n    background-color: white;\n    border: 1px solid #55f;\n    border-radius: 4px;\n    -webkit-box-shadow: 0 0 2px #999;\n    box-shadow: 0 0 2px #999;\n    cursor: pointer;\n    display: inline-block;\n    margin: 4px;\n    padding: 8px 16px;\n    -webkit-transition: all .2s ease-in-out;\n    transition: all .2s ease-in-out; }\n    kn-select .select-container:hover {\n      -webkit-box-shadow: 0 0 8px #666;\n      box-shadow: 0 0 8px #666; }\n    kn-select .select-container.select-opened {\n      -webkit-box-shadow: 0 0 8px #ccc inset;\n      box-shadow: 0 0 8px #ccc inset; }\n    kn-select .select-container .select-placeholder {\n      color: #999; }\n    kn-select .select-container .select-more-symbol {\n      color: #55f;\n      display: inline-block;\n      font-size: 0.5em;\n      margin-left: 1em; }\n  kn-select .options-container {\n    background-color: white;\n    border: 1px solid #55f;\n    border-radius: 4px;\n    -webkit-box-shadow: 0 0 2px #999;\n    box-shadow: 0 0 2px #999;\n    display: none;\n    left: 4px;\n    position: absolute;\n    width: -webkit-max-content;\n    width: -moz-max-content;\n    width: max-content;\n    z-index: 10000; }\n    kn-select .options-container.options-opened {\n      display: block; }"; }
}

export { KnOption, KnSelect };
