exports.id = "index";
exports.modules = {

/***/ "./app/graphql/SearchPolicies/PoliciesBuilder.ts":
/*!*******************************************************!*\
  !*** ./app/graphql/SearchPolicies/PoliciesBuilder.ts ***!
  \*******************************************************/
/*! exports provided: buildPoliciesFromResponse */
/*! exports used: buildPoliciesFromResponse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return buildPoliciesFromResponse; });
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.define-properties.js */ "core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_9__);











function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var formatPolicy = function formatPolicy(policy) {
  return _objectSpread(_objectSpread({}, policy), {}, {
    applicationId: {
      id: policy.applicationId
    },
    leaseId: {
      id: policy.leaseId
    },
    paymentId: {
      id: policy.paymentId
    }
  });
};

var buildPoliciesFromResponse = function buildPoliciesFromResponse(response) {
  var _response$policies;

  var formattedPolicies = (response === null || response === void 0 ? void 0 : (_response$policies = response.policies) === null || _response$policies === void 0 ? void 0 : _response$policies.map(function (policy) {
    return formatPolicy(policy);
  })) || [];
  return {
    policies: formattedPolicies
  };
};

/***/ }),

/***/ "./app/graphql/SearchPolicies/resolvers.ts":
/*!*************************************************!*\
  !*** ./app/graphql/SearchPolicies/resolvers.ts ***!
  \*************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services */ "./app/graphql/SearchPolicies/services/index.ts");
/* harmony import */ var graphql_scalars__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-scalars */ "graphql-scalars");
/* harmony import */ var graphql_scalars__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_scalars__WEBPACK_IMPORTED_MODULE_1__);
/* eslint-disable no-console */



var searchPolicies = function searchPolicies(_parent, _ref, context) {
  var _context$token, _context$token2;

  var searchType = _ref.searchType,
      searchValue = _ref.searchValue;
  return _services__WEBPACK_IMPORTED_MODULE_0__[/* searchPoliciesServices */ "a"].getSearchPolicies(searchType, searchValue, (context === null || context === void 0 ? void 0 : (_context$token = context.token) === null || _context$token === void 0 ? void 0 : _context$token['rent-guaranteeUserToken']) || '', (context === null || context === void 0 ? void 0 : (_context$token2 = context.token) === null || _context$token2 === void 0 ? void 0 : _context$token2['rent-guaranteeSessionToken']) || '');
};

var history = function history(_parent, _ref2, context) {
  var _context$token3, _context$token4;

  var logIdType = _ref2.logIdType,
      logIdValue = _ref2.logIdValue;
  return _services__WEBPACK_IMPORTED_MODULE_0__[/* searchPoliciesServices */ "a"].getHistory(logIdType, logIdValue, (context === null || context === void 0 ? void 0 : (_context$token3 = context.token) === null || _context$token3 === void 0 ? void 0 : _context$token3['rent-guaranteeUserToken']) || '', (context === null || context === void 0 ? void 0 : (_context$token4 = context.token) === null || _context$token4 === void 0 ? void 0 : _context$token4['rent-guaranteeSessionToken']) || '');
};

var policySearchTypes = function policySearchTypes(_parent, _vars, context) {
  var _context$token5, _context$token6;

  return _services__WEBPACK_IMPORTED_MODULE_0__[/* searchPoliciesServices */ "a"].getPolicySearchTypes((context === null || context === void 0 ? void 0 : (_context$token5 = context.token) === null || _context$token5 === void 0 ? void 0 : _context$token5['rent-guaranteeUserToken']) || '', (context === null || context === void 0 ? void 0 : (_context$token6 = context.token) === null || _context$token6 === void 0 ? void 0 : _context$token6['rent-guaranteeSessionToken']) || '');
};

var policyStatuses = function policyStatuses(_parent, _vars, context) {
  var _context$token7, _context$token8;

  return _services__WEBPACK_IMPORTED_MODULE_0__[/* searchPoliciesServices */ "a"].getPolicyStatuses((context === null || context === void 0 ? void 0 : (_context$token7 = context.token) === null || _context$token7 === void 0 ? void 0 : _context$token7['rent-guaranteeUserToken']) || '', (context === null || context === void 0 ? void 0 : (_context$token8 = context.token) === null || _context$token8 === void 0 ? void 0 : _context$token8['rent-guaranteeSessionToken']) || '');
};

