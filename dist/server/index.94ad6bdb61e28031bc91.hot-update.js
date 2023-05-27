exports.id = "index";
exports.modules = {

/***/ "./app/server/utils/log.ts":
/*!*********************************!*\
  !*** ./app/server/utils/log.ts ***!
  \*********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _zg_rentals_particles_js_node_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @zg-rentals/particles-js-node-logger */ "../../modules/particles-js-node-logger/src/index.ts");
/* harmony import */ var _tracer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tracer */ "./app/server/utils/tracer.ts");


var log = Object(_zg_rentals_particles_js_node_logger__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
  type: 'pino',
  logPath: process.env.NODE_OUT_FILE,
  prettyPath: '',
  pinoArgs: {
    level: process.env.LOG_LEVEL,
    mixin: function mixin() {
      return _tracer__WEBPACK_IMPORTED_MODULE_1__[/* tracer */ "a"].logMixin();
    }
  }
});
log.info('server-side log message enabled');
/* harmony default export */ __webpack_exports__["a"] = (log);

/***/ })

};
//# sourceMappingURL=index.94ad6bdb61e28031bc91.hot-update.js.map