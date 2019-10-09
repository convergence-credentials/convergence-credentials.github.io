webpackHotUpdate("static/development/pages/public/cert/[id].js",{

/***/ "./node_modules/has-symbols/shams.js":
/*!*******************************************!*\
  !*** ./node_modules/has-symbols/shams.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint complexity: [2, 17], max-statements: [2, 33] */
module.exports = function hasSymbols() {
	if (typeof Symbol !== 'function' || typeof Object.getOwnPropertySymbols !== 'function') { return false; }
	if (typeof Symbol.iterator === 'symbol') { return true; }

	var obj = {};
	var sym = Symbol('test');
	var symObj = Object(sym);
	if (typeof sym === 'string') { return false; }

	if (Object.prototype.toString.call(sym) !== '[object Symbol]') { return false; }
	if (Object.prototype.toString.call(symObj) !== '[object Symbol]') { return false; }

	// temp disabled per https://github.com/ljharb/object.assign/issues/17
	// if (sym instanceof Symbol) { return false; }
	// temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
	// if (!(symObj instanceof Symbol)) { return false; }

	// if (typeof Symbol.prototype.toString !== 'function') { return false; }
	// if (String(sym) !== Symbol.prototype.toString.call(sym)) { return false; }

	var symVal = 42;
	obj[sym] = symVal;
	for (sym in obj) { return false; } // eslint-disable-line no-restricted-syntax
	if (typeof Object.keys === 'function' && Object.keys(obj).length !== 0) { return false; }

	if (typeof Object.getOwnPropertyNames === 'function' && Object.getOwnPropertyNames(obj).length !== 0) { return false; }

	var syms = Object.getOwnPropertySymbols(obj);
	if (syms.length !== 1 || syms[0] !== sym) { return false; }

	if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) { return false; }

	if (typeof Object.getOwnPropertyDescriptor === 'function') {
		var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
		if (descriptor.value !== symVal || descriptor.enumerable !== true) { return false; }
	}

	return true;
};


/***/ }),

/***/ "./node_modules/next-server/dist/lib/dynamic.js":
/*!******************************************************!*\
  !*** ./node_modules/next-server/dist/lib/dynamic.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$assign = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

var _Promise = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var loadable_1 = __importDefault(__webpack_require__(/*! ./loadable */ "./node_modules/next-server/dist/lib/loadable.js"));

var isServerSide = false;

function noSSR(LoadableInitializer, loadableOptions) {
  // Removing webpack and modules means react-loadable won't try preloading
  delete loadableOptions.webpack;
  delete loadableOptions.modules; // This check is neccesary to prevent react-loadable from initializing on the server

  if (!isServerSide) {
    return LoadableInitializer(loadableOptions);
  }

  var Loading = loadableOptions.loading; // This will only be rendered on the server side

  return function () {
    return react_1["default"].createElement(Loading, {
      error: null,
      isLoading: true,
      pastDelay: false,
      timedOut: false
    });
  };
}

exports.noSSR = noSSR; // function dynamic<P = {}, O extends DynamicOptions>(options: O):

function dynamic(dynamicOptions, options) {
  var loadableFn = loadable_1["default"];
  var loadableOptions = {
    // A loading component is not required, so we default it
    loading: function loading(_ref) {
      var error = _ref.error,
          isLoading = _ref.isLoading,
          pastDelay = _ref.pastDelay;
      if (!pastDelay) return null;

      if (true) {
        if (isLoading) {
          return null;
        }

        if (error) {
          return react_1["default"].createElement("p", null, error.message, react_1["default"].createElement("br", null), error.stack);
        }
      }

      return null;
    }
  }; // Support for direct import(), eg: dynamic(import('../hello-world'))
  // Note that this is only kept for the edge case where someone is passing in a promise as first argument
  // The react-loadable babel plugin will turn dynamic(import('../hello-world')) into dynamic(() => import('../hello-world'))
  // To make sure we don't execute the import without rendering first

  if (dynamicOptions instanceof _Promise) {
    loadableOptions.loader = function () {
      return dynamicOptions;
    }; // Support for having import as a function, eg: dynamic(() => import('../hello-world'))

  } else if (typeof dynamicOptions === 'function') {
    loadableOptions.loader = dynamicOptions; // Support for having first argument being options, eg: dynamic({loader: import('../hello-world')})
  } else if (typeof dynamicOptions === 'object') {
    loadableOptions = _Object$assign({}, loadableOptions, dynamicOptions);
  } // Support for passing options, eg: dynamic(import('../hello-world'), {loading: () => <p>Loading something</p>})


  loadableOptions = _Object$assign({}, loadableOptions, options);

  if (typeof dynamicOptions === 'object' && !(dynamicOptions instanceof _Promise)) {
    // show deprecation warning for `modules` key in development
    if (true) {
      if (dynamicOptions.modules) {
        console.warn('The modules option for next/dynamic has been deprecated. See here for more info https://err.sh/zeit/next.js/next-dynamic-modules');
      }
    } // Support for `render` when using a mapping, eg: `dynamic({ modules: () => {return {HelloWorld: import('../hello-world')}, render(props, loaded) {} } })


    if (dynamicOptions.render) {
      loadableOptions.render = function (loaded, props) {
        return dynamicOptions.render(props, loaded);
      };
    } // Support for `modules` when using a mapping, eg: `dynamic({ modules: () => {return {HelloWorld: import('../hello-world')}, render(props, loaded) {} } })


    if (dynamicOptions.modules) {
      loadableFn = loadable_1["default"].Map;
      var loadModules = {};
      var modules = dynamicOptions.modules();

      _Object$keys(modules).forEach(function (key) {
        var value = modules[key];

        if (typeof value.then === 'function') {
          loadModules[key] = function () {
            return value.then(function (mod) {
              return mod["default"] || mod;
            });
          };

          return;
        }

        loadModules[key] = value;
      });

      loadableOptions.loader = loadModules;
    }
  } // coming from build/babel/plugins/react-loadable-plugin.js


  if (loadableOptions.loadableGenerated) {
    loadableOptions = _Object$assign({}, loadableOptions, loadableOptions.loadableGenerated);
    delete loadableOptions.loadableGenerated;
  } // support for disabling server side rendering, eg: dynamic(import('../hello-world'), {ssr: false})


  if (typeof loadableOptions.ssr === 'boolean') {
    if (!loadableOptions.ssr) {
      delete loadableOptions.ssr;
      return noSSR(loadableFn, loadableOptions);
    }

    delete loadableOptions.ssr;
  }

  return loadableFn(loadableOptions);
}

exports["default"] = dynamic;

/***/ }),

/***/ "./node_modules/next-server/dist/lib/loadable-context.js":
/*!***************************************************************!*\
  !*** ./node_modules/next-server/dist/lib/loadable-context.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js")); // @ts-ignore for some reason the React types don't like this, but it's correct.


exports.LoadableContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next-server/dist/lib/loadable.js":
/*!*******************************************************!*\
  !*** ./node_modules/next-server/dist/lib/loadable.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
@copyright (c) 2017-present James Kyle <me@thejameskyle.com>
 MIT License
 Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:
 The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.
 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE
*/
// https://github.com/jamiebuilds/react-loadable/blob/v5.5.0/src/index.js
// Modified to be compatible with webpack 4 / Next.js

var _Array$isArray = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");

var _classCallCheck = __webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js");

var _possibleConstructorReturn = __webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js");

var _getPrototypeOf = __webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js");

var _inherits = __webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js");

var _getIterator = __webpack_require__(/*! @babel/runtime-corejs2/core-js/get-iterator */ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js");

var _Object$assign = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

var _Promise = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");

var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var loadable_context_1 = __webpack_require__(/*! ./loadable-context */ "./node_modules/next-server/dist/lib/loadable-context.js");

var ALL_INITIALIZERS = [];
var READY_INITIALIZERS = [];
var initialized = false;

function load(loader) {
  var promise = loader();
  var state = {
    loading: true,
    loaded: null,
    error: null
  };
  state.promise = promise.then(function (loaded) {
    state.loading = false;
    state.loaded = loaded;
    return loaded;
  })["catch"](function (err) {
    state.loading = false;
    state.error = err;
    throw err;
  });
  return state;
}

function loadMap(obj) {
  var state = {
    loading: false,
    loaded: {},
    error: null
  };
  var promises = [];

  try {
    _Object$keys(obj).forEach(function (key) {
      var result = load(obj[key]);

      if (!result.loading) {
        state.loaded[key] = result.loaded;
        state.error = result.error;
      } else {
        state.loading = true;
      }

      promises.push(result.promise);
      result.promise.then(function (res) {
        state.loaded[key] = res;
      })["catch"](function (err) {
        state.error = err;
      });
    });
  } catch (err) {
    state.error = err;
  }

  state.promise = _Promise.all(promises).then(function (res) {
    state.loading = false;
    return res;
  })["catch"](function (err) {
    state.loading = false;
    throw err;
  });
  return state;
}

function resolve(obj) {
  return obj && obj.__esModule ? obj["default"] : obj;
}

function render(loaded, props) {
  return react_1["default"].createElement(resolve(loaded), props);
}

function createLoadableComponent(loadFn, options) {
  var _a;

  var opts = _Object$assign({
    loader: null,
    loading: null,
    delay: 200,
    timeout: null,
    render: render,
    webpack: null,
    modules: null
  }, options);

  var res = null;

  function init() {
    if (!res) {
      res = loadFn(opts.loader);
    }

    return res.promise;
  } // Server only


  if (false) {} // Client only


  if (!initialized && true && typeof opts.webpack === 'function') {
    var moduleIds = opts.webpack();
    READY_INITIALIZERS.push(function (ids) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = _getIterator(moduleIds), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var moduleId = _step.value;

          if (ids.indexOf(moduleId) !== -1) {
            return init();
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    });
  }

  return _a =
  /*#__PURE__*/
  function (_react_1$default$Comp) {
    _inherits(LoadableComponent, _react_1$default$Comp);

    function LoadableComponent(props) {
      var _this;

      _classCallCheck(this, LoadableComponent);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(LoadableComponent).call(this, props));

      _this.retry = function () {
        _this.setState({
          error: null,
          loading: true,
          timedOut: false
        });

        res = loadFn(opts.loader);

        _this._loadModule();
      };

      init();
      _this.state = {
        error: res.error,
        pastDelay: false,
        timedOut: false,
        loading: res.loading,
        loaded: res.loaded
      };
      return _this;
    }

    _createClass(LoadableComponent, [{
      key: "UNSAFE_componentWillMount",
      // TODO: change it before next major React release
      // eslint-disable-next-line
      value: function UNSAFE_componentWillMount() {
        this._mounted = true;

        this._loadModule();
      }
    }, {
      key: "_loadModule",
      value: function _loadModule() {
        var _this2 = this;

        if (this.context && _Array$isArray(opts.modules)) {
          opts.modules.forEach(function (moduleName) {
            _this2.context(moduleName);
          });
        }

        if (!res.loading) {
          return;
        }

        if (typeof opts.delay === 'number') {
          if (opts.delay === 0) {
            this.setState({
              pastDelay: true
            });
          } else {
            this._delay = setTimeout(function () {
              _this2.setState({
                pastDelay: true
              });
            }, opts.delay);
          }
        }

        if (typeof opts.timeout === 'number') {
          this._timeout = setTimeout(function () {
            _this2.setState({
              timedOut: true
            });
          }, opts.timeout);
        }

        var update = function update() {
          if (!_this2._mounted) {
            return;
          }

          _this2.setState({
            error: res.error,
            loaded: res.loaded,
            loading: res.loading
          });

          _this2._clearTimeouts();
        };

        res.promise.then(function () {
          update();
        }) // eslint-disable-next-line handle-callback-err
        ["catch"](function (err) {
          update();
        });
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this._mounted = false;

        this._clearTimeouts();
      }
    }, {
      key: "_clearTimeouts",
      value: function _clearTimeouts() {
        clearTimeout(this._delay);
        clearTimeout(this._timeout);
      }
    }, {
      key: "render",
      value: function render() {
        if (this.state.loading || this.state.error) {
          return react_1["default"].createElement(opts.loading, {
            isLoading: this.state.loading,
            pastDelay: this.state.pastDelay,
            timedOut: this.state.timedOut,
            error: this.state.error,
            retry: this.retry
          });
        } else if (this.state.loaded) {
          return opts.render(this.state.loaded, this.props);
        } else {
          return null;
        }
      }
    }], [{
      key: "preload",
      value: function preload() {
        return init();
      }
    }]);

    return LoadableComponent;
  }(react_1["default"].Component), _a.contextType = loadable_context_1.LoadableContext, _a;
}

