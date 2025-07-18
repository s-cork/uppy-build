var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/namespace-emitter/index.js
var require_namespace_emitter = __commonJS({
  "node_modules/namespace-emitter/index.js"(exports, module) {
    module.exports = function createNamespaceEmitter() {
      var emitter = {};
      var _fns = emitter._fns = {};
      emitter.emit = function emit(event, arg1, arg2, arg3, arg4, arg5, arg6) {
        var toEmit = getListeners(event);
        if (toEmit.length) {
          emitAll(event, toEmit, [arg1, arg2, arg3, arg4, arg5, arg6]);
        }
      };
      emitter.on = function on(event, fn) {
        if (!_fns[event]) {
          _fns[event] = [];
        }
        _fns[event].push(fn);
      };
      emitter.once = function once(event, fn) {
        function one() {
          fn.apply(this, arguments);
          emitter.off(event, one);
        }
        this.on(event, one);
      };
      emitter.off = function off(event, fn) {
        var keep = [];
        if (event && fn) {
          var fns = this._fns[event];
          var i4 = 0;
          var l4 = fns ? fns.length : 0;
          for (i4; i4 < l4; i4++) {
            if (fns[i4] !== fn) {
              keep.push(fns[i4]);
            }
          }
        }
        keep.length ? this._fns[event] = keep : delete this._fns[event];
      };
      function getListeners(e4) {
        var out = _fns[e4] ? _fns[e4] : [];
        var idx = e4.indexOf(":");
        var args = idx === -1 ? [e4] : [e4.substring(0, idx), e4.substring(idx + 1)];
        var keys = Object.keys(_fns);
        var i4 = 0;
        var l4 = keys.length;
        for (i4; i4 < l4; i4++) {
          var key = keys[i4];
          if (key === "*") {
            out = out.concat(_fns[key]);
          }
          if (args.length === 2 && args[0] === key) {
            out = out.concat(_fns[key]);
            break;
          }
        }
        return out;
      }
      function emitAll(e4, fns, args) {
        var i4 = 0;
        var l4 = fns.length;
        for (i4; i4 < l4; i4++) {
          if (!fns[i4]) break;
          fns[i4].event = e4;
          fns[i4].apply(fns[i4], args);
        }
      }
      return emitter;
    };
  }
});

// node_modules/lodash/isObject.js
var require_isObject = __commonJS({
  "node_modules/lodash/isObject.js"(exports, module) {
    function isObject(value) {
      var type = typeof value;
      return value != null && (type == "object" || type == "function");
    }
    module.exports = isObject;
  }
});

// node_modules/lodash/_freeGlobal.js
var require_freeGlobal = __commonJS({
  "node_modules/lodash/_freeGlobal.js"(exports, module) {
    var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
    module.exports = freeGlobal;
  }
});

// node_modules/lodash/_root.js
var require_root = __commonJS({
  "node_modules/lodash/_root.js"(exports, module) {
    var freeGlobal = require_freeGlobal();
    var freeSelf = typeof self == "object" && self && self.Object === Object && self;
    var root = freeGlobal || freeSelf || Function("return this")();
    module.exports = root;
  }
});

// node_modules/lodash/now.js
var require_now = __commonJS({
  "node_modules/lodash/now.js"(exports, module) {
    var root = require_root();
    var now = function() {
      return root.Date.now();
    };
    module.exports = now;
  }
});

// node_modules/lodash/_trimmedEndIndex.js
var require_trimmedEndIndex = __commonJS({
  "node_modules/lodash/_trimmedEndIndex.js"(exports, module) {
    var reWhitespace = /\s/;
    function trimmedEndIndex(string) {
      var index = string.length;
      while (index-- && reWhitespace.test(string.charAt(index))) {
      }
      return index;
    }
    module.exports = trimmedEndIndex;
  }
});

// node_modules/lodash/_baseTrim.js
var require_baseTrim = __commonJS({
  "node_modules/lodash/_baseTrim.js"(exports, module) {
    var trimmedEndIndex = require_trimmedEndIndex();
    var reTrimStart = /^\s+/;
    function baseTrim(string) {
      return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
    }
    module.exports = baseTrim;
  }
});

// node_modules/lodash/_Symbol.js
var require_Symbol = __commonJS({
  "node_modules/lodash/_Symbol.js"(exports, module) {
    var root = require_root();
    var Symbol2 = root.Symbol;
    module.exports = Symbol2;
  }
});

// node_modules/lodash/_getRawTag.js
var require_getRawTag = __commonJS({
  "node_modules/lodash/_getRawTag.js"(exports, module) {
    var Symbol2 = require_Symbol();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var nativeObjectToString = objectProto.toString;
    var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
    function getRawTag(value) {
      var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
      try {
        value[symToStringTag] = void 0;
        var unmasked = true;
      } catch (e4) {
      }
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
  }
});

// node_modules/lodash/_objectToString.js
var require_objectToString = __commonJS({
  "node_modules/lodash/_objectToString.js"(exports, module) {
    var objectProto = Object.prototype;
    var nativeObjectToString = objectProto.toString;
    function objectToString2(value) {
      return nativeObjectToString.call(value);
    }
    module.exports = objectToString2;
  }
});

// node_modules/lodash/_baseGetTag.js
var require_baseGetTag = __commonJS({
  "node_modules/lodash/_baseGetTag.js"(exports, module) {
    var Symbol2 = require_Symbol();
    var getRawTag = require_getRawTag();
    var objectToString2 = require_objectToString();
    var nullTag = "[object Null]";
    var undefinedTag = "[object Undefined]";
    var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
    function baseGetTag(value) {
      if (value == null) {
        return value === void 0 ? undefinedTag : nullTag;
      }
      return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString2(value);
    }
    module.exports = baseGetTag;
  }
});

// node_modules/lodash/isObjectLike.js
var require_isObjectLike = __commonJS({
  "node_modules/lodash/isObjectLike.js"(exports, module) {
    function isObjectLike(value) {
      return value != null && typeof value == "object";
    }
    module.exports = isObjectLike;
  }
});

// node_modules/lodash/isSymbol.js
var require_isSymbol = __commonJS({
  "node_modules/lodash/isSymbol.js"(exports, module) {
    var baseGetTag = require_baseGetTag();
    var isObjectLike = require_isObjectLike();
    var symbolTag = "[object Symbol]";
    function isSymbol(value) {
      return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
    }
    module.exports = isSymbol;
  }
});

// node_modules/lodash/toNumber.js
var require_toNumber = __commonJS({
  "node_modules/lodash/toNumber.js"(exports, module) {
    var baseTrim = require_baseTrim();
    var isObject = require_isObject();
    var isSymbol = require_isSymbol();
    var NAN = 0 / 0;
    var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
    var reIsBinary = /^0b[01]+$/i;
    var reIsOctal = /^0o[0-7]+$/i;
    var freeParseInt = parseInt;
    function toNumber(value) {
      if (typeof value == "number") {
        return value;
      }
      if (isSymbol(value)) {
        return NAN;
      }
      if (isObject(value)) {
        var other = typeof value.valueOf == "function" ? value.valueOf() : value;
        value = isObject(other) ? other + "" : other;
      }
      if (typeof value != "string") {
        return value === 0 ? value : +value;
      }
      value = baseTrim(value);
      var isBinary = reIsBinary.test(value);
      return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
    }
    module.exports = toNumber;
  }
});

// node_modules/lodash/debounce.js
var require_debounce = __commonJS({
  "node_modules/lodash/debounce.js"(exports, module) {
    var isObject = require_isObject();
    var now = require_now();
    var toNumber = require_toNumber();
    var FUNC_ERROR_TEXT = "Expected a function";
    var nativeMax = Math.max;
    var nativeMin = Math.min;
    function debounce3(func, wait, options) {
      var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
      if (typeof func != "function") {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      wait = toNumber(wait) || 0;
      if (isObject(options)) {
        leading = !!options.leading;
        maxing = "maxWait" in options;
        maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
        trailing = "trailing" in options ? !!options.trailing : trailing;
      }
      function invokeFunc(time) {
        var args = lastArgs, thisArg = lastThis;
        lastArgs = lastThis = void 0;
        lastInvokeTime = time;
        result = func.apply(thisArg, args);
        return result;
      }
      function leadingEdge(time) {
        lastInvokeTime = time;
        timerId = setTimeout(timerExpired, wait);
        return leading ? invokeFunc(time) : result;
      }
      function remainingWait(time) {
        var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
        return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
      }
      function shouldInvoke(time) {
        var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
        return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
      }
      function timerExpired() {
        var time = now();
        if (shouldInvoke(time)) {
          return trailingEdge(time);
        }
        timerId = setTimeout(timerExpired, remainingWait(time));
      }
      function trailingEdge(time) {
        timerId = void 0;
        if (trailing && lastArgs) {
          return invokeFunc(time);
        }
        lastArgs = lastThis = void 0;
        return result;
      }
      function cancel() {
        if (timerId !== void 0) {
          clearTimeout(timerId);
        }
        lastInvokeTime = 0;
        lastArgs = lastCallTime = lastThis = timerId = void 0;
      }
      function flush() {
        return timerId === void 0 ? result : trailingEdge(now());
      }
      function debounced() {
        var time = now(), isInvoking = shouldInvoke(time);
        lastArgs = arguments;
        lastThis = this;
        lastCallTime = time;
        if (isInvoking) {
          if (timerId === void 0) {
            return leadingEdge(lastCallTime);
          }
          if (maxing) {
            clearTimeout(timerId);
            timerId = setTimeout(timerExpired, wait);
            return invokeFunc(lastCallTime);
          }
        }
        if (timerId === void 0) {
          timerId = setTimeout(timerExpired, wait);
        }
        return result;
      }
      debounced.cancel = cancel;
      debounced.flush = flush;
      return debounced;
    }
    module.exports = debounce3;
  }
});

// node_modules/lodash/throttle.js
var require_throttle = __commonJS({
  "node_modules/lodash/throttle.js"(exports, module) {
    var debounce3 = require_debounce();
    var isObject = require_isObject();
    var FUNC_ERROR_TEXT = "Expected a function";
    function throttle3(func, wait, options) {
      var leading = true, trailing = true;
      if (typeof func != "function") {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      if (isObject(options)) {
        leading = "leading" in options ? !!options.leading : leading;
        trailing = "trailing" in options ? !!options.trailing : trailing;
      }
      return debounce3(func, wait, {
        "leading": leading,
        "maxWait": wait,
        "trailing": trailing
      });
    }
    module.exports = throttle3;
  }
});

// node_modules/@transloadit/prettier-bytes/dist/prettierBytes.js
var require_prettierBytes = __commonJS({
  "node_modules/@transloadit/prettier-bytes/dist/prettierBytes.js"(exports, module) {
    "use strict";
    module.exports = function prettierBytes4(input) {
      if (typeof input !== "number" || Number.isNaN(input)) {
        throw new TypeError(`Expected a number, got ${typeof input}`);
      }
      const neg = input < 0;
      let num = Math.abs(input);
      if (neg) {
        num = -num;
      }
      if (num === 0) {
        return "0 B";
      }
      const units = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
      const exponent = Math.min(Math.floor(Math.log(num) / Math.log(1024)), units.length - 1);
      const value = Number(num / 1024 ** exponent);
      const unit = units[exponent];
      return `${value >= 10 || value % 1 === 0 ? Math.round(value) : value.toFixed(1)} ${unit}`;
    };
  }
});

// node_modules/wildcard/index.js
var require_wildcard = __commonJS({
  "node_modules/wildcard/index.js"(exports, module) {
    "use strict";
    function WildcardMatcher(text, separator2) {
      this.text = text = text || "";
      this.hasWild = ~text.indexOf("*");
      this.separator = separator2;
      this.parts = text.split(separator2);
    }
    WildcardMatcher.prototype.match = function(input) {
      var matches = true;
      var parts = this.parts;
      var ii;
      var partsCount = parts.length;
      var testParts;
      if (typeof input == "string" || input instanceof String) {
        if (!this.hasWild && this.text != input) {
          matches = false;
        } else {
          testParts = (input || "").split(this.separator);
          for (ii = 0; matches && ii < partsCount; ii++) {
            if (parts[ii] === "*") {
              continue;
            } else if (ii < testParts.length) {
              matches = parts[ii] === testParts[ii];
            } else {
              matches = false;
            }
          }
          matches = matches && testParts;
        }
      } else if (typeof input.splice == "function") {
        matches = [];
        for (ii = input.length; ii--; ) {
          if (this.match(input[ii])) {
            matches[matches.length] = input[ii];
          }
        }
      } else if (typeof input == "object") {
        matches = {};
        for (var key in input) {
          if (this.match(key)) {
            matches[key] = input[key];
          }
        }
      }
      return matches;
    };
    module.exports = function(text, test, separator2) {
      var matcher = new WildcardMatcher(text, separator2 || /[\/\.]/);
      if (typeof test != "undefined") {
        return matcher.match(test);
      }
      return matcher;
    };
  }
});

// node_modules/mime-match/index.js
var require_mime_match = __commonJS({
  "node_modules/mime-match/index.js"(exports, module) {
    var wildcard = require_wildcard();
    var reMimePartSplit = /[\/\+\.]/;
    module.exports = function(target, pattern) {
      function test(pattern2) {
        var result = wildcard(pattern2, target, reMimePartSplit);
        return result && result.length >= 2;
      }
      return pattern ? test(pattern.split(";")[0]) : test;
    };
  }
});

// node_modules/classnames/index.js
var require_classnames = __commonJS({
  "node_modules/classnames/index.js"(exports, module) {
    (function() {
      "use strict";
      var hasOwn = {}.hasOwnProperty;
      function classNames13() {
        var classes = "";
        for (var i4 = 0; i4 < arguments.length; i4++) {
          var arg = arguments[i4];
          if (arg) {
            classes = appendClass(classes, parseValue(arg));
          }
        }
        return classes;
      }
      function parseValue(arg) {
        if (typeof arg === "string" || typeof arg === "number") {
          return arg;
        }
        if (typeof arg !== "object") {
          return "";
        }
        if (Array.isArray(arg)) {
          return classNames13.apply(null, arg);
        }
        if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes("[native code]")) {
          return arg.toString();
        }
        var classes = "";
        for (var key in arg) {
          if (hasOwn.call(arg, key) && arg[key]) {
            classes = appendClass(classes, key);
          }
        }
        return classes;
      }
      function appendClass(value, newClass) {
        if (!newClass) {
          return value;
        }
        if (value) {
          return value + " " + newClass;
        }
        return value + newClass;
      }
      if (typeof module !== "undefined" && module.exports) {
        classNames13.default = classNames13;
        module.exports = classNames13;
      } else if (typeof define === "function" && typeof define.amd === "object" && define.amd) {
        define("classnames", [], function() {
          return classNames13;
        });
      } else {
        window.classNames = classNames13;
      }
    })();
  }
});

// node_modules/eventemitter3/index.js
var require_eventemitter3 = __commonJS({
  "node_modules/eventemitter3/index.js"(exports, module) {
    "use strict";
    var has2 = Object.prototype.hasOwnProperty;
    var prefix = "~";
    function Events() {
    }
    if (Object.create) {
      Events.prototype = /* @__PURE__ */ Object.create(null);
      if (!new Events().__proto__) prefix = false;
    }
    function EE(fn, context, once) {
      this.fn = fn;
      this.context = context;
      this.once = once || false;
    }
    function addListener(emitter, event, fn, context, once) {
      if (typeof fn !== "function") {
        throw new TypeError("The listener must be a function");
      }
      var listener = new EE(fn, context || emitter, once), evt = prefix ? prefix + event : event;
      if (!emitter._events[evt]) emitter._events[evt] = listener, emitter._eventsCount++;
      else if (!emitter._events[evt].fn) emitter._events[evt].push(listener);
      else emitter._events[evt] = [emitter._events[evt], listener];
      return emitter;
    }
    function clearEvent(emitter, evt) {
      if (--emitter._eventsCount === 0) emitter._events = new Events();
      else delete emitter._events[evt];
    }
    function EventEmitter2() {
      this._events = new Events();
      this._eventsCount = 0;
    }
    EventEmitter2.prototype.eventNames = function eventNames() {
      var names = [], events, name;
      if (this._eventsCount === 0) return names;
      for (name in events = this._events) {
        if (has2.call(events, name)) names.push(prefix ? name.slice(1) : name);
      }
      if (Object.getOwnPropertySymbols) {
        return names.concat(Object.getOwnPropertySymbols(events));
      }
      return names;
    };
    EventEmitter2.prototype.listeners = function listeners(event) {
      var evt = prefix ? prefix + event : event, handlers = this._events[evt];
      if (!handlers) return [];
      if (handlers.fn) return [handlers.fn];
      for (var i4 = 0, l4 = handlers.length, ee4 = new Array(l4); i4 < l4; i4++) {
        ee4[i4] = handlers[i4].fn;
      }
      return ee4;
    };
    EventEmitter2.prototype.listenerCount = function listenerCount(event) {
      var evt = prefix ? prefix + event : event, listeners = this._events[evt];
      if (!listeners) return 0;
      if (listeners.fn) return 1;
      return listeners.length;
    };
    EventEmitter2.prototype.emit = function emit(event, a1, a22, a32, a4, a5) {
      var evt = prefix ? prefix + event : event;
      if (!this._events[evt]) return false;
      var listeners = this._events[evt], len = arguments.length, args, i4;
      if (listeners.fn) {
        if (listeners.once) this.removeListener(event, listeners.fn, void 0, true);
        switch (len) {
          case 1:
            return listeners.fn.call(listeners.context), true;
          case 2:
            return listeners.fn.call(listeners.context, a1), true;
          case 3:
            return listeners.fn.call(listeners.context, a1, a22), true;
          case 4:
            return listeners.fn.call(listeners.context, a1, a22, a32), true;
          case 5:
            return listeners.fn.call(listeners.context, a1, a22, a32, a4), true;
          case 6:
            return listeners.fn.call(listeners.context, a1, a22, a32, a4, a5), true;
        }
        for (i4 = 1, args = new Array(len - 1); i4 < len; i4++) {
          args[i4 - 1] = arguments[i4];
        }
        listeners.fn.apply(listeners.context, args);
      } else {
        var length = listeners.length, j4;
        for (i4 = 0; i4 < length; i4++) {
          if (listeners[i4].once) this.removeListener(event, listeners[i4].fn, void 0, true);
          switch (len) {
            case 1:
              listeners[i4].fn.call(listeners[i4].context);
              break;
            case 2:
              listeners[i4].fn.call(listeners[i4].context, a1);
              break;
            case 3:
              listeners[i4].fn.call(listeners[i4].context, a1, a22);
              break;
            case 4:
              listeners[i4].fn.call(listeners[i4].context, a1, a22, a32);
              break;
            default:
              if (!args) for (j4 = 1, args = new Array(len - 1); j4 < len; j4++) {
                args[j4 - 1] = arguments[j4];
              }
              listeners[i4].fn.apply(listeners[i4].context, args);
          }
        }
      }
      return true;
    };
    EventEmitter2.prototype.on = function on(event, fn, context) {
      return addListener(this, event, fn, context, false);
    };
    EventEmitter2.prototype.once = function once(event, fn, context) {
      return addListener(this, event, fn, context, true);
    };
    EventEmitter2.prototype.removeListener = function removeListener(event, fn, context, once) {
      var evt = prefix ? prefix + event : event;
      if (!this._events[evt]) return this;
      if (!fn) {
        clearEvent(this, evt);
        return this;
      }
      var listeners = this._events[evt];
      if (listeners.fn) {
        if (listeners.fn === fn && (!once || listeners.once) && (!context || listeners.context === context)) {
          clearEvent(this, evt);
        }
      } else {
        for (var i4 = 0, events = [], length = listeners.length; i4 < length; i4++) {
          if (listeners[i4].fn !== fn || once && !listeners[i4].once || context && listeners[i4].context !== context) {
            events.push(listeners[i4]);
          }
        }
        if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;
        else clearEvent(this, evt);
      }
      return this;
    };
    EventEmitter2.prototype.removeAllListeners = function removeAllListeners(event) {
      var evt;
      if (event) {
        evt = prefix ? prefix + event : event;
        if (this._events[evt]) clearEvent(this, evt);
      } else {
        this._events = new Events();
        this._eventsCount = 0;
      }
      return this;
    };
    EventEmitter2.prototype.off = EventEmitter2.prototype.removeListener;
    EventEmitter2.prototype.addListener = EventEmitter2.prototype.on;
    EventEmitter2.prefixed = prefix;
    EventEmitter2.EventEmitter = EventEmitter2;
    if ("undefined" !== typeof module) {
      module.exports = EventEmitter2;
    }
  }
});

// node_modules/is-shallow-equal/index.js
var require_is_shallow_equal = __commonJS({
  "node_modules/is-shallow-equal/index.js"(exports, module) {
    module.exports = function isShallowEqual(a4, b3) {
      if (a4 === b3) return true;
      for (var i4 in a4) if (!(i4 in b3)) return false;
      for (var i4 in b3) if (a4[i4] !== b3[i4]) return false;
      return true;
    };
  }
});

// node_modules/retry/lib/retry_operation.js
var require_retry_operation = __commonJS({
  "node_modules/retry/lib/retry_operation.js"(exports, module) {
    function RetryOperation(timeouts, options) {
      if (typeof options === "boolean") {
        options = { forever: options };
      }
      this._originalTimeouts = JSON.parse(JSON.stringify(timeouts));
      this._timeouts = timeouts;
      this._options = options || {};
      this._maxRetryTime = options && options.maxRetryTime || Infinity;
      this._fn = null;
      this._errors = [];
      this._attempts = 1;
      this._operationTimeout = null;
      this._operationTimeoutCb = null;
      this._timeout = null;
      this._operationStart = null;
      this._timer = null;
      if (this._options.forever) {
        this._cachedTimeouts = this._timeouts.slice(0);
      }
    }
    module.exports = RetryOperation;
    RetryOperation.prototype.reset = function() {
      this._attempts = 1;
      this._timeouts = this._originalTimeouts.slice(0);
    };
    RetryOperation.prototype.stop = function() {
      if (this._timeout) {
        clearTimeout(this._timeout);
      }
      if (this._timer) {
        clearTimeout(this._timer);
      }
      this._timeouts = [];
      this._cachedTimeouts = null;
    };
    RetryOperation.prototype.retry = function(err) {
      if (this._timeout) {
        clearTimeout(this._timeout);
      }
      if (!err) {
        return false;
      }
      var currentTime = (/* @__PURE__ */ new Date()).getTime();
      if (err && currentTime - this._operationStart >= this._maxRetryTime) {
        this._errors.push(err);
        this._errors.unshift(new Error("RetryOperation timeout occurred"));
        return false;
      }
      this._errors.push(err);
      var timeout = this._timeouts.shift();
      if (timeout === void 0) {
        if (this._cachedTimeouts) {
          this._errors.splice(0, this._errors.length - 1);
          timeout = this._cachedTimeouts.slice(-1);
        } else {
          return false;
        }
      }
      var self2 = this;
      this._timer = setTimeout(function() {
        self2._attempts++;
        if (self2._operationTimeoutCb) {
          self2._timeout = setTimeout(function() {
            self2._operationTimeoutCb(self2._attempts);
          }, self2._operationTimeout);
          if (self2._options.unref) {
            self2._timeout.unref();
          }
        }
        self2._fn(self2._attempts);
      }, timeout);
      if (this._options.unref) {
        this._timer.unref();
      }
      return true;
    };
    RetryOperation.prototype.attempt = function(fn, timeoutOps) {
      this._fn = fn;
      if (timeoutOps) {
        if (timeoutOps.timeout) {
          this._operationTimeout = timeoutOps.timeout;
        }
        if (timeoutOps.cb) {
          this._operationTimeoutCb = timeoutOps.cb;
        }
      }
      var self2 = this;
      if (this._operationTimeoutCb) {
        this._timeout = setTimeout(function() {
          self2._operationTimeoutCb();
        }, self2._operationTimeout);
      }
      this._operationStart = (/* @__PURE__ */ new Date()).getTime();
      this._fn(this._attempts);
    };
    RetryOperation.prototype.try = function(fn) {
      console.log("Using RetryOperation.try() is deprecated");
      this.attempt(fn);
    };
    RetryOperation.prototype.start = function(fn) {
      console.log("Using RetryOperation.start() is deprecated");
      this.attempt(fn);
    };
    RetryOperation.prototype.start = RetryOperation.prototype.try;
    RetryOperation.prototype.errors = function() {
      return this._errors;
    };
    RetryOperation.prototype.attempts = function() {
      return this._attempts;
    };
    RetryOperation.prototype.mainError = function() {
      if (this._errors.length === 0) {
        return null;
      }
      var counts = {};
      var mainError = null;
      var mainErrorCount = 0;
      for (var i4 = 0; i4 < this._errors.length; i4++) {
        var error = this._errors[i4];
        var message = error.message;
        var count = (counts[message] || 0) + 1;
        counts[message] = count;
        if (count >= mainErrorCount) {
          mainError = error;
          mainErrorCount = count;
        }
      }
      return mainError;
    };
  }
});

// node_modules/retry/lib/retry.js
var require_retry = __commonJS({
  "node_modules/retry/lib/retry.js"(exports) {
    var RetryOperation = require_retry_operation();
    exports.operation = function(options) {
      var timeouts = exports.timeouts(options);
      return new RetryOperation(timeouts, {
        forever: options && (options.forever || options.retries === Infinity),
        unref: options && options.unref,
        maxRetryTime: options && options.maxRetryTime
      });
    };
    exports.timeouts = function(options) {
      if (options instanceof Array) {
        return [].concat(options);
      }
      var opts = {
        retries: 10,
        factor: 2,
        minTimeout: 1 * 1e3,
        maxTimeout: Infinity,
        randomize: false
      };
      for (var key in options) {
        opts[key] = options[key];
      }
      if (opts.minTimeout > opts.maxTimeout) {
        throw new Error("minTimeout is greater than maxTimeout");
      }
      var timeouts = [];
      for (var i4 = 0; i4 < opts.retries; i4++) {
        timeouts.push(this.createTimeout(i4, opts));
      }
      if (options && options.forever && !timeouts.length) {
        timeouts.push(this.createTimeout(i4, opts));
      }
      timeouts.sort(function(a4, b3) {
        return a4 - b3;
      });
      return timeouts;
    };
    exports.createTimeout = function(attempt, opts) {
      var random = opts.randomize ? Math.random() + 1 : 1;
      var timeout = Math.round(random * Math.max(opts.minTimeout, 1) * Math.pow(opts.factor, attempt));
      timeout = Math.min(timeout, opts.maxTimeout);
      return timeout;
    };
    exports.wrap = function(obj, options, methods) {
      if (options instanceof Array) {
        methods = options;
        options = null;
      }
      if (!methods) {
        methods = [];
        for (var key in obj) {
          if (typeof obj[key] === "function") {
            methods.push(key);
          }
        }
      }
      for (var i4 = 0; i4 < methods.length; i4++) {
        var method = methods[i4];
        var original = obj[method];
        obj[method] = function retryWrapper(original2) {
          var op = exports.operation(options);
          var args = Array.prototype.slice.call(arguments, 1);
          var callback = args.pop();
          args.push(function(err) {
            if (op.retry(err)) {
              return;
            }
            if (err) {
              arguments[0] = op.mainError();
            }
            callback.apply(this, arguments);
          });
          op.attempt(function() {
            original2.apply(obj, args);
          });
        }.bind(obj, original);
        obj[method].options = options;
      }
    };
  }
});

// node_modules/retry/index.js
var require_retry2 = __commonJS({
  "node_modules/retry/index.js"(exports, module) {
    module.exports = require_retry();
  }
});

// node_modules/@uppy/utils/lib/Translator.js
function _classPrivateFieldLooseBase(receiver, privateKey) {
  if (!Object.prototype.hasOwnProperty.call(receiver, privateKey)) {
    throw new TypeError("attempted to use private field on non-instance");
  }
  return receiver;
}
var id = 0;
function _classPrivateFieldLooseKey(name) {
  return "__private_" + id++ + "_" + name;
}
function insertReplacement(source, rx, replacement) {
  const newParts = [];
  source.forEach((chunk) => {
    if (typeof chunk !== "string") {
      return newParts.push(chunk);
    }
    return rx[Symbol.split](chunk).forEach((raw, i4, list) => {
      if (raw !== "") {
        newParts.push(raw);
      }
      if (i4 < list.length - 1) {
        newParts.push(replacement);
      }
    });
  });
  return newParts;
}
function interpolate(phrase, options) {
  const dollarRegex = /\$/g;
  const dollarBillsYall = "$$$$";
  let interpolated = [phrase];
  if (options == null) return interpolated;
  for (const arg of Object.keys(options)) {
    if (arg !== "_") {
      let replacement = options[arg];
      if (typeof replacement === "string") {
        replacement = dollarRegex[Symbol.replace](replacement, dollarBillsYall);
      }
      interpolated = insertReplacement(interpolated, new RegExp(`%\\{${arg}\\}`, "g"), replacement);
    }
  }
  return interpolated;
}
var defaultOnMissingKey = (key) => {
  throw new Error(`missing string: ${key}`);
};
var _onMissingKey = /* @__PURE__ */ _classPrivateFieldLooseKey("onMissingKey");
var _apply = /* @__PURE__ */ _classPrivateFieldLooseKey("apply");
var Translator = class {
  constructor(locales, _temp) {
    let {
      onMissingKey = defaultOnMissingKey
    } = _temp === void 0 ? {} : _temp;
    Object.defineProperty(this, _apply, {
      value: _apply2
    });
    Object.defineProperty(this, _onMissingKey, {
      writable: true,
      value: void 0
    });
    this.locale = {
      strings: {},
      pluralize(n3) {
        if (n3 === 1) {
          return 0;
        }
        return 1;
      }
    };
    if (Array.isArray(locales)) {
      locales.forEach(_classPrivateFieldLooseBase(this, _apply)[_apply], this);
    } else {
      _classPrivateFieldLooseBase(this, _apply)[_apply](locales);
    }
    _classPrivateFieldLooseBase(this, _onMissingKey)[_onMissingKey] = onMissingKey;
  }
  /**
   * Public translate method
   *
   * @param key
   * @param options with values that will be used later to replace placeholders in string
   * @returns string translated (and interpolated)
   */
  translate(key, options) {
    return this.translateArray(key, options).join("");
  }
  /**
   * Get a translation and return the translated and interpolated parts as an array.
   *
   * @returns The translated and interpolated parts, in order.
   */
  translateArray(key, options) {
    let string = this.locale.strings[key];
    if (string == null) {
      _classPrivateFieldLooseBase(this, _onMissingKey)[_onMissingKey](key);
      string = key;
    }
    const hasPluralForms = typeof string === "object";
    if (hasPluralForms) {
      if (options && typeof options.smart_count !== "undefined") {
        const plural = this.locale.pluralize(options.smart_count);
        return interpolate(string[plural], options);
      }
      throw new Error("Attempted to use a string with plural forms, but no value was given for %{smart_count}");
    }
    if (typeof string !== "string") {
      throw new Error(`string was not a string`);
    }
    return interpolate(string, options);
  }
};
function _apply2(locale) {
  if (!(locale != null && locale.strings)) {
    return;
  }
  const prevLocale = this.locale;
  Object.assign(this.locale, {
    strings: {
      ...prevLocale.strings,
      ...locale.strings
    },
    pluralize: locale.pluralize || prevLocale.pluralize
  });
}

// node_modules/@uppy/core/lib/Uppy.js
var import_namespace_emitter = __toESM(require_namespace_emitter(), 1);

// node_modules/nanoid/non-secure/index.js
var urlAlphabet = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";
var nanoid = (size = 21) => {
  let id20 = "";
  let i4 = size;
  while (i4--) {
    id20 += urlAlphabet[Math.random() * 64 | 0];
  }
  return id20;
};

// node_modules/@uppy/core/lib/Uppy.js
var import_throttle = __toESM(require_throttle(), 1);

// node_modules/@uppy/store-default/lib/index.js
function _classPrivateFieldLooseBase2(receiver, privateKey) {
  if (!Object.prototype.hasOwnProperty.call(receiver, privateKey)) {
    throw new TypeError("attempted to use private field on non-instance");
  }
  return receiver;
}
var id2 = 0;
function _classPrivateFieldLooseKey2(name) {
  return "__private_" + id2++ + "_" + name;
}
var packageJson = {
  "version": "3.2.2"
};
var _callbacks = /* @__PURE__ */ _classPrivateFieldLooseKey2("callbacks");
var _publish = /* @__PURE__ */ _classPrivateFieldLooseKey2("publish");
var DefaultStore = class {
  constructor() {
    Object.defineProperty(this, _publish, {
      value: _publish2
    });
    this.state = {};
    Object.defineProperty(this, _callbacks, {
      writable: true,
      value: /* @__PURE__ */ new Set()
    });
  }
  getState() {
    return this.state;
  }
  setState(patch) {
    const prevState = {
      ...this.state
    };
    const nextState = {
      ...this.state,
      ...patch
    };
    this.state = nextState;
    _classPrivateFieldLooseBase2(this, _publish)[_publish](prevState, nextState, patch);
  }
  subscribe(listener) {
    _classPrivateFieldLooseBase2(this, _callbacks)[_callbacks].add(listener);
    return () => {
      _classPrivateFieldLooseBase2(this, _callbacks)[_callbacks].delete(listener);
    };
  }
};
function _publish2() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  _classPrivateFieldLooseBase2(this, _callbacks)[_callbacks].forEach((listener) => {
    listener(...args);
  });
}
DefaultStore.VERSION = packageJson.version;
var lib_default = DefaultStore;

// node_modules/@uppy/utils/lib/getFileNameAndExtension.js
function getFileNameAndExtension(fullFileName) {
  const lastDot = fullFileName.lastIndexOf(".");
  if (lastDot === -1 || lastDot === fullFileName.length - 1) {
    return {
      name: fullFileName,
      extension: void 0
    };
  }
  return {
    name: fullFileName.slice(0, lastDot),
    extension: fullFileName.slice(lastDot + 1)
  };
}

// node_modules/@uppy/utils/lib/mimeTypes.js
var mimeTypes_default = {
  __proto__: null,
  md: "text/markdown",
  markdown: "text/markdown",
  mp4: "video/mp4",
  mp3: "audio/mp3",
  svg: "image/svg+xml",
  jpg: "image/jpeg",
  png: "image/png",
  webp: "image/webp",
  gif: "image/gif",
  heic: "image/heic",
  heif: "image/heif",
  yaml: "text/yaml",
  yml: "text/yaml",
  csv: "text/csv",
  tsv: "text/tab-separated-values",
  tab: "text/tab-separated-values",
  avi: "video/x-msvideo",
  mks: "video/x-matroska",
  mkv: "video/x-matroska",
  mov: "video/quicktime",
  dicom: "application/dicom",
  doc: "application/msword",
  docm: "application/vnd.ms-word.document.macroenabled.12",
  docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  dot: "application/msword",
  dotm: "application/vnd.ms-word.template.macroenabled.12",
  dotx: "application/vnd.openxmlformats-officedocument.wordprocessingml.template",
  xla: "application/vnd.ms-excel",
  xlam: "application/vnd.ms-excel.addin.macroenabled.12",
  xlc: "application/vnd.ms-excel",
  xlf: "application/x-xliff+xml",
  xlm: "application/vnd.ms-excel",
  xls: "application/vnd.ms-excel",
  xlsb: "application/vnd.ms-excel.sheet.binary.macroenabled.12",
  xlsm: "application/vnd.ms-excel.sheet.macroenabled.12",
  xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  xlt: "application/vnd.ms-excel",
  xltm: "application/vnd.ms-excel.template.macroenabled.12",
  xltx: "application/vnd.openxmlformats-officedocument.spreadsheetml.template",
  xlw: "application/vnd.ms-excel",
  txt: "text/plain",
  text: "text/plain",
  conf: "text/plain",
  log: "text/plain",
  pdf: "application/pdf",
  zip: "application/zip",
  "7z": "application/x-7z-compressed",
  rar: "application/x-rar-compressed",
  tar: "application/x-tar",
  gz: "application/gzip",
  dmg: "application/x-apple-diskimage"
};

// node_modules/@uppy/utils/lib/getFileType.js
function getFileType(file) {
  var _getFileNameAndExtens;
  if (file.type) return file.type;
  const fileExtension = file.name ? (_getFileNameAndExtens = getFileNameAndExtension(file.name).extension) == null ? void 0 : _getFileNameAndExtens.toLowerCase() : null;
  if (fileExtension && fileExtension in mimeTypes_default) {
    return mimeTypes_default[fileExtension];
  }
  return "application/octet-stream";
}

// node_modules/@uppy/utils/lib/generateFileID.js
function encodeCharacter(character) {
  return character.charCodeAt(0).toString(32);
}
function encodeFilename(name) {
  let suffix = "";
  return name.replace(/[^A-Z0-9]/gi, (character) => {
    suffix += `-${encodeCharacter(character)}`;
    return "/";
  }) + suffix;
}
function generateFileID(file, instanceId) {
  let id20 = instanceId || "uppy";
  if (typeof file.name === "string") {
    id20 += `-${encodeFilename(file.name.toLowerCase())}`;
  }
  if (file.type !== void 0) {
    id20 += `-${file.type}`;
  }
  if (file.meta && typeof file.meta.relativePath === "string") {
    id20 += `-${encodeFilename(file.meta.relativePath.toLowerCase())}`;
  }
  if (file.data.size !== void 0) {
    id20 += `-${file.data.size}`;
  }
  if (file.data.lastModified !== void 0) {
    id20 += `-${file.data.lastModified}`;
  }
  return id20;
}
function hasFileStableId(file) {
  if (!file.isRemote || !file.remote) return false;
  const stableIdProviders = /* @__PURE__ */ new Set(["box", "dropbox", "drive", "facebook", "unsplash"]);
  return stableIdProviders.has(file.remote.provider);
}
function getSafeFileId(file, instanceId) {
  if (hasFileStableId(file)) return file.id;
  const fileType = getFileType(file);
  return generateFileID({
    ...file,
    type: fileType
  }, instanceId);
}

// node_modules/@uppy/core/lib/supportsUploadProgress.js
function supportsUploadProgress(userAgent) {
  if (userAgent == null && typeof navigator !== "undefined") {
    userAgent = navigator.userAgent;
  }
  if (!userAgent) return true;
  const m4 = /Edge\/(\d+\.\d+)/.exec(userAgent);
  if (!m4) return true;
  const edgeVersion = m4[1];
  const version = edgeVersion.split(".", 2);
  const major = parseInt(version[0], 10);
  const minor = parseInt(version[1], 10);
  if (major < 15 || major === 15 && minor < 15063) {
    return true;
  }
  if (major > 18 || major === 18 && minor >= 18218) {
    return true;
  }
  return false;
}

// node_modules/@uppy/core/lib/getFileName.js
function getFileName(fileType, fileDescriptor) {
  if (fileDescriptor.name) {
    return fileDescriptor.name;
  }
  if (fileType.split("/")[0] === "image") {
    return `${fileType.split("/")[0]}.${fileType.split("/")[1]}`;
  }
  return "noname";
}

// node_modules/@uppy/utils/lib/getTimeStamp.js
function pad(number) {
  return number < 10 ? `0${number}` : number.toString();
}
function getTimeStamp() {
  const date = /* @__PURE__ */ new Date();
  const hours = pad(date.getHours());
  const minutes = pad(date.getMinutes());
  const seconds = pad(date.getSeconds());
  return `${hours}:${minutes}:${seconds}`;
}

// node_modules/@uppy/core/lib/loggers.js
var justErrorsLogger = {
  debug: () => {
  },
  warn: () => {
  },
  error: function() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return console.error(`[Uppy] [${getTimeStamp()}]`, ...args);
  }
};
var debugLogger = {
  debug: function() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    return console.debug(`[Uppy] [${getTimeStamp()}]`, ...args);
  },
  warn: function() {
    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }
    return console.warn(`[Uppy] [${getTimeStamp()}]`, ...args);
  },
  error: function() {
    for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      args[_key4] = arguments[_key4];
    }
    return console.error(`[Uppy] [${getTimeStamp()}]`, ...args);
  }
};

// node_modules/@uppy/core/lib/Restricter.js
var import_prettier_bytes = __toESM(require_prettierBytes(), 1);
var import_mime_match = __toESM(require_mime_match(), 1);
var defaultOptions = {
  maxFileSize: null,
  minFileSize: null,
  maxTotalFileSize: null,
  maxNumberOfFiles: null,
  minNumberOfFiles: null,
  allowedFileTypes: null,
  requiredMetaFields: []
};
var RestrictionError = class extends Error {
  constructor(message, opts) {
    var _opts$isUserFacing;
    super(message);
    this.isRestriction = true;
    this.isUserFacing = (_opts$isUserFacing = opts == null ? void 0 : opts.isUserFacing) != null ? _opts$isUserFacing : true;
    if (opts != null && opts.file) {
      this.file = opts.file;
    }
  }
};
var Restricter = class {
  constructor(getOpts, getI18n) {
    this.getI18n = getI18n;
    this.getOpts = () => {
      var _opts$restrictions;
      const opts = getOpts();
      if (((_opts$restrictions = opts.restrictions) == null ? void 0 : _opts$restrictions.allowedFileTypes) != null && !Array.isArray(opts.restrictions.allowedFileTypes)) {
        throw new TypeError("`restrictions.allowedFileTypes` must be an array");
      }
      return opts;
    };
  }
  // Because these operations are slow, we cannot run them for every file (if we are adding multiple files)
  validateAggregateRestrictions(existingFiles, addingFiles) {
    const {
      maxTotalFileSize,
      maxNumberOfFiles
    } = this.getOpts().restrictions;
    if (maxNumberOfFiles) {
      const nonGhostFiles = existingFiles.filter((f4) => !f4.isGhost);
      if (nonGhostFiles.length + addingFiles.length > maxNumberOfFiles) {
        throw new RestrictionError(`${this.getI18n()("youCanOnlyUploadX", {
          smart_count: maxNumberOfFiles
        })}`);
      }
    }
    if (maxTotalFileSize) {
      const totalFilesSize = [...existingFiles, ...addingFiles].reduce((total, f4) => {
        var _f$size;
        return total + ((_f$size = f4.size) != null ? _f$size : 0);
      }, 0);
      if (totalFilesSize > maxTotalFileSize) {
        throw new RestrictionError(this.getI18n()("aggregateExceedsSize", {
          sizeAllowed: (0, import_prettier_bytes.default)(maxTotalFileSize),
          size: (0, import_prettier_bytes.default)(totalFilesSize)
        }));
      }
    }
  }
  validateSingleFile(file) {
    const {
      maxFileSize,
      minFileSize,
      allowedFileTypes
    } = this.getOpts().restrictions;
    if (allowedFileTypes) {
      const isCorrectFileType = allowedFileTypes.some((type) => {
        if (type.includes("/")) {
          if (!file.type) return false;
          return (0, import_mime_match.default)(file.type.replace(/;.*?$/, ""), type);
        }
        if (type[0] === "." && file.extension) {
          return file.extension.toLowerCase() === type.slice(1).toLowerCase();
        }
        return false;
      });
      if (!isCorrectFileType) {
        const allowedFileTypesString = allowedFileTypes.join(", ");
        throw new RestrictionError(this.getI18n()("youCanOnlyUploadFileTypes", {
          types: allowedFileTypesString
        }), {
          file
        });
      }
    }
    if (maxFileSize && file.size != null && file.size > maxFileSize) {
      throw new RestrictionError(this.getI18n()("exceedsSize", {
        size: (0, import_prettier_bytes.default)(maxFileSize),
        file: file.name
      }), {
        file
      });
    }
    if (minFileSize && file.size != null && file.size < minFileSize) {
      throw new RestrictionError(this.getI18n()("inferiorSize", {
        size: (0, import_prettier_bytes.default)(minFileSize)
      }), {
        file
      });
    }
  }
  validate(existingFiles, addingFiles) {
    addingFiles.forEach((addingFile) => {
      this.validateSingleFile(addingFile);
    });
    this.validateAggregateRestrictions(existingFiles, addingFiles);
  }
  validateMinNumberOfFiles(files) {
    const {
      minNumberOfFiles
    } = this.getOpts().restrictions;
    if (minNumberOfFiles && Object.keys(files).length < minNumberOfFiles) {
      throw new RestrictionError(this.getI18n()("youHaveToAtLeastSelectX", {
        smart_count: minNumberOfFiles
      }));
    }
  }
  getMissingRequiredMetaFields(file) {
    const error = new RestrictionError(this.getI18n()("missingRequiredMetaFieldOnFile", {
      fileName: file.name
    }));
    const {
      requiredMetaFields
    } = this.getOpts().restrictions;
    const missingFields = [];
    for (const field of requiredMetaFields) {
      if (!Object.hasOwn(file.meta, field) || file.meta[field] === "") {
        missingFields.push(field);
      }
    }
    return {
      missingFields,
      error
    };
  }
};

// node_modules/@uppy/core/lib/locale.js
var locale_default = {
  strings: {
    addBulkFilesFailed: {
      0: "Failed to add %{smart_count} file due to an internal error",
      1: "Failed to add %{smart_count} files due to internal errors"
    },
    youCanOnlyUploadX: {
      0: "You can only upload %{smart_count} file",
      1: "You can only upload %{smart_count} files"
    },
    youHaveToAtLeastSelectX: {
      0: "You have to select at least %{smart_count} file",
      1: "You have to select at least %{smart_count} files"
    },
    aggregateExceedsSize: "You selected %{size} of files, but maximum allowed size is %{sizeAllowed}",
    exceedsSize: "%{file} exceeds maximum allowed size of %{size}",
    missingRequiredMetaField: "Missing required meta fields",
    missingRequiredMetaFieldOnFile: "Missing required meta fields in %{fileName}",
    inferiorSize: "This file is smaller than the allowed size of %{size}",
    youCanOnlyUploadFileTypes: "You can only upload: %{types}",
    noMoreFilesAllowed: "Cannot add more files",
    noDuplicates: "Cannot add the duplicate file '%{fileName}', it already exists",
    companionError: "Connection with Companion failed",
    authAborted: "Authentication aborted",
    companionUnauthorizeHint: "To unauthorize to your %{provider} account, please go to %{url}",
    failedToUpload: "Failed to upload %{file}",
    noInternetConnection: "No Internet connection",
    connectedToInternet: "Connected to the Internet",
    // Strings for remote providers
    noFilesFound: "You have no files or folders here",
    noSearchResults: "Unfortunately, there are no results for this search",
    selectX: {
      0: "Select %{smart_count}",
      1: "Select %{smart_count}"
    },
    allFilesFromFolderNamed: "All files from folder %{name}",
    openFolderNamed: "Open folder %{name}",
    cancel: "Cancel",
    logOut: "Log out",
    filter: "Filter",
    resetFilter: "Reset filter",
    loading: "Loading...",
    loadedXFiles: "Loaded %{numFiles} files",
    authenticateWithTitle: "Please authenticate with %{pluginName} to select files",
    authenticateWith: "Connect to %{pluginName}",
    signInWithGoogle: "Sign in with Google",
    searchImages: "Search for images",
    enterTextToSearch: "Enter text to search for images",
    search: "Search",
    resetSearch: "Reset search",
    emptyFolderAdded: "No files were added from empty folder",
    addedNumFiles: "Added %{numFiles} file(s)",
    folderAlreadyAdded: 'The folder "%{folder}" was already added',
    folderAdded: {
      0: "Added %{smart_count} file from %{folder}",
      1: "Added %{smart_count} files from %{folder}"
    },
    additionalRestrictionsFailed: "%{count} additional restrictions were not fulfilled",
    unnamed: "Unnamed"
  }
};

// node_modules/@uppy/core/lib/Uppy.js
var _Symbol$for;
var _Symbol$for2;
function _classPrivateFieldLooseBase3(receiver, privateKey) {
  if (!Object.prototype.hasOwnProperty.call(receiver, privateKey)) {
    throw new TypeError("attempted to use private field on non-instance");
  }
  return receiver;
}
var id3 = 0;
function _classPrivateFieldLooseKey3(name) {
  return "__private_" + id3++ + "_" + name;
}
var packageJson2 = {
  "version": "3.13.1"
};
var defaultUploadState = {
  totalProgress: 0,
  allowNewUpload: true,
  error: null,
  recoveredState: null
};
var _plugins = /* @__PURE__ */ _classPrivateFieldLooseKey3("plugins");
var _restricter = /* @__PURE__ */ _classPrivateFieldLooseKey3("restricter");
var _storeUnsubscribe = /* @__PURE__ */ _classPrivateFieldLooseKey3("storeUnsubscribe");
var _emitter = /* @__PURE__ */ _classPrivateFieldLooseKey3("emitter");
var _preProcessors = /* @__PURE__ */ _classPrivateFieldLooseKey3("preProcessors");
var _uploaders = /* @__PURE__ */ _classPrivateFieldLooseKey3("uploaders");
var _postProcessors = /* @__PURE__ */ _classPrivateFieldLooseKey3("postProcessors");
var _informAndEmit = /* @__PURE__ */ _classPrivateFieldLooseKey3("informAndEmit");
var _checkRequiredMetaFieldsOnFile = /* @__PURE__ */ _classPrivateFieldLooseKey3("checkRequiredMetaFieldsOnFile");
var _checkRequiredMetaFields = /* @__PURE__ */ _classPrivateFieldLooseKey3("checkRequiredMetaFields");
var _assertNewUploadAllowed = /* @__PURE__ */ _classPrivateFieldLooseKey3("assertNewUploadAllowed");
var _transformFile = /* @__PURE__ */ _classPrivateFieldLooseKey3("transformFile");
var _startIfAutoProceed = /* @__PURE__ */ _classPrivateFieldLooseKey3("startIfAutoProceed");
var _checkAndUpdateFileState = /* @__PURE__ */ _classPrivateFieldLooseKey3("checkAndUpdateFileState");
var _addListeners = /* @__PURE__ */ _classPrivateFieldLooseKey3("addListeners");
var _updateOnlineStatus = /* @__PURE__ */ _classPrivateFieldLooseKey3("updateOnlineStatus");
var _requestClientById = /* @__PURE__ */ _classPrivateFieldLooseKey3("requestClientById");
var _createUpload = /* @__PURE__ */ _classPrivateFieldLooseKey3("createUpload");
var _getUpload = /* @__PURE__ */ _classPrivateFieldLooseKey3("getUpload");
var _removeUpload = /* @__PURE__ */ _classPrivateFieldLooseKey3("removeUpload");
var _runUpload = /* @__PURE__ */ _classPrivateFieldLooseKey3("runUpload");
_Symbol$for = Symbol.for("uppy test: getPlugins");
_Symbol$for2 = Symbol.for("uppy test: createUpload");
var Uppy = class _Uppy {
  /**
   * Instantiate Uppy
   */
  constructor(_opts) {
    Object.defineProperty(this, _runUpload, {
      value: _runUpload2
    });
    Object.defineProperty(this, _removeUpload, {
      value: _removeUpload2
    });
    Object.defineProperty(this, _getUpload, {
      value: _getUpload2
    });
    Object.defineProperty(this, _createUpload, {
      value: _createUpload2
    });
    Object.defineProperty(this, _addListeners, {
      value: _addListeners2
    });
    Object.defineProperty(this, _checkAndUpdateFileState, {
      value: _checkAndUpdateFileState2
    });
    Object.defineProperty(this, _startIfAutoProceed, {
      value: _startIfAutoProceed2
    });
    Object.defineProperty(this, _transformFile, {
      value: _transformFile2
    });
    Object.defineProperty(this, _assertNewUploadAllowed, {
      value: _assertNewUploadAllowed2
    });
    Object.defineProperty(this, _checkRequiredMetaFields, {
      value: _checkRequiredMetaFields2
    });
    Object.defineProperty(this, _checkRequiredMetaFieldsOnFile, {
      value: _checkRequiredMetaFieldsOnFile2
    });
    Object.defineProperty(this, _informAndEmit, {
      value: _informAndEmit2
    });
    Object.defineProperty(this, _plugins, {
      writable: true,
      value: /* @__PURE__ */ Object.create(null)
    });
    Object.defineProperty(this, _restricter, {
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, _storeUnsubscribe, {
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, _emitter, {
      writable: true,
      value: (0, import_namespace_emitter.default)()
    });
    Object.defineProperty(this, _preProcessors, {
      writable: true,
      value: /* @__PURE__ */ new Set()
    });
    Object.defineProperty(this, _uploaders, {
      writable: true,
      value: /* @__PURE__ */ new Set()
    });
    Object.defineProperty(this, _postProcessors, {
      writable: true,
      value: /* @__PURE__ */ new Set()
    });
    this.scheduledAutoProceed = null;
    this.wasOffline = false;
    this.calculateProgress = (0, import_throttle.default)((file, data) => {
      const fileInState = this.getFile(file == null ? void 0 : file.id);
      if (file == null || !fileInState) {
        this.log(`Not setting progress for a file that has been removed: ${file == null ? void 0 : file.id}`);
        return;
      }
      if (fileInState.progress.percentage === 100) {
        this.log(`Not setting progress for a file that has been already uploaded: ${file.id}`);
        return;
      }
      const canHavePercentage = Number.isFinite(data.bytesTotal) && data.bytesTotal > 0;
      this.setFileState(file.id, {
        progress: {
          ...fileInState.progress,
          bytesUploaded: data.bytesUploaded,
          bytesTotal: data.bytesTotal,
          percentage: canHavePercentage ? Math.round(data.bytesUploaded / data.bytesTotal * 100) : 0
        }
      });
      this.calculateTotalProgress();
    }, 500, {
      leading: true,
      trailing: true
    });
    Object.defineProperty(this, _updateOnlineStatus, {
      writable: true,
      value: this.updateOnlineStatus.bind(this)
    });
    Object.defineProperty(this, _requestClientById, {
      writable: true,
      value: /* @__PURE__ */ new Map()
    });
    this.defaultLocale = locale_default;
    const defaultOptions9 = {
      id: "uppy",
      autoProceed: false,
      allowMultipleUploadBatches: true,
      debug: false,
      restrictions: defaultOptions,
      meta: {},
      onBeforeFileAdded: (file, files) => !Object.hasOwn(files, file.id),
      onBeforeUpload: (files) => files,
      store: new lib_default(),
      logger: justErrorsLogger,
      infoTimeout: 5e3
    };
    const merged = {
      ...defaultOptions9,
      ..._opts
    };
    this.opts = {
      ...merged,
      restrictions: {
        ...defaultOptions9.restrictions,
        ..._opts && _opts.restrictions
      }
    };
    if (_opts && _opts.logger && _opts.debug) {
      this.log("You are using a custom `logger`, but also set `debug: true`, which uses built-in logger to output logs to console. Ignoring `debug: true` and using your custom `logger`.", "warning");
    } else if (_opts && _opts.debug) {
      this.opts.logger = debugLogger;
    }
    this.log(`Using Core v${_Uppy.VERSION}`);
    this.i18nInit();
    this.store = this.opts.store;
    this.setState({
      ...defaultUploadState,
      plugins: {},
      files: {},
      currentUploads: {},
      capabilities: {
        uploadProgress: supportsUploadProgress(),
        individualCancellation: true,
        resumableUploads: false
      },
      meta: {
        ...this.opts.meta
      },
      info: []
    });
    _classPrivateFieldLooseBase3(this, _restricter)[_restricter] = new Restricter(() => this.opts, () => this.i18n);
    _classPrivateFieldLooseBase3(this, _storeUnsubscribe)[_storeUnsubscribe] = this.store.subscribe(
      // eslint-disable-next-line
      // @ts-ignore Store is incorrectly typed
      (prevState, nextState, patch) => {
        this.emit("state-update", prevState, nextState, patch);
        this.updateAll(nextState);
      }
    );
    if (this.opts.debug && typeof window !== "undefined") {
      window[this.opts.id] = this;
    }
    _classPrivateFieldLooseBase3(this, _addListeners)[_addListeners]();
  }
  emit(event) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    _classPrivateFieldLooseBase3(this, _emitter)[_emitter].emit(event, ...args);
  }
  on(event, callback) {
    _classPrivateFieldLooseBase3(this, _emitter)[_emitter].on(event, callback);
    return this;
  }
  once(event, callback) {
    _classPrivateFieldLooseBase3(this, _emitter)[_emitter].once(event, callback);
    return this;
  }
  off(event, callback) {
    _classPrivateFieldLooseBase3(this, _emitter)[_emitter].off(event, callback);
    return this;
  }
  /**
   * Iterate on all plugins and run `update` on them.
   * Called each time state changes.
   *
   */
  updateAll(state) {
    this.iteratePlugins((plugin) => {
      plugin.update(state);
    });
  }
  /**
   * Updates state with a patch
   */
  setState(patch) {
    this.store.setState(patch);
  }
  /**
   * Returns current state.
   */
  getState() {
    return this.store.getState();
  }
  patchFilesState(filesWithNewState) {
    const existingFilesState = this.getState().files;
    this.setState({
      files: {
        ...existingFilesState,
        ...Object.fromEntries(Object.entries(filesWithNewState).map((_ref) => {
          let [fileID, newFileState] = _ref;
          return [fileID, {
            ...existingFilesState[fileID],
            ...newFileState
          }];
        }))
      }
    });
  }
  /**
   * Shorthand to set state for a specific file.
   */
  setFileState(fileID, state) {
    if (!this.getState().files[fileID]) {
      throw new Error(`Can\u2019t set state for ${fileID} (the file could have been removed)`);
    }
    this.patchFilesState({
      [fileID]: state
    });
  }
  i18nInit() {
    const onMissingKey = (key) => this.log(`Missing i18n string: ${key}`, "error");
    const translator = new Translator([this.defaultLocale, this.opts.locale], {
      onMissingKey
    });
    this.i18n = translator.translate.bind(translator);
    this.i18nArray = translator.translateArray.bind(translator);
    this.locale = translator.locale;
  }
  setOptions(newOpts) {
    this.opts = {
      ...this.opts,
      ...newOpts,
      restrictions: {
        ...this.opts.restrictions,
        ...newOpts == null ? void 0 : newOpts.restrictions
      }
    };
    if (newOpts.meta) {
      this.setMeta(newOpts.meta);
    }
    this.i18nInit();
    if (newOpts.locale) {
      this.iteratePlugins((plugin) => {
        plugin.setOptions(newOpts);
      });
    }
    this.setState(void 0);
  }
  // todo next major: remove
  resetProgress() {
    const defaultProgress = {
      percentage: 0,
      bytesUploaded: 0,
      uploadComplete: false,
      uploadStarted: null
    };
    const files = {
      ...this.getState().files
    };
    const updatedFiles = {};
    Object.keys(files).forEach((fileID) => {
      updatedFiles[fileID] = {
        ...files[fileID],
        progress: {
          ...files[fileID].progress,
          ...defaultProgress
        }
      };
    });
    this.setState({
      files: updatedFiles,
      ...defaultUploadState
    });
    this.emit("reset-progress");
  }
  // @todo next major: rename to `clear()`, make it also cancel ongoing uploads
  // or throw and say you need to cancel manually
  clearUploadedFiles() {
    const {
      capabilities,
      currentUploads
    } = this.getState();
    if (Object.keys(currentUploads).length > 0 && !capabilities.individualCancellation) {
      throw new Error("The installed uploader plugin does not allow removing files during an upload.");
    }
    this.setState({
      ...defaultUploadState,
      files: {}
    });
  }
  addPreProcessor(fn) {
    _classPrivateFieldLooseBase3(this, _preProcessors)[_preProcessors].add(fn);
  }
  removePreProcessor(fn) {
    return _classPrivateFieldLooseBase3(this, _preProcessors)[_preProcessors].delete(fn);
  }
  addPostProcessor(fn) {
    _classPrivateFieldLooseBase3(this, _postProcessors)[_postProcessors].add(fn);
  }
  removePostProcessor(fn) {
    return _classPrivateFieldLooseBase3(this, _postProcessors)[_postProcessors].delete(fn);
  }
  addUploader(fn) {
    _classPrivateFieldLooseBase3(this, _uploaders)[_uploaders].add(fn);
  }
  removeUploader(fn) {
    return _classPrivateFieldLooseBase3(this, _uploaders)[_uploaders].delete(fn);
  }
  setMeta(data) {
    const updatedMeta = {
      ...this.getState().meta,
      ...data
    };
    const updatedFiles = {
      ...this.getState().files
    };
    Object.keys(updatedFiles).forEach((fileID) => {
      updatedFiles[fileID] = {
        ...updatedFiles[fileID],
        meta: {
          ...updatedFiles[fileID].meta,
          ...data
        }
      };
    });
    this.log("Adding metadata:");
    this.log(data);
    this.setState({
      meta: updatedMeta,
      files: updatedFiles
    });
  }
  setFileMeta(fileID, data) {
    const updatedFiles = {
      ...this.getState().files
    };
    if (!updatedFiles[fileID]) {
      this.log("Was trying to set metadata for a file that has been removed: ", fileID);
      return;
    }
    const newMeta = {
      ...updatedFiles[fileID].meta,
      ...data
    };
    updatedFiles[fileID] = {
      ...updatedFiles[fileID],
      meta: newMeta
    };
    this.setState({
      files: updatedFiles
    });
  }
  /**
   * Get a file object.
   */
  getFile(fileID) {
    return this.getState().files[fileID];
  }
  /**
   * Get all files in an array.
   */
  getFiles() {
    const {
      files
    } = this.getState();
    return Object.values(files);
  }
  getFilesByIds(ids) {
    return ids.map((id20) => this.getFile(id20));
  }
  getObjectOfFilesPerState() {
    const {
      files: filesObject,
      totalProgress,
      error
    } = this.getState();
    const files = Object.values(filesObject);
    const inProgressFiles = [];
    const newFiles = [];
    const startedFiles = [];
    const uploadStartedFiles = [];
    const pausedFiles = [];
    const completeFiles = [];
    const erroredFiles = [];
    const inProgressNotPausedFiles = [];
    const processingFiles = [];
    for (const file of files) {
      const {
        progress
      } = file;
      if (!progress.uploadComplete && progress.uploadStarted) {
        inProgressFiles.push(file);
        if (!file.isPaused) {
          inProgressNotPausedFiles.push(file);
        }
      }
      if (!progress.uploadStarted) {
        newFiles.push(file);
      }
      if (progress.uploadStarted || progress.preprocess || progress.postprocess) {
        startedFiles.push(file);
      }
      if (progress.uploadStarted) {
        uploadStartedFiles.push(file);
      }
      if (file.isPaused) {
        pausedFiles.push(file);
      }
      if (progress.uploadComplete) {
        completeFiles.push(file);
      }
      if (file.error) {
        erroredFiles.push(file);
      }
      if (progress.preprocess || progress.postprocess) {
        processingFiles.push(file);
      }
    }
    return {
      newFiles,
      startedFiles,
      uploadStartedFiles,
      pausedFiles,
      completeFiles,
      erroredFiles,
      inProgressFiles,
      inProgressNotPausedFiles,
      processingFiles,
      isUploadStarted: uploadStartedFiles.length > 0,
      isAllComplete: totalProgress === 100 && completeFiles.length === files.length && processingFiles.length === 0,
      isAllErrored: !!error && erroredFiles.length === files.length,
      isAllPaused: inProgressFiles.length !== 0 && pausedFiles.length === inProgressFiles.length,
      isUploadInProgress: inProgressFiles.length > 0,
      isSomeGhost: files.some((file) => file.isGhost)
    };
  }
  validateRestrictions(file, files) {
    if (files === void 0) {
      files = this.getFiles();
    }
    try {
      _classPrivateFieldLooseBase3(this, _restricter)[_restricter].validate(files, [file]);
    } catch (err) {
      return err;
    }
    return null;
  }
  checkIfFileAlreadyExists(fileID) {
    const {
      files
    } = this.getState();
    if (files[fileID] && !files[fileID].isGhost) {
      return true;
    }
    return false;
  }
  /**
   * Add a new file to `state.files`. This will run `onBeforeFileAdded`,
   * try to guess file type in a clever way, check file against restrictions,
   * and start an upload if `autoProceed === true`.
   */
  addFile(file) {
    _classPrivateFieldLooseBase3(this, _assertNewUploadAllowed)[_assertNewUploadAllowed](file);
    const {
      nextFilesState,
      validFilesToAdd,
      errors
    } = _classPrivateFieldLooseBase3(this, _checkAndUpdateFileState)[_checkAndUpdateFileState]([file]);
    const restrictionErrors = errors.filter((error) => error.isRestriction);
    _classPrivateFieldLooseBase3(this, _informAndEmit)[_informAndEmit](restrictionErrors);
    if (errors.length > 0) throw errors[0];
    this.setState({
      files: nextFilesState
    });
    const [firstValidFileToAdd] = validFilesToAdd;
    this.emit("file-added", firstValidFileToAdd);
    this.emit("files-added", validFilesToAdd);
    this.log(`Added file: ${firstValidFileToAdd.name}, ${firstValidFileToAdd.id}, mime type: ${firstValidFileToAdd.type}`);
    _classPrivateFieldLooseBase3(this, _startIfAutoProceed)[_startIfAutoProceed]();
    return firstValidFileToAdd.id;
  }
  /**
   * Add multiple files to `state.files`. See the `addFile()` documentation.
   *
   * If an error occurs while adding a file, it is logged and the user is notified.
   * This is good for UI plugins, but not for programmatic use.
   * Programmatic users should usually still use `addFile()` on individual files.
   */
  addFiles(fileDescriptors) {
    _classPrivateFieldLooseBase3(this, _assertNewUploadAllowed)[_assertNewUploadAllowed]();
    const {
      nextFilesState,
      validFilesToAdd,
      errors
    } = _classPrivateFieldLooseBase3(this, _checkAndUpdateFileState)[_checkAndUpdateFileState](fileDescriptors);
    const restrictionErrors = errors.filter((error) => error.isRestriction);
    _classPrivateFieldLooseBase3(this, _informAndEmit)[_informAndEmit](restrictionErrors);
    const nonRestrictionErrors = errors.filter((error) => !error.isRestriction);
    if (nonRestrictionErrors.length > 0) {
      let message = "Multiple errors occurred while adding files:\n";
      nonRestrictionErrors.forEach((subError) => {
        message += `
 * ${subError.message}`;
      });
      this.info({
        message: this.i18n("addBulkFilesFailed", {
          smart_count: nonRestrictionErrors.length
        }),
        details: message
      }, "error", this.opts.infoTimeout);
      if (typeof AggregateError === "function") {
        throw new AggregateError(nonRestrictionErrors, message);
      } else {
        const err = new Error(message);
        err.errors = nonRestrictionErrors;
        throw err;
      }
    }
    this.setState({
      files: nextFilesState
    });
    validFilesToAdd.forEach((file) => {
      this.emit("file-added", file);
    });
    this.emit("files-added", validFilesToAdd);
    if (validFilesToAdd.length > 5) {
      this.log(`Added batch of ${validFilesToAdd.length} files`);
    } else {
      Object.values(validFilesToAdd).forEach((file) => {
        this.log(`Added file: ${file.name}
 id: ${file.id}
 type: ${file.type}`);
      });
    }
    if (validFilesToAdd.length > 0) {
      _classPrivateFieldLooseBase3(this, _startIfAutoProceed)[_startIfAutoProceed]();
    }
  }
  removeFiles(fileIDs, reason) {
    const {
      files,
      currentUploads
    } = this.getState();
    const updatedFiles = {
      ...files
    };
    const updatedUploads = {
      ...currentUploads
    };
    const removedFiles = /* @__PURE__ */ Object.create(null);
    fileIDs.forEach((fileID) => {
      if (files[fileID]) {
        removedFiles[fileID] = files[fileID];
        delete updatedFiles[fileID];
      }
    });
    function fileIsNotRemoved(uploadFileID) {
      return removedFiles[uploadFileID] === void 0;
    }
    Object.keys(updatedUploads).forEach((uploadID) => {
      const newFileIDs = currentUploads[uploadID].fileIDs.filter(fileIsNotRemoved);
      if (newFileIDs.length === 0) {
        delete updatedUploads[uploadID];
        return;
      }
      const {
        capabilities
      } = this.getState();
      if (newFileIDs.length !== currentUploads[uploadID].fileIDs.length && !capabilities.individualCancellation) {
        throw new Error("The installed uploader plugin does not allow removing files during an upload.");
      }
      updatedUploads[uploadID] = {
        ...currentUploads[uploadID],
        fileIDs: newFileIDs
      };
    });
    const stateUpdate = {
      currentUploads: updatedUploads,
      files: updatedFiles
    };
    if (Object.keys(updatedFiles).length === 0) {
      stateUpdate.allowNewUpload = true;
      stateUpdate.error = null;
      stateUpdate.recoveredState = null;
    }
    this.setState(stateUpdate);
    this.calculateTotalProgress();
    const removedFileIDs = Object.keys(removedFiles);
    removedFileIDs.forEach((fileID) => {
      this.emit("file-removed", removedFiles[fileID], reason);
    });
    if (removedFileIDs.length > 5) {
      this.log(`Removed ${removedFileIDs.length} files`);
    } else {
      this.log(`Removed files: ${removedFileIDs.join(", ")}`);
    }
  }
  removeFile(fileID, reason) {
    this.removeFiles([fileID], reason);
  }
  pauseResume(fileID) {
    if (!this.getState().capabilities.resumableUploads || this.getFile(fileID).progress.uploadComplete) {
      return void 0;
    }
    const wasPaused = this.getFile(fileID).isPaused || false;
    const isPaused = !wasPaused;
    this.setFileState(fileID, {
      isPaused
    });
    this.emit("upload-pause", fileID, isPaused);
    return isPaused;
  }
  pauseAll() {
    const updatedFiles = {
      ...this.getState().files
    };
    const inProgressUpdatedFiles = Object.keys(updatedFiles).filter((file) => {
      return !updatedFiles[file].progress.uploadComplete && updatedFiles[file].progress.uploadStarted;
    });
    inProgressUpdatedFiles.forEach((file) => {
      const updatedFile = {
        ...updatedFiles[file],
        isPaused: true
      };
      updatedFiles[file] = updatedFile;
    });
    this.setState({
      files: updatedFiles
    });
    this.emit("pause-all");
  }
  resumeAll() {
    const updatedFiles = {
      ...this.getState().files
    };
    const inProgressUpdatedFiles = Object.keys(updatedFiles).filter((file) => {
      return !updatedFiles[file].progress.uploadComplete && updatedFiles[file].progress.uploadStarted;
    });
    inProgressUpdatedFiles.forEach((file) => {
      const updatedFile = {
        ...updatedFiles[file],
        isPaused: false,
        error: null
      };
      updatedFiles[file] = updatedFile;
    });
    this.setState({
      files: updatedFiles
    });
    this.emit("resume-all");
  }
  retryAll() {
    const updatedFiles = {
      ...this.getState().files
    };
    const filesToRetry = Object.keys(updatedFiles).filter((file) => {
      return updatedFiles[file].error;
    });
    filesToRetry.forEach((file) => {
      const updatedFile = {
        ...updatedFiles[file],
        isPaused: false,
        error: null
      };
      updatedFiles[file] = updatedFile;
    });
    this.setState({
      files: updatedFiles,
      error: null
    });
    this.emit("retry-all", filesToRetry);
    if (filesToRetry.length === 0) {
      return Promise.resolve({
        successful: [],
        failed: []
      });
    }
    const uploadID = _classPrivateFieldLooseBase3(this, _createUpload)[_createUpload](filesToRetry, {
      forceAllowNewUpload: true
      // create new upload even if allowNewUpload: false
    });
    return _classPrivateFieldLooseBase3(this, _runUpload)[_runUpload](uploadID);
  }
  cancelAll(_temp) {
    let {
      reason = "user"
    } = _temp === void 0 ? {} : _temp;
    this.emit("cancel-all", {
      reason
    });
    if (reason === "user") {
      const {
        files
      } = this.getState();
      const fileIDs = Object.keys(files);
      if (fileIDs.length) {
        this.removeFiles(fileIDs, "cancel-all");
      }
      this.setState(defaultUploadState);
    }
  }
  retryUpload(fileID) {
    this.setFileState(fileID, {
      error: null,
      isPaused: false
    });
    this.emit("upload-retry", fileID);
    const uploadID = _classPrivateFieldLooseBase3(this, _createUpload)[_createUpload]([fileID], {
      forceAllowNewUpload: true
      // create new upload even if allowNewUpload: false
    });
    return _classPrivateFieldLooseBase3(this, _runUpload)[_runUpload](uploadID);
  }
  logout() {
    this.iteratePlugins((plugin) => {
      var _provider;
      ;
      (_provider = plugin.provider) == null || _provider.logout == null || _provider.logout();
    });
  }
  calculateTotalProgress() {
    const files = this.getFiles();
    const inProgress = files.filter((file) => {
      return file.progress.uploadStarted || file.progress.preprocess || file.progress.postprocess;
    });
    if (inProgress.length === 0) {
      this.emit("progress", 0);
      this.setState({
        totalProgress: 0
      });
      return;
    }
    const sizedFiles = inProgress.filter((file) => file.progress.bytesTotal != null);
    const unsizedFiles = inProgress.filter((file) => file.progress.bytesTotal == null);
    if (sizedFiles.length === 0) {
      const progressMax = inProgress.length * 100;
      const currentProgress = unsizedFiles.reduce((acc, file) => {
        return acc + file.progress.percentage;
      }, 0);
      const totalProgress2 = Math.round(currentProgress / progressMax * 100);
      this.setState({
        totalProgress: totalProgress2
      });
      return;
    }
    let totalSize = sizedFiles.reduce((acc, file) => {
      var _file$progress$bytesT;
      return acc + ((_file$progress$bytesT = file.progress.bytesTotal) != null ? _file$progress$bytesT : 0);
    }, 0);
    const averageSize = totalSize / sizedFiles.length;
    totalSize += averageSize * unsizedFiles.length;
    let uploadedSize = 0;
    sizedFiles.forEach((file) => {
      uploadedSize += file.progress.bytesUploaded;
    });
    unsizedFiles.forEach((file) => {
      uploadedSize += averageSize * (file.progress.percentage || 0) / 100;
    });
    let totalProgress = totalSize === 0 ? 0 : Math.round(uploadedSize / totalSize * 100);
    if (totalProgress > 100) {
      totalProgress = 100;
    }
    this.setState({
      totalProgress
    });
    this.emit("progress", totalProgress);
  }
  updateOnlineStatus() {
    var _window$navigator$onL;
    const online = (_window$navigator$onL = window.navigator.onLine) != null ? _window$navigator$onL : true;
    if (!online) {
      this.emit("is-offline");
      this.info(this.i18n("noInternetConnection"), "error", 0);
      this.wasOffline = true;
    } else {
      this.emit("is-online");
      if (this.wasOffline) {
        this.emit("back-online");
        this.info(this.i18n("connectedToInternet"), "success", 3e3);
        this.wasOffline = false;
      }
    }
  }
  getID() {
    return this.opts.id;
  }
  /**
   * Registers a plugin with Core.
   */
  use(Plugin, opts) {
    if (typeof Plugin !== "function") {
      const msg = `Expected a plugin class, but got ${Plugin === null ? "null" : typeof Plugin}. Please verify that the plugin was imported and spelled correctly.`;
      throw new TypeError(msg);
    }
    const plugin = new Plugin(this, opts);
    const pluginId = plugin.id;
    if (!pluginId) {
      throw new Error("Your plugin must have an id");
    }
    if (!plugin.type) {
      throw new Error("Your plugin must have a type");
    }
    const existsPluginAlready = this.getPlugin(pluginId);
    if (existsPluginAlready) {
      const msg = `Already found a plugin named '${existsPluginAlready.id}'. Tried to use: '${pluginId}'.
Uppy plugins must have unique \`id\` options. See https://uppy.io/docs/plugins/#id.`;
      throw new Error(msg);
    }
    if (Plugin.VERSION) {
      this.log(`Using ${pluginId} v${Plugin.VERSION}`);
    }
    if (plugin.type in _classPrivateFieldLooseBase3(this, _plugins)[_plugins]) {
      _classPrivateFieldLooseBase3(this, _plugins)[_plugins][plugin.type].push(plugin);
    } else {
      _classPrivateFieldLooseBase3(this, _plugins)[_plugins][plugin.type] = [plugin];
    }
    plugin.install();
    this.emit("plugin-added", plugin);
    return this;
  }
  /**
   * Find one Plugin by name.
   */
  getPlugin(id20) {
    for (const plugins of Object.values(_classPrivateFieldLooseBase3(this, _plugins)[_plugins])) {
      const foundPlugin = plugins.find((plugin) => plugin.id === id20);
      if (foundPlugin != null) return foundPlugin;
    }
    return void 0;
  }
  [_Symbol$for](type) {
    return _classPrivateFieldLooseBase3(this, _plugins)[_plugins][type];
  }
  /**
   * Iterate through all `use`d plugins.
   *
   */
  iteratePlugins(method) {
    Object.values(_classPrivateFieldLooseBase3(this, _plugins)[_plugins]).flat(1).forEach(method);
  }
  /**
   * Uninstall and remove a plugin.
   *
   * @param {object} instance The plugin instance to remove.
   */
  removePlugin(instance) {
    this.log(`Removing plugin ${instance.id}`);
    this.emit("plugin-remove", instance);
    if (instance.uninstall) {
      instance.uninstall();
    }
    const list = _classPrivateFieldLooseBase3(this, _plugins)[_plugins][instance.type];
    const index = list.findIndex((item) => item.id === instance.id);
    if (index !== -1) {
      list.splice(index, 1);
    }
    const state = this.getState();
    const updatedState = {
      plugins: {
        ...state.plugins,
        [instance.id]: void 0
      }
    };
    this.setState(updatedState);
  }
  /**
   * Uninstall all plugins and close down this Uppy instance.
   */
  // @todo next major: rename to `destroy`.
  // Cancel local uploads, cancel remote uploads, DON'T cancel assemblies
  // document that if you do want to cancel assemblies, you need to call smth manually.
  // Potentially remove reason, as it’s confusing, just come up with a default behaviour.
  close(_temp2) {
    let {
      reason
    } = _temp2 === void 0 ? {} : _temp2;
    this.log(`Closing Uppy instance ${this.opts.id}: removing all files and uninstalling plugins`);
    this.cancelAll({
      reason
    });
    _classPrivateFieldLooseBase3(this, _storeUnsubscribe)[_storeUnsubscribe]();
    this.iteratePlugins((plugin) => {
      this.removePlugin(plugin);
    });
    if (typeof window !== "undefined" && window.removeEventListener) {
      window.removeEventListener("online", _classPrivateFieldLooseBase3(this, _updateOnlineStatus)[_updateOnlineStatus]);
      window.removeEventListener("offline", _classPrivateFieldLooseBase3(this, _updateOnlineStatus)[_updateOnlineStatus]);
    }
  }
  hideInfo() {
    const {
      info
    } = this.getState();
    this.setState({
      info: info.slice(1)
    });
    this.emit("info-hidden");
  }
  /**
   * Set info message in `state.info`, so that UI plugins like `Informer`
   * can display the message.
   */
  info(message, type, duration2) {
    if (type === void 0) {
      type = "info";
    }
    if (duration2 === void 0) {
      duration2 = 3e3;
    }
    const isComplexMessage = typeof message === "object";
    this.setState({
      info: [...this.getState().info, {
        type,
        message: isComplexMessage ? message.message : message,
        details: isComplexMessage ? message.details : null
      }]
    });
    setTimeout(() => this.hideInfo(), duration2);
    this.emit("info-visible");
  }
  /**
   * Passes messages to a function, provided in `opts.logger`.
   * If `opts.logger: Uppy.debugLogger` or `opts.debug: true`, logs to the browser console.
   */
  log(message, type) {
    const {
      logger
    } = this.opts;
    switch (type) {
      case "error":
        logger.error(message);
        break;
      case "warning":
        logger.warn(message);
        break;
      default:
        logger.debug(message);
        break;
    }
  }
  registerRequestClient(id20, client) {
    _classPrivateFieldLooseBase3(this, _requestClientById)[_requestClientById].set(id20, client);
  }
  /** @protected */
  getRequestClientForFile(file) {
    if (!file.remote) throw new Error(`Tried to get RequestClient for a non-remote file ${file.id}`);
    const requestClient = _classPrivateFieldLooseBase3(this, _requestClientById)[_requestClientById].get(file.remote.requestClientId);
    if (requestClient == null) throw new Error(`requestClientId "${file.remote.requestClientId}" not registered for file "${file.id}"`);
    return requestClient;
  }
  /**
   * Restore an upload by its ID.
   */
  restore(uploadID) {
    this.log(`Core: attempting to restore upload "${uploadID}"`);
    if (!this.getState().currentUploads[uploadID]) {
      _classPrivateFieldLooseBase3(this, _removeUpload)[_removeUpload](uploadID);
      return Promise.reject(new Error("Nonexistent upload"));
    }
    return _classPrivateFieldLooseBase3(this, _runUpload)[_runUpload](uploadID);
  }
  [_Symbol$for2]() {
    return _classPrivateFieldLooseBase3(this, _createUpload)[_createUpload](...arguments);
  }
  /**
   * Add data to an upload's result object.
   */
  addResultData(uploadID, data) {
    if (!_classPrivateFieldLooseBase3(this, _getUpload)[_getUpload](uploadID)) {
      this.log(`Not setting result for an upload that has been removed: ${uploadID}`);
      return;
    }
    const {
      currentUploads
    } = this.getState();
    const currentUpload = {
      ...currentUploads[uploadID],
      result: {
        ...currentUploads[uploadID].result,
        ...data
      }
    };
    this.setState({
      currentUploads: {
        ...currentUploads,
        [uploadID]: currentUpload
      }
    });
  }
  /**
   * Start an upload for all the files that are not currently being uploaded.
   */
  upload() {
    var _classPrivateFieldLoo;
    if (!((_classPrivateFieldLoo = _classPrivateFieldLooseBase3(this, _plugins)[_plugins]["uploader"]) != null && _classPrivateFieldLoo.length)) {
      this.log("No uploader type plugins are used", "warning");
    }
    let {
      files
    } = this.getState();
    const onBeforeUploadResult = this.opts.onBeforeUpload(files);
    if (onBeforeUploadResult === false) {
      return Promise.reject(new Error("Not starting the upload because onBeforeUpload returned false"));
    }
    if (onBeforeUploadResult && typeof onBeforeUploadResult === "object") {
      files = onBeforeUploadResult;
      this.setState({
        files
      });
    }
    return Promise.resolve().then(() => _classPrivateFieldLooseBase3(this, _restricter)[_restricter].validateMinNumberOfFiles(files)).catch((err) => {
      _classPrivateFieldLooseBase3(this, _informAndEmit)[_informAndEmit]([err]);
      throw err;
    }).then(() => {
      if (!_classPrivateFieldLooseBase3(this, _checkRequiredMetaFields)[_checkRequiredMetaFields](files)) {
        throw new RestrictionError(this.i18n("missingRequiredMetaField"));
      }
    }).catch((err) => {
      throw err;
    }).then(() => {
      const {
        currentUploads
      } = this.getState();
      const currentlyUploadingFiles = Object.values(currentUploads).flatMap((curr) => curr.fileIDs);
      const waitingFileIDs = [];
      Object.keys(files).forEach((fileID) => {
        const file = this.getFile(fileID);
        if (!file.progress.uploadStarted && currentlyUploadingFiles.indexOf(fileID) === -1) {
          waitingFileIDs.push(file.id);
        }
      });
      const uploadID = _classPrivateFieldLooseBase3(this, _createUpload)[_createUpload](waitingFileIDs);
      return _classPrivateFieldLooseBase3(this, _runUpload)[_runUpload](uploadID);
    }).catch((err) => {
      this.emit("error", err);
      this.log(err, "error");
      throw err;
    });
  }
};
function _informAndEmit2(errors) {
  for (const error of errors) {
    if (error.isRestriction) {
      this.emit("restriction-failed", error.file, error);
    } else {
      this.emit("error", error, error.file);
    }
    this.log(error, "warning");
  }
  const userFacingErrors = errors.filter((error) => error.isUserFacing);
  const maxNumToShow = 4;
  const firstErrors = userFacingErrors.slice(0, maxNumToShow);
  const additionalErrors = userFacingErrors.slice(maxNumToShow);
  firstErrors.forEach((_ref2) => {
    let {
      message,
      details = ""
    } = _ref2;
    this.info({
      message,
      details
    }, "error", this.opts.infoTimeout);
  });
  if (additionalErrors.length > 0) {
    this.info({
      message: this.i18n("additionalRestrictionsFailed", {
        count: additionalErrors.length
      })
    });
  }
}
function _checkRequiredMetaFieldsOnFile2(file) {
  const {
    missingFields,
    error
  } = _classPrivateFieldLooseBase3(this, _restricter)[_restricter].getMissingRequiredMetaFields(file);
  if (missingFields.length > 0) {
    this.setFileState(file.id, {
      missingRequiredMetaFields: missingFields
    });
    this.log(error.message);
    this.emit("restriction-failed", file, error);
    return false;
  }
  return true;
}
function _checkRequiredMetaFields2(files) {
  let success = true;
  for (const file of Object.values(files)) {
    if (!_classPrivateFieldLooseBase3(this, _checkRequiredMetaFieldsOnFile)[_checkRequiredMetaFieldsOnFile](file)) {
      success = false;
    }
  }
  return success;
}
function _assertNewUploadAllowed2(file) {
  const {
    allowNewUpload
  } = this.getState();
  if (allowNewUpload === false) {
    const error = new RestrictionError(this.i18n("noMoreFilesAllowed"), {
      file
    });
    _classPrivateFieldLooseBase3(this, _informAndEmit)[_informAndEmit]([error]);
    throw error;
  }
}
function _transformFile2(fileDescriptorOrFile) {
  const file = fileDescriptorOrFile instanceof File ? {
    name: fileDescriptorOrFile.name,
    type: fileDescriptorOrFile.type,
    size: fileDescriptorOrFile.size,
    data: fileDescriptorOrFile
  } : fileDescriptorOrFile;
  const fileType = getFileType(file);
  const fileName = getFileName(fileType, file);
  const fileExtension = getFileNameAndExtension(fileName).extension;
  const id20 = getSafeFileId(file, this.getID());
  const meta = file.meta || {};
  meta.name = fileName;
  meta.type = fileType;
  const size = Number.isFinite(file.data.size) ? file.data.size : null;
  return {
    source: file.source || "",
    id: id20,
    name: fileName,
    extension: fileExtension || "",
    meta: {
      ...this.getState().meta,
      ...meta
    },
    type: fileType,
    data: file.data,
    progress: {
      percentage: 0,
      bytesUploaded: 0,
      bytesTotal: size,
      uploadComplete: false,
      uploadStarted: null
    },
    size,
    isGhost: false,
    isRemote: file.isRemote || false,
    // TODO: this should not be a string
    // @ts-expect-error wrong
    remote: file.remote || "",
    preview: file.preview
  };
}
function _startIfAutoProceed2() {
  if (this.opts.autoProceed && !this.scheduledAutoProceed) {
    this.scheduledAutoProceed = setTimeout(() => {
      this.scheduledAutoProceed = null;
      this.upload().catch((err) => {
        if (!err.isRestriction) {
          this.log(err.stack || err.message || err);
        }
      });
    }, 4);
  }
}
function _checkAndUpdateFileState2(filesToAdd) {
  const {
    files: existingFiles
  } = this.getState();
  const nextFilesState = {
    ...existingFiles
  };
  const validFilesToAdd = [];
  const errors = [];
  for (const fileToAdd of filesToAdd) {
    try {
      var _existingFiles$newFil;
      let newFile = _classPrivateFieldLooseBase3(this, _transformFile)[_transformFile](fileToAdd);
      const isGhost = (_existingFiles$newFil = existingFiles[newFile.id]) == null ? void 0 : _existingFiles$newFil.isGhost;
      if (isGhost) {
        const existingFileState = existingFiles[newFile.id];
        newFile = {
          ...existingFileState,
          isGhost: false,
          data: fileToAdd.data
        };
        this.log(`Replaced the blob in the restored ghost file: ${newFile.name}, ${newFile.id}`);
      }
      const onBeforeFileAddedResult = this.opts.onBeforeFileAdded(newFile, nextFilesState);
      if (!onBeforeFileAddedResult && this.checkIfFileAlreadyExists(newFile.id)) {
        throw new RestrictionError(this.i18n("noDuplicates", {
          fileName: newFile.name
        }), {
          file: fileToAdd
        });
      }
      if (onBeforeFileAddedResult === false && !isGhost) {
        throw new RestrictionError("Cannot add the file because onBeforeFileAdded returned false.", {
          isUserFacing: false,
          file: fileToAdd
        });
      } else if (typeof onBeforeFileAddedResult === "object" && onBeforeFileAddedResult !== null) {
        newFile = onBeforeFileAddedResult;
      }
      _classPrivateFieldLooseBase3(this, _restricter)[_restricter].validateSingleFile(newFile);
      nextFilesState[newFile.id] = newFile;
      validFilesToAdd.push(newFile);
    } catch (err) {
      errors.push(err);
    }
  }
  try {
    _classPrivateFieldLooseBase3(this, _restricter)[_restricter].validateAggregateRestrictions(Object.values(existingFiles), validFilesToAdd);
  } catch (err) {
    errors.push(err);
    return {
      nextFilesState: existingFiles,
      validFilesToAdd: [],
      errors
    };
  }
  return {
    nextFilesState,
    validFilesToAdd,
    errors
  };
}
function _addListeners2() {
  const errorHandler = (error, file, response) => {
    let errorMsg = error.message || "Unknown error";
    if (error.details) {
      errorMsg += ` ${error.details}`;
    }
    this.setState({
      error: errorMsg
    });
    if (file != null && file.id in this.getState().files) {
      this.setFileState(file.id, {
        error: errorMsg,
        response
      });
    }
  };
  this.on("error", errorHandler);
  this.on("upload-error", (file, error, response) => {
    errorHandler(error, file, response);
    if (typeof error === "object" && error.message) {
      var _file$name;
      this.log(error.message, "error");
      const newError = new Error(this.i18n("failedToUpload", {
        file: (_file$name = file == null ? void 0 : file.name) != null ? _file$name : ""
      }));
      newError.isUserFacing = true;
      newError.details = error.message;
      if (error.details) {
        newError.details += ` ${error.details}`;
      }
      _classPrivateFieldLooseBase3(this, _informAndEmit)[_informAndEmit]([newError]);
    } else {
      _classPrivateFieldLooseBase3(this, _informAndEmit)[_informAndEmit]([error]);
    }
  });
  let uploadStalledWarningRecentlyEmitted = null;
  this.on("upload-stalled", (error, files) => {
    const {
      message
    } = error;
    const details = files.map((file) => file.meta.name).join(", ");
    if (!uploadStalledWarningRecentlyEmitted) {
      this.info({
        message,
        details
      }, "warning", this.opts.infoTimeout);
      uploadStalledWarningRecentlyEmitted = setTimeout(() => {
        uploadStalledWarningRecentlyEmitted = null;
      }, this.opts.infoTimeout);
    }
    this.log(`${message} ${details}`.trim(), "warning");
  });
  this.on("upload", () => {
    this.setState({
      error: null
    });
  });
  const onUploadStarted = (files) => {
    const filesFiltered = files.filter((file) => {
      const exists = file != null && this.getFile(file.id);
      if (!exists) this.log(`Not setting progress for a file that has been removed: ${file == null ? void 0 : file.id}`);
      return exists;
    });
    const filesState = Object.fromEntries(filesFiltered.map((file) => [file.id, {
      progress: {
        uploadStarted: Date.now(),
        uploadComplete: false,
        percentage: 0,
        bytesUploaded: 0,
        bytesTotal: file.size
      }
    }]));
    this.patchFilesState(filesState);
  };
  this.on("upload-start", (files) => {
    files.forEach((file) => {
      this.emit("upload-started", file);
    });
    onUploadStarted(files);
  });
  this.on("upload-progress", this.calculateProgress);
  this.on("upload-success", (file, uploadResp) => {
    if (file == null || !this.getFile(file.id)) {
      this.log(`Not setting progress for a file that has been removed: ${file == null ? void 0 : file.id}`);
      return;
    }
    const currentProgress = this.getFile(file.id).progress;
    this.setFileState(file.id, {
      progress: {
        ...currentProgress,
        postprocess: _classPrivateFieldLooseBase3(this, _postProcessors)[_postProcessors].size > 0 ? {
          mode: "indeterminate"
        } : void 0,
        uploadComplete: true,
        percentage: 100,
        bytesUploaded: currentProgress.bytesTotal
      },
      response: uploadResp,
      uploadURL: uploadResp.uploadURL,
      isPaused: false
    });
    if (file.size == null) {
      this.setFileState(file.id, {
        size: uploadResp.bytesUploaded || currentProgress.bytesTotal
      });
    }
    this.calculateTotalProgress();
  });
  this.on("preprocess-progress", (file, progress) => {
    if (file == null || !this.getFile(file.id)) {
      this.log(`Not setting progress for a file that has been removed: ${file == null ? void 0 : file.id}`);
      return;
    }
    this.setFileState(file.id, {
      progress: {
        ...this.getFile(file.id).progress,
        preprocess: progress
      }
    });
  });
  this.on("preprocess-complete", (file) => {
    if (file == null || !this.getFile(file.id)) {
      this.log(`Not setting progress for a file that has been removed: ${file == null ? void 0 : file.id}`);
      return;
    }
    const files = {
      ...this.getState().files
    };
    files[file.id] = {
      ...files[file.id],
      progress: {
        ...files[file.id].progress
      }
    };
    delete files[file.id].progress.preprocess;
    this.setState({
      files
    });
  });
  this.on("postprocess-progress", (file, progress) => {
    if (file == null || !this.getFile(file.id)) {
      this.log(`Not setting progress for a file that has been removed: ${file == null ? void 0 : file.id}`);
      return;
    }
    this.setFileState(file.id, {
      progress: {
        ...this.getState().files[file.id].progress,
        postprocess: progress
      }
    });
  });
  this.on("postprocess-complete", (file) => {
    if (file == null || !this.getFile(file.id)) {
      this.log(`Not setting progress for a file that has been removed: ${file == null ? void 0 : file.id}`);
      return;
    }
    const files = {
      ...this.getState().files
    };
    files[file.id] = {
      ...files[file.id],
      progress: {
        ...files[file.id].progress
      }
    };
    delete files[file.id].progress.postprocess;
    this.setState({
      files
    });
  });
  this.on("restored", () => {
    this.calculateTotalProgress();
  });
  this.on("dashboard:file-edit-complete", (file) => {
    if (file) {
      _classPrivateFieldLooseBase3(this, _checkRequiredMetaFieldsOnFile)[_checkRequiredMetaFieldsOnFile](file);
    }
  });
  if (typeof window !== "undefined" && window.addEventListener) {
    window.addEventListener("online", _classPrivateFieldLooseBase3(this, _updateOnlineStatus)[_updateOnlineStatus]);
    window.addEventListener("offline", _classPrivateFieldLooseBase3(this, _updateOnlineStatus)[_updateOnlineStatus]);
    setTimeout(_classPrivateFieldLooseBase3(this, _updateOnlineStatus)[_updateOnlineStatus], 3e3);
  }
}
function _createUpload2(fileIDs, opts) {
  if (opts === void 0) {
    opts = {};
  }
  const {
    forceAllowNewUpload = false
  } = opts;
  const {
    allowNewUpload,
    currentUploads
  } = this.getState();
  if (!allowNewUpload && !forceAllowNewUpload) {
    throw new Error("Cannot create a new upload: already uploading.");
  }
  const uploadID = nanoid();
  this.emit("upload", {
    id: uploadID,
    fileIDs
  });
  this.setState({
    allowNewUpload: this.opts.allowMultipleUploadBatches !== false && this.opts.allowMultipleUploads !== false,
    currentUploads: {
      ...currentUploads,
      [uploadID]: {
        fileIDs,
        step: 0,
        result: {}
      }
    }
  });
  return uploadID;
}
function _getUpload2(uploadID) {
  const {
    currentUploads
  } = this.getState();
  return currentUploads[uploadID];
}
function _removeUpload2(uploadID) {
  const currentUploads = {
    ...this.getState().currentUploads
  };
  delete currentUploads[uploadID];
  this.setState({
    currentUploads
  });
}
async function _runUpload2(uploadID) {
  const getCurrentUpload = () => {
    const {
      currentUploads
    } = this.getState();
    return currentUploads[uploadID];
  };
  let currentUpload = getCurrentUpload();
  const steps = [..._classPrivateFieldLooseBase3(this, _preProcessors)[_preProcessors], ..._classPrivateFieldLooseBase3(this, _uploaders)[_uploaders], ..._classPrivateFieldLooseBase3(this, _postProcessors)[_postProcessors]];
  try {
    for (let step = currentUpload.step || 0; step < steps.length; step++) {
      if (!currentUpload) {
        break;
      }
      const fn = steps[step];
      this.setState({
        currentUploads: {
          ...this.getState().currentUploads,
          [uploadID]: {
            ...currentUpload,
            step
          }
        }
      });
      const {
        fileIDs
      } = currentUpload;
      await fn(fileIDs, uploadID);
      currentUpload = getCurrentUpload();
    }
  } catch (err) {
    _classPrivateFieldLooseBase3(this, _removeUpload)[_removeUpload](uploadID);
    throw err;
  }
  if (currentUpload) {
    currentUpload.fileIDs.forEach((fileID) => {
      const file = this.getFile(fileID);
      if (file && file.progress.postprocess) {
        this.emit("postprocess-complete", file);
      }
    });
    const files = currentUpload.fileIDs.map((fileID) => this.getFile(fileID));
    const successful = files.filter((file) => !file.error);
    const failed = files.filter((file) => file.error);
    this.addResultData(uploadID, {
      successful,
      failed,
      uploadID
    });
    currentUpload = getCurrentUpload();
  }
  let result;
  if (currentUpload) {
    result = currentUpload.result;
    this.emit("complete", result);
    _classPrivateFieldLooseBase3(this, _removeUpload)[_removeUpload](uploadID);
  }
  if (result == null) {
    this.log(`Not setting result for an upload that has been removed: ${uploadID}`);
  }
  return result;
}
Uppy.VERSION = packageJson2.version;
var Uppy_default = Uppy;

// node_modules/preact/dist/preact.mjs
var n;
var l;
var u;
var t;
var i;
var r;
var o;
var e;
var f;
var c;
var s;
var a;
var h;
var p = {};
var v = [];
var y = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
var w = Array.isArray;
function d(n3, l4) {
  for (var u4 in l4) n3[u4] = l4[u4];
  return n3;
}
function g(n3) {
  n3 && n3.parentNode && n3.parentNode.removeChild(n3);
}
function _(l4, u4, t4) {
  var i4, r4, o4, e4 = {};
  for (o4 in u4) "key" == o4 ? i4 = u4[o4] : "ref" == o4 ? r4 = u4[o4] : e4[o4] = u4[o4];
  if (arguments.length > 2 && (e4.children = arguments.length > 3 ? n.call(arguments, 2) : t4), "function" == typeof l4 && null != l4.defaultProps) for (o4 in l4.defaultProps) void 0 === e4[o4] && (e4[o4] = l4.defaultProps[o4]);
  return m(l4, e4, i4, r4, null);
}
function m(n3, t4, i4, r4, o4) {
  var e4 = { type: n3, props: t4, key: i4, ref: r4, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: null == o4 ? ++u : o4, __i: -1, __u: 0 };
  return null == o4 && null != l.vnode && l.vnode(e4), e4;
}
function b() {
  return { current: null };
}
function k(n3) {
  return n3.children;
}
function x(n3, l4) {
  this.props = n3, this.context = l4;
}
function S(n3, l4) {
  if (null == l4) return n3.__ ? S(n3.__, n3.__i + 1) : null;
  for (var u4; l4 < n3.__k.length; l4++) if (null != (u4 = n3.__k[l4]) && null != u4.__e) return u4.__e;
  return "function" == typeof n3.type ? S(n3) : null;
}
function C(n3) {
  var l4, u4;
  if (null != (n3 = n3.__) && null != n3.__c) {
    for (n3.__e = n3.__c.base = null, l4 = 0; l4 < n3.__k.length; l4++) if (null != (u4 = n3.__k[l4]) && null != u4.__e) {
      n3.__e = n3.__c.base = u4.__e;
      break;
    }
    return C(n3);
  }
}
function M(n3) {
  (!n3.__d && (n3.__d = true) && i.push(n3) && !$.__r++ || r != l.debounceRendering) && ((r = l.debounceRendering) || o)($);
}
function $() {
  for (var n3, u4, t4, r4, o4, f4, c4, s4 = 1; i.length; ) i.length > s4 && i.sort(e), n3 = i.shift(), s4 = i.length, n3.__d && (t4 = void 0, o4 = (r4 = (u4 = n3).__v).__e, f4 = [], c4 = [], u4.__P && ((t4 = d({}, r4)).__v = r4.__v + 1, l.vnode && l.vnode(t4), O(u4.__P, t4, r4, u4.__n, u4.__P.namespaceURI, 32 & r4.__u ? [o4] : null, f4, null == o4 ? S(r4) : o4, !!(32 & r4.__u), c4), t4.__v = r4.__v, t4.__.__k[t4.__i] = t4, z(f4, t4, c4), t4.__e != o4 && C(t4)));
  $.__r = 0;
}
function I(n3, l4, u4, t4, i4, r4, o4, e4, f4, c4, s4) {
  var a4, h4, y4, w4, d4, g3, _3 = t4 && t4.__k || v, m4 = l4.length;
  for (f4 = P(u4, l4, _3, f4, m4), a4 = 0; a4 < m4; a4++) null != (y4 = u4.__k[a4]) && (h4 = -1 == y4.__i ? p : _3[y4.__i] || p, y4.__i = a4, g3 = O(n3, y4, h4, i4, r4, o4, e4, f4, c4, s4), w4 = y4.__e, y4.ref && h4.ref != y4.ref && (h4.ref && q(h4.ref, null, y4), s4.push(y4.ref, y4.__c || w4, y4)), null == d4 && null != w4 && (d4 = w4), 4 & y4.__u || h4.__k === y4.__k ? f4 = A(y4, f4, n3) : "function" == typeof y4.type && void 0 !== g3 ? f4 = g3 : w4 && (f4 = w4.nextSibling), y4.__u &= -7);
  return u4.__e = d4, f4;
}
function P(n3, l4, u4, t4, i4) {
  var r4, o4, e4, f4, c4, s4 = u4.length, a4 = s4, h4 = 0;
  for (n3.__k = new Array(i4), r4 = 0; r4 < i4; r4++) null != (o4 = l4[r4]) && "boolean" != typeof o4 && "function" != typeof o4 ? (f4 = r4 + h4, (o4 = n3.__k[r4] = "string" == typeof o4 || "number" == typeof o4 || "bigint" == typeof o4 || o4.constructor == String ? m(null, o4, null, null, null) : w(o4) ? m(k, { children: o4 }, null, null, null) : null == o4.constructor && o4.__b > 0 ? m(o4.type, o4.props, o4.key, o4.ref ? o4.ref : null, o4.__v) : o4).__ = n3, o4.__b = n3.__b + 1, e4 = null, -1 != (c4 = o4.__i = L(o4, u4, f4, a4)) && (a4--, (e4 = u4[c4]) && (e4.__u |= 2)), null == e4 || null == e4.__v ? (-1 == c4 && (i4 > s4 ? h4-- : i4 < s4 && h4++), "function" != typeof o4.type && (o4.__u |= 4)) : c4 != f4 && (c4 == f4 - 1 ? h4-- : c4 == f4 + 1 ? h4++ : (c4 > f4 ? h4-- : h4++, o4.__u |= 4))) : n3.__k[r4] = null;
  if (a4) for (r4 = 0; r4 < s4; r4++) null != (e4 = u4[r4]) && 0 == (2 & e4.__u) && (e4.__e == t4 && (t4 = S(e4)), B(e4, e4));
  return t4;
}
function A(n3, l4, u4) {
  var t4, i4;
  if ("function" == typeof n3.type) {
    for (t4 = n3.__k, i4 = 0; t4 && i4 < t4.length; i4++) t4[i4] && (t4[i4].__ = n3, l4 = A(t4[i4], l4, u4));
    return l4;
  }
  n3.__e != l4 && (l4 && n3.type && !u4.contains(l4) && (l4 = S(n3)), u4.insertBefore(n3.__e, l4 || null), l4 = n3.__e);
  do {
    l4 = l4 && l4.nextSibling;
  } while (null != l4 && 8 == l4.nodeType);
  return l4;
}
function H(n3, l4) {
  return l4 = l4 || [], null == n3 || "boolean" == typeof n3 || (w(n3) ? n3.some(function(n4) {
    H(n4, l4);
  }) : l4.push(n3)), l4;
}
function L(n3, l4, u4, t4) {
  var i4, r4, o4 = n3.key, e4 = n3.type, f4 = l4[u4];
  if (null === f4 && null == n3.key || f4 && o4 == f4.key && e4 == f4.type && 0 == (2 & f4.__u)) return u4;
  if (t4 > (null != f4 && 0 == (2 & f4.__u) ? 1 : 0)) for (i4 = u4 - 1, r4 = u4 + 1; i4 >= 0 || r4 < l4.length; ) {
    if (i4 >= 0) {
      if ((f4 = l4[i4]) && 0 == (2 & f4.__u) && o4 == f4.key && e4 == f4.type) return i4;
      i4--;
    }
    if (r4 < l4.length) {
      if ((f4 = l4[r4]) && 0 == (2 & f4.__u) && o4 == f4.key && e4 == f4.type) return r4;
      r4++;
    }
  }
  return -1;
}
function T(n3, l4, u4) {
  "-" == l4[0] ? n3.setProperty(l4, null == u4 ? "" : u4) : n3[l4] = null == u4 ? "" : "number" != typeof u4 || y.test(l4) ? u4 : u4 + "px";
}
function j(n3, l4, u4, t4, i4) {
  var r4, o4;
  n: if ("style" == l4) if ("string" == typeof u4) n3.style.cssText = u4;
  else {
    if ("string" == typeof t4 && (n3.style.cssText = t4 = ""), t4) for (l4 in t4) u4 && l4 in u4 || T(n3.style, l4, "");
    if (u4) for (l4 in u4) t4 && u4[l4] == t4[l4] || T(n3.style, l4, u4[l4]);
  }
  else if ("o" == l4[0] && "n" == l4[1]) r4 = l4 != (l4 = l4.replace(f, "$1")), o4 = l4.toLowerCase(), l4 = o4 in n3 || "onFocusOut" == l4 || "onFocusIn" == l4 ? o4.slice(2) : l4.slice(2), n3.l || (n3.l = {}), n3.l[l4 + r4] = u4, u4 ? t4 ? u4.u = t4.u : (u4.u = c, n3.addEventListener(l4, r4 ? a : s, r4)) : n3.removeEventListener(l4, r4 ? a : s, r4);
  else {
    if ("http://www.w3.org/2000/svg" == i4) l4 = l4.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if ("width" != l4 && "height" != l4 && "href" != l4 && "list" != l4 && "form" != l4 && "tabIndex" != l4 && "download" != l4 && "rowSpan" != l4 && "colSpan" != l4 && "role" != l4 && "popover" != l4 && l4 in n3) try {
      n3[l4] = null == u4 ? "" : u4;
      break n;
    } catch (n4) {
    }
    "function" == typeof u4 || (null == u4 || false === u4 && "-" != l4[4] ? n3.removeAttribute(l4) : n3.setAttribute(l4, "popover" == l4 && 1 == u4 ? "" : u4));
  }
}
function F(n3) {
  return function(u4) {
    if (this.l) {
      var t4 = this.l[u4.type + n3];
      if (null == u4.t) u4.t = c++;
      else if (u4.t < t4.u) return;
      return t4(l.event ? l.event(u4) : u4);
    }
  };
}
function O(n3, u4, t4, i4, r4, o4, e4, f4, c4, s4) {
  var a4, h4, p4, v4, y4, _3, m4, b3, S3, C4, M3, $3, P3, A4, H3, L3, T4, j4 = u4.type;
  if (null != u4.constructor) return null;
  128 & t4.__u && (c4 = !!(32 & t4.__u), o4 = [f4 = u4.__e = t4.__e]), (a4 = l.__b) && a4(u4);
  n: if ("function" == typeof j4) try {
    if (b3 = u4.props, S3 = "prototype" in j4 && j4.prototype.render, C4 = (a4 = j4.contextType) && i4[a4.__c], M3 = a4 ? C4 ? C4.props.value : a4.__ : i4, t4.__c ? m4 = (h4 = u4.__c = t4.__c).__ = h4.__E : (S3 ? u4.__c = h4 = new j4(b3, M3) : (u4.__c = h4 = new x(b3, M3), h4.constructor = j4, h4.render = D), C4 && C4.sub(h4), h4.props = b3, h4.state || (h4.state = {}), h4.context = M3, h4.__n = i4, p4 = h4.__d = true, h4.__h = [], h4._sb = []), S3 && null == h4.__s && (h4.__s = h4.state), S3 && null != j4.getDerivedStateFromProps && (h4.__s == h4.state && (h4.__s = d({}, h4.__s)), d(h4.__s, j4.getDerivedStateFromProps(b3, h4.__s))), v4 = h4.props, y4 = h4.state, h4.__v = u4, p4) S3 && null == j4.getDerivedStateFromProps && null != h4.componentWillMount && h4.componentWillMount(), S3 && null != h4.componentDidMount && h4.__h.push(h4.componentDidMount);
    else {
      if (S3 && null == j4.getDerivedStateFromProps && b3 !== v4 && null != h4.componentWillReceiveProps && h4.componentWillReceiveProps(b3, M3), !h4.__e && null != h4.shouldComponentUpdate && false === h4.shouldComponentUpdate(b3, h4.__s, M3) || u4.__v == t4.__v) {
        for (u4.__v != t4.__v && (h4.props = b3, h4.state = h4.__s, h4.__d = false), u4.__e = t4.__e, u4.__k = t4.__k, u4.__k.some(function(n4) {
          n4 && (n4.__ = u4);
        }), $3 = 0; $3 < h4._sb.length; $3++) h4.__h.push(h4._sb[$3]);
        h4._sb = [], h4.__h.length && e4.push(h4);
        break n;
      }
      null != h4.componentWillUpdate && h4.componentWillUpdate(b3, h4.__s, M3), S3 && null != h4.componentDidUpdate && h4.__h.push(function() {
        h4.componentDidUpdate(v4, y4, _3);
      });
    }
    if (h4.context = M3, h4.props = b3, h4.__P = n3, h4.__e = false, P3 = l.__r, A4 = 0, S3) {
      for (h4.state = h4.__s, h4.__d = false, P3 && P3(u4), a4 = h4.render(h4.props, h4.state, h4.context), H3 = 0; H3 < h4._sb.length; H3++) h4.__h.push(h4._sb[H3]);
      h4._sb = [];
    } else do {
      h4.__d = false, P3 && P3(u4), a4 = h4.render(h4.props, h4.state, h4.context), h4.state = h4.__s;
    } while (h4.__d && ++A4 < 25);
    h4.state = h4.__s, null != h4.getChildContext && (i4 = d(d({}, i4), h4.getChildContext())), S3 && !p4 && null != h4.getSnapshotBeforeUpdate && (_3 = h4.getSnapshotBeforeUpdate(v4, y4)), L3 = a4, null != a4 && a4.type === k && null == a4.key && (L3 = N(a4.props.children)), f4 = I(n3, w(L3) ? L3 : [L3], u4, t4, i4, r4, o4, e4, f4, c4, s4), h4.base = u4.__e, u4.__u &= -161, h4.__h.length && e4.push(h4), m4 && (h4.__E = h4.__ = null);
  } catch (n4) {
    if (u4.__v = null, c4 || null != o4) if (n4.then) {
      for (u4.__u |= c4 ? 160 : 128; f4 && 8 == f4.nodeType && f4.nextSibling; ) f4 = f4.nextSibling;
      o4[o4.indexOf(f4)] = null, u4.__e = f4;
    } else for (T4 = o4.length; T4--; ) g(o4[T4]);
    else u4.__e = t4.__e, u4.__k = t4.__k;
    l.__e(n4, u4, t4);
  }
  else null == o4 && u4.__v == t4.__v ? (u4.__k = t4.__k, u4.__e = t4.__e) : f4 = u4.__e = V(t4.__e, u4, t4, i4, r4, o4, e4, c4, s4);
  return (a4 = l.diffed) && a4(u4), 128 & u4.__u ? void 0 : f4;
}
function z(n3, u4, t4) {
  for (var i4 = 0; i4 < t4.length; i4++) q(t4[i4], t4[++i4], t4[++i4]);
  l.__c && l.__c(u4, n3), n3.some(function(u5) {
    try {
      n3 = u5.__h, u5.__h = [], n3.some(function(n4) {
        n4.call(u5);
      });
    } catch (n4) {
      l.__e(n4, u5.__v);
    }
  });
}
function N(n3) {
  return "object" != typeof n3 || null == n3 || n3.__b && n3.__b > 0 ? n3 : w(n3) ? n3.map(N) : d({}, n3);
}
function V(u4, t4, i4, r4, o4, e4, f4, c4, s4) {
  var a4, h4, v4, y4, d4, _3, m4, b3 = i4.props, k4 = t4.props, x3 = t4.type;
  if ("svg" == x3 ? o4 = "http://www.w3.org/2000/svg" : "math" == x3 ? o4 = "http://www.w3.org/1998/Math/MathML" : o4 || (o4 = "http://www.w3.org/1999/xhtml"), null != e4) {
    for (a4 = 0; a4 < e4.length; a4++) if ((d4 = e4[a4]) && "setAttribute" in d4 == !!x3 && (x3 ? d4.localName == x3 : 3 == d4.nodeType)) {
      u4 = d4, e4[a4] = null;
      break;
    }
  }
  if (null == u4) {
    if (null == x3) return document.createTextNode(k4);
    u4 = document.createElementNS(o4, x3, k4.is && k4), c4 && (l.__m && l.__m(t4, e4), c4 = false), e4 = null;
  }
  if (null == x3) b3 === k4 || c4 && u4.data == k4 || (u4.data = k4);
  else {
    if (e4 = e4 && n.call(u4.childNodes), b3 = i4.props || p, !c4 && null != e4) for (b3 = {}, a4 = 0; a4 < u4.attributes.length; a4++) b3[(d4 = u4.attributes[a4]).name] = d4.value;
    for (a4 in b3) if (d4 = b3[a4], "children" == a4) ;
    else if ("dangerouslySetInnerHTML" == a4) v4 = d4;
    else if (!(a4 in k4)) {
      if ("value" == a4 && "defaultValue" in k4 || "checked" == a4 && "defaultChecked" in k4) continue;
      j(u4, a4, null, d4, o4);
    }
    for (a4 in k4) d4 = k4[a4], "children" == a4 ? y4 = d4 : "dangerouslySetInnerHTML" == a4 ? h4 = d4 : "value" == a4 ? _3 = d4 : "checked" == a4 ? m4 = d4 : c4 && "function" != typeof d4 || b3[a4] === d4 || j(u4, a4, d4, b3[a4], o4);
    if (h4) c4 || v4 && (h4.__html == v4.__html || h4.__html == u4.innerHTML) || (u4.innerHTML = h4.__html), t4.__k = [];
    else if (v4 && (u4.innerHTML = ""), I("template" == t4.type ? u4.content : u4, w(y4) ? y4 : [y4], t4, i4, r4, "foreignObject" == x3 ? "http://www.w3.org/1999/xhtml" : o4, e4, f4, e4 ? e4[0] : i4.__k && S(i4, 0), c4, s4), null != e4) for (a4 = e4.length; a4--; ) g(e4[a4]);
    c4 || (a4 = "value", "progress" == x3 && null == _3 ? u4.removeAttribute("value") : null != _3 && (_3 !== u4[a4] || "progress" == x3 && !_3 || "option" == x3 && _3 != b3[a4]) && j(u4, a4, _3, b3[a4], o4), a4 = "checked", null != m4 && m4 != u4[a4] && j(u4, a4, m4, b3[a4], o4));
  }
  return u4;
}
function q(n3, u4, t4) {
  try {
    if ("function" == typeof n3) {
      var i4 = "function" == typeof n3.__u;
      i4 && n3.__u(), i4 && null == u4 || (n3.__u = n3(u4));
    } else n3.current = u4;
  } catch (n4) {
    l.__e(n4, t4);
  }
}
function B(n3, u4, t4) {
  var i4, r4;
  if (l.unmount && l.unmount(n3), (i4 = n3.ref) && (i4.current && i4.current != n3.__e || q(i4, null, u4)), null != (i4 = n3.__c)) {
    if (i4.componentWillUnmount) try {
      i4.componentWillUnmount();
    } catch (n4) {
      l.__e(n4, u4);
    }
    i4.base = i4.__P = null;
  }
  if (i4 = n3.__k) for (r4 = 0; r4 < i4.length; r4++) i4[r4] && B(i4[r4], u4, t4 || "function" != typeof n3.type);
  t4 || g(n3.__e), n3.__c = n3.__ = n3.__e = void 0;
}
function D(n3, l4, u4) {
  return this.constructor(n3, u4);
}
function E(u4, t4, i4) {
  var r4, o4, e4, f4;
  t4 == document && (t4 = document.documentElement), l.__ && l.__(u4, t4), o4 = (r4 = "function" == typeof i4) ? null : i4 && i4.__k || t4.__k, e4 = [], f4 = [], O(t4, u4 = (!r4 && i4 || t4).__k = _(k, null, [u4]), o4 || p, p, t4.namespaceURI, !r4 && i4 ? [i4] : o4 ? null : t4.firstChild ? n.call(t4.childNodes) : null, e4, !r4 && i4 ? i4 : o4 ? o4.__e : t4.firstChild, r4, f4), z(e4, u4, f4);
}
function J(l4, u4, t4) {
  var i4, r4, o4, e4, f4 = d({}, l4.props);
  for (o4 in l4.type && l4.type.defaultProps && (e4 = l4.type.defaultProps), u4) "key" == o4 ? i4 = u4[o4] : "ref" == o4 ? r4 = u4[o4] : f4[o4] = void 0 === u4[o4] && null != e4 ? e4[o4] : u4[o4];
  return arguments.length > 2 && (f4.children = arguments.length > 3 ? n.call(arguments, 2) : t4), m(l4.type, f4, i4 || l4.key, r4 || l4.ref, null);
}
n = v.slice, l = { __e: function(n3, l4, u4, t4) {
  for (var i4, r4, o4; l4 = l4.__; ) if ((i4 = l4.__c) && !i4.__) try {
    if ((r4 = i4.constructor) && null != r4.getDerivedStateFromError && (i4.setState(r4.getDerivedStateFromError(n3)), o4 = i4.__d), null != i4.componentDidCatch && (i4.componentDidCatch(n3, t4 || {}), o4 = i4.__d), o4) return i4.__E = i4;
  } catch (l5) {
    n3 = l5;
  }
  throw n3;
} }, u = 0, t = function(n3) {
  return null != n3 && null == n3.constructor;
}, x.prototype.setState = function(n3, l4) {
  var u4;
  u4 = null != this.__s && this.__s != this.state ? this.__s : this.__s = d({}, this.state), "function" == typeof n3 && (n3 = n3(d({}, u4), this.props)), n3 && d(u4, n3), null != n3 && this.__v && (l4 && this._sb.push(l4), M(this));
}, x.prototype.forceUpdate = function(n3) {
  this.__v && (this.__e = true, n3 && this.__h.push(n3), M(this));
}, x.prototype.render = k, i = [], o = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, e = function(n3, l4) {
  return n3.__v.__b - l4.__v.__b;
}, $.__r = 0, f = /(PointerCapture)$|Capture$/i, c = 0, s = F(false), a = F(true), h = 0;

// node_modules/@uppy/utils/lib/isDOMElement.js
function isDOMElement(obj) {
  if (typeof obj !== "object" || obj === null) return false;
  if (!("nodeType" in obj)) return false;
  return obj.nodeType === Node.ELEMENT_NODE;
}

// node_modules/@uppy/utils/lib/findDOMElement.js
function findDOMElement(element, context) {
  if (context === void 0) {
    context = document;
  }
  if (typeof element === "string") {
    return context.querySelector(element);
  }
  if (isDOMElement(element)) {
    return element;
  }
  return null;
}
var findDOMElement_default = findDOMElement;

// node_modules/@uppy/utils/lib/getTextDirection.js
function getTextDirection(element) {
  var _element;
  while (element && !element.dir) {
    element = element.parentNode;
  }
  return (_element = element) == null ? void 0 : _element.dir;
}
var getTextDirection_default = getTextDirection;

// node_modules/@uppy/core/lib/BasePlugin.js
var BasePlugin = class {
  constructor(uppy, opts) {
    this.uppy = uppy;
    this.opts = opts != null ? opts : {};
  }
  getPluginState() {
    const {
      plugins
    } = this.uppy.getState();
    return (plugins == null ? void 0 : plugins[this.id]) || {};
  }
  setPluginState(update) {
    const {
      plugins
    } = this.uppy.getState();
    this.uppy.setState({
      plugins: {
        ...plugins,
        [this.id]: {
          ...plugins[this.id],
          ...update
        }
      }
    });
  }
  setOptions(newOpts) {
    this.opts = {
      ...this.opts,
      ...newOpts
    };
    this.setPluginState(void 0);
    this.i18nInit();
  }
  i18nInit() {
    const translator = new Translator([this.defaultLocale, this.uppy.locale, this.opts.locale]);
    this.i18n = translator.translate.bind(translator);
    this.i18nArray = translator.translateArray.bind(translator);
    this.setPluginState(void 0);
  }
  /**
   * Extendable methods
   * ==================
   * These methods are here to serve as an overview of the extendable methods as well as
   * making them not conditional in use, such as `if (this.afterUpdate)`.
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  addTarget(plugin) {
    throw new Error("Extend the addTarget method to add your plugin to another plugin's target");
  }
  install() {
  }
  uninstall() {
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  update(state) {
  }
  // Called after every state update, after everything's mounted. Debounced.
  afterUpdate() {
  }
};

// node_modules/@uppy/core/lib/UIPlugin.js
function _classPrivateFieldLooseBase4(receiver, privateKey) {
  if (!Object.prototype.hasOwnProperty.call(receiver, privateKey)) {
    throw new TypeError("attempted to use private field on non-instance");
  }
  return receiver;
}
var id4 = 0;
function _classPrivateFieldLooseKey4(name) {
  return "__private_" + id4++ + "_" + name;
}
function debounce(fn) {
  let calling = null;
  let latestArgs;
  return function() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    latestArgs = args;
    if (!calling) {
      calling = Promise.resolve().then(() => {
        calling = null;
        return fn(...latestArgs);
      });
    }
    return calling;
  };
}
var _updateUI = /* @__PURE__ */ _classPrivateFieldLooseKey4("updateUI");
var UIPlugin = class _UIPlugin extends BasePlugin {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, _updateUI, {
      writable: true,
      value: void 0
    });
  }
  getTargetPlugin(target) {
    let targetPlugin;
    if (typeof (target == null ? void 0 : target.addTarget) === "function") {
      targetPlugin = target;
      if (!(targetPlugin instanceof _UIPlugin)) {
        console.warn(new Error("The provided plugin is not an instance of UIPlugin. This is an indication of a bug with the way Uppy is bundled.", {
          cause: {
            targetPlugin,
            UIPlugin: _UIPlugin
          }
        }));
      }
    } else if (typeof target === "function") {
      const Target = target;
      this.uppy.iteratePlugins((p4) => {
        if (p4 instanceof Target) {
          targetPlugin = p4;
        }
      });
    }
    return targetPlugin;
  }
  /**
   * Check if supplied `target` is a DOM element or an `object`.
   * If it’s an object — target is a plugin, and we search `plugins`
   * for a plugin with same name and return its target.
   */
  mount(target, plugin) {
    const callerPluginName = plugin.id;
    const targetElement = findDOMElement_default(target);
    if (targetElement) {
      this.isTargetDOMEl = true;
      const uppyRootElement = document.createElement("div");
      uppyRootElement.classList.add("uppy-Root");
      _classPrivateFieldLooseBase4(this, _updateUI)[_updateUI] = debounce((state) => {
        if (!this.uppy.getPlugin(this.id)) return;
        E(this.render(state), uppyRootElement);
        this.afterUpdate();
      });
      this.uppy.log(`Installing ${callerPluginName} to a DOM element '${target}'`);
      if (this.opts.replaceTargetContent) {
        targetElement.innerHTML = "";
      }
      E(this.render(this.uppy.getState()), uppyRootElement);
      this.el = uppyRootElement;
      targetElement.appendChild(uppyRootElement);
      uppyRootElement.dir = this.opts.direction || getTextDirection_default(uppyRootElement) || "ltr";
      this.onMount();
      return this.el;
    }
    const targetPlugin = this.getTargetPlugin(target);
    if (targetPlugin) {
      this.uppy.log(`Installing ${callerPluginName} to ${targetPlugin.id}`);
      this.parent = targetPlugin;
      this.el = targetPlugin.addTarget(plugin);
      this.onMount();
      return this.el;
    }
    this.uppy.log(`Not installing ${callerPluginName}`);
    let message = `Invalid target option given to ${callerPluginName}.`;
    if (typeof target === "function") {
      message += " The given target is not a Plugin class. Please check that you're not specifying a React Component instead of a plugin. If you are using @uppy/* packages directly, make sure you have only 1 version of @uppy/core installed: run `npm ls @uppy/core` on the command line and verify that all the versions match and are deduped correctly.";
    } else {
      message += "If you meant to target an HTML element, please make sure that the element exists. Check that the <script> tag initializing Uppy is right before the closing </body> tag at the end of the page. (see https://github.com/transloadit/uppy/issues/1042)\n\nIf you meant to target a plugin, please confirm that your `import` statements or `require` calls are correct.";
    }
    throw new Error(message);
  }
  /**
   * Called when plugin is mounted, whether in DOM or into another plugin.
   * Needed because sometimes plugins are mounted separately/after `install`,
   * so this.el and this.parent might not be available in `install`.
   * This is the case with @uppy/react plugins, for example.
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  render(state) {
    throw new Error("Extend the render method to add your plugin to a DOM element");
  }
  update(state) {
    if (this.el != null) {
      var _classPrivateFieldLoo, _classPrivateFieldLoo2;
      (_classPrivateFieldLoo = (_classPrivateFieldLoo2 = _classPrivateFieldLooseBase4(this, _updateUI))[_updateUI]) == null || _classPrivateFieldLoo.call(_classPrivateFieldLoo2, state);
    }
  }
  unmount() {
    if (this.isTargetDOMEl) {
      var _this$el;
      (_this$el = this.el) == null || _this$el.remove();
    }
    this.onUnmount();
  }
  onMount() {
  }
  onUnmount() {
  }
};
var UIPlugin_default = UIPlugin;

// node_modules/@uppy/utils/lib/emaFilter.js
function emaFilter(newValue, previousSmoothedValue, halfLife, dt) {
  if (halfLife === 0 || newValue === previousSmoothedValue) return newValue;
  if (dt === 0) return previousSmoothedValue;
  return newValue + (previousSmoothedValue - newValue) * 2 ** (-dt / halfLife);
}

// node_modules/@uppy/status-bar/lib/StatusBarStates.js
var StatusBarStates_default = {
  STATE_ERROR: "error",
  STATE_WAITING: "waiting",
  STATE_PREPROCESSING: "preprocessing",
  STATE_UPLOADING: "uploading",
  STATE_POSTPROCESSING: "postprocessing",
  STATE_COMPLETE: "complete"
};

// node_modules/@uppy/status-bar/lib/StatusBarUI.js
var import_classnames2 = __toESM(require_classnames(), 1);

// node_modules/@uppy/status-bar/lib/calculateProcessingProgress.js
function calculateProcessingProgress(files) {
  const values = [];
  let mode = "indeterminate";
  let message;
  for (const {
    progress
  } of Object.values(files)) {
    const {
      preprocess,
      postprocess
    } = progress;
    if (message == null && (preprocess || postprocess)) {
      ;
      ({
        mode,
        message
      } = preprocess || postprocess);
    }
    if ((preprocess == null ? void 0 : preprocess.mode) === "determinate") values.push(preprocess.value);
    if ((postprocess == null ? void 0 : postprocess.mode) === "determinate") values.push(postprocess.value);
  }
  const value = values.reduce((total, progressValue) => {
    return total + progressValue / values.length;
  }, 0);
  return {
    mode,
    message,
    value
  };
}

// node_modules/@uppy/status-bar/lib/Components.js
var import_classnames = __toESM(require_classnames(), 1);
var import_prettier_bytes2 = __toESM(require_prettierBytes(), 1);

// node_modules/@uppy/utils/lib/secondsToTime.js
function secondsToTime(rawSeconds) {
  const hours = Math.floor(rawSeconds / 3600) % 24;
  const minutes = Math.floor(rawSeconds / 60) % 60;
  const seconds = Math.floor(rawSeconds % 60);
  return {
    hours,
    minutes,
    seconds
  };
}

// node_modules/@uppy/utils/lib/prettyETA.js
function prettyETA(seconds) {
  const time = secondsToTime(seconds);
  const hoursStr = time.hours === 0 ? "" : `${time.hours}h`;
  const minutesStr = time.minutes === 0 ? "" : `${time.hours === 0 ? time.minutes : ` ${time.minutes.toString(10).padStart(2, "0")}`}m`;
  const secondsStr = time.hours !== 0 ? "" : `${time.minutes === 0 ? time.seconds : ` ${time.seconds.toString(10).padStart(2, "0")}`}s`;
  return `${hoursStr}${minutesStr}${secondsStr}`;
}

// node_modules/@uppy/status-bar/lib/Components.js
var DOT = `\xB7`;
var renderDot = () => ` ${DOT} `;
function UploadBtn(props) {
  const {
    newFiles,
    isUploadStarted,
    recoveredState,
    i18n,
    uploadState,
    isSomeGhost,
    startUpload
  } = props;
  const uploadBtnClassNames = (0, import_classnames.default)("uppy-u-reset", "uppy-c-btn", "uppy-StatusBar-actionBtn", "uppy-StatusBar-actionBtn--upload", {
    "uppy-c-btn-primary": uploadState === StatusBarStates_default.STATE_WAITING
  }, {
    "uppy-StatusBar-actionBtn--disabled": isSomeGhost
  });
  const uploadBtnText = newFiles && isUploadStarted && !recoveredState ? i18n("uploadXNewFiles", {
    smart_count: newFiles
  }) : i18n("uploadXFiles", {
    smart_count: newFiles
  });
  return _("button", {
    type: "button",
    className: uploadBtnClassNames,
    "aria-label": i18n("uploadXFiles", {
      smart_count: newFiles
    }),
    onClick: startUpload,
    disabled: isSomeGhost,
    "data-uppy-super-focusable": true
  }, uploadBtnText);
}
function RetryBtn(props) {
  const {
    i18n,
    uppy
  } = props;
  return _("button", {
    type: "button",
    className: "uppy-u-reset uppy-c-btn uppy-StatusBar-actionBtn uppy-StatusBar-actionBtn--retry",
    "aria-label": i18n("retryUpload"),
    onClick: () => uppy.retryAll().catch(() => {
    }),
    "data-uppy-super-focusable": true,
    "data-cy": "retry"
  }, _("svg", {
    "aria-hidden": "true",
    focusable: "false",
    className: "uppy-c-icon",
    width: "8",
    height: "10",
    viewBox: "0 0 8 10"
  }, _("path", {
    d: "M4 2.408a2.75 2.75 0 1 0 2.75 2.75.626.626 0 0 1 1.25.018v.023a4 4 0 1 1-4-4.041V.25a.25.25 0 0 1 .389-.208l2.299 1.533a.25.25 0 0 1 0 .416l-2.3 1.533A.25.25 0 0 1 4 3.316v-.908z"
  })), i18n("retry"));
}
function CancelBtn(props) {
  const {
    i18n,
    uppy
  } = props;
  return _("button", {
    type: "button",
    className: "uppy-u-reset uppy-StatusBar-actionCircleBtn",
    title: i18n("cancel"),
    "aria-label": i18n("cancel"),
    onClick: () => uppy.cancelAll(),
    "data-cy": "cancel",
    "data-uppy-super-focusable": true
  }, _("svg", {
    "aria-hidden": "true",
    focusable: "false",
    className: "uppy-c-icon",
    width: "16",
    height: "16",
    viewBox: "0 0 16 16"
  }, _("g", {
    fill: "none",
    fillRule: "evenodd"
  }, _("circle", {
    fill: "#888",
    cx: "8",
    cy: "8",
    r: "8"
  }), _("path", {
    fill: "#FFF",
    d: "M9.283 8l2.567 2.567-1.283 1.283L8 9.283 5.433 11.85 4.15 10.567 6.717 8 4.15 5.433 5.433 4.15 8 6.717l2.567-2.567 1.283 1.283z"
  }))));
}
function PauseResumeButton(props) {
  const {
    isAllPaused,
    i18n,
    isAllComplete,
    resumableUploads,
    uppy
  } = props;
  const title = isAllPaused ? i18n("resume") : i18n("pause");
  function togglePauseResume() {
    if (isAllComplete) return;
    if (!resumableUploads) {
      uppy.cancelAll();
      return;
    }
    if (isAllPaused) {
      uppy.resumeAll();
      return;
    }
    uppy.pauseAll();
  }
  return _("button", {
    title,
    "aria-label": title,
    className: "uppy-u-reset uppy-StatusBar-actionCircleBtn",
    type: "button",
    onClick: togglePauseResume,
    "data-cy": "togglePauseResume",
    "data-uppy-super-focusable": true
  }, _("svg", {
    "aria-hidden": "true",
    focusable: "false",
    className: "uppy-c-icon",
    width: "16",
    height: "16",
    viewBox: "0 0 16 16"
  }, _("g", {
    fill: "none",
    fillRule: "evenodd"
  }, _("circle", {
    fill: "#888",
    cx: "8",
    cy: "8",
    r: "8"
  }), _("path", {
    fill: "#FFF",
    d: isAllPaused ? "M6 4.25L11.5 8 6 11.75z" : "M5 4.5h2v7H5v-7zm4 0h2v7H9v-7z"
  }))));
}
function DoneBtn(props) {
  const {
    i18n,
    doneButtonHandler
  } = props;
  return _("button", {
    type: "button",
    className: "uppy-u-reset uppy-c-btn uppy-StatusBar-actionBtn uppy-StatusBar-actionBtn--done",
    onClick: doneButtonHandler,
    "data-uppy-super-focusable": true
  }, i18n("done"));
}
function LoadingSpinner() {
  return _("svg", {
    className: "uppy-StatusBar-spinner",
    "aria-hidden": "true",
    focusable: "false",
    width: "14",
    height: "14"
  }, _("path", {
    d: "M13.983 6.547c-.12-2.509-1.64-4.893-3.939-5.936-2.48-1.127-5.488-.656-7.556 1.094C.524 3.367-.398 6.048.162 8.562c.556 2.495 2.46 4.52 4.94 5.183 2.932.784 5.61-.602 7.256-3.015-1.493 1.993-3.745 3.309-6.298 2.868-2.514-.434-4.578-2.349-5.153-4.84a6.226 6.226 0 0 1 2.98-6.778C6.34.586 9.74 1.1 11.373 3.493c.407.596.693 1.282.842 1.988.127.598.073 1.197.161 1.794.078.525.543 1.257 1.15.864.525-.341.49-1.05.456-1.592-.007-.15.02.3 0 0",
    fillRule: "evenodd"
  }));
}
function ProgressBarProcessing(props) {
  const {
    progress
  } = props;
  const {
    value,
    mode,
    message
  } = progress;
  const dot = `\xB7`;
  return _("div", {
    className: "uppy-StatusBar-content"
  }, _(LoadingSpinner, null), mode === "determinate" ? `${Math.round(value * 100)}% ${dot} ` : "", message);
}
function ProgressDetails(props) {
  const {
    numUploads,
    complete,
    totalUploadedSize,
    totalSize,
    totalETA,
    i18n
  } = props;
  const ifShowFilesUploadedOfTotal = numUploads > 1;
  return _("div", {
    className: "uppy-StatusBar-statusSecondary"
  }, ifShowFilesUploadedOfTotal && i18n("filesUploadedOfTotal", {
    complete,
    smart_count: numUploads
  }), _("span", {
    className: "uppy-StatusBar-additionalInfo"
  }, ifShowFilesUploadedOfTotal && renderDot(), i18n("dataUploadedOfTotal", {
    complete: (0, import_prettier_bytes2.default)(totalUploadedSize),
    total: (0, import_prettier_bytes2.default)(totalSize)
  }), renderDot(), i18n("xTimeLeft", {
    time: prettyETA(totalETA)
  })));
}
function FileUploadCount(props) {
  const {
    i18n,
    complete,
    numUploads
  } = props;
  return _("div", {
    className: "uppy-StatusBar-statusSecondary"
  }, i18n("filesUploadedOfTotal", {
    complete,
    smart_count: numUploads
  }));
}
function UploadNewlyAddedFiles(props) {
  const {
    i18n,
    newFiles,
    startUpload
  } = props;
  const uploadBtnClassNames = (0, import_classnames.default)("uppy-u-reset", "uppy-c-btn", "uppy-StatusBar-actionBtn", "uppy-StatusBar-actionBtn--uploadNewlyAdded");
  return _("div", {
    className: "uppy-StatusBar-statusSecondary"
  }, _("div", {
    className: "uppy-StatusBar-statusSecondaryHint"
  }, i18n("xMoreFilesAdded", {
    smart_count: newFiles
  })), _("button", {
    type: "button",
    className: uploadBtnClassNames,
    "aria-label": i18n("uploadXFiles", {
      smart_count: newFiles
    }),
    onClick: startUpload
  }, i18n("upload")));
}
function ProgressBarUploading(props) {
  const {
    i18n,
    supportsUploadProgress: supportsUploadProgress2,
    totalProgress,
    showProgressDetails,
    isUploadStarted,
    isAllComplete,
    isAllPaused,
    newFiles,
    numUploads,
    complete,
    totalUploadedSize,
    totalSize,
    totalETA,
    startUpload
  } = props;
  const showUploadNewlyAddedFiles = newFiles && isUploadStarted;
  if (!isUploadStarted || isAllComplete) {
    return null;
  }
  const title = isAllPaused ? i18n("paused") : i18n("uploading");
  function renderProgressDetails() {
    if (!isAllPaused && !showUploadNewlyAddedFiles && showProgressDetails) {
      if (supportsUploadProgress2) {
        return _(ProgressDetails, {
          numUploads,
          complete,
          totalUploadedSize,
          totalSize,
          totalETA,
          i18n
        });
      }
      return _(FileUploadCount, {
        i18n,
        complete,
        numUploads
      });
    }
    return null;
  }
  return _("div", {
    className: "uppy-StatusBar-content",
    "aria-label": title,
    title
  }, !isAllPaused ? _(LoadingSpinner, null) : null, _("div", {
    className: "uppy-StatusBar-status"
  }, _("div", {
    className: "uppy-StatusBar-statusPrimary"
  }, supportsUploadProgress2 ? `${title}: ${totalProgress}%` : title), renderProgressDetails(), showUploadNewlyAddedFiles ? _(UploadNewlyAddedFiles, {
    i18n,
    newFiles,
    startUpload
  }) : null));
}
function ProgressBarComplete(props) {
  const {
    i18n
  } = props;
  return _("div", {
    className: "uppy-StatusBar-content",
    role: "status",
    title: i18n("complete")
  }, _("div", {
    className: "uppy-StatusBar-status"
  }, _("div", {
    className: "uppy-StatusBar-statusPrimary"
  }, _("svg", {
    "aria-hidden": "true",
    focusable: "false",
    className: "uppy-StatusBar-statusIndicator uppy-c-icon",
    width: "15",
    height: "11",
    viewBox: "0 0 15 11"
  }, _("path", {
    d: "M.414 5.843L1.627 4.63l3.472 3.472L13.202 0l1.212 1.213L5.1 10.528z"
  })), i18n("complete"))));
}
function ProgressBarError(props) {
  const {
    error,
    i18n,
    complete,
    numUploads
  } = props;
  function displayErrorAlert() {
    const errorMessage = `${i18n("uploadFailed")} 

 ${error}`;
    alert(errorMessage);
  }
  return _("div", {
    className: "uppy-StatusBar-content",
    title: i18n("uploadFailed")
  }, _("svg", {
    "aria-hidden": "true",
    focusable: "false",
    className: "uppy-StatusBar-statusIndicator uppy-c-icon",
    width: "11",
    height: "11",
    viewBox: "0 0 11 11"
  }, _("path", {
    d: "M4.278 5.5L0 1.222 1.222 0 5.5 4.278 9.778 0 11 1.222 6.722 5.5 11 9.778 9.778 11 5.5 6.722 1.222 11 0 9.778z"
  })), _("div", {
    className: "uppy-StatusBar-status"
  }, _("div", {
    className: "uppy-StatusBar-statusPrimary"
  }, i18n("uploadFailed"), _("button", {
    className: "uppy-u-reset uppy-StatusBar-details",
    "aria-label": i18n("showErrorDetails"),
    "data-microtip-position": "top-right",
    "data-microtip-size": "medium",
    onClick: displayErrorAlert,
    type: "button"
  }, "?")), _(FileUploadCount, {
    i18n,
    complete,
    numUploads
  })));
}

// node_modules/@uppy/status-bar/lib/StatusBarUI.js
var {
  STATE_ERROR,
  STATE_WAITING,
  STATE_PREPROCESSING,
  STATE_UPLOADING,
  STATE_POSTPROCESSING,
  STATE_COMPLETE
} = StatusBarStates_default;
function StatusBar(props) {
  const {
    newFiles,
    allowNewUpload,
    isUploadInProgress,
    isAllPaused,
    resumableUploads,
    error,
    hideUploadButton,
    hidePauseResumeButton,
    hideCancelButton,
    hideRetryButton,
    recoveredState,
    uploadState,
    totalProgress,
    files,
    supportsUploadProgress: supportsUploadProgress2,
    hideAfterFinish,
    isSomeGhost,
    doneButtonHandler,
    isUploadStarted,
    i18n,
    startUpload,
    uppy,
    isAllComplete,
    showProgressDetails,
    numUploads,
    complete,
    totalSize,
    totalETA,
    totalUploadedSize
  } = props;
  function getProgressValue() {
    switch (uploadState) {
      case STATE_POSTPROCESSING:
      case STATE_PREPROCESSING: {
        const progress = calculateProcessingProgress(files);
        if (progress.mode === "determinate") {
          return progress.value * 100;
        }
        return totalProgress;
      }
      case STATE_ERROR: {
        return null;
      }
      case STATE_UPLOADING: {
        if (!supportsUploadProgress2) {
          return null;
        }
        return totalProgress;
      }
      default:
        return totalProgress;
    }
  }
  function getIsIndeterminate() {
    switch (uploadState) {
      case STATE_POSTPROCESSING:
      case STATE_PREPROCESSING: {
        const {
          mode
        } = calculateProcessingProgress(files);
        return mode === "indeterminate";
      }
      case STATE_UPLOADING: {
        if (!supportsUploadProgress2) {
          return true;
        }
        return false;
      }
      default:
        return false;
    }
  }
  function getIsHidden() {
    if (recoveredState) {
      return false;
    }
    switch (uploadState) {
      case STATE_WAITING:
        return hideUploadButton || newFiles === 0;
      case STATE_COMPLETE:
        return hideAfterFinish;
      default:
        return false;
    }
  }
  const progressValue = getProgressValue();
  const isHidden = getIsHidden();
  const width = progressValue != null ? progressValue : 100;
  const showUploadBtn = !error && newFiles && !isUploadInProgress && !isAllPaused && allowNewUpload && !hideUploadButton;
  const showCancelBtn = !hideCancelButton && uploadState !== STATE_WAITING && uploadState !== STATE_COMPLETE;
  const showPauseResumeBtn = resumableUploads && !hidePauseResumeButton && uploadState === STATE_UPLOADING;
  const showRetryBtn = error && !isAllComplete && !hideRetryButton;
  const showDoneBtn = doneButtonHandler && uploadState === STATE_COMPLETE;
  const progressClassNames = (0, import_classnames2.default)("uppy-StatusBar-progress", {
    "is-indeterminate": getIsIndeterminate()
  });
  const statusBarClassNames = (0, import_classnames2.default)("uppy-StatusBar", `is-${uploadState}`, {
    "has-ghosts": isSomeGhost
  });
  return _("div", {
    className: statusBarClassNames,
    "aria-hidden": isHidden
  }, _("div", {
    className: progressClassNames,
    style: {
      width: `${width}%`
    },
    role: "progressbar",
    "aria-label": `${width}%`,
    "aria-valuetext": `${width}%`,
    "aria-valuemin": 0,
    "aria-valuemax": 100,
    "aria-valuenow": progressValue
  }), (() => {
    switch (uploadState) {
      case STATE_PREPROCESSING:
      case STATE_POSTPROCESSING:
        return _(ProgressBarProcessing, {
          progress: calculateProcessingProgress(files)
        });
      case STATE_COMPLETE:
        return _(ProgressBarComplete, {
          i18n
        });
      case STATE_ERROR:
        return _(ProgressBarError, {
          error,
          i18n,
          numUploads,
          complete
        });
      case STATE_UPLOADING:
        return _(ProgressBarUploading, {
          i18n,
          supportsUploadProgress: supportsUploadProgress2,
          totalProgress,
          showProgressDetails,
          isUploadStarted,
          isAllComplete,
          isAllPaused,
          newFiles,
          numUploads,
          complete,
          totalUploadedSize,
          totalSize,
          totalETA,
          startUpload
        });
      default:
        return null;
    }
  })(), _("div", {
    className: "uppy-StatusBar-actions"
  }, recoveredState || showUploadBtn ? _(UploadBtn, {
    newFiles,
    isUploadStarted,
    recoveredState,
    i18n,
    isSomeGhost,
    startUpload,
    uploadState
  }) : null, showRetryBtn ? _(RetryBtn, {
    i18n,
    uppy
  }) : null, showPauseResumeBtn ? _(PauseResumeButton, {
    isAllPaused,
    i18n,
    isAllComplete,
    resumableUploads,
    uppy
  }) : null, showCancelBtn ? _(CancelBtn, {
    i18n,
    uppy
  }) : null, showDoneBtn ? _(DoneBtn, {
    i18n,
    doneButtonHandler
  }) : null));
}
StatusBar.defaultProps = {
  doneButtonHandler: void 0,
  hideAfterFinish: false,
  hideCancelButton: false,
  hidePauseResumeButton: false,
  hideRetryButton: false,
  hideUploadButton: void 0,
  showProgressDetails: void 0
};

// node_modules/@uppy/status-bar/lib/locale.js
var locale_default2 = {
  strings: {
    // Shown in the status bar while files are being uploaded.
    uploading: "Uploading",
    // Shown in the status bar once all files have been uploaded.
    complete: "Complete",
    // Shown in the status bar if an upload failed.
    uploadFailed: "Upload failed",
    // Shown in the status bar while the upload is paused.
    paused: "Paused",
    // Used as the label for the button that retries an upload.
    retry: "Retry",
    // Used as the label for the button that cancels an upload.
    cancel: "Cancel",
    // Used as the label for the button that pauses an upload.
    pause: "Pause",
    // Used as the label for the button that resumes an upload.
    resume: "Resume",
    // Used as the label for the button that resets the upload state after an upload
    done: "Done",
    // When `showProgressDetails` is set, shows the number of files that have been fully uploaded so far.
    filesUploadedOfTotal: {
      0: "%{complete} of %{smart_count} file uploaded",
      1: "%{complete} of %{smart_count} files uploaded"
    },
    // When `showProgressDetails` is set, shows the amount of bytes that have been uploaded so far.
    dataUploadedOfTotal: "%{complete} of %{total}",
    // When `showProgressDetails` is set, shows an estimation of how long the upload will take to complete.
    xTimeLeft: "%{time} left",
    // Used as the label for the button that starts an upload.
    uploadXFiles: {
      0: "Upload %{smart_count} file",
      1: "Upload %{smart_count} files"
    },
    // Used as the label for the button that starts an upload, if another upload has been started in the past
    // and new files were added later.
    uploadXNewFiles: {
      0: "Upload +%{smart_count} file",
      1: "Upload +%{smart_count} files"
    },
    upload: "Upload",
    retryUpload: "Retry upload",
    xMoreFilesAdded: {
      0: "%{smart_count} more file added",
      1: "%{smart_count} more files added"
    },
    showErrorDetails: "Show error details"
  }
};

// node_modules/@uppy/status-bar/lib/StatusBar.js
function _classPrivateFieldLooseBase5(receiver, privateKey) {
  if (!Object.prototype.hasOwnProperty.call(receiver, privateKey)) {
    throw new TypeError("attempted to use private field on non-instance");
  }
  return receiver;
}
var id5 = 0;
function _classPrivateFieldLooseKey5(name) {
  return "__private_" + id5++ + "_" + name;
}
var packageJson3 = {
  "version": "3.3.3"
};
var speedFilterHalfLife = 2e3;
var ETAFilterHalfLife = 2e3;
function getUploadingState(error, isAllComplete, recoveredState, files) {
  if (error) {
    return StatusBarStates_default.STATE_ERROR;
  }
  if (isAllComplete) {
    return StatusBarStates_default.STATE_COMPLETE;
  }
  if (recoveredState) {
    return StatusBarStates_default.STATE_WAITING;
  }
  let state = StatusBarStates_default.STATE_WAITING;
  const fileIDs = Object.keys(files);
  for (let i4 = 0; i4 < fileIDs.length; i4++) {
    const {
      progress
    } = files[fileIDs[i4]];
    if (progress.uploadStarted && !progress.uploadComplete) {
      return StatusBarStates_default.STATE_UPLOADING;
    }
    if (progress.preprocess) {
      state = StatusBarStates_default.STATE_PREPROCESSING;
    }
    if (progress.postprocess && state !== StatusBarStates_default.STATE_PREPROCESSING) {
      state = StatusBarStates_default.STATE_POSTPROCESSING;
    }
  }
  return state;
}
var defaultOptions2 = {
  target: "body",
  hideUploadButton: false,
  hideRetryButton: false,
  hidePauseResumeButton: false,
  hideCancelButton: false,
  showProgressDetails: false,
  hideAfterFinish: true,
  doneButtonHandler: null
};
var _lastUpdateTime = /* @__PURE__ */ _classPrivateFieldLooseKey5("lastUpdateTime");
var _previousUploadedBytes = /* @__PURE__ */ _classPrivateFieldLooseKey5("previousUploadedBytes");
var _previousSpeed = /* @__PURE__ */ _classPrivateFieldLooseKey5("previousSpeed");
var _previousETA = /* @__PURE__ */ _classPrivateFieldLooseKey5("previousETA");
var _computeSmoothETA = /* @__PURE__ */ _classPrivateFieldLooseKey5("computeSmoothETA");
var _onUploadStart = /* @__PURE__ */ _classPrivateFieldLooseKey5("onUploadStart");
var StatusBar2 = class extends UIPlugin_default {
  constructor(uppy, opts) {
    super(uppy, {
      ...defaultOptions2,
      ...opts
    });
    Object.defineProperty(this, _computeSmoothETA, {
      value: _computeSmoothETA2
    });
    Object.defineProperty(this, _lastUpdateTime, {
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, _previousUploadedBytes, {
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, _previousSpeed, {
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, _previousETA, {
      writable: true,
      value: void 0
    });
    this.startUpload = () => {
      return this.uppy.upload().catch(() => {
      });
    };
    Object.defineProperty(this, _onUploadStart, {
      writable: true,
      value: () => {
        const {
          recoveredState
        } = this.uppy.getState();
        _classPrivateFieldLooseBase5(this, _previousSpeed)[_previousSpeed] = null;
        _classPrivateFieldLooseBase5(this, _previousETA)[_previousETA] = null;
        if (recoveredState) {
          _classPrivateFieldLooseBase5(this, _previousUploadedBytes)[_previousUploadedBytes] = Object.values(recoveredState.files).reduce((pv, _ref) => {
            let {
              progress
            } = _ref;
            return pv + progress.bytesUploaded;
          }, 0);
          this.uppy.emit("restore-confirmed");
          return;
        }
        _classPrivateFieldLooseBase5(this, _lastUpdateTime)[_lastUpdateTime] = performance.now();
        _classPrivateFieldLooseBase5(this, _previousUploadedBytes)[_previousUploadedBytes] = 0;
      }
    });
    this.id = this.opts.id || "StatusBar";
    this.title = "StatusBar";
    this.type = "progressindicator";
    this.defaultLocale = locale_default2;
    this.i18nInit();
    this.render = this.render.bind(this);
    this.install = this.install.bind(this);
  }
  render(state) {
    const {
      capabilities,
      files,
      allowNewUpload,
      totalProgress,
      error,
      recoveredState
    } = state;
    const {
      newFiles,
      startedFiles,
      completeFiles,
      isUploadStarted,
      isAllComplete,
      isAllErrored,
      isAllPaused,
      isUploadInProgress,
      isSomeGhost
    } = this.uppy.getObjectOfFilesPerState();
    const newFilesOrRecovered = recoveredState ? Object.values(files) : newFiles;
    const resumableUploads = !!capabilities.resumableUploads;
    const supportsUploadProgress2 = capabilities.uploadProgress !== false;
    let totalSize = 0;
    let totalUploadedSize = 0;
    startedFiles.forEach((file) => {
      totalSize += file.progress.bytesTotal || 0;
      totalUploadedSize += file.progress.bytesUploaded || 0;
    });
    const totalETA = _classPrivateFieldLooseBase5(this, _computeSmoothETA)[_computeSmoothETA]({
      uploaded: totalUploadedSize,
      total: totalSize,
      remaining: totalSize - totalUploadedSize
    });
    return StatusBar({
      error,
      uploadState: getUploadingState(error, isAllComplete, recoveredState, state.files || {}),
      allowNewUpload,
      totalProgress,
      totalSize,
      totalUploadedSize,
      isAllComplete: false,
      isAllPaused,
      // @ts-expect-error TODO: remove this in 4.x branch
      isAllErrored,
      isUploadStarted,
      isUploadInProgress,
      isSomeGhost,
      recoveredState,
      complete: completeFiles.length,
      newFiles: newFilesOrRecovered.length,
      numUploads: startedFiles.length,
      totalETA,
      files,
      i18n: this.i18n,
      uppy: this.uppy,
      startUpload: this.startUpload,
      doneButtonHandler: this.opts.doneButtonHandler,
      resumableUploads,
      supportsUploadProgress: supportsUploadProgress2,
      showProgressDetails: this.opts.showProgressDetails,
      hideUploadButton: this.opts.hideUploadButton,
      hideRetryButton: this.opts.hideRetryButton,
      hidePauseResumeButton: this.opts.hidePauseResumeButton,
      hideCancelButton: this.opts.hideCancelButton,
      hideAfterFinish: this.opts.hideAfterFinish,
      // ts-expect-error TODO: remove this in 4.x branch
      isTargetDOMEl: this.isTargetDOMEl
    });
  }
  onMount() {
    const element = this.el;
    const direction = getTextDirection_default(element);
    if (!direction) {
      element.dir = "ltr";
    }
  }
  install() {
    const {
      target
    } = this.opts;
    if (target) {
      this.mount(target, this);
    }
    this.uppy.on("upload", _classPrivateFieldLooseBase5(this, _onUploadStart)[_onUploadStart]);
    _classPrivateFieldLooseBase5(this, _lastUpdateTime)[_lastUpdateTime] = performance.now();
    _classPrivateFieldLooseBase5(this, _previousUploadedBytes)[_previousUploadedBytes] = this.uppy.getFiles().reduce((pv, file) => pv + file.progress.bytesUploaded, 0);
  }
  uninstall() {
    this.unmount();
    this.uppy.off("upload", _classPrivateFieldLooseBase5(this, _onUploadStart)[_onUploadStart]);
  }
};
function _computeSmoothETA2(totalBytes) {
  var _classPrivateFieldLoo, _classPrivateFieldLoo2;
  if (totalBytes.total === 0 || totalBytes.remaining === 0) {
    return 0;
  }
  (_classPrivateFieldLoo2 = (_classPrivateFieldLoo = _classPrivateFieldLooseBase5(this, _lastUpdateTime))[_lastUpdateTime]) != null ? _classPrivateFieldLoo2 : _classPrivateFieldLoo[_lastUpdateTime] = performance.now();
  const dt = performance.now() - _classPrivateFieldLooseBase5(this, _lastUpdateTime)[_lastUpdateTime];
  if (dt === 0) {
    var _classPrivateFieldLoo3;
    return Math.round(((_classPrivateFieldLoo3 = _classPrivateFieldLooseBase5(this, _previousETA)[_previousETA]) != null ? _classPrivateFieldLoo3 : 0) / 100) / 10;
  }
  const uploadedBytesSinceLastTick = totalBytes.uploaded - _classPrivateFieldLooseBase5(this, _previousUploadedBytes)[_previousUploadedBytes];
  _classPrivateFieldLooseBase5(this, _previousUploadedBytes)[_previousUploadedBytes] = totalBytes.uploaded;
  if (uploadedBytesSinceLastTick <= 0) {
    var _classPrivateFieldLoo4;
    return Math.round(((_classPrivateFieldLoo4 = _classPrivateFieldLooseBase5(this, _previousETA)[_previousETA]) != null ? _classPrivateFieldLoo4 : 0) / 100) / 10;
  }
  const currentSpeed = uploadedBytesSinceLastTick / dt;
  const filteredSpeed = _classPrivateFieldLooseBase5(this, _previousSpeed)[_previousSpeed] == null ? currentSpeed : emaFilter(currentSpeed, _classPrivateFieldLooseBase5(this, _previousSpeed)[_previousSpeed], speedFilterHalfLife, dt);
  _classPrivateFieldLooseBase5(this, _previousSpeed)[_previousSpeed] = filteredSpeed;
  const instantETA = totalBytes.remaining / filteredSpeed;
  const updatedPreviousETA = Math.max(_classPrivateFieldLooseBase5(this, _previousETA)[_previousETA] - dt, 0);
  const filteredETA = _classPrivateFieldLooseBase5(this, _previousETA)[_previousETA] == null ? instantETA : emaFilter(instantETA, updatedPreviousETA, ETAFilterHalfLife, dt);
  _classPrivateFieldLooseBase5(this, _previousETA)[_previousETA] = filteredETA;
  _classPrivateFieldLooseBase5(this, _lastUpdateTime)[_lastUpdateTime] = performance.now();
  return Math.round(filteredETA / 100) / 10;
}
StatusBar2.VERSION = packageJson3.version;

// node_modules/@uppy/informer/lib/FadeIn.js
var TRANSITION_MS = 300;
var FadeIn = class extends x {
  constructor() {
    super(...arguments);
    this.ref = b();
  }
  componentWillEnter(callback) {
    this.ref.current.style.opacity = "1";
    this.ref.current.style.transform = "none";
    setTimeout(callback, TRANSITION_MS);
  }
  componentWillLeave(callback) {
    this.ref.current.style.opacity = "0";
    this.ref.current.style.transform = "translateY(350%)";
    setTimeout(callback, TRANSITION_MS);
  }
  render() {
    const {
      children
    } = this.props;
    return _("div", {
      className: "uppy-Informer-animated",
      ref: this.ref
    }, children);
  }
};

// node_modules/@uppy/informer/lib/TransitionGroup.js
function assign(obj, props) {
  return Object.assign(obj, props);
}
function getKey(vnode, fallback) {
  var _vnode$key;
  return (_vnode$key = vnode == null ? void 0 : vnode.key) != null ? _vnode$key : fallback;
}
function linkRef(component, name) {
  const cache = component._ptgLinkedRefs || (component._ptgLinkedRefs = {});
  return cache[name] || (cache[name] = (c4) => {
    component.refs[name] = c4;
  });
}
function getChildMapping(children) {
  const out = {};
  for (let i4 = 0; i4 < children.length; i4++) {
    if (children[i4] != null) {
      const key = getKey(children[i4], i4.toString(36));
      out[key] = children[i4];
    }
  }
  return out;
}
function mergeChildMappings(prev, next) {
  prev = prev || {};
  next = next || {};
  const getValueForKey = (key) => next.hasOwnProperty(key) ? next[key] : prev[key];
  const nextKeysPending = {};
  let pendingKeys = [];
  for (const prevKey in prev) {
    if (next.hasOwnProperty(prevKey)) {
      if (pendingKeys.length) {
        nextKeysPending[prevKey] = pendingKeys;
        pendingKeys = [];
      }
    } else {
      pendingKeys.push(prevKey);
    }
  }
  const childMapping = {};
  for (const nextKey in next) {
    if (nextKeysPending.hasOwnProperty(nextKey)) {
      for (let i4 = 0; i4 < nextKeysPending[nextKey].length; i4++) {
        const pendingNextKey = nextKeysPending[nextKey][i4];
        childMapping[nextKeysPending[nextKey][i4]] = getValueForKey(pendingNextKey);
      }
    }
    childMapping[nextKey] = getValueForKey(nextKey);
  }
  for (let i4 = 0; i4 < pendingKeys.length; i4++) {
    childMapping[pendingKeys[i4]] = getValueForKey(pendingKeys[i4]);
  }
  return childMapping;
}
var identity = (i4) => i4;
var TransitionGroup = class extends x {
  constructor(props, context) {
    super(props, context);
    this.refs = {};
    this.state = {
      children: getChildMapping(H(H(this.props.children)) || [])
    };
    this.performAppear = this.performAppear.bind(this);
    this.performEnter = this.performEnter.bind(this);
    this.performLeave = this.performLeave.bind(this);
  }
  componentWillMount() {
    this.currentlyTransitioningKeys = {};
    this.keysToAbortLeave = [];
    this.keysToEnter = [];
    this.keysToLeave = [];
  }
  componentDidMount() {
    const initialChildMapping = this.state.children;
    for (const key in initialChildMapping) {
      if (initialChildMapping[key]) {
        this.performAppear(key);
      }
    }
  }
  componentWillReceiveProps(nextProps) {
    const nextChildMapping = getChildMapping(H(nextProps.children) || []);
    const prevChildMapping = this.state.children;
    this.setState((prevState) => ({
      children: mergeChildMappings(prevState.children, nextChildMapping)
    }));
    let key;
    for (key in nextChildMapping) {
      if (nextChildMapping.hasOwnProperty(key)) {
        const hasPrev = prevChildMapping && prevChildMapping.hasOwnProperty(key);
        if (nextChildMapping[key] && hasPrev && this.currentlyTransitioningKeys[key]) {
          this.keysToEnter.push(key);
          this.keysToAbortLeave.push(key);
        } else if (nextChildMapping[key] && !hasPrev && !this.currentlyTransitioningKeys[key]) {
          this.keysToEnter.push(key);
        }
      }
    }
    for (key in prevChildMapping) {
      if (prevChildMapping.hasOwnProperty(key)) {
        const hasNext = nextChildMapping && nextChildMapping.hasOwnProperty(key);
        if (prevChildMapping[key] && !hasNext && !this.currentlyTransitioningKeys[key]) {
          this.keysToLeave.push(key);
        }
      }
    }
  }
  componentDidUpdate() {
    const {
      keysToEnter
    } = this;
    this.keysToEnter = [];
    keysToEnter.forEach(this.performEnter);
    const {
      keysToLeave
    } = this;
    this.keysToLeave = [];
    keysToLeave.forEach(this.performLeave);
  }
  _finishAbort(key) {
    const idx = this.keysToAbortLeave.indexOf(key);
    if (idx !== -1) {
      this.keysToAbortLeave.splice(idx, 1);
    }
  }
  performAppear(key) {
    this.currentlyTransitioningKeys[key] = true;
    const component = this.refs[key];
    if (component != null && component.componentWillAppear) {
      component.componentWillAppear(this._handleDoneAppearing.bind(this, key));
    } else {
      this._handleDoneAppearing(key);
    }
  }
  _handleDoneAppearing(key) {
    const component = this.refs[key];
    if (component != null && component.componentDidAppear) {
      component.componentDidAppear();
    }
    delete this.currentlyTransitioningKeys[key];
    this._finishAbort(key);
    const currentChildMapping = getChildMapping(H(this.props.children) || []);
    if (!currentChildMapping || !currentChildMapping.hasOwnProperty(key)) {
      this.performLeave(key);
    }
  }
  performEnter(key) {
    this.currentlyTransitioningKeys[key] = true;
    const component = this.refs[key];
    if (component != null && component.componentWillEnter) {
      component.componentWillEnter(this._handleDoneEntering.bind(this, key));
    } else {
      this._handleDoneEntering(key);
    }
  }
  _handleDoneEntering(key) {
    const component = this.refs[key];
    if (component != null && component.componentDidEnter) {
      component.componentDidEnter();
    }
    delete this.currentlyTransitioningKeys[key];
    this._finishAbort(key);
    const currentChildMapping = getChildMapping(H(this.props.children) || []);
    if (!currentChildMapping || !currentChildMapping.hasOwnProperty(key)) {
      this.performLeave(key);
    }
  }
  performLeave(key) {
    const idx = this.keysToAbortLeave.indexOf(key);
    if (idx !== -1) {
      return;
    }
    this.currentlyTransitioningKeys[key] = true;
    const component = this.refs[key];
    if (component != null && component.componentWillLeave) {
      component.componentWillLeave(this._handleDoneLeaving.bind(this, key));
    } else {
      this._handleDoneLeaving(key);
    }
  }
  _handleDoneLeaving(key) {
    const idx = this.keysToAbortLeave.indexOf(key);
    if (idx !== -1) {
      return;
    }
    const component = this.refs[key];
    if (component != null && component.componentDidLeave) {
      component.componentDidLeave();
    }
    delete this.currentlyTransitioningKeys[key];
    const currentChildMapping = getChildMapping(H(this.props.children) || []);
    if (currentChildMapping && currentChildMapping.hasOwnProperty(key)) {
      this.performEnter(key);
    } else {
      const children = assign({}, this.state.children);
      delete children[key];
      this.setState({
        children
      });
    }
  }
  render(_ref, _ref2) {
    let {
      childFactory,
      transitionLeave,
      transitionName: transitionName2,
      transitionAppear,
      transitionEnter,
      transitionLeaveTimeout,
      transitionEnterTimeout,
      transitionAppearTimeout,
      component,
      ...props
    } = _ref;
    let {
      children
    } = _ref2;
    const childrenToRender = Object.entries(children).map((_ref3) => {
      let [key, child] = _ref3;
      if (!child) return void 0;
      const ref = linkRef(this, key);
      return J(childFactory(child), {
        ref,
        key
      });
    }).filter(Boolean);
    return _(component, props, childrenToRender);
  }
};
TransitionGroup.defaultProps = {
  component: "span",
  childFactory: identity
};
var TransitionGroup_default = TransitionGroup;

// node_modules/@uppy/informer/lib/Informer.js
var packageJson4 = {
  "version": "3.1.0"
};
var Informer = class extends UIPlugin_default {
  constructor(uppy, opts) {
    super(uppy, opts);
    this.render = (state) => {
      return _("div", {
        className: "uppy uppy-Informer"
      }, _(TransitionGroup_default, null, state.info.map((info) => _(FadeIn, {
        key: info.message
      }, _("p", {
        role: "alert"
      }, info.message, " ", info.details && _("span", {
        "aria-label": info.details,
        "data-microtip-position": "top-left",
        "data-microtip-size": "medium",
        role: "tooltip",
        onClick: () => (
          // eslint-disable-next-line no-alert
          alert(`${info.message} 

 ${info.details}`)
        )
      }, "?"))))));
    };
    this.type = "progressindicator";
    this.id = this.opts.id || "Informer";
    this.title = "Informer";
  }
  install() {
    const {
      target
    } = this.opts;
    if (target) {
      this.mount(target, this);
    }
  }
};
Informer.VERSION = packageJson4.version;

// node_modules/@uppy/utils/lib/dataURItoBlob.js
var DATA_URL_PATTERN = /^data:([^/]+\/[^,;]+(?:[^,]*?))(;base64)?,([\s\S]*)$/;
function dataURItoBlob(dataURI, opts, toFile) {
  var _ref, _opts$mimeType;
  const dataURIData = DATA_URL_PATTERN.exec(dataURI);
  const mimeType = (_ref = (_opts$mimeType = opts.mimeType) != null ? _opts$mimeType : dataURIData == null ? void 0 : dataURIData[1]) != null ? _ref : "plain/text";
  let data;
  if ((dataURIData == null ? void 0 : dataURIData[2]) != null) {
    const binary = atob(decodeURIComponent(dataURIData[3]));
    const bytes = new Uint8Array(binary.length);
    for (let i4 = 0; i4 < binary.length; i4++) {
      bytes[i4] = binary.charCodeAt(i4);
    }
    data = [bytes];
  } else if ((dataURIData == null ? void 0 : dataURIData[3]) != null) {
    data = [decodeURIComponent(dataURIData[3])];
  }
  if (toFile) {
    return new File(data, opts.name || "", {
      type: mimeType
    });
  }
  return new Blob(data, {
    type: mimeType
  });
}
var dataURItoBlob_default = dataURItoBlob;

// node_modules/@uppy/utils/lib/isObjectURL.js
function isObjectURL(url) {
  return url.startsWith("blob:");
}

// node_modules/@uppy/utils/lib/isPreviewSupported.js
function isPreviewSupported(fileType) {
  if (!fileType) return false;
  return /^[^/]+\/(jpe?g|gif|png|svg|svg\+xml|bmp|webp|avif)$/.test(fileType);
}

// node_modules/exifr/dist/mini.esm.mjs
function e2(e4, t4, s4) {
  return t4 in e4 ? Object.defineProperty(e4, t4, { value: s4, enumerable: true, configurable: true, writable: true }) : e4[t4] = s4, e4;
}
var t2 = "undefined" != typeof self ? self : global;
var s2 = "undefined" != typeof navigator;
var i2 = s2 && "undefined" == typeof HTMLImageElement;
var n2 = !("undefined" == typeof global || "undefined" == typeof process || !process.versions || !process.versions.node);
var r2 = t2.Buffer;
var a2 = !!r2;
var h2 = (e4) => void 0 !== e4;
function f2(e4) {
  return void 0 === e4 || (e4 instanceof Map ? 0 === e4.size : 0 === Object.values(e4).filter(h2).length);
}
function l2(e4) {
  let t4 = new Error(e4);
  throw delete t4.stack, t4;
}
function o2(e4) {
  let t4 = function(e5) {
    let t5 = 0;
    return e5.ifd0.enabled && (t5 += 1024), e5.exif.enabled && (t5 += 2048), e5.makerNote && (t5 += 2048), e5.userComment && (t5 += 1024), e5.gps.enabled && (t5 += 512), e5.interop.enabled && (t5 += 100), e5.ifd1.enabled && (t5 += 1024), t5 + 2048;
  }(e4);
  return e4.jfif.enabled && (t4 += 50), e4.xmp.enabled && (t4 += 2e4), e4.iptc.enabled && (t4 += 14e3), e4.icc.enabled && (t4 += 6e3), t4;
}
var u2 = (e4) => String.fromCharCode.apply(null, e4);
var d2 = "undefined" != typeof TextDecoder ? new TextDecoder("utf-8") : void 0;
var c2 = class _c {
  static from(e4, t4) {
    return e4 instanceof this && e4.le === t4 ? e4 : new _c(e4, void 0, void 0, t4);
  }
  constructor(e4, t4 = 0, s4, i4) {
    if ("boolean" == typeof i4 && (this.le = i4), Array.isArray(e4) && (e4 = new Uint8Array(e4)), 0 === e4) this.byteOffset = 0, this.byteLength = 0;
    else if (e4 instanceof ArrayBuffer) {
      void 0 === s4 && (s4 = e4.byteLength - t4);
      let i5 = new DataView(e4, t4, s4);
      this._swapDataView(i5);
    } else if (e4 instanceof Uint8Array || e4 instanceof DataView || e4 instanceof _c) {
      void 0 === s4 && (s4 = e4.byteLength - t4), (t4 += e4.byteOffset) + s4 > e4.byteOffset + e4.byteLength && l2("Creating view outside of available memory in ArrayBuffer");
      let i5 = new DataView(e4.buffer, t4, s4);
      this._swapDataView(i5);
    } else if ("number" == typeof e4) {
      let t5 = new DataView(new ArrayBuffer(e4));
      this._swapDataView(t5);
    } else l2("Invalid input argument for BufferView: " + e4);
  }
  _swapArrayBuffer(e4) {
    this._swapDataView(new DataView(e4));
  }
  _swapBuffer(e4) {
    this._swapDataView(new DataView(e4.buffer, e4.byteOffset, e4.byteLength));
  }
  _swapDataView(e4) {
    this.dataView = e4, this.buffer = e4.buffer, this.byteOffset = e4.byteOffset, this.byteLength = e4.byteLength;
  }
  _lengthToEnd(e4) {
    return this.byteLength - e4;
  }
  set(e4, t4, s4 = _c) {
    return e4 instanceof DataView || e4 instanceof _c ? e4 = new Uint8Array(e4.buffer, e4.byteOffset, e4.byteLength) : e4 instanceof ArrayBuffer && (e4 = new Uint8Array(e4)), e4 instanceof Uint8Array || l2("BufferView.set(): Invalid data argument."), this.toUint8().set(e4, t4), new s4(this, t4, e4.byteLength);
  }
  subarray(e4, t4) {
    return t4 = t4 || this._lengthToEnd(e4), new _c(this, e4, t4);
  }
  toUint8() {
    return new Uint8Array(this.buffer, this.byteOffset, this.byteLength);
  }
  getUint8Array(e4, t4) {
    return new Uint8Array(this.buffer, this.byteOffset + e4, t4);
  }
  getString(e4 = 0, t4 = this.byteLength) {
    let s4 = this.getUint8Array(e4, t4);
    return i4 = s4, d2 ? d2.decode(i4) : a2 ? Buffer.from(i4).toString("utf8") : decodeURIComponent(escape(u2(i4)));
    var i4;
  }
  getLatin1String(e4 = 0, t4 = this.byteLength) {
    let s4 = this.getUint8Array(e4, t4);
    return u2(s4);
  }
  getUnicodeString(e4 = 0, t4 = this.byteLength) {
    const s4 = [];
    for (let i4 = 0; i4 < t4 && e4 + i4 < this.byteLength; i4 += 2) s4.push(this.getUint16(e4 + i4));
    return u2(s4);
  }
  getInt8(e4) {
    return this.dataView.getInt8(e4);
  }
  getUint8(e4) {
    return this.dataView.getUint8(e4);
  }
  getInt16(e4, t4 = this.le) {
    return this.dataView.getInt16(e4, t4);
  }
  getInt32(e4, t4 = this.le) {
    return this.dataView.getInt32(e4, t4);
  }
  getUint16(e4, t4 = this.le) {
    return this.dataView.getUint16(e4, t4);
  }
  getUint32(e4, t4 = this.le) {
    return this.dataView.getUint32(e4, t4);
  }
  getFloat32(e4, t4 = this.le) {
    return this.dataView.getFloat32(e4, t4);
  }
  getFloat64(e4, t4 = this.le) {
    return this.dataView.getFloat64(e4, t4);
  }
  getFloat(e4, t4 = this.le) {
    return this.dataView.getFloat32(e4, t4);
  }
  getDouble(e4, t4 = this.le) {
    return this.dataView.getFloat64(e4, t4);
  }
  getUintBytes(e4, t4, s4) {
    switch (t4) {
      case 1:
        return this.getUint8(e4, s4);
      case 2:
        return this.getUint16(e4, s4);
      case 4:
        return this.getUint32(e4, s4);
      case 8:
        return this.getUint64 && this.getUint64(e4, s4);
    }
  }
  getUint(e4, t4, s4) {
    switch (t4) {
      case 8:
        return this.getUint8(e4, s4);
      case 16:
        return this.getUint16(e4, s4);
      case 32:
        return this.getUint32(e4, s4);
      case 64:
        return this.getUint64 && this.getUint64(e4, s4);
    }
  }
  toString(e4) {
    return this.dataView.toString(e4, this.constructor.name);
  }
  ensureChunk() {
  }
};
function p2(e4, t4) {
  l2(`${e4} '${t4}' was not loaded, try using full build of exifr.`);
}
var g2 = class extends Map {
  constructor(e4) {
    super(), this.kind = e4;
  }
  get(e4, t4) {
    return this.has(e4) || p2(this.kind, e4), t4 && (e4 in t4 || function(e5, t5) {
      l2(`Unknown ${e5} '${t5}'.`);
    }(this.kind, e4), t4[e4].enabled || p2(this.kind, e4)), super.get(e4);
  }
  keyList() {
    return Array.from(this.keys());
  }
};
var m2 = new g2("file parser");
var y2 = new g2("segment parser");
var b2 = new g2("file reader");
var w2 = t2.fetch;
function k2(e4, t4) {
  return (i4 = e4).startsWith("data:") || i4.length > 1e4 ? v2(e4, t4, "base64") : n2 && e4.includes("://") ? O2(e4, t4, "url", S2) : n2 ? v2(e4, t4, "fs") : s2 ? O2(e4, t4, "url", S2) : void l2("Invalid input argument");
  var i4;
}
async function O2(e4, t4, s4, i4) {
  return b2.has(s4) ? v2(e4, t4, s4) : i4 ? async function(e5, t5) {
    let s5 = await t5(e5);
    return new c2(s5);
  }(e4, i4) : void l2(`Parser ${s4} is not loaded`);
}
async function v2(e4, t4, s4) {
  let i4 = new (b2.get(s4))(e4, t4);
  return await i4.read(), i4;
}
var S2 = (e4) => w2(e4).then((e5) => e5.arrayBuffer());
var A2 = (e4) => new Promise((t4, s4) => {
  let i4 = new FileReader();
  i4.onloadend = () => t4(i4.result || new ArrayBuffer()), i4.onerror = s4, i4.readAsArrayBuffer(e4);
});
var U = class extends Map {
  get tagKeys() {
    return this.allKeys || (this.allKeys = Array.from(this.keys())), this.allKeys;
  }
  get tagValues() {
    return this.allValues || (this.allValues = Array.from(this.values())), this.allValues;
  }
};
function x2(e4, t4, s4) {
  let i4 = new U();
  for (let [e5, t5] of s4) i4.set(e5, t5);
  if (Array.isArray(t4)) for (let s5 of t4) e4.set(s5, i4);
  else e4.set(t4, i4);
  return i4;
}
function C2(e4, t4, s4) {
  let i4, n3 = e4.get(t4);
  for (i4 of s4) n3.set(i4[0], i4[1]);
}
var B2 = /* @__PURE__ */ new Map();
var V2 = /* @__PURE__ */ new Map();
var I2 = /* @__PURE__ */ new Map();
var L2 = ["chunked", "firstChunkSize", "firstChunkSizeNode", "firstChunkSizeBrowser", "chunkSize", "chunkLimit"];
var T2 = ["jfif", "xmp", "icc", "iptc", "ihdr"];
var z2 = ["tiff", ...T2];
var P2 = ["ifd0", "ifd1", "exif", "gps", "interop"];
var F2 = [...z2, ...P2];
var j2 = ["makerNote", "userComment"];
var E2 = ["translateKeys", "translateValues", "reviveValues", "multiSegment"];
var M2 = [...E2, "sanitize", "mergeOutput", "silentErrors"];
var _2 = class {
  get translate() {
    return this.translateKeys || this.translateValues || this.reviveValues;
  }
};
var D2 = class extends _2 {
  get needed() {
    return this.enabled || this.deps.size > 0;
  }
  constructor(t4, s4, i4, n3) {
    if (super(), e2(this, "enabled", false), e2(this, "skip", /* @__PURE__ */ new Set()), e2(this, "pick", /* @__PURE__ */ new Set()), e2(this, "deps", /* @__PURE__ */ new Set()), e2(this, "translateKeys", false), e2(this, "translateValues", false), e2(this, "reviveValues", false), this.key = t4, this.enabled = s4, this.parse = this.enabled, this.applyInheritables(n3), this.canBeFiltered = P2.includes(t4), this.canBeFiltered && (this.dict = B2.get(t4)), void 0 !== i4) if (Array.isArray(i4)) this.parse = this.enabled = true, this.canBeFiltered && i4.length > 0 && this.translateTagSet(i4, this.pick);
    else if ("object" == typeof i4) {
      if (this.enabled = true, this.parse = false !== i4.parse, this.canBeFiltered) {
        let { pick: e4, skip: t5 } = i4;
        e4 && e4.length > 0 && this.translateTagSet(e4, this.pick), t5 && t5.length > 0 && this.translateTagSet(t5, this.skip);
      }
      this.applyInheritables(i4);
    } else true === i4 || false === i4 ? this.parse = this.enabled = i4 : l2(`Invalid options argument: ${i4}`);
  }
  applyInheritables(e4) {
    let t4, s4;
    for (t4 of E2) s4 = e4[t4], void 0 !== s4 && (this[t4] = s4);
  }
  translateTagSet(e4, t4) {
    if (this.dict) {
      let s4, i4, { tagKeys: n3, tagValues: r4 } = this.dict;
      for (s4 of e4) "string" == typeof s4 ? (i4 = r4.indexOf(s4), -1 === i4 && (i4 = n3.indexOf(Number(s4))), -1 !== i4 && t4.add(Number(n3[i4]))) : t4.add(s4);
    } else for (let s4 of e4) t4.add(s4);
  }
  finalizeFilters() {
    !this.enabled && this.deps.size > 0 ? (this.enabled = true, X(this.pick, this.deps)) : this.enabled && this.pick.size > 0 && X(this.pick, this.deps);
  }
};
var N2 = { jfif: false, tiff: true, xmp: false, icc: false, iptc: false, ifd0: true, ifd1: false, exif: true, gps: true, interop: false, ihdr: void 0, makerNote: false, userComment: false, multiSegment: false, skip: [], pick: [], translateKeys: true, translateValues: true, reviveValues: true, sanitize: true, mergeOutput: true, silentErrors: true, chunked: true, firstChunkSize: void 0, firstChunkSizeNode: 512, firstChunkSizeBrowser: 65536, chunkSize: 65536, chunkLimit: 5 };
var $2 = /* @__PURE__ */ new Map();
var R = class extends _2 {
  static useCached(e4) {
    let t4 = $2.get(e4);
    return void 0 !== t4 || (t4 = new this(e4), $2.set(e4, t4)), t4;
  }
  constructor(e4) {
    super(), true === e4 ? this.setupFromTrue() : void 0 === e4 ? this.setupFromUndefined() : Array.isArray(e4) ? this.setupFromArray(e4) : "object" == typeof e4 ? this.setupFromObject(e4) : l2(`Invalid options argument ${e4}`), void 0 === this.firstChunkSize && (this.firstChunkSize = s2 ? this.firstChunkSizeBrowser : this.firstChunkSizeNode), this.mergeOutput && (this.ifd1.enabled = false), this.filterNestedSegmentTags(), this.traverseTiffDependencyTree(), this.checkLoadedPlugins();
  }
  setupFromUndefined() {
    let e4;
    for (e4 of L2) this[e4] = N2[e4];
    for (e4 of M2) this[e4] = N2[e4];
    for (e4 of j2) this[e4] = N2[e4];
    for (e4 of F2) this[e4] = new D2(e4, N2[e4], void 0, this);
  }
  setupFromTrue() {
    let e4;
    for (e4 of L2) this[e4] = N2[e4];
    for (e4 of M2) this[e4] = N2[e4];
    for (e4 of j2) this[e4] = true;
    for (e4 of F2) this[e4] = new D2(e4, true, void 0, this);
  }
  setupFromArray(e4) {
    let t4;
    for (t4 of L2) this[t4] = N2[t4];
    for (t4 of M2) this[t4] = N2[t4];
    for (t4 of j2) this[t4] = N2[t4];
    for (t4 of F2) this[t4] = new D2(t4, false, void 0, this);
    this.setupGlobalFilters(e4, void 0, P2);
  }
  setupFromObject(e4) {
    let t4;
    for (t4 of (P2.ifd0 = P2.ifd0 || P2.image, P2.ifd1 = P2.ifd1 || P2.thumbnail, Object.assign(this, e4), L2)) this[t4] = W(e4[t4], N2[t4]);
    for (t4 of M2) this[t4] = W(e4[t4], N2[t4]);
    for (t4 of j2) this[t4] = W(e4[t4], N2[t4]);
    for (t4 of z2) this[t4] = new D2(t4, N2[t4], e4[t4], this);
    for (t4 of P2) this[t4] = new D2(t4, N2[t4], e4[t4], this.tiff);
    this.setupGlobalFilters(e4.pick, e4.skip, P2, F2), true === e4.tiff ? this.batchEnableWithBool(P2, true) : false === e4.tiff ? this.batchEnableWithUserValue(P2, e4) : Array.isArray(e4.tiff) ? this.setupGlobalFilters(e4.tiff, void 0, P2) : "object" == typeof e4.tiff && this.setupGlobalFilters(e4.tiff.pick, e4.tiff.skip, P2);
  }
  batchEnableWithBool(e4, t4) {
    for (let s4 of e4) this[s4].enabled = t4;
  }
  batchEnableWithUserValue(e4, t4) {
    for (let s4 of e4) {
      let e5 = t4[s4];
      this[s4].enabled = false !== e5 && void 0 !== e5;
    }
  }
  setupGlobalFilters(e4, t4, s4, i4 = s4) {
    if (e4 && e4.length) {
      for (let e5 of i4) this[e5].enabled = false;
      let t5 = K(e4, s4);
      for (let [e5, s5] of t5) X(this[e5].pick, s5), this[e5].enabled = true;
    } else if (t4 && t4.length) {
      let e5 = K(t4, s4);
      for (let [t5, s5] of e5) X(this[t5].skip, s5);
    }
  }
  filterNestedSegmentTags() {
    let { ifd0: e4, exif: t4, xmp: s4, iptc: i4, icc: n3 } = this;
    this.makerNote ? t4.deps.add(37500) : t4.skip.add(37500), this.userComment ? t4.deps.add(37510) : t4.skip.add(37510), s4.enabled || e4.skip.add(700), i4.enabled || e4.skip.add(33723), n3.enabled || e4.skip.add(34675);
  }
  traverseTiffDependencyTree() {
    let { ifd0: e4, exif: t4, gps: s4, interop: i4 } = this;
    i4.needed && (t4.deps.add(40965), e4.deps.add(40965)), t4.needed && e4.deps.add(34665), s4.needed && e4.deps.add(34853), this.tiff.enabled = P2.some((e5) => true === this[e5].enabled) || this.makerNote || this.userComment;
    for (let e5 of P2) this[e5].finalizeFilters();
  }
  get onlyTiff() {
    return !T2.map((e4) => this[e4].enabled).some((e4) => true === e4) && this.tiff.enabled;
  }
  checkLoadedPlugins() {
    for (let e4 of z2) this[e4].enabled && !y2.has(e4) && p2("segment parser", e4);
  }
};
function K(e4, t4) {
  let s4, i4, n3, r4, a4 = [];
  for (n3 of t4) {
    for (r4 of (s4 = B2.get(n3), i4 = [], s4)) (e4.includes(r4[0]) || e4.includes(r4[1])) && i4.push(r4[0]);
    i4.length && a4.push([n3, i4]);
  }
  return a4;
}
function W(e4, t4) {
  return void 0 !== e4 ? e4 : void 0 !== t4 ? t4 : void 0;
}
function X(e4, t4) {
  for (let s4 of t4) e4.add(s4);
}
e2(R, "default", N2);
var H2 = class {
  constructor(t4) {
    e2(this, "parsers", {}), e2(this, "output", {}), e2(this, "errors", []), e2(this, "pushToErrors", (e4) => this.errors.push(e4)), this.options = R.useCached(t4);
  }
  async read(e4) {
    this.file = await function(e5, t4) {
      return "string" == typeof e5 ? k2(e5, t4) : s2 && !i2 && e5 instanceof HTMLImageElement ? k2(e5.src, t4) : e5 instanceof Uint8Array || e5 instanceof ArrayBuffer || e5 instanceof DataView ? new c2(e5) : s2 && e5 instanceof Blob ? O2(e5, t4, "blob", A2) : void l2("Invalid input argument");
    }(e4, this.options);
  }
  setup() {
    if (this.fileParser) return;
    let { file: e4 } = this, t4 = e4.getUint16(0);
    for (let [s4, i4] of m2) if (i4.canHandle(e4, t4)) return this.fileParser = new i4(this.options, this.file, this.parsers), e4[s4] = true;
    this.file.close && this.file.close(), l2("Unknown file format");
  }
  async parse() {
    let { output: e4, errors: t4 } = this;
    return this.setup(), this.options.silentErrors ? (await this.executeParsers().catch(this.pushToErrors), t4.push(...this.fileParser.errors)) : await this.executeParsers(), this.file.close && this.file.close(), this.options.silentErrors && t4.length > 0 && (e4.errors = t4), f2(s4 = e4) ? void 0 : s4;
    var s4;
  }
  async executeParsers() {
    let { output: e4 } = this;
    await this.fileParser.parse();
    let t4 = Object.values(this.parsers).map(async (t5) => {
      let s4 = await t5.parse();
      t5.assignToOutput(e4, s4);
    });
    this.options.silentErrors && (t4 = t4.map((e5) => e5.catch(this.pushToErrors))), await Promise.all(t4);
  }
  async extractThumbnail() {
    this.setup();
    let { options: e4, file: t4 } = this, s4 = y2.get("tiff", e4);
    var i4;
    if (t4.tiff ? i4 = { start: 0, type: "tiff" } : t4.jpeg && (i4 = await this.fileParser.getOrFindSegment("tiff")), void 0 === i4) return;
    let n3 = await this.fileParser.ensureSegmentChunk(i4), r4 = this.parsers.tiff = new s4(n3, e4, t4), a4 = await r4.extractThumbnail();
    return t4.close && t4.close(), a4;
  }
};
async function Y(e4, t4) {
  let s4 = new H2(t4);
  return await s4.read(e4), s4.parse();
}
var G = Object.freeze({ __proto__: null, parse: Y, Exifr: H2, fileParsers: m2, segmentParsers: y2, fileReaders: b2, tagKeys: B2, tagValues: V2, tagRevivers: I2, createDictionary: x2, extendDictionary: C2, fetchUrlAsArrayBuffer: S2, readBlobAsArrayBuffer: A2, chunkedProps: L2, otherSegments: T2, segments: z2, tiffBlocks: P2, segmentsAndBlocks: F2, tiffExtractables: j2, inheritables: E2, allFormatters: M2, Options: R });
var J2 = class {
  static findPosition(e4, t4) {
    let s4 = e4.getUint16(t4 + 2) + 2, i4 = "function" == typeof this.headerLength ? this.headerLength(e4, t4, s4) : this.headerLength, n3 = t4 + i4, r4 = s4 - i4;
    return { offset: t4, length: s4, headerLength: i4, start: n3, size: r4, end: n3 + r4 };
  }
  static parse(e4, t4 = {}) {
    return new this(e4, new R({ [this.type]: t4 }), e4).parse();
  }
  normalizeInput(e4) {
    return e4 instanceof c2 ? e4 : new c2(e4);
  }
  constructor(t4, s4 = {}, i4) {
    e2(this, "errors", []), e2(this, "raw", /* @__PURE__ */ new Map()), e2(this, "handleError", (e4) => {
      if (!this.options.silentErrors) throw e4;
      this.errors.push(e4.message);
    }), this.chunk = this.normalizeInput(t4), this.file = i4, this.type = this.constructor.type, this.globalOptions = this.options = s4, this.localOptions = s4[this.type], this.canTranslate = this.localOptions && this.localOptions.translate;
  }
  translate() {
    this.canTranslate && (this.translated = this.translateBlock(this.raw, this.type));
  }
  get output() {
    return this.translated ? this.translated : this.raw ? Object.fromEntries(this.raw) : void 0;
  }
  translateBlock(e4, t4) {
    let s4 = I2.get(t4), i4 = V2.get(t4), n3 = B2.get(t4), r4 = this.options[t4], a4 = r4.reviveValues && !!s4, h4 = r4.translateValues && !!i4, f4 = r4.translateKeys && !!n3, l4 = {};
    for (let [t5, r5] of e4) a4 && s4.has(t5) ? r5 = s4.get(t5)(r5) : h4 && i4.has(t5) && (r5 = this.translateValue(r5, i4.get(t5))), f4 && n3.has(t5) && (t5 = n3.get(t5) || t5), l4[t5] = r5;
    return l4;
  }
  translateValue(e4, t4) {
    return t4[e4] || t4.DEFAULT || e4;
  }
  assignToOutput(e4, t4) {
    this.assignObjectToOutput(e4, this.constructor.type, t4);
  }
  assignObjectToOutput(e4, t4, s4) {
    if (this.globalOptions.mergeOutput) return Object.assign(e4, s4);
    e4[t4] ? Object.assign(e4[t4], s4) : e4[t4] = s4;
  }
};
e2(J2, "headerLength", 4), e2(J2, "type", void 0), e2(J2, "multiSegment", false), e2(J2, "canHandle", () => false);
function q2(e4) {
  return 192 === e4 || 194 === e4 || 196 === e4 || 219 === e4 || 221 === e4 || 218 === e4 || 254 === e4;
}
function Q(e4) {
  return e4 >= 224 && e4 <= 239;
}
function Z(e4, t4, s4) {
  for (let [i4, n3] of y2) if (n3.canHandle(e4, t4, s4)) return i4;
}
var ee2 = class extends class {
  constructor(t4, s4, i4) {
    e2(this, "errors", []), e2(this, "ensureSegmentChunk", async (e4) => {
      let t5 = e4.start, s5 = e4.size || 65536;
      if (this.file.chunked) if (this.file.available(t5, s5)) e4.chunk = this.file.subarray(t5, s5);
      else try {
        e4.chunk = await this.file.readChunk(t5, s5);
      } catch (t6) {
        l2(`Couldn't read segment: ${JSON.stringify(e4)}. ${t6.message}`);
      }
      else this.file.byteLength > t5 + s5 ? e4.chunk = this.file.subarray(t5, s5) : void 0 === e4.size ? e4.chunk = this.file.subarray(t5) : l2("Segment unreachable: " + JSON.stringify(e4));
      return e4.chunk;
    }), this.extendOptions && this.extendOptions(t4), this.options = t4, this.file = s4, this.parsers = i4;
  }
  injectSegment(e4, t4) {
    this.options[e4].enabled && this.createParser(e4, t4);
  }
  createParser(e4, t4) {
    let s4 = new (y2.get(e4))(t4, this.options, this.file);
    return this.parsers[e4] = s4;
  }
  createParsers(e4) {
    for (let t4 of e4) {
      let { type: e5, chunk: s4 } = t4, i4 = this.options[e5];
      if (i4 && i4.enabled) {
        let t5 = this.parsers[e5];
        t5 && t5.append || t5 || this.createParser(e5, s4);
      }
    }
  }
  async readSegments(e4) {
    let t4 = e4.map(this.ensureSegmentChunk);
    await Promise.all(t4);
  }
} {
  constructor(...t4) {
    super(...t4), e2(this, "appSegments", []), e2(this, "jpegSegments", []), e2(this, "unknownSegments", []);
  }
  static canHandle(e4, t4) {
    return 65496 === t4;
  }
  async parse() {
    await this.findAppSegments(), await this.readSegments(this.appSegments), this.mergeMultiSegments(), this.createParsers(this.mergedAppSegments || this.appSegments);
  }
  setupSegmentFinderArgs(e4) {
    true === e4 ? (this.findAll = true, this.wanted = new Set(y2.keyList())) : (e4 = void 0 === e4 ? y2.keyList().filter((e5) => this.options[e5].enabled) : e4.filter((e5) => this.options[e5].enabled && y2.has(e5)), this.findAll = false, this.remaining = new Set(e4), this.wanted = new Set(e4)), this.unfinishedMultiSegment = false;
  }
  async findAppSegments(e4 = 0, t4) {
    this.setupSegmentFinderArgs(t4);
    let { file: s4, findAll: i4, wanted: n3, remaining: r4 } = this;
    if (!i4 && this.file.chunked && (i4 = Array.from(n3).some((e5) => {
      let t5 = y2.get(e5), s5 = this.options[e5];
      return t5.multiSegment && s5.multiSegment;
    }), i4 && await this.file.readWhole()), e4 = this.findAppSegmentsInRange(e4, s4.byteLength), !this.options.onlyTiff && s4.chunked) {
      let t5 = false;
      for (; r4.size > 0 && !t5 && (s4.canReadNextChunk || this.unfinishedMultiSegment); ) {
        let { nextChunkOffset: i5 } = s4, n4 = this.appSegments.some((e5) => !this.file.available(e5.offset || e5.start, e5.length || e5.size));
        if (t5 = e4 > i5 && !n4 ? !await s4.readNextChunk(e4) : !await s4.readNextChunk(i5), void 0 === (e4 = this.findAppSegmentsInRange(e4, s4.byteLength))) return;
      }
    }
  }
  findAppSegmentsInRange(e4, t4) {
    t4 -= 2;
    let s4, i4, n3, r4, a4, h4, { file: f4, findAll: l4, wanted: o4, remaining: u4, options: d4 } = this;
    for (; e4 < t4; e4++) if (255 === f4.getUint8(e4)) {
      if (s4 = f4.getUint8(e4 + 1), Q(s4)) {
        if (i4 = f4.getUint16(e4 + 2), n3 = Z(f4, e4, i4), n3 && o4.has(n3) && (r4 = y2.get(n3), a4 = r4.findPosition(f4, e4), h4 = d4[n3], a4.type = n3, this.appSegments.push(a4), !l4 && (r4.multiSegment && h4.multiSegment ? (this.unfinishedMultiSegment = a4.chunkNumber < a4.chunkCount, this.unfinishedMultiSegment || u4.delete(n3)) : u4.delete(n3), 0 === u4.size))) break;
        d4.recordUnknownSegments && (a4 = J2.findPosition(f4, e4), a4.marker = s4, this.unknownSegments.push(a4)), e4 += i4 + 1;
      } else if (q2(s4)) {
        if (i4 = f4.getUint16(e4 + 2), 218 === s4 && false !== d4.stopAfterSos) return;
        d4.recordJpegSegments && this.jpegSegments.push({ offset: e4, length: i4, marker: s4 }), e4 += i4 + 1;
      }
    }
    return e4;
  }
  mergeMultiSegments() {
    if (!this.appSegments.some((e5) => e5.multiSegment)) return;
    let e4 = function(e5, t4) {
      let s4, i4, n3, r4 = /* @__PURE__ */ new Map();
      for (let a4 = 0; a4 < e5.length; a4++) s4 = e5[a4], i4 = s4[t4], r4.has(i4) ? n3 = r4.get(i4) : r4.set(i4, n3 = []), n3.push(s4);
      return Array.from(r4);
    }(this.appSegments, "type");
    this.mergedAppSegments = e4.map(([e5, t4]) => {
      let s4 = y2.get(e5, this.options);
      if (s4.handleMultiSegments) {
        return { type: e5, chunk: s4.handleMultiSegments(t4) };
      }
      return t4[0];
    });
  }
  getSegment(e4) {
    return this.appSegments.find((t4) => t4.type === e4);
  }
  async getOrFindSegment(e4) {
    let t4 = this.getSegment(e4);
    return void 0 === t4 && (await this.findAppSegments(0, [e4]), t4 = this.getSegment(e4)), t4;
  }
};
e2(ee2, "type", "jpeg"), m2.set("jpeg", ee2);
var te = [void 0, 1, 1, 2, 4, 8, 1, 1, 2, 4, 8, 4, 8, 4];
var se = class extends J2 {
  parseHeader() {
    var e4 = this.chunk.getUint16();
    18761 === e4 ? this.le = true : 19789 === e4 && (this.le = false), this.chunk.le = this.le, this.headerParsed = true;
  }
  parseTags(e4, t4, s4 = /* @__PURE__ */ new Map()) {
    let { pick: i4, skip: n3 } = this.options[t4];
    i4 = new Set(i4);
    let r4 = i4.size > 0, a4 = 0 === n3.size, h4 = this.chunk.getUint16(e4);
    e4 += 2;
    for (let f4 = 0; f4 < h4; f4++) {
      let h5 = this.chunk.getUint16(e4);
      if (r4) {
        if (i4.has(h5) && (s4.set(h5, this.parseTag(e4, h5, t4)), i4.delete(h5), 0 === i4.size)) break;
      } else !a4 && n3.has(h5) || s4.set(h5, this.parseTag(e4, h5, t4));
      e4 += 12;
    }
    return s4;
  }
  parseTag(e4, t4, s4) {
    let { chunk: i4 } = this, n3 = i4.getUint16(e4 + 2), r4 = i4.getUint32(e4 + 4), a4 = te[n3];
    if (a4 * r4 <= 4 ? e4 += 8 : e4 = i4.getUint32(e4 + 8), (n3 < 1 || n3 > 13) && l2(`Invalid TIFF value type. block: ${s4.toUpperCase()}, tag: ${t4.toString(16)}, type: ${n3}, offset ${e4}`), e4 > i4.byteLength && l2(`Invalid TIFF value offset. block: ${s4.toUpperCase()}, tag: ${t4.toString(16)}, type: ${n3}, offset ${e4} is outside of chunk size ${i4.byteLength}`), 1 === n3) return i4.getUint8Array(e4, r4);
    if (2 === n3) return "" === (h4 = function(e5) {
      for (; e5.endsWith("\0"); ) e5 = e5.slice(0, -1);
      return e5;
    }(h4 = i4.getString(e4, r4)).trim()) ? void 0 : h4;
    var h4;
    if (7 === n3) return i4.getUint8Array(e4, r4);
    if (1 === r4) return this.parseTagValue(n3, e4);
    {
      let t5 = new (function(e5) {
        switch (e5) {
          case 1:
            return Uint8Array;
          case 3:
            return Uint16Array;
          case 4:
            return Uint32Array;
          case 5:
            return Array;
          case 6:
            return Int8Array;
          case 8:
            return Int16Array;
          case 9:
            return Int32Array;
          case 10:
            return Array;
          case 11:
            return Float32Array;
          case 12:
            return Float64Array;
          default:
            return Array;
        }
      }(n3))(r4), s5 = a4;
      for (let i5 = 0; i5 < r4; i5++) t5[i5] = this.parseTagValue(n3, e4), e4 += s5;
      return t5;
    }
  }
  parseTagValue(e4, t4) {
    let { chunk: s4 } = this;
    switch (e4) {
      case 1:
        return s4.getUint8(t4);
      case 3:
        return s4.getUint16(t4);
      case 4:
        return s4.getUint32(t4);
      case 5:
        return s4.getUint32(t4) / s4.getUint32(t4 + 4);
      case 6:
        return s4.getInt8(t4);
      case 8:
        return s4.getInt16(t4);
      case 9:
        return s4.getInt32(t4);
      case 10:
        return s4.getInt32(t4) / s4.getInt32(t4 + 4);
      case 11:
        return s4.getFloat(t4);
      case 12:
        return s4.getDouble(t4);
      case 13:
        return s4.getUint32(t4);
      default:
        l2(`Invalid tiff type ${e4}`);
    }
  }
};
var ie = class extends se {
  static canHandle(e4, t4) {
    return 225 === e4.getUint8(t4 + 1) && 1165519206 === e4.getUint32(t4 + 4) && 0 === e4.getUint16(t4 + 8);
  }
  async parse() {
    this.parseHeader();
    let { options: e4 } = this;
    return e4.ifd0.enabled && await this.parseIfd0Block(), e4.exif.enabled && await this.safeParse("parseExifBlock"), e4.gps.enabled && await this.safeParse("parseGpsBlock"), e4.interop.enabled && await this.safeParse("parseInteropBlock"), e4.ifd1.enabled && await this.safeParse("parseThumbnailBlock"), this.createOutput();
  }
  safeParse(e4) {
    let t4 = this[e4]();
    return void 0 !== t4.catch && (t4 = t4.catch(this.handleError)), t4;
  }
  findIfd0Offset() {
    void 0 === this.ifd0Offset && (this.ifd0Offset = this.chunk.getUint32(4));
  }
  findIfd1Offset() {
    if (void 0 === this.ifd1Offset) {
      this.findIfd0Offset();
      let e4 = this.chunk.getUint16(this.ifd0Offset), t4 = this.ifd0Offset + 2 + 12 * e4;
      this.ifd1Offset = this.chunk.getUint32(t4);
    }
  }
  parseBlock(e4, t4) {
    let s4 = /* @__PURE__ */ new Map();
    return this[t4] = s4, this.parseTags(e4, t4, s4), s4;
  }
  async parseIfd0Block() {
    if (this.ifd0) return;
    let { file: e4 } = this;
    this.findIfd0Offset(), this.ifd0Offset < 8 && l2("Malformed EXIF data"), !e4.chunked && this.ifd0Offset > e4.byteLength && l2(`IFD0 offset points to outside of file.
this.ifd0Offset: ${this.ifd0Offset}, file.byteLength: ${e4.byteLength}`), e4.tiff && await e4.ensureChunk(this.ifd0Offset, o2(this.options));
    let t4 = this.parseBlock(this.ifd0Offset, "ifd0");
    return 0 !== t4.size ? (this.exifOffset = t4.get(34665), this.interopOffset = t4.get(40965), this.gpsOffset = t4.get(34853), this.xmp = t4.get(700), this.iptc = t4.get(33723), this.icc = t4.get(34675), this.options.sanitize && (t4.delete(34665), t4.delete(40965), t4.delete(34853), t4.delete(700), t4.delete(33723), t4.delete(34675)), t4) : void 0;
  }
  async parseExifBlock() {
    if (this.exif) return;
    if (this.ifd0 || await this.parseIfd0Block(), void 0 === this.exifOffset) return;
    this.file.tiff && await this.file.ensureChunk(this.exifOffset, o2(this.options));
    let e4 = this.parseBlock(this.exifOffset, "exif");
    return this.interopOffset || (this.interopOffset = e4.get(40965)), this.makerNote = e4.get(37500), this.userComment = e4.get(37510), this.options.sanitize && (e4.delete(40965), e4.delete(37500), e4.delete(37510)), this.unpack(e4, 41728), this.unpack(e4, 41729), e4;
  }
  unpack(e4, t4) {
    let s4 = e4.get(t4);
    s4 && 1 === s4.length && e4.set(t4, s4[0]);
  }
  async parseGpsBlock() {
    if (this.gps) return;
    if (this.ifd0 || await this.parseIfd0Block(), void 0 === this.gpsOffset) return;
    let e4 = this.parseBlock(this.gpsOffset, "gps");
    return e4 && e4.has(2) && e4.has(4) && (e4.set("latitude", ne(...e4.get(2), e4.get(1))), e4.set("longitude", ne(...e4.get(4), e4.get(3)))), e4;
  }
  async parseInteropBlock() {
    if (!this.interop && (this.ifd0 || await this.parseIfd0Block(), void 0 !== this.interopOffset || this.exif || await this.parseExifBlock(), void 0 !== this.interopOffset)) return this.parseBlock(this.interopOffset, "interop");
  }
  async parseThumbnailBlock(e4 = false) {
    if (!this.ifd1 && !this.ifd1Parsed && (!this.options.mergeOutput || e4)) return this.findIfd1Offset(), this.ifd1Offset > 0 && (this.parseBlock(this.ifd1Offset, "ifd1"), this.ifd1Parsed = true), this.ifd1;
  }
  async extractThumbnail() {
    if (this.headerParsed || this.parseHeader(), this.ifd1Parsed || await this.parseThumbnailBlock(true), void 0 === this.ifd1) return;
    let e4 = this.ifd1.get(513), t4 = this.ifd1.get(514);
    return this.chunk.getUint8Array(e4, t4);
  }
  get image() {
    return this.ifd0;
  }
  get thumbnail() {
    return this.ifd1;
  }
  createOutput() {
    let e4, t4, s4, i4 = {};
    for (t4 of P2) if (e4 = this[t4], !f2(e4)) if (s4 = this.canTranslate ? this.translateBlock(e4, t4) : Object.fromEntries(e4), this.options.mergeOutput) {
      if ("ifd1" === t4) continue;
      Object.assign(i4, s4);
    } else i4[t4] = s4;
    return this.makerNote && (i4.makerNote = this.makerNote), this.userComment && (i4.userComment = this.userComment), i4;
  }
  assignToOutput(e4, t4) {
    if (this.globalOptions.mergeOutput) Object.assign(e4, t4);
    else for (let [s4, i4] of Object.entries(t4)) this.assignObjectToOutput(e4, s4, i4);
  }
};
function ne(e4, t4, s4, i4) {
  var n3 = e4 + t4 / 60 + s4 / 3600;
  return "S" !== i4 && "W" !== i4 || (n3 *= -1), n3;
}
e2(ie, "type", "tiff"), e2(ie, "headerLength", 10), y2.set("tiff", ie);
var re = Object.freeze({ __proto__: null, default: G, Exifr: H2, fileParsers: m2, segmentParsers: y2, fileReaders: b2, tagKeys: B2, tagValues: V2, tagRevivers: I2, createDictionary: x2, extendDictionary: C2, fetchUrlAsArrayBuffer: S2, readBlobAsArrayBuffer: A2, chunkedProps: L2, otherSegments: T2, segments: z2, tiffBlocks: P2, segmentsAndBlocks: F2, tiffExtractables: j2, inheritables: E2, allFormatters: M2, Options: R, parse: Y });
var ae = { ifd0: false, ifd1: false, exif: false, gps: false, interop: false, sanitize: false, reviveValues: true, translateKeys: false, translateValues: false, mergeOutput: false };
var he = Object.assign({}, ae, { firstChunkSize: 4e4, gps: [1, 2, 3, 4] });
var le = Object.assign({}, ae, { tiff: false, ifd1: true, mergeOutput: false });
var de = Object.assign({}, ae, { firstChunkSize: 4e4, ifd0: [274] });
async function ce(e4) {
  let t4 = new H2(de);
  await t4.read(e4);
  let s4 = await t4.parse();
  if (s4 && s4.ifd0) return s4.ifd0[274];
}
var pe = Object.freeze({ 1: { dimensionSwapped: false, scaleX: 1, scaleY: 1, deg: 0, rad: 0 }, 2: { dimensionSwapped: false, scaleX: -1, scaleY: 1, deg: 0, rad: 0 }, 3: { dimensionSwapped: false, scaleX: 1, scaleY: 1, deg: 180, rad: 180 * Math.PI / 180 }, 4: { dimensionSwapped: false, scaleX: -1, scaleY: 1, deg: 180, rad: 180 * Math.PI / 180 }, 5: { dimensionSwapped: true, scaleX: 1, scaleY: -1, deg: 90, rad: 90 * Math.PI / 180 }, 6: { dimensionSwapped: true, scaleX: 1, scaleY: 1, deg: 90, rad: 90 * Math.PI / 180 }, 7: { dimensionSwapped: true, scaleX: 1, scaleY: -1, deg: 270, rad: 270 * Math.PI / 180 }, 8: { dimensionSwapped: true, scaleX: 1, scaleY: 1, deg: 270, rad: 270 * Math.PI / 180 } });
var ge = true;
var me = true;
if ("object" == typeof navigator) {
  let e4 = navigator.userAgent;
  if (e4.includes("iPad") || e4.includes("iPhone")) {
    let t4 = e4.match(/OS (\d+)_(\d+)/);
    if (t4) {
      let [, e5, s4] = t4, i4 = Number(e5) + 0.1 * Number(s4);
      ge = i4 < 13.4, me = false;
    }
  } else if (e4.includes("OS X 10")) {
    let [, t4] = e4.match(/OS X 10[_.](\d+)/);
    ge = me = Number(t4) < 15;
  }
  if (e4.includes("Chrome/")) {
    let [, t4] = e4.match(/Chrome\/(\d+)/);
    ge = me = Number(t4) < 81;
  } else if (e4.includes("Firefox/")) {
    let [, t4] = e4.match(/Firefox\/(\d+)/);
    ge = me = Number(t4) < 77;
  }
}
async function ye(e4) {
  let t4 = await ce(e4);
  return Object.assign({ canvas: ge, css: me }, pe[t4]);
}
var be = class extends c2 {
  constructor(...t4) {
    super(...t4), e2(this, "ranges", new we()), 0 !== this.byteLength && this.ranges.add(0, this.byteLength);
  }
  _tryExtend(e4, t4, s4) {
    if (0 === e4 && 0 === this.byteLength && s4) {
      let e5 = new DataView(s4.buffer || s4, s4.byteOffset, s4.byteLength);
      this._swapDataView(e5);
    } else {
      let s5 = e4 + t4;
      if (s5 > this.byteLength) {
        let { dataView: e5 } = this._extend(s5);
        this._swapDataView(e5);
      }
    }
  }
  _extend(e4) {
    let t4;
    t4 = a2 ? r2.allocUnsafe(e4) : new Uint8Array(e4);
    let s4 = new DataView(t4.buffer, t4.byteOffset, t4.byteLength);
    return t4.set(new Uint8Array(this.buffer, this.byteOffset, this.byteLength), 0), { uintView: t4, dataView: s4 };
  }
  subarray(e4, t4, s4 = false) {
    return t4 = t4 || this._lengthToEnd(e4), s4 && this._tryExtend(e4, t4), this.ranges.add(e4, t4), super.subarray(e4, t4);
  }
  set(e4, t4, s4 = false) {
    s4 && this._tryExtend(t4, e4.byteLength, e4);
    let i4 = super.set(e4, t4);
    return this.ranges.add(t4, i4.byteLength), i4;
  }
  async ensureChunk(e4, t4) {
    this.chunked && (this.ranges.available(e4, t4) || await this.readChunk(e4, t4));
  }
  available(e4, t4) {
    return this.ranges.available(e4, t4);
  }
};
var we = class {
  constructor() {
    e2(this, "list", []);
  }
  get length() {
    return this.list.length;
  }
  add(e4, t4, s4 = 0) {
    let i4 = e4 + t4, n3 = this.list.filter((t5) => ke(e4, t5.offset, i4) || ke(e4, t5.end, i4));
    if (n3.length > 0) {
      e4 = Math.min(e4, ...n3.map((e5) => e5.offset)), i4 = Math.max(i4, ...n3.map((e5) => e5.end)), t4 = i4 - e4;
      let s5 = n3.shift();
      s5.offset = e4, s5.length = t4, s5.end = i4, this.list = this.list.filter((e5) => !n3.includes(e5));
    } else this.list.push({ offset: e4, length: t4, end: i4 });
  }
  available(e4, t4) {
    let s4 = e4 + t4;
    return this.list.some((t5) => t5.offset <= e4 && s4 <= t5.end);
  }
};
function ke(e4, t4, s4) {
  return e4 <= t4 && t4 <= s4;
}
var Oe = class extends be {
  constructor(t4, s4) {
    super(0), e2(this, "chunksRead", 0), this.input = t4, this.options = s4;
  }
  async readWhole() {
    this.chunked = false, await this.readChunk(this.nextChunkOffset);
  }
  async readChunked() {
    this.chunked = true, await this.readChunk(0, this.options.firstChunkSize);
  }
  async readNextChunk(e4 = this.nextChunkOffset) {
    if (this.fullyRead) return this.chunksRead++, false;
    let t4 = this.options.chunkSize, s4 = await this.readChunk(e4, t4);
    return !!s4 && s4.byteLength === t4;
  }
  async readChunk(e4, t4) {
    if (this.chunksRead++, 0 !== (t4 = this.safeWrapAddress(e4, t4))) return this._readChunk(e4, t4);
  }
  safeWrapAddress(e4, t4) {
    return void 0 !== this.size && e4 + t4 > this.size ? Math.max(0, this.size - e4) : t4;
  }
  get nextChunkOffset() {
    if (0 !== this.ranges.list.length) return this.ranges.list[0].length;
  }
  get canReadNextChunk() {
    return this.chunksRead < this.options.chunkLimit;
  }
  get fullyRead() {
    return void 0 !== this.size && this.nextChunkOffset === this.size;
  }
  read() {
    return this.options.chunked ? this.readChunked() : this.readWhole();
  }
  close() {
  }
};
b2.set("blob", class extends Oe {
  async readWhole() {
    this.chunked = false;
    let e4 = await A2(this.input);
    this._swapArrayBuffer(e4);
  }
  readChunked() {
    return this.chunked = true, this.size = this.input.size, super.readChunked();
  }
  async _readChunk(e4, t4) {
    let s4 = t4 ? e4 + t4 : void 0, i4 = this.input.slice(e4, s4), n3 = await A2(i4);
    return this.set(n3, e4, true);
  }
});

// node_modules/@uppy/thumbnail-generator/lib/locale.js
var locale_default3 = {
  strings: {
    generatingThumbnails: "Generating thumbnails..."
  }
};

// node_modules/@uppy/thumbnail-generator/lib/index.js
var packageJson5 = {
  "version": "3.1.0"
};
function canvasToBlob(canvas, type, quality) {
  try {
    canvas.getContext("2d").getImageData(0, 0, 1, 1);
  } catch (err) {
    if (err.code === 18) {
      return Promise.reject(new Error("cannot read image, probably an svg with external resources"));
    }
  }
  if (canvas.toBlob) {
    return new Promise((resolve) => {
      canvas.toBlob(resolve, type, quality);
    }).then((blob) => {
      if (blob === null) {
        throw new Error("cannot read image, probably an svg with external resources");
      }
      return blob;
    });
  }
  return Promise.resolve().then(() => {
    return dataURItoBlob_default(canvas.toDataURL(type, quality), {});
  }).then((blob) => {
    if (blob === null) {
      throw new Error("could not extract blob, probably an old browser");
    }
    return blob;
  });
}
function rotateImage(image, translate) {
  let w4 = image.width;
  let h4 = image.height;
  if (translate.deg === 90 || translate.deg === 270) {
    w4 = image.height;
    h4 = image.width;
  }
  const canvas = document.createElement("canvas");
  canvas.width = w4;
  canvas.height = h4;
  const context = canvas.getContext("2d");
  context.translate(w4 / 2, h4 / 2);
  if (translate.canvas) {
    context.rotate(translate.rad);
    context.scale(translate.scaleX, translate.scaleY);
  }
  context.drawImage(image, -image.width / 2, -image.height / 2, image.width, image.height);
  return canvas;
}
function protect(image) {
  const ratio = image.width / image.height;
  const maxSquare = 5e6;
  const maxSize = 4096;
  let maxW = Math.floor(Math.sqrt(maxSquare * ratio));
  let maxH = Math.floor(maxSquare / Math.sqrt(maxSquare * ratio));
  if (maxW > maxSize) {
    maxW = maxSize;
    maxH = Math.round(maxW / ratio);
  }
  if (maxH > maxSize) {
    maxH = maxSize;
    maxW = Math.round(ratio * maxH);
  }
  if (image.width > maxW) {
    const canvas = document.createElement("canvas");
    canvas.width = maxW;
    canvas.height = maxH;
    canvas.getContext("2d").drawImage(image, 0, 0, maxW, maxH);
    return canvas;
  }
  return image;
}
var defaultOptions3 = {
  thumbnailWidth: null,
  thumbnailHeight: null,
  thumbnailType: "image/jpeg",
  waitForThumbnailsBeforeUpload: false,
  lazy: false
};
var ThumbnailGenerator = class extends UIPlugin_default {
  constructor(uppy, opts) {
    super(uppy, {
      ...defaultOptions3,
      ...opts
    });
    this.onFileAdded = (file) => {
      if (!file.preview && file.data && isPreviewSupported(file.type) && !file.isRemote) {
        this.addToQueue(file.id);
      }
    };
    this.onCancelRequest = (file) => {
      const index = this.queue.indexOf(file.id);
      if (index !== -1) {
        this.queue.splice(index, 1);
      }
    };
    this.onFileRemoved = (file) => {
      const index = this.queue.indexOf(file.id);
      if (index !== -1) {
        this.queue.splice(index, 1);
      }
      if (file.preview && isObjectURL(file.preview)) {
        URL.revokeObjectURL(file.preview);
      }
    };
    this.onRestored = () => {
      const restoredFiles = this.uppy.getFiles().filter((file) => file.isRestored);
      restoredFiles.forEach((file) => {
        if (!file.preview || isObjectURL(file.preview)) {
          this.addToQueue(file.id);
        }
      });
    };
    this.onAllFilesRemoved = () => {
      this.queue = [];
    };
    this.waitUntilAllProcessed = (fileIDs) => {
      fileIDs.forEach((fileID) => {
        const file = this.uppy.getFile(fileID);
        this.uppy.emit("preprocess-progress", file, {
          mode: "indeterminate",
          message: this.i18n("generatingThumbnails")
        });
      });
      const emitPreprocessCompleteForAll = () => {
        fileIDs.forEach((fileID) => {
          const file = this.uppy.getFile(fileID);
          this.uppy.emit("preprocess-complete", file);
        });
      };
      return new Promise((resolve) => {
        if (this.queueProcessing) {
          this.uppy.once("thumbnail:all-generated", () => {
            emitPreprocessCompleteForAll();
            resolve();
          });
        } else {
          emitPreprocessCompleteForAll();
          resolve();
        }
      });
    };
    this.type = "modifier";
    this.id = this.opts.id || "ThumbnailGenerator";
    this.title = "Thumbnail Generator";
    this.queue = [];
    this.queueProcessing = false;
    this.defaultThumbnailDimension = 200;
    this.thumbnailType = this.opts.thumbnailType;
    this.defaultLocale = locale_default3;
    this.i18nInit();
    if (this.opts.lazy && this.opts.waitForThumbnailsBeforeUpload) {
      throw new Error("ThumbnailGenerator: The `lazy` and `waitForThumbnailsBeforeUpload` options are mutually exclusive. Please ensure at most one of them is set to `true`.");
    }
  }
  createThumbnail(file, targetWidth, targetHeight) {
    const originalUrl = URL.createObjectURL(file.data);
    const onload = new Promise((resolve, reject) => {
      const image = new Image();
      image.src = originalUrl;
      image.addEventListener("load", () => {
        URL.revokeObjectURL(originalUrl);
        resolve(image);
      });
      image.addEventListener("error", (event) => {
        URL.revokeObjectURL(originalUrl);
        reject(event.error || new Error("Could not create thumbnail"));
      });
    });
    const orientationPromise = ye(file.data).catch(() => 1);
    return Promise.all([onload, orientationPromise]).then((_ref) => {
      let [image, orientation] = _ref;
      const dimensions = this.getProportionalDimensions(image, targetWidth, targetHeight, orientation.deg);
      const rotatedImage = rotateImage(image, orientation);
      const resizedImage = this.resizeImage(rotatedImage, dimensions.width, dimensions.height);
      return canvasToBlob(resizedImage, this.thumbnailType, 80);
    }).then((blob) => {
      return URL.createObjectURL(blob);
    });
  }
  /**
   * Get the new calculated dimensions for the given image and a target width
   * or height. If both width and height are given, only width is taken into
   * account. If neither width nor height are given, the default dimension
   * is used.
   */
  getProportionalDimensions(img, width, height, deg) {
    let aspect = img.width / img.height;
    if (deg === 90 || deg === 270) {
      aspect = img.height / img.width;
    }
    if (width != null) {
      return {
        width,
        height: Math.round(width / aspect)
      };
    }
    if (height != null) {
      return {
        width: Math.round(height * aspect),
        height
      };
    }
    return {
      width: this.defaultThumbnailDimension,
      height: Math.round(this.defaultThumbnailDimension / aspect)
    };
  }
  /**
   * Resize an image to the target `width` and `height`.
   *
   * Returns a Canvas with the resized image on it.
   */
  // eslint-disable-next-line class-methods-use-this
  resizeImage(image, targetWidth, targetHeight) {
    let img = protect(image);
    let steps = Math.ceil(Math.log2(img.width / targetWidth));
    if (steps < 1) {
      steps = 1;
    }
    let sW = targetWidth * 2 ** (steps - 1);
    let sH = targetHeight * 2 ** (steps - 1);
    const x3 = 2;
    while (steps--) {
      const canvas = document.createElement("canvas");
      canvas.width = sW;
      canvas.height = sH;
      canvas.getContext("2d").drawImage(img, 0, 0, sW, sH);
      img = canvas;
      sW = Math.round(sW / x3);
      sH = Math.round(sH / x3);
    }
    return img;
  }
  /**
   * Set the preview URL for a file.
   */
  setPreviewURL(fileID, preview) {
    this.uppy.setFileState(fileID, {
      preview
    });
  }
  addToQueue(fileID) {
    this.queue.push(fileID);
    if (this.queueProcessing === false) {
      this.processQueue();
    }
  }
  processQueue() {
    this.queueProcessing = true;
    if (this.queue.length > 0) {
      const current = this.uppy.getFile(this.queue.shift());
      if (!current) {
        this.uppy.log("[ThumbnailGenerator] file was removed before a thumbnail could be generated, but not removed from the queue. This is probably a bug", "error");
        return Promise.resolve();
      }
      return this.requestThumbnail(current).catch(() => {
      }).then(() => this.processQueue());
    }
    this.queueProcessing = false;
    this.uppy.log("[ThumbnailGenerator] Emptied thumbnail queue");
    this.uppy.emit("thumbnail:all-generated");
    return Promise.resolve();
  }
  requestThumbnail(file) {
    if (isPreviewSupported(file.type) && !file.isRemote) {
      return this.createThumbnail(file, this.opts.thumbnailWidth, this.opts.thumbnailHeight).then((preview) => {
        this.setPreviewURL(file.id, preview);
        this.uppy.log(`[ThumbnailGenerator] Generated thumbnail for ${file.id}`);
        this.uppy.emit("thumbnail:generated", this.uppy.getFile(file.id), preview);
      }).catch((err) => {
        this.uppy.log(`[ThumbnailGenerator] Failed thumbnail for ${file.id}:`, "warning");
        this.uppy.log(err, "warning");
        this.uppy.emit("thumbnail:error", this.uppy.getFile(file.id), err);
      });
    }
    return Promise.resolve();
  }
  install() {
    this.uppy.on("file-removed", this.onFileRemoved);
    this.uppy.on("cancel-all", this.onAllFilesRemoved);
    if (this.opts.lazy) {
      this.uppy.on("thumbnail:request", this.onFileAdded);
      this.uppy.on("thumbnail:cancel", this.onCancelRequest);
    } else {
      this.uppy.on("thumbnail:request", this.onFileAdded);
      this.uppy.on("file-added", this.onFileAdded);
      this.uppy.on("restored", this.onRestored);
    }
    if (this.opts.waitForThumbnailsBeforeUpload) {
      this.uppy.addPreProcessor(this.waitUntilAllProcessed);
    }
  }
  uninstall() {
    this.uppy.off("file-removed", this.onFileRemoved);
    this.uppy.off("cancel-all", this.onAllFilesRemoved);
    if (this.opts.lazy) {
      this.uppy.off("thumbnail:request", this.onFileAdded);
      this.uppy.off("thumbnail:cancel", this.onCancelRequest);
    } else {
      this.uppy.off("thumbnail:request", this.onFileAdded);
      this.uppy.off("file-added", this.onFileAdded);
      this.uppy.off("restored", this.onRestored);
    }
    if (this.opts.waitForThumbnailsBeforeUpload) {
      this.uppy.removePreProcessor(this.waitUntilAllProcessed);
    }
  }
};
ThumbnailGenerator.VERSION = packageJson5.version;

// node_modules/@uppy/utils/lib/findAllDOMElements.js
function findAllDOMElements(element) {
  if (typeof element === "string") {
    const elements = document.querySelectorAll(element);
    return elements.length === 0 ? null : Array.from(elements);
  }
  if (typeof element === "object" && isDOMElement(element)) {
    return [element];
  }
  return null;
}
var findAllDOMElements_default = findAllDOMElements;

// node_modules/@uppy/utils/lib/toArray.js
var toArray_default = Array.from;

// node_modules/@uppy/utils/lib/getDroppedFiles/utils/webkitGetAsEntryApi/getFilesAndDirectoriesFromDirectory.js
function getFilesAndDirectoriesFromDirectory(directoryReader, oldEntries, logDropError, _ref) {
  let {
    onSuccess
  } = _ref;
  directoryReader.readEntries(
    (entries) => {
      const newEntries = [...oldEntries, ...entries];
      if (entries.length) {
        queueMicrotask(() => {
          getFilesAndDirectoriesFromDirectory(directoryReader, newEntries, logDropError, {
            onSuccess
          });
        });
      } else {
        onSuccess(newEntries);
      }
    },
    // Make sure we resolve on error anyway, it's fine if only one directory couldn't be parsed!
    (error) => {
      logDropError(error);
      onSuccess(oldEntries);
    }
  );
}

// node_modules/@uppy/utils/lib/getDroppedFiles/utils/webkitGetAsEntryApi/index.js
function getAsFileSystemHandleFromEntry(entry, logDropError) {
  if (entry == null) return entry;
  return {
    kind: (
      // eslint-disable-next-line no-nested-ternary
      entry.isFile ? "file" : entry.isDirectory ? "directory" : void 0
    ),
    name: entry.name,
    getFile() {
      return new Promise((resolve, reject) => entry.file(resolve, reject));
    },
    async *values() {
      const directoryReader = entry.createReader();
      const entries = await new Promise((resolve) => {
        getFilesAndDirectoriesFromDirectory(directoryReader, [], logDropError, {
          onSuccess: (dirEntries) => resolve(dirEntries.map((file) => getAsFileSystemHandleFromEntry(file, logDropError)))
        });
      });
      yield* entries;
    },
    isSameEntry: void 0
  };
}
function createPromiseToAddFileOrParseDirectory(entry, relativePath, lastResortFile) {
  try {
    if (lastResortFile === void 0) {
      lastResortFile = void 0;
    }
    return async function* () {
      const getNextRelativePath = () => `${relativePath}/${entry.name}`;
      if (entry.kind === "file") {
        const file = await entry.getFile();
        if (file != null) {
          ;
          file.relativePath = relativePath ? getNextRelativePath() : null;
          yield file;
        } else if (lastResortFile != null) yield lastResortFile;
      } else if (entry.kind === "directory") {
        for await (const handle of entry.values()) {
          yield* createPromiseToAddFileOrParseDirectory(handle, relativePath ? getNextRelativePath() : entry.name);
        }
      } else if (lastResortFile != null) yield lastResortFile;
    }();
  } catch (e4) {
    return Promise.reject(e4);
  }
}
async function* getFilesFromDataTransfer(dataTransfer, logDropError) {
  const fileSystemHandles = await Promise.all(Array.from(dataTransfer.items, async (item) => {
    var _fileSystemHandle;
    let fileSystemHandle;
    const getAsEntry = () => typeof item.getAsEntry === "function" ? item.getAsEntry() : item.webkitGetAsEntry();
    (_fileSystemHandle = fileSystemHandle) != null ? _fileSystemHandle : fileSystemHandle = getAsFileSystemHandleFromEntry(getAsEntry(), logDropError);
    return {
      fileSystemHandle,
      lastResortFile: item.getAsFile()
      // can be used as a fallback in case other methods fail
    };
  }));
  for (const {
    lastResortFile,
    fileSystemHandle
  } of fileSystemHandles) {
    if (fileSystemHandle != null) {
      try {
        yield* createPromiseToAddFileOrParseDirectory(fileSystemHandle, "", lastResortFile);
      } catch (err) {
        if (lastResortFile != null) {
          yield lastResortFile;
        } else {
          logDropError(err);
        }
      }
    } else if (lastResortFile != null) yield lastResortFile;
  }
}

// node_modules/@uppy/utils/lib/getDroppedFiles/utils/fallbackApi.js
function fallbackApi(dataTransfer) {
  const files = toArray_default(dataTransfer.files);
  return Promise.resolve(files);
}

// node_modules/@uppy/utils/lib/getDroppedFiles/index.js
async function getDroppedFiles(dataTransfer, options) {
  var _options$logDropError;
  const logDropError = (_options$logDropError = options == null ? void 0 : options.logDropError) != null ? _options$logDropError : Function.prototype;
  try {
    const accumulator = [];
    for await (const file of getFilesFromDataTransfer(dataTransfer, logDropError)) {
      accumulator.push(file);
    }
    return accumulator;
  } catch {
    return fallbackApi(dataTransfer);
  }
}

// node_modules/eventemitter3/index.mjs
var import_index = __toESM(require_eventemitter3(), 1);

// node_modules/p-timeout/index.js
var TimeoutError = class extends Error {
  constructor(message) {
    super(message);
    this.name = "TimeoutError";
  }
};
var AbortError = class extends Error {
  constructor(message) {
    super();
    this.name = "AbortError";
    this.message = message;
  }
};
var getDOMException = (errorMessage) => globalThis.DOMException === void 0 ? new AbortError(errorMessage) : new DOMException(errorMessage);
var getAbortedReason = (signal) => {
  const reason = signal.reason === void 0 ? getDOMException("This operation was aborted.") : signal.reason;
  return reason instanceof Error ? reason : getDOMException(reason);
};
function pTimeout(promise, milliseconds, fallback, options) {
  let timer;
  const cancelablePromise = new Promise((resolve, reject) => {
    if (typeof milliseconds !== "number" || Math.sign(milliseconds) !== 1) {
      throw new TypeError(`Expected \`milliseconds\` to be a positive number, got \`${milliseconds}\``);
    }
    if (milliseconds === Number.POSITIVE_INFINITY) {
      resolve(promise);
      return;
    }
    options = {
      customTimers: { setTimeout, clearTimeout },
      ...options
    };
    if (options.signal) {
      const { signal } = options;
      if (signal.aborted) {
        reject(getAbortedReason(signal));
      }
      signal.addEventListener("abort", () => {
        reject(getAbortedReason(signal));
      });
    }
    timer = options.customTimers.setTimeout.call(void 0, () => {
      if (typeof fallback === "function") {
        try {
          resolve(fallback());
        } catch (error) {
          reject(error);
        }
        return;
      }
      const message = typeof fallback === "string" ? fallback : `Promise timed out after ${milliseconds} milliseconds`;
      const timeoutError = fallback instanceof Error ? fallback : new TimeoutError(message);
      if (typeof promise.cancel === "function") {
        promise.cancel();
      }
      reject(timeoutError);
    }, milliseconds);
    (async () => {
      try {
        resolve(await promise);
      } catch (error) {
        reject(error);
      } finally {
        options.customTimers.clearTimeout.call(void 0, timer);
      }
    })();
  });
  cancelablePromise.clear = () => {
    clearTimeout(timer);
    timer = void 0;
  };
  return cancelablePromise;
}

// node_modules/p-queue/dist/lower-bound.js
function lowerBound(array, value, comparator) {
  let first = 0;
  let count = array.length;
  while (count > 0) {
    const step = Math.trunc(count / 2);
    let it = first + step;
    if (comparator(array[it], value) <= 0) {
      first = ++it;
      count -= step + 1;
    } else {
      count = step;
    }
  }
  return first;
}

// node_modules/p-queue/dist/priority-queue.js
var __classPrivateFieldGet = function(receiver, state, kind, f4) {
  if (kind === "a" && !f4) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f4 : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f4 : kind === "a" ? f4.call(receiver) : f4 ? f4.value : state.get(receiver);
};
var _PriorityQueue_queue;
var PriorityQueue = class {
  constructor() {
    _PriorityQueue_queue.set(this, []);
  }
  enqueue(run, options) {
    options = {
      priority: 0,
      ...options
    };
    const element = {
      priority: options.priority,
      run
    };
    if (this.size && __classPrivateFieldGet(this, _PriorityQueue_queue, "f")[this.size - 1].priority >= options.priority) {
      __classPrivateFieldGet(this, _PriorityQueue_queue, "f").push(element);
      return;
    }
    const index = lowerBound(__classPrivateFieldGet(this, _PriorityQueue_queue, "f"), element, (a4, b3) => b3.priority - a4.priority);
    __classPrivateFieldGet(this, _PriorityQueue_queue, "f").splice(index, 0, element);
  }
  dequeue() {
    const item = __classPrivateFieldGet(this, _PriorityQueue_queue, "f").shift();
    return item === null || item === void 0 ? void 0 : item.run;
  }
  filter(options) {
    return __classPrivateFieldGet(this, _PriorityQueue_queue, "f").filter((element) => element.priority === options.priority).map((element) => element.run);
  }
  get size() {
    return __classPrivateFieldGet(this, _PriorityQueue_queue, "f").length;
  }
};
_PriorityQueue_queue = /* @__PURE__ */ new WeakMap();
var priority_queue_default = PriorityQueue;

// node_modules/p-queue/dist/index.js
var __classPrivateFieldSet = function(receiver, state, value, kind, f4) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f4) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f4 : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f4.call(receiver, value) : f4 ? f4.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet2 = function(receiver, state, kind, f4) {
  if (kind === "a" && !f4) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f4 : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f4 : kind === "a" ? f4.call(receiver) : f4 ? f4.value : state.get(receiver);
};
var _PQueue_instances;
var _PQueue_carryoverConcurrencyCount;
var _PQueue_isIntervalIgnored;
var _PQueue_intervalCount;
var _PQueue_intervalCap;
var _PQueue_interval;
var _PQueue_intervalEnd;
var _PQueue_intervalId;
var _PQueue_timeoutId;
var _PQueue_queue;
var _PQueue_queueClass;
var _PQueue_pending;
var _PQueue_concurrency;
var _PQueue_isPaused;
var _PQueue_throwOnTimeout;
var _PQueue_doesIntervalAllowAnother_get;
var _PQueue_doesConcurrentAllowAnother_get;
var _PQueue_next;
var _PQueue_onResumeInterval;
var _PQueue_isIntervalPaused_get;
var _PQueue_tryToStartAnother;
var _PQueue_initializeIntervalIfNeeded;
var _PQueue_onInterval;
var _PQueue_processQueue;
var _PQueue_throwOnAbort;
var _PQueue_onEvent;
var AbortError2 = class extends Error {
};
var PQueue = class extends import_index.default {
  // TODO: The `throwOnTimeout` option should affect the return types of `add()` and `addAll()`
  constructor(options) {
    var _a, _b, _c, _d;
    super();
    _PQueue_instances.add(this);
    _PQueue_carryoverConcurrencyCount.set(this, void 0);
    _PQueue_isIntervalIgnored.set(this, void 0);
    _PQueue_intervalCount.set(this, 0);
    _PQueue_intervalCap.set(this, void 0);
    _PQueue_interval.set(this, void 0);
    _PQueue_intervalEnd.set(this, 0);
    _PQueue_intervalId.set(this, void 0);
    _PQueue_timeoutId.set(this, void 0);
    _PQueue_queue.set(this, void 0);
    _PQueue_queueClass.set(this, void 0);
    _PQueue_pending.set(this, 0);
    _PQueue_concurrency.set(this, void 0);
    _PQueue_isPaused.set(this, void 0);
    _PQueue_throwOnTimeout.set(this, void 0);
    Object.defineProperty(this, "timeout", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    options = {
      carryoverConcurrencyCount: false,
      intervalCap: Number.POSITIVE_INFINITY,
      interval: 0,
      concurrency: Number.POSITIVE_INFINITY,
      autoStart: true,
      queueClass: priority_queue_default,
      ...options
    };
    if (!(typeof options.intervalCap === "number" && options.intervalCap >= 1)) {
      throw new TypeError(`Expected \`intervalCap\` to be a number from 1 and up, got \`${(_b = (_a = options.intervalCap) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : ""}\` (${typeof options.intervalCap})`);
    }
    if (options.interval === void 0 || !(Number.isFinite(options.interval) && options.interval >= 0)) {
      throw new TypeError(`Expected \`interval\` to be a finite number >= 0, got \`${(_d = (_c = options.interval) === null || _c === void 0 ? void 0 : _c.toString()) !== null && _d !== void 0 ? _d : ""}\` (${typeof options.interval})`);
    }
    __classPrivateFieldSet(this, _PQueue_carryoverConcurrencyCount, options.carryoverConcurrencyCount, "f");
    __classPrivateFieldSet(this, _PQueue_isIntervalIgnored, options.intervalCap === Number.POSITIVE_INFINITY || options.interval === 0, "f");
    __classPrivateFieldSet(this, _PQueue_intervalCap, options.intervalCap, "f");
    __classPrivateFieldSet(this, _PQueue_interval, options.interval, "f");
    __classPrivateFieldSet(this, _PQueue_queue, new options.queueClass(), "f");
    __classPrivateFieldSet(this, _PQueue_queueClass, options.queueClass, "f");
    this.concurrency = options.concurrency;
    this.timeout = options.timeout;
    __classPrivateFieldSet(this, _PQueue_throwOnTimeout, options.throwOnTimeout === true, "f");
    __classPrivateFieldSet(this, _PQueue_isPaused, options.autoStart === false, "f");
  }
  get concurrency() {
    return __classPrivateFieldGet2(this, _PQueue_concurrency, "f");
  }
  set concurrency(newConcurrency) {
    if (!(typeof newConcurrency === "number" && newConcurrency >= 1)) {
      throw new TypeError(`Expected \`concurrency\` to be a number from 1 and up, got \`${newConcurrency}\` (${typeof newConcurrency})`);
    }
    __classPrivateFieldSet(this, _PQueue_concurrency, newConcurrency, "f");
    __classPrivateFieldGet2(this, _PQueue_instances, "m", _PQueue_processQueue).call(this);
  }
  async add(function_, options = {}) {
    options = {
      timeout: this.timeout,
      throwOnTimeout: __classPrivateFieldGet2(this, _PQueue_throwOnTimeout, "f"),
      ...options
    };
    return new Promise((resolve, reject) => {
      __classPrivateFieldGet2(this, _PQueue_queue, "f").enqueue(async () => {
        var _a;
        var _b, _c;
        __classPrivateFieldSet(this, _PQueue_pending, (_b = __classPrivateFieldGet2(this, _PQueue_pending, "f"), _b++, _b), "f");
        __classPrivateFieldSet(this, _PQueue_intervalCount, (_c = __classPrivateFieldGet2(this, _PQueue_intervalCount, "f"), _c++, _c), "f");
        try {
          if ((_a = options.signal) === null || _a === void 0 ? void 0 : _a.aborted) {
            throw new AbortError2("The task was aborted.");
          }
          let operation = function_({ signal: options.signal });
          if (options.timeout) {
            operation = pTimeout(Promise.resolve(operation), options.timeout);
          }
          if (options.signal) {
            operation = Promise.race([operation, __classPrivateFieldGet2(this, _PQueue_instances, "m", _PQueue_throwOnAbort).call(this, options.signal)]);
          }
          const result = await operation;
          resolve(result);
          this.emit("completed", result);
        } catch (error) {
          if (error instanceof TimeoutError && !options.throwOnTimeout) {
            resolve();
            return;
          }
          reject(error);
          this.emit("error", error);
        } finally {
          __classPrivateFieldGet2(this, _PQueue_instances, "m", _PQueue_next).call(this);
        }
      }, options);
      this.emit("add");
      __classPrivateFieldGet2(this, _PQueue_instances, "m", _PQueue_tryToStartAnother).call(this);
    });
  }
  async addAll(functions, options) {
    return Promise.all(functions.map(async (function_) => this.add(function_, options)));
  }
  /**
  Start (or resume) executing enqueued tasks within concurrency limit. No need to call this if queue is not paused (via `options.autoStart = false` or by `.pause()` method.)
  */
  start() {
    if (!__classPrivateFieldGet2(this, _PQueue_isPaused, "f")) {
      return this;
    }
    __classPrivateFieldSet(this, _PQueue_isPaused, false, "f");
    __classPrivateFieldGet2(this, _PQueue_instances, "m", _PQueue_processQueue).call(this);
    return this;
  }
  /**
  Put queue execution on hold.
  */
  pause() {
    __classPrivateFieldSet(this, _PQueue_isPaused, true, "f");
  }
  /**
  Clear the queue.
  */
  clear() {
    __classPrivateFieldSet(this, _PQueue_queue, new (__classPrivateFieldGet2(this, _PQueue_queueClass, "f"))(), "f");
  }
  /**
      Can be called multiple times. Useful if you for example add additional items at a later time.
  
      @returns A promise that settles when the queue becomes empty.
      */
  async onEmpty() {
    if (__classPrivateFieldGet2(this, _PQueue_queue, "f").size === 0) {
      return;
    }
    await __classPrivateFieldGet2(this, _PQueue_instances, "m", _PQueue_onEvent).call(this, "empty");
  }
  /**
      @returns A promise that settles when the queue size is less than the given limit: `queue.size < limit`.
  
      If you want to avoid having the queue grow beyond a certain size you can `await queue.onSizeLessThan()` before adding a new item.
  
      Note that this only limits the number of items waiting to start. There could still be up to `concurrency` jobs already running that this call does not include in its calculation.
      */
  async onSizeLessThan(limit) {
    if (__classPrivateFieldGet2(this, _PQueue_queue, "f").size < limit) {
      return;
    }
    await __classPrivateFieldGet2(this, _PQueue_instances, "m", _PQueue_onEvent).call(this, "next", () => __classPrivateFieldGet2(this, _PQueue_queue, "f").size < limit);
  }
  /**
      The difference with `.onEmpty` is that `.onIdle` guarantees that all work from the queue has finished. `.onEmpty` merely signals that the queue is empty, but it could mean that some promises haven't completed yet.
  
      @returns A promise that settles when the queue becomes empty, and all promises have completed; `queue.size === 0 && queue.pending === 0`.
      */
  async onIdle() {
    if (__classPrivateFieldGet2(this, _PQueue_pending, "f") === 0 && __classPrivateFieldGet2(this, _PQueue_queue, "f").size === 0) {
      return;
    }
    await __classPrivateFieldGet2(this, _PQueue_instances, "m", _PQueue_onEvent).call(this, "idle");
  }
  /**
  Size of the queue, the number of queued items waiting to run.
  */
  get size() {
    return __classPrivateFieldGet2(this, _PQueue_queue, "f").size;
  }
  /**
      Size of the queue, filtered by the given options.
  
      For example, this can be used to find the number of items remaining in the queue with a specific priority level.
      */
  sizeBy(options) {
    return __classPrivateFieldGet2(this, _PQueue_queue, "f").filter(options).length;
  }
  /**
  Number of running items (no longer in the queue).
  */
  get pending() {
    return __classPrivateFieldGet2(this, _PQueue_pending, "f");
  }
  /**
  Whether the queue is currently paused.
  */
  get isPaused() {
    return __classPrivateFieldGet2(this, _PQueue_isPaused, "f");
  }
};
_PQueue_carryoverConcurrencyCount = /* @__PURE__ */ new WeakMap(), _PQueue_isIntervalIgnored = /* @__PURE__ */ new WeakMap(), _PQueue_intervalCount = /* @__PURE__ */ new WeakMap(), _PQueue_intervalCap = /* @__PURE__ */ new WeakMap(), _PQueue_interval = /* @__PURE__ */ new WeakMap(), _PQueue_intervalEnd = /* @__PURE__ */ new WeakMap(), _PQueue_intervalId = /* @__PURE__ */ new WeakMap(), _PQueue_timeoutId = /* @__PURE__ */ new WeakMap(), _PQueue_queue = /* @__PURE__ */ new WeakMap(), _PQueue_queueClass = /* @__PURE__ */ new WeakMap(), _PQueue_pending = /* @__PURE__ */ new WeakMap(), _PQueue_concurrency = /* @__PURE__ */ new WeakMap(), _PQueue_isPaused = /* @__PURE__ */ new WeakMap(), _PQueue_throwOnTimeout = /* @__PURE__ */ new WeakMap(), _PQueue_instances = /* @__PURE__ */ new WeakSet(), _PQueue_doesIntervalAllowAnother_get = function _PQueue_doesIntervalAllowAnother_get2() {
  return __classPrivateFieldGet2(this, _PQueue_isIntervalIgnored, "f") || __classPrivateFieldGet2(this, _PQueue_intervalCount, "f") < __classPrivateFieldGet2(this, _PQueue_intervalCap, "f");
}, _PQueue_doesConcurrentAllowAnother_get = function _PQueue_doesConcurrentAllowAnother_get2() {
  return __classPrivateFieldGet2(this, _PQueue_pending, "f") < __classPrivateFieldGet2(this, _PQueue_concurrency, "f");
}, _PQueue_next = function _PQueue_next2() {
  var _a;
  __classPrivateFieldSet(this, _PQueue_pending, (_a = __classPrivateFieldGet2(this, _PQueue_pending, "f"), _a--, _a), "f");
  __classPrivateFieldGet2(this, _PQueue_instances, "m", _PQueue_tryToStartAnother).call(this);
  this.emit("next");
}, _PQueue_onResumeInterval = function _PQueue_onResumeInterval2() {
  __classPrivateFieldGet2(this, _PQueue_instances, "m", _PQueue_onInterval).call(this);
  __classPrivateFieldGet2(this, _PQueue_instances, "m", _PQueue_initializeIntervalIfNeeded).call(this);
  __classPrivateFieldSet(this, _PQueue_timeoutId, void 0, "f");
}, _PQueue_isIntervalPaused_get = function _PQueue_isIntervalPaused_get2() {
  const now = Date.now();
  if (__classPrivateFieldGet2(this, _PQueue_intervalId, "f") === void 0) {
    const delay = __classPrivateFieldGet2(this, _PQueue_intervalEnd, "f") - now;
    if (delay < 0) {
      __classPrivateFieldSet(this, _PQueue_intervalCount, __classPrivateFieldGet2(this, _PQueue_carryoverConcurrencyCount, "f") ? __classPrivateFieldGet2(this, _PQueue_pending, "f") : 0, "f");
    } else {
      if (__classPrivateFieldGet2(this, _PQueue_timeoutId, "f") === void 0) {
        __classPrivateFieldSet(this, _PQueue_timeoutId, setTimeout(() => {
          __classPrivateFieldGet2(this, _PQueue_instances, "m", _PQueue_onResumeInterval).call(this);
        }, delay), "f");
      }
      return true;
    }
  }
  return false;
}, _PQueue_tryToStartAnother = function _PQueue_tryToStartAnother2() {
  if (__classPrivateFieldGet2(this, _PQueue_queue, "f").size === 0) {
    if (__classPrivateFieldGet2(this, _PQueue_intervalId, "f")) {
      clearInterval(__classPrivateFieldGet2(this, _PQueue_intervalId, "f"));
    }
    __classPrivateFieldSet(this, _PQueue_intervalId, void 0, "f");
    this.emit("empty");
    if (__classPrivateFieldGet2(this, _PQueue_pending, "f") === 0) {
      this.emit("idle");
    }
    return false;
  }
  if (!__classPrivateFieldGet2(this, _PQueue_isPaused, "f")) {
    const canInitializeInterval = !__classPrivateFieldGet2(this, _PQueue_instances, "a", _PQueue_isIntervalPaused_get);
    if (__classPrivateFieldGet2(this, _PQueue_instances, "a", _PQueue_doesIntervalAllowAnother_get) && __classPrivateFieldGet2(this, _PQueue_instances, "a", _PQueue_doesConcurrentAllowAnother_get)) {
      const job = __classPrivateFieldGet2(this, _PQueue_queue, "f").dequeue();
      if (!job) {
        return false;
      }
      this.emit("active");
      job();
      if (canInitializeInterval) {
        __classPrivateFieldGet2(this, _PQueue_instances, "m", _PQueue_initializeIntervalIfNeeded).call(this);
      }
      return true;
    }
  }
  return false;
}, _PQueue_initializeIntervalIfNeeded = function _PQueue_initializeIntervalIfNeeded2() {
  if (__classPrivateFieldGet2(this, _PQueue_isIntervalIgnored, "f") || __classPrivateFieldGet2(this, _PQueue_intervalId, "f") !== void 0) {
    return;
  }
  __classPrivateFieldSet(this, _PQueue_intervalId, setInterval(() => {
    __classPrivateFieldGet2(this, _PQueue_instances, "m", _PQueue_onInterval).call(this);
  }, __classPrivateFieldGet2(this, _PQueue_interval, "f")), "f");
  __classPrivateFieldSet(this, _PQueue_intervalEnd, Date.now() + __classPrivateFieldGet2(this, _PQueue_interval, "f"), "f");
}, _PQueue_onInterval = function _PQueue_onInterval2() {
  if (__classPrivateFieldGet2(this, _PQueue_intervalCount, "f") === 0 && __classPrivateFieldGet2(this, _PQueue_pending, "f") === 0 && __classPrivateFieldGet2(this, _PQueue_intervalId, "f")) {
    clearInterval(__classPrivateFieldGet2(this, _PQueue_intervalId, "f"));
    __classPrivateFieldSet(this, _PQueue_intervalId, void 0, "f");
  }
  __classPrivateFieldSet(this, _PQueue_intervalCount, __classPrivateFieldGet2(this, _PQueue_carryoverConcurrencyCount, "f") ? __classPrivateFieldGet2(this, _PQueue_pending, "f") : 0, "f");
  __classPrivateFieldGet2(this, _PQueue_instances, "m", _PQueue_processQueue).call(this);
}, _PQueue_processQueue = function _PQueue_processQueue2() {
  while (__classPrivateFieldGet2(this, _PQueue_instances, "m", _PQueue_tryToStartAnother).call(this)) {
  }
}, _PQueue_throwOnAbort = async function _PQueue_throwOnAbort2(signal) {
  return new Promise((_resolve, reject) => {
    signal.addEventListener("abort", () => {
      reject(new AbortError2("The task was aborted."));
    }, { once: true });
  });
}, _PQueue_onEvent = async function _PQueue_onEvent2(event, filter) {
  return new Promise((resolve) => {
    const listener = () => {
      if (filter && !filter()) {
        return;
      }
      this.off(event, listener);
      resolve();
    };
    this.on(event, listener);
  });
};
var dist_default = PQueue;

// node_modules/preact/hooks/dist/hooks.mjs
var t3;
var r3;
var u3;
var i3;
var o3 = 0;
var f3 = [];
var c3 = l;
var e3 = c3.__b;
var a3 = c3.__r;
var v3 = c3.diffed;
var l3 = c3.__c;
var m3 = c3.unmount;
var s3 = c3.__;
function p3(n3, t4) {
  c3.__h && c3.__h(r3, n3, o3 || t4), o3 = 0;
  var u4 = r3.__H || (r3.__H = { __: [], __h: [] });
  return n3 >= u4.__.length && u4.__.push({}), u4.__[n3];
}
function d3(n3) {
  return o3 = 1, h3(D3, n3);
}
function h3(n3, u4, i4) {
  var o4 = p3(t3++, 2);
  if (o4.t = n3, !o4.__c && (o4.__ = [i4 ? i4(u4) : D3(void 0, u4), function(n4) {
    var t4 = o4.__N ? o4.__N[0] : o4.__[0], r4 = o4.t(t4, n4);
    t4 !== r4 && (o4.__N = [r4, o4.__[1]], o4.__c.setState({}));
  }], o4.__c = r3, !r3.__f)) {
    var f4 = function(n4, t4, r4) {
      if (!o4.__c.__H) return true;
      var u5 = o4.__c.__H.__.filter(function(n5) {
        return !!n5.__c;
      });
      if (u5.every(function(n5) {
        return !n5.__N;
      })) return !c4 || c4.call(this, n4, t4, r4);
      var i5 = o4.__c.props !== n4;
      return u5.forEach(function(n5) {
        if (n5.__N) {
          var t5 = n5.__[0];
          n5.__ = n5.__N, n5.__N = void 0, t5 !== n5.__[0] && (i5 = true);
        }
      }), c4 && c4.call(this, n4, t4, r4) || i5;
    };
    r3.__f = true;
    var c4 = r3.shouldComponentUpdate, e4 = r3.componentWillUpdate;
    r3.componentWillUpdate = function(n4, t4, r4) {
      if (this.__e) {
        var u5 = c4;
        c4 = void 0, f4(n4, t4, r4), c4 = u5;
      }
      e4 && e4.call(this, n4, t4, r4);
    }, r3.shouldComponentUpdate = f4;
  }
  return o4.__N || o4.__;
}
function y3(n3, u4) {
  var i4 = p3(t3++, 3);
  !c3.__s && C3(i4.__H, u4) && (i4.__ = n3, i4.u = u4, r3.__H.__h.push(i4));
}
function A3(n3) {
  return o3 = 5, T3(function() {
    return { current: n3 };
  }, []);
}
function T3(n3, r4) {
  var u4 = p3(t3++, 7);
  return C3(u4.__H, r4) && (u4.__ = n3(), u4.__H = r4, u4.__h = n3), u4.__;
}
function q3(n3, t4) {
  return o3 = 8, T3(function() {
    return n3;
  }, t4);
}
function j3() {
  for (var n3; n3 = f3.shift(); ) if (n3.__P && n3.__H) try {
    n3.__H.__h.forEach(z3), n3.__H.__h.forEach(B3), n3.__H.__h = [];
  } catch (t4) {
    n3.__H.__h = [], c3.__e(t4, n3.__v);
  }
}
c3.__b = function(n3) {
  r3 = null, e3 && e3(n3);
}, c3.__ = function(n3, t4) {
  n3 && t4.__k && t4.__k.__m && (n3.__m = t4.__k.__m), s3 && s3(n3, t4);
}, c3.__r = function(n3) {
  a3 && a3(n3), t3 = 0;
  var i4 = (r3 = n3.__c).__H;
  i4 && (u3 === r3 ? (i4.__h = [], r3.__h = [], i4.__.forEach(function(n4) {
    n4.__N && (n4.__ = n4.__N), n4.u = n4.__N = void 0;
  })) : (i4.__h.forEach(z3), i4.__h.forEach(B3), i4.__h = [], t3 = 0)), u3 = r3;
}, c3.diffed = function(n3) {
  v3 && v3(n3);
  var t4 = n3.__c;
  t4 && t4.__H && (t4.__H.__h.length && (1 !== f3.push(t4) && i3 === c3.requestAnimationFrame || ((i3 = c3.requestAnimationFrame) || w3)(j3)), t4.__H.__.forEach(function(n4) {
    n4.u && (n4.__H = n4.u), n4.u = void 0;
  })), u3 = r3 = null;
}, c3.__c = function(n3, t4) {
  t4.some(function(n4) {
    try {
      n4.__h.forEach(z3), n4.__h = n4.__h.filter(function(n5) {
        return !n5.__ || B3(n5);
      });
    } catch (r4) {
      t4.some(function(n5) {
        n5.__h && (n5.__h = []);
      }), t4 = [], c3.__e(r4, n4.__v);
    }
  }), l3 && l3(n3, t4);
}, c3.unmount = function(n3) {
  m3 && m3(n3);
  var t4, r4 = n3.__c;
  r4 && r4.__H && (r4.__H.__.forEach(function(n4) {
    try {
      z3(n4);
    } catch (n5) {
      t4 = n5;
    }
  }), r4.__H = void 0, t4 && c3.__e(t4, r4.__v));
};
var k3 = "function" == typeof requestAnimationFrame;
function w3(n3) {
  var t4, r4 = function() {
    clearTimeout(u4), k3 && cancelAnimationFrame(t4), setTimeout(n3);
  }, u4 = setTimeout(r4, 35);
  k3 && (t4 = requestAnimationFrame(r4));
}
function z3(n3) {
  var t4 = r3, u4 = n3.__c;
  "function" == typeof u4 && (n3.__c = void 0, u4()), r3 = t4;
}
function B3(n3) {
  var t4 = r3;
  n3.__c = n3.__(), r3 = t4;
}
function C3(n3, t4) {
  return !n3 || n3.length !== t4.length || t4.some(function(t5, r4) {
    return t5 !== n3[r4];
  });
}
function D3(n3, t4) {
  return "function" == typeof t4 ? t4(n3) : t4;
}

// node_modules/@uppy/provider-views/lib/ProviderView/AuthView.js
function GoogleIcon() {
  return _("svg", {
    width: "26",
    height: "26",
    viewBox: "0 0 26 26",
    xmlns: "http://www.w3.org/2000/svg"
  }, _("g", {
    fill: "none",
    "fill-rule": "evenodd"
  }, _("circle", {
    fill: "#FFF",
    cx: "13",
    cy: "13",
    r: "13"
  }), _("path", {
    d: "M21.64 13.205c0-.639-.057-1.252-.164-1.841H13v3.481h4.844a4.14 4.14 0 01-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z",
    fill: "#4285F4",
    "fill-rule": "nonzero"
  }), _("path", {
    d: "M13 22c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H4.957v2.332A8.997 8.997 0 0013 22z",
    fill: "#34A853",
    "fill-rule": "nonzero"
  }), _("path", {
    d: "M7.964 14.71A5.41 5.41 0 017.682 13c0-.593.102-1.17.282-1.71V8.958H4.957A8.996 8.996 0 004 13c0 1.452.348 2.827.957 4.042l3.007-2.332z",
    fill: "#FBBC05",
    "fill-rule": "nonzero"
  }), _("path", {
    d: "M13 7.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C17.463 4.891 15.426 4 13 4a8.997 8.997 0 00-8.043 4.958l3.007 2.332C8.672 9.163 10.656 7.58 13 7.58z",
    fill: "#EA4335",
    "fill-rule": "nonzero"
  }), _("path", {
    d: "M4 4h18v18H4z"
  })));
}
function DefaultForm(_ref) {
  let {
    pluginName,
    i18n,
    onAuth
  } = _ref;
  const isGoogleDrive = pluginName === "Google Drive";
  const onSubmit = q3((e4) => {
    e4.preventDefault();
    onAuth();
  }, [onAuth]);
  return _("form", {
    onSubmit
  }, isGoogleDrive ? _("button", {
    type: "submit",
    className: "uppy-u-reset uppy-c-btn uppy-c-btn-primary uppy-Provider-authBtn uppy-Provider-btn-google",
    "data-uppy-super-focusable": true
  }, _(GoogleIcon, null), i18n("signInWithGoogle")) : _("button", {
    type: "submit",
    className: "uppy-u-reset uppy-c-btn uppy-c-btn-primary uppy-Provider-authBtn",
    "data-uppy-super-focusable": true
  }, i18n("authenticateWith", {
    pluginName
  })));
}
var defaultRenderForm = (_ref2) => {
  let {
    pluginName,
    i18n,
    onAuth
  } = _ref2;
  return _(DefaultForm, {
    pluginName,
    i18n,
    onAuth
  });
};
function AuthView(props) {
  const {
    loading,
    pluginName,
    pluginIcon,
    i18n,
    handleAuth,
    renderForm = defaultRenderForm
  } = props;
  return _("div", {
    className: "uppy-Provider-auth"
  }, _("div", {
    className: "uppy-Provider-authIcon"
  }, pluginIcon()), _("div", {
    className: "uppy-Provider-authTitle"
  }, i18n("authenticateWithTitle", {
    pluginName
  })), _("div", {
    className: "uppy-Provider-authForm"
  }, renderForm({
    pluginName,
    i18n,
    loading,
    onAuth: handleAuth
  })));
}

// node_modules/@uppy/provider-views/lib/ProviderView/User.js
function User(_ref) {
  let {
    i18n,
    logout,
    username
  } = _ref;
  return _(k, null, _("span", {
    className: "uppy-ProviderBrowser-user",
    key: "username"
  }, username), _("button", {
    type: "button",
    onClick: logout,
    className: "uppy-u-reset uppy-c-btn uppy-ProviderBrowser-userLogout",
    key: "logout"
  }, i18n("logOut")));
}

// node_modules/@uppy/provider-views/lib/Breadcrumbs.js
var Breadcrumb = (props) => {
  const {
    getFolder,
    title,
    isLast
  } = props;
  return _(k, null, _("button", {
    type: "button",
    className: "uppy-u-reset uppy-c-btn",
    onClick: getFolder
  }, title), !isLast ? " / " : "");
};
function Breadcrumbs(props) {
  const {
    getFolder,
    title,
    breadcrumbsIcon,
    breadcrumbs
  } = props;
  return _("div", {
    className: "uppy-Provider-breadcrumbs"
  }, _("div", {
    className: "uppy-Provider-breadcrumbsIcon"
  }, breadcrumbsIcon), breadcrumbs.map((directory, i4) => _(Breadcrumb, {
    key: directory.id,
    getFolder: () => getFolder(directory.requestPath, directory.name),
    title: i4 === 0 ? title : directory.name,
    isLast: i4 + 1 === breadcrumbs.length
  })));
}

// node_modules/@uppy/provider-views/lib/ProviderView/Header.js
function Header(props) {
  return _(k, null, props.showBreadcrumbs && _(Breadcrumbs, {
    getFolder: props.getFolder,
    breadcrumbs: props.breadcrumbs,
    breadcrumbsIcon: props.pluginIcon && props.pluginIcon(),
    title: props.title
  }), _(User, {
    logout: props.logout,
    username: props.username,
    i18n: props.i18n
  }));
}

// node_modules/@uppy/provider-views/lib/Browser.js
var import_classnames5 = __toESM(require_classnames(), 1);

// node_modules/@uppy/utils/lib/remoteFileObjToLocal.js
function remoteFileObjToLocal(file) {
  return {
    ...file,
    type: file.mimeType,
    extension: file.name ? getFileNameAndExtension(file.name).extension : null
  };
}

// node_modules/@uppy/utils/lib/VirtualList.js
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function(target) {
    for (var i4 = 1; i4 < arguments.length; i4++) {
      var source = arguments[i4];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
var STYLE_INNER = {
  position: "relative",
  // Disabled for our use case: the wrapper elements around FileList already deal with overflow,
  // and this additional property would hide things that we want to show.
  //
  // overflow: 'hidden',
  width: "100%",
  minHeight: "100%"
};
var STYLE_CONTENT = {
  position: "absolute",
  top: 0,
  left: 0,
  // Because the `top` value gets set to some offset, this `height` being 100% would make the scrollbar
  // stretch far beyond the content. For our use case, the content div actually can get its height from
  // the elements inside it, so we don't need to specify a `height` property at all.
  //
  // height: '100%',
  width: "100%",
  overflow: "visible"
};
var VirtualList = class extends x {
  constructor(props) {
    super(props);
    this.handleScroll = () => {
      this.setState({
        offset: this.base.scrollTop
      });
    };
    this.handleResize = () => {
      this.resize();
    };
    this.focusElement = null;
    this.state = {
      offset: 0,
      height: 0
    };
  }
  componentDidMount() {
    this.resize();
    window.addEventListener("resize", this.handleResize);
  }
  // TODO: refactor to stable lifecycle method
  // eslint-disable-next-line
  componentWillUpdate() {
    if (this.base.contains(document.activeElement)) {
      this.focusElement = document.activeElement;
    }
  }
  componentDidUpdate() {
    if (this.focusElement && this.focusElement.parentNode && document.activeElement !== this.focusElement) {
      this.focusElement.focus();
    }
    this.focusElement = null;
    this.resize();
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }
  resize() {
    const {
      height
    } = this.state;
    if (height !== this.base.offsetHeight) {
      this.setState({
        height: this.base.offsetHeight
      });
    }
  }
  render(_ref) {
    let {
      data,
      rowHeight,
      renderRow,
      overscanCount = 10,
      ...props
    } = _ref;
    const {
      offset,
      height
    } = this.state;
    let start = Math.floor(offset / rowHeight);
    let visibleRowCount = Math.floor(height / rowHeight);
    if (overscanCount) {
      start = Math.max(0, start - start % overscanCount);
      visibleRowCount += overscanCount;
    }
    const end = start + visibleRowCount + 4;
    const selection = data.slice(start, end);
    const styleInner = {
      ...STYLE_INNER,
      height: data.length * rowHeight
    };
    const styleContent = {
      ...STYLE_CONTENT,
      top: start * rowHeight
    };
    return (
      // eslint-disable-next-line react/jsx-props-no-spreading
      _("div", _extends({
        onScroll: this.handleScroll
      }, props), _("div", {
        role: "presentation",
        style: styleInner
      }, _("div", {
        role: "presentation",
        style: styleContent
      }, selection.map(renderRow))))
    );
  }
};
var VirtualList_default = VirtualList;

// node_modules/@uppy/provider-views/lib/SearchFilterInput.js
function SearchFilterInput(props) {
  const {
    search,
    searchOnInput,
    searchTerm,
    showButton,
    inputLabel,
    clearSearchLabel,
    buttonLabel,
    clearSearch,
    inputClassName,
    buttonCSSClassName
  } = props;
  const [searchText, setSearchText] = d3(searchTerm != null ? searchTerm : "");
  const validateAndSearch = q3((ev) => {
    ev.preventDefault();
    search(searchText);
  }, [search, searchText]);
  const handleInput = q3((ev) => {
    const inputValue = ev.target.value;
    setSearchText(inputValue);
    if (searchOnInput) search(inputValue);
  }, [setSearchText, searchOnInput, search]);
  const handleReset = () => {
    setSearchText("");
    if (clearSearch) clearSearch();
  };
  const [form] = d3(() => {
    const formEl = document.createElement("form");
    formEl.setAttribute("tabindex", "-1");
    formEl.id = nanoid();
    return formEl;
  });
  y3(() => {
    document.body.appendChild(form);
    form.addEventListener("submit", validateAndSearch);
    return () => {
      form.removeEventListener("submit", validateAndSearch);
      document.body.removeChild(form);
    };
  }, [form, validateAndSearch]);
  return _(k, null, _("input", {
    className: `uppy-u-reset ${inputClassName}`,
    type: "search",
    "aria-label": inputLabel,
    placeholder: inputLabel,
    value: searchText,
    onInput: handleInput,
    form: form.id,
    "data-uppy-super-focusable": true
  }), !showButton && _("svg", {
    "aria-hidden": "true",
    focusable: "false",
    className: "uppy-c-icon uppy-ProviderBrowser-searchFilterIcon",
    width: "12",
    height: "12",
    viewBox: "0 0 12 12"
  }, _("path", {
    d: "M8.638 7.99l3.172 3.172a.492.492 0 1 1-.697.697L7.91 8.656a4.977 4.977 0 0 1-2.983.983C2.206 9.639 0 7.481 0 4.819 0 2.158 2.206 0 4.927 0c2.721 0 4.927 2.158 4.927 4.82a4.74 4.74 0 0 1-1.216 3.17zm-3.71.685c2.176 0 3.94-1.726 3.94-3.856 0-2.129-1.764-3.855-3.94-3.855C2.75.964.984 2.69.984 4.819c0 2.13 1.765 3.856 3.942 3.856z"
  })), !showButton && searchText && _("button", {
    className: "uppy-u-reset uppy-ProviderBrowser-searchFilterReset",
    type: "button",
    "aria-label": clearSearchLabel,
    title: clearSearchLabel,
    onClick: handleReset
  }, _("svg", {
    "aria-hidden": "true",
    focusable: "false",
    className: "uppy-c-icon",
    viewBox: "0 0 19 19"
  }, _("path", {
    d: "M17.318 17.232L9.94 9.854 9.586 9.5l-.354.354-7.378 7.378h.707l-.62-.62v.706L9.318 9.94l.354-.354-.354-.354L1.94 1.854v.707l.62-.62h-.706l7.378 7.378.354.354.354-.354 7.378-7.378h-.707l.622.62v-.706L9.854 9.232l-.354.354.354.354 7.378 7.378.708-.707-7.38-7.378v.708l7.38-7.38.353-.353-.353-.353-.622-.622-.353-.353-.354.352-7.378 7.38h.708L2.56 1.23 2.208.88l-.353.353-.622.62-.353.355.352.353 7.38 7.38v-.708l-7.38 7.38-.353.353.352.353.622.622.353.353.354-.353 7.38-7.38h-.708l7.38 7.38z"
  }))), showButton && _("button", {
    className: `uppy-u-reset uppy-c-btn uppy-c-btn-primary ${buttonCSSClassName}`,
    type: "submit",
    form: form.id
  }, buttonLabel));
}

// node_modules/@uppy/provider-views/lib/FooterActions.js
function FooterActions(_ref) {
  let {
    cancel,
    done,
    i18n,
    selected
  } = _ref;
  return _("div", {
    className: "uppy-ProviderBrowser-footer"
  }, _("button", {
    className: "uppy-u-reset uppy-c-btn uppy-c-btn-primary",
    onClick: done,
    type: "button"
  }, i18n("selectX", {
    smart_count: selected
  })), _("button", {
    className: "uppy-u-reset uppy-c-btn uppy-c-btn-link",
    onClick: cancel,
    type: "button"
  }, i18n("cancel")));
}

// node_modules/@uppy/provider-views/lib/Item/index.js
var import_classnames4 = __toESM(require_classnames(), 1);

// node_modules/@uppy/provider-views/lib/Item/components/ItemIcon.js
function FileIcon() {
  return _("svg", {
    "aria-hidden": "true",
    focusable: "false",
    className: "uppy-c-icon",
    width: 11,
    height: 14.5,
    viewBox: "0 0 44 58"
  }, _("path", {
    d: "M27.437.517a1 1 0 0 0-.094.03H4.25C2.037.548.217 2.368.217 4.58v48.405c0 2.212 1.82 4.03 4.03 4.03H39.03c2.21 0 4.03-1.818 4.03-4.03V15.61a1 1 0 0 0-.03-.28 1 1 0 0 0 0-.093 1 1 0 0 0-.03-.032 1 1 0 0 0 0-.03 1 1 0 0 0-.032-.063 1 1 0 0 0-.03-.063 1 1 0 0 0-.032 0 1 1 0 0 0-.03-.063 1 1 0 0 0-.032-.03 1 1 0 0 0-.03-.063 1 1 0 0 0-.063-.062l-14.593-14a1 1 0 0 0-.062-.062A1 1 0 0 0 28 .708a1 1 0 0 0-.374-.157 1 1 0 0 0-.156 0 1 1 0 0 0-.03-.03l-.003-.003zM4.25 2.547h22.218v9.97c0 2.21 1.82 4.03 4.03 4.03h10.564v36.438a2.02 2.02 0 0 1-2.032 2.032H4.25c-1.13 0-2.032-.9-2.032-2.032V4.58c0-1.13.902-2.032 2.03-2.032zm24.218 1.345l10.375 9.937.75.718H30.5c-1.13 0-2.032-.9-2.032-2.03V3.89z"
  }));
}
function FolderIcon() {
  return _("svg", {
    "aria-hidden": "true",
    focusable: "false",
    className: "uppy-c-icon",
    style: {
      minWidth: 16,
      marginRight: 3
    },
    viewBox: "0 0 276.157 276.157"
  }, _("path", {
    d: "M273.08 101.378c-3.3-4.65-8.86-7.32-15.254-7.32h-24.34V67.59c0-10.2-8.3-18.5-18.5-18.5h-85.322c-3.63 0-9.295-2.875-11.436-5.805l-6.386-8.735c-4.982-6.814-15.104-11.954-23.546-11.954H58.73c-9.292 0-18.638 6.608-21.737 15.372l-2.033 5.752c-.958 2.71-4.72 5.37-7.596 5.37H18.5C8.3 49.09 0 57.39 0 67.59v167.07c0 .886.16 1.73.443 2.52.152 3.306 1.18 6.424 3.053 9.064 3.3 4.652 8.86 7.32 15.255 7.32h188.487c11.395 0 23.27-8.425 27.035-19.18l40.677-116.188c2.11-6.035 1.43-12.164-1.87-16.816zM18.5 64.088h8.864c9.295 0 18.64-6.607 21.738-15.37l2.032-5.75c.96-2.712 4.722-5.373 7.597-5.373h29.565c3.63 0 9.295 2.876 11.437 5.806l6.386 8.735c4.982 6.815 15.104 11.954 23.546 11.954h85.322c1.898 0 3.5 1.602 3.5 3.5v26.47H69.34c-11.395 0-23.27 8.423-27.035 19.178L15 191.23V67.59c0-1.898 1.603-3.5 3.5-3.5zm242.29 49.15l-40.676 116.188c-1.674 4.78-7.812 9.135-12.877 9.135H18.75c-1.447 0-2.576-.372-3.02-.997-.442-.625-.422-1.814.057-3.18l40.677-116.19c1.674-4.78 7.812-9.134 12.877-9.134h188.487c1.448 0 2.577.372 3.02.997.443.625.423 1.814-.056 3.18z"
  }));
}
function VideoIcon() {
  return _("svg", {
    "aria-hidden": "true",
    focusable: "false",
    style: {
      width: 16,
      marginRight: 4
    },
    viewBox: "0 0 58 58"
  }, _("path", {
    d: "M36.537 28.156l-11-7a1.005 1.005 0 0 0-1.02-.033C24.2 21.3 24 21.635 24 22v14a1 1 0 0 0 1.537.844l11-7a1.002 1.002 0 0 0 0-1.688zM26 34.18V23.82L34.137 29 26 34.18z"
  }), _("path", {
    d: "M57 6H1a1 1 0 0 0-1 1v44a1 1 0 0 0 1 1h56a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1zM10 28H2v-9h8v9zm-8 2h8v9H2v-9zm10 10V8h34v42H12V40zm44-12h-8v-9h8v9zm-8 2h8v9h-8v-9zm8-22v9h-8V8h8zM2 8h8v9H2V8zm0 42v-9h8v9H2zm54 0h-8v-9h8v9z"
  }));
}
function ItemIcon(props) {
  const {
    itemIconString
  } = props;
  if (itemIconString === null) return null;
  switch (itemIconString) {
    case "file":
      return _(FileIcon, null);
    case "folder":
      return _(FolderIcon, null);
    case "video":
      return _(VideoIcon, null);
    default: {
      const {
        alt
      } = props;
      return _("img", {
        src: itemIconString,
        alt,
        referrerPolicy: "no-referrer",
        loading: "lazy",
        width: 16,
        height: 16
      });
    }
  }
}

// node_modules/@uppy/provider-views/lib/Item/components/GridLi.js
var import_classnames3 = __toESM(require_classnames(), 1);
function GridListItem(props) {
  const {
    className,
    isDisabled,
    restrictionError,
    isChecked,
    title,
    itemIconEl,
    showTitles,
    toggleCheckbox,
    recordShiftKeyPress,
    id: id20,
    children
  } = props;
  const checkBoxClassName = (0, import_classnames3.default)("uppy-u-reset", "uppy-ProviderBrowserItem-checkbox", "uppy-ProviderBrowserItem-checkbox--grid", {
    "uppy-ProviderBrowserItem-checkbox--is-checked": isChecked
  });
  return _("li", {
    className,
    title: isDisabled ? restrictionError == null ? void 0 : restrictionError.message : void 0
  }, _("input", {
    type: "checkbox",
    className: checkBoxClassName,
    onChange: toggleCheckbox,
    onKeyDown: recordShiftKeyPress,
    onMouseDown: recordShiftKeyPress,
    name: "listitem",
    id: id20,
    checked: isChecked,
    disabled: isDisabled,
    "data-uppy-super-focusable": true
  }), _("label", {
    htmlFor: id20,
    "aria-label": title,
    className: "uppy-u-reset uppy-ProviderBrowserItem-inner"
  }, itemIconEl, showTitles && title, children));
}
var GridLi_default = GridListItem;

// node_modules/@uppy/provider-views/lib/Item/components/ListLi.js
function ListItem(props) {
  const {
    className,
    isDisabled,
    restrictionError,
    isCheckboxDisabled,
    isChecked,
    toggleCheckbox,
    recordShiftKeyPress,
    type,
    id: id20,
    itemIconEl,
    title,
    handleFolderClick,
    showTitles,
    i18n
  } = props;
  return _("li", {
    className,
    title: isDisabled ? restrictionError == null ? void 0 : restrictionError.message : void 0
  }, !isCheckboxDisabled ? _("input", {
    type: "checkbox",
    className: `uppy-u-reset uppy-ProviderBrowserItem-checkbox ${isChecked ? "uppy-ProviderBrowserItem-checkbox--is-checked" : ""}`,
    onChange: toggleCheckbox,
    onKeyDown: recordShiftKeyPress,
    onMouseDown: recordShiftKeyPress,
    name: "listitem",
    id: id20,
    checked: isChecked,
    "aria-label": type === "file" ? null : i18n("allFilesFromFolderNamed", {
      name: title
    }),
    disabled: isDisabled,
    "data-uppy-super-focusable": true
  }) : null, type === "file" ? (
    // label for a checkbox
    _("label", {
      htmlFor: id20,
      className: "uppy-u-reset uppy-ProviderBrowserItem-inner"
    }, _("div", {
      className: "uppy-ProviderBrowserItem-iconWrap"
    }, itemIconEl), showTitles && title)
  ) : _("button", {
    type: "button",
    className: "uppy-u-reset uppy-c-btn uppy-ProviderBrowserItem-inner",
    onClick: handleFolderClick,
    "aria-label": i18n("openFolderNamed", {
      name: title
    })
  }, _("div", {
    className: "uppy-ProviderBrowserItem-iconWrap"
  }, itemIconEl), showTitles && title ? _("span", null, title) : i18n("unnamed")));
}

// node_modules/@uppy/provider-views/lib/Item/index.js
function _extends2() {
  _extends2 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i4 = 1; i4 < arguments.length; i4++) {
      var source = arguments[i4];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends2.apply(this, arguments);
}
function Item(props) {
  const {
    author,
    getItemIcon,
    isChecked,
    isDisabled,
    viewType
  } = props;
  const itemIconString = getItemIcon();
  const className = (0, import_classnames4.default)("uppy-ProviderBrowserItem", {
    "uppy-ProviderBrowserItem--selected": isChecked
  }, {
    "uppy-ProviderBrowserItem--disabled": isDisabled
  }, {
    "uppy-ProviderBrowserItem--noPreview": itemIconString === "video"
  });
  const itemIconEl = _(ItemIcon, {
    itemIconString
  });
  switch (viewType) {
    case "grid":
      return _(GridLi_default, _extends2({}, props, {
        className,
        itemIconEl
      }));
    case "list":
      return _(ListItem, _extends2({}, props, {
        className,
        itemIconEl
      }));
    case "unsplash":
      return _(GridLi_default, _extends2({}, props, {
        className,
        itemIconEl
      }), _("a", {
        href: `${author.url}?utm_source=Companion&utm_medium=referral`,
        target: "_blank",
        rel: "noopener noreferrer",
        className: "uppy-ProviderBrowserItem-author",
        tabIndex: -1
      }, author.name));
    default:
      throw new Error(`There is no such type ${viewType}`);
  }
}

// node_modules/@uppy/provider-views/lib/Browser.js
var VIRTUAL_SHARED_DIR = "shared-with-me";
function ListItem2(props) {
  const {
    currentSelection,
    uppyFiles,
    viewType,
    isChecked,
    toggleCheckbox,
    recordShiftKeyPress,
    showTitles,
    i18n,
    validateRestrictions,
    getNextFolder,
    f: f4
  } = props;
  if (f4.isFolder) {
    return Item({
      showTitles,
      viewType,
      i18n,
      id: f4.id,
      title: f4.name,
      getItemIcon: () => f4.icon,
      isChecked: isChecked(f4),
      toggleCheckbox: (event) => toggleCheckbox(event, f4),
      recordShiftKeyPress,
      type: "folder",
      // TODO: when was this supposed to be true?
      isDisabled: false,
      isCheckboxDisabled: f4.id === VIRTUAL_SHARED_DIR,
      // getNextFolder always exists when f.isFolder is true
      handleFolderClick: () => getNextFolder(f4)
    });
  }
  const restrictionError = validateRestrictions(remoteFileObjToLocal(f4), [...uppyFiles, ...currentSelection]);
  return Item({
    id: f4.id,
    title: f4.name,
    author: f4.author,
    getItemIcon: () => viewType === "grid" && f4.thumbnail ? f4.thumbnail : f4.icon,
    isChecked: isChecked(f4),
    toggleCheckbox: (event) => toggleCheckbox(event, f4),
    isCheckboxDisabled: false,
    recordShiftKeyPress,
    showTitles,
    viewType,
    i18n,
    type: "file",
    isDisabled: Boolean(restrictionError) && !isChecked(f4),
    restrictionError
  });
}
function Browser(props) {
  const {
    currentSelection,
    folders,
    files,
    uppyFiles,
    viewType,
    headerComponent,
    showBreadcrumbs,
    isChecked,
    toggleCheckbox,
    recordShiftKeyPress,
    handleScroll,
    showTitles,
    i18n,
    validateRestrictions,
    isLoading,
    showSearchFilter,
    search,
    searchTerm,
    clearSearch,
    searchOnInput,
    searchInputLabel,
    clearSearchLabel,
    getNextFolder,
    cancel,
    done,
    noResultsLabel,
    virtualList
  } = props;
  const selected = currentSelection.length;
  const rows = T3(() => [...folders, ...files], [folders, files]);
  return _("div", {
    className: (0, import_classnames5.default)("uppy-ProviderBrowser", `uppy-ProviderBrowser-viewType--${viewType}`)
  }, headerComponent && _("div", {
    className: "uppy-ProviderBrowser-header"
  }, _("div", {
    className: (0, import_classnames5.default)("uppy-ProviderBrowser-headerBar", !showBreadcrumbs && "uppy-ProviderBrowser-headerBar--simple")
  }, headerComponent)), showSearchFilter && _("div", {
    class: "uppy-ProviderBrowser-searchFilter"
  }, _(SearchFilterInput, {
    search,
    searchTerm,
    clearSearch,
    inputLabel: searchInputLabel,
    clearSearchLabel,
    inputClassName: "uppy-ProviderBrowser-searchFilterInput",
    searchOnInput
  })), (() => {
    if (isLoading) {
      return _("div", {
        className: "uppy-Provider-loading"
      }, _("span", null, typeof isLoading === "string" ? isLoading : i18n("loading")));
    }
    if (!folders.length && !files.length) {
      return _("div", {
        className: "uppy-Provider-empty"
      }, noResultsLabel);
    }
    if (virtualList) {
      return _("div", {
        className: "uppy-ProviderBrowser-body"
      }, _("ul", {
        className: "uppy-ProviderBrowser-list"
      }, _(VirtualList_default, {
        data: rows,
        renderRow: (f4) => _(ListItem2, {
          currentSelection,
          uppyFiles,
          viewType,
          isChecked,
          toggleCheckbox,
          recordShiftKeyPress,
          showTitles,
          i18n,
          validateRestrictions,
          getNextFolder,
          f: f4
        }),
        rowHeight: 31
      })));
    }
    return _("div", {
      className: "uppy-ProviderBrowser-body"
    }, _("ul", {
      className: "uppy-ProviderBrowser-list",
      onScroll: handleScroll,
      role: "listbox",
      tabIndex: -1
    }, rows.map((f4) => _(ListItem2, {
      currentSelection,
      uppyFiles,
      viewType,
      isChecked,
      toggleCheckbox,
      recordShiftKeyPress,
      showTitles,
      i18n,
      validateRestrictions,
      getNextFolder,
      f: f4
    }))));
  })(), selected > 0 && _(FooterActions, {
    selected,
    done,
    cancel,
    i18n
  }));
}
var Browser_default = Browser;

// node_modules/@uppy/provider-views/lib/CloseWrapper.js
var CloseWrapper = class extends x {
  componentWillUnmount() {
    const {
      onUnmount
    } = this.props;
    onUnmount();
  }
  render() {
    const {
      children
    } = this.props;
    return H(children)[0];
  }
};

// node_modules/@uppy/provider-views/lib/View.js
var View = class {
  constructor(plugin, opts) {
    this.filterItems = (items) => {
      const state = this.plugin.getPluginState();
      if (!state.filterInput || state.filterInput === "") {
        return items;
      }
      return items.filter((folder) => {
        return folder.name.toLowerCase().indexOf(state.filterInput.toLowerCase()) !== -1;
      });
    };
    this.recordShiftKeyPress = (e4) => {
      this.isShiftKeyPressed = e4.shiftKey;
    };
    this.isChecked = (file) => {
      const {
        currentSelection
      } = this.plugin.getPluginState();
      return currentSelection.some((item) => item.id === file.id);
    };
    this.plugin = plugin;
    this.provider = opts.provider;
    this.opts = opts;
    this.isHandlingScroll = false;
    this.preFirstRender = this.preFirstRender.bind(this);
    this.handleError = this.handleError.bind(this);
    this.clearSelection = this.clearSelection.bind(this);
    this.cancelPicking = this.cancelPicking.bind(this);
  }
  preFirstRender() {
    this.plugin.setPluginState({
      didFirstRender: true
    });
    this.plugin.onFirstRender();
  }
  shouldHandleScroll(event) {
    const {
      scrollHeight,
      scrollTop,
      offsetHeight
    } = event.target;
    const scrollPosition = scrollHeight - (scrollTop + offsetHeight);
    return scrollPosition < 50 && !this.isHandlingScroll;
  }
  clearSelection() {
    this.plugin.setPluginState({
      currentSelection: [],
      filterInput: ""
    });
  }
  cancelPicking() {
    this.clearSelection();
    const dashboard = this.plugin.uppy.getPlugin("Dashboard");
    if (dashboard) {
      dashboard.hideAllPanels();
    }
  }
  handleError(error) {
    var _error$cause;
    const {
      uppy
    } = this.plugin;
    const message = uppy.i18n("companionError");
    uppy.log(error.toString());
    if (error.isAuthError || ((_error$cause = error.cause) == null ? void 0 : _error$cause.name) === "AbortError") {
      return;
    }
    uppy.info({
      message,
      details: error.toString()
    }, "error", 5e3);
  }
  registerRequestClient() {
    this.requestClientId = this.provider.provider;
    this.plugin.uppy.registerRequestClient(this.requestClientId, this.provider);
  }
  // TODO: document what is a "tagFile" or get rid of this concept
  getTagFile(file) {
    const tagFile = {
      id: file.id,
      source: this.plugin.id,
      name: file.name || file.id,
      type: file.mimeType,
      isRemote: true,
      data: file,
      // @ts-expect-error meta is filled conditionally below
      meta: {},
      body: {
        fileId: file.id
      },
      remote: {
        companionUrl: this.plugin.opts.companionUrl,
        // @ts-expect-error untyped for now
        url: `${this.provider.fileUrl(file.requestPath)}`,
        body: {
          fileId: file.id
        },
        providerName: this.provider.name,
        provider: this.provider.provider,
        requestClientId: this.requestClientId
      }
    };
    if (file.thumbnail) {
      tagFile.preview = file.thumbnail;
    }
    if (file.author) {
      if (file.author.name != null) tagFile.meta.authorName = String(file.author.name);
      if (file.author.url) tagFile.meta.authorUrl = file.author.url;
    }
    if (file.relDirPath != null) tagFile.meta.relativePath = file.relDirPath ? `${file.relDirPath}/${tagFile.name}` : null;
    if (file.absDirPath != null) tagFile.meta.absolutePath = file.absDirPath ? `/${file.absDirPath}/${tagFile.name}` : `/${tagFile.name}`;
    return tagFile;
  }
  /**
   * Toggles file/folder checkbox to on/off state while updating files list.
   *
   * Note that some extra complexity comes from supporting shift+click to
   * toggle multiple checkboxes at once, which is done by getting all files
   * in between last checked file and current one.
   */
  toggleCheckbox(e4, file) {
    e4.stopPropagation();
    e4.preventDefault();
    e4.currentTarget.focus();
    const {
      folders,
      files
    } = this.plugin.getPluginState();
    const items = this.filterItems(folders.concat(files));
    if (this.lastCheckbox && this.isShiftKeyPressed) {
      const {
        currentSelection: currentSelection2
      } = this.plugin.getPluginState();
      const prevIndex = items.indexOf(this.lastCheckbox);
      const currentIndex = items.indexOf(file);
      const newSelection = prevIndex < currentIndex ? items.slice(prevIndex, currentIndex + 1) : items.slice(currentIndex, prevIndex + 1);
      const reducedNewSelection = [];
      for (const item of newSelection) {
        const {
          uppy
        } = this.plugin;
        const restrictionError = uppy.validateRestrictions(remoteFileObjToLocal(item), [...uppy.getFiles(), ...reducedNewSelection]);
        if (!restrictionError) {
          reducedNewSelection.push(item);
        } else {
          uppy.info({
            message: restrictionError.message
          }, "error", uppy.opts.infoTimeout);
        }
      }
      this.plugin.setPluginState({
        currentSelection: [.../* @__PURE__ */ new Set([...currentSelection2, ...reducedNewSelection])]
      });
      return;
    }
    this.lastCheckbox = file;
    const {
      currentSelection
    } = this.plugin.getPluginState();
    if (this.isChecked(file)) {
      this.plugin.setPluginState({
        currentSelection: currentSelection.filter((item) => item.id !== file.id)
      });
    } else {
      this.plugin.setPluginState({
        currentSelection: currentSelection.concat([file])
      });
    }
  }
  setLoading(loading) {
    this.plugin.setPluginState({
      loading
    });
  }
};

// node_modules/@uppy/provider-views/lib/ProviderView/ProviderView.js
function _classPrivateFieldLooseBase6(receiver, privateKey) {
  if (!Object.prototype.hasOwnProperty.call(receiver, privateKey)) {
    throw new TypeError("attempted to use private field on non-instance");
  }
  return receiver;
}
var id6 = 0;
function _classPrivateFieldLooseKey6(name) {
  return "__private_" + id6++ + "_" + name;
}
var packageJson6 = {
  "version": "3.13.0"
};
function formatBreadcrumbs(breadcrumbs) {
  return breadcrumbs.slice(1).map((directory) => directory.name).join("/");
}
function prependPath(path, component) {
  if (!path) return component;
  return `${path}/${component}`;
}
function defaultPickerIcon() {
  return _("svg", {
    "aria-hidden": "true",
    focusable: "false",
    width: "30",
    height: "30",
    viewBox: "0 0 30 30"
  }, _("path", {
    d: "M15 30c8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15C6.716 0 0 6.716 0 15c0 8.284 6.716 15 15 15zm4.258-12.676v6.846h-8.426v-6.846H5.204l9.82-12.364 9.82 12.364H19.26z"
  }));
}
var defaultOptions4 = {
  viewType: "list",
  showTitles: true,
  showFilter: true,
  showBreadcrumbs: true,
  loadAllFiles: false,
  virtualList: false
};
var _abortController = /* @__PURE__ */ _classPrivateFieldLooseKey6("abortController");
var _withAbort = /* @__PURE__ */ _classPrivateFieldLooseKey6("withAbort");
var _list = /* @__PURE__ */ _classPrivateFieldLooseKey6("list");
var _listFilesAndFolders = /* @__PURE__ */ _classPrivateFieldLooseKey6("listFilesAndFolders");
var _recursivelyListAllFiles = /* @__PURE__ */ _classPrivateFieldLooseKey6("recursivelyListAllFiles");
var ProviderView = class extends View {
  constructor(plugin, opts) {
    super(plugin, {
      ...defaultOptions4,
      ...opts
    });
    Object.defineProperty(this, _recursivelyListAllFiles, {
      value: _recursivelyListAllFiles2
    });
    Object.defineProperty(this, _listFilesAndFolders, {
      value: _listFilesAndFolders2
    });
    Object.defineProperty(this, _list, {
      value: _list2
    });
    Object.defineProperty(this, _withAbort, {
      value: _withAbort2
    });
    Object.defineProperty(this, _abortController, {
      writable: true,
      value: void 0
    });
    this.filterQuery = this.filterQuery.bind(this);
    this.clearFilter = this.clearFilter.bind(this);
    this.getFolder = this.getFolder.bind(this);
    this.getNextFolder = this.getNextFolder.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuth = this.handleAuth.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.donePicking = this.donePicking.bind(this);
    this.render = this.render.bind(this);
    this.plugin.setPluginState({
      authenticated: void 0,
      // we don't know yet
      files: [],
      folders: [],
      breadcrumbs: [],
      filterInput: "",
      isSearchVisible: false,
      currentSelection: []
    });
    this.registerRequestClient();
  }
  // eslint-disable-next-line class-methods-use-this
  tearDown() {
  }
  /**
   * Select a folder based on its id: fetches the folder and then updates state with its contents
   * TODO rename to something better like selectFolder or navigateToFolder (breaking change?)
   *
   */
  async getFolder(requestPath, name) {
    this.setLoading(true);
    try {
      await _classPrivateFieldLooseBase6(this, _withAbort)[_withAbort](async (signal) => {
        this.lastCheckbox = void 0;
        let {
          breadcrumbs
        } = this.plugin.getPluginState();
        const index = breadcrumbs.findIndex((dir) => requestPath === dir.requestPath);
        if (index !== -1) {
          breadcrumbs = breadcrumbs.slice(0, index + 1);
        } else {
          breadcrumbs = [...breadcrumbs, {
            requestPath,
            name
          }];
        }
        this.nextPagePath = requestPath;
        let files = [];
        let folders = [];
        do {
          const {
            files: newFiles,
            folders: newFolders
          } = await _classPrivateFieldLooseBase6(this, _listFilesAndFolders)[_listFilesAndFolders]({
            breadcrumbs,
            signal
          });
          files = files.concat(newFiles);
          folders = folders.concat(newFolders);
          this.setLoading(this.plugin.uppy.i18n("loadedXFiles", {
            numFiles: files.length + folders.length
          }));
        } while (this.opts.loadAllFiles && this.nextPagePath);
        this.plugin.setPluginState({
          folders,
          files,
          breadcrumbs,
          filterInput: ""
        });
      });
    } catch (err) {
      if ((err == null ? void 0 : err.name) === "UserFacingApiError") {
        this.plugin.uppy.info({
          message: this.plugin.uppy.i18n(err.message)
        }, "warning", 5e3);
        return;
      }
      this.handleError(err);
    } finally {
      this.setLoading(false);
    }
  }
  /**
   * Fetches new folder
   */
  getNextFolder(folder) {
    this.getFolder(folder.requestPath, folder.name);
    this.lastCheckbox = void 0;
  }
  /**
   * Removes session token on client side.
   */
  async logout() {
    try {
      await _classPrivateFieldLooseBase6(this, _withAbort)[_withAbort](async (signal) => {
        const res = await this.provider.logout({
          signal
        });
        if (res.ok) {
          if (!res.revoked) {
            const message = this.plugin.uppy.i18n("companionUnauthorizeHint", {
              provider: this.plugin.title,
              url: res.manual_revoke_url
            });
            this.plugin.uppy.info(message, "info", 7e3);
          }
          const newState = {
            authenticated: false,
            files: [],
            folders: [],
            breadcrumbs: [],
            filterInput: ""
          };
          this.plugin.setPluginState(newState);
        }
      });
    } catch (err) {
      this.handleError(err);
    }
  }
  filterQuery(input) {
    this.plugin.setPluginState({
      filterInput: input
    });
  }
  clearFilter() {
    this.plugin.setPluginState({
      filterInput: ""
    });
  }
  async handleAuth(authFormData) {
    try {
      await _classPrivateFieldLooseBase6(this, _withAbort)[_withAbort](async (signal) => {
        this.setLoading(true);
        await this.provider.login({
          authFormData,
          signal
        });
        this.plugin.setPluginState({
          authenticated: true
        });
        this.preFirstRender();
      });
    } catch (err) {
      if (err.name === "UserFacingApiError") {
        this.plugin.uppy.info({
          message: this.plugin.uppy.i18n(err.message)
        }, "warning", 5e3);
        return;
      }
      this.plugin.uppy.log(`login failed: ${err.message}`);
    } finally {
      this.setLoading(false);
    }
  }
  async handleScroll(event) {
    if (this.shouldHandleScroll(event) && this.nextPagePath) {
      this.isHandlingScroll = true;
      try {
        await _classPrivateFieldLooseBase6(this, _withAbort)[_withAbort](async (signal) => {
          const {
            files,
            folders,
            breadcrumbs
          } = this.plugin.getPluginState();
          const {
            files: newFiles,
            folders: newFolders
          } = await _classPrivateFieldLooseBase6(this, _listFilesAndFolders)[_listFilesAndFolders]({
            breadcrumbs,
            signal
          });
          const combinedFiles = files.concat(newFiles);
          const combinedFolders = folders.concat(newFolders);
          this.plugin.setPluginState({
            folders: combinedFolders,
            files: combinedFiles
          });
        });
      } catch (error) {
        this.handleError(error);
      } finally {
        this.isHandlingScroll = false;
      }
    }
  }
  async donePicking() {
    this.setLoading(true);
    try {
      await _classPrivateFieldLooseBase6(this, _withAbort)[_withAbort](async (signal) => {
        const {
          currentSelection
        } = this.plugin.getPluginState();
        const messages = [];
        const newFiles = [];
        for (const selectedItem of currentSelection) {
          const {
            requestPath
          } = selectedItem;
          const withRelDirPath = (newItem) => ({
            ...newItem,
            // calculate the file's path relative to the user's selected item's path
            // see https://github.com/transloadit/uppy/pull/4537#issuecomment-1614236655
            relDirPath: newItem.absDirPath.replace(selectedItem.absDirPath, "").replace(/^\//, "")
          });
          if (selectedItem.isFolder) {
            let isEmpty = true;
            let numNewFiles = 0;
            const queue = new dist_default({
              concurrency: 6
            });
            const onFiles = (files) => {
              for (const newFile of files) {
                const tagFile = this.getTagFile(newFile);
                const id20 = getSafeFileId(tagFile, this.plugin.uppy.getID());
                if (!this.plugin.uppy.checkIfFileAlreadyExists(id20)) {
                  newFiles.push(withRelDirPath(newFile));
                  numNewFiles++;
                  this.setLoading(this.plugin.uppy.i18n("addedNumFiles", {
                    numFiles: numNewFiles
                  }));
                }
                isEmpty = false;
              }
            };
            await _classPrivateFieldLooseBase6(this, _recursivelyListAllFiles)[_recursivelyListAllFiles]({
              requestPath,
              absDirPath: prependPath(selectedItem.absDirPath, selectedItem.name),
              relDirPath: selectedItem.name,
              queue,
              onFiles,
              signal
            });
            await queue.onIdle();
            let message;
            if (isEmpty) {
              message = this.plugin.uppy.i18n("emptyFolderAdded");
            } else if (numNewFiles === 0) {
              message = this.plugin.uppy.i18n("folderAlreadyAdded", {
                folder: selectedItem.name
              });
            } else {
              message = this.plugin.uppy.i18n("folderAdded", {
                smart_count: numNewFiles,
                folder: selectedItem.name
              });
            }
            messages.push(message);
          } else {
            newFiles.push(withRelDirPath(selectedItem));
          }
        }
        this.plugin.uppy.log("Adding files from a remote provider");
        this.plugin.uppy.addFiles(
          // @ts-expect-error `addFiles` expects `body` to be `File` or `Blob`,
          // but as the todo comment in `View.ts` indicates, we strangly pass `CompanionFile` as `body`.
          // For now it's better to ignore than to have a potential breaking change.
          newFiles.map((file) => this.getTagFile(file, this.requestClientId))
        );
        this.plugin.setPluginState({
          filterInput: ""
        });
        messages.forEach((message) => this.plugin.uppy.info(message));
        this.clearSelection();
      });
    } catch (err) {
      this.handleError(err);
    } finally {
      this.setLoading(false);
    }
  }
  render(state, viewOptions) {
    var _this = this;
    if (viewOptions === void 0) {
      viewOptions = {};
    }
    const {
      authenticated,
      didFirstRender
    } = this.plugin.getPluginState();
    const {
      i18n
    } = this.plugin.uppy;
    if (!didFirstRender) {
      this.preFirstRender();
    }
    const targetViewOptions = {
      ...this.opts,
      ...viewOptions
    };
    const {
      files,
      folders,
      filterInput,
      loading,
      currentSelection
    } = this.plugin.getPluginState();
    const {
      isChecked,
      recordShiftKeyPress,
      filterItems
    } = this;
    const hasInput = filterInput !== "";
    const pluginIcon = this.plugin.icon || defaultPickerIcon;
    const headerProps = {
      showBreadcrumbs: targetViewOptions.showBreadcrumbs,
      getFolder: this.getFolder,
      breadcrumbs: this.plugin.getPluginState().breadcrumbs,
      pluginIcon,
      title: this.plugin.title,
      logout: this.logout,
      username: this.username,
      i18n
    };
    const browserProps = {
      isChecked,
      toggleCheckbox: this.toggleCheckbox.bind(this),
      recordShiftKeyPress,
      currentSelection,
      files: hasInput ? filterItems(files) : files,
      folders: hasInput ? filterItems(folders) : folders,
      getNextFolder: this.getNextFolder,
      getFolder: this.getFolder,
      loadAllFiles: this.opts.loadAllFiles,
      virtualList: this.opts.virtualList,
      // For SearchFilterInput component
      showSearchFilter: targetViewOptions.showFilter,
      search: this.filterQuery,
      clearSearch: this.clearFilter,
      searchTerm: filterInput,
      searchOnInput: true,
      searchInputLabel: i18n("filter"),
      clearSearchLabel: i18n("resetFilter"),
      noResultsLabel: i18n("noFilesFound"),
      logout: this.logout,
      handleScroll: this.handleScroll,
      done: this.donePicking,
      cancel: this.cancelPicking,
      // eslint-disable-next-line react/jsx-props-no-spreading
      headerComponent: _(Header, headerProps),
      title: this.plugin.title,
      viewType: targetViewOptions.viewType,
      showTitles: targetViewOptions.showTitles,
      showBreadcrumbs: targetViewOptions.showBreadcrumbs,
      pluginIcon,
      i18n: this.plugin.uppy.i18n,
      uppyFiles: this.plugin.uppy.getFiles(),
      validateRestrictions: function() {
        return _this.plugin.uppy.validateRestrictions(...arguments);
      },
      isLoading: loading
    };
    if (authenticated === false) {
      return _(CloseWrapper, {
        onUnmount: this.clearSelection
      }, _(AuthView, {
        pluginName: this.plugin.title,
        pluginIcon,
        handleAuth: this.handleAuth,
        i18n: this.plugin.uppy.i18nArray,
        renderForm: this.opts.renderAuthForm,
        loading
      }));
    }
    return _(CloseWrapper, {
      onUnmount: this.clearSelection
    }, _(Browser_default, browserProps));
  }
};
async function _withAbort2(op) {
  var _classPrivateFieldLoo;
  (_classPrivateFieldLoo = _classPrivateFieldLooseBase6(this, _abortController)[_abortController]) == null || _classPrivateFieldLoo.abort();
  const abortController = new AbortController();
  _classPrivateFieldLooseBase6(this, _abortController)[_abortController] = abortController;
  const cancelRequest = () => {
    abortController.abort();
    this.clearSelection();
  };
  try {
    this.plugin.uppy.on("dashboard:close-panel", cancelRequest);
    this.plugin.uppy.on("cancel-all", cancelRequest);
    await op(abortController.signal);
  } finally {
    this.plugin.uppy.off("dashboard:close-panel", cancelRequest);
    this.plugin.uppy.off("cancel-all", cancelRequest);
    _classPrivateFieldLooseBase6(this, _abortController)[_abortController] = void 0;
  }
}
async function _list2(_ref) {
  let {
    requestPath,
    absDirPath,
    signal
  } = _ref;
  const {
    username,
    nextPagePath,
    items
  } = await this.provider.list(requestPath, {
    signal
  });
  this.username = username || this.username;
  return {
    items: items.map((item) => ({
      ...item,
      absDirPath
    })),
    nextPagePath
  };
}
async function _listFilesAndFolders2(_ref2) {
  let {
    breadcrumbs,
    signal
  } = _ref2;
  const absDirPath = formatBreadcrumbs(breadcrumbs);
  const {
    items,
    nextPagePath
  } = await _classPrivateFieldLooseBase6(this, _list)[_list]({
    requestPath: this.nextPagePath,
    absDirPath,
    signal
  });
  this.nextPagePath = nextPagePath;
  const files = [];
  const folders = [];
  items.forEach((item) => {
    if (item.isFolder) {
      folders.push(item);
    } else {
      files.push(item);
    }
  });
  return {
    files,
    folders
  };
}
async function _recursivelyListAllFiles2(_ref3) {
  let {
    requestPath,
    absDirPath,
    relDirPath,
    queue,
    onFiles,
    signal
  } = _ref3;
  let curPath = requestPath;
  while (curPath) {
    const res = await _classPrivateFieldLooseBase6(this, _list)[_list]({
      requestPath: curPath,
      absDirPath,
      signal
    });
    curPath = res.nextPagePath;
    const files = res.items.filter((item) => !item.isFolder);
    const folders = res.items.filter((item) => item.isFolder);
    onFiles(files);
    const promises = folders.map(async (folder) => queue.add(async () => _classPrivateFieldLooseBase6(this, _recursivelyListAllFiles)[_recursivelyListAllFiles]({
      requestPath: folder.requestPath,
      absDirPath: prependPath(absDirPath, folder.name),
      relDirPath: prependPath(relDirPath, folder.name),
      queue,
      onFiles,
      signal
    })));
    await Promise.all(promises);
  }
}
ProviderView.VERSION = packageJson6.version;

// node_modules/@uppy/provider-views/lib/SearchProviderView/SearchProviderView.js
function _classPrivateFieldLooseBase7(receiver, privateKey) {
  if (!Object.prototype.hasOwnProperty.call(receiver, privateKey)) {
    throw new TypeError("attempted to use private field on non-instance");
  }
  return receiver;
}
var id7 = 0;
function _classPrivateFieldLooseKey7(name) {
  return "__private_" + id7++ + "_" + name;
}
var packageJson7 = {
  "version": "3.13.0"
};
var defaultState = {
  isInputMode: true,
  files: [],
  folders: [],
  breadcrumbs: [],
  filterInput: "",
  currentSelection: [],
  searchTerm: null
};
var defaultOptions5 = {
  viewType: "grid",
  showTitles: true,
  showFilter: true,
  showBreadcrumbs: true
};
var _updateFilesAndInputMode = /* @__PURE__ */ _classPrivateFieldLooseKey7("updateFilesAndInputMode");
var SearchProviderView = class extends View {
  constructor(plugin, opts) {
    super(plugin, {
      ...defaultOptions5,
      ...opts
    });
    Object.defineProperty(this, _updateFilesAndInputMode, {
      value: _updateFilesAndInputMode2
    });
    this.nextPageQuery = null;
    this.search = this.search.bind(this);
    this.clearSearch = this.clearSearch.bind(this);
    this.resetPluginState = this.resetPluginState.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.donePicking = this.donePicking.bind(this);
    this.render = this.render.bind(this);
    this.plugin.setPluginState(defaultState);
    this.registerRequestClient();
  }
  // eslint-disable-next-line class-methods-use-this
  tearDown() {
  }
  resetPluginState() {
    this.plugin.setPluginState(defaultState);
  }
  async search(query) {
    const {
      searchTerm
    } = this.plugin.getPluginState();
    if (query && query === searchTerm) {
      return;
    }
    this.setLoading(true);
    try {
      const res = await this.provider.search(query);
      _classPrivateFieldLooseBase7(this, _updateFilesAndInputMode)[_updateFilesAndInputMode](res, []);
    } catch (err) {
      this.handleError(err);
    } finally {
      this.setLoading(false);
    }
  }
  clearSearch() {
    this.plugin.setPluginState({
      currentSelection: [],
      files: [],
      searchTerm: null
    });
  }
  async handleScroll(event) {
    const query = this.nextPageQuery || null;
    if (this.shouldHandleScroll(event) && query) {
      this.isHandlingScroll = true;
      try {
        const {
          files,
          searchTerm
        } = this.plugin.getPluginState();
        const response = await this.provider.search(searchTerm, query);
        _classPrivateFieldLooseBase7(this, _updateFilesAndInputMode)[_updateFilesAndInputMode](response, files);
      } catch (error) {
        this.handleError(error);
      } finally {
        this.isHandlingScroll = false;
      }
    }
  }
  donePicking() {
    const {
      currentSelection
    } = this.plugin.getPluginState();
    this.plugin.uppy.log("Adding remote search provider files");
    this.plugin.uppy.addFiles(currentSelection.map((file) => this.getTagFile(file)));
    this.resetPluginState();
  }
  render(state, viewOptions) {
    var _this = this;
    if (viewOptions === void 0) {
      viewOptions = {};
    }
    const {
      didFirstRender,
      isInputMode,
      searchTerm
    } = this.plugin.getPluginState();
    const {
      i18n
    } = this.plugin.uppy;
    if (!didFirstRender) {
      this.preFirstRender();
    }
    const targetViewOptions = {
      ...this.opts,
      ...viewOptions
    };
    const {
      files,
      folders,
      filterInput,
      loading,
      currentSelection
    } = this.plugin.getPluginState();
    const {
      isChecked,
      filterItems,
      recordShiftKeyPress
    } = this;
    const hasInput = filterInput !== "";
    const browserProps = {
      isChecked,
      toggleCheckbox: this.toggleCheckbox.bind(this),
      recordShiftKeyPress,
      currentSelection,
      files: hasInput ? filterItems(files) : files,
      folders: hasInput ? filterItems(folders) : folders,
      handleScroll: this.handleScroll,
      done: this.donePicking,
      cancel: this.cancelPicking,
      // For SearchFilterInput component
      showSearchFilter: targetViewOptions.showFilter,
      search: this.search,
      clearSearch: this.clearSearch,
      searchTerm,
      searchOnInput: false,
      searchInputLabel: i18n("search"),
      clearSearchLabel: i18n("resetSearch"),
      noResultsLabel: i18n("noSearchResults"),
      title: this.plugin.title,
      viewType: targetViewOptions.viewType,
      showTitles: targetViewOptions.showTitles,
      showFilter: targetViewOptions.showFilter,
      isLoading: loading,
      showBreadcrumbs: targetViewOptions.showBreadcrumbs,
      pluginIcon: this.plugin.icon,
      i18n,
      uppyFiles: this.plugin.uppy.getFiles(),
      validateRestrictions: function() {
        return _this.plugin.uppy.validateRestrictions(...arguments);
      }
    };
    if (isInputMode) {
      return _(CloseWrapper, {
        onUnmount: this.resetPluginState
      }, _("div", {
        className: "uppy-SearchProvider"
      }, _(SearchFilterInput, {
        search: this.search,
        inputLabel: i18n("enterTextToSearch"),
        buttonLabel: i18n("searchImages"),
        inputClassName: "uppy-c-textInput uppy-SearchProvider-input",
        buttonCSSClassName: "uppy-SearchProvider-searchButton",
        showButton: true
      })));
    }
    return _(CloseWrapper, {
      onUnmount: this.resetPluginState
    }, _(Browser_default, browserProps));
  }
};
function _updateFilesAndInputMode2(res, files) {
  this.nextPageQuery = res.nextPageQuery;
  res.items.forEach((item) => {
    files.push(item);
  });
  this.plugin.setPluginState({
    currentSelection: [],
    isInputMode: false,
    files,
    searchTerm: res.searchedFor
  });
}
SearchProviderView.VERSION = packageJson7.version;

// node_modules/memoize-one/dist/memoize-one.esm.js
var safeIsNaN = Number.isNaN || function ponyfill(value) {
  return typeof value === "number" && value !== value;
};
function isEqual(first, second) {
  if (first === second) {
    return true;
  }
  if (safeIsNaN(first) && safeIsNaN(second)) {
    return true;
  }
  return false;
}
function areInputsEqual(newInputs, lastInputs) {
  if (newInputs.length !== lastInputs.length) {
    return false;
  }
  for (var i4 = 0; i4 < newInputs.length; i4++) {
    if (!isEqual(newInputs[i4], lastInputs[i4])) {
      return false;
    }
  }
  return true;
}
function memoizeOne(resultFn, isEqual2) {
  if (isEqual2 === void 0) {
    isEqual2 = areInputsEqual;
  }
  var cache = null;
  function memoized() {
    var newArgs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      newArgs[_i] = arguments[_i];
    }
    if (cache && cache.lastThis === this && isEqual2(newArgs, cache.lastArgs)) {
      return cache.lastResult;
    }
    var lastResult = resultFn.apply(this, newArgs);
    cache = {
      lastResult,
      lastArgs: newArgs,
      lastThis: this
    };
    return lastResult;
  }
  memoized.clear = function clear() {
    cache = null;
  };
  return memoized;
}

// node_modules/@uppy/utils/lib/FOCUSABLE_ELEMENTS.js
var FOCUSABLE_ELEMENTS_default = ['a[href]:not([tabindex^="-"]):not([inert]):not([aria-hidden])', 'area[href]:not([tabindex^="-"]):not([inert]):not([aria-hidden])', "input:not([disabled]):not([inert]):not([aria-hidden])", "select:not([disabled]):not([inert]):not([aria-hidden])", "textarea:not([disabled]):not([inert]):not([aria-hidden])", "button:not([disabled]):not([inert]):not([aria-hidden])", 'iframe:not([tabindex^="-"]):not([inert]):not([aria-hidden])', 'object:not([tabindex^="-"]):not([inert]):not([aria-hidden])', 'embed:not([tabindex^="-"]):not([inert]):not([aria-hidden])', '[contenteditable]:not([tabindex^="-"]):not([inert]):not([aria-hidden])', '[tabindex]:not([tabindex^="-"]):not([inert]):not([aria-hidden])'];

// node_modules/@uppy/dashboard/lib/utils/getActiveOverlayEl.js
function getActiveOverlayEl(dashboardEl, activeOverlayType) {
  if (activeOverlayType) {
    const overlayEl = dashboardEl.querySelector(`[data-uppy-paneltype="${activeOverlayType}"]`);
    if (overlayEl) return overlayEl;
  }
  return dashboardEl;
}

// node_modules/@uppy/dashboard/lib/utils/trapFocus.js
function focusOnFirstNode(event, nodes) {
  const node = nodes[0];
  if (node) {
    node.focus();
    event.preventDefault();
  }
}
function focusOnLastNode(event, nodes) {
  const node = nodes[nodes.length - 1];
  if (node) {
    node.focus();
    event.preventDefault();
  }
}
function isFocusInOverlay(activeOverlayEl) {
  return activeOverlayEl.contains(document.activeElement);
}
function trapFocus(event, activeOverlayType, dashboardEl) {
  const activeOverlayEl = getActiveOverlayEl(dashboardEl, activeOverlayType);
  const focusableNodes = toArray_default(activeOverlayEl.querySelectorAll(FOCUSABLE_ELEMENTS_default));
  const focusedItemIndex = focusableNodes.indexOf(document.activeElement);
  if (!isFocusInOverlay(activeOverlayEl)) {
    focusOnFirstNode(event, focusableNodes);
  } else if (event.shiftKey && focusedItemIndex === 0) {
    focusOnLastNode(event, focusableNodes);
  } else if (!event.shiftKey && focusedItemIndex === focusableNodes.length - 1) {
    focusOnFirstNode(event, focusableNodes);
  }
}
function forInline(event, activeOverlayType, dashboardEl) {
  if (activeOverlayType === null) {
  } else {
    trapFocus(event, activeOverlayType, dashboardEl);
  }
}

// node_modules/@uppy/dashboard/lib/utils/createSuperFocus.js
var import_debounce = __toESM(require_debounce(), 1);
function createSuperFocus() {
  let lastFocusWasOnSuperFocusableEl = false;
  const superFocus = (dashboardEl, activeOverlayType) => {
    const overlayEl = getActiveOverlayEl(dashboardEl, activeOverlayType);
    const isFocusInOverlay2 = overlayEl.contains(document.activeElement);
    if (isFocusInOverlay2 && lastFocusWasOnSuperFocusableEl) return;
    const superFocusableEl = overlayEl.querySelector("[data-uppy-super-focusable]");
    if (isFocusInOverlay2 && !superFocusableEl) return;
    if (superFocusableEl) {
      superFocusableEl.focus({
        preventScroll: true
      });
      lastFocusWasOnSuperFocusableEl = true;
    } else {
      const firstEl = overlayEl.querySelector(FOCUSABLE_ELEMENTS_default);
      firstEl == null || firstEl.focus({
        preventScroll: true
      });
      lastFocusWasOnSuperFocusableEl = false;
    }
  };
  return (0, import_debounce.default)(superFocus, 260);
}

// node_modules/@uppy/dashboard/lib/components/Dashboard.js
var import_classnames12 = __toESM(require_classnames(), 1);

// node_modules/@uppy/utils/lib/isDragDropSupported.js
function isDragDropSupported() {
  const div = document.body;
  if (!("draggable" in div) || !("ondragstart" in div && "ondrop" in div)) {
    return false;
  }
  if (!("FormData" in window)) {
    return false;
  }
  if (!("FileReader" in window)) {
    return false;
  }
  return true;
}

// node_modules/@uppy/dashboard/lib/components/FileItem/index.js
var import_classnames6 = __toESM(require_classnames(), 1);
var import_is_shallow_equal = __toESM(require_is_shallow_equal(), 1);

// node_modules/@uppy/dashboard/lib/utils/getFileTypeIcon.js
function iconImage() {
  return _("svg", {
    "aria-hidden": "true",
    focusable: "false",
    width: "25",
    height: "25",
    viewBox: "0 0 25 25"
  }, _("g", {
    fill: "#686DE0",
    fillRule: "evenodd"
  }, _("path", {
    d: "M5 7v10h15V7H5zm0-1h15a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1z",
    fillRule: "nonzero"
  }), _("path", {
    d: "M6.35 17.172l4.994-5.026a.5.5 0 0 1 .707 0l2.16 2.16 3.505-3.505a.5.5 0 0 1 .707 0l2.336 2.31-.707.72-1.983-1.97-3.505 3.505a.5.5 0 0 1-.707 0l-2.16-2.159-3.938 3.939-1.409.026z",
    fillRule: "nonzero"
  }), _("circle", {
    cx: "7.5",
    cy: "9.5",
    r: "1.5"
  })));
}
function iconAudio() {
  return _("svg", {
    "aria-hidden": "true",
    focusable: "false",
    className: "uppy-c-icon",
    width: "25",
    height: "25",
    viewBox: "0 0 25 25"
  }, _("path", {
    d: "M9.5 18.64c0 1.14-1.145 2-2.5 2s-2.5-.86-2.5-2c0-1.14 1.145-2 2.5-2 .557 0 1.079.145 1.5.396V7.25a.5.5 0 0 1 .379-.485l9-2.25A.5.5 0 0 1 18.5 5v11.64c0 1.14-1.145 2-2.5 2s-2.5-.86-2.5-2c0-1.14 1.145-2 2.5-2 .557 0 1.079.145 1.5.396V8.67l-8 2v7.97zm8-11v-2l-8 2v2l8-2zM7 19.64c.855 0 1.5-.484 1.5-1s-.645-1-1.5-1-1.5.484-1.5 1 .645 1 1.5 1zm9-2c.855 0 1.5-.484 1.5-1s-.645-1-1.5-1-1.5.484-1.5 1 .645 1 1.5 1z",
    fill: "#049BCF",
    fillRule: "nonzero"
  }));
}
function iconVideo() {
  return _("svg", {
    "aria-hidden": "true",
    focusable: "false",
    className: "uppy-c-icon",
    width: "25",
    height: "25",
    viewBox: "0 0 25 25"
  }, _("path", {
    d: "M16 11.834l4.486-2.691A1 1 0 0 1 22 10v6a1 1 0 0 1-1.514.857L16 14.167V17a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v2.834zM15 9H5v8h10V9zm1 4l5 3v-6l-5 3z",
    fill: "#19AF67",
    fillRule: "nonzero"
  }));
}
function iconPDF() {
  return _("svg", {
    "aria-hidden": "true",
    focusable: "false",
    className: "uppy-c-icon",
    width: "25",
    height: "25",
    viewBox: "0 0 25 25"
  }, _("path", {
    d: "M9.766 8.295c-.691-1.843-.539-3.401.747-3.726 1.643-.414 2.505.938 2.39 3.299-.039.79-.194 1.662-.537 3.148.324.49.66.967 1.055 1.51.17.231.382.488.629.757 1.866-.128 3.653.114 4.918.655 1.487.635 2.192 1.685 1.614 2.84-.566 1.133-1.839 1.084-3.416.249-1.141-.604-2.457-1.634-3.51-2.707a13.467 13.467 0 0 0-2.238.426c-1.392 4.051-4.534 6.453-5.707 4.572-.986-1.58 1.38-4.206 4.914-5.375.097-.322.185-.656.264-1.001.08-.353.306-1.31.407-1.737-.678-1.059-1.2-2.031-1.53-2.91zm2.098 4.87c-.033.144-.068.287-.104.427l.033-.01-.012.038a14.065 14.065 0 0 1 1.02-.197l-.032-.033.052-.004a7.902 7.902 0 0 1-.208-.271c-.197-.27-.38-.526-.555-.775l-.006.028-.002-.003c-.076.323-.148.632-.186.8zm5.77 2.978c1.143.605 1.832.632 2.054.187.26-.519-.087-1.034-1.113-1.473-.911-.39-2.175-.608-3.55-.608.845.766 1.787 1.459 2.609 1.894zM6.559 18.789c.14.223.693.16 1.425-.413.827-.648 1.61-1.747 2.208-3.206-2.563 1.064-4.102 2.867-3.633 3.62zm5.345-10.97c.088-1.793-.351-2.48-1.146-2.28-.473.119-.564 1.05-.056 2.405.213.566.52 1.188.908 1.859.18-.858.268-1.453.294-1.984z",
    fill: "#E2514A",
    fillRule: "nonzero"
  }));
}
function iconArchive() {
  return _("svg", {
    "aria-hidden": "true",
    focusable: "false",
    width: "25",
    height: "25",
    viewBox: "0 0 25 25"
  }, _("path", {
    d: "M10.45 2.05h1.05a.5.5 0 0 1 .5.5v.024a.5.5 0 0 1-.5.5h-1.05a.5.5 0 0 1-.5-.5V2.55a.5.5 0 0 1 .5-.5zm2.05 1.024h1.05a.5.5 0 0 1 .5.5V3.6a.5.5 0 0 1-.5.5H12.5a.5.5 0 0 1-.5-.5v-.025a.5.5 0 0 1 .5-.5v-.001zM10.45 0h1.05a.5.5 0 0 1 .5.5v.025a.5.5 0 0 1-.5.5h-1.05a.5.5 0 0 1-.5-.5V.5a.5.5 0 0 1 .5-.5zm2.05 1.025h1.05a.5.5 0 0 1 .5.5v.024a.5.5 0 0 1-.5.5H12.5a.5.5 0 0 1-.5-.5v-.024a.5.5 0 0 1 .5-.5zm-2.05 3.074h1.05a.5.5 0 0 1 .5.5v.025a.5.5 0 0 1-.5.5h-1.05a.5.5 0 0 1-.5-.5v-.025a.5.5 0 0 1 .5-.5zm2.05 1.025h1.05a.5.5 0 0 1 .5.5v.024a.5.5 0 0 1-.5.5H12.5a.5.5 0 0 1-.5-.5v-.024a.5.5 0 0 1 .5-.5zm-2.05 1.024h1.05a.5.5 0 0 1 .5.5v.025a.5.5 0 0 1-.5.5h-1.05a.5.5 0 0 1-.5-.5v-.025a.5.5 0 0 1 .5-.5zm2.05 1.025h1.05a.5.5 0 0 1 .5.5v.025a.5.5 0 0 1-.5.5H12.5a.5.5 0 0 1-.5-.5v-.025a.5.5 0 0 1 .5-.5zm-2.05 1.025h1.05a.5.5 0 0 1 .5.5v.025a.5.5 0 0 1-.5.5h-1.05a.5.5 0 0 1-.5-.5v-.025a.5.5 0 0 1 .5-.5zm2.05 1.025h1.05a.5.5 0 0 1 .5.5v.024a.5.5 0 0 1-.5.5H12.5a.5.5 0 0 1-.5-.5v-.024a.5.5 0 0 1 .5-.5zm-1.656 3.074l-.82 5.946c.52.302 1.174.458 1.976.458.803 0 1.455-.156 1.975-.458l-.82-5.946h-2.311zm0-1.025h2.312c.512 0 .946.378 1.015.885l.82 5.946c.056.412-.142.817-.501 1.026-.686.398-1.515.597-2.49.597-.974 0-1.804-.199-2.49-.597a1.025 1.025 0 0 1-.5-1.026l.819-5.946c.07-.507.503-.885 1.015-.885zm.545 6.6a.5.5 0 0 1-.397-.561l.143-.999a.5.5 0 0 1 .495-.429h.74a.5.5 0 0 1 .495.43l.143.998a.5.5 0 0 1-.397.561c-.404.08-.819.08-1.222 0z",
    fill: "#00C469",
    fillRule: "nonzero"
  }));
}
function iconFile() {
  return _("svg", {
    "aria-hidden": "true",
    focusable: "false",
    className: "uppy-c-icon",
    width: "25",
    height: "25",
    viewBox: "0 0 25 25"
  }, _("g", {
    fill: "#A7AFB7",
    fillRule: "nonzero"
  }, _("path", {
    d: "M5.5 22a.5.5 0 0 1-.5-.5v-18a.5.5 0 0 1 .5-.5h10.719a.5.5 0 0 1 .367.16l3.281 3.556a.5.5 0 0 1 .133.339V21.5a.5.5 0 0 1-.5.5h-14zm.5-1h13V7.25L16 4H6v17z"
  }), _("path", {
    d: "M15 4v3a1 1 0 0 0 1 1h3V7h-3V4h-1z"
  })));
}
function iconText() {
  return _("svg", {
    "aria-hidden": "true",
    focusable: "false",
    className: "uppy-c-icon",
    width: "25",
    height: "25",
    viewBox: "0 0 25 25"
  }, _("path", {
    d: "M4.5 7h13a.5.5 0 1 1 0 1h-13a.5.5 0 0 1 0-1zm0 3h15a.5.5 0 1 1 0 1h-15a.5.5 0 1 1 0-1zm0 3h15a.5.5 0 1 1 0 1h-15a.5.5 0 1 1 0-1zm0 3h10a.5.5 0 1 1 0 1h-10a.5.5 0 1 1 0-1z",
    fill: "#5A5E69",
    fillRule: "nonzero"
  }));
}
function getIconByMime(fileType) {
  const defaultChoice = {
    color: "#838999",
    icon: iconFile()
  };
  if (!fileType) return defaultChoice;
  const fileTypeGeneral = fileType.split("/")[0];
  const fileTypeSpecific = fileType.split("/")[1];
  if (fileTypeGeneral === "text") {
    return {
      color: "#5a5e69",
      icon: iconText()
    };
  }
  if (fileTypeGeneral === "image") {
    return {
      color: "#686de0",
      icon: iconImage()
    };
  }
  if (fileTypeGeneral === "audio") {
    return {
      color: "#068dbb",
      icon: iconAudio()
    };
  }
  if (fileTypeGeneral === "video") {
    return {
      color: "#19af67",
      icon: iconVideo()
    };
  }
  if (fileTypeGeneral === "application" && fileTypeSpecific === "pdf") {
    return {
      color: "#e25149",
      icon: iconPDF()
    };
  }
  const archiveTypes = ["zip", "x-7z-compressed", "x-zip-compressed", "x-rar-compressed", "x-tar", "x-gzip", "x-apple-diskimage"];
  if (fileTypeGeneral === "application" && archiveTypes.indexOf(fileTypeSpecific) !== -1) {
    return {
      color: "#00C469",
      icon: iconArchive()
    };
  }
  return defaultChoice;
}

// node_modules/@uppy/dashboard/lib/components/FilePreview.js
function FilePreview(props) {
  const {
    file
  } = props;
  if (file.preview) {
    return _("img", {
      className: "uppy-Dashboard-Item-previewImg",
      alt: file.name,
      src: file.preview
    });
  }
  const {
    color,
    icon
  } = getIconByMime(file.type);
  return _("div", {
    className: "uppy-Dashboard-Item-previewIconWrap"
  }, _("span", {
    className: "uppy-Dashboard-Item-previewIcon",
    style: {
      color
    }
  }, icon), _("svg", {
    "aria-hidden": "true",
    focusable: "false",
    className: "uppy-Dashboard-Item-previewIconBg",
    width: "58",
    height: "76",
    viewBox: "0 0 58 76"
  }, _("rect", {
    fill: "#FFF",
    width: "58",
    height: "76",
    rx: "3",
    fillRule: "evenodd"
  })));
}

// node_modules/@uppy/dashboard/lib/components/FileItem/MetaErrorMessage.js
var metaFieldIdToName = (metaFieldId, metaFields) => {
  const fields = typeof metaFields === "function" ? metaFields() : metaFields;
  const field = fields.filter((f4) => f4.id === metaFieldId);
  return field[0].name;
};
function MetaErrorMessage(props) {
  const {
    file,
    toggleFileCard,
    i18n,
    metaFields
  } = props;
  const {
    missingRequiredMetaFields
  } = file;
  if (!(missingRequiredMetaFields != null && missingRequiredMetaFields.length)) {
    return null;
  }
  const metaFieldsString = missingRequiredMetaFields.map((missingMetaField) => metaFieldIdToName(missingMetaField, metaFields)).join(", ");
  return _("div", {
    className: "uppy-Dashboard-Item-errorMessage"
  }, i18n("missingRequiredMetaFields", {
    smart_count: missingRequiredMetaFields.length,
    fields: metaFieldsString
  }), " ", _("button", {
    type: "button",
    class: "uppy-u-reset uppy-Dashboard-Item-errorMessageBtn",
    onClick: () => toggleFileCard(true, file.id)
  }, i18n("editFile")));
}

// node_modules/@uppy/dashboard/lib/components/FileItem/FilePreviewAndLink/index.js
function FilePreviewAndLink(props) {
  const {
    file,
    i18n,
    toggleFileCard,
    metaFields,
    showLinkToFileUploadResult
  } = props;
  const white = "rgba(255, 255, 255, 0.5)";
  const previewBackgroundColor = file.preview ? white : getIconByMime(file.type).color;
  return _("div", {
    className: "uppy-Dashboard-Item-previewInnerWrap",
    style: {
      backgroundColor: previewBackgroundColor
    }
  }, showLinkToFileUploadResult && file.uploadURL && _("a", {
    className: "uppy-Dashboard-Item-previewLink",
    href: file.uploadURL,
    rel: "noreferrer noopener",
    target: "_blank",
    "aria-label": file.meta.name
  }, _("span", {
    hidden: true
  }, file.meta.name)), _(FilePreview, {
    file
  }), _(MetaErrorMessage, {
    file,
    i18n,
    toggleFileCard,
    metaFields
  }));
}

// node_modules/@uppy/dashboard/lib/components/FileItem/FileProgress/index.js
function onPauseResumeCancelRetry(props) {
  if (props.isUploaded) return;
  if (props.error && !props.hideRetryButton) {
    props.uppy.retryUpload(props.file.id);
    return;
  }
  if (props.resumableUploads && !props.hidePauseResumeButton) {
    props.uppy.pauseResume(props.file.id);
  } else if (props.individualCancellation && !props.hideCancelButton) {
    props.uppy.removeFile(props.file.id);
  }
}
function progressIndicatorTitle(props) {
  if (props.isUploaded) {
    return props.i18n("uploadComplete");
  }
  if (props.error) {
    return props.i18n("retryUpload");
  }
  if (props.resumableUploads) {
    if (props.file.isPaused) {
      return props.i18n("resumeUpload");
    }
    return props.i18n("pauseUpload");
  }
  if (props.individualCancellation) {
    return props.i18n("cancelUpload");
  }
  return "";
}
function ProgressIndicatorButton(props) {
  return _("div", {
    className: "uppy-Dashboard-Item-progress"
  }, _("button", {
    className: "uppy-u-reset uppy-c-btn uppy-Dashboard-Item-progressIndicator",
    type: "button",
    "aria-label": progressIndicatorTitle(props),
    title: progressIndicatorTitle(props),
    onClick: () => onPauseResumeCancelRetry(props)
  }, props.children));
}
function ProgressCircleContainer(_ref) {
  let {
    children
  } = _ref;
  return _("svg", {
    "aria-hidden": "true",
    focusable: "false",
    width: "70",
    height: "70",
    viewBox: "0 0 36 36",
    className: "uppy-c-icon uppy-Dashboard-Item-progressIcon--circle"
  }, children);
}
function ProgressCircle(_ref2) {
  let {
    progress
  } = _ref2;
  const circleLength = 2 * Math.PI * 15;
  return _("g", null, _("circle", {
    className: "uppy-Dashboard-Item-progressIcon--bg",
    r: "15",
    cx: "18",
    cy: "18",
    "stroke-width": "2",
    fill: "none"
  }), _("circle", {
    className: "uppy-Dashboard-Item-progressIcon--progress",
    r: "15",
    cx: "18",
    cy: "18",
    transform: "rotate(-90, 18, 18)",
    fill: "none",
    "stroke-width": "2",
    "stroke-dasharray": circleLength,
    "stroke-dashoffset": circleLength - circleLength / 100 * progress
  }));
}
function FileProgress(props) {
  if (!props.file.progress.uploadStarted) {
    return null;
  }
  if (props.isUploaded) {
    return _("div", {
      className: "uppy-Dashboard-Item-progress"
    }, _("div", {
      className: "uppy-Dashboard-Item-progressIndicator"
    }, _(ProgressCircleContainer, null, _("circle", {
      r: "15",
      cx: "18",
      cy: "18",
      fill: "#1bb240"
    }), _("polygon", {
      className: "uppy-Dashboard-Item-progressIcon--check",
      transform: "translate(2, 3)",
      points: "14 22.5 7 15.2457065 8.99985857 13.1732815 14 18.3547104 22.9729883 9 25 11.1005634"
    }))));
  }
  if (props.recoveredState) {
    return void 0;
  }
  if (props.error && !props.hideRetryButton) {
    return (
      // eslint-disable-next-line react/jsx-props-no-spreading
      _(ProgressIndicatorButton, props, _("svg", {
        "aria-hidden": "true",
        focusable: "false",
        className: "uppy-c-icon uppy-Dashboard-Item-progressIcon--retry",
        width: "28",
        height: "31",
        viewBox: "0 0 16 19"
      }, _("path", {
        d: "M16 11a8 8 0 1 1-8-8v2a6 6 0 1 0 6 6h2z"
      }), _("path", {
        d: "M7.9 3H10v2H7.9z"
      }), _("path", {
        d: "M8.536.5l3.535 3.536-1.414 1.414L7.12 1.914z"
      }), _("path", {
        d: "M10.657 2.621l1.414 1.415L8.536 7.57 7.12 6.157z"
      })))
    );
  }
  if (props.resumableUploads && !props.hidePauseResumeButton) {
    return (
      // eslint-disable-next-line react/jsx-props-no-spreading
      _(ProgressIndicatorButton, props, _(ProgressCircleContainer, null, _(ProgressCircle, {
        progress: props.file.progress.percentage
      }), props.file.isPaused ? _("polygon", {
        className: "uppy-Dashboard-Item-progressIcon--play",
        transform: "translate(3, 3)",
        points: "12 20 12 10 20 15"
      }) : _("g", {
        className: "uppy-Dashboard-Item-progressIcon--pause",
        transform: "translate(14.5, 13)"
      }, _("rect", {
        x: "0",
        y: "0",
        width: "2",
        height: "10",
        rx: "0"
      }), _("rect", {
        x: "5",
        y: "0",
        width: "2",
        height: "10",
        rx: "0"
      }))))
    );
  }
  if (!props.resumableUploads && props.individualCancellation && !props.hideCancelButton) {
    return (
      // eslint-disable-next-line react/jsx-props-no-spreading
      _(ProgressIndicatorButton, props, _(ProgressCircleContainer, null, _(ProgressCircle, {
        progress: props.file.progress.percentage
      }), _("polygon", {
        className: "cancel",
        transform: "translate(2, 2)",
        points: "19.8856516 11.0625 16 14.9481516 12.1019737 11.0625 11.0625 12.1143484 14.9481516 16 11.0625 19.8980263 12.1019737 20.9375 16 17.0518484 19.8856516 20.9375 20.9375 19.8980263 17.0518484 16 20.9375 12"
      })))
    );
  }
  return _("div", {
    className: "uppy-Dashboard-Item-progress"
  }, _("div", {
    className: "uppy-Dashboard-Item-progressIndicator"
  }, _(ProgressCircleContainer, null, _(ProgressCircle, {
    progress: props.file.progress.percentage
  }))));
}

// node_modules/@uppy/dashboard/lib/components/FileItem/FileInfo/index.js
var import_prettier_bytes3 = __toESM(require_prettierBytes(), 1);

// node_modules/@uppy/utils/lib/truncateString.js
var separator = "...";
function truncateString(string, maxLength) {
  if (maxLength === 0) return "";
  if (string.length <= maxLength) return string;
  if (maxLength <= separator.length + 1) return `${string.slice(0, maxLength - 1)}\u2026`;
  const charsToShow = maxLength - separator.length;
  const frontChars = Math.ceil(charsToShow / 2);
  const backChars = Math.floor(charsToShow / 2);
  return string.slice(0, frontChars) + separator + string.slice(-backChars);
}

// node_modules/@uppy/dashboard/lib/components/FileItem/FileInfo/index.js
var renderFileName = (props) => {
  const {
    author,
    name
  } = props.file.meta;
  function getMaxNameLength() {
    if (props.isSingleFile && props.containerHeight >= 350) {
      return 90;
    }
    if (props.containerWidth <= 352) {
      return 35;
    }
    if (props.containerWidth <= 576) {
      return 60;
    }
    return author ? 20 : 30;
  }
  return _("div", {
    className: "uppy-Dashboard-Item-name",
    title: name
  }, truncateString(name, getMaxNameLength()));
};
var renderAuthor = (props) => {
  var _props$file$remote;
  const {
    author
  } = props.file.meta;
  const providerName = (_props$file$remote = props.file.remote) == null ? void 0 : _props$file$remote.providerName;
  const dot = `\xB7`;
  if (!author) {
    return null;
  }
  return _("div", {
    className: "uppy-Dashboard-Item-author"
  }, _("a", {
    href: `${author.url}?utm_source=Companion&utm_medium=referral`,
    target: "_blank",
    rel: "noopener noreferrer"
  }, truncateString(author.name, 13)), providerName ? _(k, null, ` ${dot} `, providerName, ` ${dot} `) : null);
};
var renderFileSize = (props) => props.file.size && _("div", {
  className: "uppy-Dashboard-Item-statusSize"
}, (0, import_prettier_bytes3.default)(props.file.size));
var ReSelectButton = (props) => props.file.isGhost && _("span", null, " \u2022 ", _("button", {
  className: "uppy-u-reset uppy-c-btn uppy-Dashboard-Item-reSelect",
  type: "button",
  onClick: props.toggleAddFilesPanel
}, props.i18n("reSelect")));
var ErrorButton = (_ref) => {
  let {
    file,
    onClick
  } = _ref;
  if (file.error) {
    return _("button", {
      className: "uppy-u-reset uppy-c-btn uppy-Dashboard-Item-errorDetails",
      "aria-label": file.error,
      "data-microtip-position": "bottom",
      "data-microtip-size": "medium",
      onClick,
      type: "button"
    }, "?");
  }
  return null;
};
function FileInfo(props) {
  const {
    file
  } = props;
  return _("div", {
    className: "uppy-Dashboard-Item-fileInfo",
    "data-uppy-file-source": file.source
  }, _("div", {
    className: "uppy-Dashboard-Item-fileName"
  }, renderFileName(props), _(ErrorButton, {
    file: props.file,
    onClick: () => alert(props.file.error)
    // TODO: move to a custom alert implementation
  })), _("div", {
    className: "uppy-Dashboard-Item-status"
  }, renderAuthor(props), renderFileSize(props), ReSelectButton(props)), _(MetaErrorMessage, {
    file: props.file,
    i18n: props.i18n,
    toggleFileCard: props.toggleFileCard,
    metaFields: props.metaFields
  }));
}

// node_modules/@uppy/dashboard/lib/utils/copyToClipboard.js
function copyToClipboard(textToCopy, fallbackString) {
  if (fallbackString === void 0) {
    fallbackString = "Copy the URL below";
  }
  return new Promise((resolve) => {
    const textArea = document.createElement("textarea");
    textArea.setAttribute("style", {
      position: "fixed",
      top: 0,
      left: 0,
      width: "2em",
      height: "2em",
      padding: 0,
      border: "none",
      outline: "none",
      boxShadow: "none",
      background: "transparent"
    });
    textArea.value = textToCopy;
    document.body.appendChild(textArea);
    textArea.select();
    const magicCopyFailed = () => {
      document.body.removeChild(textArea);
      window.prompt(fallbackString, textToCopy);
      resolve();
    };
    try {
      const successful = document.execCommand("copy");
      if (!successful) {
        return magicCopyFailed();
      }
      document.body.removeChild(textArea);
      return resolve();
    } catch (err) {
      document.body.removeChild(textArea);
      return magicCopyFailed();
    }
  });
}

// node_modules/@uppy/dashboard/lib/components/FileItem/Buttons/index.js
function EditButton(_ref) {
  let {
    file,
    uploadInProgressOrComplete,
    metaFields,
    canEditFile,
    i18n,
    onClick
  } = _ref;
  if (!uploadInProgressOrComplete && metaFields && metaFields.length > 0 || !uploadInProgressOrComplete && canEditFile(file)) {
    return _("button", {
      className: "uppy-u-reset uppy-c-btn uppy-Dashboard-Item-action uppy-Dashboard-Item-action--edit",
      type: "button",
      "aria-label": i18n("editFileWithFilename", {
        file: file.meta.name
      }),
      title: i18n("editFileWithFilename", {
        file: file.meta.name
      }),
      onClick: () => onClick()
    }, _("svg", {
      "aria-hidden": "true",
      focusable: "false",
      className: "uppy-c-icon",
      width: "14",
      height: "14",
      viewBox: "0 0 14 14"
    }, _("g", {
      fillRule: "evenodd"
    }, _("path", {
      d: "M1.5 10.793h2.793A1 1 0 0 0 5 10.5L11.5 4a1 1 0 0 0 0-1.414L9.707.793a1 1 0 0 0-1.414 0l-6.5 6.5A1 1 0 0 0 1.5 8v2.793zm1-1V8L9 1.5l1.793 1.793-6.5 6.5H2.5z",
      fillRule: "nonzero"
    }), _("rect", {
      x: "1",
      y: "12.293",
      width: "11",
      height: "1",
      rx: ".5"
    }), _("path", {
      fillRule: "nonzero",
      d: "M6.793 2.5L9.5 5.207l.707-.707L7.5 1.793z"
    }))));
  }
  return null;
}
function RemoveButton(_ref2) {
  let {
    i18n,
    onClick,
    file
  } = _ref2;
  return _("button", {
    className: "uppy-u-reset uppy-Dashboard-Item-action uppy-Dashboard-Item-action--remove",
    type: "button",
    "aria-label": i18n("removeFile", {
      file: file.meta.name
    }),
    title: i18n("removeFile", {
      file: file.meta.name
    }),
    onClick: () => onClick()
  }, _("svg", {
    "aria-hidden": "true",
    focusable: "false",
    className: "uppy-c-icon",
    width: "18",
    height: "18",
    viewBox: "0 0 18 18"
  }, _("path", {
    d: "M9 0C4.034 0 0 4.034 0 9s4.034 9 9 9 9-4.034 9-9-4.034-9-9-9z"
  }), _("path", {
    fill: "#FFF",
    d: "M13 12.222l-.778.778L9 9.778 5.778 13 5 12.222 8.222 9 5 5.778 5.778 5 9 8.222 12.222 5l.778.778L9.778 9z"
  })));
}
var copyLinkToClipboard = (event, props) => {
  copyToClipboard(props.file.uploadURL, props.i18n("copyLinkToClipboardFallback")).then(() => {
    props.uppy.log("Link copied to clipboard.");
    props.uppy.info(props.i18n("copyLinkToClipboardSuccess"), "info", 3e3);
  }).catch(props.uppy.log).then(() => event.target.focus({
    preventScroll: true
  }));
};
function CopyLinkButton(props) {
  const {
    i18n
  } = props;
  return _("button", {
    className: "uppy-u-reset uppy-Dashboard-Item-action uppy-Dashboard-Item-action--copyLink",
    type: "button",
    "aria-label": i18n("copyLink"),
    title: i18n("copyLink"),
    onClick: (event) => copyLinkToClipboard(event, props)
  }, _("svg", {
    "aria-hidden": "true",
    focusable: "false",
    className: "uppy-c-icon",
    width: "14",
    height: "14",
    viewBox: "0 0 14 12"
  }, _("path", {
    d: "M7.94 7.703a2.613 2.613 0 0 1-.626 2.681l-.852.851a2.597 2.597 0 0 1-1.849.766A2.616 2.616 0 0 1 2.764 7.54l.852-.852a2.596 2.596 0 0 1 2.69-.625L5.267 7.099a1.44 1.44 0 0 0-.833.407l-.852.851a1.458 1.458 0 0 0 1.03 2.486c.39 0 .755-.152 1.03-.426l.852-.852c.231-.231.363-.522.406-.824l1.04-1.038zm4.295-5.937A2.596 2.596 0 0 0 10.387 1c-.698 0-1.355.272-1.849.766l-.852.851a2.614 2.614 0 0 0-.624 2.688l1.036-1.036c.041-.304.173-.6.407-.833l.852-.852c.275-.275.64-.426 1.03-.426a1.458 1.458 0 0 1 1.03 2.486l-.852.851a1.442 1.442 0 0 1-.824.406l-1.04 1.04a2.596 2.596 0 0 0 2.683-.628l.851-.85a2.616 2.616 0 0 0 0-3.697zm-6.88 6.883a.577.577 0 0 0 .82 0l3.474-3.474a.579.579 0 1 0-.819-.82L5.355 7.83a.579.579 0 0 0 0 .819z"
  })));
}
function Buttons(props) {
  const {
    uppy,
    file,
    uploadInProgressOrComplete,
    canEditFile,
    metaFields,
    showLinkToFileUploadResult,
    showRemoveButton,
    i18n,
    toggleFileCard,
    openFileEditor
  } = props;
  const editAction = () => {
    if (metaFields && metaFields.length > 0) {
      toggleFileCard(true, file.id);
    } else {
      openFileEditor(file);
    }
  };
  return _("div", {
    className: "uppy-Dashboard-Item-actionWrapper"
  }, _(EditButton, {
    i18n,
    file,
    uploadInProgressOrComplete,
    canEditFile,
    metaFields,
    onClick: editAction
  }), showLinkToFileUploadResult && file.uploadURL ? _(CopyLinkButton, {
    file,
    uppy,
    i18n
  }) : null, showRemoveButton ? _(RemoveButton, {
    i18n,
    file,
    uppy,
    onClick: () => uppy.removeFile(file.id, "removed-by-user")
  }) : null);
}

// node_modules/@uppy/dashboard/lib/components/FileItem/index.js
var FileItem = class extends x {
  componentDidMount() {
    const {
      file
    } = this.props;
    if (!file.preview) {
      this.props.handleRequestThumbnail(file);
    }
  }
  shouldComponentUpdate(nextProps) {
    return !(0, import_is_shallow_equal.default)(this.props, nextProps);
  }
  // VirtualList mounts FileItems again and they emit `thumbnail:request`
  // Otherwise thumbnails are broken or missing after Golden Retriever restores files
  componentDidUpdate() {
    const {
      file
    } = this.props;
    if (!file.preview) {
      this.props.handleRequestThumbnail(file);
    }
  }
  componentWillUnmount() {
    const {
      file
    } = this.props;
    if (!file.preview) {
      this.props.handleCancelThumbnail(file);
    }
  }
  render() {
    const {
      file
    } = this.props;
    const isProcessing = file.progress.preprocess || file.progress.postprocess;
    const isUploaded = file.progress.uploadComplete && !isProcessing && !file.error;
    const uploadInProgressOrComplete = file.progress.uploadStarted || isProcessing;
    const uploadInProgress = file.progress.uploadStarted && !file.progress.uploadComplete || isProcessing;
    const error = file.error || false;
    const {
      isGhost
    } = file;
    let showRemoveButton = this.props.individualCancellation ? !isUploaded : !uploadInProgress && !isUploaded;
    if (isUploaded && this.props.showRemoveButtonAfterComplete) {
      showRemoveButton = true;
    }
    const dashboardItemClass = (0, import_classnames6.default)({
      "uppy-Dashboard-Item": true,
      "is-inprogress": uploadInProgress && !this.props.recoveredState,
      "is-processing": isProcessing,
      "is-complete": isUploaded,
      "is-error": !!error,
      "is-resumable": this.props.resumableUploads,
      "is-noIndividualCancellation": !this.props.individualCancellation,
      "is-ghost": isGhost
    });
    return _("div", {
      className: dashboardItemClass,
      id: `uppy_${file.id}`,
      role: this.props.role
    }, _("div", {
      className: "uppy-Dashboard-Item-preview"
    }, _(FilePreviewAndLink, {
      file,
      showLinkToFileUploadResult: this.props.showLinkToFileUploadResult,
      i18n: this.props.i18n,
      toggleFileCard: this.props.toggleFileCard,
      metaFields: this.props.metaFields
    }), _(FileProgress, {
      uppy: this.props.uppy,
      file,
      error,
      isUploaded,
      hideRetryButton: this.props.hideRetryButton,
      hideCancelButton: this.props.hideCancelButton,
      hidePauseResumeButton: this.props.hidePauseResumeButton,
      recoveredState: this.props.recoveredState,
      showRemoveButtonAfterComplete: this.props.showRemoveButtonAfterComplete,
      resumableUploads: this.props.resumableUploads,
      individualCancellation: this.props.individualCancellation,
      i18n: this.props.i18n
    })), _("div", {
      className: "uppy-Dashboard-Item-fileInfoAndButtons"
    }, _(FileInfo, {
      file,
      id: this.props.id,
      acquirers: this.props.acquirers,
      containerWidth: this.props.containerWidth,
      containerHeight: this.props.containerHeight,
      i18n: this.props.i18n,
      toggleAddFilesPanel: this.props.toggleAddFilesPanel,
      toggleFileCard: this.props.toggleFileCard,
      metaFields: this.props.metaFields,
      isSingleFile: this.props.isSingleFile
    }), _(Buttons, {
      file,
      metaFields: this.props.metaFields,
      showLinkToFileUploadResult: this.props.showLinkToFileUploadResult,
      showRemoveButton,
      canEditFile: this.props.canEditFile,
      uploadInProgressOrComplete,
      toggleFileCard: this.props.toggleFileCard,
      openFileEditor: this.props.openFileEditor,
      uppy: this.props.uppy,
      i18n: this.props.i18n
    })));
  }
};

// node_modules/@uppy/dashboard/lib/components/FileList.js
function chunks(list, size) {
  const chunked = [];
  let currentChunk = [];
  list.forEach((item) => {
    if (currentChunk.length < size) {
      currentChunk.push(item);
    } else {
      chunked.push(currentChunk);
      currentChunk = [item];
    }
  });
  if (currentChunk.length) chunked.push(currentChunk);
  return chunked;
}
function FileList(_ref) {
  let {
    id: id20,
    error,
    i18n,
    uppy,
    files,
    acquirers,
    resumableUploads,
    hideRetryButton,
    hidePauseResumeButton,
    hideCancelButton,
    showLinkToFileUploadResult,
    showRemoveButtonAfterComplete,
    isWide,
    metaFields,
    isSingleFile,
    toggleFileCard,
    handleRequestThumbnail,
    handleCancelThumbnail,
    recoveredState,
    individualCancellation,
    itemsPerRow,
    openFileEditor,
    canEditFile,
    toggleAddFilesPanel,
    containerWidth,
    containerHeight
  } = _ref;
  const rowHeight = itemsPerRow === 1 ? (
    // Mobile
    71
  ) : 200;
  const rows = T3(() => {
    const sortByGhostComesFirst = (file1, file2) => files[file2].isGhost - files[file1].isGhost;
    const fileIds = Object.keys(files);
    if (recoveredState) fileIds.sort(sortByGhostComesFirst);
    return chunks(fileIds, itemsPerRow);
  }, [files, itemsPerRow, recoveredState]);
  const renderRow = (row) => (
    // associated with the `VirtualList` element.
    // We use the first file ID as the key—this should not change across scroll rerenders
    _("div", {
      class: "uppy-Dashboard-filesInner",
      role: "presentation",
      key: row[0]
    }, row.map((fileID) => _(FileItem, {
      key: fileID,
      uppy,
      id: id20,
      error,
      i18n,
      acquirers,
      resumableUploads,
      individualCancellation,
      hideRetryButton,
      hidePauseResumeButton,
      hideCancelButton,
      showLinkToFileUploadResult,
      showRemoveButtonAfterComplete,
      isWide,
      metaFields,
      recoveredState,
      isSingleFile,
      containerWidth,
      containerHeight,
      toggleFileCard,
      handleRequestThumbnail,
      handleCancelThumbnail,
      role: "listitem",
      openFileEditor,
      canEditFile,
      toggleAddFilesPanel,
      file: files[fileID]
    })))
  );
  if (isSingleFile) {
    return _("div", {
      class: "uppy-Dashboard-files"
    }, renderRow(rows[0]));
  }
  return _(VirtualList_default, {
    class: "uppy-Dashboard-files",
    role: "list",
    data: rows,
    renderRow,
    rowHeight
  });
}

// node_modules/@uppy/dashboard/lib/components/AddFiles.js
var _Symbol$for3;
_Symbol$for3 = Symbol.for("uppy test: disable unused locale key warning");
var AddFiles = class extends x {
  constructor() {
    super(...arguments);
    this.triggerFileInputClick = () => {
      this.fileInput.click();
    };
    this.triggerFolderInputClick = () => {
      this.folderInput.click();
    };
    this.triggerVideoCameraInputClick = () => {
      this.mobileVideoFileInput.click();
    };
    this.triggerPhotoCameraInputClick = () => {
      this.mobilePhotoFileInput.click();
    };
    this.onFileInputChange = (event) => {
      this.props.handleInputChange(event);
      event.target.value = null;
    };
    this.renderHiddenInput = (isFolder, refCallback) => {
      return _("input", {
        className: "uppy-Dashboard-input",
        hidden: true,
        "aria-hidden": "true",
        tabIndex: -1,
        webkitdirectory: isFolder,
        type: "file",
        name: "files[]",
        multiple: this.props.maxNumberOfFiles !== 1,
        onChange: this.onFileInputChange,
        accept: this.props.allowedFileTypes,
        ref: refCallback
      });
    };
    this.renderHiddenCameraInput = (type, nativeCameraFacingMode, refCallback) => {
      const typeToAccept = {
        photo: "image/*",
        video: "video/*"
      };
      const accept = typeToAccept[type];
      return _("input", {
        className: "uppy-Dashboard-input",
        hidden: true,
        "aria-hidden": "true",
        tabIndex: -1,
        type: "file",
        name: `camera-${type}`,
        onChange: this.onFileInputChange,
        capture: nativeCameraFacingMode,
        accept,
        ref: refCallback
      });
    };
    this.renderMyDeviceAcquirer = () => {
      return _("div", {
        className: "uppy-DashboardTab",
        role: "presentation",
        "data-uppy-acquirer-id": "MyDevice"
      }, _("button", {
        type: "button",
        className: "uppy-u-reset uppy-c-btn uppy-DashboardTab-btn",
        role: "tab",
        tabIndex: 0,
        "data-uppy-super-focusable": true,
        onClick: this.triggerFileInputClick
      }, _("div", {
        className: "uppy-DashboardTab-inner"
      }, _("svg", {
        className: "uppy-DashboardTab-iconMyDevice",
        "aria-hidden": "true",
        focusable: "false",
        width: "32",
        height: "32",
        viewBox: "0 0 32 32"
      }, _("path", {
        d: "M8.45 22.087l-1.305-6.674h17.678l-1.572 6.674H8.45zm4.975-12.412l1.083 1.765a.823.823 0 00.715.386h7.951V13.5H8.587V9.675h4.838zM26.043 13.5h-1.195v-2.598c0-.463-.336-.75-.798-.75h-8.356l-1.082-1.766A.823.823 0 0013.897 8H7.728c-.462 0-.815.256-.815.718V13.5h-.956a.97.97 0 00-.746.37.972.972 0 00-.19.81l1.724 8.565c.095.44.484.755.933.755H24c.44 0 .824-.3.929-.727l2.043-8.568a.972.972 0 00-.176-.825.967.967 0 00-.753-.38z",
        fill: "currentcolor",
        "fill-rule": "evenodd"
      }))), _("div", {
        className: "uppy-DashboardTab-name"
      }, this.props.i18n("myDevice"))));
    };
    this.renderPhotoCamera = () => {
      return _("div", {
        className: "uppy-DashboardTab",
        role: "presentation",
        "data-uppy-acquirer-id": "MobilePhotoCamera"
      }, _("button", {
        type: "button",
        className: "uppy-u-reset uppy-c-btn uppy-DashboardTab-btn",
        role: "tab",
        tabIndex: 0,
        "data-uppy-super-focusable": true,
        onClick: this.triggerPhotoCameraInputClick
      }, _("div", {
        className: "uppy-DashboardTab-inner"
      }, _("svg", {
        "aria-hidden": "true",
        focusable: "false",
        width: "32",
        height: "32",
        viewBox: "0 0 32 32"
      }, _("path", {
        d: "M23.5 9.5c1.417 0 2.5 1.083 2.5 2.5v9.167c0 1.416-1.083 2.5-2.5 2.5h-15c-1.417 0-2.5-1.084-2.5-2.5V12c0-1.417 1.083-2.5 2.5-2.5h2.917l1.416-2.167C13 7.167 13.25 7 13.5 7h5c.25 0 .5.167.667.333L20.583 9.5H23.5zM16 11.417a4.706 4.706 0 00-4.75 4.75 4.704 4.704 0 004.75 4.75 4.703 4.703 0 004.75-4.75c0-2.663-2.09-4.75-4.75-4.75zm0 7.825c-1.744 0-3.076-1.332-3.076-3.074 0-1.745 1.333-3.077 3.076-3.077 1.744 0 3.074 1.333 3.074 3.076s-1.33 3.075-3.074 3.075z",
        fill: "#02B383",
        "fill-rule": "nonzero"
      }))), _("div", {
        className: "uppy-DashboardTab-name"
      }, this.props.i18n("takePictureBtn"))));
    };
    this.renderVideoCamera = () => {
      return _("div", {
        className: "uppy-DashboardTab",
        role: "presentation",
        "data-uppy-acquirer-id": "MobileVideoCamera"
      }, _("button", {
        type: "button",
        className: "uppy-u-reset uppy-c-btn uppy-DashboardTab-btn",
        role: "tab",
        tabIndex: 0,
        "data-uppy-super-focusable": true,
        onClick: this.triggerVideoCameraInputClick
      }, _("div", {
        className: "uppy-DashboardTab-inner"
      }, _("svg", {
        "aria-hidden": "true",
        width: "32",
        height: "32",
        viewBox: "0 0 32 32"
      }, _("path", {
        fill: "#FF675E",
        fillRule: "nonzero",
        d: "m21.254 14.277 2.941-2.588c.797-.313 1.243.818 1.09 1.554-.01 2.094.02 4.189-.017 6.282-.126.915-1.145 1.08-1.58.34l-2.434-2.142c-.192.287-.504 1.305-.738.468-.104-1.293-.028-2.596-.05-3.894.047-.312.381.823.426 1.069.063-.384.206-.744.362-1.09zm-12.939-3.73c3.858.013 7.717-.025 11.574.02.912.129 1.492 1.237 1.351 2.217-.019 2.412.04 4.83-.03 7.239-.17 1.025-1.166 1.59-2.029 1.429-3.705-.012-7.41.025-11.114-.019-.913-.129-1.492-1.237-1.352-2.217.018-2.404-.036-4.813.029-7.214.136-.82.83-1.473 1.571-1.454z "
      }))), _("div", {
        className: "uppy-DashboardTab-name"
      }, this.props.i18n("recordVideoBtn"))));
    };
    this.renderBrowseButton = (text, onClickFn) => {
      const numberOfAcquirers = this.props.acquirers.length;
      return _("button", {
        type: "button",
        className: "uppy-u-reset uppy-c-btn uppy-Dashboard-browse",
        onClick: onClickFn,
        "data-uppy-super-focusable": numberOfAcquirers === 0
      }, text);
    };
    this.renderDropPasteBrowseTagline = (numberOfAcquirers) => {
      const browseFiles = this.renderBrowseButton(this.props.i18n("browseFiles"), this.triggerFileInputClick);
      const browseFolders = this.renderBrowseButton(this.props.i18n("browseFolders"), this.triggerFolderInputClick);
      const lowerFMSelectionType = this.props.fileManagerSelectionType;
      const camelFMSelectionType = lowerFMSelectionType.charAt(0).toUpperCase() + lowerFMSelectionType.slice(1);
      return _(
        "div",
        {
          class: "uppy-Dashboard-AddFiles-title"
        },
        // eslint-disable-next-line no-nested-ternary
        this.props.disableLocalFiles ? this.props.i18n("importFiles") : numberOfAcquirers > 0 ? this.props.i18nArray(`dropPasteImport${camelFMSelectionType}`, {
          browseFiles,
          browseFolders,
          browse: browseFiles
        }) : this.props.i18nArray(`dropPaste${camelFMSelectionType}`, {
          browseFiles,
          browseFolders,
          browse: browseFiles
        })
      );
    };
    this.renderAcquirer = (acquirer) => {
      var _this$props$activePic;
      return _("div", {
        className: "uppy-DashboardTab",
        role: "presentation",
        "data-uppy-acquirer-id": acquirer.id
      }, _("button", {
        type: "button",
        className: "uppy-u-reset uppy-c-btn uppy-DashboardTab-btn",
        role: "tab",
        tabIndex: 0,
        "data-cy": acquirer.id,
        "aria-controls": `uppy-DashboardContent-panel--${acquirer.id}`,
        "aria-selected": ((_this$props$activePic = this.props.activePickerPanel) == null ? void 0 : _this$props$activePic.id) === acquirer.id,
        "data-uppy-super-focusable": true,
        onClick: () => this.props.showPanel(acquirer.id)
      }, _("div", {
        className: "uppy-DashboardTab-inner"
      }, acquirer.icon()), _("div", {
        className: "uppy-DashboardTab-name"
      }, acquirer.name)));
    };
    this.renderAcquirers = (acquirers) => {
      const acquirersWithoutLastTwo = [...acquirers];
      const lastTwoAcquirers = acquirersWithoutLastTwo.splice(acquirers.length - 2, acquirers.length);
      return _(k, null, acquirersWithoutLastTwo.map((acquirer) => this.renderAcquirer(acquirer)), _("span", {
        role: "presentation",
        style: {
          "white-space": "nowrap"
        }
      }, lastTwoAcquirers.map((acquirer) => this.renderAcquirer(acquirer))));
    };
    this.renderSourcesList = (acquirers, disableLocalFiles) => {
      const {
        showNativePhotoCameraButton,
        showNativeVideoCameraButton
      } = this.props;
      let list = [];
      const myDeviceKey = "myDevice";
      if (!disableLocalFiles) list.push({
        key: myDeviceKey,
        elements: this.renderMyDeviceAcquirer()
      });
      if (showNativePhotoCameraButton) list.push({
        key: "nativePhotoCameraButton",
        elements: this.renderPhotoCamera()
      });
      if (showNativeVideoCameraButton) list.push({
        key: "nativePhotoCameraButton",
        elements: this.renderVideoCamera()
      });
      list.push(...acquirers.map((acquirer) => ({
        key: acquirer.id,
        elements: this.renderAcquirer(acquirer)
      })));
      const hasOnlyMyDevice = list.length === 1 && list[0].key === myDeviceKey;
      if (hasOnlyMyDevice) list = [];
      const listWithoutLastTwo = [...list];
      const lastTwo = listWithoutLastTwo.splice(list.length - 2, list.length);
      const renderList = (l4) => l4.map((_ref) => {
        let {
          key,
          elements
        } = _ref;
        return _(k, {
          key
        }, elements);
      });
      return _(k, null, this.renderDropPasteBrowseTagline(list.length), _("div", {
        className: "uppy-Dashboard-AddFiles-list",
        role: "tablist"
      }, renderList(listWithoutLastTwo), _("span", {
        role: "presentation",
        style: {
          "white-space": "nowrap"
        }
      }, renderList(lastTwo))));
    };
  }
  [_Symbol$for3]() {
    this.props.i18nArray("dropPasteBoth");
    this.props.i18nArray("dropPasteFiles");
    this.props.i18nArray("dropPasteFolders");
    this.props.i18nArray("dropPasteImportBoth");
    this.props.i18nArray("dropPasteImportFiles");
    this.props.i18nArray("dropPasteImportFolders");
  }
  renderPoweredByUppy() {
    const {
      i18nArray
    } = this.props;
    const uppyBranding = _("span", null, _("svg", {
      "aria-hidden": "true",
      focusable: "false",
      className: "uppy-c-icon uppy-Dashboard-poweredByIcon",
      width: "11",
      height: "11",
      viewBox: "0 0 11 11"
    }, _("path", {
      d: "M7.365 10.5l-.01-4.045h2.612L5.5.806l-4.467 5.65h2.604l.01 4.044h3.718z",
      fillRule: "evenodd"
    })), _("span", {
      className: "uppy-Dashboard-poweredByUppy"
    }, "Uppy"));
    const linkText = i18nArray("poweredBy", {
      uppy: uppyBranding
    });
    return _("a", {
      tabIndex: -1,
      href: "https://uppy.io",
      rel: "noreferrer noopener",
      target: "_blank",
      className: "uppy-Dashboard-poweredBy"
    }, linkText);
  }
  render() {
    const {
      showNativePhotoCameraButton,
      showNativeVideoCameraButton,
      nativeCameraFacingMode
    } = this.props;
    return _("div", {
      className: "uppy-Dashboard-AddFiles"
    }, this.renderHiddenInput(false, (ref) => {
      this.fileInput = ref;
    }), this.renderHiddenInput(true, (ref) => {
      this.folderInput = ref;
    }), showNativePhotoCameraButton && this.renderHiddenCameraInput("photo", nativeCameraFacingMode, (ref) => {
      this.mobilePhotoFileInput = ref;
    }), showNativeVideoCameraButton && this.renderHiddenCameraInput("video", nativeCameraFacingMode, (ref) => {
      this.mobileVideoFileInput = ref;
    }), this.renderSourcesList(this.props.acquirers, this.props.disableLocalFiles), _("div", {
      className: "uppy-Dashboard-AddFiles-info"
    }, this.props.note && _("div", {
      className: "uppy-Dashboard-note"
    }, this.props.note), this.props.proudlyDisplayPoweredByUppy && this.renderPoweredByUppy(this.props)));
  }
};
var AddFiles_default = AddFiles;

// node_modules/@uppy/dashboard/lib/components/AddFilesPanel.js
var import_classnames7 = __toESM(require_classnames(), 1);
var AddFilesPanel = (props) => {
  return _("div", {
    className: (0, import_classnames7.default)("uppy-Dashboard-AddFilesPanel", props.className),
    "data-uppy-panelType": "AddFiles",
    "aria-hidden": !props.showAddFilesPanel
  }, _("div", {
    className: "uppy-DashboardContent-bar"
  }, _("div", {
    className: "uppy-DashboardContent-title",
    role: "heading",
    "aria-level": "1"
  }, props.i18n("addingMoreFiles")), _("button", {
    className: "uppy-DashboardContent-back",
    type: "button",
    onClick: () => props.toggleAddFilesPanel(false)
  }, props.i18n("back"))), _(AddFiles_default, props));
};
var AddFilesPanel_default = AddFilesPanel;

// node_modules/@uppy/dashboard/lib/components/PickerPanelContent.js
var import_classnames8 = __toESM(require_classnames(), 1);

// node_modules/@uppy/dashboard/lib/utils/ignoreEvent.js
function ignoreEvent(ev) {
  const {
    tagName
  } = ev.target;
  if (tagName === "INPUT" || tagName === "TEXTAREA") {
    ev.stopPropagation();
    return;
  }
  ev.preventDefault();
  ev.stopPropagation();
}
var ignoreEvent_default = ignoreEvent;

// node_modules/@uppy/dashboard/lib/components/PickerPanelContent.js
function PickerPanelContent(_ref) {
  let {
    activePickerPanel,
    className,
    hideAllPanels,
    i18n,
    state,
    uppy
  } = _ref;
  return _("div", {
    className: (0, import_classnames8.default)("uppy-DashboardContent-panel", className),
    role: "tabpanel",
    "data-uppy-panelType": "PickerPanel",
    id: `uppy-DashboardContent-panel--${activePickerPanel.id}`,
    onDragOver: ignoreEvent_default,
    onDragLeave: ignoreEvent_default,
    onDrop: ignoreEvent_default,
    onPaste: ignoreEvent_default
  }, _("div", {
    className: "uppy-DashboardContent-bar"
  }, _("div", {
    className: "uppy-DashboardContent-title",
    role: "heading",
    "aria-level": "1"
  }, i18n("importFrom", {
    name: activePickerPanel.name
  })), _("button", {
    className: "uppy-DashboardContent-back",
    type: "button",
    onClick: hideAllPanels
  }, i18n("cancel"))), _("div", {
    className: "uppy-DashboardContent-panelBody"
  }, uppy.getPlugin(activePickerPanel.id).render(state)));
}
var PickerPanelContent_default = PickerPanelContent;

// node_modules/@uppy/dashboard/lib/components/EditorPanel.js
var import_classnames9 = __toESM(require_classnames(), 1);
function EditorPanel(props) {
  const file = props.files[props.fileCardFor];
  const handleCancel = () => {
    props.uppy.emit("file-editor:cancel", file);
    props.closeFileEditor();
  };
  return _("div", {
    className: (0, import_classnames9.default)("uppy-DashboardContent-panel", props.className),
    role: "tabpanel",
    "data-uppy-panelType": "FileEditor",
    id: "uppy-DashboardContent-panel--editor"
  }, _("div", {
    className: "uppy-DashboardContent-bar"
  }, _("div", {
    className: "uppy-DashboardContent-title",
    role: "heading",
    "aria-level": "1"
  }, props.i18nArray("editing", {
    file: _("span", {
      className: "uppy-DashboardContent-titleFile"
    }, file.meta ? file.meta.name : file.name)
  })), _("button", {
    className: "uppy-DashboardContent-back",
    type: "button",
    onClick: handleCancel
  }, props.i18n("cancel")), _("button", {
    className: "uppy-DashboardContent-save",
    type: "button",
    onClick: props.saveFileEditor
  }, props.i18n("save"))), _("div", {
    className: "uppy-DashboardContent-panelBody"
  }, props.editors.map((target) => {
    return props.uppy.getPlugin(target.id).render(props.state);
  })));
}
var EditorPanel_default = EditorPanel;

// node_modules/@uppy/dashboard/lib/components/PickerPanelTopBar.js
var uploadStates = {
  STATE_ERROR: "error",
  STATE_WAITING: "waiting",
  STATE_PREPROCESSING: "preprocessing",
  STATE_UPLOADING: "uploading",
  STATE_POSTPROCESSING: "postprocessing",
  STATE_COMPLETE: "complete",
  STATE_PAUSED: "paused"
};
function getUploadingState2(isAllErrored, isAllComplete, isAllPaused, files) {
  if (files === void 0) {
    files = {};
  }
  if (isAllErrored) {
    return uploadStates.STATE_ERROR;
  }
  if (isAllComplete) {
    return uploadStates.STATE_COMPLETE;
  }
  if (isAllPaused) {
    return uploadStates.STATE_PAUSED;
  }
  let state = uploadStates.STATE_WAITING;
  const fileIDs = Object.keys(files);
  for (let i4 = 0; i4 < fileIDs.length; i4++) {
    const {
      progress
    } = files[fileIDs[i4]];
    if (progress.uploadStarted && !progress.uploadComplete) {
      return uploadStates.STATE_UPLOADING;
    }
    if (progress.preprocess && state !== uploadStates.STATE_UPLOADING) {
      state = uploadStates.STATE_PREPROCESSING;
    }
    if (progress.postprocess && state !== uploadStates.STATE_UPLOADING && state !== uploadStates.STATE_PREPROCESSING) {
      state = uploadStates.STATE_POSTPROCESSING;
    }
  }
  return state;
}
function UploadStatus(_ref) {
  let {
    files,
    i18n,
    isAllComplete,
    isAllErrored,
    isAllPaused,
    inProgressNotPausedFiles,
    newFiles,
    processingFiles
  } = _ref;
  const uploadingState = getUploadingState2(isAllErrored, isAllComplete, isAllPaused, files);
  switch (uploadingState) {
    case "uploading":
      return i18n("uploadingXFiles", {
        smart_count: inProgressNotPausedFiles.length
      });
    case "preprocessing":
    case "postprocessing":
      return i18n("processingXFiles", {
        smart_count: processingFiles.length
      });
    case "paused":
      return i18n("uploadPaused");
    case "waiting":
      return i18n("xFilesSelected", {
        smart_count: newFiles.length
      });
    case "complete":
      return i18n("uploadComplete");
    case "error":
      return i18n("error");
    default:
  }
}
function PanelTopBar(props) {
  const {
    i18n,
    isAllComplete,
    hideCancelButton,
    maxNumberOfFiles,
    toggleAddFilesPanel,
    uppy
  } = props;
  let {
    allowNewUpload
  } = props;
  if (allowNewUpload && maxNumberOfFiles) {
    allowNewUpload = props.totalFileCount < props.maxNumberOfFiles;
  }
  return _("div", {
    className: "uppy-DashboardContent-bar"
  }, !isAllComplete && !hideCancelButton ? _("button", {
    className: "uppy-DashboardContent-back",
    type: "button",
    onClick: () => uppy.cancelAll()
  }, i18n("cancel")) : _("div", null), _("div", {
    className: "uppy-DashboardContent-title",
    role: "heading",
    "aria-level": "1"
  }, _(UploadStatus, props)), allowNewUpload ? _("button", {
    className: "uppy-DashboardContent-addMore",
    type: "button",
    "aria-label": i18n("addMoreFiles"),
    title: i18n("addMoreFiles"),
    onClick: () => toggleAddFilesPanel(true)
  }, _("svg", {
    "aria-hidden": "true",
    focusable: "false",
    className: "uppy-c-icon",
    width: "15",
    height: "15",
    viewBox: "0 0 15 15"
  }, _("path", {
    d: "M8 6.5h6a.5.5 0 0 1 .5.5v.5a.5.5 0 0 1-.5.5H8v6a.5.5 0 0 1-.5.5H7a.5.5 0 0 1-.5-.5V8h-6a.5.5 0 0 1-.5-.5V7a.5.5 0 0 1 .5-.5h6v-6A.5.5 0 0 1 7 0h.5a.5.5 0 0 1 .5.5v6z"
  })), _("span", {
    className: "uppy-DashboardContent-addMoreCaption"
  }, i18n("addMore"))) : _("div", null));
}
var PickerPanelTopBar_default = PanelTopBar;

// node_modules/@uppy/dashboard/lib/components/FileCard/index.js
var import_classnames10 = __toESM(require_classnames(), 1);

// node_modules/@uppy/dashboard/lib/components/FileCard/RenderMetaFields.js
function RenderMetaFields(props) {
  const {
    computedMetaFields,
    requiredMetaFields,
    updateMeta,
    form,
    formState
  } = props;
  const fieldCSSClasses = {
    text: "uppy-u-reset uppy-c-textInput uppy-Dashboard-FileCard-input"
  };
  return computedMetaFields.map((field) => {
    const id20 = `uppy-Dashboard-FileCard-input-${field.id}`;
    const required = requiredMetaFields.includes(field.id);
    return _("fieldset", {
      key: field.id,
      className: "uppy-Dashboard-FileCard-fieldset"
    }, _("label", {
      className: "uppy-Dashboard-FileCard-label",
      htmlFor: id20
    }, field.name), field.render !== void 0 ? field.render({
      value: formState[field.id],
      onChange: (newVal) => updateMeta(newVal, field.id),
      fieldCSSClasses,
      required,
      form: form.id
    }, _) : _("input", {
      className: fieldCSSClasses.text,
      id: id20,
      form: form.id,
      type: field.type || "text",
      required,
      value: formState[field.id],
      placeholder: field.placeholder,
      onInput: (ev) => updateMeta(ev.target.value, field.id),
      "data-uppy-super-focusable": true
    }));
  });
}

// node_modules/@uppy/dashboard/lib/components/FileCard/index.js
function FileCard(props) {
  var _getMetaFields;
  const {
    files,
    fileCardFor,
    toggleFileCard,
    saveFileCard,
    metaFields,
    requiredMetaFields,
    openFileEditor,
    i18n,
    i18nArray,
    className,
    canEditFile
  } = props;
  const getMetaFields = () => {
    return typeof metaFields === "function" ? metaFields(files[fileCardFor]) : metaFields;
  };
  const file = files[fileCardFor];
  const computedMetaFields = (_getMetaFields = getMetaFields()) != null ? _getMetaFields : [];
  const showEditButton = canEditFile(file);
  const storedMetaData = {};
  computedMetaFields.forEach((field) => {
    var _file$meta$field$id;
    storedMetaData[field.id] = (_file$meta$field$id = file.meta[field.id]) != null ? _file$meta$field$id : "";
  });
  const [formState, setFormState] = d3(storedMetaData);
  const handleSave = q3((ev) => {
    ev.preventDefault();
    saveFileCard(formState, fileCardFor);
  }, [saveFileCard, formState, fileCardFor]);
  const updateMeta = (newVal, name) => {
    setFormState({
      ...formState,
      [name]: newVal
    });
  };
  const handleCancel = () => {
    toggleFileCard(false);
  };
  const [form] = d3(() => {
    const formEl = document.createElement("form");
    formEl.setAttribute("tabindex", "-1");
    formEl.id = nanoid();
    return formEl;
  });
  y3(() => {
    document.body.appendChild(form);
    form.addEventListener("submit", handleSave);
    return () => {
      form.removeEventListener("submit", handleSave);
      document.body.removeChild(form);
    };
  }, [form, handleSave]);
  return _("div", {
    className: (0, import_classnames10.default)("uppy-Dashboard-FileCard", className),
    "data-uppy-panelType": "FileCard",
    onDragOver: ignoreEvent_default,
    onDragLeave: ignoreEvent_default,
    onDrop: ignoreEvent_default,
    onPaste: ignoreEvent_default
  }, _("div", {
    className: "uppy-DashboardContent-bar"
  }, _("div", {
    className: "uppy-DashboardContent-title",
    role: "heading",
    "aria-level": "1"
  }, i18nArray("editing", {
    file: _("span", {
      className: "uppy-DashboardContent-titleFile"
    }, file.meta ? file.meta.name : file.name)
  })), _("button", {
    className: "uppy-DashboardContent-back",
    type: "button",
    form: form.id,
    title: i18n("finishEditingFile"),
    onClick: handleCancel
  }, i18n("cancel"))), _("div", {
    className: "uppy-Dashboard-FileCard-inner"
  }, _("div", {
    className: "uppy-Dashboard-FileCard-preview",
    style: {
      backgroundColor: getIconByMime(file.type).color
    }
  }, _(FilePreview, {
    file
  }), showEditButton && _("button", {
    type: "button",
    className: "uppy-u-reset uppy-c-btn uppy-Dashboard-FileCard-edit",
    onClick: (event) => {
      handleSave(event);
      openFileEditor(file);
    }
  }, i18n("editImage"))), _("div", {
    className: "uppy-Dashboard-FileCard-info"
  }, _(RenderMetaFields, {
    computedMetaFields,
    requiredMetaFields,
    updateMeta,
    form,
    formState
  })), _("div", {
    className: "uppy-Dashboard-FileCard-actions"
  }, _("button", {
    className: "uppy-u-reset uppy-c-btn uppy-c-btn-primary uppy-Dashboard-FileCard-actionsBtn",
    type: "submit",
    form: form.id
  }, i18n("saveChanges")), _("button", {
    className: "uppy-u-reset uppy-c-btn uppy-c-btn-link uppy-Dashboard-FileCard-actionsBtn",
    type: "button",
    onClick: handleCancel,
    form: form.id
  }, i18n("cancel")))));
}

// node_modules/@uppy/dashboard/lib/components/Slide.js
var import_classnames11 = __toESM(require_classnames(), 1);
var transitionName = "uppy-transition-slideDownUp";
var duration = 250;
function Slide(_ref) {
  let {
    children
  } = _ref;
  const [cachedChildren, setCachedChildren] = d3(null);
  const [className, setClassName] = d3("");
  const enterTimeoutRef = A3();
  const leaveTimeoutRef = A3();
  const animationFrameRef = A3();
  const handleEnterTransition = () => {
    setClassName(`${transitionName}-enter`);
    cancelAnimationFrame(animationFrameRef.current);
    clearTimeout(leaveTimeoutRef.current);
    leaveTimeoutRef.current = void 0;
    animationFrameRef.current = requestAnimationFrame(() => {
      setClassName(`${transitionName}-enter ${transitionName}-enter-active`);
      enterTimeoutRef.current = setTimeout(() => {
        setClassName("");
      }, duration);
    });
  };
  const handleLeaveTransition = () => {
    setClassName(`${transitionName}-leave`);
    cancelAnimationFrame(animationFrameRef.current);
    clearTimeout(enterTimeoutRef.current);
    enterTimeoutRef.current = void 0;
    animationFrameRef.current = requestAnimationFrame(() => {
      setClassName(`${transitionName}-leave ${transitionName}-leave-active`);
      leaveTimeoutRef.current = setTimeout(() => {
        setCachedChildren(null);
        setClassName("");
      }, duration);
    });
  };
  y3(() => {
    const child = H(children)[0];
    if (cachedChildren === child) return;
    if (child && !cachedChildren) {
      handleEnterTransition();
    } else if (cachedChildren && !child && !leaveTimeoutRef.current) {
      handleLeaveTransition();
    }
    setCachedChildren(child);
  }, [children, cachedChildren]);
  y3(() => {
    return () => {
      clearTimeout(enterTimeoutRef.current);
      clearTimeout(leaveTimeoutRef.current);
      cancelAnimationFrame(animationFrameRef.current);
    };
  }, []);
  if (!cachedChildren) return null;
  return J(cachedChildren, {
    className: (0, import_classnames11.default)(className, cachedChildren.props.className)
  });
}
var Slide_default = Slide;

// node_modules/@uppy/dashboard/lib/components/Dashboard.js
function _extends3() {
  _extends3 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i4 = 1; i4 < arguments.length; i4++) {
      var source = arguments[i4];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends3.apply(this, arguments);
}
var WIDTH_XL = 900;
var WIDTH_LG = 700;
var WIDTH_MD = 576;
var HEIGHT_MD = 330;
function Dashboard(props) {
  const isNoFiles = props.totalFileCount === 0;
  const isSingleFile = props.totalFileCount === 1;
  const isSizeMD = props.containerWidth > WIDTH_MD;
  const isSizeHeightMD = props.containerHeight > HEIGHT_MD;
  const dashboardClassName = (0, import_classnames12.default)({
    "uppy-Dashboard": true,
    "uppy-Dashboard--isDisabled": props.disabled,
    "uppy-Dashboard--animateOpenClose": props.animateOpenClose,
    "uppy-Dashboard--isClosing": props.isClosing,
    "uppy-Dashboard--isDraggingOver": props.isDraggingOver,
    "uppy-Dashboard--modal": !props.inline,
    "uppy-size--md": props.containerWidth > WIDTH_MD,
    "uppy-size--lg": props.containerWidth > WIDTH_LG,
    "uppy-size--xl": props.containerWidth > WIDTH_XL,
    "uppy-size--height-md": props.containerHeight > HEIGHT_MD,
    // We might want to enable this in the future
    // 'uppy-size--height-lg': props.containerHeight > HEIGHT_LG,
    // 'uppy-size--height-xl': props.containerHeight > HEIGHT_XL,
    "uppy-Dashboard--isAddFilesPanelVisible": props.showAddFilesPanel,
    "uppy-Dashboard--isInnerWrapVisible": props.areInsidesReadyToBeVisible,
    // Only enable “centered single file” mode when Dashboard is tall enough
    "uppy-Dashboard--singleFile": props.singleFileFullScreen && isSingleFile && isSizeHeightMD
  });
  let itemsPerRow = 1;
  if (props.containerWidth > WIDTH_XL) {
    itemsPerRow = 5;
  } else if (props.containerWidth > WIDTH_LG) {
    itemsPerRow = 4;
  } else if (props.containerWidth > WIDTH_MD) {
    itemsPerRow = 3;
  }
  const showFileList = props.showSelectedFiles && !isNoFiles;
  const numberOfFilesForRecovery = props.recoveredState ? Object.keys(props.recoveredState.files).length : null;
  const numberOfGhosts = props.files ? Object.keys(props.files).filter((fileID) => props.files[fileID].isGhost).length : null;
  const renderRestoredText = () => {
    if (numberOfGhosts > 0) {
      return props.i18n("recoveredXFiles", {
        smart_count: numberOfGhosts
      });
    }
    return props.i18n("recoveredAllFiles");
  };
  const dashboard = _("div", {
    className: dashboardClassName,
    "data-uppy-theme": props.theme,
    "data-uppy-num-acquirers": props.acquirers.length,
    "data-uppy-drag-drop-supported": !props.disableLocalFiles && isDragDropSupported(),
    "aria-hidden": props.inline ? "false" : props.isHidden,
    "aria-disabled": props.disabled,
    "aria-label": !props.inline ? props.i18n("dashboardWindowTitle") : props.i18n("dashboardTitle"),
    onPaste: props.handlePaste,
    onDragOver: props.handleDragOver,
    onDragLeave: props.handleDragLeave,
    onDrop: props.handleDrop
  }, _("div", {
    "aria-hidden": "true",
    className: "uppy-Dashboard-overlay",
    tabIndex: -1,
    onClick: props.handleClickOutside
  }), _("div", {
    className: "uppy-Dashboard-inner",
    "aria-modal": !props.inline && "true",
    role: props.inline ? void 0 : "dialog",
    style: {
      width: props.inline && props.width ? props.width : "",
      height: props.inline && props.height ? props.height : ""
    }
  }, !props.inline ? _("button", {
    className: "uppy-u-reset uppy-Dashboard-close",
    type: "button",
    "aria-label": props.i18n("closeModal"),
    title: props.i18n("closeModal"),
    onClick: props.closeModal
  }, _("span", {
    "aria-hidden": "true"
  }, "\xD7")) : null, _("div", {
    className: "uppy-Dashboard-innerWrap"
  }, _("div", {
    className: "uppy-Dashboard-dropFilesHereHint"
  }, props.i18n("dropHint")), showFileList && _(PickerPanelTopBar_default, props), numberOfFilesForRecovery && _("div", {
    className: "uppy-Dashboard-serviceMsg"
  }, _("svg", {
    className: "uppy-Dashboard-serviceMsg-icon",
    "aria-hidden": "true",
    focusable: "false",
    width: "21",
    height: "16",
    viewBox: "0 0 24 19"
  }, _("g", {
    transform: "translate(0 -1)",
    fill: "none",
    fillRule: "evenodd"
  }, _("path", {
    d: "M12.857 1.43l10.234 17.056A1 1 0 0122.234 20H1.766a1 1 0 01-.857-1.514L11.143 1.429a1 1 0 011.714 0z",
    fill: "#FFD300"
  }), _("path", {
    fill: "#000",
    d: "M11 6h2l-.3 8h-1.4z"
  }), _("circle", {
    fill: "#000",
    cx: "12",
    cy: "17",
    r: "1"
  }))), _("strong", {
    className: "uppy-Dashboard-serviceMsg-title"
  }, props.i18n("sessionRestored")), _("div", {
    className: "uppy-Dashboard-serviceMsg-text"
  }, renderRestoredText())), showFileList ? _(FileList, {
    id: props.id,
    error: props.error,
    i18n: props.i18n,
    uppy: props.uppy,
    files: props.files,
    acquirers: props.acquirers,
    resumableUploads: props.resumableUploads,
    hideRetryButton: props.hideRetryButton,
    hidePauseResumeButton: props.hidePauseResumeButton,
    hideCancelButton: props.hideCancelButton,
    showLinkToFileUploadResult: props.showLinkToFileUploadResult,
    showRemoveButtonAfterComplete: props.showRemoveButtonAfterComplete,
    isWide: props.isWide,
    metaFields: props.metaFields,
    toggleFileCard: props.toggleFileCard,
    handleRequestThumbnail: props.handleRequestThumbnail,
    handleCancelThumbnail: props.handleCancelThumbnail,
    recoveredState: props.recoveredState,
    individualCancellation: props.individualCancellation,
    openFileEditor: props.openFileEditor,
    canEditFile: props.canEditFile,
    toggleAddFilesPanel: props.toggleAddFilesPanel,
    isSingleFile,
    itemsPerRow
  }) : _(AddFiles_default, _extends3({}, props, {
    isSizeMD
  })), _(Slide_default, null, props.showAddFilesPanel ? _(AddFilesPanel_default, _extends3({
    key: "AddFiles"
  }, props, {
    isSizeMD
  })) : null), _(Slide_default, null, props.fileCardFor ? _(FileCard, _extends3({
    key: "FileCard"
  }, props)) : null), _(Slide_default, null, props.activePickerPanel ? _(PickerPanelContent_default, _extends3({
    key: "Picker"
  }, props)) : null), _(Slide_default, null, props.showFileEditor ? _(EditorPanel_default, _extends3({
    key: "Editor"
  }, props)) : null), _("div", {
    className: "uppy-Dashboard-progressindicators"
  }, props.progressindicators.map((target) => {
    return props.uppy.getPlugin(target.id).render(props.state);
  })))));
  return dashboard;
}

// node_modules/@uppy/dashboard/lib/locale.js
var locale_default4 = {
  strings: {
    // When `inline: false`, used as the screen reader label for the button that closes the modal.
    closeModal: "Close Modal",
    // Used as the screen reader label for the plus (+) button that shows the “Add more files” screen
    addMoreFiles: "Add more files",
    addingMoreFiles: "Adding more files",
    // Used as the header for import panels, e.g., “Import from Google Drive”.
    importFrom: "Import from %{name}",
    // When `inline: false`, used as the screen reader label for the dashboard modal.
    dashboardWindowTitle: "Uppy Dashboard Window (Press escape to close)",
    // When `inline: true`, used as the screen reader label for the dashboard area.
    dashboardTitle: "Uppy Dashboard",
    // Shown in the Informer when a link to a file was copied to the clipboard.
    copyLinkToClipboardSuccess: "Link copied to clipboard.",
    // Used when a link cannot be copied automatically — the user has to select the text from the
    // input element below this string.
    copyLinkToClipboardFallback: "Copy the URL below",
    // Used as the hover title and screen reader label for buttons that copy a file link.
    copyLink: "Copy link",
    back: "Back",
    // Used as the screen reader label for buttons that remove a file.
    removeFile: "Remove file",
    // Used as the screen reader label for buttons that open the metadata editor panel for a file.
    editFile: "Edit file",
    editImage: "Edit image",
    // Shown in the panel header for the metadata editor. Rendered as “Editing image.png”.
    editing: "Editing %{file}",
    // Shown on the main upload screen when an upload error occurs
    error: "Error",
    // Used as the screen reader label for the button that saves metadata edits and returns to the
    // file list view.
    finishEditingFile: "Finish editing file",
    saveChanges: "Save changes",
    // Used as the label for the tab button that opens the system file selection dialog.
    myDevice: "My Device",
    dropHint: "Drop your files here",
    // Used as the hover text and screen reader label for file progress indicators when
    // they have been fully uploaded.
    uploadComplete: "Upload complete",
    uploadPaused: "Upload paused",
    // Used as the hover text and screen reader label for the buttons to resume paused uploads.
    resumeUpload: "Resume upload",
    // Used as the hover text and screen reader label for the buttons to pause uploads.
    pauseUpload: "Pause upload",
    // Used as the hover text and screen reader label for the buttons to retry failed uploads.
    retryUpload: "Retry upload",
    // Used as the hover text and screen reader label for the buttons to cancel uploads.
    cancelUpload: "Cancel upload",
    // Used in a title, how many files are currently selected
    xFilesSelected: {
      0: "%{smart_count} file selected",
      1: "%{smart_count} files selected"
    },
    uploadingXFiles: {
      0: "Uploading %{smart_count} file",
      1: "Uploading %{smart_count} files"
    },
    processingXFiles: {
      0: "Processing %{smart_count} file",
      1: "Processing %{smart_count} files"
    },
    // The "powered by Uppy" link at the bottom of the Dashboard.
    poweredBy: "Powered by %{uppy}",
    addMore: "Add more",
    editFileWithFilename: "Edit file %{file}",
    save: "Save",
    cancel: "Cancel",
    dropPasteFiles: "Drop files here or %{browseFiles}",
    dropPasteFolders: "Drop files here or %{browseFolders}",
    dropPasteBoth: "Drop files here, %{browseFiles} or %{browseFolders}",
    dropPasteImportFiles: "Drop files here, %{browseFiles} or import from:",
    dropPasteImportFolders: "Drop files here, %{browseFolders} or import from:",
    dropPasteImportBoth: "Drop files here, %{browseFiles}, %{browseFolders} or import from:",
    importFiles: "Import files from:",
    browseFiles: "browse files",
    browseFolders: "browse folders",
    recoveredXFiles: {
      0: "We could not fully recover 1 file. Please re-select it and resume the upload.",
      1: "We could not fully recover %{smart_count} files. Please re-select them and resume the upload."
    },
    recoveredAllFiles: "We restored all files. You can now resume the upload.",
    sessionRestored: "Session restored",
    reSelect: "Re-select",
    missingRequiredMetaFields: {
      0: "Missing required meta field: %{fields}.",
      1: "Missing required meta fields: %{fields}."
    },
    // Used for native device camera buttons on mobile
    takePictureBtn: "Take Picture",
    recordVideoBtn: "Record Video"
  }
};

// node_modules/@uppy/dashboard/lib/Dashboard.js
function _classPrivateFieldLooseBase8(receiver, privateKey) {
  if (!Object.prototype.hasOwnProperty.call(receiver, privateKey)) {
    throw new TypeError("attempted to use private field on non-instance");
  }
  return receiver;
}
var id8 = 0;
function _classPrivateFieldLooseKey8(name) {
  return "__private_" + id8++ + "_" + name;
}
var packageJson8 = {
  "version": "3.9.1"
};
var memoize = memoizeOne.default || memoizeOne;
var TAB_KEY = 9;
var ESC_KEY = 27;
function createPromise() {
  const o4 = {};
  o4.promise = new Promise((resolve, reject) => {
    o4.resolve = resolve;
    o4.reject = reject;
  });
  return o4;
}
var defaultOptions6 = {
  target: "body",
  metaFields: [],
  inline: false,
  width: 750,
  height: 550,
  thumbnailWidth: 280,
  thumbnailType: "image/jpeg",
  waitForThumbnailsBeforeUpload: false,
  defaultPickerIcon,
  showLinkToFileUploadResult: false,
  showProgressDetails: false,
  hideUploadButton: false,
  hideCancelButton: false,
  hideRetryButton: false,
  hidePauseResumeButton: false,
  hideProgressAfterFinish: false,
  note: null,
  closeModalOnClickOutside: false,
  closeAfterFinish: false,
  singleFileFullScreen: true,
  disableStatusBar: false,
  disableInformer: false,
  disableThumbnailGenerator: false,
  disablePageScrollWhenModalOpen: true,
  animateOpenClose: true,
  fileManagerSelectionType: "files",
  proudlyDisplayPoweredByUppy: true,
  showSelectedFiles: true,
  showRemoveButtonAfterComplete: false,
  browserBackButtonClose: false,
  showNativePhotoCameraButton: false,
  showNativeVideoCameraButton: false,
  theme: "light",
  autoOpen: null,
  autoOpenFileEditor: false,
  disabled: false,
  disableLocalFiles: false,
  // Dynamic default options, they have to be defined in the constructor (because
  // they require access to the `this` keyword), but we still want them to
  // appear in the default options so TS knows they'll be defined.
  doneButtonHandler: void 0,
  onRequestCloseModal: null
};
var _disabledNodes = /* @__PURE__ */ _classPrivateFieldLooseKey8("disabledNodes");
var _generateLargeThumbnailIfSingleFile = /* @__PURE__ */ _classPrivateFieldLooseKey8("generateLargeThumbnailIfSingleFile");
var _openFileEditorWhenFilesAdded = /* @__PURE__ */ _classPrivateFieldLooseKey8("openFileEditorWhenFilesAdded");
var _attachRenderFunctionToTarget = /* @__PURE__ */ _classPrivateFieldLooseKey8("attachRenderFunctionToTarget");
var _isTargetSupported = /* @__PURE__ */ _classPrivateFieldLooseKey8("isTargetSupported");
var _getAcquirers = /* @__PURE__ */ _classPrivateFieldLooseKey8("getAcquirers");
var _getProgressIndicators = /* @__PURE__ */ _classPrivateFieldLooseKey8("getProgressIndicators");
var _getEditors = /* @__PURE__ */ _classPrivateFieldLooseKey8("getEditors");
var _addSpecifiedPluginsFromOptions = /* @__PURE__ */ _classPrivateFieldLooseKey8("addSpecifiedPluginsFromOptions");
var _autoDiscoverPlugins = /* @__PURE__ */ _classPrivateFieldLooseKey8("autoDiscoverPlugins");
var _addSupportedPluginIfNoTarget = /* @__PURE__ */ _classPrivateFieldLooseKey8("addSupportedPluginIfNoTarget");
var Dashboard2 = class extends UIPlugin_default {
  // Timeouts
  constructor(uppy, _opts) {
    var _this$opts4, _this$opts4$onRequest;
    let autoOpen;
    if (!_opts) {
      autoOpen = null;
    } else if (_opts.autoOpen === void 0) {
      autoOpen = _opts.autoOpenFileEditor ? "imageEditor" : null;
    } else {
      autoOpen = _opts.autoOpen;
    }
    super(uppy, {
      ...defaultOptions6,
      ..._opts,
      autoOpen
    });
    Object.defineProperty(this, _disabledNodes, {
      writable: true,
      value: void 0
    });
    this.modalName = `uppy-Dashboard-${nanoid()}`;
    this.superFocus = createSuperFocus();
    this.ifFocusedOnUppyRecently = false;
    this.removeTarget = (plugin) => {
      const pluginState = this.getPluginState();
      const newTargets = pluginState.targets.filter((target) => target.id !== plugin.id);
      this.setPluginState({
        targets: newTargets
      });
    };
    this.addTarget = (plugin) => {
      const callerPluginId = plugin.id || plugin.constructor.name;
      const callerPluginName = plugin.title || callerPluginId;
      const callerPluginType = plugin.type;
      if (callerPluginType !== "acquirer" && callerPluginType !== "progressindicator" && callerPluginType !== "editor") {
        const msg = "Dashboard: can only be targeted by plugins of types: acquirer, progressindicator, editor";
        this.uppy.log(msg, "error");
        return null;
      }
      const target = {
        id: callerPluginId,
        name: callerPluginName,
        type: callerPluginType
      };
      const state = this.getPluginState();
      const newTargets = state.targets.slice();
      newTargets.push(target);
      this.setPluginState({
        targets: newTargets
      });
      return this.el;
    };
    this.hideAllPanels = () => {
      var _state$activePickerPa;
      const state = this.getPluginState();
      const update = {
        activePickerPanel: void 0,
        showAddFilesPanel: false,
        activeOverlayType: null,
        fileCardFor: null,
        showFileEditor: false
      };
      if (state.activePickerPanel === update.activePickerPanel && state.showAddFilesPanel === update.showAddFilesPanel && state.showFileEditor === update.showFileEditor && state.activeOverlayType === update.activeOverlayType) {
        return;
      }
      this.setPluginState(update);
      this.uppy.emit("dashboard:close-panel", (_state$activePickerPa = state.activePickerPanel) == null ? void 0 : _state$activePickerPa.id);
    };
    this.showPanel = (id20) => {
      const {
        targets
      } = this.getPluginState();
      const activePickerPanel = targets.find((target) => {
        return target.type === "acquirer" && target.id === id20;
      });
      this.setPluginState({
        activePickerPanel,
        activeOverlayType: "PickerPanel"
      });
      this.uppy.emit("dashboard:show-panel", id20);
    };
    this.canEditFile = (file) => {
      const {
        targets
      } = this.getPluginState();
      const editors = _classPrivateFieldLooseBase8(this, _getEditors)[_getEditors](targets);
      return editors.some((target) => this.uppy.getPlugin(target.id).canEditFile(file));
    };
    this.openFileEditor = (file) => {
      const {
        targets
      } = this.getPluginState();
      const editors = _classPrivateFieldLooseBase8(this, _getEditors)[_getEditors](targets);
      this.setPluginState({
        showFileEditor: true,
        fileCardFor: file.id || null,
        activeOverlayType: "FileEditor"
      });
      editors.forEach((editor) => {
        ;
        this.uppy.getPlugin(editor.id).selectFile(file);
      });
    };
    this.closeFileEditor = () => {
      const {
        metaFields
      } = this.getPluginState();
      const isMetaEditorEnabled = metaFields && metaFields.length > 0;
      if (isMetaEditorEnabled) {
        this.setPluginState({
          showFileEditor: false,
          activeOverlayType: "FileCard"
        });
      } else {
        this.setPluginState({
          showFileEditor: false,
          fileCardFor: null,
          activeOverlayType: "AddFiles"
        });
      }
    };
    this.saveFileEditor = () => {
      const {
        targets
      } = this.getPluginState();
      const editors = _classPrivateFieldLooseBase8(this, _getEditors)[_getEditors](targets);
      editors.forEach((editor) => {
        ;
        this.uppy.getPlugin(editor.id).save();
      });
      this.closeFileEditor();
    };
    this.openModal = () => {
      const {
        promise,
        resolve
      } = createPromise();
      this.savedScrollPosition = window.pageYOffset;
      this.savedActiveElement = document.activeElement;
      if (this.opts.disablePageScrollWhenModalOpen) {
        document.body.classList.add("uppy-Dashboard-isFixed");
      }
      if (this.opts.animateOpenClose && this.getPluginState().isClosing) {
        const handler = () => {
          this.setPluginState({
            isHidden: false
          });
          this.el.removeEventListener("animationend", handler, false);
          resolve();
        };
        this.el.addEventListener("animationend", handler, false);
      } else {
        this.setPluginState({
          isHidden: false
        });
        resolve();
      }
      if (this.opts.browserBackButtonClose) {
        this.updateBrowserHistory();
      }
      document.addEventListener("keydown", this.handleKeyDownInModal);
      this.uppy.emit("dashboard:modal-open");
      return promise;
    };
    this.closeModal = (opts) => {
      var _opts$manualClose;
      const manualClose = (_opts$manualClose = opts == null ? void 0 : opts.manualClose) != null ? _opts$manualClose : true;
      const {
        isHidden,
        isClosing
      } = this.getPluginState();
      if (isHidden || isClosing) {
        return void 0;
      }
      const {
        promise,
        resolve
      } = createPromise();
      if (this.opts.disablePageScrollWhenModalOpen) {
        document.body.classList.remove("uppy-Dashboard-isFixed");
      }
      if (this.opts.animateOpenClose) {
        this.setPluginState({
          isClosing: true
        });
        const handler = () => {
          this.setPluginState({
            isHidden: true,
            isClosing: false
          });
          this.superFocus.cancel();
          this.savedActiveElement.focus();
          this.el.removeEventListener("animationend", handler, false);
          resolve();
        };
        this.el.addEventListener("animationend", handler, false);
      } else {
        this.setPluginState({
          isHidden: true
        });
        this.superFocus.cancel();
        this.savedActiveElement.focus();
        resolve();
      }
      document.removeEventListener("keydown", this.handleKeyDownInModal);
      if (manualClose) {
        if (this.opts.browserBackButtonClose) {
          var _history$state;
          if ((_history$state = history.state) != null && _history$state[this.modalName]) {
            history.back();
          }
        }
      }
      this.uppy.emit("dashboard:modal-closed");
      return promise;
    };
    this.isModalOpen = () => {
      return !this.getPluginState().isHidden || false;
    };
    this.requestCloseModal = () => {
      if (this.opts.onRequestCloseModal) {
        return this.opts.onRequestCloseModal();
      }
      return this.closeModal();
    };
    this.setDarkModeCapability = (isDarkModeOn) => {
      const {
        capabilities
      } = this.uppy.getState();
      this.uppy.setState({
        capabilities: {
          ...capabilities,
          darkMode: isDarkModeOn
        }
      });
    };
    this.handleSystemDarkModeChange = (event) => {
      const isDarkModeOnNow = event.matches;
      this.uppy.log(`[Dashboard] Dark mode is ${isDarkModeOnNow ? "on" : "off"}`);
      this.setDarkModeCapability(isDarkModeOnNow);
    };
    this.toggleFileCard = (show, fileID) => {
      const file = this.uppy.getFile(fileID);
      if (show) {
        this.uppy.emit("dashboard:file-edit-start", file);
      } else {
        this.uppy.emit("dashboard:file-edit-complete", file);
      }
      this.setPluginState({
        fileCardFor: show ? fileID : null,
        activeOverlayType: show ? "FileCard" : null
      });
    };
    this.toggleAddFilesPanel = (show) => {
      this.setPluginState({
        showAddFilesPanel: show,
        activeOverlayType: show ? "AddFiles" : null
      });
    };
    this.addFiles = (files) => {
      const descriptors = files.map((file) => ({
        source: this.id,
        name: file.name,
        type: file.type,
        data: file,
        meta: {
          // path of the file relative to the ancestor directory the user selected.
          // e.g. 'docs/Old Prague/airbnb.pdf'
          relativePath: file.relativePath || file.webkitRelativePath || null
        }
      }));
      try {
        this.uppy.addFiles(descriptors);
      } catch (err) {
        this.uppy.log(err);
      }
    };
    this.startListeningToResize = () => {
      this.resizeObserver = new ResizeObserver((entries) => {
        const uppyDashboardInnerEl = entries[0];
        const {
          width,
          height
        } = uppyDashboardInnerEl.contentRect;
        this.setPluginState({
          containerWidth: width,
          containerHeight: height,
          areInsidesReadyToBeVisible: true
        });
      });
      this.resizeObserver.observe(this.el.querySelector(".uppy-Dashboard-inner"));
      this.makeDashboardInsidesVisibleAnywayTimeout = setTimeout(() => {
        const pluginState = this.getPluginState();
        const isModalAndClosed = !this.opts.inline && pluginState.isHidden;
        if (
          // We might want to enable this in the future
          // if ResizeObserver hasn't yet fired,
          !pluginState.areInsidesReadyToBeVisible && // and it's not due to the modal being closed
          !isModalAndClosed
        ) {
          this.uppy.log("[Dashboard] resize event didn\u2019t fire on time: defaulted to mobile layout", "warning");
          this.setPluginState({
            areInsidesReadyToBeVisible: true
          });
        }
      }, 1e3);
    };
    this.stopListeningToResize = () => {
      this.resizeObserver.disconnect();
      clearTimeout(this.makeDashboardInsidesVisibleAnywayTimeout);
    };
    this.recordIfFocusedOnUppyRecently = (event) => {
      if (this.el.contains(event.target)) {
        this.ifFocusedOnUppyRecently = true;
      } else {
        this.ifFocusedOnUppyRecently = false;
        this.superFocus.cancel();
      }
    };
    this.disableInteractiveElements = (disable) => {
      var _classPrivateFieldLoo;
      const NODES_TO_DISABLE = ["a[href]", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])", "button:not([disabled])", '[role="button"]:not([disabled])'];
      const nodesToDisable = (_classPrivateFieldLoo = _classPrivateFieldLooseBase8(this, _disabledNodes)[_disabledNodes]) != null ? _classPrivateFieldLoo : toArray_default(this.el.querySelectorAll(NODES_TO_DISABLE)).filter((node) => !node.classList.contains("uppy-Dashboard-close"));
      for (const node of nodesToDisable) {
        if (node.tagName === "A") {
          node.setAttribute("aria-disabled", disable);
        } else {
          node.disabled = disable;
        }
      }
      if (disable) {
        _classPrivateFieldLooseBase8(this, _disabledNodes)[_disabledNodes] = nodesToDisable;
      } else {
        _classPrivateFieldLooseBase8(this, _disabledNodes)[_disabledNodes] = null;
      }
      this.dashboardIsDisabled = disable;
    };
    this.updateBrowserHistory = () => {
      var _history$state2;
      if (!((_history$state2 = history.state) != null && _history$state2[this.modalName])) {
        history.pushState({
          // eslint-disable-next-line no-restricted-globals
          ...history.state,
          [this.modalName]: true
        }, "");
      }
      window.addEventListener("popstate", this.handlePopState, false);
    };
    this.handlePopState = (event) => {
      var _event$state;
      if (this.isModalOpen() && (!event.state || !event.state[this.modalName])) {
        this.closeModal({
          manualClose: false
        });
      }
      if (!this.isModalOpen() && (_event$state = event.state) != null && _event$state[this.modalName]) {
        history.back();
      }
    };
    this.handleKeyDownInModal = (event) => {
      if (event.keyCode === ESC_KEY) this.requestCloseModal();
      if (event.keyCode === TAB_KEY) trapFocus(event, this.getPluginState().activeOverlayType, this.el);
    };
    this.handleClickOutside = () => {
      if (this.opts.closeModalOnClickOutside) this.requestCloseModal();
    };
    this.handlePaste = (event) => {
      this.uppy.iteratePlugins((plugin) => {
        if (plugin.type === "acquirer") {
          ;
          plugin.handleRootPaste == null || plugin.handleRootPaste(event);
        }
      });
      const files = toArray_default(event.clipboardData.files);
      if (files.length > 0) {
        this.uppy.log("[Dashboard] Files pasted");
        this.addFiles(files);
      }
    };
    this.handleInputChange = (event) => {
      event.preventDefault();
      const files = toArray_default(event.target.files);
      if (files.length > 0) {
        this.uppy.log("[Dashboard] Files selected through input");
        this.addFiles(files);
      }
    };
    this.handleDragOver = (event) => {
      var _this$opts$onDragOver, _this$opts;
      event.preventDefault();
      event.stopPropagation();
      const canSomePluginHandleRootDrop = () => {
        let somePluginCanHandleRootDrop2 = true;
        this.uppy.iteratePlugins((plugin) => {
          if (plugin.canHandleRootDrop != null && plugin.canHandleRootDrop(event)) {
            somePluginCanHandleRootDrop2 = true;
          }
        });
        return somePluginCanHandleRootDrop2;
      };
      const doesEventHaveFiles = () => {
        const {
          types
        } = event.dataTransfer;
        return types.some((type) => type === "Files");
      };
      const somePluginCanHandleRootDrop = canSomePluginHandleRootDrop();
      const hasFiles = doesEventHaveFiles();
      if (!somePluginCanHandleRootDrop && !hasFiles || this.opts.disabled || // opts.disableLocalFiles should only be taken into account if no plugins
      // can handle the datatransfer
      this.opts.disableLocalFiles && (hasFiles || !somePluginCanHandleRootDrop) || !this.uppy.getState().allowNewUpload) {
        event.dataTransfer.dropEffect = "none";
        clearTimeout(this.removeDragOverClassTimeout);
        return;
      }
      event.dataTransfer.dropEffect = "copy";
      clearTimeout(this.removeDragOverClassTimeout);
      this.setPluginState({
        isDraggingOver: true
      });
      (_this$opts$onDragOver = (_this$opts = this.opts).onDragOver) == null || _this$opts$onDragOver.call(_this$opts, event);
    };
    this.handleDragLeave = (event) => {
      var _this$opts$onDragLeav, _this$opts2;
      event.preventDefault();
      event.stopPropagation();
      clearTimeout(this.removeDragOverClassTimeout);
      this.removeDragOverClassTimeout = setTimeout(() => {
        this.setPluginState({
          isDraggingOver: false
        });
      }, 50);
      (_this$opts$onDragLeav = (_this$opts2 = this.opts).onDragLeave) == null || _this$opts$onDragLeav.call(_this$opts2, event);
    };
    this.handleDrop = async (event) => {
      var _this$opts$onDrop, _this$opts3;
      event.preventDefault();
      event.stopPropagation();
      clearTimeout(this.removeDragOverClassTimeout);
      this.setPluginState({
        isDraggingOver: false
      });
      this.uppy.iteratePlugins((plugin) => {
        if (plugin.type === "acquirer") {
          ;
          plugin.handleRootDrop == null || plugin.handleRootDrop(event);
        }
      });
      let executedDropErrorOnce = false;
      const logDropError = (error) => {
        this.uppy.log(error, "error");
        if (!executedDropErrorOnce) {
          this.uppy.info(error.message, "error");
          executedDropErrorOnce = true;
        }
      };
      this.uppy.log("[Dashboard] Processing dropped files");
      const files = await getDroppedFiles(event.dataTransfer, {
        logDropError
      });
      if (files.length > 0) {
        this.uppy.log("[Dashboard] Files dropped");
        this.addFiles(files);
      }
      (_this$opts$onDrop = (_this$opts3 = this.opts).onDrop) == null || _this$opts$onDrop.call(_this$opts3, event);
    };
    this.handleRequestThumbnail = (file) => {
      if (!this.opts.waitForThumbnailsBeforeUpload) {
        this.uppy.emit("thumbnail:request", file);
      }
    };
    this.handleCancelThumbnail = (file) => {
      if (!this.opts.waitForThumbnailsBeforeUpload) {
        this.uppy.emit("thumbnail:cancel", file);
      }
    };
    this.handleKeyDownInInline = (event) => {
      if (event.keyCode === TAB_KEY) forInline(event, this.getPluginState().activeOverlayType, this.el);
    };
    this.handlePasteOnBody = (event) => {
      const isFocusInOverlay2 = this.el.contains(document.activeElement);
      if (isFocusInOverlay2) {
        this.handlePaste(event);
      }
    };
    this.handleComplete = (_ref) => {
      let {
        failed
      } = _ref;
      if (this.opts.closeAfterFinish && !(failed != null && failed.length)) {
        this.requestCloseModal();
      }
    };
    this.handleCancelRestore = () => {
      this.uppy.emit("restore-canceled");
    };
    Object.defineProperty(this, _generateLargeThumbnailIfSingleFile, {
      writable: true,
      value: () => {
        if (this.opts.disableThumbnailGenerator) {
          return;
        }
        const LARGE_THUMBNAIL = 600;
        const files = this.uppy.getFiles();
        if (files.length === 1) {
          const thumbnailGenerator = this.uppy.getPlugin(`${this.id}:ThumbnailGenerator`);
          thumbnailGenerator == null || thumbnailGenerator.setOptions({
            thumbnailWidth: LARGE_THUMBNAIL
          });
          const fileForThumbnail = {
            ...files[0],
            preview: void 0
          };
          thumbnailGenerator == null || thumbnailGenerator.requestThumbnail(fileForThumbnail).then(() => {
            thumbnailGenerator == null || thumbnailGenerator.setOptions({
              thumbnailWidth: this.opts.thumbnailWidth
            });
          });
        }
      }
    });
    Object.defineProperty(this, _openFileEditorWhenFilesAdded, {
      writable: true,
      value: (files) => {
        const firstFile = files[0];
        const {
          metaFields
        } = this.getPluginState();
        const isMetaEditorEnabled = metaFields && metaFields.length > 0;
        const isImageEditorEnabled = this.canEditFile(firstFile);
        if (isMetaEditorEnabled && this.opts.autoOpen === "metaEditor") {
          this.toggleFileCard(true, firstFile.id);
        } else if (isImageEditorEnabled && this.opts.autoOpen === "imageEditor") {
          this.openFileEditor(firstFile);
        }
      }
    });
    this.initEvents = () => {
      if (this.opts.trigger && !this.opts.inline) {
        const showModalTrigger = findAllDOMElements_default(this.opts.trigger);
        if (showModalTrigger) {
          showModalTrigger.forEach((trigger) => trigger.addEventListener("click", this.openModal));
        } else {
          this.uppy.log("Dashboard modal trigger not found. Make sure `trigger` is set in Dashboard options, unless you are planning to call `dashboard.openModal()` method yourself", "warning");
        }
      }
      this.startListeningToResize();
      document.addEventListener("paste", this.handlePasteOnBody);
      this.uppy.on("plugin-added", _classPrivateFieldLooseBase8(this, _addSupportedPluginIfNoTarget)[_addSupportedPluginIfNoTarget]);
      this.uppy.on("plugin-remove", this.removeTarget);
      this.uppy.on("file-added", this.hideAllPanels);
      this.uppy.on("dashboard:modal-closed", this.hideAllPanels);
      this.uppy.on("complete", this.handleComplete);
      this.uppy.on("files-added", _classPrivateFieldLooseBase8(this, _generateLargeThumbnailIfSingleFile)[_generateLargeThumbnailIfSingleFile]);
      this.uppy.on("file-removed", _classPrivateFieldLooseBase8(this, _generateLargeThumbnailIfSingleFile)[_generateLargeThumbnailIfSingleFile]);
      document.addEventListener("focus", this.recordIfFocusedOnUppyRecently, true);
      document.addEventListener("click", this.recordIfFocusedOnUppyRecently, true);
      if (this.opts.inline) {
        this.el.addEventListener("keydown", this.handleKeyDownInInline);
      }
      if (this.opts.autoOpen) {
        this.uppy.on("files-added", _classPrivateFieldLooseBase8(this, _openFileEditorWhenFilesAdded)[_openFileEditorWhenFilesAdded]);
      }
    };
    this.removeEvents = () => {
      const showModalTrigger = findAllDOMElements_default(this.opts.trigger);
      if (!this.opts.inline && showModalTrigger) {
        showModalTrigger.forEach((trigger) => trigger.removeEventListener("click", this.openModal));
      }
      this.stopListeningToResize();
      document.removeEventListener("paste", this.handlePasteOnBody);
      window.removeEventListener("popstate", this.handlePopState, false);
      this.uppy.off("plugin-added", _classPrivateFieldLooseBase8(this, _addSupportedPluginIfNoTarget)[_addSupportedPluginIfNoTarget]);
      this.uppy.off("plugin-remove", this.removeTarget);
      this.uppy.off("file-added", this.hideAllPanels);
      this.uppy.off("dashboard:modal-closed", this.hideAllPanels);
      this.uppy.off("complete", this.handleComplete);
      this.uppy.off("files-added", _classPrivateFieldLooseBase8(this, _generateLargeThumbnailIfSingleFile)[_generateLargeThumbnailIfSingleFile]);
      this.uppy.off("file-removed", _classPrivateFieldLooseBase8(this, _generateLargeThumbnailIfSingleFile)[_generateLargeThumbnailIfSingleFile]);
      document.removeEventListener("focus", this.recordIfFocusedOnUppyRecently);
      document.removeEventListener("click", this.recordIfFocusedOnUppyRecently);
      if (this.opts.inline) {
        this.el.removeEventListener("keydown", this.handleKeyDownInInline);
      }
      if (this.opts.autoOpen) {
        this.uppy.off("files-added", _classPrivateFieldLooseBase8(this, _openFileEditorWhenFilesAdded)[_openFileEditorWhenFilesAdded]);
      }
    };
    this.superFocusOnEachUpdate = () => {
      const isFocusInUppy = this.el.contains(document.activeElement);
      const isFocusNowhere = document.activeElement === document.body || document.activeElement === null;
      const isInformerHidden = this.uppy.getState().info.length === 0;
      const isModal = !this.opts.inline;
      if (
        // If update is connected to showing the Informer - let the screen reader calmly read it.
        isInformerHidden && // If we are in a modal - always superfocus without concern for other elements
        // on the page (user is unlikely to want to interact with the rest of the page)
        (isModal || // If we are already inside of Uppy, or
        isFocusInUppy || // If we are not focused on anything BUT we have already, at least once, focused on uppy
        //   1. We focus when isFocusNowhere, because when the element we were focused
        //      on disappears (e.g. an overlay), - focus gets lost. If user is typing
        //      something somewhere else on the page, - focus won't be 'nowhere'.
        //   2. We only focus when focus is nowhere AND this.ifFocusedOnUppyRecently,
        //      to avoid focus jumps if we do something else on the page.
        //   [Practical check] Without '&& this.ifFocusedOnUppyRecently', in Safari, in inline mode,
        //                     when file is uploading, - navigate via tab to the checkbox,
        //                     try to press space multiple times. Focus will jump to Uppy.
        isFocusNowhere && this.ifFocusedOnUppyRecently)
      ) {
        this.superFocus(this.el, this.getPluginState().activeOverlayType);
      } else {
        this.superFocus.cancel();
      }
    };
    this.afterUpdate = () => {
      if (this.opts.disabled && !this.dashboardIsDisabled) {
        this.disableInteractiveElements(true);
        return;
      }
      if (!this.opts.disabled && this.dashboardIsDisabled) {
        this.disableInteractiveElements(false);
      }
      this.superFocusOnEachUpdate();
    };
    this.saveFileCard = (meta, fileID) => {
      this.uppy.setFileMeta(fileID, meta);
      this.toggleFileCard(false, fileID);
    };
    Object.defineProperty(this, _attachRenderFunctionToTarget, {
      writable: true,
      value: (target) => {
        const plugin = this.uppy.getPlugin(target.id);
        return {
          ...target,
          icon: plugin.icon || this.opts.defaultPickerIcon,
          render: plugin.render
        };
      }
    });
    Object.defineProperty(this, _isTargetSupported, {
      writable: true,
      value: (target) => {
        const plugin = this.uppy.getPlugin(target.id);
        if (typeof plugin.isSupported !== "function") {
          return true;
        }
        return plugin.isSupported();
      }
    });
    Object.defineProperty(this, _getAcquirers, {
      writable: true,
      value: memoize((targets) => {
        return targets.filter((target) => target.type === "acquirer" && _classPrivateFieldLooseBase8(this, _isTargetSupported)[_isTargetSupported](target)).map(_classPrivateFieldLooseBase8(this, _attachRenderFunctionToTarget)[_attachRenderFunctionToTarget]);
      })
    });
    Object.defineProperty(this, _getProgressIndicators, {
      writable: true,
      value: memoize((targets) => {
        return targets.filter((target) => target.type === "progressindicator").map(_classPrivateFieldLooseBase8(this, _attachRenderFunctionToTarget)[_attachRenderFunctionToTarget]);
      })
    });
    Object.defineProperty(this, _getEditors, {
      writable: true,
      value: memoize((targets) => {
        return targets.filter((target) => target.type === "editor").map(_classPrivateFieldLooseBase8(this, _attachRenderFunctionToTarget)[_attachRenderFunctionToTarget]);
      })
    });
    this.render = (state) => {
      const pluginState = this.getPluginState();
      const {
        files,
        capabilities,
        allowNewUpload
      } = state;
      const {
        newFiles,
        uploadStartedFiles,
        completeFiles,
        erroredFiles,
        inProgressFiles,
        inProgressNotPausedFiles,
        processingFiles,
        isUploadStarted,
        isAllComplete,
        isAllErrored,
        isAllPaused
      } = this.uppy.getObjectOfFilesPerState();
      const acquirers = _classPrivateFieldLooseBase8(this, _getAcquirers)[_getAcquirers](pluginState.targets);
      const progressindicators = _classPrivateFieldLooseBase8(this, _getProgressIndicators)[_getProgressIndicators](pluginState.targets);
      const editors = _classPrivateFieldLooseBase8(this, _getEditors)[_getEditors](pluginState.targets);
      let theme;
      if (this.opts.theme === "auto") {
        theme = capabilities.darkMode ? "dark" : "light";
      } else {
        theme = this.opts.theme;
      }
      if (["files", "folders", "both"].indexOf(this.opts.fileManagerSelectionType) < 0) {
        this.opts.fileManagerSelectionType = "files";
        console.warn(`Unsupported option for "fileManagerSelectionType". Using default of "${this.opts.fileManagerSelectionType}".`);
      }
      return Dashboard({
        state,
        isHidden: pluginState.isHidden,
        files,
        newFiles,
        uploadStartedFiles,
        completeFiles,
        erroredFiles,
        inProgressFiles,
        inProgressNotPausedFiles,
        processingFiles,
        isUploadStarted,
        isAllComplete,
        isAllErrored,
        isAllPaused,
        totalFileCount: Object.keys(files).length,
        totalProgress: state.totalProgress,
        allowNewUpload,
        acquirers,
        theme,
        disabled: this.opts.disabled,
        disableLocalFiles: this.opts.disableLocalFiles,
        direction: this.opts.direction,
        activePickerPanel: pluginState.activePickerPanel,
        showFileEditor: pluginState.showFileEditor,
        saveFileEditor: this.saveFileEditor,
        closeFileEditor: this.closeFileEditor,
        disableInteractiveElements: this.disableInteractiveElements,
        animateOpenClose: this.opts.animateOpenClose,
        isClosing: pluginState.isClosing,
        progressindicators,
        editors,
        autoProceed: this.uppy.opts.autoProceed,
        id: this.id,
        closeModal: this.requestCloseModal,
        handleClickOutside: this.handleClickOutside,
        handleInputChange: this.handleInputChange,
        handlePaste: this.handlePaste,
        inline: this.opts.inline,
        showPanel: this.showPanel,
        hideAllPanels: this.hideAllPanels,
        i18n: this.i18n,
        i18nArray: this.i18nArray,
        uppy: this.uppy,
        note: this.opts.note,
        recoveredState: state.recoveredState,
        metaFields: pluginState.metaFields,
        resumableUploads: capabilities.resumableUploads || false,
        individualCancellation: capabilities.individualCancellation,
        isMobileDevice: capabilities.isMobileDevice,
        fileCardFor: pluginState.fileCardFor,
        toggleFileCard: this.toggleFileCard,
        toggleAddFilesPanel: this.toggleAddFilesPanel,
        showAddFilesPanel: pluginState.showAddFilesPanel,
        saveFileCard: this.saveFileCard,
        openFileEditor: this.openFileEditor,
        canEditFile: this.canEditFile,
        width: this.opts.width,
        height: this.opts.height,
        showLinkToFileUploadResult: this.opts.showLinkToFileUploadResult,
        fileManagerSelectionType: this.opts.fileManagerSelectionType,
        proudlyDisplayPoweredByUppy: this.opts.proudlyDisplayPoweredByUppy,
        hideCancelButton: this.opts.hideCancelButton,
        hideRetryButton: this.opts.hideRetryButton,
        hidePauseResumeButton: this.opts.hidePauseResumeButton,
        showRemoveButtonAfterComplete: this.opts.showRemoveButtonAfterComplete,
        containerWidth: pluginState.containerWidth,
        containerHeight: pluginState.containerHeight,
        areInsidesReadyToBeVisible: pluginState.areInsidesReadyToBeVisible,
        isTargetDOMEl: this.isTargetDOMEl,
        parentElement: this.el,
        allowedFileTypes: this.uppy.opts.restrictions.allowedFileTypes,
        maxNumberOfFiles: this.uppy.opts.restrictions.maxNumberOfFiles,
        requiredMetaFields: this.uppy.opts.restrictions.requiredMetaFields,
        showSelectedFiles: this.opts.showSelectedFiles,
        showNativePhotoCameraButton: this.opts.showNativePhotoCameraButton,
        showNativeVideoCameraButton: this.opts.showNativeVideoCameraButton,
        nativeCameraFacingMode: this.opts.nativeCameraFacingMode,
        singleFileFullScreen: this.opts.singleFileFullScreen,
        handleCancelRestore: this.handleCancelRestore,
        handleRequestThumbnail: this.handleRequestThumbnail,
        handleCancelThumbnail: this.handleCancelThumbnail,
        // drag props
        isDraggingOver: pluginState.isDraggingOver,
        handleDragOver: this.handleDragOver,
        handleDragLeave: this.handleDragLeave,
        handleDrop: this.handleDrop
      });
    };
    Object.defineProperty(this, _addSpecifiedPluginsFromOptions, {
      writable: true,
      value: () => {
        const plugins = this.opts.plugins || [];
        plugins.forEach((pluginID) => {
          const plugin = this.uppy.getPlugin(pluginID);
          if (plugin) {
            ;
            plugin.mount(this, plugin);
          } else {
            this.uppy.log(`[Uppy] Dashboard could not find plugin '${pluginID}', make sure to uppy.use() the plugins you are specifying`, "warning");
          }
        });
      }
    });
    Object.defineProperty(this, _autoDiscoverPlugins, {
      writable: true,
      value: () => {
        this.uppy.iteratePlugins(_classPrivateFieldLooseBase8(this, _addSupportedPluginIfNoTarget)[_addSupportedPluginIfNoTarget]);
      }
    });
    Object.defineProperty(this, _addSupportedPluginIfNoTarget, {
      writable: true,
      value: (plugin) => {
        var _plugin$opts;
        const typesAllowed = ["acquirer", "editor"];
        if (plugin && !((_plugin$opts = plugin.opts) != null && _plugin$opts.target) && typesAllowed.includes(plugin.type)) {
          const pluginAlreadyAdded = this.getPluginState().targets.some((installedPlugin) => plugin.id === installedPlugin.id);
          if (!pluginAlreadyAdded) {
            ;
            plugin.mount(this, plugin);
          }
        }
      }
    });
    this.install = () => {
      this.setPluginState({
        isHidden: true,
        fileCardFor: null,
        activeOverlayType: null,
        showAddFilesPanel: false,
        activePickerPanel: void 0,
        showFileEditor: false,
        metaFields: this.opts.metaFields,
        targets: [],
        // We'll make them visible once .containerWidth is determined
        areInsidesReadyToBeVisible: false,
        isDraggingOver: false
      });
      const {
        inline,
        closeAfterFinish
      } = this.opts;
      if (inline && closeAfterFinish) {
        throw new Error("[Dashboard] `closeAfterFinish: true` cannot be used on an inline Dashboard, because an inline Dashboard cannot be closed at all. Either set `inline: false`, or disable the `closeAfterFinish` option.");
      }
      const {
        allowMultipleUploads,
        allowMultipleUploadBatches
      } = this.uppy.opts;
      if ((allowMultipleUploads || allowMultipleUploadBatches) && closeAfterFinish) {
        this.uppy.log("[Dashboard] When using `closeAfterFinish`, we recommended setting the `allowMultipleUploadBatches` option to `false` in the Uppy constructor. See https://uppy.io/docs/uppy/#allowMultipleUploads-true", "warning");
      }
      const {
        target
      } = this.opts;
      if (target) {
        this.mount(target, this);
      }
      if (!this.opts.disableStatusBar) {
        this.uppy.use(StatusBar2, {
          id: `${this.id}:StatusBar`,
          target: this,
          hideUploadButton: this.opts.hideUploadButton,
          hideRetryButton: this.opts.hideRetryButton,
          hidePauseResumeButton: this.opts.hidePauseResumeButton,
          hideCancelButton: this.opts.hideCancelButton,
          showProgressDetails: this.opts.showProgressDetails,
          hideAfterFinish: this.opts.hideProgressAfterFinish,
          locale: this.opts.locale,
          doneButtonHandler: this.opts.doneButtonHandler
        });
      }
      if (!this.opts.disableInformer) {
        this.uppy.use(Informer, {
          id: `${this.id}:Informer`,
          target: this
        });
      }
      if (!this.opts.disableThumbnailGenerator) {
        this.uppy.use(ThumbnailGenerator, {
          id: `${this.id}:ThumbnailGenerator`,
          thumbnailWidth: this.opts.thumbnailWidth,
          thumbnailHeight: this.opts.thumbnailHeight,
          thumbnailType: this.opts.thumbnailType,
          waitForThumbnailsBeforeUpload: this.opts.waitForThumbnailsBeforeUpload,
          // If we don't block on thumbnails, we can lazily generate them
          lazy: !this.opts.waitForThumbnailsBeforeUpload
        });
      }
      this.darkModeMediaQuery = typeof window !== "undefined" && window.matchMedia ? window.matchMedia("(prefers-color-scheme: dark)") : null;
      const isDarkModeOnFromTheStart = this.darkModeMediaQuery ? this.darkModeMediaQuery.matches : false;
      this.uppy.log(`[Dashboard] Dark mode is ${isDarkModeOnFromTheStart ? "on" : "off"}`);
      this.setDarkModeCapability(isDarkModeOnFromTheStart);
      if (this.opts.theme === "auto") {
        var _this$darkModeMediaQu;
        (_this$darkModeMediaQu = this.darkModeMediaQuery) == null || _this$darkModeMediaQu.addListener(this.handleSystemDarkModeChange);
      }
      _classPrivateFieldLooseBase8(this, _addSpecifiedPluginsFromOptions)[_addSpecifiedPluginsFromOptions]();
      _classPrivateFieldLooseBase8(this, _autoDiscoverPlugins)[_autoDiscoverPlugins]();
      this.initEvents();
    };
    this.uninstall = () => {
      if (!this.opts.disableInformer) {
        const informer = this.uppy.getPlugin(`${this.id}:Informer`);
        if (informer) this.uppy.removePlugin(informer);
      }
      if (!this.opts.disableStatusBar) {
        const statusBar = this.uppy.getPlugin(`${this.id}:StatusBar`);
        if (statusBar) this.uppy.removePlugin(statusBar);
      }
      if (!this.opts.disableThumbnailGenerator) {
        const thumbnail = this.uppy.getPlugin(`${this.id}:ThumbnailGenerator`);
        if (thumbnail) this.uppy.removePlugin(thumbnail);
      }
      const plugins = this.opts.plugins || [];
      plugins.forEach((pluginID) => {
        const plugin = this.uppy.getPlugin(pluginID);
        if (plugin) plugin.unmount();
      });
      if (this.opts.theme === "auto") {
        var _this$darkModeMediaQu2;
        (_this$darkModeMediaQu2 = this.darkModeMediaQuery) == null || _this$darkModeMediaQu2.removeListener(this.handleSystemDarkModeChange);
      }
      if (this.opts.disablePageScrollWhenModalOpen) {
        document.body.classList.remove("uppy-Dashboard-isFixed");
      }
      this.unmount();
      this.removeEvents();
    };
    this.id = this.opts.id || "Dashboard";
    this.title = "Dashboard";
    this.type = "orchestrator";
    this.defaultLocale = locale_default4;
    if (this.opts.doneButtonHandler === void 0) {
      this.opts.doneButtonHandler = () => {
        this.uppy.clearUploadedFiles();
        this.requestCloseModal();
      };
    }
    (_this$opts4$onRequest = (_this$opts4 = this.opts).onRequestCloseModal) != null ? _this$opts4$onRequest : _this$opts4.onRequestCloseModal = () => this.closeModal();
    this.i18nInit();
  }
};
Dashboard2.VERSION = packageJson8.version;

// node_modules/@uppy/utils/lib/UserFacingApiError.js
var UserFacingApiError = class extends Error {
  constructor() {
    super(...arguments);
    this.name = "UserFacingApiError";
  }
};
var UserFacingApiError_default = UserFacingApiError;

// node_modules/p-retry/index.js
var import_retry = __toESM(require_retry2(), 1);

// node_modules/is-network-error/index.js
var objectToString = Object.prototype.toString;
var isError = (value) => objectToString.call(value) === "[object Error]";
var errorMessages = /* @__PURE__ */ new Set([
  "network error",
  // Chrome
  "Failed to fetch",
  // Chrome
  "NetworkError when attempting to fetch resource.",
  // Firefox
  "The Internet connection appears to be offline.",
  // Safari 16
  "Load failed",
  // Safari 17+
  "Network request failed",
  // `cross-fetch`
  "fetch failed",
  // Undici (Node.js)
  "terminated"
  // Undici (Node.js)
]);
function isNetworkError(error) {
  const isValid = error && isError(error) && error.name === "TypeError" && typeof error.message === "string";
  if (!isValid) {
    return false;
  }
  if (error.message === "Load failed") {
    return error.stack === void 0;
  }
  return errorMessages.has(error.message);
}

// node_modules/p-retry/index.js
var AbortError3 = class extends Error {
  constructor(message) {
    super();
    if (message instanceof Error) {
      this.originalError = message;
      ({ message } = message);
    } else {
      this.originalError = new Error(message);
      this.originalError.stack = this.stack;
    }
    this.name = "AbortError";
    this.message = message;
  }
};
var decorateErrorWithCounts = (error, attemptNumber, options) => {
  const retriesLeft = options.retries - (attemptNumber - 1);
  error.attemptNumber = attemptNumber;
  error.retriesLeft = retriesLeft;
  return error;
};
async function pRetry(input, options) {
  return new Promise((resolve, reject) => {
    var _a, _b, _c;
    options = { ...options };
    (_a = options.onFailedAttempt) != null ? _a : options.onFailedAttempt = () => {
    };
    (_b = options.shouldRetry) != null ? _b : options.shouldRetry = () => true;
    (_c = options.retries) != null ? _c : options.retries = 10;
    const operation = import_retry.default.operation(options);
    const abortHandler = () => {
      var _a2;
      operation.stop();
      reject((_a2 = options.signal) == null ? void 0 : _a2.reason);
    };
    if (options.signal && !options.signal.aborted) {
      options.signal.addEventListener("abort", abortHandler, { once: true });
    }
    const cleanUp = () => {
      var _a2;
      (_a2 = options.signal) == null ? void 0 : _a2.removeEventListener("abort", abortHandler);
      operation.stop();
    };
    operation.attempt(async (attemptNumber) => {
      try {
        const result = await input(attemptNumber);
        cleanUp();
        resolve(result);
      } catch (error) {
        try {
          if (!(error instanceof Error)) {
            throw new TypeError(`Non-error was thrown: "${error}". You should only throw errors.`);
          }
          if (error instanceof AbortError3) {
            throw error.originalError;
          }
          if (error instanceof TypeError && !isNetworkError(error)) {
            throw error;
          }
          decorateErrorWithCounts(error, attemptNumber, options);
          if (!await options.shouldRetry(error)) {
            operation.stop();
            reject(error);
          }
          await options.onFailedAttempt(error);
          if (!operation.retry(error)) {
            throw operation.mainError();
          }
        } catch (finalError) {
          decorateErrorWithCounts(finalError, attemptNumber, options);
          cleanUp();
          reject(finalError);
        }
      }
    });
  });
}

// node_modules/@uppy/utils/lib/NetworkError.js
var NetworkError = class extends Error {
  constructor(error, xhr) {
    if (xhr === void 0) {
      xhr = null;
    }
    super(`This looks like a network error, the endpoint might be blocked by an internet provider or a firewall.`);
    this.cause = error;
    this.isNetworkError = true;
    this.request = xhr;
  }
};
var NetworkError_default = NetworkError;

// node_modules/@uppy/utils/lib/fetchWithNetworkError.js
function fetchWithNetworkError() {
  return fetch(...arguments).catch((err) => {
    if (err.name === "AbortError") {
      throw err;
    } else {
      throw new NetworkError_default(err);
    }
  });
}

// node_modules/@uppy/utils/lib/hasProperty.js
function has(object, key) {
  return Object.prototype.hasOwnProperty.call(object, key);
}

// node_modules/@uppy/utils/lib/ErrorWithCause.js
var ErrorWithCause = class extends Error {
  constructor(message, options) {
    super(message);
    this.cause = options == null ? void 0 : options.cause;
    if (this.cause && has(this.cause, "isNetworkError")) {
      this.isNetworkError = this.cause.isNetworkError;
    } else {
      this.isNetworkError = false;
    }
  }
};
var ErrorWithCause_default = ErrorWithCause;

// node_modules/@uppy/utils/lib/emitSocketProgress.js
var import_throttle2 = __toESM(require_throttle(), 1);
function emitSocketProgress(uploader, progressData, file) {
  const {
    progress,
    bytesUploaded,
    bytesTotal
  } = progressData;
  if (progress) {
    uploader.uppy.log(`Upload progress: ${progress}`);
    uploader.uppy.emit("upload-progress", file, {
      // @ts-expect-error todo remove in next major
      uploader,
      bytesUploaded,
      bytesTotal
    });
  }
}
var emitSocketProgress_default = (0, import_throttle2.default)(emitSocketProgress, 300, {
  leading: true,
  trailing: true
});

// node_modules/@uppy/utils/lib/getSocketHost.js
function getSocketHost(url) {
  var _regex$exec;
  const regex = /^(?:https?:\/\/|\/\/)?(?:[^@\n]+@)?(?:www\.)?([^\n]+)/i;
  const host = (_regex$exec = regex.exec(url)) == null ? void 0 : _regex$exec[1];
  const socketProtocol = /^http:\/\//i.test(url) ? "ws" : "wss";
  return `${socketProtocol}://${host}`;
}

// node_modules/@uppy/companion-client/lib/AuthError.js
var AuthError = class extends Error {
  constructor() {
    super("Authorization required");
    this.name = "AuthError";
    this.isAuthError = true;
  }
};
var AuthError_default = AuthError;

// node_modules/@uppy/companion-client/lib/RequestClient.js
var _Symbol$for4;
function _classPrivateFieldLooseBase9(receiver, privateKey) {
  if (!Object.prototype.hasOwnProperty.call(receiver, privateKey)) {
    throw new TypeError("attempted to use private field on non-instance");
  }
  return receiver;
}
var id9 = 0;
function _classPrivateFieldLooseKey9(name) {
  return "__private_" + id9++ + "_" + name;
}
var packageJson9 = {
  "version": "3.8.2"
};
function stripSlash(url) {
  return url.replace(/\/$/, "");
}
var retryCount = 10;
var socketActivityTimeoutMs = 5 * 60 * 1e3;
var authErrorStatusCode = 401;
var HttpError = class extends Error {
  constructor(_ref) {
    let {
      statusCode,
      message
    } = _ref;
    super(message);
    this.name = "HttpError";
    this.statusCode = statusCode;
  }
};
async function handleJSONResponse(res) {
  if (res.status === authErrorStatusCode) {
    throw new AuthError_default();
  }
  if (res.ok) {
    return res.json();
  }
  let errMsg = `Failed request with status: ${res.status}. ${res.statusText}`;
  let errData;
  try {
    errData = await res.json();
    if (errData.message) errMsg = `${errMsg} message: ${errData.message}`;
    if (errData.requestId) errMsg = `${errMsg} request-Id: ${errData.requestId}`;
  } catch (cause) {
    throw new Error(errMsg, {
      cause
    });
  }
  if (res.status >= 400 && res.status <= 499 && errData.message) {
    throw new UserFacingApiError_default(errData.message);
  }
  throw new HttpError({
    statusCode: res.status,
    message: errMsg
  });
}
var _companionHeaders = /* @__PURE__ */ _classPrivateFieldLooseKey9("companionHeaders");
var _getUrl = /* @__PURE__ */ _classPrivateFieldLooseKey9("getUrl");
var _requestSocketToken = /* @__PURE__ */ _classPrivateFieldLooseKey9("requestSocketToken");
var _awaitRemoteFileUpload = /* @__PURE__ */ _classPrivateFieldLooseKey9("awaitRemoteFileUpload");
_Symbol$for4 = Symbol.for("uppy test: getCompanionHeaders");
var RequestClient = class {
  constructor(uppy, opts) {
    Object.defineProperty(this, _awaitRemoteFileUpload, {
      value: _awaitRemoteFileUpload2
    });
    Object.defineProperty(this, _getUrl, {
      value: _getUrl2
    });
    Object.defineProperty(this, _companionHeaders, {
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, _requestSocketToken, {
      writable: true,
      value: async (_ref2) => {
        var _file$remote;
        let {
          file,
          postBody,
          signal
        } = _ref2;
        if (((_file$remote = file.remote) == null ? void 0 : _file$remote.url) == null) {
          throw new Error("Cannot connect to an undefined URL");
        }
        const res = await this.post(file.remote.url, {
          ...file.remote.body,
          ...postBody
        }, {
          signal
        });
        return res.token;
      }
    });
    this.uppy = uppy;
    this.opts = opts;
    this.onReceiveResponse = this.onReceiveResponse.bind(this);
    _classPrivateFieldLooseBase9(this, _companionHeaders)[_companionHeaders] = opts == null ? void 0 : opts.companionHeaders;
  }
  setCompanionHeaders(headers) {
    _classPrivateFieldLooseBase9(this, _companionHeaders)[_companionHeaders] = headers;
  }
  [_Symbol$for4]() {
    return _classPrivateFieldLooseBase9(this, _companionHeaders)[_companionHeaders];
  }
  get hostname() {
    const {
      companion
    } = this.uppy.getState();
    const host = this.opts.companionUrl;
    return stripSlash(companion && companion[host] ? companion[host] : host);
  }
  async headers(emptyBody) {
    if (emptyBody === void 0) {
      emptyBody = false;
    }
    const defaultHeaders = {
      Accept: "application/json",
      ...emptyBody ? void 0 : {
        // Passing those headers on requests with no data forces browsers to first make a preflight request.
        "Content-Type": "application/json"
      }
    };
    return {
      ...defaultHeaders,
      ..._classPrivateFieldLooseBase9(this, _companionHeaders)[_companionHeaders]
    };
  }
  onReceiveResponse(res) {
    const {
      headers
    } = res;
    const state = this.uppy.getState();
    const companion = state.companion || {};
    const host = this.opts.companionUrl;
    if (headers.has("i-am") && headers.get("i-am") !== companion[host]) {
      this.uppy.setState({
        companion: {
          ...companion,
          [host]: headers.get("i-am")
        }
      });
    }
  }
  async request(_ref3) {
    let {
      path,
      method = "GET",
      data,
      skipPostResponse,
      signal
    } = _ref3;
    try {
      const headers = await this.headers(!data);
      const response = await fetchWithNetworkError(_classPrivateFieldLooseBase9(this, _getUrl)[_getUrl](path), {
        method,
        signal,
        headers,
        credentials: this.opts.companionCookiesRule || "same-origin",
        body: data ? JSON.stringify(data) : null
      });
      if (!skipPostResponse) this.onReceiveResponse(response);
      return await handleJSONResponse(response);
    } catch (err) {
      if (err.isAuthError || err.name === "UserFacingApiError" || err.name === "AbortError") throw err;
      throw new ErrorWithCause_default(`Could not ${method} ${_classPrivateFieldLooseBase9(this, _getUrl)[_getUrl](path)}`, {
        cause: err
      });
    }
  }
  async get(path, options) {
    if (typeof options === "boolean") options = {
      skipPostResponse: options
    };
    return this.request({
      ...options,
      path
    });
  }
  async post(path, data, options) {
    if (typeof options === "boolean") options = {
      skipPostResponse: options
    };
    return this.request({
      ...options,
      path,
      method: "POST",
      data
    });
  }
  async delete(path, data, options) {
    if (typeof options === "boolean") options = {
      skipPostResponse: options
    };
    return this.request({
      ...options,
      path,
      method: "DELETE",
      data
    });
  }
  /**
   * Remote uploading consists of two steps:
   * 1. #requestSocketToken which starts the download/upload in companion and returns a unique token for the upload.
   * Then companion will halt the upload until:
   * 2. #awaitRemoteFileUpload is called, which will open/ensure a websocket connection towards companion, with the
   * previously generated token provided. It returns a promise that will resolve/reject once the file has finished
   * uploading or is otherwise done (failed, canceled)
   */
  async uploadRemoteFile(file, reqBody, options) {
    var _this = this;
    try {
      const {
        signal,
        getQueue
      } = options || {};
      return await pRetry(async () => {
        var _this$uppy$getFile;
        const existingServerToken = (_this$uppy$getFile = this.uppy.getFile(file.id)) == null ? void 0 : _this$uppy$getFile.serverToken;
        if (existingServerToken != null) {
          this.uppy.log(`Connecting to exiting websocket ${existingServerToken}`);
          return _classPrivateFieldLooseBase9(this, _awaitRemoteFileUpload)[_awaitRemoteFileUpload]({
            file,
            queue: getQueue(),
            signal
          });
        }
        const queueRequestSocketToken = getQueue().wrapPromiseFunction(async function() {
          try {
            return await _classPrivateFieldLooseBase9(_this, _requestSocketToken)[_requestSocketToken](...arguments);
          } catch (outerErr) {
            if (outerErr.isAuthError) throw new AbortError3(outerErr);
            if (outerErr.cause == null) throw outerErr;
            const err = outerErr.cause;
            const isRetryableHttpError = () => [408, 409, 429, 418, 423].includes(err.statusCode) || err.statusCode >= 500 && err.statusCode <= 599 && ![501, 505].includes(err.statusCode);
            if (err.name === "HttpError" && !isRetryableHttpError()) throw new AbortError3(err);
            throw err;
          }
        }, {
          priority: -1
        });
        const serverToken = await queueRequestSocketToken({
          file,
          postBody: reqBody,
          signal
        }).abortOn(signal);
        if (!this.uppy.getFile(file.id)) return void 0;
        this.uppy.setFileState(file.id, {
          serverToken
        });
        return _classPrivateFieldLooseBase9(this, _awaitRemoteFileUpload)[_awaitRemoteFileUpload]({
          file: this.uppy.getFile(file.id),
          // re-fetching file because it might have changed in the meantime
          queue: getQueue(),
          signal
        });
      }, {
        retries: retryCount,
        signal,
        onFailedAttempt: (err) => this.uppy.log(`Retrying upload due to: ${err.message}`, "warning")
      });
    } catch (err) {
      if (err.name === "AbortError") {
        return void 0;
      }
      this.uppy.emit("upload-error", file, err);
      throw err;
    }
  }
};
function _getUrl2(url) {
  if (/^(https?:|)\/\//.test(url)) {
    return url;
  }
  return `${this.hostname}/${url}`;
}
async function _awaitRemoteFileUpload2(_ref4) {
  let {
    file,
    queue,
    signal
  } = _ref4;
  let removeEventHandlers;
  const {
    capabilities
  } = this.uppy.getState();
  try {
    return await new Promise((resolve, reject) => {
      const token = file.serverToken;
      const host = getSocketHost(file.remote.companionUrl);
      let socket;
      let socketAbortController;
      let activityTimeout;
      let {
        isPaused
      } = file;
      const socketSend = (action, payload) => {
        if (socket == null || socket.readyState !== socket.OPEN) {
          var _socket2;
          this.uppy.log(`Cannot send "${action}" to socket ${file.id} because the socket state was ${String((_socket2 = socket) == null ? void 0 : _socket2.readyState)}`, "warning");
          return;
        }
        socket.send(JSON.stringify({
          action,
          payload: payload != null ? payload : {}
        }));
      };
      function sendState() {
        if (!capabilities.resumableUploads) return;
        if (isPaused) socketSend("pause");
        else socketSend("resume");
      }
      const createWebsocket = async () => {
        if (socketAbortController) socketAbortController.abort();
        socketAbortController = new AbortController();
        const onFatalError = (err) => {
          var _socketAbortControlle;
          this.uppy.setFileState(file.id, {
            serverToken: null
          });
          (_socketAbortControlle = socketAbortController) == null || _socketAbortControlle.abort == null || _socketAbortControlle.abort();
          reject(err);
        };
        function resetActivityTimeout() {
          clearTimeout(activityTimeout);
          if (isPaused) return;
          activityTimeout = setTimeout(() => onFatalError(new Error("Timeout waiting for message from Companion socket")), socketActivityTimeoutMs);
        }
        try {
          await queue.wrapPromiseFunction(async () => {
            const reconnectWebsocket = async () => (
              // eslint-disable-next-line promise/param-names
              new Promise((_3, rejectSocket) => {
                socket = new WebSocket(`${host}/api/${token}`);
                resetActivityTimeout();
                socket.addEventListener("close", () => {
                  socket = void 0;
                  rejectSocket(new Error("Socket closed unexpectedly"));
                });
                socket.addEventListener("error", (error) => {
                  var _socket2;
                  this.uppy.log(`Companion socket error ${JSON.stringify(error)}, closing socket`, "warning");
                  (_socket2 = socket) == null || _socket2.close();
                });
                socket.addEventListener("open", () => {
                  sendState();
                });
                socket.addEventListener("message", (e4) => {
                  resetActivityTimeout();
                  try {
                    const {
                      action,
                      payload
                    } = JSON.parse(e4.data);
                    switch (action) {
                      case "progress": {
                        emitSocketProgress_default(this, payload, this.uppy.getFile(file.id));
                        break;
                      }
                      case "success": {
                        var _payload$response, _payload$response$sta, _payload$response2, _socketAbortControlle2;
                        const text = (_payload$response = payload.response) == null ? void 0 : _payload$response.responseText;
                        this.uppy.emit("upload-success", this.uppy.getFile(file.id), {
                          uploadURL: payload.url,
                          status: (_payload$response$sta = (_payload$response2 = payload.response) == null ? void 0 : _payload$response2.status) != null ? _payload$response$sta : 200,
                          body: text ? JSON.parse(text) : void 0
                        });
                        (_socketAbortControlle2 = socketAbortController) == null || _socketAbortControlle2.abort == null || _socketAbortControlle2.abort();
                        resolve();
                        break;
                      }
                      case "error": {
                        const {
                          message
                        } = payload.error;
                        throw Object.assign(new Error(message), {
                          cause: payload.error
                        });
                      }
                      default:
                        this.uppy.log(`Companion socket unknown action ${action}`, "warning");
                    }
                  } catch (err) {
                    onFatalError(err);
                  }
                });
                const closeSocket = () => {
                  this.uppy.log(`Closing socket ${file.id}`, "info");
                  clearTimeout(activityTimeout);
                  if (socket) socket.close();
                  socket = void 0;
                };
                socketAbortController.signal.addEventListener("abort", () => {
                  closeSocket();
                });
              })
            );
            await pRetry(reconnectWebsocket, {
              retries: retryCount,
              signal: socketAbortController.signal,
              onFailedAttempt: () => {
                if (socketAbortController.signal.aborted) return;
                this.uppy.log(`Retrying websocket ${file.id}`, "info");
              }
            });
          })().abortOn(socketAbortController.signal);
        } catch (err) {
          if (socketAbortController.signal.aborted) return;
          onFatalError(err);
        }
      };
      const pause = (newPausedState) => {
        if (!capabilities.resumableUploads) return;
        isPaused = newPausedState;
        if (socket) sendState();
        if (newPausedState) {
          var _socketAbortControlle3;
          (_socketAbortControlle3 = socketAbortController) == null || _socketAbortControlle3.abort == null || _socketAbortControlle3.abort();
        } else {
          createWebsocket();
        }
      };
      const onFileRemove = (targetFile) => {
        var _socketAbortControlle4;
        if (!capabilities.individualCancellation) return;
        if (targetFile.id !== file.id) return;
        socketSend("cancel");
        (_socketAbortControlle4 = socketAbortController) == null || _socketAbortControlle4.abort == null || _socketAbortControlle4.abort();
        this.uppy.log(`upload ${file.id} was removed`, "info");
        resolve();
      };
      const onCancelAll = (_ref5) => {
        var _socketAbortControlle5;
        let {
          reason
        } = _ref5;
        if (reason === "user") {
          socketSend("cancel");
        }
        (_socketAbortControlle5 = socketAbortController) == null || _socketAbortControlle5.abort == null || _socketAbortControlle5.abort();
        this.uppy.log(`upload ${file.id} was canceled`, "info");
        resolve();
      };
      const onFilePausedChange = (targetFileId, newPausedState) => {
        if (targetFileId !== file.id) return;
        pause(newPausedState);
      };
      const onPauseAll = () => pause(true);
      const onResumeAll = () => pause(false);
      this.uppy.on("file-removed", onFileRemove);
      this.uppy.on("cancel-all", onCancelAll);
      this.uppy.on("upload-pause", onFilePausedChange);
      this.uppy.on("pause-all", onPauseAll);
      this.uppy.on("resume-all", onResumeAll);
      removeEventHandlers = () => {
        this.uppy.off("file-removed", onFileRemove);
        this.uppy.off("cancel-all", onCancelAll);
        this.uppy.off("upload-pause", onFilePausedChange);
        this.uppy.off("pause-all", onPauseAll);
        this.uppy.off("resume-all", onResumeAll);
      };
      signal.addEventListener("abort", () => {
        var _socketAbortControlle6;
        (_socketAbortControlle6 = socketAbortController) == null || _socketAbortControlle6.abort();
      });
      createWebsocket();
    });
  } finally {
    removeEventHandlers == null || removeEventHandlers();
  }
}
RequestClient.VERSION = packageJson9.version;

// node_modules/@uppy/companion-client/lib/Socket.js
var import_namespace_emitter2 = __toESM(require_namespace_emitter(), 1);
var _Symbol$for5;
var _Symbol$for22;
function _classPrivateFieldLooseBase10(receiver, privateKey) {
  if (!Object.prototype.hasOwnProperty.call(receiver, privateKey)) {
    throw new TypeError("attempted to use private field on non-instance");
  }
  return receiver;
}
var id10 = 0;
function _classPrivateFieldLooseKey10(name) {
  return "__private_" + id10++ + "_" + name;
}
var _queued = /* @__PURE__ */ _classPrivateFieldLooseKey10("queued");
var _emitter2 = /* @__PURE__ */ _classPrivateFieldLooseKey10("emitter");
var _isOpen = /* @__PURE__ */ _classPrivateFieldLooseKey10("isOpen");
var _socket = /* @__PURE__ */ _classPrivateFieldLooseKey10("socket");
var _handleMessage = /* @__PURE__ */ _classPrivateFieldLooseKey10("handleMessage");
_Symbol$for5 = Symbol.for("uppy test: getSocket");
_Symbol$for22 = Symbol.for("uppy test: getQueued");
var UppySocket = class {
  constructor(opts) {
    Object.defineProperty(this, _queued, {
      writable: true,
      value: []
    });
    Object.defineProperty(this, _emitter2, {
      writable: true,
      value: (0, import_namespace_emitter2.default)()
    });
    Object.defineProperty(this, _isOpen, {
      writable: true,
      value: false
    });
    Object.defineProperty(this, _socket, {
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, _handleMessage, {
      writable: true,
      value: (e4) => {
        try {
          const message = JSON.parse(e4.data);
          this.emit(message.action, message.payload);
        } catch (err) {
          console.log(err);
        }
      }
    });
    this.opts = opts;
    if (!opts || opts.autoOpen !== false) {
      this.open();
    }
  }
  get isOpen() {
    return _classPrivateFieldLooseBase10(this, _isOpen)[_isOpen];
  }
  [_Symbol$for5]() {
    return _classPrivateFieldLooseBase10(this, _socket)[_socket];
  }
  [_Symbol$for22]() {
    return _classPrivateFieldLooseBase10(this, _queued)[_queued];
  }
  open() {
    if (_classPrivateFieldLooseBase10(this, _socket)[_socket] != null) return;
    _classPrivateFieldLooseBase10(this, _socket)[_socket] = new WebSocket(this.opts.target);
    _classPrivateFieldLooseBase10(this, _socket)[_socket].onopen = () => {
      _classPrivateFieldLooseBase10(this, _isOpen)[_isOpen] = true;
      while (_classPrivateFieldLooseBase10(this, _queued)[_queued].length > 0 && _classPrivateFieldLooseBase10(this, _isOpen)[_isOpen]) {
        const first = _classPrivateFieldLooseBase10(this, _queued)[_queued].shift();
        this.send(first.action, first.payload);
      }
    };
    _classPrivateFieldLooseBase10(this, _socket)[_socket].onclose = () => {
      _classPrivateFieldLooseBase10(this, _isOpen)[_isOpen] = false;
      _classPrivateFieldLooseBase10(this, _socket)[_socket] = null;
    };
    _classPrivateFieldLooseBase10(this, _socket)[_socket].onmessage = _classPrivateFieldLooseBase10(this, _handleMessage)[_handleMessage];
  }
  close() {
    var _classPrivateFieldLoo;
    (_classPrivateFieldLoo = _classPrivateFieldLooseBase10(this, _socket)[_socket]) == null || _classPrivateFieldLoo.close();
  }
  send(action, payload) {
    if (!_classPrivateFieldLooseBase10(this, _isOpen)[_isOpen]) {
      _classPrivateFieldLooseBase10(this, _queued)[_queued].push({
        action,
        payload
      });
      return;
    }
    _classPrivateFieldLooseBase10(this, _socket)[_socket].send(JSON.stringify({
      action,
      payload
    }));
  }
  on(action, handler) {
    _classPrivateFieldLooseBase10(this, _emitter2)[_emitter2].on(action, handler);
  }
  emit(action, payload) {
    _classPrivateFieldLooseBase10(this, _emitter2)[_emitter2].emit(action, payload);
  }
  once(action, handler) {
    _classPrivateFieldLooseBase10(this, _emitter2)[_emitter2].once(action, handler);
  }
};

// node_modules/@uppy/core/lib/EventManager.js
function _classPrivateFieldLooseBase11(receiver, privateKey) {
  if (!Object.prototype.hasOwnProperty.call(receiver, privateKey)) {
    throw new TypeError("attempted to use private field on non-instance");
  }
  return receiver;
}
var id11 = 0;
function _classPrivateFieldLooseKey11(name) {
  return "__private_" + id11++ + "_" + name;
}
var _uppy = /* @__PURE__ */ _classPrivateFieldLooseKey11("uppy");
var _events = /* @__PURE__ */ _classPrivateFieldLooseKey11("events");
var EventManager = class {
  constructor(uppy) {
    Object.defineProperty(this, _uppy, {
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, _events, {
      writable: true,
      value: []
    });
    _classPrivateFieldLooseBase11(this, _uppy)[_uppy] = uppy;
  }
  /** @deprecated */
  on(event, fn) {
    _classPrivateFieldLooseBase11(this, _events)[_events].push([event, fn]);
    return _classPrivateFieldLooseBase11(this, _uppy)[_uppy].on(event, fn);
  }
  remove() {
    for (const [event, fn] of _classPrivateFieldLooseBase11(this, _events)[_events].splice(0)) {
      _classPrivateFieldLooseBase11(this, _uppy)[_uppy].off(event, fn);
    }
  }
  onFilePause(fileID, cb) {
    this.on("upload-pause", (targetFileID, isPaused) => {
      if (fileID === targetFileID) {
        cb(isPaused);
      }
    });
  }
  onFileRemove(fileID, cb) {
    this.on("file-removed", (file) => {
      if (fileID === file.id) cb(file.id);
    });
  }
  onPause(fileID, cb) {
    this.on("upload-pause", (targetFileID, isPaused) => {
      if (fileID === targetFileID) {
        cb(isPaused);
      }
    });
  }
  onRetry(fileID, cb) {
    this.on("upload-retry", (targetFileID) => {
      if (fileID === targetFileID) {
        cb();
      }
    });
  }
  onRetryAll(fileID, cb) {
    this.on("retry-all", () => {
      if (!_classPrivateFieldLooseBase11(this, _uppy)[_uppy].getFile(fileID)) return;
      cb();
    });
  }
  onPauseAll(fileID, cb) {
    this.on("pause-all", () => {
      if (!_classPrivateFieldLooseBase11(this, _uppy)[_uppy].getFile(fileID)) return;
      cb();
    });
  }
  onCancelAll(fileID, eventHandler) {
    var _this = this;
    this.on("cancel-all", function() {
      if (!_classPrivateFieldLooseBase11(_this, _uppy)[_uppy].getFile(fileID)) return;
      eventHandler(...arguments);
    });
  }
  onResumeAll(fileID, cb) {
    this.on("resume-all", () => {
      if (!_classPrivateFieldLooseBase11(this, _uppy)[_uppy].getFile(fileID)) return;
      cb();
    });
  }
};

// node_modules/@uppy/utils/lib/RateLimitedQueue.js
function _classPrivateFieldLooseBase12(receiver, privateKey) {
  if (!Object.prototype.hasOwnProperty.call(receiver, privateKey)) {
    throw new TypeError("attempted to use private field on non-instance");
  }
  return receiver;
}
var id12 = 0;
function _classPrivateFieldLooseKey12(name) {
  return "__private_" + id12++ + "_" + name;
}
function createCancelError(cause) {
  return new Error("Cancelled", {
    cause
  });
}
function abortOn(signal) {
  if (signal != null) {
    var _this$then;
    const abortPromise = () => this.abort(signal.reason);
    signal.addEventListener("abort", abortPromise, {
      once: true
    });
    const removeAbortListener = () => {
      signal.removeEventListener("abort", abortPromise);
    };
    (_this$then = this.then) == null || _this$then.call(this, removeAbortListener, removeAbortListener);
  }
  return this;
}
var _activeRequests = /* @__PURE__ */ _classPrivateFieldLooseKey12("activeRequests");
var _queuedHandlers = /* @__PURE__ */ _classPrivateFieldLooseKey12("queuedHandlers");
var _paused = /* @__PURE__ */ _classPrivateFieldLooseKey12("paused");
var _pauseTimer = /* @__PURE__ */ _classPrivateFieldLooseKey12("pauseTimer");
var _downLimit = /* @__PURE__ */ _classPrivateFieldLooseKey12("downLimit");
var _upperLimit = /* @__PURE__ */ _classPrivateFieldLooseKey12("upperLimit");
var _rateLimitingTimer = /* @__PURE__ */ _classPrivateFieldLooseKey12("rateLimitingTimer");
var _call = /* @__PURE__ */ _classPrivateFieldLooseKey12("call");
var _queueNext = /* @__PURE__ */ _classPrivateFieldLooseKey12("queueNext");
var _next = /* @__PURE__ */ _classPrivateFieldLooseKey12("next");
var _queue = /* @__PURE__ */ _classPrivateFieldLooseKey12("queue");
var _dequeue = /* @__PURE__ */ _classPrivateFieldLooseKey12("dequeue");
var _resume = /* @__PURE__ */ _classPrivateFieldLooseKey12("resume");
var _increaseLimit = /* @__PURE__ */ _classPrivateFieldLooseKey12("increaseLimit");
var RateLimitedQueue = class {
  constructor(limit) {
    Object.defineProperty(this, _dequeue, {
      value: _dequeue2
    });
    Object.defineProperty(this, _queue, {
      value: _queue2
    });
    Object.defineProperty(this, _next, {
      value: _next2
    });
    Object.defineProperty(this, _queueNext, {
      value: _queueNext2
    });
    Object.defineProperty(this, _call, {
      value: _call2
    });
    Object.defineProperty(this, _activeRequests, {
      writable: true,
      value: 0
    });
    Object.defineProperty(this, _queuedHandlers, {
      writable: true,
      value: []
    });
    Object.defineProperty(this, _paused, {
      writable: true,
      value: false
    });
    Object.defineProperty(this, _pauseTimer, {
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, _downLimit, {
      writable: true,
      value: 1
    });
    Object.defineProperty(this, _upperLimit, {
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, _rateLimitingTimer, {
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, _resume, {
      writable: true,
      value: () => this.resume()
    });
    Object.defineProperty(this, _increaseLimit, {
      writable: true,
      value: () => {
        if (_classPrivateFieldLooseBase12(this, _paused)[_paused]) {
          _classPrivateFieldLooseBase12(this, _rateLimitingTimer)[_rateLimitingTimer] = setTimeout(_classPrivateFieldLooseBase12(this, _increaseLimit)[_increaseLimit], 0);
          return;
        }
        _classPrivateFieldLooseBase12(this, _downLimit)[_downLimit] = this.limit;
        this.limit = Math.ceil((_classPrivateFieldLooseBase12(this, _upperLimit)[_upperLimit] + _classPrivateFieldLooseBase12(this, _downLimit)[_downLimit]) / 2);
        for (let i4 = _classPrivateFieldLooseBase12(this, _downLimit)[_downLimit]; i4 <= this.limit; i4++) {
          _classPrivateFieldLooseBase12(this, _queueNext)[_queueNext]();
        }
        if (_classPrivateFieldLooseBase12(this, _upperLimit)[_upperLimit] - _classPrivateFieldLooseBase12(this, _downLimit)[_downLimit] > 3) {
          _classPrivateFieldLooseBase12(this, _rateLimitingTimer)[_rateLimitingTimer] = setTimeout(_classPrivateFieldLooseBase12(this, _increaseLimit)[_increaseLimit], 2e3);
        } else {
          _classPrivateFieldLooseBase12(this, _downLimit)[_downLimit] = Math.floor(_classPrivateFieldLooseBase12(this, _downLimit)[_downLimit] / 2);
        }
      }
    });
    if (typeof limit !== "number" || limit === 0) {
      this.limit = Infinity;
    } else {
      this.limit = limit;
    }
  }
  run(fn, queueOptions) {
    if (!_classPrivateFieldLooseBase12(this, _paused)[_paused] && _classPrivateFieldLooseBase12(this, _activeRequests)[_activeRequests] < this.limit) {
      return _classPrivateFieldLooseBase12(this, _call)[_call](fn);
    }
    return _classPrivateFieldLooseBase12(this, _queue)[_queue](fn, queueOptions);
  }
  wrapSyncFunction(fn, queueOptions) {
    var _this = this;
    return function() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      const queuedRequest = _this.run(() => {
        fn(...args);
        queueMicrotask(() => queuedRequest.done());
        return () => {
        };
      }, queueOptions);
      return {
        abortOn,
        abort() {
          queuedRequest.abort();
        }
      };
    };
  }
  wrapPromiseFunction(fn, queueOptions) {
    var _this2 = this;
    return function() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      let queuedRequest;
      const outerPromise = new Promise((resolve, reject) => {
        queuedRequest = _this2.run(() => {
          let cancelError;
          let innerPromise;
          try {
            innerPromise = Promise.resolve(fn(...args));
          } catch (err) {
            innerPromise = Promise.reject(err);
          }
          innerPromise.then((result) => {
            if (cancelError) {
              reject(cancelError);
            } else {
              queuedRequest.done();
              resolve(result);
            }
          }, (err) => {
            if (cancelError) {
              reject(cancelError);
            } else {
              queuedRequest.done();
              reject(err);
            }
          });
          return (cause) => {
            cancelError = createCancelError(cause);
          };
        }, queueOptions);
      });
      outerPromise.abort = (cause) => {
        queuedRequest.abort(cause);
      };
      outerPromise.abortOn = abortOn;
      return outerPromise;
    };
  }
  resume() {
    _classPrivateFieldLooseBase12(this, _paused)[_paused] = false;
    clearTimeout(_classPrivateFieldLooseBase12(this, _pauseTimer)[_pauseTimer]);
    for (let i4 = 0; i4 < this.limit; i4++) {
      _classPrivateFieldLooseBase12(this, _queueNext)[_queueNext]();
    }
  }
  /**
   * Freezes the queue for a while or indefinitely.
   *
   * @param {number | null } [duration] Duration for the pause to happen, in milliseconds.
   *                                    If omitted, the queue won't resume automatically.
   */
  pause(duration2) {
    if (duration2 === void 0) {
      duration2 = null;
    }
    _classPrivateFieldLooseBase12(this, _paused)[_paused] = true;
    clearTimeout(_classPrivateFieldLooseBase12(this, _pauseTimer)[_pauseTimer]);
    if (duration2 != null) {
      _classPrivateFieldLooseBase12(this, _pauseTimer)[_pauseTimer] = setTimeout(_classPrivateFieldLooseBase12(this, _resume)[_resume], duration2);
    }
  }
  /**
   * Pauses the queue for a duration, and lower the limit of concurrent requests
   * when the queue resumes. When the queue resumes, it tries to progressively
   * increase the limit in `this.#increaseLimit` until another call is made to
   * `this.rateLimit`.
   * Call this function when using the RateLimitedQueue for network requests and
   * the remote server responds with 429 HTTP code.
   *
   * @param {number} duration in milliseconds.
   */
  rateLimit(duration2) {
    clearTimeout(_classPrivateFieldLooseBase12(this, _rateLimitingTimer)[_rateLimitingTimer]);
    this.pause(duration2);
    if (this.limit > 1 && Number.isFinite(this.limit)) {
      _classPrivateFieldLooseBase12(this, _upperLimit)[_upperLimit] = this.limit - 1;
      this.limit = _classPrivateFieldLooseBase12(this, _downLimit)[_downLimit];
      _classPrivateFieldLooseBase12(this, _rateLimitingTimer)[_rateLimitingTimer] = setTimeout(_classPrivateFieldLooseBase12(this, _increaseLimit)[_increaseLimit], duration2);
    }
  }
  get isPaused() {
    return _classPrivateFieldLooseBase12(this, _paused)[_paused];
  }
};
function _call2(fn) {
  _classPrivateFieldLooseBase12(this, _activeRequests)[_activeRequests] += 1;
  let done = false;
  let cancelActive;
  try {
    cancelActive = fn();
  } catch (err) {
    _classPrivateFieldLooseBase12(this, _activeRequests)[_activeRequests] -= 1;
    throw err;
  }
  return {
    abort: (cause) => {
      if (done) return;
      done = true;
      _classPrivateFieldLooseBase12(this, _activeRequests)[_activeRequests] -= 1;
      cancelActive == null || cancelActive(cause);
      _classPrivateFieldLooseBase12(this, _queueNext)[_queueNext]();
    },
    done: () => {
      if (done) return;
      done = true;
      _classPrivateFieldLooseBase12(this, _activeRequests)[_activeRequests] -= 1;
      _classPrivateFieldLooseBase12(this, _queueNext)[_queueNext]();
    }
  };
}
function _queueNext2() {
  queueMicrotask(() => _classPrivateFieldLooseBase12(this, _next)[_next]());
}
function _next2() {
  if (_classPrivateFieldLooseBase12(this, _paused)[_paused] || _classPrivateFieldLooseBase12(this, _activeRequests)[_activeRequests] >= this.limit) {
    return;
  }
  if (_classPrivateFieldLooseBase12(this, _queuedHandlers)[_queuedHandlers].length === 0) {
    return;
  }
  const next = _classPrivateFieldLooseBase12(this, _queuedHandlers)[_queuedHandlers].shift();
  if (next == null) {
    throw new Error("Invariant violation: next is null");
  }
  const handler = _classPrivateFieldLooseBase12(this, _call)[_call](next.fn);
  next.abort = handler.abort;
  next.done = handler.done;
}
function _queue2(fn, options) {
  const handler = {
    fn,
    priority: (options == null ? void 0 : options.priority) || 0,
    abort: () => {
      _classPrivateFieldLooseBase12(this, _dequeue)[_dequeue](handler);
    },
    done: () => {
      throw new Error("Cannot mark a queued request as done: this indicates a bug");
    }
  };
  const index = _classPrivateFieldLooseBase12(this, _queuedHandlers)[_queuedHandlers].findIndex((other) => {
    return handler.priority > other.priority;
  });
  if (index === -1) {
    _classPrivateFieldLooseBase12(this, _queuedHandlers)[_queuedHandlers].push(handler);
  } else {
    _classPrivateFieldLooseBase12(this, _queuedHandlers)[_queuedHandlers].splice(index, 0, handler);
  }
  return handler;
}
function _dequeue2(handler) {
  const index = _classPrivateFieldLooseBase12(this, _queuedHandlers)[_queuedHandlers].indexOf(handler);
  if (index !== -1) {
    _classPrivateFieldLooseBase12(this, _queuedHandlers)[_queuedHandlers].splice(index, 1);
  }
}
var internalRateLimitedQueue = Symbol("__queue");

// node_modules/@uppy/utils/lib/fileFilters.js
function filterNonFailedFiles(files) {
  const hasError = (file) => "error" in file && !!file.error;
  return files.filter((file) => !hasError(file));
}
function filterFilesToEmitUploadStarted(files) {
  return files.filter((file) => {
    var _file$progress;
    return !((_file$progress = file.progress) != null && _file$progress.uploadStarted) || !file.isRestored;
  });
}

// node_modules/@uppy/utils/lib/AbortController.js
var {
  AbortController: AbortController2
} = globalThis;
var {
  AbortSignal
} = globalThis;
var createAbortError = function(message, options) {
  if (message === void 0) {
    message = "Aborted";
  }
  const err = new DOMException(message, "AbortError");
  if (options != null && has(options, "cause")) {
    Object.defineProperty(err, "cause", {
      // @ts-expect-error TS is drunk
      __proto__: null,
      configurable: true,
      writable: true,
      value: options.cause
    });
  }
  return err;
};

// node_modules/@uppy/aws-s3-multipart/lib/MultipartUploader.js
function _classPrivateFieldLooseBase13(receiver, privateKey) {
  if (!Object.prototype.hasOwnProperty.call(receiver, privateKey)) {
    throw new TypeError("attempted to use private field on non-instance");
  }
  return receiver;
}
var id13 = 0;
function _classPrivateFieldLooseKey13(name) {
  return "__private_" + id13++ + "_" + name;
}
var MB = 1024 * 1024;
var defaultOptions7 = {
  getChunkSize(file) {
    return Math.ceil(file.size / 1e4);
  },
  onProgress() {
  },
  onPartComplete() {
  },
  onSuccess() {
  },
  onError(err) {
    throw err;
  }
};
function ensureInt(value) {
  if (typeof value === "string") {
    return parseInt(value, 10);
  }
  if (typeof value === "number") {
    return value;
  }
  throw new TypeError("Expected a number");
}
var pausingUploadReason = Symbol("pausing upload, not an actual error");
var _abortController2 = /* @__PURE__ */ _classPrivateFieldLooseKey13("abortController");
var _chunks = /* @__PURE__ */ _classPrivateFieldLooseKey13("chunks");
var _chunkState = /* @__PURE__ */ _classPrivateFieldLooseKey13("chunkState");
var _data = /* @__PURE__ */ _classPrivateFieldLooseKey13("data");
var _file = /* @__PURE__ */ _classPrivateFieldLooseKey13("file");
var _uploadHasStarted = /* @__PURE__ */ _classPrivateFieldLooseKey13("uploadHasStarted");
var _onError = /* @__PURE__ */ _classPrivateFieldLooseKey13("onError");
var _onSuccess = /* @__PURE__ */ _classPrivateFieldLooseKey13("onSuccess");
var _shouldUseMultipart = /* @__PURE__ */ _classPrivateFieldLooseKey13("shouldUseMultipart");
var _isRestoring = /* @__PURE__ */ _classPrivateFieldLooseKey13("isRestoring");
var _onReject = /* @__PURE__ */ _classPrivateFieldLooseKey13("onReject");
var _maxMultipartParts = /* @__PURE__ */ _classPrivateFieldLooseKey13("maxMultipartParts");
var _minPartSize = /* @__PURE__ */ _classPrivateFieldLooseKey13("minPartSize");
var _initChunks = /* @__PURE__ */ _classPrivateFieldLooseKey13("initChunks");
var _createUpload3 = /* @__PURE__ */ _classPrivateFieldLooseKey13("createUpload");
var _resumeUpload = /* @__PURE__ */ _classPrivateFieldLooseKey13("resumeUpload");
var _onPartProgress = /* @__PURE__ */ _classPrivateFieldLooseKey13("onPartProgress");
var _onPartComplete = /* @__PURE__ */ _classPrivateFieldLooseKey13("onPartComplete");
var _abortUpload = /* @__PURE__ */ _classPrivateFieldLooseKey13("abortUpload");
var MultipartUploader = class {
  constructor(data, options) {
    var _this$options, _this$options$getChun;
    Object.defineProperty(this, _abortUpload, {
      value: _abortUpload2
    });
    Object.defineProperty(this, _resumeUpload, {
      value: _resumeUpload2
    });
    Object.defineProperty(this, _createUpload3, {
      value: _createUpload22
    });
    Object.defineProperty(this, _initChunks, {
      value: _initChunks2
    });
    Object.defineProperty(this, _abortController2, {
      writable: true,
      value: new AbortController2()
    });
    Object.defineProperty(this, _chunks, {
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, _chunkState, {
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, _data, {
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, _file, {
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, _uploadHasStarted, {
      writable: true,
      value: false
    });
    Object.defineProperty(this, _onError, {
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, _onSuccess, {
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, _shouldUseMultipart, {
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, _isRestoring, {
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, _onReject, {
      writable: true,
      value: (err) => (err == null ? void 0 : err.cause) === pausingUploadReason ? null : _classPrivateFieldLooseBase13(this, _onError)[_onError](err)
    });
    Object.defineProperty(this, _maxMultipartParts, {
      writable: true,
      value: 1e4
    });
    Object.defineProperty(this, _minPartSize, {
      writable: true,
      value: 5 * MB
    });
    Object.defineProperty(this, _onPartProgress, {
      writable: true,
      value: (index) => (ev) => {
        if (!ev.lengthComputable) return;
        _classPrivateFieldLooseBase13(this, _chunkState)[_chunkState][index].uploaded = ensureInt(ev.loaded);
        const totalUploaded = _classPrivateFieldLooseBase13(this, _chunkState)[_chunkState].reduce((n3, c4) => n3 + c4.uploaded, 0);
        this.options.onProgress(totalUploaded, _classPrivateFieldLooseBase13(this, _data)[_data].size);
      }
    });
    Object.defineProperty(this, _onPartComplete, {
      writable: true,
      value: (index) => (etag) => {
        _classPrivateFieldLooseBase13(this, _chunks)[_chunks][index] = null;
        _classPrivateFieldLooseBase13(this, _chunkState)[_chunkState][index].etag = etag;
        _classPrivateFieldLooseBase13(this, _chunkState)[_chunkState][index].done = true;
        const part = {
          PartNumber: index + 1,
          ETag: etag
        };
        this.options.onPartComplete(part);
      }
    });
    this.options = {
      ...defaultOptions7,
      ...options
    };
    (_this$options$getChun = (_this$options = this.options).getChunkSize) != null ? _this$options$getChun : _this$options.getChunkSize = defaultOptions7.getChunkSize;
    _classPrivateFieldLooseBase13(this, _data)[_data] = data;
    _classPrivateFieldLooseBase13(this, _file)[_file] = options.file;
    _classPrivateFieldLooseBase13(this, _onSuccess)[_onSuccess] = this.options.onSuccess;
    _classPrivateFieldLooseBase13(this, _onError)[_onError] = this.options.onError;
    _classPrivateFieldLooseBase13(this, _shouldUseMultipart)[_shouldUseMultipart] = this.options.shouldUseMultipart;
    _classPrivateFieldLooseBase13(this, _isRestoring)[_isRestoring] = options.uploadId && options.key;
    _classPrivateFieldLooseBase13(this, _initChunks)[_initChunks]();
  }
  start() {
    if (_classPrivateFieldLooseBase13(this, _uploadHasStarted)[_uploadHasStarted]) {
      if (!_classPrivateFieldLooseBase13(this, _abortController2)[_abortController2].signal.aborted) _classPrivateFieldLooseBase13(this, _abortController2)[_abortController2].abort(pausingUploadReason);
      _classPrivateFieldLooseBase13(this, _abortController2)[_abortController2] = new AbortController2();
      _classPrivateFieldLooseBase13(this, _resumeUpload)[_resumeUpload]();
    } else if (_classPrivateFieldLooseBase13(this, _isRestoring)[_isRestoring]) {
      this.options.companionComm.restoreUploadFile(_classPrivateFieldLooseBase13(this, _file)[_file], {
        uploadId: this.options.uploadId,
        key: this.options.key
      });
      _classPrivateFieldLooseBase13(this, _resumeUpload)[_resumeUpload]();
    } else {
      _classPrivateFieldLooseBase13(this, _createUpload3)[_createUpload3]();
    }
  }
  pause() {
    _classPrivateFieldLooseBase13(this, _abortController2)[_abortController2].abort(pausingUploadReason);
    _classPrivateFieldLooseBase13(this, _abortController2)[_abortController2] = new AbortController2();
  }
  abort(opts) {
    if (opts != null && opts.really) _classPrivateFieldLooseBase13(this, _abortUpload)[_abortUpload]();
    else this.pause();
  }
  // TODO: remove this in the next major
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  get chunkState() {
    return _classPrivateFieldLooseBase13(this, _chunkState)[_chunkState];
  }
};
function _initChunks2() {
  const fileSize = _classPrivateFieldLooseBase13(this, _data)[_data].size;
  const shouldUseMultipart = typeof _classPrivateFieldLooseBase13(this, _shouldUseMultipart)[_shouldUseMultipart] === "function" ? _classPrivateFieldLooseBase13(this, _shouldUseMultipart)[_shouldUseMultipart](_classPrivateFieldLooseBase13(this, _file)[_file]) : Boolean(_classPrivateFieldLooseBase13(this, _shouldUseMultipart)[_shouldUseMultipart]);
  if (shouldUseMultipart && fileSize > _classPrivateFieldLooseBase13(this, _minPartSize)[_minPartSize]) {
    let chunkSize = Math.max(this.options.getChunkSize(_classPrivateFieldLooseBase13(this, _data)[_data]), _classPrivateFieldLooseBase13(this, _minPartSize)[_minPartSize]);
    let arraySize = Math.floor(fileSize / chunkSize);
    if (arraySize > _classPrivateFieldLooseBase13(this, _maxMultipartParts)[_maxMultipartParts]) {
      arraySize = _classPrivateFieldLooseBase13(this, _maxMultipartParts)[_maxMultipartParts];
      chunkSize = fileSize / _classPrivateFieldLooseBase13(this, _maxMultipartParts)[_maxMultipartParts];
    }
    _classPrivateFieldLooseBase13(this, _chunks)[_chunks] = Array(arraySize);
    for (let offset = 0, j4 = 0; offset < fileSize; offset += chunkSize, j4++) {
      const end = Math.min(fileSize, offset + chunkSize);
      const getData = () => {
        const i22 = offset;
        return _classPrivateFieldLooseBase13(this, _data)[_data].slice(i22, end);
      };
      _classPrivateFieldLooseBase13(this, _chunks)[_chunks][j4] = {
        getData,
        onProgress: _classPrivateFieldLooseBase13(this, _onPartProgress)[_onPartProgress](j4),
        onComplete: _classPrivateFieldLooseBase13(this, _onPartComplete)[_onPartComplete](j4),
        shouldUseMultipart
      };
      if (_classPrivateFieldLooseBase13(this, _isRestoring)[_isRestoring]) {
        const size = offset + chunkSize > fileSize ? fileSize - offset : chunkSize;
        _classPrivateFieldLooseBase13(this, _chunks)[_chunks][j4].setAsUploaded = () => {
          _classPrivateFieldLooseBase13(this, _chunks)[_chunks][j4] = null;
          _classPrivateFieldLooseBase13(this, _chunkState)[_chunkState][j4].uploaded = size;
        };
      }
    }
  } else {
    _classPrivateFieldLooseBase13(this, _chunks)[_chunks] = [{
      getData: () => _classPrivateFieldLooseBase13(this, _data)[_data],
      onProgress: _classPrivateFieldLooseBase13(this, _onPartProgress)[_onPartProgress](0),
      onComplete: _classPrivateFieldLooseBase13(this, _onPartComplete)[_onPartComplete](0),
      shouldUseMultipart
    }];
  }
  _classPrivateFieldLooseBase13(this, _chunkState)[_chunkState] = _classPrivateFieldLooseBase13(this, _chunks)[_chunks].map(() => ({
    uploaded: 0
  }));
}
function _createUpload22() {
  this.options.companionComm.uploadFile(_classPrivateFieldLooseBase13(this, _file)[_file], _classPrivateFieldLooseBase13(this, _chunks)[_chunks], _classPrivateFieldLooseBase13(this, _abortController2)[_abortController2].signal).then(_classPrivateFieldLooseBase13(this, _onSuccess)[_onSuccess], _classPrivateFieldLooseBase13(this, _onReject)[_onReject]);
  _classPrivateFieldLooseBase13(this, _uploadHasStarted)[_uploadHasStarted] = true;
}
function _resumeUpload2() {
  this.options.companionComm.resumeUploadFile(_classPrivateFieldLooseBase13(this, _file)[_file], _classPrivateFieldLooseBase13(this, _chunks)[_chunks], _classPrivateFieldLooseBase13(this, _abortController2)[_abortController2].signal).then(_classPrivateFieldLooseBase13(this, _onSuccess)[_onSuccess], _classPrivateFieldLooseBase13(this, _onReject)[_onReject]);
}
function _abortUpload2() {
  _classPrivateFieldLooseBase13(this, _abortController2)[_abortController2].abort();
  this.options.companionComm.abortFileUpload(_classPrivateFieldLooseBase13(this, _file)[_file]).catch((err) => this.options.log(err));
}
var MultipartUploader_default = MultipartUploader;

// node_modules/@uppy/aws-s3-multipart/lib/utils.js
function throwIfAborted(signal) {
  if (signal != null && signal.aborted) {
    throw createAbortError("The operation was aborted", {
      cause: signal.reason
    });
  }
}

// node_modules/@uppy/aws-s3-multipart/lib/createSignedURL.js
function createCanonicalRequest(_ref) {
  let {
    method = "PUT",
    CanonicalUri = "/",
    CanonicalQueryString = "",
    SignedHeaders,
    HashedPayload
  } = _ref;
  const headerKeys = Object.keys(SignedHeaders).map((k4) => k4.toLowerCase()).sort();
  return [method, CanonicalUri, CanonicalQueryString, ...headerKeys.map((k4) => `${k4}:${SignedHeaders[k4]}`), "", headerKeys.join(";"), HashedPayload].join("\n");
}
var ec = new TextEncoder();
var algorithm = {
  name: "HMAC",
  hash: "SHA-256"
};
async function digest(data) {
  const {
    subtle
  } = globalThis.crypto;
  return subtle.digest(algorithm.hash, ec.encode(data));
}
async function generateHmacKey(secret) {
  const {
    subtle
  } = globalThis.crypto;
  return subtle.importKey("raw", typeof secret === "string" ? ec.encode(secret) : secret, algorithm, false, ["sign"]);
}
function arrayBufferToHexString(arrayBuffer) {
  const byteArray = new Uint8Array(arrayBuffer);
  let hexString = "";
  for (let i4 = 0; i4 < byteArray.length; i4++) {
    hexString += byteArray[i4].toString(16).padStart(2, "0");
  }
  return hexString;
}
async function hash(key, data) {
  const {
    subtle
  } = globalThis.crypto;
  return subtle.sign(algorithm, await generateHmacKey(key), ec.encode(data));
}
async function createSignedURL(_ref2) {
  let {
    accountKey,
    accountSecret,
    sessionToken,
    bucketName,
    Key,
    Region,
    expires,
    uploadId,
    partNumber
  } = _ref2;
  const Service = "s3";
  const host = `${bucketName}.${Service}.${Region}.amazonaws.com`;
  const CanonicalUri = `/${encodeURI(Key).replace(/[;?:@&=+$,#!'()*]/g, (c4) => `%${c4.charCodeAt(0).toString(16).toUpperCase()}`)}`;
  const payload = "UNSIGNED-PAYLOAD";
  const requestDateTime = (/* @__PURE__ */ new Date()).toISOString().replace(/[-:]|\.\d+/g, "");
  const date = requestDateTime.slice(0, 8);
  const scope = `${date}/${Region}/${Service}/aws4_request`;
  const url = new URL(`https://${host}${CanonicalUri}`);
  url.searchParams.set("X-Amz-Algorithm", "AWS4-HMAC-SHA256");
  url.searchParams.set("X-Amz-Content-Sha256", payload);
  url.searchParams.set("X-Amz-Credential", `${accountKey}/${scope}`);
  url.searchParams.set("X-Amz-Date", requestDateTime);
  url.searchParams.set("X-Amz-Expires", expires);
  url.searchParams.set("X-Amz-Security-Token", sessionToken);
  url.searchParams.set("X-Amz-SignedHeaders", "host");
  if (partNumber) url.searchParams.set("partNumber", partNumber);
  if (uploadId) url.searchParams.set("uploadId", uploadId);
  url.searchParams.set("x-id", partNumber && uploadId ? "UploadPart" : "PutObject");
  const canonical = createCanonicalRequest({
    CanonicalUri,
    CanonicalQueryString: url.search.slice(1),
    SignedHeaders: {
      host
    },
    HashedPayload: payload
  });
  const hashedCanonical = arrayBufferToHexString(await digest(canonical));
  const stringToSign = [
    `AWS4-HMAC-SHA256`,
    // The algorithm used to create the hash of the canonical request.
    requestDateTime,
    // The date and time used in the credential scope.
    scope,
    // The credential scope. This restricts the resulting signature to the specified Region and service.
    hashedCanonical
    // The hash of the canonical request.
  ].join("\n");
  const kDate = await hash(`AWS4${accountSecret}`, date);
  const kRegion = await hash(kDate, Region);
  const kService = await hash(kRegion, Service);
  const kSigning = await hash(kService, "aws4_request");
  const signature = arrayBufferToHexString(await hash(kSigning, stringToSign));
  url.searchParams.set("X-Amz-Signature", signature);
  return url;
}

// node_modules/@uppy/aws-s3-multipart/lib/HTTPCommunicationQueue.js
function _classPrivateFieldLooseBase14(receiver, privateKey) {
  if (!Object.prototype.hasOwnProperty.call(receiver, privateKey)) {
    throw new TypeError("attempted to use private field on non-instance");
  }
  return receiver;
}
var id14 = 0;
function _classPrivateFieldLooseKey14(name) {
  return "__private_" + id14++ + "_" + name;
}
function removeMetadataFromURL(urlString) {
  const urlObject = new URL(urlString);
  urlObject.search = "";
  urlObject.hash = "";
  return urlObject.href;
}
var _abortMultipartUpload = /* @__PURE__ */ _classPrivateFieldLooseKey14("abortMultipartUpload");
var _cache = /* @__PURE__ */ _classPrivateFieldLooseKey14("cache");
var _createMultipartUpload = /* @__PURE__ */ _classPrivateFieldLooseKey14("createMultipartUpload");
var _fetchSignature = /* @__PURE__ */ _classPrivateFieldLooseKey14("fetchSignature");
var _getUploadParameters = /* @__PURE__ */ _classPrivateFieldLooseKey14("getUploadParameters");
var _listParts = /* @__PURE__ */ _classPrivateFieldLooseKey14("listParts");
var _previousRetryDelay = /* @__PURE__ */ _classPrivateFieldLooseKey14("previousRetryDelay");
var _requests = /* @__PURE__ */ _classPrivateFieldLooseKey14("requests");
var _retryDelays = /* @__PURE__ */ _classPrivateFieldLooseKey14("retryDelays");
var _sendCompletionRequest = /* @__PURE__ */ _classPrivateFieldLooseKey14("sendCompletionRequest");
var _setS3MultipartState = /* @__PURE__ */ _classPrivateFieldLooseKey14("setS3MultipartState");
var _uploadPartBytes = /* @__PURE__ */ _classPrivateFieldLooseKey14("uploadPartBytes");
var _getFile = /* @__PURE__ */ _classPrivateFieldLooseKey14("getFile");
var _shouldRetry = /* @__PURE__ */ _classPrivateFieldLooseKey14("shouldRetry");
var _nonMultipartUpload = /* @__PURE__ */ _classPrivateFieldLooseKey14("nonMultipartUpload");
var HTTPCommunicationQueue = class {
  constructor(_requests22, options, setS3MultipartState, getFile) {
    Object.defineProperty(this, _nonMultipartUpload, {
      value: _nonMultipartUpload2
    });
    Object.defineProperty(this, _shouldRetry, {
      value: _shouldRetry2
    });
    Object.defineProperty(this, _abortMultipartUpload, {
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, _cache, {
      writable: true,
      value: /* @__PURE__ */ new WeakMap()
    });
    Object.defineProperty(this, _createMultipartUpload, {
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, _fetchSignature, {
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, _getUploadParameters, {
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, _listParts, {
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, _previousRetryDelay, {
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, _requests, {
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, _retryDelays, {
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, _sendCompletionRequest, {
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, _setS3MultipartState, {
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, _uploadPartBytes, {
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, _getFile, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldLooseBase14(this, _requests)[_requests] = _requests22;
    _classPrivateFieldLooseBase14(this, _setS3MultipartState)[_setS3MultipartState] = setS3MultipartState;
    _classPrivateFieldLooseBase14(this, _getFile)[_getFile] = getFile;
    this.setOptions(options);
  }
  setOptions(options) {
    const requests = _classPrivateFieldLooseBase14(this, _requests)[_requests];
    if ("abortMultipartUpload" in options) {
      _classPrivateFieldLooseBase14(this, _abortMultipartUpload)[_abortMultipartUpload] = requests.wrapPromiseFunction(options.abortMultipartUpload, {
        priority: 1
      });
    }
    if ("createMultipartUpload" in options) {
      _classPrivateFieldLooseBase14(this, _createMultipartUpload)[_createMultipartUpload] = requests.wrapPromiseFunction(options.createMultipartUpload, {
        priority: -1
      });
    }
    if ("signPart" in options) {
      _classPrivateFieldLooseBase14(this, _fetchSignature)[_fetchSignature] = requests.wrapPromiseFunction(options.signPart);
    }
    if ("listParts" in options) {
      _classPrivateFieldLooseBase14(this, _listParts)[_listParts] = requests.wrapPromiseFunction(options.listParts);
    }
    if ("completeMultipartUpload" in options) {
      _classPrivateFieldLooseBase14(this, _sendCompletionRequest)[_sendCompletionRequest] = requests.wrapPromiseFunction(options.completeMultipartUpload, {
        priority: 1
      });
    }
    if ("retryDelays" in options) {
      var _options$retryDelays;
      _classPrivateFieldLooseBase14(this, _retryDelays)[_retryDelays] = (_options$retryDelays = options.retryDelays) != null ? _options$retryDelays : [];
    }
    if ("uploadPartBytes" in options) {
      _classPrivateFieldLooseBase14(this, _uploadPartBytes)[_uploadPartBytes] = requests.wrapPromiseFunction(options.uploadPartBytes, {
        priority: Infinity
      });
    }
    if ("getUploadParameters" in options) {
      _classPrivateFieldLooseBase14(this, _getUploadParameters)[_getUploadParameters] = requests.wrapPromiseFunction(options.getUploadParameters);
    }
  }
  async getUploadId(file, signal) {
    let cachedResult;
    while ((cachedResult = _classPrivateFieldLooseBase14(this, _cache)[_cache].get(file.data)) != null) {
      try {
        return await cachedResult;
      } catch {
      }
    }
    const promise = _classPrivateFieldLooseBase14(this, _createMultipartUpload)[_createMultipartUpload](_classPrivateFieldLooseBase14(this, _getFile)[_getFile](file), signal);
    const abortPromise = () => {
      promise.abort(signal.reason);
      _classPrivateFieldLooseBase14(this, _cache)[_cache].delete(file.data);
    };
    signal.addEventListener("abort", abortPromise, {
      once: true
    });
    _classPrivateFieldLooseBase14(this, _cache)[_cache].set(file.data, promise);
    promise.then(async (result) => {
      signal.removeEventListener("abort", abortPromise);
      _classPrivateFieldLooseBase14(this, _setS3MultipartState)[_setS3MultipartState](file, result);
      _classPrivateFieldLooseBase14(this, _cache)[_cache].set(file.data, result);
    }, () => {
      signal.removeEventListener("abort", abortPromise);
      _classPrivateFieldLooseBase14(this, _cache)[_cache].delete(file.data);
    });
    return promise;
  }
  async abortFileUpload(file) {
    const result = _classPrivateFieldLooseBase14(this, _cache)[_cache].get(file.data);
    if (result == null) {
      return;
    }
    _classPrivateFieldLooseBase14(this, _cache)[_cache].delete(file.data);
    _classPrivateFieldLooseBase14(this, _setS3MultipartState)[_setS3MultipartState](file, /* @__PURE__ */ Object.create(null));
    let awaitedResult;
    try {
      awaitedResult = await result;
    } catch {
      return;
    }
    await _classPrivateFieldLooseBase14(this, _abortMultipartUpload)[_abortMultipartUpload](_classPrivateFieldLooseBase14(this, _getFile)[_getFile](file), awaitedResult);
  }
  async uploadFile(file, chunks2, signal) {
    throwIfAborted(signal);
    if (chunks2.length === 1 && !chunks2[0].shouldUseMultipart) {
      return _classPrivateFieldLooseBase14(this, _nonMultipartUpload)[_nonMultipartUpload](file, chunks2[0], signal);
    }
    const {
      uploadId,
      key
    } = await this.getUploadId(file, signal);
    throwIfAborted(signal);
    try {
      const parts = await Promise.all(chunks2.map((chunk, i4) => this.uploadChunk(file, i4 + 1, chunk, signal)));
      throwIfAborted(signal);
      return await _classPrivateFieldLooseBase14(this, _sendCompletionRequest)[_sendCompletionRequest](_classPrivateFieldLooseBase14(this, _getFile)[_getFile](file), {
        key,
        uploadId,
        parts,
        signal
      }, signal).abortOn(signal);
    } catch (err) {
      if ((err == null ? void 0 : err.cause) !== pausingUploadReason && (err == null ? void 0 : err.name) !== "AbortError") {
        this.abortFileUpload(file);
      }
      throw err;
    }
  }
  restoreUploadFile(file, uploadIdAndKey) {
    _classPrivateFieldLooseBase14(this, _cache)[_cache].set(file.data, uploadIdAndKey);
  }
  async resumeUploadFile(file, chunks2, signal) {
    throwIfAborted(signal);
    if (chunks2.length === 1 && chunks2[0] != null && !chunks2[0].shouldUseMultipart) {
      return _classPrivateFieldLooseBase14(this, _nonMultipartUpload)[_nonMultipartUpload](file, chunks2[0], signal);
    }
    const {
      uploadId,
      key
    } = await this.getUploadId(file, signal);
    throwIfAborted(signal);
    const alreadyUploadedParts = await _classPrivateFieldLooseBase14(this, _listParts)[_listParts](_classPrivateFieldLooseBase14(this, _getFile)[_getFile](file), {
      uploadId,
      key,
      signal
    }, signal).abortOn(signal);
    throwIfAborted(signal);
    const parts = await Promise.all(chunks2.map((chunk, i4) => {
      const partNumber = i4 + 1;
      const alreadyUploadedInfo = alreadyUploadedParts.find((_ref) => {
        let {
          PartNumber
        } = _ref;
        return PartNumber === partNumber;
      });
      if (alreadyUploadedInfo == null) {
        return this.uploadChunk(file, partNumber, chunk, signal);
      }
      chunk == null || chunk.setAsUploaded == null || chunk.setAsUploaded();
      return {
        PartNumber: partNumber,
        ETag: alreadyUploadedInfo.ETag
      };
    }));
    throwIfAborted(signal);
    return _classPrivateFieldLooseBase14(this, _sendCompletionRequest)[_sendCompletionRequest](_classPrivateFieldLooseBase14(this, _getFile)[_getFile](file), {
      key,
      uploadId,
      parts,
      signal
    }, signal).abortOn(signal);
  }
  async uploadChunk(file, partNumber, chunk, signal) {
    throwIfAborted(signal);
    const {
      uploadId,
      key
    } = await this.getUploadId(file, signal);
    const signatureRetryIterator = _classPrivateFieldLooseBase14(this, _retryDelays)[_retryDelays].values();
    const chunkRetryIterator = _classPrivateFieldLooseBase14(this, _retryDelays)[_retryDelays].values();
    const shouldRetrySignature = () => {
      const next = signatureRetryIterator.next();
      if (next == null || next.done) {
        return null;
      }
      return next.value;
    };
    for (; ; ) {
      throwIfAborted(signal);
      const chunkData = chunk.getData();
      const {
        onProgress,
        onComplete
      } = chunk;
      let signature;
      try {
        signature = await _classPrivateFieldLooseBase14(this, _fetchSignature)[_fetchSignature](_classPrivateFieldLooseBase14(this, _getFile)[_getFile](file), {
          uploadId,
          key,
          partNumber,
          body: chunkData,
          signal
        }).abortOn(signal);
      } catch (err) {
        const timeout = shouldRetrySignature();
        if (timeout == null || signal.aborted) {
          throw err;
        }
        await new Promise((resolve) => setTimeout(resolve, timeout));
        continue;
      }
      throwIfAborted(signal);
      try {
        return {
          PartNumber: partNumber,
          ...await _classPrivateFieldLooseBase14(this, _uploadPartBytes)[_uploadPartBytes]({
            signature,
            body: chunkData,
            size: chunkData.size,
            onProgress,
            onComplete,
            signal
          }).abortOn(signal)
        };
      } catch (err) {
        if (!await _classPrivateFieldLooseBase14(this, _shouldRetry)[_shouldRetry](err, chunkRetryIterator)) throw err;
      }
    }
  }
};
async function _shouldRetry2(err, retryDelayIterator) {
  var _err$source;
  const requests = _classPrivateFieldLooseBase14(this, _requests)[_requests];
  const status = err == null || (_err$source = err.source) == null ? void 0 : _err$source.status;
  if (status == null) {
    return false;
  }
  if (status === 403 && err.message === "Request has expired") {
    if (!requests.isPaused) {
      if (requests.limit === 1 || _classPrivateFieldLooseBase14(this, _previousRetryDelay)[_previousRetryDelay] == null) {
        const next = retryDelayIterator.next();
        if (next == null || next.done) {
          return false;
        }
        _classPrivateFieldLooseBase14(this, _previousRetryDelay)[_previousRetryDelay] = next.value;
      }
      requests.rateLimit(0);
      await new Promise((resolve) => setTimeout(resolve, _classPrivateFieldLooseBase14(this, _previousRetryDelay)[_previousRetryDelay]));
    }
  } else if (status === 429) {
    if (!requests.isPaused) {
      const next = retryDelayIterator.next();
      if (next == null || next.done) {
        return false;
      }
      requests.rateLimit(next.value);
    }
  } else if (status > 400 && status < 500 && status !== 409) {
    return false;
  } else if (typeof navigator !== "undefined" && navigator.onLine === false) {
    if (!requests.isPaused) {
      requests.pause();
      window.addEventListener("online", () => {
        requests.resume();
      }, {
        once: true
      });
    }
  } else {
    const next = retryDelayIterator.next();
    if (next == null || next.done) {
      return false;
    }
    await new Promise((resolve) => setTimeout(resolve, next.value));
  }
  return true;
}
async function _nonMultipartUpload2(file, chunk, signal) {
  const {
    method = "POST",
    url,
    fields,
    headers
  } = await _classPrivateFieldLooseBase14(this, _getUploadParameters)[_getUploadParameters](_classPrivateFieldLooseBase14(this, _getFile)[_getFile](file), {
    signal
  }).abortOn(signal);
  let body;
  const data = chunk.getData();
  if (method.toUpperCase() === "POST") {
    const formData = new FormData();
    Object.entries(fields).forEach((_ref2) => {
      let [key, value] = _ref2;
      return formData.set(key, value);
    });
    formData.set("file", data);
    body = formData;
  } else {
    body = data;
  }
  const {
    onProgress,
    onComplete
  } = chunk;
  const result = await _classPrivateFieldLooseBase14(this, _uploadPartBytes)[_uploadPartBytes]({
    signature: {
      url,
      headers,
      method
    },
    body,
    size: data.size,
    onProgress,
    onComplete,
    signal
  }).abortOn(signal);
  return "location" in result ? result : {
    location: removeMetadataFromURL(url),
    ...result
  };
}

// node_modules/@uppy/aws-s3-multipart/lib/index.js
var _Symbol$for6;
function _classPrivateFieldLooseBase15(receiver, privateKey) {
  if (!Object.prototype.hasOwnProperty.call(receiver, privateKey)) {
    throw new TypeError("attempted to use private field on non-instance");
  }
  return receiver;
}
var id15 = 0;
function _classPrivateFieldLooseKey15(name) {
  return "__private_" + id15++ + "_" + name;
}
var packageJson10 = {
  "version": "3.12.0"
};
function assertServerError(res) {
  if (res != null && res.error) {
    const error = new Error(res.message);
    Object.assign(error, res.error);
    throw error;
  }
  return res;
}
function getExpiry(credentials) {
  const expirationDate = credentials.Expiration;
  if (expirationDate) {
    const timeUntilExpiry = Math.floor((new Date(expirationDate) - Date.now()) / 1e3);
    if (timeUntilExpiry > 9) {
      return timeUntilExpiry;
    }
  }
  return void 0;
}
function getAllowedMetadata(_ref) {
  let {
    meta,
    allowedMetaFields,
    querify = false
  } = _ref;
  const metaFields = allowedMetaFields != null ? allowedMetaFields : Object.keys(meta);
  if (!meta) return {};
  return Object.fromEntries(metaFields.filter((key) => meta[key] != null).map((key) => {
    const realKey = querify ? `metadata[${key}]` : key;
    const value = String(meta[key]);
    return [realKey, value];
  }));
}
var defaultOptions8 = {
  // TODO: null here means “include all”, [] means include none.
  // This is inconsistent with @uppy/aws-s3 and @uppy/transloadit
  allowedMetaFields: null,
  limit: 6,
  getTemporarySecurityCredentials: false,
  shouldUseMultipart: (file) => file.size !== 0,
  // TODO: Switch default to:
  // eslint-disable-next-line no-bitwise
  // shouldUseMultipart: (file) => file.size >> 10 >> 10 > 100,
  retryDelays: [0, 1e3, 3e3, 5e3],
  companionHeaders: {}
};
var _companionCommunicationQueue = /* @__PURE__ */ _classPrivateFieldLooseKey15("companionCommunicationQueue");
var _client = /* @__PURE__ */ _classPrivateFieldLooseKey15("client");
var _cachedTemporaryCredentials = /* @__PURE__ */ _classPrivateFieldLooseKey15("cachedTemporaryCredentials");
var _getTemporarySecurityCredentials = /* @__PURE__ */ _classPrivateFieldLooseKey15("getTemporarySecurityCredentials");
var _setS3MultipartState2 = /* @__PURE__ */ _classPrivateFieldLooseKey15("setS3MultipartState");
var _getFile2 = /* @__PURE__ */ _classPrivateFieldLooseKey15("getFile");
var _uploadLocalFile = /* @__PURE__ */ _classPrivateFieldLooseKey15("uploadLocalFile");
var _getCompanionClientArgs = /* @__PURE__ */ _classPrivateFieldLooseKey15("getCompanionClientArgs");
var _upload = /* @__PURE__ */ _classPrivateFieldLooseKey15("upload");
var _setCompanionHeaders = /* @__PURE__ */ _classPrivateFieldLooseKey15("setCompanionHeaders");
var _setResumableUploadsCapability = /* @__PURE__ */ _classPrivateFieldLooseKey15("setResumableUploadsCapability");
var _resetResumableCapability = /* @__PURE__ */ _classPrivateFieldLooseKey15("resetResumableCapability");
_Symbol$for6 = Symbol.for("uppy test: getClient");
var AwsS3Multipart = class _AwsS3Multipart extends BasePlugin {
  constructor(uppy, opts) {
    var _rateLimitedQueue;
    super(uppy, {
      ...defaultOptions8,
      uploadPartBytes: _AwsS3Multipart.uploadPartBytes,
      createMultipartUpload: null,
      listParts: null,
      abortMultipartUpload: null,
      completeMultipartUpload: null,
      signPart: null,
      getUploadParameters: null,
      ...opts
    });
    Object.defineProperty(this, _getCompanionClientArgs, {
      value: _getCompanionClientArgs2
    });
    Object.defineProperty(this, _uploadLocalFile, {
      value: _uploadLocalFile2
    });
    Object.defineProperty(this, _getTemporarySecurityCredentials, {
      value: _getTemporarySecurityCredentials2
    });
    Object.defineProperty(this, _companionCommunicationQueue, {
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, _client, {
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, _cachedTemporaryCredentials, {
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, _setS3MultipartState2, {
      writable: true,
      value: (file, _ref2) => {
        let {
          key,
          uploadId
        } = _ref2;
        const cFile = this.uppy.getFile(file.id);
        if (cFile == null) {
          return;
        }
        this.uppy.setFileState(file.id, {
          s3Multipart: {
            ...cFile.s3Multipart,
            key,
            uploadId
          }
        });
      }
    });
    Object.defineProperty(this, _getFile2, {
      writable: true,
      value: (file) => {
        return this.uppy.getFile(file.id) || file;
      }
    });
    Object.defineProperty(this, _upload, {
      writable: true,
      value: async (fileIDs) => {
        if (fileIDs.length === 0) return void 0;
        const files = this.uppy.getFilesByIds(fileIDs);
        const filesFiltered = filterNonFailedFiles(files);
        const filesToEmit = filterFilesToEmitUploadStarted(filesFiltered);
        this.uppy.emit("upload-start", filesToEmit);
        const promises = filesFiltered.map((file) => {
          if (file.isRemote) {
            const getQueue = () => this.requests;
            _classPrivateFieldLooseBase15(this, _setResumableUploadsCapability)[_setResumableUploadsCapability](false);
            const controller = new AbortController();
            const removedHandler = (removedFile) => {
              if (removedFile.id === file.id) controller.abort();
            };
            this.uppy.on("file-removed", removedHandler);
            const uploadPromise = this.uppy.getRequestClientForFile(file).uploadRemoteFile(file, _classPrivateFieldLooseBase15(this, _getCompanionClientArgs)[_getCompanionClientArgs](file), {
              signal: controller.signal,
              getQueue
            });
            this.requests.wrapSyncFunction(() => {
              this.uppy.off("file-removed", removedHandler);
            }, {
              priority: -1
            })();
            return uploadPromise;
          }
          return _classPrivateFieldLooseBase15(this, _uploadLocalFile)[_uploadLocalFile](file);
        });
        const upload = await Promise.all(promises);
        _classPrivateFieldLooseBase15(this, _setResumableUploadsCapability)[_setResumableUploadsCapability](true);
        return upload;
      }
    });
    Object.defineProperty(this, _setCompanionHeaders, {
      writable: true,
      value: () => {
        _classPrivateFieldLooseBase15(this, _client)[_client].setCompanionHeaders(this.opts.companionHeaders);
      }
    });
    Object.defineProperty(this, _setResumableUploadsCapability, {
      writable: true,
      value: (boolean) => {
        const {
          capabilities
        } = this.uppy.getState();
        this.uppy.setState({
          capabilities: {
            ...capabilities,
            resumableUploads: boolean
          }
        });
      }
    });
    Object.defineProperty(this, _resetResumableCapability, {
      writable: true,
      value: () => {
        _classPrivateFieldLooseBase15(this, _setResumableUploadsCapability)[_setResumableUploadsCapability](true);
      }
    });
    this.type = "uploader";
    this.id = this.opts.id || "AwsS3Multipart";
    this.title = "AWS S3 Multipart";
    _classPrivateFieldLooseBase15(this, _client)[_client] = new RequestClient(uppy, opts);
    const dynamicDefaultOptions = {
      createMultipartUpload: this.createMultipartUpload,
      listParts: this.listParts,
      abortMultipartUpload: this.abortMultipartUpload,
      completeMultipartUpload: this.completeMultipartUpload,
      signPart: opts != null && opts.getTemporarySecurityCredentials ? this.createSignedURL : this.signPart,
      getUploadParameters: opts != null && opts.getTemporarySecurityCredentials ? this.createSignedURL : this.getUploadParameters
    };
    for (const key of Object.keys(dynamicDefaultOptions)) {
      if (this.opts[key] == null) {
        this.opts[key] = dynamicDefaultOptions[key].bind(this);
      }
    }
    if ((opts == null ? void 0 : opts.prepareUploadParts) != null && opts.signPart == null) {
      this.opts.signPart = async (file, _ref3) => {
        let {
          uploadId,
          key,
          partNumber,
          body,
          signal
        } = _ref3;
        const {
          presignedUrls,
          headers
        } = await opts.prepareUploadParts(file, {
          uploadId,
          key,
          parts: [{
            number: partNumber,
            chunk: body
          }],
          signal
        });
        return {
          url: presignedUrls == null ? void 0 : presignedUrls[partNumber],
          headers: headers == null ? void 0 : headers[partNumber]
        };
      };
    }
    this.requests = (_rateLimitedQueue = this.opts.rateLimitedQueue) != null ? _rateLimitedQueue : new RateLimitedQueue(this.opts.limit);
    _classPrivateFieldLooseBase15(this, _companionCommunicationQueue)[_companionCommunicationQueue] = new HTTPCommunicationQueue(this.requests, this.opts, _classPrivateFieldLooseBase15(this, _setS3MultipartState2)[_setS3MultipartState2], _classPrivateFieldLooseBase15(this, _getFile2)[_getFile2]);
    this.uploaders = /* @__PURE__ */ Object.create(null);
    this.uploaderEvents = /* @__PURE__ */ Object.create(null);
    this.uploaderSockets = /* @__PURE__ */ Object.create(null);
  }
  [_Symbol$for6]() {
    return _classPrivateFieldLooseBase15(this, _client)[_client];
  }
  setOptions(newOptions) {
    _classPrivateFieldLooseBase15(this, _companionCommunicationQueue)[_companionCommunicationQueue].setOptions(newOptions);
    super.setOptions(newOptions);
    _classPrivateFieldLooseBase15(this, _setCompanionHeaders)[_setCompanionHeaders]();
  }
  /**
   * Clean up all references for a file's upload: the MultipartUploader instance,
   * any events related to the file, and the Companion WebSocket connection.
   *
   * Set `opts.abort` to tell S3 that the multipart upload is cancelled and must be removed.
   * This should be done when the user cancels the upload, not when the upload is completed or errored.
   */
  resetUploaderReferences(fileID, opts) {
    if (this.uploaders[fileID]) {
      this.uploaders[fileID].abort({
        really: (opts == null ? void 0 : opts.abort) || false
      });
      this.uploaders[fileID] = null;
    }
    if (this.uploaderEvents[fileID]) {
      this.uploaderEvents[fileID].remove();
      this.uploaderEvents[fileID] = null;
    }
    if (this.uploaderSockets[fileID]) {
      this.uploaderSockets[fileID].close();
      this.uploaderSockets[fileID] = null;
    }
  }
  // TODO: make this a private method in the next major
  assertHost(method) {
    if (!this.opts.companionUrl) {
      throw new Error(`Expected a \`companionUrl\` option containing a Companion address, or if you are not using Companion, a custom \`${method}\` implementation.`);
    }
  }
  createMultipartUpload(file, signal) {
    this.assertHost("createMultipartUpload");
    throwIfAborted(signal);
    const metadata = getAllowedMetadata({
      meta: file.meta,
      allowedMetaFields: this.opts.allowedMetaFields
    });
    return _classPrivateFieldLooseBase15(this, _client)[_client].post("s3/multipart", {
      filename: file.name,
      type: file.type,
      metadata
    }, {
      signal
    }).then(assertServerError);
  }
  listParts(file, _ref4, oldSignal) {
    var _signal;
    let {
      key,
      uploadId,
      signal
    } = _ref4;
    (_signal = signal) != null ? _signal : signal = oldSignal;
    this.assertHost("listParts");
    throwIfAborted(signal);
    const filename = encodeURIComponent(key);
    return _classPrivateFieldLooseBase15(this, _client)[_client].get(`s3/multipart/${uploadId}?key=${filename}`, {
      signal
    }).then(assertServerError);
  }
  completeMultipartUpload(file, _ref5, oldSignal) {
    var _signal2;
    let {
      key,
      uploadId,
      parts,
      signal
    } = _ref5;
    (_signal2 = signal) != null ? _signal2 : signal = oldSignal;
    this.assertHost("completeMultipartUpload");
    throwIfAborted(signal);
    const filename = encodeURIComponent(key);
    const uploadIdEnc = encodeURIComponent(uploadId);
    return _classPrivateFieldLooseBase15(this, _client)[_client].post(`s3/multipart/${uploadIdEnc}/complete?key=${filename}`, {
      parts
    }, {
      signal
    }).then(assertServerError);
  }
  async createSignedURL(file, options) {
    const data = await _classPrivateFieldLooseBase15(this, _getTemporarySecurityCredentials)[_getTemporarySecurityCredentials](options);
    const expires = getExpiry(data.credentials) || 604800;
    const {
      uploadId,
      key,
      partNumber
    } = options;
    return {
      method: "PUT",
      expires,
      fields: {},
      url: `${await createSignedURL({
        accountKey: data.credentials.AccessKeyId,
        accountSecret: data.credentials.SecretAccessKey,
        sessionToken: data.credentials.SessionToken,
        expires,
        bucketName: data.bucket,
        Region: data.region,
        Key: key != null ? key : `${crypto.randomUUID()}-${file.name}`,
        uploadId,
        partNumber
      })}`,
      // Provide content type header required by S3
      headers: {
        "Content-Type": file.type
      }
    };
  }
  signPart(file, _ref6) {
    let {
      uploadId,
      key,
      partNumber,
      signal
    } = _ref6;
    this.assertHost("signPart");
    throwIfAborted(signal);
    if (uploadId == null || key == null || partNumber == null) {
      throw new Error("Cannot sign without a key, an uploadId, and a partNumber");
    }
    const filename = encodeURIComponent(key);
    return _classPrivateFieldLooseBase15(this, _client)[_client].get(`s3/multipart/${uploadId}/${partNumber}?key=${filename}`, {
      signal
    }).then(assertServerError);
  }
  abortMultipartUpload(file, _ref7, oldSignal) {
    var _signal3;
    let {
      key,
      uploadId,
      signal
    } = _ref7;
    (_signal3 = signal) != null ? _signal3 : signal = oldSignal;
    this.assertHost("abortMultipartUpload");
    const filename = encodeURIComponent(key);
    const uploadIdEnc = encodeURIComponent(uploadId);
    return _classPrivateFieldLooseBase15(this, _client)[_client].delete(`s3/multipart/${uploadIdEnc}?key=${filename}`, void 0, {
      signal
    }).then(assertServerError);
  }
  getUploadParameters(file, options) {
    const {
      meta
    } = file;
    const {
      type,
      name: filename
    } = meta;
    const metadata = getAllowedMetadata({
      meta,
      allowedMetaFields: this.opts.allowedMetaFields,
      querify: true
    });
    const query = new URLSearchParams({
      filename,
      type,
      ...metadata
    });
    return _classPrivateFieldLooseBase15(this, _client)[_client].get(`s3/params?${query}`, options);
  }
  static async uploadPartBytes(_ref8) {
    let {
      signature: {
        url,
        expires,
        headers,
        method = "PUT"
      },
      body,
      size = body.size,
      onProgress,
      onComplete,
      signal
    } = _ref8;
    throwIfAborted(signal);
    if (url == null) {
      throw new Error("Cannot upload to an undefined URL");
    }
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open(method, url, true);
      if (headers) {
        Object.keys(headers).forEach((key) => {
          xhr.setRequestHeader(key, headers[key]);
        });
      }
      xhr.responseType = "text";
      if (typeof expires === "number") {
        xhr.timeout = expires * 1e3;
      }
      function onabort() {
        xhr.abort();
      }
      function cleanup() {
        signal == null || signal.removeEventListener("abort", onabort);
      }
      signal == null || signal.addEventListener("abort", onabort);
      xhr.upload.addEventListener("progress", (ev) => {
        onProgress(ev);
      });
      xhr.addEventListener("abort", () => {
        cleanup();
        reject(createAbortError());
      });
      xhr.addEventListener("timeout", () => {
        cleanup();
        const error = new Error("Request has expired");
        error.source = {
          status: 403
        };
        reject(error);
      });
      xhr.addEventListener("load", () => {
        cleanup();
        if (xhr.status === 403 && xhr.responseText.includes("<Message>Request has expired</Message>")) {
          const error = new Error("Request has expired");
          error.source = xhr;
          reject(error);
          return;
        }
        if (xhr.status < 200 || xhr.status >= 300) {
          const error = new Error("Non 2xx");
          error.source = xhr;
          reject(error);
          return;
        }
        onProgress == null || onProgress({
          loaded: size,
          lengthComputable: true
        });
        const arr = xhr.getAllResponseHeaders().trim().split(/[\r\n]+/);
        const headersMap = {
          __proto__: null
        };
        for (const line of arr) {
          const parts = line.split(": ");
          const header = parts.shift();
          const value = parts.join(": ");
          headersMap[header] = value;
        }
        const {
          etag,
          location: location2
        } = headersMap;
        if (method.toUpperCase() === "POST" && location2 === null) {
          console.warn("AwsS3/Multipart: Could not read the Location header. This likely means CORS is not configured correctly on the S3 Bucket. See https://uppy.io/docs/aws-s3-multipart#S3-Bucket-Configuration for instructions.");
        }
        if (etag === null) {
          reject(new Error("AwsS3/Multipart: Could not read the ETag header. This likely means CORS is not configured correctly on the S3 Bucket. See https://uppy.io/docs/aws-s3-multipart#S3-Bucket-Configuration for instructions."));
          return;
        }
        onComplete == null || onComplete(etag);
        resolve({
          ...headersMap,
          ETag: etag
          // keep capitalised ETag for backwards compatiblity
        });
      });
      xhr.addEventListener("error", (ev) => {
        cleanup();
        const error = new Error("Unknown error");
        error.source = ev.target;
        reject(error);
      });
      xhr.send(body);
    });
  }
  install() {
    _classPrivateFieldLooseBase15(this, _setResumableUploadsCapability)[_setResumableUploadsCapability](true);
    this.uppy.addPreProcessor(_classPrivateFieldLooseBase15(this, _setCompanionHeaders)[_setCompanionHeaders]);
    this.uppy.addUploader(_classPrivateFieldLooseBase15(this, _upload)[_upload]);
    this.uppy.on("cancel-all", _classPrivateFieldLooseBase15(this, _resetResumableCapability)[_resetResumableCapability]);
  }
  uninstall() {
    this.uppy.removePreProcessor(_classPrivateFieldLooseBase15(this, _setCompanionHeaders)[_setCompanionHeaders]);
    this.uppy.removeUploader(_classPrivateFieldLooseBase15(this, _upload)[_upload]);
    this.uppy.off("cancel-all", _classPrivateFieldLooseBase15(this, _resetResumableCapability)[_resetResumableCapability]);
  }
};
async function _getTemporarySecurityCredentials2(options) {
  throwIfAborted(options == null ? void 0 : options.signal);
  if (_classPrivateFieldLooseBase15(this, _cachedTemporaryCredentials)[_cachedTemporaryCredentials] == null) {
    if (this.opts.getTemporarySecurityCredentials === true) {
      this.assertHost("getTemporarySecurityCredentials");
      _classPrivateFieldLooseBase15(this, _cachedTemporaryCredentials)[_cachedTemporaryCredentials] = _classPrivateFieldLooseBase15(this, _client)[_client].get("s3/sts", options).then(assertServerError);
    } else {
      _classPrivateFieldLooseBase15(this, _cachedTemporaryCredentials)[_cachedTemporaryCredentials] = this.opts.getTemporarySecurityCredentials(options);
    }
    _classPrivateFieldLooseBase15(this, _cachedTemporaryCredentials)[_cachedTemporaryCredentials] = await _classPrivateFieldLooseBase15(this, _cachedTemporaryCredentials)[_cachedTemporaryCredentials];
    setTimeout(() => {
      _classPrivateFieldLooseBase15(this, _cachedTemporaryCredentials)[_cachedTemporaryCredentials] = null;
    }, (getExpiry(_classPrivateFieldLooseBase15(this, _cachedTemporaryCredentials)[_cachedTemporaryCredentials].credentials) || 0) * 500);
  }
  return _classPrivateFieldLooseBase15(this, _cachedTemporaryCredentials)[_cachedTemporaryCredentials];
}
function _uploadLocalFile2(file) {
  var _this = this;
  return new Promise((resolve, reject) => {
    const onProgress = (bytesUploaded, bytesTotal) => {
      this.uppy.emit("upload-progress", this.uppy.getFile(file.id), {
        // @ts-expect-error TODO: figure out if we need this
        uploader: this,
        bytesUploaded,
        bytesTotal
      });
    };
    const onError = (err) => {
      this.uppy.log(err);
      this.uppy.emit("upload-error", file, err);
      this.resetUploaderReferences(file.id);
      reject(err);
    };
    const onSuccess = (result) => {
      const uploadResp = {
        body: {
          ...result
        },
        status: 200,
        uploadURL: result.location
      };
      this.resetUploaderReferences(file.id);
      this.uppy.emit("upload-success", _classPrivateFieldLooseBase15(this, _getFile2)[_getFile2](file), uploadResp);
      if (result.location) {
        this.uppy.log(`Download ${file.name} from ${result.location}`);
      }
      resolve();
    };
    const upload = new MultipartUploader_default(file.data, {
      // .bind to pass the file object to each handler.
      companionComm: _classPrivateFieldLooseBase15(this, _companionCommunicationQueue)[_companionCommunicationQueue],
      log: function() {
        return _this.uppy.log(...arguments);
      },
      getChunkSize: this.opts.getChunkSize ? this.opts.getChunkSize.bind(this) : null,
      onProgress,
      onError,
      onSuccess,
      onPartComplete: (part) => {
        this.uppy.emit("s3-multipart:part-uploaded", _classPrivateFieldLooseBase15(this, _getFile2)[_getFile2](file), part);
      },
      file,
      shouldUseMultipart: this.opts.shouldUseMultipart,
      ...file.s3Multipart
    });
    this.uploaders[file.id] = upload;
    const eventManager = new EventManager(this.uppy);
    this.uploaderEvents[file.id] = eventManager;
    eventManager.onFileRemove(file.id, (removed) => {
      upload.abort();
      this.resetUploaderReferences(file.id, {
        abort: true
      });
      resolve(`upload ${removed} was removed`);
    });
    eventManager.onCancelAll(file.id, (options) => {
      if ((options == null ? void 0 : options.reason) === "user") {
        upload.abort();
        this.resetUploaderReferences(file.id, {
          abort: true
        });
      }
      resolve(`upload ${file.id} was canceled`);
    });
    eventManager.onFilePause(file.id, (isPaused) => {
      if (isPaused) {
        upload.pause();
      } else {
        upload.start();
      }
    });
    eventManager.onPauseAll(file.id, () => {
      upload.pause();
    });
    eventManager.onResumeAll(file.id, () => {
      upload.start();
    });
    upload.start();
  });
}
function _getCompanionClientArgs2(file) {
  var _file$remote;
  return {
    ...(_file$remote = file.remote) == null ? void 0 : _file$remote.body,
    protocol: "s3-multipart",
    size: file.data.size,
    metadata: file.meta
  };
}
AwsS3Multipart.VERSION = packageJson10.version;

// node_modules/@uppy/utils/lib/EventManager.js
function _classPrivateFieldLooseBase16(receiver, privateKey) {
  if (!Object.prototype.hasOwnProperty.call(receiver, privateKey)) {
    throw new TypeError("attempted to use private field on non-instance");
  }
  return receiver;
}
var id16 = 0;
function _classPrivateFieldLooseKey16(name) {
  return "__private_" + id16++ + "_" + name;
}
var _uppy2 = /* @__PURE__ */ _classPrivateFieldLooseKey16("uppy");
var _events2 = /* @__PURE__ */ _classPrivateFieldLooseKey16("events");
var EventManager2 = class {
  constructor(uppy) {
    Object.defineProperty(this, _uppy2, {
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, _events2, {
      writable: true,
      value: []
    });
    _classPrivateFieldLooseBase16(this, _uppy2)[_uppy2] = uppy;
  }
  on(event, fn) {
    _classPrivateFieldLooseBase16(this, _events2)[_events2].push([event, fn]);
    return _classPrivateFieldLooseBase16(this, _uppy2)[_uppy2].on(event, fn);
  }
  remove() {
    for (const [event, fn] of _classPrivateFieldLooseBase16(this, _events2)[_events2].splice(0)) {
      _classPrivateFieldLooseBase16(this, _uppy2)[_uppy2].off(event, fn);
    }
  }
  onFilePause(fileID, cb) {
    this.on("upload-pause", (targetFileID, isPaused) => {
      if (fileID === targetFileID) {
        cb(isPaused);
      }
    });
  }
  onFileRemove(fileID, cb) {
    this.on("file-removed", (file) => {
      if (fileID === file.id) cb(file.id);
    });
  }
  onPause(fileID, cb) {
    this.on("upload-pause", (targetFileID, isPaused) => {
      if (fileID === targetFileID) {
        cb(isPaused);
      }
    });
  }
  onRetry(fileID, cb) {
    this.on("upload-retry", (targetFileID) => {
      if (fileID === targetFileID) {
        cb();
      }
    });
  }
  onRetryAll(fileID, cb) {
    this.on("retry-all", () => {
      if (!_classPrivateFieldLooseBase16(this, _uppy2)[_uppy2].getFile(fileID)) return;
      cb();
    });
  }
  onPauseAll(fileID, cb) {
    this.on("pause-all", () => {
      if (!_classPrivateFieldLooseBase16(this, _uppy2)[_uppy2].getFile(fileID)) return;
      cb();
    });
  }
  onCancelAll(fileID, eventHandler) {
    var _this = this;
    this.on("cancel-all", function() {
      if (!_classPrivateFieldLooseBase16(_this, _uppy2)[_uppy2].getFile(fileID)) return;
      eventHandler(...arguments);
    });
  }
  onResumeAll(fileID, cb) {
    this.on("resume-all", () => {
      if (!_classPrivateFieldLooseBase16(this, _uppy2)[_uppy2].getFile(fileID)) return;
      cb();
    });
  }
};

// node_modules/@uppy/utils/lib/ProgressTimeout.js
function _classPrivateFieldLooseBase17(receiver, privateKey) {
  if (!Object.prototype.hasOwnProperty.call(receiver, privateKey)) {
    throw new TypeError("attempted to use private field on non-instance");
  }
  return receiver;
}
var id17 = 0;
function _classPrivateFieldLooseKey17(name) {
  return "__private_" + id17++ + "_" + name;
}
var _aliveTimer = /* @__PURE__ */ _classPrivateFieldLooseKey17("aliveTimer");
var _isDone = /* @__PURE__ */ _classPrivateFieldLooseKey17("isDone");
var _onTimedOut = /* @__PURE__ */ _classPrivateFieldLooseKey17("onTimedOut");
var _timeout = /* @__PURE__ */ _classPrivateFieldLooseKey17("timeout");
var ProgressTimeout = class {
  constructor(timeout, timeoutHandler) {
    Object.defineProperty(this, _aliveTimer, {
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, _isDone, {
      writable: true,
      value: false
    });
    Object.defineProperty(this, _onTimedOut, {
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, _timeout, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldLooseBase17(this, _timeout)[_timeout] = timeout;
    _classPrivateFieldLooseBase17(this, _onTimedOut)[_onTimedOut] = () => timeoutHandler(timeout);
  }
  progress() {
    if (_classPrivateFieldLooseBase17(this, _isDone)[_isDone]) return;
    if (_classPrivateFieldLooseBase17(this, _timeout)[_timeout] > 0) {
      clearTimeout(_classPrivateFieldLooseBase17(this, _aliveTimer)[_aliveTimer]);
      _classPrivateFieldLooseBase17(this, _aliveTimer)[_aliveTimer] = setTimeout(_classPrivateFieldLooseBase17(this, _onTimedOut)[_onTimedOut], _classPrivateFieldLooseBase17(this, _timeout)[_timeout]);
    }
  }
  done() {
    if (!_classPrivateFieldLooseBase17(this, _isDone)[_isDone]) {
      clearTimeout(_classPrivateFieldLooseBase17(this, _aliveTimer)[_aliveTimer]);
      _classPrivateFieldLooseBase17(this, _aliveTimer)[_aliveTimer] = void 0;
      _classPrivateFieldLooseBase17(this, _isDone)[_isDone] = true;
    }
  }
};
var ProgressTimeout_default = ProgressTimeout;

// node_modules/@uppy/utils/lib/isNetworkError.js
function isNetworkError2(xhr) {
  if (!xhr) {
    return false;
  }
  return xhr.readyState !== 0 && xhr.readyState !== 4 || xhr.status === 0;
}
var isNetworkError_default = isNetworkError2;

// node_modules/@uppy/aws-s3/lib/MiniXHRUpload.js
function _classPrivateFieldLooseBase18(receiver, privateKey) {
  if (!Object.prototype.hasOwnProperty.call(receiver, privateKey)) {
    throw new TypeError("attempted to use private field on non-instance");
  }
  return receiver;
}
var id18 = 0;
function _classPrivateFieldLooseKey18(name) {
  return "__private_" + id18++ + "_" + name;
}
function buildResponseError(xhr, error) {
  if (isNetworkError_default(xhr)) return new NetworkError_default(error, xhr);
  const err = new ErrorWithCause_default("Upload error", {
    cause: error
  });
  err.request = xhr;
  return err;
}
function setTypeInBlob(file) {
  const dataWithUpdatedType = file.data.slice(0, file.data.size, file.meta.type);
  return dataWithUpdatedType;
}
function addMetadata(formData, meta, opts) {
  const allowedMetaFields = Array.isArray(opts.allowedMetaFields) ? opts.allowedMetaFields : Object.keys(meta);
  allowedMetaFields.forEach((item) => {
    formData.append(item, meta[item]);
  });
}
function createFormDataUpload(file, opts) {
  const formPost = new FormData();
  addMetadata(formPost, file.meta, opts);
  const dataWithUpdatedType = setTypeInBlob(file);
  if (file.name) {
    formPost.append(opts.fieldName, dataWithUpdatedType, file.meta.name);
  } else {
    formPost.append(opts.fieldName, dataWithUpdatedType);
  }
  return formPost;
}
var createBareUpload = (file) => file.data;
var _addEventHandlerForFile = /* @__PURE__ */ _classPrivateFieldLooseKey18("addEventHandlerForFile");
var _addEventHandlerIfFileStillExists = /* @__PURE__ */ _classPrivateFieldLooseKey18("addEventHandlerIfFileStillExists");
var MiniXHRUpload = class {
  constructor(uppy, opts) {
    Object.defineProperty(this, _addEventHandlerIfFileStillExists, {
      value: _addEventHandlerIfFileStillExists2
    });
    Object.defineProperty(this, _addEventHandlerForFile, {
      value: _addEventHandlerForFile2
    });
    this.uppy = uppy;
    this.opts = {
      validateStatus(status) {
        return status >= 200 && status < 300;
      },
      ...opts
    };
    this.requests = opts[internalRateLimitedQueue];
    this.uploaderEvents = /* @__PURE__ */ Object.create(null);
    this.i18n = opts.i18n;
  }
  getOptions(file) {
    var _file$xhrUpload;
    const {
      uppy
    } = this;
    const overrides = uppy.getState().xhrUpload;
    const opts = {
      ...this.opts,
      ...overrides || {},
      ...file.xhrUpload || {},
      headers: {
        ...this.opts.headers,
        ...overrides == null ? void 0 : overrides.headers,
        ...(_file$xhrUpload = file.xhrUpload) == null ? void 0 : _file$xhrUpload.headers
      }
    };
    return opts;
  }
  uploadLocalFile(file) {
    const opts = this.getOptions(file);
    return new Promise((resolve, reject) => {
      const data = opts.formData ? createFormDataUpload(file, opts) : createBareUpload(file, opts);
      const xhr = new XMLHttpRequest();
      this.uploaderEvents[file.id] = new EventManager2(this.uppy);
      const timer = new ProgressTimeout_default(opts.timeout, () => {
        xhr.abort();
        queuedRequest.done();
        const error = new Error(this.i18n("timedOut", {
          seconds: Math.ceil(opts.timeout / 1e3)
        }));
        this.uppy.emit("upload-error", file, error);
        reject(error);
      });
      const id20 = nanoid();
      xhr.upload.addEventListener("loadstart", () => {
        this.uppy.log(`[AwsS3/XHRUpload] ${id20} started`);
      });
      xhr.upload.addEventListener("progress", (ev) => {
        this.uppy.log(`[AwsS3/XHRUpload] ${id20} progress: ${ev.loaded} / ${ev.total}`);
        timer.progress();
        if (ev.lengthComputable) {
          this.uppy.emit("upload-progress", this.uppy.getFile(file.id), {
            uploader: this,
            bytesUploaded: ev.loaded,
            bytesTotal: ev.total
          });
        }
      });
      xhr.addEventListener("load", (ev) => {
        this.uppy.log(`[AwsS3/XHRUpload] ${id20} finished`);
        timer.done();
        queuedRequest.done();
        if (this.uploaderEvents[file.id]) {
          this.uploaderEvents[file.id].remove();
          this.uploaderEvents[file.id] = null;
        }
        if (opts.validateStatus(ev.target.status, xhr.responseText, xhr)) {
          const body2 = opts.getResponseData(xhr.responseText, xhr);
          const uploadURL = body2[opts.responseUrlFieldName];
          const uploadResp = {
            status: ev.target.status,
            body: body2,
            uploadURL
          };
          this.uppy.emit("upload-success", this.uppy.getFile(file.id), uploadResp);
          if (uploadURL) {
            this.uppy.log(`Download ${file.name} from ${uploadURL}`);
          }
          return resolve(file);
        }
        const body = opts.getResponseData(xhr.responseText, xhr);
        const error = buildResponseError(xhr, opts.getResponseError(xhr.responseText, xhr));
        const response = {
          status: ev.target.status,
          body
        };
        this.uppy.emit("upload-error", file, error, response);
        return reject(error);
      });
      xhr.addEventListener("error", () => {
        this.uppy.log(`[AwsS3/XHRUpload] ${id20} errored`);
        timer.done();
        queuedRequest.done();
        if (this.uploaderEvents[file.id]) {
          this.uploaderEvents[file.id].remove();
          this.uploaderEvents[file.id] = null;
        }
        const error = buildResponseError(xhr, opts.getResponseError(xhr.responseText, xhr));
        this.uppy.emit("upload-error", file, error);
        return reject(error);
      });
      xhr.open(opts.method.toUpperCase(), opts.endpoint, true);
      xhr.withCredentials = Boolean(opts.withCredentials);
      if (opts.responseType !== "") {
        xhr.responseType = opts.responseType;
      }
      Object.keys(opts.headers).forEach((header) => {
        xhr.setRequestHeader(header, opts.headers[header]);
      });
      const queuedRequest = this.requests.run(() => {
        xhr.send(data);
        return () => {
          timer.done();
          xhr.abort();
        };
      }, {
        priority: 1
      });
      _classPrivateFieldLooseBase18(this, _addEventHandlerForFile)[_addEventHandlerForFile]("file-removed", file.id, () => {
        queuedRequest.abort();
        reject(new Error("File removed"));
      });
      _classPrivateFieldLooseBase18(this, _addEventHandlerIfFileStillExists)[_addEventHandlerIfFileStillExists]("cancel-all", file.id, function(_temp) {
        let {
          reason
        } = _temp === void 0 ? {} : _temp;
        if (reason === "user") {
          queuedRequest.abort();
        }
        reject(new Error("Upload cancelled"));
      });
    });
  }
};
function _addEventHandlerForFile2(eventName, fileID, eventHandler) {
  this.uploaderEvents[fileID].on(eventName, (fileOrID) => {
    var _fileOrID$id;
    const id20 = (_fileOrID$id = fileOrID == null ? void 0 : fileOrID.id) != null ? _fileOrID$id : fileOrID;
    if (fileID === id20) eventHandler();
  });
}
function _addEventHandlerIfFileStillExists2(eventName, fileID, eventHandler) {
  var _this = this;
  this.uploaderEvents[fileID].on(eventName, function() {
    if (_this.uppy.getFile(fileID)) eventHandler(...arguments);
  });
}

// node_modules/@uppy/aws-s3/lib/isXml.js
function removeMimeParameters(mimeType) {
  return mimeType.replace(/;.*$/, "");
}
function isXml(content, xhr) {
  const rawContentType = xhr.headers ? xhr.headers["content-type"] : xhr.getResponseHeader("Content-Type");
  if (typeof rawContentType === "string") {
    const contentType = removeMimeParameters(rawContentType).toLowerCase();
    if (contentType === "application/xml" || contentType === "text/xml") {
      return true;
    }
    if (contentType === "text/html" && /^<\?xml /.test(content)) {
      return true;
    }
  }
  return false;
}
var isXml_default = isXml;

// node_modules/@uppy/aws-s3/lib/locale.js
var locale_default5 = {
  strings: {
    timedOut: "Upload stalled for %{seconds} seconds, aborting."
  }
};

// node_modules/@uppy/aws-s3/lib/index.js
var _Symbol$for7;
function _classPrivateFieldLooseBase19(receiver, privateKey) {
  if (!Object.prototype.hasOwnProperty.call(receiver, privateKey)) {
    throw new TypeError("attempted to use private field on non-instance");
  }
  return receiver;
}
var id19 = 0;
function _classPrivateFieldLooseKey19(name) {
  return "__private_" + id19++ + "_" + name;
}
var packageJson11 = {
  "version": "3.6.2"
};
function resolveUrl(origin, link) {
  if (!origin && !link.startsWith("https://") && !link.startsWith("http://")) {
    link = `https://${link}`;
  }
  return new URL(link, origin || void 0).toString();
}
function getXmlValue(source, tagName) {
  const start = source.indexOf(`<${tagName}>`);
  const end = source.indexOf(`</${tagName}>`, start);
  return start !== -1 && end !== -1 ? source.slice(start + tagName.length + 2, end) : "";
}
function assertServerError2(res) {
  if (res && res.error) {
    const error = new Error(res.message);
    Object.assign(error, res.error);
    throw error;
  }
  return res;
}
function validateParameters(file, params) {
  const valid = params != null && typeof params.url === "string" && (typeof params.fields === "object" || params.fields == null);
  if (!valid) {
    const err = new TypeError(`AwsS3: got incorrect result from 'getUploadParameters()' for file '${file.name}', expected an object '{ url, method, fields, headers }' but got '${JSON.stringify(params)}' instead.
See https://uppy.io/docs/aws-s3/#getUploadParameters-file for more on the expected format.`);
    throw err;
  }
  const methodIsValid = params.method == null || /^p(u|os)t$/i.test(params.method);
  if (!methodIsValid) {
    const err = new TypeError(`AwsS3: got incorrect method from 'getUploadParameters()' for file '${file.name}', expected  'PUT' or 'POST' but got '${params.method}' instead.
See https://uppy.io/docs/aws-s3/#getUploadParameters-file for more on the expected format.`);
    throw err;
  }
}
function defaultGetResponseError(content, xhr) {
  if (!isXml_default(content, xhr)) {
    return void 0;
  }
  const error = getXmlValue(content, "Message");
  return new Error(error);
}
var warnedSuccessActionStatus = false;
var _client2 = /* @__PURE__ */ _classPrivateFieldLooseKey19("client");
var _requests2 = /* @__PURE__ */ _classPrivateFieldLooseKey19("requests");
var _uploader = /* @__PURE__ */ _classPrivateFieldLooseKey19("uploader");
var _handleUpload = /* @__PURE__ */ _classPrivateFieldLooseKey19("handleUpload");
var _setCompanionHeaders2 = /* @__PURE__ */ _classPrivateFieldLooseKey19("setCompanionHeaders");
var _getCompanionClientArgs3 = /* @__PURE__ */ _classPrivateFieldLooseKey19("getCompanionClientArgs");
_Symbol$for7 = Symbol.for("uppy test: getClient");
var AwsS3 = class extends BasePlugin {
  constructor(uppy, _opts) {
    if ((_opts == null ? void 0 : _opts.shouldUseMultipart) != null) {
      return new AwsS3Multipart(uppy, _opts);
    }
    super(uppy, _opts);
    Object.defineProperty(this, _client2, {
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, _requests2, {
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, _uploader, {
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, _handleUpload, {
      writable: true,
      value: async (fileIDs) => {
        const paramsPromises = /* @__PURE__ */ Object.create(null);
        function onremove(file) {
          var _paramsPromises$id;
          const {
            id: id20
          } = file;
          (_paramsPromises$id = paramsPromises[id20]) == null || _paramsPromises$id.abort();
        }
        this.uppy.on("file-removed", onremove);
        const files = this.uppy.getFilesByIds(fileIDs);
        const filesFiltered = filterNonFailedFiles(files);
        const filesToEmit = filterFilesToEmitUploadStarted(filesFiltered);
        this.uppy.emit("upload-start", filesToEmit);
        const getUploadParameters = _classPrivateFieldLooseBase19(this, _requests2)[_requests2].wrapPromiseFunction((file) => {
          return this.opts.getUploadParameters(file);
        });
        const numberOfFiles = fileIDs.length;
        return Promise.allSettled(fileIDs.map((id20, index) => {
          paramsPromises[id20] = getUploadParameters(this.uppy.getFile(id20));
          return paramsPromises[id20].then((params) => {
            delete paramsPromises[id20];
            const file = this.uppy.getFile(id20);
            validateParameters(file, params);
            const {
              method = "POST",
              url,
              fields,
              headers
            } = params;
            const xhrOpts = {
              method,
              formData: method.toUpperCase() === "POST",
              endpoint: url,
              allowedMetaFields: fields ? Object.keys(fields) : []
            };
            if (headers) {
              xhrOpts.headers = headers;
            }
            this.uppy.setFileState(file.id, {
              meta: {
                ...file.meta,
                ...fields
              },
              xhrUpload: xhrOpts
            });
            return this.uploadFile(file.id, index, numberOfFiles);
          }).catch((error) => {
            delete paramsPromises[id20];
            const file = this.uppy.getFile(id20);
            this.uppy.emit("upload-error", file, error);
            return Promise.reject(error);
          });
        })).finally(() => {
          this.uppy.off("file-removed", onremove);
        });
      }
    });
    Object.defineProperty(this, _setCompanionHeaders2, {
      writable: true,
      value: () => {
        _classPrivateFieldLooseBase19(this, _client2)[_client2].setCompanionHeaders(this.opts.companionHeaders);
        return Promise.resolve();
      }
    });
    Object.defineProperty(this, _getCompanionClientArgs3, {
      writable: true,
      value: (file) => {
        const opts = _classPrivateFieldLooseBase19(this, _uploader)[_uploader].getOptions(file);
        const allowedMetaFields = Array.isArray(opts.allowedMetaFields) ? opts.allowedMetaFields : Object.keys(file.meta);
        return {
          ...file.remote.body,
          protocol: "multipart",
          endpoint: opts.endpoint,
          size: file.data.size,
          fieldname: opts.fieldName,
          metadata: Object.fromEntries(allowedMetaFields.map((name) => [name, file.meta[name]])),
          httpMethod: opts.method,
          useFormData: opts.formData,
          headers: typeof opts.headers === "function" ? opts.headers(file) : opts.headers
        };
      }
    });
    this.type = "uploader";
    this.id = this.opts.id || "AwsS3";
    this.title = "AWS S3";
    this.defaultLocale = locale_default5;
    const defaultOptions9 = {
      timeout: 30 * 1e3,
      limit: 0,
      allowedMetaFields: [],
      // have to opt in
      getUploadParameters: this.getUploadParameters.bind(this),
      shouldUseMultipart: false,
      companionHeaders: {}
    };
    this.opts = {
      ...defaultOptions9,
      ..._opts
    };
    if ((_opts == null ? void 0 : _opts.allowedMetaFields) === void 0 && "metaFields" in this.opts) {
      throw new Error("The `metaFields` option has been renamed to `allowedMetaFields`.");
    }
    this.i18nInit();
    _classPrivateFieldLooseBase19(this, _client2)[_client2] = new RequestClient(uppy, _opts);
    _classPrivateFieldLooseBase19(this, _requests2)[_requests2] = new RateLimitedQueue(this.opts.limit);
  }
  [_Symbol$for7]() {
    return _classPrivateFieldLooseBase19(this, _client2)[_client2];
  }
  // TODO: remove getter and setter for #client on the next major release
  get client() {
    return _classPrivateFieldLooseBase19(this, _client2)[_client2];
  }
  set client(client) {
    _classPrivateFieldLooseBase19(this, _client2)[_client2] = client;
  }
  getUploadParameters(file) {
    if (!this.opts.companionUrl) {
      throw new Error("Expected a `companionUrl` option containing a Companion address.");
    }
    const filename = file.meta.name;
    const {
      type
    } = file.meta;
    const metadata = Object.fromEntries(this.opts.allowedMetaFields.filter((key) => file.meta[key] != null).map((key) => [`metadata[${key}]`, file.meta[key].toString()]));
    const query = new URLSearchParams({
      filename,
      type,
      ...metadata
    });
    return _classPrivateFieldLooseBase19(this, _client2)[_client2].get(`s3/params?${query}`).then(assertServerError2);
  }
  uploadFile(id20, current, total) {
    const file = this.uppy.getFile(id20);
    this.uppy.log(`uploading ${current} of ${total}`);
    if (file.error) throw new Error(file.error);
    if (file.isRemote) {
      const getQueue = () => _classPrivateFieldLooseBase19(this, _requests2)[_requests2];
      const controller = new AbortController();
      const removedHandler = (removedFile) => {
        if (removedFile.id === file.id) controller.abort();
      };
      this.uppy.on("file-removed", removedHandler);
      const uploadPromise = this.uppy.getRequestClientForFile(file).uploadRemoteFile(file, _classPrivateFieldLooseBase19(this, _getCompanionClientArgs3)[_getCompanionClientArgs3](file), {
        signal: controller.signal,
        getQueue
      });
      _classPrivateFieldLooseBase19(this, _requests2)[_requests2].wrapSyncFunction(() => {
        this.uppy.off("file-removed", removedHandler);
      }, {
        priority: -1
      })();
      return uploadPromise;
    }
    return _classPrivateFieldLooseBase19(this, _uploader)[_uploader].uploadLocalFile(file, current, total);
  }
  install() {
    const {
      uppy
    } = this;
    uppy.addPreProcessor(_classPrivateFieldLooseBase19(this, _setCompanionHeaders2)[_setCompanionHeaders2]);
    uppy.addUploader(_classPrivateFieldLooseBase19(this, _handleUpload)[_handleUpload]);
    function defaultGetResponseData(content, xhr) {
      const opts = this;
      if (!isXml_default(content, xhr)) {
        if (opts.method.toUpperCase() === "POST") {
          if (!warnedSuccessActionStatus) {
            uppy.log("[AwsS3] No response data found, make sure to set the success_action_status AWS SDK option to 201. See https://uppy.io/docs/aws-s3/#POST-Uploads", "warning");
            warnedSuccessActionStatus = true;
          }
          return {
            location: null
          };
        }
        if (!xhr.responseURL) {
          return {
            location: null
          };
        }
        return {
          location: xhr.responseURL.replace(/\?.*$/, "")
        };
      }
      return {
        // Some S3 alternatives do not reply with an absolute URL.
        // Eg DigitalOcean Spaces uses /$bucketName/xyz
        location: resolveUrl(xhr.responseURL, getXmlValue(content, "Location")),
        bucket: getXmlValue(content, "Bucket"),
        key: getXmlValue(content, "Key"),
        etag: getXmlValue(content, "ETag")
      };
    }
    const xhrOptions = {
      fieldName: "file",
      responseUrlFieldName: "location",
      timeout: this.opts.timeout,
      // Share the rate limiting queue with XHRUpload.
      [internalRateLimitedQueue]: _classPrivateFieldLooseBase19(this, _requests2)[_requests2],
      responseType: "text",
      getResponseData: this.opts.getResponseData || defaultGetResponseData,
      getResponseError: defaultGetResponseError
    };
    xhrOptions.i18n = this.i18n;
    _classPrivateFieldLooseBase19(this, _uploader)[_uploader] = new MiniXHRUpload(uppy, xhrOptions);
  }
  uninstall() {
    this.uppy.removePreProcessor(_classPrivateFieldLooseBase19(this, _setCompanionHeaders2)[_setCompanionHeaders2]);
    this.uppy.removeUploader(_classPrivateFieldLooseBase19(this, _handleUpload)[_handleUpload]);
  }
};
AwsS3.VERSION = packageJson11.version;
export {
  AwsS3,
  Dashboard2 as Dashboard,
  Uppy_default as Uppy
};
/*! Bundled license information:

classnames/index.js:
  (*!
  	Copyright (c) 2018 Jed Watson.
  	Licensed under the MIT License (MIT), see
  	http://jedwatson.github.io/classnames
  *)

@uppy/utils/lib/Translator.js:
  (**
   * Takes a string with placeholder variables like `%{smart_count} file selected`
   * and replaces it with values from options `{smart_count: 5}`
   *
   * @license https://github.com/airbnb/polyglot.js/blob/master/LICENSE
   * taken from https://github.com/airbnb/polyglot.js/blob/master/lib/polyglot.js#L299
   *
   * @param phrase that needs interpolation, with placeholders
   * @param options with values that will be used to replace placeholders
   *)
*/
