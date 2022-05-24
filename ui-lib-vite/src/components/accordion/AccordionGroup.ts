
const accordionGroupTemplate = document.createElement('template');
accordionGroupTemplate.innerHTML = `
    <style>
        .aurum-accordion-group-container {
            
        }
    </style>
    
    <div class="aurum-accordion-group-container">
        This is an accordion Group
        <slot></slot>
    </div>
`;

export class AccordionGroup extends HTMLElement {
    constructor() {
        super();
    }

    static get observedAttributes() {
        return ['style']
    }
}
