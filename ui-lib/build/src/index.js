import { Accordion } from "./components/accordion/Accordion";
const initAurumUI = (options) => {
    var _a;
    const prefix = ((_a = options.prefix) !== null && _a !== void 0 ? _a : "aurum") + "-";
    // Initialize Components, keep this alphabetical.
    customElements.define(`${prefix}accordion`, Accordion);
};
//# sourceMappingURL=index.js.map