function Loadable(opts) {
  return createLoadableComponent(load, opts);
}

function LoadableMap(opts) {
  if (typeof opts.render !== 'function') {
    throw new Error('LoadableMap requires a `render(loaded, props)` function');
  }

  return createLoadableComponent(loadMap, opts);
}

Loadable.Map = LoadableMap;

function flushInitializers(initializers, ids) {
  var promises = [];

  while (initializers.length) {
    var init = initializers.pop();
    promises.push(init(ids));
  }

  return _Promise.all(promises).then(function () {
    if (initializers.length) {
      return flushInitializers(initializers, ids);
    }
  });
}

Loadable.preloadAll = function () {
  return new _Promise(function (resolve, reject) {
    flushInitializers(ALL_INITIALIZERS).then(resolve, reject);
  });
};

Loadable.preloadReady = function () {
  var ids = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return new _Promise(function (resolve) {
    var res = function res() {
      initialized = true;
      return resolve();
    }; // We always will resolve, errors should be handled within loading UIs.


    flushInitializers(READY_INITIALIZERS, ids).then(res, res);
  });
};

if (true) {
  window.__NEXT_PRELOADREADY = Loadable.preloadReady;
}

exports["default"] = Loadable;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js");

var _possibleConstructorReturn = __webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js");

var _getPrototypeOf = __webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js");

var _inherits = __webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports["default"] = void 0;

var _map = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "./node_modules/@babel/runtime-corejs2/core-js/map.js"));

var _url = __webpack_require__(/*! url */ "./node_modules/url/url.js");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _rewriteUrlForExport = __webpack_require__(/*! next-server/dist/lib/router/rewrite-url-for-export */ "./node_modules/next-server/dist/lib/router/rewrite-url-for-export.js");

var _utils = __webpack_require__(/*! next-server/dist/lib/utils */ "./node_modules/next-server/dist/lib/utils.js");
/* global __NEXT_DATA__ */


function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return function (href, as) {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new _map["default"]();
var IntersectionObserver = true ? window.IntersectionObserver : undefined;

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners["delete"](entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = function listenToIntersections(el, cb) {
  var observer = getObserver();

  if (!observer) {
    return function () {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return function () {
    observer.unobserve(el);
    listeners["delete"](el);
  };
};

var Link =
/*#__PURE__*/
function (_react$Component) {
  _inherits(Link, _react$Component);

  function Link(props) {
    var _this;

    _classCallCheck(this, Link);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Link).call(this, props));
    _this.p = void 0;

    _this.cleanUpListeners = function () {};

    _this.formatUrls = memoizedFormatUrl(function (href, asHref) {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    _this.linkClicked = function (e) {
      // @ts-ignore target exists on currentTarget
      var _e$currentTarget = e.currentTarget,
          nodeName = _e$currentTarget.nodeName,
          target = _e$currentTarget.target;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var _this$formatUrls = _this.formatUrls(_this.props.href, _this.props.as),
          href = _this$formatUrls.href,
          as = _this$formatUrls.as;

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var pathname = window.location.pathname;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = _this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router["default"][_this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: _this.props.shallow
      }).then(function (success) {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    _this.p = props.prefetch !== false;
    return _this;
  }

  _createClass(Link, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.cleanUpListeners();
    }
  }, {
    key: "handleRef",
    value: function handleRef(ref) {
      var _this2 = this;

      if (this.p && IntersectionObserver && ref && ref.tagName) {
        this.cleanUpListeners();
        this.cleanUpListeners = listenToIntersections(ref, function () {
          _this2.prefetch();
        });
      }
    } // The function is memoized so that no extra lifecycles are needed
    // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

  }, {
    key: "prefetch",
    value: function prefetch() {
      if (!this.p || false) return; // Prefetch the JSON page if asked (only in the client)

      var pathname = window.location.pathname;

      var _this$formatUrls2 = this.formatUrls(this.props.href, this.props.as),
          parsedHref = _this$formatUrls2.href;

      var href = (0, _url.resolve)(pathname, parsedHref);

      _router["default"].prefetch(href);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var children = this.props.children;

      var _this$formatUrls3 = this.formatUrls(this.props.href, this.props.as),
          href = _this$formatUrls3.href,
          as = _this$formatUrls3.as; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag


      if (typeof children === 'string') {
        children = _react["default"].createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = _react.Children.only(children);

      var props = {
        ref: function ref(el) {
          _this3.handleRef(el);

          if (child && typeof child === 'object' && child.ref) {
            if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
              child.ref.current = el;
            }
          }
        },
        onMouseEnter: function onMouseEnter(e) {
          if (child.props && typeof child.props.onMouseEnter === 'function') {
            child.props.onMouseEnter(e);
          }

          _this3.prefetch();
        },
        onClick: function onClick(e) {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            _this3.linkClicked(e);
          }
        } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
        // defined, we specify the current 'href', so that repetition is not needed by the user

      };

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (false) {}

      return _react["default"].cloneElement(child, props);
    }
  }]);

  return Link;
}(_react.Component);

Link.propTypes = void 0;

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var exact = __webpack_require__(/*! prop-types-exact */ "./node_modules/prop-types-exact/build/index.js");

  Link.propTypes = exact({
    href: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].object]).isRequired,
    as: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].object]),
    prefetch: _propTypes["default"].bool,
    replace: _propTypes["default"].bool,
    shallow: _propTypes["default"].bool,
    passHref: _propTypes["default"].bool,
    scroll: _propTypes["default"].bool,
    children: _propTypes["default"].oneOfType([_propTypes["default"].element, function (props, propName) {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/object.assign/implementation.js":
/*!******************************************************!*\
  !*** ./node_modules/object.assign/implementation.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// modified from https://github.com/es-shims/es6-shim
var keys = __webpack_require__(/*! object-keys */ "./node_modules/object-keys/index.js");
var bind = __webpack_require__(/*! function-bind */ "./node_modules/function-bind/index.js");
var canBeObject = function (obj) {
	return typeof obj !== 'undefined' && obj !== null;
};
var hasSymbols = __webpack_require__(/*! has-symbols/shams */ "./node_modules/has-symbols/shams.js")();
var toObject = Object;
var push = bind.call(Function.call, Array.prototype.push);
var propIsEnumerable = bind.call(Function.call, Object.prototype.propertyIsEnumerable);
var originalGetSymbols = hasSymbols ? Object.getOwnPropertySymbols : null;

module.exports = function assign(target, source1) {
	if (!canBeObject(target)) { throw new TypeError('target must be an object'); }
	var objTarget = toObject(target);
	var s, source, i, props, syms, value, key;
	for (s = 1; s < arguments.length; ++s) {
		source = toObject(arguments[s]);
		props = keys(source);
		var getSymbols = hasSymbols && (Object.getOwnPropertySymbols || originalGetSymbols);
		if (getSymbols) {
			syms = getSymbols(source);
			for (i = 0; i < syms.length; ++i) {
				key = syms[i];
				if (propIsEnumerable(source, key)) {
					push(props, key);
				}
			}
		}
		for (i = 0; i < props.length; ++i) {
			key = props[i];
			value = source[key];
			if (propIsEnumerable(source, key)) {
				objTarget[key] = value;
			}
		}
	}
	return objTarget;
};


/***/ }),

/***/ "./node_modules/object.assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object.assign/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defineProperties = __webpack_require__(/*! define-properties */ "./node_modules/define-properties/index.js");

var implementation = __webpack_require__(/*! ./implementation */ "./node_modules/object.assign/implementation.js");
var getPolyfill = __webpack_require__(/*! ./polyfill */ "./node_modules/object.assign/polyfill.js");
var shim = __webpack_require__(/*! ./shim */ "./node_modules/object.assign/shim.js");

var polyfill = getPolyfill();

defineProperties(polyfill, {
	getPolyfill: getPolyfill,
	implementation: implementation,
	shim: shim
});

module.exports = polyfill;


/***/ }),

/***/ "./node_modules/object.assign/polyfill.js":
/*!************************************************!*\
  !*** ./node_modules/object.assign/polyfill.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var implementation = __webpack_require__(/*! ./implementation */ "./node_modules/object.assign/implementation.js");

var lacksProperEnumerationOrder = function () {
	if (!Object.assign) {
		return false;
	}
	// v8, specifically in node 4.x, has a bug with incorrect property enumeration order
	// note: this does not detect the bug unless there's 20 characters
	var str = 'abcdefghijklmnopqrst';
	var letters = str.split('');
	var map = {};
	for (var i = 0; i < letters.length; ++i) {
		map[letters[i]] = letters[i];
	}
	var obj = Object.assign({}, map);
	var actual = '';
	for (var k in obj) {
		actual += k;
	}
	return str !== actual;
};

var assignHasPendingExceptions = function () {
	if (!Object.assign || !Object.preventExtensions) {
		return false;
	}
	// Firefox 37 still has "pending exception" logic in its Object.assign implementation,
	// which is 72% slower than our shim, and Firefox 40's native implementation.
	var thrower = Object.preventExtensions({ 1: 2 });
	try {
		Object.assign(thrower, 'xy');
	} catch (e) {
		return thrower[1] === 'y';
	}
	return false;
};

module.exports = function getPolyfill() {
	if (!Object.assign) {
		return implementation;
	}
	if (lacksProperEnumerationOrder()) {
		return implementation;
	}
	if (assignHasPendingExceptions()) {
		return implementation;
	}
	return Object.assign;
};


/***/ }),

/***/ "./node_modules/object.assign/shim.js":
/*!********************************************!*\
  !*** ./node_modules/object.assign/shim.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var define = __webpack_require__(/*! define-properties */ "./node_modules/define-properties/index.js");
var getPolyfill = __webpack_require__(/*! ./polyfill */ "./node_modules/object.assign/polyfill.js");

module.exports = function shimAssign() {
	var polyfill = getPolyfill();
	define(
		Object,
		{ assign: polyfill },
		{ assign: function () { return Object.assign !== polyfill; } }
	);
	return polyfill;
};


