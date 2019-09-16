module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/h0W":
/***/ (function(module, exports) {

module.exports = {
	"innerbar": "_3nnMZzZKl8PS3i5asdckIh",
	"navbar": "_2BhPq4KUkcMYhEZyng_Tl_",
	"nav-item": "_2nzBcgQg32A_PLGnuvPO4d",
	"active": "_1rrHNablnjU53NYBZt8aUp",
	"navbar-toggler": "E7sXNZCbQTSDVgjz6ZTbt",
	"toggler-icon": "_3uzbxCVVzCb6YzuI3UNwef"
};

/***/ }),

/***/ "3BKK":
/***/ (function(module, exports) {

module.exports = {
	"main": "_1EdCtFS4B0e8i3OkSSDbRs",
	"header-container": "_26b8fWbkmtFIXEkmzrvEyL",
	"title": "_2wP47LTTAkaS-ZhmM96Obb",
	"content-container": "_3qQJdiRugIUSkIunYlhIrw"
};

/***/ }),

/***/ "5psM":
/***/ (function(module, exports) {

module.exports = require("lodash/fp");

/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("h83L");


/***/ }),

/***/ "8SHQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return NETWORK_TYPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return IS_MAINNET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DEFAULT_NETWORK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return GA_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CAPTCHA_CLIENT_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return EMAIL_API_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return INFURA_PROJECT_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return LEGACY_OPENCERTS_RENDERER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return DEFAULT_SEO; });
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("KNus");
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("gjtA");


const {
  trace
} = Object(_utils_logger__WEBPACK_IMPORTED_MODULE_1__[/* getLogger */ "a"])("config");
const {
  publicRuntimeConfig
} = next_config__WEBPACK_IMPORTED_MODULE_0___default()();
const NETWORK_TYPES = {
  INFURA_MAINNET: "INFURA_MAINNET",
  INFURA_ROPSTEN: "INFURA_ROPSTEN",
  INJECTED: "INJECTED",
  CUSTOM: "CUSTOM",
  MOCK: "MOCK"
};
const URL = "https://opencerts.io";
const GA_PRODUCTION_ID = "UA-130492260-1";
const GA_DEVELOPMENT_ID = "UA-130492260-2";
const IS_MAINNET = publicRuntimeConfig.network === "mainnet";
const DEFAULT_NETWORK = IS_MAINNET ? NETWORK_TYPES.INFURA_MAINNET : NETWORK_TYPES.INFURA_ROPSTEN;
const GA_ID = IS_MAINNET ? GA_PRODUCTION_ID : GA_DEVELOPMENT_ID;
const CAPTCHA_CLIENT_KEY = "6LfiL3EUAAAAAHrfLvl2KhRAcXpanNXDqu6M0CCS";
const EMAIL_API_URL = IS_MAINNET ? "https://api.opencerts.io/email" : "https://api-ropsten.opencerts.io/email";
const INFURA_PROJECT_ID = "1f1ff2b3fca04f8d99f67d465c59e4ef";
const LEGACY_OPENCERTS_RENDERER = publicRuntimeConfig.legacyRendererUrl || "https://legacy.opencerts.io/";
const DEFAULT_SEO = {
  title: "An easy way to check and verify your certificates",
  titleTemplate: `OpenCerts - %s`,
  description: "Whether you're a student or an employer, OpenCerts lets you verify the certificates you have of anyone from any institution. All in one place.",
  openGraph: {
    type: "website",
    url: URL,
    title: "OpenCerts - An easy way to check and verify your certificates",
    description: "Whether you're a student or an employer, OpenCerts lets you verify the certificates you have of anyone from any institution. All in one place.",
    images: [{
      url: `${URL}/static/images/opencerts.png`,
      width: 800,
      height: 600,
      alt: "OpenCerts"
    }]
  },
  twitter: {
    cardType: "summary_large_image"
  }
};
trace(`DEFAULT_NETWORK: ${DEFAULT_NETWORK}`);
trace(`CAPTCHA_CLIENT_KEY: ${CAPTCHA_CLIENT_KEY}`);
trace(`EMAIL_API_URL: ${EMAIL_API_URL}`);

