exports.id = "index";
exports.modules = {

/***/ "../../modules/logger-node/src/get-log-middleware.ts":
/*!****************************************************************************************************!*\
  !*** /Users/opagani/projects/zillowgroup/rentals-js/modules/logger-node/src/get-log-middleware.ts ***!
  \****************************************************************************************************/
/*! exports provided: getLogMiddleware */
/*! exports used: getLogMiddleware */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getLogMiddleware; });
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.reduce.js */ "core-js/modules/es.array.reduce.js");
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.define-properties.js */ "core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_20__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






















function getLogMiddleware(logger) {
  return function logMiddleware(req, res) {
    var _req$body;

    var logs = ((_req$body = req.body) === null || _req$body === void 0 ? void 0 : _req$body.logs) || req.body;

    if (logs && Array.isArray(logs)) {
      logs.forEach(function (logEvent) {
        var level = logEvent.level,
            ts = logEvent.ts,
            messages = logEvent.messages,
            bindings = logEvent.bindings;
        var bindingsAsObj = bindings.reduce(function (acc, binding) {
          return _objectSpread(_objectSpread({}, acc), binding);
        }, {});
        bindingsAsObj.browser = true;
        var childLogger = logger.child(bindingsAsObj);

        if (messages[0]) {
          if (_typeof(messages[0]) !== 'object') {
            messages.unshift({});
          }

          messages[0] = _objectSpread(_objectSpread({}, messages[0]), {}, {
            requestId: req.id,
            time: ts
          });
          childLogger[level.label].apply(childLogger, [messages[0]].concat(_toConsumableArray(messages.slice(1))));
        }
      });
    }

    res.send('ok');
  };
}

/***/ }),

/***/ "../../modules/logger-node/src/index.ts":
/*!***************************************************************************************!*\
  !*** /Users/opagani/projects/zillowgroup/rentals-js/modules/logger-node/src/index.ts ***!
  \***************************************************************************************/
/*! exports provided: resetLoggers, getLogMiddleware, getChildLogger, defaultSerializers, getHttpLogger, verbosityToLogLevel, logSync, ResponseError, parseLookoutResponse, registerChildLoggers, getChildLoggerLevels, setChildLogLevels, default */
/*! exports used: default, getChildLogger, getHttpLogger, getLogMiddleware, verbosityToLogLevel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _get_node_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-node-logger */ "../../modules/logger-node/src/get-node-logger.ts");
/* harmony import */ var _get_log_middleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-log-middleware */ "../../modules/logger-node/src/get-log-middleware.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "d", function() { return _get_log_middleware__WEBPACK_IMPORTED_MODULE_1__["a"]; });

/* harmony import */ var _get_child_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./get-child-logger */ "../../modules/logger-node/src/get-child-logger.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _get_child_logger__WEBPACK_IMPORTED_MODULE_2__["a"]; });

/* harmony import */ var _get_http_logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./get-http-logger */ "../../modules/logger-node/src/get-http-logger.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "c", function() { return _get_http_logger__WEBPACK_IMPORTED_MODULE_3__["a"]; });

/* harmony import */ var _verbosity_to_level__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./verbosity-to-level */ "../../modules/logger-node/src/verbosity-to-level.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "e", function() { return _verbosity_to_level__WEBPACK_IMPORTED_MODULE_4__["a"]; });

/* harmony import */ var _log_sync__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./log-sync */ "../../modules/logger-node/src/log-sync.ts");







/* harmony default export */ __webpack_exports__["a"] = (_get_node_logger__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);

/***/ }),

/***/ "../../modules/monitor-base/src/reporters/log-reporter/index.ts":
/*!***************************************************************************************************************!*\
  !*** /Users/opagani/projects/zillowgroup/rentals-js/modules/monitor-base/src/reporters/log-reporter/index.ts ***!
  \***************************************************************************************************************/
/*! exports provided: LogReporter */
/*! exports used: LogReporter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogReporter; });
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _reporter__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../reporter */ "../../modules/monitor-base/src/reporter.ts");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }























function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var LogReporter = /*#__PURE__*/function (_MonitorReporter) {
  _inherits(LogReporter, _MonitorReporter);

  var _super = _createSuper(LogReporter);

  function LogReporter() {
    var _this;

    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        logger = _ref.logger,
        _ref$level = _ref.level,
        level = _ref$level === void 0 ? 'warn' : _ref$level,
        filter = _ref.filter,
        sampleRate = _ref.sampleRate;

    _classCallCheck(this, LogReporter);

    _this = _super.call(this, {
      logger: logger,
      reporterName: 'LogReporter',
      sampleRate: sampleRate
    });

    _defineProperty(_assertThisInitialized(_this), "level", void 0);

    _defineProperty(_assertThisInitialized(_this), "log", void 0);

    _defineProperty(_assertThisInitialized(_this), "filter", void 0);

    _this.level = level;
    _this.filter = filter;

    _this.setLogLevel();

    return _this;
  }

  _createClass(LogReporter, [{
    key: "setLogLevel",
    value: function setLogLevel() {
      this.log = this.logger && this.logger[this.level].bind(this.logger);
    }
  }, {
    key: "onInitialize",
    value: function onInitialize(logger) {
      this.logger = this.logger || logger;
      this.setLogLevel();
    }
  }, {
    key: "shouldLog",
    value: function shouldLog(name, amount) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      if (this.log && (!this.filter || this.filter(name, amount))) {
        var random = Math.random();
        return (this.sampleRate === 1 || random <= this.sampleRate) && (typeof options.sampleRate !== 'number' || random <= options.sampleRate);
      }
    }
  }, {
    key: "serializeTags",
    value: function serializeTags(tags) {
      var tagStrings = [];

      if (tags) {
        Object.keys(tags).forEach(function (key) {
          tagStrings.push("".concat(key, "=").concat(tags[key]));
        });
      }

      return tagStrings.length ? "; ".concat(tagStrings.join(', ')) : '';
    }
  }, {
    key: "onIncrement",
    value: function onIncrement(_ref2) {
      var name = _ref2.name,
          _ref2$amount = _ref2.amount,
          amount = _ref2$amount === void 0 ? 1 : _ref2$amount,
          options = _ref2.options;

      if (this.shouldLog(name, amount, options)) {
        this.log("(count) ".concat(name, ": +").concat(amount).concat(this.serializeTags(options === null || options === void 0 ? void 0 : options.tags)));
      }

      return Promise.resolve();
    }
  }, {
    key: "onGauge",
    value: function onGauge(_ref3) {
      var name = _ref3.name,
          amount = _ref3.amount,
          options = _ref3.options;

      if (this.shouldLog(name, amount, options)) {
        this.log("(gauge) ".concat(name, ": ").concat(amount).concat(this.serializeTags(options === null || options === void 0 ? void 0 : options.tags)));
      }

      return Promise.resolve();
    }
  }, {
    key: "onError",
    value: function onError(_ref4) {
      var _this$logger;

      var error = _ref4.error;
      (_this$logger = this.logger) === null || _this$logger === void 0 ? void 0 : _this$logger.error(error);
      return Promise.resolve();
    }
  }]);

  return LogReporter;
}(_reporter__WEBPACK_IMPORTED_MODULE_21__[/* MonitorReporter */ "a"]);

