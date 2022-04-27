import {AurumOptionsType} from "./types/AurumOptionsType";
import {Accordion} from "./components/accordion/Accordion";

const initAurumUI = (options: AurumOptionsType) => {
  const prefix = (options.prefix ?? "aurum") + "-";

  // Initialize Components, keep this alphabetical.
  customElements.define(`${prefix}accordion`, Accordion);

}
