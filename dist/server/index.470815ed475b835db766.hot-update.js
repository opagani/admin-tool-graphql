exports.id = "index";
exports.modules = {

/***/ "../../modules/monitor-base/src/baseMonitor.ts":
/*!**********************************************************************************************!*\
  !*** /Users/opagani/projects/zillowgroup/rentals-js/modules/monitor-base/src/baseMonitor.ts ***!
  \**********************************************************************************************/
/*! exports provided: BaseMonitor */
/*! exports used: BaseMonitor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseMonitor; });
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_11__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }













function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var BaseMonitor = /*#__PURE__*/function () {
  function BaseMonitor() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        logger = _ref.logger,
        _ref$plugins = _ref.plugins,
        plugins = _ref$plugins === void 0 ? [] : _ref$plugins,
        _ref$reporters = _ref.reporters,
        reporters = _ref$reporters === void 0 ? [] : _ref$reporters;

    _classCallCheck(this, BaseMonitor);

    _defineProperty(this, "plugins", void 0);

    _defineProperty(this, "reporters", void 0);

    _defineProperty(this, "stats", void 0);

    _defineProperty(this, "logger", void 0);

    this.logger = logger;
    this.plugins = plugins;
    this.reporters = reporters;
    this.stats = {};

    this._initializeReporters();

    this._trackMonitorStart();

    this._initializePlugins();
  }

  _createClass(BaseMonitor, [{
    key: "_initializeReporters",
    value: function _initializeReporters() {
      var _this = this;

      this.reporters.forEach(function (reporter) {
        reporter.onInitialize(_this.logger);

        if (reporter.stats) {
          _this.stats[reporter.reporterName] = reporter.stats;
        }
      });
    }
  }, {
    key: "_initializePlugins",
    value: function _initializePlugins() {
      var _this2 = this;

      this.plugins.forEach(function (plugin) {
        plugin.onInitialize(_this2.increment.bind(_this2), _this2.gauge.bind(_this2), _this2.logger);

        if (plugin.stats) {
          _this2.stats[plugin.pluginName] = plugin.stats;
        }
      });
    }
  }, {
    key: "_trackMonitorStart",
    value: function () {
      var _trackMonitorStart2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.increment({
                  name: 'Monitor started'
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function _trackMonitorStart() {
        return _trackMonitorStart2.apply(this, arguments);
      }

      return _trackMonitorStart;
    }()
  }, {
    key: "increment",
    value: function () {
      var _increment = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var _this3 = this;

        var countPromises,
            _len,
            counts,
            _key,
            _args2 = arguments;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                countPromises = [];

                for (_len = _args2.length, counts = new Array(_len), _key = 0; _key < _len; _key++) {
                  counts[_key] = _args2[_key];
                }

                counts.forEach(function (_ref2) {
                  var name = _ref2.name,
                      _ref2$amount = _ref2.amount,
                      amount = _ref2$amount === void 0 ? 1 : _ref2$amount,
                      options = _ref2.options;

                  _this3.reporters.forEach(function (reporter) {
                    countPromises.push(reporter.onIncrement({
                      name: name,
                      amount: amount,
                      options: options
                    }));
                  });
                });
                _context2.next = 5;
                return Promise.all(countPromises);

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function increment() {
        return _increment.apply(this, arguments);
      }

      return increment;
    }()
  }, {
    key: "gauge",
    value: function () {
      var _gauge = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var _this4 = this;

        var gaugePromises,
            _len2,
            gauges,
            _key2,
            _args3 = arguments;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                gaugePromises = [];

                for (_len2 = _args3.length, gauges = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                  gauges[_key2] = _args3[_key2];
                }

                gauges.forEach(function (_ref3) {
                  var name = _ref3.name,
                      _ref3$amount = _ref3.amount,
                      amount = _ref3$amount === void 0 ? 1 : _ref3$amount,
                      options = _ref3.options;

                  _this4.reporters.forEach(function (reporter) {
                    gaugePromises.push(reporter.onGauge({
                      name: name,
                      amount: amount,
                      options: options
                    }));
                  });
                });
                _context3.next = 5;
                return Promise.all(gaugePromises);

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function gauge() {
        return _gauge.apply(this, arguments);
      }

      return gauge;
    }()
  }, {
    key: "error",
    value: function () {
      var _error2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(_ref4) {
        var _error;

        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _error = _ref4.error;
                _context4.next = 3;
                return Promise.all(this.reporters.map(function (reporter) {
                  return reporter.onError({
                    error: _error
                  });
                }));

              case 3:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function error(_x) {
        return _error2.apply(this, arguments);
      }

      return error;
    }()
  }]);

  return BaseMonitor;
}();

/***/ }),

/***/ "../../modules/monitor-base/src/index.ts":
/*!****************************************************************************************!*\
  !*** /Users/opagani/projects/zillowgroup/rentals-js/modules/monitor-base/src/index.ts ***!
  \****************************************************************************************/
/*! exports provided: BaseMonitor, StatController, MonitorPlugin, MonitorReporter, PlainPlugin, LogReporter */
/*! exports used: BaseMonitor, LogReporter, MonitorPlugin, MonitorReporter, StatController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _baseMonitor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baseMonitor */ "../../modules/monitor-base/src/baseMonitor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _baseMonitor__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony import */ var _statController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./statController */ "../../modules/monitor-base/src/statController.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "e", function() { return _statController__WEBPACK_IMPORTED_MODULE_1__["a"]; });

/* harmony import */ var _plugin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./plugin */ "../../modules/monitor-base/src/plugin.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "c", function() { return _plugin__WEBPACK_IMPORTED_MODULE_2__["a"]; });

/* harmony import */ var _reporter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reporter */ "../../modules/monitor-base/src/reporter.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "d", function() { return _reporter__WEBPACK_IMPORTED_MODULE_3__["a"]; });

/* harmony import */ var _plugins__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./plugins */ "../../modules/monitor-base/src/plugins/index.ts");
/* harmony import */ var _reporters__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reporters */ "../../modules/monitor-base/src/reporters/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _reporters__WEBPACK_IMPORTED_MODULE_5__["a"]; });








/***/ }),

/***/ "../../modules/monitor-base/src/plugin.ts":
/*!*****************************************************************************************!*\
  !*** /Users/opagani/projects/zillowgroup/rentals-js/modules/monitor-base/src/plugin.ts ***!
  \*****************************************************************************************/
/*! exports provided: MonitorPlugin */
/*! exports used: MonitorPlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MonitorPlugin; });
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0__);


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var MonitorPlugin = function MonitorPlugin(_ref) {
  var pluginName = _ref.pluginName,
      logger = _ref.logger;

  _classCallCheck(this, MonitorPlugin);

  _defineProperty(this, "pluginName", void 0);

  _defineProperty(this, "logger", void 0);

  _defineProperty(this, "stats", void 0);

  _defineProperty(this, "increment", void 0);

  _defineProperty(this, "gauge", void 0);

  this.pluginName = pluginName;
  this.logger = logger;
};

/***/ }),

/***/ "../../modules/monitor-base/src/plugins/index.ts":
/*!************************************************************************************************!*\
  !*** /Users/opagani/projects/zillowgroup/rentals-js/modules/monitor-base/src/plugins/index.ts ***!
  \************************************************************************************************/
/*! exports provided: PlainPlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _plain_plugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./plain-plugin */ "../../modules/monitor-base/src/plugins/plain-plugin/index.ts");
/* unused harmony reexport * */


/***/ }),

/***/ "../../modules/monitor-base/src/plugins/plain-plugin/index.ts":
/*!*************************************************************************************************************!*\
  !*** /Users/opagani/projects/zillowgroup/rentals-js/modules/monitor-base/src/plugins/plain-plugin/index.ts ***!
  \*************************************************************************************************************/
/*! exports provided: PlainPlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export PlainPlugin */
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_5__);
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
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.define-properties.js */ "core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _plugin__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../plugin */ "../../modules/monitor-base/src/plugin.ts");
/* harmony import */ var _statController__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../statController */ "../../modules/monitor-base/src/statController.ts");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }






















function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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



var PlainPlugin = /*#__PURE__*/function (_MonitorPlugin) {
  _inherits(PlainPlugin, _MonitorPlugin);

  var _super = _createSuper(PlainPlugin);

  function PlainPlugin() {
    var _this;

    var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, PlainPlugin);

    _this = _super.call(this, _objectSpread(_objectSpread({}, args), {}, {
      pluginName: 'PlainPlugin'
    }));
    _this.stats = new _statController__WEBPACK_IMPORTED_MODULE_21__[/* StatController */ "a"]({
      limit: 10
    });
    return _this;
  }

  _createClass(PlainPlugin, [{
    key: "onError",
    value: function onError(_ref) {
      var error = _ref.error;
      this.logger && this.logger.error(error);
      return Promise.resolve();
    }
  }, {
    key: "onInitialize",
    value: function onInitialize() {}
  }]);

  return PlainPlugin;
}(_plugin__WEBPACK_IMPORTED_MODULE_20__[/* MonitorPlugin */ "a"]);

/***/ }),

/***/ "../../modules/monitor-base/src/reporter.ts":
/*!*******************************************************************************************!*\
  !*** /Users/opagani/projects/zillowgroup/rentals-js/modules/monitor-base/src/reporter.ts ***!
  \*******************************************************************************************/
/*! exports provided: MonitorReporter */
/*! exports used: MonitorReporter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MonitorReporter; });
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0__);


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var MonitorReporter = function MonitorReporter(_ref) {
  var reporterName = _ref.reporterName,
      logger = _ref.logger,
      _ref$sampleRate = _ref.sampleRate,
      sampleRate = _ref$sampleRate === void 0 ? 1 : _ref$sampleRate;

  _classCallCheck(this, MonitorReporter);

  _defineProperty(this, "reporterName", void 0);

  _defineProperty(this, "logger", void 0);

  _defineProperty(this, "stats", void 0);

  _defineProperty(this, "sampleRate", void 0);

  this.reporterName = reporterName;
  this.logger = logger;
  this.sampleRate = sampleRate;
};

/***/ }),

/***/ "../../modules/monitor-base/src/reporters/index.ts":
/*!**************************************************************************************************!*\
  !*** /Users/opagani/projects/zillowgroup/rentals-js/modules/monitor-base/src/reporters/index.ts ***!
  \**************************************************************************************************/
/*! exports provided: LogReporter */
/*! exports used: LogReporter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _log_reporter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./log-reporter */ "../../modules/monitor-base/src/reporters/log-reporter/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _log_reporter__WEBPACK_IMPORTED_MODULE_0__["a"]; });



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
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _reporter__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../reporter */ "../../modules/monitor-base/src/reporter.ts");
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
      this.log = this.logger && this.logger[this.level];
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
}(_reporter__WEBPACK_IMPORTED_MODULE_20__[/* MonitorReporter */ "a"]);