var searchPoliciesQueryResolvers = {
  searchPolicies: searchPolicies,
  history: history,
  policySearchTypes: policySearchTypes,
  policyStatuses: policyStatuses,
  DateResolver: graphql_scalars__WEBPACK_IMPORTED_MODULE_1__["DateResolver"]
};
var searchPoliciesResolvers = {
  Query: searchPoliciesQueryResolvers
};
/* harmony default export */ __webpack_exports__["a"] = (searchPoliciesResolvers);

/***/ }),

/***/ "./app/graphql/SearchPolicies/services/getHistory.ts":
/*!***********************************************************!*\
  !*** ./app/graphql/SearchPolicies/services/getHistory.ts ***!
  \***********************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _server_utils_log__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../server/utils/log */ "./app/server/utils/log.ts");
/* harmony import */ var _server_utils_tracer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../server/utils/tracer */ "./app/server/utils/tracer.ts");
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/api */ "./app/graphql/utils/api.ts");
/* harmony import */ var _server_utils_nodeMonitor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../server/utils/nodeMonitor */ "./app/server/utils/nodeMonitor.ts");





function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }







var getHistory = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(searchType, searchValue, rentGuaranteeUserToken, rentGuaranteeSessionToken) {
    var response;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("".concat(_utils_api__WEBPACK_IMPORTED_MODULE_7__[/* api */ "a"].gql.history, "?logIdType=").concat(searchType, "&logIdValue=").concat(searchValue), {
              headers: {
                Cookie: "rent-guaranteeUserToken=".concat(rentGuaranteeUserToken, "; rent-guaranteeSessionToken=").concat(rentGuaranteeSessionToken)
              }
            }).then(function (res) {
              return res.data.data;
            })["catch"](function (err) {
              _server_utils_log__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].error("Network error fetching history for searchValue: ".concat(searchValue, ": ").concat(err)); // Log an error (using the class instance's logger):

              // Log an error (using the class instance's logger):
              _server_utils_nodeMonitor__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].increment({
                name: 'getHistory failed',
                amount: 1
              });
              return null;
            });

          case 2:
            response = _context.sent;
            _context.next = 5;
            return _server_utils_nodeMonitor__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].increment({
              name: 'getHistory viewed',
              amount: 1
            });

          case 5:
            return _context.abrupt("return", response);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getHistory(_x, _x2, _x3, _x4) {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["a"] = (_server_utils_tracer__WEBPACK_IMPORTED_MODULE_6__[/* tracer */ "a"].wrap(getHistory));

/***/ }),

/***/ "./app/graphql/SearchPolicies/services/getPolicySearchTypes.ts":
/*!*********************************************************************!*\
  !*** ./app/graphql/SearchPolicies/services/getPolicySearchTypes.ts ***!
  \*********************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _server_utils_log__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../server/utils/log */ "./app/server/utils/log.ts");
/* harmony import */ var _server_utils_tracer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../server/utils/tracer */ "./app/server/utils/tracer.ts");
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/api */ "./app/graphql/utils/api.ts");
/* harmony import */ var _server_utils_nodeMonitor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../server/utils/nodeMonitor */ "./app/server/utils/nodeMonitor.ts");





function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }







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
              _server_utils_log__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].error("Network error fetching policy for policy search types: ".concat(err)); // Log an error (using the class instance's logger):

              // Log an error (using the class instance's logger):
              _server_utils_nodeMonitor__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].increment({
                name: 'getPolicySearchTypes failed',
                amount: 1
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
              name: 'getPolicySearchTypes viewed',
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

/***/ }),

/***/ "./app/graphql/SearchPolicies/services/getPolicyStatuses.ts":
/*!******************************************************************!*\
  !*** ./app/graphql/SearchPolicies/services/getPolicyStatuses.ts ***!
  \******************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _server_utils_log__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../server/utils/log */ "./app/server/utils/log.ts");
/* harmony import */ var _server_utils_tracer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../server/utils/tracer */ "./app/server/utils/tracer.ts");
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/api */ "./app/graphql/utils/api.ts");
/* harmony import */ var _server_utils_nodeMonitor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../server/utils/nodeMonitor */ "./app/server/utils/nodeMonitor.ts");





function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }







