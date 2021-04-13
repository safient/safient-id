webpackHotUpdate("static\\development\\pages\\profile.js",{

/***/ "./components/Profile/Profile.js":
/*!***************************************!*\
  !*** ./components/Profile/Profile.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _geist_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @geist-ui/react */ "./node_modules/@geist-ui/react/esm/index.js");
/* harmony import */ var _Profile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Profile */ "./components/Profile/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils */ "./utils/index.js");
var _this = undefined,
    _jsxFileName = "D:\\identity-managment\\components\\Profile\\Profile.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var MockItem = function MockItem() {
  return __jsx(_geist_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    shadow: true,
    style: {
      width: '100%',
      height: '50px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 10
    }
  });
};

_c = MockItem;

function Profile() {
  _s();

  // edit-btn if it's true, text inputs will be enabled
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      edit = _useState[0],
      setEdit = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      name = _useState2[0],
      setName = _useState2[1];

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_Profile__WEBPACK_IMPORTED_MODULE_2__["ProfileHeader"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "profile-header",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "profile-header__left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "profile-header__meta",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "profile-header__meta-image",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 15
    }
  }, __jsx(_geist_ui_react__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
    src: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    size: "large",
    isSquare: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "profile-header__meta-name",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 15
    }
  }, __jsx(_utils__WEBPACK_IMPORTED_MODULE_3__["TextSemi20"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 17
    }
  }, "Koushith"), __jsx(_geist_ui_react__WEBPACK_IMPORTED_MODULE_1__["Spacer"], {
    y: 0.2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 17
    }
  }), __jsx(_utils__WEBPACK_IMPORTED_MODULE_3__["TextMedium16"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 17
    }
  }, "0x337b2aF19e840E8...")))), __jsx("div", {
    className: "profile-header__right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 11
    }
  }, __jsx(_geist_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    auto: true,
    className: "btn btn-primary",
    onClick: function onClick(e) {
      return setEdit(true);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }
  }, ' ', "Edit Profile"))), __jsx(_Profile__WEBPACK_IMPORTED_MODULE_2__["IconContainer"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "icons-meta",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: "/assets/icons/location.svg",
    alt: "location",
    srcset: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "icons-meta__title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }
  }, __jsx(_utils__WEBPACK_IMPORTED_MODULE_3__["TextSemi"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 15
    }
  }, "Bangalore"))), __jsx("div", {
    className: "icons-meta",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: "/assets/icons/email.svg",
    alt: "email",
    srcset: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "icons-meta__title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }
  }, __jsx(_utils__WEBPACK_IMPORTED_MODULE_3__["TextSemi"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 15
    }
  }, "koushith@consensolabs.com"))))), __jsx(_Profile__WEBPACK_IMPORTED_MODULE_2__["Form"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }
  }, __jsx(_utils__WEBPACK_IMPORTED_MODULE_3__["HeadingSemi"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 9
    }
  }, "Basic"), __jsx("div", {
    className: "form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "form-group__fields",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "form-group__input",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 13
    }
  }, __jsx(_utils__WEBPACK_IMPORTED_MODULE_3__["TextSemi"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 15
    }
  }, "Name"), __jsx(_geist_ui_react__WEBPACK_IMPORTED_MODULE_1__["Spacer"], {
    y: 0.2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 15
    }
  }), __jsx(_geist_ui_react__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    readOnly: !edit,
    size: "small",
    placeholder: "John Doe",
    className: "form-group__input input",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 15
    }
  })), __jsx("div", {
    className: "form-group__input",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 13
    }
  }, __jsx(_utils__WEBPACK_IMPORTED_MODULE_3__["TextSemi"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 15
    }
  }, "Location"), __jsx(_geist_ui_react__WEBPACK_IMPORTED_MODULE_1__["Spacer"], {
    y: 0.2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 15
    }
  }), __jsx(_geist_ui_react__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    size: "small",
    placeholder: "John Doe",
    className: "form-group__input input",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 15
    }
  }))), __jsx("div", {
    className: "form-group__fields",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "form-group__input",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 13
    }
  }, __jsx(_utils__WEBPACK_IMPORTED_MODULE_3__["TextSemi"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 15
    }
  }, "Website"), __jsx(_geist_ui_react__WEBPACK_IMPORTED_MODULE_1__["Spacer"], {
    y: 0.2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 15
    }
  }), __jsx(_geist_ui_react__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    size: "small",
    placeholder: "John Doe",
    className: "form-group__input input",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 15
    }
  })), __jsx("div", {
    className: "form-group__input",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 13
    }
  }, __jsx(_utils__WEBPACK_IMPORTED_MODULE_3__["TextSemi"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 15
    }
  }, "DOB"), __jsx(_geist_ui_react__WEBPACK_IMPORTED_MODULE_1__["Spacer"], {
    y: 0.2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 15
    }
  }), __jsx(_geist_ui_react__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    type: "date",
    size: "small",
    placeholder: "John Doe",
    className: "form-group__input input",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 15
    }
  }))))), __jsx(_Profile__WEBPACK_IMPORTED_MODULE_2__["Form"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 7
    }
  }, __jsx(_utils__WEBPACK_IMPORTED_MODULE_3__["HeadingSemi"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 9
    }
  }, "Verified Accounts"), __jsx("div", {
    className: "form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "form-group__fields",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "form-group__input",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 13
    }
  }, __jsx(_utils__WEBPACK_IMPORTED_MODULE_3__["TextSemi"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 15
    }
  }, "GitHub"), __jsx(_geist_ui_react__WEBPACK_IMPORTED_MODULE_1__["Spacer"], {
    y: 0.2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 15
    }
  }), __jsx(_geist_ui_react__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    placeholder: "https://github/",
    className: "form-group__input input",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 15
    }
  })), __jsx("div", {
    className: "form-group__input",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 13
    }
  }, __jsx(_utils__WEBPACK_IMPORTED_MODULE_3__["TextSemi"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 15
    }
  }, "Twitter"), __jsx(_geist_ui_react__WEBPACK_IMPORTED_MODULE_1__["Spacer"], {
    y: 0.2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 15
    }
  }), __jsx(_geist_ui_react__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    size: "small",
    placeholder: "https://twitter.com/johndoe",
    className: "form-group__input input",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 15
    }
  }))))), __jsx(_Profile__WEBPACK_IMPORTED_MODULE_2__["Form"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 7
    }
  }, __jsx(_utils__WEBPACK_IMPORTED_MODULE_3__["HeadingSemi"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 9
    }
  }, "Contact"), __jsx("div", {
    className: "form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "form-group__fields",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "form-group__input",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 13
    }
  }, __jsx(_utils__WEBPACK_IMPORTED_MODULE_3__["TextSemi"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 15
    }
  }, "Email"), __jsx(_geist_ui_react__WEBPACK_IMPORTED_MODULE_1__["Spacer"], {
    y: 0.2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 15
    }
  }), __jsx(_geist_ui_react__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    type: "email",
    size: "small",
    placeholder: "Johndoe@domain.com",
    className: "form-group__input input",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 15
    }
  })), __jsx("div", {
    className: "form-group__input",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 13
    }
  }, __jsx(_utils__WEBPACK_IMPORTED_MODULE_3__["TextSemi"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 15
    }
  }, "Phone"), __jsx(_geist_ui_react__WEBPACK_IMPORTED_MODULE_1__["Spacer"], {
    y: 0.2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 15
    }
  }), __jsx(_geist_ui_react__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    size: "small",
    placeholder: "99 99 99 99 99",
    className: "form-group__input input",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 15
    }
  }))))), __jsx(_Profile__WEBPACK_IMPORTED_MODULE_2__["Form"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 7
    }
  }, __jsx(_utils__WEBPACK_IMPORTED_MODULE_3__["HeadingSemi"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 9
    }
  }, "Work"), __jsx("div", {
    className: "form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "form-group__fields",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "form-group__input",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 13
    }
  }, __jsx(_utils__WEBPACK_IMPORTED_MODULE_3__["TextSemi"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 15
    }
  }, "Employer"), __jsx(_geist_ui_react__WEBPACK_IMPORTED_MODULE_1__["Spacer"], {
    y: 0.2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 15
    }
  }), __jsx(_geist_ui_react__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    size: "small",
    placeholder: "Consenso Labs",
    className: "form-group__input input",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 15
    }
  })), __jsx("div", {
    className: "form-group__input",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 13
    }
  }, __jsx(_utils__WEBPACK_IMPORTED_MODULE_3__["TextSemi"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 15
    }
  }, "Job Title"), __jsx(_geist_ui_react__WEBPACK_IMPORTED_MODULE_1__["Spacer"], {
    y: 0.2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 15
    }
  }), __jsx(_geist_ui_react__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    size: "small",
    placeholder: "Blockchain Engineer",
    className: "form-group__input input",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 15
    }
  }))))), __jsx(_Profile__WEBPACK_IMPORTED_MODULE_2__["FormBottom"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 7
    }
  }, __jsx(_geist_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    auto: true,
    className: "btn-secondary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 9
    }
  }, "Cancel"), __jsx(_geist_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    auto: true,
    primary: true,
    className: "btn-primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 9
    }
  }, "Save")));
}

