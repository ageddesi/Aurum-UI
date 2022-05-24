var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
let AccordionGroup = class AccordionGroup extends LitElement {
    constructor() {
        super(...arguments);
        this.design = "blocked"; // blocked, carded-block, carded, carded-full-width
        this.singleOpen = "true";
    }
    render() {
        return html `
            <div class="accordion-group-container ${this.design}">
                <slot></slot>
            </div>
        `;
    }
    connectedCallback() {
        super.connectedCallback();
        setTimeout(() => {
            let children = [...this.querySelectorAll("*")];
            let index = 0;
            children.forEach((child) => {
                child.setAttribute("index", index.toString());
                child.setAttribute("design", this.design);
                index += 1;
                if (this.singleOpen === "true") {
                    child.addEventListener('accordion-toggled', (value) => {
                        if (value.detail) {
                            children.forEach((child, index) => {
                                let isSameIndex = index.toString() === value.detail.index;
                                child.setAttribute('isExpanded', isSameIndex ? value.detail.status : "false");
                            });
                        }
                    });
                }
            });
        });
    }
};
AccordionGroup.styles = css `
      
        .blocked{
          // no default styling     
        }
      
        .carded-block {
            padding: 8px;
            border: 1px solid #C4C4C4;
            border-radius: 4px;
            box-shadow: 0px 1px 4px 0px #0000001A;
        }
      
        .carded {
          padding: 8px;
          border: 1px solid #C4C4C4;
          border-radius: 4px;
          box-shadow: 0px 1px 4px 0px #0000001A;
        }
        
        .carded-full-width {
          padding: 0;
          border: 1px solid #C4C4C4;
          border-radius: 4px;
          box-shadow: 0px 1px 4px 0px #0000001A;
        }
      
    `;
__decorate([
    property()
], AccordionGroup.prototype, "design", void 0);
__decorate([
    property()
], AccordionGroup.prototype, "singleOpen", void 0);
AccordionGroup = __decorate([
    customElement('aurum-accordion-group')
], AccordionGroup);
export { AccordionGroup };
//# sourceMappingURL=accordion-group.js.map