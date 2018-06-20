/*! Built with http://stenciljs.com */
import { h } from './knitter.core.js';
var KnCode = /** @class */ (function () {
    function KnCode() {
    }
    KnCode.prototype.render = function () {
        return (this.block
            ? h("pre", { class: "code-container block" }, h("slot", null))
            : h("code", { class: "code-container" }, h("slot", null)));
    };
    KnCode.prototype.componentWillLoad = function () {
        this._html = this.element.innerHTML;
        if (this.block) {
            var spaceLength = this._html.match(/^\s*/)[0].length - 1;
            if (spaceLength >= 0) {
                var reg = new RegExp("\\n\\s{" + spaceLength + "}", 'g');
                this._html = this._html.replace(reg, '\n');
            }
        }
        this._html = this._html.trim();
    };
    KnCode.prototype.componentDidLoad = function () {
        var container = this.element.getElementsByClassName('code-container')[0];
        container.innerText = this._html;
    };
    Object.defineProperty(KnCode, "is", {
        get: function () { return "kn-code"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KnCode, "properties", {
        get: function () {
            return {
                "block": {
                    "type": Boolean,
                    "attr": "block"
                },
                "element": {
                    "elementRef": true
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KnCode, "style", {
        get: function () { return "kn-code .code-container {\n  background-color: #eee;\n  border-radius: 4px;\n  font-family: Consolas, monospace;\n  padding: 0 0.5em; }\n  kn-code .code-container.block {\n    overflow-x: auto;\n    padding: 0;\n    margin: 0; }"; },
        enumerable: true,
        configurable: true
    });
    return KnCode;
}());
export { KnCode };
