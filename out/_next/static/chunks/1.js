(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./components/userinfo.js":
/*!********************************!*\
  !*** ./components/userinfo.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_async__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-async */ "./node_modules/react-async/dist-web/index.js");

var _jsxFileName = "/home/littleboy/littleboy/components/userinfo.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



function fetchData() {
  var res;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function fetchData$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default()("https://api.github.com/users/littleboycoding"));

        case 2:
          res = _context.sent;
          return _context.abrupt("return", res.json());

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
}

function UserInfo(props) {
  var _useAsync = Object(react_async__WEBPACK_IMPORTED_MODULE_4__["useAsync"])(fetchData),
      data = _useAsync.data,
      error = _useAsync.error,
      isPending = _useAsync.isPending;

  if (isPending) return "กำลังโหลดข้อมูล";
  if (error) return "มีปัญหาในขณะกำลังโหลดข้อมูล";
  if (data) return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "3591460428",
    __self: this
  }, ".userContainer.jsx-3591460428{border-bottom:1px solid #aaa;padding:15px 50px 15px 50px;}.userSection.jsx-3591460428{float:left;width:calc(100% - 200px);}img.jsx-3591460428{margin-right:10px;width:150px !important;height:150px;object-fit:cover;border-radius:5px;}@media screen and (max-width:900px){.userSection.jsx-3591460428{width:100%;}img.jsx-3591460428{border-radius:50%;margin-right:0;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2xpdHRsZWJveS9saXR0bGVib3kvY29tcG9uZW50cy91c2VyaW5mby5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpQlcsQUFHNEMsQUFJbEIsQUFJTyxBQVFMLEFBR08sV0FkSyxBQVl6QixPQVJ1QixBQVdOLFdBbkJXLElBb0I1QixHQWZGLEtBSWUsYUFDSSxHQVRuQixjQVVvQixrQkFDcEIiLCJmaWxlIjoiL2hvbWUvbGl0dGxlYm95L2xpdHRsZWJveS9jb21wb25lbnRzL3VzZXJpbmZvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZldGNoIGZyb20gXCJpc29tb3JwaGljLXVuZmV0Y2hcIjtcbmltcG9ydCB7IHVzZUFzeW5jIH0gZnJvbSBcInJlYWN0LWFzeW5jXCI7XG5cbmFzeW5jIGZ1bmN0aW9uIGZldGNoRGF0YSgpIHtcbiAgLy9GZXRjaCBHaXRIdWIgdXNlciBpbmZvIGFwaVxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvbGl0dGxlYm95Y29kaW5nXCIpO1xuICByZXR1cm4gcmVzLmpzb24oKTtcbn1cblxuZnVuY3Rpb24gVXNlckluZm8ocHJvcHMpIHtcbiAgY29uc3QgeyBkYXRhLCBlcnJvciwgaXNQZW5kaW5nIH0gPSB1c2VBc3luYyhmZXRjaERhdGEpO1xuICBpZiAoaXNQZW5kaW5nKSByZXR1cm4gXCLguIHguLPguKXguLHguIfguYLguKvguKXguJTguILguYnguK3guKHguLnguKVcIjtcbiAgaWYgKGVycm9yKSByZXR1cm4gXCLguKHguLXguJvguLHguI3guKvguLLguYPguJnguILguJPguLDguIHguLPguKXguLHguIfguYLguKvguKXguJTguILguYnguK3guKHguLnguKVcIjtcbiAgaWYgKGRhdGEpXG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAge2BcbiAgICAgICAgICAgIC51c2VyQ29udGFpbmVyIHtcbiAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNhYWE7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDE1cHggNTBweCAxNXB4IDUwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAudXNlclNlY3Rpb24ge1xuICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDIwMHB4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgICAgICAgd2lkdGg6IDE1MHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgIGhlaWdodDogMTUwcHg7XG4gICAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xuICAgICAgICAgICAgICAudXNlclNlY3Rpb24ge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlckNvbnRhaW5lclwiPlxuICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwidXNlclNlY3Rpb25cIiBzcmM9e2RhdGEuYXZhdGFyX3VybH0gLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXJTZWN0aW9uXCI+XG4gICAgICAgICAgICA8aDIgc3R5bGU9e3sgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIiwgbWFyZ2luQm90dG9tOiBcIjVweFwiIH19PlxuICAgICAgICAgICAgICB7ZGF0YS5uYW1lfVxuICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgIHtcIiBAXCJ9XG4gICAgICAgICAgICA8c3Bhbj57ZGF0YS5sb2dpbn08L3NwYW4+XG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vbGl0dGxlYm95Y29kaW5nXCI+R2l0SHViPC9hPntcIiBcIn1cbiAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vbGl0dGxlYm95Y29kaW5nXCI+RmFjZWJvb2s8L2E+XG4gICAgICAgICAgICA8cD57ZGF0YS5iaW99PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxiciBzdHlsZT17eyBjbGVhcjogXCJib3RoXCIgfX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8Lz5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBVc2VySW5mbztcbiJdfQ== */\n/*@ sourceURL=/home/littleboy/littleboy/components/userinfo.js */"), __jsx("div", {
    className: "jsx-3591460428" + " " + "userContainer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx("img", {
    src: data.avatar_url,
    className: "jsx-3591460428" + " " + "userSection",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-3591460428" + " " + "userSection",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, __jsx("h2", {
    style: {
      display: "inline-block",
      marginBottom: "5px"
    },
    className: "jsx-3591460428",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, data.name), " @", __jsx("span", {
    className: "jsx-3591460428",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, data.login), __jsx("br", {
    className: "jsx-3591460428",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }), __jsx("a", {
    href: "https://github.com/littleboycoding",
    className: "jsx-3591460428",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, "GitHub"), " ", __jsx("a", {
    href: "https://www.facebook.com/littleboycoding",
    className: "jsx-3591460428",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, "Facebook"), __jsx("p", {
    className: "jsx-3591460428",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, data.bio)), __jsx("br", {
    style: {
      clear: "both"
    },
    className: "jsx-3591460428",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (UserInfo);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/regenerator/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/regenerator/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/next/dist/build/polyfills/fetch/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/next/dist/build/polyfills/fetch/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* globals self */var fetch=self.fetch.bind(self);module.exports=fetch;module.exports.default=module.exports;

/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!*********************************************************************************************************!*\
  !*** delegated ./node_modules/prop-types/checkPropTypes.js from dll-reference dll_ef0ff7c60362f24a921f ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_ef0ff7c60362f24a921f */ "dll-reference dll_ef0ff7c60362f24a921f"))("./node_modules/prop-types/checkPropTypes.js");

/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*******************************************************************************************************************!*\
  !*** delegated ./node_modules/prop-types/lib/ReactPropTypesSecret.js from dll-reference dll_ef0ff7c60362f24a921f ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_ef0ff7c60362f24a921f */ "dll-reference dll_ef0ff7c60362f24a921f"))("./node_modules/prop-types/lib/ReactPropTypesSecret.js");

/***/ }),

