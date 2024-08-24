"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/auth/[...nextauth]/route";
exports.ids = ["app/api/auth/[...nextauth]/route"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "node:buffer":
/*!******************************!*\
  !*** external "node:buffer" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("node:buffer");

/***/ }),

/***/ "node:crypto":
/*!******************************!*\
  !*** external "node:crypto" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("node:crypto");

/***/ }),

/***/ "node:util":
/*!****************************!*\
  !*** external "node:util" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("node:util");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=C%3A%5CUsers%5Cvivek%5COneDrive%5CDesktop%5CArohiSoftwares.com%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cvivek%5COneDrive%5CDesktop%5CArohiSoftwares.com&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=C%3A%5CUsers%5Cvivek%5COneDrive%5CDesktop%5CArohiSoftwares.com%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cvivek%5COneDrive%5CDesktop%5CArohiSoftwares.com&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_vivek_OneDrive_Desktop_ArohiSoftwares_com_src_app_api_auth_nextauth_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/auth/[...nextauth]/route.ts */ \"(rsc)/./src/app/api/auth/[...nextauth]/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/[...nextauth]/route\",\n        pathname: \"/api/auth/[...nextauth]\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/[...nextauth]/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\vivek\\\\OneDrive\\\\Desktop\\\\ArohiSoftwares.com\\\\src\\\\app\\\\api\\\\auth\\\\[...nextauth]\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_vivek_OneDrive_Desktop_ArohiSoftwares_com_src_app_api_auth_nextauth_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/auth/[...nextauth]/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZhdXRoJTJGJTVCLi4ubmV4dGF1dGglNUQlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUN2aXZlayU1Q09uZURyaXZlJTVDRGVza3RvcCU1Q0Fyb2hpU29mdHdhcmVzLmNvbSU1Q3NyYyU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9QyUzQSU1Q1VzZXJzJTVDdml2ZWslNUNPbmVEcml2ZSU1Q0Rlc2t0b3AlNUNBcm9oaVNvZnR3YXJlcy5jb20maXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQ3FEO0FBQ2xJO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaUVBQWlFO0FBQ3pFO0FBQ0E7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDdUg7O0FBRXZIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXJvaGlzb2Z0d2FyZS8/OGRmMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFx2aXZla1xcXFxPbmVEcml2ZVxcXFxEZXNrdG9wXFxcXEFyb2hpU29mdHdhcmVzLmNvbVxcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFxhdXRoXFxcXFsuLi5uZXh0YXV0aF1cXFxccm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2F1dGgvWy4uLm5leHRhdXRoXVwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiQzpcXFxcVXNlcnNcXFxcdml2ZWtcXFxcT25lRHJpdmVcXFxcRGVza3RvcFxcXFxBcm9oaVNvZnR3YXJlcy5jb21cXFxcc3JjXFxcXGFwcFxcXFxhcGlcXFxcYXV0aFxcXFxbLi4ubmV4dGF1dGhdXFxcXHJvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgb3JpZ2luYWxQYXRobmFtZSwgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=C%3A%5CUsers%5Cvivek%5COneDrive%5CDesktop%5CArohiSoftwares.com%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cvivek%5COneDrive%5CDesktop%5CArohiSoftwares.com&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/auth/[...nextauth]/route.ts":
/*!*************************************************!*\
  !*** ./src/app/api/auth/[...nextauth]/route.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/auth */ \"(rsc)/./src/auth.ts\");\n\nconst { GET, POST } = _auth__WEBPACK_IMPORTED_MODULE_0__.handlers;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWtDO0FBRTNCLE1BQU0sRUFBRUMsR0FBRyxFQUFFQyxJQUFJLEVBQUUsR0FBR0YsMkNBQVFBLENBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcm9oaXNvZnR3YXJlLy4vc3JjL2FwcC9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlLnRzPzAwOTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaGFuZGxlcnMgfSBmcm9tIFwiQC9hdXRoXCI7XHJcblxyXG5leHBvcnQgY29uc3QgeyBHRVQsIFBPU1QgfSA9IGhhbmRsZXJzIl0sIm5hbWVzIjpbImhhbmRsZXJzIiwiR0VUIiwiUE9TVCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/auth/[...nextauth]/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/auth.ts":
