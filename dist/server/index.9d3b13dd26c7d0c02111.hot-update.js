exports.id = "index";
exports.modules = {

/***/ "../../modules/monitor-base/src/baseMonitor.ts":
false,

/***/ "../../modules/monitor-base/src/index.ts":
false,

/***/ "../../modules/monitor-base/src/plugin.ts":
false,

/***/ "../../modules/monitor-base/src/plugins/index.ts":
false,

/***/ "../../modules/monitor-base/src/plugins/plain-plugin/index.ts":
false,

/***/ "../../modules/monitor-base/src/reporter.ts":
false,

/***/ "../../modules/monitor-base/src/reporters/index.ts":
false,

/***/ "../../modules/monitor-base/src/reporters/log-reporter/index.ts":
false,

/***/ "../../modules/monitor-base/src/statController.ts":
false,

/***/ "../../modules/monitor-node/src/index.ts":
false,

/***/ "../../modules/monitor-node/src/nodeMonitor.ts":
false,

/***/ "../../modules/monitor-node/src/plugins/index.ts":
false,

/***/ "../../modules/monitor-node/src/plugins/node-vitals-plugin/index.ts":
false,

/***/ "../../modules/monitor-node/src/plugins/node-vitals-plugin/nodeVitals.ts":
false,

/***/ "../../modules/monitor-node/src/plugins/pontoon-heartbeat-plugin/index.ts":
false,

/***/ "../../modules/monitor-node/src/reporters/index.ts":
false,

/***/ "../../modules/monitor-node/src/reporters/log-reporter/index.ts":
false,

/***/ "../../modules/monitor-node/src/reporters/pontoon-reporter/index.ts":
false,

/***/ "../../modules/particles-js-healthcheck/src/index.ts":
/*!****************************************************************************************************!*\
  !*** /Users/opagani/projects/zillowgroup/rentals-js/modules/particles-js-healthcheck/src/index.ts ***!
  \****************************************************************************************************/
/*! exports provided: BAD_SHUTDOWN_TOKEN_MSG, GOOD_STATUS_CODE, SHUTDOWN_STATUS_CODE, Healthcheck */
/*! exports used: Healthcheck */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export BAD_SHUTDOWN_TOKEN_MSG */
/* unused harmony export GOOD_STATUS_CODE */
/* unused harmony export SHUTDOWN_STATUS_CODE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Healthcheck; });
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_starts_with_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.starts-with.js */ "core-js/modules/es.string.starts-with.js");
/* harmony import */ var core_js_modules_es_string_starts_with_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_starts_with_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.define-properties.js */ "core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _zg_rentals_particles_js_utils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @zg-rentals/particles-js-utils */ "../../modules/particles-js-utils/src/index.ts");
/* harmony import */ var os__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! os */ "os");
/* harmony import */ var os__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(os__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var read_pkg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! read-pkg */ "read-pkg");
/* harmony import */ var read_pkg__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(read_pkg__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var v8__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! v8 */ "v8");
/* harmony import */ var v8__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(v8__WEBPACK_IMPORTED_MODULE_17__);















