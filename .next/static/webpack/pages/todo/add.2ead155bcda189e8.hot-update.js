"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/todo/add",{

/***/ "./components/AddTodo.tsx":
/*!********************************!*\
  !*** ./components/AddTodo.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_songsong_Desktop_songsong_dev_next_todolist_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _styles_palette__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/palette */ \"./styles/palette.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _jsxFileName = \"/Users/songsong/Desktop/songsong/dev/next-todolist/components/AddTodo.tsx\",\n    _this = undefined;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_Users_songsong_Desktop_songsong_dev_next_todolist_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\n\n\n\nvar BrushIcon = function BrushIcon(props) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"svg\", _objectSpread(_objectSpread({}, props), {}, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"path\", {\n      d: \"M18.58 0a3.648 3.648 0 0 0-3.056 1.649c-.897 1.37-.854 3.261-1.368 4.444-.741 1.708-3.873.343-5.532-.524-2.909 5.647-5.025 8.211-6.845 10.448C8.358 20.335 3.602 17.21 13.969 24a62.064 62.064 0 0 1 6.825-10.46c-1.539-1.241-4.019-3.546-2.614-4.945 1-1 2.545-1.578 3.442-2.95C23.211 3.219 21.448 0 18.58 0zm-5.348 21.138-1.201-.763c0-.656.157-1.298.422-1.874-.609.202-1.074.482-1.618 1.043L7.48 17.313c.531-.703.934-1.55.859-2.688-.482.824-1.521 1.621-2.331 1.745l-1.302-.815a55.496 55.496 0 0 0 3.257-4.728l8.299 5.462c-1.099 1.614-2.197 3.363-3.03 4.849zm6.724-16.584c-.457.7-2.445 1.894-3.184 2.632-.681.68-1.014 1.561-.961 2.548.071 1.354.852 2.781 2.218 4.085-.201.265-.408.543-.618.833L8.983 9.104l.504-.883c1.065.445 2.1.678 3.032.678 1.646 0 2.908-.733 3.464-2.012.459-1.058.751-3.448 1.206-4.145 1.206-1.833 3.964-.017 2.767 1.812zm-.644-.424a.883.883 0 1 1-1.475-.966.882.882 0 1 1 1.475.966z\"\n    }, void 0, false, void 0, this)\n  }), void 0, false, void 0, this);\n};\n\n_c3 = BrushIcon;\nBrushIcon.defaultProps = {\n  xmlns: \"http://www.w3.org/2000/svg\",\n  width: \"24\",\n  height: \"24\"\n};\n\n\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div.withConfig({\n  displayName: \"AddTodo__Container\",\n  componentId: \"sc-32jjjw-0\"\n})([\"padding:16px;.add-todo-colors-wrapper{width:100%;margin-top:16px;display:flex;justify-content:space-between;}.add-todo-color-list{display:flex;button{width:24px;height:24px;margin-right:16px;border:0;outline:0;border-radius:50%;&:last-child{margin:0;}}}.add-todo-header-title{font-size:21px;}.add-todo-header{display:flex;justify-content:space-between;align-items:center;.add-todo-submit-button{padding:4px 8px;border:1px solid black;border-radius:5px;background-color:white;outline:none;font-size:14px;}}.bg-blue{background-color:\", \";}.bg-green{background-color:\", \";}.bg-navy{background-color:\", \";}.bg-orange{background-color:\", \";}.bg-red{background-color:\", \";}.bg-yellow{background-color:\", \";}\"], _styles_palette__WEBPACK_IMPORTED_MODULE_3__[\"default\"].blue, _styles_palette__WEBPACK_IMPORTED_MODULE_3__[\"default\"].green, _styles_palette__WEBPACK_IMPORTED_MODULE_3__[\"default\"].navy, _styles_palette__WEBPACK_IMPORTED_MODULE_3__[\"default\"].orange, _styles_palette__WEBPACK_IMPORTED_MODULE_3__[\"default\"].red, _styles_palette__WEBPACK_IMPORTED_MODULE_3__[\"default\"].yellow);\n_c = Container;\n\nvar AddTodo = function AddTodo() {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(Container, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n      className: \"add-todo-header\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"h1\", {\n        className: \"add-todo-header-title\",\n        children: \"App Todo\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 79,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"button\", {\n        type: \"button\",\n        className: \"add-todo-submit-button\",\n        onClick: function onClick() {},\n        children: \"\\uCD94\\uAC00\\uD558\\uAE30\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 80,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n      className: \"add-todo-colors-wrapper\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n        className: \"add-todo-color-list\",\n        children: [\"red\", \"orange\", \"yellow\", \"green\", \"blue\", \"navy\"].map(function (color, index) {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"button\", {\n            type: \"button\",\n            className: \"bg-\".concat(color, \" add-todo-color-button\"),\n            onClick: function onClick() {}\n          }, index, false, {\n            fileName: _jsxFileName,\n            lineNumber: 85,\n            columnNumber: 13\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 83,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(BrushIcon, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 88,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 77,\n    columnNumber: 5\n  }, _this);\n};\n\n_c2 = AddTodo;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AddTodo);\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"Container\");\n$RefreshReg$(_c2, \"AddTodo\");\n$RefreshReg$(_c3, \"BrushIcon\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0FkZFRvZG8udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7SUFDT0UscUJBQUFBOzs7Ozs7OztNQUFBQTtBQUFBQTs7Ozs7QUFDUDs7QUFFQSxJQUFNRSxTQUFTLEdBQUdILHdFQUFIO0VBQUE7RUFBQTtBQUFBLHNzQkE2Q1NFLDREQTdDVCxFQWlEU0EsNkRBakRULEVBcURTQSw0REFyRFQsRUF5RFNBLDhEQXpEVCxFQTZEU0EsMkRBN0RULEVBaUVTQSw4REFqRVQsQ0FBZjtLQUFNQzs7QUFxRU4sSUFBTVEsT0FBaUIsR0FBRyxTQUFwQkEsT0FBb0IsR0FBTTtFQUM5QixvQkFDRSw4REFBQyxTQUFEO0lBQUEsd0JBQ0U7TUFBSyxTQUFTLEVBQUMsaUJBQWY7TUFBQSx3QkFDRTtRQUFJLFNBQVMsRUFBQyx1QkFBZDtRQUFBO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQSxTQURGLGVBRUU7UUFBUSxJQUFJLEVBQUMsUUFBYjtRQUFzQixTQUFTLEVBQUMsd0JBQWhDO1FBQXlELE9BQU8sRUFBRSxtQkFBTSxDQUFFLENBQTFFO1FBQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBLFNBRkY7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBLFNBREYsZUFLRTtNQUFLLFNBQVMsRUFBQyx5QkFBZjtNQUFBLHdCQUNFO1FBQUssU0FBUyxFQUFDLHFCQUFmO1FBQUEsVUFDRyxDQUFDLEtBQUQsRUFBUSxRQUFSLEVBQWtCLFFBQWxCLEVBQTRCLE9BQTVCLEVBQXFDLE1BQXJDLEVBQTZDLE1BQTdDLEVBQXFEQyxHQUFyRCxDQUF5RCxVQUFDQyxLQUFELEVBQVFDLEtBQVI7VUFBQSxvQkFDeEQ7WUFBb0IsSUFBSSxFQUFDLFFBQXpCO1lBQWtDLFNBQVMsZUFBUUQsS0FBUiwyQkFBM0M7WUFBa0YsT0FBTyxFQUFFLG1CQUFNLENBQUU7VUFBbkcsR0FBYUMsS0FBYjtZQUFBO1lBQUE7WUFBQTtVQUFBLFNBRHdEO1FBQUEsQ0FBekQ7TUFESDtRQUFBO1FBQUE7UUFBQTtNQUFBLFNBREYsZUFNRSw4REFBQyxTQUFEO1FBQUE7UUFBQTtRQUFBO01BQUEsU0FORjtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUEsU0FMRjtFQUFBO0lBQUE7SUFBQTtJQUFBO0VBQUEsU0FERjtBQWdCRCxDQWpCRDs7TUFBTUg7QUFtQk4sK0RBQWVBLE9BQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BZGRUb2RvLnRzeD80MmZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCBCcnVzaEljb24gZnJvbSBcIi4uL3B1YmxpYy9zdGF0aWNzL3N2Zy9icnVzaC5zdmdcIjtcbmltcG9ydCBwYWxldHRlIGZyb20gXCIuLi9zdHlsZXMvcGFsZXR0ZVwiO1xuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBwYWRkaW5nOiAxNnB4O1xuXG4gIC5hZGQtdG9kby1jb2xvcnMtd3JhcHBlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogMTZweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgfVxuXG4gIC5hZGQtdG9kby1jb2xvci1saXN0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGJ1dHRvbiB7XG4gICAgICB3aWR0aDogMjRweDtcbiAgICAgIGhlaWdodDogMjRweDtcbiAgICAgIG1hcmdpbi1yaWdodDogMTZweDtcbiAgICAgIGJvcmRlcjogMDtcbiAgICAgIG91dGxpbmU6IDA7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmFkZC10b2RvLWhlYWRlci10aXRsZSB7XG4gICAgZm9udC1zaXplOiAyMXB4O1xuICB9XG5cbiAgLmFkZC10b2RvLWhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIC5hZGQtdG9kby1zdWJtaXQtYnV0dG9uIHtcbiAgICAgIHBhZGRpbmc6IDRweCA4cHg7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG4gIH1cblxuICAuYmctYmx1ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtwYWxldHRlLmJsdWV9O1xuICB9XG5cbiAgLmJnLWdyZWVuIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3BhbGV0dGUuZ3JlZW59O1xuICB9XG5cbiAgLmJnLW5hdnkge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7cGFsZXR0ZS5uYXZ5fTtcbiAgfVxuXG4gIC5iZy1vcmFuZ2Uge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7cGFsZXR0ZS5vcmFuZ2V9O1xuICB9XG5cbiAgLmJnLXJlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtwYWxldHRlLnJlZH07XG4gIH1cblxuICAuYmcteWVsbG93IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3BhbGV0dGUueWVsbG93fTtcbiAgfVxuYDtcblxuY29uc3QgQWRkVG9kbzogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWRkLXRvZG8taGVhZGVyXCI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJhZGQtdG9kby1oZWFkZXItdGl0bGVcIj5BcHAgVG9kbzwvaDE+XG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImFkZC10b2RvLXN1Ym1pdC1idXR0b25cIiBvbkNsaWNrPXsoKSA9PiB7fX0+7LaU6rCA7ZWY6riwPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWRkLXRvZG8tY29sb3JzLXdyYXBwZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZGQtdG9kby1jb2xvci1saXN0XCI+XG4gICAgICAgICAge1tcInJlZFwiLCBcIm9yYW5nZVwiLCBcInllbGxvd1wiLCBcImdyZWVuXCIsIFwiYmx1ZVwiLCBcIm5hdnlcIl0ubWFwKChjb2xvciwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxidXR0b24ga2V5PXtpbmRleH0gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT17YGJnLSR7Y29sb3J9IGFkZC10b2RvLWNvbG9yLWJ1dHRvbmB9IG9uQ2xpY2s9eygpID0+IHt9fSAvPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPEJydXNoSWNvbiAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBZGRUb2RvO1xuIl0sIm5hbWVzIjpbIlJlYWN0Iiwic3R5bGVkIiwiQnJ1c2hJY29uIiwicGFsZXR0ZSIsIkNvbnRhaW5lciIsImRpdiIsImJsdWUiLCJncmVlbiIsIm5hdnkiLCJvcmFuZ2UiLCJyZWQiLCJ5ZWxsb3ciLCJBZGRUb2RvIiwibWFwIiwiY29sb3IiLCJpbmRleCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/AddTodo.tsx\n"));

/***/ })

});