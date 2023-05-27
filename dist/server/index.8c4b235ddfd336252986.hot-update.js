exports.id = "index";
exports.modules = {

/***/ "./app/graphql/federatedSchema.ts":
/*!****************************************!*\
  !*** ./app/graphql/federatedSchema.ts ***!
  \****************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_freeze_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.freeze.js */ "core-js/modules/es.object.freeze.js");
/* harmony import */ var core_js_modules_es_object_freeze_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_freeze_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.define-properties.js */ "core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _apollo_federation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/federation */ "@apollo/federation");
/* harmony import */ var _apollo_federation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_apollo_federation__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _resolvers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./resolvers */ "./app/graphql/resolvers.ts");
/* harmony import */ var _schema__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./schema */ "./app/graphql/schema.ts");
/* harmony import */ var graphql_scalars__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! graphql-scalars */ "graphql-scalars");
/* harmony import */ var graphql_scalars__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(graphql_scalars__WEBPACK_IMPORTED_MODULE_7__);




var _templateObject, _templateObject2;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






var federatedSchema = Object(_apollo_federation__WEBPACK_IMPORTED_MODULE_3__["buildFederatedSchema"])([{
  typeDefs: graphql_tag__WEBPACK_IMPORTED_MODULE_4___default()(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n      ", "\n    "])), graphql_scalars__WEBPACK_IMPORTED_MODULE_7__["DateTypeDefinition"]),
  resolvers: graphql_scalars__WEBPACK_IMPORTED_MODULE_7__["DateResolver"]
}, {
  typeDefs: graphql_tag__WEBPACK_IMPORTED_MODULE_4___default()(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      ", "\n    "])), _schema__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"]),
  resolvers: _resolvers__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"]
}]);
/* harmony default export */ __webpack_exports__["a"] = (federatedSchema);

/***/ })

};
//# sourceMappingURL=index.8c4b235ddfd336252986.hot-update.js.map