/***/ }),

/***/ "../../modules/monitor-base/src/statController.ts":
/*!*************************************************************************************************!*\
  !*** /Users/opagani/projects/zillowgroup/rentals-js/modules/monitor-base/src/statController.ts ***!
  \*************************************************************************************************/
/*! exports provided: StatController */
/*! exports used: StatController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatController; });
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_2__);




function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var StatController = function StatController() {
  var _this = this;

  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      onRecord = _ref.onRecord,
      _ref$limit = _ref.limit,
      limit = _ref$limit === void 0 ? 50 : _ref$limit;

  _classCallCheck(this, StatController);

  _defineProperty(this, "onRecord", void 0);

  _defineProperty(this, "stats", void 0);

  _defineProperty(this, "limit", void 0);

  _defineProperty(this, "record", function (_ref2) {
    var name = _ref2.name,
        _ref2$count = _ref2.count,
        count = _ref2$count === void 0 ? 1 : _ref2$count;
    var existingStat = _this.stats[name];

    if (!existingStat) {
      var keys = Object.keys(_this.stats);

      if (keys.length >= _this.limit) {
        delete _this.stats[keys[0]];
      }

      var stat = _this.onRecord({
        name: name,
        count: count
      });

      _this.stats[name] = stat;
      return stat;
    }

    existingStat.count = existingStat.count + count;
    return existingStat;
  });

  this.onRecord = onRecord || function (_ref3) {
    var name = _ref3.name,
        count = _ref3.count;
    return {
      name: name,
      count: count
    };
  };

  this.stats = {};
  this.limit = limit;
};

/***/ }),

/***/ "../../modules/monitor-node/src/index.ts":
/*!****************************************************************************************!*\
  !*** /Users/opagani/projects/zillowgroup/rentals-js/modules/monitor-node/src/index.ts ***!
  \****************************************************************************************/
/*! exports provided: NodeMonitorPlugin, NodeMonitorReporter, NodeMonitor, PontoonHeartbeatPlugin, NodeVitalsPlugin, NodeMonitorPontoonReporter, NodeLogReporter */
/*! exports used: NodeMonitor, NodeMonitorPontoonReporter, NodeVitalsPlugin, PontoonHeartbeatPlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _nodeMonitor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nodeMonitor */ "../../modules/monitor-node/src/nodeMonitor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _nodeMonitor__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony import */ var _plugins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./plugins */ "../../modules/monitor-node/src/plugins/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "c", function() { return _plugins__WEBPACK_IMPORTED_MODULE_1__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "d", function() { return _plugins__WEBPACK_IMPORTED_MODULE_1__["b"]; });

/* harmony import */ var _reporters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reporters */ "../../modules/monitor-node/src/reporters/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _reporters__WEBPACK_IMPORTED_MODULE_2__["a"]; });





/***/ }),

/***/ "../../modules/monitor-node/src/nodeMonitor.ts":
/*!**********************************************************************************************!*\
  !*** /Users/opagani/projects/zillowgroup/rentals-js/modules/monitor-node/src/nodeMonitor.ts ***!
  \**********************************************************************************************/
/*! exports provided: NodeMonitorPlugin, NodeMonitorReporter, NodeMonitor */
/*! exports used: NodeMonitor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export NodeMonitorPlugin */
/* unused harmony export NodeMonitorReporter */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NodeMonitor; });
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _zg_rentals_monitor_base__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @zg-rentals/monitor-base */ "../../modules/monitor-base/src/index.ts");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }



function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



















function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


var NodeMonitorPlugin = /*#__PURE__*/function (_MonitorPlugin) {
  _inherits(NodeMonitorPlugin, _MonitorPlugin);

  var _super = _createSuper(NodeMonitorPlugin);

  function NodeMonitorPlugin() {
    _classCallCheck(this, NodeMonitorPlugin);

    return _super.apply(this, arguments);
  }

  return NodeMonitorPlugin;
}(_zg_rentals_monitor_base__WEBPACK_IMPORTED_MODULE_18__[/* MonitorPlugin */ "c"]);
var NodeMonitorReporter = /*#__PURE__*/function (_MonitorReporter) {
  _inherits(NodeMonitorReporter, _MonitorReporter);

  var _super2 = _createSuper(NodeMonitorReporter);

  function NodeMonitorReporter() {
    _classCallCheck(this, NodeMonitorReporter);

    return _super2.apply(this, arguments);
  }

  return NodeMonitorReporter;
}(_zg_rentals_monitor_base__WEBPACK_IMPORTED_MODULE_18__[/* MonitorReporter */ "d"]);
var NodeMonitor = /*#__PURE__*/function (_BaseMonitor) {
  _inherits(NodeMonitor, _BaseMonitor);

  var _super3 = _createSuper(NodeMonitor);

  function NodeMonitor() {
    var _this;

    var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, NodeMonitor);

    _this = _super3.call(this, args);

    _defineProperty(_assertThisInitialized(_this), "_initializeProcessListeners", function () {
      process.on('uncaughtExceptionMonitor', function (err, origin) {
        _this.logger && _this.logger.error({
          stack: err.stack,
          name: err.name
        }, "[".concat(origin, "] node server about to crash: ").concat(err.message));

        _this.error({
          error: err
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "_initializeOnEnd", function () {
      process.on('SIGINT', function () {
        _this.logger && _this.logger.warn("SIGINT detected, running plugins onEnd");

        _this.plugins.map(function (plugin) {
          plugin.onShutdown();
        });

        _this.logger && _this.logger.warn("notify shutdown listener finished"); // todo: hack: fix for pino needing to finish writing
        // before process terminates
        // should work to implement pino.final and custom pino.destination in ServerLogger
        // https://github.com/pinojs/pino/blob/master/docs/api.md#pino-final

        setTimeout(function () {
          return process.exit();
        }, 1000);
      });
    });

    _this._initializeProcessListeners();

    _this._initializeOnEnd();

    return _this;
  }

  _createClass(NodeMonitor, [{
    key: "onRequest",
    value: function () {
      var _onRequest = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var _len,
            args,
            _key,
            _args = arguments;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                for (_len = _args.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                  args[_key] = _args[_key];
                }

                _context.next = 3;
                return Promise.all(this.reporters.map(function (reporter) {
                  return reporter.onRequest.apply(reporter, args);
                }));

              case 3:
                args[2]();

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function onRequest() {
        return _onRequest.apply(this, arguments);
      }

      return onRequest;
    }()
  }]);

  return NodeMonitor;
}(_zg_rentals_monitor_base__WEBPACK_IMPORTED_MODULE_18__[/* BaseMonitor */ "a"]);

/***/ }),

/***/ "../../modules/monitor-node/src/plugins/index.ts":
/*!************************************************************************************************!*\
  !*** /Users/opagani/projects/zillowgroup/rentals-js/modules/monitor-node/src/plugins/index.ts ***!
  \************************************************************************************************/
/*! exports provided: PontoonHeartbeatPlugin, NodeVitalsPlugin */
/*! exports used: NodeVitalsPlugin, PontoonHeartbeatPlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _pontoon_heartbeat_plugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pontoon-heartbeat-plugin */ "../../modules/monitor-node/src/plugins/pontoon-heartbeat-plugin/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _pontoon_heartbeat_plugin__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony import */ var _node_vitals_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node-vitals-plugin */ "../../modules/monitor-node/src/plugins/node-vitals-plugin/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_vitals_plugin__WEBPACK_IMPORTED_MODULE_1__["a"]; });




/***/ }),

/***/ "../../modules/monitor-node/src/plugins/node-vitals-plugin/index.ts":
/*!*******************************************************************************************************************!*\
  !*** /Users/opagani/projects/zillowgroup/rentals-js/modules/monitor-node/src/plugins/node-vitals-plugin/index.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: NodeVitalsPlugin */
/*! exports used: NodeVitalsPlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NodeVitalsPlugin; });
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _zg_rentals_monitor_base__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @zg-rentals/monitor-base */ "../../modules/monitor-base/src/index.ts");
/* harmony import */ var _zg_rentals_particles_js_utils__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @zg-rentals/particles-js-utils */ "../../modules/particles-js-utils/src/index.ts");
/* harmony import */ var _nodeVitals__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./nodeVitals */ "../../modules/monitor-node/src/plugins/node-vitals-plugin/nodeVitals.ts");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }



function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }





















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




var DEFAULT_PROPERTIES_FILE_PATH = '/hotpads/config/server.properties';
var INTERVAL_MS = 5000;
var NodeVitalsPlugin = /*#__PURE__*/function (_MonitorPlugin) {
  _inherits(NodeVitalsPlugin, _MonitorPlugin);

  var _super = _createSuper(NodeVitalsPlugin);

  function NodeVitalsPlugin(_ref) {
    var _this;

    var webappName = _ref.webappName,
        _ref$buildNumber = _ref.buildNumber,
        buildNumber = _ref$buildNumber === void 0 ? 0 : _ref$buildNumber,
        _ref$gitCommit = _ref.gitCommit,
        gitCommit = _ref$gitCommit === void 0 ? '' : _ref$gitCommit,
        logger = _ref.logger,
        _ref$propertiesFilePa = _ref.propertiesFilePath,
        propertiesFilePath = _ref$propertiesFilePa === void 0 ? DEFAULT_PROPERTIES_FILE_PATH : _ref$propertiesFilePa;

    _classCallCheck(this, NodeVitalsPlugin);

    _this = _super.call(this, {
      logger: logger,
      pluginName: 'NodePontoonPlugin'
    });

    _defineProperty(_assertThisInitialized(_this), "buildInfo", void 0);

    _defineProperty(_assertThisInitialized(_this), "logger", void 0);

    _defineProperty(_assertThisInitialized(_this), "interval", void 0);

    var _NodeUtil$Environment = new _zg_rentals_particles_js_utils__WEBPACK_IMPORTED_MODULE_21__[/* NodeUtil */ "a"].EnvironmentUtil(propertiesFilePath, {
      appName: webappName
    }),
        serverProperties = _NodeUtil$Environment.serverProperties;

    _this.buildInfo = {
      serverType: serverProperties.type,
      buildNumber: buildNumber.toString(),
      gitCommit: gitCommit
    };
    var requiredArgs = ['buildNumber', 'gitCommit'];
    var missingArgs = requiredArgs.filter(function (arg) {
      return _this.buildInfo[arg] === undefined;
    });

    if (missingArgs.length) {
      var errorMessage = "".concat(_this.pluginName, " plugin missing required arg(s): ").concat(missingArgs.join(', '));

      if (_this.logger) {
        _this.logger.error(errorMessage);
      }

      throw new Error(errorMessage);
    }

    return _this;
  }

  _createClass(NodeVitalsPlugin, [{
    key: "initVitals",
    value: function initVitals() {
      var _this2 = this;

      _nodeVitals__WEBPACK_IMPORTED_MODULE_22__[/* default */ "a"].start(this);
      this.interval = setInterval(function () {
        return _nodeVitals__WEBPACK_IMPORTED_MODULE_22__[/* default */ "a"].record(_this2);
      }, INTERVAL_MS);
    }
  }, {
    key: "onInitialize",
    value: function onInitialize(increment, gauge, logger) {
      this.increment = increment;
      this.gauge = gauge;
      this.logger = this.logger || logger;
      this.initVitals();
    }
  }, {
    key: "onShutdown",
    value: function () {
      var _onShutdown = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (this.interval) {
                  clearInterval(this.interval);
                  delete this.interval;
                }

                _nodeVitals__WEBPACK_IMPORTED_MODULE_22__[/* default */ "a"].stop();

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function onShutdown() {
        return _onShutdown.apply(this, arguments);
      }

      return onShutdown;
    }()
  }]);

  return NodeVitalsPlugin;
}(_zg_rentals_monitor_base__WEBPACK_IMPORTED_MODULE_20__[/* MonitorPlugin */ "c"]);