/***/ }),

/***/ "../../modules/trace-node/src/tracer.ts":
/*!***************************************************************************************!*\
  !*** /Users/opagani/projects/zillowgroup/rentals-js/modules/trace-node/src/tracer.ts ***!
  \***************************************************************************************/
/*! exports provided: TRACE_COOKIE_NAME, TRACE_COOKIE_DURATION_SEC, SESSION_ID_LENGTH, TRACE_ID_LENGTH, SPAN_ID_LENGTH, NodeTracer */
/*! exports used: NodeTracer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export TRACE_COOKIE_NAME */
/* unused harmony export TRACE_COOKIE_DURATION_SEC */
/* unused harmony export SESSION_ID_LENGTH */
/* unused harmony export TRACE_ID_LENGTH */
/* unused harmony export SPAN_ID_LENGTH */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NodeTracer; });
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.match.js */ "core-js/modules/es.string.match.js");
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.trim.js */ "core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.regexp.constructor.js */ "core-js/modules/es.regexp.constructor.js");
/* harmony import */ var core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.assign.js */ "core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_string_pad_start_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.string.pad-start.js */ "core-js/modules/es.string.pad-start.js");
/* harmony import */ var core_js_modules_es_string_pad_start_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_pad_start_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.parse-int.js */ "core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_36__);
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! core-js/modules/es.object.define-properties.js */ "core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_37___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_37__);
/* harmony import */ var _plugins__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./plugins */ "../../modules/trace-node/src/plugins/index.ts");
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! crypto */ "crypto");
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_39___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_39__);
/* harmony import */ var express_http_context__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! express-http-context */ "express-http-context");
/* harmony import */ var express_http_context__WEBPACK_IMPORTED_MODULE_40___default = /*#__PURE__*/__webpack_require__.n(express_http_context__WEBPACK_IMPORTED_MODULE_40__);
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! http */ "http");
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_41___default = /*#__PURE__*/__webpack_require__.n(http__WEBPACK_IMPORTED_MODULE_41__);
/* harmony import */ var https__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! https */ "https");
/* harmony import */ var https__WEBPACK_IMPORTED_MODULE_42___default = /*#__PURE__*/__webpack_require__.n(https__WEBPACK_IMPORTED_MODULE_42__);
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! url */ "url");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_43___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_43__);
/* harmony import */ var nano_time__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! nano-time */ "nano-time");
/* harmony import */ var nano_time__WEBPACK_IMPORTED_MODULE_44___default = /*#__PURE__*/__webpack_require__.n(nano_time__WEBPACK_IMPORTED_MODULE_44__);
/* harmony import */ var _zg_rentals_trace_base__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @zg-rentals/trace-base */ "../../modules/trace-base/src/index.ts");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








































function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









