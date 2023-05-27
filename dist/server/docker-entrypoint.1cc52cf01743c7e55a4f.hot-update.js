exports.id = "docker-entrypoint";
exports.modules = {

/***/ "../../modules/app/src/env.ts":
/*!*****************************************************************************!*\
  !*** /Users/opagani/projects/zillowgroup/rentals-js/modules/app/src/env.ts ***!
  \*****************************************************************************/
/*! exports provided: loadDotEnv, loadDotEnvYargsMiddleware, setYargsDefaultsMiddleware, yargsToCamelCase */
/*! exports used: loadDotEnv */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return loadDotEnv; });
/* unused harmony export loadDotEnvYargsMiddleware */
/* unused harmony export setYargsDefaultsMiddleware */
/* unused harmony export yargsToCamelCase */
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! dotenv */ "dotenv");
/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _zg_rentals_workspace_graph__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @zg-rentals/workspace-graph */ "../../modules/workspace-graph/src/index.ts");
/* harmony import */ var dotenv_expand__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! dotenv-expand */ "dotenv-expand");
/* harmony import */ var dotenv_expand__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(dotenv_expand__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_14__);















function loadDotEnv() {
  var root = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : process.cwd();
  var zgEnv = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : process.env.ZG_ENV;
  var envFilePaths = [];

  if (!zgEnv) {
    envFilePaths.push(path__WEBPACK_IMPORTED_MODULE_14___default.a.join(root, '.env'));
  } else {
    envFilePaths.push("".concat(path__WEBPACK_IMPORTED_MODULE_14___default.a.join(root, '/.env'), ".").concat(zgEnv, ".local"), "".concat(path__WEBPACK_IMPORTED_MODULE_14___default.a.join(root, '/.env'), ".").concat(zgEnv), path__WEBPACK_IMPORTED_MODULE_14___default.a.join(root, '/.env'));
  }

  envFilePaths.forEach(function (filepath) {
    if (fs__WEBPACK_IMPORTED_MODULE_13___default.a.existsSync(filepath)) {
      dotenv_expand__WEBPACK_IMPORTED_MODULE_12___default()(Object(dotenv__WEBPACK_IMPORTED_MODULE_10__["config"])({
        path: filepath
      }));
    }
  });
}
function loadDotEnvYargsMiddleware(argv, workspaceName) {
  var graph = Object(_zg_rentals_workspace_graph__WEBPACK_IMPORTED_MODULE_11__[/* getWorkspaceGraph */ "a"])(argv['repo-root']);
  var workspace = graph.getWorkspace(workspaceName);

  if (!workspace) {
    throw new Error('Require a workspace to load dotenv');
  }

  loadDotEnv(workspace.location, argv['zg-env']);
}
function setYargsDefaultsMiddleware(cli, options) {
  var _ref = options || {},
      _ref$types = _ref.types,
      types = _ref$types === void 0 ? {} : _ref$types,
      useEnvVars = _ref.useEnvVars,
      _ref$defaults = _ref.defaults,
      defaults = _ref$defaults === void 0 ? {} : _ref$defaults;

  var _ref2 = cli.parsed,
      _ref2$aliases = _ref2.aliases,
      aliases = _ref2$aliases === void 0 ? {} : _ref2$aliases,
      _ref2$argv = _ref2.argv,
      argv = _ref2$argv === void 0 ? {
    _: [],
    $0: ''
  } : _ref2$argv;

  if (useEnvVars) {
    Object.keys(aliases).forEach(function (key) {
      if (argv[key] === undefined) {
        var upperSnakeCaseKey = key.replace(/-/g, '_').toUpperCase();
        var envVarValue = process.env[upperSnakeCaseKey];

        if (envVarValue !== undefined) {
          var type = types[key] || (defaults[key] === undefined ? String : defaults[key].constructor);
          argv[key] = type(envVarValue);
        }
      }
    });
  }

  Object.keys(defaults).forEach(function (key) {
    if (argv[key] === undefined && defaults[key] !== undefined) {
      var defaultValue = defaults[key];

      if (types[key]) {
        defaultValue = types[key](defaultValue);
      }

      argv[key] = defaultValue;
    }
  });
} //
// The following types convert a generic type T from snake_case or spinal-case to camelCase.
// Consider this example:
//
// interface Argv {
//   'zg-env': string;
//   'my_arg': boolean;
// }
// type ArgvCamelCase = KeysToCamelCase<Argv>;
//
// ArgvCamelCase would now be equivalent to:
//
// interface ArgvCamelCase {
//   zgEnv: string;
//   myArg: boolean;
// }
//

function yargsToCamelCase(argv) {
  var formattedArgs = {};
  Object.keys(argv).forEach(function (key) {
    var formattedKey = key.split(/[-_]/).map(function (word, index) {
      if (word) {
        if (index === 0) {
          return word.toLowerCase();
        }

        return word[0].toUpperCase() + word.slice(1).toLowerCase();
      }

      return word;
    }).join('');
    formattedArgs[formattedKey] = argv[key];
  });
  return formattedArgs;
}

/***/ })

};
//# sourceMappingURL=docker-entrypoint.1cc52cf01743c7e55a4f.hot-update.js.map