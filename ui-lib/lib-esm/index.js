import { Accordion } from "./components/accordion/Accordion";
export const init = (options = {
    prefix: "aurum"
}) => {
    // Initalize web components by alphabetical order.
    window.customElements.define(`${options.prefix}-accordion`, Accordion);
};
(function () {
    // @ts-ignore
    window.AurumUi = {
        init
    };
}());
//# sourceMappingURL=index.js.map