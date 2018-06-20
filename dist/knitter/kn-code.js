/*! Built with http://stenciljs.com */
const { h } = window.knitter;

class KnCode {
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
    static get style() { return "kn-code .code-container {\n  background-color: #eee;\n  border-radius: 4px;\n  font-family: Consolas, monospace;\n  padding: 0 0.5em; }\n  kn-code .code-container.block {\n    overflow-x: auto;\n    padding: 0;\n    margin: 0; }"; }
}

export { KnCode };