/***/ }),

/***/ "./node_modules/penpal/lib/connectCallReceiver.js":
/*!********************************************************!*\
  !*** ./node_modules/penpal/lib/connectCallReceiver.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _constants = __webpack_require__(/*! ./constants */ "./node_modules/penpal/lib/constants.js");

var _errorSerialization = __webpack_require__(/*! ./errorSerialization */ "./node_modules/penpal/lib/errorSerialization.js");

/**
 * Listens for "call" messages coming from the remote, executes the corresponding method, and
 * responds with the return value.
 * @param {Object} info Information about the local and remote windows.
 * @param {Object} methods The keys are the names of the methods that can be called by the remote
 * while the values are the method functions.
 * @param {Promise} destructionPromise A promise resolved when destroy() is called on the penpal
 * connection.
 * @returns {Function} A function that may be called to disconnect the receiver.
 */
var _default = (info, methods, log) => {
  const localName = info.localName,
        local = info.local,
        remote = info.remote,
        originForSending = info.originForSending,
        originForReceiving = info.originForReceiving;
  let destroyed = false;
  log(`${localName}: Connecting call receiver`);

  const handleMessageEvent = event => {
    if (event.source !== remote || event.data.penpal !== _constants.CALL) {
      return;
    }

    if (event.origin !== originForReceiving) {
      log(`${localName} received message from origin ${event.origin} which did not match expected origin ${originForReceiving}`);
      return;
    }

    const _event$data = event.data,
          methodName = _event$data.methodName,
          args = _event$data.args,
          id = _event$data.id;
    log(`${localName}: Received ${methodName}() call`);

    const createPromiseHandler = resolution => {
      return returnValue => {
        log(`${localName}: Sending ${methodName}() reply`);

        if (destroyed) {
          // It's possible to throw an error here, but it would need to be thrown asynchronously
          // and would only be catchable using window.onerror. This is because the consumer
          // is merely returning a value from their method and not calling any function
          // that they could wrap in a try-catch. Even if the consumer were to catch the error,
          // the value of doing so is questionable. Instead, we'll just log a message.
          log(`${localName}: Unable to send ${methodName}() reply due to destroyed connection`);
          return;
        }

        const message = {
          penpal: _constants.REPLY,
          id,
          resolution,
          returnValue
        };

        if (resolution === _constants.REJECTED && returnValue instanceof Error) {
          message.returnValue = (0, _errorSerialization.serializeError)(returnValue);
          message.returnValueIsError = true;
        }

        try {
          remote.postMessage(message, originForSending);
        } catch (err) {
          // If a consumer attempts to send an object that's not cloneable (e.g., window),
          // we want to ensure the receiver's promise gets rejected.
          if (err.name === _constants.DATA_CLONE_ERROR) {
            remote.postMessage({
              penpal: _constants.REPLY,
              id,
              resolution: _constants.REJECTED,
              returnValue: (0, _errorSerialization.serializeError)(err),
              returnValueIsError: true
            }, originForSending);
          }

          throw err;
        }
      };
    };

    new Promise(resolve => resolve(methods[methodName].apply(methods, args))).then(createPromiseHandler(_constants.FULFILLED), createPromiseHandler(_constants.REJECTED));
  };

  local.addEventListener(_constants.MESSAGE, handleMessageEvent);
  return () => {
    destroyed = true;
    local.removeEventListener(_constants.MESSAGE, handleMessageEvent);
  };
};

exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/penpal/lib/connectCallSender.js":
/*!******************************************************!*\
  !*** ./node_modules/penpal/lib/connectCallSender.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _constants = __webpack_require__(/*! ./constants */ "./node_modules/penpal/lib/constants.js");

var _errorCodes = __webpack_require__(/*! ./errorCodes */ "./node_modules/penpal/lib/errorCodes.js");

var _generateId = _interopRequireDefault(__webpack_require__(/*! ./generateId */ "./node_modules/penpal/lib/generateId.js"));

var _errorSerialization = __webpack_require__(/*! ./errorSerialization */ "./node_modules/penpal/lib/errorSerialization.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Augments an object with methods that match those defined by the remote. When these methods are
 * called, a "call" message will be sent to the remote, the remote's corresponding method will be
 * executed, and the method's return value will be returned via a message.
 * @param {Object} callSender Sender object that should be augmented with methods.
 * @param {Object} info Information about the local and remote windows.
 * @param {Array} methodNames Names of methods available to be called on the remote.
 * @param {Promise} destructionPromise A promise resolved when destroy() is called on the penpal
 * connection.
 * @returns {Object} The call sender object with methods that may be called.
 */
var _default = (callSender, info, methodNames, destroyConnection, log) => {
  const localName = info.localName,
        local = info.local,
        remote = info.remote,
        originForSending = info.originForSending,
        originForReceiving = info.originForReceiving;
  let destroyed = false;
  log(`${localName}: Connecting call sender`);

  const createMethodProxy = methodName => {
    return function () {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      log(`${localName}: Sending ${methodName}() call`); // This handles the case where the iframe has been removed from the DOM
      // (and therefore its window closed), the consumer has not yet
      // called destroy(), and the user calls a method exposed by
      // the remote. We detect the iframe has been removed and force
      // a destroy() immediately so that the consumer sees the error saying
      // the connection has been destroyed. We wrap this check in a try catch
      // because Edge throws an "Object expected" error when accessing
      // contentWindow.closed on a contentWindow from an iframe that's been
      // removed from the DOM.

      let iframeRemoved;

      try {
        if (remote.closed) {
          iframeRemoved = true;
        }
      } catch (e) {
        iframeRemoved = true;
      }

      if (iframeRemoved) {
        destroyConnection();
      }

      if (destroyed) {
        const error = new Error(`Unable to send ${methodName}() call due ` + `to destroyed connection`);
        error.code = _errorCodes.ERR_CONNECTION_DESTROYED;
        throw error;
      }

      return new Promise((resolve, reject) => {
        const id = (0, _generateId.default)();

        const handleMessageEvent = event => {
          if (event.source !== remote || event.data.penpal !== _constants.REPLY || event.data.id !== id) {
            return;
          }

          if (event.origin !== originForReceiving) {
            log(`${localName} received message from origin ${event.origin} which did not match expected origin ${originForReceiving}`);
            return;
          }

          log(`${localName}: Received ${methodName}() reply`);
          local.removeEventListener(_constants.MESSAGE, handleMessageEvent);
          let returnValue = event.data.returnValue;

          if (event.data.returnValueIsError) {
            returnValue = (0, _errorSerialization.deserializeError)(returnValue);
          }

          (event.data.resolution === _constants.FULFILLED ? resolve : reject)(returnValue);
        };

        local.addEventListener(_constants.MESSAGE, handleMessageEvent);
        remote.postMessage({
          penpal: _constants.CALL,
          id,
          methodName,
          args
        }, originForSending);
      });
    };
  };

  methodNames.reduce((api, methodName) => {
    api[methodName] = createMethodProxy(methodName);
    return api;
  }, callSender);
  return () => {
    destroyed = true;
  };
};

exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/penpal/lib/connectToChild.js":
/*!***************************************************!*\
  !*** ./node_modules/penpal/lib/connectToChild.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _constants = __webpack_require__(/*! ./constants */ "./node_modules/penpal/lib/constants.js");

var _errorCodes = __webpack_require__(/*! ./errorCodes */ "./node_modules/penpal/lib/errorCodes.js");

var _createDestructor2 = _interopRequireDefault(__webpack_require__(/*! ./createDestructor */ "./node_modules/penpal/lib/createDestructor.js"));

var _getOriginFromSrc = _interopRequireDefault(__webpack_require__(/*! ./getOriginFromSrc */ "./node_modules/penpal/lib/getOriginFromSrc.js"));

var _createLogger = _interopRequireDefault(__webpack_require__(/*! ./createLogger */ "./node_modules/penpal/lib/createLogger.js"));

var _connectCallReceiver = _interopRequireDefault(__webpack_require__(/*! ./connectCallReceiver */ "./node_modules/penpal/lib/connectCallReceiver.js"));

var _connectCallSender = _interopRequireDefault(__webpack_require__(/*! ./connectCallSender */ "./node_modules/penpal/lib/connectCallSender.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const CHECK_IFRAME_IN_DOC_INTERVAL = 60000;
/**
 * @typedef {Object} Child
 * @property {Promise} promise A promise which will be resolved once a connection has
 * been established.
 * @property {Function} destroy A method that, when called, will disconnect any
 * messaging channels. You may call this even before a connection has been established.
 */

/**
 * Creates an iframe, loads a webpage into the URL, and attempts to establish communication with
 * the iframe.
 * @param {Object} options
 * @param {HTMLIframeElement} options.iframe The iframe to connect to.
 * @param {Object} [options.methods={}] Methods that may be called by the iframe.
 * @param {String} [options.childOrigin] The child origin to use to secure communication. If
 * not provided, the child origin will be derived from the iframe's src or srcdoc value.
 * @param {Number} [options.timeout] The amount of time, in milliseconds, Penpal should wait
 * for the child to respond before rejecting the connection promise.
 * @return {Child}
 */

var _default = (_ref) => {
  let iframe = _ref.iframe,
      _ref$methods = _ref.methods,
      methods = _ref$methods === void 0 ? {} : _ref$methods,
      childOrigin = _ref.childOrigin,
      timeout = _ref.timeout,
      debug = _ref.debug;
  const log = (0, _createLogger.default)(debug);
  const parent = window;

  const _createDestructor = (0, _createDestructor2.default)(),
        destroy = _createDestructor.destroy,
        onDestroy = _createDestructor.onDestroy;

  if (!childOrigin) {
    if (!iframe.src && !iframe.srcdoc) {
      const error = new Error('Iframe must have src or srcdoc property defined.');
      error.code = _errorCodes.ERR_NO_IFRAME_SRC;
      throw error;
    }

    childOrigin = (0, _getOriginFromSrc.default)(iframe.src);
  } // If event.origin is "null", the remote protocol is
  // file:, data:, and we must post messages with "*" as targetOrigin
  // when sending and allow
  // [1] https://developer.mozilla.org/fr/docs/Web/API/Window/postMessage#Utiliser_window.postMessage_dans_les_extensions


  const originForSending = childOrigin === 'null' ? '*' : childOrigin;
  const promise = new Promise((resolveConnectionPromise, reject) => {
    let connectionTimeoutId;

    if (timeout !== undefined) {
      connectionTimeoutId = setTimeout(() => {
        const error = new Error(`Connection to child timed out after ${timeout}ms`);
        error.code = _errorCodes.ERR_CONNECTION_TIMEOUT;
        reject(error);
        destroy();
      }, timeout);
    } // We resolve the promise with the call sender. If the child reconnects (for example, after
    // refreshing or navigating to another page that uses Penpal, we'll update the call sender
    // with methods that match the latest provided by the child.


    const callSender = {};
    let receiverMethodNames;
    let destroyCallReceiver;

    const handleMessage = event => {
      const child = iframe.contentWindow;

      if (event.source !== child || event.data.penpal !== _constants.HANDSHAKE) {
        return;
      }

      if (event.origin !== childOrigin) {
        log(`Parent received handshake from origin ${event.origin} which did not match expected origin ${childOrigin}`);
        return;
      }

      log('Parent: Received handshake, sending reply');
      event.source.postMessage({
        penpal: _constants.HANDSHAKE_REPLY,
        methodNames: Object.keys(methods)
      }, originForSending);
      const info = {
        localName: 'Parent',
        local: parent,
        remote: child,
        originForSending: originForSending,
        originForReceiving: childOrigin
      }; // If the child reconnected, we need to destroy the previous call receiver before setting
      // up a new one.

      if (destroyCallReceiver) {
        destroyCallReceiver();
      }

      destroyCallReceiver = (0, _connectCallReceiver.default)(info, methods, log);
      onDestroy(destroyCallReceiver); // If the child reconnected, we need to remove the methods from the previous call receiver
      // off the sender.

      if (receiverMethodNames) {
        receiverMethodNames.forEach(receiverMethodName => {
          delete callSender[receiverMethodName];
        });
      }

      receiverMethodNames = event.data.methodNames;
      const destroyCallSender = (0, _connectCallSender.default)(callSender, info, receiverMethodNames, destroy, log);
      onDestroy(destroyCallSender);
      clearTimeout(connectionTimeoutId);
      resolveConnectionPromise(callSender);
    };

    parent.addEventListener(_constants.MESSAGE, handleMessage);
    log('Parent: Awaiting handshake'); // This is to prevent memory leaks when the iframe is removed
    // from the document and the consumer hasn't called destroy().
    // Without this, event listeners attached to the window would
    // stick around and since the event handlers have a reference
    // to the iframe in their closures, the iframe would stick around
    // too.

    var checkIframeInDocIntervalId = setInterval(() => {
      if (!document.contains(iframe)) {
        clearInterval(checkIframeInDocIntervalId);
        destroy();
      }
    }, CHECK_IFRAME_IN_DOC_INTERVAL);
    onDestroy(() => {
      parent.removeEventListener(_constants.MESSAGE, handleMessage);
      clearInterval(checkIframeInDocIntervalId);
      const error = new Error('Connection destroyed');
      error.code = _errorCodes.ERR_CONNECTION_DESTROYED;
      reject(error);
    });
  });
  return {
    promise,
    destroy
  };
};

exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/penpal/lib/constants.js":
/*!**********************************************!*\
  !*** ./node_modules/penpal/lib/constants.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DATA_CLONE_ERROR = exports.MESSAGE = exports.REJECTED = exports.FULFILLED = exports.REPLY = exports.CALL = exports.HANDSHAKE_REPLY = exports.HANDSHAKE = void 0;
const HANDSHAKE = 'handshake';
exports.HANDSHAKE = HANDSHAKE;
const HANDSHAKE_REPLY = 'handshake-reply';
exports.HANDSHAKE_REPLY = HANDSHAKE_REPLY;
const CALL = 'call';
exports.CALL = CALL;
const REPLY = 'reply';
exports.REPLY = REPLY;
const FULFILLED = 'fulfilled';
exports.FULFILLED = FULFILLED;
const REJECTED = 'rejected';
exports.REJECTED = REJECTED;
const MESSAGE = 'message';
exports.MESSAGE = MESSAGE;
const DATA_CLONE_ERROR = 'DataCloneError';
exports.DATA_CLONE_ERROR = DATA_CLONE_ERROR;

/***/ }),

