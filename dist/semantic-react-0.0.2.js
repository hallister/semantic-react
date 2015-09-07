/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireWildcard = __webpack_require__(1)['default'];

	var _elements = __webpack_require__(2);

	var elements = _interopRequireWildcard(_elements);

	var _modules = __webpack_require__(64);

	var modules = _interopRequireWildcard(_modules);

	var _utilities = __webpack_require__(41);

	var utilites = _interopRequireWildcard(_utilities);

	var _views = __webpack_require__(123);

	var views = _interopRequireWildcard(_views);

	exports.elements = elements;
	exports.modules = modules;
	exports.utilites = utilites;
	exports.views = views;

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	exports["default"] = function (obj) {
	  if (obj && obj.__esModule) {
	    return obj;
	  } else {
	    var newObj = {};

	    if (obj != null) {
	      for (var key in obj) {
	        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
	      }
	    }

	    newObj["default"] = obj;
	    return newObj;
	  }
	};

	exports.__esModule = true;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _elementsButtonButton = __webpack_require__(3);

	var _elementsButtonButtons = __webpack_require__(43);

	var _elementsDividerDivider = __webpack_require__(44);

	var _elementsFlagFlag = __webpack_require__(45);

	var _elementsHeaderHeader = __webpack_require__(46);

	var _elementsHeaderSubheader = __webpack_require__(47);

	var _elementsIconIcon = __webpack_require__(48);

	var _elementsIconIcons = __webpack_require__(49);

	var _elementsImageImage = __webpack_require__(50);

	var _elementsImageImages = __webpack_require__(51);

	var _elementsInputInput = __webpack_require__(52);

	var _elementsLabelDetail = __webpack_require__(53);

	var _elementsLabelLabel = __webpack_require__(54);

	var _elementsLabelLabels = __webpack_require__(55);

	var _elementsListList = __webpack_require__(56);

	var _elementsListItem = __webpack_require__(57);

	// import { Loader } from './elements/loader/loader';

	var _elementsRailRail = __webpack_require__(58);

	var _elementsRevealReveal = __webpack_require__(59);

	var _elementsSegmentSegment = __webpack_require__(60);

	var _elementsSegmentSegments = __webpack_require__(61);

	var _elementsUtilitiesContent = __webpack_require__(62);

	var _elementsUtilitiesDescription = __webpack_require__(63);

	exports.Button = _elementsButtonButton.Button;
	exports.Buttons = _elementsButtonButtons.Buttons;
	exports.Divider = _elementsDividerDivider.Divider;
	exports.Flag = _elementsFlagFlag.Flag;
	exports.Header = _elementsHeaderHeader.Header;
	exports.SubHeader = _elementsHeaderSubheader.SubHeader;
	exports.Content = _elementsUtilitiesContent.Content;
	exports.Icon = _elementsIconIcon.Icon;
	exports.Icons = _elementsIconIcons.Icons;
	exports.Image = _elementsImageImage.Image;
	exports.Images = _elementsImageImages.Images;
	exports.Input = _elementsInputInput.Input;
	exports.Detail = _elementsLabelDetail.Detail;
	exports.Label = _elementsLabelLabel.Label;
	exports.Labels = _elementsLabelLabels.Labels;
	exports.List = _elementsListList.List;
	exports.Item = _elementsListItem.Item;
	exports.Rail = _elementsRailRail.Rail;
	exports.Reveal = _elementsRevealReveal.Reveal;
	exports.Segment = _elementsSegmentSegment.Segment;
	exports.Segments = _elementsSegmentSegments.Segments;
	exports.Description = _elementsUtilitiesDescription.Description;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _get = __webpack_require__(4)['default'];

	var _inherits = __webpack_require__(18)['default'];

	var _createClass = __webpack_require__(28)['default'];

	var _classCallCheck = __webpack_require__(31)['default'];

	var _extends = __webpack_require__(32)['default'];

	var _objectWithoutProperties = __webpack_require__(38)['default'];

	var _interopRequireDefault = __webpack_require__(39)['default'];

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _react = __webpack_require__(40);

	var _react2 = _interopRequireDefault(_react);

	var _elements = __webpack_require__(2);

	var _utilities = __webpack_require__(41);

	var _classnames = __webpack_require__(42);

	var _classnames2 = _interopRequireDefault(_classnames);

	var Button = (function (_Component) {
	    _inherits(Button, _Component);

	    function Button() {
	        _classCallCheck(this, Button);

	        _get(Object.getPrototypeOf(Button.prototype), 'constructor', this).apply(this, arguments);
	    }

	    _createClass(Button, [{
	        key: 'render',
	        value: function render() {
	            var classes = {
	                // default
	                ui: this.props.defaultClasses,

	                // positioning
	                left: false,
	                right: false,

	                // types
	                animated: this.props.animated,
	                basic: this.props.basic,
	                icon: (0, _utilities.hasChild)(this.props.children, _elements.Icon) && (!this.props.social || this.props.circular),
	                inverted: this.props.inverted,
	                labeled: (this.hasOneIconChild() || this.props.label) && !this.props.social,

	                // states
	                active: this.props.active,
	                disabled: this.props.disabled,
	                loading: this.props.loading,

	                // variations
	                attached: this.props.attached,
	                circular: this.props.circular,
	                compact: this.props.compact,
	                fluid: this.props.fluid,
	                negative: this.props.negative,
	                positive: this.props.positive,
	                primary: this.props.primary,
	                secondary: this.props.secondary,

	                // component
	                button: this.props.defaultClasses
	            };

	            // handle mixed string/bool props
	            classes[this.props.animated] = typeof this.props.animated == 'string' ? true : false;
	            classes[this.props.attached] = typeof this.props.attached == 'string' ? true : false;

	            // string types
	            classes[this.props.color] = !!this.props.color;
	            classes[this.props.floated] = !!this.props.floated;
	            classes[this.props.label] = !!this.props.label;
	            classes[this.props.size] = !!this.props.size;
	            classes[this.props.social] = !!this.props.social;

	            // if it's attached or animated use a div instead of a button
	            var Tag = this.props.attached || this.context.isAttached || this.props.animated ? _react2['default'].DOM.div : _react2['default'].DOM.button;
	            Tag = (0, _utilities.returnTag)(this.props.tag || Tag);

	            var _props = this.props;
	            var active = _props.active;
	            var animated = _props.animated;
	            var attached = _props.attached;
	            var basic = _props.basic;
	            var children = _props.children;
	            var circular = _props.circular;
	            var color = _props.color;
	            var compact = _props.compact;
	            var defaultClasses = _props.defaultClasses;
	            var disabled = _props.disabled;
	            var fluid = _props.fluid;
	            var inverted = _props.inverted;
	            var label = _props.label;
	            var loading = _props.loading;
	            var negative = _props.negative;
	            var positive = _props.positive;
	            var primary = _props.primary;
	            var secondary = _props.secondary;
	            var size = _props.size;
	            var social = _props.social;
	            var tag = _props.tag;

	            var other = _objectWithoutProperties(_props, ['active', 'animated', 'attached', 'basic', 'children', 'circular', 'color', 'compact', 'defaultClasses', 'disabled', 'fluid', 'inverted', 'label', 'loading', 'negative', 'positive', 'primary', 'secondary', 'size', 'social', 'tag']);

	            return Tag(_extends({
	                className: (0, _classnames2['default'])(this.props.className, classes)
	            }, other), this.props.children);
	        }
	    }, {
	        key: 'hasOneIconChild',
	        value: function hasOneIconChild() {
	            if ((0, _utilities.childCount)(this.props.children) > 1 && (0, _utilities.hasChild)(this.props.children, _elements.Icon)) {
	                return true;
	            } else {
	                return false;
	            }
	        }
	    }], [{
	        key: 'propTypes',
	        value: {
	            active: _react2['default'].PropTypes.bool,
	            animated: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.string, _react2['default'].PropTypes.bool]),
	            attached: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.string, _react2['default'].PropTypes.bool]),
	            basic: _react2['default'].PropTypes.bool,
	            children: _react2['default'].PropTypes.node,
	            circular: _react2['default'].PropTypes.bool,
	            className: _react2['default'].PropTypes.node,
	            color: _react2['default'].PropTypes.string,
	            compact: _react2['default'].PropTypes.bool,
	            defaultClasses: _react2['default'].PropTypes.bool,
	            disabled: _react2['default'].PropTypes.bool,
	            floated: _react2['default'].PropTypes.string,
	            fluid: _react2['default'].PropTypes.bool,
	            icon: _react2['default'].PropTypes.string,
	            inverted: _react2['default'].PropTypes.bool,
	            label: _react2['default'].PropTypes.string,
	            loading: _react2['default'].PropTypes.bool,
	            negative: _react2['default'].PropTypes.bool,
	            positive: _react2['default'].PropTypes.bool,
	            primary: _react2['default'].PropTypes.bool,
	            secondary: _react2['default'].PropTypes.bool,
	            size: _react2['default'].PropTypes.string,
	            social: _react2['default'].PropTypes.string,
	            tag: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.element, _react2['default'].PropTypes.func, _react2['default'].PropTypes.string]),
	            toggle: _react2['default'].PropTypes.bool
	        },
	        enumerable: true
	    }, {
	        key: 'contextTypes',
	        value: {
	            isAttached: _react2['default'].PropTypes.bool
	        },
	        enumerable: true
	    }, {
	        key: 'defaultProps',
	        value: {
	            animated: false,
	            attached: false,
	            defaultClasses: true
	        },
	        enumerable: true
	    }]);

	    return Button;
	})(_react.Component);

	exports.Button = Button;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _Object$getOwnPropertyDescriptor = __webpack_require__(5)["default"];

	exports["default"] = function get(_x, _x2, _x3) {
	  var _again = true;

	  _function: while (_again) {
	    var object = _x,
	        property = _x2,
	        receiver = _x3;
	    desc = parent = getter = undefined;
	    _again = false;
	    if (object === null) object = Function.prototype;

	    var desc = _Object$getOwnPropertyDescriptor(object, property);

	    if (desc === undefined) {
	      var parent = Object.getPrototypeOf(object);

	      if (parent === null) {
	        return undefined;
	      } else {
	        _x = parent;
	        _x2 = property;
	        _x3 = receiver;
	        _again = true;
	        continue _function;
	      }
	    } else if ("value" in desc) {
	      return desc.value;
	    } else {
	      var getter = desc.get;

	      if (getter === undefined) {
	        return undefined;
	      }

	      return getter.call(receiver);
	    }
	  }
	};

	exports.__esModule = true;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(6), __esModule: true };

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(7);
	__webpack_require__(8);
	module.exports = function getOwnPropertyDescriptor(it, key){
	  return $.getDesc(it, key);
	};

/***/ },
/* 7 */
/***/ function(module, exports) {

	var $Object = Object;
	module.exports = {
	  create:     $Object.create,
	  getProto:   $Object.getPrototypeOf,
	  isEnum:     {}.propertyIsEnumerable,
	  getDesc:    $Object.getOwnPropertyDescriptor,
	  setDesc:    $Object.defineProperty,
	  setDescs:   $Object.defineProperties,
	  getKeys:    $Object.keys,
	  getNames:   $Object.getOwnPropertyNames,
	  getSymbols: $Object.getOwnPropertySymbols,
	  each:       [].forEach
	};

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var $        = __webpack_require__(7)
	  , core     = __webpack_require__(9)
	  , $def     = __webpack_require__(10)
	  , toObject = __webpack_require__(12)
	  , isObject = __webpack_require__(16);
	$.each.call(('freeze,seal,preventExtensions,isFrozen,isSealed,isExtensible,' +
	  'getOwnPropertyDescriptor,getPrototypeOf,keys,getOwnPropertyNames').split(',')
	, function(KEY, ID){
	  var fn     = (core.Object || {})[KEY] || Object[KEY]
	    , forced = 0
	    , method = {};
	  method[KEY] = ID == 0 ? function freeze(it){
	    return isObject(it) ? fn(it) : it;
	  } : ID == 1 ? function seal(it){
	    return isObject(it) ? fn(it) : it;
	  } : ID == 2 ? function preventExtensions(it){
	    return isObject(it) ? fn(it) : it;
	  } : ID == 3 ? function isFrozen(it){
	    return isObject(it) ? fn(it) : true;
	  } : ID == 4 ? function isSealed(it){
	    return isObject(it) ? fn(it) : true;
	  } : ID == 5 ? function isExtensible(it){
	    return isObject(it) ? fn(it) : false;
	  } : ID == 6 ? function getOwnPropertyDescriptor(it, key){
	    return fn(toObject(it), key);
	  } : ID == 7 ? function getPrototypeOf(it){
	    return fn(toObject(it, true));
	  } : ID == 8 ? function keys(it){
	    return fn(toObject(it));
	  } : __webpack_require__(17).get;
	  try {
	    fn('z');
	  } catch(e){
	    forced = 1;
	  }
	  $def($def.S + $def.F * forced, 'Object', method);
	});

/***/ },
/* 9 */
/***/ function(module, exports) {

	var core = module.exports = {};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(11)
	  , core      = __webpack_require__(9)
	  , PROTOTYPE = 'prototype';
	function ctx(fn, that){
	  return function(){
	    return fn.apply(that, arguments);
	  };
	}
	// type bitmap
	$def.F = 1;  // forced
	$def.G = 2;  // global
	$def.S = 4;  // static
	$def.P = 8;  // proto
	$def.B = 16; // bind
	$def.W = 32; // wrap
	function $def(type, name, source){
	  var key, own, out, exp
	    , isGlobal = type & $def.G
	    , isProto  = type & $def.P
	    , target   = isGlobal ? global : type & $def.S
	        ? global[name] : (global[name] || {})[PROTOTYPE]
	    , exports  = isGlobal ? core : core[name] || (core[name] = {});
	  if(isGlobal)source = name;
	  for(key in source){
	    // contains in native
	    own = !(type & $def.F) && target && key in target;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    if(isGlobal && typeof target[key] != 'function')exp = source[key];
	    // bind timers to global for call from export context
	    else if(type & $def.B && own)exp = ctx(out, global);
	    // wrap global constructors for prevent change them in library
	    else if(type & $def.W && target[key] == out)!function(C){
	      exp = function(param){
	        return this instanceof C ? new C(param) : C(param);
	      };
	      exp[PROTOTYPE] = C[PROTOTYPE];
	    }(out);
	    else exp = isProto && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export
	    exports[key] = exp;
	    if(isProto)(exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
	  }
	}
	module.exports = $def;

/***/ },
/* 11 */
/***/ function(module, exports) {

	var global = typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	module.exports = global;
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var ES5Object = __webpack_require__(13)
	  , defined   = __webpack_require__(15);
	module.exports = function(it, realString){
	  return (realString ? Object : ES5Object)(defined(it));
	};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for not array-like ES3 strings
	var cof     = __webpack_require__(14)
	  , $Object = Object;
	module.exports = 0 in $Object('z') ? $Object : function(it){
	  return cof(it) == 'String' ? it.split('') : $Object(it);
	};

/***/ },
/* 14 */
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 16 */
/***/ function(module, exports) {

	// http://jsperf.com/core-js-isobject
	module.exports = function(it){
	  return it !== null && (typeof it == 'object' || typeof it == 'function');
	};

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toString = {}.toString
	  , toObject = __webpack_require__(12)
	  , getNames = __webpack_require__(7).getNames;

	var windowNames = typeof window == 'object' && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];

	function getWindowNames(it){
	  try {
	    return getNames(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	}

	module.exports.get = function getOwnPropertyNames(it){
	  if(windowNames && toString.call(it) == '[object Window]')return getWindowNames(it);
	  return getNames(toObject(it));
	};

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _Object$create = __webpack_require__(19)["default"];

	var _Object$setPrototypeOf = __webpack_require__(21)["default"];

	exports["default"] = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	  }

	  subClass.prototype = _Object$create(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) _Object$setPrototypeOf ? _Object$setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	};

	exports.__esModule = true;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(20), __esModule: true };

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(7);
	module.exports = function create(P, D){
	  return $.create(P, D);
	};

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(22), __esModule: true };

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(23);
	module.exports = __webpack_require__(9).Object.setPrototypeOf;

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $def = __webpack_require__(10);
	$def($def.S, 'Object', {setPrototypeOf: __webpack_require__(24).set});

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var getDesc  = __webpack_require__(7).getDesc
	  , isObject = __webpack_require__(16)
	  , anObject = __webpack_require__(25);
	function check(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	}
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} // eslint-disable-line
	    ? function(buggy, set){
	        try {
	          set = __webpack_require__(26)(Function.call, getDesc(Object.prototype, '__proto__').set, 2);
	          set({}, []);
	        } catch(e){ buggy = true; }
	        return function setPrototypeOf(O, proto){
	          check(O, proto);
	          if(buggy)O.__proto__ = proto;
	          else set(O, proto);
	          return O;
	        };
	      }()
	    : undefined),
	  check: check
	};

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(16);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	// Optional / simple context binding
	var aFunction = __webpack_require__(27);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(~length && that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  } return function(/* ...args */){
	      return fn.apply(that, arguments);
	    };
	};

/***/ },
/* 27 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _Object$defineProperty = __webpack_require__(29)["default"];

	exports["default"] = (function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;

	      _Object$defineProperty(target, descriptor.key, descriptor);
	    }
	  }

	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	})();

	exports.__esModule = true;

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(30), __esModule: true };

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(7);
	module.exports = function defineProperty(it, key, desc){
	  return $.setDesc(it, key, desc);
	};

/***/ },
/* 31 */
/***/ function(module, exports) {

	"use strict";

	exports["default"] = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

	exports.__esModule = true;

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _Object$assign = __webpack_require__(33)["default"];

	exports["default"] = _Object$assign || function (target) {
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

	exports.__esModule = true;

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(34), __esModule: true };

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(35);
	module.exports = __webpack_require__(9).Object.assign;

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $def = __webpack_require__(10);
	$def($def.S, 'Object', {assign: __webpack_require__(36)});

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	var toObject  = __webpack_require__(12)
	  , ES5Object = __webpack_require__(13)
	  , enumKeys  = __webpack_require__(37);
	// 19.1.2.1 Object.assign(target, source, ...)
	/* eslint-disable no-unused-vars */
	module.exports = Object.assign || function assign(target, source){
	/* eslint-enable no-unused-vars */
	  var T = toObject(target, true)
	    , l = arguments.length
	    , i = 1;
	  while(l > i){
	    var S      = ES5Object(arguments[i++])
	      , keys   = enumKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)T[key = keys[j++]] = S[key];
	  }
	  return T;
	};

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(7);
	module.exports = function(it){
	  var keys       = $.getKeys(it)
	    , isEnum     = $.isEnum
	    , getSymbols = $.getSymbols;
	  if(getSymbols)for(var symbols = getSymbols(it), i = 0, key; symbols.length > i; ){
	    if(isEnum.call(it, key = symbols[i++]))keys.push(key);
	  }
	  return keys;
	};

/***/ },
/* 38 */
/***/ function(module, exports) {

	"use strict";

	exports["default"] = function (obj, keys) {
	  var target = {};

	  for (var i in obj) {
	    if (keys.indexOf(i) >= 0) continue;
	    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
	    target[i] = obj[i];
	  }

	  return target;
	};

	exports.__esModule = true;

/***/ },
/* 39 */
/***/ function(module, exports) {

	"use strict";

	exports["default"] = function (obj) {
	  return obj && obj.__esModule ? obj : {
	    "default": obj
	  };
	};

	exports.__esModule = true;

/***/ },
/* 40 */
/***/ function(module, exports) {

	module.exports = react;

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	// DFS for recursive seaarching of a specific child component
	'use strict';

	var _interopRequireDefault = __webpack_require__(39)['default'];

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	exports.hasDescendant = hasDescendant;
	exports.hasChild = hasChild;
	exports.getChild = getChild;
	exports.childCount = childCount;
	exports.returnTag = returnTag;

	var _react = __webpack_require__(40);

	var _react2 = _interopRequireDefault(_react);

	exports.Numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve'];

	exports.Social = ['facebook', 'twitter', 'google plus', 'vk', 'linkedin', 'instagram', 'youtube'];

	exports.Colors = ['red', 'orange', 'yellow', 'olive', 'green', 'teal', 'blue', 'violet', 'purple', 'pink', 'brown', 'grey', 'black'];

	exports.Sizes = ['mini', 'tiny', 'small', 'medium', 'large', 'big', 'huge', 'massive'];

	function hasDescendant(children, component) {
	    var found = false;

	    _react2['default'].Children.forEach(children, function (child) {
	        if (child.type === component && child.type != undefined) {
	            found = true;
	        } else {
	            if (child.props && child.props.children) {
	                found = hasDescendant(child.props.children, component);
	            }
	        }
	    });

	    return found;
	}

	function hasChild(children, component) {
	    var found = false;

	    _react2['default'].Children.forEach(children, function (child) {
	        if (child.type === component && child.type != undefined) {
	            found = true;
	        }
	    });

	    return found;
	}

	function getChild(children, component) {
	    var equal = arguments.length <= 2 || arguments[2] === undefined ? true : arguments[2];

	    return _react2['default'].Children.map(children, (function (child) {
	        if (child.type !== component && equal) {
	            return child;
	        } else if (child.type == component && !equal) {
	            return child;
	        } else {
	            return null;
	        }
	    }).bind(this));
	}

	function childCount(children) {
	    return _react2['default'].Children.count(children);
	}

	function returnTag(tag) {
	    if (typeof tag == 'function') {
	        return tag;
	    } else if (typeof tag == 'string') {
	        return _react2['default'].DOM[tag];
	    } else if (typeof tag == 'object') {
	        var _ret = (function () {
	            var child = tag;

	            return {
	                v: function (config, children) {
	                    return _react2['default'].cloneElement(child, config, children);
	                }
	            };
	        })();

	        if (typeof _ret === 'object') return _ret.v;
	    }
	}

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2015 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/

	(function () {
		'use strict';

		function classNames () {

			var classes = '';

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if ('string' === argType || 'number' === argType) {
					classes += ' ' + arg;

				} else if (Array.isArray(arg)) {
					classes += ' ' + classNames.apply(null, arg);

				} else if ('object' === argType) {
					for (var key in arg) {
						if (arg.hasOwnProperty(key) && arg[key]) {
							classes += ' ' + key;
						}
					}
				}
			}

			return classes.substr(1);
		}

		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true){
			// AMD. Register as an anonymous module.
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}

	}());


