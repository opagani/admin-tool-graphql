exports.id = "docker-entrypoint";
exports.modules = {

/***/ "../../modules/app/src/createRouterMiddleware.ts":
/*!************************************************************************************************!*\
  !*** /Users/opagani/projects/zillowgroup/rentals-js/modules/app/src/createRouterMiddleware.ts ***!
  \************************************************************************************************/
/*! exports provided: createRouterMiddleware */
/*! exports used: createRouterMiddleware */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createRouterMiddleware; });
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! url */ "url");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var history_createMemoryHistory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! history/createMemoryHistory */ "history/createMemoryHistory");
/* harmony import */ var history_createMemoryHistory__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(history_createMemoryHistory__WEBPACK_IMPORTED_MODULE_3__);





var stringify = function stringify(obj) {
  var str = [];
  var p;

  for (p in obj) {
    if (obj.hasOwnProperty(p) && (obj[p] || obj[p] === false)) {
      // @ts-ignore
      str.push("".concat(encodeURIComponent(p), "=").concat(encodeURIComponent(obj[p])));
    }
  }

  if (str.length > 0) {
    return "?".concat(str.join('&'));
  }

  return '';
};

var createRouterMiddleware = function createRouterMiddleware() {
  return function (req, res, next) {
    var _url$parse = url__WEBPACK_IMPORTED_MODULE_2___default.a.parse(req.originalUrl),
        pathname = _url$parse.pathname;

    var locationInitState = {
      search: stringify(req.query),
      pathname: pathname,
      name: pathname
    };
    var history = history_createMemoryHistory__WEBPACK_IMPORTED_MODULE_3___default()({
      // @ts-ignore
      initialEntries: [locationInitState],
      initialIndex: 0
    });
    res.locals.history = history;
    next();
  };
};

/***/ }),

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

/***/ "../../modules/app/src/index.ts":
/*!*******************************************************************************!*\
  !*** /Users/opagani/projects/zillowgroup/rentals-js/modules/app/src/index.ts ***!
  \*******************************************************************************/
/*! exports provided: loadDotEnv, loadDotEnvYargsMiddleware, setYargsDefaultsMiddleware, yargsToCamelCase, hostToBrand, reqToBrand, reqToIp, requestToLocationState, getAssetManifest, createScriptTag, createSerializedStateTag, createSsrServer */
/*! exports used: loadDotEnv */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./env */ "../../modules/app/src/env.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _env__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony import */ var _brand__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./brand */ "../../modules/app/src/brand.ts");
/* harmony import */ var _ip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ip */ "../../modules/app/src/ip.ts");
/* harmony import */ var _web__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./web */ "../../modules/app/src/web.ts");
/* harmony import */ var _createServer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./createServer */ "../../modules/app/src/createServer.ts");






/***/ }),

/***/ "../../modules/cli-tools/src/subprocess.ts":
/*!******************************************************************************************!*\
  !*** /Users/opagani/projects/zillowgroup/rentals-js/modules/cli-tools/src/subprocess.ts ***!
  \******************************************************************************************/
/*! exports provided: setDefaultCwd, BatchError, run, batch */
/*! exports used: BatchError, run, setDefaultCwd */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return setDefaultCwd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BatchError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return run; });
/* unused harmony export batch */
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.trim.js */ "core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.promise.finally.js */ "core-js/modules/es.promise.finally.js");
/* harmony import */ var core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.array.splice.js */ "core-js/modules/es.array.splice.js");
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_map_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.map.js */ "core-js/modules/es.map.js");
/* harmony import */ var core_js_modules_es_map_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_map_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! core-js/modules/es.object.define-properties.js */ "core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var _dry_run__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./dry-run */ "../../modules/cli-tools/src/dry-run.ts");
/* harmony import */ var os__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! os */ "os");
/* harmony import */ var os__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(os__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var child_process__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! child_process */ "child_process");
/* harmony import */ var child_process__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(child_process__WEBPACK_IMPORTED_MODULE_36__);
/* harmony import */ var _zg_rentals_logger_node__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @zg-rentals/logger-node */ "../../modules/logger-node/src/index.ts");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



































function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var REPO_ROOT = process.cwd();
function setDefaultCwd(cwd) {
  REPO_ROOT = cwd;
}
var BatchError = /*#__PURE__*/function (_Error) {
  _inherits(BatchError, _Error);

  var _super = _createSuper(BatchError);

  function BatchError() {
    _classCallCheck(this, BatchError);

    return _super.apply(this, arguments);
  }

  return BatchError;
}( /*#__PURE__*/_wrapNativeSuper(Error));

function indent(str) {
  return ' > ' + str.trim().replace(/\n/g, '\n > ');
}

function run(_x) {
  return _run.apply(this, arguments);
}

