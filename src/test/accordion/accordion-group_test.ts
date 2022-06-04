import {AccordionGroup} from "../../accordion/accordion-group";
import {assert} from '@open-wc/testing';

suite('aurum-accordion-group', () => {
    test("is defined", () => {
        const el = document.createElement('aurum-accordion-group');
        assert.instanceOf(el, AccordionGroup)
    })
})
