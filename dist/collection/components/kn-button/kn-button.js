export class KnButton {
    constructor() {
        this.size = '';
    }
    render() {
        let buttonBody;
        if (this.value) {
            buttonBody = [
                this.value,
                h("span", { style: { display: 'none' } },
                    h("slot", null))
            ];
        }
        else {
            buttonBody = [h("slot", null)];
        }
        return (h("span", { class: (this.clear ? 'clear ' : '') +
                (this.disabled ? 'disabled ' : '') +
                (this.full ? 'full ' : '') +
                (this.outline ? 'outline ' : '') +
                (this.round ? 'round ' : '') +
                (this.size), style: { backgroundColor: this.color } }, buttonBody));
    }
    static get is() { return "kn-button"; }
    static get properties() { return {
        "clear": {
            "type": Boolean,
            "attr": "clear"
        },
        "color": {
            "type": String,
            "attr": "color"
        },
        "disabled": {
            "type": Boolean,
            "attr": "disabled"
        },
        "full": {
            "type": Boolean,
            "attr": "full"
        },
        "outline": {
            "type": Boolean,
            "attr": "outline"
        },
        "round": {
            "type": Boolean,
            "attr": "round"
        },
        "size": {
            "type": String,
            "attr": "size"
        },
        "value": {
            "type": String,
            "attr": "value"
        }
    }; }
    static get style() { return "/**style-placeholder:kn-button:**/"; }
}
