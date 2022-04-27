"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Accordion_1 = require("./components/accordion/Accordion");
exports.init = (options = {
    prefix: "aurum"
}) => {
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