/***/ "./node_modules/react-async/dist-web/index.js":
/*!****************************************************!*\
  !*** ./node_modules/react-async/dist-web/index.js ***!
  \****************************************************/
/*! exports provided: default, ActionTypes, Async, FetchError, IfFulfilled, IfInitial, IfPending, IfRejected, IfSettled, StatusTypes, createInstance, dispatchMiddleware, globalScope, init, neverSettle, reducer, useAsync, useFetch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionTypes", function() { return ActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Async", function() { return Async$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchError", function() { return FetchError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IfFulfilled", function() { return IfFulfilled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IfInitial", function() { return IfInitial; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IfPending", function() { return IfPending; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IfRejected", function() { return IfRejected; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IfSettled", function() { return IfSettled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusTypes", function() { return StatusTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createInstance", function() { return createInstance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dispatchMiddleware", function() { return dispatchMiddleware; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "globalScope", function() { return globalScope; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "neverSettle", function() { return neverSettle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAsync", function() { return useAsync$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useFetch", function() { return useFetch; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


/* istanbul ignore file */
/**
 * Universal global scope object. In the browser this is `self`, in Node.js and React Native it's `global`.
 * This file is excluded from coverage reporting because these globals are environment-specific so we can't test them all.
 */
const globalScope = (() => {
    if (typeof self === "object" && self.self === self)
        return self;
    if (typeof global === "object" && global.global === global)
        return global;
    if (typeof global === "object" && global.GLOBAL === global)
        return global;
    return {}; // fallback that relies on imported modules to be singletons
})();
/**
 * Globally available object used to connect the DevTools to all React Async instances.
 */
