exports.id = "index";
exports.modules = {

/***/ "./app/graphql/index.ts":
/*!******************************!*\
  !*** ./app/graphql/index.ts ***!
  \******************************/
/*! exports provided: mergedResolvers, mergedSchema */
/*! exports used: mergedResolvers, mergedSchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return mergedResolvers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return mergedSchema; });
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.parse-int.js */ "core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SearchPolicies_resolvers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SearchPolicies/resolvers */ "./app/graphql/SearchPolicies/resolvers.ts");
/* harmony import */ var _PolicyDetails_resolvers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PolicyDetails/resolvers */ "./app/graphql/PolicyDetails/resolvers.ts");
/* harmony import */ var _Reports_resolvers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Reports/resolvers */ "./app/graphql/Reports/resolvers.ts");
/* harmony import */ var _SearchPolicies_schema_graphql__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SearchPolicies/schema.graphql */ "./app/graphql/SearchPolicies/schema.graphql");
/* harmony import */ var _SearchPolicies_schema_graphql__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_SearchPolicies_schema_graphql__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _PolicyDetails_schema_graphql__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PolicyDetails/schema.graphql */ "./app/graphql/PolicyDetails/schema.graphql");
/* harmony import */ var _PolicyDetails_schema_graphql__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_PolicyDetails_schema_graphql__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Reports_schema_graphql__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Reports/schema.graphql */ "./app/graphql/Reports/schema.graphql");
/* harmony import */ var _Reports_schema_graphql__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_Reports_schema_graphql__WEBPACK_IMPORTED_MODULE_7__);


//resolvers




var _require = __webpack_require__(/*! graphql */ "graphql"),
    GraphQLScalarType = _require.GraphQLScalarType,
    Kind = _require.Kind;

var dateScalar = new GraphQLScalarType({
  name: 'Date',
  description: 'Date custom scalar type',
  serialize: function serialize(value) {
    return value.getTime(); // Convert outgoing Date to integer for JSON
  },
  parseValue: function parseValue(value) {
    return new Date(value); // Convert incoming integer to Date
  },
  parseLiteral: function parseLiteral(ast) {
    if (ast.kind === Kind.INT) {
      return new Date(parseInt(ast.value, 10)); // Convert hard-coded AST string to integer and then to Date
    }

    return null; // Invalid hard-coded value (not an integer)
  }
}); //typedefs




var mergedResolvers = {
  searchPoliciesResolvers: _SearchPolicies_resolvers__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"],
  policyDetailsResolvers: _PolicyDetails_resolvers__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"],
  reportsResolvers: _Reports_resolvers__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"],
  dateScalar: dateScalar
};
var mergedSchema = {
  searchPoliciesSchema: _SearchPolicies_schema_graphql__WEBPACK_IMPORTED_MODULE_5___default.a,
  policyDetailsSchema: _PolicyDetails_schema_graphql__WEBPACK_IMPORTED_MODULE_6___default.a,
  reportsSchema: _Reports_schema_graphql__WEBPACK_IMPORTED_MODULE_7___default.a
};

/***/ }),

/***/ "graphql":
/*!**************************!*\
  !*** external "graphql" ***!
  \**************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("graphql");

/***/ })

};
//# sourceMappingURL=index.b57e692b48daa4c395eb.hot-update.js.map