function _run() {
  _run = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(options) {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt("return", new Promise( /*#__PURE__*/function () {
              var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(resolve, reject) {
                var _subprocess$stdout, _subprocess$stderr;

                var logger, blockInDryRun, commandText, _options$args, args, cmd, _options$opts, opts, subprocess, output, error, logOutput;

                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        logOutput = function _logOutput() {
                          output && logger.info("in subprocess:\n".concat(indent(output)));
                          error && logger.error("in subprocess:\n".concat(indent(error)));
                        };

                        logger = options.logger || Object(_zg_rentals_logger_node__WEBPACK_IMPORTED_MODULE_37__[/* getChildLogger */ "b"])(options.action);
                        blockInDryRun = options.blockInDryRun;
                        commandText = "".concat(options.cmd, " ").concat((options.args || []).join(' '));

                        if (!(blockInDryRun && Object(_dry_run__WEBPACK_IMPORTED_MODULE_34__[/* isDryRun */ "a"])())) {
                          _context.next = 7;
                          break;
                        }

                        logger.info("DRY-RUN Running command: ".concat(commandText));
                        return _context.abrupt("return", resolve({
                          output: ''
                        }));

                      case 7:
                        logger.debug("Running command: ".concat(commandText));
                        _options$args = options.args, args = _options$args === void 0 ? [] : _options$args, cmd = options.cmd, _options$opts = options.opts, opts = _options$opts === void 0 ? {} : _options$opts;
                        subprocess = Object(child_process__WEBPACK_IMPORTED_MODULE_36__["spawn"])(cmd, args, _objectSpread(_objectSpread({
                          cwd: REPO_ROOT
                        }, opts), {}, {
                          env: _objectSpread(_objectSpread({}, process.env), opts.env || {}),
                          stdio: opts.stdio || 'pipe'
                        }));
                        output = '';
                        error = '';
                        (_subprocess$stdout = subprocess.stdout) === null || _subprocess$stdout === void 0 ? void 0 : _subprocess$stdout.on('data', function (data) {
                          output += data.toString();
                        });
                        (_subprocess$stderr = subprocess.stderr) === null || _subprocess$stderr === void 0 ? void 0 : _subprocess$stderr.on('data', function (data) {
                          error += data.toString();
                        });
                        subprocess.on('error', function (error) {
                          logOutput();
                          reject(error);
                        });

                        if (opts.detached) {
                          subprocess.unref();
                          resolve({
                            output: '',
                            subprocess: subprocess
                          });
                        } else {
                          subprocess.on('close', function (code) {
                            if (code && isFinite(code)) {
                              logOutput();
                              reject(new Error("Subprocess failed with code ".concat(code)));
                              return;
                            }

                            output = output.trim();

                            if (output) {
                              logger.debug("Command output:\n".concat(indent(output)));
                            }

                            resolve({
                              output: output,
                              subprocess: subprocess
                            });
                          });
                        }

                      case 16:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              }));

              return function (_x3, _x4) {
                return _ref.apply(this, arguments);
              };
            }()));

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _run.apply(this, arguments);
}

function batch(_x2) {
  return _batch.apply(this, arguments);
}

function _batch() {
  _batch = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(processes) {
    var parallel,
        results,
        logger,
        failing,
        buildPromises,
        maxParallel,
        _args3 = arguments;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            parallel = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : true;
            results = [];
            logger = Object(_zg_rentals_logger_node__WEBPACK_IMPORTED_MODULE_37__[/* default */ "a"])();
            failing = false;
            buildPromises = processes.map(function (process) {
              return function () {
                return run(_objectSpread(_objectSpread({}, process), {}, {
                  logger: logger
                })).then(function (output) {
                  logger.info(process.action);
                  return output.output;
                })["catch"](function (e) {
                  logger.error(process.action);

                  if (e.message) {
                    logger.error(e.message);
                  }

                  failing = true;
                  throw e;
                });
              };
            });
            maxParallel = parallel ? Math.min(os__WEBPACK_IMPORTED_MODULE_35___default.a.cpus().length - 1, buildPromises.length) : 1;
            return _context3.abrupt("return", new Promise(function (resolve, reject) {
              function runTask(runner) {
                return runner().then(function (result) {
                  results.push(result);
                  return;
                })["catch"](function (e) {
                  results.push(e);
                })["finally"](function () {
                  runNextTask();
                });
              }

              function runNextTask() {
                if (buildPromises.length) {
                  var runnable = buildPromises.shift();

                  if (runnable) {
                    runTask(runnable);
                  }
                }

                if (!buildPromises.length && results.length === processes.length) {
                  if (failing) {
                    reject(new BatchError('Batch processes failed'));
                  }

                  resolve(results);
                }
              }

              buildPromises.splice(0, maxParallel).forEach(function (promise) {
                runTask(promise);
              });
            }));

          case 7:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _batch.apply(this, arguments);
}

/***/ }),

/***/ "../../modules/cli-tools/src/yargs.ts":
/*!*************************************************************************************!*\
  !*** /Users/opagani/projects/zillowgroup/rentals-js/modules/cli-tools/src/yargs.ts ***!
  \*************************************************************************************/
/*! exports provided: parserConfiguration, getYargs, commandDirOptions, runBuilder, run, buildTest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export parserConfiguration */
/* unused harmony export getYargs */
/* unused harmony export commandDirOptions */
/* unused harmony export runBuilder */
/* unused harmony export run */
/* unused harmony export buildTest */
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.define-properties.js */ "core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.parse-int.js */ "core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.object.entries.js */ "core-js/modules/es.object.entries.js");
/* harmony import */ var core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var _zg_rentals_logger_node__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @zg-rentals/logger-node */ "../../modules/logger-node/src/index.ts");
/* harmony import */ var yargs_parser__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! yargs-parser */ "yargs-parser");
/* harmony import */ var yargs_parser__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(yargs_parser__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var yargs_unparser__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! yargs-unparser */ "yargs-unparser");
/* harmony import */ var yargs_unparser__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(yargs_unparser__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var yargs__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! yargs */ "yargs");
/* harmony import */ var yargs__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(yargs__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var _subprocess__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./subprocess */ "../../modules/cli-tools/src/subprocess.ts");
/* harmony import */ var _dry_run__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./dry-run */ "../../modules/cli-tools/src/dry-run.ts");
