globalScope.__REACT_ASYNC__ = globalScope.__REACT_ASYNC__ || {};
const noop = () => { };
class MockAbortController {
    constructor() {
        this.abort = noop;
        this.signal = {};
    }
}

let PropTypes;
try {
    PropTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
}
catch (e) { }
const childrenFn = PropTypes && PropTypes.oneOfType([PropTypes.node, PropTypes.func]);
const stateObject = PropTypes &&
    PropTypes.shape({
        initialValue: PropTypes.any,
        data: PropTypes.any,
        error: PropTypes.instanceOf(Error),
        value: PropTypes.any,
        startedAt: PropTypes.instanceOf(Date),
        finishedAt: PropTypes.instanceOf(Date),
        status: PropTypes.oneOf(["initial", "pending", "fulfilled", "rejected"]),
        isInitial: PropTypes.bool,
        isPending: PropTypes.bool,
        isLoading: PropTypes.bool,
        isFulfilled: PropTypes.bool,
        isResolved: PropTypes.bool,
        isRejected: PropTypes.bool,
        isSettled: PropTypes.bool,
        counter: PropTypes.number,
        promise: PropTypes.instanceOf(Promise),
        run: PropTypes.func,
        reload: PropTypes.func,
        cancel: PropTypes.func,
        setData: PropTypes.func,
        setError: PropTypes.func,
    });
var propTypes = PropTypes && {
    Async: {
        children: childrenFn,
        promise: PropTypes.instanceOf(Promise),
        promiseFn: PropTypes.func,
        deferFn: PropTypes.func,
        watch: PropTypes.any,
        watchFn: PropTypes.func,
        initialValue: PropTypes.any,
        onResolve: PropTypes.func,
        onReject: PropTypes.func,
        reducer: PropTypes.func,
        dispatcher: PropTypes.func,
        debugLabel: PropTypes.string,
        suspense: PropTypes.bool,
    },
    Initial: {
        children: childrenFn,
        state: stateObject.isRequired,
        persist: PropTypes.bool,
    },
    Pending: {
        children: childrenFn,
        state: stateObject.isRequired,
        initial: PropTypes.bool,
    },
    Fulfilled: {
        children: childrenFn,
        state: stateObject.isRequired,
        persist: PropTypes.bool,
    },
    Rejected: {
        children: childrenFn,
        state: stateObject.isRequired,
        persist: PropTypes.bool,
    },
    Settled: {
        children: childrenFn,
        state: stateObject.isRequired,
        persist: PropTypes.bool,
    },
};

const renderFn = (children, ...args) => {
    if (typeof children === "function") {
        const render = children;
        return render(...args);
    }
    return children;
};
/**
 * Renders only when no promise has started or completed yet.
 *
 * @prop {Function|Node} children Function (passing state) or React node
 * @prop {Object} state React Async state object
 * @prop {boolean} persist Show until we have data, even while pending (loading) or when an error occurred
 */
const IfInitial = ({ children, persist, state = {}, }) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, state.isInitial || (persist && !state.data) ? renderFn(children, state) : null);
/**
 * Renders only while pending (promise is loading).
 *
 * @prop {Function|Node} children Function (passing state) or React node
 * @prop {Object} state React Async state object
 * @prop {boolean} initial Show only on initial load (data is undefined)
 */
const IfPending = ({ children, initial, state = {}, }) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, state.isPending && (!initial || !state.value) ? renderFn(children, state) : null);
/**
 * Renders only when promise is resolved.
 *
 * @prop {Function|Node} children Function (passing data and state) or React node
 * @prop {Object} state React Async state object
 * @prop {boolean} persist Show old data while pending (promise is loading)
 */
