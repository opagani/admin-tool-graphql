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
/* harmony import */ var core_js_modules_es_date_now_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.date.now.js */ "core-js/modules/es.date.now.js");
/* harmony import */ var core_js_modules_es_date_now_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_now_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.define-properties.js */ "core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _createRouterMiddleware__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./createRouterMiddleware */ "../../modules/app/src/createRouterMiddleware.ts");
/* harmony import */ var _zg_rentals_logger_node__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @zg-rentals/logger-node */ "../../modules/logger-node/src/index.ts");
/* harmony import */ var _zg_rentals_pontoon_proxy__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @zg-rentals/pontoon-proxy */ "../../modules/pontoon-proxy/src/index.ts");
/* harmony import */ var os__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! os */ "os");
/* harmony import */ var os__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(os__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! cookie-parser */ "cookie-parser");
/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(cookie_parser__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _zg_rentals_particles_js_healthcheck__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @zg-rentals/particles-js-healthcheck */ "../../modules/particles-js-healthcheck/src/index.ts");
/* harmony import */ var _zg_rentals_particles_js_proxy__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @zg-rentals/particles-js-proxy */ "../../modules/particles-js-proxy/src/index.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




















var createSsrServer = function createSsrServer(options) {
  var app = express__WEBPACK_IMPORTED_MODULE_11___default()();
  options.tracer.traceApp(app); // Setup stock middleware

  app.use(function (req, res, next) {
    res.locals.startTime = Date.now();
    next();
  });
  app.disable('x-powered-by');
  app.use(express__WEBPACK_IMPORTED_MODULE_11___default.a.json({
    limit: '5mb'
  })); // @ts-ignore

  app.use(cookie_parser__WEBPACK_IMPORTED_MODULE_16___default()({}, {
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
    Object(_zg_rentals_pontoon_proxy__WEBPACK_IMPORTED_MODULE_14__[/* createPontoonProxy */ "a"])({
      app: app,
      proxyPath: options.basePath + '/pontoon-proxy',
      logger: options.logger,
      apiKey: options.pontoonApiKey,
      api: 'https://pontoon.hotpads.com',
      serverName: os__WEBPACK_IMPORTED_MODULE_15___default.a.hostname(),
      serviceName: options.appName
    });
  }

  app.use(options.basePath + '/log', Object(_zg_rentals_logger_node__WEBPACK_IMPORTED_MODULE_13__[/* getLogMiddleware */ "d"])(options.logger));
  var httpLogger = Object(_zg_rentals_logger_node__WEBPACK_IMPORTED_MODULE_13__[/* getHttpLogger */ "c"])({
    logger: options.logger
  });
  app.use(httpLogger);
  var healthcheck = new _zg_rentals_particles_js_healthcheck__WEBPACK_IMPORTED_MODULE_17__[/* Healthcheck */ "a"]({
    accessToken: options.healthcheckAccessToken,
    logger: options.logger,
    buildNumber: options.buildNumber,
    onPing: function onPing(_ref) {
      var response = _ref.response,
          hasAccess = _ref.hasAccess;
      options.nodeMonitor.increment({
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

  app.use(Object(_createRouterMiddleware__WEBPACK_IMPORTED_MODULE_12__[/* createRouterMiddleware */ "a"])()); // Add defualt proxy that goes from basePath/proxy* -> zgApi
  // Consuming apps can add additional proxies if necessary

  var apiProxy = new _zg_rentals_particles_js_proxy__WEBPACK_IMPORTED_MODULE_18__[/* NodeProxy */ "a"]({
    secure: options.isProduction,
    proxyPath: options.basePath + '/proxy/',
    host: options.host,
    logger: options.logger,
    stringifyBody: true,
    brandOverride: 'zillow'
  }).middleware();
  app.use(options.basePath + '/proxy/*', function (req, res, next) {
    return apiProxy(req, res, next);
  });
  return app;
};

/***/ }),

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

/***/ "../../modules/particles-js-utils/src/getIp.ts":
/*!**********************************************************************************************!*\
  !*** /Users/opagani/projects/zillowgroup/rentals-js/modules/particles-js-utils/src/getIp.ts ***!
  \**********************************************************************************************/
/*! exports provided: getIpsFromReq, selectValidIp */
/*! exports used: getIpsFromReq, selectValidIp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getIpsFromReq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return selectValidIp; });
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5__);







/* eslint-disable @typescript-eslint/no-var-requires */
var ipRangeCheck = __webpack_require__(/*! ip-range-check */ "ip-range-check"); // TODO: inherently insecure to ip spoofing
// x-client-ip is only set on node -> node proxy
// need to protect against x-client-ip spoof on client requests
// req.get is a case-insensitive match
// http://expressjs.com/en/api.html#req.get


function getIpsFromReq(req) {
  var zgIpHeader = req.headers['x-client-ip'] || req.headers['X-Client-Ip'];
  var xForwadedFor = req.headers['x-forwarded-for'];
  var socketRemoteAddres = (req.socket || {}).remoteAddress;
  return {
    zgIpHeader: zgIpHeader,
    xForwadedFor: xForwadedFor,
    socketRemoteAddres: socketRemoteAddres,
    defaultIpAddress: '0.0.0.0'
  };
}
function selectValidIp(req) {
  var _getIpsFromReq = getIpsFromReq(req),
      zgIpHeader = _getIpsFromReq.zgIpHeader,
      xForwadedFor = _getIpsFromReq.xForwadedFor,
      socketRemoteAddres = _getIpsFromReq.socketRemoteAddres,
      defaultIpAddress = _getIpsFromReq.defaultIpAddress;

  var ipByPrecedence = zgIpHeader || xForwadedFor || socketRemoteAddres || defaultIpAddress; // deal with comma delimited ips

  if (!Array.isArray(ipByPrecedence) && ipByPrecedence.indexOf(',') > -1) {
    var ipArr = ipByPrecedence.replace(/ /g, '').split(',');
    var filteredIps = ipArr.filter(function (ip) {
      return !ipRangeCheck(ip, '10.0.0.0/8') && !ipRangeCheck(ip, '172.16.1.0/12');
    });

    if (filteredIps.length) {
      return filteredIps[0];
    }

    return defaultIpAddress;
  }

  return ipByPrecedence;
}

/***/ }),

/***/ "../../modules/trace-base/src/index.ts":
false,

/***/ "../../modules/trace-node/src/index.ts":
false,

/***/ "../../modules/trace-node/src/plugins/base.ts":
false,

/***/ "../../modules/trace-node/src/plugins/datadog.ts":
false,

/***/ "../../modules/trace-node/src/plugins/index.ts":
false,

/***/ "../../modules/trace-node/src/tracer.ts":
false,

/***/ "core-js/modules/es.date.to-iso-string.js":
false,

/***/ "core-js/modules/es.number.is-finite.js":
false,

/***/ "core-js/modules/es.string.pad-start.js":
false,

/***/ "dd-trace":
false,

/***/ "event-loop-stats":
false,

/***/ "express-http-context":
false,

/***/ "http":
false,

/***/ "https":
false,

/***/ "nano-time":
false,

/***/ "on-headers":
false,

/***/ "perf_hooks":
false

};
//# sourceMappingURL=docker-entrypoint.f711f53689f130369593.hot-update.js.map