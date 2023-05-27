exports.id = "index";
exports.modules = {

/***/ "./app/server/utils/nodeMonitor.ts":
/*!*****************************************!*\
  !*** ./app/server/utils/nodeMonitor.ts ***!
  \*****************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var core_js_modules_es_date_now_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.date.now.js */ "core-js/modules/es.date.now.js");
/* harmony import */ var core_js_modules_es_date_now_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_now_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.parse-int.js */ "core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var env_var__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! env-var */ "env-var");
/* harmony import */ var env_var__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(env_var__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _server_utils_log__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../server/utils/log */ "./app/server/utils/log.ts");
/* harmony import */ var _zg_rentals_monitor_node__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @zg-rentals/monitor-node */ "../../modules/monitor-node/src/index.ts");






var webappName = env_var__WEBPACK_IMPORTED_MODULE_3___default.a.get('APP_NAME').asString();
var pontoonApi = env_var__WEBPACK_IMPORTED_MODULE_3___default.a.get('PONTOON_API').asString();
var pontoonApiKey = env_var__WEBPACK_IMPORTED_MODULE_3___default.a.get('PONTOON_API_KEY').asString();
var startupDate = env_var__WEBPACK_IMPORTED_MODULE_3___default.a.get('APP_START_TIME').asInt() || Date.now();
var gitCommit = "6e005baf6b643b34eef55ace15aeff3dcc716298";
var gitBranch = "RGZD-1295-Remove-Pontoon-Errors"; // eslint-disable-next-line no-console

console.log('gitCommit', gitCommit); // eslint-disable-next-line no-console

console.log('gitBranch', gitBranch); // I'm using presence or lack of pontoon env vars to indicate env support -- could also be done through new env var PONTOON_ENABLED

var pontoonEnabled = pontoonApi && pontoonApiKey;
var plugins = [];
var reporters = [];
var monitorLogger = _server_utils_log__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].child('monitor-node');

if (pontoonEnabled) {
  var pontoonReporter = new _zg_rentals_monitor_node__WEBPACK_IMPORTED_MODULE_5__[/* NodeMonitorPontoonReporter */ "b"]({
    logger: monitorLogger,
    webappName: webappName,
    api: pontoonApi,
    apiKey: pontoonApiKey
  });
  reporters.push(pontoonReporter);
  var pontoonHeartbeatPlugin = new _zg_rentals_monitor_node__WEBPACK_IMPORTED_MODULE_5__[/* PontoonHeartbeatPlugin */ "d"]({
    logger: monitorLogger,
    webappName: webappName,
    api: pontoonApi,
    apiKey: pontoonApiKey,
    startupDate: startupDate,
    buildDate:  false ? undefined : parseInt(1652296316239),
    buildId: parseInt(undefined),
    commitId: gitCommit,
    gitBranch: gitBranch
  });
  plugins.push(pontoonHeartbeatPlugin);
}

var nodeVitalsPlugin = new _zg_rentals_monitor_node__WEBPACK_IMPORTED_MODULE_5__[/* NodeVitalsPlugin */ "c"]({
  logger: monitorLogger,
  webappName: webappName,
  buildNumber: parseInt(undefined),
  gitCommit: gitCommit
});
plugins.push(nodeVitalsPlugin);
var nodeMonitor = new _zg_rentals_monitor_node__WEBPACK_IMPORTED_MODULE_5__[/* NodeMonitor */ "a"]({
  logger: monitorLogger,
  reporters: reporters,
  plugins: plugins
});
/* harmony default export */ __webpack_exports__["a"] = (nodeMonitor);

/***/ })

};
//# sourceMappingURL=index.0ac85413caf146e07457.hot-update.js.map