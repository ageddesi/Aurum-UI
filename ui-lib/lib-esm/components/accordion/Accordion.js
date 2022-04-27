const accordionTemplate = document.createElement('template');
accordionTemplate.innerHTML = `
    <style>
        .aurum-accordion-container {
            border: 1px solid gray;
            padding: 4px;
            border-radius:4px;
        }
    </style>
    <div class="aurum-accordion-container">
        <div>Accordion Title</div>
        <div>Accordion Content Area</div>
    </div>
`;
export class Accordion extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({ mode: 'open' });
        this._shadowRoot.appendChild(accordionTemplate.content.cloneNode(true));
    }
}
//# sourceMappingURL=Accordion.js.map