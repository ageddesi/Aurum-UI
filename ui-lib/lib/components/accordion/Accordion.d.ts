export declare class Accordion extends HTMLElement {
    private _shadowRoot;
    private _titleContainer;
    private _titleButton;
    private _titleText;
    private _contentContainer;
    private _currentlyOpen;
    private _downIcon;
    private _upIcon;
    constructor();
    title: string;
    readonly id: string;
    static readonly observedAttributes: string[];
    attributeChangedCallback(name: any, oldValue: any, newValue: any): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    /**
     * Handle keyboard event to check for opening of the accordion
     */
    handleKeyboardEvent(e: KeyboardEvent): void;
    /**
     * Handle the toggle between opening / closing of the accordion drawer.
     */
    handleOpenCloseDrawer(e: Event): void;
}