const IfFulfilled = ({ children, persist, state = {}, }) => (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, state.isFulfilled || (persist && state.data) ? renderFn(children, state.data, state) : null));
/**
 * Renders only when promise is rejected.
 *
 * @prop {Function|Node} children Function (passing error and state) or React node
 * @prop {Object} state React Async state object
 * @prop {boolean} persist Show old error while pending (promise is loading)
 */
const IfRejected = ({ children, persist, state = {}, }) => (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, state.isRejected || (persist && state.error) ? renderFn(children, state.error, state) : null));
/**
 * Renders only when promise is fulfilled or rejected.
 *
 * @prop {Function|Node} children Function (passing state) or React node
 * @prop {Object} state React Async state object
 * @prop {boolean} persist Show old data or error while pending (promise is loading)
 */
const IfSettled = ({ children, persist, state = {}, }) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, state.isSettled || (persist && state.value) ? renderFn(children, state) : null);
if (propTypes) {
    IfInitial.propTypes = propTypes.Initial;
    IfPending.propTypes = propTypes.Pending;
    IfFulfilled.propTypes = propTypes.Fulfilled;
    IfRejected.propTypes = propTypes.Rejected;
    IfSettled.propTypes = propTypes.Settled;
}

var StatusTypes;
(function (StatusTypes) {
    StatusTypes["initial"] = "initial";
    StatusTypes["pending"] = "pending";
    StatusTypes["fulfilled"] = "fulfilled";
    StatusTypes["rejected"] = "rejected";
})(StatusTypes || (StatusTypes = {}));
const getInitialStatus = (value, promise) => {
    if (value instanceof Error)
        return StatusTypes.rejected;
    if (value !== undefined)
        return StatusTypes.fulfilled;
    if (promise)
        return StatusTypes.pending;
    return StatusTypes.initial;
};
const getIdleStatus = (value) => {
    if (value instanceof Error)
        return StatusTypes.rejected;
    if (value !== undefined)
        return StatusTypes.fulfilled;
    return StatusTypes.initial;
};
const getStatusProps = (status) => ({
    status,
    isInitial: status === StatusTypes.initial,
    isPending: status === StatusTypes.pending,
    isLoading: status === StatusTypes.pending,
    isFulfilled: status === StatusTypes.fulfilled,
    isResolved: status === StatusTypes.fulfilled,
    isRejected: status === StatusTypes.rejected,
    isSettled: status === StatusTypes.fulfilled || status === StatusTypes.rejected,
});

// This exists to make sure we don't hold any references to user-provided functions
// The way NeverSettle extends from Promise is complicated, but can't be done differently because Babel doesn't support
// extending built-in classes. See https://babeljs.io/docs/en/caveats/#classes
const NeverSettle = function () { };
/* istanbul ignore next */
if (Object.setPrototypeOf) {
    Object.setPrototypeOf(NeverSettle, Promise);
}
else {
    NeverSettle.__proto__ = Promise;
}
NeverSettle.prototype = Object.assign(Object.create(Promise.prototype), {
    finally() {
        return this;
    },
    catch() {
        return this;
    },
    then() {
        return this;
    },
});
const neverSettle = new NeverSettle();
var ActionTypes;
(function (ActionTypes) {
    ActionTypes["start"] = "start";
    ActionTypes["cancel"] = "cancel";
    ActionTypes["fulfill"] = "fulfill";
    ActionTypes["reject"] = "reject";
})(ActionTypes || (ActionTypes = {}));
const init = ({ initialValue, promise, promiseFn, }) => ({
    initialValue,
    data: initialValue instanceof Error ? undefined : initialValue,
    error: initialValue instanceof Error ? initialValue : undefined,
    value: initialValue,
    startedAt: promise || promiseFn ? new Date() : undefined,
    finishedAt: initialValue ? new Date() : undefined,
    ...getStatusProps(getInitialStatus(initialValue, promise || promiseFn)),
    counter: 0,
    promise: neverSettle,
});
const reducer = (state, action) => {
    switch (action.type) {
        case ActionTypes.start:
            return {
                ...state,
                startedAt: new Date(),
                finishedAt: undefined,
                ...getStatusProps(StatusTypes.pending),
                counter: action.meta.counter,
                promise: action.meta.promise,
            };
        case ActionTypes.cancel:
            return {
                ...state,
                startedAt: undefined,
                finishedAt: undefined,
                ...getStatusProps(getIdleStatus(state.error || state.data)),
                counter: action.meta.counter,
                promise: action.meta.promise,
            };
        case ActionTypes.fulfill:
            return {
                ...state,
                data: action.payload,
                value: action.payload,
                error: undefined,
                finishedAt: new Date(),
                ...getStatusProps(StatusTypes.fulfilled),
                promise: action.meta.promise,
            };
        case ActionTypes.reject:
            return {
                ...state,
                error: action.payload,
                value: action.payload,
                finishedAt: new Date(),
                ...getStatusProps(StatusTypes.rejected),
                promise: action.meta.promise,
            };
        default:
            return state;
    }
};
const dispatchMiddleware = (dispatch) => (action, ...args) => {
    dispatch(action, ...args);
    if (action.type === ActionTypes.start && typeof action.payload === "function") {
        action.payload();
    }
};