var TRACE_COOKIE_NAME = 'rjs-trace';
var TRACE_COOKIE_DURATION_SEC = 31536000;
var SESSION_ID_LENGTH = 26;
var TRACE_ID_LENGTH = 32;
var SPAN_ID_LENGTH = 16;
var requestsIntercepted = false;
var ERROR_KEYS = ['error', 'stack', 'err', 'errorStack', 'trace'];
var NodeTracer = /*#__PURE__*/function (_BaseTracer) {
  _inherits(NodeTracer, _BaseTracer);

  var _super = _createSuper(NodeTracer);

  function NodeTracer() {
    var _this;

    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        app = _ref.app,
        plugin = _ref.plugin,
        _ref$saveAllTraces = _ref.saveAllTraces,
        saveAllTraces = _ref$saveAllTraces === void 0 ? false : _ref$saveAllTraces;

    _classCallCheck(this, NodeTracer);

    _this = _super.call(this);

    _defineProperty(_assertThisInitialized(_this), "plugin", void 0);

    _defineProperty(_assertThisInitialized(_this), "app", void 0);

    _defineProperty(_assertThisInitialized(_this), "saveAllTraces", void 0);

    if (typeof window !== 'undefined') {
      throw new Error('@zg-rentals/trace-node should not be included in client-side code.');
    }

    _this.saveAllTraces = saveAllTraces;
    _this.plugin = plugin || new _plugins__WEBPACK_IMPORTED_MODULE_38__[/* BaseTracerPlugin */ "a"]();

    if (app) {
      _this.traceApp(app);
    }

    if (!requestsIntercepted) {
      _this.interceptRequests(http__WEBPACK_IMPORTED_MODULE_41___default.a);

      _this.interceptRequests(https__WEBPACK_IMPORTED_MODULE_42___default.a);
    }

    requestsIntercepted = true;
    return _this;
  }

  _createClass(NodeTracer, [{
    key: "interceptRequests",
    value: function interceptRequests(protocol) {
      var _this2 = this;

      var originalRequest = protocol.request;

      var wrappedRequest = function wrappedRequest(urlOrOptions, optionsOrCallback, callbackOrVoid) {
        var url;
        var options;
        var callback;

        if (typeof urlOrOptions === 'string' || urlOrOptions instanceof url__WEBPACK_IMPORTED_MODULE_43__["URL"]) {
          url = urlOrOptions;
          options = optionsOrCallback;
          callback = callbackOrVoid;

          _this2.addTraceHeaders(options);

          return originalRequest(url, options, callback);
        }

        options = urlOrOptions;
        callback = optionsOrCallback;

        _this2.addTraceHeaders(options);

        return originalRequest(options, callback);
      };

      protocol.request = wrappedRequest;
    }
  }, {
    key: "traceApp",
    value: function traceApp(app) {
      this.app = app;
      app.use(express_http_context__WEBPACK_IMPORTED_MODULE_40___default.a.middleware);
      app.use(this.middleware.bind(this));
    }
  }, {
    key: "shouldBeTraced",
    value: function shouldBeTraced(req) {
      var contentType = req.headers['content-type'];
      return Boolean(!contentType || contentType.match(/^(text|application)\/(html|json)/i));
    }
  }, {
    key: "parseTraceState",
    value: function parseTraceState() {
      var tracestate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var state = {};
      tracestate.split(',').forEach(function (keyVal) {
        if (keyVal) {
          var _keyVal$split = keyVal.split('='),
              _keyVal$split2 = _slicedToArray(_keyVal$split, 2),
              key = _keyVal$split2[0],
              value = _keyVal$split2[1];

          state[key.trim()] = value.trim();
        }
      });
      return state;
    }
  }, {
    key: "parseCookie",
    value: function parseCookie(cookieName, req) {
      var cookies = req.get('cookie');

      if (cookies) {
        var regex = new RegExp("(?:^|;\\s*)".concat(cookieName, "=(.*?)(?:;|$)"));
        var match = cookies.match(regex);

        if (match) {
          return match[1];
        }
      }
    }
  }, {
    key: "middleware",
    value: function middleware(req, res, next) {
      if (this.shouldBeTraced(req)) {
        var traceCookie = this.parseCookie(TRACE_COOKIE_NAME, req);
        var cookieParts = traceCookie ? traceCookie.split(':') : [];

        var _cookieParts = _slicedToArray(cookieParts, 2),
            sessionId = _cookieParts[0],
            traceId = _cookieParts[1];

        var doSaveFlag = cookieParts[2];

        if (!traceId || traceId.length !== TRACE_ID_LENGTH) {
          var _req$headers;

          var traceparent = ((_req$headers = req.headers) === null || _req$headers === void 0 ? void 0 : _req$headers.traceparent) || '';
          var traceParts = traceparent.toString().split('-');

          if (traceParts.length === 4 && traceParts[1].length === TRACE_ID_LENGTH) {
            traceId = traceParts[1];
            doSaveFlag = traceParts[3];
          }

          if (!traceId) {
            traceId = this.makeTraceID();
          }
        }

        if (!sessionId) {
          sessionId = this.makeID(SESSION_ID_LENGTH);
        }

        res.setHeader('set-cookie', "".concat(TRACE_COOKIE_NAME, "=").concat(sessionId, "::; path=/; max-age=").concat(TRACE_COOKIE_DURATION_SEC, "; samesite=strict"));
        var tracestate = this.parseTraceState(req.headers.tracestate);
        var pluginTags = this.plugin.parseRequestTags(req, this.parseCookie);
        express_http_context__WEBPACK_IMPORTED_MODULE_40___default.a.set('trace', {
          traceId: traceId,
          sessionId: sessionId,
          reqId: this.makeID(SPAN_ID_LENGTH),
          doSave: doSaveFlag || this.saveAllTraces || req.query.debug,
          tags: _objectSpread(_objectSpread({}, tracestate), pluginTags)
        });
        this.plugin.trace(function (done) {
          res.on('finish', function () {
            done();
          });
        }, "".concat(req.method, " ").concat(req.path), tracestate);
      }

      next();
    }
  }, {
    key: "trace",
    value: function trace(fn) {
      var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : fn.name || 'anonymous';
      var tags = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var currentTrace = this.getCurrentTrace();

      if (currentTrace) {
        Object.assign(tags, currentTrace.tags);
      }

      return this.plugin.trace(fn, name, tags);
    }
  }, {
    key: "setRequestTag",
    value: function setRequestTag(key, value) {
      var trace = this.getCurrentTrace() || {
        tags: {}
      };
      trace.tags[key] = value;
    }
  }, {
    key: "getRequestTag",
    value: function getRequestTag(key) {
      var trace = this.getCurrentTrace() || {};
      return trace.tags[key];
    }
  }, {
    key: "getCurrentTrace",
    value: function getCurrentTrace() {
      return express_http_context__WEBPACK_IMPORTED_MODULE_40___default.a.get('trace');
    }
  }, {
    key: "getCurrentSpan",
    value: function getCurrentSpan() {
      return this.plugin.getCurrentSpan();
    }
  }, {
    key: "makeID",
    value: function makeID() {
      var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : SESSION_ID_LENGTH;
      var id = crypto__WEBPACK_IMPORTED_MODULE_39___default.a.randomBytes(Math.ceil(length / 2)).toString('hex');
      return id.slice(0, length);
    }
  }, {
    key: "makeTraceID",
    value: function makeTraceID() {
      var currentTimeNs = BigInt(nano_time__WEBPACK_IMPORTED_MODULE_44___default()());
      var formattedTimestamp = currentTimeNs.toString(16).padStart(16, '0').substring(0, 16);
      return formattedTimestamp + this.makeID(SPAN_ID_LENGTH);
    }
  }, {
    key: "getCurrentTags",
    value: function getCurrentTags() {
      var spanTags = this.plugin.getAllTags();
      var trace = express_http_context__WEBPACK_IMPORTED_MODULE_40___default.a.get('trace');

      if (trace || spanTags) {
        trace = trace || {
          tags: {}
        };
        spanTags = spanTags || {};
        var _trace = trace,
            sessionId = _trace.sessionId,
            reqId = _trace.reqId;
        return _objectSpread(_objectSpread({
          js: '1',
          // flag traces that were initiated from JS apps
          sessionId: sessionId,
          reqId: reqId
        }, trace.tags), spanTags);
      }
    }
  }, {
    key: "formatTracestatePair",
    value: function formatTracestatePair(key, value) {
      key = key.toLowerCase().replace(/[^a-z0-9_\-*/]/g, '');
      value = value.replace(/[,=\s]/g, '');
      return value.length ? "".concat(key, "=").concat(value) : '';
    }
  }, {
    key: "addTraceHeaders",
    value: function addTraceHeaders(options) {
      var _this3 = this;

      var trace = express_http_context__WEBPACK_IMPORTED_MODULE_40___default.a.get('trace');
      var tags = this.getCurrentTags();

      if (trace || tags) {
        trace = trace || {};
        tags = tags || {};
        var traceId = trace.traceId || this.makeTraceID();
        var spanId = this.makeID(SPAN_ID_LENGTH);
        var doSaveFlag = parseInt(trace.doSave);

        if (isNaN(doSaveFlag)) {
          doSaveFlag = trace.doSave || this.saveAllTraces ? '1' : '0';
        }

        var traceparent = "00-".concat(traceId, "-").concat(spanId, "-0").concat(doSaveFlag);
        var tracestate = [];
        Object.keys(tags).forEach(function (key) {
          if (tags[key] !== undefined) {
            var _tags$key;

            var statePair = _this3.formatTracestatePair(key, ((_tags$key = tags[key]) === null || _tags$key === void 0 ? void 0 : _tags$key.toString()) || '');

            if (statePair) {
              tracestate.push(statePair);
            }
          }
        });
        options.headers = options.headers || {};
        options.headers.traceparent = traceparent;
        options.headers.tracestate = tracestate.join(',');
      }
    }
  }, {
    key: "logMixin",
    value: function logMixin(log) {
      var tags = this.getCurrentTags();

      if (tags) {
        var trace = express_http_context__WEBPACK_IMPORTED_MODULE_40___default.a.get('trace') || {};

        if (this.isError(log)) {
          this.setSaveTrace(true);
        }

        return _objectSpread({
          traceId: trace.traceId
        }, tags);
      }

      return {};
    }
  }, {
    key: "isError",
    value: function isError(log) {
      return log && _typeof(log) === 'object' && ERROR_KEYS.find(function (key) {
        return log[key];
      });
    }
  }, {
    key: "setSaveTrace",
    value: function setSaveTrace(doSave) {
      var trace = express_http_context__WEBPACK_IMPORTED_MODULE_40___default.a.get('trace');

      if (trace) {
        trace.doSave = doSave;
      }
    }
  }, {
    key: "errorMiddleware",
    value: function errorMiddleware() {
      var _this4 = this;

      var app = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.app;
      app === null || app === void 0 ? void 0 : app.use(function (error, req, res, next) {
        _this4.setSaveTrace(true);

        error.name && _this4.setSpanTag('error.type', error.name);
        error.message && _this4.setSpanTag('error.msg', error.message);
        error.stack && _this4.setSpanTag('error.stack', error.stack);
        next(error);
      });
    }
  }]);

  return NodeTracer;
}(_zg_rentals_trace_base__WEBPACK_IMPORTED_MODULE_45__[/* default */ "a"]);

