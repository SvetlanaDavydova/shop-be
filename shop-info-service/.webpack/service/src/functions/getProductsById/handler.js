/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/functions/getProductsById/handler.ts":
/*!**************************************************!*\
  !*** ./src/functions/getProductsById/handler.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getProductsById\": () => (/* binding */ getProductsById)\n/* harmony export */ });\n/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ \"source-map-support/register\");\n/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var src_helpers_errorsHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/helpers/errorsHandler */ \"./src/helpers/errorsHandler.ts\");\n/* harmony import */ var src_helpers_getProductById__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/helpers/getProductById */ \"./src/helpers/getProductById.ts\");\n\r\n\r\n\r\nconst getProductsById = async (event) => {\r\n    console.log('getProductsById was called with: ', event);\r\n    try {\r\n        const result = await (0,src_helpers_getProductById__WEBPACK_IMPORTED_MODULE_2__.getProductById)(event.pathParameters.id);\r\n        console.log('The result of calling helper getProductById is: ', result);\r\n        if (!result) {\r\n            console.log('went into NotFoundError');\r\n            throw new src_helpers_errorsHandler__WEBPACK_IMPORTED_MODULE_1__.NotFoundError('Product not found', 404);\r\n        }\r\n        return {\r\n            statusCode: 200,\r\n            body: JSON.stringify(result)\r\n        };\r\n    }\r\n    catch (err) {\r\n        if (err instanceof src_helpers_errorsHandler__WEBPACK_IMPORTED_MODULE_1__.NotFoundError) {\r\n            return {\r\n                statusCode: err.statusCode,\r\n                body: err.message\r\n            };\r\n        }\r\n        else {\r\n            return {\r\n                statusCode: 500,\r\n                body: err.message\r\n            };\r\n        }\r\n    }\r\n};\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZnVuY3Rpb25zL2dldFByb2R1Y3RzQnlJZC9oYW5kbGVyLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Nob3AtaW5mby1zZXJ2aWNlLy4vc3JjL2Z1bmN0aW9ucy9nZXRQcm9kdWN0c0J5SWQvaGFuZGxlci50cz82NTA5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFQSUdhdGV3YXlQcm94eUhhbmRsZXIgfSBmcm9tICdhd3MtbGFtYmRhJztcclxuaW1wb3J0ICdzb3VyY2UtbWFwLXN1cHBvcnQvcmVnaXN0ZXInO1xyXG5pbXBvcnQgeyBOb3RGb3VuZEVycm9yIH0gZnJvbSAnc3JjL2hlbHBlcnMvZXJyb3JzSGFuZGxlcic7XHJcbmltcG9ydCB7IGdldFByb2R1Y3RCeUlkIH0gZnJvbSAnc3JjL2hlbHBlcnMvZ2V0UHJvZHVjdEJ5SWQnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFByb2R1Y3RzQnlJZDogQVBJR2F0ZXdheVByb3h5SGFuZGxlciA9IGFzeW5jIChldmVudCkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKCdnZXRQcm9kdWN0c0J5SWQgd2FzIGNhbGxlZCB3aXRoOiAnLCBldmVudCk7XHJcblxyXG4gIHRyeSB7ICAgIFxyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0UHJvZHVjdEJ5SWQoZXZlbnQucGF0aFBhcmFtZXRlcnMuaWQpO1xyXG4gICAgY29uc29sZS5sb2coJ1RoZSByZXN1bHQgb2YgY2FsbGluZyBoZWxwZXIgZ2V0UHJvZHVjdEJ5SWQgaXM6ICcsIHJlc3VsdCk7XHJcblxyXG4gICAgaWYgKCFyZXN1bHQpIHtcclxuICAgICAgY29uc29sZS5sb2coJ3dlbnQgaW50byBOb3RGb3VuZEVycm9yJyk7XHJcbiAgICAgIHRocm93IG5ldyBOb3RGb3VuZEVycm9yKCdQcm9kdWN0IG5vdCBmb3VuZCcsIDQwNCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3RhdHVzQ29kZTogMjAwLFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShyZXN1bHQpXHJcbiAgICB9XHJcblxyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgaWYoZXJyIGluc3RhbmNlb2YgTm90Rm91bmRFcnJvcil7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgc3RhdHVzQ29kZTogZXJyLnN0YXR1c0NvZGUsXHJcbiAgICAgICAgYm9keTogZXJyLm1lc3NhZ2VcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBzdGF0dXNDb2RlOjUwMCxcclxuICAgICAgICBib2R5OiBlcnIubWVzc2FnZVxyXG4gICAgICB9XHJcbiAgICB9ICAgICAgICBcclxuICB9XHJcbn1cclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/functions/getProductsById/handler.ts\n");

/***/ }),