function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var BAD_SHUTDOWN_TOKEN_MSG = 'invalid shutdown token provided.';
var GOOD_STATUS_CODE = 200;
var SHUTDOWN_STATUS_CODE = 555;
var Healthcheck = /*#__PURE__*/function () {
  function Healthcheck(_ref) {
    var _this = this,
        _this$logger7;

    var logger = _ref.logger,
        shutdownToken = _ref.shutdownToken,
        accessToken = _ref.accessToken,
        _ref$buildNumber = _ref.buildNumber,
        buildNumber = _ref$buildNumber === void 0 ? 0 : _ref$buildNumber,
        onPing = _ref.onPing,
        _ref$protectedQueryPa = _ref.protectedQueryParams,
        protectedQueryParams = _ref$protectedQueryPa === void 0 ? ['runscope', 'sonar', 'liveliness', 'site_liveliness'] : _ref$protectedQueryPa,
        _ref$maxMemoryThresho = _ref.maxMemoryThresholdMb,
        maxMemoryThresholdMb = _ref$maxMemoryThresho === void 0 ? 5120 : _ref$maxMemoryThresho;

    _classCallCheck(this, Healthcheck);

    _defineProperty(this, "shutdownToken", void 0);

    _defineProperty(this, "protectedQueryParams", void 0);

    _defineProperty(this, "accessToken", void 0);

    _defineProperty(this, "isShuttingDown", void 0);

    _defineProperty(this, "logger", void 0);

    _defineProperty(this, "packageJson", void 0);

    _defineProperty(this, "buildNumber", void 0);

    _defineProperty(this, "onPing", void 0);

    _defineProperty(this, "maxMemoryThresholdMb", void 0);

    _defineProperty(this, "setupPm2GracefulExit", function () {
      if (_zg_rentals_particles_js_utils__WEBPACK_IMPORTED_MODULE_14__[/* Utils */ "a"].isProd() && process && process.send) {
        var _this$logger;

        (_this$logger = _this.logger) === null || _this$logger === void 0 ? void 0 : _this$logger.debug('setting up pm2 graceful exit');
        process.on('message', function (message) {
          var _this$logger2;

          (_this$logger2 = _this.logger) === null || _this$logger2 === void 0 ? void 0 : _this$logger2.warn(message, 'healthcheck received a process message');
          var topic = message.topic;

          if (topic === 'TRIGGER_SHUTDOWN') {
            _this.isShuttingDown = true;
          }
        });
      }
    });

    _defineProperty(this, "hasAccess", function (req) {
      if (!_this.accessToken) return false;
      if (req.query.accessToken === _this.accessToken) return true;
      return false;
    });

    _defineProperty(this, "aggregateConfidentialData", function (req) {
      var data = _objectSpread(_objectSpread(_objectSpread({}, _this.getPackageJsonData()), _this.getEnvironmentData()), _this.getServerData());

      if (_this.isMemoryOverloaded(data.memory_used)) {
        _this.isShuttingDown = true;
      }

      if (!_this.hasAccess(req)) {
        return;
      }

      return data;
    });

    _defineProperty(this, "getStatusCode", function (req) {
      if (_this.isShuttingDown) {
        var _this$logger4;

        if (_this.shouldIgnoreShutdown(req)) {
          var _this$logger3;

          (_this$logger3 = _this.logger) === null || _this$logger3 === void 0 ? void 0 : _this$logger3.warn("app is ignoring shutdown mode, returning status code=".concat(GOOD_STATUS_CODE));
          return GOOD_STATUS_CODE;
        }

        (_this$logger4 = _this.logger) === null || _this$logger4 === void 0 ? void 0 : _this$logger4.warn("app is in shutdown mode, returning status code=".concat(SHUTDOWN_STATUS_CODE));
        return SHUTDOWN_STATUS_CODE;
      } else {
        return GOOD_STATUS_CODE;
      }
    });

    _defineProperty(this, "check", function (req, res) {
      try {
        var confidentialData = _this.aggregateConfidentialData(req);

        var baseResponse = _this.generateBaseResponse();

        var status = _this.getStatusCode(req);

        var response = _objectSpread(_objectSpread({}, confidentialData), baseResponse);

        if (_this.onPing) {
          res.status(status).json(_this.onPing({
            hasAccess: _this.hasAccess(req),
            isProtected: _this.shouldIgnoreShutdown(req),
            response: response
          }));
        } else {
          res.status(status).json(response);
        }
      } catch (err) {
        res.status(500).json({
          error: err.message,
          success: false
        });
      }
    });

    _defineProperty(this, "shutdown", function (req, res) {
      var reqShutdownToken = req.query.secretToken;
      var isNotEmpty = reqShutdownToken !== '';
      var isDefined = typeof reqShutdownToken !== 'undefined' && typeof _this.shutdownToken !== 'undefined';

      if (isDefined && isNotEmpty && reqShutdownToken === _this.shutdownToken) {
        var _this$logger5;

        _this.isShuttingDown = true;
        (_this$logger5 = _this.logger) === null || _this$logger5 === void 0 ? void 0 : _this$logger5.warn('successful shutdownToken received, putting app in shutdown mode');
        res.status(200).json({
          success: true,
          statusCode: SHUTDOWN_STATUS_CODE
        });
      } else {
        var _this$logger6;

        (_this$logger6 = _this.logger) === null || _this$logger6 === void 0 ? void 0 : _this$logger6.warn('incorrect or missing shutdown token');
        res.status(500).json({
          success: false,
          error: BAD_SHUTDOWN_TOKEN_MSG
        });
      }
    });

    this.logger = logger;
    this.accessToken = accessToken;
    this.shutdownToken = shutdownToken;
    this.protectedQueryParams = protectedQueryParams;
    this.isShuttingDown = false;
    this.buildNumber = Number(buildNumber);
    this.setupPm2GracefulExit();
    this.packageJson = read_pkg__WEBPACK_IMPORTED_MODULE_16___default.a.sync();
    this.onPing = onPing;
    this.maxMemoryThresholdMb = maxMemoryThresholdMb;
    (_this$logger7 = this.logger) === null || _this$logger7 === void 0 ? void 0 : _this$logger7.info('instantiating healthcheck');
  }

  _createClass(Healthcheck, [{
    key: "bytesToMb",
    value: function bytesToMb(bytes) {
      if (bytes === 0) return 0;
      return bytes / 1024 / 1024;
    }
  }, {
    key: "getPackageJsonData",
    value: function getPackageJsonData() {
      var data = {
        dependencies: {},
        devDependencies: {}
      };
      var _this$packageJson = this.packageJson,
          _this$packageJson$dep = _this$packageJson.dependencies,
          dependencies = _this$packageJson$dep === void 0 ? {} : _this$packageJson$dep,
          _this$packageJson$dev = _this$packageJson.devDependencies,
          devDependencies = _this$packageJson$dev === void 0 ? {} : _this$packageJson$dev;

      for (var dependency in dependencies) {
        if (dependency.startsWith('@zg-rentals/')) {
          data.dependencies[dependency] = dependencies[dependency];
        }
      }

      for (var _dependency in devDependencies) {
        if (_dependency.startsWith('@zg-rentals/')) {
          data.devDependencies[_dependency] = devDependencies[_dependency];
        }
      }

      return data;
    }
  }, {
    key: "getEnvironmentData",
    value: function getEnvironmentData() {
      return {
        NODE_ENV: "development" || false,
        node_version: process.versions.node,
        gitCommit: process.env.GIT_COMMIT || '',
        gitUsername: process.env.GIT_COMMIT_AUTHOR || '',
        gitBranch: process.env.BRANCH_NAME || '',
        buildDate: process.env.BUILD_TIME || ''
      };
    }
  }, {
    key: "getServerData",
    value: function getServerData() {
      return {
        host: os__WEBPACK_IMPORTED_MODULE_15___default.a.hostname(),
        uptime: process.uptime(),
        memory_used: process.memoryUsage(),
        memory_total: os__WEBPACK_IMPORTED_MODULE_15___default.a.totalmem(),
        memory_free: os__WEBPACK_IMPORTED_MODULE_15___default.a.freemem(),
        average_load: os__WEBPACK_IMPORTED_MODULE_15___default.a.loadavg(),
        heap: v8__WEBPACK_IMPORTED_MODULE_17___default.a.getHeapStatistics()
      };
    }
  }, {
    key: "isMemoryOverloaded",
    value: function isMemoryOverloaded(memoryUsage) {
      if (!memoryUsage || !memoryUsage.rss) {
        return false;
      }

      var mb = this.bytesToMb(memoryUsage.rss);

      if (mb >= Number(this.maxMemoryThresholdMb)) {
        return true;
      }

      return false;
    }
  }, {
    key: "generateBaseResponse",
    value: function generateBaseResponse() {
      return {
        name: this.packageJson.name,
        buildNumber: this.buildNumber
      };
    }
  }, {
    key: "shouldIgnoreShutdown",
    value: function shouldIgnoreShutdown(req) {
      if (typeof req.query.mode === 'string' && this.protectedQueryParams.includes(req.query.mode)) {
        return true;
      }

      return false;
    }
  }]);

  return Healthcheck;
}();

