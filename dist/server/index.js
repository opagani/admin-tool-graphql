/******/ (function(modules) { // webpackBootstrap
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotDownloadUpdateChunk(chunkId) {
/******/ 		var chunk = require("./" + "" + chunkId + "." + hotCurrentHash + ".hot-update.js");
/******/ 		hotAddUpdateChunk(chunk.id, chunk.modules);
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotDownloadManifest() {
/******/ 		try {
/******/ 			var update = require("./" + "" + hotCurrentHash + ".hot-update.json");
/******/ 		} catch (e) {
/******/ 			return Promise.resolve();
/******/ 		}
/******/ 		return Promise.resolve(update);
/******/ 	}
/******/
/******/ 	//eslint-disable-next-line no-unused-vars
/******/ 	function hotDisposeChunk(chunkId) {
/******/ 		delete installedChunks[chunkId];
/******/ 	}
/******/
/******/ 	var hotApplyOnUpdate = true;
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentHash = "b6e768748d87c129c20a";
/******/ 	var hotRequestTimeout = 10000;
/******/ 	var hotCurrentModuleData = {};
/******/ 	var hotCurrentChildModule;
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentParents = [];
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentParentsTemp = [];
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateRequire(moduleId) {
/******/ 		var me = installedModules[moduleId];
/******/ 		if (!me) return __webpack_require__;
/******/ 		var fn = function(request) {
/******/ 			if (me.hot.active) {
/******/ 				if (installedModules[request]) {
/******/ 					if (installedModules[request].parents.indexOf(moduleId) === -1) {
/******/ 						installedModules[request].parents.push(moduleId);
/******/ 					}
/******/ 				} else {
/******/ 					hotCurrentParents = [moduleId];
/******/ 					hotCurrentChildModule = request;
/******/ 				}
/******/ 				if (me.children.indexOf(request) === -1) {
/******/ 					me.children.push(request);
/******/ 				}
/******/ 			} else {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" +
/******/ 						request +
/******/ 						") from disposed module " +
/******/ 						moduleId
/******/ 				);
/******/ 				hotCurrentParents = [];
/******/ 			}
/******/ 			return __webpack_require__(request);
/******/ 		};
/******/ 		var ObjectFactory = function ObjectFactory(name) {
/******/ 			return {
/******/ 				configurable: true,
/******/ 				enumerable: true,
/******/ 				get: function() {
/******/ 					return __webpack_require__[name];
/******/ 				},
/******/ 				set: function(value) {
/******/ 					__webpack_require__[name] = value;
/******/ 				}
/******/ 			};
/******/ 		};
/******/ 		for (var name in __webpack_require__) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(__webpack_require__, name) &&
/******/ 				name !== "e" &&
/******/ 				name !== "t"
/******/ 			) {
/******/ 				Object.defineProperty(fn, name, ObjectFactory(name));
/******/ 			}
/******/ 		}
/******/ 		fn.e = function(chunkId) {
/******/ 			if (hotStatus === "ready") hotSetStatus("prepare");
/******/ 			hotChunksLoading++;
/******/ 			return __webpack_require__.e(chunkId).then(finishChunkLoading, function(err) {
/******/ 				finishChunkLoading();
/******/ 				throw err;
/******/ 			});
/******/
/******/ 			function finishChunkLoading() {
/******/ 				hotChunksLoading--;
/******/ 				if (hotStatus === "prepare") {
/******/ 					if (!hotWaitingFilesMap[chunkId]) {
/******/ 						hotEnsureUpdateChunk(chunkId);
/******/ 					}
/******/ 					if (hotChunksLoading === 0 && hotWaitingFiles === 0) {
/******/ 						hotUpdateDownloaded();
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 		fn.t = function(value, mode) {
/******/ 			if (mode & 1) value = fn(value);
/******/ 			return __webpack_require__.t(value, mode & ~1);
/******/ 		};
/******/ 		return fn;
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateModule(moduleId) {
/******/ 		var hot = {
/******/ 			// private stuff
/******/ 			_acceptedDependencies: {},
/******/ 			_declinedDependencies: {},
/******/ 			_selfAccepted: false,
/******/ 			_selfDeclined: false,
/******/ 			_selfInvalidated: false,
/******/ 			_disposeHandlers: [],
/******/ 			_main: hotCurrentChildModule !== moduleId,
/******/
/******/ 			// Module API
/******/ 			active: true,
/******/ 			accept: function(dep, callback) {
/******/ 				if (dep === undefined) hot._selfAccepted = true;
/******/ 				else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._acceptedDependencies[dep[i]] = callback || function() {};
/******/ 				else hot._acceptedDependencies[dep] = callback || function() {};
/******/ 			},
/******/ 			decline: function(dep) {
/******/ 				if (dep === undefined) hot._selfDeclined = true;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._declinedDependencies[dep[i]] = true;
/******/ 				else hot._declinedDependencies[dep] = true;
/******/ 			},
/******/ 			dispose: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			addDisposeHandler: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			removeDisposeHandler: function(callback) {
/******/ 				var idx = hot._disposeHandlers.indexOf(callback);
/******/ 				if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 			},
/******/ 			invalidate: function() {
/******/ 				this._selfInvalidated = true;
/******/ 				switch (hotStatus) {
/******/ 					case "idle":
/******/ 						hotUpdate = {};
/******/ 						hotUpdate[moduleId] = modules[moduleId];
/******/ 						hotSetStatus("ready");
/******/ 						break;
/******/ 					case "ready":
/******/ 						hotApplyInvalidatedModule(moduleId);
/******/ 						break;
/******/ 					case "prepare":
/******/ 					case "check":
/******/ 					case "dispose":
/******/ 					case "apply":
/******/ 						(hotQueuedInvalidatedModules =
/******/ 							hotQueuedInvalidatedModules || []).push(moduleId);
/******/ 						break;
/******/ 					default:
/******/ 						// ignore requests in error states
/******/ 						break;
/******/ 				}
/******/ 			},
/******/
/******/ 			// Management API
/******/ 			check: hotCheck,
/******/ 			apply: hotApply,
/******/ 			status: function(l) {
/******/ 				if (!l) return hotStatus;
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			addStatusHandler: function(l) {
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			removeStatusHandler: function(l) {
/******/ 				var idx = hotStatusHandlers.indexOf(l);
/******/ 				if (idx >= 0) hotStatusHandlers.splice(idx, 1);
/******/ 			},
/******/
/******/ 			//inherit from previous dispose call
/******/ 			data: hotCurrentModuleData[moduleId]
/******/ 		};
/******/ 		hotCurrentChildModule = undefined;
/******/ 		return hot;
/******/ 	}
/******/
/******/ 	var hotStatusHandlers = [];
/******/ 	var hotStatus = "idle";
/******/
/******/ 	function hotSetStatus(newStatus) {
/******/ 		hotStatus = newStatus;
/******/ 		for (var i = 0; i < hotStatusHandlers.length; i++)
/******/ 			hotStatusHandlers[i].call(null, newStatus);
/******/ 	}
/******/
/******/ 	// while downloading
/******/ 	var hotWaitingFiles = 0;
/******/ 	var hotChunksLoading = 0;
/******/ 	var hotWaitingFilesMap = {};
/******/ 	var hotRequestedFilesMap = {};
/******/ 	var hotAvailableFilesMap = {};
/******/ 	var hotDeferred;
/******/
/******/ 	// The update info
/******/ 	var hotUpdate, hotUpdateNewHash, hotQueuedInvalidatedModules;
/******/
/******/ 	function toModuleId(id) {
/******/ 		var isNumber = +id + "" === id;
/******/ 		return isNumber ? +id : id;
/******/ 	}
/******/
/******/ 	function hotCheck(apply) {
/******/ 		if (hotStatus !== "idle") {
/******/ 			throw new Error("check() is only allowed in idle status");
/******/ 		}
/******/ 		hotApplyOnUpdate = apply;
/******/ 		hotSetStatus("check");
/******/ 		return hotDownloadManifest(hotRequestTimeout).then(function(update) {
/******/ 			if (!update) {
/******/ 				hotSetStatus(hotApplyInvalidatedModules() ? "ready" : "idle");
/******/ 				return null;
/******/ 			}
/******/ 			hotRequestedFilesMap = {};
/******/ 			hotWaitingFilesMap = {};
/******/ 			hotAvailableFilesMap = update.c;
/******/ 			hotUpdateNewHash = update.h;
/******/
/******/ 			hotSetStatus("prepare");
/******/ 			var promise = new Promise(function(resolve, reject) {
/******/ 				hotDeferred = {
/******/ 					resolve: resolve,
/******/ 					reject: reject
/******/ 				};
/******/ 			});
/******/ 			hotUpdate = {};
/******/ 			var chunkId = "index";
/******/ 			// eslint-disable-next-line no-lone-blocks
/******/ 			{
/******/ 				hotEnsureUpdateChunk(chunkId);
/******/ 			}
/******/ 			if (
/******/ 				hotStatus === "prepare" &&
/******/ 				hotChunksLoading === 0 &&
/******/ 				hotWaitingFiles === 0
/******/ 			) {
/******/ 				hotUpdateDownloaded();
/******/ 			}
/******/ 			return promise;
/******/ 		});
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotAddUpdateChunk(chunkId, moreModules) {
/******/ 		if (!hotAvailableFilesMap[chunkId] || !hotRequestedFilesMap[chunkId])
/******/ 			return;
/******/ 		hotRequestedFilesMap[chunkId] = false;
/******/ 		for (var moduleId in moreModules) {
/******/ 			if (Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				hotUpdate[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if (--hotWaitingFiles === 0 && hotChunksLoading === 0) {
/******/ 			hotUpdateDownloaded();
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotEnsureUpdateChunk(chunkId) {
/******/ 		if (!hotAvailableFilesMap[chunkId]) {
/******/ 			hotWaitingFilesMap[chunkId] = true;
/******/ 		} else {
/******/ 			hotRequestedFilesMap[chunkId] = true;
/******/ 			hotWaitingFiles++;
/******/ 			hotDownloadUpdateChunk(chunkId);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotUpdateDownloaded() {
/******/ 		hotSetStatus("ready");
/******/ 		var deferred = hotDeferred;
/******/ 		hotDeferred = null;
/******/ 		if (!deferred) return;
/******/ 		if (hotApplyOnUpdate) {
/******/ 			// Wrap deferred object in Promise to mark it as a well-handled Promise to
/******/ 			// avoid triggering uncaught exception warning in Chrome.
/******/ 			// See https://bugs.chromium.org/p/chromium/issues/detail?id=465666
/******/ 			Promise.resolve()
/******/ 				.then(function() {
/******/ 					return hotApply(hotApplyOnUpdate);
/******/ 				})
/******/ 				.then(
/******/ 					function(result) {
/******/ 						deferred.resolve(result);
/******/ 					},
/******/ 					function(err) {
/******/ 						deferred.reject(err);
/******/ 					}
/******/ 				);
/******/ 		} else {
/******/ 			var outdatedModules = [];
/******/ 			for (var id in hotUpdate) {
/******/ 				if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 					outdatedModules.push(toModuleId(id));
/******/ 				}
/******/ 			}
/******/ 			deferred.resolve(outdatedModules);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotApply(options) {
/******/ 		if (hotStatus !== "ready")
/******/ 			throw new Error("apply() is only allowed in ready status");
/******/ 		options = options || {};
/******/ 		return hotApplyInternal(options);
/******/ 	}
/******/
/******/ 	function hotApplyInternal(options) {
/******/ 		hotApplyInvalidatedModules();
/******/
/******/ 		var cb;
/******/ 		var i;
/******/ 		var j;
/******/ 		var module;
/******/ 		var moduleId;
/******/
/******/ 		function getAffectedStuff(updateModuleId) {
/******/ 			var outdatedModules = [updateModuleId];
/******/ 			var outdatedDependencies = {};
/******/
/******/ 			var queue = outdatedModules.map(function(id) {
/******/ 				return {
/******/ 					chain: [id],
/******/ 					id: id
/******/ 				};
/******/ 			});
/******/ 			while (queue.length > 0) {
/******/ 				var queueItem = queue.pop();
/******/ 				var moduleId = queueItem.id;
/******/ 				var chain = queueItem.chain;
/******/ 				module = installedModules[moduleId];
/******/ 				if (
/******/ 					!module ||
/******/ 					(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 				)
/******/ 					continue;
/******/ 				if (module.hot._selfDeclined) {
/******/ 					return {
/******/ 						type: "self-declined",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				if (module.hot._main) {
/******/ 					return {
/******/ 						type: "unaccepted",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				for (var i = 0; i < module.parents.length; i++) {
/******/ 					var parentId = module.parents[i];
/******/ 					var parent = installedModules[parentId];
/******/ 					if (!parent) continue;
/******/ 					if (parent.hot._declinedDependencies[moduleId]) {
/******/ 						return {
/******/ 							type: "declined",
/******/ 							chain: chain.concat([parentId]),
/******/ 							moduleId: moduleId,
/******/ 							parentId: parentId
/******/ 						};
/******/ 					}
/******/ 					if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 					if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 						if (!outdatedDependencies[parentId])
/******/ 							outdatedDependencies[parentId] = [];
/******/ 						addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 						continue;
/******/ 					}
/******/ 					delete outdatedDependencies[parentId];
/******/ 					outdatedModules.push(parentId);
/******/ 					queue.push({
/******/ 						chain: chain.concat([parentId]),
/******/ 						id: parentId
/******/ 					});
/******/ 				}
/******/ 			}
/******/
/******/ 			return {
/******/ 				type: "accepted",
/******/ 				moduleId: updateModuleId,
/******/ 				outdatedModules: outdatedModules,
/******/ 				outdatedDependencies: outdatedDependencies
/******/ 			};
/******/ 		}
/******/
/******/ 		function addAllToSet(a, b) {
/******/ 			for (var i = 0; i < b.length; i++) {
/******/ 				var item = b[i];
/******/ 				if (a.indexOf(item) === -1) a.push(item);
/******/ 			}
/******/ 		}
/******/
/******/ 		// at begin all updates modules are outdated
/******/ 		// the "outdated" status can propagate to parents if they don't accept the children
/******/ 		var outdatedDependencies = {};
/******/ 		var outdatedModules = [];
/******/ 		var appliedUpdate = {};
/******/
/******/ 		var warnUnexpectedRequire = function warnUnexpectedRequire() {
/******/ 			console.warn(
/******/ 				"[HMR] unexpected require(" + result.moduleId + ") to disposed module"
/******/ 			);
/******/ 		};
/******/
/******/ 		for (var id in hotUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 				moduleId = toModuleId(id);
/******/ 				/** @type {TODO} */
/******/ 				var result;
/******/ 				if (hotUpdate[id]) {
/******/ 					result = getAffectedStuff(moduleId);
/******/ 				} else {
/******/ 					result = {
/******/ 						type: "disposed",
/******/ 						moduleId: id
/******/ 					};
/******/ 				}
/******/ 				/** @type {Error|false} */
/******/ 				var abortError = false;
/******/ 				var doApply = false;
/******/ 				var doDispose = false;
/******/ 				var chainInfo = "";
/******/ 				if (result.chain) {
/******/ 					chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 				}
/******/ 				switch (result.type) {
/******/ 					case "self-declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of self decline: " +
/******/ 									result.moduleId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of declined dependency: " +
/******/ 									result.moduleId +
/******/ 									" in " +
/******/ 									result.parentId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "unaccepted":
/******/ 						if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 						if (!options.ignoreUnaccepted)
/******/ 							abortError = new Error(
/******/ 								"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "accepted":
/******/ 						if (options.onAccepted) options.onAccepted(result);
/******/ 						doApply = true;
/******/ 						break;
/******/ 					case "disposed":
/******/ 						if (options.onDisposed) options.onDisposed(result);
/******/ 						doDispose = true;
/******/ 						break;
/******/ 					default:
/******/ 						throw new Error("Unexception type " + result.type);
/******/ 				}
/******/ 				if (abortError) {
/******/ 					hotSetStatus("abort");
/******/ 					return Promise.reject(abortError);
/******/ 				}
/******/ 				if (doApply) {
/******/ 					appliedUpdate[moduleId] = hotUpdate[moduleId];
/******/ 					addAllToSet(outdatedModules, result.outdatedModules);
/******/ 					for (moduleId in result.outdatedDependencies) {
/******/ 						if (
/******/ 							Object.prototype.hasOwnProperty.call(
/******/ 								result.outdatedDependencies,
/******/ 								moduleId
/******/ 							)
/******/ 						) {
/******/ 							if (!outdatedDependencies[moduleId])
/******/ 								outdatedDependencies[moduleId] = [];
/******/ 							addAllToSet(
/******/ 								outdatedDependencies[moduleId],
/******/ 								result.outdatedDependencies[moduleId]
/******/ 							);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 				if (doDispose) {
/******/ 					addAllToSet(outdatedModules, [result.moduleId]);
/******/ 					appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Store self accepted outdated modules to require them later by the module system
/******/ 		var outdatedSelfAcceptedModules = [];
/******/ 		for (i = 0; i < outdatedModules.length; i++) {
/******/ 			moduleId = outdatedModules[i];
/******/ 			if (
/******/ 				installedModules[moduleId] &&
/******/ 				installedModules[moduleId].hot._selfAccepted &&
/******/ 				// removed self-accepted modules should not be required
/******/ 				appliedUpdate[moduleId] !== warnUnexpectedRequire &&
/******/ 				// when called invalidate self-accepting is not possible
/******/ 				!installedModules[moduleId].hot._selfInvalidated
/******/ 			) {
/******/ 				outdatedSelfAcceptedModules.push({
/******/ 					module: moduleId,
/******/ 					parents: installedModules[moduleId].parents.slice(),
/******/ 					errorHandler: installedModules[moduleId].hot._selfAccepted
/******/ 				});
/******/ 			}
/******/ 		}
/******/
/******/ 		// Now in "dispose" phase
/******/ 		hotSetStatus("dispose");
/******/ 		Object.keys(hotAvailableFilesMap).forEach(function(chunkId) {
/******/ 			if (hotAvailableFilesMap[chunkId] === false) {
/******/ 				hotDisposeChunk(chunkId);
/******/ 			}
/******/ 		});
/******/
/******/ 		var idx;
/******/ 		var queue = outdatedModules.slice();
/******/ 		while (queue.length > 0) {
/******/ 			moduleId = queue.pop();
/******/ 			module = installedModules[moduleId];
/******/ 			if (!module) continue;
/******/
/******/ 			var data = {};
/******/
/******/ 			// Call dispose handlers
/******/ 			var disposeHandlers = module.hot._disposeHandlers;
/******/ 			for (j = 0; j < disposeHandlers.length; j++) {
/******/ 				cb = disposeHandlers[j];
/******/ 				cb(data);
/******/ 			}
/******/ 			hotCurrentModuleData[moduleId] = data;
/******/
/******/ 			// disable module (this disables requires from this module)
/******/ 			module.hot.active = false;
/******/
/******/ 			// remove module from cache
/******/ 			delete installedModules[moduleId];
/******/
/******/ 			// when disposing there is no need to call dispose handler
/******/ 			delete outdatedDependencies[moduleId];
/******/
/******/ 			// remove "parents" references from all children
/******/ 			for (j = 0; j < module.children.length; j++) {
/******/ 				var child = installedModules[module.children[j]];
/******/ 				if (!child) continue;
/******/ 				idx = child.parents.indexOf(moduleId);
/******/ 				if (idx >= 0) {
/******/ 					child.parents.splice(idx, 1);
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// remove outdated dependency from module children
/******/ 		var dependency;
/******/ 		var moduleOutdatedDependencies;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 						dependency = moduleOutdatedDependencies[j];
/******/ 						idx = module.children.indexOf(dependency);
/******/ 						if (idx >= 0) module.children.splice(idx, 1);
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Now in "apply" phase
/******/ 		hotSetStatus("apply");
/******/
/******/ 		if (hotUpdateNewHash !== undefined) {
/******/ 			hotCurrentHash = hotUpdateNewHash;
/******/ 			hotUpdateNewHash = undefined;
/******/ 		}
/******/ 		hotUpdate = undefined;
/******/
/******/ 		// insert new code
/******/ 		for (moduleId in appliedUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(appliedUpdate, moduleId)) {
/******/ 				modules[moduleId] = appliedUpdate[moduleId];
/******/ 			}
/******/ 		}
/******/
/******/ 		// call accept handlers
/******/ 		var error = null;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					var callbacks = [];
/******/ 					for (i = 0; i < moduleOutdatedDependencies.length; i++) {
/******/ 						dependency = moduleOutdatedDependencies[i];
/******/ 						cb = module.hot._acceptedDependencies[dependency];
/******/ 						if (cb) {
/******/ 							if (callbacks.indexOf(cb) !== -1) continue;
/******/ 							callbacks.push(cb);
/******/ 						}
/******/ 					}
/******/ 					for (i = 0; i < callbacks.length; i++) {
/******/ 						cb = callbacks[i];
/******/ 						try {
/******/ 							cb(moduleOutdatedDependencies);
/******/ 						} catch (err) {
/******/ 							if (options.onErrored) {
/******/ 								options.onErrored({
/******/ 									type: "accept-errored",
/******/ 									moduleId: moduleId,
/******/ 									dependencyId: moduleOutdatedDependencies[i],
/******/ 									error: err
/******/ 								});
/******/ 							}
/******/ 							if (!options.ignoreErrored) {
/******/ 								if (!error) error = err;
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Load self accepted modules
/******/ 		for (i = 0; i < outdatedSelfAcceptedModules.length; i++) {
/******/ 			var item = outdatedSelfAcceptedModules[i];
/******/ 			moduleId = item.module;
/******/ 			hotCurrentParents = item.parents;
/******/ 			hotCurrentChildModule = moduleId;
/******/ 			try {
/******/ 				__webpack_require__(moduleId);
/******/ 			} catch (err) {
/******/ 				if (typeof item.errorHandler === "function") {
/******/ 					try {
/******/ 						item.errorHandler(err);
/******/ 					} catch (err2) {
/******/ 						if (options.onErrored) {
/******/ 							options.onErrored({
/******/ 								type: "self-accept-error-handler-errored",
/******/ 								moduleId: moduleId,
/******/ 								error: err2,
/******/ 								originalError: err
/******/ 							});
/******/ 						}
/******/ 						if (!options.ignoreErrored) {
/******/ 							if (!error) error = err2;
/******/ 						}
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				} else {
/******/ 					if (options.onErrored) {
/******/ 						options.onErrored({
/******/ 							type: "self-accept-errored",
/******/ 							moduleId: moduleId,
/******/ 							error: err
/******/ 						});
/******/ 					}
/******/ 					if (!options.ignoreErrored) {
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// handle errors in accept handlers and self accepted module load
/******/ 		if (error) {
/******/ 			hotSetStatus("fail");
/******/ 			return Promise.reject(error);
/******/ 		}
/******/
/******/ 		if (hotQueuedInvalidatedModules) {
/******/ 			return hotApplyInternal(options).then(function(list) {
/******/ 				outdatedModules.forEach(function(moduleId) {
/******/ 					if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 				});
/******/ 				return list;
/******/ 			});
/******/ 		}
/******/
/******/ 		hotSetStatus("idle");
/******/ 		return new Promise(function(resolve) {
/******/ 			resolve(outdatedModules);
/******/ 		});
/******/ 	}
/******/
/******/ 	function hotApplyInvalidatedModules() {
/******/ 		if (hotQueuedInvalidatedModules) {
/******/ 			if (!hotUpdate) hotUpdate = {};
/******/ 			hotQueuedInvalidatedModules.forEach(hotApplyInvalidatedModule);
/******/ 			hotQueuedInvalidatedModules = undefined;
/******/ 			return true;
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotApplyInvalidatedModule(moduleId) {
/******/ 		if (!Object.prototype.hasOwnProperty.call(hotUpdate, moduleId))
/******/ 			hotUpdate[moduleId] = modules[moduleId];
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {},
/******/ 			hot: hotCreateModule(moduleId),
/******/ 			parents: (hotCurrentParentsTemp = hotCurrentParents, hotCurrentParents = [], hotCurrentParentsTemp),
/******/ 			children: []
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, hotCreateRequire(moduleId));
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// __webpack_hash__
/******/ 	__webpack_require__.h = function() { return hotCurrentHash; };
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return hotCreateRequire(0)(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../modules/logger-base/src/index.ts":
/*!***************************************************************************************!*\
  !*** /Users/opagani/projects/zillowgroup/rentals-js/modules/logger-base/src/index.ts ***!
  \***************************************************************************************/
/*! exports provided: enforceSampleRate, trackChildLoggers, getLoggerChildren, getChild */
/*! exports used: enforceSampleRate, getLoggerChildren, trackChildLoggers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return enforceSampleRate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return trackChildLoggers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getLoggerChildren; });
/* unused harmony export getChild */
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_values_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.values.js */ "core-js/modules/es.object.values.js");
/* harmony import */ var core_js_modules_es_object_values_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_values_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_5__);






function enforceSampleRate(_ref) {
  var sampleRate = _ref.sampleRate,
      hooks = _ref.hooks;
  var wrappedHooks = {};

  if (typeof sampleRate === 'number') {
    var logMethod = hooks === null || hooks === void 0 ? void 0 : hooks.logMethod;

    if (logMethod) {
      wrappedHooks.logMethod = function (inputArgs, method, level) {
        if (Math.random() <= sampleRate) {
          logMethod.apply(this, [inputArgs, method, level]);
        }
      };
    } else {
      wrappedHooks.logMethod = function (inputArgs, method) {
        if (Math.random() <= sampleRate) {
          method.apply(this, inputArgs);
        }
      };
    }
  }

  return wrappedHooks;
} // Keep track of a logger's children so that we can
// A) keep the child log level in sync with the parent log level
// B) avoid creating multiple children with the same bindings

function trackChildLoggers(logger) {
  var children = {};
  logger.on('level-change', function _updateChildren(level, levelValue) {
    if (this === logger) {
      if (levelValue !== undefined) {
        Object.values(children).forEach(function (child) {
          child.level = level;
        });
      }

      return children;
    }
  });
  var makeChildLogger = logger.child.bind(logger); // @ts-ignore we're intentionally making child() return the same type as
  // pino(), so that child and parent loggers can be passed around interchangeably.

  logger.child = function (bindings) {
    var childOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    // If this child already exists, don't create a new one.
    var childId = bindings.name;

    if (!childId) {
      try {
        childId = JSON.stringify(bindings);
      } catch (err) {
        childId = 'rjs';
      }
    }

    var child = children[childId];

    if (!child) {
      child = makeChildLogger(bindings, childOptions);
      children[childId] = child;
    }

    return child;
  };
} // This isn't pretty, but it allows us to make logger children accessible
// without extending the pino.Logger type. This keeps our Logger portable
// and interoperable with anything that accepts a pino logger.

function getLoggerChildren(logger) {
  // In trackChildLoggers, we added a level-change listener that returns the logger's children.
  var listeners = logger.listeners('level-change'); // Find that event listener...

  var childListener = listeners.find(function (listener) {
    return listener.name === '_updateChildren';
  }); // and call it.

  if (childListener) {
    var children = childListener.call(logger, logger.level);
    return children;
  }

  return {};
}
function getChild(logger, childName) {
  return getLoggerChildren(logger)[childName];
}

/***/ }),

/***/ "../../modules/logger-node/src/get-child-logger.ts":
/*!**************************************************************************************************!*\
  !*** /Users/opagani/projects/zillowgroup/rentals-js/modules/logger-node/src/get-child-logger.ts ***!
  \**************************************************************************************************/
/*! exports provided: getChildLogger */
/*! exports used: getChildLogger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getChildLogger; });
/* harmony import */ var _get_node_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-node-logger */ "../../modules/logger-node/src/get-node-logger.ts");

function getChildLogger(name, options) {
  var logger = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Object(_get_node_logger__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(options);
  return logger.child({
    name: name
  });
}

/***/ }),

/***/ "../../modules/logger-node/src/get-http-logger.ts":
/*!*************************************************************************************************!*\
  !*** /Users/opagani/projects/zillowgroup/rentals-js/modules/logger-node/src/get-http-logger.ts ***!
  \*************************************************************************************************/
/*! exports provided: defaultSerializers, getHttpLogger */
/*! exports used: getHttpLogger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export defaultSerializers */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getHttpLogger; });
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.define-properties.js */ "core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var pino_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! pino-http */ "pino-http");
/* harmony import */ var pino_http__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(pino_http__WEBPACK_IMPORTED_MODULE_12__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














var defaultSerializers = {
  req: function req(_req) {
    return {
      id: _req.id,
      ip: _req.raw.get('X-Client-Ip'),
      userAgent: _req.raw.get('User-Agent'),
      referer: _req.raw.get('Referer'),
      method: _req.method,
      url: _req.url
    };
  },
  res: function res(_res) {
    return {
      statusCode: _res.statusCode
    };
  },
  err: function err(_err) {
    var _err$stack;

    return {
      name: _err.name,
      stack: (_err$stack = _err.stack) === null || _err$stack === void 0 ? void 0 : _err$stack.replace(/\s+/g, ' '),
      message: _err.message
    };
  }
};
function getHttpLogger(args) {
  if (!args.logger) {
    throw new Error('must pass a Logger to getHttpLogger');
  }

  return pino_http__WEBPACK_IMPORTED_MODULE_12___default()(_objectSpread(_objectSpread({
    genReqId: function genReqId(req) {
      return req.id || '';
    },
    customLogLevel: function customLogLevel(res, err) {
      return err ? 'error' : args.level || 'info';
    }
  }, args), {}, {
    serializers: _objectSpread(_objectSpread({}, defaultSerializers), args.serializers || {})
  }));
}

/***/ }),

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

/***/ "../../modules/logger-node/src/get-node-logger.ts":
/*!*************************************************************************************************!*\
  !*** /Users/opagani/projects/zillowgroup/rentals-js/modules/logger-node/src/get-node-logger.ts ***!
  \*************************************************************************************************/
/*! exports provided: resetLoggers, default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export resetLoggers */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getNodeLogger; });
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.define-properties.js */ "core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _zg_rentals_logger_base__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @zg-rentals/logger-base */ "../../modules/logger-base/src/index.ts");
/* harmony import */ var pino__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! pino */ "pino");
/* harmony import */ var pino__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(pino__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var pino_pretty__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! pino-pretty */ "pino-pretty");
/* harmony import */ var pino_pretty__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(pino_pretty__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var stream__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! stream */ "stream");
/* harmony import */ var stream__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(stream__WEBPACK_IMPORTED_MODULE_13__);










var _excluded = ["logPath", "silent", "colorize"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




 // @ts-ignore pino-pretty typing is incorrect

var levelColorize = pino_pretty__WEBPACK_IMPORTED_MODULE_12___default.a.colorizerFactory(true);
var activeLoggers = {};
var levelLabels = {
  '10': 'trace',
  '20': 'debug',
  '30': 'info',
  '40': 'warn',
  '50': 'error',
  '60': 'fatal'
};
var transports = {
  silent: function silent() {
    return new stream__WEBPACK_IMPORTED_MODULE_13__["Writable"]({
      write: function write(chunk, encoding, callback) {
        return callback();
      }
    });
  },
  pretty: function pretty() {
    return pino_pretty__WEBPACK_IMPORTED_MODULE_12___default()({
      destination: 1,
      colorize: true,
      ignore: 'pid,hostname',
      customPrettifiers: {
        // @ts-ignore pino-pretty typing is incorrect
        level: function level(_level) {
          return _level === 30 ? '' : levelColorize(_level);
        }
      }
    });
  },
  plain: function plain() {
    return pino_pretty__WEBPACK_IMPORTED_MODULE_12___default()({
      destination: 1,
      colorize: false,
      ignore: 'pid,hostname',
      customPrettifiers: {
        // @ts-ignore pino-pretty typing is incorrect
        level: function level(_level2) {
          return _level2 === 30 ? '' : "".concat(levelLabels[_level2], ":");
        }
      }
    });
  },
  file: function file(logPath) {
    return pino__WEBPACK_IMPORTED_MODULE_11___default.a.transport({
      targets: [// @ts-ignore type definition is wrong
      {
        target: 'pino/file',
        options: {
          destination: 1
        }
      }, // @ts-ignore type definition is wrong
      {
        target: 'pino/file',
        options: {
          destination: logPath,
          mkdir: true
        }
      }]
    });
  }
};
function resetLoggers() {
  activeLoggers = {};
}
function getNodeLogger() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      logPath = _ref.logPath,
      silent = _ref.silent,
      _ref$colorize = _ref.colorize,
      colorize = _ref$colorize === void 0 ? true : _ref$colorize,
      options = _objectWithoutProperties(_ref, _excluded);

  var loggerType = 'pretty';

  if (silent || options.level === 'silent') {
    loggerType = 'silent';
  } else if (logPath) {
    loggerType = 'file';
  } else if (process.env.CI === 'true' || !colorize) {
    loggerType = 'plain';
  }

  var logger = activeLoggers[logPath || loggerType];

  if (logger) {
    if (options.level && options.level !== logger.level) {
      logger.level = options.level;
    }

    return logger;
  }

  logger = pino__WEBPACK_IMPORTED_MODULE_11___default()(_objectSpread(_objectSpread({
    level: 'info',
    timestamp: !!logPath
  }, options), {}, {
    hooks: Object(_zg_rentals_logger_base__WEBPACK_IMPORTED_MODULE_10__[/* enforceSampleRate */ "a"])(options)
  }), transports[loggerType](logPath));
  Object(_zg_rentals_logger_base__WEBPACK_IMPORTED_MODULE_10__[/* trackChildLoggers */ "c"])(logger);
  activeLoggers[logPath || loggerType] = logger;
  return logger;
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

/***/ "../../modules/logger-node/src/log-sync.ts":
/*!******************************************************************************************!*\
  !*** /Users/opagani/projects/zillowgroup/rentals-js/modules/logger-node/src/log-sync.ts ***!
  \******************************************************************************************/
/*! exports provided: logSync, ResponseError, parseLookoutResponse, registerChildLoggers, getChildLoggerLevels, setChildLogLevels */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export logSync */
/* unused harmony export ResponseError */
/* unused harmony export parseLookoutResponse */
/* unused harmony export registerChildLoggers */
/* unused harmony export getChildLoggerLevels */
/* unused harmony export setChildLogLevels */
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/web.url.js */ "core-js/modules/web.url.js");
/* harmony import */ var core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.string.search.js */ "core-js/modules/es.string.search.js");
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.array.reduce.js */ "core-js/modules/es.array.reduce.js");
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_es_map_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/es.map.js */ "core-js/modules/es.map.js");
/* harmony import */ var core_js_modules_es_map_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_map_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var _zg_rentals_logger_base__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @zg-rentals/logger-base */ "../../modules/logger-base/src/index.ts");
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! node-fetch */ "node-fetch");
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_34__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }



































function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



function logSync(_x) {
  return _logSync.apply(this, arguments);
}

function _logSync() {
  _logSync = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(_ref) {
    var logger, _ref$lookoutApi, lookoutApi, apiKey, app, runSync, _runSync;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _runSync = function _runSync3() {
              _runSync = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                var levelsFromApi;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        _context2.prev = 0;
                        _context2.next = 3;
                        return registerChildLoggers({
                          logger: logger,
                          lookoutApi: lookoutApi,
                          apiKey: apiKey
                        });

                      case 3:
                        _context2.next = 5;
                        return getChildLoggerLevels({
                          apiKey: apiKey,
                          lookoutApi: lookoutApi,
                          app: app
                        });

                      case 5:
                        levelsFromApi = _context2.sent;
                        _context2.next = 8;
                        return setChildLogLevels({
                          logger: logger,
                          levelsFromApi: levelsFromApi
                        });

                      case 8:
                        _context2.next = 14;
                        break;

                      case 10:
                        _context2.prev = 10;
                        _context2.t0 = _context2["catch"](0);
                        logger && logger.error(_context2.t0);
                        return _context2.abrupt("return");

                      case 14:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2, null, [[0, 10]]);
              }));
              return _runSync.apply(this, arguments);
            };

            runSync = function _runSync2() {
              return _runSync.apply(this, arguments);
            };

            logger = _ref.logger, _ref$lookoutApi = _ref.lookoutApi, lookoutApi = _ref$lookoutApi === void 0 ? 'https://lookout.hotpads.com' : _ref$lookoutApi, apiKey = _ref.apiKey, app = _ref.app;
            runSync();
            setTimeout( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return runSync();

                    case 2:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            })), 5000);

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _logSync.apply(this, arguments);
}

var ResponseError = /*#__PURE__*/function (_Error) {
  _inherits(ResponseError, _Error);

  var _super = _createSuper(ResponseError);

  function ResponseError(errors) {
    var _this;

    _classCallCheck(this, ResponseError);

    _this = _super.call(this);

    _defineProperty(_assertThisInitialized(_this), "errors", void 0);

    _this.errors = errors;
    return _this;
  }

  _createClass(ResponseError, [{
    key: "toString",
    value: function toString() {
      return this.errors.map(function (_ref2) {
        var message = _ref2.message;
        return message;
      }).join(', ');
    }
  }]);

  return ResponseError;
}( /*#__PURE__*/_wrapNativeSuper(Error));
function parseLookoutResponse(_x2) {
  return _parseLookoutResponse.apply(this, arguments);
}

function _parseLookoutResponse() {
  _parseLookoutResponse = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(res) {
    var contentType;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            contentType = res.headers.get('content-type');

            if (!(res.status !== 200)) {
              _context4.next = 5;
              break;
            }

            throw new ResponseError([new Error("error querying ".concat(res.url, ": ").concat(res.statusText, " - ").concat(res.status))]);

          case 5:
            if (!(contentType && contentType.includes('application/json'))) {
              _context4.next = 11;
              break;
            }

            _context4.next = 8;
            return res.json();

          case 8:
            return _context4.abrupt("return", _context4.sent);

          case 11:
            _context4.next = 13;
            return res.text();

          case 13:
            return _context4.abrupt("return", _context4.sent);

          case 14:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _parseLookoutResponse.apply(this, arguments);
}

function registerChildLoggers(_x3) {
  return _registerChildLoggers.apply(this, arguments);
}

function _registerChildLoggers() {
  _registerChildLoggers = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(_ref3) {
    var logger, _ref3$lookoutApi, lookoutApi, apiKey, loggers, url, res;

    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            logger = _ref3.logger, _ref3$lookoutApi = _ref3.lookoutApi, lookoutApi = _ref3$lookoutApi === void 0 ? 'https://lookout.hotpads.com' : _ref3$lookoutApi, apiKey = _ref3.apiKey;
            loggers = Object.keys(Object(_zg_rentals_logger_base__WEBPACK_IMPORTED_MODULE_33__[/* getLoggerChildren */ "b"])(logger));
            url = new URL('lookout/api/node/logger/register', lookoutApi);
            url.search = new URLSearchParams({
              apiKey: apiKey
            }).toString();
            _context5.next = 6;
            return node_fetch__WEBPACK_IMPORTED_MODULE_34___default()(url, {
              method: 'post',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                env: process.env.ZG_ENV,
                loggers: loggers
              })
            });

          case 6:
            res = _context5.sent;
            _context5.next = 9;
            return parseLookoutResponse(res);

          case 9:
            return _context5.abrupt("return", _context5.sent);

          case 10:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _registerChildLoggers.apply(this, arguments);
}

function getChildLoggerLevels(_x4) {
  return _getChildLoggerLevels.apply(this, arguments);
}

function _getChildLoggerLevels() {
  _getChildLoggerLevels = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(_ref4) {
    var apiKey, app, _ref4$lookoutApi, lookoutApi, url, res;

    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            apiKey = _ref4.apiKey, app = _ref4.app, _ref4$lookoutApi = _ref4.lookoutApi, lookoutApi = _ref4$lookoutApi === void 0 ? 'https://lookout.hotpads.com' : _ref4$lookoutApi;
            url = new URL('lookout/api/node/logger/get', lookoutApi);
            url.search = new URLSearchParams({
              apiKey: apiKey,
              app: app,
              env: process.env.ZG_ENV || ''
            }).toString();
            _context6.next = 5;
            return node_fetch__WEBPACK_IMPORTED_MODULE_34___default()(url, {
              method: 'get',
              headers: {
                'Content-Type': 'application/json'
              }
            });

          case 5:
            res = _context6.sent;
            _context6.next = 8;
            return parseLookoutResponse(res);

          case 8:
            return _context6.abrupt("return", _context6.sent);

          case 9:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));
  return _getChildLoggerLevels.apply(this, arguments);
}

function setChildLogLevels(_x5) {
  return _setChildLogLevels.apply(this, arguments);
}

function _setChildLogLevels() {
  _setChildLogLevels = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(_ref5) {
    var logger, levelsFromApi, customLevelLoggers, children;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            logger = _ref5.logger, levelsFromApi = _ref5.levelsFromApi;
            customLevelLoggers = levelsFromApi.reduce(function (acc, child) {
              acc[child.name] = child.level;
              return acc;
            }, {});
            children = Object(_zg_rentals_logger_base__WEBPACK_IMPORTED_MODULE_33__[/* getLoggerChildren */ "b"])(logger);
            Object.keys(children).forEach(function (name) {
              if (customLevelLoggers[name]) {
                children[name].level = customLevelLoggers[name];
              }
            });

          case 4:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));
  return _setChildLogLevels.apply(this, arguments);
}

/***/ }),

/***/ "../../modules/logger-node/src/verbosity-to-level.ts":
/*!****************************************************************************************************!*\
  !*** /Users/opagani/projects/zillowgroup/rentals-js/modules/logger-node/src/verbosity-to-level.ts ***!
  \****************************************************************************************************/
/*! exports provided: verbosityToLogLevel */
/*! exports used: verbosityToLogLevel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return verbosityToLogLevel; });
function verbosityToLogLevel() {
  var verbosity = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;
  var levels = ['error', 'warn', 'info', 'debug', 'trace'];

  if (verbosity > levels.length - 1) {
    throw new Error('invalid verbosity set: ' + verbosity);
  }

  return levels[verbosity];
}

/***/ }),

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
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3__);
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
    this._initializeReporters = this._initializeReporters.bind(this);
    this._trackMonitorStart = this._trackMonitorStart.bind(this);
    this._initializePlugins = this._initializePlugins.bind(this);
    this.increment = this.increment.bind(this);
    this.error = this.error.bind(this);
    this.gauge = this.gauge.bind(this);

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

/***/ "../../modules/particles-js-utils/src/Batch.ts":
/*!**********************************************************************************************!*\
  !*** /Users/opagani/projects/zillowgroup/rentals-js/modules/particles-js-utils/src/Batch.ts ***!
  \**********************************************************************************************/
/*! exports provided: Batch */
/*! exports used: Batch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Batch; });
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.promise.finally.js */ "core-js/modules/es.promise.finally.js");
/* harmony import */ var core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_set_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.set.js */ "core-js/modules/es.set.js");
/* harmony import */ var core_js_modules_es_set_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9__);











function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var defaults = {
  flushIntervalMs: 5000,
  flushItemsThreshold: 3000,
  flushUniqueItemsThreshold: 150
};
var LOG_PREFIX = 'particles-js-utils#Batch: ';
var Batch = // don't use our particles logger, since this class is used by the logger at instantiation
function Batch(options) {
  var _this = this;

  _classCallCheck(this, Batch);

  _defineProperty(this, "flushIntervalMs", void 0);

  _defineProperty(this, "flushItemsThreshold", void 0);

  _defineProperty(this, "flushUniqueItemsThreshold", void 0);

  _defineProperty(this, "flushTimeout", void 0);

  _defineProperty(this, "flushing", void 0);

  _defineProperty(this, "onFlush", void 0);

  _defineProperty(this, "bufferUniqueIds", void 0);

  _defineProperty(this, "buffer", void 0);

  _defineProperty(this, "logger", void 0);

  _defineProperty(this, "debug", void 0);

  _defineProperty(this, "log", function () {
    var _this$logger;

    if (!_this.debug) return;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    (_this$logger = _this.logger).debug.apply(_this$logger, [LOG_PREFIX].concat(args));
  });

  _defineProperty(this, "hasHitUniqueThreshold", function () {
    var bufferUniqueIds = _this.bufferUniqueIds,
        flushUniqueItemsThreshold = _this.flushUniqueItemsThreshold,
        log = _this.log;
    var brokeThreshold = bufferUniqueIds.size >= flushUniqueItemsThreshold;

    if (!brokeThreshold) {
      return false;
    }

    log('batch unique threshold reached, trigger flush', {
      uniqueIdSize: bufferUniqueIds.size,
      threshold: flushUniqueItemsThreshold
    });
    return true;
  });

  _defineProperty(this, "hasHitSizeThreshold", function () {
    var buffer = _this.buffer,
        flushItemsThreshold = _this.flushItemsThreshold,
        log = _this.log;
    var brokeThreshold = buffer.length >= flushItemsThreshold;

    if (!brokeThreshold) {
      return false;
    }

    log('batch buffer size threshold reached, trigger flush', {
      bufferSize: buffer.length,
      threshold: flushItemsThreshold
    });
    return true;
  });

  _defineProperty(this, "add", function (id, metric) {
    _this.bufferUniqueIds.add(id);

    _this.buffer.push(metric);

    if (!_this.flushing && (_this.hasHitSizeThreshold() || _this.hasHitUniqueThreshold())) {
      return _this.flush();
    }

    return Promise.resolve();
  });

  _defineProperty(this, "finishFlush", function () {
    _this.flushing = false;

    if (!_this.flushTimeout) {
      _this.startFlushTimeout();
    }
  });

  _defineProperty(this, "flush", function () {
    var items = _this.buffer,
        log = _this.log,
        reset = _this.reset,
        onFlush = _this.onFlush;
    _this.flushing = true;
    log('triggering flush');
    reset();

    if (!items.length) {
      log('nothing to flush');

      _this.finishFlush();

      return Promise.resolve();
    }

    return onFlush(items)["finally"](function () {
      _this.finishFlush();
    });
  });

  _defineProperty(this, "reset", function () {
    _this.bufferUniqueIds = new Set();
    _this.buffer = [];

    if (_this.flushTimeout) {
      clearTimeout(_this.flushTimeout);
      _this.flushTimeout = undefined;
    }
  });

  _defineProperty(this, "startFlushTimeout", function () {
    _this.log('starting flush timeout', _this.flushIntervalMs);

    _this.flushTimeout = setTimeout(function () {
      return _this.flush();
    }, _this.flushIntervalMs);
  });

  this.flushIntervalMs = options.flushIntervalMs || defaults.flushIntervalMs;
  this.flushItemsThreshold = options.flushItemsThreshold || defaults.flushItemsThreshold;
  this.flushUniqueItemsThreshold = options.flushUniqueItemsThreshold || defaults.flushUniqueItemsThreshold;
  this.flushing = false;
  this.onFlush = options.onFlush;
  this.logger = console;
  this.debug = options.debug || false;
  this.bufferUniqueIds = new Set();
  this.buffer = [];
  this.reset();
  this.startFlushTimeout();
};

/***/ }),

/***/ "../../modules/particles-js-utils/src/constants.ts":
/*!**************************************************************************************************!*\
  !*** /Users/opagani/projects/zillowgroup/rentals-js/modules/particles-js-utils/src/constants.ts ***!
  \**************************************************************************************************/
/*! exports provided: messages */
/*! exports used: messages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return messages; });
var messages = {
  NODE_SERVER_START_FAILURE: 'node server failed to start',
  NODE_SERVER_START_SUCCESS: 'server started and listening'
};

/***/ }),

/***/ "../../modules/particles-js-utils/src/deprecate.ts":
/*!**************************************************************************************************!*\
  !*** /Users/opagani/projects/zillowgroup/rentals-js/modules/particles-js-utils/src/deprecate.ts ***!
  \**************************************************************************************************/
/*! exports provided: deprecateMessage */
/*! exports used: deprecateMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return deprecateMessage; });
var deprecateMessage = function deprecateMessage(msg) {
  console.warn('[DEPRECATED]: this feature will be deprecated in the next major release. ' + msg);
};

/***/ }),