/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _get = __webpack_require__(4)['default'];

	var _inherits = __webpack_require__(18)['default'];

	var _createClass = __webpack_require__(28)['default'];

	var _classCallCheck = __webpack_require__(31)['default'];

	var _extends = __webpack_require__(32)['default'];

	var _objectWithoutProperties = __webpack_require__(38)['default'];

	var _interopRequireDefault = __webpack_require__(39)['default'];

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _react = __webpack_require__(40);

	var _react2 = _interopRequireDefault(_react);

	var _utilities = __webpack_require__(41);

	var _classnames = __webpack_require__(42);

	var _classnames2 = _interopRequireDefault(_classnames);

	var Buttons = (function (_Component) {
	    _inherits(Buttons, _Component);

	    function Buttons() {
	        _classCallCheck(this, Buttons);

	        _get(Object.getPrototypeOf(Buttons.prototype), 'constructor', this).apply(this, arguments);
	    }

	    _createClass(Buttons, [{
	        key: 'getChildContext',
	        value: function getChildContext() {
	            return {
	                'isAttached': !!this.props.attached
	            };
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var classes = {
	                // default
	                ui: this.props.defaultClasses,

	                // types
	                basic: this.props.basic,
	                icon: this.props.icon,
	                inverted: this.props.inverted,
	                labeled: this.props.labeled,

	                // variations
	                attached: this.props.attached,
	                compact: this.props.compact,
	                negative: this.props.negative,
	                positive: this.props.positive,
	                primary: this.props.primary,
	                secondary: this.props.secondary,
	                vertical: this.props.vertical,

	                // component
	                buttons: this.props.defaultClasses
	            };

	            var childCount = _react2['default'].Children.count(this.props.children);

	            // buttons group with >0 buttons that are all of equal width
	            if (classes.attached || this.props.even) {
	                if (childCount > 0 && childCount <= 12) {
	                    classes[_utilities.Numbers[childCount]] = true;
	                }
	            }

	            classes[this.props.color] = !!this.props.color;
	            classes[this.props.size] = !!this.props.size;

	            var Tag = (0, _utilities.returnTag)(this.props.tag || _react2['default'].DOM.div);

	            var _props = this.props;
	            var attached = _props.attached;
	            var basic = _props.basic;
	            var children = _props.children;
	            var className = _props.className;
	            var color = _props.color;
	            var compact = _props.compact;
	            var defaultClasses = _props.defaultClasses;
	            var even = _props.even;
	            var icon = _props.icon;
	            var labeled = _props.labeled;
	            var negative = _props.negative;
	            var positive = _props.positive;
	            var primary = _props.primary;
	            var secondary = _props.secondary;
	            var size = _props.size;
	            var tag = _props.tag;
	            var vertical = _props.vertical;

	            var other = _objectWithoutProperties(_props, ['attached', 'basic', 'children', 'className', 'color', 'compact', 'defaultClasses', 'even', 'icon', 'labeled', 'negative', 'positive', 'primary', 'secondary', 'size', 'tag', 'vertical']);

	            return Tag(_extends({
	                className: (0, _classnames2['default'])(this.props.className, classes)
	            }, other), this.props.children);
	        }
	    }], [{
	        key: 'propTypes',
	        value: {
	            attached: _react2['default'].PropTypes.string,
	            basic: _react2['default'].PropTypes.bool,
	            children: _react2['default'].PropTypes.node,
	            className: _react2['default'].PropTypes.node,
	            color: _react2['default'].PropTypes.string,
	            compact: _react2['default'].PropTypes.bool,
	            defaultClasses: _react2['default'].PropTypes.bool,
	            even: _react2['default'].PropTypes.bool,
	            icon: _react2['default'].PropTypes.bool,
	            inverted: _react2['default'].PropTypes.bool,
	            labeled: _react2['default'].PropTypes.bool,
	            negative: _react2['default'].PropTypes.bool,
	            positive: _react2['default'].PropTypes.bool,
	            primary: _react2['default'].PropTypes.bool,
	            secondary: _react2['default'].PropTypes.bool,
	            size: _react2['default'].PropTypes.string,
	            tag: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.element, _react2['default'].PropTypes.func, _react2['default'].PropTypes.string]),
	            vertical: _react2['default'].PropTypes.bool
	        },
	        enumerable: true
	    }, {
	        key: 'childContextTypes',
	        value: {
	            isAttached: _react2['default'].PropTypes.bool
	        },
	        enumerable: true
	    }, {
	        key: 'defaultProps',
	        value: {
	            defaultClasses: true
	        },
	        enumerable: true
	    }]);

	    return Buttons;
	})(_react.Component);

	exports.Buttons = Buttons;

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _get = __webpack_require__(4)['default'];

	var _inherits = __webpack_require__(18)['default'];

	var _createClass = __webpack_require__(28)['default'];

	var _classCallCheck = __webpack_require__(31)['default'];

	var _extends = __webpack_require__(32)['default'];

	var _objectWithoutProperties = __webpack_require__(38)['default'];

	var _interopRequireDefault = __webpack_require__(39)['default'];

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _react = __webpack_require__(40);

	var _react2 = _interopRequireDefault(_react);

	var _utilities = __webpack_require__(41);

	var _classnames = __webpack_require__(42);

	var _classnames2 = _interopRequireDefault(_classnames);

	// Currently header/dividers are only headers. Maybe do both?

	var Divider = (function (_Component) {
	    _inherits(Divider, _Component);

	    function Divider() {
	        _classCallCheck(this, Divider);

	        _get(Object.getPrototypeOf(Divider.prototype), 'constructor', this).apply(this, arguments);
	    }

	    _createClass(Divider, [{
	        key: 'render',
	        value: function render() {
	            var classes = {
	                // default
	                ui: this.props.defaultClasses,

	                //types
	                header: this.props.header,
	                horizontal: this.props.horizontal,
	                vertical: this.props.vertical,

	                //variations
	                clearing: this.props.clearing,
	                fitted: this.props.fitted,
	                hidden: this.props.hidden,
	                inverted: this.props.inverted,
	                section: this.props.section,

	                // component
	                divider: this.props.defaultClasses
	            };

	            var Tag = (0, _utilities.returnTag)(this.props.tag || _react2['default'].DOM.div);

	            var _props = this.props;
	            var children = _props.children;
	            var className = _props.className;
	            var clearing = _props.clearing;
	            var defaultClasses = _props.defaultClasses;
	            var fitted = _props.fitted;
	            var header = _props.header;
	            var hidden = _props.hidden;
	            var horizontal = _props.horizontal;
	            var inverted = _props.inverted;
	            var section = _props.section;
	            var tag = _props.tag;
	            var vertical = _props.vertical;

	            var other = _objectWithoutProperties(_props, ['children', 'className', 'clearing', 'defaultClasses', 'fitted', 'header', 'hidden', 'horizontal', 'inverted', 'section', 'tag', 'vertical']);

	            return Tag(_extends({
	                className: (0, _classnames2['default'])(this.props.className, classes)
	            }, other), this.props.children);
	        }
	    }], [{
	        key: 'propTypes',
	        value: {
	            children: _react2['default'].PropTypes.node,
	            className: _react2['default'].PropTypes.node,
	            clearing: _react2['default'].PropTypes.bool,
	            defaultClasses: _react2['default'].PropTypes.bool,
	            fitted: _react2['default'].PropTypes.bool,
	            header: _react2['default'].PropTypes.bool,
	            hidden: _react2['default'].PropTypes.bool,
	            horizontal: _react2['default'].PropTypes.bool,
	            inverted: _react2['default'].PropTypes.bool,
	            section: _react2['default'].PropTypes.bool,
	            tag: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.element, _react2['default'].PropTypes.func, _react2['default'].PropTypes.string]),
	            vertical: _react2['default'].PropTypes.bool
	        },
	        enumerable: true
	    }, {
	        key: 'defaultProps',
	        value: {
	            defaultClasses: true
	        },
	        enumerable: true
	    }]);

	    return Divider;
	})(_react.Component);

	exports.Divider = Divider;

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _get = __webpack_require__(4)['default'];

	var _inherits = __webpack_require__(18)['default'];

	var _createClass = __webpack_require__(28)['default'];

	var _classCallCheck = __webpack_require__(31)['default'];

	var _extends = __webpack_require__(32)['default'];

	var _interopRequireDefault = __webpack_require__(39)['default'];

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _react = __webpack_require__(40);

	var _react2 = _interopRequireDefault(_react);

	var _elements = __webpack_require__(2);

	// needed for type comparison

	var Flag = (function (_Component) {
	    _inherits(Flag, _Component);

	    function Flag() {
	        _classCallCheck(this, Flag);

	        _get(Object.getPrototypeOf(Flag.prototype), 'constructor', this).apply(this, arguments);
	    }

	    _createClass(Flag, [{
	        key: 'render',
	        value: function render() {
	            return _react2['default'].createElement(_elements.Icon, _extends({
	                className: 'flag',
	                defaultClasses: false
	            }, this.props));
	        }
	    }]);

	    return Flag;
	})(_react.Component);

	exports.Flag = Flag;

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _get = __webpack_require__(4)['default'];

	var _inherits = __webpack_require__(18)['default'];

	var _createClass = __webpack_require__(28)['default'];

	var _classCallCheck = __webpack_require__(31)['default'];

	var _extends = __webpack_require__(32)['default'];

	var _objectWithoutProperties = __webpack_require__(38)['default'];

	var _interopRequireDefault = __webpack_require__(39)['default'];

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _react = __webpack_require__(40);

	var _react2 = _interopRequireDefault(_react);

	var _elements = __webpack_require__(2);

	var _utilities = __webpack_require__(41);

	var _classnames = __webpack_require__(42);

	var _classnames2 = _interopRequireDefault(_classnames);

	// TODO: image and horizontal list examples

	var Header = (function (_Component) {
	    _inherits(Header, _Component);

	    function Header() {
	        _classCallCheck(this, Header);

	        _get(Object.getPrototypeOf(Header.prototype), 'constructor', this).apply(this, arguments);
	    }

	    _createClass(Header, [{
	        key: 'getChildContext',
	        value: function getChildContext() {
	            return {
	                isHeaderChild: true
	            };
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var classes = {
	                // default
	                ui: this.props.defaultClasses && !this.context.isListChild && !this.context.isHeaderChild,

	                // positioning
	                right: false,
	                left: false,

	                // types
	                icon: (0, _utilities.hasChild)(this.props.children, _elements.Icon) && this.props.aligned == 'center',

	                // states
	                disabled: this.props.disabled,

	                // variations
	                aligned: this.props.aligned && this.props.aligned !== 'justified',
	                attached: this.props.attached,
	                block: this.props.block,
	                divider: this.props.divider,
	                dividing: this.props.dividing,
	                floated: this.props.floated,
	                horizontal: this.props.horizontal,
	                inverted: this.props.inverted,

	                // component
	                header: this.props.defaultClasses
	            };

	            // handle all mixed string/bool props
	            classes[this.props.attached] = typeof this.props.attached == 'string' ? true : false;

	            // string types
	            classes[this.props.aligned] = !!this.props.aligned;
	            classes[this.props.color] = !!this.props.color;
	            classes[this.props.floated] = !!this.props.floated;
	            classes[this.props.size] = !!this.props.size;

	            // if it's attached or animated use a div instead of a button, allow tag overriding
	            var Tag = this.props.onClick ? _react2['default'].DOM.a : _react2['default'].DOM.div;
	            Tag = (0, _utilities.returnTag)(this.props.tag || Tag);

	            var _props = this.props;
	            var aligned = _props.aligned;
	            var attached = _props.attached;
	            var block = _props.block;
	            var children = _props.children;
	            var className = _props.className;
	            var color = _props.color;
	            var defaultClasses = _props.defaultClasses;
	            var disabled = _props.disabled;
	            var divider = _props.divider;
	            var dividing = _props.dividing;
	            var element = _props.element;
	            var floated = _props.floated;
	            var horizontal = _props.horizontal;
	            var inverted = _props.inverted;
	            var size = _props.size;
	            var tag = _props.tag;

	            var other = _objectWithoutProperties(_props, ['aligned', 'attached', 'block', 'children', 'className', 'color', 'defaultClasses', 'disabled', 'divider', 'dividing', 'element', 'floated', 'horizontal', 'inverted', 'size', 'tag']);

	            return Tag(_extends({
	                className: (0, _classnames2['default'])(this.props.className, classes)
	            }, other), this.props.children);
	        }
	    }], [{
	        key: 'propTypes',
	        value: {
	            aligned: _react2['default'].PropTypes.string,
	            attached: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.string, _react2['default'].PropTypes.bool]),
	            block: _react2['default'].PropTypes.bool,
	            children: _react2['default'].PropTypes.node,
	            className: _react2['default'].PropTypes.node,
	            color: _react2['default'].PropTypes.string,
	            defaultClasses: _react2['default'].PropTypes.bool,
	            disabled: _react2['default'].PropTypes.bool,
	            divider: _react2['default'].PropTypes.bool,
	            dividing: _react2['default'].PropTypes.bool,
	            element: _react2['default'].PropTypes.string,
	            floated: _react2['default'].PropTypes.string,
	            horizontal: _react2['default'].PropTypes.bool,
	            inverted: _react2['default'].PropTypes.bool,
	            size: _react2['default'].PropTypes.string,
	            tag: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.element, _react2['default'].PropTypes.func, _react2['default'].PropTypes.string])
	        },

	        // we don't want the ui in these circumstances
	        enumerable: true
	    }, {
	        key: 'contextTypes',
	        value: {
	            isListChild: _react2['default'].PropTypes.bool,
	            isHeaderChild: _react2['default'].PropTypes.bool,
	            isAccordionChild: _react2['default'].PropTypes.bool
	        },

	        // any header/subheader under a header is a subheader
	        enumerable: true
	    }, {
	        key: 'childContextTypes',
	        value: {
	            isHeaderChild: _react2['default'].PropTypes.bool
	        },
	        enumerable: true
	    }, {
	        key: 'defaultProps',
	        value: {
	            attached: false,
	            defaultClasses: true
	        },
	        enumerable: true
	    }]);

	    return Header;
	})(_react.Component);

	exports.Header = Header;

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _get = __webpack_require__(4)['default'];

	var _inherits = __webpack_require__(18)['default'];

	var _createClass = __webpack_require__(28)['default'];

	var _classCallCheck = __webpack_require__(31)['default'];

	var _extends = __webpack_require__(32)['default'];

	var _interopRequireDefault = __webpack_require__(39)['default'];

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	var _react = __webpack_require__(40);

	var _react2 = _interopRequireDefault(_react);

	var _elements = __webpack_require__(2);

	var SubHeader = (function (_Component) {
		_inherits(SubHeader, _Component);

		function SubHeader() {
			_classCallCheck(this, SubHeader);

			_get(Object.getPrototypeOf(SubHeader.prototype), 'constructor', this).apply(this, arguments);
		}

		_createClass(SubHeader, [{
			key: 'render',
			value: function render() {
				return _react2['default'].createElement(_elements.Header, _extends({
					className: 'sub'
				}, this.props));
			}
		}]);

		return SubHeader;
	})(_react.Component);

	exports.SubHeader = SubHeader;

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _get = __webpack_require__(4)['default'];

	var _inherits = __webpack_require__(18)['default'];

	var _createClass = __webpack_require__(28)['default'];

	var _classCallCheck = __webpack_require__(31)['default'];

	var _interopRequireDefault = __webpack_require__(39)['default'];

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _react = __webpack_require__(40);

	var _react2 = _interopRequireDefault(_react);

	var _utilities = __webpack_require__(41);

	var _classnames = __webpack_require__(42);

	var _classnames2 = _interopRequireDefault(_classnames);

	var Icon = (function (_Component) {
	    _inherits(Icon, _Component);

	    function Icon() {
	        _classCallCheck(this, Icon);

	        _get(Object.getPrototypeOf(Icon.prototype), 'constructor', this).apply(this, arguments);
	    }

	    _createClass(Icon, [{
	        key: 'render',
	        value: function render() {
	            var classes = {
	                // default

	                // variations
	                bordered: this.props.bordered,
	                circular: this.props.circular,
	                corner: this.props.corner,
	                disabled: this.props.disabled,
	                fitted: this.props.fitted,
	                link: this.props.link || this.props.onClick,
	                inverted: this.props.inverted,
	                loading: this.props.loading,

	                // flipped variation
	                horizontally: false,
	                vertically: false,
	                flipped: this.props.flipped,

	                // rotated variation
	                clockwise: false,
	                counterclockwise: false,
	                rotated: this.props.flipped,

	                // aligned variation
	                bottom: false,
	                top: false,
	                middle: false,
	                aligned: this.props.aligned,

	                // component
	                icon: this.props.defaultClasses
	            };

	            // handle all string or mixed string/bool props

	            classes[this.props.aligned] = !!this.props.aligned;
	            classes[this.props.size] = !!this.props.size;
	            classes[this.props.color] = !!this.props.color;
	            classes[this.props.flipped] = !!this.props.flipped;
	            classes[this.props.rotated] = !!this.props.flipped;
	            classes[this.props.name] = !!this.props.name;

	            var Tag = (0, _utilities.returnTag)(this.props.tag || _react2['default'].DOM.i);

	            // do other on completing docs

	            return Tag({
	                className: (0, _classnames2['default'])(this.props.className, classes)
	            });
	        }
	    }], [{
	        key: 'defaultProps',
	        value: {
	            defaultClasses: true
	        },
	        enumerable: true
	    }, {
	        key: 'propTypes',
	        value: {
	            aligned: _react2['default'].PropTypes.string,
	            bordered: _react2['default'].PropTypes.bool,
	            circular: _react2['default'].PropTypes.bool,
	            color: _react2['default'].PropTypes.bool,
	            corner: _react2['default'].PropTypes.bool,
	            disabled: _react2['default'].PropTypes.bool,
	            fitted: _react2['default'].PropTypes.bool,
	            flipped: _react2['default'].PropTypes.string,
	            inverted: _react2['default'].PropTypes.bool,
	            link: _react2['default'].PropTypes.bool,
	            loading: _react2['default'].PropTypes.bool,
	            name: _react2['default'].PropTypes.string.isRequired,
	            rotated: _react2['default'].PropTypes.string,
	            size: _react2['default'].PropTypes.string,
	            tag: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.element, _react2['default'].PropTypes.func, _react2['default'].PropTypes.string])
	        },
	        enumerable: true
	    }]);

	    return Icon;
	})(_react.Component);

	exports.Icon = Icon;

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _get = __webpack_require__(4)['default'];

	var _inherits = __webpack_require__(18)['default'];

	var _createClass = __webpack_require__(28)['default'];

	var _classCallCheck = __webpack_require__(31)['default'];

	var _interopRequireDefault = __webpack_require__(39)['default'];

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _react = __webpack_require__(40);

	var _react2 = _interopRequireDefault(_react);

	var _utilities = __webpack_require__(41);

	var _classnames = __webpack_require__(42);

	var _classnames2 = _interopRequireDefault(_classnames);

	var Icons = (function (_Component) {
	    _inherits(Icons, _Component);

	    function Icons() {
	        _classCallCheck(this, Icons);

	        _get(Object.getPrototypeOf(Icons.prototype), 'constructor', this).apply(this, arguments);
	    }

	    _createClass(Icons, [{
	        key: 'render',
	        value: function render() {
	            var classes = {
	                // default

	                // variations
	                bordered: this.props.bordered,
	                circular: this.props.circular,
	                disabled: this.props.disabled,
	                fitted: this.props.fitted,
	                link: this.props.link || this.props.onClick,
	                inverted: this.props.inverted,
	                loading: this.props.loading,

	                // flipped variation
	                horizontally: false,
	                vertically: false,
	                flipped: this.props.flipped,

	                // rotated variation
	                clockwise: false,
	                counterclockwise: false,
	                rotated: this.props.flipped,

	                // aligned variation
	                bottom: false,
	                top: false,
	                middle: false,
	                aligned: this.props.aligned,

	                // component
	                icons: this.props.defaultClasses
	            };

	            // props are undefined if not explicitly given a value
	            classes[this.props.aligned] = !!this.props.aligned;
	            classes[this.props.size] = !!this.props.size;
	            classes[this.props.color] = !!this.props.color;
	            classes[this.props.flipped] = !!this.props.flipped;
	            classes[this.props.rotated] = !!this.props.rotated;

	            var Tag = (0, _utilities.returnTag)(this.props.tag || _react2['default'].DOM.i);

	            // do other when docs are done

	            return Tag({
	                className: (0, _classnames2['default'])(this.props.className, classes)
	            }, this.props.children);
	        }
	    }], [{
	        key: 'defaultProps',
	        value: {
	            defaultClasses: true
	        },
	        enumerable: true
	    }, {
	        key: 'propTypes',
	        value: {
	            aligned: _react2['default'].PropTypes.string,
	            bordered: _react2['default'].PropTypes.bool,
	            circular: _react2['default'].PropTypes.bool,
	            color: _react2['default'].PropTypes.string,
	            disabled: _react2['default'].PropTypes.bool,
	            fitted: _react2['default'].PropTypes.bool,
	            flipped: _react2['default'].PropTypes.string,
	            inverted: _react2['default'].PropTypes.bool,
	            link: _react2['default'].PropTypes.bool,
	            loading: _react2['default'].PropTypes.bool,
	            rotated: _react2['default'].PropTypes.string,
	            size: _react2['default'].PropTypes.string,
	            tag: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.element, _react2['default'].PropTypes.func, _react2['default'].PropTypes.string])
	        },
	        enumerable: true
	    }]);

	    return Icons;
	})(_react.Component);

	exports.Icons = Icons;

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _get = __webpack_require__(4)['default'];

	var _inherits = __webpack_require__(18)['default'];

	var _createClass = __webpack_require__(28)['default'];

	var _classCallCheck = __webpack_require__(31)['default'];

	var _extends = __webpack_require__(32)['default'];

	var _objectWithoutProperties = __webpack_require__(38)['default'];

	var _interopRequireDefault = __webpack_require__(39)['default'];

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _react = __webpack_require__(40);

	var _react2 = _interopRequireDefault(_react);

	var _utilities = __webpack_require__(41);

	var _classnames = __webpack_require__(42);

	var _classnames2 = _interopRequireDefault(_classnames);

	// can't do SVG since JSX/React breaks on SVG images

	var Image = (function (_Component) {
	    _inherits(Image, _Component);

	    function Image() {
	        _classCallCheck(this, Image);

	        _get(Object.getPrototypeOf(Image.prototype), 'constructor', this).apply(this, arguments);
	    }

	    _createClass(Image, [{
	        key: 'renderTag',
	        value: function renderTag(classes, other) {

	            var Tag = (0, _utilities.returnTag)(this.props.tag || _react2['default'].DOM.div);
	            var imageDiv = _react2['default'].createElement('img', { key: 'image',
	                src: this.props.src });

	            return Tag(_extends({
	                className: (0, _classnames2['default'])(this.props.className, classes)
	            }, other), [this.props.children, imageDiv]);
	        }
	    }, {
	        key: 'renderImg',
	        value: function renderImg(classes, other) {
	            return _react2['default'].createElement('img', _extends({
	                className: (0, _classnames2['default'])(this.props.className, classes),
	                src: this.props.src
	            }, other));
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var classes = {
	                // default
	                // is there a usecase for an image to be content and still have the ui/image classes?
	                ui: this.props.defaultClasses && !this.props.content,

	                // positioning
	                right: false,
	                left: false,

	                // types
	                content: this.props.content,

	                // states
	                disabled: this.props.disabled,
	                hidden: this.props.hidden,
	                visible: this.props.visible,

	                // variations
	                aligned: this.props.aligned,
	                avatar: this.props.avatar,
	                bordered: this.props.bordered,
	                centered: this.props.centered,
	                circular: this.props.circular,
	                floated: this.props.floated,
	                fluid: this.props.fluid,
	                rounded: this.props.rounded,
	                spaced: this.props.spaced,

	                // component
	                image: this.props.defaultClasses && !this.props.content

	            };

	            classes[this.props.aligned] = !!this.props.aligned;
	            classes[this.props.floated] = !!this.props.floated;
	            classes[this.props.size] = !!this.props.size;
	            classes[this.props.spaced] = !!this.props.spaced;

	            var _props = this.props;
	            var aligned = _props.aligned;
	            var avatar = _props.avatar;
	            var bordered = _props.bordered;
	            var centered = _props.centered;
	            var children = _props.children;
	            var circular = _props.circular;
	            var className = _props.className;
	            var content = _props.content;
	            var defaultClasses = _props.defaultClasses;
	            var disabled = _props.disabled;
	            var floated = _props.floated;
	            var fluid = _props.fluid;
	            var hidden = _props.hidden;
	            var rounded = _props.rounded;
	            var size = _props.size;
	            var spaced = _props.spaced;
	            var src = _props.src;
	            var visible = _props.visible;

	            var other = _objectWithoutProperties(_props, ['aligned', 'avatar', 'bordered', 'centered', 'children', 'circular', 'className', 'content', 'defaultClasses', 'disabled', 'floated', 'fluid', 'hidden', 'rounded', 'size', 'spaced', 'src', 'visible']);

	            // if a custom tag or a child is passed, it will always render
	            // a custom tag/div
	            return (0, _utilities.childCount)(this.props.children) > 0 || this.props.tag ? this.renderTag(classes, other) : this.renderImg(classes, other);
	        }
	    }], [{
	        key: 'propTypes',
	        value: {
	            aligned: _react2['default'].PropTypes.string,
	            avatar: _react2['default'].PropTypes.bool,
	            bordered: _react2['default'].PropTypes.bool,
	            centered: _react2['default'].PropTypes.bool,
	            children: _react2['default'].PropTypes.node,
	            circular: _react2['default'].PropTypes.bool,
	            className: _react2['default'].PropTypes.node,
	            content: _react2['default'].PropTypes.bool,
	            defaultClasses: _react2['default'].PropTypes.bool,
	            disabled: _react2['default'].PropTypes.bool,
	            floated: _react2['default'].PropTypes.string,
	            fluid: _react2['default'].PropTypes.bool,
	            hidden: _react2['default'].PropTypes.bool,
	            rounded: _react2['default'].PropTypes.bool,
	            size: _react2['default'].PropTypes.string,
	            spaced: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.string, _react2['default'].PropTypes.bool]),
	            src: _react2['default'].PropTypes.string.isRequired,
	            tag: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.element, _react2['default'].PropTypes.func, _react2['default'].PropTypes.string]),
	            visibile: _react2['default'].PropTypes.bool
	        },
	        enumerable: true
	    }, {
	        key: 'defaultProps',
	        value: {
	            defaultClasses: true
	        },
	        enumerable: true
	    }]);

	    return Image;
	})(_react.Component);

	exports.Image = Image;

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _get = __webpack_require__(4)['default'];

	var _inherits = __webpack_require__(18)['default'];

	var _createClass = __webpack_require__(28)['default'];

	var _classCallCheck = __webpack_require__(31)['default'];

	var _extends = __webpack_require__(32)['default'];

	var _objectWithoutProperties = __webpack_require__(38)['default'];

	var _interopRequireDefault = __webpack_require__(39)['default'];

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _react = __webpack_require__(40);

	var _react2 = _interopRequireDefault(_react);

	var _utilities = __webpack_require__(41);

	var _classnames = __webpack_require__(42);

	var _classnames2 = _interopRequireDefault(_classnames);

	var Images = (function (_Component) {
	    _inherits(Images, _Component);

	    function Images() {
	        _classCallCheck(this, Images);

	        _get(Object.getPrototypeOf(Images.prototype), 'constructor', this).apply(this, arguments);
	    }

	    _createClass(Images, [{
	        key: 'render',
	        value: function render() {
	            var classes = {
	                // default
	                ui: this.props.defaultClasses,

	                // types

	                // states
	                hidden: this.props.hidden,
	                disabled: this.props.disabled,

	                // variations
	                avatar: this.props.avatar,
	                bordered: this.props.bordered,
	                circular: this.props.circular,
	                rounded: this.props.rounded,

	                // component
	                images: this.props.defaultClasses
	            };

	            classes[this.props.size] = !!this.props.size;

	            var Tag = (0, _utilities.returnTag)(this.props.tag || _react2['default'].DOM.div);

	            var _props = this.props;
	            var avatar = _props.avatar;
	            var bordered = _props.bordered;
	            var children = _props.children;
	            var circular = _props.circular;
	            var defaultClasses = _props.defaultClasses;
	            var disabled = _props.disabled;
	            var hidden = _props.hidden;
	            var rounded = _props.rounded;
	            var size = _props.size;
	            var tag = _props.tag;

	            var other = _objectWithoutProperties(_props, ['avatar', 'bordered', 'children', 'circular', 'defaultClasses', 'disabled', 'hidden', 'rounded', 'size', 'tag']);

	            return Tag(_extends({
	                className: (0, _classnames2['default'])(this.props.className, classes)
	            }, other), this.props.children);
	        }
	    }], [{
	        key: 'propTypes',
	        value: {
	            avatar: _react2['default'].PropTypes.bool,
	            bordered: _react2['default'].PropTypes.bool,
	            children: _react2['default'].PropTypes.node,
	            circular: _react2['default'].PropTypes.bool,
	            defaultClasses: _react2['default'].PropTypes.bool,
	            disabled: _react2['default'].PropTypes.bool,
	            hidden: _react2['default'].PropTypes.bool,
	            rounded: _react2['default'].PropTypes.bool,
	            size: _react2['default'].PropTypes.string,
	            tag: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.element, _react2['default'].PropTypes.func, _react2['default'].PropTypes.string])
	        },
	        enumerable: true
	    }, {
	        key: 'defaultProps',
	        value: {
	            defaultClasses: true
	        },
	        enumerable: true
	    }]);

	    return Images;
	})(_react.Component);

	exports.Images = Images;

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _get = __webpack_require__(4)['default'];

	var _inherits = __webpack_require__(18)['default'];

	var _createClass = __webpack_require__(28)['default'];

	var _classCallCheck = __webpack_require__(31)['default'];

	var _extends = __webpack_require__(32)['default'];

	var _objectWithoutProperties = __webpack_require__(38)['default'];

	var _interopRequireDefault = __webpack_require__(39)['default'];

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _react = __webpack_require__(40);

	var _react2 = _interopRequireDefault(_react);

	var _utilities = __webpack_require__(41);

	var _elements = __webpack_require__(2);

	var _classnames = __webpack_require__(42);

	var _classnames2 = _interopRequireDefault(_classnames);

	var Input = (function (_Component) {
	    _inherits(Input, _Component);

	    function Input() {
	        _classCallCheck(this, Input);

	        _get(Object.getPrototypeOf(Input.prototype), 'constructor', this).apply(this, arguments);
	    }

	    _createClass(Input, [{
	        key: 'renderCheckbox',
	        value: function renderCheckbox() {
	            // consume the type and create a checkbox
	            var _props = this.props;
	            var type = _props.type;

	            var other = _objectWithoutProperties(_props, ['type']);

	            return _react2['default'].createElement(_elements.Checkbox, other);
	        }
	    }, {
	        key: 'renderText',
	        value: function renderText() {
	            var classes = {
	                // default
	                ui: this.props.defaultClasses,

	                // types
	                input: this.props.defaultClasses,

	                // states
	                disabled: this.props.disabled,
	                error: this.props.error,
	                focus: this.props.focus,
	                loading: this.props.loading,

	                // variations
	                action: this.props.action,
	                fluid: this.props.fluid,
	                inverted: this.props.inverted,
	                size: this.props.size,
	                transparent: this.props.transparent
	            };

	            // see if icon and label are children
	            this.processChildren();

	            var labelClass = this.getLabelClass();
	            var iconClass = this.getIconClass();
	            var input = this.prepareInput(labelClass);

	            classes[this.props.size] = !!this.props.size;

	            var Tag = (0, _utilities.returnTag)(this.props.tag || _react2['default'].DOM.div);

	            var _props2 = this.props;
	            var children = _props2.children;
	            var className = _props2.className;
	            var defaultClasses = _props2.defaultClasses;
	            var icon = _props2.icon;
	            var labeled = _props2.labeled;
	            var loading = _props2.loading;
	            var name = _props2.name;
	            var placeholder = _props2.placeholder;
	            var tag = _props2.tag;
	            var type = _props2.type;

	            var other = _objectWithoutProperties(_props2, ['children', 'className', 'defaultClasses', 'icon', 'labeled', 'loading', 'name', 'placeholder', 'tag', 'type']);

	            return Tag(_extends({
	                className: (0, _classnames2['default'])(this.props.className, labelClass, iconClass, classes)
	            }, other), input);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            if (this.props.type == 'checkbox') {
	                return this.renderCheckbox();
	            } else {
	                return this.renderText();
	            }
	        }

	        // sets iconClass if Icon is a child
	    }, {
	        key: 'getIconClass',
	        value: function getIconClass() {
	            var classes = {
	                right: false,
	                left: false,
	                icon: false
	            };

	            // if icon exists, set the appropriate css classes
	            if (this.children.icon) {
	                classes.right = this.children.icon.props.right || false;
	                classes.left = this.children.icon.props.left || false;
	                classes.icon = true;
	            }

	            return classes;
	        }

	        // sets labelClass if label is a child
	    }, {
	        key: 'getLabelClass',
	        value: function getLabelClass() {
	            var classes = {
	                right: false,
	                left: false,
	                corner: false,
	                labeled: false
	            };

	            // if label exists, set the appropriate css classes
	            if (this.children.label) {
	                classes.right = this.children.label.props.right || false;
	                classes.corner = this.children.label.props.corner || false;
	                classes.left = this.children.label.props.left || classes.corner == 'left' || false;
	                classes.labeled = true;
	            }

	            return classes;
	        }

	        // ensures that the label is on the correct side of the input
	    }, {
	        key: 'prepareInput',
	        value: function prepareInput(labelClass) {
	            var input = [];

	            // the actual input element
	            var inputHTML = _react2['default'].createElement('input', {
	                key: 'input',
	                placeholder: this.props.placeholder,
	                type: this.props.type
	            });

	            if (labelClass.corner) {
	                input.push(inputHTML);
	                input.push(this.props.children);
	            } else {
	                input.push(this.children.icon);

	                // if label is on the write, put the input on the left
	                if (labelClass.right) {
	                    input.push(inputHTML);
	                    input.push(this.children.label);
	                } else {
	                    input.push(this.children.label);
	                    input.push(inputHTML);
	                }
	            }

	            return input;
	        }

	        // checks if Icon and Label are children of this Input
	        // we don't use hasComponent because we need to know if two exist
	        // don't need this for anything else yet, so will leave for now
	    }, {
	        key: 'processChildren',
	        value: function processChildren() {
	            var children = {
	                icon: null,
	                label: null
	            };

	            _react2['default'].Children.forEach(this.props.children, function (child) {
	                if (child.type === _elements.Icon && child.type != undefined) {
	                    children.icon = child;
	                } else if (child.type === _elements.Label && child.type != undefined) {
	                    children.label = child;
	                }
	            });

	            this.children = children;
	        }
	    }], [{
	        key: 'propTypes',
	        value: {
	            children: _react2['default'].PropTypes.node,
	            className: _react2['default'].PropTypes.node,
	            defaultClasses: _react2['default'].PropTypes.bool,
	            icon: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.string, _react2['default'].PropTypes.bool]),
	            labeled: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.string, _react2['default'].PropTypes.bool]),
	            loading: _react2['default'].PropTypes.bool,
	            name: _react2['default'].PropTypes.string,
	            placeholder: _react2['default'].PropTypes.string,
	            tag: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.element, _react2['default'].PropTypes.func, _react2['default'].PropTypes.string]),
	            type: _react2['default'].PropTypes.string.isRequired
	        },
	        enumerable: true
	    }, {
	        key: 'defaultProps',
	        value: {
	            defaultClasses: true,
	            loading: false,
	            placeholder: 'Search...'
	        },
	        enumerable: true
	    }]);

	    return Input;
	})(_react.Component);

	exports.Input = Input;

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _get = __webpack_require__(4)['default'];

	var _inherits = __webpack_require__(18)['default'];

	var _createClass = __webpack_require__(28)['default'];

	var _classCallCheck = __webpack_require__(31)['default'];

	var _extends = __webpack_require__(32)['default'];

	var _objectWithoutProperties = __webpack_require__(38)['default'];

	var _interopRequireDefault = __webpack_require__(39)['default'];

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _react = __webpack_require__(40);

	var _react2 = _interopRequireDefault(_react);

	var _utilities = __webpack_require__(41);

	var _classnames = __webpack_require__(42);

	var _classnames2 = _interopRequireDefault(_classnames);

	var Detail = (function (_Component) {
	    _inherits(Detail, _Component);

	    function Detail() {
	        _classCallCheck(this, Detail);

	        _get(Object.getPrototypeOf(Detail.prototype), 'constructor', this).apply(this, arguments);
	    }

	    _createClass(Detail, [{
	        key: 'render',
	        value: function render() {
	            var classes = {
	                // default
	                detail: this.props.defaultClasses
	            };

	            var Tag = this.props.onClick || this.props.link ? _react2['default'].DOM.a : _react2['default'].DOM.div;
	            Tag = (0, _utilities.returnTag)(this.props.tag || Tag);

	            var _props = this.props;
	            var defaultClasses = _props.defaultClasses;

	            var other = _objectWithoutProperties(_props, ['defaultClasses']);

	            return Tag(_extends({
	                className: (0, _classnames2['default'])(this.props.className, classes),
	                onClick: this.props.onClick
	            }, other), this.props.children);
	        }
	    }], [{
	        key: 'defaultProps',
	        value: {
	            defaultClasses: true
	        },
	        enumerable: true
	    }, {
	        key: 'propTypes',
	        value: {
	            defaultClasses: _react2['default'].PropTypes.bool
	        },
	        enumerable: true
	    }]);

	    return Detail;
	})(_react.Component);

	exports.Detail = Detail;

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _get = __webpack_require__(4)['default'];

	var _inherits = __webpack_require__(18)['default'];

	var _createClass = __webpack_require__(28)['default'];

	var _classCallCheck = __webpack_require__(31)['default'];

	var _extends = __webpack_require__(32)['default'];

	var _objectWithoutProperties = __webpack_require__(38)['default'];

	var _interopRequireDefault = __webpack_require__(39)['default'];

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _react = __webpack_require__(40);

	var _react2 = _interopRequireDefault(_react);

	var _utilities = __webpack_require__(41);

	var _classnames = __webpack_require__(42);

	var _classnames2 = _interopRequireDefault(_classnames);

	var Label = (function (_Component) {
	    _inherits(Label, _Component);

	    function Label() {
	        _classCallCheck(this, Label);

	        _get(Object.getPrototypeOf(Label.prototype), 'constructor', this).apply(this, arguments);
	    }

	    _createClass(Label, [{
	        key: 'render',
	        value: function render() {
	            var classes = {
	                // default
	                ui: this.props.defaultClasses,

	                // positioning
	                left: false,
	                right: false,

	                // types
	                attached: this.props.attached,
	                corner: this.props.corner,
	                image: this.props.image,
	                pointing: this.props.pointing,
	                ribbon: this.props.ribbon,
	                tag: this.props.arrow,

	                // variations
	                circular: this.props.circular,

	                // component
	                label: this.props.defaultClasses
	            };

	            // handle mixed string/bool props
	            classes[this.props.corner] = typeof this.props.corner == 'string' ? true : false;
	            classes[this.props.pointing] = typeof this.props.pointing == 'string' ? true : false;
	            classes[this.props.ribbon] = typeof this.props.ribbon == 'string' ? true : false;

	            classes[this.props.attached] = !!this.props.attached;
	            classes[this.props.color] = !!this.props.color;
	            classes[this.props.size] = !!this.props.size;

	            // if it's attached or animated use a div instead of a button
	            var Tag = this.props.onClick || this.props.link ? _react2['default'].DOM.a : _react2['default'].DOM.div;
	            Tag = (0, _utilities.returnTag)(this.props.tag || Tag);

	            var _props = this.props;
	            var defaultClasses = _props.defaultClasses;
	            var left = _props.left;
	            var right = _props.right;
	            var corner = _props.corner;
	            var label = _props.label;
	            var attached = _props.attached;
	            var image = _props.image;
	            var color = _props.color;
	            var pointing = _props.pointing;
	            var ribbon = _props.ribbon;
	            var tag = _props.tag;
	            var link = _props.link;
	            var circular = _props.circular;
	            var size = _props.size;

	            var other = _objectWithoutProperties(_props, ['defaultClasses', 'left', 'right', 'corner', 'label', 'attached', 'image', 'color', 'pointing', 'ribbon', 'tag', 'link', 'circular', 'size']);

	            return Tag(_extends({
	                className: (0, _classnames2['default'])(this.props.className, classes),
	                onClick: this.props.onClick
	            }, other), this.props.children);
	        }
	    }], [{
	        key: 'defaultProps',
	        value: {
	            corner: false,
	            defaultClasses: true,
	            pointing: false,
	            ribbon: false
	        },
	        enumerable: true
	    }, {
	        key: 'propTypes',
	        value: {
	            arrow: _react2['default'].PropTypes.bool,
	            attached: _react2['default'].PropTypes.string,
	            circular: _react2['default'].PropTypes.bool,
	            color: _react2['default'].PropTypes.string,
	            corner: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.string, _react2['default'].PropTypes.bool]),
	            defaultClasses: _react2['default'].PropTypes.bool,
	            image: _react2['default'].PropTypes.bool,
	            left: _react2['default'].PropTypes.bool,
	            link: _react2['default'].PropTypes.bool,
	            pointing: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.string, _react2['default'].PropTypes.bool]),
	            ribbon: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.string, _react2['default'].PropTypes.bool]),
	            right: _react2['default'].PropTypes.bool,
	            size: _react2['default'].PropTypes.string,
	            tag: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.element, _react2['default'].PropTypes.func, _react2['default'].PropTypes.string])
	        },
	        enumerable: true
	    }]);

	    return Label;
	})(_react.Component);

	exports.Label = Label;

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _get = __webpack_require__(4)['default'];

	var _inherits = __webpack_require__(18)['default'];

	var _createClass = __webpack_require__(28)['default'];

	var _classCallCheck = __webpack_require__(31)['default'];

	var _extends = __webpack_require__(32)['default'];

	var _objectWithoutProperties = __webpack_require__(38)['default'];

	var _interopRequireDefault = __webpack_require__(39)['default'];

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _react = __webpack_require__(40);

	var _react2 = _interopRequireDefault(_react);

	var _utilities = __webpack_require__(41);

	var _classnames = __webpack_require__(42);

	var _classnames2 = _interopRequireDefault(_classnames);

	var Labels = (function (_Component) {
	    _inherits(Labels, _Component);

	    function Labels() {
	        _classCallCheck(this, Labels);

	        _get(Object.getPrototypeOf(Labels.prototype), 'constructor', this).apply(this, arguments);
	    }

	    _createClass(Labels, [{
	        key: 'render',
	        value: function render() {
	            var classes = {
	                // default
	                ui: this.props.defaultClasses,

	                // types
	                labels: this.props.defaultClasses,
	                tag: this.props.arrow,

	                // variations
	                color: this.props.color,
	                circular: this.props.circular
	            };

	            classes[this.props.color] = !!this.props.color;
	            classes[this.props.size] = !!this.props.size;

	            // if it's attached or animated use a div instead of a button
	            var Tag = (0, _utilities.returnTag)(this.props.tag || _react2['default'].DOM.div);

	            var _props = this.props;
	            var arrow = _props.arrow;
	            var circular = _props.circular;
	            var color = _props.color;
	            var defaultClasses = _props.defaultClasses;
	            var size = _props.size;
	            var tag = _props.tag;

	            var other = _objectWithoutProperties(_props, ['arrow', 'circular', 'color', 'defaultClasses', 'size', 'tag']);

	            return Tag(_extends({
	                className: (0, _classnames2['default'])(this.props.className, classes),
	                onClick: this.props.onClick
	            }, other), this.props.children);
	        }
	    }], [{
	        key: 'propTypes',
	        value: {
	            arrow: _react2['default'].PropTypes.bool,
	            children: _react2['default'].PropTypes.node,
	            circular: _react2['default'].PropTypes.bool,
	            className: _react2['default'].PropTypes.node,
	            color: _react2['default'].PropTypes.string,
	            defaultClasses: _react2['default'].PropTypes.bool,
	            onClick: _react2['default'].PropTypes.func,
	            size: _react2['default'].PropTypes.string,
	            tag: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.element, _react2['default'].PropTypes.func, _react2['default'].PropTypes.string])
	        },

	        // we only set defaults for props that can be both bool and string + the defaultClasses
	        enumerable: true
	    }, {
	        key: 'defaultProps',
	        value: {
	            defaultClasses: true
	        },
	        enumerable: true
	    }]);

	    return Labels;
	})(_react.Component);

	exports.Labels = Labels;

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _get = __webpack_require__(4)['default'];

	var _inherits = __webpack_require__(18)['default'];

	var _createClass = __webpack_require__(28)['default'];

	var _classCallCheck = __webpack_require__(31)['default'];

	var _extends = __webpack_require__(32)['default'];

	var _objectWithoutProperties = __webpack_require__(38)['default'];

	var _interopRequireDefault = __webpack_require__(39)['default'];

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _react = __webpack_require__(40);

	var _react2 = _interopRequireDefault(_react);

	var _utilities = __webpack_require__(41);

	var _classnames = __webpack_require__(42);

	var _classnames2 = _interopRequireDefault(_classnames);

	var List = (function (_Component) {
	    _inherits(List, _Component);

	    function List() {
	        _classCallCheck(this, List);

	        _get(Object.getPrototypeOf(List.prototype), 'constructor', this).apply(this, arguments);
	    }

	    _createClass(List, [{
	        key: 'getChildContext',
	        value: function getChildContext() {
	            return {
	                'isListChild': true
	            };
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var classes = {
	                // default
	                ui: this.props.defaultClasses,

	                // types
	                bulleted: this.props.bulleted,
	                horizontal: this.props.horizontal,
	                link: this.props.link,
	                ordered: this.props.ordered,

	                // variations
	                animated: this.props.animated,
	                celled: this.props.celled,
	                divided: this.props.divided,
	                inverted: this.props.inverted,
	                relaxed: this.props.relaxed,
	                selection: this.props.selection,

	                // aligned variation
	                top: false,
	                middle: false,
	                bottom: false,
	                aligned: this.props.aligned,

	                // component
	                list: this.props.defaultClasses
	            };

	            classes[this.props.aligned] = !!this.props.aligned;
	            classes[this.props.size] = !!this.props.size;

	            var Tag = (0, _utilities.returnTag)(this.props.tag || _react2['default'].DOM.div);

	            var _props = this.props;
	            var aligned = _props.aligned;
	            var animated = _props.animated;
	            var celled = _props.celled;
	            var bulleted = _props.bulleted;
	            var defaultClasses = _props.defaultClasses;
	            var divided = _props.divided;
	            var horizontal = _props.horizontal;
	            var inverted = _props.inverted;
	            var link = _props.link;
	            var ordered = _props.ordered;
	            var relaxed = _props.relaxed;
	            var selection = _props.selection;
	            var size = _props.size;
	            var tag = _props.tag;

	            var other = _objectWithoutProperties(_props, ['aligned', 'animated', 'celled', 'bulleted', 'defaultClasses', 'divided', 'horizontal', 'inverted', 'link', 'ordered', 'relaxed', 'selection', 'size', 'tag']);

	            return Tag(_extends({
	                className: (0, _classnames2['default'])(this.props.className, classes)
	            }, other), this.props.children);
	        }
	    }], [{
	        key: 'propTypes',
	        value: {
	            aligned: _react2['default'].PropTypes.string,
	            animated: _react2['default'].PropTypes.bool,
	            bulleted: _react2['default'].PropTypes.bool,
	            celled: _react2['default'].PropTypes.bool,
	            children: _react2['default'].PropTypes.node,
	            className: _react2['default'].PropTypes.node,
	            defaultClasses: _react2['default'].PropTypes.bool,
	            divided: _react2['default'].PropTypes.bool,
	            horizontal: _react2['default'].PropTypes.bool,
	            inverted: _react2['default'].PropTypes.bool,
	            link: _react2['default'].PropTypes.bool,
	            ordered: _react2['default'].PropTypes.bool,
	            relaxed: _react2['default'].PropTypes.bool,
	            selection: _react2['default'].PropTypes.bool,
	            size: _react2['default'].PropTypes.string,
	            tag: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.element, _react2['default'].PropTypes.func, _react2['default'].PropTypes.string])
	        },
	        enumerable: true
	    }, {
	        key: 'childContextTypes',
	        value: {
	            isListChild: _react2['default'].PropTypes.bool
	        },
	        enumerable: true
	    }, {
	        key: 'defaultProps',
	        value: {
	            defaultClasses: true
	        },
	        enumerable: true
	    }]);

	    return List;
	})(_react.Component);

	exports.List = List;

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _get = __webpack_require__(4)['default'];

	var _inherits = __webpack_require__(18)['default'];

	var _createClass = __webpack_require__(28)['default'];

	var _classCallCheck = __webpack_require__(31)['default'];

	var _extends = __webpack_require__(32)['default'];

	var _objectWithoutProperties = __webpack_require__(38)['default'];

	var _interopRequireDefault = __webpack_require__(39)['default'];

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _react = __webpack_require__(40);

	var _react2 = _interopRequireDefault(_react);

	var _utilities = __webpack_require__(41);

	var _classnames = __webpack_require__(42);

	var _classnames2 = _interopRequireDefault(_classnames);

	var Item = (function (_Component) {
	    _inherits(Item, _Component);

	    function Item() {
	        _classCallCheck(this, Item);

	        _get(Object.getPrototypeOf(Item.prototype), 'constructor', this).apply(this, arguments);
	    }

	    _createClass(Item, [{
	        key: 'render',
	        value: function render() {
	            var classes = {
	                // default
	                ui: this.props.defaultClasses,

	                // positioning

	                // types
	                active: this.props.active,

	                // content

	                // variations

	                // component
	                item: this.props.defaultClasses

	            };

	            // if it's attached or animated use a div instead of a button
	            var Tag = this.props.link || this.props.onClick ? _react2['default'].DOM.a : _react2['default'].DOM.div;
	            Tag = (0, _utilities.returnTag)(this.props.tag || Tag);

	            var _props = this.props;
	            var defaultClasses = _props.defaultClasses;
	            var tag = _props.tag;

	            var other = _objectWithoutProperties(_props, ['defaultClasses', 'tag']);

	            return Tag(_extends({
	                className: (0, _classnames2['default'])(this.props.className, classes)
	            }, other), this.props.children);
	        }
	    }], [{
	        key: 'propTypes',
	        value: {
	            active: _react2['default'].PropTypes.bool,
	            tag: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.element, _react2['default'].PropTypes.func, _react2['default'].PropTypes.string])
	        },
	        enumerable: true
	    }, {
	        key: 'defaultProps',
	        value: {
	            defaultClasses: true
	        },
	        enumerable: true
	    }]);

	    return Item;
	})(_react.Component);

	exports.Item = Item;

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _get = __webpack_require__(4)['default'];

	var _inherits = __webpack_require__(18)['default'];

	var _createClass = __webpack_require__(28)['default'];

	var _classCallCheck = __webpack_require__(31)['default'];

	var _extends = __webpack_require__(32)['default'];

	var _objectWithoutProperties = __webpack_require__(38)['default'];

	var _interopRequireDefault = __webpack_require__(39)['default'];

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _react = __webpack_require__(40);

	var _react2 = _interopRequireDefault(_react);

	var _utilities = __webpack_require__(41);

	var _classnames = __webpack_require__(42);

	var _classnames2 = _interopRequireDefault(_classnames);

	var Rail = (function (_Component) {
	    _inherits(Rail, _Component);

	    function Rail() {
	        _classCallCheck(this, Rail);

	        _get(Object.getPrototypeOf(Rail.prototype), 'constructor', this).apply(this, arguments);
	    }

	    _createClass(Rail, [{
	        key: 'render',
	        value: function render() {
	            var classes = {
	                // default
	                ui: this.props.defaultClasses,

	                // positioning
	                left: false,
	                right: false,

	                // types
	                attached: this.props.attached,
	                close: this.props.close,
	                dividing: this.props.dividing,
	                internal: this.props.internal,

	                // component
	                rail: this.props.defaultClasses
	            };

	            classes[this.props.close] = typeof this.props.close == 'string' ? true : false;
	            classes[this.props.float] = !!this.props.float;

	            var Tag = (0, _utilities.returnTag)(this.props.tag || _react2['default'].DOM.div);

	            var _props = this.props;
	            var attached = _props.attached;
	            var children = _props.children;
	            var className = _props.className;
	            var close = _props.close;
	            var defaultClasses = _props.defaultClasses;
	            var dividing = _props.dividing;
	            var float = _props.float;
	            var internal = _props.internal;

	            var other = _objectWithoutProperties(_props, ['attached', 'children', 'className', 'close', 'defaultClasses', 'dividing', 'float', 'internal']);

	            return Tag(_extends({
	                className: (0, _classnames2['default'])(this.props.className, classes)
	            }, other), this.props.children);
	        }
	    }], [{
	        key: 'propTypes',
	        value: {
	            attached: _react2['default'].PropTypes.bool,
	            children: _react2['default'].PropTypes.node,
	            className: _react2['default'].PropTypes.node,
	            close: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.string, _react2['default'].PropTypes.bool]),
	            defaultClasses: _react2['default'].PropTypes.bool,
	            dividing: _react2['default'].PropTypes.bool,
	            float: _react2['default'].PropTypes.string.isRequired,
	            internal: _react2['default'].PropTypes.bool
	        },
	        enumerable: true
	    }, {
	        key: 'defaultProps',
	        value: {
	            close: false,
	            defaultClasses: true
	        },
	        enumerable: true
	    }]);

	    return Rail;
	})(_react.Component);

	exports.Rail = Rail;

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _get = __webpack_require__(4)['default'];

	var _inherits = __webpack_require__(18)['default'];

	var _createClass = __webpack_require__(28)['default'];

	var _classCallCheck = __webpack_require__(31)['default'];

	var _extends = __webpack_require__(32)['default'];

	var _objectWithoutProperties = __webpack_require__(38)['default'];

	var _interopRequireDefault = __webpack_require__(39)['default'];

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _react = __webpack_require__(40);

	var _react2 = _interopRequireDefault(_react);

	var _elements = __webpack_require__(2);

	var _utilities = __webpack_require__(41);

	var _classnames = __webpack_require__(42);

	var _classnames2 = _interopRequireDefault(_classnames);

	var Reveal = (function (_Component) {
	    _inherits(Reveal, _Component);

	    function Reveal() {
	        _classCallCheck(this, Reveal);

	        _get(Object.getPrototypeOf(Reveal.prototype), 'constructor', this).apply(this, arguments);
	    }

	    _createClass(Reveal, [{
	        key: 'render',
	        value: function render() {
	            var classes = {
	                // default
	                ui: this.props.defaultClasses,

	                // types
	                active: this.props.active,
	                circular: this.props.circular,
	                instant: this.props.instant,

	                // states
	                disabled: this.props.disabled,

	                // transitions
	                fade: this.props.fade,
	                move: this.props.move,
	                rotate: this.props.rotate,

	                // sub-defaults (order can matter?)
	                reveal: this.props.defaultClasses,
	                image: this.props.image || (0, _utilities.hasDescendant)(this.props.children, _elements.Image)
	            };

	            classes[this.props.image] = typeof this.props.image == 'string' ? true : false;
	            classes[this.props.move] = typeof this.props.move == 'string' ? true : false;
	            classes[this.props.rotate] = typeof this.props.rotate == 'string' ? true : false;

	            classes[this.props.size] = !!this.props.size;
	            classes[this.props.type] = !!this.props.type;

	            var Tag = (0, _utilities.returnTag)(this.props.tag || _react2['default'].DOM.div);

	            var _props = this.props;
	            var active = _props.active;
	            var circular = _props.circular;
	            var children = _props.children;
	            var className = _props.className;
	            var defaultClasses = _props.defaultClasses;
	            var disabled = _props.disabled;
	            var fade = _props.fade;
	            var instant = _props.instant;
	            var image = _props.image;
	            var move = _props.move;
	            var rotate = _props.rotate;
	            var size = _props.size;
	            var type = _props.type;

	            var other = _objectWithoutProperties(_props, ['active', 'circular', 'children', 'className', 'defaultClasses', 'disabled', 'fade', 'instant', 'image', 'move', 'rotate', 'size', 'type']);

	            return Tag(_extends({
	                className: (0, _classnames2['default'])(this.props.className, classes)
	            }, other), this.props.children);
	        }
	    }], [{
	        key: 'propTypes',
	        value: {
	            active: _react2['default'].PropTypes.bool,
	            children: _react2['default'].PropTypes.node,
	            circular: _react2['default'].PropTypes.bool,
	            className: _react2['default'].PropTypes.node,
	            defaultClasses: _react2['default'].PropTypes.bool,
	            disabled: _react2['default'].PropTypes.bool,
	            fade: _react2['default'].PropTypes.bool,
	            image: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.string, _react2['default'].PropTypes.bool]),
	            instant: _react2['default'].PropTypes.bool,
	            move: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.string, _react2['default'].PropTypes.bool]),
	            rotate: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.string, _react2['default'].PropTypes.bool]),
	            size: _react2['default'].PropTypes.string,
	            type: _react2['default'].PropTypes.string
	        },
	        enumerable: true
	    }, {
	        key: 'defaultProps',
	        value: {
	            defaultClasses: true,
	            image: false,
	            move: false,
	            rotate: false
	        },
	        enumerable: true
	    }]);

	    return Reveal;
	})(_react.Component);

	exports.Reveal = Reveal;

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _get = __webpack_require__(4)['default'];

	var _inherits = __webpack_require__(18)['default'];

	var _createClass = __webpack_require__(28)['default'];

	var _classCallCheck = __webpack_require__(31)['default'];

	var _extends = __webpack_require__(32)['default'];

	var _objectWithoutProperties = __webpack_require__(38)['default'];

	var _interopRequireDefault = __webpack_require__(39)['default'];

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _react = __webpack_require__(40);

	var _react2 = _interopRequireDefault(_react);

	var _utilities = __webpack_require__(41);

	var _classnames = __webpack_require__(42);

	var _classnames2 = _interopRequireDefault(_classnames);

	var Segment = (function (_Component) {
	    _inherits(Segment, _Component);

	    function Segment() {
	        _classCallCheck(this, Segment);

	        _get(Object.getPrototypeOf(Segment.prototype), 'constructor', this).apply(this, arguments);
	    }

	    _createClass(Segment, [{
	        key: 'render',
	        value: function render() {
	            var style = this.props.style;

	            var classes = {
	                // default
	                ui: this.props.defaultClasses,

	                // positioning
	                right: false,
	                left: false,
	                center: false,

	                // types
	                raised: this.props.raised,
	                stacked: this.props.stacked,
	                piled: this.props.piled,
	                vertical: this.props.vertical,

	                // states
	                disabled: this.props.disabled,
	                loading: this.props.loading,

	                // varigations
	                aligned: this.props.aligned,
	                attached: this.props.attached,
	                basic: this.props.basic,
	                clearing: this.props.clearing,
	                compact: this.props.compact,
	                container: this.props.container,
	                floated: this.props.floated,
	                inverted: this.props.inverted,
	                padded: this.props.padded,
	                primary: this.props.primary,
	                secondary: this.props.secondary,
	                tertiary: this.props.tertiary,

	                // component
	                segment: this.props.defaultClasses
	            };

	            classes[this.props.attached] = typeof this.props.attached == 'string' ? true : false;

	            classes[this.props.aligned] = !!this.props.aligned;
	            classes[this.props.color] = !!this.props.color;
	            classes[this.props.floated] = this.props.floated;

	            if (this.props.piled) {
	                style.zIndex = this.props.zIndex || 0;
	            }

	            var Tag = (0, _utilities.returnTag)(this.props.tag || _react2['default'].DOM.div);

	            var _props = this.props;
	            var aligned = _props.aligned;
	            var attached = _props.attached;
	            var basic = _props.basic;
	            var children = _props.children;
	            var className = _props.className;
	            var clearing = _props.clearing;
	            var color = _props.color;
	            var compact = _props.compact;
	            var defaultClasses = _props.defaultClasses;
	            var disabled = _props.disabled;
	            var floated = _props.floated;
	            var index = _props.index;
	            var inverted = _props.inverted;
	            var loading = _props.loading;
	            var padded = _props.padded;
	            var piled = _props.piled;
	            var primary = _props.primary;
	            var raised = _props.raised;
	            var secondary = _props.secondary;
	            var stacked = _props.stacked;
	            var tertiary = _props.tertiary;
	            var vertical = _props.vertical;
	            var zIndex = _props.zIndex;

	            var other = _objectWithoutProperties(_props, ['aligned', 'attached', 'basic', 'children', 'className', 'clearing', 'color', 'compact', 'defaultClasses', 'disabled', 'floated', 'index', 'inverted', 'loading', 'padded', 'piled', 'primary', 'raised', 'secondary', 'stacked', 'tertiary', 'vertical', 'zIndex']);

	            return Tag(_extends({
	                className: (0, _classnames2['default'])(this.props.className, classes),
	                style: style
	            }, other), this.props.children);
	        }
	    }], [{
	        key: 'defaultProps',
	        value: {
	            defaultClasses: true,
	            attached: false,
	            style: {}
	        },
	        enumerable: true
	    }, {
	        key: 'propTypes',
	        value: {
	            aligned: _react2['default'].PropTypes.string,
	            attached: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.string, _react2['default'].PropTypes.bool]),
	            basic: _react2['default'].PropTypes.bool,
	            children: _react2['default'].PropTypes.node,
	            className: _react2['default'].PropTypes.node,
	            clearing: _react2['default'].PropTypes.bool,
	            color: _react2['default'].PropTypes.string,
	            compact: _react2['default'].PropTypes.bool,
	            defaultClasses: _react2['default'].PropTypes.bool,
	            disabled: _react2['default'].PropTypes.bool,
	            floated: _react2['default'].PropTypes.string,
	            index: _react2['default'].PropTypes.number,
	            inverted: _react2['default'].PropTypes.bool,
	            loading: _react2['default'].PropTypes.bool,
	            padded: _react2['default'].PropTypes.bool,
	            piled: _react2['default'].PropTypes.bool,
	            primary: _react2['default'].PropTypes.bool,
	            raised: _react2['default'].PropTypes.bool,
	            secondary: _react2['default'].PropTypes.bool,
	            stacked: _react2['default'].PropTypes.bool,
	            tertiary: _react2['default'].PropTypes.bool,
	            vertical: _react2['default'].PropTypes.bool,
	            zIndex: _react2['default'].PropTypes.number
	        },
	        enumerable: true
	    }]);

	    return Segment;
	})(_react.Component);

	exports.Segment = Segment;

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _get = __webpack_require__(4)['default'];

	var _inherits = __webpack_require__(18)['default'];

	var _createClass = __webpack_require__(28)['default'];

	var _classCallCheck = __webpack_require__(31)['default'];

	var _extends = __webpack_require__(32)['default'];

	var _objectWithoutProperties = __webpack_require__(38)['default'];

	var _interopRequireDefault = __webpack_require__(39)['default'];

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _react = __webpack_require__(40);

	var _react2 = _interopRequireDefault(_react);

	var _utilities = __webpack_require__(41);

	var _classnames = __webpack_require__(42);

	var _classnames2 = _interopRequireDefault(_classnames);

	var Segments = (function (_Component) {
	    _inherits(Segments, _Component);

	    function Segments() {
	        _classCallCheck(this, Segments);

	        _get(Object.getPrototypeOf(Segments.prototype), 'constructor', this).apply(this, arguments);
	    }

	    _createClass(Segments, [{
	        key: 'render',
	        value: function render() {
	            var style = {};

	            var classes = {
	                ui: this.props.defaultClasses,
	                segments: this.props.defaultClasses,
	                horizontal: this.props.horizontal,
	                raised: this.props.raised,
	                stacked: this.props.stacked,
	                piled: this.props.piled,
	                compact: this.props.compact
	            };

	            var Tag = (0, _utilities.returnTag)(this.props.tag || _react2['default'].DOM.div);

	            var _props = this.props;
	            var children = _props.children;
	            var className = _props.className;
	            var compact = _props.compact;
	            var defaultClasses = _props.defaultClasses;
	            var horizontal = _props.horizontal;
	            var piled = _props.piled;
	            var raised = _props.raised;
	            var stacked = _props.stacked;

	            var other = _objectWithoutProperties(_props, ['children', 'className', 'compact', 'defaultClasses', 'horizontal', 'piled', 'raised', 'stacked']);

	            return Tag(_extends({
	                className: (0, _classnames2['default'])(this.props.className, classes),
	                style: style
	            }, other), this.props.children);
	        }
	    }], [{
	        key: 'propTypes',
	        value: {
	            children: _react2['default'].PropTypes.node,
	            className: _react2['default'].PropTypes.node,
	            compact: _react2['default'].PropTypes.bool,
	            defaultClasses: _react2['default'].PropTypes.bool,
	            horizontal: _react2['default'].PropTypes.bool,
	            piled: _react2['default'].PropTypes.bool,
	            raised: _react2['default'].PropTypes.bool,
	            stacked: _react2['default'].PropTypes.bool
	        },
	        enumerable: true
	    }, {
	        key: 'defaultProps',
	        value: {
	            defaultClasses: true
	        },
	        enumerable: true
	    }]);

	    return Segments;
	})(_react.Component);

	exports.Segments = Segments;

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _get = __webpack_require__(4)['default'];

	var _inherits = __webpack_require__(18)['default'];

	var _createClass = __webpack_require__(28)['default'];

	var _classCallCheck = __webpack_require__(31)['default'];

	var _interopRequireDefault = __webpack_require__(39)['default'];

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	var _react = __webpack_require__(40);

	var _react2 = _interopRequireDefault(_react);

	// can't get import working?
	var classNames = __webpack_require__(42);

	var Content = (function (_Component) {
		_inherits(Content, _Component);

		function Content() {
			_classCallCheck(this, Content);

			_get(Object.getPrototypeOf(Content.prototype), 'constructor', this).apply(this, arguments);
		}

		_createClass(Content, [{
			key: 'render',
			value: function render() {
				var classes = {
					// default
					content: this.props.defaultClasses,

					// positioning
					left: false,
					right: false,
					top: false,
					middle: false,
					bottom: false,

					// variations
					active: this.props.active,
					aligned: this.props.aligned,
					extra: this.props.extra,
					floated: this.props.floated,
					hidden: this.props.hidden,
					meta: this.props.meta,
					visible: this.props.visible
				};

				classes[this.props.floated] = typeof floated == 'string' ? true : false;
				classes[this.props.aligned] = !!this.props.aligned;

				var children = this.context.isDimmerChild ? _react2['default'].createElement(
					'div',
					{ className: 'center' },
					this.props.children
				) : this.props.children;

				return _react2['default'].createElement(
					'div',
					{ className: classNames(this.props.className, classes), style: this.props.style, active: this.props.active },
					children
				);
			}
		}], [{
			key: 'defaultProps',
			value: {
				defaultClasses: true,
				floated: false
			},
			enumerable: true
		}, {
			key: 'propTypes',
			value: {
				active: _react2['default'].PropTypes.bool,
				aligned: _react2['default'].PropTypes.string,
				extra: _react2['default'].PropTypes.bool,
				floated: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.string, _react2['default'].PropTypes.bool]),
				hidden: _react2['default'].PropTypes.bool,
				meta: _react2['default'].PropTypes.bool,
				visible: _react2['default'].PropTypes.bool
			},
			enumerable: true
		}, {
			key: 'contextTypes',
			value: {
				isDimmerChild: _react2['default'].PropTypes.bool
			},
			enumerable: true
		}]);

		return Content;
	})(_react.Component);

	exports.Content = Content;

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _get = __webpack_require__(4)['default'];

	var _inherits = __webpack_require__(18)['default'];

	var _createClass = __webpack_require__(28)['default'];

	var _classCallCheck = __webpack_require__(31)['default'];

	var _interopRequireDefault = __webpack_require__(39)['default'];

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	var _react = __webpack_require__(40);

	var _react2 = _interopRequireDefault(_react);

	// can't get import working?
	var classNames = __webpack_require__(42);

	var Description = (function (_Component) {
		_inherits(Description, _Component);

		_createClass(Description, null, [{
			key: 'defaultProps',
			value: {
				defaultClasses: true
			},
			enumerable: true
		}, {
			key: 'propTypes',
			value: {
				hidden: _react2['default'].PropTypes.bool,
				visible: _react2['default'].PropTypes.bool
			},
			enumerable: true
		}]);

		function Description(props) {
			_classCallCheck(this, Description);

			_get(Object.getPrototypeOf(Description.prototype), 'constructor', this).call(this, props);
		}

		_createClass(Description, [{
			key: 'render',
			value: function render() {
				var classes = {
					// default
					description: this.props.defaultClasses,

					// animation
					visible: this.props.visible,
					hidden: this.props.hidden
				};

				return _react2['default'].createElement(
					'div',
					{ className: classNames(this.props.className, classes) },
					this.props.children
				);
			}
		}]);

		return Description;
	})(_react.Component);

	exports.Description = Description;

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _modulesAccordionAccordion = __webpack_require__(65);

	var _modulesAccordionAccordionbody = __webpack_require__(66);

	var _modulesAccordionAccordiontitle = __webpack_require__(68);

	var _modulesAnimateAnimate = __webpack_require__(69);

	var _modulesCheckboxCheckboxes = __webpack_require__(120);

	var _modulesCheckboxCheckbox = __webpack_require__(121);

	var _modulesDimmerDimmer = __webpack_require__(122);

	exports.Accordion = _modulesAccordionAccordion.Accordion;
	exports.AccordionBody = _modulesAccordionAccordionbody.AccordionBody;
	exports.AccordionTitle = _modulesAccordionAccordiontitle.AccordionTitle;
	exports.Animate = _modulesAnimateAnimate.Animate;
	exports.Checkbox = _modulesCheckboxCheckbox.Checkbox;
	exports.Checkboxes = _modulesCheckboxCheckboxes.Checkboxes;
	exports.Dimmer = _modulesDimmerDimmer.Dimmer;

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _get = __webpack_require__(4)['default'];

	var _inherits = __webpack_require__(18)['default'];

	var _createClass = __webpack_require__(28)['default'];

	var _classCallCheck = __webpack_require__(31)['default'];

	var _interopRequireDefault = __webpack_require__(39)['default'];

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _react = __webpack_require__(40);

	var _react2 = _interopRequireDefault(_react);

	var _modules = __webpack_require__(64);

	// can't get import working?
	var classNames = __webpack_require__(42);

	var Accordion = (function (_Component) {
	    _inherits(Accordion, _Component);

	    _createClass(Accordion, null, [{
	        key: 'defaultProps',
	        value: {
	            defaultClasses: true
	        },
	        enumerable: true
	    }, {
	        key: 'propTypes',
	        value: {
	            defaultClasses: _react2['default'].PropTypes.bool
	        },
	        enumerable: true
	    }]);

	    function Accordion(props) {
	        _classCallCheck(this, Accordion);

	        _get(Object.getPrototypeOf(Accordion.prototype), 'constructor', this).call(this, props);

	        this.state = {
	            currentActive: null
	        };
	    }

	    _createClass(Accordion, [{
	        key: '_handleClick',
	        value: function _handleClick(key, e, idx) {
	            var active = undefined;

	            if (key !== this.state.currentActive) {
	                active = key;
	            }

	            this.setState({
	                currentActive: active,
	                event: e
	            });
	        }
	    }, {
	        key: 'renderChildren',
	        value: function renderChildren() {
	            var index = 0;
	            var element = null;

	            return _react2['default'].Children.map(this.props.children, (function (child) {

	                var active = this.state.currentActive === index;

	                if (child.type == _modules.AccordionTitle) {
	                    var boundClick = this._handleClick.bind(this, index);

	                    element = _react2['default'].cloneElement(child, {
	                        active: this.state.currentActive === index,
	                        onClick: boundClick
	                    });
	                } else if (child.type == _modules.AccordionBody) {
	                    element = _react2['default'].cloneElement(child, {
	                        active: this.state.currentActive === index,
	                        event: this.state.event
	                    });
	                    index++;
	                } else {
	                    return child;
	                }

	                return element;
	            }).bind(this));
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var classes = {
	                // default
	                ui: this.props.defaultClasses,

	                // positioning

	                // types
	                styled: this.props.styled,

	                // variations
	                fluid: this.props.fluid,
	                inverted: this.props.inverted,

	                // component
	                accordion: this.props.defaultClasses
	            };

	            return _react2['default'].createElement(
	                'div',
	                { className: classNames(this.props.className, classes) },
	                this.renderChildren()
	            );
	        }
	    }]);

	    return Accordion;
	})(_react.Component);

	exports.Accordion = Accordion;

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _get = __webpack_require__(4)['default'];

	var _inherits = __webpack_require__(18)['default'];

	var _createClass = __webpack_require__(28)['default'];

	var _classCallCheck = __webpack_require__(31)['default'];

	var _interopRequireDefault = __webpack_require__(39)['default'];

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _react = __webpack_require__(40);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(67);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _elements = __webpack_require__(2);

	var _modules = __webpack_require__(64);

	// import { Animate } from '../../../lib/animate';

	// can't get import working?
	var classNames = __webpack_require__(42);

	// TODO: image and horizontal list examples

	var AccordionBody = (function (_Component) {
	  _inherits(AccordionBody, _Component);

	  _createClass(AccordionBody, null, [{
	    key: 'defaultProps',
	    value: {
	      defaultClasses: true
	    },
	    enumerable: true
	  }, {
	    key: 'propTypes',
	    value: {},
	    enumerable: true
	  }]);

	  function AccordionBody(props) {
	    _classCallCheck(this, AccordionBody);

	    _get(Object.getPrototypeOf(AccordionBody.prototype), 'constructor', this).call(this, props);
	  }

	  _createClass(AccordionBody, [{
	    key: 'render',
	    value: function render() {
	      var classes = {
	        // default
	        ui: this.props.defaultClasses

	      };

	      // positioning

	      // types

	      // states

	      // variations

	      // component
	      var childClasses = {
	        transition: true
	      };

	      // handle all string or mixed string/bool props
	      return _react2['default'].createElement(
	        _elements.Content,
	        { className: classNames(this.props.className, classes), ref: 'el', active: this.props.active },
	        this.props.children
	      );
	    }
	  }]);

	  return AccordionBody;
	})(_react.Component);

	exports.AccordionBody = AccordionBody;
	;