/***/ }),

/***/ "../../modules/particles-js-utils/src/index.ts":
/*!**********************************************************************************************!*\
  !*** /Users/opagani/projects/zillowgroup/rentals-js/modules/particles-js-utils/src/index.ts ***!
  \**********************************************************************************************/
/*! exports provided: TestUtility, ShutdownListener, axiosErrorHandler, Utils, NodeUtil */
/*! exports used: Utils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Utils; });
/* harmony import */ var _getBrand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getBrand */ "../../modules/particles-js-utils/src/getBrand.ts");
/* harmony import */ var _getIp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getIp */ "../../modules/particles-js-utils/src/getIp.ts");
/* harmony import */ var _environmentUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./environmentUtils */ "../../modules/particles-js-utils/src/environmentUtils.ts");
/* harmony import */ var _safeCreateLogger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./safeCreateLogger */ "../../modules/particles-js-utils/src/safeCreateLogger.ts");
/* harmony import */ var _deprecate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./deprecate */ "../../modules/particles-js-utils/src/deprecate.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants */ "../../modules/particles-js-utils/src/constants.ts");
/* harmony import */ var _Batch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Batch */ "../../modules/particles-js-utils/src/Batch.ts");
/* harmony import */ var _http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./http */ "../../modules/particles-js-utils/src/http.ts");
/* harmony import */ var _testUtils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./testUtils */ "../../modules/particles-js-utils/src/testUtils.ts");
/* harmony import */ var _shutdownListener__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shutdownListener */ "../../modules/particles-js-utils/src/shutdownListener.ts");
/* harmony import */ var _node__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./node */ "../../modules/particles-js-utils/src/node/index.ts");











