export class KnOption {
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
    static get style() { return "/**style-placeholder:kn-option:**/"; }
}