/***/ }),

/***/ "../../modules/monitor-node/src/plugins/node-vitals-plugin/nodeVitals.ts":
/*!************************************************************************************************************************!*\
  !*** /Users/opagani/projects/zillowgroup/rentals-js/modules/monitor-node/src/plugins/node-vitals-plugin/nodeVitals.ts ***!
  \************************************************************************************************************************/
/*! exports provided: Bytes, default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Bytes */
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.parse-int.js */ "core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var os__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! os */ "os");
/* harmony import */ var os__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(os__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var v8__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! v8 */ "v8");
/* harmony import */ var v8__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(v8__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var perf_hooks__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! perf_hooks */ "perf_hooks");
/* harmony import */ var perf_hooks__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(perf_hooks__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var event_loop_stats__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! event-loop-stats */ "event-loop-stats");
/* harmony import */ var event_loop_stats__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(event_loop_stats__WEBPACK_IMPORTED_MODULE_15__);
var _gcFlagMap;













function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var gcFlagMap = (_gcFlagMap = {}, _defineProperty(_gcFlagMap, perf_hooks__WEBPACK_IMPORTED_MODULE_14__["constants"].NODE_PERFORMANCE_GC_MAJOR, 'MarkSweepCompact'), _defineProperty(_gcFlagMap, perf_hooks__WEBPACK_IMPORTED_MODULE_14__["constants"].NODE_PERFORMANCE_GC_MINOR, 'Scavange'), _defineProperty(_gcFlagMap, perf_hooks__WEBPACK_IMPORTED_MODULE_14__["constants"].NODE_PERFORMANCE_GC_INCREMENTAL, 'IncrementalMarking'), _defineProperty(_gcFlagMap, perf_hooks__WEBPACK_IMPORTED_MODULE_14__["constants"].NODE_PERFORMANCE_GC_WEAKCB, 'ProcessWeakCallbacks'), _gcFlagMap);
var observer;
var Bytes = {
  toKb: function toKb(bytes) {
    return Math.round(bytes / 1024);
  },
  toMb: function toMb(bytes) {
    return Math.round(bytes / 1024 / 1024);
  }
};
/* harmony default export */ __webpack_exports__["a"] = ({
  start: function start(_ref) {
    var increment = _ref.increment;

    if (increment) {
      increment({
        name: 'App startup',
        amount: 1
      });
      observer = new perf_hooks__WEBPACK_IMPORTED_MODULE_14__["PerformanceObserver"](function (list) {
        list.getEntries().forEach(function (entry) {
          // @ts-ignore the type definition is missing this property
          var kindFlag = entry.kind;
          var typeName = "".concat(kindFlag, "-").concat(gcFlagMap[kindFlag]);
          var pauseMS = Math.round(entry.duration);
          increment({
            name: 'gc type ' + typeName,
            amount: 1
          });
          increment({
            name: 'gc pause ms',
            amount: pauseMS
          });
          increment({
            name: 'gc type ' + typeName + ' pause ms',
            amount: pauseMS
          });
        });
      });
      observer.observe({
        entryTypes: ['gc']
      });
    }
  },
  stop: function stop() {
    observer.disconnect();
  },
  record: function record(_ref2) {
    var buildInfo = _ref2.buildInfo,
        increment = _ref2.increment,
        gauge = _ref2.gauge;
    var serverType = buildInfo.serverType;
    var loopStats = event_loop_stats__WEBPACK_IMPORTED_MODULE_15___default.a.sense();

    if (increment) {
      increment({
        name: 'App heartbeat ' + serverType,
        amount: 1
      });
      increment({
        name: 'App heartbeat type-build ' + serverType + ' ' + buildInfo.buildNumber,
        amount: 1
      });
      increment({
        name: 'App heartbeat type-commit ' + serverType + ' ' + buildInfo.gitCommit,
        amount: 1
      });
      increment({
        name: 'App heartbeat build ' + buildInfo.buildNumber,
        amount: 1
      });
      increment({
        name: 'App heartbeat commit ' + buildInfo.gitCommit,
        amount: 1
      });
      increment({
        name: 'event loops',
        amount: loopStats.num
      });
    }

    if (gauge) {
      var loadavg = os__WEBPACK_IMPORTED_MODULE_11___default.a.loadavg();
      var loadavgScaler = 1000; //pontoon rounds to integer, scale for additional precision

      gauge({
        name: 'os load avg 1m',
        amount: loadavg[0] * loadavgScaler
      });
      gauge({
        name: 'os load avg 5m',
        amount: loadavg[1] * loadavgScaler
      });
      gauge({
        name: 'os load avg 15m',
        amount: loadavg[2] * loadavgScaler
      });
      var totalmem = os__WEBPACK_IMPORTED_MODULE_11___default.a.totalmem();
      var freemem = os__WEBPACK_IMPORTED_MODULE_11___default.a.freemem();
      var usedmem = totalmem - freemem;
      gauge({
        name: 'memory total MB',
        amount: Bytes.toMb(totalmem)
      });
      gauge({
        name: 'memory free MB',
        amount: Bytes.toMb(freemem)
      });
      gauge({
        name: 'memory used MB',
        amount: Bytes.toMb(usedmem)
      });
      var memoryUsage = process.memoryUsage();
      gauge({
        name: 'node memory mb rss',
        amount: Bytes.toMb(memoryUsage.rss)
      });
      gauge({
        name: 'node memory mb heapTotal',
        amount: Bytes.toMb(memoryUsage.heapTotal)
      });
      gauge({
        name: 'node memory mb heapUsed',
        amount: Bytes.toMb(memoryUsage.heapUsed)
      });
      gauge({
        name: 'node memory mb external',
        amount: Bytes.toMb(memoryUsage.external)
      });
      v8__WEBPACK_IMPORTED_MODULE_13___default.a.getHeapSpaceStatistics().forEach(function (_ref3) {
        var space_name = _ref3.space_name,
            space_size = _ref3.space_size,
            space_used_size = _ref3.space_used_size,
            space_available_size = _ref3.space_available_size,
            physical_space_size = _ref3.physical_space_size;
        var prefix = 'v8 heap kb ' + space_name + ' ';
        gauge({
          name: prefix + 'space_size',
          amount: Bytes.toKb(space_size)
        });
        gauge({
          name: prefix + 'space_used_size',
          amount: Bytes.toKb(space_used_size)
        });
        gauge({
          name: prefix + 'space_available_size',
          amount: Bytes.toKb(space_available_size)
        });
        gauge({
          name: prefix + 'physical_space_size',
          amount: Bytes.toKb(physical_space_size)
        });
      });
      gauge({
        name: 'event loop ms max',
        amount: loopStats.max
      });
      gauge({
        name: 'event loop ms min',
        amount: loopStats.min
      });
      gauge({
        name: 'event loop ms avg',
        amount: loopStats.sum / loopStats.num
      });
      fs__WEBPACK_IMPORTED_MODULE_12___default.a.readFile('/proc/sys/fs/file-nr', function (err, out) {
        if (!err) {
          var fileNrParts = out.toString().replace(/\n/g, '').split(' ');
          var fileHandles = parseInt(fileNrParts[0], 10);
          gauge({
            name: 'file-nr allocated file handles',
            amount: fileHandles
          });
        }
      });
    }
  }
});

/***/ }),

/***/ "../../modules/monitor-node/src/plugins/pontoon-heartbeat-plugin/index.ts":
/*!*************************************************************************************************************************!*\
  !*** /Users/opagani/projects/zillowgroup/rentals-js/modules/monitor-node/src/plugins/pontoon-heartbeat-plugin/index.ts ***!
  \*************************************************************************************************************************/
/*! exports provided: PontoonHeartbeatPlugin */
/*! exports used: PontoonHeartbeatPlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PontoonHeartbeatPlugin; });
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.match.js */ "core-js/modules/es.string.match.js");
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_date_now_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.date.now.js */ "core-js/modules/es.date.now.js");
/* harmony import */ var core_js_modules_es_date_now_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_now_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_date_to_iso_string_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.date.to-iso-string.js */ "core-js/modules/es.date.to-iso-string.js");
/* harmony import */ var core_js_modules_es_date_to_iso_string_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_iso_string_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.object.define-properties.js */ "core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var _zg_rentals_monitor_base__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @zg-rentals/monitor-base */ "../../modules/monitor-base/src/index.ts");
/* harmony import */ var _zg_rentals_pontoon__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @zg-rentals/pontoon */ "../../modules/pontoon/src/index.ts");
/* harmony import */ var _zg_rentals_particles_js_utils__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @zg-rentals/particles-js-utils */ "../../modules/particles-js-utils/src/index.ts");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }



function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
































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