var getPolicyStatuses = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(rentGuaranteeUserToken, rentGuaranteeSessionToken) {
    var response;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("".concat(_utils_api__WEBPACK_IMPORTED_MODULE_7__[/* api */ "a"].gql.policyStatuses), {
              headers: {
                Cookie: "rent-guaranteeUserToken=".concat(rentGuaranteeUserToken, "; rent-guaranteeSessionToken=").concat(rentGuaranteeSessionToken)
              }
            }).then(function (res) {
              return res.data.data;
            })["catch"](function (err) {
              _server_utils_log__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].error("Network error fetching policy statuses search types: ".concat(err)); // Log an error (using the class instance's logger):

              // Log an error (using the class instance's logger):
              _server_utils_nodeMonitor__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].increment({
                name: 'getPolicyStatuses failed',
                amount: 1
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
              name: 'getPolicyStatuses viewed',
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

  return function getPolicyStatuses(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["a"] = (_server_utils_tracer__WEBPACK_IMPORTED_MODULE_6__[/* tracer */ "a"].wrap(getPolicyStatuses));

/***/ }),

/***/ "./app/graphql/SearchPolicies/services/getSearchPolicies.ts":
/*!******************************************************************!*\
  !*** ./app/graphql/SearchPolicies/services/getSearchPolicies.ts ***!
  \******************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _server_utils_log__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../server/utils/log */ "./app/server/utils/log.ts");
/* harmony import */ var _server_utils_tracer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../server/utils/tracer */ "./app/server/utils/tracer.ts");
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/api */ "./app/graphql/utils/api.ts");
/* harmony import */ var _PoliciesBuilder__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../PoliciesBuilder */ "./app/graphql/SearchPolicies/PoliciesBuilder.ts");
/* harmony import */ var _server_utils_nodeMonitor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../server/utils/nodeMonitor */ "./app/server/utils/nodeMonitor.ts");





function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }








var getSearchPolicies = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(searchType, searchValue, rentGuaranteeUserToken, rentGuaranteeSessionToken) {
    var response;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("".concat(_utils_api__WEBPACK_IMPORTED_MODULE_7__[/* api */ "a"].gql.searchPolicies, "?searchType=").concat(searchType, "&searchValue=").concat(searchValue), {
              headers: {
                Cookie: "rent-guaranteeUserToken=".concat(rentGuaranteeUserToken, "; rent-guaranteeSessionToken=").concat(rentGuaranteeSessionToken)
              }
            }).then(function (res) {
              return res.data.data;
            })["catch"](function (err) {
              _server_utils_log__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].error("Network error fetching policy for ".concat(searchType, ": ").concat(searchValue, ": ").concat(err)); // Log an error (using the class instance's logger):

              // Log an error (using the class instance's logger):
              _server_utils_nodeMonitor__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"].increment({
                name: 'getSearchPolicies failed',
                amount: 1
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
            return _server_utils_nodeMonitor__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"].increment({
              name: 'getSearchPolicies viewed',
              amount: 1
            });

          case 6:
            return _context.abrupt("return", Object(_PoliciesBuilder__WEBPACK_IMPORTED_MODULE_8__[/* buildPoliciesFromResponse */ "a"])(response));

          case 7:
            return _context.abrupt("return", null);

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getSearchPolicies(_x, _x2, _x3, _x4) {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["a"] = (_server_utils_tracer__WEBPACK_IMPORTED_MODULE_6__[/* tracer */ "a"].wrap(getSearchPolicies));

/***/ }),

/***/ "./app/graphql/SearchPolicies/services/index.ts":
/*!******************************************************!*\
  !*** ./app/graphql/SearchPolicies/services/index.ts ***!
  \******************************************************/
/*! exports provided: searchPoliciesServices */
/*! exports used: searchPoliciesServices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return searchPoliciesServices; });
/* harmony import */ var _getSearchPolicies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getSearchPolicies */ "./app/graphql/SearchPolicies/services/getSearchPolicies.ts");
/* harmony import */ var _getHistory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getHistory */ "./app/graphql/SearchPolicies/services/getHistory.ts");
/* harmony import */ var _getPolicySearchTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getPolicySearchTypes */ "./app/graphql/SearchPolicies/services/getPolicySearchTypes.ts");
/* harmony import */ var _getPolicyStatuses__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getPolicyStatuses */ "./app/graphql/SearchPolicies/services/getPolicyStatuses.ts");




var searchPoliciesServices = {
  getSearchPolicies: _getSearchPolicies__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"],
  getHistory: _getHistory__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
  getPolicySearchTypes: _getPolicySearchTypes__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"],
  getPolicyStatuses: _getPolicyStatuses__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]
};

/***/ })

};
//# sourceMappingURL=index.ca094da26293d8fe7f11.hot-update.js.map