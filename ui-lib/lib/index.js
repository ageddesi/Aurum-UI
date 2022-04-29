"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Accordion_1 = require("./components/accordion/Accordion");
const ChevronDownIcon_1 = require("./components/icons/ChevronDownIcon");
const ChevronUpIcon_1 = require("./components/icons/ChevronUpIcon");
exports.init = (options = {
    prefix: 'aurum'
}) => {
    // Initalize internal components that can not be prefixed due to be reused in other components
    window.customElements.define('aurum-icon-chevron-down', ChevronDownIcon_1.ChevronDownIcon);
    window.customElements.define('aurum-icon-chevron-up', ChevronUpIcon_1.ChevronUpIcon);
    // Initalize web components by alphabetical order.
    window.customElements.define(`${options.prefix}-accordion`, Accordion_1.Accordion);
};
(function () {
    // @ts-ignore
    window.AurumUi = {
        init: exports.init
    };
}());
//# sourceMappingURL=index.js.map