var HEARTBEAT_INTERVAL_MS = 5000;
var DEFAULT_PROPERTIES_FILE_PATH = '/hotpads/config/server.properties';
var REQUIRED_ARGS = ['api', 'apiKey', 'webappName', 'buildId', 'commitId', 'gitBranch', 'startupDate', 'buildDate'];
var PontoonHeartbeatPlugin = /*#__PURE__*/function (_MonitorPlugin) {
  _inherits(PontoonHeartbeatPlugin, _MonitorPlugin);

  var _super = _createSuper(PontoonHeartbeatPlugin);

  function PontoonHeartbeatPlugin(_ref) {
    var _this;

    var api = _ref.api,
        apiKey = _ref.apiKey,
        webappName = _ref.webappName,
        startupDate = _ref.startupDate,
        buildDate = _ref.buildDate,
        _ref$buildId = _ref.buildId,
        buildId = _ref$buildId === void 0 ? 0 : _ref$buildId,
        _ref$commitId = _ref.commitId,
        commitId = _ref$commitId === void 0 ? '' : _ref$commitId,
        _ref$gitBranch = _ref.gitBranch,
        gitBranch = _ref$gitBranch === void 0 ? '' : _ref$gitBranch,
        logger = _ref.logger,
        _ref$propertiesFilePa = _ref.propertiesFilePath,
        propertiesFilePath = _ref$propertiesFilePa === void 0 ? DEFAULT_PROPERTIES_FILE_PATH : _ref$propertiesFilePa,
        _ref$processManagerId = _ref.processManagerId,
        processManagerId = _ref$processManagerId === void 0 ? process.env.pm_id : _ref$processManagerId;

    _classCallCheck(this, PontoonHeartbeatPlugin);

    _this = _super.call(this, {
      logger: logger,
      pluginName: 'NodePontoonPlugin'
    });

    _defineProperty(_assertThisInitialized(_this), "pontoon", void 0);

    _defineProperty(_assertThisInitialized(_this), "appData", void 0);

    _defineProperty(_assertThisInitialized(_this), "logger", void 0);

    _defineProperty(_assertThisInitialized(_this), "heartbeat", void 0);

    var _NodeUtil$Environment = new _zg_rentals_particles_js_utils__WEBPACK_IMPORTED_MODULE_33__[/* NodeUtil */ "a"].EnvironmentUtil(propertiesFilePath, {
      appName: webappName
    }),
        serverProperties = _NodeUtil$Environment.serverProperties,
        envProperties = _NodeUtil$Environment.envProperties;

    var serverName = serverProperties.name || '';
    var containerIdMatch = envProperties.hostname.match(/-\d+$/);
    var containerId = containerIdMatch ? containerIdMatch[0] : '';
    var processManagerIdSuffix = processManagerId ? "-".concat(processManagerId) : '';
    _this.appData = {
      api: api,
      apiKey: apiKey,
      webappName: webappName,
      serverName: "".concat(serverName).concat(containerId).concat(processManagerIdSuffix),
      serverType: serverProperties.type,
      serverPublicIp: serverProperties.publicIp,
      serverPrivateIp: serverProperties.privateIp,
      buildId: buildId.toString(),
      commitId: commitId,
      gitBranch: gitBranch,
      startupDate: _this.formatDate(startupDate),
      buildDate: _this.formatDate(buildDate)
    };
    var missingArgs = REQUIRED_ARGS.filter(function (arg) {
      return _this.appData[arg] === undefined;
    });

    if (missingArgs.length) {
      var errorMessage = "".concat(_this.pluginName, " plugin missing required arg(s): ").concat(missingArgs.join(', '));

      if (_this.logger) {
        _this.logger.error(errorMessage);
      }

      throw new Error(errorMessage);
    }

    _this.pontoon = new _zg_rentals_pontoon__WEBPACK_IMPORTED_MODULE_32__["Pontoon"]({
      api: api,
      apiKey: apiKey
    });
    return _this;
  }

  _createClass(PontoonHeartbeatPlugin, [{
    key: "initHeartbeat",
    value: function initHeartbeat() {
      var _this2 = this;

      this.heartbeat = setInterval(function () {
        _this2.pontoon.addHeartbeat(_objectSpread(_objectSpread({}, _this2.appData), {}, {
          refreshedLast: _this2.formatDate(Date.now())
        }));
      }, HEARTBEAT_INTERVAL_MS);
    }
  }, {
    key: "onInitialize",
    value: function onInitialize(increment, gauge, logger) {
      this.logger = this.logger || logger;
      this.initHeartbeat();
    }
  }, {
    key: "onShutdown",
    value: function () {
      var _onShutdown = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (this.heartbeat) {
                  clearInterval(this.heartbeat);
                  delete this.heartbeat;
                }

                _context.next = 3;
                return this.pontoon.removeHeartbeat({
                  webappName: this.appData.webappName,
                  serverName: this.appData.serverName
                });

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function onShutdown() {
        return _onShutdown.apply(this, arguments);
      }

      return onShutdown;
    }()
  }, {
    key: "formatDate",
    value: function formatDate() {
      var date = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Date();

      if (!(date instanceof Date)) {
        date = new Date(date);
      }

      return date.toISOString();
    }
  }]);

  return PontoonHeartbeatPlugin;
}(_zg_rentals_monitor_base__WEBPACK_IMPORTED_MODULE_31__[/* MonitorPlugin */ "c"]);

/***/ }),

/***/ "../../modules/monitor-node/src/reporters/index.ts":
/*!**************************************************************************************************!*\
  !*** /Users/opagani/projects/zillowgroup/rentals-js/modules/monitor-node/src/reporters/index.ts ***!
  \**************************************************************************************************/
/*! exports provided: NodeMonitorPontoonReporter, NodeLogReporter */
/*! exports used: NodeMonitorPontoonReporter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _pontoon_reporter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pontoon-reporter */ "../../modules/monitor-node/src/reporters/pontoon-reporter/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _pontoon_reporter__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony import */ var _log_reporter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./log-reporter */ "../../modules/monitor-node/src/reporters/log-reporter/index.ts");



/***/ }),

/***/ "../../modules/monitor-node/src/reporters/log-reporter/index.ts":
/*!***************************************************************************************************************!*\
  !*** /Users/opagani/projects/zillowgroup/rentals-js/modules/monitor-node/src/reporters/log-reporter/index.ts ***!
  \***************************************************************************************************************/
/*! exports provided: NodeLogReporter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export NodeLogReporter */
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _zg_rentals_monitor_base__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @zg-rentals/monitor-base */ "../../modules/monitor-base/src/index.ts");
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


var NodeLogReporter = /*#__PURE__*/function (_LogReporter) {
  _inherits(NodeLogReporter, _LogReporter);

  var _super = _createSuper(NodeLogReporter);

  function NodeLogReporter() {
    var _this;

    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        logger = _ref.logger,
        _ref$level = _ref.level,
        level = _ref$level === void 0 ? 'warn' : _ref$level,
        _ref$enableRequestLog = _ref.enableRequestLogs,
        enableRequestLogs = _ref$enableRequestLog === void 0 ? true : _ref$enableRequestLog,
        sampleRate = _ref.sampleRate;

    _classCallCheck(this, NodeLogReporter);

    _this = _super.call(this, {
      logger: logger,
      level: level,
      sampleRate: sampleRate
    });

    _defineProperty(_assertThisInitialized(_this), "enableRequestLogs", void 0);

    _this.enableRequestLogs = enableRequestLogs;
    return _this;
  }

  _createClass(NodeLogReporter, [{
    key: "onRequest",
    value: function onRequest(req) {
      if (this.enableRequestLogs && this.log && (this.sampleRate === 1 || Math.random() <= this.sampleRate)) {
        this.log("".concat(req.method, ": ").concat(req.url));
      }

      return Promise.resolve();
    }
  }]);

  return NodeLogReporter;
}(_zg_rentals_monitor_base__WEBPACK_IMPORTED_MODULE_14__[/* LogReporter */ "b"]);

/***/ }),

/***/ "../../modules/monitor-node/src/reporters/pontoon-reporter/index.ts":
/*!*******************************************************************************************************************!*\
  !*** /Users/opagani/projects/zillowgroup/rentals-js/modules/monitor-node/src/reporters/pontoon-reporter/index.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: NodeMonitorPontoonReporter */
/*! exports used: NodeMonitorPontoonReporter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NodeMonitorPontoonReporter; });
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.match.js */ "core-js/modules/es.string.match.js");
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_date_now_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.date.now.js */ "core-js/modules/es.date.now.js");
/* harmony import */ var core_js_modules_es_date_now_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_now_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_number_is_finite_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.number.is-finite.js */ "core-js/modules/es.number.is-finite.js");
/* harmony import */ var core_js_modules_es_number_is_finite_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_is_finite_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.object.define-properties.js */ "core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var _zg_rentals_monitor_base__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @zg-rentals/monitor-base */ "../../modules/monitor-base/src/index.ts");
/* harmony import */ var _zg_rentals_pontoon__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @zg-rentals/pontoon */ "../../modules/pontoon/src/index.ts");
/* harmony import */ var _zg_rentals_particles_js_utils__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @zg-rentals/particles-js-utils */ "../../modules/particles-js-utils/src/index.ts");
/* harmony import */ var on_headers__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! on-headers */ "on-headers");
/* harmony import */ var on_headers__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(on_headers__WEBPACK_IMPORTED_MODULE_32__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }






























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





