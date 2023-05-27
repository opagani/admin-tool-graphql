exports.id = "docker-entrypoint";
exports.modules = {

/***/ "../../modules/app/src/createServer.ts":
/*!**************************************************************************************!*\
  !*** /Users/opagani/projects/zillowgroup/rentals-js/modules/app/src/createServer.ts ***!
  \**************************************************************************************/
/*! exports provided: createSsrServer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createSsrServer */
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_date_now_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.date.now.js */ "core-js/modules/es.date.now.js");
/* harmony import */ var core_js_modules_es_date_now_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_now_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.define-properties.js */ "core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _createRouterMiddleware__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./createRouterMiddleware */ "../../modules/app/src/createRouterMiddleware.ts");
/* harmony import */ var _zg_rentals_logger_node__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @zg-rentals/logger-node */ "../../modules/logger-node/src/index.ts");
/* harmony import */ var _zg_rentals_pontoon_proxy__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @zg-rentals/pontoon-proxy */ "../../modules/pontoon-proxy/src/index.ts");
/* harmony import */ var os__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! os */ "os");
/* harmony import */ var os__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(os__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! cookie-parser */ "cookie-parser");
/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(cookie_parser__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _zg_rentals_particles_js_healthcheck__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @zg-rentals/particles-js-healthcheck */ "../../modules/particles-js-healthcheck/src/index.ts");
/* harmony import */ var _zg_rentals_monitor_node__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @zg-rentals/monitor-node */ "../../modules/monitor-node/src/index.ts");
/* harmony import */ var _zg_rentals_particles_js_proxy__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @zg-rentals/particles-js-proxy */ "../../modules/particles-js-proxy/src/index.ts");
/* harmony import */ var _zg_rentals_trace_node__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @zg-rentals/trace-node */ "../../modules/trace-node/src/index.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

























var createSsrServer = function createSsrServer(options) {
  var app = express__WEBPACK_IMPORTED_MODULE_13___default()();
  var tracer = new _zg_rentals_trace_node__WEBPACK_IMPORTED_MODULE_22__[/* NodeTracer */ "b"]({
    plugin: new _zg_rentals_trace_node__WEBPACK_IMPORTED_MODULE_22__[/* DatadogTracerPlugin */ "a"]({
      service: options.appName,
      version: options.buildNumber.toString()
    })
  });
  tracer.traceApp(app);
  var logger = Object(_zg_rentals_logger_node__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"])({
    logPath: process.env.NODE_OUT_FILE,
    level: process.env.LOG_LEVEL,
    mixin: function mixin() {
      return tracer.logMixin();
    }
  }).child({
    webApp: options.appName
  });
  var nodeMonitor = new _zg_rentals_monitor_node__WEBPACK_IMPORTED_MODULE_20__[/* NodeMonitor */ "a"]({
    logger: logger,
    reporters: [options.pontoonApiKey && new _zg_rentals_monitor_node__WEBPACK_IMPORTED_MODULE_20__[/* NodeMonitorPontoonReporter */ "b"]({
      logger: logger,
      webappName: options.appName,
      api: 'https://pontoon.hotpads.com',
      apiKey: options.pontoonApiKey
    })].filter(Boolean),
    plugins: [new _zg_rentals_monitor_node__WEBPACK_IMPORTED_MODULE_20__[/* NodeVitalsPlugin */ "c"]({
      logger: logger,
      webappName: options.appName,
      buildNumber: options.buildNumber,
      gitCommit: options.gitCommit
    }), options.pontoonApiKey && new _zg_rentals_monitor_node__WEBPACK_IMPORTED_MODULE_20__[/* PontoonHeartbeatPlugin */ "d"]({
      logger: logger,
      webappName: options.appName,
      api: 'https://pontoon.hotpads.com',
      apiKey: options.pontoonApiKey,
      startupDate: Date.now(),
      buildDate: options.buildDate,
      buildId: options.buildNumber,
      commitId: options.gitCommit,
      gitBranch: options.gitBranch
    })].filter(Boolean)
  }); // Setup stock middleware

  app.use(function (req, res, next) {
    res.locals.startTime = Date.now();
    next();
  });
  app.disable('x-powered-by');
  app.use(express__WEBPACK_IMPORTED_MODULE_13___default.a.json({
    limit: '5mb'
  })); // @ts-ignore

  app.use(cookie_parser__WEBPACK_IMPORTED_MODULE_18___default()({}, {
    decode: function decode(c) {
      return c;
    }
  })); // swallows favicon requests

  if (!options.isProduction) {
    app.use('*/favicon.ico', function (req, res) {
      return res.status(200).send();
    });
  }

  if (options.pontoonApiKey) {
    Object(_zg_rentals_pontoon_proxy__WEBPACK_IMPORTED_MODULE_16__[/* createPontoonProxy */ "a"])({
      app: app,
      proxyPath: options.basePath + '/pontoon-proxy',
      logger: logger,
      apiKey: options.pontoonApiKey,
      api: 'https://pontoon.hotpads.com',
      serverName: os__WEBPACK_IMPORTED_MODULE_17___default.a.hostname(),
      serviceName: options.appName
    });
  }

  app.use(options.basePath + '/log', Object(_zg_rentals_logger_node__WEBPACK_IMPORTED_MODULE_15__[/* getLogMiddleware */ "d"])(logger));
  var httpLogger = Object(_zg_rentals_logger_node__WEBPACK_IMPORTED_MODULE_15__[/* getHttpLogger */ "c"])({
    logger: logger
  });
  app.use(httpLogger);
  var healthcheck = new _zg_rentals_particles_js_healthcheck__WEBPACK_IMPORTED_MODULE_19__[/* Healthcheck */ "a"]({
    accessToken: options.healthcheckAccessToken,
    logger: logger,
    buildNumber: options.buildNumber,
    onPing: function onPing(_ref) {
      var response = _ref.response,
          hasAccess = _ref.hasAccess;
      nodeMonitor.increment({
        name: 'healthcheck.ping',
        amount: 1
      });
      return _objectSpread(_objectSpread({}, response), hasAccess ? {
        zgApi: options.zgApi
      } : {});
    }
  });
  app.use("*/check", healthcheck.check);
  app.use("*/shutdown", healthcheck.shutdown); // adds history object for use in router

  app.use(Object(_createRouterMiddleware__WEBPACK_IMPORTED_MODULE_14__[/* createRouterMiddleware */ "a"])()); // Add defualt proxy that goes from basePath/proxy* -> zgApi
  // Consuming apps can add additional proxies if necessary

  var apiProxy = new _zg_rentals_particles_js_proxy__WEBPACK_IMPORTED_MODULE_21__[/* NodeProxy */ "a"]({
    secure: options.isProduction,
    proxyPath: options.basePath + '/proxy/',
    host: options.host,
    logger: logger,
    stringifyBody: true,
    brandOverride: 'zillow'
  }).middleware();
  app.use(options.basePath + '/proxy/*', function (req, res, next) {
    return apiProxy(req, res, next);
  });
  return {
    app: app,
    tracer: tracer,
    logger: logger,
    nodeMonitor: nodeMonitor
  };
};

/***/ })

};
//# sourceMappingURL=docker-entrypoint.e40bbd31ce182d9d9995.hot-update.js.map