webpackHotUpdate_N_E("pages/beachstop",{

/***/ "./assets/jss/nextjs-material-kit/pages/beachStop.js":
/*!***********************************************************!*\
  !*** ./assets/jss/nextjs-material-kit/pages/beachStop.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Users_Fernz_Desktop_merchNextJs_ecom_merch_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assets/jss/nextjs-material-kit.js */ \"./assets/jss/nextjs-material-kit.js\");\n/* harmony import */ var assets_jss_nextjs_material_kit_imagesStyles_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! assets/jss/nextjs-material-kit/imagesStyles.js */ \"./assets/jss/nextjs-material-kit/imagesStyles.js\");\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_Fernz_Desktop_merchNextJs_ecom_merch_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\nvar beachStopPageStyle = _objectSpread(_objectSpread({\n  container: _objectSpread(_objectSpread({}, assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_1__[\"container\"]), {}, {\n    zIndex: \"2\",\n    position: \"relative\",\n    paddingTop: \"20vh\",\n    color: \"#3e2141\",\n    paddingBottom: \"200px\"\n  })\n}, assets_jss_nextjs_material_kit_imagesStyles_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]), {}, {\n  cardHidden: {\n    opacity: \"0\",\n    transform: \"translate3d(0, -60px, 0)\"\n  },\n  title: _objectSpread(_objectSpread({}, assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_1__[\"title\"]), {}, {\n    marginBottom: \"1rem\",\n    marginTop: \"-8rem\",\n    minHeight: \"32px\",\n    textDecoration: \"none\",\n    textAlign: 'center',\n    transform: \"translate3d(5rem, -2, 0)\"\n  }),\n  pageHeader: {\n    height: \"auto\",\n    display: \"inherit\",\n    position: \"relative\",\n    margin: \"0\",\n    padding: \"0\",\n    border: \"0\",\n    alignItems: \"center\",\n    \"&:before\": {\n      background: \"rgba(0, 0, 0, 0.5)\"\n    },\n    \"&:before,&:after\": {\n      position: \"absolute\",\n      zIndex: \"1\",\n      width: \"100%\",\n      height: \"100%\",\n      display: \"block\",\n      left: \"0\",\n      top: \"0\",\n      content: '\"\"'\n    },\n    \"& footer li a,& footer li a:hover,& footer li a:active\": {\n      color: \"#FFFFFF\"\n    },\n    \"& footer\": {\n      position: \"absolute\",\n      bottom: \"0\",\n      width: \"100%\"\n    }\n  },\n  form: {\n    margin: \"0\"\n  },\n  card: {\n    display: \"inline-block\",\n    position: \"relative\",\n    width: \"100%\",\n    margin: \"25px 0\",\n    boxShadow: \"0 1px 4px 0 rgba(0, 0, 0, 0.14)\",\n    borderRadius: \"10px\",\n    color: \"rgba(0, 0, 0, 0.87)\",\n    background: \"#fff\",\n    alignItems: \"center\",\n    verticalAlign: 'middle' // background: 'rgba( 245, 251, 195, 0.20 )',\n    // boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',\n    // backdropFilter: 'blur( 7.5px )',\n    // // -webkit-backdrop-filter: blur( 7.5px );\n    // borderRadius: '10px',\n    // border: '1px solid rgba( 255, 255, 255, 0.18 )',\n\n  },\n  cardHeader: {\n    width: \"auto\",\n    textAlign: \"center\",\n    marginLeft: \"20px\",\n    marginRight: \"20px\",\n    marginTop: \"-40px\",\n    padding: \"20px 0\",\n    marginBottom: \"15px\"\n  },\n  socialIcons: {\n    maxWidth: \"24px\",\n    marginTop: \"0\",\n    width: \"100%\",\n    transform: \"none\",\n    left: \"0\",\n    top: \"0\",\n    height: \"100%\",\n    lineHeight: \"41px\",\n    fontSize: \"20px\"\n  },\n  icons: {\n    width: \"20px\",\n    height: \"20px\",\n    marginRight: \"3px\"\n  },\n  imageCard: {\n    transform: \"translate3d(5rem, -10rem, 0)\"\n  },\n  divider: {\n    marginTop: \"30px\",\n    marginBottom: \"0px\",\n    textAlign: \"center\"\n  },\n  cardFooter: {\n    paddingTop: \"0rem\",\n    border: \"0\",\n    borderRadius: \"6px\",\n    justifyContent: \"center !important\"\n  },\n  socialLine: {\n    marginTop: \"1rem\",\n    textAlign: \"center\",\n    padding: \"0\"\n  },\n  inputIconsColor: {\n    color: \"#495057\"\n  },\n  logoImage: {\n    transform: \"translate3d(-6rem, -3rem, 0)\"\n  },\n  logoLefImage: {\n    transform: \"translate3d(10rem, -10rem, 0)\"\n  }\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (beachStopPageStyle);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXNzZXRzL2pzcy9uZXh0anMtbWF0ZXJpYWwta2l0L3BhZ2VzL2JlYWNoU3RvcC5qcz9iYzQ2Il0sIm5hbWVzIjpbImJlYWNoU3RvcFBhZ2VTdHlsZSIsImNvbnRhaW5lciIsInpJbmRleCIsInBvc2l0aW9uIiwicGFkZGluZ1RvcCIsImNvbG9yIiwicGFkZGluZ0JvdHRvbSIsImltYWdlc1N0eWxlIiwiY2FyZEhpZGRlbiIsIm9wYWNpdHkiLCJ0cmFuc2Zvcm0iLCJ0aXRsZSIsIm1hcmdpbkJvdHRvbSIsIm1hcmdpblRvcCIsIm1pbkhlaWdodCIsInRleHREZWNvcmF0aW9uIiwidGV4dEFsaWduIiwicGFnZUhlYWRlciIsImhlaWdodCIsImRpc3BsYXkiLCJtYXJnaW4iLCJwYWRkaW5nIiwiYm9yZGVyIiwiYWxpZ25JdGVtcyIsImJhY2tncm91bmQiLCJ3aWR0aCIsImxlZnQiLCJ0b3AiLCJjb250ZW50IiwiYm90dG9tIiwiZm9ybSIsImNhcmQiLCJib3hTaGFkb3ciLCJib3JkZXJSYWRpdXMiLCJ2ZXJ0aWNhbEFsaWduIiwiY2FyZEhlYWRlciIsIm1hcmdpbkxlZnQiLCJtYXJnaW5SaWdodCIsInNvY2lhbEljb25zIiwibWF4V2lkdGgiLCJsaW5lSGVpZ2h0IiwiZm9udFNpemUiLCJpY29ucyIsImltYWdlQ2FyZCIsImRpdmlkZXIiLCJjYXJkRm9vdGVyIiwianVzdGlmeUNvbnRlbnQiLCJzb2NpYWxMaW5lIiwiaW5wdXRJY29uc0NvbG9yIiwibG9nb0ltYWdlIiwibG9nb0xlZkltYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxrQkFBa0I7QUFDcEJDLFdBQVMsa0NBQ0ZBLDJFQURFO0FBRUxDLFVBQU0sRUFBRSxHQUZIO0FBR0xDLFlBQVEsRUFBRSxVQUhMO0FBSUxDLGNBQVUsRUFBRSxNQUpQO0FBS0xDLFNBQUssRUFBRSxTQUxGO0FBTUxDLGlCQUFhLEVBQUU7QUFOVjtBQURX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a0JBQWMsRUFBRTtBQUpSLEdBOUdRO0FBb0hwQkMsWUFBVSxFQUFFO0FBQ1JsQyxhQUFTLEVBQUUsTUFESDtBQUVSRyxhQUFTLEVBQUUsUUFGSDtBQUdSSyxXQUFPLEVBQUU7QUFIRCxHQXBIUTtBQXlIcEIyQixpQkFBZSxFQUFFO0FBQ2IzQyxTQUFLLEVBQUU7QUFETSxHQXpIRztBQTRIcEI0QyxXQUFTLEVBQUU7QUFDUHZDLGFBQVMsRUFBRTtBQURKLEdBNUhTO0FBK0hwQndDLGNBQVksRUFBRTtBQUNWeEMsYUFBUyxFQUFFO0FBREQ7QUEvSE0sRUFBeEI7O0FBb0llVixpRkFBZiIsImZpbGUiOiIuL2Fzc2V0cy9qc3MvbmV4dGpzLW1hdGVyaWFsLWtpdC9wYWdlcy9iZWFjaFN0b3AuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb250YWluZXIsIHRpdGxlIH0gZnJvbSBcImFzc2V0cy9qc3MvbmV4dGpzLW1hdGVyaWFsLWtpdC5qc1wiO1xuaW1wb3J0IGltYWdlc1N0eWxlIGZyb20gXCJhc3NldHMvanNzL25leHRqcy1tYXRlcmlhbC1raXQvaW1hZ2VzU3R5bGVzLmpzXCI7XG5cbmNvbnN0IGJlYWNoU3RvcFBhZ2VTdHlsZSA9IHtcbiAgICBjb250YWluZXI6IHtcbiAgICAgICAgLi4uY29udGFpbmVyLFxuICAgICAgICB6SW5kZXg6IFwiMlwiLFxuICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICAgICAgICBwYWRkaW5nVG9wOiBcIjIwdmhcIixcbiAgICAgICAgY29sb3I6IFwiIzNlMjE0MVwiLFxuICAgICAgICBwYWRkaW5nQm90dG9tOiBcIjIwMHB4XCIsXG4gICAgfSxcbiAgICAuLi5pbWFnZXNTdHlsZSxcbiAgICBjYXJkSGlkZGVuOiB7XG4gICAgICAgIG9wYWNpdHk6IFwiMFwiLFxuICAgICAgICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlM2QoMCwgLTYwcHgsIDApXCJcbiAgICB9LFxuICAgIHRpdGxlOiB7XG4gICAgICAgIC4uLnRpdGxlLFxuICAgICAgICBtYXJnaW5Cb3R0b206IFwiMXJlbVwiLFxuICAgICAgICBtYXJnaW5Ub3A6IFwiLThyZW1cIixcbiAgICAgICAgbWluSGVpZ2h0OiBcIjMycHhcIixcbiAgICAgICAgdGV4dERlY29yYXRpb246IFwibm9uZVwiLFxuICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlM2QoNXJlbSwgLTIsIDApXCJcblxuICAgIH0sXG4gICAgcGFnZUhlYWRlcjoge1xuXG4gICAgICAgIGhlaWdodDogXCJhdXRvXCIsXG4gICAgICAgIGRpc3BsYXk6IFwiaW5oZXJpdFwiLFxuICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICAgICAgICBtYXJnaW46IFwiMFwiLFxuICAgICAgICBwYWRkaW5nOiBcIjBcIixcbiAgICAgICAgYm9yZGVyOiBcIjBcIixcbiAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICAgICAgXCImOmJlZm9yZVwiOiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBcInJnYmEoMCwgMCwgMCwgMC41KVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiJjpiZWZvcmUsJjphZnRlclwiOiB7XG4gICAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgICAgICAgekluZGV4OiBcIjFcIixcbiAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICAgIGhlaWdodDogXCIxMDAlXCIsXG4gICAgICAgICAgICBkaXNwbGF5OiBcImJsb2NrXCIsXG4gICAgICAgICAgICBsZWZ0OiBcIjBcIixcbiAgICAgICAgICAgIHRvcDogXCIwXCIsXG4gICAgICAgICAgICBjb250ZW50OiAnXCJcIidcbiAgICAgICAgfSxcbiAgICAgICAgXCImIGZvb3RlciBsaSBhLCYgZm9vdGVyIGxpIGE6aG92ZXIsJiBmb290ZXIgbGkgYTphY3RpdmVcIjoge1xuICAgICAgICAgICAgY29sb3I6IFwiI0ZGRkZGRlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiJiBmb290ZXJcIjoge1xuICAgICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgICAgICAgIGJvdHRvbTogXCIwXCIsXG4gICAgICAgICAgICB3aWR0aDogXCIxMDAlXCJcbiAgICAgICAgfVxuICAgIH0sXG4gICAgZm9ybToge1xuICAgICAgICBtYXJnaW46IFwiMFwiXG4gICAgfSxcbiAgICBjYXJkOiB7XG4gICAgICAgIGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsXG4gICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG4gICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgbWFyZ2luOiBcIjI1cHggMFwiLFxuICAgICAgICBib3hTaGFkb3c6IFwiMCAxcHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KVwiLFxuICAgICAgICBib3JkZXJSYWRpdXM6IFwiMTBweFwiLFxuICAgICAgICBjb2xvcjogXCJyZ2JhKDAsIDAsIDAsIDAuODcpXCIsXG4gICAgICAgIGJhY2tncm91bmQ6IFwiI2ZmZlwiLFxuICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgICB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJyxcbiAgICAgICAgLy8gYmFja2dyb3VuZDogJ3JnYmEoIDI0NSwgMjUxLCAxOTUsIDAuMjAgKScsXG4gICAgICAgIC8vIGJveFNoYWRvdzogJzAgOHB4IDMycHggMCByZ2JhKCAzMSwgMzgsIDEzNSwgMC4zNyApJyxcbiAgICAgICAgLy8gYmFja2Ryb3BGaWx0ZXI6ICdibHVyKCA3LjVweCApJyxcbiAgICAgICAgLy8gLy8gLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoIDcuNXB4ICk7XG4gICAgICAgIC8vIGJvcmRlclJhZGl1czogJzEwcHgnLFxuICAgICAgICAvLyBib3JkZXI6ICcxcHggc29saWQgcmdiYSggMjU1LCAyNTUsIDI1NSwgMC4xOCApJyxcblxuICAgIH0sXG4gICAgY2FyZEhlYWRlcjoge1xuICAgICAgICB3aWR0aDogXCJhdXRvXCIsXG4gICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICAgICAgbWFyZ2luTGVmdDogXCIyMHB4XCIsXG4gICAgICAgIG1hcmdpblJpZ2h0OiBcIjIwcHhcIixcbiAgICAgICAgbWFyZ2luVG9wOiBcIi00MHB4XCIsXG4gICAgICAgIHBhZGRpbmc6IFwiMjBweCAwXCIsXG4gICAgICAgIG1hcmdpbkJvdHRvbTogXCIxNXB4XCJcbiAgICB9LFxuICAgIHNvY2lhbEljb25zOiB7XG4gICAgICAgIG1heFdpZHRoOiBcIjI0cHhcIixcbiAgICAgICAgbWFyZ2luVG9wOiBcIjBcIixcbiAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICB0cmFuc2Zvcm06IFwibm9uZVwiLFxuICAgICAgICBsZWZ0OiBcIjBcIixcbiAgICAgICAgdG9wOiBcIjBcIixcbiAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgICAgICAgbGluZUhlaWdodDogXCI0MXB4XCIsXG4gICAgICAgIGZvbnRTaXplOiBcIjIwcHhcIlxuICAgIH0sXG4gICAgaWNvbnM6IHtcbiAgICAgICAgd2lkdGg6IFwiMjBweFwiLFxuICAgICAgICBoZWlnaHQ6IFwiMjBweFwiLFxuICAgICAgICBtYXJnaW5SaWdodDogXCIzcHhcIlxuICAgIH0sXG4gICAgaW1hZ2VDYXJkOiB7XG4gICAgICAgIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGUzZCg1cmVtLCAtMTByZW0sIDApXCJcbiAgICB9LFxuICAgIGRpdmlkZXI6IHtcbiAgICAgICAgbWFyZ2luVG9wOiBcIjMwcHhcIixcbiAgICAgICAgbWFyZ2luQm90dG9tOiBcIjBweFwiLFxuICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCJcbiAgICB9LFxuICAgIGNhcmRGb290ZXI6IHtcbiAgICAgICAgcGFkZGluZ1RvcDogXCIwcmVtXCIsXG4gICAgICAgIGJvcmRlcjogXCIwXCIsXG4gICAgICAgIGJvcmRlclJhZGl1czogXCI2cHhcIixcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyICFpbXBvcnRhbnRcIlxuICAgIH0sXG4gICAgc29jaWFsTGluZToge1xuICAgICAgICBtYXJnaW5Ub3A6IFwiMXJlbVwiLFxuICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgICAgIHBhZGRpbmc6IFwiMFwiXG4gICAgfSxcbiAgICBpbnB1dEljb25zQ29sb3I6IHtcbiAgICAgICAgY29sb3I6IFwiIzQ5NTA1N1wiXG4gICAgfSxcbiAgICBsb2dvSW1hZ2U6IHtcbiAgICAgICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZTNkKC02cmVtLCAtM3JlbSwgMClcIlxuICAgIH0sXG4gICAgbG9nb0xlZkltYWdlOiB7XG4gICAgICAgIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGUzZCgxMHJlbSwgLTEwcmVtLCAwKVwiXG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgYmVhY2hTdG9wUGFnZVN0eWxlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./assets/jss/nextjs-material-kit/pages/beachStop.js\n");

/***/ })

})