var DEFAULT_PROPERTIES_FILE_PATH = '/hotpads/config/server.properties';
var NodeMonitorPontoonReporter = /*#__PURE__*/function (_MonitorReporter) {
  _inherits(NodeMonitorPontoonReporter, _MonitorReporter);

  var _super = _createSuper(NodeMonitorPontoonReporter);

  function NodeMonitorPontoonReporter(_ref) {
    var _this;

    var api = _ref.api,
        apiKey = _ref.apiKey,
        webappName = _ref.webappName,
        logger = _ref.logger,
        _ref$propertiesFilePa = _ref.propertiesFilePath,
        propertiesFilePath = _ref$propertiesFilePa === void 0 ? DEFAULT_PROPERTIES_FILE_PATH : _ref$propertiesFilePa,
        _ref$processManagerId = _ref.processManagerId,
        processManagerId = _ref$processManagerId === void 0 ? process.env.pm_id : _ref$processManagerId,
        sampleRate = _ref.sampleRate;

    _classCallCheck(this, NodeMonitorPontoonReporter);

    _this = _super.call(this, {
      logger: logger,
      reporterName: 'NodePontoonReporter',
      sampleRate: sampleRate
    });

    _defineProperty(_assertThisInitialized(_this), "pontoon", void 0);

    _defineProperty(_assertThisInitialized(_this), "intervals", {});

    _defineProperty(_assertThisInitialized(_this), "logger", void 0);

    _defineProperty(_assertThisInitialized(_this), "webappName", void 0);

    _defineProperty(_assertThisInitialized(_this), "serverName", void 0);

    _defineProperty(_assertThisInitialized(_this), "stats", void 0);

    _defineProperty(_assertThisInitialized(_this), "registeredAlerts", {});

    var _NodeUtil$Environment = new _zg_rentals_particles_js_utils__WEBPACK_IMPORTED_MODULE_31__[/* NodeUtil */ "a"].EnvironmentUtil(propertiesFilePath, {
      appName: webappName
    }),
        serverProperties = _NodeUtil$Environment.serverProperties,
        envProperties = _NodeUtil$Environment.envProperties;

    var serverName = serverProperties.name || '';
    var containerIdMatch = envProperties.hostname.match(/-\d+$/);
    var containerId = containerIdMatch ? containerIdMatch[0] : '';
    var processManagerIdSuffix = processManagerId ? "-".concat(processManagerId) : '';
    _this.webappName = webappName;
    _this.serverName = "".concat(serverName).concat(containerId).concat(processManagerIdSuffix);

    if (api === undefined || apiKey === undefined || webappName === undefined) {
      var _this$logger;

      var errorMessage = "".concat(_this.reporterName, " reporter missing required arg(s)");
      (_this$logger = _this.logger) === null || _this$logger === void 0 ? void 0 : _this$logger.error(errorMessage);
      throw new Error(errorMessage);
    }

    _this.pontoon = new _zg_rentals_pontoon__WEBPACK_IMPORTED_MODULE_30__["Pontoon"]({
      api: api,
      apiKey: apiKey
    });
    _this.stats = new _zg_rentals_monitor_base__WEBPACK_IMPORTED_MODULE_29__[/* StatController */ "e"]({
      limit: 100,
      onRecord: function onRecord(stat) {
        return _this.pontoon.addStatUrl({
          stat: stat,
          serviceName: webappName,
          api: api
        });
      }
    });
    return _this;
  }

  _createClass(NodeMonitorPontoonReporter, [{
    key: "onInitialize",
    value: function onInitialize(logger) {
      this.logger = this.logger || logger;
    }
  }, {
    key: "shouldSave",
    value: function shouldSave() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var random = Math.random();
      return random <= this.sampleRate && (typeof options.sampleRate !== 'number' || random <= options.sampleRate);
    }
  }, {
    key: "onIncrement",
    value: function () {
      var _onIncrement = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref2) {
        var _this2 = this;

        var name, _ref2$amount, amount, options, _this$logger2;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                name = _ref2.name, _ref2$amount = _ref2.amount, amount = _ref2$amount === void 0 ? 1 : _ref2$amount, options = _ref2.options;

                if (options !== null && options !== void 0 && options.alert) {
                  this.registerAlert(_objectSpread({
                    metricName: name,
                    metricType: 'COUNT'
                  }, options.alert));
                }

                if (!this.shouldSave(options)) {
                  _context.next = 6;
                  break;
                }

                (_this$logger2 = this.logger) === null || _this$logger2 === void 0 ? void 0 : _this$logger2.info("incrementing ".concat(name, " by ").concat(amount));
                _context.next = 6;
                return this.pontoon.sendCounts({
                  serviceName: this.webappName,
                  serverName: this.serverName,
                  counts: _defineProperty({}, Date.now(), _defineProperty({}, name, amount))
                }).then(function () {
                  _this2.stats.record({
                    name: name,
                    count: amount
                  });

                  return;
                })["catch"](function (e) {
                  return _this2.onError({
                    error: e
                  });
                });

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function onIncrement(_x) {
        return _onIncrement.apply(this, arguments);
      }

      return onIncrement;
    }()
  }, {
    key: "onGauge",
    value: function () {
      var _onGauge = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(_ref3) {
        var _this3 = this;

        var name, amount, options, _this$logger3;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                name = _ref3.name, amount = _ref3.amount, options = _ref3.options;

                if (options !== null && options !== void 0 && options.alert) {
                  this.registerAlert(_objectSpread({
                    metricName: name,
                    metricType: 'GAUGE'
                  }, options.alert));
                }

                if (!this.shouldSave(options)) {
                  _context2.next = 6;
                  break;
                }

                (_this$logger3 = this.logger) === null || _this$logger3 === void 0 ? void 0 : _this$logger3.info("".concat(name, ", ").concat(amount));
                _context2.next = 6;
                return this.pontoon.sendGauges({
                  serviceName: this.webappName,
                  serverName: this.serverName,
                  gauges: _defineProperty({}, name, [[Date.now(), amount]])
                }).then(function () {
                  return _this3.stats.record({
                    name: name,
                    count: amount
                  });
                })["catch"](function (e) {
                  return _this3.onError({
                    error: e
                  });
                });

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function onGauge(_x2) {
        return _onGauge.apply(this, arguments);
      }

      return onGauge;
    }()
  }, {
    key: "onError",
    value: function () {
      var _onError = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(_ref4) {
        var _this$logger4;

        var error;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                error = _ref4.error;
                (_this$logger4 = this.logger) === null || _this$logger4 === void 0 ? void 0 : _this$logger4.error(error);

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function onError(_x3) {
        return _onError.apply(this, arguments);
      }

      return onError;
    }()
  }, {
    key: "registerAlert",
    value: function registerAlert(alertOptions) {
      var _this$logger7;

      if (this.registeredAlerts[alertOptions.metricName]) {
        return;
      }

      if (!alertOptions.periodMs || !alertOptions.alertFrequencyMinutes) {
        var _this$logger5;

        (_this$logger5 = this.logger) === null || _this$logger5 === void 0 ? void 0 : _this$logger5.error('could not register alert, missing frequency information');
        return;
      }

      if (alertOptions.minThreshold === undefined && alertOptions.maxThreshold === undefined) {
        var _this$logger6;

        (_this$logger6 = this.logger) === null || _this$logger6 === void 0 ? void 0 : _this$logger6.error('could not register alert, no min or max threshold');
        return;
      }

      (_this$logger7 = this.logger) === null || _this$logger7 === void 0 ? void 0 : _this$logger7.debug("registering metric alert: ".concat(alertOptions.metricType, " ").concat(alertOptions.metricName));
      this.registeredAlerts[alertOptions.metricName] = true;
      return this.pontoon.registerAlert(alertOptions);
    }
  }, {
    key: "onRequest",
    value: function onRequest(req, res) {
      var _this4 = this;

      this.onIncrement({
        name: 'request',
        amount: 1
      });
      this.onIncrement({
        name: "request method ".concat(req.method),
        amount: 1
      });
      on_headers__WEBPACK_IMPORTED_MODULE_32___default()(res, function () {
        var statusCode = Number.isFinite(res.statusCode) ? res.statusCode : 'UNKNOWN';

        _this4.onIncrement({
          name: "response status code ".concat(statusCode),
          amount: 1
        });
      });
    }
  }]);

  return NodeMonitorPontoonReporter;
}(_zg_rentals_monitor_base__WEBPACK_IMPORTED_MODULE_29__[/* MonitorReporter */ "d"]);

/***/ }),

/***/ "../../modules/particles-js-healthcheck/src/index.ts":
/*!****************************************************************************************************!*\
  !*** /Users/opagani/projects/zillowgroup/rentals-js/modules/particles-js-healthcheck/src/index.ts ***!
  \****************************************************************************************************/
/*! exports provided: BAD_SHUTDOWN_TOKEN_MSG, GOOD_STATUS_CODE, SHUTDOWN_STATUS_CODE, Healthcheck */
/*! exports used: Healthcheck */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export BAD_SHUTDOWN_TOKEN_MSG */
/* unused harmony export GOOD_STATUS_CODE */
/* unused harmony export SHUTDOWN_STATUS_CODE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Healthcheck; });
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_starts_with_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.starts-with.js */ "core-js/modules/es.string.starts-with.js");
/* harmony import */ var core_js_modules_es_string_starts_with_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_starts_with_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_4__);
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
/* harmony import */ var _zg_rentals_particles_js_utils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @zg-rentals/particles-js-utils */ "../../modules/particles-js-utils/src/index.ts");
/* harmony import */ var os__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! os */ "os");
/* harmony import */ var os__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(os__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var read_pkg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! read-pkg */ "read-pkg");
/* harmony import */ var read_pkg__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(read_pkg__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var v8__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! v8 */ "v8");
/* harmony import */ var v8__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(v8__WEBPACK_IMPORTED_MODULE_17__);















