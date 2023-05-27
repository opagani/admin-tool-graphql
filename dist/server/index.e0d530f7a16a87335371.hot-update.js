exports.id = "index";
exports.modules = {

/***/ "./app/graphql/Reports/services/getLandlordsDataForReports.ts":
/*!********************************************************************!*\
  !*** ./app/graphql/Reports/services/getLandlordsDataForReports.ts ***!
  \********************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "../../node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "../../node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "../../node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "../../node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "../../node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _server_utils_log__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../server/utils/log */ "./app/server/utils/log.ts");
/* harmony import */ var _server_utils_tracer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../server/utils/tracer */ "./app/server/utils/tracer.ts");
/* harmony import */ var _server_utils_nodeMonitor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../server/utils/nodeMonitor */ "./app/server/utils/nodeMonitor.ts");





function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }





var logger = _server_utils_log__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].child('services/getLandlordsDataForReports');

var getLandlordsDataForReports = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(methodToInvoke, urlParams, rentGuaranteeUserToken, rentGuaranteeSessionToken) {
    var url, response;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            url = "".concat(process.env.API, "/rent-guarantee/api/v1/admin/").concat(methodToInvoke);

            if (urlParams && (urlParams === null || urlParams === void 0 ? void 0 : urlParams.length) > 0) {
              url = "".concat(url, "?").concat(urlParams);
            }

            _context.next = 4;
            return axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("".concat(url), {
              headers: {
                Cookie: "rent-guaranteeUserToken=".concat(rentGuaranteeUserToken, "; rent-guaranteeSessionToken=").concat(rentGuaranteeSessionToken)
              }
            }).then(function (res) {
              return res.data.data;
            })["catch"](function (err) {
              _server_utils_log__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].error("Error fetching Landlords ".concat(methodToInvoke, " report: ").concat(err)); // Log an error (using the class instance's logger):

              // Log an error (using the class instance's logger):
              _server_utils_nodeMonitor__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].error({
                error: err
              });
              return null;
            });

          case 4:
            response = _context.sent;

            if (!response) {
              _context.next = 9;
              break;
            }

            _context.next = 8;
            return _server_utils_nodeMonitor__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].increment({
              name: 'rent-guarantee-graphql.landlordsReports.viewed',
              amount: 1
            });

          case 8:
            return _context.abrupt("return", response);

          case 9:
            return _context.abrupt("return", null);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getLandlordsDataForReports(_x, _x2, _x3, _x4) {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["a"] = (_server_utils_tracer__WEBPACK_IMPORTED_MODULE_6__[/* tracer */ "a"].wrap(getLandlordsDataForReports));

/***/ })

};
//# sourceMappingURL=index.e0d530f7a16a87335371.hot-update.js.map