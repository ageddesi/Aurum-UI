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
    private titleElement: HTMLElement | null = null;

    constructor() {
        super();
        const shadowDom = this.attachShadow({ mode: 'closed'})
        // @ts-ignore
        shadowDom.appendChild(accordionTemplate.content.cloneNode(true));

        this.titleElement = shadowDom.getElementById('root__title');
        if(this.titleElement?.textContent){
            this.titleElement.textContent = "testing this work";
        }
    }

}
