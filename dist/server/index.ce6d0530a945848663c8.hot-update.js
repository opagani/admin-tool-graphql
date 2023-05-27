exports.id = "index";
exports.modules = {

/***/ "./app/graphql/SearchPolicies/services/getPolicySearchTypes.ts":
/*!*********************************************************************!*\
  !*** ./app/graphql/SearchPolicies/services/getPolicySearchTypes.ts ***!
  \*********************************************************************/
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
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/api */ "./app/graphql/utils/api.ts");
/* harmony import */ var _server_utils_nodeMonitor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../server/utils/nodeMonitor */ "./app/server/utils/nodeMonitor.ts");





function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }






var logger = _server_utils_log__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].child('services/getPolicySearchTypes');

var getPolicySearchTypes = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(rentGuaranteeUserToken, rentGuaranteeSessionToken) {
    var response;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("".concat(_utils_api__WEBPACK_IMPORTED_MODULE_7__[/* api */ "a"].gql.policySearchTypes), {
              headers: {
                Cookie: "rent-guaranteeUserToken=".concat(rentGuaranteeUserToken, "; rent-guaranteeSessionToken=").concat(rentGuaranteeSessionToken)
              }
            }).then(function (res) {
              return res.data.data;
            })["catch"](function (err) {
              logger.error("Error fetching policy for policy search types: ".concat(err)); // Log an error (using the class instance's logger):

              // Log an error (using the class instance's logger):
              _server_utils_nodeMonitor__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].error({
                error: err
              });
              return null;
            });

          case 2:
            response = _context.sent;

            if (!response) {
              _context.next = 7;
              break;
            }

            _context.next = 6;
            return _server_utils_nodeMonitor__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].increment({
              name: 'rent-guarantee-graphql.getPolicySearchTypes.viewed',
              amount: 1
            });

          case 6:
            return _context.abrupt("return", response);

          case 7:
            return _context.abrupt("return", null);

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getPolicySearchTypes(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["a"] = (_server_utils_tracer__WEBPACK_IMPORTED_MODULE_6__[/* tracer */ "a"].wrap(getPolicySearchTypes));

/***/ })

};
//# sourceMappingURL=index.ce6d0530a945848663c8.hot-update.js.map