function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var BAD_SHUTDOWN_TOKEN_MSG = 'invalid shutdown token provided.';
var GOOD_STATUS_CODE = 200;
var SHUTDOWN_STATUS_CODE = 555;
var Healthcheck = /*#__PURE__*/function () {
  function Healthcheck(_ref) {
    var _this = this,
        _this$logger7;

    var logger = _ref.logger,
        shutdownToken = _ref.shutdownToken,
        accessToken = _ref.accessToken,
        _ref$buildNumber = _ref.buildNumber,
        buildNumber = _ref$buildNumber === void 0 ? 0 : _ref$buildNumber,
        onPing = _ref.onPing,
        _ref$protectedQueryPa = _ref.protectedQueryParams,
        protectedQueryParams = _ref$protectedQueryPa === void 0 ? ['runscope', 'sonar', 'liveliness', 'site_liveliness'] : _ref$protectedQueryPa,
        _ref$maxMemoryThresho = _ref.maxMemoryThresholdMb,
        maxMemoryThresholdMb = _ref$maxMemoryThresho === void 0 ? 5120 : _ref$maxMemoryThresho;

    _classCallCheck(this, Healthcheck);

    _defineProperty(this, "shutdownToken", void 0);

    _defineProperty(this, "protectedQueryParams", void 0);

    _defineProperty(this, "accessToken", void 0);

    _defineProperty(this, "isShuttingDown", void 0);

    _defineProperty(this, "logger", void 0);

    _defineProperty(this, "packageJson", void 0);

    _defineProperty(this, "buildNumber", void 0);

    _defineProperty(this, "onPing", void 0);

    _defineProperty(this, "maxMemoryThresholdMb", void 0);

    _defineProperty(this, "setupPm2GracefulExit", function () {
      if (_zg_rentals_particles_js_utils__WEBPACK_IMPORTED_MODULE_14__[/* Utils */ "b"].isProd() && process && process.send) {
        var _this$logger;

        (_this$logger = _this.logger) === null || _this$logger === void 0 ? void 0 : _this$logger.debug('setting up pm2 graceful exit');
        process.on('message', function (message) {
          var _this$logger2;

          (_this$logger2 = _this.logger) === null || _this$logger2 === void 0 ? void 0 : _this$logger2.warn(message, 'healthcheck received a process message');
          var topic = message.topic;

          if (topic === 'TRIGGER_SHUTDOWN') {
            _this.isShuttingDown = true;
          }
        });
      }
    });

    _defineProperty(this, "hasAccess", function (req) {
      if (!_this.accessToken) return false;
      if (req.query.accessToken === _this.accessToken) return true;
      return false;
    });

    _defineProperty(this, "aggregateConfidentialData", function (req) {
      var data = _objectSpread(_objectSpread(_objectSpread({}, _this.getPackageJsonData()), _this.getEnvironmentData()), _this.getServerData());

      if (_this.isMemoryOverloaded(data.memory_used)) {
        _this.isShuttingDown = true;
      }

      if (!_this.hasAccess(req)) {
        return;
      }

      return data;
    });

    _defineProperty(this, "getStatusCode", function (req) {
      if (_this.isShuttingDown) {
        var _this$logger4;

        if (_this.shouldIgnoreShutdown(req)) {
          var _this$logger3;

          (_this$logger3 = _this.logger) === null || _this$logger3 === void 0 ? void 0 : _this$logger3.warn("app is ignoring shutdown mode, returning status code=".concat(GOOD_STATUS_CODE));
          return GOOD_STATUS_CODE;
        }

        (_this$logger4 = _this.logger) === null || _this$logger4 === void 0 ? void 0 : _this$logger4.warn("app is in shutdown mode, returning status code=".concat(SHUTDOWN_STATUS_CODE));
        return SHUTDOWN_STATUS_CODE;
      } else {
        return GOOD_STATUS_CODE;
      }
    });

    _defineProperty(this, "check", function (req, res) {
      try {
        var confidentialData = _this.aggregateConfidentialData(req);

        var baseResponse = _this.generateBaseResponse();

        var status = _this.getStatusCode(req);

        var response = _objectSpread(_objectSpread({}, confidentialData), baseResponse);

        if (_this.onPing) {
          res.status(status).json(_this.onPing({
            hasAccess: _this.hasAccess(req),
            isProtected: _this.shouldIgnoreShutdown(req),
            response: response
          }));
        } else {
          res.status(status).json(response);
        }
      } catch (err) {
        res.status(500).json({
          error: err.message,
          success: false
        });
      }
    });

    _defineProperty(this, "shutdown", function (req, res) {
      var reqShutdownToken = req.query.secretToken;
      var isNotEmpty = reqShutdownToken !== '';
      var isDefined = typeof reqShutdownToken !== 'undefined' && typeof _this.shutdownToken !== 'undefined';

      if (isDefined && isNotEmpty && reqShutdownToken === _this.shutdownToken) {
        var _this$logger5;

        _this.isShuttingDown = true;
        (_this$logger5 = _this.logger) === null || _this$logger5 === void 0 ? void 0 : _this$logger5.warn('successful shutdownToken received, putting app in shutdown mode');
        res.status(200).json({
          success: true,
          statusCode: SHUTDOWN_STATUS_CODE
        });
      } else {
        var _this$logger6;

        (_this$logger6 = _this.logger) === null || _this$logger6 === void 0 ? void 0 : _this$logger6.warn('incorrect or missing shutdown token');
        res.status(500).json({
          success: false,
          error: BAD_SHUTDOWN_TOKEN_MSG
        });
      }
    });

    this.logger = logger;
    this.accessToken = accessToken;
    this.shutdownToken = shutdownToken;
    this.protectedQueryParams = protectedQueryParams;
    this.isShuttingDown = false;
    this.buildNumber = Number(buildNumber);
    this.setupPm2GracefulExit();
    this.packageJson = read_pkg__WEBPACK_IMPORTED_MODULE_16___default.a.sync();
    this.onPing = onPing;
    this.maxMemoryThresholdMb = maxMemoryThresholdMb;
    (_this$logger7 = this.logger) === null || _this$logger7 === void 0 ? void 0 : _this$logger7.info('instantiating healthcheck');
  }

  _createClass(Healthcheck, [{
    key: "bytesToMb",
    value: function bytesToMb(bytes) {
      if (bytes === 0) return 0;
      return bytes / 1024 / 1024;
    }
  }, {
    key: "getPackageJsonData",
    value: function getPackageJsonData() {
      var data = {
        dependencies: {},
        devDependencies: {}
      };
      var _this$packageJson = this.packageJson,
          _this$packageJson$dep = _this$packageJson.dependencies,
          dependencies = _this$packageJson$dep === void 0 ? {} : _this$packageJson$dep,
          _this$packageJson$dev = _this$packageJson.devDependencies,
          devDependencies = _this$packageJson$dev === void 0 ? {} : _this$packageJson$dev;

      for (var dependency in dependencies) {
        if (dependency.startsWith('@zg-rentals/')) {
          data.dependencies[dependency] = dependencies[dependency];
        }
      }

      for (var _dependency in devDependencies) {
        if (_dependency.startsWith('@zg-rentals/')) {
          data.devDependencies[_dependency] = devDependencies[_dependency];
        }
      }

      return data;
    }
  }, {
    key: "getEnvironmentData",
    value: function getEnvironmentData() {
      return {
        NODE_ENV: "development" || false,
        node_version: process.versions.node,
        gitCommit: process.env.GIT_COMMIT || '',
        gitUsername: process.env.GIT_COMMIT_AUTHOR || '',
        gitBranch: process.env.BRANCH_NAME || '',
        buildDate: process.env.BUILD_TIME || ''
      };
    }
  }, {
    key: "getServerData",
    value: function getServerData() {
      return {
        host: os__WEBPACK_IMPORTED_MODULE_15___default.a.hostname(),
        uptime: process.uptime(),
        memory_used: process.memoryUsage(),
        memory_total: os__WEBPACK_IMPORTED_MODULE_15___default.a.totalmem(),
        memory_free: os__WEBPACK_IMPORTED_MODULE_15___default.a.freemem(),
        average_load: os__WEBPACK_IMPORTED_MODULE_15___default.a.loadavg(),
        heap: v8__WEBPACK_IMPORTED_MODULE_17___default.a.getHeapStatistics()
      };
    }
  }, {
    key: "isMemoryOverloaded",
    value: function isMemoryOverloaded(memoryUsage) {
      if (!memoryUsage || !memoryUsage.rss) {
        return false;
      }

      var mb = this.bytesToMb(memoryUsage.rss);

      if (mb >= Number(this.maxMemoryThresholdMb)) {
        return true;
      }

      return false;
    }
  }, {
    key: "generateBaseResponse",
    value: function generateBaseResponse() {
      return {
        name: this.packageJson.name,
        buildNumber: this.buildNumber
      };
    }
  }, {
    key: "shouldIgnoreShutdown",
    value: function shouldIgnoreShutdown(req) {
      if (typeof req.query.mode === 'string' && this.protectedQueryParams.includes(req.query.mode)) {
        return true;
      }

      return false;
    }
  }]);

  return Healthcheck;
}();

/***/ }),

/***/ "../../modules/particles-js-utils/src/index.ts":
/*!**********************************************************************************************!*\
  !*** /Users/opagani/projects/zillowgroup/rentals-js/modules/particles-js-utils/src/index.ts ***!
  \**********************************************************************************************/
/*! exports provided: TestUtility, ShutdownListener, axiosErrorHandler, Utils, NodeUtil */
/*! exports used: NodeUtil, Utils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Utils; });
/* harmony import */ var _getBrand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getBrand */ "../../modules/particles-js-utils/src/getBrand.ts");
/* harmony import */ var _getIp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getIp */ "../../modules/particles-js-utils/src/getIp.ts");
/* harmony import */ var _environmentUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./environmentUtils */ "../../modules/particles-js-utils/src/environmentUtils.ts");
/* harmony import */ var _safeCreateLogger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./safeCreateLogger */ "../../modules/particles-js-utils/src/safeCreateLogger.ts");
/* harmony import */ var _deprecate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./deprecate */ "../../modules/particles-js-utils/src/deprecate.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants */ "../../modules/particles-js-utils/src/constants.ts");
/* harmony import */ var _Batch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Batch */ "../../modules/particles-js-utils/src/Batch.ts");
/* harmony import */ var _http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./http */ "../../modules/particles-js-utils/src/http.ts");
/* harmony import */ var _testUtils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./testUtils */ "../../modules/particles-js-utils/src/testUtils.ts");
/* harmony import */ var _shutdownListener__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shutdownListener */ "../../modules/particles-js-utils/src/shutdownListener.ts");
/* harmony import */ var _node__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./node */ "../../modules/particles-js-utils/src/node/index.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node__WEBPACK_IMPORTED_MODULE_10__; });











var Utils = {
  getBrand: _getBrand__WEBPACK_IMPORTED_MODULE_0__[/* getBrand */ "a"],
  // getIp is legacy export
  getIp: _getIp__WEBPACK_IMPORTED_MODULE_1__[/* selectValidIp */ "b"],
  selectValidIp: _getIp__WEBPACK_IMPORTED_MODULE_1__[/* selectValidIp */ "b"],
  getIpsFromReq: _getIp__WEBPACK_IMPORTED_MODULE_1__[/* getIpsFromReq */ "a"],
  isProd: _environmentUtils__WEBPACK_IMPORTED_MODULE_2__[/* isProd */ "a"],
  isStaging: _environmentUtils__WEBPACK_IMPORTED_MODULE_2__[/* isStaging */ "b"],
  safeCreateLogger: _safeCreateLogger__WEBPACK_IMPORTED_MODULE_3__[/* safeCreateLogger */ "a"],
  safeUseLogger: _safeCreateLogger__WEBPACK_IMPORTED_MODULE_3__[/* safeUseLogger */ "b"],
  deprecateMessage: _deprecate__WEBPACK_IMPORTED_MODULE_4__[/* deprecateMessage */ "a"],
  messages: _constants__WEBPACK_IMPORTED_MODULE_5__[/* messages */ "a"],
  axiosErrorHandler: _http__WEBPACK_IMPORTED_MODULE_7__[/* axiosErrorHandler */ "a"],
  Batch: _Batch__WEBPACK_IMPORTED_MODULE_6__[/* Batch */ "a"]
};
// server only



/***/ }),

/***/ "../../modules/particles-js-utils/src/node/index.ts":
/*!***************************************************************************************************!*\
  !*** /Users/opagani/projects/zillowgroup/rentals-js/modules/particles-js-utils/src/node/index.ts ***!
  \***************************************************************************************************/
/*! exports provided: EnvironmentUtil, default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnvironmentUtil", function() { return EnvironmentUtil; });
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var os__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! os */ "os");
/* harmony import */ var os__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(os__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _helpers_propertiesReader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../helpers/propertiesReader */ "../../modules/particles-js-utils/src/helpers/propertiesReader.ts");







