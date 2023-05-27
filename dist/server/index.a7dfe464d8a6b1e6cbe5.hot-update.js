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

var service = process.env.DD_SERVICE || "rent-guarantee-graphql";
var hostname = process.env.DD_TRACE_AGENT_HOSTNAME || process.env.DD_AGENT_HOST || 'datadog-agent';
var plugin = new _zg_rentals_trace_node__WEBPACK_IMPORTED_MODULE_0__[/* DatadogTracerPlugin */ "a"]({
  service: "rent-guarantee-graphql",
  version: String(undefined),
  sampleRate: 0.5,
  hostname: hostname
});
plugin.tracer.use('express', {
  service: service
});
plugin.tracer.use('graphql', {
  service: service
});
var tracer = new _zg_rentals_trace_node__WEBPACK_IMPORTED_MODULE_0__[/* Tracer */ "b"]({
  plugin: plugin
});

/***/ })

};
//# sourceMappingURL=index.a7dfe464d8a6b1e6cbe5.hot-update.js.map