_s(Profile, "ddAaZmuqhYmUHC1hFmkmwo0sFF4=");

_c2 = Profile;
/* harmony default export */ __webpack_exports__["default"] = (Profile);

var _c, _c2;

$RefreshReg$(_c, "MockItem");
$RefreshReg$(_c2, "Profile");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Byb2ZpbGUvUHJvZmlsZS5qcyJdLCJuYW1lcyI6WyJNb2NrSXRlbSIsIndpZHRoIiwiaGVpZ2h0IiwiUHJvZmlsZSIsInVzZVN0YXRlIiwiZWRpdCIsInNldEVkaXQiLCJuYW1lIiwic2V0TmFtZSIsImUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQVFBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFDckIsU0FBTyxNQUFDLG9EQUFEO0FBQU0sVUFBTSxNQUFaO0FBQWEsU0FBSyxFQUFFO0FBQUVDLFdBQUssRUFBRSxNQUFUO0FBQWlCQyxZQUFNLEVBQUU7QUFBekIsS0FBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUFQO0FBQ0QsQ0FGRDs7S0FBTUYsUTs7QUFJTixTQUFTRyxPQUFULEdBQW1CO0FBQUE7O0FBQ2pCO0FBRGlCLGtCQUVPQyxzREFBUSxDQUFDLEtBQUQsQ0FGZjtBQUFBLE1BRVZDLElBRlU7QUFBQSxNQUVKQyxPQUZJOztBQUFBLG1CQUdPRixzREFBUSxDQUFDLEVBQUQsQ0FIZjtBQUFBLE1BR1ZHLElBSFU7QUFBQSxNQUdKQyxPQUhJOztBQUlqQixTQUNFLG1FQUNFLE1BQUMsc0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLGdCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxzQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsc0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLDRCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxN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QUdFLE1BQUMscURBQUQ7QUFDRSxRQUFJLEVBQUMsT0FEUDtBQUVFLGVBQVcsRUFBQyxxQkFGZDtBQUdFLGFBQVMsRUFBQyx5QkFIWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEYsQ0FWRixDQURGLENBRkYsQ0F4SkYsRUFpTEUsTUFBQyxtREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxzREFBRDtBQUFRLFFBQUksTUFBWjtBQUFhLGFBQVMsRUFBQyxlQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsRUFJRSxNQUFDLHNEQUFEO0FBQVEsUUFBSSxNQUFaO0FBQWEsV0FBTyxNQUFwQjtBQUFxQixhQUFTLEVBQUMsYUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpGLENBakxGLENBREY7QUE0TEQ7O0dBaE1RRixPOztNQUFBQSxPO0FBa01NQSxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xccHJvZmlsZS5qcy4yMmUyZjgyMDcyYjE1Y2M4MDA2Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBCdXR0b24sIEF2YXRhciwgU3BhY2VyLCBJbnB1dCwgR3JpZCwgQ2FyZCB9IGZyb20gJ0BnZWlzdC11aS9yZWFjdCc7XHJcbmltcG9ydCB7IEZvcm1Cb3R0b20sIFByb2ZpbGVIZWFkZXIsIEljb25Db250YWluZXIsIEZvcm0gfSBmcm9tICcuLi9Qcm9maWxlJztcclxuaW1wb3J0IHtcclxuICBUZXh0TWVkaXVtMTYsXHJcbiAgVGV4dFNlbWkyMCxcclxuICBIZWFkZXJUZXh0LFxyXG4gIEhlYWRpbmdTZW1pLFxyXG4gIFRleHRTZW1pLFxyXG59IGZyb20gJy4uLy4uL3V0aWxzJztcclxuXHJcbmNvbnN0IE1vY2tJdGVtID0gKCkgPT4ge1xyXG4gIHJldHVybiA8Q2FyZCBzaGFkb3cgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAnNTBweCcgfX0gLz47XHJcbn07XHJcblxyXG5mdW5jdGlvbiBQcm9maWxlKCkge1xyXG4gIC8vIGVkaXQtYnRuIGlmIGl0J3MgdHJ1ZSwgdGV4dCBpbnB1dHMgd2lsbCBiZSBlbmFibGVkXHJcbiAgY29uc3QgW2VkaXQsIHNldEVkaXRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKCcnKTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPFByb2ZpbGVIZWFkZXI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Byb2ZpbGUtaGVhZGVyJz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwcm9maWxlLWhlYWRlcl9fbGVmdCc+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwcm9maWxlLWhlYWRlcl9fbWV0YSc+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Byb2ZpbGUtaGVhZGVyX19tZXRhLWltYWdlJz5cclxuICAgICAgICAgICAgICAgIDxBdmF0YXJcclxuICAgICAgICAgICAgICAgICAgc3JjPSdodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTU3MDI5NTk5OTkxOS01NmNlYjVlY2NhNjE/aXhpZD1NWHd4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh3JTNEJml4bGliPXJiLTEuMi4xJmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9ODAwJnE9ODAnXHJcbiAgICAgICAgICAgICAgICAgIHNpemU9J2xhcmdlJ1xyXG4gICAgICAgICAgICAgICAgICBpc1NxdWFyZT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwcm9maWxlLWhlYWRlcl9fbWV0YS1uYW1lJz5cclxuICAgICAgICAgICAgICAgIDxUZXh0U2VtaTIwPktvdXNoaXRoPC9UZXh0U2VtaTIwPlxyXG4gICAgICAgICAgICAgICAgPFNwYWNlciB5PXswLjJ9IC8+XHJcbiAgICAgICAgICAgICAgICA8VGV4dE1lZGl1bTE2PjB4MzM3YjJhRjE5ZTg0MEU4Li4uPC9UZXh0TWVkaXVtMTY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Byb2ZpbGUtaGVhZGVyX19yaWdodCc+XHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICBhdXRvXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPSdidG4gYnRuLXByaW1hcnknXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHNldEVkaXQodHJ1ZSl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7JyAnfVxyXG4gICAgICAgICAgICAgIEVkaXQgUHJvZmlsZVxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxJY29uQ29udGFpbmVyPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ljb25zLW1ldGEnPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz0nL2Fzc2V0cy9pY29ucy9sb2NhdGlvbi5zdmcnIGFsdD0nbG9jYXRpb24nIHNyY3NldD0nJyAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naWNvbnMtbWV0YV9fdGl0bGUnPlxyXG4gICAgICAgICAgICAgIDxUZXh0U2VtaT5CYW5nYWxvcmU8L1RleHRTZW1pPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ljb25zLW1ldGEnPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz0nL2Fzc2V0cy9pY29ucy9lbWFpbC5zdmcnIGFsdD0nZW1haWwnIHNyY3NldD0nJyAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naWNvbnMtbWV0YV9fdGl0bGUnPlxyXG4gICAgICAgICAgICAgIDxUZXh0U2VtaT5rb3VzaGl0aEBjb25zZW5zb2xhYnMuY29tPC9UZXh0U2VtaT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0ljb25Db250YWluZXI+XHJcbiAgICAgIDwvUHJvZmlsZUhlYWRlcj5cclxuXHJcbiAgICAgIHsvKiBmb3JtIHNlY3Rpb24gKi99XHJcblxyXG4gICAgICA8Rm9ybT5cclxuICAgICAgICA8SGVhZGluZ1NlbWk+QmFzaWM8L0hlYWRpbmdTZW1pPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb3JtLWdyb3VwJz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb3JtLWdyb3VwX19maWVsZHMnPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZm9ybS1ncm91cF9faW5wdXQnPlxyXG4gICAgICAgICAgICAgIDxUZXh0U2VtaT5OYW1lPC9UZXh0U2VtaT5cclxuICAgICAgICAgICAgICA8U3BhY2VyIHk9ezAuMn0gLz5cclxuICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgIHJlYWRPbmx5PXshZWRpdH1cclxuICAgICAgICAgICAgICAgIHNpemU9J3NtYWxsJ1xyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J0pvaG4gRG9lJ1xyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdmb3JtLWdyb3VwX19pbnB1dCBpbnB1dCdcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Zvcm0tZ3JvdXBfX2lucHV0Jz5cclxuICAgICAgICAgICAgICA8VGV4dFNlbWk+TG9jYXRpb248L1RleHRTZW1pPlxyXG4gICAgICAgICAgICAgIDxTcGFjZXIgeT17MC4yfSAvPlxyXG4gICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgc2l6ZT0nc21hbGwnXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nSm9obiBEb2UnXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2Zvcm0tZ3JvdXBfX2lucHV0IGlucHV0J1xyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Zvcm0tZ3JvdXBfX2ZpZWxkcyc+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb3JtLWdyb3VwX19pbnB1dCc+XHJcbiAgICAgICAgICAgICAgPFRleHRTZW1pPldlYnNpdGU8L1RleHRTZW1pPlxyXG4gICAgICAgICAgICAgIDxTcGFjZXIgeT17MC4yfSAvPlxyXG4gICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgc2l6ZT0nc21hbGwnXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nSm9obiBEb2UnXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2Zvcm0tZ3JvdXBfX2lucHV0IGlucHV0J1xyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZm9ybS1ncm91cF9faW5wdXQnPlxyXG4gICAgICAgICAgICAgIDxUZXh0U2VtaT5ET0I8L1RleHRTZW1pPlxyXG4gICAgICAgICAgICAgIDxTcGFjZXIgeT17MC4yfSAvPlxyXG4gICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT0nZGF0ZSdcclxuICAgICAgICAgICAgICAgIHNpemU9J3NtYWxsJ1xyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J0pvaG4gRG9lJ1xyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdmb3JtLWdyb3VwX19pbnB1dCBpbnB1dCdcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0Zvcm0+XHJcblxyXG4gICAgICA8Rm9ybT5cclxuICAgICAgICA8SGVhZGluZ1NlbWk+VmVyaWZpZWQgQWNjb3VudHM8L0hlYWRpbmdTZW1pPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb3JtLWdyb3VwJz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb3JtLWdyb3VwX19maWVsZHMnPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZm9ybS1ncm91cF9faW5wdXQnPlxyXG4gICAgICAgICAgICAgIDxUZXh0U2VtaT5HaXRIdWI8L1RleHRTZW1pPlxyXG4gICAgICAgICAgICAgIDxTcGFjZXIgeT17MC4yfSAvPlxyXG5cclxuICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdodHRwczovL2dpdGh1Yi8nXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2Zvcm0tZ3JvdXBfX2lucHV0IGlucHV0J1xyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZm9ybS1ncm91cF9faW5wdXQnPlxyXG4gICAgICAgICAgICAgIDxUZXh0U2VtaT5Ud2l0dGVyPC9UZXh0U2VtaT5cclxuICAgICAgICAgICAgICA8U3BhY2VyIHk9ezAuMn0gLz5cclxuICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgIHNpemU9J3NtYWxsJ1xyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J2h0dHBzOi8vdHdpdHRlci5jb20vam9obmRvZSdcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nZm9ybS1ncm91cF9faW5wdXQgaW5wdXQnXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9Gb3JtPlxyXG5cclxuICAgICAgPEZvcm0+XHJcbiAgICAgICAgPEhlYWRpbmdTZW1pPkNvbnRhY3Q8L0hlYWRpbmdTZW1pPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb3JtLWdyb3VwJz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb3JtLWdyb3VwX19maWVsZHMnPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZm9ybS1ncm91cF9faW5wdXQnPlxyXG4gICAgICAgICAgICAgIDxUZXh0U2VtaT5FbWFpbDwvVGV4dFNlbWk+XHJcbiAgICAgICAgICAgICAgPFNwYWNlciB5PXswLjJ9IC8+XHJcbiAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPSdlbWFpbCdcclxuICAgICAgICAgICAgICAgIHNpemU9J3NtYWxsJ1xyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J0pvaG5kb2VAZG9tYWluLmNvbSdcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nZm9ybS1ncm91cF9faW5wdXQgaW5wdXQnXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb3JtLWdyb3VwX19pbnB1dCc+XHJcbiAgICAgICAgICAgICAgPFRleHRTZW1pPlBob25lPC9UZXh0U2VtaT5cclxuICAgICAgICAgICAgICA8U3BhY2VyIHk9ezAuMn0gLz5cclxuICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgIHNpemU9J3NtYWxsJ1xyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9Jzk5IDk5IDk5IDk5IDk5J1xyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdmb3JtLWdyb3VwX19pbnB1dCBpbnB1dCdcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0Zvcm0+XHJcblxyXG4gICAgICA8Rm9ybT5cclxuICAgICAgICA8SGVhZGluZ1NlbWk+V29yazwvSGVhZGluZ1NlbWk+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Zvcm0tZ3JvdXAnPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Zvcm0tZ3JvdXBfX2ZpZWxkcyc+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb3JtLWdyb3VwX19pbnB1dCc+XHJcbiAgICAgICAgICAgICAgPFRleHRTZW1pPkVtcGxveWVyPC9UZXh0U2VtaT5cclxuICAgICAgICAgICAgICA8U3BhY2VyIHk9ezAuMn0gLz5cclxuICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgIHNpemU9J3NtYWxsJ1xyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J0NvbnNlbnNvIExhYnMnXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2Zvcm0tZ3JvdXBfX2lucHV0IGlucHV0J1xyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZm9ybS1ncm91cF9faW5wdXQnPlxyXG4gICAgICAgICAgICAgIDxUZXh0U2VtaT5Kb2IgVGl0bGU8L1RleHRTZW1pPlxyXG4gICAgICAgICAgICAgIDxTcGFjZXIgeT17MC4yfSAvPlxyXG4gICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgc2l6ZT0nc21hbGwnXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nQmxvY2tjaGFpbiBFbmdpbmVlcidcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nZm9ybS1ncm91cF9faW5wdXQgaW5wdXQnXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9Gb3JtPlxyXG4gICAgICA8Rm9ybUJvdHRvbT5cclxuICAgICAgICA8QnV0dG9uIGF1dG8gY2xhc3NOYW1lPSdidG4tc2Vjb25kYXJ5Jz5cclxuICAgICAgICAgIENhbmNlbFxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDxCdXR0b24gYXV0byBwcmltYXJ5IGNsYXNzTmFtZT0nYnRuLXByaW1hcnknPlxyXG4gICAgICAgICAgU2F2ZVxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L0Zvcm1Cb3R0b20+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9