/***/ "../../modules/particles-js-utils/src/environmentUtils.ts":
/*!*********************************************************************************************************!*\
  !*** /Users/opagani/projects/zillowgroup/rentals-js/modules/particles-js-utils/src/environmentUtils.ts ***!
  \*********************************************************************************************************/
/*! exports provided: isProd, isStaging */
/*! exports used: isProd, isStaging */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isProd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isStaging; });
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _deprecate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deprecate */ "../../modules/particles-js-utils/src/deprecate.ts");


var prodEnvList = ['production', 'production-docker'];
var isProd = function isProd() {
  var zgEnv = process.env.ZG_ENV;
  if (!zgEnv) return false;
  return prodEnvList.includes(zgEnv);
};
var stageEnvList = ['comet-1'];
var isStaging = function isStaging() {
  Object(_deprecate__WEBPACK_IMPORTED_MODULE_1__[/* deprecateMessage */ "a"])('Please use the EnvrionmentUtil class from @zg-rentals/particles-js-utils/lib/server');
  var zgEnv = process.env.ZG_ENV;
  if (!zgEnv) return false;
  return stageEnvList.includes(zgEnv);
};

/***/ }),

/***/ "../../modules/particles-js-utils/src/getBrand.ts":
/*!*************************************************************************************************!*\
  !*** /Users/opagani/projects/zillowgroup/rentals-js/modules/particles-js-utils/src/getBrand.ts ***!
  \*************************************************************************************************/
