webpackHotUpdate_N_E("pages/beachstop",{

/***/ "./assets/jss/nextjs-material-kit/pages/beachStop.js":
/*!***********************************************************!*\
  !*** ./assets/jss/nextjs-material-kit/pages/beachStop.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Users_Fernz_Desktop_merchNextJs_ecom_merch_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assets/jss/nextjs-material-kit.js */ \"./assets/jss/nextjs-material-kit.js\");\n/* harmony import */ var assets_jss_nextjs_material_kit_imagesStyles_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! assets/jss/nextjs-material-kit/imagesStyles.js */ \"./assets/jss/nextjs-material-kit/imagesStyles.js\");\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_Fernz_Desktop_merchNextJs_ecom_merch_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\nvar beachStopPageStyle = _objectSpread(_objectSpread({\n  container: _objectSpread(_objectSpread({}, assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_1__[\"container\"]), {}, {\n    zIndex: \"2\",\n    position: \"relative\",\n    paddingTop: \"20vh\",\n    color: \"#3e2141\",\n    paddingBottom: \"200px\"\n  })\n}, assets_jss_nextjs_material_kit_imagesStyles_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]), {}, {\n  cardHidden: {\n    opacity: \"0\",\n    transform: \"translate3d(0, -60px, 0)\"\n  },\n  title: _objectSpread(_objectSpread({}, assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_1__[\"title\"]), {}, {\n    marginBottom: \"1rem\",\n    marginTop: \"-8rem\",\n    minHeight: \"32px\",\n    textDecoration: \"none\",\n    textAlign: 'center',\n    transform: \"translate3d(5rem, -2, 0)\"\n  }),\n  pageHeader: {\n    height: \"auto\",\n    display: \"inherit\",\n    position: \"relative\",\n    margin: \"0\",\n    padding: \"0\",\n    border: \"0\",\n    alignItems: \"center\",\n    \"&:before\": {\n      background: \"rgba(0, 0, 0, 0.5)\"\n    },\n    \"&:before,&:after\": {\n      position: \"absolute\",\n      zIndex: \"1\",\n      width: \"100%\",\n      height: \"100%\",\n      display: \"block\",\n      left: \"0\",\n      top: \"0\",\n      content: '\"\"'\n    },\n    \"& footer li a,& footer li a:hover,& footer li a:active\": {\n      color: \"#FFFFFF\"\n    },\n    \"& footer\": {\n      position: \"absolute\",\n      bottom: \"0\",\n      width: \"100%\"\n    }\n  },\n  form: {\n    margin: \"0\"\n  },\n  card: {\n    display: \"inline-block\",\n    position: \"relative\",\n    width: \"100%\",\n    margin: \"25px 0\",\n    boxShadow: \"0 1px 4px 0 rgba(0, 0, 0, 0.14)\",\n    borderRadius: \"10px\",\n    color: \"rgba(0, 0, 0, 0.87)\",\n    background: \"#fff\",\n    alignItems: \"center\",\n    verticalAlign: 'middle' // background: 'rgba( 245, 251, 195, 0.20 )',\n    // boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',\n    // backdropFilter: 'blur( 7.5px )',\n    // // -webkit-backdrop-filter: blur( 7.5px );\n    // borderRadius: '10px',\n    // border: '1px solid rgba( 255, 255, 255, 0.18 )',\n\n  },\n  cardHeader: {\n    width: \"auto\",\n    textAlign: \"center\",\n    marginLeft: \"20px\",\n    marginRight: \"20px\",\n    marginTop: \"-40px\",\n    padding: \"20px 0\",\n    marginBottom: \"15px\"\n  },\n  socialIcons: {\n    maxWidth: \"24px\",\n    marginTop: \"0\",\n    width: \"100%\",\n    transform: \"none\",\n    left: \"0\",\n    top: \"0\",\n    height: \"100%\",\n    lineHeight: \"41px\",\n    fontSize: \"20px\"\n  },\n  icons: {\n    width: \"20px\",\n    height: \"20px\",\n    marginRight: \"3px\"\n  },\n  imageCard: {\n    transform: \"translate3d(5rem, -10rem, 0)\"\n  },\n  divider: {\n    marginTop: \"30px\",\n    marginBottom: \"0px\",\n    textAlign: \"center\"\n  },\n  cardFooter: {\n    paddingTop: \"0rem\",\n    border: \"0\",\n    borderRadius: \"6px\",\n    justifyContent: \"center !important\"\n  },\n  socialLine: {\n    marginTop: \"1rem\",\n    textAlign: \"center\",\n    padding: \"0\"\n  },\n  inputIconsColor: {\n    color: \"#495057\"\n  },\n  logoImage: {\n    transform: \"translate3d(-6rem, -3rem, 0)\"\n  },\n  logoLeftImage: {\n    transform: \"translate3d(5rem, -10rem, 0)\"\n  }\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (beachStopPageStyle);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXNzZXRzL2pzcy9uZXh0anMtbWF0ZXJpYWwta2l0L3BhZ2VzL2JlYWNoU3RvcC5qcz9iYzQ2Il0sIm5hbWVzIjpbImJlYWNoU3RvcFBhZ2VTdHlsZSIsImNvbnRhaW5lciIsInpJbmRleCIsInBvc2l0aW9uIiwicGFkZGluZ1RvcCIsImNvbG9yIiwicGFkZGluZ0JvdHRvbSIsImltYWdlc1N0eWxlIiwiY2FyZEhpZGRlbiIsIm9wYWNpdHkiLCJ0cmFuc2Zvcm0iLCJ0aXRsZSIsIm1hcmdpbkJvdHRvbSIsIm1hcmdpblRvcCIsIm1pbkhlaWdodCIsInRleHREZWNvcmF0aW9uIiwidGV4dEFsaWduIiwicGFnZUhlYWRlciIsImhlaWdodCIsImRpc3BsYXkiLCJtYXJnaW4iLCJwYWRkaW5nIiwiYm9yZGVyIiwiYWxpZ25JdGVtcyIsImJhY2tncm91bmQiLCJ3aWR0aCIsImxlZnQiLCJ0b3AiLCJjb250ZW50IiwiYm90dG9tIiwiZm9ybSIsImNhcmQiLCJib3hTaGFkb3ciLCJib3JkZXJSYWRpdXMiLCJ2ZXJ0aWNhbEFsaWduIiwiY2FyZEhlYWRlciIsIm1hcmdpbkxlZnQiLCJtYXJnaW5SaWdodCIsInNvY2lhbEljb25zIiwibWF4V2lkdGgiLCJsaW5lSGVpZ2h0IiwiZm9udFNpemUiLCJpY29ucyIsImltYWdlQ2FyZCIsImRpdmlkZXIiLCJjYXJkRm9vdGVyIiwianVzdGlmeUNvbnRlbnQiLCJzb2NpYWxMaW5lIiwiaW5wdXRJY29uc0NvbG9yIiwibG9nb0ltYWdlIiwibG9nb0xlZnRJbWFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsa0JBQWtCO0FBQ3BCQyxXQUFTLGtDQUNGQSwyRUFERTtBQUVMQyxVQUFNLEVBQUUsR0FGSDtBQUdMQyxZQUFRLEVBQUUsVUFITDtBQUlMQyxjQUFVLEVBQUUsTUFKUDtBQUtMQyxTQUFLLEVBQUUsU0FMRjtBQU1MQyxpQkFBYSxFQUFFO0FBTlY7QUFEVyxHQVNqQkMsc0ZBVGlCO0FBVXBCQyxZQUFVLEVBQUU7QUFDUkMsV0FBTyxFQUFFLEdBREQ7QUFFUkMsYUFBUyxFQUFFO0FBRkgsR0FWUTtBQWNwQkMsT0FBSyxrQ0FDRUEsdUVBREY7QUFFREMsZ0JBQVksRUFBRSxNQUZiO0FBR0RDLGFBQVMsRUFBRSxPQUhWO0FBSURDLGFBQVMsRUFBRSxNQUpWO0FBS0RDLGtCQUFjLEVBQUUsTUFMZjtBQU1EQyxhQUFTLEVBQUUsUUFOVjtBQU9ETixhQUFTLEVBQUU7QUFQVixJQWRlO0FBd0JwQk8sWUFBVSxFQUFFO0FBRVJDLFVBQU0sRUFBRSxNQUZBO0FBR1JDLFdBQU8sRUFBRSxTQUhEO0FBSVJoQixZQUFRLEVBQUUsVUFKRjtBQUtSaUIsVUFBTSxFQUFFLEdBTEE7QUFNUkMsV0FBTyxFQUFFLEdBTkQ7QUFPUkMsVUFBTSxFQUFFLEdBUEE7QUFRUkMsY0FBVSxFQUFFLFFBUko7QUFTUixnQkFBWTtBQUNSQyxnQkFBVSxFQUFFO0FBREosS0FUSjtBQVlSLHdCQUFvQjtBQUNoQnJCLGNBQVEsRUFBRSxVQURNO0FBRWhCRCxZQUFNLEVBQUUsR0FGUTtBQUdoQnVCLFdBQUssRUFBRSxNQUhTO0FBSWhCUCxZQUFNLEVBQUUsTUFKUTtBQUtoQkMsYUFBTyxFQUFFLE9BTE87QUFNaEJPLFVBQUksRUFBRSxHQU5VO0FBT2hCQyxTQUFHLEVBQUUsR0FQVztBQVFoQkMsYUFBTyxFQUFFO0FBUk8sS0FaWjtBQXNCUiw4REFBMEQ7QUFDdER2QixXQUFLLEVBQUU7QUFEK0MsS0F0QmxEO0FBeUJSLGdCQUFZO0FBQ1JGLGNBQVEsRUFBRSxVQURGO0FBRVIwQixZQUFNLEVBQUUsR0FGQTtBQUdSSixXQUFLLEVBQUU7QUFIQztBQXpCSixHQXhCUTtBQXVEcEJLLE1BQUksRUFBRTtBQUNGVixVQUFNLEVBQUU7QUFETixHQXZEYztBQTBEcEJXLE1BQUksRUFBRTtBQUNGWixXQUFPLEVBQUUsY0FEUDtBQUVGaEIsWUFBUSxFQUFFLFVBRlI7QUFHRnNCLFNBQUssRUFBRSxNQUhMO0FBSUZMLFVBQU0sRUFBRSxRQUpOO0FBS0ZZLGFBQVMsRUFBRSxpQ0FMVDtBQU1GQyxnQkFBWSxFQUFFLE1BTlo7QUFPRjVCLFNBQUssRUFBRSxxQkFQTDtBQVFGbUIsY0FBVSxFQUFFLE1BUlY7QUFTRkQsY0FBVSxFQUFFLFFBVFY7QUFVRlcsaUJBQWEsRUFBRSxRQVZiLENBV0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQWhCRSxHQTFEYztBQTZFcEJDLFlBQVUsRUFBRTtBQUNSVixTQUFLLEVBQUUsTUFEQztBQUVSVCxhQUFTLEVBQUUsUUFGSDtBQUdSb0IsY0FBVSxFQUFFLE1BSEo7QUFJUkMsZUFBVyxFQUFFLE1BSkw7QUFLUnhCLGFBQVMsRUFBRSxPQUxIO0FBTVJRLFdBQU8sRUFBRSxRQU5EO0FBT1JULGdCQUFZLEVBQUU7QUFQTixHQTdFUTtBQXNGcEIwQixhQUFXLEVBQUU7QUFDVEMsWUFBUSxFQUFFLE1BREQ7QUFFVDFCLGFBQVMsRUFBRSxHQUZGO0FBR1RZLFNBQUssRUFBRSxNQUhFO0FBSVRmLGFBQVMsRUFBRSxNQUpGO0FBS1RnQixRQUFJLEVBQUUsR0FMRztBQU1UQyxPQUFHLEVBQUUsR0FOSTtBQU9UVCxVQUFNLEVBQUUsTUFQQztBQVFUc0IsY0FBVSxFQUFFLE1BUkg7QUFTVEMsWUFBUSxFQUFFO0FBVEQsR0F0Rk87QUFpR3BCQyxPQUFLLEVBQUU7QUFDSGpCLFNBQUssRUFBRSxNQURKO0FBRUhQLFVBQU0sRUFBRSxNQUZMO0FBR0htQixlQUFXLEVBQUU7QUFIVixHQWpHYTtBQXNHcEJNLFdBQVMsRUFBRTtBQUNQakMsYUFBUyxFQUFFO0FBREosR0F0R1M7QUF5R3BCa0MsU0FBTyxFQUFFO0FBQ0wvQixhQUFTLEVBQUUsTUFETjtBQUVMRCxnQkFBWSxFQUFFLEtBRlQ7QUFHTEksYUFBUyxFQUFFO0FBSE4sR0F6R1c7QUE4R3BCNkIsWUFBVSxFQUFFO0FBQ1J6QyxjQUFVLEVBQUUsTUFESjtBQUVSa0IsVUFBTSxFQUFFLEdBRkE7QUFHUlcsZ0JBQVksRUFBRSxLQUhOO0FBSVJhLGtCQUFjLEVBQUU7QUFKUixHQTlHUTtBQW9IcEJDLFlBQVUsRUFBRTtBQUNSbEMsYUFBUyxFQUFFLE1BREg7QUFFUkcsYUFBUyxFQUFFLFFBRkg7QUFHUkssV0FBTyxFQUFFO0FBSEQsR0FwSFE7QUF5SHBCMkIsaUJBQWUsRUFBRTtBQUNiM0MsU0FBSyxFQUFFO0FBRE0sR0F6SEc7QUE0SHBCNEMsV0FBUyxFQUFFO0FBQ1B2QyxhQUFTLEVBQUU7QUFESixHQTVIUztBQStIcEJ3QyxlQUFhLEVBQUU7QUFDWHhDLGFBQVMsRUFBRTtBQURBO0FBL0hLLEVBQXhCOztBQW9JZVYsaUZBQWYiLCJmaWxlIjoiLi9hc3NldHMvanNzL25leHRqcy1tYXRlcmlhbC1raXQvcGFnZXMvYmVhY2hTdG9wLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29udGFpbmVyLCB0aXRsZSB9IGZyb20gXCJhc3NldHMvanNzL25leHRqcy1tYXRlcmlhbC1raXQuanNcIjtcbmltcG9ydCBpbWFnZXNTdHlsZSBmcm9tIFwiYXNzZXRzL2pzcy9uZXh0anMtbWF0ZXJpYWwta2l0L2ltYWdlc1N0eWxlcy5qc1wiO1xuXG5jb25zdCBiZWFjaFN0b3BQYWdlU3R5bGUgPSB7XG4gICAgY29udGFpbmVyOiB7XG4gICAgICAgIC4uLmNvbnRhaW5lcixcbiAgICAgICAgekluZGV4OiBcIjJcIixcbiAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICAgICAgcGFkZGluZ1RvcDogXCIyMHZoXCIsXG4gICAgICAgIGNvbG9yOiBcIiMzZTIxNDFcIixcbiAgICAgICAgcGFkZGluZ0JvdHRvbTogXCIyMDBweFwiLFxuICAgIH0sXG4gICAgLi4uaW1hZ2VzU3R5bGUsXG4gICAgY2FyZEhpZGRlbjoge1xuICAgICAgICBvcGFjaXR5OiBcIjBcIixcbiAgICAgICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZTNkKDAsIC02MHB4LCAwKVwiXG4gICAgfSxcbiAgICB0aXRsZToge1xuICAgICAgICAuLi50aXRsZSxcbiAgICAgICAgbWFyZ2luQm90dG9tOiBcIjFyZW1cIixcbiAgICAgICAgbWFyZ2luVG9wOiBcIi04cmVtXCIsXG4gICAgICAgIG1pbkhlaWdodDogXCIzMnB4XCIsXG4gICAgICAgIHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIixcbiAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZTNkKDVyZW0sIC0yLCAwKVwiXG5cbiAgICB9LFxuICAgIHBhZ2VIZWFkZXI6IHtcblxuICAgICAgICBoZWlnaHQ6IFwiYXV0b1wiLFxuICAgICAgICBkaXNwbGF5OiBcImluaGVyaXRcIixcbiAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICAgICAgbWFyZ2luOiBcIjBcIixcbiAgICAgICAgcGFkZGluZzogXCIwXCIsXG4gICAgICAgIGJvcmRlcjogXCIwXCIsXG4gICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgIFwiJjpiZWZvcmVcIjoge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogXCJyZ2JhKDAsIDAsIDAsIDAuNSlcIlxuICAgICAgICB9LFxuICAgICAgICBcIiY6YmVmb3JlLCY6YWZ0ZXJcIjoge1xuICAgICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgICAgICAgIHpJbmRleDogXCIxXCIsXG4gICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxuICAgICAgICAgICAgZGlzcGxheTogXCJibG9ja1wiLFxuICAgICAgICAgICAgbGVmdDogXCIwXCIsXG4gICAgICAgICAgICB0b3A6IFwiMFwiLFxuICAgICAgICAgICAgY29udGVudDogJ1wiXCInXG4gICAgICAgIH0sXG4gICAgICAgIFwiJiBmb290ZXIgbGkgYSwmIGZvb3RlciBsaSBhOmhvdmVyLCYgZm9vdGVyIGxpIGE6YWN0aXZlXCI6IHtcbiAgICAgICAgICAgIGNvbG9yOiBcIiNGRkZGRkZcIlxuICAgICAgICB9LFxuICAgICAgICBcIiYgZm9vdGVyXCI6IHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICAgICAgICBib3R0b206IFwiMFwiLFxuICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGZvcm06IHtcbiAgICAgICAgbWFyZ2luOiBcIjBcIlxuICAgIH0sXG4gICAgY2FyZDoge1xuICAgICAgICBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxuICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgIG1hcmdpbjogXCIyNXB4IDBcIixcbiAgICAgICAgYm94U2hhZG93OiBcIjAgMXB4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC4xNClcIixcbiAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjEwcHhcIixcbiAgICAgICAgY29sb3I6IFwicmdiYSgwLCAwLCAwLCAwLjg3KVwiLFxuICAgICAgICBiYWNrZ3JvdW5kOiBcIiNmZmZcIixcbiAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICAgICAgdmVydGljYWxBbGlnbjogJ21pZGRsZScsXG4gICAgICAgIC8vIGJhY2tncm91bmQ6ICdyZ2JhKCAyNDUsIDI1MSwgMTk1LCAwLjIwICknLFxuICAgICAgICAvLyBib3hTaGFkb3c6ICcwIDhweCAzMnB4IDAgcmdiYSggMzEsIDM4LCAxMzUsIDAuMzcgKScsXG4gICAgICAgIC8vIGJhY2tkcm9wRmlsdGVyOiAnYmx1ciggNy41cHggKScsXG4gICAgICAgIC8vIC8vIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA3LjVweCApO1xuICAgICAgICAvLyBib3JkZXJSYWRpdXM6ICcxMHB4JyxcbiAgICAgICAgLy8gYm9yZGVyOiAnMXB4IHNvbGlkIHJnYmEoIDI1NSwgMjU1LCAyNTUsIDAuMTggKScsXG5cbiAgICB9LFxuICAgIGNhcmRIZWFkZXI6IHtcbiAgICAgICAgd2lkdGg6IFwiYXV0b1wiLFxuICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgICAgIG1hcmdpbkxlZnQ6IFwiMjBweFwiLFxuICAgICAgICBtYXJnaW5SaWdodDogXCIyMHB4XCIsXG4gICAgICAgIG1hcmdpblRvcDogXCItNDBweFwiLFxuICAgICAgICBwYWRkaW5nOiBcIjIwcHggMFwiLFxuICAgICAgICBtYXJnaW5Cb3R0b206IFwiMTVweFwiXG4gICAgfSxcbiAgICBzb2NpYWxJY29uczoge1xuICAgICAgICBtYXhXaWR0aDogXCIyNHB4XCIsXG4gICAgICAgIG1hcmdpblRvcDogXCIwXCIsXG4gICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgdHJhbnNmb3JtOiBcIm5vbmVcIixcbiAgICAgICAgbGVmdDogXCIwXCIsXG4gICAgICAgIHRvcDogXCIwXCIsXG4gICAgICAgIGhlaWdodDogXCIxMDAlXCIsXG4gICAgICAgIGxpbmVIZWlnaHQ6IFwiNDFweFwiLFxuICAgICAgICBmb250U2l6ZTogXCIyMHB4XCJcbiAgICB9LFxuICAgIGljb25zOiB7XG4gICAgICAgIHdpZHRoOiBcIjIwcHhcIixcbiAgICAgICAgaGVpZ2h0OiBcIjIwcHhcIixcbiAgICAgICAgbWFyZ2luUmlnaHQ6IFwiM3B4XCJcbiAgICB9LFxuICAgIGltYWdlQ2FyZDoge1xuICAgICAgICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlM2QoNXJlbSwgLTEwcmVtLCAwKVwiXG4gICAgfSxcbiAgICBkaXZpZGVyOiB7XG4gICAgICAgIG1hcmdpblRvcDogXCIzMHB4XCIsXG4gICAgICAgIG1hcmdpbkJvdHRvbTogXCIwcHhcIixcbiAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiXG4gICAgfSxcbiAgICBjYXJkRm9vdGVyOiB7XG4gICAgICAgIHBhZGRpbmdUb3A6IFwiMHJlbVwiLFxuICAgICAgICBib3JkZXI6IFwiMFwiLFxuICAgICAgICBib3JkZXJSYWRpdXM6IFwiNnB4XCIsXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlciAhaW1wb3J0YW50XCJcbiAgICB9LFxuICAgIHNvY2lhbExpbmU6IHtcbiAgICAgICAgbWFyZ2luVG9wOiBcIjFyZW1cIixcbiAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICAgICAgICBwYWRkaW5nOiBcIjBcIlxuICAgIH0sXG4gICAgaW5wdXRJY29uc0NvbG9yOiB7XG4gICAgICAgIGNvbG9yOiBcIiM0OTUwNTdcIlxuICAgIH0sXG4gICAgbG9nb0ltYWdlOiB7XG4gICAgICAgIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGUzZCgtNnJlbSwgLTNyZW0sIDApXCJcbiAgICB9LFxuICAgIGxvZ29MZWZ0SW1hZ2U6IHtcbiAgICAgICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZTNkKDVyZW0sIC0xMHJlbSwgMClcIlxuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGJlYWNoU3RvcFBhZ2VTdHlsZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./assets/jss/nextjs-material-kit/pages/beachStop.js\n");

/***/ })

})