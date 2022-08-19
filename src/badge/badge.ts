import {css, html, LitElement} from "lit";
import {customElement, property} from "lit/decorators.js";

@customElement('aurum-badge')
export class Badge extends LitElement {

    @property()
    design: string = "normal" // normal, outlined

    @property()
    shape: string = "rounded" // rounded, rounded-small, rectangle

    @property()
    size: string = "medium" // small, medium, large

    @property()
    selectable: string = "false" // true, false

    @property()
    closable: string = "false"

    static override styles = css`
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

    override render() {
        return html`
            <div class="badge ${this.design} ${this.shape} ${this.selectable === "true" ? 'hoverable': ''}">
                <slot name="icon"></slot>
                <slot></slot>
                <svg style="${this.closable === "true" ? '' : 'display: none'}" class="close-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </div>
        `;
    }

}