var Utils = {
  getBrand: _getBrand__WEBPACK_IMPORTED_MODULE_0__[/* getBrand */ "a"],
  // getIp is legacy export
  getIp: _getIp__WEBPACK_IMPORTED_MODULE_1__[/* selectValidIp */ "b"],
  selectValidIp: _getIp__WEBPACK_IMPORTED_MODULE_1__[/* selectValidIp */ "b"],
  getIpsFromReq: _getIp__WEBPACK_IMPORTED_MODULE_1__[/* getIpsFromReq */ "a"],
  isProd: _environmentUtils__WEBPACK_IMPORTED_MODULE_2__[/* isProd */ "a"],
  isStaging: _environmentUtils__WEBPACK_IMPORTED_MODULE_2__[/* isStaging */ "b"],
  safeCreateLogger: _safeCreateLogger__WEBPACK_IMPORTED_MODULE_3__[/* safeCreateLogger */ "a"],
  safeUseLogger: _safeCreateLogger__WEBPACK_IMPORTED_MODULE_3__[/* safeUseLogger */ "b"],
  deprecateMessage: _deprecate__WEBPACK_IMPORTED_MODULE_4__[/* deprecateMessage */ "a"],
  messages: _constants__WEBPACK_IMPORTED_MODULE_5__[/* messages */ "a"],
  axiosErrorHandler: _http__WEBPACK_IMPORTED_MODULE_7__[/* axiosErrorHandler */ "a"],
  Batch: _Batch__WEBPACK_IMPORTED_MODULE_6__[/* Batch */ "a"]
};
// server only



/***/ }),

/***/ "../../modules/particles-js-utils/src/node/index.ts":
/*!***************************************************************************************************!*\
  !*** /Users/opagani/projects/zillowgroup/rentals-js/modules/particles-js-utils/src/node/index.ts ***!
  \***************************************************************************************************/
/*! exports provided: EnvironmentUtil, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export EnvironmentUtil */
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var os__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! os */ "os");
/* harmony import */ var os__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(os__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _helpers_propertiesReader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../helpers/propertiesReader */ "../../modules/particles-js-utils/src/helpers/propertiesReader.ts");







function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var EnvironmentUtil = /*#__PURE__*/function () {
  function EnvironmentUtil(propertiesFilePath, _ref) {
    var appName = _ref.appName;

    _classCallCheck(this, EnvironmentUtil);

    _defineProperty(this, "serverProperties", void 0);

    _defineProperty(this, "envProperties", void 0);

    try {
      var readProperties = Object(_helpers_propertiesReader__WEBPACK_IMPORTED_MODULE_7__[/* properties */ "a"])(propertiesFilePath);
      var sp = {
        name: String(readProperties.get('server.name')),
        type: String(readProperties.get('server.type')),
        publicIp: String(readProperties.get('server.publicIp')),
        privateIp: String(readProperties.get('server.privateIp'))
      };
      this.serverProperties = sp;
    } catch (err) {
      this.serverProperties = {
        name: os__WEBPACK_IMPORTED_MODULE_6___default.a.hostname(),
        type: appName,
        publicIp: '',
        privateIp: ''
      };
    }

    var hostname = os__WEBPACK_IMPORTED_MODULE_6___default.a.hostname();
    this.envProperties = {
      server: this.serverProperties,
      hostname: hostname,
      id: "".concat(this.serverProperties.name, "-").concat(hostname),
      environment: this.guessEnvironment()
    };
  }

  _createClass(EnvironmentUtil, [{
    key: "guessEnvironment",
    value: function guessEnvironment() {
      var name = this.serverProperties.name;

      if (name.includes('node-int')) {
        return 'node-int';
      } else if (name.includes('production')) {
        return 'production';
      } else if (name.includes('comet')) {
        return 'comet1';
      } else if (name.includes('ttest')) {
        return 'ttest';
      } else if (name.includes('ztest')) {
        return 'ztest';
      } else if (name.includes('sherman')) {
        return 'sherman';
      } else if (name.includes('jenkins')) {
        return 'jenkins';
      } else {
        return 'other';
      }
    } // any non-local server that is not production

  }, {
    key: "isStaging",
    value: function isStaging() {
      var environment = this.envProperties.environment;
      return ['node-int', 'comet1', 'ttest', 'ztest', 'sherman'].indexOf(environment) > -1;
    } // production servers

  }, {
    key: "isProduction",
    value: function isProduction() {
      var environment = this.envProperties.environment;
      return environment === 'production';
    }
  }, {
    key: "isSherman",
    value: function isSherman() {
      var environment = this.envProperties.environment;
      return environment === 'sherman';
    }
  }, {
    key: "isJenkins",
    value: function isJenkins() {
      var environment = this.envProperties.environment;
      return environment === 'jenkins';
    }
  }]);

  return EnvironmentUtil;
}();
/* unused harmony default export */ var _unused_webpack_default_export = (EnvironmentUtil);

