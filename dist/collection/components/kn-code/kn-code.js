export class KnCode {
    render() {
        return (this.block
            ? h("pre", { class: "code-container block" },
                h("slot", null))
            : h("code", { class: "code-container" },
                h("slot", null)));
    }
    componentWillLoad() {
        this._html = this.element.innerHTML;
        if (this.block) {
            const spaceLength = this._html.match(/^\s*/)[0].length - 1;
            if (spaceLength >= 0) {
                const reg = new RegExp(`\\n\\s{${spaceLength}}`, 'g');
                this._html = this._html.replace(reg, '\n');
            }
        }
        this._html = this._html.trim();
    }
    componentDidLoad() {
        const container = this.element.getElementsByClassName('code-container')[0];
        container.innerText = this._html;
    }
    static get is() { return "kn-code"; }
    static get properties() { return {
        "block": {
            "type": Boolean,
            "attr": "block"
        },
        "element": {
            "elementRef": true
        }
    }; }
    static get style() { return "/**style-placeholder:kn-code:**/"; }
}
