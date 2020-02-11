webpackHotUpdate(2,{

/***/ "./components/container.js":
/*!*********************************!*\
  !*** ./components/container.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dist/next-server/lib/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _css_container_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/container.module.css */ "./css/container.module.css");
/* harmony import */ var _css_container_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_container_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/home/littleboy/littleboy/components/container.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;




var UserInfo = next_dynamic__WEBPACK_IMPORTED_MODULE_0___default()(function () {
  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ./userinfo */ "./components/userinfo.js"));
}, {
  loading: function loading() {
    return __jsx("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }, ". . .");
  },
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ./userinfo */ "./components/userinfo.js")];
    },
    modules: ["./userinfo"]
  }
});

function Container(props) {
  var year = new Date().getFullYear();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(props.title),
      title = _useState[0],
      setTitle = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    document.title = "".concat(title, " - Little Boy");
  });
  return __jsx("div", {
    className: _css_container_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx(UserInfo, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), __jsx("div", {
    className: _css_container_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.content,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, props.children), __jsx("div", {
    className: _css_container_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.footer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx("a", {
    target: "_blank",
    href: "https://en.wikipedia.org/wiki/Creative_Commons_license",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "Creative Common License"), " @".concat(year, " \uD83D\uDCDD")), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "Created with \u2665\uFE0F by Thanawat Yodnil")));
}

/* harmony default export */ __webpack_exports__["default"] = (Container);

/***/ })

})
//# sourceMappingURL=2.f991b9fff9ecbb653fdf.hot-update.js.map