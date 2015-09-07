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

	exports.elements = elements;

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

	var _elementsButtonButtons = __webpack_require__(35);

	var _elementsDividerDivider = __webpack_require__(36);

	var _elementsFlagFlag = __webpack_require__(37);

	var _elementsHeaderHeader = __webpack_require__(44);

	var _elementsHeaderSubheader = __webpack_require__(45);

	var _elementsIconIcon = __webpack_require__(46);

	var _elementsImageImage = __webpack_require__(47);

	var _elementsImageImages = __webpack_require__(48);

	var _elementsInputInput = __webpack_require__(49);

	var _elementsLabelDetail = __webpack_require__(50);

	var _elementsLabelLabel = __webpack_require__(52);

	var _elementsLabelLabels = __webpack_require__(53);

	var _elementsListList = __webpack_require__(54);

	var _elementsListItem = __webpack_require__(55);

	// import { Loader } from './elements/loader/loader';

	var _elementsRailRail = __webpack_require__(56);

	var _elementsRevealReveal = __webpack_require__(57);

	var _elementsSegmentSegment = __webpack_require__(58);

	var _elementsSegmentSegments = __webpack_require__(59);

	var _elementsUtilitiesContent = __webpack_require__(60);

	var _elementsUtilitiesDescription = __webpack_require__(61);

	exports.Button = _elementsButtonButton.Button;
	exports.Buttons = _elementsButtonButtons.Buttons;
	exports.Divider = _elementsDividerDivider.Divider;
	exports.Flag = _elementsFlagFlag.Flag;
	exports.Header = _elementsHeaderHeader.Header;
	exports.SubHeader = _elementsHeaderSubheader.SubHeader;
	exports.Content = _elementsUtilitiesContent.Content;
	exports.Icon = _elementsIconIcon.Icon;
	exports.Image = _elementsImageImage.Image;
	exports.Images = _elementsImageImages.Images;
	exports.Input = _elementsInputInput.Input;
	exports.Detail = _elementsLabelDetail.Detail;
	exports.Label = _elementsLabelLabel.Label;
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

	var _interopRequireDefault = __webpack_require__(32)['default'];

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _react = __webpack_require__(33);

	var _react2 = _interopRequireDefault(_react);

	var _elements = __webpack_require__(2);

	// needed for type comparison

	// can't get import working?
	var classNames = __webpack_require__(34);

	var Button = (function (_Component) {
	    _inherits(Button, _Component);

	    _createClass(Button, null, [{
	        key: 'defaultProps',
	        value: {
	            annimated: false,
	            attached: false,
	            defaultClasses: true
	        },
	        enumerable: true
	    }, {
	        key: 'propTypes',
	        value: {
	            active: _react2['default'].PropTypes.bool,
	            animated: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.string, _react2['default'].PropTypes.bool]),
	            attached: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.string, _react2['default'].PropTypes.bool]),
	            basic: _react2['default'].PropTypes.bool,
	            circular: _react2['default'].PropTypes.bool,
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
	            toggle: _react2['default'].PropTypes.bool
	        },
	        enumerable: true
	    }, {
	        key: 'contextTypes',
	        value: {
	            attached: _react2['default'].PropTypes.bool
	        },
	        enumerable: true
	    }]);

	    function Button(props) {
	        _classCallCheck(this, Button);

	        _get(Object.getPrototypeOf(Button.prototype), 'constructor', this).call(this, props);
	    }

	    _createClass(Button, [{
	        key: 'isLabeled',
	        value: function isLabeled() {
	            if (this.props.label || _react2['default'].Children.count(this.props.children) > 1 && this.hasIcon()) {
	                return true;
	            } else {
	                return false;
	            }
	        }
	    }, {
	        key: 'hasIcon',
	        value: function hasIcon() {
	            var hasIcon = false;

	            _react2['default'].Children.forEach(this.props.children, function (child) {
	                if (child.type === _elements.Icon && child.type != undefined) {
	                    hasIcon = true;
	                }
	            });

	            return hasIcon;
	        }
	    }, {
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
	                icon: this.hasIcon() && (!this.props.social || this.props.circular),
	                inverted: this.props.inverted,
	                labeled: this.isLabeled() && !this.props.social,

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

	            // handle all string or mixed string/bool props
	            classes[this.props.animated] = this.props.animated !== true && this.props.animated !== false ? true : false;
	            classes[this.props.attached] = this.props.attached !== true && this.props.attached !== false ? true : false;
	            classes[this.props.color] = this.props.color ? true : false;
	            classes[this.props.floated] = this.props.floated ? true : false;
	            classes[this.props.label] = this.props.label ? true : false;
	            classes[this.props.size] = this.props.size ? true : false;
	            classes[this.props.social] = this.props.social ? true : false;

	            // if it's attached or animated use a div instead of a button (as Semantic UI's examples do)
	            var Tag = this.props.attached || this.context.attached || this.props.animated ? "div" : "button";

	            return _react2['default'].createElement(
	                Tag,
	                { className: classNames(this.props.className, classes) },
	                this.props.children
	            );
	        }
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
/***/ function(module, exports) {

	"use strict";

	exports["default"] = function (obj) {
	  return obj && obj.__esModule ? obj : {
	    "default": obj
	  };
	};

	exports.__esModule = true;

/***/ },
/* 33 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 34 */
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
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _get = __webpack_require__(4)['default'];

	var _inherits = __webpack_require__(18)['default'];

	var _createClass = __webpack_require__(28)['default'];

	var _classCallCheck = __webpack_require__(31)['default'];

	var _interopRequireDefault = __webpack_require__(32)['default'];

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _react = __webpack_require__(33);

	var _react2 = _interopRequireDefault(_react);

	// can't get import working?
	var classNames = __webpack_require__(34);

	// could move this to a utility
	var numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve'];

	var Buttons = (function (_Component) {
	    _inherits(Buttons, _Component);

	    _createClass(Buttons, null, [{
	        key: 'defaultProps',
	        value: {
	            defaultClasses: true
	        },
	        enumerable: true
	    }, {
	        key: 'propTypes',
	        value: {
	            attached: _react2['default'].PropTypes.string,
	            basic: _react2['default'].PropTypes.bool,
	            color: _react2['default'].PropTypes.string,
	            compact: _react2['default'].PropTypes.bool,
	            defaultClasses: _react2['default'].PropTypes.bool,
	            even: _react2['default'].PropTypes.bool,
	            icon: _react2['default'].PropTypes.bool,
	            inverted: _react2['default'].PropTypes.bool,
	            negative: _react2['default'].PropTypes.bool,
	            positive: _react2['default'].PropTypes.bool,
	            primary: _react2['default'].PropTypes.bool,
	            secondary: _react2['default'].PropTypes.bool,
	            size: _react2['default'].PropTypes.string,
	            vertical: _react2['default'].PropTypes.bool
	        },
	        enumerable: true
	    }, {
	        key: 'childContextTypes',
	        value: {
	            attached: _react2['default'].PropTypes.bool
	        },
	        enumerable: true
	    }]);

	    function Buttons(props) {
	        _classCallCheck(this, Buttons);

	        _get(Object.getPrototypeOf(Buttons.prototype), 'constructor', this).call(this, props);
	    }

	    _createClass(Buttons, [{
	        key: 'getChildContext',
	        value: function getChildContext() {
	            return {
	                'attached': !!this.props.attached
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

	            // buttons group with >0 buttons that are all of equal width
	            if (classes.attached || this.props.even) {
	                if (_react2['default'].Children.count(this.props.children) > 0 && _react2['default'].Children.count(this.props.children) <= 12) {
	                    classes[numbers[this.props.children.length]] = true;
	                }
	            }

	            classes[this.props.color] = this.props.color ? true : false;
	            classes[this.props.size] = this.props.size ? true : false;

	            return _react2['default'].createElement(
	                'div',
	                { className: classNames(this.props.className, classes) },
	                this.props.children
	            );
	        }
	    }]);

	    return Buttons;
	})(_react.Component);

	exports.Buttons = Buttons;

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _get = __webpack_require__(4)['default'];

	var _inherits = __webpack_require__(18)['default'];

	var _createClass = __webpack_require__(28)['default'];

	var _classCallCheck = __webpack_require__(31)['default'];

	var _interopRequireDefault = __webpack_require__(32)['default'];

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _react = __webpack_require__(33);

	var _react2 = _interopRequireDefault(_react);

	// can't get import working?
	var classNames = __webpack_require__(34);

	// Currently header/dividers are only headers. Maybe do both?

	var Divider = (function (_Component) {
	    _inherits(Divider, _Component);

	    _createClass(Divider, null, [{
	        key: 'defaultProps',
	        value: {
	            defaultClasses: true
	        },
	        enumerable: true
	    }, {
	        key: 'propTypes',
	        value: {
	            defaultClasses: _react2['default'].PropTypes.bool,
	            clearing: _react2['default'].PropTypes.bool,
	            fitted: _react2['default'].PropTypes.bool,
	            inverted: _react2['default'].PropTypes.bool,
	            header: _react2['default'].PropTypes.bool,
	            hidden: _react2['default'].PropTypes.bool,
	            horizontal: _react2['default'].PropTypes.bool,
	            section: _react2['default'].PropTypes.bool,
	            vertical: _react2['default'].PropTypes.bool
	        },
	        enumerable: true
	    }]);

	    function Divider(props) {
	        _classCallCheck(this, Divider);

	        _get(Object.getPrototypeOf(Divider.prototype), 'constructor', this).call(this, props);
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

	            return _react2['default'].createElement(
	                'div',
	                { className: classNames(this.props.className, classes) },
	                this.props.children
	            );
	        }
	    }]);

	    return Divider;
	})(_react.Component);

	exports.Divider = Divider;

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _get = __webpack_require__(4)['default'];

	var _inherits = __webpack_require__(18)['default'];

	var _createClass = __webpack_require__(28)['default'];

	var _classCallCheck = __webpack_require__(31)['default'];

	var _extends = __webpack_require__(38)['default'];

	var _interopRequireDefault = __webpack_require__(32)['default'];

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _react = __webpack_require__(33);

	var _react2 = _interopRequireDefault(_react);

	var _elements = __webpack_require__(2);

	// needed for type comparison

	var Flag = (function (_Component) {
	    _inherits(Flag, _Component);

	    function Flag(props) {
	        _classCallCheck(this, Flag);

	        _get(Object.getPrototypeOf(Flag.prototype), 'constructor', this).call(this, props);
	    }

	    _createClass(Flag, [{
	        key: 'render',
	        value: function render() {
	            return _react2['default'].createElement(_elements.Icon, _extends({ defaultClasses: false, className: 'flag' }, this.props));
	        }
	    }]);

	    return Flag;
	})(_react.Component);

	exports.Flag = Flag;

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _Object$assign = __webpack_require__(39)["default"];

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
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(40), __esModule: true };

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(41);
	module.exports = __webpack_require__(9).Object.assign;

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $def = __webpack_require__(10);
	$def($def.S, 'Object', {assign: __webpack_require__(42)});

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	var toObject  = __webpack_require__(12)
	  , ES5Object = __webpack_require__(13)
	  , enumKeys  = __webpack_require__(43);
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
/* 43 */
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
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _get = __webpack_require__(4)['default'];

	var _inherits = __webpack_require__(18)['default'];

	var _createClass = __webpack_require__(28)['default'];

	var _classCallCheck = __webpack_require__(31)['default'];

	var _interopRequireDefault = __webpack_require__(32)['default'];

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _react = __webpack_require__(33);

	var _react2 = _interopRequireDefault(_react);

	var _elements = __webpack_require__(2);

	// can't get import working?
	var classNames = __webpack_require__(34);

	// TODO: image and horizontal list examples

	var Header = (function (_Component) {
	  _inherits(Header, _Component);

	  _createClass(Header, null, [{
	    key: 'defaultProps',
	    value: {
	      attached: false,
	      defaultClasses: true
	    },
	    enumerable: true
	  }, {
	    key: 'propTypes',
	    value: {
	      aligned: _react2['default'].PropTypes.string,
	      attached: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.string, _react2['default'].PropTypes.bool]),
	      block: _react2['default'].PropTypes.bool,
	      color: _react2['default'].PropTypes.string,
	      disabled: _react2['default'].PropTypes.bool,
	      divider: _react2['default'].PropTypes.bool,
	      dividing: _react2['default'].PropTypes.bool,
	      element: _react2['default'].PropTypes.string,
	      floated: _react2['default'].PropTypes.string,
	      horizontal: _react2['default'].PropTypes.bool,
	      inverted: _react2['default'].PropTypes.bool,
	      size: _react2['default'].PropTypes.string
	    },

	    /* A header that is under a header is a special case sub-header.
	     * If we find ourselves as the ancestor of a Header, we avoid the ui
	     * css class. This behavior can be overridden with the style prop.
	     */
	    enumerable: true
	  }, {
	    key: 'childContextTypes',
	    value: {
	      isChildHeader: _react2['default'].PropTypes.bool
	    },

	    /* A header that is under a list is a special case header. 
	     * If we find ourselves as the ancestor of a List, we avoid the ui
	     * css class. This behavior can be overridden with the style prop.
	     */
	    enumerable: true
	  }, {
	    key: 'contextTypes',
	    value: {
	      isChildList: _react2['default'].PropTypes.bool,
	      isChildHeader: _react2['default'].PropTypes.bool
	    },
	    enumerable: true
	  }]);

	  function Header(props) {
	    _classCallCheck(this, Header);

	    _get(Object.getPrototypeOf(Header.prototype), 'constructor', this).call(this, props);
	  }

	  _createClass(Header, [{
	    key: 'getChildContext',
	    value: function getChildContext() {
	      return {
	        'isChildHeader': true
	      };
	    }

	    // replace with hasComponent DFS
	  }, {
	    key: 'hasIcon',
	    value: function hasIcon() {
	      var hasIcon = false;

	      _react2['default'].Children.forEach(this.props.children, function (child) {
	        if (child.type === _elements.Icon && child.type != undefined) {
	          hasIcon = true;
	        }
	      });

	      return hasIcon;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var classes = {
	        // default
	        ui: this.props.defaultClasses && !this.context.isChildList,

	        // positioning
	        right: false,
	        left: false,

	        // types
	        header: this.props.defaultClasses,

	        // states
	        disabled: this.props.disabled,

	        // variations
	        aligned: this.props.aligned && this.props.aligned !== "justified",
	        attached: this.props.attached,
	        block: this.props.block,
	        divider: this.props.divider,
	        dividing: this.props.dividing,
	        floated: this.props.floated,
	        horizontal: this.props.horizontal,
	        inverted: this.props.inverted
	      };

	      // handle all string or mixed string/bool props
	      classes[this.props.aligned] = this.props.aligned ? true : false;
	      classes[this.props.attached] = this.props.attached !== true && this.props.attached !== false ? true : false;
	      classes[this.props.color] = this.props.color ? true : false;
	      classes[this.props.floated] = this.props.floated ? true : false;
	      classes[this.props.size] = this.props.size ? true : false;

	      var Tag = "";

	      if (this.props.element) {
	        Tag = this.props.element;
	      } else if (this.props.onClick) {
	        Tag = "a";
	      } else {
	        Tag = "div";
	      }

	      return _react2['default'].createElement(
	        Tag,
	        { className: classNames(this.props.className, classes) },
	        this.props.children
	      );
	    }
	  }]);

	  return Header;
	})(_react.Component);

	exports.Header = Header;

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _get = __webpack_require__(4)['default'];

	var _inherits = __webpack_require__(18)['default'];

	var _createClass = __webpack_require__(28)['default'];

	var _classCallCheck = __webpack_require__(31)['default'];

	var _extends = __webpack_require__(38)['default'];

	var _interopRequireDefault = __webpack_require__(32)['default'];

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	var _react = __webpack_require__(33);

	var _react2 = _interopRequireDefault(_react);

	var _elements = __webpack_require__(2);

	// can't get import working?
	var classNames = __webpack_require__(34);

	var SubHeader = (function (_Component) {
		_inherits(SubHeader, _Component);

		function SubHeader(props) {
			_classCallCheck(this, SubHeader);

			_get(Object.getPrototypeOf(SubHeader.prototype), 'constructor', this).call(this, props);
		}

		_createClass(SubHeader, [{
			key: 'render',
			value: function render() {
				return _react2['default'].createElement(_elements.Header, _extends({ className: 'sub' }, this.props));
			}
		}]);

		return SubHeader;
	})(_react.Component);

	exports.SubHeader = SubHeader;

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _get = __webpack_require__(4)['default'];

	var _inherits = __webpack_require__(18)['default'];

	var _createClass = __webpack_require__(28)['default'];

	var _classCallCheck = __webpack_require__(31)['default'];

	var _interopRequireDefault = __webpack_require__(32)['default'];

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _react = __webpack_require__(33);

	var _react2 = _interopRequireDefault(_react);

	// can't get import working?
	var classNames = __webpack_require__(34);

	var Icon = (function (_Component) {
	    _inherits(Icon, _Component);

	    _createClass(Icon, null, [{
	        key: 'defaultProps',
	        value: {
	            defaultClasses: true
	        },
	        enumerable: true
	    }, {
	        key: 'propTypes',
	        value: {
	            aligned: _react2['default'].PropTypes.string,
	            circular: _react2['default'].PropTypes.bool,
	            inverted: _react2['default'].PropTypes.bool,
	            link: _react2['default'].PropTypes.bool,
	            name: _react2['default'].PropTypes.string.isRequired,
	            size: _react2['default'].PropTypes.string
	        },
	        enumerable: true
	    }]);

	    function Icon(props) {
	        _classCallCheck(this, Icon);

	        _get(Object.getPrototypeOf(Icon.prototype), 'constructor', this).call(this, props);
	    }

	    _createClass(Icon, [{
	        key: 'render',
	        value: function render() {
	            var classes = {
	                // default
	                icon: this.props.defaultClasses,

	                // variations
	                circular: this.props.circular,
	                link: this.props.link,
	                inverted: this.props.inverted
	            };

	            // handle all string or mixed string/bool props
	            classes[this.props.aligned] = this.props.aligned ? true : false;

	            // aligned must come *after* the actual alignment
	            classes.aligned = this.props.aligned ? true : false;
	            classes[this.props.name] = this.props.name ? true : false;
	            classes[this.props.size] = this.props.size ? true : false;

	            return _react2['default'].createElement('i', { className: classNames(this.props.className, classes) });
	        }
	    }]);

	    return Icon;
	})(_react.Component);

	exports.Icon = Icon;

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _get = __webpack_require__(4)['default'];

	var _inherits = __webpack_require__(18)['default'];

	var _createClass = __webpack_require__(28)['default'];

	var _classCallCheck = __webpack_require__(31)['default'];

	var _interopRequireDefault = __webpack_require__(32)['default'];

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _react = __webpack_require__(33);

	var _react2 = _interopRequireDefault(_react);

	// can't get import working?
	var classNames = __webpack_require__(34);

	// can't do SVG since JSX/React doesn't allow for it

	var Image = (function (_Component) {
	    _inherits(Image, _Component);

	    _createClass(Image, null, [{
	        key: 'defaultProps',
	        value: {
	            aligned: "",
	            defaultClasses: true,
	            floated: "",
	            size: "",
	            spaced: false
	        },
	        enumerable: true
	    }, {
	        key: 'propTypes',
	        value: {
	            aligned: _react2['default'].PropTypes.string,
	            avatar: _react2['default'].PropTypes.bool,
	            bordered: _react2['default'].PropTypes.bool,
	            centered: _react2['default'].PropTypes.bool,
	            content: _react2['default'].PropTypes.bool,
	            circular: _react2['default'].PropTypes.bool,
	            defaultClasses: _react2['default'].PropTypes.bool,
	            disabled: _react2['default'].PropTypes.bool,
	            floated: _react2['default'].PropTypes.string,
	            fluid: _react2['default'].PropTypes.bool,
	            hidden: _react2['default'].PropTypes.bool,
	            rounded: _react2['default'].PropTypes.bool,
	            visibile: _react2['default'].PropTypes.bool,
	            size: _react2['default'].PropTypes.string,
	            spaced: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.string, _react2['default'].PropTypes.bool]),
	            src: _react2['default'].PropTypes.string
	        },
	        enumerable: true
	    }]);

	    function Image(props) {
	        _classCallCheck(this, Image);

	        _get(Object.getPrototypeOf(Image.prototype), 'constructor', this).call(this, props);
	    }

	    _createClass(Image, [{
	        key: 'renderDiv',
	        value: function renderDiv(classes) {
	            return _react2['default'].createElement(
	                'div',
	                { className: classNames(this.props.className, classes) },
	                this.props.children,
	                _react2['default'].createElement('img', { src: this.props.src })
	            );
	        }
	    }, {
	        key: 'renderImg',
	        value: function renderImg(classes) {
	            return _react2['default'].createElement('img', { src: this.props.src, className: classNames(this.props.className, classes) });
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
	                image: this.props.defaultClasses && !this.props.content,

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
	                spaced: this.props.spaced
	            };

	            classes[this.props.aligned] = this.props.aligned ? true : false;
	            classes[this.props.floated] = this.props.floated ? true : false;
	            classes[this.props.size] = this.props.size ? true : false;
	            classes[this.props.spaced] = this.props.spaced ? true : false;

	            return _react2['default'].Children.count(this.props.children) > 0 ? this.renderDiv(classes) : this.renderImg(classes);
	        }
	    }]);

	    return Image;
	})(_react.Component);

	exports.Image = Image;

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _get = __webpack_require__(4)['default'];

	var _inherits = __webpack_require__(18)['default'];

	var _createClass = __webpack_require__(28)['default'];

	var _classCallCheck = __webpack_require__(31)['default'];

	var _interopRequireDefault = __webpack_require__(32)['default'];

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _react = __webpack_require__(33);

	var _react2 = _interopRequireDefault(_react);

	// can't get import working?
	var classNames = __webpack_require__(34);

	var Images = (function (_Component) {
	    _inherits(Images, _Component);

	    _createClass(Images, null, [{
	        key: 'defaultProps',
	        value: {
	            defaultClasses: true
	        },
	        enumerable: true
	    }, {
	        key: 'propTypes',
	        value: {
	            avatar: _react2['default'].PropTypes.bool,
	            bordered: _react2['default'].PropTypes.bool,
	            circular: _react2['default'].PropTypes.bool,
	            defaultClasses: _react2['default'].PropTypes.bool,
	            disabled: _react2['default'].PropTypes.bool,
	            hidden: _react2['default'].PropTypes.bool,
	            rounded: _react2['default'].PropTypes.bool,
	            size: _react2['default'].PropTypes.string
	        },
	        enumerable: true
	    }]);

	    function Images(props) {
	        _classCallCheck(this, Images);

	        _get(Object.getPrototypeOf(Images.prototype), 'constructor', this).call(this, props);
	    }

	    _createClass(Images, [{
	        key: 'render',
	        value: function render() {
	            var classes = {
	                // default
	                ui: this.props.defaultClasses,

	                // types
	                images: this.props.defaultClasses,

	                // states
	                hidden: this.props.hidden,
	                disabled: this.props.disabled,

	                // variations
	                avatar: this.props.avatar,
	                bordered: this.props.bordered,
	                circular: this.props.circular,
	                rounded: this.props.rounded
	            };

	            classes[this.props.size] = this.props.size ? true : false;

	            return _react2['default'].createElement(
	                'div',
	                { className: classNames(this.props.className, classes) },
	                this.props.children
	            );
	        }
	    }]);

	    return Images;
	})(_react.Component);

	exports.Images = Images;

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _get = __webpack_require__(4)['default'];

	var _inherits = __webpack_require__(18)['default'];

	var _createClass = __webpack_require__(28)['default'];

	var _classCallCheck = __webpack_require__(31)['default'];

	var _interopRequireDefault = __webpack_require__(32)['default'];

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _react = __webpack_require__(33);

	var _react2 = _interopRequireDefault(_react);

	var _elements = __webpack_require__(2);

	// can't get import working?
	var classNames = __webpack_require__(34);

	// TODO: Animated

	var Input = (function (_Component) {
	    _inherits(Input, _Component);

	    _createClass(Input, null, [{
	        key: 'defaultProps',
	        value: {
	            corner: false,
	            defaultClasses: true,
	            loading: false,
	            placeholder: "Search..."
	        },
	        enumerable: true
	    }, {
	        key: 'propTypes',
	        value: {
	            corner: _react2['default'].PropTypes.bool,
	            labeled: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.string, _react2['default'].PropTypes.bool]),
	            loading: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.string, _react2['default'].PropTypes.bool]),
	            icon: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.string, _react2['default'].PropTypes.bool]),
	            placeholder: _react2['default'].PropTypes.string,
	            type: _react2['default'].PropTypes.string.isRequired
	        },
	        enumerable: true
	    }]);

	    function Input(props) {
	        _classCallCheck(this, Input);

	        _get(Object.getPrototypeOf(Input.prototype), 'constructor', this).call(this, props);
	    }

	    // checks if Icon and Label are children of this Input
	    // we don't use hasComponent because we need to know if two exist...
	    // better alternative?

	    _createClass(Input, [{
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
	                classes.left = this.children.label.props.left || classes.corner == "left" || false;
	                classes.labeled = true;
	            }

	            return classes;
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

	        // ensures that the label is on the correct side of the input
	    }, {
	        key: 'prepareInput',
	        value: function prepareInput(labelClass) {
	            var input = [];

	            // the actual input element
	            var inputHTML = _react2['default'].createElement('input', { key: 'input', type: this.props.type, placeholder: this.props.placeholder });

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
	    }, {
	        key: 'render',
	        value: function render() {
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

	            classes[this.props.loading] = this.props.loading !== true && this.props.loading !== false ? true : false;
	            classes[this.props.size] = this.props.size ? true : false;

	            return _react2['default'].createElement(
	                'div',
	                { className: classNames(this.props.className, labelClass, iconClass, classes) },
	                input
	            );
	        }
	    }]);

	    return Input;
	})(_react.Component);

	exports.Input = Input;

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _get = __webpack_require__(4)['default'];

	var _inherits = __webpack_require__(18)['default'];

	var _createClass = __webpack_require__(28)['default'];

	var _classCallCheck = __webpack_require__(31)['default'];

	var _objectWithoutProperties = __webpack_require__(51)['default'];

	var _extends = __webpack_require__(38)['default'];

	var _interopRequireDefault = __webpack_require__(32)['default'];

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _react = __webpack_require__(33);

	var _react2 = _interopRequireDefault(_react);

	// can't get import working?
	var classNames = __webpack_require__(34);

	var Detail = (function (_Component) {
	    _inherits(Detail, _Component);

	    _createClass(Detail, null, [{
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

	    function Detail(props) {
	        _classCallCheck(this, Detail);

	        _get(Object.getPrototypeOf(Detail.prototype), 'constructor', this).call(this, props);
	    }

	    _createClass(Detail, [{
	        key: 'render',
	        value: function render() {
	            var classes = {
	                // default
	                detail: this.props.defaultClasses
	            };

	            var _props = this.props;
	            var defaultClasses = _props.defaultClasses;

	            var other = _objectWithoutProperties(_props, ['defaultClasses']);

	            var Tag = this.props.link || this.props.onClick ? "a" : "div";

	            return _react2['default'].createElement(
	                Tag,
	                _extends({ className: classNames(this.props.className, classes) }, other),
	                this.props.children
	            );
	        }
	    }]);

	    return Detail;
	})(_react.Component);

	exports.Detail = Detail;

/***/ },
/* 51 */
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
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _get = __webpack_require__(4)['default'];

	var _inherits = __webpack_require__(18)['default'];

	var _createClass = __webpack_require__(28)['default'];

	var _classCallCheck = __webpack_require__(31)['default'];

	var _objectWithoutProperties = __webpack_require__(51)['default'];

	var _extends = __webpack_require__(38)['default'];

	var _interopRequireDefault = __webpack_require__(32)['default'];

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _react = __webpack_require__(33);

	var _react2 = _interopRequireDefault(_react);

	// can't get import working?
	var classNames = __webpack_require__(34);

	var Label = (function (_Component) {
	    _inherits(Label, _Component);

	    _createClass(Label, null, [{
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
	            tag: _react2['default'].PropTypes.bool
	        },
	        enumerable: true
	    }]);

	    function Label(props) {
	        _classCallCheck(this, Label);

	        _get(Object.getPrototypeOf(Label.prototype), 'constructor', this).call(this, props);
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
	                label: this.props.defaultClasses,
	                pointing: this.props.pointing,
	                ribbon: this.props.ribbon,
	                tag: this.props.tag,

	                // variations
	                color: this.props.color,
	                circular: this.props.circular
	            };

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

	            classes[this.props.attached] = this.props.attached ? true : false;
	            classes[this.props.color] = this.props.color ? true : false;
	            classes[this.props.corner] = this.props.corner !== true && this.props.corner !== false ? true : false;
	            classes[this.props.pointing] = this.props.pointing !== true && this.props.pointing !== false ? true : false;
	            classes[this.props.ribbon] = this.props.ribbon !== true && this.props.ribbon !== false ? true : false;
	            classes[this.props.size] = this.props.size ? true : false;

	            var Tag = this.props.link || this.props.onClick ? "a" : "div";

	            return _react2['default'].createElement(
	                Tag,
	                _extends({ className: classNames(this.props.className, classes) }, other),
	                this.props.children
	            );
	        }
	    }]);

	    return Label;
	})(_react.Component);

	exports.Label = Label;

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _get = __webpack_require__(4)['default'];

	var _inherits = __webpack_require__(18)['default'];

	var _createClass = __webpack_require__(28)['default'];

	var _classCallCheck = __webpack_require__(31)['default'];

	var _interopRequireDefault = __webpack_require__(32)['default'];

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _react = __webpack_require__(33);

	var _react2 = _interopRequireDefault(_react);

	// can't get import working?
	var classNames = __webpack_require__(34);

	var Labels = (function (_Component) {
	    _inherits(Labels, _Component);

	    _createClass(Labels, null, [{
	        key: 'defaultProps',

	        // we only set defaults for props that can be both bool and string + the defaultClasses
	        value: {
	            defaultClasses: true
	        },
	        enumerable: true
	    }, {
	        key: 'propTypes',
	        value: {
	            circular: _react2['default'].PropTypes.bool,
	            color: _react2['default'].PropTypes.string,
	            defaultClasses: _react2['default'].PropTypes.bool,
	            size: _react2['default'].PropTypes.string,
	            tag: _react2['default'].PropTypes.bool
	        },
	        enumerable: true
	    }]);

	    function Labels(props) {
	        _classCallCheck(this, Labels);

	        _get(Object.getPrototypeOf(Labels.prototype), 'constructor', this).call(this, props);
	    }

	    _createClass(Labels, [{
	        key: 'render',
	        value: function render() {
	            var classes = {
	                // default
	                ui: this.props.defaultClasses,

	                // types
	                labels: this.props.defaultClasses,
	                tag: this.props.tag,

	                // variations
	                color: this.props.color,
	                circular: this.props.circular
	            };

	            classes[this.props.color] = this.props.color ? true : false;
	            classes[this.props.size] = this.props.size ? true : false;

	            return _react2['default'].createElement(
	                'div',
	                { className: classNames(this.props.className, classes) },
	                this.props.children
	            );
	        }
	    }]);

	    return Labels;
	})(_react.Component);

	exports.Labels = Labels;

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _get = __webpack_require__(4)['default'];

	var _inherits = __webpack_require__(18)['default'];

	var _createClass = __webpack_require__(28)['default'];

	var _classCallCheck = __webpack_require__(31)['default'];

	var _interopRequireDefault = __webpack_require__(32)['default'];

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _react = __webpack_require__(33);

	var _react2 = _interopRequireDefault(_react);

	// can't get import working?
	var classNames = __webpack_require__(34);

	var List = (function (_Component) {
	    _inherits(List, _Component);

	    _createClass(List, null, [{
	        key: 'defaultProps',
	        value: {
	            defaultClasses: true
	        },
	        enumerable: true
	    }, {
	        key: 'propTypes',
	        value: {
	            aligned: _react2['default'].PropTypes.string,
	            animated: _react2['default'].PropTypes.bool,
	            celled: _react2['default'].PropTypes.bool,
	            bulleted: _react2['default'].PropTypes.bool,
	            defaultClasses: _react2['default'].PropTypes.bool,
	            divided: _react2['default'].PropTypes.bool,
	            horizontal: _react2['default'].PropTypes.bool,
	            inverted: _react2['default'].PropTypes.bool,
	            link: _react2['default'].PropTypes.bool,
	            ordered: _react2['default'].PropTypes.bool,
	            relaxed: _react2['default'].PropTypes.bool,
	            selection: _react2['default'].PropTypes.bool,
	            size: _react2['default'].PropTypes.string
	        },
	        enumerable: true
	    }, {
	        key: 'childContextTypes',
	        value: {
	            isChildList: _react2['default'].PropTypes.bool
	        },
	        enumerable: true
	    }]);

	    function List(props) {
	        _classCallCheck(this, List);

	        _get(Object.getPrototypeOf(List.prototype), 'constructor', this).call(this, props);
	    }

	    _createClass(List, [{
	        key: 'getChildContext',
	        value: function getChildContext() {
	            return {
	                'isChildList': true
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
	                list: this.props.defaultClasses,
	                ordered: this.props.ordered,

	                // variations
	                animated: this.props.animated,
	                celled: this.props.celled,
	                divided: this.props.divided,
	                inverted: this.props.inverted,
	                relaxed: this.props.relaxed,
	                selection: this.props.selection
	            };

	            classes[this.props.aligned] = this.props.aligned ? true : false;
	            classes[this.props.size] = this.props.size ? true : false;

	            // aligned must come *after* the actual alignment
	            classes.aligned = this.props.aligned ? true : false;

	            return _react2['default'].createElement(
	                'div',
	                { className: classNames(this.props.className, classes) },
	                this.props.children
	            );
	        }
	    }]);

	    return List;
	})(_react.Component);

	exports.List = List;

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _get = __webpack_require__(4)['default'];

	var _inherits = __webpack_require__(18)['default'];

	var _createClass = __webpack_require__(28)['default'];

	var _classCallCheck = __webpack_require__(31)['default'];

	var _objectWithoutProperties = __webpack_require__(51)['default'];

	var _extends = __webpack_require__(38)['default'];

	var _interopRequireDefault = __webpack_require__(32)['default'];

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _react = __webpack_require__(33);

	var _react2 = _interopRequireDefault(_react);

	// can't get import working?
	var classNames = __webpack_require__(34);

	var Item = (function (_Component) {
	    _inherits(Item, _Component);

	    _createClass(Item, null, [{
	        key: 'defaultProps',
	        value: {
	            defaultClasses: true
	        },
	        enumerable: true
	    }, {
	        key: 'propTypes',
	        value: {
	            active: _react2['default'].PropTypes.bool
	        },
	        enumerable: true
	    }]);

	    function Item(props) {
	        _classCallCheck(this, Item);

	        _get(Object.getPrototypeOf(Item.prototype), 'constructor', this).call(this, props);
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
	                item: this.props.defaultClasses

	                // content

	                // variations

	            };

	            var _props = this.props;
	            var defaultClasses = _props.defaultClasses;

	            var other = _objectWithoutProperties(_props, ['defaultClasses']);

	            var Tag = this.props.link || this.props.onClick ? "a" : "div";

	            return _react2['default'].createElement(
	                Tag,
	                _extends({ className: classNames(this.props.className, classes) }, other),
	                this.props.children
	            );
	        }
	    }]);

	    return Item;
	})(_react.Component);

	exports.Item = Item;

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _get = __webpack_require__(4)['default'];

	var _inherits = __webpack_require__(18)['default'];

	var _createClass = __webpack_require__(28)['default'];

	var _classCallCheck = __webpack_require__(31)['default'];

	var _interopRequireDefault = __webpack_require__(32)['default'];

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _react = __webpack_require__(33);

	var _react2 = _interopRequireDefault(_react);

	// Todo: Can't do much without a dimmer

	// can't get import working?
	var classNames = __webpack_require__(34);

	var Rail = (function (_Component) {
	    _inherits(Rail, _Component);

	    _createClass(Rail, null, [{
	        key: 'defaultProps',
	        value: {
	            close: false,
	            defaultClasses: true
	        },
	        enumerable: true
	    }, {
	        key: 'propTypes',
	        value: {
	            close: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.string, _react2['default'].PropTypes.bool]),
	            attached: _react2['default'].PropTypes.bool,
	            dividing: _react2['default'].PropTypes.bool,
	            float: _react2['default'].PropTypes.string.isRequired,
	            internal: _react2['default'].PropTypes.bool
	        },
	        enumerable: true
	    }]);

	    function Rail(props) {
	        _classCallCheck(this, Rail);

	        _get(Object.getPrototypeOf(Rail.prototype), 'constructor', this).call(this, props);
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
	                rail: this.props.defaultClasses
	            };

	            classes[this.props.close] = this.props.close !== true && this.props.close !== false ? true : false;
	            classes[this.props.float] = this.props.float ? true : false;

	            return _react2['default'].createElement(
	                'div',
	                { className: classNames(this.props.className, classes) },
	                this.props.children
	            );
	        }
	    }]);

	    return Rail;
	})(_react.Component);

	exports.Rail = Rail;

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _get = __webpack_require__(4)['default'];

	var _inherits = __webpack_require__(18)['default'];

	var _createClass = __webpack_require__(28)['default'];

	var _classCallCheck = __webpack_require__(31)['default'];

	var _interopRequireDefault = __webpack_require__(32)['default'];

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _react = __webpack_require__(33);

	var _react2 = _interopRequireDefault(_react);

	// Todo: Can't do much without a dimmer

	// DFS for recursive seaarching of a specific child component
	var hasComponent = function hasComponent(children, component) {
	    var found = false;

	    _react2['default'].Children.forEach(children, function (child) {
	        if (child.type === component && child.type != undefined) {
	            found = true;
	        } else {
	            if (child.props.children) {
	                found = hasComponent(child.props.children, component);
	            }
	        }
	    });

	    return found;
	};

	// can't get import working?
	var classNames = __webpack_require__(34);

	var Reveal = (function (_Component) {
	    _inherits(Reveal, _Component);

	    _createClass(Reveal, null, [{
	        key: 'defaultProps',
	        value: {
	            defaultClasses: true,
	            image: false,
	            move: false,
	            rotate: false
	        },
	        enumerable: true
	    }, {
	        key: 'propTypes',
	        value: {
	            active: _react2['default'].PropTypes.bool,
	            circular: _react2['default'].PropTypes.bool,
	            defaultClasses: _react2['default'].PropTypes.bool,
	            disabled: _react2['default'].PropTypes.bool,
	            fade: _react2['default'].PropTypes.bool,
	            instant: _react2['default'].PropTypes.bool,
	            image: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.string, _react2['default'].PropTypes.bool]),
	            move: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.string, _react2['default'].PropTypes.bool]),
	            rotate: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.string, _react2['default'].PropTypes.bool]),
	            size: _react2['default'].PropTypes.string,
	            type: _react2['default'].PropTypes.string
	        },
	        enumerable: true
	    }]);

	    function Reveal(props) {
	        _classCallCheck(this, Reveal);

	        _get(Object.getPrototypeOf(Reveal.prototype), 'constructor', this).call(this, props);
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
	                image: this.props.image || hasComponent(this.props.children, Image)
	            };

	            classes[this.props.image] = this.props.image !== true && this.props.image !== false ? true : false;
	            classes[this.props.move] = this.props.move !== true && this.props.move !== false ? true : false;
	            classes[this.props.rotate] = this.props.rotate !== true && this.props.rotate !== false ? true : false;
	            classes[this.props.size] = this.props.size ? true : false;
	            classes[this.props.type] = this.props.type ? true : false;

	            return _react2['default'].createElement(
	                'div',
	                { className: classNames(this.props.className, classes) },
	                this.props.children
	            );
	        }
	    }]);

	    return Reveal;
	})(_react.Component);

	exports.Reveal = Reveal;

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _get = __webpack_require__(4)['default'];

	var _inherits = __webpack_require__(18)['default'];

	var _createClass = __webpack_require__(28)['default'];

	var _classCallCheck = __webpack_require__(31)['default'];

	var _interopRequireDefault = __webpack_require__(32)['default'];

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _react = __webpack_require__(33);

	var _react2 = _interopRequireDefault(_react);

	// can't get import working?
	var classNames = __webpack_require__(34);

	// TODO: Circular (do header first)

	var Segment = (function (_Component) {
	  _inherits(Segment, _Component);

	  _createClass(Segment, null, [{
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
	      clearing: _react2['default'].PropTypes.bool,
	      color: _react2['default'].PropTypes.string,
	      compact: _react2['default'].PropTypes.bool,
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
	      vertical: _react2['default'].PropTypes.bool
	    },
	    enumerable: true
	  }]);

	  function Segment(props) {
	    _classCallCheck(this, Segment);

	    _get(Object.getPrototypeOf(Segment.prototype), 'constructor', this).call(this, props);
	  }

	  _createClass(Segment, [{
	    key: 'render',
	    value: function render() {
	      var style = {};

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

	        // defaults (positioning matters)
	        segment: this.props.defaultClasses
	      };

	      classes[this.props.aligned] = this.props.aligned ? true : false;
	      classes[this.props.color] = this.props.color ? true : false;
	      classes[this.props.attached] = this.props.attached !== true && this.props.attached !== false ? true : false;
	      classes[this.props.floated] = this.props.floated ? true : false;

	      if (this.props.piled) {
	        this.props.style.zIndex = this.props.zIndex || 0;
	      }

	      return _react2['default'].createElement(
	        'div',
	        { className: classNames(this.props.className, classes), style: this.props.style },
	        this.props.children
	      );
	    }
	  }]);

	  return Segment;
	})(_react.Component);

	exports.Segment = Segment;

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _get = __webpack_require__(4)['default'];

	var _inherits = __webpack_require__(18)['default'];

	var _createClass = __webpack_require__(28)['default'];

	var _classCallCheck = __webpack_require__(31)['default'];

	var _interopRequireDefault = __webpack_require__(32)['default'];

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	var _react = __webpack_require__(33);

	var _react2 = _interopRequireDefault(_react);

	// can't get import working?
	var classNames = __webpack_require__(34);

	var Segments = (function (_Component) {
		_inherits(Segments, _Component);

		_createClass(Segments, null, [{
			key: 'defaultProps',
			value: {
				defaultClasses: true
			},
			enumerable: true
		}, {
			key: 'propTypes',
			value: {
				raised: _react2['default'].PropTypes.bool,
				stacked: _react2['default'].PropTypes.bool,
				piled: _react2['default'].PropTypes.bool,
				horizontal: _react2['default'].PropTypes.bool,
				compact: _react2['default'].PropTypes.bool
			},
			enumerable: true
		}]);

		function Segments(props) {
			_classCallCheck(this, Segments);

			_get(Object.getPrototypeOf(Segments.prototype), 'constructor', this).call(this, props);
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

				return _react2['default'].createElement(
					'div',
					{ className: classNames(this.props.className, classes) },
					this.props.children
				);
			}
		}]);

		return Segments;
	})(_react.Component);

	exports.Segments = Segments;

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _get = __webpack_require__(4)['default'];

	var _inherits = __webpack_require__(18)['default'];

	var _createClass = __webpack_require__(28)['default'];

	var _classCallCheck = __webpack_require__(31)['default'];

	var _interopRequireDefault = __webpack_require__(32)['default'];

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	var _react = __webpack_require__(33);

	var _react2 = _interopRequireDefault(_react);

	// can't get import working?
	var classNames = __webpack_require__(34);

	var Content = (function (_Component) {
		_inherits(Content, _Component);

		_createClass(Content, null, [{
			key: 'defaultProps',
			value: {
				defaultClasses: true,
				floated: false
			},
			enumerable: true
		}, {
			key: 'propTypes',
			value: {
				aligned: _react2['default'].PropTypes.string,
				floated: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.string, _react2['default'].PropTypes.bool]),
				hidden: _react2['default'].PropTypes.bool,
				visible: _react2['default'].PropTypes.bool
			},
			enumerable: true
		}]);

		function Content(props) {
			_classCallCheck(this, Content);

			_get(Object.getPrototypeOf(Content.prototype), 'constructor', this).call(this, props);
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
					aligned: this.props.aligned,
					floated: this.props.floated,
					hidden: this.props.hidden,
					visible: this.props.visible
				};

				classes[this.props.aligned] = this.props.aligned ? true : false;
				classes[this.props.floated] = this.props.floated !== true && this.props.floated !== false ? true : false;

				return _react2['default'].createElement(
					'div',
					{ className: classNames(this.props.className, classes) },
					this.props.children
				);
			}
		}]);

		return Content;
	})(_react.Component);

	exports.Content = Content;

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _get = __webpack_require__(4)['default'];

	var _inherits = __webpack_require__(18)['default'];

	var _createClass = __webpack_require__(28)['default'];

	var _classCallCheck = __webpack_require__(31)['default'];

	var _interopRequireDefault = __webpack_require__(32)['default'];

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	var _react = __webpack_require__(33);

	var _react2 = _interopRequireDefault(_react);

	// can't get import working?
	var classNames = __webpack_require__(34);

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

/***/ }
/******/ ]);