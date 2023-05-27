exports.id = "index";
exports.modules = {

/***/ "../../modules/particles-js-utils/src/getIp.ts":
/*!**********************************************************************************************!*\
  !*** /Users/opagani/projects/zillowgroup/rentals-js/modules/particles-js-utils/src/getIp.ts ***!
  \**********************************************************************************************/
/*! exports provided: getIpsFromReq, selectValidIp */
/*! exports used: getIpsFromReq, selectValidIp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getIpsFromReq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return selectValidIp; });
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5__);







/* eslint-disable @typescript-eslint/no-var-requires */
var ipRangeCheck = __webpack_require__(/*! ip-range-check */ "ip-range-check"); // TODO: inherently insecure to ip spoofing
// x-client-ip is only set on node -> node proxy
// need to protect against x-client-ip spoof on client requests
// req.get is a case-insensitive match
// http://expressjs.com/en/api.html#req.get


function getIpsFromReq(req) {
  var zgIpHeader = req.headers['x-client-ip'] || req.headers['X-Client-Ip'];
  var xForwadedFor = req.headers['x-forwarded-for'];
  var socketRemoteAddres = (req.socket || {}).remoteAddress;
  return {
    zgIpHeader: zgIpHeader,
    xForwadedFor: xForwadedFor,
    socketRemoteAddres: socketRemoteAddres,
    defaultIpAddress: '0.0.0.0'
  };
}
function selectValidIp(req) {
  var _getIpsFromReq = getIpsFromReq(req),
      zgIpHeader = _getIpsFromReq.zgIpHeader,
      xForwadedFor = _getIpsFromReq.xForwadedFor,
      socketRemoteAddres = _getIpsFromReq.socketRemoteAddres,
      defaultIpAddress = _getIpsFromReq.defaultIpAddress;

  var ipByPrecedence = zgIpHeader || xForwadedFor || socketRemoteAddres || defaultIpAddress; // deal with comma delimited ips

  if (!Array.isArray(ipByPrecedence) && ipByPrecedence.indexOf(',') > -1) {
    var ipArr = ipByPrecedence.replace(/ /g, '').split(',');
    var filteredIps = ipArr.filter(function (ip) {
      return !ipRangeCheck(ip, '10.0.0.0/8') && !ipRangeCheck(ip, '172.16.1.0/12') && !ipRangeCheck(ip, '100.64.0.0/10');
    });

    if (filteredIps.length) {
      return filteredIps[0];
    }

    return defaultIpAddress;
  }

  return ipByPrecedence;
}

/***/ })

};
//# sourceMappingURL=index.fb1b8ef829911b7a5a34.hot-update.js.map