module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		9: 0
/******/ 	};
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("../../../" + ({}[chunkId]||chunkId) + "." + {"10":"d3cc07f0995bfdb06122"}[chunkId] + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+NUC":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/rewrite-url-for-export");

/***/ }),

/***/ "/T1H":
/***/ (function(module, exports) {

module.exports = require("next/dynamic");

/***/ }),

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

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__("htGi"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _propTypes = _interopRequireDefault(__webpack_require__("rf6O"));

function withRouter(ComposedComponent) {
  class WithRouteWrapper extends _react.default.Component {
    constructor() {
      super(...arguments);
      this.context = void 0;
    }

    render() {
      return _react.default.createElement(ComposedComponent, (0, _extends2.default)({
        router: this.context.router
      }, this.props));
    }

  }

  WithRouteWrapper.displayName = void 0;
  WithRouteWrapper.getInitialProps = void 0;
  WithRouteWrapper.contextTypes = {
    router: _propTypes.default.object
  };
  WithRouteWrapper.getInitialProps = ComposedComponent.getInitialProps;

  if (false) {}

  return WithRouteWrapper;
}

/***/ }),

/***/ "1cau":
/***/ (function(module, exports) {

module.exports = require("react-google-recaptcha");

/***/ }),

/***/ "1l0m":
/***/ (function(module, exports) {

module.exports = require("penpal/lib/connectToChild");

/***/ }),

/***/ "3R5n":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export validateEvent */
/* unused harmony export stringifyEvent */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return analyticsEvent; });
/* harmony import */ var _utils_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("gjtA");

const {
  trace
} = Object(_utils_logger__WEBPACK_IMPORTED_MODULE_0__[/* getLogger */ "a"])("components:Analytics:");
const {
  trace: traceDev
} = Object(_utils_logger__WEBPACK_IMPORTED_MODULE_0__[/* getLogger */ "a"])("components:Analytics(Inactive):");
const validateEvent = ({
  category,
  action,
  value
}) => {
  if (!category) throw new Error("Category is required");
  if (!action) throw new Error("Action is required");
  if (value && typeof value !== "number") throw new Error("Value must be a number");
};
const stringifyEvent = ({
  category,
  action,
  label,
  value
}) => `Category*: ${category}, Action*: ${action}, Label: ${label}, Value: ${value}`;
const analyticsEvent = (window, evt) => {
  validateEvent(evt);

  if (false) {}

  traceDev(stringifyEvent(evt));
  return null;
};
/* unused harmony default export */ var _unused_webpack_default_export = (analyticsEvent);

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "4mXO":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("k1wZ");

/***/ }),

/***/ "5Uuq":
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__("Jo+v");

var _Object$defineProperty = __webpack_require__("hfKm");

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = _Object$defineProperty && _Object$getOwnPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            _Object$defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "61xp":
/***/ (function(module, exports) {

module.exports = {
	"detailed-certificate-block": "_2NqQyDoy96MB45AMEnEon-",
	"valid-border-color": "_2xTMvr4PPFUBABLad76pO5",
	"warning-border-color": "_2_Qm5u9pkV6aNEJlawXk0R",
	"invalid-border-color": "i523olvQnIvjWslsvGSP-"
};

/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("EJWQ");


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

/***/ "9Jkg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("fozc");

/***/ }),

/***/ "EJWQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next-seo"
var external_next_seo_ = __webpack_require__("efsx");
var external_next_seo_default = /*#__PURE__*/__webpack_require__.n(external_next_seo_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: ./src/components/Layout/NavigationBar/index.js + 1 modules
var NavigationBar = __webpack_require__("RTI1");

// EXTERNAL MODULE: ./src/components/Layout/FooterBar.js
var FooterBar = __webpack_require__("GiID");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: external "@govtechsg/open-attestation"
var open_attestation_ = __webpack_require__("va7A");

// EXTERNAL MODULE: ./src/reducers/certificate.js
var reducers_certificate = __webpack_require__("wXLy");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js
var stringify = __webpack_require__("9Jkg");
var stringify_default = /*#__PURE__*/__webpack_require__.n(stringify);

// EXTERNAL MODULE: external "next/dynamic"
var dynamic_ = __webpack_require__("/T1H");
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic_);

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__("YLtl");

// EXTERNAL MODULE: ./src/components/CertificateVerifyBlock/detailedCertificateBlock.scss
var detailedCertificateBlock = __webpack_require__("61xp");
var detailedCertificateBlock_default = /*#__PURE__*/__webpack_require__.n(detailedCertificateBlock);

// CONCATENATED MODULE: ./src/components/CertificateVerifyBlock/constants.js
const LOG_LEVEL = {
  CONNECTING: "CONNECTING",
  VERIFYING: "VERIFYING",
  VALID: "VALID",
  INVALID: "INVALID",
  WARNING: "WARNING"
};
/* harmony default export */ var constants = ({
  LOG_LEVEL
});
// CONCATENATED MODULE: ./src/components/CertificateVerifyBlock/DetailedCertificateVerifyBlock.js

var __jsx = external_react_default.a.createElement;



const SuccessIcon = () => __jsx("i", {
  className: "fas fa-check text-success mr-2"
});

const FailureIcon = () => __jsx("i", {
  className: "fas fa-times-circle text-danger mr-2"
});

const WarningIcon = () => __jsx("i", {
  className: "fas fa-question text-warning mr-2"
});

const CheckStatusRow = ({
  message,
  icon
}) => __jsx("div", {
  className: "row"
}, __jsx("div", {
  className: "col-2"
}, icon), __jsx("div", {
  className: "col-10"
}, __jsx("div", {
  className: "row"
}, message)));

const renderFailure = check => __jsx(CheckStatusRow, {
  message: check.failure,
  icon: check.failureStatusIcon()
});

const renderSuccess = check => __jsx(CheckStatusRow, {
  message: check.success,
  icon: SuccessIcon()
});

const renderStatus = (props, type, typeVerified = true) => {
  const isVerified = props[type.id].verified;
  if (isVerified !== typeVerified) return "";
  return isVerified ? renderSuccess(type) : renderFailure(type);
};

const CHECKS = {
  HASH: {
    id: "hashStatus",
    success: "Certificate has not been tampered with",
    failure: "Certificate has been tampered with",
    failureStatusIcon: FailureIcon
  },
  ISSUED: {
    id: "issuedStatus",
    success: "Certificate has been issued",
    failure: "Certificate has not been issued",
    failureStatusIcon: FailureIcon
  },
  ISSUER_IDENTITY: {
    id: "issuerIdentityStatus",
    success: "Certificate Verified",
    failure: "Institution identity can not be verified by registry or dns",
    failureStatusIcon: WarningIcon
  },
  NOT_REVOKED: {
    id: "notRevokedStatus",
    success: "Certificate has not been revoked",
    failure: "Certificate has been revoked",
    failureStatusIcon: WarningIcon
  }
};

const renderVerifiedStatuses = props => __jsx("div", null, renderStatus(props, CHECKS.HASH), renderStatus(props, CHECKS.ISSUED), renderStatus(props, CHECKS.ISSUER_IDENTITY), renderStatus(props, CHECKS.NOT_REVOKED));

const renderUnverifiedStatuses = props => {
  const show = !props.hashStatus.verified || !props.issuedStatus.verified || !props.issuerIdentityStatus.verified || !props.notRevokedStatus.verified;
  return show ? __jsx("div", null, renderStatus(props, CHECKS.HASH, false), renderStatus(props, CHECKS.ISSUED, false), renderStatus(props, CHECKS.ISSUER_IDENTITY, false), renderStatus(props, CHECKS.NOT_REVOKED, false), __jsx("hr", null)) : "";
};