var _excluded = ["handler", "command", "builder"];

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






















var parserConfiguration = {
  'strip-aliased': true,
  'camel-case-expansion': false,
  'greedy-arrays': true,
  'populate--': true
}; // eslint-disable-next-line @typescript-eslint/ban-types

function getYargs(yargs, repoRoot) {
  return yargs.usage('$0 <command> [options]').help('help', 'Show this help screen').alias('help', 'h').completion('completion', false).option('dry-run', {
    "default": false,
    description: 'Run without actually making modifications or destructive operations',
    global: true,
    group: 'Global',
    type: 'boolean'
  }).option('repo-root', {
    "default": '',
    description: 'Path to the root of the repository',
    global: true,
    group: 'Global',
    hidden: true,
    normalize: true,
    type: 'string'
  }).option('verbosity', {
    alias: 'v',
    "default": process.env.RJS_VERBOSITY ? parseInt(process.env.RJS_VERBOSITY) : 2,
    description: 'Set the verbosity of the script output. Use -v, -vv, or -vvv for more verbose',
    global: true,
    group: 'Global',
    type: 'count'
  }).option('ci', {
    "default": false,
    description: 'Sets defaults for running scripts in a CI environment',
    global: true,
    group: 'Global',
    hidden: true,
    type: 'boolean'
  }).middleware([function (argv) {
    argv['repo-root'] = String(argv['repo-root'] || repoRoot);
    Object(_subprocess__WEBPACK_IMPORTED_MODULE_35__[/* setDefaultCwd */ "c"])(String(argv['repo-root']));
  }, function (argv) {
    Object(_dry_run__WEBPACK_IMPORTED_MODULE_36__[/* setDryRun */ "b"])(argv['dry-run']);
  }, function (argv) {
    process.env.RJS_VERBOSITY = argv.verbosity.toString();

    if (argv.ci) {
      process.env.CI = 'true';
    }
  }, function () {
    if (process.env.SUDO_UID) {
      var logger = Object(_zg_rentals_logger_node__WEBPACK_IMPORTED_MODULE_30__[/* default */ "a"])();
      logger.error('Do not run commands with `sudo`! If elevated permissions are required, commands will prompt you for your password only if and when necessary.');
      process.exit(1);
    }
  }], true).wrap(Math.min(120, process.stdout.columns)).showHidden('show-advanced', 'Show advanced options').group('show-advanced', 'Global').global('show-advanced').group('help', 'Global').global('help').strict().parserConfiguration(parserConfiguration);
}

function fallbackHandler(argv) {
  var logger = Object(_zg_rentals_logger_node__WEBPACK_IMPORTED_MODULE_30__[/* default */ "a"])({
    level: Object(_zg_rentals_logger_node__WEBPACK_IMPORTED_MODULE_30__[/* verbosityToLogLevel */ "e"])(argv.verbosity)
  });
  logger.info(argv);
  throw new Error('No handler defined');
}

var commandDirOptions = {
  extensions: ['ts'],
  exclude: /(?:__tests__)/,
  recurse: false,
  visit: function visitor(module, filepath, filename) {
    var _handler = module.handler,
        command = module.command,
        builder = module.builder,
        rest = _objectWithoutProperties(module, _excluded);

    var commandName = command || path__WEBPACK_IMPORTED_MODULE_34___default.a.basename(filename || '', '.ts');
    return _objectSpread(_objectSpread({}, rest), {}, {
      builder: builder || function (yargs) {
        return yargs.strict(false);
      },
      command: commandName,
      handler: function () {
        var _handler2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(argv) {
          var logger;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  logger = Object(_zg_rentals_logger_node__WEBPACK_IMPORTED_MODULE_30__[/* default */ "a"])({
                    level: Object(_zg_rentals_logger_node__WEBPACK_IMPORTED_MODULE_30__[/* verbosityToLogLevel */ "e"])(argv.verbosity)
                  });
                  logger.trace("Resolved CLI arguments:\n".concat(Object.entries(argv).map(function (entry) {
                    return " ".concat(entry[0], "=").concat(entry[1]);
                  })));
                  process.on('unhandledRejection', function (reason, promise) {
                    logger.error("Unhandled Rejection at: ".concat(promise, " reason: ").concat(reason));
                  });
                  _context.prev = 3;

                  if (!_handler) {
                    _context.next = 9;
                    break;
                  }

                  _context.next = 7;
                  return _handler(argv);

                case 7:
                  _context.next = 10;
                  break;

                case 9:
                  fallbackHandler(argv);

                case 10:
                  _context.next = 16;
                  break;

                case 12:
                  _context.prev = 12;
                  _context.t0 = _context["catch"](3);

                  if (!(_context.t0 instanceof _subprocess__WEBPACK_IMPORTED_MODULE_35__[/* BatchError */ "a"])) {
                    logger.error(_context.t0.message);
                  }

                  process.exitCode = 1;

                case 16:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, null, [[3, 12]]);
        }));

        function handler(_x) {
          return _handler2.apply(this, arguments);
        }

        return handler;
      }()
    });
  }
};
function runBuilder(_x2) {
  return _runBuilder.apply(this, arguments);
}