/***/ }),

/***/ "../../modules/pontoon/src/batched-metrics.ts":
false,

/***/ "../../modules/pontoon/src/index.ts":
false,

/***/ "../../modules/pontoon/src/pontoon.ts":
false,

/***/ "../../modules/pontoon/src/request-types.ts":
false,

/***/ "../../modules/pontoon/src/response-types.ts":
false,

/***/ "./app/server/utils/nodeMonitor.ts":
/*!*****************************************!*\
  !*** ./app/server/utils/nodeMonitor.ts ***!
  \*****************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from /Users/opagani/projects/zillowgroup/rentals-js/modules/webpack/node_modules/babel-loader/lib/index.js):\nSyntaxError: /Users/opagani/projects/zillowgroup/rentals-js/apps/rent-guarantee-graphql/app/server/utils/nodeMonitor.ts: Unexpected token (82:0)\n\n\u001b[0m \u001b[90m 80 |\u001b[39m   })\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 81 |\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 82 |\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m    |\u001b[39m \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n    at Object._raise (/Users/opagani/projects/zillowgroup/rentals-js/node_modules/@babel/parser/src/parser/error.js:147:45)\n    at Object.raiseWithData (/Users/opagani/projects/zillowgroup/rentals-js/node_modules/@babel/parser/src/parser/error.js:142:17)\n    at Object.raise (/Users/opagani/projects/zillowgroup/rentals-js/node_modules/@babel/parser/src/parser/error.js:91:17)\n    at Object.unexpected (/Users/opagani/projects/zillowgroup/rentals-js/node_modules/@babel/parser/src/parser/util.js:180:16)\n    at Object.parseExprAtom (/Users/opagani/projects/zillowgroup/rentals-js/node_modules/@babel/parser/src/parser/expression.js:1299:20)\n    at Object.parseExprSubscripts (/Users/opagani/projects/zillowgroup/rentals-js/node_modules/@babel/parser/src/parser/expression.js:657:23)\n    at Object.parseUpdate (/Users/opagani/projects/zillowgroup/rentals-js/node_modules/@babel/parser/src/parser/expression.js:637:21)\n    at Object.parseMaybeUnary (/Users/opagani/projects/zillowgroup/rentals-js/node_modules/@babel/parser/src/parser/expression.js:609:23)\n    at Object.parseMaybeUnary (/Users/opagani/projects/zillowgroup/rentals-js/node_modules/@babel/parser/src/plugins/typescript/index.js:2898:22)\n    at Object.parseMaybeUnaryOrPrivate (/Users/opagani/projects/zillowgroup/rentals-js/node_modules/@babel/parser/src/parser/expression.js:357:14)\n    at Object.parseExprOps (/Users/opagani/projects/zillowgroup/rentals-js/node_modules/@babel/parser/src/parser/expression.js:367:23)\n    at Object.parseMaybeConditional (/Users/opagani/projects/zillowgroup/rentals-js/node_modules/@babel/parser/src/parser/expression.js:325:23)\n    at Object.parseMaybeAssign (/Users/opagani/projects/zillowgroup/rentals-js/node_modules/@babel/parser/src/parser/expression.js:286:21)\n    at Object.parseMaybeAssign (/Users/opagani/projects/zillowgroup/rentals-js/node_modules/@babel/parser/src/plugins/typescript/index.js:2823:22)\n    at Object.parseExpressionBase (/Users/opagani/projects/zillowgroup/rentals-js/node_modules/@babel/parser/src/parser/expression.js:212:23)\n    at /Users/opagani/projects/zillowgroup/rentals-js/node_modules/@babel/parser/src/parser/expression.js:205:39");

/***/ }),

/***/ "core-js/modules/es.date.now.js":
false,

/***/ "core-js/modules/es.date.to-iso-string.js":
false,

/***/ "core-js/modules/es.number.is-finite.js":
false,

/***/ "env-var":
false,

/***/ "event-loop-stats":
false,

/***/ "on-headers":
false,

/***/ "perf_hooks":
false

};
//# sourceMappingURL=index.9d3b13dd26c7d0c02111.hot-update.js.map