const CertificateVerifyBlock = props => {
  let borderColor;

  switch (props.statusSummary) {
    case LOG_LEVEL.VALID:
      borderColor = "valid-border-color";
      break;

    case LOG_LEVEL.WARNING:
      borderColor = "warning-border-color";
      break;

    case LOG_LEVEL.INVALID:
    default:
      borderColor = "invalid-border-color";
  }

  return __jsx("div", {
    className: `${detailedCertificateBlock_default.a["detailed-certificate-block"]} ${detailedCertificateBlock_default.a[borderColor]} bg-white p-3`
  }, __jsx("div", {
    className: "mb-3"
  }, __jsx("h5", null, "Details")), renderUnverifiedStatuses(props), renderVerifiedStatuses(props));
};

/* harmony default export */ var DetailedCertificateVerifyBlock = (CertificateVerifyBlock);
// EXTERNAL MODULE: ./src/components/CertificateVerifyBlock/certificateVerifyBlock.scss
var certificateVerifyBlock = __webpack_require__("nGbF");
var certificateVerifyBlock_default = /*#__PURE__*/__webpack_require__.n(certificateVerifyBlock);

// CONCATENATED MODULE: ./src/components/ViewerPageImages.js
var ViewerPageImages_jsx = external_react_default.a.createElement;

/* eslint react/display-name: 0 */


const viewerImages = {
  print: () => ViewerPageImages_jsx("i", null, ViewerPageImages_jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "56.81",
    height: "50.77",
    viewBox: "0 0 56.81 50.77"
  }, ViewerPageImages_jsx("defs", null, ViewerPageImages_jsx("linearGradient", {
    id: "a",
    x1: "29.18",
    y1: "34.39",
    x2: "29.18",
    y2: "18.05",
    gradientUnits: "userSpaceOnUse"
  }, ViewerPageImages_jsx("stop", {
    offset: "0",
    stopColor: "#faa94e"
  }), ViewerPageImages_jsx("stop", {
    offset: "1",
    stopColor: "#f47d4d"
  }))), ViewerPageImages_jsx("title", null, "Print"), ViewerPageImages_jsx("path", {
    d: "M13.08,26.42V6.48a3.64,3.64,0,0,1,3.64-3.64H42.05a3.64,3.64,0,0,1,3.64,3.64V25M17.21,49.61H51.94A3.64,3.64,0,0,0,55.58,46V30.06a3.64,3.64,0,0,0-3.64-3.64H6.41a3.64,3.64,0,0,0-3.64,3.64V46a3.64,3.64,0,0,0,3.64,3.65H9.93M21.87,11.7H37.58m-15.71,7H37.58m5.58,15,6.81,0",
    transform: "translate(-0.77 -0.84)",
    fill: "#fff",
    strokeWidth: "4",
    stroke: "url(#a)"
  }))),
  send: () => ViewerPageImages_jsx("i", null, ViewerPageImages_jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "59.6",
    height: "44.2",
    viewBox: "0 0 59.6 44.2"
  }, ViewerPageImages_jsx("defs", null, ViewerPageImages_jsx("linearGradient", {
    id: "a",
    x1: "29.8",
    y1: "17.28",
    x2: "29.8",
    y2: "31.55",
    gradientTransform: "matrix(1, 0, 0, -1, 0, 47)",
    gradientUnits: "userSpaceOnUse"
  }, ViewerPageImages_jsx("stop", {
    offset: "0",
    stopColor: "#faa94e"
  }), ViewerPageImages_jsx("stop", {
    offset: "1",
    stopColor: "#f47d4d"
  })), ViewerPageImages_jsx("linearGradient", {
    id: "b",
    x1: "-569.09",
    y1: "98.35",
    x2: "-569.09",
    y2: "100.46",
    gradientTransform: "matrix(36.9, 0, 0, -14.68, 21029.48, 1503.59)",
    xlinkHref: "#a"
  }), ViewerPageImages_jsx("linearGradient", {
    id: "c",
    x1: "30.56",
    y1: "55.8",
    x2: "30.56",
    y2: "61.4",
    gradientTransform: "matrix(0.99, 0.17, 0.19, -1, -21.61, 83.11)",
    xlinkHref: "#a"
  }), ViewerPageImages_jsx("linearGradient", {
    id: "d",
    x1: "-456.93",
    y1: "-19.99",
    x2: "-456.93",
    y2: "-14.38",
    gradientTransform: "matrix(0.12, -0.99, -0.99, -0.11, 78.63, -424.23)",
    xlinkHref: "#a"
  })), ViewerPageImages_jsx("title", null, "Email"), ViewerPageImages_jsx("path", {
    d: "M57.6,32.1V39a3.69,3.69,0,0,1-3.7,3.7H5.7A3.69,3.69,0,0,1,2,39V6.2A3.69,3.69,0,0,1,5.7,2.5H53.8a3.69,3.69,0,0,1,3.7,3.7V23.3",
    transform: "translate(0 -0.5)",
    fill: "#fff",
    strokeWidth: "4",
    stroke: "url(#a)"
  }), ViewerPageImages_jsx("g", null, ViewerPageImages_jsx("path", {
    d: "M6.8,9.5,29.4,27.4,52,9.5",
    transform: "translate(0 -0.5)",
    fill: "#fff",
    strokeWidth: "4",
    stroke: "url(#b)"
  }), ViewerPageImages_jsx("line", {
    x1: "12.6",
    y1: "36.3",
    x2: "26.6",
    y2: "23.3",
    fill: "none",
    strokeWidth: "4",
    stroke: "url(#c)"
  }), ViewerPageImages_jsx("line", {
    x1: "46.5",
    y1: "36.2",
    x2: "33.1",
    y2: "23.3",
    fill: "none",
    strokeWidth: "4",
    stroke: "url(#d)"
  })))),
  check: () => ViewerPageImages_jsx("i", null, ViewerPageImages_jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "17.32",
    height: "11.83",
    viewBox: "0 0 17.32 11.83"
  }, ViewerPageImages_jsx("title", null, "check"), ViewerPageImages_jsx("path", {
    d: "M17.86,2.34,8.08,12.11a1,1,0,0,1-1.45,0L1.14,6.62A1,1,0,1,1,2.59,5.17L7.36,9.94,16.41.88a1,1,0,0,1,1.45,0A1,1,0,0,1,17.86,2.34Z",
    transform: "translate(-0.84 -0.58)",
    fill: "#fff"
  }))),
  checkCircle: () => ViewerPageImages_jsx("i", null, ViewerPageImages_jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "35",
    height: "35",
    viewBox: "0 0 35 35"
  }, ViewerPageImages_jsx("title", null, "check-circle"), ViewerPageImages_jsx("path", {
    id: certificateVerifyBlock_default.a.circle,
    d: "M29.87,5.13a17.48,17.48,0,0,0-24.74,0,17.48,17.48,0,0,0,0,24.74,17.48,17.48,0,0,0,24.74,0,17.48,17.48,0,0,0,0-24.74Z",
    fill: "#fff"
  }), ViewerPageImages_jsx("path", {
    id: certificateVerifyBlock_default.a.check,
    d: "M25.86,13.34l-9.78,9.77a1,1,0,0,1-1.45,0L9.14,17.62a1,1,0,0,1,1.45-1.45l4.77,4.77,9.05-9.06a1,1,0,0,1,1.45,0A1,1,0,0,1,25.86,13.34Z",
    fill: "#09a63b"
  }))),
  arrow: () => ViewerPageImages_jsx("i", null, ViewerPageImages_jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "8.1",
    height: "14.36",
    viewBox: "0 0 8.1 14.36"
  }, ViewerPageImages_jsx("title", null, "arrow"), ViewerPageImages_jsx("polyline", {
    points: "0.74 0.68 6.74 7.13 0.74 13.68",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "2"
  })))
};
/* harmony default export */ var ViewerPageImages = (viewerImages);
// CONCATENATED MODULE: ./src/components/CertificateVerifyBlock/CertificateVerifyBlock.js

var CertificateVerifyBlock_jsx = external_react_default.a.createElement;






const statusSummary = ({
  verifying,
  hashStatus,
  issuedStatus,
  notRevokedStatus,
  issuerIdentityStatus
}) => {
  if (verifying) return LOG_LEVEL.VERIFYING;
  if (!verifying && hashStatus.verified && issuedStatus.verified && notRevokedStatus.verified && issuerIdentityStatus.verified) return LOG_LEVEL.VALID;
  if (!verifying && hashStatus.verified && issuedStatus.verified && notRevokedStatus.verified && !issuerIdentityStatus.verified) return LOG_LEVEL.WARNING;
  return LOG_LEVEL.INVALID;
};