/***/ }),

/***/ "GiID":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _footer_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("H9Hx");
/* harmony import */ var _footer_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_footer_scss__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const NavigationBar = () => __jsx("div", {
  className: "bg-brand-dark",
  id: _footer_scss__WEBPACK_IMPORTED_MODULE_1___default.a["footer-print"]
}, __jsx("div", {
  className: _footer_scss__WEBPACK_IMPORTED_MODULE_1___default.a.footer
}, __jsx("div", null, __jsx("a", {
  href: "/collaborate"
}, "Collaborate")), __jsx("div", null, __jsx("a", {
  href: "/faq"
}, "FAQ")), __jsx("div", null, __jsx("a", {
  href: "/registry"
}, "Registry")), __jsx("div", null, __jsx("a", {
  href: "/privacy"
}, "Privacy Policy")), __jsx("div", null, __jsx("a", {
  href: "/terms"
}, "Terms of Use")), __jsx("div", null, __jsx("a", {
  href: "https://github.com/OpenCerts"
}, "Github"))));

/* harmony default export */ __webpack_exports__["a"] = (NavigationBar);

/***/ }),

/***/ "H9Hx":
/***/ (function(module, exports) {

module.exports = {
	"footer": "_2gteCBBGtcoz5o1BuvsB9F",
	"footer-print": "_2HRkZQw4THQ3DH__nfESc6"
};

/***/ }),

/***/ "KNus":
/***/ (function(module, exports) {

module.exports = require("next/config");

/***/ }),

/***/ "RTI1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./src/components/Layout/NavigationBar/navBar.scss
var navBar = __webpack_require__("/h0W");
var navBar_default = /*#__PURE__*/__webpack_require__.n(navBar);

// CONCATENATED MODULE: ./src/components/Layout/NavigationBar/NavigationBar.js

var __jsx = external_react_default.a.createElement;

const navItems = [{
  id: "home",
  label: "Home",
  path: "/"
}, {
  id: "faq",
  label: "FAQ",
  path: "/faq"
}];

const renderNavItem = active => {
  const items = navItems.map((n, i) => __jsx("li", {
    className: `${navBar_default.a["nav-item"]} ${n.id === active ? navBar_default.a.active : ""}`,
    key: i
  }, __jsx("a", {
    href: n.path
  }, n.label)));
  return __jsx("ul", {
    className: "navbar-nav ml-auto d-none d-lg-flex d-xl-flex"
  }, items);
};

const NavigationBar = ({
  active
}) => __jsx("nav", {
  className: `${navBar_default.a.navbar} ${"navbar-expand-md navbar-dark bg-brand-dark"}`
}, __jsx("div", {
  className: navBar_default.a.innerbar
}, __jsx("a", {
  className: "navbar-brand",
  href: "/"
}, __jsx("img", {
  src: "/static/images/convergence-logo.png",
  alt: "convergence"
})), __jsx("button", {
  className: `${navBar_default.a["navbar-toggler"]} d-none`,
  type: "button",
  "data-toggle": "collapse",
  "data-target": "#top-nav",
  "aria-controls": "top-nav",
  "aria-expanded": "false",
  "aria-label": "Toggle navigation"
}, __jsx("span", {
  className: `${navBar_default.a["toggler-icon"]} ${"navbar-toggler-icon"}`
})), __jsx("div", {
  className: "collapse navbar-collapse",
  id: "top-nav"
}, renderNavItem(active))));

/* harmony default export */ var NavigationBar_NavigationBar = (NavigationBar);
// CONCATENATED MODULE: ./src/components/Layout/NavigationBar/index.js

/* harmony default export */ var Layout_NavigationBar = __webpack_exports__["a"] = (NavigationBar_NavigationBar);

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "efsx":
/***/ (function(module, exports) {

module.exports = require("next-seo");

/***/ }),

/***/ "gjtA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return trace; });
/* unused harmony export error */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getLogger; });
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("i4Cb");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_0__);
 // not using .extends because of stupid next.js resolve modules bug where its picking up old version of debug