class Async extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
}
/**
 * createInstance allows you to create instances of Async that are bound to a specific promise.
 * A unique instance also uses its own React context for better nesting capability.
 */
function createInstance(defaultOptions = {}, displayName = "Async") {
    const { Consumer: UnguardedConsumer, Provider } = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(undefined);
    function Consumer({ children }) {
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(UnguardedConsumer, null, value => {
            if (!value) {
                throw new Error("this component should only be used within an associated <Async> component!");
            }
            return children(value);
        }));
    }
    class Async extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
        constructor(props) {
            super(props);
            this.mounted = false;
            this.counter = 0;
            this.args = [];
            this.promise = neverSettle;
            this.abortController = new MockAbortController();
            this.start = this.start.bind(this);
            this.load = this.load.bind(this);
            this.run = this.run.bind(this);
            this.cancel = this.cancel.bind(this);
            this.onResolve = this.onResolve.bind(this);
            this.onReject = this.onReject.bind(this);
            this.setData = this.setData.bind(this);
            this.setError = this.setError.bind(this);
            const promise = props.promise;
            const promiseFn = props.promiseFn || defaultOptions.promiseFn;
            const initialValue = props.initialValue || defaultOptions.initialValue;
            this.state = {
                ...init({ initialValue, promise, promiseFn }),
                cancel: this.cancel,
                run: this.run,
                reload: () => {
                    this.load();
                    this.run(...this.args);
                },
                setData: this.setData,
                setError: this.setError,
            };
            this.debugLabel = props.debugLabel || defaultOptions.debugLabel;
            const { devToolsDispatcher } = globalScope.__REACT_ASYNC__;
            const _reducer = props.reducer || defaultOptions.reducer;
            const _dispatcher = props.dispatcher || defaultOptions.dispatcher || devToolsDispatcher;
            const reducer$1 = _reducer
                ? (state, action) => _reducer(state, action, reducer)
                : reducer;
            const dispatch = dispatchMiddleware((action, callback) => {
                this.setState(state => reducer$1(state, action), callback);
            });
            this.dispatch = _dispatcher ? action => _dispatcher(action, dispatch, props) : dispatch;
        }
        componentDidMount() {
            this.mounted = true;
            if (this.props.promise || !this.state.initialValue) {
                this.load();
            }
        }
        componentDidUpdate(prevProps) {
            const { watch, watchFn = defaultOptions.watchFn, promise, promiseFn } = this.props;
            if (watch !== prevProps.watch) {
                if (this.counter)
                    this.cancel();
                return this.load();
            }
            if (watchFn &&
                watchFn({ ...defaultOptions, ...this.props }, { ...defaultOptions, ...prevProps })) {
                if (this.counter)
                    this.cancel();
                return this.load();
            }
            if (promise !== prevProps.promise) {
                if (this.counter)
                    this.cancel();
                if (promise)
                    return this.load();
            }
            if (promiseFn !== prevProps.promiseFn) {
                if (this.counter)
                    this.cancel();
                if (promiseFn)
                    return this.load();
            }
        }
        componentWillUnmount() {
            this.cancel();
            this.mounted = false;
        }
        getMeta(meta) {
            return {
                counter: this.counter,
                promise: this.promise,
                debugLabel: this.debugLabel,
                ...meta,
            };
        }
        start(promiseFn) {
            if ("AbortController" in globalScope) {
                this.abortController.abort();
                this.abortController = new globalScope.AbortController();
            }
            this.counter++;
            return (this.promise = new Promise((resolve, reject) => {
                if (!this.mounted)
                    return;
                const executor = () => promiseFn().then(resolve, reject);
                this.dispatch({ type: ActionTypes.start, payload: executor, meta: this.getMeta() });
            }));
        }
        load() {
            const promise = this.props.promise;
            const promiseFn = this.props.promiseFn || defaultOptions.promiseFn;
            if (promise) {
                this.start(() => promise)
                    .then(this.onResolve(this.counter))
                    .catch(this.onReject(this.counter));
            }
            else if (promiseFn) {
                const props = { ...defaultOptions, ...this.props };
                this.start(() => promiseFn(props, this.abortController))
                    .then(this.onResolve(this.counter))
                    .catch(this.onReject(this.counter));
            }
        }
        run(...args) {
            const deferFn = this.props.deferFn || defaultOptions.deferFn;
            if (deferFn) {
                this.args = args;
                const props = { ...defaultOptions, ...this.props };
                return this.start(() => deferFn(args, props, this.abortController)).then(this.onResolve(this.counter), this.onReject(this.counter));
            }
        }
        cancel() {
            const onCancel = this.props.onCancel || defaultOptions.onCancel;
            onCancel && onCancel();
            this.counter++;
            this.abortController.abort();
            this.mounted && this.dispatch({ type: ActionTypes.cancel, meta: this.getMeta() });
        }
        onResolve(counter) {
            return (data) => {
                if (this.counter === counter) {
                    const onResolve = this.props.onResolve || defaultOptions.onResolve;
                    this.setData(data, () => onResolve && onResolve(data));
                }
                return data;
            };
        }
        onReject(counter) {
            return (error) => {
                if (this.counter === counter) {
                    const onReject = this.props.onReject || defaultOptions.onReject;
                    this.setError(error, () => onReject && onReject(error));
                }
                return error;
            };
        }
        setData(data, callback) {
            this.mounted &&
                this.dispatch({ type: ActionTypes.fulfill, payload: data, meta: this.getMeta() }, callback);
            return data;
        }
        setError(error, callback) {
            this.mounted &&
                this.dispatch({ type: ActionTypes.reject, payload: error, error: true, meta: this.getMeta() }, callback);
            return error;
        }
        render() {
            const { children, suspense } = this.props;
            if (suspense && this.state.isPending && this.promise !== neverSettle) {
                // Rely on Suspense to handle the loading state
                throw this.promise;
            }
            if (typeof children === "function") {
                const render = children;
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Provider, { value: this.state }, render(this.state));
            }
            if (children !== undefined && children !== null) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Provider, { value: this.state }, children);
            }
            return null;
        }
    }
    if (propTypes)
        Async.propTypes = propTypes.Async;
    const AsyncInitial = props => (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Consumer, null, st => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IfInitial, Object.assign({}, props, { state: st }))));
    const AsyncPending = props => (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Consumer, null, st => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IfPending, Object.assign({}, props, { state: st }))));
    const AsyncFulfilled = props => (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Consumer, null, st => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IfFulfilled, Object.assign({}, props, { state: st }))));
    const AsyncRejected = props => (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Consumer, null, st => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IfRejected, Object.assign({}, props, { state: st }))));
    const AsyncSettled = props => (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Consumer, null, st => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IfSettled, Object.assign({}, props, { state: st }))));
    AsyncInitial.displayName = `${displayName}.Initial`;
    AsyncPending.displayName = `${displayName}.Pending`;
    AsyncFulfilled.displayName = `${displayName}.Fulfilled`;
    AsyncRejected.displayName = `${displayName}.Rejected`;
    AsyncSettled.displayName = `${displayName}.Settled`;
    return Object.assign(Async, {
        displayName: displayName,
        Initial: AsyncInitial,
        Pending: AsyncPending,
        Loading: AsyncPending,
        Fulfilled: AsyncFulfilled,
        Resolved: AsyncFulfilled,
        Rejected: AsyncRejected,
        Settled: AsyncSettled,
    });
}
var Async$1 = createInstance();