/***/ "./node_modules/penpal/lib/createDestructor.js":
/*!*****************************************************!*\
  !*** ./node_modules/penpal/lib/createDestructor.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = () => {
  const callbacks = [];
  let destroyed = false;
  return {
    destroy() {
      destroyed = true;
      callbacks.forEach(callback => {
        callback();
      });
    },

    onDestroy(callback) {
      destroyed ? callback() : callbacks.push(callback);
    }

  };
};

exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/penpal/lib/createLogger.js":
/*!*************************************************!*\
  !*** ./node_modules/penpal/lib/createLogger.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = debug => {
  return function () {
    if (debug) {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      console.log('[Penpal]', ...args); // eslint-disable-line no-console
    }
  };
};

exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/penpal/lib/errorCodes.js":
/*!***********************************************!*\
  !*** ./node_modules/penpal/lib/errorCodes.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ERR_NO_IFRAME_SRC = exports.ERR_NOT_IN_IFRAME = exports.ERR_CONNECTION_TIMEOUT = exports.ERR_CONNECTION_DESTROYED = void 0;
const ERR_CONNECTION_DESTROYED = 'ConnectionDestroyed';
exports.ERR_CONNECTION_DESTROYED = ERR_CONNECTION_DESTROYED;
const ERR_CONNECTION_TIMEOUT = 'ConnectionTimeout';
exports.ERR_CONNECTION_TIMEOUT = ERR_CONNECTION_TIMEOUT;
const ERR_NOT_IN_IFRAME = 'NotInIframe';
exports.ERR_NOT_IN_IFRAME = ERR_NOT_IN_IFRAME;
const ERR_NO_IFRAME_SRC = 'NoIframeSrc';
exports.ERR_NO_IFRAME_SRC = ERR_NO_IFRAME_SRC;

/***/ }),

/***/ "./node_modules/penpal/lib/errorSerialization.js":
/*!*******************************************************!*\
  !*** ./node_modules/penpal/lib/errorSerialization.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deserializeError = exports.serializeError = void 0;

/**
 * Converts an error object into a plain object.
 * @param {Error} Error object.
 * @returns {Object}
 */
const serializeError = (_ref) => {
  let name = _ref.name,
      message = _ref.message,
      stack = _ref.stack;
  return {
    name,
    message,
    stack
  };
};
/**
 * Converts a plain object into an error object.
 * @param {Object} Object with error properties.
 * @returns {Error}
 */


exports.serializeError = serializeError;

const deserializeError = obj => {
  const deserializedError = new Error();
  Object.keys(obj).forEach(key => deserializedError[key] = obj[key]);
  return deserializedError;
};

exports.deserializeError = deserializeError;

/***/ }),

/***/ "./node_modules/penpal/lib/generateId.js":
/*!***********************************************!*\
  !*** ./node_modules/penpal/lib/generateId.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
let id = 0;
/**
 * @return {number} A unique ID (not universally unique)
 */

var _default = () => ++id;

exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/penpal/lib/getOriginFromSrc.js":
/*!*****************************************************!*\
  !*** ./node_modules/penpal/lib/getOriginFromSrc.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const DEFAULT_PORTS = {
  'http:': '80',
  'https:': '443'
};
const URL_REGEX = /^(https?:)?\/\/([^/:]+)?(:(\d+))?/;
const opaqueOriginSchemes = ['file:', 'data:'];
/**
 * Converts a src value into an origin.
 * @param {string} src
 * @return {string} The URL's origin
 */

var _default = src => {
  if (src && opaqueOriginSchemes.find(scheme => src.startsWith(scheme))) {
    // The origin of the child document is an opaque origin and its
    // serialization is "null"
    // https://html.spec.whatwg.org/multipage/origin.html#origin
    return 'null';
  } // Note that if src is undefined, then srcdoc is being used instead of src
  // and we can follow this same logic below to get the origin of the parent,
  // which is the origin that we will need to use.


  const location = document.location;
  const regexResult = URL_REGEX.exec(src);
  let protocol;
  let hostname;
  let port;

  if (regexResult) {
    // It's an absolute URL. Use the parsed info.
    // regexResult[1] will be undefined if the URL starts with //
    protocol = regexResult[1] ? regexResult[1] : location.protocol;
    hostname = regexResult[2];
    port = regexResult[4];
  } else {
    // It's a relative path. Use the current location's info.
    protocol = location.protocol;
    hostname = location.hostname;
    port = location.port;
  } // If the port is the default for the protocol, we don't want to add it to the origin string
  // or it won't match the message's event.origin.


  const portSuffix = port && port !== DEFAULT_PORTS[protocol] ? `:${port}` : '';
  return `${protocol}//${hostname}${portSuffix}`;
};

exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/prop-types-exact/build/helpers/isPlainObject.js":
/*!**********************************************************************!*\
  !*** ./node_modules/prop-types-exact/build/helpers/isPlainObject.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports['default'] = isPlainObject;
function isPlainObject(x) {
  return x && (typeof x === 'undefined' ? 'undefined' : _typeof(x)) === 'object' && !Array.isArray(x);
}
module.exports = exports['default'];
//# sourceMappingURL=isPlainObject.js.map

/***/ }),

/***/ "./node_modules/prop-types-exact/build/index.js":
/*!******************************************************!*\
  !*** ./node_modules/prop-types-exact/build/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = forbidExtraProps;

var _object = __webpack_require__(/*! object.assign */ "./node_modules/object.assign/index.js");

var _object2 = _interopRequireDefault(_object);

var _has = __webpack_require__(/*! has */ "./node_modules/has/src/index.js");

var _has2 = _interopRequireDefault(_has);

var _isPlainObject = __webpack_require__(/*! ./helpers/isPlainObject */ "./node_modules/prop-types-exact/build/helpers/isPlainObject.js");

var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var zeroWidthSpace = '\u200B';
var specialProperty = 'prop-types-exact: ' + zeroWidthSpace;
var semaphore = typeof Symbol === 'function' && typeof Symbol['for'] === 'function' ? Symbol['for'](specialProperty) : /* istanbul ignore next */specialProperty;

function brand(fn) {
  return (0, _object2['default'])(fn, _defineProperty({}, specialProperty, semaphore));
}

function isBranded(value) {
  return value && value[specialProperty] === semaphore;
}

function forbidExtraProps(propTypes) {
  if (!(0, _isPlainObject2['default'])(propTypes)) {
    throw new TypeError('given propTypes must be an object');
  }
  if ((0, _has2['default'])(propTypes, specialProperty) && !isBranded(propTypes[specialProperty])) {
    throw new TypeError('Against all odds, you created a propType for a prop that uses both the zero-width space and our custom string - which, sadly, conflicts with `prop-types-exact`');
  }

  return (0, _object2['default'])({}, propTypes, _defineProperty({}, specialProperty, brand(function () {
    function forbidUnknownProps(props, _, componentName) {
      var unknownProps = Object.keys(props).filter(function (prop) {
        return !(0, _has2['default'])(propTypes, prop);
      });
      if (unknownProps.length > 0) {
        return new TypeError(String(componentName) + ': unknown props found: ' + String(unknownProps.join(', ')));
      }
      return null;
    }

    return forbidUnknownProps;
  }())));
}
module.exports = exports['default'];
//# sourceMappingURL=index.js.map

/***/ }),

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
/* harmony import */ var _src_components_ViewerPageContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../src/components/ViewerPageContainer */ "./src/components/ViewerPageContainer.js");
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

/***/ "./src/components/CertificateVerifyBlock/CertificateVerifyBlock.js":
/*!*************************************************************************!*\
  !*** ./src/components/CertificateVerifyBlock/CertificateVerifyBlock.js ***!
  \*************************************************************************/
/*! exports provided: getIdentityVerificationText, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIdentityVerificationText", function() { return getIdentityVerificationText; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _DetailedCertificateVerifyBlock__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DetailedCertificateVerifyBlock */ "./src/components/CertificateVerifyBlock/DetailedCertificateVerifyBlock.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants */ "./src/components/CertificateVerifyBlock/constants.js");
/* harmony import */ var _certificateVerifyBlock_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./certificateVerifyBlock.scss */ "./src/components/CertificateVerifyBlock/certificateVerifyBlock.scss");
/* harmony import */ var _certificateVerifyBlock_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_certificateVerifyBlock_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ViewerPageImages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ViewerPageImages */ "./src/components/ViewerPageImages.js");

