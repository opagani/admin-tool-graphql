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

var tracer = new _zg_rentals_trace_node__WEBPACK_IMPORTED_MODULE_0__[/* Tracer */ "b"]({
  plugin: new _zg_rentals_trace_node__WEBPACK_IMPORTED_MODULE_0__[/* DatadogTracerPlugin */ "a"]({
    env: "local",
    service: "rent-guarantee-graphql",
    version: undefined,
    enabled: "development" === 'production'
  })
});

/***/ })

};
//# sourceMappingURL=index.bb754fcf8960b5d20032.hot-update.js.map