const renderIcon = status => {
  let icon;

  switch (status) {
    case LOG_LEVEL.CONNECTING:
    case LOG_LEVEL.VERIFYING:
      icon = CertificateVerifyBlock_jsx("i", {
        id: "verify-spinner",
        className: "fa fa-spinner fa-spin fa-2x"
      });
      break;

    case LOG_LEVEL.VALID:
      icon = ViewerPageImages.checkCircle();
      break;

    case LOG_LEVEL.WARNING:
      icon = CertificateVerifyBlock_jsx("i", {
        id: "verify-warning",
        className: "fas fa-exclamation-triangle fa-2x"
      });
      break;

    default:
      icon = CertificateVerifyBlock_jsx("i", {
        id: "verify-invalid",
        className: "fas fa-times-circle fa-2x"
      });
  }

  return CertificateVerifyBlock_jsx("div", {
    className: `d-flex justify-content-center align-items-center ${certificateVerifyBlock_default.a["verified-icon"]}`
  }, icon);
};

const getIdentityVerificationText = identityStatus => {
  if (Object(external_lodash_["some"])(identityStatus, ({
    registry
  }) => !!registry)) {
    return "Accredited by SSG";
  } // note filter Boolean is to remove empty values


  const dnsNames = Object(external_lodash_["sortBy"])(identityStatus, ["dns"]).map(({
    dns
  }) => dns ? dns.toUpperCase() : null).filter(Boolean);
  return `Issued by ${dnsNames.length > 0 ? dnsNames[0] : "Unknown"}`;
};

const renderText = (status, props) => {
  let text;

  switch (status) {
    case LOG_LEVEL.CONNECTING:
      text = "Connecting ...";
      break;

    case LOG_LEVEL.VERIFYING:
      text = "Verifying Certificate ...";
      break;

    case LOG_LEVEL.VALID:
      {
        const identity = Object(external_lodash_["get"])(props, "issuerIdentityStatus.identities", []);
        text = getIdentityVerificationText(identity);
        break;
      }

    case LOG_LEVEL.WARNING:
      text = "Institution identity not verified";
      break;

    default:
      text = "Invalid Certificate";
  }

  return CertificateVerifyBlock_jsx("div", {
    className: certificateVerifyBlock_default.a["verification-text"]
  }, text);
};

const SimpleVerifyBlock = props => {
  const status = statusSummary(props);
  const renderedIcon = renderIcon(status);
  const renderedText = renderText(status, props);
  let stateStyle;

  switch (status) {
    case LOG_LEVEL.VALID:
      stateStyle = "valid";
      break;

    case LOG_LEVEL.WARNING:
      stateStyle = "warning";
      break;

    case LOG_LEVEL.INVALID:
    default:
      stateStyle = "invalid";
  }

  return CertificateVerifyBlock_jsx("div", {
    className: `p-2 pointer ${certificateVerifyBlock_default.a["simple-verify-block"]} ${certificateVerifyBlock_default.a[stateStyle]} ${props.detailedVerifyVisible ? certificateVerifyBlock_default.a.active : ""}`,
    onClick: props.toggleDetailedView,
    id: "certificate-status"
  }, CertificateVerifyBlock_jsx("div", {
    className: "row",
    style: {
      flexWrap: "inherit"
    }
  }, renderedIcon, renderedText, CertificateVerifyBlock_jsx("span", {
    // eslint-disable-next-line prettier/prettier
    className: `d-flex justify-content-center align-items-center ${certificateVerifyBlock_default.a.arrow}`
  }, ViewerPageImages.arrow())));
};

const CertificateVerifyBlock_CertificateVerifyBlock = props => {
  const status = statusSummary(props);
  return CertificateVerifyBlock_jsx("div", {
    id: "certificate-verify-block",
    className: `align-items-start flex-nowrap ${certificateVerifyBlock_default.a["d-flex"]} ${certificateVerifyBlock_default.a.verifyBlocksContainer} mb-md-0 mb-3`
  }, CertificateVerifyBlock_jsx(SimpleVerifyBlock, props), props.detailedVerifyVisible ? CertificateVerifyBlock_jsx(DetailedCertificateVerifyBlock, {
    statusSummary: status,
    hashStatus: props.hashStatus,
    issuedStatus: props.issuedStatus,
    notRevokedStatus: props.notRevokedStatus,
    issuerIdentityStatus: props.issuerIdentityStatus
  }) : "");
};

/* harmony default export */ var components_CertificateVerifyBlock_CertificateVerifyBlock = (CertificateVerifyBlock_CertificateVerifyBlock);
// CONCATENATED MODULE: ./src/components/CertificateVerifyBlock/index.js

/* harmony default export */ var components_CertificateVerifyBlock = (components_CertificateVerifyBlock_CertificateVerifyBlock);
// EXTERNAL MODULE: ./src/components/certificateViewer.scss
var certificateViewer = __webpack_require__("VdpB");
var certificateViewer_default = /*#__PURE__*/__webpack_require__.n(certificateViewer);

// EXTERNAL MODULE: ./src/components/Modal/modal.scss
var modal = __webpack_require__("Iy9+");
var modal_default = /*#__PURE__*/__webpack_require__.n(modal);

// CONCATENATED MODULE: ./src/components/Modal/Modal.js

var Modal_jsx = external_react_default.a.createElement;


const Modal_modal = ({
  show,
  toggle,
  children
}) => show ? Modal_jsx("div", {
  className: modal_default.a.modal
}, Modal_jsx("div", {
  className: `${modal_default.a["modal-content"]} p-3`
}, Modal_jsx("div", {
  className: `${modal_default.a["modal-cross"]} pointer`,
  onClick: () => toggle()
}, Modal_jsx("i", {
  className: "fa fa-times text-muted"
})), children), Modal_jsx("div", {
  style: {
    position: "fixed",
    zIndex: 10
  },
  className: "modal-backdrop fade show",
  onClick: () => toggle()
})) : "";

/* harmony default export */ var Modal = (Modal_modal);
// CONCATENATED MODULE: ./src/components/Modal/index.js

/* harmony default export */ var components_Modal = (Modal);
// EXTERNAL MODULE: ./src/components/error.scss
var error = __webpack_require__("QVNw");
var error_default = /*#__PURE__*/__webpack_require__.n(error);

// CONCATENATED MODULE: ./src/components/ErrorBoundary.js
var ErrorBoundary_jsx = external_react_default.a.createElement;


class ErrorBoundary_ErrorBoundary extends external_react_["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }

  componentDidCatch() {
    this.setState({
      hasError: true
    });
  }

  render() {
    if (this.state.hasError) {
      return ErrorBoundary_jsx("div", {
        className: `${error_default.a.box}`
      }, ErrorBoundary_jsx("div", {
        id: "error"
      }, ErrorBoundary_jsx("div", {
        className: `${error_default.a.error}`
      }, ErrorBoundary_jsx("br", null), ErrorBoundary_jsx("img", {
        src: "/static/images/errorpage/error.png",
        style: {
          height: "15vh"
        }
      }), ErrorBoundary_jsx("h2", null, "Something went wrong!"), ErrorBoundary_jsx("p", null, "There is an error with this certificate, please contact your issuing institution."), ErrorBoundary_jsx("a", {
        href: "/"
      }, "Go Back"))));
    }

    return this.props.children;
  }

}
// EXTERNAL MODULE: external "penpal/lib/connectToChild"
var connectToChild_ = __webpack_require__("1l0m");
var connectToChild_default = /*#__PURE__*/__webpack_require__.n(connectToChild_);

// EXTERNAL MODULE: ./src/components/Analytics/index.js
var Analytics = __webpack_require__("3R5n");

// EXTERNAL MODULE: ./src/utils/certificate.js
var utils_certificate = __webpack_require__("VEfZ");