/*!*********************!*\
  !*** ./src/auth.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   auth: () => (/* binding */ auth),\n/* harmony export */   handlers: () => (/* binding */ handlers),\n/* harmony export */   signIn: () => (/* binding */ signIn),\n/* harmony export */   signOut: () => (/* binding */ signOut)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/google */ \"(rsc)/./node_modules/next-auth/providers/google.js\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/./node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/providers/github */ \"(rsc)/./node_modules/next-auth/providers/github.js\");\n/* harmony import */ var _models_userModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./models/userModel */ \"(rsc)/./src/models/userModel.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bcryptjs */ \"(rsc)/./node_modules/bcryptjs/index.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils */ \"(rsc)/./src/utils.ts\");\n\n\n\n\n\n\n\nconst { handlers, signIn, signOut, auth } = (0,next_auth__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    providers: [\n        (0,next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n            clientId: process.env.GOOGLE_CLIENT_ID,\n            clientSecret: process.env.GOOGLE_CLIENT_SECRET\n        }),\n        (0,next_auth_providers_github__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\n            clientId: process.env.GITHUB_ID,\n            clientSecret: process.env.GITHUB_SECRET\n        }),\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n            name: \"Credentials\",\n            credentials: {\n                name: {\n                    label: \"Name\",\n                    type: \"name\"\n                },\n                email: {\n                    label: \"Email\",\n                    type: \"email\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                }\n            },\n            authorize: async (credentials)=>{\n                const email = credentials.email;\n                const password = credentials.password;\n                if (!email || !password) throw new next_auth__WEBPACK_IMPORTED_MODULE_0__.CredentialsSignin(\"Signup First\");\n                // Connection with database here\n                await (0,_utils__WEBPACK_IMPORTED_MODULE_6__.connect)();\n                const user = await _models_userModel__WEBPACK_IMPORTED_MODULE_4__.User.findOne({\n                    email\n                }).select(\"+password\");\n                if (!user) throw new next_auth__WEBPACK_IMPORTED_MODULE_0__.CredentialsSignin(\"Invalid User\");\n                if (!user.password) throw new next_auth__WEBPACK_IMPORTED_MODULE_0__.CredentialsSignin(\"Invalid User\");\n                const isMatch = await (0,bcryptjs__WEBPACK_IMPORTED_MODULE_5__.compare)(password, user.password);\n                if (!isMatch) throw new next_auth__WEBPACK_IMPORTED_MODULE_0__.CredentialsSignin(\"Invalid User\");\n                return {\n                    name: user.name,\n                    email: user.email,\n                    id: user._id\n                };\n            }\n        })\n    ],\n    pages: {\n        signIn: \"/login\"\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXV0aC50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBd0Q7QUFDQTtBQUNTO0FBQ1Q7QUFDZDtBQUNQO0FBQ0Q7QUFFM0IsTUFBTSxFQUFFUSxRQUFRLEVBQUVDLE1BQU0sRUFBRUMsT0FBTyxFQUFFQyxJQUFJLEVBQUUsR0FBR1gscURBQVFBLENBQUM7SUFDMURZLFdBQVc7UUFDVFYsc0VBQWNBLENBQUM7WUFDYlcsVUFBVUMsUUFBUUMsR0FBRyxDQUFDQyxnQkFBZ0I7WUFDdENDLGNBQWNILFFBQVFDLEdBQUcsQ0FBQ0csb0JBQW9CO1FBQ2hEO1FBQ0FkLHNFQUFjQSxDQUFDO1lBQ2JTLFVBQVVDLFFBQVFDLEdBQUcsQ0FBQ0ksU0FBUztZQUMvQkYsY0FBY0gsUUFBUUMsR0FBRyxDQUFDSyxhQUFhO1FBQ3pDO1FBQ0FqQiwyRUFBa0JBLENBQUM7WUFDakJrQixNQUFNO1lBQ05DLGFBQWE7Z0JBQ1hELE1BQU07b0JBQ0pFLE9BQU87b0JBQ1BDLE1BQU07Z0JBQ1I7Z0JBQ0FDLE9BQU87b0JBQ0xGLE9BQU87b0JBQ1BDLE1BQU07Z0JBQ1I7Z0JBQ0FFLFVBQVU7b0JBQ1JILE9BQU87b0JBQ1BDLE1BQU07Z0JBQ1I7WUFDRjtZQUNBRyxXQUFXLE9BQU9MO2dCQUNoQixNQUFNRyxRQUFRSCxZQUFZRyxLQUFLO2dCQUMvQixNQUFNQyxXQUFXSixZQUFZSSxRQUFRO2dCQUVyQyxJQUFJLENBQUNELFNBQVMsQ0FBQ0MsVUFBVSxNQUFNLElBQUl6Qix3REFBaUJBLENBQUM7Z0JBRXJELGdDQUFnQztnQkFDaEMsTUFBTU0sK0NBQU9BO2dCQUViLE1BQU1xQixPQUFPLE1BQU12QixtREFBSUEsQ0FBQ3dCLE9BQU8sQ0FBQztvQkFBRUo7Z0JBQU0sR0FBR0ssTUFBTSxDQUFDO2dCQUVsRCxJQUFJLENBQUNGLE1BQU0sTUFBTSxJQUFJM0Isd0RBQWlCQSxDQUFDO2dCQUV2QyxJQUFJLENBQUMyQixLQUFLRixRQUFRLEVBQUUsTUFBTSxJQUFJekIsd0RBQWlCQSxDQUFDO2dCQUVoRCxNQUFNOEIsVUFBVSxNQUFNekIsaURBQU9BLENBQUNvQixVQUFVRSxLQUFLRixRQUFRO2dCQUVyRCxJQUFJLENBQUNLLFNBQVMsTUFBTSxJQUFJOUIsd0RBQWlCQSxDQUFDO2dCQUcxQyxPQUFPO29CQUFFb0IsTUFBTU8sS0FBS1AsSUFBSTtvQkFBRUksT0FBT0csS0FBS0gsS0FBSztvQkFBRU8sSUFBSUosS0FBS0ssR0FBRztnQkFBQztZQUM1RDtRQUNGO0tBQ0Q7SUFDREMsT0FBTztRQUNMekIsUUFBUTtJQUNWO0FBQ0YsR0FBRyIsInNvdXJjZXMiOlsid2VicGFjazovL2Fyb2hpc29mdHdhcmUvLi9zcmMvYXV0aC50cz82MmQ5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOZXh0QXV0aCwgeyBDcmVkZW50aWFsc1NpZ25pbiB9IGZyb20gXCJuZXh0LWF1dGhcIjtcclxuaW1wb3J0IEdvb2dsZVByb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2dvb2dsZVwiO1xyXG5pbXBvcnQgQ3JlZGVudGlhbFByb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2NyZWRlbnRpYWxzXCI7XHJcbmltcG9ydCBHaXRodWJQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9naXRodWJcIjtcclxuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuL21vZGVscy91c2VyTW9kZWxcIjtcclxuaW1wb3J0IHsgY29tcGFyZSB9IGZyb20gXCJiY3J5cHRqc1wiO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcIi4vdXRpbHNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCB7IGhhbmRsZXJzLCBzaWduSW4sIHNpZ25PdXQsIGF1dGggfSA9IE5leHRBdXRoKHtcclxuICBwcm92aWRlcnM6IFtcclxuICAgIEdvb2dsZVByb3ZpZGVyKHtcclxuICAgICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LkdPT0dMRV9DTElFTlRfSUQsXHJcbiAgICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuR09PR0xFX0NMSUVOVF9TRUNSRVQsXHJcbiAgICB9KSxcclxuICAgIEdpdGh1YlByb3ZpZGVyKHtcclxuICAgICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LkdJVEhVQl9JRCxcclxuICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5HSVRIVUJfU0VDUkVULFxyXG4gICAgfSksXHJcbiAgICBDcmVkZW50aWFsUHJvdmlkZXIoe1xyXG4gICAgICBuYW1lOiBcIkNyZWRlbnRpYWxzXCIsXHJcbiAgICAgIGNyZWRlbnRpYWxzOiB7XHJcbiAgICAgICAgbmFtZToge1xyXG4gICAgICAgICAgbGFiZWw6IFwiTmFtZVwiLFxyXG4gICAgICAgICAgdHlwZTogXCJuYW1lXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbWFpbDoge1xyXG4gICAgICAgICAgbGFiZWw6IFwiRW1haWxcIixcclxuICAgICAgICAgIHR5cGU6IFwiZW1haWxcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHBhc3N3b3JkOiB7XHJcbiAgICAgICAgICBsYWJlbDogXCJQYXNzd29yZFwiLFxyXG4gICAgICAgICAgdHlwZTogXCJwYXNzd29yZFwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIGF1dGhvcml6ZTogYXN5bmMgKGNyZWRlbnRpYWxzKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZW1haWwgPSBjcmVkZW50aWFscy5lbWFpbCBhcyBzdHJpbmcgfCB1bmRlZmluZWQ7XHJcbiAgICAgICAgY29uc3QgcGFzc3dvcmQgPSBjcmVkZW50aWFscy5wYXNzd29yZCBhcyBzdHJpbmcgfCB1bmRlZmluZWQ7XHJcblxyXG4gICAgICAgIGlmICghZW1haWwgfHwgIXBhc3N3b3JkKSB0aHJvdyBuZXcgQ3JlZGVudGlhbHNTaWduaW4oXCJTaWdudXAgRmlyc3RcIik7XHJcblxyXG4gICAgICAgIC8vIENvbm5lY3Rpb24gd2l0aCBkYXRhYmFzZSBoZXJlXHJcbiAgICAgICAgYXdhaXQgY29ubmVjdCgpO1xyXG5cclxuICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgVXNlci5maW5kT25lKHsgZW1haWwgfSkuc2VsZWN0KFwiK3Bhc3N3b3JkXCIpO1xyXG5cclxuICAgICAgICBpZiAoIXVzZXIpIHRocm93IG5ldyBDcmVkZW50aWFsc1NpZ25pbihcIkludmFsaWQgVXNlclwiKTtcclxuXHJcbiAgICAgICAgaWYgKCF1c2VyLnBhc3N3b3JkKSB0aHJvdyBuZXcgQ3JlZGVudGlhbHNTaWduaW4oXCJJbnZhbGlkIFVzZXJcIik7XHJcblxyXG4gICAgICAgIGNvbnN0IGlzTWF0Y2ggPSBhd2FpdCBjb21wYXJlKHBhc3N3b3JkLCB1c2VyLnBhc3N3b3JkKTtcclxuXHJcbiAgICAgICAgaWYgKCFpc01hdGNoKSB0aHJvdyBuZXcgQ3JlZGVudGlhbHNTaWduaW4oXCJJbnZhbGlkIFVzZXJcIik7XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIHJldHVybiB7IG5hbWU6IHVzZXIubmFtZSwgZW1haWw6IHVzZXIuZW1haWwsIGlkOiB1c2VyLl9pZCB9O1xyXG4gICAgICB9LFxyXG4gICAgfSksXHJcbiAgXSxcclxuICBwYWdlczoge1xyXG4gICAgc2lnbkluOiBcIi9sb2dpblwiLFxyXG4gIH1cclxufSk7XHJcbiJdLCJuYW1lcyI6WyJOZXh0QXV0aCIsIkNyZWRlbnRpYWxzU2lnbmluIiwiR29vZ2xlUHJvdmlkZXIiLCJDcmVkZW50aWFsUHJvdmlkZXIiLCJHaXRodWJQcm92aWRlciIsIlVzZXIiLCJjb21wYXJlIiwiY29ubmVjdCIsImhhbmRsZXJzIiwic2lnbkluIiwic2lnbk91dCIsImF1dGgiLCJwcm92aWRlcnMiLCJjbGllbnRJZCIsInByb2Nlc3MiLCJlbnYiLCJHT09HTEVfQ0xJRU5UX0lEIiwiY2xpZW50U2VjcmV0IiwiR09PR0xFX0NMSUVOVF9TRUNSRVQiLCJHSVRIVUJfSUQiLCJHSVRIVUJfU0VDUkVUIiwibmFtZSIsImNyZWRlbnRpYWxzIiwibGFiZWwiLCJ0eXBlIiwiZW1haWwiLCJwYXNzd29yZCIsImF1dGhvcml6ZSIsInVzZXIiLCJmaW5kT25lIiwic2VsZWN0IiwiaXNNYXRjaCIsImlkIiwiX2lkIiwicGFnZXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/auth.ts\n");