/***/ }),

/***/ "./app/graphql/PolicyDetails/schema.graphql":
/*!**************************************************!*\
  !*** ./app/graphql/PolicyDetails/schema.graphql ***!
  \**************************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports) {


    var doc = {"kind":"Document","definitions":[{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"Lease"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"id"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"monthlyRentUsd"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"startDate"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"endDate"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}},"directives":[]}]},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"Payments"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"id"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"termType"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"firstExpectedPaymentDate"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"LocalDateType"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"finalExpectedPaymentDate"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"LocalDateType"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"firstSuccessfulPaymentDate"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"LocalDateType"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"mostRecentSuccessfulPaymentDate"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"LocalDateType"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"rentTermsCancelledDate"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"LocalDateType"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"daysDelinquent"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"directives":[]}]},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"LocalDateType"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"year"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"month"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"day"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"directives":[]}]},{"kind":"EnumTypeDefinition","name":{"kind":"Name","value":"PremiumPaidBy"},"directives":[],"values":[{"kind":"EnumValueDefinition","name":{"kind":"Name","value":"Passthrough"},"directives":[]},{"kind":"EnumValueDefinition","name":{"kind":"Name","value":"Direct"},"directives":[]}]},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"Property"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"listingAlias"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"street"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"unit"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"city"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"state"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"zip"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]}]},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"Landlord"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"id"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"firstName"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"lastName"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"email"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"phone"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]}]},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"ApplicationEligibility"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"applicationId"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"applicationEligibilityStatus"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]}]},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"Renter"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"renterId"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"firstName"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"lastName"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"email"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"phone"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"creditCheckEligibleFlag"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"incomeToRentEligibleFlag"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}},"directives":[]}]},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"LeaseLockBinder"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"id"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"issueDate"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"LocalDateType"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"effectiveDate"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"LocalDateType"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"expirationDate"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"LocalDateType"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"cancelDate"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"LocalDateType"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"binderStatus"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]}]},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"LeaseLockCertificate"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"id"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"issueDate"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"LocalDateType"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"effectiveDate"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"LocalDateType"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"expirationDate"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"LocalDateType"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"cancelDate"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"LocalDateType"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"certificateStatus"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]}]},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"Quote"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"quoteId"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"premium"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"coverage"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"firstMonthStampingFee"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"firstMonthSurplusLines"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"firstMonthTotal"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"recurringMonthSurplusLines"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"recurringMonthTotal"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}},"directives":[]}]},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"PremiumTransaction"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"transactionId"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"transactionType"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"PremiumPaidBy"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"premiumAmountInCents"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"transactionCreatedDate"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"LocalDateType"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"transactionUpdatedDate"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"LocalDateType"}},"directives":[]}]},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"PolicyDetails"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"policyId"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"property"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Property"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"lease"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Lease"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"payments"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Payments"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"landlords"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Landlord"}}}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"applicationEligibility"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ApplicationEligibility"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"renters"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Renter"}}}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"leaseLockBinder"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"LeaseLockBinder"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"leaseLockCertificate"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"LeaseLockCertificate"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"quote"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Quote"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"premiumTransaction"},"arguments":[],"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PremiumTransaction"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"policyStatus"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"isCancellable"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"directives":[]}]},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"HistoryForPolicyRelatedActionsType"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"policyId"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"action"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"createdDate"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"message"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"source"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"sourceId"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]}]},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"HistoryForPolicyRelatedActions"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"logs"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"HistoryForPolicyRelatedActionsType"}}}},"directives":[]}]},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"CancelPolicyResponse"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"success"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"httpStatus"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"error"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"CancelPolicyError"}},"directives":[]}]},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"CancelPolicyError"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"message"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]}]},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"Query"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"expandedPolicyDetails"},"arguments":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"policyId"},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]}],"type":{"kind":"NamedType","name":{"kind":"Name","value":"PolicyDetails"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"historyForPolicyRelatedActions"},"arguments":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"policyId"},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]}],"type":{"kind":"NamedType","name":{"kind":"Name","value":"HistoryForPolicyRelatedActions"}},"directives":[]}]},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"Mutation"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"cancelPolicy"},"arguments":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"policyId"},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"caseNumber"},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"note"},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]}],"type":{"kind":"NamedType","name":{"kind":"Name","value":"CancelPolicyResponse"}},"directives":[]}]}],"loc":{"start":0,"end":2826}};
    doc.loc.source = {"body":"type Lease {\n  id: Int\n  monthlyRentUsd: Int\n  startDate: Float\n  endDate: Float\n}\n\ntype Payments {\n  id: Int\n  termType: String\n  firstExpectedPaymentDate: LocalDateType\n  finalExpectedPaymentDate: LocalDateType\n  firstSuccessfulPaymentDate: LocalDateType\n  mostRecentSuccessfulPaymentDate: LocalDateType\n  rentTermsCancelledDate: LocalDateType\n  daysDelinquent: Int\n}\n\ntype LocalDateType {\n  year: Int\n  month: Int\n  day: Int\n}\n\nenum PremiumPaidBy {\n  Passthrough\n  Direct\n}\n\ntype Property {\n  listingAlias: String!\n  street: String!\n  unit: String\n  city: String!\n  state: String!\n  zip: String!\n}\n\ntype Landlord {\n  id: String\n  firstName: String!\n  lastName: String!\n  email: String!\n  phone: String\n}\n\ntype ApplicationEligibility {\n  applicationId: String\n  applicationEligibilityStatus: String\n}\n\ntype Renter {\n  renterId: String\n  firstName: String!\n  lastName: String!\n  email: String!\n  phone: String\n  creditCheckEligibleFlag: Boolean\n  incomeToRentEligibleFlag: Boolean\n}\n\ntype LeaseLockBinder {\n  id: String!\n  issueDate: LocalDateType!\n  effectiveDate: LocalDateType\n  expirationDate: LocalDateType\n  cancelDate: LocalDateType\n  binderStatus: String!\n}\n\ntype LeaseLockCertificate {\n  id: String!\n  issueDate: LocalDateType!\n  effectiveDate: LocalDateType\n  expirationDate: LocalDateType\n  cancelDate: LocalDateType\n  certificateStatus: String!\n}\n\ntype Quote {\n  quoteId: Float!\n  premium: Float\n  coverage: Float\n  firstMonthStampingFee: Float\n  firstMonthSurplusLines: Float\n  firstMonthTotal: Float\n  recurringMonthSurplusLines: Float\n  recurringMonthTotal: Float\n}\n\ntype PremiumTransaction {\n  transactionId: String!\n  transactionType: PremiumPaidBy\n  premiumAmountInCents: Float\n  transactionCreatedDate: LocalDateType\n  transactionUpdatedDate: LocalDateType\n}\n\ntype PolicyDetails {\n  policyId: String!\n  property: Property\n  lease: Lease\n  payments: Payments\n  landlords: [Landlord!]!\n  applicationEligibility: ApplicationEligibility!\n  renters: [Renter!]!\n  leaseLockBinder: LeaseLockBinder\n  leaseLockCertificate: LeaseLockCertificate\n  quote: Quote\n  premiumTransaction: [PremiumTransaction]\n  policyStatus: String\n  isCancellable: Boolean!\n}\n\ntype HistoryForPolicyRelatedActionsType {\n  policyId: String!\n  action: String!\n  createdDate: Float!\n  message: String!\n  source: String!\n  sourceId: String!\n}\n\ntype HistoryForPolicyRelatedActions {\n  logs: [HistoryForPolicyRelatedActionsType]!\n}\n\ntype CancelPolicyResponse {\n  success: Boolean!\n  httpStatus: Int!\n  error: CancelPolicyError\n}\n\ntype CancelPolicyError {\n  message: String\n}\n\ntype Query {\n  expandedPolicyDetails(policyId: String!): PolicyDetails\n  historyForPolicyRelatedActions(policyId: String!): HistoryForPolicyRelatedActions\n}\n\ntype Mutation {\n  cancelPolicy(policyId: String!, caseNumber: String!, note: String!): CancelPolicyResponse\n}\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

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

/***/ "./app/graphql/Reports/resolvers.ts":
/*!******************************************!*\
  !*** ./app/graphql/Reports/resolvers.ts ***!
  \******************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services */ "./app/graphql/Reports/services/index.ts");