// CONCATENATED MODULE: ./src/components/DecentralisedTemplateRenderer/DecentralisedRenderer.js
var DecentralisedRenderer_jsx = external_react_default.a.createElement;










class DecentralisedRenderer_DecentralisedRenderer extends external_react_["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      childFrameConnection: null
    };
  }

  async selectTemplateTab(i) {
    const {
      childFrameConnection
    } = this.state;
    const child = await childFrameConnection;
    await child.selectTemplateTab(i);
    this.props.selectTemplateTab(i);
  }

  updateHeight(h) {
    this.iframe.height = h;
  }

  updateTemplates(templates) {
    if (!templates) return;
    this.props.registerTemplates(templates);
  }

  handleObfuscation(field) {
    const updatedDocument = Object(open_attestation_["obfuscateDocument"])(this.props.document, field);
    this.props.updateObfuscatedCertificate(updatedDocument);
    const updatedCertificate = Object(open_attestation_["getData"])(updatedDocument);
    this.renderDocument(updatedCertificate);
  }

  async renderDocument(certificate) {
    const {
      childFrameConnection
    } = this.state;
    const child = await childFrameConnection;
    await child.renderDocument(certificate);
  } // Do not re-render component if only activeTab changes


  shouldComponentUpdate(nextProps) {
    if (this.props.activeTab !== nextProps.activeTab && this.props.document === nextProps.document) {
      this.selectTemplateTab(nextProps.activeTab);
      return false;
    }

    return true;
  }

  componentDidMount() {
    const iframe = this.iframe;
    const updateHeight = this.updateHeight.bind(this);
    const updateTemplates = this.updateTemplates.bind(this);
    const handleObfuscation = this.handleObfuscation.bind(this);
    const childFrameConnection = connectToChild_default()({
      iframe,
      methods: {
        updateHeight,
        updateTemplates,
        handleObfuscation
      }
    }).promise;
    this.setState({
      childFrameConnection
    });
    childFrameConnection.then(frame => frame.renderDocument(Object(open_attestation_["getData"])(this.props.certificate)));
    const certificateData = Object(open_attestation_["getData"])(this.props.certificate);
    Object(Analytics["a" /* analyticsEvent */])(window, {
      category: "CERTIFICATE_VIEWED",
      action: Object(utils_certificate["a" /* getDocumentIssuerStores */])(certificateData),
      label: Object(external_lodash_["get"])(certificateData, "id")
    });
  }

  render() {
    return DecentralisedRenderer_jsx("iframe", {
      title: "Decentralised Rendered Certificate",
      id: "iframe",
      className: certificateViewer_default.a["decentralised-renderer"],
      ref: iframe => {
        this.iframe = iframe;
      },
      src: this.props.source
    });
  }

}

const mapStateToProps = store => ({
  document: Object(reducers_certificate["c" /* getCertificate */])(store),
  activeTab: Object(reducers_certificate["b" /* getActiveTemplateTab */])(store)
});

const mapDispatchToProps = dispatch => ({
  updateObfuscatedCertificate: updatedDoc => dispatch(Object(reducers_certificate["v" /* updateObfuscatedCertificate */])(updatedDoc)),
  registerTemplates: templates => dispatch(Object(reducers_certificate["n" /* registerTemplates */])(templates)),
  selectTemplateTab: tabIndex => dispatch(Object(reducers_certificate["p" /* selectTemplateTab */])(tabIndex))
});

/* harmony default export */ var DecentralisedTemplateRenderer_DecentralisedRenderer = (Object(external_react_redux_["connect"])(mapStateToProps, mapDispatchToProps)(DecentralisedRenderer_DecentralisedRenderer));
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: ./src/components/UI/Drawer/drawer.scss
var drawer = __webpack_require__("wgDX");
var drawer_default = /*#__PURE__*/__webpack_require__.n(drawer);

// CONCATENATED MODULE: ./src/components/UI/Drawer/drawer.js
var drawer_jsx = external_react_default.a.createElement;


class drawer_Drawer extends external_react_["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      showAbsHeader: false
    };
  }

  toggleDrawer() {
    this.setState({
      visible: !this.state.visible
    });
  }

  createTabs(tabs) {
    const {
      activeIdx
    } = this.props;
    return tabs.map((tab, idx) => drawer_jsx("a", {
      href: "",
      className: `${drawer_default.a.tabs} ${activeIdx === idx ? drawer_default.a.active : ""} `,
      key: idx,
      onClick: e => {
        e.preventDefault();
        this.renderContent(idx);
      }
    }, tab.label));
  }

  renderContent(idx) {
    this.props.toggle(idx);
    this.toggleDrawer();
  }

  render() {
    const {
      tabs,
      children
    } = this.props;
    const {
      visible,
      showAbsHeader
    } = this.state;
    return drawer_jsx(external_react_default.a.Fragment, null, visible ? drawer_jsx("div", {
      id: "mySidenav",
      className: drawer_default.a.sidenav
    }, drawer_jsx("a", {
      href: "",
      className: drawer_default.a.closebtn,
      onClick: e => {
        e.preventDefault();
        this.toggleDrawer();
      }
    }, "\xD7"), this.createTabs(tabs)) : null, drawer_jsx("div", {
      className: `${drawer_default.a.gray} ${showAbsHeader ? "" : drawer_default.a["mb-sidenav"]} container-fluid`
    }, drawer_jsx("div", {
      className: drawer_default.a.togglebtn,
      onClick: () => this.toggleDrawer()
    }, "\u2630")), drawer_jsx("div", {
      id: "main"
    }, children));
  }

}
// CONCATENATED MODULE: ./src/components/UI/Drawer/index.js

/* harmony default export */ var UI_Drawer = (drawer_Drawer);
// CONCATENATED MODULE: ./src/components/MultiTabs.js
var MultiTabs_jsx = external_react_default.a.createElement;







const MultiTabs = ({
  resetData,
  activeTab,
  templates,
  selectTemplateTab
}) => MultiTabs_jsx("div", {
  id: certificateViewer_default.a["header-ui"]
}, MultiTabs_jsx("div", {
  className: `${certificateViewer_default.a["header-container"]} d-none d-lg-block d-xl-block`
}, MultiTabs_jsx("div", {
  id: "template-tabs-list",
  className: "nav nav-tabs"
}, templates && templates.length > 0 ? templates.map((t, idx) => MultiTabs_jsx("li", {
  key: idx,
  className: "nav-item"
}, MultiTabs_jsx("a", {
  className: `${certificateViewer_default.a.tab}
                    ${idx === activeTab ? certificateViewer_default.a.active : ""}`,
  id: t.id,
  onClick: () => {
    selectTemplateTab(idx);
  },
  role: "tab",
  "aria-controls": "home",
  "aria-selected": "true"
}, t.label))) : null, MultiTabs_jsx(link_default.a, {
  href: "/"
}, MultiTabs_jsx("a", {
  id: "btn-view-another",
  onClick: () => resetData(),
  className: certificateViewer_default.a["view-another"]
}, "View another")))), MultiTabs_jsx("div", {
  className: "d-lg-none d-xl-none"
}, MultiTabs_jsx(UI_Drawer, {
  tabs: templates,
  activeIdx: activeTab,
  toggle: idx => selectTemplateTab(idx)
})));

const MultiTabs_mapStateToProps = store => ({
  templates: Object(reducers_certificate["j" /* getTemplates */])(store),
  activeTab: Object(reducers_certificate["b" /* getActiveTemplateTab */])(store)
});

const MultiTabs_mapDispatchToProps = dispatch => ({
  resetData: () => dispatch(Object(reducers_certificate["o" /* resetCertificateState */])())
});

/* harmony default export */ var components_MultiTabs = (Object(external_react_redux_["connect"])(MultiTabs_mapStateToProps, MultiTabs_mapDispatchToProps)(MultiTabs));
// EXTERNAL MODULE: ./src/config/index.js
var config = __webpack_require__("8SHQ");

// CONCATENATED MODULE: ./src/components/CertificateViewer.js


var CertificateViewer_jsx = external_react_default.a.createElement;