/***/ }),

/***/ "(rsc)/./src/models/userModel.js":
/*!*********************************!*\
  !*** ./src/models/userModel.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   User: () => (/* binding */ User)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var os__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! os */ \"os\");\n/* harmony import */ var os__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(os__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst userSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    name: {\n        type: String,\n        required: true\n    },\n    email: {\n        type: String,\n        required: true,\n        unique: true\n    },\n    password: {\n        type: String,\n        select: false\n    },\n    googleId: {\n        type: String\n    },\n    isVerfied: {\n        type: Boolean,\n        default: false\n    },\n    isAdmin: {\n        type: Boolean,\n        default: false\n    },\n    forgotPasswordToken: String,\n    forgotPasswordTokenExpiry: Date,\n    verifyToken: String,\n    verifyTokenExpiry: Date\n});\nconst User = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models)?.User || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"User\", userSchema);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbW9kZWxzL3VzZXJNb2RlbC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFnQztBQUNOO0FBRTFCLE1BQU1FLGFBQWEsSUFBSUYsd0RBQWUsQ0FBQztJQUNyQ0ksTUFBTTtRQUNKSCxNQUFNSTtRQUNOQyxVQUFVO0lBQ1Y7SUFDRkMsT0FBTztRQUNMTixNQUFNSTtRQUNOQyxVQUFVO1FBQ1ZFLFFBQVE7SUFDVjtJQUNBQyxVQUFVO1FBQ1JSLE1BQU1JO1FBQ05LLFFBQVE7SUFDVjtJQUNBQyxVQUFVO1FBQ1JWLE1BQU1JO0lBQ1I7SUFDQU8sV0FBVztRQUNUWCxNQUFNWTtRQUNOQyxTQUFTO0lBQ1g7SUFDQUMsU0FBUztRQUNQZCxNQUFNWTtRQUNOQyxTQUFTO0lBQ1g7SUFDQUUscUJBQXFCWDtJQUNyQlksMkJBQTJCQztJQUMzQkMsYUFBYWQ7SUFDYmUsbUJBQW1CRjtBQUNyQjtBQUVPLE1BQU1HLE9BQU9yQix3REFBZSxFQUFFcUIsUUFBUXJCLHFEQUFjLENBQUMsUUFBUUUsWUFBWSIsInNvdXJjZXMiOlsid2VicGFjazovL2Fyb2hpc29mdHdhcmUvLi9zcmMvbW9kZWxzL3VzZXJNb2RlbC5qcz9jNGRhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcclxuaW1wb3J0IHsgdHlwZSB9IGZyb20gXCJvc1wiO1xyXG5cclxuY29uc3QgdXNlclNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoe1xyXG4gIG5hbWU6IHtcclxuICAgIHR5cGU6IFN0cmluZyxcclxuICAgIHJlcXVpcmVkOiB0cnVlXHJcbiAgICB9LFxyXG4gIGVtYWlsOiB7XHJcbiAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgIHVuaXF1ZTogdHJ1ZSxcclxuICB9LFxyXG4gIHBhc3N3b3JkOiB7XHJcbiAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICBzZWxlY3Q6IGZhbHNlXHJcbiAgfSxcclxuICBnb29nbGVJZDoge1xyXG4gICAgdHlwZTogU3RyaW5nXHJcbiAgfSxcclxuICBpc1ZlcmZpZWQ6IHtcclxuICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICBkZWZhdWx0OiBmYWxzZSxcclxuICB9LFxyXG4gIGlzQWRtaW46IHtcclxuICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICBkZWZhdWx0OiBmYWxzZSxcclxuICB9LFxyXG4gIGZvcmdvdFBhc3N3b3JkVG9rZW46IFN0cmluZyxcclxuICBmb3Jnb3RQYXNzd29yZFRva2VuRXhwaXJ5OiBEYXRlLFxyXG4gIHZlcmlmeVRva2VuOiBTdHJpbmcsXHJcbiAgdmVyaWZ5VG9rZW5FeHBpcnk6IERhdGUsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVzZXIgPSBtb25nb29zZS5tb2RlbHM/LlVzZXIgfHwgbW9uZ29vc2UubW9kZWwoXCJVc2VyXCIsIHVzZXJTY2hlbWEpO1xyXG5cclxuXHJcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsInR5cGUiLCJ1c2VyU2NoZW1hIiwiU2NoZW1hIiwibmFtZSIsIlN0cmluZyIsInJlcXVpcmVkIiwiZW1haWwiLCJ1bmlxdWUiLCJwYXNzd29yZCIsInNlbGVjdCIsImdvb2dsZUlkIiwiaXNWZXJmaWVkIiwiQm9vbGVhbiIsImRlZmF1bHQiLCJpc0FkbWluIiwiZm9yZ290UGFzc3dvcmRUb2tlbiIsImZvcmdvdFBhc3N3b3JkVG9rZW5FeHBpcnkiLCJEYXRlIiwidmVyaWZ5VG9rZW4iLCJ2ZXJpZnlUb2tlbkV4cGlyeSIsIlVzZXIiLCJtb2RlbHMiLCJtb2RlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/models/userModel.js\n");

