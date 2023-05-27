exports.id = "index";
exports.modules = {

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
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "../../node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_starts_with_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.starts-with.js */ "../../node_modules/core-js/modules/es.string.starts-with.js");
/* harmony import */ var core_js_modules_es_string_starts_with_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_starts_with_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "../../node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "../../node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "../../node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "../../node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "../../node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "../../node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "../../node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "../../node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "../../node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "../../node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.define-properties.js */ "../../node_modules/core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _zg_rentals_particles_js_utils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @zg-rentals/particles-js-utils */ "../../modules/particles-js-utils/src/index.ts");
/* harmony import */ var os__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! os */ "os");
/* harmony import */ var os__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(os__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var read_pkg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! read-pkg */ "../../node_modules/read-pkg/index.js");
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
      if (_zg_rentals_particles_js_utils__WEBPACK_IMPORTED_MODULE_14__[/* Utils */ "b"].isProd() && process && process.send) {
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

/***/ "../../modules/pontoon-proxy/src/index.ts":
false,

/***/ "../../modules/pontoon-proxy/src/proxy.ts":
false,

/***/ "../../modules/pontoon-proxy/src/validate.ts":
false,

/***/ "./app/server/middleware/pontoonProxy.ts":
false,

/***/ "./app/server/server.ts":
/*!******************************!*\
  !*** ./app/server/server.ts ***!
  \******************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "../../node_modules/express/index.js");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cookie-parser */ "../../node_modules/cookie-parser/index.js");
/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cookie_parser__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _zg_rentals_particles_js_node_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @zg-rentals/particles-js-node-logger */ "../../modules/particles-js-node-logger/src/index.ts");
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cors */ "../../node_modules/cors/lib/index.js");
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _middleware_nodeMonitor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./middleware/nodeMonitor */ "./app/server/middleware/nodeMonitor.ts");
/* harmony import */ var _utils_log__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/log */ "./app/server/utils/log.ts");
/* harmony import */ var _middleware_healthcheck__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./middleware/healthcheck */ "./app/server/middleware/healthcheck.ts");
/* harmony import */ var _utils_tracer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/tracer */ "./app/server/utils/tracer.ts");
/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! apollo-server-express */ "../../node_modules/apollo-server-express/dist/index.js");
/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(apollo_server_express__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _graphql_federatedSchema__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../graphql/federatedSchema */ "./app/graphql/federatedSchema.ts");







 // GraphQL



var step = _utils_log__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].child('server');
step.warn('running server');
var server = new apollo_server_express__WEBPACK_IMPORTED_MODULE_8__["ApolloServer"]({
  schema: _graphql_federatedSchema__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"],
  context: function context(_ref) {
    var req = _ref.req;
    var token = req.cookies;
    return {
      token: token
    };
  },
  introspection: true,
  playground: true
}); // Express

var app = express__WEBPACK_IMPORTED_MODULE_0___default()();
var healthcheck = Object(_middleware_healthcheck__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_utils_log__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].child('healthcheck'));
var httpLogger = Object(_zg_rentals_particles_js_node_logger__WEBPACK_IMPORTED_MODULE_2__[/* getHttpLogger */ "b"])({
  logger: _utils_log__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].logger
}); // must bind 'this' because of JS

Object(_middleware_nodeMonitor__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(app);
_utils_tracer__WEBPACK_IMPORTED_MODULE_7__[/* tracer */ "a"].traceApp(app);

if (true) {
  var corsOptions = {
    // @ts-ignore expect-any
    origin: function origin(_origin, callback) {
      callback(null, _origin);
    },
    credentials: true
  };
  app.use(cors__WEBPACK_IMPORTED_MODULE_3___default()(corsOptions));
}

app.use(cookie_parser__WEBPACK_IMPORTED_MODULE_1___default()());
app.use(httpLogger);
app.use("*/check", _utils_tracer__WEBPACK_IMPORTED_MODULE_7__[/* tracer */ "a"].wrap(healthcheck.check, 'healthcheck'));
app.use("*/shutdown", healthcheck.shutdown);
app.get("/", function (req, res) {
  step.warn(req.cookies, 'Cookies');
  res.writeHead(200, {
    'Content-Type': 'text/html'
  });
  res.write("Rent Guarantee Express Server Response!");
  res.end();
});
_utils_tracer__WEBPACK_IMPORTED_MODULE_7__[/* tracer */ "a"].errorMiddleware();
server.applyMiddleware({
  app: app,
  path: '/rent-guarantee-graphql/graphql',
  cors: false
});
/* harmony default export */ __webpack_exports__["default"] = (app);

/***/ }),

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
//# sourceMappingURL=index.edaabd3b90edd95f36f0.hot-update.js.map