const trace = namespace => debug__WEBPACK_IMPORTED_MODULE_0___default()(`opencerts-website:trace:${namespace}`);
const error = namespace => debug__WEBPACK_IMPORTED_MODULE_0___default()(`opencerts-website:error:${namespace}`);
const getLogger = namespace => ({
  trace: trace(namespace),
  error: error(namespace)
});

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "h83L":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next-seo"
var external_next_seo_ = __webpack_require__("efsx");
var external_next_seo_default = /*#__PURE__*/__webpack_require__.n(external_next_seo_);

// EXTERNAL MODULE: external "lodash/fp"
var fp_ = __webpack_require__("5psM");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: ./src/components/Layout/NavigationBar/index.js + 1 modules
var NavigationBar = __webpack_require__("RTI1");

// EXTERNAL MODULE: ./src/components/Layout/FooterBar.js
var FooterBar = __webpack_require__("GiID");

// EXTERNAL MODULE: ./src/components/TermsOfUse/termsOfUse.scss
var termsOfUse = __webpack_require__("3BKK");
var termsOfUse_default = /*#__PURE__*/__webpack_require__.n(termsOfUse);

// CONCATENATED MODULE: ./src/components/TermsOfUse/TermsOfUseContent.js

var __jsx = external_react_default.a.createElement;


const HeaderTermsOfUse = () => __jsx("div", {
  className: termsOfUse_default.a["header-container"]
}, __jsx("h1", {
  className: termsOfUse_default.a.title
}, "Terms of Use"));

const HeaderSchedule = () => __jsx("div", {
  className: termsOfUse_default.a["header-container"]
}, __jsx("h1", {
  className: termsOfUse_default.a.title
}, "Schedule"));