function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



var reports = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_parent, _ref, context) {
    var _context$token, _context$token2;

    var reportType;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            reportType = _ref.reportType;
            return _context.abrupt("return", _services__WEBPACK_IMPORTED_MODULE_3__[/* reportsServices */ "a"].getReportsDetails((context === null || context === void 0 ? void 0 : (_context$token = context.token) === null || _context$token === void 0 ? void 0 : _context$token['rent-guaranteeUserToken']) || '', (context === null || context === void 0 ? void 0 : (_context$token2 = context.token) === null || _context$token2 === void 0 ? void 0 : _context$token2['rent-guaranteeSessionToken']) || '', reportType || ''));

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function reports(_x, _x2, _x3) {
    return _ref2.apply(this, arguments);
  };
}();

var landlordsDataForReports = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(_parent, _ref3, context) {
    var _context$token3, _context$token4;

    var methodToInvoke, urlParams;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            methodToInvoke = _ref3.methodToInvoke, urlParams = _ref3.urlParams;
            return _context2.abrupt("return", _services__WEBPACK_IMPORTED_MODULE_3__[/* reportsServices */ "a"].getLandlordsDataForReports(methodToInvoke, urlParams, (context === null || context === void 0 ? void 0 : (_context$token3 = context.token) === null || _context$token3 === void 0 ? void 0 : _context$token3['rent-guaranteeUserToken']) || '', (context === null || context === void 0 ? void 0 : (_context$token4 = context.token) === null || _context$token4 === void 0 ? void 0 : _context$token4['rent-guaranteeSessionToken']) || ''));

          case 2:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function landlordsDataForReports(_x4, _x5, _x6) {
    return _ref4.apply(this, arguments);
  };
}();