/*! exports provided: findBrand, getBrand */
/*! exports used: getBrand */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export findBrand */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getBrand; });
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cookie */ "cookie");
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_3__);




var BRANDS = ['hotpads', 'trulia', 'zillow'];
function findBrand(search) {
  if (!search) return '';
  var foundBrand = BRANDS.find(function (brand) {
    return search.includes(brand);
  });

  if (foundBrand) {
    return foundBrand;
  } else {
    // staging server specific to brands
    // useful for production builds (do not respect cookie) deployed on non-production servers
    if (search.includes('testpads')) {
      return 'hotpads';
    }
  }

  return '';
}
function getBrand(req) {
  var isDev = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var brand = null;

  if (isDev) {
    if ('cookies' in req) {
      brand = findBrand(req.cookies.dev_brand);
    }

    if (brand) {
      return brand;
    }

    if (req.headers.cookie) {
      var headerCookies = cookie__WEBPACK_IMPORTED_MODULE_3___default.a.parse(req.headers.cookie);
      brand = findBrand(headerCookies.dev_brand);

      if (brand) {
        return brand;
      }
    }
  }

  brand = findBrand(req.headers['X-Forwarded-Host'] || req.headers.host);

  if (brand) {
    return brand;
  } // array.find returns undefined if no match
  // cannot return undefined, will break request headers


  if (!brand) {
    return null;
  }
}

/***/ }),

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

  return Array.isArray(ipByPrecedence) ? ipByPrecedence[0] : ipByPrecedence;
}

/***/ }),

/***/ "../../modules/particles-js-utils/src/helpers/propertiesReader.ts":
/*!*****************************************************************************************************************!*\
  !*** /Users/opagani/projects/zillowgroup/rentals-js/modules/particles-js-utils/src/helpers/propertiesReader.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: properties */
/*! exports used: properties */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return properties; });
/* harmony import */ var properties_reader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! properties-reader */ "properties-reader");
/* harmony import */ var properties_reader__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(properties_reader__WEBPACK_IMPORTED_MODULE_0__);


function properties(propertiesFilePath) {
  return properties_reader__WEBPACK_IMPORTED_MODULE_0___default()(propertiesFilePath);
}



/***/ }),

/***/ "../../modules/particles-js-utils/src/http.ts":
/*!*********************************************************************************************!*\
  !*** /Users/opagani/projects/zillowgroup/rentals-js/modules/particles-js-utils/src/http.ts ***!
  \*********************************************************************************************/
