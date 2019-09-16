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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
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

/***/ "31zI":
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

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js
var objectSpread = __webpack_require__("zrwo");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js
var keys = __webpack_require__("pLtp");
var keys_default = /*#__PURE__*/__webpack_require__.n(keys);

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__("YLtl");

// EXTERNAL MODULE: ./src/components/registry.scss
var registry = __webpack_require__("668o");
var registry_default = /*#__PURE__*/__webpack_require__.n(registry);

// EXTERNAL MODULE: ./static/registry.json
var static_registry = __webpack_require__("DhO5");

// EXTERNAL MODULE: ./src/components/UI/Card/card.js
var card = __webpack_require__("uFhb");

// CONCATENATED MODULE: ./src/components/RegistryPageContainer.js



var __jsx = external_react_default.a.createElement;





const members = keys_default()(static_registry.issuers).map(k => Object(objectSpread["a" /* default */])({}, static_registry.issuers[k], {
  address: k
}));

const partners = Object(external_lodash_["filter"])(members, "displayCard");

const renderMembers = () => partners.map((partner, index) => __jsx(card["a" /* default */], {
  key: index,
  info: partner
}));

const RegistryPage = () => __jsx(external_react_default.a.Fragment, null, __jsx("div", {
  className: "container-fluid",
  style: {
    backgroundColor: "#324353"
  }
}, __jsx("div", {
  className: `container bg-brand-dark text-white ${registry_default.a["r-section"]}`
}, __jsx("h1", {
  className: `col-12 ${registry_default.a["m-pd-0"]} ${registry_default.a["section-width"]}`
}, "Registry")), __jsx("div", {
  className: `container bg-brand-dark text-white ${registry_default.a["r-section"]}`
}, __jsx("div", {
  className: registry_default.a["section-width"]
}, __jsx("div", {
  className: `col-lg-6 col-md-12 my-3 ${registry_default.a["m-pd-0"]}`
}, __jsx("p", null, "The registry is a list of recognised issuers with their certificate store addresses. Certificates from these issuers can be recognised and verified by our viewer."), __jsx("p", null, "Certificates with unverified issuer means that the certificate store address is not registered. This could mean that the issuer has not registered with OpenCerts."))))), __jsx("div", {
  className: `row ${registry_default.a["r-section"]} ${registry_default.a["section-width"]}`
}, renderMembers()));

/* harmony default export */ var RegistryPageContainer = (RegistryPage);
// EXTERNAL MODULE: ./src/config/index.js
var config = __webpack_require__("8SHQ");

// CONCATENATED MODULE: ./pages/registry.js

var registry_jsx = external_react_default.a.createElement;







const PAGE_SEO = {
  title: "Registry",
  description: "The registry is a list of recognised issuers with their certificate store addresses. Certificates from these issuers can be recognised and verified by our viewer.",
  openGraph: {
    title: "OpenCerts - Registry",
    description: "The registry is a list of recognised issuers with their certificate store addresses. Certificates from these issuers can be recognised and verified by our viewer.",
    url: `${config["j" /* URL */]}/registry`
  }
};

const registry_RegistryPage = () => registry_jsx(external_react_default.a.Fragment, null, registry_jsx(external_next_seo_default.a, {
  config: Object(fp_["merge"])(config["c" /* DEFAULT_SEO */], PAGE_SEO)
}), registry_jsx(NavigationBar["a" /* default */], {
  active: "registry"
}), registry_jsx(RegistryPageContainer, null), registry_jsx(FooterBar["a" /* default */], null));

/* harmony default export */ var pages_registry = __webpack_exports__["default"] = (Object(external_react_redux_["connect"])()(registry_RegistryPage));

/***/ }),

/***/ "4mXO":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("k1wZ");

/***/ }),

/***/ "5psM":
/***/ (function(module, exports) {

module.exports = require("lodash/fp");

/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("31zI");


/***/ }),

