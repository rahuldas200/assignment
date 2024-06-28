"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/auth/profile/page",{

/***/ "(app-pages-browser)/./src/app/auth/profile/page.js":
/*!**************************************!*\
  !*** ./src/app/auth/profile/page.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Profile; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hot-toast */ \"(app-pages-browser)/./node_modules/react-hot-toast/dist/index.mjs\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Profile() {\n    _s();\n    const [userData, setUserData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchUserData = async ()=>{\n            const token = localStorage.getItem(\"token\");\n            console.log(token);\n            if (!token) {\n                react_hot_toast__WEBPACK_IMPORTED_MODULE_2__[\"default\"].error(\"No token found, please login\");\n                router.push(\"/auth/login\");\n                return;\n            }\n            try {\n                const res = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"http://localhost:4000/api/v1/auth/user-details\", {\n                    headers: {\n                        \"Authorization\": token\n                    }\n                });\n                console.log(res);\n                if (res.data.success) {\n                    setUserData(res.data.data);\n                } else {\n                    react_hot_toast__WEBPACK_IMPORTED_MODULE_2__[\"default\"].error(\"Failed to fetch user data\");\n                }\n            } catch (err) {\n                react_hot_toast__WEBPACK_IMPORTED_MODULE_2__[\"default\"].error(\"An error occurred while fetching user data\");\n                console.error(err);\n            }\n        };\n        fetchUserData();\n    }, []);\n    if (!userData) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/Users/rahuldas/Desktop/assignment/client/src/app/auth/profile/page.js\",\n            lineNumber: 44,\n            columnNumber: 12\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full h-full flex justify-center items-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"diV\", {}, void 0, false, {\n            fileName: \"/Users/rahuldas/Desktop/assignment/client/src/app/auth/profile/page.js\",\n            lineNumber: 49,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/rahuldas/Desktop/assignment/client/src/app/auth/profile/page.js\",\n        lineNumber: 48,\n        columnNumber: 5\n    }, this);\n}\n_s(Profile, \"uaVuYEPQrbURj2RmTwsPUMjzJxU=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Profile;\nvar _c;\n$RefreshReg$(_c, \"Profile\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvYXV0aC9wcm9maWxlL3BhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQ21EO0FBQ3pCO0FBQ1U7QUFDUTtBQUU3QixTQUFTTTs7SUFFdEIsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdOLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU1PLFNBQVNKLDBEQUFTQTtJQUV4QkosZ0RBQVNBLENBQUM7UUFDUixNQUFNUyxnQkFBZ0I7WUFDcEIsTUFBTUMsUUFBUUMsYUFBYUMsT0FBTyxDQUFDO1lBQ25DQyxRQUFRQyxHQUFHLENBQUNKO1lBQ1osSUFBSSxDQUFDQSxPQUFPO2dCQUNWUCx1REFBS0EsQ0FBQ1ksS0FBSyxDQUFDO2dCQUNaUCxPQUFPUSxJQUFJLENBQUM7Z0JBQ1o7WUFDRjtZQUVBLElBQUk7Z0JBQ0YsTUFBTUMsTUFBTSxNQUFNZiw2Q0FBS0EsQ0FBQ2dCLEdBQUcsQ0FBQyxrREFBa0Q7b0JBQzVFQyxTQUFTO3dCQUNQLGlCQUFpQlQ7b0JBQ25CO2dCQUNGO2dCQUNBRyxRQUFRQyxHQUFHLENBQUNHO2dCQUNaLElBQUlBLElBQUlHLElBQUksQ0FBQ0MsT0FBTyxFQUFFO29CQUNwQmQsWUFBWVUsSUFBSUcsSUFBSSxDQUFDQSxJQUFJO2dCQUMzQixPQUFPO29CQUNMakIsdURBQUtBLENBQUNZLEtBQUssQ0FBQztnQkFDZDtZQUNGLEVBQUUsT0FBT08sS0FBSztnQkFDWm5CLHVEQUFLQSxDQUFDWSxLQUFLLENBQUM7Z0JBQ1pGLFFBQVFFLEtBQUssQ0FBQ087WUFDaEI7UUFDRjtRQUVBYjtJQUNGLEdBQUcsRUFBRTtJQUVMLElBQUksQ0FBQ0gsVUFBVTtRQUNiLHFCQUFPLDhEQUFDaUI7c0JBQUk7Ozs7OztJQUNkO0lBRUEscUJBQ0UsOERBQUNBO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNDOzs7Ozs7Ozs7O0FBS1A7R0EvQ3dCcEI7O1FBR1BELHNEQUFTQTs7O0tBSEZDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvYXV0aC9wcm9maWxlL3BhZ2UuanM/YzkxMSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB0b2FzdCBmcm9tICdyZWFjdC1ob3QtdG9hc3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZmlsZSgpIHtcblxuICBjb25zdCBbdXNlckRhdGEsIHNldFVzZXJEYXRhXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGZldGNoVXNlckRhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpO1xuICAgICAgY29uc29sZS5sb2codG9rZW4pXG4gICAgICBpZiAoIXRva2VuKSB7XG4gICAgICAgIHRvYXN0LmVycm9yKCdObyB0b2tlbiBmb3VuZCwgcGxlYXNlIGxvZ2luJyk7XG4gICAgICAgIHJvdXRlci5wdXNoKCcvYXV0aC9sb2dpbicpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldCgnaHR0cDovL2xvY2FsaG9zdDo0MDAwL2FwaS92MS9hdXRoL3VzZXItZGV0YWlscycsIHtcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IHRva2VuLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMpXG4gICAgICAgIGlmIChyZXMuZGF0YS5zdWNjZXNzKSB7XG4gICAgICAgICAgc2V0VXNlckRhdGEocmVzLmRhdGEuZGF0YSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdG9hc3QuZXJyb3IoJ0ZhaWxlZCB0byBmZXRjaCB1c2VyIGRhdGEnKTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHRvYXN0LmVycm9yKCdBbiBlcnJvciBvY2N1cnJlZCB3aGlsZSBmZXRjaGluZyB1c2VyIGRhdGEnKTtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBmZXRjaFVzZXJEYXRhKCk7XG4gIH0sIFtdKTtcblxuICBpZiAoIXVzZXJEYXRhKSB7XG4gICAgcmV0dXJuIDxkaXY+TG9hZGluZy4uLjwvZGl2PjtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J3ctZnVsbCBoLWZ1bGwgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXInPlxuICAgICAgPGRpVj5cbiAgICAgICAgXG4gICAgICA8L2RpVj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJheGlvcyIsInRvYXN0IiwidXNlUm91dGVyIiwiUHJvZmlsZSIsInVzZXJEYXRhIiwic2V0VXNlckRhdGEiLCJyb3V0ZXIiLCJmZXRjaFVzZXJEYXRhIiwidG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwicHVzaCIsInJlcyIsImdldCIsImhlYWRlcnMiLCJkYXRhIiwic3VjY2VzcyIsImVyciIsImRpdiIsImNsYXNzTmFtZSIsImRpViJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/auth/profile/page.js\n"));

/***/ })

});