const TermsOfUse = () => __jsx("div", {
  className: termsOfUse_default.a["content-container"]
}, __jsx("ol", null, __jsx("li", null, "General", __jsx("ol", null, __jsx("li", null, "These Terms of Use govern your access to and use of our services, including the application (whether as software or as a website or otherwise), its contents, push notifications and all other accompanying materials as identified in the Schedule below (collectively, the \"Service\")."), __jsx("li", null, "This Service is provided to you by the Government Technology Agency (\"GovTech\"). GovTech\u2019s office is located at 10 Pasir Panjang Road, #10-01, Mapletree Business City, Singapore 117438."), __jsx("li", null, "By accessing or using any part of this Service, you unconditionally agree and accept to be legally bound by these Terms of Use and any amendments thereto from time to time. GovTech reserves the right to change these Terms of Use at its sole discretion and at any time. You should read the Terms of Use carefully each time you access or use any part of this Service as such access or use will constitute your agreement to the Terms of Use and any amendments to it."), __jsx("li", null, "If you do not agree to these Terms of Use, please do not use this Service or any part of this Service."))), __jsx("li", null, "Nature of this Service", __jsx("ol", null, __jsx("li", null, "Please see the Schedule for more information and terms concerning this Service."))), __jsx("li", null, "Licence Terms and Restrictions", __jsx("ol", null, __jsx("li", null, "The Service, including the materials made available on or through the Service, is owned by, licensed to, managed or controlled by GovTech. Please see clause 4 (Third Party Materials) for more information."), __jsx("li", null, "Subject to these Terms of Use, GovTech grants to you a non-exclusive and non-transferable right to access and use the Service for personal or internal purposes only, and only for such use permitted by the functions of the Service. You shall not, amongst other things, modify, reverse-engineer, decompile, adapt, publish, redistribute or sublicense the Service or any part of the Service without the prior written consent of GovTech or the respective third party owners. You also shall not use the Service in violation of any applicable laws or agreements that you have with any third parties. All express or implied rights to the Service not specifically granted herein are expressly reserved to GovTech."), __jsx("li", null, "GovTech reserves the right to:", __jsx("ol", null, __jsx("li", null, "Update or modify this Service from time to time;"), __jsx("li", null, "Deny or restrict access to or use of the Service by any particular person without ascribing any reasons whatsoever; and"), __jsx("li", null, "Discontinue this Service at any time without notice or liability to you whatsoever, whereupon all rights granted to you hereunder shall also terminate forthwith. You shall further upon notice from GovTech return or destroy all copies of the Service or materials therein that you may have downloaded."))), __jsx("li", null, "You will not interfere or attempt to interfere with the proper working of the Service or otherwise do anything that imposes an unreasonable or disproportionately large load on GovTech\u2019s servers."))), __jsx("li", null, "Third Party Materials", __jsx("ol", null, __jsx("li", null, "The Service may require, enable or facilitate access to or use of software or services of a third party (\"Third Party\"). In such an event, there may be terms of use of the third party software or service (the \"Third Party Terms\"). GovTech may be required under or as a result of the Third Party Terms to notify you of certain terms that apply to you (either directly as an end user, or as a party whose acts or omissions could cause GovTech to breach the Third Party Terms) when you use the Services. An example of Third Party Terms may be open source software terms or standard form terms of the distribution platform from which you obtain any part of the Service (e.g. Google Play Store or Apple App Store terms) which bind GovTech as a developer or user of the distribution platform (the \"Distribution Terms\"). Information on the Third Party Terms are embedded in the Service, already accounted for in these Terms of Use, publicly available (e.g the Distribution Terms) or otherwise listed in the Schedule herein. For the avoidance of doubt, insofar as this Clause 4 relates to the Distribution Terms, the relevant Distribution Terms are the terms of the specific platform from which you obtained a copy of the software or application that is part of the Service. For example, if you obtained the said copy from the Google Play Store, then the relevant terms are Google\u2019s Distribution Terms."), __jsx("li", null, "It is your responsibility to check and read the most up-to-date versions of these Third Party Terms and you are deemed to have notice of the same. In particular, you are deemed to have notice of the Third Party Terms that GovTech (under the Third Party Terms) is required to notify you, and you unconditionally agree to be bound by all the obligations in the Third Party Terms which are applicable to you as the end user."), __jsx("li", null, "If the Third Party Terms require you to enter into an agreement directly with the Third Party, then you unconditionally agree to enter into such agreement, and in any event, to be legally bound by the Third Party Terms. For the avoidance of doubt:", __jsx("ol", null, __jsx("li", null, "some Third Party Terms (particularly open-source terms) permit either a direct licence to you from the Third Party or a sublicence from GovTech to you. In such cases, your licence is a direct licence from the Third Party to you; and"), __jsx("li", null, "the terms of your agreement with the Third Party will govern your use of the relevant third party software or service, and not these Terms of Use."))), __jsx("li", null, "If the Third Party Terms expressly or impliedly require GovTech to incorporate certain terms in these Terms of Use (inclusive of terms which impose any minimum or maximum standards herein, and/or terms described in Clause 4.5 below), such terms are deemed to have been so incorporated (the \"Incorporated Terms\"). Examples of Incorporated Terms include provisions which require GovTech to give you notice of certain rights and liabilities or require GovTech to ensure that you acknowledge certain matters. Similarly, if the Third Party Terms expressly or impliedly require these Terms of Use to be altered such that the Third Party Terms are complied with, the parties herein agree that the Terms of Use shall be deemed to be so altered but only to the extent necessary for compliance."), __jsx("li", null, "Some Third Party Terms grant the Third Party, or require GovTech to grant the Third Party, direct rights of enforcement of these Terms of Use as a third party beneficiary, against you. Such Third Party Terms are deemed to have been incorporated into these Terms of Use as Incorporated Terms, and you hereby agree to grant such Third Party, such direct rights of enforcement against you."), __jsx("li", null, "For the avoidance of doubt, without prejudice to Clause 4.4, to the extent of any inconsistency between these Terms of Use and the Third Party Terms, the latter shall prevail provided nothing in the Third Party Terms increases the liability of GovTech beyond that stated in Clause 6."))), __jsx("li", null, "Your Consent to Access Functions of Your Device", __jsx("ol", null, __jsx("li", null, "Use of the Service may require you to allow access by the Service to certain functions of your device, such as push notifications, the obtaining and/or sharing of your location, or the collection of data from you in connection with the Service. Please also see clause 8 (Privacy Policy). Your use of the Service shall constitute your consent to the access by the Service of such functions of your device as may be reasonably required by the Service."))), __jsx("li", null, "Disclaimers and Indemnity", __jsx("ol", null, __jsx("li", null, "The Service is provided on an \"as is\" and \"as available\" basis without warranties of any kind. To the fullest extent permitted by law, GovTech does not make any representations or warranties of any kind whatsoever in relation to the Service and hereby disclaims all express, implied and/or statutory warranties of any kind to you or any third party, whether arising from usage or custom or trade or by operation of law or otherwise, including but not limited to any representations or warranties:", __jsx("ol", null, __jsx("li", null, "as to the accuracy, completeness, correctness, currency, timeliness, reliability, availability, interoperability, security, non-infringement, title, merchantability, quality or fitness for any particular purpose of the Service; and/or"), __jsx("li", null, "that the Service or any functions associated therewith will be uninterrupted or error-free, or that defects will be corrected or that this Service, website and the server are and will be free of all viruses and/or other malicious, destructive or corrupting code, programme or macro."))), __jsx("li", null, "GovTech shall also not be liable to you or any third party for any damage or loss of any kind whatsoever and howsoever caused, including but not limited to any direct or indirect, special or consequential damages, loss of income, revenue or profits, lost or damaged data, or damage to your computer, software or any other property, whether arising directly or indirectly from \u2013", __jsx("ol", null, __jsx("li", null, "your access to or use of this Service, or any part thereof;"), __jsx("li", null, "any loss of access to our use of this Service or any part of this Service, howsoever caused;"), __jsx("li", null, "any inaccuracy or incompleteness in, or errors or omissions in the transmission of, the Service;"), __jsx("li", null, "any delay or interruption in the transmission of the Service, whether caused by delay or interruption in transmission over the internet or otherwise; or"), __jsx("li", null, "any decision made or action taken by you or any third party in reliance upon the Service,")), "regardless of whether GovTech has been advised of the possibility of such damage or loss."), __jsx("li", null, "Without prejudice and in addition to the foregoing, insofar as the Service facilitates or requires the provision, use or functioning of, or is provided in conjunction with, other products, software, materials and/or services not provided by GovTech, GovTech makes no representation or warranty in relation to such products, software, materials and/or services (including without limitation any representation or warranties as to timeliness, reliability, availability, interoperability, quality, fitness for purpose, non-infringement, suitability or accuracy)."), __jsx("li", null, "You shall not rely on any part of the Service to claim or assert any form of legitimate expectation against GovTech, whether or not arising out of or in connection with GovTech\u2019s roles and functions as a public authority."), __jsx("li", null, "You agree to defend and indemnify and keep GovTech and its officers, employees, agents and contractors harmless against all liabilities, losses, damages, costs or expenses (including legal costs on an indemnity basis) howsoever arising out of or in connection with your access or use of the Service (including third party software or services) or your non-compliance with the Terms of Use, Third Party Terms or Incorporated Terms, whether or not you had been advised or informed of the nature or extent of such liabilities, losses, damages, costs or expenses."))), __jsx("li", null, "Hyperlinks", __jsx("ol", null, __jsx("li", null, "Insofar as the Service provides a hyperlink to material not maintained or controlled by GovTech, GovTech shall not be responsible for the content of the hyperlinked material and shall not be liable for any damages or loss arising from access to the hyperlinked material. Use of the hyperlinks and access to such hyperlinked materials are entirely at your own risk. The hyperlinks are provided merely as a convenience to you and do not imply endorsement by, association or affiliation with GovTech of the contents of or provider of the hyperlinked materials."), __jsx("li", null, "Caching and hyperlinking to, and the framing of, any part of the Service is prohibited save where you have obtained GovTech\u2019s prior written consent. Such consent may be subject to any conditions as may be determined by GovTech in its sole discretion. If you hyperlink to or frame any part of the Service, that shall constitute your acceptance of these Terms of Use and all amendments thereto. If you do not accept these Terms of Use as may be amended from time to time, you must immediately discontinue linking to or framing of any part of the Service."), __jsx("li", null, "GovTech reserves all rights:", __jsx("ol", null, __jsx("li", null, "to disable any links to, or frames of, any materials which are unauthorised (including without limitation materials which imply endorsement by or association or affiliation with GovTech, materials containing inappropriate, profane, defamatory, infringing, obscene, indecent or unlawful topics, names, or information that violates any written law, any applicable intellectual property, proprietary, privacy or publicity rights); and"), __jsx("li", null, "to disclaim responsibility and/or liability for materials that link to or frame any part of the Service."))))), __jsx("li", null, "Privacy Policy", __jsx("ol", null, __jsx("li", null, "You also agree to the terms of the Privacy Policy for this Service as may be amended from time to time. The Privacy Policy will form part of these Terms of Use."))), __jsx("li", null, "Rights of Third Parties", __jsx("ol", null, __jsx("li", null, "Subject to the rights of the Third Party set out in Clause 4.5, a person who is not a party to this Terms of Use shall have no right under the Contract (Rights of Third Parties) Act or otherwise to enforce any of its terms."))), __jsx("li", null, "Assignment", __jsx("ol", null, __jsx("li", null, "You may not assign or sub-contract this Terms of Use without the prior written consent of GovTech."), __jsx("li", null, "GovTech may assign, novate, transfer, or sub-contract the rights and liabilities in respect of the Service and this Terms of Use, without notifying you and without further reference to you. Your acceptance of this Terms of Use shall also constitute your consent to such assignment, novation, transfer or sub-contract."))), __jsx("li", null, "Governing Law and Dispute Resolution", __jsx("ol", null, __jsx("li", null, "These Terms of Use shall be governed and construed in accordance with laws of Singapore."), __jsx("li", null, "Subject to clause 11.3, any dispute arising out of or in connection with these Terms of Use, including any question regarding its existence, validity or termination, shall be referred to and finally resolved in the Courts of the Republic of Singapore and the parties hereby submit to the exclusive jurisdiction of the Courts of the Republic of Singapore."), __jsx("li", null, "GovTech may, at its sole discretion, refer any dispute referred to in clause 11.2 above to arbitration administered by the Singapore International Arbitration Centre (\"SIAC\") in Singapore in accordance with the Arbitration Rules of the SIAC (\"SIAC Rules\") for the time being in force, which rules are deemed to be incorporated by reference in this clause. Further:", __jsx("ol", null, __jsx("li", null, "The seat of the arbitration shall be Singapore."), __jsx("li", null, "The tribunal shall consist of one (1) arbitrator."), __jsx("li", null, "The language of the arbitration shall be English."), __jsx("li", null, "All information, pleadings, documents, evidence and all matters relating to the arbitration shall be confidential.")), "Where GovTech is the defendant or respondent, it shall be given at least 30 days before the commencement of any legal action against it to elect to exercise the right herein to have the dispute submitted to arbitration. This right to elect shall not prejudice GovTech\u2019s right to a limitation defence and the period to exercise the right shall not be abridged by reason of any accrual of a limitation defence in favour of GovTech during the said period.")))), "This version of the Terms of Use is dated 20 August 2018.");