const CertificateSharingForm = dynamic_default()(() => __webpack_require__.e(/* import() */ 10).then(__webpack_require__.bind(null, "n2ZS")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("n2ZS")],
    modules: ["./CertificateSharing/CertificateSharingForm"]
  }
});

const renderVerifyBlock = props => CertificateViewer_jsx(components_CertificateVerifyBlock, {
  verifyTriggered: props.verifyTriggered,
  verifying: props.verifying,
  hashStatus: props.hashStatus,
  issuedStatus: props.issuedStatus,
  notRevokedStatus: props.notRevokedStatus,
  issuerIdentityStatus: props.issuerIdentityStatus,
  toggleDetailedView: props.toggleDetailedView,
  detailedVerifyVisible: props.detailedVerifyVisible
});

const LoadingIframe = () => CertificateViewer_jsx("div", {
  id: certificateViewer_default.a["renderer-loader"],
  className: "text-blue"
}, CertificateViewer_jsx("i", {
  className: "fas fa-spinner fa-pulse fa-3x"
}), CertificateViewer_jsx("div", {
  className: "m-3",
  style: {
    fontSize: "1.5rem"
  }
}, "Loading Renderer..."));

const renderHeaderBlock = props => {
  const renderedVerifyBlock = renderVerifyBlock(props);
  return CertificateViewer_jsx("div", {
    className: `container-fluid ${certificateViewer_default.a["pd-0"]}`
  }, CertificateViewer_jsx("div", {
    className: "row"
  }, CertificateViewer_jsx("div", {
    className: "col-sm-7 col-md-8 col-xs-12"
  }, renderedVerifyBlock), CertificateViewer_jsx("div", {
    className: `row col-sm-5 col-md-4 col-xs-12 ${certificateViewer_default.a["pd-0"]}`
  }, CertificateViewer_jsx("div", {
    className: "ml-auto"
  }, CertificateViewer_jsx("div", {
    id: "btn-print",
    className: certificateViewer_default.a["print-btn"],
    onClick: () => window.print()
  }, CertificateViewer_jsx("i", {
    className: "fas fa-print",
    style: {
      fontSize: "1.5rem"
    }
  }))), CertificateViewer_jsx("div", null), CertificateViewer_jsx("div", {
    className: "ml-2",
    onClick: () => props.handleSharingToggle()
  }, CertificateViewer_jsx("div", {
    id: "btn-email",
    className: certificateViewer_default.a["send-btn"]
  }, CertificateViewer_jsx("i", {
    className: "fas fa-envelope",
    style: {
      fontSize: "1.5rem"
    }
  }))), CertificateViewer_jsx("div", {
    className: "ml-2"
  }, CertificateViewer_jsx("a", {
    download: `${props.certificate.id}.opencert`,
    target: "_black",
    href: `data:text/plain;,${stringify_default()(props.document, null, 2)}`
  }, CertificateViewer_jsx("button", {
    id: "btn-download",
    className: certificateViewer_default.a["send-btn"],
    title: "Download"
  }, CertificateViewer_jsx("i", {
    className: "fas fa-file-download",
    style: {
      fontSize: "1.5rem"
    }
  })))))));
};

const CertificateViewer = props => {
  const {
    document,
    selectTemplateTab
  } = props;
  const certificate = Object(open_attestation_["getData"])(document);
  const renderedHeaderBlock = renderHeaderBlock(props);

  const validCertificateContent = CertificateViewer_jsx("div", null, CertificateViewer_jsx("div", {
    id: certificateViewer_default.a["top-header-ui"]
  }, CertificateViewer_jsx("div", {
    className: certificateViewer_default.a["header-container"]
  }, renderedHeaderBlock)), CertificateViewer_jsx(components_MultiTabs, {
    selectTemplateTab: selectTemplateTab
  }), CertificateViewer_jsx("div", null, CertificateViewer_jsx(LoadingIframe, null), CertificateViewer_jsx(DecentralisedTemplateRenderer_DecentralisedRenderer, {
    certificate: document,
    source: `${typeof document.data.$template === "object" ? certificate.$template.url : config["h" /* LEGACY_OPENCERTS_RENDERER */]}`
  })), CertificateViewer_jsx(components_Modal, {
    show: props.showSharing,
    toggle: props.handleSharingToggle
  }, CertificateViewer_jsx(CertificateSharingForm, {
    emailSendingState: props.emailSendingState,
    handleSendCertificate: props.handleSendCertificate,
    handleSharingToggle: props.handleSharingToggle
  })));

  return CertificateViewer_jsx(ErrorBoundary_ErrorBoundary, null, validCertificateContent, " ");
};

const CertificateViewer_mapDispatchToProps = dispatch => ({
  selectTemplateTab: tabIndex => dispatch(Object(reducers_certificate["p" /* selectTemplateTab */])(tabIndex))
});

/* harmony default export */ var components_CertificateViewer = (Object(external_react_redux_["connect"])(null, CertificateViewer_mapDispatchToProps)(CertificateViewer));
// CONCATENATED MODULE: ./src/components/ViewerPageContainer.js
var ViewerPageContainer_jsx = external_react_default.a.createElement;







class ViewerPageContainer_MainPageContainer extends external_react_["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      showSharing: false,
      detailedVerifyVisible: false
    };
    this.toggleDetailedView = this.toggleDetailedView.bind(this);
    this.handleCertificateChange = this.handleCertificateChange.bind(this);
    this.handleSharingToggle = this.handleSharingToggle.bind(this);
    this.handleSendCertificate = this.handleSendCertificate.bind(this);
  }

  componentDidMount() {
    const {
      document
    } = this.props;

    if (!document) {
      router_default.a.replace("/");
    }
  }

  handleSharingToggle() {
    this.props.sendCertificateReset();
    this.setState({
      showSharing: !this.state.showSharing
    });
  }

  toggleDetailedView() {
    this.setState({
      detailedVerifyVisible: !this.state.detailedVerifyVisible
    });
  }

  handleCertificateChange(certificate) {
    this.props.updateCertificate(certificate);
  }

  handleSendCertificate({
    email,
    captcha
  }) {
    this.props.sendCertificate({
      email,
      captcha
    });
  }

  render() {
    if (!this.props.document) return null;
    return ViewerPageContainer_jsx(components_CertificateViewer, {
      document: this.props.document,
      certificate: Object(open_attestation_["getData"])(this.props.document),
      verifying: this.props.verifying,
      hashStatus: this.props.hashStatus,
      issuedStatus: this.props.issuedStatus,
      notRevokedStatus: this.props.notRevokedStatus,
      issuerIdentityStatus: this.props.issuerIdentityStatus,
      handleCertificateChange: this.handleCertificateChange,
      showSharing: this.state.showSharing,
      emailAddress: this.state.emailAddress,
      handleSendCertificate: this.handleSendCertificate,
      handleSharingToggle: this.handleSharingToggle,
      emailSendingState: this.props.emailSendingState,
      toggleDetailedView: this.toggleDetailedView,
      detailedVerifyVisible: this.state.detailedVerifyVisible
    });
  }

}

const ViewerPageContainer_mapStateToProps = store => ({
  document: Object(reducers_certificate["c" /* getCertificate */])(store),
  // Verification statuses used in verifier block
  emailSendingState: Object(reducers_certificate["d" /* getEmailSendingState */])(store),
  verifying: Object(reducers_certificate["m" /* getVerifying */])(store),
  issuerIdentityStatus: Object(reducers_certificate["g" /* getIssuerIdentityStatus */])(store),
  hashStatus: Object(reducers_certificate["e" /* getHashStatus */])(store),
  issuedStatus: Object(reducers_certificate["f" /* getIssuedStatus */])(store),
  notRevokedStatus: Object(reducers_certificate["h" /* getNotRevokedStatus */])(store),
  verified: Object(reducers_certificate["l" /* getVerified */])(store)
});

