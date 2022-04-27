define("src/types/AurumOptionsType", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("src/components/accordion/Accordion", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Accordion = void 0;
    const accordionTemplate = document.createElement('accordionTemplate');
    accordionTemplate.innerHTML = `
    <style>
        #root{
            text-align: center;
        }
    </style>
    <div id="root">
        <div id="root__title"></div>
        <div id="root_content"></div>
    </div>
`;
    class Accordion extends HTMLElement {
        titleElement = null;
        constructor() {
            super();
            const shadowDom = this.attachShadow({ mode: 'closed' });
            // @ts-ignore
            shadowDom.appendChild(accordionTemplate.content.cloneNode(true));
            this.titleElement = shadowDom.getElementById('root__title');
            if (this.titleElement?.textContent) {
                this.titleElement.textContent = "testing this work";
            }
        }
    }
    exports.Accordion = Accordion;
});
define("src/index", ["require", "exports", "src/components/accordion/Accordion"], function (require, exports, Accordion_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const initAurumUI = (options) => {
        const prefix = (options.prefix ?? "aurum") + "-";
        // Initialize Components, keep this alphabetical.
        customElements.define(`${prefix}accordion`, Accordion_1.Accordion);
    };
});
//# sourceMappingURL=aurum-ui.js.map