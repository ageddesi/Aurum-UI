import {AurumTheme} from "../../theme";

const accordionTemplate = document.createElement('template');
accordionTemplate.innerHTML = `

    <style>
        .aurum-accordion-container{
            padding: 0;
            font-family: ${AurumTheme.FontFamily};
        }
        .aurum-accordion-title{
            font-weight: bold;
            background-color: ${AurumTheme.ColorsGrayLight};
            padding: ${AurumTheme.PaddingSmall};
            display: flex;
            align-items: center;
        }
        .aurum-accordion-title-text{
            flex-grow: 1;
        }
        .aurum-accordion-title-icon-container {
            width: 28px;
            padding: 4px;
        }
        .aurum-accordion-content{
            display: none;
            padding: ${AurumTheme.PaddingSmall};
            border: 1px solid ${AurumTheme.ColorsGrayLight};
        }
        .upIcon{
            display: none;
        }
    </style>

    <div class="aurum-accordion-container">
        <div class="aurum-accordion-title">
            <div class="aurum-accordion-title-text">
                <!-- Accordion Title -->
            </div>
            <div class="aurum-accordion-title-icon-container">
                <aurum-icon-chevron-down class="downIcon"></aurum-icon-chevron-down>
                <aurum-icon-chevron-up class="upIcon"></aurum-icon-chevron-up>
            </div>
        </div>
        <div class="aurum-accordion-content">
            <!-- Accordion Content -->
            <slot></slot>
        </div>
    </div>
`;

export class Accordion extends HTMLElement {
    private _shadowRoot;
    private _titleContainer;
    private _titleText;
    private _contentContainer;
    private _currentlyOpen = false;

    constructor(){
        super();
        this._shadowRoot = this.attachShadow({ mode: 'open'})
        this._shadowRoot.appendChild(accordionTemplate.content.cloneNode(true))

        this._titleText = this._shadowRoot.querySelector(".aurum-accordion-title-text");
        this._titleContainer = this._shadowRoot.querySelector(".aurum-accordion-title");
        this._contentContainer = this._shadowRoot.querySelector(".aurum-accordion-content");
    }

    get title() { return this.getAttribute('title'); }
    set title(newValue){ this.setAttribute('title', newValue); }

    static get observedAttributes() {
        return ['title']
    }

    attributeChangedCallback(name, oldValue, newValue) {
        // We only have one attribute so no need to check the name currently
        this._titleText.innerText = newValue;
    }

    connectedCallback(){
        this._titleContainer.onclick = () => {
            this._currentlyOpen = !this._currentlyOpen;

            const downIcon = this._shadowRoot.querySelector('.downIcon');
            downIcon.style.display = this._currentlyOpen ? 'none' : 'block';

            const upIcon = this._shadowRoot.querySelector('.upIcon');
            upIcon.style.display = !this._currentlyOpen ? 'none' : 'block';

            this._contentContainer.style.display = this._currentlyOpen ? 'block' : 'none';
        };
    }

}
