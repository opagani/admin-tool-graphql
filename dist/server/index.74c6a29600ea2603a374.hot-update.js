exports.id = "index";
exports.modules = {

/***/ "./app/server/middleware/healthcheck.ts":
/*!**********************************************!*\
  !*** ./app/server/middleware/healthcheck.ts ***!
  \**********************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.parse-int.js */ "../../node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "../../node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "../../node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "../../node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "../../node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "../../node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "../../node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "../../node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.define-properties.js */ "../../node_modules/core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _zg_rentals_particles_js_healthcheck__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @zg-rentals/particles-js-healthcheck */ "../../modules/particles-js-healthcheck/src/index.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













function createHealthcheck(logger) {
  var healthcheck = new _zg_rentals_particles_js_healthcheck__WEBPACK_IMPORTED_MODULE_10__[/* Healthcheck */ "a"]({
    accessToken: 'changeit',
    logger: logger,
    buildNumber: parseInt(process.env.BUILD_NUMBER || '0', 10),
    onPing: function onPing(_ref) {
      var response = _ref.response,
          hasAccess = _ref.hasAccess;
      return _objectSpread(_objectSpread({}, response), hasAccess ? {
        zgApi: process.env.ZG_API
      } : {});
    }
  });
  return healthcheck;
}

/* harmony default export */ __webpack_exports__["a"] = (createHealthcheck);

/***/ }),

/***/ "./app/server/utils/nodeMonitor.ts":
/*!*****************************************!*\
  !*** ./app/server/utils/nodeMonitor.ts ***!
  \*****************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var core_js_modules_es_date_now_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.date.now.js */ "../../node_modules/core-js/modules/es.date.now.js");
/* harmony import */ var core_js_modules_es_date_now_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_now_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "../../node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.parse-int.js */ "../../node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var env_var__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! env-var */ "../../node_modules/env-var/env-var.js");
/* harmony import */ var env_var__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(env_var__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _server_utils_log__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../server/utils/log */ "./app/server/utils/log.ts");
/* harmony import */ var _zg_rentals_monitor_node__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @zg-rentals/monitor-node */ "../../modules/monitor-node/src/index.ts");






var webappName = env_var__WEBPACK_IMPORTED_MODULE_3___default.a.get('APP_NAME').asString();
var gitCommit = env_var__WEBPACK_IMPORTED_MODULE_3___default.a.get('GIT_COMMIT').asString();
var pontoonApi = env_var__WEBPACK_IMPORTED_MODULE_3___default.a.get('PONTOON_API').asString();
var pontoonApiKey = env_var__WEBPACK_IMPORTED_MODULE_3___default.a.get('PONTOON_API_KEY').asString();
var gitBranch = env_var__WEBPACK_IMPORTED_MODULE_3___default.a.get('GIT_BRANCH').asString();
var startupDate = env_var__WEBPACK_IMPORTED_MODULE_3___default.a.get('APP_START_TIME').asInt() || Date.now(); // I'm using presence or lack of pontoon env vars to indicate env support -- could also be done through new env var PONTOON_ENABLED

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
    buildDate:  false ? undefined : parseInt(1641446072713),
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
//# sourceMappingURL=index.74c6a29600ea2603a374.hot-update.js.map