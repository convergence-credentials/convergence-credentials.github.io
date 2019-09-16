exports.ids = [10];
exports.modules = {

/***/ "04if":
/***/ (function(module, exports) {

module.exports = {
	"btn": "_31j3eqaUUa7CO2_fxmmsk4"
};

/***/ }),

/***/ "n2ZS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_google_recaptcha__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("1cau");
/* harmony import */ var react_google_recaptcha__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_google_recaptcha__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("8SHQ");
/* harmony import */ var _sharing_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("04if");
/* harmony import */ var _sharing_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_sharing_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _reducers_certificate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("wXLy");
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

    if (emailSendingState !== _reducers_certificate__WEBPACK_IMPORTED_MODULE_4__[/* states */ "s"].PENDING) {
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
      className: "container"
    }, __jsx("div", {
      className: "row"
    }, __jsx("div", {
      className: "col-2"
    }), __jsx("div", {
      className: "col-8"
    }, __jsx("div", {
      className: "row d-flex justify-content-center"
    }, __jsx("h4", null, "Send your certificate")), __jsx("div", {
      className: "row text-center"
    }, "This sends an email with your .opencert attached, and instructions on how to view it."), __jsx("div", {
      className: "row my-4 d-flex justify-content-center"
    }, __jsx("input", {
      className: "w-100",
      value: this.state.emailAddress,
      onChange: this.handleEmailChange,
      placeholder: "Enter recipient's email"
    })), __jsx("div", {
      className: "row d-flex justify-content-center m-3"
    }, __jsx(react_google_recaptcha__WEBPACK_IMPORTED_MODULE_1___default.a, {
      sitekey: _config__WEBPACK_IMPORTED_MODULE_2__[/* CAPTCHA_CLIENT_KEY */ "a"],
      onChange: this.handleCaptchaChange
    })), emailSendingState === _reducers_certificate__WEBPACK_IMPORTED_MODULE_4__[/* states */ "s"].SUCCESS ? __jsx("div", {
      className: "row my-4 d-flex justify-content-center"
    }, "Email successfully sent!") : "", emailSendingState === _reducers_certificate__WEBPACK_IMPORTED_MODULE_4__[/* states */ "s"].FAILURE ? __jsx("div", {
      className: "row my-4 d-flex justify-content-center"
    }, "An error occured, please check your email and captcha") : "", __jsx("div", {
      className: "row d-flex justify-content-center m-3"
    }, __jsx("button", {
      type: "button",
      className: `pointer ${_sharing_scss__WEBPACK_IMPORTED_MODULE_3___default.a.btn}`,
      onClick: this.handleSend
    }, "Send", emailSendingState === _reducers_certificate__WEBPACK_IMPORTED_MODULE_4__[/* states */ "s"].PENDING ? __jsx("i", {
      className: "ml-2 fas fa-spinner fa-pulse"
    }) : "")))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (CertificateSharingForm);

/***/ })

};;