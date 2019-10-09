webpackHotUpdate("static/development/pages/public/cert/[id].js",{

/***/ "./pages/public/cert/[id].js":
/*!***********************************!*\
  !*** ./pages/public/cert/[id].js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-seo */ "./node_modules/next-seo/dist/index.js");
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _src_components_Layout_NavigationBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../src/components/Layout/NavigationBar */ "./src/components/Layout/NavigationBar/index.js");
/* harmony import */ var _src_components_Layout_FooterBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../src/components/Layout/FooterBar */ "./src/components/Layout/FooterBar.js");
/* harmony import */ var _src_components_PublicViewerPageContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../src/components/PublicViewerPageContainer */ "./src/components/PublicViewerPageContainer.js");
var _jsxFileName = "/home/ajl/development/ssi/academic-creds/convergence-credentials.github.io/pages/public/cert/[id].js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var VerifierPage = function VerifierPage() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_src_components_Layout_NavigationBar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), __jsx(_src_components_Layout_FooterBar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])()(VerifierPage));

/***/ }),

/***/ "./src/components/PublicViewerPageContainer.js":
/*!*****************************************************!*\
  !*** ./src/components/PublicViewerPageContainer.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _govtechsg_open_attestation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @govtechsg/open-attestation */ "./node_modules/@govtechsg/open-attestation/dist/index.umd.js");
/* harmony import */ var _govtechsg_open_attestation__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_govtechsg_open_attestation__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _reducers_certificate__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../reducers/certificate */ "./src/reducers/certificate.js");
/* harmony import */ var _CertificateViewer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./CertificateViewer */ "./src/components/CertificateViewer.js");






var _jsxFileName = "/home/ajl/development/ssi/academic-creds/convergence-credentials.github.io/src/components/PublicViewerPageContainer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;








var MainPageContainer =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(MainPageContainer, _Component);

  function MainPageContainer(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MainPageContainer);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(MainPageContainer).call(this, props));
    _this.state = {
      showSharing: false,
      detailedVerifyVisible: false
    };
    _this.toggleDetailedView = _this.toggleDetailedView.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.handleCertificateChange = _this.handleCertificateChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.handleSharingToggle = _this.handleSharingToggle.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.handleSendCertificate = _this.handleSendCertificate.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(MainPageContainer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var document = this.props.document;

      if (!document) {
        next_router__WEBPACK_IMPORTED_MODULE_9___default.a.replace("/");
      }
    }
  }, {
    key: "handleSharingToggle",
    value: function handleSharingToggle() {
      this.props.sendCertificateReset();
      this.setState({
        showSharing: !this.state.showSharing
      });
    }
  }, {
    key: "toggleDetailedView",
    value: function toggleDetailedView() {
      this.setState({
        detailedVerifyVisible: !this.state.detailedVerifyVisible
      });
    }
  }, {
    key: "handleCertificateChange",
    value: function handleCertificateChange(certificate) {
      this.props.updateCertificate(certificate);
    }
  }, {
    key: "handleSendCertificate",
    value: function handleSendCertificate(_ref) {
      var email = _ref.email,
          captcha = _ref.captcha;
      this.props.sendCertificate({
        email: email,
        captcha: captcha
      });
    }
  }, {
    key: "render",
    value: function render() {
      if (!this.props.document) return null;
      return __jsx(_CertificateViewer__WEBPACK_IMPORTED_MODULE_12__["default"], {
        document: this.props.document,
        certificate: Object(_govtechsg_open_attestation__WEBPACK_IMPORTED_MODULE_10__["getData"])(this.props.document),
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
        detailedVerifyVisible: this.state.detailedVerifyVisible,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      });
    }
  }]);

  return MainPageContainer;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

var mapStateToProps = function mapStateToProps(store) {
  return {
    document: Object(_reducers_certificate__WEBPACK_IMPORTED_MODULE_11__["getCertificate"])(store),
    // Verification statuses used in verifier block
    emailSendingState: Object(_reducers_certificate__WEBPACK_IMPORTED_MODULE_11__["getEmailSendingState"])(store),
    verifying: Object(_reducers_certificate__WEBPACK_IMPORTED_MODULE_11__["getVerifying"])(store),
    issuerIdentityStatus: Object(_reducers_certificate__WEBPACK_IMPORTED_MODULE_11__["getIssuerIdentityStatus"])(store),
    hashStatus: Object(_reducers_certificate__WEBPACK_IMPORTED_MODULE_11__["getHashStatus"])(store),
    issuedStatus: Object(_reducers_certificate__WEBPACK_IMPORTED_MODULE_11__["getIssuedStatus"])(store),
    notRevokedStatus: Object(_reducers_certificate__WEBPACK_IMPORTED_MODULE_11__["getNotRevokedStatus"])(store),
    verified: Object(_reducers_certificate__WEBPACK_IMPORTED_MODULE_11__["getVerified"])(store)
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    updateCertificate: function updateCertificate(payload) {
      return dispatch(Object(_reducers_certificate__WEBPACK_IMPORTED_MODULE_11__["updateCertificate"])(payload));
    },
    sendCertificate: function sendCertificate(payload) {
      return dispatch(Object(_reducers_certificate__WEBPACK_IMPORTED_MODULE_11__["sendCertificate"])(payload));
    },
    sendCertificateReset: function sendCertificateReset() {
      return dispatch(Object(_reducers_certificate__WEBPACK_IMPORTED_MODULE_11__["sendCertificateReset"])());
    },
    updateObfuscatedCertificate: function updateObfuscatedCertificate(updatedDoc) {
      return dispatch(Object(_reducers_certificate__WEBPACK_IMPORTED_MODULE_11__["updateObfuscatedCertificate"])(updatedDoc));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(mapStateToProps, mapDispatchToProps)(MainPageContainer));
MainPageContainer.propTypes = {
  updateCertificate: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,
  document: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object,
  certificate: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object,
  verifying: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,
  hashStatus: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object,
  issuedStatus: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object,
  notRevokedStatus: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object,
  issuerIdentityStatus: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object,
  verified: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,
  emailSendingState: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
  sendCertificate: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,
  sendCertificateReset: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,
  updateObfuscatedCertificate: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func
};

/***/ }),

/***/ "./src/components/ViewerPageContainer.js":
false

})
//# sourceMappingURL=[id].js.11fc3c48e1a73b7c55fc.hot-update.js.map