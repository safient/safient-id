webpackHotUpdate("static\\development\\pages\\profile.js",{

/***/ "./components/Profile/Profile.Style.js":
/*!*********************************************!*\
  !*** ./components/Profile/Profile.Style.js ***!
  \*********************************************/
/*! exports provided: ProfileHeader, IconContainer, Form, FormBottom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileHeader", function() { return ProfileHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconContainer", function() { return IconContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return Form; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormBottom", function() { return FormBottom; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var ProfileHeader = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "ProfileStyle__ProfileHeader",
  componentId: "zosx8w-0"
})(["align-items:center;flex-direction:row;justify-content:center;margin:0 auto;flex-wrap:wrap;background:#fff;box-shadow:0px 16px 32px rgba(221,230,237,0.4);width:1280px;padding:44px;.profile-header{display:flex;justify-content:space-between;border-radius:5px;&__left{.profile-header__meta{display:flex;&-name{margin:6px 0 0 22px;}}}&__right{.btn-primary{font-size:16px;line-height:24px;background:#3861fb;border:1px solid #c7c8d9;box-sizing:border-box;border-radius:5px;color:#ffffff;}}}"]);
var IconContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "ProfileStyle__IconContainer",
  componentId: "zosx8w-1"
})(["width:1280px;margin:40px auto 0 auto;"]);
var Form = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "ProfileStyle__Form",
  componentId: "zosx8w-2"
})(["width:1280px;margin:24px auto;.form-group{background:#fff;box-shadow:0px 16px 32px rgba(221,230,237,0.4);border-radius:5px;margin:22px 0;padding:44px;&__fields{display:flex;}&__input{.input{border-radius:5px;width:350px;height:50px;margin-right:60px;margin-bottom:20px;&:not(:last-child){margin-bottom:30px;}&::-webkit-input-placeholder{color:grey;}}}}"]);
var FormBottom = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "ProfileStyle__FormBottom",
  componentId: "zosx8w-3"
})(["width:1280px;background:#fff;box-shadow:0px 16px 32px rgba(221,230,237,0.4);border-radius:5px;padding:44px;margin:24px auto;height:60px;display:flex;align-items:center;h2{font-weight:600;font-size:20px;margin:0;color:#555770;}"]);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/Profile/index.js":
/*!*************************************!*\
  !*** ./components/Profile/index.js ***!
  \*************************************/
/*! exports provided: ProfileHeader, IconContainer, Form, FormBottom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Profile_Style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Profile.Style */ "./components/Profile/Profile.Style.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProfileHeader", function() { return _Profile_Style__WEBPACK_IMPORTED_MODULE_0__["ProfileHeader"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IconContainer", function() { return _Profile_Style__WEBPACK_IMPORTED_MODULE_0__["IconContainer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return _Profile_Style__WEBPACK_IMPORTED_MODULE_0__["Form"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormBottom", function() { return _Profile_Style__WEBPACK_IMPORTED_MODULE_0__["FormBottom"]; });



;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Byb2ZpbGUvUHJvZmlsZS5TdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Byb2ZpbGUvaW5kZXguanMiXSwibmFtZXMiOlsiUHJvZmlsZUhlYWRlciIsInN0eWxlZCIsImRpdiIsIkljb25Db250YWluZXIiLCJGb3JtIiwiRm9ybUJvdHRvbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU8sSUFBTUEsYUFBYSxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLDRlQUFuQjtBQWlEQSxJQUFNQyxhQUFhLEdBQUdGLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsNkNBQW5CO0FBS0EsSUFBTUUsSUFBSSxHQUFHSCx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLHdXQUFWO0FBbUNBLElBQU1HLFVBQVUsR0FBR0oseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSwwT0FBaEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNGUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxwcm9maWxlLmpzLjIzZTNiNzRkZTA5YzkwNDY1MzA4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmV4cG9ydCBjb25zdCBQcm9maWxlSGVhZGVyID0gc3R5bGVkLmRpdmBcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgYm94LXNoYWRvdzogMHB4IDE2cHggMzJweCByZ2JhKDIyMSwgMjMwLCAyMzcsIDAuNCk7XHJcbiAgd2lkdGg6IDEyODBweDtcclxuICBwYWRkaW5nOiA0NHB4O1xyXG4gIC5wcm9maWxlLWhlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcblxyXG4gICAgLyogaW5hZ2UgYW5kIG5hbWUgKi9cclxuICAgICZfX2xlZnQge1xyXG4gICAgICAucHJvZmlsZS1oZWFkZXJfX21ldGEge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgICAgICYtbmFtZSB7XHJcbiAgICAgICAgICBtYXJnaW46IDZweCAwIDAgMjJweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKiBpbWFnZSBhbmQgYnV0dG9uICovXHJcblxyXG4gICAgJl9fcmlnaHQge1xyXG4gICAgICAuYnRuLXByaW1hcnkge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgICAgICAvKiBvciAxNTAlICovXHJcblxyXG4gICAgICAgIC8qIG5ldXRyYWwtbGlnaHQtMTAwICovXHJcbiAgICAgICAgYmFja2dyb3VuZDogIzM4NjFmYjtcclxuICAgICAgICAvKiBuZXV0cmFsLWRhcmstMTAwICovXHJcblxyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjN2M4ZDk7XHJcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgSWNvbkNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDEyODBweDtcclxuICBtYXJnaW46IDQwcHggYXV0byAwIGF1dG87XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgRm9ybSA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDEyODBweDtcclxuICBtYXJnaW46IDI0cHggYXV0bztcclxuXHJcbiAgLmZvcm0tZ3JvdXAge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGJveC1zaGFkb3c6IDBweCAxNnB4IDMycHggcmdiYSgyMjEsIDIzMCwgMjM3LCAwLjQpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgbWFyZ2luOiAyMnB4IDA7XHJcblxyXG4gICAgcGFkZGluZzogNDRweDtcclxuXHJcbiAgICAmX19maWVsZHMge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgfVxyXG5cclxuICAgICZfX2lucHV0IHtcclxuICAgICAgLmlucHV0IHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgd2lkdGg6IDM1MHB4O1xyXG4gICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDYwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICAmOm5vdCg6bGFzdC1jaGlsZCkge1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICAgICAgICAvKiBDaHJvbWUvT3BlcmEvU2FmYXJpICovXHJcbiAgICAgICAgICBjb2xvcjogZ3JleTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgRm9ybUJvdHRvbSA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDEyODBweDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGJveC1zaGFkb3c6IDBweCAxNnB4IDMycHggcmdiYSgyMjEsIDIzMCwgMjM3LCAwLjQpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBwYWRkaW5nOiA0NHB4O1xyXG4gIG1hcmdpbjogMjRweCBhdXRvO1xyXG4gIGhlaWdodDogNjBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgLyoganVzdGlmeS1jb250ZW50OiBjZW50ZXI7ICovXHJcblxyXG4gIGgyIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBjb2xvcjogIzU1NTc3MDtcclxuICB9XHJcbmA7XHJcbiIsImV4cG9ydCAqIGZyb20gJy4vUHJvZmlsZS5TdHlsZSc7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=