function _runBuilder() {
  _runBuilder = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(builder) {
    var cmd,
        _cmd$split,
        _cmd$split2,
        command,
        extra,
        inputArgs,
        yargs,
        middlewares,
        processSpy,
        out,
        resolvedOut,
        argv,
        _args4 = arguments;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            cmd = _args4.length > 1 && _args4[1] !== undefined ? _args4[1] : '';
            _cmd$split = cmd.split(' -- '), _cmd$split2 = _slicedToArray(_cmd$split, 2), command = _cmd$split2[0], extra = _cmd$split2[1];
            inputArgs = yargs_parser__WEBPACK_IMPORTED_MODULE_31___default()("".concat(command).concat(extra ? " -- ".concat(extra) : ''), {
              configuration: parserConfiguration
            });
            yargs = yargs__WEBPACK_IMPORTED_MODULE_33___default()(yargs_unparser__WEBPACK_IMPORTED_MODULE_32___default()(inputArgs));
            middlewares = [];
            jest.spyOn(yargs, 'middleware').mockImplementation(function (middleware) {
              middlewares.push.apply(middlewares, _toConsumableArray(Array.isArray(middleware) ? middleware : [middleware]));
              return yargs;
            });

            if (!(typeof builder !== 'function')) {
              _context4.next = 8;
              break;
            }

            throw new Error('Builder must be a function');

          case 8:
            processSpy = jest.spyOn(process, 'exit').mockImplementation(function () {
              throw new Error('failed');
            });
            out = builder(getYargs(yargs, '/test-repo-root').middleware(function (argv) {
              var level = Object(_zg_rentals_logger_node__WEBPACK_IMPORTED_MODULE_30__[/* verbosityToLogLevel */ "e"])(argv.verbosity);
              Object(_zg_rentals_logger_node__WEBPACK_IMPORTED_MODULE_30__[/* default */ "a"])({
                level: level
              });
            }));
            _context4.next = 12;
            return out instanceof Promise ? out : Promise.resolve(out);

          case 12:
            resolvedOut = _context4.sent;
            argv = resolvedOut.argv;
            middlewares.forEach(function (m) {
              m(argv);
            });
            processSpy.mockRestore();
            return _context4.abrupt("return", argv);

          case 17:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _runBuilder.apply(this, arguments);
}

function _run2(_x3, _x4) {
  return _run.apply(this, arguments);
}



function _run() {
  _run = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(builder, handler) {
    var cmd,
        argv,
        _args5 = arguments;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            cmd = _args5.length > 2 && _args5[2] !== undefined ? _args5[2] : '';
            _context5.next = 3;
            return runBuilder(builder, cmd);

          case 3:
            argv = _context5.sent;
            _context5.next = 6;
            return handler(argv);

          case 6:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _run.apply(this, arguments);
}

function buildTest(command, builder, handler) {
  return {
    build: function () {
      var _build = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var cmd,
            _args2 = arguments;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                cmd = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : '';
                return _context2.abrupt("return", runBuilder(builder, cmd));

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function build() {
        return _build.apply(this, arguments);
      }

      return build;
    }(),
    run: function () {
      var _run3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var cmd,
            _args3 = arguments;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                cmd = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : '';
                return _context3.abrupt("return", _run2(builder, handler, cmd));

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function run() {
        return _run3.apply(this, arguments);
      }

      return run;
    }()
  };
}

/***/ }),

/***/ "../../modules/logger-node/src/get-log-middleware.ts":
/*!****************************************************************************************************!*\
  !*** /Users/opagani/projects/zillowgroup/rentals-js/modules/logger-node/src/get-log-middleware.ts ***!
  \****************************************************************************************************/
/*! exports provided: getLogMiddleware */
/*! exports used: getLogMiddleware */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getLogMiddleware; });
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.reduce.js */ "core-js/modules/es.array.reduce.js");
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.define-properties.js */ "core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_20__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






















function getLogMiddleware(logger) {
  return function logMiddleware(req, res) {
    var _req$body;

    var logs = ((_req$body = req.body) === null || _req$body === void 0 ? void 0 : _req$body.logs) || req.body;

    if (logs && Array.isArray(logs)) {
      logs.forEach(function (logEvent) {
        var level = logEvent.level,
            ts = logEvent.ts,
            messages = logEvent.messages,
            bindings = logEvent.bindings;
        var bindingsAsObj = bindings.reduce(function (acc, binding) {
          return _objectSpread(_objectSpread({}, acc), binding);
        }, {});
        bindingsAsObj.browser = true;
        var childLogger = logger.child(bindingsAsObj);

        if (messages[0]) {
          if (_typeof(messages[0]) !== 'object') {
            messages.unshift({});
          }

          messages[0] = _objectSpread(_objectSpread({}, messages[0]), {}, {
            requestId: req.id,
            time: ts
          });
          childLogger[level.label].apply(childLogger, [messages[0]].concat(_toConsumableArray(messages.slice(1))));
        }
      });
    }

    res.send('ok');
  };
}

/***/ }),

/***/ "../../modules/logger-node/src/index.ts":
/*!***************************************************************************************!*\
  !*** /Users/opagani/projects/zillowgroup/rentals-js/modules/logger-node/src/index.ts ***!
  \***************************************************************************************/
