var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { customElement, property } from "lit/decorators.js";
import { css, html, LitElement } from "lit";
let Accordion = class Accordion extends LitElement {
    constructor() {
        super(...arguments);
        this.design = "blocked"; // blocked, carded-block, carded, carded-full-width
        this.index = "0";
        this.header = "";
        this.subHeader = "";
        this.isExpanded = "false";
    }
    render() {
        return html `
            <div class="accordion-container ${this.design}">
                <div class="accordion-header-container" @click="${this._toggleHandler}">
                    <div style="flex-grow: 1">
                        <div class="accordion-header">${this.header}</div>
                        <div class="accordion-sub-header ${this.subHeader ? '' : 'none'}">${this.subHeader}</div>
                    </div>
                    <div style="width: 20px; height: 20px; margin: 4px" class="${(this.isExpanded === "true" ? 'oneEighty' : '')}">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                </div>
                <div class="accordion-content ${(this.isExpanded === "false") ? 'hide-content' : 'show-content'}">
                    <slot></slot>
                </div>
            </div>
        `;
    }
    _toggleHandler(e) {
        this.isExpanded = this.isExpanded === "true" ? "false" : "true";
        this.dispatchEvent(new CustomEvent('accordion-toggled', {
            detail: {
                index: this.index,
                status: this.isExpanded
            }
        }));
    }
};
Accordion.styles = css `
      
      .accordion-container{
        
      }
      
      .accordion-header-container{
        display: flex;
        align-items: center;
        cursor: pointer;
      }
      
      .blocked .accordion-header-container{
        font-family: Open Sans;
        background-color: #EEEEEE;
        padding: 4px;
        border: 1px solid #C4C4C4;
      }
      
      .carded-block .accordion-header-container{
        font-family: Open Sans;
        background-color: #EEEEEE;
        padding: 4px;
        border: 1px solid #C4C4C4;
      }

      .carded .accordion-header-container{
        font-family: Open Sans;
        padding: 4px;
        border-bottom: 1px solid #C4C4C4;
      }
      
      .carded .accordion-content{
        border: 0;
      }

      .carded-full-width .accordion-header-container{
        font-family: Open Sans;
        padding: 4px;
        border-bottom: 1px solid #C4C4C4;
      }

      .carded-full-width .accordion-content{
        border: 0;
        background-color: #EEEEEE;
      }
      
      .accordion-header{
        font-size: 14px;
        font-weight: 600;
        line-height: 19px;
        letter-spacing: 0em;
        text-align: left;
      }
      
      .accordion-sub-header{
        font-size: 12px;
        font-weight: 400;
        line-height: 16px;
        letter-spacing: 0em;
        text-align: left;
        margin-top:4px;
      }
      
      .accordion-content {
        font-family: Open Sans;
        font-size: 14px;
        font-weight: 400;
        line-height: 19px;
        letter-spacing: 0em;
        text-align: left;
        padding: 4px;
        border: 1px solid #C4C4C4;
        border-top:0;
      }
      
      .none {
        display:none;
      }
      
      .hide-content{
        display: none;
      }
      
      .show-content{
        display: block;
      }
      
      .oneEighty {
        transform: rotate(180deg);
      }
    `;
__decorate([
    property()
], Accordion.prototype, "design", void 0);
__decorate([
    property()
], Accordion.prototype, "index", void 0);
__decorate([
    property()
], Accordion.prototype, "header", void 0);
__decorate([
    property()
], Accordion.prototype, "subHeader", void 0);
__decorate([
    property()
], Accordion.prototype, "isExpanded", void 0);
Accordion = __decorate([
    customElement('aurum-accordion')
], Accordion);
export { Accordion };
//# sourceMappingURL=accordion.js.map