var userActivityDataForReports = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(_parent, _ref5, context) {
    var _context$token5, _context$token6;

    var methodToInvoke, urlParams;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            methodToInvoke = _ref5.methodToInvoke, urlParams = _ref5.urlParams;
            return _context3.abrupt("return", _services__WEBPACK_IMPORTED_MODULE_3__[/* reportsServices */ "a"].getUserActivityDataForReports(methodToInvoke, urlParams || null, (context === null || context === void 0 ? void 0 : (_context$token5 = context.token) === null || _context$token5 === void 0 ? void 0 : _context$token5['rent-guaranteeUserToken']) || '', (context === null || context === void 0 ? void 0 : (_context$token6 = context.token) === null || _context$token6 === void 0 ? void 0 : _context$token6['rent-guaranteeSessionToken']) || ''));

          case 2:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function userActivityDataForReports(_x7, _x8, _x9) {
    return _ref6.apply(this, arguments);
  };
}();

var reportsQueryResolvers = {
  reports: reports,
  landlordsDataForReports: landlordsDataForReports,
  userActivityDataForReports: userActivityDataForReports
};
var reportsResolvers = {
  Query: reportsQueryResolvers
};
/* harmony default export */ __webpack_exports__["a"] = (reportsResolvers);

/***/ }),

/***/ "./app/graphql/Reports/schema.graphql":
/*!********************************************!*\
  !*** ./app/graphql/Reports/schema.graphql ***!
  \********************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports) {


    var doc = {"kind":"Document","definitions":[{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"MethodParamsDetails"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"paramName"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"paramDataType"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"paramDefaultValue"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},"directives":[]}]},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"Report"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"reportName"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"reportDescription"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"methodToInvoke"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"methodParamsDetails"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MethodParamsDetails"}}}},"directives":[]}]},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"Reports"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"reportsDetails"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Report"}}}}},"directives":[]}]},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"RentGuaranteeLandLord"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"landlordUserToken"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"firstName"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"lastName"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"emails"},"arguments":[],"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"phones"},"arguments":[],"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]}]},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"RentGuaranteeLandLordObject"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"landlord"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"RentGuaranteeLandLord"}},"directives":[]}]},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"Landlords"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"rentGuaranteeLandlords"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RentGuaranteeLandLordObject"}}}}},"directives":[]}]},{"kind":"UnionTypeDefinition","name":{"kind":"Name","value":"UserActivities"},"directives":[],"types":[{"kind":"NamedType","name":{"kind":"Name","value":"UserActivity"}},{"kind":"NamedType","name":{"kind":"Name","value":"ListingActivity"}},{"kind":"NamedType","name":{"kind":"Name","value":"ApplicationActivity"}}]},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"Activities"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"userActivities"},"arguments":[],"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserActivities"}}}},"directives":[]}]},{"kind":"InterfaceTypeDefinition","name":{"kind":"Name","value":"UserActionActivity"},"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"idType"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"idValue"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"action"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"createdDate"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"userToken"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"message"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]}]},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"UserActivity"},"interfaces":[{"kind":"NamedType","name":{"kind":"Name","value":"UserActionActivity"}}],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"idType"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"idValue"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"action"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"createdDate"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"userToken"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"message"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]}]},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"ListingActivity"},"interfaces":[{"kind":"NamedType","name":{"kind":"Name","value":"UserActionActivity"}}],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"idType"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"idValue"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"action"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"createdDate"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"userToken"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"message"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]}]},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"ApplicationActivity"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"applicationId"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"incomeToRentEligible"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"incomeUpdatedDate"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"listingAlias"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"createdDate"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}},"directives":[]}]},{"kind":"InputObjectTypeDefinition","name":{"kind":"Name","value":"UrlParams"},"directives":[],"fields":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"name"},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"value"},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]}]},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"Query"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"reports"},"arguments":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"reportType"},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]}],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Reports"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"landlordsDataForReports"},"arguments":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"methodToInvoke"},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"urlParams"},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]}],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Landlords"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"userActivityDataForReports"},"arguments":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"methodToInvoke"},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"urlParams"},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UrlParams"}}}},"directives":[]}],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Activities"}},"directives":[]}]}],"loc":{"start":0,"end":1639}};
    doc.loc.source = {"body":"type MethodParamsDetails {\n  paramName: String!\n  paramDataType: String!\n  paramDefaultValue: Int!\n}\n\ntype Report {\n  reportName: String!\n  reportDescription: String!\n  methodToInvoke: String!\n  methodParamsDetails: [MethodParamsDetails]!\n}\n\ntype Reports {\n  reportsDetails: [Report!]!\n}\n\ntype RentGuaranteeLandLord {\n  landlordUserToken: String!\n  firstName: String\n  lastName: String\n  emails: [String]\n  phones: [String]\n}\n\ntype RentGuaranteeLandLordObject {\n  landlord: RentGuaranteeLandLord\n}\n\ntype Landlords {\n  rentGuaranteeLandlords: [RentGuaranteeLandLordObject!]!\n}\n\nunion UserActivities = UserActivity | ListingActivity | ApplicationActivity\n\ntype Activities {\n  userActivities: [UserActivities!]\n}\n\ninterface UserActionActivity {\n  idType: String!\n  idValue: String!\n  action: String!\n  createdDate: Float!\n  userToken: String!\n  message: String\n}\n\ntype UserActivity implements UserActionActivity {\n  idType: String!\n  idValue: String!\n  action: String!\n  createdDate: Float!\n  userToken: String!\n  message: String\n}\n\ntype ListingActivity implements UserActionActivity {\n  idType: String!\n  idValue: String!\n  action: String!\n  createdDate: Float!\n  userToken: String!\n  message: String\n}\n\ntype ApplicationActivity {\n  applicationId: String!\n  incomeToRentEligible: Int!\n  incomeUpdatedDate: Float!\n  listingAlias: String!\n  createdDate: Float!\n}\n\ninput UrlParams {\n  name: String!\n  value: String\n}\n\ntype Query {\n  reports(reportType: String): Reports\n  landlordsDataForReports(methodToInvoke: String!, urlParams: String): Landlords\n  userActivityDataForReports(methodToInvoke: String!, urlParams: [UrlParams!]): Activities\n}\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

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

/***/ "./app/graphql/Reports/services/getReportsDetails.ts":
/*!***********************************************************!*\
  !*** ./app/graphql/Reports/services/getReportsDetails.ts ***!
  \***********************************************************/
