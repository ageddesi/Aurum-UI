import { Accordion } from "./components/accordion/Accordion";
import { ChevronDownIcon } from "./components/icons/ChevronDownIcon";
import { ChevronUpIcon } from "./components/icons/ChevronUpIcon";
export const init = (options = {
    prefix: 'aurum'
}) => {
    // Initalize internal components that can not be prefixed due to be reused in other components
    window.customElements.define('aurum-icon-chevron-down', ChevronDownIcon);
    window.customElements.define('aurum-icon-chevron-up', ChevronUpIcon);
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