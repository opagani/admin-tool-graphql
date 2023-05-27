exports.id = "index";
exports.modules = {

/***/ "./app/server/utils/tracer.ts":
/*!************************************!*\
  !*** ./app/server/utils/tracer.ts ***!
  \************************************/
/*! exports provided: tracer */
/*! exports used: tracer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return tracer; });
/* harmony import */ var _zg_rentals_trace_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @zg-rentals/trace-node */ "../../modules/trace-node/src/index.ts");
/* eslint-disable no-console */

console.log('__ZG_ENV__', "local");
console.log('APP_NAME', process.env.APP_NAME);
console.log('BUILD_NUMBER', process.env.BUILD_NUMBER);
console.log('NODE_ENV', "development");
var tracer = new _zg_rentals_trace_node__WEBPACK_IMPORTED_MODULE_0__[/* Tracer */ "b"]({
  plugin: new _zg_rentals_trace_node__WEBPACK_IMPORTED_MODULE_0__[/* DatadogTracerPlugin */ "a"]({
    env: "local",
    service: process.env.APP_NAME,
    version: process.env.BUILD_NUMBER,
    enabled: "development" === 'production'
  })
});

/***/ })

};
//# sourceMappingURL=index.684e62424b1a9997e811.hot-update.js.map