/***/ },
/* 67 */
/***/ function(module, exports) {

	module.exports = react-dom;

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _get = __webpack_require__(4)['default'];

	var _inherits = __webpack_require__(18)['default'];

	var _createClass = __webpack_require__(28)['default'];

	var _classCallCheck = __webpack_require__(31)['default'];

	var _interopRequireDefault = __webpack_require__(39)['default'];

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _react = __webpack_require__(40);

	var _react2 = _interopRequireDefault(_react);

	var _elements = __webpack_require__(2);

	// can't get import working?
	var classNames = __webpack_require__(42);

	var AccordionTitle = (function (_Component) {
	    _inherits(AccordionTitle, _Component);

	    _createClass(AccordionTitle, null, [{
	        key: 'defaultProps',
	        value: {
	            defaultClasses: true,
	            icon: 'dropdown'
	        },
	        enumerable: true
	    }, {
	        key: 'propTypes',
	        value: {
	            defaultClasses: _react2['default'].PropTypes.bool
	        },
	        enumerable: true
	    }]);

	    function AccordionTitle(props) {
	        _classCallCheck(this, AccordionTitle);

	        _get(Object.getPrototypeOf(AccordionTitle.prototype), 'constructor', this).call(this, props);
	    }

	    _createClass(AccordionTitle, [{
	        key: 'render',
	        value: function render() {

	            var classes = {
	                // default

	                // positioning

	                // types

	                // variations
	                active: this.props.active,

	                // component
	                title: this.props.defaultClasses
	            };

	            return _react2['default'].createElement(
	                'div',
	                { className: classNames(this.props.className, classes), onClick: this.props.onClick },
	                _react2['default'].createElement(_elements.Icon, { name: this.props.icon }),
	                this.props.children
	            );
	        }
	    }]);

	    return AccordionTitle;
	})(_react.Component);

	exports.AccordionTitle = AccordionTitle;

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _get = __webpack_require__(4)['default'];

	var _inherits = __webpack_require__(18)['default'];

	var _createClass = __webpack_require__(28)['default'];

	var _classCallCheck = __webpack_require__(31)['default'];

	var _interopRequireDefault = __webpack_require__(39)['default'];

	var _react = __webpack_require__(40);

	var _react2 = _interopRequireDefault(_react);

	var _utilities = __webpack_require__(41);

	var _libAnimate = __webpack_require__(70);

	var _libAnimate2 = _interopRequireDefault(_libAnimate);

	module.exports.Animate = _libAnimate2['default'].extend((function (_Component) {
	    _inherits(Animate, _Component);

	    function Animate(props) {
	        _classCallCheck(this, Animate);

	        _get(Object.getPrototypeOf(Animate.prototype), 'constructor', this).call(this, props);

	        // make sure the object isn't displayed when initally
	        // rendered.
	        this.style = {
	            opacity: 0,
	            visibility: 'hidden',
	            display: 'none'
	        };

	        this.state = {
	            animationName: 'fadeIn',
	            isAnimating: false,
	            propState: null
	        };
	    }

	    _createClass(Animate, [{
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(props) {
	            if (props.propState !== this.props.propState) {

	                this.style = undefined;

	                if (props.propState == true) {
	                    this[props.onTrue]();
	                    this.setState({
	                        animationName: props.onTrue
	                    });
	                } else {
	                    this[props.onFalse]();
	                    this.setState({
	                        animationName: props.onFalse
	                    });
	                }
	            }
	        }
	    }, {
	        key: 'fadeIn',
	        value: function fadeIn() {
	            _libAnimate2['default'].animate.call(this, 'fadeIn', { opacity: 0 }, { opacity: 1 }, 250, { easing: 'linear' });
	        }
	    }, {
	        key: 'fadeOut',
	        value: function fadeOut() {
	            _libAnimate2['default'].animate.call(this, 'fadeOut', { opacity: 1 }, { opacity: 0 }, 250, { easing: 'linear' });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2['default'].createElement(
	                'div',
	                { className: this.props.className,
	                    style: this.style || _libAnimate2['default'].getAnimatedStyle.call(this, this.state.animationName) },
	                this.props.children
	            );
	        }
	    }]);

	    return Animate;
	})(_react.Component));

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	var _get = __webpack_require__(4)['default'];

	var _inherits = __webpack_require__(18)['default'];

	var _createClass = __webpack_require__(28)['default'];

	var _classCallCheck = __webpack_require__(31)['default'];

	var _defineProperty = __webpack_require__(72)['default'];

	var _slicedToArray = __webpack_require__(73)['default'];

	var _toConsumableArray = __webpack_require__(103)['default'];

	var _Symbol = __webpack_require__(111)['default'];

	var _Object$assign = __webpack_require__(33)['default'];

	var _interopRequireDefault = __webpack_require__(39)['default'];

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _raf = __webpack_require__(115);

	var _raf2 = _interopRequireDefault(_raf);

	var _tweenInterpolate = __webpack_require__(117);

	var _tweenInterpolate2 = _interopRequireDefault(_tweenInterpolate);

	var _lodash = __webpack_require__(118);

	var _lodash2 = _interopRequireDefault(_lodash);

	// https://github.com/elierotenberg/react-animate
	// we use a custom lodash build only including .each and .mapValues
	// until this is rewritten. turns a 50kb lib into 10kb

	var __DEV__ = process.env.NODE_ENV === 'development';
	var __BROWSER__ = typeof window === 'object';

	function isMobile(userAgent) {
	  return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)
	  );
	}

	function isGingerbread(userAgent) {
	  return (/Android 2\.3\.[3-7]/i.test(userAgent)
	  );
	}

	// Hardware acceleration trick constants
	var transformProperties = ['WebkitTransform', 'MozTransform', 'MSTransform', 'OTransform', 'Transform'];
	var transformHA = 'translateZ(0)';

	// Decide whether we should do the hardware accelaration trick
	// if we are not explicitly prevented from.
	// The trick will be enabled in mobile browsers which are not
	// Android Gingerbread.
	function shouldEnableHA() {
	  if (!__BROWSER__) {
	    return false;
	  }
	  var userAgent = navigator.userAgent;

	  if (!userAgent) {
	    return false;
	  }
	  // is mobile but not gingerbread
	  return isMobile(userAgent) && !isGingerbread(userAgent);
	}

	function enableHA(styles) {
	  // for each 'transform' property, set/prepend 'translateZ(0)'

	  _lodash2['default'].each(transformProperties, function (property) {
	    if (styles[property] === void 0) {
	      styles[property] = [transformHA, transformHA];
	    } else {
	      var _styles$property = _slicedToArray(styles[property], 2);

	      var from = _styles$property[0];
	      var to = _styles$property[1];

	      styles[property] = [transformHA + ' ' + from, transformHA + ' ' + to];
	    }
	  });
	}

	var Animate = {
	  '@animations': _Symbol('animations'),

	  '@abortAnimation': _Symbol('abortAnimation'),

	  '@animate': _Symbol('animate'),

	  '@getAnimatedStyle': _Symbol('getAnimatedStyle'),

	  '@isAnimated': _Symbol('isAnimated'),

	  animate: function animate() {
	    if (__DEV__) {
	      this.should.not.be.exactly(Animate);
	    }
	    return this[Animate['@animate']].apply(this, arguments);
	  },

	  abortAnimation: function abortAnimation() {
	    if (__DEV__) {
	      this.should.not.be.exactly(Animate);
	    }
	    return this[Animate['@abortAnimation']].apply(this, arguments);
	  },

	  getAnimatedStyle: function getAnimatedStyle() {
	    if (__DEV__) {
	      this.should.not.be.exactly(Animate);
	    }
	    return this[Animate['@getAnimatedStyle']].apply(this, arguments);
	  },

	  isAnimated: function isAnimated() {
	    if (__DEV__) {
	      this.should.not.be.exactly(Animate);
	    }
	    return this[Animate['@isAnimated']].apply(this, arguments);
	  },

	  DEFAULT_EASING: 'cubic-in-out',

	  extend: null
	};

	function animatedStyleStateKey(name) {
	  return 'Animate@' + name;
	}

	Animate.extend = function (Component) {
	  return (function (_Component) {
	    _inherits(_class, _Component);

	    function _class(props) {
	      _classCallCheck(this, _class);

	      _get(Object.getPrototypeOf(_class.prototype), 'constructor', this).call(this, props);

	      if (typeof this.state !== 'object') {
	        this.state = {};
	      }
	      this[Animate['@animations']] = {};
	    }

	    _createClass(_class, [{
	      key: 'componentWillUnmount',
	      value: function componentWillUnmount() {
	        var _this = this;

	        if (_get(Object.getPrototypeOf(_class.prototype), 'componentWillUnmount', this)) {
	          _get(Object.getPrototypeOf(_class.prototype), 'componentWillUnmount', this).call(this);
	        }
	        if (this[Animate['@animations']] !== null) {
	          _lodash2['default'].each(this[Animate['@animations']], function (animation, name) {
	            return Animate.abortAnimation.call(_this, name, animation);
	          });
	        }
	      }
	    }, {
	      key: Animate['@getAnimatedStyle'],
	      value: function value(name) {
	        if (__DEV__) {
	          name.should.be.a.String;
	        }
	        return this.state && this.state[animatedStyleStateKey(name)] || {};
	      }
	    }, {
	      key: Animate['@isAnimated'],
	      value: function value(name) {
	        if (__DEV__) {
	          name.should.be.a.String;
	        }
	        return this[Animate['@animations']][name] !== void 0;
	      }
	    }, {
	      key: Animate['@abortAnimation'],
	      value: function value(name) {
	        if (__DEV__) {
	          name.should.be.a.String;
	        }
	        if (this[Animate['@animations']][name] !== void 0) {
	          var _Animate$Animations$name = this[Animate['@animations']][name];
	          var easingFn = _Animate$Animations$name.easingFn;
	          var onAbort = _Animate$Animations$name.onAbort;
	          var nextTick = _Animate$Animations$name.nextTick;
	          var t = _Animate$Animations$name.t;
	          var currentStyle = _Animate$Animations$name.currentStyle;

	          _raf2['default'].cancel(nextTick);
	          onAbort(currentStyle, t, easingFn(t));
	          // unregister the animation
	          delete this[Animate['@animations']][name];
	          return true;
	        }
	        // silently fail but returns false
	        return false;
	      }
	    }, {
	      key: Animate['@animate'],
	      value: function value(name, fromStyle, toStyle, duration) {
	        var _this2 = this;

	        var opts = arguments.length <= 4 || arguments[4] === undefined ? {} : arguments[4];
	        var _opts$easing = opts.easing;
	        var easing = _opts$easing === undefined ? Animate.DEFAULT_EASING : _opts$easing;
	        var _opts$onTick = opts.onTick;
	        var onTick = _opts$onTick === undefined ? function () {
	          return void 0;
	        } : _opts$onTick;
	        var _opts$onAbort = opts.onAbort;
	        var onAbort = _opts$onAbort === undefined ? function () {
	          return void 0;
	        } : _opts$onAbort;
	        var _opts$onComplete = opts.onComplete;
	        var onComplete = _opts$onComplete === undefined ? function () {
	          return void 0;
	        } : _opts$onComplete;
	        var _opts$disableMobileHA = opts.disableMobileHA;
	        var disableMobileHA = _opts$disableMobileHA === undefined ? false : _opts$disableMobileHA;

	        if (__DEV__) {
	          name.should.be.a.String;
	          fromStyle.should.be.an.Object;
	          toStyle.should.be.an.Object;
	          duration.should.be.a.Number.which.is.above(0);
	          onTick.should.be.a.Function;
	          onAbort.should.be.a.Function;
	          onComplete.should.be.a.Function;
	        }
	        // if there is already an animation with this name, abort it
	        if (this[Animate['@animations']][name] !== void 0) {
	          Animate.abortAnimation.call(this, name);
	        }
	        // create the actual easing function using tween-interpolate (d3 smash)
	        var easingFn = typeof easing === 'object' ? _tweenInterpolate2['default'].ease.apply(_tweenInterpolate2['default'], [easing.type].concat(_toConsumableArray(easing.arguments))) : _tweenInterpolate2['default'].ease(easing);
	        // reformat the input: [property]: [from, to]
	        var styles = {};
	        // unless told otherwise below, the value is assumed constant

	        _lodash2['default'].each(fromStyle, function (value, property) {
	          return styles[property] = [value, value];
	        });

	        // if we dont have an initial value for each property, assume it is constant from the beginning
	        _lodash2['default'].each(toStyle, function (value, property) {
	          return styles[property] = styles[property] === void 0 ? [value, value] : [styles[property][0], value];
	        });
	        // get an interpolator for each property
	        var interpolators = _lodash2['default'].mapValues(styles, function (_ref) {
	          var _ref2 = _slicedToArray(_ref, 2);

	          var from = _ref2[0];
	          var to = _ref2[1];
	          return _tweenInterpolate2['default'].interpolate(from, to);
	        });
	        // pre-compute the final style (ignore [from])
	        var finalStyle = _lodash2['default'].mapValues(styles, function (_ref3) {
	          var _ref32 = _slicedToArray(_ref3, 2);

	          var to = _ref32[1];
	          return to;
	        });

	        // do the hardware acceleration trick
	        if (!disableMobileHA && shouldEnableHA()) {
	          enableHA(transformProperties, styles);
	        }

	        var start = Date.now();
	        var stateKey = animatedStyleStateKey(name);

	        // the main ticker function
	        var tick = function tick() {
	          var now = Date.now();
	          // progress: starts at 0, ends at > 1
	          var t = (now - start) / duration;
	          // we are past the end
	          if (t > 1) {
	            _this2.setState(_defineProperty({}, stateKey, finalStyle));
	            onTick(finalStyle, 1, easingFn(1));
	            onComplete(finalStyle, t, easingFn(t));
	            // unregister the animation
	            delete _this2[Animate['@animations']][name];
	            return;
	            // the animation is not over yet
	          }
	          var currentStyle = _lodash2['default'].mapValues(interpolators, function (fn) {
	            return fn(easingFn(t));
	          });
	          _this2.setState(_defineProperty({}, stateKey, currentStyle));
	          onTick(currentStyle, t, easingFn(t));
	          _Object$assign(_this2[Animate['@animations']][name], { nextTick: (0, _raf2['default'])(tick), t: t, currentStyle: currentStyle });
	        };

	        // register the animation
	        this[Animate['@animations']][name] = {
	          easingFn: easingFn,
	          onAbort: onAbort,
	          nextTick: (0, _raf2['default'])(tick),
	          t: 0,
	          currentStyle: fromStyle
	        };
	        return this;
	      }
	    }]);

	    return _class;
	  })(Component);
	};

	exports['default'] = Animate;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(71)))