var _jsxFileName = "/home/ajl/development/ssi/academic-creds/convergence-credentials.github.io/src/components/CertificateVerifyBlock/CertificateVerifyBlock.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







var statusSummary = function statusSummary(_ref) {
  var verifying = _ref.verifying,
      hashStatus = _ref.hashStatus,
      issuedStatus = _ref.issuedStatus,
      notRevokedStatus = _ref.notRevokedStatus,
      issuerIdentityStatus = _ref.issuerIdentityStatus;
  if (verifying) return _constants__WEBPACK_IMPORTED_MODULE_5__["LOG_LEVEL"].VERIFYING;
  if (!verifying && hashStatus.verified && issuedStatus.verified && notRevokedStatus.verified && issuerIdentityStatus.verified) return _constants__WEBPACK_IMPORTED_MODULE_5__["LOG_LEVEL"].VALID;
  if (!verifying && hashStatus.verified && issuedStatus.verified && notRevokedStatus.verified && !issuerIdentityStatus.verified) return _constants__WEBPACK_IMPORTED_MODULE_5__["LOG_LEVEL"].WARNING;
  return _constants__WEBPACK_IMPORTED_MODULE_5__["LOG_LEVEL"].INVALID;
};

var renderIcon = function renderIcon(status) {
  var icon;

  switch (status) {
    case _constants__WEBPACK_IMPORTED_MODULE_5__["LOG_LEVEL"].CONNECTING:
    case _constants__WEBPACK_IMPORTED_MODULE_5__["LOG_LEVEL"].VERIFYING:
      icon = __jsx("i", {
        id: "verify-spinner",
        className: "fa fa-spinner fa-spin fa-2x",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      });
      break;

    case _constants__WEBPACK_IMPORTED_MODULE_5__["LOG_LEVEL"].VALID:
      icon = _ViewerPageImages__WEBPACK_IMPORTED_MODULE_7__["default"].checkCircle();
      break;

    case _constants__WEBPACK_IMPORTED_MODULE_5__["LOG_LEVEL"].WARNING:
      icon = __jsx("i", {
        id: "verify-warning",
        className: "fas fa-exclamation-triangle fa-2x",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      });
      break;

    default:
      icon = __jsx("i", {
        id: "verify-invalid",
        className: "fas fa-times-circle fa-2x",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      });
  }

  return __jsx("div", {
    className: "d-flex justify-content-center align-items-center ".concat(_certificateVerifyBlock_scss__WEBPACK_IMPORTED_MODULE_6___default.a["verified-icon"]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, icon);
};

var getIdentityVerificationText = function getIdentityVerificationText(identityStatus) {
  if (Object(lodash__WEBPACK_IMPORTED_MODULE_3__["some"])(identityStatus, function (_ref2) {
    var registry = _ref2.registry;
    return !!registry;
  })) {
    return "Accredited by SSG";
  } // note filter Boolean is to remove empty values


  var dnsNames = Object(lodash__WEBPACK_IMPORTED_MODULE_3__["sortBy"])(identityStatus, ["dns"]).map(function (_ref3) {
    var dns = _ref3.dns;
    return dns ? dns.toUpperCase() : null;
  }).filter(Boolean);
  return "Issued by ".concat(dnsNames.length > 0 ? dnsNames[0] : "Unknown");
};

var renderText = function renderText(status, props) {
  var text;

  switch (status) {
    case _constants__WEBPACK_IMPORTED_MODULE_5__["LOG_LEVEL"].CONNECTING:
      text = "Connecting ...";
      break;

    case _constants__WEBPACK_IMPORTED_MODULE_5__["LOG_LEVEL"].VERIFYING:
      text = "Verifying Certificate ...";
      break;

    case _constants__WEBPACK_IMPORTED_MODULE_5__["LOG_LEVEL"].VALID:
      {
        var identity = Object(lodash__WEBPACK_IMPORTED_MODULE_3__["get"])(props, "issuerIdentityStatus.identities", []);
        text = getIdentityVerificationText(identity);
        break;
      }

    case _constants__WEBPACK_IMPORTED_MODULE_5__["LOG_LEVEL"].WARNING:
      text = "Institution identity not verified";
      break;

    default:
      text = "Invalid Certificate";
  }

  return __jsx("div", {
    className: _certificateVerifyBlock_scss__WEBPACK_IMPORTED_MODULE_6___default.a["verification-text"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, text);
};

var SimpleVerifyBlock = function SimpleVerifyBlock(props) {
  var status = statusSummary(props);
  var renderedIcon = renderIcon(status);
  var renderedText = renderText(status, props);
  var stateStyle;

  switch (status) {
    case _constants__WEBPACK_IMPORTED_MODULE_5__["LOG_LEVEL"].VALID:
      stateStyle = "valid";
      break;

    case _constants__WEBPACK_IMPORTED_MODULE_5__["LOG_LEVEL"].WARNING:
      stateStyle = "warning";
      break;

    case _constants__WEBPACK_IMPORTED_MODULE_5__["LOG_LEVEL"].INVALID:
    default:
      stateStyle = "invalid";
  }

  return __jsx("div", {
    className: "p-2 pointer ".concat(_certificateVerifyBlock_scss__WEBPACK_IMPORTED_MODULE_6___default.a["simple-verify-block"], " ").concat(_certificateVerifyBlock_scss__WEBPACK_IMPORTED_MODULE_6___default.a[stateStyle], " ").concat(props.detailedVerifyVisible ? _certificateVerifyBlock_scss__WEBPACK_IMPORTED_MODULE_6___default.a.active : ""),
    onClick: props.toggleDetailedView,
    id: "certificate-status",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, __jsx("div", {
    className: "row",
    style: {
      flexWrap: "inherit"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, renderedIcon, renderedText, __jsx("span", {
    // eslint-disable-next-line prettier/prettier
    className: "d-flex justify-content-center align-items-center ".concat(_certificateVerifyBlock_scss__WEBPACK_IMPORTED_MODULE_6___default.a.arrow),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }, _ViewerPageImages__WEBPACK_IMPORTED_MODULE_7__["default"].arrow())));
};

var CertificateVerifyBlock = function CertificateVerifyBlock(props) {
  var status = statusSummary(props);
  return __jsx("div", {
    id: "certificate-verify-block",
    className: "align-items-start flex-nowrap ".concat(_certificateVerifyBlock_scss__WEBPACK_IMPORTED_MODULE_6___default.a["d-flex"], " ").concat(_certificateVerifyBlock_scss__WEBPACK_IMPORTED_MODULE_6___default.a.verifyBlocksContainer, " mb-md-0 mb-3"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }, __jsx(SimpleVerifyBlock, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  })), props.detailedVerifyVisible ? __jsx(_DetailedCertificateVerifyBlock__WEBPACK_IMPORTED_MODULE_4__["default"], {
    statusSummary: status,
    hashStatus: props.hashStatus,
    issuedStatus: props.issuedStatus,
    notRevokedStatus: props.notRevokedStatus,
    issuerIdentityStatus: props.issuerIdentityStatus,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }) : "");
};

CertificateVerifyBlock.propTypes = {
  verifyTriggered: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  verifying: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  hashStatus: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  issuedStatus: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  notRevokedStatus: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  issuerIdentityStatus: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  toggleDetailedView: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  detailedVerifyVisible: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool
};
SimpleVerifyBlock.propTypes = CertificateVerifyBlock.propTypes;
/* harmony default export */ __webpack_exports__["default"] = (CertificateVerifyBlock);

/***/ }),

/***/ "./src/components/CertificateVerifyBlock/DetailedCertificateVerifyBlock.js":
/*!*********************************************************************************!*\
  !*** ./src/components/CertificateVerifyBlock/DetailedCertificateVerifyBlock.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _detailedCertificateBlock_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detailedCertificateBlock.scss */ "./src/components/CertificateVerifyBlock/detailedCertificateBlock.scss");
/* harmony import */ var _detailedCertificateBlock_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_detailedCertificateBlock_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ "./src/components/CertificateVerifyBlock/constants.js");
var _jsxFileName = "/home/ajl/development/ssi/academic-creds/convergence-credentials.github.io/src/components/CertificateVerifyBlock/DetailedCertificateVerifyBlock.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var SuccessIcon = function SuccessIcon() {
  return __jsx("i", {
    className: "fas fa-check text-success mr-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  });
};

var FailureIcon = function FailureIcon() {
  return __jsx("i", {
    className: "fas fa-times-circle text-danger mr-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  });
};

var WarningIcon = function WarningIcon() {
  return __jsx("i", {
    className: "fas fa-question text-warning mr-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  });
};

var CheckStatusRow = function CheckStatusRow(_ref) {
  var message = _ref.message,
      icon = _ref.icon;
  return __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx("div", {
    className: "col-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, icon), __jsx("div", {
    className: "col-10",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, message)));
};

var renderFailure = function renderFailure(check) {
  return __jsx(CheckStatusRow, {
    message: check.failure,
    icon: check.failureStatusIcon(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  });
};

var renderSuccess = function renderSuccess(check) {
  return __jsx(CheckStatusRow, {
    message: check.success,
    icon: SuccessIcon(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  });
};

var renderStatus = function renderStatus(props, type) {
  var typeVerified = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var isVerified = props[type.id].verified;
  if (isVerified !== typeVerified) return "";
  return isVerified ? renderSuccess(type) : renderFailure(type);
};

var CHECKS = {
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

var renderVerifiedStatuses = function renderVerifiedStatuses(props) {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, renderStatus(props, CHECKS.HASH), renderStatus(props, CHECKS.ISSUED), renderStatus(props, CHECKS.ISSUER_IDENTITY), renderStatus(props, CHECKS.NOT_REVOKED));
};

var renderUnverifiedStatuses = function renderUnverifiedStatuses(props) {
  var show = !props.hashStatus.verified || !props.issuedStatus.verified || !props.issuerIdentityStatus.verified || !props.notRevokedStatus.verified;
  return show ? __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, renderStatus(props, CHECKS.HASH, false), renderStatus(props, CHECKS.ISSUED, false), renderStatus(props, CHECKS.ISSUER_IDENTITY, false), renderStatus(props, CHECKS.NOT_REVOKED, false), __jsx("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  })) : "";
};

var CertificateVerifyBlock = function CertificateVerifyBlock(props) {
  var borderColor;

  switch (props.statusSummary) {
    case _constants__WEBPACK_IMPORTED_MODULE_3__["LOG_LEVEL"].VALID:
      borderColor = "valid-border-color";
      break;

    case _constants__WEBPACK_IMPORTED_MODULE_3__["LOG_LEVEL"].WARNING:
      borderColor = "warning-border-color";
      break;

    case _constants__WEBPACK_IMPORTED_MODULE_3__["LOG_LEVEL"].INVALID:
    default:
      borderColor = "invalid-border-color";
  }

  return __jsx("div", {
    className: "".concat(_detailedCertificateBlock_scss__WEBPACK_IMPORTED_MODULE_2___default.a["detailed-certificate-block"], " ").concat(_detailedCertificateBlock_scss__WEBPACK_IMPORTED_MODULE_2___default.a[borderColor], " bg-white p-3"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, __jsx("div", {
    className: "mb-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }, __jsx("h5", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, "Details")), renderUnverifiedStatuses(props), renderVerifiedStatuses(props));
};

CertificateVerifyBlock.propTypes = {
  statusSummary: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  hashStatus: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  issuedStatus: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  notRevokedStatus: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  issuerIdentityStatus: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  detailedVerifyVisible: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
CheckStatusRow.propTypes = {
  message: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  icon: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.element
};
renderUnverifiedStatuses.propTypes = CertificateVerifyBlock.propTypes;
/* harmony default export */ __webpack_exports__["default"] = (CertificateVerifyBlock);

/***/ }),

/***/ "./src/components/CertificateVerifyBlock/constants.js":
/*!************************************************************!*\
  !*** ./src/components/CertificateVerifyBlock/constants.js ***!
  \************************************************************/
/*! exports provided: LOG_LEVEL, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_LEVEL", function() { return LOG_LEVEL; });
var LOG_LEVEL = {
  CONNECTING: "CONNECTING",
  VERIFYING: "VERIFYING",
  VALID: "VALID",
  INVALID: "INVALID",
  WARNING: "WARNING"
};
/* harmony default export */ __webpack_exports__["default"] = ({
  LOG_LEVEL: LOG_LEVEL
});

/***/ }),

/***/ "./src/components/CertificateVerifyBlock/index.js":
/*!********************************************************!*\
  !*** ./src/components/CertificateVerifyBlock/index.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CertificateVerifyBlock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CertificateVerifyBlock */ "./src/components/CertificateVerifyBlock/CertificateVerifyBlock.js");

/* harmony default export */ __webpack_exports__["default"] = (_CertificateVerifyBlock__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/components/CertificateViewer.js":
/*!*********************************************!*\
  !*** ./src/components/CertificateViewer.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next-server/dist/lib/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _govtechsg_open_attestation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @govtechsg/open-attestation */ "./node_modules/@govtechsg/open-attestation/dist/index.umd.js");
/* harmony import */ var _govtechsg_open_attestation__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_govtechsg_open_attestation__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _CertificateVerifyBlock__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CertificateVerifyBlock */ "./src/components/CertificateVerifyBlock/index.js");
/* harmony import */ var _certificateViewer_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./certificateViewer.scss */ "./src/components/certificateViewer.scss");
/* harmony import */ var _certificateViewer_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_certificateViewer_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Modal */ "./src/components/Modal/index.js");
/* harmony import */ var _ErrorBoundary__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ErrorBoundary */ "./src/components/ErrorBoundary.js");
/* harmony import */ var _DecentralisedTemplateRenderer_DecentralisedRenderer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./DecentralisedTemplateRenderer/DecentralisedRenderer */ "./src/components/DecentralisedTemplateRenderer/DecentralisedRenderer.js");
/* harmony import */ var _MultiTabs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./MultiTabs */ "./src/components/MultiTabs.js");
/* harmony import */ var _reducers_certificate__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../reducers/certificate */ "./src/reducers/certificate.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../config */ "./src/config/index.js");

var _jsxFileName = "/home/ajl/development/ssi/academic-creds/convergence-credentials.github.io/src/components/CertificateViewer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;












console.log(_certificateViewer_scss__WEBPACK_IMPORTED_MODULE_7___default.a);
var CertificateSharingForm = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(function () {
  return Promise.all(/*! import() */[__webpack_require__.e("styles"), __webpack_require__.e(1)]).then(__webpack_require__.bind(null, /*! ./CertificateSharing/CertificateSharingForm */ "./src/components/CertificateSharing/CertificateSharingForm.js"));
}, {
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ./CertificateSharing/CertificateSharingForm */ "./src/components/CertificateSharing/CertificateSharingForm.js")];
    },
    modules: ["./CertificateSharing/CertificateSharingForm"]
  }
});