/*! exports provided: resetLoggers, getLogMiddleware, getChildLogger, defaultSerializers, getHttpLogger, verbosityToLogLevel, logSync, ResponseError, parseLookoutResponse, registerChildLoggers, getChildLoggerLevels, setChildLogLevels, default */
/*! exports used: default, getChildLogger, getHttpLogger, getLogMiddleware, verbosityToLogLevel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _get_node_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-node-logger */ "../../modules/logger-node/src/get-node-logger.ts");
/* harmony import */ var _get_log_middleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-log-middleware */ "../../modules/logger-node/src/get-log-middleware.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "d", function() { return _get_log_middleware__WEBPACK_IMPORTED_MODULE_1__["a"]; });

/* harmony import */ var _get_child_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./get-child-logger */ "../../modules/logger-node/src/get-child-logger.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _get_child_logger__WEBPACK_IMPORTED_MODULE_2__["a"]; });

/* harmony import */ var _get_http_logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./get-http-logger */ "../../modules/logger-node/src/get-http-logger.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "c", function() { return _get_http_logger__WEBPACK_IMPORTED_MODULE_3__["a"]; });

/* harmony import */ var _verbosity_to_level__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./verbosity-to-level */ "../../modules/logger-node/src/verbosity-to-level.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "e", function() { return _verbosity_to_level__WEBPACK_IMPORTED_MODULE_4__["a"]; });

/* harmony import */ var _log_sync__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./log-sync */ "../../modules/logger-node/src/log-sync.ts");







/* harmony default export */ __webpack_exports__["a"] = (_get_node_logger__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);

/***/ }),

/***/ "../../modules/particles-js-proxy/src/httpMiddleware/index.ts":
/*!*************************************************************************************************************!*\
  !*** /Users/opagani/projects/zillowgroup/rentals-js/modules/particles-js-proxy/src/httpMiddleware/index.ts ***!
  \*************************************************************************************************************/
/*! exports provided: createHttpMiddlewareProxy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createHttpMiddlewareProxy */
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__);
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
/* harmony import */ var http_proxy_middleware__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! http-proxy-middleware */ "http-proxy-middleware");
/* harmony import */ var http_proxy_middleware__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(http_proxy_middleware__WEBPACK_IMPORTED_MODULE_11__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













var createHttpMiddlewareProxy = function createHttpMiddlewareProxy(proxyPath, opts) {
  var baseOptions = {
    pathRewrite: function pathRewrite(path) {
      return path.replace(proxyPath, '');
    }
  };
  return Object(http_proxy_middleware__WEBPACK_IMPORTED_MODULE_11__["createProxyMiddleware"])(_objectSpread(_objectSpread({}, baseOptions), opts));
};

/***/ }),

/***/ "../../modules/particles-js-proxy/src/index.ts":
/*!**********************************************************************************************!*\
  !*** /Users/opagani/projects/zillowgroup/rentals-js/modules/particles-js-proxy/src/index.ts ***!
  \**********************************************************************************************/
/*! exports provided: createHttpMiddlewareProxy, NodeProxy */
/*! exports used: NodeProxy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NodeProxy; });
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var http_proxy_middleware__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! http-proxy-middleware */ "http-proxy-middleware");
/* harmony import */ var http_proxy_middleware__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(http_proxy_middleware__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _zg_rentals_particles_js_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @zg-rentals/particles-js-utils */ "../../modules/particles-js-utils/src/index.ts");
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! querystring */ "querystring");
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(querystring__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _httpMiddleware__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./httpMiddleware */ "../../modules/particles-js-proxy/src/httpMiddleware/index.ts");