/***/ }),

/***/ "(rsc)/./src/utils.ts":
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   connect: () => (/* binding */ connect)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst connect = async ()=>{\n    try {\n        if ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().connections) && (mongoose__WEBPACK_IMPORTED_MODULE_0___default().connections)[0].readyState) return;\n        const { connection } = await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGODB_URI, {\n            dbName: \"ArohiSoftware\"\n        });\n        console.log(`Connected to database: ${connection.host}`);\n    } catch (error) {\n        throw new Error(\"Error connection to database\");\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvdXRpbHMudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdEO0FBRXpDLE1BQU1DLFVBQVU7SUFDbkIsSUFBSTtRQUNGLElBQUlELDZEQUFvQixJQUFJQSw2REFBb0IsQ0FBQyxFQUFFLENBQUNHLFVBQVUsRUFBRTtRQUVoRSxNQUFNLEVBQUVDLFVBQVUsRUFBRSxHQUFHLE1BQU1KLHVEQUFnQixDQUMzQ0ssUUFBUUMsR0FBRyxDQUFDQyxXQUFXLEVBQ3ZCO1lBQ0VDLFFBQVE7UUFDVjtRQUdGQyxRQUFRQyxHQUFHLENBQUMsQ0FBQyx1QkFBdUIsRUFBRU4sV0FBV08sSUFBSSxDQUFDLENBQUM7SUFDekQsRUFBRSxPQUFPQyxPQUFPO1FBQ2QsTUFBTSxJQUFJQyxNQUFNO0lBQ2xCO0FBQ0YsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL2Fyb2hpc29mdHdhcmUvLi9zcmMvdXRpbHMudHM/MjM5OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UsIHsgY29ubmVjdGlvbiB9IGZyb20gXCJtb25nb29zZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNvbm5lY3QgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBpZiAobW9uZ29vc2UuY29ubmVjdGlvbnMgJiYgbW9uZ29vc2UuY29ubmVjdGlvbnNbMF0ucmVhZHlTdGF0ZSkgcmV0dXJuO1xyXG4gIFxyXG4gICAgICBjb25zdCB7IGNvbm5lY3Rpb24gfSA9IGF3YWl0IG1vbmdvb3NlLmNvbm5lY3QoXHJcbiAgICAgICAgcHJvY2Vzcy5lbnYuTU9OR09EQl9VUkkgYXMgc3RyaW5nLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGRiTmFtZTogXCJBcm9oaVNvZnR3YXJlXCIsXHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG4gIFxyXG4gICAgICBjb25zb2xlLmxvZyhgQ29ubmVjdGVkIHRvIGRhdGFiYXNlOiAke2Nvbm5lY3Rpb24uaG9zdH1gKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkVycm9yIGNvbm5lY3Rpb24gdG8gZGF0YWJhc2VcIik7XHJcbiAgICB9XHJcbiAgfTsiXSwibmFtZXMiOlsibW9uZ29vc2UiLCJjb25uZWN0IiwiY29ubmVjdGlvbnMiLCJyZWFkeVN0YXRlIiwiY29ubmVjdGlvbiIsInByb2Nlc3MiLCJlbnYiLCJNT05HT0RCX1VSSSIsImRiTmFtZSIsImNvbnNvbGUiLCJsb2ciLCJob3N0IiwiZXJyb3IiLCJFcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/utils.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@auth","vendor-chunks/next-auth","vendor-chunks/@panva","vendor-chunks/preact","vendor-chunks/bcryptjs","vendor-chunks/preact-render-to-string","vendor-chunks/oauth4webapi","vendor-chunks/cookie"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=C%3A%5CUsers%5Cvivek%5COneDrive%5CDesktop%5CArohiSoftwares.com%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cvivek%5COneDrive%5CDesktop%5CArohiSoftwares.com&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();