/***/ "./src/helpers/errorsHandler.ts":
/*!**************************************!*\
  !*** ./src/helpers/errorsHandler.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"NotFoundError\": () => (/* binding */ NotFoundError)\n/* harmony export */ });\nclass NotFoundError extends Error {\r\n    constructor(message, statusCode) {\r\n        super(message);\r\n        this.statusCode = statusCode;\r\n        this.statusCode = statusCode;\r\n    }\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaGVscGVycy9lcnJvcnNIYW5kbGVyLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFVQTtBQUVBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Nob3AtaW5mby1zZXJ2aWNlLy4vc3JjL2hlbHBlcnMvZXJyb3JzSGFuZGxlci50cz9lOTAyIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGNsYXNzIE5vdEZvdW5kRXJyb3Ige1xyXG4vLyAgICAgLy8gbWVzc2FnZTogc3RyaW5nO1xyXG4vLyAgICAgLy8gc3RhdHVzQ29kZTogbnVtYmVyO1xyXG4vLyAgICAgY29uc3RydWN0b3IobWVzc2FnZTpzdHJpbmcsIHN0YXR1c0NvZGU6bnVtYmVyKXtcclxuICAgICAgICBcclxuLy8gICAgICAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xyXG4vLyAgICAgICAgIHRoaXMuc3RhdHVzQ29kZSA9IHN0YXR1c0NvZGU7XHJcbi8vICAgICB9XHJcbi8vIH1cclxuXHJcbmV4cG9ydCBjbGFzcyBOb3RGb3VuZEVycm9yIGV4dGVuZHMgRXJyb3J7XHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKG1lc3NhZ2U6c3RyaW5nLCBwdWJsaWMgc3RhdHVzQ29kZTpudW1iZXIgKXtcclxuICAgICAgICBzdXBlcihtZXNzYWdlKTtcclxuICAgICAgICB0aGlzLnN0YXR1c0NvZGUgPSBzdGF0dXNDb2RlO1xyXG4gICAgfVxyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/helpers/errorsHandler.ts\n");

/***/ }),

/***/ "./src/helpers/getProductById.ts":
/*!***************************************!*\
  !*** ./src/helpers/getProductById.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getProductById\": () => (/* binding */ getProductById)\n/* harmony export */ });\n/* harmony import */ var _mock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mock */ \"./src/helpers/mock.ts\");\n\r\nconst getProductById = async (id) => {\r\n    const books = _mock__WEBPACK_IMPORTED_MODULE_0__.data;\r\n    const result = books.find((item) => item.id == id);\r\n    return result;\r\n};\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaGVscGVycy9nZXRQcm9kdWN0QnlJZC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Nob3AtaW5mby1zZXJ2aWNlLy4vc3JjL2hlbHBlcnMvZ2V0UHJvZHVjdEJ5SWQudHM/ODFmNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkYXRhIH0gZnJvbSBcIi4vbW9ja1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFByb2R1Y3RCeUlkID0gYXN5bmMgKGlkKSA9PiB7XHJcbiAgICBjb25zdCBib29rcyA9IGRhdGE7XHJcbiAgICBjb25zdCByZXN1bHQgPSBib29rcy5maW5kKChpdGVtKSA9PiBpdGVtLmlkID09IGlkKTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/helpers/getProductById.ts\n");

/***/ }),

/***/ "./src/helpers/mock.ts":
/*!*****************************!*\
  !*** ./src/helpers/mock.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"data\": () => (/* binding */ data)\n/* harmony export */ });\nconst data = [\r\n    {\r\n        \"count\": 4,\r\n        \"description\": \"Short Book Description1\",\r\n        \"id\": 1,\r\n        \"price\": 2.4,\r\n        \"title\": \"Book 1\"\r\n    },\r\n    {\r\n        \"count\": 7,\r\n        \"description\": \"Short Book Description2\",\r\n        \"id\": 2,\r\n        \"price\": 23,\r\n        \"title\": \"Book 2\"\r\n    },\r\n    {\r\n        \"count\": 6,\r\n        \"description\": \"Short Book Description3\",\r\n        \"id\": 3,\r\n        \"price\": 10,\r\n        \"title\": \"Book 3\"\r\n    },\r\n    {\r\n        \"count\": 5,\r\n        \"description\": \"Short Book Description4\",\r\n        \"id\": 4,\r\n        \"price\": 15,\r\n        \"title\": \"Book 4\"\r\n    }\r\n];\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaGVscGVycy9tb2NrLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaG9wLWluZm8tc2VydmljZS8uL3NyYy9oZWxwZXJzL21vY2sudHM/NjBjNyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgZGF0YSA9IFtcclxuICB7XHJcbiAgICBcImNvdW50XCI6IDQsXHJcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiU2hvcnQgQm9vayBEZXNjcmlwdGlvbjFcIixcclxuICAgIFwiaWRcIjogMSxcclxuICAgIFwicHJpY2VcIjogMi40LFxyXG4gICAgXCJ0aXRsZVwiOiBcIkJvb2sgMVwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcImNvdW50XCI6IDcsXHJcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiU2hvcnQgQm9vayBEZXNjcmlwdGlvbjJcIixcclxuICAgIFwiaWRcIjogMixcclxuICAgIFwicHJpY2VcIjogMjMsXHJcbiAgICBcInRpdGxlXCI6IFwiQm9vayAyXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwiY291bnRcIjogNixcclxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJTaG9ydCBCb29rIERlc2NyaXB0aW9uM1wiLFxyXG4gICAgXCJpZFwiOiAzLFxyXG4gICAgXCJwcmljZVwiOiAxMCxcclxuICAgIFwidGl0bGVcIjogXCJCb29rIDNcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJjb3VudFwiOiA1LFxyXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIlNob3J0IEJvb2sgRGVzY3JpcHRpb240XCIsXHJcbiAgICBcImlkXCI6IDQsXHJcbiAgICBcInByaWNlXCI6IDE1LFxyXG4gICAgXCJ0aXRsZVwiOiBcIkJvb2sgNFwiXHJcbiAgfSBcclxuXSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/helpers/mock.ts\n");

/***/ }),

/***/ "source-map-support/register":
/*!**********************************************!*\
  !*** external "source-map-support/register" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = require("source-map-support/register");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/functions/getProductsById/handler.ts");
/******/ 	var __webpack_export_target__ = exports;
/******/ 	for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;