function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var EnvironmentUtil = /*#__PURE__*/function () {
  function EnvironmentUtil(propertiesFilePath, _ref) {
    var appName = _ref.appName;

    _classCallCheck(this, EnvironmentUtil);

    _defineProperty(this, "serverProperties", void 0);

    _defineProperty(this, "envProperties", void 0);

    try {
      var readProperties = Object(_helpers_propertiesReader__WEBPACK_IMPORTED_MODULE_7__[/* properties */ "a"])(propertiesFilePath);
      var sp = {
        name: String(readProperties.get('server.name')),
        type: String(readProperties.get('server.type')),
        publicIp: String(readProperties.get('server.publicIp')),
        privateIp: String(readProperties.get('server.privateIp'))
      };
      this.serverProperties = sp;
    } catch (err) {
      this.serverProperties = {
        name: os__WEBPACK_IMPORTED_MODULE_6___default.a.hostname(),
        type: appName,
        publicIp: '',
        privateIp: ''
      };
    }

    var hostname = os__WEBPACK_IMPORTED_MODULE_6___default.a.hostname();
    this.envProperties = {
      server: this.serverProperties,
      hostname: hostname,
      id: "".concat(this.serverProperties.name, "-").concat(hostname),
      environment: this.guessEnvironment()
    };
  }

  _createClass(EnvironmentUtil, [{
    key: "guessEnvironment",
    value: function guessEnvironment() {
      var name = this.serverProperties.name;

      if (name.includes('node-int')) {
        return 'node-int';
      } else if (name.includes('production')) {
        return 'production';
      } else if (name.includes('comet')) {
        return 'comet1';
      } else if (name.includes('ttest')) {
        return 'ttest';
      } else if (name.includes('ztest')) {
        return 'ztest';
      } else if (name.includes('sherman')) {
        return 'sherman';
      } else if (name.includes('jenkins')) {
        return 'jenkins';
      } else {
        return 'other';
      }
    } // any non-local server that is not production

  }, {
    key: "isStaging",
    value: function isStaging() {
      var environment = this.envProperties.environment;
      return ['node-int', 'comet1', 'ttest', 'ztest', 'sherman'].indexOf(environment) > -1;
    } // production servers

  }, {
    key: "isProduction",
    value: function isProduction() {
      var environment = this.envProperties.environment;
      return environment === 'production';
    }
  }, {
    key: "isSherman",
    value: function isSherman() {
      var environment = this.envProperties.environment;
      return environment === 'sherman';
    }
  }, {
    key: "isJenkins",
    value: function isJenkins() {
      var environment = this.envProperties.environment;
      return environment === 'jenkins';
    }
  }]);

  return EnvironmentUtil;
}();
/* harmony default export */ __webpack_exports__["default"] = (EnvironmentUtil);

/***/ }),

/***/ "../../modules/pontoon/src/batched-metrics.ts":
/*!*********************************************************************************************!*\
  !*** /Users/opagani/projects/zillowgroup/rentals-js/modules/pontoon/src/batched-metrics.ts ***!
  \*********************************************************************************************/
/*! exports provided: BATCH_THROTTLE_MS, throttle, batches, makeThrottledMetricRequest, throttledSendCounts, throttledSendGauges, getBatch, mergeCounts, mergeGauges, batchCounts, batchGauges */
/*! exports used: batchCounts, batchGauges */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export BATCH_THROTTLE_MS */
/* unused harmony export throttle */
/* unused harmony export batches */
/* unused harmony export makeThrottledMetricRequest */
/* unused harmony export throttledSendCounts */
/* unused harmony export throttledSendGauges */
/* unused harmony export getBatch */
/* unused harmony export mergeCounts */
/* unused harmony export mergeGauges */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return batchCounts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return batchGauges; });
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_date_now_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.date.now.js */ "core-js/modules/es.date.now.js");
/* harmony import */ var core_js_modules_es_date_now_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_now_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.assign.js */ "core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _pontoon__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pontoon */ "../../modules/pontoon/src/pontoon.ts");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }























var BATCH_THROTTLE_MS = 5000;
function throttle(fn) {
  var timeout = null;
  return function () {
    if (timeout !== null) {
      return;
    }

    timeout = setTimeout(function () {
      timeout = null;
      fn();
    }, BATCH_THROTTLE_MS);
  };
}
var batches = {
  count: {},
  gauge: {}
};
function makeThrottledMetricRequest(type) {
  var pluralType = type + 's';
  return throttle(function () {
    var batch = batches[type];
    Object.keys(batch).forEach(function (serverName) {
      Object.keys(batch[serverName]).forEach(function (serviceName) {
        var serviceBatch = batch[serverName][serviceName];

        var payload = _defineProperty({
          api: serviceBatch.api,
          apiKey: serviceBatch.apiKey,
          headers: serviceBatch.headers,
          serverName: serverName,
          serviceName: serviceName
        }, pluralType, serviceBatch[pluralType]); // browserTime is used in browser requests only, to compensate for inaccurate browser clocks


        if (typeof window !== 'undefined') {
          payload.browserTime = Date.now();
        }

        Object(_pontoon__WEBPACK_IMPORTED_MODULE_22__[/* post */ "b"])(type + 'Publisher/v2/add', payload);
      });
    });
    batches[type] = {};
  });
}
var throttledSendCounts = makeThrottledMetricRequest('count');
var throttledSendGauges = makeThrottledMetricRequest('gauge');
function getBatch(metrics, type) {
  var _metrics$serverName = metrics.serverName,
      serverName = _metrics$serverName === void 0 ? '' : _metrics$serverName,
      _metrics$serviceName = metrics.serviceName,
      serviceName = _metrics$serviceName === void 0 ? '' : _metrics$serviceName,
      api = metrics.api,
      apiKey = metrics.apiKey,
      _metrics$headers = metrics.headers,
      headers = _metrics$headers === void 0 ? {} : _metrics$headers;
  var batch = batches[type];
  batch[serverName] = batch[serverName] || {};
  batch[serverName][serviceName] = batch[serverName][serviceName] || _defineProperty({
    api: api,
    apiKey: apiKey,
    headers: headers
  }, type + 's', {});
  var serviceBatch = batch[serverName][serviceName];
  return serviceBatch;
}
function mergeCounts(batchedCounts, newCounts) {
  Object.keys(newCounts).forEach(function (ms) {
    batchedCounts[ms] = batchedCounts[ms] || {};
    Object.keys(newCounts[ms]).forEach(function (name) {
      batchedCounts[ms][name] = batchedCounts[ms][name] || 0;
      batchedCounts[ms][name] += newCounts[ms][name];
    });
  });
}
function mergeGauges(batchedGauges, newGauges) {
  Object.keys(newGauges).forEach(function (metricName) {
    batchedGauges[metricName] = batchedGauges[metricName] || [];
    newGauges[metricName].forEach(function (_ref2) {
      var _ref3 = _slicedToArray(_ref2, 2),
          timestamp = _ref3[0],
          value = _ref3[1];

      var existingGauge = batchedGauges[metricName].find(function (point) {
        return point[0] === timestamp;
      });

      if (existingGauge) {
        existingGauge[1] += value;
      } else {
        batchedGauges[metricName].push([timestamp, value]);
      }
    });
  });
}
function batchCounts(_x) {
  return _batchCounts.apply(this, arguments);
}

function _batchCounts() {
  _batchCounts = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(metrics) {
    var batch;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            batch = getBatch(metrics, 'count');

            if (metrics.headers) {
              Object.assign(batch.headers, metrics.headers);
            }

            mergeCounts(batch.counts, metrics.counts);
            throttledSendCounts();

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _batchCounts.apply(this, arguments);
}

function batchGauges(_x2) {
  return _batchGauges.apply(this, arguments);
}

function _batchGauges() {
  _batchGauges = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(metrics) {
    var batch;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            batch = getBatch(metrics, 'gauge');

            if (metrics.headers) {
              Object.assign(batch.headers, metrics.headers);
            }

            mergeGauges(batch.gauges, metrics.gauges);
            throttledSendGauges();

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _batchGauges.apply(this, arguments);
}

/***/ }),

/***/ "../../modules/pontoon/src/index.ts":
/*!***********************************************************************************!*\
  !*** /Users/opagani/projects/zillowgroup/rentals-js/modules/pontoon/src/index.ts ***!
  \***********************************************************************************/
/*! no static exports found */
/*! exports used: Pontoon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _pontoon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pontoon */ "../../modules/pontoon/src/pontoon.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Pontoon", function() { return _pontoon__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony import */ var _request_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./request-types */ "../../modules/pontoon/src/request-types.ts");
/* harmony import */ var _request_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_request_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _response_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./response-types */ "../../modules/pontoon/src/response-types.ts");
/* harmony import */ var _response_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_response_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _batched_metrics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./batched-metrics */ "../../modules/pontoon/src/batched-metrics.ts");





/***/ }),

/***/ "../../modules/pontoon/src/pontoon.ts":
/*!*************************************************************************************!*\
  !*** /Users/opagani/projects/zillowgroup/rentals-js/modules/pontoon/src/pontoon.ts ***!
  \*************************************************************************************/
/*! exports provided: post, get, sendCounts, sendGauges, addServiceConfig, getServiceConfig, getAllServiceConfigs, areGaugesDelayed, registerAlert, getWindow, query, addHeartbeat, removeHeartbeat, getAllWebapps, getWebapp, addStatUrl, Pontoon */
/*! exports used: Pontoon, post */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return post; });
/* unused harmony export get */
/* unused harmony export sendCounts */
/* unused harmony export sendGauges */
/* unused harmony export addServiceConfig */
/* unused harmony export getServiceConfig */
/* unused harmony export getAllServiceConfigs */
/* unused harmony export areGaugesDelayed */
/* unused harmony export registerAlert */
/* unused harmony export getWindow */
/* unused harmony export query */
/* unused harmony export addHeartbeat */
/* unused harmony export removeHeartbeat */
/* unused harmony export getAllWebapps */
/* unused harmony export getWebapp */
/* unused harmony export addStatUrl */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Pontoon; });
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.define-properties.js */ "core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _batched_metrics__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./batched-metrics */ "../../modules/pontoon/src/batched-metrics.ts");










var _excluded = ["api", "apiKey", "headers"],
    _excluded2 = ["api", "headers"];


function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



function post(_x, _x2) {
  return _post.apply(this, arguments);
}

