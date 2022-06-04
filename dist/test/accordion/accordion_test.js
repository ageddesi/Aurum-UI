import { assert } from '@open-wc/testing';
import { Accordion } from "../../accordion/accordion";
suite('aurum-accordion', () => {
    test("is defined", () => {
        const el = document.createElement('aurum-accordion');
        assert.instanceOf(el, Accordion);
    });
});
//# sourceMappingURL=accordion_test.js.map