/*! exports provided: LANDLORD_REPORT_TYPE, USER_ACTIVITY_REPORT_TYPE, ACCOUNTING_REPORT_TYPE, default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export LANDLORD_REPORT_TYPE */
/* unused harmony export USER_ACTIVITY_REPORT_TYPE */
/* unused harmony export ACCOUNTING_REPORT_TYPE */
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
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/api */ "./app/graphql/utils/api.ts");
/* harmony import */ var _server_utils_log__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../server/utils/log */ "./app/server/utils/log.ts");
/* harmony import */ var _server_utils_tracer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../server/utils/tracer */ "./app/server/utils/tracer.ts");
/* harmony import */ var _server_utils_nodeMonitor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../server/utils/nodeMonitor */ "./app/server/utils/nodeMonitor.ts");





function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }






var LANDLORD_REPORT_TYPE = 'landlord';
var USER_ACTIVITY_REPORT_TYPE = 'userActivity'; // upcoming report type

var ACCOUNTING_REPORT_TYPE = 'accounting';

var getReportsDetails = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(rentGuaranteeUserToken, rentGuaranteeSessionToken, reportType) {
    var reportEndpoint, response;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.t0 = reportType;
            _context.next = _context.t0 === USER_ACTIVITY_REPORT_TYPE ? 3 : 5;
            break;

          case 3:
            reportEndpoint = _utils_api__WEBPACK_IMPORTED_MODULE_5__[/* api */ "a"].gql.userActivityReports;
            return _context.abrupt("break", 6);

          case 5:
            reportEndpoint = _utils_api__WEBPACK_IMPORTED_MODULE_5__[/* api */ "a"].gql.landlordReports;

          case 6:
            _context.next = 8;
            return axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("".concat(reportEndpoint), {
              headers: {
                Cookie: "rent-guaranteeUserToken=".concat(rentGuaranteeUserToken, "; rent-guaranteeSessionToken=").concat(rentGuaranteeSessionToken)
              }
            }).then(function (res) {
              return res.data.data;
            })["catch"](function (err) {
              _server_utils_log__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].error("Network error fetching reports: ".concat(err)); // Log an error (using the class instance's logger):

              // Log an error (using the class instance's logger):
              _server_utils_nodeMonitor__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].increment({
                name: 'getReportsDetails failed',
                amount: 1
              });
              return null;
            });

          case 8:
            response = _context.sent;

            if (!response) {
              _context.next = 13;
              break;
            }

            _context.next = 12;
            return _server_utils_nodeMonitor__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].increment({
              name: 'getReportsDetails viewed',
              amount: 1
            });

          case 12:
            return _context.abrupt("return", response);

          case 13:
            return _context.abrupt("return", null);

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getReportsDetails(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["a"] = (_server_utils_tracer__WEBPACK_IMPORTED_MODULE_7__[/* tracer */ "a"].wrap(getReportsDetails));

/***/ }),

/***/ "./app/graphql/Reports/services/getUserActivityDataForReports.ts":
/*!***********************************************************************!*\
  !*** ./app/graphql/Reports/services/getUserActivityDataForReports.ts ***!
  \***********************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.define-properties.js */ "core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _server_utils_log__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../server/utils/log */ "./app/server/utils/log.ts");
/* harmony import */ var _server_utils_tracer__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../server/utils/tracer */ "./app/server/utils/tracer.ts");
/* harmony import */ var _graphql_utils_utils__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../graphql/utils/utils */ "./app/graphql/utils/utils.ts");
/* harmony import */ var _server_utils_nodeMonitor__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../server/utils/nodeMonitor */ "./app/server/utils/nodeMonitor.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
















function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }







var getUserActivityDataForReports = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(methodToInvoke, urlParams, rentGuaranteeUserToken, rentGuaranteeSessionToken) {
    var url, queryParams, response;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            url = "".concat(process.env.API, "/rent-guarantee/api/v1/admin/").concat(methodToInvoke);
            queryParams = _graphql_utils_utils__WEBPACK_IMPORTED_MODULE_17__[/* utils */ "a"].generateQueryParams(urlParams);
            _context.next = 4;
            return axios__WEBPACK_IMPORTED_MODULE_14___default.a.get("".concat(url), {
              params: queryParams,
              headers: {
                Cookie: "rent-guaranteeUserToken=".concat(rentGuaranteeUserToken, "; rent-guaranteeSessionToken=").concat(rentGuaranteeSessionToken)
              }
            }).then(function (res) {
              switch (methodToInvoke) {
                case 'getUserActivityAllEvents':
                case 'getUserActivityOptIns':
                  if (res) {
                    var _res$data, _res$data$data;

                    return {
                      __typename: 'Activities',
                      userActivities: convertToActivity((res === null || res === void 0 ? void 0 : (_res$data = res.data) === null || _res$data === void 0 ? void 0 : (_res$data$data = _res$data.data) === null || _res$data$data === void 0 ? void 0 : _res$data$data.logs) || [])
                    };
                  }

                  return null;
                  break;

                default:
                  return null;
              }
            })["catch"](function (err) {
              _server_utils_log__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"].error("Network error fetching user activity ".concat(methodToInvoke, " report: ").concat(err)); // Log an error (using the class instance's logger):

              // Log an error (using the class instance's logger):
              _server_utils_nodeMonitor__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"].increment({
                name: 'userActivityReports failed',
                amount: 1
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
            return _server_utils_nodeMonitor__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"].increment({
              name: 'userActivityReports viewed',
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

  return function getUserActivityDataForReports(_x, _x2, _x3, _x4) {
    return _ref.apply(this, arguments);
  };
}();

var convertToActivity = function convertToActivity(activities) {
  return activities.map(function (activity) {
    return _objectSpread(_objectSpread({}, activity), {}, {
      __typename: activity.idType == 'listingAlias' ? 'ListingActivity' : 'UserActivity'
    });
  });
};

/* harmony default export */ __webpack_exports__["a"] = (_server_utils_tracer__WEBPACK_IMPORTED_MODULE_16__[/* tracer */ "a"].wrap(getUserActivityDataForReports));

/***/ }),

