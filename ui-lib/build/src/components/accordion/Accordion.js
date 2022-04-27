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
export class Accordion extends HTMLElement {
    constructor() {
        var _a;
        super();
        this.titleElement = null;
        const shadowDom = this.attachShadow({ mode: 'closed' });
        // @ts-ignore
        shadowDom.appendChild(accordionTemplate.content.cloneNode(true));
        this.titleElement = shadowDom.getElementById('root__title');
        if ((_a = this.titleElement) === null || _a === void 0 ? void 0 : _a.textContent) {
            this.titleElement.textContent = "testing this work";
        }
    }
}
//# sourceMappingURL=Accordion.js.map