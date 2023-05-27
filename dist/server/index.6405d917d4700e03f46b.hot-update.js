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
console.log('APP_NAME', "rent-guarantee-graphql");
console.log('BUILD_NUMBER', 1641627442868);
console.log('NODE_ENV', "development");
var tracer = new _zg_rentals_trace_node__WEBPACK_IMPORTED_MODULE_0__[/* Tracer */ "b"]({
  plugin: new _zg_rentals_trace_node__WEBPACK_IMPORTED_MODULE_0__[/* DatadogTracerPlugin */ "a"]({
    env: "local",
    service: "rent-guarantee-graphql",
    version: 1641627442868,
    enabled: "development" === 'production'
  })
});

/***/ })

};
//# sourceMappingURL=index.6405d917d4700e03f46b.hot-update.js.map