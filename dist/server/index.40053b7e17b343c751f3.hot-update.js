exports.id = "index";
exports.modules = {

/***/ "./app/graphql/utils/api.ts":
/*!**********************************!*\
  !*** ./app/graphql/utils/api.ts ***!
  \**********************************/
/*! exports provided: makePath, api */
/*! exports used: api */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export makePath */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return api; });
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "../../node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);

var makePath = function makePath(path, proxyPath) {
  if (proxyPath) {
    return "".concat(proxyPath, "/").concat(path);
  }

  return "".concat(path);
};
var api = {
  gql: {
    searchPolicies: "".concat(process.env.API, "/rent-guarantee/api/v1/admin/searchPolicies"),
    history: "".concat(process.env.API, "/rent-guarantee/api/v1/admin/getActionLogs"),
    policySearchTypes: "".concat(process.env.API, "/rent-guarantee/api/v1/admin/getPolicySearchTypes"),
    expandedPolicyDetails: "".concat(process.env.API, "/rent-guarantee/api/v1/admin/getExpandedPolicyDetails"),
    historyForPolicyRelatedActions: "".concat(process.env.API, "/rent-guarantee/api/v1/admin/getPolicyActionLogs"),
    cancelPolicy: "".concat(process.env.API, "/rent-guarantee/api/v1/admin/cancelPolicy"),
    reports: "".concat(process.env.API, "/rent-guarantee/api/v1/admin/getReportsDetails")
  }
};

/***/ })

};
//# sourceMappingURL=index.40053b7e17b343c751f3.hot-update.js.map