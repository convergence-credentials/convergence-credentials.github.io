exports.ids = [0];
exports.modules = {

/***/ "./src/components/CertificateSharing/CertificateSharingForm.js":
/*!*********************************************************************!*\
  !*** ./src/components/CertificateSharing/CertificateSharingForm.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_google_recaptcha__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-google-recaptcha */ "react-google-recaptcha");
/* harmony import */ var react_google_recaptcha__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_google_recaptcha__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config */ "./src/config/index.js");
/* harmony import */ var _sharing_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sharing.scss */ "./src/components/CertificateSharing/sharing.scss");
/* harmony import */ var _sharing_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_sharing_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _reducers_certificate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../reducers/certificate */ "./src/reducers/certificate.js");
var _jsxFileName = "/home/ajl/development/ssi/academic-creds/convergence-credentials.github.io/src/components/CertificateSharing/CertificateSharingForm.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







class CertificateSharingForm extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      captcha: "",
      email: ""
    };
    this.handleCaptchaChange = this.handleCaptchaChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleSend = this.handleSend.bind(this);
  }

  handleCaptchaChange(value) {
    this.setState({
      captcha: value
    });
  }

  handleEmailChange(event) {
    this.setState({
      email: event.target.value
    });
  }

  handleSend() {
    const {
      handleSendCertificate,
      emailSendingState
    } = this.props;

    if (emailSendingState !== _reducers_certificate__WEBPACK_IMPORTED_MODULE_5__["states"].PENDING) {
      handleSendCertificate({
        email: this.state.email,
        captcha: this.state.captcha
      });
    }
  }

  render() {
    const {
      emailSendingState
    } = this.props;
    return __jsx("div", {
      className: "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, __jsx("div", {
      className: "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, __jsx("div", {
      className: "col-2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }), __jsx("div", {
      className: "col-8",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, __jsx("div", {
      className: "row d-flex justify-content-center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, __jsx("h4", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, "Send your certificate")), __jsx("div", {
      className: "row text-center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, "This sends an email with your .opencert attached, and instructions on how to view it."), __jsx("div", {
      className: "row my-4 d-flex justify-content-center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, __jsx("input", {
      className: "w-100",
      value: this.state.emailAddress,
      onChange: this.handleEmailChange,
      placeholder: "Enter recipient's email",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    })), __jsx("div", {
      className: "row d-flex justify-content-center m-3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, __jsx(react_google_recaptcha__WEBPACK_IMPORTED_MODULE_2___default.a, {
      sitekey: _config__WEBPACK_IMPORTED_MODULE_3__["CAPTCHA_CLIENT_KEY"],
      onChange: this.handleCaptchaChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    })), emailSendingState === _reducers_certificate__WEBPACK_IMPORTED_MODULE_5__["states"].SUCCESS ? __jsx("div", {
      className: "row my-4 d-flex justify-content-center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }, "Email successfully sent!") : "", emailSendingState === _reducers_certificate__WEBPACK_IMPORTED_MODULE_5__["states"].FAILURE ? __jsx("div", {
      className: "row my-4 d-flex justify-content-center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }, "An error occured, please check your email and captcha") : "", __jsx("div", {
      className: "row d-flex justify-content-center m-3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: this
    }, __jsx("button", {
      type: "button",
      className: `pointer ${_sharing_scss__WEBPACK_IMPORTED_MODULE_4___default.a.btn}`,
      onClick: this.handleSend,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    }, "Send", emailSendingState === _reducers_certificate__WEBPACK_IMPORTED_MODULE_5__["states"].PENDING ? __jsx("i", {
      className: "ml-2 fas fa-spinner fa-pulse",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90
      },
      __self: this
    }) : "")))));
  }

}

CertificateSharingForm.propTypes = {
  emailSendingState: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  handleSendCertificate: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  handleSharingToggle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (CertificateSharingForm);

/***/ }),

/***/ "./src/components/CertificateSharing/sharing.scss":
/*!********************************************************!*\
  !*** ./src/components/CertificateSharing/sharing.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"btn": "_31j3eqaUUa7CO2_fxmmsk4"
};

/***/ })

};;
//# sourceMappingURL=0.js.map