/*! exports provided: axiosErrorHandler */
/*! exports used: axiosErrorHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return axiosErrorHandler; });
function axiosErrorHandler(error, logger) {
  var logPrefix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'axios';

  if (error.response) {
    logger.error({
      data: error.response.data,
      status: error.response.status,
      headers: error.response.headers
    }, logPrefix + ': server responded with bad http status code');
  } else if (error.request) {
    logger.error({
      request: {
        xClientIp: error.request.getHeader('x-client-ip'),
        xBrand: error.request.getHeader('x-brand'),
        path: error.request.path,
        cookie: error.request.getHeader('cookie')
      },
      stack: error.stack,
      msg: error.message
    }, logPrefix + ': server did not response to http request');
  } else {
    logger.error({
      stack: error.stack,
      msg: error.message
    }, logPrefix + ': request did not successfully send');
  }
}

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

      if (name.includes('production')) {
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
      return ['comet1', 'ttest', 'ztest', 'sherman'].indexOf(environment) > -1;
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

/***/ "../../modules/particles-js-utils/src/safeCreateLogger.ts":
/*!*********************************************************************************************************!*\
  !*** /Users/opagani/projects/zillowgroup/rentals-js/modules/particles-js-utils/src/safeCreateLogger.ts ***!
  \*********************************************************************************************************/
/*! exports provided: safeCreateLogger, safeUseLogger */
/*! exports used: safeCreateLogger, safeUseLogger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return safeCreateLogger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return safeUseLogger; });
function safeCreateLogger(log, name) {
  if (log) {
    return log.child({
      name: name
    });
  } else {
    var logger = {
      child: function child() {
        return this;
      },
      trace: function trace() {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        console.log(args);
      },
      debug: function debug() {
        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        console.log(args);
      },
      info: function info() {
        for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
          args[_key3] = arguments[_key3];
        }

        console.log(args);
      },
      warn: function warn() {
        for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
          args[_key4] = arguments[_key4];
        }

        console.log(args);
      },
      error: function error() {
        for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
          args[_key5] = arguments[_key5];
        }

        console.log(args);
      },
      fatal: function fatal() {
        for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
          args[_key6] = arguments[_key6];
        }

        console.log(args);
      }
    };
    return logger;
  }
}
function safeUseLogger(logger, log, backupName) {
  // try to use a created logger
  if (logger) {
    return logger;
  } else {
    return safeCreateLogger(log, backupName);
  }
}

/***/ }),

/***/ "../../modules/particles-js-utils/src/shutdownListener.ts":
/*!*********************************************************************************************************!*\
  !*** /Users/opagani/projects/zillowgroup/rentals-js/modules/particles-js-utils/src/shutdownListener.ts ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ShutdownListener = function ShutdownListener(onShutdown) {
  var onSigInt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : onShutdown;

  _classCallCheck(this, ShutdownListener);

  console.log({
    msg: '[DEPRECATED]: ShutdownListener class has been deprecated. please use particles-js-notify instead.',
    level: 50
  });
  process.on('SIGINT', function () {
    onSigInt();
  });
  process.on('message', function (_ref) {
    var topic = _ref.topic;

    if (topic === 'TRIGGER_SHUTDOWN') {
      onShutdown();
    }
  });
};



/***/ }),

/***/ "../../modules/particles-js-utils/src/testUtils.ts":
/*!**************************************************************************************************!*\
  !*** /Users/opagani/projects/zillowgroup/rentals-js/modules/particles-js-utils/src/testUtils.ts ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0__);


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* requires jest to run
 */
var TestUtility = function TestUtility() {
  var _this = this;

  _classCallCheck(this, TestUtility);

  _defineProperty(this, "output", void 0);

  _defineProperty(this, "write", void 0);

  _defineProperty(this, "getOutput", function () {
    return _this.output;
  });

  _defineProperty(this, "mockStdout", function () {
    jest.spyOn(process.stdout, 'write').mockImplementation(function (data) {
      _this.output += data;
      return true;
    });
  });

  _defineProperty(this, "clearOutput", function () {
    _this.output = '';
  });

  _defineProperty(this, "restoreStdout", function () {
    process.stdout.write = _this.write;
  });

  this.output = '';
  this.write = process.stdout.write;
};



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

            if (!batch.headers) {
              batch.headers = {};
            }

            if (metrics.headers) {
              Object.assign(batch.headers, metrics.headers);
            }

            mergeCounts(batch.counts, metrics.counts);
            throttledSendCounts();

          case 5:
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

            if (!batch.headers) {
              batch.headers = {};
            }

            if (metrics.headers) {
              Object.assign(batch.headers, metrics.headers);
            }

            mergeGauges(batch.gauges, metrics.gauges);
            throttledSendGauges();

          case 5:
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

/***/ "../../modules/trace-base/src/index.ts":
/*!**************************************************************************************!*\
  !*** /Users/opagani/projects/zillowgroup/rentals-js/modules/trace-base/src/index.ts ***!
  \**************************************************************************************/
/*! exports provided: ASYNC_FN_MATCHER, TracerInterface, default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ASYNC_FN_MATCHER */
/* unused harmony export TracerInterface */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseTracer; });
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.match.js */ "core-js/modules/es.string.match.js");
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.object.define-properties.js */ "core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_15__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


















function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* eslint-disable @typescript-eslint/ban-types */
// ASYNC_FN_MATCHER matches any stringified function that accepts one or more arguments/callbacks
// YES: (arg) => { ... }
// YES: arg => { ... }
// YES: function hello ( goodbye ) { ... }
// NO: ( ) => { ... }
// NO: function test() { ... }
// NO: function( ) { ... }
var ASYNC_FN_MATCHER = /^(\(?\s*\w+\s*\)?\s*=>|function(\s+\w*\s*)?\(\s*\w)/;
var TracerInterface = function TracerInterface() {
  _classCallCheck(this, TracerInterface);
};

var BaseTracer = /*#__PURE__*/function () {
  function BaseTracer() {
    _classCallCheck(this, BaseTracer);
  }

  _createClass(BaseTracer, [{
    key: "trace",
    value: function trace(fn, name, tags) {
      throw new Error("Not Implemented: Tracer.trace(".concat(fn, ", ").concat(name, ", ").concat(tags, ")"));
      return fn();
    }
  }, {
    key: "wrap",
    value: function wrap(fn) {
      var _this = this;

      var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : fn.name;
      var tags = arguments.length > 2 ? arguments[2] : undefined;
      return function () {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return _this.trace(function () {
          return fn.apply(_this, args);
        }, name, tags);
      };
    }
  }, {
    key: "setSpanTag",
    value: function setSpanTag(key, value) {
      var span = this.getCurrentSpan();

      if (span) {
        span.setTags(_defineProperty({}, key, value));
      }
    }
  }, {
    key: "getSpanTag",
    value: function getSpanTag(key) {
      var span = this.getCurrentSpan();

      if (span) {
        return span.getTags()[key];
      }
    }
  }, {
    key: "getCurrentTrace",
    value: function getCurrentTrace() {
      throw new Error("Not Implemented: Tracer.getCurrentTrace()");
      return {
        traceId: 'traceId',
        sessionId: 'sessionId',
        doSave: false,
        tags: {}
      };
    }
  }, {
    key: "getCurrentSpan",
    value: function getCurrentSpan() {
      throw new Error("Not Implemented: Tracer.getCurrentSpan()");
      return undefined;
    }
  }, {
    key: "getCurrentTags",
    value: function getCurrentTags() {
      var trace = this.getCurrentTrace();
      var span = this.getCurrentSpan();
      return _objectSpread(_objectSpread({}, trace.tags), span === null || span === void 0 ? void 0 : span.getTags());
    }
  }, {
    key: "setSaveTrace",
    value: function setSaveTrace(doSave) {
      var trace = this.getCurrentTrace();
      trace.doSave = doSave;
    }
  }], [{
    key: "isAsyncFunction",
    value: function isAsyncFunction(fn) {
      return !!fn.toString().match(ASYNC_FN_MATCHER);
    }
  }]);

  return BaseTracer;
}();



/***/ }),

/***/ "../../modules/trace-node/src/index.ts":
/*!**************************************************************************************!*\
  !*** /Users/opagani/projects/zillowgroup/rentals-js/modules/trace-node/src/index.ts ***!
  \**************************************************************************************/
/*! exports provided: TRACE_COOKIE_NAME, TRACE_COOKIE_DURATION_SEC, SESSION_ID_LENGTH, TRACE_ID_LENGTH, SPAN_ID_LENGTH, NodeTracer, DatadogTracerPlugin, BaseSpan, BaseTracerPlugin, ASYNC_FN_MATCHER */
/*! exports used: DatadogTracerPlugin, NodeTracer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _tracer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tracer */ "../../modules/trace-node/src/tracer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _tracer__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony import */ var _plugins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./plugins */ "../../modules/trace-node/src/plugins/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _plugins__WEBPACK_IMPORTED_MODULE_1__["b"]; });




/***/ }),

/***/ "../../modules/trace-node/src/plugins/base.ts":
/*!*********************************************************************************************!*\
  !*** /Users/opagani/projects/zillowgroup/rentals-js/modules/trace-node/src/plugins/base.ts ***!
  \*********************************************************************************************/
/*! exports provided: BaseSpan, BaseTracerPlugin */
/*! exports used: BaseTracerPlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export BaseSpan */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseTracerPlugin; });
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.assign.js */ "core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.promise.finally.js */ "core-js/modules/es.promise.finally.js");
/* harmony import */ var core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _zg_rentals_trace_base__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @zg-rentals/trace-base */ "../../modules/trace-base/src/index.ts");







function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var BaseSpan = /*#__PURE__*/function () {
  function BaseSpan(onFinish) {
    _classCallCheck(this, BaseSpan);

    _defineProperty(this, "tags", {});

    _defineProperty(this, "onFinish", void 0);

    _defineProperty(this, "spanId", '');

    _defineProperty(this, "traceId", '');

    this.onFinish = onFinish;
  }

  _createClass(BaseSpan, [{
    key: "getTags",
    value: function getTags() {
      return this.tags;
    }
  }, {
    key: "setTags",
    value: function setTags(tags) {
      Object.assign(this.tags, tags);
    }
  }, {
    key: "finish",
    value: function finish() {
      if (this.onFinish) {
        this.onFinish();
      }
    }
  }]);

  return BaseSpan;
}();
var BaseTracerPlugin = /*#__PURE__*/function () {
  function BaseTracerPlugin() {
    _classCallCheck(this, BaseTracerPlugin);

    _defineProperty(this, "activeSpan", void 0);
  }

  _createClass(BaseTracerPlugin, [{
    key: "trace",
    value: function trace(fn, name, tags) {
      var span = this.startSpan();
      var finish = span.finish.bind(span);
      Object.assign(span.tags, tags, {
        name: name
      });

      if (_zg_rentals_trace_base__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].isAsyncFunction(fn)) {
        return fn(finish);
      }

      var ret = fn(finish);

      if (ret instanceof Promise) {
        return ret["finally"](finish);
      }

      finish();
      return ret;
    }
  }, {
    key: "setTags",
    value: function setTags(tags) {
      if (this.activeSpan) {
        Object.assign(this.activeSpan.tags, tags);
      }
    }
  }, {
    key: "parseRequestTags",
    value: function parseRequestTags() {
      return {};
    }
  }, {
    key: "startSpan",
    value: function startSpan() {
      var _this = this;

      this.activeSpan = new BaseSpan(function () {
        delete _this.activeSpan;
      });
      return this.activeSpan;
    }
  }, {
    key: "getCurrentSpan",
    value: function getCurrentSpan() {
      return this.activeSpan;
    }
  }, {
    key: "getAllTags",
    value: function getAllTags() {
      var _this$activeSpan;

      return (_this$activeSpan = this.activeSpan) === null || _this$activeSpan === void 0 ? void 0 : _this$activeSpan.tags;
    }
  }]);

  return BaseTracerPlugin;
}();

/***/ }),

/***/ "../../modules/trace-node/src/plugins/datadog.ts":
/*!************************************************************************************************!*\
  !*** /Users/opagani/projects/zillowgroup/rentals-js/modules/trace-node/src/plugins/datadog.ts ***!
  \************************************************************************************************/
/*! exports provided: DatadogTracerPlugin */
/*! exports used: DatadogTracerPlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatadogTracerPlugin; });
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.assign.js */ "core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var dd_trace__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! dd-trace */ "dd-trace");
/* harmony import */ var dd_trace__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(dd_trace__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _zg_rentals_trace_base__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @zg-rentals/trace-base */ "../../modules/trace-base/src/index.ts");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



// DataDog automatically adds these tags to each span,
// but we don't necessarily want to include them in every log
var DD_TAG_BLACKLIST = {
  _sample_rate: true,
  'service.name': true,
  service: true,
  env: true,
  version: true,
  'resource.name': true
};
var DatadogTracerPlugin = /*#__PURE__*/function () {
  function DatadogTracerPlugin(options) {
    _classCallCheck(this, DatadogTracerPlugin);

    _defineProperty(this, "tracer", void 0);

    if (options.runtimeMetrics === undefined) {
      options.runtimeMetrics = true;
    }

    this.tracer = dd_trace__WEBPACK_IMPORTED_MODULE_18___default.a.init(options);
  }

  _createClass(DatadogTracerPlugin, [{
    key: "trace",
    value: function trace(fn, name, tags) {
      var _this = this;

      if (_zg_rentals_trace_base__WEBPACK_IMPORTED_MODULE_19__[/* default */ "a"].isAsyncFunction(fn)) {
        return this.tracer.trace(name, function (_, done) {
          _this.setTags(tags);

          return fn(done);
        });
      }

      return this.tracer.trace(name, function () {
        _this.setTags(tags);

        return fn(function () {
          return _this.endSpan();
        });
      });
    }
  }, {
    key: "scopeToSpan",
    value: function scopeToSpan(scope) {
      var context = scope.context();
      return Object.assign(scope, {
        spanId: context.toSpanId(),
        traceId: context.toTraceId(),
        getTags: function getTags() {
          return context._tags || {};
        },
        setTags: function setTags(tags) {
          return scope.addTags(tags);
        },
        finish: scope.finish
      });
    }
  }, {
    key: "startSpan",
    value: function startSpan(name) {
      var scope = this.tracer.startSpan(name);
      return this.scopeToSpan(scope);
    }
  }, {
    key: "endSpan",
    value: function endSpan() {
      var span = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.getCurrentSpan();
      span === null || span === void 0 ? void 0 : span.finish();
    }
  }, {
    key: "getCurrentSpan",
    value: function getCurrentSpan() {
      var scope = this.tracer.scope().active();

      if (scope) {
        return this.scopeToSpan(scope);
      }

      return;
    }
  }, {
    key: "setTags",
    value: function setTags(tags) {
      var span = this.getCurrentSpan();

      if (span) {
        span.setTags(tags);
      }
    }
  }, {
    key: "getAllTags",
    value: function getAllTags() {
      var span = this.getCurrentSpan();
      var spanTags = (span === null || span === void 0 ? void 0 : span.getTags()) || {};

      if (!spanTags.ddTraceID) {
        spanTags.ddTraceID = span === null || span === void 0 ? void 0 : span.traceId;
      }

      var filteredTags = {};
      var hasTags;
      Object.keys(spanTags).forEach(function (key) {
        if (!DD_TAG_BLACKLIST[key]) {
          hasTags = true;
          filteredTags[key] = spanTags[key];
        }
      });
      return hasTags ? filteredTags : undefined;
    }
  }, {
    key: "parseRequestTags",
    value: function parseRequestTags(req, parseCookie) {
      var tags = {};
      var ddTraceId = req.headers['x-datadog-trace-id'];

      if (ddTraceId) {
        tags.ddTrcID = ddTraceId.split(', ')[0];
      }

      var ddCookie = parseCookie('_dd_s', req) || '';

      var _ddCookie$split = ddCookie.split('&id='),
          _ddCookie$split2 = _slicedToArray(_ddCookie$split, 2),
          _ddCookie$split2$ = _ddCookie$split2[1],
          ddCookieFragment = _ddCookie$split2$ === void 0 ? '' : _ddCookie$split2$;

      var _ddCookieFragment$spl = ddCookieFragment.split('&'),
          _ddCookieFragment$spl2 = _slicedToArray(_ddCookieFragment$spl, 1),
          ddSessionId = _ddCookieFragment$spl2[0];

      if (ddSessionId) {
        tags.ddSesID = ddSessionId;
      }

      return tags;
    }
  }]);

  return DatadogTracerPlugin;
}();

/***/ }),

/***/ "../../modules/trace-node/src/plugins/index.ts":
/*!**********************************************************************************************!*\
  !*** /Users/opagani/projects/zillowgroup/rentals-js/modules/trace-node/src/plugins/index.ts ***!
  \**********************************************************************************************/
/*! exports provided: DatadogTracerPlugin, BaseSpan, BaseTracerPlugin, ASYNC_FN_MATCHER */
/*! exports used: BaseTracerPlugin, DatadogTracerPlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ASYNC_FN_MATCHER */
/* harmony import */ var _datadog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./datadog */ "../../modules/trace-node/src/plugins/datadog.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _datadog__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base */ "../../modules/trace-node/src/plugins/base.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _base__WEBPACK_IMPORTED_MODULE_1__["a"]; });


 // Matches any stringified function that expects to be passed an argument
// YES: (arg) => { ... }
// YES: arg => { ... }
// YES: function hello ( goodbye ) { ... }
// NO: ( ) => { ... }
// NO: function test() { ... }
// NO: function( ) { ... }

var ASYNC_FN_MATCHER = /^(\(?\s*\w+\s*\)?\s*=>|function(\s+\w*\s*)?\(\s*\w)/;

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

/***/ "./app/graphql/PolicyDetails/resolvers.ts":
/*!************************************************!*\
  !*** ./app/graphql/PolicyDetails/resolvers.ts ***!
  \************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services */ "./app/graphql/PolicyDetails/services/index.ts");


