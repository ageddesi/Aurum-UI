import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('aurum-accordion-group')
export class AccordionGroup extends LitElement {

    @property()
    design: string = "blocked"; // blocked, carded-block, carded, carded-full-width

    @property()
    singleOpen: string = "true";

    static override styles = css`
      
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

    override render() {
        return html`
            <div class="accordion-group-container ${this.design}">
                <slot></slot>
            </div>
        `;
    }

    override connectedCallback() {
        super.connectedCallback();
        setTimeout(() => {
            let children = [...this.querySelectorAll("*")];
            let index = 0;
            children.forEach((child) => {
                child.setAttribute("index", index.toString())
                child.setAttribute("design", this.design)
                index += 1;

                if(this.singleOpen === "true") {
                    child.addEventListener('accordion-toggled', (value) => {
                        if(value.detail){
                            children.forEach((child, index) => {
                                let isSameIndex = index.toString() === value.detail.index;
                                child.setAttribute('isExpanded', isSameIndex? value.detail.status : "false");
                            })
                        }
                    })
                }
            });
        });
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'aurum-accordion-group' : AccordionGroup
    }
}
