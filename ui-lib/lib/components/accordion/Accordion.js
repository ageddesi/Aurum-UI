"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const accordionTemplate = document.createElement('template');
accordionTemplate.innerHTML = `
    <div>
        <div>Accordion Title</div>
        <div>Accordion Content Area</div>
    </div>
`;
class Accordion extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({ mode: 'open' });
        this._shadowRoot.appendChild(accordionTemplate.content.cloneNode(true));
    }
}
exports.Accordion = Accordion;
//# sourceMappingURL=Accordion.js.map