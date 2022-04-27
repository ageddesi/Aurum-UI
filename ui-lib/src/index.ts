import {AurumUIOptions} from "./types/AurumUIOptions";
import {Accordion} from "./components/accordion/Accordion";

export const init = (options : AurumUIOptions = {
    prefix: "aurum"
}) => {
    // Initalize web components by alphabetical order.
    window.customElements.define(`${options.prefix}-accordion`, Accordion)
}

(function() {
    // @ts-ignore
    window.AurumUi = {
        init
    };
}());