/***/ "./app/graphql/Reports/services/index.ts":
/*!***********************************************!*\
  !*** ./app/graphql/Reports/services/index.ts ***!
  \***********************************************/
/*! exports provided: reportsServices */
/*! exports used: reportsServices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return reportsServices; });
/* harmony import */ var _getReportsDetails__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getReportsDetails */ "./app/graphql/Reports/services/getReportsDetails.ts");
/* harmony import */ var _getLandlordsDataForReports__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getLandlordsDataForReports */ "./app/graphql/Reports/services/getLandlordsDataForReports.ts");
/* harmony import */ var _getUserActivityDataForReports__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getUserActivityDataForReports */ "./app/graphql/Reports/services/getUserActivityDataForReports.ts");



var reportsServices = {
  getReportsDetails: _getReportsDetails__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"],
  getLandlordsDataForReports: _getLandlordsDataForReports__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
  getUserActivityDataForReports: _getUserActivityDataForReports__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]
};

/***/ }),

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
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "core-js/modules/es.array.concat.js");
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
    policyStatuses: "".concat(process.env.API, "/rent-guarantee/api/v1/admin/getPolicyStatuses"),
    expandedPolicyDetails: "".concat(process.env.API, "/rent-guarantee/api/v1/admin/getExpandedPolicyDetails"),
    historyForPolicyRelatedActions: "".concat(process.env.API, "/rent-guarantee/api/v1/admin/getPolicyActionLogs"),
    cancelPolicy: "".concat(process.env.API, "/rent-guarantee/api/v1/admin/cancelPolicy"),
    landlordReports: "".concat(process.env.API, "/rent-guarantee/api/v1/admin/getReportsDetails"),
    userActivityReports: "".concat(process.env.API, "/rent-guarantee/api/v1/admin/getUserActivityReportsDetails")
  }
};

/***/ }),

/***/ "./app/graphql/utils/utils.ts":
/*!************************************!*\
  !*** ./app/graphql/utils/utils.ts ***!
  \************************************/
/*! exports provided: utils */
/*! exports used: utils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return utils; });
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.assign.js */ "core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_4__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var generateQueryParams = function generateQueryParams(urlParams) {
  var queryParams = {};

  if (urlParams && (urlParams === null || urlParams === void 0 ? void 0 : urlParams.length) > 0) {
    urlParams === null || urlParams === void 0 ? void 0 : urlParams.forEach(function (obj) {
      var keyName = obj === null || obj === void 0 ? void 0 : obj.name;

      if (keyName) {
        Object.assign(queryParams, _defineProperty({}, keyName, obj === null || obj === void 0 ? void 0 : obj.value));
      }
    });
  }

  return queryParams;
};

var utils = {
  generateQueryParams: generateQueryParams
};

/***/ }),

/***/ "./app/server/server.ts":
/*!******************************!*\
  !*** ./app/server/server.ts ***!
  \******************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cookie-parser */ "cookie-parser");
/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cookie_parser__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _zg_rentals_logger_node__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @zg-rentals/logger-node */ "../../modules/logger-node/src/index.ts");
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cors */ "cors");
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _middleware_nodeMonitor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./middleware/nodeMonitor */ "./app/server/middleware/nodeMonitor.ts");
/* harmony import */ var _utils_log__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/log */ "./app/server/utils/log.ts");
/* harmony import */ var _middleware_healthcheck__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./middleware/healthcheck */ "./app/server/middleware/healthcheck.ts");
/* harmony import */ var _utils_tracer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/tracer */ "./app/server/utils/tracer.ts");
/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! apollo-server-express */ "apollo-server-express");
/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(apollo_server_express__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _graphql_federatedSchema__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../graphql/federatedSchema */ "./app/graphql/federatedSchema.ts");







 // GraphQL



var step = _utils_log__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].child({
  name: 'server'
});
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
var healthcheck = Object(_middleware_healthcheck__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_utils_log__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].child({
  name: 'healthcheck'
}));
var httpLogger = Object(_zg_rentals_logger_node__WEBPACK_IMPORTED_MODULE_2__[/* getHttpLogger */ "c"])({
  logger: _utils_log__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"]
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
_utils_tracer__WEBPACK_IMPORTED_MODULE_7__[/* tracer */ "a"].errorMiddleware(); // Express error handler - catches any express error uncaught by a middleware function

app.use(function (err, req, res, next) {
  _utils_log__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].error(err);
  res.status(500);
  next();
});
server.applyMiddleware({
  app: app,
  path: '/rent-guarantee-graphql/graphql',
  cors: false
});
/* harmony default export */ __webpack_exports__["default"] = (app);

/***/ }),

/***/ "./app/server/utils/log.ts":
/*!*********************************!*\
  !*** ./app/server/utils/log.ts ***!
  \*********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _zg_rentals_logger_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @zg-rentals/logger-node */ "../../modules/logger-node/src/index.ts");
/* harmony import */ var _tracer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tracer */ "./app/server/utils/tracer.ts");


var log = Object(_zg_rentals_logger_node__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
  logPath: process.env.NODE_OUT_FILE,
  level: process.env.LOG_LEVEL,
  mixin: function mixin() {
    return _tracer__WEBPACK_IMPORTED_MODULE_1__[/* tracer */ "a"].logMixin();
  }
});
/* harmony default export */ __webpack_exports__["a"] = (log);

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/*! exports used: URL, default */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

};
//# sourceMappingURL=index.2c16fa815b93c18eebb4.hot-update.js.map