(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("aurumUI", [], factory);
	else if(typeof exports === 'object')
		exports["aurumUI"] = factory();
	else
		root["aurumUI"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Accordion_1 = __webpack_require__(1);
const ChevronDownIcon_1 = __webpack_require__(2);
const ChevronUpIcon_1 = __webpack_require__(3);
exports.init = (options = {
    prefix: 'aurum'
}) => {
    // Initalize internal components that can not be prefixed due to be reused in other components
    window.customElements.define('aurum-icon-chevron-down', ChevronDownIcon_1.ChevronDownIcon);
    window.customElements.define('aurum-icon-chevron-up', ChevronUpIcon_1.ChevronUpIcon);
    // Initalize web components by alphabetical order.
    window.customElements.define(`${options.prefix}-accordion`, Accordion_1.Accordion);
};
(function () {
    // @ts-ignore
    window.AurumUi = {
        init: exports.init
    };
}());


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const theme_1 = __webpack_require__(4);
const accordionTemplate = document.createElement('template');
accordionTemplate.innerHTML = `

    <style>
        .aurum-accordion-container{
            padding: 0;
            font-family: ${theme_1.AurumTheme.FontFamily};
        }
        .aurum-accordion-title{
            font-weight: bold;
            background-color: ${theme_1.AurumTheme.ColorsGrayLight};
            padding: ${theme_1.AurumTheme.PaddingSmall};
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
            padding: ${theme_1.AurumTheme.PaddingSmall};
            border: 1px solid ${theme_1.AurumTheme.ColorsGrayLight};
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
class Accordion extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = null;
        this._titleContainer = null;
        this._titleButton = null;
        this._titleText = null;
        this._contentContainer = null;
        this._currentlyOpen = false;
        this._shadowRoot = this.attachShadow({ mode: 'open' });
        this._shadowRoot.appendChild(accordionTemplate.content.cloneNode(true));
        this._titleText = this._shadowRoot.querySelector(".aurum-accordion-title-text");
        this._titleContainer = this._shadowRoot.querySelector(".aurum-accordion-title");
        this._titleButton = this._shadowRoot.querySelector(".aurum-accordion-title-button");
        this._contentContainer = this._shadowRoot.querySelector(".aurum-accordion-content");
        this._upIcon = this._shadowRoot.querySelector(".up-icon");
        this._downIcon = this._shadowRoot.querySelector(".down-icon");
    }
    get title() { return this.getAttribute('title'); }
    set title(newValue) { this.setAttribute('title', newValue); }
    get id() { return this.getAttribute('id'); }
    static get observedAttributes() {
        return ['title'];
    }
    attributeChangedCallback(name, oldValue, newValue) {
        // We only have one attribute so no need to check the name currently
        this._titleText.innerText = newValue;
    }
    connectedCallback() {
        // Handle Visual Setup
        this._upIcon.style.display = 'none';
        this._downIcon.style.display = 'block';
        // Handle Event Setup
        this._titleContainer.addEventListener('click', (e) => this.handleOpenCloseDrawer(e));
        this._titleContainer.addEventListener('keypress', (e) => this.handleKeyboardEvent(e));
        // Setup Aria
        this._titleContainer.setAttribute('id', this.id);
        this._titleButton.setAttribute('aria-controls', this.id + '-container');
        this._contentContainer.setAttribute('id', this.id + '-container');
        this._contentContainer.setAttribute('aria-labelledy', this.id);
    }
    disconnectedCallback() {
        this._titleContainer.removeEventListener('click', this.handleOpenCloseDrawer);
        this._titleContainer.removeEventListener('keypress', this.handleKeyboardEvent);
    }
    /**
     * Handle keyboard event to check for opening of the accordion
     */
    handleKeyboardEvent(e) {
        if (e.key === " " || e.code === "Space" ||
            e.key === "Enter" || e.key === "Enter") {
            this.handleOpenCloseDrawer(e);
        }
    }
    /**
     * Handle the toggle between opening / closing of the accordion drawer.
     */
    handleOpenCloseDrawer(e) {
        // Handle Visual Changes
        this._currentlyOpen = !this._currentlyOpen;
        this._downIcon.style.display = this._currentlyOpen ? 'none' : 'block';
        this._upIcon.style.display = !this._currentlyOpen ? 'none' : 'block';
        this._contentContainer.style.display = this._currentlyOpen ? 'block' : 'none';
        // Handle Aria
        this._titleButton.setAttribute('aria-expanded', this._currentlyOpen.toString());
    }
}
exports.Accordion = Accordion;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class ChevronDownIcon extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
        `;
    }
}
exports.ChevronDownIcon = ChevronDownIcon;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class ChevronUpIcon extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7" />
            </svg>
        `;
    }
}
exports.ChevronUpIcon = ChevronUpIcon;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.AurumTheme = {
    // Padding
    PaddingSmall: "4px",
    PaddingMedium: "8px",
    PaddingLarge: "16px",
    // Font - Text
    FontFamily: "'Open Sans', 'Droid Sans', Arial, sans-serif",
    // Colours
    ColorsGrayLight: "#efefef"
};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(0);


/***/ })
/******/ ]);
});
//# sourceMappingURL=aurum-ui.js.map