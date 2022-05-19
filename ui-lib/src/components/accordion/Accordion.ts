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
            margin: 0;
        }
        .aurum-accordion-title-button{
            display: flex;
            flex-grow: 1;
            border:0;
            align-items: center;
            text-align: left;
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
        .up-icon{
            display: none;
        }
    </style>

    <div class="aurum-accordion-container">
        <h3 class="aurum-accordion-title" tabIndex="0">
            <button class="aurum-accordion-title-button" aria-expanded="false">
                <div class="aurum-accordion-title-text">
                    <!-- Accordion Title -->
                </div>
                <div class="aurum-accordion-title-icon-container">
                    <aurum-icon-chevron-down class="down-icon"></aurum-icon-chevron-down>
                    <aurum-icon-chevron-up class="up-icon"></aurum-icon-chevron-up>
                </div>
            </button>
        </h3>
        
        <div class="aurum-accordion-content" tabIndex="1" role="region">
            <!-- Accordion Content -->
            <slot></slot>
        </div>
    </div>
`;

export class Accordion extends HTMLElement {
    private _shadowRoot = null;
    private _titleContainer = null;
    private _titleButton = null;
    private _titleText = null;
    private _contentContainer = null;
    private _currentlyOpen = false;
    private _downIcon;
    private _upIcon;

    constructor(){
        super();
        this._shadowRoot = this.attachShadow({ mode: 'open'})
        this._shadowRoot.appendChild(accordionTemplate.content.cloneNode(true))

        this._titleText = this._shadowRoot.querySelector(".aurum-accordion-title-text");
        this._titleContainer = this._shadowRoot.querySelector(".aurum-accordion-title");
        this._titleButton = this._shadowRoot.querySelector(".aurum-accordion-title-button");
        this._contentContainer = this._shadowRoot.querySelector(".aurum-accordion-content");
        this._upIcon = this._shadowRoot.querySelector(".up-icon");
        this._downIcon = this._shadowRoot.querySelector(".down-icon");
    }

    get title() { return this.getAttribute('title'); }
    set title(newValue){ this.setAttribute('title', newValue); }
    get id() { return this.getAttribute('id');}

    static get observedAttributes() {
        return ['title']
    }

    attributeChangedCallback(name, oldValue, newValue) {
        // We only have one attribute so no need to check the name currently
        this._titleText.innerText = newValue;
    }

    connectedCallback(){
        // Handle Visual Setup
        this._upIcon.style.display = 'none';
        this._downIcon.style.display = 'block';

        // Handle Event Setup
        this._titleContainer.addEventListener('click', (e) => this.handleOpenCloseDrawer(e));
        this._titleContainer.addEventListener('keypress', (e) => this.handleKeyboardEvent(e));

        // Setup Aria
        this._titleContainer.setAttribute('id', this.id);
        this._titleButton.setAttribute('aria-controls',this.id + '-container');
        this._contentContainer.setAttribute('id', this.id + '-container')
        this._contentContainer.setAttribute('aria-labelledBy', this.id)
    }

    disconnectedCallback(){
        this._titleContainer.removeEventListener('click', this.handleOpenCloseDrawer);
        this._titleContainer.removeEventListener('keypress', this.handleKeyboardEvent);
    }

    /**
     * Handle keyboard event to check for opening of the accordion
     */
    handleKeyboardEvent(e : KeyboardEvent){
        if(e.key === " " || e.code === "Space" ||
            e.key === "Enter" || e.code === "Enter") {
            this.handleOpenCloseDrawer(e);
        }
    }

    /**
     * Handle the toggle between opening / closing of the accordion drawer.
     */
    handleOpenCloseDrawer(e : Event){
        // Handle Visual Changes
        this._currentlyOpen = !this._currentlyOpen;
        this._downIcon.style.display = this._currentlyOpen ? 'none' : 'block';
        this._upIcon.style.display = !this._currentlyOpen ? 'none' : 'block';
        this._contentContainer.style.display = this._currentlyOpen ? 'block' : 'none';

        // Handle Aria
        this._titleButton.setAttribute('aria-expanded', this._currentlyOpen.toString());
    }

}