const Schedule = () => __jsx("div", {
  className: termsOfUse_default.a["content-container"]
}, __jsx("ol", null, __jsx("li", null, "Name of Service: OpenCerts"), __jsx("li", null, "Nature of Service and Special Terms", __jsx("ol", null, __jsx("li", null, "This Service facilitates the issuance, verification and revocation of certificates and documents."), __jsx("li", null, "To use the Service, you may first install a web browser (such as the Google Chrome web browser) and have the MetaMask electronic wallet or a Ledger hardware wallet. MetaMask and other electronic wallets allow you to purchase, store, and engage in transactions using Ethereum cryptocurrency. You will not be able to engage in any transactions on the Service other than through MetaMask, or Ledger hardware wallet."), __jsx("li", null, "Transactions that take place on this Service are managed and confirmed via the Ethereum blockchain. You understand that your Ethereum public address will be made publicly visible whenever you engage in a transaction on the App."), __jsx("li", null, "We neither own nor control MetaMask, Google Chrome, the Ethereum network, or any other third party site, product, or service that you might access, visit, or use for the purpose of enabling you to use the various features of the App. We further do not endorse any third party collaborators listed herein, and the use of the services of such collaborators are similarly entirely at your risk. We will not be liable for the acts or omissions of any such third parties, nor will we be liable for any damage(s) that you may suffer as a result of your transactions or any other interaction with such third parties. Separate terms (and not these Terms of Use) govern the relationship between you and those third parties, including your certificate/document issuer, or any person accessing a copy of the relevant certificate/document."), __jsx("li", null, "You are responsible for the security of your account and your MetaMask wallet (and other Ethereum wallets and accounts)."), __jsx("li", null, "If you wish to be added as a collaborator, the terms of such collaboration shall be determined as GovTech\u2019s sole and absolute discretion and may be amended by GovTech from time to time. If you are unable to agree to the terms at any time, GovTech shall have the discretion to remove you as a collaborator without liability to you whatsoever. GovTech is not obliged to provide any reasons for any rejection of your application to be a collaborator."), __jsx("li", null, "GovTech is NOT responsible for the fulfilment and quality of Ethereum transactions."))), __jsx("li", null, "Third party software/services", __jsx("ol", null, __jsx("li", null, "Open Source Dependencies Licenses (", __jsx("a", {
  href: "/static/credits.pdf"
}, "Credits"), ")"), __jsx("li", null, "Google Analytics (", __jsx("a", {
  href: "https://www.google.com/policies/privacy/partners/"
}, "https://www.google.com/policies/privacy/partners/"), ")"), __jsx("li", null, "Infura (", __jsx("a", {
  href: "https://infura.io/terms"
}, "https://infura.io/terms"), ")"), __jsx("li", null, "AWS Lambda (", __jsx("a", {
  href: "https://aws.amazon.com/service-terms/"
}, "https://aws.amazon.com/service-terms/"), ")"), __jsx("li", null, "Netlify (", __jsx("a", {
  href: "https://www.netlify.com/tos/"
}, "https://www.netlify.com/tos/"), ")")))));