var expandedPolicyDetails = function expandedPolicyDetails(_parent, _ref, context) {
  var _context$token, _context$token2;

  var policyId = _ref.policyId;
  return _services__WEBPACK_IMPORTED_MODULE_0__[/* policyDetailsServices */ "a"].getExpandedPolicyDetails(policyId, (context === null || context === void 0 ? void 0 : (_context$token = context.token) === null || _context$token === void 0 ? void 0 : _context$token['rent-guaranteeUserToken']) || '', (context === null || context === void 0 ? void 0 : (_context$token2 = context.token) === null || _context$token2 === void 0 ? void 0 : _context$token2['rent-guaranteeSessionToken']) || '');
};

var historyForPolicyRelatedActions = function historyForPolicyRelatedActions(_parent, _ref2, context) {
  var _context$token3, _context$token4;

  var policyId = _ref2.policyId;
  return _services__WEBPACK_IMPORTED_MODULE_0__[/* policyDetailsServices */ "a"].getHistoryForPolicyRelatedActions(policyId, context === null || context === void 0 ? void 0 : (_context$token3 = context.token) === null || _context$token3 === void 0 ? void 0 : _context$token3['rent-guaranteeUserToken'], context === null || context === void 0 ? void 0 : (_context$token4 = context.token) === null || _context$token4 === void 0 ? void 0 : _context$token4['rent-guaranteeSessionToken']);
};

var cancelPolicy = function cancelPolicy(_parent, _ref3, context) {
  var _context$token5, _context$token6;

  var policyId = _ref3.policyId,
      caseNumber = _ref3.caseNumber,
      note = _ref3.note;
  return _services__WEBPACK_IMPORTED_MODULE_0__[/* policyDetailsServices */ "a"].cancelPolicy(policyId, caseNumber, note, context === null || context === void 0 ? void 0 : (_context$token5 = context.token) === null || _context$token5 === void 0 ? void 0 : _context$token5['rent-guaranteeUserToken'], context === null || context === void 0 ? void 0 : (_context$token6 = context.token) === null || _context$token6 === void 0 ? void 0 : _context$token6['rent-guaranteeSessionToken']);
};

var reinstateDroppedPolicy = function reinstateDroppedPolicy(_parent, _ref4, context) {
  var _context$token7, _context$token8;

  var policyId = _ref4.policyId,
      caseNumber = _ref4.caseNumber,
      note = _ref4.note;
  return _services__WEBPACK_IMPORTED_MODULE_0__[/* policyDetailsServices */ "a"].reinstateDroppedPolicy(policyId, caseNumber, note, context === null || context === void 0 ? void 0 : (_context$token7 = context.token) === null || _context$token7 === void 0 ? void 0 : _context$token7['rent-guaranteeUserToken'], context === null || context === void 0 ? void 0 : (_context$token8 = context.token) === null || _context$token8 === void 0 ? void 0 : _context$token8['rent-guaranteeSessionToken']);
};

var policyDetailsQueryResolvers = {
  expandedPolicyDetails: expandedPolicyDetails,
  historyForPolicyRelatedActions: historyForPolicyRelatedActions
};
var policyDetailsMutationResolvers = {
  cancelPolicy: cancelPolicy,
  reinstateDroppedPolicy: reinstateDroppedPolicy
};
var policyDetailsResolvers = {
  Query: policyDetailsQueryResolvers,
  Mutation: policyDetailsMutationResolvers
};
/* harmony default export */ __webpack_exports__["a"] = (policyDetailsResolvers);

/***/ }),

/***/ "./app/graphql/PolicyDetails/schema.graphql":
/*!**************************************************!*\
  !*** ./app/graphql/PolicyDetails/schema.graphql ***!
  \**************************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports) {


    var doc = {"kind":"Document","definitions":[{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"Lease"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"id"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"monthlyRentUsd"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"startDate"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Date"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"endDate"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Date"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"securityDeposit"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"directives":[]}]},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"Payments"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"id"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"termType"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"firstExpectedPaymentDate"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"LocalDateType"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"finalExpectedPaymentDate"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"LocalDateType"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"firstSuccessfulPaymentDate"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"LocalDateType"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"mostRecentSuccessfulPaymentDate"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"LocalDateType"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"rentTermsCancelledDate"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"LocalDateType"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"daysDelinquent"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"directives":[]}]},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"LocalDateType"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"year"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"month"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"day"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"directives":[]}]},{"kind":"EnumTypeDefinition","name":{"kind":"Name","value":"PremiumPaidBy"},"directives":[],"values":[{"kind":"EnumValueDefinition","name":{"kind":"Name","value":"PASSTHROUGH"},"directives":[]},{"kind":"EnumValueDefinition","name":{"kind":"Name","value":"DIRECT"},"directives":[]}]},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"Property"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"listingAlias"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"street"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"unit"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"city"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"state"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"zip"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]}]},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"Landlord"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"id"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"firstName"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"lastName"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"email"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"phone"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]}]},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"ApplicationEligibility"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"applicationId"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"applicationEligibilityStatus"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]}]},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"Renter"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"renterId"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"firstName"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"lastName"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"email"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"phone"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"creditCheckEligibleFlag"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"incomeToRentEligibleFlag"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}},"directives":[]}]},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"LeaseLockBinder"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"id"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"issueDate"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"LocalDateType"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"effectiveDate"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"LocalDateType"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"expirationDate"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"LocalDateType"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"cancelDate"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"LocalDateType"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"binderStatus"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]}]},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"LeaseLockCertificate"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"id"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"issueDate"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"LocalDateType"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"effectiveDate"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"LocalDateType"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"expirationDate"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"LocalDateType"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"cancelDate"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"LocalDateType"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"certificateStatus"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]}]},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"Quote"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"quoteId"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"premium"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"coverage"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"firstMonthStampingFee"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"firstMonthSurplusLines"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"firstMonthTotal"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"recurringMonthSurplusLines"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"recurringMonthTotal"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}},"directives":[]}]},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"PremiumTransaction"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"transactionId"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"transactionType"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"PremiumPaidBy"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"premiumAmountInCents"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"transactionCreatedDate"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"LocalDateType"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"transactionUpdatedDate"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"LocalDateType"}},"directives":[]}]},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"PolicyDetails"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"policyId"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"property"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Property"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"lease"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Lease"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"payments"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Payments"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"landlords"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Landlord"}}}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"applicationEligibility"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ApplicationEligibility"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"renters"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Renter"}}}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"leaseLockBinder"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"LeaseLockBinder"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"leaseLockCertificate"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"LeaseLockCertificate"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"quote"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Quote"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"premiumTransactions"},"arguments":[],"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PremiumTransaction"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"policyStatus"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"isCancellable"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"isEligibleToReinstate"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"monthlyPremiumPayments"},"arguments":[],"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MonthlyPremiumPayments"}}},"directives":[]}]},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"HistoryForPolicyRelatedActionsType"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"policyId"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"action"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"createdDate"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"message"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"source"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"sourceId"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]}]},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"MonthlyPremiumPayments"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"sequenceNumber"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"invoiceDate"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"totalDueAmount"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"premiumAmount"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"stampingFeeAmount"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"surplusLinesTaxAmount"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}},"directives":[]}]},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"HistoryForPolicyRelatedActions"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"logs"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"HistoryForPolicyRelatedActionsType"}}}},"directives":[]}]},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"CancelPolicyResponse"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"success"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"httpStatus"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"error"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"ErrorResponse"}},"directives":[]}]},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"ReinstateDroppedPolicyResponse"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"success"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"httpStatus"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"error"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"ErrorResponse"}},"directives":[]}]},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"ErrorResponse"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"message"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]}]},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"Query"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"expandedPolicyDetails"},"arguments":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"policyId"},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]}],"type":{"kind":"NamedType","name":{"kind":"Name","value":"PolicyDetails"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"historyForPolicyRelatedActions"},"arguments":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"policyId"},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]}],"type":{"kind":"NamedType","name":{"kind":"Name","value":"HistoryForPolicyRelatedActions"}},"directives":[]}]},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"Mutation"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"cancelPolicy"},"arguments":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"policyId"},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"caseNumber"},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"note"},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]}],"type":{"kind":"NamedType","name":{"kind":"Name","value":"CancelPolicyResponse"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"reinstateDroppedPolicy"},"arguments":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"policyId"},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"caseNumber"},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"note"},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]}],"type":{"kind":"NamedType","name":{"kind":"Name","value":"ReinstateDroppedPolicyResponse"}},"directives":[]}]},{"kind":"ScalarTypeDefinition","name":{"kind":"Name","value":"Date"},"directives":[]}],"loc":{"start":0,"end":3339}};
    doc.loc.source = {"body":"type Lease {\n  id: Int\n  monthlyRentUsd: Int\n  startDate: Date\n  endDate: Date\n  securityDeposit: Int\n}\n\ntype Payments {\n  id: Int\n  termType: String\n  firstExpectedPaymentDate: LocalDateType\n  finalExpectedPaymentDate: LocalDateType\n  firstSuccessfulPaymentDate: LocalDateType\n  mostRecentSuccessfulPaymentDate: LocalDateType\n  rentTermsCancelledDate: LocalDateType\n  daysDelinquent: Int\n}\n\ntype LocalDateType {\n  year: Int\n  month: Int\n  day: Int\n}\n\nenum PremiumPaidBy {\n  PASSTHROUGH\n  DIRECT\n}\n\ntype Property {\n  listingAlias: String!\n  street: String!\n  unit: String\n  city: String!\n  state: String!\n  zip: String!\n}\n\ntype Landlord {\n  id: String\n  firstName: String!\n  lastName: String!\n  email: String!\n  phone: String\n}\n\ntype ApplicationEligibility {\n  applicationId: String\n  applicationEligibilityStatus: String\n}\n\ntype Renter {\n  renterId: String\n  firstName: String!\n  lastName: String!\n  email: String!\n  phone: String\n  creditCheckEligibleFlag: Boolean\n  incomeToRentEligibleFlag: Boolean\n}\n\ntype LeaseLockBinder {\n  id: String!\n  issueDate: LocalDateType!\n  effectiveDate: LocalDateType\n  expirationDate: LocalDateType\n  cancelDate: LocalDateType\n  binderStatus: String!\n}\n\ntype LeaseLockCertificate {\n  id: String!\n  issueDate: LocalDateType!\n  effectiveDate: LocalDateType\n  expirationDate: LocalDateType\n  cancelDate: LocalDateType\n  certificateStatus: String!\n}\n\ntype Quote {\n  quoteId: Float!\n  premium: Float\n  coverage: Float\n  firstMonthStampingFee: Float\n  firstMonthSurplusLines: Float\n  firstMonthTotal: Float\n  recurringMonthSurplusLines: Float\n  recurringMonthTotal: Float\n}\n\ntype PremiumTransaction {\n  transactionId: String!\n  transactionType: PremiumPaidBy\n  premiumAmountInCents: Float\n  transactionCreatedDate: LocalDateType\n  transactionUpdatedDate: LocalDateType\n}\n\ntype PolicyDetails {\n  policyId: String!\n  property: Property\n  lease: Lease\n  payments: Payments\n  landlords: [Landlord!]!\n  applicationEligibility: ApplicationEligibility!\n  renters: [Renter!]!\n  leaseLockBinder: LeaseLockBinder\n  leaseLockCertificate: LeaseLockCertificate\n  quote: Quote\n  premiumTransactions: [PremiumTransaction]\n  policyStatus: String\n  isCancellable: Boolean!\n  isEligibleToReinstate: Boolean!\n  monthlyPremiumPayments: [MonthlyPremiumPayments]\n}\n\ntype HistoryForPolicyRelatedActionsType {\n  policyId: String!\n  action: String!\n  createdDate: Float!\n  message: String!\n  source: String!\n  sourceId: String!\n}\n\ntype MonthlyPremiumPayments {\n  sequenceNumber: Int!\n  invoiceDate: String!\n  totalDueAmount: Float!\n  premiumAmount: Float!\n  stampingFeeAmount: Float\n  surplusLinesTaxAmount: Float\n}\n\ntype HistoryForPolicyRelatedActions {\n  logs: [HistoryForPolicyRelatedActionsType]!\n}\n\ntype CancelPolicyResponse {\n  success: Boolean!\n  httpStatus: Int!\n  error: ErrorResponse\n}\n\ntype ReinstateDroppedPolicyResponse {\n  success: Boolean!\n  httpStatus: Int!\n  error: ErrorResponse\n}\n\ntype ErrorResponse {\n  message: String\n}\n\ntype Query {\n  expandedPolicyDetails(policyId: String!): PolicyDetails\n  historyForPolicyRelatedActions(policyId: String!): HistoryForPolicyRelatedActions\n}\n\ntype Mutation {\n  cancelPolicy(policyId: String!, caseNumber: String!, note: String!): CancelPolicyResponse\n  reinstateDroppedPolicy(policyId: String!, caseNumber: String!, note: String!): ReinstateDroppedPolicyResponse\n}\n\nscalar Date\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

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

/***/ "./app/graphql/PolicyDetails/services/cancelPolicy.ts":
/*!************************************************************!*\
  !*** ./app/graphql/PolicyDetails/services/cancelPolicy.ts ***!
  \************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
/* harmony import */ var _server_utils_log__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../server/utils/log */ "./app/server/utils/log.ts");
/* harmony import */ var _server_utils_tracer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../server/utils/tracer */ "./app/server/utils/tracer.ts");
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/api */ "./app/graphql/utils/api.ts");
/* harmony import */ var _server_utils_nodeMonitor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../server/utils/nodeMonitor */ "./app/server/utils/nodeMonitor.ts");





function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }







var cancelPolicy = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(policyId, caseNumber, note, rentGuaranteeUserToken, rentGuaranteeSessionToken) {
    var response;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_4___default.a.post("".concat(_utils_api__WEBPACK_IMPORTED_MODULE_7__[/* api */ "a"].gql.cancelPolicy), {
              policyId: policyId,
              caseNumber: caseNumber,
              note: note
            }, {
              headers: {
                Cookie: "rent-guaranteeUserToken=".concat(rentGuaranteeUserToken, "; rent-guaranteeSessionToken=").concat(rentGuaranteeSessionToken)
              }
            }).then(function (res) {
              return res.data;
            })["catch"](function (err) {
              _server_utils_log__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].error("Network error cancelling policy for policyId: ".concat(policyId, ": ").concat(err)); // Log an error (using the class instance's logger):

              // Log an error (using the class instance's logger):
              _server_utils_nodeMonitor__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].increment({
                name: 'cancelPolicy failed',
                amount: 1
              });
              return null;
            });

          case 2:
            response = _context.sent;

            if (!response) {
              _context.next = 7;
              break;
            }

            _context.next = 6;
            return _server_utils_nodeMonitor__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].increment({
              name: 'cancelPolicy viewed',
              amount: 1
            });

          case 6:
            return _context.abrupt("return", response);

          case 7:
            return _context.abrupt("return", null);

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function cancelPolicy(_x, _x2, _x3, _x4, _x5) {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["a"] = (_server_utils_tracer__WEBPACK_IMPORTED_MODULE_6__[/* tracer */ "a"].wrap(cancelPolicy));

/***/ }),

/***/ "./app/graphql/PolicyDetails/services/getExpandedPolicyDetails.ts":
/*!************************************************************************!*\
  !*** ./app/graphql/PolicyDetails/services/getExpandedPolicyDetails.ts ***!
  \************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
/* harmony import */ var _server_utils_log__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../server/utils/log */ "./app/server/utils/log.ts");
/* harmony import */ var _server_utils_tracer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../server/utils/tracer */ "./app/server/utils/tracer.ts");
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/api */ "./app/graphql/utils/api.ts");
/* harmony import */ var _server_utils_nodeMonitor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../server/utils/nodeMonitor */ "./app/server/utils/nodeMonitor.ts");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! date-fns */ "date-fns");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_9__);





function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }








var getExpandedPolicyDetails = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(policyId, rentGuaranteeUserToken, rentGuaranteeSessionToken) {
    var response;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("".concat(_utils_api__WEBPACK_IMPORTED_MODULE_7__[/* api */ "a"].gql.expandedPolicyDetails, "?policyId=").concat(policyId), {
              headers: {
                Cookie: "rent-guaranteeUserToken=".concat(rentGuaranteeUserToken, "; rent-guaranteeSessionToken=").concat(rentGuaranteeSessionToken)
              }
            }).then(function (res) {
              var policy = res.data.data;

              if (policy !== null && policy !== void 0 && policy.lease) {
                policy.lease.startDate = Object(date_fns__WEBPACK_IMPORTED_MODULE_9__["fromUnixTime"])(policy.lease.startDate / 1000);
                policy.lease.endDate = Object(date_fns__WEBPACK_IMPORTED_MODULE_9__["fromUnixTime"])(policy.lease.endDate / 1000);
              }

              return policy;
            })["catch"](function (err) {
              _server_utils_log__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].error("Network error fetching policy for policyId: ".concat(policyId, ": ").concat(err)); // Log an error (using the class instance's logger):

              // Log an error (using the class instance's logger):
              _server_utils_nodeMonitor__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].increment({
                name: 'getExpandedPolicyDetails failed',
                amount: 1
              });
              return null;
            });

          case 2:
            response = _context.sent;

            if (!response) {
              _context.next = 7;
              break;
            }

            _context.next = 6;
            return _server_utils_nodeMonitor__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].increment({
              name: 'getExpandedPolicyDetails viewed',
              amount: 1
            });

          case 6:
            return _context.abrupt("return", response);

          case 7:
            return _context.abrupt("return", null);

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getExpandedPolicyDetails(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["a"] = (_server_utils_tracer__WEBPACK_IMPORTED_MODULE_6__[/* tracer */ "a"].wrap(getExpandedPolicyDetails));

/***/ }),