const ViewerPageContainer_mapDispatchToProps = dispatch => ({
  updateCertificate: payload => dispatch(Object(reducers_certificate["u" /* updateCertificate */])(payload)),
  sendCertificate: payload => dispatch(Object(reducers_certificate["q" /* sendCertificate */])(payload)),
  sendCertificateReset: () => dispatch(Object(reducers_certificate["r" /* sendCertificateReset */])()),
  updateObfuscatedCertificate: updatedDoc => dispatch(Object(reducers_certificate["v" /* updateObfuscatedCertificate */])(updatedDoc))
});

/* harmony default export */ var ViewerPageContainer = (Object(external_react_redux_["connect"])(ViewerPageContainer_mapStateToProps, ViewerPageContainer_mapDispatchToProps)(ViewerPageContainer_MainPageContainer));
// CONCATENATED MODULE: ./src/components/PrintWatermark.js

var PrintWatermark_jsx = external_react_default.a.createElement;

const PrintWatermark = () => PrintWatermark_jsx("div", {
  className: "print-only"
}, PrintWatermark_jsx("img", {
  style: {
    position: "absolute",
    opacity: 0.5,
    width: "100%",
    height: "100%"
  },
  src: "/static/images/watermark.svg"
}));

/* harmony default export */ var components_PrintWatermark = (PrintWatermark);
// CONCATENATED MODULE: ./pages/viewer.js
var viewer_jsx = external_react_default.a.createElement;









const VerifierPage = () => viewer_jsx(external_react_default.a.Fragment, null, viewer_jsx(external_next_seo_default.a, {
  config: config["c" /* DEFAULT_SEO */]
}), viewer_jsx(components_PrintWatermark, null), viewer_jsx(NavigationBar["a" /* default */], null), viewer_jsx(ViewerPageContainer, null), viewer_jsx(FooterBar["a" /* default */], null));

/* harmony default export */ var viewer = __webpack_exports__["default"] = (Object(external_react_redux_["connect"])()(VerifierPage));

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

/***/ "Iy9+":
/***/ (function(module, exports) {

module.exports = {
	"modal": "_1XiFiRPm5eKlcPkwuueLC7",
	"modal-content": "_29qRvfuy8C4s0KTS0voizh",
	"modal-cross": "ItIvLlbRwY68P29rgyo1B"
};

/***/ }),

/***/ "Jo+v":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Z6Kq");

/***/ }),

/***/ "KI45":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "KNus":
/***/ (function(module, exports) {

module.exports = require("next/config");

/***/ }),

/***/ "LX0d":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Xql+");

/***/ }),

/***/ "QVNw":
/***/ (function(module, exports) {

module.exports = {
	"box": "Pqc0Tx9Oxyn-KS072av34",
	"error": "_2XPn5V4lrLhkmYHoBXUx-p",
	"icon": "_2cToToQmlaA-Woxw_EcLMC"
};

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

/***/ "UXZV":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dGr4");

/***/ }),

/***/ "VEfZ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getDocumentStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getDocumentIssuerStores; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("YLtl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

const getDocumentStore = issuer => issuer.certificateStore || issuer.documentStore;
const getDocumentIssuerStores = document => {
  const issuers = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(document, "issuers", []);
  return issuers.map(getDocumentStore).join(",");
};

/***/ }),

/***/ "VdpB":
/***/ (function(module, exports) {

module.exports = {
	"header-ui": "_3NWoJ-J-uw2r4MZh0doSHT",
	"renderer-loader": "_1ihKQmQyL-Pkrz50HwiZgd",
	"top-header-ui": "_2toytDi_4tTN3cdU739o_-",
	"decentralised-renderer": "_3oxAef8gVSBJ9wFpNxvY7Q",
	"header-container": "_1I4xO-sppzFqbQV7C9sIew",
	"tab": "QgkLmRbnLAKVzVZAmlvVm",
	"active": "xHBBR37cdMSS5ORDVI2BX",
	"frameless-container": "_r7yqc3CQkj_lej6pMDcV",
	"view-another": "xMHWWFLYdfCha-RG9yiID",
	"pd-0": "_1aNH2ZROjB-RGUAM7Knd3m",
	"print-btn": "_2yScdhvU0jsVess9XMd5Fw",
	"send-btn": "_1Wp3dVITkt5oFM9rS4clfq"
};

/***/ }),

/***/ "Xql+":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YLtl":
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "Z6Kq":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

var _interopRequireDefault = __webpack_require__("KI45");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__("LX0d"));

var _url = __webpack_require__("bzos");

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _propTypes = _interopRequireDefault(__webpack_require__("rf6O"));

var _router = _interopRequireDefault(__webpack_require__("nOHt"));

var _rewriteUrlForExport = __webpack_require__("+NUC");

var _utils = __webpack_require__("p8BD");
/* global __NEXT_DATA__ */


