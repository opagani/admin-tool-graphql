exports.id = "index";
exports.modules = {

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

/***/ })

};
//# sourceMappingURL=index.89bd08a189127c6d5676.hot-update.js.map