function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var NodeProxy = function NodeProxy(options) {
  var _this = this;

  _classCallCheck(this, NodeProxy);

  _defineProperty(this, "host", 'http://localhost');

  _defineProperty(this, "timeout", void 0);

  _defineProperty(this, "proxyPath", void 0);

  _defineProperty(this, "logger", void 0);

  _defineProperty(this, "router", void 0);

  _defineProperty(this, "ws", void 0);

  _defineProperty(this, "stringifyBody", void 0);

  _defineProperty(this, "secure", void 0);

  _defineProperty(this, "isDev", void 0);

  _defineProperty(this, "defaultBrand", void 0);

  _defineProperty(this, "brandOverride", void 0);

  _defineProperty(this, "middleware", function () {
    var proxyOptions = {
      xfwd: true,
      logProvider: function logProvider() {
        return {
          log: _this.logger ? _this.logger.info.bind(_this.logger) : function () {},
          debug: _this.logger ? _this.logger.debug.bind(_this.logger) : function () {},
          info: _this.logger ? _this.logger.info.bind(_this.logger) : function () {},
          warn: _this.logger ? _this.logger.warn.bind(_this.logger) : function () {},
          error: _this.logger ? _this.logger.error.bind(_this.logger) : function () {}
        };
      },
      onProxyReq: _this._createRequestHandler(_this.isDev),
      pathRewrite: function pathRewrite(path, req) {
        var rewrote = req.originalUrl.replace(_this.proxyPath, '');
        _this.logger && _this.logger.debug('resolved proxy path=%s to %s', path, rewrote);
        return rewrote;
      },
      ws: _this.ws,
      changeOrigin: true,
      timeout: _this.timeout,
      target: typeof _this.host === 'string' ? _this.host : 'http://localhost',
      router: typeof _this.host === 'function' ? _this.host : _this.router,
      secure: _this.secure
    };
    _this.logger && _this.logger.info(proxyOptions, 'http proxy middleware options');
    return Object(http_proxy_middleware__WEBPACK_IMPORTED_MODULE_7__["createProxyMiddleware"])(proxyOptions);
  });

  _defineProperty(this, "_createRequestHandler", function (isDev) {
    return function (proxyReq, srcReq) {
      var defaultBrand = _this.defaultBrand,
          stringifyBody = _this.stringifyBody,
          brandOverride = _this.brandOverride;
      var brand = _zg_rentals_particles_js_utils__WEBPACK_IMPORTED_MODULE_8__[/* Utils */ "b"].getBrand(srcReq, isDev);
      var ip = _zg_rentals_particles_js_utils__WEBPACK_IMPORTED_MODULE_8__[/* Utils */ "b"].getIp(srcReq);

      if (brandOverride) {
        proxyReq.setHeader('X-Brand', brandOverride);
      } else if (brand) {
        proxyReq.setHeader('X-Brand', brand);
      } else if (defaultBrand) {
        proxyReq.setHeader('X-Brand', defaultBrand);
      } else {
        _this.logger && _this.logger.warn({
          headers: srcReq.headers
        }, 'could not set X-Brand and no default');
      }

      if (ip) {
        proxyReq.setHeader('X-Client-Ip', ip);
      } else {
        _this.logger && _this.logger.warn({
          headers: srcReq.headers,
          connection: srcReq.connection
        }, 'could not set X-Client-Ip');
      }

      _this.logger && _this.logger.info({
        proxy: {
          headers: {
            'x-brand': proxyReq.getHeader('X-Brand'),
            'x-client-ip': proxyReq.getHeader('X-Client-Ip')
          }
        },
        source: {
          headers: srcReq.headers,
          url: srcReq.url,
          method: srcReq.method
        }
      }, 'handling proxy request'); // if body-parser middleware runs before request gets to this proxy
      // ... we probably want to re-stringify the body for the outgoing request
      // @ts-ignore these are valid if the srcReq is from express

      if (stringifyBody && srcReq.body && Object.keys(srcReq.body).length) {
        var contentType = proxyReq.getHeader('Content-Type');

        var writeBody = function writeBody(body) {
          proxyReq.setHeader('Content-Length', Buffer.byteLength(body));
          proxyReq.write(body);
        };

        if (typeof contentType === 'string') {
          if (contentType.includes('application/json')) {
            // @ts-ignore
            writeBody(JSON.stringify(srcReq.body));
          } else if (contentType.includes('application/x-www-form-urlencoded')) {
            // @ts-ignore
            writeBody(querystring__WEBPACK_IMPORTED_MODULE_9___default.a.stringify(srcReq.body));
          }
        }
      }
    };
  });

  var host = options.host,
      proxyPath = options.proxyPath,
      _options$timeout = options.timeout,
      timeout = _options$timeout === void 0 ? 60000 : _options$timeout,
      logger = options.logger,
      router = options.router,
      _options$ws = options.ws,
      ws = _options$ws === void 0 ? false : _options$ws,
      _options$stringifyBod = options.stringifyBody,
      _stringifyBody = _options$stringifyBod === void 0 ? false : _options$stringifyBod,
      _defaultBrand = options.defaultBrand,
      secure = options.secure,
      _isDev = options.isDev,
      _brandOverride = options.brandOverride;

  this.host = host || this.host;
  this.timeout = timeout;
  this.proxyPath = proxyPath;
  this.router = router;
  this.ws = ws;
  this.stringifyBody = _stringifyBody;
  this.logger = logger;
  this.defaultBrand = _defaultBrand;
  this.secure = secure;
  this.isDev = _isDev;
  this.brandOverride = _brandOverride;
};

/***/ }),

/***/ "../../modules/pontoon-proxy/src/index.ts":
/*!*****************************************************************************************!*\
  !*** /Users/opagani/projects/zillowgroup/rentals-js/modules/pontoon-proxy/src/index.ts ***!
  \*****************************************************************************************/
/*! exports provided: createPontoonProxy */
/*! exports used: createPontoonProxy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./proxy */ "../../modules/pontoon-proxy/src/proxy.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _proxy__WEBPACK_IMPORTED_MODULE_0__["a"]; });



/***/ }),

/***/ "../../modules/pontoon-proxy/src/proxy.ts":
/*!*****************************************************************************************!*\
  !*** /Users/opagani/projects/zillowgroup/rentals-js/modules/pontoon-proxy/src/proxy.ts ***!
  \*****************************************************************************************/
/*! exports provided: createPontoonProxy */
/*! exports used: createPontoonProxy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createPontoonProxy; });
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _zg_rentals_pontoon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @zg-rentals/pontoon */ "../../modules/pontoon/src/index.ts");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _validate__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./validate */ "../../modules/pontoon-proxy/src/validate.ts");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }










var PONTOON_PATH_PREFIX = 'pontoon/api/';
var REQUIRED_OPTIONS = ['api', 'apiKey', 'app', 'serverName', 'serviceName', 'proxyPath'];
function createPontoonProxy(options) {
  var missingOptions = REQUIRED_OPTIONS.filter(function (opt) {
    return !options[opt];
  });

  if (missingOptions.length) {
    throw new Error("Cannot proxy pontoon requests without required options: ".concat(missingOptions.join(', ')));
  }

  var api = options.api,
      apiKey = options.apiKey,
      app = options.app,
      hostname = options.hostname,
      logger = options.logger,
      serverName = options.serverName,
      serviceName = options.serviceName;
  var proxyPath = options.proxyPath;

  if (proxyPath[0] !== '/') {
    proxyPath = "/".concat(proxyPath);
  }

  if (proxyPath[proxyPath.length - 1] !== '/') {
    proxyPath = "".concat(proxyPath, "/");
  }

  var fullProxyPath = proxyPath + PONTOON_PATH_PREFIX;
  var pontoon = new _zg_rentals_pontoon__WEBPACK_IMPORTED_MODULE_7__["Pontoon"]({
    api: api,
    apiKey: apiKey
  });
  app.use("".concat(fullProxyPath, "*"), express__WEBPACK_IMPORTED_MODULE_8___default.a.json(), /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
      var pontoonPath, pontoonRequest, validatedCounts, validatedGauges;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(req.method !== 'POST' || !Object(_validate__WEBPACK_IMPORTED_MODULE_9__[/* validateHeaders */ "c"])(req, hostname))) {
                _context.next = 2;
                break;
              }

              return _context.abrupt("return", next());

            case 2:
              pontoonPath = req.originalUrl.replace(fullProxyPath, '');

              if (!(pontoonPath === 'countPublisher/v2/add')) {
                _context.next = 13;
                break;
              }

              validatedCounts = Object(_validate__WEBPACK_IMPORTED_MODULE_9__[/* validateCounts */ "a"])(req.body);

              if (!validatedCounts) {
                _context.next = 9;
                break;
              }

              pontoonRequest = pontoon.sendCounts({
                serverName: serverName,
                serviceName: serviceName,
                counts: validatedCounts
              });
              _context.next = 11;
              break;

            case 9:
              logger === null || logger === void 0 ? void 0 : logger.error('invalid request to proxy pontoon counts');
              return _context.abrupt("return", res.status(400).end());

            case 11:
              _context.next = 24;
              break;

            case 13:
              if (!(pontoonPath === 'gaugePublisher/v2/add')) {
                _context.next = 23;
                break;
              }

              validatedGauges = Object(_validate__WEBPACK_IMPORTED_MODULE_9__[/* validateGauges */ "b"])(req.body);

              if (!validatedGauges) {
                _context.next = 19;
                break;
              }

              pontoonRequest = pontoon.sendGauges({
                serverName: serverName,
                serviceName: serviceName,
                gauges: validatedGauges
              });
              _context.next = 21;
              break;

            case 19:
              logger === null || logger === void 0 ? void 0 : logger.error('invalid request to proxy pontoon gauges');
              return _context.abrupt("return", res.status(400).end());

            case 21:
              _context.next = 24;
              break;

            case 23:
              return _context.abrupt("return", next());

            case 24:
              logger === null || logger === void 0 ? void 0 : logger.info("proxying ".concat(pontoonPath));
              _context.next = 27;
              return pontoonRequest.then(function () {
                return res.end();
              })["catch"](function (err) {
                logger && logger.error(err);
                res.end(500);
              });

            case 27:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }());
}

/***/ }),

/***/ "../../modules/pontoon-proxy/src/validate.ts":
/*!********************************************************************************************!*\
  !*** /Users/opagani/projects/zillowgroup/rentals-js/modules/pontoon-proxy/src/validate.ts ***!
  \********************************************************************************************/
/*! exports provided: validateHeaders, validateCounts, validateGauges */
/*! exports used: validateCounts, validateGauges, validateHeaders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return validateHeaders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return validateCounts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return validateGauges; });
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_date_now_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.date.now.js */ "core-js/modules/es.date.now.js");
/* harmony import */ var core_js_modules_es_date_now_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_now_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_6__);







var TIME_THESHOLD_MS = 1000 * 60 * 10;
var BATCH_SIZE_THRESHOLD = 1000;
var REQUIRED_HEADERS = ['host', 'referer', 'accept'];

function urlsMatch(hostname, headerUrl) {
  if (headerUrl !== undefined) {
    headerUrl = headerUrl.toLowerCase();
    hostname = hostname.toLowerCase();
    return headerUrl.includes(hostname) || hostname.includes(headerUrl);
  }

  return false;
}

function validateHeaders(req, hostname) {
  var headers = req.headers;
  var isCorsRequest = hostname && (!urlsMatch(hostname, headers.host) || !urlsMatch(hostname, headers.referer));

  if (isCorsRequest || REQUIRED_HEADERS.find(function (header) {
    return headers[header] === undefined;
  })) {
    return false;
  }

  return true;
}
function validateCounts(_ref) {
  var counts = _ref.counts,
      browserTime = _ref.browserTime;
  var minDate = Infinity,
      maxDate = -Infinity;
  var now = Date.now();
  var browserClockOffset = now - browserTime;
  var correctedCounts = {};
  var timestamps = Object.keys(counts);

  if (timestamps.length > BATCH_SIZE_THRESHOLD) {
    return false;
  }

  var foundInvalidData = timestamps.find(function (timestamp) {
    if (Object.keys(counts[timestamp]).length > BATCH_SIZE_THRESHOLD) {
      return true;
    }

    var epochMs = Number(timestamp);

    if (isNaN(epochMs)) {
      return true;
    }

    var correctedTime = epochMs + browserClockOffset;

    if (Math.abs(now - correctedTime) > TIME_THESHOLD_MS) {
      return true;
    }

    minDate = Math.min(minDate, epochMs);
    maxDate = Math.max(maxDate, epochMs);
    correctedCounts[correctedTime] = counts[timestamp];
  });

  if (foundInvalidData || maxDate - minDate > TIME_THESHOLD_MS) {
    return false;
  }

  return correctedCounts;
}
function validateGauges(_ref2) {
  var gauges = _ref2.gauges,
      browserTime = _ref2.browserTime;
  var minDate = Infinity,
      maxDate = -Infinity;
  var now = Date.now();
  var browserClockOffset = now - browserTime;
  var gaugeKeys = Object.keys(gauges);

  if (gaugeKeys.length > BATCH_SIZE_THRESHOLD) {
    return false;
  }

  var foundInvalidData = gaugeKeys.find(function (gaugeKey) {
    return gauges[gaugeKey].find(function (dataPoint) {
      var epochMs = Number(dataPoint[0]);
      dataPoint[1] = Number(dataPoint[1]);

      if (isNaN(epochMs) || isNaN(dataPoint[1])) {
        return true;
      }

      var correctedTime = epochMs + browserClockOffset;

      if (Math.abs(now - correctedTime) > TIME_THESHOLD_MS) {
        return true;
      }

      minDate = Math.min(minDate, epochMs);
      maxDate = Math.max(maxDate, epochMs);
      dataPoint[0] = correctedTime;
    });
  });

  if (foundInvalidData || maxDate - minDate > TIME_THESHOLD_MS) {
    return false;
  }

  return gauges;
}

