exports.id = "index";
exports.modules = {

/***/ "./app/graphql/SearchPolicies/resolvers.ts":
/*!*************************************************!*\
  !*** ./app/graphql/SearchPolicies/resolvers.ts ***!
  \*************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services */ "./app/graphql/SearchPolicies/services/index.ts");


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
  policyStatuses: policyStatuses
};
var searchPoliciesResolvers = {
  Query: searchPoliciesQueryResolvers
};
/* harmony default export */ __webpack_exports__["a"] = (searchPoliciesResolvers);

/***/ })

};
//# sourceMappingURL=index.25ab5059ca09d48cd931.hot-update.js.map