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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Profile; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hot-toast */ \"(app-pages-browser)/./node_modules/react-hot-toast/dist/index.mjs\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Profile() {\n    _s();\n    const [userData, setUserData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchUserData = async ()=>{\n            const token = localStorage.getItem(\"token\");\n            console.log(token);\n            if (!token) {\n                react_hot_toast__WEBPACK_IMPORTED_MODULE_2__[\"default\"].error(\"No token found, please login\");\n                router.push(\"/auth/login\");\n                return;\n            }\n            try {\n                const res = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"http://localhost:4000/api/v1/auth/user-details\", {\n                    headers: {\n                        \"Authorization\": token\n                    }\n                });\n                console.log(res);\n                if (res.data.success) {\n                    setUserData(res.data.data);\n                } else {\n                    react_hot_toast__WEBPACK_IMPORTED_MODULE_2__[\"default\"].error(\"Failed to fetch user data\");\n                }\n            } catch (err) {\n                react_hot_toast__WEBPACK_IMPORTED_MODULE_2__[\"default\"].error(\"An error occurred while fetching user data\");\n                console.error(err);\n            }\n        };\n        fetchUserData();\n    }, []);\n    if (!userData) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/Users/rahuldas/Desktop/assignment/client/src/app/auth/profile/page.js\",\n            lineNumber: 44,\n            columnNumber: 12\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full h-full\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-black\",\n                children: [\n                    \"Welcome, \",\n                    userData.name\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/rahuldas/Desktop/assignment/client/src/app/auth/profile/page.js\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-black\",\n                children: [\n                    \"Email: \",\n                    userData.email\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/rahuldas/Desktop/assignment/client/src/app/auth/profile/page.js\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/rahuldas/Desktop/assignment/client/src/app/auth/profile/page.js\",\n        lineNumber: 48,\n        columnNumber: 5\n    }, this);\n}\n_s(Profile, \"uaVuYEPQrbURj2RmTwsPUMjzJxU=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Profile;\nvar _c;\n$RefreshReg$(_c, \"Profile\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvYXV0aC9wcm9maWxlL3BhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQ21EO0FBQ3pCO0FBQ1U7QUFDUTtBQUU3QixTQUFTTTs7SUFFdEIsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdOLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU1PLFNBQVNKLDBEQUFTQTtJQUV4QkosZ0RBQVNBLENBQUM7UUFDUixNQUFNUyxnQkFBZ0I7WUFDcEIsTUFBTUMsUUFBUUMsYUFBYUMsT0FBTyxDQUFDO1lBQ25DQyxRQUFRQyxHQUFHLENBQUNKO1lBQ1osSUFBSSxDQUFDQSxPQUFPO2dCQUNWUCx1REFBS0EsQ0FBQ1ksS0FBSyxDQUFDO2dCQUNaUCxPQUFPUSxJQUFJLENBQUM7Z0JBQ1o7WUFDRjtZQUVBLElBQUk7Z0JBQ0YsTUFBTUMsTUFBTSxNQUFNZiw2Q0FBS0EsQ0FBQ2dCLEdBQUcsQ0FBQyxrREFBa0Q7b0JBQzVFQyxTQUFTO3dCQUNQLGlCQUFpQlQ7b0JBQ25CO2dCQUNGO2dCQUNBRyxRQUFRQyxHQUFHLENBQUNHO2dCQUNaLElBQUlBLElBQUlHLElBQUksQ0FBQ0MsT0FBTyxFQUFFO29CQUNwQmQsWUFBWVUsSUFBSUcsSUFBSSxDQUFDQSxJQUFJO2dCQUMzQixPQUFPO29CQUNMakIsdURBQUtBLENBQUNZLEtBQUssQ0FBQztnQkFDZDtZQUNGLEVBQUUsT0FBT08sS0FBSztnQkFDWm5CLHVEQUFLQSxDQUFDWSxLQUFLLENBQUM7Z0JBQ1pGLFFBQVFFLEtBQUssQ0FBQ087WUFDaEI7UUFDRjtRQUVBYjtJQUNGLEdBQUcsRUFBRTtJQUVMLElBQUksQ0FBQ0gsVUFBVTtRQUNiLHFCQUFPLDhEQUFDaUI7c0JBQUk7Ozs7OztJQUNkO0lBRUEscUJBQ0UsOERBQUNBO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDQztnQkFBR0QsV0FBVTs7b0JBQWE7b0JBQVVsQixTQUFTb0IsSUFBSTs7Ozs7OzswQkFDbEQsOERBQUNDO2dCQUFFSCxXQUFVOztvQkFBYTtvQkFBUWxCLFNBQVNzQixLQUFLOzs7Ozs7Ozs7Ozs7O0FBSXREO0dBL0N3QnZCOztRQUdQRCxzREFBU0E7OztLQUhGQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2F1dGgvcHJvZmlsZS9wYWdlLmpzP2M5MTEiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgdG9hc3QgZnJvbSAncmVhY3QtaG90LXRvYXN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvbmF2aWdhdGlvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2ZpbGUoKSB7XG5cbiAgY29uc3QgW3VzZXJEYXRhLCBzZXRVc2VyRGF0YV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBmZXRjaFVzZXJEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKTtcbiAgICAgIGNvbnNvbGUubG9nKHRva2VuKVxuICAgICAgaWYgKCF0b2tlbikge1xuICAgICAgICB0b2FzdC5lcnJvcignTm8gdG9rZW4gZm91bmQsIHBsZWFzZSBsb2dpbicpO1xuICAgICAgICByb3V0ZXIucHVzaCgnL2F1dGgvbG9naW4nKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9hcGkvdjEvYXV0aC91c2VyLWRldGFpbHMnLCB7XG4gICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiB0b2tlbixcbiAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgICAgY29uc29sZS5sb2cocmVzKVxuICAgICAgICBpZiAocmVzLmRhdGEuc3VjY2Vzcykge1xuICAgICAgICAgIHNldFVzZXJEYXRhKHJlcy5kYXRhLmRhdGEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRvYXN0LmVycm9yKCdGYWlsZWQgdG8gZmV0Y2ggdXNlciBkYXRhJyk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICB0b2FzdC5lcnJvcignQW4gZXJyb3Igb2NjdXJyZWQgd2hpbGUgZmV0Y2hpbmcgdXNlciBkYXRhJyk7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZmV0Y2hVc2VyRGF0YSgpO1xuICB9LCBbXSk7XG5cbiAgaWYgKCF1c2VyRGF0YSkge1xuICAgIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj47XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSd3LWZ1bGwgaC1mdWxsJz5cbiAgICAgIDxoMSBjbGFzc05hbWU9J3RleHQtYmxhY2snPldlbGNvbWUsIHt1c2VyRGF0YS5uYW1lfTwvaDE+XG4gICAgICA8cCBjbGFzc05hbWU9J3RleHQtYmxhY2snPkVtYWlsOiB7dXNlckRhdGEuZW1haWx9PC9wPlxuICAgICAgey8qIFJlbmRlciBvdGhlciB1c2VyIGRhdGEgYXMgbmVlZGVkICovfVxuICAgIDwvZGl2PlxuICApO1xufVxuXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImF4aW9zIiwidG9hc3QiLCJ1c2VSb3V0ZXIiLCJQcm9maWxlIiwidXNlckRhdGEiLCJzZXRVc2VyRGF0YSIsInJvdXRlciIsImZldGNoVXNlckRhdGEiLCJ0b2tlbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJwdXNoIiwicmVzIiwiZ2V0IiwiaGVhZGVycyIsImRhdGEiLCJzdWNjZXNzIiwiZXJyIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJuYW1lIiwicCIsImVtYWlsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/auth/profile/page.js\n"));

/***/ })

});