/***/ },
/* 71 */
/***/ function(module, exports) {

	// shim for using process in browser

	var process = module.exports = {};
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = setTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            currentQueue[queueIndex].run();
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    clearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        setTimeout(drainQueue, 0);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	// TODO(shtylman)
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _Object$defineProperty = __webpack_require__(29)["default"];

	exports["default"] = function (obj, key, value) {
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
	};

	exports.__esModule = true;

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _getIterator = __webpack_require__(74)["default"];

	var _isIterable = __webpack_require__(100)["default"];

	exports["default"] = (function () {
	  function sliceIterator(arr, i) {
	    var _arr = [];
	    var _n = true;
	    var _d = false;
	    var _e = undefined;

	    try {
	      for (var _i = _getIterator(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
	        _arr.push(_s.value);

	        if (i && _arr.length === i) break;
	      }
	    } catch (err) {
	      _d = true;
	      _e = err;
	    } finally {
	      try {
	        if (!_n && _i["return"]) _i["return"]();
	      } finally {
	        if (_d) throw _e;
	      }
	    }

	    return _arr;
	  }

	  return function (arr, i) {
	    if (Array.isArray(arr)) {
	      return arr;
	    } else if (_isIterable(Object(arr))) {
	      return sliceIterator(arr, i);
	    } else {
	      throw new TypeError("Invalid attempt to destructure non-iterable instance");
	    }
	  };
	})();

	exports.__esModule = true;

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(75), __esModule: true };

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(76);
	__webpack_require__(94);
	module.exports = __webpack_require__(97);

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(77);
	var Iterators = __webpack_require__(80);
	Iterators.NodeList = Iterators.HTMLCollection = Iterators.Array;

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	var setUnscope = __webpack_require__(78)
	  , step       = __webpack_require__(79)
	  , Iterators  = __webpack_require__(80)
	  , toObject   = __webpack_require__(12);

	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	__webpack_require__(81)(Array, 'Array', function(iterated, kind){
	  this._t = toObject(iterated); // target
	  this._i = 0;                  // next index
	  this._k = kind;               // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');

	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;

	setUnscope('keys');
	setUnscope('values');
	setUnscope('entries');

/***/ },
/* 78 */
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },
/* 79 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 80 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY         = __webpack_require__(82)
	  , $def            = __webpack_require__(10)
	  , $redef          = __webpack_require__(83)
	  , hide            = __webpack_require__(84)
	  , has             = __webpack_require__(87)
	  , SYMBOL_ITERATOR = __webpack_require__(88)('iterator')
	  , Iterators       = __webpack_require__(80)
	  , FF_ITERATOR     = '@@iterator'
	  , KEYS            = 'keys'
	  , VALUES          = 'values';
	function returnThis(){ return this; }
	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCE){
	  __webpack_require__(91)(Constructor, NAME, next);
	  function createMethod(kind){
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  }
	  var TAG      = NAME + ' Iterator'
	    , proto    = Base.prototype
	    , _native  = proto[SYMBOL_ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , _default = _native || createMethod(DEFAULT)
	    , methods, key;
	  // Fix native
	  if(_native){
	    var IteratorPrototype = __webpack_require__(7).getProto(_default.call(new Base));
	    // Set @@toStringTag to native iterators
	    __webpack_require__(92)(IteratorPrototype, TAG, true);
	    // FF fix
	    if(!LIBRARY && has(proto, FF_ITERATOR))hide(IteratorPrototype, SYMBOL_ITERATOR, returnThis);
	  }
	  // Define iterator
	  if(!LIBRARY || FORCE)hide(proto, SYMBOL_ITERATOR, _default);
	  // Plug for library
	  Iterators[NAME] = _default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      keys:    IS_SET            ? _default : createMethod(KEYS),
	      values:  DEFAULT == VALUES ? _default : createMethod(VALUES),
	      entries: DEFAULT != VALUES ? _default : createMethod('entries')
	    };
	    if(FORCE)for(key in methods){
	      if(!(key in proto))$redef(proto, key, methods[key]);
	    } else $def($def.P + $def.F * __webpack_require__(93), NAME, methods);
	  }
	};

/***/ },
/* 82 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(84);

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	var $          = __webpack_require__(7)
	  , createDesc = __webpack_require__(85);
	module.exports = __webpack_require__(86) ? function(object, key, value){
	  return $.setDesc(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 85 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 86 */
/***/ function(module, exports) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !!function(){
	  try {
	    return Object.defineProperty({}, 'a', {get: function(){ return 2; }}).a == 2;
	  } catch(e){ /* empty */ }
	}();

