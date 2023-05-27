exports.id = "index";
exports.modules = {

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
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "../../node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "../../node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "../../node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "../../node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "../../node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "../../node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "../../node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _zg_rentals_pontoon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @zg-rentals/pontoon */ "../../modules/pontoon/src/index.ts");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! express */ "../../node_modules/express/index.js");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _validate__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./validate */ "../../modules/pontoon-proxy/src/validate.ts");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }










var PONTOON_PATH_PREFIX = 'pontoon/api/';
var REQUIRED_OPTIONS = ['api', 'apiKey', 'app', 'serverName', 'serviceName'];
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
  var _options$proxyPath = options.proxyPath,
      proxyPath = _options$proxyPath === void 0 ? '/proxy/' : _options$proxyPath;

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
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "../../node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "../../node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "../../node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_date_now_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.date.now.js */ "../../node_modules/core-js/modules/es.date.now.js");
/* harmony import */ var core_js_modules_es_date_now_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_now_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "../../node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "../../node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "../../node_modules/core-js/modules/es.number.constructor.js");
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

/***/ "./app/server/middleware/pontoonProxy.ts":
/*!***********************************************!*\
  !*** ./app/server/middleware/pontoonProxy.ts ***!
  \***********************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createPontoonProxy; });
/* harmony import */ var _zg_rentals_pontoon_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @zg-rentals/pontoon-proxy */ "../../modules/pontoon-proxy/src/index.ts");
/* harmony import */ var _server_utils_log__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../server/utils/log */ "./app/server/utils/log.ts");


var pontoonApi = process.env.PONTOON_API;
var pontoonApiKey = process.env.PONTOON_API_KEY;
var serviceName = process.env.APP_NAME;
var zgEnv = process.env.ZG_ENV;
var serverName = 'client';
var shermanName = 'sherman';
var pontoonLogger = _server_utils_log__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].child('pontoon proxy');
function createPontoonProxy(app) {
  try {
    Object(_zg_rentals_pontoon_proxy__WEBPACK_IMPORTED_MODULE_0__[/* createPontoonProxy */ "a"])({
      app: app,
      api: pontoonApi,
      apiKey: pontoonApiKey,
      serverName: serverName,
      serviceName: serviceName,
      logger: pontoonLogger
    });
  } catch (e) {
    if (true) {
      _server_utils_log__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].warn(e.message);
    } else {}
  }
}

/***/ }),

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
/* harmony import */ var _middleware_pontoonProxy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./middleware/pontoonProxy */ "./app/server/middleware/pontoonProxy.ts");
/* harmony import */ var _utils_log__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/log */ "./app/server/utils/log.ts");
/* harmony import */ var _middleware_healthcheck__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./middleware/healthcheck */ "./app/server/middleware/healthcheck.ts");
/* harmony import */ var _utils_tracer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/tracer */ "./app/server/utils/tracer.ts");
/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! apollo-server-express */ "../../node_modules/apollo-server-express/dist/index.js");
/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(apollo_server_express__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _graphql_federatedSchema__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../graphql/federatedSchema */ "./app/graphql/federatedSchema.ts");








 // GraphQL



var step = _utils_log__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].child('server');
step.warn('running server');
var server = new apollo_server_express__WEBPACK_IMPORTED_MODULE_9__["ApolloServer"]({
  schema: _graphql_federatedSchema__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"],
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
var healthcheck = Object(_middleware_healthcheck__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(_utils_log__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].child('healthcheck'));
var httpLogger = Object(_zg_rentals_particles_js_node_logger__WEBPACK_IMPORTED_MODULE_2__[/* getHttpLogger */ "b"])({
  logger: _utils_log__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].logger
}); // must bind 'this' because of JS

Object(_middleware_nodeMonitor__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(app);
Object(_middleware_pontoonProxy__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(app);
_utils_tracer__WEBPACK_IMPORTED_MODULE_8__[/* tracer */ "a"].traceApp(app);

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
app.use("*/check", _utils_tracer__WEBPACK_IMPORTED_MODULE_8__[/* tracer */ "a"].wrap(healthcheck.check, 'healthcheck'));
app.use("*/shutdown", healthcheck.shutdown);
app.get("/", function (req, res) {
  step.warn(req.cookies, 'Cookies');
  res.writeHead(200, {
    'Content-Type': 'text/html'
  });
  res.write("Rent Guarantee Express Server Response!");
  res.end();
});
_utils_tracer__WEBPACK_IMPORTED_MODULE_8__[/* tracer */ "a"].errorMiddleware();
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
//# sourceMappingURL=index.7f68cdac0a92ee1b6092.hot-update.js.map