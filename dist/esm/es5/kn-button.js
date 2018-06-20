/*! Built with http://stenciljs.com */
import { h } from './knitter.core.js';
var KnButton = /** @class */ (function () {
    function KnButton() {
        this.size = '';
    }
    KnButton.prototype.render = function () {
        var buttonBody;
        if (this.value) {
            buttonBody = [
                this.value,
                h("span", { style: { display: 'none' } }, h("slot", null))
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
    };
    Object.defineProperty(KnButton, "is", {
        get: function () { return "kn-button"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KnButton, "properties", {
        get: function () {
            return {
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
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KnButton, "style", {
        get: function () { return "kn-button span {\n  background-color: #55f;\n  border-radius: 4px;\n  -webkit-box-shadow: 2px 2px 2px #999;\n  box-shadow: 2px 2px 2px #999;\n  color: white;\n  cursor: pointer;\n  display: inline-block;\n  margin: 4px;\n  padding: 12px 20px;\n  text-align: center;\n  -webkit-transition: all .2s ease-in-out;\n  transition: all .2s ease-in-out; }\n  kn-button span:active {\n    -webkit-box-shadow: 0 0 16px #333 inset;\n    box-shadow: 0 0 16px #333 inset; }\n    kn-button span:active.clear, kn-button span:active.outline {\n      -webkit-box-shadow: 0 0 8px #ccc inset;\n      box-shadow: 0 0 8px #ccc inset; }\n    kn-button span:active.disabled, kn-button span:active.disabled.outline {\n      -webkit-box-shadow: none;\n      box-shadow: none; }\n  kn-button span:hover {\n    opacity: 0.8; }\n    kn-button span:hover.clear {\n      background-color: #eee; }\n    kn-button span:hover.disabled, kn-button span:hover.outline {\n      opacity: 1; }\n  kn-button span.clear {\n    background-color: white;\n    -webkit-box-shadow: none;\n    box-shadow: none;\n    color: #55f; }\n  kn-button span.disabled {\n    background-color: #666;\n    -webkit-box-shadow: none;\n    box-shadow: none;\n    color: #ccc;\n    cursor: default; }\n    kn-button span.disabled.clear, kn-button span.disabled.outline {\n      background-color: #ddd;\n      -webkit-box-shadow: none;\n      box-shadow: none;\n      color: #999;\n      opacity: 1; }\n    kn-button span.disabled.outline {\n      border: 1px solid #999; }\n  kn-button span.full {\n    display: block; }\n  kn-button span.large {\n    font-size: 1.5em;\n    padding: 16px 24px; }\n  kn-button span.outline {\n    background-color: white;\n    border: 1px solid #33f;\n    -webkit-box-shadow: 2px 2px 2px #ccc;\n    box-shadow: 2px 2px 2px #ccc;\n    color: #55f;\n    opacity: 0.8; }\n  kn-button span.round {\n    border-radius: 50%; }\n  kn-button span.small {\n    font-size: 0.8em;\n    padding: 8px 12px; }"; },
        enumerable: true,
        configurable: true
    });
    return KnButton;
}());
export { KnButton };
