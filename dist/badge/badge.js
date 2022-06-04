var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
let Badge = class Badge extends LitElement {
    constructor() {
        super(...arguments);
        this.design = "normal"; // normal, outlined
        this.shape = "rounded"; // rounded, rounded-small, rectangle
        this.size = "medium"; // small, medium, large
        this.selectable = "false"; // true, false
        this.closable = "false";
    }
    render() {
        return html `
            <div class="badge ${this.design} ${this.shape} ${this.selectable === "true" ? 'hoverable' : ''}">
                <slot name="icon"></slot>
                <slot></slot>
                <svg style="${this.closable === "true" ? '' : 'display: none'}" class="close-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </div>
        `;
    }
};
Badge.styles = css `
        .badge {
          font-family: Open Sans;
          padding: 4px 8px;
          border: 1px solid #C4C4C4;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 4px;
        }
      
        .normal {
          background-color: #EEEEEE;
        }

        .outlined {
          background: transparent;
        }
      
        .rectangle {
          border-radius: 0;
        }
      
        .rounded {
          border-radius: 16px;
        }
      
        .rounded-small{
          border-radius: 4px;
        }
      
        .close-icon{
          width: 16px;
        }
      
        .hoverable:hover{
          cursor: pointer;
          box-shadow: 0px 2px 4px 0px #0000001A;
        }
        
    `;
__decorate([
    property()
], Badge.prototype, "design", void 0);
__decorate([
    property()
], Badge.prototype, "shape", void 0);
__decorate([
    property()
], Badge.prototype, "size", void 0);
__decorate([
    property()
], Badge.prototype, "selectable", void 0);
__decorate([
    property()
], Badge.prototype, "closable", void 0);
Badge = __decorate([
    customElement('aurum-badge')
], Badge);
export { Badge };
//# sourceMappingURL=badge.js.map