const Content = () => __jsx("div", {
  className: termsOfUse_default.a.main
}, __jsx(HeaderTermsOfUse, null), __jsx(TermsOfUse, null), __jsx(HeaderSchedule, null), __jsx(Schedule, null));

/* harmony default export */ var TermsOfUseContent = (Content);
// CONCATENATED MODULE: ./src/components/TermsOfUse/index.js

/* harmony default export */ var components_TermsOfUse = (TermsOfUseContent);
// EXTERNAL MODULE: ./src/config/index.js
var config = __webpack_require__("8SHQ");

// CONCATENATED MODULE: ./pages/terms.js
var terms_jsx = external_react_default.a.createElement;








const PAGE_SEO = {
  title: "Terms of use",
  description: 'These Terms of Use govern your access to and use of our services, including the application (whether as software or as a website or otherwise), its contents, push notifications and all other accompanying materials as identified in the Schedule below (collectively, the "Service").',
  openGraph: {
    title: "OpenCerts - Terms of use",
    description: 'These Terms of Use govern your access to and use of our services, including the application (whether as software or as a website or otherwise), its contents, push notifications and all other accompanying materials as identified in the Schedule below (collectively, the "Service").',
    url: `${config["j" /* URL */]}/tou`
  }
};

const PrivacyPage = () => terms_jsx(external_react_default.a.Fragment, null, terms_jsx(external_next_seo_default.a, {
  config: Object(fp_["merge"])(config["c" /* DEFAULT_SEO */], PAGE_SEO)
}), terms_jsx(NavigationBar["a" /* default */], {
  active: "tou"
}), terms_jsx(components_TermsOfUse, null), terms_jsx(FooterBar["a" /* default */], null));

/* harmony default export */ var terms = __webpack_exports__["default"] = (Object(external_react_redux_["connect"])()(PrivacyPage));

/***/ }),

/***/ "i4Cb":
/***/ (function(module, exports) {

module.exports = require("debug");

/***/ })

/******/ });