/***/ "./app/graphql/PolicyDetails/services/getHistoryForPolicyRelatedActions.ts":
/*!*********************************************************************************!*\
  !*** ./app/graphql/PolicyDetails/services/getHistoryForPolicyRelatedActions.ts ***!
  \*********************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
/* harmony import */ var _server_utils_log__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../server/utils/log */ "./app/server/utils/log.ts");
/* harmony import */ var _server_utils_tracer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../server/utils/tracer */ "./app/server/utils/tracer.ts");
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/api */ "./app/graphql/utils/api.ts");
/* harmony import */ var _server_utils_nodeMonitor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../server/utils/nodeMonitor */ "./app/server/utils/nodeMonitor.ts");





function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }







var getHistoryForPolicyRelatedActions = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(policyId, rentGuaranteeUserToken, rentGuaranteeSessionToken) {
    var response;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("".concat(_utils_api__WEBPACK_IMPORTED_MODULE_7__[/* api */ "a"].gql.historyForPolicyRelatedActions, "?policyId=").concat(policyId), {
              headers: {
                Cookie: "rent-guaranteeUserToken=".concat(rentGuaranteeUserToken, "; rent-guaranteeSessionToken=").concat(rentGuaranteeSessionToken)
              }
            }).then(function (res) {
              return res.data.data;
            })["catch"](function (err) {
              _server_utils_log__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].error("Network error fetching history for policy related actions for for policyId: ".concat(policyId, ": ").concat(err)); // Log an error (using the class instance's logger):

              // Log an error (using the class instance's logger):
              _server_utils_nodeMonitor__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].increment({
                name: 'getHistoryForPolicyRelatedActions failed',
                amount: 1
              });
              return null;
            });

          case 2:
            response = _context.sent;

            if (!response) {
              _context.next = 7;
              break;
            }

            _context.next = 6;
            return _server_utils_nodeMonitor__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].increment({
              name: 'getHistoryForPolicyRelatedActions viewed',
              amount: 1
            });

          case 6:
            return _context.abrupt("return", response);

          case 7:
            return _context.abrupt("return", null);

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getHistoryForPolicyRelatedActions(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["a"] = (_server_utils_tracer__WEBPACK_IMPORTED_MODULE_6__[/* tracer */ "a"].wrap(getHistoryForPolicyRelatedActions));

/***/ }),

/***/ "./app/graphql/PolicyDetails/services/index.ts":
/*!*****************************************************!*\
  !*** ./app/graphql/PolicyDetails/services/index.ts ***!
  \*****************************************************/
/*! exports provided: policyDetailsServices */
/*! exports used: policyDetailsServices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return policyDetailsServices; });
/* harmony import */ var _getExpandedPolicyDetails__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getExpandedPolicyDetails */ "./app/graphql/PolicyDetails/services/getExpandedPolicyDetails.ts");
/* harmony import */ var _getHistoryForPolicyRelatedActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getHistoryForPolicyRelatedActions */ "./app/graphql/PolicyDetails/services/getHistoryForPolicyRelatedActions.ts");
/* harmony import */ var _cancelPolicy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cancelPolicy */ "./app/graphql/PolicyDetails/services/cancelPolicy.ts");
/* harmony import */ var _reinstateDroppedPolicy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reinstateDroppedPolicy */ "./app/graphql/PolicyDetails/services/reinstateDroppedPolicy.ts");




var policyDetailsServices = {
  getExpandedPolicyDetails: _getExpandedPolicyDetails__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"],
  getHistoryForPolicyRelatedActions: _getHistoryForPolicyRelatedActions__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
  cancelPolicy: _cancelPolicy__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"],
  reinstateDroppedPolicy: _reinstateDroppedPolicy__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]
};

/***/ }),

/***/ "./app/graphql/PolicyDetails/services/reinstateDroppedPolicy.ts":
/*!**********************************************************************!*\
  !*** ./app/graphql/PolicyDetails/services/reinstateDroppedPolicy.ts ***!
  \**********************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
/* harmony import */ var _server_utils_log__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../server/utils/log */ "./app/server/utils/log.ts");
/* harmony import */ var _server_utils_tracer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../server/utils/tracer */ "./app/server/utils/tracer.ts");
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/api */ "./app/graphql/utils/api.ts");
/* harmony import */ var _server_utils_nodeMonitor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../server/utils/nodeMonitor */ "./app/server/utils/nodeMonitor.ts");





function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }







var reinstateDroppedPolicy = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(policyId, caseNumber, note, rentGuaranteeUserToken, rentGuaranteeSessionToken) {
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_4___default.a.post("".concat(_utils_api__WEBPACK_IMPORTED_MODULE_7__[/* api */ "a"].gql.reinstateDroppedPolicy), {
              policyId: policyId,
              caseNumber: caseNumber,
              note: note
            }, {
              headers: {
                Cookie: "rent-guaranteeUserToken=".concat(rentGuaranteeUserToken, "; rent-guaranteeSessionToken=").concat(rentGuaranteeSessionToken)
              }
            }).then( /*#__PURE__*/function () {
              var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(res) {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _server_utils_log__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].error(res.data);
                        _context.next = 3;
                        return _server_utils_nodeMonitor__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].increment({
                          name: 'reinstateDroppedPolicy viewed',
                          amount: 1
                        });

                      case 3:
                        return _context.abrupt("return", res.data);

                      case 4:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              }));

              return function (_x6) {
                return _ref2.apply(this, arguments);
              };
            }())["catch"]( /*#__PURE__*/function () {
              var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(err) {
                var errMsg;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        errMsg = "Error reinstating dropped policy for policyId: ".concat(policyId, ": ").concat(err);
                        _server_utils_log__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].error(errMsg); // Log an error (using the class instance's logger):

                        _context2.next = 4;
                        return _server_utils_nodeMonitor__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].increment({
                          name: 'reinstateDroppedPolicy failed',
                          amount: 1
                        });

                      case 4:
                        throw new Error(errMsg);

                      case 5:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2);
              }));

              return function (_x7) {
                return _ref3.apply(this, arguments);
              };
            }());

          case 2:
            return _context3.abrupt("return", _context3.sent);

          case 3:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function reinstateDroppedPolicy(_x, _x2, _x3, _x4, _x5) {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["a"] = (_server_utils_tracer__WEBPACK_IMPORTED_MODULE_6__[/* tracer */ "a"].wrap(reinstateDroppedPolicy));

/***/ }),

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

/***/ }),

/***/ "./app/graphql/Reports/schema.graphql":
/*!********************************************!*\
  !*** ./app/graphql/Reports/schema.graphql ***!
  \********************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports) {


    var doc = {"kind":"Document","definitions":[{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"MethodParamsDetails"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"paramName"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"paramDataType"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"paramDefaultValue"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},"directives":[]}]},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"Report"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"reportName"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"reportDescription"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"methodToInvoke"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"methodParamsDetails"},"arguments":[],"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MethodParamsDetails"}}},"directives":[]}]},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"Reports"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"reportsDetails"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Report"}}}}},"directives":[]}]},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"RentGuaranteeLandLord"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"landlordUserToken"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"firstName"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"lastName"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"emails"},"arguments":[],"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"phones"},"arguments":[],"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]}]},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"RentGuaranteeLandLordObject"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"landlord"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"RentGuaranteeLandLord"}},"directives":[]}]},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"Landlords"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"rentGuaranteeLandlords"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RentGuaranteeLandLordObject"}}}}},"directives":[]}]},{"kind":"UnionTypeDefinition","name":{"kind":"Name","value":"UserActivities"},"directives":[],"types":[{"kind":"NamedType","name":{"kind":"Name","value":"UserActivity"}},{"kind":"NamedType","name":{"kind":"Name","value":"ListingActivity"}},{"kind":"NamedType","name":{"kind":"Name","value":"ApplicationActivity"}},{"kind":"NamedType","name":{"kind":"Name","value":"VoucherActivity"}}]},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"Activities"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"userActivities"},"arguments":[],"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserActivities"}}}},"directives":[]}]},{"kind":"InterfaceTypeDefinition","name":{"kind":"Name","value":"UserActionActivity"},"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"idType"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"idValue"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"action"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"createdDate"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"userToken"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"message"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]}]},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"UserActivity"},"interfaces":[{"kind":"NamedType","name":{"kind":"Name","value":"UserActionActivity"}}],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"idType"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"idValue"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"action"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"createdDate"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"userToken"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"message"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]}]},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"ListingActivity"},"interfaces":[{"kind":"NamedType","name":{"kind":"Name","value":"UserActionActivity"}}],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"idType"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"idValue"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"action"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"createdDate"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"userToken"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"message"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]}]},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"ApplicationActivity"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"applicationId"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"incomeToRentEligible"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"incomeUpdatedDate"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"listingAlias"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"createdDate"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"userToken"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]}]},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"VoucherActivity"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"applicationId"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"voucherToRentCoverage"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"listingAlias"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"createdDate"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"updatedDate"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"userToken"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]}]},{"kind":"InputObjectTypeDefinition","name":{"kind":"Name","value":"UrlParams"},"directives":[],"fields":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"name"},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"value"},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]}]},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"Query"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"reports"},"arguments":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"reportType"},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]}],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Reports"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"landlordsDataForReports"},"arguments":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"methodToInvoke"},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"urlParams"},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]}],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Landlords"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"userActivityDataForReports"},"arguments":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"methodToInvoke"},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"urlParams"},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UrlParams"}}}},"directives":[]}],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Activities"}},"directives":[]}]}],"loc":{"start":0,"end":1854}};
    doc.loc.source = {"body":"type MethodParamsDetails {\n  paramName: String!\n  paramDataType: String!\n  paramDefaultValue: Int!\n}\n\ntype Report {\n  reportName: String!\n  reportDescription: String!\n  methodToInvoke: String!\n  methodParamsDetails: [MethodParamsDetails]\n}\n\ntype Reports {\n  reportsDetails: [Report!]!\n}\n\ntype RentGuaranteeLandLord {\n  landlordUserToken: String!\n  firstName: String\n  lastName: String\n  emails: [String]\n  phones: [String]\n}\n\ntype RentGuaranteeLandLordObject {\n  landlord: RentGuaranteeLandLord\n}\n\ntype Landlords {\n  rentGuaranteeLandlords: [RentGuaranteeLandLordObject!]!\n}\n\nunion UserActivities = UserActivity | ListingActivity | ApplicationActivity | VoucherActivity\n\ntype Activities {\n  userActivities: [UserActivities!]\n}\n\ninterface UserActionActivity {\n  idType: String!\n  idValue: String!\n  action: String!\n  createdDate: Float!\n  userToken: String!\n  message: String\n}\n\ntype UserActivity implements UserActionActivity {\n  idType: String!\n  idValue: String!\n  action: String!\n  createdDate: Float!\n  userToken: String!\n  message: String\n}\n\ntype ListingActivity implements UserActionActivity {\n  idType: String!\n  idValue: String!\n  action: String!\n  createdDate: Float!\n  userToken: String!\n  message: String\n}\n\ntype ApplicationActivity {\n  applicationId: String!\n  incomeToRentEligible: Boolean!\n  incomeUpdatedDate: Float!\n  listingAlias: String!\n  createdDate: Float!\n  userToken: String!\n}\n\ntype VoucherActivity {\n  applicationId: String!\n  voucherToRentCoverage: String!\n  listingAlias: String!\n  createdDate: Float!\n  updatedDate: Float!\n  userToken: String!\n}\n\ninput UrlParams {\n  name: String!\n  value: String\n}\n\ntype Query {\n  reports(reportType: String): Reports\n  landlordsDataForReports(methodToInvoke: String!, urlParams: String): Landlords\n  userActivityDataForReports(methodToInvoke: String!, urlParams: [UrlParams!]): Activities\n}\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

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

/***/ "./app/graphql/Reports/services/getLandlordsDataForReports.ts":
/*!********************************************************************!*\
  !*** ./app/graphql/Reports/services/getLandlordsDataForReports.ts ***!
  \********************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
/* harmony import */ var _server_utils_log__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../server/utils/log */ "./app/server/utils/log.ts");
/* harmony import */ var _server_utils_tracer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../server/utils/tracer */ "./app/server/utils/tracer.ts");
/* harmony import */ var _server_utils_nodeMonitor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../server/utils/nodeMonitor */ "./app/server/utils/nodeMonitor.ts");





function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }






var getLandlordsDataForReports = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(methodToInvoke, urlParams, rentGuaranteeUserToken, rentGuaranteeSessionToken) {
    var url, response;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            url = "".concat(process.env.API, "/rent-guarantee/api/v1/admin/").concat(methodToInvoke);

            if (urlParams && (urlParams === null || urlParams === void 0 ? void 0 : urlParams.length) > 0) {
              url = "".concat(url, "?").concat(urlParams);
            }

            _context.next = 4;
            return axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("".concat(url), {
              headers: {
                Cookie: "rent-guaranteeUserToken=".concat(rentGuaranteeUserToken, "; rent-guaranteeSessionToken=").concat(rentGuaranteeSessionToken)
              }
            }).then(function (res) {
              return res.data.data;
            })["catch"](function (err) {
              _server_utils_log__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].error("Network error fetching Landlords ".concat(methodToInvoke, " report: ").concat(err)); // Log an error (using the class instance's logger):

              // Log an error (using the class instance's logger):
              _server_utils_nodeMonitor__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].increment({
                name: 'landlordsReports failed',
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
            return _server_utils_nodeMonitor__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].increment({
              name: 'landlordsReports viewed',
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

  return function getLandlordsDataForReports(_x, _x2, _x3, _x4) {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["a"] = (_server_utils_tracer__WEBPACK_IMPORTED_MODULE_6__[/* tracer */ "a"].wrap(getLandlordsDataForReports));

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
                      userActivities: convertToUserActivity((res === null || res === void 0 ? void 0 : (_res$data = res.data) === null || _res$data === void 0 ? void 0 : (_res$data$data = _res$data.data) === null || _res$data$data === void 0 ? void 0 : _res$data$data.logs) || [])
                    };
                  }

                  return null;

                case 'getApplicationFlagsUserActivityEvents':
                  if (res) {
                    var _res$data2, _res$data2$data;

                    return {
                      __typename: 'Activities',
                      userActivities: convertToApplicationActivity((res === null || res === void 0 ? void 0 : (_res$data2 = res.data) === null || _res$data2 === void 0 ? void 0 : (_res$data2$data = _res$data2.data) === null || _res$data2$data === void 0 ? void 0 : _res$data2$data.applicationFlagsUserActivity) || [])
                    };
                  }

                  return null;

                case 'getRentVoucherCoverageUserActivityEvents':
                  if (res) {
                    var _res$data3, _res$data3$data;

                    return {
                      __typename: 'Activities',
                      userActivities: convertToVoucherActivity((res === null || res === void 0 ? void 0 : (_res$data3 = res.data) === null || _res$data3 === void 0 ? void 0 : (_res$data3$data = _res$data3.data) === null || _res$data3$data === void 0 ? void 0 : _res$data3$data.rentVoucherCoverageUserActivity) || [])
                    };
                  }

                  return null;

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

var convertToUserActivity = function convertToUserActivity(activities) {
  return activities.map(function (activity) {
    return _objectSpread(_objectSpread({}, activity), {}, {
      __typename: activity.idType == 'listingAlias' ? 'ListingActivity' : 'UserActivity'
    });
  });
};

var convertToApplicationActivity = function convertToApplicationActivity(activities) {
  return activities.map(function (activity) {
    return _objectSpread(_objectSpread({}, activity), {}, {
      __typename: 'ApplicationActivity'
    });
  });
};

var convertToVoucherActivity = function convertToVoucherActivity(activities) {
  return activities.map(function (activity) {
    return _objectSpread(_objectSpread({}, activity), {}, {
      __typename: 'VoucherActivity'
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

/***/ "./app/graphql/SearchPolicies/PoliciesBuilder.ts":
/*!*******************************************************!*\
  !*** ./app/graphql/SearchPolicies/PoliciesBuilder.ts ***!
  \*******************************************************/
/*! exports provided: buildPoliciesFromResponse */
/*! exports used: buildPoliciesFromResponse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return buildPoliciesFromResponse; });
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.define-properties.js */ "core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! date-fns */ "date-fns");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_10__);











function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var formatPolicy = function formatPolicy(policy) {
  return _objectSpread(_objectSpread({}, policy), {}, {
    applicationId: {
      id: policy.applicationId
    },
    leaseId: {
      id: policy.leaseId
    },
    paymentId: {
      id: policy.paymentId
    },
    leaseTermStartDate: Object(date_fns__WEBPACK_IMPORTED_MODULE_10__["fromUnixTime"])(policy.leaseTermStartDate / 1000),
    leaseTermEndDate: Object(date_fns__WEBPACK_IMPORTED_MODULE_10__["fromUnixTime"])(policy.leaseTermEndDate / 1000),
    policyTermStartDate: Object(date_fns__WEBPACK_IMPORTED_MODULE_10__["fromUnixTime"])(policy.policyTermStartDate / 1000),
    policyTermEndDate: Object(date_fns__WEBPACK_IMPORTED_MODULE_10__["fromUnixTime"])(policy.policyTermEndDate / 1000)
  });
};

var buildPoliciesFromResponse = function buildPoliciesFromResponse(response) {
  var _response$policies;

  var formattedPolicies = (response === null || response === void 0 ? void 0 : (_response$policies = response.policies) === null || _response$policies === void 0 ? void 0 : _response$policies.map(function (policy) {
    return formatPolicy(policy);
  })) || [];
  return {
    policies: formattedPolicies
  };
};

/***/ }),

/***/ "./app/graphql/SearchPolicies/resolvers.ts":
/*!*************************************************!*\
  !*** ./app/graphql/SearchPolicies/resolvers.ts ***!
  \*************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services */ "./app/graphql/SearchPolicies/services/index.ts");


var searchPolicies = function searchPolicies(_parent, _ref, context) {
  var _context$token, _context$token2;

  var searchType = _ref.searchType,
      searchValue = _ref.searchValue;
  return _services__WEBPACK_IMPORTED_MODULE_0__[/* searchPoliciesServices */ "a"].getSearchPolicies(searchType, searchValue, (context === null || context === void 0 ? void 0 : (_context$token = context.token) === null || _context$token === void 0 ? void 0 : _context$token['rent-guaranteeUserToken']) || '', (context === null || context === void 0 ? void 0 : (_context$token2 = context.token) === null || _context$token2 === void 0 ? void 0 : _context$token2['rent-guaranteeSessionToken']) || '');
};

var history = function history(_parent, _ref2, context) {
  var _context$token3, _context$token4;

  var logIdType = _ref2.logIdType,
      logIdValue = _ref2.logIdValue;
  return _services__WEBPACK_IMPORTED_MODULE_0__[/* searchPoliciesServices */ "a"].getHistory(logIdType, logIdValue, (context === null || context === void 0 ? void 0 : (_context$token3 = context.token) === null || _context$token3 === void 0 ? void 0 : _context$token3['rent-guaranteeUserToken']) || '', (context === null || context === void 0 ? void 0 : (_context$token4 = context.token) === null || _context$token4 === void 0 ? void 0 : _context$token4['rent-guaranteeSessionToken']) || '');
};

var policySearchTypes = function policySearchTypes(_parent, _vars, context) {
  var _context$token5, _context$token6;

  return _services__WEBPACK_IMPORTED_MODULE_0__[/* searchPoliciesServices */ "a"].getPolicySearchTypes((context === null || context === void 0 ? void 0 : (_context$token5 = context.token) === null || _context$token5 === void 0 ? void 0 : _context$token5['rent-guaranteeUserToken']) || '', (context === null || context === void 0 ? void 0 : (_context$token6 = context.token) === null || _context$token6 === void 0 ? void 0 : _context$token6['rent-guaranteeSessionToken']) || '');
};

var policyStatuses = function policyStatuses(_parent, _vars, context) {
  var _context$token7, _context$token8;

  return _services__WEBPACK_IMPORTED_MODULE_0__[/* searchPoliciesServices */ "a"].getPolicyStatuses((context === null || context === void 0 ? void 0 : (_context$token7 = context.token) === null || _context$token7 === void 0 ? void 0 : _context$token7['rent-guaranteeUserToken']) || '', (context === null || context === void 0 ? void 0 : (_context$token8 = context.token) === null || _context$token8 === void 0 ? void 0 : _context$token8['rent-guaranteeSessionToken']) || '');
};

var searchPoliciesQueryResolvers = {
  searchPolicies: searchPolicies,
  history: history,
  policySearchTypes: policySearchTypes,
  policyStatuses: policyStatuses
};
var searchPoliciesResolvers = {
  Query: searchPoliciesQueryResolvers
};
/* harmony default export */ __webpack_exports__["a"] = (searchPoliciesResolvers);

/***/ }),

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

/***/ "./app/graphql/SearchPolicies/services/getHistory.ts":
/*!***********************************************************!*\
  !*** ./app/graphql/SearchPolicies/services/getHistory.ts ***!
  \***********************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
/* harmony import */ var _server_utils_log__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../server/utils/log */ "./app/server/utils/log.ts");
/* harmony import */ var _server_utils_tracer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../server/utils/tracer */ "./app/server/utils/tracer.ts");
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/api */ "./app/graphql/utils/api.ts");
/* harmony import */ var _server_utils_nodeMonitor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../server/utils/nodeMonitor */ "./app/server/utils/nodeMonitor.ts");





