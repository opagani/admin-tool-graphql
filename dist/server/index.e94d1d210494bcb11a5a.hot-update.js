exports.id = "index";
exports.modules = {

/***/ "./app/graphql/SearchPolicies/schema.graphql":
/*!***************************************************!*\
  !*** ./app/graphql/SearchPolicies/schema.graphql ***!
  \***************************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports) {


    var doc = {"kind":"Document","definitions":[{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"Application"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"id"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]}]},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"Lease"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"id"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"directives":[]}]},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"Payments"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"id"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"directives":[]}]},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"Policy"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"createdDate"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"updatedDate"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"listingAlias"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"isActive"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"policyStatus"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"applicationId"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Application"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"leaseId"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Lease"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"paymentId"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Payments"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"policyId"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"leaseTermStartDate"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Date"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"leaseTermEndDate"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Date"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"policyTermStartDate"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Date"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"policyTermEndDate"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Date"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"landlordUserToken"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"renterIds"},"arguments":[],"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]}]},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"Policies"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"policies"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Policy"}}}},"directives":[]}]},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"HistoryType"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"idType"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"idValue"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"action"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"createdDate"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"userToken"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"message"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]}]},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"History"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"logs"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"HistoryType"}}}},"directives":[]}]},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"PolicySearchType"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"value"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"displayName"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]}]},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"PolicySearchTypes"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"values"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PolicySearchType"}}}}},"directives":[]}]},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"PolicyStatus"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"value"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"displayName"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]}]},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"PolicyStatuses"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"values"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PolicyStatus"}}}}},"directives":[]}]},{"kind":"EnumTypeDefinition","name":{"kind":"Name","value":"LogIdType"},"directives":[],"values":[{"kind":"EnumValueDefinition","name":{"kind":"Name","value":"listingAlias"},"directives":[]},{"kind":"EnumValueDefinition","name":{"kind":"Name","value":"userToken"},"directives":[]}]},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"Query"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"searchPolicies"},"arguments":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"searchType"},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"searchValue"},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]}],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Policies"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"history"},"arguments":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"logIdType"},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"LogIdType"}}},"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"logIdValue"},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]}],"type":{"kind":"NamedType","name":{"kind":"Name","value":"History"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"policySearchTypes"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"PolicySearchTypes"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"policyStatuses"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"PolicyStatuses"}},"directives":[]}]},{"kind":"ScalarTypeDefinition","name":{"kind":"Name","value":"Date"},"directives":[]}],"loc":{"start":0,"end":1208}};
    doc.loc.source = {"body":"type Application {\n  id: String!\n}\n\ntype Lease {\n  id: Int\n}\n\ntype Payments {\n  id: Int\n}\n\ntype Policy {\n  createdDate: Float!\n  updatedDate: Float!\n  listingAlias: String!\n  isActive: Boolean!\n  policyStatus: String!\n  applicationId: Application!\n  leaseId: Lease!\n  paymentId: Payments\n  policyId: String!\n  leaseTermStartDate: Date\n  leaseTermEndDate: Date\n  policyTermStartDate: Date\n  policyTermEndDate: Date\n  landlordUserToken: String\n  renterIds: [String]\n}\n\ntype Policies {\n  policies: [Policy]!\n}\n\ntype HistoryType {\n  idType: String!\n  idValue: String!\n  action: String!\n  createdDate: Float!\n  userToken: String!\n  message: String\n}\n\ntype History {\n  logs: [HistoryType]!\n}\n\ntype PolicySearchType {\n  value: String!\n  displayName: String!\n}\n\ntype PolicySearchTypes {\n  values: [PolicySearchType!]!\n}\n\ntype PolicyStatus {\n  value: String!\n  displayName: String!\n}\n\ntype PolicyStatuses {\n  values: [PolicyStatus!]!\n}\n\nenum LogIdType {\n  listingAlias\n  userToken\n}\n\ntype Query {\n  searchPolicies(searchType: String!, searchValue: String!): Policies\n  history(logIdType: LogIdType!, logIdValue: String!): History\n  policySearchTypes: PolicySearchTypes\n  policyStatuses: PolicyStatuses\n}\n\nscalar Date\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

    var names = {};
    function unique(defs) {
      return defs.filter(
        function(def) {
          if (def.kind !== 'FragmentDefinition') return true;
          var name = def.name.value
          if (names[name]) {
            return false;
          } else {
            names[name] = true;
            return true;
          }
        }
      )
    }
  

      module.exports = doc;
    


/***/ }),

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
/* harmony import */ var _SearchPolicies_resolvers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SearchPolicies/resolvers */ "./app/graphql/SearchPolicies/resolvers.ts");
/* harmony import */ var _PolicyDetails_resolvers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PolicyDetails/resolvers */ "./app/graphql/PolicyDetails/resolvers.ts");
/* harmony import */ var _Reports_resolvers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Reports/resolvers */ "./app/graphql/Reports/resolvers.ts");
/* harmony import */ var graphql_scalars__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-scalars */ "graphql-scalars");
/* harmony import */ var graphql_scalars__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_scalars__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _SearchPolicies_schema_graphql__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SearchPolicies/schema.graphql */ "./app/graphql/SearchPolicies/schema.graphql");
/* harmony import */ var _SearchPolicies_schema_graphql__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_SearchPolicies_schema_graphql__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _PolicyDetails_schema_graphql__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PolicyDetails/schema.graphql */ "./app/graphql/PolicyDetails/schema.graphql");
/* harmony import */ var _PolicyDetails_schema_graphql__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_PolicyDetails_schema_graphql__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Reports_schema_graphql__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Reports/schema.graphql */ "./app/graphql/Reports/schema.graphql");
/* harmony import */ var _Reports_schema_graphql__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Reports_schema_graphql__WEBPACK_IMPORTED_MODULE_6__);
//resolvers



 //typedefs





var mergedResolvers = {
  searchPoliciesResolvers: _SearchPolicies_resolvers__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"],
  policyDetailsResolvers: _PolicyDetails_resolvers__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
  reportsResolvers: _Reports_resolvers__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"],
  DateResolver: graphql_scalars__WEBPACK_IMPORTED_MODULE_3__["DateResolver"]
};
var mergedSchema = {
  searchPoliciesSchema: _SearchPolicies_schema_graphql__WEBPACK_IMPORTED_MODULE_4___default.a,
  policyDetailsSchema: _PolicyDetails_schema_graphql__WEBPACK_IMPORTED_MODULE_5___default.a,
  reportsSchema: _Reports_schema_graphql__WEBPACK_IMPORTED_MODULE_6___default.a,
  DateTypeDefinition: graphql_scalars__WEBPACK_IMPORTED_MODULE_3__["DateTypeDefinition"]
};

/***/ }),

/***/ "graphql-scalars":
/*!**********************************!*\
  !*** external "graphql-scalars" ***!
  \**********************************/
/*! no static exports found */
/*! exports used: DateResolver, DateTypeDefinition */
/***/ (function(module, exports) {

module.exports = require("graphql-scalars");

/***/ })

};
//# sourceMappingURL=index.e94d1d210494bcb11a5a.hot-update.js.map