function useAsync(arg1, arg2) {
    const options = typeof arg1 === "function"
        ? {
            ...arg2,
            promiseFn: arg1,
        }
        : arg1;
    const counter = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(0);
    const isMounted = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(true);
    const lastArgs = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(undefined);
    const lastOptions = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(options);
    const lastPromise = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(neverSettle);
    const abortController = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(new MockAbortController());
    const { devToolsDispatcher } = globalScope.__REACT_ASYNC__;
    const { reducer: reducer$1, dispatcher = devToolsDispatcher } = options;
    const [state, _dispatch] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(reducer$1 ? (state, action) => reducer$1(state, action, reducer) : reducer, options, init);
    const dispatch = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(dispatcher
        ? action => dispatcher(action, dispatchMiddleware(_dispatch), lastOptions.current)
        : dispatchMiddleware(_dispatch), [dispatcher]);
    const { debugLabel } = options;
    const getMeta = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((meta) => ({
        counter: counter.current,
        promise: lastPromise.current,
        debugLabel,
        ...meta,
    }), [debugLabel]);
    const setData = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((data, callback = noop) => {
        if (isMounted.current) {
            dispatch({
                type: ActionTypes.fulfill,
                payload: data,
                meta: getMeta(),
            });
            callback();
        }
        return data;
    }, [dispatch, getMeta]);
    const setError = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((error, callback = noop) => {
        if (isMounted.current) {
            dispatch({
                type: ActionTypes.reject,
                payload: error,
                error: true,
                meta: getMeta(),
            });
            callback();
        }
        return error;
    }, [dispatch, getMeta]);
    const { onResolve, onReject } = options;
    const handleResolve = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(count => (data) => count === counter.current && setData(data, () => onResolve && onResolve(data)), [setData, onResolve]);
    const handleReject = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(count => (err) => count === counter.current && setError(err, () => onReject && onReject(err)), [setError, onReject]);
    const start = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(promiseFn => {
        if ("AbortController" in globalScope) {
            abortController.current.abort();
            abortController.current = new globalScope.AbortController();
        }
        counter.current++;
        return (lastPromise.current = new Promise((resolve, reject) => {
            if (!isMounted.current)
                return;
            const executor = () => promiseFn().then(resolve, reject);
            dispatch({
                type: ActionTypes.start,
                payload: executor,
                meta: getMeta(),
            });
        }));
    }, [dispatch, getMeta]);
    const { promise, promiseFn, initialValue } = options;
    const load = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
        const isPreInitialized = initialValue && counter.current === 0;
        if (promise) {
            start(() => promise)
                .then(handleResolve(counter.current))
                .catch(handleReject(counter.current));
        }
        else if (promiseFn && !isPreInitialized) {
            start(() => promiseFn(lastOptions.current, abortController.current))
                .then(handleResolve(counter.current))
                .catch(handleReject(counter.current));
        }
    }, [start, promise, promiseFn, initialValue, handleResolve, handleReject]);
    const { deferFn } = options;
    const run = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((...args) => {
        if (deferFn) {
            lastArgs.current = args;
            start(() => deferFn(args, lastOptions.current, abortController.current))
                .then(handleResolve(counter.current))
                .catch(handleReject(counter.current));
        }
    }, [start, deferFn, handleResolve, handleReject]);
    const reload = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
        lastArgs.current ? run(...lastArgs.current) : load();
    }, [run, load]);
    const { onCancel } = options;
    const cancel = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
        onCancel && onCancel();
        counter.current++;
        abortController.current.abort();
        isMounted.current &&
            dispatch({
                type: ActionTypes.cancel,
                meta: getMeta(),
            });
    }, [onCancel, dispatch, getMeta]);
    /* These effects should only be triggered on changes to specific props */
    /* eslint-disable react-hooks/exhaustive-deps */
    const { watch, watchFn } = options;
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
        if (watchFn && lastOptions.current && watchFn(options, lastOptions.current)) {
            lastOptions.current = options;
            load();
        }
    });
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
        lastOptions.current = options;
    }, [options]);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
        if (counter.current)
            cancel();
        if (promise || promiseFn)
            load();
    }, [promise, promiseFn, watch]);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => () => {
        isMounted.current = false;
    }, []);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => () => cancel(), []);
    /* eslint-enable react-hooks/exhaustive-deps */
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useDebugValue"])(state, ({ status }) => `[${counter.current}] ${status}`);
    if (options.suspense && state.isPending && lastPromise.current !== neverSettle) {
        // Rely on Suspense to handle the loading state
        throw lastPromise.current;
    }
    return Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => ({
        ...state,
        run,
        reload,
        cancel,
        setData,
        setError,
    }), [state, run, reload, cancel, setData, setError]);
}
class FetchError extends Error {
    constructor(response) {
        super(`${response.status} ${response.statusText}`);
        this.response = response;
        /* istanbul ignore next */
        if (Object.setPrototypeOf) {
            // Not available in IE 10, but can be polyfilled
            Object.setPrototypeOf(this, FetchError.prototype);
        }
    }
}
const parseResponse = (accept, json) => (res) => {
    if (!res.ok)
        return Promise.reject(new FetchError(res));
    if (typeof json === "boolean")
        return json ? res.json() : res;
    return accept === "application/json" ? res.json() : res;
};
function isEvent(e) {
    return typeof e === "object" && "preventDefault" in e;
}
/**
 *
 * @param {RequestInfo} resource
 * @param {RequestInit} init
 * @param {FetchOptions} options
 * @returns {AsyncState<T, FetchRun<T>>}
 */