/***/ },
/* 87 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	var store  = __webpack_require__(89)('wks')
	  , Symbol = __webpack_require__(11).Symbol;
	module.exports = function(name){
	  return store[name] || (store[name] =
	    Symbol && Symbol[name] || (Symbol || __webpack_require__(90))('Symbol.' + name));
	};

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(11)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 90 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $ = __webpack_require__(7)
	  , IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(84)(IteratorPrototype, __webpack_require__(88)('iterator'), function(){ return this; });

	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = $.create(IteratorPrototype, {next: __webpack_require__(85)(1,next)});
	  __webpack_require__(92)(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	var has  = __webpack_require__(87)
	  , hide = __webpack_require__(84)
	  , TAG  = __webpack_require__(88)('toStringTag');

	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))hide(it, TAG, tag);
	};

/***/ },
/* 93 */
/***/ function(module, exports) {

	// Safari has buggy iterators w/o `next`
	module.exports = 'keys' in [] && !('next' in [].keys());

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	var $at  = __webpack_require__(95)(true);

	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(81)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	// true  -> String#at
	// false -> String#codePointAt
	var toInteger = __webpack_require__(96)
	  , defined   = __webpack_require__(15);
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l
	      || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	        ? TO_STRING ? s.charAt(i) : a
	        : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 96 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__(25)
	  , get      = __webpack_require__(98);
	module.exports = __webpack_require__(9).getIterator = function(it){
	  var iterFn = get(it);
	  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
	  return anObject(iterFn.call(it));
	};

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(11)
	  , classof   = __webpack_require__(99)
	  , ITERATOR  = __webpack_require__(88)('iterator')
	  , Iterators = __webpack_require__(80);
	module.exports = __webpack_require__(9).getIteratorMethod = function(it){
	  var Symbol = global.Symbol;
	  if(it != undefined){
	    return it[Symbol && Symbol.iterator || '@@iterator']
	      || it[ITERATOR]
	      || Iterators[classof(it)];
	  }
	};

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	var cof = __webpack_require__(14)
	  , TAG = __webpack_require__(88)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = (O = Object(it))[TAG]) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(101), __esModule: true };

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(76);
	__webpack_require__(94);
	module.exports = __webpack_require__(102);

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(11)
	  , has       = __webpack_require__(87)
	  , classof   = __webpack_require__(99)
	  , ITERATOR  = __webpack_require__(88)('iterator')
	  , Iterators = __webpack_require__(80);
	module.exports = __webpack_require__(9).isIterable = function(it){
	  var O      = Object(it)
	    , Symbol = global.Symbol;
	  return (Symbol && Symbol.iterator || '@@iterator') in O
	    || ITERATOR in O
	    || has(Iterators, classof(O));
	};

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _Array$from = __webpack_require__(104)["default"];

	exports["default"] = function (arr) {
	  if (Array.isArray(arr)) {
	    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

	    return arr2;
	  } else {
	    return _Array$from(arr);
	  }
	};

	exports.__esModule = true;

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(105), __esModule: true };

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(94);
	__webpack_require__(106);
	module.exports = __webpack_require__(9).Array.from;

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	var ctx         = __webpack_require__(26)
	  , $def        = __webpack_require__(10)
	  , toObject    = __webpack_require__(12)
	  , call        = __webpack_require__(107)
	  , isArrayIter = __webpack_require__(108)
	  , toLength    = __webpack_require__(109)
	  , getIterFn   = __webpack_require__(98);
	$def($def.S + $def.F * !__webpack_require__(110)(function(iter){ Array.from(iter); }), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
	    var O       = toObject(arrayLike, true)
	      , C       = typeof this == 'function' ? this : Array
	      , mapfn   = arguments[1]
	      , mapping = mapfn !== undefined
	      , index   = 0
	      , iterFn  = getIterFn(O)
	      , length, result, step, iterator;
	    if(mapping)mapfn = ctx(mapfn, arguments[2], 2);
	    // if object isn't iterable or it's array with default iterator - use simple case
	    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
	      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
	        result[index] = mapping ? call(iterator, mapfn, [step.value, index], true) : step.value;
	      }
	    } else {
	      for(result = new C(length = toLength(O.length)); length > index; index++){
	        result[index] = mapping ? mapfn(O[index], index) : O[index];
	      }
	    }
	    result.length = index;
	    return result;
	  }
	});

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__(25);
	function close(iterator){
	  var ret = iterator['return'];
	  if(ret !== undefined)anObject(ret.call(iterator));
	}
	module.exports = function(iterator, fn, value, entries){
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  } catch(e){
	    close(iterator);
	    throw e;
	  }
	};

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	var Iterators = __webpack_require__(80)
	  , ITERATOR  = __webpack_require__(88)('iterator');
	module.exports = function(it){
	  return ('Array' in Iterators ? Iterators.Array : Array.prototype[ITERATOR]) === it;
	};

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(96)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	var SYMBOL_ITERATOR = __webpack_require__(88)('iterator')
	  , SAFE_CLOSING    = false;
	try {
	  var riter = [7][SYMBOL_ITERATOR]();
	  riter['return'] = function(){ SAFE_CLOSING = true; };
	  Array.from(riter, function(){ throw 2; });
	} catch(e){ /* empty */ }
	module.exports = function(exec){
	  if(!SAFE_CLOSING)return false;
	  var safe = false;
	  try {
	    var arr  = [7]
	      , iter = arr[SYMBOL_ITERATOR]();
	    iter.next = function(){ safe = true; };
	    arr[SYMBOL_ITERATOR] = function(){ return iter; };
	    exec(arr);
	  } catch(e){ /* empty */ }
	  return safe;
	};

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(112), __esModule: true };

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(113);
	module.exports = __webpack_require__(9).Symbol;

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var $              = __webpack_require__(7)
	  , global         = __webpack_require__(11)
	  , has            = __webpack_require__(87)
	  , SUPPORT_DESC   = __webpack_require__(86)
	  , $def           = __webpack_require__(10)
	  , $redef         = __webpack_require__(83)
	  , shared         = __webpack_require__(89)
	  , setTag         = __webpack_require__(92)
	  , uid            = __webpack_require__(90)
	  , wks            = __webpack_require__(88)
	  , keyOf          = __webpack_require__(114)
	  , $names         = __webpack_require__(17)
	  , enumKeys       = __webpack_require__(37)
	  , anObject       = __webpack_require__(25)
	  , toObject       = __webpack_require__(12)
	  , createDesc     = __webpack_require__(85)
	  , getDesc        = $.getDesc
	  , setDesc        = $.setDesc
	  , $create        = $.create
	  , getNames       = $names.get
	  , $Symbol        = global.Symbol
	  , setter         = false
	  , HIDDEN         = wks('_hidden')
	  , isEnum         = $.isEnum
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , useNative      = typeof $Symbol == 'function'
	  , ObjectProto    = Object.prototype;

	var setSymbolDesc = SUPPORT_DESC ? function(){ // fallback for old Android
	  try {
	    return $create(setDesc({}, HIDDEN, {
	      get: function(){
	        return setDesc(this, HIDDEN, {value: false})[HIDDEN];
	      }
	    }))[HIDDEN] || setDesc;
	  } catch(e){
	    return function(it, key, D){
	      var protoDesc = getDesc(ObjectProto, key);
	      if(protoDesc)delete ObjectProto[key];
	      setDesc(it, key, D);
	      if(protoDesc && it !== ObjectProto)setDesc(ObjectProto, key, protoDesc);
	    };
	  }
	}() : setDesc;

	function wrap(tag){
	  var sym = AllSymbols[tag] = $create($Symbol.prototype);
	  sym._k = tag;
	  SUPPORT_DESC && setter && setSymbolDesc(ObjectProto, tag, {
	    configurable: true,
	    set: function(value){
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    }
	  });
	  return sym;
	}

	function defineProperty(it, key, D){
	  if(D && has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))setDesc(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = $create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return setDesc(it, key, D);
	}
	function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)defineProperty(it, key = keys[i++], P[key]);
	  return it;
	}
	function create(it, P){
	  return P === undefined ? $create(it) : defineProperties($create(it), P);
	}
	function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key);
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key]
	    ? E : true;
	}
	function getOwnPropertyDescriptor(it, key){
	  var D = getDesc(it = toObject(it), key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	}
	function getOwnPropertyNames(it){
	  var names  = getNames(toObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i)if(!has(AllSymbols, key = names[i++]) && key != HIDDEN)result.push(key);
	  return result;
	}
	function getOwnPropertySymbols(it){
	  var names  = getNames(toObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i)if(has(AllSymbols, key = names[i++]))result.push(AllSymbols[key]);
	  return result;
	}

	// 19.4.1.1 Symbol([description])
	if(!useNative){
	  $Symbol = function Symbol(){
	    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor');
	    return wrap(uid(arguments[0]));
	  };
	  $redef($Symbol.prototype, 'toString', function(){
	    return this._k;
	  });

	  $.create     = create;
	  $.isEnum     = propertyIsEnumerable;
	  $.getDesc    = getOwnPropertyDescriptor;
	  $.setDesc    = defineProperty;
	  $.setDescs   = defineProperties;
	  $.getNames   = $names.get = getOwnPropertyNames;
	  $.getSymbols = getOwnPropertySymbols;

	  if(SUPPORT_DESC && !__webpack_require__(82)){
	    $redef(ObjectProto, 'propertyIsEnumerable', propertyIsEnumerable, true);
	  }
	}

	var symbolStatics = {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    return keyOf(SymbolRegistry, key);
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	};
	// 19.4.2.2 Symbol.hasInstance
	// 19.4.2.3 Symbol.isConcatSpreadable
	// 19.4.2.4 Symbol.iterator
	// 19.4.2.6 Symbol.match
	// 19.4.2.8 Symbol.replace
	// 19.4.2.9 Symbol.search
	// 19.4.2.10 Symbol.species
	// 19.4.2.11 Symbol.split
	// 19.4.2.12 Symbol.toPrimitive
	// 19.4.2.13 Symbol.toStringTag
	// 19.4.2.14 Symbol.unscopables
	$.each.call((
	    'hasInstance,isConcatSpreadable,iterator,match,replace,search,' +
	    'species,split,toPrimitive,toStringTag,unscopables'
	  ).split(','), function(it){
	    var sym = wks(it);
	    symbolStatics[it] = useNative ? sym : wrap(sym);
	  }
	);

	setter = true;

	$def($def.G + $def.W, {Symbol: $Symbol});

	$def($def.S, 'Symbol', symbolStatics);

	$def($def.S + $def.F * !useNative, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: getOwnPropertySymbols
	});

	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setTag(global.JSON, 'JSON', true);

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	var $        = __webpack_require__(7)
	  , toObject = __webpack_require__(12);
	module.exports = function(object, el){
	  var O      = toObject(object)
	    , keys   = $.getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	var now = __webpack_require__(116)
	  , global = typeof window === 'undefined' ? {} : window
	  , vendors = ['moz', 'webkit']
	  , suffix = 'AnimationFrame'
	  , raf = global['request' + suffix]
	  , caf = global['cancel' + suffix] || global['cancelRequest' + suffix]

	for(var i = 0; i < vendors.length && !raf; i++) {
	  raf = global[vendors[i] + 'Request' + suffix]
	  caf = global[vendors[i] + 'Cancel' + suffix]
	      || global[vendors[i] + 'CancelRequest' + suffix]
	}

	// Some versions of FF have rAF but not cAF
	if(!raf || !caf) {
	  var last = 0
	    , id = 0
	    , queue = []
	    , frameDuration = 1000 / 60

	  raf = function(callback) {
	    if(queue.length === 0) {
	      var _now = now()
	        , next = Math.max(0, frameDuration - (_now - last))
	      last = next + _now
	      setTimeout(function() {
	        var cp = queue.slice(0)
	        // Clear queue here to prevent
	        // callbacks from appending listeners
	        // to the current frame's queue
	        queue.length = 0
	        for(var i = 0; i < cp.length; i++) {
	          if(!cp[i].cancelled) {
	            try{
	              cp[i].callback(last)
	            } catch(e) {
	              setTimeout(function() { throw e }, 0)
	            }
	          }
	        }
	      }, Math.round(next))
	    }
	    queue.push({
	      handle: ++id,
	      callback: callback,
	      cancelled: false
	    })
	    return id
	  }

	  caf = function(handle) {
	    for(var i = 0; i < queue.length; i++) {
	      if(queue[i].handle === handle) {
	        queue[i].cancelled = true
	      }
	    }
	  }
	}

	module.exports = function(fn) {
	  // Wrap in a new function to prevent
	  // `cancel` potentially being assigned
	  // to the native rAF function
	  return raf.call(global, fn)
	}
	module.exports.cancel = function() {
	  caf.apply(global, arguments)
	}


/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {// Generated by CoffeeScript 1.7.1
	(function() {
	  var getNanoSeconds, hrtime, loadTime;

	  if ((typeof performance !== "undefined" && performance !== null) && performance.now) {
	    module.exports = function() {
	      return performance.now();
	    };
	  } else if ((typeof process !== "undefined" && process !== null) && process.hrtime) {
	    module.exports = function() {
	      return (getNanoSeconds() - loadTime) / 1e6;
	    };
	    hrtime = process.hrtime;
	    getNanoSeconds = function() {
	      var hr;
	      hr = hrtime();
	      return hr[0] * 1e9 + hr[1];
	    };
	    loadTime = getNanoSeconds();
	  } else if (Date.now) {
	    module.exports = function() {
	      return Date.now() - loadTime;
	    };
	    loadTime = Date.now();
	  } else {
	    module.exports = function() {
	      return new Date().getTime() - loadTime;
	    };
	    loadTime = new Date().getTime();
	  }

	}).call(this);

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(71)))

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;!function(){ var window = {}; var document = {}; var d3_document = { documentElement: {}};
	  var d3 = {version: "3.5.5"}; // semver
	d3.color = d3_color;

	function d3_color() {}

	d3_color.prototype.toString = function() {
	  return this.rgb() + "";
	};
	function d3_class(ctor, properties) {
	  for (var key in properties) {
	    Object.defineProperty(ctor.prototype, key, {
	      value: properties[key],
	      enumerable: false
	    });
	  }
	}

	d3.map = function(object, f) {
	  var map = new d3_Map;
	  if (object instanceof d3_Map) {
	    object.forEach(function(key, value) { map.set(key, value); });
	  } else if (Array.isArray(object)) {
	    var i = -1,
	        n = object.length,
	        o;
	    if (arguments.length === 1) while (++i < n) map.set(i, object[i]);
	    else while (++i < n) map.set(f.call(object, o = object[i], i), o);
	  } else {
	    for (var key in object) map.set(key, object[key]);
	  }
	  return map;
	};

	function d3_Map() {
	  this._ = Object.create(null);
	}

	var d3_map_proto = "__proto__",
	    d3_map_zero = "\0";

	d3_class(d3_Map, {
	  has: d3_map_has,
	  get: function(key) {
	    return this._[d3_map_escape(key)];
	  },
	  set: function(key, value) {
	    return this._[d3_map_escape(key)] = value;
	  },
	  remove: d3_map_remove,
	  keys: d3_map_keys,
	  values: function() {
	    var values = [];
	    for (var key in this._) values.push(this._[key]);
	    return values;
	  },
	  entries: function() {
	    var entries = [];
	    for (var key in this._) entries.push({key: d3_map_unescape(key), value: this._[key]});
	    return entries;
	  },
	  size: d3_map_size,
	  empty: d3_map_empty,
	  forEach: function(f) {
	    for (var key in this._) f.call(this, d3_map_unescape(key), this._[key]);
	  }
	});

	function d3_map_escape(key) {
	  return (key += "") === d3_map_proto || key[0] === d3_map_zero ? d3_map_zero + key : key;
	}

	function d3_map_unescape(key) {
	  return (key += "")[0] === d3_map_zero ? key.slice(1) : key;
	}

	function d3_map_has(key) {
	  return d3_map_escape(key) in this._;
	}

	function d3_map_remove(key) {
	  return (key = d3_map_escape(key)) in this._ && delete this._[key];
	}

	function d3_map_keys() {
	  var keys = [];
	  for (var key in this._) keys.push(d3_map_unescape(key));
	  return keys;
	}

	function d3_map_size() {
	  var size = 0;
	  for (var key in this._) ++size;
	  return size;
	}

	function d3_map_empty() {
	  for (var key in this._) return false;
	  return true;
	}

	d3.hsl = d3_hsl;

	function d3_hsl(h, s, l) {
	  return this instanceof d3_hsl ? void (this.h = +h, this.s = +s, this.l = +l)
	      : arguments.length < 2 ? (h instanceof d3_hsl ? new d3_hsl(h.h, h.s, h.l)
	      : d3_rgb_parse("" + h, d3_rgb_hsl, d3_hsl))
	      : new d3_hsl(h, s, l);
	}

	var d3_hslPrototype = d3_hsl.prototype = new d3_color;

	d3_hslPrototype.brighter = function(k) {
	  k = Math.pow(0.7, arguments.length ? k : 1);
	  return new d3_hsl(this.h, this.s, this.l / k);
	};

	d3_hslPrototype.darker = function(k) {
	  k = Math.pow(0.7, arguments.length ? k : 1);
	  return new d3_hsl(this.h, this.s, k * this.l);
	};

	d3_hslPrototype.rgb = function() {
	  return d3_hsl_rgb(this.h, this.s, this.l);
	};

	function d3_hsl_rgb(h, s, l) {
	  var m1,
	      m2;

	  /* Some simple corrections for h, s and l. */
	  h = isNaN(h) ? 0 : (h %= 360) < 0 ? h + 360 : h;
	  s = isNaN(s) ? 0 : s < 0 ? 0 : s > 1 ? 1 : s;
	  l = l < 0 ? 0 : l > 1 ? 1 : l;

	  /* From FvD 13.37, CSS Color Module Level 3 */
	  m2 = l <= .5 ? l * (1 + s) : l + s - l * s;
	  m1 = 2 * l - m2;

	  function v(h) {
	    if (h > 360) h -= 360;
	    else if (h < 0) h += 360;
	    if (h < 60) return m1 + (m2 - m1) * h / 60;
	    if (h < 180) return m2;
	    if (h < 240) return m1 + (m2 - m1) * (240 - h) / 60;
	    return m1;
	  }

	  function vv(h) {
	    return Math.round(v(h) * 255);
	  }

	  return new d3_rgb(vv(h + 120), vv(h), vv(h - 120));
	}
	var ε = 1e-6,
	    ε2 = ε * ε,
	    π = Math.PI,
	    τ = 2 * π,
	    τε = τ - ε,
	    halfπ = π / 2,
	    d3_radians = π / 180,
	    d3_degrees = 180 / π;

	function d3_sgn(x) {
	  return x > 0 ? 1 : x < 0 ? -1 : 0;
	}

	// Returns the 2D cross product of AB and AC vectors, i.e., the z-component of
	// the 3D cross product in a quadrant I Cartesian coordinate system (+x is
	// right, +y is up). Returns a positive value if ABC is counter-clockwise,
	// negative if clockwise, and zero if the points are collinear.
	function d3_cross2d(a, b, c) {
	  return (b[0] - a[0]) * (c[1] - a[1]) - (b[1] - a[1]) * (c[0] - a[0]);
	}

	function d3_acos(x) {
	  return x > 1 ? 0 : x < -1 ? π : Math.acos(x);
	}

	function d3_asin(x) {
	  return x > 1 ? halfπ : x < -1 ? -halfπ : Math.asin(x);
	}

	function d3_sinh(x) {
	  return ((x = Math.exp(x)) - 1 / x) / 2;
	}

	function d3_cosh(x) {
	  return ((x = Math.exp(x)) + 1 / x) / 2;
	}

	function d3_tanh(x) {
	  return ((x = Math.exp(2 * x)) - 1) / (x + 1);
	}

	function d3_haversin(x) {
	  return (x = Math.sin(x / 2)) * x;
	}

	d3.hcl = d3_hcl;

	function d3_hcl(h, c, l) {
	  return this instanceof d3_hcl ? void (this.h = +h, this.c = +c, this.l = +l)
	      : arguments.length < 2 ? (h instanceof d3_hcl ? new d3_hcl(h.h, h.c, h.l)
	      : (h instanceof d3_lab ? d3_lab_hcl(h.l, h.a, h.b)
	      : d3_lab_hcl((h = d3_rgb_lab((h = d3.rgb(h)).r, h.g, h.b)).l, h.a, h.b)))
	      : new d3_hcl(h, c, l);
	}

	var d3_hclPrototype = d3_hcl.prototype = new d3_color;

	d3_hclPrototype.brighter = function(k) {
	  return new d3_hcl(this.h, this.c, Math.min(100, this.l + d3_lab_K * (arguments.length ? k : 1)));
	};

	d3_hclPrototype.darker = function(k) {
	  return new d3_hcl(this.h, this.c, Math.max(0, this.l - d3_lab_K * (arguments.length ? k : 1)));
	};

	d3_hclPrototype.rgb = function() {
	  return d3_hcl_lab(this.h, this.c, this.l).rgb();
	};

	function d3_hcl_lab(h, c, l) {
	  if (isNaN(h)) h = 0;
	  if (isNaN(c)) c = 0;
	  return new d3_lab(l, Math.cos(h *= d3_radians) * c, Math.sin(h) * c);
	}

	d3.lab = d3_lab;

	function d3_lab(l, a, b) {
	  return this instanceof d3_lab ? void (this.l = +l, this.a = +a, this.b = +b)
	      : arguments.length < 2 ? (l instanceof d3_lab ? new d3_lab(l.l, l.a, l.b)
	      : (l instanceof d3_hcl ? d3_hcl_lab(l.h, l.c, l.l)
	      : d3_rgb_lab((l = d3_rgb(l)).r, l.g, l.b)))
	      : new d3_lab(l, a, b);
	}

	// Corresponds roughly to RGB brighter/darker
	var d3_lab_K = 18;

	// D65 standard referent
	var d3_lab_X = 0.950470,
	    d3_lab_Y = 1,
	    d3_lab_Z = 1.088830;

	var d3_labPrototype = d3_lab.prototype = new d3_color;

	d3_labPrototype.brighter = function(k) {
	  return new d3_lab(Math.min(100, this.l + d3_lab_K * (arguments.length ? k : 1)), this.a, this.b);
	};

	d3_labPrototype.darker = function(k) {
	  return new d3_lab(Math.max(0, this.l - d3_lab_K * (arguments.length ? k : 1)), this.a, this.b);
	};

	d3_labPrototype.rgb = function() {
	  return d3_lab_rgb(this.l, this.a, this.b);
	};

	function d3_lab_rgb(l, a, b) {
	  var y = (l + 16) / 116,
	      x = y + a / 500,
	      z = y - b / 200;
	  x = d3_lab_xyz(x) * d3_lab_X;
	  y = d3_lab_xyz(y) * d3_lab_Y;
	  z = d3_lab_xyz(z) * d3_lab_Z;
	  return new d3_rgb(
	    d3_xyz_rgb( 3.2404542 * x - 1.5371385 * y - 0.4985314 * z),
	    d3_xyz_rgb(-0.9692660 * x + 1.8760108 * y + 0.0415560 * z),
	    d3_xyz_rgb( 0.0556434 * x - 0.2040259 * y + 1.0572252 * z)
	  );
	}

	function d3_lab_hcl(l, a, b) {
	  return l > 0
	      ? new d3_hcl(Math.atan2(b, a) * d3_degrees, Math.sqrt(a * a + b * b), l)
	      : new d3_hcl(NaN, NaN, l);
	}

	function d3_lab_xyz(x) {
	  return x > 0.206893034 ? x * x * x : (x - 4 / 29) / 7.787037;
	}
	function d3_xyz_lab(x) {
	  return x > 0.008856 ? Math.pow(x, 1 / 3) : 7.787037 * x + 4 / 29;
	}

	function d3_xyz_rgb(r) {
	  return Math.round(255 * (r <= 0.00304 ? 12.92 * r : 1.055 * Math.pow(r, 1 / 2.4) - 0.055));
	}

	d3.rgb = d3_rgb;

	function d3_rgb(r, g, b) {
	  return this instanceof d3_rgb ? void (this.r = ~~r, this.g = ~~g, this.b = ~~b)
	      : arguments.length < 2 ? (r instanceof d3_rgb ? new d3_rgb(r.r, r.g, r.b)
	      : d3_rgb_parse("" + r, d3_rgb, d3_hsl_rgb))
	      : new d3_rgb(r, g, b);
	}

	function d3_rgbNumber(value) {
	  return new d3_rgb(value >> 16, value >> 8 & 0xff, value & 0xff);
	}

	function d3_rgbString(value) {
	  return d3_rgbNumber(value) + "";
	}

	var d3_rgbPrototype = d3_rgb.prototype = new d3_color;

	d3_rgbPrototype.brighter = function(k) {
	  k = Math.pow(0.7, arguments.length ? k : 1);
	  var r = this.r,
	      g = this.g,
	      b = this.b,
	      i = 30;
	  if (!r && !g && !b) return new d3_rgb(i, i, i);
	  if (r && r < i) r = i;
	  if (g && g < i) g = i;
	  if (b && b < i) b = i;
	  return new d3_rgb(Math.min(255, r / k), Math.min(255, g / k), Math.min(255, b / k));
	};

	d3_rgbPrototype.darker = function(k) {
	  k = Math.pow(0.7, arguments.length ? k : 1);
	  return new d3_rgb(k * this.r, k * this.g, k * this.b);
	};

	d3_rgbPrototype.hsl = function() {
	  return d3_rgb_hsl(this.r, this.g, this.b);
	};

	d3_rgbPrototype.toString = function() {
	  return "#" + d3_rgb_hex(this.r) + d3_rgb_hex(this.g) + d3_rgb_hex(this.b);
	};

	function d3_rgb_hex(v) {
	  return v < 0x10
	      ? "0" + Math.max(0, v).toString(16)
	      : Math.min(255, v).toString(16);
	}

	function d3_rgb_parse(format, rgb, hsl) {
	  var r = 0, // red channel; int in [0, 255]
	      g = 0, // green channel; int in [0, 255]
	      b = 0, // blue channel; int in [0, 255]
	      m1, // CSS color specification match
	      m2, // CSS color specification type (e.g., rgb)
	      color;

	  /* Handle hsl, rgb. */
	  m1 = /([a-z]+)\((.*)\)/i.exec(format);
	  if (m1) {
	    m2 = m1[2].split(",");
	    switch (m1[1]) {
	      case "hsl": {
	        return hsl(
	          parseFloat(m2[0]), // degrees
	          parseFloat(m2[1]) / 100, // percentage
	          parseFloat(m2[2]) / 100 // percentage
	        );
	      }
	      case "rgb": {
	        return rgb(
	          d3_rgb_parseNumber(m2[0]),
	          d3_rgb_parseNumber(m2[1]),
	          d3_rgb_parseNumber(m2[2])
	        );
	      }
	    }
	  }

	  /* Named colors. */
	  if (color = d3_rgb_names.get(format.toLowerCase())) {
	    return rgb(color.r, color.g, color.b);
	  }

	  /* Hexadecimal colors: #rgb and #rrggbb. */
	  if (format != null && format.charAt(0) === "#" && !isNaN(color = parseInt(format.slice(1), 16))) {
	    if (format.length === 4) {
	      r = (color & 0xf00) >> 4; r = (r >> 4) | r;
	      g = (color & 0xf0); g = (g >> 4) | g;
	      b = (color & 0xf); b = (b << 4) | b;
	    } else if (format.length === 7) {
	      r = (color & 0xff0000) >> 16;
	      g = (color & 0xff00) >> 8;
	      b = (color & 0xff);
	    }
	  }

	  return rgb(r, g, b);
	}

	function d3_rgb_hsl(r, g, b) {
	  var min = Math.min(r /= 255, g /= 255, b /= 255),
	      max = Math.max(r, g, b),
	      d = max - min,
	      h,
	      s,
	      l = (max + min) / 2;
	  if (d) {
	    s = l < .5 ? d / (max + min) : d / (2 - max - min);
	    if (r == max) h = (g - b) / d + (g < b ? 6 : 0);
	    else if (g == max) h = (b - r) / d + 2;
	    else h = (r - g) / d + 4;
	    h *= 60;
	  } else {
	    h = NaN;
	    s = l > 0 && l < 1 ? 0 : h;
	  }
	  return new d3_hsl(h, s, l);
	}

	function d3_rgb_lab(r, g, b) {
	  r = d3_rgb_xyz(r);
	  g = d3_rgb_xyz(g);
	  b = d3_rgb_xyz(b);
	  var x = d3_xyz_lab((0.4124564 * r + 0.3575761 * g + 0.1804375 * b) / d3_lab_X),
	      y = d3_xyz_lab((0.2126729 * r + 0.7151522 * g + 0.0721750 * b) / d3_lab_Y),
	      z = d3_xyz_lab((0.0193339 * r + 0.1191920 * g + 0.9503041 * b) / d3_lab_Z);
	  return d3_lab(116 * y - 16, 500 * (x - y), 200 * (y - z));
	}

	function d3_rgb_xyz(r) {
	  return (r /= 255) <= 0.04045 ? r / 12.92 : Math.pow((r + 0.055) / 1.055, 2.4);
	}

	function d3_rgb_parseNumber(c) { // either integer or percentage
	  var f = parseFloat(c);
	  return c.charAt(c.length - 1) === "%" ? Math.round(f * 2.55) : f;
	}

	var d3_rgb_names = d3.map({
	  aliceblue: 0xf0f8ff,
	  antiquewhite: 0xfaebd7,
	  aqua: 0x00ffff,
	  aquamarine: 0x7fffd4,
	  azure: 0xf0ffff,
	  beige: 0xf5f5dc,
	  bisque: 0xffe4c4,
	  black: 0x000000,
	  blanchedalmond: 0xffebcd,
	  blue: 0x0000ff,
	  blueviolet: 0x8a2be2,
	  brown: 0xa52a2a,
	  burlywood: 0xdeb887,
	  cadetblue: 0x5f9ea0,
	  chartreuse: 0x7fff00,
	  chocolate: 0xd2691e,
	  coral: 0xff7f50,
	  cornflowerblue: 0x6495ed,
	  cornsilk: 0xfff8dc,
	  crimson: 0xdc143c,
	  cyan: 0x00ffff,
	  darkblue: 0x00008b,
	  darkcyan: 0x008b8b,
	  darkgoldenrod: 0xb8860b,
	  darkgray: 0xa9a9a9,
	  darkgreen: 0x006400,
	  darkgrey: 0xa9a9a9,
	  darkkhaki: 0xbdb76b,
	  darkmagenta: 0x8b008b,
	  darkolivegreen: 0x556b2f,
	  darkorange: 0xff8c00,
	  darkorchid: 0x9932cc,
	  darkred: 0x8b0000,
	  darksalmon: 0xe9967a,
	  darkseagreen: 0x8fbc8f,
	  darkslateblue: 0x483d8b,
	  darkslategray: 0x2f4f4f,
	  darkslategrey: 0x2f4f4f,
	  darkturquoise: 0x00ced1,
	  darkviolet: 0x9400d3,
	  deeppink: 0xff1493,
	  deepskyblue: 0x00bfff,
	  dimgray: 0x696969,
	  dimgrey: 0x696969,
	  dodgerblue: 0x1e90ff,
	  firebrick: 0xb22222,
	  floralwhite: 0xfffaf0,
	  forestgreen: 0x228b22,
	  fuchsia: 0xff00ff,
	  gainsboro: 0xdcdcdc,
	  ghostwhite: 0xf8f8ff,
	  gold: 0xffd700,
	  goldenrod: 0xdaa520,
	  gray: 0x808080,
	  green: 0x008000,
	  greenyellow: 0xadff2f,
	  grey: 0x808080,
	  honeydew: 0xf0fff0,
	  hotpink: 0xff69b4,
	  indianred: 0xcd5c5c,
	  indigo: 0x4b0082,
	  ivory: 0xfffff0,
	  khaki: 0xf0e68c,
	  lavender: 0xe6e6fa,
	  lavenderblush: 0xfff0f5,
	  lawngreen: 0x7cfc00,
	  lemonchiffon: 0xfffacd,
	  lightblue: 0xadd8e6,
	  lightcoral: 0xf08080,
	  lightcyan: 0xe0ffff,
	  lightgoldenrodyellow: 0xfafad2,
	  lightgray: 0xd3d3d3,
	  lightgreen: 0x90ee90,
	  lightgrey: 0xd3d3d3,
	  lightpink: 0xffb6c1,
	  lightsalmon: 0xffa07a,
	  lightseagreen: 0x20b2aa,
	  lightskyblue: 0x87cefa,
	  lightslategray: 0x778899,
	  lightslategrey: 0x778899,
	  lightsteelblue: 0xb0c4de,
	  lightyellow: 0xffffe0,
	  lime: 0x00ff00,
	  limegreen: 0x32cd32,
	  linen: 0xfaf0e6,
	  magenta: 0xff00ff,
	  maroon: 0x800000,
	  mediumaquamarine: 0x66cdaa,
	  mediumblue: 0x0000cd,
	  mediumorchid: 0xba55d3,
	  mediumpurple: 0x9370db,
	  mediumseagreen: 0x3cb371,
	  mediumslateblue: 0x7b68ee,
	  mediumspringgreen: 0x00fa9a,
	  mediumturquoise: 0x48d1cc,
	  mediumvioletred: 0xc71585,
	  midnightblue: 0x191970,
	  mintcream: 0xf5fffa,
	  mistyrose: 0xffe4e1,
	  moccasin: 0xffe4b5,
	  navajowhite: 0xffdead,
	  navy: 0x000080,
	  oldlace: 0xfdf5e6,
	  olive: 0x808000,
	  olivedrab: 0x6b8e23,
	  orange: 0xffa500,
	  orangered: 0xff4500,
	  orchid: 0xda70d6,
	  palegoldenrod: 0xeee8aa,
	  palegreen: 0x98fb98,
	  paleturquoise: 0xafeeee,
	  palevioletred: 0xdb7093,
	  papayawhip: 0xffefd5,
	  peachpuff: 0xffdab9,
	  peru: 0xcd853f,
	  pink: 0xffc0cb,
	  plum: 0xdda0dd,
	  powderblue: 0xb0e0e6,
	  purple: 0x800080,
	  rebeccapurple: 0x663399,
	  red: 0xff0000,
	  rosybrown: 0xbc8f8f,
	  royalblue: 0x4169e1,
	  saddlebrown: 0x8b4513,
	  salmon: 0xfa8072,
	  sandybrown: 0xf4a460,
	  seagreen: 0x2e8b57,
	  seashell: 0xfff5ee,
	  sienna: 0xa0522d,
	  silver: 0xc0c0c0,
	  skyblue: 0x87ceeb,
	  slateblue: 0x6a5acd,
	  slategray: 0x708090,
	  slategrey: 0x708090,
	  snow: 0xfffafa,
	  springgreen: 0x00ff7f,
	  steelblue: 0x4682b4,
	  tan: 0xd2b48c,
	  teal: 0x008080,
	  thistle: 0xd8bfd8,
	  tomato: 0xff6347,
	  turquoise: 0x40e0d0,
	  violet: 0xee82ee,
	  wheat: 0xf5deb3,
	  white: 0xffffff,
	  whitesmoke: 0xf5f5f5,
	  yellow: 0xffff00,
	  yellowgreen: 0x9acd32
	});

	d3_rgb_names.forEach(function(key, value) {
	  d3_rgb_names.set(key, d3_rgbNumber(value));
	});

	d3.interpolateRgb = d3_interpolateRgb;

	function d3_interpolateRgb(a, b) {
	  a = d3.rgb(a);
	  b = d3.rgb(b);
	  var ar = a.r,
	      ag = a.g,
	      ab = a.b,
	      br = b.r - ar,
	      bg = b.g - ag,
	      bb = b.b - ab;
	  return function(t) {
	    return "#"
	        + d3_rgb_hex(Math.round(ar + br * t))
	        + d3_rgb_hex(Math.round(ag + bg * t))
	        + d3_rgb_hex(Math.round(ab + bb * t));
	  };
	}

	d3.interpolateObject = d3_interpolateObject;

	function d3_interpolateObject(a, b) {
	  var i = {},
	      c = {},
	      k;
	  for (k in a) {
	    if (k in b) {
	      i[k] = d3_interpolate(a[k], b[k]);
	    } else {
	      c[k] = a[k];
	    }
	  }
	  for (k in b) {
	    if (!(k in a)) {
	      c[k] = b[k];
	    }
	  }
	  return function(t) {
	    for (k in i) c[k] = i[k](t);
	    return c;
	  };
	}
	d3.interpolateNumber = d3_interpolateNumber;

	function d3_interpolateNumber(a, b) {
	  a = +a, b = +b;
	  return function(t) { return a * (1 - t) + b * t; };
	}

	d3.interpolateString = d3_interpolateString;

	function d3_interpolateString(a, b) {
	  var bi = d3_interpolate_numberA.lastIndex = d3_interpolate_numberB.lastIndex = 0, // scan index for next number in b
	      am, // current match in a
	      bm, // current match in b
	      bs, // string preceding current number in b, if any
	      i = -1, // index in s
	      s = [], // string constants and placeholders
	      q = []; // number interpolators

	  // Coerce inputs to strings.
	  a = a + "", b = b + "";

	  // Interpolate pairs of numbers in a & b.
	  while ((am = d3_interpolate_numberA.exec(a))
	      && (bm = d3_interpolate_numberB.exec(b))) {
	    if ((bs = bm.index) > bi) { // a string precedes the next number in b
	      bs = b.slice(bi, bs);
	      if (s[i]) s[i] += bs; // coalesce with previous string
	      else s[++i] = bs;
	    }
	    if ((am = am[0]) === (bm = bm[0])) { // numbers in a & b match
	      if (s[i]) s[i] += bm; // coalesce with previous string
	      else s[++i] = bm;
	    } else { // interpolate non-matching numbers
	      s[++i] = null;
	      q.push({i: i, x: d3_interpolateNumber(am, bm)});
	    }
	    bi = d3_interpolate_numberB.lastIndex;
	  }

	  // Add remains of b.
	  if (bi < b.length) {
	    bs = b.slice(bi);
	    if (s[i]) s[i] += bs; // coalesce with previous string
	    else s[++i] = bs;
	  }

	  // Special optimization for only a single match.
	  // Otherwise, interpolate each of the numbers and rejoin the string.
	  return s.length < 2
	      ? (q[0] ? (b = q[0].x, function(t) { return b(t) + ""; })
	      : function() { return b; })
	      : (b = q.length, function(t) {
	          for (var i = 0, o; i < b; ++i) s[(o = q[i]).i] = o.x(t);
	          return s.join("");
	        });
	}

	var d3_interpolate_numberA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
	    d3_interpolate_numberB = new RegExp(d3_interpolate_numberA.source, "g");

	d3.interpolate = d3_interpolate;

	function d3_interpolate(a, b) {
	  var i = d3.interpolators.length, f;
	  while (--i >= 0 && !(f = d3.interpolators[i](a, b)));
	  return f;
	}

	d3.interpolators = [
	  function(a, b) {
	    var t = typeof b;
	    return (t === "string" ? (d3_rgb_names.has(b) || /^(#|rgb\(|hsl\()/.test(b) ? d3_interpolateRgb : d3_interpolateString)
	        : b instanceof d3_color ? d3_interpolateRgb
	        : Array.isArray(b) ? d3_interpolateArray
	        : t === "object" && isNaN(b) ? d3_interpolateObject
	        : d3_interpolateNumber)(a, b);
	  }
	];

	d3.interpolateArray = d3_interpolateArray;

	function d3_interpolateArray(a, b) {
	  var x = [],
	      c = [],
	      na = a.length,
	      nb = b.length,
	      n0 = Math.min(a.length, b.length),
	      i;
	  for (i = 0; i < n0; ++i) x.push(d3_interpolate(a[i], b[i]));
	  for (; i < na; ++i) c[i] = a[i];
	  for (; i < nb; ++i) c[i] = b[i];
	  return function(t) {
	    for (i = 0; i < n0; ++i) c[i] = x[i](t);
	    return c;
	  };
	}
	var d3_arraySlice = [].slice,
	    d3_array = function(list) { return d3_arraySlice.call(list); }; // conversion for NodeLists
	function d3_identity(d) {
	  return d;
	}

	var d3_ease_default = function() { return d3_identity; };

	var d3_ease = d3.map({
	  linear: d3_ease_default,
	  poly: d3_ease_poly,
	  quad: function() { return d3_ease_quad; },
	  cubic: function() { return d3_ease_cubic; },
	  sin: function() { return d3_ease_sin; },
	  exp: function() { return d3_ease_exp; },
	  circle: function() { return d3_ease_circle; },
	  elastic: d3_ease_elastic,
	  back: d3_ease_back,
	  bounce: function() { return d3_ease_bounce; }
	});

	var d3_ease_mode = d3.map({
	  "in": d3_identity,
	  "out": d3_ease_reverse,
	  "in-out": d3_ease_reflect,
	  "out-in": function(f) { return d3_ease_reflect(d3_ease_reverse(f)); }
	});

	d3.ease = function(name) {
	  var i = name.indexOf("-"),
	      t = i >= 0 ? name.slice(0, i) : name,
	      m = i >= 0 ? name.slice(i + 1) : "in";
	  t = d3_ease.get(t) || d3_ease_default;
	  m = d3_ease_mode.get(m) || d3_identity;
	  return d3_ease_clamp(m(t.apply(null, d3_arraySlice.call(arguments, 1))));
	};

	function d3_ease_clamp(f) {
	  return function(t) {
	    return t <= 0 ? 0 : t >= 1 ? 1 : f(t);
	  };
	}

	function d3_ease_reverse(f) {
	  return function(t) {
	    return 1 - f(1 - t);
	  };
	}

	function d3_ease_reflect(f) {
	  return function(t) {
	    return .5 * (t < .5 ? f(2 * t) : (2 - f(2 - 2 * t)));
	  };
	}

	function d3_ease_quad(t) {
	  return t * t;
	}

	function d3_ease_cubic(t) {
	  return t * t * t;
	}

	// Optimized clamp(reflect(poly(3))).
	function d3_ease_cubicInOut(t) {
	  if (t <= 0) return 0;
	  if (t >= 1) return 1;
	  var t2 = t * t, t3 = t2 * t;
	  return 4 * (t < .5 ? t3 : 3 * (t - t2) + t3 - .75);
	}

	function d3_ease_poly(e) {
	  return function(t) {
	    return Math.pow(t, e);
	  };
	}

	function d3_ease_sin(t) {
	  return 1 - Math.cos(t * halfπ);
	}

	function d3_ease_exp(t) {
	  return Math.pow(2, 10 * (t - 1));
	}

	function d3_ease_circle(t) {
	  return 1 - Math.sqrt(1 - t * t);
	}

	function d3_ease_elastic(a, p) {
	  var s;
	  if (arguments.length < 2) p = 0.45;
	  if (arguments.length) s = p / τ * Math.asin(1 / a);
	  else a = 1, s = p / 4;
	  return function(t) {
	    return 1 + a * Math.pow(2, -10 * t) * Math.sin((t - s) * τ / p);
	  };
	}

	function d3_ease_back(s) {
	  if (!s) s = 1.70158;
	  return function(t) {
	    return t * t * ((s + 1) * t - s);
	  };
	}

	function d3_ease_bounce(t) {
	  return t < 1 / 2.75 ? 7.5625 * t * t
	      : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75
	      : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375
	      : 7.5625 * (t -= 2.625 / 2.75) * t + .984375;
	}

	d3.interpolateHcl = d3_interpolateHcl;

	function d3_interpolateHcl(a, b) {
	  a = d3.hcl(a);
	  b = d3.hcl(b);
	  var ah = a.h,
	      ac = a.c,
	      al = a.l,
	      bh = b.h - ah,
	      bc = b.c - ac,
	      bl = b.l - al;
	  if (isNaN(bc)) bc = 0, ac = isNaN(ac) ? b.c : ac;
	  if (isNaN(bh)) bh = 0, ah = isNaN(ah) ? b.h : ah;
	  else if (bh > 180) bh -= 360; else if (bh < -180) bh += 360; // shortest path
	  return function(t) {
	    return d3_hcl_lab(ah + bh * t, ac + bc * t, al + bl * t) + "";
	  };
	}

	d3.interpolateHsl = d3_interpolateHsl;

	function d3_interpolateHsl(a, b) {
	  a = d3.hsl(a);
	  b = d3.hsl(b);
	  var ah = a.h,
	      as = a.s,
	      al = a.l,
	      bh = b.h - ah,
	      bs = b.s - as,
	      bl = b.l - al;
	  if (isNaN(bs)) bs = 0, as = isNaN(as) ? b.s : as;
	  if (isNaN(bh)) bh = 0, ah = isNaN(ah) ? b.h : ah;
	  else if (bh > 180) bh -= 360; else if (bh < -180) bh += 360; // shortest path
	  return function(t) {
	    return d3_hsl_rgb(ah + bh * t, as + bs * t, al + bl * t) + "";
	  };
	}

	d3.interpolateLab = d3_interpolateLab;

	function d3_interpolateLab(a, b) {
	  a = d3.lab(a);
	  b = d3.lab(b);
	  var al = a.l,
	      aa = a.a,
	      ab = a.b,
	      bl = b.l - al,
	      ba = b.a - aa,
	      bb = b.b - ab;
	  return function(t) {
	    return d3_lab_rgb(al + bl * t, aa + ba * t, ab + bb * t) + "";
	  };
	}
	d3.interpolateRound = d3_interpolateRound;

	function d3_interpolateRound(a, b) {
	  b -= a;
	  return function(t) { return Math.round(a + b * t); };
	}
	var d3_document = this.document;

	function d3_documentElement(node) {
	  return node
	      && (node.ownerDocument // node is a Node
	      || node.document // node is a Window
	      || node).documentElement; // node is a Document
	}

	function d3_window(node) {
	  return node
	      && ((node.ownerDocument && node.ownerDocument.defaultView) // node is a Node
	        || (node.document && node) // node is a Window
	        || node.defaultView); // node is a Document
	}
	var d3_nsPrefix = {
	  svg: "http://www.w3.org/2000/svg",
	  xhtml: "http://www.w3.org/1999/xhtml",
	  xlink: "http://www.w3.org/1999/xlink",
	  xml: "http://www.w3.org/XML/1998/namespace",
	  xmlns: "http://www.w3.org/2000/xmlns/"
	};

	d3.ns = {
	  prefix: d3_nsPrefix,
	  qualify: function(name) {
	    var i = name.indexOf(":"),
	        prefix = name;
	    if (i >= 0) {
	      prefix = name.slice(0, i);
	      name = name.slice(i + 1);
	    }
	    return d3_nsPrefix.hasOwnProperty(prefix)
	        ? {space: d3_nsPrefix[prefix], local: name}
	        : name;
	  }
	};

	d3.transform = function(string) {
	  var g = d3_document.createElementNS(d3.ns.prefix.svg, "g");
	  return (d3.transform = function(string) {
	    if (string != null) {
	      g.setAttribute("transform", string);
	      var t = g.transform.baseVal.consolidate();
	    }
	    return new d3_transform(t ? t.matrix : d3_transformIdentity);
	  })(string);
	};

	// Compute x-scale and normalize the first row.
	// Compute shear and make second row orthogonal to first.
	// Compute y-scale and normalize the second row.
	// Finally, compute the rotation.
	function d3_transform(m) {
	  var r0 = [m.a, m.b],
	      r1 = [m.c, m.d],
	      kx = d3_transformNormalize(r0),
	      kz = d3_transformDot(r0, r1),
	      ky = d3_transformNormalize(d3_transformCombine(r1, r0, -kz)) || 0;
	  if (r0[0] * r1[1] < r1[0] * r0[1]) {
	    r0[0] *= -1;
	    r0[1] *= -1;
	    kx *= -1;
	    kz *= -1;
	  }
	  this.rotate = (kx ? Math.atan2(r0[1], r0[0]) : Math.atan2(-r1[0], r1[1])) * d3_degrees;
	  this.translate = [m.e, m.f];
	  this.scale = [kx, ky];
	  this.skew = ky ? Math.atan2(kz, ky) * d3_degrees : 0;
	};

	d3_transform.prototype.toString = function() {
	  return "translate(" + this.translate
	      + ")rotate(" + this.rotate
	      + ")skewX(" + this.skew
	      + ")scale(" + this.scale
	      + ")";
	};

	function d3_transformDot(a, b) {
	  return a[0] * b[0] + a[1] * b[1];
	}

	function d3_transformNormalize(a) {
	  var k = Math.sqrt(d3_transformDot(a, a));
	  if (k) {
	    a[0] /= k;
	    a[1] /= k;
	  }
	  return k;
	}

	function d3_transformCombine(a, b, k) {
	  a[0] += k * b[0];
	  a[1] += k * b[1];
	  return a;
	}

	var d3_transformIdentity = {a: 1, b: 0, c: 0, d: 1, e: 0, f: 0};

	d3.interpolateTransform = d3_interpolateTransform;

	function d3_interpolateTransform(a, b) {
	  var s = [], // string constants and placeholders
	      q = [], // number interpolators
	      n,
	      A = d3.transform(a),
	      B = d3.transform(b),
	      ta = A.translate,
	      tb = B.translate,
	      ra = A.rotate,
	      rb = B.rotate,
	      wa = A.skew,
	      wb = B.skew,
	      ka = A.scale,
	      kb = B.scale;

	  if (ta[0] != tb[0] || ta[1] != tb[1]) {
	    s.push("translate(", null, ",", null, ")");
	    q.push({i: 1, x: d3_interpolateNumber(ta[0], tb[0])}, {i: 3, x: d3_interpolateNumber(ta[1], tb[1])});
	  } else if (tb[0] || tb[1]) {
	    s.push("translate(" + tb + ")");
	  } else {
	    s.push("");
	  }

	  if (ra != rb) {
	    if (ra - rb > 180) rb += 360; else if (rb - ra > 180) ra += 360; // shortest path
	    q.push({i: s.push(s.pop() + "rotate(", null, ")") - 2, x: d3_interpolateNumber(ra, rb)});
	  } else if (rb) {
	    s.push(s.pop() + "rotate(" + rb + ")");
	  }

	  if (wa != wb) {
	    q.push({i: s.push(s.pop() + "skewX(", null, ")") - 2, x: d3_interpolateNumber(wa, wb)});
	  } else if (wb) {
	    s.push(s.pop() + "skewX(" + wb + ")");
	  }

	  if (ka[0] != kb[0] || ka[1] != kb[1]) {
	    n = s.push(s.pop() + "scale(", null, ",", null, ")");
	    q.push({i: n - 4, x: d3_interpolateNumber(ka[0], kb[0])}, {i: n - 2, x: d3_interpolateNumber(ka[1], kb[1])});
	  } else if (kb[0] != 1 || kb[1] != 1) {
	    s.push(s.pop() + "scale(" + kb + ")");
	  }

	  n = q.length;
	  return function(t) {
	    var i = -1, o;
	    while (++i < n) s[(o = q[i]).i] = o.x(t);
	    return s.join("");
	  };
	}
	function d3_uninterpolateNumber(a, b) {
	  b = (b -= a = +a) || 1 / b;
	  return function(x) { return (x - a) / b; };
	}

	function d3_uninterpolateClamp(a, b) {
	  b = (b -= a = +a) || 1 / b;
	  return function(x) { return Math.max(0, Math.min(1, (x - a) / b)); };
	}

	var ρ = Math.SQRT2,
	    ρ2 = 2,
	    ρ4 = 4;

	// p0 = [ux0, uy0, w0]
	// p1 = [ux1, uy1, w1]
	d3.interpolateZoom = function(p0, p1) {
	  var ux0 = p0[0], uy0 = p0[1], w0 = p0[2],
	      ux1 = p1[0], uy1 = p1[1], w1 = p1[2];

	  var dx = ux1 - ux0,
	      dy = uy1 - uy0,
	      d2 = dx * dx + dy * dy,
	      d1 = Math.sqrt(d2),
	      b0 = (w1 * w1 - w0 * w0 + ρ4 * d2) / (2 * w0 * ρ2 * d1),
	      b1 = (w1 * w1 - w0 * w0 - ρ4 * d2) / (2 * w1 * ρ2 * d1),
	      r0 = Math.log(Math.sqrt(b0 * b0 + 1) - b0),
	      r1 = Math.log(Math.sqrt(b1 * b1 + 1) - b1),
	      dr = r1 - r0,
	      S = (dr || Math.log(w1 / w0)) / ρ;

	  function interpolate(t) {
	    var s = t * S;
	    if (dr) {
	      // General case.
	      var coshr0 = d3_cosh(r0),
	          u = w0 / (ρ2 * d1) * (coshr0 * d3_tanh(ρ * s + r0) - d3_sinh(r0));
	      return [
	        ux0 + u * dx,
	        uy0 + u * dy,
	        w0 * coshr0 / d3_cosh(ρ * s + r0)
	      ];
	    }
	    // Special case for u0 ~= u1.
	    return [
	      ux0 + t * dx,
	      uy0 + t * dy,
	      w0 * Math.exp(ρ * s)
	    ];
	  }

	  interpolate.duration = S * 1000;

	  return interpolate;
	};
	  if (true) !(__WEBPACK_AMD_DEFINE_FACTORY__ = (d3), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  else if (typeof module === "object" && module.exports) module.exports = d3;
	  this.d3 = d3;
	}();


/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module, global) {/**
	 * @license
	 * lodash 3.10.1 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern include="each,mapValues"`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	'use strict';

	;(function () {

	  /** Used as a safe reference for `undefined` in pre-ES5 environments. */
	  var undefined;

	  /** Used as the semantic version number. */
	  var VERSION = '3.10.1';

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
	      float32Tag = '[object Float32Array]',
	      float64Tag = '[object Float64Array]',
	      int8Tag = '[object Int8Array]',
	      int16Tag = '[object Int16Array]',
	      int32Tag = '[object Int32Array]',
	      uint8Tag = '[object Uint8Array]',
	      uint8ClampedTag = '[object Uint8ClampedArray]',
	      uint16Tag = '[object Uint16Array]',
	      uint32Tag = '[object Uint32Array]';

	  /** Used to match property names within property paths. */
	  var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\n\\]|\\.)*?\1)\]/,
	      reIsPlainProp = /^\w*$/,
	      rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\n\\]|\\.)*?)\2)\]/g;

	  /** Used to match backslashes in property paths. */
	  var reEscapeChar = /\\(\\)?/g;

	  /** Used to match `RegExp` flags from their coerced string values. */
	  var reFlags = /\w*$/;

	  /** Used to detect host constructors (Safari > 5). */
	  var reIsHostCtor = /^\[object .+?Constructor\]$/;

	  /** Used to detect unsigned integer values. */
	  var reIsUint = /^\d+$/;

	  /** Used to identify `toStringTag` values of typed arrays. */
	  var typedArrayTags = {};
	  typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
	  typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;

	  /** Used to identify `toStringTag` values supported by `_.clone`. */
	  var cloneableTags = {};
	  cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[stringTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
	  cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[mapTag] = cloneableTags[setTag] = cloneableTags[weakMapTag] = false;

	  /** Used to determine if values are of the language type `Object`. */
	  var objectTypes = {
	    'function': true,
	    'object': true
	  };

	  /** Detect free variable `exports`. */
	  var freeExports = objectTypes[typeof exports] && exports && !exports.nodeType && exports;

	  /** Detect free variable `module`. */
	  var freeModule = objectTypes[typeof module] && module && !module.nodeType && module;

	  /** Detect free variable `global` from Node.js. */
	  var freeGlobal = freeExports && freeModule && typeof global == 'object' && global && global.Object && global;

	  /** Detect free variable `self`. */
	  var freeSelf = objectTypes[typeof self] && self && self.Object && self;

	  /** Detect free variable `window`. */
	  var freeWindow = objectTypes[typeof window] && window && window.Object && window;

	  /** Detect the popular CommonJS extension `module.exports`. */
	  var moduleExports = freeModule && freeModule.exports === freeExports && freeExports;

	  /**
	   * Used as a reference to the global object.
	   *
	   * The `this` value is used if it's the global object to avoid Greasemonkey's
	   * restricted `window` object, otherwise the `window` object is used.
	   */
	  var root = freeGlobal || freeWindow !== (this && this.window) && freeWindow || freeSelf || this;

	  /*--------------------------------------------------------------------------*/

	  /**
	   * Converts `value` to a string if it's not one. An empty string is returned
	   * for `null` or `undefined` values.
	   *
	   * @private
	   * @param {*} value The value to process.
	   * @returns {string} Returns the string.
	   */
	  function baseToString(value) {
	    return value == null ? '' : value + '';
	  }

	  /**
	   * Checks if `value` is object-like.
	   *
	   * @private
	   * @param {*} value The value to check.
	   * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	   */
	  function isObjectLike(value) {
	    return !!value && typeof value == 'object';
	  }

	  /*--------------------------------------------------------------------------*/

	  /** Used for native method references. */
	  var objectProto = Object.prototype;

	  /** Used to resolve the decompiled source of functions. */
	  var fnToString = Function.prototype.toString;

	  /** Used to check objects for own properties. */
	  var hasOwnProperty = objectProto.hasOwnProperty;

	  /**
	   * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	   * of values.
	   */
	  var objToString = objectProto.toString;

	  /** Used to detect if a method is native. */
	  var reIsNative = RegExp('^' + fnToString.call(hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');

	  /** Native method references. */
	  var ArrayBuffer = root.ArrayBuffer,
	      propertyIsEnumerable = objectProto.propertyIsEnumerable,
	      Uint8Array = root.Uint8Array;

	  /* Native method references for those with the same name as other `lodash` methods. */
	  var nativeIsArray = getNative(Array, 'isArray'),
	      nativeKeys = getNative(Object, 'keys');

	  /**
	   * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
	   * of an array-like value.
	   */
	  var MAX_SAFE_INTEGER = 9007199254740991;

	  /*------------------------------------------------------------------------*/

	  /**
	   * Creates a `lodash` object which wraps `value` to enable implicit chaining.
	   * Methods that operate on and return arrays, collections, and functions can
	   * be chained together. Methods that retrieve a single value or may return a
	   * primitive value will automatically end the chain returning the unwrapped
	   * value. Explicit chaining may be enabled using `_.chain`. The execution of
	   * chained methods is lazy, that is, execution is deferred until `_#value`
	   * is implicitly or explicitly called.
	   *
	   * Lazy evaluation allows several methods to support shortcut fusion. Shortcut
	   * fusion is an optimization strategy which merge iteratee calls; this can help
	   * to avoid the creation of intermediate data structures and greatly reduce the
	   * number of iteratee executions.
	   *
	   * Chaining is supported in custom builds as long as the `_#value` method is
	   * directly or indirectly included in the build.
	   *
	   * In addition to lodash methods, wrappers have `Array` and `String` methods.
	   *
	   * The wrapper `Array` methods are:
	   * `concat`, `join`, `pop`, `push`, `reverse`, `shift`, `slice`, `sort`,
	   * `splice`, and `unshift`
	   *
	   * The wrapper `String` methods are:
	   * `replace` and `split`
	   *
	   * The wrapper methods that support shortcut fusion are:
	   * `compact`, `drop`, `dropRight`, `dropRightWhile`, `dropWhile`, `filter`,
	   * `first`, `initial`, `last`, `map`, `pluck`, `reject`, `rest`, `reverse`,
	   * `slice`, `take`, `takeRight`, `takeRightWhile`, `takeWhile`, `toArray`,
	   * and `where`
	   *
	   * The chainable wrapper methods are:
	   * `after`, `ary`, `assign`, `at`, `before`, `bind`, `bindAll`, `bindKey`,
	   * `callback`, `chain`, `chunk`, `commit`, `compact`, `concat`, `constant`,
	   * `countBy`, `create`, `curry`, `debounce`, `defaults`, `defaultsDeep`,
	   * `defer`, `delay`, `difference`, `drop`, `dropRight`, `dropRightWhile`,
	   * `dropWhile`, `fill`, `filter`, `flatten`, `flattenDeep`, `flow`, `flowRight`,
	   * `forEach`, `forEachRight`, `forIn`, `forInRight`, `forOwn`, `forOwnRight`,
	   * `functions`, `groupBy`, `indexBy`, `initial`, `intersection`, `invert`,
	   * `invoke`, `keys`, `keysIn`, `map`, `mapKeys`, `mapValues`, `matches`,
	   * `matchesProperty`, `memoize`, `merge`, `method`, `methodOf`, `mixin`,
	   * `modArgs`, `negate`, `omit`, `once`, `pairs`, `partial`, `partialRight`,
	   * `partition`, `pick`, `plant`, `pluck`, `property`, `propertyOf`, `pull`,
	   * `pullAt`, `push`, `range`, `rearg`, `reject`, `remove`, `rest`, `restParam`,
	   * `reverse`, `set`, `shuffle`, `slice`, `sort`, `sortBy`, `sortByAll`,
	   * `sortByOrder`, `splice`, `spread`, `take`, `takeRight`, `takeRightWhile`,
	   * `takeWhile`, `tap`, `throttle`, `thru`, `times`, `toArray`, `toPlainObject`,
	   * `transform`, `union`, `uniq`, `unshift`, `unzip`, `unzipWith`, `values`,
	   * `valuesIn`, `where`, `without`, `wrap`, `xor`, `zip`, `zipObject`, `zipWith`
	   *
	   * The wrapper methods that are **not** chainable by default are:
	   * `add`, `attempt`, `camelCase`, `capitalize`, `ceil`, `clone`, `cloneDeep`,
	   * `deburr`, `endsWith`, `escape`, `escapeRegExp`, `every`, `find`, `findIndex`,
	   * `findKey`, `findLast`, `findLastIndex`, `findLastKey`, `findWhere`, `first`,
	   * `floor`, `get`, `gt`, `gte`, `has`, `identity`, `includes`, `indexOf`,
	   * `inRange`, `isArguments`, `isArray`, `isBoolean`, `isDate`, `isElement`,
	   * `isEmpty`, `isEqual`, `isError`, `isFinite` `isFunction`, `isMatch`,
	   * `isNative`, `isNaN`, `isNull`, `isNumber`, `isObject`, `isPlainObject`,
	   * `isRegExp`, `isString`, `isUndefined`, `isTypedArray`, `join`, `kebabCase`,
	   * `last`, `lastIndexOf`, `lt`, `lte`, `max`, `min`, `noConflict`, `noop`,
	   * `now`, `pad`, `padLeft`, `padRight`, `parseInt`, `pop`, `random`, `reduce`,
	   * `reduceRight`, `repeat`, `result`, `round`, `runInContext`, `shift`, `size`,
	   * `snakeCase`, `some`, `sortedIndex`, `sortedLastIndex`, `startCase`,
	   * `startsWith`, `sum`, `template`, `trim`, `trimLeft`, `trimRight`, `trunc`,
	   * `unescape`, `uniqueId`, `value`, and `words`
	   *
	   * The wrapper method `sample` will return a wrapped value when `n` is provided,
	   * otherwise an unwrapped value is returned.
	   *
	   * @name _
	   * @constructor
	   * @category Chain
	   * @param {*} value The value to wrap in a `lodash` instance.
	   * @returns {Object} Returns the new `lodash` wrapper instance.
	   * @example
	   *
	   * var wrapped = _([1, 2, 3]);
	   *
	   * // returns an unwrapped value
	   * wrapped.reduce(function(total, n) {
	   *   return total + n;
	   * });
	   * // => 6
	   *
	   * // returns a wrapped value
	   * var squares = wrapped.map(function(n) {
	   *   return n * n;
	   * });
	   *
	   * _.isArray(squares);
	   * // => false
	   *
	   * _.isArray(squares.value());
	   * // => true
	   */
	  function lodash() {}
	  // No operation performed.

	  /*------------------------------------------------------------------------*/

	  /**
	   * Copies the values of `source` to `array`.
	   *
	   * @private
	   * @param {Array} source The array to copy values from.
	   * @param {Array} [array=[]] The array to copy values to.
	   * @returns {Array} Returns `array`.
	   */
	  function arrayCopy(source, array) {
	    var index = -1,
	        length = source.length;

	    array || (array = Array(length));
	    while (++index < length) {
	      array[index] = source[index];
	    }
	    return array;
	  }

	  /**
	   * A specialized version of `_.forEach` for arrays without support for callback
	   * shorthands and `this` binding.
	   *
	   * @private
	   * @param {Array} array The array to iterate over.
	   * @param {Function} iteratee The function invoked per iteration.
	   * @returns {Array} Returns `array`.
	   */
	  function arrayEach(array, iteratee) {
	    var index = -1,
	        length = array.length;

	    while (++index < length) {
	      if (iteratee(array[index], index, array) === false) {
	        break;
	      }
	    }
	    return array;
	  }

	  /**
	   * A specialized version of `_.some` for arrays without support for callback
	   * shorthands and `this` binding.
	   *
	   * @private
	   * @param {Array} array The array to iterate over.
	   * @param {Function} predicate The function invoked per iteration.
	   * @returns {boolean} Returns `true` if any element passes the predicate check,
	   *  else `false`.
	   */
	  function arraySome(array, predicate) {
	    var index = -1,
	        length = array.length;

	    while (++index < length) {
	      if (predicate(array[index], index, array)) {
	        return true;
	      }
	    }
	    return false;
	  }

	  /**
	   * The base implementation of `_.assign` without support for argument juggling,
	   * multiple sources, and `customizer` functions.
	   *
	   * @private
	   * @param {Object} object The destination object.
	   * @param {Object} source The source object.
	   * @returns {Object} Returns `object`.
	   */
	  function baseAssign(object, source) {
	    return source == null ? object : baseCopy(source, keys(source), object);
	  }

	  /**
	   * Copies properties of `source` to `object`.
	   *
	   * @private
	   * @param {Object} source The object to copy properties from.
	   * @param {Array} props The property names to copy.
	   * @param {Object} [object={}] The object to copy properties to.
	   * @returns {Object} Returns `object`.
	   */
	  function baseCopy(source, props, object) {
	    object || (object = {});

	    var index = -1,
	        length = props.length;

	    while (++index < length) {
	      var key = props[index];
	      object[key] = source[key];
	    }
	    return object;
	  }

	  /**
	   * The base implementation of `_.callback` which supports specifying the
	   * number of arguments to provide to `func`.
	   *
	   * @private
	   * @param {*} [func=_.identity] The value to convert to a callback.
	   * @param {*} [thisArg] The `this` binding of `func`.
	   * @param {number} [argCount] The number of arguments to provide to `func`.
	   * @returns {Function} Returns the callback.
	   */
	  function baseCallback(func, thisArg, argCount) {
	    var type = typeof func;
	    if (type == 'function') {
	      return thisArg === undefined ? func : bindCallback(func, thisArg, argCount);
	    }
	    if (func == null) {
	      return identity;
	    }
	    if (type == 'object') {
	      return baseMatches(func);
	    }
	    return thisArg === undefined ? property(func) : baseMatchesProperty(func, thisArg);
	  }

	  /**
	   * The base implementation of `_.clone` without support for argument juggling
	   * and `this` binding `customizer` functions.
	   *
	   * @private
	   * @param {*} value The value to clone.
	   * @param {boolean} [isDeep] Specify a deep clone.
	   * @param {Function} [customizer] The function to customize cloning values.
	   * @param {string} [key] The key of `value`.
	   * @param {Object} [object] The object `value` belongs to.
	   * @param {Array} [stackA=[]] Tracks traversed source objects.
	   * @param {Array} [stackB=[]] Associates clones with source counterparts.
	   * @returns {*} Returns the cloned value.
	   */
	  function baseClone(value, isDeep, customizer, key, object, stackA, stackB) {
	    var result;
	    if (customizer) {
	      result = object ? customizer(value, key, object) : customizer(value);
	    }
	    if (result !== undefined) {
	      return result;
	    }
	    if (!isObject(value)) {
	      return value;
	    }
	    var isArr = isArray(value);
	    if (isArr) {
	      result = initCloneArray(value);
	      if (!isDeep) {
	        return arrayCopy(value, result);
	      }
	    } else {
	      var tag = objToString.call(value),
	          isFunc = tag == funcTag;

	      if (tag == objectTag || tag == argsTag || isFunc && !object) {
	        result = initCloneObject(isFunc ? {} : value);
	        if (!isDeep) {
	          return baseAssign(result, value);
	        }
	      } else {
	        return cloneableTags[tag] ? initCloneByTag(value, tag, isDeep) : object ? value : {};
	      }
	    }
	    // Check for circular references and return its corresponding clone.
	    stackA || (stackA = []);
	    stackB || (stackB = []);

	    var length = stackA.length;
	    while (length--) {
	      if (stackA[length] == value) {
	        return stackB[length];
	      }
	    }
	    // Add the source value to the stack of traversed objects and associate it with its clone.
	    stackA.push(value);
	    stackB.push(result);

	    // Recursively populate clone (susceptible to call stack limits).
	    (isArr ? arrayEach : baseForOwn)(value, function (subValue, key) {
	      result[key] = baseClone(subValue, isDeep, customizer, key, value, stackA, stackB);
	    });
	    return result;
	  }

	  /**
	   * The base implementation of `_.forEach` without support for callback
	   * shorthands and `this` binding.
	   *
	   * @private
	   * @param {Array|Object|string} collection The collection to iterate over.
	   * @param {Function} iteratee The function invoked per iteration.
	   * @returns {Array|Object|string} Returns `collection`.
	   */
	  var baseEach = createBaseEach(baseForOwn);

	  /**
	   * The base implementation of `baseForIn` and `baseForOwn` which iterates
	   * over `object` properties returned by `keysFunc` invoking `iteratee` for
	   * each property. Iteratee functions may exit iteration early by explicitly
	   * returning `false`.
	   *
	   * @private
	   * @param {Object} object The object to iterate over.
	   * @param {Function} iteratee The function invoked per iteration.
	   * @param {Function} keysFunc The function to get the keys of `object`.
	   * @returns {Object} Returns `object`.
	   */
	  var baseFor = createBaseFor();

	  /**
	   * The base implementation of `_.forOwn` without support for callback
	   * shorthands and `this` binding.
	   *
	   * @private
	   * @param {Object} object The object to iterate over.
	   * @param {Function} iteratee The function invoked per iteration.
	   * @returns {Object} Returns `object`.
	   */
	  function baseForOwn(object, iteratee) {
	    return baseFor(object, iteratee, keys);
	  }

	  /**
	   * The base implementation of `get` without support for string paths
	   * and default values.
	   *
	   * @private
	   * @param {Object} object The object to query.
	   * @param {Array} path The path of the property to get.
	   * @param {string} [pathKey] The key representation of path.
	   * @returns {*} Returns the resolved value.
	   */
	  function baseGet(object, path, pathKey) {
	    if (object == null) {
	      return;
	    }
	    if (pathKey !== undefined && pathKey in toObject(object)) {
	      path = [pathKey];
	    }
	    var index = 0,
	        length = path.length;

	    while (object != null && index < length) {
	      object = object[path[index++]];
	    }
	    return index && index == length ? object : undefined;
	  }

	  /**
	   * The base implementation of `_.isEqual` without support for `this` binding
	   * `customizer` functions.
	   *
	   * @private
	   * @param {*} value The value to compare.
	   * @param {*} other The other value to compare.
	   * @param {Function} [customizer] The function to customize comparing values.
	   * @param {boolean} [isLoose] Specify performing partial comparisons.
	   * @param {Array} [stackA] Tracks traversed `value` objects.
	   * @param {Array} [stackB] Tracks traversed `other` objects.
	   * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	   */
	  function baseIsEqual(value, other, customizer, isLoose, stackA, stackB) {
	    if (value === other) {
	      return true;
	    }
	    if (value == null || other == null || !isObject(value) && !isObjectLike(other)) {
	      return value !== value && other !== other;
	    }
	    return baseIsEqualDeep(value, other, baseIsEqual, customizer, isLoose, stackA, stackB);
	  }

	  /**
	   * A specialized version of `baseIsEqual` for arrays and objects which performs
	   * deep comparisons and tracks traversed objects enabling objects with circular
	   * references to be compared.
	   *
	   * @private
	   * @param {Object} object The object to compare.
	   * @param {Object} other The other object to compare.
	   * @param {Function} equalFunc The function to determine equivalents of values.
	   * @param {Function} [customizer] The function to customize comparing objects.
	   * @param {boolean} [isLoose] Specify performing partial comparisons.
	   * @param {Array} [stackA=[]] Tracks traversed `value` objects.
	   * @param {Array} [stackB=[]] Tracks traversed `other` objects.
	   * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	   */
	  function baseIsEqualDeep(object, other, equalFunc, customizer, isLoose, stackA, stackB) {
	    var objIsArr = isArray(object),
	        othIsArr = isArray(other),
	        objTag = arrayTag,
	        othTag = arrayTag;

	    if (!objIsArr) {
	      objTag = objToString.call(object);
	      if (objTag == argsTag) {
	        objTag = objectTag;
	      } else if (objTag != objectTag) {
	        objIsArr = isTypedArray(object);
	      }
	    }
	    if (!othIsArr) {
	      othTag = objToString.call(other);
	      if (othTag == argsTag) {
	        othTag = objectTag;
	      } else if (othTag != objectTag) {
	        othIsArr = isTypedArray(other);
	      }
	    }
	    var objIsObj = objTag == objectTag,
	        othIsObj = othTag == objectTag,
	        isSameTag = objTag == othTag;

	    if (isSameTag && !(objIsArr || objIsObj)) {
	      return equalByTag(object, other, objTag);
	    }
	    if (!isLoose) {
	      var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
	          othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

	      if (objIsWrapped || othIsWrapped) {
	        return equalFunc(objIsWrapped ? object.value() : object, othIsWrapped ? other.value() : other, customizer, isLoose, stackA, stackB);
	      }
	    }
	    if (!isSameTag) {
	      return false;
	    }
	    // Assume cyclic values are equal.
	    // For more information on detecting circular references see https://es5.github.io/#JO.
	    stackA || (stackA = []);
	    stackB || (stackB = []);

	    var length = stackA.length;
	    while (length--) {
	      if (stackA[length] == object) {
	        return stackB[length] == other;
	      }
	    }
	    // Add `object` and `other` to the stack of traversed objects.
	    stackA.push(object);
	    stackB.push(other);

	    var result = (objIsArr ? equalArrays : equalObjects)(object, other, equalFunc, customizer, isLoose, stackA, stackB);

	    stackA.pop();
	    stackB.pop();

	    return result;
	  }

	  /**
	   * The base implementation of `_.isMatch` without support for callback
	   * shorthands and `this` binding.
	   *
	   * @private
	   * @param {Object} object The object to inspect.
	   * @param {Array} matchData The propery names, values, and compare flags to match.
	   * @param {Function} [customizer] The function to customize comparing objects.
	   * @returns {boolean} Returns `true` if `object` is a match, else `false`.
	   */
	  function baseIsMatch(object, matchData, customizer) {
	    var index = matchData.length,
	        length = index,
	        noCustomizer = !customizer;

	    if (object == null) {
	      return !length;
	    }
	    object = toObject(object);
	    while (index--) {
	      var data = matchData[index];
	      if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
	        return false;
	      }
	    }
	    while (++index < length) {
	      data = matchData[index];
	      var key = data[0],
	          objValue = object[key],
	          srcValue = data[1];

	      if (noCustomizer && data[2]) {
	        if (objValue === undefined && !(key in object)) {
	          return false;
	        }
	      } else {
	        var result = customizer ? customizer(objValue, srcValue, key) : undefined;
	        if (!(result === undefined ? baseIsEqual(srcValue, objValue, customizer, true) : result)) {
	          return false;
	        }
	      }
	    }
	    return true;
	  }

	  /**
	   * The base implementation of `_.matches` which does not clone `source`.
	   *
	   * @private
	   * @param {Object} source The object of property values to match.
	   * @returns {Function} Returns the new function.
	   */
	  function baseMatches(source) {
	    var matchData = getMatchData(source);
	    if (matchData.length == 1 && matchData[0][2]) {
	      var key = matchData[0][0],
	          value = matchData[0][1];

	      return function (object) {
	        if (object == null) {
	          return false;
	        }
	        return object[key] === value && (value !== undefined || key in toObject(object));
	      };
	    }
	    return function (object) {
	      return baseIsMatch(object, matchData);
	    };
	  }

	  /**
	   * The base implementation of `_.matchesProperty` which does not clone `srcValue`.
	   *
	   * @private
	   * @param {string} path The path of the property to get.
	   * @param {*} srcValue The value to compare.
	   * @returns {Function} Returns the new function.
	   */
	  function baseMatchesProperty(path, srcValue) {
	    var isArr = isArray(path),
	        isCommon = isKey(path) && isStrictComparable(srcValue),
	        pathKey = path + '';

	    path = toPath(path);
	    return function (object) {
	      if (object == null) {
	        return false;
	      }
	      var key = pathKey;
	      object = toObject(object);
	      if ((isArr || !isCommon) && !(key in object)) {
	        object = path.length == 1 ? object : baseGet(object, baseSlice(path, 0, -1));
	        if (object == null) {
	          return false;
	        }
	        key = last(path);
	        object = toObject(object);
	      }
	      return object[key] === srcValue ? srcValue !== undefined || key in object : baseIsEqual(srcValue, object[key], undefined, true);
	    };
	  }

	  /**
	   * The base implementation of `_.property` without support for deep paths.
	   *
	   * @private
	   * @param {string} key The key of the property to get.
	   * @returns {Function} Returns the new function.
	   */
	  function baseProperty(key) {
	    return function (object) {
	      return object == null ? undefined : object[key];
	    };
	  }

	  /**
	   * A specialized version of `baseProperty` which supports deep paths.
	   *
	   * @private
	   * @param {Array|string} path The path of the property to get.
	   * @returns {Function} Returns the new function.
	   */
	  function basePropertyDeep(path) {
	    var pathKey = path + '';
	    path = toPath(path);
	    return function (object) {
	      return baseGet(object, path, pathKey);
	    };
	  }

	  /**
	   * The base implementation of `_.slice` without an iteratee call guard.
	   *
	   * @private
	   * @param {Array} array The array to slice.
	   * @param {number} [start=0] The start position.
	   * @param {number} [end=array.length] The end position.
	   * @returns {Array} Returns the slice of `array`.
	   */
	  function baseSlice(array, start, end) {
	    var index = -1,
	        length = array.length;

	    start = start == null ? 0 : +start || 0;
	    if (start < 0) {
	      start = -start > length ? 0 : length + start;
	    }
	    end = end === undefined || end > length ? length : +end || 0;
	    if (end < 0) {
	      end += length;
	    }
	    length = start > end ? 0 : end - start >>> 0;
	    start >>>= 0;

	    var result = Array(length);
	    while (++index < length) {
	      result[index] = array[index + start];
	    }
	    return result;
	  }

	  /**
	   * A specialized version of `baseCallback` which only supports `this` binding
	   * and specifying the number of arguments to provide to `func`.
	   *
	   * @private
	   * @param {Function} func The function to bind.
	   * @param {*} thisArg The `this` binding of `func`.
	   * @param {number} [argCount] The number of arguments to provide to `func`.
	   * @returns {Function} Returns the callback.
	   */
	  function bindCallback(func, thisArg, argCount) {
	    if (typeof func != 'function') {
	      return identity;
	    }
	    if (thisArg === undefined) {
	      return func;
	    }
	    switch (argCount) {
	      case 1:
	        return function (value) {
	          return func.call(thisArg, value);
	        };
	      case 3:
	        return function (value, index, collection) {
	          return func.call(thisArg, value, index, collection);
	        };
	      case 4:
	        return function (accumulator, value, index, collection) {
	          return func.call(thisArg, accumulator, value, index, collection);
	        };
	      case 5:
	        return function (value, other, key, object, source) {
	          return func.call(thisArg, value, other, key, object, source);
	        };
	    }
	    return function () {
	      return func.apply(thisArg, arguments);
	    };
	  }

	  /**
	   * Creates a clone of the given array buffer.
	   *
	   * @private
	   * @param {ArrayBuffer} buffer The array buffer to clone.
	   * @returns {ArrayBuffer} Returns the cloned array buffer.
	   */
	  function bufferClone(buffer) {
	    var result = new ArrayBuffer(buffer.byteLength),
	        view = new Uint8Array(result);

	    view.set(new Uint8Array(buffer));
	    return result;
	  }

	  /**
	   * Creates a `baseEach` or `baseEachRight` function.
	   *
	   * @private
	   * @param {Function} eachFunc The function to iterate over a collection.
	   * @param {boolean} [fromRight] Specify iterating from right to left.
	   * @returns {Function} Returns the new base function.
	   */
	  function createBaseEach(eachFunc, fromRight) {
	    return function (collection, iteratee) {
	      var length = collection ? getLength(collection) : 0;
	      if (!isLength(length)) {
	        return eachFunc(collection, iteratee);
	      }
	      var index = fromRight ? length : -1,
	          iterable = toObject(collection);

	      while (fromRight ? index-- : ++index < length) {
	        if (iteratee(iterable[index], index, iterable) === false) {
	          break;
	        }
	      }
	      return collection;
	    };
	  }

	  /**
	   * Creates a base function for `_.forIn` or `_.forInRight`.
	   *
	   * @private
	   * @param {boolean} [fromRight] Specify iterating from right to left.
	   * @returns {Function} Returns the new base function.
	   */
	  function createBaseFor(fromRight) {
	    return function (object, iteratee, keysFunc) {
	      var iterable = toObject(object),
	          props = keysFunc(object),
	          length = props.length,
	          index = fromRight ? length : -1;

	      while (fromRight ? index-- : ++index < length) {
	        var key = props[index];
	        if (iteratee(iterable[key], key, iterable) === false) {
	          break;
	        }
	      }
	      return object;
	    };
	  }

	  /**
	   * Creates a function for `_.forEach` or `_.forEachRight`.
	   *
	   * @private
	   * @param {Function} arrayFunc The function to iterate over an array.
	   * @param {Function} eachFunc The function to iterate over a collection.
	   * @returns {Function} Returns the new each function.
	   */
	  function createForEach(arrayFunc, eachFunc) {
	    return function (collection, iteratee, thisArg) {
	      return typeof iteratee == 'function' && thisArg === undefined && isArray(collection) ? arrayFunc(collection, iteratee) : eachFunc(collection, bindCallback(iteratee, thisArg, 3));
	    };
	  }

	  /**
	   * Creates a function for `_.mapKeys` or `_.mapValues`.
	   *
	   * @private
	   * @param {boolean} [isMapKeys] Specify mapping keys instead of values.
	   * @returns {Function} Returns the new map function.
	   */
	  function createObjectMapper(isMapKeys) {
	    return function (object, iteratee, thisArg) {
	      var result = {};
	      iteratee = getCallback(iteratee, thisArg, 3);

	      baseForOwn(object, function (value, key, object) {
	        var mapped = iteratee(value, key, object);
	        key = isMapKeys ? mapped : key;
	        value = isMapKeys ? value : mapped;
	        result[key] = value;
	      });
	      return result;
	    };
	  }

	  /**
	   * A specialized version of `baseIsEqualDeep` for arrays with support for
	   * partial deep comparisons.
	   *
	   * @private
	   * @param {Array} array The array to compare.
	   * @param {Array} other The other array to compare.
	   * @param {Function} equalFunc The function to determine equivalents of values.
	   * @param {Function} [customizer] The function to customize comparing arrays.
	   * @param {boolean} [isLoose] Specify performing partial comparisons.
	   * @param {Array} [stackA] Tracks traversed `value` objects.
	   * @param {Array} [stackB] Tracks traversed `other` objects.
	   * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
	   */
	  function equalArrays(array, other, equalFunc, customizer, isLoose, stackA, stackB) {
	    var index = -1,
	        arrLength = array.length,
	        othLength = other.length;

	    if (arrLength != othLength && !(isLoose && othLength > arrLength)) {
	      return false;
	    }
	    // Ignore non-index properties.
	    while (++index < arrLength) {
	      var arrValue = array[index],
	          othValue = other[index],
	          result = customizer ? customizer(isLoose ? othValue : arrValue, isLoose ? arrValue : othValue, index) : undefined;

	      if (result !== undefined) {
	        if (result) {
	          continue;
	        }
	        return false;
	      }
	      // Recursively compare arrays (susceptible to call stack limits).
	      if (isLoose) {
	        if (!arraySome(other, function (othValue) {
	          return arrValue === othValue || equalFunc(arrValue, othValue, customizer, isLoose, stackA, stackB);
	        })) {
	          return false;
	        }
	      } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, customizer, isLoose, stackA, stackB))) {
	        return false;
	      }
	    }
	    return true;
	  }

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
	   * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	   */
	  function equalByTag(object, other, tag) {
	    switch (tag) {
	      case boolTag:
	      case dateTag:
	        // Coerce dates and booleans to numbers, dates to milliseconds and booleans
	        // to `1` or `0` treating invalid dates coerced to `NaN` as not equal.
	        return +object == +other;

	      case errorTag:
	        return object.name == other.name && object.message == other.message;

	      case numberTag:
	        // Treat `NaN` vs. `NaN` as equal.
	        return object != +object ? other != +other : object == +other;

	      case regexpTag:
	      case stringTag:
	        // Coerce regexes to strings and treat strings primitives and string
	        // objects as equal. See https://es5.github.io/#x15.10.6.4 for more details.
	        return object == other + '';
	    }
	    return false;
	  }

	  /**
	   * A specialized version of `baseIsEqualDeep` for objects with support for
	   * partial deep comparisons.
	   *
	   * @private
	   * @param {Object} object The object to compare.
	   * @param {Object} other The other object to compare.
	   * @param {Function} equalFunc The function to determine equivalents of values.
	   * @param {Function} [customizer] The function to customize comparing values.
	   * @param {boolean} [isLoose] Specify performing partial comparisons.
	   * @param {Array} [stackA] Tracks traversed `value` objects.
	   * @param {Array} [stackB] Tracks traversed `other` objects.
	   * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	   */
	  function equalObjects(object, other, equalFunc, customizer, isLoose, stackA, stackB) {
	    var objProps = keys(object),
	        objLength = objProps.length,
	        othProps = keys(other),
	        othLength = othProps.length;

	    if (objLength != othLength && !isLoose) {
	      return false;
	    }
	    var index = objLength;
	    while (index--) {
	      var key = objProps[index];
	      if (!(isLoose ? key in other : hasOwnProperty.call(other, key))) {
	        return false;
	      }
	    }
	    var skipCtor = isLoose;
	    while (++index < objLength) {
	      key = objProps[index];
	      var objValue = object[key],
	          othValue = other[key],
	          result = customizer ? customizer(isLoose ? othValue : objValue, isLoose ? objValue : othValue, key) : undefined;

	      // Recursively compare objects (susceptible to call stack limits).
	      if (!(result === undefined ? equalFunc(objValue, othValue, customizer, isLoose, stackA, stackB) : result)) {
	        return false;
	      }
	      skipCtor || (skipCtor = key == 'constructor');
	    }
	    if (!skipCtor) {
	      var objCtor = object.constructor,
	          othCtor = other.constructor;

	      // Non `Object` object instances with different constructors are not equal.
	      if (objCtor != othCtor && ('constructor' in object && 'constructor' in other) && !(typeof objCtor == 'function' && objCtor instanceof objCtor && typeof othCtor == 'function' && othCtor instanceof othCtor)) {
	        return false;
	      }
	    }
	    return true;
	  }

	  /**
	   * Gets the appropriate "callback" function. If the `_.callback` method is
	   * customized this function returns the custom method, otherwise it returns
	   * the `baseCallback` function. If arguments are provided the chosen function
	   * is invoked with them and its result is returned.
	   *
	   * @private
	   * @returns {Function} Returns the chosen function or its result.
	   */
	  function getCallback(func, thisArg, argCount) {
	    var result = lodash.callback || callback;
	    result = result === callback ? baseCallback : result;
	    return argCount ? result(func, thisArg, argCount) : result;
	  }

	  /**
	   * Gets the "length" property value of `object`.
	   *
	   * **Note:** This function is used to avoid a [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792)
	   * that affects Safari on at least iOS 8.1-8.3 ARM64.
	   *
	   * @private
	   * @param {Object} object The object to query.
	   * @returns {*} Returns the "length" value.
	   */
	  var getLength = baseProperty('length');

	  /**
	   * Gets the propery names, values, and compare flags of `object`.
	   *
	   * @private
	   * @param {Object} object The object to query.
	   * @returns {Array} Returns the match data of `object`.
	   */
	  function getMatchData(object) {
	    var result = pairs(object),
	        length = result.length;

	    while (length--) {
	      result[length][2] = isStrictComparable(result[length][1]);
	    }
	    return result;
	  }

	  /**
	   * Gets the native function at `key` of `object`.
	   *
	   * @private
	   * @param {Object} object The object to query.
	   * @param {string} key The key of the method to get.
	   * @returns {*} Returns the function if it's native, else `undefined`.
	   */
	  function getNative(object, key) {
	    var value = object == null ? undefined : object[key];
	    return isNative(value) ? value : undefined;
	  }

	  /**
	   * Initializes an array clone.
	   *
	   * @private
	   * @param {Array} array The array to clone.
	   * @returns {Array} Returns the initialized clone.
	   */
	  function initCloneArray(array) {
	    var length = array.length,
	        result = new array.constructor(length);

	    // Add array properties assigned by `RegExp#exec`.
	    if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
	      result.index = array.index;
	      result.input = array.input;
	    }
	    return result;
	  }

	  /**
	   * Initializes an object clone.
	   *
	   * @private
	   * @param {Object} object The object to clone.
	   * @returns {Object} Returns the initialized clone.
	   */
	  function initCloneObject(object) {
	    var Ctor = object.constructor;
	    if (!(typeof Ctor == 'function' && Ctor instanceof Ctor)) {
	      Ctor = Object;
	    }
	    return new Ctor();
	  }

	  /**
	   * Initializes an object clone based on its `toStringTag`.
	   *
	   * **Note:** This function only supports cloning values with tags of
	   * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	   *
	   * @private
	   * @param {Object} object The object to clone.
	   * @param {string} tag The `toStringTag` of the object to clone.
	   * @param {boolean} [isDeep] Specify a deep clone.
	   * @returns {Object} Returns the initialized clone.
	   */
	  function initCloneByTag(object, tag, isDeep) {
	    var Ctor = object.constructor;
	    switch (tag) {
	      case arrayBufferTag:
	        return bufferClone(object);

	      case boolTag:
	      case dateTag:
	        return new Ctor(+object);

	      case float32Tag:case float64Tag:
	      case int8Tag:case int16Tag:case int32Tag:
	      case uint8Tag:case uint8ClampedTag:case uint16Tag:case uint32Tag:
	        var buffer = object.buffer;
	        return new Ctor(isDeep ? bufferClone(buffer) : buffer, object.byteOffset, object.length);

	      case numberTag:
	      case stringTag:
	        return new Ctor(object);

	      case regexpTag:
	        var result = new Ctor(object.source, reFlags.exec(object));
	        result.lastIndex = object.lastIndex;
	    }
	    return result;
	  }

	  /**
	   * Checks if `value` is array-like.
	   *
	   * @private
	   * @param {*} value The value to check.
	   * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	   */
	  function isArrayLike(value) {
	    return value != null && isLength(getLength(value));
	  }

	  /**
	   * Checks if `value` is a valid array-like index.
	   *
	   * @private
	   * @param {*} value The value to check.
	   * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	   * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	   */
	  function isIndex(value, length) {
	    value = typeof value == 'number' || reIsUint.test(value) ? +value : -1;
	    length = length == null ? MAX_SAFE_INTEGER : length;
	    return value > -1 && value % 1 == 0 && value < length;
	  }

	  /**
	   * Checks if the provided arguments are from an iteratee call.
	   *
	   * @private
	   * @param {*} value The potential iteratee value argument.
	   * @param {*} index The potential iteratee index or key argument.
	   * @param {*} object The potential iteratee object argument.
	   * @returns {boolean} Returns `true` if the arguments are from an iteratee call, else `false`.
	   */
	  function isIterateeCall(value, index, object) {
	    if (!isObject(object)) {
	      return false;
	    }
	    var type = typeof index;
	    if (type == 'number' ? isArrayLike(object) && isIndex(index, object.length) : type == 'string' && index in object) {
	      var other = object[index];
	      return value === value ? value === other : other !== other;
	    }
	    return false;
	  }

	  /**
	   * Checks if `value` is a property name and not a property path.
	   *
	   * @private
	   * @param {*} value The value to check.
	   * @param {Object} [object] The object to query keys on.
	   * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
	   */
	  function isKey(value, object) {
	    var type = typeof value;
	    if (type == 'string' && reIsPlainProp.test(value) || type == 'number') {
	      return true;
	    }
	    if (isArray(value)) {
	      return false;
	    }
	    var result = !reIsDeepProp.test(value);
	    return result || object != null && value in toObject(object);
	  }

	  /**
	   * Checks if `value` is a valid array-like length.
	   *
	   * **Note:** This function is based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
	   *
	   * @private
	   * @param {*} value The value to check.
	   * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	   */
	  function isLength(value) {
	    return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	  }

	  /**
	   * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
	   *
	   * @private
	   * @param {*} value The value to check.
	   * @returns {boolean} Returns `true` if `value` if suitable for strict
	   *  equality comparisons, else `false`.
	   */
	  function isStrictComparable(value) {
	    return value === value && !isObject(value);
	  }

	  /**
	   * A fallback implementation of `Object.keys` which creates an array of the
	   * own enumerable property names of `object`.
	   *
	   * @private
	   * @param {Object} object The object to query.
	   * @returns {Array} Returns the array of property names.
	   */
	  function shimKeys(object) {
	    var props = keysIn(object),
	        propsLength = props.length,
	        length = propsLength && object.length;

	    var allowIndexes = !!length && isLength(length) && (isArray(object) || isArguments(object));

	    var index = -1,
	        result = [];

	    while (++index < propsLength) {
	      var key = props[index];
	      if (allowIndexes && isIndex(key, length) || hasOwnProperty.call(object, key)) {
	        result.push(key);
	      }
	    }
	    return result;
	  }

	  /**
	   * Converts `value` to an object if it's not one.
	   *
	   * @private
	   * @param {*} value The value to process.
	   * @returns {Object} Returns the object.
	   */
	  function toObject(value) {
	    return isObject(value) ? value : Object(value);
	  }

	  /**
	   * Converts `value` to property path array if it's not one.
	   *
	   * @private
	   * @param {*} value The value to process.
	   * @returns {Array} Returns the property path array.
	   */
	  function toPath(value) {
	    if (isArray(value)) {
	      return value;
	    }
	    var result = [];
	    baseToString(value).replace(rePropName, function (match, number, quote, string) {
	      result.push(quote ? string.replace(reEscapeChar, '$1') : number || match);
	    });
	    return result;
	  }

	  /*------------------------------------------------------------------------*/

	  /**
	   * Gets the last element of `array`.
	   *
	   * @static
	   * @memberOf _
	   * @category Array
	   * @param {Array} array The array to query.
	   * @returns {*} Returns the last element of `array`.
	   * @example
	   *
	   * _.last([1, 2, 3]);
	   * // => 3
	   */
	  function last(array) {
	    var length = array ? array.length : 0;
	    return length ? array[length - 1] : undefined;
	  }

	  /*------------------------------------------------------------------------*/

	  /**
	   * Iterates over elements of `collection` invoking `iteratee` for each element.
	   * The `iteratee` is bound to `thisArg` and invoked with three arguments:
	   * (value, index|key, collection). Iteratee functions may exit iteration early
	   * by explicitly returning `false`.
	   *
	   * **Note:** As with other "Collections" methods, objects with a "length" property
	   * are iterated like arrays. To avoid this behavior `_.forIn` or `_.forOwn`
	   * may be used for object iteration.
	   *
	   * @static
	   * @memberOf _
	   * @alias each
	   * @category Collection
	   * @param {Array|Object|string} collection The collection to iterate over.
	   * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	   * @param {*} [thisArg] The `this` binding of `iteratee`.
	   * @returns {Array|Object|string} Returns `collection`.
	   * @example
	   *
	   * _([1, 2]).forEach(function(n) {
	   *   console.log(n);
	   * }).value();
	   * // => logs each value from left to right and returns the array
	   *
	   * _.forEach({ 'a': 1, 'b': 2 }, function(n, key) {
	   *   console.log(n, key);
	   * });
	   * // => logs each value-key pair and returns the object (iteration order is not guaranteed)
	   */
	  var forEach = createForEach(arrayEach, baseEach);

	  /*------------------------------------------------------------------------*/

	  /**
	   * Checks if `value` is classified as an `arguments` object.
	   *
	   * @static
	   * @memberOf _
	   * @category Lang
	   * @param {*} value The value to check.
	   * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	   * @example
	   *
	   * _.isArguments(function() { return arguments; }());
	   * // => true
	   *
	   * _.isArguments([1, 2, 3]);
	   * // => false
	   */
	  function isArguments(value) {
	    return isObjectLike(value) && isArrayLike(value) && hasOwnProperty.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
	  }

	  /**
	   * Checks if `value` is classified as an `Array` object.
	   *
	   * @static
	   * @memberOf _
	   * @category Lang
	   * @param {*} value The value to check.
	   * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	   * @example
	   *
	   * _.isArray([1, 2, 3]);
	   * // => true
	   *
	   * _.isArray(function() { return arguments; }());
	   * // => false
	   */
	  var isArray = nativeIsArray || function (value) {
	    return isObjectLike(value) && isLength(value.length) && objToString.call(value) == arrayTag;
	  };

	  /**
	   * Checks if `value` is classified as a `Function` object.
	   *
	   * @static
	   * @memberOf _
	   * @category Lang
	   * @param {*} value The value to check.
	   * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	   * @example
	   *
	   * _.isFunction(_);
	   * // => true
	   *
	   * _.isFunction(/abc/);
	   * // => false
	   */
	  function isFunction(value) {
	    // The use of `Object#toString` avoids issues with the `typeof` operator
	    // in older versions of Chrome and Safari which return 'function' for regexes
	    // and Safari 8 which returns 'object' for typed array constructors.
	    return isObject(value) && objToString.call(value) == funcTag;
	  }

	  /**
	   * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	   * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	   *
	   * @static
	   * @memberOf _
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
	   * _.isObject(1);
	   * // => false
	   */
	  function isObject(value) {
	    // Avoid a V8 JIT bug in Chrome 19-20.
	    // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	    var type = typeof value;
	    return !!value && (type == 'object' || type == 'function');
	  }

	  /**
	   * Checks if `value` is a native function.
	   *
	   * @static
	   * @memberOf _
	   * @category Lang
	   * @param {*} value The value to check.
	   * @returns {boolean} Returns `true` if `value` is a native function, else `false`.
	   * @example
	   *
	   * _.isNative(Array.prototype.push);
	   * // => true
	   *
	   * _.isNative(_);
	   * // => false
	   */
	  function isNative(value) {
	    if (value == null) {
	      return false;
	    }
	    if (isFunction(value)) {
	      return reIsNative.test(fnToString.call(value));
	    }
	    return isObjectLike(value) && reIsHostCtor.test(value);
	  }

	  /**
	   * Checks if `value` is classified as a typed array.
	   *
	   * @static
	   * @memberOf _
	   * @category Lang
	   * @param {*} value The value to check.
	   * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	   * @example
	   *
	   * _.isTypedArray(new Uint8Array);
	   * // => true
	   *
	   * _.isTypedArray([]);
	   * // => false
	   */
	  function isTypedArray(value) {
	    return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[objToString.call(value)];
	  }

	  /*------------------------------------------------------------------------*/

	  /**
	   * Creates an array of the own enumerable property names of `object`.
	   *
	   * **Note:** Non-object values are coerced to objects. See the
	   * [ES spec](http://ecma-international.org/ecma-262/6.0/#sec-object.keys)
	   * for more details.
	   *
	   * @static
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
	  var keys = !nativeKeys ? shimKeys : function (object) {
	    var Ctor = object == null ? undefined : object.constructor;
	    if (typeof Ctor == 'function' && Ctor.prototype === object || typeof object != 'function' && isArrayLike(object)) {
	      return shimKeys(object);
	    }
	    return isObject(object) ? nativeKeys(object) : [];
	  };

	  /**
	   * Creates an array of the own and inherited enumerable property names of `object`.
	   *
	   * **Note:** Non-object values are coerced to objects.
	   *
	   * @static
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
	   * _.keysIn(new Foo);
	   * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
	   */
	  function keysIn(object) {
	    if (object == null) {
	      return [];
	    }
	    if (!isObject(object)) {
	      object = Object(object);
	    }
	    var length = object.length;
	    length = length && isLength(length) && (isArray(object) || isArguments(object)) && length || 0;

	    var Ctor = object.constructor,
	        index = -1,
	        isProto = typeof Ctor == 'function' && Ctor.prototype === object,
	        result = Array(length),
	        skipIndexes = length > 0;

	    while (++index < length) {
	      result[index] = index + '';
	    }
	    for (var key in object) {
	      if (!(skipIndexes && isIndex(key, length)) && !(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
	        result.push(key);
	      }
	    }
	    return result;
	  }

	  /**
	   * Creates an object with the same keys as `object` and values generated by
	   * running each own enumerable property of `object` through `iteratee`. The
	   * iteratee function is bound to `thisArg` and invoked with three arguments:
	   * (value, key, object).
	   *
	   * If a property name is provided for `iteratee` the created `_.property`
	   * style callback returns the property value of the given element.
	   *
	   * If a value is also provided for `thisArg` the created `_.matchesProperty`
	   * style callback returns `true` for elements that have a matching property
	   * value, else `false`.
	   *
	   * If an object is provided for `iteratee` the created `_.matches` style
	   * callback returns `true` for elements that have the properties of the given
	   * object, else `false`.
	   *
	   * @static
	   * @memberOf _
	   * @category Object
	   * @param {Object} object The object to iterate over.
	   * @param {Function|Object|string} [iteratee=_.identity] The function invoked
	   *  per iteration.
	   * @param {*} [thisArg] The `this` binding of `iteratee`.
	   * @returns {Object} Returns the new mapped object.
	   * @example
	   *
	   * _.mapValues({ 'a': 1, 'b': 2 }, function(n) {
	   *   return n * 3;
	   * });
	   * // => { 'a': 3, 'b': 6 }
	   *
	   * var users = {
	   *   'fred':    { 'user': 'fred',    'age': 40 },
	   *   'pebbles': { 'user': 'pebbles', 'age': 1 }
	   * };
	   *
	   * // using the `_.property` callback shorthand
	   * _.mapValues(users, 'age');
	   * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
	   */
	  var mapValues = createObjectMapper();

	  /**
	   * Creates a two dimensional array of the key-value pairs for `object`,
	   * e.g. `[[key1, value1], [key2, value2]]`.
	   *
	   * @static
	   * @memberOf _
	   * @category Object
	   * @param {Object} object The object to query.
	   * @returns {Array} Returns the new array of key-value pairs.
	   * @example
	   *
	   * _.pairs({ 'barney': 36, 'fred': 40 });
	   * // => [['barney', 36], ['fred', 40]] (iteration order is not guaranteed)
	   */
	  function pairs(object) {
	    object = toObject(object);

	    var index = -1,
	        props = keys(object),
	        length = props.length,
	        result = Array(length);

	    while (++index < length) {
	      var key = props[index];
	      result[index] = [key, object[key]];
	    }
	    return result;
	  }

	  /*------------------------------------------------------------------------*/

	  /**
	   * Creates a function that invokes `func` with the `this` binding of `thisArg`
	   * and arguments of the created function. If `func` is a property name the
	   * created callback returns the property value for a given element. If `func`
	   * is an object the created callback returns `true` for elements that contain
	   * the equivalent object properties, otherwise it returns `false`.
	   *
	   * @static
	   * @memberOf _
	   * @alias iteratee
	   * @category Utility
	   * @param {*} [func=_.identity] The value to convert to a callback.
	   * @param {*} [thisArg] The `this` binding of `func`.
	   * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	   * @returns {Function} Returns the callback.
	   * @example
	   *
	   * var users = [
	   *   { 'user': 'barney', 'age': 36 },
	   *   { 'user': 'fred',   'age': 40 }
	   * ];
	   *
	   * // wrap to create custom callback shorthands
	   * _.callback = _.wrap(_.callback, function(callback, func, thisArg) {
	   *   var match = /^(.+?)__([gl]t)(.+)$/.exec(func);
	   *   if (!match) {
	   *     return callback(func, thisArg);
	   *   }
	   *   return function(object) {
	   *     return match[2] == 'gt'
	   *       ? object[match[1]] > match[3]
	   *       : object[match[1]] < match[3];
	   *   };
	   * });
	   *
	   * _.filter(users, 'age__gt36');
	   * // => [{ 'user': 'fred', 'age': 40 }]
	   */
	  function callback(func, thisArg, guard) {
	    if (guard && isIterateeCall(func, thisArg, guard)) {
	      thisArg = undefined;
	    }
	    return isObjectLike(func) ? matches(func) : baseCallback(func, thisArg);
	  }

	  /**
	   * This method returns the first argument provided to it.
	   *
	   * @static
	   * @memberOf _
	   * @category Utility
	   * @param {*} value Any value.
	   * @returns {*} Returns `value`.
	   * @example
	   *
	   * var object = { 'user': 'fred' };
	   *
	   * _.identity(object) === object;
	   * // => true
	   */
	  function identity(value) {
	    return value;
	  }

	  /**
	   * Creates a function that performs a deep comparison between a given object
	   * and `source`, returning `true` if the given object has equivalent property
	   * values, else `false`.
	   *
	   * **Note:** This method supports comparing arrays, booleans, `Date` objects,
	   * numbers, `Object` objects, regexes, and strings. Objects are compared by
	   * their own, not inherited, enumerable properties. For comparing a single
	   * own or inherited property value see `_.matchesProperty`.
	   *
	   * @static
	   * @memberOf _
	   * @category Utility
	   * @param {Object} source The object of property values to match.
	   * @returns {Function} Returns the new function.
	   * @example
	   *
	   * var users = [
	   *   { 'user': 'barney', 'age': 36, 'active': true },
	   *   { 'user': 'fred',   'age': 40, 'active': false }
	   * ];
	   *
	   * _.filter(users, _.matches({ 'age': 40, 'active': false }));
	   * // => [{ 'user': 'fred', 'age': 40, 'active': false }]
	   */
	  function matches(source) {
	    return baseMatches(baseClone(source, true));
	  }

	  /**
	   * Creates a function that returns the property value at `path` on a
	   * given object.
	   *
	   * @static
	   * @memberOf _
	   * @category Utility
	   * @param {Array|string} path The path of the property to get.
	   * @returns {Function} Returns the new function.
	   * @example
	   *
	   * var objects = [
	   *   { 'a': { 'b': { 'c': 2 } } },
	   *   { 'a': { 'b': { 'c': 1 } } }
	   * ];
	   *
	   * _.map(objects, _.property('a.b.c'));
	   * // => [2, 1]
	   *
	   * _.pluck(_.sortBy(objects, _.property(['a', 'b', 'c'])), 'a.b.c');
	   * // => [1, 2]
	   */
	  function property(path) {
	    return isKey(path) ? baseProperty(path) : basePropertyDeep(path);
	  }

	  /*------------------------------------------------------------------------*/

	  // Add functions that return wrapped values when chaining.
	  lodash.callback = callback;
	  lodash.forEach = forEach;
	  lodash.keys = keys;
	  lodash.keysIn = keysIn;
	  lodash.mapValues = mapValues;
	  lodash.matches = matches;
	  lodash.pairs = pairs;
	  lodash.property = property;

	  // Add aliases.
	  lodash.each = forEach;
	  lodash.iteratee = callback;

	  /*------------------------------------------------------------------------*/

	  // Add functions that return unwrapped values when chaining.
	  lodash.identity = identity;
	  lodash.isArguments = isArguments;
	  lodash.isArray = isArray;
	  lodash.isFunction = isFunction;
	  lodash.isNative = isNative;
	  lodash.isObject = isObject;
	  lodash.isTypedArray = isTypedArray;
	  lodash.last = last;

	  /*------------------------------------------------------------------------*/

	  /**
	   * The semantic version number.
	   *
	   * @static
	   * @memberOf _
	   * @type string
	   */
	  lodash.VERSION = VERSION;

	  /*--------------------------------------------------------------------------*/

	  // Some AMD build optimizers like r.js check for condition patterns like the following:
	  if (true) {
	    // Expose lodash to the global object when an AMD loader is present to avoid
	    // errors in cases where lodash is loaded by a script tag and not intended
	    // as an AMD module. See http://requirejs.org/docs/errors.html#mismatch for
	    // more details.
	    root._ = lodash;

	    // Define as an anonymous module so, through path mapping, it can be
	    // referenced as the "underscore" module.
	    !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
	      return lodash;
	    }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  }
	  // Check for `exports` after `define` in case a build optimizer adds an `exports` object.
	  else if (freeExports && freeModule) {
	      // Export for Node.js or RingoJS.
	      if (moduleExports) {
	        (freeModule.exports = lodash)._ = lodash;
	      }
	      // Export for Rhino with CommonJS support.
	      else {
	          freeExports._ = lodash;
	        }
	    } else {
	      // Export for a browser or Rhino.
	      root._ = lodash;
	    }
	}).call(undefined);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(119)(module), (function() { return this; }())))

