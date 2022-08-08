var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var promise$7 = {exports: {}};

var promise$6 = {exports: {}};

var check = function (it) {
  return it && it.Math == Math && it;
}; // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028


var global$s = // eslint-disable-next-line es-x/no-global-this -- safe
check(typeof globalThis == 'object' && globalThis) || check(typeof window == 'object' && window) || // eslint-disable-next-line no-restricted-globals -- safe
check(typeof self == 'object' && self) || check(typeof commonjsGlobal == 'object' && commonjsGlobal) || // eslint-disable-next-line no-new-func -- fallback
function () {
  return this;
}() || Function('return this')();

var fails$y = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};

var fails$x = fails$y;

var functionBindNative = !fails$x(function () {
  // eslint-disable-next-line es-x/no-function-prototype-bind -- safe
  var test = function () {
    /* empty */
  }.bind(); // eslint-disable-next-line no-prototype-builtins -- safe


  return typeof test != 'function' || test.hasOwnProperty('prototype');
});

var NATIVE_BIND$4 = functionBindNative;

var FunctionPrototype$3 = Function.prototype;
var apply$7 = FunctionPrototype$3.apply;
var call$w = FunctionPrototype$3.call; // eslint-disable-next-line es-x/no-reflect -- safe

var functionApply = typeof Reflect == 'object' && Reflect.apply || (NATIVE_BIND$4 ? call$w.bind(apply$7) : function () {
  return call$w.apply(apply$7, arguments);
});

var NATIVE_BIND$3 = functionBindNative;

var FunctionPrototype$2 = Function.prototype;
var bind$t = FunctionPrototype$2.bind;
var call$v = FunctionPrototype$2.call;
var uncurryThis$x = NATIVE_BIND$3 && bind$t.bind(call$v, call$v);
var functionUncurryThis = NATIVE_BIND$3 ? function (fn) {
  return fn && uncurryThis$x(fn);
} : function (fn) {
  return fn && function () {
    return call$v.apply(fn, arguments);
  };
};

// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
var isCallable$n = function (argument) {
  return typeof argument == 'function';
};

var objectGetOwnPropertyDescriptor = {};

var fails$w = fails$y; // Detect IE8's incomplete defineProperty implementation


var descriptors = !fails$w(function () {
  // eslint-disable-next-line es-x/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, {
    get: function () {
      return 7;
    }
  })[1] != 7;
});

var NATIVE_BIND$2 = functionBindNative;

var call$u = Function.prototype.call;
var functionCall = NATIVE_BIND$2 ? call$u.bind(call$u) : function () {
  return call$u.apply(call$u, arguments);
};

var objectPropertyIsEnumerable = {};

var $propertyIsEnumerable$2 = {}.propertyIsEnumerable; // eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe

var getOwnPropertyDescriptor$b = Object.getOwnPropertyDescriptor; // Nashorn ~ JDK8 bug

var NASHORN_BUG = getOwnPropertyDescriptor$b && !$propertyIsEnumerable$2.call({
  1: 2
}, 1); // `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable

objectPropertyIsEnumerable.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor$b(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable$2;

var createPropertyDescriptor$8 = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

var uncurryThis$w = functionUncurryThis;

var toString$c = uncurryThis$w({}.toString);
var stringSlice$2 = uncurryThis$w(''.slice);

var classofRaw$1 = function (it) {
  return stringSlice$2(toString$c(it), 8, -1);
};

var uncurryThis$v = functionUncurryThis;

var fails$v = fails$y;

var classof$f = classofRaw$1;

var $Object$4 = Object;
var split$1 = uncurryThis$v(''.split); // fallback for non-array-like ES3 and non-enumerable old V8 strings

var indexedObject = fails$v(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !$Object$4('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof$f(it) == 'String' ? split$1(it, '') : $Object$4(it);
} : $Object$4;

var $TypeError$i = TypeError; // `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible

var requireObjectCoercible$6 = function (it) {
  if (it == undefined) throw $TypeError$i("Can't call method on " + it);
  return it;
};

// toObject with fallback for non-array-like ES3 strings
var IndexedObject$3 = indexedObject;

var requireObjectCoercible$5 = requireObjectCoercible$6;

var toIndexedObject$c = function (it) {
  return IndexedObject$3(requireObjectCoercible$5(it));
};

var isCallable$m = isCallable$n;

var isObject$k = function (it) {
  return typeof it == 'object' ? it !== null : isCallable$m(it);
};

var path$x = {};

var path$w = path$x;

var global$r = global$s;

var isCallable$l = isCallable$n;

var aFunction = function (variable) {
  return isCallable$l(variable) ? variable : undefined;
};

var getBuiltIn$h = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path$w[namespace]) || aFunction(global$r[namespace]) : path$w[namespace] && path$w[namespace][method] || global$r[namespace] && global$r[namespace][method];
};

var uncurryThis$u = functionUncurryThis;

var objectIsPrototypeOf = uncurryThis$u({}.isPrototypeOf);

var getBuiltIn$g = getBuiltIn$h;

var engineUserAgent = getBuiltIn$g('navigator', 'userAgent') || '';

var global$q = global$s;

var userAgent$6 = engineUserAgent;

var process$3 = global$q.process;
var Deno$1 = global$q.Deno;
var versions = process$3 && process$3.versions || Deno$1 && Deno$1.version;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.'); // in old Chrome, versions of V8 isn't V8 = Chrome / 10
  // but their correct versions are not interesting for us

  version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
} // BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0


if (!version && userAgent$6) {
  match = userAgent$6.match(/Edge\/(\d+)/);

  if (!match || match[1] >= 74) {
    match = userAgent$6.match(/Chrome\/(\d+)/);
    if (match) version = +match[1];
  }
}

var engineV8Version = version;

/* eslint-disable es-x/no-symbol -- required for testing */

var V8_VERSION$3 = engineV8Version;

var fails$u = fails$y; // eslint-disable-next-line es-x/no-object-getownpropertysymbols -- required for testing


var nativeSymbol = !!Object.getOwnPropertySymbols && !fails$u(function () {
  var symbol = Symbol(); // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances

  return !String(symbol) || !(Object(symbol) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
  !Symbol.sham && V8_VERSION$3 && V8_VERSION$3 < 41;
});

/* eslint-disable es-x/no-symbol -- required for testing */

var NATIVE_SYMBOL$5 = nativeSymbol;

var useSymbolAsUid = NATIVE_SYMBOL$5 && !Symbol.sham && typeof Symbol.iterator == 'symbol';

var getBuiltIn$f = getBuiltIn$h;

var isCallable$k = isCallable$n;

var isPrototypeOf$r = objectIsPrototypeOf;

var USE_SYMBOL_AS_UID$1 = useSymbolAsUid;

var $Object$3 = Object;
var isSymbol$4 = USE_SYMBOL_AS_UID$1 ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn$f('Symbol');
  return isCallable$k($Symbol) && isPrototypeOf$r($Symbol.prototype, $Object$3(it));
};

var $String$3 = String;

var tryToString$6 = function (argument) {
  try {
    return $String$3(argument);
  } catch (error) {
    return 'Object';
  }
};

var isCallable$j = isCallable$n;

var tryToString$5 = tryToString$6;

var $TypeError$h = TypeError; // `Assert: IsCallable(argument) is true`

var aCallable$o = function (argument) {
  if (isCallable$j(argument)) return argument;
  throw $TypeError$h(tryToString$5(argument) + ' is not a function');
};

var aCallable$n = aCallable$o; // `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod


var getMethod$3 = function (V, P) {
  var func = V[P];
  return func == null ? undefined : aCallable$n(func);
};

var call$t = functionCall;

var isCallable$i = isCallable$n;

var isObject$j = isObject$k;

var $TypeError$g = TypeError; // `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive

var ordinaryToPrimitive$1 = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable$i(fn = input.toString) && !isObject$j(val = call$t(fn, input))) return val;
  if (isCallable$i(fn = input.valueOf) && !isObject$j(val = call$t(fn, input))) return val;
  if (pref !== 'string' && isCallable$i(fn = input.toString) && !isObject$j(val = call$t(fn, input))) return val;
  throw $TypeError$g("Can't convert object to primitive value");
};

var shared$6 = {exports: {}};

var isPure = true;

var global$p = global$s; // eslint-disable-next-line es-x/no-object-defineproperty -- safe


var defineProperty$f = Object.defineProperty;

var defineGlobalProperty$1 = function (key, value) {
  try {
    defineProperty$f(global$p, key, {
      value: value,
      configurable: true,
      writable: true
    });
  } catch (error) {
    global$p[key] = value;
  }

  return value;
};

var global$o = global$s;

var defineGlobalProperty = defineGlobalProperty$1;

var SHARED = '__core-js_shared__';
var store$3 = global$o[SHARED] || defineGlobalProperty(SHARED, {});
var sharedStore = store$3;

var store$2 = sharedStore;

(shared$6.exports = function (key, value) {
  return store$2[key] || (store$2[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.24.1',
  mode: 'pure' ,
  copyright: '© 2014-2022 Denis Pushkarev (zloirock.ru)',
  license: 'https://github.com/zloirock/core-js/blob/v3.24.1/LICENSE',
  source: 'https://github.com/zloirock/core-js'
});

var requireObjectCoercible$4 = requireObjectCoercible$6;

var $Object$2 = Object; // `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject

var toObject$d = function (argument) {
  return $Object$2(requireObjectCoercible$4(argument));
};

var uncurryThis$t = functionUncurryThis;

var toObject$c = toObject$d;

var hasOwnProperty = uncurryThis$t({}.hasOwnProperty); // `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es-x/no-object-hasown -- safe

var hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject$c(it), key);
};

var uncurryThis$s = functionUncurryThis;

var id$2 = 0;
var postfix = Math.random();
var toString$b = uncurryThis$s(1.0.toString);

var uid$4 = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString$b(++id$2 + postfix, 36);
};

var global$n = global$s;

var shared$5 = shared$6.exports;

var hasOwn$k = hasOwnProperty_1;

var uid$3 = uid$4;

var NATIVE_SYMBOL$4 = nativeSymbol;

var USE_SYMBOL_AS_UID = useSymbolAsUid;

var WellKnownSymbolsStore$1 = shared$5('wks');
var Symbol$2 = global$n.Symbol;
var symbolFor = Symbol$2 && Symbol$2['for'];
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol$2 : Symbol$2 && Symbol$2.withoutSetter || uid$3;

var wellKnownSymbol$p = function (name) {
  if (!hasOwn$k(WellKnownSymbolsStore$1, name) || !(NATIVE_SYMBOL$4 || typeof WellKnownSymbolsStore$1[name] == 'string')) {
    var description = 'Symbol.' + name;

    if (NATIVE_SYMBOL$4 && hasOwn$k(Symbol$2, name)) {
      WellKnownSymbolsStore$1[name] = Symbol$2[name];
    } else if (USE_SYMBOL_AS_UID && symbolFor) {
      WellKnownSymbolsStore$1[name] = symbolFor(description);
    } else {
      WellKnownSymbolsStore$1[name] = createWellKnownSymbol(description);
    }
  }

  return WellKnownSymbolsStore$1[name];
};

var call$s = functionCall;

var isObject$i = isObject$k;

var isSymbol$3 = isSymbol$4;

var getMethod$2 = getMethod$3;

var ordinaryToPrimitive = ordinaryToPrimitive$1;

var wellKnownSymbol$o = wellKnownSymbol$p;

var $TypeError$f = TypeError;
var TO_PRIMITIVE = wellKnownSymbol$o('toPrimitive'); // `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive

var toPrimitive$1 = function (input, pref) {
  if (!isObject$i(input) || isSymbol$3(input)) return input;
  var exoticToPrim = getMethod$2(input, TO_PRIMITIVE);
  var result;

  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = call$s(exoticToPrim, input, pref);
    if (!isObject$i(result) || isSymbol$3(result)) return result;
    throw $TypeError$f("Can't convert object to primitive value");
  }

  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};

var toPrimitive = toPrimitive$1;

var isSymbol$2 = isSymbol$4; // `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey


var toPropertyKey$4 = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol$2(key) ? key : key + '';
};

var global$m = global$s;

var isObject$h = isObject$k;

var document$3 = global$m.document; // typeof document.createElement is 'object' in old IE

var EXISTS$1 = isObject$h(document$3) && isObject$h(document$3.createElement);

var documentCreateElement$1 = function (it) {
  return EXISTS$1 ? document$3.createElement(it) : {};
};

var DESCRIPTORS$i = descriptors;

var fails$t = fails$y;

var createElement$1 = documentCreateElement$1; // Thanks to IE8 for its funny defineProperty


var ie8DomDefine = !DESCRIPTORS$i && !fails$t(function () {
  // eslint-disable-next-line es-x/no-object-defineproperty -- required for testing
  return Object.defineProperty(createElement$1('div'), 'a', {
    get: function () {
      return 7;
    }
  }).a != 7;
});

var DESCRIPTORS$h = descriptors;

var call$r = functionCall;

var propertyIsEnumerableModule$2 = objectPropertyIsEnumerable;

var createPropertyDescriptor$7 = createPropertyDescriptor$8;

var toIndexedObject$b = toIndexedObject$c;

var toPropertyKey$3 = toPropertyKey$4;

var hasOwn$j = hasOwnProperty_1;

var IE8_DOM_DEFINE$1 = ie8DomDefine; // eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe


var $getOwnPropertyDescriptor$2 = Object.getOwnPropertyDescriptor; // `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor

objectGetOwnPropertyDescriptor.f = DESCRIPTORS$h ? $getOwnPropertyDescriptor$2 : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject$b(O);
  P = toPropertyKey$3(P);
  if (IE8_DOM_DEFINE$1) try {
    return $getOwnPropertyDescriptor$2(O, P);
  } catch (error) {
    /* empty */
  }
  if (hasOwn$j(O, P)) return createPropertyDescriptor$7(!call$r(propertyIsEnumerableModule$2.f, O, P), O[P]);
};

var fails$s = fails$y;

var isCallable$h = isCallable$n;

var replacement = /#|\.prototype\./;

var isForced$2 = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true : value == NATIVE ? false : isCallable$h(detection) ? fails$s(detection) : !!detection;
};

var normalize = isForced$2.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced$2.data = {};
var NATIVE = isForced$2.NATIVE = 'N';
var POLYFILL = isForced$2.POLYFILL = 'P';
var isForced_1 = isForced$2;

var uncurryThis$r = functionUncurryThis;

var aCallable$m = aCallable$o;

var NATIVE_BIND$1 = functionBindNative;

var bind$s = uncurryThis$r(uncurryThis$r.bind); // optional / simple context binding

var functionBindContext = function (fn, that) {
  aCallable$m(fn);
  return that === undefined ? fn : NATIVE_BIND$1 ? bind$s(fn, that) : function
    /* ...args */
  () {
    return fn.apply(that, arguments);
  };
};

var objectDefineProperty = {};

var DESCRIPTORS$g = descriptors;

var fails$r = fails$y; // V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334


var v8PrototypeDefineBug = DESCRIPTORS$g && fails$r(function () {
  // eslint-disable-next-line es-x/no-object-defineproperty -- required for testing
  return Object.defineProperty(function () {
    /* empty */
  }, 'prototype', {
    value: 42,
    writable: false
  }).prototype != 42;
});

var isObject$g = isObject$k;

var $String$2 = String;
var $TypeError$e = TypeError; // `Assert: Type(argument) is Object`

var anObject$u = function (argument) {
  if (isObject$g(argument)) return argument;
  throw $TypeError$e($String$2(argument) + ' is not an object');
};

var DESCRIPTORS$f = descriptors;

var IE8_DOM_DEFINE = ie8DomDefine;

var V8_PROTOTYPE_DEFINE_BUG$1 = v8PrototypeDefineBug;

var anObject$t = anObject$u;

var toPropertyKey$2 = toPropertyKey$4;

var $TypeError$d = TypeError; // eslint-disable-next-line es-x/no-object-defineproperty -- safe

var $defineProperty$1 = Object.defineProperty; // eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe

var $getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;
var ENUMERABLE = 'enumerable';
var CONFIGURABLE$1 = 'configurable';
var WRITABLE = 'writable'; // `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty

objectDefineProperty.f = DESCRIPTORS$f ? V8_PROTOTYPE_DEFINE_BUG$1 ? function defineProperty(O, P, Attributes) {
  anObject$t(O);
  P = toPropertyKey$2(P);
  anObject$t(Attributes);

  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
    var current = $getOwnPropertyDescriptor$1(O, P);

    if (current && current[WRITABLE]) {
      O[P] = Attributes.value;
      Attributes = {
        configurable: CONFIGURABLE$1 in Attributes ? Attributes[CONFIGURABLE$1] : current[CONFIGURABLE$1],
        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
        writable: false
      };
    }
  }

  return $defineProperty$1(O, P, Attributes);
} : $defineProperty$1 : function defineProperty(O, P, Attributes) {
  anObject$t(O);
  P = toPropertyKey$2(P);
  anObject$t(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty$1(O, P, Attributes);
  } catch (error) {
    /* empty */
  }
  if ('get' in Attributes || 'set' in Attributes) throw $TypeError$d('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

var DESCRIPTORS$e = descriptors;

var definePropertyModule$5 = objectDefineProperty;

var createPropertyDescriptor$6 = createPropertyDescriptor$8;

var createNonEnumerableProperty$8 = DESCRIPTORS$e ? function (object, key, value) {
  return definePropertyModule$5.f(object, key, createPropertyDescriptor$6(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

var global$l = global$s;

var apply$6 = functionApply;

var uncurryThis$q = functionUncurryThis;

var isCallable$g = isCallable$n;

var getOwnPropertyDescriptor$a = objectGetOwnPropertyDescriptor.f;

var isForced$1 = isForced_1;

var path$v = path$x;

var bind$r = functionBindContext;

var createNonEnumerableProperty$7 = createNonEnumerableProperty$8;

var hasOwn$i = hasOwnProperty_1;

var wrapConstructor = function (NativeConstructor) {
  var Wrapper = function (a, b, c) {
    if (this instanceof Wrapper) {
      switch (arguments.length) {
        case 0:
          return new NativeConstructor();

        case 1:
          return new NativeConstructor(a);

        case 2:
          return new NativeConstructor(a, b);
      }

      return new NativeConstructor(a, b, c);
    }

    return apply$6(NativeConstructor, this, arguments);
  };

  Wrapper.prototype = NativeConstructor.prototype;
  return Wrapper;
};
/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/


var _export = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var PROTO = options.proto;
  var nativeSource = GLOBAL ? global$l : STATIC ? global$l[TARGET] : (global$l[TARGET] || {}).prototype;
  var target = GLOBAL ? path$v : path$v[TARGET] || createNonEnumerableProperty$7(path$v, TARGET, {})[TARGET];
  var targetPrototype = target.prototype;
  var FORCED, USE_NATIVE, VIRTUAL_PROTOTYPE;
  var key, sourceProperty, targetProperty, nativeProperty, resultProperty, descriptor;

  for (key in source) {
    FORCED = isForced$1(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced); // contains in native

    USE_NATIVE = !FORCED && nativeSource && hasOwn$i(nativeSource, key);
    targetProperty = target[key];
    if (USE_NATIVE) if (options.dontCallGetSet) {
      descriptor = getOwnPropertyDescriptor$a(nativeSource, key);
      nativeProperty = descriptor && descriptor.value;
    } else nativeProperty = nativeSource[key]; // export native or implementation

    sourceProperty = USE_NATIVE && nativeProperty ? nativeProperty : source[key];
    if (USE_NATIVE && typeof targetProperty == typeof sourceProperty) continue; // bind timers to global for call from export context

    if (options.bind && USE_NATIVE) resultProperty = bind$r(sourceProperty, global$l); // wrap global constructors for prevent changs in this version
    else if (options.wrap && USE_NATIVE) resultProperty = wrapConstructor(sourceProperty); // make static versions for prototype methods
    else if (PROTO && isCallable$g(sourceProperty)) resultProperty = uncurryThis$q(sourceProperty); // default case
    else resultProperty = sourceProperty; // add a flag to not completely full polyfills

    if (options.sham || sourceProperty && sourceProperty.sham || targetProperty && targetProperty.sham) {
      createNonEnumerableProperty$7(resultProperty, 'sham', true);
    }

    createNonEnumerableProperty$7(target, key, resultProperty);

    if (PROTO) {
      VIRTUAL_PROTOTYPE = TARGET + 'Prototype';

      if (!hasOwn$i(path$v, VIRTUAL_PROTOTYPE)) {
        createNonEnumerableProperty$7(path$v, VIRTUAL_PROTOTYPE, {});
      } // export virtual prototype methods


      createNonEnumerableProperty$7(path$v[VIRTUAL_PROTOTYPE], key, sourceProperty); // export real prototype methods

      if (options.real && targetPrototype && !targetPrototype[key]) {
        createNonEnumerableProperty$7(targetPrototype, key, sourceProperty);
      }
    }
  }
};

var shared$4 = shared$6.exports;

var uid$2 = uid$4;

var keys$7 = shared$4('keys');

var sharedKey$4 = function (key) {
  return keys$7[key] || (keys$7[key] = uid$2(key));
};

var fails$q = fails$y;

var correctPrototypeGetter = !fails$q(function () {
  function F() {
    /* empty */
  }

  F.prototype.constructor = null; // eslint-disable-next-line es-x/no-object-getprototypeof -- required for testing

  return Object.getPrototypeOf(new F()) !== F.prototype;
});

var hasOwn$h = hasOwnProperty_1;

var isCallable$f = isCallable$n;

var toObject$b = toObject$d;

var sharedKey$3 = sharedKey$4;

var CORRECT_PROTOTYPE_GETTER$1 = correctPrototypeGetter;

var IE_PROTO$1 = sharedKey$3('IE_PROTO');
var $Object$1 = Object;
var ObjectPrototype$2 = $Object$1.prototype; // `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
// eslint-disable-next-line es-x/no-object-getprototypeof -- safe

var objectGetPrototypeOf = CORRECT_PROTOTYPE_GETTER$1 ? $Object$1.getPrototypeOf : function (O) {
  var object = toObject$b(O);
  if (hasOwn$h(object, IE_PROTO$1)) return object[IE_PROTO$1];
  var constructor = object.constructor;

  if (isCallable$f(constructor) && object instanceof constructor) {
    return constructor.prototype;
  }

  return object instanceof $Object$1 ? ObjectPrototype$2 : null;
};

var isCallable$e = isCallable$n;

var $String$1 = String;
var $TypeError$c = TypeError;

var aPossiblePrototype$1 = function (argument) {
  if (typeof argument == 'object' || isCallable$e(argument)) return argument;
  throw $TypeError$c("Can't set " + $String$1(argument) + ' as a prototype');
};

/* eslint-disable no-proto -- safe */

var uncurryThis$p = functionUncurryThis;

var anObject$s = anObject$u;

var aPossiblePrototype = aPossiblePrototype$1; // `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
// eslint-disable-next-line es-x/no-object-setprototypeof -- safe


var objectSetPrototypeOf = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;

  try {
    // eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
    setter = uncurryThis$p(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set);
    setter(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) {
    /* empty */
  }

  return function setPrototypeOf(O, proto) {
    anObject$s(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter(O, proto);else O.__proto__ = proto;
    return O;
  };
}() : undefined);

var objectGetOwnPropertyNames = {};

var ceil = Math.ceil;
var floor$1 = Math.floor; // `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es-x/no-math-trunc -- safe

var mathTrunc = Math.trunc || function trunc(x) {
  var n = +x;
  return (n > 0 ? floor$1 : ceil)(n);
};

var trunc = mathTrunc; // `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity


var toIntegerOrInfinity$6 = function (argument) {
  var number = +argument; // eslint-disable-next-line no-self-compare -- NaN check

  return number !== number || number === 0 ? 0 : trunc(number);
};

var toIntegerOrInfinity$5 = toIntegerOrInfinity$6;

var max$2 = Math.max;
var min$2 = Math.min; // Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).

var toAbsoluteIndex$5 = function (index, length) {
  var integer = toIntegerOrInfinity$5(index);
  return integer < 0 ? max$2(integer + length, 0) : min$2(integer, length);
};

var toIntegerOrInfinity$4 = toIntegerOrInfinity$6;

var min$1 = Math.min; // `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength

var toLength$1 = function (argument) {
  return argument > 0 ? min$1(toIntegerOrInfinity$4(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};

var toLength = toLength$1; // `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike


var lengthOfArrayLike$d = function (obj) {
  return toLength(obj.length);
};

var toIndexedObject$a = toIndexedObject$c;

var toAbsoluteIndex$4 = toAbsoluteIndex$5;

var lengthOfArrayLike$c = lengthOfArrayLike$d; // `Array.prototype.{ indexOf, includes }` methods implementation


var createMethod$5 = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject$a($this);
    var length = lengthOfArrayLike$c(O);
    var index = toAbsoluteIndex$4(fromIndex, length);
    var value; // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check

    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++]; // eslint-disable-next-line no-self-compare -- NaN check

      if (value != value) return true; // Array#indexOf ignores holes, Array#includes - not
    } else for (; length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    }
    return !IS_INCLUDES && -1;
  };
};

var arrayIncludes = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod$5(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod$5(false)
};

var hiddenKeys$6 = {};

var uncurryThis$o = functionUncurryThis;

var hasOwn$g = hasOwnProperty_1;

var toIndexedObject$9 = toIndexedObject$c;

var indexOf$8 = arrayIncludes.indexOf;

var hiddenKeys$5 = hiddenKeys$6;

var push$9 = uncurryThis$o([].push);

var objectKeysInternal = function (object, names) {
  var O = toIndexedObject$9(object);
  var i = 0;
  var result = [];
  var key;

  for (key in O) !hasOwn$g(hiddenKeys$5, key) && hasOwn$g(O, key) && push$9(result, key); // Don't enum bug & hidden keys


  while (names.length > i) if (hasOwn$g(O, key = names[i++])) {
    ~indexOf$8(result, key) || push$9(result, key);
  }

  return result;
};

// IE8- don't enum bug keys
var enumBugKeys$3 = ['constructor', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'toLocaleString', 'toString', 'valueOf'];

var internalObjectKeys$1 = objectKeysInternal;

var enumBugKeys$2 = enumBugKeys$3;

var hiddenKeys$4 = enumBugKeys$2.concat('length', 'prototype'); // `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es-x/no-object-getownpropertynames -- safe

objectGetOwnPropertyNames.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys$1(O, hiddenKeys$4);
};

var objectGetOwnPropertySymbols = {};

// eslint-disable-next-line es-x/no-object-getownpropertysymbols -- safe
objectGetOwnPropertySymbols.f = Object.getOwnPropertySymbols;

var getBuiltIn$e = getBuiltIn$h;

var uncurryThis$n = functionUncurryThis;

var getOwnPropertyNamesModule$2 = objectGetOwnPropertyNames;

var getOwnPropertySymbolsModule$3 = objectGetOwnPropertySymbols;

var anObject$r = anObject$u;

var concat$6 = uncurryThis$n([].concat); // all object keys, includes non-enumerable and symbols

var ownKeys$2 = getBuiltIn$e('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule$2.f(anObject$r(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule$3.f;
  return getOwnPropertySymbols ? concat$6(keys, getOwnPropertySymbols(it)) : keys;
};

var hasOwn$f = hasOwnProperty_1;

var ownKeys$1 = ownKeys$2;

var getOwnPropertyDescriptorModule$3 = objectGetOwnPropertyDescriptor;

var definePropertyModule$4 = objectDefineProperty;

var copyConstructorProperties$1 = function (target, source, exceptions) {
  var keys = ownKeys$1(source);
  var defineProperty = definePropertyModule$4.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule$3.f;

  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];

    if (!hasOwn$f(target, key) && !(exceptions && hasOwn$f(exceptions, key))) {
      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  }
};

var objectDefineProperties = {};

var internalObjectKeys = objectKeysInternal;

var enumBugKeys$1 = enumBugKeys$3; // `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es-x/no-object-keys -- safe


var objectKeys$4 = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys$1);
};

var DESCRIPTORS$d = descriptors;

var V8_PROTOTYPE_DEFINE_BUG = v8PrototypeDefineBug;

var definePropertyModule$3 = objectDefineProperty;

var anObject$q = anObject$u;

var toIndexedObject$8 = toIndexedObject$c;

var objectKeys$3 = objectKeys$4; // `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es-x/no-object-defineproperties -- safe


objectDefineProperties.f = DESCRIPTORS$d && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject$q(O);
  var props = toIndexedObject$8(Properties);
  var keys = objectKeys$3(Properties);
  var length = keys.length;
  var index = 0;
  var key;

  while (length > index) definePropertyModule$3.f(O, key = keys[index++], props[key]);

  return O;
};

var getBuiltIn$d = getBuiltIn$h;

var html$2 = getBuiltIn$d('document', 'documentElement');

/* global ActiveXObject -- old IE, WSH */

var anObject$p = anObject$u;

var definePropertiesModule$1 = objectDefineProperties;

var enumBugKeys = enumBugKeys$3;

var hiddenKeys$3 = hiddenKeys$6;

var html$1 = html$2;

var documentCreateElement = documentCreateElement$1;

var sharedKey$2 = sharedKey$4;

var GT = '>';
var LT = '<';
var PROTOTYPE$1 = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey$2('IE_PROTO');

var EmptyConstructor = function () {
  /* empty */
};

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
}; // Create object with fake `null` prototype: use ActiveX Object with cleared prototype


var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak

  return temp;
}; // Create object with fake `null` prototype: use iframe Object with cleared prototype


var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html$1.appendChild(iframe); // https://github.com/zloirock/core-js/issues/475

  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
}; // Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug


var activeXDocument;

var NullProtoObject = function () {
  try {
    activeXDocument = new ActiveXObject('htmlfile');
  } catch (error) {
    /* ignore */
  }

  NullProtoObject = typeof document != 'undefined' ? document.domain && activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) // old IE
  : NullProtoObjectViaIFrame() : NullProtoObjectViaActiveX(activeXDocument); // WSH

  var length = enumBugKeys.length;

  while (length--) delete NullProtoObject[PROTOTYPE$1][enumBugKeys[length]];

  return NullProtoObject();
};

hiddenKeys$3[IE_PROTO] = true; // `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
// eslint-disable-next-line es-x/no-object-create -- safe

var objectCreate = Object.create || function create(O, Properties) {
  var result;

  if (O !== null) {
    EmptyConstructor[PROTOTYPE$1] = anObject$p(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE$1] = null; // add "__proto__" for Object.getPrototypeOf polyfill

    result[IE_PROTO] = O;
  } else result = NullProtoObject();

  return Properties === undefined ? result : definePropertiesModule$1.f(result, Properties);
};

var uncurryThis$m = functionUncurryThis;

var $Error$1 = Error;
var replace$3 = uncurryThis$m(''.replace);

var TEST = function (arg) {
  return String($Error$1(arg).stack);
}('zxcasd');

var V8_OR_CHAKRA_STACK_ENTRY = /\n\s*at [^:]*:[^\n]*/;
var IS_V8_OR_CHAKRA_STACK = V8_OR_CHAKRA_STACK_ENTRY.test(TEST);

var clearErrorStack$1 = function (stack, dropEntries) {
  if (IS_V8_OR_CHAKRA_STACK && typeof stack == 'string' && !$Error$1.prepareStackTrace) {
    while (dropEntries--) stack = replace$3(stack, V8_OR_CHAKRA_STACK_ENTRY, '');
  }

  return stack;
};

var isObject$f = isObject$k;

var createNonEnumerableProperty$6 = createNonEnumerableProperty$8; // `InstallErrorCause` abstract operation
// https://tc39.es/proposal-error-cause/#sec-errorobjects-install-error-cause


var installErrorCause$1 = function (O, options) {
  if (isObject$f(options) && 'cause' in options) {
    createNonEnumerableProperty$6(O, 'cause', options.cause);
  }
};

var iterators = {};

var wellKnownSymbol$n = wellKnownSymbol$p;

var Iterators$5 = iterators;

var ITERATOR$7 = wellKnownSymbol$n('iterator');
var ArrayPrototype$j = Array.prototype; // check on default Array iterator

var isArrayIteratorMethod$2 = function (it) {
  return it !== undefined && (Iterators$5.Array === it || ArrayPrototype$j[ITERATOR$7] === it);
};

var wellKnownSymbol$m = wellKnownSymbol$p;

var TO_STRING_TAG$4 = wellKnownSymbol$m('toStringTag');
var test$2 = {};
test$2[TO_STRING_TAG$4] = 'z';
var toStringTagSupport = String(test$2) === '[object z]';

var TO_STRING_TAG_SUPPORT$2 = toStringTagSupport;

var isCallable$d = isCallable$n;

var classofRaw = classofRaw$1;

var wellKnownSymbol$l = wellKnownSymbol$p;

var TO_STRING_TAG$3 = wellKnownSymbol$l('toStringTag');
var $Object = Object; // ES3 wrong here

var CORRECT_ARGUMENTS = classofRaw(function () {
  return arguments;
}()) == 'Arguments'; // fallback for IE11 Script Access Denied error

var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) {
    /* empty */
  }
}; // getting tag from ES6+ `Object.prototype.toString`


var classof$e = TO_STRING_TAG_SUPPORT$2 ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null' // @@toStringTag case
  : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG$3)) == 'string' ? tag // builtinTag case
  : CORRECT_ARGUMENTS ? classofRaw(O) // ES3 arguments fallback
  : (result = classofRaw(O)) == 'Object' && isCallable$d(O.callee) ? 'Arguments' : result;
};

var classof$d = classof$e;

var getMethod$1 = getMethod$3;

var Iterators$4 = iterators;

var wellKnownSymbol$k = wellKnownSymbol$p;

var ITERATOR$6 = wellKnownSymbol$k('iterator');

var getIteratorMethod$a = function (it) {
  if (it != undefined) return getMethod$1(it, ITERATOR$6) || getMethod$1(it, '@@iterator') || Iterators$4[classof$d(it)];
};

var call$q = functionCall;

var aCallable$l = aCallable$o;

var anObject$o = anObject$u;

var tryToString$4 = tryToString$6;

var getIteratorMethod$9 = getIteratorMethod$a;

var $TypeError$b = TypeError;

var getIterator$5 = function (argument, usingIterator) {
  var iteratorMethod = arguments.length < 2 ? getIteratorMethod$9(argument) : usingIterator;
  if (aCallable$l(iteratorMethod)) return anObject$o(call$q(iteratorMethod, argument));
  throw $TypeError$b(tryToString$4(argument) + ' is not iterable');
};

var call$p = functionCall;

var anObject$n = anObject$u;

var getMethod = getMethod$3;

var iteratorClose$2 = function (iterator, kind, value) {
  var innerResult, innerError;
  anObject$n(iterator);

  try {
    innerResult = getMethod(iterator, 'return');

    if (!innerResult) {
      if (kind === 'throw') throw value;
      return value;
    }

    innerResult = call$p(innerResult, iterator);
  } catch (error) {
    innerError = true;
    innerResult = error;
  }

  if (kind === 'throw') throw value;
  if (innerError) throw innerResult;
  anObject$n(innerResult);
  return value;
};

var bind$q = functionBindContext;

var call$o = functionCall;

var anObject$m = anObject$u;

var tryToString$3 = tryToString$6;

var isArrayIteratorMethod$1 = isArrayIteratorMethod$2;

var lengthOfArrayLike$b = lengthOfArrayLike$d;

var isPrototypeOf$q = objectIsPrototypeOf;

var getIterator$4 = getIterator$5;

var getIteratorMethod$8 = getIteratorMethod$a;

var iteratorClose$1 = iteratorClose$2;

var $TypeError$a = TypeError;

var Result = function (stopped, result) {
  this.stopped = stopped;
  this.result = result;
};

var ResultPrototype = Result.prototype;

var iterate$l = function (iterable, unboundFunction, options) {
  var that = options && options.that;
  var AS_ENTRIES = !!(options && options.AS_ENTRIES);
  var IS_RECORD = !!(options && options.IS_RECORD);
  var IS_ITERATOR = !!(options && options.IS_ITERATOR);
  var INTERRUPTED = !!(options && options.INTERRUPTED);
  var fn = bind$q(unboundFunction, that);
  var iterator, iterFn, index, length, result, next, step;

  var stop = function (condition) {
    if (iterator) iteratorClose$1(iterator, 'normal', condition);
    return new Result(true, condition);
  };

  var callFn = function (value) {
    if (AS_ENTRIES) {
      anObject$m(value);
      return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
    }

    return INTERRUPTED ? fn(value, stop) : fn(value);
  };

  if (IS_RECORD) {
    iterator = iterable.iterator;
  } else if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod$8(iterable);
    if (!iterFn) throw $TypeError$a(tryToString$3(iterable) + ' is not iterable'); // optimisation for array iterators

    if (isArrayIteratorMethod$1(iterFn)) {
      for (index = 0, length = lengthOfArrayLike$b(iterable); length > index; index++) {
        result = callFn(iterable[index]);
        if (result && isPrototypeOf$q(ResultPrototype, result)) return result;
      }

      return new Result(false);
    }

    iterator = getIterator$4(iterable, iterFn);
  }

  next = IS_RECORD ? iterable.next : iterator.next;

  while (!(step = call$o(next, iterator)).done) {
    try {
      result = callFn(step.value);
    } catch (error) {
      iteratorClose$1(iterator, 'throw', error);
    }

    if (typeof result == 'object' && result && isPrototypeOf$q(ResultPrototype, result)) return result;
  }

  return new Result(false);
};

var classof$c = classof$e;

var $String = String;

var toString$a = function (argument) {
  if (classof$c(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string');
  return $String(argument);
};

var toString$9 = toString$a;

var normalizeStringArgument$1 = function (argument, $default) {
  return argument === undefined ? arguments.length < 2 ? '' : $default : toString$9(argument);
};

var fails$p = fails$y;

var createPropertyDescriptor$5 = createPropertyDescriptor$8;

var errorStackInstallable = !fails$p(function () {
  var error = Error('a');
  if (!('stack' in error)) return true; // eslint-disable-next-line es-x/no-object-defineproperty -- safe

  Object.defineProperty(error, 'stack', createPropertyDescriptor$5(1, 7));
  return error.stack !== 7;
});

var $$1n = _export;

var isPrototypeOf$p = objectIsPrototypeOf;

var getPrototypeOf$9 = objectGetPrototypeOf;

var setPrototypeOf$7 = objectSetPrototypeOf;

var copyConstructorProperties = copyConstructorProperties$1;

var create$d = objectCreate;

var createNonEnumerableProperty$5 = createNonEnumerableProperty$8;

var createPropertyDescriptor$4 = createPropertyDescriptor$8;

var clearErrorStack = clearErrorStack$1;

var installErrorCause = installErrorCause$1;

var iterate$k = iterate$l;

var normalizeStringArgument = normalizeStringArgument$1;

var wellKnownSymbol$j = wellKnownSymbol$p;

var ERROR_STACK_INSTALLABLE = errorStackInstallable;

var TO_STRING_TAG$2 = wellKnownSymbol$j('toStringTag');
var $Error = Error;
var push$8 = [].push;

var $AggregateError = function AggregateError(errors, message
/* , options */
) {
  var options = arguments.length > 2 ? arguments[2] : undefined;
  var isInstance = isPrototypeOf$p(AggregateErrorPrototype, this);
  var that;

  if (setPrototypeOf$7) {
    that = setPrototypeOf$7(new $Error(), isInstance ? getPrototypeOf$9(this) : AggregateErrorPrototype);
  } else {
    that = isInstance ? this : create$d(AggregateErrorPrototype);
    createNonEnumerableProperty$5(that, TO_STRING_TAG$2, 'Error');
  }

  if (message !== undefined) createNonEnumerableProperty$5(that, 'message', normalizeStringArgument(message));
  if (ERROR_STACK_INSTALLABLE) createNonEnumerableProperty$5(that, 'stack', clearErrorStack(that.stack, 1));
  installErrorCause(that, options);
  var errorsArray = [];
  iterate$k(errors, push$8, {
    that: errorsArray
  });
  createNonEnumerableProperty$5(that, 'errors', errorsArray);
  return that;
};

if (setPrototypeOf$7) setPrototypeOf$7($AggregateError, $Error);else copyConstructorProperties($AggregateError, $Error, {
  name: true
});
var AggregateErrorPrototype = $AggregateError.prototype = create$d($Error.prototype, {
  constructor: createPropertyDescriptor$4(1, $AggregateError),
  message: createPropertyDescriptor$4(1, ''),
  name: createPropertyDescriptor$4(1, 'AggregateError')
}); // `AggregateError` constructor
// https://tc39.es/ecma262/#sec-aggregate-error-constructor

$$1n({
  global: true,
  constructor: true,
  arity: 2
}, {
  AggregateError: $AggregateError
});

var uncurryThis$l = functionUncurryThis;

var isCallable$c = isCallable$n;

var store$1 = sharedStore;

var functionToString = uncurryThis$l(Function.toString); // this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper

if (!isCallable$c(store$1.inspectSource)) {
  store$1.inspectSource = function (it) {
    return functionToString(it);
  };
}

var inspectSource$3 = store$1.inspectSource;

var global$k = global$s;

var isCallable$b = isCallable$n;

var inspectSource$2 = inspectSource$3;

var WeakMap$1 = global$k.WeakMap;
var nativeWeakMap = isCallable$b(WeakMap$1) && /native code/.test(inspectSource$2(WeakMap$1));

var NATIVE_WEAK_MAP = nativeWeakMap;

var global$j = global$s;

var uncurryThis$k = functionUncurryThis;

var isObject$e = isObject$k;

var createNonEnumerableProperty$4 = createNonEnumerableProperty$8;

var hasOwn$e = hasOwnProperty_1;

var shared$3 = sharedStore;

var sharedKey$1 = sharedKey$4;

var hiddenKeys$2 = hiddenKeys$6;

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError$4 = global$j.TypeError;
var WeakMap = global$j.WeakMap;
var set$4, get$7, has;

var enforce = function (it) {
  return has(it) ? get$7(it) : set$4(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;

    if (!isObject$e(it) || (state = get$7(it)).type !== TYPE) {
      throw TypeError$4('Incompatible receiver, ' + TYPE + ' required');
    }

    return state;
  };
};

if (NATIVE_WEAK_MAP || shared$3.state) {
  var store = shared$3.state || (shared$3.state = new WeakMap());
  var wmget = uncurryThis$k(store.get);
  var wmhas = uncurryThis$k(store.has);
  var wmset = uncurryThis$k(store.set);

  set$4 = function (it, metadata) {
    if (wmhas(store, it)) throw new TypeError$4(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    wmset(store, it, metadata);
    return metadata;
  };

  get$7 = function (it) {
    return wmget(store, it) || {};
  };

  has = function (it) {
    return wmhas(store, it);
  };
} else {
  var STATE = sharedKey$1('state');
  hiddenKeys$2[STATE] = true;

  set$4 = function (it, metadata) {
    if (hasOwn$e(it, STATE)) throw new TypeError$4(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty$4(it, STATE, metadata);
    return metadata;
  };

  get$7 = function (it) {
    return hasOwn$e(it, STATE) ? it[STATE] : {};
  };

  has = function (it) {
    return hasOwn$e(it, STATE);
  };
}

var internalState = {
  set: set$4,
  get: get$7,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};

var DESCRIPTORS$c = descriptors;

var hasOwn$d = hasOwnProperty_1;

var FunctionPrototype$1 = Function.prototype; // eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe

var getDescriptor = DESCRIPTORS$c && Object.getOwnPropertyDescriptor;
var EXISTS = hasOwn$d(FunctionPrototype$1, 'name'); // additional protection from minified / mangled / dropped function names

var PROPER = EXISTS && function something() {
  /* empty */
}.name === 'something';

var CONFIGURABLE = EXISTS && (!DESCRIPTORS$c || DESCRIPTORS$c && getDescriptor(FunctionPrototype$1, 'name').configurable);
var functionName = {
  EXISTS: EXISTS,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};

var createNonEnumerableProperty$3 = createNonEnumerableProperty$8;

var defineBuiltIn$7 = function (target, key, value, options) {
  if (options && options.enumerable) target[key] = value;else createNonEnumerableProperty$3(target, key, value);
  return target;
};

var fails$o = fails$y;

var isCallable$a = isCallable$n;

var create$c = objectCreate;

var getPrototypeOf$8 = objectGetPrototypeOf;

var defineBuiltIn$6 = defineBuiltIn$7;

var wellKnownSymbol$i = wellKnownSymbol$p;

var ITERATOR$5 = wellKnownSymbol$i('iterator');
var BUGGY_SAFARI_ITERATORS$1 = false; // `%IteratorPrototype%` object
// https://tc39.es/ecma262/#sec-%iteratorprototype%-object

var IteratorPrototype$1, PrototypeOfArrayIteratorPrototype, arrayIterator;
/* eslint-disable es-x/no-array-prototype-keys -- safe */

if ([].keys) {
  arrayIterator = [].keys(); // Safari 8 has buggy iterators w/o `next`

  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS$1 = true;else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf$8(getPrototypeOf$8(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype$1 = PrototypeOfArrayIteratorPrototype;
  }
}

var NEW_ITERATOR_PROTOTYPE = IteratorPrototype$1 == undefined || fails$o(function () {
  var test = {}; // FF44- legacy iterators case

  return IteratorPrototype$1[ITERATOR$5].call(test) !== test;
});
if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype$1 = {};else IteratorPrototype$1 = create$c(IteratorPrototype$1); // `%IteratorPrototype%[@@iterator]()` method
// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator

if (!isCallable$a(IteratorPrototype$1[ITERATOR$5])) {
  defineBuiltIn$6(IteratorPrototype$1, ITERATOR$5, function () {
    return this;
  });
}

var iteratorsCore = {
  IteratorPrototype: IteratorPrototype$1,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS$1
};

var TO_STRING_TAG_SUPPORT$1 = toStringTagSupport;

var classof$b = classof$e; // `Object.prototype.toString` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.tostring


var objectToString = TO_STRING_TAG_SUPPORT$1 ? {}.toString : function toString() {
  return '[object ' + classof$b(this) + ']';
};

var TO_STRING_TAG_SUPPORT = toStringTagSupport;

var defineProperty$e = objectDefineProperty.f;

var createNonEnumerableProperty$2 = createNonEnumerableProperty$8;

var hasOwn$c = hasOwnProperty_1;

var toString$8 = objectToString;

var wellKnownSymbol$h = wellKnownSymbol$p;

var TO_STRING_TAG$1 = wellKnownSymbol$h('toStringTag');

var setToStringTag$8 = function (it, TAG, STATIC, SET_METHOD) {
  if (it) {
    var target = STATIC ? it : it.prototype;

    if (!hasOwn$c(target, TO_STRING_TAG$1)) {
      defineProperty$e(target, TO_STRING_TAG$1, {
        configurable: true,
        value: TAG
      });
    }

    if (SET_METHOD && !TO_STRING_TAG_SUPPORT) {
      createNonEnumerableProperty$2(target, 'toString', toString$8);
    }
  }
};

var IteratorPrototype = iteratorsCore.IteratorPrototype;

var create$b = objectCreate;

var createPropertyDescriptor$3 = createPropertyDescriptor$8;

var setToStringTag$7 = setToStringTag$8;

var Iterators$3 = iterators;

var returnThis$1 = function () {
  return this;
};

var createIteratorConstructor$2 = function (IteratorConstructor, NAME, next, ENUMERABLE_NEXT) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create$b(IteratorPrototype, {
    next: createPropertyDescriptor$3(+!ENUMERABLE_NEXT, next)
  });
  setToStringTag$7(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators$3[TO_STRING_TAG] = returnThis$1;
  return IteratorConstructor;
};

var $$1m = _export;

var call$n = functionCall;

var FunctionName = functionName;

var createIteratorConstructor$1 = createIteratorConstructor$2;

var getPrototypeOf$7 = objectGetPrototypeOf;

var setToStringTag$6 = setToStringTag$8;

var defineBuiltIn$5 = defineBuiltIn$7;

var wellKnownSymbol$g = wellKnownSymbol$p;

var Iterators$2 = iterators;

var IteratorsCore = iteratorsCore;

var PROPER_FUNCTION_NAME$1 = FunctionName.PROPER;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR$4 = wellKnownSymbol$g('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () {
  return this;
};

var defineIterator$3 = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor$1(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];

    switch (KIND) {
      case KEYS:
        return function keys() {
          return new IteratorConstructor(this, KIND);
        };

      case VALUES:
        return function values() {
          return new IteratorConstructor(this, KIND);
        };

      case ENTRIES:
        return function entries() {
          return new IteratorConstructor(this, KIND);
        };
    }

    return function () {
      return new IteratorConstructor(this);
    };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR$4] || IterablePrototype['@@iterator'] || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY; // fix native

  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf$7(anyNativeIterator.call(new Iterable()));

    if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {


      setToStringTag$6(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      Iterators$2[TO_STRING_TAG] = returnThis;
    }
  } // fix Array.prototype.{ values, @@iterator }.name in V8 / FF


  if (PROPER_FUNCTION_NAME$1 && DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    {
      INCORRECT_VALUES_NAME = true;

      defaultIterator = function values() {
        return call$n(nativeIterator, this);
      };
    }
  } // export additional methods


  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        defineBuiltIn$5(IterablePrototype, KEY, methods[KEY]);
      }
    } else $$1m({
      target: NAME,
      proto: true,
      forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME
    }, methods);
  } // define iterator


  if ((FORCED) && IterablePrototype[ITERATOR$4] !== defaultIterator) {
    defineBuiltIn$5(IterablePrototype, ITERATOR$4, defaultIterator, {
      name: DEFAULT
    });
  }

  Iterators$2[NAME] = defaultIterator;
  return methods;
};

var toIndexedObject$7 = toIndexedObject$c;

var Iterators$1 = iterators;

var InternalStateModule$6 = internalState;

objectDefineProperty.f;

var defineIterator$2 = defineIterator$3;

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState$6 = InternalStateModule$6.set;
var getInternalState$2 = InternalStateModule$6.getterFor(ARRAY_ITERATOR); // `Array.prototype.entries` method
// https://tc39.es/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.es/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.es/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.es/ecma262/#sec-createarrayiterator

defineIterator$2(Array, 'Array', function (iterated, kind) {
  setInternalState$6(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject$7(iterated),
    // target
    index: 0,
    // next index
    kind: kind // kind

  }); // `%ArrayIteratorPrototype%.next` method
  // https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState$2(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;

  if (!target || index >= target.length) {
    state.target = undefined;
    return {
      value: undefined,
      done: true
    };
  }

  if (kind == 'keys') return {
    value: index,
    done: false
  };
  if (kind == 'values') return {
    value: target[index],
    done: false
  };
  return {
    value: [index, target[index]],
    done: false
  };
}, 'values'); // argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.es/ecma262/#sec-createunmappedargumentsobject
// https://tc39.es/ecma262/#sec-createmappedargumentsobject

Iterators$1.Arguments = Iterators$1.Array; // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables

var classof$a = classofRaw$1;

var global$i = global$s;

var engineIsNode = classof$a(global$i.process) == 'process';

var getBuiltIn$c = getBuiltIn$h;

var definePropertyModule$2 = objectDefineProperty;

var wellKnownSymbol$f = wellKnownSymbol$p;

var DESCRIPTORS$b = descriptors;

var SPECIES$5 = wellKnownSymbol$f('species');

var setSpecies$2 = function (CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn$c(CONSTRUCTOR_NAME);
  var defineProperty = definePropertyModule$2.f;

  if (DESCRIPTORS$b && Constructor && !Constructor[SPECIES$5]) {
    defineProperty(Constructor, SPECIES$5, {
      configurable: true,
      get: function () {
        return this;
      }
    });
  }
};

var isPrototypeOf$o = objectIsPrototypeOf;

var $TypeError$9 = TypeError;

var anInstance$4 = function (it, Prototype) {
  if (isPrototypeOf$o(Prototype, it)) return it;
  throw $TypeError$9('Incorrect invocation');
};

var uncurryThis$j = functionUncurryThis;

var fails$n = fails$y;

var isCallable$9 = isCallable$n;

var classof$9 = classof$e;

var getBuiltIn$b = getBuiltIn$h;

var inspectSource$1 = inspectSource$3;

var noop = function () {
  /* empty */
};

var empty = [];
var construct$8 = getBuiltIn$b('Reflect', 'construct');
var constructorRegExp = /^\s*(?:class|function)\b/;
var exec$2 = uncurryThis$j(constructorRegExp.exec);
var INCORRECT_TO_STRING = !constructorRegExp.exec(noop);

var isConstructorModern = function isConstructor(argument) {
  if (!isCallable$9(argument)) return false;

  try {
    construct$8(noop, empty, argument);
    return true;
  } catch (error) {
    return false;
  }
};

var isConstructorLegacy = function isConstructor(argument) {
  if (!isCallable$9(argument)) return false;

  switch (classof$9(argument)) {
    case 'AsyncFunction':
    case 'GeneratorFunction':
    case 'AsyncGeneratorFunction':
      return false;
  }

  try {
    // we can't check .prototype since constructors produced by .bind haven't it
    // `Function#toString` throws on some built-it function in some legacy engines
    // (for example, `DOMQuad` and similar in FF41-)
    return INCORRECT_TO_STRING || !!exec$2(constructorRegExp, inspectSource$1(argument));
  } catch (error) {
    return true;
  }
};

isConstructorLegacy.sham = true; // `IsConstructor` abstract operation
// https://tc39.es/ecma262/#sec-isconstructor

var isConstructor$4 = !construct$8 || fails$n(function () {
  var called;
  return isConstructorModern(isConstructorModern.call) || !isConstructorModern(Object) || !isConstructorModern(function () {
    called = true;
  }) || called;
}) ? isConstructorLegacy : isConstructorModern;

var isConstructor$3 = isConstructor$4;

var tryToString$2 = tryToString$6;

var $TypeError$8 = TypeError; // `Assert: IsConstructor(argument) is true`

var aConstructor$3 = function (argument) {
  if (isConstructor$3(argument)) return argument;
  throw $TypeError$8(tryToString$2(argument) + ' is not a constructor');
};

var anObject$l = anObject$u;

var aConstructor$2 = aConstructor$3;

var wellKnownSymbol$e = wellKnownSymbol$p;

var SPECIES$4 = wellKnownSymbol$e('species'); // `SpeciesConstructor` abstract operation
// https://tc39.es/ecma262/#sec-speciesconstructor

var speciesConstructor$5 = function (O, defaultConstructor) {
  var C = anObject$l(O).constructor;
  var S;
  return C === undefined || (S = anObject$l(C)[SPECIES$4]) == undefined ? defaultConstructor : aConstructor$2(S);
};

var uncurryThis$i = functionUncurryThis;

var arraySlice$7 = uncurryThis$i([].slice);

var $TypeError$7 = TypeError;

var validateArgumentsLength$3 = function (passed, required) {
  if (passed < required) throw $TypeError$7('Not enough arguments');
  return passed;
};

var userAgent$5 = engineUserAgent;

var engineIsIos = /(?:ipad|iphone|ipod).*applewebkit/i.test(userAgent$5);

var global$h = global$s;

var apply$5 = functionApply;

var bind$p = functionBindContext;

var isCallable$8 = isCallable$n;

var hasOwn$b = hasOwnProperty_1;

var fails$m = fails$y;

var html = html$2;

var arraySlice$6 = arraySlice$7;

var createElement = documentCreateElement$1;

var validateArgumentsLength$2 = validateArgumentsLength$3;

var IS_IOS$1 = engineIsIos;

var IS_NODE$4 = engineIsNode;

var set$3 = global$h.setImmediate;
var clear = global$h.clearImmediate;
var process$2 = global$h.process;
var Dispatch = global$h.Dispatch;
var Function$2 = global$h.Function;
var MessageChannel = global$h.MessageChannel;
var String$1 = global$h.String;
var counter = 0;
var queue$1 = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var location, defer, channel, port;

try {
  // Deno throws a ReferenceError on `location` access without `--location` flag
  location = global$h.location;
} catch (error) {
  /* empty */
}

var run = function (id) {
  if (hasOwn$b(queue$1, id)) {
    var fn = queue$1[id];
    delete queue$1[id];
    fn();
  }
};

var runner = function (id) {
  return function () {
    run(id);
  };
};

var listener = function (event) {
  run(event.data);
};

var post = function (id) {
  // old engines have not location.origin
  global$h.postMessage(String$1(id), location.protocol + '//' + location.host);
}; // Node.js 0.9+ & IE10+ has setImmediate, otherwise:


if (!set$3 || !clear) {
  set$3 = function setImmediate(handler) {
    validateArgumentsLength$2(arguments.length, 1);
    var fn = isCallable$8(handler) ? handler : Function$2(handler);
    var args = arraySlice$6(arguments, 1);

    queue$1[++counter] = function () {
      apply$5(fn, undefined, args);
    };

    defer(counter);
    return counter;
  };

  clear = function clearImmediate(id) {
    delete queue$1[id];
  }; // Node.js 0.8-


  if (IS_NODE$4) {
    defer = function (id) {
      process$2.nextTick(runner(id));
    }; // Sphere (JS game engine) Dispatch API

  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(runner(id));
    }; // Browsers with MessageChannel, includes WebWorkers
    // except iOS - https://github.com/zloirock/core-js/issues/624

  } else if (MessageChannel && !IS_IOS$1) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = bind$p(port.postMessage, port); // Browsers with postMessage, skip WebWorkers
    // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global$h.addEventListener && isCallable$8(global$h.postMessage) && !global$h.importScripts && location && location.protocol !== 'file:' && !fails$m(post)) {
    defer = post;
    global$h.addEventListener('message', listener, false); // IE8-
  } else if (ONREADYSTATECHANGE in createElement('script')) {
    defer = function (id) {
      html.appendChild(createElement('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run(id);
      };
    }; // Rest old browsers

  } else {
    defer = function (id) {
      setTimeout(runner(id), 0);
    };
  }
}

var task$1 = {
  set: set$3,
  clear: clear
};

var userAgent$4 = engineUserAgent;

var global$g = global$s;

var engineIsIosPebble = /ipad|iphone|ipod/i.test(userAgent$4) && global$g.Pebble !== undefined;

var userAgent$3 = engineUserAgent;

var engineIsWebosWebkit = /web0s(?!.*chrome)/i.test(userAgent$3);

var global$f = global$s;

var bind$o = functionBindContext;

var getOwnPropertyDescriptor$9 = objectGetOwnPropertyDescriptor.f;

var macrotask = task$1.set;

var IS_IOS = engineIsIos;

var IS_IOS_PEBBLE = engineIsIosPebble;

var IS_WEBOS_WEBKIT = engineIsWebosWebkit;

var IS_NODE$3 = engineIsNode;

var MutationObserver = global$f.MutationObserver || global$f.WebKitMutationObserver;
var document$2 = global$f.document;
var process$1 = global$f.process;
var Promise$1 = global$f.Promise; // Node.js 11 shows ExperimentalWarning on getting `queueMicrotask`

var queueMicrotaskDescriptor = getOwnPropertyDescriptor$9(global$f, 'queueMicrotask');
var queueMicrotask = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value;
var flush, head, last, notify$1, toggle, node, promise$5, then; // modern engines have queueMicrotask method

if (!queueMicrotask) {
  flush = function () {
    var parent, fn;
    if (IS_NODE$3 && (parent = process$1.domain)) parent.exit();

    while (head) {
      fn = head.fn;
      head = head.next;

      try {
        fn();
      } catch (error) {
        if (head) notify$1();else last = undefined;
        throw error;
      }
    }

    last = undefined;
    if (parent) parent.enter();
  }; // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339
  // also except WebOS Webkit https://github.com/zloirock/core-js/issues/898


  if (!IS_IOS && !IS_NODE$3 && !IS_WEBOS_WEBKIT && MutationObserver && document$2) {
    toggle = true;
    node = document$2.createTextNode('');
    new MutationObserver(flush).observe(node, {
      characterData: true
    });

    notify$1 = function () {
      node.data = toggle = !toggle;
    }; // environments with maybe non-completely correct, but existent Promise

  } else if (!IS_IOS_PEBBLE && Promise$1 && Promise$1.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    promise$5 = Promise$1.resolve(undefined); // workaround of WebKit ~ iOS Safari 10.1 bug

    promise$5.constructor = Promise$1;
    then = bind$o(promise$5.then, promise$5);

    notify$1 = function () {
      then(flush);
    }; // Node.js without promises

  } else if (IS_NODE$3) {
    notify$1 = function () {
      process$1.nextTick(flush);
    }; // for other environments - macrotask based on:
    // - setImmediate
    // - MessageChannel
    // - window.postMessage
    // - onreadystatechange
    // - setTimeout

  } else {
    // strange IE + webpack dev server bug - use .bind(global)
    macrotask = bind$o(macrotask, global$f);

    notify$1 = function () {
      macrotask(flush);
    };
  }
}

var microtask$1 = queueMicrotask || function (fn) {
  var task = {
    fn: fn,
    next: undefined
  };
  if (last) last.next = task;

  if (!head) {
    head = task;
    notify$1();
  }

  last = task;
};

var global$e = global$s;

var hostReportErrors$1 = function (a, b) {
  var console = global$e.console;

  if (console && console.error) {
    arguments.length == 1 ? console.error(a) : console.error(a, b);
  }
};

var perform$6 = function (exec) {
  try {
    return {
      error: false,
      value: exec()
    };
  } catch (error) {
    return {
      error: true,
      value: error
    };
  }
};

var Queue$1 = function () {
  this.head = null;
  this.tail = null;
};

Queue$1.prototype = {
  add: function (item) {
    var entry = {
      item: item,
      next: null
    };
    if (this.head) this.tail.next = entry;else this.head = entry;
    this.tail = entry;
  },
  get: function () {
    var entry = this.head;

    if (entry) {
      this.head = entry.next;
      if (this.tail === entry) this.tail = null;
      return entry.item;
    }
  }
};
var queue = Queue$1;

var global$d = global$s;

var promiseNativeConstructor = global$d.Promise;

/* global Deno -- Deno case */

var engineIsDeno = typeof Deno == 'object' && Deno && typeof Deno.version == 'object';

var IS_DENO$1 = engineIsDeno;

var IS_NODE$2 = engineIsNode;

var engineIsBrowser = !IS_DENO$1 && !IS_NODE$2 && typeof window == 'object' && typeof document == 'object';

var global$c = global$s;

var NativePromiseConstructor$5 = promiseNativeConstructor;

var isCallable$7 = isCallable$n;

var isForced = isForced_1;

var inspectSource = inspectSource$3;

var wellKnownSymbol$d = wellKnownSymbol$p;

var IS_BROWSER = engineIsBrowser;

var IS_DENO = engineIsDeno;

var V8_VERSION$2 = engineV8Version;

var NativePromisePrototype$2 = NativePromiseConstructor$5 && NativePromiseConstructor$5.prototype;
var SPECIES$3 = wellKnownSymbol$d('species');
var SUBCLASSING = false;
var NATIVE_PROMISE_REJECTION_EVENT$1 = isCallable$7(global$c.PromiseRejectionEvent);
var FORCED_PROMISE_CONSTRUCTOR$5 = isForced('Promise', function () {
  var PROMISE_CONSTRUCTOR_SOURCE = inspectSource(NativePromiseConstructor$5);
  var GLOBAL_CORE_JS_PROMISE = PROMISE_CONSTRUCTOR_SOURCE !== String(NativePromiseConstructor$5); // V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
  // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
  // We can't detect it synchronously, so just check versions

  if (!GLOBAL_CORE_JS_PROMISE && V8_VERSION$2 === 66) return true; // We need Promise#{ catch, finally } in the pure version for preventing prototype pollution

  if (!(NativePromisePrototype$2['catch'] && NativePromisePrototype$2['finally'])) return true; // We can't use @@species feature detection in V8 since it causes
  // deoptimization and performance degradation
  // https://github.com/zloirock/core-js/issues/679

  if (!V8_VERSION$2 || V8_VERSION$2 < 51 || !/native code/.test(PROMISE_CONSTRUCTOR_SOURCE)) {
    // Detect correctness of subclassing with @@species support
    var promise = new NativePromiseConstructor$5(function (resolve) {
      resolve(1);
    });

    var FakePromise = function (exec) {
      exec(function () {
        /* empty */
      }, function () {
        /* empty */
      });
    };

    var constructor = promise.constructor = {};
    constructor[SPECIES$3] = FakePromise;
    SUBCLASSING = promise.then(function () {
      /* empty */
    }) instanceof FakePromise;
    if (!SUBCLASSING) return true; // Unhandled rejections tracking support, NodeJS Promise without it fails @@species test
  }

  return !GLOBAL_CORE_JS_PROMISE && (IS_BROWSER || IS_DENO) && !NATIVE_PROMISE_REJECTION_EVENT$1;
});
var promiseConstructorDetection = {
  CONSTRUCTOR: FORCED_PROMISE_CONSTRUCTOR$5,
  REJECTION_EVENT: NATIVE_PROMISE_REJECTION_EVENT$1,
  SUBCLASSING: SUBCLASSING
};

var newPromiseCapability$2 = {};

var aCallable$k = aCallable$o;

var PromiseCapability = function (C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aCallable$k(resolve);
  this.reject = aCallable$k(reject);
}; // `NewPromiseCapability` abstract operation
// https://tc39.es/ecma262/#sec-newpromisecapability


newPromiseCapability$2.f = function (C) {
  return new PromiseCapability(C);
};

var $$1l = _export;

var IS_NODE$1 = engineIsNode;

var global$b = global$s;

var call$m = functionCall;

var defineBuiltIn$4 = defineBuiltIn$7;

var setToStringTag$5 = setToStringTag$8;

var setSpecies$1 = setSpecies$2;

var aCallable$j = aCallable$o;

var isCallable$6 = isCallable$n;

var isObject$d = isObject$k;

var anInstance$3 = anInstance$4;

var speciesConstructor$4 = speciesConstructor$5;

var task = task$1.set;

var microtask = microtask$1;

var hostReportErrors = hostReportErrors$1;

var perform$5 = perform$6;

var Queue = queue;

var InternalStateModule$5 = internalState;

var NativePromiseConstructor$4 = promiseNativeConstructor;

var PromiseConstructorDetection = promiseConstructorDetection;

var newPromiseCapabilityModule$6 = newPromiseCapability$2;

var PROMISE = 'Promise';
var FORCED_PROMISE_CONSTRUCTOR$4 = PromiseConstructorDetection.CONSTRUCTOR;
var NATIVE_PROMISE_REJECTION_EVENT = PromiseConstructorDetection.REJECTION_EVENT;
var getInternalPromiseState = InternalStateModule$5.getterFor(PROMISE);
var setInternalState$5 = InternalStateModule$5.set;
var NativePromisePrototype$1 = NativePromiseConstructor$4 && NativePromiseConstructor$4.prototype;
var PromiseConstructor = NativePromiseConstructor$4;
var PromisePrototype = NativePromisePrototype$1;
var TypeError$3 = global$b.TypeError;
var document$1 = global$b.document;
var process = global$b.process;
var newPromiseCapability$1 = newPromiseCapabilityModule$6.f;
var newGenericPromiseCapability = newPromiseCapability$1;
var DISPATCH_EVENT = !!(document$1 && document$1.createEvent && global$b.dispatchEvent);
var UNHANDLED_REJECTION = 'unhandledrejection';
var REJECTION_HANDLED = 'rejectionhandled';
var PENDING = 0;
var FULFILLED = 1;
var REJECTED = 2;
var HANDLED = 1;
var UNHANDLED = 2;
var Internal, OwnPromiseCapability, PromiseWrapper; // helpers

var isThenable = function (it) {
  var then;
  return isObject$d(it) && isCallable$6(then = it.then) ? then : false;
};

var callReaction = function (reaction, state) {
  var value = state.value;
  var ok = state.state == FULFILLED;
  var handler = ok ? reaction.ok : reaction.fail;
  var resolve = reaction.resolve;
  var reject = reaction.reject;
  var domain = reaction.domain;
  var result, then, exited;

  try {
    if (handler) {
      if (!ok) {
        if (state.rejection === UNHANDLED) onHandleUnhandled(state);
        state.rejection = HANDLED;
      }

      if (handler === true) result = value;else {
        if (domain) domain.enter();
        result = handler(value); // can throw

        if (domain) {
          domain.exit();
          exited = true;
        }
      }

      if (result === reaction.promise) {
        reject(TypeError$3('Promise-chain cycle'));
      } else if (then = isThenable(result)) {
        call$m(then, result, resolve, reject);
      } else resolve(result);
    } else reject(value);
  } catch (error) {
    if (domain && !exited) domain.exit();
    reject(error);
  }
};

var notify = function (state, isReject) {
  if (state.notified) return;
  state.notified = true;
  microtask(function () {
    var reactions = state.reactions;
    var reaction;

    while (reaction = reactions.get()) {
      callReaction(reaction, state);
    }

    state.notified = false;
    if (isReject && !state.rejection) onUnhandled(state);
  });
};

var dispatchEvent = function (name, promise, reason) {
  var event, handler;

  if (DISPATCH_EVENT) {
    event = document$1.createEvent('Event');
    event.promise = promise;
    event.reason = reason;
    event.initEvent(name, false, true);
    global$b.dispatchEvent(event);
  } else event = {
    promise: promise,
    reason: reason
  };

  if (!NATIVE_PROMISE_REJECTION_EVENT && (handler = global$b['on' + name])) handler(event);else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);
};

var onUnhandled = function (state) {
  call$m(task, global$b, function () {
    var promise = state.facade;
    var value = state.value;
    var IS_UNHANDLED = isUnhandled(state);
    var result;

    if (IS_UNHANDLED) {
      result = perform$5(function () {
        if (IS_NODE$1) {
          process.emit('unhandledRejection', value, promise);
        } else dispatchEvent(UNHANDLED_REJECTION, promise, value);
      }); // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should

      state.rejection = IS_NODE$1 || isUnhandled(state) ? UNHANDLED : HANDLED;
      if (result.error) throw result.value;
    }
  });
};

var isUnhandled = function (state) {
  return state.rejection !== HANDLED && !state.parent;
};

var onHandleUnhandled = function (state) {
  call$m(task, global$b, function () {
    var promise = state.facade;

    if (IS_NODE$1) {
      process.emit('rejectionHandled', promise);
    } else dispatchEvent(REJECTION_HANDLED, promise, state.value);
  });
};

var bind$n = function (fn, state, unwrap) {
  return function (value) {
    fn(state, value, unwrap);
  };
};

var internalReject = function (state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  state.value = value;
  state.state = REJECTED;
  notify(state, true);
};

var internalResolve = function (state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;

  try {
    if (state.facade === value) throw TypeError$3("Promise can't be resolved itself");
    var then = isThenable(value);

    if (then) {
      microtask(function () {
        var wrapper = {
          done: false
        };

        try {
          call$m(then, value, bind$n(internalResolve, wrapper, state), bind$n(internalReject, wrapper, state));
        } catch (error) {
          internalReject(wrapper, error, state);
        }
      });
    } else {
      state.value = value;
      state.state = FULFILLED;
      notify(state, false);
    }
  } catch (error) {
    internalReject({
      done: false
    }, error, state);
  }
}; // constructor polyfill


if (FORCED_PROMISE_CONSTRUCTOR$4) {
  // 25.4.3.1 Promise(executor)
  PromiseConstructor = function Promise(executor) {
    anInstance$3(this, PromisePrototype);
    aCallable$j(executor);
    call$m(Internal, this);
    var state = getInternalPromiseState(this);

    try {
      executor(bind$n(internalResolve, state), bind$n(internalReject, state));
    } catch (error) {
      internalReject(state, error);
    }
  };

  PromisePrototype = PromiseConstructor.prototype; // eslint-disable-next-line no-unused-vars -- required for `.length`

  Internal = function Promise(executor) {
    setInternalState$5(this, {
      type: PROMISE,
      done: false,
      notified: false,
      parent: false,
      reactions: new Queue(),
      rejection: false,
      state: PENDING,
      value: undefined
    });
  }; // `Promise.prototype.then` method
  // https://tc39.es/ecma262/#sec-promise.prototype.then


  Internal.prototype = defineBuiltIn$4(PromisePrototype, 'then', function then(onFulfilled, onRejected) {
    var state = getInternalPromiseState(this);
    var reaction = newPromiseCapability$1(speciesConstructor$4(this, PromiseConstructor));
    state.parent = true;
    reaction.ok = isCallable$6(onFulfilled) ? onFulfilled : true;
    reaction.fail = isCallable$6(onRejected) && onRejected;
    reaction.domain = IS_NODE$1 ? process.domain : undefined;
    if (state.state == PENDING) state.reactions.add(reaction);else microtask(function () {
      callReaction(reaction, state);
    });
    return reaction.promise;
  });

  OwnPromiseCapability = function () {
    var promise = new Internal();
    var state = getInternalPromiseState(promise);
    this.promise = promise;
    this.resolve = bind$n(internalResolve, state);
    this.reject = bind$n(internalReject, state);
  };

  newPromiseCapabilityModule$6.f = newPromiseCapability$1 = function (C) {
    return C === PromiseConstructor || C === PromiseWrapper ? new OwnPromiseCapability(C) : newGenericPromiseCapability(C);
  };
}

$$1l({
  global: true,
  constructor: true,
  wrap: true,
  forced: FORCED_PROMISE_CONSTRUCTOR$4
}, {
  Promise: PromiseConstructor
});
setToStringTag$5(PromiseConstructor, PROMISE, false, true);
setSpecies$1(PROMISE);

var wellKnownSymbol$c = wellKnownSymbol$p;

var ITERATOR$3 = wellKnownSymbol$c('iterator');
var SAFE_CLOSING = false;

try {
  var called = 0;
  var iteratorWithReturn = {
    next: function () {
      return {
        done: !!called++
      };
    },
    'return': function () {
      SAFE_CLOSING = true;
    }
  };

  iteratorWithReturn[ITERATOR$3] = function () {
    return this;
  }; // eslint-disable-next-line es-x/no-array-from, no-throw-literal -- required for testing


  Array.from(iteratorWithReturn, function () {
    throw 2;
  });
} catch (error) {
  /* empty */
}

var checkCorrectnessOfIteration$2 = function (exec, SKIP_CLOSING) {
  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  var ITERATION_SUPPORT = false;

  try {
    var object = {};

    object[ITERATOR$3] = function () {
      return {
        next: function () {
          return {
            done: ITERATION_SUPPORT = true
          };
        }
      };
    };

    exec(object);
  } catch (error) {
    /* empty */
  }

  return ITERATION_SUPPORT;
};

var NativePromiseConstructor$3 = promiseNativeConstructor;

var checkCorrectnessOfIteration$1 = checkCorrectnessOfIteration$2;

var FORCED_PROMISE_CONSTRUCTOR$3 = promiseConstructorDetection.CONSTRUCTOR;

var promiseStaticsIncorrectIteration = FORCED_PROMISE_CONSTRUCTOR$3 || !checkCorrectnessOfIteration$1(function (iterable) {
  NativePromiseConstructor$3.all(iterable).then(undefined, function () {
    /* empty */
  });
});

var $$1k = _export;

var call$l = functionCall;

var aCallable$i = aCallable$o;

var newPromiseCapabilityModule$5 = newPromiseCapability$2;

var perform$4 = perform$6;

var iterate$j = iterate$l;

var PROMISE_STATICS_INCORRECT_ITERATION$1 = promiseStaticsIncorrectIteration; // `Promise.all` method
// https://tc39.es/ecma262/#sec-promise.all


$$1k({
  target: 'Promise',
  stat: true,
  forced: PROMISE_STATICS_INCORRECT_ITERATION$1
}, {
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapabilityModule$5.f(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform$4(function () {
      var $promiseResolve = aCallable$i(C.resolve);
      var values = [];
      var counter = 0;
      var remaining = 1;
      iterate$j(iterable, function (promise) {
        var index = counter++;
        var alreadyCalled = false;
        remaining++;
        call$l($promiseResolve, C, promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});

var $$1j = _export;

var FORCED_PROMISE_CONSTRUCTOR$2 = promiseConstructorDetection.CONSTRUCTOR;

var NativePromiseConstructor$2 = promiseNativeConstructor;

NativePromiseConstructor$2 && NativePromiseConstructor$2.prototype; // `Promise.prototype.catch` method
// https://tc39.es/ecma262/#sec-promise.prototype.catch

$$1j({
  target: 'Promise',
  proto: true,
  forced: FORCED_PROMISE_CONSTRUCTOR$2,
  real: true
}, {
  'catch': function (onRejected) {
    return this.then(undefined, onRejected);
  }
}); // makes sure that native promise-based APIs `Promise#catch` properly works with patched `Promise#then`

var $$1i = _export;

var call$k = functionCall;

var aCallable$h = aCallable$o;

var newPromiseCapabilityModule$4 = newPromiseCapability$2;

var perform$3 = perform$6;

var iterate$i = iterate$l;

var PROMISE_STATICS_INCORRECT_ITERATION = promiseStaticsIncorrectIteration; // `Promise.race` method
// https://tc39.es/ecma262/#sec-promise.race


$$1i({
  target: 'Promise',
  stat: true,
  forced: PROMISE_STATICS_INCORRECT_ITERATION
}, {
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapabilityModule$4.f(C);
    var reject = capability.reject;
    var result = perform$3(function () {
      var $promiseResolve = aCallable$h(C.resolve);
      iterate$i(iterable, function (promise) {
        call$k($promiseResolve, C, promise).then(capability.resolve, reject);
      });
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});

var $$1h = _export;

var call$j = functionCall;

var newPromiseCapabilityModule$3 = newPromiseCapability$2;

var FORCED_PROMISE_CONSTRUCTOR$1 = promiseConstructorDetection.CONSTRUCTOR; // `Promise.reject` method
// https://tc39.es/ecma262/#sec-promise.reject


$$1h({
  target: 'Promise',
  stat: true,
  forced: FORCED_PROMISE_CONSTRUCTOR$1
}, {
  reject: function reject(r) {
    var capability = newPromiseCapabilityModule$3.f(this);
    call$j(capability.reject, undefined, r);
    return capability.promise;
  }
});

var anObject$k = anObject$u;

var isObject$c = isObject$k;

var newPromiseCapability = newPromiseCapability$2;

var promiseResolve$2 = function (C, x) {
  anObject$k(C);
  if (isObject$c(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};

var $$1g = _export;

var getBuiltIn$a = getBuiltIn$h;

var IS_PURE$1 = isPure;

var NativePromiseConstructor$1 = promiseNativeConstructor;

var FORCED_PROMISE_CONSTRUCTOR = promiseConstructorDetection.CONSTRUCTOR;

var promiseResolve$1 = promiseResolve$2;

var PromiseConstructorWrapper = getBuiltIn$a('Promise');
var CHECK_WRAPPER = !FORCED_PROMISE_CONSTRUCTOR; // `Promise.resolve` method
// https://tc39.es/ecma262/#sec-promise.resolve

$$1g({
  target: 'Promise',
  stat: true,
  forced: IS_PURE$1 
}, {
  resolve: function resolve(x) {
    return promiseResolve$1(CHECK_WRAPPER && this === PromiseConstructorWrapper ? NativePromiseConstructor$1 : this, x);
  }
});

var $$1f = _export;

var call$i = functionCall;

var aCallable$g = aCallable$o;

var newPromiseCapabilityModule$2 = newPromiseCapability$2;

var perform$2 = perform$6;

var iterate$h = iterate$l; // `Promise.allSettled` method
// https://tc39.es/ecma262/#sec-promise.allsettled


$$1f({
  target: 'Promise',
  stat: true
}, {
  allSettled: function allSettled(iterable) {
    var C = this;
    var capability = newPromiseCapabilityModule$2.f(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform$2(function () {
      var promiseResolve = aCallable$g(C.resolve);
      var values = [];
      var counter = 0;
      var remaining = 1;
      iterate$h(iterable, function (promise) {
        var index = counter++;
        var alreadyCalled = false;
        remaining++;
        call$i(promiseResolve, C, promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[index] = {
            status: 'fulfilled',
            value: value
          };
          --remaining || resolve(values);
        }, function (error) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[index] = {
            status: 'rejected',
            reason: error
          };
          --remaining || resolve(values);
        });
      });
      --remaining || resolve(values);
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});

var $$1e = _export;

var call$h = functionCall;

var aCallable$f = aCallable$o;

var getBuiltIn$9 = getBuiltIn$h;

var newPromiseCapabilityModule$1 = newPromiseCapability$2;

var perform$1 = perform$6;

var iterate$g = iterate$l;

var PROMISE_ANY_ERROR = 'No one promise resolved'; // `Promise.any` method
// https://tc39.es/ecma262/#sec-promise.any

$$1e({
  target: 'Promise',
  stat: true
}, {
  any: function any(iterable) {
    var C = this;
    var AggregateError = getBuiltIn$9('AggregateError');
    var capability = newPromiseCapabilityModule$1.f(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform$1(function () {
      var promiseResolve = aCallable$f(C.resolve);
      var errors = [];
      var counter = 0;
      var remaining = 1;
      var alreadyResolved = false;
      iterate$g(iterable, function (promise) {
        var index = counter++;
        var alreadyRejected = false;
        remaining++;
        call$h(promiseResolve, C, promise).then(function (value) {
          if (alreadyRejected || alreadyResolved) return;
          alreadyResolved = true;
          resolve(value);
        }, function (error) {
          if (alreadyRejected || alreadyResolved) return;
          alreadyRejected = true;
          errors[index] = error;
          --remaining || reject(new AggregateError(errors, PROMISE_ANY_ERROR));
        });
      });
      --remaining || reject(new AggregateError(errors, PROMISE_ANY_ERROR));
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});

var $$1d = _export;

var NativePromiseConstructor = promiseNativeConstructor;

var fails$l = fails$y;

var getBuiltIn$8 = getBuiltIn$h;

var isCallable$5 = isCallable$n;

var speciesConstructor$3 = speciesConstructor$5;

var promiseResolve = promiseResolve$2;

var NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype; // Safari bug https://bugs.webkit.org/show_bug.cgi?id=200829

var NON_GENERIC = !!NativePromiseConstructor && fails$l(function () {
  // eslint-disable-next-line unicorn/no-thenable -- required for testing
  NativePromisePrototype['finally'].call({
    then: function () {
      /* empty */
    }
  }, function () {
    /* empty */
  });
}); // `Promise.prototype.finally` method
// https://tc39.es/ecma262/#sec-promise.prototype.finally

$$1d({
  target: 'Promise',
  proto: true,
  real: true,
  forced: NON_GENERIC
}, {
  'finally': function (onFinally) {
    var C = speciesConstructor$3(this, getBuiltIn$8('Promise'));
    var isFunction = isCallable$5(onFinally);
    return this.then(isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () {
        return x;
      });
    } : onFinally, isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () {
        throw e;
      });
    } : onFinally);
  }
}); // makes sure that native promise-based APIs `Promise#finally` properly works with patched `Promise#then`

var uncurryThis$h = functionUncurryThis;

var toIntegerOrInfinity$3 = toIntegerOrInfinity$6;

var toString$7 = toString$a;

var requireObjectCoercible$3 = requireObjectCoercible$6;

var charAt$3 = uncurryThis$h(''.charAt);
var charCodeAt$1 = uncurryThis$h(''.charCodeAt);
var stringSlice$1 = uncurryThis$h(''.slice);

var createMethod$4 = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = toString$7(requireObjectCoercible$3($this));
    var position = toIntegerOrInfinity$3(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = charCodeAt$1(S, position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size || (second = charCodeAt$1(S, position + 1)) < 0xDC00 || second > 0xDFFF ? CONVERT_TO_STRING ? charAt$3(S, position) : first : CONVERT_TO_STRING ? stringSlice$1(S, position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

var stringMultibyte = {
  // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod$4(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod$4(true)
};

var charAt$2 = stringMultibyte.charAt;

var toString$6 = toString$a;

var InternalStateModule$4 = internalState;

var defineIterator$1 = defineIterator$3;

var STRING_ITERATOR = 'String Iterator';
var setInternalState$4 = InternalStateModule$4.set;
var getInternalState$1 = InternalStateModule$4.getterFor(STRING_ITERATOR); // `String.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-string.prototype-@@iterator

defineIterator$1(String, 'String', function (iterated) {
  setInternalState$4(this, {
    type: STRING_ITERATOR,
    string: toString$6(iterated),
    index: 0
  }); // `%StringIteratorPrototype%.next` method
  // https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next
}, function next() {
  var state = getInternalState$1(this);
  var string = state.string;
  var index = state.index;
  var point;
  if (index >= string.length) return {
    value: undefined,
    done: true
  };
  point = charAt$2(string, index);
  state.index += point.length;
  return {
    value: point,
    done: false
  };
});

var path$u = path$x;

var promise$4 = path$u.Promise;

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
var domIterables = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};

var DOMIterables$3 = domIterables;

var global$a = global$s;

var classof$8 = classof$e;

var createNonEnumerableProperty$1 = createNonEnumerableProperty$8;

var Iterators = iterators;

var wellKnownSymbol$b = wellKnownSymbol$p;

var TO_STRING_TAG = wellKnownSymbol$b('toStringTag');

for (var COLLECTION_NAME in DOMIterables$3) {
  var Collection = global$a[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;

  if (CollectionPrototype && classof$8(CollectionPrototype) !== TO_STRING_TAG) {
    createNonEnumerableProperty$1(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
  }

  Iterators[COLLECTION_NAME] = Iterators.Array;
}

var parent$1y = promise$4;



var promise$3 = parent$1y;

var parent$1x = promise$3;

var promise$2 = parent$1x;

var $$1c = _export;

var newPromiseCapabilityModule = newPromiseCapability$2;

var perform = perform$6; // `Promise.try` method
// https://github.com/tc39/proposal-promise-try


$$1c({
  target: 'Promise',
  stat: true,
  forced: true
}, {
  'try': function (callbackfn) {
    var promiseCapability = newPromiseCapabilityModule.f(this);
    var result = perform(callbackfn);
    (result.error ? promiseCapability.reject : promiseCapability.resolve)(result.value);
    return promiseCapability.promise;
  }
});

var parent$1w = promise$2;

 // TODO: Remove from `core-js@4`








var promise$1 = parent$1w;

(function (module) {
	module.exports = promise$1;
} (promise$6));

(function (module) {
	module.exports = promise$6.exports;
} (promise$7));

var _Promise = /*@__PURE__*/getDefaultExportFromCjs(promise$7.exports);

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    _Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new _Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

var regeneratorRuntime$1 = {exports: {}};

var _typeof$1 = {exports: {}};

var symbol$6 = {exports: {}};

var symbol$5 = {exports: {}};

var classof$7 = classofRaw$1; // `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es-x/no-array-isarray -- safe


var isArray$e = Array.isArray || function isArray(argument) {
  return classof$7(argument) == 'Array';
};

var $TypeError$6 = TypeError;
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF; // 2 ** 53 - 1 == 9007199254740991

var doesNotExceedSafeInteger$2 = function (it) {
  if (it > MAX_SAFE_INTEGER) throw $TypeError$6('Maximum allowed index exceeded');
  return it;
};

var toPropertyKey$1 = toPropertyKey$4;

var definePropertyModule$1 = objectDefineProperty;

var createPropertyDescriptor$2 = createPropertyDescriptor$8;

var createProperty$5 = function (object, key, value) {
  var propertyKey = toPropertyKey$1(key);
  if (propertyKey in object) definePropertyModule$1.f(object, propertyKey, createPropertyDescriptor$2(0, value));else object[propertyKey] = value;
};

var isArray$d = isArray$e;

var isConstructor$2 = isConstructor$4;

var isObject$b = isObject$k;

var wellKnownSymbol$a = wellKnownSymbol$p;

var SPECIES$2 = wellKnownSymbol$a('species');
var $Array$3 = Array; // a part of `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate

var arraySpeciesConstructor$1 = function (originalArray) {
  var C;

  if (isArray$d(originalArray)) {
    C = originalArray.constructor; // cross-realm fallback

    if (isConstructor$2(C) && (C === $Array$3 || isArray$d(C.prototype))) C = undefined;else if (isObject$b(C)) {
      C = C[SPECIES$2];
      if (C === null) C = undefined;
    }
  }

  return C === undefined ? $Array$3 : C;
};

var arraySpeciesConstructor = arraySpeciesConstructor$1; // `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate


var arraySpeciesCreate$3 = function (originalArray, length) {
  return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
};

var fails$k = fails$y;

var wellKnownSymbol$9 = wellKnownSymbol$p;

var V8_VERSION$1 = engineV8Version;

var SPECIES$1 = wellKnownSymbol$9('species');

var arrayMethodHasSpeciesSupport$4 = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION$1 >= 51 || !fails$k(function () {
    var array = [];
    var constructor = array.constructor = {};

    constructor[SPECIES$1] = function () {
      return {
        foo: 1
      };
    };

    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};

var $$1b = _export;

var fails$j = fails$y;

var isArray$c = isArray$e;

var isObject$a = isObject$k;

var toObject$a = toObject$d;

var lengthOfArrayLike$a = lengthOfArrayLike$d;

var doesNotExceedSafeInteger$1 = doesNotExceedSafeInteger$2;

var createProperty$4 = createProperty$5;

var arraySpeciesCreate$2 = arraySpeciesCreate$3;

var arrayMethodHasSpeciesSupport$3 = arrayMethodHasSpeciesSupport$4;

var wellKnownSymbol$8 = wellKnownSymbol$p;

var V8_VERSION = engineV8Version;

var IS_CONCAT_SPREADABLE = wellKnownSymbol$8('isConcatSpreadable'); // We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679

var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails$j(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});
var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport$3('concat');

var isConcatSpreadable = function (O) {
  if (!isObject$a(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray$c(O);
};

var FORCED$6 = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT; // `Array.prototype.concat` method
// https://tc39.es/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species

$$1b({
  target: 'Array',
  proto: true,
  arity: 1,
  forced: FORCED$6
}, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  concat: function concat(arg) {
    var O = toObject$a(this);
    var A = arraySpeciesCreate$2(O, 0);
    var n = 0;
    var i, k, length, len, E;

    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];

      if (isConcatSpreadable(E)) {
        len = lengthOfArrayLike$a(E);
        doesNotExceedSafeInteger$1(n + len);

        for (k = 0; k < len; k++, n++) if (k in E) createProperty$4(A, n, E[k]);
      } else {
        doesNotExceedSafeInteger$1(n + 1);
        createProperty$4(A, n++, E);
      }
    }

    A.length = n;
    return A;
  }
});

var objectGetOwnPropertyNamesExternal = {};

var toAbsoluteIndex$3 = toAbsoluteIndex$5;

var lengthOfArrayLike$9 = lengthOfArrayLike$d;

var createProperty$3 = createProperty$5;

var $Array$2 = Array;
var max$1 = Math.max;

var arraySliceSimple = function (O, start, end) {
  var length = lengthOfArrayLike$9(O);
  var k = toAbsoluteIndex$3(start, length);
  var fin = toAbsoluteIndex$3(end === undefined ? length : end, length);
  var result = $Array$2(max$1(fin - k, 0));

  for (var n = 0; k < fin; k++, n++) createProperty$3(result, n, O[k]);

  result.length = n;
  return result;
};

/* eslint-disable es-x/no-object-getownpropertynames -- safe */

var classof$6 = classofRaw$1;

var toIndexedObject$6 = toIndexedObject$c;

var $getOwnPropertyNames$1 = objectGetOwnPropertyNames.f;

var arraySlice$5 = arraySliceSimple;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return $getOwnPropertyNames$1(it);
  } catch (error) {
    return arraySlice$5(windowNames);
  }
}; // fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window


objectGetOwnPropertyNamesExternal.f = function getOwnPropertyNames(it) {
  return windowNames && classof$6(it) == 'Window' ? getWindowNames(it) : $getOwnPropertyNames$1(toIndexedObject$6(it));
};

var wellKnownSymbolWrapped = {};

var wellKnownSymbol$7 = wellKnownSymbol$p;

wellKnownSymbolWrapped.f = wellKnownSymbol$7;

var path$t = path$x;

var hasOwn$a = hasOwnProperty_1;

var wrappedWellKnownSymbolModule$1 = wellKnownSymbolWrapped;

var defineProperty$d = objectDefineProperty.f;

var defineWellKnownSymbol$m = function (NAME) {
  var Symbol = path$t.Symbol || (path$t.Symbol = {});
  if (!hasOwn$a(Symbol, NAME)) defineProperty$d(Symbol, NAME, {
    value: wrappedWellKnownSymbolModule$1.f(NAME)
  });
};

var call$g = functionCall;

var getBuiltIn$7 = getBuiltIn$h;

var wellKnownSymbol$6 = wellKnownSymbol$p;

var defineBuiltIn$3 = defineBuiltIn$7;

var symbolDefineToPrimitive = function () {
  var Symbol = getBuiltIn$7('Symbol');
  var SymbolPrototype = Symbol && Symbol.prototype;
  var valueOf = SymbolPrototype && SymbolPrototype.valueOf;
  var TO_PRIMITIVE = wellKnownSymbol$6('toPrimitive');

  if (SymbolPrototype && !SymbolPrototype[TO_PRIMITIVE]) {
    // `Symbol.prototype[@@toPrimitive]` method
    // https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
    // eslint-disable-next-line no-unused-vars -- required for .length
    defineBuiltIn$3(SymbolPrototype, TO_PRIMITIVE, function (hint) {
      return call$g(valueOf, this);
    }, {
      arity: 1
    });
  }
};

var bind$m = functionBindContext;

var uncurryThis$g = functionUncurryThis;

var IndexedObject$2 = indexedObject;

var toObject$9 = toObject$d;

var lengthOfArrayLike$8 = lengthOfArrayLike$d;

var arraySpeciesCreate$1 = arraySpeciesCreate$3;

var push$7 = uncurryThis$g([].push); // `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterReject }` methods implementation

var createMethod$3 = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var IS_FILTER_REJECT = TYPE == 7;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject$9($this);
    var self = IndexedObject$2(O);
    var boundFunction = bind$m(callbackfn, that);
    var length = lengthOfArrayLike$8(self);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate$1;
    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_REJECT ? create($this, 0) : undefined;
    var value, result;

    for (; length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);

      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3:
            return true;
          // some

          case 5:
            return value;
          // find

          case 6:
            return index;
          // findIndex

          case 2:
            push$7(target, value);
          // filter
        } else switch (TYPE) {
          case 4:
            return false;
          // every

          case 7:
            push$7(target, value);
          // filterReject
        }
      }
    }

    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

var arrayIteration = {
  // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  forEach: createMethod$3(0),
  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  map: createMethod$3(1),
  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  filter: createMethod$3(2),
  // `Array.prototype.some` method
  // https://tc39.es/ecma262/#sec-array.prototype.some
  some: createMethod$3(3),
  // `Array.prototype.every` method
  // https://tc39.es/ecma262/#sec-array.prototype.every
  every: createMethod$3(4),
  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  find: createMethod$3(5),
  // `Array.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod$3(6),
  // `Array.prototype.filterReject` method
  // https://github.com/tc39/proposal-array-filtering
  filterReject: createMethod$3(7)
};

var $$1a = _export;

var global$9 = global$s;

var call$f = functionCall;

var uncurryThis$f = functionUncurryThis;

var DESCRIPTORS$a = descriptors;

var NATIVE_SYMBOL$3 = nativeSymbol;

var fails$i = fails$y;

var hasOwn$9 = hasOwnProperty_1;

var isPrototypeOf$n = objectIsPrototypeOf;

var anObject$j = anObject$u;

var toIndexedObject$5 = toIndexedObject$c;

var toPropertyKey = toPropertyKey$4;

var $toString$1 = toString$a;

var createPropertyDescriptor$1 = createPropertyDescriptor$8;

var nativeObjectCreate = objectCreate;

var objectKeys$2 = objectKeys$4;

var getOwnPropertyNamesModule$1 = objectGetOwnPropertyNames;

var getOwnPropertyNamesExternal = objectGetOwnPropertyNamesExternal;

var getOwnPropertySymbolsModule$2 = objectGetOwnPropertySymbols;

var getOwnPropertyDescriptorModule$2 = objectGetOwnPropertyDescriptor;

var definePropertyModule = objectDefineProperty;

var definePropertiesModule = objectDefineProperties;

var propertyIsEnumerableModule$1 = objectPropertyIsEnumerable;

var defineBuiltIn$2 = defineBuiltIn$7;

var shared$2 = shared$6.exports;

var sharedKey = sharedKey$4;

var hiddenKeys$1 = hiddenKeys$6;

var uid$1 = uid$4;

var wellKnownSymbol$5 = wellKnownSymbol$p;

var wrappedWellKnownSymbolModule = wellKnownSymbolWrapped;

var defineWellKnownSymbol$l = defineWellKnownSymbol$m;

var defineSymbolToPrimitive$1 = symbolDefineToPrimitive;

var setToStringTag$4 = setToStringTag$8;

var InternalStateModule$3 = internalState;

var $forEach$1 = arrayIteration.forEach;

var HIDDEN = sharedKey('hidden');
var SYMBOL = 'Symbol';
var PROTOTYPE = 'prototype';
var setInternalState$3 = InternalStateModule$3.set;
var getInternalState = InternalStateModule$3.getterFor(SYMBOL);
var ObjectPrototype$1 = Object[PROTOTYPE];
var $Symbol = global$9.Symbol;
var SymbolPrototype = $Symbol && $Symbol[PROTOTYPE];
var TypeError$2 = global$9.TypeError;
var QObject = global$9.QObject;
var nativeGetOwnPropertyDescriptor$1 = getOwnPropertyDescriptorModule$2.f;
var nativeDefineProperty = definePropertyModule.f;
var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
var nativePropertyIsEnumerable = propertyIsEnumerableModule$1.f;
var push$6 = uncurryThis$f([].push);
var AllSymbols = shared$2('symbols');
var ObjectPrototypeSymbols = shared$2('op-symbols');
var WellKnownSymbolsStore = shared$2('wks'); // Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173

var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild; // fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687

var setSymbolDescriptor = DESCRIPTORS$a && fails$i(function () {
  return nativeObjectCreate(nativeDefineProperty({}, 'a', {
    get: function () {
      return nativeDefineProperty(this, 'a', {
        value: 7
      }).a;
    }
  })).a != 7;
}) ? function (O, P, Attributes) {
  var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor$1(ObjectPrototype$1, P);
  if (ObjectPrototypeDescriptor) delete ObjectPrototype$1[P];
  nativeDefineProperty(O, P, Attributes);

  if (ObjectPrototypeDescriptor && O !== ObjectPrototype$1) {
    nativeDefineProperty(ObjectPrototype$1, P, ObjectPrototypeDescriptor);
  }
} : nativeDefineProperty;

var wrap$1 = function (tag, description) {
  var symbol = AllSymbols[tag] = nativeObjectCreate(SymbolPrototype);
  setInternalState$3(symbol, {
    type: SYMBOL,
    tag: tag,
    description: description
  });
  if (!DESCRIPTORS$a) symbol.description = description;
  return symbol;
};

var $defineProperty = function defineProperty(O, P, Attributes) {
  if (O === ObjectPrototype$1) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
  anObject$j(O);
  var key = toPropertyKey(P);
  anObject$j(Attributes);

  if (hasOwn$9(AllSymbols, key)) {
    if (!Attributes.enumerable) {
      if (!hasOwn$9(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor$1(1, {}));
      O[HIDDEN][key] = true;
    } else {
      if (hasOwn$9(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
      Attributes = nativeObjectCreate(Attributes, {
        enumerable: createPropertyDescriptor$1(0, false)
      });
    }

    return setSymbolDescriptor(O, key, Attributes);
  }

  return nativeDefineProperty(O, key, Attributes);
};

var $defineProperties = function defineProperties(O, Properties) {
  anObject$j(O);
  var properties = toIndexedObject$5(Properties);
  var keys = objectKeys$2(properties).concat($getOwnPropertySymbols(properties));
  $forEach$1(keys, function (key) {
    if (!DESCRIPTORS$a || call$f($propertyIsEnumerable$1, properties, key)) $defineProperty(O, key, properties[key]);
  });
  return O;
};

var $create = function create(O, Properties) {
  return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);
};

var $propertyIsEnumerable$1 = function propertyIsEnumerable(V) {
  var P = toPropertyKey(V);
  var enumerable = call$f(nativePropertyIsEnumerable, this, P);
  if (this === ObjectPrototype$1 && hasOwn$9(AllSymbols, P) && !hasOwn$9(ObjectPrototypeSymbols, P)) return false;
  return enumerable || !hasOwn$9(this, P) || !hasOwn$9(AllSymbols, P) || hasOwn$9(this, HIDDEN) && this[HIDDEN][P] ? enumerable : true;
};

var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
  var it = toIndexedObject$5(O);
  var key = toPropertyKey(P);
  if (it === ObjectPrototype$1 && hasOwn$9(AllSymbols, key) && !hasOwn$9(ObjectPrototypeSymbols, key)) return;
  var descriptor = nativeGetOwnPropertyDescriptor$1(it, key);

  if (descriptor && hasOwn$9(AllSymbols, key) && !(hasOwn$9(it, HIDDEN) && it[HIDDEN][key])) {
    descriptor.enumerable = true;
  }

  return descriptor;
};

var $getOwnPropertyNames = function getOwnPropertyNames(O) {
  var names = nativeGetOwnPropertyNames(toIndexedObject$5(O));
  var result = [];
  $forEach$1(names, function (key) {
    if (!hasOwn$9(AllSymbols, key) && !hasOwn$9(hiddenKeys$1, key)) push$6(result, key);
  });
  return result;
};

var $getOwnPropertySymbols = function (O) {
  var IS_OBJECT_PROTOTYPE = O === ObjectPrototype$1;
  var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject$5(O));
  var result = [];
  $forEach$1(names, function (key) {
    if (hasOwn$9(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || hasOwn$9(ObjectPrototype$1, key))) {
      push$6(result, AllSymbols[key]);
    }
  });
  return result;
}; // `Symbol` constructor
// https://tc39.es/ecma262/#sec-symbol-constructor


if (!NATIVE_SYMBOL$3) {
  $Symbol = function Symbol() {
    if (isPrototypeOf$n(SymbolPrototype, this)) throw TypeError$2('Symbol is not a constructor');
    var description = !arguments.length || arguments[0] === undefined ? undefined : $toString$1(arguments[0]);
    var tag = uid$1(description);

    var setter = function (value) {
      if (this === ObjectPrototype$1) call$f(setter, ObjectPrototypeSymbols, value);
      if (hasOwn$9(this, HIDDEN) && hasOwn$9(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDescriptor(this, tag, createPropertyDescriptor$1(1, value));
    };

    if (DESCRIPTORS$a && USE_SETTER) setSymbolDescriptor(ObjectPrototype$1, tag, {
      configurable: true,
      set: setter
    });
    return wrap$1(tag, description);
  };

  SymbolPrototype = $Symbol[PROTOTYPE];
  defineBuiltIn$2(SymbolPrototype, 'toString', function toString() {
    return getInternalState(this).tag;
  });
  defineBuiltIn$2($Symbol, 'withoutSetter', function (description) {
    return wrap$1(uid$1(description), description);
  });
  propertyIsEnumerableModule$1.f = $propertyIsEnumerable$1;
  definePropertyModule.f = $defineProperty;
  definePropertiesModule.f = $defineProperties;
  getOwnPropertyDescriptorModule$2.f = $getOwnPropertyDescriptor;
  getOwnPropertyNamesModule$1.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
  getOwnPropertySymbolsModule$2.f = $getOwnPropertySymbols;

  wrappedWellKnownSymbolModule.f = function (name) {
    return wrap$1(wellKnownSymbol$5(name), name);
  };

  if (DESCRIPTORS$a) {
    // https://github.com/tc39/proposal-Symbol-description
    nativeDefineProperty(SymbolPrototype, 'description', {
      configurable: true,
      get: function description() {
        return getInternalState(this).description;
      }
    });
  }
}

$$1a({
  global: true,
  constructor: true,
  wrap: true,
  forced: !NATIVE_SYMBOL$3,
  sham: !NATIVE_SYMBOL$3
}, {
  Symbol: $Symbol
});
$forEach$1(objectKeys$2(WellKnownSymbolsStore), function (name) {
  defineWellKnownSymbol$l(name);
});
$$1a({
  target: SYMBOL,
  stat: true,
  forced: !NATIVE_SYMBOL$3
}, {
  useSetter: function () {
    USE_SETTER = true;
  },
  useSimple: function () {
    USE_SETTER = false;
  }
});
$$1a({
  target: 'Object',
  stat: true,
  forced: !NATIVE_SYMBOL$3,
  sham: !DESCRIPTORS$a
}, {
  // `Object.create` method
  // https://tc39.es/ecma262/#sec-object.create
  create: $create,
  // `Object.defineProperty` method
  // https://tc39.es/ecma262/#sec-object.defineproperty
  defineProperty: $defineProperty,
  // `Object.defineProperties` method
  // https://tc39.es/ecma262/#sec-object.defineproperties
  defineProperties: $defineProperties,
  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor
});
$$1a({
  target: 'Object',
  stat: true,
  forced: !NATIVE_SYMBOL$3
}, {
  // `Object.getOwnPropertyNames` method
  // https://tc39.es/ecma262/#sec-object.getownpropertynames
  getOwnPropertyNames: $getOwnPropertyNames
}); // `Symbol.prototype[@@toPrimitive]` method
// https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive

defineSymbolToPrimitive$1(); // `Symbol.prototype[@@toStringTag]` property
// https://tc39.es/ecma262/#sec-symbol.prototype-@@tostringtag

setToStringTag$4($Symbol, SYMBOL);
hiddenKeys$1[HIDDEN] = true;

var NATIVE_SYMBOL$2 = nativeSymbol;
/* eslint-disable es-x/no-symbol -- safe */


var nativeSymbolRegistry = NATIVE_SYMBOL$2 && !!Symbol['for'] && !!Symbol.keyFor;

var $$19 = _export;

var getBuiltIn$6 = getBuiltIn$h;

var hasOwn$8 = hasOwnProperty_1;

var toString$5 = toString$a;

var shared$1 = shared$6.exports;

var NATIVE_SYMBOL_REGISTRY$1 = nativeSymbolRegistry;

var StringToSymbolRegistry = shared$1('string-to-symbol-registry');
var SymbolToStringRegistry$1 = shared$1('symbol-to-string-registry'); // `Symbol.for` method
// https://tc39.es/ecma262/#sec-symbol.for

$$19({
  target: 'Symbol',
  stat: true,
  forced: !NATIVE_SYMBOL_REGISTRY$1
}, {
  'for': function (key) {
    var string = toString$5(key);
    if (hasOwn$8(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
    var symbol = getBuiltIn$6('Symbol')(string);
    StringToSymbolRegistry[string] = symbol;
    SymbolToStringRegistry$1[symbol] = string;
    return symbol;
  }
});

var $$18 = _export;

var hasOwn$7 = hasOwnProperty_1;

var isSymbol$1 = isSymbol$4;

var tryToString$1 = tryToString$6;

var shared = shared$6.exports;

var NATIVE_SYMBOL_REGISTRY = nativeSymbolRegistry;

var SymbolToStringRegistry = shared('symbol-to-string-registry'); // `Symbol.keyFor` method
// https://tc39.es/ecma262/#sec-symbol.keyfor

$$18({
  target: 'Symbol',
  stat: true,
  forced: !NATIVE_SYMBOL_REGISTRY
}, {
  keyFor: function keyFor(sym) {
    if (!isSymbol$1(sym)) throw TypeError(tryToString$1(sym) + ' is not a symbol');
    if (hasOwn$7(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
  }
});

var $$17 = _export;

var getBuiltIn$5 = getBuiltIn$h;

var apply$4 = functionApply;

var call$e = functionCall;

var uncurryThis$e = functionUncurryThis;

var fails$h = fails$y;

var isArray$b = isArray$e;

var isCallable$4 = isCallable$n;

var isObject$9 = isObject$k;

var isSymbol = isSymbol$4;

var arraySlice$4 = arraySlice$7;

var NATIVE_SYMBOL$1 = nativeSymbol;

var $stringify = getBuiltIn$5('JSON', 'stringify');
var exec$1 = uncurryThis$e(/./.exec);
var charAt$1 = uncurryThis$e(''.charAt);
var charCodeAt = uncurryThis$e(''.charCodeAt);
var replace$2 = uncurryThis$e(''.replace);
var numberToString = uncurryThis$e(1.0.toString);
var tester = /[\uD800-\uDFFF]/g;
var low = /^[\uD800-\uDBFF]$/;
var hi$1 = /^[\uDC00-\uDFFF]$/;
var WRONG_SYMBOLS_CONVERSION = !NATIVE_SYMBOL$1 || fails$h(function () {
  var symbol = getBuiltIn$5('Symbol')(); // MS Edge converts symbol values to JSON as {}

  return $stringify([symbol]) != '[null]' // WebKit converts symbol values to JSON as null
  || $stringify({
    a: symbol
  }) != '{}' // V8 throws on boxed symbols
  || $stringify(Object(symbol)) != '{}';
}); // https://github.com/tc39/proposal-well-formed-stringify

var ILL_FORMED_UNICODE = fails$h(function () {
  return $stringify('\uDF06\uD834') !== '"\\udf06\\ud834"' || $stringify('\uDEAD') !== '"\\udead"';
});

var stringifyWithSymbolsFix = function (it, replacer) {
  var args = arraySlice$4(arguments);
  var $replacer = replacer;
  if (!isObject$9(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined

  if (!isArray$b(replacer)) replacer = function (key, value) {
    if (isCallable$4($replacer)) value = call$e($replacer, this, key, value);
    if (!isSymbol(value)) return value;
  };
  args[1] = replacer;
  return apply$4($stringify, null, args);
};

var fixIllFormed = function (match, offset, string) {
  var prev = charAt$1(string, offset - 1);
  var next = charAt$1(string, offset + 1);

  if (exec$1(low, match) && !exec$1(hi$1, next) || exec$1(hi$1, match) && !exec$1(low, prev)) {
    return '\\u' + numberToString(charCodeAt(match, 0), 16);
  }

  return match;
};

if ($stringify) {
  // `JSON.stringify` method
  // https://tc39.es/ecma262/#sec-json.stringify
  $$17({
    target: 'JSON',
    stat: true,
    arity: 3,
    forced: WRONG_SYMBOLS_CONVERSION || ILL_FORMED_UNICODE
  }, {
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    stringify: function stringify(it, replacer, space) {
      var args = arraySlice$4(arguments);
      var result = apply$4(WRONG_SYMBOLS_CONVERSION ? stringifyWithSymbolsFix : $stringify, null, args);
      return ILL_FORMED_UNICODE && typeof result == 'string' ? replace$2(result, tester, fixIllFormed) : result;
    }
  });
}

var $$16 = _export;

var NATIVE_SYMBOL = nativeSymbol;

var fails$g = fails$y;

var getOwnPropertySymbolsModule$1 = objectGetOwnPropertySymbols;

var toObject$8 = toObject$d; // V8 ~ Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443


var FORCED$5 = !NATIVE_SYMBOL || fails$g(function () {
  getOwnPropertySymbolsModule$1.f(1);
}); // `Object.getOwnPropertySymbols` method
// https://tc39.es/ecma262/#sec-object.getownpropertysymbols

$$16({
  target: 'Object',
  stat: true,
  forced: FORCED$5
}, {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    var $getOwnPropertySymbols = getOwnPropertySymbolsModule$1.f;
    return $getOwnPropertySymbols ? $getOwnPropertySymbols(toObject$8(it)) : [];
  }
});

var defineWellKnownSymbol$k = defineWellKnownSymbol$m; // `Symbol.asyncIterator` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.asynciterator


defineWellKnownSymbol$k('asyncIterator');

var defineWellKnownSymbol$j = defineWellKnownSymbol$m; // `Symbol.hasInstance` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.hasinstance


defineWellKnownSymbol$j('hasInstance');

var defineWellKnownSymbol$i = defineWellKnownSymbol$m; // `Symbol.isConcatSpreadable` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.isconcatspreadable


defineWellKnownSymbol$i('isConcatSpreadable');

var defineWellKnownSymbol$h = defineWellKnownSymbol$m; // `Symbol.iterator` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.iterator


defineWellKnownSymbol$h('iterator');

var defineWellKnownSymbol$g = defineWellKnownSymbol$m; // `Symbol.match` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.match


defineWellKnownSymbol$g('match');

var defineWellKnownSymbol$f = defineWellKnownSymbol$m; // `Symbol.matchAll` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.matchall


defineWellKnownSymbol$f('matchAll');

var defineWellKnownSymbol$e = defineWellKnownSymbol$m; // `Symbol.replace` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.replace


defineWellKnownSymbol$e('replace');

var defineWellKnownSymbol$d = defineWellKnownSymbol$m; // `Symbol.search` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.search


defineWellKnownSymbol$d('search');

var defineWellKnownSymbol$c = defineWellKnownSymbol$m; // `Symbol.species` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.species


defineWellKnownSymbol$c('species');

var defineWellKnownSymbol$b = defineWellKnownSymbol$m; // `Symbol.split` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.split


defineWellKnownSymbol$b('split');

var defineWellKnownSymbol$a = defineWellKnownSymbol$m;

var defineSymbolToPrimitive = symbolDefineToPrimitive; // `Symbol.toPrimitive` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.toprimitive


defineWellKnownSymbol$a('toPrimitive'); // `Symbol.prototype[@@toPrimitive]` method
// https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive

defineSymbolToPrimitive();

var getBuiltIn$4 = getBuiltIn$h;

var defineWellKnownSymbol$9 = defineWellKnownSymbol$m;

var setToStringTag$3 = setToStringTag$8; // `Symbol.toStringTag` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.tostringtag


defineWellKnownSymbol$9('toStringTag'); // `Symbol.prototype[@@toStringTag]` property
// https://tc39.es/ecma262/#sec-symbol.prototype-@@tostringtag

setToStringTag$3(getBuiltIn$4('Symbol'), 'Symbol');

var defineWellKnownSymbol$8 = defineWellKnownSymbol$m; // `Symbol.unscopables` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.unscopables


defineWellKnownSymbol$8('unscopables');

var global$8 = global$s;

var setToStringTag$2 = setToStringTag$8; // JSON[@@toStringTag] property
// https://tc39.es/ecma262/#sec-json-@@tostringtag


setToStringTag$2(global$8.JSON, 'JSON', true);

var path$s = path$x;

var symbol$4 = path$s.Symbol;

var parent$1v = symbol$4;



var symbol$3 = parent$1v;

var parent$1u = symbol$3;

var symbol$2 = parent$1u;

var defineWellKnownSymbol$7 = defineWellKnownSymbol$m; // `Symbol.asyncDispose` well-known symbol
// https://github.com/tc39/proposal-using-statement


defineWellKnownSymbol$7('asyncDispose');

var defineWellKnownSymbol$6 = defineWellKnownSymbol$m; // `Symbol.dispose` well-known symbol
// https://github.com/tc39/proposal-using-statement


defineWellKnownSymbol$6('dispose');

var defineWellKnownSymbol$5 = defineWellKnownSymbol$m; // `Symbol.matcher` well-known symbol
// https://github.com/tc39/proposal-pattern-matching


defineWellKnownSymbol$5('matcher');

var defineWellKnownSymbol$4 = defineWellKnownSymbol$m; // `Symbol.metadataKey` well-known symbol
// https://github.com/tc39/proposal-decorator-metadata


defineWellKnownSymbol$4('metadataKey');

var defineWellKnownSymbol$3 = defineWellKnownSymbol$m; // `Symbol.observable` well-known symbol
// https://github.com/tc39/proposal-observable


defineWellKnownSymbol$3('observable');

// TODO: Remove from `core-js@4`
var defineWellKnownSymbol$2 = defineWellKnownSymbol$m; // `Symbol.metadata` well-known symbol
// https://github.com/tc39/proposal-decorators


defineWellKnownSymbol$2('metadata');

// TODO: remove from `core-js@4`
var defineWellKnownSymbol$1 = defineWellKnownSymbol$m; // `Symbol.patternMatch` well-known symbol
// https://github.com/tc39/proposal-pattern-matching


defineWellKnownSymbol$1('patternMatch');

// TODO: remove from `core-js@4`
var defineWellKnownSymbol = defineWellKnownSymbol$m;

defineWellKnownSymbol('replaceAll');

var parent$1t = symbol$2;









 // TODO: Remove from `core-js@4`








var symbol$1 = parent$1t;

(function (module) {
	module.exports = symbol$1;
} (symbol$5));

(function (module) {
	module.exports = symbol$5.exports;
} (symbol$6));

var _Symbol = /*@__PURE__*/getDefaultExportFromCjs(symbol$6.exports);

var iterator$6 = {exports: {}};

var iterator$5 = {exports: {}};

var WrappedWellKnownSymbolModule = wellKnownSymbolWrapped;

var iterator$4 = WrappedWellKnownSymbolModule.f('iterator');

var parent$1s = iterator$4;



var iterator$3 = parent$1s;

var parent$1r = iterator$3;

var iterator$2 = parent$1r;

var parent$1q = iterator$2;

var iterator$1 = parent$1q;

(function (module) {
	module.exports = iterator$1;
} (iterator$5));

(function (module) {
	module.exports = iterator$5.exports;
} (iterator$6));

var _Symbol$iterator = /*@__PURE__*/getDefaultExportFromCjs(iterator$6.exports);

(function (module) {
	var _Symbol = symbol$6.exports;

	var _Symbol$iterator = iterator$6.exports;

	function _typeof(obj) {
	  "@babel/helpers - typeof";

	  return (module.exports = _typeof = "function" == typeof _Symbol && "symbol" == typeof _Symbol$iterator ? function (obj) {
	    return typeof obj;
	  } : function (obj) {
	    return obj && "function" == typeof _Symbol && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj;
	  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(obj);
	}

	module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;
} (_typeof$1));

var defineProperty$c = {exports: {}};

var defineProperty$b = {exports: {}};

var defineProperty$a = {exports: {}};

var $$15 = _export;

var DESCRIPTORS$9 = descriptors;

var defineProperty$9 = objectDefineProperty.f; // `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
// eslint-disable-next-line es-x/no-object-defineproperty -- safe


$$15({
  target: 'Object',
  stat: true,
  forced: Object.defineProperty !== defineProperty$9,
  sham: !DESCRIPTORS$9
}, {
  defineProperty: defineProperty$9
});

var path$r = path$x;

var Object$5 = path$r.Object;

var defineProperty$8 = defineProperty$a.exports = function defineProperty(it, key, desc) {
  return Object$5.defineProperty(it, key, desc);
};

if (Object$5.defineProperty.sham) defineProperty$8.sham = true;

var parent$1p = defineProperty$a.exports;

var defineProperty$7 = parent$1p;

var parent$1o = defineProperty$7;

var defineProperty$6 = parent$1o;

var parent$1n = defineProperty$6;

var defineProperty$5 = parent$1n;

(function (module) {
	module.exports = defineProperty$5;
} (defineProperty$b));

(function (module) {
	module.exports = defineProperty$b.exports;
} (defineProperty$c));

var _Object$defineProperty = /*@__PURE__*/getDefaultExportFromCjs(defineProperty$c.exports);

var create$a = {exports: {}};

var create$9 = {exports: {}};

// TODO: Remove from `core-js@4`
var $$14 = _export;

var DESCRIPTORS$8 = descriptors;

var create$8 = objectCreate; // `Object.create` method
// https://tc39.es/ecma262/#sec-object.create


$$14({
  target: 'Object',
  stat: true,
  sham: !DESCRIPTORS$8
}, {
  create: create$8
});

var path$q = path$x;

var Object$4 = path$q.Object;

var create$7 = function create(P, D) {
  return Object$4.create(P, D);
};

var parent$1m = create$7;

var create$6 = parent$1m;

var parent$1l = create$6;

var create$5 = parent$1l;

var parent$1k = create$5;

var create$4 = parent$1k;

(function (module) {
	module.exports = create$4;
} (create$9));

(function (module) {
	module.exports = create$9.exports;
} (create$a));

var _Object$create = /*@__PURE__*/getDefaultExportFromCjs(create$a.exports);

var getPrototypeOf$6 = {exports: {}};

var getPrototypeOf$5 = {exports: {}};

var $$13 = _export;

var fails$f = fails$y;

var toObject$7 = toObject$d;

var nativeGetPrototypeOf = objectGetPrototypeOf;

var CORRECT_PROTOTYPE_GETTER = correctPrototypeGetter;

var FAILS_ON_PRIMITIVES$4 = fails$f(function () {
  nativeGetPrototypeOf(1);
}); // `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof

$$13({
  target: 'Object',
  stat: true,
  forced: FAILS_ON_PRIMITIVES$4,
  sham: !CORRECT_PROTOTYPE_GETTER
}, {
  getPrototypeOf: function getPrototypeOf(it) {
    return nativeGetPrototypeOf(toObject$7(it));
  }
});

var path$p = path$x;

var getPrototypeOf$4 = path$p.Object.getPrototypeOf;

var parent$1j = getPrototypeOf$4;

var getPrototypeOf$3 = parent$1j;

var parent$1i = getPrototypeOf$3;

var getPrototypeOf$2 = parent$1i;

var parent$1h = getPrototypeOf$2;

var getPrototypeOf$1 = parent$1h;

(function (module) {
	module.exports = getPrototypeOf$1;
} (getPrototypeOf$5));

(function (module) {
	module.exports = getPrototypeOf$5.exports;
} (getPrototypeOf$6));

var _Object$getPrototypeOf = /*@__PURE__*/getDefaultExportFromCjs(getPrototypeOf$6.exports);

var forEach$9 = {exports: {}};

var forEach$8 = {exports: {}};

var fails$e = fails$y;

var arrayMethodIsStrict$7 = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails$e(function () {
    // eslint-disable-next-line no-useless-call -- required for testing
    method.call(null, argument || function () {
      return 1;
    }, 1);
  });
};

var $forEach = arrayIteration.forEach;

var arrayMethodIsStrict$6 = arrayMethodIsStrict$7;

var STRICT_METHOD$6 = arrayMethodIsStrict$6('forEach'); // `Array.prototype.forEach` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.foreach

var arrayForEach = !STRICT_METHOD$6 ? function forEach(callbackfn
/* , thisArg */
) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined); // eslint-disable-next-line es-x/no-array-prototype-foreach -- safe
} : [].forEach;

var $$12 = _export;

var forEach$7 = arrayForEach; // `Array.prototype.forEach` method
// https://tc39.es/ecma262/#sec-array.prototype.foreach
// eslint-disable-next-line es-x/no-array-prototype-foreach -- safe


$$12({
  target: 'Array',
  proto: true,
  forced: [].forEach != forEach$7
}, {
  forEach: forEach$7
});

var path$o = path$x;

var entryVirtual$o = function (CONSTRUCTOR) {
  return path$o[CONSTRUCTOR + 'Prototype'];
};

var entryVirtual$n = entryVirtual$o;

var forEach$6 = entryVirtual$n('Array').forEach;

var parent$1g = forEach$6;

var forEach$5 = parent$1g;

var classof$5 = classof$e;

var hasOwn$6 = hasOwnProperty_1;

var isPrototypeOf$m = objectIsPrototypeOf;

var method$l = forEach$5;

var ArrayPrototype$i = Array.prototype;
var DOMIterables$2 = {
  DOMTokenList: true,
  NodeList: true
};

var forEach$4 = function (it) {
  var own = it.forEach;
  return it === ArrayPrototype$i || isPrototypeOf$m(ArrayPrototype$i, it) && own === ArrayPrototype$i.forEach || hasOwn$6(DOMIterables$2, classof$5(it)) ? method$l : own;
};

var parent$1f = forEach$4;

var forEach$3 = parent$1f;

var parent$1e = forEach$3;

var forEach$2 = parent$1e;

(function (module) {
	module.exports = forEach$2;
} (forEach$8));

(function (module) {
	module.exports = forEach$8.exports;
} (forEach$9));

var setPrototypeOf$6 = {exports: {}};

var setPrototypeOf$5 = {exports: {}};

var $$11 = _export;

var setPrototypeOf$4 = objectSetPrototypeOf; // `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof


$$11({
  target: 'Object',
  stat: true
}, {
  setPrototypeOf: setPrototypeOf$4
});

var path$n = path$x;

var setPrototypeOf$3 = path$n.Object.setPrototypeOf;

var parent$1d = setPrototypeOf$3;

var setPrototypeOf$2 = parent$1d;

var parent$1c = setPrototypeOf$2;

var setPrototypeOf$1 = parent$1c;

var parent$1b = setPrototypeOf$1;

var setPrototypeOf = parent$1b;

(function (module) {
	module.exports = setPrototypeOf;
} (setPrototypeOf$5));

(function (module) {
	module.exports = setPrototypeOf$5.exports;
} (setPrototypeOf$6));

var _Object$setPrototypeOf = /*@__PURE__*/getDefaultExportFromCjs(setPrototypeOf$6.exports);

var reverse$7 = {exports: {}};

var reverse$6 = {exports: {}};

var $$10 = _export;

var uncurryThis$d = functionUncurryThis;

var isArray$a = isArray$e;

var un$Reverse = uncurryThis$d([].reverse);
var test$1 = [1, 2]; // `Array.prototype.reverse` method
// https://tc39.es/ecma262/#sec-array.prototype.reverse
// fix for Safari 12.0 bug
// https://bugs.webkit.org/show_bug.cgi?id=188794

$$10({
  target: 'Array',
  proto: true,
  forced: String(test$1) === String(test$1.reverse())
}, {
  reverse: function reverse() {
    // eslint-disable-next-line no-self-assign -- dirty hack
    if (isArray$a(this)) this.length = this.length;
    return un$Reverse(this);
  }
});

var entryVirtual$m = entryVirtual$o;

var reverse$5 = entryVirtual$m('Array').reverse;

var isPrototypeOf$l = objectIsPrototypeOf;

var method$k = reverse$5;

var ArrayPrototype$h = Array.prototype;

var reverse$4 = function (it) {
  var own = it.reverse;
  return it === ArrayPrototype$h || isPrototypeOf$l(ArrayPrototype$h, it) && own === ArrayPrototype$h.reverse ? method$k : own;
};

var parent$1a = reverse$4;

var reverse$3 = parent$1a;

var parent$19 = reverse$3;

var reverse$2 = parent$19;

var parent$18 = reverse$2;

var reverse$1 = parent$18;

(function (module) {
	module.exports = reverse$1;
} (reverse$6));

(function (module) {
	module.exports = reverse$6.exports;
} (reverse$7));

var slice$7 = {exports: {}};

var slice$6 = {exports: {}};

var $$$ = _export;

var isArray$9 = isArray$e;

var isConstructor$1 = isConstructor$4;

var isObject$8 = isObject$k;

var toAbsoluteIndex$2 = toAbsoluteIndex$5;

var lengthOfArrayLike$7 = lengthOfArrayLike$d;

var toIndexedObject$4 = toIndexedObject$c;

var createProperty$2 = createProperty$5;

var wellKnownSymbol$4 = wellKnownSymbol$p;

var arrayMethodHasSpeciesSupport$2 = arrayMethodHasSpeciesSupport$4;

var un$Slice = arraySlice$7;

var HAS_SPECIES_SUPPORT$2 = arrayMethodHasSpeciesSupport$2('slice');
var SPECIES = wellKnownSymbol$4('species');
var $Array$1 = Array;
var max = Math.max; // `Array.prototype.slice` method
// https://tc39.es/ecma262/#sec-array.prototype.slice
// fallback for not array-like ES3 strings and DOM objects

$$$({
  target: 'Array',
  proto: true,
  forced: !HAS_SPECIES_SUPPORT$2
}, {
  slice: function slice(start, end) {
    var O = toIndexedObject$4(this);
    var length = lengthOfArrayLike$7(O);
    var k = toAbsoluteIndex$2(start, length);
    var fin = toAbsoluteIndex$2(end === undefined ? length : end, length); // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible

    var Constructor, result, n;

    if (isArray$9(O)) {
      Constructor = O.constructor; // cross-realm fallback

      if (isConstructor$1(Constructor) && (Constructor === $Array$1 || isArray$9(Constructor.prototype))) {
        Constructor = undefined;
      } else if (isObject$8(Constructor)) {
        Constructor = Constructor[SPECIES];
        if (Constructor === null) Constructor = undefined;
      }

      if (Constructor === $Array$1 || Constructor === undefined) {
        return un$Slice(O, k, fin);
      }
    }

    result = new (Constructor === undefined ? $Array$1 : Constructor)(max(fin - k, 0));

    for (n = 0; k < fin; k++, n++) if (k in O) createProperty$2(result, n, O[k]);

    result.length = n;
    return result;
  }
});

var entryVirtual$l = entryVirtual$o;

var slice$5 = entryVirtual$l('Array').slice;

var isPrototypeOf$k = objectIsPrototypeOf;

var method$j = slice$5;

var ArrayPrototype$g = Array.prototype;

var slice$4 = function (it) {
  var own = it.slice;
  return it === ArrayPrototype$g || isPrototypeOf$k(ArrayPrototype$g, it) && own === ArrayPrototype$g.slice ? method$j : own;
};

var parent$17 = slice$4;

var slice$3 = parent$17;

var parent$16 = slice$3;

var slice$2 = parent$16;

var parent$15 = slice$2;

var slice$1 = parent$15;

(function (module) {
	module.exports = slice$1;
} (slice$6));

(function (module) {
	module.exports = slice$6.exports;
} (slice$7));

var _sliceInstanceProperty = /*@__PURE__*/getDefaultExportFromCjs(slice$7.exports);

(function (module) {
	var _typeof = _typeof$1.exports["default"];

	var _Symbol = symbol$6.exports;

	var _Object$defineProperty = defineProperty$c.exports;

	var _Object$create = create$a.exports;

	var _Object$getPrototypeOf = getPrototypeOf$6.exports;

	var _forEachInstanceProperty = forEach$9.exports;

	var _Object$setPrototypeOf = setPrototypeOf$6.exports;

	var _Promise = promise$7.exports;

	var _reverseInstanceProperty = reverse$7.exports;

	var _sliceInstanceProperty = slice$7.exports;

	function _regeneratorRuntime() {
	  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */

	  module.exports = _regeneratorRuntime = function _regeneratorRuntime() {
	    return exports;
	  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
	  var exports = {},
	      Op = Object.prototype,
	      hasOwn = Op.hasOwnProperty,
	      $Symbol = "function" == typeof _Symbol ? _Symbol : {},
	      iteratorSymbol = $Symbol.iterator || "@@iterator",
	      asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
	      toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

	  function define(obj, key, value) {
	    return _Object$defineProperty(obj, key, {
	      value: value,
	      enumerable: !0,
	      configurable: !0,
	      writable: !0
	    }), obj[key];
	  }

	  try {
	    define({}, "");
	  } catch (err) {
	    define = function define(obj, key, value) {
	      return obj[key] = value;
	    };
	  }

	  function wrap(innerFn, outerFn, self, tryLocsList) {
	    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
	        generator = _Object$create(protoGenerator.prototype),
	        context = new Context(tryLocsList || []);

	    return generator._invoke = function (innerFn, self, context) {
	      var state = "suspendedStart";
	      return function (method, arg) {
	        if ("executing" === state) throw new Error("Generator is already running");

	        if ("completed" === state) {
	          if ("throw" === method) throw arg;
	          return doneResult();
	        }

	        for (context.method = method, context.arg = arg;;) {
	          var delegate = context.delegate;

	          if (delegate) {
	            var delegateResult = maybeInvokeDelegate(delegate, context);

	            if (delegateResult) {
	              if (delegateResult === ContinueSentinel) continue;
	              return delegateResult;
	            }
	          }

	          if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
	            if ("suspendedStart" === state) throw state = "completed", context.arg;
	            context.dispatchException(context.arg);
	          } else "return" === context.method && context.abrupt("return", context.arg);
	          state = "executing";
	          var record = tryCatch(innerFn, self, context);

	          if ("normal" === record.type) {
	            if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
	            return {
	              value: record.arg,
	              done: context.done
	            };
	          }

	          "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
	        }
	      };
	    }(innerFn, self, context), generator;
	  }

	  function tryCatch(fn, obj, arg) {
	    try {
	      return {
	        type: "normal",
	        arg: fn.call(obj, arg)
	      };
	    } catch (err) {
	      return {
	        type: "throw",
	        arg: err
	      };
	    }
	  }

	  exports.wrap = wrap;
	  var ContinueSentinel = {};

	  function Generator() {}

	  function GeneratorFunction() {}

	  function GeneratorFunctionPrototype() {}

	  var IteratorPrototype = {};
	  define(IteratorPrototype, iteratorSymbol, function () {
	    return this;
	  });
	  var getProto = _Object$getPrototypeOf,
	      NativeIteratorPrototype = getProto && getProto(getProto(values([])));
	  NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);

	  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = _Object$create(IteratorPrototype);

	  function defineIteratorMethods(prototype) {
	    var _context;

	    _forEachInstanceProperty(_context = ["next", "throw", "return"]).call(_context, function (method) {
	      define(prototype, method, function (arg) {
	        return this._invoke(method, arg);
	      });
	    });
	  }

	  function AsyncIterator(generator, PromiseImpl) {
	    function invoke(method, arg, resolve, reject) {
	      var record = tryCatch(generator[method], generator, arg);

	      if ("throw" !== record.type) {
	        var result = record.arg,
	            value = result.value;
	        return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
	          invoke("next", value, resolve, reject);
	        }, function (err) {
	          invoke("throw", err, resolve, reject);
	        }) : PromiseImpl.resolve(value).then(function (unwrapped) {
	          result.value = unwrapped, resolve(result);
	        }, function (error) {
	          return invoke("throw", error, resolve, reject);
	        });
	      }

	      reject(record.arg);
	    }

	    var previousPromise;

	    this._invoke = function (method, arg) {
	      function callInvokeWithMethodAndArg() {
	        return new PromiseImpl(function (resolve, reject) {
	          invoke(method, arg, resolve, reject);
	        });
	      }

	      return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
	    };
	  }

	  function maybeInvokeDelegate(delegate, context) {
	    var method = delegate.iterator[context.method];

	    if (undefined === method) {
	      if (context.delegate = null, "throw" === context.method) {
	        if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel;
	        context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method");
	      }

	      return ContinueSentinel;
	    }

	    var record = tryCatch(method, delegate.iterator, context.arg);
	    if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
	    var info = record.arg;
	    return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
	  }

	  function pushTryEntry(locs) {
	    var entry = {
	      tryLoc: locs[0]
	    };
	    1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
	  }

	  function resetTryEntry(entry) {
	    var record = entry.completion || {};
	    record.type = "normal", delete record.arg, entry.completion = record;
	  }

	  function Context(tryLocsList) {
	    this.tryEntries = [{
	      tryLoc: "root"
	    }], _forEachInstanceProperty(tryLocsList).call(tryLocsList, pushTryEntry, this), this.reset(!0);
	  }

	  function values(iterable) {
	    if (iterable) {
	      var iteratorMethod = iterable[iteratorSymbol];
	      if (iteratorMethod) return iteratorMethod.call(iterable);
	      if ("function" == typeof iterable.next) return iterable;

	      if (!isNaN(iterable.length)) {
	        var i = -1,
	            next = function next() {
	          for (; ++i < iterable.length;) {
	            if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;
	          }

	          return next.value = undefined, next.done = !0, next;
	        };

	        return next.next = next;
	      }
	    }

	    return {
	      next: doneResult
	    };
	  }

	  function doneResult() {
	    return {
	      value: undefined,
	      done: !0
	    };
	  }

	  return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
	    var ctor = "function" == typeof genFun && genFun.constructor;
	    return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
	  }, exports.mark = function (genFun) {
	    return _Object$setPrototypeOf ? _Object$setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = _Object$create(Gp), genFun;
	  }, exports.awrap = function (arg) {
	    return {
	      __await: arg
	    };
	  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
	    return this;
	  }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
	    void 0 === PromiseImpl && (PromiseImpl = _Promise);
	    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
	    return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
	      return result.done ? result.value : iter.next();
	    });
	  }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
	    return this;
	  }), define(Gp, "toString", function () {
	    return "[object Generator]";
	  }), exports.keys = function (object) {
	    var keys = [];

	    for (var key in object) {
	      keys.push(key);
	    }

	    return _reverseInstanceProperty(keys).call(keys), function next() {
	      for (; keys.length;) {
	        var key = keys.pop();
	        if (key in object) return next.value = key, next.done = !1, next;
	      }

	      return next.done = !0, next;
	    };
	  }, exports.values = values, Context.prototype = {
	    constructor: Context,
	    reset: function reset(skipTempReset) {
	      var _context2;

	      if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, _forEachInstanceProperty(_context2 = this.tryEntries).call(_context2, resetTryEntry), !skipTempReset) for (var name in this) {
	        "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+_sliceInstanceProperty(name).call(name, 1)) && (this[name] = undefined);
	      }
	    },
	    stop: function stop() {
	      this.done = !0;
	      var rootRecord = this.tryEntries[0].completion;
	      if ("throw" === rootRecord.type) throw rootRecord.arg;
	      return this.rval;
	    },
	    dispatchException: function dispatchException(exception) {
	      if (this.done) throw exception;
	      var context = this;

	      function handle(loc, caught) {
	        return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
	      }

	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i],
	            record = entry.completion;
	        if ("root" === entry.tryLoc) return handle("end");

	        if (entry.tryLoc <= this.prev) {
	          var hasCatch = hasOwn.call(entry, "catchLoc"),
	              hasFinally = hasOwn.call(entry, "finallyLoc");

	          if (hasCatch && hasFinally) {
	            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
	            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
	          } else if (hasCatch) {
	            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
	          } else {
	            if (!hasFinally) throw new Error("try statement without catch or finally");
	            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
	          }
	        }
	      }
	    },
	    abrupt: function abrupt(type, arg) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];

	        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
	          var finallyEntry = entry;
	          break;
	        }
	      }

	      finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
	      var record = finallyEntry ? finallyEntry.completion : {};
	      return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
	    },
	    complete: function complete(record, afterLoc) {
	      if ("throw" === record.type) throw record.arg;
	      return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
	    },
	    finish: function finish(finallyLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
	      }
	    },
	    "catch": function _catch(tryLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];

	        if (entry.tryLoc === tryLoc) {
	          var record = entry.completion;

	          if ("throw" === record.type) {
	            var thrown = record.arg;
	            resetTryEntry(entry);
	          }

	          return thrown;
	        }
	      }

	      throw new Error("illegal catch attempt");
	    },
	    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
	      return this.delegate = {
	        iterator: values(iterable),
	        resultName: resultName,
	        nextLoc: nextLoc
	      }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
	    }
	  }, exports;
	}

	module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports["default"] = module.exports;
} (regeneratorRuntime$1));

// TODO(Babel 8): Remove this file.
var runtime = regeneratorRuntime$1.exports();

var regenerator = runtime; // Copied from https://github.com/facebook/regenerator/blob/main/packages/runtime/runtime.js#L736=

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}

var keys$6 = {exports: {}};

var $$_ = _export;

var toObject$6 = toObject$d;

var nativeKeys = objectKeys$4;

var fails$d = fails$y;

var FAILS_ON_PRIMITIVES$3 = fails$d(function () {
  nativeKeys(1);
}); // `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys

$$_({
  target: 'Object',
  stat: true,
  forced: FAILS_ON_PRIMITIVES$3
}, {
  keys: function keys(it) {
    return nativeKeys(toObject$6(it));
  }
});

var path$m = path$x;

var keys$5 = path$m.Object.keys;

var parent$14 = keys$5;

var keys$4 = parent$14;

(function (module) {
	module.exports = keys$4;
} (keys$6));

var n$1 = /*@__PURE__*/getDefaultExportFromCjs(keys$6.exports);

var getOwnPropertySymbols$6 = {exports: {}};

var path$l = path$x;

var getOwnPropertySymbols$5 = path$l.Object.getOwnPropertySymbols;

var parent$13 = getOwnPropertySymbols$5;

var getOwnPropertySymbols$4 = parent$13;

(function (module) {
	module.exports = getOwnPropertySymbols$4;
} (getOwnPropertySymbols$6));

var r$1 = /*@__PURE__*/getDefaultExportFromCjs(getOwnPropertySymbols$6.exports);

var getOwnPropertyDescriptor$8 = {exports: {}};

var getOwnPropertyDescriptor$7 = {exports: {}};

var $$Z = _export;

var fails$c = fails$y;

var toIndexedObject$3 = toIndexedObject$c;

var nativeGetOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;

var DESCRIPTORS$7 = descriptors;

var FAILS_ON_PRIMITIVES$2 = fails$c(function () {
  nativeGetOwnPropertyDescriptor(1);
});
var FORCED$4 = !DESCRIPTORS$7 || FAILS_ON_PRIMITIVES$2; // `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor

$$Z({
  target: 'Object',
  stat: true,
  forced: FORCED$4,
  sham: !DESCRIPTORS$7
}, {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(it, key) {
    return nativeGetOwnPropertyDescriptor(toIndexedObject$3(it), key);
  }
});

var path$k = path$x;

var Object$3 = path$k.Object;

var getOwnPropertyDescriptor$6 = getOwnPropertyDescriptor$7.exports = function getOwnPropertyDescriptor(it, key) {
  return Object$3.getOwnPropertyDescriptor(it, key);
};

if (Object$3.getOwnPropertyDescriptor.sham) getOwnPropertyDescriptor$6.sham = true;

var parent$12 = getOwnPropertyDescriptor$7.exports;

var getOwnPropertyDescriptor$5 = parent$12;

(function (module) {
	module.exports = getOwnPropertyDescriptor$5;
} (getOwnPropertyDescriptor$8));

var a$1 = /*@__PURE__*/getDefaultExportFromCjs(getOwnPropertyDescriptor$8.exports);

var getOwnPropertyDescriptors$2 = {exports: {}};

var $$Y = _export;

var DESCRIPTORS$6 = descriptors;

var ownKeys = ownKeys$2;

var toIndexedObject$2 = toIndexedObject$c;

var getOwnPropertyDescriptorModule$1 = objectGetOwnPropertyDescriptor;

var createProperty$1 = createProperty$5; // `Object.getOwnPropertyDescriptors` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptors


$$Y({
  target: 'Object',
  stat: true,
  sham: !DESCRIPTORS$6
}, {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
    var O = toIndexedObject$2(object);
    var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule$1.f;
    var keys = ownKeys(O);
    var result = {};
    var index = 0;
    var key, descriptor;

    while (keys.length > index) {
      descriptor = getOwnPropertyDescriptor(O, key = keys[index++]);
      if (descriptor !== undefined) createProperty$1(result, key, descriptor);
    }

    return result;
  }
});

var path$j = path$x;

var getOwnPropertyDescriptors$1 = path$j.Object.getOwnPropertyDescriptors;

var parent$11 = getOwnPropertyDescriptors$1;

var getOwnPropertyDescriptors = parent$11;

(function (module) {
	module.exports = getOwnPropertyDescriptors;
} (getOwnPropertyDescriptors$2));

var o$1 = /*@__PURE__*/getDefaultExportFromCjs(getOwnPropertyDescriptors$2.exports);

var defineProperties$4 = {exports: {}};

var defineProperties$3 = {exports: {}};

var $$X = _export;

var DESCRIPTORS$5 = descriptors;

var defineProperties$2 = objectDefineProperties.f; // `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es-x/no-object-defineproperties -- safe


$$X({
  target: 'Object',
  stat: true,
  forced: Object.defineProperties !== defineProperties$2,
  sham: !DESCRIPTORS$5
}, {
  defineProperties: defineProperties$2
});

var path$i = path$x;

var Object$2 = path$i.Object;

var defineProperties$1 = defineProperties$3.exports = function defineProperties(T, D) {
  return Object$2.defineProperties(T, D);
};

if (Object$2.defineProperties.sham) defineProperties$1.sham = true;

var parent$10 = defineProperties$3.exports;

var defineProperties = parent$10;

(function (module) {
	module.exports = defineProperties;
} (defineProperties$4));

var i = /*@__PURE__*/getDefaultExportFromCjs(defineProperties$4.exports);

var defineProperty$4 = {exports: {}};

(function (module) {
	module.exports = defineProperty$7;
} (defineProperty$4));

var l$1 = /*@__PURE__*/getDefaultExportFromCjs(defineProperty$4.exports);

function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof _Symbol && "symbol" == typeof _Symbol$iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof _Symbol && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _Object$defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);

  _Object$defineProperty(Constructor, "prototype", {
    writable: false
  });

  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _Object$defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var forEach$1 = {exports: {}};

(function (module) {
	module.exports = forEach$4;
} (forEach$1));

var p$1 = /*@__PURE__*/getDefaultExportFromCjs(forEach$1.exports);

var filter$3 = {exports: {}};

var $$W = _export;

var $filter = arrayIteration.filter;

var arrayMethodHasSpeciesSupport$1 = arrayMethodHasSpeciesSupport$4;

var HAS_SPECIES_SUPPORT$1 = arrayMethodHasSpeciesSupport$1('filter'); // `Array.prototype.filter` method
// https://tc39.es/ecma262/#sec-array.prototype.filter
// with adding support of @@species

$$W({
  target: 'Array',
  proto: true,
  forced: !HAS_SPECIES_SUPPORT$1
}, {
  filter: function filter(callbackfn
  /* , thisArg */
  ) {
    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

var entryVirtual$k = entryVirtual$o;

var filter$2 = entryVirtual$k('Array').filter;

var isPrototypeOf$j = objectIsPrototypeOf;

var method$i = filter$2;

var ArrayPrototype$f = Array.prototype;

var filter$1 = function (it) {
  var own = it.filter;
  return it === ArrayPrototype$f || isPrototypeOf$j(ArrayPrototype$f, it) && own === ArrayPrototype$f.filter ? method$i : own;
};

var parent$$ = filter$1;

var filter = parent$$;

(function (module) {
	module.exports = filter;
} (filter$3));

var f$1 = /*@__PURE__*/getDefaultExportFromCjs(filter$3.exports);

var includes$4 = {exports: {}};

var $$V = _export;

var $includes = arrayIncludes.includes;

var fails$b = fails$y;


var BROKEN_ON_SPARSE = fails$b(function () {
  return !Array(1).includes();
}); // `Array.prototype.includes` method
// https://tc39.es/ecma262/#sec-array.prototype.includes

$$V({
  target: 'Array',
  proto: true,
  forced: BROKEN_ON_SPARSE
}, {
  includes: function includes(el
  /* , fromIndex = 0 */
  ) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
}); // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables

var entryVirtual$j = entryVirtual$o;

var includes$3 = entryVirtual$j('Array').includes;

var isObject$7 = isObject$k;

var classof$4 = classofRaw$1;

var wellKnownSymbol$3 = wellKnownSymbol$p;

var MATCH$1 = wellKnownSymbol$3('match'); // `IsRegExp` abstract operation
// https://tc39.es/ecma262/#sec-isregexp

var isRegexp = function (it) {
  var isRegExp;
  return isObject$7(it) && ((isRegExp = it[MATCH$1]) !== undefined ? !!isRegExp : classof$4(it) == 'RegExp');
};

var isRegExp = isRegexp;

var $TypeError$5 = TypeError;

var notARegexp = function (it) {
  if (isRegExp(it)) {
    throw $TypeError$5("The method doesn't accept regular expressions");
  }

  return it;
};

var wellKnownSymbol$2 = wellKnownSymbol$p;

var MATCH = wellKnownSymbol$2('match');

var correctIsRegexpLogic = function (METHOD_NAME) {
  var regexp = /./;

  try {
    '/./'[METHOD_NAME](regexp);
  } catch (error1) {
    try {
      regexp[MATCH] = false;
      return '/./'[METHOD_NAME](regexp);
    } catch (error2) {
      /* empty */
    }
  }

  return false;
};

var $$U = _export;

var uncurryThis$c = functionUncurryThis;

var notARegExp = notARegexp;

var requireObjectCoercible$2 = requireObjectCoercible$6;

var toString$4 = toString$a;

var correctIsRegExpLogic = correctIsRegexpLogic;

var stringIndexOf = uncurryThis$c(''.indexOf); // `String.prototype.includes` method
// https://tc39.es/ecma262/#sec-string.prototype.includes

$$U({
  target: 'String',
  proto: true,
  forced: !correctIsRegExpLogic('includes')
}, {
  includes: function includes(searchString
  /* , position = 0 */
  ) {
    return !!~stringIndexOf(toString$4(requireObjectCoercible$2(this)), toString$4(notARegExp(searchString)), arguments.length > 1 ? arguments[1] : undefined);
  }
});

var entryVirtual$i = entryVirtual$o;

var includes$2 = entryVirtual$i('String').includes;

var isPrototypeOf$i = objectIsPrototypeOf;

var arrayMethod = includes$3;

var stringMethod = includes$2;

var ArrayPrototype$e = Array.prototype;
var StringPrototype$3 = String.prototype;

var includes$1 = function (it) {
  var own = it.includes;
  if (it === ArrayPrototype$e || isPrototypeOf$i(ArrayPrototype$e, it) && own === ArrayPrototype$e.includes) return arrayMethod;

  if (typeof it == 'string' || it === StringPrototype$3 || isPrototypeOf$i(StringPrototype$3, it) && own === StringPrototype$3.includes) {
    return stringMethod;
  }

  return own;
};

var parent$_ = includes$1;

var includes = parent$_;

(function (module) {
	module.exports = includes;
} (includes$4));

var h$1 = /*@__PURE__*/getDefaultExportFromCjs(includes$4.exports);

var concat$5 = {exports: {}};

var entryVirtual$h = entryVirtual$o;

var concat$4 = entryVirtual$h('Array').concat;

var isPrototypeOf$h = objectIsPrototypeOf;

var method$h = concat$4;

var ArrayPrototype$d = Array.prototype;

var concat$3 = function (it) {
  var own = it.concat;
  return it === ArrayPrototype$d || isPrototypeOf$h(ArrayPrototype$d, it) && own === ArrayPrototype$d.concat ? method$h : own;
};

var parent$Z = concat$3;

var concat$2 = parent$Z;

(function (module) {
	module.exports = concat$2;
} (concat$5));

var y$1 = /*@__PURE__*/getDefaultExportFromCjs(concat$5.exports);

var bind$l = {exports: {}};

var uncurryThis$b = functionUncurryThis;

var aCallable$e = aCallable$o;

var isObject$6 = isObject$k;

var hasOwn$5 = hasOwnProperty_1;

var arraySlice$3 = arraySlice$7;

var NATIVE_BIND = functionBindNative;

var $Function = Function;
var concat$1 = uncurryThis$b([].concat);
var join$2 = uncurryThis$b([].join);
var factories = {};

var construct$7 = function (C, argsLength, args) {
  if (!hasOwn$5(factories, argsLength)) {
    for (var list = [], i = 0; i < argsLength; i++) list[i] = 'a[' + i + ']';

    factories[argsLength] = $Function('C,a', 'return new C(' + join$2(list, ',') + ')');
  }

  return factories[argsLength](C, args);
}; // `Function.prototype.bind` method implementation
// https://tc39.es/ecma262/#sec-function.prototype.bind


var functionBind = NATIVE_BIND ? $Function.bind : function bind(that
/* , ...args */
) {
  var F = aCallable$e(this);
  var Prototype = F.prototype;
  var partArgs = arraySlice$3(arguments, 1);

  var boundFunction = function
    /* args... */
  bound() {
    var args = concat$1(partArgs, arraySlice$3(arguments));
    return this instanceof boundFunction ? construct$7(F, args.length, args) : F.apply(that, args);
  };

  if (isObject$6(Prototype)) boundFunction.prototype = Prototype;
  return boundFunction;
};

// TODO: Remove from `core-js@4`
var $$T = _export;

var bind$k = functionBind; // `Function.prototype.bind` method
// https://tc39.es/ecma262/#sec-function.prototype.bind


$$T({
  target: 'Function',
  proto: true,
  forced: Function.bind !== bind$k
}, {
  bind: bind$k
});

var entryVirtual$g = entryVirtual$o;

var bind$j = entryVirtual$g('Function').bind;

var isPrototypeOf$g = objectIsPrototypeOf;

var method$g = bind$j;

var FunctionPrototype = Function.prototype;

var bind$i = function (it) {
  var own = it.bind;
  return it === FunctionPrototype || isPrototypeOf$g(FunctionPrototype, it) && own === FunctionPrototype.bind ? method$g : own;
};

var parent$Y = bind$i;

var bind$h = parent$Y;

(function (module) {
	module.exports = bind$h;
} (bind$l));

var m$1 = /*@__PURE__*/getDefaultExportFromCjs(bind$l.exports);

var promise = {exports: {}};

(function (module) {
	module.exports = promise$3;
} (promise));

var v$1 = /*@__PURE__*/getDefaultExportFromCjs(promise.exports);

var find$4 = {exports: {}};

var $$S = _export;

var $find = arrayIteration.find;

var FIND = 'find';
var SKIPS_HOLES$1 = true; // Shouldn't skip holes

if (FIND in []) Array(1)[FIND](function () {
  SKIPS_HOLES$1 = false;
}); // `Array.prototype.find` method
// https://tc39.es/ecma262/#sec-array.prototype.find

$$S({
  target: 'Array',
  proto: true,
  forced: SKIPS_HOLES$1
}, {
  find: function find(callbackfn
  /* , that = undefined */
  ) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
}); // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables

var entryVirtual$f = entryVirtual$o;

var find$3 = entryVirtual$f('Array').find;

var isPrototypeOf$f = objectIsPrototypeOf;

var method$f = find$3;

var ArrayPrototype$c = Array.prototype;

var find$2 = function (it) {
  var own = it.find;
  return it === ArrayPrototype$c || isPrototypeOf$f(ArrayPrototype$c, it) && own === ArrayPrototype$c.find ? method$f : own;
};

var parent$X = find$2;

var find$1 = parent$X;

(function (module) {
	module.exports = find$1;
} (find$4));

var g$1 = /*@__PURE__*/getDefaultExportFromCjs(find$4.exports);

var isArray$8 = {exports: {}};

var isArray$7 = {exports: {}};

var $$R = _export;

var isArray$6 = isArray$e; // `Array.isArray` method
// https://tc39.es/ecma262/#sec-array.isarray


$$R({
  target: 'Array',
  stat: true
}, {
  isArray: isArray$6
});

var path$h = path$x;

var isArray$5 = path$h.Array.isArray;

var parent$W = isArray$5;

var isArray$4 = parent$W;

var parent$V = isArray$4;

var isArray$3 = parent$V;

var parent$U = isArray$3;

var isArray$2 = parent$U;

(function (module) {
	module.exports = isArray$2;
} (isArray$7));

(function (module) {
	module.exports = isArray$7.exports;
} (isArray$8));

var _Array$isArray = /*@__PURE__*/getDefaultExportFromCjs(isArray$8.exports);

function _arrayWithHoles(arr) {
  if (_Array$isArray(arr)) return arr;
}

var getIteratorMethod$7 = {exports: {}};

var getIteratorMethod$6 = {exports: {}};

var getIteratorMethod$5 = getIteratorMethod$a;

var getIteratorMethod_1 = getIteratorMethod$5;

var parent$T = getIteratorMethod_1;



var getIteratorMethod$4 = parent$T;

var parent$S = getIteratorMethod$4;

var getIteratorMethod$3 = parent$S;

var parent$R = getIteratorMethod$3;

var getIteratorMethod$2 = parent$R;

(function (module) {
	module.exports = getIteratorMethod$2;
} (getIteratorMethod$6));

(function (module) {
	module.exports = getIteratorMethod$6.exports;
} (getIteratorMethod$7));

var ve = /*@__PURE__*/getDefaultExportFromCjs(getIteratorMethod$7.exports);

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof _Symbol !== "undefined" && ve(arr) || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

var from$8 = {exports: {}};

var from$7 = {exports: {}};

var anObject$i = anObject$u;

var iteratorClose = iteratorClose$2; // call something on iterator step with safe closing on error


var callWithSafeIterationClosing$1 = function (iterator, fn, value, ENTRIES) {
  try {
    return ENTRIES ? fn(anObject$i(value)[0], value[1]) : fn(value);
  } catch (error) {
    iteratorClose(iterator, 'throw', error);
  }
};

var bind$g = functionBindContext;

var call$d = functionCall;

var toObject$5 = toObject$d;

var callWithSafeIterationClosing = callWithSafeIterationClosing$1;

var isArrayIteratorMethod = isArrayIteratorMethod$2;

var isConstructor = isConstructor$4;

var lengthOfArrayLike$6 = lengthOfArrayLike$d;

var createProperty = createProperty$5;

var getIterator$3 = getIterator$5;

var getIteratorMethod$1 = getIteratorMethod$a;

var $Array = Array; // `Array.from` method implementation
// https://tc39.es/ecma262/#sec-array.from

var arrayFrom = function from(arrayLike
/* , mapfn = undefined, thisArg = undefined */
) {
  var O = toObject$5(arrayLike);
  var IS_CONSTRUCTOR = isConstructor(this);
  var argumentsLength = arguments.length;
  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
  var mapping = mapfn !== undefined;
  if (mapping) mapfn = bind$g(mapfn, argumentsLength > 2 ? arguments[2] : undefined);
  var iteratorMethod = getIteratorMethod$1(O);
  var index = 0;
  var length, result, step, iterator, next, value; // if the target is not iterable or it's an array with the default iterator - use a simple case

  if (iteratorMethod && !(this === $Array && isArrayIteratorMethod(iteratorMethod))) {
    iterator = getIterator$3(O, iteratorMethod);
    next = iterator.next;
    result = IS_CONSTRUCTOR ? new this() : [];

    for (; !(step = call$d(next, iterator)).done; index++) {
      value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;
      createProperty(result, index, value);
    }
  } else {
    length = lengthOfArrayLike$6(O);
    result = IS_CONSTRUCTOR ? new this(length) : $Array(length);

    for (; length > index; index++) {
      value = mapping ? mapfn(O[index], index) : O[index];
      createProperty(result, index, value);
    }
  }

  result.length = index;
  return result;
};

var $$Q = _export;

var from$6 = arrayFrom;

var checkCorrectnessOfIteration = checkCorrectnessOfIteration$2;

var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function (iterable) {
  // eslint-disable-next-line es-x/no-array-from -- required for testing
  Array.from(iterable);
}); // `Array.from` method
// https://tc39.es/ecma262/#sec-array.from

$$Q({
  target: 'Array',
  stat: true,
  forced: INCORRECT_ITERATION
}, {
  from: from$6
});

var path$g = path$x;

var from$5 = path$g.Array.from;

var parent$Q = from$5;

var from$4 = parent$Q;

var parent$P = from$4;

var from$3 = parent$P;

var parent$O = from$3;

var from$2 = parent$O;

(function (module) {
	module.exports = from$2;
} (from$7));

(function (module) {
	module.exports = from$7.exports;
} (from$8));

var _Array$from = /*@__PURE__*/getDefaultExportFromCjs(from$8.exports);

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _unsupportedIterableToArray(o, minLen) {
  var _context;

  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);

  var n = _sliceInstanceProperty(_context = Object.prototype.toString.call(o)).call(_context, 8, -1);

  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return _Array$from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithoutHoles(arr) {
  if (_Array$isArray(arr)) return _arrayLikeToArray(arr);
}

function _iterableToArray(iter) {
  if (typeof _Symbol !== "undefined" && ve(iter) != null || iter["@@iterator"] != null) return _Array$from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

var indexOf$7 = {exports: {}};

/* eslint-disable es-x/no-array-prototype-indexof -- required for testing */

var $$P = _export;

var uncurryThis$a = functionUncurryThis;

var $IndexOf = arrayIncludes.indexOf;

var arrayMethodIsStrict$5 = arrayMethodIsStrict$7;

var un$IndexOf = uncurryThis$a([].indexOf);
var NEGATIVE_ZERO$1 = !!un$IndexOf && 1 / un$IndexOf([1], 1, -0) < 0;
var STRICT_METHOD$5 = arrayMethodIsStrict$5('indexOf'); // `Array.prototype.indexOf` method
// https://tc39.es/ecma262/#sec-array.prototype.indexof

$$P({
  target: 'Array',
  proto: true,
  forced: NEGATIVE_ZERO$1 || !STRICT_METHOD$5
}, {
  indexOf: function indexOf(searchElement
  /* , fromIndex = 0 */
  ) {
    var fromIndex = arguments.length > 1 ? arguments[1] : undefined;
    return NEGATIVE_ZERO$1 // convert -0 to +0
    ? un$IndexOf(this, searchElement, fromIndex) || 0 : $IndexOf(this, searchElement, fromIndex);
  }
});

var entryVirtual$e = entryVirtual$o;

var indexOf$6 = entryVirtual$e('Array').indexOf;

var isPrototypeOf$e = objectIsPrototypeOf;

var method$e = indexOf$6;

var ArrayPrototype$b = Array.prototype;

var indexOf$5 = function (it) {
  var own = it.indexOf;
  return it === ArrayPrototype$b || isPrototypeOf$e(ArrayPrototype$b, it) && own === ArrayPrototype$b.indexOf ? method$e : own;
};

var parent$N = indexOf$5;

var indexOf$4 = parent$N;

(function (module) {
	module.exports = indexOf$4;
} (indexOf$7));

var C$1 = /*@__PURE__*/getDefaultExportFromCjs(indexOf$7.exports);

var reduce$3 = {exports: {}};

var aCallable$d = aCallable$o;

var toObject$4 = toObject$d;

var IndexedObject$1 = indexedObject;

var lengthOfArrayLike$5 = lengthOfArrayLike$d;

var $TypeError$4 = TypeError; // `Array.prototype.{ reduce, reduceRight }` methods implementation

var createMethod$2 = function (IS_RIGHT) {
  return function (that, callbackfn, argumentsLength, memo) {
    aCallable$d(callbackfn);
    var O = toObject$4(that);
    var self = IndexedObject$1(O);
    var length = lengthOfArrayLike$5(O);
    var index = IS_RIGHT ? length - 1 : 0;
    var i = IS_RIGHT ? -1 : 1;
    if (argumentsLength < 2) while (true) {
      if (index in self) {
        memo = self[index];
        index += i;
        break;
      }

      index += i;

      if (IS_RIGHT ? index < 0 : length <= index) {
        throw $TypeError$4('Reduce of empty array with no initial value');
      }
    }

    for (; IS_RIGHT ? index >= 0 : length > index; index += i) if (index in self) {
      memo = callbackfn(memo, self[index], index, O);
    }

    return memo;
  };
};

var arrayReduce = {
  // `Array.prototype.reduce` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduce
  left: createMethod$2(false),
  // `Array.prototype.reduceRight` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduceright
  right: createMethod$2(true)
};

var $$O = _export;

var $reduce = arrayReduce.left;

var arrayMethodIsStrict$4 = arrayMethodIsStrict$7;

var CHROME_VERSION = engineV8Version;

var IS_NODE = engineIsNode;

var STRICT_METHOD$4 = arrayMethodIsStrict$4('reduce'); // Chrome 80-82 has a critical bug
// https://bugs.chromium.org/p/chromium/issues/detail?id=1049982

var CHROME_BUG = !IS_NODE && CHROME_VERSION > 79 && CHROME_VERSION < 83; // `Array.prototype.reduce` method
// https://tc39.es/ecma262/#sec-array.prototype.reduce

$$O({
  target: 'Array',
  proto: true,
  forced: !STRICT_METHOD$4 || CHROME_BUG
}, {
  reduce: function reduce(callbackfn
  /* , initialValue */
  ) {
    var length = arguments.length;
    return $reduce(this, callbackfn, length, length > 1 ? arguments[1] : undefined);
  }
});

var entryVirtual$d = entryVirtual$o;

var reduce$2 = entryVirtual$d('Array').reduce;

var isPrototypeOf$d = objectIsPrototypeOf;

var method$d = reduce$2;

var ArrayPrototype$a = Array.prototype;

var reduce$1 = function (it) {
  var own = it.reduce;
  return it === ArrayPrototype$a || isPrototypeOf$d(ArrayPrototype$a, it) && own === ArrayPrototype$a.reduce ? method$d : own;
};

var parent$M = reduce$1;

var reduce = parent$M;

(function (module) {
	module.exports = reduce;
} (reduce$3));

var k$1 = /*@__PURE__*/getDefaultExportFromCjs(reduce$3.exports);

var values$6 = {exports: {}};

var entryVirtual$c = entryVirtual$o;

var values$5 = entryVirtual$c('Array').values;

var parent$L = values$5;

var values$4 = parent$L;

var classof$3 = classof$e;

var hasOwn$4 = hasOwnProperty_1;

var isPrototypeOf$c = objectIsPrototypeOf;

var method$c = values$4;

var ArrayPrototype$9 = Array.prototype;
var DOMIterables$1 = {
  DOMTokenList: true,
  NodeList: true
};

var values$3 = function (it) {
  var own = it.values;
  return it === ArrayPrototype$9 || isPrototypeOf$c(ArrayPrototype$9, it) && own === ArrayPrototype$9.values || hasOwn$4(DOMIterables$1, classof$3(it)) ? method$c : own;
};

(function (module) {
	module.exports = values$3;
} (values$6));

var N$1 = /*@__PURE__*/getDefaultExportFromCjs(values$6.exports);

var _parseInt$2 = {exports: {}};

// a string of all valid unicode whitespaces
var whitespaces$3 = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002' + '\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

var uncurryThis$9 = functionUncurryThis;

var requireObjectCoercible$1 = requireObjectCoercible$6;

var toString$3 = toString$a;

var whitespaces$2 = whitespaces$3;

var replace$1 = uncurryThis$9(''.replace);
var whitespace = '[' + whitespaces$2 + ']';
var ltrim = RegExp('^' + whitespace + whitespace + '*');
var rtrim = RegExp(whitespace + whitespace + '*$'); // `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation

var createMethod$1 = function (TYPE) {
  return function ($this) {
    var string = toString$3(requireObjectCoercible$1($this));
    if (TYPE & 1) string = replace$1(string, ltrim, '');
    if (TYPE & 2) string = replace$1(string, rtrim, '');
    return string;
  };
};

var stringTrim = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimstart
  start: createMethod$1(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimend
  end: createMethod$1(2),
  // `String.prototype.trim` method
  // https://tc39.es/ecma262/#sec-string.prototype.trim
  trim: createMethod$1(3)
};

var global$7 = global$s;

var fails$a = fails$y;

var uncurryThis$8 = functionUncurryThis;

var toString$2 = toString$a;

var trim$4 = stringTrim.trim;

var whitespaces$1 = whitespaces$3;

var $parseInt$1 = global$7.parseInt;
var Symbol$1 = global$7.Symbol;
var ITERATOR$2 = Symbol$1 && Symbol$1.iterator;
var hex = /^[+-]?0x/i;
var exec = uncurryThis$8(hex.exec);
var FORCED$3 = $parseInt$1(whitespaces$1 + '08') !== 8 || $parseInt$1(whitespaces$1 + '0x16') !== 22 // MS Edge 18- broken with boxed symbols
|| ITERATOR$2 && !fails$a(function () {
  $parseInt$1(Object(ITERATOR$2));
}); // `parseInt` method
// https://tc39.es/ecma262/#sec-parseint-string-radix

var numberParseInt = FORCED$3 ? function parseInt(string, radix) {
  var S = trim$4(toString$2(string));
  return $parseInt$1(S, radix >>> 0 || (exec(hex, S) ? 16 : 10));
} : $parseInt$1;

var $$N = _export;

var $parseInt = numberParseInt; // `parseInt` method
// https://tc39.es/ecma262/#sec-parseint-string-radix


$$N({
  global: true,
  forced: parseInt != $parseInt
}, {
  parseInt: $parseInt
});

var path$f = path$x;

var _parseInt$1 = path$f.parseInt;

var parent$K = _parseInt$1;

var _parseInt = parent$K;

(function (module) {
	module.exports = _parseInt;
} (_parseInt$2));

var w$1 = /*@__PURE__*/getDefaultExportFromCjs(_parseInt$2.exports);

var construct$6 = {exports: {}};

var $$M = _export;

var getBuiltIn$3 = getBuiltIn$h;

var apply$3 = functionApply;

var bind$f = functionBind;

var aConstructor$1 = aConstructor$3;

var anObject$h = anObject$u;

var isObject$5 = isObject$k;

var create$3 = objectCreate;

var fails$9 = fails$y;

var nativeConstruct = getBuiltIn$3('Reflect', 'construct');
var ObjectPrototype = Object.prototype;
var push$5 = [].push; // `Reflect.construct` method
// https://tc39.es/ecma262/#sec-reflect.construct
// MS Edge supports only 2 arguments and argumentsList argument is optional
// FF Nightly sets third argument as `new.target`, but does not create `this` from it

var NEW_TARGET_BUG = fails$9(function () {
  function F() {
    /* empty */
  }

  return !(nativeConstruct(function () {
    /* empty */
  }, [], F) instanceof F);
});
var ARGS_BUG = !fails$9(function () {
  nativeConstruct(function () {
    /* empty */
  });
});
var FORCED$2 = NEW_TARGET_BUG || ARGS_BUG;
$$M({
  target: 'Reflect',
  stat: true,
  forced: FORCED$2,
  sham: FORCED$2
}, {
  construct: function construct(Target, args
  /* , newTarget */
  ) {
    aConstructor$1(Target);
    anObject$h(args);
    var newTarget = arguments.length < 3 ? Target : aConstructor$1(arguments[2]);
    if (ARGS_BUG && !NEW_TARGET_BUG) return nativeConstruct(Target, args, newTarget);

    if (Target == newTarget) {
      // w/o altered newTarget, optimization for 0-4 arguments
      switch (args.length) {
        case 0:
          return new Target();

        case 1:
          return new Target(args[0]);

        case 2:
          return new Target(args[0], args[1]);

        case 3:
          return new Target(args[0], args[1], args[2]);

        case 4:
          return new Target(args[0], args[1], args[2], args[3]);
      } // w/o altered newTarget, lot of arguments case


      var $args = [null];
      apply$3(push$5, $args, args);
      return new (apply$3(bind$f, Target, $args))();
    } // with altered newTarget, not support built-in constructors


    var proto = newTarget.prototype;
    var instance = create$3(isObject$5(proto) ? proto : ObjectPrototype);
    var result = apply$3(Target, instance, args);
    return isObject$5(result) ? result : instance;
  }
});

var path$e = path$x;

var construct$5 = path$e.Reflect.construct;

var parent$J = construct$5;

var construct$4 = parent$J;

(function (module) {
	module.exports = construct$4;
} (construct$6));

var S = /*@__PURE__*/getDefaultExportFromCjs(construct$6.exports);

var assign$7 = {exports: {}};

var assign$6 = {exports: {}};

var DESCRIPTORS$4 = descriptors;

var uncurryThis$7 = functionUncurryThis;

var call$c = functionCall;

var fails$8 = fails$y;

var objectKeys$1 = objectKeys$4;

var getOwnPropertySymbolsModule = objectGetOwnPropertySymbols;

var propertyIsEnumerableModule = objectPropertyIsEnumerable;

var toObject$3 = toObject$d;

var IndexedObject = indexedObject; // eslint-disable-next-line es-x/no-object-assign -- safe


var $assign = Object.assign; // eslint-disable-next-line es-x/no-object-defineproperty -- required for testing

var defineProperty$3 = Object.defineProperty;
var concat = uncurryThis$7([].concat); // `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign

var objectAssign = !$assign || fails$8(function () {
  // should have correct order of operations (Edge bug)
  if (DESCRIPTORS$4 && $assign({
    b: 1
  }, $assign(defineProperty$3({}, 'a', {
    enumerable: true,
    get: function () {
      defineProperty$3(this, 'b', {
        value: 3,
        enumerable: false
      });
    }
  }), {
    b: 2
  })).b !== 1) return true; // should work with symbols and should have deterministic property order (V8 bug)

  var A = {};
  var B = {}; // eslint-disable-next-line es-x/no-symbol -- safe

  var symbol = Symbol();
  var alphabet = 'abcdefghijklmnopqrst';
  A[symbol] = 7;
  alphabet.split('').forEach(function (chr) {
    B[chr] = chr;
  });
  return $assign({}, A)[symbol] != 7 || objectKeys$1($assign({}, B)).join('') != alphabet;
}) ? function assign(target, source) {
  // eslint-disable-line no-unused-vars -- required for `.length`
  var T = toObject$3(target);
  var argumentsLength = arguments.length;
  var index = 1;
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  var propertyIsEnumerable = propertyIsEnumerableModule.f;

  while (argumentsLength > index) {
    var S = IndexedObject(arguments[index++]);
    var keys = getOwnPropertySymbols ? concat(objectKeys$1(S), getOwnPropertySymbols(S)) : objectKeys$1(S);
    var length = keys.length;
    var j = 0;
    var key;

    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS$4 || call$c(propertyIsEnumerable, S, key)) T[key] = S[key];
    }
  }

  return T;
} : $assign;

var $$L = _export;

var assign$5 = objectAssign; // `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
// eslint-disable-next-line es-x/no-object-assign -- required for testing


$$L({
  target: 'Object',
  stat: true,
  arity: 2,
  forced: Object.assign !== assign$5
}, {
  assign: assign$5
});

var path$d = path$x;

var assign$4 = path$d.Object.assign;

var parent$I = assign$4;

var assign$3 = parent$I;

var parent$H = assign$3;

var assign$2 = parent$H;

var parent$G = assign$2;

var assign$1 = parent$G;

(function (module) {
	module.exports = assign$1;
} (assign$6));

(function (module) {
	module.exports = assign$6.exports;
} (assign$7));

var _Object$assign = /*@__PURE__*/getDefaultExportFromCjs(assign$7.exports);

var bind$e = {exports: {}};

var bind$d = {exports: {}};

var parent$F = bind$h;

var bind$c = parent$F;

var parent$E = bind$c;

var bind$b = parent$E;

(function (module) {
	module.exports = bind$b;
} (bind$d));

(function (module) {
	module.exports = bind$d.exports;
} (bind$e));

var _bindInstanceProperty = /*@__PURE__*/getDefaultExportFromCjs(bind$e.exports);

function _extends() {
  var _context;

  _extends = _Object$assign ? _bindInstanceProperty(_context = _Object$assign).call(_context) : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

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

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _setPrototypeOf(o, p) {
  var _context;

  _setPrototypeOf = _Object$setPrototypeOf ? _bindInstanceProperty(_context = _Object$setPrototypeOf).call(_context) : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _Object$create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });

  _Object$defineProperty(subClass, "prototype", {
    writable: false
  });

  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return _assertThisInitialized(self);
}

function _getPrototypeOf(o) {
  var _context;

  _getPrototypeOf = _Object$setPrototypeOf ? _bindInstanceProperty(_context = _Object$getPrototypeOf).call(_context) : function _getPrototypeOf(o) {
    return o.__proto__ || _Object$getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

var n,
    l,
    u,
    t,
    o,
    r,
    f = {},
    e = [],
    c = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;

function s(n, l) {
  for (var u in l) n[u] = l[u];

  return n;
}

function a(n) {
  var l = n.parentNode;
  l && l.removeChild(n);
}

function h(l, u, i) {
  var t,
      o,
      r,
      f = {};

  for (r in u) "key" == r ? t = u[r] : "ref" == r ? o = u[r] : f[r] = u[r];

  if (arguments.length > 2 && (f.children = arguments.length > 3 ? n.call(arguments, 2) : i), "function" == typeof l && null != l.defaultProps) for (r in l.defaultProps) void 0 === f[r] && (f[r] = l.defaultProps[r]);
  return v(l, f, t, o, null);
}

function v(n, i, t, o, r) {
  var f = {
    type: n,
    props: i,
    key: t,
    ref: o,
    __k: null,
    __: null,
    __b: 0,
    __e: null,
    __d: void 0,
    __c: null,
    __h: null,
    constructor: void 0,
    __v: null == r ? ++u : r
  };
  return null == r && null != l.vnode && l.vnode(f), f;
}

function y() {
  return {
    current: null
  };
}

function p(n) {
  return n.children;
}

function d(n, l) {
  this.props = n, this.context = l;
}

function _(n, l) {
  if (null == l) return n.__ ? _(n.__, n.__.__k.indexOf(n) + 1) : null;

  for (var u; l < n.__k.length; l++) if (null != (u = n.__k[l]) && null != u.__e) return u.__e;

  return "function" == typeof n.type ? _(n) : null;
}

function k(n) {
  var l, u;

  if (null != (n = n.__) && null != n.__c) {
    for (n.__e = n.__c.base = null, l = 0; l < n.__k.length; l++) if (null != (u = n.__k[l]) && null != u.__e) {
      n.__e = n.__c.base = u.__e;
      break;
    }

    return k(n);
  }
}

function b(n) {
  (!n.__d && (n.__d = !0) && t.push(n) && !g.__r++ || o !== l.debounceRendering) && ((o = l.debounceRendering) || setTimeout)(g);
}

function g() {
  for (var n; g.__r = t.length;) n = t.sort(function (n, l) {
    return n.__v.__b - l.__v.__b;
  }), t = [], n.some(function (n) {
    var l, u, i, t, o, r;
    n.__d && (o = (t = (l = n).__v).__e, (r = l.__P) && (u = [], (i = s({}, t)).__v = t.__v + 1, j(r, t, i, l.__n, void 0 !== r.ownerSVGElement, null != t.__h ? [o] : null, u, null == o ? _(t) : o, t.__h), z(u, t), t.__e != o && k(t)));
  });
}

function w(n, l, u, i, t, o, r, c, s, a) {
  var h,
      y,
      d,
      k,
      b,
      g,
      w,
      x = i && i.__k || e,
      C = x.length;

  for (u.__k = [], h = 0; h < l.length; h++) if (null != (k = u.__k[h] = null == (k = l[h]) || "boolean" == typeof k ? null : "string" == typeof k || "number" == typeof k || "bigint" == typeof k ? v(null, k, null, null, k) : Array.isArray(k) ? v(p, {
    children: k
  }, null, null, null) : k.__b > 0 ? v(k.type, k.props, k.key, null, k.__v) : k)) {
    if (k.__ = u, k.__b = u.__b + 1, null === (d = x[h]) || d && k.key == d.key && k.type === d.type) x[h] = void 0;else for (y = 0; y < C; y++) {
      if ((d = x[y]) && k.key == d.key && k.type === d.type) {
        x[y] = void 0;
        break;
      }

      d = null;
    }
    j(n, k, d = d || f, t, o, r, c, s, a), b = k.__e, (y = k.ref) && d.ref != y && (w || (w = []), d.ref && w.push(d.ref, null, k), w.push(y, k.__c || b, k)), null != b ? (null == g && (g = b), "function" == typeof k.type && k.__k === d.__k ? k.__d = s = m(k, s, n) : s = A(n, k, d, x, b, s), "function" == typeof u.type && (u.__d = s)) : s && d.__e == s && s.parentNode != n && (s = _(d));
  }

  for (u.__e = g, h = C; h--;) null != x[h] && ("function" == typeof u.type && null != x[h].__e && x[h].__e == u.__d && (u.__d = _(i, h + 1)), N(x[h], x[h]));

  if (w) for (h = 0; h < w.length; h++) M(w[h], w[++h], w[++h]);
}

function m(n, l, u) {
  for (var i, t = n.__k, o = 0; t && o < t.length; o++) (i = t[o]) && (i.__ = n, l = "function" == typeof i.type ? m(i, l, u) : A(u, i, i, t, i.__e, l));

  return l;
}

function x(n, l) {
  return l = l || [], null == n || "boolean" == typeof n || (Array.isArray(n) ? n.some(function (n) {
    x(n, l);
  }) : l.push(n)), l;
}

function A(n, l, u, i, t, o) {
  var r, f, e;
  if (void 0 !== l.__d) r = l.__d, l.__d = void 0;else if (null == u || t != o || null == t.parentNode) n: if (null == o || o.parentNode !== n) n.appendChild(t), r = null;else {
    for (f = o, e = 0; (f = f.nextSibling) && e < i.length; e += 2) if (f == t) break n;

    n.insertBefore(t, o), r = o;
  }
  return void 0 !== r ? r : t.nextSibling;
}

function C(n, l, u, i, t) {
  var o;

  for (o in u) "children" === o || "key" === o || o in l || H$1(n, o, null, u[o], i);

  for (o in l) t && "function" != typeof l[o] || "children" === o || "key" === o || "value" === o || "checked" === o || u[o] === l[o] || H$1(n, o, l[o], u[o], i);
}

function $$K(n, l, u) {
  "-" === l[0] ? n.setProperty(l, u) : n[l] = null == u ? "" : "number" != typeof u || c.test(l) ? u : u + "px";
}

function H$1(n, l, u, i, t) {
  var o;

  n: if ("style" === l) {
    if ("string" == typeof u) n.style.cssText = u;else {
      if ("string" == typeof i && (n.style.cssText = i = ""), i) for (l in i) u && l in u || $$K(n.style, l, "");
      if (u) for (l in u) i && u[l] === i[l] || $$K(n.style, l, u[l]);
    }
  } else if ("o" === l[0] && "n" === l[1]) o = l !== (l = l.replace(/Capture$/, "")), l = l.toLowerCase() in n ? l.toLowerCase().slice(2) : l.slice(2), n.l || (n.l = {}), n.l[l + o] = u, u ? i || n.addEventListener(l, o ? T : I, o) : n.removeEventListener(l, o ? T : I, o);else if ("dangerouslySetInnerHTML" !== l) {
    if (t) l = l.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");else if ("href" !== l && "list" !== l && "form" !== l && "tabIndex" !== l && "download" !== l && l in n) try {
      n[l] = null == u ? "" : u;
      break n;
    } catch (n) {}
    "function" == typeof u || (null != u && (!1 !== u || "a" === l[0] && "r" === l[1]) ? n.setAttribute(l, u) : n.removeAttribute(l));
  }
}

function I(n) {
  this.l[n.type + !1](l.event ? l.event(n) : n);
}

function T(n) {
  this.l[n.type + !0](l.event ? l.event(n) : n);
}

function j(n, u, i, t, o, r, f, e, c) {
  var a,
      h,
      v,
      y,
      _,
      k,
      b,
      g,
      m,
      x,
      A,
      C,
      $,
      H = u.type;

  if (void 0 !== u.constructor) return null;
  null != i.__h && (c = i.__h, e = u.__e = i.__e, u.__h = null, r = [e]), (a = l.__b) && a(u);

  try {
    n: if ("function" == typeof H) {
      if (g = u.props, m = (a = H.contextType) && t[a.__c], x = a ? m ? m.props.value : a.__ : t, i.__c ? b = (h = u.__c = i.__c).__ = h.__E : ("prototype" in H && H.prototype.render ? u.__c = h = new H(g, x) : (u.__c = h = new d(g, x), h.constructor = H, h.render = O), m && m.sub(h), h.props = g, h.state || (h.state = {}), h.context = x, h.__n = t, v = h.__d = !0, h.__h = []), null == h.__s && (h.__s = h.state), null != H.getDerivedStateFromProps && (h.__s == h.state && (h.__s = s({}, h.__s)), s(h.__s, H.getDerivedStateFromProps(g, h.__s))), y = h.props, _ = h.state, v) null == H.getDerivedStateFromProps && null != h.componentWillMount && h.componentWillMount(), null != h.componentDidMount && h.__h.push(h.componentDidMount);else {
        if (null == H.getDerivedStateFromProps && g !== y && null != h.componentWillReceiveProps && h.componentWillReceiveProps(g, x), !h.__e && null != h.shouldComponentUpdate && !1 === h.shouldComponentUpdate(g, h.__s, x) || u.__v === i.__v) {
          h.props = g, h.state = h.__s, u.__v !== i.__v && (h.__d = !1), h.__v = u, u.__e = i.__e, u.__k = i.__k, u.__k.forEach(function (n) {
            n && (n.__ = u);
          }), h.__h.length && f.push(h);
          break n;
        }

        null != h.componentWillUpdate && h.componentWillUpdate(g, h.__s, x), null != h.componentDidUpdate && h.__h.push(function () {
          h.componentDidUpdate(y, _, k);
        });
      }
      if (h.context = x, h.props = g, h.__v = u, h.__P = n, A = l.__r, C = 0, "prototype" in H && H.prototype.render) h.state = h.__s, h.__d = !1, A && A(u), a = h.render(h.props, h.state, h.context);else do {
        h.__d = !1, A && A(u), a = h.render(h.props, h.state, h.context), h.state = h.__s;
      } while (h.__d && ++C < 25);
      h.state = h.__s, null != h.getChildContext && (t = s(s({}, t), h.getChildContext())), v || null == h.getSnapshotBeforeUpdate || (k = h.getSnapshotBeforeUpdate(y, _)), $ = null != a && a.type === p && null == a.key ? a.props.children : a, w(n, Array.isArray($) ? $ : [$], u, i, t, o, r, f, e, c), h.base = u.__e, u.__h = null, h.__h.length && f.push(h), b && (h.__E = h.__ = null), h.__e = !1;
    } else null == r && u.__v === i.__v ? (u.__k = i.__k, u.__e = i.__e) : u.__e = L(i.__e, u, i, t, o, r, f, c);

    (a = l.diffed) && a(u);
  } catch (n) {
    u.__v = null, (c || null != r) && (u.__e = e, u.__h = !!c, r[r.indexOf(e)] = null), l.__e(n, u, i);
  }
}

function z(n, u) {
  l.__c && l.__c(u, n), n.some(function (u) {
    try {
      n = u.__h, u.__h = [], n.some(function (n) {
        n.call(u);
      });
    } catch (n) {
      l.__e(n, u.__v);
    }
  });
}

function L(l, u, i, t, o, r, e, c) {
  var s,
      h,
      v,
      y = i.props,
      p = u.props,
      d = u.type,
      k = 0;
  if ("svg" === d && (o = !0), null != r) for (; k < r.length; k++) if ((s = r[k]) && "setAttribute" in s == !!d && (d ? s.localName === d : 3 === s.nodeType)) {
    l = s, r[k] = null;
    break;
  }

  if (null == l) {
    if (null === d) return document.createTextNode(p);
    l = o ? document.createElementNS("http://www.w3.org/2000/svg", d) : document.createElement(d, p.is && p), r = null, c = !1;
  }

  if (null === d) y === p || c && l.data === p || (l.data = p);else {
    if (r = r && n.call(l.childNodes), h = (y = i.props || f).dangerouslySetInnerHTML, v = p.dangerouslySetInnerHTML, !c) {
      if (null != r) for (y = {}, k = 0; k < l.attributes.length; k++) y[l.attributes[k].name] = l.attributes[k].value;
      (v || h) && (v && (h && v.__html == h.__html || v.__html === l.innerHTML) || (l.innerHTML = v && v.__html || ""));
    }

    if (C(l, p, y, o, c), v) u.__k = [];else if (k = u.props.children, w(l, Array.isArray(k) ? k : [k], u, i, t, o && "foreignObject" !== d, r, e, r ? r[0] : i.__k && _(i, 0), c), null != r) for (k = r.length; k--;) null != r[k] && a(r[k]);
    c || ("value" in p && void 0 !== (k = p.value) && (k !== l.value || "progress" === d && !k || "option" === d && k !== y.value) && H$1(l, "value", k, y.value, !1), "checked" in p && void 0 !== (k = p.checked) && k !== l.checked && H$1(l, "checked", k, y.checked, !1));
  }
  return l;
}

function M(n, u, i) {
  try {
    "function" == typeof n ? n(u) : n.current = u;
  } catch (n) {
    l.__e(n, i);
  }
}

function N(n, u, i) {
  var t, o;

  if (l.unmount && l.unmount(n), (t = n.ref) && (t.current && t.current !== n.__e || M(t, null, u)), null != (t = n.__c)) {
    if (t.componentWillUnmount) try {
      t.componentWillUnmount();
    } catch (n) {
      l.__e(n, u);
    }
    t.base = t.__P = null;
  }

  if (t = n.__k) for (o = 0; o < t.length; o++) t[o] && N(t[o], u, "function" != typeof n.type);
  i || null == n.__e || a(n.__e), n.__e = n.__d = void 0;
}

function O(n, l, u) {
  return this.constructor(n, u);
}

function P(u, i, t) {
  var o, r, e;
  l.__ && l.__(u, i), r = (o = "function" == typeof t) ? null : t && t.__k || i.__k, e = [], j(i, u = (!o && t || i).__k = h(p, null, [u]), r || f, f, void 0 !== i.ownerSVGElement, !o && t ? [t] : r ? null : i.firstChild ? n.call(i.childNodes) : null, e, !o && t ? t : r ? r.__e : i.firstChild, o), z(e, u);
}

function q$1(l, u, i) {
  var t,
      o,
      r,
      f = s({}, l.props);

  for (r in u) "key" == r ? t = u[r] : "ref" == r ? o = u[r] : f[r] = u[r];

  return arguments.length > 2 && (f.children = arguments.length > 3 ? n.call(arguments, 2) : i), v(l.type, f, t || l.key, o || l.ref, null);
}

function B(n, l) {
  var u = {
    __c: l = "__cC" + r++,
    __: n,
    Consumer: function (n, l) {
      return n.children(l);
    },
    Provider: function (n) {
      var u, i;
      return this.getChildContext || (u = [], (i = {})[l] = this, this.getChildContext = function () {
        return i;
      }, this.shouldComponentUpdate = function (n) {
        this.props.value !== n.value && u.some(b);
      }, this.sub = function (n) {
        u.push(n);
        var l = n.componentWillUnmount;

        n.componentWillUnmount = function () {
          u.splice(u.indexOf(n), 1), l && l.call(n);
        };
      }), n.children;
    }
  };
  return u.Provider.__ = u.Consumer.contextType = u;
}

n = e.slice, l = {
  __e: function (n, l, u, i) {
    for (var t, o, r; l = l.__;) if ((t = l.__c) && !t.__) try {
      if ((o = t.constructor) && null != o.getDerivedStateFromError && (t.setState(o.getDerivedStateFromError(n)), r = t.__d), null != t.componentDidCatch && (t.componentDidCatch(n, i || {}), r = t.__d), r) return t.__E = t;
    } catch (l) {
      n = l;
    }

    throw n;
  }
}, u = 0, d.prototype.setState = function (n, l) {
  var u;
  u = null != this.__s && this.__s !== this.state ? this.__s : this.__s = s({}, this.state), "function" == typeof n && (n = n(s({}, u), this.props)), n && s(u, n), null != n && this.__v && (l && this.__h.push(l), b(this));
}, d.prototype.forceUpdate = function (n) {
  this.__v && (this.__e = !0, n && this.__h.push(n), b(this));
}, d.prototype.render = p, t = [], g.__r = 0, r = 0;

var getOwnPropertySymbols$3 = {exports: {}};

var getOwnPropertySymbols$2 = {exports: {}};

var parent$D = getOwnPropertySymbols$4;

var getOwnPropertySymbols$1 = parent$D;

var parent$C = getOwnPropertySymbols$1;

var getOwnPropertySymbols = parent$C;

(function (module) {
	module.exports = getOwnPropertySymbols;
} (getOwnPropertySymbols$2));

(function (module) {
	module.exports = getOwnPropertySymbols$2.exports;
} (getOwnPropertySymbols$3));

var _Object$getOwnPropertySymbols = /*@__PURE__*/getDefaultExportFromCjs(getOwnPropertySymbols$3.exports);

var indexOf$3 = {exports: {}};

var indexOf$2 = {exports: {}};

var parent$B = indexOf$4;

var indexOf$1 = parent$B;

var parent$A = indexOf$1;

var indexOf = parent$A;

(function (module) {
	module.exports = indexOf;
} (indexOf$2));

(function (module) {
	module.exports = indexOf$2.exports;
} (indexOf$3));

var _indexOfInstanceProperty = /*@__PURE__*/getDefaultExportFromCjs(indexOf$3.exports);

var keys$3 = {exports: {}};

var keys$2 = {exports: {}};

var parent$z = keys$4;

var keys$1 = parent$z;

var parent$y = keys$1;

var keys = parent$y;

(function (module) {
	module.exports = keys;
} (keys$2));

(function (module) {
	module.exports = keys$2.exports;
} (keys$3));

var _Object$keys = /*@__PURE__*/getDefaultExportFromCjs(keys$3.exports);

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};

  var sourceKeys = _Object$keys(source);

  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (_indexOfInstanceProperty(excluded).call(excluded, key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (_Object$getOwnPropertySymbols) {
    var sourceSymbolKeys = _Object$getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (_indexOfInstanceProperty(excluded).call(excluded, key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

var setTimeout$3 = {exports: {}};

var global$6 = global$s;

var apply$2 = functionApply;

var isCallable$3 = isCallable$n;

var userAgent$2 = engineUserAgent;

var arraySlice$2 = arraySlice$7;

var validateArgumentsLength$1 = validateArgumentsLength$3;

var MSIE = /MSIE .\./.test(userAgent$2); // <- dirty ie9- check

var Function$1 = global$6.Function;

var wrap = function (scheduler) {
  return MSIE ? function (handler, timeout
  /* , ...arguments */
  ) {
    var boundArgs = validateArgumentsLength$1(arguments.length, 1) > 2;
    var fn = isCallable$3(handler) ? handler : Function$1(handler);
    var args = boundArgs ? arraySlice$2(arguments, 2) : undefined;
    return scheduler(boundArgs ? function () {
      apply$2(fn, this, args);
    } : fn, timeout);
  } : scheduler;
}; // ie9- setTimeout & setInterval additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers


var schedulersFix = {
  // `setTimeout` method
  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-settimeout
  setTimeout: wrap(global$6.setTimeout),
  // `setInterval` method
  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-setinterval
  setInterval: wrap(global$6.setInterval)
};

var $$J = _export;

var global$5 = global$s;

var setInterval$2 = schedulersFix.setInterval; // ie9- setInterval additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-setinterval


$$J({
  global: true,
  bind: true,
  forced: global$5.setInterval !== setInterval$2
}, {
  setInterval: setInterval$2
});

var $$I = _export;

var global$4 = global$s;

var setTimeout$2 = schedulersFix.setTimeout; // ie9- setTimeout additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-settimeout


$$I({
  global: true,
  bind: true,
  forced: global$4.setTimeout !== setTimeout$2
}, {
  setTimeout: setTimeout$2
});

var path$c = path$x;

var setTimeout$1 = path$c.setTimeout;

(function (module) {
	module.exports = setTimeout$1;
} (setTimeout$3));

var q = /*@__PURE__*/getDefaultExportFromCjs(setTimeout$3.exports);

var map$9 = {exports: {}};

var $$H = _export;

var $map = arrayIteration.map;

var arrayMethodHasSpeciesSupport = arrayMethodHasSpeciesSupport$4;

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map'); // `Array.prototype.map` method
// https://tc39.es/ecma262/#sec-array.prototype.map
// with adding support of @@species

$$H({
  target: 'Array',
  proto: true,
  forced: !HAS_SPECIES_SUPPORT
}, {
  map: function map(callbackfn
  /* , thisArg */
  ) {
    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

var entryVirtual$b = entryVirtual$o;

var map$8 = entryVirtual$b('Array').map;

var isPrototypeOf$b = objectIsPrototypeOf;

var method$b = map$8;

var ArrayPrototype$8 = Array.prototype;

var map$7 = function (it) {
  var own = it.map;
  return it === ArrayPrototype$8 || isPrototypeOf$b(ArrayPrototype$8, it) && own === ArrayPrototype$8.map ? method$b : own;
};

var parent$x = map$7;

var map$6 = parent$x;

(function (module) {
	module.exports = map$6;
} (map$9));

var K = /*@__PURE__*/getDefaultExportFromCjs(map$9.exports);

var classnames = {exports: {}};

/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/

(function (module) {
	/* global define */
	(function () {

	  var hasOwn = {}.hasOwnProperty;

	  function classNames() {
	    var classes = [];

	    for (var i = 0; i < arguments.length; i++) {
	      var arg = arguments[i];
	      if (!arg) continue;
	      var argType = typeof arg;

	      if (argType === 'string' || argType === 'number') {
	        classes.push(arg);
	      } else if (Array.isArray(arg)) {
	        if (arg.length) {
	          var inner = classNames.apply(null, arg);

	          if (inner) {
	            classes.push(inner);
	          }
	        }
	      } else if (argType === 'object') {
	        if (arg.toString === Object.prototype.toString) {
	          for (var key in arg) {
	            if (hasOwn.call(arg, key) && arg[key]) {
	              classes.push(key);
	            }
	          }
	        } else {
	          classes.push(arg.toString());
	        }
	      }
	    }

	    return classes.join(' ');
	  }

	  if (module.exports) {
	    classNames.default = classNames;
	    module.exports = classNames;
	  } else {
	    window.classNames = classNames;
	  }
	})();
} (classnames));

var H = classnames.exports;

var map$5 = {exports: {}};

var map$4 = {exports: {}};

var internalMetadata = {exports: {}};

// FF26- bug: ArrayBuffers are non-extensible, but Object.isExtensible does not report it
var fails$7 = fails$y;

var arrayBufferNonExtensible = fails$7(function () {
  if (typeof ArrayBuffer == 'function') {
    var buffer = new ArrayBuffer(8); // eslint-disable-next-line es-x/no-object-isextensible, es-x/no-object-defineproperty -- safe

    if (Object.isExtensible(buffer)) Object.defineProperty(buffer, 'a', {
      value: 8
    });
  }
});

var fails$6 = fails$y;

var isObject$4 = isObject$k;

var classof$2 = classofRaw$1;

var ARRAY_BUFFER_NON_EXTENSIBLE = arrayBufferNonExtensible; // eslint-disable-next-line es-x/no-object-isextensible -- safe


var $isExtensible = Object.isExtensible;
var FAILS_ON_PRIMITIVES$1 = fails$6(function () {
  $isExtensible(1);
}); // `Object.isExtensible` method
// https://tc39.es/ecma262/#sec-object.isextensible

var objectIsExtensible = FAILS_ON_PRIMITIVES$1 || ARRAY_BUFFER_NON_EXTENSIBLE ? function isExtensible(it) {
  if (!isObject$4(it)) return false;
  if (ARRAY_BUFFER_NON_EXTENSIBLE && classof$2(it) == 'ArrayBuffer') return false;
  return $isExtensible ? $isExtensible(it) : true;
} : $isExtensible;

var fails$5 = fails$y;

var freezing = !fails$5(function () {
  // eslint-disable-next-line es-x/no-object-isextensible, es-x/no-object-preventextensions -- required for testing
  return Object.isExtensible(Object.preventExtensions({}));
});

var $$G = _export;

var uncurryThis$6 = functionUncurryThis;

var hiddenKeys = hiddenKeys$6;

var isObject$3 = isObject$k;

var hasOwn$3 = hasOwnProperty_1;

var defineProperty$2 = objectDefineProperty.f;

var getOwnPropertyNamesModule = objectGetOwnPropertyNames;

var getOwnPropertyNamesExternalModule = objectGetOwnPropertyNamesExternal;

var isExtensible = objectIsExtensible;

var uid = uid$4;

var FREEZING = freezing;

var REQUIRED = false;
var METADATA = uid('meta');
var id$1 = 0;

var setMetadata = function (it) {
  defineProperty$2(it, METADATA, {
    value: {
      objectID: 'O' + id$1++,
      // object ID
      weakData: {} // weak collections IDs

    }
  });
};

var fastKey$1 = function (it, create) {
  // return a primitive with prefix
  if (!isObject$3(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;

  if (!hasOwn$3(it, METADATA)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F'; // not necessary to add metadata

    if (!create) return 'E'; // add missing metadata

    setMetadata(it); // return object ID
  }

  return it[METADATA].objectID;
};

var getWeakData = function (it, create) {
  if (!hasOwn$3(it, METADATA)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true; // not necessary to add metadata

    if (!create) return false; // add missing metadata

    setMetadata(it); // return the store of weak collections IDs
  }

  return it[METADATA].weakData;
}; // add metadata on freeze-family methods calling


var onFreeze = function (it) {
  if (FREEZING && REQUIRED && isExtensible(it) && !hasOwn$3(it, METADATA)) setMetadata(it);
  return it;
};

var enable = function () {
  meta.enable = function () {
    /* empty */
  };

  REQUIRED = true;
  var getOwnPropertyNames = getOwnPropertyNamesModule.f;
  var splice = uncurryThis$6([].splice);
  var test = {};
  test[METADATA] = 1; // prevent exposing of metadata key

  if (getOwnPropertyNames(test).length) {
    getOwnPropertyNamesModule.f = function (it) {
      var result = getOwnPropertyNames(it);

      for (var i = 0, length = result.length; i < length; i++) {
        if (result[i] === METADATA) {
          splice(result, i, 1);
          break;
        }
      }

      return result;
    };

    $$G({
      target: 'Object',
      stat: true,
      forced: true
    }, {
      getOwnPropertyNames: getOwnPropertyNamesExternalModule.f
    });
  }
};

var meta = internalMetadata.exports = {
  enable: enable,
  fastKey: fastKey$1,
  getWeakData: getWeakData,
  onFreeze: onFreeze
};
hiddenKeys[METADATA] = true;

var $$F = _export;

var global$3 = global$s;

var InternalMetadataModule = internalMetadata.exports;

var fails$4 = fails$y;

var createNonEnumerableProperty = createNonEnumerableProperty$8;

var iterate$f = iterate$l;

var anInstance$2 = anInstance$4;

var isCallable$2 = isCallable$n;

var isObject$2 = isObject$k;

var setToStringTag$1 = setToStringTag$8;

var defineProperty$1 = objectDefineProperty.f;

var forEach = arrayIteration.forEach;

var DESCRIPTORS$3 = descriptors;

var InternalStateModule$2 = internalState;

var setInternalState$2 = InternalStateModule$2.set;
var internalStateGetterFor$1 = InternalStateModule$2.getterFor;

var collection$2 = function (CONSTRUCTOR_NAME, wrapper, common) {
  var IS_MAP = CONSTRUCTOR_NAME.indexOf('Map') !== -1;
  var IS_WEAK = CONSTRUCTOR_NAME.indexOf('Weak') !== -1;
  var ADDER = IS_MAP ? 'set' : 'add';
  var NativeConstructor = global$3[CONSTRUCTOR_NAME];
  var NativePrototype = NativeConstructor && NativeConstructor.prototype;
  var exported = {};
  var Constructor;

  if (!DESCRIPTORS$3 || !isCallable$2(NativeConstructor) || !(IS_WEAK || NativePrototype.forEach && !fails$4(function () {
    new NativeConstructor().entries().next();
  }))) {
    // create collection constructor
    Constructor = common.getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER);
    InternalMetadataModule.enable();
  } else {
    Constructor = wrapper(function (target, iterable) {
      setInternalState$2(anInstance$2(target, Prototype), {
        type: CONSTRUCTOR_NAME,
        collection: new NativeConstructor()
      });
      if (iterable != undefined) iterate$f(iterable, target[ADDER], {
        that: target,
        AS_ENTRIES: IS_MAP
      });
    });
    var Prototype = Constructor.prototype;
    var getInternalState = internalStateGetterFor$1(CONSTRUCTOR_NAME);
    forEach(['add', 'clear', 'delete', 'forEach', 'get', 'has', 'set', 'keys', 'values', 'entries'], function (KEY) {
      var IS_ADDER = KEY == 'add' || KEY == 'set';

      if (KEY in NativePrototype && !(IS_WEAK && KEY == 'clear')) {
        createNonEnumerableProperty(Prototype, KEY, function (a, b) {
          var collection = getInternalState(this).collection;
          if (!IS_ADDER && IS_WEAK && !isObject$2(a)) return KEY == 'get' ? undefined : false;
          var result = collection[KEY](a === 0 ? 0 : a, b);
          return IS_ADDER ? this : result;
        });
      }
    });
    IS_WEAK || defineProperty$1(Prototype, 'size', {
      configurable: true,
      get: function () {
        return getInternalState(this).collection.size;
      }
    });
  }

  setToStringTag$1(Constructor, CONSTRUCTOR_NAME, false, true);
  exported[CONSTRUCTOR_NAME] = Constructor;
  $$F({
    global: true,
    forced: true
  }, exported);
  if (!IS_WEAK) common.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP);
  return Constructor;
};

var defineBuiltIn$1 = defineBuiltIn$7;

var defineBuiltIns$2 = function (target, src, options) {
  for (var key in src) {
    if (options && options.unsafe && target[key]) target[key] = src[key];else defineBuiltIn$1(target, key, src[key], options);
  }

  return target;
};

var defineProperty = objectDefineProperty.f;

var create$2 = objectCreate;

var defineBuiltIns$1 = defineBuiltIns$2;

var bind$a = functionBindContext;

var anInstance$1 = anInstance$4;

var iterate$e = iterate$l;

var defineIterator = defineIterator$3;

var setSpecies = setSpecies$2;

var DESCRIPTORS$2 = descriptors;

var fastKey = internalMetadata.exports.fastKey;

var InternalStateModule$1 = internalState;

var setInternalState$1 = InternalStateModule$1.set;
var internalStateGetterFor = InternalStateModule$1.getterFor;
var collectionStrong$2 = {
  getConstructor: function (wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
    var Constructor = wrapper(function (that, iterable) {
      anInstance$1(that, Prototype);
      setInternalState$1(that, {
        type: CONSTRUCTOR_NAME,
        index: create$2(null),
        first: undefined,
        last: undefined,
        size: 0
      });
      if (!DESCRIPTORS$2) that.size = 0;
      if (iterable != undefined) iterate$e(iterable, that[ADDER], {
        that: that,
        AS_ENTRIES: IS_MAP
      });
    });
    var Prototype = Constructor.prototype;
    var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);

    var define = function (that, key, value) {
      var state = getInternalState(that);
      var entry = getEntry(that, key);
      var previous, index; // change existing entry

      if (entry) {
        entry.value = value; // create new entry
      } else {
        state.last = entry = {
          index: index = fastKey(key, true),
          key: key,
          value: value,
          previous: previous = state.last,
          next: undefined,
          removed: false
        };
        if (!state.first) state.first = entry;
        if (previous) previous.next = entry;
        if (DESCRIPTORS$2) state.size++;else that.size++; // add to index

        if (index !== 'F') state.index[index] = entry;
      }

      return that;
    };

    var getEntry = function (that, key) {
      var state = getInternalState(that); // fast case

      var index = fastKey(key);
      var entry;
      if (index !== 'F') return state.index[index]; // frozen object case

      for (entry = state.first; entry; entry = entry.next) {
        if (entry.key == key) return entry;
      }
    };

    defineBuiltIns$1(Prototype, {
      // `{ Map, Set }.prototype.clear()` methods
      // https://tc39.es/ecma262/#sec-map.prototype.clear
      // https://tc39.es/ecma262/#sec-set.prototype.clear
      clear: function clear() {
        var that = this;
        var state = getInternalState(that);
        var data = state.index;
        var entry = state.first;

        while (entry) {
          entry.removed = true;
          if (entry.previous) entry.previous = entry.previous.next = undefined;
          delete data[entry.index];
          entry = entry.next;
        }

        state.first = state.last = undefined;
        if (DESCRIPTORS$2) state.size = 0;else that.size = 0;
      },
      // `{ Map, Set }.prototype.delete(key)` methods
      // https://tc39.es/ecma262/#sec-map.prototype.delete
      // https://tc39.es/ecma262/#sec-set.prototype.delete
      'delete': function (key) {
        var that = this;
        var state = getInternalState(that);
        var entry = getEntry(that, key);

        if (entry) {
          var next = entry.next;
          var prev = entry.previous;
          delete state.index[entry.index];
          entry.removed = true;
          if (prev) prev.next = next;
          if (next) next.previous = prev;
          if (state.first == entry) state.first = next;
          if (state.last == entry) state.last = prev;
          if (DESCRIPTORS$2) state.size--;else that.size--;
        }

        return !!entry;
      },
      // `{ Map, Set }.prototype.forEach(callbackfn, thisArg = undefined)` methods
      // https://tc39.es/ecma262/#sec-map.prototype.foreach
      // https://tc39.es/ecma262/#sec-set.prototype.foreach
      forEach: function forEach(callbackfn
      /* , that = undefined */
      ) {
        var state = getInternalState(this);
        var boundFunction = bind$a(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
        var entry;

        while (entry = entry ? entry.next : state.first) {
          boundFunction(entry.value, entry.key, this); // revert to the last existing entry

          while (entry && entry.removed) entry = entry.previous;
        }
      },
      // `{ Map, Set}.prototype.has(key)` methods
      // https://tc39.es/ecma262/#sec-map.prototype.has
      // https://tc39.es/ecma262/#sec-set.prototype.has
      has: function has(key) {
        return !!getEntry(this, key);
      }
    });
    defineBuiltIns$1(Prototype, IS_MAP ? {
      // `Map.prototype.get(key)` method
      // https://tc39.es/ecma262/#sec-map.prototype.get
      get: function get(key) {
        var entry = getEntry(this, key);
        return entry && entry.value;
      },
      // `Map.prototype.set(key, value)` method
      // https://tc39.es/ecma262/#sec-map.prototype.set
      set: function set(key, value) {
        return define(this, key === 0 ? 0 : key, value);
      }
    } : {
      // `Set.prototype.add(value)` method
      // https://tc39.es/ecma262/#sec-set.prototype.add
      add: function add(value) {
        return define(this, value = value === 0 ? 0 : value, value);
      }
    });
    if (DESCRIPTORS$2) defineProperty(Prototype, 'size', {
      get: function () {
        return getInternalState(this).size;
      }
    });
    return Constructor;
  },
  setStrong: function (Constructor, CONSTRUCTOR_NAME, IS_MAP) {
    var ITERATOR_NAME = CONSTRUCTOR_NAME + ' Iterator';
    var getInternalCollectionState = internalStateGetterFor(CONSTRUCTOR_NAME);
    var getInternalIteratorState = internalStateGetterFor(ITERATOR_NAME); // `{ Map, Set }.prototype.{ keys, values, entries, @@iterator }()` methods
    // https://tc39.es/ecma262/#sec-map.prototype.entries
    // https://tc39.es/ecma262/#sec-map.prototype.keys
    // https://tc39.es/ecma262/#sec-map.prototype.values
    // https://tc39.es/ecma262/#sec-map.prototype-@@iterator
    // https://tc39.es/ecma262/#sec-set.prototype.entries
    // https://tc39.es/ecma262/#sec-set.prototype.keys
    // https://tc39.es/ecma262/#sec-set.prototype.values
    // https://tc39.es/ecma262/#sec-set.prototype-@@iterator

    defineIterator(Constructor, CONSTRUCTOR_NAME, function (iterated, kind) {
      setInternalState$1(this, {
        type: ITERATOR_NAME,
        target: iterated,
        state: getInternalCollectionState(iterated),
        kind: kind,
        last: undefined
      });
    }, function () {
      var state = getInternalIteratorState(this);
      var kind = state.kind;
      var entry = state.last; // revert to the last existing entry

      while (entry && entry.removed) entry = entry.previous; // get next entry


      if (!state.target || !(state.last = entry = entry ? entry.next : state.state.first)) {
        // or finish the iteration
        state.target = undefined;
        return {
          value: undefined,
          done: true
        };
      } // return step by kind


      if (kind == 'keys') return {
        value: entry.key,
        done: false
      };
      if (kind == 'values') return {
        value: entry.value,
        done: false
      };
      return {
        value: [entry.key, entry.value],
        done: false
      };
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true); // `{ Map, Set }.prototype[@@species]` accessors
    // https://tc39.es/ecma262/#sec-get-map-@@species
    // https://tc39.es/ecma262/#sec-get-set-@@species

    setSpecies(CONSTRUCTOR_NAME);
  }
};

var collection$1 = collection$2;

var collectionStrong$1 = collectionStrong$2; // `Map` constructor
// https://tc39.es/ecma262/#sec-map-objects


collection$1('Map', function (init) {
  return function Map() {
    return init(this, arguments.length ? arguments[0] : undefined);
  };
}, collectionStrong$1);

var path$b = path$x;

var map$3 = path$b.Map;

var parent$w = map$3;



var map$2 = parent$w;

var parent$v = map$2;

var map$1 = parent$v;

var bind$9 = functionBindContext;

var call$b = functionCall;

var aCallable$c = aCallable$o;

var aConstructor = aConstructor$3;

var iterate$d = iterate$l;

var push$4 = [].push;

var collectionFrom = function from(source
/* , mapFn, thisArg */
) {
  var length = arguments.length;
  var mapFn = length > 1 ? arguments[1] : undefined;
  var mapping, array, n, boundFunction;
  aConstructor(this);
  mapping = mapFn !== undefined;
  if (mapping) aCallable$c(mapFn);
  if (source == undefined) return new this();
  array = [];

  if (mapping) {
    n = 0;
    boundFunction = bind$9(mapFn, length > 2 ? arguments[2] : undefined);
    iterate$d(source, function (nextItem) {
      call$b(push$4, array, boundFunction(nextItem, n++));
    });
  } else {
    iterate$d(source, push$4, {
      that: array
    });
  }

  return new this(array);
};

var $$E = _export;

var from$1 = collectionFrom; // `Map.from` method
// https://tc39.github.io/proposal-setmap-offrom/#sec-map.from


$$E({
  target: 'Map',
  stat: true,
  forced: true
}, {
  from: from$1
});

var arraySlice$1 = arraySlice$7; // https://tc39.github.io/proposal-setmap-offrom/


var collectionOf = function of() {
  return new this(arraySlice$1(arguments));
};

var $$D = _export;

var of$1 = collectionOf; // `Map.of` method
// https://tc39.github.io/proposal-setmap-offrom/#sec-map.of


$$D({
  target: 'Map',
  stat: true,
  forced: true
}, {
  of: of$1
});

var call$a = functionCall;

var aCallable$b = aCallable$o;

var anObject$g = anObject$u; // https://github.com/tc39/collection-methods


var collectionDeleteAll = function
  /* ...elements */
deleteAll() {
  var collection = anObject$g(this);
  var remover = aCallable$b(collection['delete']);
  var allDeleted = true;
  var wasDeleted;

  for (var k = 0, len = arguments.length; k < len; k++) {
    wasDeleted = call$a(remover, collection, arguments[k]);
    allDeleted = allDeleted && wasDeleted;
  }

  return !!allDeleted;
};

var $$C = _export;

var deleteAll = collectionDeleteAll; // `Map.prototype.deleteAll` method
// https://github.com/tc39/proposal-collection-methods


$$C({
  target: 'Map',
  proto: true,
  real: true,
  forced: true
}, {
  deleteAll: deleteAll
});

var call$9 = functionCall;

var aCallable$a = aCallable$o;

var anObject$f = anObject$u; // `Map.prototype.emplace` method
// https://github.com/thumbsupep/proposal-upsert


var mapEmplace = function emplace(key, handler) {
  var map = anObject$f(this);
  var get = aCallable$a(map.get);
  var has = aCallable$a(map.has);
  var set = aCallable$a(map.set);
  var value, inserted;

  if (call$9(has, map, key)) {
    value = call$9(get, map, key);

    if ('update' in handler) {
      value = handler.update(value, key, map);
      call$9(set, map, key, value);
    }

    return value;
  }

  inserted = handler.insert(key, map);
  call$9(set, map, key, inserted);
  return inserted;
};

var $$B = _export;

var emplace = mapEmplace; // `Map.prototype.emplace` method
// https://github.com/thumbsupep/proposal-upsert


$$B({
  target: 'Map',
  proto: true,
  real: true,
  forced: true
}, {
  emplace: emplace
});

var getIterator$2 = getIterator$5;

var getMapIterator$a = getIterator$2;

var $$A = _export;

var anObject$e = anObject$u;

var bind$8 = functionBindContext;

var getMapIterator$9 = getMapIterator$a;

var iterate$c = iterate$l; // `Map.prototype.every` method
// https://github.com/tc39/proposal-collection-methods


$$A({
  target: 'Map',
  proto: true,
  real: true,
  forced: true
}, {
  every: function every(callbackfn
  /* , thisArg */
  ) {
    var map = anObject$e(this);
    var iterator = getMapIterator$9(map);
    var boundFunction = bind$8(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    return !iterate$c(iterator, function (key, value, stop) {
      if (!boundFunction(value, key, map)) return stop();
    }, {
      AS_ENTRIES: true,
      IS_ITERATOR: true,
      INTERRUPTED: true
    }).stopped;
  }
});

var $$z = _export;

var getBuiltIn$2 = getBuiltIn$h;

var bind$7 = functionBindContext;

var call$8 = functionCall;

var aCallable$9 = aCallable$o;

var anObject$d = anObject$u;

var speciesConstructor$2 = speciesConstructor$5;

var getMapIterator$8 = getMapIterator$a;

var iterate$b = iterate$l; // `Map.prototype.filter` method
// https://github.com/tc39/proposal-collection-methods


$$z({
  target: 'Map',
  proto: true,
  real: true,
  forced: true
}, {
  filter: function filter(callbackfn
  /* , thisArg */
  ) {
    var map = anObject$d(this);
    var iterator = getMapIterator$8(map);
    var boundFunction = bind$7(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    var newMap = new (speciesConstructor$2(map, getBuiltIn$2('Map')))();
    var setter = aCallable$9(newMap.set);
    iterate$b(iterator, function (key, value) {
      if (boundFunction(value, key, map)) call$8(setter, newMap, key, value);
    }, {
      AS_ENTRIES: true,
      IS_ITERATOR: true
    });
    return newMap;
  }
});

var $$y = _export;

var anObject$c = anObject$u;

var bind$6 = functionBindContext;

var getMapIterator$7 = getMapIterator$a;

var iterate$a = iterate$l; // `Map.prototype.find` method
// https://github.com/tc39/proposal-collection-methods


$$y({
  target: 'Map',
  proto: true,
  real: true,
  forced: true
}, {
  find: function find(callbackfn
  /* , thisArg */
  ) {
    var map = anObject$c(this);
    var iterator = getMapIterator$7(map);
    var boundFunction = bind$6(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    return iterate$a(iterator, function (key, value, stop) {
      if (boundFunction(value, key, map)) return stop(value);
    }, {
      AS_ENTRIES: true,
      IS_ITERATOR: true,
      INTERRUPTED: true
    }).result;
  }
});

var $$x = _export;

var anObject$b = anObject$u;

var bind$5 = functionBindContext;

var getMapIterator$6 = getMapIterator$a;

var iterate$9 = iterate$l; // `Map.prototype.findKey` method
// https://github.com/tc39/proposal-collection-methods


$$x({
  target: 'Map',
  proto: true,
  real: true,
  forced: true
}, {
  findKey: function findKey(callbackfn
  /* , thisArg */
  ) {
    var map = anObject$b(this);
    var iterator = getMapIterator$6(map);
    var boundFunction = bind$5(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    return iterate$9(iterator, function (key, value, stop) {
      if (boundFunction(value, key, map)) return stop(key);
    }, {
      AS_ENTRIES: true,
      IS_ITERATOR: true,
      INTERRUPTED: true
    }).result;
  }
});

var $$w = _export;

var call$7 = functionCall;

var uncurryThis$5 = functionUncurryThis;

var aCallable$8 = aCallable$o;

var getIterator$1 = getIterator$5;

var iterate$8 = iterate$l;

var push$3 = uncurryThis$5([].push); // `Map.groupBy` method
// https://github.com/tc39/proposal-collection-methods

$$w({
  target: 'Map',
  stat: true,
  forced: true
}, {
  groupBy: function groupBy(iterable, keyDerivative) {
    aCallable$8(keyDerivative);
    var iterator = getIterator$1(iterable);
    var newMap = new this();
    var has = aCallable$8(newMap.has);
    var get = aCallable$8(newMap.get);
    var set = aCallable$8(newMap.set);
    iterate$8(iterator, function (element) {
      var derivedKey = keyDerivative(element);
      if (!call$7(has, newMap, derivedKey)) call$7(set, newMap, derivedKey, [element]);else push$3(call$7(get, newMap, derivedKey), element);
    }, {
      IS_ITERATOR: true
    });
    return newMap;
  }
});

// `SameValueZero` abstract operation
// https://tc39.es/ecma262/#sec-samevaluezero
var sameValueZero$1 = function (x, y) {
  // eslint-disable-next-line no-self-compare -- NaN check
  return x === y || x != x && y != y;
};

var $$v = _export;

var anObject$a = anObject$u;

var getMapIterator$5 = getMapIterator$a;

var sameValueZero = sameValueZero$1;

var iterate$7 = iterate$l; // `Map.prototype.includes` method
// https://github.com/tc39/proposal-collection-methods


$$v({
  target: 'Map',
  proto: true,
  real: true,
  forced: true
}, {
  includes: function includes(searchElement) {
    return iterate$7(getMapIterator$5(anObject$a(this)), function (key, value, stop) {
      if (sameValueZero(value, searchElement)) return stop();
    }, {
      AS_ENTRIES: true,
      IS_ITERATOR: true,
      INTERRUPTED: true
    }).stopped;
  }
});

var $$u = _export;

var call$6 = functionCall;

var iterate$6 = iterate$l;

var aCallable$7 = aCallable$o; // `Map.keyBy` method
// https://github.com/tc39/proposal-collection-methods


$$u({
  target: 'Map',
  stat: true,
  forced: true
}, {
  keyBy: function keyBy(iterable, keyDerivative) {
    var newMap = new this();
    aCallable$7(keyDerivative);
    var setter = aCallable$7(newMap.set);
    iterate$6(iterable, function (element) {
      call$6(setter, newMap, keyDerivative(element), element);
    });
    return newMap;
  }
});

var $$t = _export;

var anObject$9 = anObject$u;

var getMapIterator$4 = getMapIterator$a;

var iterate$5 = iterate$l; // `Map.prototype.keyOf` method
// https://github.com/tc39/proposal-collection-methods


$$t({
  target: 'Map',
  proto: true,
  real: true,
  forced: true
}, {
  keyOf: function keyOf(searchElement) {
    return iterate$5(getMapIterator$4(anObject$9(this)), function (key, value, stop) {
      if (value === searchElement) return stop(key);
    }, {
      AS_ENTRIES: true,
      IS_ITERATOR: true,
      INTERRUPTED: true
    }).result;
  }
});

var $$s = _export;

var getBuiltIn$1 = getBuiltIn$h;

var bind$4 = functionBindContext;

var call$5 = functionCall;

var aCallable$6 = aCallable$o;

var anObject$8 = anObject$u;

var speciesConstructor$1 = speciesConstructor$5;

var getMapIterator$3 = getMapIterator$a;

var iterate$4 = iterate$l; // `Map.prototype.mapKeys` method
// https://github.com/tc39/proposal-collection-methods


$$s({
  target: 'Map',
  proto: true,
  real: true,
  forced: true
}, {
  mapKeys: function mapKeys(callbackfn
  /* , thisArg */
  ) {
    var map = anObject$8(this);
    var iterator = getMapIterator$3(map);
    var boundFunction = bind$4(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    var newMap = new (speciesConstructor$1(map, getBuiltIn$1('Map')))();
    var setter = aCallable$6(newMap.set);
    iterate$4(iterator, function (key, value) {
      call$5(setter, newMap, boundFunction(value, key, map), value);
    }, {
      AS_ENTRIES: true,
      IS_ITERATOR: true
    });
    return newMap;
  }
});

var $$r = _export;

var getBuiltIn = getBuiltIn$h;

var bind$3 = functionBindContext;

var call$4 = functionCall;

var aCallable$5 = aCallable$o;

var anObject$7 = anObject$u;

var speciesConstructor = speciesConstructor$5;

var getMapIterator$2 = getMapIterator$a;

var iterate$3 = iterate$l; // `Map.prototype.mapValues` method
// https://github.com/tc39/proposal-collection-methods


$$r({
  target: 'Map',
  proto: true,
  real: true,
  forced: true
}, {
  mapValues: function mapValues(callbackfn
  /* , thisArg */
  ) {
    var map = anObject$7(this);
    var iterator = getMapIterator$2(map);
    var boundFunction = bind$3(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    var newMap = new (speciesConstructor(map, getBuiltIn('Map')))();
    var setter = aCallable$5(newMap.set);
    iterate$3(iterator, function (key, value) {
      call$4(setter, newMap, key, boundFunction(value, key, map));
    }, {
      AS_ENTRIES: true,
      IS_ITERATOR: true
    });
    return newMap;
  }
});

var $$q = _export;

var aCallable$4 = aCallable$o;

var anObject$6 = anObject$u;

var iterate$2 = iterate$l; // `Map.prototype.merge` method
// https://github.com/tc39/proposal-collection-methods


$$q({
  target: 'Map',
  proto: true,
  real: true,
  arity: 1,
  forced: true
}, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  merge: function merge(iterable
  /* ...iterables */
  ) {
    var map = anObject$6(this);
    var setter = aCallable$4(map.set);
    var argumentsLength = arguments.length;
    var i = 0;

    while (i < argumentsLength) {
      iterate$2(arguments[i++], setter, {
        that: map,
        AS_ENTRIES: true
      });
    }

    return map;
  }
});

var $$p = _export;

var anObject$5 = anObject$u;

var aCallable$3 = aCallable$o;

var getMapIterator$1 = getMapIterator$a;

var iterate$1 = iterate$l;

var $TypeError$3 = TypeError; // `Map.prototype.reduce` method
// https://github.com/tc39/proposal-collection-methods

$$p({
  target: 'Map',
  proto: true,
  real: true,
  forced: true
}, {
  reduce: function reduce(callbackfn
  /* , initialValue */
  ) {
    var map = anObject$5(this);
    var iterator = getMapIterator$1(map);
    var noInitial = arguments.length < 2;
    var accumulator = noInitial ? undefined : arguments[1];
    aCallable$3(callbackfn);
    iterate$1(iterator, function (key, value) {
      if (noInitial) {
        noInitial = false;
        accumulator = value;
      } else {
        accumulator = callbackfn(accumulator, value, key, map);
      }
    }, {
      AS_ENTRIES: true,
      IS_ITERATOR: true
    });
    if (noInitial) throw $TypeError$3('Reduce of empty map with no initial value');
    return accumulator;
  }
});

var $$o = _export;

var anObject$4 = anObject$u;

var bind$2 = functionBindContext;

var getMapIterator = getMapIterator$a;

var iterate = iterate$l; // `Set.prototype.some` method
// https://github.com/tc39/proposal-collection-methods


$$o({
  target: 'Map',
  proto: true,
  real: true,
  forced: true
}, {
  some: function some(callbackfn
  /* , thisArg */
  ) {
    var map = anObject$4(this);
    var iterator = getMapIterator(map);
    var boundFunction = bind$2(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    return iterate(iterator, function (key, value, stop) {
      if (boundFunction(value, key, map)) return stop();
    }, {
      AS_ENTRIES: true,
      IS_ITERATOR: true,
      INTERRUPTED: true
    }).stopped;
  }
});

var $$n = _export;

var call$3 = functionCall;

var anObject$3 = anObject$u;

var aCallable$2 = aCallable$o;

var $TypeError$2 = TypeError; // `Set.prototype.update` method
// https://github.com/tc39/proposal-collection-methods

$$n({
  target: 'Map',
  proto: true,
  real: true,
  forced: true
}, {
  update: function update(key, callback
  /* , thunk */
  ) {
    var map = anObject$3(this);
    var get = aCallable$2(map.get);
    var has = aCallable$2(map.has);
    var set = aCallable$2(map.set);
    var length = arguments.length;
    aCallable$2(callback);
    var isPresentInMap = call$3(has, map, key);

    if (!isPresentInMap && length < 3) {
      throw $TypeError$2('Updating absent value');
    }

    var value = isPresentInMap ? call$3(get, map, key) : aCallable$2(length > 2 ? arguments[2] : undefined)(key, map);
    call$3(set, map, key, callback(value, key, map));
    return map;
  }
});

var call$2 = functionCall;

var aCallable$1 = aCallable$o;

var isCallable$1 = isCallable$n;

var anObject$2 = anObject$u;

var $TypeError$1 = TypeError; // `Map.prototype.upsert` method
// https://github.com/thumbsupep/proposal-upsert

var mapUpsert = function upsert(key, updateFn
/* , insertFn */
) {
  var map = anObject$2(this);
  var get = aCallable$1(map.get);
  var has = aCallable$1(map.has);
  var set = aCallable$1(map.set);
  var insertFn = arguments.length > 2 ? arguments[2] : undefined;
  var value;

  if (!isCallable$1(updateFn) && !isCallable$1(insertFn)) {
    throw $TypeError$1('At least one callback required');
  }

  if (call$2(has, map, key)) {
    value = call$2(get, map, key);

    if (isCallable$1(updateFn)) {
      value = updateFn(value);
      call$2(set, map, key, value);
    }
  } else if (isCallable$1(insertFn)) {
    value = insertFn();
    call$2(set, map, key, value);
  }

  return value;
};

var $$m = _export;

var upsert$1 = mapUpsert; // `Map.prototype.upsert` method (replaced by `Map.prototype.emplace`)
// https://github.com/thumbsupep/proposal-upsert


$$m({
  target: 'Map',
  proto: true,
  real: true,
  forced: true
}, {
  upsert: upsert$1
});

var $$l = _export;

var upsert = mapUpsert; // `Map.prototype.updateOrInsert` method (replaced by `Map.prototype.emplace`)
// https://github.com/thumbsupep/proposal-upsert


$$l({
  target: 'Map',
  proto: true,
  real: true,
  name: 'upsert',
  forced: true
}, {
  updateOrInsert: upsert
});

var parent$u = map$1;



































 // TODO: remove from `core-js@4`


 // TODO: remove from `core-js@4`




var map = parent$u;

(function (module) {
	module.exports = map;
} (map$4));

(function (module) {
	module.exports = map$4.exports;
} (map$5));

var _Map = /*@__PURE__*/getDefaultExportFromCjs(map$5.exports);

function _isNativeFunction(fn) {
  var _context;

  return _indexOfInstanceProperty(_context = Function.toString.call(fn)).call(_context, "[native code]") !== -1;
}

var construct$3 = {exports: {}};

var construct$2 = {exports: {}};

var parent$t = construct$4;

var construct$1 = parent$t;

var parent$s = construct$1;

var construct = parent$s;

(function (module) {
	module.exports = construct;
} (construct$2));

(function (module) {
	module.exports = construct$2.exports;
} (construct$3));

var _Reflect$construct = /*@__PURE__*/getDefaultExportFromCjs(construct$3.exports);

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !_Reflect$construct) return false;
  if (_Reflect$construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(_Reflect$construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    var _context;

    _construct = _bindInstanceProperty(_context = _Reflect$construct).call(_context);
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);

      var Constructor = _bindInstanceProperty(Function).apply(Parent, a);

      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _wrapNativeSuper(Class) {
  var _cache = typeof _Map === "function" ? new _Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = _Object$create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

var stringify$2 = {exports: {}};

var path$a = path$x;

var apply$1 = functionApply; // eslint-disable-next-line es-x/no-json -- safe


if (!path$a.JSON) path$a.JSON = {
  stringify: JSON.stringify
}; // eslint-disable-next-line no-unused-vars -- required for `.length`

var stringify$1 = function stringify(it, replacer, space) {
  return apply$1(path$a.JSON.stringify, null, arguments);
};

var parent$r = stringify$1;

var stringify = parent$r;

(function (module) {
	module.exports = stringify;
} (stringify$2));

var W = /*@__PURE__*/getDefaultExportFromCjs(stringify$2.exports);

var slice = {exports: {}};

(function (module) {
	module.exports = slice$3;
} (slice));

var G = /*@__PURE__*/getDefaultExportFromCjs(slice.exports);

var get$6 = {exports: {}};

var get$5 = {exports: {}};

var hasOwn$2 = hasOwnProperty_1;

var isDataDescriptor$1 = function (descriptor) {
  return descriptor !== undefined && (hasOwn$2(descriptor, 'value') || hasOwn$2(descriptor, 'writable'));
};

var $$k = _export;

var call$1 = functionCall;

var isObject$1 = isObject$k;

var anObject$1 = anObject$u;

var isDataDescriptor = isDataDescriptor$1;

var getOwnPropertyDescriptorModule = objectGetOwnPropertyDescriptor;

var getPrototypeOf = objectGetPrototypeOf; // `Reflect.get` method
// https://tc39.es/ecma262/#sec-reflect.get


function get$4(target, propertyKey
/* , receiver */
) {
  var receiver = arguments.length < 3 ? target : arguments[2];
  var descriptor, prototype;
  if (anObject$1(target) === receiver) return target[propertyKey];
  descriptor = getOwnPropertyDescriptorModule.f(target, propertyKey);
  if (descriptor) return isDataDescriptor(descriptor) ? descriptor.value : descriptor.get === undefined ? undefined : call$1(descriptor.get, receiver);
  if (isObject$1(prototype = getPrototypeOf(target))) return get$4(prototype, propertyKey, receiver);
}

$$k({
  target: 'Reflect',
  stat: true
}, {
  get: get$4
});

var path$9 = path$x;

var get$3 = path$9.Reflect.get;

var parent$q = get$3;

var get$2 = parent$q;

var parent$p = get$2;

var get$1 = parent$p;

var parent$o = get$1;

var get = parent$o;

(function (module) {
	module.exports = get;
} (get$5));

(function (module) {
	module.exports = get$5.exports;
} (get$6));

var _Reflect$get = /*@__PURE__*/getDefaultExportFromCjs(get$6.exports);

var getOwnPropertyDescriptor$4 = {exports: {}};

var getOwnPropertyDescriptor$3 = {exports: {}};

var parent$n = getOwnPropertyDescriptor$5;

var getOwnPropertyDescriptor$2 = parent$n;

var parent$m = getOwnPropertyDescriptor$2;

var getOwnPropertyDescriptor$1 = parent$m;

(function (module) {
	module.exports = getOwnPropertyDescriptor$1;
} (getOwnPropertyDescriptor$3));

(function (module) {
	module.exports = getOwnPropertyDescriptor$3.exports;
} (getOwnPropertyDescriptor$4));

var _Object$getOwnPropertyDescriptor = /*@__PURE__*/getDefaultExportFromCjs(getOwnPropertyDescriptor$4.exports);

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = _getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}

function _get() {
  if (typeof Reflect !== "undefined" && _Reflect$get) {
    var _context;

    _get = _bindInstanceProperty(_context = _Reflect$get).call(_context);
  } else {
    _get = function _get(target, property, receiver) {
      var base = _superPropBase(target, property);
      if (!base) return;

      var desc = _Object$getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(arguments.length < 3 ? target : receiver);
      }

      return desc.value;
    };
  }

  return _get.apply(this, arguments);
}

var every$3 = {exports: {}};

var $$j = _export;

var $every = arrayIteration.every;

var arrayMethodIsStrict$3 = arrayMethodIsStrict$7;

var STRICT_METHOD$3 = arrayMethodIsStrict$3('every'); // `Array.prototype.every` method
// https://tc39.es/ecma262/#sec-array.prototype.every

$$j({
  target: 'Array',
  proto: true,
  forced: !STRICT_METHOD$3
}, {
  every: function every(callbackfn
  /* , thisArg */
  ) {
    return $every(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

var entryVirtual$a = entryVirtual$o;

var every$2 = entryVirtual$a('Array').every;

var isPrototypeOf$a = objectIsPrototypeOf;

var method$a = every$2;

var ArrayPrototype$7 = Array.prototype;

var every$1 = function (it) {
  var own = it.every;
  return it === ArrayPrototype$7 || isPrototypeOf$a(ArrayPrototype$7, it) && own === ArrayPrototype$7.every ? method$a : own;
};

var parent$l = every$1;

var every = parent$l;

(function (module) {
	module.exports = every;
} (every$3));

var $$i = /*@__PURE__*/getDefaultExportFromCjs(every$3.exports);

var now$2 = {exports: {}};

// TODO: Remove from `core-js@4`
var $$h = _export;

var uncurryThis$4 = functionUncurryThis;

var $Date = Date;
var getTime = uncurryThis$4($Date.prototype.getTime); // `Date.now` method
// https://tc39.es/ecma262/#sec-date.now

$$h({
  target: 'Date',
  stat: true
}, {
  now: function now() {
    return getTime(new $Date());
  }
});

var path$8 = path$x;

var now$1 = path$8.Date.now;

var parent$k = now$1;

var now = parent$k;

(function (module) {
	module.exports = now;
} (now$2));

var Z = /*@__PURE__*/getDefaultExportFromCjs(now$2.exports);

var trim$3 = {exports: {}};

var PROPER_FUNCTION_NAME = functionName.PROPER;

var fails$3 = fails$y;

var whitespaces = whitespaces$3;

var non = '\u200B\u0085\u180E'; // check that a method works with the correct list
// of whitespaces and has a correct name

var stringTrimForced = function (METHOD_NAME) {
  return fails$3(function () {
    return !!whitespaces[METHOD_NAME]() || non[METHOD_NAME]() !== non || PROPER_FUNCTION_NAME && whitespaces[METHOD_NAME].name !== METHOD_NAME;
  });
};

var $$g = _export;

var $trim = stringTrim.trim;

var forcedStringTrimMethod$1 = stringTrimForced; // `String.prototype.trim` method
// https://tc39.es/ecma262/#sec-string.prototype.trim


$$g({
  target: 'String',
  proto: true,
  forced: forcedStringTrimMethod$1('trim')
}, {
  trim: function trim() {
    return $trim(this);
  }
});

var entryVirtual$9 = entryVirtual$o;

var trim$2 = entryVirtual$9('String').trim;

var isPrototypeOf$9 = objectIsPrototypeOf;

var method$9 = trim$2;

var StringPrototype$2 = String.prototype;

var trim$1 = function (it) {
  var own = it.trim;
  return typeof it == 'string' || it === StringPrototype$2 || isPrototypeOf$9(StringPrototype$2, it) && own === StringPrototype$2.trim ? method$9 : own;
};

var parent$j = trim$1;

var trim = parent$j;

(function (module) {
	module.exports = trim;
} (trim$3));

var J = /*@__PURE__*/getDefaultExportFromCjs(trim$3.exports);

var lastIndexOf$4 = {exports: {}};

/* eslint-disable es-x/no-array-prototype-lastindexof -- safe */

var apply = functionApply;

var toIndexedObject$1 = toIndexedObject$c;

var toIntegerOrInfinity$2 = toIntegerOrInfinity$6;

var lengthOfArrayLike$4 = lengthOfArrayLike$d;

var arrayMethodIsStrict$2 = arrayMethodIsStrict$7;

var min = Math.min;
var $lastIndexOf = [].lastIndexOf;
var NEGATIVE_ZERO = !!$lastIndexOf && 1 / [1].lastIndexOf(1, -0) < 0;
var STRICT_METHOD$2 = arrayMethodIsStrict$2('lastIndexOf');
var FORCED$1 = NEGATIVE_ZERO || !STRICT_METHOD$2; // `Array.prototype.lastIndexOf` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.lastindexof

var arrayLastIndexOf = FORCED$1 ? function lastIndexOf(searchElement
/* , fromIndex = @[*-1] */
) {
  // convert -0 to +0
  if (NEGATIVE_ZERO) return apply($lastIndexOf, this, arguments) || 0;
  var O = toIndexedObject$1(this);
  var length = lengthOfArrayLike$4(O);
  var index = length - 1;
  if (arguments.length > 1) index = min(index, toIntegerOrInfinity$2(arguments[1]));
  if (index < 0) index = length + index;

  for (; index >= 0; index--) if (index in O && O[index] === searchElement) return index || 0;

  return -1;
} : $lastIndexOf;

var $$f = _export;

var lastIndexOf$3 = arrayLastIndexOf; // `Array.prototype.lastIndexOf` method
// https://tc39.es/ecma262/#sec-array.prototype.lastindexof
// eslint-disable-next-line es-x/no-array-prototype-lastindexof -- required for testing


$$f({
  target: 'Array',
  proto: true,
  forced: lastIndexOf$3 !== [].lastIndexOf
}, {
  lastIndexOf: lastIndexOf$3
});

var entryVirtual$8 = entryVirtual$o;

var lastIndexOf$2 = entryVirtual$8('Array').lastIndexOf;

var isPrototypeOf$8 = objectIsPrototypeOf;

var method$8 = lastIndexOf$2;

var ArrayPrototype$6 = Array.prototype;

var lastIndexOf$1 = function (it) {
  var own = it.lastIndexOf;
  return it === ArrayPrototype$6 || isPrototypeOf$8(ArrayPrototype$6, it) && own === ArrayPrototype$6.lastIndexOf ? method$8 : own;
};

var parent$i = lastIndexOf$1;

var lastIndexOf = parent$i;

(function (module) {
	module.exports = lastIndexOf;
} (lastIndexOf$4));

var Q = /*@__PURE__*/getDefaultExportFromCjs(lastIndexOf$4.exports);

var isArray$1 = {exports: {}};

(function (module) {
	module.exports = isArray$4;
} (isArray$1));

var X = /*@__PURE__*/getDefaultExportFromCjs(isArray$1.exports);

var values$2 = {exports: {}};

var DESCRIPTORS$1 = descriptors;

var uncurryThis$3 = functionUncurryThis;

var objectKeys = objectKeys$4;

var toIndexedObject = toIndexedObject$c;

var $propertyIsEnumerable = objectPropertyIsEnumerable.f;

var propertyIsEnumerable = uncurryThis$3($propertyIsEnumerable);
var push$2 = uncurryThis$3([].push); // `Object.{ entries, values }` methods implementation

var createMethod = function (TO_ENTRIES) {
  return function (it) {
    var O = toIndexedObject(it);
    var keys = objectKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;

    while (length > i) {
      key = keys[i++];

      if (!DESCRIPTORS$1 || propertyIsEnumerable(O, key)) {
        push$2(result, TO_ENTRIES ? [key, O[key]] : O[key]);
      }
    }

    return result;
  };
};

var objectToArray = {
  // `Object.entries` method
  // https://tc39.es/ecma262/#sec-object.entries
  entries: createMethod(true),
  // `Object.values` method
  // https://tc39.es/ecma262/#sec-object.values
  values: createMethod(false)
};

var $$e = _export;

var $values = objectToArray.values; // `Object.values` method
// https://tc39.es/ecma262/#sec-object.values


$$e({
  target: 'Object',
  stat: true
}, {
  values: function values(O) {
    return $values(O);
  }
});

var path$7 = path$x;

var values$1 = path$7.Object.values;

var parent$h = values$1;

var values = parent$h;

(function (module) {
	module.exports = values;
} (values$2));

var ee = /*@__PURE__*/getDefaultExportFromCjs(values$2.exports);

var fill$4 = {exports: {}};

var toObject$2 = toObject$d;

var toAbsoluteIndex$1 = toAbsoluteIndex$5;

var lengthOfArrayLike$3 = lengthOfArrayLike$d; // `Array.prototype.fill` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.fill


var arrayFill = function fill(value
/* , start = 0, end = @length */
) {
  var O = toObject$2(this);
  var length = lengthOfArrayLike$3(O);
  var argumentsLength = arguments.length;
  var index = toAbsoluteIndex$1(argumentsLength > 1 ? arguments[1] : undefined, length);
  var end = argumentsLength > 2 ? arguments[2] : undefined;
  var endPos = end === undefined ? length : toAbsoluteIndex$1(end, length);

  while (endPos > index) O[index++] = value;

  return O;
};

var $$d = _export;

var fill$3 = arrayFill;
// https://tc39.es/ecma262/#sec-array.prototype.fill


$$d({
  target: 'Array',
  proto: true
}, {
  fill: fill$3
}); // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables

var entryVirtual$7 = entryVirtual$o;

var fill$2 = entryVirtual$7('Array').fill;

var isPrototypeOf$7 = objectIsPrototypeOf;

var method$7 = fill$2;

var ArrayPrototype$5 = Array.prototype;

var fill$1 = function (it) {
  var own = it.fill;
  return it === ArrayPrototype$5 || isPrototypeOf$7(ArrayPrototype$5, it) && own === ArrayPrototype$5.fill ? method$7 : own;
};

var parent$g = fill$1;

var fill = parent$g;

(function (module) {
	module.exports = fill;
} (fill$4));

var te = /*@__PURE__*/getDefaultExportFromCjs(fill$4.exports);

var trimStart$5 = {exports: {}};

var $trimStart = stringTrim.start;

var forcedStringTrimMethod = stringTrimForced; // `String.prototype.{ trimStart, trimLeft }` method
// https://tc39.es/ecma262/#sec-string.prototype.trimstart
// https://tc39.es/ecma262/#String.prototype.trimleft


var stringTrimStart = forcedStringTrimMethod('trimStart') ? function trimStart() {
  return $trimStart(this); // eslint-disable-next-line es-x/no-string-prototype-trimstart-trimend -- safe
} : ''.trimStart;

var $$c = _export;

var trimStart$4 = stringTrimStart; // `String.prototype.trimLeft` method
// https://tc39.es/ecma262/#sec-string.prototype.trimleft
// eslint-disable-next-line es-x/no-string-prototype-trimleft-trimright -- safe


$$c({
  target: 'String',
  proto: true,
  name: 'trimStart',
  forced: ''.trimLeft !== trimStart$4
}, {
  trimLeft: trimStart$4
});

// TODO: Remove this line from `core-js@4`


var $$b = _export;

var trimStart$3 = stringTrimStart; // `String.prototype.trimStart` method
// https://tc39.es/ecma262/#sec-string.prototype.trimstart
// eslint-disable-next-line es-x/no-string-prototype-trimstart-trimend -- safe


$$b({
  target: 'String',
  proto: true,
  name: 'trimStart',
  forced: ''.trimStart !== trimStart$3
}, {
  trimStart: trimStart$3
});

var entryVirtual$6 = entryVirtual$o;

var trimStart$2 = entryVirtual$6('String').trimLeft;

var isPrototypeOf$6 = objectIsPrototypeOf;

var method$6 = trimStart$2;

var StringPrototype$1 = String.prototype;

var trimStart$1 = function (it) {
  var own = it.trimStart;
  return typeof it == 'string' || it === StringPrototype$1 || isPrototypeOf$6(StringPrototype$1, it) && own === StringPrototype$1.trimStart ? method$6 : own;
};

var parent$f = trimStart$1;

var trimStart = parent$f;

(function (module) {
	module.exports = trimStart;
} (trimStart$5));

var ne = /*@__PURE__*/getDefaultExportFromCjs(trimStart$5.exports);

var globalThis$6 = {exports: {}};

var globalThis$5 = {exports: {}};

var $$a = _export;

var global$2 = global$s; // `globalThis` object
// https://tc39.es/ecma262/#sec-globalthis


$$a({
  global: true
}, {
  globalThis: global$2
});

var globalThis$4 = {exports: {}};

(function (module) {
	module.exports = global$s;
} (globalThis$4));

var parent$e = globalThis$4.exports;

var globalThis$3 = parent$e;

var parent$d = globalThis$3;

var globalThis$2 = parent$d;

// TODO: remove from `core-js@4`


var parent$c = globalThis$2;

var globalThis$1 = parent$c;

(function (module) {
	module.exports = globalThis$1;
} (globalThis$5));

(function (module) {
	module.exports = globalThis$5.exports;
} (globalThis$6));

var re = /*@__PURE__*/getDefaultExportFromCjs(globalThis$6.exports);

var symbol = {exports: {}};

(function (module) {
	module.exports = symbol$3;
} (symbol));

var ae = /*@__PURE__*/getDefaultExportFromCjs(symbol.exports);

var iterator = {exports: {}};

(function (module) {
	module.exports = iterator$3;
} (iterator));

var oe = /*@__PURE__*/getDefaultExportFromCjs(iterator.exports);

var getOwnPropertyNames$3 = {exports: {}};

var $$9 = _export;

var fails$2 = fails$y;

var getOwnPropertyNames$2 = objectGetOwnPropertyNamesExternal.f; // eslint-disable-next-line es-x/no-object-getownpropertynames -- required for testing


var FAILS_ON_PRIMITIVES = fails$2(function () {
  return !Object.getOwnPropertyNames(1);
}); // `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames

$$9({
  target: 'Object',
  stat: true,
  forced: FAILS_ON_PRIMITIVES
}, {
  getOwnPropertyNames: getOwnPropertyNames$2
});

var path$6 = path$x;

var Object$1 = path$6.Object;

var getOwnPropertyNames$1 = function getOwnPropertyNames(it) {
  return Object$1.getOwnPropertyNames(it);
};

var parent$b = getOwnPropertyNames$1;

var getOwnPropertyNames = parent$b;

(function (module) {
	module.exports = getOwnPropertyNames;
} (getOwnPropertyNames$3));

var ie = /*@__PURE__*/getDefaultExportFromCjs(getOwnPropertyNames$3.exports);

var entries$6 = {exports: {}};

var entryVirtual$5 = entryVirtual$o;

var entries$5 = entryVirtual$5('Array').entries;

var parent$a = entries$5;

var entries$4 = parent$a;

var classof$1 = classof$e;

var hasOwn$1 = hasOwnProperty_1;

var isPrototypeOf$5 = objectIsPrototypeOf;

var method$5 = entries$4;

var ArrayPrototype$4 = Array.prototype;
var DOMIterables = {
  DOMTokenList: true,
  NodeList: true
};

var entries$3 = function (it) {
  var own = it.entries;
  return it === ArrayPrototype$4 || isPrototypeOf$5(ArrayPrototype$4, it) && own === ArrayPrototype$4.entries || hasOwn$1(DOMIterables, classof$1(it)) ? method$5 : own;
};

(function (module) {
	module.exports = entries$3;
} (entries$6));

var le = /*@__PURE__*/getDefaultExportFromCjs(entries$6.exports);

var urlSearchParams$2 = {exports: {}};

var fails$1 = fails$y;

var wellKnownSymbol$1 = wellKnownSymbol$p;

var IS_PURE = isPure;

var ITERATOR$1 = wellKnownSymbol$1('iterator');
var nativeUrl = !fails$1(function () {
  // eslint-disable-next-line unicorn/relative-url-style -- required for testing
  var url = new URL('b?a=1&b=2&c=3', 'http://a');
  var searchParams = url.searchParams;
  var result = '';
  url.pathname = 'c%20d';
  searchParams.forEach(function (value, key) {
    searchParams['delete']('b');
    result += key + value;
  });
  return IS_PURE && !url.toJSON || !searchParams.sort || url.href !== 'http://a/c%20d?a=1&c=3' || searchParams.get('c') !== '3' || String(new URLSearchParams('?a=1')) !== 'a=1' || !searchParams[ITERATOR$1] // throws in Edge
  || new URL('https://a@b').username !== 'a' || new URLSearchParams(new URLSearchParams('a=b')).get('a') !== 'b' // not punycoded in Edge
  || new URL('http://тест').host !== 'xn--e1aybc' // not escaped in Chrome 62-
  || new URL('http://a#б').hash !== '#%D0%B1' // fails in Chrome 66-
  || result !== 'a1c3' // throws in Safari
  || new URL('http://x', undefined).host !== 'x';
});

var arraySlice = arraySliceSimple;

var floor = Math.floor;

var mergeSort = function (array, comparefn) {
  var length = array.length;
  var middle = floor(length / 2);
  return length < 8 ? insertionSort(array, comparefn) : merge(array, mergeSort(arraySlice(array, 0, middle), comparefn), mergeSort(arraySlice(array, middle), comparefn), comparefn);
};

var insertionSort = function (array, comparefn) {
  var length = array.length;
  var i = 1;
  var element, j;

  while (i < length) {
    j = i;
    element = array[i];

    while (j && comparefn(array[j - 1], element) > 0) {
      array[j] = array[--j];
    }

    if (j !== i++) array[j] = element;
  }

  return array;
};

var merge = function (array, left, right, comparefn) {
  var llength = left.length;
  var rlength = right.length;
  var lindex = 0;
  var rindex = 0;

  while (lindex < llength || rindex < rlength) {
    array[lindex + rindex] = lindex < llength && rindex < rlength ? comparefn(left[lindex], right[rindex]) <= 0 ? left[lindex++] : right[rindex++] : lindex < llength ? left[lindex++] : right[rindex++];
  }

  return array;
};

var arraySort$1 = mergeSort;

var $$8 = _export;

var global$1 = global$s;

var call = functionCall;

var uncurryThis$2 = functionUncurryThis;

var DESCRIPTORS = descriptors;

var USE_NATIVE_URL = nativeUrl;

var defineBuiltIn = defineBuiltIn$7;

var defineBuiltIns = defineBuiltIns$2;

var setToStringTag = setToStringTag$8;

var createIteratorConstructor = createIteratorConstructor$2;

var InternalStateModule = internalState;

var anInstance = anInstance$4;

var isCallable = isCallable$n;

var hasOwn = hasOwnProperty_1;

var bind$1 = functionBindContext;

var classof = classof$e;

var anObject = anObject$u;

var isObject = isObject$k;

var $toString = toString$a;

var create$1 = objectCreate;

var createPropertyDescriptor = createPropertyDescriptor$8;

var getIterator = getIterator$5;

var getIteratorMethod = getIteratorMethod$a;

var validateArgumentsLength = validateArgumentsLength$3;

var wellKnownSymbol = wellKnownSymbol$p;

var arraySort = arraySort$1;

var ITERATOR = wellKnownSymbol('iterator');
var URL_SEARCH_PARAMS = 'URLSearchParams';
var URL_SEARCH_PARAMS_ITERATOR = URL_SEARCH_PARAMS + 'Iterator';
var setInternalState = InternalStateModule.set;
var getInternalParamsState = InternalStateModule.getterFor(URL_SEARCH_PARAMS);
var getInternalIteratorState = InternalStateModule.getterFor(URL_SEARCH_PARAMS_ITERATOR); // eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe

var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor; // Avoid NodeJS experimental warning

var safeGetBuiltIn = function (name) {
  if (!DESCRIPTORS) return global$1[name];
  var descriptor = getOwnPropertyDescriptor(global$1, name);
  return descriptor && descriptor.value;
};

var nativeFetch = safeGetBuiltIn('fetch');
var NativeRequest = safeGetBuiltIn('Request');
var Headers = safeGetBuiltIn('Headers');
var RequestPrototype = NativeRequest && NativeRequest.prototype;
var HeadersPrototype = Headers && Headers.prototype;
var RegExp$1 = global$1.RegExp;
var TypeError$1 = global$1.TypeError;
var decodeURIComponent$1 = global$1.decodeURIComponent;
var encodeURIComponent$1 = global$1.encodeURIComponent;
var charAt = uncurryThis$2(''.charAt);
var join$1 = uncurryThis$2([].join);
var push$1 = uncurryThis$2([].push);
var replace = uncurryThis$2(''.replace);
var shift = uncurryThis$2([].shift);
var splice = uncurryThis$2([].splice);
var split = uncurryThis$2(''.split);
var stringSlice = uncurryThis$2(''.slice);
var plus = /\+/g;
var sequences = Array(4);

var percentSequence = function (bytes) {
  return sequences[bytes - 1] || (sequences[bytes - 1] = RegExp$1('((?:%[\\da-f]{2}){' + bytes + '})', 'gi'));
};

var percentDecode = function (sequence) {
  try {
    return decodeURIComponent$1(sequence);
  } catch (error) {
    return sequence;
  }
};

var deserialize = function (it) {
  var result = replace(it, plus, ' ');
  var bytes = 4;

  try {
    return decodeURIComponent$1(result);
  } catch (error) {
    while (bytes) {
      result = replace(result, percentSequence(bytes--), percentDecode);
    }

    return result;
  }
};

var find = /[!'()~]|%20/g;
var replacements = {
  '!': '%21',
  "'": '%27',
  '(': '%28',
  ')': '%29',
  '~': '%7E',
  '%20': '+'
};

var replacer = function (match) {
  return replacements[match];
};

var serialize = function (it) {
  return replace(encodeURIComponent$1(it), find, replacer);
};

var URLSearchParamsIterator = createIteratorConstructor(function Iterator(params, kind) {
  setInternalState(this, {
    type: URL_SEARCH_PARAMS_ITERATOR,
    iterator: getIterator(getInternalParamsState(params).entries),
    kind: kind
  });
}, 'Iterator', function next() {
  var state = getInternalIteratorState(this);
  var kind = state.kind;
  var step = state.iterator.next();
  var entry = step.value;

  if (!step.done) {
    step.value = kind === 'keys' ? entry.key : kind === 'values' ? entry.value : [entry.key, entry.value];
  }

  return step;
}, true);

var URLSearchParamsState = function (init) {
  this.entries = [];
  this.url = null;

  if (init !== undefined) {
    if (isObject(init)) this.parseObject(init);else this.parseQuery(typeof init == 'string' ? charAt(init, 0) === '?' ? stringSlice(init, 1) : init : $toString(init));
  }
};

URLSearchParamsState.prototype = {
  type: URL_SEARCH_PARAMS,
  bindURL: function (url) {
    this.url = url;
    this.update();
  },
  parseObject: function (object) {
    var iteratorMethod = getIteratorMethod(object);
    var iterator, next, step, entryIterator, entryNext, first, second;

    if (iteratorMethod) {
      iterator = getIterator(object, iteratorMethod);
      next = iterator.next;

      while (!(step = call(next, iterator)).done) {
        entryIterator = getIterator(anObject(step.value));
        entryNext = entryIterator.next;
        if ((first = call(entryNext, entryIterator)).done || (second = call(entryNext, entryIterator)).done || !call(entryNext, entryIterator).done) throw TypeError$1('Expected sequence with length 2');
        push$1(this.entries, {
          key: $toString(first.value),
          value: $toString(second.value)
        });
      }
    } else for (var key in object) if (hasOwn(object, key)) {
      push$1(this.entries, {
        key: key,
        value: $toString(object[key])
      });
    }
  },
  parseQuery: function (query) {
    if (query) {
      var attributes = split(query, '&');
      var index = 0;
      var attribute, entry;

      while (index < attributes.length) {
        attribute = attributes[index++];

        if (attribute.length) {
          entry = split(attribute, '=');
          push$1(this.entries, {
            key: deserialize(shift(entry)),
            value: deserialize(join$1(entry, '='))
          });
        }
      }
    }
  },
  serialize: function () {
    var entries = this.entries;
    var result = [];
    var index = 0;
    var entry;

    while (index < entries.length) {
      entry = entries[index++];
      push$1(result, serialize(entry.key) + '=' + serialize(entry.value));
    }

    return join$1(result, '&');
  },
  update: function () {
    this.entries.length = 0;
    this.parseQuery(this.url.query);
  },
  updateURL: function () {
    if (this.url) this.url.update();
  }
}; // `URLSearchParams` constructor
// https://url.spec.whatwg.org/#interface-urlsearchparams

var URLSearchParamsConstructor = function
  /* init */
URLSearchParams() {
  anInstance(this, URLSearchParamsPrototype);
  var init = arguments.length > 0 ? arguments[0] : undefined;
  setInternalState(this, new URLSearchParamsState(init));
};

var URLSearchParamsPrototype = URLSearchParamsConstructor.prototype;
defineBuiltIns(URLSearchParamsPrototype, {
  // `URLSearchParams.prototype.append` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-append
  append: function append(name, value) {
    validateArgumentsLength(arguments.length, 2);
    var state = getInternalParamsState(this);
    push$1(state.entries, {
      key: $toString(name),
      value: $toString(value)
    });
    state.updateURL();
  },
  // `URLSearchParams.prototype.delete` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-delete
  'delete': function (name) {
    validateArgumentsLength(arguments.length, 1);
    var state = getInternalParamsState(this);
    var entries = state.entries;
    var key = $toString(name);
    var index = 0;

    while (index < entries.length) {
      if (entries[index].key === key) splice(entries, index, 1);else index++;
    }

    state.updateURL();
  },
  // `URLSearchParams.prototype.get` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-get
  get: function get(name) {
    validateArgumentsLength(arguments.length, 1);
    var entries = getInternalParamsState(this).entries;
    var key = $toString(name);
    var index = 0;

    for (; index < entries.length; index++) {
      if (entries[index].key === key) return entries[index].value;
    }

    return null;
  },
  // `URLSearchParams.prototype.getAll` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-getall
  getAll: function getAll(name) {
    validateArgumentsLength(arguments.length, 1);
    var entries = getInternalParamsState(this).entries;
    var key = $toString(name);
    var result = [];
    var index = 0;

    for (; index < entries.length; index++) {
      if (entries[index].key === key) push$1(result, entries[index].value);
    }

    return result;
  },
  // `URLSearchParams.prototype.has` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-has
  has: function has(name) {
    validateArgumentsLength(arguments.length, 1);
    var entries = getInternalParamsState(this).entries;
    var key = $toString(name);
    var index = 0;

    while (index < entries.length) {
      if (entries[index++].key === key) return true;
    }

    return false;
  },
  // `URLSearchParams.prototype.set` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-set
  set: function set(name, value) {
    validateArgumentsLength(arguments.length, 1);
    var state = getInternalParamsState(this);
    var entries = state.entries;
    var found = false;
    var key = $toString(name);
    var val = $toString(value);
    var index = 0;
    var entry;

    for (; index < entries.length; index++) {
      entry = entries[index];

      if (entry.key === key) {
        if (found) splice(entries, index--, 1);else {
          found = true;
          entry.value = val;
        }
      }
    }

    if (!found) push$1(entries, {
      key: key,
      value: val
    });
    state.updateURL();
  },
  // `URLSearchParams.prototype.sort` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-sort
  sort: function sort() {
    var state = getInternalParamsState(this);
    arraySort(state.entries, function (a, b) {
      return a.key > b.key ? 1 : -1;
    });
    state.updateURL();
  },
  // `URLSearchParams.prototype.forEach` method
  forEach: function forEach(callback
  /* , thisArg */
  ) {
    var entries = getInternalParamsState(this).entries;
    var boundFunction = bind$1(callback, arguments.length > 1 ? arguments[1] : undefined);
    var index = 0;
    var entry;

    while (index < entries.length) {
      entry = entries[index++];
      boundFunction(entry.value, entry.key, this);
    }
  },
  // `URLSearchParams.prototype.keys` method
  keys: function keys() {
    return new URLSearchParamsIterator(this, 'keys');
  },
  // `URLSearchParams.prototype.values` method
  values: function values() {
    return new URLSearchParamsIterator(this, 'values');
  },
  // `URLSearchParams.prototype.entries` method
  entries: function entries() {
    return new URLSearchParamsIterator(this, 'entries');
  }
}, {
  enumerable: true
}); // `URLSearchParams.prototype[@@iterator]` method

defineBuiltIn(URLSearchParamsPrototype, ITERATOR, URLSearchParamsPrototype.entries, {
  name: 'entries'
}); // `URLSearchParams.prototype.toString` method
// https://url.spec.whatwg.org/#urlsearchparams-stringification-behavior

defineBuiltIn(URLSearchParamsPrototype, 'toString', function toString() {
  return getInternalParamsState(this).serialize();
}, {
  enumerable: true
});
setToStringTag(URLSearchParamsConstructor, URL_SEARCH_PARAMS);
$$8({
  global: true,
  constructor: true,
  forced: !USE_NATIVE_URL
}, {
  URLSearchParams: URLSearchParamsConstructor
}); // Wrap `fetch` and `Request` for correct work with polyfilled `URLSearchParams`

if (!USE_NATIVE_URL && isCallable(Headers)) {
  var headersHas = uncurryThis$2(HeadersPrototype.has);
  var headersSet = uncurryThis$2(HeadersPrototype.set);

  var wrapRequestOptions = function (init) {
    if (isObject(init)) {
      var body = init.body;
      var headers;

      if (classof(body) === URL_SEARCH_PARAMS) {
        headers = init.headers ? new Headers(init.headers) : new Headers();

        if (!headersHas(headers, 'content-type')) {
          headersSet(headers, 'content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
        }

        return create$1(init, {
          body: createPropertyDescriptor(0, $toString(body)),
          headers: createPropertyDescriptor(0, headers)
        });
      }
    }

    return init;
  };

  if (isCallable(nativeFetch)) {
    $$8({
      global: true,
      enumerable: true,
      dontCallGetSet: true,
      forced: true
    }, {
      fetch: function fetch(input
      /* , init */
      ) {
        return nativeFetch(input, arguments.length > 1 ? wrapRequestOptions(arguments[1]) : {});
      }
    });
  }

  if (isCallable(NativeRequest)) {
    var RequestConstructor = function Request(input
    /* , init */
    ) {
      anInstance(this, RequestPrototype);
      return new NativeRequest(input, arguments.length > 1 ? wrapRequestOptions(arguments[1]) : {});
    };

    RequestPrototype.constructor = RequestConstructor;
    RequestConstructor.prototype = RequestPrototype;
    $$8({
      global: true,
      constructor: true,
      dontCallGetSet: true,
      forced: true
    }, {
      Request: RequestConstructor
    });
  }
}

var path$5 = path$x;

var urlSearchParams$1 = path$5.URLSearchParams;

var parent$9 = urlSearchParams$1;



var urlSearchParams = parent$9;

(function (module) {
	module.exports = urlSearchParams;
} (urlSearchParams$2));

var se = /*@__PURE__*/getDefaultExportFromCjs(urlSearchParams$2.exports);

var create = {exports: {}};

(function (module) {
	module.exports = create$6;
} (create));

var ce = /*@__PURE__*/getDefaultExportFromCjs(create.exports);

var flat$3 = {exports: {}};

var isArray = isArray$e;

var lengthOfArrayLike$2 = lengthOfArrayLike$d;

var doesNotExceedSafeInteger = doesNotExceedSafeInteger$2;

var bind = functionBindContext; // `FlattenIntoArray` abstract operation
// https://tc39.github.io/proposal-flatMap/#sec-FlattenIntoArray


var flattenIntoArray$1 = function (target, original, source, sourceLen, start, depth, mapper, thisArg) {
  var targetIndex = start;
  var sourceIndex = 0;
  var mapFn = mapper ? bind(mapper, thisArg) : false;
  var element, elementLen;

  while (sourceIndex < sourceLen) {
    if (sourceIndex in source) {
      element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];

      if (depth > 0 && isArray(element)) {
        elementLen = lengthOfArrayLike$2(element);
        targetIndex = flattenIntoArray$1(target, original, element, elementLen, targetIndex, depth - 1) - 1;
      } else {
        doesNotExceedSafeInteger(targetIndex + 1);
        target[targetIndex] = element;
      }

      targetIndex++;
    }

    sourceIndex++;
  }

  return targetIndex;
};

var flattenIntoArray_1 = flattenIntoArray$1;

var $$7 = _export;

var flattenIntoArray = flattenIntoArray_1;

var toObject$1 = toObject$d;

var lengthOfArrayLike$1 = lengthOfArrayLike$d;

var toIntegerOrInfinity$1 = toIntegerOrInfinity$6;

var arraySpeciesCreate = arraySpeciesCreate$3; // `Array.prototype.flat` method
// https://tc39.es/ecma262/#sec-array.prototype.flat


$$7({
  target: 'Array',
  proto: true
}, {
  flat: function
    /* depthArg = 1 */
  flat() {
    var depthArg = arguments.length ? arguments[0] : undefined;
    var O = toObject$1(this);
    var sourceLen = lengthOfArrayLike$1(O);
    var A = arraySpeciesCreate(O, 0);
    A.length = flattenIntoArray(A, O, O, sourceLen, 0, depthArg === undefined ? 1 : toIntegerOrInfinity$1(depthArg));
    return A;
  }
});

var entryVirtual$4 = entryVirtual$o;

var flat$2 = entryVirtual$4('Array').flat;

var isPrototypeOf$4 = objectIsPrototypeOf;

var method$4 = flat$2;

var ArrayPrototype$3 = Array.prototype;

var flat$1 = function (it) {
  var own = it.flat;
  return it === ArrayPrototype$3 || isPrototypeOf$4(ArrayPrototype$3, it) && own === ArrayPrototype$3.flat ? method$4 : own;
};

var parent$8 = flat$1;

var flat = parent$8;

(function (module) {
	module.exports = flat;
} (flat$3));

var ue = /*@__PURE__*/getDefaultExportFromCjs(flat$3.exports);

var assign = {exports: {}};

(function (module) {
	module.exports = assign$3;
} (assign));

var de = /*@__PURE__*/getDefaultExportFromCjs(assign.exports);

var entries$2 = {exports: {}};

var $$6 = _export;

var $entries = objectToArray.entries; // `Object.entries` method
// https://tc39.es/ecma262/#sec-object.entries


$$6({
  target: 'Object',
  stat: true
}, {
  entries: function entries(O) {
    return $entries(O);
  }
});

var path$4 = path$x;

var entries$1 = path$4.Object.entries;

var parent$7 = entries$1;

var entries = parent$7;

(function (module) {
	module.exports = entries;
} (entries$2));

var pe = /*@__PURE__*/getDefaultExportFromCjs(entries$2.exports);

var isNan$2 = {exports: {}};

var $$5 = _export; // `Number.isNaN` method
// https://tc39.es/ecma262/#sec-number.isnan


$$5({
  target: 'Number',
  stat: true
}, {
  isNaN: function isNaN(number) {
    // eslint-disable-next-line no-self-compare -- NaN check
    return number != number;
  }
});

var path$3 = path$x;

var isNan$1 = path$3.Number.isNaN;

var parent$6 = isNan$1;

var isNan = parent$6;

(function (module) {
	module.exports = isNan;
} (isNan$2));

var fe = /*@__PURE__*/getDefaultExportFromCjs(isNan$2.exports);

var sort$3 = {exports: {}};

var tryToString = tryToString$6;

var $TypeError = TypeError;

var deletePropertyOrThrow$1 = function (O, P) {
  if (!delete O[P]) throw $TypeError('Cannot delete property ' + tryToString(P) + ' of ' + tryToString(O));
};

var userAgent$1 = engineUserAgent;

var firefox = userAgent$1.match(/firefox\/(\d+)/i);
var engineFfVersion = !!firefox && +firefox[1];

var UA = engineUserAgent;

var engineIsIeOrEdge = /MSIE|Trident/.test(UA);

var userAgent = engineUserAgent;

var webkit = userAgent.match(/AppleWebKit\/(\d+)\./);
var engineWebkitVersion = !!webkit && +webkit[1];

var $$4 = _export;

var uncurryThis$1 = functionUncurryThis;

var aCallable = aCallable$o;

var toObject = toObject$d;

var lengthOfArrayLike = lengthOfArrayLike$d;

var deletePropertyOrThrow = deletePropertyOrThrow$1;

var toString$1 = toString$a;

var fails = fails$y;

var internalSort = arraySort$1;

var arrayMethodIsStrict$1 = arrayMethodIsStrict$7;

var FF = engineFfVersion;

var IE_OR_EDGE = engineIsIeOrEdge;

var V8 = engineV8Version;

var WEBKIT = engineWebkitVersion;

var test = [];
var un$Sort = uncurryThis$1(test.sort);
var push = uncurryThis$1(test.push); // IE8-

var FAILS_ON_UNDEFINED = fails(function () {
  test.sort(undefined);
}); // V8 bug

var FAILS_ON_NULL = fails(function () {
  test.sort(null);
}); // Old WebKit

var STRICT_METHOD$1 = arrayMethodIsStrict$1('sort');
var STABLE_SORT = !fails(function () {
  // feature detection can be too slow, so check engines versions
  if (V8) return V8 < 70;
  if (FF && FF > 3) return;
  if (IE_OR_EDGE) return true;
  if (WEBKIT) return WEBKIT < 603;
  var result = '';
  var code, chr, value, index; // generate an array with more 512 elements (Chakra and old V8 fails only in this case)

  for (code = 65; code < 76; code++) {
    chr = String.fromCharCode(code);

    switch (code) {
      case 66:
      case 69:
      case 70:
      case 72:
        value = 3;
        break;

      case 68:
      case 71:
        value = 4;
        break;

      default:
        value = 2;
    }

    for (index = 0; index < 47; index++) {
      test.push({
        k: chr + index,
        v: value
      });
    }
  }

  test.sort(function (a, b) {
    return b.v - a.v;
  });

  for (index = 0; index < test.length; index++) {
    chr = test[index].k.charAt(0);
    if (result.charAt(result.length - 1) !== chr) result += chr;
  }

  return result !== 'DGBEFHACIJK';
});
var FORCED = FAILS_ON_UNDEFINED || !FAILS_ON_NULL || !STRICT_METHOD$1 || !STABLE_SORT;

var getSortCompare = function (comparefn) {
  return function (x, y) {
    if (y === undefined) return -1;
    if (x === undefined) return 1;
    if (comparefn !== undefined) return +comparefn(x, y) || 0;
    return toString$1(x) > toString$1(y) ? 1 : -1;
  };
}; // `Array.prototype.sort` method
// https://tc39.es/ecma262/#sec-array.prototype.sort


$$4({
  target: 'Array',
  proto: true,
  forced: FORCED
}, {
  sort: function sort(comparefn) {
    if (comparefn !== undefined) aCallable(comparefn);
    var array = toObject(this);
    if (STABLE_SORT) return comparefn === undefined ? un$Sort(array) : un$Sort(array, comparefn);
    var items = [];
    var arrayLength = lengthOfArrayLike(array);
    var itemsLength, index;

    for (index = 0; index < arrayLength; index++) {
      if (index in array) push(items, array[index]);
    }

    internalSort(items, getSortCompare(comparefn));
    itemsLength = items.length;
    index = 0;

    while (index < itemsLength) array[index] = items[index++];

    while (index < arrayLength) deletePropertyOrThrow(array, index++);

    return array;
  }
});

var entryVirtual$3 = entryVirtual$o;

var sort$2 = entryVirtual$3('Array').sort;

var isPrototypeOf$3 = objectIsPrototypeOf;

var method$3 = sort$2;

var ArrayPrototype$2 = Array.prototype;

var sort$1 = function (it) {
  var own = it.sort;
  return it === ArrayPrototype$2 || isPrototypeOf$3(ArrayPrototype$2, it) && own === ArrayPrototype$2.sort ? method$3 : own;
};

var parent$5 = sort$1;

var sort = parent$5;

(function (module) {
	module.exports = sort;
} (sort$3));

var he = /*@__PURE__*/getDefaultExportFromCjs(sort$3.exports);

var findIndex$3 = {exports: {}};

var $$3 = _export;

var $findIndex = arrayIteration.findIndex;

var FIND_INDEX = 'findIndex';
var SKIPS_HOLES = true; // Shouldn't skip holes

if (FIND_INDEX in []) Array(1)[FIND_INDEX](function () {
  SKIPS_HOLES = false;
}); // `Array.prototype.findIndex` method
// https://tc39.es/ecma262/#sec-array.prototype.findindex

$$3({
  target: 'Array',
  proto: true,
  forced: SKIPS_HOLES
}, {
  findIndex: function findIndex(callbackfn
  /* , that = undefined */
  ) {
    return $findIndex(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
}); // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables

var entryVirtual$2 = entryVirtual$o;

var findIndex$2 = entryVirtual$2('Array').findIndex;

var isPrototypeOf$2 = objectIsPrototypeOf;

var method$2 = findIndex$2;

var ArrayPrototype$1 = Array.prototype;

var findIndex$1 = function (it) {
  var own = it.findIndex;
  return it === ArrayPrototype$1 || isPrototypeOf$2(ArrayPrototype$1, it) && own === ArrayPrototype$1.findIndex ? method$2 : own;
};

var parent$4 = findIndex$1;

var findIndex = parent$4;

(function (module) {
	module.exports = findIndex;
} (findIndex$3));

var ye = /*@__PURE__*/getDefaultExportFromCjs(findIndex$3.exports);

var from = {exports: {}};

(function (module) {
	module.exports = from$4;
} (from));

var me = /*@__PURE__*/getDefaultExportFromCjs(from.exports);

var some$3 = {exports: {}};

var $$2 = _export;

var $some = arrayIteration.some;

var arrayMethodIsStrict = arrayMethodIsStrict$7;

var STRICT_METHOD = arrayMethodIsStrict('some'); // `Array.prototype.some` method
// https://tc39.es/ecma262/#sec-array.prototype.some

$$2({
  target: 'Array',
  proto: true,
  forced: !STRICT_METHOD
}, {
  some: function some(callbackfn
  /* , thisArg */
  ) {
    return $some(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

var entryVirtual$1 = entryVirtual$o;

var some$2 = entryVirtual$1('Array').some;

var isPrototypeOf$1 = objectIsPrototypeOf;

var method$1 = some$2;

var ArrayPrototype = Array.prototype;

var some$1 = function (it) {
  var own = it.some;
  return it === ArrayPrototype || isPrototypeOf$1(ArrayPrototype, it) && own === ArrayPrototype.some ? method$1 : own;
};

var parent$3 = some$1;

var some = parent$3;

(function (module) {
	module.exports = some;
} (some$3));

var ge = /*@__PURE__*/getDefaultExportFromCjs(some$3.exports);

var reverse = {exports: {}};

(function (module) {
	module.exports = reverse$3;
} (reverse));

var be = /*@__PURE__*/getDefaultExportFromCjs(reverse.exports);

var fromCodePoint$2 = {exports: {}};

var $$1 = _export;

var uncurryThis = functionUncurryThis;

var toAbsoluteIndex = toAbsoluteIndex$5;

var $RangeError$1 = RangeError;
var fromCharCode = String.fromCharCode; // eslint-disable-next-line es-x/no-string-fromcodepoint -- required for testing

var $fromCodePoint = String.fromCodePoint;
var join = uncurryThis([].join); // length should be 1, old FF problem

var INCORRECT_LENGTH = !!$fromCodePoint && $fromCodePoint.length != 1; // `String.fromCodePoint` method
// https://tc39.es/ecma262/#sec-string.fromcodepoint

$$1({
  target: 'String',
  stat: true,
  arity: 1,
  forced: INCORRECT_LENGTH
}, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  fromCodePoint: function fromCodePoint(x) {
    var elements = [];
    var length = arguments.length;
    var i = 0;
    var code;

    while (length > i) {
      code = +arguments[i++];
      if (toAbsoluteIndex(code, 0x10FFFF) !== code) throw $RangeError$1(code + ' is not a valid code point');
      elements[i] = code < 0x10000 ? fromCharCode(code) : fromCharCode(((code -= 0x10000) >> 10) + 0xD800, code % 0x400 + 0xDC00);
    }

    return join(elements, '');
  }
});

var path$2 = path$x;

var fromCodePoint$1 = path$2.String.fromCodePoint;

var parent$2 = fromCodePoint$1;

var fromCodePoint = parent$2;

(function (module) {
	module.exports = fromCodePoint;
} (fromCodePoint$2));

var _e = /*@__PURE__*/getDefaultExportFromCjs(fromCodePoint$2.exports);

var setInterval$1 = {exports: {}};

var path$1 = path$x;

var setInterval = path$1.setInterval;

(function (module) {
	module.exports = setInterval;
} (setInterval$1));

var Ce = /*@__PURE__*/getDefaultExportFromCjs(setInterval$1.exports);

var repeat$4 = {exports: {}};

var toIntegerOrInfinity = toIntegerOrInfinity$6;

var toString = toString$a;

var requireObjectCoercible = requireObjectCoercible$6;

var $RangeError = RangeError; // `String.prototype.repeat` method implementation
// https://tc39.es/ecma262/#sec-string.prototype.repeat

var stringRepeat = function repeat(count) {
  var str = toString(requireObjectCoercible(this));
  var result = '';
  var n = toIntegerOrInfinity(count);
  if (n < 0 || n == Infinity) throw $RangeError('Wrong number of repetitions');

  for (; n > 0; (n >>>= 1) && (str += str)) if (n & 1) result += str;

  return result;
};

var $ = _export;

var repeat$3 = stringRepeat; // `String.prototype.repeat` method
// https://tc39.es/ecma262/#sec-string.prototype.repeat


$({
  target: 'String',
  proto: true
}, {
  repeat: repeat$3
});

var entryVirtual = entryVirtual$o;

var repeat$2 = entryVirtual('String').repeat;

var isPrototypeOf = objectIsPrototypeOf;

var method = repeat$2;

var StringPrototype = String.prototype;

var repeat$1 = function (it) {
  var own = it.repeat;
  return typeof it == 'string' || it === StringPrototype || isPrototypeOf(StringPrototype, it) && own === StringPrototype.repeat ? method : own;
};

var parent$1 = repeat$1;

var repeat = parent$1;

(function (module) {
	module.exports = repeat;
} (repeat$4));

var ke = /*@__PURE__*/getDefaultExportFromCjs(repeat$4.exports);

var set$2 = {exports: {}};

var collection = collection$2;

var collectionStrong = collectionStrong$2; // `Set` constructor
// https://tc39.es/ecma262/#sec-set-objects


collection('Set', function (init) {
  return function Set() {
    return init(this, arguments.length ? arguments[0] : undefined);
  };
}, collectionStrong);

var path = path$x;

var set$1 = path.Set;

var parent = set$1;



var set = parent;

(function (module) {
	module.exports = set;
} (set$2));

var Ne = /*@__PURE__*/getDefaultExportFromCjs(set$2.exports);

var we = {
  payButton: "Pay",
  "payButton.redirecting": "Redirecting...",
  storeDetails: "Save for my next payment",
  "creditCard.holderName": "Name on card",
  "creditCard.holderName.placeholder": "J. Smith",
  "creditCard.holderName.invalid": "Invalid cardholder name",
  "creditCard.numberField.title": "Card number",
  "creditCard.numberField.placeholder": "1234 5678 9012 3456",
  "creditCard.expiryDateField.title": "Expiry date",
  "creditCard.expiryDateField.placeholder": "MM/YY",
  "creditCard.expiryDateField.month": "Month",
  "creditCard.expiryDateField.month.placeholder": "MM",
  "creditCard.expiryDateField.year.placeholder": "YY",
  "creditCard.expiryDateField.year": "Year",
  "creditCard.cvcField.title": "CVC / CVV",
  "creditCard.cvcField.placeholder": "123",
  "creditCard.storeDetailsButton": "Remember for next time",
  "creditCard.cvcField.placeholder.4digits": "4 digits",
  "creditCard.cvcField.placeholder.3digits": "3 digits",
  "creditCard.taxNumber.placeholder": "YYMMDD / 0123456789",
  installments: "Number of installments",
  installmentOption: "%{times}x %{partialValue}",
  installmentOptionMonths: "%{times} months",
  "installments.oneTime": "One time payment",
  "installments.installments": "Installments payment",
  "installments.revolving": "Revolving payment",
  "sepaDirectDebit.ibanField.invalid": "Invalid account number",
  "sepaDirectDebit.nameField.placeholder": "J. Smith",
  "sepa.ownerName": "Holder Name",
  "sepa.ibanNumber": "Account Number (IBAN)",
  "error.title": "Error",
  "error.subtitle.redirect": "Redirect failed",
  "error.subtitle.payment": "Payment failed",
  "error.subtitle.refused": "Payment refused",
  "error.message.unknown": "An unknown error occurred",
  "errorPanel.title": "Existing errors",
  "idealIssuer.selectField.title": "Bank",
  "idealIssuer.selectField.placeholder": "Select your bank",
  "creditCard.success": "Payment Successful",
  loading: "Loading\u2026",
  continue: "Continue",
  continueTo: "Continue to",
  "wechatpay.timetopay": "You have %@ to pay",
  "wechatpay.scanqrcode": "Scan QR code",
  personalDetails: "Personal details",
  companyDetails: "Company details",
  "companyDetails.name": "Company name",
  "companyDetails.registrationNumber": "Registration number",
  socialSecurityNumber: "Social security number",
  firstName: "First name",
  infix: "Prefix",
  lastName: "Last name",
  mobileNumber: "Mobile number",
  "mobileNumber.invalid": "Invalid mobile number",
  city: "City",
  postalCode: "Postal code",
  countryCode: "Country Code",
  telephoneNumber: "Telephone number",
  dateOfBirth: "Date of birth",
  shopperEmail: "Email address",
  gender: "Gender",
  male: "Male",
  female: "Female",
  billingAddress: "Billing address",
  street: "Street",
  stateOrProvince: "State or province",
  country: "Country",
  houseNumberOrName: "House number",
  separateDeliveryAddress: "Specify a separate delivery address",
  deliveryAddress: "Delivery Address",
  zipCode: "Zip code",
  apartmentSuite: "Apartment / Suite",
  provinceOrTerritory: "Province or Territory",
  cityTown: "City / Town",
  address: "Address",
  state: "State",
  "field.title.optional": "(optional)",
  "creditCard.cvcField.title.optional": "CVC / CVV (optional)",
  "issuerList.wallet.placeholder": "Select your wallet",
  privacyPolicy: "Privacy policy",
  "afterPay.agreement": "I agree with the %@ of AfterPay",
  paymentConditions: "payment conditions",
  openApp: "Open the app",
  "voucher.readInstructions": "Read instructions",
  "voucher.introduction": "Thank you for your purchase, please use the following coupon to complete your payment.",
  "voucher.expirationDate": "Expiration Date",
  "voucher.alternativeReference": "Alternative Reference",
  "dragonpay.voucher.non.bank.selectField.placeholder": "Select your provider",
  "dragonpay.voucher.bank.selectField.placeholder": "Select your bank",
  "voucher.paymentReferenceLabel": "Payment Reference",
  "voucher.surcharge": "Incl. %@ surcharge",
  "voucher.introduction.doku": "Thank you for your purchase, please use the following information to complete your payment.",
  "voucher.shopperName": "Shopper Name",
  "voucher.merchantName": "Merchant",
  "voucher.introduction.econtext": "Thank you for your purchase, please use the following information to complete your payment.",
  "voucher.telephoneNumber": "Phone Number",
  "voucher.shopperReference": "Shopper Reference",
  "voucher.collectionInstitutionNumber": "Collection Institution Number",
  "voucher.econtext.telephoneNumber.invalid": "Telephone number must be 10 or 11 digits long",
  "boletobancario.btnLabel": "Generate Boleto",
  "boleto.sendCopyToEmail": "Send a copy to my email",
  "button.copy": "Copy",
  "button.download": "Download",
  "boleto.socialSecurityNumber": "CPF/CNPJ",
  "boleto.socialSecurityNumber.invalid": "Field is not valid",
  "creditCard.storedCard.description.ariaLabel": "Stored card ends in %@",
  "voucher.entity": "Entity",
  donateButton: "Donate",
  notNowButton: "Not now",
  thanksForYourSupport: "Thanks for your support!",
  preauthorizeWith: "Preauthorize with",
  confirmPreauthorization: "Confirm preauthorization",
  confirmPurchase: "Confirm purchase",
  applyGiftcard: "Redeem",
  giftcardBalance: "Gift card balance",
  deductedBalance: "Deducted balance",
  "creditCard.pin.title": "Pin",
  "creditCard.encryptedPassword.label": "First 2 digits of card password",
  "creditCard.encryptedPassword.placeholder": "12",
  "creditCard.encryptedPassword.invalid": "Invalid password",
  "creditCard.taxNumber": "Cardholder birthdate or Corporate registration number",
  "creditCard.taxNumber.label": "Cardholder birthdate (YYMMDD) or Corporate registration number (10 digits)",
  "creditCard.taxNumber.labelAlt": "Corporate registration number (10 digits)",
  "creditCard.taxNumber.invalid": "Invalid Cardholder birthdate or Corporate registration number",
  "storedPaymentMethod.disable.button": "Remove",
  "storedPaymentMethod.disable.confirmation": "Remove stored payment method",
  "storedPaymentMethod.disable.confirmButton": "Yes, remove",
  "storedPaymentMethod.disable.cancelButton": "Cancel",
  "ach.bankAccount": "Bank account",
  "ach.accountHolderNameField.title": "Account holder name",
  "ach.accountHolderNameField.placeholder": "J. Smith",
  "ach.accountHolderNameField.invalid": "Invalid account holder name",
  "ach.accountNumberField.title": "Account number",
  "ach.accountNumberField.invalid": "Invalid account number",
  "ach.accountLocationField.title": "ABA routing number",
  "ach.accountLocationField.invalid": "Invalid ABA routing number",
  "select.state": "Select state",
  "select.stateOrProvince": "Select state or province",
  "select.provinceOrTerritory": "Select province or territory",
  "select.country": "Select country",
  "select.noOptionsFound": "No options found",
  "select.filter.placeholder": "Search...",
  "telephoneNumber.invalid": "Invalid telephone number",
  qrCodeOrApp: "or",
  "paypal.processingPayment": "Processing payment...",
  generateQRCode: "Generate QR code",
  "await.waitForConfirmation": "Waiting for confirmation",
  "mbway.confirmPayment": "Confirm your payment on the MB WAY app",
  "shopperEmail.invalid": "Invalid email address",
  "dateOfBirth.format": "DD/MM/YYYY",
  "dateOfBirth.invalid": "You must be at least 18 years old",
  "blik.confirmPayment": "Open your banking app to confirm the payment.",
  "blik.invalid": "Enter 6 numbers",
  "blik.code": "6-digit code",
  "blik.help": "Get the code from your banking app.",
  "swish.pendingMessage": "After you scan, the status can be pending for up to 10 minutes. Attempting to pay again within this time may result in multiple charges.",
  "error.va.gen.01": "Incomplete field",
  "error.va.gen.02": "Field not valid",
  "error.va.sf-cc-num.01": "Invalid card number",
  "error.va.sf-cc-num.03": "Unsupported card entered",
  "error.va.sf-cc-dat.01": "Card too old",
  "error.va.sf-cc-dat.02": "Date too far in the future",
  "error.va.sf-cc-dat.03": "Your card expires before check out date",
  "error.va.sf-ach-num.01": "Invalid account number",
  "error.va.sf-ach-loc.01": "Invalid ABA routing number",
  "error.va.sf-kcp-pwd.01": "Invalid password",
  "error.giftcard.no-balance": "This gift card has zero balance",
  "error.giftcard.card-error": "In our records we have no gift card with this number",
  "error.giftcard.currency-error": "Gift cards are only valid in the currency they were issued in",
  "amazonpay.signout": "Sign out from Amazon",
  "amazonpay.changePaymentDetails": "Change payment details",
  "partialPayment.warning": "Select another payment method to pay the remaining",
  "partialPayment.remainingBalance": "Remaining balance will be %{amount}",
  "bankTransfer.beneficiary": "Beneficiary",
  "bankTransfer.iban": "IBAN",
  "bankTransfer.bic": "BIC",
  "bankTransfer.reference": "Reference",
  "bankTransfer.introduction": "Continue to create a new bank transfer payment. You can use the details in the following screen to finalize this payment.",
  "bankTransfer.instructions": "Thank you for your purchase, please use the following information to complete your payment.",
  "bacs.accountHolderName": "Bank account holder name",
  "bacs.accountHolderName.invalid": "Invalid bank account holder name",
  "bacs.accountNumber": "Bank account number",
  "bacs.accountNumber.invalid": "Invalid bank account number",
  "bacs.bankLocationId": "Sort code",
  "bacs.bankLocationId.invalid": "Invalid sort code",
  "bacs.consent.amount": "I agree that the above amount will be deducted from my bank account.",
  "bacs.consent.account": "I confirm the account is in my name and I am the only signatory required to authorise the Direct Debit on this account.",
  edit: "Edit",
  "bacs.confirm": "Confirm and pay",
  "bacs.result.introduction": "Download your Direct Debit Instruction (DDI / Mandate)",
  "download.pdf": "Download PDF",
  "creditCard.encryptedCardNumber.aria.iframeTitle": "Iframe for secured card number",
  "creditCard.encryptedCardNumber.aria.label": "Card number",
  "creditCard.encryptedExpiryDate.aria.iframeTitle": "Iframe for secured card expiry date",
  "creditCard.encryptedExpiryDate.aria.label": "Expiry date",
  "creditCard.encryptedExpiryMonth.aria.iframeTitle": "Iframe for secured card expiry month",
  "creditCard.encryptedExpiryMonth.aria.label": "Expiry month",
  "creditCard.encryptedExpiryYear.aria.iframeTitle": "Iframe for secured card expiry year",
  "creditCard.encryptedExpiryYear.aria.label": "Expiry year",
  "creditCard.encryptedSecurityCode.aria.iframeTitle": "Iframe for secured card security code",
  "creditCard.encryptedSecurityCode.aria.label": "Security code",
  "creditCard.encryptedPassword.aria.iframeTitle": "Iframe for secured card password",
  "creditCard.encryptedPassword.aria.label": "First 2 digits of card password",
  "giftcard.encryptedCardNumber.aria.iframeTitle": "Iframe for secured gift card number",
  "giftcard.encryptedCardNumber.aria.label": "Gift card number",
  "giftcard.encryptedSecurityCode.aria.iframeTitle": "Iframe for secured gift card security code",
  "giftcard.encryptedSecurityCode.aria.label": "Gift card security code",
  giftcardTransactionLimit: "Max. %{amount} allowed per transaction on this gift card",
  "ach.encryptedBankAccountNumber.aria.iframeTitle": "Iframe for secured bank account number",
  "ach.encryptedBankAccountNumber.aria.label": "Bank account",
  "ach.encryptedBankLocationId.aria.iframeTitle": "Iframe for secured bank routing number",
  "ach.encryptedBankLocationId.aria.label": "Bank routing number",
  "pix.instructions": "Open the app with the PIX registered key, choose Pay with PIX and scan the QR Code or copy and paste the code",
  "twint.saved": "saved",
  orPayWith: "or pay with",
  invalidFormatExpects: "Invalid format. Expected format: %{format}",
  "upi.qrCodeWaitingMessage": "Scan the QR code using your preferred UPI app to complete the payment",
  "upi.vpaWaitingMessage": "Open your UPI app to confirm the payment"
},
    Se = Object.freeze({
  __proto__: null,
  default: we
}),
    xe = we,
    Pe = {
  ar: function () {
    return import('./ar-e2fe53d9.js');
  },
  "cs-CZ": function () {
    return import('./cs-CZ-4c545a7e.js');
  },
  "da-DK": function () {
    return import('./da-DK-a44e6fed.js');
  },
  "de-DE": function () {
    return import('./de-DE-df4ac6ea.js');
  },
  "el-GR": function () {
    return import('./el-GR-90710052.js');
  },
  "en-US": function () {
    return Promise.resolve().then(function () {
      return Se;
    });
  },
  "es-ES": function () {
    return import('./es-ES-2301a9eb.js');
  },
  "fi-FI": function () {
    return import('./fi-FI-14037a0c.js');
  },
  "fr-FR": function () {
    return import('./fr-FR-de8bfa90.js');
  },
  "hr-HR": function () {
    return import('./hr-HR-06054093.js');
  },
  "hu-HU": function () {
    return import('./hu-HU-8b34f888.js');
  },
  "it-IT": function () {
    return import('./it-IT-ac6ef34a.js');
  },
  "ja-JP": function () {
    return import('./ja-JP-555928ef.js');
  },
  "ko-KR": function () {
    return import('./ko-KR-2dda261e.js');
  },
  "nl-NL": function () {
    return import('./nl-NL-db8a6638.js');
  },
  "no-NO": function () {
    return import('./no-NO-04822ab7.js');
  },
  "pl-PL": function () {
    return import('./pl-PL-369e9ad1.js');
  },
  "pt-BR": function () {
    return import('./pt-BR-7de3ce4a.js');
  },
  "pt-PT": function () {
    return import('./pt-PT-cdd35d13.js');
  },
  "ro-RO": function () {
    return import('./ro-RO-c91ce2d4.js');
  },
  "ru-RU": function () {
    return import('./ru-RU-2a7629cd.js');
  },
  "sk-SK": function () {
    return import('./sk-SK-9bce54d9.js');
  },
  "sl-SI": function () {
    return import('./sl-SI-502623ca.js');
  },
  "sv-SE": function () {
    return import('./sv-SE-2955720c.js');
  },
  "zh-CN": function () {
    return import('./zh-CN-5bd23f37.js');
  },
  "zh-TW": function () {
    return import('./zh-TW-678ee81c.js');
  }
};

function Fe(e, t) {
  var o = n$1(e);

  if (r$1) {
    var i = r$1(e);
    t && (i = f$1(i).call(i, function (t) {
      return a$1(e, t).enumerable;
    })), o.push.apply(o, i);
  }

  return o;
}

function Ae(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n,
        r,
        s = null != arguments[t] ? arguments[t] : {};
    t % 2 ? p$1(n = Fe(Object(s), !0)).call(n, function (t) {
      _defineProperty(e, t, s[t]);
    }) : o$1 ? i(e, o$1(s)) : p$1(r = Fe(Object(s))).call(r, function (t) {
      l$1(e, t, a$1(s, t));
    });
  }

  return e;
}

var Be = function (e) {
  return e.toLowerCase().substring(0, 2);
};

function Ee(e, t) {
  return e && "string" == typeof e && g$1(t).call(t, function (t) {
    return Be(t) === Be(e);
  }) || null;
}

function Re(e) {
  var t = e.replace("_", "-");
  if (new RegExp("([a-z]{2})([-])([A-Z]{2})").test(t)) return t;
  var n = t.split("-"),
      r = _slicedToArray(n, 2),
      a = r[0],
      o = r[1];
  if (!a || !o) return null;
  var i = [a.toLowerCase(), o.toUpperCase()].join("-");
  return 5 === i.length ? i : null;
}

function Oe(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
  if (!e || e.length < 1 || e.length > 5) return "en-US";
  var n = Re(e),
      r = C$1(t).call(t, n) > -1;
  return r ? n : Ee(n || e, t);
}

function De() {
  var e,
      t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
      r = arguments.length > 1 ? arguments[1] : void 0;
  return k$1(e = n$1(t)).call(e, function (e, n) {
    var a = Re(n) || Oe(n, r);
    return a && (e[a] = t[n]), e;
  }, {});
}

var Me = function (e, t) {
  return e.replace(/%{(\w+)}/g, function (e, n) {
    return t[n] || "";
  });
},
    Te = function () {
  var r = _asyncToGenerator(regenerator.mark(function e(r) {
    var a,
        o,
        i,
        l = arguments;
    return regenerator.wrap(function (e) {
      for (;;) switch (e.prev = e.next) {
        case 0:
          return a = l.length > 1 && void 0 !== l[1] ? l[1] : {}, o = Oe(r, n$1(Pe)) || "en-US", e.next = 4, Pe[o]();

        case 4:
          return i = e.sent, e.abrupt("return", Ae(Ae(Ae({}, xe), i.default), !!a[r] && a[r]));

        case 6:
        case "end":
          return e.stop();
      }
    }, e);
  }));
  return function (e) {
    return r.apply(this, arguments);
  };
}(),
    Ie = {
  IDR: 1,
  JPY: 1,
  KRW: 1,
  VND: 1,
  BYR: 1,
  CVE: 1,
  DJF: 1,
  GHC: 1,
  GNF: 1,
  KMF: 1,
  PYG: 1,
  RWF: 1,
  UGX: 1,
  VUV: 1,
  XAF: 1,
  XOF: 1,
  XPF: 1,
  MRO: 10,
  BHD: 1e3,
  IQD: 1e3,
  JOD: 1e3,
  KWD: 1e3,
  OMR: 1e3,
  LYD: 1e3,
  TND: 1e3
};

function je(e, t) {
  var o = n$1(e);

  if (r$1) {
    var i = r$1(e);
    t && (i = f$1(i).call(i, function (t) {
      return a$1(e, t).enumerable;
    })), o.push.apply(o, i);
  }

  return o;
}

function Ve(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n,
        r,
        s = null != arguments[t] ? arguments[t] : {};
    t % 2 ? p$1(n = je(Object(s), !0)).call(n, function (t) {
      _defineProperty(e, t, s[t]);
    }) : o$1 ? i(e, o$1(s)) : p$1(r = je(Object(s))).call(r, function (t) {
      l$1(e, t, a$1(s, t));
    });
  }

  return e;
}

var Le = function (e, t) {
  var n = function (e) {
    return Ie[e] || 100;
  }(t);

  return w$1(String(e), 10) / n;
};

function Ue(e, t) {
  var o = n$1(e);

  if (r$1) {
    var i = r$1(e);
    t && (i = f$1(i).call(i, function (t) {
      return a$1(e, t).enumerable;
    })), o.push.apply(o, i);
  }

  return o;
}

function qe(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n,
        r,
        s = null != arguments[t] ? arguments[t] : {};
    t % 2 ? p$1(n = Ue(Object(s), !0)).call(n, function (t) {
      _defineProperty(e, t, s[t]);
    }) : o$1 ? i(e, o$1(s)) : p$1(r = Ue(Object(s))).call(r, function (t) {
      l$1(e, t, a$1(s, t));
    });
  }

  return e;
}

var Ke = function () {
  function e() {
    var t,
        r,
        a = this,
        o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "en-US",
        i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    _classCallCheck(this, e), _defineProperty(this, "locale", void 0), _defineProperty(this, "languageCode", void 0), _defineProperty(this, "supportedLocales", void 0), _defineProperty(this, "translations", xe), _defineProperty(this, "customTranslations", void 0), _defineProperty(this, "loaded", void 0);
    var l = n$1(Pe);
    this.customTranslations = De(i, l);
    var s = n$1(this.customTranslations);
    this.supportedLocales = f$1(t = y$1(r = []).call(r, _toConsumableArray(l), _toConsumableArray(s))).call(t, function (e, t, n) {
      return C$1(n).call(n, e) === t;
    }), this.locale = Re(o) || Oe(o, this.supportedLocales) || "en-US";
    var u = this.locale.split("-"),
        p = _slicedToArray(u, 1),
        h = p[0];
    this.languageCode = h, this.loaded = Te(this.locale, this.customTranslations).then(function (e) {
      a.translations = e;
    });
  }

  return _createClass(e, [{
    key: "get",
    value: function (e, t) {
      var n = function (e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
          values: {},
          count: 0
        },
            r = "".concat(t, "__plural"),
            a = function (e) {
          var n;
          return y$1(n = "".concat(t, "__")).call(n, e);
        };

        return Object.prototype.hasOwnProperty.call(e, a(n.count)) ? Me(e[a(n.count)], N$1(n)) : Object.prototype.hasOwnProperty.call(e, r) && n.count > 1 ? Me(e[r], N$1(n)) : Object.prototype.hasOwnProperty.call(e, t) ? Me(e[t], N$1(n)) : null;
      }(this.translations, e, t);

      return null !== n ? n : e;
    }
  }, {
    key: "amount",
    value: function (e, t, n) {
      return function (e, t, n) {
        var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
            a = e.toString(),
            o = Le(a, n),
            i = t.replace("_", "-"),
            l = Ve({
          style: "currency",
          currency: n,
          currencyDisplay: "symbol"
        }, r);

        try {
          return o.toLocaleString(i, l);
        } catch (e) {
          return a;
        }
      }(e, this.locale, t, n);
    }
  }, {
    key: "date",
    value: function (e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = qe({
        year: "numeric",
        month: "2-digit",
        day: "2-digit"
      }, t);
      return new Date(e).toLocaleDateString(this.locale, n);
    }
  }]), e;
}(),
    He = function (e, t) {
  var n = t.split(".");
  return k$1(n).call(n, function (e, t) {
    return e && e[t] ? e[t] : void 0;
  }, e);
},
    ze = _createClass(function e() {
  var t = this;
  _classCallCheck(this, e), _defineProperty(this, "events", {}), _defineProperty(this, "on", function (e, n) {
    t.events[e] = t.events[e] || [], t.events[e].push(n);
  }), _defineProperty(this, "off", function (e, n) {
    var r;
    t.events[e] && (t.events[e] = k$1(r = t.events[e]).call(r, function (e, t) {
      return t !== n && e.push(t), e;
    }, []));
  }), _defineProperty(this, "emit", function (e, n) {
    var r;
    t.events[e] && p$1(r = t.events[e]).call(r, function (e) {
      e(n);
    });
  });
});

function We() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (e) {
    var t = 16 * Math.random() | 0;
    return ("x" == e ? t : 3 & t | 8).toString(16);
  });
}

function Ge(e, t) {
  var o = n$1(e);

  if (r$1) {
    var i = r$1(e);
    t && (i = f$1(i).call(i, function (t) {
      return a$1(e, t).enumerable;
    })), o.push.apply(o, i);
  }

  return o;
}

function Ye(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n,
        r,
        s = null != arguments[t] ? arguments[t] : {};
    t % 2 ? p$1(n = Ge(Object(s), !0)).call(n, function (t) {
      _defineProperty(e, t, s[t]);
    }) : o$1 ? i(e, o$1(s)) : p$1(r = Ge(Object(s))).call(r, function (t) {
      l$1(e, t, a$1(s, t));
    });
  }

  return e;
}

var $e = function () {
  function e(t) {
    var n;
    _classCallCheck(this, e), _defineProperty(this, "_id", y$1(n = "".concat(this.constructor.type, "-")).call(n, We())), _defineProperty(this, "props", void 0), _defineProperty(this, "state", void 0), _defineProperty(this, "_node", void 0), _defineProperty(this, "_component", void 0), _defineProperty(this, "eventEmitter", new ze()), _defineProperty(this, "_parentInstance", void 0), this.props = this.formatProps(Ye(Ye({}, this.constructor.defaultProps), t)), this._parentInstance = this.props._parentInstance, this._node = null, this.state = {};
  }

  return _createClass(e, [{
    key: "formatProps",
    value: function (e) {
      return e;
    }
  }, {
    key: "formatData",
    value: function () {
      return {};
    }
  }, {
    key: "setState",
    value: function (e) {
      this.state = Ye(Ye({}, this.state), e);
    }
  }, {
    key: "data",
    get: function () {
      var e = He(this.props, "modules.risk.data"),
          t = He(this.props, "modules.analytics.checkoutAttemptId"),
          n = this.state.order || this.props.order;
      return Ye(Ye(Ye(Ye(Ye({}, e && {
        riskData: {
          clientData: e
        }
      }), t && {
        checkoutAttemptId: t
      }), n && {
        order: {
          orderData: n.orderData,
          pspReference: n.pspReference
        }
      }), this.formatData()), {}, {
        clientStateDataIndicator: !0
      });
    }
  }, {
    key: "render",
    value: function () {
      throw new Error("Payment method cannot be rendered.");
    }
  }, {
    key: "mount",
    value: function (e) {
      var t,
          n = "string" == typeof e ? document.querySelector(e) : e;
      if (!n) throw new Error("Component could not mount. Root node was not found.");
      if (this._node) throw new Error("Component is already mounted.");
      (this._node = n, this._component = this.render(), P(this._component, n), this.props.modules && this.props.modules.analytics && !this.props.isDropin) && this.props.modules.analytics.send({
        containerWidth: this._node && this._node.offsetWidth,
        component: null !== (t = this.constructor.analyticsType) && void 0 !== t ? t : this.constructor.type,
        flavor: "components"
      });
      return this;
    }
  }, {
    key: "update",
    value: function (e) {
      return this.props = this.formatProps(Ye(Ye({}, this.props), e)), this.state = {}, this.unmount().remount();
    }
  }, {
    key: "remount",
    value: function (e) {
      if (!this._node) throw new Error("Component is not mounted.");
      var t = e || this.render();
      return P(t, this._node, null), this;
    }
  }, {
    key: "unmount",
    value: function () {
      return this._node && P(null, this._node), this;
    }
  }, {
    key: "remove",
    value: function () {
      this.unmount(), this._parentInstance && this._parentInstance.remove(this);
    }
  }]), e;
}();

_defineProperty($e, "defaultProps", {});
var Ze = "https://checkoutshopper-live.adyen.com/checkoutshopper/",
    Je = ["amount", "countryCode", "environment", "loadingContext", "i18n", "modules", "order", "session", "clientKey", "showPayButton", "installmentOptions", "onPaymentCompleted", "beforeRedirect", "beforeSubmit", "onSubmit", "onAdditionalDetails", "onCancel", "onChange", "onError", "onBalanceCheck", "onOrderRequest", "onOrderCreated", "setStatusAutomatically"],
    Qe = ["loadingContext", "extension"];

function Xe(e, t) {
  var o = n$1(e);

  if (r$1) {
    var i = r$1(e);
    t && (i = f$1(i).call(i, function (t) {
      return a$1(e, t).enumerable;
    })), o.push.apply(o, i);
  }

  return o;
}

var et,
    tt,
    nt,
    rt = function (e) {
  var t = e.loadingContext,
      n = void 0 === t ? Ze : t,
      r = e.extension,
      s = void 0 === r ? "svg" : r,
      c = _objectWithoutProperties(e, Qe);
  return function (e) {
    var t = function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n,
            r,
            s = null != arguments[t] ? arguments[t] : {};
        t % 2 ? p$1(n = Xe(Object(s), !0)).call(n, function (t) {
          _defineProperty(e, t, s[t]);
        }) : o$1 ? i(e, o$1(s)) : p$1(r = Xe(Object(s))).call(r, function (t) {
          l$1(e, t, a$1(s, t));
        });
      }

      return e;
    }({
      extension: s,
      loadingContext: n,
      imageFolder: "logos/",
      parentFolder: "",
      name: e
    }, c);

    return function (e) {
      var t,
          n,
          r,
          a,
          o,
          i,
          l = e.name,
          s = e.loadingContext,
          c = e.imageFolder,
          u = void 0 === c ? "" : c,
          d = e.parentFolder,
          p = void 0 === d ? "" : d,
          f = e.extension,
          h = e.size,
          m = void 0 === h ? "" : h,
          v = e.subFolder,
          g = void 0 === v ? "" : v;
      return y$1(t = y$1(n = y$1(r = y$1(a = y$1(o = y$1(i = "".concat(s, "images/")).call(i, u)).call(o, g)).call(a, p)).call(r, l)).call(n, m, ".")).call(t, f);
    }(t);
  };
},
    at = function (e) {
  var t = e.inline,
      n = void 0 !== t && t,
      r = e.size,
      a = void 0 === r ? "large" : r;
  return h("div", {
    className: "adyen-checkout__spinner__wrapper ".concat(n ? "adyen-checkout__spinner__wrapper--inline" : "")
  }, h("div", {
    className: "adyen-checkout__spinner adyen-checkout__spinner--".concat(a)
  }));
},
    ot = 0,
    it = [],
    lt = l.__b,
    st = l.__r,
    ct = l.diffed,
    ut = l.__c,
    dt = l.unmount;

function pt(e, t) {
  l.__h && l.__h(tt, e, ot || t), ot = 0;
  var n = tt.__H || (tt.__H = {
    __: [],
    __h: []
  });
  return e >= n.__.length && n.__.push({}), n.__[e];
}

function ft(e) {
  return ot = 1, ht(St, e);
}

function ht(e, t, n) {
  var r = pt(et++, 2);
  return r.t = e, r.__c || (r.__ = [n ? n(t) : St(void 0, t), function (e) {
    var t = r.t(r.__[0], e);
    r.__[0] !== t && (r.__ = [t, r.__[1]], r.__c.setState({}));
  }], r.__c = tt), r.__;
}

function yt(e, t) {
  var n = pt(et++, 3);
  !l.__s && wt(n.__H, t) && (n.__ = e, n.__H = t, tt.__H.__h.push(n));
}

function mt(e, t) {
  var n = pt(et++, 4);
  !l.__s && wt(n.__H, t) && (n.__ = e, n.__H = t, tt.__h.push(n));
}

function vt(e) {
  return ot = 5, gt(function () {
    return {
      current: e
    };
  }, []);
}

function gt(e, t) {
  var n = pt(et++, 7);
  return wt(n.__H, t) && (n.__ = e(), n.__H = t, n.__h = e), n.__;
}

function bt(e, t) {
  return ot = 8, gt(function () {
    return e;
  }, t);
}

function _t() {
  for (var e; e = it.shift();) if (e.__P) try {
    e.__H.__h.forEach(kt), e.__H.__h.forEach(Nt), e.__H.__h = [];
  } catch (t) {
    e.__H.__h = [], l.__e(t, e.__v);
  }
}

l.__b = function (e) {
  tt = null, lt && lt(e);
}, l.__r = function (e) {
  st && st(e), et = 0;
  var t = (tt = e.__c).__H;
  t && (t.__h.forEach(kt), t.__h.forEach(Nt), t.__h = []);
}, l.diffed = function (e) {
  ct && ct(e);
  var t = e.__c;
  t && t.__H && t.__H.__h.length && (1 !== it.push(t) && nt === l.requestAnimationFrame || ((nt = l.requestAnimationFrame) || function (e) {
    var t,
        n = function () {
      clearTimeout(r), Ct && cancelAnimationFrame(t), setTimeout(e);
    },
        r = setTimeout(n, 100);

    Ct && (t = requestAnimationFrame(n));
  })(_t)), tt = null;
}, l.__c = function (e, t) {
  t.some(function (e) {
    try {
      e.__h.forEach(kt), e.__h = e.__h.filter(function (e) {
        return !e.__ || Nt(e);
      });
    } catch (n) {
      t.some(function (e) {
        e.__h && (e.__h = []);
      }), t = [], l.__e(n, e.__v);
    }
  }), ut && ut(e, t);
}, l.unmount = function (e) {
  dt && dt(e);
  var t,
      n = e.__c;
  n && n.__H && (n.__H.__.forEach(function (e) {
    try {
      kt(e);
    } catch (e) {
      t = e;
    }
  }), t && l.__e(t, n.__v));
};
var Ct = "function" == typeof requestAnimationFrame;

function kt(e) {
  var t = tt,
      n = e.__c;
  "function" == typeof n && (e.__c = void 0, n()), tt = t;
}

function Nt(e) {
  var t = tt;
  e.__c = e.__(), tt = t;
}

function wt(e, t) {
  return !e || e.length !== t.length || t.some(function (t, n) {
    return t !== e[n];
  });
}

function St(e, t) {
  return "function" == typeof t ? t(e) : t;
}

var xt = B({
  i18n: new Ke(),
  loadingContext: "",
  commonProps: {}
});

function Pt() {
  return function (e) {
    var t = tt.context[e.__c],
        n = pt(et++, 9);
    return n.c = e, t ? (null == n.__ && (n.__ = !0, t.sub(tt)), t.props.value) : e.__;
  }(xt);
}

function Ft(e) {
  var t = function () {
    if ("undefined" == typeof Reflect || !S) return !1;
    if (S.sham) return !1;
    if ("function" == typeof Proxy) return !0;

    try {
      return Boolean.prototype.valueOf.call(S(Boolean, [], function () {})), !0;
    } catch (e) {
      return !1;
    }
  }();

  return function () {
    var n,
        r = _getPrototypeOf(e);

    if (t) {
      var a = _getPrototypeOf(this).constructor;
      n = S(r, arguments, a);
    } else n = r.apply(this, arguments);

    return _possibleConstructorReturn(this, n);
  };
}

var At = function (e) {
  _inherits(n, d);
  var t = Ft(n);

  function n() {
    var e, r;
    _classCallCheck(this, n);

    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i];

    return r = t.call.apply(t, y$1(e = [this]).call(e, o)), _defineProperty(_assertThisInitialized(r), "onClick", function (e) {
      e.preventDefault(), r.props.disabled || r.props.onClick(e, {
        complete: r.complete
      });
    }), _defineProperty(_assertThisInitialized(r), "complete", function () {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1e3;
      r.setState({
        completed: !0
      }), q(function () {
        r.setState({
          completed: !1
        });
      }, e);
    }), r;
  }

  return _createClass(n, [{
    key: "render",
    value: function (e, t) {
      var n,
          r,
          a = e.classNameModifiers,
          o = void 0 === a ? [] : a,
          i = e.disabled,
          l = e.href,
          s = e.icon,
          c = e.inline,
          u = e.label,
          d = e.status,
          p = e.variant,
          f = t.completed,
          h$1 = Pt().i18n,
          m = s ? h("img", {
        className: "adyen-checkout__button__icon",
        src: s,
        alt: "",
        "aria-hidden": "true"
      }) : "",
          v = y$1(n = []).call(n, _toConsumableArray(o), _toConsumableArray("primary" !== p ? [p] : []), _toConsumableArray(c ? ["inline"] : []), _toConsumableArray(f ? ["completed"] : []), _toConsumableArray("loading" === d || "redirect" === d ? ["loading"] : [])),
          g = H(y$1(r = ["adyen-checkout__button"]).call(r, _toConsumableArray(K(v).call(v, function (e) {
        return "adyen-checkout__button--".concat(e);
      })))),
          b = {
        loading: h(at, {
          size: "medium"
        }),
        redirect: h("span", {
          className: "adyen-checkout__button__content"
        }, h(at, {
          size: "medium",
          inline: !0
        }), h$1.get("payButton.redirecting")),
        default: h("span", {
          className: "adyen-checkout__button__content"
        }, m, h("span", {
          className: "adyen-checkout__button__text"
        }, u))
      },
          C = b[d] || b.default;
      return l ? h("a", {
        className: g,
        href: l,
        disabled: i,
        target: this.props.target,
        rel: this.props.rel
      }, C) : h("button", {
        className: g,
        type: "button",
        disabled: i,
        onClick: this.onClick
      }, C);
    }
  }]), n;
}();

_defineProperty(At, "defaultProps", {
  status: "default",
  variant: "primary",
  disabled: !1,
  label: "",
  inline: !1,
  target: "_self",
  onClick: function () {}
});

var Bt = ["amount", "classNameModifiers", "label"],
    Et = function (e, t) {
  var n;
  return y$1(n = "".concat(e.get("payButton"), " ")).call(n, null != t && t.value && null != t && t.currency ? e.amount(t.value, t.currency) : "");
},
    Rt = function (e) {
  var t,
      n = e.amount,
      r = e.classNameModifiers,
      a = void 0 === r ? [] : r,
      o = e.label,
      i = _objectWithoutProperties(e, Bt),
      l = Pt().i18n,
      s = n && {}.hasOwnProperty.call(n, "value") && 0 === n.value ? l.get("confirmPreauthorization") : Et(l, n);
  return h(At, _extends({}, i, {
    disabled: i.disabled || "loading" === i.status,
    classNameModifiers: y$1(t = []).call(t, _toConsumableArray(a), ["pay"]),
    label: o || s
  }));
},
    Ot = ["action", "resultCode", "sessionData", "order"];

function Dt(e) {
  var t = function () {
    if ("undefined" == typeof Reflect || !S) return !1;
    if (S.sham) return !1;
    if ("function" == typeof Proxy) return !0;

    try {
      return Boolean.prototype.valueOf.call(S(Boolean, [], function () {})), !0;
    } catch (e) {
      return !1;
    }
  }();

  return function () {
    var n,
        r = _getPrototypeOf(e);

    if (t) {
      var a = _getPrototypeOf(this).constructor;
      n = S(r, arguments, a);
    } else n = r.apply(this, arguments);

    return _possibleConstructorReturn(this, n);
  };
}

var Mt = function (e) {
  _inherits(n, e);
  var t = Dt(n);

  function n(e, r) {
    var a;
    return _classCallCheck(this, n), (a = t.call(this, r)).name = n.errorTypes[e], a;
  }

  return _createClass(n);
}(_wrapNativeSuper(Error));

function Tt() {
  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
      t = arguments.length > 1 ? arguments[1] : void 0;
  return Object.prototype.hasOwnProperty.call(e, t);
}

function It(e, t) {
  var o = n$1(e);

  if (r$1) {
    var i = r$1(e);
    t && (i = f$1(i).call(i, function (t) {
      return a$1(e, t).enumerable;
    })), o.push.apply(o, i);
  }

  return o;
}

function jt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n,
        r,
        s = null != arguments[t] ? arguments[t] : {};
    t % 2 ? p$1(n = It(Object(s), !0)).call(n, function (t) {
      _defineProperty(e, t, s[t]);
    }) : o$1 ? i(e, o$1(s)) : p$1(r = It(Object(s))).call(r, function (t) {
      l$1(e, t, a$1(s, t));
    });
  }

  return e;
}

function Vt(e) {
  var t = function () {
    if ("undefined" == typeof Reflect || !S) return !1;
    if (S.sham) return !1;
    if ("function" == typeof Proxy) return !0;

    try {
      return Boolean.prototype.valueOf.call(S(Boolean, [], function () {})), !0;
    } catch (e) {
      return !1;
    }
  }();

  return function () {
    var n,
        r = _getPrototypeOf(e);

    if (t) {
      var a = _getPrototypeOf(this).constructor;
      n = S(r, arguments, a);
    } else n = r.apply(this, arguments);

    return _possibleConstructorReturn(this, n);
  };
}

_defineProperty(Mt, "errorTypes", {
  NETWORK_ERROR: "NETWORK_ERROR",
  CANCEL: "CANCEL",
  IMPLEMENTATION_ERROR: "IMPLEMENTATION_ERROR",
  ERROR: "ERROR"
});

var Lt = function (e) {
  _inherits(r, $e);
  var t = Vt(r);

  function r(e) {
    var n, a, o, i, l, s, u, p, f;
    return _classCallCheck(this, r), f = t.call(this, jt({
      setStatusAutomatically: !0
    }, e)), _defineProperty(_assertThisInitialized(f), "componentRef", void 0), _defineProperty(_assertThisInitialized(f), "elementRef", void 0), _defineProperty(_assertThisInitialized(f), "handleError", function (e) {
      f.elementRef.setStatus("ready"), f.props.onError && f.props.onError(e, f.elementRef);
    }), _defineProperty(_assertThisInitialized(f), "handleAdditionalDetails", function (e) {
      return f.props.onAdditionalDetails ? f.props.onAdditionalDetails(e, f.elementRef) : f.props.session && f.submitAdditionalDetails(e.data), e;
    }), _defineProperty(_assertThisInitialized(f), "handleOrder", function (e) {
      f.elementRef._parentInstance.update({
        order: e
      });
    }), _defineProperty(_assertThisInitialized(f), "handleFinalResult", function (e) {
      if (f.props.setStatusAutomatically) {
        var t = function (e) {
          switch (e.resultCode) {
            case "Authorised":
            case "Received":
            case "Pending":
              return ["success"];

            case "Cancelled":
            case "Error":
            case "Refused":
              return ["error"];
          }
        }(e),
            n = _slicedToArray(t, 2),
            r = n[0],
            a = n[1];

        r && f.elementRef.setStatus(r, a);
      }

      return f.props.onPaymentCompleted && f.props.onPaymentCompleted(e, f.elementRef), e;
    }), _defineProperty(_assertThisInitialized(f), "payButton", function (e) {
      return h(Rt, _extends({}, e, {
        amount: f.props.amount,
        onClick: f.submit
      }));
    }), f.submit = m$1(n = f.submit).call(n, _assertThisInitialized(f)), f.setState = m$1(a = f.setState).call(a, _assertThisInitialized(f)), f.onValid = m$1(o = f.onValid).call(o, _assertThisInitialized(f)), f.onComplete = m$1(i = f.onComplete).call(i, _assertThisInitialized(f)), f.onSubmit = m$1(l = f.onSubmit).call(l, _assertThisInitialized(f)), f.handleAction = m$1(s = f.handleAction).call(s, _assertThisInitialized(f)), f.handleOrder = m$1(u = f.handleOrder).call(u, _assertThisInitialized(f)), f.handleResponse = m$1(p = f.handleResponse).call(p, _assertThisInitialized(f)), f.elementRef = e && e.elementRef || _assertThisInitialized(f), f;
  }

  return _createClass(r, [{
    key: "setState",
    value: function (e) {
      this.state = jt(jt({}, this.state), e), this.onChange();
    }
  }, {
    key: "onChange",
    value: function () {
      var e = this.isValid,
          t = {
        data: this.data,
        errors: this.state.errors,
        valid: this.state.valid,
        isValid: e
      };
      return this.props.onChange && this.props.onChange(t, this.elementRef), e && this.onValid(), t;
    }
  }, {
    key: "onSubmit",
    value: function () {
      var e = this;
      if (this.props.isInstantPayment && this.elementRef.closeActivePaymentMethod(), this.props.setStatusAutomatically && this.elementRef.setStatus("loading"), this.props.onSubmit) this.props.onSubmit({
        data: this.data,
        isValid: this.isValid
      }, this.elementRef);else if (this._parentInstance.session) {
        var t = this.props.beforeSubmit ? new v$1(function (t, n) {
          return e.props.beforeSubmit(e.data, e.elementRef, {
            resolve: t,
            reject: n
          });
        }) : v$1.resolve(this.data);
        t.then(function (t) {
          return e.submitPayment(t);
        }).catch(function () {
          e.elementRef.setStatus("ready");
        });
      } else this.handleError(new Mt("IMPLEMENTATION_ERROR", "Could not submit the payment"));
    }
  }, {
    key: "onValid",
    value: function () {
      var e = {
        data: this.data
      };
      return this.props.onValid && this.props.onValid(e, this.elementRef), e;
    }
  }, {
    key: "onComplete",
    value: function (e) {
      this.props.onComplete && this.props.onComplete(e, this.elementRef);
    }
  }, {
    key: "submit",
    value: function () {
      this.isValid ? this.onSubmit() : this.showValidation();
    }
  }, {
    key: "showValidation",
    value: function () {
      return this.componentRef && this.componentRef.showValidation && this.componentRef.showValidation(), this;
    }
  }, {
    key: "setStatus",
    value: function (e, t) {
      var n;
      return null !== (n = this.componentRef) && void 0 !== n && n.setStatus && this.componentRef.setStatus(e, t), this;
    }
  }, {
    key: "submitPayment",
    value: function (e) {
      var t = this;
      return this._parentInstance.session.submitPayment(e).then(this.handleResponse).catch(function (e) {
        return t.handleError(e);
      });
    }
  }, {
    key: "submitAdditionalDetails",
    value: function (e) {
      return this._parentInstance.session.submitDetails(e).then(this.handleResponse).catch(this.handleError);
    }
  }, {
    key: "handleAction",
    value: function (e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};

      if (!e || !e.type) {
        if (Tt(e, "action") && Tt(e, "resultCode")) throw new Error('handleAction::Invalid Action - the passed action object itself has an "action" property and a "resultCode": have you passed in the whole response object by mistake?');
        throw new Error('handleAction::Invalid Action - the passed action object does not have a "type" property');
      }

      var n = this._parentInstance.createFromAction(e, jt(jt({}, t), {}, {
        onAdditionalDetails: this.handleAdditionalDetails
      }));

      return n ? (this.unmount(), n.mount(this._node)) : null;
    }
  }, {
    key: "handleResponse",
    value: function (e) {
      var t,
          r,
          a = function (e) {
        var t,
            r = [],
            a = k$1(t = n$1(e)).call(t, function (t, n) {
          return h$1(Ot).call(Ot, n) ? t[n] = e[n] : r.push(n), t;
        }, {});
        return r.length && console.warn("The following properties should not be passed to the client: ".concat(r.join(", "))), a;
      }(e);

      a.action ? this.elementRef.handleAction(a.action) : (null === (t = a.order) || void 0 === t || null === (r = t.remainingAmount) || void 0 === r ? void 0 : r.value) > 0 ? this.elementRef.handleOrder(a.order) : this.elementRef.handleFinalResult(a);
    }
  }, {
    key: "isValid",
    get: function () {
      return !1;
    }
  }, {
    key: "icon",
    get: function () {
      var e;
      return null !== (e = this.props.icon) && void 0 !== e ? e : rt({
        loadingContext: this.props.loadingContext
      })(this.constructor.type);
    }
  }, {
    key: "displayName",
    get: function () {
      return this.props.name || this.constructor.type;
    }
  }, {
    key: "accessibleName",
    get: function () {
      return this.displayName;
    }
  }, {
    key: "type",
    get: function () {
      return this.props.type || this.constructor.type;
    }
  }]), r;
}();

function Ut(e) {
  var t = function () {
    if ("undefined" == typeof Reflect || !S) return !1;
    if (S.sham) return !1;
    if ("function" == typeof Proxy) return !0;

    try {
      return Boolean.prototype.valueOf.call(S(Boolean, [], function () {})), !0;
    } catch (e) {
      return !1;
    }
  }();

  return function () {
    var n,
        r = _getPrototypeOf(e);

    if (t) {
      var a = _getPrototypeOf(this).constructor;
      n = S(r, arguments, a);
    } else n = r.apply(this, arguments);

    return _possibleConstructorReturn(this, n);
  };
}

var qt = function (e) {
  _inherits(n, d);
  var t = Ut(n);

  function n() {
    var e, r;
    _classCallCheck(this, n);

    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i];

    return r = t.call.apply(t, y$1(e = [this]).call(e, o)), _defineProperty(_assertThisInitialized(r), "iframeEl", void 0), r;
  }

  return _createClass(n, [{
    key: "iframeOnLoad",
    value: function () {
      this.props.callback && "function" == typeof this.props.callback && this.props.callback(this.iframeEl.contentWindow);
    }
  }, {
    key: "componentDidMount",
    value: function () {
      var e;
      if (this.iframeEl.addEventListener) this.iframeEl.addEventListener("load", m$1(e = this.iframeOnLoad).call(e, this), !1);else if (this.iframeEl.attachEvent) {
        var t;
        this.iframeEl.attachEvent("onload", m$1(t = this.iframeOnLoad).call(t, this));
      } else {
        var n;
        this.iframeEl.onload = m$1(n = this.iframeOnLoad).call(n, this);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function () {
      var e;
      if (this.iframeEl.removeEventListener) this.iframeEl.removeEventListener("load", m$1(e = this.iframeOnLoad).call(e, this), !1);else if (this.iframeEl.detachEvent) {
        var t;
        this.iframeEl.detachEvent("onload", m$1(t = this.iframeOnLoad).call(t, this));
      } else this.iframeEl.onload = null;
    }
  }, {
    key: "render",
    value: function (e) {
      var t = this,
          n = e.name,
          r = e.src,
          a = e.width,
          o = e.height,
          i = e.minWidth,
          l = e.minHeight,
          s = e.allow,
          c = e.title;
      return h("iframe", {
        ref: function (e) {
          t.iframeEl = e;
        },
        allow: s,
        className: "adyen-checkout__iframe adyen-checkout__iframe--".concat(n),
        name: n,
        src: r,
        width: a,
        height: o,
        "min-width": i,
        "min-height": l,
        style: {
          border: 0
        },
        frameBorder: "0",
        title: c,
        referrerpolicy: "origin"
      });
    }
  }]), n;
}();

_defineProperty(qt, "defaultProps", {
  width: "0",
  height: "0",
  minWidth: "0",
  minHeight: "0",
  src: null,
  allow: null,
  title: "components iframe"
});

var Kt = function (e, t, n) {
  var r,
      a = new v$1(function (a, o) {
    r = q(function () {
      o(n);
    }, e), t.then(function (e) {
      clearTimeout(r), a(e);
    }).catch(function (e) {
      clearTimeout(r), o(e);
    });
  });
  return {
    promise: a,
    cancel: function () {
      clearTimeout(r);
    }
  };
},
    Ht = {
  result: {
    type: "deviceFingerprint",
    value: "df-timedOut"
  },
  errorCode: "timeout"
},
    zt = {
  result: {
    type: "deviceFingerprint",
    value: "df-failed"
  }
},
    Wt = "unknownError",
    Gt = {
  timeout: "iframe loading timed out",
  wrongOrigin: "Result did not come from the expected origin",
  wrongDataType: "Result data was not of the expected type",
  missingProperty: "Result data did not contain the expected properties",
  unknownError: "An unknown error occurred"
};

function Yt(e, t) {
  var o = n$1(e);

  if (r$1) {
    var i = r$1(e);
    t && (i = f$1(i).call(i, function (t) {
      return a$1(e, t).enumerable;
    })), o.push.apply(o, i);
  }

  return o;
}

var $t = function (e, t, n, r, s) {
  return function (c) {
    var u = function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n,
            r,
            s = null != arguments[t] ? arguments[t] : {};
        t % 2 ? p$1(n = Yt(Object(s), !0)).call(n, function (t) {
          _defineProperty(e, t, s[t]);
        }) : o$1 ? i(e, o$1(s)) : p$1(r = Yt(Object(s))).call(r, function (t) {
          l$1(e, t, a$1(s, t));
        });
      }

      return e;
    }({}, r);

    if ((c.origin || c.originalEvent.origin) !== e) return "Message was not sent from the expected domain";
    if ("string" != typeof c.data) return "Event data was not of type string";
    if (!c.data.length) return "Invalid event data string";

    try {
      var f = JSON.parse(c.data);
      if (!Tt(f, "type") || f.type !== s) return "Event data was not of expected type";
      t(f);
    } catch (e) {
      return n(u), !1;
    }

    return !0;
  };
},
    Zt = function (e) {
  var t,
      n,
      r,
      a = /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/.exec(e);
  if (!a) return null;
  var o = _slicedToArray(a, 5),
      i = o[1],
      l = o[2],
      s = o[3],
      c = o[4];
  return i && l && s ? y$1(t = y$1(n = y$1(r = "".concat(i, ":")).call(r, l)).call(n, s)).call(t, c ? ":".concat(c) : "") : null;
};

function Jt(e) {
  var t = function () {
    if ("undefined" == typeof Reflect || !S) return !1;
    if (S.sham) return !1;
    if ("function" == typeof Proxy) return !0;

    try {
      return Boolean.prototype.valueOf.call(S(Boolean, [], function () {})), !0;
    } catch (e) {
      return !1;
    }
  }();

  return function () {
    var n,
        r = _getPrototypeOf(e);

    if (t) {
      var a = _getPrototypeOf(this).constructor;
      n = S(r, arguments, a);
    } else n = r.apply(this, arguments);

    return _possibleConstructorReturn(this, n);
  };
}

var Qt = function (e) {
  _inherits(n, d);
  var t = Jt(n);

  function n(e) {
    var r;
    return _classCallCheck(this, n), r = t.call(this, e), _defineProperty(_assertThisInitialized(r), "postMessageDomain", void 0), _defineProperty(_assertThisInitialized(r), "processMessageHandler", void 0), _defineProperty(_assertThisInitialized(r), "deviceFingerPrintPromise", void 0), r.postMessageDomain = Zt(r.props.loadingContext) || r.props.loadingContext, r;
  }

  return _createClass(n, [{
    key: "getDfpPromise",
    value: function () {
      var e = this;
      return new v$1(function (t, n) {
        e.processMessageHandler = $t(e.postMessageDomain, t, n, zt, "deviceFingerprint"), window.addEventListener("message", e.processMessageHandler);
      });
    }
  }, {
    key: "componentDidMount",
    value: function () {
      var e = this;
      this.deviceFingerPrintPromise = Kt(2e4, this.getDfpPromise(), Ht), this.deviceFingerPrintPromise.promise.then(function (t) {
        e.props.onCompleteFingerprint(t), window.removeEventListener("message", e.processMessageHandler);
      }).catch(function (t) {
        e.props.onErrorFingerprint(t), window.removeEventListener("message", e.processMessageHandler);
      });
    }
  }, {
    key: "render",
    value: function (e) {
      var t = e.dfpURL;
      return h("div", {
        className: "adyen-checkout-risk__device-fingerprint"
      }, h(qt, {
        name: "dfIframe",
        src: t,
        allow: "geolocation; microphone; camera;",
        title: "devicefingerprinting iframe"
      }));
    }
  }]), n;
}();

function Xt(e) {
  var t = function () {
    if ("undefined" == typeof Reflect || !S) return !1;
    if (S.sham) return !1;
    if ("function" == typeof Proxy) return !0;

    try {
      return Boolean.prototype.valueOf.call(S(Boolean, [], function () {})), !0;
    } catch (e) {
      return !1;
    }
  }();

  return function () {
    var n,
        r = _getPrototypeOf(e);

    if (t) {
      var a = _getPrototypeOf(this).constructor;
      n = S(r, arguments, a);
    } else n = r.apply(this, arguments);

    return _possibleConstructorReturn(this, n);
  };
}

var en = function (e) {
  _inherits(n, d);
  var t = Xt(n);

  function n(e) {
    var r, a, o;
    (_classCallCheck(this, n), r = t.call(this, e), e.clientKey) && (r.state = {
      status: "retrievingFingerPrint",
      dfpURL: y$1(a = y$1(o = "".concat(r.props.loadingContext, "assets/html/")).call(o, e.clientKey, "/dfp.")).call(a, "1.0.0", ".html")
    });
    return r;
  }

  return _createClass(n, [{
    key: "setStatusComplete",
    value: function (e) {
      var t = this;
      this.setState({
        status: "complete"
      }, function () {
        t.props.onComplete(e);
      });
    }
  }, {
    key: "render",
    value: function (e, t) {
      var n = this,
          r = e.loadingContext,
          a = t.dfpURL;
      return "retrievingFingerPrint" === this.state.status ? h("div", {
        className: "adyen-checkout-risk__device-fingerprint--wrapper",
        style: {
          position: "absolute",
          width: 0,
          height: 0
        }
      }, h(Qt, {
        loadingContext: r,
        dfpURL: a,
        onCompleteFingerprint: function (e) {
          n.setStatusComplete(e);
        },
        onErrorFingerprint: function (e) {
          var t;
          n.props.onError({
            errorCode: t = e.errorCode,
            message: Gt[t] || Gt[Wt],
            type: "deviceFingerprint"
          }), n.setStatusComplete(e.result);
        }
      })) : null;
    }
  }]), n;
}();

_defineProperty(en, "defaultProps", {
  onComplete: function () {},
  onError: function () {}
});
var tn = {
  decode: function (e) {
    return !!tn.isBase64(e) && !!tn.isBase64(e) && (t = e, decodeURIComponent(K(Array.prototype).call(window.atob(t), function (e) {
      var t;
      return "%".concat(G(t = "00".concat(e.charCodeAt(0).toString(16))).call(t, -2));
    }).join("")));
    var t;
  },
  encode: function (e) {
    return window.btoa(e);
  },
  isBase64: function (e) {
    return !!e && !(e.length % 4) && window.btoa(window.atob(e)) === e;
  }
};

function nn(e, t) {
  var o = n$1(e);

  if (r$1) {
    var i = r$1(e);
    t && (i = f$1(i).call(i, function (t) {
      return a$1(e, t).enumerable;
    })), o.push.apply(o, i);
  }

  return o;
}

function rn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n,
        r,
        s = null != arguments[t] ? arguments[t] : {};
    t % 2 ? p$1(n = nn(Object(s), !0)).call(n, function (t) {
      _defineProperty(e, t, s[t]);
    }) : o$1 ? i(e, o$1(s)) : p$1(r = nn(Object(s))).call(r, function (t) {
      l$1(e, t, a$1(s, t));
    });
  }

  return e;
}

function an(e) {
  var t = function () {
    if ("undefined" == typeof Reflect || !S) return !1;
    if (S.sham) return !1;
    if ("function" == typeof Proxy) return !0;

    try {
      return Boolean.prototype.valueOf.call(S(Boolean, [], function () {})), !0;
    } catch (e) {
      return !1;
    }
  }();

  return function () {
    var n,
        r = _getPrototypeOf(e);

    if (t) {
      var a = _getPrototypeOf(this).constructor;
      n = S(r, arguments, a);
    } else n = r.apply(this, arguments);

    return _possibleConstructorReturn(this, n);
  };
}

var on = function (e) {
  _inherits(n, $e);
  var t = an(n);

  function n(e) {
    var r;
    _classCallCheck(this, n), r = t.call(this, e), _defineProperty(_assertThisInitialized(r), "nodeRiskContainer", null), _defineProperty(_assertThisInitialized(r), "onComplete", function (e) {
      var t,
          n = rn(rn({}, r.state.data), {}, (_defineProperty(t = {}, e.type, e.value), _defineProperty(t, "persistentCookie", e.persistentCookie), _defineProperty(t, "components", e.components), t));
      r.setState({
        data: n,
        isValid: !0
      }), r.props.risk.onComplete(r.data), r.cleanUp();
    }), _defineProperty(_assertThisInitialized(r), "onError", function (e) {
      r.props.risk.onError(e), r.cleanUp();
    }), _defineProperty(_assertThisInitialized(r), "cleanUp", function () {
      r.nodeRiskContainer && r.nodeRiskContainer.parentNode && r.nodeRiskContainer.parentNode.removeChild(r.nodeRiskContainer);
    });
    var a = _defineProperty({}, "deviceFingerprint", null);
    return r.setState({
      data: a
    }), !0 === r.props.risk.enabled && (document.querySelector(r.props.risk.node) ? (r.nodeRiskContainer = document.createElement("div"), document.querySelector(r.props.risk.node).appendChild(r.nodeRiskContainer), r.mount(r.nodeRiskContainer)) : r.onError({
      message: "RiskModule node was not found"
    })), r;
  }

  return _createClass(n, [{
    key: "formatProps",
    value: function (e) {
      return rn(rn({}, e), {}, {
        risk: rn(rn({}, n.defaultProps.risk), e.risk)
      });
    }
  }, {
    key: "isValid",
    get: function () {
      return this.state.isValid;
    }
  }, {
    key: "data",
    get: function () {
      if (this.isValid) {
        var e = rn({
          version: "1.0.0"
        }, this.state.data);
        return tn.encode(W(e));
      }

      return !1;
    }
  }, {
    key: "componentWillUnmount",
    value: function () {
      this.cleanUp();
    }
  }, {
    key: "render",
    value: function () {
      return h(en, _extends({}, this.props, {
        loadingContext: this.props.loadingContext,
        onComplete: this.onComplete,
        onError: this.onError
      }));
    }
  }]), n;
}();

function ln(e) {
  var t,
      n = e.children,
      r = e.classNameModifiers,
      a = void 0 === r ? [] : r,
      o = e.label,
      i = e.readonly,
      l = void 0 !== i && i,
      s = Pt().i18n;
  return h("div", {
    className: H(y$1(t = ["adyen-checkout__fieldset"]).call(t, _toConsumableArray(K(a).call(a, function (e) {
      return "adyen-checkout__fieldset--".concat(e);
    })), [{
      "adyen-checkout__fieldset--readonly": l
    }]))
  }, o && h("div", {
    className: "adyen-checkout__fieldset__title"
  }, s.get(o)), h("div", {
    className: "adyen-checkout__fieldset__fields"
  }, n));
}

_defineProperty(on, "type", "risk"), _defineProperty(on, "defaultProps", {
  risk: {
    enabled: !0,
    onComplete: function () {},
    onError: function () {},
    node: "body"
  }
});

var sn,
    cn = function (e) {
  var t = e.type,
      n = e.className,
      r = void 0 === n ? "" : n,
      a = e.alt,
      o = void 0 === a ? "" : a,
      i = Pt().loadingContext,
      l = rt({
    loadingContext: i,
    imageFolder: "components/"
  })(t);
  return h("img", {
    className: H("adyen-checkout__icon", r),
    alt: o,
    src: l
  });
},
    un = (_defineProperty(sn = {}, "incomplete field", "error.va.gen.01"), _defineProperty(sn, "field not valid", "error.va.gen.02"), _defineProperty(sn, "luhn check failed", "error.va.sf-cc-num.01"), _defineProperty(sn, "Card too old", "error.va.sf-cc-dat.01"), _defineProperty(sn, "Date too far in future", "error.va.sf-cc-dat.02"), _defineProperty(sn, "Your card expires before check out date", "error.va.sf-cc-dat.03"), _defineProperty(sn, "Unsupported card entered", "error.va.sf-cc-num.03"), sn),
    dn = un["incomplete field"],
    pn = Z(),
    fn = function () {
  var e,
      t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "field";
  return pn += 1, y$1(e = "".concat(t, "-")).call(e, pn);
};

function hn(e, t) {
  var o = n$1(e);

  if (r$1) {
    var i = r$1(e);
    t && (i = f$1(i).call(i, function (t) {
      return a$1(e, t).enumerable;
    })), o.push.apply(o, i);
  }

  return o;
}

var yn = function (e) {
  var t = e.children,
      n = e.className,
      r = e.classNameModifiers,
      s = e.dir,
      c = e.disabled,
      u = e.errorMessage,
      f = e.helper,
      h$1 = e.inputWrapperModifiers,
      m = e.isCollatingErrors,
      v = e.isLoading,
      g = e.isValid,
      C = e.label,
      k = e.name,
      N = e.onBlur,
      w = e.onFieldBlur,
      S = e.onFocus,
      P = e.onFocusField,
      F = e.showValidIcon,
      A = e.useLabelElement,
      B = e.filled,
      E = e.focused,
      O = vt(fn("adyen-checkout-".concat(k))),
      D = ft(!1),
      M = _slicedToArray(D, 2),
      V = M[0],
      L = M[1],
      U = ft(!1),
      q = _slicedToArray(U, 2),
      z = q[0],
      W = q[1];
  null != E && L(!!E), null != B && W(!!B);
  var G = bt(function (e) {
    L(!0), null == S || S(e);
  }, [S]),
      Y = bt(function (e) {
    L(!1), null == N || N(e), null == w || w(e);
  }, [N, w]),
      $ = bt(function () {
    var e, n, r;
    return h(p, null, "string" == typeof C && h("span", {
      className: H({
        "adyen-checkout__label__text": !0,
        "adyen-checkout__label__text--error": u
      })
    }, C), "function" == typeof C && C(), f && h("span", {
      className: "adyen-checkout__helper-text"
    }, f), h("div", {
      className: H(y$1(e = ["adyen-checkout__input-wrapper"]).call(e, _toConsumableArray(K(h$1).call(h$1, function (e) {
        return "adyen-checkout__input-wrapper--".concat(e);
      })))),
      dir: s
    }, K(n = x(t)).call(n, function (e) {
      var t = function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n,
              r,
              s = null != arguments[t] ? arguments[t] : {};
          t % 2 ? p$1(n = hn(Object(s), !0)).call(n, function (t) {
            _defineProperty(e, t, s[t]);
          }) : o$1 ? i(e, o$1(s)) : p$1(r = hn(Object(s))).call(r, function (t) {
            l$1(e, t, a$1(s, t));
          });
        }

        return e;
      }({
        isValid: g,
        onFocusHandler: G,
        onBlurHandler: Y,
        isInvalid: !!u
      }, k && {
        uniqueId: O.current
      });

      return q$1(e, t);
    }), v && h("span", {
      className: "adyen-checkout-input__inline-validation adyen-checkout-input__inline-validation--loading"
    }, h(at, {
      size: "small"
    })), g && !1 !== F && h("span", {
      className: "adyen-checkout-input__inline-validation adyen-checkout-input__inline-validation--valid"
    }, h(cn, {
      type: "checkmark"
    })), u && h("span", {
      className: "adyen-checkout-input__inline-validation adyen-checkout-input__inline-validation--invalid"
    }, h(cn, {
      type: "field_error"
    }))), u && "string" == typeof u && u.length && h("span", {
      className: "adyen-checkout__error-text",
      id: y$1(r = "".concat(O.current)).call(r, "-ariaError"),
      "aria-hidden": m ? "true" : null,
      "aria-live": m ? null : "polite"
    }, u));
  }, [t, u, v, g, C, G, Y]),
      Z = bt(function (e) {
    var t = e.onFocusField,
        n = e.focused,
        r = e.filled,
        a = e.disabled,
        o = e.name,
        i = e.uniqueId,
        l = e.useLabelElement,
        s = e.children,
        c = {
      onClick: t,
      className: H({
        "adyen-checkout__label": !0,
        "adyen-checkout__label--focused": n,
        "adyen-checkout__label--filled": r,
        "adyen-checkout__label--disabled": a
      })
    };
    return l ? h("label", _extends({}, c, {
      htmlFor: o && i
    }), s) : h("div", _extends({}, c, {
      role: "form"
    }), s);
  }, []);
  return h("div", {
    className: H("adyen-checkout__field", n, K(r).call(r, function (e) {
      return "adyen-checkout__field--".concat(e);
    }), {
      "adyen-checkout__field--error": u,
      "adyen-checkout__field--valid": g
    })
  }, h(Z, {
    onFocusField: P,
    name: k,
    disabled: c,
    filled: z,
    focused: V,
    useLabelElement: A,
    uniqueId: O.current
  }, $()));
};

yn.defaultProps = {
  className: "",
  classNameModifiers: [],
  inputWrapperModifiers: [],
  useLabelElement: !0
};

var mn = function (e) {
  var t = e.data,
      n = t.name,
      r = t.registrationNumber;
  return h(ln, {
    classNameModifiers: ["companyDetails"],
    label: "companyDetails",
    readonly: !0
  }, n && "".concat(n, " "), r && "".concat(r, " "));
},
    vn = ["classNameModifiers", "uniqueId", "isInvalid", "isValid", "isCollatingErrors"];

function gn(e) {
  var t,
      n = e.autoCorrect,
      r = e.classNameModifiers,
      a = e.isInvalid,
      o = e.isValid,
      i = e.readonly,
      l = void 0 === i ? null : i,
      s = e.spellCheck,
      c = e.type,
      u = e.uniqueId,
      d = e.isCollatingErrors,
      p = e.disabled;
  Object.prototype.hasOwnProperty.call(e, "onChange") && console.error("Error: Form fields that rely on InputBase may not have an onChange property");
  var f = bt(function (t) {
    e.onInput(t);
  }, [e.onInput]),
      h$1 = bt(function (t) {
    var n, r, a;
    (null == e || null === (n = e.onBlurHandler) || void 0 === n || n.call(e, t), e.trimOnBlur) && (t.target.value = J(a = t.target.value).call(a));
    null == e || null === (r = e.onBlur) || void 0 === r || r.call(e, t);
  }, [e.onBlur, e.onBlurHandler]),
      m = bt(function (t) {
    var n;
    null == e || null === (n = e.onFocusHandler) || void 0 === n || n.call(e, t);
  }, [e.onFocusHandler]),
      v = H("adyen-checkout__input", ["adyen-checkout__input--".concat(c)], e.className, {
    "adyen-checkout__input--invalid": a,
    "adyen-checkout__input--valid": o
  }, K(r).call(r, function (e) {
    return "adyen-checkout__input--".concat(e);
  }));
  e.classNameModifiers, e.uniqueId, e.isInvalid, e.isValid, e.isCollatingErrors;
  var g = _objectWithoutProperties(e, vn);
  return h("input", _extends({
    id: u
  }, g, {
    type: c,
    className: v,
    readOnly: l,
    spellCheck: s,
    autoCorrect: n,
    "aria-describedby": d ? null : y$1(t = "".concat(u)).call(t, "-ariaError"),
    "aria-invalid": a,
    onInput: f,
    onBlur: h$1,
    onFocus: m,
    disabled: p
  }));
}

function bn(e) {
  return h(gn, _extends({
    classNameModifiers: ["large"]
  }, e, {
    "aria-required": e.required,
    type: "text"
  }));
}

gn.defaultProps = {
  type: "text",
  classNameModifiers: []
};

var _n = function () {
  var e = document.createElement("input");
  return e.setAttribute("type", "date"), "date" === e.type;
},
    Cn = function () {
  var e,
      t,
      n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
  if (-1 === C$1(n).call(n, "/")) return n;
  var r = n.split("/"),
      a = _slicedToArray(r, 3),
      o = a[0],
      i = void 0 === o ? "" : o,
      l = a[1],
      s = void 0 === l ? "" : l,
      c = a[2],
      u = void 0 === c ? "" : c;
  return i && s && u ? y$1(e = y$1(t = "".concat(u, "-")).call(t, s, "-")).call(e, i) : null;
};

function kn(e) {
  var t = gt(_n, []);
  return h(gn, _extends({}, e, t ? {
    type: "date"
  } : {
    onInput: function (t) {
      var n = t.target.value;
      t.target.value = function (e) {
        var t = e.replace(/\D|\s/g, "").replace(/^(00)(.*)?/, "01$2").replace(/^(3[2-9])(.*)?/, "0$1$2").replace(/^([4-9])(.*)?/, "0$1").replace(/^([0-9]{2})(00)(.*)?/, "$101").replace(/^(3[01])(02)(.*)?/, "29$2").replace(/^([0-9]{2})([2-9]|1[3-9])(.*)?/, "$10$2").replace(/^([0-9]{2})([0-9]{2})([0-9])/, "$1/$2/$3").replace(/^([0-9]{2})([0-9])/, "$1/$2"),
            n = t.split("/"),
            r = _slicedToArray(n, 3),
            a = r[0],
            o = void 0 === a ? "" : a,
            i = r[1],
            l = void 0 === i ? "" : i,
            s = r[2],
            c = void 0 === s ? "" : s;
        return 4 === c.length && "29" === o && "02" === l && (Number(c) % 4 != 0 || "00" === c.substr(2, 2) && Number(c) % 400 != 0) ? t.replace(/^29/, "28") : t;
      }(n), e.onInput(t);
    },
    maxLength: 10
  }));
}

function Nn(e) {
  return h(gn, _extends({}, e, {
    type: "tel"
  }));
}

function wn(e) {
  return h(gn, _extends({}, e, {
    type: "email",
    autoCapitalize: "off"
  }));
}

function Sn(e) {
  var t = e.items,
      n = e.i18n,
      r = e.name,
      a = e.onChange,
      o = e.value,
      i = e.isInvalid,
      l = e.uniqueId,
      s = null == l ? void 0 : l.replace(/[0-9]/g, "").substring(0, Q(l).call(l, "-"));
  return h("div", {
    className: "adyen-checkout__radio_group"
  }, K(t).call(t, function (t) {
    var l = fn(s);
    return h("div", {
      key: t.id,
      className: "adyen-checkout__radio_group__input-wrapper"
    }, h("input", {
      id: l,
      type: "radio",
      checked: o === t.id,
      className: "adyen-checkout__radio_group__input",
      name: r,
      onChange: a,
      onClick: a,
      value: t.id
    }), h("label", {
      className: H(["adyen-checkout__label__text", "adyen-checkout__radio_group__label", e.className, {
        "adyen-checkout__radio_group__label--invalid": i
      }]),
      htmlFor: l
    }, n.get(t.name)));
  }));
}

Sn.defaultProps = {
  onChange: function () {},
  items: []
};
var xn = ["classNameModifiers", "label", "isInvalid", "onChange"];

function Pn(e) {
  var t = e.classNameModifiers,
      n = void 0 === t ? [] : t,
      r = e.label,
      a = e.isInvalid,
      o = e.onChange,
      i = _objectWithoutProperties(e, xn);
  return h("label", {
    className: "adyen-checkout__checkbox"
  }, h("input", _extends({}, i, {
    className: H(["adyen-checkout__checkbox__input", [i.className], {
      "adyen-checkout__checkbox__input--invalid": a
    }, K(n).call(n, function (e) {
      return "adyen-checkout__input--".concat(e);
    })]),
    type: "checkbox",
    onChange: o
  })), h("span", {
    className: "adyen-checkout__checkbox__label"
  }, r));
}

Pn.defaultProps = {
  onChange: function () {}
};
var Fn = "Select-module_adyen-checkout__dropdown__0Mj-n",
    An = "Select-module_adyen-checkout__dropdown__button__yTyqq",
    Bn = "Select-module_adyen-checkout__dropdown__button--active__Ej-JR",
    En = "Select-module_adyen-checkout__filter-input__CwPBS",
    Rn = "Select-module_adyen-checkout__dropdown__list__YtEzj",
    On = "Select-module_adyen-checkout__dropdown__list--active__Gegw2",
    Dn = "Select-module_adyen-checkout__dropdown__element__ORU4-";

function Mn(e) {
  var t,
      n = e.backgroundUrl,
      r = void 0 === n ? "" : n,
      a = e.className,
      o = void 0 === a ? "" : a,
      i = e.classNameModifiers,
      l = void 0 === i ? [] : i,
      s = e.src,
      c = void 0 === s ? "" : s,
      u = e.alt,
      d = void 0 === u ? "" : u,
      p = e.showOnError,
      f = void 0 !== p && p,
      h$1 = ft(!1),
      m = _slicedToArray(h$1, 2),
      v = m[0],
      g = m[1],
      C = vt(null),
      k = function () {
    g(!0);
  },
      N = H.apply(void 0, y$1(t = [[o], "adyen-checkout__image", {
    "adyen-checkout__image--loaded": v
  }]).call(t, _toConsumableArray(K(l).call(l, function (e) {
    return "adyen-checkout__image--".concat(e);
  }))));

  return yt(function () {
    var e = r ? new Image() : C.current;
    e.src = r || c, e.onload = k, g(!!e.complete);
  }, []), r ? h("div", _extends({
    style: {
      backgroundUrl: r
    }
  }, e, {
    className: N
  })) : h("img", _extends({}, e, {
    alt: d,
    ref: C,
    className: N,
    onError: function () {
      g(f);
    }
  }));
}

var Tn = ["filterable", "toggleButtonRef"];

function In(e) {
  var t = e.filterable,
      n = e.toggleButtonRef,
      r = _objectWithoutProperties(e, Tn);
  return h(t ? "div" : "button", _extends({}, r, {
    ref: n
  }));
}

function jn(e) {
  var t,
      n = Pt().i18n,
      r = e.active,
      a = e.readonly,
      o = e.showList;
  return h(In, {
    "aria-disabled": a,
    "aria-expanded": o,
    "aria-haspopup": "listbox",
    className: H((t = {
      "adyen-checkout__dropdown__button": !0
    }, _defineProperty(t, An, !0), _defineProperty(t, "adyen-checkout__dropdown__button--readonly", a), _defineProperty(t, "adyen-checkout__dropdown__button--active", o), _defineProperty(t, Bn, o), _defineProperty(t, "adyen-checkout__dropdown__button--invalid", e.isInvalid), _defineProperty(t, "adyen-checkout__dropdown__button--valid", e.isValid), t)),
    filterable: e.filterable,
    onClick: a ? null : e.toggleList,
    onKeyDown: a ? null : e.onButtonKeyDown,
    role: e.filterable ? "button" : null,
    tabIndex: "0",
    title: r.name || e.placeholder,
    toggleButtonRef: e.toggleButtonRef,
    type: e.filterable ? null : "button",
    "aria-describedby": e.ariaDescribedBy,
    id: e.id
  }, o && e.filterable ? h("input", {
    "aria-autocomplete": "list",
    "aria-controls": e.selectListId,
    "aria-expanded": o,
    "aria-owns": e.selectListId,
    autoComplete: "off",
    className: H("adyen-checkout__filter-input", [En]),
    onInput: e.onInput,
    placeholder: n.get("select.filter.placeholder"),
    ref: e.filterInputRef,
    role: "combobox",
    type: "text"
  }) : h(p, null, h("span", {
    className: "adyen-checkout__dropdown__button__text"
  }, r.selectedOptionName || r.name || e.placeholder), r.icon && h(Mn, {
    className: "adyen-checkout__dropdown__button__icon",
    src: r.icon,
    alt: r.name
  })));
}

var Vn = ["item", "selected"],
    Ln = function (e) {
  var t = e.item,
      n = e.selected,
      r = _objectWithoutProperties(e, Vn);
  return h("li", {
    "aria-disabled": !!t.disabled,
    "aria-selected": n,
    className: H(["adyen-checkout__dropdown__element", Dn, {
      "adyen-checkout__dropdown__element--active": n,
      "adyen-checkout__dropdown__element--disabled": !!t.disabled
    }]),
    "data-disabled": !!t.disabled,
    "data-value": t.id,
    onClick: r.onSelect,
    onKeyDown: r.onKeyDown,
    role: "option",
    tabIndex: -1
  }, h("span", null, t.name), t.icon && h(Mn, {
    className: "adyen-checkout__dropdown__element__icon",
    alt: t.name,
    src: t.icon
  }));
},
    Un = ["active", "items", "showList", "textFilter"];

function qn(e) {
  var t,
      n = e.active,
      r = e.items,
      a = e.showList,
      o = e.textFilter,
      i = _objectWithoutProperties(e, Un),
      l = Pt().i18n,
      s = f$1(r).call(r, function (e) {
    var t;
    return !o || h$1(t = e.name.toLowerCase()).call(t, o);
  });
  return h("ul", {
    className: H((t = {
      test: !0,
      "adyen-checkout__dropdown__list": !0
    }, _defineProperty(t, Rn, !0), _defineProperty(t, "adyen-checkout__dropdown__list--active", a), _defineProperty(t, On, a), t)),
    id: i.selectListId,
    ref: i.selectListRef,
    role: "listbox"
  }, s.length ? K(s).call(s, function (e) {
    return h(Ln, {
      item: e,
      key: e.id,
      onKeyDown: i.onKeyDown,
      onSelect: i.onSelect,
      selected: e.id === n.id
    });
  }) : h("div", {
    className: "adyen-checkout__dropdown__element adyen-checkout__dropdown__element--no-options"
  }, l.get("select.noOptionsFound")));
}

var Kn = "ArrowDown",
    Hn = "ArrowUp",
    zn = "Enter",
    Wn = "Escape",
    Gn = " ",
    Yn = "Tab";

function $n(e) {
  var t,
      n,
      r = e.items,
      a = void 0 === r ? [] : r,
      o = e.className,
      i = void 0 === o ? "" : o,
      l = e.classNameModifiers,
      s = void 0 === l ? [] : l,
      c = e.filterable,
      u = void 0 === c || c,
      d = e.readonly,
      p = void 0 !== d && d,
      f = e.onChange,
      m = void 0 === f ? function () {} : f,
      v = e.selected,
      C = e.name,
      k = e.isInvalid,
      N = e.isValid,
      w = e.placeholder,
      S = e.uniqueId,
      x = e.isCollatingErrors,
      P = vt(null),
      F = vt(null),
      A = vt(null),
      B = vt(null),
      E = ft(null),
      O = _slicedToArray(E, 2),
      D = O[0],
      M = O[1],
      T = ft(!1),
      I = _slicedToArray(T, 2),
      j = I[0],
      V = I[1],
      L = gt(function () {
    return "select-".concat(We());
  }, []),
      U = g$1(a).call(a, function (e) {
    return e.id === v;
  }) || {},
      q = function () {
    M(null), V(!1), A.current && A.current.focus();
  },
      z = function (e) {
    e.preventDefault();
    var t = B.current.contains(e.currentTarget) ? e.currentTarget : B.current.firstElementChild;

    if (!t.getAttribute("data-disabled")) {
      q();
      var n = t.getAttribute("data-value");
      m({
        target: {
          value: n,
          name: C
        }
      });
    }
  },
      W = function (e) {
    var t;
    (e.composedPath ? !h$1(t = e.composedPath()).call(t, F.current) : !F.current.contains(e.target)) && (M(null), V(!1));
  };

  return yt(function () {
    j && u && P.current && P.current.focus();
  }, [j]), yt(function () {
    return document.addEventListener("click", W, !1), function () {
      document.removeEventListener("click", W, !1);
    };
  }, []), h("div", {
    className: H(y$1(t = ["adyen-checkout__dropdown", Fn, i]).call(t, _toConsumableArray(K(s).call(s, function (e) {
      return "adyen-checkout__dropdown--".concat(e);
    })))),
    ref: F
  }, h(jn, {
    id: null != S ? S : null,
    active: U,
    filterInputRef: P,
    filterable: u,
    isInvalid: k,
    isValid: N,
    onButtonKeyDown: function (e) {
      var t;
      if (e.key === zn && u && j && D) z(e);else if (e.key === Wn) q();else if (!h$1(t = [Hn, Kn, zn]).call(t, e.key) && (e.key !== Gn || u && j)) (e.shiftKey && e.key === Yn || e.key === Yn) && q();else {
        var n;
        e.preventDefault(), V(!0), null !== (n = B.current) && void 0 !== n && n.firstElementChild && B.current.firstElementChild.focus();
      }
    },
    onInput: function (e) {
      var t = e.target.value;
      M(t.toLowerCase());
    },
    placeholder: w,
    readonly: p,
    selectListId: L,
    showList: j,
    toggleButtonRef: A,
    toggleList: function (e) {
      e.preventDefault(), V(!j);
    },
    ariaDescribedBy: !x && S ? y$1(n = "".concat(S)).call(n, "-ariaError") : null
  }), h(qn, {
    active: U,
    items: a,
    onKeyDown: function (e) {
      var t = e.target;

      switch (e.key) {
        case Wn:
          e.preventDefault(), q();
          break;

        case Gn:
        case zn:
          z(e);
          break;

        case Kn:
          e.preventDefault(), t.nextElementSibling && t.nextElementSibling.focus();
          break;

        case Hn:
          e.preventDefault(), t.previousElementSibling ? t.previousElementSibling.focus() : u && P.current && P.current.focus();
          break;

        case Yn:
          q();
      }
    },
    onSelect: z,
    selectListId: L,
    selectListRef: B,
    showList: j,
    textFilter: D
  }));
}

$n.defaultProps = {
  className: "",
  classNameModifiers: [],
  filterable: !0,
  items: [],
  readonly: !1,
  onChange: function () {}
};

var Zn = function (e, t) {
  var n = {
    boolean: Pn,
    radio: Sn,
    select: $n,
    date: kn,
    emailAddress: wn,
    tel: Nn,
    text: bn,
    default: bn
  };
  return h(n[e] || n.default, t);
};

function Jn(e, t) {
  var o = n$1(e);

  if (r$1) {
    var i = r$1(e);
    t && (i = f$1(i).call(i, function (t) {
      return a$1(e, t).enumerable;
    })), o.push.apply(o, i);
  }

  return o;
}

function Qn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n,
        r,
        s = null != arguments[t] ? arguments[t] : {};
    t % 2 ? p$1(n = Jn(Object(s), !0)).call(n, function (t) {
      _defineProperty(e, t, s[t]);
    }) : o$1 ? i(e, o$1(s)) : p$1(r = Jn(Object(s))).call(r, function (t) {
      l$1(e, t, a$1(s, t));
    });
  }

  return e;
}

var Xn = function () {
  function e(t, n, r, a) {
    var o;
    _classCallCheck(this, e), _defineProperty(this, "shouldValidate", void 0), _defineProperty(this, "isValid", void 0), _defineProperty(this, "errorMessage", void 0), this.shouldValidate = h$1(o = t.modes).call(o, r), this.isValid = t.validate(n, a), this.errorMessage = t.errorMessage;
  }

  return _createClass(e, [{
    key: "hasError",
    value: function () {
      var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return e ? !this.isValid && this.shouldValidate : null != this.isValid && !this.isValid && this.shouldValidate;
    }
  }]), e;
}();

function er(e, t) {
  var o = n$1(e);

  if (r$1) {
    var i = r$1(e);
    t && (i = f$1(i).call(i, function (t) {
      return a$1(e, t).enumerable;
    })), o.push.apply(o, i);
  }

  return o;
}

function tr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n,
        r,
        s = null != arguments[t] ? arguments[t] : {};
    t % 2 ? p$1(n = er(Object(s), !0)).call(n, function (t) {
      _defineProperty(e, t, s[t]);
    }) : o$1 ? i(e, o$1(s)) : p$1(r = er(Object(s))).call(r, function (t) {
      l$1(e, t, a$1(s, t));
    });
  }

  return e;
}

var nr = function () {
  function e(t) {
    _classCallCheck(this, e), _defineProperty(this, "validationResults", void 0), this.validationResults = t;
  }

  return _createClass(e, [{
    key: "isValid",
    get: function () {
      var e;
      return k$1(e = this.validationResults).call(e, function (e, t) {
        return e && t.isValid;
      }, !0);
    }
  }, {
    key: "hasError",
    value: function () {
      var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return Boolean(this.getError(e));
    }
  }, {
    key: "getError",
    value: function () {
      var e,
          t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return g$1(e = this.validationResults).call(e, function (e) {
        return e.hasError(t);
      });
    }
  }, {
    key: "getAllErrors",
    value: function () {
      var e;
      return f$1(e = this.validationResults).call(e, function (e) {
        return e.hasError();
      });
    }
  }]), e;
}(),
    rr = function () {
  function e(t) {
    _classCallCheck(this, e), _defineProperty(this, "rules", {
      default: {
        validate: function () {
          return !0;
        },
        modes: ["blur", "input"]
      }
    }), this.setRules(t);
  }

  return _createClass(e, [{
    key: "setRules",
    value: function (e) {
      this.rules = tr(tr({}, this.rules), e);
    }
  }, {
    key: "getRulesFor",
    value: function (e) {
      var t,
          n = null !== (t = this.rules[e]) && void 0 !== t ? t : this.rules.default;
      return X(n) || (n = [n]), n;
    }
  }, {
    key: "validate",
    value: function (e, t) {
      var n = e.key,
          r = e.value,
          a = e.mode,
          o = void 0 === a ? "blur" : a,
          i = this.getRulesFor(n),
          l = K(i).call(i, function (e) {
        return new Xn(e, r, o, t);
      });
      return new nr(l);
    }
  }]), e;
}();

function ar(e, t) {
  var o = n$1(e);

  if (r$1) {
    var i = r$1(e);
    t && (i = f$1(i).call(i, function (t) {
      return a$1(e, t).enumerable;
    })), o.push.apply(o, i);
  }

  return o;
}

function or(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n,
        r,
        s = null != arguments[t] ? arguments[t] : {};
    t % 2 ? p$1(n = ar(Object(s), !0)).call(n, function (t) {
      _defineProperty(e, t, s[t]);
    }) : o$1 ? i(e, o$1(s)) : p$1(r = ar(Object(s))).call(r, function (t) {
      l$1(e, t, a$1(s, t));
    });
  }

  return e;
}

var ir = function (e, t) {
  var r, a;
  return k$1(r = f$1(a = n$1(e)).call(a, function (e) {
    return !h$1(t).call(t, e);
  })).call(r, function (t, n) {
    return t[n] = e[n], t;
  }, {});
},
    lr = function (e, t, n, r, a) {
  return k$1(t).call(t, function (e, t) {
    var o, i, l;
    return or(or({}, e), {}, _defineProperty({}, t, null !== (o = null !== (i = null !== (l = e[t]) && void 0 !== l ? l : null == a ? void 0 : a[t]) && void 0 !== i ? i : null == r ? void 0 : r[t]) && void 0 !== o ? o : n));
  }, e);
};

function sr(e) {
  var t = e.schema,
      n = e.defaultData,
      r = e.processField,
      a = e.fieldProblems,
      o = function (e) {
    var t, o;
    if (void 0 === n[e]) return {
      valid: !1,
      errors: null,
      data: null,
      fieldProblems: null !== (t = null == a ? void 0 : a[e]) && void 0 !== t ? t : null
    };
    var i = r({
      key: e,
      value: n[e],
      mode: "blur"
    }, {
      state: {
        data: n
      }
    }),
        l = _slicedToArray(i, 2),
        s = l[0],
        c = l[1];
    return {
      valid: c.isValid && !(null != a && a[e]) || !1,
      errors: c.hasError() ? c.getError() : null,
      data: s,
      fieldProblems: null !== (o = null == a ? void 0 : a[e]) && void 0 !== o ? o : null
    };
  },
      i = k$1(t).call(t, function (e, t) {
    var n = o(t),
        r = n.valid,
        a = n.errors,
        i = n.data,
        l = n.fieldProblems;
    return {
      valid: or(or({}, e.valid), {}, _defineProperty({}, t, r)),
      errors: or(or({}, e.errors), {}, _defineProperty({}, t, a)),
      data: or(or({}, e.data), {}, _defineProperty({}, t, i)),
      fieldProblems: or(or({}, e.fieldProblems), {}, _defineProperty({}, t, l))
    };
  }, {
    data: {},
    valid: {},
    errors: {},
    fieldProblems: {}
  });

  return {
    schema: t,
    data: i.data,
    valid: i.valid,
    errors: i.errors,
    fieldProblems: i.fieldProblems
  };
}

function cr(e) {
  var t = e.rules,
      n = void 0 === t ? {} : t,
      r = e.formatters,
      a = void 0 === r ? {} : r,
      o = e.defaultData,
      i = void 0 === o ? {} : o,
      l = e.fieldProblems,
      s = void 0 === l ? {} : l,
      c = e.schema,
      u = void 0 === c ? [] : c,
      p = gt(function () {
    return new rr(n);
  }, [n]),
      y = function (e, t) {
    var n,
        r = e.key,
        o = e.value,
        i = e.mode,
        l = null != a && null !== (n = a[r]) && void 0 !== n && n.formatter ? a[r].formatter : null == a ? void 0 : a[r],
        s = l && "function" == typeof l ? l(null != o ? o : "", t) : o;
    return [s, p.validate({
      key: r,
      value: s,
      mode: i
    }, t)];
  },
      m = ht(function (e) {
    return function (t, n) {
      var r = n.type,
          a = n.key,
          o = n.value,
          i = n.mode,
          l = n.schema,
          s = n.defaultData,
          c = n.formValue,
          u = n.selectedSchema,
          p = n.fieldProblems,
          y = u || t.schema;

      switch (r) {
        case "setData":
          return or(or({}, t), {}, {
            data: or(or({}, t.data), {}, _defineProperty({}, a, o))
          });

        case "setValid":
          return or(or({}, t), {}, {
            valid: or(or({}, t.valid), {}, _defineProperty({}, a, o))
          });

        case "setErrors":
          return or(or({}, t), {}, {
            errors: or(or({}, t.errors), {}, _defineProperty({}, a, o))
          });

        case "setFieldProblems":
          var m, v;
          return null !== (m = null == t || null === (v = t.schema) || void 0 === v ? void 0 : k$1(v).call(v, function (e, n) {
            var r, a;
            return or(or({}, e), {}, {
              fieldProblems: or(or({}, t.fieldProblems), {}, _defineProperty({}, n, null !== (r = null == p ? void 0 : p[n]) && void 0 !== r ? r : null)),
              valid: or(or({}, t.valid), {}, _defineProperty({}, n, (null === (a = t.valid) || void 0 === a ? void 0 : a[n]) && !p[n]))
            });
          }, t)) && void 0 !== m ? m : t;

        case "updateField":
          var g = e({
            key: a,
            value: o,
            mode: i
          }, {
            state: t
          }),
              _ = _slicedToArray(g, 2),
              C = _[0],
              N = _[1],
              w = t.data[a],
              S = or({}, t.fieldProblems);

          return w !== C && (S[a] = null), or(or({}, t), {}, {
            data: or(or({}, t.data), {}, _defineProperty({}, a, C)),
            errors: or(or({}, t.errors), {}, _defineProperty({}, a, N.hasError() ? N.getError() : null)),
            valid: or(or({}, t.valid), {}, _defineProperty({}, a, N.isValid && !S[a] || !1)),
            fieldProblems: S
          });

        case "mergeForm":
          var x,
              P = or(or({}, t), {}, {
            data: or(or({}, t.data), c.data),
            errors: or(or({}, t.errors), c.errors),
            valid: or(or({}, t.valid), c.valid),
            fieldProblems: or(or({}, t.fieldProblems), c.fieldProblems)
          });
          return P.valid && (P.isValid = $$i(x = ee(P.valid)).call(x, function (e) {
            return e;
          })), P;

        case "setSchema":
          var F,
              A,
              B,
              E,
              R = sr({
            schema: l,
            defaultData: s,
            processField: e,
            fieldProblems: p
          }),
              O = f$1(F = t.schema).call(F, function (e) {
            return !h$1(l).call(l, e);
          }),
              D = f$1(l).call(l, function (e) {
            var n;
            return !h$1(n = t.schema).call(n, e);
          }),
              M = {
            data: ir(t.data, D),
            errors: ir(t.errors, D),
            valid: ir(t.valid, D)
          },
              T = lr(ir(t.data, O), D, null, R.data, null === (A = t.local) || void 0 === A ? void 0 : A.data),
              I = lr(ir(t.valid, O), D, !1, R.valid, null === (B = t.local) || void 0 === B ? void 0 : B.valid),
              j = lr(ir(t.errors, O), D, null, R.errors, null === (E = t.local) || void 0 === E ? void 0 : E.errors);
          return or(or({}, t), {}, {
            schema: l,
            data: T,
            valid: I,
            errors: j,
            local: M
          });

        case "validateForm":
          var V = k$1(y).call(y, function (n, r) {
            var a = e({
              key: r,
              value: t.data[r],
              mode: "blur"
            }, {
              state: t
            }),
                o = _slicedToArray(a, 2)[1];
            return {
              valid: or(or({}, n.valid), {}, _defineProperty({}, r, o.isValid && !t.fieldProblems[r] || !1)),
              errors: or(or({}, n.errors), {}, _defineProperty({}, r, o.hasError(!0) ? o.getError(!0) : null))
            };
          }, {
            valid: t.valid,
            errors: t.errors
          });
          return or(or({}, t), {}, {
            valid: V.valid,
            errors: V.errors
          });

        default:
          throw new Error("Undefined useForm action");
      }
    };
  }(y), {
    defaultData: i,
    schema: null != u ? u : [],
    processField: y,
    fieldProblems: s
  }, sr),
      v = _slicedToArray(m, 2),
      g = v[0],
      _ = v[1],
      C = gt(function () {
    var e;
    return k$1(e = g.schema).call(e, function (e, t) {
      return e && g.valid[t];
    }, !0);
  }, [g.schema, g.valid]),
      N = bt(function () {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;

    _({
      type: "validateForm",
      selectedSchema: e
    });
  }, []),
      w = bt(function (e, t) {
    return _({
      type: "setErrors",
      key: e,
      value: t
    });
  }, []),
      S = bt(function (e, t) {
    return _({
      type: "setValid",
      key: e,
      value: t
    });
  }, []),
      x = bt(function (e, t) {
    return _({
      type: "setData",
      key: e,
      value: t
    });
  }, []),
      P = bt(function (e) {
    return _({
      type: "setSchema",
      schema: e,
      defaultData: i
    });
  }, [g.schema]),
      F = bt(function (e) {
    return _({
      type: "mergeForm",
      formValue: e
    });
  }, []),
      A = bt(function (e) {
    return _({
      type: "setFieldProblems",
      fieldProblems: e
    });
  }, [g.schema]);

  return yt(function () {
    A(null != s ? s : {});
  }, [W(s)]), {
    handleChangeFor: function (e, t) {
      return function (n) {
        var r = function (e, t) {
          return t.target ? "checkbox" === t.target.type ? !g.data[e] : t.target.value : t;
        }(e, n);

        _({
          type: "updateField",
          key: e,
          value: r,
          mode: t
        });
      };
    },
    triggerValidation: N,
    setSchema: P,
    setData: x,
    setValid: S,
    setErrors: w,
    isValid: C,
    mergeForm: F,
    setFieldProblems: A,
    schema: g.schema,
    valid: g.valid,
    errors: g.errors,
    data: g.data,
    fieldProblems: g.fieldProblems
  };
}

function ur(e) {
  var t = e.label,
      n = void 0 === t ? "" : t,
      r = e.namePrefix,
      a = e.requiredFields,
      o = e.visibility,
      i = Pt().i18n,
      l = cr({
    schema: a,
    rules: e.validationRules,
    defaultData: e.data
  }),
      s = l.handleChangeFor,
      c = l.triggerValidation,
      u = l.data,
      d = l.valid,
      p = l.errors,
      f = l.isValid,
      m = function (e) {
    var t;
    return y$1(t = "".concat(r ? "".concat(r, ".") : "")).call(t, e);
  },
      v = function (e) {
    return function (t) {
      var n = t.target.name.split("".concat(r, ".")).pop();
      s(n, e)(t);
    };
  };

  return yt(function () {
    var t = function (e) {
      var t = e.name,
          n = e.registrationNumber;
      return Qn({}, (t || n) && {
        company: Qn(Qn({}, t && {
          name: t
        }), n && {
          registrationNumber: n
        })
      });
    }(u);

    e.onChange({
      data: t,
      valid: d,
      errors: p,
      isValid: f
    });
  }, [u, d, p, f]), this.showValidation = c, "hidden" === o ? null : "readOnly" === o ? h(mn, _extends({}, e, {
    data: u
  })) : h(ln, {
    classNameModifiers: [n],
    label: n
  }, h$1(a).call(a, "name") && h(yn, {
    label: i.get("companyDetails.name"),
    classNameModifiers: ["name"],
    errorMessage: !!p.name
  }, Zn("text", {
    name: m("name"),
    value: u.name,
    classNameModifiers: ["name"],
    onInput: v("input"),
    onBlur: v("blur"),
    spellCheck: !1
  })), h$1(a).call(a, "registrationNumber") && h(yn, {
    label: i.get("companyDetails.registrationNumber"),
    classNameModifiers: ["registrationNumber"],
    errorMessage: !!p.registrationNumber
  }, Zn("text", {
    name: m("registrationNumber"),
    value: u.registrationNumber,
    classNameModifiers: ["registrationNumber"],
    onInput: v("input"),
    onBlur: v("blur"),
    spellCheck: !1
  })));
}

ur.defaultProps = {
  data: {},
  onChange: function () {},
  visibility: "editable",
  requiredFields: ["name", "registrationNumber"],
  validationRules: {
    default: {
      validate: function (e) {
        return e && e.length > 0;
      },
      modes: ["blur"]
    }
  }
};

var dr = function (e) {
  var t = e.data,
      n = t.firstName,
      r = t.lastName,
      a = t.shopperEmail,
      o = t.telephoneNumber;
  return h(ln, {
    classNameModifiers: ["personalDetails"],
    label: "personalDetails",
    readonly: !0
  }, n && "".concat(n, " "), r && "".concat(r, " "), a && h(p, null, h("br", null), a), o && h(p, null, h("br", null), o));
},
    pr = /^\s*[\w\-+_]+(\.[\w\-+_]+)*@[\w\-+_]+\.[\w\-+_]+(\.[\w-+_]+)*\s*$/,
    fr = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s./0-9]*$/,
    hr = {
  default: {
    validate: function (e) {
      return e && e.length > 0;
    },
    modes: ["blur"]
  },
  dateOfBirth: {
    validate: function (e) {
      return function (e) {
        if (!e) return !1;
        var t = Cn(e),
            n = Z() - Date.parse(t);
        return new Date(n).getFullYear() - 1970 >= 18;
      }(e);
    },
    errorMessage: "dateOfBirth.invalid",
    modes: ["blur"]
  },
  telephoneNumber: {
    validate: function (e) {
      return fr.test(e);
    },
    modes: ["blur"]
  },
  shopperEmail: {
    validate: function (e) {
      return pr.test(e);
    },
    modes: ["blur"]
  }
};

function yr(e, t) {
  var o = n$1(e);

  if (r$1) {
    var i = r$1(e);
    t && (i = f$1(i).call(i, function (t) {
      return a$1(e, t).enumerable;
    })), o.push.apply(o, i);
  }

  return o;
}

function mr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n,
        r,
        s = null != arguments[t] ? arguments[t] : {};
    t % 2 ? p$1(n = yr(Object(s), !0)).call(n, function (t) {
      _defineProperty(e, t, s[t]);
    }) : o$1 ? i(e, o$1(s)) : p$1(r = yr(Object(s))).call(r, function (t) {
      l$1(e, t, a$1(s, t));
    });
  }

  return e;
}

var vr, gr, br;

function _r(e) {
  var t = e.label,
      n = void 0 === t ? "" : t,
      r = e.namePrefix,
      a = e.placeholders,
      o = e.requiredFields,
      i = e.visibility,
      l = Pt().i18n,
      s = gt(_n, []),
      c = cr({
    schema: o,
    rules: e.validationRules,
    defaultData: e.data
  }),
      u = c.handleChangeFor,
      d = c.triggerValidation,
      p = c.data,
      f = c.valid,
      m = c.errors,
      v = c.isValid,
      g = function (e) {
    return function (t) {
      var n = t.target.name.split("".concat(r, ".")).pop();
      u(n, e)(t);
    };
  },
      b = function (e) {
    var t;
    return y$1(t = "".concat(r ? "".concat(r, ".") : "")).call(t, e);
  },
      _ = function (e) {
    return e && e.errorMessage ? l.get(e.errorMessage) : !!e;
  };

  return yt(function () {
    var t = function (e) {
      var t = e.firstName,
          n = e.lastName,
          r = e.gender,
          a = e.dateOfBirth,
          o = e.shopperEmail,
          i = e.telephoneNumber;
      return mr(mr(mr(mr({}, (t || n) && {
        shopperName: mr(mr(mr({}, t && {
          firstName: t
        }), n && {
          lastName: n
        }), r && {
          gender: r
        })
      }), a && {
        dateOfBirth: Cn(a)
      }), o && {
        shopperEmail: o
      }), i && {
        telephoneNumber: i
      });
    }(p);

    e.onChange({
      data: t,
      valid: f,
      errors: m,
      isValid: v
    });
  }, [p, f, m, v]), this.showValidation = d, "hidden" === i ? null : "readOnly" === i ? h(dr, _extends({}, e, {
    data: p
  })) : h(ln, {
    classNameModifiers: ["personalDetails"],
    label: n
  }, h$1(o).call(o, "firstName") && h(yn, {
    label: l.get("firstName"),
    classNameModifiers: ["col-50", "firstName"],
    errorMessage: !!m.firstName,
    name: "firstName"
  }, Zn("text", {
    name: b("firstName"),
    value: p.firstName,
    classNameModifiers: ["firstName"],
    onInput: g("input"),
    onBlur: g("blur"),
    placeholder: a.firstName,
    spellCheck: !1
  })), h$1(o).call(o, "lastName") && h(yn, {
    label: l.get("lastName"),
    classNameModifiers: ["col-50", "lastName"],
    errorMessage: !!m.lastName,
    name: "lastName"
  }, Zn("text", {
    name: b("lastName"),
    value: p.lastName,
    classNameModifiers: ["lastName"],
    onInput: g("input"),
    onBlur: g("blur"),
    placeholder: a.lastName,
    spellCheck: !1
  })), h$1(o).call(o, "gender") && h(yn, {
    errorMessage: !!m.gender,
    classNameModifiers: ["gender"],
    name: "gender",
    useLabelElement: !1
  }, Zn("radio", {
    i18n: l,
    name: b("gender"),
    value: p.gender,
    items: [{
      id: "MALE",
      name: "male"
    }, {
      id: "FEMALE",
      name: "female"
    }],
    classNameModifiers: ["gender"],
    onInput: g("input"),
    onChange: g("blur")
  })), h$1(o).call(o, "dateOfBirth") && h(yn, {
    label: l.get("dateOfBirth"),
    classNameModifiers: ["col-50", "lastName"],
    errorMessage: _(m.dateOfBirth),
    helper: s ? null : l.get("dateOfBirth.format"),
    name: "dateOfBirth"
  }, Zn("date", {
    name: b("dateOfBirth"),
    value: p.dateOfBirth,
    classNameModifiers: ["dateOfBirth"],
    onInput: g("input"),
    onBlur: g("blur"),
    placeholder: a.dateOfBirth
  })), h$1(o).call(o, "shopperEmail") && h(yn, {
    label: l.get("shopperEmail"),
    classNameModifiers: ["shopperEmail"],
    errorMessage: _(m.shopperEmail),
    dir: "ltr",
    name: "emailAddress"
  }, Zn("emailAddress", {
    name: b("shopperEmail"),
    value: p.shopperEmail,
    classNameModifiers: ["shopperEmail"],
    onInput: g("input"),
    onBlur: g("blur"),
    placeholder: a.shopperEmail
  })), h$1(o).call(o, "telephoneNumber") && h(yn, {
    label: l.get("telephoneNumber"),
    classNameModifiers: ["telephoneNumber"],
    errorMessage: _(m.telephoneNumber),
    dir: "ltr",
    name: "telephoneNumber"
  }, Zn("tel", {
    name: b("telephoneNumber"),
    value: p.telephoneNumber,
    classNameModifiers: ["telephoneNumber"],
    onInput: g("input"),
    onBlur: g("blur"),
    placeholder: a.telephoneNumber
  })));
}

_r.defaultProps = {
  data: {},
  onChange: function () {},
  placeholders: {},
  requiredFields: ["firstName", "lastName", "gender", "dateOfBirth", "shopperEmail", "telephoneNumber"],
  validationRules: hr,
  visibility: "editable"
};

var Cr = ["street", "houseNumberOrName", "postalCode", "city", "stateOrProvince", "country"],
    kr = Cr[0],
    Nr = Cr[1],
    wr = Cr[2],
    Sr = Cr[3],
    xr = Cr[4],
    Pr = Cr[5],
    Fr = {
  AU: {
    hasDataset: !0,
    labels: (vr = {}, _defineProperty(vr, Nr, "apartmentSuite"), _defineProperty(vr, xr, "state"), _defineProperty(vr, kr, "address"), vr),
    optionalFields: [Nr],
    placeholders: _defineProperty({}, xr, "select.state"),
    schema: [Pr, kr, Nr, Sr, [[xr, 50], [wr, 50]]]
  },
  BR: {
    hasDataset: !0,
    labels: _defineProperty({}, xr, "state"),
    placeholders: _defineProperty({}, xr, "select.state")
  },
  CA: {
    hasDataset: !0,
    labels: (gr = {}, _defineProperty(gr, Nr, "apartmentSuite"), _defineProperty(gr, xr, "provinceOrTerritory"), _defineProperty(gr, kr, "address"), gr),
    optionalFields: [Nr],
    schema: [Pr, kr, Nr, [[Sr, 70], [wr, 30]], xr]
  },
  GB: {
    labels: _defineProperty({}, Sr, "cityTown"),
    schema: [Pr, [[Nr, 30], [kr, 70]], [[Sr, 70], [wr, 30]], xr]
  },
  US: {
    hasDataset: !0,
    labels: (br = {}, _defineProperty(br, wr, "zipCode"), _defineProperty(br, Nr, "apartmentSuite"), _defineProperty(br, xr, "state"), _defineProperty(br, kr, "address"), br),
    optionalFields: [Nr],
    placeholders: _defineProperty({}, xr, "select.state"),
    schema: [Pr, kr, Nr, Sr, [[xr, 50], [wr, 50]]]
  },
  default: {
    optionalFields: [],
    placeholders: _defineProperty({}, xr, "select.provinceOrTerritory"),
    schema: [Pr, [[kr, 70], [Nr, 30]], [[wr, 30], [Sr, 70]], xr]
  }
},
    Ar = {
  default: {
    labels: _defineProperty({}, wr, "zipCode"),
    schema: [wr]
  }
},
    Br = n$1(Fr),
    Er = function (e) {
  var t = e.data,
      n = e.label,
      r = t.street,
      a = t.houseNumberOrName,
      o = t.city,
      i = t.postalCode,
      l = t.stateOrProvince,
      s = t.country;
  return h(ln, {
    classNameModifiers: [n],
    label: n,
    readonly: !0
  }, !!r && r, a && ", ".concat(a, ","), h("br", null), i && "".concat(i), o && ", ".concat(o), l && "N/A" !== l && ", ".concat(l), s && ", ".concat(s, " "));
},
    Rr = function (e, t, n, r) {
  var a, o, i, l;
  if (r && null !== (a = e[n]) && void 0 !== a && null !== (o = a[t]) && void 0 !== o && o.formatter) return null;
  var s = null === (i = e[n]) || void 0 === i || null === (l = i[t]) || void 0 === l ? void 0 : l.maxlength;
  return s || 30;
},
    Or = function (e) {
  return !(null != e && !/^[\s]*$/.test(e));
},
    Dr = "?\\-\\+_=!@#$%^&*(){}~<>\\[\\]\\/\\\\",
    Mr = function (e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "g";
  return new RegExp("[".concat(e, "]"), t);
};

(function (e, t) {
  var n;
  new RegExp(y$1(n = "^[".concat(t ? "^" : "")).call(n, e, "]+$"));
})(Dr, !0);

var Tr = function (e) {
  var t;
  return {
    formatter: function (t) {
      return t.replace(Mr("^\\d", "g"), "").substr(0, e);
    },
    format: te(t = new Array(e)).call(t, "9").join(""),
    maxlength: e
  };
},
    Ir = Mr(Dr),
    jr = function (e) {
  return function (e) {
    return ne(e).call(e).replace(/\s+/g, " ");
  }(e).replace(Ir, "");
},
    Vr = {
  postalCode: {
    formatter: function (e, t) {
      var n,
          r = t.state.data.country,
          a = null === (n = Lr[r]) || void 0 === n ? void 0 : n.postalCode.formatter;
      return a ? a(e) : e;
    }
  },
  street: {
    formatter: jr
  },
  houseNumberOrName: {
    formatter: jr
  },
  city: {
    formatter: jr
  }
},
    Lr = {
  AT: {
    postalCode: Tr(4)
  },
  AU: {
    postalCode: Tr(4)
  },
  BE: {
    postalCode: Tr(4)
  },
  BG: {
    postalCode: Tr(4)
  },
  BR: {
    postalCode: Tr(8)
  },
  CA: {
    postalCode: {
      format: "A9A 9A9 or A9A9A9",
      maxlength: 7
    }
  },
  CH: {
    postalCode: Tr(4)
  },
  CY: {
    postalCode: Tr(4)
  },
  CZ: {
    postalCode: {
      format: "999 99",
      maxlength: 6
    }
  },
  DE: {
    postalCode: Tr(5)
  },
  DK: {
    postalCode: {
      format: "9999",
      maxlength: 7
    }
  },
  EE: {
    postalCode: Tr(5)
  },
  ES: {
    postalCode: Tr(5)
  },
  FI: {
    postalCode: Tr(5)
  },
  FR: {
    postalCode: Tr(5)
  },
  GB: {
    postalCode: {
      formatter: function (e) {
        return e.replace(Mr(Dr), "").substr(0, 8);
      },
      format: "AA99 9AA or A99 9AA or A9 9AA",
      maxlength: 8
    }
  },
  GR: {
    postalCode: {
      format: "999 99",
      maxlength: 6
    }
  },
  HR: {
    postalCode: {
      format: "[1-5]9999",
      maxlength: 5
    }
  },
  HU: {
    postalCode: Tr(4)
  },
  IE: {
    postalCode: {
      format: "A99 A999",
      maxlength: 8
    }
  },
  IS: {
    postalCode: Tr(3)
  },
  IT: {
    postalCode: Tr(5)
  },
  LI: {
    postalCode: Tr(4)
  },
  LT: {
    postalCode: {
      format: "9999 or 99999 or LT-99999",
      maxlength: 8
    }
  },
  LU: {
    postalCode: Tr(4)
  },
  LV: {
    postalCode: {
      format: "9999 or LV-9999",
      maxlength: 7
    }
  },
  MC: {
    postalCode: {
      format: "980NN",
      maxlength: 5
    }
  },
  MT: {
    postalCode: {
      format: "AA99 or AAA99 or AA9999 or AAA9999",
      maxlength: 8
    }
  },
  MY: {
    postalCode: Tr(5)
  },
  NL: {
    postalCode: {
      format: "9999AA",
      maxlength: 7
    }
  },
  NZ: {
    postalCode: Tr(4)
  },
  NO: {
    postalCode: Tr(4)
  },
  PL: {
    postalCode: {
      formatter: function (e) {
        var t = e.replace(Mr("^\\d-", "g"), ""),
            n = C$1(t).call(t, "-") > -1 ? 6 : 5;
        return t.substr(0, n);
      },
      format: "99999 or 99-999",
      maxlength: 6
    }
  },
  PT: {
    postalCode: {
      formatter: function (e) {
        return e.replace(Mr("^\\d-", "g"), "").substr(0, 8);
      },
      format: "9999-999",
      maxlength: 8
    }
  },
  RO: {
    postalCode: Tr(6)
  },
  SI: {
    postalCode: {
      format: "9999 or SI-9999",
      maxlength: 7
    }
  },
  SE: {
    postalCode: Tr(5)
  },
  SG: {
    postalCode: Tr(6)
  },
  SK: {
    postalCode: {
      format: "99999 or SK-99999",
      maxlength: 8
    }
  },
  JP: {
    postalCode: {
      format: "999-9999",
      maxlength: 8
    }
  },
  US: {
    postalCode: {
      formatter: function (e) {
        var t = e.replace(Mr("^\\d-", "g"), ""),
            n = C$1(t).call(t, "-") > -1 ? 10 : 5;
        return t.substr(0, n);
      },
      format: "99999 or 99999-9999"
    }
  }
},
    Ur = function (e) {
  return {
    pattern: new RegExp("\\d{".concat(e, "}"))
  };
},
    qr = {
  AT: Ur(4),
  AU: Ur(4),
  BE: {
    pattern: /(?:(?:[1-9])(?:\d{3}))/
  },
  BG: Ur(4),
  BR: Ur(8),
  CA: {
    pattern: /(?:[ABCEGHJ-NPRSTVXY]\d[A-Z][ -]?\d[A-Z]\d)/
  },
  CH: {
    pattern: /[1-9]\d{3}/
  },
  CY: Ur(4),
  CZ: {
    pattern: /\d{3}\s?\d{2}/
  },
  DE: Ur(5),
  DK: Ur(4),
  EE: Ur(5),
  ES: {
    pattern: /(?:0[1-9]|[1-4]\d|5[0-2])\d{3}/
  },
  FI: Ur(5),
  FR: Ur(5),
  GB: {
    pattern: /^([A-Za-z][A-Ha-hK-Yk-y]?[0-9][A-Za-z0-9]? ?[0-9][A-Za-z]{2}|[Gg][Ii][Rr] ?0[Aa]{2})$/
  },
  GE: Ur(4),
  GR: {
    pattern: /^\d{3}\s{0,1}\d{2}$/
  },
  HR: {
    pattern: /^([1-5])[0-9]{4}$/
  },
  HU: Ur(4),
  IE: {
    pattern: /(?:^[AC-FHKNPRTV-Y][0-9]{2}|D6W)[ -]?[0-9AC-FHKNPRTV-Y]{4}/
  },
  IS: Ur(3),
  IT: Ur(5),
  LI: Ur(4),
  LT: {
    pattern: /^(LT-\d{5})$/
  },
  LU: Ur(4),
  LV: {
    pattern: /^(LV-)[0-9]{4}$/
  },
  MC: {
    pattern: /^980\d{2}$/
  },
  MT: {
    pattern: /^[A-Za-z]{3}\d{4}$/
  },
  MY: Ur(5),
  NL: {
    pattern: /(?:NL-)?(?:[1-9]\d{3} ?(?:[A-EGHJ-NPRTVWXZ][A-EGHJ-NPRSTVWXZ]|S[BCEGHJ-NPRTVWXZ]))/
  },
  NO: Ur(4),
  PL: {
    pattern: /^\d{2}[-]{0,1}\d{3}$/
  },
  PT: {
    pattern: /^([1-9]\d{3})([- ]?(\d{3})? *)$/
  },
  RO: Ur(6),
  SI: Ur(4),
  SE: Ur(5),
  SG: Ur(6),
  SK: Ur(5),
  US: Ur(5)
},
    Kr = function (e) {
  var t = {
    postalCode: {
      modes: ["blur"],
      validate: function (e, n) {
        var r = n.state.data.country;

        if (r) {
          var a, o;
          if (t.postalCode.errorMessage = {
            translationKey: "invalidFormatExpects",
            translationObject: {
              values: {
                format: (null === (a = Lr[r]) || void 0 === a ? void 0 : a.postalCode.format) || null
              }
            }
          }, Or(e)) return null;
          var i = null === (o = qr[r]) || void 0 === o ? void 0 : o.pattern;
          return i ? i.test(e) : !!e;
        }

        return !Or(e) || null;
      },
      errorMessage: un["incomplete field"]
    },
    houseNumberOrName: {
      validate: function (t, n) {
        var r,
            a,
            o = null === (r = n.state) || void 0 === r || null === (a = r.data) || void 0 === a ? void 0 : a.country;
        return o && e.countryHasOptionalField(o, "houseNumberOrName") || !Or(t) || null;
      },
      modes: ["blur"],
      errorMessage: un["incomplete field"]
    },
    default: {
      validate: function (e) {
        return !Or(e) || null;
      },
      modes: ["blur"],
      errorMessage: un["incomplete field"]
    }
  };
  return t;
},
    Hr = void 0 !== re && re || "undefined" != typeof self && self || void 0 !== Hr && Hr,
    zr = ("URLSearchParams" in Hr),
    Wr = "Symbol" in Hr && "iterator" in ae,
    Gr = "FileReader" in Hr && "Blob" in Hr && function () {
  try {
    return new Blob(), !0;
  } catch (e) {
    return !1;
  }
}(),
    Yr = ("FormData" in Hr),
    $r = ("ArrayBuffer" in Hr);

if ($r) var Zr = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
    Jr = ArrayBuffer.isView || function (e) {
  return e && C$1(Zr).call(Zr, Object.prototype.toString.call(e)) > -1;
};

function Qr(e) {
  if ("string" != typeof e && (e = String(e)), /[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(e) || "" === e) throw new TypeError('Invalid character in header field name: "' + e + '"');
  return e.toLowerCase();
}

function Xr(e) {
  return "string" != typeof e && (e = String(e)), e;
}

function ea(e) {
  var t = {
    next: function () {
      var t = e.shift();
      return {
        done: void 0 === t,
        value: t
      };
    }
  };
  return Wr && (t[oe] = function () {
    return t;
  }), t;
}

function ta(e) {
  if (this.map = {}, e instanceof ta) p$1(e).call(e, function (e, t) {
    this.append(t, e);
  }, this);else if (X(e)) p$1(e).call(e, function (e) {
    this.append(e[0], e[1]);
  }, this);else if (e) {
    var t;
    p$1(t = ie(e)).call(t, function (t) {
      this.append(t, e[t]);
    }, this);
  }
}

function na(e) {
  if (e.bodyUsed) return v$1.reject(new TypeError("Already read"));
  e.bodyUsed = !0;
}

function ra(e) {
  return new v$1(function (t, n) {
    e.onload = function () {
      t(e.result);
    }, e.onerror = function () {
      n(e.error);
    };
  });
}

function aa(e) {
  var t = new FileReader(),
      n = ra(t);
  return t.readAsArrayBuffer(e), n;
}

function oa(e) {
  if (G(e)) return G(e).call(e, 0);
  var t = new Uint8Array(e.byteLength);
  return t.set(new Uint8Array(e)), t.buffer;
}

function ia() {
  return this.bodyUsed = !1, this._initBody = function (e) {
    var t;
    this.bodyUsed = this.bodyUsed, this._bodyInit = e, e ? "string" == typeof e ? this._bodyText = e : Gr && Blob.prototype.isPrototypeOf(e) ? this._bodyBlob = e : Yr && FormData.prototype.isPrototypeOf(e) ? this._bodyFormData = e : zr && se.prototype.isPrototypeOf(e) ? this._bodyText = e.toString() : $r && Gr && (t = e) && DataView.prototype.isPrototypeOf(t) ? (this._bodyArrayBuffer = oa(e.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : $r && (ArrayBuffer.prototype.isPrototypeOf(e) || Jr(e)) ? this._bodyArrayBuffer = oa(e) : this._bodyText = e = Object.prototype.toString.call(e) : this._bodyText = "", this.headers.get("content-type") || ("string" == typeof e ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : zr && se.prototype.isPrototypeOf(e) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"));
  }, Gr && (this.blob = function () {
    var e = na(this);
    if (e) return e;
    if (this._bodyBlob) return v$1.resolve(this._bodyBlob);
    if (this._bodyArrayBuffer) return v$1.resolve(new Blob([this._bodyArrayBuffer]));
    if (this._bodyFormData) throw new Error("could not read FormData body as blob");
    return v$1.resolve(new Blob([this._bodyText]));
  }, this.arrayBuffer = function () {
    if (this._bodyArrayBuffer) {
      var e,
          t = na(this);
      return t || (ArrayBuffer.isView(this._bodyArrayBuffer) ? v$1.resolve(G(e = this._bodyArrayBuffer.buffer).call(e, this._bodyArrayBuffer.byteOffset, this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength)) : v$1.resolve(this._bodyArrayBuffer));
    }

    return this.blob().then(aa);
  }), this.text = function () {
    var e,
        t,
        n,
        r = na(this);
    if (r) return r;
    if (this._bodyBlob) return e = this._bodyBlob, t = new FileReader(), n = ra(t), t.readAsText(e), n;
    if (this._bodyArrayBuffer) return v$1.resolve(function (e) {
      for (var t = new Uint8Array(e), n = new Array(t.length), r = 0; r < t.length; r++) n[r] = String.fromCharCode(t[r]);

      return n.join("");
    }(this._bodyArrayBuffer));
    if (this._bodyFormData) throw new Error("could not read FormData body as text");
    return v$1.resolve(this._bodyText);
  }, Yr && (this.formData = function () {
    return this.text().then(ca);
  }), this.json = function () {
    return this.text().then(JSON.parse);
  }, this;
}

ta.prototype.append = function (e, t) {
  e = Qr(e), t = Xr(t);
  var n = K(this)[e];
  K(this)[e] = n ? n + ", " + t : t;
}, ta.prototype.delete = function (e) {
  delete K(this)[Qr(e)];
}, ta.prototype.get = function (e) {
  return e = Qr(e), this.has(e) ? K(this)[e] : null;
}, ta.prototype.has = function (e) {
  return K(this).hasOwnProperty(Qr(e));
}, ta.prototype.set = function (e, t) {
  K(this)[Qr(e)] = Xr(t);
}, ta.prototype.forEach = function (e, t) {
  for (var n in K(this)) K(this).hasOwnProperty(n) && e.call(t, K(this)[n], n, this);
}, ta.prototype.keys = function () {
  var e = [];
  return p$1(this).call(this, function (t, n) {
    e.push(n);
  }), ea(e);
}, ta.prototype.values = function () {
  var e = [];
  return p$1(this).call(this, function (t) {
    e.push(t);
  }), ea(e);
}, ta.prototype.entries = function () {
  var e = [];
  return p$1(this).call(this, function (t, n) {
    e.push([n, t]);
  }), ea(e);
}, Wr && (ta.prototype[oe] = le(ta.prototype));
var la = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];

function sa(e, t) {
  if (!(this instanceof sa)) throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
  var n,
      r,
      a = (t = t || {}).body;

  if (e instanceof sa) {
    if (e.bodyUsed) throw new TypeError("Already read");
    this.url = e.url, this.credentials = e.credentials, t.headers || (this.headers = new ta(e.headers)), this.method = e.method, this.mode = e.mode, this.signal = e.signal, a || null == e._bodyInit || (a = e._bodyInit, e.bodyUsed = !0);
  } else this.url = String(e);

  if (this.credentials = t.credentials || this.credentials || "same-origin", !t.headers && this.headers || (this.headers = new ta(t.headers)), this.method = (n = t.method || this.method || "GET", r = n.toUpperCase(), C$1(la).call(la, r) > -1 ? r : n), this.mode = t.mode || this.mode || null, this.signal = t.signal || this.signal, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && a) throw new TypeError("Body not allowed for GET or HEAD requests");

  if (this._initBody(a), !("GET" !== this.method && "HEAD" !== this.method || "no-store" !== t.cache && "no-cache" !== t.cache)) {
    var o = /([?&])_=[^&]*/;
    if (o.test(this.url)) this.url = this.url.replace(o, "$1_=" + new Date().getTime());else {
      this.url += (/\?/.test(this.url) ? "&" : "?") + "_=" + new Date().getTime();
    }
  }
}

function ca(e) {
  var t,
      n = new FormData();
  return p$1(t = J(e).call(e).split("&")).call(t, function (e) {
    if (e) {
      var t = e.split("="),
          r = t.shift().replace(/\+/g, " "),
          a = t.join("=").replace(/\+/g, " ");
      n.append(decodeURIComponent(r), decodeURIComponent(a));
    }
  }), n;
}

function ua(e, t) {
  if (!(this instanceof ua)) throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
  t || (t = {}), this.type = "default", this.status = void 0 === t.status ? 200 : t.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = void 0 === t.statusText ? "" : "" + t.statusText, this.headers = new ta(t.headers), this.url = t.url || "", this._initBody(e);
}

sa.prototype.clone = function () {
  return new sa(this, {
    body: this._bodyInit
  });
}, ia.call(sa.prototype), ia.call(ua.prototype), ua.prototype.clone = function () {
  return new ua(this._bodyInit, {
    status: this.status,
    statusText: this.statusText,
    headers: new ta(this.headers),
    url: this.url
  });
}, ua.error = function () {
  var e = new ua(null, {
    status: 0,
    statusText: ""
  });
  return e.type = "error", e;
};
var da = [301, 302, 303, 307, 308];

ua.redirect = function (e, t) {
  if (-1 === C$1(da).call(da, t)) throw new RangeError("Invalid status code");
  return new ua(null, {
    status: t,
    headers: {
      location: e
    }
  });
};

var pa = Hr.DOMException;

try {
  new pa();
} catch (e) {
  pa = function (e, t) {
    this.message = e, this.name = t;
    var n = Error(e);
    this.stack = n.stack;
  }, pa.prototype = ce(Error.prototype), pa.prototype.constructor = pa;
}

function fa(e, t) {
  return new v$1(function (n, r) {
    var a = new sa(e, t);
    if (a.signal && a.signal.aborted) return r(new pa("Aborted", "AbortError"));
    var o,
        i,
        l,
        c = new XMLHttpRequest();

    function u() {
      c.abort();
    }

    (c.onload = function () {
      var e,
          t,
          r,
          a,
          o,
          i = {
        status: c.status,
        statusText: c.statusText,
        headers: (e = c.getAllResponseHeaders() || "", a = new ta(), o = e.replace(/\r?\n[\t ]+/g, " "), p$1(t = K(r = o.split("\r")).call(r, function (e) {
          return 0 === C$1(e).call(e, "\n") ? e.substr(1, e.length) : e;
        })).call(t, function (e) {
          var t,
              n = e.split(":"),
              r = J(t = n.shift()).call(t);

          if (r) {
            var o,
                i = J(o = n.join(":")).call(o);
            a.append(r, i);
          }
        }), a)
      };
      i.url = "responseURL" in c ? c.responseURL : i.headers.get("X-Request-URL");
      var l = "response" in c ? c.response : c.responseText;
      q(function () {
        n(new ua(l, i));
      }, 0);
    }, c.onerror = function () {
      q(function () {
        r(new TypeError("Network request failed"));
      }, 0);
    }, c.ontimeout = function () {
      q(function () {
        r(new TypeError("Network request failed"));
      }, 0);
    }, c.onabort = function () {
      q(function () {
        r(new pa("Aborted", "AbortError"));
      }, 0);
    }, c.open(a.method, function (e) {
      try {
        return "" === e && Hr.location.href ? Hr.location.href : e;
      } catch (t) {
        return e;
      }
    }(a.url), !0), "include" === a.credentials ? c.withCredentials = !0 : "omit" === a.credentials && (c.withCredentials = !1), "responseType" in c) && (Gr ? c.responseType = "blob" : $r && a.headers.get("Content-Type") && -1 !== C$1(o = a.headers.get("Content-Type")).call(o, "application/octet-stream") && (c.responseType = "arraybuffer"));
    !t || "object" !== _typeof(t.headers) || t.headers instanceof ta ? p$1(i = a.headers).call(i, function (e, t) {
      c.setRequestHeader(t, e);
    }) : p$1(l = ie(t.headers)).call(l, function (e) {
      c.setRequestHeader(e, Xr(t.headers[e]));
    });
    a.signal && (a.signal.addEventListener("abort", u), c.onreadystatechange = function () {
      4 === c.readyState && a.signal.removeEventListener("abort", u);
    }), c.send(void 0 === a._bodyInit ? null : a._bodyInit);
  });
}

fa.polyfill = !0, Hr.fetch || (Hr.fetch = fa, Hr.Headers = ta, Hr.Request = sa, Hr.Response = ua);
var ha = "undefined" != typeof window && "fetch" in window ? window.fetch : fa;

function ya(e, t) {
  var o = n$1(e);

  if (r$1) {
    var i = r$1(e);
    t && (i = f$1(i).call(i, function (t) {
      return a$1(e, t).enumerable;
    })), o.push.apply(o, i);
  }

  return o;
}

function ma(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n,
        r,
        s = null != arguments[t] ? arguments[t] : {};
    t % 2 ? p$1(n = ya(Object(s), !0)).call(n, function (t) {
      _defineProperty(e, t, s[t]);
    }) : o$1 ? i(e, o$1(s)) : p$1(r = ya(Object(s))).call(r, function (t) {
      l$1(e, t, a$1(s, t));
    });
  }

  return e;
}

function va(e) {
  return e && e.errorCode && e.errorType && e.message && e.status;
}

function ga(n, r) {
  var a,
      o = n.headers,
      i = void 0 === o ? [] : o,
      l = n.errorLevel,
      s = void 0 === l ? "warn" : l,
      c = n.loadingContext,
      u = void 0 === c ? Ze : c,
      d = n.method,
      p = void 0 === d ? "GET" : d,
      f = n.path,
      h = ma({
    method: p,
    mode: "cors",
    cache: "default",
    credentials: "same-origin",
    headers: ma({
      Accept: "application/json, text/plain, */*",
      "Content-Type": "POST" === p ? "application/json" : "text/plain"
    }, i),
    redirect: "follow",
    referrerPolicy: "no-referrer-when-downgrade"
  }, r && {
    body: W(r)
  }),
      m = y$1(a = "".concat(u)).call(a, f);
  return ha(m, h).then(function () {
    var r = _asyncToGenerator(regenerator.mark(function e(r) {
      var a;
      return regenerator.wrap(function (e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            return e.next = 2, r.json();

          case 2:
            if (a = e.sent, !r.ok) {
              e.next = 5;
              break;
            }

            return e.abrupt("return", a);

          case 5:
            if (!va(a)) {
              e.next = 8;
              break;
            }

            return ba(a.message, s), e.abrupt("return");

          case 8:
            return ba(n.errorMessage || "Service at ".concat(m, " is not available"), s), e.abrupt("return");

          case 11:
          case "end":
            return e.stop();
        }
      }, e);
    }));
    return function (e) {
      return r.apply(this, arguments);
    };
  }()).catch(function (e) {
    var t;
    if (e instanceof Mt) throw e;
    ba(n.errorMessage || y$1(t = "Call to ".concat(m, " failed. Error= ")).call(t, e), s);
  });
}

function ba(e, t) {
  switch (t) {
    case "silent":
      break;

    case "info":
    case "warn":
    case "error":
      console[t](e);
      break;

    default:
      throw new Mt("NETWORK_ERROR", e);
  }
}

function _a(e, t) {
  return ga(ma(ma({}, e), {}, {
    method: "POST"
  }), t);
}

function Ca(e, t, n) {
  var r;
  return function (e, t) {
    return ga(ma(ma({}, e), {}, {
      method: "GET"
    }), t);
  }({
    loadingContext: t,
    errorLevel: "warn",
    errorMessage: "Dataset ".concat(e, " is not available"),
    path: n ? y$1(r = "datasets/".concat(e, "/")).call(r, n, ".json") : "datasets/".concat(e, ".json")
  });
}

function ka(e) {
  var t = e.classNameModifiers,
      n = e.label,
      r = e.onDropdownChange,
      a = e.readOnly,
      o = e.selectedCountry,
      i = e.specifications,
      l = e.value,
      s = Pt(),
      c = s.i18n,
      u = s.loadingContext,
      d = s.commonProps.isCollatingErrors,
      p = ft([]),
      f = _slicedToArray(p, 2),
      h$1 = f[0],
      y = f[1],
      m = ft(!1),
      v = _slicedToArray(m, 2),
      g = v[0],
      _ = v[1],
      C = i.getPlaceholderKeyForField("stateOrProvince", o);
  return mt(function () {
    if (!o || !i.countryHasDataset(o)) return y([]), void _(!0);
    Ca("states/".concat(o), u, c.locale).then(function (e) {
      var t = e && e.length ? e : [];
      y(t), _(!0);
    }).catch(function () {
      y([]), _(!0);
    });
  }, [o]), g && h$1.length ? h(yn, {
    label: n,
    classNameModifiers: t,
    errorMessage: e.errorMessage,
    isValid: !!l,
    showValidIcon: !1,
    name: "stateOrProvince",
    isCollatingErrors: d
  }, Zn("select", {
    name: "stateOrProvince",
    onChange: r,
    selected: l,
    placeholder: c.get(C),
    items: h$1,
    readonly: a && !!l,
    isCollatingErrors: d
  })) : null;
}

function Na(e) {
  var t = e.allowedCountries,
      n = void 0 === t ? [] : t,
      r = e.classNameModifiers,
      a = void 0 === r ? [] : r,
      o = e.errorMessage,
      i = e.onDropdownChange,
      l = e.value,
      s = Pt(),
      c = s.i18n,
      u = s.loadingContext,
      d = s.commonProps.isCollatingErrors,
      p = ft([]),
      y = _slicedToArray(p, 2),
      m = y[0],
      v = y[1],
      g = ft(!1),
      _ = _slicedToArray(g, 2),
      C = _[0],
      k = _[1],
      N = ft(e.readOnly),
      w = _slicedToArray(N, 2),
      S = w[0],
      x = w[1];

  return mt(function () {
    Ca("countries", u, c.locale).then(function (e) {
      var t = n.length ? f$1(e).call(e, function (e) {
        return h$1(n).call(n, e.id);
      }) : e;
      v(t || []), x(1 === t.length || S), k(!0);
    }).catch(function (e) {
      console.error(e), v([]), k(!0);
    });
  }, []), C ? h(yn, {
    name: "country",
    label: c.get("country"),
    errorMessage: o,
    classNameModifiers: a,
    isValid: !!l,
    showValidIcon: !1,
    isCollatingErrors: d
  }, Zn("select", {
    onChange: i,
    name: "country",
    placeholder: c.get("select.country"),
    selected: l,
    items: m,
    readonly: S && !!l,
    isCollatingErrors: d
  })) : null;
}

function wa(e) {
  var t,
      n = Pt(),
      r = n.i18n,
      a = n.commonProps.isCollatingErrors,
      o = e.classNameModifiers,
      i = void 0 === o ? [] : o,
      l = e.data,
      c = e.errors,
      u = e.valid,
      d = e.fieldName,
      p = e.onInput,
      f = e.onBlur,
      h$1 = e.trimOnBlur,
      m = e.maxlength,
      v = e.disabled,
      g = l[d],
      b = l.country,
      _ = e.specifications.countryHasOptionalField(b, d),
      C = e.specifications.getKeyForField(d, b),
      k = _ ? " ".concat(r.get("field.title.optional")) : "",
      N = y$1(t = "".concat(r.get(C))).call(t, k),
      w = function (e, t, n) {
    var r, a;

    if ("object" === _typeof(null === (r = e[t]) || void 0 === r ? void 0 : r.errorMessage)) {
      var o = e[t].errorMessage,
          i = o.translationKey,
          l = o.translationObject;
      return n.get(i, l);
    }

    return n.get(null === (a = e[t]) || void 0 === a ? void 0 : a.errorMessage) || !!e[t];
  }(c, d, r);

  switch (d) {
    case "country":
      return h(Na, {
        allowedCountries: e.allowedCountries,
        classNameModifiers: i,
        label: N,
        errorMessage: w,
        onDropdownChange: e.onDropdownChange,
        value: g
      });

    case "stateOrProvince":
      return h(ka, {
        classNameModifiers: i,
        label: N,
        errorMessage: w,
        onDropdownChange: e.onDropdownChange,
        selectedCountry: b,
        specifications: e.specifications,
        value: g
      });

    default:
      return h(yn, {
        label: N,
        classNameModifiers: i,
        errorMessage: w,
        isValid: u[d],
        name: d,
        isCollatingErrors: a
      }, Zn("text", {
        classNameModifiers: i,
        name: d,
        value: g,
        onInput: p,
        onBlur: f,
        isCollatingErrors: a,
        maxlength: m,
        trimOnBlur: h$1,
        disabled: v
      }));
  }
}

function Sa(e, t) {
  var o = n$1(e);

  if (r$1) {
    var i = r$1(e);
    t && (i = f$1(i).call(i, function (t) {
      return a$1(e, t).enumerable;
    })), o.push.apply(o, i);
  }

  return o;
}

function xa(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n,
        r,
        s = null != arguments[t] ? arguments[t] : {};
    t % 2 ? p$1(n = Sa(Object(s), !0)).call(n, function (t) {
      _defineProperty(e, t, s[t]);
    }) : o$1 ? i(e, o$1(s)) : p$1(r = Sa(Object(s))).call(r, function (t) {
      l$1(e, t, a$1(s, t));
    });
  }

  return e;
}

var Pa = function () {
  function e(t) {
    _classCallCheck(this, e), _defineProperty(this, "specifications", void 0), this.specifications = xa(xa({}, Fr), t);
  }

  return _createClass(e, [{
    key: "countryHasDataset",
    value: function (e) {
      var t, n;
      return !(null === (t = this.specifications) || void 0 === t || null === (n = t[e]) || void 0 === n || !n.hasDataset);
    }
  }, {
    key: "countryHasOptionalField",
    value: function (e, t) {
      var n, r, a;
      return !(null === (n = this.specifications) || void 0 === n || null === (r = n[e]) || void 0 === r || null === (a = r.optionalFields) || void 0 === a || !h$1(a).call(a, t));
    }
  }, {
    key: "getAddressSchemaForCountry",
    value: function (e) {
      var t, n;
      return (null === (t = this.specifications) || void 0 === t || null === (n = t[e]) || void 0 === n ? void 0 : n.schema) || this.specifications.default.schema;
    }
  }, {
    key: "getAddressLabelsForCountry",
    value: function (e) {
      var t, n;
      return (null === (t = this.specifications) || void 0 === t || null === (n = t[e]) || void 0 === n ? void 0 : n.labels) || this.specifications.default.labels;
    }
  }, {
    key: "getOptionalFieldsForCountry",
    value: function (e) {
      var t, n, r;
      return (null === (t = this.specifications) || void 0 === t || null === (n = t[e]) || void 0 === n ? void 0 : n.optionalFields) || (null === (r = this.specifications.default) || void 0 === r ? void 0 : r.optionalFields) || [];
    }
  }, {
    key: "getKeyForField",
    value: function (e, t) {
      var n, r, a, o, i, l;
      return (null === (n = this.specifications) || void 0 === n || null === (r = n[t]) || void 0 === r || null === (a = r.labels) || void 0 === a ? void 0 : a[e]) || (null === (o = this.specifications) || void 0 === o || null === (i = o.default) || void 0 === i || null === (l = i.labels) || void 0 === l ? void 0 : l[e]) || e;
    }
  }, {
    key: "getPlaceholderKeyForField",
    value: function (e, t) {
      var n, r, a, o, i, l;
      return (null === (n = this.specifications) || void 0 === n || null === (r = n[t]) || void 0 === r || null === (a = r.placeholders) || void 0 === a ? void 0 : a[e]) || (null === (o = this.specifications) || void 0 === o || null === (i = o.default) || void 0 === i || null === (l = i.placeholders) || void 0 === l ? void 0 : l[e]);
    }
  }, {
    key: "getAddressSchemaForCountryFlat",
    value: function (e) {
      var t, n;
      return f$1(t = ue(n = this.getAddressSchemaForCountry(e)).call(n, 2)).call(t, function (e) {
        return "string" == typeof e;
      });
    }
  }]), e;
}();

function Fa(e, t) {
  var o = n$1(e);

  if (r$1) {
    var i = r$1(e);
    t && (i = f$1(i).call(i, function (t) {
      return a$1(e, t).enumerable;
    })), o.push.apply(o, i);
  }

  return o;
}

function Aa(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n,
        r,
        s = null != arguments[t] ? arguments[t] : {};
    t % 2 ? p$1(n = Fa(Object(s), !0)).call(n, function (t) {
      _defineProperty(e, t, s[t]);
    }) : o$1 ? i(e, o$1(s)) : p$1(r = Fa(Object(s))).call(r, function (t) {
      l$1(e, t, a$1(s, t));
    });
  }

  return e;
}

function Ba(e) {
  var t,
      n = e.label,
      r = void 0 === n ? "" : n,
      a = e.requiredFields,
      o = e.visibility,
      i = e.iOSFocusedField,
      l = void 0 === i ? null : i,
      s = gt(function () {
    return new Pa(e.specifications);
  }, [e.specifications]),
      c = f$1(t = s.getAddressSchemaForCountryFlat(e.countryCode)).call(t, function (e) {
    return h$1(a).call(a, e);
  }),
      u = cr({
    schema: c,
    defaultData: e.data,
    rules: e.validationRules || Kr(s),
    formatters: Vr
  }),
      d = u.data,
      m = u.errors,
      v = u.valid,
      g = u.isValid,
      C = u.handleChangeFor,
      N = u.triggerValidation,
      w = f$1(c).call(c, function (e) {
    return !l || e === l;
  });
  if (yt(function () {
    var e = s.countryHasDataset(d.country) ? "" : "N/A",
        t = Aa(Aa({}, d), {}, {
      stateOrProvince: e
    });
    p$1(a).call(a, function (e) {
      var n;
      C(e, "input")(null !== (n = t[e]) && void 0 !== n ? n : "");
    }), t.postalCode && C("postalCode", "blur")(d.postalCode);
  }, [d.country]), yt(function () {
    var e = h$1(a).call(a, "stateOrProvince"),
        t = d.country && s.countryHasDataset(d.country),
        n = e && t,
        r = d.stateOrProvince || (n ? "" : "N/A");
    C("stateOrProvince", "input")(r);
  }, []), yt(function () {
    var t = s.getOptionalFieldsForCountry(d.country),
        n = k$1(Cr).call(Cr, function (n, r) {
      var o = h$1(t).call(t, r),
          i = h$1(a).call(a, r),
          l = d[r],
          s = e.data[r],
          c = o && !l || !i ? i || l || !s ? "N/A" : s : l;
      return null != c && c.length && (n[r] = c), n;
    }, {});
    e.onChange({
      data: n,
      valid: v,
      errors: m,
      isValid: g
    });
  }, [d, v, m, g]), this.showValidation = N, "hidden" === o) return null;
  if ("readOnly" === o) return h(Er, {
    data: d,
    label: r
  });

  var S = function (t, n) {
    var r,
        o = n.classNameModifiers,
        i = void 0 === o ? [] : o;
    return h$1(a).call(a, t) ? h(wa, {
      key: t,
      allowedCountries: e.allowedCountries,
      classNameModifiers: y$1(r = []).call(r, _toConsumableArray(i), [t]),
      data: d,
      errors: m,
      valid: v,
      fieldName: t,
      onInput: C(t, "input"),
      onBlur: C(t, "blur"),
      onDropdownChange: C(t, "blur"),
      specifications: s,
      maxlength: Rr(Lr, t, d.country, !0),
      trimOnBlur: !0,
      disabled: !h$1(w).call(w, t)
    }) : null;
  },
      x = s.getAddressSchemaForCountry(d.country);

  return h(ln, {
    classNameModifiers: [r],
    label: r
  }, K(x).call(x, function (e) {
    return e instanceof Array ? h("div", {
      className: "adyen-checkout__field-group"
    }, K(t = e).call(t, function (e) {
      var t = _slicedToArray(e, 2),
          n = t[0],
          r = t[1];
      return S(n, {
        classNameModifiers: ["col-".concat(r)]
      });
    })) : S(e, {});
    var t;
  }));
}

Ba.defaultProps = {
  countryCode: null,
  data: {},
  onChange: function () {},
  visibility: "editable",
  requiredFields: Cr,
  specifications: {}
};
var Ea = ["errorMessage", "label", "onChange"];

function Ra(e) {
  var t,
      n,
      r,
      a = e.errorMessage,
      o = e.label,
      i = e.onChange,
      l = _objectWithoutProperties(e, Ea);
  return h(yn, {
    classNameModifiers: ["consentCheckbox"],
    errorMessage: a
  }, h(Pn, {
    name: "consentCheckbox",
    classNameModifiers: y$1(t = []).call(t, _toConsumableArray(null !== (n = l.classNameModifiers) && void 0 !== n ? n : l.classNameModifiers = []), ["consentCheckbox"]),
    onInput: i,
    value: null == l || null === (r = l.data) || void 0 === r ? void 0 : r.consentCheckbox,
    label: o,
    checked: l.checked
  }));
}

var Oa = ["companyDetails", "personalDetails", "billingAddress", "deliveryAddress", "bankAccount"],
    Da = function () {
  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
  return n$1(e).length > 1;
},
    Ma = {
  AD: {
    length: 24,
    structure: "F04F04A12",
    example: "AD9912345678901234567890"
  },
  AE: {
    length: 23,
    structure: "F03F16",
    example: "AE993331234567890123456"
  },
  AL: {
    length: 28,
    structure: "F08A16",
    example: "AL47212110090000000235698741"
  },
  AT: {
    length: 20,
    structure: "F05F11",
    example: "AT611904300234573201"
  },
  AZ: {
    length: 28,
    structure: "U04A20",
    example: "AZ21NABZ00000000137010001944"
  },
  BA: {
    length: 20,
    structure: "F03F03F08F02",
    example: "BA391290079401028494"
  },
  BE: {
    length: 16,
    structure: "F03F07F02",
    example: "BE68 5390 0754 7034"
  },
  BG: {
    length: 22,
    structure: "U04F04F02A08",
    example: "BG80BNBG96611020345678"
  },
  BH: {
    length: 22,
    structure: "U04A14",
    example: "BH67BMAG00001299123456"
  },
  BR: {
    length: 29,
    structure: "F08F05F10U01A01",
    example: "BR9700360305000010009795493P1"
  },
  CH: {
    length: 21,
    structure: "F05A12",
    example: "CH9300762011623852957"
  },
  CR: {
    length: 22,
    structure: "F04F14",
    example: "CR72012300000171549015"
  },
  CY: {
    length: 28,
    structure: "F03F05A16",
    example: "CY17002001280000001200527600"
  },
  CZ: {
    length: 24,
    structure: "F04F06F10",
    example: "CZ6508000000192000145399"
  },
  DE: {
    length: 22,
    structure: "F08F10",
    example: "DE00123456789012345678"
  },
  DK: {
    length: 18,
    structure: "F04F09F01",
    example: "DK5000400440116243"
  },
  DO: {
    length: 28,
    structure: "U04F20",
    example: "DO28BAGR00000001212453611324"
  },
  EE: {
    length: 20,
    structure: "F02F02F11F01",
    example: "EE382200221020145685"
  },
  ES: {
    length: 24,
    structure: "F04F04F01F01F10",
    example: "ES9121000418450200051332"
  },
  FI: {
    length: 18,
    structure: "F06F07F01",
    example: "FI2112345600000785"
  },
  FO: {
    length: 18,
    structure: "F04F09F01",
    example: "FO6264600001631634"
  },
  FR: {
    length: 27,
    structure: "F05F05A11F02",
    example: "FR1420041010050500013M02606"
  },
  GB: {
    length: 22,
    structure: "U04F06F08",
    example: "GB29NWBK60161331926819"
  },
  GE: {
    length: 22,
    structure: "U02F16",
    example: "GE29NB0000000101904917"
  },
  GI: {
    length: 23,
    structure: "U04A15",
    example: "GI75NWBK000000007099453"
  },
  GL: {
    length: 18,
    structure: "F04F09F01",
    example: "GL8964710001000206"
  },
  GR: {
    length: 27,
    structure: "F03F04A16",
    example: "GR1601101250000000012300695"
  },
  GT: {
    length: 28,
    structure: "A04A20",
    example: "GT82TRAJ01020000001210029690"
  },
  HR: {
    length: 21,
    structure: "F07F10",
    example: "HR1210010051863000160"
  },
  HU: {
    length: 28,
    structure: "F03F04F01F15F01",
    example: "HU42117730161111101800000000"
  },
  IE: {
    length: 22,
    structure: "U04F06F08",
    example: "IE29AIBK93115212345678"
  },
  IL: {
    length: 23,
    structure: "F03F03F13",
    example: "IL620108000000099999999"
  },
  IS: {
    length: 26,
    structure: "F04F02F06F10",
    example: "IS140159260076545510730339"
  },
  IT: {
    length: 27,
    structure: "U01F05F05A12",
    example: "IT60X0542811101000000123456"
  },
  KW: {
    length: 30,
    structure: "U04A22",
    example: "KW81CBKU0000000000001234560101"
  },
  KZ: {
    length: 20,
    structure: "F03A13",
    example: "KZ86125KZT5004100100"
  },
  LB: {
    length: 28,
    structure: "F04A20",
    example: "LB62099900000001001901229114"
  },
  LC: {
    length: 32,
    structure: "U04F24",
    example: "LC07HEMM000100010012001200013015"
  },
  LI: {
    length: 21,
    structure: "F05A12",
    example: "LI21088100002324013AA"
  },
  LT: {
    length: 20,
    structure: "F05F11",
    example: "LT121000011101001000"
  },
  LU: {
    length: 20,
    structure: "F03A13",
    example: "LU280019400644750000"
  },
  LV: {
    length: 21,
    structure: "U04A13",
    example: "LV80BANK0000435195001"
  },
  MC: {
    length: 27,
    structure: "F05F05A11F02",
    example: "MC5811222000010123456789030"
  },
  MD: {
    length: 24,
    structure: "U02A18",
    example: "MD24AG000225100013104168"
  },
  ME: {
    length: 22,
    structure: "F03F13F02",
    example: "ME25505000012345678951"
  },
  MK: {
    length: 19,
    structure: "F03A10F02",
    example: "MK07250120000058984"
  },
  MR: {
    length: 27,
    structure: "F05F05F11F02",
    example: "MR1300020001010000123456753"
  },
  MT: {
    length: 31,
    structure: "U04F05A18",
    example: "MT84MALT011000012345MTLCAST001S"
  },
  MU: {
    length: 30,
    structure: "U04F02F02F12F03U03",
    example: "MU17BOMM0101101030300200000MUR"
  },
  NL: {
    length: 18,
    structure: "U04F10",
    example: "NL99BANK0123456789"
  },
  NO: {
    length: 15,
    structure: "F04F06F01",
    example: "NO9386011117947"
  },
  PK: {
    length: 24,
    structure: "U04A16",
    example: "PK36SCBL0000001123456702"
  },
  PL: {
    length: 28,
    structure: "F08F16",
    example: "PL00123456780912345678901234"
  },
  PS: {
    length: 29,
    structure: "U04A21",
    example: "PS92PALS000000000400123456702"
  },
  PT: {
    length: 25,
    structure: "F04F04F11F02",
    example: "PT50000201231234567890154"
  },
  RO: {
    length: 24,
    structure: "U04A16",
    example: "RO49AAAA1B31007593840000"
  },
  RS: {
    length: 22,
    structure: "F03F13F02",
    example: "RS35260005601001611379"
  },
  SA: {
    length: 24,
    structure: "F02A18",
    example: "SA0380000000608010167519"
  },
  SE: {
    length: 24,
    structure: "F03F16F01",
    example: "SE4550000000058398257466"
  },
  SI: {
    length: 19,
    structure: "F05F08F02",
    example: "SI56263300012039086"
  },
  SK: {
    length: 24,
    structure: "F04F06F10",
    example: "SK3112000000198742637541"
  },
  SM: {
    length: 27,
    structure: "U01F05F05A12",
    example: "SM86U0322509800000000270100"
  },
  ST: {
    length: 25,
    structure: "F08F11F02",
    example: "ST68000100010051845310112"
  },
  TL: {
    length: 23,
    structure: "F03F14F02",
    example: "TL380080012345678910157"
  },
  TN: {
    length: 24,
    structure: "F02F03F13F02",
    example: "TN5910006035183598478831"
  },
  TR: {
    length: 26,
    structure: "F05F01A16",
    example: "TR330006100519786457841326"
  },
  VG: {
    length: 24,
    structure: "U04F16",
    example: "VG96VPVG0000012345678901"
  },
  XK: {
    length: 20,
    structure: "F04F10F02",
    example: "XK051212012345678906"
  },
  AO: {
    length: 25,
    structure: "F21",
    example: "AO69123456789012345678901"
  },
  BF: {
    length: 27,
    structure: "F23",
    example: "BF2312345678901234567890123"
  },
  BI: {
    length: 16,
    structure: "F12",
    example: "BI41123456789012"
  },
  BJ: {
    length: 28,
    structure: "F24",
    example: "BJ39123456789012345678901234"
  },
  CI: {
    length: 28,
    structure: "U01F23",
    example: "CI17A12345678901234567890123"
  },
  CM: {
    length: 27,
    structure: "F23",
    example: "CM9012345678901234567890123"
  },
  CV: {
    length: 25,
    structure: "F21",
    example: "CV30123456789012345678901"
  },
  DZ: {
    length: 24,
    structure: "F20",
    example: "DZ8612345678901234567890"
  },
  IR: {
    length: 26,
    structure: "F22",
    example: "IR861234568790123456789012"
  },
  JO: {
    length: 30,
    structure: "A04F22",
    example: "JO15AAAA1234567890123456789012"
  },
  MG: {
    length: 27,
    structure: "F23",
    example: "MG1812345678901234567890123"
  },
  ML: {
    length: 28,
    structure: "U01F23",
    example: "ML15A12345678901234567890123"
  },
  MZ: {
    length: 25,
    structure: "F21",
    example: "MZ25123456789012345678901"
  },
  QA: {
    length: 29,
    structure: "U04A21",
    example: "QA30AAAA123456789012345678901"
  },
  SN: {
    length: 28,
    structure: "U01F23",
    example: "SN52A12345678901234567890123"
  },
  UA: {
    length: 29,
    structure: "F25",
    example: "UA511234567890123456789012345"
  }
},
    Ta = function (e) {
  var t;
  return J(t = e.replace(/\W/gi, "").replace(/(.{4})(?!$)/g, "$1 ")).call(t);
},
    Ia = function (e) {
  return e.replace(/[^a-zA-Z0-9]/g, "").toUpperCase();
},
    ja = function (e, t) {
  return function (e, t) {
    var n;
    if (null === t || !Ma[t] || !Ma[t].structure) return !1;
    var r = Ma[t].structure,
        a = K(n = r.match(/(.{3})/g)).call(n, function (e) {
      var t,
          n,
          r = G(e).call(e, 0, 1),
          a = w$1(G(e).call(e, 1), 10);

      switch (r) {
        case "A":
          n = "0-9A-Za-z";
          break;

        case "B":
          n = "0-9A-Z";
          break;

        case "C":
          n = "A-Za-z";
          break;

        case "F":
          n = "0-9";
          break;

        case "L":
          n = "a-z";
          break;

        case "U":
          n = "A-Z";
          break;

        case "W":
          n = "0-9a-z";
      }

      return y$1(t = "([".concat(n, "]{")).call(t, a, "})");
    });
    return new RegExp("^".concat(a.join(""), "$"));
  }(0, t);
},
    Va = function () {
  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
  return e && Ma[e] && Ma[e].example ? Ta(Ma[e].example) : "AB00 1234 5678 9012 3456 7890";
},
    La = function (e) {
  return G(e).call(e, 0, 2);
};

function Ua(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
  this.status = e, this.code = t;
}

var qa = function (e) {
  var t = Ia(e),
      n = function (e) {
    var t,
        n = e,
        r = "A".charCodeAt(0),
        a = "Z".charCodeAt(0);
    return n = (n = n.toUpperCase()).substr(4) + n.substr(0, 4), K(t = n.split("")).call(t, function (e) {
      var t = e.charCodeAt(0);
      return t >= r && t <= a ? t - r + 10 : e;
    }).join("");
  }(t),
      r = 1 === function (e) {
    for (var t, n = e; n.length > 2;) t = G(n).call(n, 0, 9), n = w$1(t, 10) % 97 + G(n).call(n, t.length);

    return w$1(n, 10) % 97;
  }(n);

  return r && function (e) {
    var t = G(e).call(e, 0, 2),
        n = ja(0, t);
    return n.test && n.test(G(e).call(e, 4)) || !1;
  }(t);
},
    Ka = function (e) {
  var t = Ia(e);
  if (e.length < 2) return new Ua("no-validate", "TOO_SHORT");

  var n = function (e) {
    return !(!e || !Ma[e]) && Ma[e];
  }(La(t));

  return n ? t.length > n.length ? new Ua("invalid", "TOO_LONG") : t.length === n.length ? qa(e) ? new Ua("valid", "VALID") : new Ua("invalid", "INVALID_IBAN") : new Ua("no-validate", "UNKNOWN") : new Ua("invalid", "INVALID_COUNTRY");
},
    Ha = function (e) {
  return !!(e && e.length && e.length > 0);
};

function za(e, t) {
  var o = n$1(e);

  if (r$1) {
    var i = r$1(e);
    t && (i = f$1(i).call(i, function (t) {
      return a$1(e, t).enumerable;
    })), o.push.apply(o, i);
  }

  return o;
}

function Wa(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n,
        r,
        s = null != arguments[t] ? arguments[t] : {};
    t % 2 ? p$1(n = za(Object(s), !0)).call(n, function (t) {
      _defineProperty(e, t, s[t]);
    }) : o$1 ? i(e, o$1(s)) : p$1(r = za(Object(s))).call(r, function (t) {
      l$1(e, t, a$1(s, t));
    });
  }

  return e;
}

function Ga(e) {
  var t = function () {
    if ("undefined" == typeof Reflect || !S) return !1;
    if (S.sham) return !1;
    if ("function" == typeof Proxy) return !0;

    try {
      return Boolean.prototype.valueOf.call(S(Boolean, [], function () {})), !0;
    } catch (e) {
      return !1;
    }
  }();

  return function () {
    var n,
        r = _getPrototypeOf(e);

    if (t) {
      var a = _getPrototypeOf(this).constructor;
      n = S(r, arguments, a);
    } else n = r.apply(this, arguments);

    return _possibleConstructorReturn(this, n);
  };
}

var Ya = function (e) {
  _inherits(n, d);
  var t = Ga(n);

  function n(e) {
    var r, a, o, i;

    if (_classCallCheck(this, n), i = t.call(this, e), _defineProperty(_assertThisInitialized(i), "ibanNumber", void 0), _defineProperty(_assertThisInitialized(i), "setData", function (e, t, n) {
      i.setState(function (n) {
        return {
          data: Wa(Wa({}, n.data), {}, _defineProperty({}, e, t))
        };
      }, n);
    }), _defineProperty(_assertThisInitialized(i), "setError", function (e, t, n) {
      i.setState(function (n) {
        return {
          errors: Wa(Wa({}, n.errors), {}, _defineProperty({}, e, t))
        };
      }, n);
    }), _defineProperty(_assertThisInitialized(i), "setValid", function (e, t, n) {
      i.setState(function (n) {
        return {
          valid: Wa(Wa({}, n.valid), {}, _defineProperty({}, e, t))
        };
      }, n);
    }), _defineProperty(_assertThisInitialized(i), "handleHolderInput", function (e) {
      i.setState(function (t) {
        return {
          data: Wa(Wa({}, t.data), {}, {
            ownerName: e
          })
        };
      }, function () {
        i.setError("holder", !Ha(i.state.data.ownerName)), i.onChange();
      });
    }), _defineProperty(_assertThisInitialized(i), "handleIbanInput", function (e) {
      var t = e.target.value,
          n = Ia(t),
          r = Ta(n),
          a = Ka(r).status,
          o = La(n),
          l = e.target.selectionStart,
          s = i.state.data.ibanNumber,
          c = function (e, t, n) {
        if (0 === e || !t.length) return 0;

        var r = t.length - n.length,
            a = r > 0,
            o = function (e, t) {
          return /\s/.test(e.charAt(t));
        },
            i = e - r;

        return a && (o(t, i + 1) || o(t, i)) ? e + 1 : !a && o(t, e - 1) ? e - 1 : e;
      }(l, r, s);

      i.setState(function (e) {
        return {
          data: Wa(Wa({}, e.data), {}, {
            ibanNumber: r,
            countryCode: o
          }),
          errors: Wa(Wa({}, e.errors), {}, {
            iban: "invalid" === a ? "sepaDirectDebit.ibanField.invalid" : null
          }),
          valid: Wa(Wa({}, e.valid), {}, {
            iban: "valid" === a
          })
        };
      }, function () {
        e.target.setSelectionRange(c, c), i.onChange();
      });
    }), _defineProperty(_assertThisInitialized(i), "handleIbanBlur", function (e) {
      var t = e.target.value;

      if (t.length > 0) {
        var n = Ka(t).status;
        i.setError("iban", "valid" !== n ? "sepaDirectDebit.ibanField.invalid" : null);
      }
    }), i.state = {
      status: "ready",
      data: {
        ownerName: (null == e || null === (r = e.data) || void 0 === r ? void 0 : r.ownerName) || "",
        ibanNumber: (null == e || null === (a = e.data) || void 0 === a ? void 0 : a.ibanNumber) || "",
        countryCode: (null == e || null === (o = e.data) || void 0 === o ? void 0 : o.countryCode) || ""
      },
      isValid: !1,
      cursor: 0,
      errors: {},
      valid: {}
    }, i.state.data.ibanNumber) {
      var l = Ia(i.state.data.ibanNumber);
      i.state.data.ibanNumber = Ta(l);
    }

    if (i.state.data.ibanNumber || i.state.data.ownerName) {
      var s = i.props.holderName ? Ha(i.state.data.ownerName) : "",
          u = (i.state.data.ibanNumber ? "valid" === Ka(i.state.data.ibanNumber).status : "") && s,
          p = {
        data: i.state.data,
        isValid: u
      };
      i.props.onChange(p);
    }

    return i;
  }

  return _createClass(n, [{
    key: "setStatus",
    value: function (e) {
      this.setState({
        status: e
      });
    }
  }, {
    key: "onChange",
    value: function () {
      var e = !this.props.holderName || Ha(this.state.data.ownerName),
          t = "valid" === Ka(this.state.data.ibanNumber).status && e,
          n = {
        data: this.state.data,
        isValid: t
      };
      this.props.onChange(n);
    }
  }, {
    key: "showValidation",
    value: function () {
      var e = Ka(this.state.data.ibanNumber).status,
          t = Ha(this.state.data.ownerName);
      this.setError("iban", "valid" !== e ? "sepaDirectDebit.ibanField.invalid" : null), this.setError("holder", !t || null);
    }
  }, {
    key: "render",
    value: function (e, t) {
      var n = this,
          r = e.placeholders,
          a = e.countryCode,
          o = t.data,
          i = t.errors,
          l = t.valid,
          s = Pt().i18n;
      return h(ln, {
        classNameModifiers: ["iban-input"],
        label: this.props.label
      }, this.props.holderName && h(yn, {
        className: "adyen-checkout__field--owner-name",
        label: s.get("sepa.ownerName"),
        filled: o.ownerName && o.ownerName.length,
        errorMessage: !!i.holder && s.get("creditCard.holderName.invalid"),
        dir: "ltr"
      }, Zn("text", {
        name: "ownerName",
        className: "adyen-checkout__iban-input__owner-name",
        placeholder: "ownerName" in r ? r.ownerName : s.get("sepaDirectDebit.nameField.placeholder"),
        value: o.ownerName,
        "aria-invalid": !!this.state.errors.holder,
        "aria-label": s.get("sepa.ownerName"),
        onInput: function (e) {
          return n.handleHolderInput(e.target.value);
        }
      })), h(yn, {
        className: "adyen-checkout__field--iban-number",
        label: s.get("sepa.ibanNumber"),
        errorMessage: !!i.iban && s.get(i.iban),
        filled: o.ibanNumber && o.ibanNumber.length,
        isValid: l.iban,
        onBlur: this.handleIbanBlur,
        dir: "ltr"
      }, Zn("text", {
        ref: function (e) {
          n.ibanNumber = e;
        },
        name: "ibanNumber",
        className: "adyen-checkout__iban-input__iban-number",
        classNameModifiers: ["large"],
        placeholder: "ibanNumber" in r ? r.ibanNumber : Va(a),
        value: o.ibanNumber,
        onInput: this.handleIbanInput,
        "aria-invalid": !!this.state.errors.iban,
        "aria-label": s.get("sepa.ibanNumber"),
        autocorrect: "off",
        spellcheck: !1
      })), this.props.showPayButton && this.props.payButton({
        status: this.state.status
      }));
    }
  }]), n;
}();

function $a(e, t) {
  var o = n$1(e);

  if (r$1) {
    var i = r$1(e);
    t && (i = f$1(i).call(i, function (t) {
      return a$1(e, t).enumerable;
    })), o.push.apply(o, i);
  }

  return o;
}

function Za(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n,
        r,
        s = null != arguments[t] ? arguments[t] : {};
    t % 2 ? p$1(n = $a(Object(s), !0)).call(n, function (t) {
      _defineProperty(e, t, s[t]);
    }) : o$1 ? i(e, o$1(s)) : p$1(r = $a(Object(s))).call(r, function (t) {
      l$1(e, t, a$1(s, t));
    });
  }

  return e;
}

function Ja(e) {
  var t,
      r = e.countryCode,
      a = e.visibility,
      o = Pt().i18n,
      i = function (e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return k$1(Oa).call(Oa, function (n, r) {
      var a = "hidden" !== e[r],
          o = "deliveryAddress" === r,
          i = "hidden" === (null == e ? void 0 : e.billingAddress);
      return n[r] = a && (!o || i || Da(t[r])), n;
    }, {});
  }(a, e.data),
      l = ft(i),
      s = _slicedToArray(l, 2),
      c = s[0],
      u = s[1],
      h$1 = k$1(Oa).call(Oa, function (e, t) {
    return e[t] = y(), e;
  }, {}),
      y$1 = !!e.consentCheckboxLabel,
      m = !y$1 && $$i(t = n$1(c)).call(t, function (e) {
    return !c[e];
  }),
      v = "editable" === a.deliveryAddress && "hidden" !== a.billingAddress,
      g = ft(Za(Za({}, e.data), y$1 && {
    consentCheckbox: !1
  })),
      C = _slicedToArray(g, 2),
      N = C[0],
      w = C[1],
      S = ft({}),
      x = _slicedToArray(S, 2),
      P = x[0],
      F = x[1],
      A = ft({}),
      B = _slicedToArray(A, 2),
      E = B[0],
      O = B[1],
      D = ft("ready"),
      M = _slicedToArray(D, 2),
      T = M[0],
      I = M[1];

  this.setStatus = I, yt(function () {
    var t = function () {
      var e;
      return $$i(e = n$1(c)).call(e, function (e) {
        return !c[e] || !!E[e];
      });
    }(),
        r = !y$1 || !!E.consentCheckbox,
        a = t && r,
        o = function (e, t) {
      var r, a;
      return k$1(r = f$1(a = n$1(t)).call(a, function (t) {
        return e[t];
      })).call(r, function (e, n) {
        return e[n] = t[n], e;
      }, {});
    }(c, N);

    e.onChange({
      data: o,
      errors: P,
      valid: E,
      isValid: a
    });
  }, [N, c]);

  var j = function (e) {
    return function (t) {
      w(function (n) {
        return Za(Za({}, n), {}, _defineProperty({}, e, t.data));
      }), O(function (n) {
        return Za(Za({}, n), {}, _defineProperty({}, e, t.isValid));
      }), F(function (n) {
        return Za(Za({}, n), {}, _defineProperty({}, e, t.errors));
      });
    };
  };

  return this.showValidation = function () {
    p$1(Oa).call(Oa, function (e) {
      h$1[e].current && h$1[e].current.showValidation();
    }), F(Za({}, y$1 && {
      consentCheckbox: !N.consentCheckbox
    }));
  }, h("div", {
    className: "adyen-checkout__open-invoice"
  }, c.companyDetails && h(ur, {
    data: e.data.companyDetails,
    label: "companyDetails",
    onChange: j("companyDetails"),
    ref: h$1.companyDetails,
    visibility: a.companyDetails
  }), c.personalDetails && h(_r, {
    data: e.data.personalDetails,
    requiredFields: e.personalDetailsRequiredFields,
    label: "personalDetails",
    onChange: j("personalDetails"),
    ref: h$1.personalDetails,
    visibility: a.personalDetails
  }), c.bankAccount && h(Ya, {
    holderName: !0,
    label: "bankAccount",
    data: N.bankAccount,
    onChange: j("bankAccount"),
    ref: h$1.bankAccount
  }), c.billingAddress && h(Ba, {
    allowedCountries: e.allowedCountries,
    countryCode: r,
    requiredFields: e.billingAddressRequiredFields,
    specifications: e.billingAddressSpecification,
    data: N.billingAddress,
    label: "billingAddress",
    onChange: j("billingAddress"),
    ref: h$1.billingAddress,
    visibility: a.billingAddress
  }), v && h(Pn, {
    label: o.get("separateDeliveryAddress"),
    checked: c.deliveryAddress,
    classNameModifiers: ["separateDeliveryAddress"],
    name: "separateDeliveryAddress",
    onChange: function () {
      u(function (e) {
        return Za(Za({}, e), {}, {
          deliveryAddress: !c.deliveryAddress
        });
      });
    }
  }), c.deliveryAddress && h(Ba, {
    allowedCountries: e.allowedCountries,
    countryCode: r,
    data: N.deliveryAddress,
    label: "deliveryAddress",
    onChange: j("deliveryAddress"),
    ref: h$1.deliveryAddress,
    visibility: a.deliveryAddress
  }), y$1 && h(Ra, {
    data: N,
    errorMessage: !!P.consentCheckbox,
    label: e.consentCheckboxLabel,
    onChange: function (e) {
      var t = e.target.checked;
      w(function (e) {
        return Za(Za({}, e), {}, {
          consentCheckbox: t
        });
      }), O(function (e) {
        return Za(Za({}, e), {}, {
          consentCheckbox: t
        });
      }), F(function (e) {
        return Za(Za({}, e), {}, {
          consentCheckbox: !t
        });
      });
    }
  }), e.showPayButton && e.payButton({
    status: T,
    classNameModifiers: _toConsumableArray(m ? ["standalone"] : []),
    label: o.get("confirmPurchase")
  }));
}

function Qa(e) {
  var t = function () {
    if ("undefined" == typeof Reflect || !S) return !1;
    if (S.sham) return !1;
    if ("function" == typeof Proxy) return !0;

    try {
      return Boolean.prototype.valueOf.call(S(Boolean, [], function () {})), !0;
    } catch (e) {
      return !1;
    }
  }();

  return function () {
    var n,
        r = _getPrototypeOf(e);

    if (t) {
      var a = _getPrototypeOf(this).constructor;
      n = S(r, arguments, a);
    } else n = r.apply(this, arguments);

    return _possibleConstructorReturn(this, n);
  };
}

_defineProperty(Ya, "defaultProps", {
  onChange: function () {},
  countryCode: null,
  holderName: !0,
  placeholders: {},
  label: null
});

var Xa = function (e) {
  _inherits(n, d);
  var t = Qa(n);

  function n() {
    var e, r;
    _classCallCheck(this, n);

    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i];

    return r = t.call.apply(t, y$1(e = [this]).call(e, o)), _defineProperty(_assertThisInitialized(r), "state", {
      loaded: !1
    }), r;
  }

  return _createClass(n, [{
    key: "componentDidMount",
    value: function () {
      var e = this;
      this.props.i18n ? this.props.i18n.loaded.then(function () {
        e.setState({
          loaded: !0
        });
      }) : this.setState({
        loaded: !0
      });
    }
  }, {
    key: "render",
    value: function (e) {
      var t = e.children;
      return this.state.loaded ? h(xt.Provider, {
        value: {
          i18n: this.props.i18n,
          loadingContext: this.props.loadingContext,
          commonProps: this.props.commonProps || {}
        }
      }, x(t)) : null;
    }
  }]), n;
}();

function eo(e, t) {
  var o = n$1(e);

  if (r$1) {
    var i = r$1(e);
    t && (i = f$1(i).call(i, function (t) {
      return a$1(e, t).enumerable;
    })), o.push.apply(o, i);
  }

  return o;
}

function to(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n,
        r,
        s = null != arguments[t] ? arguments[t] : {};
    t % 2 ? p$1(n = eo(Object(s), !0)).call(n, function (t) {
      _defineProperty(e, t, s[t]);
    }) : o$1 ? i(e, o$1(s)) : p$1(r = eo(Object(s))).call(r, function (t) {
      l$1(e, t, a$1(s, t));
    });
  }

  return e;
}

function no(e) {
  var t = function () {
    if ("undefined" == typeof Reflect || !S) return !1;
    if (S.sham) return !1;
    if ("function" == typeof Proxy) return !0;

    try {
      return Boolean.prototype.valueOf.call(S(Boolean, [], function () {})), !0;
    } catch (e) {
      return !1;
    }
  }();

  return function () {
    var n,
        r = _getPrototypeOf(e);

    if (t) {
      var a = _getPrototypeOf(this).constructor;
      n = S(r, arguments, a);
    } else n = r.apply(this, arguments);

    return _possibleConstructorReturn(this, n);
  };
}

var ro = function (e) {
  _inherits(n, Lt);
  var t = no(n);

  function n() {
    return _classCallCheck(this, n), t.apply(this, arguments);
  }

  return _createClass(n, [{
    key: "isValid",
    get: function () {
      return !!this.state.isValid;
    }
  }, {
    key: "formatProps",
    value: function (e) {
      var t,
          r,
          a = e.countryCode || (null === (t = e.data) || void 0 === t || null === (r = t.billingAddress) || void 0 === r ? void 0 : r.countryCode);
      return to(to({}, e), {}, {
        allowedCountries: [a],
        visibility: to(to({}, n.defaultProps.visibility), e.visibility),
        data: to(to({}, e.data), {}, {
          billingAddress: to(to({}, e.data.billingAddress), {}, {
            country: a
          }),
          deliveryAddress: to(to({}, e.data.deliveryAddress), {}, {
            country: a
          })
        })
      });
    }
  }, {
    key: "formatData",
    value: function () {
      var e = this.state.data,
          t = void 0 === e ? {} : e,
          n = t.companyDetails,
          r = void 0 === n ? {} : n,
          a = t.personalDetails,
          o = void 0 === a ? {} : a,
          i = t.billingAddress,
          l = t.deliveryAddress,
          s = t.bankAccount;
      return to(to(to(to(to({
        paymentMethod: {
          type: this.constructor.type
        }
      }, o), r), s && {
        bankAccount: {
          iban: s.ibanNumber,
          ownerName: s.ownerName,
          countryCode: s.countryCode
        }
      }), i && {
        billingAddress: i
      }), (l || i) && {
        deliveryAddress: l || i
      });
    }
  }, {
    key: "render",
    value: function () {
      var e = this;
      return h(Xa, {
        i18n: this.props.i18n,
        loadingContext: this.props.loadingContext
      }, h(Ja, _extends({
        ref: function (t) {
          e.componentRef = t;
        }
      }, this.props, this.state, {
        onChange: this.setState,
        onSubmit: this.submit,
        payButton: this.payButton
      })));
    }
  }]), n;
}();

function ao(e) {
  var t = Pt().i18n,
      n = t.get("paymentConditions"),
      r = t.get("afterPay.agreement").split("%@"),
      a = _slicedToArray(r, 2),
      o = a[0],
      i = a[1];
  return o && i ? h(p, null, o, h("a", {
    className: "adyen-checkout__link",
    target: "_blank",
    rel: "noopener noreferrer",
    href: e.url
  }, n), i) : h("span", {
    className: "adyen-checkout__checkbox__label"
  }, t.get("privacyPolicy"));
}

_defineProperty(ro, "defaultProps", {
  onChange: function () {},
  data: {
    companyDetails: {},
    personalDetails: {},
    billingAddress: {},
    deliveryAddress: {},
    bankAccount: {}
  },
  visibility: {
    companyDetails: "hidden",
    personalDetails: "editable",
    billingAddress: "editable",
    deliveryAddress: "editable",
    bankAccount: "hidden"
  }
});
var oo = ["BE", "NL"];

function io(e, t) {
  var n;
  return "en" === (null == t ? void 0 : G(n = t.toLowerCase()).call(n, 0, 2)) ? "https://www.afterpay.nl/en/algemeen/pay-with-afterpay/payment-conditions" : "be" === (null == e ? void 0 : e.toLowerCase()) ? "https://www.afterpay.be/be/footer/betalen-met-afterpay/betalingsvoorwaarden" : "https://www.afterpay.nl/nl/algemeen/betalen-met-afterpay/betalingsvoorwaarden";
}

function lo(e, t) {
  var o = n$1(e);

  if (r$1) {
    var i = r$1(e);
    t && (i = f$1(i).call(i, function (t) {
      return a$1(e, t).enumerable;
    })), o.push.apply(o, i);
  }

  return o;
}

function so(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n,
        r,
        s = null != arguments[t] ? arguments[t] : {};
    t % 2 ? p$1(n = lo(Object(s), !0)).call(n, function (t) {
      _defineProperty(e, t, s[t]);
    }) : o$1 ? i(e, o$1(s)) : p$1(r = lo(Object(s))).call(r, function (t) {
      l$1(e, t, a$1(s, t));
    });
  }

  return e;
}

function co(e) {
  var t = function () {
    if ("undefined" == typeof Reflect || !S) return !1;
    if (S.sham) return !1;
    if ("function" == typeof Proxy) return !0;

    try {
      return Boolean.prototype.valueOf.call(S(Boolean, [], function () {})), !0;
    } catch (e) {
      return !1;
    }
  }();

  return function () {
    var n,
        r = _getPrototypeOf(e);

    if (t) {
      var a = _getPrototypeOf(this).constructor;
      n = S(r, arguments, a);
    } else n = r.apply(this, arguments);

    return _possibleConstructorReturn(this, n);
  };
}

var uo = function (e) {
  _inherits(n, ro);
  var t = co(n);

  function n() {
    return _classCallCheck(this, n), t.apply(this, arguments);
  }

  return _createClass(n, [{
    key: "formatProps",
    value: function (e) {
      var t;
      return so(so({}, _get(_getPrototypeOf(n.prototype), "formatProps", this).call(this, e)), {}, {
        allowedCountries: e.countryCode ? [e.countryCode] : oo,
        consentCheckboxLabel: h(ao, {
          url: io(e.countryCode, null === (t = e.i18n) || void 0 === t ? void 0 : t.locale)
        })
      });
    }
  }]), n;
}();

function po(e, t) {
  var o = n$1(e);

  if (r$1) {
    var i = r$1(e);
    t && (i = f$1(i).call(i, function (t) {
      return a$1(e, t).enumerable;
    })), o.push.apply(o, i);
  }

  return o;
}

function fo(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n,
        r,
        s = null != arguments[t] ? arguments[t] : {};
    t % 2 ? p$1(n = po(Object(s), !0)).call(n, function (t) {
      _defineProperty(e, t, s[t]);
    }) : o$1 ? i(e, o$1(s)) : p$1(r = po(Object(s))).call(r, function (t) {
      l$1(e, t, a$1(s, t));
    });
  }

  return e;
}

function ho(e) {
  var t = function () {
    if ("undefined" == typeof Reflect || !S) return !1;
    if (S.sham) return !1;
    if ("function" == typeof Proxy) return !0;

    try {
      return Boolean.prototype.valueOf.call(S(Boolean, [], function () {})), !0;
    } catch (e) {
      return !1;
    }
  }();

  return function () {
    var n,
        r = _getPrototypeOf(e);

    if (t) {
      var a = _getPrototypeOf(this).constructor;
      n = S(r, arguments, a);
    } else n = r.apply(this, arguments);

    return _possibleConstructorReturn(this, n);
  };
}

_defineProperty(uo, "type", "afterpay_default");

var yo = function (e) {
  _inherits(n, ro);
  var t = ho(n);

  function n() {
    return _classCallCheck(this, n), t.apply(this, arguments);
  }

  return _createClass(n, [{
    key: "formatProps",
    value: function (e) {
      return fo(fo({}, _get(_getPrototypeOf(n.prototype), "formatProps", this).call(this, e)), {}, {
        allowedCountries: e.countryCode ? [e.countryCode] : oo,
        consentCheckboxLabel: h(ao, {
          url: "https://www.afterpay.nl/nl/algemeen/zakelijke-partners/betalingsvoorwaarden-zakelijk"
        })
      });
    }
  }]), n;
}();

function mo() {
  var e = He(window, "screen.colorDepth") || "",
      t = !!He(window, "navigator.javaEnabled") && window.navigator.javaEnabled(),
      n = He(window, "screen.height") || "",
      r = He(window, "screen.width") || "",
      a = He(window, "navigator.userAgent") || "";
  return {
    acceptHeader: "*/*",
    colorDepth: e,
    language: He(window, "navigator.language") || He(window, "navigator.browserLanguage") || "en",
    javaEnabled: t,
    screenHeight: n,
    screenWidth: r,
    userAgent: a,
    timeZoneOffset: new Date().getTimezoneOffset()
  };
}

_defineProperty(yo, "type", "afterpay_b2b"), _defineProperty(yo, "defaultProps", {
  onChange: function () {},
  data: {
    companyDetails: {},
    personalDetails: {},
    billingAddress: {},
    deliveryAddress: {}
  },
  visibility: {
    companyDetails: "editable",
    personalDetails: "editable",
    billingAddress: "editable",
    deliveryAddress: "editable"
  }
});
var vo = {
  EU: "EUR",
  UK: "GBP",
  US: "USD"
},
    go = ["en_GB", "de_DE", "fr_FR", "it_IT", "es_ES"],
    bo = ["en_US"];

function _o(e, t) {
  var o = n$1(e);

  if (r$1) {
    var i = r$1(e);
    t && (i = f$1(i).call(i, function (t) {
      return a$1(e, t).enumerable;
    })), o.push.apply(o, i);
  }

  return o;
}

function Co(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n,
        r,
        s = null != arguments[t] ? arguments[t] : {};
    t % 2 ? p$1(n = _o(Object(s), !0)).call(n, function (t) {
      _defineProperty(e, t, s[t]);
    }) : o$1 ? i(e, o$1(s)) : p$1(r = _o(Object(s))).call(r, function (t) {
      l$1(e, t, a$1(s, t));
    });
  }

  return e;
}

function ko(e, t) {
  var n = function (e) {
    return "US" === e ? bo : go;
  }(t),
      r = h$1(n).call(n, e) ? e : function (e) {
    return "US" === e ? "en_US" : "en_GB";
  }(t);

  return r;
}

function No(e) {
  return "noTagline" === e ? "C0001" : null;
}

function wo(e) {
  var t = e.addressDetails,
      n = e.cancelUrl,
      r = e.checkoutMode,
      a = e.deliverySpecifications,
      o = e.returnUrl,
      i = e.merchantMetadata,
      l = e.chargePermissionType,
      s = e.recurringMetadata,
      c = e.configuration.storeId,
      u = "ProcessOrder" === r,
      d = u ? function (e) {
    return {
      amount: String(Le(e.value, e.currency)),
      currencyCode: e.currency
    };
  }(e.amount) : null;
  return Co(Co(Co(Co(Co({
    storeId: c,
    chargePermissionType: l,
    webCheckoutDetails: Co(Co(Co({}, u ? {
      checkoutResultReturnUrl: o
    } : {
      checkoutReviewReturnUrl: o
    }), n && {
      checkoutCancelUrl: n
    }), u && {
      checkoutMode: r
    })
  }, u && {
    paymentDetails: {
      chargeAmount: d,
      paymentIntent: "Confirm",
      presentmentCurrency: d.currencyCode,
      totalOrderAmount: d
    }
  }), s && {
    recurringMetadata: s
  }), i && {
    merchantMetadata: i
  }), a && {
    deliverySpecifications: a
  }), t && {
    addressDetails: t
  });
}

function So(e, t, n) {
  var r;
  return _a({
    loadingContext: e,
    path: y$1(r = "".concat("v1/AmazonPayUtility/getCheckoutDetails", "?clientKey=")).call(r, t)
  }, n);
}

function xo(e, t) {
  var o = n$1(e);

  if (r$1) {
    var i = r$1(e);
    t && (i = f$1(i).call(i, function (t) {
      return a$1(e, t).enumerable;
    })), o.push.apply(o, i);
  }

  return o;
}

function Po(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n,
        r,
        s = null != arguments[t] ? arguments[t] : {};
    t % 2 ? p$1(n = xo(Object(s), !0)).call(n, function (t) {
      _defineProperty(e, t, s[t]);
    }) : o$1 ? i(e, o$1(s)) : p$1(r = xo(Object(s))).call(r, function (t) {
      l$1(e, t, a$1(s, t));
    });
  }

  return e;
}

function Fo(e) {
  var t = this,
      n = Pt().loadingContext,
      r = e.amazonRef,
      a = e.configuration,
      o = void 0 === a ? {} : a,
      i = ft(null),
      l = _slicedToArray(i, 2),
      s = l[0],
      c = l[1],
      u = wo(e),
      d = function (e) {
    var t;
    return Co(Co(Co({}, e.buttonColor && {
      buttonColor: e.buttonColor
    }), e.design && {
      design: No(e.design)
    }), {}, {
      checkoutLanguage: ko(e.locale, e.region),
      ledgerCurrency: vo[e.configuration.region] || e.currency || (null === (t = e.amount) || void 0 === t ? void 0 : t.currency),
      merchantId: e.configuration.merchantId,
      productType: e.productType,
      placement: e.placement,
      sandbox: "TEST" === e.environment
    });
  }(e),
      p = function () {
    new v$1(e.onClick).then(t.initCheckout).catch(function (n) {
      e.onError && e.onError(n, t.componentRef);
    });
  };

  return this.initCheckout = function () {
    var e = {
      payloadJSON: W(u),
      publicKeyId: o.publicKeyId,
      signature: s
    };
    r.Pay.initCheckout(Po(Po({}, d), {}, {
      createCheckoutSessionConfig: e
    }));
  }, yt(function () {
    var a = e.clientKey;
    (function (e, t, n) {
      var r;
      return _a({
        loadingContext: e,
        path: y$1(r = "".concat("v1/AmazonPayUtility/signString", "?clientKey=")).call(r, t)
      }, {
        stringToSign: W(n)
      });
    })(n, a, u).then(function (t) {
      if (null == t || !t.signature) return console.error("Could not get AmazonPay signature");
      c(t.signature), e.showPayButton && r.Pay.renderButton("#amazonPayButton", d).onClick(p);
    }).catch(function (n) {
      console.error(n), e.onError && e.onError(n, t.componentRef);
    });
  }, []), e.showPayButton ? h("div", {
    className: "adyen-checkout__amazonpay__button",
    id: "amazonPayButton"
  }) : null;
}

function Ao(e) {
  var t = Pt().i18n,
      n = e.amazonRef,
      r = e.amazonCheckoutSessionId;
  return yt(function () {
    var e = {
      amazonCheckoutSessionId: r,
      changeAction: "changeAddress"
    };
    n.Pay.bindChangeAction(".adyen-checkout__amazonpay__button--changeAddress", e);
  }, []), h("button", {
    type: "button",
    className: "adyen-checkout__button adyen-checkout__button--ghost adyen-checkout__amazonpay__button--changeAddress"
  }, t.get("amazonpay.changePaymentDetails"));
}

function Bo(e) {
  var t = this,
      n = Pt(),
      r = n.i18n,
      a = n.loadingContext;
  return this.createOrder = function () {
    var n = e.amazonCheckoutSessionId,
        r = e.amount,
        o = e.clientKey,
        i = e.chargePermissionType,
        l = e.publicKeyId,
        s = e.region,
        c = e.recurringMetadata,
        u = e.returnUrl;
    (function (e, t, n) {
      var r;
      return _a({
        loadingContext: e,
        path: y$1(r = "".concat("v1/AmazonPayUtility/updateCheckoutSession", "?clientKey=")).call(r, t)
      }, n);
    })(a, o, {
      amount: r,
      chargePermissionType: i,
      checkoutResultReturnUrl: u,
      checkoutSessionId: n,
      publicKeyId: l,
      recurringMetadata: c,
      region: s
    }).then(function (e) {
      var t;
      if (null == e || null === (t = e.action) || void 0 === t || !t.type) return console.error(e.errorMessage || "Could not get the AmazonPay URL");
      "redirect" === e.action.type && window.location.assign(e.action.url);
    }).catch(function (n) {
      e.onError && e.onError(n, t.componentRef);
    });
  }, h(At, {
    classNameModifiers: ["standalone", "pay"],
    label: r.get("confirmPurchase"),
    onClick: this.createOrder
  });
}

function Eo(e) {
  var t = Pt().i18n;
  return h("button", {
    type: "button",
    className: "adyen-checkout__button  adyen-checkout__button--ghost adyen-checkout__amazonpay__button--signOut",
    onClick: function () {
      new v$1(e.onSignOut).then(function () {
        e.amazonRef.Pay.signout();
      }).catch(console.error);
    }
  }, t.get("amazonpay.signout"));
}

var Ro = _createClass(function e(t) {
  var n = this,
      r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "body",
      a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
      o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
  _classCallCheck(this, e), _defineProperty(this, "script", void 0), _defineProperty(this, "src", void 0), _defineProperty(this, "node", void 0), _defineProperty(this, "attributes", void 0), _defineProperty(this, "dataAttributes", void 0), _defineProperty(this, "load", function () {
    return new v$1(function (e, t) {
      de(n.script, n.attributes), de(n.script.dataset, n.dataAttributes), n.script.src = n.src, n.script.async = !0, n.script.onload = function (t) {
        n.script.setAttribute("data-script-loaded", "true"), e(t);
      }, n.script.onerror = function () {
        n.remove(), t(new Error("Unable to load script ".concat(n.src)));
      };
      var r = document.querySelector(n.node),
          a = r.querySelector('script[src="'.concat(n.src, '"]'));
      a ? a.getAttribute("data-script-loaded") ? e(!0) : a.addEventListener("load", e) : r.appendChild(n.script);
    });
  }), _defineProperty(this, "remove", function () {
    return n.script.parentNode && n.script.parentNode.removeChild(n.script);
  }), this.script = document.createElement("script"), this.src = t, this.node = r, this.attributes = a, this.dataAttributes = o;
});

function Oo(e) {
  var t,
      n,
      r = ft("pending"),
      a = _slicedToArray(r, 2),
      o = a[0],
      i = a[1],
      l = vt(null),
      s = vt(null),
      c = function () {
    i("ready");
  };

  return this.submit = function () {
    return l.current && l.current.initCheckout ? l.current.initCheckout() : s.current && s.current.createOrder ? s.current.createOrder() : void 0;
  }, yt(function () {
    var t = "US" === e.configuration.region ? "https://static-na.payments-amazon.com/checkout.js" : "https://static-eu.payments-amazon.com/checkout.js",
        n = new Ro(t);
    return window.amazon ? c() : n.load().then(c), function () {
      n.remove();
    };
  }, []), "pending" === o ? h("div", {
    className: "adyen-checkout__amazonpay"
  }, h("div", {
    className: "adyen-checkout__amazonpay__status adyen-checkout__amazonpay__status--pending"
  }, h(at, null))) : e.showSignOutButton ? h("div", {
    className: "adyen-checkout__amazonpay"
  }, h(Eo, {
    amazonRef: window.amazon,
    onSignOut: e.onSignOut
  })) : e.amazonCheckoutSessionId ? h("div", {
    className: "adyen-checkout__amazonpay"
  }, e.showOrderButton && h(Bo, {
    amazonCheckoutSessionId: e.amazonCheckoutSessionId,
    amount: e.amount,
    chargePermissionType: e.chargePermissionType,
    recurringMetadata: e.recurringMetadata,
    clientKey: e.clientKey,
    onError: e.onError,
    publicKeyId: null === (t = e.configuration) || void 0 === t ? void 0 : t.publicKeyId,
    region: null === (n = e.configuration) || void 0 === n ? void 0 : n.region,
    returnUrl: e.returnUrl,
    ref: s
  }), e.showChangePaymentDetailsButton && h(Ao, {
    amazonCheckoutSessionId: e.amazonCheckoutSessionId,
    amazonRef: window.amazon
  })) : h("div", {
    className: "adyen-checkout__amazonpay"
  }, h(Fo, _extends({}, e, {
    amazonRef: window.amazon,
    ref: l
  })));
}

var Do = {
  cancelUrl: "undefined" != typeof window ? window.location.href : "",
  configuration: {},
  environment: "TEST",
  locale: "en_GB",
  placement: "Cart",
  productType: "PayAndShip",
  region: "EU",
  returnUrl: "undefined" != typeof window ? window.location.href : "",
  showOrderButton: !0,
  showChangePaymentDetailsButton: !1,
  showSignOutButton: !1,
  showPayButton: !0,
  onClick: function (e) {
    return e();
  },
  onSignOut: function (e) {
    return e();
  }
};

function Mo(e, t) {
  var o = n$1(e);

  if (r$1) {
    var i = r$1(e);
    t && (i = f$1(i).call(i, function (t) {
      return a$1(e, t).enumerable;
    })), o.push.apply(o, i);
  }

  return o;
}

function To(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n,
        r,
        s = null != arguments[t] ? arguments[t] : {};
    t % 2 ? p$1(n = Mo(Object(s), !0)).call(n, function (t) {
      _defineProperty(e, t, s[t]);
    }) : o$1 ? i(e, o$1(s)) : p$1(r = Mo(Object(s))).call(r, function (t) {
      l$1(e, t, a$1(s, t));
    });
  }

  return e;
}

function Io(e) {
  var t = function () {
    if ("undefined" == typeof Reflect || !S) return !1;
    if (S.sham) return !1;
    if ("function" == typeof Proxy) return !0;

    try {
      return Boolean.prototype.valueOf.call(S(Boolean, [], function () {})), !0;
    } catch (e) {
      return !1;
    }
  }();

  return function () {
    var n,
        r = _getPrototypeOf(e);

    if (t) {
      var a = _getPrototypeOf(this).constructor;
      n = S(r, arguments, a);
    } else n = r.apply(this, arguments);

    return _possibleConstructorReturn(this, n);
  };
}

var jo = function (e) {
  _inherits(n, Lt);
  var t = Io(n);

  function n() {
    return _classCallCheck(this, n), t.apply(this, arguments);
  }

  return _createClass(n, [{
    key: "formatProps",
    value: function (e) {
      return To(To({}, e), {}, {
        checkoutMode: e.isDropin ? "ProcessOrder" : e.checkoutMode,
        environment: e.environment.toUpperCase(),
        locale: e.locale.replace("-", "_"),
        productType: e.isDropin && !e.addressDetails ? "PayOnly" : e.productType
      });
    }
  }, {
    key: "formatData",
    value: function () {
      var e = this.props.amazonCheckoutSessionId;
      return {
        paymentMethod: To({
          type: n.type
        }, e && {
          checkoutSessionId: e
        }),
        browserInfo: this.browserInfo
      };
    }
  }, {
    key: "getShopperDetails",
    value: function () {
      var e = this.props,
          t = e.amazonCheckoutSessionId,
          n = e.configuration,
          r = void 0 === n ? {} : n,
          a = e.loadingContext,
          o = e.clientKey;
      return t ? So(a, o, {
        checkoutSessionId: t,
        getDeliveryAddress: !0,
        publicKeyId: r.publicKeyId,
        region: r.region
      }) : console.error("Could not shopper details. Missing checkoutSessionId.");
    }
  }, {
    key: "handleDeclineFlow",
    value: function () {
      var e = this,
          t = this.props,
          n = t.amazonCheckoutSessionId,
          r = t.configuration,
          a = void 0 === r ? {} : r,
          o = t.loadingContext,
          i = t.clientKey;
      if (!n) return console.error("Could handle the decline flow. Missing checkoutSessionId.");
      So(o, i, {
        checkoutSessionId: n,
        getDeclineFlowUrl: !0,
        publicKeyId: a.publicKeyId,
        region: a.region
      }).then(function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if (null == e || !e.declineFlowUrl) throw e;
        window.location.assign(e.declineFlowUrl);
      }).catch(function (t) {
        e.props.onError && e.props.onError(t, e.componentRef);
      });
    }
  }, {
    key: "isValid",
    get: function () {
      return !0;
    }
  }, {
    key: "browserInfo",
    get: function () {
      return mo();
    }
  }, {
    key: "submit",
    value: function () {
      var e = this.data,
          t = this.isValid,
          n = this.props.onSubmit,
          r = void 0 === n ? function () {} : n;
      return this.componentRef && this.componentRef.submit ? this.componentRef.submit() : r({
        data: e,
        isValid: t
      }, this);
    }
  }, {
    key: "render",
    value: function () {
      var e = this;
      return h(Xa, {
        i18n: this.props.i18n,
        loadingContext: this.props.loadingContext
      }, h(Oo, _extends({
        ref: function (t) {
          e.componentRef = t;
        }
      }, this.props)));
    }
  }]), n;
}();

_defineProperty(jo, "type", "amazonpay"), _defineProperty(jo, "defaultProps", Do);
var Vo = {
  "apple-pay": "ApplePayButton-module_apple-pay__gYjuP",
  "apple-pay-button": "ApplePayButton-module_apple-pay-button__l5g-d",
  "apple-pay-button-black": "ApplePayButton-module_apple-pay-button-black__istwW",
  "apple-pay-button-white": "ApplePayButton-module_apple-pay-button-white__-wLaE",
  "apple-pay-button-white-with-line": "ApplePayButton-module_apple-pay-button-white-with-line__MlRq7",
  "apple-pay-button--type-plain": "ApplePayButton-module_apple-pay-button--type-plain__ycfNl",
  "apple-pay-button--type-buy": "ApplePayButton-module_apple-pay-button--type-buy__9m8AB",
  "apple-pay-button--type-donate": "ApplePayButton-module_apple-pay-button--type-donate__HmRdK",
  "apple-pay-button--type-check-out": "ApplePayButton-module_apple-pay-button--type-check-out__XdGWd",
  "apple-pay-button--type-book": "ApplePayButton-module_apple-pay-button--type-book__-v-VY",
  "apple-pay-button--type-subscribe": "ApplePayButton-module_apple-pay-button--type-subscribe__WxWIF",
  "apple-pay-button--type-add-money": "ApplePayButton-module_apple-pay-button--type-add-money__zeBA8",
  "apple-pay-button--type-contribute": "ApplePayButton-module_apple-pay-button--type-contribute__G3E8e",
  "apple-pay-button--type-order": "ApplePayButton-module_apple-pay-button--type-order__ggI6j",
  "apple-pay-button--type-reload": "ApplePayButton-module_apple-pay-button--type-reload__QbgLd",
  "apple-pay-button--type-rent": "ApplePayButton-module_apple-pay-button--type-rent__VzC-E",
  "apple-pay-button--type-support": "ApplePayButton-module_apple-pay-button--type-support__6EjmY",
  "apple-pay-button--type-tip": "ApplePayButton-module_apple-pay-button--type-tip__bdzGK",
  "apple-pay-button--type-top-up": "ApplePayButton-module_apple-pay-button--type-top-up__Eb3qR"
};

function Lo(e) {
  var t = function () {
    if ("undefined" == typeof Reflect || !S) return !1;
    if (S.sham) return !1;
    if ("function" == typeof Proxy) return !0;

    try {
      return Boolean.prototype.valueOf.call(S(Boolean, [], function () {})), !0;
    } catch (e) {
      return !1;
    }
  }();

  return function () {
    var n,
        r = _getPrototypeOf(e);

    if (t) {
      var a = _getPrototypeOf(this).constructor;
      n = S(r, arguments, a);
    } else n = r.apply(this, arguments);

    return _possibleConstructorReturn(this, n);
  };
}

var Uo = function (e) {
  _inherits(n, d);
  var t = Lo(n);

  function n() {
    return _classCallCheck(this, n), t.apply(this, arguments);
  }

  return _createClass(n, [{
    key: "render",
    value: function (e) {
      var t = e.buttonColor,
          n = e.buttonType;
      return h("button", {
        type: "button",
        "aria-label": this.props.i18n.get("payButton"),
        lang: this.props.i18n.languageCode,
        className: H("adyen-checkout__applepay__button", "adyen-checkout__applepay__button--".concat(t), "adyen-checkout__applepay__button--".concat(n), [Vo["apple-pay"]], [Vo["apple-pay-button"]], [Vo["apple-pay-button-".concat(t)]], [Vo["apple-pay-button--type-".concat(n)]]),
        onClick: this.props.onClick
      });
    }
  }]), n;
}();

_defineProperty(Uo, "defaultProps", {
  onClick: function () {},
  buttonColor: "black",
  buttonType: "plain"
});

var qo = function () {
  function e(t, n) {
    var r = this;
    _classCallCheck(this, e), _defineProperty(this, "session", void 0), this.session = new ApplePaySession(n.version, t), this.session.onvalidatemerchant = function (e) {
      return r.onvalidatemerchant(e, n.onValidateMerchant);
    }, this.session.onpaymentauthorized = function (e) {
      return r.onpaymentauthorized(e, n.onPaymentAuthorized);
    }, this.session.oncancel = function (e) {
      return r.oncancel(e, n.onCancel);
    }, "function" == typeof n.onPaymentMethodSelected && (this.session.onpaymentmethodselected = function (e) {
      return r.onpaymentmethodselected(e, n.onPaymentMethodSelected);
    }), "function" == typeof n.onShippingContactSelected && (this.session.onshippingcontactselected = function (e) {
      return r.onshippingcontactselected(e, n.onShippingContactSelected);
    }), "function" == typeof n.onShippingMethodSelected && (this.session.onshippingmethodselected = function (e) {
      return r.onshippingmethodselected(e, n.onShippingMethodSelected);
    });
  }

  return _createClass(e, [{
    key: "begin",
    value: function () {
      return this.session.begin();
    }
  }, {
    key: "onvalidatemerchant",
    value: function (e, t) {
      var n = this;
      new v$1(function (n, r) {
        return t(n, r, e.validationURL);
      }).then(function (e) {
        n.session.completeMerchantValidation(e);
      }).catch(function (e) {
        console.error(e), n.session.abort();
      });
    }
  }, {
    key: "onpaymentauthorized",
    value: function (e, t) {
      var n = this;
      return new v$1(function (n, r) {
        return t(n, r, e);
      }).then(function () {
        n.session.completePayment(ApplePaySession.STATUS_SUCCESS);
      }).catch(function () {
        n.session.completePayment(ApplePaySession.STATUS_FAILURE);
      });
    }
  }, {
    key: "onpaymentmethodselected",
    value: function (e, t) {
      var n = this;
      return new v$1(function (n, r) {
        return t(n, r, e);
      }).then(function (e) {
        n.session.completePaymentMethodSelection(e);
      }).catch(function (e) {
        n.session.completePaymentMethodSelection(e);
      });
    }
  }, {
    key: "onshippingcontactselected",
    value: function (e, t) {
      var n = this;
      return new v$1(function (n, r) {
        return t(n, r, e);
      }).then(function (e) {
        n.session.completeShippingContactSelection(e);
      }).catch(function (e) {
        n.session.completeShippingContactSelection(e);
      });
    }
  }, {
    key: "onshippingmethodselected",
    value: function (e, t) {
      var n = this;
      return new v$1(function (n, r) {
        return t(n, r, e);
      }).then(function (e) {
        n.session.completeShippingMethodSelection(e);
      }).catch(function (e) {
        n.session.completeShippingMethodSelection(e);
      });
    }
  }, {
    key: "oncancel",
    value: function (e, t) {
      return t(e);
    }
  }]), e;
}(),
    Ko = {
  amount: {
    currency: "USD",
    value: 0
  },
  countryCode: "US",
  totalPriceStatus: "final",
  totalPriceLabel: void 0,
  configuration: {
    merchantName: "",
    merchantId: ""
  },
  initiative: "web",
  lineItems: void 0,
  merchantCapabilities: ["supports3DS"],
  shippingMethods: void 0,
  shippingType: void 0,
  supportedCountries: void 0,
  supportedNetworks: ["amex", "discover", "masterCard", "visa"],
  requiredBillingContactFields: void 0,
  requiredShippingContactFields: void 0,
  billingContact: void 0,
  shippingContact: void 0,
  applicationData: void 0,
  onClick: function (e) {
    return e();
  },
  onAuthorized: function (e) {
    return e();
  },
  onPaymentMethodSelected: null,
  onShippingContactSelected: null,
  onShippingMethodSelected: null,
  buttonType: "plain",
  buttonColor: "black",
  showPayButton: !0
},
    Ho = ["countryCode", "companyName", "amount"],
    zo = function (e) {
  var t = e.countryCode;
  e.companyName;

  var n = e.amount,
      r = _objectWithoutProperties(e, Ho),
      a = function (e) {
    return String(Le(e.value, e.currency));
  }(n);

  return {
    countryCode: t,
    currencyCode: n.currency,
    total: {
      label: r.totalPriceLabel,
      amount: a,
      type: r.totalPriceStatus
    },
    lineItems: r.lineItems,
    shippingMethods: r.shippingMethods,
    shippingType: r.shippingType,
    merchantCapabilities: r.merchantCapabilities,
    supportedCountries: r.supportedCountries,
    supportedNetworks: r.supportedNetworks,
    requiredShippingContactFields: r.requiredShippingContactFields,
    requiredBillingContactFields: r.requiredBillingContactFields,
    billingContact: r.billingContact,
    shippingContact: r.shippingContact,
    applicationData: r.applicationData
  };
};

function Wo(e, t) {
  var o = n$1(e);

  if (r$1) {
    var i = r$1(e);
    t && (i = f$1(i).call(i, function (t) {
      return a$1(e, t).enumerable;
    })), o.push.apply(o, i);
  }

  return o;
}

function Go(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n,
        r,
        s = null != arguments[t] ? arguments[t] : {};
    t % 2 ? p$1(n = Wo(Object(s), !0)).call(n, function (t) {
      _defineProperty(e, t, s[t]);
    }) : o$1 ? i(e, o$1(s)) : p$1(r = Wo(Object(s))).call(r, function (t) {
      l$1(e, t, a$1(s, t));
    });
  }

  return e;
}

function Yo(e) {
  var t = function () {
    if ("undefined" == typeof Reflect || !S) return !1;
    if (S.sham) return !1;
    if ("function" == typeof Proxy) return !0;

    try {
      return Boolean.prototype.valueOf.call(S(Boolean, [], function () {})), !0;
    } catch (e) {
      return !1;
    }
  }();

  return function () {
    var n,
        r = _getPrototypeOf(e);

    if (t) {
      var a = _getPrototypeOf(this).constructor;
      n = S(r, arguments, a);
    } else n = r.apply(this, arguments);

    return _possibleConstructorReturn(this, n);
  };
}

var $o = function (n) {
  _inherits(o, Lt);
  var r,
      a = Yo(o);

  function o(e) {
    var t, n, r, i;
    return _classCallCheck(this, o), (i = a.call(this, e)).startSession = m$1(t = i.startSession).call(t, _assertThisInitialized(i)), i.submit = m$1(n = i.submit).call(n, _assertThisInitialized(i)), i.validateMerchant = m$1(r = i.validateMerchant).call(r, _assertThisInitialized(i)), i;
  }

  return _createClass(o, [{
    key: "formatProps",
    value: function (e) {
      var t,
          n,
          r,
          a,
          o = this,
          i = e.version || function (e) {
        for (var t = [], n = e; n > 0; n--) t.push(n);

        return g$1(t).call(t, function (e) {
          return e && window.ApplePaySession && ApplePaySession.supportsVersion(e);
        });
      }(11),
          l = null !== (t = e.brands) && void 0 !== t && t.length ? (r = e.brands, a = {
        mc: "masterCard",
        amex: "amex",
        visa: "visa",
        elodebit: "elo",
        elo: "elo",
        interac: "interac",
        discover: "discover",
        jcb: "jcb",
        electron: "electron",
        maestro: "maestro",
        girocard: "girocard",
        cartebancaire: "cartesBancaires"
      }, k$1(r).call(r, function (e, t) {
        return a[t] && !h$1(e).call(e, a[t]) && e.push(a[t]), e;
      }, [])) : e.supportedNetworks;

      return Go(Go({}, e), {}, {
        configuration: e.configuration,
        supportedNetworks: l,
        version: i,
        totalPriceLabel: e.totalPriceLabel || (null === (n = e.configuration) || void 0 === n ? void 0 : n.merchantName),
        onCancel: function (e) {
          return o.handleError(new Mt("CANCEL", e));
        }
      });
    }
  }, {
    key: "formatData",
    value: function () {
      return {
        paymentMethod: Go({
          type: o.type
        }, this.state)
      };
    }
  }, {
    key: "submit",
    value: function () {
      return this.startSession(this.props.onAuthorized);
    }
  }, {
    key: "startSession",
    value: function (e) {
      var t = this,
          n = this.props,
          r = n.version,
          a = n.onValidateMerchant,
          i = n.onCancel,
          l = n.onPaymentMethodSelected,
          s = n.onShippingMethodSelected,
          c = n.onShippingContactSelected;
      return new v$1(function (e, n) {
        return t.props.onClick(e, n);
      }).then(function () {
        var n = zo(Go({
          companyName: t.props.configuration.merchantName
        }, t.props)),
            u = new qo(n, {
          version: r,
          onCancel: i,
          onPaymentMethodSelected: l,
          onShippingMethodSelected: s,
          onShippingContactSelected: c,
          onValidateMerchant: a || t.validateMerchant,
          onPaymentAuthorized: function (n, r, a) {
            a.payment.token && a.payment.token.paymentData && t.setState({
              applePayToken: btoa(W(a.payment.token.paymentData))
            }), _get(_getPrototypeOf(o.prototype), "submit", t).call(t), e(n, r, a);
          }
        });
        u.begin();
      });
    }
  }, {
    key: "validateMerchant",
    value: (r = _asyncToGenerator(regenerator.mark(function e(n, r) {
      var a, o, i, l, s, c, u, d, p, f, h, m, v, g, b;
      return regenerator.wrap(function (e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            return o = window.location.hostname, i = this.props, l = i.clientKey, s = i.configuration, c = i.loadingContext, u = i.initiative, d = s.merchantName, p = s.merchantId, f = y$1(a = "".concat("v1/applePay/sessions", "?clientKey=")).call(a, l), h = {
              loadingContext: c,
              path: f
            }, m = {
              displayName: d,
              domainName: o,
              initiative: u,
              merchantIdentifier: p
            }, e.prev = 6, e.next = 9, _a(h, m);

          case 9:
            v = e.sent, (g = tn.decode(v.data)) || r("Could not decode Apple Pay session"), b = JSON.parse(g), n(b), e.next = 19;
            break;

          case 16:
            e.prev = 16, e.t0 = e.catch(6), r("Could not get Apple Pay session");

          case 19:
          case "end":
            return e.stop();
        }
      }, e, this, [[6, 16]]);
    })), function (e, t) {
      return r.apply(this, arguments);
    })
  }, {
    key: "isValid",
    get: function () {
      return !0;
    }
  }, {
    key: "isAvailable",
    value: function () {
      return "https:" !== document.location.protocol ? v$1.reject(new Mt("IMPLEMENTATION_ERROR", "Trying to start an Apple Pay session from an insecure document")) : this.props.onValidateMerchant || this.props.clientKey ? window.ApplePaySession && ApplePaySession.canMakePayments() && ApplePaySession.supportsVersion(this.props.version) ? v$1.resolve(!0) : v$1.reject(new Mt("ERROR", "Apple Pay is not available on this device")) : v$1.reject(new Mt("IMPLEMENTATION_ERROR", "clientKey was not provided"));
    }
  }, {
    key: "render",
    value: function () {
      var e = this;
      return this.props.showPayButton ? h(Uo, {
        i18n: this.props.i18n,
        buttonColor: this.props.buttonColor,
        buttonType: this.props.buttonType,
        onClick: function (t) {
          t.preventDefault(), e.submit();
        }
      }) : null;
    }
  }]), o;
}();

function Zo(e, t) {
  var o = n$1(e);

  if (r$1) {
    var i = r$1(e);
    t && (i = f$1(i).call(i, function (t) {
      return a$1(e, t).enumerable;
    })), o.push.apply(o, i);
  }

  return o;
}

function Jo(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n,
        r,
        s = null != arguments[t] ? arguments[t] : {};
    t % 2 ? p$1(n = Zo(Object(s), !0)).call(n, function (t) {
      _defineProperty(e, t, s[t]);
    }) : o$1 ? i(e, o$1(s)) : p$1(r = Zo(Object(s))).call(r, function (t) {
      l$1(e, t, a$1(s, t));
    });
  }

  return e;
}

_defineProperty($o, "type", "applepay"), _defineProperty($o, "defaultProps", Ko);
var Qo = {
  labels: _defineProperty({}, kr, "address"),
  schema: [kr, [[Pr, 70], [wr, 30]]]
},
    Xo = ["ID", "PH", "TH", "VN", "JP", "TW", "KR", "SG", "MY", "HK"],
    ei = k$1(Br).call(Br, function (e, t) {
  return Jo(Jo({}, e), {}, _defineProperty({}, t, Qo));
}, {
  default: Qo
});

function ti(e, t) {
  var o = n$1(e);

  if (r$1) {
    var i = r$1(e);
    t && (i = f$1(i).call(i, function (t) {
      return a$1(e, t).enumerable;
    })), o.push.apply(o, i);
  }

  return o;
}

function ni(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n,
        r,
        s = null != arguments[t] ? arguments[t] : {};
    t % 2 ? p$1(n = ti(Object(s), !0)).call(n, function (t) {
      _defineProperty(e, t, s[t]);
    }) : o$1 ? i(e, o$1(s)) : p$1(r = ti(Object(s))).call(r, function (t) {
      l$1(e, t, a$1(s, t));
    });
  }

  return e;
}

function ri(e) {
  var t = function () {
    if ("undefined" == typeof Reflect || !S) return !1;
    if (S.sham) return !1;
    if ("function" == typeof Proxy) return !0;

    try {
      return Boolean.prototype.valueOf.call(S(Boolean, [], function () {})), !0;
    } catch (e) {
      return !1;
    }
  }();

  return function () {
    var n,
        r = _getPrototypeOf(e);

    if (t) {
      var a = _getPrototypeOf(this).constructor;
      n = S(r, arguments, a);
    } else n = r.apply(this, arguments);

    return _possibleConstructorReturn(this, n);
  };
}

var ai = function (e) {
  _inherits(n, ro);
  var t = ri(n);

  function n() {
    return _classCallCheck(this, n), t.apply(this, arguments);
  }

  return _createClass(n, [{
    key: "formatProps",
    value: function (e) {
      return ni(ni({}, _get(_getPrototypeOf(n.prototype), "formatProps", this).call(this, ni(ni({}, e), {
        visibility: {
          deliveryAddress: "hidden",
          companyDetails: "hidden"
        }
      }))), {}, {
        allowedCountries: Xo,
        personalDetailsRequiredFields: ["firstName", "lastName", "telephoneNumber"],
        billingAddressRequiredFields: ["country", "street", "postalCode"],
        billingAddressSpecification: ei
      });
    }
  }]), n;
}();

function oi(e) {
  var t = e.name,
      n = e.id,
      r = e.icon,
      a = e.onClick,
      o = e.selected,
      i = void 0 !== o && o;
  return h("button", {
    type: "button",
    className: H("adyen-checkout__issuer-button", {
      "adyen-checkout__issuer-button--selected": i
    }),
    "aria-label": t,
    "aria-pressed": i,
    onClick: a,
    value: n
  }, h("span", {
    className: "adyen-checkout__issuer-button-text"
  }, t), !!r && h(Mn, {
    className: "adyen-checkout__issuer-button-img",
    alt: t,
    src: r
  }));
}

_defineProperty(ai, "type", "atome");

var ii = function (e) {
  var t = e.items,
      n = void 0 === t ? [] : t,
      r = e.selectedIssuerId,
      a = e.onChange,
      o = Pt().i18n,
      i = bt(function (e) {
    var t = e.currentTarget.value;
    l$1(e.target, "value", {
      value: t
    }), a(e);
  }, [a]);
  return h("div", {
    className: "adyen-checkout__issuer-button-group",
    role: "group",
    "aria-label": o.get("idealIssuer.selectField.placeholder")
  }, K(n).call(n, function (e) {
    return h(oi, _extends({
      key: e.id
    }, e, {
      selected: r === e.id,
      onClick: i
    }));
  }));
};

function li(e) {
  var t = e.label,
      n = void 0 === t ? "qrCodeOrApp" : t,
      r = Pt().i18n;
  return h("div", {
    className: "adyen-checkout__field--issuer-list-separator"
  }, r.get(n));
}

var si = ["items", "placeholder", "issuer", "highlightedIds"];

function ci(e, t) {
  var o = n$1(e);

  if (r$1) {
    var i = r$1(e);
    t && (i = f$1(i).call(i, function (t) {
      return a$1(e, t).enumerable;
    })), o.push.apply(o, i);
  }

  return o;
}

var ui,
    di = function (e, t) {
  var n,
      r,
      a = e.issuer,
      o = e.items,
      i = null === (n = g$1(o).call(o, function (e) {
    return e.id === a;
  })) || void 0 === n ? void 0 : n.name;
  return a && i ? y$1(r = "".concat(t.get("continueTo"), " ")).call(r, i) : t.get("continue");
},
    pi = ["issuer"],
    fi = {
  issuer: {
    validate: function (e) {
      return !!e && e.length > 0;
    },
    modes: ["blur"]
  }
};

function hi(e) {
  var t,
      n = e.items,
      r = e.placeholder,
      s = void 0 === r ? "idealIssuer.selectField.placeholder" : r,
      c = e.issuer,
      u = e.highlightedIds,
      f = void 0 === u ? [] : u,
      m = _objectWithoutProperties(e, si),
      v = Pt().i18n,
      g = cr({
    schema: pi,
    defaultData: {
      issuer: c
    },
    rules: fi
  }),
      C = g.handleChangeFor,
      N = g.triggerValidation,
      w = g.data,
      S = g.valid,
      x = g.errors,
      P = g.isValid,
      F = ft("ready"),
      A = _slicedToArray(F, 2),
      B = A[0],
      E = A[1],
      O = ft(ui.Dropdown),
      D = _slicedToArray(O, 2),
      M = D[0],
      I = D[1];

  this.setStatus = function (e) {
    E(e);
  };

  var j = bt(function (e) {
    return function (t) {
      I(e), C("issuer")(t);
    };
  }, [C]);
  yt(function () {
    m.onChange({
      data: w,
      valid: S,
      errors: x,
      isValid: P
    });
  }, [w, S, x, P]), this.showValidation = function () {
    N();
  };
  var V = k$1(n).call(n, function (e, t) {
    return h$1(f).call(f, t.id) && e.highlightedItems.push(function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n,
            r,
            s = null != arguments[t] ? arguments[t] : {};
        t % 2 ? p$1(n = ci(Object(s), !0)).call(n, function (t) {
          _defineProperty(e, t, s[t]);
        }) : o$1 ? i(e, o$1(s)) : p$1(r = ci(Object(s))).call(r, function (t) {
          l$1(e, t, a$1(s, t));
        });
      }

      return e;
    }({}, t)), e;
  }, {
    highlightedItems: []
  }),
      L = V.highlightedItems;
  return h("div", {
    className: "adyen-checkout__issuer-list"
  }, !!L.length && h(p, null, h(ii, {
    selectedIssuerId: M === ui.ButtonGroup ? w.issuer : null,
    items: L,
    onChange: j(ui.ButtonGroup)
  }), h(li, null)), h(yn, {
    errorMessage: !!x.issuer,
    classNameModifiers: ["issuer-list"]
  }, Zn("select", {
    items: n,
    selected: M === ui.Dropdown ? w.issuer : null,
    placeholder: v.get(s),
    name: "issuer",
    className: "adyen-checkout__issuer-list__dropdown",
    onChange: j(ui.Dropdown)
  })), m.showPayButton && m.payButton({
    status: B,
    label: di({
      issuer: w.issuer,
      items: y$1(t = []).call(t, _toConsumableArray(n), _toConsumableArray(L))
    }, v)
  }));
}

function yi(e, t) {
  var o = n$1(e);

  if (r$1) {
    var i = r$1(e);
    t && (i = f$1(i).call(i, function (t) {
      return a$1(e, t).enumerable;
    })), o.push.apply(o, i);
  }

  return o;
}

!function (e) {
  e[e.ButtonGroup = 0] = "ButtonGroup", e[e.Dropdown = 1] = "Dropdown";
}(ui || (ui = {})), hi.defaultProps = {
  onChange: function () {}
};

var mi = function (e, t) {
  return function (n) {
    if (!n) return null;

    var r = function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n,
            r,
            s = null != arguments[t] ? arguments[t] : {};
        t % 2 ? p$1(n = yi(Object(s), !0)).call(n, function (t) {
          _defineProperty(e, t, s[t]);
        }) : o$1 ? i(e, o$1(s)) : p$1(r = yi(Object(s))).call(r, function (t) {
          l$1(e, t, a$1(s, t));
        });
      }

      return e;
    }({
      parentFolder: n ? "".concat(t, "/") : "",
      type: n || t
    }, e);

    return rt(r)(n);
  };
};

function vi(e, t) {
  var o = n$1(e);

  if (r$1) {
    var i = r$1(e);
    t && (i = f$1(i).call(i, function (t) {
      return a$1(e, t).enumerable;
    })), o.push.apply(o, i);
  }

  return o;
}

function gi(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n,
        r,
        s = null != arguments[t] ? arguments[t] : {};
    t % 2 ? p$1(n = vi(Object(s), !0)).call(n, function (t) {
      _defineProperty(e, t, s[t]);
    }) : o$1 ? i(e, o$1(s)) : p$1(r = vi(Object(s))).call(r, function (t) {
      l$1(e, t, a$1(s, t));
    });
  }

  return e;
}

function bi(e) {
  var t = function () {
    if ("undefined" == typeof Reflect || !S) return !1;
    if (S.sham) return !1;
    if ("function" == typeof Proxy) return !0;

    try {
      return Boolean.prototype.valueOf.call(S(Boolean, [], function () {})), !0;
    } catch (e) {
      return !1;
    }
  }();

  return function () {
    var n,
        r = _getPrototypeOf(e);

    if (t) {
      var a = _getPrototypeOf(this).constructor;
      n = S(r, arguments, a);
    } else n = r.apply(this, arguments);

    return _possibleConstructorReturn(this, n);
  };
}

var _i = function (e) {
  _inherits(n, Lt);
  var t = bi(n);

  function n(e) {
    var r;

    if (_classCallCheck(this, n), (r = t.call(this, e)).props.showImage) {
      var a,
          o = mi({
        loadingContext: r.props.loadingContext
      }, r.constructor.type);
      r.props.issuers = K(a = r.props.issuers).call(a, function (e) {
        return gi(gi({}, e), {}, {
          icon: o(e.id)
        });
      });
    }

    return r;
  }

  return _createClass(n, [{
    key: "formatProps",
    value: function (e) {
      var t,
          n = e.details && e.details.length && (g$1(t = e.details).call(t, function (e) {
        return "issuer" === e.key;
      }) || {}).items || e.issuers || [];
      return gi(gi({}, e), {}, {
        issuers: n
      });
    }
  }, {
    key: "formatData",
    value: function () {
      var e, t;
      return {
        paymentMethod: {
          type: this.constructor.type,
          issuer: null === (e = this.state) || void 0 === e || null === (t = e.data) || void 0 === t ? void 0 : t.issuer
        }
      };
    }
  }, {
    key: "isValid",
    get: function () {
      var e;
      return !(null === (e = this.state) || void 0 === e || !e.isValid);
    }
  }, {
    key: "render",
    value: function () {
      var e = this;
      return h(Xa, {
        i18n: this.props.i18n,
        loadingContext: this.props.loadingContext
      }, h(hi, _extends({
        ref: function (t) {
          e.componentRef = t;
        },
        items: this.props.issuers,
        highlightedIds: this.props.highlightedIssuers
      }, this.props, this.state, {
        onChange: this.setState,
        onSubmit: this.submit,
        payButton: this.payButton
      })));
    }
  }]), n;
}();

function Ci(e, t) {
  var o = n$1(e);

  if (r$1) {
    var i = r$1(e);
    t && (i = f$1(i).call(i, function (t) {
      return a$1(e, t).enumerable;
    })), o.push.apply(o, i);
  }

  return o;
}

function ki(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n,
        r,
        s = null != arguments[t] ? arguments[t] : {};
    t % 2 ? p$1(n = Ci(Object(s), !0)).call(n, function (t) {
      _defineProperty(e, t, s[t]);
    }) : o$1 ? i(e, o$1(s)) : p$1(r = Ci(Object(s))).call(r, function (t) {
      l$1(e, t, a$1(s, t));
    });
  }

  return e;
}

function Ni(e) {
  var t = function () {
    if ("undefined" == typeof Reflect || !S) return !1;
    if (S.sham) return !1;
    if ("function" == typeof Proxy) return !0;

    try {
      return Boolean.prototype.valueOf.call(S(Boolean, [], function () {})), !0;
    } catch (e) {
      return !1;
    }
  }();

  return function () {
    var n,
        r = _getPrototypeOf(e);

    if (t) {
      var a = _getPrototypeOf(this).constructor;
      n = S(r, arguments, a);
    } else n = r.apply(this, arguments);

    return _possibleConstructorReturn(this, n);
  };
}

_defineProperty(_i, "defaultProps", {
  showImage: !0,
  onValid: function () {},
  issuers: [],
  highlightedIssuers: [],
  loadingContext: Ze
});

var wi = function (e) {
  _inherits(n, _i);
  var t = Ni(n);

  function n() {
    return _classCallCheck(this, n), t.apply(this, arguments);
  }

  return _createClass(n, [{
    key: "formatProps",
    value: function (e) {
      return ki(ki({}, _get(_getPrototypeOf(n.prototype), "formatProps", this).call(this, e)), {}, {
        showImage: !1
      });
    }
  }]), n;
}();

function Si(e, t) {
  var o = n$1(e);

  if (r$1) {
    var i = r$1(e);
    t && (i = f$1(i).call(i, function (t) {
      return a$1(e, t).enumerable;
    })), o.push.apply(o, i);
  }

  return o;
}

function xi(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n,
        r,
        s = null != arguments[t] ? arguments[t] : {};
    t % 2 ? p$1(n = Si(Object(s), !0)).call(n, function (t) {
      _defineProperty(e, t, s[t]);
    }) : o$1 ? i(e, o$1(s)) : p$1(r = Si(Object(s))).call(r, function (t) {
      l$1(e, t, a$1(s, t));
    });
  }

  return e;
}

function Pi(e) {
  var t = function () {
    if ("undefined" == typeof Reflect || !S) return !1;
    if (S.sham) return !1;
    if ("function" == typeof Proxy) return !0;

    try {
      return Boolean.prototype.valueOf.call(S(Boolean, [], function () {})), !0;
    } catch (e) {
      return !1;
    }
  }();

  return function () {
    var n,
        r = _getPrototypeOf(e);

    if (t) {
      var a = _getPrototypeOf(this).constructor;
      n = S(r, arguments, a);
    } else n = r.apply(this, arguments);

    return _possibleConstructorReturn(this, n);
  };
}

_defineProperty(wi, "type", "billdesk_online");

var Fi = function (e) {
  _inherits(n, _i);
  var t = Pi(n);

  function n() {
    return _classCallCheck(this, n), t.apply(this, arguments);
  }

  return _createClass(n, [{
    key: "formatProps",
    value: function (e) {
      return xi(xi({}, _get(_getPrototypeOf(n.prototype), "formatProps", this).call(this, e)), {}, {
        showImage: !1,
        placeholder: "issuerList.wallet.placeholder"
      });
    }
  }]), n;
}();

_defineProperty(Fi, "type", "billdesk_wallet");
var Ai = ["amex", "mc", "visa"],
    Bi = ["ach", "giftcard"],
    Ei = ["encryptedCardNumber", "encryptedExpiryDate", "encryptedExpiryMonth", "encryptedExpiryYear", "encryptedSecurityCode", "encryptedPassword"],
    Ri = ["encryptedBankAccountNumber", "encryptedBankLocationId"];
y$1(Ei).call(Ei, Ri);

var Oi = ["bcmc"],
    Di = function (e, t) {
  return "encryptedExpiryDate" === t ? (e.encryptedExpiryMonth = !1, e.encryptedExpiryYear = !1) : e[t] = !1, e;
},
    Mi = function (e, t) {
  return function (n, r) {
    var a = !0 !== t.valid[r] ? function (e, t) {
      return 1 !== t || "encryptedExpiryMonth" !== e && "encryptedExpiryYear" !== e ? e : "encryptedExpiryDate";
    }(r, e) : null;
    return a = function (e, t, n) {
      var r = k$1(n).call(n, function (n, r) {
        return n.isFieldOfType || (n.isFieldOfType = e === r, n.fieldIsValid = !t.errors[r]), n;
      }, {
        isFieldOfType: !1,
        fieldIsValid: !1
      }),
          a = r.isFieldOfType,
          o = r.fieldIsValid,
          i = "encryptedSecurityCode" === e ? "cvcPolicy" : "expiryDatePolicy";
      return ("optional" === t[i] || "hidden" === t[i]) && o && a ? null : e;
    }(a, t, ["encryptedSecurityCode", "encryptedExpiryDate", "encryptedExpiryMonth", "encryptedExpiryYear"]), a && !h$1(n).call(n, a) && n.push(a), n;
  };
},
    Ti = _createClass(function e(t) {
  _classCallCheck(this, e), _defineProperty(this, "callbacks", void 0), _defineProperty(this, "config", void 0), _defineProperty(this, "props", void 0), _defineProperty(this, "state", void 0), _defineProperty(this, "validateForm", void 0), _defineProperty(this, "handleBrandFromBinLookup", void 0), _defineProperty(this, "callbacksHandler", void 0), _defineProperty(this, "configHandler", void 0), _defineProperty(this, "createCardSecuredFields", void 0), _defineProperty(this, "createNonCardSecuredFields", void 0), _defineProperty(this, "createSecuredFields", void 0), _defineProperty(this, "destroySecuredFields", void 0), _defineProperty(this, "handleIOSTouchEvents", void 0), _defineProperty(this, "destroyTouchendListener", void 0), _defineProperty(this, "destroyTouchstartListener", void 0), _defineProperty(this, "handleBinValue", void 0), _defineProperty(this, "handleEncryption", void 0), _defineProperty(this, "handleFocus", void 0), _defineProperty(this, "handleIframeConfigFeedback", void 0), _defineProperty(this, "handleValidation", void 0), _defineProperty(this, "handleSFShiftTab", void 0), _defineProperty(this, "handleShiftTab", void 0), _defineProperty(this, "isConfigured", void 0), _defineProperty(this, "postMessageToAllIframes", void 0), _defineProperty(this, "processAutoComplete", void 0), _defineProperty(this, "processBrand", void 0), _defineProperty(this, "sendBrandToCardSF", void 0), _defineProperty(this, "sendExpiryDatePolicyToSF", void 0), _defineProperty(this, "setFocusOnFrame", void 0), _defineProperty(this, "setupSecuredField", void 0), _defineProperty(this, "touchendListener", void 0), _defineProperty(this, "touchstartListener", void 0), _defineProperty(this, "encryptedAttrName", void 0), _defineProperty(this, "hasRedundantCVCField", void 0), _defineProperty(this, "isSingleBrandedCard", void 0), _defineProperty(this, "securityCode", void 0), this.props = t, this.state = {}, this.config = {}, this.callbacks = {};
}),
    Ii = Object.prototype.toString;

function ji(e) {
  return "object" === _typeof(e) && null !== e && "[object Array]" === Object.prototype.toString.call(e);
}

function Vi(e) {
  return null != e;
}

function Li(e) {
  return !1 !== e && Vi(e);
}

function Ui(e) {
  return !!e && "object" === _typeof(e);
}

function qi(e, t) {
  var r,
      a = _typeof(e),
      o = _typeof(t);
  return e && t && "object" === a && a === o ? n$1(e).length === n$1(t).length && $$i(r = n$1(e)).call(r, function (n) {
    return qi(e[n], t[n]);
  }) : e === t;
}

function Ki(e) {
  return !Li(e) || !(!("number" == typeof (t = e) || Ui(t) && "[object Number]" === Ii.call(t)) || 0 !== e && !fe(e)) || !(!ji(e) && !function (e) {
    return "string" == typeof e || Ui(e) && "[object String]" === Ii.call(e);
  }(e) || 0 !== e.length) || !(!Ui(e) || 0 !== n$1(e).length);
  var t;
}

function Hi() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];

  var r = t,
      a = r.shift();

  function o() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];

    return a.apply(this, y$1(r).call(r, t));
  }

  return o;
}

var zi,
    Wi,
    Gi,
    Yi,
    $i = "undefined" != typeof window && window.console && window.console.error && m$1(zi = window.console.error).call(zi, window.console);
"undefined" != typeof window && window.console && window.console.info && m$1(Wi = window.console.info).call(Wi, window.console);
var Zi = "undefined" != typeof window && window.console && window.console.log && m$1(Gi = window.console.log).call(Gi, window.console),
    Ji = "undefined" != typeof window && window.console && window.console.warn && m$1(Yi = window.console.warn).call(Yi, window.console);

function Qi() {
  var e, t, n, r, a, o;
  this.config.cardGroupTypes = ji(o = this.props.cardGroupTypes) && o.length ? o : Ai;
  var i = this.props.loadingContext;

  if (i) {
    var l;
    this.config.loadingContext = "/" === (l = i).charAt(l.length - 1) ? i : "".concat(i, "/"), this.config.isCreditCardType = !1 === h$1(Bi).call(Bi, this.props.type), this.config.iframeUIConfig = this.props.iframeUIConfig, this.config.allowedDOMAccess = !(!1 === this.props.allowedDOMAccess || "false" === this.props.allowedDOMAccess), this.config.autoFocus = !(!1 === this.props.autoFocus || "false" === this.props.autoFocus), this.config.showWarnings = !0 === this.props.showWarnings || "true" === this.props.showWarnings, this.config.trimTrailingSeparator = !(!1 === this.props.trimTrailingSeparator || "false" === this.props.trimTrailingSeparator), this.config.keypadFix = !(!1 === this.props.keypadFix || "false" === this.props.keypadFix), this.config.legacyInputMode = this.props.legacyInputMode || null, this.config.minimumExpiryDate = this.props.minimumExpiryDate || null, this.config.implementationType = this.props.implementationType, this.config.isCollatingErrors = this.props.isCollatingErrors, this.config.sfLogAtStart = !0 === this.props._b$dl;
    var s = this.config.isCreditCardType ? "card" : this.props.type;
    C$1(s).call(s, "sepa") > -1 && (s = "iban"), this.config.bundleType = s;
    var c = btoa(window.location.origin),
        u = !("function" == typeof window.TextEncoder),
        d = y$1(e = "".concat(s)).call(e, u ? "Compat" : "");
    this.config.iframeSrc = y$1(t = y$1(n = y$1(r = y$1(a = "".concat(this.config.loadingContext, "securedfields/")).call(a, this.props.clientKey, "/")).call(r, "4.1.1", "/securedFields.html?type=")).call(n, d, "&d=")).call(t, c);
  } else Ji("WARNING Config :: no loadingContext has been specified!");
}

var Xi = function () {};

function el() {
  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
  this.callbacks.onLoad = e.onLoad ? e.onLoad : Xi, this.callbacks.onConfigSuccess = e.onConfigSuccess ? e.onConfigSuccess : Xi, this.callbacks.onFieldValid = e.onFieldValid ? e.onFieldValid : Xi, this.callbacks.onAllValid = e.onAllValid ? e.onAllValid : Xi, this.callbacks.onBrand = e.onBrand ? e.onBrand : Xi, this.callbacks.onError = e.onError ? e.onError : Xi, this.callbacks.onFocus = e.onFocus ? e.onFocus : Xi, this.callbacks.onBinValue = e.onBinValue ? e.onBinValue : Xi, this.callbacks.onAutoComplete = e.onAutoComplete ? e.onAutoComplete : Xi, this.callbacks.onAdditionalSFConfig = e.onAdditionalSFConfig ? e.onAdditionalSFConfig : Xi, this.callbacks.onAdditionalSFRemoved = e.onAdditionalSFRemoved ? e.onAdditionalSFRemoved : Xi, this.callbacks.onTouchstartIOS = e.onTouchstartIOS ? e.onTouchstartIOS : Xi;
}

var tl = function (e) {
  return {
    fieldType: e.fieldType,
    encryptedFieldName: e.encryptedFieldName,
    uid: e.uuid,
    valid: e.isValid,
    type: e.txVariant,
    rootNode: e.rootNode
  };
},
    nl = function (e, t) {
  var n = [];
  return e && "function" == typeof e.querySelectorAll && (n = G([]).call(e.querySelectorAll(t))), n;
},
    rl = function (e, t) {
  if (e) return e.querySelector(t);
},
    al = function (e, t) {
  if (e) return e.getAttribute(t);
},
    ol = function (e, t, n, r) {
  if ("function" != typeof e.addEventListener) {
    if (!e.attachEvent) throw new Error(": Unable to bind ".concat(t, "-event"));
    e.attachEvent("on".concat(t), n);
  } else e.addEventListener(t, n, r);
},
    il = function (e, t, n, r) {
  if ("function" == typeof e.addEventListener) e.removeEventListener(t, n, r);else {
    if (!e.attachEvent) throw new Error(": Unable to unbind ".concat(t, "-event"));
    e.detachEvent("on".concat(t), n);
  }
},
    ll = function (e, t, n, r, a) {
  if (!Tt(e, "error")) return null;
  var o = t,
      i = {
    rootNode: r,
    fieldType: e.fieldType,
    error: null,
    type: null
  },
      l = "" !== e.error;
  return l || o.hasError ? o.errorType === un["Unsupported card entered"] ? null : (i.error = l ? e.error : "", i.type = n, o.hasError = l, o.errorType = i.error, a(i), i) : null;
};

function sl(e) {
  var t,
      n,
      r,
      a,
      o = e.fieldType;

  if ("card" === this.state.type && Tt(e, "cvcPolicy") && Vi(e.cvcPolicy) && Tt(this.state.securedFields, "encryptedSecurityCode") && (this.state.securedFields.encryptedSecurityCode.cvcPolicy = e.cvcPolicy), ll(e, this.state.securedFields[o], this.state.type, this.props.rootNode, this.callbacks.onError), this.state.securedFields[o].isEncrypted) {
    t = function (e) {
      var t,
          n,
          r,
          a = e.fieldType,
          o = e.txVariant,
          i = e.rootNode,
          l = "encryptedExpiryDate" === a,
          s = [],
          c = ["encryptedExpiryMonth", "encryptedExpiryYear"],
          u = l ? 2 : 1;

      for (t = 0; t < u; t += 1) {
        var d;
        r = l ? c[t] : a, n = y$1(d = "".concat(o, "-encrypted-")).call(d, r);
        var p = tl({
          fieldType: a,
          encryptedFieldName: l ? r : a,
          uuid: n,
          isValid: !1,
          txVariant: o,
          rootNode: i
        });
        s.push(p);
      }

      return s;
    }({
      fieldType: o,
      txVariant: this.state.type,
      rootNode: this.props.rootNode
    }), "encryptedCardNumber" === o && (t[0].endDigits = "");

    for (var i = 0, l = t.length; i < l; i += 1) this.config.allowedDOMAccess && (n = this.props.rootNode, r = t[i].uid, a = void 0, (a = rl(n, "#".concat(r))) && n.removeChild(a)), this.callbacks.onFieldValid(t[i]);

    this.state.securedFields[o].isEncrypted = !1;
  }

  this.validateForm(), Tt(e, "brand") && this.processBrand(e);
}

var cl = function (e, t, n) {
  if (t) {
    var r = W(e);
    t.postMessage(r, n);
  }
};

function ul(e, t) {
  var n;
  return (null === (n = e.securedFields[t]) || void 0 === n ? void 0 : n.iframeContentWindow) || null;
}

function dl(e) {
  var t,
      n,
      r = e.fieldType;
  this.config.autoFocus && ("year" !== e.type && "encryptedExpiryYear" !== r || this.setFocusOnFrame("encryptedSecurityCode"), "encryptedExpiryMonth" === r && this.setFocusOnFrame("encryptedExpiryYear"));
  var a = e[r];
  this.state.securedFields[r].isEncrypted = !0, this.config.allowedDOMAccess && function (e, t, n) {
    var r, a, o, i, l, s, c, u;

    for (r = 0; r < e.length; r += 1) {
      var d,
          p = e[r];
      o = p.encryptedFieldName, a = y$1(d = "".concat(t, "-encrypted-")).call(d, o), l = o, s = p.blob, u = void 0, (u = rl(i = n, "#".concat(c = a))) || ((u = document.createElement("input")).type = "hidden", u.name = l, u.id = c, i.appendChild(u)), u.setAttribute("value", s);
    }
  }(a, this.state.type, this.props.rootNode), ll({
    error: "",
    fieldType: r
  }, this.state.securedFields[r], this.state.type, this.props.rootNode, this.callbacks.onError);

  var o = function (e) {
    var t,
        n,
        r,
        a,
        o,
        i = e.fieldType,
        l = e.txVariant,
        s = e.rootNode,
        c = e.encryptedObjArr,
        u = [];

    for (t = 0; t < c.length; t += 1) {
      var d;
      a = (r = c[t]).encryptedFieldName, n = y$1(d = "".concat(l, "-encrypted-")).call(d, a), o = r.blob;
      var p = tl({
        fieldType: i,
        encryptedFieldName: a,
        uuid: n,
        isValid: !0,
        txVariant: l,
        rootNode: s
      });
      p.blob = o, u.push(p);
    }

    return u;
  }({
    fieldType: r,
    txVariant: this.state.type,
    rootNode: this.props.rootNode,
    encryptedObjArr: a
  });

  if ("encryptedExpiryMonth" === r && Tt(this.state.securedFields, "encryptedExpiryYear")) {
    var i = {
      txVariant: this.state.type,
      code: e.code,
      blob: a[0].blob,
      fieldType: "encryptedExpiryYear",
      numKey: this.state.securedFields.encryptedExpiryYear.numKey
    };
    cl(i, ul(this.state, "encryptedExpiryYear"), this.config.loadingContext);
  }

  for ("encryptedCardNumber" === r && Li(e.endDigits) && (o[0].endDigits = e.endDigits), "encryptedCardNumber" === r && Li(e.issuerBin) && (o[0].issuerBin = +e.issuerBin), t = 0, n = o.length; t < n; t += 1) this.callbacks.onFieldValid(o[t]);

  this.validateForm();
}

var pl = {
  __NO_BRAND: "noBrand",
  cards: []
};
pl.cards.push({
  cardType: "mc",
  startingRules: [51, 52, 53, 54, 55, 22, 23, 24, 25, 26, 27],
  permittedLengths: [16],
  pattern: /^(5[1-5][0-9]{0,14}|2[2-7][0-9]{0,14})$/,
  securityCode: "CVC"
}), pl.cards.push({
  cardType: "visadankort",
  startingRules: [4571],
  permittedLengths: [16],
  pattern: /^(4571)[0-9]{0,12}$/
}), pl.cards.push({
  cardType: "visa",
  startingRules: [4],
  permittedLengths: [13, 16, 19],
  pattern: /^4[0-9]{0,18}$/,
  securityCode: "CVV"
}), pl.cards.push({
  cardType: "amex",
  startingRules: [34, 37],
  permittedLengths: [15],
  pattern: /^3[47][0-9]{0,13}$/,
  securityCode: "CID"
}), pl.cards.push({
  cardType: "diners",
  startingRules: [36],
  permittedLengths: [14],
  pattern: /^(36)[0-9]{0,12}$/
}), pl.cards.push({
  cardType: "maestrouk",
  startingRules: [6759],
  permittedLengths: [16, 18, 19],
  pattern: /^(6759)[0-9]{0,15}$/
}), pl.cards.push({
  cardType: "solo",
  startingRules: [6767],
  permittedLengths: [16, 18, 19],
  pattern: /^(6767)[0-9]{0,15}$/
}), pl.cards.push({
  cardType: "laser",
  startingRules: [6304, 6706, 677117, 677120],
  permittedLengths: [16, 17, 18, 19],
  pattern: /^(6304|6706|6709|6771)[0-9]{0,15}$/,
  cvcPolicy: "optional"
}), pl.cards.push({
  cardType: "discover",
  startingRules: [6011, 644, 645, 646, 647, 648, 649, 65],
  permittedLengths: [16],
  pattern: /^(6011[0-9]{0,12}|(644|645|646|647|648|649)[0-9]{0,13}|65[0-9]{0,14})$/
}), pl.cards.push({
  cardType: "jcb",
  startingRules: [3528, 3529, 353, 354, 355, 356, 357, 358],
  permittedLengths: [16, 19],
  pattern: /^(352[8,9]{1}[0-9]{0,15}|35[4-8]{1}[0-9]{0,16})$/,
  securityCode: "CAV"
}), pl.cards.push({
  cardType: "bcmc",
  startingRules: [6703, 479658, 606005],
  permittedLengths: [16, 17, 18, 19],
  pattern: /^((6703)[0-9]{0,15}|(479658|606005)[0-9]{0,13})$/,
  cvcPolicy: "hidden"
}), pl.cards.push({
  cardType: "bijcard",
  startingRules: [5100081],
  permittedLengths: [16],
  pattern: /^(5100081)[0-9]{0,9}$/
}), pl.cards.push({
  cardType: "dankort",
  startingRules: [5019],
  permittedLengths: [16],
  pattern: /^(5019)[0-9]{0,12}$/
}), pl.cards.push({
  cardType: "hipercard",
  startingRules: [606282],
  permittedLengths: [16],
  pattern: /^(606282)[0-9]{0,10}$/
}), pl.cards.push({
  cardType: "cup",
  startingRules: [62, 81],
  permittedLengths: [14, 15, 16, 17, 18, 19],
  pattern: /^(62|81)[0-9]{0,17}$/
}), pl.cards.push({
  cardType: "maestro",
  startingRules: [50, 56, 57, 58, 6],
  permittedLengths: [16, 17, 18, 19],
  pattern: /^(5[0|6-8][0-9]{0,17}|6[0-9]{0,18})$/,
  cvcPolicy: "optional"
}), pl.cards.push({
  cardType: "elo",
  startingRules: [506699, 50670, 50671, 50672, 50673, 50674, 50675, 50676, 506770, 506771, 506772, 506773, 506774, 506775, 506776, 506777, 506778, 401178, 438935, 451416, 457631, 457632, 504175, 627780, 636297, 636368],
  permittedLengths: [16],
  pattern: /^((((506699)|(506770)|(506771)|(506772)|(506773)|(506774)|(506775)|(506776)|(506777)|(506778)|(401178)|(438935)|(451416)|(457631)|(457632)|(504175)|(627780)|(636368)|(636297))[0-9]{0,10})|((50676)|(50675)|(50674)|(50673)|(50672)|(50671)|(50670))[0-9]{0,11})$/
}), pl.cards.push({
  cardType: "uatp",
  startingRules: [1],
  permittedLengths: [15],
  pattern: /^1[0-9]{0,14}$/,
  cvcPolicy: "optional"
}), pl.cards.push({
  cardType: "cartebancaire",
  startingRules: [4, 5, 6],
  permittedLengths: [16],
  pattern: /^[4-6][0-9]{0,15}$/
}), pl.cards.push({
  cardType: "visaalphabankbonus",
  startingRules: [450903],
  permittedLengths: [16],
  pattern: /^(450903)[0-9]{0,10}$/
}), pl.cards.push({
  cardType: "mcalphabankbonus",
  startingRules: [510099],
  permittedLengths: [16],
  pattern: /^(510099)[0-9]{0,10}$/
}), pl.cards.push({
  cardType: "hiper",
  startingRules: [637095, 637568, 637599, 637609, 637612],
  permittedLengths: [16],
  pattern: /^(637095|637568|637599|637609|637612)[0-9]{0,10}$/
}), pl.cards.push({
  cardType: "oasis",
  startingRules: [982616],
  permittedLengths: [16],
  pattern: /^(982616)[0-9]{0,10}$/,
  cvcPolicy: "optional"
}), pl.cards.push({
  cardType: "karenmillen",
  startingRules: [98261465],
  permittedLengths: [16],
  pattern: /^(98261465)[0-9]{0,8}$/,
  cvcPolicy: "optional"
}), pl.cards.push({
  cardType: "warehouse",
  startingRules: [982633],
  permittedLengths: [16],
  pattern: /^(982633)[0-9]{0,10}$/,
  cvcPolicy: "optional"
}), pl.cards.push({
  cardType: "mir",
  startingRules: [220],
  permittedLengths: [16, 17, 18, 19],
  pattern: /^(220)[0-9]{0,16}$/
}), pl.cards.push({
  cardType: "codensa",
  startingRules: [590712],
  permittedLengths: [16],
  pattern: /^(590712)[0-9]{0,10}$/
}), pl.cards.push({
  cardType: "naranja",
  startingRules: [377798, 377799, 402917, 402918, 527571, 527572, 589562],
  permittedLengths: [16, 17, 18, 19],
  pattern: /^(37|40|5[28])([279])\d*$/
}), pl.cards.push({
  cardType: "cabal",
  startingRules: [589657, 600691, 603522, 6042, 6043, 636908],
  permittedLengths: [16, 17, 18, 19],
  pattern: /^(58|6[03])([03469])\d*$/
}), pl.cards.push({
  cardType: "shopping",
  startingRules: [2799, 589407, 603488],
  permittedLengths: [16, 17, 18, 19],
  pattern: /^(27|58|60)([39])\d*$/
}), pl.cards.push({
  cardType: "argencard",
  startingRules: [501],
  permittedLengths: [16, 17, 18, 19],
  pattern: /^(50)(1)\d*$/
}), pl.cards.push({
  cardType: "troy",
  startingRules: [9792],
  permittedLengths: [16],
  pattern: /^(97)(9)\d*$/
}), pl.cards.push({
  cardType: "forbrugsforeningen",
  startingRules: [600722],
  permittedLengths: [16],
  pattern: /^(60)(0)\d*$/
}), pl.cards.push({
  cardType: "vpay",
  startingRules: [401, 408, 413, 434, 435, 437, 439, 441, 442, 443, 444, 446, 447, 455, 458, 460, 461, 463, 466, 471, 479, 482, 483, 487],
  permittedLengths: [13, 14, 15, 16, 17, 18, 19],
  pattern: /^(40[1,8]|413|43[4,5]|44[1,2,3,4,6,7]|45[5,8]|46[0,1,3,6]|47[1,9]|48[2,3,7])[0-9]{0,16}$/
}), pl.cards.push({
  cardType: "rupay",
  startingRules: [508528],
  permittedLengths: [16],
  pattern: /^(100003|508(2|[5-9])|60(69|[7-8])|652(1[5-9]|[2-5][0-9]|8[5-9])|65300[3-4]|8172([0-1]|[3-5]|7|9)|817(3[3-8]|40[6-9]|410)|35380([0-2]|[5-6]|9))[0-9]{0,12}$/
});

var fl = function (e) {
  var t;
  return f$1(t = pl.cards).call(t, function (t) {
    return t.cardType === e;
  })[0];
},
    hl = function (e) {
  if (!e) throw new Error("Error: isGenericCardType: type param has not been specified");
  return "card" === e || "scheme" === e;
};
var yl = _createClass(function e() {
  _classCallCheck(this, e), _defineProperty(this, "config", void 0), _defineProperty(this, "fieldType", void 0), _defineProperty(this, "iframeSrc", void 0), _defineProperty(this, "loadingContext", void 0), _defineProperty(this, "holderEl", void 0), _defineProperty(this, "_errorType", void 0), _defineProperty(this, "_hasError", void 0), _defineProperty(this, "_isValid", void 0), _defineProperty(this, "_cvcPolicy", void 0), _defineProperty(this, "_expiryDatePolicy", void 0), _defineProperty(this, "_iframeContentWindow", void 0), _defineProperty(this, "_isEncrypted", void 0), _defineProperty(this, "_numKey", void 0), _defineProperty(this, "_iframeOnLoadListener", void 0), _defineProperty(this, "_postMessageListener", void 0), _defineProperty(this, "onIframeLoadedCallback", void 0), _defineProperty(this, "onConfigCallback", void 0), _defineProperty(this, "onEncryptionCallback", void 0), _defineProperty(this, "onValidationCallback", void 0), _defineProperty(this, "onFocusCallback", void 0), _defineProperty(this, "onBinValueCallback", void 0), _defineProperty(this, "onTouchstartCallback", void 0), _defineProperty(this, "onShiftTabCallback", void 0), _defineProperty(this, "onAutoCompleteCallback", void 0), this.config = {};
});

function ml(e, t) {
  var o = n$1(e);

  if (r$1) {
    var i = r$1(e);
    t && (i = f$1(i).call(i, function (t) {
      return a$1(e, t).enumerable;
    })), o.push.apply(o, i);
  }

  return o;
}

function vl(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n,
        r,
        s = null != arguments[t] ? arguments[t] : {};
    t % 2 ? p$1(n = ml(Object(s), !0)).call(n, function (t) {
      _defineProperty(e, t, s[t]);
    }) : o$1 ? i(e, o$1(s)) : p$1(r = ml(Object(s))).call(r, function (t) {
      l$1(e, t, a$1(s, t));
    });
  }

  return e;
}

var gl = function (e, t) {
  var n = "card" === e ? "nocard" : e || "nocard";
  return rt({
    type: n,
    extension: "svg",
    loadingContext: t
  })(n);
};

function bl(e) {
  return "object" === _typeof(e) && null !== e && "[object Array]" === Object.prototype.toString.call(e);
}

function _l() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];

  var r = bl(t[0]) ? t[0] : t;
  return {
    from: function (e) {
      var t;
      return k$1(t = K(r).call(r, function (t) {
        return t in e ? _defineProperty({}, t, e[t]) : {};
      })).call(t, function (e, t) {
        return vl(vl({}, e), t);
      }, {});
    }
  };
}

function Cl() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];

  var a = bl(t[0]) ? t[0] : t;
  return {
    from: function (e) {
      var t,
          r = f$1(t = n$1(e)).call(t, function (e) {
        return !h$1(a).call(a, e);
      });
      return _l.apply(void 0, _toConsumableArray(r)).from(e);
    }
  };
}

function kl(e, t) {
  var o = n$1(e);

  if (r$1) {
    var i = r$1(e);
    t && (i = f$1(i).call(i, function (t) {
      return a$1(e, t).enumerable;
    })), o.push.apply(o, i);
  }

  return o;
}

var Nl = function (e) {
  var t,
      r = un[e];
  return r || (r = g$1(t = n$1(un)).call(t, function (t) {
    return un[t] === e;
  })) || e;
},
    wl = function (e, t) {
  var r = function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var n,
          r,
          s = null != arguments[t] ? arguments[t] : {};
      t % 2 ? p$1(n = kl(Object(s), !0)).call(n, function (t) {
        _defineProperty(e, t, s[t]);
      }) : o$1 ? i(e, o$1(s)) : p$1(r = kl(Object(s))).call(r, function (t) {
        l$1(e, t, a$1(s, t));
      });
    }

    return e;
  }({}, e);

  return r.error = r.error ? r.error : function (e) {
    var t = n$1(un);
    return k$1(t).call(t, function (t, n) {
      var r = un[n];
      return (C$1(r).call(r, "sf-") > -1 || C$1(r).call(r, "gen.01") > -1) && (t[r] = e.get(r)), t;
    }, {});
  }(t), r;
};

function Sl(e, t) {
  var o = n$1(e);

  if (r$1) {
    var i = r$1(e);
    t && (i = f$1(i).call(i, function (t) {
      return a$1(e, t).enumerable;
    })), o.push.apply(o, i);
  }

  return o;
}

function xl(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n,
        r,
        s = null != arguments[t] ? arguments[t] : {};
    t % 2 ? p$1(n = Sl(Object(s), !0)).call(n, function (t) {
      _defineProperty(e, t, s[t]);
    }) : o$1 ? i(e, o$1(s)) : p$1(r = Sl(Object(s))).call(r, function (t) {
      l$1(e, t, a$1(s, t));
    });
  }

  return e;
}

function Pl(e, t) {
  var o = n$1(e);

  if (r$1) {
    var i = r$1(e);
    t && (i = f$1(i).call(i, function (t) {
      return a$1(e, t).enumerable;
    })), o.push.apply(o, i);
  }

  return o;
}

function Fl(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n,
        r,
        s = null != arguments[t] ? arguments[t] : {};
    t % 2 ? p$1(n = Pl(Object(s), !0)).call(n, function (t) {
      _defineProperty(e, t, s[t]);
    }) : o$1 ? i(e, o$1(s)) : p$1(r = Pl(Object(s))).call(r, function (t) {
      l$1(e, t, a$1(s, t));
    });
  }

  return e;
}

function Al(e, t, n) {
  var r,
      a = e.txVariant,
      o = function (e) {
    var t;
    return _defineProperty(t = {}, "encryptedCardNumber", e.get && e.get("creditCard.numberField.placeholder")), _defineProperty(t, "encryptedExpiryDate", e.get && e.get("creditCard.expiryDateField.placeholder")), _defineProperty(t, "encryptedExpiryMonth", e.get && e.get("creditCard.expiryDateField.month.placeholder")), _defineProperty(t, "encryptedExpiryYear", e.get && e.get("creditCard.expiryDateField.year.placeholder")), _defineProperty(t, "encryptedSecurityCode", e.get && e.get("creditCard.cvcField.placeholder")), _defineProperty(t, "encryptedSecurityCode3digits", e.get && e.get("creditCard.cvcField.placeholder.3digits")), _defineProperty(t, "encryptedSecurityCode4digits", e.get && e.get("creditCard.cvcField.placeholder.4digits")), _defineProperty(t, "encryptedPassword", e.get && e.get("creditCard.encryptedPassword.placeholder")), t;
  }(n);

  return Fl(Fl(Fl({}, "encryptedSecurityCode" !== t && _defineProperty({}, t, o[t])), "encryptedSecurityCode" === t && "giftcard" === a && _defineProperty({}, t, o[t])), "encryptedSecurityCode" === t && "giftcard" !== a && (_defineProperty(r = {}, "encryptedSecurityCode3digits", o.encryptedSecurityCode3digits), _defineProperty(r, "encryptedSecurityCode4digits", o.encryptedSecurityCode4digits), r));
}

function Bl(e, t) {
  var o = n$1(e);

  if (r$1) {
    var i = r$1(e);
    t && (i = f$1(i).call(i, function (t) {
      return a$1(e, t).enumerable;
    })), o.push.apply(o, i);
  }

  return o;
}

function El(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n,
        r,
        s = null != arguments[t] ? arguments[t] : {};
    t % 2 ? p$1(n = Bl(Object(s), !0)).call(n, function (t) {
      _defineProperty(e, t, s[t]);
    }) : o$1 ? i(e, o$1(s)) : p$1(r = Bl(Object(s))).call(r, function (t) {
      l$1(e, t, a$1(s, t));
    });
  }

  return e;
}

function Rl(e) {
  var t = function () {
    if ("undefined" == typeof Reflect || !S) return !1;
    if (S.sham) return !1;
    if ("function" == typeof Proxy) return !0;

    try {
      return Boolean.prototype.valueOf.call(S(Boolean, [], function () {})), !0;
    } catch (e) {
      return !1;
    }
  }();

  return function () {
    var n,
        r = _getPrototypeOf(e);

    if (t) {
      var a = _getPrototypeOf(this).constructor;
      n = S(r, arguments, a);
    } else n = r.apply(this, arguments);

    return _possibleConstructorReturn(this, n);
  };
}

var Ol,
    Dl = function (e) {
  _inherits(n, yl);
  var t = Rl(n);

  function n(e, r) {
    var a;
    _classCallCheck(this, n), a = t.call(this);
    var o = ["fieldType", "iframeSrc", "cvcPolicy", "expiryDatePolicy", "loadingContext", "holderEl"],
        i = Cl(o).from(e);
    a.config = El(El(El({}, a.config), i), {}, {
      iframeUIConfig: El({}, i.iframeUIConfig)
    });

    var l = _l(o).from(e);

    return a.fieldType = l.fieldType, a.cvcPolicy = l.cvcPolicy, a.expiryDatePolicy = l.expiryDatePolicy, a.iframeSrc = l.iframeSrc, a.loadingContext = l.loadingContext, a.holderEl = l.holderEl, a.isValid = !1, a.iframeContentWindow = null, a.numKey = function () {
      if (!window.crypto) return 4294967296 * Math.random() | 0;
      var e = new Uint32Array(1);
      return window.crypto.getRandomValues(e), e[0];
    }(), a.isEncrypted = !1, a.hasError = !1, a.errorType = "", _possibleConstructorReturn(a, a.init(r));
  }

  return _createClass(n, [{
    key: "init",
    value: function (e) {
      var t = function (e, t, n) {
        var r,
            a,
            o,
            i = h$1(r = ["ach", "giftcard"]).call(r, e.txVariant) ? e.txVariant : "creditCard",
            l = n.get(y$1(a = "".concat(i, ".")).call(a, t, ".aria.iframeTitle")),
            s = n.get(y$1(o = "".concat(i, ".")).call(o, t, ".aria.label")),
            c = n.locale,
            u = wl({
          iframeTitle: l,
          label: s
        }, n);
        return xl(xl({}, c && {
          lang: c
        }), {}, _defineProperty({}, t, u));
      }(this.config, this.fieldType, e);

      this.config.iframeUIConfig.ariaConfig = t;
      var n = Al(this.config, this.fieldType, e);
      this.config.iframeUIConfig.placeholders = n;

      var r = function (e) {
        var t = e.src,
            n = e.title,
            r = void 0 === n ? "iframe element" : n,
            a = e.policy,
            o = void 0 === a ? "origin" : a,
            i = e.styleStr,
            l = void 0 === i ? "border: none; height:100%; width:100%; overflow:hidden;" : i,
            s = document.createElement("iframe");
        s.setAttribute("src", t), s.setAttribute("class", "js-iframe"), "" === r || 0 === J(r).call(r).length || "none" === r ? s.setAttribute("role", "presentation") : s.setAttribute("title", r), s.setAttribute("allowtransparency", "true"), s.setAttribute("style", l), s.setAttribute("referrerpolicy", o);
        var c = document.createTextNode("<p>Your browser does not support iframes.</p>");
        return s.appendChild(c), s;
      }({
        src: this.iframeSrc,
        title: t[this.fieldType].iframeTitle,
        policy: "origin"
      });

      this.holderEl.appendChild(r);
      var a = rl(this.holderEl, ".js-iframe");
      return a && (this.iframeContentWindow = a.contentWindow, this.iframeOnLoadListener = this.iframeOnLoadListenerFn, ol(a, "load", this.iframeOnLoadListener, !1)), this;
    }
  }, {
    key: "iframeOnLoadListenerFn",
    value: function () {
      il(window, "load", this.iframeOnLoadListener, !1), this.postMessageListener = this.postMessageListenerFn, ol(window, "message", this.postMessageListener, !1);
      var e = {
        fieldType: this.fieldType,
        cvcPolicy: this.cvcPolicy,
        expiryDatePolicy: this.expiryDatePolicy,
        numKey: this.numKey,
        txVariant: this.config.txVariant,
        extraFieldData: this.config.extraFieldData,
        cardGroupTypes: this.config.cardGroupTypes,
        iframeUIConfig: this.config.iframeUIConfig,
        sfLogAtStart: this.config.sfLogAtStart,
        showWarnings: this.config.showWarnings,
        trimTrailingSeparator: this.config.trimTrailingSeparator,
        isCreditCardType: this.config.isCreditCardType,
        legacyInputMode: this.config.legacyInputMode,
        minimumExpiryDate: this.config.minimumExpiryDate,
        uid: this.config.uid,
        implementationType: this.config.implementationType,
        bundleType: this.config.bundleType,
        isCollatingErrors: this.config.isCollatingErrors
      };
      cl(e, this.iframeContentWindow, this.loadingContext), this.onIframeLoadedCallback();
    }
  }, {
    key: "postMessageListenerFn",
    value: function (e) {
      if (function (e, t, n) {
        var r = e.origin,
            a = C$1(t).call(t, "/checkoutshopper/"),
            o = a > -1 ? t.substring(0, a) : t,
            i = o.length - 1;
        return "/" === o.charAt(i) && (o = o.substring(0, i)), r === o || (n && (Ji("WARNING postMessageValidation: postMessage listener for iframe::origin mismatch!\n Received message with origin:", r, "but the only allowed origin for messages to CSF is", o), Ji("### event.data=", e.data)), !1);
      }(e, this.loadingContext, this.config.showWarnings)) {
        var t;

        try {
          t = JSON.parse(e.data);
        } catch (t) {
          return function (e) {
            var t;
            return e.data && e.data.type && "string" == typeof e.data.type && C$1(t = e.data.type).call(t, "webpack") > -1;
          }(e) ? void (this.config.showWarnings && Zi("### SecuredField::postMessageListenerFn:: PARSE FAIL - WEBPACK")) : function (e) {
            var t;
            return e.data && "string" == typeof e.data && C$1(t = e.data).call(t, "cvox") > -1;
          }(e) ? void (this.config.showWarnings && Zi("### SecuredField::postMessageListenerFn:: PARSE FAIL - CHROMEVOX")) : void (this.config.showWarnings && Zi("### SecuredField::postMessageListenerFn:: PARSE FAIL - UNKNOWN REASON: event.data=", e.data));
        }

        if (Tt(t, "action") && Tt(t, "numKey")) {
          if (this.numKey === t.numKey) switch (t.action) {
            case "encryption":
              this.isValid = !0, this.onEncryptionCallback(t);
              break;

            case "config":
              this.onConfigCallback(t);
              break;

            case "focus":
              this.onFocusCallback(t);
              break;

            case "binValue":
              this.onBinValueCallback(t);
              break;

            case "touch":
              this.onTouchstartCallback(t);
              break;

            case "shifttab":
              this.onShiftTabCallback(t);
              break;

            case "autoComplete":
              this.onAutoCompleteCallback(t);
              break;

            default:
              this.isValid = !1, this.onValidationCallback(t);
          } else this.config.showWarnings && Ji("WARNING SecuredField :: postMessage listener for iframe :: data mismatch! (Probably a message from an unrelated securedField)");
        } else this.config.showWarnings && Ji("WARNING SecuredField :: postMessage listener for iframe :: data mismatch!");
      }
    }
  }, {
    key: "destroy",
    value: function () {
      il(window, "message", this.postMessageListener, !1), this.iframeContentWindow = null, function (e) {
        for (; e.firstChild;) e.removeChild(e.firstChild);
      }(this.holderEl);
    }
  }, {
    key: "isOptionalOrHidden",
    value: function () {
      if ("encryptedExpiryDate" === this.fieldType || "encryptedExpiryMonth" === this.fieldType || "encryptedExpiryYear" === this.fieldType) switch (this.expiryDatePolicy) {
        case "hidden":
          return !0;

        case "optional":
          return !this.hasError;

        default:
          return !1;
      }
      if ("encryptedSecurityCode" === this.fieldType) switch (this.cvcPolicy) {
        case "hidden":
          return !0;

        case "optional":
          return !this.hasError;

        default:
          return !1;
      }
      return !1;
    }
  }, {
    key: "onIframeLoaded",
    value: function (e) {
      return this.onIframeLoadedCallback = e, this;
    }
  }, {
    key: "onEncryption",
    value: function (e) {
      return this.onEncryptionCallback = e, this;
    }
  }, {
    key: "onValidation",
    value: function (e) {
      return this.onValidationCallback = e, this;
    }
  }, {
    key: "onConfig",
    value: function (e) {
      return this.onConfigCallback = e, this;
    }
  }, {
    key: "onFocus",
    value: function (e) {
      return this.onFocusCallback = e, this;
    }
  }, {
    key: "onBinValue",
    value: function (e) {
      return this.onBinValueCallback = e, this;
    }
  }, {
    key: "onTouchstart",
    value: function (e) {
      return this.onTouchstartCallback = e, this;
    }
  }, {
    key: "onShiftTab",
    value: function (e) {
      return this.onShiftTabCallback = e, this;
    }
  }, {
    key: "onAutoComplete",
    value: function (e) {
      return this.onAutoCompleteCallback = e, this;
    }
  }, {
    key: "errorType",
    get: function () {
      return this._errorType;
    },
    set: function (e) {
      this._errorType = e;
    }
  }, {
    key: "hasError",
    get: function () {
      return this._hasError;
    },
    set: function (e) {
      this._hasError = e;
    }
  }, {
    key: "isValid",
    get: function () {
      if ("encryptedSecurityCode" === this.fieldType) switch (this.cvcPolicy) {
        case "hidden":
          return !0;

        case "optional":
          return !this.hasError;

        default:
          return this._isValid;
      }
      if ("encryptedExpiryDate" === this.fieldType || "encryptedExpiryMonth" === this.fieldType || "encryptedExpiryYear" === this.fieldType) switch (this.expiryDatePolicy) {
        case "hidden":
          return !0;

        case "optional":
          return !this.hasError;

        default:
          return this._isValid;
      }
      return this._isValid;
    },
    set: function (e) {
      this._isValid = e;
    }
  }, {
    key: "cvcPolicy",
    get: function () {
      return this._cvcPolicy;
    },
    set: function (e) {
      "encryptedSecurityCode" === this.fieldType && e !== this.cvcPolicy && (this._cvcPolicy = e, this.hasError && "isValidated" === this.errorType && (this.hasError = !1));
    }
  }, {
    key: "expiryDatePolicy",
    get: function () {
      return this._expiryDatePolicy;
    },
    set: function (e) {
      "encryptedExpiryDate" !== this.fieldType && "encryptedExpiryMonth" !== this.fieldType && "encryptedExpiryYear" !== this.fieldType || e !== this.expiryDatePolicy && (this._expiryDatePolicy = e, this.hasError && "isValidated" === this.errorType && (this.hasError = !1));
    }
  }, {
    key: "iframeContentWindow",
    get: function () {
      return this._iframeContentWindow;
    },
    set: function (e) {
      this._iframeContentWindow = e;
    }
  }, {
    key: "isEncrypted",
    get: function () {
      return this._isEncrypted;
    },
    set: function (e) {
      this._isEncrypted = e;
    }
  }, {
    key: "numKey",
    get: function () {
      return this._numKey;
    },
    set: function (e) {
      this._numKey = e;
    }
  }, {
    key: "iframeOnLoadListener",
    get: function () {
      return this._iframeOnLoadListener;
    },
    set: function (e) {
      this._iframeOnLoadListener = m$1(e).call(e, this);
    }
  }, {
    key: "postMessageListener",
    get: function () {
      return this._postMessageListener;
    },
    set: function (e) {
      this._postMessageListener = m$1(e).call(e, this);
    }
  }]), n;
}();

function Ml() {
  this.encryptedAttrName = "data-cse";
  var e = nl(this.props.rootNode, "[".concat(this.encryptedAttrName, "]"));
  return Ol = "required", this.config.isCreditCardType ? (this.isSingleBrandedCard = !1, this.securityCode = "", this.createCardSecuredFields(e)) : this.createNonCardSecuredFields(e);
}

function Tl(e) {
  var t;
  return p$1(e).call(e, m$1(t = this.setupSecuredField).call(t, this)), e.length;
}

function Il(e) {
  var t,
      n = this,
      r = this.state.type;

  if ("card" === r && 1 === this.config.cardGroupTypes.length && (r = this.config.cardGroupTypes[0], this.state.type = r), this.isSingleBrandedCard = "card" !== r, this.isSingleBrandedCard) {
    var a = fl(r);
    Vi(a) ? (Ol = a.cvcPolicy || "required", this.securityCode = a.securityCode) : this.state.type = "unrecognised-single-brand";
  }

  if (p$1(e).call(e, m$1(t = this.setupSecuredField).call(t, this)), this.isSingleBrandedCard) {
    var o = {
      type: this.state.type,
      rootNode: this.props.rootNode,
      brand: r,
      cvcPolicy: Ol,
      cvcText: this.securityCode
    };
    q(function () {
      n.callbacks.onBrand(o);
    }, 0);
  }

  return e.length;
}

function jl(e) {
  var t = this,
      n = al(e, this.encryptedAttrName);
  "encryptedExpiryYear" === n && (this.state.hasSeparateDateFields = !0);
  var r = {
    fieldType: n,
    extraFieldData: al(e, "data-info"),
    uid: al(e, "data-uid"),
    txVariant: this.state.type,
    cardGroupTypes: this.config.cardGroupTypes,
    iframeUIConfig: this.config.iframeUIConfig ? this.config.iframeUIConfig : {},
    sfLogAtStart: this.config.sfLogAtStart,
    trimTrailingSeparator: this.config.trimTrailingSeparator,
    cvcPolicy: Ol,
    expiryDatePolicy: "required",
    isCreditCardType: this.config.isCreditCardType,
    iframeSrc: this.config.iframeSrc,
    loadingContext: this.config.loadingContext,
    showWarnings: this.config.showWarnings,
    holderEl: e,
    legacyInputMode: this.config.legacyInputMode,
    minimumExpiryDate: this.config.minimumExpiryDate,
    implementationType: this.config.implementationType,
    bundleType: this.config.bundleType,
    isCollatingErrors: this.config.isCollatingErrors
  },
      a = new Dl(r, this.props.i18n).onIframeLoaded(function () {
    if (t.state.iframeCount += 1, t.state.iframeCount === t.state.originalNumIframes) {
      t.callbacks.onLoad({
        iframesLoaded: !0
      });
    }
  }).onConfig(function (e) {
    t.handleIframeConfigFeedback(e);
  }).onFocus(function (e) {
    t.handleFocus(e);
  }).onBinValue(function (e) {
    t.handleBinValue(e);
  }).onTouchstart(function (e) {
    t.callbacks.onTouchstartIOS({
      fieldType: e.fieldType
    }), t.postMessageToAllIframes({
      fieldType: e.fieldType,
      fieldClick: !0
    });
  }).onShiftTab(function (e) {
    t.handleSFShiftTab(e.fieldType);
  }).onEncryption(function (e) {
    t.handleEncryption(e);
  }).onValidation(function (e) {
    t.handleValidation(e);
  }).onAutoComplete(function (e) {
    t.processAutoComplete(e);
  });
  this.state.securedFields[n] = a;
}

var Vl = "undefined" != typeof navigator && /(android)/i.test(navigator.userAgent),
    Ll = "undefined" != typeof navigator && function () {
  var e = navigator.userAgent,
      t = C$1(e).call(e, "MSIE ");
  if (t > 0) return w$1(e.substring(t + 5, C$1(e).call(e, ".", t)), 10);

  if (C$1(e).call(e, "Trident/") > 0) {
    var n = C$1(e).call(e, "rv:");
    return w$1(e.substring(n + 3, C$1(e).call(e, ".", n)), 10);
  }

  var r = C$1(e).call(e, "Edge/");
  return r > 0 && w$1(e.substring(r + 5, C$1(e).call(e, ".", r)), 10);
}(),
    Ul = {
  __IS_ANDROID: Vl,
  __IS_IE: Ll,
  __IS_IOS: "undefined" != typeof navigator && /iphone|ipod|ipad/i.test(navigator.userAgent),
  __IS_FIREFOX: "undefined" != typeof navigator && /(firefox)/i.test(navigator.userAgent),
  __IS_SAFARI: "undefined" != typeof navigator && /(safari)/i.test(navigator.userAgent) && !/(chrome)/i.test(navigator.userAgent)
};

var ql = function (e) {
  var t,
      n = e.target;

  if (n instanceof HTMLInputElement || HTMLTextAreaElement && n instanceof HTMLTextAreaElement) {
    var r = n.value,
        a = "selectionStart" in (t = n) ? t.selectionStart : 0,
        o = !1;
    a === r.length && (a -= 1, o = !0), n.value = r, n.setSelectionRange && (n.focus(), n.setSelectionRange(a, a), o && (a += 1, q(function () {
      n.setSelectionRange(a, a);
    }, 0)));
  } else {
    if (this.config.keypadFix) {
      var i = this.props.rootNode,
          l = document.createElement("input");
      l.style.width = "1px", l.style.height = "1px", l.style.opacity = "0", l.style.fontSize = "18px", i.appendChild(l), l.focus(), i.removeChild(l);
    }
  }

  this.destroyTouchendListener(), this.state.registerFieldForIos = !1, this.postMessageToAllIframes({
    fieldType: "webInternalElement",
    fieldClick: !0
  });
},
    Kl = function (e) {
  var t,
      n,
      r = e.target;
  r instanceof HTMLInputElement && (this.postMessageToAllIframes({
    fieldType: "webInternalElement",
    checkoutTouchEvent: !0
  }), null === (t = (n = this.callbacks).onTouchstartIOS) || void 0 === t || t.call(n, {
    fieldType: "webInternalElement",
    name: r.getAttribute("name")
  }));
},
    Hl = function () {
  var e = rl(document, "body");
  e.style.cursor = "pointer", ol(e, "touchend", this.touchendListener), this.state.registerFieldForIos = !0;
},
    zl = function () {
  if (Ul.__IS_IOS) {
    var e = rl(document, "body");
    e.style.cursor = "auto", il(e, "touchend", this.touchendListener);
  }
},
    Wl = function () {
  Ul.__IS_IOS && il(document, "touchstart", this.touchstartListener);
},
    Gl = function (e, t, n) {
  return function (e) {
    var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
        n = "*[data-cse], a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), object, embed, *[tabindex], *[contenteditable]",
        r = G(Array.prototype).call(nl(document, n)),
        a = [];
    p$1(r).call(r, function (e) {
      var t = e.getAttribute("tabindex"),
          n = !t || w$1(t, 10) >= 0,
          r = e.getBoundingClientRect(),
          o = r.width > 0 && r.height > 0;
      n && o && a.push(e);
    });

    var o = function (e, t) {
      for (var n = 0; n < e.length; n += 1) if (t(e[n])) return n;

      return -1;
    }(a, function (t) {
      return t === e || e.contains(t);
    });

    return a[o + (t ? -1 : 1)];
  }(rl(t, "[data-cse=".concat(e, "]")), n);
};

var Yl = function (e) {
  var t;

  switch (this.state.type) {
    case "ach":
      t = function (e) {
        var t;
        return "encryptedBankLocationId" === e && (t = "encryptedBankAccountNumber"), {
          fieldToFocus: t,
          additionalField: void 0
        };
      }(e);

      break;

    case "giftcard":
      t = function (e, t) {
        var n, r;

        switch (e) {
          case "encryptedCardNumber":
            n = Gl("encryptedCardNumber", t);
            break;

          case "encryptedSecurityCode":
            r = "encryptedCardNumber";
        }

        return {
          fieldToFocus: r,
          additionalField: n
        };
      }(e, this.props.rootNode);

      break;

    default:
      t = this.state.isKCP ? function (e, t, n) {
        var r, a;

        switch (e) {
          case "encryptedCardNumber":
            r = Gl("encryptedCardNumber", t);
            break;

          case "encryptedExpiryDate":
          case "encryptedExpiryMonth":
            a = "encryptedCardNumber";
            break;

          case "encryptedExpiryYear":
            a = "encryptedExpiryMonth";
            break;

          case "encryptedSecurityCode":
            a = n ? "encryptedExpiryYear" : "encryptedExpiryDate";
            break;

          case "encryptedPassword":
          case "encryptedPin":
            r = Gl(e, t);
        }

        return {
          fieldToFocus: a,
          additionalField: r
        };
      }(e, this.props.rootNode, this.state.hasSeparateDateFields) : function (e, t, n, r) {
        var a, o;

        switch (e) {
          case "encryptedCardNumber":
            a = Gl("encryptedCardNumber", t);
            break;

          case "encryptedExpiryDate":
          case "encryptedExpiryMonth":
            o = "encryptedCardNumber";
            break;

          case "encryptedExpiryYear":
            o = "encryptedExpiryMonth";
            break;

          case "encryptedSecurityCode":
            1 === r ? a = Gl("encryptedSecurityCode", t) : o = n ? "encryptedExpiryYear" : "encryptedExpiryDate";
        }

        return {
          fieldToFocus: o,
          additionalField: a
        };
      }(e, this.props.rootNode, this.state.hasSeparateDateFields, this.state.numIframes);
  }

  var n,
      r = t.fieldToFocus,
      a = t.additionalField;
  r ? this.setFocusOnFrame(r, false) : a && (n = a) && (n.focus(), n.blur(), n.focus());
},
    $l = function (e) {
  (Ul.__IS_FIREFOX || Ul.__IS_IE && Ul.__IS_IE <= 11) && this.handleShiftTab(e);
};

function Zl(e, t) {
  var o = n$1(e);

  if (r$1) {
    var i = r$1(e);
    t && (i = f$1(i).call(i, function (t) {
      return a$1(e, t).enumerable;
    })), o.push.apply(o, i);
  }

  return o;
}

function Jl(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n,
        r,
        s = null != arguments[t] ? arguments[t] : {};
    t % 2 ? p$1(n = Zl(Object(s), !0)).call(n, function (t) {
      _defineProperty(e, t, s[t]);
    }) : o$1 ? i(e, o$1(s)) : p$1(r = Zl(Object(s))).call(r, function (t) {
      l$1(e, t, a$1(s, t));
    });
  }

  return e;
}

function Ql(e) {
  if (Tt(this.state.securedFields, "encryptedCardNumber")) {
    var t = Jl(Jl({
      txVariant: this.state.type
    }, e), {}, {
      fieldType: "encryptedCardNumber",
      numKey: this.state.securedFields.encryptedCardNumber.numKey
    });
    cl(t, ul(this.state, "encryptedCardNumber"), this.config.loadingContext);
  }
}

function Xl(e) {
  var t = this,
      n = Tt(this.state.securedFields, "encryptedExpiryMonth") && Tt(this.state.securedFields, "encryptedExpiryYear") ? ["encryptedExpiryMonth", "encryptedExpiryYear"] : ["encryptedExpiryDate"];
  p$1(n).call(n, function (n) {
    var r = Jl(Jl({
      txVariant: t.state.type
    }, e), {}, {
      fieldType: n,
      numKey: t.state.securedFields[n].numKey
    });
    cl(r, ul(t.state, n), t.config.loadingContext);
  });
}

function es(e, t) {
  var r,
      a,
      o = "card" === this.state.type;
  if (!e || !n$1(e).length) return o ? (this.sendBrandToCardSF({
    brand: "reset"
  }), this.sendExpiryDatePolicyToSF({
    expiryDatePolicy: "required"
  })) : t && this.processBrand(Jl(Jl({}, t), {}, {
    fieldType: "encryptedCardNumber"
  })), void ("card" === this.state.type && Tt(this.state.securedFields, "encryptedExpiryDate") && (this.state.securedFields.encryptedExpiryDate.expiryDatePolicy = "required"));
  var i = e.supportedBrands[0],
      l = i.brand,
      s = null !== (r = i.expiryDatePolicy) && void 0 !== r ? r : !0 === i.showExpiryDate ? "required" : "hidden",
      c = {
    brand: l,
    cvcPolicy: i.cvcPolicy,
    expiryDatePolicy: s,
    cvcText: "Security code",
    showSocialSecurityNumber: null !== (a = i.showSocialSecurityNumber) && void 0 !== a && a,
    fieldType: "encryptedCardNumber"
  };

  if (this.processBrand(c), o) {
    var u = Jl({
      brand: l,
      enableLuhnCheck: !1 !== e.supportedBrands[0].enableLuhnCheck
    }, (null == i ? void 0 : i.panLength) && {
      panLength: null == i ? void 0 : i.panLength
    });
    this.sendBrandToCardSF(u), this.sendExpiryDatePolicyToSF({
      expiryDatePolicy: s
    });
  }

  Tt(this.state.securedFields, "encryptedSecurityCode") && (this.state.securedFields.encryptedSecurityCode.cvcPolicy = i.cvcPolicy), Tt(this.state.securedFields, "encryptedExpiryDate") ? this.state.securedFields.encryptedExpiryDate.expiryDatePolicy = s : Tt(this.state.securedFields, "encryptedExpiryMonth") && Tt(this.state.securedFields, "encryptedExpiryYear") && (this.state.securedFields.encryptedExpiryMonth.expiryDatePolicy = s, this.state.securedFields.encryptedExpiryYear.expiryDatePolicy = s), this.validateForm();
}

function ts(e, t, n) {
  var r = e.csfState,
      a = e.csfConfig;

  if (Tt(r.securedFields, t)) {
    var o = {
      txVariant: r.type,
      fieldType: t,
      focus: !0,
      numKey: r.securedFields[t].numKey
    };
    cl(o, ul(r, t), a.loadingContext);
  }
}

function ns(e, t) {
  var r = e.csfState,
      a = e.csfConfig,
      o = n$1(t || {});

  if (o.length) {
    var i = n$1(r.securedFields);
    p$1(i).call(i, function (e) {
      var n = {
        txVariant: r.type,
        fieldType: e,
        numKey: r.securedFields[e].numKey
      };
      p$1(o).call(o, function (e) {
        n[e] = t[e];
      }), cl(n, ul(r, e), a.loadingContext);
    });
  }
}

var rs = function (e, t) {
  return !qi(e, t);
};

function as(e, t) {
  var n = e.csfState,
      r = e.csfConfig,
      a = e.csfProps,
      o = e.csfCallbacks;

  if ("encryptedCardNumber" === t.fieldType) {
    var i = {
      brand: t.brand,
      cvcPolicy: t.cvcPolicy,
      expiryDatePolicy: t.expiryDatePolicy,
      showSocialSecurityNumber: t.showSocialSecurityNumber
    },
        l = rs(i, n.brand);
    if (!l) return null;
    var s = "card" === n.type || "bcmc" === n.type;

    if (s && l && (n.brand = i, Tt(n.securedFields, "encryptedSecurityCode"))) {
      var c = {
        txVariant: n.type,
        brand: i.brand,
        fieldType: "encryptedSecurityCode",
        cvcPolicy: t.cvcPolicy,
        numKey: n.securedFields.encryptedSecurityCode.numKey
      };
      cl(c, ul(n, "encryptedSecurityCode"), r.loadingContext);
    }

    var u = s ? _l(["brand", "cvcPolicy", "cvcText", "expiryDatePolicy", "showSocialSecurityNumber"]).from(t) : null;

    if (u && u.brand) {
      var d = u;
      d.type = n.type, d.rootNode = a.rootNode, o.onBrand(d);
    }

    return !0;
  }

  return !1;
}

function os(e, t) {
  var o = n$1(e);

  if (r$1) {
    var i = r$1(e);
    t && (i = f$1(i).call(i, function (t) {
      return a$1(e, t).enumerable;
    })), o.push.apply(o, i);
  }

  return o;
}

function is(e, t) {
  var n = e.csfState,
      r = e.csfConfig,
      s = e.csfCallbacks;

  if ("cc-name" === t.name) {
    var c = function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n,
            r,
            s = null != arguments[t] ? arguments[t] : {};
        t % 2 ? p$1(n = os(Object(s), !0)).call(n, function (t) {
          _defineProperty(e, t, s[t]);
        }) : o$1 ? i(e, o$1(s)) : p$1(r = os(Object(s))).call(r, function (t) {
          l$1(e, t, a$1(s, t));
        });
      }

      return e;
    }({}, t);

    delete c.numKey;
    var u = c;
    s.onAutoComplete(u);
  }

  if ("cc-exp" === t.name) {
    var f,
        h = t.value.replace(/[^0-9]/gi, "/").split("/");
    if (2 !== h.length) return;
    1 === h[0].length && (h[0] = "0".concat(h[0]));
    var m = h[0],
        v = h[1].substr(2),
        g = y$1(f = "".concat(m, "/")).call(f, v);

    if (Tt(n.securedFields, "encryptedExpiryDate")) {
      var b = {
        txVariant: n.type,
        fieldType: "encryptedExpiryDate",
        autoComplete: g,
        numKey: n.securedFields.encryptedExpiryDate.numKey
      };
      return void cl(b, ul(n, "encryptedExpiryDate"), r.loadingContext);
    }

    if (Tt(n.securedFields, "encryptedExpiryMonth")) {
      var _ = {
        txVariant: n.type,
        fieldType: "encryptedExpiryMonth",
        autoComplete: m,
        numKey: n.securedFields.encryptedExpiryMonth.numKey
      };
      cl(_, ul(n, "encryptedExpiryMonth"), r.loadingContext);
    }

    Tt(n.securedFields, "encryptedExpiryYear") && q(function () {
      var e = {
        txVariant: n.type,
        fieldType: "encryptedExpiryYear",
        autoComplete: v,
        numKey: n.securedFields.encryptedExpiryYear.numKey
      };
      cl(e, ul(n, "encryptedExpiryYear"), r.loadingContext);
    }, 0);
  }
}

function ls(e, t) {
  var o = n$1(e);

  if (r$1) {
    var i = r$1(e);
    t && (i = f$1(i).call(i, function (t) {
      return a$1(e, t).enumerable;
    })), o.push.apply(o, i);
  }

  return o;
}

function ss(e, t) {
  var n = e.csfState,
      r = e.csfProps,
      s = e.csfCallbacks,
      c = function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var n,
          r,
          s = null != arguments[t] ? arguments[t] : {};
      t % 2 ? p$1(n = ls(Object(s), !0)).call(n, function (t) {
        _defineProperty(e, t, s[t]);
      }) : o$1 ? i(e, o$1(s)) : p$1(r = ls(Object(s))).call(r, function (t) {
        l$1(e, t, a$1(s, t));
      });
    }

    return e;
  }({}, t);

  delete c.numKey, c.rootNode = r.rootNode, c.type = n.type;
  var u = c.fieldType;
  c.focus ? n.currentFocusObject !== u && (n.currentFocusObject = u, Ul.__IS_IOS && !n.registerFieldForIos && this.handleIOSTouchEvents()) : n.currentFocusObject === u && (n.currentFocusObject = null);
  var f = c;
  f.currentFocusObject = n.currentFocusObject, s.onFocus(f);
}

function cs(e, t, n) {
  var r = e.csfState,
      a = e.csfCallbacks;

  if (r.iframeConfigCount += 1, r.isConfigured) {
    var o = {
      additionalIframeConfigured: !0,
      fieldType: n.fieldType,
      type: r.type
    };
    a.onAdditionalSFConfig(o);
  } else if (r.iframeConfigCount === r.originalNumIframes) return t(), !0;

  return !1;
}

function us(e, t) {
  var n = e.csfState,
      r = e.csfConfig,
      a = e.csfProps,
      o = e.csfCallbacks;
  n.isConfigured = !0;
  var i = {
    iframesConfigured: !0,
    type: n.type,
    rootNode: a.rootNode
  };

  if (o.onConfigSuccess(i), 1 === n.numIframes && r.isCreditCardType) {
    if ("card" === n.type) return void $i("ERROR: Payment method with a single secured field - but 'type' has not been set to a specific card brand");
    var l,
        s = fl(n.type);
    if (s) "required" !== (null !== (l = s.cvcPolicy) && void 0 !== l ? l : "required") && t();
  }
}

function ds(e) {
  var t = e.csfState,
      r = e.csfProps,
      a = e.csfCallbacks,
      o = function (e) {
    for (var t = n$1(e), r = 0, a = t.length; r < a; r += 1) if (!e[t[r]].isValid) return !1;

    return !0;
  }(t.securedFields),
      i = o !== t.allValid;

  if (t.allValid = o, o || i) {
    var l = {
      allValid: o,
      type: t.type,
      rootNode: r.rootNode
    };
    a.onAllValid(l);
  }
}

function ps(e, t) {
  var n = e.csfState,
      r = e.csfCallbacks,
      a = t.binValue,
      o = t.encryptedBin,
      i = t.uuid,
      l = {
    binValue: a,
    type: n.type
  };
  o && (l.encryptedBin = o, l.uuid = i), r.onBinValue(l);
}

function fs() {
  var e = this;
  this.postMessageToAllIframes({
    destroy: !0
  });
  var t = n$1(this.state.securedFields);
  p$1(t).call(t, function (t) {
    var n = e.state.securedFields[t];
    n && n.destroy(), e.state.securedFields[t] = null;
  }), this.destroyTouchendListener(), this.destroyTouchstartListener(), this.state.securedFields = {};
}

function hs(e) {
  var t = function () {
    if ("undefined" == typeof Reflect || !S) return !1;
    if (S.sham) return !1;
    if ("function" == typeof Proxy) return !0;

    try {
      return Boolean.prototype.valueOf.call(S(Boolean, [], function () {})), !0;
    } catch (e) {
      return !1;
    }
  }();

  return function () {
    var n,
        r = _getPrototypeOf(e);

    if (t) {
      var a = _getPrototypeOf(this).constructor;
      n = S(r, arguments, a);
    } else n = r.apply(this, arguments);

    return _possibleConstructorReturn(this, n);
  };
}

var ys = function () {
  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "You cannot use secured fields";
  Ji("".concat(e, " - they are not yet configured. Use the 'onConfigSuccess' callback to know when this has happened."));
},
    ms = function (e) {
  _inherits(n, Ti);
  var t = hs(n);

  function n(e) {
    var r, a, o;
    _classCallCheck(this, n), (o = t.call(this, e)).state = {
      type: o.props.type,
      brand: "card" !== o.props.type ? {
        brand: o.props.type,
        cvcPolicy: "required"
      } : {
        brand: null,
        cvcPolicy: "required"
      },
      allValid: void 0,
      numIframes: 0,
      originalNumIframes: 0,
      iframeCount: 0,
      iframeConfigCount: 0,
      isConfigured: !1,
      hasSeparateDateFields: !1,
      currentFocusObject: null,
      registerFieldForIos: !1,
      securedFields: {},
      isKCP: !1
    };
    var i = {
      csfState: o.state,
      csfConfig: o.config,
      csfProps: o.props,
      csfCallbacks: o.callbacks
    };
    return o.configHandler = Qi, o.callbacksHandler = el, o.validateForm = Hi(ds, i), o.isConfigured = Hi(us, i, o.validateForm), o.handleIframeConfigFeedback = Hi(cs, i, o.isConfigured), o.processBrand = Hi(as, i), o.handleValidation = sl, o.handleEncryption = dl, o.createSecuredFields = Ml, o.createNonCardSecuredFields = Tl, o.createCardSecuredFields = Il, o.setupSecuredField = jl, o.postMessageToAllIframes = Hi(ns, i), o.setFocusOnFrame = Hi(ts, i), o.handleFocus = Hi(ss, i), o.handleIOSTouchEvents = Hl, o.touchendListener = m$1(r = ql).call(r, _assertThisInitialized(o)), o.destroyTouchendListener = zl, o.touchstartListener = m$1(a = Kl).call(a, _assertThisInitialized(o)), o.destroyTouchstartListener = Wl, o.handleSFShiftTab = $l, o.handleShiftTab = Yl, o.destroySecuredFields = fs, o.processAutoComplete = Hi(is, i), o.handleBinValue = Hi(ps, i), o.handleBrandFromBinLookup = es, o.sendBrandToCardSF = Ql, o.sendExpiryDatePolicyToSF = Xl, o.init(), o;
  }

  return _createClass(n, [{
    key: "init",
    value: function () {
      this.configHandler(), this.callbacksHandler(this.props.callbacks);
      var e = this.createSecuredFields();
      this.state.numIframes = this.state.originalNumIframes = e, this.state.isKCP = !!this.props.isKCP, Ul.__IS_IOS && ol(document, "touchstart", this.touchstartListener);
    }
  }, {
    key: "createReturnObject",
    value: function () {
      var e = this;
      return {
        updateStyles: function (t) {
          e.state.isConfigured ? e.postMessageToAllIframes({
            styleObject: t
          }) : Ji("You cannot update the secured fields styling - they are not yet configured. Use the 'onConfigSuccess' callback to know when this has happened.");
        },
        setFocusOnFrame: function (t) {
          e.state.isConfigured ? e.setFocusOnFrame(t) : ys("You cannot set focus on any secured field");
        },
        isValidated: function (t, n) {
          if (e.state.isConfigured) {
            if (Tt(e.state.securedFields, t)) {
              e.state.securedFields[t].hasError = !0, "" === e.state.securedFields[t].errorType && (e.state.securedFields[t].errorType = "isValidated");
              var r = {
                txVariant: e.state.type,
                fieldType: t,
                externalValidation: !0,
                code: n,
                numKey: e.state.securedFields[t].numKey
              };
              cl(r, ul(e.state, t), e.config.loadingContext);
            }
          } else ys("You cannot set validated on any secured field");
        },
        hasUnsupportedCard: function (t, n) {
          if (e.state.isConfigured) {
            if (Tt(e.state.securedFields, t)) {
              e.state.securedFields[t].hasError = !!n, e.state.securedFields[t].errorType = n;
              var r = {
                txVariant: e.state.type,
                fieldType: t,
                unsupportedCard: !!n,
                code: n,
                numKey: e.state.securedFields[t].numKey
              };
              cl(r, ul(e.state, t), e.config.loadingContext);
            }
          } else ys("You cannot set hasUnsupportedCard on any secured field");
        },
        destroy: function () {
          e.state.isConfigured ? e.destroySecuredFields() : ys("You cannot destroy secured fields");
        },
        brandsFromBinLookup: function (t, n) {
          if (!e.config.isCreditCardType) return null;
          e.state.isConfigured ? e.handleBrandFromBinLookup(t, n) : ys("You cannot set pass brands to secured fields");
        },
        addSecuredField: function (t) {
          var n = rl(e.props.rootNode, '[data-cse="'.concat(t, '"]'));
          n && (e.state.numIframes += 1, e.setupSecuredField(n));
        },
        removeSecuredField: function (t) {
          if (e.state.securedFields[t]) {
            e.state.securedFields[t].destroy(), delete e.state.securedFields[t], e.state.numIframes -= 1;
            var n = {
              additionalIframeRemoved: !0,
              fieldType: t,
              type: e.state.type
            };
            e.callbacks.onAdditionalSFRemoved(n);
          }
        },
        setKCPStatus: function (t) {
          e.state.isKCP = t;
        },
        sfIsOptionalOrHidden: function (t) {
          return e.state.securedFields[t].isOptionalOrHidden();
        }
      };
    }
  }]), n;
}();

function vs(e, t) {
  var o = n$1(e);

  if (r$1) {
    var i = r$1(e);
    t && (i = f$1(i).call(i, function (t) {
      return a$1(e, t).enumerable;
    })), o.push.apply(o, i);
  }

  return o;
}

var gs = function (e) {
  if (!e) throw new Error("No securedFields configuration object defined");

  var t = function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var n,
          r,
          s = null != arguments[t] ? arguments[t] : {};
      t % 2 ? p$1(n = vs(Object(s), !0)).call(n, function (t) {
        _defineProperty(e, t, s[t]);
      }) : o$1 ? i(e, o$1(s)) : p$1(r = vs(Object(s))).call(r, function (t) {
        l$1(e, t, a$1(s, t));
      });
    }

    return e;
  }({}, e);

  try {
    var n = hl(t.type);
    t.type = n ? "card" : t.type;
  } catch (e) {
    t.type = "card";
  }

  if (!Tt(t, "rootNode")) return $i('ERROR: SecuredFields configuration object is missing a "rootNode" property'), null;
  if (Ki(t.clientKey)) return Ji('WARNING: AdyenCheckout configuration object is missing a "clientKey" property.'), null;
  var r = bs(t.rootNode);
  return r ? (t.rootNode = r, new ms(t).createReturnObject()) : (window.console && window.console.error && window.console.error("ERROR: SecuredFields cannot find a valid rootNode element for", t.type), null);
},
    bs = function (e) {
  var t;
  return "object" === _typeof(e) && (t = e), "string" != typeof e || (t = rl(document, e)) ? t : null;
};

function _s(e, t) {
  var o = n$1(e);

  if (r$1) {
    var i = r$1(e);
    t && (i = f$1(i).call(i, function (t) {
      return a$1(e, t).enumerable;
    })), o.push.apply(o, i);
  }

  return o;
}

function Cs(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n,
        r,
        s = null != arguments[t] ? arguments[t] : {};
    t % 2 ? p$1(n = _s(Object(s), !0)).call(n, function (t) {
      _defineProperty(e, t, s[t]);
    }) : o$1 ? i(e, o$1(s)) : p$1(r = _s(Object(s))).call(r, function (t) {
      l$1(e, t, a$1(s, t));
    });
  }

  return e;
}

function ks(e, t, n, r) {
  return ("optional" !== t && "hidden" !== t || 0 !== n[e]) && r[e];
}

var Ns = function (e) {
  this.numCharsInField[e.fieldType] = e.numChars, this.props.onFocus(e);
},
    ws = function (e) {
  var t = this;
  return !this.state.detectedUnsupportedBrands && (this.setState({
    isSfpValid: e.allValid
  }, function () {
    t.props.onChange(t.state, {
      event: "handleOnAllValid"
    }), t.props.onAllValid(e);
  }), !0);
},
    Ss = function (e) {
  var t = this;
  this.setState({
    autoCompleteName: e.value
  }, function () {
    t.props.onChange(t.state, {
      event: "handleOnAutoComplete",
      fieldType: e.fieldType
    }), t.setState({
      autoCompleteName: null
    });
  }), this.props.onAutoComplete(e);
},
    xs = function (e) {
  var t = this;
  return (!this.state.detectedUnsupportedBrands || "encryptedCardNumber" !== e.fieldType) && (this.setState(function (t) {
    var n;
    return {
      data: Cs(Cs({}, t.data), {}, _defineProperty({}, e.encryptedFieldName, e.blob)),
      valid: Cs(Cs({}, t.valid), {}, _defineProperty({}, e.encryptedFieldName, e.valid)),
      errors: Cs(Cs({}, t.errors), {}, _defineProperty({}, e.fieldType, null !== (n = t.errors[e.fieldType]) && void 0 !== n && n))
    };
  }, function () {
    t.props.onChange(t.state, {
      event: "handleOnFieldValid",
      fieldType: e.fieldType
    }), t.props.onFieldValid(e);
  }), !0);
},
    Ps = function (e) {
  var t = this;
  this.props.onLoad(e), this.invalidOriginErrorTimeout = q(function () {
    "ready" !== t.state.status && (t.setState({
      status: "invalidOriginError"
    }), t.props.onError({
      error: "invalidOriginError",
      fieldType: "defaultError"
    }));
  }, this.invalidOriginTimeoutMS);
},
    Fs = function (e) {
  var t = this;
  clearTimeout(this.invalidOriginErrorTimeout), this.setState({
    status: "ready"
  }, function () {
    t.props.onConfigSuccess(e);
  });
},
    As = function (e) {
  var t = this;
  this.setState(function (n) {
    var r,
        a,
        o = ks("encryptedSecurityCode", e.cvcPolicy, t.numCharsInField, n.errors),
        i = 1 === t.numDateFields ? ks("encryptedExpiryDate", e.expiryDatePolicy, t.numCharsInField, n.errors) : null,
        l = 2 === t.numDateFields ? ks("encryptedExpiryMonth", e.expiryDatePolicy, t.numCharsInField, n.errors) : null,
        s = 2 === t.numDateFields ? ks("encryptedExpiryYear", e.expiryDatePolicy, t.numCharsInField, n.errors) : null;
    return {
      brand: e.brand,
      cvcPolicy: null !== (r = e.cvcPolicy) && void 0 !== r ? r : "required",
      showSocialSecurityNumber: e.showSocialSecurityNumber,
      errors: Cs(Cs(Cs(Cs(Cs({}, n.errors), Vi(o) && _defineProperty({}, "encryptedSecurityCode", o)), Vi(i) && _defineProperty({}, "encryptedExpiryDate", i)), Vi(l) && _defineProperty({}, "encryptedExpiryMonth", l)), Vi(s) && _defineProperty({}, "encryptedExpiryYear", s)),
      expiryDatePolicy: null !== (a = e.expiryDatePolicy) && void 0 !== a ? a : "required"
    };
  }, function () {
    var n, r;
    t.props.onChange(t.state, {
      event: "handleOnBrand"
    });
    var a = null !== (n = null === (r = t.props.brandsConfiguration[e.brand]) || void 0 === r ? void 0 : r.icon) && void 0 !== n ? n : gl(e.brand, t.props.loadingContext);
    t.props.onBrand(Cs(Cs({}, e), {}, {
      brandImageUrl: a
    }));
  });
},
    Bs = function (e) {
  var t = this,
      n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
      r = e.error;
  return this.setState(function (t) {
    return Cs(Cs(Cs({
      errors: Cs(Cs({}, t.errors), {}, _defineProperty({}, e.fieldType, r || !1))
    }, n && {
      data: Cs(Cs({}, t.data), {}, _defineProperty({}, "encryptedCardNumber", void 0))
    }), n && {
      valid: Cs(Cs({}, t.valid), {}, _defineProperty({}, "encryptedCardNumber", !1))
    }), n && {
      isSfpValid: !1
    });
  }, function () {
    t.props.onChange(t.state, {
      event: "handleOnError",
      fieldType: e.fieldType
    });
  }), !0;
},
    Es = function () {
  var e = this;
  this.setState({
    status: "ready"
  }, function () {
    return e.props.onChange({
      isSfpValid: !0
    });
  });
},
    Rs = function (e) {
  this.props.onTouchstartIOS(e);
};

function Os(e, t) {
  var o = n$1(e);

  if (r$1) {
    var i = r$1(e);
    t && (i = f$1(i).call(i, function (t) {
      return a$1(e, t).enumerable;
    })), o.push.apply(o, i);
  }

  return o;
}

function Ds(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n,
        r,
        s = null != arguments[t] ? arguments[t] : {};
    t % 2 ? p$1(n = Os(Object(s), !0)).call(n, function (t) {
      _defineProperty(e, t, s[t]);
    }) : o$1 ? i(e, o$1(s)) : p$1(r = Os(Object(s))).call(r, function (t) {
      l$1(e, t, a$1(s, t));
    });
  }

  return e;
}

function Ms(e) {
  var t = function () {
    if ("undefined" == typeof Reflect || !S) return !1;
    if (S.sham) return !1;
    if ("function" == typeof Proxy) return !0;

    try {
      return Boolean.prototype.valueOf.call(S(Boolean, [], function () {})), !0;
    } catch (e) {
      return !1;
    }
  }();

  return function () {
    var n,
        r = _getPrototypeOf(e);

    if (t) {
      var a = _getPrototypeOf(this).constructor;
      n = S(r, arguments, a);
    } else n = r.apply(this, arguments);

    return _possibleConstructorReturn(this, n);
  };
}

var Ts,
    Is = function (e) {
  _inherits(r, d);
  var t = Ms(r);

  function r(e) {
    var n, a, o, i, l, s, u, p, f, h, y, v, g, b, _, C, k;

    _classCallCheck(this, r), k = t.call(this, e), _defineProperty(_assertThisInitialized(k), "invalidOriginErrorTimeout", void 0), _defineProperty(_assertThisInitialized(k), "invalidOriginTimeoutMS", void 0), _defineProperty(_assertThisInitialized(k), "numCharsInField", void 0), _defineProperty(_assertThisInitialized(k), "rootNode", void 0), _defineProperty(_assertThisInitialized(k), "numDateFields", void 0), _defineProperty(_assertThisInitialized(k), "csf", void 0), _defineProperty(_assertThisInitialized(k), "handleOnLoad", void 0), _defineProperty(_assertThisInitialized(k), "handleOnConfigSuccess", void 0), _defineProperty(_assertThisInitialized(k), "handleOnFieldValid", void 0), _defineProperty(_assertThisInitialized(k), "handleOnAllValid", void 0), _defineProperty(_assertThisInitialized(k), "handleOnBrand", void 0), _defineProperty(_assertThisInitialized(k), "handleFocus", void 0), _defineProperty(_assertThisInitialized(k), "handleOnError", void 0), _defineProperty(_assertThisInitialized(k), "handleOnAutoComplete", void 0), _defineProperty(_assertThisInitialized(k), "handleOnNoDataRequired", void 0), _defineProperty(_assertThisInitialized(k), "handleOnTouchstartIOS", void 0), _defineProperty(_assertThisInitialized(k), "state", void 0), _defineProperty(_assertThisInitialized(k), "props", void 0), _defineProperty(_assertThisInitialized(k), "issuingCountryCode", void 0), _defineProperty(_assertThisInitialized(k), "setRootNode", function (e) {
      k.rootNode = e;
    });
    var N = {
      status: "loading",
      brand: e.type,
      errors: {},
      valid: {},
      data: {},
      cvcPolicy: "required",
      expiryDatePolicy: "required",
      isSfpValid: !1,
      hasKoreanFields: e.hasKoreanFields
    };
    return k.state = N, k.invalidOriginErrorTimeout = null, k.invalidOriginTimeoutMS = 15e3, k.numCharsInField = {}, k.handleOnLoad = m$1(n = Ps).call(n, _assertThisInitialized(k)), k.handleOnConfigSuccess = m$1(a = Fs).call(a, _assertThisInitialized(k)), k.handleOnFieldValid = m$1(o = xs).call(o, _assertThisInitialized(k)), k.handleOnAllValid = m$1(i = ws).call(i, _assertThisInitialized(k)), k.handleOnBrand = m$1(l = As).call(l, _assertThisInitialized(k)), k.handleFocus = m$1(s = Ns).call(s, _assertThisInitialized(k)), k.handleOnError = m$1(u = Bs).call(u, _assertThisInitialized(k)), k.handleOnNoDataRequired = m$1(p = Es).call(p, _assertThisInitialized(k)), k.handleOnAutoComplete = m$1(f = Ss).call(f, _assertThisInitialized(k)), k.handleOnTouchstartIOS = m$1(h = Rs).call(h, _assertThisInitialized(k)), k.processBinLookupResponse = m$1(y = k.processBinLookupResponse).call(y, _assertThisInitialized(k)), k.setFocusOn = m$1(v = k.setFocusOn).call(v, _assertThisInitialized(k)), k.updateStyles = m$1(g = k.updateStyles).call(g, _assertThisInitialized(k)), k.handleUnsupportedCard = m$1(b = k.handleUnsupportedCard).call(b, _assertThisInitialized(k)), k.showValidation = m$1(_ = k.showValidation).call(_, _assertThisInitialized(k)), k.destroy = m$1(C = k.destroy).call(C, _assertThisInitialized(k)), k;
  }

  return _createClass(r, [{
    key: "componentDidMount",
    value: function () {
      var e = this;
      this.props.rootNode && this.setRootNode(this.props.rootNode);

      var t = function (e) {
        var t;
        return e ? K(t = G(Array.prototype).call(e.querySelectorAll('[data-cse*="encrypted"]'))).call(t, function (e) {
          return e.getAttribute("data-cse");
        }) : [];
      }(this.rootNode),
          n = k$1(t).call(t, Di, {});

      this.setState({
        valid: n
      }), p$1(t).call(t, function (t) {
        e.numCharsInField[t] = 0;
      }), this.numDateFields = f$1(t).call(t, function (e) {
        return e.match(/Expiry/);
      }).length, t.length ? (this.destroy(), this.initializeCSF(this.rootNode)) : this.handleOnNoDataRequired();
    }
  }, {
    key: "componentDidUpdate",
    value: function () {
      this.checkForKCPFields();
    }
  }, {
    key: "componentWillUnmount",
    value: function () {
      this.csf = null;
    }
  }, {
    key: "initializeCSF",
    value: function (e) {
      var t = this.props.loadingContext,
          n = {
        rootNode: e,
        type: this.props.type,
        clientKey: this.props.clientKey,
        cardGroupTypes: this.props.brands,
        allowedDOMAccess: this.props.allowedDOMAccess,
        autoFocus: this.props.autoFocus,
        trimTrailingSeparator: this.props.trimTrailingSeparator,
        loadingContext: t,
        keypadFix: this.props.keypadFix,
        showWarnings: this.props.showWarnings,
        iframeUIConfig: {
          sfStyles: this.props.styles
        },
        i18n: this.props.i18n,
        callbacks: {
          onLoad: this.handleOnLoad,
          onConfigSuccess: this.handleOnConfigSuccess,
          onFieldValid: this.handleOnFieldValid,
          onAllValid: this.handleOnAllValid,
          onBrand: this.handleOnBrand,
          onError: this.handleOnError,
          onFocus: this.handleFocus,
          onBinValue: this.props.onBinValue,
          onAutoComplete: this.handleOnAutoComplete,
          onAdditionalSFConfig: this.props.onAdditionalSFConfig,
          onAdditionalSFRemoved: this.props.onAdditionalSFRemoved,
          onTouchstartIOS: this.handleOnTouchstartIOS
        },
        isKCP: this.state.hasKoreanFields,
        legacyInputMode: this.props.legacyInputMode,
        minimumExpiryDate: this.props.minimumExpiryDate,
        implementationType: this.props.implementationType || "components",
        isCollatingErrors: this.props.isCollatingErrors
      };
      this.csf = gs(n);
    }
  }, {
    key: "checkForKCPFields",
    value: function () {
      var e = this,
          t = !1;

      if (this.props.koreanAuthenticationRequired && (t = this.issuingCountryCode ? "kr" === this.issuingCountryCode : "kr" === this.props.countryCode), this.state.hasKoreanFields && !t) {
        this.setState(function (e) {
          return {
            data: Ds(Ds({}, e.data), {}, _defineProperty({}, "encryptedPassword", void 0)),
            valid: Ds(Ds({}, e.valid), {}, _defineProperty({}, "encryptedPassword", !1)),
            errors: Ds(Ds({}, e.errors), {}, _defineProperty({}, "encryptedPassword", !1)),
            hasKoreanFields: !1
          };
        }, function () {
          e.props.onChange(e.state);
        }), this.csf.removeSecuredField("encryptedPassword"), this.csf.setKCPStatus(!1);
      }

      if (!this.state.hasKoreanFields && t) {
        this.setState(function (e) {
          return {
            valid: Ds(Ds({}, e.valid), {}, _defineProperty({}, "encryptedPassword", !1)),
            hasKoreanFields: !0,
            isSfpValid: !1
          };
        }, function () {
          e.props.onChange(e.state);
        }), this.csf.addSecuredField("encryptedPassword"), this.csf.setKCPStatus(!0);
      }
    }
  }, {
    key: "getChildContext",
    value: function () {
      return {
        i18n: this.props.i18n
      };
    }
  }, {
    key: "handleUnsupportedCard",
    value: function (e) {
      var t = !!e.error;
      return t && this.setState({
        detectedUnsupportedBrands: e.detectedBrands
      }), e.rootNode = this.rootNode, this.handleOnError(e, t), this.csf && this.csf.hasUnsupportedCard("encryptedCardNumber", e.error), t;
    }
  }, {
    key: "setFocusOn",
    value: function (e) {
      this.csf && this.csf.setFocusOnFrame(e);
    }
  }, {
    key: "updateStyles",
    value: function (e) {
      this.csf && this.csf.updateStyles(e);
    }
  }, {
    key: "sfIsOptionalOrHidden",
    value: function (e) {
      return this.csf.sfIsOptionalOrHidden(e);
    }
  }, {
    key: "destroy",
    value: function () {
      this.csf && this.csf.destroy();
    }
  }, {
    key: "showValidation",
    value: function () {
      var e,
          t,
          r = this,
          a = this.numDateFields,
          o = this.state;
      p$1(e = k$1(t = n$1(o.valid)).call(t, Mi(a, o), [])).call(e, function (e) {
        var t = function (e, t, n) {
          return {
            rootNode: t,
            fieldType: e,
            error: He(n, "errors.".concat(e)) || dn,
            type: "card"
          };
        }(e, r.rootNode, o);

        r.handleOnError(t, !!o.detectedUnsupportedBrands), r.csf && r.csf.isValidated && r.csf.isValidated(e, t.error);
      });
    }
  }, {
    key: "mapErrorsToValidationRuleResult",
    value: function () {
      var e = this,
          t = n$1(this.state.errors);
      return k$1(t).call(t, function (t, n) {
        return e.state.errors[n] ? t[n] = Ds({
          isValid: !1,
          errorMessage: Nl(e.state.errors[n]),
          errorI18n: e.props.i18n.get(e.state.errors[n]),
          error: e.state.errors[n],
          rootNode: e.rootNode
        }, e.state.detectedUnsupportedBrands && {
          detectedBrands: e.state.detectedUnsupportedBrands
        }) : t[n] = null, t;
      }, {});
    }
  }, {
    key: "processBinLookupResponse",
    value: function (e, t) {
      var n,
          r = this;

      if (this.state.detectedUnsupportedBrands && (this.setState(function (e) {
        return {
          errors: Ds(Ds({}, e.errors), {}, _defineProperty({}, "encryptedCardNumber", !1)),
          detectedUnsupportedBrands: null
        };
      }), this.csf && e)) {
        this.handleUnsupportedCard({
          type: "card",
          fieldType: "encryptedCardNumber",
          error: ""
        });
      }

      this.issuingCountryCode = null == e || null === (n = e.issuingCountryCode) || void 0 === n ? void 0 : n.toLowerCase();
      var a = (null == t ? void 0 : t.brand) && h$1(Oi).call(Oi, t.brand);
      a && this.setState(t, function () {
        r.props.onChange(r.state);
      }), this.csf && this.csf.brandsFromBinLookup(e, a ? t : null);
    }
  }, {
    key: "render",
    value: function (e, t) {
      return e.render({
        setRootNode: this.setRootNode,
        setFocusOn: this.setFocusOn
      }, t);
    }
  }]), r;
}();

_defineProperty(Is, "defaultProps", {
  type: "card",
  keypadFix: !0,
  rootNode: null,
  loadingContext: null,
  brands: [],
  allowedDOMAccess: !1,
  showWarnings: !1,
  autoFocus: !0,
  trimTrailingSeparator: !0,
  onChange: function () {},
  onLoad: function () {},
  onConfigSuccess: function () {},
  onAllValid: function () {},
  onFieldValid: function () {},
  onBrand: function () {},
  onError: function () {},
  onBinValue: function () {},
  onFocus: function () {},
  onAutoComplete: function () {},
  onTouchstartIOS: function () {
    return null;
  },
  styles: {}
}), function (e) {
  e.full = "full", e.partial = "partial", e.none = "none";
}(Ts || (Ts = {}));
var js = {
  type: "card",
  setComponentRef: function () {},
  hasHolderName: !1,
  holderNameRequired: !1,
  enableStoreDetails: !1,
  hasCVC: !0,
  showBrandIcon: !0,
  showBrandsUnderCardNumber: !0,
  positionHolderNameOnTop: !1,
  billingAddressRequired: !1,
  billingAddressMode: Ts.full,
  billingAddressRequiredFields: ["street", "houseNumberOrName", "postalCode", "city", "stateOrProvince", "country"],
  installmentOptions: {},
  configuration: {
    koreanAuthenticationRequired: !1,
    socialSecurityNumberMode: "auto"
  },
  autoFocus: !0,
  onLoad: function () {},
  onConfigSuccess: function () {},
  onAllValid: function () {},
  onFieldValid: function () {},
  onBrand: function () {},
  onError: function () {},
  onBinValue: function () {},
  onBlur: function () {},
  onFocus: function () {},
  onChange: function () {},
  data: {
    billingAddress: {}
  },
  styles: {},
  placeholders: {},
  SRConfig: {}
},
    Vs = {
  base: {
    caretColor: "#0066FF"
  }
};

function Ls(e) {
  return e.replace(/\W/gi, "").replace(/(\d{3})(?!$)/g, "$1.").replace(/(.{11}).(\d{1,2})$/g, "$1-$2");
}

function Us(e) {
  return e.replace(/^(\d{2})(\d{3})(\d{3})?(\d{4})?(\d{1,2})?$/g, function (e, t, n, r) {
    var a,
        o,
        i,
        l,
        s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
        c = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "";
    return y$1(a = y$1(o = y$1(i = y$1(l = "".concat(t, ".")).call(l, n, ".")).call(i, r, "/")).call(o, s)).call(a, c.length ? "-".concat(c) : "");
  });
}

function qs(e) {
  var t;
  return J(t = e.replace(/[^0-9]/g, "")).call(t);
}

function Ks() {
  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
  if ("string" != typeof e) return "";
  var t = qs(e),
      n = t.length > 11 ? Us(t) : Ls(t);
  return n;
}

function Hs(e) {
  return /(^\d{3}\.\d{3}\.\d{3}-\d{2}$)|(^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$)/.test(e);
}

var zs = {
  socialSecurityNumber: Ks
},
    Ws = {
  socialSecurityNumber: [{
    modes: ["blur"],
    validate: function (e) {
      return Or(e) ? null : Hs(e);
    },
    errorMessage: "boleto.socialSecurityNumber.invalid"
  }],
  taxNumber: [{
    modes: ["blur"],
    validate: function (e) {
      return Or(e) ? null : 6 === (null == e ? void 0 : e.length) || 10 === (null == e ? void 0 : e.length);
    },
    errorMessage: "creditCard.taxNumber.invalid"
  }],
  holderName: [{
    modes: ["blur"],
    validate: function (e) {
      return !Or(e) || null;
    },
    errorMessage: "creditCard.holderName.invalid"
  }],
  default: [{
    modes: ["blur"],
    validate: function (e) {
      return !!e && "string" == typeof e && J(e).call(e).length > 0;
    }
  }]
};

function Gs(e) {
  var t = _slicedToArray(e, 2),
      n = t[0],
      r = t[1];
  return {
    dualBrandSelectElements: [{
      id: n.brand,
      brandObject: n
    }, {
      id: r.brand,
      brandObject: r
    }],
    selectedBrandValue: "",
    leadBrand: n
  };
}

function Ys(e, t, r) {
  var a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
      o = e.type,
      i = e.cvcPolicy,
      l = t.sfp,
      s = r.dualBrandSelectElements,
      c = r.setDualBrandSelectElements,
      u = r.setSelectedBrandValue,
      d = r.issuingCountryCode,
      p = r.setIssuingCountryCode;
  return {
    processBinLookup: function (e, t) {
      var r,
          s = null != e && e.issuingCountryCode ? e.issuingCountryCode.toLowerCase() : null;

      if (p(s), !e || !n$1(e).length) {
        c([]), u("");
        var d = t && "card" !== o ? o : null;
        return l.current.processBinLookupResponse(e, {
          brand: d,
          cvcPolicy: i
        }), void (a.current = 0);
      }

      if (null !== (r = e.supportedBrands) && void 0 !== r && r.length) {
        var f = e.supportedBrands;

        if (f.length > 1) {
          var h = Gs(f);
          c(h.dualBrandSelectElements), u(h.selectedBrandValue), l.current.processBinLookupResponse({
            issuingCountryCode: e.issuingCountryCode,
            supportedBrands: [h.leadBrand]
          }), h.leadBrand.panLength > 0 && (a.current = h.leadBrand.panLength);
        } else c([]), u(""), u(f[0].brand), l.current.processBinLookupResponse({
          issuingCountryCode: e.issuingCountryCode,
          supportedBrands: f
        }), f[0].panLength > 0 && (a.current = f[0].panLength);
      }
    },
    handleDualBrandSelection: function (e) {
      var t = e;

      if (e instanceof Event) {
        var n = e.target;
        t = n.getAttribute("data-value") || n.getAttribute("alt");
      }

      u(t);
      var r = k$1(s).call(s, function (e, n) {
        return n.brandObject.brand === t && e.push(n.brandObject), e;
      }, []);
      l.current.processBinLookupResponse({
        issuingCountryCode: d,
        supportedBrands: r
      });
    }
  };
}

var $s = "socialSecurityNumber",
    Zs = ["encryptedCardNumber", "encryptedExpiryDate", "encryptedSecurityCode"],
    Js = ["holderName", "encryptedCardNumber", "encryptedExpiryDate", "encryptedSecurityCode"],
    Qs = ["encryptedCardNumber", "encryptedExpiryDate", "encryptedSecurityCode", "holderName"],
    Xs = ["taxNumber", "encryptedPassword"],
    ec = y$1(Zs).call(Zs, Xs),
    tc = y$1(Js).call(Js, Xs),
    nc = y$1(Qs).call(Qs, Xs),
    rc = y$1(Zs).call(Zs, [$s]),
    ac = y$1(Js).call(Js, [$s]),
    oc = y$1(Qs).call(Qs, [$s]),
    ic = function (e, t) {
  return rt({
    type: "card" === e ? "nocard" : e || "nocard",
    extension: "svg",
    loadingContext: t
  })(e);
},
    lc = function (e) {
  var t,
      n = e.errors,
      r = e.layout,
      a = e.i18n,
      o = e.countrySpecificLabels,
      i = k$1(t = pe(n)).call(t, function (e, t) {
    var n = _slicedToArray(t, 2),
        a = n[0];
    return n[1] && (e.push(a), he(e).call(e, function (e, t) {
      return C$1(r).call(r, e) - C$1(r).call(r, t);
    })), e;
  }, []);
  if (!i || !i.length) return null;
  var l = K(i).call(i, function (e) {
    var t,
        r = function (e, t, n) {
      switch (e) {
        case "holderName":
        case "taxNumber":
          return t.get("creditCard.".concat(e));

        case "socialSecurityNumber":
          return t.get("boleto.".concat(e));

        case "street":
        case "houseNumberOrName":
        case "postalCode":
        case "stateOrProvince":
        case "city":
        case "country":
          return null != n && n[e] ? t.get(null == n ? void 0 : n[e]) : t.get(e);

        default:
          var r,
              a,
              o = h$1(r = ["ach", "giftcard"]).call(r, e) ? e : "creditCard";
          return t.get(y$1(a = "".concat(o, ".")).call(a, e, ".aria.label"));
      }
    }(e, a, o),
        i = Tt(n[e], "errorI18n") ? n[e].errorI18n : a.get(n[e].errorMessage);

    return y$1(t = "".concat(r, ": ")).call(t, i, ".");
  });
  return l.length ? {
    errorMessages: l,
    fieldList: i
  } : null;
},
    sc = "LoadingWrapper-module_loading-input__form__ffCKa",
    cc = "LoadingWrapper-module_loading-input__form--loading__7GmVo",
    uc = "LoadingWrapper-module_loading-input__spinner__GxA51",
    dc = "LoadingWrapper-module_loading-input__spinner--active__ENNBS",
    pc = function (e) {
  var t,
      n = e.children,
      r = e.status,
      a = H("adyen-checkout__loading-input__form", sc, _defineProperty({}, cc, "loading" === r)),
      o = H((_defineProperty(t = {}, uc, !0), _defineProperty(t, dc, "loading" === r), t));
  return h("div", {
    style: {
      position: "relative"
    }
  }, h("div", {
    className: o
  }, h(at, null)), h("div", {
    className: a
  }, n));
};

function fc(e) {
  var t = e.frontCVC,
      n = void 0 !== t && t,
      r = H({
    "adyen-checkout__card__cvc__hint__wrapper": !0,
    "adyen-checkout__field__cvc--front-hint": !!n,
    "adyen-checkout__field__cvc--back-hint": !n
  });
  return h("div", {
    className: r,
    "aria-hidden": !0
  }, h("svg", {
    className: "adyen-checkout__card__cvc__hint adyen-checkout__card__cvc__hint--front",
    width: "27",
    height: "18",
    viewBox: "0 0 27 18",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, h("path", {
    d: "M0 3C0 1.34315 1.34315 0 3 0H24C25.6569 0 27 1.34315 27 3V15C27 16.6569 25.6569 18 24 18H3C1.34315 18 0 16.6569 0 15V3Z",
    fill: "#E6E9EB"
  }), h("rect", {
    x: "4",
    y: "12",
    width: "19",
    height: "2",
    fill: "#B9C4C9"
  }), h("rect", {
    x: "4",
    y: "4",
    width: "4",
    height: "4",
    rx: "1",
    fill: "white"
  }), h("rect", {
    className: "adyen-checkout__card__cvc__hint__location",
    x: "16.5",
    y: "4.5",
    width: "7",
    height: "5",
    rx: "2.5",
    stroke: "#D10244"
  })), h("svg", {
    className: "adyen-checkout__card__cvc__hint adyen-checkout__card__cvc__hint--back",
    width: "27",
    height: "18",
    viewBox: "0 0 27 18",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, h("path", {
    d: "M27 4.00001V3.37501C27 2.4799 26.6444 1.62146 26.0115 0.988518C25.3786 0.355581 24.5201 0 23.625 0H3.375C2.47989 0 1.62145 0.355581 0.988514 0.988518C0.355579 1.62146 0 2.4799 0 3.37501V4.00001H27Z",
    fill: "#E6E9EB"
  }), h("path", {
    d: "M0 6.99994V14.6666C0 15.5507 0.355579 16.3985 0.988514 17.0237C1.62145 17.6488 2.47989 18 3.375 18H23.625C24.5201 18 25.3786 17.6488 26.0115 17.0237C26.6444 16.3985 27 15.5507 27 14.6666V6.99994H0Z",
    fill: "#E6E9EB"
  }), h("rect", {
    y: "4.00012",
    width: "27",
    height: "3.00001",
    fill: "#687282"
  }), h("path", {
    d: "M4 11C4 10.4477 4.44772 10 5 10H21C22.1046 10 23 10.8954 23 12C23 13.1046 22.1046 14 21 14H5C4.44771 14 4 13.5523 4 13V11Z",
    fill: "white"
  }), h("rect", {
    className: "adyen-checkout__card__cvc__hint__location",
    x: "16.5",
    y: "9.5",
    width: "7",
    height: "5",
    rx: "2.5",
    stroke: "#D10244"
  })));
}

var hc = {
  "card-input__wrapper": "CardInput-module_card-input__wrapper__wXSCw",
  "card-input__icon": "CardInput-module_card-input__icon__3Cz5M",
  "card-input__form": "CardInput-module_card-input__form__fRo1r",
  "card-input__spinner": "CardInput-module_card-input__spinner__-j2Qi",
  "card-input__spinner--active": "CardInput-module_card-input__spinner--active__slD7w",
  "card-input__form--loading": "CardInput-module_card-input__form--loading__rrmdj",
  "adyen-checkout__input": "CardInput-module_adyen-checkout__input__11tlB",
  "adyen-checkout__card__cvc__input--hidden": "CardInput-module_adyen-checkout__card__cvc__input--hidden__VIlHV",
  "adyen-checkout__card__exp-date__input--hidden": "CardInput-module_adyen-checkout__card__exp-date__input--hidden__evi6-",
  "adyen-checkout__card__exp-cvc__exp-date__input--hidden": "CardInput-module_adyen-checkout__card__exp-cvc__exp-date__input--hidden__YC3VT",
  "revolving-plan-installments__disabled": "CardInput-module_revolving-plan-installments__disabled__VhNj2"
};

function yc(e) {
  var t,
      n = (_defineProperty(t = {}, "data-cse", e.encryptedFieldType), _defineProperty(t, "data-info", e["data-info"]), _defineProperty(t, "data-uid", e.uniqueId), _defineProperty(t, "className", e.className), t);
  return h("span", n, e.children);
}

function mc(e) {
  var t,
      n,
      r = e.label,
      a = e.onFocusField,
      o = void 0 === a ? function () {} : a,
      i = e.error,
      l = void 0 === i ? "" : i,
      s = e.className,
      c = void 0 === s ? "" : s,
      u = e.classNameModifiers,
      p = void 0 === u ? [] : u,
      f = e.focused,
      h$1 = e.filled,
      m = e.isValid,
      v = e.frontCVC,
      g = void 0 !== v && v,
      b = e.cvcPolicy,
      C = void 0 === b ? "required" : b,
      k = Pt(),
      N = k.i18n,
      w = k.commonProps.isCollatingErrors,
      S = H(c, (_defineProperty(t = {
    "adyen-checkout__field__cvc": !0
  }, hc["adyen-checkout__card__cvc__input--hidden"], "hidden" === C), _defineProperty(t, "adyen-checkout__field__cvc--optional", "optional" === C), t)),
      x = H(_defineProperty({
    "adyen-checkout__input": !0,
    "adyen-checkout__input--small": !0,
    "adyen-checkout__card__cvc__input": !0,
    "adyen-checkout__input--error": l,
    "adyen-checkout__input--focus": f,
    "adyen-checkout__input--valid": m
  }, hc["adyen-checkout__input"], !0)),
      P = "optional" !== C ? r : N.get("creditCard.cvcField.title.optional");
  return h(yn, {
    label: P,
    focused: f,
    filled: h$1,
    classNameModifiers: y$1(n = []).call(n, _toConsumableArray(p), ["securityCode"]),
    onFocusField: function () {
      return o("encryptedSecurityCode");
    },
    className: S,
    errorMessage: l && N.get(l),
    isValid: m,
    dir: "ltr",
    name: "encryptedSecurityCode",
    isCollatingErrors: w
  }, h(yc, {
    encryptedFieldType: "encryptedSecurityCode",
    className: x
  }), h(fc, {
    frontCVC: g
  }));
}

function vc(e) {
  var t,
      n,
      r,
      a = e.brand,
      o = e.hasCVC,
      i = e.onFocusField,
      l = e.errors,
      s = e.valid,
      c = e.cvcPolicy,
      u = e.focusedElement,
      d = e.lastFour,
      p = e.expiryMonth,
      f = e.expiryYear,
      h$1 = Pt().i18n,
      m = h$1.get("creditCard.storedCard.description.ariaLabel").replace("%@", d),
      v = y$1(t = y$1(n = y$1(r = "".concat(m, " ")).call(r, h$1.get("creditCard.expiryDateField.title"), " ")).call(n, p, "/")).call(t, f);
  return h("div", {
    className: "adyen-checkout__card__form adyen-checkout__card__form--oneClick",
    "aria-label": v
  }, h("div", {
    className: "adyen-checkout__card__exp-cvc adyen-checkout__field-wrapper"
  }, h(yn, {
    label: h$1.get("creditCard.expiryDateField.title"),
    className: "adyen-checkout__field--50",
    classNameModifiers: ["storedCard"],
    disabled: !0
  }, h("div", {
    className: "adyen-checkout__input adyen-checkout__input--disabled adyen-checkout__card__exp-date__input--oneclick",
    dir: "ltr"
  }, p, " / ", f)), o && h(mc, {
    cvcPolicy: c,
    error: l.encryptedSecurityCode,
    focused: "encryptedSecurityCode" === u,
    filled: !!s.encryptedSecurityCode || !!l.encryptedSecurityCode,
    isValid: !!s.encryptedSecurityCode,
    label: h$1.get("creditCard.cvcField.title"),
    onFocusField: i,
    className: "adyen-checkout__field--50",
    classNameModifiers: ["storedCard"],
    frontCVC: "amex" === a
  })));
}

function gc(e, t) {
  var o = n$1(e);

  if (r$1) {
    var i = r$1(e);
    t && (i = f$1(i).call(i, function (t) {
      return a$1(e, t).enumerable;
    })), o.push.apply(o, i);
  }

  return o;
}

function bc(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n,
        r,
        s = null != arguments[t] ? arguments[t] : {};
    t % 2 ? p$1(n = gc(Object(s), !0)).call(n, function (t) {
      _defineProperty(e, t, s[t]);
    }) : o$1 ? i(e, o$1(s)) : p$1(r = gc(Object(s))).call(r, function (t) {
      l$1(e, t, a$1(s, t));
    });
  }

  return e;
}

function _c(e) {
  var t,
      n,
      r,
      a,
      o = Pt().i18n,
      i = e.amount,
      l = e.brand,
      s = e.onChange,
      c = e.type,
      u = e.installmentOptions[l] || e.installmentOptions.card,
      d = ft((null == u ? void 0 : u.preselectedValue) || (null == u ? void 0 : N$1(u)[0])),
      p = _slicedToArray(d, 2),
      f = p[0],
      y = p[1],
      m = ft("onetime"),
      v = _slicedToArray(m, 2),
      g = v[0],
      _ = v[1],
      C = null == u || null === (t = u.plans) || void 0 === t ? void 0 : h$1(t).call(t, "revolving"),
      k = function (e) {
    var t = e.target.value;
    y(Number(t));
  },
      w = function (e) {
    var t, n, r;
    return "amount" === c ? (t = "installmentOption", n = {
      count: e,
      values: {
        times: e,
        partialValue: (r = e, o.amount(i.value / r, i.currency))
      }
    }) : (t = "installmentOptionMonths", n = {
      count: e,
      values: {
        times: e
      }
    }), {
      id: e,
      name: i.value ? o.get(t, n) : "".concat(e)
    };
  };

  return yt(function () {
    var e,
        t = null != u && null !== (e = N$1(u)) && void 0 !== e && h$1(e).call(e, f) ? f : null == u ? void 0 : N$1(u)[0];
    y(t);
  }, [l]), yt(function () {
    var e = bc(bc({
      value: f
    }, C && "revolving" === g && {
      plan: g,
      value: 1
    }), C && "onetime" === g && {
      value: 1
    });
    s(u ? e : {
      value: null
    });
  }, [f, u, g]), u ? 0 === i.value ? null : h("div", {
    className: "adyen-checkout__installments"
  }, C ? h(ln, {
    classNameModifiers: ["revolving-plan"],
    label: ""
  }, h(Sn, {
    items: [{
      id: "onetime",
      name: "installments.oneTime"
    }, {
      id: "installments",
      name: "installments.installments"
    }, {
      id: "revolving",
      name: "installments.revolving"
    }],
    i18n: o,
    onChange: function (e) {
      var t = e.currentTarget.getAttribute("value");

      _(t);
    },
    value: g
  }), h(yn, {
    className: "".concat("installments" !== g ? hc["revolving-plan-installments__disabled"] : hc["revolving-plan-installments"]),
    classNameModifiers: ["revolving-plan-installments"]
  }, Zn("select", {
    filterable: !1,
    items: K(a = N$1(u)).call(a, w),
    selected: f,
    onChange: k,
    name: "installments"
  }))) : h(yn, {
    label: o.get("installments"),
    classNameModifiers: ["installments"]
  }, Zn("select", {
    filterable: !1,
    items: K(n = N$1(u)).call(n, w),
    selected: f,
    onChange: k,
    name: "installments",
    readonly: 1 === (null == u || null === (r = N$1(u)) || void 0 === r ? void 0 : r.length)
  }))) : null;
}

function Cc(e) {
  var t = e.id,
      n = void 0 === t ? "ariaConsolidatedErrorField" : t,
      r = e.heading,
      a = void 0 === r ? "Errors:" : r,
      o = e.errors,
      i = e.callbackFn,
      l = void 0 === i ? null : i,
      s = e.showPanel,
      c = void 0 !== s && s;
  if (!o) return null;
  var u = o.errorMessages;
  return yt(function () {
    null == l || l(o);
  }, [o]), h("div", {
    className: c ? "adyen-checkout-error-panel" : "adyen-checkout-error-panel--sr-only",
    id: n,
    "aria-live": "polite"
  }, h("div", {
    className: "adyen-checkout-error-panel__wrapper"
  }, h("div", {
    className: "adyen-checkout-error-panel__header"
  }, h("span", {
    className: "adyen-checkout-error-panel__title"
  }, a)), K(u).call(u, function (e) {
    return h("div", {
      key: e,
      className: "adyen-checkout-error-panel__error"
    }, e);
  })));
}

_c.defaultProps = {
  brand: "",
  amount: {},
  onChange: function () {}
};

var kc = function (e) {
  var t = e.collateErrors,
      n = e.errorFieldId,
      r = e.sfpState,
      a = e.setFocusOn,
      o = e.cvcPolicy,
      i = e.focusedElement,
      l = e.hasInstallments,
      s = e.handleInstallments,
      c = e.showAmountsInInstallments,
      u = e.amount,
      d = e.hasCVC,
      p = e.installmentOptions,
      f = e.lastFour,
      h$1 = e.expiryMonth,
      y = e.expiryYear,
      m = e.mergedSRErrors,
      v = e.handleErrorPanelFocus,
      g = e.moveFocus,
      b = e.showPanel,
      _ = Pt().i18n;
  return h(pc, {
    status: r.status
  }, t && h(Cc, {
    id: n,
    heading: _.get("errorPanel.title"),
    errors: m,
    callbackFn: g ? v : null,
    showPanel: b
  }), h(vc, {
    errors: r.errors,
    brand: r.brand,
    hasCVC: d,
    cvcPolicy: o,
    onFocusField: a,
    focusedElement: i,
    status: r.status,
    valid: r.valid,
    lastFour: f,
    expiryMonth: h$1,
    expiryYear: y
  }), l && h(_c, {
    amount: u,
    brand: r.brand,
    installmentOptions: p,
    onChange: s,
    type: c ? "amount" : "months"
  }));
};

function Nc(e) {
  var t,
      n,
      r = e.brand,
      a = e.brandsConfiguration,
      o = void 0 === a ? {} : a,
      i = Pt().loadingContext,
      l = "card" === r ? "nocard" : r,
      s = null !== (t = null === (n = o[r]) || void 0 === n ? void 0 : n.icon) && void 0 !== t ? t : ic(l, i);
  return h("img", {
    className: "".concat(hc["card-input__icon"], " adyen-checkout__card__cardNumber__brandIcon"),
    onError: function (e) {
      e.target.style.cssText = "display: none";
    },
    alt: r,
    src: s,
    "aria-hidden": "true"
  });
}

var wc = function (e) {
  var t,
      n,
      r,
      a = e.brand,
      o = e.onClick,
      i = e.dataValue,
      l = e.notSelected,
      s = e.brandsConfiguration,
      c = void 0 === s ? {} : s,
      u = Pt().loadingContext,
      d = "card" === a ? "nocard" : a,
      p = null !== (t = null === (n = c[a]) || void 0 === n ? void 0 : n.icon) && void 0 !== t ? t : ic(d, u);
  return h("img", {
    className: y$1(r = "".concat(hc["card-input__icon"], " ")).call(r, l ? "adyen-checkout__card__cardNumber__brandIcon--not-selected" : "", " adyen-checkout__card__cardNumber__brandIcon"),
    onError: function (e) {
      e.target.style.cssText = "display: none";
    },
    alt: a,
    src: p,
    onClick: o,
    "data-value": i,
    "aria-hidden": "true"
  });
};

function Sc(e) {
  var t,
      n = Pt(),
      r = n.i18n,
      a = n.commonProps.isCollatingErrors,
      o = e.error,
      i = void 0 === o ? "" : o,
      l = e.isValid,
      s = void 0 !== l && l,
      c = e.onFocusField,
      u = void 0 === c ? function () {} : c,
      p = e.dualBrandingElements,
      f = e.dualBrandingChangeHandler,
      h$1 = e.dualBrandingSelected;
  return h(yn, {
    label: e.label,
    focused: e.focused,
    filled: e.filled,
    classNameModifiers: ["cardNumber"],
    onFocusField: function () {
      return u("encryptedCardNumber");
    },
    errorMessage: i && r.get(i),
    isValid: s,
    dir: "ltr",
    name: "encryptedCardNumber",
    isCollatingErrors: a,
    showValidIcon: !1
  }, h(yc, {
    encryptedFieldType: "encryptedCardNumber",
    className: H((t = {
      "adyen-checkout__input": !0,
      "adyen-checkout__input--large": !0,
      "adyen-checkout__card__cardNumber__input": !0
    }, _defineProperty(t, hc["adyen-checkout__input"], !0), _defineProperty(t, "adyen-checkout__input--error", i), _defineProperty(t, "adyen-checkout__input--focus", e.focused), _defineProperty(t, "adyen-checkout__input--valid", s), _defineProperty(t, "adyen-checkout__card__cardNumber__input--noBrand", !e.showBrandIcon), t))
  }, e.showBrandIcon && !p && h(Nc, {
    brandsConfiguration: e.brandsConfiguration,
    brand: e.brand
  })), p && !i && h("div", {
    className: H(["adyen-checkout__card__dual-branding__buttons", {
      "adyen-checkout__card__dual-branding__buttons--active": s
    }])
  }, K(p).call(p, function (t) {
    return h(wc, {
      key: t.id,
      brand: t.id,
      brandsConfiguration: e.brandsConfiguration,
      onClick: f,
      dataValue: t.id,
      notSelected: "" !== h$1 && h$1 !== t.id
    });
  })));
}

function xc(e) {
  var t,
      n,
      r = e.label,
      a = e.focused,
      o = e.filled,
      i = e.onFocusField,
      l = e.className,
      s = void 0 === l ? "" : l,
      c = e.error,
      u = void 0 === c ? "" : c,
      p = e.isValid,
      f = void 0 !== p && p,
      h$1 = e.expiryDatePolicy,
      m = void 0 === h$1 ? "required" : h$1,
      v = Pt(),
      g = v.i18n,
      b = v.commonProps.isCollatingErrors,
      _ = H(s, (_defineProperty(t = {
    "adyen-checkout__field__exp-date": !0
  }, hc["adyen-checkout__card__exp-date__input--hidden"], "hidden" === m), _defineProperty(t, "adyen-checkout__field__exp-date--optional", "optional" === m), t)),
      C = "optional" !== m ? r : y$1(n = "".concat(r, " ")).call(n, g.get("field.title.optional"));

  return h(yn, {
    label: C,
    classNameModifiers: ["expiryDate"],
    className: _,
    focused: a,
    filled: o,
    onFocusField: function () {
      return i("encryptedExpiryDate");
    },
    errorMessage: u && g.get(u),
    isValid: f,
    dir: "ltr",
    name: "encryptedExpiryDate",
    isCollatingErrors: b
  }, h(yc, {
    encryptedFieldType: "encryptedExpiryDate",
    className: H("adyen-checkout__input", "adyen-checkout__input--small", "adyen-checkout__card__exp-date__input", [hc["adyen-checkout__input"]], {
      "adyen-checkout__input--error": u,
      "adyen-checkout__input--focus": a,
      "adyen-checkout__input--valid": f
    })
  }));
}

var Pc = function (e) {
  var t = e.brands,
      n = e.activeBrand;
  if (null == t || !t.length) return null;
  var r = "card" !== n;
  return h("span", {
    className: "adyen-checkout__card__brands"
  }, K(t).call(t, function (e) {
    var t = e.name,
        a = e.icon;
    return h("span", {
      key: t,
      className: H("adyen-checkout__card__brands__brand-wrapper", {
        "adyen-checkout__card__brands__brand-wrapper--disabled": r && n !== t
      })
    }, h(Mn, {
      src: a,
      alt: ""
    }));
  }));
};

function Fc(e) {
  var t = e.brand,
      n = e.brandsIcons,
      r = e.brandsConfiguration,
      a = e.dualBrandingElements,
      o = e.dualBrandingChangeHandler,
      i = e.dualBrandingSelected,
      l = e.errors,
      s = e.focusedElement,
      c = e.hasCVC,
      u = e.cvcPolicy,
      p = e.expiryDatePolicy,
      f = e.onFocusField,
      h$1 = e.showBrandIcon,
      y = e.showBrandsUnderCardNumber,
      m = e.valid,
      v = Pt().i18n;
  return h("div", {
    className: "adyen-checkout__card__form"
  }, h(Sc, {
    brand: t,
    brandsConfiguration: r,
    error: l.encryptedCardNumber,
    focused: "encryptedCardNumber" === s,
    isValid: !!m.encryptedCardNumber,
    label: v.get("creditCard.numberField.title"),
    onFocusField: f,
    filled: !!l.encryptedCardNumber || !!m.encryptedCardNumber,
    showBrandIcon: h$1,
    dualBrandingElements: a,
    dualBrandingChangeHandler: o,
    dualBrandingSelected: i
  }), y && h(Pc, {
    activeBrand: t,
    brands: n
  }), h("div", {
    className: H("adyen-checkout__card__exp-cvc adyen-checkout__field-wrapper", _defineProperty({}, hc["adyen-checkout__card__exp-cvc__exp-date__input--hidden"], "hidden" === p))
  }, h(xc, {
    error: l.encryptedExpiryDate || l.encryptedExpiryYear || l.encryptedExpiryMonth,
    focused: "encryptedExpiryDate" === s,
    isValid: !!m.encryptedExpiryMonth && !!m.encryptedExpiryYear,
    filled: !!l.encryptedExpiryDate || !!m.encryptedExpiryYear,
    label: v.get("creditCard.expiryDateField.title"),
    onFocusField: f,
    className: "adyen-checkout__field--50",
    expiryDatePolicy: p
  }), c && h(mc, {
    error: l.encryptedSecurityCode,
    focused: "encryptedSecurityCode" === s,
    cvcPolicy: u,
    isValid: !!m.encryptedSecurityCode,
    filled: !!l.encryptedSecurityCode || !!m.encryptedSecurityCode,
    label: v.get("creditCard.cvcField.title"),
    onFocusField: f,
    className: "adyen-checkout__field--50",
    frontCVC: "amex" === t
  })));
}

function Ac(e) {
  var t,
      n = Pt(),
      r = n.i18n,
      a = n.commonProps.isCollatingErrors,
      o = gt(function () {
    var t;
    return (null === (t = e.value) || void 0 === t ? void 0 : t.length) > 6 ? r.get("creditCard.taxNumber.labelAlt") : r.get("creditCard.taxNumber.label");
  }, [e.value]);
  return h("div", {
    className: "adyen-checkout__card__kcp-authentication"
  }, h(yn, {
    label: o,
    filled: e.filled,
    classNameModifiers: ["kcp-taxNumber"],
    errorMessage: e.error && r.get("creditCard.taxNumber.invalid"),
    isValid: e.isValid,
    dir: "ltr",
    name: "kcpTaxNumberOrDOB",
    isCollatingErrors: a
  }, Zn("tel", {
    name: "kcpTaxNumberOrDOB",
    className: "adyen-checkout__card__kcp-taxNumber__input ".concat(hc["adyen-checkout__input"]),
    placeholder: r.get("creditCard.taxNumber.placeholder"),
    maxLength: 10,
    minLength: 6,
    autoComplete: !1,
    value: e.value,
    required: !0,
    onBlur: e.onBlur,
    onInput: e.onInput,
    isCollatingErrors: a,
    disabled: e.disabled
  })), h(yn, {
    label: r.get("creditCard.encryptedPassword.label"),
    focused: "encryptedPassword" === e.focusedElement,
    filled: e.filled,
    classNameModifiers: ["50", "koreanAuthentication-encryptedPassword"],
    onFocusField: function () {
      return e.onFocusField("encryptedPassword");
    },
    errorMessage: e.encryptedPasswordState.errors && r.get("creditCard.encryptedPassword.invalid"),
    isValid: e.encryptedPasswordState.valid,
    dir: "ltr",
    name: "encryptedPassword",
    isCollatingErrors: a
  }, h(yc, {
    encryptedFieldType: "encryptedPassword",
    className: H((t = {
      "adyen-checkout__input": !0,
      "adyen-checkout__input--large": !0
    }, _defineProperty(t, hc["adyen-checkout__input"], !0), _defineProperty(t, "adyen-checkout__input--error", e.encryptedPasswordState.errors), _defineProperty(t, "adyen-checkout__input--valid", e.encryptedPasswordState.valid), _defineProperty(t, "adyen-checkout__input--focus", "encryptedPassword" === e.focusedElement), t))
  })));
}

function Bc(e) {
  var t = e.onBlur,
      n = e.onInput,
      r = e.valid,
      a = void 0 !== r && r,
      o = e.error,
      i = void 0 === o ? null : o,
      l = e.data,
      s = void 0 === l ? "" : l,
      c = e.required,
      u = void 0 !== c && c,
      d = e.disabled,
      p = void 0 !== d && d,
      f = Pt(),
      h$1 = f.i18n,
      y = f.commonProps.isCollatingErrors;
  return h(yn, {
    label: "".concat(h$1.get("boleto.socialSecurityNumber")),
    classNameModifiers: ["socialSecurityNumber"],
    errorMessage: i && i.errorMessage ? h$1.get(i.errorMessage) : !!i,
    isValid: Boolean(a),
    name: "socialSecurityNumber",
    isCollatingErrors: y
  }, Zn("text", {
    name: "socialSecurityNumber",
    autocorrect: "off",
    spellcheck: !1,
    value: s,
    maxLength: 18,
    onInput: n,
    onBlur: t,
    required: u,
    isCollatingErrors: y,
    disabled: p
  }));
}

var Ec = ["storeDetails"];

function Rc(e) {
  var t = e.storeDetails,
      n = void 0 !== t && t,
      r = _objectWithoutProperties(e, Ec),
      a = Pt().i18n,
      o = ft(n),
      i = _slicedToArray(o, 2),
      l = i[0],
      s = i[1];
  return yt(function () {
    r.onChange(l);
  }, [l]), h("div", {
    className: "adyen-checkout__store-details"
  }, Zn("boolean", {
    onChange: function (e) {
      s(e.target.checked);
    },
    label: a.get("storeDetails"),
    value: l,
    name: "storeDetails"
  }));
}

function Oc(e) {
  var t = e.onBlur,
      n = e.onInput,
      r = e.placeholder,
      a = e.value,
      o = e.required,
      i = e.error,
      l = void 0 !== i && i,
      s = e.isValid,
      c = e.disabled,
      u = Pt(),
      d = u.i18n,
      p = u.commonProps.isCollatingErrors;
  return h(yn, {
    label: d.get("creditCard.holderName"),
    className: "adyen-checkout__card__holderName",
    errorMessage: l && d.get("creditCard.holderName.invalid"),
    isValid: !!s,
    name: "holderName",
    isCollatingErrors: p
  }, Zn("text", {
    name: "holderName",
    className: "adyen-checkout__card__holderName__input ".concat(hc["adyen-checkout__input"]),
    placeholder: r || d.get("creditCard.holderName.placeholder"),
    value: a,
    required: o,
    onBlur: t,
    onInput: n,
    isCollatingErrors: p,
    disabled: c
  }));
}

var Dc = function (e) {
  var t = e.data,
      n = e.valid,
      r = e.errors,
      a = e.handleChangeFor,
      o = e.sfpState,
      i = e.setFocusOn,
      l = e.collateErrors,
      s = e.errorFieldId,
      c = e.cvcPolicy,
      u = e.focusedElement,
      d = e.hasInstallments,
      p = e.handleInstallments,
      f = e.showAmountsInInstallments,
      h$1 = e.brandsIcons,
      y = e.mergedSRErrors,
      m = e.moveFocus,
      v = e.showPanel,
      g = e.handleErrorPanelFocus,
      b = e.formData,
      _ = e.formErrors,
      C = e.formValid,
      k = e.expiryDatePolicy,
      N = e.dualBrandSelectElements,
      w = e.extensions,
      S = e.selectedBrandValue,
      x = e.showKCP,
      P = e.showBrazilianSSN,
      F = e.socialSecurityNumber,
      A = e.handleOnStoreDetails,
      B = e.billingAddress,
      E = e.handleAddress,
      O = e.billingAddressRef,
      D = e.partialAddressSchema,
      M = e.amount,
      T = e.billingAddressRequired,
      I = e.billingAddressRequiredFields,
      j = e.billingAddressAllowedCountries,
      V = e.brandsConfiguration,
      L = e.enableStoreDetails,
      U = e.hasCVC,
      q = e.hasHolderName,
      K = e.holderNameRequired,
      H = e.installmentOptions,
      z = e.placeholders,
      W = e.positionHolderNameOnTop,
      G = e.showBrandIcon,
      Y = e.showBrandsUnderCardNumber,
      $ = e.iOSFocusedField,
      Z = Pt().i18n,
      J = h(Oc, {
    required: K,
    placeholder: z.holderName,
    value: b.holderName,
    error: !!_.holderName && K,
    isValid: !!C.holderName,
    onBlur: a("holderName", "blur"),
    onInput: a("holderName", "input"),
    disabled: $ && "holderName" !== $
  });
  return h(pc, {
    status: o.status
  }, l && h(Cc, {
    id: s,
    heading: Z.get("errorPanel.title"),
    errors: y,
    callbackFn: m ? g : null,
    showPanel: v
  }), q && W && J, h(Fc, {
    showBrandIcon: G,
    showBrandsUnderCardNumber: Y,
    brand: o.brand,
    brandsIcons: h$1,
    brandsConfiguration: V,
    focusedElement: u,
    onFocusField: i,
    hasCVC: U,
    cvcPolicy: c,
    expiryDatePolicy: k,
    errors: o.errors,
    valid: o.valid,
    dualBrandingElements: N.length > 0 && N,
    dualBrandingChangeHandler: w.handleDualBrandSelection,
    dualBrandingSelected: S
  }), q && !W && J, x && h(Ac, {
    onFocusField: i,
    focusedElement: u,
    encryptedPasswordState: {
      data: o.encryptedPassword,
      valid: !!o.valid && o.valid.encryptedPassword,
      errors: !!o.errors && o.errors.encryptedPassword
    },
    value: t.taxNumber,
    error: !!r.taxNumber,
    isValid: !!n.taxNumber,
    onBlur: a("taxNumber", "blur"),
    onInput: a("taxNumber", "input"),
    disabled: $ && "kcpTaxNumberOrDOB" !== $
  }), P && h("div", {
    className: "adyen-checkout__card__socialSecurityNumber"
  }, h(Bc, {
    onBlur: a("socialSecurityNumber", "blur"),
    onInput: a("socialSecurityNumber", "input"),
    error: null == r ? void 0 : r.socialSecurityNumber,
    valid: null == n ? void 0 : n.socialSecurityNumber,
    data: F,
    required: !0,
    disabled: $ && "socialSecurityNumber" !== $
  })), L && h(Rc, {
    onChange: A
  }), d && h(_c, {
    amount: M,
    brand: o.brand,
    installmentOptions: H,
    onChange: p,
    type: f ? "amount" : "months"
  }), T && h(Ba, {
    label: "billingAddress",
    data: B,
    onChange: E,
    allowedCountries: j,
    requiredFields: I,
    ref: O,
    specifications: D,
    iOSFocusedField: $
  }));
};

function Mc(e, t) {
  var n = void 0 !== ae && ve(e) || e["@@iterator"];

  if (!n) {
    if (X(e) || (n = function (e, t) {
      var n;
      if (!e) return;
      if ("string" == typeof e) return Tc(e, t);
      var r = G(n = Object.prototype.toString.call(e)).call(n, 8, -1);
      "Object" === r && e.constructor && (r = e.constructor.name);
      if ("Map" === r || "Set" === r) return me(e);
      if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Tc(e, t);
    }(e)) || t && e && "number" == typeof e.length) {
      n && (e = n);

      var r = 0,
          a = function () {};

      return {
        s: a,
        n: function () {
          return r >= e.length ? {
            done: !0
          } : {
            done: !1,
            value: e[r++]
          };
        },
        e: function (e) {
          function t(t) {
            return e.apply(this, arguments);
          }

          return t.toString = function () {
            return e.toString();
          }, t;
        }(function (e) {
          throw e;
        }),
        f: a
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var o,
      i = !0,
      l = !1;
  return {
    s: function () {
      n = n.call(e);
    },
    n: function () {
      var e = n.next();
      return i = e.done, e;
    },
    e: function (e) {
      function t(t) {
        return e.apply(this, arguments);
      }

      return t.toString = function () {
        return e.toString();
      }, t;
    }(function (e) {
      l = !0, o = e;
    }),
    f: function () {
      try {
        i || null == n.return || n.return();
      } finally {
        if (l) throw o;
      }
    }
  };
}

function Tc(e, t) {
  (null == t || t > e.length) && (t = e.length);

  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];

  return r;
}

var Ic = function (e, t) {
  var n = e;

  if ("taxNumber" === n && (n = "kcpTaxNumberOrDOB"), "country" === n || "stateOrProvince" === n) {
    var r = rl(t.current.rootNode, ".adyen-checkout__field--".concat(n, " .adyen-checkout__dropdown__button"));
    null == r || r.focus();
  } else {
    var a = rl(t.current.rootNode, '[name="'.concat(n, '"]'));
    null == a || a.focus();
  }
},
    jc = ["billingAddress"];

function Vc(e, t) {
  var o = n$1(e);

  if (r$1) {
    var i = r$1(e);
    t && (i = f$1(i).call(i, function (t) {
      return a$1(e, t).enumerable;
    })), o.push.apply(o, i);
  }

  return o;
}

function Lc(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n,
        r,
        s = null != arguments[t] ? arguments[t] : {};
    t % 2 ? p$1(n = Vc(Object(s), !0)).call(n, function (t) {
      _defineProperty(e, t, s[t]);
    }) : o$1 ? i(e, o$1(s)) : p$1(r = Vc(Object(s))).call(r, function (t) {
      l$1(e, t, a$1(s, t));
    });
  }

  return e;
}

var Uc = function (e) {
  var t,
      r,
      a = vt(null),
      o = vt(null),
      i = vt(!1),
      l = vt({});
  n$1(l.current).length || e.setComponentRef(l.current);

  var s = vt(0),
      c = vt(!1),
      u = "creditCardErrors",
      p$1 = e.SRConfig,
      m = p$1.collateErrors,
      g = p$1.moveFocus,
      C = p$1.showPanel,
      N = gt(function () {
    return new Pa(e.specifications);
  }, [e.specifications]),
      w = ft("ready"),
      S = _slicedToArray(w, 2),
      P = S[0],
      F = S[1],
      A = ft({}),
      B = _slicedToArray(A, 2),
      E = B[0],
      O = B[1],
      D = ft(Lc({}, e.holderNameRequired && {
    holderName: !1
  })),
      M = _slicedToArray(D, 2),
      I = M[0],
      j = M[1],
      V = ft(Lc({}, e.hasHolderName && {
    holderName: null !== (t = e.data.holderName) && void 0 !== t ? t : ""
  })),
      L = _slicedToArray(V, 2),
      q = L[0],
      K = L[1],
      z = ft(null),
      W = _slicedToArray(z, 2),
      Y = W[0],
      $ = W[1],
      Z = ft(""),
      J = _slicedToArray(Z, 2),
      Q = J[0],
      X = J[1],
      ee = ft(!1),
      te = _slicedToArray(ee, 2),
      ne = te[0],
      re = te[1],
      ae = ft("required"),
      oe = _slicedToArray(ae, 2),
      ie = oe[0],
      le = oe[1],
      se = ft("required"),
      ce = _slicedToArray(se, 2),
      de = ce[0],
      fe = ce[1],
      he = ft(null),
      me = _slicedToArray(he, 2),
      ve = me[0],
      ge = me[1],
      be = ft([]),
      _e = _slicedToArray(be, 2),
      Ce = _e[0],
      ke = _e[1],
      Ne = ft(""),
      we = _slicedToArray(Ne, 2),
      Se = we[0],
      xe = we[1],
      Pe = e.billingAddressMode !== Ts.none && e.billingAddressRequired,
      Fe = e.billingAddressMode == Ts.partial ? Ar : [],
      Ae = ft(!1),
      Be = _slicedToArray(Ae, 2),
      Ee = Be[0],
      Re = Be[1],
      Oe = ft(Pe ? e.data.billingAddress : null),
      De = _slicedToArray(Oe, 2),
      Me = De[0],
      Te = De[1],
      Ie = ft(!1),
      je = _slicedToArray(Ie, 2),
      Ve = je[0],
      Le = je[1],
      Ue = ft(""),
      qe = _slicedToArray(Ue, 2),
      Ke = qe[0],
      He = qe[1],
      ze = ft({
    value: null
  }),
      We = _slicedToArray(ze, 2),
      Ge = We[0],
      Ye = We[1],
      $e = ft(null),
      Ze = _slicedToArray($e, 2),
      Je = Ze[0],
      Qe = Ze[1],
      Xe = cr({
    schema: [],
    defaultData: e.data,
    formatters: zs,
    rules: Ws
  }),
      et = Xe.handleChangeFor,
      tt = Xe.triggerValidation,
      nt = Xe.data,
      at = Xe.valid,
      ot = Xe.errors,
      it = Xe.setSchema,
      lt = Xe.setData,
      st = Xe.setValid,
      ct = Xe.setErrors,
      ut = !!n$1(e.installmentOptions).length,
      dt = null === (r = e.showInstallmentAmounts) || void 0 === r || r,
      pt = "kr" === (null != ve ? ve : e.countryCode),
      ht = e.configuration.koreanAuthenticationRequired && pt,
      mt = Ve && "auto" === e.configuration.socialSecurityNumberMode || "show" === e.configuration.socialSecurityNumberMode,
      _t = function (e, t, n) {
    return function (r) {
      e(r.currentFocusObject), !0 === r.focus ? t(r) : n(r);
    };
  }(X, e.onFocus, e.onBlur),
      Ct = function () {
    return function (e) {
      var t = e.props,
          n = e.showKCP,
          r = e.showBrazilianSSN,
          a = e.countrySpecificSchemas,
          o = void 0 === a ? null : a,
          i = e.billingAddressRequiredFields,
          l = void 0 === i ? null : i,
          s = Zs,
          c = t.hasHolderName && t.holderNameRequired;

      if (c && (s = t.positionHolderNameOnTop ? Js : Qs), n && (s = ec, c && (s = t.positionHolderNameOnTop ? tc : nc)), r && (s = rc, c && (s = t.positionHolderNameOnTop ? ac : oc)), o) {
        var u,
            d = f$1(u = ue(o).call(o, 2)).call(u, function (e) {
          return "number" != typeof e;
        }),
            p = d;
        l && (p = f$1(d).call(d, function (e) {
          return h$1(l).call(l, e);
        })), s = y$1(Zs).call(Zs, p), c && (s = t.positionHolderNameOnTop ? y$1(Js).call(Js, p) : y$1(Qs).call(Qs, p));
      }

      return s;
    }(Lc({
      props: e,
      showKCP: ht,
      showBrazilianSSN: mt
    }, e.billingAddressRequired && {
      countrySpecificSchemas: N.getAddressSchemaForCountry(null == Me ? void 0 : Me.country),
      billingAddressRequiredFields: e.billingAddressRequiredFields
    }));
  },
      kt = bt(function (e) {
    var t = "webInternalElement" !== e.fieldType ? e.fieldType : e.name;
    Qe(t);
  }, []),
      Nt = function (e, t, n) {
    return function (r) {
      if (e.current) {
        var a = r.fieldList[0];
        h$1(Ei).call(Ei, a) ? (n({
          currentFocusObject: a
        }), t.current.setFocusOn(a)) : Ic(a, t), e.current = !1;
      }
    };
  }(i, a, _t),
      wt = function (e, t, n) {
    return function (r) {
      e("billingAddress", r.data), t("billingAddress", r.isValid), n("billingAddress", r.errors);
    };
  }(lt, st, ct),
      St = function (e, t, n) {
    return function () {
      e.current || (e.current = !0, v$1.resolve().then(function () {
        var r,
            a = ye(n).call(n, function (e) {
          return "encryptedCardNumber" === e;
        }),
            o = Mc(G(n).call(n, a + 1));

        try {
          for (o.s(); !(r = o.n()).done;) {
            var i = r.value;

            if (!h$1(Ei).call(Ei, i)) {
              Ic(i, t);
              break;
            }

            if (!t.current.sfIsOptionalOrHidden(i)) {
              t.current.setFocusOn(i);
              break;
            }
          }
        } catch (e) {
          o.e(e);
        } finally {
          o.f();
        }

        e.current = !1;
      }));
    };
  }(c, a, Ct()),
      xt = gt(function () {
    return Ys(e, {
      sfp: a
    }, {
      dualBrandSelectElements: Ce,
      setDualBrandSelectElements: ke,
      setSelectedBrandValue: xe,
      issuingCountryCode: ve,
      setIssuingCountryCode: ge
    }, s);
  }, [Ce, ve]);

  l.current.showValidation = function () {
    $(null), a.current.showValidation(), tt(["holderName", "socialSecurityNumber", "taxNumber"]), null != o && o.current && o.current.showValidation(), i.current = !0;
  }, l.current.processBinLookupResponse = function (e, t) {
    xt.processBinLookup(e, t);
  }, l.current.setStatus = F, yt(function () {
    return l.current.setFocusOn = a.current.setFocusOn, l.current.updateStyles = a.current.updateStyles, l.current.handleUnsupportedCard = a.current.handleUnsupportedCard, function () {
      a.current.destroy();
    };
  }, []), yt(function () {
    var t,
        n = y$1(t = []).call(t, _toConsumableArray(e.hasHolderName ? ["holderName"] : []), _toConsumableArray(mt ? ["socialSecurityNumber"] : []), _toConsumableArray(ht ? ["taxNumber"] : []), _toConsumableArray(Pe ? ["billingAddress"] : []));
    it(n);
  }, [e.hasHolderName, mt, ht]), yt(function () {
    var t, n;
    $(null), K(Lc(Lc({}, q), {}, {
      holderName: null !== (t = nt.holderName) && void 0 !== t ? t : "",
      taxNumber: nt.taxNumber
    })), He(nt.socialSecurityNumber), Pe && Te(Lc({}, nt.billingAddress)), j(Lc(Lc({}, I), {}, {
      holderName: !e.holderNameRequired || at.holderName,
      socialSecurityNumber: !!at.socialSecurityNumber && at.socialSecurityNumber,
      taxNumber: !!at.taxNumber && at.taxNumber,
      billingAddress: !!at.billingAddress && at.billingAddress
    }));
    var r = !!ot.billingAddress && k$1(n = pe(ot.billingAddress)).call(n, function (e, t) {
      var n = _slicedToArray(t, 2)[1];
      return e || null != n;
    }, !1);
    O(Lc(Lc({}, E), {}, {
      holderName: e.holderNameRequired && ot.holderName ? ot.holderName : null,
      socialSecurityNumber: mt && ot.socialSecurityNumber ? ot.socialSecurityNumber : null,
      taxNumber: ht && ot.taxNumber ? ot.taxNumber : null,
      billingAddress: Pe && r ? ot.billingAddress : null
    }));
  }, [nt, at, ot]), yt(function () {
    var t = I.holderName,
        n = ne,
        r = !Pe || I.billingAddress,
        o = !ht || !!I.taxNumber && !!I.encryptedPassword,
        i = !mt || !!I.socialSecurityNumber,
        l = n && t && r && o && i,
        s = a.current.mapErrorsToValidationRuleResult(),
        c = Lc(Lc({}, E), s),
        u = c.billingAddress,
        d = Lc(Lc({}, _objectWithoutProperties(c, jc)), u),
        p = lc({
      errors: d,
      layout: Ct(),
      i18n: e.i18n,
      countrySpecificLabels: N.getAddressLabelsForCountry(null == Me ? void 0 : Me.country)
    });
    $(p), e.onChange({
      data: q,
      valid: I,
      errors: c,
      isValid: l,
      billingAddress: Me,
      selectedBrandValue: Se,
      storePaymentMethod: Ee,
      socialSecurityNumber: Ke,
      installments: Ge
    });
  }, [q, I, E, Se, Ee, Ge]);
  var Pt = e.storedPaymentMethodId ? kc : Dc;
  return h(p, null, h(Is, _extends({
    ref: a
  }, function (e) {
    return {
      allowedDOMAccess: e.allowedDOMAccess,
      autoFocus: e.autoFocus,
      brands: e.brands,
      brandsConfiguration: e.brandsConfiguration,
      clientKey: e.clientKey,
      countryCode: e.countryCode,
      i18n: e.i18n,
      implementationType: e.implementationType,
      keypadFix: e.keypadFix,
      legacyInputMode: e.legacyInputMode,
      loadingContext: e.loadingContext,
      minimumExpiryDate: e.minimumExpiryDate,
      onAdditionalSFConfig: e.onAdditionalSFConfig,
      onAdditionalSFRemoved: e.onAdditionalSFRemoved,
      onAllValid: e.onAllValid,
      onAutoComplete: e.onAutoComplete,
      onBinValue: e.onBinValue,
      onConfigSuccess: e.onConfigSuccess,
      onError: e.onError,
      onFieldValid: e.onFieldValid,
      onLoad: e.onLoad,
      showWarnings: e.showWarnings,
      trimTrailingSeparator: e.trimTrailingSeparator
    };
  }(e), {
    styles: Lc(Lc({}, Vs), e.styles),
    koreanAuthenticationRequired: e.configuration.koreanAuthenticationRequired,
    hasKoreanFields: !(!e.configuration.koreanAuthenticationRequired || "kr" !== e.countryCode),
    onChange: function (t, n) {
      var r;

      if ($(null), t.autoCompleteName) {
        if (!e.hasHolderName) return;
        var a = (i = "blur", c = k$1(l = Ws["holderName"]).call(l, function (e, t) {
          var n;
          return e.length || h$1(n = t.modes).call(n, i) && e.push(t.validate), e;
        }, []), c[0]),
            o = a(t.autoCompleteName) ? t.autoCompleteName : null;
        o && (lt("holderName", o), st("holderName", !0), ct("holderName", null));
      } else {
        var i, l, c;
        e.autoFocus && s.current > 0 && (!I.encryptedCardNumber && null !== (r = t.valid) && void 0 !== r && r.encryptedCardNumber || I.encryptedCardNumber && t.valid.encryptedCardNumber && "handleOnBrand" === n.event) && St(), K(Lc(Lc({}, q), t.data)), O(Lc(Lc({}, E), t.errors)), j(Lc(Lc({}, I), t.valid)), re(t.isSfpValid), fe(t.cvcPolicy), Le(t.showSocialSecurityNumber), le(t.expiryDatePolicy);
      }
    },
    onBrand: e.onBrand,
    onFocus: _t,
    type: e.brand,
    isCollatingErrors: m,
    onTouchstartIOS: kt,
    render: function (t, n) {
      var r,
          a,
          i = t.setRootNode,
          l = t.setFocusOn;
      return h("div", {
        ref: i,
        className: H((a = {
          "adyen-checkout__card-input": !0
        }, _defineProperty(a, hc["card-input__wrapper"], !0), _defineProperty(a, "adyen-checkout__card-input--".concat(null !== (r = e.fundingSource) && void 0 !== r ? r : "credit"), !0), _defineProperty(a, "adyen-checkout__card-input--loading", "loading" === P), a)),
        role: m && "form",
        "aria-describedby": m ? u : null
      }, h(Pt, _extends({}, function (e) {
        return {
          amount: e.amount,
          billingAddressRequired: e.billingAddressRequired,
          billingAddressRequiredFields: e.billingAddressRequiredFields,
          billingAddressAllowedCountries: e.billingAddressAllowedCountries,
          brandsConfiguration: e.brandsConfiguration,
          enableStoreDetails: e.enableStoreDetails,
          hasCVC: e.hasCVC,
          hasHolderName: e.hasHolderName,
          holderNameRequired: e.holderNameRequired,
          installmentOptions: e.installmentOptions,
          placeholders: e.placeholders,
          positionHolderNameOnTop: e.positionHolderNameOnTop,
          showBrandIcon: e.showBrandIcon,
          showBrandsUnderCardNumber: e.showBrandsUnderCardNumber,
          lastFour: e.lastFour,
          expiryMonth: e.expiryMonth,
          expiryYear: e.expiryYear
        };
      }(e), {
        data: q,
        valid: I,
        errors: E,
        handleChangeFor: et,
        focusedElement: Q,
        setFocusOn: l,
        sfpState: n,
        collateErrors: m,
        errorFieldId: u,
        cvcPolicy: de,
        hasInstallments: ut,
        showAmountsInInstallments: dt,
        handleInstallments: Ye,
        brandsIcons: e.brandsIcons,
        mergedSRErrors: Y,
        moveFocus: g,
        showPanel: C,
        handleErrorPanelFocus: Nt,
        formData: nt,
        formErrors: ot,
        formValid: at,
        expiryDatePolicy: ie,
        dualBrandSelectElements: Ce,
        extensions: xt,
        selectedBrandValue: Se,
        showKCP: ht,
        showBrazilianSSN: mt,
        socialSecurityNumber: Ke,
        handleOnStoreDetails: Re,
        billingAddress: Me,
        handleAddress: wt,
        billingAddressRef: o,
        partialAddressSchema: Fe,
        iOSFocusedField: Je
      })));
    }
  })), e.showPayButton && e.payButton({
    status: P,
    icon: rt({
      loadingContext: e.loadingContext,
      imageFolder: "components/"
    })("lock")
  }));
};

function qc(e, t) {
  var o = n$1(e);

  if (r$1) {
    var i = r$1(e);
    t && (i = f$1(i).call(i, function (t) {
      return a$1(e, t).enumerable;
    })), o.push.apply(o, i);
  }

  return o;
}

Uc.defaultProps = js;

var Kc = function (e) {
  return function (t) {
    return t.brand === e;
  };
},
    Hc = function (e) {
  var t, n;
  return h$1(t = e.brand).call(t, "plcc") || h$1(n = e.brand).call(n, "cbcc");
},
    zc = function (e, t) {
  var n,
      r,
      s = K(e).call(e, function (e) {
    return function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n,
            r,
            s = null != arguments[t] ? arguments[t] : {};
        t % 2 ? p$1(n = qc(Object(s), !0)).call(n, function (t) {
          _defineProperty(e, t, s[t]);
        }) : o$1 ? i(e, o$1(s)) : p$1(r = qc(Object(s))).call(r, function (t) {
          l$1(e, t, a$1(s, t));
        });
      }

      return e;
    }({}, e);
  }),
      c = ge(s).call(s, Kc("bcmc")),
      u = ge(s).call(s, Kc("maestro")),
      f = ge(s).call(s, Kc("visa")),
      y = ge(s).call(s, Kc("cartebancaire")),
      m = ge(s).call(s, Hc);
  ("bcmc" === t && c && "bcmc" !== s[0].brand && be(s).call(s), "bcmc" === t && c && u && (s[1].cvcPolicy = "hidden"), "card" === t && f && y && "visa" !== s[0].brand && be(s).call(s), "card" === t && m) && (h$1(n = s[0].brand).call(n, "plcc") || h$1(r = s[0].brand).call(r, "cbcc") || be(s).call(s));
  return s;
};

function Wc(e, t) {
  var o = n$1(e);

  if (r$1) {
    var i = r$1(e);
    t && (i = f$1(i).call(i, function (t) {
      return a$1(e, t).enumerable;
    })), o.push.apply(o, i);
  }

  return o;
}

var Gc = function (e) {
  var t = null;
  return function (n) {
    if (!1 !== e.props.doBinLookup) {
      if (n.encryptedBin && e.props.clientKey) t = n.uuid, _a({
        loadingContext: e.props.loadingContext,
        path: "v3/bin/binLookup?token=".concat(e.props.clientKey)
      }, {
        type: e.props.type,
        supportedBrands: e.props.brands || Ai,
        encryptedBin: n.encryptedBin,
        requestId: n.uuid
      }).then(function (r) {
        var s;
        if ((null == r ? void 0 : r.requestId) === t) {
          if (null !== (s = r.brands) && void 0 !== s && s.length) {
            var c,
                u = 2 === r.brands.length ? zc(r.brands, e.props.type) : r.brands,
                f = k$1(u).call(u, function (e, t) {
              return e.detectedBrands.push(t.brand), !0 === t.supported ? (e.supportedBrands.push(t), e) : e;
            }, {
              supportedBrands: [],
              detectedBrands: []
            });
            if (f.supportedBrands.length) return e.processBinLookupResponse(function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n,
                    r,
                    s = null != arguments[t] ? arguments[t] : {};
                t % 2 ? p$1(n = Wc(Object(s), !0)).call(n, function (t) {
                  _defineProperty(e, t, s[t]);
                }) : o$1 ? i(e, o$1(s)) : p$1(r = Wc(Object(s))).call(r, function (t) {
                  l$1(e, t, a$1(s, t));
                });
              }

              return e;
            }({
              issuingCountryCode: r.issuingCountryCode,
              supportedBrands: f.supportedBrands
            }, r.showSocialSecurityNumber ? {
              showSocialSecurityNumber: r.showSocialSecurityNumber
            } : {})), void e.onBinLookup({
              type: n.type,
              detectedBrands: f.detectedBrands,
              supportedBrands: K(c = f.supportedBrands).call(c, function (e) {
                return e.brand;
              }),
              supportedBrandsRaw: f.supportedBrands,
              brands: e.props.brands || Ai
            });

            if (f.detectedBrands.length) {
              var h = {
                type: "card",
                fieldType: "encryptedCardNumber",
                error: Nl("Unsupported card entered"),
                detectedBrands: f.detectedBrands
              };
              return e.handleUnsupportedCard(h), void e.onBinLookup({
                type: n.type,
                detectedBrands: f.detectedBrands,
                supportedBrands: null,
                brands: e.props.brands || Ai
              });
            }
          } else e.onBinLookup({
            type: n.type,
            detectedBrands: null,
            supportedBrands: null,
            brands: e.props.brands || Ai
          }), e.processBinLookupResponse({}, !0);
        } else null != r && r.requestId || e.props.onError(r || {
          errorType: "binLookup",
          message: "unknownError"
        });
      });else if (t) {
        e.processBinLookupResponse(null, !0), t = null;
        e.handleUnsupportedCard({
          type: "card",
          fieldType: "encryptedCardNumber",
          error: ""
        }), e.onBinLookup({
          isReset: !0
        });
      }
      e.props.onBinValue && e.props.onBinValue(n);
    } else e.props.onBinValue && e.props.onBinValue(n);
  };
};

function Yc(e, t) {
  var o = n$1(e);

  if (r$1) {
    var i = r$1(e);
    t && (i = f$1(i).call(i, function (t) {
      return a$1(e, t).enumerable;
    })), o.push.apply(o, i);
  }

  return o;
}

function $c(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n,
        r,
        s = null != arguments[t] ? arguments[t] : {};
    t % 2 ? p$1(n = Yc(Object(s), !0)).call(n, function (t) {
      _defineProperty(e, t, s[t]);
    }) : o$1 ? i(e, o$1(s)) : p$1(r = Yc(Object(s))).call(r, function (t) {
      l$1(e, t, a$1(s, t));
    });
  }

  return e;
}

function Zc(e) {
  var t = function () {
    if ("undefined" == typeof Reflect || !S) return !1;
    if (S.sham) return !1;
    if ("function" == typeof Proxy) return !0;

    try {
      return Boolean.prototype.valueOf.call(S(Boolean, [], function () {})), !0;
    } catch (e) {
      return !1;
    }
  }();

  return function () {
    var n,
        r = _getPrototypeOf(e);

    if (t) {
      var a = _getPrototypeOf(this).constructor;
      n = S(r, arguments, a);
    } else n = r.apply(this, arguments);

    return _possibleConstructorReturn(this, n);
  };
}

var Jc = function (e) {
  _inherits(n, Lt);
  var t = Zc(n);

  function n() {
    var e, r;
    _classCallCheck(this, n);

    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i];

    return r = t.call.apply(t, y$1(e = [this]).call(e, o)), _defineProperty(_assertThisInitialized(r), "setComponentRef", function (e) {
      r.componentRef = e;
    }), _defineProperty(_assertThisInitialized(r), "onBrand", function (e) {
      r.eventEmitter.emit("brand", $c($c({}, e), {}, {
        brand: "card" === e.brand ? null : e.brand
      })), r.props.onBrand && r.props.onBrand(e);
    }), _defineProperty(_assertThisInitialized(r), "onBinValue", Gc(_assertThisInitialized(r))), r;
  }

  return _createClass(n, [{
    key: "formatProps",
    value: function (e) {
      var t,
          n,
          r,
          a,
          o,
          i,
          l = e.SRConfig,
          s = l.collateErrors,
          c = void 0 === s || s,
          u = l.moveFocus,
          d = void 0 !== u && u,
          p = l.showPanel,
          f = void 0 !== p && p;
      return $c($c({}, e), {}, {
        holderNameRequired: !!e.hasHolderName && e.holderNameRequired,
        hasCVC: !(e.brand && "bcmc" === e.brand || e.hideCVC),
        billingAddressRequired: !e.storedPaymentMethodId && e.billingAddressRequired,
        type: "scheme" === e.type ? "card" : e.type,
        countryCode: e.countryCode ? e.countryCode.toLowerCase() : null,
        configuration: $c($c({}, e.configuration), {}, {
          socialSecurityNumberMode: null !== (t = null === (n = e.configuration) || void 0 === n ? void 0 : n.socialSecurityNumberMode) && void 0 !== t ? t : "auto"
        }),
        brandsConfiguration: e.brandsConfiguration || (null === (r = e.configuration) || void 0 === r ? void 0 : r.brandsConfiguration) || {},
        icon: e.icon || (null === (a = e.configuration) || void 0 === a ? void 0 : a.icon),
        SRConfig: {
          collateErrors: c,
          moveFocus: d,
          showPanel: f
        },
        installmentOptions: (null === (o = e.session) || void 0 === o || null === (i = o.configuration) || void 0 === i ? void 0 : i.installmentOptions) || e.installmentOptions
      });
    }
  }, {
    key: "formatData",
    value: function () {
      var e,
          t = this.state.selectedBrandValue || this.props.brand,
          r = this.props.enableStoreDetails && void 0 !== this.state.storePaymentMethod;
      return $c($c($c($c($c({
        paymentMethod: $c($c($c($c({
          type: n.type
        }, this.state.data), this.props.storedPaymentMethodId && {
          storedPaymentMethodId: this.props.storedPaymentMethodId
        }), t && {
          brand: t
        }), this.props.fundingSource && {
          fundingSource: this.props.fundingSource
        })
      }, this.state.billingAddress && {
        billingAddress: this.state.billingAddress
      }), this.state.socialSecurityNumber && {
        socialSecurityNumber: this.state.socialSecurityNumber
      }), r && {
        storePaymentMethod: Boolean(this.state.storePaymentMethod)
      }), ("revolving" === (null == (e = this.state.installments) ? void 0 : e.plan) || (null == e ? void 0 : e.value) > 1) && {
        installments: this.state.installments
      }), {}, {
        browserInfo: this.browserInfo,
        origin: !!window && window.location.origin
      });
    }
  }, {
    key: "updateStyles",
    value: function (e) {
      var t;
      return null !== (t = this.componentRef) && void 0 !== t && t.updateStyles && this.componentRef.updateStyles(e), this;
    }
  }, {
    key: "setFocusOn",
    value: function (e) {
      var t;
      return null !== (t = this.componentRef) && void 0 !== t && t.setFocusOn && this.componentRef.setFocusOn(e), this;
    }
  }, {
    key: "processBinLookupResponse",
    value: function (e) {
      var t,
          n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      return null !== (t = this.componentRef) && void 0 !== t && t.processBinLookupResponse && this.componentRef.processBinLookupResponse(e, n), this;
    }
  }, {
    key: "handleUnsupportedCard",
    value: function (e) {
      var t;
      return null !== (t = this.componentRef) && void 0 !== t && t.handleUnsupportedCard && this.componentRef.handleUnsupportedCard(e), this;
    }
  }, {
    key: "onBinLookup",
    value: function (e) {
      if (!e.isReset) {
        var t = Cl("supportedBrandsRaw").from(e);
        this.props.onBinLookup(t);
      }
    }
  }, {
    key: "isValid",
    get: function () {
      return !!this.state.isValid;
    }
  }, {
    key: "icon",
    get: function () {
      var e;
      return null !== (e = this.props.icon) && void 0 !== e ? e : rt({
        loadingContext: this.props.loadingContext
      })(this.brand);
    }
  }, {
    key: "brands",
    get: function () {
      var e = this.props,
          t = e.brands,
          n = e.loadingContext,
          r = e.brandsConfiguration;
      return t ? K(t).call(t, function (e) {
        var t, a;
        return {
          icon: null !== (t = null === (a = r[e]) || void 0 === a ? void 0 : a.icon) && void 0 !== t ? t : rt({
            loadingContext: n
          })(e),
          name: e
        };
      }) : [];
    }
  }, {
    key: "brand",
    get: function () {
      return this.props.brand || this.props.type;
    }
  }, {
    key: "displayName",
    get: function () {
      return this.props.storedPaymentMethodId ? "\u2022\u2022\u2022\u2022 ".concat(this.props.lastFour) : this.props.name || n.type;
    }
  }, {
    key: "accessibleName",
    get: function () {
      return (this.props.name || n.type) + (this.props.storedPaymentMethodId ? " " + this.props.i18n.get("creditCard.storedCard.description.ariaLabel").replace("%@", this.props.lastFour) : "");
    }
  }, {
    key: "browserInfo",
    get: function () {
      return mo();
    }
  }, {
    key: "render",
    value: function () {
      return h(Xa, {
        i18n: this.props.i18n,
        loadingContext: this.props.loadingContext,
        commonProps: {
          isCollatingErrors: this.props.SRConfig.collateErrors
        }
      }, h(Uc, _extends({
        setComponentRef: this.setComponentRef
      }, this.props, this.state, {
        onChange: this.setState,
        onSubmit: this.submit,
        payButton: this.payButton,
        onBrand: this.onBrand,
        onBinValue: this.onBinValue,
        brand: this.brand,
        brandsIcons: this.brands
      })));
    }
  }]), n;
}();

function Qc(e, t) {
  var o = n$1(e);

  if (r$1) {
    var i = r$1(e);
    t && (i = f$1(i).call(i, function (t) {
      return a$1(e, t).enumerable;
    })), o.push.apply(o, i);
  }

  return o;
}

function Xc(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n,
        r,
        s = null != arguments[t] ? arguments[t] : {};
    t % 2 ? p$1(n = Qc(Object(s), !0)).call(n, function (t) {
      _defineProperty(e, t, s[t]);
    }) : o$1 ? i(e, o$1(s)) : p$1(r = Qc(Object(s))).call(r, function (t) {
      l$1(e, t, a$1(s, t));
    });
  }

  return e;
}

function eu(e) {
  var t = function () {
    if ("undefined" == typeof Reflect || !S) return !1;
    if (S.sham) return !1;
    if ("function" == typeof Proxy) return !0;

    try {
      return Boolean.prototype.valueOf.call(S(Boolean, [], function () {})), !0;
    } catch (e) {
      return !1;
    }
  }();

  return function () {
    var n,
        r = _getPrototypeOf(e);

    if (t) {
      var a = _getPrototypeOf(this).constructor;
      n = S(r, arguments, a);
    } else n = r.apply(this, arguments);

    return _possibleConstructorReturn(this, n);
  };
}

_defineProperty(Jc, "type", "scheme"), _defineProperty(Jc, "defaultProps", {
  onBinLookup: function () {},
  showBrandsUnderCardNumber: !0,
  SRConfig: {}
});

var tu = function (e) {
  _inherits(n, Jc);
  var t = eu(n);

  function n(e) {
    var r;
    return _classCallCheck(this, n), r = t.call(this, e), _defineProperty(_assertThisInitialized(r), "onBrand", function (e) {
      r.props.onBrand && r.props.onBrand(e);
    }), r;
  }

  return _createClass(n, [{
    key: "formatProps",
    value: function (e) {
      return Xc(Xc({}, _get(_getPrototypeOf(n.prototype), "formatProps", this).call(this, e)), {}, {
        type: "bcmc",
        cvcPolicy: "hidden"
      });
    }
  }]), n;
}();

function nu(e) {
  var t = e.description,
      n = void 0 === t ? "" : t,
      r = e.name,
      a = void 0 === r ? "" : r,
      o = e.logoUrl,
      i = void 0 === o ? "" : o,
      l = e.url,
      s = void 0 === l ? "" : l,
      c = e.backgroundUrl,
      u = void 0 === c ? "" : c,
      d = "linear-gradient(0, #000, #0003), url(".concat(u, ")");
  return h("div", {
    className: "adyen-checkout__campaign-container"
  }, h(Mn, {
    className: "adyen-checkout__campaign-background-image",
    style: {
      backgroundImage: d
    },
    backgroundUrl: u
  }), h("div", {
    className: "adyen-checkout__campaign-content"
  }, i && h("img", {
    src: i,
    className: "adyen-checkout__campaign-logo",
    alt: a
  }), a && h("div", {
    className: "adyen-checkout__campaign-title"
  }, a), n && h("div", {
    className: "adyen-checkout__campaign-description"
  }, n, s && " \u203a")));
}

function ru(e) {
  var t = e.url;
  return h("div", {
    className: "adyen-checkout__campaign"
  }, !t && h(nu, e), t && h("a", {
    href: t,
    className: "adyen-checkout__campaign-link",
    target: "_blank",
    rel: "noopener noreferrer"
  }, h(nu, e)));
}

_defineProperty(tu, "defaultProps", Xc(Xc({}, Jc.defaultProps), {}, {
  brands: ["bcmc", "maestro", "visa"]
}));

var au = function (e) {
  var t = e.options,
      n = void 0 === t ? [] : t,
      r = e.name,
      a = e.onChange;
  return h("div", {
    className: "adyen-checkout__button-group"
  }, K(n).call(n, function (e, t) {
    var n,
        o = e.label,
        i = e.selected,
        l = e.value,
        s = e.disabled;
    return h("label", {
      key: y$1(n = "".concat(r)).call(n, t),
      className: H({
        "adyen-checkout__button": !0,
        "adyen-checkout__button--selected": i,
        "adyen-checkout__button--disabled": s
      })
    }, h("input", {
      type: "radio",
      className: "adyen-checkout__button-group__input",
      value: l,
      checked: i,
      onChange: a,
      disabled: s
    }), h("span", {
      className: "adyen-checkout__button-text"
    }, o));
  }));
};

function ou(e, t) {
  var o = n$1(e);

  if (r$1) {
    var i = r$1(e);
    t && (i = f$1(i).call(i, function (t) {
      return a$1(e, t).enumerable;
    })), o.push.apply(o, i);
  }

  return o;
}

function iu(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n,
        r,
        s = null != arguments[t] ? arguments[t] : {};
    t % 2 ? p$1(n = ou(Object(s), !0)).call(n, function (t) {
      _defineProperty(e, t, s[t]);
    }) : o$1 ? i(e, o$1(s)) : p$1(r = ou(Object(s))).call(r, function (t) {
      l$1(e, t, a$1(s, t));
    });
  }

  return e;
}

function lu(e) {
  var t,
      n = e.amounts,
      r = e.onCancel,
      a = e.onDonate,
      o = e.showCancelButton,
      i = void 0 === o || o,
      l = Pt(),
      s = l.i18n,
      c = l.loadingContext,
      u = n.currency,
      d = ft("ready"),
      p = _slicedToArray(d, 2),
      f = p[0],
      h$1 = p[1],
      y = ft(!1),
      m = _slicedToArray(y, 2),
      v = m[0],
      g = m[1],
      _ = ft({
    currency: u,
    value: null
  }),
      C = _slicedToArray(_, 2),
      k = C[0],
      S = C[1];

  this.setStatus = function (e) {
    h$1(e);
  };

  var x = bt(function (e, t) {
    return s.amount(e, t);
  }, [s]);
  return yt(function () {
    e.onChange({
      data: {
        amount: k
      },
      isValid: v
    });
  }, [k, v]), "error" === f ? h("div", {
    className: "adyen-checkout__adyen-giving"
  }, h(Mn, {
    className: "adyen-checkout__status__icon adyen-checkout__status__icon--error",
    src: rt({
      loadingContext: c,
      imageFolder: "components/"
    })("error"),
    alt: s.get("error.message.unknown")
  }), h("div", {
    className: "adyen-checkout__status__text"
  }, s.get("error.message.unknown"))) : "success" === f ? h("div", {
    className: "adyen-checkout__adyen-giving"
  }, h(Mn, {
    className: "adyen-checkout__status__icon adyen-checkout__status__icon--success",
    src: rt({
      loadingContext: c,
      imageFolder: "components/"
    })("heart"),
    alt: s.get("thanksForYourSupport")
  }), h("div", {
    className: "adyen-checkout__status__text"
  }, s.get("thanksForYourSupport"))) : h("div", {
    className: "adyen-checkout__adyen-giving"
  }, h(ru, e), h("div", {
    className: "adyen-checkout__adyen-giving-actions"
  }, h("div", {
    className: "adyen-checkout__amounts"
  }, h(au, {
    options: K(t = N$1(n)).call(t, function (e) {
      return {
        value: e,
        label: x(e, u),
        disabled: "loading" === f,
        selected: e === k.value
      };
    }),
    name: "amount",
    onChange: function (e) {
      var t = e.target,
          n = w$1(t.value, 10);
      g(!0), S(function (e) {
        return iu(iu({}, e), {}, {
          value: n
        });
      });
    }
  })), h(At, {
    classNameModifiers: ["donate"],
    onClick: function () {
      h$1("loading"), a({
        data: {
          amount: k
        }
      });
    },
    label: s.get("donateButton"),
    disabled: !k.value,
    status: f
  }), i && h(At, {
    classNameModifiers: ["decline"],
    variant: "ghost",
    onClick: function () {
      h$1("loading"), r({
        data: {
          amount: k
        },
        isValid: v
      });
    },
    disabled: "loading" === f,
    label: "".concat(s.get("notNowButton"), " \u203a")
  })));
}

function su(e, t) {
  var o = n$1(e);

  if (r$1) {
    var i = r$1(e);
    t && (i = f$1(i).call(i, function (t) {
      return a$1(e, t).enumerable;
    })), o.push.apply(o, i);
  }

  return o;
}

function cu(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n,
        r,
        s = null != arguments[t] ? arguments[t] : {};
    t % 2 ? p$1(n = su(Object(s), !0)).call(n, function (t) {
      _defineProperty(e, t, s[t]);
    }) : o$1 ? i(e, o$1(s)) : p$1(r = su(Object(s))).call(r, function (t) {
      l$1(e, t, a$1(s, t));
    });
  }

  return e;
}

function uu(e) {
  var t = function () {
    if ("undefined" == typeof Reflect || !S) return !1;
    if (S.sham) return !1;
    if ("function" == typeof Proxy) return !0;

    try {
      return Boolean.prototype.valueOf.call(S(Boolean, [], function () {})), !0;
    } catch (e) {
      return !1;
    }
  }();

  return function () {
    var n,
        r = _getPrototypeOf(e);

    if (t) {
      var a = _getPrototypeOf(this).constructor;
      n = S(r, arguments, a);
    } else n = r.apply(this, arguments);

    return _possibleConstructorReturn(this, n);
  };
}

lu.defaultProps = {
  onCancel: function () {},
  onChange: function () {},
  onDonate: function () {},
  amounts: {},
  showCancelButton: !0
};

var du = function (e) {
  _inherits(n, Lt);
  var t = uu(n);

  function n(e) {
    var r, a;
    return _classCallCheck(this, n), a = t.call(this, e), _defineProperty(_assertThisInitialized(a), "handleRef", function (e) {
      a.componentRef = e;
    }), a.donate = m$1(r = a.donate).call(r, _assertThisInitialized(a)), a;
  }

  return _createClass(n, [{
    key: "data",
    get: function () {
      return this.state.data;
    }
  }, {
    key: "isValid",
    get: function () {
      return this.state.isValid;
    }
  }, {
    key: "setState",
    value: function (e) {
      this.state = cu(cu({}, this.state), e);
    }
  }, {
    key: "donate",
    value: function () {
      var e = this.data,
          t = this.isValid;
      this.props.onDonate({
        data: e,
        isValid: t
      }, this);
    }
  }, {
    key: "render",
    value: function () {
      return h(Xa, {
        i18n: this.props.i18n,
        loadingContext: this.props.loadingContext
      }, h(lu, _extends({}, this.props, {
        ref: this.handleRef,
        onChange: this.setState,
        onDonate: this.donate
      })));
    }
  }]), n;
}();

function pu(e, t) {
  var o = n$1(e);

  if (r$1) {
    var i = r$1(e);
    t && (i = f$1(i).call(i, function (t) {
      return a$1(e, t).enumerable;
    })), o.push.apply(o, i);
  }

  return o;
}

function fu(e) {
  var t = function () {
    if ("undefined" == typeof Reflect || !S) return !1;
    if (S.sham) return !1;
    if ("function" == typeof Proxy) return !0;

    try {
      return Boolean.prototype.valueOf.call(S(Boolean, [], function () {})), !0;
    } catch (e) {
      return !1;
    }
  }();

  return function () {
    var n,
        r = _getPrototypeOf(e);

    if (t) {
      var a = _getPrototypeOf(this).constructor;
      n = S(r, arguments, a);
    } else n = r.apply(this, arguments);

    return _possibleConstructorReturn(this, n);
  };
}

_defineProperty(du, "type", "donation"), _defineProperty(du, "defaultProps", {
  onCancel: function () {},
  onDonate: function () {}
});

var hu = function (e) {
  _inherits(r, d);
  var t = fu(r);

  function r() {
    var e, n;
    _classCallCheck(this, r);

    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i];

    return n = t.call.apply(t, y$1(e = [this]).call(e, o)), _defineProperty(_assertThisInitialized(n), "postForm", void 0), n;
  }

  return _createClass(r, [{
    key: "componentDidMount",
    value: function () {
      var e = this,
          t = new v$1(function (t, n) {
        return e.props.beforeRedirect(t, n, function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n,
                r,
                s = null != arguments[t] ? arguments[t] : {};
            t % 2 ? p$1(n = pu(Object(s), !0)).call(n, function (t) {
              _defineProperty(e, t, s[t]);
            }) : o$1 ? i(e, o$1(s)) : p$1(r = pu(Object(s))).call(r, function (t) {
              l$1(e, t, a$1(s, t));
            });
          }

          return e;
        }({
          url: e.props.url,
          method: e.props.method
        }, e.props.data ? {
          data: e.props.data
        } : {}));
      });
      t.then(function () {
        e.postForm ? e.postForm.submit() : window.location.assign(e.props.url);
      }).catch(function () {});
    }
  }, {
    key: "render",
    value: function (e) {
      var t,
          r = this,
          a = e.url,
          o = e.method,
          i = e.data,
          l = void 0 === i ? {} : i;
      return "POST" === o ? h("form", {
        method: "post",
        action: a,
        style: {
          display: "none"
        },
        ref: function (e) {
          r.postForm = e;
        }
      }, K(t = n$1(l)).call(t, function (e) {
        return h("input", {
          type: "hidden",
          name: e,
          key: e,
          value: l[e]
        });
      })) : null;
    }
  }]), r;
}();

_defineProperty(hu, "defaultProps", {
  beforeRedirect: function (e) {
    return e();
  },
  method: "GET"
});
var yu = ["payButton", "onSubmit", "amount", "name"];

function mu(e, t) {
  var o = n$1(e);

  if (r$1) {
    var i = r$1(e);
    t && (i = f$1(i).call(i, function (t) {
      return a$1(e, t).enumerable;
    })), o.push.apply(o, i);
  }

  return o;
}

function vu(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n,
        r,
        s = null != arguments[t] ? arguments[t] : {};
    t % 2 ? p$1(n = mu(Object(s), !0)).call(n, function (t) {
      _defineProperty(e, t, s[t]);
    }) : o$1 ? i(e, o$1(s)) : p$1(r = mu(Object(s))).call(r, function (t) {
      l$1(e, t, a$1(s, t));
    });
  }

  return e;
}

function gu(e) {
  var t = e.payButton,
      n = e.onSubmit,
      r = e.amount,
      a = void 0 === r ? null : r,
      o = e.name,
      i = _objectWithoutProperties(e, yu),
      l = Pt().i18n,
      s = ft("ready"),
      c = _slicedToArray(s, 2),
      u = c[0],
      d = c[1];

  this.setStatus = function (e) {
    d(e);
  };

  return h(p, null, t(vu(vu({}, i), {}, {
    status: u,
    classNameModifiers: ["standalone"],
    label: function () {
      var e, t;
      return a && {}.hasOwnProperty.call(a, "value") && 0 === a.value ? y$1(e = "".concat(l.get("preauthorizeWith"), " ")).call(e, o) : y$1(t = "".concat(l.get("continueTo"), " ")).call(t, o);
    }(),
    onClick: n
  })));
}

function bu(e, t) {
  var o = n$1(e);

  if (r$1) {
    var i = r$1(e);
    t && (i = f$1(i).call(i, function (t) {
      return a$1(e, t).enumerable;
    })), o.push.apply(o, i);
  }

  return o;
}

function _u(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n,
        r,
        s = null != arguments[t] ? arguments[t] : {};
    t % 2 ? p$1(n = bu(Object(s), !0)).call(n, function (t) {
      _defineProperty(e, t, s[t]);
    }) : o$1 ? i(e, o$1(s)) : p$1(r = bu(Object(s))).call(r, function (t) {
      l$1(e, t, a$1(s, t));
    });
  }

  return e;
}

function Cu(e) {
  var t = function () {
    if ("undefined" == typeof Reflect || !S) return !1;
    if (S.sham) return !1;
    if ("function" == typeof Proxy) return !0;

    try {
      return Boolean.prototype.valueOf.call(S(Boolean, [], function () {})), !0;
    } catch (e) {
      return !1;
    }
  }();

  return function () {
    var n,
        r = _getPrototypeOf(e);

    if (t) {
      var a = _getPrototypeOf(this).constructor;
      n = S(r, arguments, a);
    } else n = r.apply(this, arguments);

    return _possibleConstructorReturn(this, n);
  };
}

var ku = function (e) {
  _inherits(n, Lt);
  var t = Cu(n);

  function n() {
    return _classCallCheck(this, n), t.apply(this, arguments);
  }

  return _createClass(n, [{
    key: "formatProps",
    value: function (e) {
      return _u(_u({}, e), {}, {
        showButton: !!e.showPayButton
      });
    }
  }, {
    key: "formatData",
    value: function () {
      return {
        paymentMethod: {
          type: this.props.type
        }
      };
    }
  }, {
    key: "isValid",
    get: function () {
      return !0;
    }
  }, {
    key: "icon",
    get: function () {
      return rt({
        loadingContext: this.props.loadingContext
      })(this.props.type);
    }
  }, {
    key: "render",
    value: function () {
      var e = this;
      return this.props.url && this.props.method ? h(hu, this.props) : this.props.showButton ? h(Xa, _extends({}, this.props, {
        loadingContext: this.props.loadingContext
      }), h(gu, _extends({}, this.props, {
        onSubmit: this.submit,
        payButton: this.payButton,
        ref: function (t) {
          e.componentRef = t;
        }
      }))) : null;
    }
  }]), n;
}();

function Nu(e, t) {
  var o = n$1(e);

  if (r$1) {
    var i = r$1(e);
    t && (i = f$1(i).call(i, function (t) {
      return a$1(e, t).enumerable;
    })), o.push.apply(o, i);
  }

  return o;
}

function wu(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n,
        r,
        s = null != arguments[t] ? arguments[t] : {};
    t % 2 ? p$1(n = Nu(Object(s), !0)).call(n, function (t) {
      _defineProperty(e, t, s[t]);
    }) : o$1 ? i(e, o$1(s)) : p$1(r = Nu(Object(s))).call(r, function (t) {
      l$1(e, t, a$1(s, t));
    });
  }

  return e;
}

function Su(e) {
  var t = function () {
    if ("undefined" == typeof Reflect || !S) return !1;
    if (S.sham) return !1;
    if ("function" == typeof Proxy) return !0;

    try {
      return Boolean.prototype.valueOf.call(S(Boolean, [], function () {})), !0;
    } catch (e) {
      return !1;
    }
  }();

  return function () {
    var n,
        r = _getPrototypeOf(e);

    if (t) {
      var a = _getPrototypeOf(this).constructor;
      n = S(r, arguments, a);
    } else n = r.apply(this, arguments);

    return _possibleConstructorReturn(this, n);
  };
}

_defineProperty(ku, "type", "redirect"), _defineProperty(ku, "defaultProps", {
  type: ku.type,
  showPayButton: !0
});

var xu = function (e) {
  _inherits(n, ku);
  var t = Su(n);

  function n() {
    return _classCallCheck(this, n), t.apply(this, arguments);
  }

  return _createClass(n, [{
    key: "formatProps",
    value: function (e) {
      var t;
      return wu(wu({}, e), {}, {
        showPayButton: null !== (t = e.showButton) && void 0 !== t ? t : e.showPayButton
      });
    }
  }, {
    key: "formatData",
    value: function () {
      return {
        paymentMethod: {
          type: n.type
        }
      };
    }
  }, {
    key: "displayName",
    get: function () {
      return this.props.name || this.constructor.type;
    }
  }, {
    key: "render",
    value: function () {
      var e = this;
      return this.props.showPayButton ? h(Xa, {
        i18n: this.props.i18n,
        loadingContext: this.props.loadingContext
      }, h(gu, _extends({}, this.props, {
        name: this.displayName,
        onSubmit: this.submit,
        payButton: this.payButton,
        ref: function (t) {
          e.componentRef = t;
        }
      }))) : null;
    }
  }]), n;
}();

_defineProperty(xu, "type", "giropay");
var Pu = 2,
    Fu = 0,
    Au = "adyen",
    Bu = "https://pay.google.com/gp/p/js/pay.js",
    Eu = ["amount", "countryCode", "totalPriceStatus"],
    Ru = ["configuration"];

function Ou(e, t) {
  var o = n$1(e);

  if (r$1) {
    var i = r$1(e);
    t && (i = f$1(i).call(i, function (t) {
      return a$1(e, t).enumerable;
    })), o.push.apply(o, i);
  }

  return o;
}

function Du(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n,
        r,
        s = null != arguments[t] ? arguments[t] : {};
    t % 2 ? p$1(n = Ou(Object(s), !0)).call(n, function (t) {
      _defineProperty(e, t, s[t]);
    }) : o$1 ? i(e, o$1(s)) : p$1(r = Ou(Object(s))).call(r, function (t) {
      l$1(e, t, a$1(s, t));
    });
  }

  return e;
}

function Mu(e) {
  var t = e.amount,
      n = e.countryCode,
      r = void 0 === n ? "US" : n,
      a = e.totalPriceStatus,
      o = void 0 === a ? "FINAL" : a,
      i = _objectWithoutProperties(e, Eu),
      l = String(Le(t.value, t.currency));
  return Du({
    countryCode: r,
    currencyCode: t.currency,
    totalPrice: l,
    totalPriceStatus: o
  }, i.transactionInfo);
}

function Tu(e) {
  var t = e.configuration,
      n = _objectWithoutProperties(e, Ru);
  return {
    apiVersion: Pu,
    apiVersionMinor: Fu,
    transactionInfo: Mu(n),
    merchantInfo: Du(Du({
      merchantId: t.merchantId,
      merchantName: t.merchantName
    }, t.merchantOrigin ? {
      merchantOrigin: t.merchantOrigin
    } : {}), t.authJwt ? {
      authJwt: t.authJwt
    } : {}),
    allowedPaymentMethods: [{
      type: "CARD",
      tokenizationSpecification: {
        type: "PAYMENT_GATEWAY",
        parameters: {
          gateway: Au,
          gatewayMerchantId: t.gatewayMerchantId
        }
      },
      parameters: {
        allowedAuthMethods: n.allowedAuthMethods,
        allowedCardNetworks: n.allowedCardNetworks,
        allowPrepaidCards: n.allowPrepaidCards,
        allowCreditCards: n.allowCreditCards,
        billingAddressRequired: n.billingAddressRequired,
        billingAddressParameters: n.billingAddressParameters
      }
    }],
    emailRequired: n.emailRequired,
    shippingAddressRequired: n.shippingAddressRequired,
    shippingAddressParameters: n.shippingAddressParameters,
    shippingOptionRequired: n.shippingOptionRequired,
    shippingOptionParameters: n.shippingOptionParameters,
    callbackIntents: n.callbackIntents
  };
}

var Iu = ["en", "ar", "bg", "ca", "cs", "da", "de", "el", "es", "et", "fi", "fr", "hr", "id", "it", "ja", "ko", "ms", "nl", "no", "pl", "pt", "ru", "sk", "sl", "sr", "sv", "th", "tr", "uk", "zh"];

var ju = function () {
  function n(e) {
    _classCallCheck(this, n), _defineProperty(this, "paymentsClient", void 0);

    var t = function () {
      switch ((arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "TEST").toLowerCase()) {
        case "production":
        case "live":
        case "live-au":
        case "live-apse":
        case "live-us":
        case "live-in":
          return "PRODUCTION";

        default:
          return "TEST";
      }
    }(e.environment);

    this.paymentsClient = this.getGooglePaymentsClient({
      environment: t,
      paymentDataCallbacks: e.paymentDataCallbacks
    });
  }

  var r;
  return _createClass(n, [{
    key: "getGooglePaymentsClient",
    value: (r = _asyncToGenerator(regenerator.mark(function e(n) {
      var r, a;
      return regenerator.wrap(function (e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            if (null !== (r = window.google) && void 0 !== r && r.payments) {
              e.next = 4;
              break;
            }

            return a = new Ro(Bu), e.next = 4, a.load();

          case 4:
            return e.abrupt("return", new google.payments.api.PaymentsClient(n));

          case 5:
          case "end":
            return e.stop();
        }
      }, e);
    })), function (e) {
      return r.apply(this, arguments);
    })
  }, {
    key: "isReadyToPay",
    value: function (e) {
      return this.paymentsClient ? this.paymentsClient.then(function (t) {
        return t.isReadyToPay((r = (n = e).allowedAuthMethods, a = n.allowedCardNetworks, o = n.existingPaymentMethodRequired, {
          apiVersion: Pu,
          apiVersionMinor: Fu,
          allowedPaymentMethods: [{
            type: "CARD",
            parameters: {
              allowedAuthMethods: r,
              allowedCardNetworks: a
            },
            tokenizationSpecification: {
              type: "PAYMENT_GATEWAY",
              parameters: {}
            }
          }],
          existingPaymentMethodRequired: void 0 !== o && o
        }));
        var n, r, a, o;
      }) : v$1.reject(new Error("Google Pay is not available"));
    }
  }, {
    key: "prefetchPaymentData",
    value: function (e) {
      if (!this.paymentsClient) throw new Error("Google Pay is not available");
      var t = Tu(e);
      this.paymentsClient.then(function (e) {
        return e.prefetchPaymentData(t);
      });
    }
  }, {
    key: "initiatePayment",
    value: function (e) {
      if (!this.paymentsClient) throw new Error("Google Pay is not available");
      var t = Tu(e);
      return this.paymentsClient.then(function (e) {
        return e.loadPaymentData(t);
      });
    }
  }]), n;
}();

function Vu(e) {
  var t = function () {
    if ("undefined" == typeof Reflect || !S) return !1;
    if (S.sham) return !1;
    if ("function" == typeof Proxy) return !0;

    try {
      return Boolean.prototype.valueOf.call(S(Boolean, [], function () {})), !0;
    } catch (e) {
      return !1;
    }
  }();

  return function () {
    var n,
        r = _getPrototypeOf(e);

    if (t) {
      var a = _getPrototypeOf(this).constructor;
      n = S(r, arguments, a);
    } else n = r.apply(this, arguments);

    return _possibleConstructorReturn(this, n);
  };
}

var Lu = function (e) {
  _inherits(n, d);
  var t = Vu(n);

  function n() {
    var e, r;
    _classCallCheck(this, n);

    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i];

    return r = t.call.apply(t, y$1(e = [this]).call(e, o)), _defineProperty(_assertThisInitialized(r), "paywithgoogleWrapper", void 0), _defineProperty(_assertThisInitialized(r), "clicked", !1), _defineProperty(_assertThisInitialized(r), "handleClick", function (e) {
      e.preventDefault(), e.stopPropagation(), r.clicked || (r.props.onClick(e), r.clicked = !0, q(function () {
        r.clicked = !1;
      }, 300));
    }), r;
  }

  return _createClass(n, [{
    key: "componentDidMount",
    value: function () {
      var e = this,
          t = this.props,
          n = t.buttonColor,
          r = t.buttonType,
          a = t.buttonLocale,
          o = t.buttonSizeMode;
      t.paymentsClient.then(function (t) {
        return t.createButton({
          onClick: e.handleClick,
          buttonType: r,
          buttonColor: n,
          buttonLocale: a,
          buttonSizeMode: o
        });
      }).then(function (t) {
        e.paywithgoogleWrapper.appendChild(t);
      });
    }
  }, {
    key: "render",
    value: function () {
      var e = this;
      return h("span", {
        className: "adyen-checkout__paywithgoogle",
        ref: function (t) {
          e.paywithgoogleWrapper = t;
        }
      });
    }
  }]), n;
}();

_defineProperty(Lu, "defaultProps", {
  buttonColor: "default",
  buttonType: "long",
  buttonSizeMode: "static"
});
var Uu = {
  environment: "TEST",
  existingPaymentMethodRequired: !1,
  buttonColor: "default",
  buttonType: "long",
  buttonSizeMode: void 0,
  showPayButton: !0,
  configuration: {
    gatewayMerchantId: "",
    merchantId: "",
    merchantName: ""
  },
  amount: {
    value: 0,
    currency: "USD"
  },
  countryCode: "US",
  totalPriceStatus: "FINAL",
  onAuthorized: function (e) {
    return e;
  },
  onClick: function (e) {
    return e();
  },
  allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
  allowedCardNetworks: ["AMEX", "DISCOVER", "JCB", "MASTERCARD", "VISA"],
  allowCreditCards: !0,
  allowPrepaidCards: !0,
  billingAddressRequired: !1,
  billingAddressParameters: void 0,
  emailRequired: !1,
  shippingAddressRequired: !1,
  shippingAddressParameters: void 0,
  shippingOptionRequired: !1,
  shippingOptionParameters: void 0,
  paymentMethods: []
};

function qu(e, t) {
  var o = n$1(e);

  if (r$1) {
    var i = r$1(e);
    t && (i = f$1(i).call(i, function (t) {
      return a$1(e, t).enumerable;
    })), o.push.apply(o, i);
  }

  return o;
}

function Ku(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n,
        r,
        s = null != arguments[t] ? arguments[t] : {};
    t % 2 ? p$1(n = qu(Object(s), !0)).call(n, function (t) {
      _defineProperty(e, t, s[t]);
    }) : o$1 ? i(e, o$1(s)) : p$1(r = qu(Object(s))).call(r, function (t) {
      l$1(e, t, a$1(s, t));
    });
  }

  return e;
}

function Hu(e) {
  var t = function () {
    if ("undefined" == typeof Reflect || !S) return !1;
    if (S.sham) return !1;
    if ("function" == typeof Proxy) return !0;

    try {
      return Boolean.prototype.valueOf.call(S(Boolean, [], function () {})), !0;
    } catch (e) {
      return !1;
    }
  }();

  return function () {
    var n,
        r = _getPrototypeOf(e);

    if (t) {
      var a = _getPrototypeOf(this).constructor;
      n = S(r, arguments, a);
    } else n = r.apply(this, arguments);

    return _possibleConstructorReturn(this, n);
  };
}

var zu = function (e) {
  _inherits(n, Lt);
  var t = Hu(n);

  function n() {
    var e, r, a;
    _classCallCheck(this, n);

    for (var o = arguments.length, i = new Array(o), l = 0; l < o; l++) i[l] = arguments[l];

    return a = t.call.apply(t, y$1(e = [this]).call(e, i)), _defineProperty(_assertThisInitialized(a), "googlePay", new ju(a.props)), _defineProperty(_assertThisInitialized(a), "submit", function () {
      var e = a.props.onAuthorized,
          t = void 0 === e ? function () {} : e;
      return new v$1(function (e, t) {
        return a.props.onClick(e, t);
      }).then(function () {
        return a.googlePay.initiatePayment(a.props);
      }).then(function (e) {
        return a.setState({
          googlePayToken: e.paymentMethodData.tokenizationData.token,
          googlePayCardNetwork: e.paymentMethodData.info.cardNetwork
        }), _get((r = _assertThisInitialized(a), _getPrototypeOf(n.prototype)), "submit", r).call(r), t(e);
      }).catch(function (e) {
        return a.handleError(new Mt("ERROR", e.toString())), v$1.reject(e);
      });
    }), _defineProperty(_assertThisInitialized(a), "isAvailable", function () {
      return a.isReadyToPay().then(function (e) {
        if (!e.result) throw new Error("Google Pay is not available");
        if (!1 === e.paymentMethodPresent) throw new Error("Google Pay - No paymentMethodPresent");
        return !0;
      }).catch(function () {
        return !1;
      });
    }), _defineProperty(_assertThisInitialized(a), "isReadyToPay", function () {
      return a.googlePay.isReadyToPay(a.props);
    }), _defineProperty(_assertThisInitialized(a), "prefetch", function () {
      return a.googlePay.prefetchPaymentData(a.props);
    }), a;
  }

  return _createClass(n, [{
    key: "formatProps",
    value: function (e) {
      var t,
          n,
          r,
          a,
          o,
          i,
          l = null !== (t = e.brands) && void 0 !== t && t.length ? (o = e.brands, i = {
        mc: "MASTERCARD",
        amex: "AMEX",
        visa: "VISA",
        interac: "INTERAC",
        discover: "DISCOVER"
      }, k$1(o).call(o, function (e, t) {
        return i[t] && !h$1(e).call(e, i[t]) && e.push(i[t]), e;
      }, [])) : e.allowedCardNetworks,
          s = null !== (n = e.buttonSizeMode) && void 0 !== n ? n : e.isDropin ? "fill" : "static",
          c = function () {
        var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "").toLowerCase().substring(0, 2);
        return h$1(Iu).call(Iu, e) ? e : null;
      }(null !== (r = e.buttonLocale) && void 0 !== r ? r : null === (a = e.i18n) || void 0 === a ? void 0 : a.locale);

      return Ku(Ku({}, e), {}, {
        showButton: !0 === e.showPayButton,
        configuration: e.configuration,
        allowedCardNetworks: l,
        buttonSizeMode: s,
        buttonLocale: c
      });
    }
  }, {
    key: "formatData",
    value: function () {
      var e;
      return {
        paymentMethod: Ku({
          type: null !== (e = this.props.type) && void 0 !== e ? e : n.type
        }, this.state),
        browserInfo: this.browserInfo
      };
    }
  }, {
    key: "isValid",
    get: function () {
      return !!this.state.googlePayToken;
    }
  }, {
    key: "browserInfo",
    get: function () {
      return mo();
    }
  }, {
    key: "icon",
    get: function () {
      var e;
      return null !== (e = this.props.icon) && void 0 !== e ? e : rt({
        loadingContext: this.props.loadingContext
      })("googlepay");
    }
  }, {
    key: "render",
    value: function () {
      return this.props.showPayButton ? h(Lu, {
        buttonColor: this.props.buttonColor,
        buttonType: this.props.buttonType,
        buttonSizeMode: this.props.buttonSizeMode,
        buttonLocale: this.props.buttonLocale,
        paymentsClient: this.googlePay.paymentsClient,
        onClick: this.submit
      }) : null;
    }
  }]), n;
}();

function Wu(e) {
  var t = function () {
    if ("undefined" == typeof Reflect || !S) return !1;
    if (S.sham) return !1;
    if ("function" == typeof Proxy) return !0;

    try {
      return Boolean.prototype.valueOf.call(S(Boolean, [], function () {})), !0;
    } catch (e) {
      return !1;
    }
  }();

  return function () {
    var n,
        r = _getPrototypeOf(e);

    if (t) {
      var a = _getPrototypeOf(this).constructor;
      n = S(r, arguments, a);
    } else n = r.apply(this, arguments);

    return _possibleConstructorReturn(this, n);
  };
}

_defineProperty(zu, "type", "paywithgoogle"), _defineProperty(zu, "defaultProps", Uu);

var Gu = function (e) {
  _inherits(n, _i);
  var t = Wu(n);

  function n() {
    return _classCallCheck(this, n), t.apply(this, arguments);
  }

  return _createClass(n);
}();

_defineProperty(Gu, "type", "entercash");
var Yu = {
  telephoneNumber: [{
    validate: function (e) {
      return !!e && e.length <= 11;
    },
    errorMessage: "voucher.econtext.telephoneNumber.invalid",
    modes: ["input", "blur"]
  }, {
    validate: function (e) {
      return !!e && fr.test(e) && (10 === e.length || 11 === e.length);
    },
    errorMessage: "voucher.econtext.telephoneNumber.invalid",
    modes: ["blur"]
  }]
};

function $u(e) {
  var t = e.personalDetailsRequired,
      n = void 0 === t || t,
      r = e.data,
      a = e.onChange,
      o = e.showPayButton,
      i = e.payButton,
      l = vt(null),
      s = Pt().i18n,
      c = ft("ready"),
      u = _slicedToArray(c, 2),
      d = u[0],
      p = u[1];
  return this.setStatus = p, this.showValidation = function () {
    l.current && l.current.showValidation();
  }, h("div", {
    className: "adyen-checkout__econtext-input__field"
  }, !!n && h(_r, {
    data: r,
    requiredFields: ["firstName", "lastName", "telephoneNumber", "shopperEmail"],
    onChange: a,
    namePrefix: "econtext",
    ref: l,
    validationRules: Yu
  }), o && i({
    status: d,
    label: s.get("confirmPurchase")
  }));
}

function Zu(e) {
  var t,
      n,
      r = (t = e, (n = document.createElement("textArea")).readOnly = !0, n.value = t, document.body.appendChild(n), n);

  if (window.navigator.userAgent.match(/ipad|iphone/i)) {
    var a = document.createRange();
    a.selectNodeContents(r);
    var o = window.getSelection();
    o.removeAllRanges(), o.addRange(a), r.setSelectionRange(0, 999999);
  } else r.select();

  document.execCommand("copy"), document.body.removeChild(r);
}

var Ju = ["voucherDetails", "className"];

function Qu(e) {
  var t,
      n = e.voucherDetails,
      r = void 0 === n ? [] : n,
      a = e.className,
      o = void 0 === a ? "" : a,
      i = _objectWithoutProperties(e, Ju),
      l = Pt(),
      s = l.i18n,
      c = l.loadingContext;
  return h("div", {
    className: H("adyen-checkout__voucher-result", "adyen-checkout__voucher-result--".concat(i.paymentMethodType), o)
  }, h("div", {
    className: "adyen-checkout__voucher-result__top"
  }, h("div", {
    className: "adyen-checkout__voucher-result__image"
  }, !!i.imageUrl && h("span", {
    className: "adyen-checkout__voucher-result__image__wrapper"
  }, h("img", {
    alt: i.paymentMethodType,
    className: "adyen-checkout__voucher-result__image__brand",
    src: i.imageUrl
  })), !!i.issuerImageUrl && h("span", {
    className: "adyen-checkout__voucher-result__image__wrapper"
  }, h("img", {
    alt: i.paymentMethodType,
    className: "adyen-checkout__voucher-result__image__issuer",
    src: i.issuerImageUrl
  }))), h("div", {
    className: "adyen-checkout__voucher-result__introduction"
  }, i.introduction, " ", i.instructionsUrl && h("a", {
    className: "adyen-checkout__link adyen-checkout__link--voucher-result-instructions",
    href: i.instructionsUrl,
    target: "_blank",
    rel: "noopener noreferrer"
  }, s.get("voucher.readInstructions"), " \u203a")), i.amount && h("div", {
    className: "adyen-checkout__voucher-result__amount"
  }, i.amount, i.surcharge && h("span", {
    className: "adyen-checkout__voucher-result__surcharge"
  }, "(", s.get("voucher.surcharge").replace("%@", i.surcharge), ")"))), i.reference && h("div", {
    className: "adyen-checkout__voucher-result__separator"
  }, h("div", {
    className: "adyen-checkout__voucher-result__separator__inner"
  }), h("div", {
    className: "adyen-checkout__voucher-result__code__label"
  }, h("span", {
    className: "adyen-checkout__voucher-result__code__label__text"
  }, s.get("voucher.paymentReferenceLabel")))), h("div", {
    className: "adyen-checkout__voucher-result__bottom"
  }, i.reference && h("div", {
    className: "adyen-checkout__voucher-result__code"
  }, i.barcode && h("img", {
    alt: s.get("voucher.paymentReferenceLabel"),
    className: "adyen-checkout__voucher-result__code__barcode",
    src: i.barcode
  }), h("span", null, i.reference)), (!!i.downloadUrl || !!i.copyBtn) && h("ul", {
    className: "adyen-checkout__voucher-result__actions"
  }, !!i.copyBtn && h("li", {
    className: "adyen-checkout__voucher-result__actions__item"
  }, h(At, {
    inline: !0,
    variant: "action",
    onClick: function (e, t) {
      var n = t.complete;
      Zu(i.reference), n();
    },
    icon: rt({
      loadingContext: c,
      imageFolder: "components/"
    })("copy"),
    label: s.get("button.copy")
  })), !!i.downloadUrl && h("li", {
    className: "adyen-checkout__voucher-result__actions__item"
  }, h(At, {
    inline: !0,
    variant: "action",
    href: i.downloadUrl,
    icon: rt({
      loadingContext: c,
      imageFolder: "components/"
    })("download"),
    label: i.downloadButtonText || s.get("button.download"),
    target: "_blank",
    rel: "noopener noreferrer"
  }))), h("ul", {
    className: "adyen-checkout__voucher-result__details"
  }, K(t = f$1(r).call(r, function (e) {
    var t = e.label,
        n = e.value;
    return !!t && !!n;
  })).call(t, function (e, t) {
    var n = e.label,
        r = e.value;
    return h("li", {
      key: t,
      className: "adyen-checkout__voucher-result__details__item"
    }, h("span", {
      className: "adyen-checkout__voucher-result__details__label"
    }, n), h("span", {
      className: "adyen-checkout__voucher-result__details__value"
    }, r));
  }))));
}

var Xu = function (e) {
  var t = e.reference,
      n = e.totalAmount,
      r = e.expiresAt,
      a = e.paymentMethodType,
      o = e.maskedTelephoneNumber,
      i = e.instructionsUrl,
      l = e.collectionInstitutionNumber,
      s = Pt(),
      c = s.loadingContext,
      u = s.i18n;
  return h(Qu, {
    paymentMethodType: a,
    reference: t,
    introduction: u.get("voucher.introduction.econtext"),
    imageUrl: rt({
      loadingContext: c
    })(a),
    instructionsUrl: i,
    amount: n && u.amount(n.value, n.currency),
    voucherDetails: [{
      label: u.get("voucher.collectionInstitutionNumber"),
      value: l
    }, {
      label: u.get("voucher.expirationDate"),
      value: u.date(r)
    }, {
      label: u.get("voucher.telephoneNumber"),
      value: o
    }],
    copyBtn: !0
  });
};

function ed(e, t) {
  var o = n$1(e);

  if (r$1) {
    var i = r$1(e);
    t && (i = f$1(i).call(i, function (t) {
      return a$1(e, t).enumerable;
    })), o.push.apply(o, i);
  }

  return o;
}

function td(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n,
        r,
        s = null != arguments[t] ? arguments[t] : {};
    t % 2 ? p$1(n = ed(Object(s), !0)).call(n, function (t) {
      _defineProperty(e, t, s[t]);
    }) : o$1 ? i(e, o$1(s)) : p$1(r = ed(Object(s))).call(r, function (t) {
      l$1(e, t, a$1(s, t));
    });
  }

  return e;
}

function nd(e) {
  var t = function () {
    if ("undefined" == typeof Reflect || !S) return !1;
    if (S.sham) return !1;
    if ("function" == typeof Proxy) return !0;

    try {
      return Boolean.prototype.valueOf.call(S(Boolean, [], function () {})), !0;
    } catch (e) {
      return !1;
    }
  }();

  return function () {
    var n,
        r = _getPrototypeOf(e);

    if (t) {
      var a = _getPrototypeOf(this).constructor;
      n = S(r, arguments, a);
    } else n = r.apply(this, arguments);

    return _possibleConstructorReturn(this, n);
  };
}

var rd = function (e) {
  _inherits(n, Lt);
  var t = nd(n);

  function n() {
    return _classCallCheck(this, n), t.apply(this, arguments);
  }

  return _createClass(n, [{
    key: "isValid",
    get: function () {
      return !this.props.personalDetailsRequired || !!this.state.isValid;
    }
  }, {
    key: "formatData",
    value: function () {
      return td(td({}, this.state.data), {}, {
        paymentMethod: {
          type: this.props.type || n.type
        }
      });
    }
  }, {
    key: "icon",
    get: function () {
      return rt({
        loadingContext: this.props.loadingContext
      })(this.props.type);
    }
  }, {
    key: "render",
    value: function () {
      var e = this;
      return h(Xa, {
        i18n: this.props.i18n,
        loadingContext: this.props.loadingContext
      }, this.props.reference ? h(Xu, _extends({
        ref: function (t) {
          e.componentRef = t;
        }
      }, this.props)) : h($u, _extends({
        ref: function (t) {
          e.componentRef = t;
        }
      }, this.props, {
        onChange: this.setState,
        onSubmit: this.submit,
        payButton: this.payButton
      })));
    }
  }]), n;
}();

_defineProperty(rd, "type", "econtext"), _defineProperty(rd, "defaultProps", {
  personalDetailsRequired: !0
});
var ad = ["ES", "FR"];

function od(e, t) {
  var o = n$1(e);

  if (r$1) {
    var i = r$1(e);
    t && (i = f$1(i).call(i, function (t) {
      return a$1(e, t).enumerable;
    })), o.push.apply(o, i);
  }

  return o;
}

function id(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n,
        r,
        s = null != arguments[t] ? arguments[t] : {};
    t % 2 ? p$1(n = od(Object(s), !0)).call(n, function (t) {
      _defineProperty(e, t, s[t]);
    }) : o$1 ? i(e, o$1(s)) : p$1(r = od(Object(s))).call(r, function (t) {
      l$1(e, t, a$1(s, t));
    });
  }

  return e;
}

function ld(e) {
  var t = function () {
    if ("undefined" == typeof Reflect || !S) return !1;
    if (S.sham) return !1;
    if ("function" == typeof Proxy) return !0;

    try {
      return Boolean.prototype.valueOf.call(S(Boolean, [], function () {})), !0;
    } catch (e) {
      return !1;
    }
  }();

  return function () {
    var n,
        r = _getPrototypeOf(e);

    if (t) {
      var a = _getPrototypeOf(this).constructor;
      n = S(r, arguments, a);
    } else n = r.apply(this, arguments);

    return _possibleConstructorReturn(this, n);
  };
}

var sd = function (e) {
  _inherits(n, ro);
  var t = ld(n);

  function n() {
    return _classCallCheck(this, n), t.apply(this, arguments);
  }

  return _createClass(n, [{
    key: "formatProps",
    value: function (e) {
      return id(id({}, _get(_getPrototypeOf(n.prototype), "formatProps", this).call(this, e)), {}, {
        allowedCountries: e.countryCode ? [e.countryCode] : ad
      });
    }
  }]), n;
}();

function cd(e, t) {
  var o = n$1(e);

  if (r$1) {
    var i = r$1(e);
    t && (i = f$1(i).call(i, function (t) {
      return a$1(e, t).enumerable;
    })), o.push.apply(o, i);
  }

  return o;
}

function ud(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n,
        r,
        s = null != arguments[t] ? arguments[t] : {};
    t % 2 ? p$1(n = cd(Object(s), !0)).call(n, function (t) {
      _defineProperty(e, t, s[t]);
    }) : o$1 ? i(e, o$1(s)) : p$1(r = cd(Object(s))).call(r, function (t) {
      l$1(e, t, a$1(s, t));
    });
  }

  return e;
}

function dd(e) {
  var t = function () {
    if ("undefined" == typeof Reflect || !S) return !1;
    if (S.sham) return !1;
    if ("function" == typeof Proxy) return !0;

    try {
      return Boolean.prototype.valueOf.call(S(Boolean, [], function () {})), !0;
    } catch (e) {
      return !1;
    }
  }();

  return function () {
    var n,
        r = _getPrototypeOf(e);

    if (t) {
      var a = _getPrototypeOf(this).constructor;
      n = S(r, arguments, a);
    } else n = r.apply(this, arguments);

    return _possibleConstructorReturn(this, n);
  };
}

_defineProperty(sd, "type", "facilypay_3x");

var pd = function (e) {
  _inherits(n, ro);
  var t = dd(n);

  function n() {
    return _classCallCheck(this, n), t.apply(this, arguments);
  }

  return _createClass(n, [{
    key: "formatProps",
    value: function (e) {
      return ud(ud({}, _get(_getPrototypeOf(n.prototype), "formatProps", this).call(this, e)), {}, {
        allowedCountries: e.countryCode ? [e.countryCode] : ad
      });
    }
  }]), n;
}();

function fd(e, t) {
  var o = n$1(e);

  if (r$1) {
    var i = r$1(e);
    t && (i = f$1(i).call(i, function (t) {
      return a$1(e, t).enumerable;
    })), o.push.apply(o, i);
  }

  return o;
}

function hd(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n,
        r,
        s = null != arguments[t] ? arguments[t] : {};
    t % 2 ? p$1(n = fd(Object(s), !0)).call(n, function (t) {
      _defineProperty(e, t, s[t]);
    }) : o$1 ? i(e, o$1(s)) : p$1(r = fd(Object(s))).call(r, function (t) {
      l$1(e, t, a$1(s, t));
    });
  }

  return e;
}

function yd(e) {
  var t = function () {
    if ("undefined" == typeof Reflect || !S) return !1;
    if (S.sham) return !1;
    if ("function" == typeof Proxy) return !0;

    try {
      return Boolean.prototype.valueOf.call(S(Boolean, [], function () {})), !0;
    } catch (e) {
      return !1;
    }
  }();

  return function () {
    var n,
        r = _getPrototypeOf(e);

    if (t) {
      var a = _getPrototypeOf(this).constructor;
      n = S(r, arguments, a);
    } else n = r.apply(this, arguments);

    return _possibleConstructorReturn(this, n);
  };
}

_defineProperty(pd, "type", "facilypay_4x");

var md = function (e) {
  _inherits(n, ro);
  var t = yd(n);

  function n() {
    return _classCallCheck(this, n), t.apply(this, arguments);
  }

  return _createClass(n, [{
    key: "formatProps",
    value: function (e) {
      return hd(hd({}, _get(_getPrototypeOf(n.prototype), "formatProps", this).call(this, e)), {}, {
        allowedCountries: e.countryCode ? [e.countryCode] : ad
      });
    }
  }]), n;
}();

function vd(e, t) {
  var o = n$1(e);

  if (r$1) {
    var i = r$1(e);
    t && (i = f$1(i).call(i, function (t) {
      return a$1(e, t).enumerable;
    })), o.push.apply(o, i);
  }

  return o;
}

function gd(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n,
        r,
        s = null != arguments[t] ? arguments[t] : {};
    t % 2 ? p$1(n = vd(Object(s), !0)).call(n, function (t) {
      _defineProperty(e, t, s[t]);
    }) : o$1 ? i(e, o$1(s)) : p$1(r = vd(Object(s))).call(r, function (t) {
      l$1(e, t, a$1(s, t));
    });
  }

  return e;
}

function bd(e) {
  var t = function () {
    if ("undefined" == typeof Reflect || !S) return !1;
    if (S.sham) return !1;
    if ("function" == typeof Proxy) return !0;

    try {
      return Boolean.prototype.valueOf.call(S(Boolean, [], function () {})), !0;
    } catch (e) {
      return !1;
    }
  }();

  return function () {
    var n,
        r = _getPrototypeOf(e);

    if (t) {
      var a = _getPrototypeOf(this).constructor;
      n = S(r, arguments, a);
    } else n = r.apply(this, arguments);

    return _possibleConstructorReturn(this, n);
  };
}

_defineProperty(md, "type", "facilypay_6x");

var _d = function (e) {
  _inherits(n, ro);
  var t = bd(n);

  function n() {
    return _classCallCheck(this, n), t.apply(this, arguments);
  }

  return _createClass(n, [{
    key: "formatProps",
    value: function (e) {
      return gd(gd({}, _get(_getPrototypeOf(n.prototype), "formatProps", this).call(this, e)), {}, {
        allowedCountries: e.countryCode ? [e.countryCode] : ad
      });
    }
  }]), n;
}();

function Cd(e, t) {
  var o = n$1(e);

  if (r$1) {
    var i = r$1(e);
    t && (i = f$1(i).call(i, function (t) {
      return a$1(e, t).enumerable;
    })), o.push.apply(o, i);
  }

  return o;
}

function kd(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n,
        r,
        s = null != arguments[t] ? arguments[t] : {};
    t % 2 ? p$1(n = Cd(Object(s), !0)).call(n, function (t) {
      _defineProperty(e, t, s[t]);
    }) : o$1 ? i(e, o$1(s)) : p$1(r = Cd(Object(s))).call(r, function (t) {
      l$1(e, t, a$1(s, t));
    });
  }

  return e;
}

function Nd(e) {
  var t = function () {
    if ("undefined" == typeof Reflect || !S) return !1;
    if (S.sham) return !1;
    if ("function" == typeof Proxy) return !0;

    try {
      return Boolean.prototype.valueOf.call(S(Boolean, [], function () {})), !0;
    } catch (e) {
      return !1;
    }
  }();

  return function () {
    var n,
        r = _getPrototypeOf(e);

    if (t) {
      var a = _getPrototypeOf(this).constructor;
      n = S(r, arguments, a);
    } else n = r.apply(this, arguments);

    return _possibleConstructorReturn(this, n);
  };
}

_defineProperty(_d, "type", "facilypay_10x");

var wd = function (e) {
  _inherits(n, ro);
  var t = Nd(n);

  function n() {
    return _classCallCheck(this, n), t.apply(this, arguments);
  }

  return _createClass(n, [{
    key: "formatProps",
    value: function (e) {
      return kd(kd({}, _get(_getPrototypeOf(n.prototype), "formatProps", this).call(this, e)), {}, {
        allowedCountries: e.countryCode ? [e.countryCode] : ad
      });
    }
  }]), n;
}();

function Sd(e) {
  var t = function () {
    if ("undefined" == typeof Reflect || !S) return !1;
    if (S.sham) return !1;
    if ("function" == typeof Proxy) return !0;

    try {
      return Boolean.prototype.valueOf.call(S(Boolean, [], function () {})), !0;
    } catch (e) {
      return !1;
    }
  }();

  return function () {
    var n,
        r = _getPrototypeOf(e);

    if (t) {
      var a = _getPrototypeOf(this).constructor;
      n = S(r, arguments, a);
    } else n = r.apply(this, arguments);

    return _possibleConstructorReturn(this, n);
  };
}

_defineProperty(wd, "type", "facilypay_12x");

var xd = function (e) {
  _inherits(n, _i);
  var t = Sd(n);

  function n() {
    return _classCallCheck(this, n), t.apply(this, arguments);
  }

  return _createClass(n);
}();

_defineProperty(xd, "type", "ideal");
var Pd = ["black", "white"],
    Fd = ["en_US", "en_AU", "en_GB", "fr_CA", "es_ES", "it_IT", "fr_FR", "de_DE", "pt_BR", "zh_CN", "da_DK", "zh_HK", "id_ID", "he_IL", "ja_JP", "ko_KR", "nl_NL", "no_NO", "pl_PL", "pt_PT", "ru_RU", "sv_SE", "th_TH", "zh_TW"];

function Ad(e, t) {
  var o = n$1(e);

  if (r$1) {
    var i = r$1(e);
    t && (i = f$1(i).call(i, function (t) {
      return a$1(e, t).enumerable;
    })), o.push.apply(o, i);
  }

  return o;
}

function Bd(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n,
        r,
        s = null != arguments[t] ? arguments[t] : {};
    t % 2 ? p$1(n = Ad(Object(s), !0)).call(n, function (t) {
      _defineProperty(e, t, s[t]);
    }) : o$1 ? i(e, o$1(s)) : p$1(r = Ad(Object(s))).call(r, function (t) {
      l$1(e, t, a$1(s, t));
    });
  }

  return e;
}

var Ed = function (e) {
  var t,
      r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
  return "paypal" === e ? Bd({}, r) : k$1(t = n$1(r)).call(t, function (e, t) {
    var n = r[t];
    return ("color" !== t || h$1(Pd).call(Pd, n)) && (e[t] = n), e;
  }, {});
},
    Rd = function (e) {
  var t = e.amount,
      n = e.countryCode,
      r = e.debug,
      a = e.environment,
      o = void 0 === a ? "" : a,
      i = e.locale,
      l = e.configuration,
      s = e.commit,
      c = e.vault,
      u = function (e) {
    var t = e ? e.replace("-", "_") : null;
    return h$1(Fd).call(Fd, t) ? t : null;
  }(i),
      d = t ? t.currency : null,
      p = "test" === o.toLowerCase(),
      f = p ? "AVzsPoGmjcm99YG02kq0iWL3KP3JedbMQJO2QUnVUc-t7aUzjkBWte7relkAC5SPUL50ovLGKmxfA674" : "AU0Z-TP9t5_9196agaBN6ZD3UAwypdP1IX8ZYH3PcNNAQMXUTDQlChruXqQEhyI6-NKBKowN6ydkj477",
      y = l.merchantId,
      m = l.intent;

  return Bd(Bd(Bd(Bd(Bd(Bd(Bd({}, y && {
    "merchant-id": y
  }), u && {
    locale: u
  }), n && p && {
    "buyer-country": n
  }), r && p && {
    debug: r
  }), d && {
    currency: d
  }), m && {
    intent: m
  }), {}, {
    commit: s,
    vault: c,
    "client-id": f,
    "integration-date": "2020-02-01",
    "enable-funding": "paylater",
    components: "buttons,funding-eligibility"
  });
};

function Od(e, t) {
  var o = n$1(e);

  if (r$1) {
    var i = r$1(e);
    t && (i = f$1(i).call(i, function (t) {
      return a$1(e, t).enumerable;
    })), o.push.apply(o, i);
  }

  return o;
}

function Dd(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n,
        r,
        s = null != arguments[t] ? arguments[t] : {};
    t % 2 ? p$1(n = Od(Object(s), !0)).call(n, function (t) {
      _defineProperty(e, t, s[t]);
    }) : o$1 ? i(e, o$1(s)) : p$1(r = Od(Object(s))).call(r, function (t) {
      l$1(e, t, a$1(s, t));
    });
  }

  return e;
}

function Md(e) {
  var t,
      n = e.onInit,
      r = e.onComplete,
      a = e.onClick,
      o = e.onCancel,
      i = e.onError,
      l = e.onShippingChange,
      s = e.onSubmit,
      c = e.paypalRef,
      u = e.style,
      d = "tokenize" === (null === (t = e.configuration) || void 0 === t ? void 0 : t.intent),
      p = vt(null),
      f = vt(null),
      h$1 = vt(null),
      y = function (e, t) {
    var p = c.Buttons(Dd(Dd(Dd({}, d && {
      createBillingAgreement: s
    }), !d && {
      createOrder: s,
      onShippingChange: l
    }), {}, {
      fundingSource: e,
      style: Ed(e, u),
      onInit: n,
      onClick: a,
      onCancel: o,
      onError: i,
      onApprove: r
    }));
    p.isEligible() && p.render(t.current);
  };

  return yt(function () {
    var t = c.FUNDING,
        n = t.PAYPAL,
        r = t.CREDIT,
        a = t.PAYLATER;
    y(n, p), e.blockPayPalCreditButton || y(r, f), e.blockPayPalPayLaterButton || y(a, h$1);
  }, []), h("div", {
    className: "adyen-checkout__paypal__buttons"
  }, h("div", {
    className: "adyen-checkout__paypal__button adyen-checkout__paypal__button--paypal",
    ref: p
  }), h("div", {
    className: "adyen-checkout__paypal__button adyen-checkout__paypal__button--credit",
    ref: f
  }), h("div", {
    className: "adyen-checkout__paypal__button adyen-checkout__paypal__button--pay-later",
    ref: h$1
  }));
}

function Td(e, t) {
  var o = n$1(e);

  if (r$1) {
    var i = r$1(e);
    t && (i = f$1(i).call(i, function (t) {
      return a$1(e, t).enumerable;
    })), o.push.apply(o, i);
  }

  return o;
}

function Id(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n,
        r,
        s = null != arguments[t] ? arguments[t] : {};
    t % 2 ? p$1(n = Td(Object(s), !0)).call(n, function (t) {
      _defineProperty(e, t, s[t]);
    }) : o$1 ? i(e, o$1(s)) : p$1(r = Td(Object(s))).call(r, function (t) {
      l$1(e, t, a$1(s, t));
    });
  }

  return e;
}

function jd(e) {
  var t = Pt().i18n,
      r = ft("pending"),
      a = _slicedToArray(r, 2),
      o = a[0],
      i = a[1];
  this.setStatus = i;

  var l = function () {
    i("ready");
  };

  return yt(function () {
    var t = function (e) {
      var t,
          r,
          a = Rd(e),
          o = decodeURIComponent(K(t = n$1(a)).call(t, function (e) {
        var t;
        return y$1(t = "".concat(e, "=")).call(t, a[e]);
      }).join("&"));
      return y$1(r = "".concat("https://www.paypal.com/sdk/js", "?")).call(r, o);
    }(e),
        r = Id({}, e.cspNonce && {
      nonce: e.cspNonce
    }),
        a = Id({}, e.cspNonce && {
      cspNonce: e.cspNonce
    }),
        o = new Ro(t, "body", r, a);

    return o.load().then(l), function () {
      o.remove();
    };
  }, []), h("div", {
    className: "adyen-checkout__paypal"
  }, "pending" === o ? h("div", {
    className: "adyen-checkout__paypal__status adyen-checkout__paypal__status--pending"
  }, h(at, null)) : "processing" === o ? h("div", {
    className: "adyen-checkout__paypal__status adyen-checkout__paypal__status--processing"
  }, h(at, {
    size: "medium",
    inline: !0
  }), " ", t.get("paypal.processingPayment")) : h(Md, _extends({}, e, {
    onComplete: function (t) {
      i("processing"), e.onComplete(t);
    },
    paypalRef: window.paypal
  })));
}

var Vd = "No token was provided",
    Ld = "Calling submit() is not supported for this payment method",
    Ud = "The instance of the PayPal component being used is not the same which started the payment";

function qd(e, t) {
  var o = n$1(e);

  if (r$1) {
    var i = r$1(e);
    t && (i = f$1(i).call(i, function (t) {
      return a$1(e, t).enumerable;
    })), o.push.apply(o, i);
  }

  return o;
}

function Kd(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n,
        r,
        s = null != arguments[t] ? arguments[t] : {};
    t % 2 ? p$1(n = qd(Object(s), !0)).call(n, function (t) {
      _defineProperty(e, t, s[t]);
    }) : o$1 ? i(e, o$1(s)) : p$1(r = qd(Object(s))).call(r, function (t) {
      l$1(e, t, a$1(s, t));
    });
  }

  return e;
}

function Hd(e) {
  var t = function () {
    if ("undefined" == typeof Reflect || !S) return !1;
    if (S.sham) return !1;
    if ("function" == typeof Proxy) return !0;

    try {
      return Boolean.prototype.valueOf.call(S(Boolean, [], function () {})), !0;
    } catch (e) {
      return !1;
    }
  }();

  return function () {
    var n,
        r = _getPrototypeOf(e);

    if (t) {
      var a = _getPrototypeOf(this).constructor;
      n = S(r, arguments, a);
    } else n = r.apply(this, arguments);

    return _possibleConstructorReturn(this, n);
  };
}

var zd = function (e) {
  _inherits(n, Lt);
  var t = Hd(n);

  function n(e) {
    var r, a, o, i, l, s, u;
    return _classCallCheck(this, n), u = t.call(this, e), _defineProperty(_assertThisInitialized(u), "paymentData", null), _defineProperty(_assertThisInitialized(u), "resolve", null), _defineProperty(_assertThisInitialized(u), "reject", null), u.handleAction = m$1(r = u.handleAction).call(r, _assertThisInitialized(u)), u.updateWithAction = m$1(a = u.updateWithAction).call(a, _assertThisInitialized(u)), u.handleCancel = m$1(o = u.handleCancel).call(o, _assertThisInitialized(u)), u.handleComplete = m$1(i = u.handleComplete).call(i, _assertThisInitialized(u)), u.handleSubmit = m$1(l = u.handleSubmit).call(l, _assertThisInitialized(u)), u.submit = m$1(s = u.submit).call(s, _assertThisInitialized(u)), u;
  }

  return _createClass(n, [{
    key: "formatProps",
    value: function (e) {
      var t,
          n = 0 === (null === (t = e.amount) || void 0 === t ? void 0 : t.value);
      return Kd(Kd({}, e), {}, {
        vault: n || e.vault,
        configuration: Kd(Kd({}, e.configuration), {}, {
          intent: n ? "tokenize" : e.configuration.intent
        })
      });
    }
  }, {
    key: "formatData",
    value: function () {
      return {
        paymentMethod: {
          type: n.type,
          subtype: n.subtype
        }
      };
    }
  }, {
    key: "handleAction",
    value: function (e) {
      return this.updateWithAction(e);
    }
  }, {
    key: "updateWithAction",
    value: function (e) {
      if (e.paymentMethodType !== this.data.paymentMethod.type) throw new Error("Invalid Action");
      return e.paymentData && (this.paymentData = e.paymentData), e.sdkData && e.sdkData.token ? this.handleResolve(e.sdkData.token) : this.handleReject(Vd), null;
    }
  }, {
    key: "isValid",
    get: function () {
      return !0;
    }
  }, {
    key: "handleCancel",
    value: function () {
      this.handleError(new Mt("CANCEL"));
    }
  }, {
    key: "handleComplete",
    value: function (e) {
      var t = {
        data: {
          details: e,
          paymentData: this.paymentData
        }
      };
      this.handleAdditionalDetails(t);
    }
  }, {
    key: "handleResolve",
    value: function (e) {
      if (!this.resolve) return this.handleError(new Mt("ERROR", Ud));
      this.resolve(e);
    }
  }, {
    key: "handleReject",
    value: function (e) {
      if (!this.reject) return this.handleError(new Mt("ERROR", Ud));
      this.reject(new Error(e));
    }
  }, {
    key: "startPayment",
    value: function () {
      return v$1.reject(new Mt("ERROR", Ld));
    }
  }, {
    key: "handleSubmit",
    value: function () {
      var e = this;
      return _get(_getPrototypeOf(n.prototype), "submit", this).call(this), new v$1(function (t, n) {
        e.resolve = t, e.reject = n;
      });
    }
  }, {
    key: "submit",
    value: function () {
      this.handleError(new Mt("IMPLEMENTATION_ERROR", Ld));
    }
  }, {
    key: "render",
    value: function () {
      var e = this;
      return this.props.showPayButton ? h(Xa, {
        i18n: this.props.i18n,
        loadingContext: this.props.loadingContext
      }, h(jd, _extends({
        ref: function (t) {
          e.componentRef = t;
        }
      }, this.props, {
        onCancel: this.handleCancel,
        onChange: this.setState,
        onComplete: this.handleComplete,
        onError: function (t) {
          e.handleError(new Mt("ERROR", t.toString()));
        },
        onSubmit: this.handleSubmit
      }))) : null;
    }
  }]), n;
}();

function Wd(e, t) {
  var o = n$1(e);

  if (r$1) {
    var i = r$1(e);
    t && (i = f$1(i).call(i, function (t) {
      return a$1(e, t).enumerable;
    })), o.push.apply(o, i);
  }

  return o;
}

function Gd(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n,
        r,
        s = null != arguments[t] ? arguments[t] : {};
    t % 2 ? p$1(n = Wd(Object(s), !0)).call(n, function (t) {
      _defineProperty(e, t, s[t]);
    }) : o$1 ? i(e, o$1(s)) : p$1(r = Wd(Object(s))).call(r, function (t) {
      l$1(e, t, a$1(s, t));
    });
  }

  return e;
}

function Yd(e) {
  var t,
      n,
      r = Pt().i18n,
      a = ft("ready"),
      o = _slicedToArray(a, 2),
      i = o[0],
      l = o[1],
      s = !(null == e || null === (t = e.items) || void 0 === t || !t.length),
      c = cr({
    schema: y$1(n = []).call(n, _toConsumableArray(s ? ["phonePrefix"] : []), ["phoneNumber"]),
    defaultData: Gd({}, s ? {
      phonePrefix: e.selected
    } : {}),
    rules: {
      phoneNumber: {
        modes: ["blur"],
        errorMessage: "error.va.gen.01",
        validate: function (e) {
          return (null == e ? void 0 : e.length) > 6;
        }
      }
    }
  }),
      u = c.handleChangeFor,
      d = c.triggerValidation,
      p = c.data,
      f = c.valid,
      h$1 = c.errors,
      m = c.isValid;
  return yt(function () {
    e.onChange({
      data: p,
      valid: f,
      errors: h$1,
      isValid: m
    });
  }, [p, f, h$1, m]), this.showValidation = d, this.setStatus = l, h("div", {
    className: "adyen-checkout__phone-input"
  }, h(yn, {
    errorMessage: !!h$1.phoneNumber,
    label: r.get(e.phoneLabel),
    className: H({
      "adyen-checkout__input--phone-number": !0
    }),
    inputWrapperModifiers: ["phoneInput"]
  }, h("div", {
    className: "adyen-checkout__input-wrapper"
  }, h("div", {
    className: H({
      "adyen-checkout__input": !0,
      "adyen-checkout__input--invalid": !!h$1.phoneNumber
    })
  }, !!s && h(yn, {
    inputWrapperModifiers: ["phoneInput"]
  }, Zn("select", {
    className: "adyen-checkout__dropdown--small adyen-checkout__countryFlag",
    filterable: !1,
    items: e.items,
    name: e.prefixName,
    onChange: u("phonePrefix"),
    placeholder: r.get("infix"),
    selected: p.phonePrefix
  }), h("div", {
    className: "adyen-checkout__phoneNumber"
  }, h("div", null, p.phonePrefix), h("input", {
    type: "tel",
    name: e.phoneName,
    value: p.phoneNumber,
    onInput: u("phoneNumber", "input"),
    onBlur: u("phoneNumber", "blur"),
    placeholder: "123 456 789",
    className: "adyen-checkout__input adyen-checkout__input--phoneNumber",
    autoCorrect: "off"
  })))))), this.props.showPayButton && this.props.payButton({
    status: i
  }));
}

function $d(e, t) {
  var o = n$1(e);

  if (r$1) {
    var i = r$1(e);
    t && (i = f$1(i).call(i, function (t) {
      return a$1(e, t).enumerable;
    })), o.push.apply(o, i);
  }

  return o;
}

function Zd(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n,
        r,
        s = null != arguments[t] ? arguments[t] : {};
    t % 2 ? p$1(n = $d(Object(s), !0)).call(n, function (t) {
      _defineProperty(e, t, s[t]);
    }) : o$1 ? i(e, o$1(s)) : p$1(r = $d(Object(s))).call(r, function (t) {
      l$1(e, t, a$1(s, t));
    });
  }

  return e;
}

_defineProperty(zd, "type", "paypal"), _defineProperty(zd, "subtype", "sdk"), _defineProperty(zd, "defaultProps", {
  environment: "TEST",
  status: "loading",
  showPayButton: !0,
  merchantId: "",
  cspNonce: null,
  intent: null,
  commit: !0,
  vault: !1,
  style: {
    height: 48
  },
  blockPayPalCreditButton: !1,
  blockPayPalPayLaterButton: !1,
  configuration: {
    merchantId: "",
    intent: null
  },
  onInit: function () {},
  onClick: function () {},
  onCancel: function () {},
  onError: function () {},
  onShippingChange: function () {}
}), Yd.defaultProps = {
  phoneLabel: "telephoneNumber"
};

var Jd,
    Qd = function (e, t) {
  if (e && t) {
    var n = g$1(e).call(e, function (e) {
      return e.code === t;
    });
    return !!n && n.id;
  }

  return !1;
},
    Xd = [{
  id: "+7",
  name: "Russian Federation",
  code: "RU"
}, {
  id: "+9955",
  name: "Georgia",
  code: "GE"
}, {
  id: "+507",
  name: "Panama",
  code: "PA"
}, {
  id: "+44",
  name: "United Kingdom",
  code: "GB"
}, {
  id: "+992",
  name: "Tajikistan",
  code: "TJ"
}, {
  id: "+370",
  name: "Lithuania",
  code: "LT"
}, {
  id: "+972",
  name: "Israel",
  code: "IL"
}, {
  id: "+996",
  name: "Kyrgyzstan",
  code: "KG"
}, {
  id: "+380",
  name: "Ukraine",
  code: "UA"
}, {
  id: "+84",
  name: "Viet Nam",
  code: "VN"
}, {
  id: "+90",
  name: "Turkey",
  code: "TR"
}, {
  id: "+994",
  name: "Azerbaijan",
  code: "AZ"
}, {
  id: "+374",
  name: "Armenia",
  code: "AM"
}, {
  id: "+371",
  name: "Latvia",
  code: "LV"
}, {
  id: "+91",
  name: "India",
  code: "IN"
}, {
  id: "+66",
  name: "Thailand",
  code: "TH"
}, {
  id: "+373",
  name: "Moldova",
  code: "MD"
}, {
  id: "+1",
  name: "United States",
  code: "US"
}, {
  id: "+81",
  name: "Japan",
  code: "JP"
}, {
  id: "+998",
  name: "Uzbekistan",
  code: "UZ"
}, {
  id: "+77",
  name: "Kazakhstan",
  code: "KZ"
}, {
  id: "+375",
  name: "Belarus",
  code: "BY"
}, {
  id: "+372",
  name: "Estonia",
  code: "EE"
}, {
  id: "+40",
  name: "Romania",
  code: "RO"
}, {
  id: "+82",
  name: "Korea",
  code: "KR"
}];

function ep(e, t) {
  var o = n$1(e);

  if (r$1) {
    var i = r$1(e);
    t && (i = f$1(i).call(i, function (t) {
      return a$1(e, t).enumerable;
    })), o.push.apply(o, i);
  }

  return o;
}

function tp(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n,
        r,
        s = null != arguments[t] ? arguments[t] : {};
    t % 2 ? p$1(n = ep(Object(s), !0)).call(n, function (t) {
      _defineProperty(e, t, s[t]);
    }) : o$1 ? i(e, o$1(s)) : p$1(r = ep(Object(s))).call(r, function (t) {
      l$1(e, t, a$1(s, t));
    });
  }

  return e;
}

function np(e) {
  var t = function () {
    if ("undefined" == typeof Reflect || !S) return !1;
    if (S.sham) return !1;
    if ("function" == typeof Proxy) return !0;

    try {
      return Boolean.prototype.valueOf.call(S(Boolean, [], function () {})), !0;
    } catch (e) {
      return !1;
    }
  }();

  return function () {
    var n,
        r = _getPrototypeOf(e);

    if (t) {
      var a = _getPrototypeOf(this).constructor;
      n = S(r, arguments, a);
    } else n = r.apply(this, arguments);

    return _possibleConstructorReturn(this, n);
  };
}

var rp = function (e) {
  _inherits(n, Lt);
  var t = np(n);

  function n() {
    return _classCallCheck(this, n), t.apply(this, arguments);
  }

  return _createClass(n, [{
    key: "isValid",
    get: function () {
      return !!this.state.isValid;
    }
  }, {
    key: "formatProps",
    value: function (e) {
      return tp(tp({
        onValid: function () {}
      }, e), {}, {
        selected: Qd(e.items, e.countryCode)
      });
    }
  }, {
    key: "formatData",
    value: function () {
      return {
        paymentMethod: {
          type: n.type,
          "qiwiwallet.telephoneNumberPrefix": this.state.data ? this.state.data.phonePrefix : "",
          "qiwiwallet.telephoneNumber": this.state.data ? this.state.data.phoneNumber : ""
        }
      };
    }
  }, {
    key: "render",
    value: function () {
      var e = this;
      return h(Xa, {
        i18n: this.props.i18n,
        loadingContext: this.props.loadingContext
      }, h(Yd, _extends({
        ref: function (t) {
          e.componentRef = t;
        }
      }, this.props, this.state, {
        phoneLabel: "mobileNumber",
        onChange: this.setState,
        onSubmit: this.submit,
        payButton: this.payButton
      })));
    }
  }]), n;
}();

function ap(e, t) {
  var o = n$1(e);

  if (r$1) {
    var i = r$1(e);
    t && (i = f$1(i).call(i, function (t) {
      return a$1(e, t).enumerable;
    })), o.push.apply(o, i);
  }

  return o;
}

function op(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n,
        r,
        s = null != arguments[t] ? arguments[t] : {};
    t % 2 ? p$1(n = ap(Object(s), !0)).call(n, function (t) {
      _defineProperty(e, t, s[t]);
    }) : o$1 ? i(e, o$1(s)) : p$1(r = ap(Object(s))).call(r, function (t) {
      l$1(e, t, a$1(s, t));
    });
  }

  return e;
}

_defineProperty(rp, "type", "qiwiwallet"), _defineProperty(rp, "defaultProps", {
  items: f$1(Jd = K(Xd).call(Xd, function (e) {
    var t, n;
    if (!e) throw new Error("No item passed");
    if (!e.code || !e.id) return !1;
    var r = e.code.toUpperCase().replace(/./g, function (e) {
      return _e ? _e(e.charCodeAt(0) + 127397) : "";
    });
    return Zd(Zd({}, e), {}, {
      name: y$1(t = y$1(n = "".concat(r, " ")).call(n, e.name, " (")).call(t, e.id, ")"),
      selectedOptionName: r
    });
  })).call(Jd, function (e) {
    return !1 !== e;
  }),
  countryCode: Xd[0].code,
  prefixName: "qiwiwallet.telephoneNumberPrefix",
  phoneName: "qiwiwallet.telephoneNumber"
});

function ip(e) {
  var t = this,
      n = vt(null),
      r = ft({}),
      a = _slicedToArray(r, 2),
      o = a[0],
      i = a[1],
      l = ft({}),
      s = _slicedToArray(l, 2),
      c = s[0],
      u = s[1],
      d = ft({}),
      p = _slicedToArray(d, 2),
      f = p[0],
      h$1 = p[1],
      y = ft(!1),
      m = _slicedToArray(y, 2),
      v = m[0],
      g = m[1],
      _ = ft(null),
      C = _slicedToArray(_, 2),
      k = C[0],
      N = C[1],
      w = ft([]),
      S = _slicedToArray(w, 2),
      P = S[0],
      F = S[1],
      A = ft(""),
      B = _slicedToArray(A, 2),
      E = B[0],
      O = B[1],
      D = gt(function () {
    return Ys(e, {
      sfp: n
    }, {
      dualBrandSelectElements: P,
      setDualBrandSelectElements: F,
      setSelectedBrandValue: O,
      issuingCountryCode: k,
      setIssuingCountryCode: N
    });
  }, [P, k]);

  return this.processBinLookupResponse = function (e, t) {
    D.processBinLookup(e, t);
  }, this.dualBrandingChangeHandler = D.handleDualBrandSelection, yt(function () {
    return t.setFocusOn = n.current.setFocusOn, t.updateStyles = n.current.updateStyles, t.showValidation = n.current.showValidation, t.handleUnsupportedCard = n.current.handleUnsupportedCard, function () {
      n.current.destroy();
    };
  }, []), yt(function () {
    var t = n.current.mapErrorsToValidationRuleResult();
    e.onChange({
      data: f,
      valid: c,
      errors: op(op({}, o), t),
      isValid: v,
      selectedBrandValue: E
    });
  }, [f, c, o, E]), h(Is, _extends({
    ref: n
  }, lp(e), {
    onChange: function (e) {
      h$1(op(op({}, f), e.data)), i(op(op({}, o), e.errors)), u(op(op({}, c), e.valid)), g(e.isSfpValid);
    },
    render: function () {
      return null;
    }
  }));
}

ip.defaultProps = {
  onChange: function () {},
  onError: function () {}
};

var lp = function (e) {
  return {
    allowedDOMAccess: e.allowedDOMAccess,
    autoFocus: e.autoFocus,
    brands: e.brands,
    brandsConfiguration: e.brandsConfiguration,
    clientKey: e.clientKey,
    i18n: e.i18n,
    implementationType: e.implementationType,
    keypadFix: e.keypadFix,
    legacyInputMode: e.legacyInputMode,
    loadingContext: e.loadingContext,
    minimumExpiryDate: e.minimumExpiryDate,
    onAdditionalSFConfig: e.onAdditionalSFConfig,
    onAdditionalSFRemoved: e.onAdditionalSFRemoved,
    onAllValid: e.onAllValid,
    onAutoComplete: e.onAutoComplete,
    onBinValue: e.onBinValue,
    onBrand: e.onBrand,
    onConfigSuccess: e.onConfigSuccess,
    onError: e.onError,
    onFieldValid: e.onFieldValid,
    onFocus: e.onFocus,
    onLoad: e.onLoad,
    rootNode: e.rootNode,
    showWarnings: e.showWarnings,
    styles: e.styles,
    trimTrailingSeparator: e.trimTrailingSeparator,
    type: e.type
  };
};

function sp(e, t) {
  var o = n$1(e);

  if (r$1) {
    var i = r$1(e);
    t && (i = f$1(i).call(i, function (t) {
      return a$1(e, t).enumerable;
    })), o.push.apply(o, i);
  }

  return o;
}

function cp(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n,
        r,
        s = null != arguments[t] ? arguments[t] : {};
    t % 2 ? p$1(n = sp(Object(s), !0)).call(n, function (t) {
      _defineProperty(e, t, s[t]);
    }) : o$1 ? i(e, o$1(s)) : p$1(r = sp(Object(s))).call(r, function (t) {
      l$1(e, t, a$1(s, t));
    });
  }

  return e;
}

function up(e) {
  var t = function () {
    if ("undefined" == typeof Reflect || !S) return !1;
    if (S.sham) return !1;
    if ("function" == typeof Proxy) return !0;

    try {
      return Boolean.prototype.valueOf.call(S(Boolean, [], function () {})), !0;
    } catch (e) {
      return !1;
    }
  }();

  return function () {
    var n,
        r = _getPrototypeOf(e);

    if (t) {
      var a = _getPrototypeOf(this).constructor;
      n = S(r, arguments, a);
    } else n = r.apply(this, arguments);

    return _possibleConstructorReturn(this, n);
  };
}

var dp = function (e) {
  _inherits(n, Lt);
  var t = up(n);

  function n() {
    var e, r;
    _classCallCheck(this, n);

    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i];

    return r = t.call.apply(t, y$1(e = [this]).call(e, o)), _defineProperty(_assertThisInitialized(r), "onBinValue", Gc(_assertThisInitialized(r))), r;
  }

  return _createClass(n, [{
    key: "formatProps",
    value: function (e) {
      return cp(cp({}, e), {}, {
        type: "scheme" === e.type || "securedfields" === e.type ? "card" : e.type
      });
    }
  }, {
    key: "formatData",
    value: function () {
      var e = this.state.selectedBrandValue || this.props.brand;
      return {
        paymentMethod: cp(cp({
          type: n.type
        }, this.state.data), e && {
          brand: e
        }),
        browserInfo: this.browserInfo
      };
    }
  }, {
    key: "updateStyles",
    value: function (e) {
      var t;
      return null !== (t = this.componentRef) && void 0 !== t && t.updateStyles && this.componentRef.updateStyles(e), this;
    }
  }, {
    key: "setFocusOn",
    value: function (e) {
      var t;
      return null !== (t = this.componentRef) && void 0 !== t && t.setFocusOn && this.componentRef.setFocusOn(e), this;
    }
  }, {
    key: "processBinLookupResponse",
    value: function (e) {
      var t;
      return null !== (t = this.componentRef) && void 0 !== t && t.processBinLookupResponse && this.componentRef.processBinLookupResponse(e), this;
    }
  }, {
    key: "dualBrandingChangeHandler",
    value: function (e) {
      var t;
      return null !== (t = this.componentRef) && void 0 !== t && t.dualBrandingChangeHandler && this.componentRef.dualBrandingChangeHandler(e), this;
    }
  }, {
    key: "handleUnsupportedCard",
    value: function (e) {
      var t;
      return null !== (t = this.componentRef) && void 0 !== t && t.handleUnsupportedCard && this.componentRef.handleUnsupportedCard(e), this;
    }
  }, {
    key: "onBinLookup",
    value: function (e) {
      var t,
          n = this,
          r = cp({}, e);
      (r.rootNode = this._node, r.isReset) || (r.supportedBrandsRaw = null === (t = e.supportedBrandsRaw) || void 0 === t ? void 0 : K(t).call(t, function (e) {
        var t, r;
        return e.brandImageUrl = null !== (t = null === (r = n.props.brandsConfiguration[e.brand]) || void 0 === r ? void 0 : r.icon) && void 0 !== t ? t : gl(e.brand, n.props.loadingContext), e;
      }));
      this.props.onBinLookup(r);
    }
  }, {
    key: "isValid",
    get: function () {
      return !!this.state.isValid;
    }
  }, {
    key: "icon",
    get: function () {
      return rt({
        loadingContext: this.props.loadingContext
      })(this.props.type);
    }
  }, {
    key: "browserInfo",
    get: function () {
      return mo();
    }
  }, {
    key: "render",
    value: function () {
      var e = this;
      return h(Xa, {
        i18n: this.props.i18n,
        loadingContext: this.props.loadingContext
      }, h(ip, _extends({
        ref: function (t) {
          e.componentRef = t;
        }
      }, this.props, this.state, {
        rootNode: this._node,
        onChange: this.setState,
        onBinValue: this.onBinValue,
        implementationType: "custom"
      })));
    }
  }]), n;
}();

function pp(e, t) {
  var o = n$1(e);

  if (r$1) {
    var i = r$1(e);
    t && (i = f$1(i).call(i, function (t) {
      return a$1(e, t).enumerable;
    })), o.push.apply(o, i);
  }

  return o;
}

function fp(e) {
  var t = function () {
    if ("undefined" == typeof Reflect || !S) return !1;
    if (S.sham) return !1;
    if ("function" == typeof Proxy) return !0;

    try {
      return Boolean.prototype.valueOf.call(S(Boolean, [], function () {})), !0;
    } catch (e) {
      return !1;
    }
  }();

  return function () {
    var n,
        r = _getPrototypeOf(e);

    if (t) {
      var a = _getPrototypeOf(this).constructor;
      n = S(r, arguments, a);
    } else n = r.apply(this, arguments);

    return _possibleConstructorReturn(this, n);
  };
}

_defineProperty(dp, "type", "scheme"), _defineProperty(dp, "analyticsType", "custom-scheme"), _defineProperty(dp, "defaultProps", {
  onBinLookup: function () {},
  brandsConfiguration: {}
});

var hp = function (e) {
  _inherits(n, Lt);
  var t = fp(n);

  function n() {
    return _classCallCheck(this, n), t.apply(this, arguments);
  }

  return _createClass(n, [{
    key: "formatProps",
    value: function (e) {
      return function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n,
              r,
              s = null != arguments[t] ? arguments[t] : {};
          t % 2 ? p$1(n = pp(Object(s), !0)).call(n, function (t) {
            _defineProperty(e, t, s[t]);
          }) : o$1 ? i(e, o$1(s)) : p$1(r = pp(Object(s))).call(r, function (t) {
            l$1(e, t, a$1(s, t));
          });
        }

        return e;
      }({
        holderName: !0
      }, e);
    }
  }, {
    key: "formatData",
    value: function () {
      return {
        paymentMethod: {
          type: n.type,
          iban: this.state.data.ibanNumber,
          ownerName: this.state.data.ownerName
        }
      };
    }
  }, {
    key: "isValid",
    get: function () {
      return !!this.state.isValid;
    }
  }, {
    key: "render",
    value: function () {
      var e = this;
      return h(Xa, _extends({}, this.props, {
        loadingContext: this.props.loadingContext
      }), h(Ya, _extends({
        ref: function (t) {
          e.componentRef = t;
        }
      }, this.props, {
        onChange: this.setState,
        onSubmit: this.submit,
        payButton: this.payButton
      })));
    }
  }]), n;
}();

function yp(e) {
  var t = function () {
    if ("undefined" == typeof Reflect || !S) return !1;
    if (S.sham) return !1;
    if ("function" == typeof Proxy) return !0;

    try {
      return Boolean.prototype.valueOf.call(S(Boolean, [], function () {})), !0;
    } catch (e) {
      return !1;
    }
  }();

  return function () {
    var n,
        r = _getPrototypeOf(e);

    if (t) {
      var a = _getPrototypeOf(this).constructor;
      n = S(r, arguments, a);
    } else n = r.apply(this, arguments);

    return _possibleConstructorReturn(this, n);
  };
}

_defineProperty(hp, "type", "sepadirectdebit");

var mp = function (e) {
  _inherits(n, d);
  var t = yp(n);

  function n() {
    var e, r;
    _classCallCheck(this, n);

    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i];

    return r = t.call.apply(t, y$1(e = [this]).call(e, o)), _defineProperty(_assertThisInitialized(r), "formEl", void 0), r;
  }

  return _createClass(n, [{
    key: "componentDidMount",
    value: function () {
      this.formEl.submit();
    }
  }, {
    key: "render",
    value: function (e) {
      var t = this,
          n = e.name,
          r = e.action,
          a = e.target,
          o = e.inputName,
          i = e.inputValue;
      return h("form", {
        ref: function (e) {
          t.formEl = e;
        },
        method: "POST",
        className: H(["adyen-checkout__threeds2__form", "adyen-checkout__threeds2__form--".concat(n)]),
        name: n,
        action: r,
        target: a,
        style: {
          display: "none"
        }
      }, h("input", {
        name: o,
        value: i
      }));
    }
  }]), n;
}(),
    vp = {
  result: {
    transStatus: "U"
  },
  type: "challengeResult"
},
    gp = {
  result: {
    transStatus: "U"
  },
  type: "challengeResult",
  errorCode: "timeout"
},
    bp = {
  result: {
    threeDSCompInd: "N"
  },
  type: "fingerPrintResult"
},
    _p = {
  result: {
    threeDSCompInd: "N"
  },
  type: "fingerPrintResult",
  errorCode: "timeout"
},
    Cp = "unknownError",
    kp = {
  timeout: "ThreeDS2 timed out",
  wrongOrigin: "Result came in the right format but not from the expected origin",
  HTMLElementError: "No proper HTML element was passed",
  wrongDataType: "Result data was not of the expected type",
  missingProperty: "Result data did not contain the expected properties",
  unknownError: "An unknown error occurred"
},
    Np = {
  "01": ["250px", "400px"],
  "02": ["390px", "400px"],
  "03": ["500px", "600px"],
  "04": ["600px", "400px"],
  "05": ["100%", "100%"]
},
    wp = function (e) {
  var t = tn.decode(e);

  try {
    return t && JSON.parse(t);
  } catch (e) {
    throw new Error("Could not decode token");
  }
},
    Sp = function (e) {
  if (!e || !n$1(e).length) throw new Error("No (populated) data object to encode");
  return tn.encode(W(e));
},
    xp = function (e) {
  var t = 1 === e.length ? "0".concat(e) : e;
  return Object.prototype.hasOwnProperty.call(Np, t) ? t : "02";
},
    Pp = function (e, t, n) {
  var r;
  return {
    data: (r = {}, _defineProperty(r, e, Sp({
      threeDSCompInd: t.threeDSCompInd
    })), _defineProperty(r, "paymentData", n), r)
  };
},
    Fp = function (e, t, n) {
  return {
    data: {
      details: {
        "threeds2.fingerprint": Sp(t)
      },
      paymentData: n
    }
  };
},
    Ap = function (e, t, n) {
  return {
    data: {
      details: _defineProperty({}, e, Sp({
        transStatus: t,
        authorisationToken: n
      }))
    }
  };
},
    Bp = function (e, t, n) {
  return {
    data: {
      details: {
        "threeds2.challengeResult": Sp({
          transStatus: t
        })
      },
      paymentData: n
    }
  };
},
    Ep = function (e, t) {
  return {
    errorCode: e,
    message: kp[e] || t || kp[Cp]
  };
},
    Rp = function (e) {
  var t = window.btoa(e).split("=")[0];
  return t = (t = t.replace(/\+/g, "-")).replace(/\//g, "_");
},
    Op = ["elementRef"],
    Dp = ["createFromAction", "onAdditionalDetails"];

function Mp(e) {
  var t = function () {
    if ("undefined" == typeof Reflect || !S) return !1;
    if (S.sham) return !1;
    if ("function" == typeof Proxy) return !0;

    try {
      return Boolean.prototype.valueOf.call(S(Boolean, [], function () {})), !0;
    } catch (e) {
      return !1;
    }
  }();

  return function () {
    var n,
        r = _getPrototypeOf(e);

    if (t) {
      var a = _getPrototypeOf(this).constructor;
      n = S(r, arguments, a);
    } else n = r.apply(this, arguments);

    return _possibleConstructorReturn(this, n);
  };
}

var Tp = function (e) {
  _inherits(n, d);
  var t = Mp(n);

  function n(e) {
    var r;
    _classCallCheck(this, n), r = t.call(this, e), _defineProperty(_assertThisInitialized(r), "processMessageHandler", void 0), _defineProperty(_assertThisInitialized(r), "challengePromise", void 0), _defineProperty(_assertThisInitialized(r), "iframeCallback", function () {
      r.setState({
        status: "iframeLoaded"
      });
    });
    var a = W(r.props.cReqData),
        o = Rp(a);
    return r.state = {
      base64URLencodedData: o
    }, r;
  }

  return _createClass(n, [{
    key: "get3DS2ChallengePromise",
    value: function () {
      var e = this;
      return new v$1(function (t, n) {
        e.processMessageHandler = $t(e.props.postMessageDomain, t, n, vp, "challengeResult"), window.addEventListener("message", e.processMessageHandler);
      });
    }
  }, {
    key: "componentDidMount",
    value: function () {
      var e = this;
      this.challengePromise = Kt(6e5, this.get3DS2ChallengePromise(), gp), this.challengePromise.promise.then(function (t) {
        window.removeEventListener("message", e.processMessageHandler), e.props.onCompleteChallenge(t);
      }).catch(function (t) {
        window.removeEventListener("message", e.processMessageHandler), e.props.onErrorChallenge(t);
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function () {
      this.challengePromise && this.challengePromise.cancel(), window.removeEventListener("message", this.processMessageHandler);
    }
  }, {
    key: "render",
    value: function (e, t) {
      var n = e.acsURL,
          r = e.cReqData,
          a = e.iframeSizeArr,
          o = t.base64URLencodedData,
          i = t.status,
          l = _slicedToArray(a, 2),
          s = l[0],
          c = l[1];
      return h("div", {
        className: H(["adyen-checkout__threeds2__challenge", "adyen-checkout__threeds2__challenge--".concat(r.challengeWindowSize)])
      }, "iframeLoaded" !== i && h(at, null), h(qt, {
        name: "threeDSIframe",
        width: s,
        height: c,
        callback: this.iframeCallback
      }), h(mp, {
        name: "cReqForm",
        action: n,
        target: "threeDSIframe",
        inputName: "creq",
        inputValue: o
      }));
    }
  }]), n;
}();

function Ip(e) {
  var t = function () {
    if ("undefined" == typeof Reflect || !S) return !1;
    if (S.sham) return !1;
    if ("function" == typeof Proxy) return !0;

    try {
      return Boolean.prototype.valueOf.call(S(Boolean, [], function () {})), !0;
    } catch (e) {
      return !1;
    }
  }();

  return function () {
    var n,
        r = _getPrototypeOf(e);

    if (t) {
      var a = _getPrototypeOf(this).constructor;
      n = S(r, arguments, a);
    } else n = r.apply(this, arguments);

    return _possibleConstructorReturn(this, n);
  };
}

var jp = function (e) {
  _inherits(n, d);
  var t = Ip(n);

  function n(e) {
    var r, a, o, i, l, s, u, d, p, f, h, y;

    if (_classCallCheck(this, n), (r = t.call(this, e)).props.token) {
      var m = (a = {
        token: r.props.token,
        size: r.props.challengeWindowSize || r.props.size
      }, i = a.token, l = a.size, s = wp(i), u = s.acsTransID, d = s.acsURL, p = s.messageVersion, f = s.threeDSNotificationURL, h = s.threeDSServerTransID, y = Zt(f), {
        acsURL: d,
        cReqData: {
          acsTransID: u,
          messageVersion: p,
          threeDSServerTransID: h,
          messageType: "CReq",
          challengeWindowSize: xp(l)
        },
        iframeSizeArr: (o = l, Np[xp(o)]),
        postMessageDomain: y
      });
      r.state = {
        status: "retrievingChallengeToken",
        challengeData: m
      };
    } else r.state = {
      status: "error"
    }, r.props.onError("Missing challengeToken parameter");

    return r;
  }

  return _createClass(n, [{
    key: "setStatusComplete",
    value: function (e) {
      var t = this;
      this.setState({
        status: "complete"
      }, function () {
        var n = (t.props.useOriginalFlow ? Bp : Ap)(t.props.dataKey, e.transStatus, t.props.paymentData);
        t.props.onComplete(n);
      });
    }
  }, {
    key: "setStatusError",
    value: function (e) {
      var t = this;
      this.setState({
        status: "error"
      }, function () {
        t.props.onError(e);
      });
    }
  }, {
    key: "render",
    value: function (e, t) {
      var n = this,
          r = t.challengeData;
      return "retrievingChallengeToken" === this.state.status ? h(Tp, _extends({
        onCompleteChallenge: function (e) {
          if (Tt(e.result, "errorCode") && e.result.errorCode.length) {
            var t = Ep(e.result.errorCode, e.result.errorDescription);
            return n.props.onError(t), void n.setStatusComplete(e.result);
          }

          n.setStatusComplete(e.result);
        },
        onErrorChallenge: function (e) {
          if (Tt(e, "errorCode")) {
            var t = Ep(e.errorCode);
            return n.props.onError(t), void n.setStatusComplete(e.result);
          }

          n.setStatusError(e);
        }
      }, r)) : "error" === this.state.status ? h("div", {
        className: "adyen-checkout__threeds2-challenge-error"
      }, h(Mn, {
        className: "adyen-checkout__status__icon adyen-checkout__status__icon--error",
        src: rt({
          loadingContext: this.props.loadingContext,
          imageFolder: "components/"
        })("error"),
        alt: ""
      }), h("div", {
        className: "adyen-checkout__status__text"
      }, this.props.i18n.get("error.message.unknown"))) : null;
    }
  }]), n;
}();

function Vp(e) {
  var t = function () {
    if ("undefined" == typeof Reflect || !S) return !1;
    if (S.sham) return !1;
    if ("function" == typeof Proxy) return !0;

    try {
      return Boolean.prototype.valueOf.call(S(Boolean, [], function () {})), !0;
    } catch (e) {
      return !1;
    }
  }();

  return function () {
    var n,
        r = _getPrototypeOf(e);

    if (t) {
      var a = _getPrototypeOf(this).constructor;
      n = S(r, arguments, a);
    } else n = r.apply(this, arguments);

    return _possibleConstructorReturn(this, n);
  };
}

_defineProperty(jp, "defaultProps", {
  onComplete: function () {},
  onError: function () {}
});

var Lp = function (e) {
  _inherits(n, Lt);
  var t = Vp(n);

  function n() {
    return _classCallCheck(this, n), t.apply(this, arguments);
  }

  return _createClass(n, [{
    key: "render",
    value: function () {
      if (!Vi(this.props.paymentData)) {
        var e = Tt(this.props, "useOriginalFlow") ? "paymentData" : "authorisationToken";
        return this.props.onError({
          errorCode: "threeds2.challenge",
          message: "No ".concat(e, " received. Challenge cannot proceed")
        }), null;
      }

      return h(jp, _extends({}, this.props, {
        onComplete: this.onComplete
      }));
    }
  }]), n;
}();

function Up(e) {
  var t = function () {
    if ("undefined" == typeof Reflect || !S) return !1;
    if (S.sham) return !1;
    if ("function" == typeof Proxy) return !0;

    try {
      return Boolean.prototype.valueOf.call(S(Boolean, [], function () {})), !0;
    } catch (e) {
      return !1;
    }
  }();

  return function () {
    var n,
        r = _getPrototypeOf(e);

    if (t) {
      var a = _getPrototypeOf(this).constructor;
      n = S(r, arguments, a);
    } else n = r.apply(this, arguments);

    return _possibleConstructorReturn(this, n);
  };
}

_defineProperty(Lp, "type", "threeDS2Challenge"), _defineProperty(Lp, "defaultProps", {
  dataKey: "threeDSResult",
  size: "02",
  type: "ChallengeShopper"
});

var qp = function (e) {
  _inherits(n, d);
  var t = Up(n);

  function n(e) {
    var r;
    _classCallCheck(this, n), r = t.call(this, e), _defineProperty(_assertThisInitialized(r), "processMessageHandler", void 0), _defineProperty(_assertThisInitialized(r), "fingerPrintPromise", void 0);
    var a = r.props,
        o = a.threeDSServerTransID,
        i = a.threeDSMethodNotificationURL,
        l = W({
      threeDSServerTransID: o,
      threeDSMethodNotificationURL: i
    }),
        s = Rp(l);
    return r.state = {
      base64URLencodedData: s
    }, r;
  }

  return _createClass(n, [{
    key: "get3DS2MethodPromise",
    value: function () {
      var e = this;
      return new v$1(function (t, n) {
        e.processMessageHandler = $t(e.props.postMessageDomain, t, n, bp, "fingerPrintResult"), window.addEventListener("message", e.processMessageHandler);
      });
    }
  }, {
    key: "componentDidMount",
    value: function () {
      var e = this;
      this.fingerPrintPromise = Kt(1e4, this.get3DS2MethodPromise(), _p), this.fingerPrintPromise.promise.then(function (t) {
        window.removeEventListener("message", e.processMessageHandler), e.props.onCompleteFingerprint(t);
      }).catch(function (t) {
        window.removeEventListener("message", e.processMessageHandler), e.props.onErrorFingerprint(t);
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function () {
      this.fingerPrintPromise && this.fingerPrintPromise.cancel(), window.removeEventListener("message", this.processMessageHandler);
    }
  }, {
    key: "render",
    value: function (e, t) {
      var n = e.threeDSMethodURL,
          r = t.base64URLencodedData;
      return h("div", {
        className: "adyen-checkout__3ds2-device-fingerprint"
      }, this.props.showSpinner && h(at, null), h("div", {
        style: {
          display: "none"
        }
      }, h(qt, {
        name: "threeDSMethodIframe"
      }), h(mp, {
        name: "threeDSMethodForm",
        action: n,
        target: "threeDSMethodIframe",
        inputName: "threeDSMethodData",
        inputValue: r
      })));
    }
  }]), n;
}();

function Kp(e) {
  var t = function () {
    if ("undefined" == typeof Reflect || !S) return !1;
    if (S.sham) return !1;
    if ("function" == typeof Proxy) return !0;

    try {
      return Boolean.prototype.valueOf.call(S(Boolean, [], function () {})), !0;
    } catch (e) {
      return !1;
    }
  }();

  return function () {
    var n,
        r = _getPrototypeOf(e);

    if (t) {
      var a = _getPrototypeOf(this).constructor;
      n = S(r, arguments, a);
    } else n = r.apply(this, arguments);

    return _possibleConstructorReturn(this, n);
  };
}

_defineProperty(qp, "defaultProps", {
  showSpinner: !0
});

var Hp = function (e) {
  _inherits(n, d);
  var t = Kp(n);

  function n(e) {
    var r;
    _classCallCheck(this, n);
    var a = (r = t.call(this, e)).props,
        o = a.token,
        i = a.notificationURL;

    if (o) {
      var l = function (e) {
        var t = e.token,
            n = e.notificationURL,
            r = wp(t),
            a = r.threeDSMethodNotificationURL,
            o = r.threeDSMethodUrl,
            i = n || a;
        return {
          threeDSServerTransID: r.threeDSServerTransID,
          threeDSMethodURL: o,
          threeDSMethodNotificationURL: i,
          postMessageDomain: Zt(i)
        };
      }({
        token: o,
        notificationURL: i
      });

      r.state = {
        status: "init",
        fingerPrintData: l
      };
    } else r.state = {
      status: "error"
    }, r.props.onError("Missing fingerprintToken parameter");

    return r;
  }

  return _createClass(n, [{
    key: "componentDidMount",
    value: function () {
      this.state.fingerPrintData && this.state.fingerPrintData.threeDSMethodURL && this.state.fingerPrintData.threeDSMethodURL.length ? this.setState({
        status: "retrievingFingerPrint"
      }) : this.setStatusComplete({
        threeDSCompInd: "U"
      });
    }
  }, {
    key: "setStatusComplete",
    value: function (e) {
      var t = this;
      this.setState({
        status: "complete"
      }, function () {
        var n = (t.props.useOriginalFlow ? Fp : Pp)(t.props.dataKey, e, t.props.paymentData);
        t.props.onComplete(n);
      });
    }
  }, {
    key: "render",
    value: function (e, t) {
      var n = this,
          r = t.fingerPrintData;
      return "retrievingFingerPrint" === this.state.status ? h(qp, _extends({
        onCompleteFingerprint: function (e) {
          n.setStatusComplete(e.result);
        },
        onErrorFingerprint: function (e) {
          var t = Ep(e.errorCode);
          n.props.onError(t), n.setStatusComplete(e.result);
        },
        showSpinner: this.props.showSpinner
      }, r)) : null;
    }
  }]), n;
}();

function zp(e, t) {
  var o = n$1(e);

  if (r$1) {
    var i = r$1(e);
    t && (i = f$1(i).call(i, function (t) {
      return a$1(e, t).enumerable;
    })), o.push.apply(o, i);
  }

  return o;
}

function Wp(e) {
  var t = this,
      n = e.data;

  _a({
    path: "v1/submitThreeDS2Fingerprint?token=".concat(this.props.clientKey),
    loadingContext: this.props.loadingContext,
    errorLevel: "fatal"
  }, function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var n,
          r,
          s = null != arguments[t] ? arguments[t] : {};
      t % 2 ? p$1(n = zp(Object(s), !0)).call(n, function (t) {
        _defineProperty(e, t, s[t]);
      }) : o$1 ? i(e, o$1(s)) : p$1(r = zp(Object(s))).call(r, function (t) {
        l$1(e, t, a$1(s, t));
      });
    }

    return e;
  }({}, n)).then(function (e) {
    var n,
        r,
        a,
        o = null !== (n = t.props.elementRef) && void 0 !== n ? n : t;

    if (e.action || e.details) {
      if ("completed" === e.type) {
        var i = e.details;
        return t.onComplete({
          data: {
            details: i
          }
        });
      }

      return "threeDS2" === (null === (r = e.action) || void 0 === r ? void 0 : r.type) ? o.handleAction(e.action, _l("challengeWindowSize").from(t.props)) : "redirect" === (null === (a = e.action) || void 0 === a ? void 0 : a.type) ? o.handleAction(e.action) : void 0;
    }

    console.error("Handled Error::callSubmit3DS2Fingerprint::FAILED:: resData=", e);
  }).catch(function (e) {
    t.handleError(e);
  });
}

function Gp(e) {
  var t = function () {
    if ("undefined" == typeof Reflect || !S) return !1;
    if (S.sham) return !1;
    if ("function" == typeof Proxy) return !0;

    try {
      return Boolean.prototype.valueOf.call(S(Boolean, [], function () {})), !0;
    } catch (e) {
      return !1;
    }
  }();

  return function () {
    var n,
        r = _getPrototypeOf(e);

    if (t) {
      var a = _getPrototypeOf(this).constructor;
      n = S(r, arguments, a);
    } else n = r.apply(this, arguments);

    return _possibleConstructorReturn(this, n);
  };
}

_defineProperty(Hp, "type", "scheme"), _defineProperty(Hp, "defaultProps", {
  onComplete: function () {},
  onError: function () {},
  paymentData: "",
  showSpinner: !0
});

var Yp = function (e) {
  _inherits(n, Lt);
  var t = Gp(n);

  function n() {
    var e, r;
    _classCallCheck(this, n);

    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i];

    return r = t.call.apply(t, y$1(e = [this]).call(e, o)), _defineProperty(_assertThisInitialized(r), "callSubmit3DS2Fingerprint", m$1(Wp).call(Wp, _assertThisInitialized(r))), r;
  }

  return _createClass(n, [{
    key: "render",
    value: function () {
      return Vi(this.props.paymentData) ? h(Hp, _extends({}, this.props, {
        onComplete: this.props.useOriginalFlow ? this.onComplete : this.callSubmit3DS2Fingerprint
      })) : (this.props.onError({
        errorCode: n.defaultProps.dataKey,
        message: "No paymentData received. Fingerprinting cannot proceed"
      }), null);
    }
  }]), n;
}();

_defineProperty(Yp, "type", "threeDS2Fingerprint"), _defineProperty(Yp, "defaultProps", {
  dataKey: "fingerprintResult",
  type: "IdentifyShopper"
});

var $p = function (e) {
  var t,
      n,
      r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
  if (0 === r) return e;
  var a = String(e);
  return a.length >= r ? a : G(t = ke(n = "0").call(n, r) + a).call(t, -1 * r);
},
    Zp = function (e, t) {
  var n = new Date(),
      r = t.getTime() - n.getTime(),
      a = r / 1e3,
      o = function (e, t, n) {
    var r = n.getTime() - e.getTime();
    return 100 - Math.round(100 * (t.getTime() - e.getTime()) / r);
  }(e, n, t);

  return {
    total: r,
    minutes: $p(Math.floor(a / 60 % 60)),
    seconds: $p(Math.floor(a % 60)),
    completed: r <= 0,
    percentage: o
  };
};

function Jp(e, t) {
  var o = n$1(e);

  if (r$1) {
    var i = r$1(e);
    t && (i = f$1(i).call(i, function (t) {
      return a$1(e, t).enumerable;
    })), o.push.apply(o, i);
  }

  return o;
}

function Qp(e) {
  var t = function () {
    if ("undefined" == typeof Reflect || !S) return !1;
    if (S.sham) return !1;
    if ("function" == typeof Proxy) return !0;

    try {
      return Boolean.prototype.valueOf.call(S(Boolean, [], function () {})), !0;
    } catch (e) {
      return !1;
    }
  }();

  return function () {
    var n,
        r = _getPrototypeOf(e);

    if (t) {
      var a = _getPrototypeOf(this).constructor;
      n = S(r, arguments, a);
    } else n = r.apply(this, arguments);

    return _possibleConstructorReturn(this, n);
  };
}

var Xp = function (e) {
  _inherits(n, d);
  var t = Qp(n);

  function n(e) {
    var r;
    _classCallCheck(this, n), r = t.call(this, e), _defineProperty(_assertThisInitialized(r), "interval", void 0);
    var a = 6e4 * r.props.minutesFromNow,
        o = new Date().getTime();
    return r.state = {
      startTime: new Date(o),
      endTime: new Date(o + a),
      minutes: "-",
      seconds: "-"
    }, r;
  }

  return _createClass(n, [{
    key: "tick",
    value: function () {
      var e = Zp(this.state.startTime, this.state.endTime);
      if (e.completed) return this.props.onCompleted(), this.clearInterval();
      var t = {
        minutes: e.minutes,
        seconds: e.seconds,
        percentage: e.percentage
      };
      return this.setState(function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n,
              r,
              s = null != arguments[t] ? arguments[t] : {};
          t % 2 ? p$1(n = Jp(Object(s), !0)).call(n, function (t) {
            _defineProperty(e, t, s[t]);
          }) : o$1 ? i(e, o$1(s)) : p$1(r = Jp(Object(s))).call(r, function (t) {
            l$1(e, t, a$1(s, t));
          });
        }

        return e;
      }({}, t)), this.props.onTick(t), t;
    }
  }, {
    key: "clearInterval",
    value: function (e) {
      function t() {
        return e.apply(this, arguments);
      }

      return t.toString = function () {
        return e.toString();
      }, t;
    }(function () {
      clearInterval(this.interval), delete this.interval;
    })
  }, {
    key: "componentDidMount",
    value: function () {
      var e = this;
      this.interval = Ce(function () {
        e.tick();
      }, 1e3);
    }
  }, {
    key: "componentWillUnmount",
    value: function () {
      this.clearInterval();
    }
  }, {
    key: "render",
    value: function () {
      return h("span", {
        className: "adyen-checkout__countdown"
      }, h("span", {
        className: "countdown__minutes"
      }, this.state.minutes), h("span", {
        className: "countdown__separator"
      }, ":"), h("span", {
        className: "countdown__seconds"
      }, this.state.seconds));
    }
  }]), n;
}();

function ef(e, t, n) {
  if (!e || !t) throw new Error("Could not check the payment status");
  return _a({
    loadingContext: n,
    path: "services/PaymentInitiation/v1/status?clientKey=".concat(t)
  }, {
    paymentData: e
  });
}

function tf(e, t) {
  var o = n$1(e);

  if (r$1) {
    var i = r$1(e);
    t && (i = f$1(i).call(i, function (t) {
      return a$1(e, t).enumerable;
    })), o.push.apply(o, i);
  }

  return o;
}

function nf(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n,
        r,
        s = null != arguments[t] ? arguments[t] : {};
    t % 2 ? p$1(n = tf(Object(s), !0)).call(n, function (t) {
      _defineProperty(e, t, s[t]);
    }) : o$1 ? i(e, o$1(s)) : p$1(r = tf(Object(s))).call(r, function (t) {
      l$1(e, t, a$1(s, t));
    });
  }

  return e;
}

_defineProperty(Xp, "defaultProps", {
  onTick: function () {},
  onCompleted: function () {}
});

var rf = function (e) {
  switch (e.resultCode.toLowerCase()) {
    case "refused":
    case "error":
    case "cancelled":
      return {
        type: "error",
        props: nf(nf({}, e), {}, {
          message: "error.subtitle.refused"
        })
      };

    case "unknown":
      return {
        type: "error",
        props: nf(nf({}, e), {}, {
          message: "error.message.unknown"
        })
      };

    case "pending":
    case "received":
      return {
        type: e.resultCode.toLowerCase(),
        props: e
      };

    default:
      return {
        type: "success",
        props: e
      };
  }
},
    af = function (e) {
  if (!e.type && e.resultCode) return rf(e);
  if (!e.type) return {
    type: "error",
    props: e
  };

  switch (e.type.toLowerCase()) {
    case "pending":
      return {
        type: "pending",
        props: e
      };

    case "complete":
      return rf(e);

    default:
      return {
        type: "error",
        props: e
      };
  }
};

function of(e) {
  var t = function () {
    if ("undefined" == typeof Reflect || !S) return !1;
    if (S.sham) return !1;
    if ("function" == typeof Proxy) return !0;

    try {
      return Boolean.prototype.valueOf.call(S(Boolean, [], function () {})), !0;
    } catch (e) {
      return !1;
    }
  }();

  return function () {
    var n,
        r = _getPrototypeOf(e);

    if (t) {
      var a = _getPrototypeOf(this).constructor;
      n = S(r, arguments, a);
    } else n = r.apply(this, arguments);

    return _possibleConstructorReturn(this, n);
  };
}

var lf = function (e) {
  _inherits(n, d);
  var t = of(n);

  function n(e) {
    var r;
    return _classCallCheck(this, n), r = t.call(this, e), _defineProperty(_assertThisInitialized(r), "interval", void 0), _defineProperty(_assertThisInitialized(r), "statusInterval", function () {
      r.checkStatus(), r.setState({
        timePassed: r.state.timePassed + r.props.delay
      }), r.state.timePassed >= r.props.throttleTime && r.setState({
        delay: r.props.throttledInterval
      });
    }), _defineProperty(_assertThisInitialized(r), "redirectToApp", function (e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function () {};
      q(function () {
        r.props.onError(new Mt("ERROR", "".concat(r.props.type, " App was not found"))), t();
      }, 25), window.location.assign(e);
    }), _defineProperty(_assertThisInitialized(r), "onTick", function (e) {
      r.setState({
        percentage: e.percentage
      });
    }), _defineProperty(_assertThisInitialized(r), "onTimeUp", function () {
      r.setState({
        expired: !0
      }), clearInterval(r.interval), r.props.onError(new Mt("ERROR", "Payment Expired"));
    }), _defineProperty(_assertThisInitialized(r), "onComplete", function (e) {
      return clearInterval(r.interval), r.setState({
        completed: !0,
        loading: !1
      }), r.props.onComplete({
        data: {
          details: {
            payload: e.props.payload
          },
          paymentData: r.props.paymentData
        }
      }), e;
    }), _defineProperty(_assertThisInitialized(r), "onError", function (e) {
      return clearInterval(r.interval), r.setState({
        expired: !0,
        loading: !1
      }), r.props.onComplete({
        data: {
          details: {
            payload: e.props.payload
          },
          paymentData: r.props.paymentData
        }
      }), e;
    }), _defineProperty(_assertThisInitialized(r), "checkStatus", function () {
      var e = r.props;
      return ef(e.paymentData, e.clientKey, e.loadingContext).then(af).catch(function (e) {
        return {
          type: "network-error",
          props: e
        };
      }).then(function (e) {
        switch (e.type) {
          case "success":
            return r.onComplete(e);

          case "error":
            return r.onError(e);

          default:
            r.setState({
              loading: !1
            });
        }

        return e;
      });
    }), r.state = {
      buttonStatus: "default",
      completed: !1,
      delay: e.delay,
      expired: !1,
      loading: !0,
      percentage: 100,
      timePassed: 0
    }, r;
  }

  return _createClass(n, [{
    key: "componentDidMount",
    value: function () {
      var e = this,
          t = this.props,
          n = t.shouldRedirectOnMobile,
          r = t.url,
          a = window.matchMedia("(max-width: 768px)").matches && /Android|iPhone|iPod/.test(navigator.userAgent),
          o = function () {
        e.interval = Ce(e.statusInterval, e.state.delay);
      };

      n && r && a ? this.redirectToApp(r, o) : o();
    }
  }, {
    key: "componentDidUpdate",
    value: function (e, t) {
      t.delay !== this.state.delay && (clearInterval(this.interval), this.interval = Ce(this.statusInterval, this.state.delay));
    }
  }, {
    key: "componentWillUnmount",
    value: function () {
      clearInterval(this.interval);
    }
  }, {
    key: "render",
    value: function (e, t) {
      var n,
          r,
          a,
          o,
          i = this,
          l = e.amount,
          s = e.url,
          c = e.brandLogo,
          u = e.countdownTime,
          d = e.type,
          p = t.expired,
          f = t.completed,
          h$1 = t.loading,
          m = Pt(),
          v = m.i18n,
          g = m.loadingContext,
          b = this.props.qrCodeData ? y$1(n = y$1(r = "".concat(g)).call(r, "barcode.shtml?barcodeType=qrCode&fileType=png&data=")).call(n, this.props.qrCodeData) : this.props.qrCodeImage,
          _ = function (e, t) {
        return h("div", {
          className: "adyen-checkout__qr-loader adyen-checkout__qr-loader--result"
        }, h("img", {
          className: "adyen-checkout__qr-loader__icon adyen-checkout__qr-loader__icon--result",
          src: rt({
            loadingContext: g,
            imageFolder: "components/"
          })(e),
          alt: v.get(t)
        }), h("div", {
          className: "adyen-checkout__qr-loader__subtitle adyen-checkout__qr-loader__subtitle--result"
        }, v.get(t)));
      };

      if (p) return _("error", "error.subtitle.payment");
      if (f) return _("success", "creditCard.success");
      if (h$1) return h("div", {
        className: "adyen-checkout__qr-loader"
      }, c && h("img", {
        alt: d,
        src: c,
        className: "adyen-checkout__qr-loader__brand-logo"
      }), h(at, null));
      var C = v.get("wechatpay.timetopay").split("%@");
      return h("div", {
        className: y$1(a = "\n                    adyen-checkout__qr-loader\n                    adyen-checkout__qr-loader--".concat(d, "\n                    ")).call(a, K(o = this.props.classNameModifiers).call(o, function (e) {
          return "adyen-checkout__qr-loader--".concat(e);
        }), "\n                ")
      }, c && h("img", {
        src: c,
        alt: d,
        className: "adyen-checkout__qr-loader__brand-logo"
      }), h("div", {
        className: "adyen-checkout__qr-loader__subtitle"
      }, v.get(this.props.introduction)), h("img", {
        src: b,
        alt: v.get("wechatpay.scanqrcode")
      }), l && l.value && l.currency && h("div", {
        className: "adyen-checkout__qr-loader__payment_amount"
      }, v.amount(l.value, l.currency)), h("div", {
        className: "adyen-checkout__qr-loader__progress"
      }, h("span", {
        className: "adyen-checkout__qr-loader__percentage",
        style: {
          width: "".concat(this.state.percentage, "%")
        }
      })), h("div", {
        className: "adyen-checkout__qr-loader__countdown"
      }, C[0], "\xa0", h(Xp, {
        minutesFromNow: u,
        onTick: this.onTick,
        onCompleted: this.onTimeUp
      }), "\xa0", C[1]), this.props.instructions && h("div", {
        className: "adyen-checkout__qr-loader__instructions"
      }, v.get(this.props.instructions)), this.props.copyBtn && h("div", {
        className: "adyen-checkout__qr-loader__actions"
      }, h(At, {
        inline: !0,
        variant: "action",
        onClick: function (e, t) {
          var n = t.complete;
          Zu(i.props.qrCodeData), n();
        },
        icon: rt({
          loadingContext: g,
          imageFolder: "components/"
        })("copy"),
        label: v.get("button.copy")
      })), s && h("div", {
        className: "adyen-checkout__qr-loader__app-link"
      }, h("span", {
        className: "adyen-checkout__qr-loader__separator__label"
      }, v.get("or")), h(At, {
        classNameModifiers: ["qr-loader"],
        onClick: function () {
          return i.redirectToApp(s);
        },
        label: v.get("openApp")
      })));
    }
  }]), n;
}();

function sf(e, t) {
  var o = n$1(e);

  if (r$1) {
    var i = r$1(e);
    t && (i = f$1(i).call(i, function (t) {
      return a$1(e, t).enumerable;
    })), o.push.apply(o, i);
  }

  return o;
}

function cf(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n,
        r,
        s = null != arguments[t] ? arguments[t] : {};
    t % 2 ? p$1(n = sf(Object(s), !0)).call(n, function (t) {
      _defineProperty(e, t, s[t]);
    }) : o$1 ? i(e, o$1(s)) : p$1(r = sf(Object(s))).call(r, function (t) {
      l$1(e, t, a$1(s, t));
    });
  }

  return e;
}

function uf(e) {
  var t = function () {
    if ("undefined" == typeof Reflect || !S) return !1;
    if (S.sham) return !1;
    if ("function" == typeof Proxy) return !0;

    try {
      return Boolean.prototype.valueOf.call(S(Boolean, [], function () {})), !0;
    } catch (e) {
      return !1;
    }
  }();

  return function () {
    var n,
        r = _getPrototypeOf(e);

    if (t) {
      var a = _getPrototypeOf(this).constructor;
      n = S(r, arguments, a);
    } else n = r.apply(this, arguments);

    return _possibleConstructorReturn(this, n);
  };
}

_defineProperty(lf, "defaultProps", {
  delay: 2e3,
  countdownTime: 15,
  onError: function () {},
  onComplete: function () {},
  throttleTime: 6e4,
  classNameModifiers: [],
  throttledInterval: 1e4,
  introduction: "wechatpay.scanqrcode"
});

var df = function (e) {
  _inherits(n, Lt);
  var t = uf(n);

  function n() {
    return _classCallCheck(this, n), t.apply(this, arguments);
  }

  return _createClass(n, [{
    key: "formatData",
    value: function () {
      return {
        paymentMethod: cf({
          type: this.props.type || this.constructor.type
        }, this.state.data)
      };
    }
  }, {
    key: "isValid",
    get: function () {
      return !0;
    }
  }, {
    key: "renderQRCode",
    value: function () {
      var e = this;
      return h(Xa, {
        i18n: this.props.i18n,
        loadingContext: this.props.loadingContext
      }, h(lf, _extends({
        ref: function (t) {
          e.componentRef = t;
        }
      }, this.props, {
        shouldRedirectOnMobile: this.props.shouldRedirectOnMobile,
        type: this.constructor.type,
        brandLogo: this.props.brandLogo || this.icon,
        delay: this.props.delay,
        onComplete: this.onComplete,
        countdownTime: this.props.countdownTime,
        instructions: this.props.instructions
      })));
    }
  }, {
    key: "render",
    value: function () {
      var e = this;
      return this.props.paymentData ? this.renderQRCode() : this.props.showPayButton ? h(Xa, {
        i18n: this.props.i18n,
        loadingContext: this.props.loadingContext
      }, h(gu, {
        name: this.displayName,
        onSubmit: this.submit,
        payButton: this.payButton,
        ref: function (t) {
          e.componentRef = t;
        }
      })) : null;
    }
  }]), n;
}();

_defineProperty(df, "defaultProps", {
  qrCodeImage: "",
  amount: null,
  paymentData: null,
  onError: function () {},
  onComplete: function () {}
});

function pf(e, t) {
  var o = n$1(e);

  if (r$1) {
    var i = r$1(e);
    t && (i = f$1(i).call(i, function (t) {
      return a$1(e, t).enumerable;
    })), o.push.apply(o, i);
  }

  return o;
}

function ff(e) {
  var t = function () {
    if ("undefined" == typeof Reflect || !S) return !1;
    if (S.sham) return !1;
    if ("function" == typeof Proxy) return !0;

    try {
      return Boolean.prototype.valueOf.call(S(Boolean, [], function () {})), !0;
    } catch (e) {
      return !1;
    }
  }();

  return function () {
    var n,
        r = _getPrototypeOf(e);

    if (t) {
      var a = _getPrototypeOf(this).constructor;
      n = S(r, arguments, a);
    } else n = r.apply(this, arguments);

    return _possibleConstructorReturn(this, n);
  };
}

var hf = function (e) {
  _inherits(n, df);
  var t = ff(n);

  function n() {
    return _classCallCheck(this, n), t.apply(this, arguments);
  }

  return _createClass(n, [{
    key: "formatProps",
    value: function (e) {
      return function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n,
              r,
              s = null != arguments[t] ? arguments[t] : {};
          t % 2 ? p$1(n = pf(Object(s), !0)).call(n, function (t) {
            _defineProperty(e, t, s[t]);
          }) : o$1 ? i(e, o$1(s)) : p$1(r = pf(Object(s))).call(r, function (t) {
            l$1(e, t, a$1(s, t));
          });
        }

        return e;
      }({
        delay: 2e3,
        countdownTime: 15
      }, _get(_getPrototypeOf(n.prototype), "formatProps", this).call(this, e));
    }
  }]), n;
}();

_defineProperty(hf, "type", "wechatpayQR");

function yf(e, t) {
  var o = n$1(e);

  if (r$1) {
    var i = r$1(e);
    t && (i = f$1(i).call(i, function (t) {
      return a$1(e, t).enumerable;
    })), o.push.apply(o, i);
  }

  return o;
}

function mf(e) {
  var t = function () {
    if ("undefined" == typeof Reflect || !S) return !1;
    if (S.sham) return !1;
    if ("function" == typeof Proxy) return !0;

    try {
      return Boolean.prototype.valueOf.call(S(Boolean, [], function () {})), !0;
    } catch (e) {
      return !1;
    }
  }();

  return function () {
    var n,
        r = _getPrototypeOf(e);

    if (t) {
      var a = _getPrototypeOf(this).constructor;
      n = S(r, arguments, a);
    } else n = r.apply(this, arguments);

    return _possibleConstructorReturn(this, n);
  };
}

var vf = function (e) {
  _inherits(n, df);
  var t = mf(n);

  function n() {
    return _classCallCheck(this, n), t.apply(this, arguments);
  }

  return _createClass(n, [{
    key: "formatProps",
    value: function (e) {
      return function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n,
              r,
              s = null != arguments[t] ? arguments[t] : {};
          t % 2 ? p$1(n = yf(Object(s), !0)).call(n, function (t) {
            _defineProperty(e, t, s[t]);
          }) : o$1 ? i(e, o$1(s)) : p$1(r = yf(Object(s))).call(r, function (t) {
            l$1(e, t, a$1(s, t));
          });
        }

        return e;
      }({
        delay: 2e3,
        countdownTime: 15,
        shouldRedirectOnMobile: !0,
        buttonLabel: window.matchMedia("(max-width: 768px)").matches && /Android|iPhone|iPod/.test(navigator.userAgent) ? "openApp" : "generateQRCode"
      }, _get(_getPrototypeOf(n.prototype), "formatProps", this).call(this, e));
    }
  }]), n;
}();

function gf(e) {
  var t = function () {
    if ("undefined" == typeof Reflect || !S) return !1;
    if (S.sham) return !1;
    if ("function" == typeof Proxy) return !0;

    try {
      return Boolean.prototype.valueOf.call(S(Boolean, [], function () {})), !0;
    } catch (e) {
      return !1;
    }
  }();

  return function () {
    var n,
        r = _getPrototypeOf(e);

    if (t) {
      var a = _getPrototypeOf(this).constructor;
      n = S(r, arguments, a);
    } else n = r.apply(this, arguments);

    return _possibleConstructorReturn(this, n);
  };
}

_defineProperty(vf, "type", "bcmc_mobile");

var bf = function (e) {
  _inherits(n, _i);
  var t = gf(n);

  function n() {
    return _classCallCheck(this, n), t.apply(this, arguments);
  }

  return _createClass(n);
}();

function _f(e) {
  var t = function () {
    if ("undefined" == typeof Reflect || !S) return !1;
    if (S.sham) return !1;
    if ("function" == typeof Proxy) return !0;

    try {
      return Boolean.prototype.valueOf.call(S(Boolean, [], function () {})), !0;
    } catch (e) {
      return !1;
    }
  }();

  return function () {
    var n,
        r = _getPrototypeOf(e);

    if (t) {
      var a = _getPrototypeOf(this).constructor;
      n = S(r, arguments, a);
    } else n = r.apply(this, arguments);

    return _possibleConstructorReturn(this, n);
  };
}

_defineProperty(bf, "type", "molpay_ebanking_fpx_MY");

var Cf = function (e) {
  _inherits(n, _i);

  var t = _f(n);

  function n() {
    return _classCallCheck(this, n), t.apply(this, arguments);
  }

  return _createClass(n);
}();

function kf(e) {
  var t = function () {
    if ("undefined" == typeof Reflect || !S) return !1;
    if (S.sham) return !1;
    if ("function" == typeof Proxy) return !0;

    try {
      return Boolean.prototype.valueOf.call(S(Boolean, [], function () {})), !0;
    } catch (e) {
      return !1;
    }
  }();

  return function () {
    var n,
        r = _getPrototypeOf(e);

    if (t) {
      var a = _getPrototypeOf(this).constructor;
      n = S(r, arguments, a);
    } else n = r.apply(this, arguments);

    return _possibleConstructorReturn(this, n);
  };
}

_defineProperty(Cf, "type", "molpay_ebanking_TH");

var Nf = function (e) {
  _inherits(n, _i);
  var t = kf(n);

  function n() {
    return _classCallCheck(this, n), t.apply(this, arguments);
  }

  return _createClass(n);
}();

function wf(e) {
  var t = function () {
    if ("undefined" == typeof Reflect || !S) return !1;
    if (S.sham) return !1;
    if ("function" == typeof Proxy) return !0;

    try {
      return Boolean.prototype.valueOf.call(S(Boolean, [], function () {})), !0;
    } catch (e) {
      return !1;
    }
  }();

  return function () {
    var n,
        r = _getPrototypeOf(e);

    if (t) {
      var a = _getPrototypeOf(this).constructor;
      n = S(r, arguments, a);
    } else n = r.apply(this, arguments);

    return _possibleConstructorReturn(this, n);
  };
}

_defineProperty(Nf, "type", "molpay_ebanking_VN");

var Sf = function (e) {
  _inherits(n, _i);
  var t = wf(n);

  function n() {
    return _classCallCheck(this, n), t.apply(this, arguments);
  }

  return _createClass(n);
}();

function xf(e, t) {
  var o = n$1(e);

  if (r$1) {
    var i = r$1(e);
    t && (i = f$1(i).call(i, function (t) {
      return a$1(e, t).enumerable;
    })), o.push.apply(o, i);
  }

  return o;
}

function Pf(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n,
        r,
        s = null != arguments[t] ? arguments[t] : {};
    t % 2 ? p$1(n = xf(Object(s), !0)).call(n, function (t) {
      _defineProperty(e, t, s[t]);
    }) : o$1 ? i(e, o$1(s)) : p$1(r = xf(Object(s))).call(r, function (t) {
      l$1(e, t, a$1(s, t));
    });
  }

  return e;
}

function Ff(e) {
  var t,
      n,
      r = Pt().i18n,
      a = function () {
    var t = ["dragonpay_ebanking", "dragonpay_otc_banking", "dragonpay_otc_non_banking"];
    return C$1(t).call(t, e.type) > -1;
  },
      o = cr({
    schema: y$1(t = []).call(t, _toConsumableArray(a() ? ["issuer"] : []), ["shopperEmail"]),
    rules: {
      issuer: {
        validate: function (e) {
          return a() && !!e;
        },
        modes: ["input", "blur"]
      }
    }
  }),
      i = o.handleChangeFor,
      l = o.triggerValidation,
      s = o.data,
      c = o.valid,
      u = o.errors,
      d = o.isValid,
      p = mi({}, e.type),
      f = K(n = e.items).call(n, function (e) {
    return Pf(Pf({}, e), {}, {
      icon: p(e.id && e.id.toLowerCase())
    });
  }),
      h$1 = function (e) {
    return "dragonpay_otc_non_banking" === e ? "dragonpay.voucher.non.bank.selectField.placeholder" : "dragonpay.voucher.bank.selectField.placeholder";
  };

  yt(function () {
    e.onChange({
      isValid: d,
      data: s,
      valid: c,
      errors: u
    });
  }, [d, s, c, u]);
  var m = ft("ready"),
      v = _slicedToArray(m, 2),
      g = v[0],
      k = v[1];
  return this.setStatus = k, this.showValidation = l, h("div", {
    className: "adyen-checkout__dragonpay-input__field"
  }, h(yn, {
    label: r.get("shopperEmail"),
    errorMessage: !!u.shopperEmail
  }, Zn("emailAddress", {
    name: "dragonpay.shopperEmail",
    autoCorrect: "off",
    value: s.shopperEmail,
    className: "adyen-checkout__input--large",
    spellCheck: !1,
    onInput: i("shopperEmail", "input"),
    onBlur: i("shopperEmail", "blur")
  })), a() && h(yn, {
    label: r.get(h$1(e.type)),
    errorMessage: !!u.issuer
  }, Zn("select", {
    items: f,
    selected: s.issuer,
    placeholder: r.get(h$1(e.type)),
    name: "issuer",
    className: "adyen-checkout__dropdown--large adyen-checkout__issuer-list__dropdown",
    onChange: i("issuer")
  })), e.showPayButton && e.payButton({
    status: g,
    label: r.get("confirmPurchase")
  }));
}

function Af(e) {
  var t = e.reference,
      n = e.totalAmount,
      r = e.surcharge,
      a = e.expiresAt,
      o = e.alternativeReference,
      i = e.instructionsUrl,
      l = e.icon,
      s = e.issuer,
      c = e.paymentMethodType,
      u = Pt(),
      d = u.loadingContext,
      p = u.i18n,
      f = "dragonpay_otc_philippines" !== c ? mi({
    loadingContext: d
  }, c)(s.toLowerCase()) : null;
  return h(Qu, {
    reference: t,
    paymentMethodType: c,
    introduction: p.get("voucher.introduction"),
    imageUrl: l,
    issuerImageUrl: f,
    instructionsUrl: i,
    amount: n && p.amount(n.value, n.currency),
    surcharge: r && p.amount(r.value, r.currency),
    voucherDetails: [{
      label: p.get("voucher.expirationDate"),
      value: p.date(a)
    }, {
      label: p.get("voucher.alternativeReference"),
      value: o
    }],
    copyBtn: !0
  });
}

function Bf(e, t) {
  var o = n$1(e);

  if (r$1) {
    var i = r$1(e);
    t && (i = f$1(i).call(i, function (t) {
      return a$1(e, t).enumerable;
    })), o.push.apply(o, i);
  }

  return o;
}

function Ef(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n,
        r,
        s = null != arguments[t] ? arguments[t] : {};
    t % 2 ? p$1(n = Bf(Object(s), !0)).call(n, function (t) {
      _defineProperty(e, t, s[t]);
    }) : o$1 ? i(e, o$1(s)) : p$1(r = Bf(Object(s))).call(r, function (t) {
      l$1(e, t, a$1(s, t));
    });
  }

  return e;
}

function Rf(e) {
  var t = function () {
    if ("undefined" == typeof Reflect || !S) return !1;
    if (S.sham) return !1;
    if ("function" == typeof Proxy) return !0;

    try {
      return Boolean.prototype.valueOf.call(S(Boolean, [], function () {})), !0;
    } catch (e) {
      return !1;
    }
  }();

  return function () {
    var n,
        r = _getPrototypeOf(e);

    if (t) {
      var a = _getPrototypeOf(this).constructor;
      n = S(r, arguments, a);
    } else n = r.apply(this, arguments);

    return _possibleConstructorReturn(this, n);
  };
}

_defineProperty(Sf, "type", "openbanking_UK"), Ff.defaultProps = {
  data: {},
  items: [],
  onChange: function () {}
};

var Of = function (e) {
  _inherits(n, Lt);
  var t = Rf(n);

  function n() {
    return _classCallCheck(this, n), t.apply(this, arguments);
  }

  return _createClass(n, [{
    key: "isValid",
    get: function () {
      return !!this.state.isValid;
    }
  }, {
    key: "formatData",
    value: function () {
      var e = this.state.data,
          t = e.issuer,
          r = e.shopperEmail;
      return Ef(Ef({}, r && {
        shopperEmail: r
      }), {}, {
        paymentMethod: Ef(Ef({}, t && {
          issuer: t
        }), {}, {
          type: this.props.type || n.type
        })
      });
    }
  }, {
    key: "formatProps",
    value: function (e) {
      var t, n, r;
      return Ef(Ef({}, e), {}, {
        issuers: null !== (t = null === (n = e.details) || void 0 === n || null === (r = g$1(n).call(n, function (e) {
          return "issuer" === e.key;
        })) || void 0 === r ? void 0 : r.items) && void 0 !== t ? t : e.issuers
      });
    }
  }, {
    key: "render",
    value: function () {
      var e = this;
      return h(Xa, {
        i18n: this.props.i18n,
        loadingContext: this.props.loadingContext
      }, this.props.reference ? h(Af, _extends({
        ref: function (t) {
          e.componentRef = t;
        },
        icon: this.icon
      }, this.props)) : h(Ff, _extends({
        ref: function (t) {
          e.componentRef = t;
        },
        items: this.props.issuers
      }, this.props, {
        onChange: this.setState,
        onSubmit: this.submit,
        payButton: this.payButton
      })));
    }
  }]), n;
}();

function Df(e) {
  var t = vt(null),
      n = Pt().i18n,
      r = ft("ready"),
      a = _slicedToArray(r, 2),
      o = a[0],
      i = a[1];
  return this.setStatus = i, this.showValidation = function () {
    t.current && t.current.showValidation();
  }, h("div", {
    className: "adyen-checkout__doku-input__field"
  }, h(_r, {
    data: e.data,
    requiredFields: ["firstName", "lastName", "shopperEmail"],
    onChange: e.onChange,
    namePrefix: "doku",
    ref: t
  }), e.showPayButton && e.payButton({
    status: o,
    label: n.get("confirmPurchase")
  }));
}

_defineProperty(Of, "type", "dragonpay");

var Mf = function (e) {
  var t = e.reference,
      n = e.expiresAt,
      r = e.instructionsUrl,
      a = e.shopperName,
      o = e.merchantName,
      i = e.totalAmount,
      l = e.paymentMethodType,
      s = Pt(),
      c = s.loadingContext,
      u = s.i18n;
  return h(Qu, {
    paymentMethodType: l,
    reference: t,
    introduction: u.get("voucher.introduction.doku"),
    imageUrl: rt({
      loadingContext: c
    })(l),
    instructionsUrl: r,
    amount: i && u.amount(i.value, i.currency),
    voucherDetails: [{
      label: u.get("voucher.expirationDate"),
      value: u.date(n)
    }, {
      label: u.get("voucher.shopperName"),
      value: a
    }, {
      label: u.get("voucher.merchantName"),
      value: o
    }],
    copyBtn: !0
  });
};

function Tf(e, t) {
  var o = n$1(e);

  if (r$1) {
    var i = r$1(e);
    t && (i = f$1(i).call(i, function (t) {
      return a$1(e, t).enumerable;
    })), o.push.apply(o, i);
  }

  return o;
}

function If(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n,
        r,
        s = null != arguments[t] ? arguments[t] : {};
    t % 2 ? p$1(n = Tf(Object(s), !0)).call(n, function (t) {
      _defineProperty(e, t, s[t]);
    }) : o$1 ? i(e, o$1(s)) : p$1(r = Tf(Object(s))).call(r, function (t) {
      l$1(e, t, a$1(s, t));
    });
  }

  return e;
}

function jf(e) {
  var t = function () {
    if ("undefined" == typeof Reflect || !S) return !1;
    if (S.sham) return !1;
    if ("function" == typeof Proxy) return !0;

    try {
      return Boolean.prototype.valueOf.call(S(Boolean, [], function () {})), !0;
    } catch (e) {
      return !1;
    }
  }();

  return function () {
    var n,
        r = _getPrototypeOf(e);

    if (t) {
      var a = _getPrototypeOf(this).constructor;
      n = S(r, arguments, a);
    } else n = r.apply(this, arguments);

    return _possibleConstructorReturn(this, n);
  };
}

var Vf = function (e) {
  _inherits(n, Lt);
  var t = jf(n);

  function n() {
    return _classCallCheck(this, n), t.apply(this, arguments);
  }

  return _createClass(n, [{
    key: "isValid",
    get: function () {
      return !!this.state.isValid;
    }
  }, {
    key: "formatData",
    value: function () {
      return If(If({}, this.state.data), {}, {
        paymentMethod: {
          type: this.props.type || n.type
        }
      });
    }
  }, {
    key: "icon",
    get: function () {
      return rt({
        loadingContext: this.props.loadingContext
      })(this.props.type);
    }
  }, {
    key: "render",
    value: function () {
      var e = this;
      return h(Xa, {
        i18n: this.props.i18n,
        loadingContext: this.props.loadingContext
      }, this.props.reference ? h(Mf, _extends({
        ref: function (t) {
          e.componentRef = t;
        }
      }, this.props)) : h(Df, _extends({
        ref: function (t) {
          e.componentRef = t;
        }
      }, this.props, {
        onChange: this.setState,
        onSubmit: this.submit,
        payButton: this.payButton
      })));
    }
  }]), n;
}();

_defineProperty(Vf, "type", "doku");
var Lf = {
  socialSecurityNumber: {
    validate: Hs,
    errorMessage: "",
    modes: ["blur"]
  },
  default: {
    validate: function (e) {
      return !!e && e.length > 0;
    },
    errorMessage: "",
    modes: ["blur"]
  }
},
    Uf = {
  socialSecurityNumber: function (e) {
    return Ks(e);
  }
};

function qf(e) {
  var t = e.errors,
      n = e.value,
      r = e.onInput,
      a = e.onBlur,
      o = Pt().i18n,
      i = ft(!1),
      l = _slicedToArray(i, 2),
      s = l[0],
      c = l[1];
  return h("div", {
    className: H("adyen-checkout__fieldset", "adyen-checkout__fieldset--sendCopyToEmail", e.classNames)
  }, h(yn, {
    classNameModifiers: ["sendCopyToEmail"]
  }, Zn("boolean", {
    onChange: function (t) {
      c(t.target.checked), e.onToggle(s);
    },
    label: o.get("boleto.sendCopyToEmail"),
    name: "sendCopyToEmail",
    value: s
  })), s && h(yn, {
    label: o.get("shopperEmail"),
    classNameModifiers: ["shopperEmail"],
    errorMessage: t
  }, Zn("emailAddress", {
    name: "shopperEmail",
    autoCorrect: "off",
    spellCheck: !1,
    value: n,
    onInput: r,
    onBlur: a
  })));
}

function Kf(e) {
  var t = e.i18n,
      n = e.data,
      r = e.handleChangeFor,
      a = e.errors,
      o = e.valid;
  return h("div", {
    className: "adyen-checkout__fieldset adyen-checkout__fieldset--address adyen-checkout__fieldset--personalDetails"
  }, h("div", {
    className: "adyen-checkout__fieldset__title"
  }, t.get("personalDetails")), h("div", {
    className: "adyen-checkout__fieldset__fields"
  }, h(yn, {
    label: t.get("firstName"),
    classNameModifiers: ["firstName", "col-50"],
    errorMessage: !!a.firstName
  }, Zn("text", {
    name: "firstName",
    autocorrect: "off",
    spellcheck: !1,
    value: n.firstName,
    onInput: r("firstName", "input"),
    onBlur: r("firstName", "blur")
  })), h(yn, {
    label: t.get("lastName"),
    classNameModifiers: ["lastName", "col-50"],
    errorMessage: !!a.lastName
  }, Zn("text", {
    name: "lastName",
    autocorrect: "off",
    spellcheck: !1,
    value: n.lastName,
    onInput: r("lastName", "input"),
    onBlur: r("lastName", "blur")
  })), h(Bc, {
    data: n.socialSecurityNumber,
    error: a.socialSecurityNumber,
    valid: o.socialSecurityNumber,
    onInput: r("socialSecurityNumber", "input"),
    onBlur: r("socialSecurityNumber", "blur")
  })));
}

function Hf(e, t) {
  var o = n$1(e);

  if (r$1) {
    var i = r$1(e);
    t && (i = f$1(i).call(i, function (t) {
      return a$1(e, t).enumerable;
    })), o.push.apply(o, i);
  }

  return o;
}

function zf(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n,
        r,
        s = null != arguments[t] ? arguments[t] : {};
    t % 2 ? p$1(n = Hf(Object(s), !0)).call(n, function (t) {
      _defineProperty(e, t, s[t]);
    }) : o$1 ? i(e, o$1(s)) : p$1(r = Hf(Object(s))).call(r, function (t) {
      l$1(e, t, a$1(s, t));
    });
  }

  return e;
}

function Wf(e) {
  var t = Pt().i18n,
      n = vt(null),
      r = cr({
    schema: ["firstName", "lastName", "socialSecurityNumber", "billingAddress", "shopperEmail"],
    defaultData: e.data,
    rules: Lf,
    formatters: Uf
  }),
      a = r.handleChangeFor,
      o = r.triggerValidation,
      i = r.setSchema,
      l = r.setData,
      s = r.setValid,
      c = r.setErrors,
      u = r.data,
      d = r.valid,
      p = r.errors,
      f = r.isValid,
      h$1 = ft(!1),
      m = _slicedToArray(h$1, 2),
      v = m[0],
      g = m[1];
  yt(function () {
    var t,
        n = y$1(t = []).call(t, _toConsumableArray(e.personalDetailsRequired ? ["firstName", "lastName", "socialSecurityNumber"] : []), _toConsumableArray(e.billingAddressRequired ? ["billingAddress"] : []), _toConsumableArray(v ? ["shopperEmail"] : []));
    i(n);
  }, [v, e.personalDetailsRequired, e.billingAddressRequired]);
  var C = ft("ready"),
      k = _slicedToArray(C, 2),
      N = k[0],
      w = k[1];
  this.setStatus = w, this.showValidation = function () {
    o(), e.billingAddressRequired && n.current.showValidation();
  }, yt(function () {
    var t = !e.billingAddressRequired || Boolean(d.billingAddress);
    e.onChange({
      data: u,
      valid: d,
      errors: p,
      isValid: f && t
    });
  }, [u, d, p]);

  var S = _toConsumableArray(e.personalDetailsRequired || e.billingAddressRequired || e.showEmailAddress ? [] : ["standalone"]);

  return h("div", {
    className: "adyen-checkout__boleto-input__field"
  }, e.personalDetailsRequired && h(Kf, {
    i18n: t,
    data: u,
    handleChangeFor: a,
    errors: p,
    valid: d
  }), e.billingAddressRequired && h(Ba, {
    allowedCountries: ["BR"],
    label: "billingAddress",
    data: zf(zf({}, e.data.billingAddress), {}, {
      country: "BR"
    }),
    onChange: function (e) {
      l("billingAddress", e.data), s("billingAddress", e.isValid), c("billingAddress", e.errors);
    },
    requiredFields: ["country", "street", "houseNumberOrName", "postalCode", "city", "stateOrProvince"],
    ref: n
  }), e.showEmailAddress && h(qf, {
    value: u.shopperEmail,
    errors: p.shopperEmail,
    onToggle: function () {
      return g(!v);
    },
    onInput: a("shopperEmail", "input"),
    onBlur: a("shopperEmail", "blur")
  }), e.showPayButton && e.payButton({
    status: N,
    label: t.get("boletobancario.btnLabel"),
    classNameModifiers: S
  }));
}

Wf.defaultProps = {
  data: {},
  showEmailAddress: !0,
  personalDetailsRequired: !0,
  billingAddressRequired: !0
};

var Gf = function (e) {
  var t,
      n = Pt(),
      r = n.i18n,
      a = n.loadingContext,
      o = e.reference,
      i = e.expiresAt,
      l = e.totalAmount,
      s = e.paymentMethodType,
      c = e.downloadUrl,
      u = o.replace(/[^\d]/g, "").replace(/^(\d{4})(\d{5})\d{1}(\d{10})\d{1}(\d{10})\d{1}(\d{15})$/, "$1$5$2$3$4"),
      d = y$1(t = "".concat(a, "barcode.shtml?data=")).call(t, u, "&barcodeType=BT_Int2of5A&fileType=png");
  return h(Qu, {
    reference: o,
    paymentMethodType: "boletobancario",
    barcode: d,
    introduction: r.get("voucher.introduction"),
    imageUrl: rt({
      loadingContext: a
    })(s),
    amount: l && r.amount(l.value, l.currency),
    voucherDetails: [{
      label: r.get("voucher.expirationDate"),
      value: r.date(i)
    }],
    downloadUrl: c,
    copyBtn: !0
  });
};

function Yf(e, t) {
  var o = n$1(e);

  if (r$1) {
    var i = r$1(e);
    t && (i = f$1(i).call(i, function (t) {
      return a$1(e, t).enumerable;
    })), o.push.apply(o, i);
  }

  return o;
}

function $f(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n,
        r,
        s = null != arguments[t] ? arguments[t] : {};
    t % 2 ? p$1(n = Yf(Object(s), !0)).call(n, function (t) {
      _defineProperty(e, t, s[t]);
    }) : o$1 ? i(e, o$1(s)) : p$1(r = Yf(Object(s))).call(r, function (t) {
      l$1(e, t, a$1(s, t));
    });
  }

  return e;
}

function Zf(e) {
  var t = function () {
    if ("undefined" == typeof Reflect || !S) return !1;
    if (S.sham) return !1;
    if ("function" == typeof Proxy) return !0;

    try {
      return Boolean.prototype.valueOf.call(S(Boolean, [], function () {})), !0;
    } catch (e) {
      return !1;
    }
  }();

  return function () {
    var n,
        r = _getPrototypeOf(e);

    if (t) {
      var a = _getPrototypeOf(this).constructor;
      n = S(r, arguments, a);
    } else n = r.apply(this, arguments);

    return _possibleConstructorReturn(this, n);
  };
}

var Jf = function (e) {
  _inherits(n, Lt);
  var t = Zf(n);

  function n() {
    var e, r;
    _classCallCheck(this, n);

    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i];

    return r = t.call.apply(t, y$1(e = [this]).call(e, o)), _defineProperty(_assertThisInitialized(r), "handleRef", function (e) {
      r.componentRef = e;
    }), r;
  }

  return _createClass(n, [{
    key: "isValid",
    get: function () {
      return !!this.state.isValid;
    }
  }, {
    key: "formatData",
    value: function () {
      var e = this.state.data,
          t = void 0 === e ? {} : e,
          r = t.billingAddress,
          a = t.shopperEmail,
          o = t.firstName,
          i = t.lastName,
          l = t.socialSecurityNumber,
          s = void 0 === l ? "" : l;
      return $f($f($f($f({
        paymentMethod: {
          type: this.props.type || n.type
        }
      }, r && {
        billingAddress: r
      }), a && {
        shopperEmail: a
      }), o && i && {
        shopperName: {
          firstName: o,
          lastName: i
        }
      }), s && {
        socialSecurityNumber: qs(s)
      });
    }
  }, {
    key: "render",
    value: function () {
      return h(Xa, {
        i18n: this.props.i18n,
        loadingContext: this.props.loadingContext
      }, this.props.reference ? h(Gf, _extends({
        ref: this.handleRef,
        icon: this.icon
      }, this.props)) : h(Wf, _extends({
        ref: this.handleRef
      }, this.props, {
        onChange: this.setState,
        onSubmit: this.submit,
        payButton: this.payButton
      })));
    }
  }]), n;
}();

_defineProperty(Jf, "type", "boletobancario");

var Qf = function (e) {
  var t,
      n,
      r = Pt(),
      a = r.i18n,
      o = r.loadingContext,
      i = e.alternativeReference,
      l = e.reference,
      s = e.expiresAt,
      c = e.merchantReference,
      u = e.totalAmount,
      d = e.paymentMethodType,
      p = e.downloadUrl,
      f = y$1(t = "".concat(o, "barcode.shtml?data=")).call(t, l, "&barcodeType=BT_Code128C&fileType=png"),
      h$1 = y$1(n = []).call(n, _toConsumableArray(s ? [{
    label: a.get("voucher.expirationDate"),
    value: a.date(s)
  }] : []), _toConsumableArray(c ? [{
    label: a.get("voucher.shopperReference"),
    value: c
  }] : []), _toConsumableArray(i ? [{
    label: a.get("voucher.alternativeReference"),
    value: i
  }] : []));
  return h(Qu, {
    amount: u && a.amount(u.value, u.currency),
    barcode: f,
    copyBtn: !0,
    downloadUrl: p,
    imageUrl: rt({
      loadingContext: o
    })(d),
    introduction: a.get("voucher.introduction"),
    paymentMethodType: "oxxo",
    reference: l,
    voucherDetails: h$1
  });
};

function Xf(e, t) {
  var o = n$1(e);

  if (r$1) {
    var i = r$1(e);
    t && (i = f$1(i).call(i, function (t) {
      return a$1(e, t).enumerable;
    })), o.push.apply(o, i);
  }

  return o;
}

function eh(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n,
        r,
        s = null != arguments[t] ? arguments[t] : {};
    t % 2 ? p$1(n = Xf(Object(s), !0)).call(n, function (t) {
      _defineProperty(e, t, s[t]);
    }) : o$1 ? i(e, o$1(s)) : p$1(r = Xf(Object(s))).call(r, function (t) {
      l$1(e, t, a$1(s, t));
    });
  }

  return e;
}

function th(e) {
  var t = function () {
    if ("undefined" == typeof Reflect || !S) return !1;
    if (S.sham) return !1;
    if ("function" == typeof Proxy) return !0;

    try {
      return Boolean.prototype.valueOf.call(S(Boolean, [], function () {})), !0;
    } catch (e) {
      return !1;
    }
  }();

  return function () {
    var n,
        r = _getPrototypeOf(e);

    if (t) {
      var a = _getPrototypeOf(this).constructor;
      n = S(r, arguments, a);
    } else n = r.apply(this, arguments);

    return _possibleConstructorReturn(this, n);
  };
}

var nh = function (e) {
  _inherits(n, Lt);
  var t = th(n);

  function n() {
    var e, r;
    _classCallCheck(this, n);

    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i];

    return r = t.call.apply(t, y$1(e = [this]).call(e, o)), _defineProperty(_assertThisInitialized(r), "handleRef", function (e) {
      r.componentRef = e;
    }), r;
  }

  return _createClass(n, [{
    key: "isValid",
    get: function () {
      return !0;
    }
  }, {
    key: "formatProps",
    value: function (e) {
      return eh(eh({}, e), {}, {
        name: "Oxxo"
      });
    }
  }, {
    key: "formatData",
    value: function () {
      return {
        paymentMethod: {
          type: this.props.type || n.type
        }
      };
    }
  }, {
    key: "render",
    value: function () {
      var e;
      return h(Xa, {
        i18n: this.props.i18n,
        loadingContext: this.props.loadingContext
      }, this.props.reference ? h(Qf, _extends({
        ref: this.handleRef
      }, this.props)) : this.payButton(eh(eh({}, this.props), {}, {
        classNameModifiers: ["standalone"],
        label: y$1(e = "".concat(this.props.i18n.get("continueTo"), " ")).call(e, this.props.name),
        onClick: this.submit
      })));
    }
  }]), n;
}();

_defineProperty(nh, "type", "oxxo");

var rh = function (e) {
  var t,
      n = Pt(),
      r = n.i18n,
      a = n.loadingContext,
      o = e.entity,
      i = e.reference,
      l = e.expiresAt,
      s = e.merchantReference,
      c = e.totalAmount,
      u = e.paymentMethodType,
      d = e.downloadUrl,
      p = y$1(t = []).call(t, _toConsumableArray(o ? [{
    label: r.get("voucher.entity"),
    value: o
  }] : []), _toConsumableArray(l ? [{
    label: r.get("voucher.expirationDate"),
    value: r.date(l)
  }] : []), _toConsumableArray(s ? [{
    label: r.get("voucher.shopperReference"),
    value: s
  }] : []));
  return h(Qu, {
    amount: c && r.amount(c.value, c.currency),
    barcode: null,
    copyBtn: !0,
    downloadUrl: d,
    imageUrl: rt({
      loadingContext: a
    })(u),
    introduction: r.get("voucher.introduction"),
    paymentMethodType: "multibanco",
    reference: i,
    voucherDetails: p
  });
};

function ah(e, t) {
  var o = n$1(e);

  if (r$1) {
    var i = r$1(e);
    t && (i = f$1(i).call(i, function (t) {
      return a$1(e, t).enumerable;
    })), o.push.apply(o, i);
  }

  return o;
}

function oh(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n,
        r,
        s = null != arguments[t] ? arguments[t] : {};
    t % 2 ? p$1(n = ah(Object(s), !0)).call(n, function (t) {
      _defineProperty(e, t, s[t]);
    }) : o$1 ? i(e, o$1(s)) : p$1(r = ah(Object(s))).call(r, function (t) {
      l$1(e, t, a$1(s, t));
    });
  }

  return e;
}

function ih(e) {
  var t = function () {
    if ("undefined" == typeof Reflect || !S) return !1;
    if (S.sham) return !1;
    if ("function" == typeof Proxy) return !0;

    try {
      return Boolean.prototype.valueOf.call(S(Boolean, [], function () {})), !0;
    } catch (e) {
      return !1;
    }
  }();

  return function () {
    var n,
        r = _getPrototypeOf(e);

    if (t) {
      var a = _getPrototypeOf(this).constructor;
      n = S(r, arguments, a);
    } else n = r.apply(this, arguments);

    return _possibleConstructorReturn(this, n);
  };
}

var lh = function (e) {
  _inherits(n, Lt);
  var t = ih(n);

  function n() {
    var e, r;
    _classCallCheck(this, n);

    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i];

    return r = t.call.apply(t, y$1(e = [this]).call(e, o)), _defineProperty(_assertThisInitialized(r), "handleRef", function (e) {
      r.componentRef = e;
    }), r;
  }

  return _createClass(n, [{
    key: "isValid",
    get: function () {
      return !0;
    }
  }, {
    key: "formatProps",
    value: function (e) {
      return oh(oh({}, e), {}, {
        name: e.name || "Multibanco"
      });
    }
  }, {
    key: "formatData",
    value: function () {
      return {
        paymentMethod: {
          type: this.props.type || n.type
        }
      };
    }
  }, {
    key: "render",
    value: function () {
      var e = this;
      return this.props.reference ? h(Xa, {
        i18n: this.props.i18n,
        loadingContext: this.props.loadingContext
      }, h(rh, _extends({
        ref: this.handleRef
      }, this.props))) : this.props.showPayButton ? h(Xa, {
        i18n: this.props.i18n,
        loadingContext: this.props.loadingContext
      }, h(gu, {
        name: this.displayName,
        amount: this.props.amount,
        payButton: this.payButton,
        onSubmit: this.submit,
        ref: function (t) {
          e.componentRef = t;
        }
      })) : null;
    }
  }]), n;
}();

function sh(e) {
  var t = function () {
    if ("undefined" == typeof Reflect || !S) return !1;
    if (S.sham) return !1;
    if ("function" == typeof Proxy) return !0;

    try {
      return Boolean.prototype.valueOf.call(S(Boolean, [], function () {})), !0;
    } catch (e) {
      return !1;
    }
  }();

  return function () {
    var n,
        r = _getPrototypeOf(e);

    if (t) {
      var a = _getPrototypeOf(this).constructor;
      n = S(r, arguments, a);
    } else n = r.apply(this, arguments);

    return _possibleConstructorReturn(this, n);
  };
}

_defineProperty(lh, "type", "multibanco"), _defineProperty(lh, "defaultProps", {
  showPayButton: !0
});

var ch = function (e) {
  _inherits(n, _i);
  var t = sh(n);

  function n() {
    return _classCallCheck(this, n), t.apply(this, arguments);
  }

  return _createClass(n);
}();

function uh(e, t) {
  var o = n$1(e);

  if (r$1) {
    var i = r$1(e);
    t && (i = f$1(i).call(i, function (t) {
      return a$1(e, t).enumerable;
    })), o.push.apply(o, i);
  }

  return o;
}

function dh(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n,
        r,
        s = null != arguments[t] ? arguments[t] : {};
    t % 2 ? p$1(n = uh(Object(s), !0)).call(n, function (t) {
      _defineProperty(e, t, s[t]);
    }) : o$1 ? i(e, o$1(s)) : p$1(r = uh(Object(s))).call(r, function (t) {
      l$1(e, t, a$1(s, t));
    });
  }

  return e;
}

function ph(e) {
  var t = function () {
    if ("undefined" == typeof Reflect || !S) return !1;
    if (S.sham) return !1;
    if ("function" == typeof Proxy) return !0;

    try {
      return Boolean.prototype.valueOf.call(S(Boolean, [], function () {})), !0;
    } catch (e) {
      return !1;
    }
  }();

  return function () {
    var n,
        r = _getPrototypeOf(e);

    if (t) {
      var a = _getPrototypeOf(this).constructor;
      n = S(r, arguments, a);
    } else n = r.apply(this, arguments);

    return _possibleConstructorReturn(this, n);
  };
}

_defineProperty(ch, "type", "dotpay");

var fh = function (e) {
  _inherits(n, _i);
  var t = ph(n);

  function n() {
    return _classCallCheck(this, n), t.apply(this, arguments);
  }

  return _createClass(n, [{
    key: "formatProps",
    value: function (e) {
      return dh(dh({}, _get(_getPrototypeOf(n.prototype), "formatProps", this).call(this, e)), {}, {
        showImage: !1
      });
    }
  }]), n;
}();

function hh(e) {
  var t = e.children,
      n = e.classNames,
      r = void 0 === n ? [] : n,
      a = e.type,
      o = void 0 === a ? "error" : a,
      i = e.icon;
  return h("div", {
    className: H("adyen-checkout__alert-message", "adyen-checkout__alert-message--".concat(o), r)
  }, i && h(cn, {
    className: "adyen-checkout__alert-message__icon",
    type: i
  }), t);
}

_defineProperty(fh, "type", "eps");
var yh = ["brand", "amount", "balance", "transactionLimit"];

function mh(e) {
  e.brand;
  var t = e.amount,
      n = e.balance,
      r = e.transactionLimit,
      a = _objectWithoutProperties(e, yh),
      o = Pt().i18n,
      i = t.value > (null == r ? void 0 : r.value) ? r : t,
      l = (null == n ? void 0 : n.value) - (null == i ? void 0 : i.value);
  return h("div", {
    className: "adyen-checkout__giftcard-result"
  }, h("ul", {
    className: "adyen-checkout__giftcard-result__balance"
  }, h("li", {
    className: "adyen-checkout__giftcard-result__balance__item"
  }, h("span", {
    className: "adyen-checkout__giftcard-result__balance__title"
  }, o.get("giftcardBalance")), h("span", {
    className: "adyen-checkout__giftcard-result__balance__value adyen-checkout__giftcard-result__balance__value--amount"
  }, o.amount(n.value, n.currency))), r && r.value && h("li", {
    className: "adyen-checkout__giftcard-result__balance__item"
  }, h("span", {
    className: "adyen-checkout__giftcard-result__balance__title adyen-checkout__giftcard-result__balance__title--transactionLimit"
  }, o.get("giftcardTransactionLimit", {
    values: {
      amount: o.amount(r.value, r.currency)
    }
  })))), this.props.showPayButton && this.props.payButton({
    amount: i,
    status: a.status,
    onClick: a.onSubmit
  }), h("p", {
    className: "adyen-checkout__giftcard-result__remaining-balance"
  }, o.get("partialPayment.remainingBalance", {
    values: {
      amount: o.amount(l, n.currency)
    }
  })));
}

var vh = function (e) {
  var t,
      n = e.i18n,
      r = e.classNameModifiers,
      a = e.sfpState,
      o = e.getCardErrorMessage,
      i = e.focusedElement,
      l = e.setFocusOn;
  return h(yn, {
    label: n.get("creditCard.numberField.title"),
    classNameModifiers: y$1(t = ["number"]).call(t, _toConsumableArray(r)),
    errorMessage: o(a),
    focused: "encryptedCardNumber" === i,
    onFocusField: function () {
      return l("encryptedCardNumber");
    },
    dir: "ltr",
    name: "encryptedCardNumber"
  }, h(yc, {
    encryptedFieldType: "encryptedCardNumber",
    "data-info": '{"length":"15-32", "maskInterval":4}',
    className: H({
      "adyen-checkout__input": !0,
      "adyen-checkout__input--large": !0,
      "adyen-checkout__card__cardNumber__input": !0,
      "adyen-checkout__input--error": o(a),
      "adyen-checkout__input--focus": "encryptedCardNumber" === i
    })
  }));
},
    gh = function (e) {
  var t,
      n = e.i18n,
      r = e.classNameModifiers,
      a = e.sfpState,
      o = e.focusedElement,
      i = e.setFocusOn;
  return h(yn, {
    label: n.get("creditCard.pin.title"),
    classNameModifiers: y$1(t = ["pin"]).call(t, _toConsumableArray(r)),
    errorMessage: a.errors.encryptedSecurityCode && n.get(a.errors.encryptedSecurityCode),
    focused: "encryptedSecurityCode" === o,
    onFocusField: function () {
      return i("encryptedSecurityCode");
    },
    dir: "ltr",
    name: "encryptedSecurityCode"
  }, h(yc, {
    encryptedFieldType: "encryptedSecurityCode",
    "data-info": '{"length":"3-10", "maskInterval": 0}',
    className: H({
      "adyen-checkout__input": !0,
      "adyen-checkout__input--large": !0,
      "adyen-checkout__card__cvc__input": !0,
      "adyen-checkout__input--error": a.errors.encryptedSecurityCode,
      "adyen-checkout__input--focus": "encryptedSecurityCode" === o
    })
  }));
};

function bh(e) {
  var t = function () {
    if ("undefined" == typeof Reflect || !S) return !1;
    if (S.sham) return !1;
    if ("function" == typeof Proxy) return !0;

    try {
      return Boolean.prototype.valueOf.call(S(Boolean, [], function () {})), !0;
    } catch (e) {
      return !1;
    }
  }();

  return function () {
    var n,
        r = _getPrototypeOf(e);

    if (t) {
      var a = _getPrototypeOf(this).constructor;
      n = S(r, arguments, a);
    } else n = r.apply(this, arguments);

    return _possibleConstructorReturn(this, n);
  };
}

var _h = function (e) {
  _inherits(n, d);
  var t = bh(n);

  function n() {
    var e, r;
    _classCallCheck(this, n);

    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i];

    return r = t.call.apply(t, y$1(e = [this]).call(e, o)), _defineProperty(_assertThisInitialized(r), "state", {
      status: "ready",
      data: {},
      balance: null,
      transactionLimit: null,
      focusedElement: !1,
      isValid: !1
    }), _defineProperty(_assertThisInitialized(r), "sfp", void 0), _defineProperty(_assertThisInitialized(r), "onChange", function (e) {
      r.props.onChange({
        data: e.data,
        isValid: e.isSfpValid
      });
    }), _defineProperty(_assertThisInitialized(r), "showValidation", function () {
      r.sfp.showValidation();
    }), _defineProperty(_assertThisInitialized(r), "handleFocus", function (e) {
      r.setState({
        focusedElement: e.currentFocusObject
      }), !0 === e.focus ? r.props.onFocus(e) : r.props.onBlur(e);
    }), _defineProperty(_assertThisInitialized(r), "setBalance", function (e) {
      var t = e.balance,
          n = e.transactionLimit;
      r.setState({
        balance: t,
        transactionLimit: n
      });
    }), r;
  }

  return _createClass(n, [{
    key: "setStatus",
    value: function (e) {
      this.setState({
        status: e
      });
    }
  }, {
    key: "render",
    value: function (e, t) {
      var n,
          r = this,
          a = t.focusedElement,
          o = t.balance,
          i = t.transactionLimit,
          l = Pt().i18n,
          s = (null == i ? void 0 : i.value) < (null == o ? void 0 : o.value) ? i : o,
          c = (null == s ? void 0 : s.value) >= (null === (n = this.props.amount) || void 0 === n ? void 0 : n.value);
      if (s && c) return h(mh, _extends({
        balance: o,
        transactionLimit: i,
        onSubmit: e.onSubmit
      }, e));

      var u = function (e) {
        if (e.errors.encryptedCardNumber) return l.get("error.va.gen.01");

        switch (r.state.status) {
          case "no-balance":
            return l.get("error.giftcard.no-balance");

          case "card-error":
            return l.get("error.giftcard.card-error");

          case "currency-error":
            return l.get("error.giftcard.currency-error");

          default:
            return null;
        }
      };

      return h("div", {
        className: "adyen-checkout__giftcard"
      }, "error" === this.state.status && h(hh, {
        icon: "cross"
      }, l.get("error.message.unknown")), h(Is, _extends({}, this.props, {
        ref: function (e) {
          r.sfp = e;
        },
        onChange: this.onChange,
        onFocus: this.handleFocus,
        type: "giftcard",
        render: function (e, t) {
          var n = e.setRootNode,
              o = e.setFocusOn;
          return r.props.fieldsLayoutComponent({
            i18n: l,
            pinRequired: r.props.pinRequired,
            focusedElement: a,
            getCardErrorMessage: u,
            setRootNode: n,
            setFocusOn: o,
            sfpState: t
          });
        }
      })), this.props.showPayButton && this.props.payButton({
        status: this.state.status,
        onClick: this.props.onBalanceCheck,
        label: l.get("applyGiftcard")
      }));
    }
  }]), n;
}();

function Ch(e, t) {
  var o = n$1(e);

  if (r$1) {
    var i = r$1(e);
    t && (i = f$1(i).call(i, function (t) {
      return a$1(e, t).enumerable;
    })), o.push.apply(o, i);
  }

  return o;
}

function kh(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n,
        r,
        s = null != arguments[t] ? arguments[t] : {};
    t % 2 ? p$1(n = Ch(Object(s), !0)).call(n, function (t) {
      _defineProperty(e, t, s[t]);
    }) : o$1 ? i(e, o$1(s)) : p$1(r = Ch(Object(s))).call(r, function (t) {
      l$1(e, t, a$1(s, t));
    });
  }

  return e;
}

function Nh(e) {
  var t = function () {
    if ("undefined" == typeof Reflect || !S) return !1;
    if (S.sham) return !1;
    if ("function" == typeof Proxy) return !0;

    try {
      return Boolean.prototype.valueOf.call(S(Boolean, [], function () {})), !0;
    } catch (e) {
      return !1;
    }
  }();

  return function () {
    var n,
        r = _getPrototypeOf(e);

    if (t) {
      var a = _getPrototypeOf(this).constructor;
      n = S(r, arguments, a);
    } else n = r.apply(this, arguments);

    return _possibleConstructorReturn(this, n);
  };
}

_defineProperty(_h, "defaultProps", {
  pinRequired: !0,
  expiryDateRequired: !1,
  onChange: function () {},
  onFocus: function () {},
  onBlur: function () {},
  fieldsLayoutComponent: function (e) {
    var t = e.setRootNode,
        n = e.pinRequired;
    return h("div", {
      ref: t,
      className: "adyen-checkout__field-wrapper"
    }, h(vh, _extends({}, e, {
      classNameModifiers: n ? ["70"] : ["100"]
    })), n && h(gh, _extends({}, e, {
      classNameModifiers: ["30"]
    })));
  }
});

var wh = function (e) {
  _inherits(n, Lt);
  var t = Nh(n);

  function n() {
    var e, r;
    _classCallCheck(this, n);

    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i];

    return r = t.call.apply(t, y$1(e = [this]).call(e, o)), _defineProperty(_assertThisInitialized(r), "handleBalanceCheck", function (e) {
      return r.props.onBalanceCheck ? new v$1(function (t, n) {
        r.props.onBalanceCheck(t, n, e);
      }) : r.props.session ? r.props.session.checkBalance(e) : void 0;
    }), _defineProperty(_assertThisInitialized(r), "onOrderRequest", function (e) {
      return r.props.onOrderRequest ? new v$1(function (t, n) {
        r.props.onOrderRequest(t, n, e);
      }) : r.props.session ? r.props.session.createOrder() : void 0;
    }), _defineProperty(_assertThisInitialized(r), "handleOrder", function (e) {
      if (r.elementRef._parentInstance.update({
        order: e
      }), r.props.session && r.props.onOrderCreated) return r.props.onOrderCreated(e);
    }), _defineProperty(_assertThisInitialized(r), "onBalanceCheck", function () {
      return r.props.session || r.props.onBalanceCheck ? r.isValid ? (r.setStatus("loading"), void r.handleBalanceCheck(r.formatData()).then(function (e) {
        var t,
            n = e.balance,
            a = e.transactionLimit,
            o = void 0 === a ? {} : a;
        if (!n) throw new Error("card-error");
        if ((null == n ? void 0 : n.currency) !== (null === (t = r.props.amount) || void 0 === t ? void 0 : t.currency)) throw new Error("currency-error");
        if ((null == n ? void 0 : n.value) <= 0) throw new Error("no-balance");
        if (r.componentRef.setBalance({
          balance: n,
          transactionLimit: o
        }), r.props.amount.value > n.value || r.props.amount.value > o.value) return r.props.order ? r.submit() : r.onOrderRequest(r.data).then(function (e) {
          r.setState({
            order: {
              orderData: e.orderData,
              pspReference: e.pspReference
            }
          }), r.submit();
        });
        r.props.onRequiringConfirmation && r.props.onRequiringConfirmation();
      }).catch(function (e) {
        r.setStatus((null == e ? void 0 : e.message) || "error"), r.props.onError && r.handleError(new Mt("ERROR", e));
      })) : (r.showValidation(), !1) : r.submit();
    }), _defineProperty(_assertThisInitialized(r), "payButton", function (e) {
      return h(Rt, e);
    }), r;
  }

  return _createClass(n, [{
    key: "formatProps",
    value: function (e) {
      return kh(kh({}, null == e ? void 0 : e.configuration), e);
    }
  }, {
    key: "formatData",
    value: function () {
      var e, t;
      return {
        paymentMethod: {
          type: this.constructor.type,
          brand: this.props.brand,
          encryptedCardNumber: null === (e = this.state.data) || void 0 === e ? void 0 : e.encryptedCardNumber,
          encryptedSecurityCode: null === (t = this.state.data) || void 0 === t ? void 0 : t.encryptedSecurityCode
        }
      };
    }
  }, {
    key: "isValid",
    get: function () {
      return !!this.state.isValid;
    }
  }, {
    key: "icon",
    get: function () {
      var e;
      return (null === (e = this.props.brandsConfiguration[this.props.brand]) || void 0 === e ? void 0 : e.icon) || this.props.icon || rt({
        loadingContext: this.props.loadingContext
      })(this.props.brand);
    }
  }, {
    key: "displayName",
    get: function () {
      var e;
      return (null === (e = this.props.brandsConfiguration[this.props.brand]) || void 0 === e ? void 0 : e.name) || this.props.name;
    }
  }, {
    key: "balanceCheck",
    value: function () {
      return this.onBalanceCheck();
    }
  }, {
    key: "render",
    value: function () {
      var e = this;
      return h(Xa, {
        i18n: this.props.i18n,
        loadingContext: this.props.loadingContext
      }, h(_h, _extends({
        ref: function (t) {
          e.componentRef = t;
        }
      }, this.props, {
        onChange: this.setState,
        onBalanceCheck: this.onBalanceCheck,
        onSubmit: this.submit,
        payButton: this.payButton
      })));
    }
  }]), n;
}();

function Sh(e) {
  var t = function () {
    if ("undefined" == typeof Reflect || !S) return !1;
    if (S.sham) return !1;
    if ("function" == typeof Proxy) return !0;

    try {
      return Boolean.prototype.valueOf.call(S(Boolean, [], function () {})), !0;
    } catch (e) {
      return !1;
    }
  }();

  return function () {
    var n,
        r = _getPrototypeOf(e);

    if (t) {
      var a = _getPrototypeOf(this).constructor;
      n = S(r, arguments, a);
    } else n = r.apply(this, arguments);

    return _possibleConstructorReturn(this, n);
  };
}

_defineProperty(wh, "type", "giftcard"), _defineProperty(wh, "defaultProps", {
  brandsConfiguration: {}
});

var xh = function (e) {
  _inherits(n, ku);
  var t = Sh(n);

  function n() {
    return _classCallCheck(this, n), t.apply(this, arguments);
  }

  return _createClass(n);
}();

function Ph(e, t) {
  var o = n$1(e);

  if (r$1) {
    var i = r$1(e);
    t && (i = f$1(i).call(i, function (t) {
      return a$1(e, t).enumerable;
    })), o.push.apply(o, i);
  }

  return o;
}

function Fh(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n,
        r,
        s = null != arguments[t] ? arguments[t] : {};
    t % 2 ? p$1(n = Ph(Object(s), !0)).call(n, function (t) {
      _defineProperty(e, t, s[t]);
    }) : o$1 ? i(e, o$1(s)) : p$1(r = Ph(Object(s))).call(r, function (t) {
      l$1(e, t, a$1(s, t));
    });
  }

  return e;
}

function Ah(e) {
  var t = function () {
    if ("undefined" == typeof Reflect || !S) return !1;
    if (S.sham) return !1;
    if ("function" == typeof Proxy) return !0;

    try {
      return Boolean.prototype.valueOf.call(S(Boolean, [], function () {})), !0;
    } catch (e) {
      return !1;
    }
  }();

  return function () {
    var n,
        r = _getPrototypeOf(e);

    if (t) {
      var a = _getPrototypeOf(this).constructor;
      n = S(r, arguments, a);
    } else n = r.apply(this, arguments);

    return _possibleConstructorReturn(this, n);
  };
}

_defineProperty(xh, "type", "vipps"), _defineProperty(xh, "defaultProps", {
  type: xh.type,
  showPayButton: !0,
  name: "Vipps"
});

var Bh = function (e) {
  _inherits(n, _i);
  var t = Ah(n);

  function n() {
    return _classCallCheck(this, n), t.apply(this, arguments);
  }

  return _createClass(n, [{
    key: "formatProps",
    value: function (e) {
      return Fh(Fh({}, _get(_getPrototypeOf(n.prototype), "formatProps", this).call(this, e)), {}, {
        showImage: !1
      });
    }
  }]), n;
}();

function Eh(e, t) {
  var o = n$1(e);

  if (r$1) {
    var i = r$1(e);
    t && (i = f$1(i).call(i, function (t) {
      return a$1(e, t).enumerable;
    })), o.push.apply(o, i);
  }

  return o;
}

function Rh(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n,
        r,
        s = null != arguments[t] ? arguments[t] : {};
    t % 2 ? p$1(n = Eh(Object(s), !0)).call(n, function (t) {
      _defineProperty(e, t, s[t]);
    }) : o$1 ? i(e, o$1(s)) : p$1(r = Eh(Object(s))).call(r, function (t) {
      l$1(e, t, a$1(s, t));
    });
  }

  return e;
}

function Oh(e) {
  var t = function () {
    if ("undefined" == typeof Reflect || !S) return !1;
    if (S.sham) return !1;
    if ("function" == typeof Proxy) return !0;

    try {
      return Boolean.prototype.valueOf.call(S(Boolean, [], function () {})), !0;
    } catch (e) {
      return !1;
    }
  }();

  return function () {
    var n,
        r = _getPrototypeOf(e);

    if (t) {
      var a = _getPrototypeOf(this).constructor;
      n = S(r, arguments, a);
    } else n = r.apply(this, arguments);

    return _possibleConstructorReturn(this, n);
  };
}

_defineProperty(Bh, "type", "payu_IN_cashcard");

var Dh = function (e) {
  _inherits(n, _i);
  var t = Oh(n);

  function n() {
    return _classCallCheck(this, n), t.apply(this, arguments);
  }

  return _createClass(n, [{
    key: "formatProps",
    value: function (e) {
      return Rh(Rh({}, _get(_getPrototypeOf(n.prototype), "formatProps", this).call(this, e)), {}, {
        showImage: !1
      });
    }
  }]), n;
}();

_defineProperty(Dh, "type", "payu_IN_nb");
var Mh = ["AT", "CH", "DE", "NL"];

function Th(e, t) {
  var o = n$1(e);

  if (r$1) {
    var i = r$1(e);
    t && (i = f$1(i).call(i, function (t) {
      return a$1(e, t).enumerable;
    })), o.push.apply(o, i);
  }

  return o;
}

function Ih(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n,
        r,
        s = null != arguments[t] ? arguments[t] : {};
    t % 2 ? p$1(n = Th(Object(s), !0)).call(n, function (t) {
      _defineProperty(e, t, s[t]);
    }) : o$1 ? i(e, o$1(s)) : p$1(r = Th(Object(s))).call(r, function (t) {
      l$1(e, t, a$1(s, t));
    });
  }

  return e;
}

function jh(e) {
  var t = function () {
    if ("undefined" == typeof Reflect || !S) return !1;
    if (S.sham) return !1;
    if ("function" == typeof Proxy) return !0;

    try {
      return Boolean.prototype.valueOf.call(S(Boolean, [], function () {})), !0;
    } catch (e) {
      return !1;
    }
  }();

  return function () {
    var n,
        r = _getPrototypeOf(e);

    if (t) {
      var a = _getPrototypeOf(this).constructor;
      n = S(r, arguments, a);
    } else n = r.apply(this, arguments);

    return _possibleConstructorReturn(this, n);
  };
}

var Vh = function (e) {
  _inherits(n, ro);
  var t = jh(n);

  function n() {
    return _classCallCheck(this, n), t.apply(this, arguments);
  }

  return _createClass(n, [{
    key: "formatProps",
    value: function (e) {
      return Ih(Ih({}, _get(_getPrototypeOf(n.prototype), "formatProps", this).call(this, e)), {}, {
        allowedCountries: e.countryCode ? [e.countryCode] : Mh
      });
    }
  }]), n;
}();

function Lh(e, t) {
  var o = n$1(e);

  if (r$1) {
    var i = r$1(e);
    t && (i = f$1(i).call(i, function (t) {
      return a$1(e, t).enumerable;
    })), o.push.apply(o, i);
  }

  return o;
}

function Uh(e) {
  var t = function () {
    if ("undefined" == typeof Reflect || !S) return !1;
    if (S.sham) return !1;
    if ("function" == typeof Proxy) return !0;

    try {
      return Boolean.prototype.valueOf.call(S(Boolean, [], function () {})), !0;
    } catch (e) {
      return !1;
    }
  }();

  return function () {
    var n,
        r = _getPrototypeOf(e);

    if (t) {
      var a = _getPrototypeOf(this).constructor;
      n = S(r, arguments, a);
    } else n = r.apply(this, arguments);

    return _possibleConstructorReturn(this, n);
  };
}

_defineProperty(Vh, "type", "ratepay");

var qh = function (e) {
  _inherits(n, df);
  var t = Uh(n);

  function n() {
    return _classCallCheck(this, n), t.apply(this, arguments);
  }

  return _createClass(n, [{
    key: "formatProps",
    value: function (e) {
      return function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n,
              r,
              s = null != arguments[t] ? arguments[t] : {};
          t % 2 ? p$1(n = Lh(Object(s), !0)).call(n, function (t) {
            _defineProperty(e, t, s[t]);
          }) : o$1 ? i(e, o$1(s)) : p$1(r = Lh(Object(s))).call(r, function (t) {
            l$1(e, t, a$1(s, t));
          });
        }

        return e;
      }({
        shouldRedirectOnMobile: !0,
        delay: 2e3,
        countdownTime: 3,
        instructions: "swish.pendingMessage"
      }, _get(_getPrototypeOf(n.prototype), "formatProps", this).call(this, e));
    }
  }]), n;
}();

_defineProperty(qh, "type", "swish");

var Kh = function (e) {
  var t = e.paymentMethodComponent,
      n = e.isLoaded;
  return t && n ? h("div", {
    className: "adyen-checkout__payment-method__details__content"
  }, t) : null;
},
    Hh = {
  "adyen-checkout__payment-methods-list": "DropinComponent-module_adyen-checkout__payment-methods-list__mAjAm",
  "adyen-checkout__payment-method": "DropinComponent-module_adyen-checkout__payment-method__nWdwg",
  "adyen-checkout__payment-method__details": "DropinComponent-module_adyen-checkout__payment-method__details__-rsW7",
  "adyen-checkout__payment-method__image": "DropinComponent-module_adyen-checkout__payment-method__image__nB80V",
  "adyen-checkout__payment-method__image__wrapper": "DropinComponent-module_adyen-checkout__payment-method__image__wrapper__6NWzA",
  "adyen-checkout__payment-method--selected": "DropinComponent-module_adyen-checkout__payment-method--selected__6egZF"
},
    zh = ["googlepay", "paywithgoogle"],
    Wh = function (e) {
  var t = e.src,
      n = e.altDescription,
      r = e.type,
      a = e.disabled,
      o = void 0 !== a && a;
  return h("span", {
    className: H("adyen-checkout__payment-method__image__wrapper", Hh["adyen-checkout__payment-method__image__wrapper"], {
      "adyen-checkout__payment-method__image__wrapper--outline": !h$1(zh).call(zh, r),
      "adyen-checkout__payment-method__image__wrapper--disabled": !!o
    })
  }, h(Mn, {
    className: "adyen-checkout__payment-method__image ".concat(Hh["adyen-checkout__payment-method__image"]),
    src: t,
    alt: n
  }));
},
    Gh = function (e) {
  var t = e.id,
      n = e.open,
      r = e.onDisable,
      a = e.onCancel,
      o = Pt().i18n;
  return h("div", {
    id: t,
    "aria-hidden": !n,
    className: H({
      "adyen-checkout__payment-method__disable-confirmation": !0,
      "adyen-checkout__payment-method__disable-confirmation--open": n
    })
  }, h("div", {
    className: "adyen-checkout__payment-method__disable-confirmation__content"
  }, o.get("storedPaymentMethod.disable.confirmation"), h("div", {
    className: "adyen-checkout__payment-method__disable-confirmation__buttons"
  }, h("button", {
    type: "button",
    className: H("adyen-checkout__button", "adyen-checkout__payment-method__disable-confirmation__button", "adyen-checkout__payment-method__disable-confirmation__button--remove"),
    disabled: !n,
    onClick: r
  }, o.get("storedPaymentMethod.disable.confirmButton")), h("button", {
    type: "button",
    className: H("adyen-checkout__button", "adyen-checkout__payment-method__disable-confirmation__button", "adyen-checkout__payment-method__disable-confirmation__button--cancel"),
    disabled: !n,
    onClick: a
  }, o.get("storedPaymentMethod.disable.cancelButton")))));
},
    Yh = function (e) {
  var t = e.brands;
  if (e.isPaymentMethodSelected) return null;

  var n = function (e) {
    var t = e.length <= 4 ? e : G(e).call(e, 0, 3);
    return {
      visibleBrands: t,
      leftBrandsAmount: e.length - t.length
    };
  }(t),
      r = n.visibleBrands,
      a = n.leftBrandsAmount;

  return h("span", {
    className: "adyen-checkout__payment-method__brands"
  }, K(r).call(r, function (e) {
    return h(Wh, {
      key: e.name,
      altDescription: e.name,
      type: e.name,
      src: e.icon
    });
  }), 0 !== a && h("span", {
    className: "adyen-checkout__payment-method__brand-number"
  }, "+", a));
},
    $h = function (e) {
  var t = e.activeBrand,
      n = e.brands,
      r = e.isPaymentMethodSelected,
      a = e.isCompactView;
  return void 0 === a || a ? h(Yh, {
    brands: n,
    isPaymentMethodSelected: r
  }) : h("span", {
    className: "adyen-checkout__payment-method__brands"
  }, K(n).call(n, function (e) {
    return h(Wh, {
      key: e.name,
      altDescription: e.name,
      type: e.name,
      src: e.icon,
      disabled: t && t !== e.name
    });
  }));
};

function Zh(e) {
  var t = function () {
    if ("undefined" == typeof Reflect || !S) return !1;
    if (S.sham) return !1;
    if ("function" == typeof Proxy) return !0;

    try {
      return Boolean.prototype.valueOf.call(S(Boolean, [], function () {})), !0;
    } catch (e) {
      return !1;
    }
  }();

  return function () {
    var n,
        r = _getPrototypeOf(e);

    if (t) {
      var a = _getPrototypeOf(this).constructor;
      n = S(r, arguments, a);
    } else n = r.apply(this, arguments);

    return _possibleConstructorReturn(this, n);
  };
}

var Jh = function (e) {
  _inherits(n, d);
  var t = Zh(n);

  function n() {
    var e, r;
    _classCallCheck(this, n);

    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i];

    return r = t.call.apply(t, y$1(e = [this]).call(e, o)), _defineProperty(_assertThisInitialized(r), "state", {
      showDisableStoredPaymentMethodConfirmation: !1,
      activeBrand: null
    }), _defineProperty(_assertThisInitialized(r), "isMouseDown", !1), _defineProperty(_assertThisInitialized(r), "onFocus", function () {
      r.isMouseDown || r.props.onSelect();
    }), _defineProperty(_assertThisInitialized(r), "onClick", function () {
      r.props.onSelect();
    }), _defineProperty(_assertThisInitialized(r), "onMouseDown", function () {
      r.isMouseDown = !0;
    }), _defineProperty(_assertThisInitialized(r), "onMouseUp", function () {
      r.isMouseDown = !1;
    }), _defineProperty(_assertThisInitialized(r), "toggleDisableConfirmation", function () {
      r.setState({
        showDisableStoredPaymentMethodConfirmation: !r.state.showDisableStoredPaymentMethodConfirmation
      });
    }), _defineProperty(_assertThisInitialized(r), "onDisableStoredPaymentMethod", function () {
      r.props.onDisableStoredPaymentMethod(r.props.paymentMethod), r.toggleDisableConfirmation();
    }), r;
  }

  return _createClass(n, [{
    key: "componentDidMount",
    value: function () {
      var e = this;
      this.props.paymentMethod.eventEmitter.on("brand", function (t) {
        e.setState({
          activeBrand: t.brand
        });
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function () {
      var e = this;
      this.props.paymentMethod.eventEmitter.off("brand", function (t) {
        e.setState({
          activeBrand: t.brand
        });
      });
    }
  }, {
    key: "render",
    value: function (e, t) {
      var n,
          r,
          a = e.paymentMethod,
          o = e.isSelected,
          i = e.isDisabling,
          l = e.isLoaded,
          s = e.isLoading,
          c = e.onSelect,
          u = e.standalone,
          p = t.activeBrand,
          f = Pt().i18n;
      if (!a) return null;
      var h$1 = H((_defineProperty(r = {
        "adyen-checkout__payment-method": !0
      }, Hh["adyen-checkout__payment-method"], !0), _defineProperty(r, "adyen-checkout__payment-method--".concat(a.props.type), !0), _defineProperty(r, "adyen-checkout__payment-method--".concat(null !== (n = a.props.fundingSource) && void 0 !== n ? n : "credit"), !0), _defineProperty(r, "adyen-checkout__payment-method--selected", o), _defineProperty(r, Hh["adyen-checkout__payment-method--selected"], o), _defineProperty(r, "adyen-checkout__payment-method--loading", s), _defineProperty(r, "adyen-checkout__payment-method--disabling", i), _defineProperty(r, "adyen-checkout__payment-method--confirming", this.state.showDisableStoredPaymentMethodConfirmation), _defineProperty(r, "adyen-checkout__payment-method--standalone", u), _defineProperty(r, Hh["adyen-checkout__payment-method--loading"], s), _defineProperty(r, a._id, !0), _defineProperty(r, this.props.className, !0), r)),
          y = this.props.showRemovePaymentMethodButton && a.props.oneClick && o,
          m = "remove-".concat(a._id),
          v = "container-".concat(a._id),
          g = "button-".concat(a._id),
          b = !a.props.oneClick && a.brands && a.brands.length > 0;
      return h("li", {
        key: a._id,
        className: h$1,
        onFocus: this.onFocus,
        onClick: c,
        onMouseDown: this.onMouseDown,
        onMouseUp: this.onMouseUp,
        "aria-labelledby": g
      }, h("div", {
        className: "adyen-checkout__payment-method__header"
      }, h("button", {
        className: "adyen-checkout__payment-method__header__title",
        id: g,
        "aria-label": a.accessibleName,
        "aria-expanded": o,
        "aria-controls": v,
        onClick: c,
        type: "button"
      }, h("span", {
        className: H({
          "adyen-checkout__payment-method__radio": !0,
          "adyen-checkout__payment-method__radio--selected": o
        }),
        "aria-hidden": "true"
      }), h(Wh, {
        altDescription: a.props.name,
        type: a.type,
        src: a.icon
      }), h("span", {
        className: H({
          "adyen-checkout__payment-method__name": !0,
          "adyen-checkout__payment-method__name--selected": o
        })
      }, a.displayName)), y && h("button", {
        type: "button",
        className: "adyen-checkout__button adyen-checkout__button--inline adyen-checkout__button--link",
        onClick: this.toggleDisableConfirmation,
        "aria-expanded": this.state.showDisableStoredPaymentMethodConfirmation,
        "aria-controls": m
      }, f.get("storedPaymentMethod.disable.button")), b && h($h, {
        activeBrand: p,
        brands: a.brands,
        isPaymentMethodSelected: o,
        isCompactView: a.props.showBrandsUnderCardNumber
      })), h("div", {
        className: "adyen-checkout__payment-method__details ".concat(Hh["adyen-checkout__payment-method__details"]),
        id: v,
        role: "region",
        "aria-labelledby": g
      }, y && h(Gh, {
        id: m,
        open: this.state.showDisableStoredPaymentMethodConfirmation,
        onDisable: this.onDisableStoredPaymentMethod,
        onCancel: this.toggleDisableConfirmation
      }), h(Kh, {
        paymentMethodComponent: a.render(),
        isLoaded: l
      })));
    }
  }]), n;
}();

_defineProperty(Jh, "defaultProps", {
  paymentMethod: null,
  isSelected: !1,
  isLoaded: !1,
  isLoading: !1,
  showDisableStoredPaymentMethodConfirmation: !1,
  onSelect: function () {}
});

var Qh = function (e) {
  var t,
      n = e.order,
      r = e.orderStatus,
      a = e.onOrderCancel,
      o = Pt(),
      i = o.loadingContext,
      l = o.i18n;
  return h("div", null, h("ul", {
    className: "adyen-checkout__order-payment-methods-list"
  }, null == r || null === (t = r.paymentMethods) || void 0 === t ? void 0 : K(t).call(t, function (e, t) {
    var r;
    return h("li", {
      key: y$1(r = "".concat(e.type, "-")).call(r, t),
      className: "adyen-checkout__order-payment-method"
    }, h("div", {
      className: "adyen-checkout__order-payment-method__header"
    }, h("div", {
      className: "adyen-checkout__payment-method__header__title"
    }, h(Wh, {
      altDescription: e.name,
      type: e.type,
      src: rt({
        loadingContext: i
      })(e.type)
    }), "\u2022\u2022\u2022\u2022 ", e.lastFour), a && h("button", {
      type: "button",
      className: "adyen-checkout__button adyen-checkout__button--inline adyen-checkout__button--link",
      onClick: function () {
        a({
          order: n
        });
      }
    }, l.get("storedPaymentMethod.disable.button"))), h("div", {
      className: "adyen-checkout__order-payment-method__details"
    }, h("div", {
      className: "adyen-checkout__order-payment-method__deducted-amount"
    }, h("div", {
      className: "adyen-checkout__order-payment-method__deducted-amount__label"
    }, l.get("deductedBalance")), h("div", {
      className: "adyen-checkout__order-payment-method__deducted-amount__value"
    }, l.amount(e.amount.value, e.amount.currency)))));
  })), r.remainingAmount && h("div", {
    className: "adyen-checkout__order-remaining-amount"
  }, l.get("partialPayment.warning"), " ", h("strong", null, l.amount(r.remainingAmount.value, r.remainingAmount.currency))));
};

function Xh(e) {
  var t = e.paymentMethods,
      n = Pt().i18n;
  return h(p, null, h("ul", {
    className: "adyen-checkout__instant-payment-methods-list"
  }, K(t).call(t, function (e) {
    return h("li", {
      key: e.type
    }, e.render());
  })), h(li, {
    label: n.get("orPayWith")
  }));
}

function ey(e) {
  var t = function () {
    if ("undefined" == typeof Reflect || !S) return !1;
    if (S.sham) return !1;
    if ("function" == typeof Proxy) return !0;

    try {
      return Boolean.prototype.valueOf.call(S(Boolean, [], function () {})), !0;
    } catch (e) {
      return !1;
    }
  }();

  return function () {
    var n,
        r = _getPrototypeOf(e);

    if (t) {
      var a = _getPrototypeOf(this).constructor;
      n = S(r, arguments, a);
    } else n = r.apply(this, arguments);

    return _possibleConstructorReturn(this, n);
  };
}

var ty = function (e) {
  _inherits(n, d);
  var t = ey(n);

  function n() {
    var e, r;
    _classCallCheck(this, n);

    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i];

    return r = t.call.apply(t, y$1(e = [this]).call(e, o)), _defineProperty(_assertThisInitialized(r), "onSelect", function (e) {
      return function () {
        return r.props.onSelect(e);
      };
    }), r;
  }

  return _createClass(n, [{
    key: "componentDidMount",
    value: function () {
      if (this.props.paymentMethods[0]) {
        var e = this.props.paymentMethods[0];
        (this.props.openFirstStoredPaymentMethod && !0 === He(e, "props.oneClick") || this.props.openFirstPaymentMethod) && this.onSelect(e)();
      }
    }
  }, {
    key: "render",
    value: function (e) {
      var t,
          n = this,
          r = e.paymentMethods,
          a = e.instantPaymentMethods,
          o = e.activePaymentMethod,
          i = e.cachedPaymentMethods,
          l = e.isLoading,
          s = H((_defineProperty(t = {}, Hh["adyen-checkout__payment-methods-list"], !0), _defineProperty(t, "adyen-checkout__payment-methods-list", !0), _defineProperty(t, "adyen-checkout__payment-methods-list--loading", l), t));
      return h(p, null, this.props.orderStatus && h(Qh, {
        order: this.props.order,
        orderStatus: this.props.orderStatus,
        onOrderCancel: this.props.onOrderCancel
      }), !!a.length && h(Xh, {
        paymentMethods: a
      }), h("ul", {
        className: s
      }, K(r).call(r, function (e, t, a) {
        var s = o && o._id === e._id,
            c = (e._id in i),
            u = o && a[t + 1] && o._id === a[t + 1]._id;
        return h(Jh, {
          className: H({
            "adyen-checkout__payment-method--next-selected": u
          }),
          standalone: 1 === r.length,
          paymentMethod: e,
          isSelected: s,
          isDisabling: s && n.props.isDisabling,
          isLoaded: c,
          isLoading: l,
          onSelect: n.onSelect(e),
          key: e._id,
          showRemovePaymentMethodButton: n.props.showRemovePaymentMethodButton,
          onDisableStoredPaymentMethod: n.props.onDisableStoredPaymentMethod
        });
      })));
    }
  }]), n;
}();

_defineProperty(ty, "defaultProps", {
  instantPaymentMethods: [],
  paymentMethods: [],
  activePaymentMethod: null,
  cachedPaymentMethods: {},
  orderStatus: null,
  onSelect: function () {},
  onDisableStoredPaymentMethod: function () {},
  isDisabling: !1,
  isLoading: !1
});

var ny = function (e) {
  var t = e.message,
      n = Pt(),
      r = n.i18n,
      a = n.loadingContext;
  return h("div", {
    className: "adyen-checkout__status adyen-checkout__status--success"
  }, h(Mn, {
    height: "88",
    className: "adyen-checkout__status__icon",
    src: rt({
      loadingContext: a,
      extension: "gif",
      imageFolder: "components/"
    })("success"),
    alt: r.get(t || "creditCard.success")
  }), h("span", {
    className: "adyen-checkout__status__text"
  }, r.get(t || "creditCard.success")));
},
    ry = function (e) {
  var t = e.message,
      n = Pt(),
      r = n.loadingContext,
      a = n.i18n;
  return h("div", {
    className: "adyen-checkout__status adyen-checkout__status--error"
  }, h(Mn, {
    className: "adyen-checkout__status__icon",
    src: rt({
      loadingContext: r,
      extension: "gif",
      imageFolder: "components/"
    })("error"),
    alt: a.get(t || "error.message.unknown"),
    height: "88"
  }), h("span", {
    className: "adyen-checkout__status__text"
  }, a.get(t || "error.message.unknown")));
};

function ay(e, t) {
  return _a({
    path: "v1/order/status?clientKey=".concat(e.clientKey),
    loadingContext: e.loadingContext
  }, {
    orderData: t.orderData
  });
}

function oy(e, t) {
  var o = n$1(e);

  if (r$1) {
    var i = r$1(e);
    t && (i = f$1(i).call(i, function (t) {
      return a$1(e, t).enumerable;
    })), o.push.apply(o, i);
  }

  return o;
}

function iy(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n,
        r,
        s = null != arguments[t] ? arguments[t] : {};
    t % 2 ? p$1(n = oy(Object(s), !0)).call(n, function (t) {
      _defineProperty(e, t, s[t]);
    }) : o$1 ? i(e, o$1(s)) : p$1(r = oy(Object(s))).call(r, function (t) {
      l$1(e, t, a$1(s, t));
    });
  }

  return e;
}

function ly(e) {
  var t = function () {
    if ("undefined" == typeof Reflect || !S) return !1;
    if (S.sham) return !1;
    if ("function" == typeof Proxy) return !0;

    try {
      return Boolean.prototype.valueOf.call(S(Boolean, [], function () {})), !0;
    } catch (e) {
      return !1;
    }
  }();

  return function () {
    var n,
        r = _getPrototypeOf(e);

    if (t) {
      var a = _getPrototypeOf(this).constructor;
      n = S(r, arguments, a);
    } else n = r.apply(this, arguments);

    return _possibleConstructorReturn(this, n);
  };
}

var sy = function (e) {
  _inherits(n, d);
  var t = ly(n);

  function n() {
    var e, r;
    _classCallCheck(this, n);

    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i];

    return r = t.call.apply(t, y$1(e = [this]).call(e, o)), _defineProperty(_assertThisInitialized(r), "state", {
      elements: [],
      instantPaymentElements: [],
      orderStatus: null,
      isDisabling: !1,
      status: {
        type: "loading",
        props: void 0
      },
      activePaymentMethod: null,
      cachedPaymentMethods: {}
    }), _defineProperty(_assertThisInitialized(r), "prepareDropinData", function () {
      var e = r.props,
          t = e.order,
          n = e.clientKey,
          a = e.loadingContext,
          o = r.props.onCreateElements(),
          i = _slicedToArray(o, 3),
          l = i[0],
          s = i[1],
          c = i[2],
          u = t ? ay({
        clientKey: n,
        loadingContext: a
      }, t) : null;
      v$1.all([l, s, c, u]).then(function (e) {
        var t,
            n = _slicedToArray(e, 4),
            a = n[0],
            o = n[1],
            i = n[2],
            l = n[3];
        r.setState({
          instantPaymentElements: i,
          elements: y$1(t = []).call(t, _toConsumableArray(a), _toConsumableArray(o)),
          orderStatus: l
        }), r.setStatus("ready"), r.props.modules.analytics && r.props.modules.analytics.send({
          containerWidth: r.base && r.base.offsetWidth,
          paymentMethods: K(o).call(o, function (e) {
            return e.props.type;
          }),
          component: "dropin",
          flavor: "dropin"
        });
      }), r.onOrderCancel = r.getOnOrderCancel();
    }), _defineProperty(_assertThisInitialized(r), "setStatus", function (e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      r.setState({
        status: {
          type: e,
          props: t
        }
      });
    }), _defineProperty(_assertThisInitialized(r), "setActivePaymentMethod", function (e) {
      r.setState(function (t) {
        return {
          activePaymentMethod: e,
          cachedPaymentMethods: iy(iy({}, t.cachedPaymentMethods), {}, _defineProperty({}, e._id, !0))
        };
      });
    }), _defineProperty(_assertThisInitialized(r), "handleOnSelectPaymentMethod", function (e) {
      var t = r.state.activePaymentMethod;
      r.setActivePaymentMethod(e), (t && t._id !== e._id || !t) && r.props.onSelect(e);
    }), _defineProperty(_assertThisInitialized(r), "handleDisableStoredPaymentMethod", function (e) {
      r.setState({
        isDisabling: !0
      }), new v$1(function (t, n) {
        return r.props.onDisableStoredPaymentMethod(e.props.storedPaymentMethodId, t, n);
      }).then(function () {
        r.setState(function (t) {
          var n;
          return {
            elements: f$1(n = t.elements).call(n, function (t) {
              return t._id !== e._id;
            })
          };
        }), r.setState({
          isDisabling: !1
        });
      }).catch(function () {
        r.setState({
          isDisabling: !1
        });
      });
    }), _defineProperty(_assertThisInitialized(r), "getOnOrderCancel", function () {
      return r.props.onOrderCancel ? function (e) {
        r.props.onOrderCancel(e);
      } : r.props.session ? function (e) {
        return r.props.session.cancelOrder(e).then(function () {
          return r.props._parentInstance.update({
            order: null
          });
        }).catch(function (e) {
          return r.setStatus((null == e ? void 0 : e.message) || "error");
        });
      } : null;
    }), _defineProperty(_assertThisInitialized(r), "onOrderCancel", void 0), r;
  }

  return _createClass(n, [{
    key: "componentDidMount",
    value: function () {
      this.prepareDropinData();
    }
  }, {
    key: "componentDidUpdate",
    value: function (e, t) {
      t.status.type !== this.state.status.type && this.state.activePaymentMethod && this.state.activePaymentMethod.setStatus(this.state.status.type), "ready" === this.state.status.type && "ready" !== t.status.type && this.props.onReady && this.props.onReady();
    }
  }, {
    key: "closeActivePaymentMethod",
    value: function () {
      this.setState({
        activePaymentMethod: null
      });
    }
  }, {
    key: "render",
    value: function (e, t) {
      var n,
          r,
          a,
          o,
          i = t.elements,
          l = t.instantPaymentElements,
          s = t.status,
          c = t.activePaymentMethod,
          u = t.cachedPaymentMethods,
          d = "loading" === s.type,
          p = "redirect" === s.type;

      switch (s.type) {
        case "success":
          return h(ny, {
            message: null === (n = s.props) || void 0 === n ? void 0 : n.message
          });

        case "error":
          return h(ry, {
            message: null === (r = s.props) || void 0 === r ? void 0 : r.message
          });

        case "custom":
          return null === (a = s.props) || void 0 === a || null === (o = a.component) || void 0 === o ? void 0 : o.render();

        default:
          return h("div", {
            className: "adyen-checkout__dropin adyen-checkout__dropin--".concat(s.type)
          }, p && s.props.component && s.props.component.render(), d && s.props && s.props.component && s.props.component.render(), i && !!i.length && h(ty, {
            isLoading: d || p,
            isDisabling: this.state.isDisabling,
            paymentMethods: i,
            instantPaymentMethods: l,
            activePaymentMethod: c,
            cachedPaymentMethods: u,
            order: this.props.order,
            orderStatus: this.state.orderStatus,
            onOrderCancel: this.onOrderCancel,
            onSelect: this.handleOnSelectPaymentMethod,
            openFirstPaymentMethod: this.props.openFirstPaymentMethod,
            openFirstStoredPaymentMethod: this.props.openFirstStoredPaymentMethod,
            onDisableStoredPaymentMethod: this.handleDisableStoredPaymentMethod,
            showRemovePaymentMethodButton: this.props.showRemovePaymentMethodButton
          }));
      }
    }
  }]), n;
}();

var cy = ["androidpay", "samsungpay"],
    uy = function (e) {
  return !h$1(cy).call(cy, e.constructor.type);
},
    dy = function (e) {
  return !!e;
},
    py = function (e) {
  if (e.isAvailable) {
    var t = new v$1(function (e, t) {
      return q(t, 5e3);
    });
    return v$1.race([e.isAvailable(), t]);
  }

  return v$1.resolve(!!e);
},
    fy = function () {
  var e,
      t,
      n,
      r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
      a = arguments.length > 1 ? arguments[1] : void 0,
      o = arguments.length > 2 ? arguments[2] : void 0,
      i = f$1(e = f$1(t = K(r).call(r, function (e) {
    return o(e, a);
  })).call(t, dy)).call(e, uy),
      l = K(n = K(i).call(i, py)).call(n, function (e) {
    return e.catch(function (e) {
      return e;
    });
  });
  return v$1.all(l).then(function (e) {
    return f$1(i).call(i, function (t, n) {
      return !0 === e[n];
    });
  });
};

function hy(e, t) {
  var o = n$1(e);

  if (r$1) {
    var i = r$1(e);
    t && (i = f$1(i).call(i, function (t) {
      return a$1(e, t).enumerable;
    })), o.push.apply(o, i);
  }

  return o;
}

function yy(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n,
        r,
        s = null != arguments[t] ? arguments[t] : {};
    t % 2 ? p$1(n = hy(Object(s), !0)).call(n, function (t) {
      _defineProperty(e, t, s[t]);
    }) : o$1 ? i(e, o$1(s)) : p$1(r = hy(Object(s))).call(r, function (t) {
      l$1(e, t, a$1(s, t));
    });
  }

  return e;
}

function my(e, t) {
  var o = n$1(e);

  if (r$1) {
    var i = r$1(e);
    t && (i = f$1(i).call(i, function (t) {
      return a$1(e, t).enumerable;
    })), o.push.apply(o, i);
  }

  return o;
}

function vy(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n,
        r,
        s = null != arguments[t] ? arguments[t] : {};
    t % 2 ? p$1(n = my(Object(s), !0)).call(n, function (t) {
      _defineProperty(e, t, s[t]);
    }) : o$1 ? i(e, o$1(s)) : p$1(r = my(Object(s))).call(r, function (t) {
      l$1(e, t, a$1(s, t));
    });
  }

  return e;
}

function gy(e, t) {
  var o = n$1(e);

  if (r$1) {
    var i = r$1(e);
    t && (i = f$1(i).call(i, function (t) {
      return a$1(e, t).enumerable;
    })), o.push.apply(o, i);
  }

  return o;
}

function by(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n,
        r,
        s = null != arguments[t] ? arguments[t] : {};
    t % 2 ? p$1(n = gy(Object(s), !0)).call(n, function (t) {
      _defineProperty(e, t, s[t]);
    }) : o$1 ? i(e, o$1(s)) : p$1(r = gy(Object(s))).call(r, function (t) {
      l$1(e, t, a$1(s, t));
    });
  }

  return e;
}

function _y(e) {
  var t = function () {
    if ("undefined" == typeof Reflect || !S) return !1;
    if (S.sham) return !1;
    if ("function" == typeof Proxy) return !0;

    try {
      return Boolean.prototype.valueOf.call(S(Boolean, [], function () {})), !0;
    } catch (e) {
      return !1;
    }
  }();

  return function () {
    var n,
        r = _getPrototypeOf(e);

    if (t) {
      var a = _getPrototypeOf(this).constructor;
      n = S(r, arguments, a);
    } else n = r.apply(this, arguments);

    return _possibleConstructorReturn(this, n);
  };
}

var Cy = ["paywithgoogle", "applepay"],
    ky = function (e) {
  _inherits(n, Lt);

  var t = _y(n);

  function n(e) {
    var r, a, o;
    return _classCallCheck(this, n), o = t.call(this, e), _defineProperty(_assertThisInitialized(o), "dropinRef", null), _defineProperty(_assertThisInitialized(o), "componentFromAction", void 0), _defineProperty(_assertThisInitialized(o), "handleCreate", function () {
      var e = o.props,
          t = e.paymentMethods,
          n = e.storedPaymentMethods,
          r = e.showStoredPaymentMethods,
          a = e.showPaymentMethods,
          i = e.instantPaymentMethods,
          l = function (e) {
        return {
          beforeSubmit: e.beforeSubmit,
          onSubmit: e.onSubmit,
          elementRef: e.elementRef,
          showPayButton: e.showPayButton,
          isDropin: !0
        };
      }(by(by({}, o.props), {}, {
        elementRef: o.elementRef
      })),
          s = r ? function () {
        var e = arguments.length > 2 ? arguments[2] : void 0;
        return fy(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], yy(yy({}, arguments.length > 1 ? arguments[1] : void 0), {}, {
          oneClick: !0
        }), e);
      }(n, l, o._parentInstance.create) : [],
          c = a ? fy(t, l, o._parentInstance.create) : [],
          u = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
            t = arguments.length > 1 ? arguments[1] : void 0,
            n = arguments.length > 2 ? arguments[2] : void 0;
        return e.length ? fy(e, vy(vy({}, t), {}, {
          isInstantPayment: !0,
          showPayButton: !0
        }), n) : [];
      }(i, l, o._parentInstance.create);

      return [s, c, u];
    }), o.submit = m$1(r = o.submit).call(r, _assertThisInitialized(o)), o.handleAction = m$1(a = o.handleAction).call(a, _assertThisInitialized(o)), o;
  }

  return _createClass(n, [{
    key: "formatProps",
    value: function (e) {
      var t,
          r,
          a = f$1(t = me(new Ne(e.instantPaymentTypes))).call(t, function (e) {
        return h$1(Cy).call(Cy, e);
      }),
          o = k$1(a).call(a, function (t, n) {
        var r,
            a,
            o = g$1(r = e.paymentMethods).call(r, function (e) {
          return e.type === n;
        });
        return o ? y$1(a = []).call(a, _toConsumableArray(t), [o]) : t;
      }, []),
          i = f$1(r = e.paymentMethods).call(r, function (e) {
        var t = e.type;
        return !h$1(a).call(a, t);
      });
      return by(by({}, _get(_getPrototypeOf(n.prototype), "formatProps", this).call(this, e)), {}, {
        instantPaymentTypes: a,
        instantPaymentMethods: o,
        paymentMethods: i
      });
    }
  }, {
    key: "isValid",
    get: function () {
      return !!this.dropinRef && !!this.dropinRef.state.activePaymentMethod && !!this.dropinRef.state.activePaymentMethod.isValid;
    }
  }, {
    key: "showValidation",
    value: function () {
      return this.dropinRef.state.activePaymentMethod && this.dropinRef.state.activePaymentMethod.showValidation(), this;
    }
  }, {
    key: "setStatus",
    value: function (e) {
      var t,
          n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return null === (t = this.dropinRef) || void 0 === t || t.setStatus(e, n), this;
    }
  }, {
    key: "activePaymentMethod",
    get: function () {
      var e, t;
      return null !== (e = this.dropinRef) && void 0 !== e && e.state || null !== (t = this.dropinRef) && void 0 !== t && t.state.activePaymentMethod ? this.dropinRef.state.activePaymentMethod : null;
    }
  }, {
    key: "data",
    get: function () {
      return this.activePaymentMethod ? this.dropinRef.state.activePaymentMethod.data : null;
    }
  }, {
    key: "submit",
    value: function () {
      if (!this.activePaymentMethod) throw new Error("No active payment method.");
      this.activePaymentMethod.submit();
    }
  }, {
    key: "handleAction",
    value: function (e) {
      var t,
          n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};

      if (!e || !e.type) {
        if (Tt(e, "action") && Tt(e, "resultCode")) throw new Error('handleAction::Invalid Action - the passed action object itself has an "action" property and a "resultCode": have you passed in the whole response object by mistake?');
        throw new Error('handleAction::Invalid Action - the passed action object does not have a "type" property');
      }

      if ("redirect" !== e.type && null !== (t = this.activePaymentMethod) && void 0 !== t && t.updateWithAction) return this.activePaymentMethod.updateWithAction(e);

      var r = this._parentInstance.createFromAction(e, by(by({}, n), {}, {
        elementRef: this.elementRef,
        onAdditionalDetails: this.handleAdditionalDetails,
        isDropin: !0
      }));

      return r ? (this.setStatus(r.props.statusType, {
        component: r
      }), this.componentFromAction = r, this) : null;
    }
  }, {
    key: "closeActivePaymentMethod",
    value: function () {
      this.dropinRef.closeActivePaymentMethod();
    }
  }, {
    key: "render",
    value: function () {
      var e = this;
      return h(Xa, {
        i18n: this.props.i18n,
        loadingContext: this.props.loadingContext
      }, h(sy, _extends({}, this.props, {
        onChange: this.setState,
        elementRef: this.elementRef,
        onCreateElements: this.handleCreate,
        ref: function (t) {
          e.dropinRef = t;
        }
      })));
    }
  }]), n;
}();

_defineProperty(ky, "type", "dropin"), _defineProperty(ky, "defaultProps", {
  isDropin: !0,
  onReady: function () {},
  onComplete: function () {},
  onCancel: function () {},
  onError: function () {},
  onSelect: function () {},
  onDisableStoredPaymentMethod: null,
  onChange: function () {},
  instantPaymentMethods: [],
  amount: {},
  installmentOptions: {},
  paymentMethodsConfiguration: {},
  openFirstPaymentMethod: !0,
  openFirstStoredPaymentMethod: !0,
  showStoredPaymentMethods: !0,
  showPaymentMethods: !0,
  showRemoveStoredPaymentMethodButton: !1,
  showPayButton: !0
});

var Ny = "AchInput-module_sf-input__wrapper__lfdiv",
    wy = "AchInput-module_adyen-checkout__input__8WwCR",
    Sy = function (e) {
  var t,
      n = e.id,
      r = e.dataInfo,
      a = e.className,
      o = void 0 === a ? "" : a,
      i = e.label,
      l = e.focused,
      s = e.filled,
      c = e.errorMessage,
      u = void 0 === c ? "" : c,
      p = e.isValid,
      f = void 0 !== p && p,
      h$1 = e.onFocusField,
      y = e.dir,
      m = n.charAt(0).toUpperCase() + G(n).call(n, 1),
      v = "encrypted".concat(m);
  return h(yn, {
    label: i,
    focused: l,
    filled: s,
    classNameModifiers: [n],
    onFocusField: function () {
      return h$1(v);
    },
    errorMessage: u,
    isValid: f,
    className: o,
    dir: y,
    name: n
  }, h(yc, {
    encryptedFieldType: v,
    "data-info": r,
    className: H((t = {
      "adyen-checkout__input": !0,
      "adyen-checkout__input--large": !0
    }, _defineProperty(t, wy, !0), _defineProperty(t, "adyen-checkout__input--error", u.length), _defineProperty(t, "adyen-checkout__input--focus", l), _defineProperty(t, "adyen-checkout__input--valid", f), t))
  }));
},
    xy = function (e) {
  var t = e.focusedElement,
      n = e.onFocusField,
      r = e.errors,
      a = e.valid,
      o = Pt().i18n;
  return h("div", {
    className: "adyen-checkout__ach-sf__form adyen-checkout__field-wrapper"
  }, h(Sy, {
    id: "bankAccountNumber",
    focused: "encryptedBankAccountNumber" === t,
    isValid: !!a.encryptedBankAccountNumber,
    label: o.get("ach.accountNumberField.title"),
    onFocusField: n,
    filled: !!r.encryptedBankAccountNumber || !!a.encryptedBankAccountNumber,
    errorMessage: !!r.encryptedBankAccountNumber && o.get("ach.accountNumberField.invalid"),
    dataInfo: '{"length":"4-17", "maskInterval": 4}',
    className: "adyen-checkout__field--50",
    dir: "ltr"
  }), h(Sy, {
    id: "bankLocationId",
    focused: "encryptedBankLocationId" === t,
    isValid: !!a.encryptedBankLocationId,
    label: o.get("ach.accountLocationField.title"),
    onFocusField: n,
    filled: !!r.encryptedBankLocationId || !!a.encryptedBankLocationId,
    errorMessage: !!r.encryptedBankLocationId && o.get("ach.accountLocationField.invalid"),
    dataInfo: '{"length":9}',
    className: "adyen-checkout__field--50",
    dir: "ltr"
  }));
},
    Py = {
  base: {
    caretColor: "#0066FF"
  }
};

function Fy(e, t) {
  var o = n$1(e);

  if (r$1) {
    var i = r$1(e);
    t && (i = f$1(i).call(i, function (t) {
      return a$1(e, t).enumerable;
    })), o.push.apply(o, i);
  }

  return o;
}

function Ay(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n,
        r,
        s = null != arguments[t] ? arguments[t] : {};
    t % 2 ? p$1(n = Fy(Object(s), !0)).call(n, function (t) {
      _defineProperty(e, t, s[t]);
    }) : o$1 ? i(e, o$1(s)) : p$1(r = Fy(Object(s))).call(r, function (t) {
      l$1(e, t, a$1(s, t));
    });
  }

  return e;
}

function By(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  return !t || !!e && "string" == typeof e && J(e).call(e).length > 0;
}

function Ey(e) {
  var t = this,
      n = Pt().i18n,
      r = e.hasHolderName && (!!e.holderName || !!e.data.holderName),
      a = ft({}),
      o = _slicedToArray(a, 2),
      i = o[0],
      l = o[1],
      s = ft(Ay({}, e.holderNameRequired && {
    holderName: r
  })),
      c = _slicedToArray(s, 2),
      u = c[0],
      d = c[1],
      p = ft(Ay({}, e.hasHolderName && {
    holderName: e.holderName || e.data.holderName
  })),
      f = _slicedToArray(p, 2),
      h$1 = f[0],
      y = f[1],
      m = ft(e.billingAddressRequired ? e.data.billingAddress : null),
      v = _slicedToArray(m, 2),
      g = v[0],
      _ = v[1],
      C = ft(!1),
      k = _slicedToArray(C, 2),
      N = k[0],
      w = k[1],
      S = ft(""),
      P = _slicedToArray(S, 2),
      F = P[0],
      A = P[1],
      B = function (e) {
    _(Ay(Ay({}, g), e.data)), d(Ay(Ay({}, u), {}, {
      billingAddress: e.isValid
    }));
  },
      E = function (t) {
    var n = t.target.value;
    y(Ay(Ay({}, h$1), {}, {
      holderName: n
    })), l(Ay(Ay({}, i), {}, {
      holderName: !!e.holderNameRequired && !By(n)
    })), d(Ay(Ay({}, u), {}, {
      holderName: !e.holderNameRequired || By(n, e.holderNameRequired)
    }));
  },
      O = vt(null),
      D = vt(null),
      M = ft("ready"),
      T = _slicedToArray(M, 2),
      I = T[0],
      j = T[1];

  return this.setStatus = function (e) {
    j(e);
  }, this.showValidation = function () {
    O.current.showValidation(), e.holderNameRequired && !u.holderName && l(Ay(Ay({}, i), {}, {
      holderName: !0
    })), D.current && D.current.showValidation();
  }, yt(function () {
    return t.setFocusOn = O.current.setFocusOn, t.updateStyles = O.current.updateStyles, function () {
      O.current.destroy();
    };
  }, []), yt(function () {
    var t = By(h$1.holderName, e.holderNameRequired),
        n = N,
        r = !e.billingAddressRequired || Boolean(u.billingAddress),
        a = n && t && r;
    e.onChange({
      data: h$1,
      isValid: a,
      billingAddress: g
    });
  }, [h$1, u, i]), h("div", {
    className: "adyen-checkout__ach"
  }, h(Is, _extends({
    ref: O
  }, Ry(e), {
    styles: Ay(Ay({}, Py), e.styles),
    onChange: function (t) {
      var n = t,
          r = n.autoCompleteName ? n.autoCompleteName : h$1.holderName;
      y(Ay(Ay(Ay({}, h$1), n.data), {}, {
        holderName: r
      })), l(Ay(Ay({}, i), n.errors)), d(Ay(Ay(Ay({}, u), n.valid), {}, {
        holderName: !e.holderNameRequired || By(r, e.holderNameRequired)
      })), w(n.isSfpValid);
    },
    onFocus: function (t) {
      var n = !0 === t.focus;
      A(t.currentFocusObject), n ? e.onFocus(t) : e.onBlur(t);
    },
    render: function (t, r) {
      var a = t.setRootNode,
          o = t.setFocusOn;
      return h("div", {
        ref: a,
        className: "adyen-checkout__ach-input ".concat(Ny)
      }, h(pc, {
        status: r.status
      }, h("div", {
        className: H(["adyen-checkout__fieldset", "adyen-checkout__fieldset--ach"])
      }, h("div", {
        className: "adyen-checkout__fieldset__title"
      }, n.get("ach.bankAccount")), e.hasHolderName && h(yn, {
        label: n.get("ach.accountHolderNameField.title"),
        className: "adyen-checkout__pm__holderName",
        errorMessage: !!i.holderName && n.get("ach.accountHolderNameField.invalid"),
        isValid: !!u.holderName,
        name: "holderName"
      }, Zn("text", {
        className: "adyen-checkout__pm__holderName__input ".concat(wy),
        placeholder: e.placeholders.holderName || n.get("ach.accountHolderNameField.placeholder"),
        value: h$1.holderName,
        required: e.holderNameRequired,
        onInput: E
      })), h(xy, {
        focusedElement: F,
        onFocusField: o,
        errors: r.errors,
        valid: r.valid
      })), e.billingAddressRequired && h(Ba, {
        label: "billingAddress",
        data: g,
        onChange: B,
        allowedCountries: e.billingAddressAllowedCountries,
        requiredFields: e.billingAddressRequiredFields,
        ref: D
      })));
    }
  })), e.showPayButton && e.payButton({
    status: I,
    label: n.get("confirmPurchase")
  }));
}

Ey.defaultProps = {
  type: "ach",
  hasHolderName: !0,
  holderNameRequired: !0,
  billingAddressRequired: !0,
  billingAddressAllowedCountries: ["US", "PR"],
  onLoad: function () {},
  onConfigSuccess: function () {},
  onAllValid: function () {},
  onFieldValid: function () {},
  onError: function () {},
  onBlur: function () {},
  onFocus: function () {},
  onChange: function () {},
  holderName: "",
  data: {
    holderName: "",
    billingAddress: {}
  },
  styles: {},
  placeholders: {}
};

var Ry = function (e) {
  return {
    allowedDOMAccess: e.allowedDOMAccess,
    autoFocus: e.autoFocus,
    clientKey: e.clientKey,
    i18n: e.i18n,
    keypadFix: e.keypadFix,
    legacyInputMode: e.legacyInputMode,
    loadingContext: e.loadingContext,
    onAllValid: e.onAllValid,
    onConfigSuccess: e.onConfigSuccess,
    onError: e.onError,
    onFieldValid: e.onFieldValid,
    onFocus: e.onFocus,
    onLoad: e.onLoad,
    showWarnings: e.showWarnings,
    styles: e.styles,
    type: e.type
  };
};

function Oy(e, t) {
  var o = n$1(e);

  if (r$1) {
    var i = r$1(e);
    t && (i = f$1(i).call(i, function (t) {
      return a$1(e, t).enumerable;
    })), o.push.apply(o, i);
  }

  return o;
}

function Dy(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n,
        r,
        s = null != arguments[t] ? arguments[t] : {};
    t % 2 ? p$1(n = Oy(Object(s), !0)).call(n, function (t) {
      _defineProperty(e, t, s[t]);
    }) : o$1 ? i(e, o$1(s)) : p$1(r = Oy(Object(s))).call(r, function (t) {
      l$1(e, t, a$1(s, t));
    });
  }

  return e;
}

function My(e) {
  var t = function () {
    if ("undefined" == typeof Reflect || !S) return !1;
    if (S.sham) return !1;
    if ("function" == typeof Proxy) return !0;

    try {
      return Boolean.prototype.valueOf.call(S(Boolean, [], function () {})), !0;
    } catch (e) {
      return !1;
    }
  }();

  return function () {
    var n,
        r = _getPrototypeOf(e);

    if (t) {
      var a = _getPrototypeOf(this).constructor;
      n = S(r, arguments, a);
    } else n = r.apply(this, arguments);

    return _possibleConstructorReturn(this, n);
  };
}

var Ty = function (e) {
  _inherits(n, Lt);
  var t = My(n);

  function n() {
    return _classCallCheck(this, n), t.apply(this, arguments);
  }

  return _createClass(n, [{
    key: "formatProps",
    value: function (e) {
      var t;
      return Dy(Dy({}, e), {}, {
        holderNameRequired: null !== (t = e.hasHolderName) && void 0 !== t ? t : e.holderNameRequired
      });
    }
  }, {
    key: "formatData",
    value: function () {
      var e,
          t = Dy(Dy({
        type: n.type
      }, this.state.data), {}, {
        ownerName: null === (e = this.state.data) || void 0 === e ? void 0 : e.holderName
      });
      return delete t.holderName, Dy({
        paymentMethod: t
      }, this.state.billingAddress && {
        billingAddress: this.state.billingAddress
      });
    }
  }, {
    key: "updateStyles",
    value: function (e) {
      return this.componentRef && this.componentRef.updateStyles && this.componentRef.updateStyles(e), this;
    }
  }, {
    key: "setFocusOn",
    value: function (e) {
      return this.componentRef && this.componentRef.setFocusOn && this.componentRef.setFocusOn(e), this;
    }
  }, {
    key: "isValid",
    get: function () {
      return !!this.state.isValid;
    }
  }, {
    key: "displayName",
    get: function () {
      return this.props.name;
    }
  }, {
    key: "render",
    value: function () {
      var e = this;
      return h(Xa, {
        i18n: this.props.i18n,
        loadingContext: this.props.loadingContext
      }, h(Ey, _extends({
        ref: function (t) {
          e.componentRef = t;
        }
      }, this.props, {
        onChange: this.setState,
        onSubmit: this.submit,
        payButton: this.payButton
      })));
    }
  }]), n;
}();

_defineProperty(Ty, "type", "ach");
var Iy = /\b(2\d{1}|(9(3|6|2|1)))\d{7}\b/,
    jy = /^(\d){4,}$/,
    Vy = {
  phoneNumber: {
    modes: ["blur"],
    validate: function (e, t) {
      var n = "+351" === t.state.data.phonePrefix ? Iy : jy;
      return Or(e) ? null : n.test(e);
    },
    errorMessage: "invalidPhoneNumber"
  },
  phonePrefix: {
    modes: ["blur"],
    validate: function (e) {
      return !!e;
    },
    errorMessage: "invalidCountryCode"
  }
},
    Ly = {
  phoneNumber: {
    formatter: function (e) {
      return e.replace(Mr("^\\d", "g"), "");
    }
  }
};

function Uy(e, t) {
  var o = n$1(e);

  if (r$1) {
    var i = r$1(e);
    t && (i = f$1(i).call(i, function (t) {
      return a$1(e, t).enumerable;
    })), o.push.apply(o, i);
  }

  return o;
}

function qy(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n,
        r,
        s = null != arguments[t] ? arguments[t] : {};
    t % 2 ? p$1(n = Uy(Object(s), !0)).call(n, function (t) {
      _defineProperty(e, t, s[t]);
    }) : o$1 ? i(e, o$1(s)) : p$1(r = Uy(Object(s))).call(r, function (t) {
      l$1(e, t, a$1(s, t));
    });
  }

  return e;
}

function Ky(e) {
  var t,
      n,
      r,
      a,
      o,
      i,
      l = Pt(),
      s = l.i18n,
      c = l.commonProps.isCollatingErrors,
      u = e.requiredFields || y$1(t = []).call(t, _toConsumableArray(null != e && null !== (n = e.items) && void 0 !== n && n.length ? ["phonePrefix"] : []), ["phoneNumber"]),
      d = h$1(u).call(u, "phonePrefix") && !(null == e || null === (r = e.items) || void 0 === r || !r.length),
      p = h$1(u).call(u, "phoneNumber"),
      f = cr(qy(qy({
    i18n: s
  }, e), {}, {
    schema: u,
    defaultData: e.data,
    rules: Vy,
    formatters: Ly
  })),
      m = f.handleChangeFor,
      v = f.data,
      g = f.valid,
      b = f.errors,
      C = f.isValid,
      k = f.triggerValidation,
      N = f.setSchema;
  yt(function () {
    N(u);
  }, [u.toString()]), yt(function () {
    v.phoneNumber && m("phoneNumber", "blur")(v.phoneNumber);
  }, [v.phonePrefix]), yt(function () {
    e.onChange({
      data: v,
      valid: g,
      errors: b,
      isValid: C
    });
  }, [v, g, b, C]), this.triggerValidation = k;

  var w = function () {
    var e = document.querySelector(".adyen-checkout-phone-input--new [uniqueid]");
    return e ? e.getAttribute("uniqueid") : null;
  },
      S = bt(function (t) {
    if (b[t]) {
      var n = "phoneNumber" === t ? "phoneNumberErrorKey" : "phonePrefixErrorKey",
          r = e[n] ? e[n] : b[t].errorMessage,
          a = s.get(r);
      return a || null;
    }

    return null;
  }, [b]),
      x = gt(function () {
    return fn("adyen-checkout-phonePrefix");
  }, []);

  return h("div", {
    className: "adyen-checkout-phone-input--new"
  }, h(yn, {
    name: "phoneNumber",
    label: e.phoneNumberKey ? s.get(e.phoneNumberKey) : s.get("telephoneNumber"),
    className: H({
      "adyen-checkout-field": !0,
      "adyen-checkout-field--phone-input": !0
    }),
    inputWrapperModifiers: ["phone-input"],
    isValid: g.phoneNumber,
    errorMessage: (b.phoneNumber || b.phonePrefix) && !0,
    showValidIcon: !b.phonePrefix
  }, h("div", {
    className: H({
      "adyen-checkout__input": !0,
      "adyen-checkout__input--invalid": !!b.phoneNumber || !!b.phonePrefix,
      "adyen-checkout__input--valid": (!d || g.phonePrefix) && g.phoneNumber,
      "adyen-checkout-input": !0,
      "adyen-checkout-input-holder--phone-input": !0
    })
  }, d && Zn("select", {
    className: "adyen-checkout-dropdown adyen-checkout-dropdown--countrycode-selector",
    items: e.items,
    onChange: m("phonePrefix"),
    placeholder: s.get("infix"),
    selected: v.phonePrefix,
    isCollatingErrors: c,
    uniqueId: x
  }), p && h("div", {
    className: "adyen-checkout-phone-number"
  }, h("input", {
    id: w(),
    type: "tel",
    value: v.phoneNumber,
    onInput: m("phoneNumber", "input"),
    onBlur: m("phoneNumber", "blur"),
    placeholder: e.placeholders.phoneNumber || "123456789",
    className: "adyen-checkout__input adyen-checkout-input adyen-checkout-input--phone-number",
    autoCorrect: "off",
    "aria-required": !0,
    "aria-label": e.phoneNumberKey ? s.get(e.phoneNumberKey) : s.get("telephoneNumber"),
    "aria-invalid": !g.phoneNumber,
    "aria-describedby": y$1(a = "".concat(w())).call(a, "-ariaError")
  })))), !c && h("div", {
    className: "adyen-checkout-phone-input__error-holder"
  }, d && S("phonePrefix") && h("span", {
    className: "adyen-checkout__error-text",
    "aria-live": "polite",
    id: y$1(o = "".concat(x)).call(o, "-ariaError")
  }, S("phonePrefix")), p && S("phoneNumber") && h("span", {
    className: "adyen-checkout__error-text",
    "aria-live": "polite",
    id: y$1(i = "".concat(w())).call(i, "-ariaError")
  }, S("phoneNumber"))));
}

function Hy(e) {
  var t,
      n = Pt(),
      r = n.i18n,
      a = n.loadingContext,
      o = vt(null),
      i = e.allowedCountries,
      l = void 0 === i ? [] : i,
      s = ft("ready"),
      c = _slicedToArray(s, 2),
      u = c[0],
      d = c[1];
  this.setStatus = d, this.showValidation = null == o || null === (t = o.current) || void 0 === t ? void 0 : t.triggerValidation;

  var p = function (e) {
    var t = e.allowedCountries,
        n = e.loadingContext,
        r = e.handleError,
        a = ft("loading"),
        o = _slicedToArray(a, 2),
        i = o[0],
        l = o[1],
        s = ft([]),
        c = _slicedToArray(s, 2),
        u = c[0],
        d = c[1];
    return mt(function () {
      Ca("phonenumbers", n).then(function (e) {
        var n = t.length ? f$1(e).call(e, function (e) {
          return h$1(t).call(t, e.id);
        }) : e,
            r = K(n).call(n, function (e) {
          var t,
              n,
              r,
              a,
              o = K(t = e.id.toUpperCase().split("")).call(t, function (e) {
            return 127397 + e.charCodeAt(0);
          }),
              i = _e ? _e.apply(String, _toConsumableArray(o)) + "\xa0\xa0" : "";
          return {
            id: e.prefix,
            name: y$1(n = y$1(r = "".concat(i, " ")).call(r, e.prefix, " (")).call(n, e.id, ")"),
            selectedOptionName: y$1(a = "".concat(i, " ")).call(a, e.prefix)
          };
        });
        d(r || []), l("ready");
      }).catch(function (e) {
        d([]), l("ready"), null == r || r(new Mt("ERROR", e));
      });
    }, []), {
      phonePrefixes: u,
      loadingStatus: i
    };
  }({
    allowedCountries: l,
    loadingContext: a,
    handleError: e.onError
  }),
      m = p.loadingStatus,
      v = p.phonePrefixes;

  return h(pc, {
    status: m
  }, h("div", {
    className: "adyen-checkout__mb-way"
  }, h(Ky, _extends({}, e, {
    items: v,
    ref: o,
    onChange: function (t) {
      var n = t.data,
          r = t.valid,
          a = t.errors,
          o = t.isValid;
      e.onChange({
        data: n,
        valid: r,
        errors: a,
        isValid: o
      });
    },
    data: e.data
  })), e.showPayButton && e.payButton({
    status: u,
    label: r.get("confirmPurchase")
  })));
}

Ky.defaultProps = {
  phoneLabel: "telephoneNumber"
}, Hy.defaultProps = {
  onChange: function () {},
  phoneNumberKey: "mobileNumber",
  phoneNumberErrorKey: "mobileNumber.invalid"
};
var zy = 2e3,
    Wy = 15,
    Gy = 6e4,
    Yy = 1e4,
    $y = "mbway",
    Zy = "mbway.confirmPayment",
    Jy = "await.waitForConfirmation",
    Qy = !1,
    Xy = ["message"];

function em(e, t) {
  var o = n$1(e);

  if (r$1) {
    var i = r$1(e);
    t && (i = f$1(i).call(i, function (t) {
      return a$1(e, t).enumerable;
    })), o.push.apply(o, i);
  }

  return o;
}

function tm(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n,
        r,
        s = null != arguments[t] ? arguments[t] : {};
    t % 2 ? p$1(n = em(Object(s), !0)).call(n, function (t) {
      _defineProperty(e, t, s[t]);
    }) : o$1 ? i(e, o$1(s)) : p$1(r = em(Object(s))).call(r, function (t) {
      l$1(e, t, a$1(s, t));
    });
  }

  return e;
}

function nm(e) {
  var t,
      n = this,
      r = Pt(),
      a = r.i18n,
      o = r.loadingContext,
      i = ft(!1),
      l = _slicedToArray(i, 2),
      s = l[0],
      c = l[1],
      u = ft(!1),
      d = _slicedToArray(u, 2),
      p = d[0],
      f = d[1],
      h$1 = ft(!0),
      y = _slicedToArray(h$1, 2),
      m = y[0],
      v = y[1],
      g = ft(e.delay),
      _ = _slicedToArray(g, 2),
      C = _[0],
      k = _[1],
      N = ft(100),
      w = _slicedToArray(N, 2),
      S = w[0],
      x = w[1],
      P = ft(0),
      F = _slicedToArray(P, 2),
      A = F[0],
      B = F[1],
      E = ft(!1),
      O = _slicedToArray(E, 2),
      D = O[0],
      M = O[1],
      T = ft(null),
      I = _slicedToArray(T, 2),
      j = I[0],
      V = I[1],
      L = function () {
    ef(e.paymentData, e.clientKey, o).then(af).catch(function (e) {
      var t = e.message,
          r = _objectWithoutProperties(e, Xy);
      return {
        type: "network-error",
        props: tm(tm({}, t && {
          message: n.props.i18n.get(t)
        }), r)
      };
    }).then(function (t) {
      switch (t.type) {
        case "success":
          !function (t) {
            c(!0);
            var r = {
              data: {
                details: {
                  payload: t.props.payload
                },
                paymentData: e.paymentData
              }
            };
            e.onComplete(r, n);
          }(t);
          break;

        case "error":
          !function (t) {
            f(!0);
            var r = {
              data: {
                details: {
                  payload: t.props.payload
                },
                paymentData: e.paymentData
              }
            };
            e.onComplete(r, n);
          }(t);
          break;

        default:
          v(!1);
      }
    });
  };

  yt(function () {
    var t = e.shouldRedirectOnMobile,
        r = e.url,
        a = window.matchMedia("(max-width: 768px)").matches && /Android|iPhone|iPod/.test(navigator.userAgent);
    return t && r && a ? n.redirectToApp(r, L) : L(), function () {
      clearTimeout(j);
    };
  }, []), yt(function () {
    if (p) return clearTimeout(j);
    if (s) return clearTimeout(j);

    if (!m) {
      V(q(function () {
        L();
        var t = A + C;
        B(t), t >= e.throttleTime && !D && (k(e.throttleInterval), M(!0));
      }, C));
    }
  }, [m, A, p, s]);

  var z = function (e, t) {
    return h("div", {
      className: "adyen-checkout__await adyen-checkout__await--result"
    }, h("img", {
      className: "adyen-checkout__await__icon adyen-checkout__await__icon--result",
      src: rt({
        loadingContext: o,
        imageFolder: "components/"
      })(e),
      alt: a.get(t)
    }), h("div", {
      className: "adyen-checkout__await__subtitle adyen-checkout__await__subtitle--result"
    }, a.get(t)));
  };

  if (p) return z("error", "error.subtitle.payment");
  if (s) return z("success", "creditCard.success");
  if (m) return h("div", {
    className: "adyen-checkout__await"
  }, e.brandLogo && h("img", {
    src: e.brandLogo,
    alt: e.type,
    className: "adyen-checkout__await__brand-logo"
  }), h(at, {
    inline: !1,
    size: "large"
  }));
  var W = a.get("wechatpay.timetopay").split("%@");
  return h("div", {
    className: H("adyen-checkout__await", "adyen-checkout__await--".concat(e.type), K(t = e.classNameModifiers).call(t, function (e) {
      return "adyen-checkout__await--".concat(e);
    }))
  }, e.brandLogo && h("img", {
    src: e.brandLogo,
    alt: e.type,
    className: "adyen-checkout__await__brand-logo"
  }), h("div", {
    className: "adyen-checkout__await__subtitle"
  }, e.messageText), h("div", {
    className: "adyen-checkout__await__indicator-holder"
  }, h("div", {
    className: "adyen-checkout__await__indicator-spinner"
  }, h(at, {
    inline: !1,
    size: "medium"
  })), h("div", {
    className: "adyen-checkout__await__indicator-text"
  }, e.awaitText)), e.showCountdownTimer && h("div", {
    className: "adyen-checkout__await__countdown-holder"
  }, h("div", {
    className: "adyen-checkout__await__progress"
  }, h("span", {
    className: "adyen-checkout__await__percentage",
    style: {
      width: "".concat(S, "%")
    }
  })), h("div", {
    className: "adyen-checkout__await__countdown"
  }, W[0], "\xa0", h(Xp, {
    minutesFromNow: e.countdownTime,
    onTick: function (e) {
      x(e.percentage);
    },
    onCompleted: function () {
      f(!0), clearTimeout(j), e.onError(new Mt("ERROR", "Payment Expired"));
    }
  }), "\xa0", W[1])), e.url && h("div", {
    className: "adyen-checkout__await__app-link"
  }, h("span", {
    className: "adyen-checkout__await__separator__label"
  }, a.get("or")), h(At, {
    classNameModifiers: ["await"],
    onClick: function () {
      return function (t) {
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function () {};
        q(function () {
          e.onError(new Mt("ERROR", "".concat(e.type, " App was not found"))), n();
        }, 25), window.location.assign(t);
      }(e.url);
    },
    label: a.get("openApp")
  })));
}

function rm(e, t) {
  var o = n$1(e);

  if (r$1) {
    var i = r$1(e);
    t && (i = f$1(i).call(i, function (t) {
      return a$1(e, t).enumerable;
    })), o.push.apply(o, i);
  }

  return o;
}

function am(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n,
        r,
        s = null != arguments[t] ? arguments[t] : {};
    t % 2 ? p$1(n = rm(Object(s), !0)).call(n, function (t) {
      _defineProperty(e, t, s[t]);
    }) : o$1 ? i(e, o$1(s)) : p$1(r = rm(Object(s))).call(r, function (t) {
      l$1(e, t, a$1(s, t));
    });
  }

  return e;
}

function om(e) {
  var t = function () {
    if ("undefined" == typeof Reflect || !S) return !1;
    if (S.sham) return !1;
    if ("function" == typeof Proxy) return !0;

    try {
      return Boolean.prototype.valueOf.call(S(Boolean, [], function () {})), !0;
    } catch (e) {
      return !1;
    }
  }();

  return function () {
    var n,
        r = _getPrototypeOf(e);

    if (t) {
      var a = _getPrototypeOf(this).constructor;
      n = S(r, arguments, a);
    } else n = r.apply(this, arguments);

    return _possibleConstructorReturn(this, n);
  };
}

nm.defaultProps = {
  countdownTime: 15,
  onError: function () {},
  onComplete: function () {},
  delay: 2e3,
  throttleTime: 6e4,
  throttleInterval: 1e4,
  showCountdownTimer: !0,
  classNameModifiers: [],
  shouldRedirectOnMobile: !1,
  url: null
};

var im = function (e) {
  _inherits(n, Lt);
  var t = om(n);

  function n() {
    return _classCallCheck(this, n), t.apply(this, arguments);
  }

  return _createClass(n, [{
    key: "formatProps",
    value: function (e) {
      var t = e.data,
          n = void 0 === t ? {} : t,
          r = e.placeholders,
          a = void 0 === r ? {} : r;
      return am(am({}, e), {}, {
        data: {
          phoneNumber: n.telephoneNumber || n.phoneNumber,
          phonePrefix: n.phonePrefix || "+351"
        },
        placeholders: {
          phoneNumber: a.telephoneNumber || a.phoneNumber || "932123456"
        }
      });
    }
  }, {
    key: "formatData",
    value: function () {
      var e;
      return {
        paymentMethod: am({
          type: n.type
        }, (null === (e = this.state.data) || void 0 === e ? void 0 : e.phoneNumber) && {
          telephoneNumber: this.state.data.phonePrefix + this.state.data.phoneNumber
        })
      };
    }
  }, {
    key: "isValid",
    get: function () {
      return !!this.state.isValid;
    }
  }, {
    key: "displayName",
    get: function () {
      return this.props.name;
    }
  }, {
    key: "render",
    value: function () {
      var e = this;
      return this.props.paymentData ? h(Xa, {
        i18n: this.props.i18n,
        loadingContext: this.props.loadingContext
      }, h(nm, {
        ref: function (t) {
          e.componentRef = t;
        },
        clientKey: this.props.clientKey,
        paymentData: this.props.paymentData,
        onError: this.props.onError,
        onComplete: this.onComplete,
        brandLogo: this.icon,
        type: $y,
        messageText: this.props.i18n.get(Zy),
        awaitText: this.props.i18n.get(Jy),
        showCountdownTimer: Qy,
        delay: zy,
        countdownTime: Wy,
        throttleTime: Gy,
        throttleInterval: Yy
      })) : h(Xa, {
        i18n: this.props.i18n,
        loadingContext: this.props.loadingContext
      }, h(Hy, _extends({
        ref: function (t) {
          e.componentRef = t;
        }
      }, this.props, {
        onChange: this.setState,
        onSubmit: this.submit,
        payButton: this.payButton
      })));
    }
  }]), n;
}();

function lm(e) {
  var t = this,
      n = Pt(),
      r = n.i18n,
      a = n.loadingContext,
      o = cr({
    schema: ["blikCode"],
    rules: {
      blikCode: {
        validate: function (e) {
          return 6 === (null == e ? void 0 : e.length);
        },
        errorMessage: "blik.invalid",
        modes: ["blur"]
      }
    }
  }),
      i = o.handleChangeFor,
      l = o.triggerValidation,
      s = o.data,
      c = o.valid,
      u = o.errors,
      d = o.isValid;
  yt(function () {
    e.onChange({
      data: s,
      errors: u,
      valid: c,
      isValid: d
    }, t);
  }, [s, c, u, d]);
  var p = ft("ready"),
      f = _slicedToArray(p, 2),
      h$1 = f[0],
      y = f[1];
  return this.setStatus = y, this.showValidation = l, h("div", {
    className: "adyen-checkout__blik"
  }, h("p", {
    className: "adyen-checkout__blik__helper"
  }, r.get("blik.help")), h(yn, {
    errorMessage: !!u.blikCode && r.get(u.blikCode.errorMessage),
    label: r.get("blik.code"),
    classNameModifiers: ["blikCode", "50"],
    isValid: c.blikCode,
    dir: "ltr"
  }, Zn("text", {
    value: s.blikCode,
    name: "blikCode",
    spellcheck: !1,
    required: !0,
    autocorrect: "off",
    onInput: i("blikCode", "input"),
    onBlur: i("blikCode", "blur"),
    placeholder: "123456",
    maxLength: 6
  })), e.showPayButton && e.payButton({
    status: h$1,
    icon: rt({
      loadingContext: a,
      imageFolder: "components/"
    })("lock")
  }));
}

_defineProperty(im, "type", "mbway"), lm.defaultProps = {
  data: {
    blikCode: ""
  }
};
var sm = 2e3,
    cm = 15,
    um = 6e4,
    dm = 1e4,
    pm = "blik",
    fm = "blik.confirmPayment",
    hm = "await.waitForConfirmation",
    ym = !1;

function mm(e, t) {
  var o = n$1(e);

  if (r$1) {
    var i = r$1(e);
    t && (i = f$1(i).call(i, function (t) {
      return a$1(e, t).enumerable;
    })), o.push.apply(o, i);
  }

  return o;
}

function vm(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n,
        r,
        s = null != arguments[t] ? arguments[t] : {};
    t % 2 ? p$1(n = mm(Object(s), !0)).call(n, function (t) {
      _defineProperty(e, t, s[t]);
    }) : o$1 ? i(e, o$1(s)) : p$1(r = mm(Object(s))).call(r, function (t) {
      l$1(e, t, a$1(s, t));
    });
  }

  return e;
}

function gm(e) {
  var t = function () {
    if ("undefined" == typeof Reflect || !S) return !1;
    if (S.sham) return !1;
    if ("function" == typeof Proxy) return !0;

    try {
      return Boolean.prototype.valueOf.call(S(Boolean, [], function () {})), !0;
    } catch (e) {
      return !1;
    }
  }();

  return function () {
    var n,
        r = _getPrototypeOf(e);

    if (t) {
      var a = _getPrototypeOf(this).constructor;
      n = S(r, arguments, a);
    } else n = r.apply(this, arguments);

    return _possibleConstructorReturn(this, n);
  };
}

var bm = function (e) {
  _inherits(n, Lt);
  var t = gm(n);

  function n() {
    return _classCallCheck(this, n), t.apply(this, arguments);
  }

  return _createClass(n, [{
    key: "formatData",
    value: function () {
      var e = !!this.props.storedPaymentMethodId;
      return {
        paymentMethod: vm(vm({
          type: n.type
        }, !e && {
          blikCode: this.state.data.blikCode
        }), e && {
          storedPaymentMethodId: this.props.storedPaymentMethodId
        })
      };
    }
  }, {
    key: "isValid",
    get: function () {
      return !!this.props.storedPaymentMethodId || !!this.state.isValid;
    }
  }, {
    key: "render",
    value: function () {
      var e = this;
      return this.props.paymentData ? h(Xa, {
        i18n: this.props.i18n,
        loadingContext: this.props.loadingContext
      }, h(nm, {
        ref: function (t) {
          e.componentRef = t;
        },
        clientKey: this.props.clientKey,
        paymentData: this.props.paymentData,
        onError: this.handleError,
        onComplete: this.onComplete,
        brandLogo: this.icon,
        type: pm,
        messageText: this.props.i18n.get(fm),
        awaitText: this.props.i18n.get(hm),
        showCountdownTimer: ym,
        delay: sm,
        countdownTime: cm,
        throttleTime: um,
        throttleInterval: dm
      })) : h(Xa, {
        i18n: this.props.i18n,
        loadingContext: this.props.loadingContext
      }, this.props.storedPaymentMethodId ? h(gu, {
        name: this.displayName,
        amount: this.props.amount,
        payButton: this.payButton,
        onSubmit: this.submit,
        ref: function (t) {
          e.componentRef = t;
        }
      }) : h(lm, _extends({
        ref: function (t) {
          e.componentRef = t;
        }
      }, this.props, {
        onChange: this.setState,
        onSubmit: this.submit,
        payButton: this.payButton
      })));
    }
  }]), n;
}();

function _m(e) {
  var t = e.reference,
      n = e.totalAmount,
      r = e.paymentMethodType,
      a = Pt(),
      o = a.loadingContext,
      i = a.i18n;
  return h(Qu, {
    paymentMethodType: r,
    introduction: i.get("bankTransfer.instructions"),
    imageUrl: rt({
      loadingContext: o
    })(r),
    amount: n && i.amount(n.value, n.currency),
    voucherDetails: [{
      label: i.get("bankTransfer.beneficiary"),
      value: e.beneficiary
    }, {
      label: i.get("bankTransfer.iban"),
      value: e.iban
    }, {
      label: i.get("bankTransfer.bic"),
      value: e.bic
    }, {
      label: i.get("bankTransfer.reference"),
      value: t
    }]
  });
}

function Cm(e) {
  var t = Pt().i18n,
      n = ft(!1),
      r = _slicedToArray(n, 2),
      a = r[0],
      o = r[1],
      i = cr({
    schema: [],
    defaultData: e.data
  }),
      l = i.handleChangeFor,
      s = i.triggerValidation,
      c = i.data,
      u = i.valid,
      d = i.errors,
      p = i.isValid,
      f = i.setSchema;
  return yt(function () {
    f(a ? ["shopperEmail"] : []);
  }, [a]), this.showValidation = s, yt(function () {
    e.onChange({
      data: c,
      errors: d,
      valid: u,
      isValid: p
    });
  }, [c, u, d, a, p]), h("div", {
    className: "adyen-checkout__bankTransfer"
  }, h("p", {
    className: "adyen-checkout__bankTransfer__introduction"
  }, t.get("bankTransfer.introduction")), h(qf, {
    classNames: "adyen-checkout__bankTransfer__emailField",
    value: c.shopperEmail,
    errors: d.shopperEmail,
    onToggle: function () {
      return o(!a);
    },
    onInput: l("shopperEmail", "input"),
    onBlur: l("shopperEmail", "blur")
  }));
}

function km(e, t) {
  var o = n$1(e);

  if (r$1) {
    var i = r$1(e);
    t && (i = f$1(i).call(i, function (t) {
      return a$1(e, t).enumerable;
    })), o.push.apply(o, i);
  }

  return o;
}

function Nm(e) {
  var t = function () {
    if ("undefined" == typeof Reflect || !S) return !1;
    if (S.sham) return !1;
    if ("function" == typeof Proxy) return !0;

    try {
      return Boolean.prototype.valueOf.call(S(Boolean, [], function () {})), !0;
    } catch (e) {
      return !1;
    }
  }();

  return function () {
    var n,
        r = _getPrototypeOf(e);

    if (t) {
      var a = _getPrototypeOf(this).constructor;
      n = S(r, arguments, a);
    } else n = r.apply(this, arguments);

    return _possibleConstructorReturn(this, n);
  };
}

_defineProperty(bm, "type", "blik");

var wm = function (e) {
  _inherits(n, Lt);
  var t = Nm(n);

  function n() {
    var e, r;
    _classCallCheck(this, n);

    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i];

    return r = t.call.apply(t, y$1(e = [this]).call(e, o)), _defineProperty(_assertThisInitialized(r), "state", {
      isValid: !r.props.showEmailAddress,
      data: {}
    }), _defineProperty(_assertThisInitialized(r), "handleRef", function (e) {
      r.componentRef = e;
    }), r;
  }

  return _createClass(n, [{
    key: "isValid",
    get: function () {
      return !!this.state.isValid;
    }
  }, {
    key: "formatData",
    value: function () {
      var e = this.state.data.shopperEmail;
      return function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n,
              r,
              s = null != arguments[t] ? arguments[t] : {};
          t % 2 ? p$1(n = km(Object(s), !0)).call(n, function (t) {
            _defineProperty(e, t, s[t]);
          }) : o$1 ? i(e, o$1(s)) : p$1(r = km(Object(s))).call(r, function (t) {
            l$1(e, t, a$1(s, t));
          });
        }

        return e;
      }({
        paymentMethod: {
          type: n.type
        }
      }, e && {
        shopperEmail: e
      });
    }
  }, {
    key: "render",
    value: function () {
      return this.props.reference ? h(Xa, {
        i18n: this.props.i18n,
        loadingContext: this.props.loadingContext
      }, h(_m, _extends({
        ref: this.handleRef
      }, this.props))) : h(Xa, {
        i18n: this.props.i18n,
        loadingContext: this.props.loadingContext
      }, this.props.showEmailAddress && h(Cm, _extends({
        ref: this.handleRef
      }, this.props, {
        onChange: this.setState
      })), this.props.showPayButton && h(gu, _extends({}, this.props, {
        name: this.displayName,
        onSubmit: this.submit,
        payButton: this.payButton
      })));
    }
  }]), n;
}();

_defineProperty(wm, "type", "bankTransfer_IBAN"), _defineProperty(wm, "defaultProps", {
  showPayButton: !0,
  showEmailAddress: !0
});
var Sm = ["CA", "US"];

function xm(e, t) {
  var o = n$1(e);

  if (r$1) {
    var i = r$1(e);
    t && (i = f$1(i).call(i, function (t) {
      return a$1(e, t).enumerable;
    })), o.push.apply(o, i);
  }

  return o;
}

function Pm(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n,
        r,
        s = null != arguments[t] ? arguments[t] : {};
    t % 2 ? p$1(n = xm(Object(s), !0)).call(n, function (t) {
      _defineProperty(e, t, s[t]);
    }) : o$1 ? i(e, o$1(s)) : p$1(r = xm(Object(s))).call(r, function (t) {
      l$1(e, t, a$1(s, t));
    });
  }

  return e;
}

function Fm(e) {
  var t = function () {
    if ("undefined" == typeof Reflect || !S) return !1;
    if (S.sham) return !1;
    if ("function" == typeof Proxy) return !0;

    try {
      return Boolean.prototype.valueOf.call(S(Boolean, [], function () {})), !0;
    } catch (e) {
      return !1;
    }
  }();

  return function () {
    var n,
        r = _getPrototypeOf(e);

    if (t) {
      var a = _getPrototypeOf(this).constructor;
      n = S(r, arguments, a);
    } else n = r.apply(this, arguments);

    return _possibleConstructorReturn(this, n);
  };
}

var Am = function (e) {
  _inherits(n, ro);
  var t = Fm(n);

  function n() {
    return _classCallCheck(this, n), t.apply(this, arguments);
  }

  return _createClass(n, [{
    key: "formatProps",
    value: function (e) {
      return Pm(Pm({}, _get(_getPrototypeOf(n.prototype), "formatProps", this).call(this, e)), {}, {
        allowedCountries: Sm,
        personalDetailsRequiredFields: ["firstName", "lastName", "telephoneNumber", "shopperEmail"]
      });
    }
  }]), n;
}();

_defineProperty(Am, "type", "affirm");
var Bm = {
  socialSecurityNumber: {
    validate: Hs,
    errorMessage: "",
    modes: ["blur"]
  },
  default: {
    validate: function (e) {
      return !!e && e.length > 0;
    },
    errorMessage: "",
    modes: ["blur"]
  }
},
    Em = {
  socialSecurityNumber: function (e) {
    return Ks(e);
  }
};

function Rm(e) {
  var t,
      n = Pt().i18n,
      r = ["firstName", "lastName", "socialSecurityNumber"],
      a = cr({
    schema: r,
    defaultData: e.data,
    rules: Bm,
    formatters: Em
  }),
      o = a.handleChangeFor,
      i = a.triggerValidation,
      l = a.setSchema,
      s = a.data,
      c = a.valid,
      u = a.errors,
      d = a.isValid;
  yt(function () {
    var t,
        n = e.personalDetailsRequired ? y$1(t = []).call(t, r) : [];
    l(n);
  }, [e.personalDetailsRequired]);
  var p = ft("ready"),
      f = _slicedToArray(p, 2),
      h$1 = f[0],
      m = f[1];
  this.setStatus = m, this.showValidation = function () {
    i();
  }, yt(function () {
    e.onChange({
      data: s,
      valid: c,
      errors: u,
      isValid: d
    });
  }, [s, c, u]);
  var v = e.personalDetailsRequired ? [] : ["standalone"];
  return h("div", {
    className: "adyen-checkout__pix-input__field"
  }, e.personalDetailsRequired && h(Kf, {
    i18n: n,
    data: s,
    handleChangeFor: o,
    errors: u,
    valid: c
  }), e.showPayButton && e.payButton({
    status: h$1,
    label: y$1(t = "".concat(n.get("continueTo"), " ")).call(t, e.name),
    classNameModifiers: v
  }));
}

function Om(e, t) {
  var o = n$1(e);

  if (r$1) {
    var i = r$1(e);
    t && (i = f$1(i).call(i, function (t) {
      return a$1(e, t).enumerable;
    })), o.push.apply(o, i);
  }

  return o;
}

function Dm(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n,
        r,
        s = null != arguments[t] ? arguments[t] : {};
    t % 2 ? p$1(n = Om(Object(s), !0)).call(n, function (t) {
      _defineProperty(e, t, s[t]);
    }) : o$1 ? i(e, o$1(s)) : p$1(r = Om(Object(s))).call(r, function (t) {
      l$1(e, t, a$1(s, t));
    });
  }

  return e;
}

function Mm(e) {
  var t = function () {
    if ("undefined" == typeof Reflect || !S) return !1;
    if (S.sham) return !1;
    if ("function" == typeof Proxy) return !0;

    try {
      return Boolean.prototype.valueOf.call(S(Boolean, [], function () {})), !0;
    } catch (e) {
      return !1;
    }
  }();

  return function () {
    var n,
        r = _getPrototypeOf(e);

    if (t) {
      var a = _getPrototypeOf(this).constructor;
      n = S(r, arguments, a);
    } else n = r.apply(this, arguments);

    return _possibleConstructorReturn(this, n);
  };
}

Rm.defaultProps = {
  data: {},
  personalDetailsRequired: !1
};

var Tm = function (e) {
  _inherits(n, df);
  var t = Mm(n);

  function n() {
    return _classCallCheck(this, n), t.apply(this, arguments);
  }

  return _createClass(n, [{
    key: "isValid",
    get: function () {
      return !!this.state.isValid;
    }
  }, {
    key: "formatProps",
    value: function (e) {
      return Dm({
        delay: 2e3,
        countdownTime: 15,
        copyBtn: !0,
        introduction: "pix.instructions"
      }, _get(_getPrototypeOf(n.prototype), "formatProps", this).call(this, e));
    }
  }, {
    key: "formatData",
    value: function () {
      var e = this.state.data,
          t = void 0 === e ? {} : e,
          n = t.firstName,
          r = t.lastName,
          a = t.socialSecurityNumber,
          o = void 0 === a ? "" : a;
      return Dm(Dm({
        paymentMethod: {
          type: this.props.type || this.constructor.type
        }
      }, n && r && {
        shopperName: {
          firstName: n,
          lastName: r
        }
      }), o && {
        socialSecurityNumber: qs(o)
      });
    }
  }, {
    key: "render",
    value: function () {
      var e = this;
      return this.props.paymentData ? this.renderQRCode() : this.props.showPayButton ? h(Xa, {
        i18n: this.props.i18n,
        loadingContext: this.props.loadingContext
      }, h(Rm, _extends({
        ref: function (t) {
          e.componentRef = t;
        }
      }, this.props, {
        onChange: this.setState,
        onSubmit: this.submit,
        payButton: this.payButton
      }))) : null;
    }
  }]), n;
}();

_defineProperty(Tm, "type", "pix"), _defineProperty(Tm, "defaultProps", Dm({
  personalDetailsRequired: !1
}, df.defaultProps));
var Im = /^(\d){1,8}$/,
    jm = /^(\d){6}$/,
    Vm = /[^0-9]/g,
    Lm = {
  bankAccountNumber: {
    modes: ["blur", "input"],
    validate: function (e) {
      return !!e && Im.test(e);
    }
  },
  bankLocationId: [{
    modes: ["input"],
    validate: function (e) {
      return !!e && /^(\d){1,6}$/.test(e);
    }
  }, {
    modes: ["blur"],
    validate: function (e) {
      return !!e && jm.test(e);
    }
  }],
  amountConsentCheckbox: {
    modes: ["blur"],
    validate: function (e) {
      return !!e;
    }
  },
  accountConsentCheckbox: {
    modes: ["blur"],
    validate: function (e) {
      return !!e;
    }
  },
  default: {
    modes: ["blur"],
    validate: function (e) {
      return !!e && e.length > 0;
    }
  }
},
    Um = {
  bankAccountNumber: function (e) {
    return e.replace(Vm, "");
  },
  bankLocationId: function (e) {
    return e.replace(Vm, "");
  }
};

function qm(e) {
  var t,
      n,
      r,
      a = this,
      o = Pt().i18n,
      i = cr({
    schema: ["holderName", "bankAccountNumber", "bankLocationId", "shopperEmail", "amountConsentCheckbox", "accountConsentCheckbox"],
    defaultData: e.data,
    formatters: Um,
    rules: Lm
  }),
      l = i.handleChangeFor,
      s = i.triggerValidation,
      c = i.data,
      u = i.valid,
      d = i.errors,
      p = i.isValid,
      f = ft("enter-data"),
      h$1 = _slicedToArray(f, 2),
      m = h$1[0],
      v = h$1[1];
  this.setStatus = v, this.showValidation = s;
  return yt(function () {
    e.onChange({
      data: c,
      valid: u,
      errors: d,
      isValid: p
    });
  }, [c, u, d, p]), h("div", {
    className: H({
      "adyen-checkout__bacs": !0,
      "adyen-checkout__bacs--confirm": "confirm-data" === m || "loading" === m
    })
  }, "confirm-data" == m && h("div", {
    className: H({
      "adyen-checkout__bacs--edit": !0,
      "adyen-checkout__bacs--edit-dropin": e.isDropin
    })
  }, Zn("text", {
    name: "bacsEdit",
    className: "adyen-checkout__bacs--edit-button",
    value: o.get("edit"),
    "aria-label": o.get("edit"),
    readonly: !0,
    onClick: function () {
      return a.setStatus("enter-data");
    }
  })), h(yn, {
    className: H({
      "adyen-checkout__bacs--holder-name": !0,
      "adyen-checkout__field--inactive": "confirm-data" === m || "loading" === m
    }),
    label: o.get("bacs.accountHolderName"),
    errorMessage: !!d.holderName && o.get("bacs.accountHolderName.invalid"),
    isValid: u.holderName,
    name: "accountHolderName"
  }, Zn("text", {
    name: "bacs.accountHolderName",
    className: "adyen-checkout__bacs-input--holder-name",
    placeholder: e.placeholders.holderName,
    value: c.holderName,
    "aria-invalid": !u.holderName,
    "aria-label": o.get("bacs.accountHolderName"),
    "aria-required": "true",
    required: !0,
    readonly: "confirm-data" === m || "loading" === m,
    autocorrect: "off",
    onBlur: l("holderName", "blur"),
    onInput: l("holderName", "input")
  })), h("div", {
    className: "adyen-checkout__bacs__num-id adyen-checkout__field-wrapper"
  }, h(yn, {
    errorMessage: !!d.bankAccountNumber && o.get("bacs.accountNumber.invalid"),
    label: o.get("bacs.accountNumber"),
    className: H({
      "adyen-checkout__bacs--bank-account-number": !0,
      "adyen-checkout__field--inactive": "confirm-data" === m || "loading" === m
    }),
    classNameModifiers: ["col-70"],
    isValid: u.bankAccountNumber,
    name: "bankAccountNumber"
  }, Zn("text", {
    value: c.bankAccountNumber,
    className: "adyen-checkout__bacs-input--bank-account-number",
    placeholder: e.placeholders.bankAccountNumber,
    "aria-invalid": !u.bankAccountNumber,
    "aria-label": o.get("bacs.accountNumber"),
    "aria-required": "true",
    required: !0,
    readonly: "confirm-data" === m || "loading" === m,
    autocorrect: "off",
    onBlur: l("bankAccountNumber", "blur"),
    onInput: l("bankAccountNumber", "input")
  })), h(yn, {
    errorMessage: !!d.bankLocationId && o.get("bacs.bankLocationId.invalid"),
    label: o.get("bacs.bankLocationId"),
    className: H({
      "adyen-checkout__bacs--bank-location-id": !0,
      "adyen-checkout__field--inactive": "confirm-data" === m || "loading" === m
    }),
    classNameModifiers: ["col-30"],
    isValid: u.bankLocationId,
    name: "bankLocationId"
  }, Zn("text", {
    value: c.bankLocationId,
    className: "adyen-checkout__bacs-input--bank-location-id",
    placeholder: e.placeholders.bankLocationId,
    "aria-invalid": !u.bankLocationId,
    "aria-label": o.get("bacs.bankLocationId"),
    "aria-required": "true",
    required: !0,
    readonly: "confirm-data" === m || "loading" === m,
    autocorrect: "off",
    onBlur: l("bankLocationId", "blur"),
    onInput: l("bankLocationId", "input")
  }))), h(yn, {
    errorMessage: !!d.shopperEmail && o.get("shopperEmail.invalid"),
    label: o.get("shopperEmail"),
    className: H({
      "adyen-checkout__bacs--shopper-email": !0,
      "adyen-checkout__field--inactive": "confirm-data" === m || "loading" === m
    }),
    isValid: u.shopperEmail,
    name: "emailAddress"
  }, Zn("emailAddress", {
    value: c.shopperEmail,
    name: "shopperEmail",
    className: "adyen-checkout__bacs-input--shopper-email",
    classNameModifiers: ["large"],
    placeholder: e.placeholders.shopperEmail,
    spellcheck: !1,
    "aria-invalid": !u.shopperEmail,
    "aria-label": o.get("shopperEmail"),
    "aria-required": "true",
    required: !0,
    readonly: "confirm-data" === m || "loading" === m,
    autocorrect: "off",
    onInput: l("shopperEmail", "input"),
    onBlur: l("shopperEmail", "blur")
  })), "enter-data" === m && h(Ra, {
    classNameModifiers: ["amountConsentCheckbox"],
    errorMessage: !!d.amountConsentCheckbox,
    label: o.get("bacs.consent.amount"),
    onChange: l("amountConsentCheckbox"),
    checked: !!c.amountConsentCheckbox
  }), "enter-data" === m && h(Ra, {
    classNameModifiers: ["accountConsentCheckbox"],
    errorMessage: !!d.accountConsentCheckbox,
    label: o.get("bacs.consent.account"),
    onChange: l("accountConsentCheckbox"),
    checked: !!c.accountConsentCheckbox
  }), e.showPayButton && e.payButton({
    status: m,
    label: "enter-data" === m ? o.get("continue") : y$1(t = "".concat(o.get("bacs.confirm"), " ")).call(t, null !== (n = e.amount) && void 0 !== n && n.value && null !== (r = e.amount) && void 0 !== r && r.currency ? o.amount(e.amount.value, e.amount.currency) : ""),
    icon: rt({
      loadingContext: e.loadingContext,
      imageFolder: "components/"
    })("lock"),
    onClick: function () {
      return p ? "enter-data" === m ? a.setStatus("confirm-data") : "confirm-data" === m ? e.onSubmit() : void 0 : a.showValidation();
    }
  }));
}

qm.defaultProps = {
  data: {},
  placeholders: {}
};

var Km = function (e) {
  var t = Pt(),
      n = t.i18n,
      r = t.loadingContext,
      a = e.url,
      o = e.paymentMethodType;
  return h(Qu, {
    paymentMethodType: o,
    introduction: n.get("bacs.result.introduction"),
    imageUrl: rt({
      loadingContext: r
    })(o),
    downloadUrl: a,
    downloadButtonText: n.get("download.pdf")
  });
};

function Hm(e, t) {
  var o = n$1(e);

  if (r$1) {
    var i = r$1(e);
    t && (i = f$1(i).call(i, function (t) {
      return a$1(e, t).enumerable;
    })), o.push.apply(o, i);
  }

  return o;
}

function zm(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n,
        r,
        s = null != arguments[t] ? arguments[t] : {};
    t % 2 ? p$1(n = Hm(Object(s), !0)).call(n, function (t) {
      _defineProperty(e, t, s[t]);
    }) : o$1 ? i(e, o$1(s)) : p$1(r = Hm(Object(s))).call(r, function (t) {
      l$1(e, t, a$1(s, t));
    });
  }

  return e;
}

function Wm(e) {
  var t = function () {
    if ("undefined" == typeof Reflect || !S) return !1;
    if (S.sham) return !1;
    if ("function" == typeof Proxy) return !0;

    try {
      return Boolean.prototype.valueOf.call(S(Boolean, [], function () {})), !0;
    } catch (e) {
      return !1;
    }
  }();

  return function () {
    var n,
        r = _getPrototypeOf(e);

    if (t) {
      var a = _getPrototypeOf(this).constructor;
      n = S(r, arguments, a);
    } else n = r.apply(this, arguments);

    return _possibleConstructorReturn(this, n);
  };
}

var Gm = function (e) {
  _inherits(n, Lt);
  var t = Wm(n);

  function n() {
    var e, r;
    _classCallCheck(this, n);

    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i];

    return r = t.call.apply(t, y$1(e = [this]).call(e, o)), _defineProperty(_assertThisInitialized(r), "payButton", function (e) {
      return h(Rt, _extends({
        amount: r.props.amount,
        onClick: r.submit
      }, e));
    }), r;
  }

  return _createClass(n, [{
    key: "formatData",
    value: function () {
      var e, t, r, a;
      return zm({
        paymentMethod: zm(zm(zm({
          type: n.type
        }, (null === (e = this.state.data) || void 0 === e ? void 0 : e.holderName) && {
          holderName: this.state.data.holderName
        }), (null === (t = this.state.data) || void 0 === t ? void 0 : t.bankAccountNumber) && {
          bankAccountNumber: this.state.data.bankAccountNumber
        }), (null === (r = this.state.data) || void 0 === r ? void 0 : r.bankLocationId) && {
          bankLocationId: this.state.data.bankLocationId
        })
      }, (null === (a = this.state.data) || void 0 === a ? void 0 : a.shopperEmail) && {
        shopperEmail: this.state.data.shopperEmail
      });
    }
  }, {
    key: "isValid",
    get: function () {
      return !!this.state.isValid;
    }
  }, {
    key: "render",
    value: function () {
      var e = this;
      return h(Xa, {
        i18n: this.props.i18n,
        loadingContext: this.props.loadingContext
      }, this.props.url ? h(Km, {
        ref: function (t) {
          e.componentRef = t;
        },
        icon: this.icon,
        url: this.props.url,
        paymentMethodType: this.props.paymentMethodType
      }) : h(qm, _extends({
        ref: function (t) {
          e.componentRef = t;
        }
      }, this.props, {
        onChange: this.setState,
        payButton: this.payButton,
        onSubmit: this.submit
      })));
    }
  }]), n;
}();

function Ym(e) {
  var t = function () {
    if ("undefined" == typeof Reflect || !S) return !1;
    if (S.sham) return !1;
    if ("function" == typeof Proxy) return !0;

    try {
      return Boolean.prototype.valueOf.call(S(Boolean, [], function () {})), !0;
    } catch (e) {
      return !1;
    }
  }();

  return function () {
    var n,
        r = _getPrototypeOf(e);

    if (t) {
      var a = _getPrototypeOf(this).constructor;
      n = S(r, arguments, a);
    } else n = r.apply(this, arguments);

    return _possibleConstructorReturn(this, n);
  };
}

_defineProperty(Gm, "type", "directdebit_GB");

var $m = function (e) {
  _inherits(n, Lt);
  var t = Ym(n);

  function n() {
    return _classCallCheck(this, n), t.apply(this, arguments);
  }

  return _createClass(n, [{
    key: "data",
    get: function () {
      return this.state.data;
    }
  }, {
    key: "isValid",
    get: function () {
      return !!this.state.isValid;
    }
  }, {
    key: "render",
    value: function () {
      var e = this;
      return h(Xa, {
        i18n: this.props.i18n,
        loadingContext: this.props.loadingContext
      }, h(Ba, _extends({
        ref: function (t) {
          e.componentRef = t;
        }
      }, this.props, {
        onChange: this.setState
      })));
    }
  }]), n;
}();

function Zm(e) {
  var t = function () {
    if ("undefined" == typeof Reflect || !S) return !1;
    if (S.sham) return !1;
    if ("function" == typeof Proxy) return !0;

    try {
      return Boolean.prototype.valueOf.call(S(Boolean, [], function () {})), !0;
    } catch (e) {
      return !1;
    }
  }();

  return function () {
    var n,
        r = _getPrototypeOf(e);

    if (t) {
      var a = _getPrototypeOf(this).constructor;
      n = S(r, arguments, a);
    } else n = r.apply(this, arguments);

    return _possibleConstructorReturn(this, n);
  };
}

var Jm = function (e) {
  _inherits(n, Lt);
  var t = Zm(n);

  function n() {
    return _classCallCheck(this, n), t.apply(this, arguments);
  }

  return _createClass(n, [{
    key: "data",
    get: function () {
      return this.state.data;
    }
  }, {
    key: "isValid",
    get: function () {
      return !!this.state.isValid;
    }
  }, {
    key: "render",
    value: function () {
      var e = this;
      return h(Xa, {
        i18n: this.props.i18n,
        loadingContext: this.props.loadingContext
      }, h(_r, _extends({
        ref: function (t) {
          e.componentRef = t;
        }
      }, this.props, {
        onChange: this.setState
      })));
    }
  }]), n;
}(),
    Qm = ["sdkData", "paymentMethodType", "payButton"];

function Xm(e) {
  var t = e.sdkData;
  e.paymentMethodType;

  var n = e.payButton,
      r = _objectWithoutProperties(e, Qm),
      a = vt(null),
      o = ft("ready"),
      i = _slicedToArray(o, 2),
      l = i[0],
      s = i[1],
      c = function () {
    s("error"), r.onComplete({
      data: {
        paymentData: r.paymentData,
        details: {}
      }
    });
  };

  return yt(function () {
    window.klarnaAsyncCallback = function () {
      window.Klarna.Payments.init({
        client_token: t.client_token
      }), window.Klarna.Payments.load({
        container: a.current,
        payment_method_category: t.payment_method_category
      }, function (e) {
        e.show_form && !e.error || c();
      });
    };

    var e = new Ro("https://x.klarnacdn.net/kp/lib/v1/api.js");
    return e.load(), function () {
      e.remove();
    };
  }, []), "error" !== l && "success" !== l ? h("div", {
    className: "adyen-checkout__klarna-widget"
  }, h("div", {
    ref: a
  }), n({
    status: l,
    disabled: "loading" === l,
    onClick: function () {
      s("loading");

      try {
        window.Klarna.Payments.authorize({
          payment_method_category: t.payment_method_category
        }, function (e) {
          !0 === e.approved && !0 === e.show_form ? (s("success"), r.onComplete({
            data: {
              paymentData: r.paymentData,
              details: {
                token: e.authorization_token
              }
            }
          })) : e.approved || !0 !== e.show_form ? c() : (s("ready"), r.onError(e));
        });
      } catch (e) {
        c();
      }
    }
  })) : null;
}

function ev(e, t) {
  var o = n$1(e);

  if (r$1) {
    var i = r$1(e);
    t && (i = f$1(i).call(i, function (t) {
      return a$1(e, t).enumerable;
    })), o.push.apply(o, i);
  }

  return o;
}

function tv(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n,
        r,
        s = null != arguments[t] ? arguments[t] : {};
    t % 2 ? p$1(n = ev(Object(s), !0)).call(n, function (t) {
      _defineProperty(e, t, s[t]);
    }) : o$1 ? i(e, o$1(s)) : p$1(r = ev(Object(s))).call(r, function (t) {
      l$1(e, t, a$1(s, t));
    });
  }

  return e;
}

function nv(e) {
  var t,
      n = ft({
    sdkData: e.sdkData,
    paymentMethodType: e.paymentMethodType,
    paymentData: e.paymentData
  }),
      r = _slicedToArray(n, 2),
      a = r[0],
      o = r[1],
      i = ft("ready"),
      l = _slicedToArray(i, 2),
      s = l[0],
      c = l[1];
  return this.setAction = o, this.setStatus = c, a.sdkData ? h(Xm, {
    sdkData: a.sdkData,
    paymentMethodType: a.paymentMethodType,
    paymentData: a.paymentData,
    payButton: e.payButton,
    onComplete: e.onComplete,
    onError: e.onError
  }) : e.showPayButton ? e.payButton(tv(tv({}, e), {}, {
    status: s,
    disabled: "loading" === s,
    classNameModifiers: ["standalone"],
    label: y$1(t = "".concat(this.props.i18n.get("continueTo"), " ")).call(t, e.displayName)
  })) : null;
}

function rv(e, t) {
  var o = n$1(e);

  if (r$1) {
    var i = r$1(e);
    t && (i = f$1(i).call(i, function (t) {
      return a$1(e, t).enumerable;
    })), o.push.apply(o, i);
  }

  return o;
}

function av(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n,
        r,
        s = null != arguments[t] ? arguments[t] : {};
    t % 2 ? p$1(n = rv(Object(s), !0)).call(n, function (t) {
      _defineProperty(e, t, s[t]);
    }) : o$1 ? i(e, o$1(s)) : p$1(r = rv(Object(s))).call(r, function (t) {
      l$1(e, t, a$1(s, t));
    });
  }

  return e;
}

function ov(e) {
  var t = function () {
    if ("undefined" == typeof Reflect || !S) return !1;
    if (S.sham) return !1;
    if ("function" == typeof Proxy) return !0;

    try {
      return Boolean.prototype.valueOf.call(S(Boolean, [], function () {})), !0;
    } catch (e) {
      return !1;
    }
  }();

  return function () {
    var n,
        r = _getPrototypeOf(e);

    if (t) {
      var a = _getPrototypeOf(this).constructor;
      n = S(r, arguments, a);
    } else n = r.apply(this, arguments);

    return _possibleConstructorReturn(this, n);
  };
}

var iv = function (e) {
  _inherits(n, Lt);
  var t = ov(n);

  function n(e) {
    var r, a, o, i;
    return _classCallCheck(this, n), i = t.call(this, e), _defineProperty(_assertThisInitialized(i), "payButton", function (e) {
      return h(Rt, _extends({
        amount: i.props.amount,
        onClick: i.submit
      }, e));
    }), i.onComplete = m$1(r = i.onComplete).call(r, _assertThisInitialized(i)), i.updateWithAction = m$1(a = i.updateWithAction).call(a, _assertThisInitialized(i)), i.submit = m$1(o = i.submit).call(o, _assertThisInitialized(i)), i;
  }

  return _createClass(n, [{
    key: "isValid",
    get: function () {
      return !0;
    }
  }, {
    key: "formatData",
    value: function () {
      return {
        paymentMethod: av({
          type: this.type
        }, this.props.useKlarnaWidget ? {
          subtype: "sdk"
        } : {})
      };
    }
  }, {
    key: "updateWithAction",
    value: function (e) {
      if (e.paymentMethodType !== this.type) throw new Error("Invalid Action");
      this.componentRef.setAction(e);
    }
  }, {
    key: "render",
    value: function () {
      var e = this;
      return h(Xa, {
        i18n: this.props.i18n,
        loadingContext: this.props.loadingContext
      }, h(nv, _extends({}, this.props, {
        ref: function (t) {
          e.componentRef = t;
        },
        displayName: this.displayName,
        onComplete: function (t) {
          return e.props.onAdditionalDetails(t, e.elementRef);
        },
        onError: this.props.onError,
        payButton: this.payButton
      })));
    }
  }]), n;
}();

function lv(e) {
  var t = function () {
    if ("undefined" == typeof Reflect || !S) return !1;
    if (S.sham) return !1;
    if ("function" == typeof Proxy) return !0;

    try {
      return Boolean.prototype.valueOf.call(S(Boolean, [], function () {})), !0;
    } catch (e) {
      return !1;
    }
  }();

  return function () {
    var n,
        r = _getPrototypeOf(e);

    if (t) {
      var a = _getPrototypeOf(this).constructor;
      n = S(r, arguments, a);
    } else n = r.apply(this, arguments);

    return _possibleConstructorReturn(this, n);
  };
}

_defineProperty(iv, "type", "klarna"), _defineProperty(iv, "defaultProps", {
  useKlarnaWidget: !1
});

var sv = function (e) {
  _inherits(n, ku);
  var t = lv(n);

  function n() {
    var e, r;
    _classCallCheck(this, n);

    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i];

    return r = t.call.apply(t, y$1(e = [this]).call(e, o)), _defineProperty(_assertThisInitialized(r), "payButton", function (e) {
      return h(Rt, _extends({}, e, {
        label: r.payButtonLabel(),
        onClick: r.submit
      }));
    }), r;
  }

  return _createClass(n, [{
    key: "displayName",
    get: function () {
      var e,
          t = this.props,
          n = t.i18n,
          r = t.name;
      return t.storedPaymentMethodId ? y$1(e = "".concat(r, " ")).call(e, n.get("twint.saved")) : r || this.constructor.type;
    }
  }, {
    key: "payButtonLabel",
    value: function () {
      var e,
          t = this.props,
          n = t.i18n,
          r = t.amount,
          a = t.storedPaymentMethodId,
          o = t.name;
      return a ? Et(n, r) : y$1(e = "".concat(n.get("continueTo"), " ")).call(e, o);
    }
  }]), n;
}();

_defineProperty(sv, "type", "twint"), _defineProperty(sv, "defaultProps", {
  type: sv.type,
  showPayButton: !0
});

var cv = function (e) {
  var t = e.i18n,
      n = e.sfpState,
      r = e.focusedElement,
      a = e.setFocusOn;
  return h(yn, {
    label: t.get("creditCard.expiryDateField.title"),
    classNameModifiers: ["expireDate", "50"],
    errorMessage: n.errors.encryptedExpiryDate && t.get(n.errors.encryptedExpiryDate),
    focused: "encryptedExpiryDate" === r,
    onFocusField: function () {
      return a("encryptedExpiryDate");
    },
    dir: "ltr",
    name: "encryptedExpiryDate"
  }, h(yc, {
    encryptedFieldType: "encryptedExpiryDate",
    className: H("adyen-checkout__input", "adyen-checkout__input--small", "adyen-checkout__card__exp-date__input", [hc["adyen-checkout__input"]], {
      "adyen-checkout__input--error": n.errors.encryptedExpiryDate,
      "adyen-checkout__input--focus": "encryptedExpiryDate" === r,
      "adyen-checkout__input--valid": !!n.valid.encryptedExpiryMonth && !!n.valid.encryptedExpiryYear
    })
  }));
},
    uv = function (e) {
  var t = e.setRootNode;
  return h("div", {
    ref: t
  }, h(vh, _extends({}, e, {
    classNameModifiers: ["100"]
  })), h("div", {
    className: "adyen-checkout__field-wrapper"
  }, h(cv, e), h(gh, _extends({}, e, {
    classNameModifiers: ["50"]
  }))));
};

function dv(e, t) {
  var o = n$1(e);

  if (r$1) {
    var i = r$1(e);
    t && (i = f$1(i).call(i, function (t) {
      return a$1(e, t).enumerable;
    })), o.push.apply(o, i);
  }

  return o;
}

function pv(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n,
        r,
        s = null != arguments[t] ? arguments[t] : {};
    t % 2 ? p$1(n = dv(Object(s), !0)).call(n, function (t) {
      _defineProperty(e, t, s[t]);
    }) : o$1 ? i(e, o$1(s)) : p$1(r = dv(Object(s))).call(r, function (t) {
      l$1(e, t, a$1(s, t));
    });
  }

  return e;
}

function fv(e) {
  var t = function () {
    if ("undefined" == typeof Reflect || !S) return !1;
    if (S.sham) return !1;
    if ("function" == typeof Proxy) return !0;

    try {
      return Boolean.prototype.valueOf.call(S(Boolean, [], function () {})), !0;
    } catch (e) {
      return !1;
    }
  }();

  return function () {
    var n,
        r = _getPrototypeOf(e);

    if (t) {
      var a = _getPrototypeOf(this).constructor;
      n = S(r, arguments, a);
    } else n = r.apply(this, arguments);

    return _possibleConstructorReturn(this, n);
  };
}

var hv = function (e) {
  _inherits(n, wh);
  var t = fv(n);

  function n(e) {
    return _classCallCheck(this, n), t.call(this, pv(pv({}, e), {}, {
      pinRequired: !0,
      expiryDateRequired: !0,
      fieldsLayoutComponent: uv
    }));
  }

  return _createClass(n, [{
    key: "formatProps",
    value: function (e) {
      return pv({
        brand: e.type
      }, e);
    }
  }, {
    key: "formatData",
    value: function () {
      var e, t, n, r;
      return {
        paymentMethod: {
          type: this.constructor.type,
          brand: this.props.brand,
          encryptedCardNumber: null === (e = this.state.data) || void 0 === e ? void 0 : e.encryptedCardNumber,
          encryptedSecurityCode: null === (t = this.state.data) || void 0 === t ? void 0 : t.encryptedSecurityCode,
          encryptedExpiryMonth: null === (n = this.state.data) || void 0 === n ? void 0 : n.encryptedExpiryMonth,
          encryptedExpiryYear: null === (r = this.state.data) || void 0 === r ? void 0 : r.encryptedExpiryYear
        }
      };
    }
  }]), n;
}();

function yv(e, t) {
  var o = n$1(e);

  if (r$1) {
    var i = r$1(e);
    t && (i = f$1(i).call(i, function (t) {
      return a$1(e, t).enumerable;
    })), o.push.apply(o, i);
  }

  return o;
}

function mv(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n,
        r,
        s = null != arguments[t] ? arguments[t] : {};
    t % 2 ? p$1(n = yv(Object(s), !0)).call(n, function (t) {
      _defineProperty(e, t, s[t]);
    }) : o$1 ? i(e, o$1(s)) : p$1(r = yv(Object(s))).call(r, function (t) {
      l$1(e, t, a$1(s, t));
    });
  }

  return e;
}

function vv(e) {
  var t = function () {
    if ("undefined" == typeof Reflect || !S) return !1;
    if (S.sham) return !1;
    if ("function" == typeof Proxy) return !0;

    try {
      return Boolean.prototype.valueOf.call(S(Boolean, [], function () {})), !0;
    } catch (e) {
      return !1;
    }
  }();

  return function () {
    var n,
        r = _getPrototypeOf(e);

    if (t) {
      var a = _getPrototypeOf(this).constructor;
      n = S(r, arguments, a);
    } else n = r.apply(this, arguments);

    return _possibleConstructorReturn(this, n);
  };
}

_defineProperty(hv, "type", "mealVoucher_FR");

var gv = function (e) {
  _inherits(n, _i);
  var t = vv(n);

  function n() {
    return _classCallCheck(this, n), t.apply(this, arguments);
  }

  return _createClass(n, [{
    key: "formatProps",
    value: function (e) {
      return mv(mv({}, _get(_getPrototypeOf(n.prototype), "formatProps", this).call(this, e)), {}, {
        showImage: !1
      });
    }
  }, {
    key: "formatData",
    value: function () {
      return mv(mv({}, _get(_getPrototypeOf(n.prototype), "formatData", this).call(this)), {}, {
        browserInfo: this.browserInfo
      });
    }
  }, {
    key: "browserInfo",
    get: function () {
      return mo();
    }
  }]), n;
}();

function bv(e, t) {
  var o = n$1(e);

  if (r$1) {
    var i = r$1(e);
    t && (i = f$1(i).call(i, function (t) {
      return a$1(e, t).enumerable;
    })), o.push.apply(o, i);
  }

  return o;
}

function _v(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n,
        r,
        s = null != arguments[t] ? arguments[t] : {};
    t % 2 ? p$1(n = bv(Object(s), !0)).call(n, function (t) {
      _defineProperty(e, t, s[t]);
    }) : o$1 ? i(e, o$1(s)) : p$1(r = bv(Object(s))).call(r, function (t) {
      l$1(e, t, a$1(s, t));
    });
  }

  return e;
}

function Cv(e) {
  var t = function () {
    if ("undefined" == typeof Reflect || !S) return !1;
    if (S.sham) return !1;
    if ("function" == typeof Proxy) return !0;

    try {
      return Boolean.prototype.valueOf.call(S(Boolean, [], function () {})), !0;
    } catch (e) {
      return !1;
    }
  }();

  return function () {
    var n,
        r = _getPrototypeOf(e);

    if (t) {
      var a = _getPrototypeOf(this).constructor;
      n = S(r, arguments, a);
    } else n = r.apply(this, arguments);

    return _possibleConstructorReturn(this, n);
  };
}

_defineProperty(gv, "type", "onlinebanking_IN");

var kv = function (e) {
  _inherits(n, ro);
  var t = Cv(n);

  function n() {
    return _classCallCheck(this, n), t.apply(this, arguments);
  }

  return _createClass(n, [{
    key: "formatProps",
    value: function (e) {
      return _v(_v({}, _get(_getPrototypeOf(n.prototype), "formatProps", this).call(this, _v(_v({}, e), {
        visibility: {
          bankAccount: "editable"
        }
      }))), {}, {
        allowedCountries: e.countryCode ? [e.countryCode] : Mh
      });
    }
  }]), n;
}();

function Nv(e, t) {
  for (var n in t) e[n] = t[n];

  return e;
}

function wv(e, t) {
  for (var n in e) if ("__source" !== n && !(n in t)) return !0;

  for (var r in t) if ("__source" !== r && e[r] !== t[r]) return !0;

  return !1;
}

function Sv(e) {
  this.props = e;
}

_defineProperty(kv, "type", "ratepay_directdebit"), (Sv.prototype = new d()).isPureReactComponent = !0, Sv.prototype.shouldComponentUpdate = function (e, t) {
  return wv(this.props, e) || wv(this.state, t);
};
var xv = l.__b;

l.__b = function (e) {
  e.type && e.type.__f && e.ref && (e.props.ref = e.ref, e.ref = null), xv && xv(e);
};

var Pv = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.forward_ref") || 3911;
var Fv = l.__e;

l.__e = function (e, t, n, r) {
  if (e.then) for (var a, o = t; o = o.__;) if ((a = o.__c) && a.__c) return null == t.__e && (t.__e = n.__e, t.__k = n.__k), a.__c(e, t);
  Fv(e, t, n, r);
};

var Av = l.unmount;

function Bv() {
  this.__u = 0, this.t = null, this.__b = null;
}

function Ev(e) {
  var t = e.__.__c;
  return t && t.__e && t.__e(e);
}

function Rv() {
  this.u = null, this.o = null;
}

l.unmount = function (e) {
  var t = e.__c;
  t && t.__R && t.__R(), t && !0 === e.__h && (e.type = null), Av && Av(e);
}, (Bv.prototype = new d()).__c = function (e, t) {
  var n = t.__c,
      r = this;
  null == r.t && (r.t = []), r.t.push(n);

  var a = Ev(r.__v),
      o = !1,
      i = function () {
    o || (o = !0, n.__R = null, a ? a(l) : l());
  };

  n.__R = i;

  var l = function () {
    if (! --r.__u) {
      if (r.state.__e) {
        var e = r.state.__e;

        r.__v.__k[0] = function e(t, n, r) {
          return t && (t.__v = null, t.__k = t.__k && t.__k.map(function (t) {
            return e(t, n, r);
          }), t.__c && t.__c.__P === n && (t.__e && r.insertBefore(t.__e, t.__d), t.__c.__e = !0, t.__c.__P = r)), t;
        }(e, e.__c.__P, e.__c.__O);
      }

      var t;

      for (r.setState({
        __e: r.__b = null
      }); t = r.t.pop();) t.forceUpdate();
    }
  },
      s = !0 === t.__h;

  r.__u++ || s || r.setState({
    __e: r.__b = r.__v.__k[0]
  }), e.then(i, i);
}, Bv.prototype.componentWillUnmount = function () {
  this.t = [];
}, Bv.prototype.render = function (e, t) {
  if (this.__b) {
    if (this.__v.__k) {
      var n = document.createElement("div"),
          r = this.__v.__k[0].__c;

      this.__v.__k[0] = function e(t, n, r) {
        return t && (t.__c && t.__c.__H && (t.__c.__H.__.forEach(function (e) {
          "function" == typeof e.__c && e.__c();
        }), t.__c.__H = null), null != (t = Nv({}, t)).__c && (t.__c.__P === r && (t.__c.__P = n), t.__c = null), t.__k = t.__k && t.__k.map(function (t) {
          return e(t, n, r);
        })), t;
      }(this.__b, n, r.__O = r.__P);
    }

    this.__b = null;
  }

  var a = t.__e && h(p, null, e.fallback);
  return a && (a.__h = null), [h(p, null, t.__e ? null : e.children), a];
};

var Ov = function (e, t, n) {
  if (++n[1] === n[0] && e.o.delete(t), e.props.revealOrder && ("t" !== e.props.revealOrder[0] || !e.o.size)) for (n = e.u; n;) {
    for (; n.length > 3;) n.pop()();

    if (n[1] < n[0]) break;
    e.u = n = n[2];
  }
};

(Rv.prototype = new d()).__e = function (e) {
  var t = this,
      n = Ev(t.__v),
      r = t.o.get(e);
  return r[0]++, function (a) {
    var o = function () {
      t.props.revealOrder ? (r.push(a), Ov(t, e, r)) : a();
    };

    n ? n(o) : o();
  };
}, Rv.prototype.render = function (e) {
  this.u = null, this.o = new Map();
  var t = x(e.children);
  e.revealOrder && "b" === e.revealOrder[0] && t.reverse();

  for (var n = t.length; n--;) this.o.set(t[n], this.u = [1, 0, this.u]);

  return e.children;
}, Rv.prototype.componentDidUpdate = Rv.prototype.componentDidMount = function () {
  var e = this;
  this.o.forEach(function (t, n) {
    Ov(e, n, t);
  });
};

var Dv = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103,
    Mv = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
    Tv = "undefined" != typeof document,
    Iv = function (e) {
  return ("undefined" != typeof Symbol && "symbol" == typeof Symbol() ? /fil|che|rad/i : /fil|che|ra/i).test(e);
};

d.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function (e) {
  Object.defineProperty(d.prototype, e, {
    configurable: !0,
    get: function () {
      return this["UNSAFE_" + e];
    },
    set: function (t) {
      Object.defineProperty(this, e, {
        configurable: !0,
        writable: !0,
        value: t
      });
    }
  });
});
var jv = l.event;

function Vv() {}

function Lv() {
  return this.cancelBubble;
}

function Uv() {
  return this.defaultPrevented;
}

l.event = function (e) {
  return jv && (e = jv(e)), e.persist = Vv, e.isPropagationStopped = Lv, e.isDefaultPrevented = Uv, e.nativeEvent = e;
};

var qv = {
  configurable: !0,
  get: function () {
    return this.class;
  }
},
    Kv = l.vnode;

l.vnode = function (e) {
  var t = e.type,
      n = e.props,
      r = n;

  if ("string" == typeof t) {
    var a = -1 === t.indexOf("-");

    for (var o in r = {}, n) {
      var i = n[o];
      Tv && "children" === o && "noscript" === t || "value" === o && "defaultValue" in n && null == i || ("defaultValue" === o && "value" in n && null == n.value ? o = "value" : "download" === o && !0 === i ? i = "" : /ondoubleclick/i.test(o) ? o = "ondblclick" : /^onchange(textarea|input)/i.test(o + t) && !Iv(n.type) ? o = "oninput" : /^onfocus$/i.test(o) ? o = "onfocusin" : /^onblur$/i.test(o) ? o = "onfocusout" : /^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(o) ? o = o.toLowerCase() : a && Mv.test(o) ? o = o.replace(/[A-Z0-9]/, "-$&").toLowerCase() : null === i && (i = void 0), r[o] = i);
    }

    "select" == t && r.multiple && Array.isArray(r.value) && (r.value = x(n.children).forEach(function (e) {
      e.props.selected = -1 != r.value.indexOf(e.props.value);
    })), "select" == t && null != r.defaultValue && (r.value = x(n.children).forEach(function (e) {
      e.props.selected = r.multiple ? -1 != r.defaultValue.indexOf(e.props.value) : r.defaultValue == e.props.value;
    })), e.props = r, n.class != n.className && (qv.enumerable = "className" in n, null != n.className && (r.class = n.className), Object.defineProperty(r, "className", qv));
  }

  e.$$typeof = Dv, Kv && Kv(e);
};

var Hv = l.__r;

l.__r = function (e) {
  Hv && Hv(e);
};

var zv = {
  virtualPaymentAddress: {
    validate: function (e) {
      return !!e && e.length > 0;
    },
    errorMessage: "",
    modes: ["blur"]
  },
  default: {
    validate: function (e) {
      return !!e && e.length > 0;
    },
    errorMessage: "",
    modes: ["blur"]
  }
},
    Wv = function (e) {
  function t(t) {
    var n = Nv({}, t);
    return delete n.ref, e(n, t.ref || null);
  }

  return t.$$typeof = Pv, t.render = t, t.prototype.isReactComponent = t.__f = !0, t.displayName = "ForwardRef(" + (e.displayName || e.name) + ")", t;
}(function (e, t) {
  var n = cr({
    schema: ["virtualPaymentAddress"],
    defaultData: e.data,
    rules: zv
  }),
      r = n.handleChangeFor,
      a = n.triggerValidation,
      o = n.data,
      i = n.valid,
      l = n.errors,
      s = n.isValid,
      c = bt(function () {
    a();
  }, [a]);
  return function (e, t, n) {
    ot = 6, mt(function () {
      return "function" == typeof e ? (e(t()), function () {
        return e(null);
      }) : e ? (e.current = t(), function () {
        return e.current = null;
      }) : void 0;
    }, null == n ? n : n.concat(e));
  }(t, function () {
    return {
      validateInput: c
    };
  }), yt(function () {
    e.onChange({
      data: o,
      valid: i,
      errors: l,
      isValid: s
    });
  }, [o, i, l]), h(yn, {
    label: "Virtual Payment Address",
    errorMessage: !!l.virtualPaymentAddress,
    classNameModifiers: ["vpa"],
    name: "virtualPaymentAddress"
  }, Zn("text", {
    name: "virtualPaymentAddress",
    autocorrect: "off",
    spellcheck: !1,
    disabled: e.disabled,
    value: o.virtualPaymentAddress,
    onInput: r("virtualPaymentAddress", "input"),
    onBlur: r("virtualPaymentAddress", "blur")
  }));
});

function Gv(e) {
  var t = e.onChange,
      n = e.onGenerateQrCodeClick,
      r = e.payButton,
      a = Pt(),
      o = a.i18n,
      i = a.loadingContext,
      l = vt(null),
      s = ft("ready"),
      c = _slicedToArray(s, 2),
      u = c[0],
      d = c[1],
      p$1 = ft(!1),
      f = _slicedToArray(p$1, 2),
      h$1 = f[0],
      y = f[1];
  this.setStatus = function (e, t) {
    y(t), d(e);
  }, this.showValidation = function () {
    l.current.validateInput();
  };
  var m = gt(function () {
    return "loading" === u && h$1;
  }, [u, h$1]);
  return h(p, null, h(Wv, {
    disabled: "loading" === u,
    ref: l,
    onChange: t
  }), r({
    label: "".concat(o.get("continue")),
    status: m ? "default" : u,
    disabled: "loading" === u
  }), h(li, {
    label: o.get("qrCodeOrApp")
  }), h(At, {
    icon: rt({
      loadingContext: i,
      imageFolder: "components/"
    })("qr_dark"),
    status: m ? "loading" : "default",
    disabled: "loading" === u,
    variant: "secondary",
    label: o.get("generateQRCode"),
    onClick: n
  }));
}

function Yv(e, t) {
  var o = n$1(e);

  if (r$1) {
    var i = r$1(e);
    t && (i = f$1(i).call(i, function (t) {
      return a$1(e, t).enumerable;
    })), o.push.apply(o, i);
  }

  return o;
}

function $v(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n,
        r,
        s = null != arguments[t] ? arguments[t] : {};
    t % 2 ? p$1(n = Yv(Object(s), !0)).call(n, function (t) {
      _defineProperty(e, t, s[t]);
    }) : o$1 ? i(e, o$1(s)) : p$1(r = Yv(Object(s))).call(r, function (t) {
      l$1(e, t, a$1(s, t));
    });
  }

  return e;
}

function Zv(e) {
  var t = function () {
    if ("undefined" == typeof Reflect || !S) return !1;
    if (S.sham) return !1;
    if ("function" == typeof Proxy) return !0;

    try {
      return Boolean.prototype.valueOf.call(S(Boolean, [], function () {})), !0;
    } catch (e) {
      return !1;
    }
  }();

  return function () {
    var n,
        r = _getPrototypeOf(e);

    if (t) {
      var a = _getPrototypeOf(this).constructor;
      n = S(r, arguments, a);
    } else n = r.apply(this, arguments);

    return _possibleConstructorReturn(this, n);
  };
}

var Jv = function (e) {
  _inherits(n, Lt);
  var t = Zv(n);

  function n(e) {
    var r, a;
    return _classCallCheck(this, n), (a = t.call(this, e)).handleGenerateQrCodeClick = m$1(r = a.handleGenerateQrCodeClick).call(r, _assertThisInitialized(a)), a;
  }

  return _createClass(n, [{
    key: "isValid",
    get: function () {
      return !!this.state.isValid;
    }
  }, {
    key: "formatData",
    value: function () {
      var e = this.state.data,
          t = e.isQrCodeFlow,
          n = e.virtualPaymentAddress;
      return {
        paymentMethod: $v({
          type: t ? "upi_qr" : "upi_collect"
        }, n && {
          virtualPaymentAddress: n
        })
      };
    }
  }, {
    key: "setStatus",
    value: function (e) {
      var t, n, r;
      return null === (t = this.componentRef) || void 0 === t || null === (n = t.setStatus) || void 0 === n || n.call(t, e, null === (r = this.state.data) || void 0 === r ? void 0 : r.isQrCodeFlow), this;
    }
  }, {
    key: "handleGenerateQrCodeClick",
    value: function () {
      this.setState({
        data: {
          isQrCodeFlow: !0
        },
        valid: {},
        errors: {},
        isValid: !0
      }), this.submit();
    }
  }, {
    key: "renderContent",
    value: function (e) {
      var t = this;

      switch (e) {
        case "qrCode":
          return h(lf, _extends({
            ref: function (e) {
              t.componentRef = e;
            }
          }, this.props, {
            qrCodeData: this.props.qrCodeData ? encodeURIComponent(this.props.qrCodeData) : null,
            type: "upi_qr",
            brandLogo: this.props.brandLogo || this.icon,
            onComplete: this.onComplete,
            introduction: this.props.i18n.get("upi.qrCodeWaitingMessage"),
            countdownTime: 5
          }));

        case "await":
          return h(nm, {
            ref: function (e) {
              t.componentRef = e;
            },
            onError: this.props.onError,
            clientKey: this.props.clientKey,
            paymentData: this.props.paymentData,
            onComplete: this.onComplete,
            brandLogo: this.icon,
            type: "upi_collect",
            messageText: this.props.i18n.get("upi.vpaWaitingMessage"),
            awaitText: this.props.i18n.get("await.waitForConfirmation"),
            showCountdownTimer: !0,
            countdownTime: 5
          });

        default:
          return h(Gv, {
            ref: function (e) {
              t.componentRef = e;
            },
            payButton: this.payButton,
            onChange: this.setState,
            onSubmit: this.submit,
            onGenerateQrCodeClick: this.handleGenerateQrCodeClick
          });
      }
    }
  }, {
    key: "render",
    value: function () {
      var e = this.props.type;
      return h(Xa, {
        i18n: this.props.i18n,
        loadingContext: this.props.loadingContext
      }, this.renderContent(e));
    }
  }]), n;
}();

function Qv(e, t) {
  var o = n$1(e);

  if (r$1) {
    var i = r$1(e);
    t && (i = f$1(i).call(i, function (t) {
      return a$1(e, t).enumerable;
    })), o.push.apply(o, i);
  }

  return o;
}

function Xv(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n,
        r,
        s = null != arguments[t] ? arguments[t] : {};
    t % 2 ? p$1(n = Qv(Object(s), !0)).call(n, function (t) {
      _defineProperty(e, t, s[t]);
    }) : o$1 ? i(e, o$1(s)) : p$1(r = Qv(Object(s))).call(r, function (t) {
      l$1(e, t, a$1(s, t));
    });
  }

  return e;
}

function eg(e) {
  var t = function () {
    if ("undefined" == typeof Reflect || !S) return !1;
    if (S.sham) return !1;
    if ("function" == typeof Proxy) return !0;

    try {
      return Boolean.prototype.valueOf.call(S(Boolean, [], function () {})), !0;
    } catch (e) {
      return !1;
    }
  }();

  return function () {
    var n,
        r = _getPrototypeOf(e);

    if (t) {
      var a = _getPrototypeOf(this).constructor;
      n = S(r, arguments, a);
    } else n = r.apply(this, arguments);

    return _possibleConstructorReturn(this, n);
  };
}

_defineProperty(Jv, "type", "upi");

var tg = function (e) {
  _inherits(n, _i);
  var t = eg(n);

  function n() {
    return _classCallCheck(this, n), t.apply(this, arguments);
  }

  return _createClass(n, [{
    key: "formatProps",
    value: function (e) {
      return Xv(Xv({}, _get(_getPrototypeOf(n.prototype), "formatProps", this).call(this, e)), {}, {
        showImage: !1
      });
    }
  }, {
    key: "formatData",
    value: function () {
      return Xv(Xv({}, _get(_getPrototypeOf(n.prototype), "formatData", this).call(this)), {}, {
        browserInfo: this.browserInfo
      });
    }
  }, {
    key: "browserInfo",
    get: function () {
      return mo();
    }
  }]), n;
}();

function ng(e, t) {
  var o = n$1(e);

  if (r$1) {
    var i = r$1(e);
    t && (i = f$1(i).call(i, function (t) {
      return a$1(e, t).enumerable;
    })), o.push.apply(o, i);
  }

  return o;
}

function rg(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n,
        r,
        s = null != arguments[t] ? arguments[t] : {};
    t % 2 ? p$1(n = ng(Object(s), !0)).call(n, function (t) {
      _defineProperty(e, t, s[t]);
    }) : o$1 ? i(e, o$1(s)) : p$1(r = ng(Object(s))).call(r, function (t) {
      l$1(e, t, a$1(s, t));
    });
  }

  return e;
}

_defineProperty(tg, "type", "wallet_IN");

var ag = {
  dropin: ky,
  ach: Ty,
  address: $m,
  afterpay: uo,
  afterpay_default: uo,
  afterpay_b2b: yo,
  amazonpay: jo,
  amex: Jc,
  applepay: $o,
  atome: ai,
  bankTransfer_IBAN: wm,
  bcmc: tu,
  bcmc_mobile: vf,
  bcmc_mobile_QR: vf,
  blik: bm,
  billdesk_online: wi,
  billdesk_wallet: Fi,
  boletobancario: Jf,
  boletobancario_bancodobrasil: Jf,
  boletobancario_bradesco: Jf,
  boletobancario_hsbc: Jf,
  boletobancario_itau: Jf,
  boletobancario_santander: Jf,
  primeiropay_boleto: Jf,
  card: Jc,
  storedCard: Jc,
  diners: Jc,
  directdebit_GB: Gm,
  discover: Jc,
  doku: Vf,
  doku_alfamart: Vf,
  doku_permata_lite_atm: Vf,
  doku_indomaret: Vf,
  doku_atm_mandiri_va: Vf,
  doku_sinarmas_va: Vf,
  doku_mandiri_va: Vf,
  doku_cimb_va: Vf,
  doku_danamon_va: Vf,
  doku_bri_va: Vf,
  doku_bni_va: Vf,
  doku_bca_va: Vf,
  doku_wallet: Vf,
  donation: du,
  dotpay: ch,
  dragonpay_ebanking: Of,
  dragonpay_otc_banking: Of,
  dragonpay_otc_non_banking: Of,
  dragonpay_otc_philippines: Of,
  econtext_seven_eleven: rd,
  econtext_atm: rd,
  econtext_stores: rd,
  econtext_online: rd,
  entercash: Gu,
  eps: fh,
  facilypay_3x: sd,
  facilypay_4x: pd,
  facilypay_6x: md,
  facilypay_10x: _d,
  facilypay_12x: wd,
  giropay: xu,
  ideal: xd,
  jcb: Jc,
  kcp: Jc,
  klarna: iv,
  klarna_paynow: iv,
  klarna_account: iv,
  maestro: Jc,
  mbway: im,
  mc: Jc,
  molpay_ebanking_fpx_MY: bf,
  molpay_ebanking_TH: Cf,
  molpay_ebanking_VN: Nf,
  onlinebanking_IN: gv,
  openbanking_UK: Sf,
  paypal: zd,
  payu_IN_cashcard: Bh,
  payu_IN_nb: Dh,
  paywithgoogle: zu,
  personal_details: Jm,
  googlepay: zu,
  pix: Tm,
  qiwiwallet: rp,
  ratepay: Vh,
  ratepay_directdebit: kv,
  redirect: ku,
  securedfields: dp,
  sepadirectdebit: hp,
  scheme: Jc,
  threeDS2Challenge: Lp,
  threeDS2DeviceFingerprint: Yp,
  upi: Jv,
  upi_qr: Jv,
  upi_collect: Jv,
  visa: Jc,
  wallet_IN: tg,
  wechatpay: hf,
  wechatpayQR: hf,
  oxxo: nh,
  multibanco: lh,
  giftcard: wh,
  vipps: xh,
  swish: qh,
  affirm: Am,
  twint: sv,
  mealVoucher_FR_natixis: hv,
  mealVoucher_FR_sodexo: hv,
  mealVoucher_FR_groupeup: hv,
  default: null
},
    og = function (e, t) {
  var n,
      r = ag[e] || ag.default;
  return r ? new r(rg(rg({}, t), {}, {
    id: y$1(n = "".concat(e, "-")).call(n, We())
  })) : null;
},
    ig = function (e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
      r = e;
  return "scheme" === e && (r = n ? "storedCard" : "card"), t[r] || {};
};

function lg(e) {
  return !this.length || C$1(this).call(this, e.type) > -1;
}

function sg(e) {
  return !this.length || C$1(this).call(this, e.type) < 0;
}

function cg(e) {
  var t;
  return !!e && !!e.supportedShopperInteractions && h$1(t = e.supportedShopperInteractions).call(t, "Ecommerce");
}

var ug = ["scheme", "blik", "twint"];

function dg(e) {
  return !!e && !!e.type && h$1(ug).call(ug, e.type);
}

function pg(e, t) {
  var o = n$1(e);

  if (r$1) {
    var i = r$1(e);
    t && (i = f$1(i).call(i, function (t) {
      return a$1(e, t).enumerable;
    })), o.push.apply(o, i);
  }

  return o;
}

function fg(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n,
        r,
        s = null != arguments[t] ? arguments[t] : {};
    t % 2 ? p$1(n = pg(Object(s), !0)).call(n, function (t) {
      _defineProperty(e, t, s[t]);
    }) : o$1 ? i(e, o$1(s)) : p$1(r = pg(Object(s))).call(r, function (t) {
      l$1(e, t, a$1(s, t));
    });
  }

  return e;
}

var hg = function (e) {
  return fg(fg({}, e), {}, {
    storedPaymentMethodId: e.id
  });
},
    yg = function (e, t) {
  var n,
      r = t.allowPaymentMethods,
      a = void 0 === r ? [] : r,
      o = t.removePaymentMethods,
      i = void 0 === o ? [] : o;
  return e ? f$1(n = f$1(e).call(e, lg, a)).call(n, sg, i) : [];
},
    mg = function (e, t) {
  var n,
      r,
      a,
      o,
      i = t.allowPaymentMethods,
      l = void 0 === i ? [] : i,
      s = t.removePaymentMethods,
      c = void 0 === s ? [] : s;
  return e ? K(n = f$1(r = f$1(a = f$1(o = f$1(e).call(e, dg)).call(o, lg, l)).call(a, sg, c)).call(r, cg)).call(n, hg) : [];
},
    vg = function (e) {
  var t, n;
  if ("string" == typeof e) throw new Error('paymentMethodsResponse was provided but of an incorrect type (should be an object but a string was provided).Try JSON.parse("{...}") your paymentMethodsResponse.');
  if (e instanceof Array) throw new Error("paymentMethodsResponse was provided but of an incorrect type (should be an object but an array was provided).Please check you are passing the whole response.");
  !e || null != e && null !== (t = e.paymentMethods) && void 0 !== t && t.length || null != e && null !== (n = e.storePaymentMethods) && void 0 !== n && n.length || console.warn("paymentMethodsResponse was provided but no payment methods were found.");
},
    gg = function () {
  function e(t) {
    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    _classCallCheck(this, e), _defineProperty(this, "paymentMethods", []), _defineProperty(this, "storedPaymentMethods", []), vg(t), this.paymentMethods = t ? yg(t.paymentMethods, n) : [], this.storedPaymentMethods = t ? mg(t.storedPaymentMethods, n) : [];
  }

  return _createClass(e, [{
    key: "mapCreatedComponentType",
    value: function (e) {
      return "card" === e ? "scheme" : e;
    }
  }, {
    key: "has",
    value: function (e) {
      var t,
          n = this;
      return Boolean(g$1(t = this.paymentMethods).call(t, function (t) {
        return t.type === n.mapCreatedComponentType(e);
      }));
    }
  }, {
    key: "find",
    value: function (e) {
      var t,
          n = this;
      return g$1(t = this.paymentMethods).call(t, function (t) {
        return t.type === n.mapCreatedComponentType(e);
      });
    }
  }]), e;
}();

function bg(e, t) {
  var o = n$1(e);

  if (r$1) {
    var i = r$1(e);
    t && (i = f$1(i).call(i, function (t) {
      return a$1(e, t).enumerable;
    })), o.push.apply(o, i);
  }

  return o;
}

function _g(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n,
        r,
        s = null != arguments[t] ? arguments[t] : {};
    t % 2 ? p$1(n = bg(Object(s), !0)).call(n, function (t) {
      _defineProperty(e, t, s[t]);
    }) : o$1 ? i(e, o$1(s)) : p$1(r = bg(Object(s))).call(r, function (t) {
      l$1(e, t, a$1(s, t));
    });
  }

  return e;
}

var Cg = function (e) {
  return function (t, n) {
    return og(t.paymentMethodType, _g(_g(_g({}, t), n), {}, {
      onComplete: n.onAdditionalDetails,
      onError: n.onError,
      statusType: e
    }));
  };
},
    kg = {
  redirect: function (e, t) {
    return og("redirect", _g(_g(_g({}, t), e), {}, {
      statusType: "redirect"
    }));
  },
  threeDS2Fingerprint: function (e, t) {
    return og("threeDS2DeviceFingerprint", _g(_g({
      createFromAction: t.createFromAction,
      token: e.token,
      paymentData: e.paymentData,
      onError: t.onError,
      showSpinner: !t.isDropin,
      isDropin: !!t.isDropin
    }, t), {}, {
      type: "IdentifyShopper",
      onComplete: t.onAdditionalDetails,
      statusType: "loading",
      useOriginalFlow: !0
    }));
  },
  threeDS2Challenge: function (e, t) {
    var n;
    return og("threeDS2Challenge", _g(_g({}, t), {}, {
      token: e.token,
      paymentData: e.paymentData,
      onComplete: t.onAdditionalDetails,
      onError: t.onError,
      size: null !== (n = t.size) && void 0 !== n ? n : "02",
      isDropin: !!t.isDropin,
      type: "ChallengeShopper",
      statusType: "custom",
      useOriginalFlow: !0
    }));
  },
  threeDS2: function (e, t) {
    var n = "fingerprint" === e.subtype ? "threeDS2DeviceFingerprint" : "threeDS2Challenge",
        r = "fingerprint" === e.subtype ? e.paymentData : e.authorisationToken,
        a = _g({
      token: e.token,
      paymentData: r,
      onComplete: t.onAdditionalDetails,
      onError: t.onError,
      isDropin: !!t.isDropin,
      loadingContext: t.loadingContext,
      clientKey: t.clientKey,
      _parentInstance: t._parentInstance,
      paymentMethodType: t.paymentMethodType,
      challengeWindowSize: t.challengeWindowSize
    }, function (e, t) {
      if ("fingerprint" === e) {
        var n = _l(t.elementRef ? Op : Dp).from(t);

        return n.showSpinner = !t.isDropin, n.statusType = "loading", n;
      }

      return {
        statusType: "custom",
        i18n: t.i18n
      };
    }(e.subtype, t));

    return og(n, a);
  },
  voucher: Cg("custom"),
  qrCode: Cg("custom"),
  await: Cg("custom"),
  bankTransfer: Cg("custom"),
  sdk: Cg("custom")
};

function Ng(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      n = kg[e.type];
  if (n && "function" == typeof n) return n(e, t);
  throw new Error("Invalid Action");
}

var wg = "https://checkoutshopper-live.adyen.com/checkoutshopper/";

function Sg(e, t) {
  var o = n$1(e);

  if (r$1) {
    var i = r$1(e);
    t && (i = f$1(i).call(i, function (t) {
      return a$1(e, t).enumerable;
    })), o.push.apply(o, i);
  }

  return o;
}

var xg = function (e) {
  return function (t) {
    var r,
        s,
        c = function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n,
            r,
            s = null != arguments[t] ? arguments[t] : {};
        t % 2 ? p$1(n = Sg(Object(s), !0)).call(n, function (t) {
          _defineProperty(e, t, s[t]);
        }) : o$1 ? i(e, o$1(s)) : p$1(r = Sg(Object(s))).call(r, function (t) {
          l$1(e, t, a$1(s, t));
        });
      }

      return e;
    }({
      version: "5.21.0",
      payload_version: 1,
      platform: "web",
      locale: e.locale
    }, t),
        u = K(r = n$1(c)).call(r, function (e) {
      var t;
      return y$1(t = "".concat(encodeURIComponent(e), "=")).call(t, encodeURIComponent(c[e]));
    }).join("&");

    new Image().src = y$1(s = "".concat(e.loadingContext, "images/analytics.png?")).call(s, u);
  };
};

function Pg(e, t) {
  var o = n$1(e);

  if (r$1) {
    var i = r$1(e);
    t && (i = f$1(i).call(i, function (t) {
      return a$1(e, t).enumerable;
    })), o.push.apply(o, i);
  }

  return o;
}

var Fg = function (e) {
  return function (t) {
    if (!e.clientKey) return v$1.reject();

    var n = {
      errorLevel: "silent",
      loadingContext: e.loadingContext,
      path: "v2/analytics/log?clientKey=".concat(e.clientKey)
    },
        r = function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n,
            r,
            s = null != arguments[t] ? arguments[t] : {};
        t % 2 ? p$1(n = Pg(Object(s), !0)).call(n, function (t) {
          _defineProperty(e, t, s[t]);
        }) : o$1 ? i(e, o$1(s)) : p$1(r = Pg(Object(s))).call(r, function (t) {
          l$1(e, t, a$1(s, t));
        });
      }

      return e;
    }({
      version: "5.21.0",
      channel: "Web",
      locale: e.locale,
      flavor: "components",
      userAgent: navigator.userAgent,
      referrer: window.location.href,
      screenWidth: window.screen.width
    }, t);

    return _a(n, r);
  };
},
    Ag = function () {
  function e() {
    _classCallCheck(this, e), _defineProperty(this, "events", []);
  }

  return _createClass(e, [{
    key: "add",
    value: function (e) {
      this.events.push(e);
    }
  }, {
    key: "run",
    value: function (e) {
      var t,
          n = K(t = this.events).call(t, function (t) {
        return t(e);
      });
      return this.events = [], v$1.all(n);
    }
  }]), e;
}();

function Bg(e, t) {
  var o = n$1(e);

  if (r$1) {
    var i = r$1(e);
    t && (i = f$1(i).call(i, function (t) {
      return a$1(e, t).enumerable;
    })), o.push.apply(o, i);
  }

  return o;
}

function Eg(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n,
        r,
        s = null != arguments[t] ? arguments[t] : {};
    t % 2 ? p$1(n = Bg(Object(s), !0)).call(n, function (t) {
      _defineProperty(e, t, s[t]);
    }) : o$1 ? i(e, o$1(s)) : p$1(r = Bg(Object(s))).call(r, function (t) {
      l$1(e, t, a$1(s, t));
    });
  }

  return e;
}

var Rg = function () {
  function e(t) {
    var n = t.loadingContext,
        r = t.locale,
        a = t.clientKey,
        o = t.analytics;
    _classCallCheck(this, e), _defineProperty(this, "checkoutAttemptId", null), _defineProperty(this, "props", void 0), _defineProperty(this, "logEvent", void 0), _defineProperty(this, "logTelemetry", void 0), _defineProperty(this, "queue", new Ag()), _defineProperty(this, "collectId", void 0), this.props = Eg(Eg({}, e.defaultProps), o), this.logEvent = xg({
      loadingContext: n,
      locale: r
    }), this.logTelemetry = Fg({
      loadingContext: n,
      locale: r,
      clientKey: a
    }), this.collectId = function (e) {
      var t,
          n = e.loadingContext,
          r = e.clientKey,
          a = e.experiments,
          o = {
        errorLevel: "silent",
        loadingContext: n,
        path: "v2/analytics/id?clientKey=".concat(r)
      };
      return function () {
        return t || (r ? t = _a(o, {
          experiments: a
        }).then(function (e) {
          return null == e ? void 0 : e.id;
        }).catch(function () {}) : v$1.reject());
      };
    }({
      loadingContext: n,
      clientKey: a,
      experiments: this.props.experiments
    });
    var i = this.props,
        l = i.telemetry,
        s = i.enabled;
    !0 === l && !0 === s && this.props.checkoutAttemptId && (this.checkoutAttemptId = this.props.checkoutAttemptId, this.queue.run(this.checkoutAttemptId));
  }

  return _createClass(e, [{
    key: "send",
    value: function (e) {
      var t = this,
          n = this.props,
          r = n.enabled,
          a = n.payload,
          o = n.telemetry;

      if (!0 === r) {
        if (!0 !== o || this.checkoutAttemptId || this.collectId().then(function (e) {
          t.checkoutAttemptId = e, t.queue.run(t.checkoutAttemptId);
        }), !0 === o) {
          this.queue.add(function (n) {
            return t.logTelemetry(Eg(Eg(Eg({}, e), a && Eg({}, a)), {}, {
              checkoutAttemptId: n
            })).catch(function () {});
          }), this.checkoutAttemptId && this.queue.run(this.checkoutAttemptId);
        }

        this.logEvent(e);
      }
    }
  }]), e;
}();

function Og(e) {
  var t;
  return k$1(t = n$1(e)).call(t, function (t, n) {
    return h$1(Je).call(Je, n) && (t[n] = e[n]), t;
  }, {});
}

_defineProperty(Rg, "defaultProps", {
  enabled: !0,
  telemetry: !0,
  checkoutAttemptId: null,
  experiments: []
});

function Dg(e, t) {
  var o = n$1(e);

  if (r$1) {
    var i = r$1(e);
    t && (i = f$1(i).call(i, function (t) {
      return a$1(e, t).enumerable;
    })), o.push.apply(o, i);
  }

  return o;
}

function Mg(e, t) {
  var n,
      r,
      s = y$1(n = y$1(r = "".concat("v1", "/sessions/")).call(r, t.id, "/payments?clientKey=")).call(n, t.clientKey),
      c = function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var n,
          r,
          s = null != arguments[t] ? arguments[t] : {};
      t % 2 ? p$1(n = Dg(Object(s), !0)).call(n, function (t) {
        _defineProperty(e, t, s[t]);
      }) : o$1 ? i(e, o$1(s)) : p$1(r = Dg(Object(s))).call(r, function (t) {
        l$1(e, t, a$1(s, t));
      });
    }

    return e;
  }({
    sessionData: t.data
  }, e);

  return _a({
    loadingContext: t.loadingContext,
    path: s,
    errorLevel: "fatal"
  }, c);
}

function Tg(e, t) {
  var o = n$1(e);

  if (r$1) {
    var i = r$1(e);
    t && (i = f$1(i).call(i, function (t) {
      return a$1(e, t).enumerable;
    })), o.push.apply(o, i);
  }

  return o;
}

function Ig(e, t) {
  var n,
      r,
      s = y$1(n = y$1(r = "".concat("v1", "/sessions/")).call(r, t.id, "/paymentDetails?clientKey=")).call(n, t.clientKey),
      c = function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var n,
          r,
          s = null != arguments[t] ? arguments[t] : {};
      t % 2 ? p$1(n = Tg(Object(s), !0)).call(n, function (t) {
        _defineProperty(e, t, s[t]);
      }) : o$1 ? i(e, o$1(s)) : p$1(r = Tg(Object(s))).call(r, function (t) {
        l$1(e, t, a$1(s, t));
      });
    }

    return e;
  }({
    sessionData: t.data
  }, e);

  return _a({
    loadingContext: t.loadingContext,
    path: s,
    errorLevel: "fatal"
  }, c);
}

function jg(e, t) {
  var o = n$1(e);

  if (r$1) {
    var i = r$1(e);
    t && (i = f$1(i).call(i, function (t) {
      return a$1(e, t).enumerable;
    })), o.push.apply(o, i);
  }

  return o;
}

function Vg(e, t) {
  var n,
      r,
      s = y$1(n = y$1(r = "".concat("v1", "/sessions/")).call(r, e.id, "/setup?clientKey=")).call(n, e.clientKey),
      c = function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var n,
          r,
          s = null != arguments[t] ? arguments[t] : {};
      t % 2 ? p$1(n = jg(Object(s), !0)).call(n, function (t) {
        _defineProperty(e, t, s[t]);
      }) : o$1 ? i(e, o$1(s)) : p$1(r = jg(Object(s))).call(r, function (t) {
        l$1(e, t, a$1(s, t));
      });
    }

    return e;
  }({
    sessionData: e.data
  }, t.order ? {
    order: {
      orderData: t.order.orderData,
      pspReference: t.order.pspReference
    }
  } : {});

  return _a({
    loadingContext: e.loadingContext,
    path: s,
    errorLevel: "fatal",
    errorMessage: "ERROR: Invalid ClientKey"
  }, c);
}

function Lg(e, t) {
  var o = n$1(e);

  if (r$1) {
    var i = r$1(e);
    t && (i = f$1(i).call(i, function (t) {
      return a$1(e, t).enumerable;
    })), o.push.apply(o, i);
  }

  return o;
}

function Ug(e, t) {
  var n,
      r,
      s = y$1(n = y$1(r = "".concat("v1", "/sessions/")).call(r, t.id, "/paymentMethodBalance?clientKey=")).call(n, t.clientKey),
      c = function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var n,
          r,
          s = null != arguments[t] ? arguments[t] : {};
      t % 2 ? p$1(n = Lg(Object(s), !0)).call(n, function (t) {
        _defineProperty(e, t, s[t]);
      }) : o$1 ? i(e, o$1(s)) : p$1(r = Lg(Object(s))).call(r, function (t) {
        l$1(e, t, a$1(s, t));
      });
    }

    return e;
  }({
    sessionData: t.data
  }, e);

  return _a({
    loadingContext: t.loadingContext,
    path: s,
    errorLevel: "fatal"
  }, c);
}

var qg = function () {
  function e(t) {
    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window.localStorage;
    _classCallCheck(this, e), _defineProperty(this, "prefix", "adyen-checkout__"), _defineProperty(this, "key", void 0), _defineProperty(this, "storage", void 0), this.storage = n, this.key = this.prefix + t;
  }

  return _createClass(e, [{
    key: "get",
    value: function () {
      try {
        return JSON.parse(this.storage.getItem(this.key));
      } catch (e) {
        return null;
      }
    }
  }, {
    key: "set",
    value: function (e) {
      this.storage.setItem(this.key, W(e));
    }
  }, {
    key: "remove",
    value: function () {
      this.storage.removeItem(this.key);
    }
  }]), e;
}();

function Kg(e, t) {
  var o = n$1(e);

  if (r$1) {
    var i = r$1(e);
    t && (i = f$1(i).call(i, function (t) {
      return a$1(e, t).enumerable;
    })), o.push.apply(o, i);
  }

  return o;
}

function Hg(e) {
  if (!e || !e.id) throw new Error("Invalid session");
  return function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var n,
          r,
          s = null != arguments[t] ? arguments[t] : {};
      t % 2 ? p$1(n = Kg(Object(s), !0)).call(n, function (t) {
        _defineProperty(e, t, s[t]);
      }) : o$1 ? i(e, o$1(s)) : p$1(r = Kg(Object(s))).call(r, function (t) {
        l$1(e, t, a$1(s, t));
      });
    }

    return e;
  }({
    id: e.id
  }, e.sessionData ? {
    sessionData: e.sessionData
  } : {});
}

function zg(e, t) {
  var o = n$1(e);

  if (r$1) {
    var i = r$1(e);
    t && (i = f$1(i).call(i, function (t) {
      return a$1(e, t).enumerable;
    })), o.push.apply(o, i);
  }

  return o;
}

var Wg = function () {
  function e(t, n, r) {
    _classCallCheck(this, e), _defineProperty(this, "session", void 0), _defineProperty(this, "storage", void 0), _defineProperty(this, "clientKey", void 0), _defineProperty(this, "loadingContext", void 0), _defineProperty(this, "configuration", void 0);
    var a = Hg(t);
    if (!n) throw new Error("No clientKey available");
    this.storage = new qg("session"), this.clientKey = n, this.loadingContext = r, this.session = a, this.session.sessionData ? this.storeSession() : this.session = this.getStoredSession();
  }

  return _createClass(e, [{
    key: "id",
    get: function () {
      return this.session.id;
    }
  }, {
    key: "data",
    get: function () {
      return this.session.sessionData;
    }
  }, {
    key: "updateSessionData",
    value: function (e) {
      this.session.sessionData = e, this.storeSession();
    }
  }, {
    key: "setupSession",
    value: function (e) {
      var t = this;
      return Vg(this, e).then(function (e) {
        return e.configuration && (t.configuration = function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n,
                r,
                s = null != arguments[t] ? arguments[t] : {};
            t % 2 ? p$1(n = zg(Object(s), !0)).call(n, function (t) {
              _defineProperty(e, t, s[t]);
            }) : o$1 ? i(e, o$1(s)) : p$1(r = zg(Object(s))).call(r, function (t) {
              l$1(e, t, a$1(s, t));
            });
          }

          return e;
        }({}, e.configuration)), e;
      });
    }
  }, {
    key: "submitPayment",
    value: function (e) {
      var t = this;
      return Mg(e, this).then(function (e) {
        return e.sessionData && t.updateSessionData(e.sessionData), e;
      });
    }
  }, {
    key: "submitDetails",
    value: function (e) {
      var t = this;
      return Ig(e, this).then(function (e) {
        return e.sessionData && t.updateSessionData(e.sessionData), e;
      });
    }
  }, {
    key: "checkBalance",
    value: function (e) {
      var t = this;
      return Ug(e, this).then(function (e) {
        return e.sessionData && t.updateSessionData(e.sessionData), e;
      });
    }
  }, {
    key: "createOrder",
    value: function () {
      var e = this;
      return function (e) {
        var t,
            n,
            r = y$1(t = y$1(n = "".concat("v1", "/sessions/")).call(n, e.id, "/orders?clientKey=")).call(t, e.clientKey),
            a = {
          sessionData: e.data
        };
        return _a({
          loadingContext: e.loadingContext,
          path: r,
          errorLevel: "fatal"
        }, a);
      }(this).then(function (t) {
        return t.sessionData && e.updateSessionData(t.sessionData), t;
      });
    }
  }, {
    key: "cancelOrder",
    value: function (e) {
      var t = this;
      return function (e, t) {
        var n,
            r,
            a = y$1(n = y$1(r = "".concat("v1", "/sessions/")).call(r, t.id, "/orders/cancel?clientKey=")).call(n, t.clientKey),
            o = {
          sessionData: t.data,
          order: e
        };
        return _a({
          loadingContext: t.loadingContext,
          path: a,
          errorLevel: "fatal"
        }, o);
      }(e.order, this).then(function (e) {
        return e.sessionData && t.updateSessionData(e.sessionData), e;
      });
    }
  }, {
    key: "getStoredSession",
    value: function () {
      var e = this.storage.get();
      return this.id === (null == e ? void 0 : e.id) ? e : this.session;
    }
  }, {
    key: "storeSession",
    value: function () {
      this.storage.set({
        id: this.session.id,
        sessionData: this.session.sessionData
      });
    }
  }, {
    key: "removeStoredSession",
    value: function () {
      this.storage.remove();
    }
  }]), e;
}();

function Gg(e, t) {
  var o = n$1(e);

  if (r$1) {
    var i = r$1(e);
    t && (i = f$1(i).call(i, function (t) {
      return a$1(e, t).enumerable;
    })), o.push.apply(o, i);
  }

  return o;
}

function Yg(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n,
        r,
        s = null != arguments[t] ? arguments[t] : {};
    t % 2 ? p$1(n = Gg(Object(s), !0)).call(n, function (t) {
      _defineProperty(e, t, s[t]);
    }) : o$1 ? i(e, o$1(s)) : p$1(r = Gg(Object(s))).call(r, function (t) {
      l$1(e, t, a$1(s, t));
    });
  }

  return e;
}

var $g = function () {
  function e(t) {
    var n,
        r,
        a = this;
    _classCallCheck(this, e), _defineProperty(this, "session", void 0), _defineProperty(this, "paymentMethodsResponse", void 0), _defineProperty(this, "modules", void 0), _defineProperty(this, "options", void 0), _defineProperty(this, "components", []), _defineProperty(this, "update", function () {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return a.setOptions(e), a.initialize().then(function () {
        var e;
        return p$1(e = a.components).call(e, function (e) {
          return e.update(a.getPropsForComponent(a.options));
        }), a;
      });
    }), _defineProperty(this, "remove", function (e) {
      var t;
      return a.components = f$1(t = a.components).call(t, function (t) {
        return t._id !== e._id;
      }), e.unmount(), a;
    }), _defineProperty(this, "setOptions", function (e) {
      var t, n, r;
      Tt(null == e ? void 0 : e.paymentMethodsConfiguration, "scheme") && console.warn('WARNING: You cannot define a property "scheme" on the paymentMethodsConfiguration object - it should be defined as "card" otherwise it will be ignored'), a.options = Yg(Yg({}, a.options), e), a.options.loadingContext = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : wg,
            t = {
          test: "https://checkoutshopper-test.adyen.com/checkoutshopper/",
          live: "https://checkoutshopper-live.adyen.com/checkoutshopper/",
          "live-us": "https://checkoutshopper-live-us.adyen.com/checkoutshopper/",
          "live-au": "https://checkoutshopper-live-au.adyen.com/checkoutshopper/",
          "live-apse": "https://checkoutshopper-live-apse.adyen.com/checkoutshopper/",
          "live-in": "https://checkoutshopper-live-in.adyen.com/checkoutshopper/"
        };
        return t[e] || t[e.toLowerCase()] || e;
      }(a.options.environment), a.options.locale = a.options.locale || a.options.shopperLocale, a.modules = {
        risk: new on(a.options),
        analytics: new Rg(a.options),
        i18n: new Ke(a.options.locale, a.options.translations)
      }, a.paymentMethodsResponse = new gg(null !== (t = a.options.paymentMethodsResponse) && void 0 !== t ? t : a.options.paymentMethods, a.options), delete a.options.paymentMethods;
      var o,
          i = null === (n = a.options.clientKey) || void 0 === n ? void 0 : n.substr(0, 4);
      if (("test" === i || "live" === i) && !h$1(r = a.options.loadingContext).call(r, i)) throw new Error(y$1(o = "Error: you are using a ".concat(i, " clientKey against the ")).call(o, a.options.environment, " environment"));
      return a;
    }), this.create = m$1(n = this.create).call(n, this), this.createFromAction = m$1(r = this.createFromAction).call(r, this), this.setOptions(t);
  }

  return _createClass(e, [{
    key: "initialize",
    value: function () {
      var e = this;
      return this.options.session ? (this.session = new Wg(this.options.session, this.options.clientKey, this.options.loadingContext), this.session.setupSession(this.options).then(function (t) {
        var n = e.options.order ? e.options.order.remainingAmount : t.amount;
        return e.setOptions(Yg(Yg({}, t), {}, {
          amount: n
        })), e;
      }).catch(function (t) {
        return e.options.onError && e.options.onError(t), e;
      })) : v$1.resolve(this);
    }
  }, {
    key: "submitPayment",
    value: function (e) {
      var t = this;
      if (this.options.onSubmit) return this.options.onSubmit(e);
      this.session && this.session.submitPayment(e).then(function (e) {
        e.action ? t.options.onPaymentSubmitted && t.options.onPaymentSubmitted(e, t) : t.options.onPaymentCompleted && t.options.onPaymentCompleted(e, t);
      }).catch(function (e) {
        t.options.onError && t.options.onError(e);
      });
    }
  }, {
    key: "submitDetails",
    value: function (e) {
      var t = this;
      if (this.options.onAdditionalDetails) return this.options.onAdditionalDetails(e);
      this.session && this.session.submitDetails(e).then(function (e) {
        t.options.onPaymentCompleted && t.options.onPaymentCompleted(e, t);
      }).catch(function (e) {
        t.options.onError && t.options.onError(e, t);
      });
    }
  }, {
    key: "create",
    value: function (e, t) {
      var n = this.getPropsForComponent(t);
      return e ? this.handleCreate(e, n) : this.handleCreateError();
    }
  }, {
    key: "createFromAction",
    value: function (e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};

      if (!e || !e.type) {
        if (Tt(e, "action") && Tt(e, "resultCode")) throw new Error('createFromAction::Invalid Action - the passed action object itself has an "action" property and a "resultCode": have you passed in the whole response object by mistake?');
        throw new Error('createFromAction::Invalid Action - the passed action object does not have a "type" property');
      }

      if (e.type) {
        var n = ig(e.type, this.options.paymentMethodsConfiguration),
            r = Yg(Yg(Yg({}, Og(this.options)), n), this.getPropsForComponent(t));
        return Ng(e, r);
      }

      return this.handleCreateError();
    }
  }, {
    key: "getPropsForComponent",
    value: function (e) {
      return Yg(Yg({
        paymentMethods: this.paymentMethodsResponse.paymentMethods,
        storedPaymentMethods: this.paymentMethodsResponse.storedPaymentMethods
      }, e), {}, {
        i18n: this.modules.i18n,
        modules: this.modules,
        session: this.session,
        createFromAction: this.createFromAction,
        _parentInstance: this
      });
    }
  }, {
    key: "handleCreate",
    value: function (e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = e.prototype instanceof Lt;

      if (n) {
        var r,
            a = "dropin" !== t.type && !t.isDropin,
            o = a && !t.supportedShopperInteractions,
            i = o ? g$1(r = this.paymentMethodsResponse).call(r, t.type) : {},
            l = a ? ig(t.type, this.options.paymentMethodsConfiguration, !!t.storedPaymentMethodId) : {},
            c = Og(this.options),
            u = new e(Yg(Yg(Yg(Yg({}, c), i), l), t));
        return t.isDropin || this.components.push(u), u;
      }

      if ("string" == typeof e && ag[e]) return this.handleCreate(ag[e], Yg({
        type: e
      }, t));
      if ("string" == typeof e && this.paymentMethodsResponse.has(e)) return this.handleCreate(ag.redirect, Yg({
        type: e
      }, t));

      if ("object" === _typeof(e) && "string" == typeof e.type) {
        var d = ig(e.type, this.options.paymentMethodsConfiguration, !!e.storedPaymentMethodId);
        return this.handleCreate(e.type, Yg(Yg(Yg({}, e), t), d));
      }

      return this.handleCreateError(e);
    }
  }, {
    key: "handleCreateError",
    value: function (e) {
      var t = e && e.name ? e.name : "The passed payment method",
          n = e ? "".concat(t, " is not a valid Checkout Component") : "No Payment Method component was passed";
      throw new Error(n);
    }
  }]), e;
}();

function Zg(e) {
  return Jg.apply(this, arguments);
}

function Jg() {
  return Jg = _asyncToGenerator(regenerator.mark(function e(n) {
    var r;
    return regenerator.wrap(function (e) {
      for (;;) switch (e.prev = e.next) {
        case 0:
          return r = new $g(n), e.next = 3, r.initialize();

        case 3:
          return e.abrupt("return", e.sent);

        case 4:
        case "end":
          return e.stop();
      }
    }, e);
  })), Jg.apply(this, arguments);
}

_defineProperty($g, "version", {
  version: "5.21.0",
  revision: "80a3187",
  branch: "HEAD",
  buildId: "@adyen/adyen-web-63e76729-b785-40ef-b6f2-e4c5e11aaf6a"
});

function styleInject(css, ref) {
  if (ref === void 0) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') {
    return;
  }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

styleInject(css_248z);

async function callServer(url, data) {
  const res = await fetch(url, {
    method: "POST",
    body: data ? JSON.stringify(data) : "",
    headers: {
      "Content-Type": "application/json"
    }
  });
  return await res.json();
}

const checkoutSessionResponse = await callServer("/api/sessions");
const configuration = {
  environment: 'test',
  clientKey: 'test_LETB6D7TMZCIZFSNMDRGMEPJ3UVB2TYP',
  session: checkoutSessionResponse,
  onPaymentCompleted: (result, component) => {
    console.info(result, component);
  },
  onError: (error, component) => {
    console.error(error.name, error.message, error.stack, component);
  },
  paymentMethodsConfiguration: {
    card: {
      hasHolderName: true,
      holderNameRequired: true,
      billingAddressRequired: true
    }
  }
};
console.log(configuration.clientKey);

try {
  // Create an instance of AdyenCheckout using the configuration object.
  const checkout = await Zg(configuration); // Create an instance of Drop-in and mount it to the container you created.

  checkout.create('dropin').mount('#dropin-container');
} catch (error) {
  console.log(error);
}