var renderVerifyBlock = function renderVerifyBlock(props) {
  return __jsx(_CertificateVerifyBlock__WEBPACK_IMPORTED_MODULE_6__["default"], {
    verifyTriggered: props.verifyTriggered,
    verifying: props.verifying,
    hashStatus: props.hashStatus,
    issuedStatus: props.issuedStatus,
    notRevokedStatus: props.notRevokedStatus,
    issuerIdentityStatus: props.issuerIdentityStatus,
    toggleDetailedView: props.toggleDetailedView,
    detailedVerifyVisible: props.detailedVerifyVisible,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  });
};

var LoadingIframe = function LoadingIframe() {
  return __jsx("div", {
    id: _certificateViewer_scss__WEBPACK_IMPORTED_MODULE_7___default.a["renderer-loader"],
    className: "text-blue",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx("i", {
    className: "fas fa-spinner fa-pulse fa-3x",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }), __jsx("div", {
    className: "m-3",
    style: {
      fontSize: "1.5rem"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "Loading Renderer..."));
};

var linkedinAuth = function linkedinAuth() {
  var client_id = '86qkwozh6kkok8';
  var redirect = '';
  fetch("https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=".concat(client_id, "&redirect_uri=https%3A%2F%2Fdev.example.com%2Fauth%2Flinkedin%2Fcallback&state=fooobar&scope=r_liteprofile%20r_emailaddress%20w_member_social")).then(function (res, err) {
    return console.log(res, err);
  });
};

var renderHeaderBlock = function renderHeaderBlock(props) {
  var renderedVerifyBlock = renderVerifyBlock(props);
  return __jsx("div", {
    className: "container-fluid ".concat(_certificateViewer_scss__WEBPACK_IMPORTED_MODULE_7___default.a["pd-0"]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, __jsx("div", {
    className: "col-sm-7 col-md-8 col-xs-12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, renderedVerifyBlock), __jsx("div", {
    className: "row col-sm-5 col-md-4 col-xs-12 ".concat(_certificateViewer_scss__WEBPACK_IMPORTED_MODULE_7___default.a["pd-0"]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, __jsx("div", {
    className: "ml-auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, __jsx("div", {
    className: "ml-2",
    onClick: function onClick() {
      return linkedinAuth();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, __jsx("button", {
    id: "btn-linkedin",
    className: _certificateViewer_scss__WEBPACK_IMPORTED_MODULE_7___default.a["send-btn"],
    title: "Add to LinkedIn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, __jsx("i", {
    "class": "fab fa-linkedin-in",
    style: {
      fontSize: "1.5rem"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  })))), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }), __jsx("div", {
    className: "ml-2",
    onClick: function onClick() {
      return props.handleSharingToggle();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, __jsx("div", {
    id: "btn-email",
    className: _certificateViewer_scss__WEBPACK_IMPORTED_MODULE_7___default.a["send-btn"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, __jsx("i", {
    className: "fas fa-envelope",
    style: {
      fontSize: "1.5rem"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }))), __jsx("div", {
    className: "ml-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, __jsx("a", {
    download: "".concat(props.certificate.id, ".opencert"),
    target: "_black",
    href: "data:text/plain;,".concat(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(props.document, null, 2)),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, __jsx("button", {
    id: "btn-download",
    className: _certificateViewer_scss__WEBPACK_IMPORTED_MODULE_7___default.a["send-btn"],
    title: "Download",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, __jsx("i", {
    className: "fas fa-file-download",
    style: {
      fontSize: "1.5rem"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  })))))));
};

var CertificateViewer = function CertificateViewer(props) {
  var document = props.document,
      selectTemplateTab = props.selectTemplateTab;
  var certificate = Object(_govtechsg_open_attestation__WEBPACK_IMPORTED_MODULE_5__["getData"])(document); // console.log(certificate)

  console.log(certificate.$template.url);
  var renderedHeaderBlock = renderHeaderBlock(props);

  var validCertificateContent = __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, __jsx("div", {
    id: _certificateViewer_scss__WEBPACK_IMPORTED_MODULE_7___default.a["top-header-ui"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, __jsx("div", {
    className: _certificateViewer_scss__WEBPACK_IMPORTED_MODULE_7___default.a["header-container"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, renderedHeaderBlock)), __jsx(_MultiTabs__WEBPACK_IMPORTED_MODULE_11__["default"], {
    selectTemplateTab: selectTemplateTab,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, __jsx(LoadingIframe, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }), __jsx(_DecentralisedTemplateRenderer_DecentralisedRenderer__WEBPACK_IMPORTED_MODULE_10__["default"], {
    certificate: document,
    source: "".concat(typeof document.data.$template === "object" ? certificate.$template.url : _config__WEBPACK_IMPORTED_MODULE_13__["LEGACY_OPENCERTS_RENDERER"]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  })), __jsx(_Modal__WEBPACK_IMPORTED_MODULE_8__["default"], {
    show: props.showSharing,
    toggle: props.handleSharingToggle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }, __jsx(CertificateSharingForm, {
    emailSendingState: props.emailSendingState,
    handleSendCertificate: props.handleSendCertificate,
    handleSharingToggle: props.handleSharingToggle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  })));

  return __jsx(_ErrorBoundary__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }, validCertificateContent, " ");
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    selectTemplateTab: function selectTemplateTab(tabIndex) {
      return dispatch(Object(_reducers_certificate__WEBPACK_IMPORTED_MODULE_12__["selectTemplateTab"])(tabIndex));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(null, mapDispatchToProps)(CertificateViewer));
CertificateViewer.propTypes = {
  toggleDetailedView: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  detailedVerifyVisible: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  document: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  certificate: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  verifying: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  hashStatus: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  issuedStatus: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  notRevokedStatus: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  issuerIdentityStatus: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  showSharing: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  emailSendingState: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  handleSharingToggle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  handleSendCertificate: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  selectTemplateTab: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
};
renderVerifyBlock.propTypes = CertificateViewer.propTypes;
renderHeaderBlock.propTypes = CertificateViewer.propTypes;

/***/ }),

/***/ "./src/components/DecentralisedTemplateRenderer/DecentralisedRenderer.js":
/*!*******************************************************************************!*\
  !*** ./src/components/DecentralisedTemplateRenderer/DecentralisedRenderer.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var penpal_lib_connectToChild__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! penpal/lib/connectToChild */ "./node_modules/penpal/lib/connectToChild.js");
/* harmony import */ var penpal_lib_connectToChild__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(penpal_lib_connectToChild__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _govtechsg_open_attestation__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @govtechsg/open-attestation */ "./node_modules/@govtechsg/open-attestation/dist/index.umd.js");
/* harmony import */ var _govtechsg_open_attestation__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_govtechsg_open_attestation__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _reducers_certificate__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../reducers/certificate */ "./src/reducers/certificate.js");
/* harmony import */ var _Analytics__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../Analytics */ "./src/components/Analytics/index.js");
/* harmony import */ var _certificateViewer_scss__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../certificateViewer.scss */ "./src/components/certificateViewer.scss");
/* harmony import */ var _certificateViewer_scss__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_certificateViewer_scss__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _utils_certificate__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../utils/certificate */ "./src/utils/certificate.js");







var _jsxFileName = "/home/ajl/development/ssi/academic-creds/convergence-credentials.github.io/src/components/DecentralisedTemplateRenderer/DecentralisedRenderer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;











var DecentralisedRenderer =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(DecentralisedRenderer, _Component);

  function DecentralisedRenderer(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, DecentralisedRenderer);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(DecentralisedRenderer).call(this, props));
    _this.state = {
      childFrameConnection: null
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(DecentralisedRenderer, [{
    key: "selectTemplateTab",
    value: function () {
      var _selectTemplateTab = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(i) {
        var childFrameConnection, child;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                childFrameConnection = this.state.childFrameConnection;
                _context.next = 3;
                return childFrameConnection;

              case 3:
                child = _context.sent;
                _context.next = 6;
                return child.selectTemplateTab(i);

              case 6:
                this.props.selectTemplateTab(i);

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function selectTemplateTab(_x) {
        return _selectTemplateTab.apply(this, arguments);
      }

      return selectTemplateTab;
    }()
  }, {
    key: "updateHeight",
    value: function updateHeight(h) {
      this.iframe.height = h;
    }
  }, {
    key: "updateTemplates",
    value: function updateTemplates(templates) {
      if (!templates) return;
      this.props.registerTemplates(templates);
    }
  }, {
    key: "handleObfuscation",
    value: function handleObfuscation(field) {
      var updatedDocument = Object(_govtechsg_open_attestation__WEBPACK_IMPORTED_MODULE_11__["obfuscateDocument"])(this.props.document, field);
      this.props.updateObfuscatedCertificate(updatedDocument);
      var updatedCertificate = Object(_govtechsg_open_attestation__WEBPACK_IMPORTED_MODULE_11__["getData"])(updatedDocument);
      this.renderDocument(updatedCertificate);
    }
  }, {
    key: "renderDocument",
    value: function () {
      var _renderDocument = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(certificate) {
        var childFrameConnection, child;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                childFrameConnection = this.state.childFrameConnection;
                _context2.next = 3;
                return childFrameConnection;

              case 3:
                child = _context2.sent;
                _context2.next = 6;
                return child.renderDocument(certificate);

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function renderDocument(_x2) {
        return _renderDocument.apply(this, arguments);
      }

      return renderDocument;
    }() // Do not re-render component if only activeTab changes

  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      if (this.props.activeTab !== nextProps.activeTab && this.props.document === nextProps.document) {
        this.selectTemplateTab(nextProps.activeTab);
        return false;
      }

      return true;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var iframe = this.iframe;
      var updateHeight = this.updateHeight.bind(this);
      var updateTemplates = this.updateTemplates.bind(this);
      var handleObfuscation = this.handleObfuscation.bind(this);
      var childFrameConnection = penpal_lib_connectToChild__WEBPACK_IMPORTED_MODULE_10___default()({
        iframe: iframe,
        methods: {
          updateHeight: updateHeight,
          updateTemplates: updateTemplates,
          handleObfuscation: handleObfuscation
        }
      }).promise;
      this.setState({
        childFrameConnection: childFrameConnection
      });
      childFrameConnection.then(function (frame) {
        return frame.renderDocument(Object(_govtechsg_open_attestation__WEBPACK_IMPORTED_MODULE_11__["getData"])(_this2.props.certificate));
      });
      var certificateData = Object(_govtechsg_open_attestation__WEBPACK_IMPORTED_MODULE_11__["getData"])(this.props.certificate);
      Object(_Analytics__WEBPACK_IMPORTED_MODULE_14__["analyticsEvent"])(window, {
        category: "CERTIFICATE_VIEWED",
        action: Object(_utils_certificate__WEBPACK_IMPORTED_MODULE_16__["getDocumentIssuerStores"])(certificateData),
        label: Object(lodash__WEBPACK_IMPORTED_MODULE_12__["get"])(certificateData, "id")
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return __jsx("iframe", {
        title: "Decentralised Rendered Certificate",
        id: "iframe",
        className: _certificateViewer_scss__WEBPACK_IMPORTED_MODULE_15___default.a["decentralised-renderer"],
        ref: function ref(iframe) {
          _this3.iframe = iframe;
        },
        src: this.props.source,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      });
    }
  }]);

  return DecentralisedRenderer;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

var mapStateToProps = function mapStateToProps(store) {
  return {
    document: Object(_reducers_certificate__WEBPACK_IMPORTED_MODULE_13__["getCertificate"])(store),
    activeTab: Object(_reducers_certificate__WEBPACK_IMPORTED_MODULE_13__["getActiveTemplateTab"])(store)
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    updateObfuscatedCertificate: function updateObfuscatedCertificate(updatedDoc) {
      return dispatch(Object(_reducers_certificate__WEBPACK_IMPORTED_MODULE_13__["updateObfuscatedCertificate"])(updatedDoc));
    },
    registerTemplates: function registerTemplates(templates) {
      return dispatch(Object(_reducers_certificate__WEBPACK_IMPORTED_MODULE_13__["registerTemplates"])(templates));
    },
    selectTemplateTab: function selectTemplateTab(tabIndex) {
      return dispatch(Object(_reducers_certificate__WEBPACK_IMPORTED_MODULE_13__["selectTemplateTab"])(tabIndex));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(mapStateToProps, mapDispatchToProps)(DecentralisedRenderer));
DecentralisedRenderer.propTypes = {
  document: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object,
  certificate: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object,
  source: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
  activeTab: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number,
  registerTemplates: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func,
  selectTemplateTab: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func,
  updateObfuscatedCertificate: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func
};

/***/ }),

/***/ "./src/components/ErrorBoundary.js":
/*!*****************************************!*\
  !*** ./src/components/ErrorBoundary.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ErrorBoundary; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _error_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./error.scss */ "./src/components/error.scss");
/* harmony import */ var _error_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_error_scss__WEBPACK_IMPORTED_MODULE_7__);





var _jsxFileName = "/home/ajl/development/ssi/academic-creds/convergence-credentials.github.io/src/components/ErrorBoundary.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;




var ErrorBoundary =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(ErrorBoundary, _Component);

  function ErrorBoundary(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ErrorBoundary);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ErrorBoundary).call(this, props));
    _this.state = {
      hasError: false
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ErrorBoundary, [{
    key: "componentDidCatch",
    value: function componentDidCatch() {
      this.setState({
        hasError: true
      });
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.hasError) {
        return __jsx("div", {
          className: "".concat(_error_scss__WEBPACK_IMPORTED_MODULE_7___default.a.box),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 20
          },
          __self: this
        }, __jsx("div", {
          id: "error",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          },
          __self: this
        }, __jsx("div", {
          className: "".concat(_error_scss__WEBPACK_IMPORTED_MODULE_7___default.a.error),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 22
          },
          __self: this
        }, __jsx("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          },
          __self: this
        }), __jsx("img", {
          src: "/static/images/errorpage/error.png",
          style: {
            height: "15vh"
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 24
          },
          __self: this
        }), __jsx("h2", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          },
          __self: this
        }, "Something went wrong!"), __jsx("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 29
          },
          __self: this
        }, "There is an error with this certificate, please contact your issuing institution."), __jsx("a", {
          href: "/",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 33
          },
          __self: this
        }, "Go Back"))));
      }

      return this.props.children;
    }
  }]);

  return ErrorBoundary;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);