/***/ }),

/***/ "../../modules/workspace-graph/src/get-graph.ts":
/*!***********************************************************************************************!*\
  !*** /Users/opagani/projects/zillowgroup/rentals-js/modules/workspace-graph/src/get-graph.ts ***!
  \***********************************************************************************************/
/*! exports provided: resetWorkspaceCache, getWorkspaceGraph */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetWorkspaceCache", function() { return resetWorkspaceCache; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWorkspaceGraph", function() { return getWorkspaceGraph; });
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.map.js */ "core-js/modules/es.map.js");
/* harmony import */ var core_js_modules_es_map_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_map_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_string_ends_with_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.string.ends-with.js */ "core-js/modules/es.string.ends-with.js");
/* harmony import */ var core_js_modules_es_string_ends_with_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_ends_with_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.object.define-properties.js */ "core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var glob__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! glob */ "glob");
/* harmony import */ var glob__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(glob__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _zg_rentals_logger_node__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @zg-rentals/logger-node */ "../../modules/logger-node/src/index.ts");
/* harmony import */ var _zg_rentals_cli_tools__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @zg-rentals/cli-tools */ "../../modules/cli-tools/src/index.ts");
/* harmony import */ var _Workspaces__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./Workspaces */ "../../modules/workspace-graph/src/Workspaces.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }























function resetWorkspaceCache() {
  cache = new Map();
}
var cache = new Map();
function getWorkspaceGraph(repoRoot) {
  var logger = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Object(_zg_rentals_logger_node__WEBPACK_IMPORTED_MODULE_19__[/* getChildLogger */ "b"])('Getting workspaces');

  if (cache.has(repoRoot)) {
    logger.debug('Got workspaces from cache');
    return cache.get(repoRoot);
  }

  var rootPackageJson = _zg_rentals_cli_tools__WEBPACK_IMPORTED_MODULE_20__[/* file */ "a"].loadJsonSync({
    filepath: path__WEBPACK_IMPORTED_MODULE_18___default.a.join(repoRoot, 'package.json'),
    logger: logger
  });
  var _rootPackageJson$work = rootPackageJson.workspaces,
      workspaceGlobs = _rootPackageJson$work === void 0 ? [] : _rootPackageJson$work;
  var workspaces = [];
  logger.trace("Workspace globs:\n".concat(workspaceGlobs.map(function (g) {
    return "  - ".concat(g);
  }).join('\n')));
  workspaceGlobs.forEach(function (globString) {
    glob__WEBPACK_IMPORTED_MODULE_17___default.a.sync(globString, {
      cwd: repoRoot
    }).map(function (workspacePath) {
      try {
        var packageJson = _zg_rentals_cli_tools__WEBPACK_IMPORTED_MODULE_20__[/* file */ "a"].loadJsonSync({
          filepath: path__WEBPACK_IMPORTED_MODULE_18___default.a.join(repoRoot, workspacePath, 'package.json'),
          logger: logger
        });
        workspaces.push(_objectSpread(_objectSpread({}, packageJson), {}, {
          location: path__WEBPACK_IMPORTED_MODULE_18___default.a.join(repoRoot, workspacePath)
        }));
      } catch (e) {
        if (!(e.path.endsWith('package.json') && e.code === 'ENOENT')) {
          throw e;
        }
      }
    });
  });
  var graph = new _Workspaces__WEBPACK_IMPORTED_MODULE_21__[/* default */ "a"](_objectSpread(_objectSpread({}, rootPackageJson), {}, {
    location: repoRoot
  }), workspaces);
  cache.set(repoRoot, graph);
  return graph;
}

/***/ }),

/***/ "history/createMemoryHistory":
/*!**********************************************!*\
  !*** external "history/createMemoryHistory" ***!
  \**********************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports) {

module.exports = require("history/createMemoryHistory");

/***/ }),

/***/ "http-proxy-middleware":
/*!****************************************!*\
  !*** external "http-proxy-middleware" ***!
  \****************************************/
/*! no static exports found */
/*! exports used: createProxyMiddleware */
/***/ (function(module, exports) {

module.exports = require("http-proxy-middleware");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports) {

module.exports = require("querystring");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/*! exports used: URL, default */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

};
//# sourceMappingURL=docker-entrypoint.2c16fa815b93c18eebb4.hot-update.js.map