function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }







var getHistory = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(searchType, searchValue, rentGuaranteeUserToken, rentGuaranteeSessionToken) {
    var response;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("".concat(_utils_api__WEBPACK_IMPORTED_MODULE_7__[/* api */ "a"].gql.history, "?logIdType=").concat(searchType, "&logIdValue=").concat(searchValue), {
              headers: {
                Cookie: "rent-guaranteeUserToken=".concat(rentGuaranteeUserToken, "; rent-guaranteeSessionToken=").concat(rentGuaranteeSessionToken)
              }
            }).then(function (res) {
              return res.data.data;
            })["catch"](function (err) {
              _server_utils_log__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].error("Network error fetching history for searchValue: ".concat(searchValue, ": ").concat(err)); // Log an error (using the class instance's logger):

              // Log an error (using the class instance's logger):
              _server_utils_nodeMonitor__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].increment({
                name: 'getHistory failed',
                amount: 1
              });
              return null;
            });

          case 2:
            response = _context.sent;
            _context.next = 5;
            return _server_utils_nodeMonitor__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].increment({
              name: 'getHistory viewed',
              amount: 1
            });

          case 5:
            return _context.abrupt("return", response);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getHistory(_x, _x2, _x3, _x4) {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["a"] = (_server_utils_tracer__WEBPACK_IMPORTED_MODULE_6__[/* tracer */ "a"].wrap(getHistory));

/***/ }),

/***/ "./app/graphql/SearchPolicies/services/getPolicySearchTypes.ts":
/*!*********************************************************************!*\
  !*** ./app/graphql/SearchPolicies/services/getPolicySearchTypes.ts ***!
  \*********************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
/* harmony import */ var _server_utils_log__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../server/utils/log */ "./app/server/utils/log.ts");
/* harmony import */ var _server_utils_tracer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../server/utils/tracer */ "./app/server/utils/tracer.ts");
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/api */ "./app/graphql/utils/api.ts");
/* harmony import */ var _server_utils_nodeMonitor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../server/utils/nodeMonitor */ "./app/server/utils/nodeMonitor.ts");





function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }







var getPolicySearchTypes = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(rentGuaranteeUserToken, rentGuaranteeSessionToken) {
    var response;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("".concat(_utils_api__WEBPACK_IMPORTED_MODULE_7__[/* api */ "a"].gql.policySearchTypes), {
              headers: {
                Cookie: "rent-guaranteeUserToken=".concat(rentGuaranteeUserToken, "; rent-guaranteeSessionToken=").concat(rentGuaranteeSessionToken)
              }
            }).then(function (res) {
              return res.data.data;
            })["catch"](function (err) {
              _server_utils_log__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].error("Network error fetching policy for policy search types: ".concat(err)); // Log an error (using the class instance's logger):

              // Log an error (using the class instance's logger):
              _server_utils_nodeMonitor__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].increment({
                name: 'getPolicySearchTypes failed',
                amount: 1
              });
              return null;
            });

          case 2:
            response = _context.sent;

            if (!response) {
              _context.next = 7;
              break;
            }

            _context.next = 6;
            return _server_utils_nodeMonitor__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].increment({
              name: 'getPolicySearchTypes viewed',
              amount: 1
            });

          case 6:
            return _context.abrupt("return", response);

          case 7:
            return _context.abrupt("return", null);

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getPolicySearchTypes(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["a"] = (_server_utils_tracer__WEBPACK_IMPORTED_MODULE_6__[/* tracer */ "a"].wrap(getPolicySearchTypes));

/***/ }),

/***/ "./app/graphql/SearchPolicies/services/getPolicyStatuses.ts":
/*!******************************************************************!*\
  !*** ./app/graphql/SearchPolicies/services/getPolicyStatuses.ts ***!
  \******************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
/* harmony import */ var _server_utils_log__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../server/utils/log */ "./app/server/utils/log.ts");
/* harmony import */ var _server_utils_tracer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../server/utils/tracer */ "./app/server/utils/tracer.ts");
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/api */ "./app/graphql/utils/api.ts");
/* harmony import */ var _server_utils_nodeMonitor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../server/utils/nodeMonitor */ "./app/server/utils/nodeMonitor.ts");





function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }







var getPolicyStatuses = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(rentGuaranteeUserToken, rentGuaranteeSessionToken) {
    var response;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("".concat(_utils_api__WEBPACK_IMPORTED_MODULE_7__[/* api */ "a"].gql.policyStatuses), {
              headers: {
                Cookie: "rent-guaranteeUserToken=".concat(rentGuaranteeUserToken, "; rent-guaranteeSessionToken=").concat(rentGuaranteeSessionToken)
              }
            }).then(function (res) {
              return res.data.data;
            })["catch"](function (err) {
              _server_utils_log__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].error("Network error fetching policy statuses search types: ".concat(err)); // Log an error (using the class instance's logger):

              // Log an error (using the class instance's logger):
              _server_utils_nodeMonitor__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].increment({
                name: 'getPolicyStatuses failed',
                amount: 1
              });
              return null;
            });

          case 2:
            response = _context.sent;

            if (!response) {
              _context.next = 7;
              break;
            }

            _context.next = 6;
            return _server_utils_nodeMonitor__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].increment({
              name: 'getPolicyStatuses viewed',
              amount: 1
            });

          case 6:
            return _context.abrupt("return", response);

          case 7:
            return _context.abrupt("return", null);

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getPolicyStatuses(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["a"] = (_server_utils_tracer__WEBPACK_IMPORTED_MODULE_6__[/* tracer */ "a"].wrap(getPolicyStatuses));

/***/ }),

/***/ "./app/graphql/SearchPolicies/services/getSearchPolicies.ts":
/*!******************************************************************!*\
  !*** ./app/graphql/SearchPolicies/services/getSearchPolicies.ts ***!
  \******************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
/* harmony import */ var _server_utils_log__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../server/utils/log */ "./app/server/utils/log.ts");
/* harmony import */ var _server_utils_tracer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../server/utils/tracer */ "./app/server/utils/tracer.ts");
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/api */ "./app/graphql/utils/api.ts");
/* harmony import */ var _PoliciesBuilder__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../PoliciesBuilder */ "./app/graphql/SearchPolicies/PoliciesBuilder.ts");
/* harmony import */ var _server_utils_nodeMonitor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../server/utils/nodeMonitor */ "./app/server/utils/nodeMonitor.ts");





function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }








var getSearchPolicies = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(searchType, searchValue, rentGuaranteeUserToken, rentGuaranteeSessionToken) {
    var response;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("".concat(_utils_api__WEBPACK_IMPORTED_MODULE_7__[/* api */ "a"].gql.searchPolicies, "?searchType=").concat(searchType, "&searchValue=").concat(searchValue), {
              headers: {
                Cookie: "rent-guaranteeUserToken=".concat(rentGuaranteeUserToken, "; rent-guaranteeSessionToken=").concat(rentGuaranteeSessionToken)
              }
            }).then(function (res) {
              return res.data.data;
            })["catch"](function (err) {
              _server_utils_log__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].error("Network error fetching policy for ".concat(searchType, ": ").concat(searchValue, ": ").concat(err)); // Log an error (using the class instance's logger):

              // Log an error (using the class instance's logger):
              _server_utils_nodeMonitor__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"].increment({
                name: 'getSearchPolicies failed',
                amount: 1
              });
              return null;
            });

          case 2:
            response = _context.sent;

            if (!response) {
              _context.next = 7;
              break;
            }

            _context.next = 6;
            return _server_utils_nodeMonitor__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"].increment({
              name: 'getSearchPolicies viewed',
              amount: 1
            });

          case 6:
            return _context.abrupt("return", Object(_PoliciesBuilder__WEBPACK_IMPORTED_MODULE_8__[/* buildPoliciesFromResponse */ "a"])(response));

          case 7:
            return _context.abrupt("return", null);

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getSearchPolicies(_x, _x2, _x3, _x4) {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["a"] = (_server_utils_tracer__WEBPACK_IMPORTED_MODULE_6__[/* tracer */ "a"].wrap(getSearchPolicies));

/***/ }),

/***/ "./app/graphql/SearchPolicies/services/index.ts":
/*!******************************************************!*\
  !*** ./app/graphql/SearchPolicies/services/index.ts ***!
  \******************************************************/
/*! exports provided: searchPoliciesServices */
/*! exports used: searchPoliciesServices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return searchPoliciesServices; });
/* harmony import */ var _getSearchPolicies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getSearchPolicies */ "./app/graphql/SearchPolicies/services/getSearchPolicies.ts");
/* harmony import */ var _getHistory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getHistory */ "./app/graphql/SearchPolicies/services/getHistory.ts");
/* harmony import */ var _getPolicySearchTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getPolicySearchTypes */ "./app/graphql/SearchPolicies/services/getPolicySearchTypes.ts");
/* harmony import */ var _getPolicyStatuses__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getPolicyStatuses */ "./app/graphql/SearchPolicies/services/getPolicyStatuses.ts");




var searchPoliciesServices = {
  getSearchPolicies: _getSearchPolicies__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"],
  getHistory: _getHistory__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
  getPolicySearchTypes: _getPolicySearchTypes__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"],
  getPolicyStatuses: _getPolicyStatuses__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]
};

/***/ }),

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




var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var federatedSchema = Object(_apollo_federation__WEBPACK_IMPORTED_MODULE_3__["buildFederatedSchema"])({
  typeDefs: graphql_tag__WEBPACK_IMPORTED_MODULE_4___default()(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    ", "\n  "])), _schema__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"]),
  resolvers: _resolvers__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"]
});
/* harmony default export */ __webpack_exports__["a"] = (federatedSchema);

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

/***/ "./app/graphql/resolvers.ts":
/*!**********************************!*\
  !*** ./app/graphql/resolvers.ts ***!
  \**********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var core_js_modules_es_object_values_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.values.js */ "core-js/modules/es.object.values.js");
/* harmony import */ var core_js_modules_es_object_values_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_values_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var deepmerge__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! deepmerge */ "deepmerge");
/* harmony import */ var deepmerge__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./index */ "./app/graphql/index.ts");















function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




var allResolvers = _toConsumableArray(Object.values(_index__WEBPACK_IMPORTED_MODULE_15__[/* mergedResolvers */ "a"]));

var resolversObj = {};
allResolvers.forEach(function (resolver) {
  resolversObj = deepmerge__WEBPACK_IMPORTED_MODULE_14___default.a.all([resolversObj, resolver]);
});
/* harmony default export */ __webpack_exports__["a"] = (resolversObj);

/***/ }),

/***/ "./app/graphql/schema.ts":
/*!*******************************!*\
  !*** ./app/graphql/schema.ts ***!
  \*******************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var core_js_modules_es_object_values_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.values.js */ "core-js/modules/es.object.values.js");
/* harmony import */ var core_js_modules_es_object_values_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_values_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var merge_graphql_schemas__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! merge-graphql-schemas */ "merge-graphql-schemas");
/* harmony import */ var merge_graphql_schemas__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(merge_graphql_schemas__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./index */ "./app/graphql/index.ts");













function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




var allSchemas = _toConsumableArray(Object.values(_index__WEBPACK_IMPORTED_MODULE_13__[/* mergedSchema */ "b"]));

var schema = Object(merge_graphql_schemas__WEBPACK_IMPORTED_MODULE_12__["mergeTypes"])(allSchemas, {
  all: true
});
/* harmony default export */ __webpack_exports__["a"] = (schema);

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
    reinstateDroppedPolicy: "".concat(process.env.API, "/rent-guarantee/api/v1/admin/reinstateDroppedPolicy"),
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

/***/ "./app/server/index.ts":
/*!*****************************!*\
  !*** ./app/server/index.ts ***!
  \*****************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);


var server = __webpack_require__(/*! ./server */ "./app/server/server.ts")["default"];
/* eslint-disable no-console */


if (true) {
  module.hot.accept(/*! ./server */ "./app/server/server.ts", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { (function () {
    console.log("HMR reloading ./server ...");

    try {
      server = __webpack_require__(/*! ./server */ "./app/server/server.ts")["default"];
    } catch (err) {
      console.log(err);
    }
  })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this));
  console.log('✅ server HMR enabled');
}

var port = process.env.PORT;
/* harmony default export */ __webpack_exports__["default"] = (express__WEBPACK_IMPORTED_MODULE_0___default()().use(function (req, res) {
  return server.handle(req, res);
}).listen(port, function () {
  // eslint-disable-next-line no-console
  console.log({
    port: port,
    msg: 'server started'
  });
}));

/***/ }),

/***/ "./app/server/middleware/healthcheck.ts":
/*!**********************************************!*\
  !*** ./app/server/middleware/healthcheck.ts ***!
  \**********************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.parse-int.js */ "core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.define-properties.js */ "core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _zg_rentals_particles_js_healthcheck__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @zg-rentals/particles-js-healthcheck */ "../../modules/particles-js-healthcheck/src/index.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












0;

function createHealthcheck(logger) {
  var healthcheck = new _zg_rentals_particles_js_healthcheck__WEBPACK_IMPORTED_MODULE_10__[/* Healthcheck */ "a"]({
    accessToken: 'changeit',
    logger: logger,
    buildNumber: parseInt(undefined || '-1', 10),
    onPing: function onPing(_ref) {
      var response = _ref.response,
          hasAccess = _ref.hasAccess;
      return _objectSpread(_objectSpread({}, response), hasAccess ? {
        zgApi: process.env.ZG_API
      } : {});
    }
  });
  return healthcheck;
}