ErrorBoundary.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.node
};

/***/ }),

/***/ "./src/components/Modal/Modal.js":
/*!***************************************!*\
  !*** ./src/components/Modal/Modal.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modal_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal.scss */ "./src/components/Modal/modal.scss");
/* harmony import */ var _modal_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modal_scss__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/ajl/development/ssi/academic-creds/convergence-credentials.github.io/src/components/Modal/Modal.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var modal = function modal(_ref) {
  var show = _ref.show,
      toggle = _ref.toggle,
      children = _ref.children;
  return show ? __jsx("div", {
    className: _modal_scss__WEBPACK_IMPORTED_MODULE_2___default.a.modal,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("div", {
    className: "".concat(_modal_scss__WEBPACK_IMPORTED_MODULE_2___default.a["modal-content"], " p-3"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("div", {
    className: "".concat(_modal_scss__WEBPACK_IMPORTED_MODULE_2___default.a["modal-cross"], " pointer"),
    onClick: function onClick() {
      return toggle();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("i", {
    className: "fa fa-times text-muted",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  })), children), __jsx("div", {
    style: {
      position: "fixed",
      zIndex: 10
    },
    className: "modal-backdrop fade show",
    onClick: function onClick() {
      return toggle();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  })) : "";
};

/* harmony default export */ __webpack_exports__["default"] = (modal);
modal.propTypes = {
  show: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  toggle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};

/***/ }),

/***/ "./src/components/Modal/index.js":
/*!***************************************!*\
  !*** ./src/components/Modal/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Modal */ "./src/components/Modal/Modal.js");

/* harmony default export */ __webpack_exports__["default"] = (_Modal__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/components/MultiTabs.js":
/*!*************************************!*\
  !*** ./src/components/MultiTabs.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _certificateViewer_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./certificateViewer.scss */ "./src/components/certificateViewer.scss");
/* harmony import */ var _certificateViewer_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_certificateViewer_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _reducers_certificate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducers/certificate */ "./src/reducers/certificate.js");
/* harmony import */ var _UI_Drawer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./UI/Drawer */ "./src/components/UI/Drawer/index.js");
var _jsxFileName = "/home/ajl/development/ssi/academic-creds/convergence-credentials.github.io/src/components/MultiTabs.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;








var MultiTabs = function MultiTabs(_ref) {
  var resetData = _ref.resetData,
      activeTab = _ref.activeTab,
      templates = _ref.templates,
      selectTemplateTab = _ref.selectTemplateTab;
  return __jsx("div", {
    id: _certificateViewer_scss__WEBPACK_IMPORTED_MODULE_4___default.a["header-ui"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx("div", {
    className: "".concat(_certificateViewer_scss__WEBPACK_IMPORTED_MODULE_4___default.a["header-container"], " d-none d-lg-block d-xl-block"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("div", {
    id: "template-tabs-list",
    className: "nav nav-tabs",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, templates && templates.length > 0 ? templates.map(function (t, idx) {
    return __jsx("li", {
      key: idx,
      className: "nav-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, __jsx("a", {
      className: "".concat(_certificateViewer_scss__WEBPACK_IMPORTED_MODULE_4___default.a.tab, "\n                    ").concat(idx === activeTab ? _certificateViewer_scss__WEBPACK_IMPORTED_MODULE_4___default.a.active : ""),
      id: t.id,
      onClick: function onClick() {
        selectTemplateTab(idx);
      },
      role: "tab",
      "aria-controls": "home",
      "aria-selected": "true",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, t.label));
  }) : null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx("a", {
    id: "btn-view-another",
    onClick: function onClick() {
      return resetData();
    },
    className: _certificateViewer_scss__WEBPACK_IMPORTED_MODULE_4___default.a["view-another"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "View another")))), __jsx("div", {
    className: "d-lg-none d-xl-none",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, __jsx(_UI_Drawer__WEBPACK_IMPORTED_MODULE_6__["default"], {
    tabs: templates,
    activeIdx: activeTab,
    toggle: function toggle(idx) {
      return selectTemplateTab(idx);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  })));
};

var mapStateToProps = function mapStateToProps(store) {
  return {
    templates: Object(_reducers_certificate__WEBPACK_IMPORTED_MODULE_5__["getTemplates"])(store),
    activeTab: Object(_reducers_certificate__WEBPACK_IMPORTED_MODULE_5__["getActiveTemplateTab"])(store)
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    resetData: function resetData() {
      return dispatch(Object(_reducers_certificate__WEBPACK_IMPORTED_MODULE_5__["resetCertificateState"])());
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(MultiTabs));
MultiTabs.propTypes = {
  resetData: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  document: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  templates: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,
  selectTemplateTab: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  activeTab: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number
};

/***/ }),

/***/ "./src/components/UI/Drawer/drawer.js":
/*!********************************************!*\
  !*** ./src/components/UI/Drawer/drawer.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Drawer; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _drawer_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./drawer.scss */ "./src/components/UI/Drawer/drawer.scss");
/* harmony import */ var _drawer_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_drawer_scss__WEBPACK_IMPORTED_MODULE_7__);





var _jsxFileName = "/home/ajl/development/ssi/academic-creds/convergence-credentials.github.io/src/components/UI/Drawer/drawer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;




var Drawer =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Drawer, _Component);

  function Drawer(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Drawer);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Drawer).call(this, props));
    _this.state = {
      visible: false,
      showAbsHeader: false
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Drawer, [{
    key: "toggleDrawer",
    value: function toggleDrawer() {
      this.setState({
        visible: !this.state.visible
      });
    }
  }, {
    key: "createTabs",
    value: function createTabs(tabs) {
      var _this2 = this;

      var activeIdx = this.props.activeIdx;
      return tabs.map(function (tab, idx) {
        return __jsx("a", {
          href: "",
          className: "".concat(_drawer_scss__WEBPACK_IMPORTED_MODULE_7___default.a.tabs, " ").concat(activeIdx === idx ? _drawer_scss__WEBPACK_IMPORTED_MODULE_7___default.a.active : "", " "),
          key: idx,
          onClick: function onClick(e) {
            e.preventDefault();

            _this2.renderContent(idx);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          },
          __self: this
        }, tab.label);
      });
    }
  }, {
    key: "renderContent",
    value: function renderContent(idx) {
      this.props.toggle(idx);
      this.toggleDrawer();
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props = this.props,
          tabs = _this$props.tabs,
          children = _this$props.children;
      var _this$state = this.state,
          visible = _this$state.visible,
          showAbsHeader = _this$state.showAbsHeader;
      return __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, visible ? __jsx("div", {
        id: "mySidenav",
        className: _drawer_scss__WEBPACK_IMPORTED_MODULE_7___default.a.sidenav,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, __jsx("a", {
        href: "",
        className: _drawer_scss__WEBPACK_IMPORTED_MODULE_7___default.a.closebtn,
        onClick: function onClick(e) {
          e.preventDefault();

          _this3.toggleDrawer();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, "\xD7"), this.createTabs(tabs)) : null, __jsx("div", {
        className: "".concat(_drawer_scss__WEBPACK_IMPORTED_MODULE_7___default.a.gray, " ").concat(showAbsHeader ? "" : _drawer_scss__WEBPACK_IMPORTED_MODULE_7___default.a["mb-sidenav"], " container-fluid"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, __jsx("div", {
        className: _drawer_scss__WEBPACK_IMPORTED_MODULE_7___default.a.togglebtn,
        onClick: function onClick() {
          return _this3.toggleDrawer();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, "\u2630")), __jsx("div", {
        id: "main",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, children));
    }
  }]);

  return Drawer;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);


Drawer.propTypes = {
  toggle: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  children: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object,
  tabs: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.array,
  activeIdx: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number
};

/***/ }),

/***/ "./src/components/UI/Drawer/index.js":
/*!*******************************************!*\
  !*** ./src/components/UI/Drawer/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _drawer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drawer */ "./src/components/UI/Drawer/drawer.js");

/* harmony default export */ __webpack_exports__["default"] = (_drawer__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/components/ViewerPageContainer.js":
/*!***********************************************!*\
  !*** ./src/components/ViewerPageContainer.js ***!
  \***********************************************/
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






var _jsxFileName = "/home/ajl/development/ssi/academic-creds/convergence-credentials.github.io/src/components/ViewerPageContainer.js";
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

/***/ "./src/components/ViewerPageImages.js":
/*!********************************************!*\
  !*** ./src/components/ViewerPageImages.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CertificateVerifyBlock_certificateVerifyBlock_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CertificateVerifyBlock/certificateVerifyBlock.scss */ "./src/components/CertificateVerifyBlock/certificateVerifyBlock.scss");
/* harmony import */ var _CertificateVerifyBlock_certificateVerifyBlock_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_CertificateVerifyBlock_certificateVerifyBlock_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/ajl/development/ssi/academic-creds/convergence-credentials.github.io/src/components/ViewerPageImages.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* eslint react/display-name: 0 */


var viewerImages = {
  print: function print() {
    return __jsx("i", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }, __jsx("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "56.81",
      height: "50.77",
      viewBox: "0 0 56.81 50.77",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, __jsx("defs", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, __jsx("linearGradient", {
      id: "a",
      x1: "29.18",
      y1: "34.39",
      x2: "29.18",
      y2: "18.05",
      gradientUnits: "userSpaceOnUse",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, __jsx("stop", {
      offset: "0",
      stopColor: "#faa94e",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }), __jsx("stop", {
      offset: "1",
      stopColor: "#f47d4d",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }))), __jsx("title", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, "Print"), __jsx("path", {
      d: "M13.08,26.42V6.48a3.64,3.64,0,0,1,3.64-3.64H42.05a3.64,3.64,0,0,1,3.64,3.64V25M17.21,49.61H51.94A3.64,3.64,0,0,0,55.58,46V30.06a3.64,3.64,0,0,0-3.64-3.64H6.41a3.64,3.64,0,0,0-3.64,3.64V46a3.64,3.64,0,0,0,3.64,3.65H9.93M21.87,11.7H37.58m-15.71,7H37.58m5.58,15,6.81,0",
      transform: "translate(-0.77 -0.84)",
      fill: "#fff",
      strokeWidth: "4",
      stroke: "url(#a)",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    })));
  },
  send: function send() {
    return __jsx("i", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, __jsx("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "59.6",
      height: "44.2",
      viewBox: "0 0 59.6 44.2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, __jsx("defs", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, __jsx("linearGradient", {
      id: "a",
      x1: "29.8",
      y1: "17.28",
      x2: "29.8",
      y2: "31.55",
      gradientTransform: "matrix(1, 0, 0, -1, 0, 47)",
      gradientUnits: "userSpaceOnUse",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, __jsx("stop", {
      offset: "0",
      stopColor: "#faa94e",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }), __jsx("stop", {
      offset: "1",
      stopColor: "#f47d4d",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    })), __jsx("linearGradient", {
      id: "b",
      x1: "-569.09",
      y1: "98.35",
      x2: "-569.09",
      y2: "100.46",
      gradientTransform: "matrix(36.9, 0, 0, -14.68, 21029.48, 1503.59)",
      xlinkHref: "#a",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }), __jsx("linearGradient", {
      id: "c",
      x1: "30.56",
      y1: "55.8",
      x2: "30.56",
      y2: "61.4",
      gradientTransform: "matrix(0.99, 0.17, 0.19, -1, -21.61, 83.11)",
      xlinkHref: "#a",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }), __jsx("linearGradient", {
      id: "d",
      x1: "-456.93",
      y1: "-19.99",
      x2: "-456.93",
      y2: "-14.38",
      gradientTransform: "matrix(0.12, -0.99, -0.99, -0.11, 78.63, -424.23)",
      xlinkHref: "#a",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    })), __jsx("title", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: this
    }, "Email"), __jsx("path", {
      d: "M57.6,32.1V39a3.69,3.69,0,0,1-3.7,3.7H5.7A3.69,3.69,0,0,1,2,39V6.2A3.69,3.69,0,0,1,5.7,2.5H53.8a3.69,3.69,0,0,1,3.7,3.7V23.3",
      transform: "translate(0 -0.5)",
      fill: "#fff",
      strokeWidth: "4",
      stroke: "url(#a)",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: this
    }), __jsx("g", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95
      },
      __self: this
    }, __jsx("path", {
      d: "M6.8,9.5,29.4,27.4,52,9.5",
      transform: "translate(0 -0.5)",
      fill: "#fff",
      strokeWidth: "4",
      stroke: "url(#b)",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: this
    }), __jsx("line", {
      x1: "12.6",
      y1: "36.3",
      x2: "26.6",
      y2: "23.3",
      fill: "none",
      strokeWidth: "4",
      stroke: "url(#c)",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: this
    }), __jsx("line", {
      x1: "46.5",
      y1: "36.2",
      x2: "33.1",
      y2: "23.3",
      fill: "none",
      strokeWidth: "4",
      stroke: "url(#d)",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112
      },
      __self: this
    }))));
  },
  check: function check() {
    return __jsx("i", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126
      },
      __self: this
    }, __jsx("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "17.32",
      height: "11.83",
      viewBox: "0 0 17.32 11.83",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127
      },
      __self: this
    }, __jsx("title", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133
      },
      __self: this
    }, "check"), __jsx("path", {
      d: "M17.86,2.34,8.08,12.11a1,1,0,0,1-1.45,0L1.14,6.62A1,1,0,1,1,2.59,5.17L7.36,9.94,16.41.88a1,1,0,0,1,1.45,0A1,1,0,0,1,17.86,2.34Z",
      transform: "translate(-0.84 -0.58)",
      fill: "#fff",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134
      },
      __self: this
    })));
  },
  checkCircle: function checkCircle() {
    return __jsx("i", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143
      },
      __self: this
    }, __jsx("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "35",
      height: "35",
      viewBox: "0 0 35 35",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144
      },
      __self: this
    }, __jsx("title", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150
      },
      __self: this
    }, "check-circle"), __jsx("path", {
      id: _CertificateVerifyBlock_certificateVerifyBlock_scss__WEBPACK_IMPORTED_MODULE_1___default.a.circle,
      d: "M29.87,5.13a17.48,17.48,0,0,0-24.74,0,17.48,17.48,0,0,0,0,24.74,17.48,17.48,0,0,0,24.74,0,17.48,17.48,0,0,0,0-24.74Z",
      fill: "#fff",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151
      },
      __self: this
    }), __jsx("path", {
      id: _CertificateVerifyBlock_certificateVerifyBlock_scss__WEBPACK_IMPORTED_MODULE_1___default.a.check,
      d: "M25.86,13.34l-9.78,9.77a1,1,0,0,1-1.45,0L9.14,17.62a1,1,0,0,1,1.45-1.45l4.77,4.77,9.05-9.06a1,1,0,0,1,1.45,0A1,1,0,0,1,25.86,13.34Z",
      fill: "#09a63b",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156
      },
      __self: this
    })));
  },
  arrow: function arrow() {
    return __jsx("i", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166
      },
      __self: this
    }, __jsx("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "8.1",
      height: "14.36",
      viewBox: "0 0 8.1 14.36",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167
      },
      __self: this
    }, __jsx("title", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173
      },
      __self: this
    }, "arrow"), __jsx("polyline", {
      points: "0.74 0.68 6.74 7.13 0.74 13.68",
      fill: "none",
      stroke: "#fff",
      strokeWidth: "2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 174
      },
      __self: this
    })));
  }
};
/* harmony default export */ __webpack_exports__["default"] = (viewerImages);

/***/ })

})
//# sourceMappingURL=[id].js.6d0efd775c2ca7ce24e8.hot-update.js.map