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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
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

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("mnIH");


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

/***/ "e528":
/***/ (function(module, exports) {

module.exports = {
	"main": "_3IXwKUup523kqzLWJV14GX",
	"header-container": "_1NbVSYxKWH7LlneCbdKOrX",
	"title": "_1KQ3o6Q2xY0COpOgFOKCr6",
	"content-container": "P64_IOhK8UaFKJhQOnGb"
};

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

/***/ "mnIH":
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

// EXTERNAL MODULE: ./src/components/Privacy/privacy.scss
var privacy = __webpack_require__("e528");
var privacy_default = /*#__PURE__*/__webpack_require__.n(privacy);

// CONCATENATED MODULE: ./src/components/Privacy/PrivacyContent.js

var __jsx = external_react_default.a.createElement;


const Header = () => __jsx("div", {
  className: privacy_default.a["header-container"]
}, __jsx("h1", {
  className: privacy_default.a.title
}, "Privacy Policy"));

const Policy = () => __jsx("div", {
  className: privacy_default.a["content-container"]
}, __jsx("div", null, "This Privacy Policy must be read in conjunction with the Terms of Use that accompany the applicable service you are requesting from us (the \"Service\"). In this Privacy Policy, \"Public Sector Entities\" means the Government (including its ministries, departments and organs of state) and public authorities (such as statutory boards)."), __jsx("ol", null, __jsx("li", null, "Insofar as the Service consists of or is provided to you through a website, please note that:", __jsx("ol", null, __jsx("li", null, "We may use \"cookies \", where a small data file is sent to your browser to store and track information about you when you enter our websites. The cookie is used to track information such as the number of users and their frequency of use, profiles of users and their preferred sites. While this cookie can tell us when you enter our sites and which pages you visit, it cannot read data off your hard disk."), __jsx("li", null, "You can choose to accept or decline cookies. Most web browsers automatically accept cookies, but you can usually modify your browser setting to decline cookies if you prefer. This may prevent you from taking full advantage of the website."))), __jsx("li", null, "We may request certain types of data from you in connection with your access or use of the Service. The data that may be requested include those identified in the Annex herein. Your data may be stored in our servers, systems or devices, in the servers, systems or devices of our third party service providers or collaborators, or on your device, and may be used by us or our third party service providers or collaborators to facilitate your access or use of the Service. We or our third party service providers or collaborators may collect system configuration information and/or traffic information (such as an IP address) and/or use information or statistical information to operate, maintain or improve the Services or the underlying service of the third party service provider or collaborator. For the avoidance of doubt, in this Privacy Policy, a reference to a third party service provider or collaborator includes other third parties who provide a service or collaborate with our third party service provider or collaborator."), __jsx("li", null, "If you provide us with personally identifiable data:", __jsx("ol", null, __jsx("li", null, "We may use, disclose and process the data for any one or more of the following purposes:", __jsx("ol", null, __jsx("li", null, "to assist, process and facilitate your access or use of the Service;"), __jsx("li", null, "to administer, process and facilitate any transactions or activities by you, whether with us or any other Public Sector Entity or third party service provider or collaborator, and whether for your own benefit, or for the benefit of a third party on whose behalf you are duly authorized to act;"), __jsx("li", null, "to carry out your instructions or respond to any queries, feedback or complaints provided by (or purported to be provided by) you or on your behalf, or otherwise for the purposes of responding to or dealing with your interactions with us;"), __jsx("li", null, "to monitor and track your usage of the Service, to conduct research, data analytics, surveys, market studies and similar activities, in order to assist us in understanding your interests, concerns and preferences and improving the Service (including any service of a third party service provider or collaborator) and other services and products provided by Public Sector Entities. For the avoidance of doubt, we may also collect, use, disclose and process such information to create reports and produce statistics regarding your transactions with us and your usage of the Services and other services and products provided by Public Sector Entities for record-keeping and reporting or publication purposes (whether internally or externally);"), __jsx("li", null, "for the purposes of storing or creating backups of your data (whether for contingency or business continuity purposes or otherwise), whether within or outside Singapore;"), __jsx("li", null, "to enable us to contact you or communicate with you on any matters relating to your access or use of the Service, including but not limited to the purposes set out above, via email, push notifications or such other forms of communication that we may introduce from time to time depending on the functionality of the Service and/or your device."))))), __jsx("li", null, "Please note that we may be required to disclose your data by law, including any law governing the use/provision of any service of a third party service provider or collaborator."), __jsx("li", null, "To safeguard your personal data, all electronic storage and transmission of personal data is secured with appropriate security technologies."), __jsx("li", null, "You may withdraw your consent to the use and disclosure of your data by us with reasonable notice and subject to any prevailing legal or contractual restrictions; however, doing so may prevent the proper functioning of the Service and may also result in the cessation of the Service to you."), __jsx("li", null, "The Service may contain links to external sites whose data protection and privacy practices may differ from ours. We are not responsible for the content and privacy practices of these other websites and encourage you to consult the privacy notices of those sites."), __jsx("li", null, "Please contact Info@tech.gov.sg if you:", __jsx("ol", null, __jsx("li", null, "have any enquires or feedback on our data protection policies and procedures; or"), __jsx("li", null, "need more information on or access to data which you have provided to us in the past.")))), "This version of the Privacy Policy is dated 26 April 2018.");

const Content = () => __jsx("div", {
  className: privacy_default.a.main
}, __jsx(Header, null), __jsx(Policy, null));

/* harmony default export */ var PrivacyContent = (Content);
// CONCATENATED MODULE: ./src/components/Privacy/index.js

/* harmony default export */ var Privacy = (PrivacyContent);
// EXTERNAL MODULE: ./src/config/index.js
var config = __webpack_require__("8SHQ");

// CONCATENATED MODULE: ./pages/privacy.js
var privacy_jsx = external_react_default.a.createElement;








const PAGE_SEO = {
  title: "Privacy Policy",
  description: "This Privacy Policy must be read in conjunction with the Terms of Use that accompany the applicable service you are requesting from us (the “Service”). In this Privacy Policy, “Public Sector Entities” means the Government (including its ministries, departments and organs of state) and public authorities (such as statutory boards).",
  openGraph: {
    title: "OpenCerts - Privacy Policy",
    description: "This Privacy Policy must be read in conjunction with the Terms of Use that accompany the applicable service you are requesting from us (the “Service”). In this Privacy Policy, “Public Sector Entities” means the Government (including its ministries, departments and organs of state) and public authorities (such as statutory boards).",
    url: `${config["j" /* URL */]}/privacy`
  }
};

const PrivacyPage = () => privacy_jsx(external_react_default.a.Fragment, null, privacy_jsx(external_next_seo_default.a, {
  config: Object(fp_["merge"])(config["c" /* DEFAULT_SEO */], PAGE_SEO)
}), privacy_jsx(NavigationBar["a" /* default */], {
  active: "privacy"
}), privacy_jsx(Privacy, null), privacy_jsx(FooterBar["a" /* default */], null));

/* harmony default export */ var pages_privacy = __webpack_exports__["default"] = (Object(external_react_redux_["connect"])()(PrivacyPage));

/***/ })

/******/ });