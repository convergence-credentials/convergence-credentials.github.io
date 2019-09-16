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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
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

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("csvi");


/***/ }),

/***/ "5psM":
/***/ (function(module, exports) {

module.exports = require("lodash/fp");

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

/***/ "Gwhu":
/***/ (function(module, exports) {

module.exports = {
	"main": "_2KkqkWQbcwHT3iLgaRS-Vr",
	"header-container": "_1yliCg7Qe1w43W1WkQGUp6",
	"title": "_3a6IIHbQO32yBO8D8hgnSX",
	"content-container": "Jsi10onAr2zw9n4pQB0YE",
	"question": "_2ayf5LCRzZF55XJuh44gQ2",
	"answer": "s0OyWfWQaXGQ4S1lYFr_d"
};

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

/***/ "csvi":
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

// EXTERNAL MODULE: ./src/components/FAQ/faq.scss
var FAQ_faq = __webpack_require__("Gwhu");
var faq_default = /*#__PURE__*/__webpack_require__.n(FAQ_faq);

// EXTERNAL MODULE: ./src/components/FAQ/FaqContent.json
var FaqContent = __webpack_require__("jxKS");

// CONCATENATED MODULE: ./src/components/FAQ/FaqContent.js

var __jsx = external_react_default.a.createElement;



const FaqHeader = () => __jsx("div", {
  className: faq_default.a["header-container"]
}, __jsx("h1", {
  className: faq_default.a.title
}, "Frequently Asked Questions"));

const renderQuestion = ({
  question,
  answer
}, index) => __jsx("div", {
  className: faq_default.a["content-container"],
  key: index
}, __jsx("a", {
  className: faq_default.a.question
}, __jsx("h5", null, question)), __jsx("div", null, __jsx("div", {
  className: faq_default.a.answer
}, __jsx("span", {
  dangerouslySetInnerHTML: {
    __html: answer
  }
}))));

const renderSection = ({
  category,
  faq = []
}, index) => __jsx("div", {
  className: faq_default.a["content-container"],
  key: index
}, __jsx("h4", null, category), faq.map(renderQuestion));

const FaqContent_FaqContent = () => __jsx("div", {
  className: faq_default.a.main
}, __jsx(FaqHeader, null), FaqContent.map(renderSection));

/* harmony default export */ var FAQ_FaqContent = (FaqContent_FaqContent);
// EXTERNAL MODULE: ./src/config/index.js
var config = __webpack_require__("8SHQ");

// CONCATENATED MODULE: ./pages/faq.js
var faq_jsx = external_react_default.a.createElement;








const PAGE_SEO = {
  title: "Frequently Asked Questions",
  description: "Have some questions in mind? Here are a list of collated questions and answers that might answer your questions.",
  openGraph: {
    title: "OpenCerts - Frequently Asked Questions",
    description: "Have some questions in mind? Here are a list of collated questions and answers that might answer your questions.",
    url: `${config["j" /* URL */]}/faq`
  }
};

const FaqPage = () => faq_jsx(external_react_default.a.Fragment, null, faq_jsx(external_next_seo_default.a, {
  config: Object(fp_["merge"])(config["c" /* DEFAULT_SEO */], PAGE_SEO)
}), faq_jsx(NavigationBar["a" /* default */], {
  active: "faq"
}), faq_jsx(FAQ_FaqContent, null), faq_jsx(FooterBar["a" /* default */], null));

/* harmony default export */ var pages_faq = __webpack_exports__["default"] = (Object(external_react_redux_["connect"])()(FaqPage));

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

/***/ "i4Cb":
/***/ (function(module, exports) {

module.exports = require("debug");

/***/ }),

/***/ "jxKS":
/***/ (function(module) {

module.exports = JSON.parse("[{\"category\":\"General\",\"faq\":[{\"question\":\"Who developed OpenCerts?\",\"answer\":\"<a href=\\\"https://www.tech.gov.sg/\\\">GovTech Singapore</a> developed OpenCerts in cooperation with the OpenCerts Consortium.\"},{\"question\":\"What is OpenCerts?\",\"answer\":\"OpenCerts is the umbrella trademark under which we have released a few key components: <br><ol><li>An <a href=\\\"https://github.com/OpenCerts/open-certificate\\\">open source schema</a> for publishing educational credentials </li><li><a href=\\\"https://github.com/OpenCerts/certificate-cli\\\"> A set of tools</a> for generating cryptographic protections for educational credentials </li><li>This online website for verifying the authenticity of OpenCerts files.</li></ol>\"},{\"question\":\"Where do I get an OpenCerts certificate?\",\"answer\":\"OpenCerts is currently in the early stages of progressive rollout. If you wish to know whether your educational institute supports OpenCerts, please contact their administrative office.\"},{\"question\":\"Is my personal data safe on the blockchain?\",\"answer\":\"Academic records of the certificate and personal data are not published on the blockchain. A hash is generated from the certificate and is used to prove that the certificate is legitimate. The process of computing the hash from the certificate is not reversible. Since the hash is the only information published into the blockchain, no personal information can be obtained from content on the blockchain.\"},{\"question\":\"Why is OpenCerts backed by blockchain technology?\",\"answer\":\"Using blockchain, we can greatly reduce the barrier to entry of publishing cryptographically protected educational credentials, as compared to currently existing costly proprietary software. In addition, a public blockchain is owned and maintained by the community and is easily accessible by anyone. As a result, there is no need to run or maintain services to verify OpenCerts.\"},{\"question\":\"Why use the Ethereum blockchain?\",\"answer\":\"Ethereum is the blockchain network with the largest developer base, as well as having a large number of participants securing the network.\"},{\"question\":\"How do I send my OpenCerts certificate to someone?\",\"answer\":\"You may use the share button that is visible when you view your certificate, or you can simply email the OpenCerts file to them.\"},{\"question\":\"Why can't I print the certificate?\",\"answer\":\"Printing the certificate discards all the advanced cryptographic protections we have built into OpenCerts, hence printed certificates are not to be considered authentic.\"},{\"question\":\"What happens if I modify the OpenCerts file?\",\"answer\":\"The modified certificate will fail validation and show up as having been tampered with.\"},{\"question\":\"What does it mean by Signature?\",\"answer\":\"In every properly issued OpenCerts certificate file, there is a hash-based message authentication code which cryptographically certifies that the content of the certificate has not been altered. If you would like to know more about the technical nitty-gritty of how this works, check out our <a href=\\\"https://docs.opencerts.io\\\">technical documentation</a>.\"}]},{\"category\":\"Verifications\",\"faq\":[{\"question\":\"What does it mean by Unascertained Issuer?\",\"answer\":\"OpenCerts has to maintain a list of identified issuing institutes in order to detect fraudulent issuing institutes masquerading as legitimate ones. At this point in time, it is not unlikely that a legitimate issuing institute is not on our list of recognised institutions. If you are sure that your certificate is from a legitimate issuer, contact the institute directly.\"},{\"question\":\"What does it mean by Ethereum Blockchain?\",\"answer\":\"The Ethereum Blockchain is a publicly usable distributed ledger based on blockchain technology. You can think of it as a publicly readable database.\"},{\"question\":\"What does it mean by Revoked?\",\"answer\":\"The issuer has explicitly published a notice of revocation for this certificate and it is no longer a valid certificate.\"},{\"question\":\"Is this safe to use? Can't anyone just copy my certificate file and pass off as me?\",\"answer\":\"Yes, the certificate file can trivially be duplicated. However, the recipient's name in the certificate cannot be altered without failing our verification process. Thus it is extremely important that the person doing the verification ensures that the recipient indicated in the certificate is actually the entity presenting the certificate. For more advanced institutions, there is the possibility of using Distributed IDs to associate the certificate recipient's public key for further authentication using public/private key signing in the future.\"}]},{\"category\":\"Institutes\",\"faq\":[{\"question\":\"How can I add my institute to the list of recognised issuers?\",\"answer\":\"Please see our <a href=\\\"https://docs.opencerts.io/identity_registry.html\\\">documentation</a>\"},{\"question\":\"How can I change the appearance of the certificates I issue?\",\"answer\":\"Each certificate can have a \\\"template\\\" field. This field identifies the template to be used for that certificate. Once you are a recognised issuer, you may submit a pull request at our GitHub repository to add your certificate template to the verification site.\"}]}]");

/***/ })

/******/ });