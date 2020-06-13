(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static/development/pages/index.js"],{

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/lodash/_DataView.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_DataView.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView');

module.exports = DataView;


/***/ }),

/***/ "./node_modules/lodash/_Hash.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_Hash.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var hashClear = __webpack_require__(/*! ./_hashClear */ "./node_modules/lodash/_hashClear.js"),
    hashDelete = __webpack_require__(/*! ./_hashDelete */ "./node_modules/lodash/_hashDelete.js"),
    hashGet = __webpack_require__(/*! ./_hashGet */ "./node_modules/lodash/_hashGet.js"),
    hashHas = __webpack_require__(/*! ./_hashHas */ "./node_modules/lodash/_hashHas.js"),
    hashSet = __webpack_require__(/*! ./_hashSet */ "./node_modules/lodash/_hashSet.js");

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;


/***/ }),

/***/ "./node_modules/lodash/_ListCache.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_ListCache.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var listCacheClear = __webpack_require__(/*! ./_listCacheClear */ "./node_modules/lodash/_listCacheClear.js"),
    listCacheDelete = __webpack_require__(/*! ./_listCacheDelete */ "./node_modules/lodash/_listCacheDelete.js"),
    listCacheGet = __webpack_require__(/*! ./_listCacheGet */ "./node_modules/lodash/_listCacheGet.js"),
    listCacheHas = __webpack_require__(/*! ./_listCacheHas */ "./node_modules/lodash/_listCacheHas.js"),
    listCacheSet = __webpack_require__(/*! ./_listCacheSet */ "./node_modules/lodash/_listCacheSet.js");

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),

/***/ "./node_modules/lodash/_Map.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/_Map.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),

/***/ "./node_modules/lodash/_MapCache.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_MapCache.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var mapCacheClear = __webpack_require__(/*! ./_mapCacheClear */ "./node_modules/lodash/_mapCacheClear.js"),
    mapCacheDelete = __webpack_require__(/*! ./_mapCacheDelete */ "./node_modules/lodash/_mapCacheDelete.js"),
    mapCacheGet = __webpack_require__(/*! ./_mapCacheGet */ "./node_modules/lodash/_mapCacheGet.js"),
    mapCacheHas = __webpack_require__(/*! ./_mapCacheHas */ "./node_modules/lodash/_mapCacheHas.js"),
    mapCacheSet = __webpack_require__(/*! ./_mapCacheSet */ "./node_modules/lodash/_mapCacheSet.js");

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;


/***/ }),

/***/ "./node_modules/lodash/_Promise.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_Promise.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Promise = getNative(root, 'Promise');

module.exports = Promise;


/***/ }),

/***/ "./node_modules/lodash/_Set.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/_Set.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');

module.exports = Set;


/***/ }),

/***/ "./node_modules/lodash/_SetCache.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_SetCache.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(/*! ./_MapCache */ "./node_modules/lodash/_MapCache.js"),
    setCacheAdd = __webpack_require__(/*! ./_setCacheAdd */ "./node_modules/lodash/_setCacheAdd.js"),
    setCacheHas = __webpack_require__(/*! ./_setCacheHas */ "./node_modules/lodash/_setCacheHas.js");

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

module.exports = SetCache;


/***/ }),

/***/ "./node_modules/lodash/_Stack.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_Stack.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js"),
    stackClear = __webpack_require__(/*! ./_stackClear */ "./node_modules/lodash/_stackClear.js"),
    stackDelete = __webpack_require__(/*! ./_stackDelete */ "./node_modules/lodash/_stackDelete.js"),
    stackGet = __webpack_require__(/*! ./_stackGet */ "./node_modules/lodash/_stackGet.js"),
    stackHas = __webpack_require__(/*! ./_stackHas */ "./node_modules/lodash/_stackHas.js"),
    stackSet = __webpack_require__(/*! ./_stackSet */ "./node_modules/lodash/_stackSet.js");

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

module.exports = Stack;


/***/ }),

/***/ "./node_modules/lodash/_Symbol.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_Symbol.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ "./node_modules/lodash/_Uint8Array.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_Uint8Array.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Built-in value references. */
var Uint8Array = root.Uint8Array;

module.exports = Uint8Array;


/***/ }),

/***/ "./node_modules/lodash/_WeakMap.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_WeakMap.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root, 'WeakMap');

module.exports = WeakMap;


/***/ }),

/***/ "./node_modules/lodash/_arrayFilter.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_arrayFilter.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

module.exports = arrayFilter;


/***/ }),

/***/ "./node_modules/lodash/_arrayLikeKeys.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_arrayLikeKeys.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseTimes = __webpack_require__(/*! ./_baseTimes */ "./node_modules/lodash/_baseTimes.js"),
    isArguments = __webpack_require__(/*! ./isArguments */ "./node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "./node_modules/lodash/isBuffer.js"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "./node_modules/lodash/_isIndex.js"),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ "./node_modules/lodash/isTypedArray.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;


/***/ }),

/***/ "./node_modules/lodash/_arrayPush.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_arrayPush.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

module.exports = arrayPush;


/***/ }),

/***/ "./node_modules/lodash/_arraySome.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_arraySome.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

module.exports = arraySome;


/***/ }),

/***/ "./node_modules/lodash/_assocIndexOf.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_assocIndexOf.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js");

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ }),

/***/ "./node_modules/lodash/_baseGetAllKeys.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_baseGetAllKeys.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(/*! ./_arrayPush */ "./node_modules/lodash/_arrayPush.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js");

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

module.exports = baseGetAllKeys;


/***/ }),

/***/ "./node_modules/lodash/_baseGetTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseGetTag.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    getRawTag = __webpack_require__(/*! ./_getRawTag */ "./node_modules/lodash/_getRawTag.js"),
    objectToString = __webpack_require__(/*! ./_objectToString */ "./node_modules/lodash/_objectToString.js");

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),

/***/ "./node_modules/lodash/_baseIsArguments.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseIsArguments.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ }),

/***/ "./node_modules/lodash/_baseIsEqual.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseIsEqual.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqualDeep = __webpack_require__(/*! ./_baseIsEqualDeep */ "./node_modules/lodash/_baseIsEqualDeep.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

module.exports = baseIsEqual;


/***/ }),

/***/ "./node_modules/lodash/_baseIsEqualDeep.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseIsEqualDeep.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(/*! ./_Stack */ "./node_modules/lodash/_Stack.js"),
    equalArrays = __webpack_require__(/*! ./_equalArrays */ "./node_modules/lodash/_equalArrays.js"),
    equalByTag = __webpack_require__(/*! ./_equalByTag */ "./node_modules/lodash/_equalByTag.js"),
    equalObjects = __webpack_require__(/*! ./_equalObjects */ "./node_modules/lodash/_equalObjects.js"),
    getTag = __webpack_require__(/*! ./_getTag */ "./node_modules/lodash/_getTag.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "./node_modules/lodash/isBuffer.js"),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ "./node_modules/lodash/isTypedArray.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    objectTag = '[object Object]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = objIsArr ? arrayTag : getTag(object),
      othTag = othIsArr ? arrayTag : getTag(other);

  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;

  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

module.exports = baseIsEqualDeep;


/***/ }),

/***/ "./node_modules/lodash/_baseIsNative.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseIsNative.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(/*! ./isFunction */ "./node_modules/lodash/isFunction.js"),
    isMasked = __webpack_require__(/*! ./_isMasked */ "./node_modules/lodash/_isMasked.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    toSource = __webpack_require__(/*! ./_toSource */ "./node_modules/lodash/_toSource.js");

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),

/***/ "./node_modules/lodash/_baseIsTypedArray.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_baseIsTypedArray.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isLength = __webpack_require__(/*! ./isLength */ "./node_modules/lodash/isLength.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;


/***/ }),

/***/ "./node_modules/lodash/_baseKeys.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseKeys.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isPrototype = __webpack_require__(/*! ./_isPrototype */ "./node_modules/lodash/_isPrototype.js"),
    nativeKeys = __webpack_require__(/*! ./_nativeKeys */ "./node_modules/lodash/_nativeKeys.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeys;


/***/ }),

/***/ "./node_modules/lodash/_baseTimes.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseTimes.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;


/***/ }),

/***/ "./node_modules/lodash/_baseUnary.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseUnary.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),

/***/ "./node_modules/lodash/_cacheHas.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_cacheHas.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

module.exports = cacheHas;


/***/ }),

/***/ "./node_modules/lodash/_coreJsData.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_coreJsData.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),

/***/ "./node_modules/lodash/_equalArrays.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_equalArrays.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__(/*! ./_SetCache */ "./node_modules/lodash/_SetCache.js"),
    arraySome = __webpack_require__(/*! ./_arraySome */ "./node_modules/lodash/_arraySome.js"),
    cacheHas = __webpack_require__(/*! ./_cacheHas */ "./node_modules/lodash/_cacheHas.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(array);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

module.exports = equalArrays;


/***/ }),

/***/ "./node_modules/lodash/_equalByTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_equalByTag.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    Uint8Array = __webpack_require__(/*! ./_Uint8Array */ "./node_modules/lodash/_Uint8Array.js"),
    eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js"),
    equalArrays = __webpack_require__(/*! ./_equalArrays */ "./node_modules/lodash/_equalArrays.js"),
    mapToArray = __webpack_require__(/*! ./_mapToArray */ "./node_modules/lodash/_mapToArray.js"),
    setToArray = __webpack_require__(/*! ./_setToArray */ "./node_modules/lodash/_setToArray.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]';

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

module.exports = equalByTag;


/***/ }),

/***/ "./node_modules/lodash/_equalObjects.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_equalObjects.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getAllKeys = __webpack_require__(/*! ./_getAllKeys */ "./node_modules/lodash/_getAllKeys.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(object);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

module.exports = equalObjects;


/***/ }),

/***/ "./node_modules/lodash/_freeGlobal.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_freeGlobal.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/lodash/_getAllKeys.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getAllKeys.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__(/*! ./_baseGetAllKeys */ "./node_modules/lodash/_baseGetAllKeys.js"),
    getSymbols = __webpack_require__(/*! ./_getSymbols */ "./node_modules/lodash/_getSymbols.js"),
    keys = __webpack_require__(/*! ./keys */ "./node_modules/lodash/keys.js");

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

module.exports = getAllKeys;


/***/ }),

/***/ "./node_modules/lodash/_getMapData.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getMapData.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isKeyable = __webpack_require__(/*! ./_isKeyable */ "./node_modules/lodash/_isKeyable.js");

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;


/***/ }),

/***/ "./node_modules/lodash/_getNative.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getNative.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__(/*! ./_baseIsNative */ "./node_modules/lodash/_baseIsNative.js"),
    getValue = __webpack_require__(/*! ./_getValue */ "./node_modules/lodash/_getValue.js");

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),

/***/ "./node_modules/lodash/_getRawTag.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getRawTag.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),

/***/ "./node_modules/lodash/_getSymbols.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getSymbols.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayFilter = __webpack_require__(/*! ./_arrayFilter */ "./node_modules/lodash/_arrayFilter.js"),
    stubArray = __webpack_require__(/*! ./stubArray */ "./node_modules/lodash/stubArray.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

module.exports = getSymbols;


/***/ }),

/***/ "./node_modules/lodash/_getTag.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_getTag.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DataView = __webpack_require__(/*! ./_DataView */ "./node_modules/lodash/_DataView.js"),
    Map = __webpack_require__(/*! ./_Map */ "./node_modules/lodash/_Map.js"),
    Promise = __webpack_require__(/*! ./_Promise */ "./node_modules/lodash/_Promise.js"),
    Set = __webpack_require__(/*! ./_Set */ "./node_modules/lodash/_Set.js"),
    WeakMap = __webpack_require__(/*! ./_WeakMap */ "./node_modules/lodash/_WeakMap.js"),
    baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    toSource = __webpack_require__(/*! ./_toSource */ "./node_modules/lodash/_toSource.js");

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

module.exports = getTag;


/***/ }),

/***/ "./node_modules/lodash/_getValue.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_getValue.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),

/***/ "./node_modules/lodash/_hashClear.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_hashClear.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;


/***/ }),

/***/ "./node_modules/lodash/_hashDelete.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_hashDelete.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;


/***/ }),

/***/ "./node_modules/lodash/_hashGet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashGet.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;


/***/ }),

/***/ "./node_modules/lodash/_hashHas.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashHas.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

module.exports = hashHas;


/***/ }),

/***/ "./node_modules/lodash/_hashSet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashSet.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;


/***/ }),

/***/ "./node_modules/lodash/_isIndex.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_isIndex.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),

/***/ "./node_modules/lodash/_isKeyable.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_isKeyable.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;


/***/ }),

/***/ "./node_modules/lodash/_isMasked.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_isMasked.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var coreJsData = __webpack_require__(/*! ./_coreJsData */ "./node_modules/lodash/_coreJsData.js");

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),

/***/ "./node_modules/lodash/_isPrototype.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_isPrototype.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;


/***/ }),

/***/ "./node_modules/lodash/_listCacheClear.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_listCacheClear.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ }),

/***/ "./node_modules/lodash/_listCacheDelete.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_listCacheDelete.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;


/***/ }),

/***/ "./node_modules/lodash/_listCacheGet.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheGet.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ }),

/***/ "./node_modules/lodash/_listCacheHas.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheHas.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ }),

/***/ "./node_modules/lodash/_listCacheSet.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheSet.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheClear.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_mapCacheClear.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Hash = __webpack_require__(/*! ./_Hash */ "./node_modules/lodash/_Hash.js"),
    ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js"),
    Map = __webpack_require__(/*! ./_Map */ "./node_modules/lodash/_Map.js");

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheDelete.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_mapCacheDelete.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheGet.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheGet.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheHas.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheHas.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheSet.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheSet.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;


/***/ }),

/***/ "./node_modules/lodash/_mapToArray.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_mapToArray.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

module.exports = mapToArray;


/***/ }),

/***/ "./node_modules/lodash/_nativeCreate.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_nativeCreate.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js");

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),

/***/ "./node_modules/lodash/_nativeKeys.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_nativeKeys.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(/*! ./_overArg */ "./node_modules/lodash/_overArg.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),

/***/ "./node_modules/lodash/_nodeUtil.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_nodeUtil.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/lodash/_freeGlobal.js");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/lodash/_objectToString.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_objectToString.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ "./node_modules/lodash/_overArg.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_overArg.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),

/***/ "./node_modules/lodash/_root.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_root.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/lodash/_freeGlobal.js");

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ "./node_modules/lodash/_setCacheAdd.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_setCacheAdd.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

module.exports = setCacheAdd;


/***/ }),

/***/ "./node_modules/lodash/_setCacheHas.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_setCacheHas.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

module.exports = setCacheHas;


/***/ }),

/***/ "./node_modules/lodash/_setToArray.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_setToArray.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

module.exports = setToArray;


/***/ }),

/***/ "./node_modules/lodash/_stackClear.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_stackClear.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js");

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

module.exports = stackClear;


/***/ }),

/***/ "./node_modules/lodash/_stackDelete.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_stackDelete.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

module.exports = stackDelete;


/***/ }),

/***/ "./node_modules/lodash/_stackGet.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackGet.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

module.exports = stackGet;


/***/ }),

/***/ "./node_modules/lodash/_stackHas.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackHas.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

module.exports = stackHas;


/***/ }),

/***/ "./node_modules/lodash/_stackSet.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackSet.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js"),
    Map = __webpack_require__(/*! ./_Map */ "./node_modules/lodash/_Map.js"),
    MapCache = __webpack_require__(/*! ./_MapCache */ "./node_modules/lodash/_MapCache.js");

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

module.exports = stackSet;


/***/ }),

/***/ "./node_modules/lodash/_toSource.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_toSource.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),

/***/ "./node_modules/lodash/eq.js":
/*!***********************************!*\
  !*** ./node_modules/lodash/eq.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),

/***/ "./node_modules/lodash/isArguments.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/isArguments.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsArguments = __webpack_require__(/*! ./_baseIsArguments */ "./node_modules/lodash/_baseIsArguments.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ }),

/***/ "./node_modules/lodash/isArray.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/isArray.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),

/***/ "./node_modules/lodash/isArrayLike.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/isArrayLike.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(/*! ./isFunction */ "./node_modules/lodash/isFunction.js"),
    isLength = __webpack_require__(/*! ./isLength */ "./node_modules/lodash/isLength.js");

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),

/***/ "./node_modules/lodash/isBuffer.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isBuffer.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js"),
    stubFalse = __webpack_require__(/*! ./stubFalse */ "./node_modules/lodash/stubFalse.js");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/lodash/isEqual.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/isEqual.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqual = __webpack_require__(/*! ./_baseIsEqual */ "./node_modules/lodash/_baseIsEqual.js");

/**
 * Performs a deep comparison between two values to determine if they are
 * equivalent.
 *
 * **Note:** This method supports comparing arrays, array buffers, booleans,
 * date objects, error objects, maps, numbers, `Object` objects, regexes,
 * sets, strings, symbols, and typed arrays. `Object` objects are compared
 * by their own, not inherited, enumerable properties. Functions and DOM
 * nodes are compared by strict equality, i.e. `===`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.isEqual(object, other);
 * // => true
 *
 * object === other;
 * // => false
 */
function isEqual(value, other) {
  return baseIsEqual(value, other);
}

module.exports = isEqual;


/***/ }),

/***/ "./node_modules/lodash/isFunction.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/isFunction.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),

/***/ "./node_modules/lodash/isLength.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isLength.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),

/***/ "./node_modules/lodash/isObject.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isObject.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),

/***/ "./node_modules/lodash/isObjectLike.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isObjectLike.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),

/***/ "./node_modules/lodash/isTypedArray.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isTypedArray.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsTypedArray = __webpack_require__(/*! ./_baseIsTypedArray */ "./node_modules/lodash/_baseIsTypedArray.js"),
    baseUnary = __webpack_require__(/*! ./_baseUnary */ "./node_modules/lodash/_baseUnary.js"),
    nodeUtil = __webpack_require__(/*! ./_nodeUtil */ "./node_modules/lodash/_nodeUtil.js");

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;


/***/ }),

/***/ "./node_modules/lodash/keys.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/keys.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(/*! ./_arrayLikeKeys */ "./node_modules/lodash/_arrayLikeKeys.js"),
    baseKeys = __webpack_require__(/*! ./_baseKeys */ "./node_modules/lodash/_baseKeys.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js");

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;


/***/ }),

/***/ "./node_modules/lodash/stubArray.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/stubArray.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

module.exports = stubArray;


/***/ }),

/***/ "./node_modules/lodash/stubFalse.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/stubFalse.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2FUsers%2Flowesyang%2FDocuments%2Fwebsite%2Fthe-oasis-website%2Fpages%2Findex.js!./":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2FUsers%2Flowesyang%2FDocuments%2Fwebsite%2Fthe-oasis-website%2Fpages%2Findex.js ***!
  \**********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/", function() {
      var mod = __webpack_require__(/*! ./pages/index.js */ "./pages/index.js")
      if(true) {
        module.hot.accept(/*! ./pages/index.js */ "./pages/index.js", function() {
          if(!next.router.components["/"]) return
          var updatedPage = __webpack_require__(/*! ./pages/index.js */ "./pages/index.js")
          next.router.update("/", updatedPage)
        })
      }
      return mod
    }]);
  

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/amp-context.js":
/*!***************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/amp-context.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

exports.AmpStateContext = React.createContext({});

if (true) {
  exports.AmpStateContext.displayName = 'AmpStateContext';
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/amp.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/amp.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var amp_context_1 = __webpack_require__(/*! ./amp-context */ "./node_modules/next/dist/next-server/lib/amp-context.js");

function isInAmpMode() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$ampFirst = _ref.ampFirst,
      ampFirst = _ref$ampFirst === void 0 ? false : _ref$ampFirst,
      _ref$hybrid = _ref.hybrid,
      hybrid = _ref$hybrid === void 0 ? false : _ref$hybrid,
      _ref$hasQuery = _ref.hasQuery,
      hasQuery = _ref$hasQuery === void 0 ? false : _ref$hasQuery;

  return ampFirst || hybrid && hasQuery;
}

exports.isInAmpMode = isInAmpMode;

function useAmp() {
  // Don't assign the context value to a variable to save bytes
  return isInAmpMode(react_1["default"].useContext(amp_context_1.AmpStateContext));
}

exports.useAmp = useAmp;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/head-manager-context.js":
/*!************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/head-manager-context.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

exports.HeadManagerContext = React.createContext(null);

if (true) {
  exports.HeadManagerContext.displayName = 'HeadManagerContext';
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/head.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/head.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var side_effect_1 = __importDefault(__webpack_require__(/*! ./side-effect */ "./node_modules/next/dist/next-server/lib/side-effect.js"));

var amp_context_1 = __webpack_require__(/*! ./amp-context */ "./node_modules/next/dist/next-server/lib/amp-context.js");

var head_manager_context_1 = __webpack_require__(/*! ./head-manager-context */ "./node_modules/next/dist/next-server/lib/head-manager-context.js");

var amp_1 = __webpack_require__(/*! ./amp */ "./node_modules/next/dist/next-server/lib/amp.js");

function defaultHead() {
  var inAmpMode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var head = [react_1["default"].createElement("meta", {
    charSet: "utf-8"
  })];

  if (!inAmpMode) {
    head.push(react_1["default"].createElement("meta", {
      name: "viewport",
      content: "width=device-width"
    }));
  }

  return head;
}

exports.defaultHead = defaultHead;

function onlyReactElement(list, child) {
  // React children can be "string" or "number" in this case we ignore them for backwards compat
  if (typeof child === 'string' || typeof child === 'number') {
    return list;
  } // Adds support for React.Fragment


  if (child.type === react_1["default"].Fragment) {
    return list.concat(react_1["default"].Children.toArray(child.props.children).reduce(function (fragmentList, fragmentChild) {
      if (typeof fragmentChild === 'string' || typeof fragmentChild === 'number') {
        return fragmentList;
      }

      return fragmentList.concat(fragmentChild);
    }, []));
  }

  return list.concat(child);
}

var METATYPES = ['name', 'httpEquiv', 'charSet', 'itemProp'];
/*
 returns a function for filtering head child elements
 which shouldn't be duplicated, like <title/>
 Also adds support for deduplicated `key` properties
*/

function unique() {
  var keys = new Set();
  var tags = new Set();
  var metaTypes = new Set();
  var metaCategories = {};
  return function (h) {
    var unique = true;

    if (h.key && typeof h.key !== 'number' && h.key.indexOf('$') > 0) {
      var key = h.key.slice(h.key.indexOf('$') + 1);

      if (keys.has(key)) {
        unique = false;
      } else {
        keys.add(key);
      }
    } // eslint-disable-next-line default-case


    switch (h.type) {
      case 'title':
      case 'base':
        if (tags.has(h.type)) {
          unique = false;
        } else {
          tags.add(h.type);
        }

        break;

      case 'meta':
        for (var i = 0, len = METATYPES.length; i < len; i++) {
          var metatype = METATYPES[i];
          if (!h.props.hasOwnProperty(metatype)) continue;

          if (metatype === 'charSet') {
            if (metaTypes.has(metatype)) {
              unique = false;
            } else {
              metaTypes.add(metatype);
            }
          } else {
            var category = h.props[metatype];
            var categories = metaCategories[metatype] || new Set();

            if (categories.has(category)) {
              unique = false;
            } else {
              categories.add(category);
              metaCategories[metatype] = categories;
            }
          }
        }

        break;
    }

    return unique;
  };
}
/**
 *
 * @param headElements List of multiple <Head> instances
 */


function reduceComponents(headElements, props) {
  return headElements.reduce(function (list, headElement) {
    var headElementChildren = react_1["default"].Children.toArray(headElement.props.children);
    return list.concat(headElementChildren);
  }, []).reduce(onlyReactElement, []).reverse().concat(defaultHead(props.inAmpMode)).filter(unique()).reverse().map(function (c, i) {
    var key = c.key || i;
    return react_1["default"].cloneElement(c, {
      key: key
    });
  });
}

var Effect = side_effect_1["default"]();
/**
 * This component injects elements to `<head>` of your page.
 * To avoid duplicated `tags` in `<head>` you can use the `key` property, which will make sure every tag is only rendered once.
 */

function Head(_ref) {
  var children = _ref.children;
  return react_1["default"].createElement(amp_context_1.AmpStateContext.Consumer, null, function (ampState) {
    return react_1["default"].createElement(head_manager_context_1.HeadManagerContext.Consumer, null, function (updateHead) {
      return react_1["default"].createElement(Effect, {
        reduceComponentsToState: reduceComponents,
        handleStateChange: updateHead,
        inAmpMode: amp_1.isInAmpMode(ampState)
      }, children);
    });
  });
}

Head.rewind = Effect.rewind;
exports["default"] = Head;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/side-effect.js":
/*!***************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/side-effect.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");

var _assertThisInitialized = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");

var _inherits = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");

var _possibleConstructorReturn = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");

var _getPrototypeOf = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");

var _toConsumableArray = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var isServer = false;

exports["default"] = function () {
  var mountedInstances = new Set();
  var state;

  function emitChange(component) {
    state = component.props.reduceComponentsToState(_toConsumableArray(mountedInstances), component.props);

    if (component.props.handleStateChange) {
      component.props.handleStateChange(state);
    }
  }

  return /*#__PURE__*/function (_react_1$Component) {
    _inherits(_class, _react_1$Component);

    var _super = _createSuper(_class);

    _createClass(_class, null, [{
      key: "rewind",
      // Used when server rendering
      value: function rewind() {
        var recordedState = state;
        state = undefined;
        mountedInstances.clear();
        return recordedState;
      }
    }]);

    function _class(props) {
      var _this;

      _classCallCheck(this, _class);

      _this = _super.call(this, props);

      if (isServer) {
        mountedInstances.add(_assertThisInitialized(_this));
        emitChange(_assertThisInitialized(_this));
      }

      return _this;
    }

    _createClass(_class, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        mountedInstances.add(this);
        emitChange(this);
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate() {
        emitChange(this);
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        mountedInstances["delete"](this);
        emitChange(this);
      }
    }, {
      key: "render",
      value: function render() {
        return null;
      }
    }]);

    return _class;
  }(react_1.Component);
};

/***/ }),

/***/ "./node_modules/react-particles-js/cjs/particles.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-particles-js/cjs/particles.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){for(var r in t)e[r]=t[r]}(exports,function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=10)}([function(e,t){e.exports=__webpack_require__(/*! react */ "./node_modules/react/index.js")},function(e,t){e.exports=__webpack_require__(/*! tsparticles/dist/Enums/ShapeType */ "./node_modules/tsparticles/dist/Enums/ShapeType.js")},function(e,t){e.exports=__webpack_require__(/*! tsparticles/dist/Enums/PolygonMaskType */ "./node_modules/tsparticles/dist/Enums/PolygonMaskType.js")},function(e,t){e.exports=__webpack_require__(/*! tsparticles/dist/Enums/PolygonMaskInlineArrangement */ "./node_modules/tsparticles/dist/Enums/PolygonMaskInlineArrangement.js")},function(e,t){e.exports=__webpack_require__(/*! tsparticles/dist/Enums/PolygonMaskMoveType */ "./node_modules/tsparticles/dist/Enums/PolygonMaskMoveType.js")},function(e,t){e.exports=__webpack_require__(/*! tsparticles/dist/Enums/Modes/HoverMode */ "./node_modules/tsparticles/dist/Enums/Modes/HoverMode.js")},function(e,t){e.exports=__webpack_require__(/*! tsparticles/dist/Enums/Modes/ClickMode */ "./node_modules/tsparticles/dist/Enums/Modes/ClickMode.js")},function(e,t){e.exports=__webpack_require__(/*! tsparticles/dist/Enums/InteractivityDetect */ "./node_modules/tsparticles/dist/Enums/InteractivityDetect.js")},function(e,t){e.exports=__webpack_require__(/*! tsparticles/dist/Enums/OutMode */ "./node_modules/tsparticles/dist/Enums/OutMode.js")},function(e,t){e.exports=__webpack_require__(/*! tsparticles/dist/Enums/MoveDirection */ "./node_modules/tsparticles/dist/Enums/MoveDirection.js")},function(e,t,r){"use strict";function n(e){for(var r in e)t.hasOwnProperty(r)||(t[r]=e[r])}var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=o(r(11));t.Particles=i.default,n(r(7)),n(r(9)),n(r(8)),n(r(3)),n(r(4)),n(r(2)),n(r(17)),n(r(18)),n(r(1)),n(r(6)),n(r(19)),n(r(5)),t.default=i.default},function(e,t,r){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function i(e,t,r){return(i="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=c(e)););return e}(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(r):o.value}})(e,t,r||e)}function s(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?a(e):t}function a(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function u(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t},f=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var d=p(r(0)),y=r(0),v=f(r(12)),b=r(13),h=r(14),m=r(15),_=r(16),g=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(y,e);var t,r,n,p,f=(t=y,function(){var e,r=c(t);if(u()){var n=c(this).constructor;e=Reflect.construct(r,arguments,n)}else e=r.apply(this,arguments);return s(this,e)});function y(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,y),(t=f.call(this,e)).state={canvas:void 0,library:void 0},t.loadCanvas=t.loadCanvas.bind(a(t)),t}return r=y,(n=[{key:"buildParticlesLibrary",value:function(e,t){try{if(void 0===window)return null}catch(e){return null}var r=new m.Options;r.load(h.defaultParams),r.load(t),_.tsParticles.dom();var n=new b.Container(e,r);return this.props.particlesRef&&(this.props.particlesRef.current=n),n}},{key:"refresh",value:function(e){var t=this,r=this.state.canvas;r&&(this.destroy(),this.setState({library:this.buildParticlesLibrary(e.id,e.params)},(function(){t.loadCanvas(r)})))}},{key:"destroy",value:function(){this.state.library&&this.state.library.destroy()}},{key:"loadCanvas",value:function(e){var t=this;e&&this.setState({canvas:e},(function(){var r=t.state.library;r&&(r.canvas.loadCanvas(e),r.start())}))}},{key:"shouldComponentUpdate",value:function(e){return!v.default(e,this.props)}},{key:"componentDidUpdate",value:function(){this.refresh(this.props)}},{key:"forceUpdate",value:function(){this.refresh(this.props),i(c(y.prototype),"forceUpdate",this).call(this)}},{key:"componentDidMount",value:function(){this.setState({library:this.buildParticlesLibrary(this.props.id,this.props.params)})}},{key:"componentWillUnmount",value:function(){this.destroy(),this.setState({library:void 0})}},{key:"render",value:function(){var e=this.props,t=e.width,r=e.height,n=e.className,o=e.canvasClassName,i=e.id;return d.createElement("div",{className:n,id:i},d.createElement("canvas",{ref:this.loadCanvas,className:o,style:Object.assign(Object.assign({},this.props.style),{width:t,height:r})}))}}])&&o(r.prototype,n),p&&o(r,p),y}(y.Component);t.default=g,g.defaultProps={width:"100%",height:"100%",params:h.defaultParams,style:{},id:"tsparticles"}},function(e,t){e.exports=__webpack_require__(/*! lodash/isEqual */ "./node_modules/lodash/isEqual.js")},function(e,t){e.exports=__webpack_require__(/*! tsparticles/dist/Classes/Container */ "./node_modules/tsparticles/dist/Classes/Container.js")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(1),o=r(2),i=r(3),s=r(4),a=r(5),u=r(6),c=r(7),l=r(8),p=r(9);t.defaultParams={particles:{number:{value:40,max:-1,density:{enable:!1,value_area:1200}},color:{value:"#FFF"},shape:{type:n.ShapeType.circle,stroke:{width:0,color:"#000000"},polygon:{nb_sides:5},image:{src:"",width:100,height:100}},opacity:{value:.5,random:!1,anim:{enable:!0,speed:1,opacity_min:.1,sync:!1}},size:{value:1,random:!1,anim:{enable:!1,speed:40,size_min:0,sync:!1}},line_linked:{enable:!0,distance:150,color:"#FFF",opacity:.6,width:1,shadow:{enable:!1,blur:5,color:"lime"}},move:{enable:!0,speed:3,direction:p.MoveDirection.none,random:!1,straight:!1,out_mode:l.OutMode.bounce,bounce:!0,attract:{enable:!1,rotateX:3e3,rotateY:3e3}}},interactivity:{detectsOn:c.InteractivityDetect.canvas,events:{onHover:{enable:!1,mode:a.HoverMode.grab},onClick:{enable:!1,mode:u.ClickMode.repulse},resize:!0},modes:{grab:{distance:180,line_linked:{opacity:.35}},bubble:{distance:200,size:80,duration:.4},repulse:{distance:100,duration:5},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0,fps_limit:999,polygon:{enable:!1,scale:1,type:o.PolygonMaskType.inline,inline:{arrangement:i.PolygonMaskInlineArrangement.onePerPoint},draw:{enable:!1,stroke:{width:.5,color:"rgba(255, 255, 255, .1)"}},move:{radius:10,type:s.PolygonMaskMoveType.path},url:""}}},function(e,t){e.exports=__webpack_require__(/*! tsparticles/dist/Classes/Options/Options */ "./node_modules/tsparticles/dist/Classes/Options/Options.js")},function(e,t){e.exports=__webpack_require__(/*! tsparticles/dist/index */ "./node_modules/tsparticles/dist/index.js")},function(e,t){e.exports=__webpack_require__(/*! tsparticles/dist/Enums/ProcessBubbleType */ "./node_modules/tsparticles/dist/Enums/ProcessBubbleType.js")},function(e,t){e.exports=__webpack_require__(/*! tsparticles/dist/Enums/RotateDirection */ "./node_modules/tsparticles/dist/Enums/RotateDirection.js")},function(e,t){e.exports=__webpack_require__(/*! tsparticles/dist/Enums/Modes/DivMode */ "./node_modules/tsparticles/dist/Enums/Modes/DivMode.js")}]));

/***/ }),

/***/ "./node_modules/react-particles-js/index.js":
/*!**************************************************!*\
  !*** ./node_modules/react-particles-js/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const ReactParticles = __webpack_require__(/*! ./cjs/particles */ "./node_modules/react-particles-js/cjs/particles.js");
for (let key in ReactParticles) {
    ReactParticles.default[key] = ReactParticles[key];
}
module.exports = ReactParticles.default;

/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_2adc2403d89adc16ead0 ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_2adc2403d89adc16ead0 */ "dll-reference dll_2adc2403d89adc16ead0"))("./node_modules/react/index.js");

/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/Container.js":
/*!************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/Container.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Container = void 0;
var Container_1 = __webpack_require__(/*! ../Core/Container */ "./node_modules/tsparticles/dist/Core/Container.js");
Object.defineProperty(exports, "Container", { enumerable: true, get: function () { return Container_1.Container; } });


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/Options/Options.js":
/*!******************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/Options/Options.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Options = void 0;
var Options_1 = __webpack_require__(/*! ../../Options/Classes/Options */ "./node_modules/tsparticles/dist/Options/Classes/Options.js");
Object.defineProperty(exports, "Options", { enumerable: true, get: function () { return Options_1.Options; } });


/***/ }),

/***/ "./node_modules/tsparticles/dist/Core/Canvas.js":
/*!******************************************************!*\
  !*** ./node_modules/tsparticles/dist/Core/Canvas.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Canvas = void 0;
var Utils_1 = __webpack_require__(/*! ../Utils */ "./node_modules/tsparticles/dist/Utils/index.js");
var Canvas = (function () {
    function Canvas(container) {
        this.container = container;
        this.size = {
            height: 0,
            width: 0,
        };
        this.context = null;
        this.generatedCanvas = false;
    }
    Canvas.prototype.init = function () {
        this.resize();
        var container = this.container;
        var options = container.options;
        var cover = options.backgroundMask.cover;
        var color = cover.color;
        var trail = options.particles.move.trail;
        this.coverColor = Utils_1.ColorUtils.colorToRgb(color);
        this.trailFillColor = Utils_1.ColorUtils.colorToRgb(trail.fillColor);
        this.paint();
    };
    Canvas.prototype.loadCanvas = function (canvas, generatedCanvas) {
        var _a;
        if (!canvas.className) {
            canvas.className = Utils_1.Constants.canvasClass;
        }
        if (this.generatedCanvas) {
            (_a = this.element) === null || _a === void 0 ? void 0 : _a.remove();
        }
        this.generatedCanvas = generatedCanvas !== null && generatedCanvas !== void 0 ? generatedCanvas : false;
        this.element = canvas;
        this.size.height = canvas.offsetHeight;
        this.size.width = canvas.offsetWidth;
        this.context = this.element.getContext("2d");
        this.container.retina.init();
        this.initBackground();
    };
    Canvas.prototype.destroy = function () {
        var _a;
        if (this.generatedCanvas) {
            (_a = this.element) === null || _a === void 0 ? void 0 : _a.remove();
        }
        if (this.context) {
            Utils_1.CanvasUtils.clear(this.context, this.size);
        }
    };
    Canvas.prototype.resize = function () {
        if (this.element) {
            this.element.width = this.size.width;
            this.element.height = this.size.height;
        }
    };
    Canvas.prototype.paint = function () {
        var container = this.container;
        var options = container.options;
        if (this.context) {
            if (options.backgroundMask.enable && options.backgroundMask.cover && this.coverColor) {
                this.paintBase(Utils_1.ColorUtils.getStyleFromRgb(this.coverColor));
            }
            else {
                this.paintBase();
            }
        }
    };
    Canvas.prototype.clear = function () {
        var container = this.container;
        var options = container.options;
        var trail = options.particles.move.trail;
        if (options.backgroundMask.enable) {
            this.paint();
        }
        else if (trail.enable && trail.length > 0 && this.trailFillColor) {
            this.paintBase(Utils_1.ColorUtils.getStyleFromRgb(this.trailFillColor, 1 / trail.length));
        }
        else if (this.context) {
            Utils_1.CanvasUtils.clear(this.context, this.size);
        }
    };
    Canvas.prototype.isPointInPath = function (path, point) {
        var _a, _b;
        return (_b = (_a = this.context) === null || _a === void 0 ? void 0 : _a.isPointInPath(path, point.x, point.y)) !== null && _b !== void 0 ? _b : false;
    };
    Canvas.prototype.drawLinkTriangle = function (p1, link1, link2) {
        var _a, _b;
        var container = this.container;
        var options = container.options;
        var p2 = link1.destination;
        var p3 = link2.destination;
        var triangleOptions = p1.particlesOptions.links.triangles;
        var opacityTriangle = (_a = triangleOptions.opacity) !== null && _a !== void 0 ? _a : (link1.opacity + link2.opacity) / 2;
        var pos1 = p1.getPosition();
        var pos2 = p2.getPosition();
        var pos3 = p3.getPosition();
        var ctx = this.context;
        if (!ctx) {
            return;
        }
        var colorTriangle = Utils_1.ColorUtils.colorToRgb(triangleOptions.color);
        if (!colorTriangle) {
            var linksOptions = p1.particlesOptions.links;
            var linkColor = linksOptions.id !== undefined
                ? container.particles.linksColors[linksOptions.id]
                : container.particles.linksColor;
            if (linkColor === Utils_1.Constants.randomColorValue) {
                colorTriangle = Utils_1.ColorUtils.getRandomRgbColor();
            }
            else if (linkColor === "mid") {
                var sourceColor = p1.getColor();
                var destColor = p2.getColor();
                if (sourceColor && destColor) {
                    colorTriangle = Utils_1.ColorUtils.mix(sourceColor, destColor, p1.size.value, p2.size.value);
                }
                else {
                    var hslColor = sourceColor !== null && sourceColor !== void 0 ? sourceColor : destColor;
                    if (!hslColor) {
                        return;
                    }
                    colorTriangle = Utils_1.ColorUtils.hslToRgb(hslColor);
                }
            }
            else {
                colorTriangle = linkColor;
            }
        }
        var width = (_b = p1.linksWidth) !== null && _b !== void 0 ? _b : container.retina.linksWidth;
        Utils_1.CanvasUtils.drawLinkTriangle(ctx, width, pos1, pos2, pos3, options.backgroundMask.enable, colorTriangle, opacityTriangle);
    };
    Canvas.prototype.drawLinkLine = function (p1, link) {
        var _a;
        var container = this.container;
        var options = container.options;
        var p2 = link.destination;
        var opacity = link.opacity;
        var pos1 = p1.getPosition();
        var pos2 = p2.getPosition();
        var ctx = this.context;
        if (!ctx) {
            return;
        }
        var colorLine;
        var twinkle = p1.particlesOptions.twinkle.lines;
        if (twinkle.enable) {
            var twinkleFreq = twinkle.frequency;
            var twinkleRgb = Utils_1.ColorUtils.colorToRgb(twinkle.color);
            var twinkling = Math.random() < twinkleFreq;
            if (twinkling && twinkleRgb !== undefined) {
                colorLine = twinkleRgb;
                opacity = twinkle.opacity;
            }
        }
        if (!colorLine) {
            var linksOptions = p1.particlesOptions.links;
            var linkColor = linksOptions.id !== undefined
                ? container.particles.linksColors[linksOptions.id]
                : container.particles.linksColor;
            if (linkColor === Utils_1.Constants.randomColorValue) {
                colorLine = Utils_1.ColorUtils.getRandomRgbColor();
            }
            else if (linkColor === "mid") {
                var sourceColor = p1.getColor();
                var destColor = p2.getColor();
                if (sourceColor && destColor) {
                    colorLine = Utils_1.ColorUtils.mix(sourceColor, destColor, p1.size.value, p2.size.value);
                }
                else {
                    var hslColor = sourceColor !== null && sourceColor !== void 0 ? sourceColor : destColor;
                    if (!hslColor) {
                        return;
                    }
                    colorLine = Utils_1.ColorUtils.hslToRgb(hslColor);
                }
            }
            else {
                colorLine = linkColor;
            }
        }
        var width = (_a = p1.linksWidth) !== null && _a !== void 0 ? _a : container.retina.linksWidth;
        Utils_1.CanvasUtils.drawLinkLine(ctx, width, pos1, pos2, p1.particlesOptions.links.distance, container.canvas.size, p1.particlesOptions.links.warp, options.backgroundMask.enable, colorLine, opacity, p1.particlesOptions.links.shadow);
    };
    Canvas.prototype.drawConnectLine = function (p1, p2) {
        var _a;
        var lineStyle = this.lineStyle(p1, p2);
        if (!lineStyle) {
            return;
        }
        var ctx = this.context;
        if (!ctx) {
            return;
        }
        var pos1 = p1.getPosition();
        var pos2 = p2.getPosition();
        Utils_1.CanvasUtils.drawConnectLine(ctx, (_a = p1.linksWidth) !== null && _a !== void 0 ? _a : this.container.retina.linksWidth, lineStyle, pos1, pos2);
    };
    Canvas.prototype.drawGrabLine = function (particle, lineColor, opacity, mousePos) {
        var _a;
        var container = this.container;
        var ctx = container.canvas.context;
        if (!ctx) {
            return;
        }
        var beginPos = particle.getPosition();
        Utils_1.CanvasUtils.drawGrabLine(ctx, (_a = particle.linksWidth) !== null && _a !== void 0 ? _a : container.retina.linksWidth, beginPos, mousePos, lineColor, opacity);
    };
    Canvas.prototype.drawParticle = function (particle, delta) {
        var _a, _b;
        var pColor = particle.getColor();
        if (pColor === undefined) {
            return;
        }
        var container = this.container;
        var options = container.options;
        var twinkle = particle.particlesOptions.twinkle.particles;
        var twinkleFreq = twinkle.frequency;
        var twinkleRgb = Utils_1.ColorUtils.colorToRgb(twinkle.color);
        var twinkling = twinkle.enable && Math.random() < twinkleFreq;
        var radius = (_a = particle.bubble.radius) !== null && _a !== void 0 ? _a : particle.size.value;
        var opacity = twinkling ? twinkle.opacity : (_b = particle.bubble.opacity) !== null && _b !== void 0 ? _b : particle.opacity.value;
        var infectionStage = particle.infectionStage;
        var infection = options.infection;
        var infectionStages = infection.stages;
        var infectionColor = infectionStage !== undefined ? infectionStages[infectionStage].color : undefined;
        var infectionRgb = Utils_1.ColorUtils.colorToRgb(infectionColor);
        var color = twinkling && twinkleRgb !== undefined ? twinkleRgb : infectionRgb !== null && infectionRgb !== void 0 ? infectionRgb : Utils_1.ColorUtils.hslToRgb(pColor);
        var colorValue = color !== undefined ? Utils_1.ColorUtils.getStyleFromRgb(color, opacity) : undefined;
        if (!this.context || !colorValue) {
            return;
        }
        if (particle.links.length > 0) {
            this.context.save();
            var _loop_1 = function (link) {
                if (particle.particlesOptions.links.triangles.enable) {
                    var links_1 = particle.links.map(function (l) { return l.destination; });
                    var vertices = link.destination.links.filter(function (t) { return links_1.indexOf(t.destination) >= 0; });
                    if (vertices.length) {
                        for (var _i = 0, vertices_1 = vertices; _i < vertices_1.length; _i++) {
                            var vertice = vertices_1[_i];
                            this_1.drawLinkTriangle(particle, link, vertice);
                        }
                    }
                }
                this_1.drawLinkLine(particle, link);
            };
            var this_1 = this;
            for (var _i = 0, _c = particle.links; _i < _c.length; _i++) {
                var link = _c[_i];
                _loop_1(link);
            }
            this.context.restore();
        }
        Utils_1.CanvasUtils.drawParticle(this.container, this.context, particle, delta, colorValue, options.backgroundMask.enable, radius, opacity, particle.particlesOptions.shadow);
    };
    Canvas.prototype.drawPlugin = function (plugin, delta) {
        if (!this.context) {
            return;
        }
        Utils_1.CanvasUtils.drawPlugin(this.context, plugin, delta);
    };
    Canvas.prototype.paintBase = function (baseColor) {
        if (this.context) {
            Utils_1.CanvasUtils.paintBase(this.context, this.size, baseColor);
        }
    };
    Canvas.prototype.lineStyle = function (p1, p2) {
        var container = this.container;
        var options = container.options;
        var connectOptions = options.interactivity.modes.connect;
        if (this.context) {
            return Utils_1.CanvasUtils.gradient(this.context, p1, p2, connectOptions.links.opacity);
        }
    };
    Canvas.prototype.initBackground = function () {
        var container = this.container;
        var options = container.options;
        var background = options.background;
        var element = this.element;
        if (!element) {
            return;
        }
        var elementStyle = element.style;
        if (background.color) {
            var color = Utils_1.ColorUtils.colorToRgb(background.color);
            if (color) {
                elementStyle.backgroundColor = Utils_1.ColorUtils.getStyleFromRgb(color, background.opacity);
            }
        }
        if (background.image) {
            elementStyle.backgroundImage = background.image;
        }
        if (background.position) {
            elementStyle.backgroundPosition = background.position;
        }
        if (background.repeat) {
            elementStyle.backgroundRepeat = background.repeat;
        }
        if (background.size) {
            elementStyle.backgroundSize = background.size;
        }
    };
    return Canvas;
}());
exports.Canvas = Canvas;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Core/Container.js":
/*!*********************************************************!*\
  !*** ./node_modules/tsparticles/dist/Core/Container.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Container = void 0;
var Canvas_1 = __webpack_require__(/*! ./Canvas */ "./node_modules/tsparticles/dist/Core/Canvas.js");
var Particles_1 = __webpack_require__(/*! ./Particles */ "./node_modules/tsparticles/dist/Core/Particles.js");
var Retina_1 = __webpack_require__(/*! ./Retina */ "./node_modules/tsparticles/dist/Core/Retina.js");
var FrameManager_1 = __webpack_require__(/*! ./FrameManager */ "./node_modules/tsparticles/dist/Core/FrameManager.js");
var Options_1 = __webpack_require__(/*! ../Options/Classes/Options */ "./node_modules/tsparticles/dist/Options/Classes/Options.js");
var Utils_1 = __webpack_require__(/*! ../Utils */ "./node_modules/tsparticles/dist/Utils/index.js");
var Container = (function () {
    function Container(id, params) {
        var presets = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            presets[_i - 2] = arguments[_i];
        }
        this.started = false;
        this.destroyed = false;
        this.id = id;
        this.paused = true;
        this.sourceOptions = params;
        this.lastFrameTime = 0;
        this.pageHidden = false;
        this.retina = new Retina_1.Retina(this);
        this.canvas = new Canvas_1.Canvas(this);
        this.particles = new Particles_1.Particles(this);
        this.drawer = new FrameManager_1.FrameManager(this);
        this.interactivity = {
            mouse: {},
        };
        this.bubble = {};
        this.repulse = { particles: [] };
        this.plugins = {};
        this.drawers = {};
        this.density = 1;
        this.options = new Options_1.Options();
        for (var _a = 0, presets_1 = presets; _a < presets_1.length; _a++) {
            var preset = presets_1[_a];
            this.options.load(Utils_1.Plugins.getPreset(preset));
        }
        for (var _b = 0, _c = Utils_1.Plugins.getSupportedShapes(); _b < _c.length; _b++) {
            var type = _c[_b];
            this.drawers[type] = Utils_1.Plugins.getShapeDrawer(type);
        }
        if (this.sourceOptions) {
            this.options.load(this.sourceOptions);
        }
        this.simplex = new Utils_1.SimplexNoise();
        this.eventListeners = new Utils_1.EventListeners(this);
    }
    Container.requestFrame = function (callback) {
        return window.customRequestAnimationFrame(callback);
    };
    Container.cancelAnimation = function (handle) {
        window.cancelAnimationFrame(handle);
    };
    Container.prototype.play = function (force) {
        var needsUpdate = this.paused || force;
        if (this.paused) {
            this.paused = false;
        }
        if (needsUpdate) {
            for (var id in this.plugins) {
                var plugin = this.plugins[id];
                if (plugin.play) {
                    plugin.play();
                }
            }
            this.lastFrameTime = performance.now();
        }
        this.draw();
    };
    Container.prototype.pause = function () {
        if (this.drawAnimationFrame !== undefined) {
            Container.cancelAnimation(this.drawAnimationFrame);
            delete this.drawAnimationFrame;
        }
        if (!this.paused) {
            for (var id in this.plugins) {
                var plugin = this.plugins[id];
                if (plugin.pause) {
                    plugin.pause();
                }
            }
            if (!this.pageHidden) {
                this.paused = true;
            }
        }
    };
    Container.prototype.draw = function () {
        var _this = this;
        this.drawAnimationFrame = Container.requestFrame(function (t) { var _a; return (_a = _this.drawer) === null || _a === void 0 ? void 0 : _a.nextFrame(t); });
    };
    Container.prototype.getAnimationStatus = function () {
        return !this.paused;
    };
    Container.prototype.densityAutoParticles = function () {
        this.initDensityFactor();
        var numberOptions = this.options.particles.number;
        var optParticlesNumber = numberOptions.value;
        var optParticlesLimit = numberOptions.limit > 0 ? numberOptions.limit : optParticlesNumber;
        var particlesNumber = Math.min(optParticlesNumber, optParticlesLimit) * this.density;
        var particlesCount = this.particles.count;
        if (particlesCount < particlesNumber) {
            this.particles.push(Math.abs(particlesNumber - particlesCount));
        }
        else if (particlesCount > particlesNumber) {
            this.particles.removeQuantity(particlesCount - particlesNumber);
        }
    };
    Container.prototype.initDensityFactor = function () {
        var densityOptions = this.options.particles.number.density;
        if (!this.canvas.element || !densityOptions.enable) {
            return;
        }
        var canvas = this.canvas.element;
        var pxRatio = this.retina.pixelRatio;
        this.density = (canvas.width * canvas.height) / (densityOptions.factor * pxRatio * densityOptions.area);
    };
    Container.prototype.destroy = function () {
        this.stop();
        this.retina.reset();
        this.canvas.destroy();
        delete this.interactivity;
        delete this.options;
        delete this.retina;
        delete this.canvas;
        delete this.particles;
        delete this.bubble;
        delete this.repulse;
        delete this.drawer;
        delete this.eventListeners;
        for (var type in this.drawers) {
            var drawer = this.drawers[type];
            if (drawer.destroy !== undefined) {
                drawer.destroy(this);
            }
        }
        this.drawers = {};
        this.destroyed = true;
    };
    Container.prototype.exportImg = function (callback) {
        this.exportImage(callback);
    };
    Container.prototype.exportImage = function (callback, type, quality) {
        var _a;
        return (_a = this.canvas.element) === null || _a === void 0 ? void 0 : _a.toBlob(callback, type !== null && type !== void 0 ? type : "image/png", quality);
    };
    Container.prototype.exportConfiguration = function () {
        return JSON.stringify(this.options, undefined, 2);
    };
    Container.prototype.refresh = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.stop();
                        return [4, this.start()];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    Container.prototype.stop = function () {
        if (!this.started) {
            return;
        }
        this.started = false;
        this.eventListeners.removeListeners();
        this.pause();
        this.particles.clear();
        this.retina.reset();
        this.canvas.clear();
        for (var id in this.plugins) {
            var plugin = this.plugins[id];
            if (plugin.stop !== undefined) {
                plugin.stop();
            }
        }
        this.plugins = {};
        this.particles.linksColors = {};
        delete this.particles.linksColor;
    };
    Container.prototype.start = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _i, id, plugin;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (this.started) {
                            return [2];
                        }
                        return [4, this.init()];
                    case 1:
                        _c.sent();
                        this.started = true;
                        this.eventListeners.addListeners();
                        _a = [];
                        for (_b in this.plugins)
                            _a.push(_b);
                        _i = 0;
                        _c.label = 2;
                    case 2:
                        if (!(_i < _a.length)) return [3, 6];
                        id = _a[_i];
                        plugin = this.plugins[id];
                        if (!(plugin.startAsync !== undefined)) return [3, 4];
                        return [4, plugin.startAsync()];
                    case 3:
                        _c.sent();
                        return [3, 5];
                    case 4:
                        if (plugin.start !== undefined) {
                            plugin.start();
                        }
                        _c.label = 5;
                    case 5:
                        _i++;
                        return [3, 2];
                    case 6:
                        this.play();
                        return [2];
                }
            });
        });
    };
    Container.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var availablePlugins, id, _a, _b, _i, type, drawer, _c, _d, _e, id, plugin;
            return __generator(this, function (_f) {
                switch (_f.label) {
                    case 0:
                        this.retina.init();
                        this.canvas.init();
                        availablePlugins = Utils_1.Plugins.getAvailablePlugins(this);
                        for (id in availablePlugins) {
                            this.plugins[id] = availablePlugins[id];
                        }
                        _a = [];
                        for (_b in this.drawers)
                            _a.push(_b);
                        _i = 0;
                        _f.label = 1;
                    case 1:
                        if (!(_i < _a.length)) return [3, 4];
                        type = _a[_i];
                        drawer = this.drawers[type];
                        if (!(drawer.init !== undefined)) return [3, 3];
                        return [4, drawer.init(this)];
                    case 2:
                        _f.sent();
                        _f.label = 3;
                    case 3:
                        _i++;
                        return [3, 1];
                    case 4:
                        _c = [];
                        for (_d in this.plugins)
                            _c.push(_d);
                        _e = 0;
                        _f.label = 5;
                    case 5:
                        if (!(_e < _c.length)) return [3, 9];
                        id = _c[_e];
                        plugin = this.plugins[id];
                        if (!(plugin.init !== undefined)) return [3, 6];
                        plugin.init(this.options);
                        return [3, 8];
                    case 6:
                        if (!(plugin.initAsync !== undefined)) return [3, 8];
                        return [4, plugin.initAsync(this.options)];
                    case 7:
                        _f.sent();
                        _f.label = 8;
                    case 8:
                        _e++;
                        return [3, 5];
                    case 9:
                        this.particles.init();
                        this.densityAutoParticles();
                        return [2];
                }
            });
        });
    };
    return Container;
}());
exports.Container = Container;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Core/FrameManager.js":
/*!************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Core/FrameManager.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.FrameManager = void 0;
var FrameManager = (function () {
    function FrameManager(container) {
        this.container = container;
    }
    FrameManager.prototype.nextFrame = function (timestamp) {
        var container = this.container;
        var options = container.options;
        var fpsLimit = options.fpsLimit > 0 ? options.fpsLimit : 60;
        if (container.lastFrameTime !== undefined && timestamp < container.lastFrameTime + 1000 / fpsLimit) {
            container.draw();
            return;
        }
        var delta = timestamp - container.lastFrameTime;
        container.lastFrameTime = timestamp;
        container.particles.draw(delta);
        if (options.particles.move.enable && container.getAnimationStatus()) {
            container.draw();
        }
    };
    return FrameManager;
}());
exports.FrameManager = FrameManager;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Core/Loader.js":
/*!******************************************************!*\
  !*** ./node_modules/tsparticles/dist/Core/Loader.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Loader = void 0;
var Container_1 = __webpack_require__(/*! ./Container */ "./node_modules/tsparticles/dist/Core/Container.js");
var Utils_1 = __webpack_require__(/*! ../Utils */ "./node_modules/tsparticles/dist/Utils/index.js");
var tsParticlesDom = [];
var Loader = (function () {
    function Loader() {
    }
    Loader.dom = function () {
        return tsParticlesDom;
    };
    Loader.domItem = function (index) {
        var dom = Loader.dom();
        var item = dom[index];
        if (item && !item.destroyed) {
            return item;
        }
        dom.splice(index, 1);
    };
    Loader.loadFromArray = function (tagId, params, index) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, Loader.load(tagId, Utils_1.Utils.itemFromArray(params, index))];
            });
        });
    };
    Loader.setFromArray = function (id, domContainer, params, index) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, Loader.set(id, domContainer, Utils_1.Utils.itemFromArray(params, index))];
            });
        });
    };
    Loader.load = function (tagId, params) {
        return __awaiter(this, void 0, void 0, function () {
            var domContainer;
            return __generator(this, function (_a) {
                domContainer = document.getElementById(tagId);
                if (!domContainer) {
                    return [2];
                }
                return [2, this.set(tagId, domContainer, params)];
            });
        });
    };
    Loader.set = function (id, domContainer, params) {
        return __awaiter(this, void 0, void 0, function () {
            var dom, oldIndex, old, canvasEl, generatedCanvas, existingCanvases, newItem;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        dom = Loader.dom();
                        oldIndex = dom.findIndex(function (v) { return v.id === id; });
                        if (oldIndex >= 0) {
                            old = this.domItem(oldIndex);
                            if (old && !old.destroyed) {
                                old.destroy();
                                dom.splice(oldIndex, 1);
                            }
                        }
                        if (domContainer.tagName === "canvas") {
                            canvasEl = domContainer;
                            generatedCanvas = false;
                        }
                        else {
                            existingCanvases = domContainer.getElementsByTagName("canvas");
                            if (existingCanvases.length) {
                                canvasEl = existingCanvases[0];
                                if (!canvasEl.className) {
                                    canvasEl.className = Utils_1.Constants.canvasClass;
                                }
                                generatedCanvas = false;
                            }
                            else {
                                generatedCanvas = true;
                                canvasEl = document.createElement("canvas");
                                canvasEl.className = Utils_1.Constants.canvasClass;
                                canvasEl.style.width = "100%";
                                canvasEl.style.height = "100%";
                                domContainer.appendChild(canvasEl);
                            }
                        }
                        newItem = new Container_1.Container(id, params);
                        if (oldIndex >= 0) {
                            dom.splice(oldIndex, 0, newItem);
                        }
                        else {
                            dom.push(newItem);
                        }
                        newItem.canvas.loadCanvas(canvasEl, generatedCanvas);
                        return [4, newItem.start()];
                    case 1:
                        _a.sent();
                        return [2, newItem];
                }
            });
        });
    };
    Loader.loadJSON = function (tagId, jsonUrl) {
        return __awaiter(this, void 0, void 0, function () {
            var response, params;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, fetch(jsonUrl)];
                    case 1:
                        response = _a.sent();
                        if (!response.ok) return [3, 3];
                        return [4, response.json()];
                    case 2:
                        params = _a.sent();
                        if (params instanceof Array) {
                            return [2, Loader.loadFromArray(tagId, params)];
                        }
                        else {
                            return [2, Loader.load(tagId, params)];
                        }
                        return [3, 4];
                    case 3:
                        console.error("Error tsParticles - fetch status: " + response.status);
                        console.error("Error tsParticles - File config not found");
                        _a.label = 4;
                    case 4: return [2];
                }
            });
        });
    };
    Loader.setJSON = function (id, domContainer, jsonUrl) {
        return __awaiter(this, void 0, void 0, function () {
            var response, params;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, fetch(jsonUrl)];
                    case 1:
                        response = _a.sent();
                        if (!response.ok) return [3, 3];
                        return [4, response.json()];
                    case 2:
                        params = _a.sent();
                        if (params instanceof Array) {
                            return [2, Loader.setFromArray(id, domContainer, params)];
                        }
                        else {
                            return [2, Loader.set(id, domContainer, params)];
                        }
                        return [3, 4];
                    case 3:
                        console.error("Error tsParticles - fetch status: " + response.status);
                        console.error("Error tsParticles - File config not found");
                        _a.label = 4;
                    case 4: return [2];
                }
            });
        });
    };
    Loader.setOnClickHandler = function (callback) {
        var dom = Loader.dom();
        if (dom.length === 0) {
            throw new Error("Can only set click handlers after calling tsParticles.load() or tsParticles.loadJSON()");
        }
        for (var _i = 0, dom_1 = dom; _i < dom_1.length; _i++) {
            var domItem = dom_1[_i];
            var el = domItem.interactivity.element;
            if (el) {
                el.addEventListener("click", callback);
            }
        }
    };
    return Loader;
}());
exports.Loader = Loader;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Core/Particle.js":
/*!********************************************************!*\
  !*** ./node_modules/tsparticles/dist/Core/Particle.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Particle = void 0;
var Updater_1 = __webpack_require__(/*! ./Particle/Updater */ "./node_modules/tsparticles/dist/Core/Particle/Updater.js");
var Particles_1 = __webpack_require__(/*! ../Options/Classes/Particles/Particles */ "./node_modules/tsparticles/dist/Options/Classes/Particles/Particles.js");
var Shape_1 = __webpack_require__(/*! ../Options/Classes/Particles/Shape/Shape */ "./node_modules/tsparticles/dist/Options/Classes/Particles/Shape/Shape.js");
var Enums_1 = __webpack_require__(/*! ../Enums */ "./node_modules/tsparticles/dist/Enums/index.js");
var Utils_1 = __webpack_require__(/*! ../Utils */ "./node_modules/tsparticles/dist/Utils/index.js");
var Particle = (function () {
    function Particle(container, position, overrideOptions) {
        var _this = this;
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s;
        this.container = container;
        this.fill = true;
        this.close = true;
        this.links = [];
        this.lastNoiseTime = 0;
        this.destroyed = false;
        var options = container.options;
        var particlesOptions = new Particles_1.Particles();
        particlesOptions.load(options.particles);
        if ((overrideOptions === null || overrideOptions === void 0 ? void 0 : overrideOptions.shape) !== undefined) {
            var shapeType = (_a = overrideOptions.shape.type) !== null && _a !== void 0 ? _a : particlesOptions.shape.type;
            this.shape = shapeType instanceof Array ? Utils_1.Utils.itemFromArray(shapeType) : shapeType;
            var shapeOptions = new Shape_1.Shape();
            shapeOptions.load(overrideOptions.shape);
            if (this.shape !== undefined) {
                var shapeData = shapeOptions.options[this.shape];
                if (shapeData !== undefined) {
                    this.shapeData = Utils_1.Utils.deepExtend({}, shapeData instanceof Array ? Utils_1.Utils.itemFromArray(shapeData) : shapeData);
                    this.fill = (_c = (_b = this.shapeData) === null || _b === void 0 ? void 0 : _b.fill) !== null && _c !== void 0 ? _c : this.fill;
                    this.close = (_e = (_d = this.shapeData) === null || _d === void 0 ? void 0 : _d.close) !== null && _e !== void 0 ? _e : this.close;
                }
            }
        }
        else {
            var shapeType = particlesOptions.shape.type;
            this.shape = shapeType instanceof Array ? Utils_1.Utils.itemFromArray(shapeType) : shapeType;
            var shapeData = particlesOptions.shape.options[this.shape];
            if (shapeData) {
                this.shapeData = Utils_1.Utils.deepExtend({}, shapeData instanceof Array ? Utils_1.Utils.itemFromArray(shapeData) : shapeData);
                this.fill = (_g = (_f = this.shapeData) === null || _f === void 0 ? void 0 : _f.fill) !== null && _g !== void 0 ? _g : this.fill;
                this.close = (_j = (_h = this.shapeData) === null || _h === void 0 ? void 0 : _h.close) !== null && _j !== void 0 ? _j : this.close;
            }
        }
        if (overrideOptions !== undefined) {
            particlesOptions.load(overrideOptions);
        }
        if (((_k = this.shapeData) === null || _k === void 0 ? void 0 : _k.particles) !== undefined) {
            particlesOptions.load((_l = this.shapeData) === null || _l === void 0 ? void 0 : _l.particles);
        }
        this.particlesOptions = particlesOptions;
        var noiseDelay = this.particlesOptions.move.noise.delay;
        this.noiseDelay =
            (noiseDelay.random.enable
                ? Utils_1.Utils.randomInRange(noiseDelay.random.minimumValue, noiseDelay.value)
                : noiseDelay.value) * 1000;
        container.retina.initParticle(this);
        var color = this.particlesOptions.color;
        var sizeValue = (_m = this.sizeValue) !== null && _m !== void 0 ? _m : container.retina.sizeValue;
        var randomSize = typeof this.particlesOptions.size.random === "boolean"
            ? this.particlesOptions.size.random
            : this.particlesOptions.size.random.enable;
        this.size = {
            value: randomSize && this.randomMinimumSize !== undefined
                ? Utils_1.Utils.randomInRange(this.randomMinimumSize, sizeValue)
                : sizeValue,
        };
        this.direction = this.particlesOptions.move.direction;
        this.bubble = {
            inRange: false,
        };
        this.angle = this.particlesOptions.rotate.random ? Math.random() * 360 : this.particlesOptions.rotate.value;
        if (this.particlesOptions.rotate.direction === Enums_1.RotateDirection.random) {
            var index = Math.floor(Math.random() * 2);
            if (index > 0) {
                this.rotateDirection = Enums_1.RotateDirection.counterClockwise;
            }
            else {
                this.rotateDirection = Enums_1.RotateDirection.clockwise;
            }
        }
        else {
            this.rotateDirection = this.particlesOptions.rotate.direction;
        }
        if (this.particlesOptions.size.animation.enable) {
            switch (this.particlesOptions.size.animation.startValue) {
                case Enums_1.StartValueType.min:
                    if (!randomSize) {
                        var pxRatio = container.retina.pixelRatio;
                        this.size.value = this.particlesOptions.size.animation.minimumValue * pxRatio;
                    }
                    break;
            }
            this.size.status = Enums_1.SizeAnimationStatus.increasing;
            this.size.velocity = ((_o = this.sizeAnimationSpeed) !== null && _o !== void 0 ? _o : container.retina.sizeAnimationSpeed) / 100;
            if (!this.particlesOptions.size.animation.sync) {
                this.size.velocity = this.size.velocity * Math.random();
            }
        }
        if (this.particlesOptions.color.animation.enable) {
            this.colorVelocity = this.particlesOptions.color.animation.speed / 100;
            if (!this.particlesOptions.color.animation.sync) {
                this.colorVelocity = this.colorVelocity * Math.random();
            }
        }
        else {
            this.colorVelocity = 0;
        }
        if (this.particlesOptions.rotate.animation.enable) {
            if (!this.particlesOptions.rotate.animation.sync) {
                this.angle = Math.random() * 360;
            }
        }
        this.position = this.calcPosition(this.container, position);
        this.offset = {
            x: 0,
            y: 0,
        };
        if (this.particlesOptions.collisions.enable) {
            this.checkOverlap(position);
        }
        this.color = Utils_1.ColorUtils.colorToHsl(color);
        var randomOpacity = this.particlesOptions.opacity.random;
        var opacityValue = this.particlesOptions.opacity.value;
        this.opacity = {
            value: randomOpacity.enable ? Utils_1.Utils.randomInRange(randomOpacity.minimumValue, opacityValue) : opacityValue,
        };
        if (this.particlesOptions.opacity.animation.enable) {
            this.opacity.status = Enums_1.OpacityAnimationStatus.increasing;
            this.opacity.velocity = this.particlesOptions.opacity.animation.speed / 100;
            if (!this.particlesOptions.opacity.animation.sync) {
                this.opacity.velocity *= Math.random();
            }
        }
        this.initialVelocity = this.calculateVelocity();
        this.velocity = {
            horizontal: this.initialVelocity.horizontal,
            vertical: this.initialVelocity.vertical,
        };
        var drawer = container.drawers[this.shape];
        if (!drawer) {
            drawer = Utils_1.Plugins.getShapeDrawer(this.shape);
            container.drawers[this.shape] = drawer;
        }
        if (this.shape === Enums_1.ShapeType.image || this.shape === Enums_1.ShapeType.images) {
            var shape = this.particlesOptions.shape;
            var imageDrawer = drawer;
            var imagesOptions = shape.options[this.shape];
            var images = imageDrawer.getImages(container).images;
            var index = Utils_1.Utils.arrayRandomIndex(images);
            var image_1 = images[index];
            var optionsImage_1 = (imagesOptions instanceof Array
                ? imagesOptions.filter(function (t) { return t.src === image_1.source; })[0]
                : imagesOptions);
            var color_1 = this.getColor();
            if ((image_1 === null || image_1 === void 0 ? void 0 : image_1.svgData) !== undefined && optionsImage_1.replaceColor && color_1) {
                var svgColoredData = Utils_1.Utils.replaceColorSvg(image_1, color_1, this.opacity.value);
                var svg = new Blob([svgColoredData], { type: "image/svg+xml" });
                var domUrl_1 = window.URL || window.webkitURL || window;
                var url_1 = domUrl_1.createObjectURL(svg);
                var img_1 = new Image();
                this.image = {
                    data: image_1,
                    loaded: false,
                    ratio: optionsImage_1.width / optionsImage_1.height,
                    replaceColor: (_p = optionsImage_1.replaceColor) !== null && _p !== void 0 ? _p : optionsImage_1.replace_color,
                    source: optionsImage_1.src,
                };
                img_1.addEventListener("load", function () {
                    if (_this.image) {
                        _this.image.loaded = true;
                        image_1.element = img_1;
                    }
                    domUrl_1.revokeObjectURL(url_1);
                });
                img_1.addEventListener("error", function () {
                    domUrl_1.revokeObjectURL(url_1);
                    Utils_1.Utils.loadImage(optionsImage_1.src).then(function (img2) {
                        if (_this.image) {
                            image_1.element = img2.element;
                            _this.image.loaded = true;
                        }
                    });
                });
                img_1.src = url_1;
            }
            else {
                this.image = {
                    data: image_1,
                    loaded: true,
                    ratio: optionsImage_1.width / optionsImage_1.height,
                    replaceColor: (_q = optionsImage_1.replaceColor) !== null && _q !== void 0 ? _q : optionsImage_1.replace_color,
                    source: optionsImage_1.src,
                };
            }
            if (!this.image.ratio) {
                this.image.ratio = 1;
            }
            this.fill = (_r = optionsImage_1.fill) !== null && _r !== void 0 ? _r : this.fill;
            this.close = (_s = optionsImage_1.close) !== null && _s !== void 0 ? _s : this.close;
        }
        this.stroke =
            this.particlesOptions.stroke instanceof Array
                ? Utils_1.Utils.itemFromArray(this.particlesOptions.stroke)
                : this.particlesOptions.stroke;
        this.strokeColor = Utils_1.ColorUtils.colorToRgb(this.stroke.color);
        this.shadowColor = Utils_1.ColorUtils.colorToRgb(this.particlesOptions.shadow.color);
        this.updater = new Updater_1.Updater(this.container, this);
    }
    Particle.prototype.update = function (index, delta) {
        this.links = [];
        this.updater.update(delta);
    };
    Particle.prototype.draw = function (delta) {
        var _a;
        if (((_a = this.image) === null || _a === void 0 ? void 0 : _a.loaded) === false) {
            return;
        }
        this.container.canvas.drawParticle(this, delta);
    };
    Particle.prototype.isOverlapping = function () {
        var _this = this;
        var container = this.container;
        var collisionFound = false;
        var iterations = 0;
        var pos1 = this.getPosition();
        for (var _i = 0, _a = container.particles.array.filter(function (t) { return t != _this; }); _i < _a.length; _i++) {
            var p2 = _a[_i];
            iterations++;
            var pos2 = p2.getPosition();
            var dist = Utils_1.Utils.getDistance(pos1, pos2);
            if (dist <= this.size.value + p2.size.value) {
                collisionFound = true;
                break;
            }
        }
        return {
            collisionFound: collisionFound,
            iterations: iterations,
        };
    };
    Particle.prototype.checkOverlap = function (position) {
        var container = this.container;
        var overlapResult = this.isOverlapping();
        if (overlapResult.iterations >= container.particles.count) {
            container.particles.remove(this);
        }
        else if (overlapResult.collisionFound) {
            this.position.x = position ? position.x : Math.random() * container.canvas.size.width;
            this.position.y = position ? position.y : Math.random() * container.canvas.size.height;
            this.checkOverlap();
        }
    };
    Particle.prototype.startInfection = function (stage) {
        var container = this.container;
        var options = container.options;
        var stages = options.infection.stages;
        var stagesCount = stages.length;
        if (stage > stagesCount || stage < 0) {
            return;
        }
        this.infectionDelay = 0;
        this.infectionDelayStage = stage;
    };
    Particle.prototype.updateInfectionStage = function (stage) {
        var container = this.container;
        var options = container.options;
        var stagesCount = options.infection.stages.length;
        if (stage > stagesCount || stage < 0 || (this.infectionStage !== undefined && this.infectionStage > stage)) {
            return;
        }
        if (this.infectionTimeout !== undefined) {
            window.clearTimeout(this.infectionTimeout);
        }
        this.infectionStage = stage;
        this.infectionTime = 0;
    };
    Particle.prototype.updateInfection = function (delta) {
        var container = this.container;
        var options = container.options;
        var infection = options.infection;
        var stages = options.infection.stages;
        var stagesCount = stages.length;
        if (this.infectionDelay !== undefined && this.infectionDelayStage !== undefined) {
            var stage = this.infectionDelayStage;
            if (stage > stagesCount || stage < 0) {
                return;
            }
            if (this.infectionDelay > infection.delay * 1000) {
                this.infectionStage = stage;
                this.infectionTime = 0;
                delete this.infectionDelay;
                delete this.infectionDelayStage;
            }
            else {
                this.infectionDelay += delta;
            }
        }
        else {
            delete this.infectionDelay;
            delete this.infectionDelayStage;
        }
        if (this.infectionStage !== undefined && this.infectionTime !== undefined) {
            var infectionStage = stages[this.infectionStage];
            if (infectionStage.duration !== undefined && infectionStage.duration >= 0) {
                if (this.infectionTime > infectionStage.duration * 1000) {
                    this.nextInfectionStage();
                }
                else {
                    this.infectionTime += delta;
                }
            }
            else {
                this.infectionTime += delta;
            }
        }
        else {
            delete this.infectionStage;
            delete this.infectionTime;
        }
    };
    Particle.prototype.getPosition = function () {
        return {
            x: this.position.x + this.offset.x,
            y: this.position.y + this.offset.y,
        };
    };
    Particle.prototype.getColor = function () {
        var _a;
        return (_a = this.bubble.color) !== null && _a !== void 0 ? _a : this.color;
    };
    Particle.prototype.destroy = function () {
        this.destroyed = true;
    };
    Particle.prototype.nextInfectionStage = function () {
        var container = this.container;
        var options = container.options;
        var stagesCount = options.infection.stages.length;
        if (stagesCount <= 0 || this.infectionStage === undefined) {
            return;
        }
        this.infectionTime = 0;
        if (stagesCount <= ++this.infectionStage) {
            if (options.infection.cure) {
                delete this.infectionStage;
                delete this.infectionTime;
                return;
            }
            else {
                this.infectionStage = 0;
                this.infectionTime = 0;
            }
        }
    };
    Particle.prototype.calcPosition = function (container, position) {
        for (var id in container.plugins) {
            var plugin = container.plugins[id];
            var pluginPos = plugin.particlePosition !== undefined ? plugin.particlePosition(position, this) : undefined;
            if (pluginPos !== undefined) {
                return pluginPos;
            }
        }
        var pos = { x: 0, y: 0 };
        pos.x = position ? position.x : Math.random() * container.canvas.size.width;
        pos.y = position ? position.y : Math.random() * container.canvas.size.height;
        if (pos.x > container.canvas.size.width - this.size.value * 2) {
            pos.x -= this.size.value;
        }
        else if (pos.x < this.size.value * 2) {
            pos.x += this.size.value;
        }
        if (pos.y > container.canvas.size.height - this.size.value * 2) {
            pos.y -= this.size.value;
        }
        else if (pos.y < this.size.value * 2) {
            pos.y += this.size.value;
        }
        return pos;
    };
    Particle.prototype.calculateVelocity = function () {
        var baseVelocity = Utils_1.Utils.getParticleBaseVelocity(this);
        var res = {
            horizontal: 0,
            vertical: 0,
        };
        if (this.particlesOptions.move.straight) {
            res.horizontal = baseVelocity.x;
            res.vertical = baseVelocity.y;
            if (this.particlesOptions.move.random) {
                res.horizontal *= Math.random();
                res.vertical *= Math.random();
            }
        }
        else {
            res.horizontal = baseVelocity.x + Math.random() - 0.5;
            res.vertical = baseVelocity.y + Math.random() - 0.5;
        }
        return res;
    };
    return Particle;
}());
exports.Particle = Particle;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Core/Particle/Interactions/Mouse/Bubbler.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Core/Particle/Interactions/Mouse/Bubbler.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Bubbler = void 0;
var Utils_1 = __webpack_require__(/*! ../../../../Utils */ "./node_modules/tsparticles/dist/Utils/index.js");
var Enums_1 = __webpack_require__(/*! ../../../../Enums */ "./node_modules/tsparticles/dist/Enums/index.js");
var Bubbler = (function () {
    function Bubbler() {
    }
    Bubbler.reset = function (particle) {
        if (!particle.bubble.inRange) {
            delete particle.bubble.opacity;
            delete particle.bubble.radius;
            delete particle.bubble.color;
        }
    };
    Bubbler.bubble = function (container, _delta) {
        var options = container.options;
        var events = options.interactivity.events;
        var onHover = events.onHover;
        var onClick = events.onClick;
        var hoverEnabled = onHover.enable;
        var hoverMode = onHover.mode;
        var clickEnabled = onClick.enable;
        var clickMode = onClick.mode;
        if (hoverEnabled && Utils_1.Utils.isInArray(Enums_1.HoverMode.bubble, hoverMode)) {
            this.hoverBubble(container);
        }
        else if (clickEnabled && Utils_1.Utils.isInArray(Enums_1.ClickMode.bubble, clickMode)) {
            this.clickBubble(container);
        }
    };
    Bubbler.process = function (container, particle, distMouse, timeSpent, data) {
        var bubbleParam = data.bubbleObj.optValue;
        if (bubbleParam === undefined) {
            return;
        }
        var options = container.options;
        var bubbleDuration = options.interactivity.modes.bubble.duration;
        var bubbleDistance = container.retina.bubbleModeDistance;
        var particlesParam = data.particlesObj.optValue;
        var pObjBubble = data.bubbleObj.value;
        var pObj = data.particlesObj.value || 0;
        var type = data.type;
        if (bubbleParam !== particlesParam) {
            if (!container.bubble.durationEnd) {
                if (distMouse <= bubbleDistance) {
                    var obj = pObjBubble !== null && pObjBubble !== void 0 ? pObjBubble : pObj;
                    if (obj !== bubbleParam) {
                        var value = pObj - (timeSpent * (pObj - bubbleParam)) / bubbleDuration;
                        if (type === Enums_1.ProcessBubbleType.size) {
                            particle.bubble.radius = value;
                        }
                        if (type === Enums_1.ProcessBubbleType.opacity) {
                            particle.bubble.opacity = value;
                        }
                    }
                }
                else {
                    if (type === Enums_1.ProcessBubbleType.size) {
                        delete particle.bubble.radius;
                    }
                    if (type === Enums_1.ProcessBubbleType.opacity) {
                        delete particle.bubble.opacity;
                    }
                }
            }
            else if (pObjBubble) {
                if (type === Enums_1.ProcessBubbleType.size) {
                    delete particle.bubble.radius;
                }
                if (type === Enums_1.ProcessBubbleType.opacity) {
                    delete particle.bubble.opacity;
                }
            }
        }
    };
    Bubbler.clickBubble = function (container) {
        var _a;
        var options = container.options;
        var mouseClickPos = container.interactivity.mouse.clickPosition;
        if (mouseClickPos === undefined) {
            return;
        }
        var distance = container.retina.bubbleModeDistance;
        var query = container.particles.quadTree.query(new Utils_1.Circle(mouseClickPos.x, mouseClickPos.y, distance));
        for (var _i = 0, query_1 = query; _i < query_1.length; _i++) {
            var particle = query_1[_i];
            particle.bubble.inRange = true;
            var pos = particle.getPosition();
            var distMouse = Utils_1.Utils.getDistance(pos, mouseClickPos);
            var timeSpent = (new Date().getTime() - (container.interactivity.mouse.clickTime || 0)) / 1000;
            if (container.bubble.clicking) {
                if (timeSpent > options.interactivity.modes.bubble.duration) {
                    container.bubble.durationEnd = true;
                }
                if (timeSpent > options.interactivity.modes.bubble.duration * 2) {
                    container.bubble.clicking = false;
                    container.bubble.durationEnd = false;
                }
                var sizeData = {
                    bubbleObj: {
                        optValue: container.retina.bubbleModeSize,
                        value: particle.bubble.radius,
                    },
                    particlesObj: {
                        optValue: (_a = particle.sizeValue) !== null && _a !== void 0 ? _a : container.retina.sizeValue,
                        value: particle.size.value,
                    },
                    type: Enums_1.ProcessBubbleType.size,
                };
                this.process(container, particle, distMouse, timeSpent, sizeData);
                var opacityData = {
                    bubbleObj: {
                        optValue: options.interactivity.modes.bubble.opacity,
                        value: particle.bubble.opacity,
                    },
                    particlesObj: {
                        optValue: particle.particlesOptions.opacity.value,
                        value: particle.opacity.value,
                    },
                    type: Enums_1.ProcessBubbleType.opacity,
                };
                this.process(container, particle, distMouse, timeSpent, opacityData);
                if (!container.bubble.durationEnd) {
                    if (distMouse <= container.retina.bubbleModeDistance) {
                        this.hoverBubbleColor(container, particle);
                    }
                    else {
                        delete particle.bubble.color;
                    }
                }
                else {
                    delete particle.bubble.color;
                }
            }
        }
    };
    Bubbler.hoverBubble = function (container) {
        var mousePos = container.interactivity.mouse.position;
        if (mousePos === undefined) {
            return;
        }
        var distance = container.retina.bubbleModeDistance;
        var query = container.particles.quadTree.query(new Utils_1.Circle(mousePos.x, mousePos.y, distance));
        for (var _i = 0, query_2 = query; _i < query_2.length; _i++) {
            var particle = query_2[_i];
            particle.bubble.inRange = true;
            var pos = particle.getPosition();
            var distance_1 = Utils_1.Utils.getDistance(pos, mousePos);
            var ratio = 1 - distance_1 / container.retina.bubbleModeDistance;
            if (distance_1 <= container.retina.bubbleModeDistance) {
                if (ratio >= 0 && container.interactivity.status === Utils_1.Constants.mouseMoveEvent) {
                    this.hoverBubbleSize(container, particle, ratio);
                    this.hoverBubbleOpacity(container, particle, ratio);
                    this.hoverBubbleColor(container, particle);
                }
            }
            else {
                this.reset(particle);
            }
            if (container.interactivity.status === Utils_1.Constants.mouseLeaveEvent) {
                this.reset(particle);
            }
        }
    };
    Bubbler.hoverBubbleSize = function (container, particle, ratio) {
        var _a;
        var modeSize = container.retina.bubbleModeSize;
        if (modeSize === undefined) {
            return;
        }
        var optSize = (_a = particle.sizeValue) !== null && _a !== void 0 ? _a : container.retina.sizeValue;
        var pSize = particle.size.value;
        var size = this.calculateBubbleValue(pSize, modeSize, optSize, ratio);
        if (size !== undefined) {
            particle.bubble.radius = size;
        }
    };
    Bubbler.hoverBubbleOpacity = function (container, particle, ratio) {
        var options = container.options;
        var modeOpacity = options.interactivity.modes.bubble.opacity;
        if (modeOpacity === undefined) {
            return;
        }
        var optOpacity = particle.particlesOptions.opacity.value;
        var pOpacity = particle.opacity.value;
        var opacity = this.calculateBubbleValue(pOpacity, modeOpacity, optOpacity, ratio);
        if (opacity !== undefined) {
            particle.bubble.opacity = opacity;
        }
    };
    Bubbler.calculateBubbleValue = function (particleValue, modeValue, optionsValue, ratio) {
        if (modeValue > optionsValue) {
            var size = particleValue + (modeValue - optionsValue) * ratio;
            return Utils_1.Utils.clamp(size, particleValue, modeValue);
        }
        else if (modeValue < optionsValue) {
            var size = particleValue - (optionsValue - modeValue) * ratio;
            return Utils_1.Utils.clamp(size, modeValue, particleValue);
        }
    };
    Bubbler.hoverBubbleColor = function (container, particle) {
        var options = container.options;
        if (particle.bubble.color === undefined) {
            var modeColor = options.interactivity.modes.bubble.color;
            if (modeColor === undefined) {
                return;
            }
            var bubbleColor = modeColor instanceof Array ? Utils_1.Utils.itemFromArray(modeColor) : modeColor;
            particle.bubble.color = Utils_1.ColorUtils.colorToHsl(bubbleColor);
        }
    };
    return Bubbler;
}());
exports.Bubbler = Bubbler;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Core/Particle/Interactions/Mouse/Connector.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Core/Particle/Interactions/Mouse/Connector.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Connector = void 0;
var Utils_1 = __webpack_require__(/*! ../../../../Utils */ "./node_modules/tsparticles/dist/Utils/index.js");
var Connector = (function () {
    function Connector() {
    }
    Connector.connect = function (container, _delta) {
        var options = container.options;
        if (options.interactivity.events.onHover.enable && container.interactivity.status === "mousemove") {
            var mousePos = container.interactivity.mouse.position;
            if (!mousePos) {
                return;
            }
            var distance = Math.abs(container.retina.connectModeRadius);
            var query = container.particles.quadTree.query(new Utils_1.Circle(mousePos.x, mousePos.y, distance));
            var i = 0;
            for (var _i = 0, query_1 = query; _i < query_1.length; _i++) {
                var p1 = query_1[_i];
                var pos1 = p1.getPosition();
                for (var _a = 0, _b = query.slice(i + 1); _a < _b.length; _a++) {
                    var p2 = _b[_a];
                    var pos2 = p2.getPosition();
                    var distMax = Math.abs(container.retina.connectModeDistance);
                    var xDiff = Math.abs(pos1.x - pos2.x);
                    var yDiff = Math.abs(pos1.y - pos2.y);
                    if (xDiff < distMax && yDiff < distMax) {
                        container.canvas.drawConnectLine(p1, p2);
                    }
                }
                ++i;
            }
        }
    };
    return Connector;
}());
exports.Connector = Connector;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Core/Particle/Interactions/Mouse/Grabber.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Core/Particle/Interactions/Mouse/Grabber.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Grabber = void 0;
var Utils_1 = __webpack_require__(/*! ../../../../Utils */ "./node_modules/tsparticles/dist/Utils/index.js");
var Grabber = (function () {
    function Grabber() {
    }
    Grabber.grab = function (container, _delta) {
        var _a, _b;
        var options = container.options;
        var interactivity = options.interactivity;
        if (interactivity.events.onHover.enable && container.interactivity.status === Utils_1.Constants.mouseMoveEvent) {
            var mousePos = container.interactivity.mouse.position;
            if (mousePos === undefined) {
                return;
            }
            var distance = container.retina.grabModeDistance;
            var query = container.particles.quadTree.query(new Utils_1.Circle(mousePos.x, mousePos.y, distance));
            for (var _i = 0, query_1 = query; _i < query_1.length; _i++) {
                var particle = query_1[_i];
                var pos = particle.getPosition();
                var distance_1 = Utils_1.Utils.getDistance(pos, mousePos);
                if (distance_1 <= container.retina.grabModeDistance) {
                    var grabLineOptions = interactivity.modes.grab.links;
                    var lineOpacity = grabLineOptions.opacity;
                    var grabDistance = container.retina.grabModeDistance;
                    var opacityLine = lineOpacity - (distance_1 * lineOpacity) / grabDistance;
                    if (opacityLine > 0) {
                        var optColor = (_a = grabLineOptions.color) !== null && _a !== void 0 ? _a : particle.particlesOptions.links.color;
                        if (!container.particles.grabLineColor) {
                            container.particles.grabLineColor =
                                optColor === Utils_1.Constants.randomColorValue ||
                                    ((_b = optColor) === null || _b === void 0 ? void 0 : _b.value) === Utils_1.Constants.randomColorValue
                                    ? Utils_1.Constants.randomColorValue
                                    : Utils_1.ColorUtils.colorToRgb(optColor);
                        }
                        var colorLine = void 0;
                        if (container.particles.grabLineColor === Utils_1.Constants.randomColorValue) {
                            colorLine = Utils_1.ColorUtils.getRandomRgbColor();
                        }
                        else {
                            colorLine = container.particles.grabLineColor;
                        }
                        if (colorLine === undefined) {
                            return;
                        }
                        container.canvas.drawGrabLine(particle, colorLine, opacityLine, mousePos);
                    }
                }
            }
        }
    };
    return Grabber;
}());
exports.Grabber = Grabber;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Core/Particle/Interactions/Mouse/Repulser.js":
/*!************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Core/Particle/Interactions/Mouse/Repulser.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Repulser = void 0;
var Enums_1 = __webpack_require__(/*! ../../../../Enums */ "./node_modules/tsparticles/dist/Enums/index.js");
var Utils_1 = __webpack_require__(/*! ../../../../Utils */ "./node_modules/tsparticles/dist/Utils/index.js");
var Repulser = (function () {
    function Repulser() {
    }
    Repulser.repulse = function (container, _delta) {
        var options = container.options;
        var mouseMoveStatus = container.interactivity.status === Utils_1.Constants.mouseMoveEvent;
        var events = options.interactivity.events;
        var hoverEnabled = events.onHover.enable;
        var hoverMode = events.onHover.mode;
        var clickEnabled = events.onClick.enable;
        var clickMode = events.onClick.mode;
        var divMode = events.onDiv.mode;
        var divEnabled = events.onDiv.enable;
        if (mouseMoveStatus && hoverEnabled && Utils_1.Utils.isInArray(Enums_1.HoverMode.repulse, hoverMode)) {
            this.hoverRepulse(container);
        }
        else if (clickEnabled && Utils_1.Utils.isInArray(Enums_1.ClickMode.repulse, clickMode)) {
            this.clickRepulse(container);
        }
        else if (divEnabled && Utils_1.Utils.isInArray(Enums_1.DivMode.repulse, divMode)) {
            this.divRepulse(container);
        }
    };
    Repulser.divRepulse = function (container) {
        var options = container.options;
        var elem = document.getElementById(options.interactivity.events.onDiv.elementId);
        if (!elem) {
            return;
        }
        var pxRatio = container.retina.pixelRatio;
        var pos = {
            x: (elem.offsetLeft + elem.offsetWidth / 2) * pxRatio,
            y: (elem.offsetTop + elem.offsetHeight / 2) * pxRatio,
        };
        var repulseRadius = (elem.offsetWidth / 2) * pxRatio;
        this.processRepulse(container, pos, repulseRadius);
    };
    Repulser.hoverRepulse = function (container) {
        var mousePos = container.interactivity.mouse.position;
        if (!mousePos) {
            return;
        }
        var repulseRadius = container.retina.repulseModeDistance;
        this.processRepulse(container, mousePos, repulseRadius);
    };
    Repulser.processRepulse = function (container, position, repulseRadius) {
        var query = container.particles.quadTree.query(new Utils_1.Circle(position.x, position.y, repulseRadius));
        for (var _i = 0, query_1 = query; _i < query_1.length; _i++) {
            var particle = query_1[_i];
            var _a = Utils_1.Utils.getDistances(particle.position, position), dx = _a.dx, dy = _a.dy, distance = _a.distance;
            var normVec = {
                x: dx / distance,
                y: dy / distance,
            };
            var velocity = container.options.interactivity.modes.repulse.speed * 100;
            var repulseFactor = Utils_1.Utils.clamp((1 - Math.pow(distance / repulseRadius, 2)) * velocity, 0, 50);
            var outMode = particle.particlesOptions.move.outMode;
            var sizeValue = particle.size.value;
            var pos = {
                x: particle.position.x + normVec.x * repulseFactor,
                y: particle.position.y + normVec.y * repulseFactor,
            };
            if (outMode === Enums_1.OutMode.bounce ||
                outMode === Enums_1.OutMode.bounceVertical ||
                outMode === Enums_1.OutMode.bounceHorizontal) {
                var isInside = {
                    horizontal: pos.x - sizeValue > 0 && pos.x + sizeValue < container.canvas.size.width,
                    vertical: pos.y - sizeValue > 0 && pos.y + sizeValue < container.canvas.size.height,
                };
                if (outMode === Enums_1.OutMode.bounceVertical || isInside.horizontal) {
                    particle.position.x = pos.x;
                }
                if (outMode === Enums_1.OutMode.bounceHorizontal || isInside.vertical) {
                    particle.position.y = pos.y;
                }
            }
            else {
                particle.position.x = pos.x;
                particle.position.y = pos.y;
            }
        }
    };
    Repulser.clickRepulse = function (container) {
        if (!container.repulse.finish) {
            if (!container.repulse.count) {
                container.repulse.count = 0;
            }
            container.repulse.count++;
            if (container.repulse.count === container.particles.count) {
                container.repulse.finish = true;
            }
        }
        if (container.repulse.clicking) {
            var repulseDistance = container.retina.repulseModeDistance;
            var repulseRadius = Math.pow(repulseDistance / 6, 3);
            var mouseClickPos = container.interactivity.mouse.clickPosition;
            if (mouseClickPos === undefined) {
                return;
            }
            var range = new Utils_1.Circle(mouseClickPos.x, mouseClickPos.y, repulseRadius);
            var query = container.particles.quadTree.query(range);
            for (var _i = 0, query_2 = query; _i < query_2.length; _i++) {
                var particle = query_2[_i];
                var _a = Utils_1.Utils.getDistances(mouseClickPos, particle.position), dx = _a.dx, dy = _a.dy, distance = _a.distance;
                var d = distance * distance;
                var velocity = container.options.interactivity.modes.repulse.speed;
                var force = (-repulseRadius * velocity) / d;
                if (d <= repulseRadius) {
                    container.repulse.particles.push(particle);
                    this.processClickRepulse(container, particle, dx, dy, force);
                }
            }
        }
        else if (container.repulse.clicking === false) {
            for (var _b = 0, _c = container.repulse.particles; _b < _c.length; _b++) {
                var particle = _c[_b];
                particle.velocity.horizontal = particle.initialVelocity.horizontal;
                particle.velocity.vertical = particle.initialVelocity.vertical;
            }
            container.repulse.particles = [];
        }
    };
    Repulser.processClickRepulse = function (container, particle, dx, dy, force) {
        var options = container.options;
        var f = Math.atan2(dy, dx);
        particle.velocity.horizontal = force * Math.cos(f);
        particle.velocity.vertical = force * Math.sin(f);
        var outMode = options.particles.move.outMode;
        if (outMode === Enums_1.OutMode.bounce || outMode === Enums_1.OutMode.bounceHorizontal || outMode === Enums_1.OutMode.bounceVertical) {
            var pos = {
                x: particle.position.x + particle.velocity.horizontal,
                y: particle.position.y + particle.velocity.vertical,
            };
            if (outMode !== Enums_1.OutMode.bounceVertical) {
                if (pos.x + particle.size.value > container.canvas.size.width || pos.x - particle.size.value < 0) {
                    particle.velocity.horizontal *= -1;
                }
            }
            if (outMode !== Enums_1.OutMode.bounceHorizontal) {
                if (pos.y + particle.size.value > container.canvas.size.height || pos.y - particle.size.value < 0) {
                    particle.velocity.vertical *= -1;
                }
            }
        }
    };
    return Repulser;
}());
exports.Repulser = Repulser;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Core/Particle/Interactions/Particles/Attractor.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Core/Particle/Interactions/Particles/Attractor.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Attractor = void 0;
var Utils_1 = __webpack_require__(/*! ../../../../Utils */ "./node_modules/tsparticles/dist/Utils/index.js");
var Attractor = (function () {
    function Attractor() {
    }
    Attractor.attract = function (p1, container, _delta) {
        var _a;
        var options = container.options;
        var distance = (_a = p1.linksDistance) !== null && _a !== void 0 ? _a : container.retina.linksDistance;
        var pos1 = p1.getPosition();
        var query = container.particles.quadTree.query(new Utils_1.Circle(pos1.x, pos1.y, distance));
        for (var _i = 0, query_1 = query; _i < query_1.length; _i++) {
            var p2 = query_1[_i];
            if (p1 === p2 || p2.particlesOptions.move.attract.enable) {
                continue;
            }
            var pos2 = p2.getPosition();
            var _b = Utils_1.Utils.getDistances(pos1, pos2), dx = _b.dx, dy = _b.dy;
            var rotate = options.particles.move.attract.rotate;
            var ax = dx / (rotate.x * 1000);
            var ay = dy / (rotate.y * 1000);
            p1.velocity.horizontal -= ax;
            p1.velocity.vertical -= ay;
            p2.velocity.horizontal += ax;
            p2.velocity.vertical += ay;
        }
    };
    return Attractor;
}());
exports.Attractor = Attractor;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Core/Particle/Interactions/Particles/Collider.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Core/Particle/Interactions/Particles/Collider.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Collider = void 0;
var Utils_1 = __webpack_require__(/*! ../../../../Utils */ "./node_modules/tsparticles/dist/Utils/index.js");
var Enums_1 = __webpack_require__(/*! ../../../../Enums */ "./node_modules/tsparticles/dist/Enums/index.js");
var Collider = (function () {
    function Collider() {
    }
    Collider.collide = function (p1, container, _delta) {
        var pos1 = p1.getPosition();
        var query = container.particles.quadTree.query(new Utils_1.Circle(pos1.x, pos1.y, p1.size.value * 2));
        for (var _i = 0, query_1 = query; _i < query_1.length; _i++) {
            var p2 = query_1[_i];
            if (p1 === p2 ||
                !p2.particlesOptions.collisions.enable ||
                p1.particlesOptions.collisions.mode !== p2.particlesOptions.collisions.mode) {
                continue;
            }
            var pos2 = p2.getPosition();
            var dist = Utils_1.Utils.getDistance(pos1, pos2);
            var defaultSize = container.retina.sizeValue;
            var radius1 = this.getRadius(p1, defaultSize);
            var radius2 = this.getRadius(p2, defaultSize);
            var distP = radius1 + radius2;
            if (dist <= distP) {
                this.resolveCollision(p1, p2);
            }
        }
    };
    Collider.getRadius = function (particle, fallback) {
        return particle.bubble.radius || particle.size.value || fallback;
    };
    Collider.resolveCollision = function (p1, p2) {
        var pos1 = p1.getPosition();
        var pos2 = p2.getPosition();
        switch (p1.particlesOptions.collisions.mode) {
            case Enums_1.CollisionMode.bounce: {
                var xVelocityDiff = p1.velocity.horizontal - p2.velocity.horizontal;
                var yVelocityDiff = p1.velocity.vertical - p2.velocity.vertical;
                var xDist = pos2.x - pos1.x;
                var yDist = pos2.y - pos1.y;
                if (xVelocityDiff * xDist + yVelocityDiff * yDist >= 0) {
                    var angle = -Math.atan2(pos2.y - pos1.y, pos2.x - pos1.x);
                    var m1 = p1.size.value;
                    var m2 = p2.size.value;
                    var u1 = this.rotate(p1.velocity, angle);
                    var u2 = this.rotate(p2.velocity, angle);
                    var v1 = {
                        horizontal: (u1.horizontal * (m1 - m2)) / (m1 + m2) + (u2.horizontal * 2 * m2) / (m1 + m2),
                        vertical: u1.vertical,
                    };
                    var v2 = {
                        horizontal: (u2.horizontal * (m1 - m2)) / (m1 + m2) + (u1.horizontal * 2 * m2) / (m1 + m2),
                        vertical: u2.vertical,
                    };
                    var vFinal1 = this.rotate(v1, -angle);
                    var vFinal2 = this.rotate(v2, -angle);
                    p1.velocity.horizontal = vFinal1.horizontal;
                    p1.velocity.vertical = vFinal1.vertical;
                    p2.velocity.horizontal = vFinal2.horizontal;
                    p2.velocity.vertical = vFinal2.vertical;
                }
            }
        }
    };
    Collider.rotate = function (velocity, angle) {
        return {
            horizontal: velocity.horizontal * Math.cos(angle) - velocity.vertical * Math.sin(angle),
            vertical: velocity.horizontal * Math.sin(angle) + velocity.vertical * Math.cos(angle),
        };
    };
    return Collider;
}());
exports.Collider = Collider;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Core/Particle/Interactions/Particles/Infecter.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Core/Particle/Interactions/Particles/Infecter.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Infecter = void 0;
var Utils_1 = __webpack_require__(/*! ../../../../Utils */ "./node_modules/tsparticles/dist/Utils/index.js");
var Infecter = (function () {
    function Infecter() {
    }
    Infecter.infect = function (p1, container, delta) {
        var _a, _b;
        p1.updateInfection(delta);
        if (p1.infectionStage === undefined) {
            return;
        }
        var options = container.options;
        var infectionOptions = options.infection;
        if (!infectionOptions.enable || infectionOptions.stages.length < 1) {
            return;
        }
        var infectionStage1 = infectionOptions.stages[p1.infectionStage];
        var pxRatio = container.retina.pixelRatio;
        var radius = p1.size.value * 2 + infectionStage1.radius * pxRatio;
        var pos = p1.getPosition();
        var infectedStage1 = (_a = infectionStage1.infectedStage) !== null && _a !== void 0 ? _a : p1.infectionStage;
        var query = container.particles.quadTree
            .query(new Utils_1.Circle(pos.x, pos.y, radius))
            .filter(function (t) { return t.infectionStage === undefined || t.infectionStage !== p1.infectionStage; });
        var infections = infectionStage1.rate;
        var neighbors = query.length;
        for (var _i = 0, query_1 = query; _i < query_1.length; _i++) {
            var p2 = query_1[_i];
            if (Math.random() < infections / neighbors) {
                if (p2.infectionStage === undefined) {
                    p2.startInfection(infectedStage1);
                }
                else if (p2.infectionStage < p1.infectionStage) {
                    p2.updateInfectionStage(infectedStage1);
                }
                else if (p2.infectionStage > p1.infectionStage) {
                    var infectionStage2 = infectionOptions.stages[p2.infectionStage];
                    var infectedStage2 = (_b = infectionStage2 === null || infectionStage2 === void 0 ? void 0 : infectionStage2.infectedStage) !== null && _b !== void 0 ? _b : p2.infectionStage;
                    p1.updateInfectionStage(infectedStage2);
                }
            }
        }
    };
    return Infecter;
}());
exports.Infecter = Infecter;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Core/Particle/Interactions/Particles/InteractionManager.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Core/Particle/Interactions/Particles/InteractionManager.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.InteractionManager = void 0;
var Linker_1 = __webpack_require__(/*! ./Linker */ "./node_modules/tsparticles/dist/Core/Particle/Interactions/Particles/Linker.js");
var Attractor_1 = __webpack_require__(/*! ./Attractor */ "./node_modules/tsparticles/dist/Core/Particle/Interactions/Particles/Attractor.js");
var Collider_1 = __webpack_require__(/*! ./Collider */ "./node_modules/tsparticles/dist/Core/Particle/Interactions/Particles/Collider.js");
var Infecter_1 = __webpack_require__(/*! ./Infecter */ "./node_modules/tsparticles/dist/Core/Particle/Interactions/Particles/Infecter.js");
var InteractionManager = (function () {
    function InteractionManager() {
    }
    InteractionManager.interact = function (p1, container, delta) {
        if (p1.particlesOptions.links.enable) {
            Linker_1.Linker.link(p1, container, delta);
        }
        if (p1.particlesOptions.move.attract.enable) {
            Attractor_1.Attractor.attract(p1, container, delta);
        }
        if (p1.particlesOptions.collisions.enable) {
            Collider_1.Collider.collide(p1, container, delta);
        }
        if (container.options.infection.enable) {
            Infecter_1.Infecter.infect(p1, container, delta);
        }
    };
    return InteractionManager;
}());
exports.InteractionManager = InteractionManager;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Core/Particle/Interactions/Particles/Linker.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Core/Particle/Interactions/Particles/Linker.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Linker = void 0;
var Utils_1 = __webpack_require__(/*! ../../../../Utils */ "./node_modules/tsparticles/dist/Utils/index.js");
var Linker = (function () {
    function Linker() {
    }
    Linker.link = function (p1, container, _delta) {
        var _a;
        var linkOpt1 = p1.particlesOptions.links;
        var optOpacity = linkOpt1.opacity;
        var optDistance = (_a = p1.linksDistance) !== null && _a !== void 0 ? _a : container.retina.linksDistance;
        var canvasSize = container.canvas.size;
        var warp = linkOpt1.warp;
        var pos1 = p1.getPosition();
        var range = warp
            ? new Utils_1.CircleWarp(pos1.x, pos1.y, optDistance, canvasSize)
            : new Utils_1.Circle(pos1.x, pos1.y, optDistance);
        var query = container.particles.quadTree.query(range);
        for (var _i = 0, query_1 = query; _i < query_1.length; _i++) {
            var p2 = query_1[_i];
            var linkOpt2 = p2.particlesOptions.links;
            if (p1 === p2 || !linkOpt2.enable || linkOpt1.id !== linkOpt2.id) {
                continue;
            }
            var pos2 = p2.getPosition();
            var distance = Utils_1.Utils.getDistance(pos1, pos2);
            if (warp) {
                if (distance > optDistance) {
                    var pos2NE = {
                        x: pos2.x - canvasSize.width,
                        y: pos2.y,
                    };
                    distance = Utils_1.Utils.getDistance(pos1, pos2NE);
                    if (distance > optDistance) {
                        var pos2SE = {
                            x: pos2.x - canvasSize.width,
                            y: pos2.y - canvasSize.height,
                        };
                        distance = Utils_1.Utils.getDistance(pos1, pos2SE);
                        if (distance > optDistance) {
                            var pos2SW = {
                                x: pos2.x,
                                y: pos2.y - canvasSize.height,
                            };
                            distance = Utils_1.Utils.getDistance(pos1, pos2SW);
                        }
                    }
                }
            }
            if (distance > optDistance) {
                return;
            }
            var opacityLine = optOpacity - (distance * optOpacity) / optDistance;
            if (opacityLine > 0) {
                var linksOptions = p1.particlesOptions.links;
                var linkColor = linksOptions.id !== undefined
                    ? container.particles.linksColors[linksOptions.id]
                    : container.particles.linksColor;
                if (!linkColor) {
                    var optColor = linksOptions.color;
                    var color = typeof optColor === "string" ? optColor : optColor.value;
                    if (color === Utils_1.Constants.randomColorValue) {
                        if (linksOptions.consent) {
                            linkColor = Utils_1.ColorUtils.colorToRgb({
                                value: color,
                            });
                        }
                        else if (linksOptions.blink) {
                            linkColor = Utils_1.Constants.randomColorValue;
                        }
                        else {
                            linkColor = Utils_1.Constants.midColorValue;
                        }
                    }
                    else {
                        linkColor = Utils_1.ColorUtils.colorToRgb({
                            value: color,
                        });
                    }
                    if (linksOptions.id !== undefined) {
                        container.particles.linksColors[linksOptions.id] = linkColor;
                    }
                    else {
                        container.particles.linksColor = linkColor;
                    }
                }
                if (p2.links.map(function (t) { return t.destination; }).indexOf(p1) === -1 &&
                    p1.links.map(function (t) { return t.destination; }).indexOf(p2) === -1) {
                    p1.links.push({
                        destination: p2,
                        opacity: opacityLine,
                    });
                }
            }
        }
    };
    return Linker;
}());
exports.Linker = Linker;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Core/Particle/Mover.js":
/*!**************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Core/Particle/Mover.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Mover = void 0;
var Utils_1 = __webpack_require__(/*! ../../Utils */ "./node_modules/tsparticles/dist/Utils/index.js");
var Enums_1 = __webpack_require__(/*! ../../Enums */ "./node_modules/tsparticles/dist/Enums/index.js");
var Mover = (function () {
    function Mover(container, particle) {
        this.container = container;
        this.particle = particle;
    }
    Mover.calcNoiseValue = function (input, size, noiseValue) {
        return Math.floor(input / size) / noiseValue.value + noiseValue.offset;
    };
    Mover.prototype.move = function (delta) {
        var _a;
        var container = this.container;
        var options = container.options;
        var particle = this.particle;
        var particlesOptions = particle.particlesOptions;
        if (particlesOptions.move.enable) {
            var slowFactor = this.getProximitySpeedFactor();
            var deltaFactor = options.fpsLimit > 0 ? (60 * delta) / 1000 : 3.6;
            var baseSpeed = (_a = particle.moveSpeed) !== null && _a !== void 0 ? _a : container.retina.moveSpeed;
            var moveSpeed = (baseSpeed / 2) * slowFactor * deltaFactor;
            var noiseOptions = particlesOptions.move.noise;
            var noiseEnabled = noiseOptions.enable;
            if (noiseEnabled) {
                if (particle.lastNoiseTime > particle.noiseDelay) {
                    var position = particle.position;
                    var noiseFactor = noiseOptions.factor;
                    var simplex = container.simplex;
                    var noise = {
                        angle: simplex.noise3D(Mover.calcNoiseValue(position.x, particle.size.value, noiseFactor.horizontal), Mover.calcNoiseValue(position.y, particle.size.value, noiseFactor.horizontal), container.particles.noiseZ),
                        length: simplex.noise3D(Mover.calcNoiseValue(position.x, particle.size.value, noiseFactor.vertical), Mover.calcNoiseValue(position.y, particle.size.value, noiseFactor.vertical), container.particles.noiseZ),
                    };
                    particle.velocity.horizontal += Math.cos(noise.angle) * noise.length;
                    particle.velocity.horizontal = Utils_1.Utils.clamp(particle.velocity.horizontal, -1, 1);
                    particle.velocity.vertical += Math.sin(noise.angle) * noise.length;
                    particle.velocity.vertical = Utils_1.Utils.clamp(particle.velocity.vertical, -1, 1);
                    particle.lastNoiseTime -= particle.noiseDelay;
                }
                else {
                    particle.lastNoiseTime += delta;
                }
            }
            particle.position.x += particle.velocity.horizontal * moveSpeed;
            particle.position.y += particle.velocity.vertical * moveSpeed;
            if (particlesOptions.move.vibrate) {
                particle.position.x += Math.sin(particle.position.x * Math.cos(particle.position.y));
                particle.position.y += Math.cos(particle.position.y * Math.sin(particle.position.x));
            }
        }
        this.moveParallax(delta);
    };
    Mover.prototype.moveParallax = function (_delta) {
        var container = this.container;
        var options = container.options;
        if (!options.interactivity.events.onHover.parallax.enable) {
            return;
        }
        var particle = this.particle;
        var parallaxForce = options.interactivity.events.onHover.parallax.force;
        var mousePos = container.interactivity.mouse.position;
        if (!mousePos) {
            return;
        }
        var windowDimension = {
            height: window.innerHeight / 2,
            width: window.innerWidth / 2,
        };
        var parallaxSmooth = options.interactivity.events.onHover.parallax.smooth;
        var tmp = {
            x: (mousePos.x - windowDimension.width) * (particle.size.value / parallaxForce),
            y: (mousePos.y - windowDimension.height) * (particle.size.value / parallaxForce),
        };
        particle.offset.x += (tmp.x - particle.offset.x) / parallaxSmooth;
        particle.offset.y += (tmp.y - particle.offset.y) / parallaxSmooth;
    };
    Mover.prototype.getProximitySpeedFactor = function () {
        var container = this.container;
        var options = container.options;
        var particle = this.particle;
        var active = Utils_1.Utils.isInArray(Enums_1.HoverMode.slow, options.interactivity.events.onHover.mode);
        if (!active) {
            return 1;
        }
        var mousePos = this.container.interactivity.mouse.position;
        if (!mousePos) {
            return 1;
        }
        var particlePos = particle.getPosition();
        var dist = Utils_1.Utils.getDistance(mousePos, particlePos);
        var radius = container.retina.slowModeRadius;
        if (dist > radius) {
            return 1;
        }
        var proximityFactor = dist / radius || 0;
        var slowFactor = options.interactivity.modes.slow.factor;
        return proximityFactor / slowFactor;
    };
    return Mover;
}());
exports.Mover = Mover;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Core/Particle/Updater.js":
/*!****************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Core/Particle/Updater.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Updater = void 0;
var Utils_1 = __webpack_require__(/*! ../../Utils */ "./node_modules/tsparticles/dist/Utils/index.js");
var Mover_1 = __webpack_require__(/*! ./Mover */ "./node_modules/tsparticles/dist/Core/Particle/Mover.js");
var Enums_1 = __webpack_require__(/*! ../../Enums */ "./node_modules/tsparticles/dist/Enums/index.js");
var Updater = (function () {
    function Updater(container, particle) {
        this.container = container;
        this.particle = particle;
        this.mover = new Mover_1.Mover(container, particle);
    }
    Updater.checkBounds = function (coordinate, radius, size, velocity, outside) {
        if ((coordinate + radius > size && velocity > 0) || (coordinate - radius < 0 && velocity < 0)) {
            outside();
        }
    };
    Updater.prototype.update = function (delta) {
        this.mover.move(delta);
        this.updateOpacity(delta);
        this.updateSize(delta);
        this.updateAngle(delta);
        this.updateColor(delta);
        this.fixOutOfCanvasPosition(delta);
        this.updateOutMode(delta);
    };
    Updater.prototype.updateOpacity = function (delta) {
        var container = this.container;
        var options = container.options;
        var particle = this.particle;
        var deltaFactor = options.fpsLimit > 0 ? (60 * delta) / 1000 : 3.6;
        if (particle.particlesOptions.opacity.animation.enable) {
            switch (particle.opacity.status) {
                case Enums_1.OpacityAnimationStatus.increasing:
                    if (particle.opacity.value >= particle.particlesOptions.opacity.value) {
                        particle.opacity.status = Enums_1.OpacityAnimationStatus.decreasing;
                    }
                    else {
                        particle.opacity.value += (particle.opacity.velocity || 0) * deltaFactor;
                    }
                    break;
                case Enums_1.OpacityAnimationStatus.decreasing:
                    if (particle.opacity.value <= particle.particlesOptions.opacity.animation.minimumValue) {
                        particle.opacity.status = Enums_1.OpacityAnimationStatus.increasing;
                    }
                    else {
                        particle.opacity.value -= (particle.opacity.velocity || 0) * deltaFactor;
                    }
                    break;
            }
            if (particle.opacity.value < 0) {
                particle.opacity.value = 0;
            }
        }
    };
    Updater.prototype.updateSize = function (delta) {
        var _a;
        var container = this.container;
        var options = container.options;
        var particle = this.particle;
        var deltaFactor = options.fpsLimit > 0 ? (60 * delta) / 1000 : 3.6;
        if (particle.particlesOptions.size.animation.enable) {
            switch (particle.size.status) {
                case Enums_1.SizeAnimationStatus.increasing:
                    if (particle.size.value >= ((_a = particle.sizeValue) !== null && _a !== void 0 ? _a : container.retina.sizeValue)) {
                        particle.size.status = Enums_1.SizeAnimationStatus.decreasing;
                    }
                    else {
                        particle.size.value += (particle.size.velocity || 0) * deltaFactor;
                    }
                    break;
                case Enums_1.SizeAnimationStatus.decreasing:
                    if (particle.size.value <= particle.particlesOptions.size.animation.minimumValue) {
                        particle.size.status = Enums_1.SizeAnimationStatus.increasing;
                    }
                    else {
                        particle.size.value -= (particle.size.velocity || 0) * deltaFactor;
                    }
            }
            if (particle.size.value < 0) {
                particle.size.value = 0;
            }
        }
    };
    Updater.prototype.updateAngle = function (delta) {
        var container = this.container;
        var options = container.options;
        var particle = this.particle;
        var deltaFactor = options.fpsLimit > 0 ? (60 * delta) / 1000 : 3.6;
        if (particle.particlesOptions.rotate.animation.enable) {
            switch (particle.rotateDirection) {
                case Enums_1.RotateDirection.clockwise:
                    particle.angle += ((particle.particlesOptions.rotate.animation.speed * Math.PI) / 18) * deltaFactor;
                    if (particle.angle > 360) {
                        particle.angle -= 360;
                    }
                    break;
                case Enums_1.RotateDirection.counterClockwise:
                default:
                    particle.angle -= ((particle.particlesOptions.rotate.animation.speed * Math.PI) / 18) * deltaFactor;
                    if (particle.angle < 0) {
                        particle.angle += 360;
                    }
                    break;
            }
        }
    };
    Updater.prototype.updateColor = function (delta) {
        var container = this.container;
        var options = container.options;
        var particle = this.particle;
        if (particle.color === undefined) {
            return;
        }
        var deltaFactor = options.fpsLimit > 0 ? (60 * delta) / 1000 : 3.6;
        if (particle.particlesOptions.color.animation.enable) {
            particle.color.h += (particle.colorVelocity || 0) * deltaFactor;
            if (particle.color.h > 360) {
                particle.color.h -= 360;
            }
        }
    };
    Updater.prototype.fixOutOfCanvasPosition = function (_delta) {
        var container = this.container;
        var particle = this.particle;
        var outMode = particle.particlesOptions.move.outMode;
        var wrap = particle.particlesOptions.move.warp;
        var canvasSize = container.canvas.size;
        var newPos;
        if (outMode === Enums_1.OutMode.bounce) {
            newPos = {
                bottom: canvasSize.height,
                left: particle.size.value,
                right: canvasSize.width,
                top: particle.size.value,
            };
        }
        else if (outMode === Enums_1.OutMode.bounceHorizontal) {
            newPos = {
                bottom: canvasSize.height + particle.size.value - particle.offset.y,
                left: particle.size.value,
                right: canvasSize.width,
                top: -particle.size.value - particle.offset.y,
            };
        }
        else if (outMode === Enums_1.OutMode.bounceVertical) {
            newPos = {
                bottom: canvasSize.height,
                left: -particle.size.value - particle.offset.x,
                right: canvasSize.width + particle.size.value + particle.offset.x,
                top: particle.size.value,
            };
        }
        else {
            newPos = {
                bottom: canvasSize.height + particle.size.value - particle.offset.y,
                left: -particle.size.value - particle.offset.x,
                right: canvasSize.width + particle.size.value + particle.offset.x,
                top: -particle.size.value - particle.offset.y,
            };
        }
        if (outMode === Enums_1.OutMode.destroy) {
            var sizeValue = particle.size.value;
            if (!Utils_1.Utils.isPointInside(particle.position, container.canvas.size, sizeValue)) {
                container.particles.remove(particle);
            }
        }
        else {
            var sizeValue = particle.size.value;
            var nextBounds = Utils_1.Utils.calculateBounds(particle.position, sizeValue);
            if (nextBounds.left > canvasSize.width - particle.offset.x) {
                particle.position.x = newPos.left;
                if (!wrap) {
                    particle.position.y = Math.random() * canvasSize.height;
                }
            }
            else if (nextBounds.right < -particle.offset.x) {
                particle.position.x = newPos.right;
                if (!wrap) {
                    particle.position.y = Math.random() * canvasSize.height;
                }
            }
            if (nextBounds.top > canvasSize.height - particle.offset.y) {
                if (!wrap) {
                    particle.position.x = Math.random() * canvasSize.width;
                }
                particle.position.y = newPos.top;
            }
            else if (nextBounds.bottom < -particle.offset.y) {
                if (!wrap) {
                    particle.position.x = Math.random() * canvasSize.width;
                }
                particle.position.y = newPos.bottom;
            }
        }
    };
    Updater.prototype.updateOutMode = function (delta) {
        var particle = this.particle;
        switch (particle.particlesOptions.move.outMode) {
            case Enums_1.OutMode.bounce:
            case Enums_1.OutMode.bounceVertical:
            case Enums_1.OutMode.bounceHorizontal:
                this.updateBounce(delta);
                break;
        }
    };
    Updater.prototype.updateBounce = function (delta) {
        var container = this.container;
        var particle = this.particle;
        var handled = false;
        for (var id in container.plugins) {
            var plugin = container.plugins[id];
            if (plugin.particleBounce !== undefined) {
                handled = plugin.particleBounce(particle, delta);
            }
            if (handled) {
                break;
            }
        }
        if (!handled) {
            var outMode = particle.particlesOptions.move.outMode;
            var pos = particle.getPosition();
            if (outMode === Enums_1.OutMode.bounce || outMode === Enums_1.OutMode.bounceHorizontal) {
                var size = particle.size.value;
                var velocity = particle.velocity.horizontal;
                Updater.checkBounds(pos.x, size, container.canvas.size.width, velocity, function () {
                    particle.velocity.horizontal *= -1;
                });
            }
            if (outMode === Enums_1.OutMode.bounce || outMode === Enums_1.OutMode.bounceVertical) {
                var size = particle.size.value;
                var velocity = particle.velocity.vertical;
                Updater.checkBounds(pos.y, size, container.canvas.size.height, velocity, function () {
                    particle.velocity.vertical *= -1;
                });
            }
        }
    };
    return Updater;
}());
exports.Updater = Updater;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Core/Particles.js":
/*!*********************************************************!*\
  !*** ./node_modules/tsparticles/dist/Core/Particles.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Particles = void 0;
var Particle_1 = __webpack_require__(/*! ./Particle */ "./node_modules/tsparticles/dist/Core/Particle.js");
var InteractionManager_1 = __webpack_require__(/*! ./Particle/Interactions/Particles/InteractionManager */ "./node_modules/tsparticles/dist/Core/Particle/Interactions/Particles/InteractionManager.js");
var Grabber_1 = __webpack_require__(/*! ./Particle/Interactions/Mouse/Grabber */ "./node_modules/tsparticles/dist/Core/Particle/Interactions/Mouse/Grabber.js");
var Enums_1 = __webpack_require__(/*! ../Enums */ "./node_modules/tsparticles/dist/Enums/index.js");
var Repulser_1 = __webpack_require__(/*! ./Particle/Interactions/Mouse/Repulser */ "./node_modules/tsparticles/dist/Core/Particle/Interactions/Mouse/Repulser.js");
var Bubbler_1 = __webpack_require__(/*! ./Particle/Interactions/Mouse/Bubbler */ "./node_modules/tsparticles/dist/Core/Particle/Interactions/Mouse/Bubbler.js");
var Connector_1 = __webpack_require__(/*! ./Particle/Interactions/Mouse/Connector */ "./node_modules/tsparticles/dist/Core/Particle/Interactions/Mouse/Connector.js");
var Utils_1 = __webpack_require__(/*! ../Utils */ "./node_modules/tsparticles/dist/Utils/index.js");
var Particles = (function () {
    function Particles(container) {
        this.container = container;
        this.array = [];
        this.interactionsEnabled = false;
        var canvasSize = this.container.canvas.size;
        this.noiseZ = 0;
        this.linksColors = {};
        this.quadTree = new Utils_1.QuadTree(new Utils_1.Rectangle(0, 0, canvasSize.width, canvasSize.height), 4);
    }
    Object.defineProperty(Particles.prototype, "count", {
        get: function () {
            return this.array.length;
        },
        enumerable: false,
        configurable: true
    });
    Particles.prototype.init = function () {
        var container = this.container;
        var options = container.options;
        var handled = false;
        this.noiseZ = 0;
        for (var id in container.plugins) {
            var plugin = container.plugins[id];
            if (plugin.particlesInitialization !== undefined) {
                handled = plugin.particlesInitialization();
            }
            if (handled) {
                break;
            }
        }
        if (!handled) {
            for (var i = this.count; i < options.particles.number.value; i++) {
                this.addParticle();
            }
        }
        this.interactionsEnabled =
            options.particles.links.enable ||
                options.particles.move.attract.enable ||
                options.particles.collisions.enable ||
                options.infection.enable;
        if (options.infection.enable) {
            for (var i = 0; i < options.infection.infections; i++) {
                var notInfected = this.array.filter(function (p) { return p.infectionStage === undefined; });
                var infected = Utils_1.Utils.itemFromArray(notInfected);
                infected.startInfection(0);
            }
        }
    };
    Particles.prototype.redraw = function () {
        this.clear();
        this.init();
        this.draw(0);
    };
    Particles.prototype.removeAt = function (index, quantity) {
        if (index >= 0 && index <= this.count) {
            for (var _i = 0, _a = this.array.splice(index, quantity !== null && quantity !== void 0 ? quantity : 1); _i < _a.length; _i++) {
                var particle = _a[_i];
                particle.destroy();
            }
        }
    };
    Particles.prototype.remove = function (particle) {
        this.removeAt(this.array.indexOf(particle));
    };
    Particles.prototype.update = function (delta) {
        var container = this.container;
        var options = container.options;
        var particlesToDelete = [];
        for (var i = 0; i < this.count; i++) {
            var particle = this.array[i];
            particle.bubble.inRange = false;
            for (var id in container.plugins) {
                var plugin = container.plugins[id];
                if (particle.destroyed) {
                    break;
                }
                if (plugin.particleUpdate) {
                    plugin.particleUpdate(particle, delta);
                }
            }
            if (!particle.destroyed) {
                var sizeOpt = particle.particlesOptions.size;
                var sizeAnim = sizeOpt.animation;
                if (sizeAnim.enable) {
                    switch (sizeAnim.destroy) {
                        case Enums_1.DestroyType.max:
                            if (particle.size.value >= sizeOpt.value * container.retina.pixelRatio) {
                                particle.destroyed = true;
                            }
                            break;
                        case Enums_1.DestroyType.min:
                            if (particle.size.value <= sizeAnim.minimumValue * container.retina.pixelRatio) {
                                particle.destroyed = true;
                            }
                            break;
                    }
                }
            }
            if (particle.destroyed) {
                particlesToDelete.push(particle);
                continue;
            }
            particle.update(i, delta);
            var pos = particle.getPosition();
            this.quadTree.insert(new Utils_1.Point(pos, particle));
        }
        for (var _i = 0, particlesToDelete_1 = particlesToDelete; _i < particlesToDelete_1.length; _i++) {
            var particle = particlesToDelete_1[_i];
            this.remove(particle);
        }
        if (container.options.interactivity.events.onDiv.enable ||
            (container.options.interactivity.events.onHover.enable && container.interactivity.mouse.position) ||
            (container.options.interactivity.events.onClick.enable && container.interactivity.mouse.clickPosition)) {
            var hoverMode = options.interactivity.events.onHover.mode;
            var clickMode = options.interactivity.events.onClick.mode;
            var divMode = options.interactivity.events.onDiv.mode;
            if (Utils_1.Utils.isInArray(Enums_1.HoverMode.grab, hoverMode)) {
                Grabber_1.Grabber.grab(container, delta);
            }
            if (Utils_1.Utils.isInArray(Enums_1.HoverMode.repulse, hoverMode) ||
                Utils_1.Utils.isInArray(Enums_1.ClickMode.repulse, clickMode) ||
                Utils_1.Utils.isInArray(Enums_1.DivMode.repulse, divMode)) {
                Repulser_1.Repulser.repulse(container, delta);
            }
            if (Utils_1.Utils.isInArray(Enums_1.HoverMode.bubble, hoverMode) || Utils_1.Utils.isInArray(Enums_1.ClickMode.bubble, clickMode)) {
                Bubbler_1.Bubbler.bubble(container, delta);
            }
            if (Utils_1.Utils.isInArray(Enums_1.HoverMode.connect, hoverMode)) {
                Connector_1.Connector.connect(container, delta);
            }
        }
        for (var _a = 0, _b = this.array; _a < _b.length; _a++) {
            var particle = _b[_a];
            Bubbler_1.Bubbler.reset(particle);
            if (this.interactionsEnabled) {
                InteractionManager_1.InteractionManager.interact(particle, container, delta);
            }
        }
    };
    Particles.prototype.draw = function (delta) {
        var container = this.container;
        container.canvas.clear();
        var canvasSize = this.container.canvas.size;
        this.quadTree = new Utils_1.QuadTree(new Utils_1.Rectangle(0, 0, canvasSize.width, canvasSize.height), 4);
        this.update(delta);
        this.noiseZ += 0.0004;
        for (var id in container.plugins) {
            var plugin = container.plugins[id];
            container.canvas.drawPlugin(plugin, delta);
        }
        for (var _i = 0, _a = this.array; _i < _a.length; _i++) {
            var p = _a[_i];
            p.draw(delta);
        }
    };
    Particles.prototype.clear = function () {
        this.array = [];
    };
    Particles.prototype.push = function (nb, mousePosition) {
        var _a;
        var container = this.container;
        var options = container.options;
        var limit = options.particles.number.limit * container.density;
        this.pushing = true;
        if (limit > 0) {
            var countToRemove = this.count + nb - limit;
            if (countToRemove > 0) {
                this.removeQuantity(countToRemove);
            }
        }
        var pos;
        if (mousePosition) {
            pos = (_a = mousePosition.position) !== null && _a !== void 0 ? _a : { x: 0, y: 0 };
        }
        for (var i = 0; i < nb; i++) {
            this.addParticle(pos);
        }
        if (!options.particles.move.enable) {
            this.container.play();
        }
        this.pushing = false;
    };
    Particles.prototype.addParticle = function (position, overrideOptions) {
        var particle = new Particle_1.Particle(this.container, position, overrideOptions);
        this.array.push(particle);
        return particle;
    };
    Particles.prototype.removeQuantity = function (quantity) {
        var container = this.container;
        var options = container.options;
        this.removeAt(0, quantity);
        if (!options.particles.move.enable) {
            this.container.play();
        }
    };
    return Particles;
}());
exports.Particles = Particles;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Core/Retina.js":
/*!******************************************************!*\
  !*** ./node_modules/tsparticles/dist/Core/Retina.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Retina = void 0;
var Retina = (function () {
    function Retina(container) {
        this.container = container;
        this.bubbleModeDistance = 0;
        this.bubbleModeSize = 0;
        this.connectModeDistance = 0;
        this.connectModeRadius = 0;
        this.grabModeDistance = 0;
        this.repulseModeDistance = 0;
        this.slowModeRadius = 0;
        this.linksDistance = 0;
        this.linksWidth = 0;
        this.moveSpeed = 0;
        this.sizeValue = 0;
        this.sizeAnimationSpeed = 0;
        this.pixelRatio = 1;
    }
    Retina.prototype.init = function () {
        var _a;
        var container = this.container;
        var options = container.options;
        if (options.detectRetina) {
            this.pixelRatio = window.devicePixelRatio;
        }
        else {
            this.pixelRatio = 1;
        }
        var ratio = this.pixelRatio;
        if (container.canvas.element) {
            var element = container.canvas.element;
            container.canvas.size.width = element.offsetWidth * ratio;
            container.canvas.size.height = element.offsetHeight * ratio;
        }
        var particles = options.particles;
        this.linksDistance = particles.links.distance * ratio;
        this.linksWidth = particles.links.width * ratio;
        this.moveSpeed = particles.move.speed * ratio;
        this.sizeValue = particles.size.value * ratio;
        this.sizeAnimationSpeed = particles.size.animation.speed * ratio;
        var modes = options.interactivity.modes;
        this.connectModeDistance = modes.connect.distance * ratio;
        this.connectModeRadius = modes.connect.radius * ratio;
        this.grabModeDistance = modes.grab.distance * ratio;
        this.repulseModeDistance = modes.repulse.distance * ratio;
        this.slowModeRadius = modes.slow.radius * ratio;
        this.bubbleModeDistance = modes.bubble.distance * ratio;
        this.bubbleModeSize = ((_a = modes.bubble.size) !== null && _a !== void 0 ? _a : this.sizeValue * 2) * ratio;
    };
    Retina.prototype.initParticle = function (particle) {
        var particlesOptions = particle.particlesOptions;
        var ratio = this.pixelRatio;
        particle.linksDistance = particlesOptions.links.distance * ratio;
        particle.linksWidth = particlesOptions.links.width * ratio;
        particle.moveSpeed = particlesOptions.move.speed * ratio;
        particle.sizeValue = particlesOptions.size.value * ratio;
        if (typeof particlesOptions.size.random !== "boolean") {
            particle.randomMinimumSize = particlesOptions.size.random.minimumValue * ratio;
        }
        particle.sizeAnimationSpeed = particlesOptions.size.animation.speed * ratio;
    };
    Retina.prototype.reset = function () {
    };
    return Retina;
}());
exports.Retina = Retina;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Enums/Directions/MoveDirection.js":
/*!*************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Enums/Directions/MoveDirection.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.MoveDirection = void 0;
var MoveDirection;
(function (MoveDirection) {
    MoveDirection["bottom"] = "bottom";
    MoveDirection["bottomLeft"] = "bottom-left";
    MoveDirection["bottomRight"] = "bottom-right";
    MoveDirection["left"] = "left";
    MoveDirection["none"] = "none";
    MoveDirection["right"] = "right";
    MoveDirection["top"] = "top";
    MoveDirection["topLeft"] = "top-left";
    MoveDirection["topRight"] = "top-right";
})(MoveDirection = exports.MoveDirection || (exports.MoveDirection = {}));


/***/ }),

/***/ "./node_modules/tsparticles/dist/Enums/Directions/RotateDirection.js":
/*!***************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Enums/Directions/RotateDirection.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.RotateDirection = void 0;
var RotateDirection;
(function (RotateDirection) {
    RotateDirection["clockwise"] = "clockwise";
    RotateDirection["counterClockwise"] = "counter-clockwise";
    RotateDirection["random"] = "random";
})(RotateDirection = exports.RotateDirection || (exports.RotateDirection = {}));


/***/ }),

/***/ "./node_modules/tsparticles/dist/Enums/Directions/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Enums/Directions/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(/*! ./MoveDirection */ "./node_modules/tsparticles/dist/Enums/Directions/MoveDirection.js"), exports);
__exportStar(__webpack_require__(/*! ./RotateDirection */ "./node_modules/tsparticles/dist/Enums/Directions/RotateDirection.js"), exports);


/***/ }),

/***/ "./node_modules/tsparticles/dist/Enums/InteractivityDetect.js":
/*!********************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Enums/InteractivityDetect.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.InteractivityDetect = void 0;
var InteractivityDetect;
(function (InteractivityDetect) {
    InteractivityDetect["canvas"] = "canvas";
    InteractivityDetect["parent"] = "parent";
    InteractivityDetect["window"] = "window";
})(InteractivityDetect = exports.InteractivityDetect || (exports.InteractivityDetect = {}));


/***/ }),

/***/ "./node_modules/tsparticles/dist/Enums/Modes/ClickMode.js":
/*!****************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Enums/Modes/ClickMode.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ClickMode = void 0;
var ClickMode;
(function (ClickMode) {
    ClickMode["bubble"] = "bubble";
    ClickMode["push"] = "push";
    ClickMode["remove"] = "remove";
    ClickMode["repulse"] = "repulse";
    ClickMode["pause"] = "pause";
})(ClickMode = exports.ClickMode || (exports.ClickMode = {}));


/***/ }),

/***/ "./node_modules/tsparticles/dist/Enums/Modes/CollisionMode.js":
/*!********************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Enums/Modes/CollisionMode.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.CollisionMode = void 0;
var CollisionMode;
(function (CollisionMode) {
    CollisionMode["bounce"] = "bounce";
})(CollisionMode = exports.CollisionMode || (exports.CollisionMode = {}));


/***/ }),

/***/ "./node_modules/tsparticles/dist/Enums/Modes/DivMode.js":
/*!**************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Enums/Modes/DivMode.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DivMode = void 0;
var DivMode;
(function (DivMode) {
    DivMode["repulse"] = "repulse";
})(DivMode = exports.DivMode || (exports.DivMode = {}));


/***/ }),

/***/ "./node_modules/tsparticles/dist/Enums/Modes/HoverMode.js":
/*!****************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Enums/Modes/HoverMode.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.HoverMode = void 0;
var HoverMode;
(function (HoverMode) {
    HoverMode["bubble"] = "bubble";
    HoverMode["connect"] = "connect";
    HoverMode["grab"] = "grab";
    HoverMode["repulse"] = "repulse";
    HoverMode["slow"] = "slow";
})(HoverMode = exports.HoverMode || (exports.HoverMode = {}));


/***/ }),

/***/ "./node_modules/tsparticles/dist/Enums/Modes/OutMode.js":
/*!**************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Enums/Modes/OutMode.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.OutMode = void 0;
var OutMode;
(function (OutMode) {
    OutMode["bounce"] = "bounce";
    OutMode["bounceHorizontal"] = "bounce-horizontal";
    OutMode["bounceVertical"] = "bounce-vertical";
    OutMode["out"] = "out";
    OutMode["destroy"] = "destroy";
})(OutMode = exports.OutMode || (exports.OutMode = {}));


/***/ }),

/***/ "./node_modules/tsparticles/dist/Enums/Modes/SizeMode.js":
/*!***************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Enums/Modes/SizeMode.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.SizeMode = void 0;
var SizeMode;
(function (SizeMode) {
    SizeMode["precise"] = "precise";
    SizeMode["percent"] = "percent";
})(SizeMode = exports.SizeMode || (exports.SizeMode = {}));


/***/ }),

/***/ "./node_modules/tsparticles/dist/Enums/Modes/index.js":
/*!************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Enums/Modes/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(/*! ./ClickMode */ "./node_modules/tsparticles/dist/Enums/Modes/ClickMode.js"), exports);
__exportStar(__webpack_require__(/*! ./DivMode */ "./node_modules/tsparticles/dist/Enums/Modes/DivMode.js"), exports);
__exportStar(__webpack_require__(/*! ./HoverMode */ "./node_modules/tsparticles/dist/Enums/Modes/HoverMode.js"), exports);
__exportStar(__webpack_require__(/*! ./CollisionMode */ "./node_modules/tsparticles/dist/Enums/Modes/CollisionMode.js"), exports);
__exportStar(__webpack_require__(/*! ./OutMode */ "./node_modules/tsparticles/dist/Enums/Modes/OutMode.js"), exports);
__exportStar(__webpack_require__(/*! ./SizeMode */ "./node_modules/tsparticles/dist/Enums/Modes/SizeMode.js"), exports);


/***/ }),

/***/ "./node_modules/tsparticles/dist/Enums/MoveDirection.js":
/*!**************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Enums/MoveDirection.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.MoveDirection = void 0;
var Directions_1 = __webpack_require__(/*! ./Directions */ "./node_modules/tsparticles/dist/Enums/Directions/index.js");
Object.defineProperty(exports, "MoveDirection", { enumerable: true, get: function () { return Directions_1.MoveDirection; } });


/***/ }),

/***/ "./node_modules/tsparticles/dist/Enums/OutMode.js":
/*!********************************************************!*\
  !*** ./node_modules/tsparticles/dist/Enums/OutMode.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.OutMode = void 0;
var Modes_1 = __webpack_require__(/*! ./Modes */ "./node_modules/tsparticles/dist/Enums/Modes/index.js");
Object.defineProperty(exports, "OutMode", { enumerable: true, get: function () { return Modes_1.OutMode; } });


/***/ }),

/***/ "./node_modules/tsparticles/dist/Enums/PolygonMaskInlineArrangement.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Enums/PolygonMaskInlineArrangement.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.PolygonMaskInlineArrangement = void 0;
var Enums_1 = __webpack_require__(/*! ../Plugins/PolygonMask/Enums */ "./node_modules/tsparticles/dist/Plugins/PolygonMask/Enums/index.js");
Object.defineProperty(exports, "PolygonMaskInlineArrangement", { enumerable: true, get: function () { return Enums_1.InlineArrangement; } });


/***/ }),

/***/ "./node_modules/tsparticles/dist/Enums/PolygonMaskMoveType.js":
/*!********************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Enums/PolygonMaskMoveType.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.PolygonMaskMoveType = void 0;
var Enums_1 = __webpack_require__(/*! ../Plugins/PolygonMask/Enums */ "./node_modules/tsparticles/dist/Plugins/PolygonMask/Enums/index.js");
Object.defineProperty(exports, "PolygonMaskMoveType", { enumerable: true, get: function () { return Enums_1.MoveType; } });


/***/ }),

/***/ "./node_modules/tsparticles/dist/Enums/PolygonMaskType.js":
/*!****************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Enums/PolygonMaskType.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.PolygonMaskType = void 0;
var Enums_1 = __webpack_require__(/*! ../Plugins/PolygonMask/Enums */ "./node_modules/tsparticles/dist/Plugins/PolygonMask/Enums/index.js");
Object.defineProperty(exports, "PolygonMaskType", { enumerable: true, get: function () { return Enums_1.Type; } });


/***/ }),

/***/ "./node_modules/tsparticles/dist/Enums/ProcessBubbleType.js":
/*!******************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Enums/ProcessBubbleType.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessBubbleType = void 0;
var Types_1 = __webpack_require__(/*! ./Types */ "./node_modules/tsparticles/dist/Enums/Types/index.js");
Object.defineProperty(exports, "ProcessBubbleType", { enumerable: true, get: function () { return Types_1.ProcessBubbleType; } });


/***/ }),

/***/ "./node_modules/tsparticles/dist/Enums/RotateDirection.js":
/*!****************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Enums/RotateDirection.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.RotateDirection = void 0;
var Directions_1 = __webpack_require__(/*! ./Directions */ "./node_modules/tsparticles/dist/Enums/Directions/index.js");
Object.defineProperty(exports, "RotateDirection", { enumerable: true, get: function () { return Directions_1.RotateDirection; } });


/***/ }),

/***/ "./node_modules/tsparticles/dist/Enums/ShapeType.js":
/*!**********************************************************!*\
  !*** ./node_modules/tsparticles/dist/Enums/ShapeType.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ShapeType = void 0;
var Types_1 = __webpack_require__(/*! ./Types */ "./node_modules/tsparticles/dist/Enums/Types/index.js");
Object.defineProperty(exports, "ShapeType", { enumerable: true, get: function () { return Types_1.ShapeType; } });


/***/ }),

/***/ "./node_modules/tsparticles/dist/Enums/Statuses/OpacityAnimationStatus.js":
/*!********************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Enums/Statuses/OpacityAnimationStatus.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.OpacityAnimationStatus = void 0;
var OpacityAnimationStatus;
(function (OpacityAnimationStatus) {
    OpacityAnimationStatus[OpacityAnimationStatus["increasing"] = 0] = "increasing";
    OpacityAnimationStatus[OpacityAnimationStatus["decreasing"] = 1] = "decreasing";
})(OpacityAnimationStatus = exports.OpacityAnimationStatus || (exports.OpacityAnimationStatus = {}));


/***/ }),

/***/ "./node_modules/tsparticles/dist/Enums/Statuses/SizeAnimationStatus.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Enums/Statuses/SizeAnimationStatus.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.SizeAnimationStatus = void 0;
var SizeAnimationStatus;
(function (SizeAnimationStatus) {
    SizeAnimationStatus[SizeAnimationStatus["increasing"] = 0] = "increasing";
    SizeAnimationStatus[SizeAnimationStatus["decreasing"] = 1] = "decreasing";
})(SizeAnimationStatus = exports.SizeAnimationStatus || (exports.SizeAnimationStatus = {}));


/***/ }),

/***/ "./node_modules/tsparticles/dist/Enums/Statuses/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Enums/Statuses/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(/*! ./SizeAnimationStatus */ "./node_modules/tsparticles/dist/Enums/Statuses/SizeAnimationStatus.js"), exports);
__exportStar(__webpack_require__(/*! ./OpacityAnimationStatus */ "./node_modules/tsparticles/dist/Enums/Statuses/OpacityAnimationStatus.js"), exports);


/***/ }),

/***/ "./node_modules/tsparticles/dist/Enums/Types/DestroyType.js":
/*!******************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Enums/Types/DestroyType.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DestroyType = void 0;
var DestroyType;
(function (DestroyType) {
    DestroyType["none"] = "none";
    DestroyType["max"] = "max";
    DestroyType["min"] = "min";
})(DestroyType = exports.DestroyType || (exports.DestroyType = {}));


/***/ }),

/***/ "./node_modules/tsparticles/dist/Enums/Types/ProcessBubbleType.js":
/*!************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Enums/Types/ProcessBubbleType.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessBubbleType = void 0;
var ProcessBubbleType;
(function (ProcessBubbleType) {
    ProcessBubbleType["color"] = "color";
    ProcessBubbleType["opacity"] = "opacity";
    ProcessBubbleType["size"] = "size";
})(ProcessBubbleType = exports.ProcessBubbleType || (exports.ProcessBubbleType = {}));


/***/ }),

/***/ "./node_modules/tsparticles/dist/Enums/Types/ShapeType.js":
/*!****************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Enums/Types/ShapeType.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ShapeType = void 0;
var ShapeType;
(function (ShapeType) {
    ShapeType["char"] = "char";
    ShapeType["character"] = "character";
    ShapeType["circle"] = "circle";
    ShapeType["edge"] = "edge";
    ShapeType["image"] = "image";
    ShapeType["images"] = "images";
    ShapeType["line"] = "line";
    ShapeType["polygon"] = "polygon";
    ShapeType["square"] = "square";
    ShapeType["star"] = "star";
    ShapeType["triangle"] = "triangle";
})(ShapeType = exports.ShapeType || (exports.ShapeType = {}));


/***/ }),

/***/ "./node_modules/tsparticles/dist/Enums/Types/StartValueType.js":
/*!*********************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Enums/Types/StartValueType.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.StartValueType = void 0;
var StartValueType;
(function (StartValueType) {
    StartValueType["max"] = "max";
    StartValueType["min"] = "min";
})(StartValueType = exports.StartValueType || (exports.StartValueType = {}));


/***/ }),

/***/ "./node_modules/tsparticles/dist/Enums/Types/index.js":
/*!************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Enums/Types/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(/*! ./DestroyType */ "./node_modules/tsparticles/dist/Enums/Types/DestroyType.js"), exports);
__exportStar(__webpack_require__(/*! ./ProcessBubbleType */ "./node_modules/tsparticles/dist/Enums/Types/ProcessBubbleType.js"), exports);
__exportStar(__webpack_require__(/*! ./ShapeType */ "./node_modules/tsparticles/dist/Enums/Types/ShapeType.js"), exports);
__exportStar(__webpack_require__(/*! ./StartValueType */ "./node_modules/tsparticles/dist/Enums/Types/StartValueType.js"), exports);


/***/ }),

/***/ "./node_modules/tsparticles/dist/Enums/index.js":
/*!******************************************************!*\
  !*** ./node_modules/tsparticles/dist/Enums/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(/*! ./Directions */ "./node_modules/tsparticles/dist/Enums/Directions/index.js"), exports);
__exportStar(__webpack_require__(/*! ./Modes */ "./node_modules/tsparticles/dist/Enums/Modes/index.js"), exports);
__exportStar(__webpack_require__(/*! ./Statuses */ "./node_modules/tsparticles/dist/Enums/Statuses/index.js"), exports);
__exportStar(__webpack_require__(/*! ./Types */ "./node_modules/tsparticles/dist/Enums/Types/index.js"), exports);
__exportStar(__webpack_require__(/*! ./InteractivityDetect */ "./node_modules/tsparticles/dist/Enums/InteractivityDetect.js"), exports);


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Background/Background.js":
/*!********************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Background/Background.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Background = void 0;
var OptionsColor_1 = __webpack_require__(/*! ../OptionsColor */ "./node_modules/tsparticles/dist/Options/Classes/OptionsColor.js");
var Background = (function () {
    function Background() {
    }
    Background.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.color !== undefined) {
                this.color = OptionsColor_1.OptionsColor.create(this.color, data.color);
            }
            if (data.image !== undefined) {
                this.image = data.image;
            }
            if (data.position !== undefined) {
                this.position = data.position;
            }
            if (data.repeat !== undefined) {
                this.repeat = data.repeat;
            }
            if (data.size !== undefined) {
                this.size = data.size;
            }
            if (data.opacity !== undefined) {
                this.opacity = data.opacity;
            }
        }
    };
    return Background;
}());
exports.Background = Background;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/BackgroundMask/BackgroundMask.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/BackgroundMask/BackgroundMask.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.BackgroundMask = void 0;
var BackgroundMaskCover_1 = __webpack_require__(/*! ./BackgroundMaskCover */ "./node_modules/tsparticles/dist/Options/Classes/BackgroundMask/BackgroundMaskCover.js");
var BackgroundMask = (function () {
    function BackgroundMask() {
        this.cover = new BackgroundMaskCover_1.BackgroundMaskCover();
        this.enable = false;
    }
    BackgroundMask.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.cover !== undefined) {
                var cover = data.cover;
                var color = (typeof data.cover === "string" ? { color: data.cover } : data.cover);
                this.cover.load(cover.color !== undefined ? cover : { color: color });
            }
            if (data.enable !== undefined) {
                this.enable = data.enable;
            }
        }
    };
    return BackgroundMask;
}());
exports.BackgroundMask = BackgroundMask;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/BackgroundMask/BackgroundMaskCover.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/BackgroundMask/BackgroundMaskCover.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.BackgroundMaskCover = void 0;
var OptionsColor_1 = __webpack_require__(/*! ../OptionsColor */ "./node_modules/tsparticles/dist/Options/Classes/OptionsColor.js");
var BackgroundMaskCover = (function () {
    function BackgroundMaskCover() {
        this.color = new OptionsColor_1.OptionsColor();
        this.opacity = 1;
    }
    BackgroundMaskCover.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.color !== undefined) {
                this.color = OptionsColor_1.OptionsColor.create(this.color, data.color);
            }
            if (data.opacity !== undefined) {
                this.opacity = data.opacity;
            }
        }
    };
    return BackgroundMaskCover;
}());
exports.BackgroundMaskCover = BackgroundMaskCover;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Infection/Infection.js":
/*!******************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Infection/Infection.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Infection = void 0;
var InfectionStage_1 = __webpack_require__(/*! ./InfectionStage */ "./node_modules/tsparticles/dist/Options/Classes/Infection/InfectionStage.js");
var Infection = (function () {
    function Infection() {
        this.cure = false;
        this.delay = 0;
        this.enable = false;
        this.infections = 0;
        this.stages = [];
    }
    Infection.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.cure !== undefined) {
                this.cure = data.cure;
            }
            if (data.delay !== undefined) {
                this.delay = data.delay;
            }
            if (data.enable !== undefined) {
                this.enable = data.enable;
            }
            if (data.infections !== undefined) {
                this.infections = data.infections;
            }
            if (data.stages !== undefined) {
                this.stages = data.stages.map(function (t) {
                    var s = new InfectionStage_1.InfectionStage();
                    s.load(t);
                    return s;
                });
            }
        }
    };
    return Infection;
}());
exports.Infection = Infection;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Infection/InfectionStage.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Infection/InfectionStage.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.InfectionStage = void 0;
var OptionsColor_1 = __webpack_require__(/*! ../OptionsColor */ "./node_modules/tsparticles/dist/Options/Classes/OptionsColor.js");
var InfectionStage = (function () {
    function InfectionStage() {
        this.color = new OptionsColor_1.OptionsColor();
        this.color.value = "#ff0000";
        this.radius = 0;
        this.rate = 1;
    }
    InfectionStage.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.color !== undefined) {
                this.color = OptionsColor_1.OptionsColor.create(this.color, data.color);
            }
            this.duration = data.duration;
            this.infectedStage = data.infectedStage;
            if (data.radius !== undefined) {
                this.radius = data.radius;
            }
            if (data.rate !== undefined) {
                this.rate = data.rate;
            }
        }
    };
    return InfectionStage;
}());
exports.InfectionStage = InfectionStage;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Interactivity/Events/ClickEvent.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Interactivity/Events/ClickEvent.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ClickEvent = void 0;
var ClickEvent = (function () {
    function ClickEvent() {
        this.enable = false;
        this.mode = [];
    }
    ClickEvent.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.enable !== undefined) {
                this.enable = data.enable;
            }
            if (data.mode !== undefined) {
                this.mode = data.mode;
            }
        }
    };
    return ClickEvent;
}());
exports.ClickEvent = ClickEvent;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Interactivity/Events/DivEvent.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Interactivity/Events/DivEvent.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DivEvent = void 0;
var DivEvent = (function () {
    function DivEvent() {
        this.elementId = "";
        this.enable = false;
        this.mode = [];
    }
    Object.defineProperty(DivEvent.prototype, "el", {
        get: function () {
            return this.elementId;
        },
        set: function (value) {
            this.elementId = value;
        },
        enumerable: false,
        configurable: true
    });
    DivEvent.prototype.load = function (data) {
        var _a;
        if (data !== undefined) {
            var elementId = (_a = data.elementId) !== null && _a !== void 0 ? _a : data.el;
            if (elementId !== undefined) {
                this.elementId = elementId;
            }
            if (data.enable !== undefined) {
                this.enable = data.enable;
            }
            if (data.mode !== undefined) {
                this.mode = data.mode;
            }
        }
    };
    return DivEvent;
}());
exports.DivEvent = DivEvent;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Interactivity/Events/Events.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Interactivity/Events/Events.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Events = void 0;
var ClickEvent_1 = __webpack_require__(/*! ./ClickEvent */ "./node_modules/tsparticles/dist/Options/Classes/Interactivity/Events/ClickEvent.js");
var DivEvent_1 = __webpack_require__(/*! ./DivEvent */ "./node_modules/tsparticles/dist/Options/Classes/Interactivity/Events/DivEvent.js");
var HoverEvent_1 = __webpack_require__(/*! ./HoverEvent */ "./node_modules/tsparticles/dist/Options/Classes/Interactivity/Events/HoverEvent.js");
var Events = (function () {
    function Events() {
        this.onClick = new ClickEvent_1.ClickEvent();
        this.onDiv = new DivEvent_1.DivEvent();
        this.onHover = new HoverEvent_1.HoverEvent();
        this.resize = true;
    }
    Object.defineProperty(Events.prototype, "onclick", {
        get: function () {
            return this.onClick;
        },
        set: function (value) {
            this.onClick = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Events.prototype, "ondiv", {
        get: function () {
            return this.onDiv;
        },
        set: function (value) {
            this.onDiv = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Events.prototype, "onhover", {
        get: function () {
            return this.onHover;
        },
        set: function (value) {
            this.onHover = value;
        },
        enumerable: false,
        configurable: true
    });
    Events.prototype.load = function (data) {
        var _a, _b, _c;
        if (data !== undefined) {
            this.onClick.load((_a = data.onClick) !== null && _a !== void 0 ? _a : data.onclick);
            this.onDiv.load((_b = data.onDiv) !== null && _b !== void 0 ? _b : data.ondiv);
            this.onHover.load((_c = data.onHover) !== null && _c !== void 0 ? _c : data.onhover);
            if (data.resize !== undefined) {
                this.resize = data.resize;
            }
        }
    };
    return Events;
}());
exports.Events = Events;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Interactivity/Events/HoverEvent.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Interactivity/Events/HoverEvent.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.HoverEvent = void 0;
var Parallax_1 = __webpack_require__(/*! ./Parallax */ "./node_modules/tsparticles/dist/Options/Classes/Interactivity/Events/Parallax.js");
var HoverEvent = (function () {
    function HoverEvent() {
        this.enable = false;
        this.mode = [];
        this.parallax = new Parallax_1.Parallax();
    }
    HoverEvent.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.enable !== undefined) {
                this.enable = data.enable;
            }
            if (data.mode !== undefined) {
                this.mode = data.mode;
            }
            this.parallax.load(data.parallax);
        }
    };
    return HoverEvent;
}());
exports.HoverEvent = HoverEvent;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Interactivity/Events/Parallax.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Interactivity/Events/Parallax.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Parallax = void 0;
var Parallax = (function () {
    function Parallax() {
        this.enable = false;
        this.force = 2;
        this.smooth = 10;
    }
    Parallax.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.enable !== undefined) {
                this.enable = data.enable;
            }
            if (data.force !== undefined) {
                this.force = data.force;
            }
            if (data.smooth !== undefined) {
                this.smooth = data.smooth;
            }
        }
    };
    return Parallax;
}());
exports.Parallax = Parallax;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Interactivity/Interactivity.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Interactivity/Interactivity.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Interactivity = void 0;
var Enums_1 = __webpack_require__(/*! ../../../Enums */ "./node_modules/tsparticles/dist/Enums/index.js");
var Events_1 = __webpack_require__(/*! ./Events/Events */ "./node_modules/tsparticles/dist/Options/Classes/Interactivity/Events/Events.js");
var Modes_1 = __webpack_require__(/*! ./Modes/Modes */ "./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/Modes.js");
var Interactivity = (function () {
    function Interactivity() {
        this.detectsOn = Enums_1.InteractivityDetect.canvas;
        this.events = new Events_1.Events();
        this.modes = new Modes_1.Modes();
    }
    Object.defineProperty(Interactivity.prototype, "detect_on", {
        get: function () {
            return this.detectsOn;
        },
        set: function (value) {
            this.detectsOn = value;
        },
        enumerable: false,
        configurable: true
    });
    Interactivity.prototype.load = function (data) {
        var _a, _b, _c;
        if (data !== undefined) {
            var detectsOn = (_a = data.detectsOn) !== null && _a !== void 0 ? _a : data.detect_on;
            if (detectsOn !== undefined) {
                this.detectsOn = detectsOn;
            }
            this.events.load(data.events);
            this.modes.load(data.modes);
            if (((_c = (_b = data.modes) === null || _b === void 0 ? void 0 : _b.slow) === null || _c === void 0 ? void 0 : _c.active) === true) {
                if (this.events.onHover.mode instanceof Array) {
                    if (this.events.onHover.mode.indexOf(Enums_1.HoverMode.slow) < 0) {
                        this.events.onHover.mode.push(Enums_1.HoverMode.slow);
                    }
                }
                else if (this.events.onHover.mode !== Enums_1.HoverMode.slow) {
                    this.events.onHover.mode = [this.events.onHover.mode, Enums_1.HoverMode.slow];
                }
            }
        }
    };
    return Interactivity;
}());
exports.Interactivity = Interactivity;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/Bubble.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/Bubble.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Bubble = void 0;
var OptionsColor_1 = __webpack_require__(/*! ../../OptionsColor */ "./node_modules/tsparticles/dist/Options/Classes/OptionsColor.js");
var Bubble = (function () {
    function Bubble() {
        this.distance = 200;
        this.duration = 0.4;
    }
    Bubble.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.distance !== undefined) {
                this.distance = data.distance;
            }
            if (data.duration !== undefined) {
                this.duration = data.duration;
            }
            if (data.opacity !== undefined) {
                this.opacity = data.opacity;
            }
            if (data.color !== undefined) {
                if (data.color instanceof Array) {
                    this.color = data.color.map(function (s) { return OptionsColor_1.OptionsColor.create(undefined, s); });
                }
                else {
                    if (this.color instanceof Array) {
                        this.color = new OptionsColor_1.OptionsColor();
                    }
                    this.color = OptionsColor_1.OptionsColor.create(this.color, data.color);
                }
            }
            if (data.size !== undefined) {
                this.size = data.size;
            }
        }
    };
    return Bubble;
}());
exports.Bubble = Bubble;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/Connect.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/Connect.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Connect = void 0;
var ConnectLinks_1 = __webpack_require__(/*! ./ConnectLinks */ "./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/ConnectLinks.js");
var Connect = (function () {
    function Connect() {
        this.distance = 80;
        this.links = new ConnectLinks_1.ConnectLinks();
        this.radius = 60;
    }
    Object.defineProperty(Connect.prototype, "line_linked", {
        get: function () {
            return this.links;
        },
        set: function (value) {
            this.links = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Connect.prototype, "lineLinked", {
        get: function () {
            return this.links;
        },
        set: function (value) {
            this.links = value;
        },
        enumerable: false,
        configurable: true
    });
    Connect.prototype.load = function (data) {
        var _a, _b;
        if (data !== undefined) {
            if (data.distance !== undefined) {
                this.distance = data.distance;
            }
            this.links.load((_b = (_a = data.links) !== null && _a !== void 0 ? _a : data.lineLinked) !== null && _b !== void 0 ? _b : data.line_linked);
            if (data.radius !== undefined) {
                this.radius = data.radius;
            }
        }
    };
    return Connect;
}());
exports.Connect = Connect;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/ConnectLinks.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/ConnectLinks.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnectLinks = void 0;
var ConnectLinks = (function () {
    function ConnectLinks() {
        this.opacity = 0.5;
    }
    ConnectLinks.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.opacity !== undefined) {
                this.opacity = data.opacity;
            }
        }
    };
    return ConnectLinks;
}());
exports.ConnectLinks = ConnectLinks;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/Grab.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/Grab.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Grab = void 0;
var GrabLinks_1 = __webpack_require__(/*! ./GrabLinks */ "./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/GrabLinks.js");
var Grab = (function () {
    function Grab() {
        this.distance = 100;
        this.links = new GrabLinks_1.GrabLinks();
    }
    Object.defineProperty(Grab.prototype, "line_linked", {
        get: function () {
            return this.links;
        },
        set: function (value) {
            this.links = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Grab.prototype, "lineLinked", {
        get: function () {
            return this.links;
        },
        set: function (value) {
            this.links = value;
        },
        enumerable: false,
        configurable: true
    });
    Grab.prototype.load = function (data) {
        var _a, _b;
        if (data !== undefined) {
            if (data.distance !== undefined) {
                this.distance = data.distance;
            }
            this.links.load((_b = (_a = data.links) !== null && _a !== void 0 ? _a : data.lineLinked) !== null && _b !== void 0 ? _b : data.line_linked);
        }
    };
    return Grab;
}());
exports.Grab = Grab;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/GrabLinks.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/GrabLinks.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.GrabLinks = void 0;
var OptionsColor_1 = __webpack_require__(/*! ../../OptionsColor */ "./node_modules/tsparticles/dist/Options/Classes/OptionsColor.js");
var GrabLinks = (function () {
    function GrabLinks() {
        this.opacity = 1;
    }
    GrabLinks.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.opacity !== undefined) {
                this.opacity = data.opacity;
            }
            if (data.color !== undefined) {
                this.color = OptionsColor_1.OptionsColor.create(this.color, data.color);
            }
        }
    };
    return GrabLinks;
}());
exports.GrabLinks = GrabLinks;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/Modes.js":
/*!************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/Modes.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Modes = void 0;
var Bubble_1 = __webpack_require__(/*! ./Bubble */ "./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/Bubble.js");
var Connect_1 = __webpack_require__(/*! ./Connect */ "./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/Connect.js");
var Grab_1 = __webpack_require__(/*! ./Grab */ "./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/Grab.js");
var Remove_1 = __webpack_require__(/*! ./Remove */ "./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/Remove.js");
var Push_1 = __webpack_require__(/*! ./Push */ "./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/Push.js");
var Repulse_1 = __webpack_require__(/*! ./Repulse */ "./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/Repulse.js");
var Slow_1 = __webpack_require__(/*! ./Slow */ "./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/Slow.js");
var Modes = (function () {
    function Modes() {
        this.bubble = new Bubble_1.Bubble();
        this.connect = new Connect_1.Connect();
        this.grab = new Grab_1.Grab();
        this.push = new Push_1.Push();
        this.remove = new Remove_1.Remove();
        this.repulse = new Repulse_1.Repulse();
        this.slow = new Slow_1.Slow();
    }
    Modes.prototype.load = function (data) {
        if (data !== undefined) {
            this.bubble.load(data.bubble);
            this.connect.load(data.connect);
            this.grab.load(data.grab);
            this.push.load(data.push);
            this.remove.load(data.remove);
            this.repulse.load(data.repulse);
            this.slow.load(data.slow);
        }
    };
    return Modes;
}());
exports.Modes = Modes;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/Push.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/Push.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Push = void 0;
var Push = (function () {
    function Push() {
        this.quantity = 4;
    }
    Object.defineProperty(Push.prototype, "particles_nb", {
        get: function () {
            return this.quantity;
        },
        set: function (value) {
            this.quantity = value;
        },
        enumerable: false,
        configurable: true
    });
    Push.prototype.load = function (data) {
        var _a;
        if (data !== undefined) {
            var quantity = (_a = data.quantity) !== null && _a !== void 0 ? _a : data.particles_nb;
            if (quantity !== undefined) {
                this.quantity = quantity;
            }
        }
    };
    return Push;
}());
exports.Push = Push;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/Remove.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/Remove.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Remove = void 0;
var Remove = (function () {
    function Remove() {
        this.quantity = 2;
    }
    Object.defineProperty(Remove.prototype, "particles_nb", {
        get: function () {
            return this.quantity;
        },
        set: function (value) {
            this.quantity = value;
        },
        enumerable: false,
        configurable: true
    });
    Remove.prototype.load = function (data) {
        var _a;
        if (data !== undefined) {
            var quantity = (_a = data.quantity) !== null && _a !== void 0 ? _a : data.particles_nb;
            if (quantity !== undefined) {
                this.quantity = quantity;
            }
        }
    };
    return Remove;
}());
exports.Remove = Remove;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/Repulse.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/Repulse.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Repulse = void 0;
var Repulse = (function () {
    function Repulse() {
        this.distance = 200;
        this.duration = 0.4;
        this.speed = 1;
    }
    Repulse.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.distance !== undefined) {
                this.distance = data.distance;
            }
            if (data.duration !== undefined) {
                this.duration = data.duration;
            }
            if (data.speed !== undefined) {
                this.speed = data.speed;
            }
        }
    };
    return Repulse;
}());
exports.Repulse = Repulse;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/Slow.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/Slow.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Slow = void 0;
var Slow = (function () {
    function Slow() {
        this.factor = 3;
        this.radius = 200;
    }
    Object.defineProperty(Slow.prototype, "active", {
        get: function () {
            return false;
        },
        set: function (_value) {
        },
        enumerable: false,
        configurable: true
    });
    Slow.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.factor !== undefined) {
                this.factor = data.factor;
            }
            if (data.radius !== undefined) {
                this.radius = data.radius;
            }
        }
    };
    return Slow;
}());
exports.Slow = Slow;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Options.js":
/*!******************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Options.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Options = void 0;
var Interactivity_1 = __webpack_require__(/*! ./Interactivity/Interactivity */ "./node_modules/tsparticles/dist/Options/Classes/Interactivity/Interactivity.js");
var Particles_1 = __webpack_require__(/*! ./Particles/Particles */ "./node_modules/tsparticles/dist/Options/Classes/Particles/Particles.js");
var BackgroundMask_1 = __webpack_require__(/*! ./BackgroundMask/BackgroundMask */ "./node_modules/tsparticles/dist/Options/Classes/BackgroundMask/BackgroundMask.js");
var Background_1 = __webpack_require__(/*! ./Background/Background */ "./node_modules/tsparticles/dist/Options/Classes/Background/Background.js");
var Infection_1 = __webpack_require__(/*! ./Infection/Infection */ "./node_modules/tsparticles/dist/Options/Classes/Infection/Infection.js");
var Utils_1 = __webpack_require__(/*! ../../Utils */ "./node_modules/tsparticles/dist/Utils/index.js");
var Options = (function () {
    function Options() {
        this.background = new Background_1.Background();
        this.backgroundMask = new BackgroundMask_1.BackgroundMask();
        this.detectRetina = false;
        this.fpsLimit = 30;
        this.infection = new Infection_1.Infection();
        this.interactivity = new Interactivity_1.Interactivity();
        this.particles = new Particles_1.Particles();
        this.pauseOnBlur = true;
    }
    Object.defineProperty(Options.prototype, "fps_limit", {
        get: function () {
            return this.fpsLimit;
        },
        set: function (value) {
            this.fpsLimit = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Options.prototype, "retina_detect", {
        get: function () {
            return this.detectRetina;
        },
        set: function (value) {
            this.detectRetina = value;
        },
        enumerable: false,
        configurable: true
    });
    Options.prototype.load = function (data) {
        var _a, _b;
        if (data !== undefined) {
            if (data.preset !== undefined) {
                if (data.preset instanceof Array) {
                    for (var _i = 0, _c = data.preset; _i < _c.length; _i++) {
                        var preset = _c[_i];
                        this.importPreset(preset);
                    }
                }
                else {
                    this.importPreset(data.preset);
                }
            }
            if (data.background !== undefined) {
                this.background.load(data.background);
            }
            var detectRetina = (_a = data.detectRetina) !== null && _a !== void 0 ? _a : data.retina_detect;
            if (detectRetina !== undefined) {
                this.detectRetina = detectRetina;
            }
            var fpsLimit = (_b = data.fpsLimit) !== null && _b !== void 0 ? _b : data.fps_limit;
            if (fpsLimit !== undefined) {
                this.fpsLimit = fpsLimit;
            }
            if (data.pauseOnBlur !== undefined) {
                this.pauseOnBlur = data.pauseOnBlur;
            }
            this.particles.load(data.particles);
            this.infection.load(data.infection);
            this.interactivity.load(data.interactivity);
            this.backgroundMask.load(data.backgroundMask);
            Utils_1.Plugins.loadOptions(this, data);
        }
    };
    Options.prototype.importPreset = function (preset) {
        var presetOptions = Utils_1.Plugins.getPreset(preset);
        if (presetOptions !== undefined) {
            this.load(presetOptions);
        }
    };
    return Options;
}());
exports.Options = Options;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/OptionsColor.js":
/*!***********************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/OptionsColor.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.OptionsColor = void 0;
var OptionsColor = (function () {
    function OptionsColor() {
        this.value = "#fff";
    }
    OptionsColor.create = function (source, data) {
        var color = source !== null && source !== void 0 ? source : new OptionsColor();
        if (data !== undefined) {
            color.load(typeof data === "string" ? { value: data } : data);
        }
        return color;
    };
    OptionsColor.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.value !== undefined) {
                this.value = data.value;
            }
        }
    };
    return OptionsColor;
}());
exports.OptionsColor = OptionsColor;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Particles/AnimatableColor.js":
/*!************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Particles/AnimatableColor.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnimatableColor = void 0;
var OptionsColor_1 = __webpack_require__(/*! ../OptionsColor */ "./node_modules/tsparticles/dist/Options/Classes/OptionsColor.js");
var ColorAnimation_1 = __webpack_require__(/*! ./ColorAnimation */ "./node_modules/tsparticles/dist/Options/Classes/Particles/ColorAnimation.js");
var AnimatableColor = (function (_super) {
    __extends(AnimatableColor, _super);
    function AnimatableColor() {
        var _this = _super.call(this) || this;
        _this.animation = new ColorAnimation_1.ColorAnimation();
        return _this;
    }
    AnimatableColor.create = function (source, data) {
        var color = source !== null && source !== void 0 ? source : new AnimatableColor();
        if (data !== undefined) {
            color.load(typeof data === "string" ? { value: data } : data);
        }
        return color;
    };
    AnimatableColor.prototype.load = function (data) {
        _super.prototype.load.call(this, data);
        this.animation.load(data === null || data === void 0 ? void 0 : data.animation);
    };
    return AnimatableColor;
}(OptionsColor_1.OptionsColor));
exports.AnimatableColor = AnimatableColor;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Particles/Attract.js":
/*!****************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Particles/Attract.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Attract = void 0;
var Attract = (function () {
    function Attract() {
        this.enable = false;
        this.rotate = {
            x: 3000,
            y: 3000,
        };
    }
    Object.defineProperty(Attract.prototype, "rotateX", {
        get: function () {
            return this.rotate.x;
        },
        set: function (value) {
            this.rotate.x = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Attract.prototype, "rotateY", {
        get: function () {
            return this.rotate.y;
        },
        set: function (value) {
            this.rotate.y = value;
        },
        enumerable: false,
        configurable: true
    });
    Attract.prototype.load = function (data) {
        var _a, _b, _c, _d;
        if (data !== undefined) {
            if (data.enable !== undefined) {
                this.enable = data.enable;
            }
            var rotateX = (_b = (_a = data.rotate) === null || _a === void 0 ? void 0 : _a.x) !== null && _b !== void 0 ? _b : data.rotateX;
            if (rotateX !== undefined) {
                this.rotate.x = rotateX;
            }
            var rotateY = (_d = (_c = data.rotate) === null || _c === void 0 ? void 0 : _c.y) !== null && _d !== void 0 ? _d : data.rotateY;
            if (rotateY !== undefined) {
                this.rotate.y = rotateY;
            }
        }
    };
    return Attract;
}());
exports.Attract = Attract;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Particles/Collisions.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Particles/Collisions.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Collisions = void 0;
var Enums_1 = __webpack_require__(/*! ../../../Enums */ "./node_modules/tsparticles/dist/Enums/index.js");
var Collisions = (function () {
    function Collisions() {
        this.enable = false;
        this.mode = Enums_1.CollisionMode.bounce;
    }
    Collisions.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.enable !== undefined) {
                this.enable = data.enable;
            }
            if (data.mode !== undefined) {
                this.mode = data.mode;
            }
        }
    };
    return Collisions;
}());
exports.Collisions = Collisions;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Particles/ColorAnimation.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Particles/ColorAnimation.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorAnimation = void 0;
var ColorAnimation = (function () {
    function ColorAnimation() {
        this.enable = false;
        this.speed = 1;
        this.sync = true;
    }
    ColorAnimation.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.enable !== undefined) {
                this.enable = data.enable;
            }
            if (data.speed !== undefined) {
                this.speed = data.speed;
            }
            if (data.sync !== undefined) {
                this.sync = data.sync;
            }
        }
    };
    return ColorAnimation;
}());
exports.ColorAnimation = ColorAnimation;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Particles/Density.js":
/*!****************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Particles/Density.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Density = void 0;
var Density = (function () {
    function Density() {
        this.enable = false;
        this.area = 800;
        this.factor = 1000;
    }
    Object.defineProperty(Density.prototype, "value_area", {
        get: function () {
            return this.area;
        },
        set: function (value) {
            this.area = value;
        },
        enumerable: false,
        configurable: true
    });
    Density.prototype.load = function (data) {
        var _a;
        if (data !== undefined) {
            if (data.enable !== undefined) {
                this.enable = data.enable;
            }
            var area = (_a = data.area) !== null && _a !== void 0 ? _a : data.value_area;
            if (area !== undefined) {
                this.area = area;
            }
            if (data.factor !== undefined) {
                this.factor = data.factor;
            }
        }
    };
    return Density;
}());
exports.Density = Density;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Particles/Links/Links.js":
/*!********************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Particles/Links/Links.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Links = void 0;
var LinksShadow_1 = __webpack_require__(/*! ./LinksShadow */ "./node_modules/tsparticles/dist/Options/Classes/Particles/Links/LinksShadow.js");
var LinksTriangle_1 = __webpack_require__(/*! ./LinksTriangle */ "./node_modules/tsparticles/dist/Options/Classes/Particles/Links/LinksTriangle.js");
var OptionsColor_1 = __webpack_require__(/*! ../../OptionsColor */ "./node_modules/tsparticles/dist/Options/Classes/OptionsColor.js");
var Links = (function () {
    function Links() {
        this.blink = false;
        this.color = new OptionsColor_1.OptionsColor();
        this.consent = false;
        this.distance = 100;
        this.enable = false;
        this.opacity = 1;
        this.shadow = new LinksShadow_1.LinksShadow();
        this.triangles = new LinksTriangle_1.LinksTriangle();
        this.width = 1;
        this.warp = false;
    }
    Links.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.id !== undefined) {
                this.id = data.id;
            }
            if (data.blink !== undefined) {
                this.blink = data.blink;
            }
            this.color = OptionsColor_1.OptionsColor.create(this.color, data.color);
            if (data.consent !== undefined) {
                this.consent = data.consent;
            }
            if (data.distance !== undefined) {
                this.distance = data.distance;
            }
            if (data.enable !== undefined) {
                this.enable = data.enable;
            }
            if (data.opacity !== undefined) {
                this.opacity = data.opacity;
            }
            this.shadow.load(data.shadow);
            this.triangles.load(data.triangles);
            if (data.width !== undefined) {
                this.width = data.width;
            }
            if (data.warp !== undefined) {
                this.warp = data.warp;
            }
        }
    };
    return Links;
}());
exports.Links = Links;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Particles/Links/LinksShadow.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Particles/Links/LinksShadow.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.LinksShadow = void 0;
var OptionsColor_1 = __webpack_require__(/*! ../../OptionsColor */ "./node_modules/tsparticles/dist/Options/Classes/OptionsColor.js");
var LinksShadow = (function () {
    function LinksShadow() {
        this.blur = 5;
        this.color = new OptionsColor_1.OptionsColor();
        this.enable = false;
        this.color.value = "lime";
    }
    LinksShadow.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.blur !== undefined) {
                this.blur = data.blur;
            }
            this.color = OptionsColor_1.OptionsColor.create(this.color, data.color);
            if (data.enable !== undefined) {
                this.enable = data.enable;
            }
        }
    };
    return LinksShadow;
}());
exports.LinksShadow = LinksShadow;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Particles/Links/LinksTriangle.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Particles/Links/LinksTriangle.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.LinksTriangle = void 0;
var OptionsColor_1 = __webpack_require__(/*! ../../OptionsColor */ "./node_modules/tsparticles/dist/Options/Classes/OptionsColor.js");
var LinksTriangle = (function () {
    function LinksTriangle() {
        this.enable = false;
    }
    LinksTriangle.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.color !== undefined) {
                this.color = OptionsColor_1.OptionsColor.create(this.color, data.color);
            }
            if (data.enable !== undefined) {
                this.enable = data.enable;
            }
            if (data.opacity !== undefined) {
                this.opacity = data.opacity;
            }
        }
    };
    return LinksTriangle;
}());
exports.LinksTriangle = LinksTriangle;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Particles/Move.js":
/*!*************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Particles/Move.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Move = void 0;
var Attract_1 = __webpack_require__(/*! ./Attract */ "./node_modules/tsparticles/dist/Options/Classes/Particles/Attract.js");
var Enums_1 = __webpack_require__(/*! ../../../Enums */ "./node_modules/tsparticles/dist/Enums/index.js");
var Trail_1 = __webpack_require__(/*! ./Trail */ "./node_modules/tsparticles/dist/Options/Classes/Particles/Trail.js");
var Noise_1 = __webpack_require__(/*! ./Noise/Noise */ "./node_modules/tsparticles/dist/Options/Classes/Particles/Noise/Noise.js");
var Move = (function () {
    function Move() {
        this.attract = new Attract_1.Attract();
        this.direction = Enums_1.MoveDirection.none;
        this.enable = false;
        this.noise = new Noise_1.Noise();
        this.outMode = Enums_1.OutMode.out;
        this.random = false;
        this.speed = 2;
        this.straight = false;
        this.trail = new Trail_1.Trail();
        this.vibrate = false;
        this.warp = false;
    }
    Object.defineProperty(Move.prototype, "collisions", {
        get: function () {
            return false;
        },
        set: function (value) {
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Move.prototype, "bounce", {
        get: function () {
            return this.collisions;
        },
        set: function (value) {
            this.collisions = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Move.prototype, "out_mode", {
        get: function () {
            return this.outMode;
        },
        set: function (value) {
            this.outMode = value;
        },
        enumerable: false,
        configurable: true
    });
    Move.prototype.load = function (data) {
        var _a;
        if (data !== undefined) {
            this.attract.load(data.attract);
            if (data.direction !== undefined) {
                this.direction = data.direction;
            }
            if (data.enable !== undefined) {
                this.enable = data.enable;
            }
            this.noise.load(data.noise);
            var outMode = (_a = data.outMode) !== null && _a !== void 0 ? _a : data.out_mode;
            if (outMode !== undefined) {
                this.outMode = outMode;
            }
            if (data.random !== undefined) {
                this.random = data.random;
            }
            if (data.speed !== undefined) {
                this.speed = data.speed;
            }
            if (data.straight !== undefined) {
                this.straight = data.straight;
            }
            this.trail.load(data.trail);
            if (data.vibrate !== undefined) {
                this.vibrate = data.vibrate;
            }
            if (data.warp !== undefined) {
                this.warp = data.warp;
            }
        }
    };
    return Move;
}());
exports.Move = Move;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Particles/Noise/Noise.js":
/*!********************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Particles/Noise/Noise.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Noise = void 0;
var NoiseDelay_1 = __webpack_require__(/*! ./NoiseDelay */ "./node_modules/tsparticles/dist/Options/Classes/Particles/Noise/NoiseDelay.js");
var NoiseFactor_1 = __webpack_require__(/*! ./NoiseFactor */ "./node_modules/tsparticles/dist/Options/Classes/Particles/Noise/NoiseFactor.js");
var Noise = (function () {
    function Noise() {
        this.delay = new NoiseDelay_1.NoiseDelay();
        this.enable = false;
        this.factor = new NoiseFactor_1.NoiseFactor();
    }
    Noise.prototype.load = function (data) {
        if (data !== undefined) {
            this.delay.load(data.delay);
            if (data.enable !== undefined) {
                this.enable = data.enable;
            }
            this.factor.load(data.factor);
        }
    };
    return Noise;
}());
exports.Noise = Noise;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Particles/Noise/NoiseDelay.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Particles/Noise/NoiseDelay.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.NoiseDelay = void 0;
var NoiseRandom_1 = __webpack_require__(/*! ./NoiseRandom */ "./node_modules/tsparticles/dist/Options/Classes/Particles/Noise/NoiseRandom.js");
var NoiseDelay = (function () {
    function NoiseDelay() {
        this.random = new NoiseRandom_1.NoiseRandom();
        this.value = 0;
    }
    NoiseDelay.prototype.load = function (data) {
        var _a;
        if (data !== undefined) {
            (_a = this.random) === null || _a === void 0 ? void 0 : _a.load(data.random);
            if (data.value !== undefined) {
                this.value = data.value;
            }
        }
    };
    return NoiseDelay;
}());
exports.NoiseDelay = NoiseDelay;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Particles/Noise/NoiseFactor.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Particles/Noise/NoiseFactor.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.NoiseFactor = void 0;
var NoiseValue_1 = __webpack_require__(/*! ./NoiseValue */ "./node_modules/tsparticles/dist/Options/Classes/Particles/Noise/NoiseValue.js");
var NoiseFactor = (function () {
    function NoiseFactor() {
        this.horizontal = new NoiseValue_1.NoiseValue();
        this.horizontal.value = 50;
        this.horizontal.offset = 0;
        this.vertical = new NoiseValue_1.NoiseValue();
        this.vertical.value = 10;
        this.vertical.offset = 40000;
    }
    NoiseFactor.prototype.load = function (data) {
        if (data !== undefined) {
            this.horizontal.load(data.horizontal);
            this.vertical.load(data.vertical);
        }
    };
    return NoiseFactor;
}());
exports.NoiseFactor = NoiseFactor;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Particles/Noise/NoiseRandom.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Particles/Noise/NoiseRandom.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.NoiseRandom = void 0;
var NoiseRandom = (function () {
    function NoiseRandom() {
        this.enable = false;
        this.minimumValue = 0;
    }
    NoiseRandom.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.enable !== undefined) {
                this.enable = data.enable;
            }
            if (data.minimumValue !== undefined) {
                this.minimumValue = data.minimumValue;
            }
        }
    };
    return NoiseRandom;
}());
exports.NoiseRandom = NoiseRandom;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Particles/Noise/NoiseValue.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Particles/Noise/NoiseValue.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.NoiseValue = void 0;
var NoiseValue = (function () {
    function NoiseValue() {
        this.value = 1;
        this.offset = 0;
    }
    NoiseValue.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.value !== undefined) {
                this.value = data.value === 0 ? this.value : data.value;
            }
            if (data.offset !== undefined) {
                this.offset = data.offset;
            }
        }
    };
    return NoiseValue;
}());
exports.NoiseValue = NoiseValue;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Particles/Opacity/Opacity.js":
/*!************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Particles/Opacity/Opacity.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Opacity = void 0;
var OpacityAnimation_1 = __webpack_require__(/*! ./OpacityAnimation */ "./node_modules/tsparticles/dist/Options/Classes/Particles/Opacity/OpacityAnimation.js");
var OpacityRandom_1 = __webpack_require__(/*! ./OpacityRandom */ "./node_modules/tsparticles/dist/Options/Classes/Particles/Opacity/OpacityRandom.js");
var Opacity = (function () {
    function Opacity() {
        this.animation = new OpacityAnimation_1.OpacityAnimation();
        this.random = new OpacityRandom_1.OpacityRandom();
        this.value = 1;
    }
    Object.defineProperty(Opacity.prototype, "anim", {
        get: function () {
            return this.animation;
        },
        set: function (value) {
            this.animation = value;
        },
        enumerable: false,
        configurable: true
    });
    Opacity.prototype.load = function (data) {
        var _a;
        if (data !== undefined) {
            this.animation.load((_a = data.animation) !== null && _a !== void 0 ? _a : data.anim);
            if (data.random !== undefined) {
                if (typeof data.random === "boolean") {
                    this.random.enable = data.random;
                }
                else {
                    this.random.load(data.random);
                }
            }
            if (data.value !== undefined) {
                this.value = data.value;
            }
        }
    };
    return Opacity;
}());
exports.Opacity = Opacity;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Particles/Opacity/OpacityAnimation.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Particles/Opacity/OpacityAnimation.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.OpacityAnimation = void 0;
var OpacityAnimation = (function () {
    function OpacityAnimation() {
        this.enable = false;
        this.minimumValue = 0;
        this.speed = 2;
        this.sync = false;
    }
    Object.defineProperty(OpacityAnimation.prototype, "opacity_min", {
        get: function () {
            return this.minimumValue;
        },
        set: function (value) {
            this.minimumValue = value;
        },
        enumerable: false,
        configurable: true
    });
    OpacityAnimation.prototype.load = function (data) {
        var _a;
        if (data !== undefined) {
            if (data.enable !== undefined) {
                this.enable = data.enable;
            }
            var minimumValue = (_a = data.minimumValue) !== null && _a !== void 0 ? _a : data.opacity_min;
            if (minimumValue !== undefined) {
                this.minimumValue = minimumValue;
            }
            if (data.speed !== undefined) {
                this.speed = data.speed;
            }
            if (data.sync !== undefined) {
                this.sync = data.sync;
            }
        }
    };
    return OpacityAnimation;
}());
exports.OpacityAnimation = OpacityAnimation;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Particles/Opacity/OpacityRandom.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Particles/Opacity/OpacityRandom.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.OpacityRandom = void 0;
var OpacityRandom = (function () {
    function OpacityRandom() {
        this.enable = false;
        this.minimumValue = 1;
    }
    OpacityRandom.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.enable !== undefined) {
                this.enable = data.enable;
            }
            if (data.minimumValue !== undefined) {
                this.minimumValue = data.minimumValue;
            }
        }
    };
    return OpacityRandom;
}());
exports.OpacityRandom = OpacityRandom;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Particles/Particles.js":
/*!******************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Particles/Particles.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Particles = void 0;
var Links_1 = __webpack_require__(/*! ./Links/Links */ "./node_modules/tsparticles/dist/Options/Classes/Particles/Links/Links.js");
var Move_1 = __webpack_require__(/*! ./Move */ "./node_modules/tsparticles/dist/Options/Classes/Particles/Move.js");
var ParticlesNumber_1 = __webpack_require__(/*! ./ParticlesNumber */ "./node_modules/tsparticles/dist/Options/Classes/Particles/ParticlesNumber.js");
var Opacity_1 = __webpack_require__(/*! ./Opacity/Opacity */ "./node_modules/tsparticles/dist/Options/Classes/Particles/Opacity/Opacity.js");
var Shape_1 = __webpack_require__(/*! ./Shape/Shape */ "./node_modules/tsparticles/dist/Options/Classes/Particles/Shape/Shape.js");
var Size_1 = __webpack_require__(/*! ./Size/Size */ "./node_modules/tsparticles/dist/Options/Classes/Particles/Size/Size.js");
var Rotate_1 = __webpack_require__(/*! ./Rotate/Rotate */ "./node_modules/tsparticles/dist/Options/Classes/Particles/Rotate/Rotate.js");
var Shadow_1 = __webpack_require__(/*! ./Shadow */ "./node_modules/tsparticles/dist/Options/Classes/Particles/Shadow.js");
var Stroke_1 = __webpack_require__(/*! ./Stroke */ "./node_modules/tsparticles/dist/Options/Classes/Particles/Stroke.js");
var Collisions_1 = __webpack_require__(/*! ./Collisions */ "./node_modules/tsparticles/dist/Options/Classes/Particles/Collisions.js");
var Twinkle_1 = __webpack_require__(/*! ./Twinkle/Twinkle */ "./node_modules/tsparticles/dist/Options/Classes/Particles/Twinkle/Twinkle.js");
var AnimatableColor_1 = __webpack_require__(/*! ./AnimatableColor */ "./node_modules/tsparticles/dist/Options/Classes/Particles/AnimatableColor.js");
var Particles = (function () {
    function Particles() {
        this.collisions = new Collisions_1.Collisions();
        this.color = new AnimatableColor_1.AnimatableColor();
        this.links = new Links_1.Links();
        this.move = new Move_1.Move();
        this.number = new ParticlesNumber_1.ParticlesNumber();
        this.opacity = new Opacity_1.Opacity();
        this.rotate = new Rotate_1.Rotate();
        this.shadow = new Shadow_1.Shadow();
        this.shape = new Shape_1.Shape();
        this.size = new Size_1.Size();
        this.stroke = new Stroke_1.Stroke();
        this.twinkle = new Twinkle_1.Twinkle();
    }
    Object.defineProperty(Particles.prototype, "line_linked", {
        get: function () {
            return this.links;
        },
        set: function (value) {
            this.links = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Particles.prototype, "lineLinked", {
        get: function () {
            return this.links;
        },
        set: function (value) {
            this.links = value;
        },
        enumerable: false,
        configurable: true
    });
    Particles.prototype.load = function (data) {
        var _a, _b, _c, _d, _e, _f, _g;
        if (data !== undefined) {
            if (data.color !== undefined) {
                this.color = AnimatableColor_1.AnimatableColor.create(this.color, data.color);
            }
            var links = (_b = (_a = data.links) !== null && _a !== void 0 ? _a : data.lineLinked) !== null && _b !== void 0 ? _b : data.line_linked;
            if (links !== undefined) {
                this.links.load(links);
            }
            this.move.load(data.move);
            this.number.load(data.number);
            this.opacity.load(data.opacity);
            this.rotate.load(data.rotate);
            this.shape.load(data.shape);
            this.size.load(data.size);
            this.shadow.load(data.shadow);
            this.twinkle.load(data.twinkle);
            var collisions = (_d = (_c = data.move) === null || _c === void 0 ? void 0 : _c.collisions) !== null && _d !== void 0 ? _d : (_e = data.move) === null || _e === void 0 ? void 0 : _e.bounce;
            if (collisions !== undefined) {
                this.collisions.enable = collisions;
            }
            this.collisions.load(data.collisions);
            var strokeToLoad = (_f = data.stroke) !== null && _f !== void 0 ? _f : (_g = data.shape) === null || _g === void 0 ? void 0 : _g.stroke;
            if (strokeToLoad !== undefined) {
                if (strokeToLoad instanceof Array) {
                    this.stroke = strokeToLoad.map(function (s) {
                        var tmp = new Stroke_1.Stroke();
                        tmp.load(s);
                        return tmp;
                    });
                }
                else {
                    if (this.stroke instanceof Array) {
                        this.stroke = new Stroke_1.Stroke();
                    }
                    this.stroke.load(strokeToLoad);
                }
            }
        }
    };
    return Particles;
}());
exports.Particles = Particles;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Particles/ParticlesNumber.js":
/*!************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Particles/ParticlesNumber.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ParticlesNumber = void 0;
var Density_1 = __webpack_require__(/*! ./Density */ "./node_modules/tsparticles/dist/Options/Classes/Particles/Density.js");
var ParticlesNumber = (function () {
    function ParticlesNumber() {
        this.density = new Density_1.Density();
        this.limit = 0;
        this.value = 100;
    }
    Object.defineProperty(ParticlesNumber.prototype, "max", {
        get: function () {
            return this.limit;
        },
        set: function (value) {
            this.limit = value;
        },
        enumerable: false,
        configurable: true
    });
    ParticlesNumber.prototype.load = function (data) {
        var _a;
        if (data !== undefined) {
            this.density.load(data.density);
            var limit = (_a = data.limit) !== null && _a !== void 0 ? _a : data.max;
            if (limit !== undefined) {
                this.limit = limit;
            }
            if (data.value !== undefined) {
                this.value = data.value;
            }
        }
    };
    return ParticlesNumber;
}());
exports.ParticlesNumber = ParticlesNumber;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Particles/Rotate/Rotate.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Particles/Rotate/Rotate.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Rotate = void 0;
var RotateAnimation_1 = __webpack_require__(/*! ./RotateAnimation */ "./node_modules/tsparticles/dist/Options/Classes/Particles/Rotate/RotateAnimation.js");
var Enums_1 = __webpack_require__(/*! ../../../../Enums */ "./node_modules/tsparticles/dist/Enums/index.js");
var Rotate = (function () {
    function Rotate() {
        this.animation = new RotateAnimation_1.RotateAnimation();
        this.direction = Enums_1.RotateDirection.clockwise;
        this.random = false;
        this.value = 0;
    }
    Rotate.prototype.load = function (data) {
        if (data !== undefined) {
            this.animation.load(data.animation);
            if (data.random !== undefined) {
                this.random = data.random;
            }
            if (data.direction !== undefined) {
                this.direction = data.direction;
            }
            if (data.value !== undefined) {
                this.value = data.value;
            }
        }
    };
    return Rotate;
}());
exports.Rotate = Rotate;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Particles/Rotate/RotateAnimation.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Particles/Rotate/RotateAnimation.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.RotateAnimation = void 0;
var RotateAnimation = (function () {
    function RotateAnimation() {
        this.enable = false;
        this.speed = 0;
        this.sync = false;
    }
    RotateAnimation.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.enable !== undefined) {
                this.enable = data.enable;
            }
            if (data.speed !== undefined) {
                this.speed = data.speed;
            }
            if (data.sync !== undefined) {
                this.sync = data.sync;
            }
        }
    };
    return RotateAnimation;
}());
exports.RotateAnimation = RotateAnimation;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Particles/Shadow.js":
/*!***************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Particles/Shadow.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Shadow = void 0;
var OptionsColor_1 = __webpack_require__(/*! ../OptionsColor */ "./node_modules/tsparticles/dist/Options/Classes/OptionsColor.js");
var Shadow = (function () {
    function Shadow() {
        this.blur = 0;
        this.color = new OptionsColor_1.OptionsColor();
        this.enable = false;
        this.offset = {
            x: 0,
            y: 0,
        };
        this.color.value = "#000000";
    }
    Shadow.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.blur !== undefined) {
                this.blur = data.blur;
            }
            this.color = OptionsColor_1.OptionsColor.create(this.color, data.color);
            if (data.enable !== undefined) {
                this.enable = data.enable;
            }
            if (data.offset !== undefined) {
                if (data.offset.x !== undefined) {
                    this.offset.x = data.offset.x;
                }
                if (data.offset.y !== undefined) {
                    this.offset.y = data.offset.y;
                }
            }
        }
    };
    return Shadow;
}());
exports.Shadow = Shadow;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Particles/Shape/CharacterShape.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Particles/Shape/CharacterShape.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharacterShape = void 0;
var ShapeBase_1 = __webpack_require__(/*! ./ShapeBase */ "./node_modules/tsparticles/dist/Options/Classes/Particles/Shape/ShapeBase.js");
var CharacterShape = (function (_super) {
    __extends(CharacterShape, _super);
    function CharacterShape() {
        var _this = _super.call(this) || this;
        _this.font = "Verdana";
        _this.style = "";
        _this.value = "*";
        _this.weight = "400";
        return _this;
    }
    CharacterShape.prototype.load = function (data) {
        _super.prototype.load.call(this, data);
        if (data !== undefined) {
            if (data.font !== undefined) {
                this.font = data.font;
            }
            if (data.style !== undefined) {
                this.style = data.style;
            }
            if (data.value !== undefined) {
                this.value = data.value;
            }
            if (data.weight !== undefined) {
                this.weight = data.weight;
            }
        }
    };
    return CharacterShape;
}(ShapeBase_1.ShapeBase));
exports.CharacterShape = CharacterShape;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Particles/Shape/ImageShape.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Particles/Shape/ImageShape.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageShape = void 0;
var ShapeBase_1 = __webpack_require__(/*! ./ShapeBase */ "./node_modules/tsparticles/dist/Options/Classes/Particles/Shape/ShapeBase.js");
var ImageShape = (function (_super) {
    __extends(ImageShape, _super);
    function ImageShape() {
        var _this = _super.call(this) || this;
        _this.height = 100;
        _this.replaceColor = false;
        _this.src = "";
        _this.width = 100;
        return _this;
    }
    Object.defineProperty(ImageShape.prototype, "replace_color", {
        get: function () {
            return this.replaceColor;
        },
        set: function (value) {
            this.replaceColor = value;
        },
        enumerable: false,
        configurable: true
    });
    ImageShape.prototype.load = function (data) {
        var _a;
        _super.prototype.load.call(this, data);
        if (data !== undefined) {
            if (data.height !== undefined) {
                this.height = data.height;
            }
            var replaceColor = (_a = data.replaceColor) !== null && _a !== void 0 ? _a : data.replace_color;
            if (replaceColor !== undefined) {
                this.replaceColor = replaceColor;
            }
            if (data.src !== undefined) {
                this.src = data.src;
            }
            if (data.width !== undefined) {
                this.width = data.width;
            }
        }
    };
    return ImageShape;
}(ShapeBase_1.ShapeBase));
exports.ImageShape = ImageShape;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Particles/Shape/PolygonShape.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Particles/Shape/PolygonShape.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolygonShape = void 0;
var ShapeBase_1 = __webpack_require__(/*! ./ShapeBase */ "./node_modules/tsparticles/dist/Options/Classes/Particles/Shape/ShapeBase.js");
var PolygonShape = (function (_super) {
    __extends(PolygonShape, _super);
    function PolygonShape() {
        var _this = _super.call(this) || this;
        _this.sides = 5;
        return _this;
    }
    Object.defineProperty(PolygonShape.prototype, "nb_sides", {
        get: function () {
            return this.sides;
        },
        set: function (value) {
            this.sides = value;
        },
        enumerable: false,
        configurable: true
    });
    PolygonShape.prototype.load = function (data) {
        var _a;
        _super.prototype.load.call(this, data);
        if (data !== undefined) {
            var sides = (_a = data.sides) !== null && _a !== void 0 ? _a : data.nb_sides;
            if (sides !== undefined) {
                this.sides = sides;
            }
        }
    };
    return PolygonShape;
}(ShapeBase_1.ShapeBase));
exports.PolygonShape = PolygonShape;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Particles/Shape/Shape.js":
/*!********************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Particles/Shape/Shape.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Shape = void 0;
var Enums_1 = __webpack_require__(/*! ../../../../Enums */ "./node_modules/tsparticles/dist/Enums/index.js");
var ImageShape_1 = __webpack_require__(/*! ./ImageShape */ "./node_modules/tsparticles/dist/Options/Classes/Particles/Shape/ImageShape.js");
var PolygonShape_1 = __webpack_require__(/*! ./PolygonShape */ "./node_modules/tsparticles/dist/Options/Classes/Particles/Shape/PolygonShape.js");
var CharacterShape_1 = __webpack_require__(/*! ./CharacterShape */ "./node_modules/tsparticles/dist/Options/Classes/Particles/Shape/CharacterShape.js");
var Utils_1 = __webpack_require__(/*! ../../../../Utils */ "./node_modules/tsparticles/dist/Utils/index.js");
var Shape = (function () {
    function Shape() {
        this.options = {};
        this.character = new CharacterShape_1.CharacterShape();
        this.image = new ImageShape_1.ImageShape();
        this.polygon = new PolygonShape_1.PolygonShape();
        this.type = Enums_1.ShapeType.circle;
    }
    Object.defineProperty(Shape.prototype, "image", {
        get: function () {
            var _a;
            return ((_a = this.options[Enums_1.ShapeType.image]) !== null && _a !== void 0 ? _a : this.options[Enums_1.ShapeType.images]);
        },
        set: function (value) {
            this.options[Enums_1.ShapeType.image] = value;
            this.options[Enums_1.ShapeType.images] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Shape.prototype, "custom", {
        get: function () {
            return this.options;
        },
        set: function (value) {
            this.options = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Shape.prototype, "images", {
        get: function () {
            return this.image instanceof Array ? this.image : [this.image];
        },
        set: function (value) {
            this.image = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Shape.prototype, "stroke", {
        get: function () {
            return [];
        },
        set: function (_value) {
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Shape.prototype, "character", {
        get: function () {
            var _a;
            return ((_a = this.options[Enums_1.ShapeType.character]) !== null && _a !== void 0 ? _a : this.options[Enums_1.ShapeType.char]);
        },
        set: function (value) {
            this.options[Enums_1.ShapeType.character] = value;
            this.options[Enums_1.ShapeType.char] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Shape.prototype, "polygon", {
        get: function () {
            var _a;
            return ((_a = this.options[Enums_1.ShapeType.polygon]) !== null && _a !== void 0 ? _a : this.options[Enums_1.ShapeType.star]);
        },
        set: function (value) {
            this.options[Enums_1.ShapeType.polygon] = value;
            this.options[Enums_1.ShapeType.star] = value;
        },
        enumerable: false,
        configurable: true
    });
    Shape.prototype.load = function (data) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
        if (data !== undefined) {
            var options = (_a = data.options) !== null && _a !== void 0 ? _a : data.custom;
            if (options !== undefined) {
                for (var shape in options) {
                    var item = options[shape];
                    if (item !== undefined) {
                        this.options[shape] = Utils_1.Utils.deepExtend((_b = this.options[shape]) !== null && _b !== void 0 ? _b : {}, item);
                    }
                }
            }
            if (data.character !== undefined) {
                var item = data.character;
                if (item !== undefined) {
                    if (item instanceof Array) {
                        if (this.options[Enums_1.ShapeType.character] instanceof Array) {
                            this.options[Enums_1.ShapeType.character] = Utils_1.Utils.deepExtend((_c = this.options[Enums_1.ShapeType.character]) !== null && _c !== void 0 ? _c : [], item);
                            this.options[Enums_1.ShapeType.char] = Utils_1.Utils.deepExtend((_d = this.options[Enums_1.ShapeType.char]) !== null && _d !== void 0 ? _d : [], item);
                        }
                        else {
                            this.options[Enums_1.ShapeType.character] = Utils_1.Utils.deepExtend([], item);
                            this.options[Enums_1.ShapeType.char] = Utils_1.Utils.deepExtend([], item);
                        }
                    }
                    else {
                        if (this.options[Enums_1.ShapeType.character] instanceof Array) {
                            this.options[Enums_1.ShapeType.character] = Utils_1.Utils.deepExtend({}, item);
                            this.options[Enums_1.ShapeType.char] = Utils_1.Utils.deepExtend({}, item);
                        }
                        else {
                            this.options[Enums_1.ShapeType.character] = Utils_1.Utils.deepExtend((_e = this.options[Enums_1.ShapeType.character]) !== null && _e !== void 0 ? _e : [], item);
                            this.options[Enums_1.ShapeType.char] = Utils_1.Utils.deepExtend((_f = this.options[Enums_1.ShapeType.char]) !== null && _f !== void 0 ? _f : [], item);
                        }
                    }
                }
            }
            if (data.polygon !== undefined) {
                var item = data.polygon;
                if (item !== undefined) {
                    if (item instanceof Array) {
                        if (this.options[Enums_1.ShapeType.polygon] instanceof Array) {
                            this.options[Enums_1.ShapeType.polygon] = Utils_1.Utils.deepExtend((_g = this.options[Enums_1.ShapeType.polygon]) !== null && _g !== void 0 ? _g : [], item);
                            if (this.options[Enums_1.ShapeType.star] === undefined) {
                                this.options[Enums_1.ShapeType.star] = Utils_1.Utils.deepExtend((_h = this.options[Enums_1.ShapeType.star]) !== null && _h !== void 0 ? _h : [], item);
                            }
                        }
                        else {
                            this.options[Enums_1.ShapeType.polygon] = Utils_1.Utils.deepExtend([], item);
                            if (this.options[Enums_1.ShapeType.star] === undefined) {
                                this.options[Enums_1.ShapeType.star] = Utils_1.Utils.deepExtend([], item);
                            }
                        }
                    }
                    else {
                        if (this.options[Enums_1.ShapeType.polygon] instanceof Array) {
                            this.options[Enums_1.ShapeType.polygon] = Utils_1.Utils.deepExtend({}, item);
                            if (this.options[Enums_1.ShapeType.star] === undefined) {
                                this.options[Enums_1.ShapeType.star] = Utils_1.Utils.deepExtend({}, item);
                            }
                        }
                        else {
                            this.options[Enums_1.ShapeType.polygon] = Utils_1.Utils.deepExtend((_j = this.options[Enums_1.ShapeType.polygon]) !== null && _j !== void 0 ? _j : [], item);
                            if (this.options[Enums_1.ShapeType.star] === undefined) {
                                this.options[Enums_1.ShapeType.star] = Utils_1.Utils.deepExtend((_k = this.options[Enums_1.ShapeType.star]) !== null && _k !== void 0 ? _k : [], item);
                            }
                        }
                    }
                }
            }
            if (data.image !== undefined) {
                var item = data.image;
                if (item !== undefined) {
                    if (item instanceof Array) {
                        if (this.options[Enums_1.ShapeType.image] instanceof Array) {
                            this.options[Enums_1.ShapeType.image] = Utils_1.Utils.deepExtend((_l = this.options[Enums_1.ShapeType.image]) !== null && _l !== void 0 ? _l : [], item);
                            this.options[Enums_1.ShapeType.images] = Utils_1.Utils.deepExtend((_m = this.options[Enums_1.ShapeType.images]) !== null && _m !== void 0 ? _m : [], item);
                        }
                        else {
                            this.options[Enums_1.ShapeType.image] = Utils_1.Utils.deepExtend([], item);
                            this.options[Enums_1.ShapeType.images] = Utils_1.Utils.deepExtend([], item);
                        }
                    }
                    else {
                        if (this.options[Enums_1.ShapeType.image] instanceof Array) {
                            this.options[Enums_1.ShapeType.image] = Utils_1.Utils.deepExtend({}, item);
                            this.options[Enums_1.ShapeType.images] = Utils_1.Utils.deepExtend({}, item);
                        }
                        else {
                            this.options[Enums_1.ShapeType.image] = Utils_1.Utils.deepExtend((_o = this.options[Enums_1.ShapeType.image]) !== null && _o !== void 0 ? _o : [], item);
                            this.options[Enums_1.ShapeType.images] = Utils_1.Utils.deepExtend((_p = this.options[Enums_1.ShapeType.images]) !== null && _p !== void 0 ? _p : [], item);
                        }
                    }
                }
            }
            if (data.type !== undefined) {
                this.type = data.type;
            }
        }
    };
    return Shape;
}());
exports.Shape = Shape;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Particles/Shape/ShapeBase.js":
/*!************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Particles/Shape/ShapeBase.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ShapeBase = void 0;
var ShapeBase = (function () {
    function ShapeBase() {
        this.fill = true;
        this.close = true;
    }
    ShapeBase.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.fill !== undefined) {
                this.fill = data.fill;
            }
            if (data.particles !== undefined) {
                this.particles = data.particles;
            }
        }
    };
    return ShapeBase;
}());
exports.ShapeBase = ShapeBase;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Particles/Size/Size.js":
/*!******************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Particles/Size/Size.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Size = void 0;
var SizeAnimation_1 = __webpack_require__(/*! ./SizeAnimation */ "./node_modules/tsparticles/dist/Options/Classes/Particles/Size/SizeAnimation.js");
var SizeRandom_1 = __webpack_require__(/*! ./SizeRandom */ "./node_modules/tsparticles/dist/Options/Classes/Particles/Size/SizeRandom.js");
var Size = (function () {
    function Size() {
        this.animation = new SizeAnimation_1.SizeAnimation();
        this.random = new SizeRandom_1.SizeRandom();
        this.value = 3;
    }
    Object.defineProperty(Size.prototype, "anim", {
        get: function () {
            return this.animation;
        },
        set: function (value) {
            this.animation = value;
        },
        enumerable: false,
        configurable: true
    });
    Size.prototype.load = function (data) {
        var _a;
        if (data !== undefined) {
            var animation = (_a = data.animation) !== null && _a !== void 0 ? _a : data.anim;
            if (animation !== undefined) {
                this.animation.load(animation);
            }
            if (data.random !== undefined) {
                if (typeof data.random === "boolean") {
                    this.random.enable = data.random;
                }
                else {
                    this.random.load(data.random);
                }
            }
            if (data.value !== undefined) {
                this.value = data.value;
            }
        }
    };
    return Size;
}());
exports.Size = Size;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Particles/Size/SizeAnimation.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Particles/Size/SizeAnimation.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.SizeAnimation = void 0;
var Enums_1 = __webpack_require__(/*! ../../../../Enums */ "./node_modules/tsparticles/dist/Enums/index.js");
var SizeAnimation = (function () {
    function SizeAnimation() {
        this.destroy = Enums_1.DestroyType.none;
        this.enable = false;
        this.minimumValue = 0;
        this.speed = 5;
        this.startValue = Enums_1.StartValueType.max;
        this.sync = false;
    }
    Object.defineProperty(SizeAnimation.prototype, "size_min", {
        get: function () {
            return this.minimumValue;
        },
        set: function (value) {
            this.minimumValue = value;
        },
        enumerable: false,
        configurable: true
    });
    SizeAnimation.prototype.load = function (data) {
        var _a;
        if (data !== undefined) {
            if (data.destroy !== undefined) {
                this.destroy = data.destroy;
            }
            if (data.enable !== undefined) {
                this.enable = data.enable;
            }
            var minimumValue = (_a = data.minimumValue) !== null && _a !== void 0 ? _a : data.size_min;
            if (minimumValue !== undefined) {
                this.minimumValue = minimumValue;
            }
            if (data.speed !== undefined) {
                this.speed = data.speed;
            }
            if (data.startValue !== undefined) {
                this.startValue = data.startValue;
            }
            if (data.sync !== undefined) {
                this.sync = data.sync;
            }
        }
    };
    return SizeAnimation;
}());
exports.SizeAnimation = SizeAnimation;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Particles/Size/SizeRandom.js":
/*!************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Particles/Size/SizeRandom.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.SizeRandom = void 0;
var SizeRandom = (function () {
    function SizeRandom() {
        this.enable = false;
        this.minimumValue = 1;
    }
    SizeRandom.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.enable !== undefined) {
                this.enable = data.enable;
            }
            if (data.minimumValue !== undefined) {
                this.minimumValue = data.minimumValue;
            }
        }
    };
    return SizeRandom;
}());
exports.SizeRandom = SizeRandom;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Particles/Stroke.js":
/*!***************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Particles/Stroke.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Stroke = void 0;
var OptionsColor_1 = __webpack_require__(/*! ../OptionsColor */ "./node_modules/tsparticles/dist/Options/Classes/OptionsColor.js");
var Stroke = (function () {
    function Stroke() {
        this.color = new OptionsColor_1.OptionsColor();
        this.width = 0;
        this.opacity = 1;
        this.color.value = "#ff0000";
    }
    Stroke.prototype.load = function (data) {
        if (data !== undefined) {
            this.color = OptionsColor_1.OptionsColor.create(this.color, data.color);
            if (data.width !== undefined) {
                this.width = data.width;
            }
            if (data.opacity !== undefined) {
                this.opacity = data.opacity;
            }
        }
    };
    return Stroke;
}());
exports.Stroke = Stroke;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Particles/Trail.js":
/*!**************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Particles/Trail.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Trail = void 0;
var OptionsColor_1 = __webpack_require__(/*! ../OptionsColor */ "./node_modules/tsparticles/dist/Options/Classes/OptionsColor.js");
var Trail = (function () {
    function Trail() {
        this.enable = false;
        this.length = 10;
        this.fillColor = new OptionsColor_1.OptionsColor();
        this.fillColor.value = "#000000";
    }
    Trail.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.enable !== undefined) {
                this.enable = data.enable;
            }
            this.fillColor = OptionsColor_1.OptionsColor.create(this.fillColor, data.fillColor);
            if (data.length !== undefined) {
                this.length = data.length;
            }
        }
    };
    return Trail;
}());
exports.Trail = Trail;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Particles/Twinkle/Twinkle.js":
/*!************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Particles/Twinkle/Twinkle.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Twinkle = void 0;
var TwinkleValues_1 = __webpack_require__(/*! ./TwinkleValues */ "./node_modules/tsparticles/dist/Options/Classes/Particles/Twinkle/TwinkleValues.js");
var Twinkle = (function () {
    function Twinkle() {
        this.lines = new TwinkleValues_1.TwinkleValues();
        this.particles = new TwinkleValues_1.TwinkleValues();
    }
    Twinkle.prototype.load = function (data) {
        if (data !== undefined) {
            this.lines.load(data.lines);
            this.particles.load(data.particles);
        }
    };
    return Twinkle;
}());
exports.Twinkle = Twinkle;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Particles/Twinkle/TwinkleValues.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Particles/Twinkle/TwinkleValues.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.TwinkleValues = void 0;
var OptionsColor_1 = __webpack_require__(/*! ../../OptionsColor */ "./node_modules/tsparticles/dist/Options/Classes/OptionsColor.js");
var TwinkleValues = (function () {
    function TwinkleValues() {
        this.enable = false;
        this.frequency = 0.05;
        this.opacity = 1;
    }
    TwinkleValues.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.color !== undefined) {
                this.color = OptionsColor_1.OptionsColor.create(this.color, data.color);
            }
            if (data.enable !== undefined) {
                this.enable = data.enable;
            }
            if (data.frequency !== undefined) {
                this.frequency = data.frequency;
            }
            if (data.opacity !== undefined) {
                this.opacity = data.opacity;
            }
        }
    };
    return TwinkleValues;
}());
exports.TwinkleValues = TwinkleValues;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Plugins/Absorbers/AbsorberInstance.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Plugins/Absorbers/AbsorberInstance.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.AbsorberInstance = void 0;
var Utils_1 = __webpack_require__(/*! ../../Utils */ "./node_modules/tsparticles/dist/Utils/index.js");
var AbsorberInstance = (function () {
    function AbsorberInstance(absorbers, options, position) {
        var _a, _b;
        this.absorbers = absorbers;
        this.container = absorbers.container;
        this.initialPosition = position;
        this.options = options;
        var container = this.container;
        var size = options.size.value * container.retina.pixelRatio;
        var random = typeof options.size.random === "boolean" ? options.size.random : options.size.random.enable;
        var minSize = typeof options.size.random === "boolean" ? 1 : options.size.random.minimumValue;
        if (random) {
            size = Utils_1.Utils.randomInRange(minSize, size);
        }
        this.opacity = this.options.opacity;
        this.size = size * container.retina.pixelRatio;
        this.mass = this.size * options.size.density;
        var limit = options.size.limit;
        this.limit = limit !== undefined ? limit * container.retina.pixelRatio : limit;
        var color = typeof options.color === "string" ? { value: options.color } : options.color;
        this.color = (_a = Utils_1.ColorUtils.colorToRgb(color)) !== null && _a !== void 0 ? _a : {
            b: 0,
            g: 0,
            r: 0,
        };
        this.position = (_b = this.initialPosition) !== null && _b !== void 0 ? _b : this.calcPosition();
    }
    AbsorberInstance.prototype.attract = function (particle, _delta) {
        var pos = particle.getPosition();
        var _a = Utils_1.Utils.getDistances(this.position, pos), dx = _a.dx, dy = _a.dy, distance = _a.distance;
        var angle = Math.atan2(dx, dy) * (180 / Math.PI);
        var acceleration = this.mass / Math.pow(distance, 2);
        if (distance < this.size + particle.size.value) {
            var sizeFactor = particle.size.value * 0.033;
            if (this.size > particle.size.value && distance < this.size - particle.size.value) {
                particle.destroyed = true;
            }
            else {
                particle.size.value -= sizeFactor;
                particle.velocity.horizontal += Math.sin(angle * (Math.PI / 180)) * acceleration;
                particle.velocity.vertical += Math.cos(angle * (Math.PI / 180)) * acceleration;
            }
            if (this.limit === undefined || this.size < this.limit) {
                this.size += sizeFactor;
            }
            this.mass += sizeFactor * this.options.size.density;
        }
        else {
            particle.velocity.horizontal += Math.sin(angle * (Math.PI / 180)) * acceleration;
            particle.velocity.vertical += Math.cos(angle * (Math.PI / 180)) * acceleration;
        }
    };
    AbsorberInstance.prototype.resize = function () {
        var initialPosition = this.initialPosition;
        this.position =
            initialPosition && Utils_1.Utils.isPointInside(initialPosition, this.container.canvas.size)
                ? initialPosition
                : this.calcPosition();
    };
    AbsorberInstance.prototype.draw = function (context) {
        context.translate(this.position.x, this.position.y);
        context.beginPath();
        context.arc(0, 0, this.size, 0, Math.PI * 2, false);
        context.closePath();
        context.fillStyle = Utils_1.ColorUtils.getStyleFromRgb(this.color, this.opacity);
        context.fill();
    };
    AbsorberInstance.prototype.calcPosition = function () {
        var _a;
        var container = this.container;
        var percentPosition = (_a = this.options.position) !== null && _a !== void 0 ? _a : {
            x: Math.random() * 100,
            y: Math.random() * 100,
        };
        return {
            x: (percentPosition.x / 100) * container.canvas.size.width,
            y: (percentPosition.y / 100) * container.canvas.size.height,
        };
    };
    return AbsorberInstance;
}());
exports.AbsorberInstance = AbsorberInstance;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Plugins/Absorbers/Absorbers.js":
/*!**********************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Plugins/Absorbers/Absorbers.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Absorbers = void 0;
var AbsorberInstance_1 = __webpack_require__(/*! ./AbsorberInstance */ "./node_modules/tsparticles/dist/Plugins/Absorbers/AbsorberInstance.js");
var Utils_1 = __webpack_require__(/*! ../../Utils */ "./node_modules/tsparticles/dist/Utils/index.js");
var Absorber_1 = __webpack_require__(/*! ./Options/Classes/Absorber */ "./node_modules/tsparticles/dist/Plugins/Absorbers/Options/Classes/Absorber.js");
var Enums_1 = __webpack_require__(/*! ./Enums */ "./node_modules/tsparticles/dist/Plugins/Absorbers/Enums/index.js");
var Absorbers = (function () {
    function Absorbers(container) {
        this.container = container;
        this.array = [];
        this.absorbers = [];
        this.interactivityAbsorbers = [];
    }
    Absorbers.prototype.init = function (options) {
        var _a, _b;
        if (!options) {
            return;
        }
        if (options.absorbers) {
            if (options.absorbers instanceof Array) {
                this.absorbers = options.absorbers.map(function (s) {
                    var tmp = new Absorber_1.Absorber();
                    tmp.load(s);
                    return tmp;
                });
            }
            else {
                if (this.absorbers instanceof Array) {
                    this.absorbers = new Absorber_1.Absorber();
                }
                this.absorbers.load(options.absorbers);
            }
        }
        var interactivityAbsorbers = (_b = (_a = options.interactivity) === null || _a === void 0 ? void 0 : _a.modes) === null || _b === void 0 ? void 0 : _b.absorbers;
        if (interactivityAbsorbers) {
            if (interactivityAbsorbers instanceof Array) {
                this.interactivityAbsorbers = interactivityAbsorbers.map(function (s) {
                    var tmp = new Absorber_1.Absorber();
                    tmp.load(s);
                    return tmp;
                });
            }
            else {
                if (this.interactivityAbsorbers instanceof Array) {
                    this.interactivityAbsorbers = new Absorber_1.Absorber();
                }
                this.interactivityAbsorbers.load(interactivityAbsorbers);
            }
        }
        if (this.absorbers instanceof Array) {
            for (var _i = 0, _c = this.absorbers; _i < _c.length; _i++) {
                var absorberOptions = _c[_i];
                var absorber = new AbsorberInstance_1.AbsorberInstance(this, absorberOptions);
                this.addAbsorber(absorber);
            }
        }
        else {
            var absorberOptions = this.absorbers;
            var absorber = new AbsorberInstance_1.AbsorberInstance(this, absorberOptions);
            this.addAbsorber(absorber);
        }
    };
    Absorbers.prototype.particleUpdate = function (particle, delta) {
        for (var _i = 0, _a = this.array; _i < _a.length; _i++) {
            var absorber = _a[_i];
            absorber.attract(particle, delta);
            if (particle.destroyed) {
                break;
            }
        }
    };
    Absorbers.prototype.draw = function (context) {
        for (var _i = 0, _a = this.array; _i < _a.length; _i++) {
            var absorber = _a[_i];
            context.save();
            absorber.draw(context);
            context.restore();
        }
    };
    Absorbers.prototype.stop = function () {
        this.array = [];
    };
    Absorbers.prototype.resize = function () {
        for (var _i = 0, _a = this.array; _i < _a.length; _i++) {
            var absorber = _a[_i];
            absorber.resize();
        }
    };
    Absorbers.prototype.handleClickMode = function (mode) {
        var container = this.container;
        var absorberOptions = this.absorbers;
        var modeAbsorbers = this.interactivityAbsorbers;
        if (mode === Enums_1.AbsorberClickMode.absorber) {
            var absorbersModeOptions = void 0;
            if (modeAbsorbers instanceof Array) {
                if (modeAbsorbers.length > 0) {
                    absorbersModeOptions = Utils_1.Utils.itemFromArray(modeAbsorbers);
                }
            }
            else {
                absorbersModeOptions = modeAbsorbers;
            }
            var absorbersOptions = absorbersModeOptions !== null && absorbersModeOptions !== void 0 ? absorbersModeOptions : (absorberOptions instanceof Array ? Utils_1.Utils.itemFromArray(absorberOptions) : absorberOptions);
            var aPosition = container.interactivity.mouse.clickPosition;
            var absorber = new AbsorberInstance_1.AbsorberInstance(this, absorbersOptions, aPosition);
            this.addAbsorber(absorber);
        }
    };
    Absorbers.prototype.addAbsorber = function (absorber) {
        this.array.push(absorber);
    };
    Absorbers.prototype.removeAbsorber = function (absorber) {
        var index = this.array.indexOf(absorber);
        if (index >= 0) {
            this.array.splice(index, 1);
        }
    };
    return Absorbers;
}());
exports.Absorbers = Absorbers;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Plugins/Absorbers/AbsorbersPlugin.js":
/*!****************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Plugins/Absorbers/AbsorbersPlugin.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbsorbersPlugin = void 0;
var Absorbers_1 = __webpack_require__(/*! ./Absorbers */ "./node_modules/tsparticles/dist/Plugins/Absorbers/Absorbers.js");
var Utils_1 = __webpack_require__(/*! ../../Utils */ "./node_modules/tsparticles/dist/Utils/index.js");
var Enums_1 = __webpack_require__(/*! ./Enums */ "./node_modules/tsparticles/dist/Plugins/Absorbers/Enums/index.js");
var Absorber_1 = __webpack_require__(/*! ./Options/Classes/Absorber */ "./node_modules/tsparticles/dist/Plugins/Absorbers/Options/Classes/Absorber.js");
var AbsorbersPlugin = (function () {
    function AbsorbersPlugin() {
        this.id = "absorbers";
    }
    AbsorbersPlugin.prototype.getPlugin = function (container) {
        return new Absorbers_1.Absorbers(container);
    };
    AbsorbersPlugin.prototype.needsPlugin = function (options) {
        var _a, _b, _c;
        if (!(options === null || options === void 0 ? void 0 : options.absorbers)) {
            return false;
        }
        var absorbers = options.absorbers;
        var loadAbsorbers = false;
        if (absorbers instanceof Array) {
            if (absorbers.length) {
                loadAbsorbers = true;
            }
        }
        else if (absorbers !== undefined) {
            loadAbsorbers = true;
        }
        else if (((_c = (_b = (_a = options.interactivity) === null || _a === void 0 ? void 0 : _a.events) === null || _b === void 0 ? void 0 : _b.onClick) === null || _c === void 0 ? void 0 : _c.mode) &&
            Utils_1.Utils.isInArray(Enums_1.AbsorberClickMode.absorber, options.interactivity.events.onClick.mode)) {
            loadAbsorbers = true;
        }
        return loadAbsorbers;
    };
    AbsorbersPlugin.prototype.loadOptions = function (options, source) {
        var _a, _b;
        if (!this.needsPlugin(source)) {
            return;
        }
        var optionsCast = options;
        if (optionsCast.absorbers === undefined) {
            optionsCast.absorbers = new Absorber_1.Absorber();
        }
        if (source === null || source === void 0 ? void 0 : source.absorbers) {
            if ((source === null || source === void 0 ? void 0 : source.absorbers) instanceof Array) {
                optionsCast.absorbers = source === null || source === void 0 ? void 0 : source.absorbers.map(function (s) {
                    var tmp = new Absorber_1.Absorber();
                    tmp.load(s);
                    return tmp;
                });
            }
            else {
                if (optionsCast.absorbers instanceof Array) {
                    optionsCast.absorbers = new Absorber_1.Absorber();
                }
                optionsCast.absorbers.load(source === null || source === void 0 ? void 0 : source.absorbers);
            }
        }
        var interactivityAbsorbers = (_b = (_a = source === null || source === void 0 ? void 0 : source.interactivity) === null || _a === void 0 ? void 0 : _a.modes) === null || _b === void 0 ? void 0 : _b.absorbers;
        if (interactivityAbsorbers) {
            if (interactivityAbsorbers instanceof Array) {
                optionsCast.interactivity.modes.absorbers = interactivityAbsorbers.map(function (s) {
                    var tmp = new Absorber_1.Absorber();
                    tmp.load(s);
                    return tmp;
                });
            }
            else {
                if (optionsCast.interactivity.modes.absorbers instanceof Array ||
                    optionsCast.interactivity.modes.absorbers === undefined) {
                    optionsCast.interactivity.modes.absorbers = new Absorber_1.Absorber();
                }
                optionsCast.interactivity.modes.absorbers.load(interactivityAbsorbers);
            }
        }
    };
    return AbsorbersPlugin;
}());
var plugin = new AbsorbersPlugin();
exports.AbsorbersPlugin = plugin;
__exportStar(__webpack_require__(/*! ./Enums */ "./node_modules/tsparticles/dist/Plugins/Absorbers/Enums/index.js"), exports);


/***/ }),

/***/ "./node_modules/tsparticles/dist/Plugins/Absorbers/Enums/AbsorberClickMode.js":
/*!************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Plugins/Absorbers/Enums/AbsorberClickMode.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.AbsorberClickMode = void 0;
var AbsorberClickMode;
(function (AbsorberClickMode) {
    AbsorberClickMode["absorber"] = "absorber";
})(AbsorberClickMode = exports.AbsorberClickMode || (exports.AbsorberClickMode = {}));


/***/ }),

/***/ "./node_modules/tsparticles/dist/Plugins/Absorbers/Enums/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Plugins/Absorbers/Enums/index.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.AbsorberClickMode = void 0;
var AbsorberClickMode_1 = __webpack_require__(/*! ./AbsorberClickMode */ "./node_modules/tsparticles/dist/Plugins/Absorbers/Enums/AbsorberClickMode.js");
Object.defineProperty(exports, "AbsorberClickMode", { enumerable: true, get: function () { return AbsorberClickMode_1.AbsorberClickMode; } });


/***/ }),

/***/ "./node_modules/tsparticles/dist/Plugins/Absorbers/Options/Classes/Absorber.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Plugins/Absorbers/Options/Classes/Absorber.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Absorber = void 0;
var AbsorberSize_1 = __webpack_require__(/*! ./AbsorberSize */ "./node_modules/tsparticles/dist/Plugins/Absorbers/Options/Classes/AbsorberSize.js");
var OptionsColor_1 = __webpack_require__(/*! ../../../../Options/Classes/OptionsColor */ "./node_modules/tsparticles/dist/Options/Classes/OptionsColor.js");
var Absorber = (function () {
    function Absorber() {
        this.color = new OptionsColor_1.OptionsColor();
        this.color.value = "#000000";
        this.opacity = 1;
        this.size = new AbsorberSize_1.AbsorberSize();
    }
    Absorber.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.color !== undefined) {
                this.color = OptionsColor_1.OptionsColor.create(this.color, data.color);
            }
            if (data.opacity !== undefined) {
                this.opacity = data.opacity;
            }
            if (data.position !== undefined) {
                this.position = {
                    x: data.position.x,
                    y: data.position.y,
                };
            }
            if (data.size !== undefined) {
                this.size.load(data.size);
            }
        }
    };
    return Absorber;
}());
exports.Absorber = Absorber;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Plugins/Absorbers/Options/Classes/AbsorberRandomSize.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Plugins/Absorbers/Options/Classes/AbsorberRandomSize.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.AbsorberRandomSize = void 0;
var AbsorberRandomSize = (function () {
    function AbsorberRandomSize() {
        this.enable = false;
        this.minimumValue = 1;
    }
    AbsorberRandomSize.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.enable !== undefined) {
                this.enable = data.enable;
            }
            if (data.minimumValue !== undefined) {
                this.minimumValue = data.minimumValue;
            }
        }
    };
    return AbsorberRandomSize;
}());
exports.AbsorberRandomSize = AbsorberRandomSize;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Plugins/Absorbers/Options/Classes/AbsorberSize.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Plugins/Absorbers/Options/Classes/AbsorberSize.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.AbsorberSize = void 0;
var AbsorberRandomSize_1 = __webpack_require__(/*! ./AbsorberRandomSize */ "./node_modules/tsparticles/dist/Plugins/Absorbers/Options/Classes/AbsorberRandomSize.js");
var AbsorberSize = (function () {
    function AbsorberSize() {
        this.density = 5;
        this.random = new AbsorberRandomSize_1.AbsorberRandomSize();
        this.value = 50;
    }
    AbsorberSize.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.density !== undefined) {
                this.density = data.density;
            }
            if (data.value !== undefined) {
                this.value = data.value;
            }
            if (data.random !== undefined) {
                if (typeof data.random === "boolean") {
                    this.random.load({ enable: data.random });
                }
                else {
                    this.random.load(data.random);
                }
            }
            if (data.limit !== undefined) {
                this.limit = data.limit;
            }
        }
    };
    return AbsorberSize;
}());
exports.AbsorberSize = AbsorberSize;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Plugins/Emitters/EmitterInstance.js":
/*!***************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Plugins/Emitters/EmitterInstance.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.EmitterInstance = void 0;
var Utils_1 = __webpack_require__(/*! ../../Utils */ "./node_modules/tsparticles/dist/Utils/index.js");
var Enums_1 = __webpack_require__(/*! ../../Enums */ "./node_modules/tsparticles/dist/Enums/index.js");
var EmitterSize_1 = __webpack_require__(/*! ./Options/Classes/EmitterSize */ "./node_modules/tsparticles/dist/Plugins/Emitters/Options/Classes/EmitterSize.js");
var EmitterInstance = (function () {
    function EmitterInstance(emitters, emitterOptions, position) {
        var _a, _b, _c;
        this.emitters = emitters;
        this.container = emitters.container;
        this.initialPosition = position;
        this.emitterOptions = Utils_1.Utils.deepExtend({}, emitterOptions);
        this.position = (_a = this.initialPosition) !== null && _a !== void 0 ? _a : this.calcPosition();
        var particlesOptions = Utils_1.Utils.deepExtend({}, this.emitterOptions.particles);
        if (particlesOptions === undefined) {
            particlesOptions = {};
        }
        if (particlesOptions.move === undefined) {
            particlesOptions.move = {};
        }
        if (particlesOptions.move.direction === undefined) {
            particlesOptions.move.direction = this.emitterOptions.direction;
        }
        this.particlesOptions = particlesOptions;
        this.size = (_b = this.emitterOptions.size) !== null && _b !== void 0 ? _b : (function () {
            var size = new EmitterSize_1.EmitterSize();
            size.load({
                height: 0,
                mode: Enums_1.SizeMode.percent,
                width: 0,
            });
            return size;
        })();
        this.lifeCount = (_c = this.emitterOptions.life.count) !== null && _c !== void 0 ? _c : -1;
        this.play();
    }
    EmitterInstance.prototype.play = function () {
        var _this = this;
        if (this.lifeCount > 0 || !this.emitterOptions.life.count) {
            if (this.startInterval === undefined) {
                this.startInterval = window.setInterval(function () {
                    _this.emit();
                }, 1000 * this.emitterOptions.rate.delay);
            }
            if (this.lifeCount > 0) {
                this.prepareToDie();
            }
        }
    };
    EmitterInstance.prototype.pause = function () {
        var interval = this.startInterval;
        if (interval !== undefined) {
            clearInterval(interval);
            delete this.startInterval;
        }
    };
    EmitterInstance.prototype.resize = function () {
        var initialPosition = this.initialPosition;
        this.position =
            initialPosition && Utils_1.Utils.isPointInside(initialPosition, this.container.canvas.size)
                ? initialPosition
                : this.calcPosition();
    };
    EmitterInstance.prototype.prepareToDie = function () {
        var _this = this;
        var _a;
        if (this.lifeCount > 0 && ((_a = this.emitterOptions.life) === null || _a === void 0 ? void 0 : _a.duration) !== undefined) {
            window.setTimeout(function () {
                var _a;
                _this.pause();
                _this.lifeCount--;
                if (_this.lifeCount > 0) {
                    _this.position = _this.calcPosition();
                    window.setTimeout(function () {
                        _this.play();
                    }, (_a = _this.emitterOptions.life.delay) !== null && _a !== void 0 ? _a : 0);
                }
                else {
                    _this.destroy();
                }
            }, this.emitterOptions.life.duration * 1000);
        }
    };
    EmitterInstance.prototype.destroy = function () {
        this.emitters.removeEmitter(this);
    };
    EmitterInstance.prototype.calcPosition = function () {
        var _a;
        var container = this.container;
        var percentPosition = (_a = this.emitterOptions.position) !== null && _a !== void 0 ? _a : {
            x: Math.random() * 100,
            y: Math.random() * 100,
        };
        return {
            x: (percentPosition.x / 100) * container.canvas.size.width,
            y: (percentPosition.y / 100) * container.canvas.size.height,
        };
    };
    EmitterInstance.prototype.emit = function () {
        var container = this.container;
        var position = this.position;
        var offset = {
            x: this.size.mode === Enums_1.SizeMode.percent
                ? (container.canvas.size.width * this.size.width) / 100
                : this.size.width,
            y: this.size.mode === Enums_1.SizeMode.percent
                ? (container.canvas.size.height * this.size.height) / 100
                : this.size.height,
        };
        for (var i = 0; i < this.emitterOptions.rate.quantity; i++) {
            container.particles.addParticle({
                x: position.x + offset.x * (Math.random() - 0.5),
                y: position.y + offset.y * (Math.random() - 0.5),
            }, this.particlesOptions);
        }
    };
    return EmitterInstance;
}());
exports.EmitterInstance = EmitterInstance;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Plugins/Emitters/Emitters.js":
/*!********************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Plugins/Emitters/Emitters.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Emitters = void 0;
var EmitterInstance_1 = __webpack_require__(/*! ./EmitterInstance */ "./node_modules/tsparticles/dist/Plugins/Emitters/EmitterInstance.js");
var Utils_1 = __webpack_require__(/*! ../../Utils */ "./node_modules/tsparticles/dist/Utils/index.js");
var Emitter_1 = __webpack_require__(/*! ./Options/Classes/Emitter */ "./node_modules/tsparticles/dist/Plugins/Emitters/Options/Classes/Emitter.js");
var Enums_1 = __webpack_require__(/*! ./Enums */ "./node_modules/tsparticles/dist/Plugins/Emitters/Enums/index.js");
var Emitters = (function () {
    function Emitters(container) {
        this.container = container;
        this.array = [];
        this.emitters = [];
        this.interactivityEmitters = [];
    }
    Emitters.prototype.init = function (options) {
        var _a, _b;
        if (!options) {
            return;
        }
        if (options.emitters) {
            if (options.emitters instanceof Array) {
                this.emitters = options.emitters.map(function (s) {
                    var tmp = new Emitter_1.Emitter();
                    tmp.load(s);
                    return tmp;
                });
            }
            else {
                if (this.emitters instanceof Array) {
                    this.emitters = new Emitter_1.Emitter();
                }
                this.emitters.load(options.emitters);
            }
        }
        var interactivityEmitters = (_b = (_a = options.interactivity) === null || _a === void 0 ? void 0 : _a.modes) === null || _b === void 0 ? void 0 : _b.emitters;
        if (interactivityEmitters) {
            if (interactivityEmitters instanceof Array) {
                this.interactivityEmitters = interactivityEmitters.map(function (s) {
                    var tmp = new Emitter_1.Emitter();
                    tmp.load(s);
                    return tmp;
                });
            }
            else {
                if (this.interactivityEmitters instanceof Array) {
                    this.interactivityEmitters = new Emitter_1.Emitter();
                }
                this.interactivityEmitters.load(interactivityEmitters);
            }
        }
        if (this.emitters instanceof Array) {
            for (var _i = 0, _c = this.emitters; _i < _c.length; _i++) {
                var emitterOptions = _c[_i];
                var emitter = new EmitterInstance_1.EmitterInstance(this, emitterOptions);
                this.addEmitter(emitter);
            }
        }
        else {
            var emitterOptions = this.emitters;
            var emitter = new EmitterInstance_1.EmitterInstance(this, emitterOptions);
            this.addEmitter(emitter);
        }
    };
    Emitters.prototype.play = function () {
        for (var _i = 0, _a = this.array; _i < _a.length; _i++) {
            var emitter = _a[_i];
            emitter.play();
        }
    };
    Emitters.prototype.pause = function () {
        for (var _i = 0, _a = this.array; _i < _a.length; _i++) {
            var emitter = _a[_i];
            emitter.pause();
        }
    };
    Emitters.prototype.stop = function () {
        this.array = [];
    };
    Emitters.prototype.handleClickMode = function (mode) {
        var container = this.container;
        var emitterOptions = this.emitters;
        var modeEmitters = this.interactivityEmitters;
        if (mode === Enums_1.EmitterClickMode.emitter) {
            var emitterModeOptions = void 0;
            if (modeEmitters instanceof Array) {
                if (modeEmitters.length > 0) {
                    emitterModeOptions = Utils_1.Utils.itemFromArray(modeEmitters);
                }
            }
            else {
                emitterModeOptions = modeEmitters;
            }
            var emittersOptions = emitterModeOptions !== null && emitterModeOptions !== void 0 ? emitterModeOptions : (emitterOptions instanceof Array ? Utils_1.Utils.itemFromArray(emitterOptions) : emitterOptions);
            var ePosition = container.interactivity.mouse.clickPosition;
            var emitter = new EmitterInstance_1.EmitterInstance(this, Utils_1.Utils.deepExtend({}, emittersOptions), ePosition);
            this.addEmitter(emitter);
        }
    };
    Emitters.prototype.resize = function () {
        for (var _i = 0, _a = this.array; _i < _a.length; _i++) {
            var emitter = _a[_i];
            emitter.resize();
        }
    };
    Emitters.prototype.addEmitter = function (emitter) {
        this.array.push(emitter);
    };
    Emitters.prototype.removeEmitter = function (emitter) {
        var index = this.array.indexOf(emitter);
        if (index >= 0) {
            this.array.splice(index, 1);
        }
    };
    return Emitters;
}());
exports.Emitters = Emitters;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Plugins/Emitters/EmittersPlugin.js":
/*!**************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Plugins/Emitters/EmittersPlugin.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmittersPlugin = void 0;
var Utils_1 = __webpack_require__(/*! ../../Utils */ "./node_modules/tsparticles/dist/Utils/index.js");
var Emitters_1 = __webpack_require__(/*! ./Emitters */ "./node_modules/tsparticles/dist/Plugins/Emitters/Emitters.js");
var Enums_1 = __webpack_require__(/*! ./Enums */ "./node_modules/tsparticles/dist/Plugins/Emitters/Enums/index.js");
var Emitter_1 = __webpack_require__(/*! ./Options/Classes/Emitter */ "./node_modules/tsparticles/dist/Plugins/Emitters/Options/Classes/Emitter.js");
var EmittersPlugin = (function () {
    function EmittersPlugin() {
        this.id = "emitters";
    }
    EmittersPlugin.prototype.getPlugin = function (container) {
        return new Emitters_1.Emitters(container);
    };
    EmittersPlugin.prototype.needsPlugin = function (options) {
        var _a, _b, _c;
        if (!(options === null || options === void 0 ? void 0 : options.emitters)) {
            return false;
        }
        var emitters = options.emitters;
        var loadEmitters = false;
        if (emitters instanceof Array) {
            if (emitters.length) {
                loadEmitters = true;
            }
        }
        else if (emitters !== undefined) {
            loadEmitters = true;
        }
        else if (((_c = (_b = (_a = options.interactivity) === null || _a === void 0 ? void 0 : _a.events) === null || _b === void 0 ? void 0 : _b.onClick) === null || _c === void 0 ? void 0 : _c.mode) &&
            Utils_1.Utils.isInArray(Enums_1.EmitterClickMode.emitter, options.interactivity.events.onClick.mode)) {
            loadEmitters = true;
        }
        return loadEmitters;
    };
    EmittersPlugin.prototype.loadOptions = function (options, source) {
        var _a, _b;
        if (!this.needsPlugin(source)) {
            return;
        }
        var optionsCast = options;
        if (optionsCast.emitters === undefined) {
            optionsCast.emitters = new Emitter_1.Emitter();
        }
        if (source === null || source === void 0 ? void 0 : source.emitters) {
            if ((source === null || source === void 0 ? void 0 : source.emitters) instanceof Array) {
                optionsCast.emitters = source === null || source === void 0 ? void 0 : source.emitters.map(function (s) {
                    var tmp = new Emitter_1.Emitter();
                    tmp.load(s);
                    return tmp;
                });
            }
            else {
                if (optionsCast.emitters instanceof Array) {
                    optionsCast.emitters = new Emitter_1.Emitter();
                }
                optionsCast.emitters.load(source === null || source === void 0 ? void 0 : source.emitters);
            }
        }
        var interactivityEmitters = (_b = (_a = source === null || source === void 0 ? void 0 : source.interactivity) === null || _a === void 0 ? void 0 : _a.modes) === null || _b === void 0 ? void 0 : _b.emitters;
        if (interactivityEmitters) {
            if (interactivityEmitters instanceof Array) {
                optionsCast.interactivity.modes.emitters = interactivityEmitters.map(function (s) {
                    var tmp = new Emitter_1.Emitter();
                    tmp.load(s);
                    return tmp;
                });
            }
            else {
                if (optionsCast.interactivity.modes.emitters instanceof Array ||
                    optionsCast.interactivity.modes.emitters === undefined) {
                    optionsCast.interactivity.modes.emitters = new Emitter_1.Emitter();
                }
                optionsCast.interactivity.modes.emitters.load(interactivityEmitters);
            }
        }
    };
    return EmittersPlugin;
}());
var plugin = new EmittersPlugin();
exports.EmittersPlugin = plugin;
__exportStar(__webpack_require__(/*! ./Enums */ "./node_modules/tsparticles/dist/Plugins/Emitters/Enums/index.js"), exports);


/***/ }),

/***/ "./node_modules/tsparticles/dist/Plugins/Emitters/Enums/EmitterClickMode.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Plugins/Emitters/Enums/EmitterClickMode.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.EmitterClickMode = void 0;
var EmitterClickMode;
(function (EmitterClickMode) {
    EmitterClickMode["emitter"] = "emitter";
})(EmitterClickMode = exports.EmitterClickMode || (exports.EmitterClickMode = {}));


/***/ }),

/***/ "./node_modules/tsparticles/dist/Plugins/Emitters/Enums/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Plugins/Emitters/Enums/index.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.EmitterClickMode = void 0;
var EmitterClickMode_1 = __webpack_require__(/*! ./EmitterClickMode */ "./node_modules/tsparticles/dist/Plugins/Emitters/Enums/EmitterClickMode.js");
Object.defineProperty(exports, "EmitterClickMode", { enumerable: true, get: function () { return EmitterClickMode_1.EmitterClickMode; } });


/***/ }),

/***/ "./node_modules/tsparticles/dist/Plugins/Emitters/Options/Classes/Emitter.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Plugins/Emitters/Options/Classes/Emitter.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Emitter = void 0;
var Enums_1 = __webpack_require__(/*! ../../../../Enums */ "./node_modules/tsparticles/dist/Enums/index.js");
var EmitterRate_1 = __webpack_require__(/*! ./EmitterRate */ "./node_modules/tsparticles/dist/Plugins/Emitters/Options/Classes/EmitterRate.js");
var EmitterLife_1 = __webpack_require__(/*! ./EmitterLife */ "./node_modules/tsparticles/dist/Plugins/Emitters/Options/Classes/EmitterLife.js");
var Utils_1 = __webpack_require__(/*! ../../../../Utils */ "./node_modules/tsparticles/dist/Utils/index.js");
var EmitterSize_1 = __webpack_require__(/*! ./EmitterSize */ "./node_modules/tsparticles/dist/Plugins/Emitters/Options/Classes/EmitterSize.js");
var Emitter = (function () {
    function Emitter() {
        this.direction = Enums_1.MoveDirection.none;
        this.life = new EmitterLife_1.EmitterLife();
        this.rate = new EmitterRate_1.EmitterRate();
    }
    Emitter.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.size !== undefined) {
                if (this.size === undefined) {
                    this.size = new EmitterSize_1.EmitterSize();
                }
                this.size.load(data.size);
            }
            if (data.direction !== undefined) {
                this.direction = data.direction;
            }
            this.life.load(data.life);
            if (data.particles !== undefined) {
                this.particles = Utils_1.Utils.deepExtend({}, data.particles);
            }
            this.rate.load(data.rate);
            if (data.position !== undefined) {
                this.position = {
                    x: data.position.x,
                    y: data.position.y,
                };
            }
        }
    };
    return Emitter;
}());
exports.Emitter = Emitter;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Plugins/Emitters/Options/Classes/EmitterLife.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Plugins/Emitters/Options/Classes/EmitterLife.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.EmitterLife = void 0;
var EmitterLife = (function () {
    function EmitterLife() {
    }
    EmitterLife.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.count !== undefined) {
                this.count = data.count;
            }
            if (data.delay !== undefined) {
                this.delay = data.delay;
            }
            if (data.duration !== undefined) {
                this.duration = data.duration;
            }
        }
    };
    return EmitterLife;
}());
exports.EmitterLife = EmitterLife;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Plugins/Emitters/Options/Classes/EmitterRate.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Plugins/Emitters/Options/Classes/EmitterRate.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.EmitterRate = void 0;
var EmitterRate = (function () {
    function EmitterRate() {
        this.quantity = 1;
        this.delay = 0.1;
    }
    EmitterRate.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.quantity !== undefined) {
                this.quantity = data.quantity;
            }
            if (data.delay !== undefined) {
                this.delay = data.delay;
            }
        }
    };
    return EmitterRate;
}());
exports.EmitterRate = EmitterRate;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Plugins/Emitters/Options/Classes/EmitterSize.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Plugins/Emitters/Options/Classes/EmitterSize.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.EmitterSize = void 0;
var Enums_1 = __webpack_require__(/*! ../../../../Enums */ "./node_modules/tsparticles/dist/Enums/index.js");
var EmitterSize = (function () {
    function EmitterSize() {
        this.mode = Enums_1.SizeMode.percent;
        this.height = 0;
        this.width = 0;
    }
    EmitterSize.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.mode !== undefined) {
                this.mode = data.mode;
            }
            if (data.height !== undefined) {
                this.height = data.height;
            }
            if (data.width !== undefined) {
                this.width = data.width;
            }
        }
    };
    return EmitterSize;
}());
exports.EmitterSize = EmitterSize;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Plugins/PolygonMask/Enums/InlineArrangement.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Plugins/PolygonMask/Enums/InlineArrangement.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.InlineArrangement = void 0;
var InlineArrangement;
(function (InlineArrangement) {
    InlineArrangement["equidistant"] = "equidistant";
    InlineArrangement["onePerPoint"] = "one-per-point";
    InlineArrangement["perPoint"] = "per-point";
    InlineArrangement["randomLength"] = "random-length";
    InlineArrangement["randomPoint"] = "random-point";
})(InlineArrangement = exports.InlineArrangement || (exports.InlineArrangement = {}));


/***/ }),

/***/ "./node_modules/tsparticles/dist/Plugins/PolygonMask/Enums/MoveType.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Plugins/PolygonMask/Enums/MoveType.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.MoveType = void 0;
var MoveType;
(function (MoveType) {
    MoveType["path"] = "path";
    MoveType["radius"] = "radius";
})(MoveType = exports.MoveType || (exports.MoveType = {}));


/***/ }),

/***/ "./node_modules/tsparticles/dist/Plugins/PolygonMask/Enums/Type.js":
/*!*************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Plugins/PolygonMask/Enums/Type.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Type = void 0;
var Type;
(function (Type) {
    Type["inline"] = "inline";
    Type["inside"] = "inside";
    Type["outside"] = "outside";
    Type["none"] = "none";
})(Type = exports.Type || (exports.Type = {}));


/***/ }),

/***/ "./node_modules/tsparticles/dist/Plugins/PolygonMask/Enums/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Plugins/PolygonMask/Enums/index.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Type = exports.MoveType = exports.InlineArrangement = void 0;
var InlineArrangement_1 = __webpack_require__(/*! ./InlineArrangement */ "./node_modules/tsparticles/dist/Plugins/PolygonMask/Enums/InlineArrangement.js");
Object.defineProperty(exports, "InlineArrangement", { enumerable: true, get: function () { return InlineArrangement_1.InlineArrangement; } });
var MoveType_1 = __webpack_require__(/*! ./MoveType */ "./node_modules/tsparticles/dist/Plugins/PolygonMask/Enums/MoveType.js");
Object.defineProperty(exports, "MoveType", { enumerable: true, get: function () { return MoveType_1.MoveType; } });
var Type_1 = __webpack_require__(/*! ./Type */ "./node_modules/tsparticles/dist/Plugins/PolygonMask/Enums/Type.js");
Object.defineProperty(exports, "Type", { enumerable: true, get: function () { return Type_1.Type; } });


/***/ }),

/***/ "./node_modules/tsparticles/dist/Plugins/PolygonMask/Options/Classes/Draw.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Plugins/PolygonMask/Options/Classes/Draw.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Draw = void 0;
var DrawStroke_1 = __webpack_require__(/*! ./DrawStroke */ "./node_modules/tsparticles/dist/Plugins/PolygonMask/Options/Classes/DrawStroke.js");
var OptionsColor_1 = __webpack_require__(/*! ../../../../Options/Classes/OptionsColor */ "./node_modules/tsparticles/dist/Options/Classes/OptionsColor.js");
var Draw = (function () {
    function Draw() {
        this.enable = false;
        this.stroke = new DrawStroke_1.DrawStroke();
    }
    Object.defineProperty(Draw.prototype, "lineWidth", {
        get: function () {
            return this.stroke.width;
        },
        set: function (value) {
            this.stroke.width = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Draw.prototype, "lineColor", {
        get: function () {
            return this.stroke.color;
        },
        set: function (value) {
            this.stroke.color = OptionsColor_1.OptionsColor.create(this.stroke.color, value);
        },
        enumerable: false,
        configurable: true
    });
    Draw.prototype.load = function (data) {
        var _a;
        if (data !== undefined) {
            if (data.enable !== undefined) {
                this.enable = data.enable;
            }
            var stroke = (_a = data.stroke) !== null && _a !== void 0 ? _a : {
                color: data.lineColor,
                width: data.lineWidth,
            };
            this.stroke.load(stroke);
        }
    };
    return Draw;
}());
exports.Draw = Draw;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Plugins/PolygonMask/Options/Classes/DrawStroke.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Plugins/PolygonMask/Options/Classes/DrawStroke.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DrawStroke = void 0;
var OptionsColor_1 = __webpack_require__(/*! ../../../../Options/Classes/OptionsColor */ "./node_modules/tsparticles/dist/Options/Classes/OptionsColor.js");
var Utils_1 = __webpack_require__(/*! ../../../../Utils */ "./node_modules/tsparticles/dist/Utils/index.js");
var DrawStroke = (function () {
    function DrawStroke() {
        this.color = new OptionsColor_1.OptionsColor();
        this.width = 0.5;
        this.opacity = 1;
    }
    DrawStroke.prototype.load = function (data) {
        var _a;
        if (data !== undefined) {
            this.color = OptionsColor_1.OptionsColor.create(this.color, data.color);
            if (typeof this.color.value === "string") {
                this.opacity = (_a = Utils_1.ColorUtils.stringToAlpha(this.color.value)) !== null && _a !== void 0 ? _a : this.opacity;
            }
            if (data.opacity !== undefined) {
                this.opacity = data.opacity;
            }
            if (data.width !== undefined) {
                this.width = data.width;
            }
        }
    };
    return DrawStroke;
}());
exports.DrawStroke = DrawStroke;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Plugins/PolygonMask/Options/Classes/Inline.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Plugins/PolygonMask/Options/Classes/Inline.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Inline = void 0;
var InlineArrangement_1 = __webpack_require__(/*! ../../Enums/InlineArrangement */ "./node_modules/tsparticles/dist/Plugins/PolygonMask/Enums/InlineArrangement.js");
var Inline = (function () {
    function Inline() {
        this.arrangement = InlineArrangement_1.InlineArrangement.onePerPoint;
    }
    Inline.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.arrangement !== undefined) {
                this.arrangement = data.arrangement;
            }
        }
    };
    return Inline;
}());
exports.Inline = Inline;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Plugins/PolygonMask/Options/Classes/LocalSvg.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Plugins/PolygonMask/Options/Classes/LocalSvg.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalSvg = void 0;
var LocalSvg = (function () {
    function LocalSvg() {
        this.path = [];
        this.size = {
            height: 0,
            width: 0,
        };
    }
    LocalSvg.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.path !== undefined) {
                this.path = data.path;
            }
            if (data.size !== undefined) {
                if (data.size.width !== undefined) {
                    this.size.width = data.size.width;
                }
                if (data.size.height !== undefined) {
                    this.size.height = data.size.height;
                }
            }
        }
    };
    return LocalSvg;
}());
exports.LocalSvg = LocalSvg;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Plugins/PolygonMask/Options/Classes/Move.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Plugins/PolygonMask/Options/Classes/Move.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Move = void 0;
var MoveType_1 = __webpack_require__(/*! ../../Enums/MoveType */ "./node_modules/tsparticles/dist/Plugins/PolygonMask/Enums/MoveType.js");
var Move = (function () {
    function Move() {
        this.radius = 10;
        this.type = MoveType_1.MoveType.path;
    }
    Move.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.radius !== undefined) {
                this.radius = data.radius;
            }
            if (data.type !== undefined) {
                this.type = data.type;
            }
        }
    };
    return Move;
}());
exports.Move = Move;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Plugins/PolygonMask/Options/Classes/PolygonMask.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Plugins/PolygonMask/Options/Classes/PolygonMask.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.PolygonMask = void 0;
var Type_1 = __webpack_require__(/*! ../../Enums/Type */ "./node_modules/tsparticles/dist/Plugins/PolygonMask/Enums/Type.js");
var Draw_1 = __webpack_require__(/*! ./Draw */ "./node_modules/tsparticles/dist/Plugins/PolygonMask/Options/Classes/Draw.js");
var Move_1 = __webpack_require__(/*! ./Move */ "./node_modules/tsparticles/dist/Plugins/PolygonMask/Options/Classes/Move.js");
var Inline_1 = __webpack_require__(/*! ./Inline */ "./node_modules/tsparticles/dist/Plugins/PolygonMask/Options/Classes/Inline.js");
var LocalSvg_1 = __webpack_require__(/*! ./LocalSvg */ "./node_modules/tsparticles/dist/Plugins/PolygonMask/Options/Classes/LocalSvg.js");
var PolygonMask = (function () {
    function PolygonMask() {
        this.draw = new Draw_1.Draw();
        this.enable = false;
        this.inline = new Inline_1.Inline();
        this.move = new Move_1.Move();
        this.scale = 1;
        this.type = Type_1.Type.none;
    }
    Object.defineProperty(PolygonMask.prototype, "inlineArrangement", {
        get: function () {
            return this.inline.arrangement;
        },
        set: function (value) {
            this.inline.arrangement = value;
        },
        enumerable: false,
        configurable: true
    });
    PolygonMask.prototype.load = function (data) {
        var _a;
        if (data !== undefined) {
            this.draw.load(data.draw);
            var inline = (_a = data.inline) !== null && _a !== void 0 ? _a : {
                arrangement: data.inlineArrangement,
            };
            if (inline !== undefined) {
                this.inline.load(inline);
            }
            this.move.load(data.move);
            if (data.scale !== undefined) {
                this.scale = data.scale;
            }
            if (data.type !== undefined) {
                this.type = data.type;
            }
            if (data.enable !== undefined) {
                this.enable = data.enable;
            }
            else {
                this.enable = this.type !== Type_1.Type.none;
            }
            if (data.url !== undefined) {
                this.url = data.url;
            }
            if (data.data !== undefined) {
                if (typeof data.data === "string") {
                    this.data = data.data;
                }
                else {
                    this.data = new LocalSvg_1.LocalSvg();
                    this.data.load(data.data);
                }
            }
            if (data.position !== undefined) {
                this.position = {
                    x: data.position.x,
                    y: data.position.y,
                };
            }
        }
    };
    return PolygonMask;
}());
exports.PolygonMask = PolygonMask;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Plugins/PolygonMask/PolygonMaskInstance.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Plugins/PolygonMask/PolygonMaskInstance.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolygonMaskInstance = void 0;
var Enums_1 = __webpack_require__(/*! ./Enums */ "./node_modules/tsparticles/dist/Plugins/PolygonMask/Enums/index.js");
var Utils_1 = __webpack_require__(/*! ../../Utils */ "./node_modules/tsparticles/dist/Utils/index.js");
var PolygonMask_1 = __webpack_require__(/*! ./Options/Classes/PolygonMask */ "./node_modules/tsparticles/dist/Plugins/PolygonMask/Options/Classes/PolygonMask.js");
var PolygonMaskInstance = (function () {
    function PolygonMaskInstance(container) {
        this.container = container;
        this.dimension = {
            height: 0,
            width: 0,
        };
        this.path2DSupported = Object.prototype.hasOwnProperty.call(window, "Path2D");
        this.options = new PolygonMask_1.PolygonMask();
        this.polygonMaskMoveRadius = this.options.move.radius * container.retina.pixelRatio;
    }
    PolygonMaskInstance.polygonBounce = function (particle) {
        particle.velocity.horizontal = -particle.velocity.horizontal + particle.velocity.vertical / 2;
        particle.velocity.vertical = -particle.velocity.vertical + particle.velocity.horizontal / 2;
    };
    PolygonMaskInstance.drawPolygonMask = function (context, rawData, stroke) {
        var color = Utils_1.ColorUtils.colorToRgb(stroke.color);
        if (color) {
            context.beginPath();
            context.moveTo(rawData[0].x, rawData[0].y);
            for (var i = 1; i < rawData.length; i++) {
                context.lineTo(rawData[i].x, rawData[i].y);
            }
            context.closePath();
            context.strokeStyle = Utils_1.ColorUtils.getStyleFromRgb(color);
            context.lineWidth = stroke.width;
            context.stroke();
        }
    };
    PolygonMaskInstance.drawPolygonMaskPath = function (context, path, stroke, position) {
        context.translate(position.x, position.y);
        var color = Utils_1.ColorUtils.colorToRgb(stroke.color);
        if (color) {
            context.strokeStyle = Utils_1.ColorUtils.getStyleFromRgb(color, stroke.opacity);
            context.lineWidth = stroke.width;
            context.stroke(path);
        }
    };
    PolygonMaskInstance.prototype.initAsync = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var polygonMaskOptions;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.options.load(options === null || options === void 0 ? void 0 : options.polygon);
                        polygonMaskOptions = this.options;
                        this.polygonMaskMoveRadius = polygonMaskOptions.move.radius * this.container.retina.pixelRatio;
                        if (!polygonMaskOptions.enable) return [3, 2];
                        return [4, this.initRawData()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2];
                }
            });
        });
    };
    PolygonMaskInstance.prototype.checkInsidePolygon = function (position) {
        var container = this.container;
        var polygonMaskOptions = this.options;
        if (!polygonMaskOptions.enable ||
            polygonMaskOptions.type === Enums_1.Type.none ||
            polygonMaskOptions.type === Enums_1.Type.inline) {
            return true;
        }
        if (!this.raw) {
            throw new Error(Utils_1.Constants.noPolygonFound);
        }
        var x = position ? position.x : Math.random() * container.canvas.size.width;
        var y = position ? position.y : Math.random() * container.canvas.size.height;
        var inside = false;
        for (var i = 0, j = this.raw.length - 1; i < this.raw.length; j = i++) {
            var xi = this.raw[i].x;
            var yi = this.raw[i].y;
            var xj = this.raw[j].x;
            var yj = this.raw[j].y;
            var intersect = yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi;
            if (intersect) {
                inside = !inside;
            }
        }
        if (polygonMaskOptions.type === Enums_1.Type.inside) {
            return inside;
        }
        else if (polygonMaskOptions.type === Enums_1.Type.outside) {
            return !inside;
        }
        return false;
    };
    PolygonMaskInstance.prototype.resize = function () {
        var _this = this;
        var container = this.container;
        var polygonMaskOptions = this.options;
        if (polygonMaskOptions.enable && polygonMaskOptions.type !== Enums_1.Type.none) {
            if (this.redrawTimeout) {
                clearTimeout(this.redrawTimeout);
            }
            this.redrawTimeout = window.setTimeout(function () { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.initRawData()];
                        case 1:
                            _a.sent();
                            container.particles.redraw();
                            return [2];
                    }
                });
            }); }, 250);
        }
    };
    PolygonMaskInstance.prototype.stop = function () {
        delete this.raw;
        delete this.paths;
    };
    PolygonMaskInstance.prototype.randomPointInPolygon = function () {
        var container = this.container;
        var polygonMaskOptions = this.options;
        var position;
        if (polygonMaskOptions.type === Enums_1.Type.inline) {
            switch (polygonMaskOptions.inline.arrangement) {
                case Enums_1.InlineArrangement.randomPoint:
                    position = this.getRandomPointOnPolygonPath();
                    break;
                case Enums_1.InlineArrangement.randomLength:
                    position = this.getRandomPointOnPolygonPathByLength();
                    break;
                case Enums_1.InlineArrangement.equidistant:
                    position = this.getEquidistantPointOnPolygonPathByIndex(container.particles.count);
                    break;
                case Enums_1.InlineArrangement.onePerPoint:
                case Enums_1.InlineArrangement.perPoint:
                default:
                    position = this.getPointOnPolygonPathByIndex(container.particles.count);
            }
        }
        else {
            position = {
                x: Math.random() * container.canvas.size.width,
                y: Math.random() * container.canvas.size.height,
            };
        }
        if (this.checkInsidePolygon(position)) {
            return position;
        }
        else {
            return this.randomPointInPolygon();
        }
    };
    PolygonMaskInstance.prototype.particlesInitialization = function () {
        var polygonMaskOptions = this.options;
        if (polygonMaskOptions.enable &&
            polygonMaskOptions.type === Enums_1.Type.inline &&
            (polygonMaskOptions.inline.arrangement === Enums_1.InlineArrangement.onePerPoint ||
                polygonMaskOptions.inline.arrangement === Enums_1.InlineArrangement.perPoint)) {
            this.drawPointsOnPolygonPath();
            return true;
        }
        return false;
    };
    PolygonMaskInstance.prototype.particlePosition = function (position, particle) {
        var _a, _b;
        var polygonMaskOptions = this.options;
        if (polygonMaskOptions.enable && ((_b = (_a = this.raw) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0) > 0) {
            var pos = { x: 0, y: 0 };
            if (position) {
                pos.x = position.x;
                pos.y = position.y;
            }
            else {
                var randomPoint = this.randomPointInPolygon();
                pos.x = randomPoint.x;
                pos.y = randomPoint.y;
            }
            if (polygonMaskOptions.type === Enums_1.Type.inline && particle) {
                particle.initialPosition = {
                    x: pos.x,
                    y: pos.y,
                };
            }
            return pos;
        }
    };
    PolygonMaskInstance.prototype.particleBounce = function (particle, _delta) {
        var polygonMaskOptions = this.options;
        if (polygonMaskOptions.enable &&
            polygonMaskOptions.type !== Enums_1.Type.none &&
            polygonMaskOptions.type !== Enums_1.Type.inline) {
            if (!this.checkInsidePolygon(particle.getPosition())) {
                PolygonMaskInstance.polygonBounce(particle);
                return true;
            }
        }
        else if (polygonMaskOptions.enable && polygonMaskOptions.type === Enums_1.Type.inline) {
            if (particle.initialPosition) {
                var dist = Utils_1.Utils.getDistance(particle.initialPosition, particle.getPosition());
                if (dist > this.polygonMaskMoveRadius) {
                    PolygonMaskInstance.polygonBounce(particle);
                    return true;
                }
            }
        }
        return false;
    };
    PolygonMaskInstance.prototype.clickPositionValid = function (position) {
        var polygonMaskOptions = this.options;
        if (polygonMaskOptions.enable &&
            polygonMaskOptions.type !== Enums_1.Type.none &&
            polygonMaskOptions.type !== Enums_1.Type.inline) {
            if (this.checkInsidePolygon(position)) {
                return true;
            }
        }
        return false;
    };
    PolygonMaskInstance.prototype.downloadSvgPathToPolygon = function (svgUrl, force) {
        return __awaiter(this, void 0, void 0, function () {
            var polygonMaskOptions, url, forceDownload, req, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        polygonMaskOptions = this.options;
                        url = svgUrl || polygonMaskOptions.url;
                        forceDownload = force !== null && force !== void 0 ? force : false;
                        if (!url || (this.paths !== undefined && !forceDownload)) {
                            return [2, this.raw];
                        }
                        return [4, fetch(url)];
                    case 1:
                        req = _b.sent();
                        if (!req.ok) return [3, 3];
                        _a = this.parseSvgPathToPolygon;
                        return [4, req.text()];
                    case 2: return [2, _a.apply(this, [_b.sent()])];
                    case 3: throw new Error("tsParticles Error - Error occurred during polygon mask download");
                }
            });
        });
    };
    PolygonMaskInstance.prototype.parseSvgPathToPolygon = function (xml, force) {
        var _a;
        var forceDownload = force !== null && force !== void 0 ? force : false;
        if (this.paths !== undefined && !forceDownload) {
            return this.raw;
        }
        var container = this.container;
        var polygonMaskOptions = this.options;
        var parser = new DOMParser();
        var doc = parser.parseFromString(xml, "image/svg+xml");
        var svg = doc.getElementsByTagName("svg")[0];
        var svgPaths = svg.getElementsByTagName("path");
        if (!svgPaths.length) {
            svgPaths = doc.getElementsByTagName("path");
        }
        this.paths = [];
        for (var i = 0; i < svgPaths.length; i++) {
            var path = svgPaths.item(i);
            if (path) {
                this.paths.push({
                    element: path,
                    length: path.getTotalLength(),
                });
            }
        }
        var pxRatio = container.retina.pixelRatio;
        var scale = polygonMaskOptions.scale / pxRatio;
        this.dimension.width = parseFloat(svg.getAttribute("width") || "0") * scale;
        this.dimension.height = parseFloat(svg.getAttribute("height") || "0") * scale;
        var position = (_a = polygonMaskOptions.position) !== null && _a !== void 0 ? _a : {
            x: 50,
            y: 50,
        };
        this.offset = {
            x: (container.canvas.size.width * position.x) / (100 * pxRatio) - this.dimension.width / 2,
            y: (container.canvas.size.height * position.y) / (100 * pxRatio) - this.dimension.height / 2,
        };
        var polygonRaw = [];
        for (var _i = 0, _b = this.paths; _i < _b.length; _i++) {
            var path = _b[_i];
            var segments = path.element.pathSegList;
            var len = segments.numberOfItems;
            var p = {
                x: 0,
                y: 0,
            };
            for (var i = 0; i < len; i++) {
                var segment = segments.getItem(i);
                switch (segment.pathSegType) {
                    case window.SVGPathSeg.PATHSEG_MOVETO_ABS:
                    case window.SVGPathSeg.PATHSEG_LINETO_ABS:
                    case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS:
                    case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS:
                    case window.SVGPathSeg.PATHSEG_ARC_ABS:
                    case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS:
                    case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS: {
                        var absSeg = segment;
                        p.x = absSeg.x;
                        p.y = absSeg.y;
                        break;
                    }
                    case window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS:
                        p.x = segment.x;
                        break;
                    case window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS:
                        p.y = segment.y;
                        break;
                    case window.SVGPathSeg.PATHSEG_LINETO_REL:
                    case window.SVGPathSeg.PATHSEG_MOVETO_REL:
                    case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL:
                    case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL:
                    case window.SVGPathSeg.PATHSEG_ARC_REL:
                    case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL:
                    case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL: {
                        var relSeg = segment;
                        p.x += relSeg.x;
                        p.y += relSeg.y;
                        break;
                    }
                    case window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL:
                        p.x += segment.x;
                        break;
                    case window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL:
                        p.y += segment.y;
                        break;
                    case window.SVGPathSeg.PATHSEG_UNKNOWN:
                    case window.SVGPathSeg.PATHSEG_CLOSEPATH:
                        continue;
                }
                polygonRaw.push({
                    x: p.x * scale + this.offset.x,
                    y: p.y * scale + this.offset.y,
                });
            }
        }
        return polygonRaw;
    };
    PolygonMaskInstance.prototype.draw = function (context) {
        var _a;
        if (!((_a = this.paths) === null || _a === void 0 ? void 0 : _a.length)) {
            return;
        }
        var polygonMaskOptions = this.options;
        if (polygonMaskOptions.enable && polygonMaskOptions.draw.enable) {
            var polygonDraw = polygonMaskOptions.draw;
            var rawData = this.raw;
            for (var _i = 0, _b = this.paths; _i < _b.length; _i++) {
                var path = _b[_i];
                var path2d = path.path2d;
                var path2dSupported = this.path2DSupported;
                if (context) {
                    if (path2dSupported && path2d && this.offset) {
                        PolygonMaskInstance.drawPolygonMaskPath(context, path2d, polygonDraw.stroke, this.offset);
                    }
                    else if (rawData) {
                        PolygonMaskInstance.drawPolygonMask(context, rawData, polygonDraw.stroke);
                    }
                }
            }
        }
    };
    PolygonMaskInstance.prototype.drawPointsOnPolygonPath = function () {
        var container = this.container;
        if (this.raw) {
            for (var _i = 0, _a = this.raw; _i < _a.length; _i++) {
                var item = _a[_i];
                container.particles.addParticle({
                    x: item.x,
                    y: item.y,
                });
            }
        }
    };
    PolygonMaskInstance.prototype.getRandomPointOnPolygonPath = function () {
        if (!this.raw || !this.raw.length)
            throw new Error(Utils_1.Constants.noPolygonDataLoaded);
        var coords = Utils_1.Utils.itemFromArray(this.raw);
        return {
            x: coords.x,
            y: coords.y,
        };
    };
    PolygonMaskInstance.prototype.getRandomPointOnPolygonPathByLength = function () {
        var _a, _b, _c;
        var polygonMaskOptions = this.options;
        if (!this.raw || !this.raw.length || !((_a = this.paths) === null || _a === void 0 ? void 0 : _a.length))
            throw new Error(Utils_1.Constants.noPolygonDataLoaded);
        var path = Utils_1.Utils.itemFromArray(this.paths);
        var distance = Math.floor(Math.random() * path.length) + 1;
        var point = path.element.getPointAtLength(distance);
        return {
            x: point.x * polygonMaskOptions.scale + (((_b = this.offset) === null || _b === void 0 ? void 0 : _b.x) || 0),
            y: point.y * polygonMaskOptions.scale + (((_c = this.offset) === null || _c === void 0 ? void 0 : _c.y) || 0),
        };
    };
    PolygonMaskInstance.prototype.getEquidistantPointOnPolygonPathByIndex = function (index) {
        var _a, _b, _c, _d, _e, _f, _g;
        var container = this.container;
        var options = container.options;
        var polygonMaskOptions = this.options;
        if (!this.raw || !this.raw.length || !((_a = this.paths) === null || _a === void 0 ? void 0 : _a.length))
            throw new Error(Utils_1.Constants.noPolygonDataLoaded);
        var offset = 0;
        var point;
        var totalLength = this.paths.reduce(function (tot, path) { return tot + path.length; }, 0);
        var distance = totalLength / options.particles.number.value;
        for (var _i = 0, _h = this.paths; _i < _h.length; _i++) {
            var path = _h[_i];
            var pathDistance = distance * index - offset;
            if (pathDistance <= path.length) {
                point = path.element.getPointAtLength(pathDistance);
                break;
            }
            else {
                offset += path.length;
            }
        }
        return {
            x: ((_b = point === null || point === void 0 ? void 0 : point.x) !== null && _b !== void 0 ? _b : 0) * polygonMaskOptions.scale + ((_d = (_c = this.offset) === null || _c === void 0 ? void 0 : _c.x) !== null && _d !== void 0 ? _d : 0),
            y: ((_e = point === null || point === void 0 ? void 0 : point.y) !== null && _e !== void 0 ? _e : 0) * polygonMaskOptions.scale + ((_g = (_f = this.offset) === null || _f === void 0 ? void 0 : _f.y) !== null && _g !== void 0 ? _g : 0),
        };
    };
    PolygonMaskInstance.prototype.getPointOnPolygonPathByIndex = function (index) {
        if (!this.raw || !this.raw.length)
            throw new Error(Utils_1.Constants.noPolygonDataLoaded);
        var coords = this.raw[index % this.raw.length];
        return {
            x: coords.x,
            y: coords.y,
        };
    };
    PolygonMaskInstance.prototype.createPath2D = function () {
        var _a, _b;
        var polygonMaskOptions = this.options;
        if (!this.path2DSupported || !((_a = this.paths) === null || _a === void 0 ? void 0 : _a.length)) {
            return;
        }
        var _loop_1 = function (path) {
            var pathData = (_b = path.element) === null || _b === void 0 ? void 0 : _b.getAttribute("d");
            if (pathData) {
                var path2d = new Path2D(pathData);
                var matrix = document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGMatrix();
                var finalPath = new Path2D();
                var transform = matrix.scale(polygonMaskOptions.scale);
                if (finalPath.addPath) {
                    finalPath.addPath(path2d, transform);
                    path.path2d = finalPath;
                }
                else {
                    delete path.path2d;
                }
            }
            else {
                delete path.path2d;
            }
            if (!path.path2d && this_1.raw) {
                path.path2d = new Path2D();
                path.path2d.moveTo(this_1.raw[0].x, this_1.raw[0].y);
                this_1.raw.forEach(function (pos, i) {
                    var _a;
                    if (i > 0) {
                        (_a = path.path2d) === null || _a === void 0 ? void 0 : _a.lineTo(pos.x, pos.y);
                    }
                });
                path.path2d.closePath();
            }
        };
        var this_1 = this;
        for (var _i = 0, _c = this.paths; _i < _c.length; _i++) {
            var path = _c[_i];
            _loop_1(path);
        }
    };
    PolygonMaskInstance.prototype.initRawData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var polygonMaskOptions, _a, data, svg, path;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        polygonMaskOptions = this.options;
                        if (!polygonMaskOptions.url) return [3, 2];
                        _a = this;
                        return [4, this.downloadSvgPathToPolygon(polygonMaskOptions.url)];
                    case 1:
                        _a.raw = _b.sent();
                        return [3, 3];
                    case 2:
                        if (polygonMaskOptions.data) {
                            data = polygonMaskOptions.data;
                            svg = void 0;
                            if (typeof data !== "string") {
                                path = data.path instanceof Array
                                    ? data.path.map(function (t) { return "<path d=\"" + t + "\" />"; }).join("")
                                    : "<path d=\"" + data.path + "\" />";
                                svg = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"" + data.size.width + "\" height=\"" + data.size.height + "\">" + path + "</svg>";
                            }
                            else {
                                svg = data;
                            }
                            this.raw = this.parseSvgPathToPolygon(svg);
                        }
                        _b.label = 3;
                    case 3:
                        this.createPath2D();
                        return [2];
                }
            });
        });
    };
    return PolygonMaskInstance;
}());
exports.PolygonMaskInstance = PolygonMaskInstance;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Plugins/PolygonMask/PolygonMaskPlugin.js":
/*!********************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Plugins/PolygonMask/PolygonMaskPlugin.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolygonMaskPlugin = void 0;
var PolygonMaskInstance_1 = __webpack_require__(/*! ./PolygonMaskInstance */ "./node_modules/tsparticles/dist/Plugins/PolygonMask/PolygonMaskInstance.js");
var PolygonMask_1 = __webpack_require__(/*! ./Options/Classes/PolygonMask */ "./node_modules/tsparticles/dist/Plugins/PolygonMask/Options/Classes/PolygonMask.js");
var Enums_1 = __webpack_require__(/*! ./Enums */ "./node_modules/tsparticles/dist/Plugins/PolygonMask/Enums/index.js");
var PolygonMaskPlugin = (function () {
    function PolygonMaskPlugin() {
        this.id = "polygonMask";
    }
    PolygonMaskPlugin.prototype.getPlugin = function (container) {
        return new PolygonMaskInstance_1.PolygonMaskInstance(container);
    };
    PolygonMaskPlugin.prototype.needsPlugin = function (options) {
        var _a, _b, _c;
        return (_b = (_a = options === null || options === void 0 ? void 0 : options.polygon) === null || _a === void 0 ? void 0 : _a.enable) !== null && _b !== void 0 ? _b : (((_c = options === null || options === void 0 ? void 0 : options.polygon) === null || _c === void 0 ? void 0 : _c.type) !== undefined && options.polygon.type !== Enums_1.Type.none);
    };
    PolygonMaskPlugin.prototype.loadOptions = function (options, source) {
        if (!this.needsPlugin(source)) {
            return;
        }
        var optionsCast = options;
        if (optionsCast.polygon === undefined) {
            optionsCast.polygon = new PolygonMask_1.PolygonMask();
        }
        optionsCast.polygon.load(source === null || source === void 0 ? void 0 : source.polygon);
    };
    return PolygonMaskPlugin;
}());
var plugin = new PolygonMaskPlugin();
exports.PolygonMaskPlugin = plugin;
__exportStar(__webpack_require__(/*! ./Enums */ "./node_modules/tsparticles/dist/Plugins/PolygonMask/Enums/index.js"), exports);


/***/ }),

/***/ "./node_modules/tsparticles/dist/ShapeDrawers/CircleDrawer.js":
/*!********************************************************************!*\
  !*** ./node_modules/tsparticles/dist/ShapeDrawers/CircleDrawer.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.CircleDrawer = void 0;
var CircleDrawer = (function () {
    function CircleDrawer() {
    }
    CircleDrawer.prototype.draw = function (context, particle, radius, _opacity) {
        context.arc(0, 0, radius, 0, Math.PI * 2, false);
    };
    return CircleDrawer;
}());
exports.CircleDrawer = CircleDrawer;


/***/ }),

/***/ "./node_modules/tsparticles/dist/ShapeDrawers/ImageDrawer.js":
/*!*******************************************************************!*\
  !*** ./node_modules/tsparticles/dist/ShapeDrawers/ImageDrawer.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageDrawer = void 0;
var Utils_1 = __webpack_require__(/*! ../Utils */ "./node_modules/tsparticles/dist/Utils/index.js");
var Enums_1 = __webpack_require__(/*! ../Enums */ "./node_modules/tsparticles/dist/Enums/index.js");
var ImageDrawer = (function () {
    function ImageDrawer() {
        this.images = [];
    }
    ImageDrawer.prototype.getImages = function (container) {
        var containerImages = this.images.filter(function (t) { return t.id === container.id; });
        if (!containerImages.length) {
            this.images.push({
                id: container.id,
                images: [],
            });
            return this.getImages(container);
        }
        else {
            return containerImages[0];
        }
    };
    ImageDrawer.prototype.addImage = function (container, image) {
        var containerImages = this.getImages(container);
        containerImages === null || containerImages === void 0 ? void 0 : containerImages.images.push(image);
    };
    ImageDrawer.prototype.init = function (container) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var options, shapeOptions, imageOptions, _i, imageOptions_1, optionsImage;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        options = container.options;
                        shapeOptions = options.particles.shape;
                        if (!Utils_1.Utils.isInArray(Enums_1.ShapeType.image, shapeOptions.type) &&
                            !Utils_1.Utils.isInArray(Enums_1.ShapeType.images, shapeOptions.type)) {
                            return [2];
                        }
                        imageOptions = (_a = shapeOptions.options[Enums_1.ShapeType.images]) !== null && _a !== void 0 ? _a : shapeOptions.options[Enums_1.ShapeType.image];
                        if (!(imageOptions instanceof Array)) return [3, 5];
                        _i = 0, imageOptions_1 = imageOptions;
                        _b.label = 1;
                    case 1:
                        if (!(_i < imageOptions_1.length)) return [3, 4];
                        optionsImage = imageOptions_1[_i];
                        return [4, this.loadImageShape(container, optionsImage)];
                    case 2:
                        _b.sent();
                        _b.label = 3;
                    case 3:
                        _i++;
                        return [3, 1];
                    case 4: return [3, 7];
                    case 5: return [4, this.loadImageShape(container, imageOptions)];
                    case 6:
                        _b.sent();
                        _b.label = 7;
                    case 7: return [2];
                }
            });
        });
    };
    ImageDrawer.prototype.destroy = function () {
        this.images = [];
    };
    ImageDrawer.prototype.loadImageShape = function (container, imageShape) {
        return __awaiter(this, void 0, void 0, function () {
            var image, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 5, , 6]);
                        if (!imageShape.replaceColor) return [3, 2];
                        return [4, Utils_1.Utils.downloadSvgImage(imageShape.src)];
                    case 1:
                        _a = _c.sent();
                        return [3, 4];
                    case 2: return [4, Utils_1.Utils.loadImage(imageShape.src)];
                    case 3:
                        _a = _c.sent();
                        _c.label = 4;
                    case 4:
                        image = _a;
                        this.addImage(container, image);
                        return [3, 6];
                    case 5:
                        _b = _c.sent();
                        console.log("tsParticles error - " + imageShape.src + " not found");
                        return [3, 6];
                    case 6: return [2];
                }
            });
        });
    };
    ImageDrawer.prototype.draw = function (context, particle, radius, opacity) {
        var _a, _b;
        if (!context) {
            return;
        }
        var image = particle.image;
        var element = (_a = image === null || image === void 0 ? void 0 : image.data) === null || _a === void 0 ? void 0 : _a.element;
        if (!element) {
            return;
        }
        var ratio = (_b = image === null || image === void 0 ? void 0 : image.ratio) !== null && _b !== void 0 ? _b : 1;
        var pos = {
            x: -radius,
            y: -radius,
        };
        if (!(image === null || image === void 0 ? void 0 : image.data.svgData) || !(image === null || image === void 0 ? void 0 : image.replaceColor)) {
            context.globalAlpha = opacity;
        }
        context.drawImage(element, pos.x, pos.y, radius * 2, (radius * 2) / ratio);
        if (!(image === null || image === void 0 ? void 0 : image.data.svgData) || !(image === null || image === void 0 ? void 0 : image.replaceColor)) {
            context.globalAlpha = 1;
        }
    };
    return ImageDrawer;
}());
exports.ImageDrawer = ImageDrawer;


/***/ }),

/***/ "./node_modules/tsparticles/dist/ShapeDrawers/LineDrawer.js":
/*!******************************************************************!*\
  !*** ./node_modules/tsparticles/dist/ShapeDrawers/LineDrawer.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.LineDrawer = void 0;
var LineDrawer = (function () {
    function LineDrawer() {
    }
    LineDrawer.prototype.draw = function (context, particle, radius, _opacity) {
        context.moveTo(0, -radius / 2);
        context.lineTo(0, radius / 2);
    };
    return LineDrawer;
}());
exports.LineDrawer = LineDrawer;


/***/ }),

/***/ "./node_modules/tsparticles/dist/ShapeDrawers/PolygonDrawer.js":
/*!*********************************************************************!*\
  !*** ./node_modules/tsparticles/dist/ShapeDrawers/PolygonDrawer.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolygonDrawer = void 0;
var PolygonDrawerBase_1 = __webpack_require__(/*! ./PolygonDrawerBase */ "./node_modules/tsparticles/dist/ShapeDrawers/PolygonDrawerBase.js");
var PolygonDrawer = (function (_super) {
    __extends(PolygonDrawer, _super);
    function PolygonDrawer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PolygonDrawer.prototype.getSidesData = function (particle, radius) {
        var _a, _b;
        var polygon = particle.shapeData;
        var sides = (_b = (_a = polygon === null || polygon === void 0 ? void 0 : polygon.sides) !== null && _a !== void 0 ? _a : polygon === null || polygon === void 0 ? void 0 : polygon.nb_sides) !== null && _b !== void 0 ? _b : 5;
        return {
            count: {
                denominator: 1,
                numerator: sides,
            },
            length: (radius * 2.66) / (sides / 3),
        };
    };
    PolygonDrawer.prototype.getCenter = function (particle, radius) {
        var _a, _b;
        var polygon = particle.shapeData;
        var sides = (_b = (_a = polygon === null || polygon === void 0 ? void 0 : polygon.sides) !== null && _a !== void 0 ? _a : polygon === null || polygon === void 0 ? void 0 : polygon.nb_sides) !== null && _b !== void 0 ? _b : 5;
        return {
            x: -radius / (sides / 3.5),
            y: -radius / (2.66 / 3.5),
        };
    };
    return PolygonDrawer;
}(PolygonDrawerBase_1.PolygonDrawerBase));
exports.PolygonDrawer = PolygonDrawer;


/***/ }),

/***/ "./node_modules/tsparticles/dist/ShapeDrawers/PolygonDrawerBase.js":
/*!*************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/ShapeDrawers/PolygonDrawerBase.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.PolygonDrawerBase = void 0;
var PolygonDrawerBase = (function () {
    function PolygonDrawerBase() {
    }
    PolygonDrawerBase.prototype.draw = function (context, particle, radius, _opacity) {
        var start = this.getCenter(particle, radius);
        var side = this.getSidesData(particle, radius);
        var sideCount = side.count.numerator * side.count.denominator;
        var decimalSides = side.count.numerator / side.count.denominator;
        var interiorAngleDegrees = (180 * (decimalSides - 2)) / decimalSides;
        var interiorAngle = Math.PI - (Math.PI * interiorAngleDegrees) / 180;
        if (!context) {
            return;
        }
        context.beginPath();
        context.translate(start.x, start.y);
        context.moveTo(0, 0);
        for (var i = 0; i < sideCount; i++) {
            context.lineTo(side.length, 0);
            context.translate(side.length, 0);
            context.rotate(interiorAngle);
        }
    };
    return PolygonDrawerBase;
}());
exports.PolygonDrawerBase = PolygonDrawerBase;


/***/ }),

/***/ "./node_modules/tsparticles/dist/ShapeDrawers/SquareDrawer.js":
/*!********************************************************************!*\
  !*** ./node_modules/tsparticles/dist/ShapeDrawers/SquareDrawer.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.SquareDrawer = void 0;
var SquareDrawer = (function () {
    function SquareDrawer() {
    }
    SquareDrawer.prototype.draw = function (context, particle, radius, _opacity) {
        context.rect(-radius, -radius, radius * 2, radius * 2);
    };
    return SquareDrawer;
}());
exports.SquareDrawer = SquareDrawer;


/***/ }),

/***/ "./node_modules/tsparticles/dist/ShapeDrawers/StarDrawer.js":
/*!******************************************************************!*\
  !*** ./node_modules/tsparticles/dist/ShapeDrawers/StarDrawer.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.StarDrawer = void 0;
var StarDrawer = (function () {
    function StarDrawer() {
    }
    StarDrawer.prototype.draw = function (context, particle, radius, opacity, _delta) {
        var _a, _b, _c;
        var star = particle.shapeData;
        var sides = (_b = (_a = star === null || star === void 0 ? void 0 : star.sides) !== null && _a !== void 0 ? _a : star === null || star === void 0 ? void 0 : star.nb_sides) !== null && _b !== void 0 ? _b : 5;
        var inset = (_c = star === null || star === void 0 ? void 0 : star.inset) !== null && _c !== void 0 ? _c : 2;
        context.moveTo(0, 0 - radius);
        for (var i = 0; i < sides; i++) {
            context.rotate(Math.PI / sides);
            context.lineTo(0, 0 - radius * inset);
            context.rotate(Math.PI / sides);
            context.lineTo(0, 0 - radius);
        }
    };
    return StarDrawer;
}());
exports.StarDrawer = StarDrawer;


/***/ }),

/***/ "./node_modules/tsparticles/dist/ShapeDrawers/TextDrawer.js":
/*!******************************************************************!*\
  !*** ./node_modules/tsparticles/dist/ShapeDrawers/TextDrawer.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextDrawer = void 0;
var Utils_1 = __webpack_require__(/*! ../Utils */ "./node_modules/tsparticles/dist/Utils/index.js");
var Enums_1 = __webpack_require__(/*! ../Enums */ "./node_modules/tsparticles/dist/Enums/index.js");
var TextDrawer = (function () {
    function TextDrawer() {
    }
    TextDrawer.prototype.init = function (container) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var options, shapeOptions, _i, shapeOptions_1, character, character;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        options = container.options;
                        if (!(Utils_1.Utils.isInArray(Enums_1.ShapeType.char, options.particles.shape.type) ||
                            Utils_1.Utils.isInArray(Enums_1.ShapeType.character, options.particles.shape.type))) return [3, 7];
                        shapeOptions = (_a = options.particles.shape.options[Enums_1.ShapeType.character]) !== null && _a !== void 0 ? _a : options.particles.shape.options[Enums_1.ShapeType.char];
                        if (!(shapeOptions instanceof Array)) return [3, 5];
                        _i = 0, shapeOptions_1 = shapeOptions;
                        _c.label = 1;
                    case 1:
                        if (!(_i < shapeOptions_1.length)) return [3, 4];
                        character = shapeOptions_1[_i];
                        return [4, Utils_1.Utils.loadFont(character)];
                    case 2:
                        _c.sent();
                        _c.label = 3;
                    case 3:
                        _i++;
                        return [3, 1];
                    case 4: return [3, 7];
                    case 5:
                        character = (_b = options.particles.shape.options[Enums_1.ShapeType.character]) !== null && _b !== void 0 ? _b : options.particles.shape.options[Enums_1.ShapeType.char];
                        if (!(character !== undefined)) return [3, 7];
                        return [4, Utils_1.Utils.loadFont(character)];
                    case 6:
                        _c.sent();
                        _c.label = 7;
                    case 7: return [2];
                }
            });
        });
    };
    TextDrawer.prototype.draw = function (context, particle, radius, _opacity) {
        var character = particle.shapeData;
        if (character === undefined) {
            return;
        }
        var textData = character.value;
        if (textData === undefined) {
            return;
        }
        var textParticle = particle;
        if (textParticle.text === undefined) {
            if (textData instanceof Array) {
                textParticle.text = Utils_1.Utils.itemFromArray(textData, particle.randomIndexData);
            }
            else {
                textParticle.text = textData;
            }
        }
        var text = textParticle.text;
        var style = character.style;
        var weight = character.weight;
        var size = Math.round(radius) * 2;
        var font = character.font;
        var fill = particle.fill;
        context.font = style + " " + weight + " " + size + "px \"" + font + "\"";
        var pos = {
            x: -radius / 2,
            y: radius / 2,
        };
        if (fill) {
            context.fillText(text, pos.x, pos.y);
        }
        else {
            context.strokeText(text, pos.x, pos.y);
        }
    };
    return TextDrawer;
}());
exports.TextDrawer = TextDrawer;


/***/ }),

/***/ "./node_modules/tsparticles/dist/ShapeDrawers/TriangleDrawer.js":
/*!**********************************************************************!*\
  !*** ./node_modules/tsparticles/dist/ShapeDrawers/TriangleDrawer.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.TriangleDrawer = void 0;
var PolygonDrawerBase_1 = __webpack_require__(/*! ./PolygonDrawerBase */ "./node_modules/tsparticles/dist/ShapeDrawers/PolygonDrawerBase.js");
var TriangleDrawer = (function (_super) {
    __extends(TriangleDrawer, _super);
    function TriangleDrawer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TriangleDrawer.prototype.getSidesData = function (particle, radius) {
        return {
            count: {
                denominator: 2,
                numerator: 3,
            },
            length: radius * 2,
        };
    };
    TriangleDrawer.prototype.getCenter = function (particle, radius) {
        return {
            x: -radius,
            y: radius / 1.66,
        };
    };
    return TriangleDrawer;
}(PolygonDrawerBase_1.PolygonDrawerBase));
exports.TriangleDrawer = TriangleDrawer;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Utils/CanvasUtils.js":
/*!************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Utils/CanvasUtils.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.CanvasUtils = void 0;
var ColorUtils_1 = __webpack_require__(/*! ./ColorUtils */ "./node_modules/tsparticles/dist/Utils/ColorUtils.js");
var Utils_1 = __webpack_require__(/*! ./Utils */ "./node_modules/tsparticles/dist/Utils/Utils.js");
var CanvasUtils = (function () {
    function CanvasUtils() {
    }
    CanvasUtils.paintBase = function (context, dimension, baseColor) {
        context.save();
        context.fillStyle = baseColor !== null && baseColor !== void 0 ? baseColor : "rgba(0,0,0,0)";
        context.fillRect(0, 0, dimension.width, dimension.height);
        context.restore();
    };
    CanvasUtils.clear = function (context, dimension) {
        context.clearRect(0, 0, dimension.width, dimension.height);
    };
    CanvasUtils.drawLinkLine = function (context, width, begin, end, maxDistance, canvasSize, warp, backgroundMask, colorLine, opacity, shadow) {
        var drawn = false;
        if (Utils_1.Utils.getDistance(begin, end) <= maxDistance) {
            this.drawLine(context, begin, end);
            drawn = true;
        }
        else if (warp) {
            var pi1 = void 0;
            var pi2 = void 0;
            var endNE = {
                x: end.x - canvasSize.width,
                y: end.y,
            };
            var _a = Utils_1.Utils.getDistances(begin, endNE), dx = _a.dx, dy = _a.dy, distance = _a.distance;
            if (distance <= maxDistance) {
                var yi = begin.y - (dy / dx) * begin.x;
                pi1 = { x: 0, y: yi };
                pi2 = { x: canvasSize.width, y: yi };
            }
            else {
                var endSW = {
                    x: end.x,
                    y: end.y - canvasSize.height,
                };
                var _b = Utils_1.Utils.getDistances(begin, endSW), dx_1 = _b.dx, dy_1 = _b.dy, distance_1 = _b.distance;
                if (distance_1 <= maxDistance) {
                    var yi = begin.y - (dy_1 / dx_1) * begin.x;
                    var xi = -yi / (dy_1 / dx_1);
                    pi1 = { x: xi, y: 0 };
                    pi2 = { x: xi, y: canvasSize.height };
                }
                else {
                    var endSE = {
                        x: end.x - canvasSize.width,
                        y: end.y - canvasSize.height,
                    };
                    var _c = Utils_1.Utils.getDistances(begin, endSE), dx_2 = _c.dx, dy_2 = _c.dy, distance_2 = _c.distance;
                    if (distance_2 <= maxDistance) {
                        var yi = begin.y - (dy_2 / dx_2) * begin.x;
                        var xi = -yi / (dy_2 / dx_2);
                        pi1 = { x: xi, y: yi };
                        pi2 = { x: pi1.x + canvasSize.width, y: pi1.y + canvasSize.height };
                    }
                }
            }
            if (pi1 && pi2) {
                this.drawLine(context, begin, pi1);
                this.drawLine(context, end, pi2);
                drawn = true;
            }
        }
        if (!drawn) {
            return;
        }
        context.lineWidth = width;
        if (backgroundMask) {
            context.globalCompositeOperation = "destination-out";
        }
        context.strokeStyle = ColorUtils_1.ColorUtils.getStyleFromRgb(colorLine, opacity);
        if (shadow.enable) {
            var shadowColor = ColorUtils_1.ColorUtils.colorToRgb(shadow.color);
            if (shadowColor) {
                context.shadowBlur = shadow.blur;
                context.shadowColor = ColorUtils_1.ColorUtils.getStyleFromRgb(shadowColor);
            }
        }
        context.stroke();
    };
    CanvasUtils.drawLinkTriangle = function (context, width, pos1, pos2, pos3, backgroundMask, colorTriangle, opacityTriangle) {
        this.drawTriangle(context, pos1, pos2, pos3);
        context.lineWidth = width;
        if (backgroundMask) {
            context.globalCompositeOperation = "destination-out";
        }
        context.fillStyle = ColorUtils_1.ColorUtils.getStyleFromRgb(colorTriangle, opacityTriangle);
        context.fill();
    };
    CanvasUtils.drawConnectLine = function (context, width, lineStyle, begin, end) {
        context.save();
        this.drawLine(context, begin, end);
        context.lineWidth = width;
        context.strokeStyle = lineStyle;
        context.stroke();
        context.restore();
    };
    CanvasUtils.gradient = function (context, p1, p2, opacity) {
        var gradStop = Math.floor(p2.size.value / p1.size.value);
        var color1 = p1.getColor();
        var color2 = p2.getColor();
        if (!color1 || !color2) {
            return;
        }
        var sourcePos = p1.getPosition();
        var destPos = p2.getPosition();
        var midRgb = ColorUtils_1.ColorUtils.mix(color1, color2, p1.size.value, p2.size.value);
        var grad = context.createLinearGradient(sourcePos.x, sourcePos.y, destPos.x, destPos.y);
        grad.addColorStop(0, ColorUtils_1.ColorUtils.getStyleFromHsl(color1, opacity));
        grad.addColorStop(gradStop > 1 ? 1 : gradStop, ColorUtils_1.ColorUtils.getStyleFromRgb(midRgb, opacity));
        grad.addColorStop(1, ColorUtils_1.ColorUtils.getStyleFromHsl(color2, opacity));
        return grad;
    };
    CanvasUtils.drawGrabLine = function (context, width, begin, end, colorLine, opacity) {
        context.save();
        this.drawLine(context, begin, end);
        context.strokeStyle = ColorUtils_1.ColorUtils.getStyleFromRgb(colorLine, opacity);
        context.lineWidth = width;
        context.stroke();
        context.restore();
    };
    CanvasUtils.drawParticle = function (container, context, particle, delta, colorValue, backgroundMask, radius, opacity, shadow) {
        var pos = particle.getPosition();
        context.save();
        context.translate(pos.x, pos.y);
        context.beginPath();
        if (particle.angle !== 0) {
            context.rotate((particle.angle * Math.PI) / 180);
        }
        if (backgroundMask) {
            context.globalCompositeOperation = "destination-out";
        }
        var shadowColor = particle.shadowColor;
        if (shadow.enable && shadowColor) {
            context.shadowBlur = shadow.blur;
            context.shadowColor = ColorUtils_1.ColorUtils.getStyleFromRgb(shadowColor);
            context.shadowOffsetX = shadow.offset.x;
            context.shadowOffsetY = shadow.offset.y;
        }
        context.fillStyle = colorValue;
        var stroke = particle.stroke;
        context.lineWidth = stroke.width;
        if (particle.strokeColor) {
            context.strokeStyle = ColorUtils_1.ColorUtils.getStyleFromRgb(particle.strokeColor, particle.stroke.opacity);
        }
        if (particle.close) {
            context.closePath();
        }
        this.drawShape(container, context, particle, radius, opacity, delta);
        if (stroke.width > 0 && particle.strokeColor) {
            context.stroke();
        }
        if (particle.fill) {
            context.fill();
        }
        context.restore();
        context.save();
        context.translate(pos.x, pos.y);
        if (particle.angle !== 0) {
            context.rotate((particle.angle * Math.PI) / 180);
        }
        if (backgroundMask) {
            context.globalCompositeOperation = "destination-out";
        }
        this.drawShapeAfterEffect(container, context, particle, radius, opacity, delta);
        context.restore();
    };
    CanvasUtils.drawShape = function (container, context, particle, radius, opacity, delta) {
        if (!particle.shape) {
            return;
        }
        var drawer = container.drawers[particle.shape];
        if (!drawer) {
            return;
        }
        drawer.draw(context, particle, radius, opacity, delta);
    };
    CanvasUtils.drawShapeAfterEffect = function (container, context, particle, radius, opacity, delta) {
        if (!particle.shape) {
            return;
        }
        var drawer = container.drawers[particle.shape];
        if (!(drawer === null || drawer === void 0 ? void 0 : drawer.afterEffect)) {
            return;
        }
        drawer.afterEffect(context, particle, radius, opacity, delta);
    };
    CanvasUtils.drawPlugin = function (context, plugin, delta) {
        if (plugin.draw !== undefined) {
            context.save();
            plugin.draw(context, delta);
            context.restore();
        }
    };
    CanvasUtils.drawLine = function (context, begin, end) {
        context.beginPath();
        context.moveTo(begin.x, begin.y);
        context.lineTo(end.x, end.y);
        context.closePath();
    };
    CanvasUtils.drawTriangle = function (context, p1, p2, p3) {
        context.beginPath();
        context.moveTo(p1.x, p1.y);
        context.lineTo(p2.x, p2.y);
        context.lineTo(p3.x, p3.y);
        context.closePath();
    };
    return CanvasUtils;
}());
exports.CanvasUtils = CanvasUtils;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Utils/Circle.js":
/*!*******************************************************!*\
  !*** ./node_modules/tsparticles/dist/Utils/Circle.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = void 0;
var Range_1 = __webpack_require__(/*! ./Range */ "./node_modules/tsparticles/dist/Utils/Range.js");
var Circle = (function (_super) {
    __extends(Circle, _super);
    function Circle(x, y, radius) {
        var _this = _super.call(this, x, y) || this;
        _this.radius = radius;
        return _this;
    }
    Circle.prototype.contains = function (point) {
        var d = Math.pow(point.x - this.position.x, 2) + Math.pow(point.y - this.position.y, 2);
        return d <= this.radius * this.radius;
    };
    Circle.prototype.intersects = function (range) {
        var rect = range;
        var circle = range;
        var pos1 = this.position;
        var pos2 = range.position;
        var xDist = Math.abs(pos2.x - pos1.x);
        var yDist = Math.abs(pos2.y - pos1.y);
        var r = this.radius;
        if (circle.radius !== undefined) {
            var r2 = circle.radius;
            var rSum = r + r2;
            var dist = Math.sqrt(xDist * xDist + yDist + yDist);
            return rSum > dist;
        }
        else if (rect.size !== undefined) {
            var w = rect.size.width;
            var h = rect.size.height;
            var edges = Math.pow(xDist - w, 2) + Math.pow(yDist - h, 2);
            if (xDist > r + w || yDist > r + h) {
                return false;
            }
            if (xDist <= w || yDist <= h) {
                return true;
            }
            return edges <= r * r;
        }
        return false;
    };
    return Circle;
}(Range_1.Range));
exports.Circle = Circle;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Utils/CircleWarp.js":
/*!***********************************************************!*\
  !*** ./node_modules/tsparticles/dist/Utils/CircleWarp.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.CircleWarp = void 0;
var Rectangle_1 = __webpack_require__(/*! ./Rectangle */ "./node_modules/tsparticles/dist/Utils/Rectangle.js");
var Circle_1 = __webpack_require__(/*! ./Circle */ "./node_modules/tsparticles/dist/Utils/Circle.js");
var CircleWarp = (function (_super) {
    __extends(CircleWarp, _super);
    function CircleWarp(x, y, radius, canvasSize) {
        var _this = _super.call(this, x, y, radius) || this;
        _this.canvasSize = {
            height: canvasSize.height,
            width: canvasSize.width,
        };
        return _this;
    }
    CircleWarp.prototype.contains = function (point) {
        if (_super.prototype.contains.call(this, point)) {
            return true;
        }
        var posNE = {
            x: point.x - this.canvasSize.width,
            y: point.y,
        };
        if (_super.prototype.contains.call(this, posNE)) {
            return true;
        }
        var posSE = {
            x: point.x - this.canvasSize.width,
            y: point.y - this.canvasSize.height,
        };
        if (_super.prototype.contains.call(this, posSE)) {
            return true;
        }
        var posSW = {
            x: point.x,
            y: point.y - this.canvasSize.height,
        };
        return _super.prototype.contains.call(this, posSW);
    };
    CircleWarp.prototype.intersects = function (range) {
        if (_super.prototype.intersects.call(this, range)) {
            return true;
        }
        var rect = range;
        var circle = range;
        var newPos = {
            x: range.position.x - this.canvasSize.width,
            y: range.position.y - this.canvasSize.height,
        };
        if (circle.radius !== undefined) {
            var biggerCircle = new Circle_1.Circle(newPos.x, newPos.y, circle.radius * 2);
            return _super.prototype.intersects.call(this, biggerCircle);
        }
        else if (rect.size !== undefined) {
            var rectSW = new Rectangle_1.Rectangle(newPos.x, newPos.y, rect.size.width * 2, rect.size.height * 2);
            return _super.prototype.intersects.call(this, rectSW);
        }
        return false;
    };
    return CircleWarp;
}(Circle_1.Circle));
exports.CircleWarp = CircleWarp;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Utils/ColorUtils.js":
/*!***********************************************************!*\
  !*** ./node_modules/tsparticles/dist/Utils/ColorUtils.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorUtils = void 0;
var Utils_1 = __webpack_require__(/*! ./Utils */ "./node_modules/tsparticles/dist/Utils/Utils.js");
var Constants_1 = __webpack_require__(/*! ./Constants */ "./node_modules/tsparticles/dist/Utils/Constants.js");
var ColorUtils = (function () {
    function ColorUtils() {
    }
    ColorUtils.colorToRgb = function (input) {
        var _a, _b;
        if (input === undefined) {
            return;
        }
        var color = typeof input === "string" ? { value: input } : input;
        var res;
        if (typeof color.value === "string") {
            if (color.value === Constants_1.Constants.randomColorValue) {
                res = this.getRandomRgbColor();
            }
            else {
                res = ColorUtils.stringToRgb(color.value);
            }
        }
        else {
            if (color.value instanceof Array) {
                var colorSelected = Utils_1.Utils.itemFromArray(color.value);
                res = ColorUtils.colorToRgb({ value: colorSelected });
            }
            else {
                var colorValue = color.value;
                var rgbColor = (_a = colorValue.rgb) !== null && _a !== void 0 ? _a : color.value;
                if (rgbColor.r !== undefined) {
                    res = rgbColor;
                }
                else {
                    var hslColor = (_b = colorValue.hsl) !== null && _b !== void 0 ? _b : color.value;
                    if (hslColor.h !== undefined) {
                        res = ColorUtils.hslToRgb(hslColor);
                    }
                }
            }
        }
        return res;
    };
    ColorUtils.colorToHsl = function (color) {
        var rgb = this.colorToRgb(color);
        return rgb !== undefined ? this.rgbToHsl(rgb) : rgb;
    };
    ColorUtils.rgbToHsl = function (color) {
        var r1 = color.r / 255;
        var g1 = color.g / 255;
        var b1 = color.b / 255;
        var maxColor = Math.max(r1, g1, b1);
        var minColor = Math.min(r1, g1, b1);
        var res = {
            h: 0,
            l: (maxColor + minColor) / 2,
            s: 0,
        };
        if (maxColor != minColor) {
            if (res.l < 0.5) {
                res.s = (maxColor - minColor) / (maxColor + minColor);
            }
            else {
                res.s = (maxColor - minColor) / (2.0 - maxColor - minColor);
            }
            if (r1 === maxColor) {
                res.h = (g1 - b1) / (maxColor - minColor);
            }
            else if (g1 === maxColor) {
                res.h = 2.0 + (b1 - r1) / (maxColor - minColor);
            }
            else {
                res.h = 4.0 + (r1 - g1) / (maxColor - minColor);
            }
        }
        res.l *= 100;
        res.s *= 100;
        res.h *= 60;
        if (res.h < 0) {
            res.h += 360;
        }
        return res;
    };
    ColorUtils.stringToAlpha = function (input) {
        var _a;
        return (_a = ColorUtils.stringToRgba(input)) === null || _a === void 0 ? void 0 : _a.a;
    };
    ColorUtils.stringToRgb = function (input) {
        return ColorUtils.stringToRgba(input);
    };
    ColorUtils.hslToRgb = function (hsl) {
        var result = { b: 0, g: 0, r: 0 };
        var hslPercent = {
            h: hsl.h / 360,
            l: hsl.l / 100,
            s: hsl.s / 100,
        };
        if (hslPercent.s === 0) {
            result.b = hslPercent.l;
            result.g = hslPercent.l;
            result.r = hslPercent.l;
        }
        else {
            var q = hslPercent.l < 0.5
                ? hslPercent.l * (1 + hslPercent.s)
                : hslPercent.l + hslPercent.s - hslPercent.l * hslPercent.s;
            var p = 2 * hslPercent.l - q;
            result.r = ColorUtils.hue2rgb(p, q, hslPercent.h + 1 / 3);
            result.g = ColorUtils.hue2rgb(p, q, hslPercent.h);
            result.b = ColorUtils.hue2rgb(p, q, hslPercent.h - 1 / 3);
        }
        result.r = Math.floor(result.r * 255);
        result.g = Math.floor(result.g * 255);
        result.b = Math.floor(result.b * 255);
        return result;
    };
    ColorUtils.hslaToRgba = function (hsla) {
        var rgbResult = ColorUtils.hslToRgb(hsla);
        return {
            a: hsla.a,
            b: rgbResult.b,
            g: rgbResult.g,
            r: rgbResult.r,
        };
    };
    ColorUtils.getRandomRgbColor = function (min) {
        var _a;
        var fixedMin = min || 0;
        var minColor = fixedMin + fixedMin * Math.pow(16, 2) + fixedMin * Math.pow(16, 4);
        var factor = minColor ^ 0xffffff;
        var randomColor = Math.floor((Math.random() * factor) | minColor).toString(16);
        return ((_a = this.stringToRgb("#" + randomColor)) !== null && _a !== void 0 ? _a : {
            b: 0,
            g: 0,
            r: 0,
        });
    };
    ColorUtils.getStyleFromRgb = function (color, opacity) {
        return "rgba(" + color.r + ", " + color.g + ", " + color.b + ", " + (opacity !== null && opacity !== void 0 ? opacity : 1) + ")";
    };
    ColorUtils.getStyleFromHsl = function (color, opacity) {
        return "hsla(" + color.h + ", " + color.s + "%, " + color.l + "%, " + (opacity !== null && opacity !== void 0 ? opacity : 1) + ")";
    };
    ColorUtils.mix = function (color1, color2, size1, size2) {
        var rgb1 = color1;
        var rgb2 = color2;
        if (rgb1.r === undefined) {
            rgb1 = this.hslToRgb(color1);
        }
        if (rgb2.r === undefined) {
            rgb2 = this.hslToRgb(color2);
        }
        return {
            b: Utils_1.Utils.mix(rgb1.b, rgb2.b, size1, size2),
            g: Utils_1.Utils.mix(rgb1.g, rgb2.g, size1, size2),
            r: Utils_1.Utils.mix(rgb1.r, rgb2.r, size1, size2),
        };
    };
    ColorUtils.hue2rgb = function (p, q, t) {
        var tCalc = t;
        if (tCalc < 0) {
            tCalc += 1;
        }
        if (tCalc > 1) {
            tCalc -= 1;
        }
        if (tCalc < 1 / 6) {
            return p + (q - p) * 6 * tCalc;
        }
        if (tCalc < 1 / 2) {
            return q;
        }
        if (tCalc < 2 / 3) {
            return p + (q - p) * (2 / 3 - tCalc) * 6;
        }
        return p;
    };
    ColorUtils.stringToRgba = function (input) {
        if (input.startsWith("rgb")) {
            var regex = /rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([\d.]+)\s*)?\)/i;
            var result = regex.exec(input);
            return result
                ? {
                    a: result.length > 4 ? parseFloat(result[5]) : 1,
                    b: parseInt(result[3], 10),
                    g: parseInt(result[2], 10),
                    r: parseInt(result[1], 10),
                }
                : undefined;
        }
        else if (input.startsWith("hsl")) {
            var regex = /hsla?\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(,\s*([\d.]+)\s*)?\)/i;
            var result = regex.exec(input);
            return result
                ? ColorUtils.hslaToRgba({
                    a: result.length > 4 ? parseFloat(result[5]) : 1,
                    h: parseInt(result[1], 10),
                    l: parseInt(result[3], 10),
                    s: parseInt(result[2], 10),
                })
                : undefined;
        }
        else {
            var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])([a-f\d])?$/i;
            var hexFixed = input.replace(shorthandRegex, function (_m, r, g, b, a) {
                return r + r + g + g + b + b + (a !== undefined ? a + a : "");
            });
            var regex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i;
            var result = regex.exec(hexFixed);
            return result
                ? {
                    a: result[4] !== undefined ? parseInt(result[4], 16) / 0xff : 1,
                    b: parseInt(result[3], 16),
                    g: parseInt(result[2], 16),
                    r: parseInt(result[1], 16),
                }
                : undefined;
        }
    };
    return ColorUtils;
}());
exports.ColorUtils = ColorUtils;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Utils/Constants.js":
/*!**********************************************************!*\
  !*** ./node_modules/tsparticles/dist/Utils/Constants.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Constants = void 0;
var Constants = (function () {
    function Constants() {
    }
    Constants.canvasClass = "tsparticles-canvas-el";
    Constants.randomColorValue = "random";
    Constants.midColorValue = "mid";
    Constants.touchEndEvent = "touchend";
    Constants.mouseUpEvent = "mouseup";
    Constants.mouseMoveEvent = "mousemove";
    Constants.touchStartEvent = "touchstart";
    Constants.touchMoveEvent = "touchmove";
    Constants.mouseLeaveEvent = "mouseleave";
    Constants.touchCancelEvent = "touchcancel";
    Constants.resizeEvent = "resize";
    Constants.visibilityChangeEvent = "visibilitychange";
    Constants.noPolygonDataLoaded = "No polygon data loaded.";
    Constants.noPolygonFound = "No polygon found, you need to specify SVG url in config.";
    return Constants;
}());
exports.Constants = Constants;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Utils/EventListeners.js":
/*!***************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Utils/EventListeners.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.EventListeners = void 0;
var Enums_1 = __webpack_require__(/*! ../Enums */ "./node_modules/tsparticles/dist/Enums/index.js");
var Constants_1 = __webpack_require__(/*! ./Constants */ "./node_modules/tsparticles/dist/Utils/Constants.js");
var EventListeners = (function () {
    function EventListeners(container) {
        var _this = this;
        this.container = container;
        this.canPush = true;
        this.mouseMoveHandler = function (e) { return _this.mouseTouchMove(e); };
        this.touchStartHandler = function (e) { return _this.mouseTouchMove(e); };
        this.touchMoveHandler = function (e) { return _this.mouseTouchMove(e); };
        this.touchEndHandler = function () { return _this.mouseTouchFinish(); };
        this.mouseLeaveHandler = function () { return _this.mouseTouchFinish(); };
        this.touchCancelHandler = function () { return _this.mouseTouchFinish(); };
        this.touchEndClickHandler = function (e) { return _this.mouseTouchClick(e); };
        this.mouseUpHandler = function (e) { return _this.mouseTouchClick(e); };
        this.visibilityChangeHandler = function () { return _this.handleVisibilityChange(); };
        this.resizeHandler = function () { return _this.handleWindowResize(); };
    }
    EventListeners.manageListener = function (element, event, handler, add, options) {
        if (add) {
            var addOptions = { passive: true };
            if (typeof options === "boolean") {
                addOptions.capture = options;
            }
            else if (options !== undefined) {
                addOptions = options;
            }
            element.addEventListener(event, handler, addOptions);
        }
        else {
            var removeOptions = options;
            element.removeEventListener(event, handler, removeOptions);
        }
    };
    EventListeners.prototype.addListeners = function () {
        this.manageListeners(true);
    };
    EventListeners.prototype.removeListeners = function () {
        this.manageListeners(false);
    };
    EventListeners.prototype.manageListeners = function (add) {
        var container = this.container;
        var options = container.options;
        var detectType = options.interactivity.detectsOn;
        if (detectType === Enums_1.InteractivityDetect.window) {
            container.interactivity.element = window;
        }
        else if (detectType === Enums_1.InteractivityDetect.parent && container.canvas.element) {
            container.interactivity.element = container.canvas.element.parentNode;
        }
        else {
            container.interactivity.element = container.canvas.element;
        }
        var interactivityEl = container.interactivity.element;
        if (interactivityEl &&
            (options.interactivity.events.onHover.enable || options.interactivity.events.onClick.enable)) {
            EventListeners.manageListener(interactivityEl, Constants_1.Constants.mouseMoveEvent, this.mouseMoveHandler, add);
            EventListeners.manageListener(interactivityEl, Constants_1.Constants.touchStartEvent, this.touchStartHandler, add);
            EventListeners.manageListener(interactivityEl, Constants_1.Constants.touchMoveEvent, this.touchMoveHandler, add);
            if (!options.interactivity.events.onClick.enable) {
                EventListeners.manageListener(interactivityEl, Constants_1.Constants.touchEndEvent, this.touchEndHandler, add);
            }
            EventListeners.manageListener(interactivityEl, Constants_1.Constants.mouseLeaveEvent, this.mouseLeaveHandler, add);
            EventListeners.manageListener(interactivityEl, Constants_1.Constants.touchCancelEvent, this.touchCancelHandler, add);
        }
        if (options.interactivity.events.onClick.enable && interactivityEl) {
            EventListeners.manageListener(interactivityEl, Constants_1.Constants.touchEndEvent, this.touchEndClickHandler, add);
            EventListeners.manageListener(interactivityEl, Constants_1.Constants.mouseUpEvent, this.mouseUpHandler, add);
        }
        if (options.interactivity.events.resize) {
            EventListeners.manageListener(window, Constants_1.Constants.resizeEvent, this.resizeHandler, add);
        }
        if (document) {
            EventListeners.manageListener(document, Constants_1.Constants.visibilityChangeEvent, this.visibilityChangeHandler, add, false);
        }
    };
    EventListeners.prototype.handleWindowResize = function () {
        var container = this.container;
        var options = container.options;
        var canvas = container.canvas.element;
        if (!canvas) {
            return;
        }
        var pxRatio = container.retina.pixelRatio;
        container.canvas.size.width = canvas.offsetWidth * pxRatio;
        container.canvas.size.height = canvas.offsetHeight * pxRatio;
        canvas.width = container.canvas.size.width;
        canvas.height = container.canvas.size.height;
        if (!options.particles.move.enable) {
            container.particles.redraw();
        }
        container.densityAutoParticles();
        for (var id in container.plugins) {
            var plugin = container.plugins[id];
            if (plugin.resize !== undefined) {
                plugin.resize();
            }
        }
    };
    EventListeners.prototype.handleVisibilityChange = function () {
        var container = this.container;
        var options = container.options;
        if (!options.pauseOnBlur) {
            return;
        }
        if (document === null || document === void 0 ? void 0 : document.hidden) {
            container.pageHidden = true;
            container.pause();
        }
        else {
            container.pageHidden = false;
            if (container.getAnimationStatus()) {
                container.play(true);
            }
            else {
                container.draw();
            }
        }
    };
    EventListeners.prototype.mouseTouchMove = function (e) {
        var _a, _b, _c;
        var container = this.container;
        var options = container.options;
        var pos;
        var canvas = container.canvas.element;
        if (e.type.startsWith("mouse")) {
            this.canPush = true;
            var mouseEvent = e;
            if (((_a = container.interactivity) === null || _a === void 0 ? void 0 : _a.element) === undefined) {
                return;
            }
            if (container.interactivity.element === window) {
                if (canvas) {
                    var clientRect = canvas.getBoundingClientRect();
                    pos = {
                        x: mouseEvent.clientX - clientRect.left,
                        y: mouseEvent.clientY - clientRect.top,
                    };
                }
            }
            else if (options.interactivity.detectsOn === Enums_1.InteractivityDetect.parent) {
                var source = mouseEvent.target;
                var target = mouseEvent.currentTarget;
                if (source && target) {
                    var sourceRect = source.getBoundingClientRect();
                    var targetRect = target.getBoundingClientRect();
                    pos = {
                        x: mouseEvent.offsetX + sourceRect.left - targetRect.left,
                        y: mouseEvent.offsetY + sourceRect.top - targetRect.top,
                    };
                }
                else {
                    pos = {
                        x: mouseEvent.offsetX || mouseEvent.clientX,
                        y: mouseEvent.offsetY || mouseEvent.clientY,
                    };
                }
            }
            else {
                if (mouseEvent.target === container.canvas.element) {
                    pos = {
                        x: mouseEvent.offsetX || mouseEvent.clientX,
                        y: mouseEvent.offsetY || mouseEvent.clientY,
                    };
                }
            }
        }
        else {
            this.canPush = e.type !== "touchmove";
            var touchEvent = e;
            var lastTouch = touchEvent.touches[touchEvent.touches.length - 1];
            var canvasRect = canvas === null || canvas === void 0 ? void 0 : canvas.getBoundingClientRect();
            pos = {
                x: lastTouch.clientX - ((_b = canvasRect === null || canvasRect === void 0 ? void 0 : canvasRect.left) !== null && _b !== void 0 ? _b : 0),
                y: lastTouch.clientY - ((_c = canvasRect === null || canvasRect === void 0 ? void 0 : canvasRect.top) !== null && _c !== void 0 ? _c : 0),
            };
        }
        var pxRatio = container.retina.pixelRatio;
        if (pos) {
            pos.x *= pxRatio;
            pos.y *= pxRatio;
        }
        container.interactivity.mouse.position = pos;
        container.interactivity.status = Constants_1.Constants.mouseMoveEvent;
    };
    EventListeners.prototype.mouseTouchFinish = function () {
        var container = this.container;
        delete container.interactivity.mouse.position;
        container.interactivity.status = Constants_1.Constants.mouseLeaveEvent;
    };
    EventListeners.prototype.mouseTouchClick = function (e) {
        var container = this.container;
        var options = container.options;
        var handled = false;
        var mousePosition = container.interactivity.mouse.position;
        if (mousePosition === undefined || !options.interactivity.events.onClick.enable) {
            return;
        }
        for (var id in container.plugins) {
            var plugin = container.plugins[id];
            if (plugin.clickPositionValid !== undefined) {
                handled = plugin.clickPositionValid(mousePosition);
                if (handled) {
                    break;
                }
            }
        }
        if (!handled) {
            this.doMouseTouchClick(e);
        }
    };
    EventListeners.prototype.doMouseTouchClick = function (e) {
        var _this = this;
        var container = this.container;
        var options = container.options;
        if (this.canPush) {
            var mousePos = container.interactivity.mouse.position;
            if (mousePos) {
                container.interactivity.mouse.clickPosition = {
                    x: mousePos.x,
                    y: mousePos.y,
                };
            }
            else {
                return;
            }
            container.interactivity.mouse.clickTime = new Date().getTime();
            if (options.interactivity.events.onClick.mode instanceof Array) {
                for (var _i = 0, _a = options.interactivity.events.onClick.mode; _i < _a.length; _i++) {
                    var mode = _a[_i];
                    this.handleClickMode(mode);
                }
            }
            else {
                var mode = options.interactivity.events.onClick.mode;
                this.handleClickMode(mode);
            }
        }
        if (e.type === "touchend") {
            setTimeout(function () { return _this.mouseTouchFinish(); }, 500);
        }
    };
    EventListeners.prototype.handleClickMode = function (mode) {
        var container = this.container;
        var options = container.options;
        var pushNb = options.interactivity.modes.push.quantity;
        var removeNb = options.interactivity.modes.remove.quantity;
        switch (mode) {
            case Enums_1.ClickMode.push: {
                if (pushNb > 0) {
                    if (options.particles.move.enable) {
                        container.particles.push(pushNb, container.interactivity.mouse);
                    }
                    else {
                        if (pushNb === 1) {
                            container.particles.push(pushNb, container.interactivity.mouse);
                        }
                        else if (pushNb > 1) {
                            container.particles.push(pushNb);
                        }
                    }
                }
                break;
            }
            case Enums_1.ClickMode.remove:
                container.particles.removeQuantity(removeNb);
                break;
            case Enums_1.ClickMode.bubble:
                container.bubble.clicking = true;
                break;
            case Enums_1.ClickMode.repulse:
                container.repulse.clicking = true;
                container.repulse.count = 0;
                for (var _i = 0, _a = container.repulse.particles; _i < _a.length; _i++) {
                    var particle = _a[_i];
                    particle.velocity.horizontal = particle.initialVelocity.horizontal;
                    particle.velocity.vertical = particle.initialVelocity.vertical;
                }
                container.repulse.particles = [];
                container.repulse.finish = false;
                setTimeout(function () {
                    if (!container.destroyed) {
                        container.repulse.clicking = false;
                    }
                }, options.interactivity.modes.repulse.duration * 1000);
                break;
            case Enums_1.ClickMode.pause:
                if (container.getAnimationStatus()) {
                    container.pause();
                }
                else {
                    container.play();
                }
                break;
        }
        for (var id in container.plugins) {
            var plugin = container.plugins[id];
            if (plugin.handleClickMode) {
                plugin.handleClickMode(mode);
            }
        }
    };
    return EventListeners;
}());
exports.EventListeners = EventListeners;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Utils/Plugins.js":
/*!********************************************************!*\
  !*** ./node_modules/tsparticles/dist/Utils/Plugins.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Plugins = void 0;
var Plugins = (function () {
    function Plugins() {
    }
    Plugins.getPlugin = function (plugin) {
        return this.plugins.filter(function (t) { return t.id === plugin; })[0];
    };
    Plugins.addPlugin = function (plugin) {
        if (!this.getPlugin(plugin.id)) {
            this.plugins.push(plugin);
        }
    };
    Plugins.getAvailablePlugins = function (container) {
        var res = {};
        var availablePlugins = this.plugins.filter(function (t) { return t.needsPlugin(container.sourceOptions); });
        for (var _i = 0, availablePlugins_1 = availablePlugins; _i < availablePlugins_1.length; _i++) {
            var plugin = availablePlugins_1[_i];
            res[plugin.id] = plugin.getPlugin(container);
        }
        return res;
    };
    Plugins.loadOptions = function (options, sourceOptions) {
        for (var _i = 0, _a = this.plugins; _i < _a.length; _i++) {
            var plugin = _a[_i];
            plugin.loadOptions(options, sourceOptions);
        }
    };
    Plugins.getPreset = function (preset) {
        return this.presets[preset];
    };
    Plugins.addPreset = function (presetKey, options) {
        if (!this.getPreset(presetKey)) {
            this.presets[presetKey] = options;
        }
    };
    Plugins.addShapeDrawer = function (type, drawer) {
        if (!this.drawers[type]) {
            this.drawers[type] = drawer;
        }
    };
    Plugins.getShapeDrawer = function (type) {
        return this.drawers[type];
    };
    Plugins.getSupportedShapes = function () {
        return Object.keys(this.drawers);
    };
    Plugins.plugins = [];
    Plugins.presets = {};
    Plugins.drawers = {};
    return Plugins;
}());
exports.Plugins = Plugins;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Utils/Point.js":
/*!******************************************************!*\
  !*** ./node_modules/tsparticles/dist/Utils/Point.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Point = void 0;
var Point = (function () {
    function Point(position, particle) {
        this.position = {
            x: position.x,
            y: position.y,
        };
        this.particle = particle;
    }
    return Point;
}());
exports.Point = Point;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Utils/QuadTree.js":
/*!*********************************************************!*\
  !*** ./node_modules/tsparticles/dist/Utils/QuadTree.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.QuadTree = void 0;
var Rectangle_1 = __webpack_require__(/*! ./Rectangle */ "./node_modules/tsparticles/dist/Utils/Rectangle.js");
var QuadTree = (function () {
    function QuadTree(rectangle, capacity) {
        this.rectangle = rectangle;
        this.capacity = capacity;
        this.points = [];
        this.divided = false;
    }
    QuadTree.prototype.subdivide = function () {
        var x = this.rectangle.position.x;
        var y = this.rectangle.position.y;
        var w = this.rectangle.size.width;
        var h = this.rectangle.size.height;
        var capacity = this.capacity;
        this.northEast = new QuadTree(new Rectangle_1.Rectangle(x, y, w / 2, h / 2), capacity);
        this.northWest = new QuadTree(new Rectangle_1.Rectangle(x + w / 2, y, w / 2, h / 2), capacity);
        this.southEast = new QuadTree(new Rectangle_1.Rectangle(x, y + h / 2, w / 2, h / 2), capacity);
        this.southWest = new QuadTree(new Rectangle_1.Rectangle(x + w / 2, y + h / 2, w / 2, h / 2), capacity);
        this.divided = true;
    };
    QuadTree.prototype.insert = function (point) {
        var _a, _b, _c, _d, _e;
        if (!this.rectangle.contains(point.position)) {
            return false;
        }
        if (this.points.length < this.capacity) {
            this.points.push(point);
            return true;
        }
        else {
            if (!this.divided) {
                this.subdivide();
            }
        }
        return ((_e = (((_a = this.northEast) === null || _a === void 0 ? void 0 : _a.insert(point)) || ((_b = this.northWest) === null || _b === void 0 ? void 0 : _b.insert(point)) || ((_c = this.southEast) === null || _c === void 0 ? void 0 : _c.insert(point)) || ((_d = this.southWest) === null || _d === void 0 ? void 0 : _d.insert(point)))) !== null && _e !== void 0 ? _e : false);
    };
    QuadTree.prototype.query = function (range, found) {
        var _a, _b, _c, _d;
        var res = found !== null && found !== void 0 ? found : [];
        if (!range.intersects(this.rectangle)) {
            return [];
        }
        else {
            for (var _i = 0, _e = this.points; _i < _e.length; _i++) {
                var p = _e[_i];
                if (range.contains(p.position)) {
                    res.push(p.particle);
                }
            }
            if (this.divided) {
                (_a = this.northEast) === null || _a === void 0 ? void 0 : _a.query(range, res);
                (_b = this.northWest) === null || _b === void 0 ? void 0 : _b.query(range, res);
                (_c = this.southEast) === null || _c === void 0 ? void 0 : _c.query(range, res);
                (_d = this.southWest) === null || _d === void 0 ? void 0 : _d.query(range, res);
            }
        }
        return res;
    };
    return QuadTree;
}());
exports.QuadTree = QuadTree;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Utils/Range.js":
/*!******************************************************!*\
  !*** ./node_modules/tsparticles/dist/Utils/Range.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Range = void 0;
var Range = (function () {
    function Range(x, y) {
        this.position = {
            x: x,
            y: y,
        };
    }
    return Range;
}());
exports.Range = Range;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Utils/Rectangle.js":
/*!**********************************************************!*\
  !*** ./node_modules/tsparticles/dist/Utils/Rectangle.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = void 0;
var Range_1 = __webpack_require__(/*! ./Range */ "./node_modules/tsparticles/dist/Utils/Range.js");
var Rectangle = (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(x, y, width, height) {
        var _this = _super.call(this, x, y) || this;
        _this.size = {
            height: height,
            width: width,
        };
        return _this;
    }
    Rectangle.prototype.contains = function (point) {
        return (point.x >= this.position.x - this.size.width &&
            point.x < this.position.x + this.size.width &&
            point.y >= this.position.y - this.size.height &&
            point.y < this.position.y + this.size.height);
    };
    Rectangle.prototype.intersects = function (range) {
        var rect = range;
        var circle = range;
        var w = this.size.width;
        var h = this.size.height;
        var pos1 = this.position;
        var pos2 = range.position;
        if (circle.radius !== undefined) {
            return circle.intersects(this);
        }
        else if (rect.size !== undefined) {
            var size2 = rect.size;
            var w2 = size2.width;
            var h2 = size2.height;
            return (pos2.x - w2 < pos1.x + w &&
                pos2.x + w2 > pos1.x - w &&
                pos2.y - h2 < pos1.y + h &&
                pos2.y + h2 > pos1.y - h);
        }
        return false;
    };
    return Rectangle;
}(Range_1.Range));
exports.Rectangle = Rectangle;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Utils/SimplexNoise.js":
/*!*************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Utils/SimplexNoise.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.SimplexNoise = void 0;
var F3 = 1.0 / 3.0;
var G3 = 1.0 / 6.0;
var grad3 = new Float32Array([
    1, 1, 0,
    -1, 1, 0,
    1, -1, 0,
    -1, -1, 0,
    1, 0, 1,
    -1, 0, 1,
    1, 0, -1,
    -1, 0, -1,
    0, 1, 1,
    0, -1, 1,
    0, 1, -1,
    0, -1, -1,
]);
var buildPermutationTable = function (random) {
    var p = new Uint8Array(256);
    for (var i = 0; i < 256; i++) {
        p[i] = i;
    }
    for (var i = 0; i < 255; i++) {
        var r = i + ~~(random() * (256 - i));
        var aux = p[i];
        p[i] = p[r];
        p[r] = aux;
    }
    return p;
};
var SimplexNoise = (function () {
    function SimplexNoise(random) {
        var randomFunc = random !== null && random !== void 0 ? random : Math.random;
        this.p = buildPermutationTable(randomFunc);
        this.perm = new Uint8Array(512);
        this.permMod12 = new Uint8Array(512);
        for (var i = 0; i < 512; i++) {
            this.perm[i] = this.p[i & 255];
            this.permMod12[i] = this.perm[i] % 12;
        }
    }
    SimplexNoise.prototype.noise3D = function (xin, yin, zin) {
        var permMod12 = this.permMod12;
        var perm = this.perm;
        var n0, n1, n2, n3;
        var s = (xin + yin + zin) * F3;
        var i = Math.floor(xin + s);
        var j = Math.floor(yin + s);
        var k = Math.floor(zin + s);
        var t = (i + j + k) * G3;
        var X0 = i - t;
        var Y0 = j - t;
        var Z0 = k - t;
        var x0 = xin - X0;
        var y0 = yin - Y0;
        var z0 = zin - Z0;
        var i1, j1, k1;
        var i2, j2, k2;
        if (x0 >= y0) {
            if (y0 >= z0) {
                i1 = 1;
                j1 = 0;
                k1 = 0;
                i2 = 1;
                j2 = 1;
                k2 = 0;
            }
            else if (x0 >= z0) {
                i1 = 1;
                j1 = 0;
                k1 = 0;
                i2 = 1;
                j2 = 0;
                k2 = 1;
            }
            else {
                i1 = 0;
                j1 = 0;
                k1 = 1;
                i2 = 1;
                j2 = 0;
                k2 = 1;
            }
        }
        else {
            if (y0 < z0) {
                i1 = 0;
                j1 = 0;
                k1 = 1;
                i2 = 0;
                j2 = 1;
                k2 = 1;
            }
            else if (x0 < z0) {
                i1 = 0;
                j1 = 1;
                k1 = 0;
                i2 = 0;
                j2 = 1;
                k2 = 1;
            }
            else {
                i1 = 0;
                j1 = 1;
                k1 = 0;
                i2 = 1;
                j2 = 1;
                k2 = 0;
            }
        }
        var x1 = x0 - i1 + G3;
        var y1 = y0 - j1 + G3;
        var z1 = z0 - k1 + G3;
        var x2 = x0 - i2 + 2.0 * G3;
        var y2 = y0 - j2 + 2.0 * G3;
        var z2 = z0 - k2 + 2.0 * G3;
        var x3 = x0 - 1.0 + 3.0 * G3;
        var y3 = y0 - 1.0 + 3.0 * G3;
        var z3 = z0 - 1.0 + 3.0 * G3;
        var ii = i & 255;
        var jj = j & 255;
        var kk = k & 255;
        var t0 = 0.6 - x0 * x0 - y0 * y0 - z0 * z0;
        if (t0 < 0) {
            n0 = 0.0;
        }
        else {
            var gi0 = permMod12[ii + perm[jj + perm[kk]]] * 3;
            t0 *= t0;
            n0 = t0 * t0 * (grad3[gi0] * x0 + grad3[gi0 + 1] * y0 + grad3[gi0 + 2] * z0);
        }
        var t1 = 0.6 - x1 * x1 - y1 * y1 - z1 * z1;
        if (t1 < 0) {
            n1 = 0.0;
        }
        else {
            var gi1 = permMod12[ii + i1 + perm[jj + j1 + perm[kk + k1]]] * 3;
            t1 *= t1;
            n1 = t1 * t1 * (grad3[gi1] * x1 + grad3[gi1 + 1] * y1 + grad3[gi1 + 2] * z1);
        }
        var t2 = 0.6 - x2 * x2 - y2 * y2 - z2 * z2;
        if (t2 < 0) {
            n2 = 0.0;
        }
        else {
            var gi2 = permMod12[ii + i2 + perm[jj + j2 + perm[kk + k2]]] * 3;
            t2 *= t2;
            n2 = t2 * t2 * (grad3[gi2] * x2 + grad3[gi2 + 1] * y2 + grad3[gi2 + 2] * z2);
        }
        var t3 = 0.6 - x3 * x3 - y3 * y3 - z3 * z3;
        if (t3 < 0) {
            n3 = 0.0;
        }
        else {
            var gi3 = permMod12[ii + 1 + perm[jj + 1 + perm[kk + 1]]] * 3;
            t3 *= t3;
            n3 = t3 * t3 * (grad3[gi3] * x3 + grad3[gi3 + 1] * y3 + grad3[gi3 + 2] * z3);
        }
        return 32.0 * (n0 + n1 + n2 + n3);
    };
    return SimplexNoise;
}());
exports.SimplexNoise = SimplexNoise;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Utils/Utils.js":
/*!******************************************************!*\
  !*** ./node_modules/tsparticles/dist/Utils/Utils.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Utils = void 0;
var Enums_1 = __webpack_require__(/*! ../Enums */ "./node_modules/tsparticles/dist/Enums/index.js");
var ColorUtils_1 = __webpack_require__(/*! ./ColorUtils */ "./node_modules/tsparticles/dist/Utils/ColorUtils.js");
var Utils = (function () {
    function Utils() {
    }
    Utils.replaceColorSvg = function (image, color, opacity) {
        if (!image.svgData) {
            return "";
        }
        var svgXml = image.svgData;
        var rgbHex = /#([0-9A-F]{3,6})/gi;
        return svgXml.replace(rgbHex, function () { return ColorUtils_1.ColorUtils.getStyleFromHsl(color, opacity); });
    };
    Utils.clamp = function (num, min, max) {
        return Math.min(Math.max(num, min), max);
    };
    Utils.isInArray = function (value, array) {
        return value === array || (array instanceof Array && array.indexOf(value) > -1);
    };
    Utils.mix = function (comp1, comp2, weight1, weight2) {
        return Math.floor((comp1 * weight1 + comp2 * weight2) / (weight1 + weight2));
    };
    Utils.getParticleBaseVelocity = function (particle) {
        var velocityBase;
        switch (particle.direction) {
            case Enums_1.MoveDirection.top:
                velocityBase = { x: 0, y: -1 };
                break;
            case Enums_1.MoveDirection.topRight:
                velocityBase = { x: 0.5, y: -0.5 };
                break;
            case Enums_1.MoveDirection.right:
                velocityBase = { x: 1, y: -0 };
                break;
            case Enums_1.MoveDirection.bottomRight:
                velocityBase = { x: 0.5, y: 0.5 };
                break;
            case Enums_1.MoveDirection.bottom:
                velocityBase = { x: 0, y: 1 };
                break;
            case Enums_1.MoveDirection.bottomLeft:
                velocityBase = { x: -0.5, y: 1 };
                break;
            case Enums_1.MoveDirection.left:
                velocityBase = { x: -1, y: 0 };
                break;
            case Enums_1.MoveDirection.topLeft:
                velocityBase = { x: -0.5, y: -0.5 };
                break;
            default:
                velocityBase = { x: 0, y: 0 };
                break;
        }
        return velocityBase;
    };
    Utils.getDistances = function (pointA, pointB) {
        var dx = pointA.x - pointB.x;
        var dy = pointA.y - pointB.y;
        return { dx: dx, dy: dy, distance: Math.sqrt(dx * dx + dy * dy) };
    };
    Utils.getDistance = function (pointA, pointB) {
        return this.getDistances(pointA, pointB).distance;
    };
    Utils.loadFont = function (character) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        return [4, document.fonts.load(character.weight + " 36px '" + character.font + "'")];
                    case 1:
                        _b.sent();
                        return [3, 3];
                    case 2:
                        _a = _b.sent();
                        return [3, 3];
                    case 3: return [2];
                }
            });
        });
    };
    Utils.arrayRandomIndex = function (array) {
        return Math.floor(Math.random() * array.length);
    };
    Utils.itemFromArray = function (array, index) {
        return array[index !== undefined ? index : this.arrayRandomIndex(array)];
    };
    Utils.randomInRange = function (min, max) {
        return Math.random() * (max - min) + min;
    };
    Utils.isPointInside = function (point, size, radius) {
        return this.areBoundsInside(this.calculateBounds(point, radius !== null && radius !== void 0 ? radius : 0), size);
    };
    Utils.areBoundsInside = function (bounds, size) {
        return bounds.left < size.width && bounds.right > 0 && bounds.top < size.height && bounds.bottom > 0;
    };
    Utils.calculateBounds = function (point, radius) {
        return {
            bottom: point.y + radius,
            left: point.x - radius,
            right: point.x + radius,
            top: point.y - radius,
        };
    };
    Utils.loadImage = function (source) {
        return new Promise(function (resolve, reject) {
            var image = {
                source: source,
                type: source.substr(source.length - 3),
            };
            if (source) {
                var img_1 = new Image();
                img_1.addEventListener("load", function () {
                    image.element = img_1;
                    resolve(image);
                });
                img_1.addEventListener("error", function () {
                    reject("Error tsParticles - loading image: " + source);
                });
                img_1.src = source;
            }
            else {
                reject("Error tsParticles - No image.src");
            }
        });
    };
    Utils.downloadSvgImage = function (source) {
        return __awaiter(this, void 0, void 0, function () {
            var image, response, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!source) return [3, 5];
                        image = {
                            source: source,
                            type: source.substr(source.length - 3),
                        };
                        if (image.type !== "svg") {
                            return [2, this.loadImage(source)];
                        }
                        return [4, fetch(image.source)];
                    case 1:
                        response = _b.sent();
                        if (!response.ok) return [3, 3];
                        _a = image;
                        return [4, response.text()];
                    case 2:
                        _a.svgData = _b.sent();
                        return [2, image];
                    case 3: throw new Error("Error tsParticles - Image not found");
                    case 4: return [3, 6];
                    case 5: throw new Error("Error tsParticles - No image.src");
                    case 6: return [2];
                }
            });
        });
    };
    Utils.deepExtend = function (destination) {
        var _this = this;
        var sources = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            sources[_i - 1] = arguments[_i];
        }
        for (var _a = 0, sources_1 = sources; _a < sources_1.length; _a++) {
            var source = sources_1[_a];
            if (source === undefined || source === null) {
                continue;
            }
            var typeOfSource = typeof source;
            if (typeOfSource === "object") {
                var sourceIsArray = Array.isArray(source);
                if (sourceIsArray) {
                    if (typeof destination !== "object" || !destination || !Array.isArray(destination)) {
                        destination = [];
                    }
                }
                else {
                    if (typeof destination !== "object" || !destination || Array.isArray(destination)) {
                        destination = {};
                    }
                }
                var _loop_1 = function (key) {
                    if (key === "__proto__") {
                        return "continue";
                    }
                    var value = source[key];
                    var isObject = typeof value === "object";
                    destination[key] =
                        isObject && Array.isArray(value)
                            ? value.map(function (v) { return _this.deepExtend(destination[key], v); })
                            : this_1.deepExtend(destination[key], value);
                };
                var this_1 = this;
                for (var key in source) {
                    _loop_1(key);
                }
            }
            else {
                destination = source;
            }
        }
        return destination;
    };
    return Utils;
}());
exports.Utils = Utils;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Utils/index.js":
/*!******************************************************!*\
  !*** ./node_modules/tsparticles/dist/Utils/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(/*! ./CanvasUtils */ "./node_modules/tsparticles/dist/Utils/CanvasUtils.js"), exports);
__exportStar(__webpack_require__(/*! ./Circle */ "./node_modules/tsparticles/dist/Utils/Circle.js"), exports);
__exportStar(__webpack_require__(/*! ./CircleWarp */ "./node_modules/tsparticles/dist/Utils/CircleWarp.js"), exports);
__exportStar(__webpack_require__(/*! ./ColorUtils */ "./node_modules/tsparticles/dist/Utils/ColorUtils.js"), exports);
__exportStar(__webpack_require__(/*! ./Constants */ "./node_modules/tsparticles/dist/Utils/Constants.js"), exports);
__exportStar(__webpack_require__(/*! ./EventListeners */ "./node_modules/tsparticles/dist/Utils/EventListeners.js"), exports);
__exportStar(__webpack_require__(/*! ./Plugins */ "./node_modules/tsparticles/dist/Utils/Plugins.js"), exports);
__exportStar(__webpack_require__(/*! ./Point */ "./node_modules/tsparticles/dist/Utils/Point.js"), exports);
__exportStar(__webpack_require__(/*! ./QuadTree */ "./node_modules/tsparticles/dist/Utils/QuadTree.js"), exports);
__exportStar(__webpack_require__(/*! ./Range */ "./node_modules/tsparticles/dist/Utils/Range.js"), exports);
__exportStar(__webpack_require__(/*! ./Rectangle */ "./node_modules/tsparticles/dist/Utils/Rectangle.js"), exports);
__exportStar(__webpack_require__(/*! ./SimplexNoise */ "./node_modules/tsparticles/dist/Utils/SimplexNoise.js"), exports);
__exportStar(__webpack_require__(/*! ./Utils */ "./node_modules/tsparticles/dist/Utils/Utils.js"), exports);


/***/ }),

/***/ "./node_modules/tsparticles/dist/index.js":
/*!************************************************!*\
  !*** ./node_modules/tsparticles/dist/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tsParticles = exports.pJSDom = exports.particlesJS = void 0;
var pjs_1 = __webpack_require__(/*! ./pjs */ "./node_modules/tsparticles/dist/pjs.js");
var main_1 = __webpack_require__(/*! ./main */ "./node_modules/tsparticles/dist/main.js");
var tsParticles = new main_1.Main();
exports.tsParticles = tsParticles;
tsParticles.init();
var _a = pjs_1.initPjs(tsParticles), particlesJS = _a.particlesJS, pJSDom = _a.pJSDom;
exports.particlesJS = particlesJS;
exports.pJSDom = pJSDom;
__exportStar(__webpack_require__(/*! ./Enums */ "./node_modules/tsparticles/dist/Enums/index.js"), exports);


/***/ }),

/***/ "./node_modules/tsparticles/dist/main.js":
/*!***********************************************!*\
  !*** ./node_modules/tsparticles/dist/main.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Main = void 0;
var main_slim_1 = __webpack_require__(/*! ./main.slim */ "./node_modules/tsparticles/dist/main.slim.js");
var AbsorbersPlugin_1 = __webpack_require__(/*! ./Plugins/Absorbers/AbsorbersPlugin */ "./node_modules/tsparticles/dist/Plugins/Absorbers/AbsorbersPlugin.js");
var EmittersPlugin_1 = __webpack_require__(/*! ./Plugins/Emitters/EmittersPlugin */ "./node_modules/tsparticles/dist/Plugins/Emitters/EmittersPlugin.js");
var PolygonMaskPlugin_1 = __webpack_require__(/*! ./Plugins/PolygonMask/PolygonMaskPlugin */ "./node_modules/tsparticles/dist/Plugins/PolygonMask/PolygonMaskPlugin.js");
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        var _this = _super.call(this) || this;
        _this.addPlugin(AbsorbersPlugin_1.AbsorbersPlugin);
        _this.addPlugin(EmittersPlugin_1.EmittersPlugin);
        _this.addPlugin(PolygonMaskPlugin_1.PolygonMaskPlugin);
        return _this;
    }
    return Main;
}(main_slim_1.MainSlim));
exports.Main = Main;


/***/ }),

/***/ "./node_modules/tsparticles/dist/main.slim.js":
/*!****************************************************!*\
  !*** ./node_modules/tsparticles/dist/main.slim.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainSlim = void 0;
var SquareDrawer_1 = __webpack_require__(/*! ./ShapeDrawers/SquareDrawer */ "./node_modules/tsparticles/dist/ShapeDrawers/SquareDrawer.js");
var TextDrawer_1 = __webpack_require__(/*! ./ShapeDrawers/TextDrawer */ "./node_modules/tsparticles/dist/ShapeDrawers/TextDrawer.js");
var ImageDrawer_1 = __webpack_require__(/*! ./ShapeDrawers/ImageDrawer */ "./node_modules/tsparticles/dist/ShapeDrawers/ImageDrawer.js");
var Utils_1 = __webpack_require__(/*! ./Utils */ "./node_modules/tsparticles/dist/Utils/index.js");
var Types_1 = __webpack_require__(/*! ./Enums/Types */ "./node_modules/tsparticles/dist/Enums/Types/index.js");
var LineDrawer_1 = __webpack_require__(/*! ./ShapeDrawers/LineDrawer */ "./node_modules/tsparticles/dist/ShapeDrawers/LineDrawer.js");
var CircleDrawer_1 = __webpack_require__(/*! ./ShapeDrawers/CircleDrawer */ "./node_modules/tsparticles/dist/ShapeDrawers/CircleDrawer.js");
var TriangleDrawer_1 = __webpack_require__(/*! ./ShapeDrawers/TriangleDrawer */ "./node_modules/tsparticles/dist/ShapeDrawers/TriangleDrawer.js");
var StarDrawer_1 = __webpack_require__(/*! ./ShapeDrawers/StarDrawer */ "./node_modules/tsparticles/dist/ShapeDrawers/StarDrawer.js");
var PolygonDrawer_1 = __webpack_require__(/*! ./ShapeDrawers/PolygonDrawer */ "./node_modules/tsparticles/dist/ShapeDrawers/PolygonDrawer.js");
var Loader_1 = __webpack_require__(/*! ./Core/Loader */ "./node_modules/tsparticles/dist/Core/Loader.js");
var MainSlim = (function () {
    function MainSlim() {
        this.initialized = false;
        if (typeof window !== "undefined" && window) {
            window.customRequestAnimationFrame = (function () {
                return (window.requestAnimationFrame ||
                    window.webkitRequestAnimationFrame ||
                    window.mozRequestAnimationFrame ||
                    window.oRequestAnimationFrame ||
                    window.msRequestAnimationFrame ||
                    (function (callback) { return window.setTimeout(callback, 1000 / 60); }));
            })();
            window.customCancelRequestAnimationFrame = (function () {
                return (window.cancelAnimationFrame ||
                    window.webkitCancelRequestAnimationFrame ||
                    window.mozCancelRequestAnimationFrame ||
                    window.oCancelRequestAnimationFrame ||
                    window.msCancelRequestAnimationFrame ||
                    clearTimeout);
            })();
        }
        var squareDrawer = new SquareDrawer_1.SquareDrawer();
        var textDrawer = new TextDrawer_1.TextDrawer();
        var imageDrawer = new ImageDrawer_1.ImageDrawer();
        Utils_1.Plugins.addShapeDrawer(Types_1.ShapeType.line, new LineDrawer_1.LineDrawer());
        Utils_1.Plugins.addShapeDrawer(Types_1.ShapeType.circle, new CircleDrawer_1.CircleDrawer());
        Utils_1.Plugins.addShapeDrawer(Types_1.ShapeType.edge, squareDrawer);
        Utils_1.Plugins.addShapeDrawer(Types_1.ShapeType.square, squareDrawer);
        Utils_1.Plugins.addShapeDrawer(Types_1.ShapeType.triangle, new TriangleDrawer_1.TriangleDrawer());
        Utils_1.Plugins.addShapeDrawer(Types_1.ShapeType.star, new StarDrawer_1.StarDrawer());
        Utils_1.Plugins.addShapeDrawer(Types_1.ShapeType.polygon, new PolygonDrawer_1.PolygonDrawer());
        Utils_1.Plugins.addShapeDrawer(Types_1.ShapeType.char, textDrawer);
        Utils_1.Plugins.addShapeDrawer(Types_1.ShapeType.character, textDrawer);
        Utils_1.Plugins.addShapeDrawer(Types_1.ShapeType.image, imageDrawer);
        Utils_1.Plugins.addShapeDrawer(Types_1.ShapeType.images, imageDrawer);
    }
    MainSlim.prototype.init = function () {
        if (!this.initialized) {
            this.initialized = true;
        }
    };
    MainSlim.prototype.loadFromArray = function (tagId, params, index) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, Loader_1.Loader.loadFromArray(tagId, params, index)];
            });
        });
    };
    MainSlim.prototype.load = function (tagId, params) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, Loader_1.Loader.load(tagId, params)];
            });
        });
    };
    MainSlim.prototype.loadJSON = function (tagId, pathConfigJson) {
        return Loader_1.Loader.loadJSON(tagId, pathConfigJson);
    };
    MainSlim.prototype.setOnClickHandler = function (callback) {
        Loader_1.Loader.setOnClickHandler(callback);
    };
    MainSlim.prototype.dom = function () {
        return Loader_1.Loader.dom();
    };
    MainSlim.prototype.domItem = function (index) {
        return Loader_1.Loader.domItem(index);
    };
    MainSlim.prototype.addShape = function (shape, drawer, init, afterEffect, destroy) {
        var customDrawer;
        if (typeof drawer === "function") {
            customDrawer = {
                afterEffect: afterEffect,
                draw: drawer,
                destroy: destroy,
                init: init,
            };
        }
        else {
            customDrawer = drawer;
        }
        Utils_1.Plugins.addShapeDrawer(shape, customDrawer);
    };
    MainSlim.prototype.addPreset = function (preset, options) {
        Utils_1.Plugins.addPreset(preset, options);
    };
    MainSlim.prototype.addPlugin = function (plugin) {
        Utils_1.Plugins.addPlugin(plugin);
    };
    return MainSlim;
}());
exports.MainSlim = MainSlim;


/***/ }),

/***/ "./node_modules/tsparticles/dist/pjs.js":
/*!**********************************************!*\
  !*** ./node_modules/tsparticles/dist/pjs.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.initPjs = void 0;
var initPjs = function (main) {
    var particlesJS = function (tagId, params) {
        return main.load(tagId, params);
    };
    particlesJS.load = function (tagId, pathConfigJson, callback) {
        main.loadJSON(tagId, pathConfigJson).then(function (container) {
            if (container) {
                callback(container);
            }
        });
    };
    particlesJS.setOnClickHandler = function (callback) {
        main.setOnClickHandler(callback);
    };
    var pJSDom = main.dom();
    return { particlesJS: particlesJS, pJSDom: pJSDom };
};
exports.initPjs = initPjs;


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_particles_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-particles-js */ "./node_modules/react-particles-js/index.js");
/* harmony import */ var react_particles_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_particles_js__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/lowesyang/Documents/website/the-oasis-website/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var ParticlesParams = {
  particles: {
    number: {
      value: 50,
      density: {
        enable: true,
        value_area: 500
      }
    },
    color: {
      value: "#000"
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#999"
      },
      polygon: {
        nb_sides: 5
      }
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 10,
      random: true,
      anim: {
        enable: false,
        speed: 80,
        size_min: 0.1,
        sync: false
      }
    },
    line_linked: {
      enable: true,
      distance: 300,
      color: "#ccc",
      opacity: 0.4,
      width: 2
    },
    move: {
      enable: true,
      speed: 3,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  retina_detect: true
};
function Home() {
  return __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 9
    }
  }, "THE OASIS - Protocol of Cross-Contract Items Transferring"), __jsx("link", {
    rel: "icon",
    href: "/favicon.ico",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 9
    }
  }), __jsx("meta", {
    charSet: "utf-8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 9
    }
  }), __jsx("meta", {
    name: "keywords",
    content: "THE OASIS protocol blockchain NFT crypto asset",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 9
    }
  }), __jsx("meta", {
    name: "description",
    content: "THE OASIS protocl. Bring you to the ecosystem of NFT asset",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 9
    }
  }), __jsx("meta", {
    name: "author",
    content: "byterum",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 9
    }
  }), __jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1, shrink-to-fit=no",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 9
    }
  }), __jsx("meta", {
    name: "robots",
    content: "index,follow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 9
    }
  }), __jsx("meta", {
    name: "google",
    content: "index,follow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 9
    }
  }), __jsx("meta", {
    name: "googlebot",
    content: "index,follow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 9
    }
  }), __jsx("meta", {
    name: "verify",
    content: "index,follow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 9
    }
  }), __jsx("link", {
    href: "https://rsms.me/inter/inter-ui.css",
    rel: "stylesheet",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 9
    }
  }), __jsx("link", {
    rel: "stylesheet",
    href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 9
    }
  }), __jsx("link", {
    rel: "stylesheet",
    href: "css/default.css",
    id: "theme-color",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "smart-scroll",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "container-fluid",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 9
    }
  }, __jsx("nav", {
    className: "navbar navbar-expand-md navbar-light",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 11
    }
  }, __jsx("a", {
    className: "navbar-brand heading-black",
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 13
    }
  }, "THE OASIS"), __jsx("button", {
    className: "navbar-toggler navbar-toggler-right border-0",
    type: "button",
    "data-toggle": "collapse",
    "data-target": "#navbarCollapse",
    "aria-controls": "navbarCollapse",
    "aria-expanded": "false",
    "aria-label": "Toggle navigation",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 13
    }
  }, __jsx("span", {
    "data-feather": "grid",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 15
    }
  })), __jsx("div", {
    className: "collapse navbar-collapse",
    id: "navbarCollapse",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 13
    }
  }, __jsx("ul", {
    className: "navbar-nav mr-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 15
    }
  }, __jsx("li", {
    className: "nav-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 17
    }
  }, __jsx("a", {
    className: "nav-link page-scroll",
    href: "#features",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 19
    }
  }, "\u7279\u6027")), __jsx("li", {
    className: "nav-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 17
    }
  }, __jsx("a", {
    className: "nav-link page-scroll",
    href: "#dapps",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 19
    }
  }, "Dapp")), __jsx("li", {
    className: "nav-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 17
    }
  }, __jsx("a", {
    className: "nav-link page-scroll",
    href: "#faq",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 19
    }
  }, "FAQ")), __jsx("li", {
    className: "nav-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 17
    }
  }, __jsx("a", {
    className: "nav-link page-scroll",
    href: "#community",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 19
    }
  }, "\u793E\u533A")), __jsx("li", {
    className: "nav-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 17
    }
  }, __jsx("a", {
    className: "nav-link page-scroll",
    href: "#contact",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 19
    }
  }, "\u5408\u4F5C"))), __jsx("ul", {
    className: "navbar-nav",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 15
    }
  }, __jsx("li", {
    className: "nav-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 17
    }
  }, __jsx("a", {
    className: "nav-link",
    href: "https://github.com/oasis-protocol",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 19
    }
  }, __jsx("i", {
    className: "fa fa-github",
    "aria-hidden": "true",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 21
    }
  })))), __jsx("form", {
    className: "form-inline",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 15
    }
  }, __jsx("a", {
    className: "btn btn-primary",
    target: "_blank",
    href: "https://docs.theoasis.io",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 17
    }
  }, "\u63A5\u5165\u6587\u6863")))))), __jsx("div", {
    className: "pt-3",
    id: "home",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "container-fluid",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "row vh-md-100",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "col-md-5 ml-auto my-auto text-center text-md-left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 13
    }
  }, __jsx("span", {
    className: "text- text-muted",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 15
    }
  }, "\u4F4E\u95E8\u69DB\u63A5\u5165\u865A\u62DF\u8D44\u4EA7\u4E92\u901A\u7684\u5E94\u7528\u751F\u6001"), __jsx("h1", {
    className: "display-4 mt-2 mb-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 15
    }
  }, "THE OASIS - NFT\u8D44\u4EA7\u8DE8\u5E94\u7528\u4E92\u901A"), __jsx("a", {
    href: "#about",
    className: "btn btn-secondary d-inline-flex flex-row align-items-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 15
    }
  }, "\u5FEB\u901F\u5165\u95E8", __jsx("em", {
    "data-feather": "chevrons-right",
    width: "20",
    height: "20",
    className: "ml-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 17
    }
  }))), __jsx("div", {
    className: "col-md-6 my-auto pt-5 pt-md-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 13
    }
  }, __jsx(react_particles_js__WEBPACK_IMPORTED_MODULE_2___default.a, {
    height: 500,
    params: ParticlesParams,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 15
    }
  }))))), __jsx("div", {
    id: "about",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "col-md-6 mr-auto text-center text-md-left lead",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 13
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 15
    }
  }, "THE OASIS\u534F\u8BAE\u662F\u4E00\u5957\u57FA\u4E8E\u533A\u5757\u94FE\u7684\u534F\u8BAE\u4E0E\u5DE5\u5177\u5957\u4EF6\u3002\u5B83\u5B9E\u73B0\u4E86\u57FA\u4E8ENFT\uFF08\u975E\u540C\u8D28\u5316\u901A\u8BC1\uFF09\u7684\u865A\u62DF\u8D44\u4EA7\u5728\u4E0D\u540C\u5408\u7EA6\u95F4\u7684\u8F6C\u79FB\u4E0E\u590D\u7528\uFF0C\u5E76\u63D0\u4F9B\u4E86\u5C01\u88C5\u4F18\u826F\u7684\u8D44\u4EA7\u590D\u7528\u3001\u89E3\u6790\u5DE5\u5177\u5305\u3002")), __jsx("div", {
    className: "col-md-5 ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "col-md-6 mx-auto text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 19
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 21
    }
  }, "\u73B0\u5DF2\u652F\u6301"))), __jsx("div", {
    className: "row mt-5 mb-7",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "col-md-5 mx-auto text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 19
    }
  }, __jsx("img", {
    src: "img/eosio.png",
    width: "120",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 21
    }
  })))))))), __jsx("div", {
    id: "features",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "col-md-10 mx-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "row feature-boxes",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "col-md-6 box",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "icon-box",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "icon-box-inner text-primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 21
    }
  }, __jsx("i", {
    className: "fa fa-file-text-o",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 23
    }
  }))), __jsx("h5", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 19
    }
  }, "\u901A\u7528\u8D44\u4EA7\u6807\u51C6"), __jsx("p", {
    className: "text-muted",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252,
      columnNumber: 19
    }
  }, "THE OASIS\u5236\u5B9A\u4E86\u5177\u5907\u53EF\u6269\u5C55\u6027\u826F\u597D\u7684", __jsx("strong", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253,
      columnNumber: 42
    }
  }, "FT/NFT"), "\u6807\u51C6\u63A5\u53E3\uFF0C\u5E76\u63D0\u4F9B\u5B8C\u5584\u7684\u5408\u7EA6\u6A21\u677F")), __jsx("div", {
    className: "col-md-6 box",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "icon-box",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "icon-box-inner text-primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259,
      columnNumber: 21
    }
  }, __jsx("i", {
    className: "fa fa-exchange",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260,
      columnNumber: 23
    }
  }))), __jsx("h5", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263,
      columnNumber: 19
    }
  }, "\u8DE8\u5408\u7EA6NFT\u8F6C\u79FB"), __jsx("p", {
    className: "text-muted",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264,
      columnNumber: 19
    }
  }, "THE OASIS\u5B9E\u73B0\u4E86\u5B89\u5168\u3001\u539F\u5B50\u7684\u8DE8\u5408\u7EA6NFT\u8F6C\u79FB\uFF0C\u5E2E\u52A9\u60A8\u7684\u8D44\u4EA7\u7A7F\u68AD\u5728\u5404\u79CD\u5E94\u7528\u7684\u5408\u7EA6\u5C42")), __jsx("div", {
    className: "col-md-6 box",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "icon-box",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "icon-box-inner text-primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271,
      columnNumber: 21
    }
  }, __jsx("i", {
    className: "fa fa-edit",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272,
      columnNumber: 23
    }
  }))), __jsx("h5", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275,
      columnNumber: 19
    }
  }, "\u5B9A\u5236\u5316\u8D44\u4EA7\u6620\u5C04"), __jsx("p", {
    className: "text-muted",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276,
      columnNumber: 19
    }
  }, "\u60A8\u53EF\u4EE5\u81EA\u7531\u5B9A\u5236\u5916\u6765NFT\u5728\u5408\u7EA6\u5185\u7684\u6620\u5C04\u76EE\u6807\u8D44\u4EA7\uFF0C\u4EE5\u5B9E\u73B0\u66F4\u7075\u6D3B\u7684\u8D44\u4EA7\u590D\u7528")), __jsx("div", {
    className: "col-md-6 box",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "icon-box",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "icon-box-inner text-primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282,
      columnNumber: 21
    }
  }, __jsx("i", {
    className: "fa fa-shield",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283,
      columnNumber: 23
    }
  }))), __jsx("h5", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 286,
      columnNumber: 19
    }
  }, "\u5BC6\u7801\u5B66\u5B89\u5168"), __jsx("ul", {
    className: "text-muted list-unstyled",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287,
      columnNumber: 19
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 288,
      columnNumber: 21
    }
  }, "\u6570\u5B57\u7B7E\u540D\u4FDD\u969C\u8D44\u4EA7\u5B8C\u6574\u6027\uFF0C\u9632\u6B62\u7BE1\u6539\u8D44\u4EA7"), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289,
      columnNumber: 21
    }
  }, "\u4E2D\u8F6C\u5408\u7EA6\u8BB0\u5F55\u8D44\u4EA7\u4F4D\u7F6E\uFF0C\u9632\u6B62\u4F2A\u9020\u8D44\u4EA7"), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290,
      columnNumber: 21
    }
  }, "\u5168\u751F\u547D\u5468\u671F\u8FFD\u8E2A")))))))), __jsx("div", {
    className: "pt-7",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "col-md-6 mx-auto text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302,
      columnNumber: 13
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 303,
      columnNumber: 15
    }
  }, "\u4E3A\u4EC0\u4E48\u8981\u63A5\u5165THE OASIS\uFF1F"))), __jsx("div", {
    className: "row mt-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 306,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "col-md-4 mx-auto box text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 307,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "icon-box",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 308,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "icon-box-inner text-primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 309,
      columnNumber: 17
    }
  }, __jsx("i", {
    className: "fa fa-users",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 310,
      columnNumber: 19
    }
  }))), __jsx("h5", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 313,
      columnNumber: 15
    }
  }, "\u5FEB\u901F\u51B7\u542F\u52A8"), __jsx("p", {
    className: "text-muted",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 314,
      columnNumber: 15
    }
  }, "\u590D\u7528\u5DF2\u6709\u5E94\u7528\u7684\u8D44\u4EA7\uFF0C\u5FEB\u901F\u5438\u5F15\u6D41\u91CF\uFF0C\u52A0\u901F\u5E94\u7528\u51B7\u542F\u52A8")), __jsx("div", {
    className: "col-md-4 mx-auto box text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 318,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "icon-box",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 319,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "icon-box-inner text-primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 320,
      columnNumber: 17
    }
  }, __jsx("i", {
    className: "fa fa-shopping-bag",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 321,
      columnNumber: 19
    }
  }))), __jsx("h5", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 324,
      columnNumber: 15
    }
  }, "\u523A\u6FC0\u6D88\u8D39"), __jsx("ul", {
    className: "text-muted list-unstyled",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 325,
      columnNumber: 15
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 326,
      columnNumber: 17
    }
  }, "\u8FEB\u4F7F\u73A9\u5BB6\u91CD\u590D\u6D88\u8D39\u9053\u5177\u7684\u65F6\u4EE3\u5373\u5C06\u8FC7\u53BB"), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 327,
      columnNumber: 17
    }
  }, "\u590D\u7528\u6027\u5F3A\uFF0C\u4F7F\u7528\u573A\u666F\u66F4\u4E30\u5BCC\u7684\u8D44\u4EA7\u66F4\u5BB9\u6613\u53D7\u5230\u73A9\u5BB6\u9752\u7750"))), __jsx("div", {
    className: "col-md-4 mx-auto box text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 330,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "icon-box",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 331,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "icon-box-inner text-primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 332,
      columnNumber: 17
    }
  }, __jsx("i", {
    className: "fa fa-rocket",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 333,
      columnNumber: 19
    }
  }))), __jsx("h5", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 336,
      columnNumber: 15
    }
  }, "\u8DE8\u5E94\u7528\u8054\u5408\u73A9\u6CD5"), __jsx("p", {
    className: "text-muted",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 337,
      columnNumber: 15
    }
  }, "\u5E26\u7740CryptoKitties\u7684\u5BA0\u7269\u732B\u6E38\u89C8Decentraland\u7684\u865A\u62DF\u4E16\u754C"))))), __jsx("div", {
    className: "pt-7",
    id: "dapps",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 346,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 347,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 348,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "col-md-6 mx-auto text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 349,
      columnNumber: 13
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 350,
      columnNumber: 15
    }
  }, "\u5DF2\u63A5\u5165\u7684Dapp"))), __jsx("div", {
    className: "row mt-5 mb-7",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 353,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "col-md-5 mx-auto text-right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 354,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "img/pandahero.png",
    width: "100",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 355,
      columnNumber: 15
    }
  })), __jsx("div", {
    className: "col-md-5 mx-auto text-left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 357,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "img/panda-logo.png",
    width: "100",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 358,
      columnNumber: 15
    }
  }))))), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 363,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 365,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "row",
    id: "faq",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 366,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "col-md-6 mx-auto text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 367,
      columnNumber: 13
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 368,
      columnNumber: 15
    }
  }, "FAQ"))), __jsx("div", {
    className: "row mt-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 371,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "col-md-10 mx-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 372,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 373,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "col-md-6 mb-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 374,
      columnNumber: 17
    }
  }, __jsx("h6", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 375,
      columnNumber: 19
    }
  }, "\u8DE8\u5E94\u7528\u8D44\u4EA7\u8F6C\u79FB\u9700\u8981\u6536\u8D39\u5417\uFF1F"), __jsx("p", {
    className: "text-muted",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 376,
      columnNumber: 19
    }
  }, "\u5728\u5408\u7EA6\u6267\u884C\u5C42\u9762\u53EA\u6536\u53D6\u533A\u5757\u94FE\u4EA4\u6613\u7684\u624B\u7EED\u8D39\uFF0C\u65E0\u5176\u4ED6\u4EFB\u4F55\u8D39\u7528\u3002\u5E94\u7528\u65B9\u4E5F\u53EF\u4EE5\u5728\u4E0A\u5C42\u6784\u5EFA\u7075\u6D3B\u7684\u4ED8\u8D39\u65B9\u6848\uFF0C\u4EE5\u62D3\u5C55\u66F4\u591A\u5546\u4E1A\u6A21\u5F0F\u3002")), __jsx("div", {
    className: "col-md-6 mb-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 380,
      columnNumber: 17
    }
  }, __jsx("h6", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 381,
      columnNumber: 19
    }
  }, "\u8D44\u4EA7\u8F6C\u79FB\u540E\u4F1A\u51FA\u73B0\u4E22\u5931\u60C5\u51B5\u5417\uFF1F"), __jsx("p", {
    className: "text-muted",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 382,
      columnNumber: 19
    }
  }, "\u8D44\u4EA7\u53EA\u5728\u5408\u7EA6\u6709\u5B89\u5168\u6F0F\u6D1E\u6216\u5176\u4ED6Bug\u7684\u60C5\u51B5\u4E0B\u53EF\u80FD\u4F1A\u51FA\u73B0\u4E22\u5931\u3002\u6211\u4EEC\u5EFA\u8BAE\u7528\u6237\u5728\u5BA1\u67E5\u76EE\u6807\u5E94\u7528\u7684\u5B89\u5168\u6027\u5E76\u5145\u5206\u4FE1\u4EFB\u540E\uFF0C\u518D\u8FDB\u884C\u8D44\u4EA7\u8F6C\u79FB\u7684\u64CD\u4F5C\u3002")), __jsx("div", {
    className: "col-md-6 mb-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 386,
      columnNumber: 17
    }
  }, __jsx("h6", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 387,
      columnNumber: 19
    }
  }, "\u5408\u4F5C\u65B9\u5355\u65B9\u9762\u9000\u51FA\u751F\u6001\uFF0C\u8D44\u4EA7\u662F\u5426\u4F1A\u53D7\u5F71\u54CD\uFF1F"), __jsx("p", {
    className: "text-muted",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 388,
      columnNumber: 19
    }
  }, "\u5728\u5408\u4F5C\u65B9\u5408\u7EA6\u7B26\u5408THE OASIS\u534F\u8BAE\u6807\u51C6\u7684\u60C5\u51B5\u4E0B\uFF0C\u4EFB\u4F55\u8D44\u4EA7\u5728\u4EFB\u4F55\u65F6\u5019\u90FD\u53EF\u4EE5\u8F6C\u79FB\u56DE\u5B83\u6700\u521D\u7684\u53D1\u884C\u5408\u7EA6\u3002")), __jsx("div", {
    className: "col-md-6 mb-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 393,
      columnNumber: 17
    }
  }, __jsx("h6", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 394,
      columnNumber: 19
    }
  }, "\u63A5\u5165\u534F\u8BAE\u540E\u4F1A\u5BF9\u8D44\u4EA7\u505A\u4EC0\u4E48\u9650\u5236\uFF1F"), __jsx("p", {
    className: "text-muted",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 395,
      columnNumber: 19
    }
  }, "\u534F\u8BAE\u4EC5\u5BF9\u5FC5\u8981\u7684\u6570\u636E\u5B57\u6BB5\u505A\u4E86\u6807\u51C6\u5316\uFF0C\u5176\u5B83\u4EFB\u4F55\u64CD\u4F5C\u5747\u65E0\u9650\u5236\uFF0C\u53EF\u7531\u5E94\u7528\u65B9\u81EA\u7531\u6269\u5C55\u3002"))))))), __jsx("div", {
    className: "py-4 my-4 border-top",
    id: "community",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 406,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "container-fluid",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 407,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 408,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "col-md-10 mx-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 409,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "card p-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 410,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "card-body d-md-flex flex-row align-items-center text-center text-md-left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 411,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "mb-4 mb-md-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 412,
      columnNumber: 19
    }
  }, __jsx("h4", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 413,
      columnNumber: 21
    }
  }, "\u60F3\u4E0E\u66F4\u591A\u5F00\u53D1\u8005\u3001\u5E94\u7528\u65B9\u4EA4\u6D41\uFF1F"), __jsx("span", {
    className: "text-muted",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 414,
      columnNumber: 21
    }
  }, "\u597D\u7684\u7075\u611F\u603B\u662F\u5728\u4EA4\u6D41\u7684\u8FC7\u7A0B\u4E2D\u4EA7\u751F")), __jsx("a", {
    className: "ml-md-auto d-inline-flex flex-row align-items-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 418,
      columnNumber: 19
    }
  }, __jsx("button", {
    className: "btn btn-secondary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 419,
      columnNumber: 21
    }
  }, "\u52A0\u5165\u793E\u533A")))))))), __jsx("div", {
    className: "bg-hero py-7",
    id: "contact",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 429,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 430,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 431,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "col-md-12 my-md-auto text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 432,
      columnNumber: 13
    }
  }, __jsx("h1", {
    className: "display text-white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 433,
      columnNumber: 15
    }
  }, "\u7533\u8BF7\u6D4B\u8BD5"), __jsx("p", {
    className: "text-muted",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 434,
      columnNumber: 15
    }
  }, "\u8BF7\u901A\u8FC7\u90AE\u4EF6\u4E0E\u6211\u4EEC\u53D6\u5F97\u8054\u7CFB"), __jsx("a", {
    className: "lead text-light",
    href: "mailto:the-oasis@byterum.com",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 435,
      columnNumber: 15
    }
  }, "the-oasis@byterum.com"))))), __jsx("footer", {
    className: "py-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 447,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 448,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 449,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "col-sm-5 mr-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 450,
      columnNumber: 13
    }
  }, __jsx("h6", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 451,
      columnNumber: 15
    }
  }, "\u5173\u4E8E \u94FE\u574A\u79D1\u6280"), __jsx("p", {
    className: "text-muted",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 452,
      columnNumber: 15
    }
  }, "\u94FE\u574A\u79D1\u6280\u662F\u4E00\u5BB6\u4E13\u6CE8\u4E8E\u533A\u5757\u94FE\u6280\u672F\u7814\u53D1\u7684\u521B\u65B0\u79D1\u6280\u516C\u53F8\u3002\u6211\u4EEC\u81F4\u529B\u4E8E\u5C06\u533A\u5757\u94FE\u6280\u672F\u4E0E\u6E38\u620F\u3001\u6587\u5B66\u3001\u827A\u672F\u7B49\u6587\u521B\u9886\u57DF\u4EA7\u54C1\u7ED3\u5408\uFF0C\u63A8\u5E7F\u901A\u8BC1\u7ECF\u6D4E\uFF0C\u964D\u4F4E\u4EA4\u6613\u6469\u64E6\u6210\u672C\uFF0C\u6700\u5927\u5316\u4FDD\u969C\u7528\u6237\u7684\u5229\u76CA\u3002"), __jsx("ul", {
    className: "list-inline social social-rounded social-sm",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 455,
      columnNumber: 15
    }
  }, __jsx("li", {
    className: "list-inline-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 456,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 457,
      columnNumber: 19
    }
  }, __jsx("i", {
    className: "fa fa-medium",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 458,
      columnNumber: 21
    }
  }))), __jsx("li", {
    className: "list-inline-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 461,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 462,
      columnNumber: 19
    }
  }, __jsx("i", {
    className: "fa fa-twitter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 463,
      columnNumber: 21
    }
  }))), __jsx("li", {
    className: "list-inline-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 466,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 467,
      columnNumber: 19
    }
  }, __jsx("i", {
    className: "fa fa-telegram",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 468,
      columnNumber: 21
    }
  }))), __jsx("li", {
    className: "list-inline-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 471,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 472,
      columnNumber: 19
    }
  }, __jsx("i", {
    className: "fa fa-github",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 473,
      columnNumber: 21
    }
  }))))), __jsx("div", {
    className: "col-sm-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 478,
      columnNumber: 13
    }
  }, __jsx("h6", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 479,
      columnNumber: 15
    }
  }, "\u76F8\u5173\u8D44\u6E90"), __jsx("ul", {
    className: "list-unstyled",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 480,
      columnNumber: 15
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 481,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 482,
      columnNumber: 19
    }
  }, "ERC1155")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 484,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 485,
      columnNumber: 19
    }
  }, "Etherfans")))), __jsx("div", {
    className: "col-sm-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 489,
      columnNumber: 13
    }
  }, __jsx("h6", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 490,
      columnNumber: 15
    }
  }, "\u793E\u533A"), __jsx("ul", {
    className: "list-unstyled",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 491,
      columnNumber: 15
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 492,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 493,
      columnNumber: 19
    }
  }, "Refer a friend")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 495,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 496,
      columnNumber: 19
    }
  }, "Affiliates")))), __jsx("div", {
    className: "col-sm-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 500,
      columnNumber: 13
    }
  }, __jsx("h6", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 501,
      columnNumber: 15
    }
  }, "\u5E2E\u52A9"), __jsx("ul", {
    className: "list-unstyled",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 502,
      columnNumber: 15
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 503,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "https://github.com/oasis-protocol",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 504,
      columnNumber: 19
    }
  }, "Github")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 508,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 509,
      columnNumber: 19
    }
  }, "\u66F4\u65B0\u65E5\u5FD7")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 511,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 512,
      columnNumber: 19
    }
  }, "\u62A5\u544ABug"))))), __jsx("div", {
    className: "row mt-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 517,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "col-12 text-muted text-center small-xl",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 518,
      columnNumber: 13
    }
  }, "\xA9 ", new Date().getFullYear(), " \u94FE\u574A\u79D1\u6280 Byterum - All Rights Reserved")))), __jsx("div", {
    className: "scroll-top",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 527,
      columnNumber: 7
    }
  }, __jsx("i", {
    className: "fa fa-angle-up",
    "aria-hidden": "true",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 528,
      columnNumber: 9
    }
  })), __jsx("script", {
    src: "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 531,
      columnNumber: 7
    }
  }), __jsx("script", {
    src: "https://cdnjs.cloudflare.com/ajax/libs/feather-icons/4.7.0/feather.min.js",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 532,
      columnNumber: 7
    }
  }));
}

/***/ }),

/***/ 1:
/*!**************************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2F&absolutePagePath=%2FUsers%2Flowesyang%2FDocuments%2Fwebsite%2Fthe-oasis-website%2Fpages%2Findex.js ***!
  \**************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2F&absolutePagePath=%2FUsers%2Flowesyang%2FDocuments%2Fwebsite%2Fthe-oasis-website%2Fpages%2Findex.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2FUsers%2Flowesyang%2FDocuments%2Fwebsite%2Fthe-oasis-website%2Fpages%2Findex.js!./");


/***/ }),

/***/ "dll-reference dll_2adc2403d89adc16ead0":
/*!*******************************************!*\
  !*** external "dll_2adc2403d89adc16ead0" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_2adc2403d89adc16ead0;

/***/ })

},[[1,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=index.js.map