function _post() {
  _post = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(apiPath, body) {
    var api, apiKey, headers, data, response;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            api = body.api, apiKey = body.apiKey, headers = body.headers, data = _objectWithoutProperties(body, _excluded);
            _context.next = 3;
            return axios__WEBPACK_IMPORTED_MODULE_15___default.a.post("".concat(api, "/pontoon/api/").concat(apiPath), data, {
              params: {
                apiKey: apiKey
              },
              headers: headers
            });

          case 3:
            response = _context.sent;
            return _context.abrupt("return", response.data);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _post.apply(this, arguments);
}

function get(_x3, _x4) {
  return _get.apply(this, arguments);
}

function _get() {
  _get = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(apiPath, opts) {
    var api, headers, params, response;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            api = opts.api, headers = opts.headers, params = _objectWithoutProperties(opts, _excluded2);
            _context2.next = 3;
            return axios__WEBPACK_IMPORTED_MODULE_15___default.a.get("".concat(api, "/pontoon/api/").concat(apiPath), {
              params: params,
              headers: headers
            });

          case 3:
            response = _context2.sent;
            return _context2.abrupt("return", response.data);

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _get.apply(this, arguments);
}

function sendCounts(metrics) {
  return Object(_batched_metrics__WEBPACK_IMPORTED_MODULE_16__[/* batchCounts */ "a"])(metrics);
}
function sendGauges(metrics) {
  return Object(_batched_metrics__WEBPACK_IMPORTED_MODULE_16__[/* batchGauges */ "b"])(metrics);
}
function addServiceConfig(serviceConfig) {
  return post('externalServiceConfiguration/add', serviceConfig);
}
function getServiceConfig(descriptor) {
  return get('externalServiceConfiguration/get', descriptor);
}
function getAllServiceConfigs(_x5) {
  return _getAllServiceConfigs.apply(this, arguments);
}

function _getAllServiceConfigs() {
  _getAllServiceConfigs = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(options) {
    var results;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return get('externalServiceConfiguration/getAll', options);

          case 2:
            results = _context3.sent;
            return _context3.abrupt("return", results.batch);

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _getAllServiceConfigs.apply(this, arguments);
}

function areGaugesDelayed(options) {
  return get('gaugeAggregation/isDelayed', options);
}
function registerAlert(alert) {
  return post('metric/alert/register', alert);
}
function getWindow(metricWindow) {
  return post('metric/getWindow', metricWindow);
}
function query(metricQuery) {
  return post('metric/query', metricQuery);
}
function addHeartbeat(webApp) {
  webApp.servletContainerVersion = webApp.servletContainerVersion || '';
  webApp.servletContextPath = webApp.servletContextPath || '';
  return post('webappInstancePublisher/add', webApp);
}
function removeHeartbeat(descriptor) {
  return get('webappInstancePublisher/delete', descriptor);
}
function getAllWebapps(_x6) {
  return _getAllWebapps.apply(this, arguments);
}

function _getAllWebapps() {
  _getAllWebapps = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(descriptor) {
    var results;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return get('webappInstanceReader/get', descriptor);

          case 2:
            results = _context4.sent;
            return _context4.abrupt("return", results.dtos);

          case 4:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _getAllWebapps.apply(this, arguments);
}

function getWebapp(webApp) {
  return get('webappInstanceReader/getInstance', webApp);
}
function addStatUrl(_ref) {
  var stat = _ref.stat,
      serviceName = _ref.serviceName,
      api = _ref.api;
  var statUrlParams = {
    periodMs: 300000,
    frequency: 'period',
    regexSplitLimit: 50,
    showMinMax: false,
    entries: [{
      accountName: serviceName,
      metricInput: stat.name,
      serviceName: serviceName,
      serverName: 'All',
      splitServer: false
    }]
  };
  var queryString = encodeURIComponent(JSON.stringify(statUrlParams));
  stat.url = "".concat(api, "/pontoon/metrics/viewMetrics/view?q=").concat(queryString);
  return stat;
} // exported functions may be called directly or called as methods of a Pontoon instance

var Pontoon = /*#__PURE__*/function () {
  function Pontoon(options) {
    _classCallCheck(this, Pontoon);

    _defineProperty(this, "options", void 0);

    _defineProperty(this, "sendCounts", this.addOpts(sendCounts));

    _defineProperty(this, "addServiceConfig", this.addOpts(addServiceConfig));

    _defineProperty(this, "getServiceConfig", this.addOpts(getServiceConfig));

    _defineProperty(this, "getAllServiceConfigs", this.addOpts(getAllServiceConfigs));

    _defineProperty(this, "areGaugesDelayed", this.addOpts(areGaugesDelayed));

    _defineProperty(this, "sendGauges", this.addOpts(sendGauges));

    _defineProperty(this, "registerAlert", this.addOpts(registerAlert));

    _defineProperty(this, "getWindow", this.addOpts(getWindow));

    _defineProperty(this, "query", this.addOpts(query));

    _defineProperty(this, "addHeartbeat", this.addOpts(addHeartbeat));

    _defineProperty(this, "removeHeartbeat", this.addOpts(removeHeartbeat));

    _defineProperty(this, "getAllWebapps", this.addOpts(getAllWebapps));

    _defineProperty(this, "getWebapp", this.addOpts(getWebapp));

    _defineProperty(this, "addStatUrl", this.addOpts(addStatUrl));

    if (typeof window === 'undefined' && !(options.api && options.apiKey)) {
      throw new Error("Can't query Pontoon without the api and apiKey options.");
    }

    this.options = options;
  } // Wraps a function so that the `api` and `apiKey` options will be added
  // to whatever object is passed in. Without typing it would look like this:
  // addOpts: request => options => request({ ...this.options, ...options })


  _createClass(Pontoon, [{
    key: "addOpts",
    value: function addOpts(request) {
      var _this = this;

      return function (options) {
        return request(_objectSpread(_objectSpread({}, _this.options), options));
      };
    }
  }]);

  return Pontoon;
}();

/***/ }),

/***/ "../../modules/pontoon/src/request-types.ts":
/*!*******************************************************************************************!*\
  !*** /Users/opagani/projects/zillowgroup/rentals-js/modules/pontoon/src/request-types.ts ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../../modules/pontoon/src/response-types.ts":
/*!********************************************************************************************!*\
  !*** /Users/opagani/projects/zillowgroup/rentals-js/modules/pontoon/src/response-types.ts ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./app/server/utils/nodeMonitor.ts":
/*!*****************************************!*\
  !*** ./app/server/utils/nodeMonitor.ts ***!
  \*****************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var core_js_modules_es_date_now_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.date.now.js */ "core-js/modules/es.date.now.js");
/* harmony import */ var core_js_modules_es_date_now_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_now_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.parse-int.js */ "core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var env_var__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! env-var */ "env-var");
/* harmony import */ var env_var__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(env_var__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _server_utils_log__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../server/utils/log */ "./app/server/utils/log.ts");
/* harmony import */ var _zg_rentals_monitor_node__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @zg-rentals/monitor-node */ "../../modules/monitor-node/src/index.ts");






var webappName = env_var__WEBPACK_IMPORTED_MODULE_3___default.a.get('APP_NAME').asString();
var gitCommit = env_var__WEBPACK_IMPORTED_MODULE_3___default.a.get('GIT_SHA').asString();
var pontoonApi = env_var__WEBPACK_IMPORTED_MODULE_3___default.a.get('PONTOON_API').asString();
var pontoonApiKey = env_var__WEBPACK_IMPORTED_MODULE_3___default.a.get('PONTOON_API_KEY').asString();
var gitBranch = env_var__WEBPACK_IMPORTED_MODULE_3___default.a.get('GIT_BRANCH').asString();
var startupDate = env_var__WEBPACK_IMPORTED_MODULE_3___default.a.get('APP_START_TIME').asInt() || Date.now(); // I'm using presence or lack of pontoon env vars to indicate env support -- could also be done through new env var PONTOON_ENABLED

var pontoonEnabled = pontoonApi && pontoonApiKey;
var plugins = [];
var reporters = [];
var monitorLogger = _server_utils_log__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].child('monitor-node');

if (pontoonEnabled) {
  var pontoonReporter = new _zg_rentals_monitor_node__WEBPACK_IMPORTED_MODULE_5__[/* NodeMonitorPontoonReporter */ "b"]({
    logger: monitorLogger,
    webappName: webappName,
    api: pontoonApi,
    apiKey: pontoonApiKey
  });
  reporters.push(pontoonReporter);
  var pontoonHeartbeatPlugin = new _zg_rentals_monitor_node__WEBPACK_IMPORTED_MODULE_5__[/* PontoonHeartbeatPlugin */ "d"]({
    logger: monitorLogger,
    webappName: webappName,
    api: pontoonApi,
    apiKey: pontoonApiKey,
    startupDate: startupDate,
    buildDate:  false ? undefined : parseInt(1652290604940),
    buildId: parseInt(undefined),
    commitId: gitCommit,
    gitBranch: gitBranch
  });
  plugins.push(pontoonHeartbeatPlugin);
}

var nodeVitalsPlugin = new _zg_rentals_monitor_node__WEBPACK_IMPORTED_MODULE_5__[/* NodeVitalsPlugin */ "c"]({
  logger: monitorLogger,
  webappName: webappName,
  buildNumber: parseInt(undefined),
  gitCommit: gitCommit
});
plugins.push(nodeVitalsPlugin);
var nodeMonitor = new _zg_rentals_monitor_node__WEBPACK_IMPORTED_MODULE_5__[/* NodeMonitor */ "a"]({
  logger: monitorLogger,
  reporters: reporters,
  plugins: plugins
});
/* harmony default export */ __webpack_exports__["a"] = (nodeMonitor);

/***/ }),

/***/ "core-js/modules/es.number.is-finite.js":
/*!*********************************************************!*\
  !*** external "core-js/modules/es.number.is-finite.js" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.number.is-finite.js");

/***/ }),

/***/ "env-var":
/*!**************************!*\
  !*** external "env-var" ***!
  \**************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports) {

module.exports = require("env-var");

/***/ }),

/***/ "event-loop-stats":
/*!***********************************!*\
  !*** external "event-loop-stats" ***!
  \***********************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports) {

module.exports = require("event-loop-stats");

/***/ }),

/***/ "on-headers":
/*!*****************************!*\
  !*** external "on-headers" ***!
  \*****************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports) {

module.exports = require("on-headers");

/***/ }),

/***/ "perf_hooks":
/*!*****************************!*\
  !*** external "perf_hooks" ***!
  \*****************************/
/*! no static exports found */
/*! exports used: PerformanceObserver, constants */
/***/ (function(module, exports) {

module.exports = require("perf_hooks");

/***/ })

};
//# sourceMappingURL=index.470815ed475b835db766.hot-update.js.map