/***/ },
/* 119 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _get = __webpack_require__(4)['default'];

	var _inherits = __webpack_require__(18)['default'];

	var _createClass = __webpack_require__(28)['default'];

	var _classCallCheck = __webpack_require__(31)['default'];

	var _extends = __webpack_require__(32)['default'];

	var _objectWithoutProperties = __webpack_require__(38)['default'];

	var _interopRequireDefault = __webpack_require__(39)['default'];

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _react = __webpack_require__(40);

	var _react2 = _interopRequireDefault(_react);

	var _modules = __webpack_require__(64);

	var _classnames = __webpack_require__(42);

	var _classnames2 = _interopRequireDefault(_classnames);

	var Checkboxes = (function (_Component) {
	    _inherits(Checkboxes, _Component);

	    _createClass(Checkboxes, null, [{
	        key: 'propTypes',
	        value: {
	            defaultClasses: _react2['default'].PropTypes.bool,
	            grouped: _react2['default'].PropTypes.bool,
	            inline: _react2['default'].PropTypes.bool,
	            tag: _react2['default'].PropTypes.func
	        },
	        enumerable: true
	    }, {
	        key: 'defaultProps',
	        value: {
	            defaultClasses: true,
	            tag: _react2['default'].DOM.div
	        },
	        enumerable: true
	    }, {
	        key: 'childContextTypes',
	        value: {
	            isCheckboxesChild: _react2['default'].PropTypes.bool
	        },
	        enumerable: true
	    }]);

	    function Checkboxes(props) {
	        _classCallCheck(this, Checkboxes);

	        _get(Object.getPrototypeOf(Checkboxes.prototype), 'constructor', this).call(this, props);

	        var active = this.props.radio ? '' : [];

	        this.state = {
	            currentActive: active
	        };
	    }

	    _createClass(Checkboxes, [{
	        key: 'getChildContext',
	        value: function getChildContext() {
	            return {
	                isCheckboxesChild: true
	            };
	        }
	    }, {
	        key: 'onClick',
	        value: function onClick(key) {
	            // don't remove radio buttons if you click them twice
	            if (key === this.state.currentActive && this.props.radio) {
	                return;
	                // but do remove for everything else
	            } else {
	                    this.setCurrentActive(key);
	                }
	        }
	    }, {
	        key: 'renderChildren',
	        value: function renderChildren() {
	            var index = 0;
	            var element = null;

	            if (_react2['default'].Children.count(this.props.children) === 1) {
	                return this.cloneChild(index, _react2['default'].Children.only(this.props.children));
	            } else {
	                return _react2['default'].Children.map(this.props.children, (function (child) {
	                    if (child.type == _modules.Checkbox) {
	                        element = this.cloneChild(index, child);

	                        element = _react2['default'].DOM.div({
	                            key: index,
	                            className: 'field'
	                        }, element);

	                        index++;
	                    } else {
	                        element = child;
	                    }

	                    return element;
	                }).bind(this));
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var classes = {
	                // default
	                checkboxes: true,

	                // positioning

	                // types

	                // component

	                // variations
	                grouped: this.props.grouped,
	                inline: this.props.inline,
	                fields: _react2['default'].Children.count(this.props.children) > 1
	            };

	            return this.props.tag({
	                className: (0, _classnames2['default'])(this.props.className, classes)
	            }, this.renderChildren());
	        }

	        // clone a chid and update the props
	    }, {
	        key: 'cloneChild',
	        value: function cloneChild(index, child) {
	            var boundClick = this.onClick.bind(this, index);

	            var _props = this.props;
	            var children = _props.children;
	            var defaultClasses = _props.defaultClasses;
	            var tag = _props.tag;
	            var grouped = _props.grouped;
	            var inline = _props.inline;
	            var onClick = _props.onClick;

	            var other = _objectWithoutProperties(_props, ['children', 'defaultClasses', 'tag', 'grouped', 'inline', 'onClick']);

	            return _react2['default'].cloneElement(child, _extends({
	                key: index,
	                active: this.getCurrentActive(index),
	                onClick: boundClick,
	                radio: this.props.radio,
	                readOnly: this.props.readOnly || this.props.disabled
	            }, other));
	        }
	    }, {
	        key: 'getCurrentActive',
	        value: function getCurrentActive(index) {
	            var state = this.state.currentActive;
	            var active = false;

	            if (Array.isArray(state)) {
	                active = state.indexOf(index) > -1 ? true : false;
	            } else {
	                active = state == index ? true : false;
	            }

	            return active;
	        }
	    }, {
	        key: 'setCurrentActive',
	        value: function setCurrentActive(index) {
	            var state = this.state.currentActive;

	            // should only be an array if it's checkbox, not radio
	            // IE 9+ for indexOf
	            if (Array.isArray(state)) {
	                if (state.indexOf(index) > -1) {
	                    state.splice(index, 1);
	                } else {
	                    state.push(index);
	                }
	                // it's a radio
	            } else {
	                    state = index;
	                }

	            this.setState({
	                currentActive: state
	            });
	        }
	    }]);

	    return Checkboxes;
	})(_react.Component);

	exports.Checkboxes = Checkboxes;

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _get = __webpack_require__(4)['default'];

	var _inherits = __webpack_require__(18)['default'];

	var _createClass = __webpack_require__(28)['default'];

	var _classCallCheck = __webpack_require__(31)['default'];

	var _extends = __webpack_require__(32)['default'];

	var _objectWithoutProperties = __webpack_require__(38)['default'];

	var _interopRequireDefault = __webpack_require__(39)['default'];

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _react = __webpack_require__(40);

	var _react2 = _interopRequireDefault(_react);

	var _modules = __webpack_require__(64);

	var _classnames = __webpack_require__(42);

	var _classnames2 = _interopRequireDefault(_classnames);

	var Checkbox = (function (_Component) {
	    _inherits(Checkbox, _Component);

	    _createClass(Checkbox, null, [{
	        key: 'propTypes',
	        value: {
	            active: _react2['default'].PropTypes.bool,
	            checked: _react2['default'].PropTypes.bool,
	            defaultClasses: _react2['default'].PropTypes.bool,
	            disabled: _react2['default'].PropTypes.bool,
	            radio: _react2['default'].PropTypes.bool,
	            readOnly: _react2['default'].PropTypes.bool,
	            slider: _react2['default'].PropTypes.bool,
	            tag: _react2['default'].PropTypes.func,
	            toggle: _react2['default'].PropTypes.bool
	        },
	        enumerable: true
	    }, {
	        key: 'contextTypes',
	        value: {
	            isCheckboxesChild: _react2['default'].PropTypes.bool
	        },
	        enumerable: true
	    }, {
	        key: 'defaultProps',
	        value: {
	            defaultClasses: true,
	            tag: _react2['default'].DOM.div
	        },
	        enumerable: true
	    }]);

	    function Checkbox(props) {
	        _classCallCheck(this, Checkbox);

	        _get(Object.getPrototypeOf(Checkbox.prototype), 'constructor', this).call(this, props);
	    }

	    _createClass(Checkbox, [{
	        key: 'renderCheckbox',
	        value: function renderCheckbox(classes) {
	            return this.props.tag({
	                className: (0, _classnames2['default'])(this.props.className, classes)
	            }, this.renderChildren());
	        }
	    }, {
	        key: 'renderCheckboxes',
	        value: function renderCheckboxes() {
	            var checkboxes = _react2['default'].createElement(
	                _modules.Checkboxes,
	                this.props,
	                _react2['default'].createElement(Checkbox, this.props)
	            );

	            return checkboxes;
	        }
	    }, {
	        key: 'renderChildren',
	        value: function renderChildren() {
	            var _props = this.props;
	            var active = _props.active;
	            var children = _props.children;
	            var defaultClasses = _props.defaultClasses;
	            var className = _props.className;
	            var onClick = _props.onClick;
	            var radio = _props.radio;
	            var slider = _props.slider;
	            var toggle = _props.toggle;
	            var tag = _props.tag;
	            var readOnly = _props.readOnly;
	            var checked = _props.checked;
	            var disabled = _props.disabled;

	            var other = _objectWithoutProperties(_props, ['active', 'children', 'defaultClasses', 'className', 'onClick', 'radio', 'slider', 'toggle', 'tag', 'readOnly', 'checked', 'disabled']);

	            var childElements = [_react2['default'].DOM.input(_extends({
	                type: 'checkbox',
	                key: 'input',
	                className: 'hidden',
	                checked: this.props.active && !this.props.readOnly
	            }, other)), _react2['default'].DOM.label({
	                key: 'label',
	                onClick: this.props.onClick
	            }, this.props.children)];

	            return childElements;
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var classes = {
	                // default
	                ui: this.props.defaultClasses,

	                // positioning

	                // types
	                radio: this.props.radio,

	                // variations
	                slider: this.props.slider,
	                toggle: this.props.toggle,

	                // state
	                'read-only': this.props.readOnly,
	                checked: this.props.active && !this.props.readOnly,
	                disabled: this.props.disabled,
	                indeterminate: this.props.indeterminate,

	                // component
	                checkbox: this.props.defaultClasses
	            };

	            return this.context.isCheckboxesChild ? this.renderCheckbox(classes) : this.renderCheckboxes();
	        }
	    }]);

	    return Checkbox;
	})(_react.Component);

	exports.Checkbox = Checkbox;

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _get = __webpack_require__(4)['default'];

	var _inherits = __webpack_require__(18)['default'];

	var _createClass = __webpack_require__(28)['default'];

	var _classCallCheck = __webpack_require__(31)['default'];

	var _extends = __webpack_require__(32)['default'];

	var _objectWithoutProperties = __webpack_require__(38)['default'];

	var _interopRequireDefault = __webpack_require__(39)['default'];

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _react = __webpack_require__(40);

	var _react2 = _interopRequireDefault(_react);

	var _utilities = __webpack_require__(41);

	var _elements = __webpack_require__(2);

	var _modules = __webpack_require__(64);

	var _classnames = __webpack_require__(42);

	var _classnames2 = _interopRequireDefault(_classnames);

	var Dimmer = (function (_Component) {
	    _inherits(Dimmer, _Component);

	    function Dimmer() {
	        _classCallCheck(this, Dimmer);

	        _get(Object.getPrototypeOf(Dimmer.prototype), 'constructor', this).apply(this, arguments);
	    }

	    _createClass(Dimmer, [{
	        key: 'getChildContext',
	        value: function getChildContext() {
	            return {
	                isDimmerChild: true
	            };
	        }
	    }, {
	        key: 'renderChildren',
	        value: function renderChildren() {
	            var children = this.props.children;

	            return (0, _utilities.getChild)(children, _elements.Content);
	        }
	    }, {
	        key: 'renderContent',
	        value: function renderContent() {
	            return (0, _utilities.getChild)(this.props.children, _elements.Content, false);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var dimClasses = {
	                ui: true,
	                dimmer: true,
	                transition: true,
	                visible: true,
	                active: true
	            };

	            var classes = {
	                // default
	                dimmable: this.props.defaultClasses,
	                dimmed: this.props.dimmed,

	                // positioning

	                // types
	                blurring: this.props.blurring,
	                inverted: this.props.inverted,
	                page: this.props.page

	                // component

	                // variations
	            };

	            // if it's attached or animated use a div instead of a button
	            var Tag = this.props.page ? _react2['default'].DOM.div : _react2['default'].createElement(_elements.Segment, null);
	            Tag = (0, _utilities.returnTag)(this.props.tag || Tag);

	            var _props = this.props;
	            var disabled = _props.disabled;
	            var inverted = _props.inverted;

	            var other = _objectWithoutProperties(_props, ['disabled', 'inverted']);

	            return Tag(_extends({
	                className: (0, _classnames2['default'])(this.props.className, classes)
	            }, other), [_react2['default'].createElement(
	                _modules.Animate,
	                { className: (0, _classnames2['default'])(dimClasses),
	                    key: 'animate',
	                    onFalse: 'fadeOut',
	                    onTrue: 'fadeIn',
	                    propName: 'dimmed',
	                    propState: this.props.dimmed
	                },
	                this.renderContent()
	            ), this.renderChildren()]);
	        }
	    }], [{
	        key: 'propTypes',
	        value: {
	            blurring: _react2['default'].PropTypes.bool,
	            defaultClasses: _react2['default'].PropTypes.bool,
	            disabled: _react2['default'].PropTypes.bool,
	            inverted: _react2['default'].PropTypes.bool,
	            page: _react2['default'].PropTypes.bool
	        },

	        // we don't want the ui in these circumstances
	        // any header/subheader under a header is a subheader
	        enumerable: true
	    }, {
	        key: 'childContextTypes',
	        value: {
	            isDimmerChild: _react2['default'].PropTypes.bool
	        },
	        enumerable: true
	    }, {
	        key: 'defaultProps',
	        value: {
	            defaultClasses: true
	        },
	        enumerable: true
	    }]);

	    return Dimmer;
	})(_react.Component);

	exports.Dimmer = Dimmer;

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _viewsCardCard = __webpack_require__(124);

	var _viewsCardCards = __webpack_require__(125);

	exports.Card = _viewsCardCard.Card;
	exports.Cards = _viewsCardCards.Cards;

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _get = __webpack_require__(4)['default'];

	var _inherits = __webpack_require__(18)['default'];

	var _createClass = __webpack_require__(28)['default'];

	var _classCallCheck = __webpack_require__(31)['default'];

	var _interopRequireDefault = __webpack_require__(39)['default'];

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _react = __webpack_require__(40);

	var _react2 = _interopRequireDefault(_react);

	// can't get import working?
	var classNames = __webpack_require__(42);

	var Card = (function (_Component) {
	    _inherits(Card, _Component);

	    _createClass(Card, null, [{
	        key: 'defaultProps',
	        value: {
	            defaultClasses: true
	        },
	        enumerable: true
	    }, {
	        key: 'propTypes',
	        value: {
	            centered: _react2['default'].PropTypes.bool,
	            col: _react2['default'].PropTypes.string,
	            color: _react2['default'].PropTypes.string,
	            doubling: _react2['default'].PropTypes.string,
	            defaultClasses: _react2['default'].PropTypes.bool,
	            fluid: _react2['default'].PropTypes.bool
	        },
	        enumerable: true
	    }, {
	        key: 'childContextTypes',
	        value: {
	            DisableUIClass: _react2['default'].PropTypes.bool
	        },
	        enumerable: true
	    }, {
	        key: 'contextTypes',
	        value: {
	            DisableUIClass: _react2['default'].PropTypes.bool
	        },
	        enumerable: true
	    }]);

	    function Card(props) {
	        _classCallCheck(this, Card);

	        _get(Object.getPrototypeOf(Card.prototype), 'constructor', this).call(this, props);
	    }

	    _createClass(Card, [{
	        key: 'getChildContext',
	        value: function getChildContext() {
	            return {
	                DisableUIClass: true
	            };
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var classes = {
	                // default
	                ui: this.props.defaultClasses && !this.context.isChildCard,

	                // component
	                card: this.props.defaultClasses,

	                // variations
	                centered: this.props.centered,
	                doubling: this.props.doubling,
	                color: this.props.color,
	                fluid: this.props.fluid
	            };

	            classes[this.props.color] = this.props.color ? true : false;
	            classes[this.props.col] = this.props.col ? true : false;
	            classes[this.props.doubling] = this.props.doubling ? true : false;

	            return _react2['default'].createElement(
	                'div',
	                { className: classNames(this.props.className, classes) },
	                this.props.children
	            );
	        }
	    }]);

	    return Card;
	})(_react.Component);

	exports.Card = Card;

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _get = __webpack_require__(4)['default'];

	var _inherits = __webpack_require__(18)['default'];

	var _createClass = __webpack_require__(28)['default'];

	var _classCallCheck = __webpack_require__(31)['default'];

	var _interopRequireDefault = __webpack_require__(39)['default'];

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _react = __webpack_require__(40);

	var _react2 = _interopRequireDefault(_react);

	// can't get import working?
	var classNames = __webpack_require__(42);

	var Cards = (function (_Component) {
	  _inherits(Cards, _Component);

	  _createClass(Cards, null, [{
	    key: 'defaultProps',
	    value: {
	      defaultClasses: true
	    },
	    enumerable: true
	  }, {
	    key: 'propTypes',
	    value: {
	      defaultClasses: _react2['default'].PropTypes.bool,
	      link: _react2['default'].PropTypes.bool
	    },
	    enumerable: true
	  }, {
	    key: 'childContextTypes',
	    value: {
	      DisableUIClass: _react2['default'].PropTypes.bool
	    },
	    enumerable: true
	  }]);

	  function Cards(props) {
	    _classCallCheck(this, Cards);

	    _get(Object.getPrototypeOf(Cards.prototype), 'constructor', this).call(this, props);
	  }

	  _createClass(Cards, [{
	    key: 'getChildContext',
	    value: function getChildContext() {
	      return {
	        DisableUIClass: true
	      };
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var classes = {
	        // default
	        ui: this.props.defaultClasses,

	        // types
	        link: this.props.link || this.props.onClick,

	        // component
	        cards: this.props.defaultClasses
	      };

	      return _react2['default'].createElement(
	        'div',
	        { className: classNames(this.props.className, classes) },
	        this.props.children
	      );
	    }
	  }]);

	  return Cards;
	})(_react.Component);

	exports.Cards = Cards;

/***/ }
/******/ ]);