/***/ "668o":
/***/ (function(module, exports) {

module.exports = {
	"r-section": "_3YcS-i-lO6mT_4NEm75gZ5",
	"section-width": "yzhBLuWNJyUUweqkbLHbA",
	"m-pd-0": "_1mslglYO5yir2z16SYod7m"
};

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

/***/ "DhO5":
/***/ (function(module) {

module.exports = JSON.parse("{\"issuers\":{\"0x007d40224f6562461633ccfbaffd359ebb2fc9ba\":{\"name\":\"Government Technology Agency of Singapore (GovTech)\",\"displayCard\":true,\"website\":\"https://www.tech.gov.sg\",\"email\":\"info@tech.gov.sg\",\"phone\":\"+65 6211 2100\",\"logo\":\"/static/images/GOVTECH_logo.png\",\"id\":\"govtech-registry\"},\"0x5CA3b9daC85DA4DE4030e59C1a0248004209e348\":{\"name\":\"Nanyang Polytechnic\",\"displayCard\":true,\"website\":\"https://www.nyp.edu.sg/\",\"email\":\"askNYP@nyp.edu.sg\",\"phone\":\"+65 6451 5115\",\"logo\":\"/static/images/NYP_logo.png\",\"id\":\"nyp-registry\"},\"0xa5d801265D29A6F1015a641BfC0e39Ee3dA2AC76\":{\"name\":\"Ngee Ann Polytechnic\",\"displayCard\":true,\"website\":\"https://www.np.edu.sg\",\"email\":\"asknp@np.edu.sg\",\"phone\":\"+65 6466 6555\",\"logo\":\"/static/images/NP_logo.svg\",\"id\":\"np-registry\"},\"0xE4a94Ef9C26904A02Cd6735F7D4De1D840146a0f\":{\"name\":\"Singapore Examinations and Assessment Board\",\"displayCard\":true,\"website\":\"https://www.seab.gov.sg/\",\"email\":\"\",\"phone\":\"+65 6872 2220\",\"logo\":\"/static/images/SEAB_logo_crop.png\",\"id\":\"seab-registry\"},\"0x24a7DE31D231221ab6B1B325Ca5F1AA7bfbaaabA\":{\"name\":\"Singapore Institute of Technology\",\"displayCard\":true,\"website\":\"https://www.singaporetech.edu.sg/\",\"email\":\"\",\"phone\":\"+65 6592 1136\",\"logo\":\"/static/images/SIT_logo.png\",\"id\":\"sit-registry\"},\"0x78CE67fcb40D9D9552A313670A2e0eef11043995\":{\"name\":\"SkillsFuture Singapore\",\"displayCard\":true,\"website\":\"https://www.ssg-wsg.gov.sg/\",\"email\":\"\",\"phone\":\"+65 6785 5785\",\"logo\":\"/static/images/SSG_logo.png\",\"id\":\"ssg-registry\"},\"0x4d05f843718da742b4229938f972a3eb969c25ce\":{\"name\":\"Temasek Polytechnic\",\"displayCard\":true,\"website\":\"https://www.tp.edu.sg/home\",\"email\":\"enquiry@tp.edu.sg\",\"phone\":\"+65 6789 8220\",\"logo\":\"/static/images/TP_logo.svg\",\"id\":\"tp-registry\"},\"0x0CE38eBEa3B943Ee6DA24163710b25Ef8654f39E\":{\"name\":\"Institute of Technical Education\",\"displayCard\":true,\"website\":\"https://www.ite.edu.sg\",\"email\":\"training@ite.edu.sg\",\"phone\":\"1800-2222 111\",\"logo\":\"/static/images/ITE_logo.png\",\"id\":\"ite-registry\"},\"0x18270bA6dA0380a2cbC705bc6C0AD6651282bD14\":{\"name\":\"Republic Polytechnic\",\"displayCard\":true,\"website\":\"https://www.rp.edu.sg/\",\"email\":\"one-stop@rp.edu.sg\",\"phone\":\"+65 6510 3000\",\"logo\":\"/static/images/RP_logo.svg\",\"id\":\"rp-registry\"},\"0x96a7bEefb0A7fb6B9d2101B0A27a734fA97E7221\":{\"name\":\"Singapore University of Technology and Design\",\"displayCard\":true,\"website\":\"https://sutd.edu.sg\",\"email\":\"opencert@sutd.edu.sg\",\"phone\":\"+65 6499 8922\",\"logo\":\"/static/images/SUTD_logo.png\",\"id\":\"sutd-registry\"},\"0x16E949FcDC655765959Ac085CA7B1aE353D6Ca35\":{\"name\":\"Nanyang Technological University\",\"displayCard\":true,\"website\":\"https://www.ntu.edu.sg\",\"email\":\"deg_verify@ntu.edu.sg\",\"phone\":\"+65 6592 2448\",\"logo\":\"/static/images/NTU_logo.png\",\"id\":\"ntu-registry\"},\"0x3FFB6b913E9874c7ddabD564d85676Bc5cAd16d4\":{\"name\":\"ROPSTEN: Nanyang Technological University\",\"displayCard\":false},\"0x5f007251c78cA92d3053492cCf0EDC161063624c\":{\"name\":\"ROPSTEN: Nanyang Polytechnic\",\"displayCard\":false},\"0xfEbB273495F5C2c4783E23424Fe9773691b57fcB\":{\"name\":\"ROPSTEN: National University of Singapore\",\"displayCard\":false},\"0x866Fb78aC3c87019aBff9FB566acfF66F75Cfa46\":{\"name\":\"ROPSTEN: Ngee Ann Polytechnic\",\"displayCard\":false},\"0xc36484efa1544c32ffed2e80a1ea9f0dfc517495\":{\"name\":\"ROPSTEN: Ngee Ann Polytechnic\",\"displayCard\":false},\"0xeDe1B6Fc03f1a9C6905C93a2fceb06E19624a55E\":{\"name\":\"ROPSTEN: Singapore Examinations and Assessment Board\",\"displayCard\":false},\"0x897E224a6a8b72535D67940B3B8CE53f9B596800\":{\"name\":\"ROPSTEN: Singapore Institute of Technology\",\"displayCard\":false},\"0x3f43FB8546E97b2c1D5eD087767C0d2eb2e13f8b\":{\"name\":\"ROPSTEN: Singapore Institute of Technology (Ledger Nano)\",\"displayCard\":false},\"0xCE4D56Fea4a4EB33E8A3502CEe6Db075224C896d\":{\"name\":\"ROPSTEN: Skillsfuture Singapore\",\"displayCard\":false},\"0xe825e69383a57eB686Fc7b8c455Dd982bB9680f6\":{\"name\":\"ROPSTEN: Temasek Polytechnic\",\"displayCard\":false},\"0xE5c693015460868F817799CAFb363EEDb4F9E446\":{\"name\":\"ROPSTEN: Institute of Technical Education\",\"displayCard\":false},\"0xdcA6Eea7024151c270b50FcA9E67161119B06BAD\":{\"name\":\"ROPSTEN: Government Technology Agency of Singapore (GovTech)\",\"displayCard\":false},\"0x532C9Ff853CA54370D7492cD84040F9f8099f11B\":{\"name\":\"ROPSTEN: Government Technology Agency of Singapore (GovTech)\",\"displayCard\":false},\"0x061aFcFF60b90E0F633F8ef157e01BaB9b2FfDD3\":{\"name\":\"ROPSTEN: Republic Polytechnic\",\"displayCard\":false},\"0x2456FC81C1342fB79D7C58A4682F031208A44d7F\":{\"name\":\"ROPSTEN: Singapore University of Technology and Design\",\"displayCard\":false},\"0x46cf931c320ce7277753dbb15567dD684404e36C\":{\"name\":\"ROPSTEN: Singapore University of Social Sciences\",\"displayCard\":false}}}");

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

/***/ "Jo+v":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Z6Kq");

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

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "X/AX":
/***/ (function(module, exports) {

module.exports = {
	"card": "_35E4bXVte6s_mFl20IQ0eJ",
	"logo": "XoNjF2hSpQc3fMOYyP5CF",
	"partner-block": "_32qgXughM9Se-KlARAbi3I",
	"section-width": "_1BpE0kpG-9ClgfjNWXFxpt",
	"mb-3": "_3AC_e_e5UjeEKi8gYFa2YO",
	"m-pd-0": "KHmZGmB3D5q1WPL-hRmJy"
};

/***/ }),

/***/ "YLtl":
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "Z6Kq":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

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

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "i4Cb":
/***/ (function(module, exports) {

module.exports = require("debug");

/***/ }),

/***/ "k1wZ":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "pLtp":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("qJj/");

/***/ }),

/***/ "qJj/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "uFhb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _card_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("X/AX");
/* harmony import */ var _card_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_card_scss__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Card = props => __jsx("div", {
  id: props.info.id,
  className: `col-lg-4 col-md-6 col-sm-12 ${_card_scss__WEBPACK_IMPORTED_MODULE_1___default.a["mb-3"]} ${_card_scss__WEBPACK_IMPORTED_MODULE_1___default.a["m-pd-0"]}`,
  style: {
    paddingBottom: "36px",
    wordWrap: "break-word"
  }
}, __jsx("a", {
  href: props.info.website,
  target: "_blank",
  rel: "noopener noreferrer nofollow",
  style: {
    color: "#000",
    textDecoration: "none"
  }
}, __jsx("div", {
  className: _card_scss__WEBPACK_IMPORTED_MODULE_1___default.a["partner-block"]
}, __jsx("img", {
  className: `${_card_scss__WEBPACK_IMPORTED_MODULE_1___default.a.logo}`,
  src: props.info.logo,
  id: _card_scss__WEBPACK_IMPORTED_MODULE_1___default.a[props.info.key]
}), __jsx("h4", {
  className: _card_scss__WEBPACK_IMPORTED_MODULE_1___default.a["partner-name"],
  style: {
    fontWeight: "bold"
  }
}, props.info.name), props.info.address ? __jsx("div", null, "Certificate Store:", " ", __jsx("a", {
  href: `https://etherscan.io/address/${props.info.address}`
}, props.info.address)) : "", props.info.address && props.info.website ? __jsx("div", null, "Website:", " ", __jsx("a", {
  href: props.info.website,
  target: "_blank",
  rel: "noopener noreferrer"
}, props.info.website)) : "", props.info.email ? __jsx("div", null, "Email: ", __jsx("a", {
  href: `mailto:${props.info.email}`
}, props.info.email)) : "", props.info.phone ? __jsx("div", null, "Phone: ", __jsx("a", {
  href: `tel:${props.info.phone}`
}, props.info.phone)) : "", props.info.description ? __jsx("div", null, props.info.description) : "")));

/* harmony default export */ __webpack_exports__["a"] = (Card);

/***/ }),

/***/ "vYYK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hfKm");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "zrwo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _objectSpread; });
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Jo+v");
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("4mXO");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("pLtp");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("vYYK");




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source);

    if (typeof _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') {
      ownKeys = ownKeys.concat(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) {
        return _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ })

/******/ });