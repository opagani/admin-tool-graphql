exports.id = "docker-entrypoint";
exports.modules = {

/***/ "../../modules/workspace-graph/src/Workspaces.ts":
/*!************************************************************************************************!*\
  !*** /Users/opagani/projects/zillowgroup/rentals-js/modules/workspace-graph/src/Workspaces.ts ***!
  \************************************************************************************************/
/*! exports provided: Workspaces, default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Workspaces */
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.map.js */ "core-js/modules/es.map.js");
/* harmony import */ var core_js_modules_es_map_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_map_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_set_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.set.js */ "core-js/modules/es.set.js");
/* harmony import */ var core_js_modules_es_set_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_string_starts_with_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.string.starts-with.js */ "core-js/modules/es.string.starts-with.js");
/* harmony import */ var core_js_modules_es_string_starts_with_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_starts_with_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _zg_rentals_cli_tools__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @zg-rentals/cli-tools */ "../../modules/cli-tools/src/index.ts");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var _Graph__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./Graph */ "../../modules/workspace-graph/src/Graph.ts");
/* harmony import */ var _Workspace__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./Workspace */ "../../modules/workspace-graph/src/Workspace.ts");


function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


























function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var Workspaces = /*#__PURE__*/function () {
  function Workspaces(root, packageJsons) {
    _classCallCheck(this, Workspaces);

    _defineProperty(this, "dependents", new _Graph__WEBPACK_IMPORTED_MODULE_27__[/* default */ "a"]());

    _defineProperty(this, "devDependents", new _Graph__WEBPACK_IMPORTED_MODULE_27__[/* default */ "a"]());

    _defineProperty(this, "_workspaces", new Map());

    _defineProperty(this, "_aliases", new Map());

    _defineProperty(this, "_root", void 0);

    this._root = this.addWorkspace(root);

    var _iterator = _createForOfIteratorHelper(packageJsons),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var packageJson = _step.value;
        this.addWorkspace(packageJson);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    this.addEdges(this.dependents, 'sourceDependencies');
    this.addEdges(this.dependents, 'sourcePeerDependencies');
    this.addEdges(this.devDependents, 'sourceDevDependencies');
  }

  _createClass(Workspaces, [{
    key: "all",
    get: function get() {
      return this._workspaces.values();
    }
  }, {
    key: "publishable",
    get: function get() {
      var publishable = new Map();

      var _iterator2 = _createForOfIteratorHelper(this._workspaces.values()),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var workspace = _step2.value;

          if (!workspace["private"] && !workspace.isRoot) {
            publishable.set(workspace.name, workspace);
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      return publishable;
    }
  }, {
    key: "root",
    get: function get() {
      return this._root;
    }
  }, {
    key: "dependencies",
    get: function get() {
      return this.dependents.inverted;
    }
  }, {
    key: "devDependencies",
    get: function get() {
      return this.devDependents.inverted;
    }
  }, {
    key: "addEdges",
    value: function addEdges(graph, key) {
      var _this = this;

      var _iterator3 = _createForOfIteratorHelper(this._workspaces.values()),
          _step3;

      try {
        var _loop = function _loop() {
          var workspace = _step3.value;
          graph.addNode(workspace);
          workspace[key].forEach(function (dep) {
            var dependency = _this.getWorkspace(dep);

            graph.addEdge(dependency, workspace);
          });
        };

        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          _loop();
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    }
  }, {
    key: "_addAlias",
    value: function _addAlias(alias, fullName) {
      if (this._aliases.has(alias) && this._aliases.get(alias) !== fullName) {
        throw new Error("Cannot override workspace alias ".concat(alias, " to ").concat(fullName, " because it already points to ").concat(this._aliases.get(alias)));
      }

      this._aliases.set(alias, fullName);
    }
  }, {
    key: "addWorkspace",
    value: function addWorkspace(packageJson) {
      var workspace = new _Workspace__WEBPACK_IMPORTED_MODULE_28__[/* default */ "a"](packageJson, this.root);

      this._workspaces.set(packageJson.name, workspace);

      var alias = packageJson.name.replace('@zg-rentals/', '');

      this._addAlias(alias, packageJson.name);

      if (packageJson.name.includes('/')) {
        this._addAlias(packageJson.name.split('/')[1], packageJson.name);
      }

      if (packageJson.alias) {
        this._addAlias(packageJson.alias, packageJson.name);
      }

      return workspace;
    }
  }, {
    key: "getWorkspace",
    value: function getWorkspace(name) {
      var aliasName = this._aliases.get(name);

      var workspace = this._workspaces.get(aliasName || name);

      if (!workspace) {
        throw new Error("Workspace for ".concat(name, " was not found"));
      }

      return workspace;
    }
  }, {
    key: "changedWorkspaces",
    value: function () {
      var _changedWorkspaces = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(id) {
        var _this2 = this;

        var changedFiles, stagedFiles, workspaces;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _zg_rentals_cli_tools__WEBPACK_IMPORTED_MODULE_25__[/* git */ "b"].getChangedFiles({
                  id: id
                });

              case 2:
                changedFiles = _context.sent;
                _context.next = 5;
                return _zg_rentals_cli_tools__WEBPACK_IMPORTED_MODULE_25__[/* git */ "b"].getStagedFiles();

              case 5:
                stagedFiles = _context.sent;
                workspaces = new Set();
                [].concat(_toConsumableArray(changedFiles), _toConsumableArray(stagedFiles)).forEach(function (filepath) {
                  if (!filepath.startsWith('.changeset/') && filepath !== 'yarn.lock') {
                    var workspace = _this2.getWorkspaceByFilepath(filepath);

                    workspaces.add(workspace);
                  }
                });
                return _context.abrupt("return", workspaces);

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function changedWorkspaces(_x) {
        return _changedWorkspaces.apply(this, arguments);
      }

      return changedWorkspaces;
    }()
  }, {
    key: "affectedWorkspaces",
    value: function () {
      var _affectedWorkspaces = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(id) {
        var _this$dependents, _this$devDependents;

        var changedWorkspaces, changedArray, workspaces, _iterator4, _step4, wsName, _iterator5, _step5, _wsName;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.changedWorkspaces(id);

              case 2:
                changedWorkspaces = _context2.sent;
                changedArray = Array.from(changedWorkspaces);

                if (!changedArray.includes(this.root)) {
                  _context2.next = 6;
                  break;
                }

                return _context2.abrupt("return", new Set(this.all));

              case 6:
                workspaces = new Set();
                _iterator4 = _createForOfIteratorHelper((_this$dependents = this.dependents).topologicalClosure.apply(_this$dependents, _toConsumableArray(changedArray)));

                try {
                  for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                    wsName = _step4.value;
                    workspaces.add(this.getWorkspace(wsName));
                  }
                } catch (err) {
                  _iterator4.e(err);
                } finally {
                  _iterator4.f();
                }

                _iterator5 = _createForOfIteratorHelper((_this$devDependents = this.devDependents).topologicalClosure.apply(_this$devDependents, _toConsumableArray(changedArray)));

                try {
                  for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                    _wsName = _step5.value;
                    workspaces.add(this.getWorkspace(_wsName));
                  }
                } catch (err) {
                  _iterator5.e(err);
                } finally {
                  _iterator5.f();
                }

                return _context2.abrupt("return", workspaces);

              case 12:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function affectedWorkspaces(_x2) {
        return _affectedWorkspaces.apply(this, arguments);
      }

      return affectedWorkspaces;
    }()
  }, {
    key: "publishableChangedWorkspaces",
    value: function () {
      var _publishableChangedWorkspaces = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var changed, publishable, _iterator6, _step6, workspace;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.changedWorkspaces();

              case 2:
                changed = _context3.sent;
                publishable = new Set();
                _iterator6 = _createForOfIteratorHelper(changed);

                try {
                  for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                    workspace = _step6.value;

                    if (!workspace["private"] && !workspace.isRoot) {
                      publishable.add(workspace);
                    }
                  }
                } catch (err) {
                  _iterator6.e(err);
                } finally {
                  _iterator6.f();
                }

                return _context3.abrupt("return", publishable);

              case 7:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function publishableChangedWorkspaces() {
        return _publishableChangedWorkspaces.apply(this, arguments);
      }

      return publishableChangedWorkspaces;
    }()
  }, {
    key: "fromInput",
    value: function fromInput(inputs) {
      var _this3 = this;

      var workspaces = new Set();

      if (inputs.length === 1 && inputs[0] === false) {
        return workspaces;
      }

      if (inputs.length === 0) {
        return new Set(this.all);
      }

      inputs.forEach(function (input) {
        workspaces.add(_this3.getWorkspace(input));
      });
      return workspaces;
    }
  }, {
    key: "getWorkspaceByFilepath",
    value: function getWorkspaceByFilepath(filepath) {
      var rootPath = this.root.location;

      var _iterator7 = _createForOfIteratorHelper(this.all),
          _step7;

      try {
        for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
          var workspace = _step7.value;

          if (workspace === this.root) {
            continue;
          }

          if (filepath.startsWith("".concat(path__WEBPACK_IMPORTED_MODULE_26___default.a.relative(rootPath, workspace.location), "/"))) {
            return workspace;
          }
        }
      } catch (err) {
        _iterator7.e(err);
      } finally {
        _iterator7.f();
      }

      return this.root;
    }
  }]);

  return Workspaces;
}();
/* harmony default export */ __webpack_exports__["a"] = (Workspaces);

/***/ })

};
//# sourceMappingURL=docker-entrypoint.5e71710c57ca437c3463.hot-update.js.map