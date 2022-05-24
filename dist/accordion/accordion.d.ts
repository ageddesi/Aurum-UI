import { LitElement } from "lit";
export declare class Accordion extends LitElement {
    design: string;
    index: string;
    header: string;
    subHeader: string;
    isExpanded: string;
    static styles: import("lit").CSSResult;
    render(): import("lit-html").TemplateResult<1>;
    private _toggleHandler;
}
declare global {
    interface HTMLElementTagNameMap {
        'aurum-accordion': Accordion;
    }
}
//# sourceMappingURL=accordion.d.ts.map