function isLocal(href) {
  const url = (0, _url.parse)(href, false, true);
  const origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  let lastHref = null;
  let lastAs = null;
  let lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    const result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

let observer;
const listeners = new _map.default();
const IntersectionObserver = false ? undefined : null;

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    observer.unobserve(el);
    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      const {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      let {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      const {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      let {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (false) {}

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      this.cleanUpListeners = listenToIntersections(ref, () => {
        this.prefetch();
      });
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    const {
      pathname
    } = window.location;
    const {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    const href = (0, _url.resolve)(pathname, parsedHref);

    _router.default.prefetch(href);
  }

  render() {
    let {
      children
    } = this.props;
    const {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    const child = _react.Children.only(children);

    const props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

    };

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

Link.propTypes = void 0;

if (false) {}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "dGr4":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "efsx":
/***/ (function(module, exports) {

module.exports = require("next-seo");

/***/ }),

/***/ "fozc":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

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

/***/ "htGi":
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__("UXZV");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "i4Cb":
/***/ (function(module, exports) {

module.exports = require("debug");

/***/ }),

/***/ "k1wZ":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "mJK4":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router-context");

/***/ }),

/***/ "nGbF":
/***/ (function(module, exports) {

module.exports = {
	"verifyBlocksContainer": "_2sVF6kqGWu_H_UbaX8-clP",
	"simple-verify-block": "_2hOjWS9TqiT42TjXZ-FpiM",
	"arrow": "_3F2H28N8QJ23qCXE7notKP",
	"valid": "_3Hb1EfyyFAmh5m_X0rCnAK",
	"active": "_3i_kQOMWpXmCuW9O09XeNK",
	"circle": "nsMA1QAw05AkuNeUXajT",
	"check": "_3k_yqoyNGwxsEa40VGL3--",
	"warning": "_3OoDk3kelPIIU2G1yom20Q",
	"invalid": "_3yQfN0rusOu6oP8BdXcO3o",
	"verification-text": "_3-NY-Iy5xJ2b4x2dWbQQfC",
	"verified-icon": "_20ONRjG-wYXy8Xk-MAqySX",
	"d-flex": "vyciJ7mISsN8pfxWtkTku"
};

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

var _interopRequireDefault = __webpack_require__("KI45");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("htGi"));

var _defineProperty = _interopRequireDefault(__webpack_require__("hfKm"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("qxCs"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("mJK4");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty.default)(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    const router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      const eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2.default)({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "p8BD":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "pLtp":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("qJj/");

/***/ }),

/***/ "qJj/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "qxCs":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/router");

/***/ }),

/***/ "rf6O":
/***/ (function(module, exports) {

module.exports = require("prop-types");

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

/***/ "va7A":
/***/ (function(module, exports) {

module.exports = require("@govtechsg/open-attestation");

/***/ }),

/***/ "wXLy":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return states; });
/* unused harmony export initialState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return types; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return resetCertificateState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return updateCertificate; });
/* unused harmony export verifyCertificate */
/* unused harmony export updateFilteredCertificate */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return verifyingCertificateIssuerSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return verifyingCertificateIssuerFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return verifyingCertificateStoreSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return verifyingCertificateStoreFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return verifyingCertificateRevocationSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return verifyingCertificateRevocationFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return verifyingCertificateIssuedSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return verifyingCertificateIssuedFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return verifyingCertificateHashSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return verifyingCertificateHashFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return sendCertificate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return sendCertificateReset; });
/* unused harmony export resetCertificateObfuscation */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return updateObfuscatedCertificate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return registerTemplates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return selectTemplateTab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getIssuerIdentityStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getHashStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return getStoreStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getIssuedStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return getNotRevokedStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getCertificate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return getVerifying; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return getVerified; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return getVerificationStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getEmailSendingState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getActiveTemplateTab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return getTemplates; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("zrwo");

const states = {
  INITIAL: "INITIAL",
  PENDING: "PENDING",
  SUCCESS: "SUCCESS",
  FAILURE: "FAILURE"
};
const initialState = {
  raw: null,
  rawModified: null,
  store: null,
  storeError: null,
  storeLoading: false,
  issuerIdentities: null,
  certificateHash: false,
  certificateIssued: false,
  certificateNotRevoked: false,
  certificateIssuer: false,
  certificateStore: false,
  certificateHashVerifying: false,
  certificateIssuedVerifying: false,
  certificateNotRevokedVerifying: false,
  certificateIssuerVerifying: false,
  certificateStoreVerifying: false,
  certificateHashError: null,
  certificateIssuedError: null,
  certificateNotRevokedError: null,
  certificateIssuerError: null,
  certificateStoreError: null,
  verificationStatus: [],
  emailState: states.INITIAL,
  emailError: null,
  templates: null,
  activeTemplateTab: 0
}; // Actions

const types = {
  RESET_CERTIFICATE: "RESET_CERTIFICATE",
  NETWORK_RESET: "NETWORK_RESET",
  // For network change
  UPDATE_CERTIFICATE: "UPDATE_CERTIFICATE",
  LOADING_STORE_SUCCESS: "LOADING_STORE_SUCCESS",
  LOADING_STORE_FAILURE: "LOADING_STORE_FAILURE",
  VERIFYING_CERTIFICATE: "VERIFYING_CERTIFICATE",
  VERIFYING_CERTIFICATE_HASH_SUCCESS: "VERIFYING_CERTIFICATE_HASH_SUCCESS",
  VERIFYING_CERTIFICATE_HASH_FAILURE: "VERIFYING_CERTIFICATE_HASH_FAILURE",
  VERIFYING_CERTIFICATE_ISSUED_SUCCESS: "VERIFYING_CERTIFICATE_ISSUED_SUCCESS",
  VERIFYING_CERTIFICATE_ISSUED_FAILURE: "VERIFYING_CERTIFICATE_ISSUED_FAILURE",
  VERIFYING_CERTIFICATE_REVOCATION_SUCCESS: "VERIFYING_CERTIFICATE_REVOCATION_SUCCESS",
  VERIFYING_CERTIFICATE_REVOCATION_FAILURE: "VERIFYING_CERTIFICATE_REVOCATION_FAILURE",
  VERIFYING_CERTIFICATE_ISSUER_SUCCESS: "VERIFYING_CERTIFICATE_ISSUER_SUCCESS",
  VERIFYING_CERTIFICATE_ISSUER_FAILURE: "VERIFYING_CERTIFICATE_ISSUER_FAILURE",
  VERIFYING_CERTIFICATE_STORE_SUCCESS: "VERIFYING_CERTIFICATE_STORE_SUCCESS",
  VERIFYING_CERTIFICATE_STORE_FAILURE: "VERIFYING_CERTIFICATE_STORE_FAILURE",
  SENDING_CERTIFICATE: "SENDING_CERTIFICATE",
  SENDING_CERTIFICATE_SUCCESS: "SENDING_CERTIFICATE_SUCCESS",
  SENDING_CERTIFICATE_FAILURE: "SENDING_CERTIFICATE_FAILURE",
  SENDING_CERTIFICATE_RESET: "SENDING_CERTIFICATE_RESET",
  CERTIFICATE_OBFUSCATE_RESET: "CERTIFICATE_OBFUSCATE_RESET",
  CERTIFICATE_OBFUSCATE_UPDATE: "CERTIFICATE_OBFUSCATE_UPDATE",
  CERTIFICATE_TEMPLATE_REGISTER: "CERTIFICATE_TEMPLATE_REGISTER",
  CERTIFICATE_TEMPLATE_SELECT_TAB: "CERTIFICATE_TEMPLATE_SELECT_TAB"
}; // Reducers

function reducer(state = initialState, action) {
  switch (action.type) {
    case types.RESET_CERTIFICATE:
    case types.NETWORK_RESET:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, initialState);

    case types.UPDATE_CERTIFICATE:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, initialState, {
        raw: action.payload,
        rawModified: action.payload,
        store: null,
        storeError: null,
        storeLoading: true
      });

    case types.LOADING_STORE_SUCCESS:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, state, {
        store: action.payload,
        storeError: null,
        storeLoading: false
      });

    case types.LOADING_STORE_FAILURE:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, state, {
        storeError: action.payload,
        storeLoading: false
      });

    case types.VERIFYING_CERTIFICATE:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, state, {
        issuerIdentities: null,
        certificateHash: false,
        certificateIssued: false,
        certificateNotRevoked: false,
        certificateIssuer: false,
        certificateStore: false,
        certificateHashVerifying: true,
        certificateIssuedVerifying: true,
        certificateNotRevokedVerifying: true,
        certificateIssuerVerifying: true,
        certificateStoreVerifying: true,
        certificateHashError: null,
        certificateIssuedError: null,
        certificateNotRevokedError: null,
        certificateIssuerError: null,
        certificateStoreError: null,
        verificationStatus: []
      });

    case types.VERIFYING_CERTIFICATE_HASH_SUCCESS:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, state, {
        certificateHash: true,
        certificateHashError: null,
        certificateHashVerifying: false,
        verificationStatus: [...state.verificationStatus, {
          message: "Certificate integrity checked",
          warning: false,
          error: false
        }]
      });

    case types.VERIFYING_CERTIFICATE_HASH_FAILURE:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, state, {
        certificateHash: false,
        certificateHashError: action.payload,
        certificateHashVerifying: false,
        verificationStatus: [...state.verificationStatus, {
          message: "Certificate has been tampered",
          warning: false,
          error: true
        }]
      });

    case types.VERIFYING_CERTIFICATE_ISSUED_SUCCESS:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, state, {
        certificateIssued: true,
        certificateIssuedError: null,
        certificateIssuedVerifying: false,
        verificationStatus: [...state.verificationStatus, {
          message: "Certificate has been issued",
          warning: false,
          error: false
        }]
      });

    case types.VERIFYING_CERTIFICATE_ISSUED_FAILURE:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, state, {
        certificateIssued: false,
        certificateIssuedError: action.payload,
        certificateIssuedVerifying: false,
        verificationStatus: [...state.verificationStatus, {
          message: "Certificate is not issued",
          warning: false,
          error: true
        }]
      });

    case types.VERIFYING_CERTIFICATE_REVOCATION_SUCCESS:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, state, {
        certificateNotRevoked: true,
        certificateNotRevokedError: null,
        certificateNotRevokedVerifying: false,
        verificationStatus: [...state.verificationStatus, {
          message: "Certificate is issued",
          warning: false,
          error: false
        }]
      });

    case types.VERIFYING_CERTIFICATE_REVOCATION_FAILURE:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, state, {
        certificateNotRevoked: false,
        certificateNotRevokedError: action.payload,
        certificateNotRevokedVerifying: false,
        verificationStatus: [...state.verificationStatus, {
          message: "Certificate has been revoked",
          warning: false,
          error: true
        }]
      });

    case types.VERIFYING_CERTIFICATE_ISSUER_SUCCESS:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, state, {
        issuerIdentities: action.payload,
        certificateIssuer: true,
        certificateIssuerVerifying: false,
        certificateIssuerError: null,
        verificationStatus: [...state.verificationStatus, {
          message: "Known certificate issuer",
          warning: false,
          error: false
        }]
      });

    case types.VERIFYING_CERTIFICATE_ISSUER_FAILURE:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, state, {
        certificateIssuer: false,
        certificateIssuerVerifying: false,
        certificateIssuerError: action.payload,
        verificationStatus: [...state.verificationStatus, {
          message: "Unknown certificate issuer",
          warning: false,
          error: false
        }]
      });

    case types.VERIFYING_CERTIFICATE_STORE_SUCCESS:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, state, {
        certificateStore: true,
        certificateStoreError: null,
        certificateStoreVerifying: false,
        verificationStatus: [...state.verificationStatus, {
          message: "Certificate store checked",
          warning: false,
          error: false
        }]
      });

    case types.VERIFYING_CERTIFICATE_STORE_FAILURE:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, state, {
        certificateStore: false,
        certificateStoreError: action.payload,
        certificateStoreVerifying: false,
        verificationStatus: [...state.verificationStatus, {
          message: "Certificate store does not exist",
          warning: false,
          error: true
        }]
      });

    case types.SENDING_CERTIFICATE:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, state, {
        emailState: states.PENDING,
        emailError: null
      });

    case types.SENDING_CERTIFICATE_RESET:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, state, {
        emailState: states.INITIAL,
        emailError: null
      });

    case types.SENDING_CERTIFICATE_SUCCESS:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, state, {
        emailState: states.SUCCESS,
        emailError: null
      });

    case types.SENDING_CERTIFICATE_FAILURE:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, state, {
        emailState: states.FAILURE,
        emailError: action.payload
      });

    case types.CERTIFICATE_OBFUSCATE_RESET:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, initialState, {
        rawModified: state.raw
      });

    case types.CERTIFICATE_OBFUSCATE_UPDATE:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, state, {
        rawModified: action.payload
      });

    case types.CERTIFICATE_TEMPLATE_REGISTER:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, state, {
        templates: action.payload
      });

    case types.CERTIFICATE_TEMPLATE_SELECT_TAB:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, state, {
        activeTemplateTab: action.payload
      });

    default:
      return state;
  }
} // Action Creators

