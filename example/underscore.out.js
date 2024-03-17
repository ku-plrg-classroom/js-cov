function underscore(fname, args) {
  __cov__.func.add(0);
  var VERSION = (__cov__.stmt.add(0), '1.13.6');
  var root = (__cov__.stmt.add(1), (__cov__.branch.add(0), typeof self == 'object') && (__cov__.branch.add(1), self.self === self) && (__cov__.branch.add(2), self) || (__cov__.branch.add(3), typeof global == 'object') && (__cov__.branch.add(4), global.global === global) && (__cov__.branch.add(5), global) || (__cov__.branch.add(6), Function('return this')()) || (__cov__.branch.add(7), {}));
  var ArrayProto = (__cov__.stmt.add(2), Array.prototype), ObjProto = (__cov__.stmt.add(3), Object.prototype);
  var SymbolProto = (__cov__.stmt.add(4), typeof Symbol !== 'undefined' ? (__cov__.branch.add(8), Symbol.prototype) : (__cov__.branch.add(9), null));
  var push = (__cov__.stmt.add(5), ArrayProto.push), slice = (__cov__.stmt.add(6), ArrayProto.slice), toString = (__cov__.stmt.add(7), ObjProto.toString), hasOwnProperty = (__cov__.stmt.add(8), ObjProto.hasOwnProperty);
  var supportsArrayBuffer = (__cov__.stmt.add(9), typeof ArrayBuffer !== 'undefined'), supportsDataView = (__cov__.stmt.add(10), typeof DataView !== 'undefined');
  var nativeIsArray = (__cov__.stmt.add(11), Array.isArray), nativeKeys = (__cov__.stmt.add(12), Object.keys), nativeCreate = (__cov__.stmt.add(13), Object.create), nativeIsView = (__cov__.stmt.add(14), (__cov__.branch.add(10), supportsArrayBuffer) && (__cov__.branch.add(11), ArrayBuffer.isView));
  var _isNaN = (__cov__.stmt.add(15), isNaN), _isFinite = (__cov__.stmt.add(16), isFinite);
  var hasEnumBug = (__cov__.stmt.add(17), !{ toString: null }.propertyIsEnumerable('toString'));
  var nonEnumerableProps = (__cov__.stmt.add(18), [
    'valueOf',
    'isPrototypeOf',
    'toString',
    'propertyIsEnumerable',
    'hasOwnProperty',
    'toLocaleString'
  ]);
  var MAX_ARRAY_INDEX = (__cov__.stmt.add(19), Math.pow(2, 53) - 1);
  function restArguments(func, startIndex) {
    __cov__.func.add(1);
    __cov__.stmt.add(20);
    startIndex = startIndex == null ? (__cov__.branch.add(12), func.length - 1) : (__cov__.branch.add(13), +startIndex);
    __cov__.stmt.add(21);
    return function () {
      __cov__.func.add(2);
      var length = (__cov__.stmt.add(22), Math.max(arguments.length - startIndex, 0)), rest = (__cov__.stmt.add(23), Array(length)), index = (__cov__.stmt.add(24), 0);
      __cov__.stmt.add(25);
      for (; index < length; index++) {
        __cov__.stmt.add(26);
        rest[index] = arguments[index + startIndex];
      }
      __cov__.stmt.add(27);
      switch (startIndex) {
      case 0:
        __cov__.branch.add(14);
        __cov__.stmt.add(28);
        return func.call(this, rest);
      case 1:
        __cov__.branch.add(15);
        __cov__.stmt.add(29);
        return func.call(this, arguments[0], rest);
      case 2:
        __cov__.branch.add(16);
        __cov__.stmt.add(30);
        return func.call(this, arguments[0], arguments[1], rest);
      }
      var args = (__cov__.stmt.add(31), Array(startIndex + 1));
      __cov__.stmt.add(32);
      for (index = 0; index < startIndex; index++) {
        __cov__.stmt.add(33);
        args[index] = arguments[index];
      }
      __cov__.stmt.add(34);
      args[startIndex] = rest;
      __cov__.stmt.add(35);
      return func.apply(this, args);
    };
  }
  function isObject(obj) {
    __cov__.func.add(3);
    var type = (__cov__.stmt.add(36), typeof obj);
    __cov__.stmt.add(37);
    return (__cov__.branch.add(17), type === 'function') || (__cov__.branch.add(18), type === 'object') && (__cov__.branch.add(19), !!obj);
  }
  function isNull(obj) {
    __cov__.func.add(4);
    __cov__.stmt.add(38);
    return obj === null;
  }
  function isUndefined(obj) {
    __cov__.func.add(5);
    __cov__.stmt.add(39);
    return obj === void 0;
  }
  function isBoolean(obj) {
    __cov__.func.add(6);
    __cov__.stmt.add(40);
    return (__cov__.branch.add(20), obj === true) || (__cov__.branch.add(21), obj === false) || (__cov__.branch.add(22), toString.call(obj) === '[object Boolean]');
  }
  function isElement(obj) {
    __cov__.func.add(7);
    __cov__.stmt.add(41);
    return !!((__cov__.branch.add(23), obj) && (__cov__.branch.add(24), obj.nodeType === 1));
  }
  function tagTester(name) {
    __cov__.func.add(8);
    var tag = (__cov__.stmt.add(42), '[object ' + name + ']');
    __cov__.stmt.add(43);
    return function (obj) {
      __cov__.func.add(9);
      __cov__.stmt.add(44);
      return toString.call(obj) === tag;
    };
  }
  var isString = (__cov__.stmt.add(45), tagTester('String'));
  var isNumber = (__cov__.stmt.add(46), tagTester('Number'));
  var isDate = (__cov__.stmt.add(47), tagTester('Date'));
  var isRegExp = (__cov__.stmt.add(48), tagTester('RegExp'));
  var isError = (__cov__.stmt.add(49), tagTester('Error'));
  var isSymbol = (__cov__.stmt.add(50), tagTester('Symbol'));
  var isArrayBuffer = (__cov__.stmt.add(51), tagTester('ArrayBuffer'));
  var isFunction = (__cov__.stmt.add(52), tagTester('Function'));
  var nodelist = (__cov__.stmt.add(53), (__cov__.branch.add(25), root.document) && (__cov__.branch.add(26), root.document.childNodes));
  __cov__.stmt.add(54);
  if ((__cov__.branch.add(27), typeof /./ != 'function') && (__cov__.branch.add(28), typeof Int8Array != 'object') && (__cov__.branch.add(29), typeof nodelist != 'function')) {
    __cov__.branch.add(30);
    __cov__.stmt.add(55);
    isFunction = function (obj) {
      __cov__.func.add(10);
      __cov__.stmt.add(56);
      return (__cov__.branch.add(31), typeof obj == 'function') || (__cov__.branch.add(32), false);
    };
  } else {
    __cov__.branch.add(33);
  }
  var isFunction$1 = (__cov__.stmt.add(57), isFunction);
  var hasObjectTag = (__cov__.stmt.add(58), tagTester('Object'));
  var hasDataViewBug = (__cov__.stmt.add(59), (__cov__.branch.add(34), supportsDataView) && ((__cov__.branch.add(35), !/\[native code\]/.test(String(DataView))) || (__cov__.branch.add(36), hasObjectTag(new DataView(new ArrayBuffer(8)))))), isIE11 = (__cov__.stmt.add(60), (__cov__.branch.add(37), typeof Map !== 'undefined') && (__cov__.branch.add(38), hasObjectTag(new Map())));
  var isDataView = (__cov__.stmt.add(61), tagTester('DataView'));
  function alternateIsDataView(obj) {
    __cov__.func.add(11);
    __cov__.stmt.add(62);
    return (__cov__.branch.add(39), obj != null) && (__cov__.branch.add(40), isFunction$1(obj.getInt8)) && (__cov__.branch.add(41), isArrayBuffer(obj.buffer));
  }
  var isDataView$1 = (__cov__.stmt.add(63), hasDataViewBug ? (__cov__.branch.add(42), alternateIsDataView) : (__cov__.branch.add(43), isDataView));
  var isArray = (__cov__.stmt.add(64), (__cov__.branch.add(44), nativeIsArray) || (__cov__.branch.add(45), tagTester('Array')));
  function has$1(obj, key) {
    __cov__.func.add(12);
    __cov__.stmt.add(65);
    return (__cov__.branch.add(46), obj != null) && (__cov__.branch.add(47), hasOwnProperty.call(obj, key));
  }
  var isArguments = (__cov__.stmt.add(66), tagTester('Arguments'));
  __cov__.stmt.add(67);
  (function () {
    __cov__.func.add(13);
    __cov__.stmt.add(68);
    if (!isArguments(arguments)) {
      __cov__.branch.add(48);
      __cov__.stmt.add(69);
      isArguments = function (obj) {
        __cov__.func.add(14);
        __cov__.stmt.add(70);
        return has$1(obj, 'callee');
      };
    } else {
      __cov__.branch.add(49);
    }
  }());
  var isArguments$1 = (__cov__.stmt.add(71), isArguments);
  function isFinite$1(obj) {
    __cov__.func.add(15);
    __cov__.stmt.add(72);
    return (__cov__.branch.add(50), !isSymbol(obj)) && (__cov__.branch.add(51), _isFinite(obj)) && (__cov__.branch.add(52), !isNaN(parseFloat(obj)));
  }
  function isNaN$1(obj) {
    __cov__.func.add(16);
    __cov__.stmt.add(73);
    return (__cov__.branch.add(53), isNumber(obj)) && (__cov__.branch.add(54), _isNaN(obj));
  }
  function constant(value) {
    __cov__.func.add(17);
    __cov__.stmt.add(74);
    return function () {
      __cov__.func.add(18);
      __cov__.stmt.add(75);
      return value;
    };
  }
  function createSizePropertyCheck(getSizeProperty) {
    __cov__.func.add(19);
    __cov__.stmt.add(76);
    return function (collection) {
      __cov__.func.add(20);
      var sizeProperty = (__cov__.stmt.add(77), getSizeProperty(collection));
      __cov__.stmt.add(78);
      return (__cov__.branch.add(55), typeof sizeProperty == 'number') && (__cov__.branch.add(56), sizeProperty >= 0) && (__cov__.branch.add(57), sizeProperty <= MAX_ARRAY_INDEX);
    };
  }
  function shallowProperty(key) {
    __cov__.func.add(21);
    __cov__.stmt.add(79);
    return function (obj) {
      __cov__.func.add(22);
      __cov__.stmt.add(80);
      return obj == null ? (__cov__.branch.add(58), void 0) : (__cov__.branch.add(59), obj[key]);
    };
  }
  var getByteLength = (__cov__.stmt.add(81), shallowProperty('byteLength'));
  var isBufferLike = (__cov__.stmt.add(82), createSizePropertyCheck(getByteLength));
  var typedArrayPattern = (__cov__.stmt.add(83), /\[object ((I|Ui)nt(8|16|32)|Float(32|64)|Uint8Clamped|Big(I|Ui)nt64)Array\]/);
  function isTypedArray(obj) {
    __cov__.func.add(23);
    __cov__.stmt.add(84);
    return nativeIsView ? (__cov__.branch.add(60), (__cov__.branch.add(61), nativeIsView(obj)) && (__cov__.branch.add(62), !isDataView$1(obj))) : (__cov__.branch.add(63), (__cov__.branch.add(64), isBufferLike(obj)) && (__cov__.branch.add(65), typedArrayPattern.test(toString.call(obj))));
  }
  var isTypedArray$1 = (__cov__.stmt.add(85), supportsArrayBuffer ? (__cov__.branch.add(66), isTypedArray) : (__cov__.branch.add(67), constant(false)));
  var getLength = (__cov__.stmt.add(86), shallowProperty('length'));
  function emulatedSet(keys) {
    __cov__.func.add(24);
    var hash = (__cov__.stmt.add(87), {});
    __cov__.stmt.add(88);
    for (var l = (__cov__.stmt.add(89), keys.length), i = (__cov__.stmt.add(90), 0); i < l; ++i) {
      __cov__.stmt.add(91);
      hash[keys[i]] = true;
    }
    __cov__.stmt.add(92);
    return {
      contains: function (key) {
        __cov__.func.add(25);
        __cov__.stmt.add(93);
        return hash[key] === true;
      },
      push: function (key) {
        __cov__.func.add(26);
        __cov__.stmt.add(94);
        hash[key] = true;
        __cov__.stmt.add(95);
        return keys.push(key);
      }
    };
  }
  function collectNonEnumProps(obj, keys) {
    __cov__.func.add(27);
    __cov__.stmt.add(96);
    keys = emulatedSet(keys);
    var nonEnumIdx = (__cov__.stmt.add(97), nonEnumerableProps.length);
    var constructor = (__cov__.stmt.add(98), obj.constructor);
    var proto = (__cov__.stmt.add(99), (__cov__.branch.add(68), isFunction$1(constructor)) && (__cov__.branch.add(69), constructor.prototype) || (__cov__.branch.add(70), ObjProto));
    var prop = (__cov__.stmt.add(100), 'constructor');
    __cov__.stmt.add(101);
    if ((__cov__.branch.add(71), has$1(obj, prop)) && (__cov__.branch.add(72), !keys.contains(prop))) {
      __cov__.branch.add(73);
      __cov__.stmt.add(102);
      keys.push(prop);
    } else {
      __cov__.branch.add(74);
    }
    __cov__.stmt.add(103);
    while (nonEnumIdx--) {
      __cov__.stmt.add(104);
      prop = nonEnumerableProps[nonEnumIdx];
      __cov__.stmt.add(105);
      if ((__cov__.branch.add(75), prop in obj) && (__cov__.branch.add(76), obj[prop] !== proto[prop]) && (__cov__.branch.add(77), !keys.contains(prop))) {
        __cov__.branch.add(78);
        __cov__.stmt.add(106);
        keys.push(prop);
      } else {
        __cov__.branch.add(79);
      }
    }
  }
  function keys(obj) {
    __cov__.func.add(28);
    __cov__.stmt.add(107);
    if (!isObject(obj)) {
      __cov__.branch.add(80);
      __cov__.stmt.add(108);
      return [];
    } else {
      __cov__.branch.add(81);
    }
    __cov__.stmt.add(109);
    if (nativeKeys) {
      __cov__.branch.add(82);
      __cov__.stmt.add(110);
      return nativeKeys(obj);
    } else {
      __cov__.branch.add(83);
    }
    var keys = (__cov__.stmt.add(111), []);
    __cov__.stmt.add(112);
    for (var key in obj) {
      __cov__.stmt.add(113);
      if (has$1(obj, key)) {
        __cov__.branch.add(84);
        __cov__.stmt.add(114);
        keys.push(key);
      } else {
        __cov__.branch.add(85);
      }
    }
    __cov__.stmt.add(115);
    if (hasEnumBug) {
      __cov__.branch.add(86);
      __cov__.stmt.add(116);
      collectNonEnumProps(obj, keys);
    } else {
      __cov__.branch.add(87);
    }
    __cov__.stmt.add(117);
    return keys;
  }
  function isEmpty(obj) {
    __cov__.func.add(29);
    __cov__.stmt.add(118);
    if (obj == null) {
      __cov__.branch.add(88);
      __cov__.stmt.add(119);
      return true;
    } else {
      __cov__.branch.add(89);
    }
    var length = (__cov__.stmt.add(120), getLength(obj));
    __cov__.stmt.add(121);
    if ((__cov__.branch.add(90), typeof length == 'number') && ((__cov__.branch.add(91), isArray(obj)) || (__cov__.branch.add(92), isString(obj)) || (__cov__.branch.add(93), isArguments$1(obj)))) {
      __cov__.branch.add(94);
      __cov__.stmt.add(122);
      return length === 0;
    } else {
      __cov__.branch.add(95);
    }
    __cov__.stmt.add(123);
    return getLength(keys(obj)) === 0;
  }
  function isMatch(object, attrs) {
    __cov__.func.add(30);
    var _keys = (__cov__.stmt.add(124), keys(attrs)), length = (__cov__.stmt.add(125), _keys.length);
    __cov__.stmt.add(126);
    if (object == null) {
      __cov__.branch.add(96);
      __cov__.stmt.add(127);
      return !length;
    } else {
      __cov__.branch.add(97);
    }
    var obj = (__cov__.stmt.add(128), Object(object));
    __cov__.stmt.add(129);
    for (var i = (__cov__.stmt.add(130), 0); i < length; i++) {
      var key = (__cov__.stmt.add(131), _keys[i]);
      __cov__.stmt.add(132);
      if ((__cov__.branch.add(98), attrs[key] !== obj[key]) || (__cov__.branch.add(99), !(key in obj))) {
        __cov__.branch.add(100);
        __cov__.stmt.add(133);
        return false;
      } else {
        __cov__.branch.add(101);
      }
    }
    __cov__.stmt.add(134);
    return true;
  }
  function _$1(obj) {
    __cov__.func.add(31);
    __cov__.stmt.add(135);
    if (obj instanceof _$1) {
      __cov__.branch.add(102);
      __cov__.stmt.add(136);
      return obj;
    } else {
      __cov__.branch.add(103);
    }
    __cov__.stmt.add(137);
    if (!(this instanceof _$1)) {
      __cov__.branch.add(104);
      __cov__.stmt.add(138);
      return new _$1(obj);
    } else {
      __cov__.branch.add(105);
    }
    __cov__.stmt.add(139);
    this._wrapped = obj;
  }
  __cov__.stmt.add(140);
  _$1.VERSION = VERSION;
  __cov__.stmt.add(141);
  _$1.prototype.value = function () {
    __cov__.func.add(32);
    __cov__.stmt.add(142);
    return this._wrapped;
  };
  __cov__.stmt.add(143);
  _$1.prototype.valueOf = _$1.prototype.toJSON = _$1.prototype.value;
  __cov__.stmt.add(144);
  _$1.prototype.toString = function () {
    __cov__.func.add(33);
    __cov__.stmt.add(145);
    return String(this._wrapped);
  };
  function toBufferView(bufferSource) {
    __cov__.func.add(34);
    __cov__.stmt.add(146);
    return new Uint8Array((__cov__.branch.add(106), bufferSource.buffer) || (__cov__.branch.add(107), bufferSource), (__cov__.branch.add(108), bufferSource.byteOffset) || (__cov__.branch.add(109), 0), getByteLength(bufferSource));
  }
  var tagDataView = (__cov__.stmt.add(147), '[object DataView]');
  function eq(a, b, aStack, bStack) {
    __cov__.func.add(35);
    __cov__.stmt.add(148);
    if (a === b) {
      __cov__.branch.add(110);
      __cov__.stmt.add(149);
      return (__cov__.branch.add(111), a !== 0) || (__cov__.branch.add(112), 1 / a === 1 / b);
    } else {
      __cov__.branch.add(113);
    }
    __cov__.stmt.add(150);
    if ((__cov__.branch.add(114), a == null) || (__cov__.branch.add(115), b == null)) {
      __cov__.branch.add(116);
      __cov__.stmt.add(151);
      return false;
    } else {
      __cov__.branch.add(117);
    }
    __cov__.stmt.add(152);
    if (a !== a) {
      __cov__.branch.add(118);
      __cov__.stmt.add(153);
      return b !== b;
    } else {
      __cov__.branch.add(119);
    }
    var type = (__cov__.stmt.add(154), typeof a);
    __cov__.stmt.add(155);
    if ((__cov__.branch.add(120), type !== 'function') && (__cov__.branch.add(121), type !== 'object') && (__cov__.branch.add(122), typeof b != 'object')) {
      __cov__.branch.add(123);
      __cov__.stmt.add(156);
      return false;
    } else {
      __cov__.branch.add(124);
    }
    __cov__.stmt.add(157);
    return deepEq(a, b, aStack, bStack);
  }
  function deepEq(a, b, aStack, bStack) {
    __cov__.func.add(36);
    __cov__.stmt.add(158);
    if (a instanceof _$1) {
      __cov__.branch.add(125);
      __cov__.stmt.add(159);
      a = a._wrapped;
    } else {
      __cov__.branch.add(126);
    }
    __cov__.stmt.add(160);
    if (b instanceof _$1) {
      __cov__.branch.add(127);
      __cov__.stmt.add(161);
      b = b._wrapped;
    } else {
      __cov__.branch.add(128);
    }
    var className = (__cov__.stmt.add(162), toString.call(a));
    __cov__.stmt.add(163);
    if (className !== toString.call(b)) {
      __cov__.branch.add(129);
      __cov__.stmt.add(164);
      return false;
    } else {
      __cov__.branch.add(130);
    }
    __cov__.stmt.add(165);
    if ((__cov__.branch.add(131), hasDataViewBug) && (__cov__.branch.add(132), className == '[object Object]') && (__cov__.branch.add(133), isDataView$1(a))) {
      __cov__.branch.add(134);
      __cov__.stmt.add(166);
      if (!isDataView$1(b)) {
        __cov__.branch.add(135);
        __cov__.stmt.add(167);
        return false;
      } else {
        __cov__.branch.add(136);
      }
      __cov__.stmt.add(168);
      className = tagDataView;
    } else {
      __cov__.branch.add(137);
    }
    __cov__.stmt.add(169);
    switch (className) {
    case '[object RegExp]':
      __cov__.branch.add(138);
    case '[object String]':
      __cov__.branch.add(139);
      __cov__.stmt.add(170);
      return '' + a === '' + b;
    case '[object Number]':
      __cov__.branch.add(140);
      __cov__.stmt.add(171);
      if (+a !== +a) {
        __cov__.branch.add(141);
        __cov__.stmt.add(172);
        return +b !== +b;
      } else {
        __cov__.branch.add(142);
      }
      __cov__.stmt.add(173);
      return +a === 0 ? (__cov__.branch.add(143), 1 / +a === 1 / b) : (__cov__.branch.add(144), +a === +b);
    case '[object Date]':
      __cov__.branch.add(145);
    case '[object Boolean]':
      __cov__.branch.add(146);
      __cov__.stmt.add(174);
      return +a === +b;
    case '[object Symbol]':
      __cov__.branch.add(147);
      __cov__.stmt.add(175);
      return SymbolProto.valueOf.call(a) === SymbolProto.valueOf.call(b);
    case '[object ArrayBuffer]':
      __cov__.branch.add(148);
    case tagDataView:
      __cov__.branch.add(149);
      __cov__.stmt.add(176);
      return deepEq(toBufferView(a), toBufferView(b), aStack, bStack);
    }
    var areArrays = (__cov__.stmt.add(177), className === '[object Array]');
    __cov__.stmt.add(178);
    if ((__cov__.branch.add(150), !areArrays) && (__cov__.branch.add(151), isTypedArray$1(a))) {
      __cov__.branch.add(152);
      var byteLength = (__cov__.stmt.add(179), getByteLength(a));
      __cov__.stmt.add(180);
      if (byteLength !== getByteLength(b)) {
        __cov__.branch.add(153);
        __cov__.stmt.add(181);
        return false;
      } else {
        __cov__.branch.add(154);
      }
      __cov__.stmt.add(182);
      if ((__cov__.branch.add(155), a.buffer === b.buffer) && (__cov__.branch.add(156), a.byteOffset === b.byteOffset)) {
        __cov__.branch.add(157);
        __cov__.stmt.add(183);
        return true;
      } else {
        __cov__.branch.add(158);
      }
      __cov__.stmt.add(184);
      areArrays = true;
    } else {
      __cov__.branch.add(159);
    }
    __cov__.stmt.add(185);
    if (!areArrays) {
      __cov__.branch.add(160);
      __cov__.stmt.add(186);
      if ((__cov__.branch.add(161), typeof a != 'object') || (__cov__.branch.add(162), typeof b != 'object')) {
        __cov__.branch.add(163);
        __cov__.stmt.add(187);
        return false;
      } else {
        __cov__.branch.add(164);
      }
      var aCtor = (__cov__.stmt.add(188), a.constructor), bCtor = (__cov__.stmt.add(189), b.constructor);
      __cov__.stmt.add(190);
      if ((__cov__.branch.add(165), aCtor !== bCtor) && (__cov__.branch.add(166), !((__cov__.branch.add(167), isFunction$1(aCtor)) && (__cov__.branch.add(168), aCtor instanceof aCtor) && (__cov__.branch.add(169), isFunction$1(bCtor)) && (__cov__.branch.add(170), bCtor instanceof bCtor))) && ((__cov__.branch.add(171), 'constructor' in a) && (__cov__.branch.add(172), 'constructor' in b))) {
        __cov__.branch.add(173);
        __cov__.stmt.add(191);
        return false;
      } else {
        __cov__.branch.add(174);
      }
    } else {
      __cov__.branch.add(175);
    }
    __cov__.stmt.add(192);
    aStack = (__cov__.branch.add(176), aStack) || (__cov__.branch.add(177), []);
    __cov__.stmt.add(193);
    bStack = (__cov__.branch.add(178), bStack) || (__cov__.branch.add(179), []);
    var length = (__cov__.stmt.add(194), aStack.length);
    __cov__.stmt.add(195);
    while (length--) {
      __cov__.stmt.add(196);
      if (aStack[length] === a) {
        __cov__.branch.add(180);
        __cov__.stmt.add(197);
        return bStack[length] === b;
      } else {
        __cov__.branch.add(181);
      }
    }
    __cov__.stmt.add(198);
    aStack.push(a);
    __cov__.stmt.add(199);
    bStack.push(b);
    __cov__.stmt.add(200);
    if (areArrays) {
      __cov__.branch.add(182);
      __cov__.stmt.add(201);
      length = a.length;
      __cov__.stmt.add(202);
      if (length !== b.length) {
        __cov__.branch.add(183);
        __cov__.stmt.add(203);
        return false;
      } else {
        __cov__.branch.add(184);
      }
      __cov__.stmt.add(204);
      while (length--) {
        __cov__.stmt.add(205);
        if (!eq(a[length], b[length], aStack, bStack)) {
          __cov__.branch.add(185);
          __cov__.stmt.add(206);
          return false;
        } else {
          __cov__.branch.add(186);
        }
      }
    } else {
      __cov__.branch.add(187);
      var _keys = (__cov__.stmt.add(207), keys(a)), key;
      __cov__.stmt.add(208);
      length = _keys.length;
      __cov__.stmt.add(209);
      if (keys(b).length !== length) {
        __cov__.branch.add(188);
        __cov__.stmt.add(210);
        return false;
      } else {
        __cov__.branch.add(189);
      }
      __cov__.stmt.add(211);
      while (length--) {
        __cov__.stmt.add(212);
        key = _keys[length];
        __cov__.stmt.add(213);
        if (!((__cov__.branch.add(190), has$1(b, key)) && (__cov__.branch.add(191), eq(a[key], b[key], aStack, bStack)))) {
          __cov__.branch.add(192);
          __cov__.stmt.add(214);
          return false;
        } else {
          __cov__.branch.add(193);
        }
      }
    }
    __cov__.stmt.add(215);
    aStack.pop();
    __cov__.stmt.add(216);
    bStack.pop();
    __cov__.stmt.add(217);
    return true;
  }
  function isEqual(a, b) {
    __cov__.func.add(37);
    __cov__.stmt.add(218);
    return eq(a, b);
  }
  function allKeys(obj) {
    __cov__.func.add(38);
    __cov__.stmt.add(219);
    if (!isObject(obj)) {
      __cov__.branch.add(194);
      __cov__.stmt.add(220);
      return [];
    } else {
      __cov__.branch.add(195);
    }
    var keys = (__cov__.stmt.add(221), []);
    __cov__.stmt.add(222);
    for (var key in obj) {
      __cov__.stmt.add(223);
      keys.push(key);
    }
    __cov__.stmt.add(224);
    if (hasEnumBug) {
      __cov__.branch.add(196);
      __cov__.stmt.add(225);
      collectNonEnumProps(obj, keys);
    } else {
      __cov__.branch.add(197);
    }
    __cov__.stmt.add(226);
    return keys;
  }
  function ie11fingerprint(methods) {
    __cov__.func.add(39);
    var length = (__cov__.stmt.add(227), getLength(methods));
    __cov__.stmt.add(228);
    return function (obj) {
      __cov__.func.add(40);
      __cov__.stmt.add(229);
      if (obj == null) {
        __cov__.branch.add(198);
        __cov__.stmt.add(230);
        return false;
      } else {
        __cov__.branch.add(199);
      }
      var keys = (__cov__.stmt.add(231), allKeys(obj));
      __cov__.stmt.add(232);
      if (getLength(keys)) {
        __cov__.branch.add(200);
        __cov__.stmt.add(233);
        return false;
      } else {
        __cov__.branch.add(201);
      }
      __cov__.stmt.add(234);
      for (var i = (__cov__.stmt.add(235), 0); i < length; i++) {
        __cov__.stmt.add(236);
        if (!isFunction$1(obj[methods[i]])) {
          __cov__.branch.add(202);
          __cov__.stmt.add(237);
          return false;
        } else {
          __cov__.branch.add(203);
        }
      }
      __cov__.stmt.add(238);
      return (__cov__.branch.add(204), methods !== weakMapMethods) || (__cov__.branch.add(205), !isFunction$1(obj[forEachName]));
    };
  }
  var forEachName = (__cov__.stmt.add(239), 'forEach'), hasName = (__cov__.stmt.add(240), 'has'), commonInit = (__cov__.stmt.add(241), [
      'clear',
      'delete'
    ]), mapTail = (__cov__.stmt.add(242), [
      'get',
      hasName,
      'set'
    ]);
  var mapMethods = (__cov__.stmt.add(243), commonInit.concat(forEachName, mapTail)), weakMapMethods = (__cov__.stmt.add(244), commonInit.concat(mapTail)), setMethods = (__cov__.stmt.add(245), ['add'].concat(commonInit, forEachName, hasName));
  var isMap = (__cov__.stmt.add(246), isIE11 ? (__cov__.branch.add(206), ie11fingerprint(mapMethods)) : (__cov__.branch.add(207), tagTester('Map')));
  var isWeakMap = (__cov__.stmt.add(247), isIE11 ? (__cov__.branch.add(208), ie11fingerprint(weakMapMethods)) : (__cov__.branch.add(209), tagTester('WeakMap')));
  var isSet = (__cov__.stmt.add(248), isIE11 ? (__cov__.branch.add(210), ie11fingerprint(setMethods)) : (__cov__.branch.add(211), tagTester('Set')));
  var isWeakSet = (__cov__.stmt.add(249), tagTester('WeakSet'));
  function values(obj) {
    __cov__.func.add(41);
    var _keys = (__cov__.stmt.add(250), keys(obj));
    var length = (__cov__.stmt.add(251), _keys.length);
    var values = (__cov__.stmt.add(252), Array(length));
    __cov__.stmt.add(253);
    for (var i = (__cov__.stmt.add(254), 0); i < length; i++) {
      __cov__.stmt.add(255);
      values[i] = obj[_keys[i]];
    }
    __cov__.stmt.add(256);
    return values;
  }
  function pairs(obj) {
    __cov__.func.add(42);
    var _keys = (__cov__.stmt.add(257), keys(obj));
    var length = (__cov__.stmt.add(258), _keys.length);
    var pairs = (__cov__.stmt.add(259), Array(length));
    __cov__.stmt.add(260);
    for (var i = (__cov__.stmt.add(261), 0); i < length; i++) {
      __cov__.stmt.add(262);
      pairs[i] = [
        _keys[i],
        obj[_keys[i]]
      ];
    }
    __cov__.stmt.add(263);
    return pairs;
  }
  function invert(obj) {
    __cov__.func.add(43);
    var result = (__cov__.stmt.add(264), {});
    var _keys = (__cov__.stmt.add(265), keys(obj));
    __cov__.stmt.add(266);
    for (var i = (__cov__.stmt.add(267), 0), length = (__cov__.stmt.add(268), _keys.length); i < length; i++) {
      __cov__.stmt.add(269);
      result[obj[_keys[i]]] = _keys[i];
    }
    __cov__.stmt.add(270);
    return result;
  }
  function functions(obj) {
    __cov__.func.add(44);
    var names = (__cov__.stmt.add(271), []);
    __cov__.stmt.add(272);
    for (var key in obj) {
      __cov__.stmt.add(273);
      if (isFunction$1(obj[key])) {
        __cov__.branch.add(212);
        __cov__.stmt.add(274);
        names.push(key);
      } else {
        __cov__.branch.add(213);
      }
    }
    __cov__.stmt.add(275);
    return names.sort();
  }
  function createAssigner(keysFunc, defaults) {
    __cov__.func.add(45);
    __cov__.stmt.add(276);
    return function (obj) {
      __cov__.func.add(46);
      var length = (__cov__.stmt.add(277), arguments.length);
      __cov__.stmt.add(278);
      if (defaults) {
        __cov__.branch.add(214);
        __cov__.stmt.add(279);
        obj = Object(obj);
      } else {
        __cov__.branch.add(215);
      }
      __cov__.stmt.add(280);
      if ((__cov__.branch.add(216), length < 2) || (__cov__.branch.add(217), obj == null)) {
        __cov__.branch.add(218);
        __cov__.stmt.add(281);
        return obj;
      } else {
        __cov__.branch.add(219);
      }
      __cov__.stmt.add(282);
      for (var index = (__cov__.stmt.add(283), 1); index < length; index++) {
        var source = (__cov__.stmt.add(284), arguments[index]), keys = (__cov__.stmt.add(285), keysFunc(source)), l = (__cov__.stmt.add(286), keys.length);
        __cov__.stmt.add(287);
        for (var i = (__cov__.stmt.add(288), 0); i < l; i++) {
          var key = (__cov__.stmt.add(289), keys[i]);
          __cov__.stmt.add(290);
          if ((__cov__.branch.add(220), !defaults) || (__cov__.branch.add(221), obj[key] === void 0)) {
            __cov__.branch.add(222);
            __cov__.stmt.add(291);
            obj[key] = source[key];
          } else {
            __cov__.branch.add(223);
          }
        }
      }
      __cov__.stmt.add(292);
      return obj;
    };
  }
  var extend = (__cov__.stmt.add(293), createAssigner(allKeys));
  var extendOwn = (__cov__.stmt.add(294), createAssigner(keys));
  var defaults = (__cov__.stmt.add(295), createAssigner(allKeys, true));
  function ctor() {
    __cov__.func.add(47);
    __cov__.stmt.add(296);
    return function () {
      __cov__.func.add(48);
    };
  }
  function baseCreate(prototype) {
    __cov__.func.add(49);
    __cov__.stmt.add(297);
    if (!isObject(prototype)) {
      __cov__.branch.add(224);
      __cov__.stmt.add(298);
      return {};
    } else {
      __cov__.branch.add(225);
    }
    __cov__.stmt.add(299);
    if (nativeCreate) {
      __cov__.branch.add(226);
      __cov__.stmt.add(300);
      return nativeCreate(prototype);
    } else {
      __cov__.branch.add(227);
    }
    var Ctor = (__cov__.stmt.add(301), ctor());
    __cov__.stmt.add(302);
    Ctor.prototype = prototype;
    var result = (__cov__.stmt.add(303), new Ctor());
    __cov__.stmt.add(304);
    Ctor.prototype = null;
    __cov__.stmt.add(305);
    return result;
  }
  function create(prototype, props) {
    __cov__.func.add(50);
    var result = (__cov__.stmt.add(306), baseCreate(prototype));
    __cov__.stmt.add(307);
    if (props) {
      __cov__.branch.add(228);
      __cov__.stmt.add(308);
      extendOwn(result, props);
    } else {
      __cov__.branch.add(229);
    }
    __cov__.stmt.add(309);
    return result;
  }
  function clone(obj) {
    __cov__.func.add(51);
    __cov__.stmt.add(310);
    if (!isObject(obj)) {
      __cov__.branch.add(230);
      __cov__.stmt.add(311);
      return obj;
    } else {
      __cov__.branch.add(231);
    }
    __cov__.stmt.add(312);
    return isArray(obj) ? (__cov__.branch.add(232), obj.slice()) : (__cov__.branch.add(233), extend({}, obj));
  }
  function tap(obj, interceptor) {
    __cov__.func.add(52);
    __cov__.stmt.add(313);
    interceptor(obj);
    __cov__.stmt.add(314);
    return obj;
  }
  function toPath$1(path) {
    __cov__.func.add(53);
    __cov__.stmt.add(315);
    return isArray(path) ? (__cov__.branch.add(234), path) : (__cov__.branch.add(235), [path]);
  }
  __cov__.stmt.add(316);
  _$1.toPath = toPath$1;
  function toPath(path) {
    __cov__.func.add(54);
    __cov__.stmt.add(317);
    return _$1.toPath(path);
  }
  function deepGet(obj, path) {
    __cov__.func.add(55);
    var length = (__cov__.stmt.add(318), path.length);
    __cov__.stmt.add(319);
    for (var i = (__cov__.stmt.add(320), 0); i < length; i++) {
      __cov__.stmt.add(321);
      if (obj == null) {
        __cov__.branch.add(236);
        __cov__.stmt.add(322);
        return void 0;
      } else {
        __cov__.branch.add(237);
      }
      __cov__.stmt.add(323);
      obj = obj[path[i]];
    }
    __cov__.stmt.add(324);
    return length ? (__cov__.branch.add(238), obj) : (__cov__.branch.add(239), void 0);
  }
  function get(object, path, defaultValue) {
    __cov__.func.add(56);
    var value = (__cov__.stmt.add(325), deepGet(object, toPath(path)));
    __cov__.stmt.add(326);
    return isUndefined(value) ? (__cov__.branch.add(240), defaultValue) : (__cov__.branch.add(241), value);
  }
  function has(obj, path) {
    __cov__.func.add(57);
    __cov__.stmt.add(327);
    path = toPath(path);
    var length = (__cov__.stmt.add(328), path.length);
    __cov__.stmt.add(329);
    for (var i = (__cov__.stmt.add(330), 0); i < length; i++) {
      var key = (__cov__.stmt.add(331), path[i]);
      __cov__.stmt.add(332);
      if (!has$1(obj, key)) {
        __cov__.branch.add(242);
        __cov__.stmt.add(333);
        return false;
      } else {
        __cov__.branch.add(243);
      }
      __cov__.stmt.add(334);
      obj = obj[key];
    }
    __cov__.stmt.add(335);
    return !!length;
  }
  function identity(value) {
    __cov__.func.add(58);
    __cov__.stmt.add(336);
    return value;
  }
  function matcher(attrs) {
    __cov__.func.add(59);
    __cov__.stmt.add(337);
    attrs = extendOwn({}, attrs);
    __cov__.stmt.add(338);
    return function (obj) {
      __cov__.func.add(60);
      __cov__.stmt.add(339);
      return isMatch(obj, attrs);
    };
  }
  function property(path) {
    __cov__.func.add(61);
    __cov__.stmt.add(340);
    path = toPath(path);
    __cov__.stmt.add(341);
    return function (obj) {
      __cov__.func.add(62);
      __cov__.stmt.add(342);
      return deepGet(obj, path);
    };
  }
  function optimizeCb(func, context, argCount) {
    __cov__.func.add(63);
    __cov__.stmt.add(343);
    if (context === void 0) {
      __cov__.branch.add(244);
      __cov__.stmt.add(344);
      return func;
    } else {
      __cov__.branch.add(245);
    }
    __cov__.stmt.add(345);
    switch (argCount == null ? (__cov__.branch.add(246), 3) : (__cov__.branch.add(247), argCount)) {
    case 1:
      __cov__.branch.add(248);
      __cov__.stmt.add(346);
      return function (value) {
        __cov__.func.add(64);
        __cov__.stmt.add(347);
        return func.call(context, value);
      };
    case 3:
      __cov__.branch.add(249);
      __cov__.stmt.add(348);
      return function (value, index, collection) {
        __cov__.func.add(65);
        __cov__.stmt.add(349);
        return func.call(context, value, index, collection);
      };
    case 4:
      __cov__.branch.add(250);
      __cov__.stmt.add(350);
      return function (accumulator, value, index, collection) {
        __cov__.func.add(66);
        __cov__.stmt.add(351);
        return func.call(context, accumulator, value, index, collection);
      };
    }
    __cov__.stmt.add(352);
    return function () {
      __cov__.func.add(67);
      __cov__.stmt.add(353);
      return func.apply(context, arguments);
    };
  }
  function baseIteratee(value, context, argCount) {
    __cov__.func.add(68);
    __cov__.stmt.add(354);
    if (value == null) {
      __cov__.branch.add(251);
      __cov__.stmt.add(355);
      return identity;
    } else {
      __cov__.branch.add(252);
    }
    __cov__.stmt.add(356);
    if (isFunction$1(value)) {
      __cov__.branch.add(253);
      __cov__.stmt.add(357);
      return optimizeCb(value, context, argCount);
    } else {
      __cov__.branch.add(254);
    }
    __cov__.stmt.add(358);
    if ((__cov__.branch.add(255), isObject(value)) && (__cov__.branch.add(256), !isArray(value))) {
      __cov__.branch.add(257);
      __cov__.stmt.add(359);
      return matcher(value);
    } else {
      __cov__.branch.add(258);
    }
    __cov__.stmt.add(360);
    return property(value);
  }
  function iteratee(value, context) {
    __cov__.func.add(69);
    __cov__.stmt.add(361);
    return baseIteratee(value, context, Infinity);
  }
  __cov__.stmt.add(362);
  _$1.iteratee = iteratee;
  function cb(value, context, argCount) {
    __cov__.func.add(70);
    __cov__.stmt.add(363);
    if (_$1.iteratee !== iteratee) {
      __cov__.branch.add(259);
      __cov__.stmt.add(364);
      return _$1.iteratee(value, context);
    } else {
      __cov__.branch.add(260);
    }
    __cov__.stmt.add(365);
    return baseIteratee(value, context, argCount);
  }
  function mapObject(obj, iteratee, context) {
    __cov__.func.add(71);
    __cov__.stmt.add(366);
    iteratee = cb(iteratee, context);
    var _keys = (__cov__.stmt.add(367), keys(obj)), length = (__cov__.stmt.add(368), _keys.length), results = (__cov__.stmt.add(369), {});
    __cov__.stmt.add(370);
    for (var index = (__cov__.stmt.add(371), 0); index < length; index++) {
      var currentKey = (__cov__.stmt.add(372), _keys[index]);
      __cov__.stmt.add(373);
      results[currentKey] = iteratee(obj[currentKey], currentKey, obj);
    }
    __cov__.stmt.add(374);
    return results;
  }
  function noop() {
    __cov__.func.add(72);
  }
  function propertyOf(obj) {
    __cov__.func.add(73);
    __cov__.stmt.add(375);
    if (obj == null) {
      __cov__.branch.add(261);
      __cov__.stmt.add(376);
      return noop;
    } else {
      __cov__.branch.add(262);
    }
    __cov__.stmt.add(377);
    return function (path) {
      __cov__.func.add(74);
      __cov__.stmt.add(378);
      return get(obj, path);
    };
  }
  function times(n, iteratee, context) {
    __cov__.func.add(75);
    var accum = (__cov__.stmt.add(379), Array(Math.max(0, n)));
    __cov__.stmt.add(380);
    iteratee = optimizeCb(iteratee, context, 1);
    __cov__.stmt.add(381);
    for (var i = (__cov__.stmt.add(382), 0); i < n; i++) {
      __cov__.stmt.add(383);
      accum[i] = iteratee(i);
    }
    __cov__.stmt.add(384);
    return accum;
  }
  function random(min, max) {
    __cov__.func.add(76);
    __cov__.stmt.add(385);
    if (max == null) {
      __cov__.branch.add(263);
      __cov__.stmt.add(386);
      max = min;
      __cov__.stmt.add(387);
      min = 0;
    } else {
      __cov__.branch.add(264);
    }
    __cov__.stmt.add(388);
    return min + Math.floor(Math.random() * (max - min + 1));
  }
  var now = (__cov__.stmt.add(389), (__cov__.branch.add(265), Date.now) || (__cov__.branch.add(266), function () {
    __cov__.func.add(77);
    __cov__.stmt.add(390);
    return new Date().getTime();
  }));
  function createEscaper(map) {
    __cov__.func.add(78);
    var escaper = (__cov__.stmt.add(391), function (match) {
      __cov__.func.add(79);
      __cov__.stmt.add(392);
      return map[match];
    });
    var source = (__cov__.stmt.add(393), '(?:' + keys(map).join('|') + ')');
    var testRegexp = (__cov__.stmt.add(394), RegExp(source));
    var replaceRegexp = (__cov__.stmt.add(395), RegExp(source, 'g'));
    __cov__.stmt.add(396);
    return function (string) {
      __cov__.func.add(80);
      __cov__.stmt.add(397);
      string = string == null ? (__cov__.branch.add(267), '') : (__cov__.branch.add(268), '' + string);
      __cov__.stmt.add(398);
      return testRegexp.test(string) ? (__cov__.branch.add(269), string.replace(replaceRegexp, escaper)) : (__cov__.branch.add(270), string);
    };
  }
  var escapeMap = (__cov__.stmt.add(399), {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    '\'': '&#x27;',
    '`': '&#x60;'
  });
  var _escape = (__cov__.stmt.add(400), createEscaper(escapeMap));
  var unescapeMap = (__cov__.stmt.add(401), invert(escapeMap));
  var _unescape = (__cov__.stmt.add(402), createEscaper(unescapeMap));
  var templateSettings = (__cov__.stmt.add(403), _$1.templateSettings = {
    evaluate: /<%([\s\S]+?)%>/g,
    interpolate: /<%=([\s\S]+?)%>/g,
    escape: /<%-([\s\S]+?)%>/g
  });
  var noMatch = (__cov__.stmt.add(404), /(.)^/);
  var escapes = (__cov__.stmt.add(405), {
    '\'': '\'',
    '\\': '\\',
    '\r': 'r',
    '\n': 'n',
    '\u2028': 'u2028',
    '\u2029': 'u2029'
  });
  var escapeRegExp = (__cov__.stmt.add(406), /\\|'|\r|\n|\u2028|\u2029/g);
  function escapeChar(match) {
    __cov__.func.add(81);
    __cov__.stmt.add(407);
    return '\\' + escapes[match];
  }
  var bareIdentifier = (__cov__.stmt.add(408), /^\s*(\w|\$)+\s*$/);
  function template(text, settings, oldSettings) {
    __cov__.func.add(82);
    __cov__.stmt.add(409);
    if ((__cov__.branch.add(271), !settings) && (__cov__.branch.add(272), oldSettings)) {
      __cov__.branch.add(273);
      __cov__.stmt.add(410);
      settings = oldSettings;
    } else {
      __cov__.branch.add(274);
    }
    __cov__.stmt.add(411);
    settings = defaults({}, settings, _$1.templateSettings);
    var matcher = (__cov__.stmt.add(412), RegExp([
      ((__cov__.branch.add(275), settings.escape) || (__cov__.branch.add(276), noMatch)).source,
      ((__cov__.branch.add(277), settings.interpolate) || (__cov__.branch.add(278), noMatch)).source,
      ((__cov__.branch.add(279), settings.evaluate) || (__cov__.branch.add(280), noMatch)).source
    ].join('|') + '|$', 'g'));
    var index = (__cov__.stmt.add(413), 0);
    var source = (__cov__.stmt.add(414), '__p+=\'');
    __cov__.stmt.add(415);
    text.replace(matcher, function (match, escape, interpolate, evaluate, offset) {
      __cov__.func.add(83);
      __cov__.stmt.add(416);
      source += text.slice(index, offset).replace(escapeRegExp, escapeChar);
      __cov__.stmt.add(417);
      index = offset + match.length;
      __cov__.stmt.add(418);
      if (escape) {
        __cov__.branch.add(281);
        __cov__.stmt.add(419);
        source += '\'+\n((__t=(' + escape + '))==null?\'\':_.escape(__t))+\n\'';
      } else {
        __cov__.branch.add(282);
        __cov__.stmt.add(420);
        if (interpolate) {
          __cov__.branch.add(283);
          __cov__.stmt.add(421);
          source += '\'+\n((__t=(' + interpolate + '))==null?\'\':__t)+\n\'';
        } else {
          __cov__.branch.add(284);
          __cov__.stmt.add(422);
          if (evaluate) {
            __cov__.branch.add(285);
            __cov__.stmt.add(423);
            source += '\';\n' + evaluate + '\n__p+=\'';
          } else {
            __cov__.branch.add(286);
          }
        }
      }
      __cov__.stmt.add(424);
      return match;
    });
    __cov__.stmt.add(425);
    source += '\';\n';
    var argument = (__cov__.stmt.add(426), settings.variable);
    __cov__.stmt.add(427);
    if (argument) {
      __cov__.branch.add(287);
      __cov__.stmt.add(428);
      if (!bareIdentifier.test(argument)) {
        __cov__.branch.add(288);
        __cov__.stmt.add(429);
        throw new Error('variable is not a bare identifier: ' + argument);
      } else {
        __cov__.branch.add(289);
      }
    } else {
      __cov__.branch.add(290);
      __cov__.stmt.add(430);
      source = 'with(obj||{}){\n' + source + '}\n';
      __cov__.stmt.add(431);
      argument = 'obj';
    }
    __cov__.stmt.add(432);
    source = 'var __t,__p=\'\',__j=Array.prototype.join,' + 'print=function(){__p+=__j.call(arguments,\'\');};\n' + source + 'return __p;\n';
    var render;
    __cov__.stmt.add(433);
    try {
      __cov__.stmt.add(434);
      render = new Function(argument, '_', source);
    } catch (e) {
      __cov__.stmt.add(435);
      e.source = source;
      __cov__.stmt.add(436);
      throw e;
    }
    var template = (__cov__.stmt.add(437), function (data) {
      __cov__.func.add(84);
      __cov__.stmt.add(438);
      return render.call(this, data, _$1);
    });
    __cov__.stmt.add(439);
    template.source = 'function(' + argument + '){\n' + source + '}';
    __cov__.stmt.add(440);
    return template;
  }
  function result(obj, path, fallback) {
    __cov__.func.add(85);
    __cov__.stmt.add(441);
    path = toPath(path);
    var length = (__cov__.stmt.add(442), path.length);
    __cov__.stmt.add(443);
    if (!length) {
      __cov__.branch.add(291);
      __cov__.stmt.add(444);
      return isFunction$1(fallback) ? (__cov__.branch.add(292), fallback.call(obj)) : (__cov__.branch.add(293), fallback);
    } else {
      __cov__.branch.add(294);
    }
    __cov__.stmt.add(445);
    for (var i = (__cov__.stmt.add(446), 0); i < length; i++) {
      var prop = (__cov__.stmt.add(447), obj == null ? (__cov__.branch.add(295), void 0) : (__cov__.branch.add(296), obj[path[i]]));
      __cov__.stmt.add(448);
      if (prop === void 0) {
        __cov__.branch.add(297);
        __cov__.stmt.add(449);
        prop = fallback;
        __cov__.stmt.add(450);
        i = length;
      } else {
        __cov__.branch.add(298);
      }
      __cov__.stmt.add(451);
      obj = isFunction$1(prop) ? (__cov__.branch.add(299), prop.call(obj)) : (__cov__.branch.add(300), prop);
    }
    __cov__.stmt.add(452);
    return obj;
  }
  var idCounter = (__cov__.stmt.add(453), 0);
  function uniqueId(prefix) {
    __cov__.func.add(86);
    var id = (__cov__.stmt.add(454), ++idCounter + '');
    __cov__.stmt.add(455);
    return prefix ? (__cov__.branch.add(301), prefix + id) : (__cov__.branch.add(302), id);
  }
  function chain(obj) {
    __cov__.func.add(87);
    var instance = (__cov__.stmt.add(456), _$1(obj));
    __cov__.stmt.add(457);
    instance._chain = true;
    __cov__.stmt.add(458);
    return instance;
  }
  function executeBound(sourceFunc, boundFunc, context, callingContext, args) {
    __cov__.func.add(88);
    __cov__.stmt.add(459);
    if (!(callingContext instanceof boundFunc)) {
      __cov__.branch.add(303);
      __cov__.stmt.add(460);
      return sourceFunc.apply(context, args);
    } else {
      __cov__.branch.add(304);
    }
    var self = (__cov__.stmt.add(461), baseCreate(sourceFunc.prototype));
    var result = (__cov__.stmt.add(462), sourceFunc.apply(self, args));
    __cov__.stmt.add(463);
    if (isObject(result)) {
      __cov__.branch.add(305);
      __cov__.stmt.add(464);
      return result;
    } else {
      __cov__.branch.add(306);
    }
    __cov__.stmt.add(465);
    return self;
  }
  var partial = (__cov__.stmt.add(466), restArguments(function (func, boundArgs) {
    __cov__.func.add(89);
    var placeholder = (__cov__.stmt.add(467), partial.placeholder);
    var bound = (__cov__.stmt.add(468), function () {
      __cov__.func.add(90);
      var position = (__cov__.stmt.add(469), 0), length = (__cov__.stmt.add(470), boundArgs.length);
      var args = (__cov__.stmt.add(471), Array(length));
      __cov__.stmt.add(472);
      for (var i = (__cov__.stmt.add(473), 0); i < length; i++) {
        __cov__.stmt.add(474);
        args[i] = boundArgs[i] === placeholder ? (__cov__.branch.add(307), arguments[position++]) : (__cov__.branch.add(308), boundArgs[i]);
      }
      __cov__.stmt.add(475);
      while (position < arguments.length) {
        __cov__.stmt.add(476);
        args.push(arguments[position++]);
      }
      __cov__.stmt.add(477);
      return executeBound(func, bound, this, this, args);
    });
    __cov__.stmt.add(478);
    return bound;
  }));
  __cov__.stmt.add(479);
  partial.placeholder = _$1;
  var bind = (__cov__.stmt.add(480), restArguments(function (func, context, args) {
    __cov__.func.add(91);
    __cov__.stmt.add(481);
    if (!isFunction$1(func)) {
      __cov__.branch.add(309);
      __cov__.stmt.add(482);
      throw new TypeError('Bind must be called on a function');
    } else {
      __cov__.branch.add(310);
    }
    var bound = (__cov__.stmt.add(483), restArguments(function (callArgs) {
      __cov__.func.add(92);
      __cov__.stmt.add(484);
      return executeBound(func, bound, context, this, args.concat(callArgs));
    }));
    __cov__.stmt.add(485);
    return bound;
  }));
  var isArrayLike = (__cov__.stmt.add(486), createSizePropertyCheck(getLength));
  function flatten$1(input, depth, strict, output) {
    __cov__.func.add(93);
    __cov__.stmt.add(487);
    output = (__cov__.branch.add(311), output) || (__cov__.branch.add(312), []);
    __cov__.stmt.add(488);
    if ((__cov__.branch.add(313), !depth) && (__cov__.branch.add(314), depth !== 0)) {
      __cov__.branch.add(315);
      __cov__.stmt.add(489);
      depth = Infinity;
    } else {
      __cov__.branch.add(316);
      __cov__.stmt.add(490);
      if (depth <= 0) {
        __cov__.branch.add(317);
        __cov__.stmt.add(491);
        return output.concat(input);
      } else {
        __cov__.branch.add(318);
      }
    }
    var idx = (__cov__.stmt.add(492), output.length);
    __cov__.stmt.add(493);
    for (var i = (__cov__.stmt.add(494), 0), length = (__cov__.stmt.add(495), getLength(input)); i < length; i++) {
      var value = (__cov__.stmt.add(496), input[i]);
      __cov__.stmt.add(497);
      if ((__cov__.branch.add(319), isArrayLike(value)) && ((__cov__.branch.add(320), isArray(value)) || (__cov__.branch.add(321), isArguments$1(value)))) {
        __cov__.branch.add(322);
        __cov__.stmt.add(498);
        if (depth > 1) {
          __cov__.branch.add(323);
          __cov__.stmt.add(499);
          flatten$1(value, depth - 1, strict, output);
          __cov__.stmt.add(500);
          idx = output.length;
        } else {
          __cov__.branch.add(324);
          var j = (__cov__.stmt.add(501), 0), len = (__cov__.stmt.add(502), value.length);
          __cov__.stmt.add(503);
          while (j < len) {
            __cov__.stmt.add(504);
            output[idx++] = value[j++];
          }
        }
      } else {
        __cov__.branch.add(325);
        __cov__.stmt.add(505);
        if (!strict) {
          __cov__.branch.add(326);
          __cov__.stmt.add(506);
          output[idx++] = value;
        } else {
          __cov__.branch.add(327);
        }
      }
    }
    __cov__.stmt.add(507);
    return output;
  }
  var bindAll = (__cov__.stmt.add(508), restArguments(function (obj, keys) {
    __cov__.func.add(94);
    __cov__.stmt.add(509);
    keys = flatten$1(keys, false, false);
    var index = (__cov__.stmt.add(510), keys.length);
    __cov__.stmt.add(511);
    if (index < 1) {
      __cov__.branch.add(328);
      __cov__.stmt.add(512);
      throw new Error('bindAll must be passed function names');
    } else {
      __cov__.branch.add(329);
    }
    __cov__.stmt.add(513);
    while (index--) {
      var key = (__cov__.stmt.add(514), keys[index]);
      __cov__.stmt.add(515);
      obj[key] = bind(obj[key], obj);
    }
    __cov__.stmt.add(516);
    return obj;
  }));
  function memoize(func, hasher) {
    __cov__.func.add(95);
    var memoize = (__cov__.stmt.add(517), function (key) {
      __cov__.func.add(96);
      var cache = (__cov__.stmt.add(518), memoize.cache);
      var address = (__cov__.stmt.add(519), '' + (hasher ? (__cov__.branch.add(330), hasher.apply(this, arguments)) : (__cov__.branch.add(331), key)));
      __cov__.stmt.add(520);
      if (!has$1(cache, address)) {
        __cov__.branch.add(332);
        __cov__.stmt.add(521);
        cache[address] = func.apply(this, arguments);
      } else {
        __cov__.branch.add(333);
      }
      __cov__.stmt.add(522);
      return cache[address];
    });
    __cov__.stmt.add(523);
    memoize.cache = {};
    __cov__.stmt.add(524);
    return memoize;
  }
  var delay = (__cov__.stmt.add(525), restArguments(function (func, wait, args) {
    __cov__.func.add(97);
    __cov__.stmt.add(526);
    return setTimeout(function () {
      __cov__.func.add(98);
      __cov__.stmt.add(527);
      return func.apply(null, args);
    }, wait);
  }));
  var defer = (__cov__.stmt.add(528), partial(delay, _$1, 1));
  function throttle(func, wait, options) {
    __cov__.func.add(99);
    var timeout, context, args, result;
    var previous = (__cov__.stmt.add(529), 0);
    __cov__.stmt.add(530);
    if (!options) {
      __cov__.branch.add(334);
      __cov__.stmt.add(531);
      options = {};
    } else {
      __cov__.branch.add(335);
    }
    var later = (__cov__.stmt.add(532), function () {
      __cov__.func.add(100);
      __cov__.stmt.add(533);
      previous = options.leading === false ? (__cov__.branch.add(336), 0) : (__cov__.branch.add(337), now());
      __cov__.stmt.add(534);
      timeout = null;
      __cov__.stmt.add(535);
      result = func.apply(context, args);
      __cov__.stmt.add(536);
      if (!timeout) {
        __cov__.branch.add(338);
        __cov__.stmt.add(537);
        context = args = null;
      } else {
        __cov__.branch.add(339);
      }
    });
    var throttled = (__cov__.stmt.add(538), function () {
      __cov__.func.add(101);
      var _now = (__cov__.stmt.add(539), now());
      __cov__.stmt.add(540);
      if ((__cov__.branch.add(340), !previous) && (__cov__.branch.add(341), options.leading === false)) {
        __cov__.branch.add(342);
        __cov__.stmt.add(541);
        previous = _now;
      } else {
        __cov__.branch.add(343);
      }
      var remaining = (__cov__.stmt.add(542), wait - (_now - previous));
      __cov__.stmt.add(543);
      context = this;
      __cov__.stmt.add(544);
      args = arguments;
      __cov__.stmt.add(545);
      if ((__cov__.branch.add(344), remaining <= 0) || (__cov__.branch.add(345), remaining > wait)) {
        __cov__.branch.add(346);
        __cov__.stmt.add(546);
        if (timeout) {
          __cov__.branch.add(347);
          __cov__.stmt.add(547);
          clearTimeout(timeout);
          __cov__.stmt.add(548);
          timeout = null;
        } else {
          __cov__.branch.add(348);
        }
        __cov__.stmt.add(549);
        previous = _now;
        __cov__.stmt.add(550);
        result = func.apply(context, args);
        __cov__.stmt.add(551);
        if (!timeout) {
          __cov__.branch.add(349);
          __cov__.stmt.add(552);
          context = args = null;
        } else {
          __cov__.branch.add(350);
        }
      } else {
        __cov__.branch.add(351);
        __cov__.stmt.add(553);
        if ((__cov__.branch.add(352), !timeout) && (__cov__.branch.add(353), options.trailing !== false)) {
          __cov__.branch.add(354);
          __cov__.stmt.add(554);
          timeout = setTimeout(later, remaining);
        } else {
          __cov__.branch.add(355);
        }
      }
      __cov__.stmt.add(555);
      return result;
    });
    __cov__.stmt.add(556);
    throttled.cancel = function () {
      __cov__.func.add(102);
      __cov__.stmt.add(557);
      clearTimeout(timeout);
      __cov__.stmt.add(558);
      previous = 0;
      __cov__.stmt.add(559);
      timeout = context = args = null;
    };
    __cov__.stmt.add(560);
    return throttled;
  }
  function debounce(func, wait, immediate) {
    __cov__.func.add(103);
    var timeout, previous, args, result, context;
    var later = (__cov__.stmt.add(561), function () {
      __cov__.func.add(104);
      var passed = (__cov__.stmt.add(562), now() - previous);
      __cov__.stmt.add(563);
      if (wait > passed) {
        __cov__.branch.add(356);
        __cov__.stmt.add(564);
        timeout = setTimeout(later, wait - passed);
      } else {
        __cov__.branch.add(357);
        __cov__.stmt.add(565);
        timeout = null;
        __cov__.stmt.add(566);
        if (!immediate) {
          __cov__.branch.add(358);
          __cov__.stmt.add(567);
          result = func.apply(context, args);
        } else {
          __cov__.branch.add(359);
        }
        __cov__.stmt.add(568);
        if (!timeout) {
          __cov__.branch.add(360);
          __cov__.stmt.add(569);
          args = context = null;
        } else {
          __cov__.branch.add(361);
        }
      }
    });
    var debounced = (__cov__.stmt.add(570), restArguments(function (_args) {
      __cov__.func.add(105);
      __cov__.stmt.add(571);
      context = this;
      __cov__.stmt.add(572);
      args = _args;
      __cov__.stmt.add(573);
      previous = now();
      __cov__.stmt.add(574);
      if (!timeout) {
        __cov__.branch.add(362);
        __cov__.stmt.add(575);
        timeout = setTimeout(later, wait);
        __cov__.stmt.add(576);
        if (immediate) {
          __cov__.branch.add(363);
          __cov__.stmt.add(577);
          result = func.apply(context, args);
        } else {
          __cov__.branch.add(364);
        }
      } else {
        __cov__.branch.add(365);
      }
      __cov__.stmt.add(578);
      return result;
    }));
    __cov__.stmt.add(579);
    debounced.cancel = function () {
      __cov__.func.add(106);
      __cov__.stmt.add(580);
      clearTimeout(timeout);
      __cov__.stmt.add(581);
      timeout = args = context = null;
    };
    __cov__.stmt.add(582);
    return debounced;
  }
  function wrap(func, wrapper) {
    __cov__.func.add(107);
    __cov__.stmt.add(583);
    return partial(wrapper, func);
  }
  function negate(predicate) {
    __cov__.func.add(108);
    __cov__.stmt.add(584);
    return function () {
      __cov__.func.add(109);
      __cov__.stmt.add(585);
      return !predicate.apply(this, arguments);
    };
  }
  function compose() {
    __cov__.func.add(110);
    var args = (__cov__.stmt.add(586), arguments);
    var start = (__cov__.stmt.add(587), args.length - 1);
    __cov__.stmt.add(588);
    return function () {
      __cov__.func.add(111);
      var i = (__cov__.stmt.add(589), start);
      var result = (__cov__.stmt.add(590), args[start].apply(this, arguments));
      __cov__.stmt.add(591);
      while (i--) {
        __cov__.stmt.add(592);
        result = args[i].call(this, result);
      }
      __cov__.stmt.add(593);
      return result;
    };
  }
  function after(times, func) {
    __cov__.func.add(112);
    __cov__.stmt.add(594);
    return function () {
      __cov__.func.add(113);
      __cov__.stmt.add(595);
      if (--times < 1) {
        __cov__.branch.add(366);
        __cov__.stmt.add(596);
        return func.apply(this, arguments);
      } else {
        __cov__.branch.add(367);
      }
    };
  }
  function before(times, func) {
    __cov__.func.add(114);
    var memo;
    __cov__.stmt.add(597);
    return function () {
      __cov__.func.add(115);
      __cov__.stmt.add(598);
      if (--times > 0) {
        __cov__.branch.add(368);
        __cov__.stmt.add(599);
        memo = func.apply(this, arguments);
      } else {
        __cov__.branch.add(369);
      }
      __cov__.stmt.add(600);
      if (times <= 1) {
        __cov__.branch.add(370);
        __cov__.stmt.add(601);
        func = null;
      } else {
        __cov__.branch.add(371);
      }
      __cov__.stmt.add(602);
      return memo;
    };
  }
  var once = (__cov__.stmt.add(603), partial(before, 2));
  function findKey(obj, predicate, context) {
    __cov__.func.add(116);
    __cov__.stmt.add(604);
    predicate = cb(predicate, context);
    var _keys = (__cov__.stmt.add(605), keys(obj)), key;
    __cov__.stmt.add(606);
    for (var i = (__cov__.stmt.add(607), 0), length = (__cov__.stmt.add(608), _keys.length); i < length; i++) {
      __cov__.stmt.add(609);
      key = _keys[i];
      __cov__.stmt.add(610);
      if (predicate(obj[key], key, obj)) {
        __cov__.branch.add(372);
        __cov__.stmt.add(611);
        return key;
      } else {
        __cov__.branch.add(373);
      }
    }
  }
  function createPredicateIndexFinder(dir) {
    __cov__.func.add(117);
    __cov__.stmt.add(612);
    return function (array, predicate, context) {
      __cov__.func.add(118);
      __cov__.stmt.add(613);
      predicate = cb(predicate, context);
      var length = (__cov__.stmt.add(614), getLength(array));
      var index = (__cov__.stmt.add(615), dir > 0 ? (__cov__.branch.add(374), 0) : (__cov__.branch.add(375), length - 1));
      __cov__.stmt.add(616);
      for (; (__cov__.branch.add(376), index >= 0) && (__cov__.branch.add(377), index < length); index += dir) {
        __cov__.stmt.add(617);
        if (predicate(array[index], index, array)) {
          __cov__.branch.add(378);
          __cov__.stmt.add(618);
          return index;
        } else {
          __cov__.branch.add(379);
        }
      }
      __cov__.stmt.add(619);
      return -1;
    };
  }
  var findIndex = (__cov__.stmt.add(620), createPredicateIndexFinder(1));
  var findLastIndex = (__cov__.stmt.add(621), createPredicateIndexFinder(-1));
  function sortedIndex(array, obj, iteratee, context) {
    __cov__.func.add(119);
    __cov__.stmt.add(622);
    iteratee = cb(iteratee, context, 1);
    var value = (__cov__.stmt.add(623), iteratee(obj));
    var low = (__cov__.stmt.add(624), 0), high = (__cov__.stmt.add(625), getLength(array));
    __cov__.stmt.add(626);
    while (low < high) {
      var mid = (__cov__.stmt.add(627), Math.floor((low + high) / 2));
      __cov__.stmt.add(628);
      if (iteratee(array[mid]) < value) {
        __cov__.branch.add(380);
        __cov__.stmt.add(629);
        low = mid + 1;
      } else {
        __cov__.branch.add(381);
        __cov__.stmt.add(630);
        high = mid;
      }
    }
    __cov__.stmt.add(631);
    return low;
  }
  function createIndexFinder(dir, predicateFind, sortedIndex) {
    __cov__.func.add(120);
    __cov__.stmt.add(632);
    return function (array, item, idx) {
      __cov__.func.add(121);
      var i = (__cov__.stmt.add(633), 0), length = (__cov__.stmt.add(634), getLength(array));
      __cov__.stmt.add(635);
      if (typeof idx == 'number') {
        __cov__.branch.add(382);
        __cov__.stmt.add(636);
        if (dir > 0) {
          __cov__.branch.add(383);
          __cov__.stmt.add(637);
          i = idx >= 0 ? (__cov__.branch.add(384), idx) : (__cov__.branch.add(385), Math.max(idx + length, i));
        } else {
          __cov__.branch.add(386);
          __cov__.stmt.add(638);
          length = idx >= 0 ? (__cov__.branch.add(387), Math.min(idx + 1, length)) : (__cov__.branch.add(388), idx + length + 1);
        }
      } else {
        __cov__.branch.add(389);
        __cov__.stmt.add(639);
        if ((__cov__.branch.add(390), sortedIndex) && (__cov__.branch.add(391), idx) && (__cov__.branch.add(392), length)) {
          __cov__.branch.add(393);
          __cov__.stmt.add(640);
          idx = sortedIndex(array, item);
          __cov__.stmt.add(641);
          return array[idx] === item ? (__cov__.branch.add(394), idx) : (__cov__.branch.add(395), -1);
        } else {
          __cov__.branch.add(396);
        }
      }
      __cov__.stmt.add(642);
      if (item !== item) {
        __cov__.branch.add(397);
        __cov__.stmt.add(643);
        idx = predicateFind(slice.call(array, i, length), isNaN$1);
        __cov__.stmt.add(644);
        return idx >= 0 ? (__cov__.branch.add(398), idx + i) : (__cov__.branch.add(399), -1);
      } else {
        __cov__.branch.add(400);
      }
      __cov__.stmt.add(645);
      for (idx = dir > 0 ? (__cov__.branch.add(401), i) : (__cov__.branch.add(402), length - 1); (__cov__.branch.add(403), idx >= 0) && (__cov__.branch.add(404), idx < length); idx += dir) {
        __cov__.stmt.add(646);
        if (array[idx] === item) {
          __cov__.branch.add(405);
          __cov__.stmt.add(647);
          return idx;
        } else {
          __cov__.branch.add(406);
        }
      }
      __cov__.stmt.add(648);
      return -1;
    };
  }
  var indexOf = (__cov__.stmt.add(649), createIndexFinder(1, findIndex, sortedIndex));
  var lastIndexOf = (__cov__.stmt.add(650), createIndexFinder(-1, findLastIndex));
  function find(obj, predicate, context) {
    __cov__.func.add(122);
    var keyFinder = (__cov__.stmt.add(651), isArrayLike(obj) ? (__cov__.branch.add(407), findIndex) : (__cov__.branch.add(408), findKey));
    var key = (__cov__.stmt.add(652), keyFinder(obj, predicate, context));
    __cov__.stmt.add(653);
    if ((__cov__.branch.add(409), key !== void 0) && (__cov__.branch.add(410), key !== -1)) {
      __cov__.branch.add(411);
      __cov__.stmt.add(654);
      return obj[key];
    } else {
      __cov__.branch.add(412);
    }
  }
  function findWhere(obj, attrs) {
    __cov__.func.add(123);
    __cov__.stmt.add(655);
    return find(obj, matcher(attrs));
  }
  function each(obj, iteratee, context) {
    __cov__.func.add(124);
    __cov__.stmt.add(656);
    iteratee = optimizeCb(iteratee, context);
    var i, length;
    __cov__.stmt.add(657);
    if (isArrayLike(obj)) {
      __cov__.branch.add(413);
      __cov__.stmt.add(658);
      for (i = 0, length = obj.length; i < length; i++) {
        __cov__.stmt.add(659);
        iteratee(obj[i], i, obj);
      }
    } else {
      __cov__.branch.add(414);
      var _keys = (__cov__.stmt.add(660), keys(obj));
      __cov__.stmt.add(661);
      for (i = 0, length = _keys.length; i < length; i++) {
        __cov__.stmt.add(662);
        iteratee(obj[_keys[i]], _keys[i], obj);
      }
    }
    __cov__.stmt.add(663);
    return obj;
  }
  function map(obj, iteratee, context) {
    __cov__.func.add(125);
    __cov__.stmt.add(664);
    iteratee = cb(iteratee, context);
    var _keys = (__cov__.stmt.add(665), (__cov__.branch.add(415), !isArrayLike(obj)) && (__cov__.branch.add(416), keys(obj))), length = (__cov__.stmt.add(666), ((__cov__.branch.add(417), _keys) || (__cov__.branch.add(418), obj)).length), results = (__cov__.stmt.add(667), Array(length));
    __cov__.stmt.add(668);
    for (var index = (__cov__.stmt.add(669), 0); index < length; index++) {
      var currentKey = (__cov__.stmt.add(670), _keys ? (__cov__.branch.add(419), _keys[index]) : (__cov__.branch.add(420), index));
      __cov__.stmt.add(671);
      results[index] = iteratee(obj[currentKey], currentKey, obj);
    }
    __cov__.stmt.add(672);
    return results;
  }
  function createReduce(dir) {
    __cov__.func.add(126);
    var reducer = (__cov__.stmt.add(673), function (obj, iteratee, memo, initial) {
      __cov__.func.add(127);
      var _keys = (__cov__.stmt.add(674), (__cov__.branch.add(421), !isArrayLike(obj)) && (__cov__.branch.add(422), keys(obj))), length = (__cov__.stmt.add(675), ((__cov__.branch.add(423), _keys) || (__cov__.branch.add(424), obj)).length), index = (__cov__.stmt.add(676), dir > 0 ? (__cov__.branch.add(425), 0) : (__cov__.branch.add(426), length - 1));
      __cov__.stmt.add(677);
      if (!initial) {
        __cov__.branch.add(427);
        __cov__.stmt.add(678);
        memo = obj[_keys ? (__cov__.branch.add(428), _keys[index]) : (__cov__.branch.add(429), index)];
        __cov__.stmt.add(679);
        index += dir;
      } else {
        __cov__.branch.add(430);
      }
      __cov__.stmt.add(680);
      for (; (__cov__.branch.add(431), index >= 0) && (__cov__.branch.add(432), index < length); index += dir) {
        var currentKey = (__cov__.stmt.add(681), _keys ? (__cov__.branch.add(433), _keys[index]) : (__cov__.branch.add(434), index));
        __cov__.stmt.add(682);
        memo = iteratee(memo, obj[currentKey], currentKey, obj);
      }
      __cov__.stmt.add(683);
      return memo;
    });
    __cov__.stmt.add(684);
    return function (obj, iteratee, memo, context) {
      __cov__.func.add(128);
      var initial = (__cov__.stmt.add(685), arguments.length >= 3);
      __cov__.stmt.add(686);
      return reducer(obj, optimizeCb(iteratee, context, 4), memo, initial);
    };
  }
  var reduce = (__cov__.stmt.add(687), createReduce(1));
  var reduceRight = (__cov__.stmt.add(688), createReduce(-1));
  function filter(obj, predicate, context) {
    __cov__.func.add(129);
    var results = (__cov__.stmt.add(689), []);
    __cov__.stmt.add(690);
    predicate = cb(predicate, context);
    __cov__.stmt.add(691);
    each(obj, function (value, index, list) {
      __cov__.func.add(130);
      __cov__.stmt.add(692);
      if (predicate(value, index, list)) {
        __cov__.branch.add(435);
        __cov__.stmt.add(693);
        results.push(value);
      } else {
        __cov__.branch.add(436);
      }
    });
    __cov__.stmt.add(694);
    return results;
  }
  function reject(obj, predicate, context) {
    __cov__.func.add(131);
    __cov__.stmt.add(695);
    return filter(obj, negate(cb(predicate)), context);
  }
  function every(obj, predicate, context) {
    __cov__.func.add(132);
    __cov__.stmt.add(696);
    predicate = cb(predicate, context);
    var _keys = (__cov__.stmt.add(697), (__cov__.branch.add(437), !isArrayLike(obj)) && (__cov__.branch.add(438), keys(obj))), length = (__cov__.stmt.add(698), ((__cov__.branch.add(439), _keys) || (__cov__.branch.add(440), obj)).length);
    __cov__.stmt.add(699);
    for (var index = (__cov__.stmt.add(700), 0); index < length; index++) {
      var currentKey = (__cov__.stmt.add(701), _keys ? (__cov__.branch.add(441), _keys[index]) : (__cov__.branch.add(442), index));
      __cov__.stmt.add(702);
      if (!predicate(obj[currentKey], currentKey, obj)) {
        __cov__.branch.add(443);
        __cov__.stmt.add(703);
        return false;
      } else {
        __cov__.branch.add(444);
      }
    }
    __cov__.stmt.add(704);
    return true;
  }
  function some(obj, predicate, context) {
    __cov__.func.add(133);
    __cov__.stmt.add(705);
    predicate = cb(predicate, context);
    var _keys = (__cov__.stmt.add(706), (__cov__.branch.add(445), !isArrayLike(obj)) && (__cov__.branch.add(446), keys(obj))), length = (__cov__.stmt.add(707), ((__cov__.branch.add(447), _keys) || (__cov__.branch.add(448), obj)).length);
    __cov__.stmt.add(708);
    for (var index = (__cov__.stmt.add(709), 0); index < length; index++) {
      var currentKey = (__cov__.stmt.add(710), _keys ? (__cov__.branch.add(449), _keys[index]) : (__cov__.branch.add(450), index));
      __cov__.stmt.add(711);
      if (predicate(obj[currentKey], currentKey, obj)) {
        __cov__.branch.add(451);
        __cov__.stmt.add(712);
        return true;
      } else {
        __cov__.branch.add(452);
      }
    }
    __cov__.stmt.add(713);
    return false;
  }
  function contains(obj, item, fromIndex, guard) {
    __cov__.func.add(134);
    __cov__.stmt.add(714);
    if (!isArrayLike(obj)) {
      __cov__.branch.add(453);
      __cov__.stmt.add(715);
      obj = values(obj);
    } else {
      __cov__.branch.add(454);
    }
    __cov__.stmt.add(716);
    if ((__cov__.branch.add(455), typeof fromIndex != 'number') || (__cov__.branch.add(456), guard)) {
      __cov__.branch.add(457);
      __cov__.stmt.add(717);
      fromIndex = 0;
    } else {
      __cov__.branch.add(458);
    }
    __cov__.stmt.add(718);
    return indexOf(obj, item, fromIndex) >= 0;
  }
  var invoke = (__cov__.stmt.add(719), restArguments(function (obj, path, args) {
    __cov__.func.add(135);
    var contextPath, func;
    __cov__.stmt.add(720);
    if (isFunction$1(path)) {
      __cov__.branch.add(459);
      __cov__.stmt.add(721);
      func = path;
    } else {
      __cov__.branch.add(460);
      __cov__.stmt.add(722);
      path = toPath(path);
      __cov__.stmt.add(723);
      contextPath = path.slice(0, -1);
      __cov__.stmt.add(724);
      path = path[path.length - 1];
    }
    __cov__.stmt.add(725);
    return map(obj, function (context) {
      __cov__.func.add(136);
      var method = (__cov__.stmt.add(726), func);
      __cov__.stmt.add(727);
      if (!method) {
        __cov__.branch.add(461);
        __cov__.stmt.add(728);
        if ((__cov__.branch.add(462), contextPath) && (__cov__.branch.add(463), contextPath.length)) {
          __cov__.branch.add(464);
          __cov__.stmt.add(729);
          context = deepGet(context, contextPath);
        } else {
          __cov__.branch.add(465);
        }
        __cov__.stmt.add(730);
        if (context == null) {
          __cov__.branch.add(466);
          __cov__.stmt.add(731);
          return void 0;
        } else {
          __cov__.branch.add(467);
        }
        __cov__.stmt.add(732);
        method = context[path];
      } else {
        __cov__.branch.add(468);
      }
      __cov__.stmt.add(733);
      return method == null ? (__cov__.branch.add(469), method) : (__cov__.branch.add(470), method.apply(context, args));
    });
  }));
  function pluck(obj, key) {
    __cov__.func.add(137);
    __cov__.stmt.add(734);
    return map(obj, property(key));
  }
  function where(obj, attrs) {
    __cov__.func.add(138);
    __cov__.stmt.add(735);
    return filter(obj, matcher(attrs));
  }
  function max(obj, iteratee, context) {
    __cov__.func.add(139);
    var result = (__cov__.stmt.add(736), -Infinity), lastComputed = (__cov__.stmt.add(737), -Infinity), value, computed;
    __cov__.stmt.add(738);
    if ((__cov__.branch.add(471), iteratee == null) || (__cov__.branch.add(472), typeof iteratee == 'number') && (__cov__.branch.add(473), typeof obj[0] != 'object') && (__cov__.branch.add(474), obj != null)) {
      __cov__.branch.add(475);
      __cov__.stmt.add(739);
      obj = isArrayLike(obj) ? (__cov__.branch.add(476), obj) : (__cov__.branch.add(477), values(obj));
      __cov__.stmt.add(740);
      for (var i = (__cov__.stmt.add(741), 0), length = (__cov__.stmt.add(742), obj.length); i < length; i++) {
        __cov__.stmt.add(743);
        value = obj[i];
        __cov__.stmt.add(744);
        if ((__cov__.branch.add(478), value != null) && (__cov__.branch.add(479), value > result)) {
          __cov__.branch.add(480);
          __cov__.stmt.add(745);
          result = value;
        } else {
          __cov__.branch.add(481);
        }
      }
    } else {
      __cov__.branch.add(482);
      __cov__.stmt.add(746);
      iteratee = cb(iteratee, context);
      __cov__.stmt.add(747);
      each(obj, function (v, index, list) {
        __cov__.func.add(140);
        __cov__.stmt.add(748);
        computed = iteratee(v, index, list);
        __cov__.stmt.add(749);
        if ((__cov__.branch.add(483), computed > lastComputed) || (__cov__.branch.add(484), computed === -Infinity) && (__cov__.branch.add(485), result === -Infinity)) {
          __cov__.branch.add(486);
          __cov__.stmt.add(750);
          result = v;
          __cov__.stmt.add(751);
          lastComputed = computed;
        } else {
          __cov__.branch.add(487);
        }
      });
    }
    __cov__.stmt.add(752);
    return result;
  }
  function min(obj, iteratee, context) {
    __cov__.func.add(141);
    var result = (__cov__.stmt.add(753), Infinity), lastComputed = (__cov__.stmt.add(754), Infinity), value, computed;
    __cov__.stmt.add(755);
    if ((__cov__.branch.add(488), iteratee == null) || (__cov__.branch.add(489), typeof iteratee == 'number') && (__cov__.branch.add(490), typeof obj[0] != 'object') && (__cov__.branch.add(491), obj != null)) {
      __cov__.branch.add(492);
      __cov__.stmt.add(756);
      obj = isArrayLike(obj) ? (__cov__.branch.add(493), obj) : (__cov__.branch.add(494), values(obj));
      __cov__.stmt.add(757);
      for (var i = (__cov__.stmt.add(758), 0), length = (__cov__.stmt.add(759), obj.length); i < length; i++) {
        __cov__.stmt.add(760);
        value = obj[i];
        __cov__.stmt.add(761);
        if ((__cov__.branch.add(495), value != null) && (__cov__.branch.add(496), value < result)) {
          __cov__.branch.add(497);
          __cov__.stmt.add(762);
          result = value;
        } else {
          __cov__.branch.add(498);
        }
      }
    } else {
      __cov__.branch.add(499);
      __cov__.stmt.add(763);
      iteratee = cb(iteratee, context);
      __cov__.stmt.add(764);
      each(obj, function (v, index, list) {
        __cov__.func.add(142);
        __cov__.stmt.add(765);
        computed = iteratee(v, index, list);
        __cov__.stmt.add(766);
        if ((__cov__.branch.add(500), computed < lastComputed) || (__cov__.branch.add(501), computed === Infinity) && (__cov__.branch.add(502), result === Infinity)) {
          __cov__.branch.add(503);
          __cov__.stmt.add(767);
          result = v;
          __cov__.stmt.add(768);
          lastComputed = computed;
        } else {
          __cov__.branch.add(504);
        }
      });
    }
    __cov__.stmt.add(769);
    return result;
  }
  var reStrSymbol = (__cov__.stmt.add(770), /[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g);
  function toArray(obj) {
    __cov__.func.add(143);
    __cov__.stmt.add(771);
    if (!obj) {
      __cov__.branch.add(505);
      __cov__.stmt.add(772);
      return [];
    } else {
      __cov__.branch.add(506);
    }
    __cov__.stmt.add(773);
    if (isArray(obj)) {
      __cov__.branch.add(507);
      __cov__.stmt.add(774);
      return slice.call(obj);
    } else {
      __cov__.branch.add(508);
    }
    __cov__.stmt.add(775);
    if (isString(obj)) {
      __cov__.branch.add(509);
      __cov__.stmt.add(776);
      return obj.match(reStrSymbol);
    } else {
      __cov__.branch.add(510);
    }
    __cov__.stmt.add(777);
    if (isArrayLike(obj)) {
      __cov__.branch.add(511);
      __cov__.stmt.add(778);
      return map(obj, identity);
    } else {
      __cov__.branch.add(512);
    }
    __cov__.stmt.add(779);
    return values(obj);
  }
  function sample(obj, n, guard) {
    __cov__.func.add(144);
    __cov__.stmt.add(780);
    if ((__cov__.branch.add(513), n == null) || (__cov__.branch.add(514), guard)) {
      __cov__.branch.add(515);
      __cov__.stmt.add(781);
      if (!isArrayLike(obj)) {
        __cov__.branch.add(516);
        __cov__.stmt.add(782);
        obj = values(obj);
      } else {
        __cov__.branch.add(517);
      }
      __cov__.stmt.add(783);
      return obj[random(obj.length - 1)];
    } else {
      __cov__.branch.add(518);
    }
    var sample = (__cov__.stmt.add(784), toArray(obj));
    var length = (__cov__.stmt.add(785), getLength(sample));
    __cov__.stmt.add(786);
    n = Math.max(Math.min(n, length), 0);
    var last = (__cov__.stmt.add(787), length - 1);
    __cov__.stmt.add(788);
    for (var index = (__cov__.stmt.add(789), 0); index < n; index++) {
      var rand = (__cov__.stmt.add(790), random(index, last));
      var temp = (__cov__.stmt.add(791), sample[index]);
      __cov__.stmt.add(792);
      sample[index] = sample[rand];
      __cov__.stmt.add(793);
      sample[rand] = temp;
    }
    __cov__.stmt.add(794);
    return sample.slice(0, n);
  }
  function shuffle(obj) {
    __cov__.func.add(145);
    __cov__.stmt.add(795);
    return sample(obj, Infinity);
  }
  function sortBy(obj, iteratee, context) {
    __cov__.func.add(146);
    var index = (__cov__.stmt.add(796), 0);
    __cov__.stmt.add(797);
    iteratee = cb(iteratee, context);
    __cov__.stmt.add(798);
    return pluck(map(obj, function (value, key, list) {
      __cov__.func.add(147);
      __cov__.stmt.add(799);
      return {
        value: value,
        index: index++,
        criteria: iteratee(value, key, list)
      };
    }).sort(function (left, right) {
      __cov__.func.add(148);
      var a = (__cov__.stmt.add(800), left.criteria);
      var b = (__cov__.stmt.add(801), right.criteria);
      __cov__.stmt.add(802);
      if (a !== b) {
        __cov__.branch.add(519);
        __cov__.stmt.add(803);
        if ((__cov__.branch.add(520), a > b) || (__cov__.branch.add(521), a === void 0)) {
          __cov__.branch.add(522);
          __cov__.stmt.add(804);
          return 1;
        } else {
          __cov__.branch.add(523);
        }
        __cov__.stmt.add(805);
        if ((__cov__.branch.add(524), a < b) || (__cov__.branch.add(525), b === void 0)) {
          __cov__.branch.add(526);
          __cov__.stmt.add(806);
          return -1;
        } else {
          __cov__.branch.add(527);
        }
      } else {
        __cov__.branch.add(528);
      }
      __cov__.stmt.add(807);
      return left.index - right.index;
    }), 'value');
  }
  function group(behavior, partition) {
    __cov__.func.add(149);
    __cov__.stmt.add(808);
    return function (obj, iteratee, context) {
      __cov__.func.add(150);
      var result = (__cov__.stmt.add(809), partition ? (__cov__.branch.add(529), [
        [],
        []
      ]) : (__cov__.branch.add(530), {}));
      __cov__.stmt.add(810);
      iteratee = cb(iteratee, context);
      __cov__.stmt.add(811);
      each(obj, function (value, index) {
        __cov__.func.add(151);
        var key = (__cov__.stmt.add(812), iteratee(value, index, obj));
        __cov__.stmt.add(813);
        behavior(result, value, key);
      });
      __cov__.stmt.add(814);
      return result;
    };
  }
  var groupBy = (__cov__.stmt.add(815), group(function (result, value, key) {
    __cov__.func.add(152);
    __cov__.stmt.add(816);
    if (has$1(result, key)) {
      __cov__.branch.add(531);
      __cov__.stmt.add(817);
      result[key].push(value);
    } else {
      __cov__.branch.add(532);
      __cov__.stmt.add(818);
      result[key] = [value];
    }
  }));
  var indexBy = (__cov__.stmt.add(819), group(function (result, value, key) {
    __cov__.func.add(153);
    __cov__.stmt.add(820);
    result[key] = value;
  }));
  var countBy = (__cov__.stmt.add(821), group(function (result, value, key) {
    __cov__.func.add(154);
    __cov__.stmt.add(822);
    if (has$1(result, key)) {
      __cov__.branch.add(533);
      __cov__.stmt.add(823);
      result[key]++;
    } else {
      __cov__.branch.add(534);
      __cov__.stmt.add(824);
      result[key] = 1;
    }
  }));
  var partition = (__cov__.stmt.add(825), group(function (result, value, pass) {
    __cov__.func.add(155);
    __cov__.stmt.add(826);
    result[pass ? (__cov__.branch.add(535), 0) : (__cov__.branch.add(536), 1)].push(value);
  }, true));
  function size(obj) {
    __cov__.func.add(156);
    __cov__.stmt.add(827);
    if (obj == null) {
      __cov__.branch.add(537);
      __cov__.stmt.add(828);
      return 0;
    } else {
      __cov__.branch.add(538);
    }
    __cov__.stmt.add(829);
    return isArrayLike(obj) ? (__cov__.branch.add(539), obj.length) : (__cov__.branch.add(540), keys(obj).length);
  }
  function keyInObj(value, key, obj) {
    __cov__.func.add(157);
    __cov__.stmt.add(830);
    return key in obj;
  }
  var pick = (__cov__.stmt.add(831), restArguments(function (obj, keys) {
    __cov__.func.add(158);
    var result = (__cov__.stmt.add(832), {}), iteratee = (__cov__.stmt.add(833), keys[0]);
    __cov__.stmt.add(834);
    if (obj == null) {
      __cov__.branch.add(541);
      __cov__.stmt.add(835);
      return result;
    } else {
      __cov__.branch.add(542);
    }
    __cov__.stmt.add(836);
    if (isFunction$1(iteratee)) {
      __cov__.branch.add(543);
      __cov__.stmt.add(837);
      if (keys.length > 1) {
        __cov__.branch.add(544);
        __cov__.stmt.add(838);
        iteratee = optimizeCb(iteratee, keys[1]);
      } else {
        __cov__.branch.add(545);
      }
      __cov__.stmt.add(839);
      keys = allKeys(obj);
    } else {
      __cov__.branch.add(546);
      __cov__.stmt.add(840);
      iteratee = keyInObj;
      __cov__.stmt.add(841);
      keys = flatten$1(keys, false, false);
      __cov__.stmt.add(842);
      obj = Object(obj);
    }
    __cov__.stmt.add(843);
    for (var i = (__cov__.stmt.add(844), 0), length = (__cov__.stmt.add(845), keys.length); i < length; i++) {
      var key = (__cov__.stmt.add(846), keys[i]);
      var value = (__cov__.stmt.add(847), obj[key]);
      __cov__.stmt.add(848);
      if (iteratee(value, key, obj)) {
        __cov__.branch.add(547);
        __cov__.stmt.add(849);
        result[key] = value;
      } else {
        __cov__.branch.add(548);
      }
    }
    __cov__.stmt.add(850);
    return result;
  }));
  var omit = (__cov__.stmt.add(851), restArguments(function (obj, keys) {
    __cov__.func.add(159);
    var iteratee = (__cov__.stmt.add(852), keys[0]), context;
    __cov__.stmt.add(853);
    if (isFunction$1(iteratee)) {
      __cov__.branch.add(549);
      __cov__.stmt.add(854);
      iteratee = negate(iteratee);
      __cov__.stmt.add(855);
      if (keys.length > 1) {
        __cov__.branch.add(550);
        __cov__.stmt.add(856);
        context = keys[1];
      } else {
        __cov__.branch.add(551);
      }
    } else {
      __cov__.branch.add(552);
      __cov__.stmt.add(857);
      keys = map(flatten$1(keys, false, false), String);
      __cov__.stmt.add(858);
      iteratee = function (value, key) {
        __cov__.func.add(160);
        __cov__.stmt.add(859);
        return !contains(keys, key);
      };
    }
    __cov__.stmt.add(860);
    return pick(obj, iteratee, context);
  }));
  function initial(array, n, guard) {
    __cov__.func.add(161);
    __cov__.stmt.add(861);
    return slice.call(array, 0, Math.max(0, array.length - ((__cov__.branch.add(553), n == null) || (__cov__.branch.add(554), guard) ? (__cov__.branch.add(555), 1) : (__cov__.branch.add(556), n))));
  }
  function first(array, n, guard) {
    __cov__.func.add(162);
    __cov__.stmt.add(862);
    if ((__cov__.branch.add(557), array == null) || (__cov__.branch.add(558), array.length < 1)) {
      __cov__.branch.add(559);
      __cov__.stmt.add(863);
      return (__cov__.branch.add(560), n == null) || (__cov__.branch.add(561), guard) ? (__cov__.branch.add(562), void 0) : (__cov__.branch.add(563), []);
    } else {
      __cov__.branch.add(564);
    }
    __cov__.stmt.add(864);
    if ((__cov__.branch.add(565), n == null) || (__cov__.branch.add(566), guard)) {
      __cov__.branch.add(567);
      __cov__.stmt.add(865);
      return array[0];
    } else {
      __cov__.branch.add(568);
    }
    __cov__.stmt.add(866);
    return initial(array, array.length - n);
  }
  function rest(array, n, guard) {
    __cov__.func.add(163);
    __cov__.stmt.add(867);
    return slice.call(array, (__cov__.branch.add(569), n == null) || (__cov__.branch.add(570), guard) ? (__cov__.branch.add(571), 1) : (__cov__.branch.add(572), n));
  }
  function last(array, n, guard) {
    __cov__.func.add(164);
    __cov__.stmt.add(868);
    if ((__cov__.branch.add(573), array == null) || (__cov__.branch.add(574), array.length < 1)) {
      __cov__.branch.add(575);
      __cov__.stmt.add(869);
      return (__cov__.branch.add(576), n == null) || (__cov__.branch.add(577), guard) ? (__cov__.branch.add(578), void 0) : (__cov__.branch.add(579), []);
    } else {
      __cov__.branch.add(580);
    }
    __cov__.stmt.add(870);
    if ((__cov__.branch.add(581), n == null) || (__cov__.branch.add(582), guard)) {
      __cov__.branch.add(583);
      __cov__.stmt.add(871);
      return array[array.length - 1];
    } else {
      __cov__.branch.add(584);
    }
    __cov__.stmt.add(872);
    return rest(array, Math.max(0, array.length - n));
  }
  function compact(array) {
    __cov__.func.add(165);
    __cov__.stmt.add(873);
    return filter(array, Boolean);
  }
  function flatten(array, depth) {
    __cov__.func.add(166);
    __cov__.stmt.add(874);
    return flatten$1(array, depth, false);
  }
  var difference = (__cov__.stmt.add(875), restArguments(function (array, rest) {
    __cov__.func.add(167);
    __cov__.stmt.add(876);
    rest = flatten$1(rest, true, true);
    __cov__.stmt.add(877);
    return filter(array, function (value) {
      __cov__.func.add(168);
      __cov__.stmt.add(878);
      return !contains(rest, value);
    });
  }));
  var without = (__cov__.stmt.add(879), restArguments(function (array, otherArrays) {
    __cov__.func.add(169);
    __cov__.stmt.add(880);
    return difference(array, otherArrays);
  }));
  function uniq(array, isSorted, iteratee, context) {
    __cov__.func.add(170);
    __cov__.stmt.add(881);
    if (!isBoolean(isSorted)) {
      __cov__.branch.add(585);
      __cov__.stmt.add(882);
      context = iteratee;
      __cov__.stmt.add(883);
      iteratee = isSorted;
      __cov__.stmt.add(884);
      isSorted = false;
    } else {
      __cov__.branch.add(586);
    }
    __cov__.stmt.add(885);
    if (iteratee != null) {
      __cov__.branch.add(587);
      __cov__.stmt.add(886);
      iteratee = cb(iteratee, context);
    } else {
      __cov__.branch.add(588);
    }
    var result = (__cov__.stmt.add(887), []);
    var seen = (__cov__.stmt.add(888), []);
    __cov__.stmt.add(889);
    for (var i = (__cov__.stmt.add(890), 0), length = (__cov__.stmt.add(891), getLength(array)); i < length; i++) {
      var value = (__cov__.stmt.add(892), array[i]), computed = (__cov__.stmt.add(893), iteratee ? (__cov__.branch.add(589), iteratee(value, i, array)) : (__cov__.branch.add(590), value));
      __cov__.stmt.add(894);
      if ((__cov__.branch.add(591), isSorted) && (__cov__.branch.add(592), !iteratee)) {
        __cov__.branch.add(593);
        __cov__.stmt.add(895);
        if ((__cov__.branch.add(594), !i) || (__cov__.branch.add(595), seen !== computed)) {
          __cov__.branch.add(596);
          __cov__.stmt.add(896);
          result.push(value);
        } else {
          __cov__.branch.add(597);
        }
        __cov__.stmt.add(897);
        seen = computed;
      } else {
        __cov__.branch.add(598);
        __cov__.stmt.add(898);
        if (iteratee) {
          __cov__.branch.add(599);
          __cov__.stmt.add(899);
          if (!contains(seen, computed)) {
            __cov__.branch.add(600);
            __cov__.stmt.add(900);
            seen.push(computed);
            __cov__.stmt.add(901);
            result.push(value);
          } else {
            __cov__.branch.add(601);
          }
        } else {
          __cov__.branch.add(602);
          __cov__.stmt.add(902);
          if (!contains(result, value)) {
            __cov__.branch.add(603);
            __cov__.stmt.add(903);
            result.push(value);
          } else {
            __cov__.branch.add(604);
          }
        }
      }
    }
    __cov__.stmt.add(904);
    return result;
  }
  var union = (__cov__.stmt.add(905), restArguments(function (arrays) {
    __cov__.func.add(171);
    __cov__.stmt.add(906);
    return uniq(flatten$1(arrays, true, true));
  }));
  function intersection(array) {
    __cov__.func.add(172);
    var result = (__cov__.stmt.add(907), []);
    var argsLength = (__cov__.stmt.add(908), arguments.length);
    __cov__.stmt.add(909);
    for (var i = (__cov__.stmt.add(910), 0), length = (__cov__.stmt.add(911), getLength(array)); i < length; i++) {
      var item = (__cov__.stmt.add(912), array[i]);
      __cov__.stmt.add(913);
      if (contains(result, item)) {
        __cov__.branch.add(605);
        __cov__.stmt.add(914);
        continue;
      } else {
        __cov__.branch.add(606);
      }
      var j;
      __cov__.stmt.add(915);
      for (j = 1; j < argsLength; j++) {
        __cov__.stmt.add(916);
        if (!contains(arguments[j], item)) {
          __cov__.branch.add(607);
          __cov__.stmt.add(917);
          break;
        } else {
          __cov__.branch.add(608);
        }
      }
      __cov__.stmt.add(918);
      if (j === argsLength) {
        __cov__.branch.add(609);
        __cov__.stmt.add(919);
        result.push(item);
      } else {
        __cov__.branch.add(610);
      }
    }
    __cov__.stmt.add(920);
    return result;
  }
  function unzip(array) {
    __cov__.func.add(173);
    var length = (__cov__.stmt.add(921), (__cov__.branch.add(611), array) && (__cov__.branch.add(612), max(array, getLength).length) || (__cov__.branch.add(613), 0));
    var result = (__cov__.stmt.add(922), Array(length));
    __cov__.stmt.add(923);
    for (var index = (__cov__.stmt.add(924), 0); index < length; index++) {
      __cov__.stmt.add(925);
      result[index] = pluck(array, index);
    }
    __cov__.stmt.add(926);
    return result;
  }
  var zip = (__cov__.stmt.add(927), restArguments(unzip));
  function object(list, values) {
    __cov__.func.add(174);
    var result = (__cov__.stmt.add(928), {});
    __cov__.stmt.add(929);
    for (var i = (__cov__.stmt.add(930), 0), length = (__cov__.stmt.add(931), getLength(list)); i < length; i++) {
      __cov__.stmt.add(932);
      if (values) {
        __cov__.branch.add(614);
        __cov__.stmt.add(933);
        result[list[i]] = values[i];
      } else {
        __cov__.branch.add(615);
        __cov__.stmt.add(934);
        result[list[i][0]] = list[i][1];
      }
    }
    __cov__.stmt.add(935);
    return result;
  }
  function range(start, stop, step) {
    __cov__.func.add(175);
    __cov__.stmt.add(936);
    if (stop == null) {
      __cov__.branch.add(616);
      __cov__.stmt.add(937);
      stop = (__cov__.branch.add(617), start) || (__cov__.branch.add(618), 0);
      __cov__.stmt.add(938);
      start = 0;
    } else {
      __cov__.branch.add(619);
    }
    __cov__.stmt.add(939);
    if (!step) {
      __cov__.branch.add(620);
      __cov__.stmt.add(940);
      step = stop < start ? (__cov__.branch.add(621), -1) : (__cov__.branch.add(622), 1);
    } else {
      __cov__.branch.add(623);
    }
    var length = (__cov__.stmt.add(941), Math.max(Math.ceil((stop - start) / step), 0));
    var range = (__cov__.stmt.add(942), Array(length));
    __cov__.stmt.add(943);
    for (var idx = (__cov__.stmt.add(944), 0); idx < length; idx++, start += step) {
      __cov__.stmt.add(945);
      range[idx] = start;
    }
    __cov__.stmt.add(946);
    return range;
  }
  function chunk(array, count) {
    __cov__.func.add(176);
    __cov__.stmt.add(947);
    if ((__cov__.branch.add(624), count == null) || (__cov__.branch.add(625), count < 1)) {
      __cov__.branch.add(626);
      __cov__.stmt.add(948);
      return [];
    } else {
      __cov__.branch.add(627);
    }
    var result = (__cov__.stmt.add(949), []);
    var i = (__cov__.stmt.add(950), 0), length = (__cov__.stmt.add(951), array.length);
    __cov__.stmt.add(952);
    while (i < length) {
      __cov__.stmt.add(953);
      result.push(slice.call(array, i, i += count));
    }
    __cov__.stmt.add(954);
    return result;
  }
  function chainResult(instance, obj) {
    __cov__.func.add(177);
    __cov__.stmt.add(955);
    return instance._chain ? (__cov__.branch.add(628), _$1(obj).chain()) : (__cov__.branch.add(629), obj);
  }
  function mixin(obj) {
    __cov__.func.add(178);
    __cov__.stmt.add(956);
    each(functions(obj), function (name) {
      __cov__.func.add(179);
      var func = (__cov__.stmt.add(957), _$1[name] = obj[name]);
      __cov__.stmt.add(958);
      _$1.prototype[name] = function () {
        __cov__.func.add(180);
        var args = (__cov__.stmt.add(959), [this._wrapped]);
        __cov__.stmt.add(960);
        push.apply(args, arguments);
        __cov__.stmt.add(961);
        return chainResult(this, func.apply(_$1, args));
      };
    });
    __cov__.stmt.add(962);
    return _$1;
  }
  __cov__.stmt.add(963);
  each([
    'pop',
    'push',
    'reverse',
    'shift',
    'sort',
    'splice',
    'unshift'
  ], function (name) {
    __cov__.func.add(181);
    var method = (__cov__.stmt.add(964), ArrayProto[name]);
    __cov__.stmt.add(965);
    _$1.prototype[name] = function () {
      __cov__.func.add(182);
      var obj = (__cov__.stmt.add(966), this._wrapped);
      __cov__.stmt.add(967);
      if (obj != null) {
        __cov__.branch.add(630);
        __cov__.stmt.add(968);
        method.apply(obj, arguments);
        __cov__.stmt.add(969);
        if (((__cov__.branch.add(631), name === 'shift') || (__cov__.branch.add(632), name === 'splice')) && (__cov__.branch.add(633), obj.length === 0)) {
          __cov__.branch.add(634);
          __cov__.stmt.add(970);
          delete obj[0];
        } else {
          __cov__.branch.add(635);
        }
      } else {
        __cov__.branch.add(636);
      }
      __cov__.stmt.add(971);
      return chainResult(this, obj);
    };
  });
  __cov__.stmt.add(972);
  each([
    'concat',
    'join',
    'slice'
  ], function (name) {
    __cov__.func.add(183);
    var method = (__cov__.stmt.add(973), ArrayProto[name]);
    __cov__.stmt.add(974);
    _$1.prototype[name] = function () {
      __cov__.func.add(184);
      var obj = (__cov__.stmt.add(975), this._wrapped);
      __cov__.stmt.add(976);
      if (obj != null) {
        __cov__.branch.add(637);
        __cov__.stmt.add(977);
        obj = method.apply(obj, arguments);
      } else {
        __cov__.branch.add(638);
      }
      __cov__.stmt.add(978);
      return chainResult(this, obj);
    };
  });
  var allExports = (__cov__.stmt.add(979), {
    __proto__: null,
    VERSION: VERSION,
    restArguments: restArguments,
    isObject: isObject,
    isNull: isNull,
    isUndefined: isUndefined,
    isBoolean: isBoolean,
    isElement: isElement,
    isString: isString,
    isNumber: isNumber,
    isDate: isDate,
    isRegExp: isRegExp,
    isError: isError,
    isSymbol: isSymbol,
    isArrayBuffer: isArrayBuffer,
    isDataView: isDataView$1,
    isArray: isArray,
    isFunction: isFunction$1,
    isArguments: isArguments$1,
    isFinite: isFinite$1,
    isNaN: isNaN$1,
    isTypedArray: isTypedArray$1,
    isEmpty: isEmpty,
    isMatch: isMatch,
    isEqual: isEqual,
    isMap: isMap,
    isWeakMap: isWeakMap,
    isSet: isSet,
    isWeakSet: isWeakSet,
    keys: keys,
    allKeys: allKeys,
    values: values,
    pairs: pairs,
    invert: invert,
    functions: functions,
    methods: functions,
    extend: extend,
    extendOwn: extendOwn,
    assign: extendOwn,
    defaults: defaults,
    create: create,
    clone: clone,
    tap: tap,
    get: get,
    has: has,
    mapObject: mapObject,
    identity: identity,
    constant: constant,
    noop: noop,
    toPath: toPath$1,
    property: property,
    propertyOf: propertyOf,
    matcher: matcher,
    matches: matcher,
    times: times,
    random: random,
    now: now,
    escape: _escape,
    unescape: _unescape,
    templateSettings: templateSettings,
    template: template,
    result: result,
    uniqueId: uniqueId,
    chain: chain,
    iteratee: iteratee,
    partial: partial,
    bind: bind,
    bindAll: bindAll,
    memoize: memoize,
    delay: delay,
    defer: defer,
    throttle: throttle,
    debounce: debounce,
    wrap: wrap,
    negate: negate,
    compose: compose,
    after: after,
    before: before,
    once: once,
    findKey: findKey,
    findIndex: findIndex,
    findLastIndex: findLastIndex,
    sortedIndex: sortedIndex,
    indexOf: indexOf,
    lastIndexOf: lastIndexOf,
    find: find,
    detect: find,
    findWhere: findWhere,
    each: each,
    forEach: each,
    map: map,
    collect: map,
    reduce: reduce,
    foldl: reduce,
    inject: reduce,
    reduceRight: reduceRight,
    foldr: reduceRight,
    filter: filter,
    select: filter,
    reject: reject,
    every: every,
    all: every,
    some: some,
    any: some,
    contains: contains,
    includes: contains,
    include: contains,
    invoke: invoke,
    pluck: pluck,
    where: where,
    max: max,
    min: min,
    shuffle: shuffle,
    sample: sample,
    sortBy: sortBy,
    groupBy: groupBy,
    indexBy: indexBy,
    countBy: countBy,
    partition: partition,
    toArray: toArray,
    size: size,
    pick: pick,
    omit: omit,
    first: first,
    head: first,
    take: first,
    initial: initial,
    last: last,
    rest: rest,
    tail: rest,
    drop: rest,
    compact: compact,
    flatten: flatten,
    without: without,
    uniq: uniq,
    unique: uniq,
    union: union,
    intersection: intersection,
    difference: difference,
    unzip: unzip,
    transpose: unzip,
    zip: zip,
    object: object,
    range: range,
    chunk: chunk,
    mixin: mixin,
    'default': _$1
  });
  var _ = (__cov__.stmt.add(980), mixin(allExports));
  __cov__.stmt.add(981);
  return _[fname].apply(_, args);
}
