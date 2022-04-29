export declare class Accordion extends HTMLElement {
    private _shadowRoot;
    private _titleContainer;
    private _titleText;
    private _contentContainer;
    private _currentlyOpen;
    constructor();
    title: string;
    static readonly observedAttributes: string[];
    attributeChangedCallback(name: any, oldValue: any, newValue: any): void;
    connectedCallback(): void;
}
