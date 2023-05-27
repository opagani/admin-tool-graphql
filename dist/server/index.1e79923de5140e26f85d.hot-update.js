exports.id = "index";
exports.modules = {

/***/ "./app/graphql/Reports/resolvers.ts":
/*!******************************************!*\
  !*** ./app/graphql/Reports/resolvers.ts ***!
  \******************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services */ "./app/graphql/Reports/services/index.ts");


var reports = function reports(_parent, _ref, context) {
  var _context$token, _context$token2;

  var reportType = _ref.reportType;
  return _services__WEBPACK_IMPORTED_MODULE_0__[/* reportsServices */ "a"].getReportsDetails((context === null || context === void 0 ? void 0 : (_context$token = context.token) === null || _context$token === void 0 ? void 0 : _context$token['rent-guaranteeUserToken']) || '', (context === null || context === void 0 ? void 0 : (_context$token2 = context.token) === null || _context$token2 === void 0 ? void 0 : _context$token2['rent-guaranteeSessionToken']) || '', reportType || '');
};

var landlordsDataForReports = function landlordsDataForReports(_parent, _ref2, context) {
  var _context$token3, _context$token4;

  var methodToInvoke = _ref2.methodToInvoke,
      urlParams = _ref2.urlParams;
  return _services__WEBPACK_IMPORTED_MODULE_0__[/* reportsServices */ "a"].getLandlordsDataForReports(methodToInvoke, urlParams, (context === null || context === void 0 ? void 0 : (_context$token3 = context.token) === null || _context$token3 === void 0 ? void 0 : _context$token3['rent-guaranteeUserToken']) || '', (context === null || context === void 0 ? void 0 : (_context$token4 = context.token) === null || _context$token4 === void 0 ? void 0 : _context$token4['rent-guaranteeSessionToken']) || '');
};

var userActivityDataForReports = function userActivityDataForReports(_parent, _ref3, context) {
  var _context$token5, _context$token6;

  var methodToInvoke = _ref3.methodToInvoke,
      urlParams = _ref3.urlParams;
  return _services__WEBPACK_IMPORTED_MODULE_0__[/* reportsServices */ "a"].getUserActivityDataForReports(methodToInvoke, urlParams || null, (context === null || context === void 0 ? void 0 : (_context$token5 = context.token) === null || _context$token5 === void 0 ? void 0 : _context$token5['rent-guaranteeUserToken']) || '', (context === null || context === void 0 ? void 0 : (_context$token6 = context.token) === null || _context$token6 === void 0 ? void 0 : _context$token6['rent-guaranteeSessionToken']) || '');
};

var reportsQueryResolvers = {
  reports: reports,
  landlordsDataForReports: landlordsDataForReports,
  userActivityDataForReports: userActivityDataForReports
};
var reportsResolvers = {
  Query: reportsQueryResolvers
};
/* harmony default export */ __webpack_exports__["a"] = (reportsResolvers);

/***/ })

};
//# sourceMappingURL=index.1e79923de5140e26f85d.hot-update.js.map