function useAsyncFetch(resource, init, { defer, json, ...options } = {}) {
    const method = resource.method || (init && init.method);
    const headers = resource.headers || (init && init.headers) || {};
    const accept = headers["Accept"] || headers["accept"] || (headers.get && headers.get("accept"));
    const doFetch = (input, init) => globalScope.fetch(input, init).then(parseResponse(accept, json));
    const isDefer = typeof defer === "boolean" ? defer : ["POST", "PUT", "PATCH", "DELETE"].indexOf(method) !== -1;
    const fn = isDefer ? "deferFn" : "promiseFn";
    const identity = JSON.stringify({
        resource,
        init,
        isDefer,
    });
    const promiseFn = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((_, { signal }) => {
        return doFetch(resource, { signal, ...init });
    }, [identity] // eslint-disable-line react-hooks/exhaustive-deps
    );
    const deferFn = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function ([override], _, { signal }) {
        if (!override || isEvent(override)) {
            return doFetch(resource, { signal, ...init });
        }
        if (typeof override === "function") {
            const { resource: runResource, ...runInit } = override({ resource, signal, ...init });
            return doFetch(runResource || resource, { signal, ...runInit });
        }
        const { resource: runResource, ...runInit } = override;
        return doFetch(runResource || resource, { signal, ...init, ...runInit });
    }, [identity] // eslint-disable-line react-hooks/exhaustive-deps
    );
    const state = useAsync({
        ...options,
        [fn]: isDefer ? deferFn : promiseFn,
    });
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useDebugValue"])(state, ({ counter, status }) => `[${counter}] ${status}`);
    return state;
}
const unsupported = () => {
    throw new Error("useAsync requires React v16.8 or up. Upgrade your React version or use the <Async> component instead.");
};
var useAsync$1 = react__WEBPACK_IMPORTED_MODULE_0__["useEffect"] ? useAsync : unsupported;
const useFetch = react__WEBPACK_IMPORTED_MODULE_0__["useEffect"] ? useAsyncFetch : unsupported;

/* harmony default export */ __webpack_exports__["default"] = (Async$1);

//# sourceMappingURL=index.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.6
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;
    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;
          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}

// AsyncMode is deprecated along with isAsyncMode
var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;

var hasWarnedAboutDeprecatedIsAsyncMode = false;

// AsyncMode should be deprecated
function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }
  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ })

}]);
//# sourceMappingURL=1.js.map