function resetCertificateState() {
  return {
    type: types.RESET_CERTIFICATE
  };
}
function updateCertificate(payload) {
  return {
    type: types.UPDATE_CERTIFICATE,
    payload
  };
}
function verifyCertificate(payload) {
  return {
    type: types.VERIFYING_CERTIFICATE,
    payload
  };
}
function updateFilteredCertificate(payload) {
  return {
    type: types.UPDATE_FILTERED_CERTIFICATE,
    payload
  };
}
function verifyingCertificateIssuerSuccess({
  issuerIdentities
}) {
  return {
    type: types.VERIFYING_CERTIFICATE_ISSUER_SUCCESS,
    payload: issuerIdentities
  };
}
function verifyingCertificateIssuerFailure({
  error
}) {
  return {
    type: types.VERIFYING_CERTIFICATE_ISSUER_FAILURE,
    error
  };
}
function verifyingCertificateStoreSuccess() {
  return {
    type: types.VERIFYING_CERTIFICATE_STORE_SUCCESS
  };
}
function verifyingCertificateStoreFailure({
  error
}) {
  return {
    type: types.VERIFYING_CERTIFICATE_STORE_FAILURE,
    error
  };
}
function verifyingCertificateRevocationSuccess() {
  return {
    type: types.VERIFYING_CERTIFICATE_REVOCATION_SUCCESS
  };
}
function verifyingCertificateRevocationFailure({
  error
}) {
  return {
    type: types.VERIFYING_CERTIFICATE_REVOCATION_FAILURE,
    error
  };
}
function verifyingCertificateIssuedSuccess() {
  return {
    type: types.VERIFYING_CERTIFICATE_ISSUED_SUCCESS
  };
}
function verifyingCertificateIssuedFailure({
  error
}) {
  return {
    type: types.VERIFYING_CERTIFICATE_ISSUED_FAILURE,
    error
  };
}
function verifyingCertificateHashSuccess() {
  return {
    type: types.VERIFYING_CERTIFICATE_HASH_SUCCESS
  };
}
function verifyingCertificateHashFailure({
  error
}) {
  return {
    type: types.VERIFYING_CERTIFICATE_HASH_FAILURE,
    error
  };
}
function sendCertificate(payload) {
  return {
    type: types.SENDING_CERTIFICATE,
    payload
  };
}
function sendCertificateReset() {
  return {
    type: types.SENDING_CERTIFICATE_RESET
  };
}
function resetCertificateObfuscation() {
  return {
    type: types.CERTIFICATE_OBFUSCATE_RESET
  };
}
function updateObfuscatedCertificate(payload) {
  return {
    type: types.CERTIFICATE_OBFUSCATE_UPDATE,
    payload
  };
}
function registerTemplates(payload) {
  return {
    type: types.CERTIFICATE_TEMPLATE_REGISTER,
    payload
  };
}
function selectTemplateTab(payload) {
  return {
    type: types.CERTIFICATE_TEMPLATE_SELECT_TAB,
    payload
  };
} // Selectors

function getIssuerIdentityStatus(store) {
  const {
    issuerIdentities,
    certificateIssuerVerifying,
    certificateIssuerError,
    certificateIssuer
  } = store.certificate;
  return {
    identities: issuerIdentities,
    verified: certificateIssuer,
    verifying: certificateIssuerVerifying,
    error: certificateIssuerError
  };
}
function getHashStatus(store) {
  const {
    certificateHash,
    certificateHashError,
    certificateHashVerifying
  } = store.certificate;
  return {
    verified: certificateHash,
    verifying: certificateHashVerifying,
    error: certificateHashError
  };
}
function getStoreStatus(store) {
  const {
    certificateStore,
    certificateStoreError,
    certificateStoreVerifying
  } = store.certificate;
  return {
    verified: certificateStore,
    verifying: certificateStoreVerifying,
    error: certificateStoreError
  };
}
function getIssuedStatus(store) {
  const {
    certificateIssued,
    certificateIssuedError,
    certificateIssuedVerifying
  } = store.certificate;
  return {
    verified: certificateIssued,
    verifying: certificateIssuedVerifying,
    error: certificateIssuedError
  };
}
function getNotRevokedStatus(store) {
  const {
    certificateNotRevoked,
    certificateNotRevokedError,
    certificateNotRevokedVerifying
  } = store.certificate;
  return {
    verified: certificateNotRevoked,
    verifying: certificateNotRevokedVerifying,
    error: certificateNotRevokedError
  };
}
function getCertificate(store) {
  return store.certificate.rawModified;
}
function getVerifying(store) {
  const {
    certificateIssuerVerifying,
    certificateHashVerifying,
    certificateIssuedVerifying,
    certificateNotRevokedVerifying,
    certificateStoreVerifying
  } = store.certificate;
  return certificateIssuerVerifying || certificateHashVerifying || certificateIssuedVerifying || certificateNotRevokedVerifying || certificateStoreVerifying;
}
function getVerified(store) {
  const hash = getHashStatus(store).verified;
  const issued = getIssuedStatus(store).verified;
  const notRevoked = getNotRevokedStatus(store).verified;
  const identity = getIssuerIdentityStatus(store).verified;
  const storeStatus = getStoreStatus(store).verified;
  return hash && issued && notRevoked && identity && storeStatus;
}
function getVerificationStatus(store) {
  return store.certificate.verificationStatus;
}
function getEmailSendingState(store) {
  return store.certificate.emailState;
}
function getActiveTemplateTab(store) {
  return store.certificate.activeTemplateTab;
}
function getTemplates(store) {
  return store.certificate.templates;
}

/***/ }),

/***/ "wgDX":
/***/ (function(module, exports) {

module.exports = {
	"sidenav": "_11TPRHdvTRtw3j8hq6bBDd",
	"tabs": "_2nqSdYJgsH-3ilPPQ74kL6",
	"active": "_3Jg1Zp0x1QtmV6FNHdQh85",
	"closebtn": "Eie5dWLvHuO-kKz6Sm4pU",
	"togglebtn": "_3iJttegbua4ZOBo9tFDjUE",
	"gray": "_3xbAzW4Nr8fWPXxBy6SeNY",
	"main": "_14rU3pdcggUH3rbDVkpVs7",
	"mb-sidenav": "_1ZMleAu0HE5a6QNflDx275"
};

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