/* harmony default export */ __webpack_exports__["a"] = (createHealthcheck);

/***/ }),

/***/ "./app/server/middleware/nodeMonitor.ts":
/*!**********************************************!*\
  !*** ./app/server/middleware/nodeMonitor.ts ***!
  \**********************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_nodeMonitor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/nodeMonitor */ "./app/server/utils/nodeMonitor.ts");


/* harmony default export */ __webpack_exports__["a"] = (function (app) {
  app.use(_utils_nodeMonitor__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].onRequest.bind(_utils_nodeMonitor__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]));
});

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
var pontoonApi = env_var__WEBPACK_IMPORTED_MODULE_3___default.a.get('PONTOON_API').asString();
var pontoonApiKey = env_var__WEBPACK_IMPORTED_MODULE_3___default.a.get('PONTOON_API_KEY').asString();
var startupDate = env_var__WEBPACK_IMPORTED_MODULE_3___default.a.get('APP_START_TIME').asInt() || Date.now();
var gitCommit = "e77539191cedfab7d7c11fcc67fc53642d51106c";
var gitBranch = "main"; // I'm using presence or lack of pontoon env vars to indicate env support -- could also be done through new env var PONTOON_ENABLED

var pontoonEnabled = pontoonApi && pontoonApiKey;
var plugins = [];
var reporters = [];
var monitorLogger = _server_utils_log__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].child({
  name: 'monitor-node'
});

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
    buildDate:  false ? undefined : parseInt(1669935288658),
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

/***/ "./app/server/utils/tracer.ts":
/*!************************************!*\
  !*** ./app/server/utils/tracer.ts ***!
  \************************************/
/*! exports provided: tracer */
/*! exports used: tracer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return tracer; });
/* harmony import */ var _zg_rentals_trace_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @zg-rentals/trace-node */ "../../modules/trace-node/src/index.ts");

var service = process.env.DD_SERVICE || "rent-guarantee-graphql";
var hostname = process.env.DD_TRACE_AGENT_HOSTNAME || process.env.DD_AGENT_HOST || 'datadog-agent';
var plugin = new _zg_rentals_trace_node__WEBPACK_IMPORTED_MODULE_0__[/* DatadogTracerPlugin */ "a"]({
  service: "rent-guarantee-graphql",
  version: String(undefined),
  sampleRate: 0.5,
  hostname: hostname
});
plugin.tracer.use('express', {
  service: service
});
plugin.tracer.use('graphql', {
  service: service
});
var tracer = new _zg_rentals_trace_node__WEBPACK_IMPORTED_MODULE_0__[/* NodeTracer */ "b"]({
  plugin: plugin
});

/***/ }),

/***/ 0:
/*!***********************************!*\
  !*** multi ./app/server/index.ts ***!
  \***********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/opagani/projects/zillowgroup/rentals-js/apps/rent-guarantee-graphql/app/server/index.ts */"./app/server/index.ts");


/***/ }),

/***/ "@apollo/federation":
/*!*************************************!*\
  !*** external "@apollo/federation" ***!
  \*************************************/
/*! no static exports found */
/*! exports used: buildFederatedSchema */
/***/ (function(module, exports) {

module.exports = require("@apollo/federation");

/***/ }),

/***/ "apollo-server-express":
/*!****************************************!*\
  !*** external "apollo-server-express" ***!
  \****************************************/
/*! no static exports found */
/*! exports used: ApolloServer */
/***/ (function(module, exports) {

module.exports = require("apollo-server-express");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "cookie":
/*!*************************!*\
  !*** external "cookie" ***!
  \*************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports) {

module.exports = require("cookie");

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports) {

module.exports = require("cookie-parser");

/***/ }),

/***/ "core-js/modules/es.array.concat.js":
/*!*****************************************************!*\
  !*** external "core-js/modules/es.array.concat.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.concat.js");

/***/ }),

/***/ "core-js/modules/es.array.filter.js":
/*!*****************************************************!*\
  !*** external "core-js/modules/es.array.filter.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.filter.js");

/***/ }),

/***/ "core-js/modules/es.array.find.js":
/*!***************************************************!*\
  !*** external "core-js/modules/es.array.find.js" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.find.js");

/***/ }),

/***/ "core-js/modules/es.array.for-each.js":
/*!*******************************************************!*\
  !*** external "core-js/modules/es.array.for-each.js" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.for-each.js");

/***/ }),

/***/ "core-js/modules/es.array.from.js":
/*!***************************************************!*\
  !*** external "core-js/modules/es.array.from.js" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.from.js");

/***/ }),

/***/ "core-js/modules/es.array.includes.js":
/*!*******************************************************!*\
  !*** external "core-js/modules/es.array.includes.js" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.includes.js");

/***/ }),

/***/ "core-js/modules/es.array.index-of.js":
/*!*******************************************************!*\
  !*** external "core-js/modules/es.array.index-of.js" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.index-of.js");

/***/ }),

/***/ "core-js/modules/es.array.is-array.js":
/*!*******************************************************!*\
  !*** external "core-js/modules/es.array.is-array.js" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.is-array.js");

/***/ }),

/***/ "core-js/modules/es.array.iterator.js":
/*!*******************************************************!*\
  !*** external "core-js/modules/es.array.iterator.js" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.iterator.js");

/***/ }),

/***/ "core-js/modules/es.array.join.js":
/*!***************************************************!*\
  !*** external "core-js/modules/es.array.join.js" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.join.js");

/***/ }),

/***/ "core-js/modules/es.array.map.js":
/*!**************************************************!*\
  !*** external "core-js/modules/es.array.map.js" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.map.js");

/***/ }),

/***/ "core-js/modules/es.array.reduce.js":
/*!*****************************************************!*\
  !*** external "core-js/modules/es.array.reduce.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.reduce.js");

/***/ }),

/***/ "core-js/modules/es.array.slice.js":
/*!****************************************************!*\
  !*** external "core-js/modules/es.array.slice.js" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.slice.js");

/***/ }),

/***/ "core-js/modules/es.date.now.js":
/*!*************************************************!*\
  !*** external "core-js/modules/es.date.now.js" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.date.now.js");

/***/ }),

/***/ "core-js/modules/es.date.to-iso-string.js":
/*!***********************************************************!*\
  !*** external "core-js/modules/es.date.to-iso-string.js" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.date.to-iso-string.js");

/***/ }),

/***/ "core-js/modules/es.date.to-string.js":
/*!*******************************************************!*\
  !*** external "core-js/modules/es.date.to-string.js" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.date.to-string.js");

/***/ }),

/***/ "core-js/modules/es.function.bind.js":
/*!******************************************************!*\
  !*** external "core-js/modules/es.function.bind.js" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.function.bind.js");

/***/ }),

/***/ "core-js/modules/es.function.name.js":
/*!******************************************************!*\
  !*** external "core-js/modules/es.function.name.js" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.function.name.js");

/***/ }),

/***/ "core-js/modules/es.map.js":
/*!********************************************!*\
  !*** external "core-js/modules/es.map.js" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.map.js");

/***/ }),

/***/ "core-js/modules/es.number.constructor.js":
/*!***********************************************************!*\
  !*** external "core-js/modules/es.number.constructor.js" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.number.constructor.js");

/***/ }),

/***/ "core-js/modules/es.number.is-finite.js":
/*!*********************************************************!*\
  !*** external "core-js/modules/es.number.is-finite.js" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.number.is-finite.js");

/***/ }),

/***/ "core-js/modules/es.object.assign.js":
/*!******************************************************!*\
  !*** external "core-js/modules/es.object.assign.js" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.object.assign.js");

/***/ }),

/***/ "core-js/modules/es.object.create.js":
/*!******************************************************!*\
  !*** external "core-js/modules/es.object.create.js" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.object.create.js");

/***/ }),

/***/ "core-js/modules/es.object.define-properties.js":
/*!*****************************************************************!*\
  !*** external "core-js/modules/es.object.define-properties.js" ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.object.define-properties.js");

/***/ }),

/***/ "core-js/modules/es.object.define-property.js":
/*!***************************************************************!*\
  !*** external "core-js/modules/es.object.define-property.js" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.object.define-property.js");

/***/ }),

/***/ "core-js/modules/es.object.freeze.js":
/*!******************************************************!*\
  !*** external "core-js/modules/es.object.freeze.js" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.object.freeze.js");

/***/ }),

/***/ "core-js/modules/es.object.get-own-property-descriptor.js":
/*!***************************************************************************!*\
  !*** external "core-js/modules/es.object.get-own-property-descriptor.js" ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.object.get-own-property-descriptor.js");

/***/ }),

/***/ "core-js/modules/es.object.get-own-property-descriptors.js":
/*!****************************************************************************!*\
  !*** external "core-js/modules/es.object.get-own-property-descriptors.js" ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.object.get-own-property-descriptors.js");

/***/ }),

/***/ "core-js/modules/es.object.get-prototype-of.js":
/*!****************************************************************!*\
  !*** external "core-js/modules/es.object.get-prototype-of.js" ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.object.get-prototype-of.js");

/***/ }),

/***/ "core-js/modules/es.object.keys.js":
/*!****************************************************!*\
  !*** external "core-js/modules/es.object.keys.js" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.object.keys.js");

/***/ }),

/***/ "core-js/modules/es.object.set-prototype-of.js":
/*!****************************************************************!*\
  !*** external "core-js/modules/es.object.set-prototype-of.js" ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.object.set-prototype-of.js");

/***/ }),

/***/ "core-js/modules/es.object.to-string.js":
/*!*********************************************************!*\
  !*** external "core-js/modules/es.object.to-string.js" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.object.to-string.js");

/***/ }),

/***/ "core-js/modules/es.object.values.js":
/*!******************************************************!*\
  !*** external "core-js/modules/es.object.values.js" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.object.values.js");

/***/ }),

/***/ "core-js/modules/es.parse-int.js":
/*!**************************************************!*\
  !*** external "core-js/modules/es.parse-int.js" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.parse-int.js");

/***/ }),

/***/ "core-js/modules/es.promise.finally.js":
/*!********************************************************!*\
  !*** external "core-js/modules/es.promise.finally.js" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.promise.finally.js");

/***/ }),

/***/ "core-js/modules/es.promise.js":
/*!************************************************!*\
  !*** external "core-js/modules/es.promise.js" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.promise.js");

/***/ }),

/***/ "core-js/modules/es.reflect.construct.js":
/*!**********************************************************!*\
  !*** external "core-js/modules/es.reflect.construct.js" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.reflect.construct.js");

/***/ }),

/***/ "core-js/modules/es.regexp.constructor.js":
/*!***********************************************************!*\
  !*** external "core-js/modules/es.regexp.constructor.js" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.regexp.constructor.js");

/***/ }),

/***/ "core-js/modules/es.regexp.exec.js":
/*!****************************************************!*\
  !*** external "core-js/modules/es.regexp.exec.js" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.regexp.exec.js");

/***/ }),

/***/ "core-js/modules/es.regexp.to-string.js":
/*!*********************************************************!*\
  !*** external "core-js/modules/es.regexp.to-string.js" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.regexp.to-string.js");

/***/ }),

/***/ "core-js/modules/es.set.js":
/*!********************************************!*\
  !*** external "core-js/modules/es.set.js" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.set.js");

/***/ }),

/***/ "core-js/modules/es.string.includes.js":
/*!********************************************************!*\
  !*** external "core-js/modules/es.string.includes.js" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.string.includes.js");

/***/ }),

/***/ "core-js/modules/es.string.iterator.js":
/*!********************************************************!*\
  !*** external "core-js/modules/es.string.iterator.js" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.string.iterator.js");

/***/ }),

/***/ "core-js/modules/es.string.match.js":
/*!*****************************************************!*\
  !*** external "core-js/modules/es.string.match.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.string.match.js");

/***/ }),

/***/ "core-js/modules/es.string.pad-start.js":
/*!*********************************************************!*\
  !*** external "core-js/modules/es.string.pad-start.js" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.string.pad-start.js");

/***/ }),

/***/ "core-js/modules/es.string.replace.js":
/*!*******************************************************!*\
  !*** external "core-js/modules/es.string.replace.js" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.string.replace.js");

/***/ }),

/***/ "core-js/modules/es.string.search.js":
/*!******************************************************!*\
  !*** external "core-js/modules/es.string.search.js" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.string.search.js");

/***/ }),

/***/ "core-js/modules/es.string.split.js":
/*!*****************************************************!*\
  !*** external "core-js/modules/es.string.split.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.string.split.js");

/***/ }),

/***/ "core-js/modules/es.string.starts-with.js":
/*!***********************************************************!*\
  !*** external "core-js/modules/es.string.starts-with.js" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.string.starts-with.js");

/***/ }),

/***/ "core-js/modules/es.string.trim.js":
/*!****************************************************!*\
  !*** external "core-js/modules/es.string.trim.js" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.string.trim.js");

/***/ }),

/***/ "core-js/modules/es.symbol.description.js":
/*!***********************************************************!*\
  !*** external "core-js/modules/es.symbol.description.js" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.symbol.description.js");

/***/ }),

/***/ "core-js/modules/es.symbol.iterator.js":
/*!********************************************************!*\
  !*** external "core-js/modules/es.symbol.iterator.js" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.symbol.iterator.js");

/***/ }),

/***/ "core-js/modules/es.symbol.js":
/*!***********************************************!*\
  !*** external "core-js/modules/es.symbol.js" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.symbol.js");

/***/ }),

/***/ "core-js/modules/web.dom-collections.for-each.js":
/*!******************************************************************!*\
  !*** external "core-js/modules/web.dom-collections.for-each.js" ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/web.dom-collections.for-each.js");

/***/ }),

/***/ "core-js/modules/web.dom-collections.iterator.js":
/*!******************************************************************!*\
  !*** external "core-js/modules/web.dom-collections.iterator.js" ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/web.dom-collections.iterator.js");

/***/ }),

/***/ "core-js/modules/web.timers.js":
/*!************************************************!*\
  !*** external "core-js/modules/web.timers.js" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/web.timers.js");

/***/ }),

/***/ "core-js/modules/web.url.js":
/*!*********************************************!*\
  !*** external "core-js/modules/web.url.js" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/web.url.js");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports) {

module.exports = require("crypto");

/***/ }),

/***/ "date-fns":
/*!***************************!*\
  !*** external "date-fns" ***!
  \***************************/
/*! no static exports found */
/*! exports used: fromUnixTime */
/***/ (function(module, exports) {

module.exports = require("date-fns");

/***/ }),

/***/ "dd-trace":
/*!***************************!*\
  !*** external "dd-trace" ***!
  \***************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports) {

module.exports = require("dd-trace");

/***/ }),

/***/ "deepmerge":
/*!****************************!*\
  !*** external "deepmerge" ***!
  \****************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports) {

module.exports = require("deepmerge");

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

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "express-http-context":
/*!***************************************!*\
  !*** external "express-http-context" ***!
  \***************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports) {

module.exports = require("express-http-context");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "graphql-scalars":
/*!**********************************!*\
  !*** external "graphql-scalars" ***!
  \**********************************/
/*! no static exports found */
/*! exports used: DateResolver, DateTypeDefinition */
/***/ (function(module, exports) {

module.exports = require("graphql-scalars");

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports) {

module.exports = require("https");

/***/ }),

/***/ "ip-range-check":
/*!*********************************!*\
  !*** external "ip-range-check" ***!
  \*********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("ip-range-check");

/***/ }),

/***/ "merge-graphql-schemas":
/*!****************************************!*\
  !*** external "merge-graphql-schemas" ***!
  \****************************************/
/*! no static exports found */
/*! exports used: mergeTypes */
/***/ (function(module, exports) {

module.exports = require("merge-graphql-schemas");

/***/ }),

/***/ "nano-time":
/*!****************************!*\
  !*** external "nano-time" ***!
  \****************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports) {

module.exports = require("nano-time");

/***/ }),

/***/ "node-fetch":
/*!*****************************!*\
  !*** external "node-fetch" ***!
  \*****************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

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

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports) {

module.exports = require("os");

/***/ }),

/***/ "perf_hooks":
/*!*****************************!*\
  !*** external "perf_hooks" ***!
  \*****************************/
/*! no static exports found */
/*! exports used: PerformanceObserver, constants */
/***/ (function(module, exports) {

module.exports = require("perf_hooks");

/***/ }),

/***/ "pino":
/*!***********************!*\
  !*** external "pino" ***!
  \***********************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports) {

module.exports = require("pino");

/***/ }),

/***/ "pino-http":
/*!****************************!*\
  !*** external "pino-http" ***!
  \****************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports) {

module.exports = require("pino-http");

/***/ }),

/***/ "pino-pretty":
/*!******************************!*\
  !*** external "pino-pretty" ***!
  \******************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports) {

module.exports = require("pino-pretty");

/***/ }),

/***/ "properties-reader":
/*!************************************!*\
  !*** external "properties-reader" ***!
  \************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports) {

module.exports = require("properties-reader");

/***/ }),

/***/ "read-pkg":
/*!***************************!*\
  !*** external "read-pkg" ***!
  \***************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports) {

module.exports = require("read-pkg");

/***/ }),

/***/ "regenerator-runtime/runtime.js":
/*!*************************************************!*\
  !*** external "regenerator-runtime/runtime.js" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime/runtime.js");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/*! no static exports found */
/*! exports used: Writable */
/***/ (function(module, exports) {

module.exports = require("stream");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/*! exports used: URL, default */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "v8":
/*!*********************!*\
  !*** external "v8" ***!
  \*********************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports) {

module.exports = require("v8");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map