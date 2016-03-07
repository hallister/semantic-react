(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react/lib/ReactTransitionGroup"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react/lib/ReactTransitionGroup", "react-dom"], factory);
	else if(typeof exports === 'object')
		exports["SemanticReact"] = factory(require("react"), require("react/lib/ReactTransitionGroup"), require("react-dom"));
	else
		root["SemanticReact"] = factory(root["React"], root["React.addons.ReactTransitionGroup"], root["ReactDOM"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_53__, __WEBPACK_EXTERNAL_MODULE_55__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.collections = exports.views = exports.utilites = exports.modules = exports.elements = undefined;
	
	var _elements = __webpack_require__(1);
	
	var _loop = function _loop(_key6) {
	  if (_key6 === "default") return 'continue';
	  Object.defineProperty(exports, _key6, {
	    enumerable: true,
	    get: function get() {
	      return _elements[_key6];
	    }
	  });
	};
	
	for (var _key6 in _elements) {
	  var _ret = _loop(_key6);
	
	  if (_ret === 'continue') continue;
	}
	
	var _modules = __webpack_require__(41);
	
	var _loop2 = function _loop2(_key7) {
	  if (_key7 === "default") return 'continue';
	  Object.defineProperty(exports, _key7, {
	    enumerable: true,
	    get: function get() {
	      return _modules[_key7];
	    }
	  });
	};
	
	for (var _key7 in _modules) {
	  var _ret2 = _loop2(_key7);
	
	  if (_ret2 === 'continue') continue;
	}
	
	var _utilities = __webpack_require__(4);
	
	var _loop3 = function _loop3(_key8) {
	  if (_key8 === "default") return 'continue';
	  Object.defineProperty(exports, _key8, {
	    enumerable: true,
	    get: function get() {
	      return _utilities[_key8];
	    }
	  });
	};
	
	for (var _key8 in _utilities) {
	  var _ret3 = _loop3(_key8);
	
	  if (_ret3 === 'continue') continue;
	}
	
	var _views = __webpack_require__(101);
	
	var _loop4 = function _loop4(_key9) {
	  if (_key9 === "default") return 'continue';
	  Object.defineProperty(exports, _key9, {
	    enumerable: true,
	    get: function get() {
	      return _views[_key9];
	    }
	  });
	};
	
	for (var _key9 in _views) {
	  var _ret4 = _loop4(_key9);
	
	  if (_ret4 === 'continue') continue;
	}
	
	var _collections = __webpack_require__(143);
	
	var _loop5 = function _loop5(_key10) {
	  if (_key10 === "default") return 'continue';
	  Object.defineProperty(exports, _key10, {
	    enumerable: true,
	    get: function get() {
	      return _collections[_key10];
	    }
	  });
	};
	
	for (var _key10 in _collections) {
	  var _ret5 = _loop5(_key10);
	
	  if (_ret5 === 'continue') continue;
	}
	
	var elements = _interopRequireWildcard(_elements);
	
	var modules = _interopRequireWildcard(_modules);
	
	var utilites = _interopRequireWildcard(_utilities);
	
	var views = _interopRequireWildcard(_views);
	
	var collections = _interopRequireWildcard(_collections);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	exports.elements = elements;
	exports.modules = modules;
	exports.utilites = utilites;
	exports.views = views;
	exports.collections = collections;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _button = __webpack_require__(2);
	
	Object.defineProperty(exports, 'Button', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_button).default;
	  }
	});
	
	var _buttons = __webpack_require__(6);
	
	Object.defineProperty(exports, 'Buttons', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_buttons).default;
	  }
	});
	
	var _labeledbutton = __webpack_require__(7);
	
	Object.defineProperty(exports, 'LabeledButton', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_labeledbutton).default;
	  }
	});
	
	var _iconbutton = __webpack_require__(8);
	
	Object.defineProperty(exports, 'IconButton', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_iconbutton).default;
	  }
	});
	
	var _socialbutton = __webpack_require__(9);
	
	Object.defineProperty(exports, 'SocialButton', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_socialbutton).default;
	  }
	});
	
	var _primarybutton = __webpack_require__(10);
	
	Object.defineProperty(exports, 'PrimaryButton', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_primarybutton).default;
	  }
	});
	
	var _successbutton = __webpack_require__(11);
	
	Object.defineProperty(exports, 'SuccessButton', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_successbutton).default;
	  }
	});
	
	var _warningbutton = __webpack_require__(12);
	
	Object.defineProperty(exports, 'WarningButton', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_warningbutton).default;
	  }
	});
	
	var _dangerbutton = __webpack_require__(13);
	
	Object.defineProperty(exports, 'DangerButton', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_dangerbutton).default;
	  }
	});
	
	var _divider = __webpack_require__(14);
	
	Object.defineProperty(exports, 'Divider', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_divider).default;
	  }
	});
	
	var _flag = __webpack_require__(15);
	
	Object.defineProperty(exports, 'Flag', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_flag).default;
	  }
	});
	
	var _header = __webpack_require__(16);
	
	Object.defineProperty(exports, 'Header', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_header).default;
	  }
	});
	
	var _subheader = __webpack_require__(17);
	
	Object.defineProperty(exports, 'SubHeader', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_subheader).default;
	  }
	});
	
	var _icon = __webpack_require__(18);
	
	Object.defineProperty(exports, 'Icon', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_icon).default;
	  }
	});
	
	var _icons = __webpack_require__(19);
	
	Object.defineProperty(exports, 'Icons', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_icons).default;
	  }
	});
	
	var _image = __webpack_require__(20);
	
	Object.defineProperty(exports, 'Image', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_image).default;
	  }
	});
	
	var _images = __webpack_require__(21);
	
	Object.defineProperty(exports, 'Images', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_images).default;
	  }
	});
	
	var _input = __webpack_require__(22);
	
	Object.defineProperty(exports, 'Input', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_input).default;
	  }
	});
	
	var _detail = __webpack_require__(23);
	
	Object.defineProperty(exports, 'Detail', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_detail).default;
	  }
	});
	
	var _label = __webpack_require__(24);
	
	Object.defineProperty(exports, 'Label', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_label).default;
	  }
	});
	
	var _labels = __webpack_require__(25);
	
	Object.defineProperty(exports, 'Labels', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_labels).default;
	  }
	});
	
	var _list = __webpack_require__(26);
	
	Object.defineProperty(exports, 'List', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_list).default;
	  }
	});
	
	var _loader = __webpack_require__(27);
	
	Object.defineProperty(exports, 'Loader', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_loader).default;
	  }
	});
	
	var _rail = __webpack_require__(28);
	
	Object.defineProperty(exports, 'Rail', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_rail).default;
	  }
	});
	
	var _reveal = __webpack_require__(29);
	
	Object.defineProperty(exports, 'Reveal', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_reveal).default;
	  }
	});
	
	var _segment = __webpack_require__(30);
	
	Object.defineProperty(exports, 'Segment', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_segment).default;
	  }
	});
	
	var _segments = __webpack_require__(31);
	
	Object.defineProperty(exports, 'Segments', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_segments).default;
	  }
	});
	
	var _actions = __webpack_require__(32);
	
	Object.defineProperty(exports, 'Actions', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_actions).default;
	  }
	});
	
	var _author = __webpack_require__(33);
	
	Object.defineProperty(exports, 'Author', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_author).default;
	  }
	});
	
	var _container = __webpack_require__(34);
	
	Object.defineProperty(exports, 'Container', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_container).default;
	  }
	});
	
	var _content = __webpack_require__(35);
	
	Object.defineProperty(exports, 'Content', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_content).default;
	  }
	});
	
	var _date = __webpack_require__(36);
	
	Object.defineProperty(exports, 'Date', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_date).default;
	  }
	});
	
	var _description = __webpack_require__(37);
	
	Object.defineProperty(exports, 'Description', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_description).default;
	  }
	});
	
	var _meta = __webpack_require__(38);
	
	Object.defineProperty(exports, 'Meta', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_meta).default;
	  }
	});
	
	var _summary = __webpack_require__(39);
	
	Object.defineProperty(exports, 'Summary', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_summary).default;
	  }
	});
	
	var _text = __webpack_require__(40);
	
	Object.defineProperty(exports, 'Text', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_text).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	        value: true
	});
	exports.default = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _class, _temp;
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _elements = __webpack_require__(1);
	
	var _utilities = __webpack_require__(4);
	
	var _classnames = __webpack_require__(5);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var validProps = {
	        animated: ['vertical', 'fade'],
	        attached: ['left', 'right', 'bottom', 'top'],
	        labeled: ['right', 'left'],
	        floated: ['right', 'left']
	};
	
	var Button = (_temp = _class = function (_React$Component) {
	        _inherits(Button, _React$Component);
	
	        function Button() {
	                _classCallCheck(this, Button);
	
	                return _possibleConstructorReturn(this, Object.getPrototypeOf(Button).apply(this, arguments));
	        }
	
	        _createClass(Button, [{
	                key: 'render',
	                value: function render() {
	                        var Component = this.props.attached || this.context.isAttached || this.props.animated || _react2.default.Children.count(this.props.children) > 1 ? 'div' : 'button';
	
	                        // consume props
	                        /* eslint-disable no-use-before-define */
	                        var _props = this.props;
	                        var animated = _props.animated;
	                        var attached = _props.attached;
	                        var basic = _props.basic;
	                        var children = _props.children;
	                        var circular = _props.circular;
	                        var color = _props.color;
	                        var component = _props.component;
	                        var compact = _props.compact;
	                        var className = _props.className;
	                        var defaultClasses = _props.defaultClasses;
	                        var floated = _props.floated;
	                        var fluid = _props.fluid;
	                        var icon = _props.icon;
	                        var inverted = _props.inverted;
	                        var labeled = _props.labeled;
	                        var loading = _props.loading;
	                        var size = _props.size;
	                        var social = _props.social;
	                        var state = _props.state;
	
	                        var other = _objectWithoutProperties(_props, ['animated', 'attached', 'basic', 'children', 'circular', 'color', 'component', 'compact', 'className', 'defaultClasses', 'floated', 'fluid', 'icon', 'inverted', 'labeled', 'loading', 'size', 'social', 'state']);
	                        /* eslint-enable no-use-before-define */
	
	                        // add class names
	
	
	                        other.className = (0, _classnames2.default)(this.props.className, this.getClasses());
	
	                        return _react2.default.createElement(this.props.component || Component, other, this.props.children);
	                }
	        }, {
	                key: 'isIconButton',
	                value: function isIconButton() {
	                        return (0, _utilities.hasChild)(this.props.children, _elements.Icon) && _react2.default.Children.count(this.props.children) === 1;
	                }
	        }, {
	                key: 'getClasses',
	                value: function getClasses() {
	                        var classes = {
	                                // default
	                                ui: this.props.defaultClasses,
	
	                                // position based props
	                                floated: this.props.floated,
	                                labeled: this.props.labeled && !this.context.isLabeledButtons,
	                                attached: this.props.attached,
	
	                                // types
	                                animated: this.props.animated,
	                                basic: this.props.basic,
	                                icon: (this.props.icon || this.isIconButton()) && !this.context.isIconButtons,
	                                inverted: this.props.inverted,
	
	                                // states
	                                active: this.props.state === 'active',
	                                disabled: this.props.state === 'disabled',
	                                loading: this.props.loading,
	
	                                // variations
	                                circular: this.props.circular,
	                                compact: this.props.compact,
	                                fluid: this.props.fluid,
	
	                                // component
	                                button: this.props.defaultClasses
	                        };
	
	                        // string types
	                        classes[this.props.color] = !!this.props.color;
	                        classes[this.props.size] = !!this.props.size;
	                        classes[this.props.social] = !!this.props.social;
	
	                        return (0, _utilities.validateClassProps)(classes, this.props, validProps);
	                }
	        }]);
	
	        return Button;
	}(_react2.default.Component), _class.propTypes = {
	        /**
	         * Adds a fade or slide animation on hover.
	         */
	        animated: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.oneOf(['fade', 'vertical']), _react2.default.PropTypes.bool]),
	
	        /**
	         * It's attached to some other attachable component.
	         */
	        attached: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.oneOf(['left', 'right', 'bottom', 'top']), _react2.default.PropTypes.bool]),
	
	        /**
	         * Adds simple styling to the component.
	         */
	        basic: _react2.default.PropTypes.bool,
	
	        /**
	         * The child nodes of the component.
	         */
	        children: _react2.default.PropTypes.node,
	
	        /**
	         * Gives a circular shape to the component.
	         */
	        circular: _react2.default.PropTypes.bool,
	
	        /**
	         * Adds additional classes to the component.
	         */
	        className: _react2.default.PropTypes.node,
	
	        /**
	         * Adds a SemanticUI color class.
	         */
	        color: _react2.default.PropTypes.string,
	
	        /**
	         * Reduces the padding on the component.
	         */
	        compact: _react2.default.PropTypes.bool,
	
	        /**
	         * Overrides the component with a custom component string ('div') or ReactElement.
	         */
	        component: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.element, _react2.default.PropTypes.string]),
	
	        /**
	         * Adds the default classes for the component.
	         */
	        defaultClasses: _react2.default.PropTypes.bool,
	
	        /**
	         * Forces to component to float left or right.
	         */
	        floated: _react2.default.PropTypes.oneOf(['right', 'left']),
	
	        /**
	         * The component fills the parent components horizontal space.
	         */
	        fluid: _react2.default.PropTypes.bool,
	
	        /**
	         * Overrides default behavior and adds the icon class to the component.
	         */
	        icon: _react2.default.PropTypes.bool,
	
	        /**
	         * Styles the component for a dark background.
	         */
	        inverted: _react2.default.PropTypes.bool,
	
	        /**
	         * Defines whether the label is to the right or left of the component (LabeledButton).
	         */
	        labeled: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.oneOf(['right', 'left']), _react2.default.PropTypes.bool]),
	
	        /**
	         * Displays a loading indicator on the component.
	         */
	        loading: _react2.default.PropTypes.bool,
	
	        /**
	         * Adds a SemanticUI size class.
	         */
	        size: _react2.default.PropTypes.string,
	
	        /**
	         * Adds a SemanticUI social class (SocialButton).
	         */
	        social: _react2.default.PropTypes.string,
	
	        /**
	         * Indicates whether the button is currently highlighted or disabled.
	         */
	        state: _react2.default.PropTypes.oneOf(['active', 'disabled'])
	}, _class.contextTypes = {
	        isAttached: _react2.default.PropTypes.bool,
	        isIconButtons: _react2.default.PropTypes.bool,
	        isLabeledButtons: _react2.default.PropTypes.bool
	}, _class.defaultProps = {
	        defaultClasses: true
	}, _temp);
	exports.default = Button;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; }; // DFS for recursive seaarching of a specific child component
	
	
	exports.arrayToObject = arrayToObject;
	exports.countChildren = countChildren;
	exports.hasChild = hasChild;
	exports.hasDescendant = hasDescendant;
	exports.hasFirstChild = hasFirstChild;
	exports.getChild = getChild;
	exports.validateClassProps = validateClassProps;
	exports.spliceChildren = spliceChildren;
	exports.isEveryChild = isEveryChild;
	exports.isNodeInRoot = isNodeInRoot;
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.Numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen'];
	
	exports.Social = ['facebook', 'twitter', 'google plus', 'vk', 'linkedin', 'instagram', 'youtube'];
	
	exports.Colors = ['red', 'orange', 'yellow', 'olive', 'green', 'teal', 'blue', 'violet', 'purple', 'pink', 'brown', 'grey', 'black'];
	
	exports.Sizes = ['mini', 'tiny', 'small', 'medium', 'large', 'big', 'huge', 'massive'];
	
	function arrayToObject(array) {
	    var value = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];
	
	    var returnObject = {};
	
	    var _iteratorNormalCompletion = true;
	    var _didIteratorError = false;
	    var _iteratorError = undefined;
	
	    try {
	        for (var _iterator = array[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	            var v = _step.value;
	
	            returnObject[v] = value;
	        }
	    } catch (err) {
	        _didIteratorError = true;
	        _iteratorError = err;
	    } finally {
	        try {
	            if (!_iteratorNormalCompletion && _iterator.return) {
	                _iterator.return();
	            }
	        } finally {
	            if (_didIteratorError) {
	                throw _iteratorError;
	            }
	        }
	    }
	
	    return returnObject;
	}
	
	function countChildren(children, component) {
	    var count = 0;
	
	    _react2.default.Children.forEach(children, function (child) {
	        if (child.type === component) {
	            count++;
	        }
	    });
	
	    return count;
	}
	
	function hasChild(children, component) {
	    children = _react2.default.Children.toArray(children);
	
	    var _iteratorNormalCompletion2 = true;
	    var _didIteratorError2 = false;
	    var _iteratorError2 = undefined;
	
	    try {
	        for (var _iterator2 = children[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	            var child = _step2.value;
	
	            if (child.type && child.type == component) {
	                return true;
	            } else if (component === (typeof child === 'undefined' ? 'undefined' : _typeof(child))) {
	                return true;
	            }
	        }
	    } catch (err) {
	        _didIteratorError2 = true;
	        _iteratorError2 = err;
	    } finally {
	        try {
	            if (!_iteratorNormalCompletion2 && _iterator2.return) {
	                _iterator2.return();
	            }
	        } finally {
	            if (_didIteratorError2) {
	                throw _iteratorError2;
	            }
	        }
	    }
	
	    return false;
	}
	
	function hasDescendant(children, component) {
	    children = _react2.default.Children.toArray(children);
	
	    var _iteratorNormalCompletion3 = true;
	    var _didIteratorError3 = false;
	    var _iteratorError3 = undefined;
	
	    try {
	        for (var _iterator3 = children[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	            var child = _step3.value;
	
	            if (child.type && child.type == component) {
	                return true;
	            } else if (_react2.default.Children.count(child.props.children) > 0) {
	                return hasDescendant(child.props.children, component);
	            }
	        }
	    } catch (err) {
	        _didIteratorError3 = true;
	        _iteratorError3 = err;
	    } finally {
	        try {
	            if (!_iteratorNormalCompletion3 && _iterator3.return) {
	                _iterator3.return();
	            }
	        } finally {
	            if (_didIteratorError3) {
	                throw _iteratorError3;
	            }
	        }
	    }
	
	    return false;
	}
	
	function hasFirstChild(children, component) {
	    if (typeof children === 'string') {
	        return false;
	    }
	
	    if (_react2.default.Children.count(children) === 1) {
	        return _react2.default.Children.only(children).type === component;
	    } else {
	        return children[0].type === component;
	    }
	}
	
	function getChild(children, component) {
	    var equal = arguments.length <= 2 || arguments[2] === undefined ? true : arguments[2];
	
	    return _react2.default.Children.map(children, function (child) {
	        if (child.type !== component && equal) {
	            return child;
	        } else if (child.type == component && !equal) {
	            return child;
	        } else {
	            return null;
	        }
	    }.bind(this));
	}
	
	function validateClassProps(classes, props, validator, sub) {
	    var _iteratorNormalCompletion4 = true;
	    var _didIteratorError4 = false;
	    var _iteratorError4 = undefined;
	
	    try {
	        for (var _iterator4 = Object.keys(validator)[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
	            var propName = _step4.value;
	
	            if (!!props[propName] === true) {
	                var realProp = propName;
	
	                if (sub && sub[propName]) {
	                    realProp = sub[propName];
	                }
	
	                classes[propName] = false;
	
	                if (typeof props[propName] === 'string') {
	                    classes[props[propName] + ' ' + realProp] = true;
	                } else {
	                    classes[propName] = true;
	                }
	            }
	        }
	    } catch (err) {
	        _didIteratorError4 = true;
	        _iteratorError4 = err;
	    } finally {
	        try {
	            if (!_iteratorNormalCompletion4 && _iterator4.return) {
	                _iterator4.return();
	            }
	        } finally {
	            if (_didIteratorError4) {
	                throw _iteratorError4;
	            }
	        }
	    }
	
	    return classes;
	}
	
	function spliceChildren(children, component) {
	    var splicedComponent = undefined,
	        componentIndex = undefined;
	    children = _react2.default.Children.toArray(children);
	
	    children.forEach(function (child, index) {
	        if (child.type && child.type == component) {
	            splicedComponent = children.splice(index, 1);
	            componentIndex = index;
	        }
	    });
	
	    return {
	        component: splicedComponent,
	        remaining: children,
	        index: componentIndex
	    };
	}
	
	function isEveryChild(children, component) {
	    children = _react2.default.Children.toArray(children);
	
	    var _iteratorNormalCompletion5 = true;
	    var _didIteratorError5 = false;
	    var _iteratorError5 = undefined;
	
	    try {
	        for (var _iterator5 = children[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
	            var child = _step5.value;
	
	            if (!child.type || child.type !== component) {
	                return false;
	            }
	        }
	    } catch (err) {
	        _didIteratorError5 = true;
	        _iteratorError5 = err;
	    } finally {
	        try {
	            if (!_iteratorNormalCompletion5 && _iterator5.return) {
	                _iterator5.return();
	            }
	        } finally {
	            if (_didIteratorError5) {
	                throw _iteratorError5;
	            }
	        }
	    }
	
	    return true;
	}
	
	function isNodeInRoot(node, root) {
	    while (node) {
	        if (node === root) {
	            return true;
	        }
	        node = node.parentNode;
	    }
	    return false;
	}

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */
	
	(function () {
		'use strict';
	
		var hasOwn = {}.hasOwnProperty;
	
		function classNames () {
			var classes = [];
	
			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;
	
				var argType = typeof arg;
	
				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}
	
			return classes.join(' ');
		}
	
		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _class, _temp;
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _elements = __webpack_require__(1);
	
	var _utilities = __webpack_require__(4);
	
	var _classnames = __webpack_require__(5);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var validProps = {
	    attached: ['bottom', 'top'],
	    floated: ['right', 'left']
	};
	
	var Buttons = (_temp = _class = function (_React$Component) {
	    _inherits(Buttons, _React$Component);
	
	    function Buttons() {
	        _classCallCheck(this, Buttons);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Buttons).apply(this, arguments));
	    }
	
	    _createClass(Buttons, [{
	        key: 'getChildContext',
	        value: function getChildContext() {
	            return {
	                isAttached: !!this.props.attached,
	                isIconButtons: !!this.props.icon,
	                isLabeledButtons: !!this.props.labeled
	            };
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            /* eslint-disable no-use-before-define */
	            var _props = this.props;
	            var attached = _props.attached;
	            var basic = _props.basic;
	            var children = _props.children;
	            var className = _props.className;
	            var color = _props.color;
	            var compact = _props.compact;
	            var component = _props.component;
	            var defaultClasses = _props.defaultClasses;
	            var equal = _props.equal;
	            var floated = _props.floated;
	            var icon = _props.icon;
	            var inverted = _props.inverted;
	            var labeled = _props.labeled;
	            var size = _props.size;
	            var vertical = _props.vertical;
	
	            var other = _objectWithoutProperties(_props, ['attached', 'basic', 'children', 'className', 'color', 'compact', 'component', 'defaultClasses', 'equal', 'floated', 'icon', 'inverted', 'labeled', 'size', 'vertical']);
	            /* eslint-enable no-use-before-define */
	
	            other.className = (0, _classnames2.default)(this.props.className, this.getClasses());
	
	            return _react2.default.createElement(this.props.component, other, this.props.children);
	        }
	    }, {
	        key: 'getClasses',
	        value: function getClasses() {
	            var classes = {
	                // default
	                ui: this.props.defaultClasses,
	
	                // types
	                basic: this.props.basic,
	                icon: this.props.icon || (0, _utilities.isEveryChild)(this.props.children, _elements.IconButton),
	                inverted: this.props.inverted,
	                labeled: this.props.labeled || (0, _utilities.isEveryChild)(this.props.children, _elements.LabeledButton),
	
	                // variations
	                attached: this.props.attached,
	                compact: this.props.compact,
	                vertical: this.props.vertical,
	
	                // component
	                buttons: this.props.defaultClasses
	            };
	
	            var childCount = _react2.default.Children.count(this.props.children);
	
	            // buttons group with >0 buttons that are all of equal width
	            if (this.props.equal) {
	                if (childCount > 1 && childCount <= 12) {
	                    classes[_utilities.Numbers[childCount]] = true;
	                } else {
	                    classes['fluid'] = true;
	                }
	            }
	
	            classes[this.props.color] = !!this.props.color;
	            classes[this.props.size] = !!this.props.size;
	
	            return (0, _utilities.validateClassProps)(classes, this.props, validProps);
	        }
	    }]);
	
	    return Buttons;
	}(_react2.default.Component), _class.propTypes = {
	    /**
	     * It's attached to some other attachable component.
	     */
	    attached: _react2.default.PropTypes.oneOf(['bottom', 'top']),
	
	    /**
	     * Adds simple styling to the component.
	     */
	    basic: _react2.default.PropTypes.bool,
	
	    /**
	     * The child nodes of the component.
	     */
	    children: _react2.default.PropTypes.node,
	
	    /**
	     * Adds additional classes to the component.
	     */
	    className: _react2.default.PropTypes.node,
	
	    /**
	     * Adds a SemanticUI color class.
	     */
	    color: _react2.default.PropTypes.string,
	
	    /**
	     * Reduces the padding on the component.
	     */
	    compact: _react2.default.PropTypes.bool,
	
	    /**
	     * Overrides the component with a custom component string ('div') or
	     * ReactElement.
	     */
	    component: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.element, _react2.default.PropTypes.string]),
	
	    /**
	     * Adds the default classes for the component.
	     */
	    defaultClasses: _react2.default.PropTypes.bool,
	
	    /**
	     * Forces all children to an equal width.
	     */
	    equal: _react2.default.PropTypes.bool,
	
	    /**
	     * Forces to component to float left or right.
	     */
	    floated: _react2.default.PropTypes.oneOf(['right', 'left']),
	
	    /**
	     * Overrides default behavior and adds the icon class to the component.
	     */
	    icon: _react2.default.PropTypes.bool,
	
	    /**
	     * Styles the component for a dark background.
	     */
	    inverted: _react2.default.PropTypes.bool,
	
	    /**
	     * Overrides default behavior and adds the labeled class to the
	     * component.
	     */
	    labeled: _react2.default.PropTypes.bool,
	
	    /**
	     * Adds a SemanticUI size class.
	     */
	    size: _react2.default.PropTypes.string,
	
	    /**
	     * Forces child components to render vertically.
	     */
	    vertical: _react2.default.PropTypes.bool
	}, _class.childContextTypes = {
	    isAttached: _react2.default.PropTypes.bool,
	    isIconButtons: _react2.default.PropTypes.bool,
	    isLabeledButtons: _react2.default.PropTypes.bool
	}, _class.defaultProps = {
	    component: 'div',
	    defaultClasses: true
	}, _temp);
	exports.default = Buttons;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _class, _temp;
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _elements = __webpack_require__(1);
	
	var _utilities = __webpack_require__(4);
	
	var _classnames = __webpack_require__(5);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var LabeledButton = (_temp = _class = function (_React$Component) {
	    _inherits(LabeledButton, _React$Component);
	
	    function LabeledButton() {
	        _classCallCheck(this, LabeledButton);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(LabeledButton).apply(this, arguments));
	    }
	
	    _createClass(LabeledButton, [{
	        key: 'renderButton',
	
	
	        /*
	         *  Handles buttons with an image for a label
	         */
	        value: function renderButton() {
	            /* eslint-disable no-use-before-define */
	
	            var other = _objectWithoutProperties(this.props, []);
	            /* eslint-enable no-use-before-define */
	
	
	            other.icon = true;
	            other.labeled = this.props.labeled || true;
	
	            return _react2.default.createElement(
	                _elements.Button,
	                other,
	                this.props.children
	            );
	        }
	
	        /*
	         *  Wraps any non-label component(s) in a div with
	         */
	
	    }, {
	        key: 'renderChildren',
	        value: function renderChildren() {
	            var children = [];
	
	            // split children into Label and not Label arrays
	            var components = (0, _utilities.spliceChildren)(this.props.children, _elements.Label);
	
	            // labeled is consumed by the parent button
	            /* eslint-disable no-use-before-define */
	            var _props = this.props;
	            var labeled = _props.labeled;
	
	            var other = _objectWithoutProperties(_props, ['labeled']);
	            /* eslint-enable no-use-before-define */
	
	            other.className = (0, _classnames2.default)(this.props.className, this.getClasses());
	
	            var icon = _react2.default.createElement(
	                'div',
	                _extends({}, other, {
	                    key: 'icon'
	                }),
	                components.remaining
	            );
	
	            // if Label was spliced at index 0, put it first
	            if (components.index == 0) {
	                children.push(components.component);
	                children.push(icon);
	                // otherwise last
	            } else {
	                    children.push(icon);
	                    children.push(components.component);
	                }
	
	            return children;
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            // this must be an icon label
	            if (!(0, _utilities.hasChild)(this.props.children, _elements.Label)) {
	                return this.renderButton();
	            }
	
	            // most button props are consumed by the child
	            /* eslint-disable no-use-before-define */
	            var _props2 = this.props;
	            var active = _props2.active;
	            var basic = _props2.basic;
	            var color = _props2.color;
	            var circular = _props2.circular;
	            var compact = _props2.compact;
	            var fluid = _props2.fluid;
	            var inverted = _props2.inverted;
	            var size = _props2.size;
	
	            var other = _objectWithoutProperties(_props2, ['active', 'basic', 'color', 'circular', 'compact', 'fluid', 'inverted', 'size']);
	            /* eslint-enable no-use-before-define */
	
	            other.className = (0, _classnames2.default)(other.className);
	
	            // if the label was the first child, its direction must be left
	            if ((0, _utilities.hasFirstChild)(this.props.children, _elements.Label)) {
	                other.labeled = 'left';
	
	                // labels are on the right by default
	            } else {
	                    other.labeled = true;
	                }
	
	            return _react2.default.createElement(
	                _elements.Button,
	                other,
	                this.renderChildren()
	            );
	        }
	    }, {
	        key: 'getClasses',
	        value: function getClasses() {
	            var classes = {
	                // default
	                ui: this.props.defaultClasses,
	
	                // position based props
	                labeled: this.props.labeled,
	
	                // types
	                animated: false,
	                basic: this.props.basic,
	                icon: (0, _utilities.hasChild)(this.props.children, _elements.Icon) && _react2.default.Children.count(this.props.children) === 2,
	                inverted: this.props.inverted,
	
	                // states
	                active: this.props.active,
	                loading: this.props.loading,
	
	                // variations
	                circular: this.props.circular,
	                compact: this.props.compact,
	                fluid: false,
	
	                // component
	                button: this.props.defaultClasses
	            };
	
	            // string types
	            classes[this.props.color] = !!this.props.color;
	            classes[this.props.size] = !!this.props.size;
	            classes[this.props.social] = !!this.props.social;
	
	            return classes;
	        }
	    }]);
	
	    return LabeledButton;
	}(_react2.default.Component), _class.propTypes = {
	    active: _react2.default.PropTypes.bool,
	    basic: _react2.default.PropTypes.bool,
	    children: _react2.default.PropTypes.node,
	    circular: _react2.default.PropTypes.bool,
	    className: _react2.default.PropTypes.node,
	    color: _react2.default.PropTypes.string,
	    compact: _react2.default.PropTypes.bool,
	    component: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.element, _react2.default.PropTypes.string]),
	    defaultClasses: _react2.default.PropTypes.bool,
	    disabled: _react2.default.PropTypes.bool,
	    fluid: _react2.default.PropTypes.bool,
	    icon: _react2.default.PropTypes.bool,
	    inverted: _react2.default.PropTypes.bool,
	    labeled: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.bool]),
	    loading: _react2.default.PropTypes.bool,
	    negative: _react2.default.PropTypes.bool,
	    positive: _react2.default.PropTypes.bool,
	    primary: _react2.default.PropTypes.bool,
	    secondary: _react2.default.PropTypes.bool,
	    size: _react2.default.PropTypes.string,
	    social: _react2.default.PropTypes.string
	}, _class.contextTypes = {
	    isAttached: _react2.default.PropTypes.bool,
	    hasIconClass: _react2.default.PropTypes.bool
	}, _class.defaultProps = {
	    defaultClasses: true
	}, _temp);
	exports.default = LabeledButton;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _elements = __webpack_require__(1);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function renderChildren(children, name, social, iconColor) {
	    var componentChildren = [];
	
	    componentChildren.push(_react2.default.createElement(_elements.Icon, {
	        color: social ? null : iconColor,
	        key: 'icon',
	        name: name }));
	
	    _react2.default.Children.forEach(children, function (child) {
	        componentChildren.push(child);
	    });
	
	    return componentChildren;
	}
	
	var IconButton = function IconButton(_ref) {
	    var children = _ref.children;
	    var iconColor = _ref.iconColor;
	    var name = _ref.name;
	    var social = _ref.social;
	
	    var other = _objectWithoutProperties(_ref, ['children', 'iconColor', 'name', 'social']);
	
	    return _react2.default.createElement(
	        _elements.Button,
	        _extends({}, other, {
	            icon: _react2.default.Children.count(children) === 0,
	            social: social ? name : ''
	        }),
	        renderChildren(children, name, social, iconColor)
	    );
	};
	
	IconButton.propTypes = {
	    /**
	     * The child nodes of the component.
	     */
	    children: _react2.default.PropTypes.node,
	
	    /**
	     * Adds a SemanticUI color class to the icon.
	     */
	    iconColor: _react2.default.PropTypes.string,
	
	    /**
	     * Adds a SemanticUI name class to the icon.
	     */
	    name: _react2.default.PropTypes.string,
	
	    /**
	     * Renders as a social button if true (see SocialButton);
	     */
	    social: _react2.default.PropTypes.bool
	};
	
	exports.default = IconButton;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _elements = __webpack_require__(1);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var SocialButton = function SocialButton(_ref) {
	    var children = _ref.children;
	    var name = _ref.name;
	
	    var other = _objectWithoutProperties(_ref, ['children', 'name']);
	
	    return _react2.default.createElement(
	        _elements.IconButton,
	        _extends({}, other, {
	            icon: _react2.default.Children.count(children) === 0,
	            name: name,
	            social: true
	        }),
	        children
	    );
	};
	
	SocialButton.propTypes = {
	    /**
	     * The child nodes of the component.
	     */
	    children: _react2.default.PropTypes.node,
	
	    /**
	     * Adds a SemanticUI name class to the icon.
	     */
	    name: _react2.default.PropTypes.string.isRequired
	};
	
	exports.default = SocialButton;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _elements = __webpack_require__(1);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var PrimaryButton = function PrimaryButton(_ref) {
	    var children = _ref.children;
	
	    var other = _objectWithoutProperties(_ref, ['children']);
	
	    return _react2.default.createElement(
	        _elements.Button,
	        _extends({}, other, {
	            color: 'blue'
	        }),
	        children
	    );
	};
	
	PrimaryButton.propTypes = {
	    /**
	     * The child nodes of the component.
	     */
	    children: _react2.default.PropTypes.node
	};
	
	exports.default = PrimaryButton;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _elements = __webpack_require__(1);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var SuccessButton = function SuccessButton(_ref) {
	    var children = _ref.children;
	
	    var other = _objectWithoutProperties(_ref, ['children']);
	
	    return _react2.default.createElement(
	        _elements.Button,
	        _extends({}, other, {
	            color: 'green'
	        }),
	        children
	    );
	};
	
	SuccessButton.propTypes = {
	    /**
	     * The child nodes of the component.
	     */
	    children: _react2.default.PropTypes.node
	};
	
	exports.default = SuccessButton;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _elements = __webpack_require__(1);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var WarningButton = function WarningButton(_ref) {
	    var children = _ref.children;
	
	    var other = _objectWithoutProperties(_ref, ['children']);
	
	    return _react2.default.createElement(
	        _elements.Button,
	        _extends({}, other, {
	            color: 'yellow'
	        }),
	        children
	    );
	};
	
	WarningButton.propTypes = {
	    /**
	     * The child nodes of the component.
	     */
	    children: _react2.default.PropTypes.node
	};
	
	exports.default = WarningButton;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _elements = __webpack_require__(1);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var DangerButton = function DangerButton(_ref) {
	    var children = _ref.children;
	
	    var other = _objectWithoutProperties(_ref, ['children']);
	
	    return _react2.default.createElement(
	        _elements.Button,
	        _extends({}, other, {
	            color: 'red'
	        }),
	        children
	    );
	};
	
	DangerButton.propTypes = {
	    /**
	     * The child nodes of the component.
	     */
	    children: _react2.default.PropTypes.node
	};
	
	exports.default = DangerButton;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _class, _temp;
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(5);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	// Currently header/dividers are only headers. Maybe do both?
	var Divider = (_temp = _class = function (_React$Component) {
	    _inherits(Divider, _React$Component);
	
	    function Divider() {
	        _classCallCheck(this, Divider);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Divider).apply(this, arguments));
	    }
	
	    _createClass(Divider, [{
	        key: 'render',
	        value: function render() {
	            /* eslint-disable no-use-before-define */
	            var _props = this.props;
	            var aligned = _props.aligned;
	            var children = _props.children;
	            var className = _props.className;
	            var clearing = _props.clearing;
	            var component = _props.component;
	            var defaultClasses = _props.defaultClasses;
	            var header = _props.header;
	            var hidden = _props.hidden;
	            var inverted = _props.inverted;
	            var spacing = _props.spacing;
	
	            var other = _objectWithoutProperties(_props, ['aligned', 'children', 'className', 'clearing', 'component', 'defaultClasses', 'header', 'hidden', 'inverted', 'spacing']);
	            /* eslint-enable no-use-before-define */
	
	            other.className = (0, _classnames2.default)(this.props.className, this.getClasses());
	
	            return _react2.default.createElement(this.props.component, other, this.props.children);
	        }
	    }, {
	        key: 'getClasses',
	        value: function getClasses() {
	            return {
	                // default
	                ui: this.props.defaultClasses,
	
	                // types
	                header: this.props.header,
	                horizontal: this.props.aligned === 'horizontal',
	                vertical: this.props.aligned === 'vertical',
	
	                // variations
	                clearing: this.props.clearing,
	                fitted: this.props.spacing === 'fitted',
	                hidden: this.props.hidden,
	                inverted: this.props.inverted,
	                section: this.props.spacing === 'padded',
	
	                // component
	                divider: this.props.defaultClasses
	            };
	        }
	    }]);
	
	    return Divider;
	}(_react2.default.Component), _class.propTypes = {
	    aligned: _react2.default.PropTypes.oneOf(['horizontal', 'vertical']),
	    children: _react2.default.PropTypes.node,
	    className: _react2.default.PropTypes.node,
	    clearing: _react2.default.PropTypes.bool,
	    component: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.element, _react2.default.PropTypes.string]),
	    defaultClasses: _react2.default.PropTypes.bool,
	    header: _react2.default.PropTypes.bool,
	    hidden: _react2.default.PropTypes.bool,
	    inverted: _react2.default.PropTypes.bool,
	    spacing: _react2.default.PropTypes.oneOf(['fitted', 'padded'])
	}, _class.defaultProps = {
	    component: 'div',
	    defaultClasses: true
	}, _temp);
	exports.default = Divider;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _elements = __webpack_require__(1);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Flag = function Flag(props) {
	    var other = Object.assign({}, props);
	    other.className = 'flag';
	    other.defaultClasses = false;
	
	    return _react2.default.createElement(_elements.Icon, other);
	};
	
	Flag.propTypes = {
	    /**
	     * The country code, name or alias of the flag
	     */
	    name: _react2.default.PropTypes.string.isRequired
	};
	
	exports.default = Flag;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _class, _temp;
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _elements = __webpack_require__(1);
	
	var _utilities = __webpack_require__(4);
	
	var _classnames = __webpack_require__(5);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var validProps = {
	    aligned: ['right', 'left', 'justified', 'center'],
	    attached: ['bottom', 'top'],
	    floated: ['right', 'left']
	};
	
	var Header = (_temp = _class = function (_React$Component) {
	    _inherits(Header, _React$Component);
	
	    function Header() {
	        _classCallCheck(this, Header);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Header).apply(this, arguments));
	    }
	
	    _createClass(Header, [{
	        key: 'getChildContext',
	        // handles
	
	
	        // any header/sub header under a header is a sub header
	        value: function getChildContext() {
	            return {
	                isHeaderChild: true
	            };
	        }
	
	        // we don't want the ui in these circumstances
	
	    }, {
	        key: 'render',
	        value: function render() {
	            var Component = this.props.onClick ? 'a' : 'div';
	
	            /* eslint-disable no-use-before-define */
	            var _props = this.props;
	            var aligned = _props.aligned;
	            var attached = _props.attached;
	            var children = _props.children;
	            var className = _props.className;
	            var color = _props.color;
	            var component = _props.component;
	            var defaultClasses = _props.defaultClasses;
	            var disabled = _props.disabled;
	            var divider = _props.divider;
	            var emphasis = _props.emphasis;
	            var floated = _props.floated;
	            var horizontal = _props.horizontal;
	            var inverted = _props.inverted;
	            var item = _props.item;
	            var size = _props.size;
	
	            var other = _objectWithoutProperties(_props, ['aligned', 'attached', 'children', 'className', 'color', 'component', 'defaultClasses', 'disabled', 'divider', 'emphasis', 'floated', 'horizontal', 'inverted', 'item', 'size']);
	            /* eslint-enable no-use-before-define */
	
	            // add class names
	
	
	            other.className = (0, _classnames2.default)(this.props.className, this.getClasses());
	
	            return _react2.default.createElement(this.props.component || Component, other, this.props.children);
	        }
	    }, {
	        key: 'getClasses',
	        value: function getClasses() {
	            var classes = {
	                // default
	                ui: this.props.defaultClasses && !this.context.isListChild && !this.context.isHeaderChild && !this.context.isMenuChild,
	
	                // types
	                icon: (0, _utilities.hasChild)(this.props.children, _elements.Icon) && this.props.aligned == 'center',
	                item: this.context.isMenuChild && this.props.item,
	
	                // states
	                disabled: this.props.disabled,
	
	                // variations
	                aligned: this.props.aligned && this.props.aligned !== 'justified',
	                attached: this.props.attached,
	                block: this.props.emphasis == 'block',
	                dividing: this.props.emphasis == 'dividing',
	                divider: this.props.divider, // makes a header that is also a divider
	                floated: this.props.floated,
	                horizontal: this.props.horizontal,
	                inverted: this.props.inverted,
	
	                // component
	                header: this.props.defaultClasses
	            };
	
	            classes[this.props.color] = !!this.props.color;
	            classes[this.props.size] = !!this.props.size;
	
	            return (0, _utilities.validateClassProps)(classes, this.props, validProps);
	        }
	    }]);
	
	    return Header;
	}(_react2.default.Component), _class.propTypes = {
	    aligned: _react2.default.PropTypes.oneOf(['right', 'left', 'justified', 'center']),
	    attached: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.oneOf(['bottom', 'top']), _react2.default.PropTypes.bool]),
	    children: _react2.default.PropTypes.node,
	    className: _react2.default.PropTypes.node,
	    color: _react2.default.PropTypes.string,
	    component: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.element, _react2.default.PropTypes.string]),
	    defaultClasses: _react2.default.PropTypes.bool,
	    disabled: _react2.default.PropTypes.bool,
	    divider: _react2.default.PropTypes.bool,
	    emphasis: _react2.default.PropTypes.oneOf(['dividing', 'block']),
	    floated: _react2.default.PropTypes.oneOf(['right', 'left']),
	    horizontal: _react2.default.PropTypes.bool,
	    inverted: _react2.default.PropTypes.bool,
	    item: _react2.default.PropTypes.bool,
	    size: _react2.default.PropTypes.string
	}, _class.contextTypes = {
	    isListChild: _react2.default.PropTypes.bool,
	    isHeaderChild: _react2.default.PropTypes.bool,
	    isAccordionChild: _react2.default.PropTypes.bool,
	    isMenuChild: _react2.default.PropTypes.bool
	}, _class.childContextTypes = {
	    isHeaderChild: _react2.default.PropTypes.bool
	}, _class.defaultProps = {
	    attached: false,
	    defaultClasses: true,
	    item: true }, _temp);
	exports.default = Header;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _class, _temp;
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _elements = __webpack_require__(1);
	
	var _classnames = __webpack_require__(5);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var SubHeader = (_temp = _class = function (_React$Component) {
	    _inherits(SubHeader, _React$Component);
	
	    function SubHeader() {
	        _classCallCheck(this, SubHeader);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(SubHeader).apply(this, arguments));
	    }
	
	    _createClass(SubHeader, [{
	        key: 'render',
	        value: function render() {
	            /* eslint-disable no-use-before-define */
	            var _props = this.props;
	            var children = _props.children;
	            var className = _props.className;
	            var component = _props.component;
	            var defaultClasses = _props.defaultClasses;
	
	            var other = _objectWithoutProperties(_props, ['children', 'className', 'component', 'defaultClasses']);
	            /* eslint-enable no-use-before-define */
	
	            other.className = (0, _classnames2.default)(this.props.className, this.getClasses());
	
	            return _react2.default.createElement(
	            // can't set Header in default props as it comes back undefined
	            this.props.component || _elements.Header, other, this.props.children);
	        }
	    }, {
	        key: 'getClasses',
	        value: function getClasses() {
	            return {
	                // default
	                sub: this.props.defaultClasses
	            };
	        }
	    }]);
	
	    return SubHeader;
	}(_react2.default.Component), _class.propTypes = {
	    children: _react2.default.PropTypes.node,
	    className: _react2.default.PropTypes.node,
	    component: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.element, _react2.default.PropTypes.string]),
	    defaultClasses: _react2.default.PropTypes.bool
	}, _class.defaultProps = {
	    defaultClasses: true
	}, _temp);
	exports.default = SubHeader;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _class, _temp;
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _utilities = __webpack_require__(4);
	
	var _classnames = __webpack_require__(5);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var validProps = {
	    flipped: ['horizontally', 'vertically'],
	    rotated: ['clockwise', 'counterclockwise']
	};
	
	var Icon = (_temp = _class = function (_React$Component) {
	    _inherits(Icon, _React$Component);
	
	    function Icon() {
	        _classCallCheck(this, Icon);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Icon).apply(this, arguments));
	    }
	
	    _createClass(Icon, [{
	        key: 'render',
	        value: function render() {
	            /* eslint-disable no-use-before-define */
	            var _props = this.props;
	            var bordered = _props.bordered;
	            var circular = _props.circular;
	            var color = _props.color;
	            var component = _props.component;
	            var corner = _props.corner;
	            var defaultClasses = _props.defaultClasses;
	            var disabled = _props.disabled;
	            var fitted = _props.fitted;
	            var flipped = _props.flipped;
	            var inverted = _props.inverted;
	            var link = _props.link;
	            var loading = _props.loading;
	            var name = _props.name;
	            var rotated = _props.rotated;
	            var size = _props.size;
	
	            var other = _objectWithoutProperties(_props, ['bordered', 'circular', 'color', 'component', 'corner', 'defaultClasses', 'disabled', 'fitted', 'flipped', 'inverted', 'link', 'loading', 'name', 'rotated', 'size']);
	            /* eslint-enable no-use-before-define */
	
	            other.className = (0, _classnames2.default)(this.props.className, this.getClasses());
	
	            return _react2.default.createElement(this.props.component, other);
	        }
	    }, {
	        key: 'getClasses',
	        value: function getClasses() {
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
	
	                // component
	                icon: this.props.defaultClasses
	            };
	
	            // handle all string or mixed string/bool props
	
	            // classes[this.props.aligned] = !!this.props.aligned;
	            classes[this.props.size] = !!this.props.size;
	            classes[this.props.color] = !!this.props.color;
	            classes[this.props.name] = !!this.props.name;
	
	            return (0, _utilities.validateClassProps)(classes, this.props, validProps);
	        }
	    }]);
	
	    return Icon;
	}(_react2.default.Component), _class.propTypes = {
	    bordered: _react2.default.PropTypes.bool,
	    circular: _react2.default.PropTypes.bool,
	    className: _react2.default.PropTypes.node,
	    color: _react2.default.PropTypes.string,
	    component: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.element, _react2.default.PropTypes.string]),
	    corner: _react2.default.PropTypes.bool,
	    defaultClasses: _react2.default.PropTypes.bool,
	    disabled: _react2.default.PropTypes.bool,
	    fitted: _react2.default.PropTypes.bool,
	    flipped: _react2.default.PropTypes.oneOf(['horizontally', 'vertically']),
	    inverted: _react2.default.PropTypes.bool,
	    link: _react2.default.PropTypes.bool,
	    loading: _react2.default.PropTypes.bool,
	    name: _react2.default.PropTypes.string.isRequired,
	    onClick: _react2.default.PropTypes.func,
	    rotated: _react2.default.PropTypes.oneOf(['clockwise', 'counterclockwise']),
	    size: _react2.default.PropTypes.string
	}, _class.defaultProps = {
	    component: 'i',
	    defaultClasses: true
	}, _temp);
	exports.default = Icon;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _class, _temp;
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _icon = __webpack_require__(18);
	
	var _icon2 = _interopRequireDefault(_icon);
	
	var _utilities = __webpack_require__(4);
	
	var _classnames = __webpack_require__(5);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var validProps = {
	    flipped: ['horizontally', 'vertically'],
	    rotated: ['clockwise', 'counterclockwise']
	};
	
	var Icons = (_temp = _class = function (_React$Component) {
	    _inherits(Icons, _React$Component);
	
	    function Icons() {
	        _classCallCheck(this, Icons);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Icons).apply(this, arguments));
	    }
	
	    _createClass(Icons, [{
	        key: 'render',
	        value: function render() {
	            /* eslint-disable no-use-before-define */
	            var _props = this.props;
	            var bordered = _props.bordered;
	            var children = _props.children;
	            var circular = _props.circular;
	            var className = _props.className;
	            var color = _props.color;
	            var component = _props.component;
	            var defaultClasses = _props.defaultClasses;
	            var disabled = _props.disabled;
	            var fitted = _props.fitted;
	            var flipped = _props.flipped;
	            var inverted = _props.inverted;
	            var link = _props.link;
	            var loading = _props.loading;
	            var rotated = _props.rotated;
	            var size = _props.size;
	
	            var other = _objectWithoutProperties(_props, ['bordered', 'children', 'circular', 'className', 'color', 'component', 'defaultClasses', 'disabled', 'fitted', 'flipped', 'inverted', 'link', 'loading', 'rotated', 'size']);
	            /* eslint-enable no-use-before-define */
	
	            other.className = (0, _classnames2.default)(this.props.className, this.getClasses());
	
	            return _react2.default.createElement(this.props.component, other, this.props.children);
	        }
	    }, {
	        key: 'getClasses',
	        value: function getClasses() {
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
	                flipped: this.props.flipped,
	                rotated: this.props.flipped,
	
	                // component
	                icons: this.props.defaultClasses
	            };
	
	            // props are undefined if not explicitly given a value
	            classes[this.props.size] = !!this.props.size;
	            classes[this.props.color] = !!this.props.color;
	
	            return (0, _utilities.validateClassProps)(classes, this.props, validProps);
	        }
	    }]);
	
	    return Icons;
	}(_react2.default.Component), _class.propTypes = {
	    bordered: _react2.default.PropTypes.bool,
	    children: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.instanceOf(_icon2.default), _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.instanceOf(_icon2.default))]),
	    circular: _react2.default.PropTypes.bool,
	    className: _react2.default.PropTypes.node,
	    color: _react2.default.PropTypes.string,
	    component: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.element, _react2.default.PropTypes.string]),
	    defaultClasses: _react2.default.PropTypes.bool,
	    disabled: _react2.default.PropTypes.bool,
	    fitted: _react2.default.PropTypes.bool,
	    flipped: _react2.default.PropTypes.oneOf(['horizontally', 'vertically']),
	    inverted: _react2.default.PropTypes.bool,
	    link: _react2.default.PropTypes.bool,
	    loading: _react2.default.PropTypes.bool,
	    rotated: _react2.default.PropTypes.oneOf(['clockwise', 'counterclockwise']),
	    size: _react2.default.PropTypes.string
	}, _class.defaultProps = {
	    defaultClasses: true,
	    component: 'i'
	}, _temp);
	exports.default = Icons;

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _class, _temp;
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _utilities = __webpack_require__(4);
	
	var _classnames = __webpack_require__(5);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var validProps = {
	    aligned: ['top', 'middle', 'bottom'],
	    floated: ['right', 'left'],
	    spaced: ['right', 'left']
	};
	
	// can't do SVG since JSX/React breaks on SVG images
	var Image = (_temp = _class = function (_React$Component) {
	    _inherits(Image, _React$Component);
	
	    function Image() {
	        _classCallCheck(this, Image);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Image).apply(this, arguments));
	    }
	
	    _createClass(Image, [{
	        key: 'renderComponent',
	
	
	        // we don't want the ui in these circumstances
	        value: function renderComponent(other) {
	            var imageDiv = _react2.default.createElement('img', {
	                key: 'image',
	                src: this.props.src });
	
	            return _react2.default.createElement(this.props.component || 'div', other, [this.props.children, imageDiv]);
	        }
	    }, {
	        key: 'renderImg',
	        value: function renderImg(other) {
	            return _react2.default.createElement('img', _extends({ src: this.props.src
	            }, other));
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            /* eslint-disable no-use-before-define */
	            var _props = this.props;
	            var aligned = _props.aligned;
	            var avatar = _props.avatar;
	            var bordered = _props.bordered;
	            var centered = _props.centered;
	            var children = _props.children;
	            var className = _props.className;
	            var component = _props.component;
	            var content = _props.content;
	            var defaultClasses = _props.defaultClasses;
	            var disabled = _props.disabled;
	            var floated = _props.floated;
	            var fluid = _props.fluid;
	            var shape = _props.shape;
	            var size = _props.size;
	            var spaced = _props.spaced;
	            var src = _props.src;
	            var visible = _props.visible;
	
	            var other = _objectWithoutProperties(_props, ['aligned', 'avatar', 'bordered', 'centered', 'children', 'className', 'component', 'content', 'defaultClasses', 'disabled', 'floated', 'fluid', 'shape', 'size', 'spaced', 'src', 'visible']);
	            /* eslint-enable no-use-before-define */
	
	            other.className = (0, _classnames2.default)(this.props.className, this.getClasses());
	
	            // if a custom tag or a child is passed, it will always render
	            // a custom tag/div
	            return _react2.default.Children.count(this.props.children) > 0 || this.props.component || this.props.avatar ? this.renderComponent(other) : this.renderImg(other);
	        }
	    }, {
	        key: 'getClasses',
	        value: function getClasses() {
	            var classes = {
	                // default
	                // is there a use-case for an image to be content and still have the ui/image classes?
	                ui: this.props.defaultClasses && !this.props.content,
	
	                // types
	                content: this.props.content,
	
	                // states
	                disabled: this.props.disabled,
	                hidden: this.props.visible === 'hidden' || this.props.visible === false,
	                visible: this.props.visible === 'visible' || this.props.visible === true,
	
	                // variations
	                aligned: this.props.aligned,
	                avatar: this.props.avatar,
	                bordered: this.props.bordered,
	                centered: this.props.centered,
	                circular: this.props.shape === 'circular',
	                floated: this.props.floated,
	                fluid: this.props.fluid,
	                rounded: this.props.shape === 'rounded',
	                spaced: this.props.spaced,
	
	                // component
	                image: this.props.defaultClasses && !this.props.content && this.context.isCommentsChild !== true
	
	            };
	
	            classes[this.props.size] = !!this.props.size;
	
	            return (0, _utilities.validateClassProps)(classes, this.props, validProps);
	        }
	    }]);
	
	    return Image;
	}(_react2.default.Component), _class.propTypes = {
	    aligned: _react2.default.PropTypes.oneOf(['top', 'middle', 'bottom']),
	    avatar: _react2.default.PropTypes.bool,
	    bordered: _react2.default.PropTypes.bool,
	    centered: _react2.default.PropTypes.bool,
	    children: _react2.default.PropTypes.node,
	    className: _react2.default.PropTypes.node,
	    component: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.element, _react2.default.PropTypes.string]),
	    content: _react2.default.PropTypes.bool,
	    defaultClasses: _react2.default.PropTypes.bool,
	    disabled: _react2.default.PropTypes.bool,
	    floated: _react2.default.PropTypes.oneOf(['right', 'left']),
	    fluid: _react2.default.PropTypes.bool,
	    shape: _react2.default.PropTypes.oneOf(['circular', 'rounded']),
	    size: _react2.default.PropTypes.string,
	    spaced: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.oneOf(['right', 'left']), _react2.default.PropTypes.bool]),
	    src: _react2.default.PropTypes.string.isRequired,
	    visible: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.oneOf(['hidden', 'visible']), _react2.default.PropTypes.bool])
	}, _class.contextTypes = {
	    isLabelChild: _react2.default.PropTypes.bool,
	    isCommentsChild: _react2.default.PropTypes.bool
	}, _class.defaultProps = {
	    defaultClasses: true
	}, _temp);
	exports.default = Image;

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _class, _temp;
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(5);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Images = (_temp = _class = function (_React$Component) {
	    _inherits(Images, _React$Component);
	
	    function Images() {
	        _classCallCheck(this, Images);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Images).apply(this, arguments));
	    }
	
	    _createClass(Images, [{
	        key: 'render',
	        value: function render() {
	            /* eslint-disable no-use-before-define */
	            var _props = this.props;
	            var avatar = _props.avatar;
	            var bordered = _props.bordered;
	            var children = _props.children;
	            var className = _props.className;
	            var component = _props.component;
	            var defaultClasses = _props.defaultClasses;
	            var disabled = _props.disabled;
	            var shape = _props.shape;
	            var size = _props.size;
	            var visible = _props.visible;
	
	            var other = _objectWithoutProperties(_props, ['avatar', 'bordered', 'children', 'className', 'component', 'defaultClasses', 'disabled', 'shape', 'size', 'visible']);
	            /* eslint-enable no-use-before-define */
	
	            other.className = (0, _classnames2.default)(this.props.className, this.getClasses());
	
	            return _react2.default.createElement(this.props.component, other, this.props.children);
	        }
	    }, {
	        key: 'getClasses',
	        value: function getClasses() {
	            var classes = {
	                // default
	                ui: this.props.defaultClasses,
	
	                // types
	
	                // states
	                hidden: this.props.visible === 'hidden' || this.props.visible === false,
	                disabled: this.props.disabled,
	
	                // variations
	                avatar: this.props.avatar,
	                bordered: this.props.bordered,
	                circular: this.props.shape === 'circular',
	                rounded: this.props.shape === 'rounded',
	
	                // component
	                images: this.props.defaultClasses
	            };
	
	            classes[this.props.size] = !!this.props.size;
	
	            return classes;
	        }
	    }]);
	
	    return Images;
	}(_react2.default.Component), _class.propTypes = {
	    avatar: _react2.default.PropTypes.bool,
	    bordered: _react2.default.PropTypes.bool,
	    children: _react2.default.PropTypes.node,
	    className: _react2.default.PropTypes.node,
	    component: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.element, _react2.default.PropTypes.string]),
	    defaultClasses: _react2.default.PropTypes.bool,
	    disabled: _react2.default.PropTypes.bool,
	    shape: _react2.default.PropTypes.oneOf(['circular', 'rounded']),
	    size: _react2.default.PropTypes.string,
	    visible: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.oneOf(['hidden', 'visible']), _react2.default.PropTypes.bool])
	}, _class.defaultProps = {
	    component: 'div',
	    defaultClasses: true
	}, _temp);
	exports.default = Images;

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _class, _temp;
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _elements = __webpack_require__(1);
	
	var _classnames = __webpack_require__(5);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Input = (_temp = _class = function (_React$Component) {
	    _inherits(Input, _React$Component);
	
	    function Input() {
	        _classCallCheck(this, Input);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Input).apply(this, arguments));
	    }
	
	    _createClass(Input, [{
	        key: 'renderText',
	        value: function renderText() {
	            // see if icon and label are children
	            this.processChildren();
	
	            /* eslint-disable no-use-before-define */
	            var _props = this.props;
	            var children = _props.children;
	            var className = _props.className;
	            var defaultClasses = _props.defaultClasses;
	            var icon = _props.icon;
	            var labeled = _props.labeled;
	            var loading = _props.loading;
	            var name = _props.name;
	            var placeholder = _props.placeholder;
	
	            var other = _objectWithoutProperties(_props, ['children', 'className', 'defaultClasses', 'icon', 'labeled', 'loading', 'name', 'placeholder']);
	            /* eslint-enable no-use-before-define */
	
	            other.className = (0, _classnames2.default)(this.props.className, this.getLabelClasses(), this.getIconClasses(), this.getClasses());
	
	            return _react2.default.createElement(this.props.component, other, this.prepareInput());
	        }
	
	        // potential for types other than text
	
	    }, {
	        key: 'render',
	        value: function render() {
	            return this.renderText();
	        }
	    }, {
	        key: 'getClasses',
	        value: function getClasses() {
	            var classes = {
	                // default
	                ui: this.props.defaultClasses,
	
	                // types
	                input: this.props.defaultClasses,
	
	                // states
	                disabled: this.props.state === 'disabled',
	                error: this.props.state === 'error',
	                focus: this.props.focus,
	                loading: this.props.loading,
	
	                // variations
	                action: this.props.action,
	                fluid: this.props.fluid,
	                inverted: this.props.inverted,
	                size: this.props.size,
	                transparent: this.props.transparent
	            };
	
	            classes[this.props.size] = !!this.props.size;
	
	            return classes;
	        }
	
	        // sets iconClass if Icon is a child
	
	    }, {
	        key: 'getIconClasses',
	        value: function getIconClasses() {
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
	        key: 'getLabelClasses',
	        value: function getLabelClasses() {
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
	        value: function prepareInput() {
	            var labelClasses = this.getLabelClasses();
	            var input = [];
	
	            // the actual input element
	            var inputHTML = _react2.default.createElement('input', {
	                key: 'input',
	                placeholder: this.props.placeholder });
	
	            if (labelClasses.corner) {
	                input.push(inputHTML);
	                input.push(this.props.children);
	            } else {
	                input.push(this.children.icon);
	
	                // if label is on the right, put the input on the left
	                if (labelClasses.right) {
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
	
	            _react2.default.Children.forEach(this.props.children, function (child) {
	                if (child.type === _elements.Icon && typeof child.type !== 'undefined') {
	                    children.icon = child;
	                } else if (child.type === _elements.Label && typeof child.type !== 'undefined') {
	                    children.label = child;
	                }
	            });
	
	            this.children = children;
	        }
	    }]);
	
	    return Input;
	}(_react2.default.Component), _class.propTypes = {
	    action: _react2.default.PropTypes.bool,
	    children: _react2.default.PropTypes.node,
	    className: _react2.default.PropTypes.node,
	    component: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.element, _react2.default.PropTypes.string]),
	    defaultClasses: _react2.default.PropTypes.bool,
	    fluid: _react2.default.PropTypes.bool,
	    focus: _react2.default.PropTypes.bool,
	    icon: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.bool]),
	    inverted: _react2.default.PropTypes.bool,
	    labeled: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.bool]),
	    loading: _react2.default.PropTypes.bool,
	    name: _react2.default.PropTypes.string,
	    placeholder: _react2.default.PropTypes.string,
	    size: _react2.default.PropTypes.string,
	    state: _react2.default.PropTypes.oneOf(['disabled', 'error']),
	    transparent: _react2.default.PropTypes.bool
	}, _class.defaultProps = {
	    component: 'div',
	    defaultClasses: true,
	    loading: false,
	    placeholder: 'Search...'
	}, _temp);
	exports.default = Input;

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _class, _temp;
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(5);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Detail = (_temp = _class = function (_React$Component) {
	    _inherits(Detail, _React$Component);
	
	    function Detail() {
	        _classCallCheck(this, Detail);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Detail).apply(this, arguments));
	    }
	
	    _createClass(Detail, [{
	        key: 'render',
	        value: function render() {
	            var Component = this.props.onClick ? 'a' : 'div';
	            /* eslint-disable no-use-before-define */
	            var _props = this.props;
	            var defaultClasses = _props.defaultClasses;
	
	            var other = _objectWithoutProperties(_props, ['defaultClasses']);
	            /* eslint-enable no-use-before-define */
	
	            other.className = (0, _classnames2.default)(this.props.className, this.getClasses());
	
	            return _react2.default.createElement(this.props.component || Component, other, this.props.children);
	        }
	    }, {
	        key: 'getClasses',
	        value: function getClasses() {
	            return {
	                // default
	                detail: this.props.defaultClasses
	            };
	        }
	    }]);
	
	    return Detail;
	}(_react2.default.Component), _class.propTypes = {
	    children: _react2.default.PropTypes.node,
	    className: _react2.default.PropTypes.node,
	    component: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.element, _react2.default.PropTypes.string]),
	    defaultClasses: _react2.default.PropTypes.bool,
	    onClick: _react2.default.PropTypes.func
	}, _class.defaultProps = {
	    defaultClasses: true
	}, _temp);
	exports.default = Detail;

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _class, _temp;
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _utilities = __webpack_require__(4);
	
	var _elements = __webpack_require__(1);
	
	var _classnames = __webpack_require__(5);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var validProps = {
	    attached: ['top', 'bottom', 'top right', 'top left', 'bottom left', 'bottom right'],
	    corner: ['left', 'right'],
	    pointing: ['below', 'left', 'right'],
	    ribbon: ['right']
	};
	
	var Label = (_temp = _class = function (_React$Component) {
	    _inherits(Label, _React$Component);
	
	    function Label() {
	        _classCallCheck(this, Label);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Label).apply(this, arguments));
	    }
	
	    _createClass(Label, [{
	        key: 'getChildContext',
	
	
	        // any header/sub header under a header is a sub header
	        value: function getChildContext() {
	            return {
	                isLabelChild: true
	            };
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            // if it's attached or animated use a div instead of a button
	
	            var Component = this.props.onClick ? 'a' : 'div';
	
	            /* eslint-disable no-use-before-define */
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
	            /* eslint-enable no-use-before-define */
	
	            other.className = (0, _classnames2.default)(this.props.className, this.getClasses());
	
	            return _react2.default.createElement(this.props.component || Component, other, this.props.children);
	        }
	    }, {
	        key: 'getClasses',
	        value: function getClasses() {
	            var classes = {
	                // default
	                ui: this.props.defaultClasses && !this.context.isCardsChild && !this.context.isProgressChild,
	
	                // types
	                attached: this.props.attached,
	                corner: this.props.corner,
	                floating: this.props.floating,
	                image: this.props.image || (0, _utilities.hasChild)(this.props.children, _elements.Image),
	                pointing: this.props.pointing,
	                ribbon: this.props.ribbon,
	                tag: this.props.tag,
	                basic: this.props.basic,
	
	                // variations
	                circular: this.props.circular,
	
	                // component
	                label: this.props.defaultClasses
	            };
	
	            // handle mixed string/bool props
	            classes[this.props.color] = !!this.props.color;
	            classes[this.props.size] = !!this.props.size;
	
	            return (0, _utilities.validateClassProps)(classes, this.props, validProps);
	        }
	    }]);
	
	    return Label;
	}(_react2.default.Component), _class.propTypes = {
	    attached: _react2.default.PropTypes.oneOf(['top', 'bottom', 'top right', 'top left', 'bottom left', 'bottom right']),
	    basic: _react2.default.PropTypes.bool,
	    children: _react2.default.PropTypes.node,
	    circular: _react2.default.PropTypes.bool,
	    className: _react2.default.PropTypes.node,
	    color: _react2.default.PropTypes.string,
	    component: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.element, _react2.default.PropTypes.string]),
	    corner: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.oneOf(['left', 'right']), _react2.default.PropTypes.bool]),
	    defaultClasses: _react2.default.PropTypes.bool,
	    floating: _react2.default.PropTypes.bool,
	    image: _react2.default.PropTypes.bool,
	    label: _react2.default.PropTypes.bool,
	    left: _react2.default.PropTypes.bool,
	    link: _react2.default.PropTypes.bool,
	    onClick: _react2.default.PropTypes.func,
	    pointing: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.oneOf(['below', 'left', 'right']), _react2.default.PropTypes.bool]),
	    ribbon: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.oneOf(['right']), _react2.default.PropTypes.bool]),
	    right: _react2.default.PropTypes.bool,
	    size: _react2.default.PropTypes.string,
	    tag: _react2.default.PropTypes.bool
	}, _class.contextTypes = {
	    isCardsChild: _react2.default.PropTypes.bool,
	    isProgressChild: _react2.default.PropTypes.bool
	}, _class.childContextTypes = {
	    isLabelChild: _react2.default.PropTypes.bool
	}, _class.defaultProps = {
	    corner: false,
	    defaultClasses: true,
	    pointing: false,
	    ribbon: false
	}, _temp);
	exports.default = Label;

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _class, _temp;
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(5);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Labels = (_temp = _class = function (_React$Component) {
	    _inherits(Labels, _React$Component);
	
	    function Labels() {
	        _classCallCheck(this, Labels);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Labels).apply(this, arguments));
	    }
	
	    _createClass(Labels, [{
	        key: 'render',
	        value: function render() {
	            /* eslint-disable no-use-before-define */
	            var _props = this.props;
	            var circular = _props.circular;
	            var component = _props.component;
	            var color = _props.color;
	            var defaultClasses = _props.defaultClasses;
	            var size = _props.size;
	            var tag = _props.tag;
	
	            var other = _objectWithoutProperties(_props, ['circular', 'component', 'color', 'defaultClasses', 'size', 'tag']);
	            /* eslint-enable no-use-before-define */
	
	            other.className = (0, _classnames2.default)(this.props.className, this.getClasses());
	
	            return _react2.default.createElement(this.props.component, other, this.props.children);
	        }
	
	        // we only set defaults for props that can be both bool and string + the defaultClasses
	
	    }, {
	        key: 'getClasses',
	        value: function getClasses() {
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
	
	            classes[this.props.color] = !!this.props.color;
	            classes[this.props.size] = !!this.props.size;
	
	            return classes;
	        }
	    }]);
	
	    return Labels;
	}(_react2.default.Component), _class.propTypes = {
	    children: _react2.default.PropTypes.node,
	    circular: _react2.default.PropTypes.bool,
	    className: _react2.default.PropTypes.node,
	    color: _react2.default.PropTypes.string,
	    component: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.element, _react2.default.PropTypes.string]),
	    defaultClasses: _react2.default.PropTypes.bool,
	    size: _react2.default.PropTypes.string,
	    tag: _react2.default.PropTypes.bool
	}, _class.defaultProps = {
	    component: 'div',
	    defaultClasses: true
	}, _temp);
	exports.default = Labels;

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _class, _temp;
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _utilities = __webpack_require__(4);
	
	var _classnames = __webpack_require__(5);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var validProps = {
	    aligned: ['top', 'middle', 'bottom'],
	    floated: ['right', 'left']
	};
	
	var List = (_temp = _class = function (_React$Component) {
	    _inherits(List, _React$Component);
	
	    function List() {
	        _classCallCheck(this, List);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(List).apply(this, arguments));
	    }
	
	    _createClass(List, [{
	        key: 'getChildContext',
	        value: function getChildContext() {
	            return {
	                isListChild: true
	            };
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            /* eslint-disable no-use-before-define */
	            var _props = this.props;
	            var aligned = _props.aligned;
	            var animated = _props.animated;
	            var celled = _props.celled;
	            var defaultClasses = _props.defaultClasses;
	            var horizontal = _props.horizontal;
	            var inverted = _props.inverted;
	            var link = _props.link;
	            var relaxed = _props.relaxed;
	            var selection = _props.selection;
	            var size = _props.size;
	            var type = _props.type;
	
	            var other = _objectWithoutProperties(_props, ['aligned', 'animated', 'celled', 'defaultClasses', 'horizontal', 'inverted', 'link', 'relaxed', 'selection', 'size', 'type']);
	            /* eslint-enable no-use-before-define */
	
	            other.className = (0, _classnames2.default)(this.props.className, this.getClasses());
	
	            return _react2.default.createElement(this.props.component, other, this.props.children);
	        }
	    }, {
	        key: 'getClasses',
	        value: function getClasses() {
	            var classes = {
	                // default
	                ui: this.props.defaultClasses,
	
	                // types
	                bulleted: this.props.type === 'bulleted',
	                horizontal: this.props.horizontal,
	                link: this.props.link,
	                ordered: this.props.type === 'ordered',
	
	                // variations
	                animated: this.props.animated,
	                celled: this.props.celled && this.props.celled !== 'divided',
	                divided: this.props.celled === 'divided',
	                inverted: this.props.inverted,
	                relaxed: this.props.relaxed,
	                selection: this.props.selection,
	                aligned: this.props.aligned,
	
	                // component
	                list: this.props.defaultClasses
	            };
	
	            classes[this.props.size] = !!this.props.size;
	
	            return (0, _utilities.validateClassProps)(classes, this.props, validProps);
	        }
	    }]);
	
	    return List;
	}(_react2.default.Component), _class.propTypes = {
	    aligned: _react2.default.PropTypes.oneOf(['top', 'middle', 'bottom']),
	    animated: _react2.default.PropTypes.bool,
	    celled: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.oneOf(['divided']), _react2.default.PropTypes.bool]),
	    children: _react2.default.PropTypes.node,
	    className: _react2.default.PropTypes.node,
	    component: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.element, _react2.default.PropTypes.string]),
	    defaultClasses: _react2.default.PropTypes.bool,
	    floated: _react2.default.PropTypes.oneOf(['right', 'left']),
	    horizontal: _react2.default.PropTypes.bool,
	    inverted: _react2.default.PropTypes.bool,
	    link: _react2.default.PropTypes.bool,
	    relaxed: _react2.default.PropTypes.bool,
	    selection: _react2.default.PropTypes.bool,
	    size: _react2.default.PropTypes.string,
	    type: _react2.default.PropTypes.oneOf(['bulleted', 'ordered'])
	}, _class.childContextTypes = {
	    isListChild: _react2.default.PropTypes.bool
	}, _class.defaultProps = {
	    component: 'div',
	    defaultClasses: true
	}, _temp);
	exports.default = List;

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _class, _temp;
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _utilities = __webpack_require__(4);
	
	var _classnames = __webpack_require__(5);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Loader = (_temp = _class = function (_React$Component) {
	    _inherits(Loader, _React$Component);
	
	    function Loader() {
	        _classCallCheck(this, Loader);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Loader).apply(this, arguments));
	    }
	
	    _createClass(Loader, [{
	        key: 'render',
	        value: function render() {
	            /* eslint-disable no-use-before-define */
	
	            var other = _objectWithoutProperties(this.props, []);
	            /* eslint-enable no-use-before-define */
	
	            other.className = (0, _classnames2.default)(this.props.className, this.getClasses());
	
	            return _react2.default.createElement(this.props.component, other, this.props.children);
	        }
	    }, {
	        key: 'getClasses',
	        value: function getClasses() {
	            var classes = {
	                ui: this.props.defaultClasses,
	
	                active: this.props.state === 'active',
	                centered: this.props.centered,
	                indeterminate: this.props.state === 'indeterminate',
	                inline: this.props.inline,
	                inverted: this.props.inverted,
	                text: this.props.text || (0, _utilities.hasChild)(this.props.children, 'string'),
	                disabled: this.props.state === 'disabled',
	
	                // component
	                loader: this.props.defaultClasses
	            };
	
	            classes[this.props.size] = !!this.props.size;
	
	            return classes;
	        }
	    }]);
	
	    return Loader;
	}(_react2.default.Component), _class.propTypes = {
	    centered: _react2.default.PropTypes.bool,
	    children: _react2.default.PropTypes.node,
	    className: _react2.default.PropTypes.node,
	    component: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.element, _react2.default.PropTypes.string]),
	    defaultClasses: _react2.default.PropTypes.bool,
	    inline: _react2.default.PropTypes.bool,
	    inverted: _react2.default.PropTypes.bool,
	    size: _react2.default.PropTypes.string,
	    state: _react2.default.PropTypes.oneOf(['active', 'indeterminate', 'disabled']),
	    text: _react2.default.PropTypes.bool
	}, _class.defaultProps = {
	    defaultClasses: true,
	    component: 'div'
	}, _temp);
	exports.default = Loader;

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _class, _temp;
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(5);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Rail = (_temp = _class = function (_React$Component) {
	    _inherits(Rail, _React$Component);
	
	    function Rail() {
	        _classCallCheck(this, Rail);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Rail).apply(this, arguments));
	    }
	
	    _createClass(Rail, [{
	        key: 'render',
	        value: function render() {
	            /* eslint-disable no-use-before-define */
	            var _props = this.props;
	            var attached = _props.attached;
	            var children = _props.children;
	            var className = _props.className;
	            var close = _props.close;
	            var defaultClasses = _props.defaultClasses;
	            var dividing = _props.dividing;
	            var floated = _props.floated;
	            var internal = _props.internal;
	
	            var other = _objectWithoutProperties(_props, ['attached', 'children', 'className', 'close', 'defaultClasses', 'dividing', 'floated', 'internal']);
	            /* eslint-enable no-use-before-define */
	
	            other.className = (0, _classnames2.default)(this.props.className, this.getClasses());
	
	            return _react2.default.createElement(this.props.component, other, this.props.children);
	        }
	    }, {
	        key: 'getClasses',
	        value: function getClasses() {
	            return {
	                // default
	                ui: this.props.defaultClasses,
	
	                right: this.props.floated === 'right',
	                left: this.props.floated === 'left',
	
	                // types
	                attached: this.props.attached,
	                very: this.props.closer,
	                close: this.props.close || this.props.closer,
	                dividing: this.props.dividing,
	                internal: this.props.internal,
	
	                // component
	                rail: this.props.defaultClasses
	            };
	        }
	    }]);
	
	    return Rail;
	}(_react2.default.Component), _class.propTypes = {
	    attached: _react2.default.PropTypes.bool,
	    children: _react2.default.PropTypes.any,
	    className: _react2.default.PropTypes.node,
	    close: _react2.default.PropTypes.bool,
	    closer: _react2.default.PropTypes.bool,
	    component: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.element, _react2.default.PropTypes.string]),
	    defaultClasses: _react2.default.PropTypes.bool,
	    dividing: _react2.default.PropTypes.bool,
	    floated: _react2.default.PropTypes.oneOf(['right', 'left']).isRequired,
	    internal: _react2.default.PropTypes.bool
	}, _class.defaultProps = {
	    component: 'div',
	    close: false,
	    defaultClasses: true
	}, _temp);
	exports.default = Rail;

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _class, _temp;
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _elements = __webpack_require__(1);
	
	var _utilities = __webpack_require__(4);
	
	var _classnames = __webpack_require__(5);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var validProps = {
	    move: ['right', 'up', 'down'],
	    rotate: ['left']
	};
	
	var Reveal = (_temp = _class = function (_React$Component) {
	    _inherits(Reveal, _React$Component);
	
	    function Reveal() {
	        _classCallCheck(this, Reveal);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Reveal).apply(this, arguments));
	    }
	
	    _createClass(Reveal, [{
	        key: 'render',
	        value: function render() {
	            /* eslint-disable no-use-before-define */
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
	
	            var other = _objectWithoutProperties(_props, ['active', 'circular', 'children', 'className', 'defaultClasses', 'disabled', 'fade', 'instant', 'image', 'move', 'rotate', 'size']);
	            /* eslint-enable no-use-before-define */
	
	            other.className = (0, _classnames2.default)(this.props.className, this.getClasses());
	
	            return _react2.default.createElement(this.props.component, other, this.props.children);
	        }
	    }, {
	        key: 'getClasses',
	        value: function getClasses() {
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
	
	            classes[this.props.size] = !!this.props.size;
	
	            return (0, _utilities.validateClassProps)(classes, this.props, validProps);
	        }
	    }]);
	
	    return Reveal;
	}(_react2.default.Component), _class.propTypes = {
	    active: _react2.default.PropTypes.bool,
	    children: _react2.default.PropTypes.node,
	    circular: _react2.default.PropTypes.bool,
	    className: _react2.default.PropTypes.node,
	    component: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.element, _react2.default.PropTypes.string]),
	    defaultClasses: _react2.default.PropTypes.bool,
	    disabled: _react2.default.PropTypes.bool,
	    fade: _react2.default.PropTypes.bool,
	    image: _react2.default.PropTypes.bool,
	    instant: _react2.default.PropTypes.bool,
	    move: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.oneOf(['right', 'up', 'down']), _react2.default.PropTypes.bool]),
	    rotate: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.oneOf(['left']), _react2.default.PropTypes.bool]),
	    // required?
	    size: _react2.default.PropTypes.string,
	    type: _react2.default.PropTypes.string
	}, _class.defaultProps = {
	    component: 'div',
	    defaultClasses: true,
	    image: false,
	    move: false,
	    rotate: false,
	    size: 'small'
	}, _temp);
	exports.default = Reveal;

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _class, _temp;
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _utilities = __webpack_require__(4);
	
	var _classnames = __webpack_require__(5);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var validProps = {
	    aligned: ['right', 'left', 'center'],
	    attached: ['bottom', 'top'],
	    floated: ['right', 'left']
	};
	
	var Segment = (_temp = _class = function (_React$Component) {
	    _inherits(Segment, _React$Component);
	
	    function Segment() {
	        _classCallCheck(this, Segment);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Segment).apply(this, arguments));
	    }
	
	    _createClass(Segment, [{
	        key: 'render',
	        value: function render() {
	            /* eslint-disable no-use-before-define */
	            var _props = this.props;
	            var aligned = _props.aligned;
	            var component = _props.component;
	            var attached = _props.attached;
	            var basic = _props.basic;
	            var blurring = _props.blurring;
	            var children = _props.children;
	            var className = _props.className;
	            var clearing = _props.clearing;
	            var color = _props.color;
	            var defaultClasses = _props.defaultClasses;
	            var disabled = _props.disabled;
	            var emphasis = _props.emphasis;
	            var floated = _props.floated;
	            var index = _props.index;
	            var inverted = _props.inverted;
	            var loading = _props.loading;
	            var vertical = _props.vertical;
	            var zIndex = _props.zIndex;
	
	            var other = _objectWithoutProperties(_props, ['aligned', 'component', 'attached', 'basic', 'blurring', 'children', 'className', 'clearing', 'color', 'defaultClasses', 'disabled', 'emphasis', 'floated', 'index', 'inverted', 'loading', 'vertical', 'zIndex']);
	            /* eslint-enable no-use-before-define */
	
	            other.className = (0, _classnames2.default)(this.props.className, this.getClasses());
	            other.style = this.getStyle();
	
	            if (typeof this.props.component == 'function' && this.props.component.displayName == 'Segment') {
	                component = 'div';
	            } else {
	                component = this.props.component;
	            }
	
	            return _react2.default.createElement(component, other, this.props.children);
	        }
	    }, {
	        key: 'getClasses',
	        value: function getClasses() {
	            var classes = {
	                // default
	                ui: this.props.defaultClasses,
	
	                // positioning
	                right: false,
	                left: false,
	                center: false,
	                top: false,
	                bottom: false,
	
	                // types
	                raised: this.props.type === 'raised',
	                stacked: this.props.type === 'stacked',
	                piled: this.props.type === 'piled',
	                vertical: this.props.vertical,
	
	                // states
	                disabled: this.props.disabled,
	                loading: this.props.loading,
	
	                // variations
	                aligned: this.props.aligned,
	                attached: this.props.attached,
	                basic: this.props.basic,
	                blurring: this.props.blurring,
	                clearing: this.props.clearing,
	                compact: this.props.spacing === 'fitted',
	                container: this.props.container,
	                floated: this.props.floated,
	                inverted: this.props.inverted,
	                padded: this.props.spacing === 'padded',
	                primary: this.props.emphasis === 'primary',
	                secondary: this.props.emphasis === 'secondary',
	                tertiary: this.props.emphasis === 'tertiary',
	
	                // component
	                segment: this.props.defaultClasses
	            };
	
	            classes[this.props.color] = !!this.props.color;
	
	            return (0, _utilities.validateClassProps)(classes, this.props, validProps);
	        }
	    }, {
	        key: 'getStyle',
	        value: function getStyle() {
	            var style = this.props.style;
	
	            if (this.props.type === 'piled' && !style.zIndex) {
	                style.zIndex = this.props.zIndex || 0;
	            }
	
	            return style;
	        }
	    }]);
	
	    return Segment;
	}(_react2.default.Component), _class.propTypes = {
	    aligned: _react2.default.PropTypes.oneOf(['right', 'left', 'center']),
	    attached: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.oneOf(['bottom', 'top']), _react2.default.PropTypes.bool]),
	    basic: _react2.default.PropTypes.bool,
	    blurring: _react2.default.PropTypes.bool,
	    children: _react2.default.PropTypes.any,
	    className: _react2.default.PropTypes.node,
	    clearing: _react2.default.PropTypes.bool,
	    color: _react2.default.PropTypes.string,
	    component: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.element, _react2.default.PropTypes.string]),
	    container: _react2.default.PropTypes.bool,
	    defaultClasses: _react2.default.PropTypes.bool,
	    disabled: _react2.default.PropTypes.bool,
	    emphasis: _react2.default.PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
	    floated: _react2.default.PropTypes.oneOf(['right', 'left']),
	    index: _react2.default.PropTypes.number,
	    inverted: _react2.default.PropTypes.bool,
	    loading: _react2.default.PropTypes.bool,
	    spacing: _react2.default.PropTypes.oneOf(['fitted', 'padded']),
	    style: _react2.default.PropTypes.object,
	    type: _react2.default.PropTypes.oneOf(['raised', 'stacked', 'piled']),
	    vertical: _react2.default.PropTypes.bool,
	    zIndex: _react2.default.PropTypes.number
	}, _class.defaultProps = {
	    component: 'div',
	    defaultClasses: true,
	    attached: false,
	    style: {}
	}, _temp);
	exports.default = Segment;

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _class, _temp;
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(5);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Segments = (_temp = _class = function (_React$Component) {
	    _inherits(Segments, _React$Component);
	
	    function Segments() {
	        _classCallCheck(this, Segments);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Segments).apply(this, arguments));
	    }
	
	    _createClass(Segments, [{
	        key: 'render',
	        value: function render() {
	            /* eslint-disable no-use-before-define */
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
	            /* eslint-enable no-use-before-define */
	
	            other.className = (0, _classnames2.default)(this.props.className, this.getClasses());
	
	            return _react2.default.createElement(this.props.component, other, this.props.children);
	        }
	    }, {
	        key: 'getClasses',
	        value: function getClasses() {
	            return {
	                ui: this.props.defaultClasses,
	                segments: this.props.defaultClasses,
	                horizontal: this.props.horizontal,
	                raised: this.props.raised,
	                stacked: this.props.stacked,
	                piled: this.props.piled,
	                compact: this.props.compact,
	                inverted: this.props.inverted
	            };
	        }
	    }]);
	
	    return Segments;
	}(_react2.default.Component), _class.propTypes = {
	    children: _react2.default.PropTypes.node,
	    className: _react2.default.PropTypes.node,
	    compact: _react2.default.PropTypes.bool,
	    component: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.element, _react2.default.PropTypes.string]),
	    defaultClasses: _react2.default.PropTypes.bool,
	    horizontal: _react2.default.PropTypes.bool,
	    inverted: _react2.default.PropTypes.bool,
	    piled: _react2.default.PropTypes.bool,
	    raised: _react2.default.PropTypes.bool,
	    stacked: _react2.default.PropTypes.bool
	}, _class.defaultProps = {
	    component: 'div',
	    defaultClasses: true
	}, _temp);
	exports.default = Segments;

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(5);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var Actions = function Actions(_ref) {
	    var children = _ref.children;
	    var className = _ref.className;
	    var component = _ref.component;
	
	    var other = _objectWithoutProperties(_ref, ['children', 'className', 'component']);
	
	    other.className = (0, _classnames2.default)(className, { actions: true });
	
	    return _react2.default.createElement(component, other, children);
	};
	
	Actions.propTypes = {
	    children: _react2.default.PropTypes.node,
	    className: _react2.default.PropTypes.any,
	    component: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.element, _react2.default.PropTypes.string])
	};
	
	Actions.defaultProps = {
	    component: 'div'
	};
	
	exports.default = Actions;

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(5);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var Author = function Author(_ref) {
	    var children = _ref.children;
	    var className = _ref.className;
	    var component = _ref.component;
	
	    var other = _objectWithoutProperties(_ref, ['children', 'className', 'component']);
	
	    other.className = (0, _classnames2.default)(className, { author: true });
	
	    return _react2.default.createElement(component, other, children);
	};
	
	Author.propTypes = {
	    children: _react2.default.PropTypes.node,
	    className: _react2.default.PropTypes.any,
	    component: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.element, _react2.default.PropTypes.string])
	};
	
	Author.defaultProps = {
	    component: 'a'
	};
	
	exports.default = Author;

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(5);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _utilities = __webpack_require__(4);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var validProps = {
	    aligned: ['right', 'left', 'justified', 'center']
	};
	
	function getClasses(props) {
	    var classes = {
	        ui: true,
	        container: true,
	        fluid: props.fluid,
	
	        aligned: props.aligned && props.aligned !== 'justified'
	    };
	
	    return (0, _utilities.validateClassProps)(classes, props, validProps);
	}
	
	var Container = function Container(_ref) {
	    var children = _ref.children;
	    var className = _ref.className;
	    var component = _ref.component;
	
	    var other = _objectWithoutProperties(_ref, ['children', 'className', 'component']);
	
	    other.className = (0, _classnames2.default)(className, getClasses(other));
	
	    return _react2.default.createElement(component, other, children);
	};
	
	Container.propTypes = {
	    aligned: _react2.default.PropTypes.oneOf(['right', 'left', 'justified', 'center']),
	    children: _react2.default.PropTypes.node,
	    className: _react2.default.PropTypes.any,
	    component: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.element, _react2.default.PropTypes.string]),
	    fluid: _react2.default.PropTypes.bool
	};
	
	Container.defaultProps = {
	    component: 'div'
	};
	
	exports.default = Container;

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _class, _temp;
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _utilities = __webpack_require__(4);
	
	var _classnames = __webpack_require__(5);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var validProps = {
	    aligned: ['top', 'middle', 'bottom'],
	    floated: ['right', 'left']
	};
	
	var Content = (_temp = _class = function (_React$Component) {
	    _inherits(Content, _React$Component);
	
	    function Content() {
	        _classCallCheck(this, Content);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Content).apply(this, arguments));
	    }
	
	    _createClass(Content, [{
	        key: 'renderDimmerChild',
	        value: function renderDimmerChild() {
	            return _react2.default.createElement(
	                'div',
	                { className: 'center' },
	                this.props.children
	            );
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var children = this.context.isDimmerChild ? this.renderDimmerChild() : this.props.children;
	
	            /* eslint-disable no-use-before-define */
	            var _props = this.props;
	            var aligned = _props.aligned;
	            var component = _props.component;
	            var defaultClasses = _props.defaultClasses;
	            var extra = _props.extra;
	            var floated = _props.floated;
	            var hidden = _props.hidden;
	            var meta = _props.meta;
	            var visible = _props.visible;
	
	            var other = _objectWithoutProperties(_props, ['aligned', 'component', 'defaultClasses', 'extra', 'floated', 'hidden', 'meta', 'visible']);
	            /* eslint-enable no-use-before-define */
	
	            other.className = (0, _classnames2.default)(this.props.className, this.getClasses());
	
	            return _react2.default.createElement(this.props.component, other, children);
	        }
	    }, {
	        key: 'getClasses',
	        value: function getClasses() {
	            var classes = {
	                // default
	                content: this.props.defaultClasses,
	
	                // variations
	                active: this.props.active,
	                aligned: this.props.aligned,
	                extra: this.props.extra,
	                floated: this.props.floated,
	                hidden: this.props.hidden,
	                meta: this.props.meta,
	                visible: this.props.visible
	            };
	
	            return (0, _utilities.validateClassProps)(classes, this.props, validProps);
	        }
	    }]);
	
	    return Content;
	}(_react2.default.Component), _class.propTypes = {
	    active: _react2.default.PropTypes.bool,
	    aligned: _react2.default.PropTypes.string,
	    children: _react2.default.PropTypes.node,
	    className: _react2.default.PropTypes.node,
	    component: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.element, _react2.default.PropTypes.string]),
	    defaultClasses: _react2.default.PropTypes.bool,
	    extra: _react2.default.PropTypes.bool,
	    floated: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.bool]),
	    hidden: _react2.default.PropTypes.bool,
	    meta: _react2.default.PropTypes.bool,
	    visible: _react2.default.PropTypes.bool
	}, _class.contextTypes = {
	    isDimmerChild: _react2.default.PropTypes.bool
	}, _class.defaultProps = {
	    component: 'div',
	    defaultClasses: true,
	    floated: false
	}, _temp);
	exports.default = Content;

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(5);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var Date = function Date(_ref) {
	    var children = _ref.children;
	    var className = _ref.className;
	    var component = _ref.component;
	
	    var other = _objectWithoutProperties(_ref, ['children', 'className', 'component']);
	
	    other.className = (0, _classnames2.default)(className, { date: true });
	
	    return _react2.default.createElement(component, other, children);
	};
	
	Date.propTypes = {
	    children: _react2.default.PropTypes.node,
	    className: _react2.default.PropTypes.any,
	    component: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.element, _react2.default.PropTypes.string])
	};
	
	Date.defaultProps = {
	    component: 'div'
	};
	
	exports.default = Date;

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _class, _temp;
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(5);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Description = (_temp = _class = function (_React$Component) {
	    _inherits(Description, _React$Component);
	
	    function Description() {
	        _classCallCheck(this, Description);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Description).apply(this, arguments));
	    }
	
	    _createClass(Description, [{
	        key: 'render',
	        value: function render() {
	            /* eslint-disable no-use-before-define */
	            var _props = this.props;
	            var defaultClasses = _props.defaultClasses;
	            var component = _props.component;
	            var visible = _props.visible;
	            var hidden = _props.hidden;
	
	            var other = _objectWithoutProperties(_props, ['defaultClasses', 'component', 'visible', 'hidden']);
	            /* eslint-enable no-use-before-define */
	
	            other.className = (0, _classnames2.default)(this.props.className, this.getClasses());
	
	            return _react2.default.createElement(this.props.component, other, this.props.children);
	        }
	    }, {
	        key: 'getClasses',
	        value: function getClasses() {
	            return {
	                // default
	                description: this.props.defaultClasses,
	
	                // animation
	                visible: this.props.visible,
	                hidden: this.props.hidden
	            };
	        }
	    }]);
	
	    return Description;
	}(_react2.default.Component), _class.propTypes = {
	    children: _react2.default.PropTypes.node,
	    className: _react2.default.PropTypes.node,
	    component: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.element, _react2.default.PropTypes.string]),
	    defaultClasses: _react2.default.PropTypes.bool,
	    hidden: _react2.default.PropTypes.bool,
	    visible: _react2.default.PropTypes.bool
	}, _class.defaultProps = {
	    component: 'div',
	    defaultClasses: true
	}, _temp);
	exports.default = Description;

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(5);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var Meta = function Meta(_ref) {
	    var children = _ref.children;
	    var className = _ref.className;
	    var component = _ref.component;
	
	    var other = _objectWithoutProperties(_ref, ['children', 'className', 'component']);
	
	    other.className = (0, _classnames2.default)(className, { metadata: true });
	
	    return _react2.default.createElement(component, other, children);
	};
	
	Meta.propTypes = {
	    children: _react2.default.PropTypes.node,
	    className: _react2.default.PropTypes.any,
	    component: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.element, _react2.default.PropTypes.string])
	};
	
	Meta.defaultProps = {
	    component: 'div'
	};
	
	exports.default = Meta;

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(5);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var Summary = function Summary(_ref) {
	    var children = _ref.children;
	    var className = _ref.className;
	    var component = _ref.component;
	
	    var other = _objectWithoutProperties(_ref, ['children', 'className', 'component']);
	
	    other.className = (0, _classnames2.default)(className, { summary: true });
	
	    return _react2.default.createElement(component, other, children);
	};
	
	Summary.propTypes = {
	    children: _react2.default.PropTypes.node,
	    className: _react2.default.PropTypes.any,
	    component: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.element, _react2.default.PropTypes.string])
	};
	
	Summary.defaultProps = {
	    component: 'div'
	};
	
	exports.default = Summary;

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(5);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function getClasses(props) {
	    return {
	        ui: props.defaultClasses,
	
	        extra: props.extra,
	
	        text: props.defaultClasses
	    };
	}
	
	var Text = function Text(props) {
	    /* eslint-disable no-use-before-define */
	    var children = props.children;
	    var className = props.className;
	    var component = props.component;
	    var defaultClasses = props.defaultClasses;
	    var extra = props.extra;
	
	    var other = _objectWithoutProperties(props, ['children', 'className', 'component', 'defaultClasses', 'extra']);
	    /* eslint-enable no-use-before-define */
	
	    other.className = (0, _classnames2.default)(className, getClasses(props));
	
	    return _react2.default.createElement(component, other, children);
	};
	
	Text.propTypes = {
	    children: _react2.default.PropTypes.node,
	    className: _react2.default.PropTypes.any,
	    component: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.element, _react2.default.PropTypes.string]),
	    defaultClasses: _react2.default.PropTypes.bool,
	    extra: _react2.default.PropTypes.bool
	};
	
	Text.defaultProps = {
	    component: 'div',
	    defaultClasses: true
	};
	
	exports.default = Text;

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _accordion = __webpack_require__(42);
	
	Object.defineProperty(exports, 'Accordion', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_accordion).default;
	  }
	});
	
	var _accordionbody = __webpack_require__(43);
	
	Object.defineProperty(exports, 'AccordionBody', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_accordionbody).default;
	  }
	});
	
	var _accordiontitle = __webpack_require__(44);
	
	Object.defineProperty(exports, 'AccordionTitle', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_accordiontitle).default;
	  }
	});
	
	var _animate = __webpack_require__(45);
	
	var _loop = function _loop(_key4) {
	  if (_key4 === "default") return 'continue';
	  Object.defineProperty(exports, _key4, {
	    enumerable: true,
	    get: function get() {
	      return _animate[_key4];
	    }
	  });
	};
	
	for (var _key4 in _animate) {
	  var _ret = _loop(_key4);
	
	  if (_ret === 'continue') continue;
	}
	
	var _animations = __webpack_require__(51);
	
	var _loop2 = function _loop2(_key5) {
	  if (_key5 === "default") return 'continue';
	  Object.defineProperty(exports, _key5, {
	    enumerable: true,
	    get: function get() {
	      return _animations[_key5];
	    }
	  });
	};
	
	for (var _key5 in _animations) {
	  var _ret2 = _loop2(_key5);
	
	  if (_ret2 === 'continue') continue;
	}
	
	var _rquery = __webpack_require__(54);
	
	var _loop3 = function _loop3(_key6) {
	  if (_key6 === "default") return 'continue';
	  Object.defineProperty(exports, _key6, {
	    enumerable: true,
	    get: function get() {
	      return _rquery[_key6];
	    }
	  });
	};
	
	for (var _key6 in _rquery) {
	  var _ret3 = _loop3(_key6);
	
	  if (_ret3 === 'continue') continue;
	}
	
	var _checkbox = __webpack_require__(56);
	
	Object.defineProperty(exports, 'Checkbox', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_checkbox).default;
	  }
	});
	
	var _checkboxfields = __webpack_require__(57);
	
	Object.defineProperty(exports, 'CheckboxFields', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_checkboxfields).default;
	  }
	});
	
	var _dimmer = __webpack_require__(58);
	
	Object.defineProperty(exports, 'Dimmer', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_dimmer).default;
	  }
	});
	
	var _dimmable = __webpack_require__(95);
	
	Object.defineProperty(exports, 'Dimmable', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_dimmable).default;
	  }
	});
	
	var _dropdownelement = __webpack_require__(96);
	
	Object.defineProperty(exports, 'DropdownElement', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_dropdownelement).default;
	  }
	});
	
	var _select = __webpack_require__(97);
	
	Object.defineProperty(exports, 'Select', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_select).default;
	  }
	});
	
	var _option = __webpack_require__(112);
	
	Object.defineProperty(exports, 'Option', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_option).default;
	  }
	});
	
	var _dropdownmenu = __webpack_require__(113);
	
	Object.defineProperty(exports, 'DropdownMenu', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_dropdownmenu).default;
	  }
	});
	
	var _modal = __webpack_require__(114);
	
	Object.defineProperty(exports, 'Modal', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_modal).default;
	  }
	});
	
	var _modalbody = __webpack_require__(118);
	
	Object.defineProperty(exports, 'ModalBody', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_modalbody).default;
	  }
	});
	
	var _popup = __webpack_require__(119);
	
	Object.defineProperty(exports, 'Popup', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_popup).default;
	  }
	});
	
	var _popupelement = __webpack_require__(133);
	
	Object.defineProperty(exports, 'PopupElement', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_popupelement).default;
	  }
	});
	
	var _bar = __webpack_require__(134);
	
	Object.defineProperty(exports, 'Bar', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_bar).default;
	  }
	});
	
	var _progress = __webpack_require__(135);
	
	Object.defineProperty(exports, 'Progress', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_progress).default;
	  }
	});
	
	var _rating = __webpack_require__(136);
	
	Object.defineProperty(exports, 'Rating', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_rating).default;
	  }
	});
	
	var _results = __webpack_require__(137);
	
	Object.defineProperty(exports, 'Results', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_results).default;
	  }
	});
	
	var _search = __webpack_require__(138);
	
	Object.defineProperty(exports, 'Search', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_search).default;
	  }
	});
	
	var _tab = __webpack_require__(139);
	
	Object.defineProperty(exports, 'Tab', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_tab).default;
	  }
	});
	
	var _tabs = __webpack_require__(141);
	
	Object.defineProperty(exports, 'Tabs', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_tabs).default;
	  }
	});
	
	var _tabtitle = __webpack_require__(142);
	
	Object.defineProperty(exports, 'TabTitle', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_tabtitle).default;
	  }
	});
	
	var _tabcontent = __webpack_require__(140);
	
	Object.defineProperty(exports, 'TabContent', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_tabcontent).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _class, _temp;
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _modules = __webpack_require__(41);
	
	var _classnames = __webpack_require__(5);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Accordion = (_temp = _class = function (_Component) {
	    _inherits(Accordion, _Component);
	
	    function Accordion(props) {
	        _classCallCheck(this, Accordion);
	
	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Accordion).call(this, props));
	
	        _this.state = {
	            currentActive: null
	        };
	        return _this;
	    }
	
	    _createClass(Accordion, [{
	        key: 'renderChildren',
	        value: function renderChildren() {
	            var index = 0;
	            var element = null;
	
	            return _react2.default.Children.map(this.props.children, function (child) {
	                if (child.type == _modules.AccordionTitle) {
	                    var boundClick = this._handleClick.bind(this, index);
	
	                    element = _react2.default.cloneElement(child, {
	                        active: this.state.currentActive === index,
	                        onClick: boundClick
	                    });
	                } else if (child.type == _modules.AccordionBody) {
	                    element = _react2.default.cloneElement(child, {
	                        active: this.state.currentActive === index,
	                        event: this.state.event
	                    });
	                    index++;
	                } else {
	                    return child;
	                }
	
	                return element;
	            }.bind(this));
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
	
	            return _react2.default.createElement(
	                'div',
	                { className: (0, _classnames2.default)(this.props.className, classes) },
	                this.renderChildren()
	            );
	        }
	    }, {
	        key: '_handleClick',
	        value: function _handleClick(key) {
	            var active = undefined;
	
	            if (key !== this.state.currentActive) {
	                active = key;
	            }
	
	            this.setState({
	                currentActive: active
	            });
	        }
	    }]);
	
	    return Accordion;
	}(_react.Component), _class.propTypes = {
	    children: _react2.default.PropTypes.node,
	    className: _react2.default.PropTypes.node,
	    defaultClasses: _react2.default.PropTypes.bool,
	    fluid: _react2.default.PropTypes.bool,
	    inverted: _react2.default.PropTypes.bool,
	    styled: _react2.default.PropTypes.bool
	}, _class.defaultProps = {
	    defaultClasses: true
	}, _temp);
	exports.default = Accordion;

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _class, _temp;
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _modules = __webpack_require__(41);
	
	var _classnames = __webpack_require__(5);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	// TODO: image and horizontal list examples
	var AccordionBody = (_temp = _class = function (_Component) {
	    _inherits(AccordionBody, _Component);
	
	    function AccordionBody(props) {
	        _classCallCheck(this, AccordionBody);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(AccordionBody).call(this, props));
	    }
	
	    _createClass(AccordionBody, [{
	        key: 'render',
	        value: function render() {
	            var classes = {
	                // default
	                ui: this.props.defaultClasses,
	
	                // positioning
	
	                // types
	
	                // states
	
	                // variations
	
	                // component
	                content: true,
	                active: true
	            };
	
	            /*
	            let didMount = function() {
	                this.setScrollHeight();
	                let computedStyle = window.getComputedStyle(ReactDOM.findDOMNode(this), null);
	                  this.state.paddingTop = parseFloat(computedStyle.getPropertyValue('padding-top'));
	                this.state.paddingBottom = parseFloat(computedStyle.getPropertyValue('padding-bottom'));
	            };
	            */
	
	            //
	            var animation = {
	                state: this.props.active,
	                enterState: {
	                    name: 'slideDown',
	                    ease: 'cubic-out',
	                    duration: 250,
	                    options: {
	                        easing: 'cubic-out'
	                    }
	                },
	                exitState: {
	                    name: 'slideUp',
	                    duration: 300,
	                    options: {
	                        easing: 'cubic-out'
	                    }
	                }
	            };
	
	            var childAnimation = {
	                state: this.props.active,
	                enterState: {
	                    name: 'fadeIn',
	                    duration: 300,
	                    options: {
	                        easing: 'cubic-in'
	                    }
	                },
	                exitState: {
	                    name: 'fadeOut',
	                    duration: 200,
	                    options: {
	                        easing: 'cubic-out'
	                    }
	                }
	            };
	
	            // handle all string or mixed string/bool props
	            return _react2.default.createElement(
	                _modules.Animate,
	                {
	                    animation: animation,
	                    className: (0, _classnames2.default)(classes),
	                    key: 'animate'
	                },
	                _react2.default.createElement(
	                    _modules.Animate,
	                    { animation: childAnimation },
	                    this.props.children
	                )
	            );
	        }
	    }]);
	
	    return AccordionBody;
	}(_react.Component), _class.propTypes = {
	    active: _react2.default.PropTypes.bool,
	    children: _react2.default.PropTypes.node,
	    defaultClasses: _react2.default.PropTypes.bool
	}, _class.defaultProps = {
	    defaultClasses: true
	}, _temp);
	exports.default = AccordionBody;

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _class, _temp;
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _elements = __webpack_require__(1);
	
	var _classnames = __webpack_require__(5);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var AccordionTitle = (_temp = _class = function (_Component) {
	    _inherits(AccordionTitle, _Component);
	
	    function AccordionTitle(props) {
	        _classCallCheck(this, AccordionTitle);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(AccordionTitle).call(this, props));
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
	
	            return _react2.default.createElement(
	                'div',
	                {
	                    className: (0, _classnames2.default)(this.props.className, classes),
	                    onClick: this.props.onClick
	                },
	                _react2.default.createElement(_elements.Icon, { name: this.props.icon }),
	                this.props.children
	            );
	        }
	    }]);
	
	    return AccordionTitle;
	}(_react.Component), _class.propTypes = {
	    active: _react2.default.PropTypes.bool,
	    children: _react2.default.PropTypes.node,
	    className: _react2.default.PropTypes.node,
	    defaultClasses: _react2.default.PropTypes.bool,
	    icon: _react2.default.PropTypes.bool,
	    onClick: _react2.default.PropTypes.func
	
	}, _class.defaultProps = {
	    defaultClasses: true,
	    icon: 'dropdown'
	}, _temp);
	exports.default = AccordionTitle;

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	exports.Animate = Animate;
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _curves = __webpack_require__(46);
	
	var _easings = __webpack_require__(47);
	
	var _easings2 = _interopRequireDefault(_easings);
	
	var _raf = __webpack_require__(48);
	
	var _raf2 = _interopRequireDefault(_raf);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var noop = function noop() {};
	
	function Animate(ComposedComponent) {
	    var _class, _temp;
	
	    return _temp = _class = function (_React$Component) {
	        _inherits(animation, _React$Component);
	
	        function animation(props) {
	            _classCallCheck(this, animation);
	
	            var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(animation).call(this, props));
	
	            _this.animation = null;
	            _this.animating = false;
	            _this.callback = noop;
	            _this.animatingDOM = false;
	
	            _this.state = {
	                animating: false,
	                canceling: false,
	                style: props.start ? _this.parseProperties(_this.props.start.from) : {}
	            };
	            return _this;
	        }
	
	        _createClass(animation, [{
	            key: 'componentWillReceiveProps',
	            value: function componentWillReceiveProps(props) {
	                // if the animate state has change OR this isn't a stateful animation (props.start && !props.end)
	                if (!this.animating && props.animate !== this.props.animate || props.start && !props.end) {
	                    // non-stateful animations (such as progress) current use this. It's not very clear on
	                    // how this works. Probably need to handle this as a different use case.
	                    if (props.animate && props.start !== false) {
	                        this.start = this.parseProperties(props.start.from);
	                        this.end = this.parseProperties(props.start.to);
	                        this.duration = props.start.duration || this.props.duration;
	                        this.ease = props.start.ease || props.ease;
	                    } else if (!props.animate && props.end !== false) {
	                        this.start = this.parseProperties(props.end.from);
	                        this.end = this.parseProperties(props.end.to);
	                        this.duration = props.end.duration || this.props.duration;
	                        this.ease = props.end.ease || props.ease;
	                    }
	
	                    this.animate();
	                }
	            }
	        }, {
	            key: 'componentWillEnter',
	            value: function componentWillEnter(callback) {
	                if (this.props.enter !== false) {
	                    var duration = undefined;
	
	                    // duration can be a prop or a value in the animation object
	                    if (typeof this.props.enter.duration === 'number') {
	                        duration = this.props.enter.duration;
	                    } else {
	                        duration = this.props.duration;
	                    }
	
	                    this.start = this.parseProperties(this.props.enter.from);
	                    this.end = this.parseProperties(this.props.enter.to);
	                    this.duration = duration;
	                    this.ease = this.props.enter.ease || this.props.ease;
	                    this.callback = callback;
	                    this.animatingDOM = true;
	
	                    this.animate();
	                }
	            }
	        }, {
	            key: 'componentWillLeave',
	            value: function componentWillLeave(callback) {
	                if (this.props.leave !== false) {
	                    this.start = this.parseProperties(this.props.leave.from);
	                    this.end = this.parseProperties(this.props.leave.to);
	                    this.duration = this.props.enter.duration || this.props.duration;
	                    this.ease = this.props.enter.ease || this.props.ease;
	                    this.callback = callback;
	                    this.animatingDOM = true;
	
	                    this.animate();
	                }
	            }
	        }, {
	            key: 'onComplete',
	            value: function onComplete() {
	                this.animating = false;
	
	                this.animatingDOM = false;
	
	                // this.callback handles onComplete for ReactTranssitionGroup, onComplete() is the user defined callback
	                this.props.onComplete();
	                this.callback();
	            }
	        }, {
	            key: 'render',
	            value: function render() {
	                /* eslint-disable no-use-before-define */
	                var _props = this.props;
	                var animate = _props.animate;
	                var cancel = _props.cancel;
	                var cancelDuration = _props.cancelDuration;
	                var duration = _props.duration;
	                var enter = _props.enter;
	                var end = _props.end;
	                var leave = _props.leave;
	                var onComplete = _props.onComplete;
	                var start = _props.start;
	                var ease = _props.ease;
	
	                var other = _objectWithoutProperties(_props, ['animate', 'cancel', 'cancelDuration', 'duration', 'enter', 'end', 'leave', 'onComplete', 'start', 'ease']);
	                /* eslint-enable no-use-before-define */
	
	
	                var style = Object.assign({}, this.state.style, this.props.style);
	
	                return _react2.default.createElement(ComposedComponent, _extends({}, other, {
	                    style: style }));
	            }
	        }, {
	            key: 'stringifyProperties',
	            value: function stringifyProperties(anim) {
	                var _this2 = this;
	
	                Object.keys(anim).forEach(function (prop) {
	                    // handle function properties: translateX(3)
	                    if (_typeof(anim[prop]) === 'object' && _this2.start[prop].type == 'function') {
	                        anim[prop] = anim[prop].name + '(' + anim[prop].params.join(',') + ')';
	                        // handle units: { value: 0, units: '%'}
	                    } else if (_typeof(anim[prop]) === 'object' && _this2.start[prop].type == 'unit') {
	                            anim[prop] = anim[prop].value + anim[prop].units;
	                        }
	                });
	
	                return anim;
	            }
	        }, {
	            key: 'parseProperties',
	            value: function parseProperties(anim) {
	                var re = /([\w|\d]*)\((\d*.*)?\)/;
	
	                Object.keys(anim).forEach(function (prop) {
	                    var value = anim[prop];
	                    var func = re.exec(value);
	
	                    /*
	                        handles use-cases where units aren't standard
	                        {
	                            value: 0,
	                            units: %
	                        }
	                    */
	                    if (_typeof(anim[prop]) === 'object' && anim[prop].units) {
	                        anim[prop].type = 'unit';
	                        /*
	                            handles case where the value is a CSS function
	                            {
	                                width: transformX(3)
	                            }
	                        */
	                    } else if (func) {
	                            var name = func[1];
	                            var params = func[2].split(',');
	
	                            params = params.map(function (item) {
	                                return parseInt(item.trim());
	                            });
	
	                            anim[prop] = {
	                                name: name,
	                                params: params,
	                                type: 'function'
	                            };
	                        }
	                });
	
	                return anim;
	            }
	        }, {
	            key: 'animate',
	            value: function animate() {
	                this.animating = true;
	
	                if (this.duration === 0) {
	                    this.onComplete();
	                }
	
	                this.startTime = new Date().getTime();
	                this.animation = (0, _raf2.default)(this.animator.bind(this));
	            }
	        }, {
	            key: 'animator',
	            value: function animator() {
	                var _this3 = this;
	
	                var ease = undefined;
	                var time = new Date().getTime();
	                var delta = (time - this.startTime) / (this.duration || this.props.duration);
	                var deltaState = {};
	
	                // linear, swing and spring are seperate functions
	                if (this.ease == 'linear' || this.ease == 'swing' || this.ease == 'spring') {
	                    ease = _easings2.default[this.ease];
	                    // otherwise use the curve generator
	                } else {
	                        ease = _curves.bezier.apply(this, _easings2.default[this.ease]);
	                    }
	
	                delta = delta > 1 ? 1 : delta;
	
	                Object.keys(this.start).forEach(function (prop) {
	
	                    // handle function values: translateX(3)
	                    if (_typeof(_this3.start[prop]) === 'object' && _this3.start[prop].type == 'function') {
	                        deltaState[prop] = Object.assign({}, _this3.start[prop]);
	
	                        deltaState[prop].params = _this3.start[prop].params.map(function (item, index) {
	                            return item + (_this3.end[prop].params[index] - item) * ease(delta);
	                        });
	
	                        // handles unit values: width: { value: 0, units: '%' }
	                    } else if (_typeof(_this3.start[prop]) === 'object' && _this3.start[prop].type == 'unit') {
	                            deltaState[prop] = Object.assign({}, _this3.start[prop]);
	                            deltaState[prop].value = _this3.start[prop].value + (_this3.end[prop].value - _this3.start[prop].value) * ease(delta);
	
	                            // handles numeric values { width: 0 }
	                        } else if (typeof _this3.start[prop] !== 'string') {
	                                deltaState[prop] = _this3.start[prop] + (_this3.end[prop] - _this3.start[prop]) * ease(delta);
	
	                                // anything else we just leave alone
	                            } else {
	                                    deltaState[prop] = _this3.start[prop];
	                                }
	                });
	
	                this.setState({
	                    style: this.stringifyProperties(deltaState)
	                });
	
	                // we can only cancel if we aren't already
	                if (this.props.cancel && !this.state.canceling && !this.animatingDOM) {
	                    _raf2.default.cancel(this.animation);
	
	                    // animate from the state we canceled at, back to the start
	                    this.end = this.start;
	                    this.start = deltaState;
	                    this.duration = this.props.cancelDuration;
	
	                    // prevent canceling from doing anything
	                    this.setState({
	                        canceling: true
	                    });
	
	                    this.animate();
	                } else if (delta >= 1) {
	                    _raf2.default.cancel(this.animation);
	
	                    this.onComplete();
	                } else {
	                    this.animation = (0, _raf2.default)(this.animator.bind(this));
	                }
	            }
	        }]);
	
	        return animation;
	    }(_react2.default.Component), _class.animatable = true, _class.displayName = ComposedComponent.displayName || ComposedComponent.name, _class.propTypes = {
	        animate: _react2.default.PropTypes.bool,
	        cancel: _react2.default.PropTypes.bool,
	        cancelDuration: _react2.default.PropTypes.number,
	        component: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.element, _react2.default.PropTypes.string]),
	        duration: _react2.default.PropTypes.number,
	        ease: _react2.default.PropTypes.string,
	        end: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.bool, _react2.default.PropTypes.shape({
	            ease: _react2.default.PropTypes.string,
	            duration: _react2.default.PropTypes.number,
	            from: _react2.default.PropTypes.object,
	            to: _react2.default.PropTypes.object
	        })]),
	        enter: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.bool, _react2.default.PropTypes.shape({
	            ease: _react2.default.PropTypes.string,
	            duration: _react2.default.PropTypes.number,
	            from: _react2.default.PropTypes.object,
	            to: _react2.default.PropTypes.object
	        })]),
	        leave: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.bool, _react2.default.PropTypes.shape({
	            ease: _react2.default.PropTypes.string,
	            duration: _react2.default.PropTypes.number,
	            from: _react2.default.PropTypes.object,
	            to: _react2.default.PropTypes.object
	        })]),
	        onComplete: _react2.default.PropTypes.func,
	        start: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.bool, _react2.default.PropTypes.shape({
	            ease: _react2.default.PropTypes.string,
	            duration: _react2.default.PropTypes.number,
	            from: _react2.default.PropTypes.object,
	            to: _react2.default.PropTypes.object
	        })]),
	        style: _react2.default.PropTypes.object
	    }, _class.defaultProps = {
	        cancelDuration: 200,
	        duration: 500,
	        ease: 'ease',
	        end: false,
	        enter: false,
	        leave: false,
	        onComplete: noop,
	        start: false
	    }, _temp;
	}

/***/ },
/* 46 */
/***/ function(module, exports) {

	"use strict";
	
	/*eslint-disable */
	/* Bezier curve function generator. Copyright Gaetan Renaudeau. MIT License:
	 http://en.wikipedia.org/wiki/MIT_License */
	exports.bezier = function (mX1, mY1, mX2, mY2) {
	    var NEWTON_ITERATIONS = 4,
	        NEWTON_MIN_SLOPE = 0.001,
	        SUBDIVISION_PRECISION = 0.0000001,
	        SUBDIVISION_MAX_ITERATIONS = 10,
	        kSplineTableSize = 11,
	        kSampleStepSize = 1.0 / (kSplineTableSize - 1.0),
	        float32ArraySupported = "Float32Array" in window;
	
	    /* Must contain four arguments. */
	    if (arguments.length !== 4) {
	        return false;
	    }
	
	    /* Arguments must be numbers. */
	    for (var i = 0; i < 4; ++i) {
	        if (typeof arguments[i] !== "number" || isNaN(arguments[i]) || !isFinite(arguments[i])) {
	            return false;
	        }
	    }
	
	    /* X values must be in the [0, 1] range. */
	    mX1 = Math.min(mX1, 1);
	    mX2 = Math.min(mX2, 1);
	    mX1 = Math.max(mX1, 0);
	    mX2 = Math.max(mX2, 0);
	
	    var mSampleValues = float32ArraySupported ? new Float32Array(kSplineTableSize) : new Array(kSplineTableSize);
	
	    function A(aA1, aA2) {
	        return 1.0 - 3.0 * aA2 + 3.0 * aA1;
	    }
	    function B(aA1, aA2) {
	        return 3.0 * aA2 - 6.0 * aA1;
	    }
	    function C(aA1) {
	        return 3.0 * aA1;
	    }
	
	    function calcBezier(aT, aA1, aA2) {
	        return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT;
	    }
	
	    function getSlope(aT, aA1, aA2) {
	        return 3.0 * A(aA1, aA2) * aT * aT + 2.0 * B(aA1, aA2) * aT + C(aA1);
	    }
	
	    function newtonRaphsonIterate(aX, aGuessT) {
	        for (var i = 0; i < NEWTON_ITERATIONS; ++i) {
	            var currentSlope = getSlope(aGuessT, mX1, mX2);
	
	            if (currentSlope === 0.0) return aGuessT;
	
	            var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
	            aGuessT -= currentX / currentSlope;
	        }
	
	        return aGuessT;
	    }
	
	    function calcSampleValues() {
	        for (var i = 0; i < kSplineTableSize; ++i) {
	            mSampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
	        }
	    }
	
	    function binarySubdivide(aX, aA, aB) {
	        var currentX,
	            currentT,
	            i = 0;
	
	        do {
	            currentT = aA + (aB - aA) / 2.0;
	            currentX = calcBezier(currentT, mX1, mX2) - aX;
	            if (currentX > 0.0) {
	                aB = currentT;
	            } else {
	                aA = currentT;
	            }
	        } while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS);
	
	        return currentT;
	    }
	
	    function getTForX(aX) {
	        var intervalStart = 0.0,
	            currentSample = 1,
	            lastSample = kSplineTableSize - 1;
	
	        for (; currentSample !== lastSample && mSampleValues[currentSample] <= aX; ++currentSample) {
	            intervalStart += kSampleStepSize;
	        }
	
	        --currentSample;
	
	        var dist = (aX - mSampleValues[currentSample]) / (mSampleValues[currentSample + 1] - mSampleValues[currentSample]),
	            guessForT = intervalStart + dist * kSampleStepSize,
	            initialSlope = getSlope(guessForT, mX1, mX2);
	
	        if (initialSlope >= NEWTON_MIN_SLOPE) {
	            return newtonRaphsonIterate(aX, guessForT);
	        } else if (initialSlope === 0.0) {
	            return guessForT;
	        } else {
	            return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize);
	        }
	    }
	
	    var _precomputed = false;
	
	    function precompute() {
	        _precomputed = true;
	        if (mX1 !== mY1 || mX2 !== mY2) calcSampleValues();
	    }
	
	    var f = function f(aX) {
	        if (!_precomputed) precompute();
	        if (mX1 === mY1 && mX2 === mY2) return aX;
	        if (aX === 0) return 0;
	        if (aX === 1) return 1;
	
	        return calcBezier(getTForX(aX), mY1, mY2);
	    };
	
	    f.getControlPoints = function () {
	        return [{ x: mX1, y: mY1 }, { x: mX2, y: mY2 }];
	    };
	
	    var str = "generateBezier(" + [mX1, mY1, mX2, mY2] + ")";
	    f.toString = function () {
	        return str;
	    };
	
	    return f;
	};
	
	/* Runge-Kutta spring physics function generator. Adapted from Framer.js,
	 copyright Koen Bok. MIT License: http://en.wikipedia.org/wiki/MIT_License */
	/* Given a tension, friction, and duration, a simulation at 60FPS will first run
	 without a defined duration in order to calculate the full path. A second pass
	 then adjusts the time delta -- using the relation between actual time and
	 duration -- to calculate the path for the duration-constrained animation. */
	exports.spring = function () {
	    function springAccelerationForState(state) {
	        return -state.tension * state.x - state.friction * state.v;
	    }
	
	    function springEvaluateStateWithDerivative(initialState, dt, derivative) {
	        var state = {
	            x: initialState.x + derivative.dx * dt,
	            v: initialState.v + derivative.dv * dt,
	            tension: initialState.tension,
	            friction: initialState.friction
	        };
	
	        return { dx: state.v, dv: springAccelerationForState(state) };
	    }
	
	    function springIntegrateState(state, dt) {
	        var a = {
	            dx: state.v,
	            dv: springAccelerationForState(state)
	        },
	            b = springEvaluateStateWithDerivative(state, dt * 0.5, a),
	            c = springEvaluateStateWithDerivative(state, dt * 0.5, b),
	            d = springEvaluateStateWithDerivative(state, dt, c),
	            dxdt = 1.0 / 6.0 * (a.dx + 2.0 * (b.dx + c.dx) + d.dx),
	            dvdt = 1.0 / 6.0 * (a.dv + 2.0 * (b.dv + c.dv) + d.dv);
	
	        state.x = state.x + dxdt * dt;
	        state.v = state.v + dvdt * dt;
	
	        return state;
	    }
	
	    return function springRK4Factory(tension, friction, duration) {
	
	        var initState = {
	            x: -1,
	            v: 0,
	            tension: null,
	            friction: null
	        },
	            path = [0],
	            time_lapsed = 0,
	            tolerance = 1 / 10000,
	            DT = 16 / 1000,
	            have_duration,
	            dt,
	            last_state;
	
	        tension = parseFloat(tension) || 500;
	        friction = parseFloat(friction) || 20;
	        duration = duration || null;
	
	        initState.tension = tension;
	        initState.friction = friction;
	
	        have_duration = duration !== null;
	
	        /* Calculate the actual time it takes for this animation to complete with the provided conditions. */
	        if (have_duration) {
	            /* Run the simulation without a duration. */
	            time_lapsed = springRK4Factory(tension, friction);
	            /* Compute the adjusted time delta. */
	            dt = time_lapsed / duration * DT;
	        } else {
	            dt = DT;
	        }
	
	        while (true) {
	            /* Next/step function .*/
	            last_state = springIntegrateState(last_state || initState, dt);
	            /* Store the position. */
	            path.push(1 + last_state.x);
	            time_lapsed += 16;
	            /* If the change threshold is reached, break. */
	            if (!(Math.abs(last_state.x) > tolerance && Math.abs(last_state.v) > tolerance)) {
	                break;
	            }
	        }
	
	        /* If duration is not defined, return the actual time required for
	         completing this animation. Otherwise, return a closure that holds
	         the computed path and returns a snapshot of the position according to
	         a given percentComplete. */
	        return !have_duration ? time_lapsed : function (percentComplete) {
	            return path[percentComplete * (path.length - 1) | 0];
	        };
	    };
	}();
	/*eslint-enable */

/***/ },
/* 47 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/* Velocity.js */
	exports.default = {
	    ease: [0.25, 0.1, 0.25, 1.0],
	    'in-ease': [0.42, 0.0, 1.00, 1.0],
	    'out-ease': [0.00, 0.0, 0.58, 1.0],
	    'in-out-ease': [0.42, 0.0, 0.58, 1.0],
	    'in-sine': [0.47, 0, 0.745, 0.715],
	    'out-sine': [0.39, 0.575, 0.565, 1],
	    'in-out-sine': [0.445, 0.05, 0.55, 0.95],
	    'in-quad': [0.55, 0.085, 0.68, 0.53],
	    'out-quad': [0.25, 0.46, 0.45, 0.94],
	    'in-out-quad': [0.455, 0.03, 0.515, 0.955],
	    'in-cubic': [0.55, 0.055, 0.675, 0.19],
	    'out-cubic': [0.215, 0.61, 0.355, 1],
	    'in-out-cubic': [0.645, 0.045, 0.355, 1],
	    'in-quart': [0.895, 0.03, 0.685, 0.22],
	    'out-quart': [0.165, 0.84, 0.44, 1],
	    'in-out-quart': [0.77, 0, 0.175, 1],
	    'in-quint': [0.755, 0.05, 0.855, 0.06],
	    'out-quint': [0.23, 1, 0.32, 1],
	    'in-out-quint': [0.86, 0, 0.07, 1],
	    'in-expo': [0.95, 0.05, 0.795, 0.035],
	    'out-expo': [0.19, 1, 0.22, 1],
	    'in-out-expo': [1, 0, 0, 1],
	    'in-circ': [0.6, 0.04, 0.98, 0.335],
	    'out-circ': [0.075, 0.82, 0.165, 1],
	    'in-out-circ': [0.785, 0.135, 0.15, 0.86],
	    'ios-scroll': [0.17, 0.37, 0.39, 0.99],
	    linear: function linear(factor) {
	        return factor;
	    },
	    swing: function swing(factor) {
	        return 0.5 - Math.cos(factor * Math.PI) / 2;
	    },
	    spring: function spring(factor) {
	        return 1 - Math.cos(factor * 4.5 * Math.PI) * Math.exp(-factor * 6);
	    }
	};

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {var now = __webpack_require__(49)
	  , root = typeof window === 'undefined' ? global : window
	  , vendors = ['moz', 'webkit']
	  , suffix = 'AnimationFrame'
	  , raf = root['request' + suffix]
	  , caf = root['cancel' + suffix] || root['cancelRequest' + suffix]
	
	for(var i = 0; !raf && i < vendors.length; i++) {
	  raf = root[vendors[i] + 'Request' + suffix]
	  caf = root[vendors[i] + 'Cancel' + suffix]
	      || root[vendors[i] + 'CancelRequest' + suffix]
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
	  return raf.call(root, fn)
	}
	module.exports.cancel = function() {
	  caf.apply(root, arguments)
	}
	module.exports.polyfill = function() {
	  root.requestAnimationFrame = raf
	  root.cancelAnimationFrame = caf
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 49 */
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
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(50)))

/***/ },
/* 50 */
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
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
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
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Animations = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _class, _temp;
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactAddonsTransitionGroup = __webpack_require__(52);
	
	var _reactAddonsTransitionGroup2 = _interopRequireDefault(_reactAddonsTransitionGroup);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Animations = exports.Animations = (_temp = _class = function (_React$Component) {
	    _inherits(Animations, _React$Component);
	
	    function Animations() {
	        _classCallCheck(this, Animations);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Animations).apply(this, arguments));
	    }
	
	    _createClass(Animations, [{
	        key: 'renderChildren',
	        value: function renderChildren() {
	            var _this2 = this;
	
	            return _react2.default.Children.map(this.props.children, function (child) {
	                var props = {};
	                props.enter = _this2.props.enter !== false ? _this2.props.enter : false;
	                props.leave = _this2.props.leave !== false ? _this2.props.leave : false;
	
	                // ReactTransitionGroup will error on free-floating text.
	                if (typeof child === 'string') {
	                    return _react2.default.createElement(
	                        'span',
	                        null,
	                        child
	                    );
	                }
	
	                if (props.enter === false && props.leave === false || child.props.noAnimate === true) {
	                    return child;
	                } else {
	                    return _react2.default.cloneElement(child, props);
	                }
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            /* eslint-disable no-use-before-define */
	            var _props = this.props;
	            var enter = _props.enter;
	            var leave = _props.leave;
	
	            var other = _objectWithoutProperties(_props, ['enter', 'leave']);
	            /* eslint-enable no-use-before-define */
	
	            var children = this.renderChildren();
	
	            return _react2.default.createElement(
	                _reactAddonsTransitionGroup2.default,
	                other,
	                children
	            );
	        }
	    }]);
	
	    return Animations;
	}(_react2.default.Component), _class.propTypes = {
	    children: _react2.default.PropTypes.node,
	    enter: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.bool, _react2.default.PropTypes.shape({
	        ease: _react2.default.PropTypes.string,
	        duration: _react2.default.PropTypes.number,
	        from: _react2.default.PropTypes.object,
	        to: _react2.default.PropTypes.object
	    })]),
	    leave: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.bool, _react2.default.PropTypes.shape({
	        ease: _react2.default.PropTypes.string,
	        duration: _react2.default.PropTypes.number,
	        from: _react2.default.PropTypes.object,
	        to: _react2.default.PropTypes.object
	    })])
	}, _class.defaultProps = {
	    enter: false,
	    leave: false
	}, _temp);

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(53);

/***/ },
/* 53 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_53__;

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _reactDom = __webpack_require__(55);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// this is a minimalist implementation of Zepto. We are only using $ functions
	// that are neccesary to implement Semantic UI. None of these functions allow
	// for SETTING properties.
	
	var rQuery = function () {
	    var rquery = {},
	        $ = undefined,
	        emptyArray = [],
	        uniq = undefined,
	        filter = emptyArray.filter,
	        camelize = undefined,
	        class2type = {},
	        rootNodeRE = /^(?:body|html)$/i;
	
	    camelize = function camelize(str) {
	        return str.replace(/-+(.)?/g, function (match, chr) {
	            return chr ? chr.toUpperCase() : '';
	        });
	    };
	
	    function isWindow(obj) {
	        return obj != null && obj == obj.window;
	    }
	
	    function isDocument(obj) {
	        return obj != null && obj.nodeType == obj.DOCUMENT_NODE;
	    }
	
	    function likeArray(obj) {
	        return typeof obj.length == 'number';
	    }
	
	    function flatten(array) {
	        return array.length > 0 ? $.fn.concat.apply([], array) : array;
	    }
	
	    rquery.R = function (dom, selector) {
	        dom = dom || [];
	        dom.__proto__ = $.fn;
	        dom.selector = selector || '';
	        return dom;
	    };
	
	    rquery.init = function (selector) {
	        var dom = undefined;
	
	        if (!selector) {
	            return rquery.R();
	        } else if (Array.isArray(selector)) {
	            dom = selector, selector = null;
	        } else if (selector.nodeType || isWindow(selector)) {
	            // selector is a dom node
	            dom = [selector], selector = null;
	        } else {
	            // selector is a class instance, so find the dom Node
	            selector = _reactDom2.default.findDOMNode(selector);
	            dom = [selector], selector = null;
	        }
	
	        return rquery.R(dom, selector);
	    };
	
	    uniq = function uniq(array) {
	        return filter.call(array, function (item, idx) {
	            return array.indexOf(item) == idx;
	        });
	    };
	
	    $ = function $(selector) {
	        return rquery.init(selector);
	    };
	
	    $.inArray = function (elem, array, i) {
	        return emptyArray.indexOf.call(array, elem, i);
	    };
	
	    $.map = function (elements, callback) {
	        var value = undefined,
	            values = [],
	            i = undefined,
	            key = undefined;
	        if (likeArray(elements)) for (i = 0; i < elements.length; i++) {
	            value = callback(elements[i], i);
	            if (value != null) values.push(value);
	        } else for (key in elements) {
	            value = callback(elements[key], key);
	            if (value != null) values.push(value);
	        }
	        return flatten(values);
	    };
	
	    $.each = function (elements, callback) {
	        var i = undefined,
	            key = undefined;
	        if (likeArray(elements)) {
	            for (i = 0; i < elements.length; i++) {
	                if (callback.call(elements[i], i, elements[i]) === false) return elements;
	            }
	        } else {
	            for (key in elements) {
	                if (callback.call(elements[key], key, elements[key]) === false) return elements;
	            }
	        }
	
	        return elements;
	    };
	
	    // Populate the class2type map
	    $.each('Boolean Number String Function Array Date RegExp Object Error'.split(' '), function (i, name) {
	        class2type['[object ' + name + ']'] = name.toLowerCase();
	    });
	
	    $.fn = {
	        forEach: emptyArray.forEach,
	        reduce: emptyArray.reduce,
	        push: emptyArray.push,
	        sort: emptyArray.sort,
	        indexOf: emptyArray.indexOf,
	        concat: emptyArray.concat,
	        css: function css(property) {
	            var computedStyle = undefined,
	                element = this[0];
	
	            if (!element) return;
	            computedStyle = getComputedStyle(element, '');
	
	            return element.style[camelize(property)] || computedStyle.getPropertyValue(property);
	        },
	        map: function map(fn) {
	            return $($.map(this, function (el, i) {
	                return fn.call(el, i, el);
	            }));
	        },
	        offset: function offset() {
	            if (!this.length) return null;
	            var obj = this[0].getBoundingClientRect();
	            return {
	                left: obj.left + window.pageXOffset,
	                top: obj.top + window.pageYOffset,
	                width: Math.round(obj.width),
	                height: Math.round(obj.height)
	            };
	        },
	        offsetParent: function offsetParent() {
	            return this.map(function () {
	                var parent = this.offsetParent || document.body;
	                while (parent && !rootNodeRE.test(parent.nodeName) && $(parent).css('position') == 'static') {
	                    parent = parent.offsetParent;
	                }return parent;
	            });
	        },
	        parent: function parent() {
	            return uniq(this.pluck('parentNode'));
	        },
	        pluck: function pluck(property) {
	            return $.map(this, function (el) {
	                return el[property];
	            });
	        },
	        position: function position() {
	            if (!this.length) return;
	
	            var elem = this[0],
	
	            // Get *real* offsetParent
	            offsetParent = this.offsetParent(),
	
	            // Get correct offsets
	            offset = this.offset(),
	                parentOffset = rootNodeRE.test(offsetParent[0].nodeName) ? { top: 0, left: 0 } : offsetParent.offset();
	
	            // Subtract element margins
	            // note: when an element has margin: auto the offsetLeft and marginLeft
	            // are the same in Safari causing offset.left to incorrectly be 0
	            offset.top -= parseFloat($(elem).css('margin-top')) || 0;
	            offset.left -= parseFloat($(elem).css('margin-left')) || 0;
	
	            // Add offsetParent borders
	            parentOffset.top += parseFloat($(offsetParent[0]).css('border-top-width')) || 0;
	            parentOffset.left += parseFloat($(offsetParent[0]).css('border-left-width')) || 0;
	
	            // Subtract the two offsets
	            return {
	                top: offset.top - parentOffset.top,
	                left: offset.left - parentOffset.left
	            };
	        },
	        scrollTop: function scrollTop() {
	            if (!this.length) return;
	            var hasScrollTop = 'scrollTop' in this[0];
	            return hasScrollTop ? this[0].scrollTop : this[0].pageYOffset;
	        },
	        scrollLeft: function scrollLeft() {
	            if (!this.length) return;
	            var hasScrollLeft = 'scrollLeft' in this[0];
	            return hasScrollLeft ? this[0].scrollLeft : this[0].pageXOffset;
	        }
	    };
	
	    ['width', 'height'].forEach(function (dimension) {
	        var dimensionProperty = dimension.replace(/./, function (m) {
	            return m[0].toUpperCase();
	        });
	
	        // adapted from https://gist.github.com/wheresrhys/5823198
	
	        $.fn[dimension] = function () {
	            var offset = undefined,
	                el = this[0];
	
	            if (isWindow(el)) {
	                return el['inner' + dimensionProperty];
	            } else if (isDocument(el)) {
	                return el.documentElement['scroll' + dimensionProperty];
	            } else {
	                return (offset = this.offset()) && offset[dimension];
	            }
	        };
	    });
	
	    rquery.R.prototype = $.fn;
	
	    $.rquery = rquery;
	
	    return $;
	}();
	
	exports.$ = rQuery;

/***/ },
/* 55 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_55__;

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _class, _temp;
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(5);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Checkbox = (_temp = _class = function (_Component) {
	    _inherits(Checkbox, _Component);
	
	    function Checkbox(props) {
	        _classCallCheck(this, Checkbox);
	
	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Checkbox).call(this, props));
	
	        _this.state = {
	            active: _this.props.checked
	        };
	        return _this;
	    }
	
	    _createClass(Checkbox, [{
	        key: 'onClick',
	        value: function onClick() {
	            if (!this.state.active || this.state.active && !this.props.radio) {
	                this.setState({
	                    active: !this.state.active
	                });
	            }
	        }
	    }, {
	        key: 'renderChildren',
	        value: function renderChildren() {
	            /* eslint-disable no-use-before-define */
	            var _props = this.props;
	            var children = _props.children;
	            var defaultClasses = _props.defaultClasses;
	            var className = _props.className;
	            var onClick = _props.onClick;
	            var radio = _props.radio;
	            var slider = _props.slider;
	            var toggle = _props.toggle;
	            var component = _props.component;
	            var readOnly = _props.readOnly;
	            var checked = _props.checked;
	            var disabled = _props.disabled;
	
	            var other = _objectWithoutProperties(_props, ['children', 'defaultClasses', 'className', 'onClick', 'radio', 'slider', 'toggle', 'component', 'readOnly', 'checked', 'disabled']);
	            /* eslint-enable no-use-before-define */
	
	            var childElements = [_react2.default.DOM.input(_extends({
	                type: 'checkbox',
	                key: 'input',
	                className: 'hidden',
	                checked: this.state.active || this.props.checked,
	                readOnly: true
	            }, other)), _react2.default.DOM.label({
	                key: 'label'
	            }, this.props.children)];
	
	            return childElements;
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            /* eslint-disable no-use-before-define */
	            var _props2 = this.props;
	            var component = _props2.component;
	            var defaultClasses = _props2.defaultClasses;
	            var name = _props2.name;
	
	            var other = _objectWithoutProperties(_props2, ['component', 'defaultClasses', 'name']);
	            /* eslint-enable no-use-before-define */
	
	            other.className = (0, _classnames2.default)(this.props.className, this.getClasses());
	            other.onClick = typeof this.props.onClick === 'function' ? this.props.onClick : this.onClick.bind(this);
	
	            return _react2.default.createElement(this.props.component, other, this.renderChildren());
	        }
	    }, {
	        key: 'getClasses',
	        value: function getClasses() {
	            return {
	                // default
	                ui: this.props.defaultClasses,
	                checkbox: this.props.defaultClasses,
	
	                // positioning
	
	                // types
	                radio: this.props.radio,
	
	                // variations
	                fitted: this.props.fitted,
	                slider: this.props.slider,
	                toggle: this.props.toggle,
	
	                // state
	                'read-only': this.props.readOnly,
	                checked: this.state.active || this.props.checked,
	                disabled: this.props.disabled,
	                indeterminate: this.props.indeterminate
	            };
	        }
	    }]);
	
	    return Checkbox;
	}(_react.Component), _class.propTypes = {
	    checked: _react2.default.PropTypes.bool,
	    children: _react2.default.PropTypes.node,
	    className: _react2.default.PropTypes.any,
	    component: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.element, _react2.default.PropTypes.string]),
	    defaultClasses: _react2.default.PropTypes.bool,
	    disabled: _react2.default.PropTypes.bool,
	    fitted: _react2.default.PropTypes.bool,
	    indeterminate: _react2.default.PropTypes.bool,
	    name: _react2.default.PropTypes.string,
	    onClick: _react2.default.PropTypes.func,
	    radio: _react2.default.PropTypes.bool,
	    readOnly: _react2.default.PropTypes.bool,
	    slider: _react2.default.PropTypes.bool,
	    toggle: _react2.default.PropTypes.bool
	}, _class.defaultProps = {
	    component: 'div',
	    defaultClasses: true
	}, _temp);
	exports.default = Checkbox;

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _class, _temp;
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _modules = __webpack_require__(41);
	
	var _classnames = __webpack_require__(5);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var CheckboxFields = (_temp = _class = function (_Component) {
	    _inherits(CheckboxFields, _Component);
	
	    function CheckboxFields(props) {
	        _classCallCheck(this, CheckboxFields);
	
	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(CheckboxFields).call(this, props));
	
	        var active = _this.props.radio ? -1 : [];
	
	        _this.state = {
	            active: active
	        };
	        return _this;
	    }
	
	    _createClass(CheckboxFields, [{
	        key: 'onClick',
	        value: function onClick(key) {
	            // don't remove radio buttons if you click them twice
	            if (key === this.state.active && this.props.radio) {
	                return;
	                // but do remove for everything else
	            } else {
	                    this.setActive(key);
	                }
	        }
	    }, {
	        key: 'renderChildren',
	        value: function renderChildren() {
	            var _this2 = this;
	
	            var index = 0;
	            var element = null;
	
	            if (_react2.default.Children.count(this.props.children) === 1) {
	                return this.cloneChild(index, _react2.default.Children.only(this.props.children));
	            } else {
	                return _react2.default.Children.map(this.props.children, function (child) {
	                    if (child.type == _modules.Checkbox) {
	                        element = _this2.cloneChild(index, child);
	
	                        element = _react2.default.DOM.div({
	                            key: index,
	                            className: 'field'
	                        }, element);
	
	                        index++;
	                    } else if (typeof child === 'string') {
	                        return _react2.default.createElement(
	                            'label',
	                            { htmlFor: _this2.props.name },
	                            child
	                        );
	                    } else {
	                        element = child;
	                    }
	
	                    return element;
	                });
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            /* eslint-disable no-use-before-define */
	            var _props = this.props;
	            var component = _props.component;
	            var defaultClasses = _props.defaultClasses;
	            var name = _props.name;
	
	            var other = _objectWithoutProperties(_props, ['component', 'defaultClasses', 'name']);
	            /* eslint-enable no-use-before-define */
	
	
	            other.className = (0, _classnames2.default)(this.props.className, this.getClasses());
	
	            return _react2.default.createElement(this.props.component, other, this.renderChildren());
	        }
	
	        // clone a chid and update the props
	
	    }, {
	        key: 'cloneChild',
	        value: function cloneChild(index, child) {
	            var boundClick = this.onClick.bind(this, index);
	
	            /* eslint-disable no-use-before-define */
	            var _props2 = this.props;
	            var children = _props2.children;
	            var component = _props2.component;
	            var defaultClasses = _props2.defaultClasses;
	            var onClick = _props2.onClick;
	            var type = _props2.type;
	
	            var other = _objectWithoutProperties(_props2, ['children', 'component', 'defaultClasses', 'onClick', 'type']);
	            /* eslint-enable no-use-before-define */
	
	            return _react2.default.cloneElement(child, _extends({
	                key: index,
	                checked: this.getActive(index),
	                onClick: boundClick,
	                radio: this.props.radio,
	                readOnly: this.props.readOnly || this.props.disabled
	            }, other));
	        }
	    }, {
	        key: 'getClasses',
	        value: function getClasses() {
	            var classes = {
	                // default
	
	                // positioning
	
	                // types
	
	                // component
	
	                // variations
	                fields: _react2.default.Children.count(this.props.children) > 1
	            };
	
	            classes[this.props.type] = !!this.props.type;
	
	            return classes;
	        }
	    }, {
	        key: 'getActive',
	        value: function getActive(index) {
	            var state = this.state.active;
	            var active = false;
	
	            if (Array.isArray(state)) {
	                active = state.indexOf(index) > -1 ? true : false;
	            } else {
	                active = state == index ? true : false;
	            }
	
	            return active;
	        }
	    }, {
	        key: 'setActive',
	        value: function setActive(index) {
	            if (this.props.readOnly || this.props.disabled) return;
	
	            var state = this.state.active;
	
	            // should only be an array if it's checkbox, not radio
	            // IE 9+ for indexOf
	            if (Array.isArray(state)) {
	                var position = state.indexOf(index);
	
	                if (position > -1) {
	                    state.splice(position, 1);
	                } else {
	                    state.push(index);
	                }
	
	                // it's a radio
	            } else {
	                    state = index;
	                }
	
	            this.setState({
	                active: state
	            });
	        }
	    }]);
	
	    return CheckboxFields;
	}(_react.Component), _class.propTypes = {
	    children: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.array, _react2.default.PropTypes.node]),
	    className: _react2.default.PropTypes.node,
	    component: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.element, _react2.default.PropTypes.string]),
	    defaultClasses: _react2.default.PropTypes.bool,
	    disabled: _react2.default.PropTypes.bool,
	    name: _react2.default.PropTypes.string.isRequired,
	    onClick: _react2.default.PropTypes.func,
	    radio: _react2.default.PropTypes.bool,
	    readOnly: _react2.default.PropTypes.bool,
	    type: _react2.default.PropTypes.oneOf(['grouped', 'inline']).isRequired
	}, _class.defaultProps = {
	    component: 'div',
	    defaultClasses: true
	}, _temp);
	exports.default = CheckboxFields;

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _class, _temp;
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactMotionUiPack = __webpack_require__(59);
	
	var _reactMotionUiPack2 = _interopRequireDefault(_reactMotionUiPack);
	
	var _utilities = __webpack_require__(4);
	
	var _elements = __webpack_require__(1);
	
	var _classnames = __webpack_require__(5);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _defaultProps = __webpack_require__(92);
	
	var _defaultProps2 = _interopRequireDefault(_defaultProps);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Dimmer = (_temp = _class = function (_React$Component) {
	    _inherits(Dimmer, _React$Component);
	
	    function Dimmer() {
	        _classCallCheck(this, Dimmer);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Dimmer).apply(this, arguments));
	    }
	
	    _createClass(Dimmer, [{
	        key: 'getChildContext',
	
	
	        // This forces <Content> to add a centered div below it.
	        value: function getChildContext() {
	            return {
	                isDimmerChild: true
	            };
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            /* eslint-disable no-use-before-define */
	            var _props = this.props;
	            var active = _props.active;
	            var children = _props.children;
	            var component = _props.component;
	            var enterAnimation = _props.enterAnimation;
	            var leaveAnimation = _props.leaveAnimation;
	            var page = _props.page;
	            var inverted = _props.inverted;
	
	            var other = _objectWithoutProperties(_props, ['active', 'children', 'component', 'enterAnimation', 'leaveAnimation', 'page', 'inverted']);
	            /* eslint-enable no-use-before-define */
	
	            var Component = component;
	            other.className = (0, _classnames2.default)(other.className, this.getClasses());
	            return _react2.default.createElement(
	                _reactMotionUiPack2.default,
	                { component: false,
	                    enter: enterAnimation,
	                    leave: leaveAnimation
	                },
	                active && _react2.default.createElement(
	                    Component,
	                    _extends({}, other, {
	                        key: 'dimmer'
	                    }),
	                    (0, _utilities.hasChild)(children, _elements.Loader) ? children : _react2.default.createElement(
	                        _elements.Content,
	                        null,
	                        children
	                    )
	                )
	            );
	        }
	    }, {
	        key: 'getClasses',
	        value: function getClasses() {
	            return {
	                ui: this.props.defaultClasses,
	                dimmer: this.props.defaultClasses,
	                active: this.props.active,
	                page: this.props.page,
	                inverted: this.props.inverted
	            };
	        }
	    }]);
	
	    return Dimmer;
	}(_react2.default.Component), _class.propTypes = _extends({}, _defaultProps2.default.propTypes, {
	    /**
	     * Hide/Display dimmer
	     */
	    active: _react2.default.PropTypes.bool,
	    /**
	     * Enter animation
	     */
	    enterAnimation: _react2.default.PropTypes.object,
	    /**
	     * Leave animation
	     */
	    leaveAnimation: _react2.default.PropTypes.object,
	    /**
	     * Page dimmer. Doesn't require dimmable section
	     */
	    page: _react2.default.PropTypes.bool,
	    /**
	     * Inverted dimmer
	     */
	    inverted: _react2.default.PropTypes.bool
	}), _class.childContextTypes = {
	    isDimmerChild: _react2.default.PropTypes.bool
	}, _class.defaultProps = _extends({}, _defaultProps2.default.defaultProps, {
	    active: false,
	    enterAnimation: {
	        opacity: 1
	    },
	    leaveAnimation: {
	        opacity: 0
	    },
	    page: false,
	    inverted: false
	}), _temp);
	exports.default = Dimmer;

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _Transition = __webpack_require__(60);
	
	var _Transition2 = _interopRequireDefault(_Transition);
	
	exports['default'] = _Transition2['default'];
	module.exports = exports['default'];

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactMotion = __webpack_require__(61);
	
	var _cloneStyles = __webpack_require__(73);
	
	var _cloneStyles2 = _interopRequireDefault(_cloneStyles);
	
	var _toRMStyles = __webpack_require__(74);
	
	var _toRMStyles2 = _interopRequireDefault(_toRMStyles);
	
	var _fromRMStyles = __webpack_require__(75);
	
	var _fromRMStyles2 = _interopRequireDefault(_fromRMStyles);
	
	var _configToStyle = __webpack_require__(76);
	
	var _configToStyle2 = _interopRequireDefault(_configToStyle);
	
	var _TransitionChild = __webpack_require__(78);
	
	var _TransitionChild2 = _interopRequireDefault(_TransitionChild);
	
	var Transition = (function (_Component) {
	  _inherits(Transition, _Component);
	
	  function Transition() {
	    var _this = this;
	
	    _classCallCheck(this, Transition);
	
	    _get(Object.getPrototypeOf(Transition.prototype), 'constructor', this).apply(this, arguments);
	
	    this.state = {
	      dimensions: {}
	    };
	    this._onlyKey = Date.now();
	    this._instant = {};
	
	    this._getDefaultStyles = function () {
	      var _props = _this.props;
	      var children = _props.children;
	      var runOnMount = _props.runOnMount;
	      var appear = _props.appear;
	      var enter = _props.enter;
	      var leave = _props.leave;
	
	      var childStyles = enter;
	
	      if (runOnMount) {
	        childStyles = appear || leave;
	      }
	
	      // convert auto values and map to new object to avoid mutation
	      childStyles = (0, _cloneStyles2['default'])(childStyles);
	
	      return _react.Children.map(children, function (child) {
	        return child && {
	          key: child.key,
	          data: child,
	          style: _extends({}, childStyles)
	        };
	      });
	    };
	
	    this._getStyles = function () {
	      var dimensions = _this.state.dimensions;
	      var _props2 = _this.props;
	      var children = _props2.children;
	      var enter = _props2.enter;
	
	      return _react.Children.map(children, function (child) {
	        // if null is being passed, bail out
	        if (!child) return;
	
	        var key = child.key;
	
	        var childDimensions = dimensions && dimensions[key];
	
	        // convert to React Motion friendly structure
	        var childStyles = (0, _toRMStyles2['default'])(enter);
	
	        if (enter.width && (enter.width === 'auto' || enter.width.val === 'auto')) {
	          childStyles.width.val = childDimensions ? childDimensions.width : 0;
	        }
	
	        if (enter.height && (enter.height === 'auto' || enter.height.val === 'auto')) {
	          var height = childDimensions ? childDimensions.height : 0;
	
	          // if instant, apply the height directly rather than through RM
	          if (_this._instant[key]) {
	            childStyles.height = height;
	
	            // it only needs to be instant for one render
	            // to prime RM for the next height transition
	            // so we set it back to false
	            _this._instant[key] = false;
	          } else {
	            childStyles.height.val = height;
	          }
	        }
	
	        if (!key) {
	          throw new Error('You must provide a key for every child of Transition.');
	        } else {
	          return {
	            key: key,
	            data: child,
	            style: _extends({}, childStyles)
	          };
	        }
	      });
	    };
	
	    this._willEnter = function (_ref) {
	      var key = _ref.key;
	      var style = _ref.style;
	      var _props3 = _this.props;
	      var appear = _props3.appear;
	      var leave = _props3.leave;
	      var onEnter = _props3.onEnter;
	
	      var childStyles = typeof appear === 'object' ? appear : leave;
	
	      // convert auto values and map to new object to avoid mutation
	      childStyles = (0, _cloneStyles2['default'])(childStyles);
	
	      // fire entering callback
	      onEnter(childStyles);
	
	      return _extends({}, style, childStyles);
	    };
	
	    this._willLeave = function (_ref2) {
	      var key = _ref2.key;
	      var style = _ref2.style;
	      var _props4 = _this.props;
	      var leave = _props4.leave;
	      var onLeave = _props4.onLeave;
	
	      //const flatValues = fromRMStyles(currentStyles[key])
	
	      // TODO: when RM implements onEnd callback do cleanup
	      // clean up dimensions when item leaves
	      // if (this.state.dimensions[key]) {
	      //   delete this.state.dimensions[key]
	      // }
	
	      // fire leaving callback
	      onLeave(style);
	
	      return _extends({}, style, (0, _toRMStyles2['default'])(leave));
	    };
	
	    this._storeDimensions = function (key, childDimensions, mutations) {
	      var dimensions = _this.state.dimensions;
	
	      // if any mutations, set instantly
	      if (mutations) {
	        _this._instant[key] = true;
	      }
	
	      // store child dimensions
	      dimensions[key] = childDimensions;
	
	      // update state with new dimensions
	      _this.setState({ dimensions: dimensions });
	    };
	
	    this._childrenToRender = function (currValues) {
	      var children = _this.props.children;
	
	      return currValues.map(function (_ref3) {
	        var key = _ref3.key;
	        var data = _ref3.data;
	        var style = _ref3.style;
	
	        var child = data;
	        var childStyle = child.props.style;
	        var dimensions = _this.state.dimensions && _this.state.dimensions[key];
	
	        // convert styles to a friendly structure
	        style = (0, _configToStyle2['default'])(style);
	
	        var currHeight = style.height;
	
	        // if height is being animated we'll want to
	        // ditch it after it's reached its destination
	        if (dimensions && currHeight) {
	          var destHeight = parseFloat(dimensions.height).toFixed(4);
	
	          if (destHeight > 0 && destHeight !== currHeight) {
	            style = _extends({}, style, {
	              height: currHeight
	            });
	          } else {
	            style = _extends({}, style, {
	              height: ''
	            });
	          }
	        }
	
	        // merge in any styles set by the user
	        // Transition styles will take precedence
	        if (childStyle) {
	          style = _extends({}, childStyle, style);
	        }
	
	        return _react2['default'].createElement(_TransitionChild2['default'], {
	          key: key,
	          child: child,
	          style: style,
	          dimensions: dimensions,
	          onMeasure: _this._storeDimensions.bind(null, key)
	        });
	      });
	    };
	  }
	
	  _createClass(Transition, [{
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      var component = this.props.component;
	
	      return _react2['default'].createElement(
	        _reactMotion.TransitionMotion,
	        {
	          defaultStyles: this._getDefaultStyles(),
	          styles: this._getStyles(),
	          willEnter: this._willEnter,
	          willLeave: this._willLeave
	        },
	        function (currValues) {
	          var children = _this2._childrenToRender(currValues);
	          var wrapper = null;
	
	          if (!component || component === 'false') {
	            if (_react.Children.count(children) === 1) {
	              wrapper = _react.Children.only(children[0]);
	            } else {
	              wrapper = (0, _react.createElement)('span', { style: { display: 'none' } });
	            }
	          } else {
	            wrapper = (0, _react.createElement)(component, _this2.props, children);
	          }
	
	          return wrapper;
	        }
	      );
	    }
	  }], [{
	    key: 'propTypes',
	    value: {
	      component: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.bool]),
	      runOnMount: _react.PropTypes.bool,
	      appear: _react.PropTypes.object,
	      enter: _react.PropTypes.object,
	      leave: _react.PropTypes.object,
	      onEnter: _react.PropTypes.func,
	      onLeave: _react.PropTypes.func
	    },
	    enumerable: true
	  }, {
	    key: 'defaultProps',
	    value: {
	      component: 'div',
	      runOnMount: true,
	      enter: { opacity: 1 },
	      leave: { opacity: 0 },
	      onEnter: function onEnter() {
	        return null;
	      },
	      onLeave: function onLeave() {
	        return null;
	      }
	    },
	    enumerable: true
	  }]);
	
	  return Transition;
	})(_react.Component);
	
	exports['default'] = Transition;
	module.exports = exports['default'];

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequire(obj) { return obj && obj.__esModule ? obj['default'] : obj; }
	
	var _Motion = __webpack_require__(62);
	
	exports.Motion = _interopRequire(_Motion);
	
	var _StaggeredMotion = __webpack_require__(67);
	
	exports.StaggeredMotion = _interopRequire(_StaggeredMotion);
	
	var _TransitionMotion = __webpack_require__(68);
	
	exports.TransitionMotion = _interopRequire(_TransitionMotion);
	
	var _spring = __webpack_require__(70);
	
	exports.spring = _interopRequire(_spring);
	
	var _presets = __webpack_require__(71);
	
	exports.presets = _interopRequire(_presets);
	
	// deprecated, dummy warning function
	
	var _reorderKeys = __webpack_require__(72);
	
	exports.reorderKeys = _interopRequire(_reorderKeys);

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _mapToZero = __webpack_require__(63);
	
	var _mapToZero2 = _interopRequireDefault(_mapToZero);
	
	var _stripStyle = __webpack_require__(64);
	
	var _stripStyle2 = _interopRequireDefault(_stripStyle);
	
	var _stepper3 = __webpack_require__(65);
	
	var _stepper4 = _interopRequireDefault(_stepper3);
	
	var _performanceNow = __webpack_require__(49);
	
	var _performanceNow2 = _interopRequireDefault(_performanceNow);
	
	var _raf = __webpack_require__(48);
	
	var _raf2 = _interopRequireDefault(_raf);
	
	var _shouldStopAnimation = __webpack_require__(66);
	
	var _shouldStopAnimation2 = _interopRequireDefault(_shouldStopAnimation);
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var msPerFrame = 1000 / 60;
	
	var Motion = _react2['default'].createClass({
	  displayName: 'Motion',
	
	  propTypes: {
	    // TOOD: warn against putting a config in here
	    defaultStyle: _react.PropTypes.objectOf(_react.PropTypes.number),
	    style: _react.PropTypes.objectOf(_react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.object])).isRequired,
	    children: _react.PropTypes.func.isRequired,
	    onRest: _react.PropTypes.func
	  },
	
	  getInitialState: function getInitialState() {
	    var _props = this.props;
	    var defaultStyle = _props.defaultStyle;
	    var style = _props.style;
	
	    var currentStyle = defaultStyle || _stripStyle2['default'](style);
	    var currentVelocity = _mapToZero2['default'](currentStyle);
	    return {
	      currentStyle: currentStyle,
	      currentVelocity: currentVelocity,
	      lastIdealStyle: currentStyle,
	      lastIdealVelocity: currentVelocity
	    };
	  },
	
	  wasAnimating: false,
	  animationID: null,
	  prevTime: 0,
	  accumulatedTime: 0,
	  // it's possible that currentStyle's value is stale: if props is immediately
	  // changed from 0 to 400 to spring(0) again, the async currentStyle is still
	  // at 0 (didn't have time to tick and interpolate even once). If we naively
	  // compare currentStyle with destVal it'll be 0 === 0 (no animation, stop).
	  // In reality currentStyle should be 400
	  unreadPropStyle: null,
	  // after checking for unreadPropStyle != null, we manually go set the
	  // non-interpolating values (those that are a number, without a spring
	  // config)
	  clearUnreadPropStyle: function clearUnreadPropStyle(destStyle) {
	    var dirty = false;
	    var _state = this.state;
	    var currentStyle = _state.currentStyle;
	    var currentVelocity = _state.currentVelocity;
	    var lastIdealStyle = _state.lastIdealStyle;
	    var lastIdealVelocity = _state.lastIdealVelocity;
	
	    for (var key in destStyle) {
	      if (!destStyle.hasOwnProperty(key)) {
	        continue;
	      }
	
	      var styleValue = destStyle[key];
	      if (typeof styleValue === 'number') {
	        if (!dirty) {
	          dirty = true;
	          currentStyle = _extends({}, currentStyle);
	          currentVelocity = _extends({}, currentVelocity);
	          lastIdealStyle = _extends({}, lastIdealStyle);
	          lastIdealVelocity = _extends({}, lastIdealVelocity);
	        }
	
	        currentStyle[key] = styleValue;
	        currentVelocity[key] = 0;
	        lastIdealStyle[key] = styleValue;
	        lastIdealVelocity[key] = 0;
	      }
	    }
	
	    if (dirty) {
	      this.setState({ currentStyle: currentStyle, currentVelocity: currentVelocity, lastIdealStyle: lastIdealStyle, lastIdealVelocity: lastIdealVelocity });
	    }
	  },
	
	  startAnimationIfNecessary: function startAnimationIfNecessary() {
	    var _this = this;
	
	    // TODO: when config is {a: 10} and dest is {a: 10} do we raf once and
	    // call cb? No, otherwise accidental parent rerender causes cb trigger
	    this.animationID = _raf2['default'](function () {
	      // check if we need to animate in the first place
	      var propsStyle = _this.props.style;
	      if (_shouldStopAnimation2['default'](_this.state.currentStyle, propsStyle, _this.state.currentVelocity)) {
	        if (_this.wasAnimating && _this.props.onRest) {
	          _this.props.onRest();
	        }
	
	        // no need to cancel animationID here; shouldn't have any in flight
	        _this.animationID = null;
	        _this.wasAnimating = false;
	        _this.accumulatedTime = 0;
	        return;
	      }
	
	      _this.wasAnimating = true;
	
	      var currentTime = _performanceNow2['default']();
	      var timeDelta = currentTime - _this.prevTime;
	      _this.prevTime = currentTime;
	      _this.accumulatedTime = _this.accumulatedTime + timeDelta;
	      // more than 10 frames? prolly switched browser tab. Restart
	      if (_this.accumulatedTime > msPerFrame * 10) {
	        _this.accumulatedTime = 0;
	      }
	
	      if (_this.accumulatedTime === 0) {
	        // no need to cancel animationID here; shouldn't have any in flight
	        _this.animationID = null;
	        _this.startAnimationIfNecessary();
	        return;
	      }
	
	      var currentFrameCompletion = (_this.accumulatedTime - Math.floor(_this.accumulatedTime / msPerFrame) * msPerFrame) / msPerFrame;
	      var framesToCatchUp = Math.floor(_this.accumulatedTime / msPerFrame);
	
	      var newLastIdealStyle = {};
	      var newLastIdealVelocity = {};
	      var newCurrentStyle = {};
	      var newCurrentVelocity = {};
	
	      for (var key in propsStyle) {
	        if (!propsStyle.hasOwnProperty(key)) {
	          continue;
	        }
	
	        var styleValue = propsStyle[key];
	        if (typeof styleValue === 'number') {
	          newCurrentStyle[key] = styleValue;
	          newCurrentVelocity[key] = 0;
	          newLastIdealStyle[key] = styleValue;
	          newLastIdealVelocity[key] = 0;
	        } else {
	          var newLastIdealStyleValue = _this.state.lastIdealStyle[key];
	          var newLastIdealVelocityValue = _this.state.lastIdealVelocity[key];
	          for (var i = 0; i < framesToCatchUp; i++) {
	            var _stepper = _stepper4['default'](msPerFrame / 1000, newLastIdealStyleValue, newLastIdealVelocityValue, styleValue.val, styleValue.stiffness, styleValue.damping, styleValue.precision);
	
	            newLastIdealStyleValue = _stepper[0];
	            newLastIdealVelocityValue = _stepper[1];
	          }
	
	          var _stepper2 = _stepper4['default'](msPerFrame / 1000, newLastIdealStyleValue, newLastIdealVelocityValue, styleValue.val, styleValue.stiffness, styleValue.damping, styleValue.precision);
	
	          var nextIdealX = _stepper2[0];
	          var nextIdealV = _stepper2[1];
	
	          newCurrentStyle[key] = newLastIdealStyleValue + (nextIdealX - newLastIdealStyleValue) * currentFrameCompletion;
	          newCurrentVelocity[key] = newLastIdealVelocityValue + (nextIdealV - newLastIdealVelocityValue) * currentFrameCompletion;
	          newLastIdealStyle[key] = newLastIdealStyleValue;
	          newLastIdealVelocity[key] = newLastIdealVelocityValue;
	        }
	      }
	
	      _this.animationID = null;
	      // the amount we're looped over above
	      _this.accumulatedTime -= framesToCatchUp * msPerFrame;
	
	      _this.setState({
	        currentStyle: newCurrentStyle,
	        currentVelocity: newCurrentVelocity,
	        lastIdealStyle: newLastIdealStyle,
	        lastIdealVelocity: newLastIdealVelocity
	      });
	
	      _this.unreadPropStyle = null;
	
	      _this.startAnimationIfNecessary();
	    });
	  },
	
	  componentDidMount: function componentDidMount() {
	    this.prevTime = _performanceNow2['default']();
	    this.startAnimationIfNecessary();
	  },
	
	  componentWillReceiveProps: function componentWillReceiveProps(props) {
	    if (this.unreadPropStyle != null) {
	      // previous props haven't had the chance to be set yet; set them here
	      this.clearUnreadPropStyle(this.unreadPropStyle);
	    }
	
	    this.unreadPropStyle = props.style;
	    if (this.animationID == null) {
	      this.prevTime = _performanceNow2['default']();
	      this.startAnimationIfNecessary();
	    }
	  },
	
	  componentWillUnmount: function componentWillUnmount() {
	    if (this.animationID != null) {
	      _raf2['default'].cancel(this.animationID);
	      this.animationID = null;
	    }
	  },
	
	  render: function render() {
	    var renderedChildren = this.props.children(this.state.currentStyle);
	    return renderedChildren && _react2['default'].Children.only(renderedChildren);
	  }
	});
	
	exports['default'] = Motion;
	module.exports = exports['default'];

/***/ },
/* 63 */
/***/ function(module, exports) {

	
	
	// currently used to initiate the velocity style object to 0
	'use strict';
	
	exports.__esModule = true;
	exports['default'] = mapToZero;
	
	function mapToZero(obj) {
	  var ret = {};
	  for (var key in obj) {
	    if (obj.hasOwnProperty(key)) {
	      ret[key] = 0;
	    }
	  }
	  return ret;
	}
	
	module.exports = exports['default'];

/***/ },
/* 64 */
/***/ function(module, exports) {

	
	// turn {x: {val: 1, stiffness: 1, damping: 2}, y: 2} generated by
	// `{x: spring(1, {stiffness: 1, damping: 2}), y: 2}` into {x: 1, y: 2}
	
	'use strict';
	
	exports.__esModule = true;
	exports['default'] = stripStyle;
	
	function stripStyle(style) {
	  var ret = {};
	  for (var key in style) {
	    if (!style.hasOwnProperty(key)) {
	      continue;
	    }
	    ret[key] = typeof style[key] === 'number' ? style[key] : style[key].val;
	  }
	  return ret;
	}
	
	module.exports = exports['default'];

/***/ },
/* 65 */
/***/ function(module, exports) {

	
	
	// stepper is used a lot. Saves allocation to return the same array wrapper.
	// This is fine and danger-free against mutations because the callsite
	// immediately destructures it and gets the numbers inside without passing the
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = stepper;
	
	var reusedTuple = [];
	
	function stepper(secondPerFrame, x, v, destX, k, b, precision) {
	  // Spring stiffness, in kg / s^2
	
	  // for animations, destX is really spring length (spring at rest). initial
	  // position is considered as the stretched/compressed position of a spring
	  var Fspring = -k * (x - destX);
	
	  // Damping, in kg / s
	  var Fdamper = -b * v;
	
	  // usually we put mass here, but for animation purposes, specifying mass is a
	  // bit redundant. you could simply adjust k and b accordingly
	  // let a = (Fspring + Fdamper) / mass;
	  var a = Fspring + Fdamper;
	
	  var newV = v + a * secondPerFrame;
	  var newX = x + newV * secondPerFrame;
	
	  if (Math.abs(newV) < precision && Math.abs(newX - destX) < precision) {
	    reusedTuple[0] = destX;
	    reusedTuple[1] = 0;
	    return reusedTuple;
	  }
	
	  reusedTuple[0] = newX;
	  reusedTuple[1] = newV;
	  return reusedTuple;
	}
	
	module.exports = exports["default"];
	// array reference around.

/***/ },
/* 66 */
/***/ function(module, exports) {

	
	
	// usage assumption: currentStyle values have already been rendered but it says
	// nothing of whether currentStyle is stale (see unreadPropStyle)
	'use strict';
	
	exports.__esModule = true;
	exports['default'] = shouldStopAnimation;
	
	function shouldStopAnimation(currentStyle, style, currentVelocity) {
	  for (var key in style) {
	    if (!style.hasOwnProperty(key)) {
	      continue;
	    }
	
	    if (currentVelocity[key] !== 0) {
	      return false;
	    }
	
	    var styleValue = typeof style[key] === 'number' ? style[key] : style[key].val;
	    // stepper will have already taken care of rounding precision errors, so
	    // won't have such thing as 0.9999 !=== 1
	    if (currentStyle[key] !== styleValue) {
	      return false;
	    }
	  }
	
	  return true;
	}
	
	module.exports = exports['default'];

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _mapToZero = __webpack_require__(63);
	
	var _mapToZero2 = _interopRequireDefault(_mapToZero);
	
	var _stripStyle = __webpack_require__(64);
	
	var _stripStyle2 = _interopRequireDefault(_stripStyle);
	
	var _stepper3 = __webpack_require__(65);
	
	var _stepper4 = _interopRequireDefault(_stepper3);
	
	var _performanceNow = __webpack_require__(49);
	
	var _performanceNow2 = _interopRequireDefault(_performanceNow);
	
	var _raf = __webpack_require__(48);
	
	var _raf2 = _interopRequireDefault(_raf);
	
	var _shouldStopAnimation = __webpack_require__(66);
	
	var _shouldStopAnimation2 = _interopRequireDefault(_shouldStopAnimation);
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var msPerFrame = 1000 / 60;
	
	function shouldStopAnimationAll(currentStyles, styles, currentVelocities) {
	  for (var i = 0; i < currentStyles.length; i++) {
	    if (!_shouldStopAnimation2['default'](currentStyles[i], styles[i], currentVelocities[i])) {
	      return false;
	    }
	  }
	  return true;
	}
	
	var StaggeredMotion = _react2['default'].createClass({
	  displayName: 'StaggeredMotion',
	
	  propTypes: {
	    // TOOD: warn against putting a config in here
	    defaultStyles: _react.PropTypes.arrayOf(_react.PropTypes.objectOf(_react.PropTypes.number)),
	    styles: _react.PropTypes.func.isRequired,
	    children: _react.PropTypes.func.isRequired
	  },
	
	  getInitialState: function getInitialState() {
	    var _props = this.props;
	    var defaultStyles = _props.defaultStyles;
	    var styles = _props.styles;
	
	    var currentStyles = defaultStyles || styles().map(_stripStyle2['default']);
	    var currentVelocities = currentStyles.map(function (currentStyle) {
	      return _mapToZero2['default'](currentStyle);
	    });
	    return {
	      currentStyles: currentStyles,
	      currentVelocities: currentVelocities,
	      lastIdealStyles: currentStyles,
	      lastIdealVelocities: currentVelocities
	    };
	  },
	
	  animationID: null,
	  prevTime: 0,
	  accumulatedTime: 0,
	  // it's possible that currentStyle's value is stale: if props is immediately
	  // changed from 0 to 400 to spring(0) again, the async currentStyle is still
	  // at 0 (didn't have time to tick and interpolate even once). If we naively
	  // compare currentStyle with destVal it'll be 0 === 0 (no animation, stop).
	  // In reality currentStyle should be 400
	  unreadPropStyles: null,
	  // after checking for unreadPropStyles != null, we manually go set the
	  // non-interpolating values (those that are a number, without a spring
	  // config)
	  clearUnreadPropStyle: function clearUnreadPropStyle(unreadPropStyles) {
	    var _state = this.state;
	    var currentStyles = _state.currentStyles;
	    var currentVelocities = _state.currentVelocities;
	    var lastIdealStyles = _state.lastIdealStyles;
	    var lastIdealVelocities = _state.lastIdealVelocities;
	
	    var someDirty = false;
	    for (var i = 0; i < unreadPropStyles.length; i++) {
	      var unreadPropStyle = unreadPropStyles[i];
	      var dirty = false;
	
	      for (var key in unreadPropStyle) {
	        if (!unreadPropStyle.hasOwnProperty(key)) {
	          continue;
	        }
	
	        var styleValue = unreadPropStyle[key];
	        if (typeof styleValue === 'number') {
	          if (!dirty) {
	            dirty = true;
	            someDirty = true;
	            currentStyles[i] = _extends({}, currentStyles[i]);
	            currentVelocities[i] = _extends({}, currentVelocities[i]);
	            lastIdealStyles[i] = _extends({}, lastIdealStyles[i]);
	            lastIdealVelocities[i] = _extends({}, lastIdealVelocities[i]);
	          }
	          currentStyles[i][key] = styleValue;
	          currentVelocities[i][key] = 0;
	          lastIdealStyles[i][key] = styleValue;
	          lastIdealVelocities[i][key] = 0;
	        }
	      }
	    }
	
	    if (someDirty) {
	      this.setState({ currentStyles: currentStyles, currentVelocities: currentVelocities, lastIdealStyles: lastIdealStyles, lastIdealVelocities: lastIdealVelocities });
	    }
	  },
	
	  startAnimationIfNecessary: function startAnimationIfNecessary() {
	    var _this = this;
	
	    // TODO: when config is {a: 10} and dest is {a: 10} do we raf once and
	    // call cb? No, otherwise accidental parent rerender causes cb trigger
	    this.animationID = _raf2['default'](function () {
	      var destStyles = _this.props.styles(_this.state.lastIdealStyles);
	
	      // check if we need to animate in the first place
	      if (shouldStopAnimationAll(_this.state.currentStyles, destStyles, _this.state.currentVelocities)) {
	        // no need to cancel animationID here; shouldn't have any in flight
	        _this.animationID = null;
	        _this.accumulatedTime = 0;
	        return;
	      }
	
	      var currentTime = _performanceNow2['default']();
	      var timeDelta = currentTime - _this.prevTime;
	      _this.prevTime = currentTime;
	      _this.accumulatedTime = _this.accumulatedTime + timeDelta;
	      // more than 10 frames? prolly switched browser tab. Restart
	      if (_this.accumulatedTime > msPerFrame * 10) {
	        _this.accumulatedTime = 0;
	      }
	
	      if (_this.accumulatedTime === 0) {
	        // no need to cancel animationID here; shouldn't have any in flight
	        _this.animationID = null;
	        _this.startAnimationIfNecessary();
	        return;
	      }
	
	      var currentFrameCompletion = (_this.accumulatedTime - Math.floor(_this.accumulatedTime / msPerFrame) * msPerFrame) / msPerFrame;
	      var framesToCatchUp = Math.floor(_this.accumulatedTime / msPerFrame);
	
	      var newLastIdealStyles = [];
	      var newLastIdealVelocities = [];
	      var newCurrentStyles = [];
	      var newCurrentVelocities = [];
	
	      for (var i = 0; i < destStyles.length; i++) {
	        var destStyle = destStyles[i];
	        var newCurrentStyle = {};
	        var newCurrentVelocity = {};
	        var newLastIdealStyle = {};
	        var newLastIdealVelocity = {};
	
	        for (var key in destStyle) {
	          if (!destStyle.hasOwnProperty(key)) {
	            continue;
	          }
	
	          var styleValue = destStyle[key];
	          if (typeof styleValue === 'number') {
	            newCurrentStyle[key] = styleValue;
	            newCurrentVelocity[key] = 0;
	            newLastIdealStyle[key] = styleValue;
	            newLastIdealVelocity[key] = 0;
	          } else {
	            var newLastIdealStyleValue = _this.state.lastIdealStyles[i][key];
	            var newLastIdealVelocityValue = _this.state.lastIdealVelocities[i][key];
	            for (var j = 0; j < framesToCatchUp; j++) {
	              var _stepper = _stepper4['default'](msPerFrame / 1000, newLastIdealStyleValue, newLastIdealVelocityValue, styleValue.val, styleValue.stiffness, styleValue.damping, styleValue.precision);
	
	              newLastIdealStyleValue = _stepper[0];
	              newLastIdealVelocityValue = _stepper[1];
	            }
	
	            var _stepper2 = _stepper4['default'](msPerFrame / 1000, newLastIdealStyleValue, newLastIdealVelocityValue, styleValue.val, styleValue.stiffness, styleValue.damping, styleValue.precision);
	
	            var nextIdealX = _stepper2[0];
	            var nextIdealV = _stepper2[1];
	
	            newCurrentStyle[key] = newLastIdealStyleValue + (nextIdealX - newLastIdealStyleValue) * currentFrameCompletion;
	            newCurrentVelocity[key] = newLastIdealVelocityValue + (nextIdealV - newLastIdealVelocityValue) * currentFrameCompletion;
	            newLastIdealStyle[key] = newLastIdealStyleValue;
	            newLastIdealVelocity[key] = newLastIdealVelocityValue;
	          }
	        }
	
	        newCurrentStyles[i] = newCurrentStyle;
	        newCurrentVelocities[i] = newCurrentVelocity;
	        newLastIdealStyles[i] = newLastIdealStyle;
	        newLastIdealVelocities[i] = newLastIdealVelocity;
	      }
	
	      _this.animationID = null;
	      // the amount we're looped over above
	      _this.accumulatedTime -= framesToCatchUp * msPerFrame;
	
	      _this.setState({
	        currentStyles: newCurrentStyles,
	        currentVelocities: newCurrentVelocities,
	        lastIdealStyles: newLastIdealStyles,
	        lastIdealVelocities: newLastIdealVelocities
	      });
	
	      _this.unreadPropStyles = null;
	
	      _this.startAnimationIfNecessary();
	    });
	  },
	
	  componentDidMount: function componentDidMount() {
	    this.prevTime = _performanceNow2['default']();
	    this.startAnimationIfNecessary();
	  },
	
	  componentWillReceiveProps: function componentWillReceiveProps(props) {
	    if (this.unreadPropStyles != null) {
	      // previous props haven't had the chance to be set yet; set them here
	      this.clearUnreadPropStyle(this.unreadPropStyles);
	    }
	
	    this.unreadPropStyles = props.styles(this.state.lastIdealStyles);
	    if (this.animationID == null) {
	      this.prevTime = _performanceNow2['default']();
	      this.startAnimationIfNecessary();
	    }
	  },
	
	  componentWillUnmount: function componentWillUnmount() {
	    if (this.animationID != null) {
	      _raf2['default'].cancel(this.animationID);
	      this.animationID = null;
	    }
	  },
	
	  render: function render() {
	    var renderedChildren = this.props.children(this.state.currentStyles);
	    return renderedChildren && _react2['default'].Children.only(renderedChildren);
	  }
	});
	
	exports['default'] = StaggeredMotion;
	module.exports = exports['default'];

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _mapToZero = __webpack_require__(63);
	
	var _mapToZero2 = _interopRequireDefault(_mapToZero);
	
	var _stripStyle = __webpack_require__(64);
	
	var _stripStyle2 = _interopRequireDefault(_stripStyle);
	
	var _stepper3 = __webpack_require__(65);
	
	var _stepper4 = _interopRequireDefault(_stepper3);
	
	var _mergeDiff = __webpack_require__(69);
	
	var _mergeDiff2 = _interopRequireDefault(_mergeDiff);
	
	var _performanceNow = __webpack_require__(49);
	
	var _performanceNow2 = _interopRequireDefault(_performanceNow);
	
	var _raf = __webpack_require__(48);
	
	var _raf2 = _interopRequireDefault(_raf);
	
	var _shouldStopAnimation = __webpack_require__(66);
	
	var _shouldStopAnimation2 = _interopRequireDefault(_shouldStopAnimation);
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var msPerFrame = 1000 / 60;
	
	// the children function & (potential) styles function asks as param an
	// Array<TransitionPlainStyle>, where each TransitionPlainStyle is of the format
	// {key: string, data?: any, style: PlainStyle}. However, the way we keep
	// internal states doesn't contain such a data structure (check the state and
	// TransitionMotionState). So when children function and others ask for such
	// data we need to generate them on the fly by combining mergedPropsStyles and
	// currentStyles/lastIdealStyles
	function rehydrateStyles(mergedPropsStyles, unreadPropStyles, plainStyles) {
	  if (unreadPropStyles == null) {
	    // $FlowFixMe
	    return mergedPropsStyles.map(function (mergedPropsStyle, i) {
	      return {
	        key: mergedPropsStyle.key,
	        data: mergedPropsStyle.data,
	        style: plainStyles[i]
	      };
	    });
	  }
	  return mergedPropsStyles.map(function (mergedPropsStyle, i) {
	    // $FlowFixMe
	    for (var j = 0; j < unreadPropStyles.length; j++) {
	      // $FlowFixMe
	      if (unreadPropStyles[j].key === mergedPropsStyle.key) {
	        return {
	          // $FlowFixMe
	          key: unreadPropStyles[j].key,
	          data: unreadPropStyles[j].data,
	          style: plainStyles[i]
	        };
	      }
	    }
	    // $FlowFixMe
	    return { key: mergedPropsStyle.key, data: mergedPropsStyle.data, style: plainStyles[i] };
	  });
	}
	
	function shouldStopAnimationAll(currentStyles, destStyles, currentVelocities, mergedPropsStyles) {
	  if (mergedPropsStyles.length !== destStyles.length) {
	    return false;
	  }
	
	  for (var i = 0; i < mergedPropsStyles.length; i++) {
	    if (mergedPropsStyles[i].key !== destStyles[i].key) {
	      return false;
	    }
	  }
	
	  // we have the invariant that mergedPropsStyles and
	  // currentStyles/currentVelocities/last* are synced in terms of cells, see
	  // mergeAndSync comment for more info
	  for (var i = 0; i < mergedPropsStyles.length; i++) {
	    if (!_shouldStopAnimation2['default'](currentStyles[i], destStyles[i].style, currentVelocities[i])) {
	      return false;
	    }
	  }
	
	  return true;
	}
	
	// core key merging logic
	
	// things to do: say previously merged style is {a, b}, dest style (prop) is {b,
	// c}, previous current (interpolating) style is {a, b}
	// **invariant**: current[i] corresponds to merged[i] in terms of key
	
	// steps:
	// turn merged style into {a?, b, c}
	//    add c, value of c is destStyles.c
	//    maybe remove a, aka call willLeave(a), then merged is either {b, c} or {a, b, c}
	// turn current (interpolating) style from {a, b} into {a?, b, c}
	//    maybe remove a
	//    certainly add c, value of c is willEnter(c)
	// loop over merged and construct new current
	// dest doesn't change, that's owner's
	function mergeAndSync(willEnter, willLeave, oldMergedPropsStyles, destStyles, oldCurrentStyles, oldCurrentVelocities, oldLastIdealStyles, oldLastIdealVelocities) {
	  var newMergedPropsStyles = _mergeDiff2['default'](oldMergedPropsStyles, destStyles, function (oldIndex, oldMergedPropsStyle) {
	    var leavingStyle = willLeave(oldMergedPropsStyle);
	    if (leavingStyle == null) {
	      return null;
	    }
	    if (_shouldStopAnimation2['default'](oldCurrentStyles[oldIndex], leavingStyle, oldCurrentVelocities[oldIndex])) {
	      return null;
	    }
	    return { key: oldMergedPropsStyle.key, data: oldMergedPropsStyle.data, style: leavingStyle };
	  });
	
	  var newCurrentStyles = [];
	  var newCurrentVelocities = [];
	  var newLastIdealStyles = [];
	  var newLastIdealVelocities = [];
	  for (var i = 0; i < newMergedPropsStyles.length; i++) {
	    var newMergedPropsStyleCell = newMergedPropsStyles[i];
	    var foundOldIndex = null;
	    for (var j = 0; j < oldMergedPropsStyles.length; j++) {
	      if (oldMergedPropsStyles[j].key === newMergedPropsStyleCell.key) {
	        foundOldIndex = j;
	        break;
	      }
	    }
	    // TODO: key search code
	    if (foundOldIndex == null) {
	      var plainStyle = willEnter(newMergedPropsStyleCell);
	      newCurrentStyles[i] = plainStyle;
	      newLastIdealStyles[i] = plainStyle;
	
	      // $FlowFixMe
	      var velocity = _mapToZero2['default'](newMergedPropsStyleCell.style);
	      newCurrentVelocities[i] = velocity;
	      newLastIdealVelocities[i] = velocity;
	    } else {
	      newCurrentStyles[i] = oldCurrentStyles[foundOldIndex];
	      newLastIdealStyles[i] = oldLastIdealStyles[foundOldIndex];
	      newCurrentVelocities[i] = oldCurrentVelocities[foundOldIndex];
	      newLastIdealVelocities[i] = oldLastIdealVelocities[foundOldIndex];
	    }
	  }
	
	  return [newMergedPropsStyles, newCurrentStyles, newCurrentVelocities, newLastIdealStyles, newLastIdealVelocities];
	}
	
	var TransitionMotion = _react2['default'].createClass({
	  displayName: 'TransitionMotion',
	
	  propTypes: {
	    defaultStyles: _react.PropTypes.arrayOf(_react.PropTypes.shape({
	      key: _react.PropTypes.string.isRequired,
	      data: _react.PropTypes.any,
	      style: _react.PropTypes.objectOf(_react.PropTypes.number).isRequired
	    })),
	    styles: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.arrayOf(_react.PropTypes.shape({
	      key: _react.PropTypes.string.isRequired,
	      data: _react.PropTypes.any,
	      style: _react.PropTypes.objectOf(_react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.object])).isRequired
	    }))]).isRequired,
	    children: _react.PropTypes.func.isRequired,
	    willLeave: _react.PropTypes.func,
	    willEnter: _react.PropTypes.func
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      willEnter: function willEnter(styleThatEntered) {
	        return _stripStyle2['default'](styleThatEntered.style);
	      },
	      // recall: returning null makes the current unmounting TransitionStyle
	      // disappear immediately
	      willLeave: function willLeave() {
	        return null;
	      }
	    };
	  },
	
	  getInitialState: function getInitialState() {
	    var _props = this.props;
	    var defaultStyles = _props.defaultStyles;
	    var styles = _props.styles;
	    var willEnter = _props.willEnter;
	    var willLeave = _props.willLeave;
	
	    var destStyles = typeof styles === 'function' ? styles() : styles;
	
	    // this is special. for the first time around, we don't have a comparison
	    // between last (no last) and current merged props. we'll compute last so:
	    // say default is {a, b} and styles (dest style) is {b, c}, we'll
	    // fabricate last as {a, b}
	    var oldMergedPropsStyles = undefined;
	    if (defaultStyles == null) {
	      oldMergedPropsStyles = destStyles;
	    } else {
	      // $FlowFixMe
	      oldMergedPropsStyles = defaultStyles.map(function (defaultStyleCell) {
	        // TODO: key search code
	        for (var i = 0; i < destStyles.length; i++) {
	          if (destStyles[i].key === defaultStyleCell.key) {
	            return destStyles[i];
	          }
	        }
	        return defaultStyleCell;
	      });
	    }
	    var oldCurrentStyles = defaultStyles == null ? destStyles.map(function (s) {
	      return _stripStyle2['default'](s.style);
	    }) : defaultStyles.map(function (s) {
	      return _stripStyle2['default'](s.style);
	    });
	    var oldCurrentVelocities = defaultStyles == null ? destStyles.map(function (s) {
	      return _mapToZero2['default'](s.style);
	    }) : defaultStyles.map(function (s) {
	      return _mapToZero2['default'](s.style);
	    });
	
	    var _mergeAndSync = mergeAndSync(
	    // $FlowFixMe
	    willEnter,
	    // $FlowFixMe
	    willLeave, oldMergedPropsStyles, destStyles, oldCurrentStyles, oldCurrentVelocities, oldCurrentStyles, // oldLastIdealStyles really
	    oldCurrentVelocities);
	
	    var mergedPropsStyles = _mergeAndSync[0];
	    var currentStyles = _mergeAndSync[1];
	    var currentVelocities = _mergeAndSync[2];
	    var lastIdealStyles = _mergeAndSync[3];
	    var lastIdealVelocities = _mergeAndSync[4];
	    // oldLastIdealVelocities really
	
	    return {
	      currentStyles: currentStyles,
	      currentVelocities: currentVelocities,
	      lastIdealStyles: lastIdealStyles,
	      lastIdealVelocities: lastIdealVelocities,
	      mergedPropsStyles: mergedPropsStyles
	    };
	  },
	
	  animationID: null,
	  prevTime: 0,
	  accumulatedTime: 0,
	  // it's possible that currentStyle's value is stale: if props is immediately
	  // changed from 0 to 400 to spring(0) again, the async currentStyle is still
	  // at 0 (didn't have time to tick and interpolate even once). If we naively
	  // compare currentStyle with destVal it'll be 0 === 0 (no animation, stop).
	  // In reality currentStyle should be 400
	  unreadPropStyles: null,
	  // after checking for unreadPropStyles != null, we manually go set the
	  // non-interpolating values (those that are a number, without a spring
	  // config)
	  clearUnreadPropStyle: function clearUnreadPropStyle(unreadPropStyles) {
	    var _mergeAndSync2 = mergeAndSync(
	    // $FlowFixMe
	    this.props.willEnter,
	    // $FlowFixMe
	    this.props.willLeave, this.state.mergedPropsStyles, unreadPropStyles, this.state.currentStyles, this.state.currentVelocities, this.state.lastIdealStyles, this.state.lastIdealVelocities);
	
	    var mergedPropsStyles = _mergeAndSync2[0];
	    var currentStyles = _mergeAndSync2[1];
	    var currentVelocities = _mergeAndSync2[2];
	    var lastIdealStyles = _mergeAndSync2[3];
	    var lastIdealVelocities = _mergeAndSync2[4];
	
	    for (var i = 0; i < unreadPropStyles.length; i++) {
	      var unreadPropStyle = unreadPropStyles[i].style;
	      var dirty = false;
	
	      for (var key in unreadPropStyle) {
	        if (!unreadPropStyle.hasOwnProperty(key)) {
	          continue;
	        }
	
	        var styleValue = unreadPropStyle[key];
	        if (typeof styleValue === 'number') {
	          if (!dirty) {
	            dirty = true;
	            currentStyles[i] = _extends({}, currentStyles[i]);
	            currentVelocities[i] = _extends({}, currentVelocities[i]);
	            lastIdealStyles[i] = _extends({}, lastIdealStyles[i]);
	            lastIdealVelocities[i] = _extends({}, lastIdealVelocities[i]);
	            mergedPropsStyles[i] = {
	              key: mergedPropsStyles[i].key,
	              data: mergedPropsStyles[i].data,
	              style: _extends({}, mergedPropsStyles[i].style)
	            };
	          }
	          currentStyles[i][key] = styleValue;
	          currentVelocities[i][key] = 0;
	          lastIdealStyles[i][key] = styleValue;
	          lastIdealVelocities[i][key] = 0;
	          mergedPropsStyles[i].style[key] = styleValue;
	        }
	      }
	    }
	
	    // unlike the other 2 components, we can't detect staleness and optionally
	    // opt out of setState here. each style object's data might contain new
	    // stuff we're not/cannot compare
	    this.setState({
	      currentStyles: currentStyles,
	      currentVelocities: currentVelocities,
	      mergedPropsStyles: mergedPropsStyles,
	      lastIdealStyles: lastIdealStyles,
	      lastIdealVelocities: lastIdealVelocities
	    });
	  },
	
	  startAnimationIfNecessary: function startAnimationIfNecessary() {
	    var _this = this;
	
	    // TODO: when config is {a: 10} and dest is {a: 10} do we raf once and
	    // call cb? No, otherwise accidental parent rerender causes cb trigger
	    this.animationID = _raf2['default'](function () {
	      var propStyles = _this.props.styles;
	      var destStyles = typeof propStyles === 'function' ? propStyles(rehydrateStyles(_this.state.mergedPropsStyles, _this.unreadPropStyles, _this.state.lastIdealStyles)) : propStyles;
	
	      // check if we need to animate in the first place
	      if (shouldStopAnimationAll(_this.state.currentStyles, destStyles, _this.state.currentVelocities, _this.state.mergedPropsStyles)) {
	        // no need to cancel animationID here; shouldn't have any in flight
	        _this.animationID = null;
	        _this.accumulatedTime = 0;
	        return;
	      }
	
	      var currentTime = _performanceNow2['default']();
	      var timeDelta = currentTime - _this.prevTime;
	      _this.prevTime = currentTime;
	      _this.accumulatedTime = _this.accumulatedTime + timeDelta;
	      // more than 10 frames? prolly switched browser tab. Restart
	      if (_this.accumulatedTime > msPerFrame * 10) {
	        _this.accumulatedTime = 0;
	      }
	
	      if (_this.accumulatedTime === 0) {
	        // no need to cancel animationID here; shouldn't have any in flight
	        _this.animationID = null;
	        _this.startAnimationIfNecessary();
	        return;
	      }
	
	      var currentFrameCompletion = (_this.accumulatedTime - Math.floor(_this.accumulatedTime / msPerFrame) * msPerFrame) / msPerFrame;
	      var framesToCatchUp = Math.floor(_this.accumulatedTime / msPerFrame);
	
	      var _mergeAndSync3 = mergeAndSync(
	      // $FlowFixMe
	      _this.props.willEnter,
	      // $FlowFixMe
	      _this.props.willLeave, _this.state.mergedPropsStyles, destStyles, _this.state.currentStyles, _this.state.currentVelocities, _this.state.lastIdealStyles, _this.state.lastIdealVelocities);
	
	      var newMergedPropsStyles = _mergeAndSync3[0];
	      var newCurrentStyles = _mergeAndSync3[1];
	      var newCurrentVelocities = _mergeAndSync3[2];
	      var newLastIdealStyles = _mergeAndSync3[3];
	      var newLastIdealVelocities = _mergeAndSync3[4];
	
	      for (var i = 0; i < newMergedPropsStyles.length; i++) {
	        var newMergedPropsStyle = newMergedPropsStyles[i].style;
	        var newCurrentStyle = {};
	        var newCurrentVelocity = {};
	        var newLastIdealStyle = {};
	        var newLastIdealVelocity = {};
	
	        for (var key in newMergedPropsStyle) {
	          if (!newMergedPropsStyle.hasOwnProperty(key)) {
	            continue;
	          }
	
	          var styleValue = newMergedPropsStyle[key];
	          if (typeof styleValue === 'number') {
	            newCurrentStyle[key] = styleValue;
	            newCurrentVelocity[key] = 0;
	            newLastIdealStyle[key] = styleValue;
	            newLastIdealVelocity[key] = 0;
	          } else {
	            var newLastIdealStyleValue = newLastIdealStyles[i][key];
	            var newLastIdealVelocityValue = newLastIdealVelocities[i][key];
	            for (var j = 0; j < framesToCatchUp; j++) {
	              var _stepper = _stepper4['default'](msPerFrame / 1000, newLastIdealStyleValue, newLastIdealVelocityValue, styleValue.val, styleValue.stiffness, styleValue.damping, styleValue.precision);
	
	              newLastIdealStyleValue = _stepper[0];
	              newLastIdealVelocityValue = _stepper[1];
	            }
	
	            var _stepper2 = _stepper4['default'](msPerFrame / 1000, newLastIdealStyleValue, newLastIdealVelocityValue, styleValue.val, styleValue.stiffness, styleValue.damping, styleValue.precision);
	
	            var nextIdealX = _stepper2[0];
	            var nextIdealV = _stepper2[1];
	
	            newCurrentStyle[key] = newLastIdealStyleValue + (nextIdealX - newLastIdealStyleValue) * currentFrameCompletion;
	            newCurrentVelocity[key] = newLastIdealVelocityValue + (nextIdealV - newLastIdealVelocityValue) * currentFrameCompletion;
	            newLastIdealStyle[key] = newLastIdealStyleValue;
	            newLastIdealVelocity[key] = newLastIdealVelocityValue;
	          }
	        }
	
	        newLastIdealStyles[i] = newLastIdealStyle;
	        newLastIdealVelocities[i] = newLastIdealVelocity;
	        newCurrentStyles[i] = newCurrentStyle;
	        newCurrentVelocities[i] = newCurrentVelocity;
	      }
	
	      _this.animationID = null;
	      // the amount we're looped over above
	      _this.accumulatedTime -= framesToCatchUp * msPerFrame;
	
	      _this.setState({
	        currentStyles: newCurrentStyles,
	        currentVelocities: newCurrentVelocities,
	        lastIdealStyles: newLastIdealStyles,
	        lastIdealVelocities: newLastIdealVelocities,
	        mergedPropsStyles: newMergedPropsStyles
	      });
	
	      _this.unreadPropStyles = null;
	
	      _this.startAnimationIfNecessary();
	    });
	  },
	
	  componentDidMount: function componentDidMount() {
	    this.prevTime = _performanceNow2['default']();
	    this.startAnimationIfNecessary();
	  },
	
	  componentWillReceiveProps: function componentWillReceiveProps(props) {
	    if (this.unreadPropStyles) {
	      // previous props haven't had the chance to be set yet; set them here
	      this.clearUnreadPropStyle(this.unreadPropStyles);
	    }
	
	    if (typeof props.styles === 'function') {
	      // $FlowFixMe
	      this.unreadPropStyles = props.styles(rehydrateStyles(this.state.mergedPropsStyles, this.unreadPropStyles, this.state.lastIdealStyles));
	    } else {
	      this.unreadPropStyles = props.styles;
	    }
	
	    if (this.animationID == null) {
	      this.prevTime = _performanceNow2['default']();
	      this.startAnimationIfNecessary();
	    }
	  },
	
	  componentWillUnmount: function componentWillUnmount() {
	    if (this.animationID != null) {
	      _raf2['default'].cancel(this.animationID);
	      this.animationID = null;
	    }
	  },
	
	  render: function render() {
	    var hydratedStyles = rehydrateStyles(this.state.mergedPropsStyles, this.unreadPropStyles, this.state.currentStyles);
	    var renderedChildren = this.props.children(hydratedStyles);
	    return renderedChildren && _react2['default'].Children.only(renderedChildren);
	  }
	});
	
	exports['default'] = TransitionMotion;
	module.exports = exports['default'];
	
	// list of styles, each containing interpolating values. Part of what's passed
	// to children function. Notice that this is
	// Array<ActualInterpolatingStyleObject>, without the wrapper that is {key: ...,
	// data: ... style: ActualInterpolatingStyleObject}. Only mergedPropsStyles
	// contains the key & data info (so that we only have a single source of truth
	// for these, and to save space). Check the comment for `rehydrateStyles` to
	// see how we regenerate the entirety of what's passed to children function
	
	// the array that keeps track of currently rendered stuff! Including stuff
	// that you've unmounted but that's still animating. This is where it lives

/***/ },
/* 69 */
/***/ function(module, exports) {

	
	
	// core keys merging algorithm. If previous render's keys are [a, b], and the
	// next render's [c, b, d], what's the final merged keys and ordering?
	
	// - c and a must both be before b
	// - b before d
	// - ordering between a and c ambiguous
	
	// this reduces to merging two partially ordered lists (e.g. lists where not
	// every item has a definite ordering, like comparing a and c above). For the
	// ambiguous ordering we deterministically choose to place the next render's
	// item after the previous'; so c after a
	
	// this is called a topological sorting. Except the existing algorithms don't
	// work well with js bc of the amount of allocation, and isn't optimized for our
	// current use-case bc the runtime is linear in terms of edges (see wiki for
	// meaning), which is huge when two lists have many common elements
	'use strict';
	
	exports.__esModule = true;
	exports['default'] = mergeDiff;
	
	function mergeDiff(prev, next, onRemove) {
	  // bookkeeping for easier access of a key's index below. This is 2 allocations +
	  // potentially triggering chrome hash map mode for objs (so it might be faster
	
	  var prevKeyIndex = {};
	  for (var i = 0; i < prev.length; i++) {
	    prevKeyIndex[prev[i].key] = i;
	  }
	  var nextKeyIndex = {};
	  for (var i = 0; i < next.length; i++) {
	    nextKeyIndex[next[i].key] = i;
	  }
	
	  // first, an overly elaborate way of merging prev and next, eliminating
	  // duplicates (in terms of keys). If there's dupe, keep the item in next).
	  // This way of writing it saves allocations
	  var ret = [];
	  for (var i = 0; i < next.length; i++) {
	    ret[i] = next[i];
	  }
	  for (var i = 0; i < prev.length; i++) {
	    if (!nextKeyIndex.hasOwnProperty(prev[i].key)) {
	      // this is called my TM's `mergeAndSync`, which calls willLeave. We don't
	      // merge in keys that the user desires to kill
	      var fill = onRemove(i, prev[i]);
	      if (fill != null) {
	        ret.push(fill);
	      }
	    }
	  }
	
	  // now all the items all present. Core sorting logic to have the right order
	  return ret.sort(function (a, b) {
	    var nextOrderA = nextKeyIndex[a.key];
	    var nextOrderB = nextKeyIndex[b.key];
	    var prevOrderA = prevKeyIndex[a.key];
	    var prevOrderB = prevKeyIndex[b.key];
	
	    if (nextOrderA != null && nextOrderB != null) {
	      // both keys in next
	      return nextKeyIndex[a.key] - nextKeyIndex[b.key];
	    } else if (prevOrderA != null && prevOrderB != null) {
	      // both keys in prev
	      return prevKeyIndex[a.key] - prevKeyIndex[b.key];
	    } else if (nextOrderA != null) {
	      // key a in next, key b in prev
	
	      // how to determine the order between a and b? We find a "pivot" (term
	      // abuse), a key present in both prev and next, that is sandwiched between
	      // a and b. In the context of our above example, if we're comparing a and
	      // d, b's (the only) pivot
	      for (var i = 0; i < next.length; i++) {
	        var pivot = next[i].key;
	        if (!prevKeyIndex.hasOwnProperty(pivot)) {
	          continue;
	        }
	
	        if (nextOrderA < nextKeyIndex[pivot] && prevOrderB > prevKeyIndex[pivot]) {
	          return -1;
	        } else if (nextOrderA > nextKeyIndex[pivot] && prevOrderB < prevKeyIndex[pivot]) {
	          return 1;
	        }
	      }
	      // pluggable. default to: next bigger than prev
	      return 1;
	    }
	    // prevOrderA, nextOrderB
	    for (var i = 0; i < next.length; i++) {
	      var pivot = next[i].key;
	      if (!prevKeyIndex.hasOwnProperty(pivot)) {
	        continue;
	      }
	      if (nextOrderB < nextKeyIndex[pivot] && prevOrderA > prevKeyIndex[pivot]) {
	        return 1;
	      } else if (nextOrderB > nextKeyIndex[pivot] && prevOrderA < prevKeyIndex[pivot]) {
	        return -1;
	      }
	    }
	    // pluggable. default to: next bigger than prev
	    return -1;
	  });
	}
	
	module.exports = exports['default'];
	// to loop through and find a key's index each time), but I no longer care

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports['default'] = spring;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _presets = __webpack_require__(71);
	
	var _presets2 = _interopRequireDefault(_presets);
	
	var defaultConfig = _extends({}, _presets2['default'].noWobble, {
	  precision: 0.01
	});
	
	function spring(val, config) {
	  return _extends({}, defaultConfig, config, { val: val });
	}
	
	module.exports = exports['default'];

/***/ },
/* 71 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	exports["default"] = {
	  noWobble: { stiffness: 170, damping: 26 }, // the default, if nothing provided
	  gentle: { stiffness: 120, damping: 14 },
	  wobbly: { stiffness: 180, damping: 12 },
	  stiff: { stiffness: 210, damping: 20 }
	};
	module.exports = exports["default"];

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	exports['default'] = reorderKeys;
	
	var hasWarned = false;
	
	function reorderKeys() {
	  if (process.env.NODE_ENV === 'development') {
	    if (!hasWarned) {
	      hasWarned = true;
	      console.error('`reorderKeys` has been removed, since it is no longer needed for TransitionMotion\'s new styles array API.');
	    }
	  }
	}
	
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(50)))

/***/ },
/* 73 */
/***/ function(module, exports) {

	// spread values to avoid mutation
	// convert any auto values to a start of 0
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports['default'] = cloneStyles;
	
	function cloneStyles(style) {
	  var newStyle = _extends({}, style);
	
	  if (style.width === 'auto') {
	    newStyle.width = 0;
	  }
	
	  if (style.height === 'auto') {
	    newStyle.height = 0;
	  }
	
	  return newStyle;
	}
	
	module.exports = exports['default'];

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports['default'] = toRMStyles;
	
	var _reactMotion = __webpack_require__(61);
	
	function toRMStyles(styles) {
	  var rmStyles = {};
	
	  Object.keys(styles).forEach(function (key) {
	    var style = styles[key];
	    var isObject = typeof style === 'object';
	
	    // check if user passed their own config
	    // if not default to regular spring
	    rmStyles[key] = isObject ? _extends({}, style) : (0, _reactMotion.spring)(style);
	  });
	
	  return rmStyles;
	}
	
	module.exports = exports['default'];

/***/ },
/* 75 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = fromRMStyles;
	
	function fromRMStyles(config) {
	  var values = {};
	
	  Object.keys(config).forEach(function (key) {
	    var value = config[key].val;
	
	    if (!isNaN(value)) {
	      values[key] = value;
	    }
	  });
	
	  return values;
	}
	
	module.exports = exports["default"];

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var TRANSFORM = __webpack_require__(77)('transform');
	var UNIT_TRANSFORMS = ['translateX', 'translateY', 'translateZ', 'transformPerspective'];
	var DEGREE_TRANFORMS = ['rotate', 'rotateX', 'rotateY', 'rotateZ', 'skewX', 'skewY', 'scaleZ'];
	var UNITLESS_TRANSFORMS = ['scale', 'scaleX', 'scaleY'];
	var TRANSFORMS = UNIT_TRANSFORMS.concat(DEGREE_TRANFORMS, UNITLESS_TRANSFORMS);
	
	exports['default'] = function (configs) {
	  var styles = {};
	
	  Object.keys(configs).map(function (key) {
	    var isTransform = TRANSFORMS.indexOf(key) > -1;
	    var value = configs[key].toFixed(4);
	
	    if (isTransform) {
	      var transformProps = styles[TRANSFORM] || '';
	
	      if (UNIT_TRANSFORMS.indexOf(key) > -1) {
	        transformProps += key + '(' + value + 'px) ';
	      } else if (DEGREE_TRANFORMS.indexOf(key) > -1) {
	        transformProps += key + '(' + value + 'deg) ';
	      } else if (UNITLESS_TRANSFORMS.indexOf(key) > -1) {
	        transformProps += key + '(' + value + ') ';
	      }
	      styles[TRANSFORM] = transformProps;
	    } else {
	      styles[key] = value;
	    }
	  });
	
	  return styles;
	};
	
	module.exports = exports['default'];

/***/ },
/* 77 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = getPrefix;
	
	function getPrefix(prop) {
	  if (typeof document === 'undefined') return prop;
	
	  var styles = document.createElement('p').style;
	  var vendors = ['ms', 'O', 'Moz', 'Webkit'];
	
	  if (styles[prop] === '') return prop;
	
	  prop = prop.charAt(0).toUpperCase() + prop.slice(1);
	
	  for (var i = vendors.length; i--;) {
	    if (styles[vendors[i] + prop] === '') {
	      return vendors[i] + prop;
	    }
	  }
	}
	
	module.exports = exports['default'];

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactAddonsShallowCompare = __webpack_require__(79);
	
	var _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare);
	
	var _reactMeasure = __webpack_require__(82);
	
	var _reactMeasure2 = _interopRequireDefault(_reactMeasure);
	
	var TransitionChild = (function (_Component) {
	  _inherits(TransitionChild, _Component);
	
	  function TransitionChild() {
	    _classCallCheck(this, TransitionChild);
	
	    _get(Object.getPrototypeOf(TransitionChild.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _createClass(TransitionChild, [{
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps, nextState) {
	      return (0, _reactAddonsShallowCompare2['default'])(this, nextProps, nextState);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var key = _props.key;
	      var onMeasure = _props.onMeasure;
	      var child = _props.child;
	      var style = _props.style;
	      var dimensions = _props.dimensions;
	
	      return _react2['default'].createElement(_reactMeasure2['default'], {
	        key: key,
	        config: {
	          childList: true,
	          subtree: true
	        },
	        accurate: true,
	        whitelist: ['width', 'height'],
	        onMeasure: onMeasure
	      }, (0, _react.cloneElement)(child, { style: style, dimensions: dimensions }));
	    }
	  }]);
	
	  return TransitionChild;
	})(_react.Component);
	
	exports['default'] = TransitionChild;
	module.exports = exports['default'];

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(80);

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	* @providesModule shallowCompare
	*/
	
	'use strict';
	
	var shallowEqual = __webpack_require__(81);
	
	/**
	 * Does a shallow comparison for props and state.
	 * See ReactComponentWithPureRenderMixin
	 */
	function shallowCompare(instance, nextProps, nextState) {
	  return !shallowEqual(instance.props, nextProps) || !shallowEqual(instance.state, nextState);
	}
	
	module.exports = shallowCompare;

/***/ },
/* 81 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule shallowEqual
	 * @typechecks
	 * 
	 */
	
	'use strict';
	
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	
	/**
	 * Performs equality by iterating through keys on an object and returning false
	 * when any key has values which are not strictly equal between the arguments.
	 * Returns true when the values of all keys are strictly equal.
	 */
	function shallowEqual(objA, objB) {
	  if (objA === objB) {
	    return true;
	  }
	
	  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
	    return false;
	  }
	
	  var keysA = Object.keys(objA);
	  var keysB = Object.keys(objB);
	
	  if (keysA.length !== keysB.length) {
	    return false;
	  }
	
	  // Test for A's keys different from B.
	  var bHasOwnProperty = hasOwnProperty.bind(objB);
	  for (var i = 0; i < keysA.length; i++) {
	    if (!bHasOwnProperty(keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
	      return false;
	    }
	  }
	
	  return true;
	}
	
	module.exports = shallowEqual;

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _Measure = __webpack_require__(83);
	
	var _Measure2 = _interopRequireDefault(_Measure);
	
	exports['default'] = _Measure2['default'];
	module.exports = exports['default'];

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x3, _x4, _x5) { var _again = true; _function: while (_again) { var object = _x3, property = _x4, receiver = _x5; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x3 = parent; _x4 = property; _x5 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(55);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _reactAddonsShallowCompare = __webpack_require__(79);
	
	var _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare);
	
	var _ResizeHandler = __webpack_require__(84);
	
	var _ResizeHandler2 = _interopRequireDefault(_ResizeHandler);
	
	var _diffConfig = __webpack_require__(87);
	
	var _diffConfig2 = _interopRequireDefault(_diffConfig);
	
	var _getNodeDimensions = __webpack_require__(88);
	
	var _getNodeDimensions2 = _interopRequireDefault(_getNodeDimensions);
	
	var resizeHandler = new _ResizeHandler2['default']();
	
	var Measure = (function (_Component) {
	  _inherits(Measure, _Component);
	
	  function Measure() {
	    var _this = this;
	
	    _classCallCheck(this, Measure);
	
	    _get(Object.getPrototypeOf(Measure.prototype), 'constructor', this).apply(this, arguments);
	
	    this._observer = null;
	    this._node = null;
	    this._properties = this._getProperties(this.props);
	    this._lastDimensions = {};
	
	    this._measure = function (mutations) {
	      var shouldMeasure = _this.props.shouldMeasure(mutations);
	
	      // bail out if we shouldn't measure
	      if (!shouldMeasure) return;
	
	      var dimensions = _this.getDimensions(_this._node, _this.props.accurate);
	
	      // determine if we need to update our callback with new dimensions or not
	      _this._properties.some(function (prop) {
	        if (dimensions[prop] !== _this._lastDimensions[prop]) {
	          // if we've found a dimension that has changed, update our callback
	          // we also allow shouldMeasure to return any values so the end user
	          // doesn't have to recalculate anything
	          _this.props.onMeasure(dimensions, mutations, shouldMeasure);
	
	          // store last dimensions to compare changes
	          _this._lastDimensions = dimensions;
	
	          // we don't need to look any further, bail out
	          return true;
	        }
	      });
	    };
	  }
	
	  _createClass(Measure, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this._node = _reactDom2['default'].findDOMNode(this);
	
	      // set up mutation observer
	      this._connectObserver(this.props.config);
	
	      // measure on first render
	      this._measure(null);
	
	      // add component to resize handler to detect changes on resize
	      resizeHandler.add(this);
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(_ref) {
	      var config = _ref.config;
	      var whitelist = _ref.whitelist;
	      var blacklist = _ref.blacklist;
	
	      // disconnect the old observer and reconnect with new config if changed
	      if ((0, _diffConfig2['default'])(this.props.config, config)) {
	        this._disconnectObserver();
	        this._connectObserver(config);
	      }
	
	      // we store the properties ourselves so we need to update them if the
	      // whitelist or blacklist props have changed
	      if (this.props.whitelist !== whitelist || this.props.blacklist !== blacklist) {
	        this._properties = this._getProperties({ whitelist: whitelist, blacklist: blacklist });
	      }
	    }
	  }, {
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps, nextState) {
	      return (0, _reactAddonsShallowCompare2['default'])(this, nextProps, nextState);
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this._disconnectObserver();
	      resizeHandler.remove(this);
	    }
	  }, {
	    key: 'getDimensions',
	    value: function getDimensions() {
	      var node = arguments.length <= 0 || arguments[0] === undefined ? this._node : arguments[0];
	      var accurate = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];
	
	      return (0, _getNodeDimensions2['default'])(node, accurate);
	    }
	  }, {
	    key: '_connectObserver',
	    value: function _connectObserver(config) {
	      this._observer = new MutationObserver(this._measure);
	      this._observer.observe(this._node, config);
	    }
	  }, {
	    key: '_disconnectObserver',
	    value: function _disconnectObserver() {
	      this._observer.disconnect();
	    }
	  }, {
	    key: '_getProperties',
	    value: function _getProperties(_ref2) {
	      var whitelist = _ref2.whitelist;
	      var blacklist = _ref2.blacklist;
	
	      return whitelist.filter(function (prop) {
	        return blacklist.indexOf(prop) < 0;
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react.Children.only(this.props.children);
	    }
	  }], [{
	    key: 'propTypes',
	    value: {
	      config: _react.PropTypes.object,
	      accurate: _react.PropTypes.bool,
	      whitelist: _react.PropTypes.array,
	      blacklist: _react.PropTypes.array,
	      shouldMeasure: _react.PropTypes.func,
	      onMeasure: _react.PropTypes.func
	    },
	    enumerable: true
	  }, {
	    key: 'defaultProps',
	    value: {
	      config: {
	        childList: true,
	        attributes: true
	      },
	      accurate: false,
	      whitelist: ['width', 'height', 'top', 'right', 'bottom', 'left'],
	      blacklist: [],
	      shouldMeasure: function shouldMeasure() {
	        return true;
	      },
	      onMeasure: function onMeasure() {
	        return null;
	      }
	    },
	    enumerable: true
	  }]);
	
	  return Measure;
	})(_react.Component);
	
	exports['default'] = Measure;
	module.exports = exports['default'];

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _lodashDebounce = __webpack_require__(85);
	
	var _lodashDebounce2 = _interopRequireDefault(_lodashDebounce);
	
	var ResizeHandler = (function () {
	  function ResizeHandler() {
	    _classCallCheck(this, ResizeHandler);
	
	    this._queue = [];
	    this.update = (0, _lodashDebounce2['default'])(this.update.bind(this), 150);
	    if (typeof window !== 'undefined') {
	      window.addEventListener('resize', this.update);
	    }
	  }
	
	  _createClass(ResizeHandler, [{
	    key: 'destroy',
	    value: function destroy() {
	      if (typeof window !== 'undefined') {
	        window.removeEventListener('resize', this.update);
	      }
	    }
	  }, {
	    key: 'add',
	    value: function add(component) {
	      this._queue.push(component);
	    }
	  }, {
	    key: 'remove',
	    value: function remove(component) {
	      var pos = this._queue.indexOf(component);
	      if (pos > -1) {
	        this._queue.splice(pos, 1);
	      }
	    }
	  }, {
	    key: 'update',
	    value: function update() {
	      for (var i = this._queue.length; i--;) {
	        this._queue[i]._measure();
	      }
	    }
	  }]);
	
	  return ResizeHandler;
	})();
	
	exports['default'] = ResizeHandler;
	module.exports = exports['default'];

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * lodash 3.1.1 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	var getNative = __webpack_require__(86);
	
	/** Used as the `TypeError` message for "Functions" methods. */
	var FUNC_ERROR_TEXT = 'Expected a function';
	
	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max,
	    nativeNow = getNative(Date, 'now');
	
	/**
	 * Gets the number of milliseconds that have elapsed since the Unix epoch
	 * (1 January 1970 00:00:00 UTC).
	 *
	 * @static
	 * @memberOf _
	 * @category Date
	 * @example
	 *
	 * _.defer(function(stamp) {
	 *   console.log(_.now() - stamp);
	 * }, _.now());
	 * // => logs the number of milliseconds it took for the deferred function to be invoked
	 */
	var now = nativeNow || function() {
	  return new Date().getTime();
	};
	
	/**
	 * Creates a debounced function that delays invoking `func` until after `wait`
	 * milliseconds have elapsed since the last time the debounced function was
	 * invoked. The debounced function comes with a `cancel` method to cancel
	 * delayed invocations. Provide an options object to indicate that `func`
	 * should be invoked on the leading and/or trailing edge of the `wait` timeout.
	 * Subsequent calls to the debounced function return the result of the last
	 * `func` invocation.
	 *
	 * **Note:** If `leading` and `trailing` options are `true`, `func` is invoked
	 * on the trailing edge of the timeout only if the the debounced function is
	 * invoked more than once during the `wait` timeout.
	 *
	 * See [David Corbacho's article](http://drupalmotion.com/article/debounce-and-throttle-visual-explanation)
	 * for details over the differences between `_.debounce` and `_.throttle`.
	 *
	 * @static
	 * @memberOf _
	 * @category Function
	 * @param {Function} func The function to debounce.
	 * @param {number} [wait=0] The number of milliseconds to delay.
	 * @param {Object} [options] The options object.
	 * @param {boolean} [options.leading=false] Specify invoking on the leading
	 *  edge of the timeout.
	 * @param {number} [options.maxWait] The maximum time `func` is allowed to be
	 *  delayed before it is invoked.
	 * @param {boolean} [options.trailing=true] Specify invoking on the trailing
	 *  edge of the timeout.
	 * @returns {Function} Returns the new debounced function.
	 * @example
	 *
	 * // avoid costly calculations while the window size is in flux
	 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
	 *
	 * // invoke `sendMail` when the click event is fired, debouncing subsequent calls
	 * jQuery('#postbox').on('click', _.debounce(sendMail, 300, {
	 *   'leading': true,
	 *   'trailing': false
	 * }));
	 *
	 * // ensure `batchLog` is invoked once after 1 second of debounced calls
	 * var source = new EventSource('/stream');
	 * jQuery(source).on('message', _.debounce(batchLog, 250, {
	 *   'maxWait': 1000
	 * }));
	 *
	 * // cancel a debounced call
	 * var todoChanges = _.debounce(batchLog, 1000);
	 * Object.observe(models.todo, todoChanges);
	 *
	 * Object.observe(models, function(changes) {
	 *   if (_.find(changes, { 'user': 'todo', 'type': 'delete'})) {
	 *     todoChanges.cancel();
	 *   }
	 * }, ['delete']);
	 *
	 * // ...at some point `models.todo` is changed
	 * models.todo.completed = true;
	 *
	 * // ...before 1 second has passed `models.todo` is deleted
	 * // which cancels the debounced `todoChanges` call
	 * delete models.todo;
	 */
	function debounce(func, wait, options) {
	  var args,
	      maxTimeoutId,
	      result,
	      stamp,
	      thisArg,
	      timeoutId,
	      trailingCall,
	      lastCalled = 0,
	      maxWait = false,
	      trailing = true;
	
	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  wait = wait < 0 ? 0 : (+wait || 0);
	  if (options === true) {
	    var leading = true;
	    trailing = false;
	  } else if (isObject(options)) {
	    leading = !!options.leading;
	    maxWait = 'maxWait' in options && nativeMax(+options.maxWait || 0, wait);
	    trailing = 'trailing' in options ? !!options.trailing : trailing;
	  }
	
	  function cancel() {
	    if (timeoutId) {
	      clearTimeout(timeoutId);
	    }
	    if (maxTimeoutId) {
	      clearTimeout(maxTimeoutId);
	    }
	    lastCalled = 0;
	    maxTimeoutId = timeoutId = trailingCall = undefined;
	  }
	
	  function complete(isCalled, id) {
	    if (id) {
	      clearTimeout(id);
	    }
	    maxTimeoutId = timeoutId = trailingCall = undefined;
	    if (isCalled) {
	      lastCalled = now();
	      result = func.apply(thisArg, args);
	      if (!timeoutId && !maxTimeoutId) {
	        args = thisArg = undefined;
	      }
	    }
	  }
	
	  function delayed() {
	    var remaining = wait - (now() - stamp);
	    if (remaining <= 0 || remaining > wait) {
	      complete(trailingCall, maxTimeoutId);
	    } else {
	      timeoutId = setTimeout(delayed, remaining);
	    }
	  }
	
	  function maxDelayed() {
	    complete(trailing, timeoutId);
	  }
	
	  function debounced() {
	    args = arguments;
	    stamp = now();
	    thisArg = this;
	    trailingCall = trailing && (timeoutId || !leading);
	
	    if (maxWait === false) {
	      var leadingCall = leading && !timeoutId;
	    } else {
	      if (!maxTimeoutId && !leading) {
	        lastCalled = stamp;
	      }
	      var remaining = maxWait - (stamp - lastCalled),
	          isCalled = remaining <= 0 || remaining > maxWait;
	
	      if (isCalled) {
	        if (maxTimeoutId) {
	          maxTimeoutId = clearTimeout(maxTimeoutId);
	        }
	        lastCalled = stamp;
	        result = func.apply(thisArg, args);
	      }
	      else if (!maxTimeoutId) {
	        maxTimeoutId = setTimeout(maxDelayed, remaining);
	      }
	    }
	    if (isCalled && timeoutId) {
	      timeoutId = clearTimeout(timeoutId);
	    }
	    else if (!timeoutId && wait !== maxWait) {
	      timeoutId = setTimeout(delayed, wait);
	    }
	    if (leadingCall) {
	      isCalled = true;
	      result = func.apply(thisArg, args);
	    }
	    if (isCalled && !timeoutId && !maxTimeoutId) {
	      args = thisArg = undefined;
	    }
	    return result;
	  }
	  debounced.cancel = cancel;
	  return debounced;
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
	
	module.exports = debounce;


/***/ },
/* 86 */
/***/ function(module, exports) {

	/**
	 * lodash 3.9.1 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	
	/** `Object#toString` result references. */
	var funcTag = '[object Function]';
	
	/** Used to detect host constructors (Safari > 5). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;
	
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
	var reIsNative = RegExp('^' +
	  fnToString.call(hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);
	
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
	  // and Safari 8 equivalents which return 'object' for typed array constructors.
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
	
	module.exports = getNative;


/***/ },
/* 87 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = diffConfig;
	var CONFIG_SHAPE = ['childList', 'attributes', 'characterData', 'subtree', 'attributeOldValue', 'characterDataOldValue', 'attributeFilter'];
	
	function diffConfig(prev, next) {
	  for (var i = 7; i--;) {
	    var config = CONFIG_SHAPE[i];
	    var prevConfig = prev[config];
	    var nextConfig = next[config];
	
	    // if equal continue to the next
	    if (prevConfig === nextConfig) {
	      continue;
	    }
	
	    var prevUndefined = typeof prevConfig === 'undefined';
	    var nextUndefined = typeof nextConfig === 'undefined';
	
	    // if attributeFilter, we know it needs to be a simple array,
	    // so comparing lengths should be enough to know if it has changed
	    if (prevUndefined && !nextUndefined || !prevUndefined && nextUndefined || config === 'attributeFilter' && prevConfig.length !== nextConfig.length) {
	      return true;
	    }
	  }
	  return false;
	}
	
	module.exports = exports['default'];

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = getNodeDimensions;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _accurateHeight = __webpack_require__(89);
	
	var _accurateHeight2 = _interopRequireDefault(_accurateHeight);
	
	function getNodeDimensions(node) {
	  var accurate = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];
	
	  var rect = node.getBoundingClientRect();
	
	  return {
	    width: rect.width,
	    height: accurate ? (0, _accurateHeight2['default'])(node) : rect.height,
	    top: rect.top,
	    right: rect.right,
	    bottom: rect.bottom,
	    left: rect.left
	  };
	}
	
	module.exports = exports['default'];

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = accurateHeight;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _dataStore = __webpack_require__(90);
	
	var _dataStore2 = _interopRequireDefault(_dataStore);
	
	var _getCloneHeight = __webpack_require__(91);
	
	var _getCloneHeight2 = _interopRequireDefault(_getCloneHeight);
	
	function getStyle(node) {
	  return (0, _dataStore2['default'])(node, 'style') || (0, _dataStore2['default'])(node, 'style', getComputedStyle(node));
	}
	
	// inspired by http://stackoverflow.com/a/8235013/1461204
	
	function accurateHeight(node) {
	  var children = node.children;
	
	  var amount = children.length;
	
	  // if no children present on the node we need to clone to get a true height
	  if (amount === 0) {
	    return (0, _getCloneHeight2['default'])(node);
	  }
	
	  var firstChild = children[0];
	  var lastChild = children[amount - 1];
	
	  var _getStyle = getStyle(firstChild);
	
	  var marginTop = _getStyle.marginTop;
	
	  var _getStyle2 = getStyle(lastChild);
	
	  var marginBottom = _getStyle2.marginBottom;
	
	  var offsetDiff = lastChild.offsetTop - firstChild.offsetTop;
	
	  return parseInt(marginTop) + (offsetDiff + lastChild.offsetHeight) + parseInt(marginBottom);
	}
	
	module.exports = exports['default'];

/***/ },
/* 90 */
/***/ function(module, exports) {

	// inspired by https://github.com/julianshapiro/velocity/blob/master/velocity.js
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = dataStore;
	var expando = 'react-measure' + new Date().getTime();
	var cache = {};
	var uuid = 0;
	
	function dataStore(node, key, value) {
	  if (value === undefined) {
	    var id = node[expando];
	    var store = id && cache[id];
	
	    if (key === undefined) {
	      return store;
	    } else if (store) {
	      if (key in store) {
	        return store[key];
	      }
	    }
	  } else if (key !== undefined) {
	    var id = node[expando] || (node[expando] = ++uuid);
	
	    cache[id] = cache[id] || {};
	    cache[id][key] = value;
	
	    return value;
	  }
	}
	
	module.exports = exports['default'];

/***/ },
/* 91 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = getCloneHeight;
	
	function getCloneHeight(node) {
	  var parentNode = node.parentNode;
	
	  var context = document.createElement('div');
	  var clone = node.cloneNode(true);
	  var height = 0;
	
	  // give the node some context to measure off of
	  // height and overflow prevent scrollbars from node copy
	  context.style.height = 0;
	  context.style.position = 'relative';
	  context.style.overflow = 'hidden';
	
	  // clean up any attributes that might cause a conflict
	  clone.setAttribute('id', '');
	  clone.setAttribute('name', '');
	  clone.setAttribute('data-reactid', '');
	
	  // set props to hide copy and get a true height calculation
	  clone.style.boxSizing = 'border-box';
	  clone.style.height = 'auto';
	  clone.style.position = 'absolute';
	  clone.style.visibility = 'hidden';
	
	  // append copy to context
	  context.appendChild(clone);
	
	  // append context to DOM so we can measure
	  parentNode.appendChild(context);
	
	  // get height
	  height = clone.scrollHeight;
	
	  // destroy clone
	  parentNode.removeChild(context);
	
	  return height;
	}
	
	module.exports = exports['default'];

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _elementType = __webpack_require__(93);
	
	var _elementType2 = _interopRequireDefault(_elementType);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Need component to pass into react-docgen
	 */
	/**
	 * Default prop types
	 */
	
	var DefaultProps = function DefaultProps() {
	  return _react2.default.createElement('noscript', null);
	};
	
	DefaultProps.propTypes = {
	  /**
	   * Children nodes
	   */
	  children: _react2.default.PropTypes.node,
	  /**
	   * Use other component for composing results: <DropdownMenu component={Button}>
	   */
	  component: _elementType2.default,
	  /**
	   * Apply default semantic UI classes for component, for example ui button
	   */
	  defaultClasses: _react2.default.PropTypes.bool,
	  /**
	   * Additional CSS ui classes
	   */
	  className: _react2.default.PropTypes.string
	};
	
	DefaultProps.defaultProps = {
	  component: 'div',
	  defaultClasses: true
	};
	
	exports.default = DefaultProps;

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _common = __webpack_require__(94);
	
	/**
	 * Checks whether a prop provides a type of element.
	 *
	 * The type of element can be provided in two forms:
	 * - tag name (string)
	 * - a return value of React.createClass(...)
	 *
	 * @param props
	 * @param propName
	 * @param componentName
	 * @returns {Error|undefined}
	 */
	
	function validate(props, propName, componentName) {
	  var errBeginning = _common.errMsg(props, propName, componentName, '. Expected an Element `type`');
	
	  if (typeof props[propName] !== 'function') {
	    if (_react2['default'].isValidElement(props[propName])) {
	      return new Error(errBeginning + ', not an actual Element');
	    }
	
	    if (typeof props[propName] !== 'string') {
	      return new Error(errBeginning + ' such as a tag name or return value of React.createClass(...)');
	    }
	  }
	}
	
	exports['default'] = _common.createChainableTypeChecker(validate);
	module.exports = exports['default'];

/***/ },
/* 94 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports.errMsg = errMsg;
	exports.createChainableTypeChecker = createChainableTypeChecker;
	
	function errMsg(props, propName, componentName, msgContinuation) {
	  return 'Invalid prop \'' + propName + '\' of value \'' + props[propName] + '\'' + (' supplied to \'' + componentName + '\'' + msgContinuation);
	}
	
	/**
	 * Create chain-able isRequired validator
	 *
	 * Largely copied directly from:
	 *  https://github.com/facebook/react/blob/0.11-stable/src/core/ReactPropTypes.js#L94
	 */
	
	function createChainableTypeChecker(validate) {
	  function checkType(isRequired, props, propName, componentName) {
	    componentName = componentName || '<<anonymous>>';
	    if (props[propName] == null) {
	      if (isRequired) {
	        return new Error('Required prop \'' + propName + '\' was not specified in \'' + componentName + '\'.');
	      }
	    } else {
	      return validate(props, propName, componentName);
	    }
	  }
	
	  var chainedCheckType = checkType.bind(null, false);
	  chainedCheckType.isRequired = checkType.bind(null, true);
	
	  return chainedCheckType;
	}

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(5);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _defaultProps = __webpack_require__(92);
	
	var _defaultProps2 = _interopRequireDefault(_defaultProps);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	/**
	 * Defines dimmable section
	 */
	var Dimmable = function Dimmable(_ref) {
	    var component = _ref.component;
	    var dimmed = _ref.dimmed;
	    var blurring = _ref.blurring;
	
	    var other = _objectWithoutProperties(_ref, ['component', 'dimmed', 'blurring']);
	
	    var classes = {
	        dimmable: other.defaultClasses,
	        dimmed: dimmed,
	        blurring: blurring
	    };
	
	    other.className = (0, _classnames2.default)(other.className, classes);
	    var Component = component;
	    return _react2.default.createElement(Component, other);
	};
	
	Dimmable.propTypes = _extends({}, _defaultProps2.default.propTypes, {
	    /**
	     * Blur dimmer
	     */
	    blurring: _react2.default.PropTypes.bool,
	    /**
	     * Add dimmed class to dimmable. This could be omitted and you can instead set overflow: hidden instead
	     */
	    dimmed: _react2.default.PropTypes.bool
	});
	
	Dimmable.defaultProps = _extends({}, _defaultProps2.default.defaultProps, {
	    dimmed: false,
	    blurring: false
	});
	
	exports.default = Dimmable;

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _class, _temp;
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(5);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _utilities = __webpack_require__(4);
	
	var _defaultProps = __webpack_require__(92);
	
	var _defaultProps2 = _interopRequireDefault(_defaultProps);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var validProps = {
	    pointing: ['left', 'right', 'top left', 'top right', 'bottom left', 'bottom right']
	};
	
	/**
	 * Dropdown element. Base for Select and DropdownMenu.
	 */
	var DropdownElement = (_temp = _class = function (_React$Component) {
	    _inherits(DropdownElement, _React$Component);
	
	    function DropdownElement() {
	        _classCallCheck(this, DropdownElement);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(DropdownElement).apply(this, arguments));
	    }
	
	    _createClass(DropdownElement, [{
	        key: 'getChildContext',
	        value: function getChildContext() {
	            return {
	                isDropdownChild: true
	            };
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            /* eslint-disable no-use-before-define */
	            var _props = this.props;
	            var component = _props.component;
	            var children = _props.children;
	            var defaultClasses = _props.defaultClasses;
	            var compact = _props.compact;
	            var disabled = _props.disabled;
	            var error = _props.error;
	            var loading = _props.loading;
	            var fluid = _props.fluid;
	            var inline = _props.inline;
	            var floating = _props.floating;
	            var pointing = _props.pointing;
	            var scrolling = _props.scrolling;
	
	            var other = _objectWithoutProperties(_props, ['component', 'children', 'defaultClasses', 'compact', 'disabled', 'error', 'loading', 'fluid', 'inline', 'floating', 'pointing', 'scrolling']);
	            /* eslint-enable no-use-before-define */
	
	            other.className = (0, _classnames2.default)(other.className, this.getClasses());
	
	            var Component = component;
	
	            return _react2.default.createElement(
	                Component,
	                other,
	                children
	            );
	        }
	    }, {
	        key: 'getClasses',
	        value: function getClasses() {
	            var classes = {
	                ui: this.props.defaultClasses,
	                dropdown: this.props.defaultClasses,
	
	                active: this.props.active,
	                compact: this.props.compact,
	                disabled: this.props.disabled,
	                error: this.props.error,
	                loading: this.props.loading,
	                fluid: this.props.fluid,
	                floating: this.props.floating,
	                inline: this.props.inline,
	                pointing: this.props.pointing,
	                scrolling: this.props.scrolling
	            };
	
	            return (0, _utilities.validateClassProps)(classes, this.props, validProps);
	        }
	    }]);
	
	    return DropdownElement;
	}(_react2.default.Component), _class.propTypes = _extends({}, _defaultProps2.default.propTypes, {
	    /**
	     * Indicates status of dropdown. true for opened, false for closed
	     */
	    active: _react2.default.PropTypes.bool,
	    /**
	     * A compact dropdown has no minimum width
	     */
	    compact: _react2.default.PropTypes.bool,
	    /**
	     * A disabled dropdown menu or item does not allow user interaction
	     */
	    disabled: _react2.default.PropTypes.bool,
	    /**
	     * An errored dropdown can alert a user to a problem
	     */
	    error: _react2.default.PropTypes.bool,
	    /**
	     * A dropdown can take the full width of its parent
	     */
	    fluid: _react2.default.PropTypes.bool,
	    /**
	     * A dropdown can be formatted to appear inline in other content
	     */
	    inline: _react2.default.PropTypes.bool,
	    /**
	     * A dropdown menu can appear to be floating below an element.
	     */
	    floating: _react2.default.PropTypes.bool,
	    /**
	     * A dropdown can show that it is currently loading data
	     */
	    loading: _react2.default.PropTypes.bool,
	    /**
	     * A dropdown can be formatted so that its menu is pointing
	     */
	    pointing: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.bool, _react2.default.PropTypes.oneOf(['left', 'right', 'top left', 'top right', 'bottom left', 'bottom right'])]),
	    /**
	     * A dropdown can have its menu scroll
	     */
	    scrolling: _react2.default.PropTypes.bool
	}), _class.childContextTypes = {
	    isDropdownChild: _react2.default.PropTypes.bool
	}, _class.defaultProps = _extends({}, _defaultProps2.default.defaultProps, {
	    active: false
	}), _temp);
	exports.default = DropdownElement;

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _class, _temp;
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(55);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _classnames = __webpack_require__(5);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _lodash = __webpack_require__(98);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _reactEventListener = __webpack_require__(100);
	
	var _reactEventListener2 = _interopRequireDefault(_reactEventListener);
	
	var _reactMotionUiPack = __webpack_require__(59);
	
	var _reactMotionUiPack2 = _interopRequireDefault(_reactMotionUiPack);
	
	var _dropdownelement = __webpack_require__(96);
	
	var _dropdownelement2 = _interopRequireDefault(_dropdownelement);
	
	var _elements = __webpack_require__(1);
	
	var _views = __webpack_require__(101);
	
	var _utilities = __webpack_require__(4);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * Select is the dropdown where options could be selected, either single or multiple.
	 * Also supports search
	 */
	var Select = (_temp = _class = function (_React$Component) {
	    _inherits(Select, _React$Component);
	
	    function Select(props) {
	        _classCallCheck(this, Select);
	
	        /**
	         * Menu reference
	         */
	
	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Select).call(this, props));
	
	        _this.onDropdownClick = function (e) {
	            e.stopPropagation();
	            e.preventDefault();
	            if (!_this.state.active) {
	                _this.setState({
	                    active: true
	                });
	                // we don't want to close dropdown for multiple or search with dropdown search position dropdowns
	            } else if (!_this.props.multiple && !(_this.props.search && _this.props.searchPosition === 'dropdown')) {
	                    _this.setState({
	                        active: false
	                    });
	                }
	        };
	
	        _this.onOutsideDropdownClick = function (event) {
	            if (!_this.state.active) {
	                return;
	            }
	            var menuElement = _reactDom2.default.findDOMNode(_this);
	            if (menuElement) {
	                if (!(0, _utilities.isNodeInRoot)(event.target, menuElement)) {
	                    // need to reset value manually
	                    if (_this.searchRef && !_this.props.multiple) {
	                        _this.searchRef.value = '';
	                    }
	                    _this.setState({
	                        active: false,
	                        // clean search string for single selections too
	                        searchString: _this.props.multiple ? _this.state.searchString : ''
	                    });
	                }
	            }
	        };
	
	        _this.onMenuItemClick = function (value) {
	            if (_this.state.selected.indexOf(value) === -1) {
	                var newState = {};
	                if (_this.props.multiple) {
	                    // Append value for multiple
	                    newState = {
	                        selected: [].concat(_toConsumableArray(_this.state.selected), [value])
	                    };
	                } else {
	                    // replace for single
	                    newState = {
	                        selected: [value]
	                    };
	                }
	
	                // Intelligently handle multiple select here:
	                // Do not close if selecting and there are more than 1 element left in menu
	                // Set focus to search box if searchable
	                // Close if menu has only 1 element
	                if (_this.props.multiple && _this.menuRef) {
	                    var optionsCount = _react2.default.Children.count(_this.menuRef.props.children);
	                    if (optionsCount <= 1) {
	                        // Can close menu here
	                        newState.active = false;
	                        // also clean search string here
	                        newState.searchString = '';
	                        if (_this.searchRef) {
	                            _this.searchRef.value = '';
	                        }
	                    } else {
	                        // we have few more elements here, put focus if searchable
	                        /* eslint-disable no-lonely-if */
	                        if (_this.props.search && _this.searchRef) {
	                            _this.searchRef.focus();
	                        }
	                        /* eslint-enable no-lonely-if */
	                    }
	                } else {
	                        // Non multiple select or ref is not available?
	                        newState.active = false;
	                        // always clean searchstring for single selection dropdowns
	                        newState.searchString = '';
	                        if (_this.searchRef) {
	                            _this.searchRef.value = '';
	                        }
	                    }
	                _this.setState(newState);
	                _this.props.onSelectChange(newState.selected);
	            }
	        };
	
	        _this.onSearchInputChange = function () {};
	
	        _this.onSearchInputKeyUp = function (event) {
	            switch (event.which) {
	                // Enter
	                case 13:
	                    // only do something if we have search results available and not displaying not results message
	                    if (_this.menuRef && !_this.noResultsMessageRef && _react2.default.Children.count(_this.menuRef.props.children) > 0) {
	                        // get the first children
	                        var child = _react2.default.Children.toArray(_this.menuRef.props.children)[0];
	                        if (child && child.props.value) {
	                            // enter should do the same as menu item click
	                            _this.onMenuItemClick(child.props.value);
	                            // but clean search box additionally
	                            if (_this.searchRef) {
	                                _this.searchRef.value = '';
	                            }
	                            _this.setState({
	                                searchString: ''
	                            });
	                        }
	                    }
	                    break;
	                // Backspace
	                case 8:
	                    if (_this.state.searchString === '') {
	                        if (_this.props.multiple && _this.state.selected.length > 0) {
	                            _this.setState({
	                                selected: [].concat(_toConsumableArray(_this.state.selected.slice(0, -1)))
	                            });
	                        }
	                    } else if (_this.searchRef) {
	                        _this.setState({
	                            searchString: _this.searchRef.value
	                        });
	                    }
	                    break;
	                default:
	                    if (_this.searchRef) {
	                        _this.setState({
	                            searchString: _this.searchRef.value
	                        });
	                    }
	            }
	        };
	
	        _this.menuRef = null;
	        _this.searchRef = null;
	        _this.noResultsMessageRef = null;
	
	        _this.state = {
	            active: props.active,
	            selected: [],
	            searchString: ''
	        };
	        return _this;
	    }
	
	    _createClass(Select, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            if (this.props.search && this.searchRef && this.state.active) {
	                this.searchRef.focus();
	            }
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            if (nextProps.active && this.state.active !== nextProps.active) {
	                this.setState({
	                    active: nextProps.active
	                });
	            }
	        }
	    }, {
	        key: 'componentDidUpdate',
	        value: function componentDidUpdate() {
	            if (this.props.search && this.searchRef && this.state.active) {
	                this.searchRef.focus();
	            }
	        }
	
	        /**
	         * Handler for clicking on dropdown
	         */
	
	
	        /**
	         * Handler for outside click
	         */
	
	
	        /**
	         * Handler for menu item click
	         * @param value
	         */
	
	    }, {
	        key: 'onLabelCloseIconClick',
	
	
	        /**
	         * Handler for close label click
	         * @param value
	         */
	        value: function onLabelCloseIconClick(value) {
	            var index = this.state.selected.indexOf(value);
	            if (index !== -1) {
	                this.setState({
	                    selected: [].concat(_toConsumableArray(this.state.selected.filter(function (val) {
	                        return val !== value;
	                    })))
	                });
	            }
	        }
	
	        /**
	         * Handler for search input change
	         */
	
	
	        /**
	         * Handler for search input key events
	         * @param {React.KeyboardEvent} event
	         */
	
	    }, {
	        key: 'renderDropdownInput',
	
	
	        /**
	         * Renders dropdown hidden input 
	         */
	        value: function renderDropdownInput() {
	            var name = this.props.name;
	
	            var value = this.state.selected.join(',');
	            return _react2.default.createElement('input', { name: name,
	                type: 'hidden',
	                value: value });
	        }
	
	        /**
	         * Renders dropdown labels for multiple type dropdowns
	         */
	
	    }, {
	        key: 'renderDropdownLabels',
	        value: function renderDropdownLabels() {
	            var _this2 = this;
	
	            // Selection labels should appear only for multiple dropdowns
	            if (!this.props.multiple) {
	                return null;
	            }
	
	            return _react2.default.Children.map(this.props.children, function (child) {
	                // Process only option or option like childs and if it's selected
	                if (child.props.value && _this2.state.selected.indexOf(child.props.value) !== -1) {
	                    return _react2.default.createElement(
	                        _reactMotionUiPack2.default,
	                        { component: false,
	                            enter: { scale: 1 },
	                            leave: { scale: 0 }
	                        },
	                        _react2.default.createElement(
	                            _elements.Label,
	                            { component: 'a',
	                                key: 'label-' + child.props.value,
	                                style: { display: 'inline-block' }
	                            },
	                            child.props.children,
	                            _react2.default.createElement(_elements.Icon, { name: 'close',
	                                onClick: _this2.onLabelCloseIconClick.bind(_this2, child.props.value) })
	                        )
	                    );
	                }
	            });
	        }
	
	        /**
	         * Render dropdown placeholder text
	         */
	
	    }, {
	        key: 'renderDropdownText',
	        value: function renderDropdownText() {
	            var _this3 = this;
	
	            var _props = this.props;
	            var placeholder = _props.placeholder;
	            var search = _props.search;
	            var searchPosition = _props.searchPosition;
	            var selection = _props.selection;
	            // Render placeholder if not selected
	
	            if (this.state.selected.length === 0) {
	                if (typeof placeholder !== 'undefined') {
	                    // Selection type should use default text, non selection text
	                    return _react2.default.createElement(
	                        'div',
	                        { className: this.props.selection ? 'default text' : 'text' },
	                        placeholder
	                    );
	                } else {
	                    return null;
	                }
	            } else {
	                // Need to render children content in text here if not multiple otherwise render placeholder anyway
	                /* eslint-disable no-lonely-if */
	                if (this.props.multiple) {
	                    return _react2.default.createElement(
	                        'div',
	                        { className: this.props.selection ? 'default text' : 'text' },
	                        placeholder
	                    );
	                } else {
	                    var content = _react2.default.createElement('div', { className: 'text filtered' });
	                    if (!search || this.state.searchString === '') {
	                        // traverse in childs, find necessary node
	                        _react2.default.Children.forEach(this.props.children, function (child) {
	                            if (child.props.value && _this3.state.selected.indexOf(child.props.value) !== -1) {
	                                content = _react2.default.createElement(
	                                    'div',
	                                    { className: 'text' },
	                                    child.props.children
	                                );
	                            }
	                        });
	                    }
	                    return content;
	                }
	                /* eslint-enable no-lonely-if */
	            }
	        }
	
	        /**
	         * Renders dropdown icon
	         */
	
	    }, {
	        key: 'renderDropdownIcon',
	        value: function renderDropdownIcon() {
	            var icon = this.props.icon;
	
	            return _react2.default.createElement(_elements.Icon, { name: icon });
	        }
	
	        /**
	         * Renders search input
	         */
	
	    }, {
	        key: 'renderSearchInput',
	        value: function renderSearchInput() {
	            var _this4 = this;
	
	            // Do not render if not searchable
	            if (!this.props.search) {
	                return null;
	            }
	
	            var searchWidth = this.props.searchGlyphWidth * this.state.searchString.length;
	            // single selection dropdown shouldn't apply width style
	            var style = searchWidth && this.props.searchPosition === 'dropdown' && this.props.multiple ? { width: searchWidth + 'em' } : {};
	            if (this.props.searchPosition === 'dropdown') {
	                return _react2.default.createElement('input', { autoComplete: 'off',
	                    className: 'search',
	                    key: 'searchInput',
	                    onKeyUp: (0, _lodash2.default)(this.onSearchInputKeyUp, 150),
	                    ref: function ref(_ref) {
	                        return _this4.searchRef = _ref;
	                    },
	                    style: style,
	                    tabIndex: 0 });
	            } else {
	                // Search in menu has slightly different layout
	                return _react2.default.createElement(
	                    'div',
	                    { className: 'ui icon search input' },
	                    _react2.default.createElement(_elements.Icon, { name: 'search' }),
	                    _react2.default.createElement('input', { placeholder: 'Search...',
	                        onKeyUp: (0, _lodash2.default)(this.onSearchInputKeyUp, 150),
	                        ref: function ref(_ref2) {
	                            return _this4.searchRef = _ref2;
	                        },
	                        tabIndex: 0,
	                        type: 'text' })
	                );
	            }
	        }
	
	        /**
	         * Renders search header if specified
	         */
	
	    }, {
	        key: 'renderSearchHeader',
	        value: function renderSearchHeader() {
	            var _props2 = this.props;
	            var search = _props2.search;
	            var searchHeader = _props2.searchHeader;
	
	            if (search && searchHeader) {
	                return _react2.default.createElement(
	                    _elements.Header,
	                    { key: 'searchHeader' },
	                    searchHeader
	                );
	            } else {
	                return null;
	            }
	        }
	
	        /**
	         * Filters children options to exclude selected elements or elements which doesn't match to search
	         */
	
	    }, {
	        key: 'renderFilteredChildren',
	        value: function renderFilteredChildren() {
	            var selected = this.state.selected;
	            var _props3 = this.props;
	            var search = _props3.search;
	            var searchIgnoreCase = _props3.searchIgnoreCase;
	            var multiple = _props3.multiple;
	
	            var searchString = this.state.searchString;
	            var searchRegex = new RegExp(searchString, searchIgnoreCase ? 'gi' : 'g');
	
	            var newChildren = [];
	            _react2.default.Children.forEach(this.props.children, function (child) {
	                // only process option like childs
	                if (child.props.value) {
	                    var match = true;
	                    if (search && searchString !== '') {
	                        // value could be int or string. In case of int convert it to string
	                        var value = typeof child.props.value === 'number' ? Number.parseInt(child.props.value) : child.props.value;
	                        match = searchRegex.test(value) || searchRegex.test(child.props.children);
	                    }
	
	                    // Match for non search selection will be always true
	                    if (match) {
	                        // For multiple type render only non selected options
	                        if (multiple && selected.indexOf(child.props.value) === -1) {
	                            newChildren.push(_react2.default.cloneElement(child, {
	                                key: child.key ? child.key : child.props.value,
	                                // need to pass menu value, otherwise menu will not bind handler
	                                menuValue: child.props.value
	                            }));
	                        } else if (!multiple) {
	                            // for single selection render all options but add selected value
	                            newChildren.push(_react2.default.cloneElement(child, {
	                                active: selected.indexOf(child.props.value) !== -1,
	                                key: child.key ? child.key : child.props.value,
	                                // need to pass menu value, otherwise menu will not bind handler
	                                menuValue: child.props.value
	                            }));
	                        }
	                    }
	                } else if (searchString === '') {
	                    // need to pass non option like childs, but only if search string is empty
	                    newChildren.push(_react2.default.cloneElement(child, {
	                        key: child.key ? child.key : child.props.value
	                    }));
	                }
	            });
	            return newChildren;
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this5 = this;
	
	            var _props4 = this.props;
	            var children = _props4.children;
	            var enterAnimation = _props4.enterAnimation;
	            var leaveAnimation = _props4.leaveAnimation;
	            var icon = _props4.icon;
	            var name = _props4.name;
	            var search = _props4.search;
	            var searchPosition = _props4.searchPosition;
	            var searchHeader = _props4.searchHeader;
	            var searchNoResultsMessage = _props4.searchNoResultsMessage;
	
	            var other = _objectWithoutProperties(_props4, ['children', 'enterAnimation', 'leaveAnimation', 'icon', 'name', 'search', 'searchPosition', 'searchHeader', 'searchNoResultsMessage']);
	
	            // make new array for menu childrens
	
	
	            var menuChildrens = [];
	            // render search and header in menu
	            if (search && searchPosition === 'menu') {
	                if (searchHeader) {
	                    menuChildrens.push(this.renderSearchHeader());
	                }
	                menuChildrens.push(this.renderSearchInput());
	            }
	
	            var filteredChilds = this.renderFilteredChildren();
	            // Display no results message instead of children if needed
	            if ((!filteredChilds || filteredChilds.length === 0) && search && this.state.searchString != '') {
	                filteredChilds = [_react2.default.createElement(
	                    'div',
	                    { className: 'message',
	                        key: 'noResultsMessage',
	                        ref: function ref(_ref3) {
	                            return _this5.noResultsMessageRef = _ref3;
	                        }
	                    },
	                    searchNoResultsMessage
	                )]; // eslint-disable-line
	            }
	
	            menuChildrens = menuChildrens.concat(filteredChilds);
	
	            other.className = (0, _classnames2.default)(other.className, this.getClasses());
	
	            return _react2.default.createElement(
	                _dropdownelement2.default,
	                _extends({}, other, {
	                    onClick: this.onDropdownClick,
	                    active: this.state.active
	                }),
	                _react2.default.createElement(_reactEventListener2.default, { elementName: 'document',
	                    onMouseDown: this.onOutsideDropdownClick,
	                    onTouchStart: this.onOutsideDropdownClick }),
	                this.renderDropdownInput(),
	                this.renderDropdownLabels(),
	                this.renderDropdownText(),
	                this.renderDropdownIcon(),
	                search && searchPosition === 'dropdown' && this.renderSearchInput(),
	                _react2.default.createElement(
	                    _reactMotionUiPack2.default,
	                    {
	                        component: false,
	                        enter: enterAnimation,
	                        leave: leaveAnimation
	                    },
	                    this.state.active && _react2.default.createElement(
	                        _views.Menu,
	                        { key: 'menu',
	                            onMenuItemClick: this.onMenuItemClick,
	                            ref: function ref(_ref4) {
	                                return _this5.menuRef = _ref4;
	                            },
	                            style: { overflow: 'hidden' }
	                        },
	                        menuChildrens
	                    )
	                )
	            );
	        }
	    }, {
	        key: 'getClasses',
	        value: function getClasses() {
	            return {
	                search: this.props.search,
	                selection: this.props.selection,
	                multiple: this.props.multiple
	            };
	        }
	    }]);
	
	    return Select;
	}(_react2.default.Component), _class.propTypes = _extends({}, _dropdownelement2.default.propTypes, {
	    /**
	     * Should be dropdown opened
	     */
	    active: _react2.default.PropTypes.bool,
	    /**
	     * Enter animation
	     */
	    enterAnimation: _react2.default.PropTypes.object,
	    /**
	     * Leave animation
	     */
	    leaveAnimation: _react2.default.PropTypes.object,
	    /**
	     * Name for dropdown input
	     */
	    name: _react2.default.PropTypes.string,
	    /**
	     * Icon name for dropdown
	     */
	    icon: _react2.default.PropTypes.string,
	    /**
	     * String used as placeholder if dropdown has no selected value
	     * Will be grayed (<div class="default text">) if dropdown is selection 
	     * or normally displayed (<div class="text">) otherwise
	     */
	    placeholder: _react2.default.PropTypes.string,
	    /**
	     * Searchable dropdown
	     */
	    search: _react2.default.PropTypes.bool,
	    /**
	     * Search glyph width
	     */
	    searchGlyphWidth: _react2.default.PropTypes.number,
	    /**
	     * Ignore case when performing search
	     */
	    searchIgnoreCase: _react2.default.PropTypes.bool,
	    /**
	     * Search box position
	     */
	    searchPosition: _react2.default.PropTypes.oneOf(['dropdown', 'menu']),
	    /**
	     * Search header, valid only for searchPosition="menu"
	     */
	    searchHeader: _react2.default.PropTypes.string,
	    /**
	     * Specify message which will be displayed when search has no results
	     */
	    searchNoResultsMessage: _react2.default.PropTypes.string,
	    /**
	     * Behave dropdown as HTML select
	     */
	    selection: _react2.default.PropTypes.bool,
	    /**
	     * Allow multiple selection
	     */
	    multiple: _react2.default.PropTypes.bool,
	    /**
	     * Callback will be called when current selected value was changed. Will pass array of selected values
	     */
	    onSelectChange: _react2.default.PropTypes.func
	}), _class.defaultProps = _extends({}, _dropdownelement2.default.defaultProps, {
	    active: false,
	    icon: 'dropdown',
	    search: false,
	    searchGlyphWidth: 1.0714,
	    searchPosition: 'dropdown',
	    searchIgnoreCase: true,
	    searchNoResultsMessage: 'No Results found.',
	    selection: true,
	    multiple: false,
	    enterAnimation: {
	        height: 'auto'
	    },
	    leaveAnimation: {
	        height: 0
	    },
	    onSelectChange: function onSelectChange() {}
	}), _temp);
	exports.default = Select;

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * lodash 4.0.1 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright 2012-2016 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	var debounce = __webpack_require__(99);
	
	/** Used as the `TypeError` message for "Functions" methods. */
	var FUNC_ERROR_TEXT = 'Expected a function';
	
	/**
	 * Creates a throttled function that only invokes `func` at most once per
	 * every `wait` milliseconds. The throttled function comes with a `cancel`
	 * method to cancel delayed `func` invocations and a `flush` method to
	 * immediately invoke them. Provide an options object to indicate whether
	 * `func` should be invoked on the leading and/or trailing edge of the `wait`
	 * timeout. The `func` is invoked with the last arguments provided to the
	 * throttled function. Subsequent calls to the throttled function return the
	 * result of the last `func` invocation.
	 *
	 * **Note:** If `leading` and `trailing` options are `true`, `func` is invoked
	 * on the trailing edge of the timeout only if the throttled function is
	 * invoked more than once during the `wait` timeout.
	 *
	 * See [David Corbacho's article](http://drupalmotion.com/article/debounce-and-throttle-visual-explanation)
	 * for details over the differences between `_.throttle` and `_.debounce`.
	 *
	 * @static
	 * @memberOf _
	 * @category Function
	 * @param {Function} func The function to throttle.
	 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
	 * @param {Object} [options] The options object.
	 * @param {boolean} [options.leading=true] Specify invoking on the leading
	 *  edge of the timeout.
	 * @param {boolean} [options.trailing=true] Specify invoking on the trailing
	 *  edge of the timeout.
	 * @returns {Function} Returns the new throttled function.
	 * @example
	 *
	 * // Avoid excessively updating the position while scrolling.
	 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
	 *
	 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
	 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
	 * jQuery(element).on('click', throttled);
	 *
	 * // Cancel the trailing throttled invocation.
	 * jQuery(window).on('popstate', throttled.cancel);
	 */
	function throttle(func, wait, options) {
	  var leading = true,
	      trailing = true;
	
	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  if (isObject(options)) {
	    leading = 'leading' in options ? !!options.leading : leading;
	    trailing = 'trailing' in options ? !!options.trailing : trailing;
	  }
	  return debounce(func, wait, {
	    'leading': leading,
	    'maxWait': wait,
	    'trailing': trailing
	  });
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
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}
	
	module.exports = throttle;


/***/ },
/* 99 */
/***/ function(module, exports) {

	/**
	 * lodash 4.0.3 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright 2012-2016 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	
	/** Used as the `TypeError` message for "Functions" methods. */
	var FUNC_ERROR_TEXT = 'Expected a function';
	
	/** Used as references for various `Number` constants. */
	var NAN = 0 / 0;
	
	/** `Object#toString` result references. */
	var funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]';
	
	/** Used to match leading and trailing whitespace. */
	var reTrim = /^\s+|\s+$/g;
	
	/** Used to detect bad signed hexadecimal string values. */
	var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
	
	/** Used to detect binary string values. */
	var reIsBinary = /^0b[01]+$/i;
	
	/** Used to detect octal string values. */
	var reIsOctal = /^0o[0-7]+$/i;
	
	/** Built-in method references without a dependency on `root`. */
	var freeParseInt = parseInt;
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;
	
	/**
	 * Gets the timestamp of the number of milliseconds that have elapsed since
	 * the Unix epoch (1 January 1970 00:00:00 UTC).
	 *
	 * @static
	 * @memberOf _
	 * @type {Function}
	 * @category Date
	 * @returns {number} Returns the timestamp.
	 * @example
	 *
	 * _.defer(function(stamp) {
	 *   console.log(_.now() - stamp);
	 * }, _.now());
	 * // => logs the number of milliseconds it took for the deferred function to be invoked
	 */
	var now = Date.now;
	
	/**
	 * Creates a debounced function that delays invoking `func` until after `wait`
	 * milliseconds have elapsed since the last time the debounced function was
	 * invoked. The debounced function comes with a `cancel` method to cancel
	 * delayed `func` invocations and a `flush` method to immediately invoke them.
	 * Provide an options object to indicate whether `func` should be invoked on
	 * the leading and/or trailing edge of the `wait` timeout. The `func` is invoked
	 * with the last arguments provided to the debounced function. Subsequent calls
	 * to the debounced function return the result of the last `func` invocation.
	 *
	 * **Note:** If `leading` and `trailing` options are `true`, `func` is invoked
	 * on the trailing edge of the timeout only if the debounced function is
	 * invoked more than once during the `wait` timeout.
	 *
	 * See [David Corbacho's article](http://drupalmotion.com/article/debounce-and-throttle-visual-explanation)
	 * for details over the differences between `_.debounce` and `_.throttle`.
	 *
	 * @static
	 * @memberOf _
	 * @category Function
	 * @param {Function} func The function to debounce.
	 * @param {number} [wait=0] The number of milliseconds to delay.
	 * @param {Object} [options] The options object.
	 * @param {boolean} [options.leading=false] Specify invoking on the leading
	 *  edge of the timeout.
	 * @param {number} [options.maxWait] The maximum time `func` is allowed to be
	 *  delayed before it's invoked.
	 * @param {boolean} [options.trailing=true] Specify invoking on the trailing
	 *  edge of the timeout.
	 * @returns {Function} Returns the new debounced function.
	 * @example
	 *
	 * // Avoid costly calculations while the window size is in flux.
	 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
	 *
	 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
	 * jQuery(element).on('click', _.debounce(sendMail, 300, {
	 *   'leading': true,
	 *   'trailing': false
	 * }));
	 *
	 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
	 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
	 * var source = new EventSource('/stream');
	 * jQuery(source).on('message', debounced);
	 *
	 * // Cancel the trailing debounced invocation.
	 * jQuery(window).on('popstate', debounced.cancel);
	 */
	function debounce(func, wait, options) {
	  var args,
	      maxTimeoutId,
	      result,
	      stamp,
	      thisArg,
	      timeoutId,
	      trailingCall,
	      lastCalled = 0,
	      leading = false,
	      maxWait = false,
	      trailing = true;
	
	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  wait = toNumber(wait) || 0;
	  if (isObject(options)) {
	    leading = !!options.leading;
	    maxWait = 'maxWait' in options && nativeMax(toNumber(options.maxWait) || 0, wait);
	    trailing = 'trailing' in options ? !!options.trailing : trailing;
	  }
	
	  function cancel() {
	    if (timeoutId) {
	      clearTimeout(timeoutId);
	    }
	    if (maxTimeoutId) {
	      clearTimeout(maxTimeoutId);
	    }
	    lastCalled = 0;
	    args = maxTimeoutId = thisArg = timeoutId = trailingCall = undefined;
	  }
	
	  function complete(isCalled, id) {
	    if (id) {
	      clearTimeout(id);
	    }
	    maxTimeoutId = timeoutId = trailingCall = undefined;
	    if (isCalled) {
	      lastCalled = now();
	      result = func.apply(thisArg, args);
	      if (!timeoutId && !maxTimeoutId) {
	        args = thisArg = undefined;
	      }
	    }
	  }
	
	  function delayed() {
	    var remaining = wait - (now() - stamp);
	    if (remaining <= 0 || remaining > wait) {
	      complete(trailingCall, maxTimeoutId);
	    } else {
	      timeoutId = setTimeout(delayed, remaining);
	    }
	  }
	
	  function flush() {
	    if ((timeoutId && trailingCall) || (maxTimeoutId && trailing)) {
	      result = func.apply(thisArg, args);
	    }
	    cancel();
	    return result;
	  }
	
	  function maxDelayed() {
	    complete(trailing, timeoutId);
	  }
	
	  function debounced() {
	    args = arguments;
	    stamp = now();
	    thisArg = this;
	    trailingCall = trailing && (timeoutId || !leading);
	
	    if (maxWait === false) {
	      var leadingCall = leading && !timeoutId;
	    } else {
	      if (!lastCalled && !maxTimeoutId && !leading) {
	        lastCalled = stamp;
	      }
	      var remaining = maxWait - (stamp - lastCalled);
	
	      var isCalled = (remaining <= 0 || remaining > maxWait) &&
	        (leading || maxTimeoutId);
	
	      if (isCalled) {
	        if (maxTimeoutId) {
	          maxTimeoutId = clearTimeout(maxTimeoutId);
	        }
	        lastCalled = stamp;
	        result = func.apply(thisArg, args);
	      }
	      else if (!maxTimeoutId) {
	        maxTimeoutId = setTimeout(maxDelayed, remaining);
	      }
	    }
	    if (isCalled && timeoutId) {
	      timeoutId = clearTimeout(timeoutId);
	    }
	    else if (!timeoutId && wait !== maxWait) {
	      timeoutId = setTimeout(delayed, wait);
	    }
	    if (leadingCall) {
	      isCalled = true;
	      result = func.apply(thisArg, args);
	    }
	    if (isCalled && !timeoutId && !maxTimeoutId) {
	      args = thisArg = undefined;
	    }
	    return result;
	  }
	  debounced.cancel = cancel;
	  debounced.flush = flush;
	  return debounced;
	}
	
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
	  // in Safari 8 which returns 'object' for typed array constructors, and
	  // PhantomJS 1.9 which returns 'function' for `NodeList` instances.
	  var tag = isObject(value) ? objectToString.call(value) : '';
	  return tag == funcTag || tag == genTag;
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
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}
	
	/**
	 * Converts `value` to a number.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to process.
	 * @returns {number} Returns the number.
	 * @example
	 *
	 * _.toNumber(3);
	 * // => 3
	 *
	 * _.toNumber(Number.MIN_VALUE);
	 * // => 5e-324
	 *
	 * _.toNumber(Infinity);
	 * // => Infinity
	 *
	 * _.toNumber('3');
	 * // => 3
	 */
	function toNumber(value) {
	  if (isObject(value)) {
	    var other = isFunction(value.valueOf) ? value.valueOf() : value;
	    value = isObject(other) ? (other + '') : other;
	  }
	  if (typeof value != 'string') {
	    return value === 0 ? value : +value;
	  }
	  value = value.replace(reTrim, '');
	  var isBinary = reIsBinary.test(value);
	  return (isBinary || reIsOctal.test(value))
	    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
	    : (reIsBadHex.test(value) ? NAN : +value);
	}
	
	module.exports = debounce;


/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function on(element, type, callback) {
	  if (element.addEventListener) {
	    element.addEventListener(type, callback);
	  } else {
	    // IE8+ Support
	    element.attachEvent('on' + type, function () {
	      callback.call(element);
	    });
	  }
	}
	
	function off(element, type, callback) {
	  if (element.removeEventListener) {
	    element.removeEventListener(type, callback);
	  } else {
	    // IE8+ Support
	    element.detachEvent('on' + type, callback);
	  }
	}
	
	function listenersForEach(props, callback) {
	  var elementName = props.elementName;
	
	  var other = _objectWithoutProperties(props, ['elementName']);
	
	  var element = window[elementName];
	
	  for (var eventIdentifier in other) {
	    var eventName = eventIdentifier.substring(2).toLowerCase();
	
	    callback(element, eventName, other[eventIdentifier]);
	  }
	}
	
	var EventListener = function (_React$Component) {
	  _inherits(EventListener, _React$Component);
	
	  function EventListener(props) {
	    _classCallCheck(this, EventListener);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(EventListener).call(this, props));
	  }
	
	  _createClass(EventListener, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      listenersForEach(this.props, function (element, eventName, callback) {
	        on(element, eventName, callback);
	      });
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      listenersForEach(this.props, function (element, eventName, callback) {
	        off(element, eventName, callback);
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return null;
	    }
	  }]);
	
	  return EventListener;
	}(_react2.default.Component);
	
	EventListener.propTypes = {
	  /**
	   * Name of the element that we will be listening to.
	   */
	  elementName: _react2.default.PropTypes.string
	};
	exports.default = EventListener;

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _card = __webpack_require__(102);
	
	Object.defineProperty(exports, 'Card', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_card).default;
	  }
	});
	
	var _cards = __webpack_require__(103);
	
	Object.defineProperty(exports, 'Cards', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_cards).default;
	  }
	});
	
	var _menu = __webpack_require__(104);
	
	Object.defineProperty(exports, 'Menu', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_menu).default;
	  }
	});
	
	var _menuitem = __webpack_require__(105);
	
	Object.defineProperty(exports, 'MenuItem', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_menuitem).default;
	  }
	});
	
	var _comments = __webpack_require__(107);
	
	Object.defineProperty(exports, 'Comments', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_comments).default;
	  }
	});
	
	var _comment = __webpack_require__(108);
	
	Object.defineProperty(exports, 'Comment', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_comment).default;
	  }
	});
	
	var _feed = __webpack_require__(109);
	
	Object.defineProperty(exports, 'Feed', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_feed).default;
	  }
	});
	
	var _event = __webpack_require__(110);
	
	Object.defineProperty(exports, 'Event', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_event).default;
	  }
	});
	
	var _item = __webpack_require__(106);
	
	Object.defineProperty(exports, 'Item', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_item).default;
	  }
	});
	
	var _items = __webpack_require__(111);
	
	Object.defineProperty(exports, 'Items', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_items).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _class, _temp;
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(5);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Card = (_temp = _class = function (_React$Component) {
	    _inherits(Card, _React$Component);
	
	    function Card(props) {
	        _classCallCheck(this, Card);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Card).call(this, props));
	    }
	
	    _createClass(Card, [{
	        key: 'getChildContext',
	        value: function getChildContext() {
	            return {
	                isCardChild: true
	            };
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            /* eslint-disable no-use-before-define */
	            var _props = this.props;
	            var centered = _props.centered;
	            var col = _props.col;
	            var color = _props.color;
	            var doubling = _props.doubling;
	            var defaultClasses = _props.defaultClasses;
	            var fluid = _props.fluid;
	
	            var other = _objectWithoutProperties(_props, ['centered', 'col', 'color', 'doubling', 'defaultClasses', 'fluid']);
	            /* eslint-enable no-use-before-define */
	
	            other.className = (0, _classnames2.default)(this.props.className, this.getClasses());
	
	            return _react2.default.createElement(this.props.component, other, this.props.children);
	        }
	    }, {
	        key: 'getClasses',
	        value: function getClasses() {
	            var classes = {
	                // default
	                ui: this.props.defaultClasses && !this.context.isChildCard,
	
	                // component
	                card: this.props.defaultClasses,
	
	                // variations
	                centered: this.props.centered,
	                doubling: this.props.doubling,
	                color: this.props.color,
	                fluid: this.props.fluid,
	                link: this.props.link || this.props.onClick
	            };
	
	            classes[this.props.color] = !!this.props.color;
	            classes[this.props.col] = !!this.props.col;
	            classes[this.props.doubling] = !!this.props.doubling;
	
	            return classes;
	        }
	    }]);
	
	    return Card;
	}(_react2.default.Component), _class.propTypes = {
	    centered: _react2.default.PropTypes.bool,
	    children: _react2.default.PropTypes.node,
	    className: _react2.default.PropTypes.node,
	    col: _react2.default.PropTypes.string,
	    color: _react2.default.PropTypes.string,
	    component: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.element, _react2.default.PropTypes.string]),
	    defaultClasses: _react2.default.PropTypes.bool,
	    doubling: _react2.default.PropTypes.string,
	    fluid: _react2.default.PropTypes.bool,
	    link: _react2.default.PropTypes.bool,
	    onClick: _react2.default.PropTypes.func
	}, _class.contextTypes = {
	    isCardChild: _react2.default.PropTypes.bool
	}, _class.childContextTypes = {
	    isCardChild: _react2.default.PropTypes.bool
	}, _class.defaultProps = {
	    component: 'div',
	    defaultClasses: true
	}, _temp);
	exports.default = Card;

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _class, _temp;
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(5);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Cards = (_temp = _class = function (_React$Component) {
	    _inherits(Cards, _React$Component);
	
	    function Cards(props) {
	        _classCallCheck(this, Cards);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Cards).call(this, props));
	    }
	
	    _createClass(Cards, [{
	        key: 'getChildContext',
	        value: function getChildContext() {
	            return {
	                isCardsChild: true
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
	
	            /* eslint-disable no-use-before-define */
	            var _props = this.props;
	            var component = _props.component;
	            var defaultClasses = _props.defaultClasses;
	            var children = _props.children;
	            var link = _props.link;
	
	            var other = _objectWithoutProperties(_props, ['component', 'defaultClasses', 'children', 'link']);
	            /* eslint-enable no-use-before-define */
	
	            var Component = component;
	            other.className = (0, _classnames2.default)(other.className, classes);
	
	            return _react2.default.createElement(
	                Component,
	                other,
	                children
	            );
	        }
	    }]);
	
	    return Cards;
	}(_react2.default.Component), _class.propTypes = {
	    children: _react2.default.PropTypes.node,
	    className: _react2.default.PropTypes.node,
	    defaultClasses: _react2.default.PropTypes.bool,
	    link: _react2.default.PropTypes.bool,
	    onClick: _react2.default.PropTypes.func
	}, _class.childContextTypes = {
	    isCardsChild: _react2.default.PropTypes.bool
	}, _class.defaultProps = {
	    component: 'div',
	    defaultClasses: true
	}, _temp);
	exports.default = Cards;

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _class, _temp;
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _utilities = __webpack_require__(4);
	
	var _classnames = __webpack_require__(5);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _defaultProps = __webpack_require__(92);
	
	var _defaultProps2 = _interopRequireDefault(_defaultProps);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var validProps = {
	    attached: ['top', 'bottom'],
	    fitted: ['horizontally', 'vertically']
	};
	
	/**
	 * Menu. Could be simple or controlled. Controlled menu will be activated by providing value property and will manage
	 * current active item and fire onChange callback when value was changed
	 */
	var Menu = (_temp = _class = function (_React$Component) {
	    _inherits(Menu, _React$Component);
	
	    function Menu(props) {
	        _classCallCheck(this, Menu);
	
	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Menu).call(this, props));
	
	        _this.state = {
	            activeItem: props.menuValue
	        };
	        return _this;
	    }
	
	    _createClass(Menu, [{
	        key: 'getChildContext',
	        value: function getChildContext() {
	            return {
	                isMenuChild: true
	            };
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            if (nextProps.menuValue) {
	                this.setState({
	                    activeItem: nextProps.menuValue
	                });
	            }
	        }
	    }, {
	        key: 'onMenuItemClick',
	        value: function onMenuItemClick(value, event) {
	            event.stopPropagation();
	            event.preventDefault();
	
	            this.props.onMenuItemClick(value);
	            if (typeof this.props.menuValue !== 'undefined' && this.state.activeItem !== value) {
	                this.setState({
	                    activeItem: value
	                });
	                this.props.onMenuChange(value);
	            }
	        }
	    }, {
	        key: 'renderChildren',
	        value: function renderChildren() {
	            var _this2 = this;
	
	            // If this is not controlled menu and not dropdown child do not do anything with childs
	            if (typeof this.props.menuValue === 'undefined' && !this.context.isDropdownChild) {
	                return this.props.children;
	            }
	
	            // should deep traverse?
	            var newChildren = _react2.default.Children.map(this.props.children, function (child) {
	                // Process if a child has menuValue property
	                if (typeof child.props.menuValue !== 'undefined') {
	                    return _react2.default.cloneElement(child, {
	                        // If child has active property, then pass it
	                        active: typeof child.props.active !== 'undefined' ? child.props.active : _this2.state.activeItem === child.props.menuValue,
	                        key: child.props.menuValue,
	                        onClick: _this2.onMenuItemClick.bind(_this2, child.props.menuValue)
	                    });
	                } else {
	                    // Menu could contain non items, for example divider, pass it untouched (only add key)
	                    return _react2.default.cloneElement(child, {
	                        key: typeof child.key !== 'undefined' ? child.key : child.props.children
	                    });
	                }
	            });
	
	            return newChildren;
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            /* eslint-disable no-use-before-define */
	            var _props = this.props;
	            var attached = _props.attached;
	            var borderless = _props.borderless;
	            var component = _props.component;
	            var even = _props.even;
	            var fitted = _props.fitted;
	            var fixed = _props.fixed;
	            var fluid = _props.fluid;
	            var inverted = _props.inverted;
	            var pagination = _props.pagination;
	            var pointing = _props.pointing;
	            var right = _props.right;
	            var secondary = _props.secondary;
	            var tabular = _props.tabular;
	            var text = _props.text;
	            var menuValue = _props.menuValue;
	            var vertical = _props.vertical;
	
	            var other = _objectWithoutProperties(_props, ['attached', 'borderless', 'component', 'even', 'fitted', 'fixed', 'fluid', 'inverted', 'pagination', 'pointing', 'right', 'secondary', 'tabular', 'text', 'menuValue', 'vertical']);
	            /* eslint-enable no-use-before-define */
	
	            other.className = (0, _classnames2.default)(this.props.className, this.getClasses());
	
	            if (this.props.component == Menu) {
	                component = 'div';
	            } else {
	                component = this.props.component;
	            }
	
	            var children = this.renderChildren();
	
	            return _react2.default.createElement(component, other, children);
	        }
	    }, {
	        key: 'getClasses',
	        value: function getClasses() {
	            var childCount = _react2.default.Children.count(this.props.children);
	
	            var classes = {
	                // default
	                ui: this.props.defaultClasses && !this.context.isMenuChild && !this.context.isDropdownChild,
	
	                // numbers
	
	                // position
	                right: this.props.right,
	                top: false,
	                bottom: false,
	
	                // variations
	                item: this.props.even && childCount > 0,
	                borderless: this.props.borderless,
	                attached: this.props.attached,
	                inverted: this.props.inverted,
	                pagination: this.props.pagination,
	                pointing: this.props.pointing,
	                secondary: this.props.secondary,
	                tabular: this.props.tabular,
	                vertical: this.props.vertical,
	                fluid: this.props.fluid,
	                fixed: this.props.fixed,
	                fitted: this.props.fitted,
	                text: this.props.text,
	
	                // dropdown
	                visible: this.context.isDropdownChild,
	                transition: this.context.isDropdownChild,
	
	                // component
	                menu: this.props.defaultClasses
	            };
	
	            if (this.props.even && childCount > 0) {
	                if (childCount > 0 && childCount <= 12) {
	                    classes[_utilities.Numbers[childCount]] = true;
	                }
	            }
	
	            return (0, _utilities.validateClassProps)(classes, this.props, validProps);
	        }
	    }]);
	
	    return Menu;
	}(_react2.default.Component), _class.propTypes = _extends({}, _defaultProps2.default.propTypes, {
	    /**
	     * A menu may be attached to other content segments
	     */
	    attached: _react2.default.PropTypes.oneOf(['top', 'bottom']),
	    /**
	     * A menu item or menu can have no borders
	     */
	    borderless: _react2.default.PropTypes.bool,
	    /**
	     * Use equal width for menu items
	     */
	    even: _react2.default.PropTypes.bool,
	    /**
	     * A menu item or menu can remove element padding, vertically or horizontally
	     */
	    fitted: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.bool, _react2.default.PropTypes.oneOf(['horizontally', 'vertically'])]),
	    /**
	     * A menu can be fixed to a side of its context
	     */
	    fixed: _react2.default.PropTypes.bool,
	    /**
	     * A vertical menu may take the size of its container. (A horizontal menu does this by default) 
	     */
	    fluid: _react2.default.PropTypes.bool,
	    /**
	     * A menu may have its colors inverted to show greater contrast
	     */
	    inverted: _react2.default.PropTypes.bool,
	    /**
	     * Menu active value
	     */
	    menuValue: _react2.default.PropTypes.any,
	    /**
	     * Callback for active item change. It will not fire if clicking at already active item
	     */
	    onMenuChange: _react2.default.PropTypes.func,
	    /**
	     * Callback for menu item click (regardless active or not active)
	     */
	    onMenuItemClick: _react2.default.PropTypes.func,
	    /**
	     * A pagination menu is specially formatted to present links to pages of content 
	     */
	    pagination: _react2.default.PropTypes.bool,
	    /**
	     * A menu can point to show its relationship to nearby content
	     */
	    pointing: _react2.default.PropTypes.bool,
	    /**
	     * A menu can be formatted to float right
	     */
	    right: _react2.default.PropTypes.bool,
	    /**
	     * A menu can adjust its appearance to de-emphasize its contents
	     */
	    secondary: _react2.default.PropTypes.bool,
	    /**
	     * A menu can be formatted to show tabs of information
	     */
	    tabular: _react2.default.PropTypes.bool,
	    /**
	     * A menu can be formatted for text content
	     */
	    text: _react2.default.PropTypes.bool,
	    /**
	     * A vertical menu displays elements vertically..
	     */
	    vertical: _react2.default.PropTypes.bool
	}), _class.contextTypes = {
	    isMenuChild: _react2.default.PropTypes.bool,
	    isDropdownChild: _react2.default.PropTypes.bool
	}, _class.childContextTypes = {
	    isMenuChild: _react2.default.PropTypes.bool
	}, _class.defaultProps = _extends({}, _defaultProps2.default.defaultProps, {
	    onMenuItemClick: function onMenuItemClick() {},
	    onMenuChange: function onMenuChange() {}
	}), _temp);
	exports.default = Menu;

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(5);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _item = __webpack_require__(106);
	
	var _item2 = _interopRequireDefault(_item);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	/**
	 * Menu/Dropdown item
	 */
	var MenuItem = function MenuItem(_ref) {
	    var active = _ref.active;
	    var color = _ref.color;
	    var menuValue = _ref.menuValue;
	
	    var other = _objectWithoutProperties(_ref, ['active', 'color', 'menuValue']);
	
	    var classes = {
	        active: active
	    };
	    if (color) {
	        classes[color] = !!color;
	    }
	    other.className = (0, _classnames2.default)(other.className, classes);
	
	    return _react2.default.createElement(_item2.default, _extends({}, other, {
	        'data-value': menuValue,
	        link: true }));
	};
	
	MenuItem.propTypes = _extends({}, _item2.default.propTypes, {
	    /**
	     * Is item active
	     */
	    active: _react2.default.PropTypes.bool,
	    /**
	     * Item color
	     */
	    color: _react2.default.PropTypes.string,
	    /**
	     * Item value (used in controlled menu)
	     */
	    menuValue: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.number, _react2.default.PropTypes.string])
	});
	
	MenuItem.defaultProps = _extends({}, _item2.default.defaultProps);
	
	exports.default = MenuItem;

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _class, _temp;
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(5);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _defaultProps = __webpack_require__(92);
	
	var _defaultProps2 = _interopRequireDefault(_defaultProps);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * Item is collection of elements. It could be menu/dropdown item or part ofr <Items /> collection
	 */
	var Item = (_temp = _class = function (_React$Component) {
	    _inherits(Item, _React$Component);
	
	    function Item() {
	        _classCallCheck(this, Item);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Item).apply(this, arguments));
	    }
	
	    _createClass(Item, [{
	        key: 'render',
	        value: function render() {
	            /* eslint-disable no-use-before-define */
	            var _props = this.props;
	            var component = _props.component;
	            var link = _props.link;
	
	            var other = _objectWithoutProperties(_props, ['component', 'link']);
	            /* eslint-enable no-use-before-define */
	
	            other.className = (0, _classnames2.default)(this.props.className, this.getClasses());
	
	            return _react2.default.createElement(component, other, this.props.children);
	        }
	    }, {
	        key: 'getClasses',
	        value: function getClasses() {
	            return {
	                link: this.props.link || this.props.onClick,
	                // component
	                item: this.props.defaultClasses
	            };
	        }
	    }]);
	
	    return Item;
	}(_react2.default.Component), _class.propTypes = _extends({}, _defaultProps2.default.propTypes, {
	    /**
	     * Make item clickable
	     */
	    link: _react2.default.PropTypes.bool,
	    /**
	     * Item click handler
	     */
	    onClick: _react2.default.PropTypes.func
	}), _class.defaultProps = _extends({}, _defaultProps2.default.defaultProps), _temp);
	exports.default = Item;

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(5);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function getClasses(props) {
	    var classes = {
	        ui: props.defaultClasses,
	
	        collapsed: props.collapsed,
	        minimal: props.minimal,
	        threaded: props.threaded,
	
	        comments: props.defaultClasses
	    };
	
	    return classes;
	}
	
	var comments = function comments(props) {
	    /* eslint-disable no-use-before-define */
	    var children = props.children;
	    var className = props.className;
	    var collapsed = props.collapsed;
	    var component = props.component;
	    var defaultClasses = props.defaultClasses;
	    var minimal = props.minimal;
	    var threaded = props.threaded;
	
	    var other = _objectWithoutProperties(props, ['children', 'className', 'collapsed', 'component', 'defaultClasses', 'minimal', 'threaded']);
	    /* eslint-enable no-use-before-define */
	
	    other.className = (0, _classnames2.default)(className, getClasses(props));
	
	    return _react2.default.createElement(component, other, children);
	};
	
	comments.propTypes = {
	    children: _react2.default.PropTypes.node,
	    className: _react2.default.PropTypes.any,
	    collapsed: _react2.default.PropTypes.bool,
	    component: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.element, _react2.default.PropTypes.string]),
	    defaultClasses: _react2.default.PropTypes.bool,
	    minimal: _react2.default.PropTypes.bool,
	    threaded: _react2.default.PropTypes.bool
	};
	
	comments.defaultProps = {
	    component: 'div',
	    defaultClasses: true
	};
	
	exports.default = comments;

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _elements = __webpack_require__(1);
	
	var _classnames = __webpack_require__(5);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function renderChildren(children) {
	    var commentChildren = [];
	    var contentChildren = [];
	
	    _react2.default.Children.forEach(children, function (child) {
	        // remove the Image default classes
	        if (child.type === _elements.Image) {
	            commentChildren.push(_react2.default.cloneElement(child, {
	                component: 'a',
	                avatar: true,
	                key: 'commentAvatar',
	                defaultClasses: false
	            }, child.children));
	        } else {
	            return contentChildren.push(child);
	        }
	    });
	
	    commentChildren.push(_react2.default.createElement(
	        _elements.Content,
	        { key: 'commentContent' },
	        contentChildren
	    ));
	
	    return commentChildren;
	}
	
	var Comment = function Comment(_ref) {
	    var children = _ref.children;
	    var className = _ref.className;
	    var component = _ref.component;
	
	    var other = _objectWithoutProperties(_ref, ['children', 'className', 'component']);
	
	    other.className = (0, _classnames2.default)(className, { comment: true });
	
	    return _react2.default.createElement(component, other, renderChildren(children));
	};
	
	Comment.propTypes = {
	    children: _react2.default.PropTypes.node,
	    className: _react2.default.PropTypes.any,
	    component: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.element, _react2.default.PropTypes.string])
	};
	
	Comment.defaultProps = {
	    component: 'div'
	};
	
	exports.default = Comment;

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(5);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function getClasses(props) {
	    var classes = {
	        ui: props.defaultClasses,
	
	        feed: props.defaultClasses
	    };
	
	    classes[props.size] = !!props.size;
	
	    return classes;
	}
	
	var Feed = function Feed(props) {
	    /* eslint-disable no-use-before-define */
	    var children = props.children;
	    var className = props.className;
	    var component = props.component;
	    var defaultClasses = props.defaultClasses;
	    var size = props.size;
	
	    var other = _objectWithoutProperties(props, ['children', 'className', 'component', 'defaultClasses', 'size']);
	    /* eslint-enable no-use-before-define */
	
	    other.className = (0, _classnames2.default)(className, getClasses(props));
	
	    return _react2.default.createElement(component, other, children);
	};
	
	Feed.propTypes = {
	    children: _react2.default.PropTypes.node,
	    className: _react2.default.PropTypes.any,
	    component: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.element, _react2.default.PropTypes.string]),
	    defaultClasses: _react2.default.PropTypes.bool,
	    size: _react2.default.PropTypes.string
	};
	
	Feed.defaultProps = {
	    component: 'div',
	    defaultClasses: true
	};
	
	exports.default = Feed;

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _elements = __webpack_require__(1);
	
	var _classnames = __webpack_require__(5);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function renderContent(children) {
	    var contentChildren = [];
	
	    _react2.default.Children.forEach(children, function (child, index) {
	        if (child.type === _elements.Images) {
	            contentChildren.push(_react2.default.cloneElement(child, {
	                defaultClasses: false,
	                className: 'extra images'
	            }));
	        } else if (child.type !== _elements.Image && child.type !== _elements.Icon) {
	            contentChildren.push(child);
	        } else if ((child.type === _elements.Image || child.type === _elements.Icon) && index > 0) {
	            contentChildren.push(child);
	        }
	    });
	
	    return _react2.default.createElement(
	        'div',
	        { className: 'content' },
	        contentChildren
	    );
	}
	
	function renderLabel(children) {
	    var labelChildren = [];
	
	    _react2.default.Children.forEach(children, function (child, index) {
	        // remove the Image default classes
	        if ((child.type === _elements.Image || child.type === _elements.Icon) && index === 0) {
	            if (child.type === _elements.Image) {
	                labelChildren.push(_react2.default.cloneElement(child, {
	                    key: 'eventLabel',
	                    image: false,
	                    defaultClasses: false
	                }, child.children));
	            } else {
	                labelChildren.push(child);
	            }
	        }
	    });
	
	    return _react2.default.createElement(
	        'div',
	        { className: 'label' },
	        labelChildren
	    );
	}
	
	var Event = function Event(_ref) {
	    var children = _ref.children;
	    var className = _ref.className;
	    var component = _ref.component;
	
	    var other = _objectWithoutProperties(_ref, ['children', 'className', 'component']);
	
	    other.className = (0, _classnames2.default)(className, { event: true });
	
	    return _react2.default.createElement(component, other, [renderLabel(children), renderContent(children)]);
	};
	
	Event.propTypes = {
	    children: _react2.default.PropTypes.node,
	    className: _react2.default.PropTypes.any,
	    component: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.element, _react2.default.PropTypes.string])
	};
	
	Event.defaultProps = {
	    component: 'div'
	};
	
	exports.default = Event;

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _class, _temp;
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(5);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Items = (_temp = _class = function (_React$Component) {
	    _inherits(Items, _React$Component);
	
	    function Items() {
	        _classCallCheck(this, Items);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Items).apply(this, arguments));
	    }
	
	    _createClass(Items, [{
	        key: 'render',
	        value: function render() {
	            /* eslint-disable no-use-before-define */
	            var _props = this.props;
	            var children = _props.children;
	            var className = _props.className;
	            var component = _props.component;
	            var defaultClasses = _props.defaultClasses;
	            var divided = _props.divided;
	
	            var other = _objectWithoutProperties(_props, ['children', 'className', 'component', 'defaultClasses', 'divided']);
	            /* eslint-enable no-use-before-define */
	
	            other.className = (0, _classnames2.default)(this.props.className, this.getClasses());
	
	            return _react2.default.createElement(this.props.component, other, this.props.children);
	        }
	    }, {
	        key: 'getClasses',
	        value: function getClasses() {
	            var classes = {
	                // default
	                ui: this.props.defaultClasses,
	
	                // positioning
	
	                // types
	                divided: this.props.divided,
	                relaxed: this.props.relaxed,
	                link: this.props.link,
	
	                // content
	
	                // variations
	
	                // component
	                items: this.props.defaultClasses
	            };
	
	            return classes;
	        }
	    }]);
	
	    return Items;
	}(_react2.default.Component), _class.propTypes = {
	    children: _react2.default.PropTypes.node,
	    className: _react2.default.PropTypes.node,
	    component: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.element, _react2.default.PropTypes.string]),
	    defaultClasses: _react2.default.PropTypes.bool,
	    divided: _react2.default.PropTypes.bool,
	    link: _react2.default.PropTypes.bool,
	    relaxed: _react2.default.PropTypes.relaxed
	}, _class.defaultProps = {
	    component: 'div',
	    defaultClasses: true
	}, _temp);
	exports.default = Items;

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(5);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _views = __webpack_require__(101);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	/**
	 * Select option. This should be used in <Select>
	 */
	var Option = function Option(props) {
	    /* eslint-disable no-use-before-define */
	    var children = props.children;
	    var value = props.value;
	
	    var other = _objectWithoutProperties(props, ['children', 'value']);
	    /* eslint-enable no-use-before-define */
	
	
	    if (other.active) {
	        other.className = (0, _classnames2.default)(other.className, { selected: true });
	    }
	    return _react2.default.createElement(
	        _views.MenuItem,
	        _extends({
	            menuValue: value
	        }, other),
	        children
	    );
	};
	
	Option.propTypes = _extends({}, _views.MenuItem.propTypes, {
	    /**
	     * Option value
	     */
	    value: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.number, _react2.default.PropTypes.string]).isRequired
	});
	
	Option.defaultProps = _extends({}, _views.MenuItem.defaultProps);
	
	exports.default = Option;

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _class, _temp;
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(55);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _reactMotionUiPack = __webpack_require__(59);
	
	var _reactMotionUiPack2 = _interopRequireDefault(_reactMotionUiPack);
	
	var _reactEventListener = __webpack_require__(100);
	
	var _reactEventListener2 = _interopRequireDefault(_reactEventListener);
	
	var _classnames = __webpack_require__(5);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _utilities = __webpack_require__(4);
	
	var _elements = __webpack_require__(1);
	
	var _views = __webpack_require__(101);
	
	var _dropdownelement = __webpack_require__(96);
	
	var _dropdownelement2 = _interopRequireDefault(_dropdownelement);
	
	var _elementType = __webpack_require__(93);
	
	var _elementType2 = _interopRequireDefault(_elementType);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * Dropdown menu with animations
	 */
	var DropdownMenu = (_temp = _class = function (_React$Component) {
	    _inherits(DropdownMenu, _React$Component);
	
	    function DropdownMenu(props) {
	        _classCallCheck(this, DropdownMenu);
	
	        /**
	         * Menu reference
	         */
	
	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(DropdownMenu).call(this, props));
	
	        _this.onDropdownElementClick = function (e) {
	            // clicking the arrow/search box or dropdown area
	            e.stopPropagation();
	            e.preventDefault();
	
	            _this.setState({
	                active: !_this.state.active
	            });
	        };
	
	        _this.onMenuItemClick = function (value) {
	            // click an option
	
	            _this.setState({
	                active: false
	            });
	
	            _this.props.onMenuItemClick(value);
	        };
	
	        _this.onOutsideDropdownClick = function (e) {
	            if (!_this.state.active || !_this.menuRef) {
	                return;
	            }
	            var menuElement = _reactDom2.default.findDOMNode(_this.menuRef);
	            if (menuElement) {
	                if (!(0, _utilities.isNodeInRoot)(e.target, menuElement)) {
	                    _this.setState({
	                        active: false
	                    });
	                }
	            }
	        };
	
	        _this.menuRef = null;
	
	        _this.state = {
	            active: props.active
	        };
	        return _this;
	    }
	
	    _createClass(DropdownMenu, [{
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            if (nextProps.active && this.state.active !== nextProps.active) {
	                this.setState({
	                    active: nextProps.active
	                });
	            }
	        }
	
	        /**
	         * Dropdown click
	         * @param {React.MouseEvent} e
	         */
	
	
	        /**
	         * Menu item click
	         * @param value
	         */
	
	
	        /**
	         * Outside dropdown click
	         * @param {React.MouseEvent} e
	         */
	
	    }, {
	        key: 'renderMenuIcon',
	
	
	        /**
	         * Renders dropdown icon
	         * @returns {*}
	         */
	        value: function renderMenuIcon() {
	            if (typeof this.props.component === 'function') {
	                return null;
	            } else {
	                return _react2.default.createElement(_elements.Icon, { name: this.props.icon });
	            }
	        }
	
	        /**
	         * Renders dropdown text
	         * @returns {*}
	         */
	
	    }, {
	        key: 'renderMenuText',
	        value: function renderMenuText() {
	            if (typeof this.props.component === 'function' || !this.props.label) {
	                return null;
	            } else {
	                return _react2.default.createElement(
	                    _elements.Text,
	                    null,
	                    this.props.label
	                );
	            }
	        }
	
	        /**
	         * Render
	         * @returns {JSX.Element}
	         */
	
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;
	
	            /* eslint-disable no-use-before-define */
	            var _props = this.props;
	            var active = _props.active;
	            var enterAnimation = _props.enterAnimation;
	            var leaveAnimation = _props.leaveAnimation;
	            var children = _props.children;
	            var icon = _props.icon;
	            var label = _props.label;
	            var menuComponent = _props.menuComponent;
	            var onMenuItemClick = _props.onMenuItemClick;
	
	            var other = _objectWithoutProperties(_props, ['active', 'enterAnimation', 'leaveAnimation', 'children', 'icon', 'label', 'menuComponent', 'onMenuItemClick']);
	            /* eslint-enable no-use-before-define */
	
	            var MenuComponent = menuComponent || _views.Menu;
	
	            return _react2.default.createElement(
	                _dropdownelement2.default,
	                _extends({}, other, {
	                    active: this.state.active,
	                    onClick: this.onDropdownElementClick
	                }),
	                _react2.default.createElement(_reactEventListener2.default, { elementName: 'document',
	                    onMouseDown: this.onOutsideDropdownClick,
	                    onTouchStart: this.onOutsideDropdownClick }),
	                this.renderMenuText(),
	                this.renderMenuIcon(),
	                _react2.default.createElement(
	                    _reactMotionUiPack2.default,
	                    {
	                        component: false,
	                        enter: this.props.enterAnimation,
	                        leave: this.props.leaveAnimation
	                    },
	                    this.state.active && _react2.default.createElement(
	                        MenuComponent,
	                        { key: 'menu',
	                            onMenuItemClick: this.onMenuItemClick,
	                            ref: function ref(_ref) {
	                                return _this2.menuRef = _ref;
	                            },
	                            style: { overflow: 'hidden' }
	                        },
	                        children
	                    )
	                )
	            );
	        }
	    }]);
	
	    return DropdownMenu;
	}(_react2.default.Component), _class.propTypes = _extends({}, _dropdownelement2.default.propTypes, {
	    /**
	     * Should menu be opened when first rendered
	     */
	    active: _react2.default.PropTypes.bool,
	    /**
	     * Enter animations transforms
	     */
	    enterAnimation: _react2.default.PropTypes.object,
	    /**
	     * Menu icon
	     */
	    icon: _react2.default.PropTypes.string,
	    /**
	     * Menu label
	     */
	    label: _react2.default.PropTypes.string,
	    /**
	     * Leave animation
	     */
	    leaveAnimation: _react2.default.PropTypes.object,
	    /**
	     * Specify component to be used as Menu.
	     * Usually is should be menu but with custom options applied (for example inverted). 
	     * DropdownMenu will pass some props to your Menu component, so you're responsive for passing it down to the level
	     */
	    menuComponent: _elementType2.default,
	    /**
	     * Menu item click callback
	     */
	    onMenuItemClick: _react2.default.PropTypes.func
	}), _class.defaultProps = _extends({}, _dropdownelement2.default.defaultProps, {
	    active: false,
	    icon: 'dropdown',
	    enterAnimation: {
	        height: 'auto'
	    },
	    leaveAnimation: {
	        height: 0
	    },
	    onMenuItemClick: function onMenuItemClick() {}
	}), _temp);
	exports.default = DropdownMenu;

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _class, _temp;
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _modules = __webpack_require__(41);
	
	var _decorator = __webpack_require__(115);
	
	var _decorator2 = _interopRequireDefault(_decorator);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Modal = (_temp = _class = function (_React$Component) {
	    _inherits(Modal, _React$Component);
	
	    function Modal(props) {
	        _classCallCheck(this, Modal);
	
	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Modal).call(this, props));
	
	        _this.state = {
	            active: false,
	            visible: false
	        };
	        return _this;
	    }
	
	    _createClass(Modal, [{
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(props) {
	            if (props.active != this.props.active && props.active !== this.state.active) {
	                if (props.active) {
	                    this.setState({
	                        active: true,
	                        visible: true
	                    });
	                } else {
	                    this.setState({
	                        active: false
	                    });
	                }
	            }
	        }
	    }, {
	        key: 'shouldComponentUpdate',
	        value: function shouldComponentUpdate(props, state) {
	            // this will happen when we modify the state by clicking the Backdrop
	            // we don't want to force a re-render just because the parent component
	            // got it's active state changed after the animation completed
	            if (props.active === this.props.active && state.active === this.state.active) {
	                return false;
	            } else {
	                return true;
	            }
	        }
	    }, {
	        key: 'onAnimationComplete',
	        value: function onAnimationComplete() {
	            if (!this.state.active) {
	                this.setState({
	                    visible: false
	                });
	            }
	
	            this.props.onComplete(this.state.active);
	        }
	    }, {
	        key: 'renderModalBody',
	        value: function renderModalBody() {
	            /* eslint-disable no-use-before-define */
	            var _props = this.props;
	            var blurring = _props.blurring;
	            var component = _props.component;
	            var disabled = _props.disabled;
	            var leaveAnimation = _props.leaveAnimation;
	            var inverted = _props.inverted;
	            var outsideClickClose = _props.outsideClickClose;
	            var page = _props.page;
	            var enterAnimation = _props.enterAnimation;
	
	            var other = _objectWithoutProperties(_props, ['blurring', 'component', 'disabled', 'leaveAnimation', 'inverted', 'outsideClickClose', 'page', 'enterAnimation']);
	            /* eslint-enable no-use-before-define */
	
	            var props = Object.assign(other, {
	                animate: this.state.active,
	                active: this.state.visible,
	                start: this.props.enterAnimation,
	                end: this.props.leaveAnimation,
	                onComplete: this.onAnimationComplete.bind(this)
	            });
	
	            return _react2.default.createElement(_modules.ModalBody, props, this.props.children);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            /* eslint-disable no-use-before-define */
	            var _props2 = this.props;
	            var basic = _props2.basic;
	            var children = _props2.children;
	            var component = _props2.component;
	            var leaveAnimation = _props2.leaveAnimation;
	            var fullscreen = _props2.fullscreen;
	            var offset = _props2.offset;
	            var outsideClickClose = _props2.outsideClickClose;
	            var padding = _props2.padding;
	            var size = _props2.size;
	            var enterAnimation = _props2.enterAnimation;
	
	            var other = _objectWithoutProperties(_props2, ['basic', 'children', 'component', 'leaveAnimation', 'fullscreen', 'offset', 'outsideClickClose', 'padding', 'size', 'enterAnimation']);
	            /* eslint-enable no-use-before-define */
	
	
	            other.active = this.state.active;
	
	            return _react2.default.createElement(_modules.Dimmer, other, this.renderModalBody());
	        }
	    }, {
	        key: 'handleClickOutside',
	        value: function handleClickOutside() {
	            if (this.props.outsideClickClose) {
	                if (this.state.active) {
	                    this.setState({
	                        active: false
	                    });
	                }
	            }
	        }
	    }, {
	        key: 'getModalClasses',
	        value: function getModalClasses() {
	            var classes = {
	                // variations
	                basic: this.props.basic,
	                fullscreen: this.props.fullscreen
	            };
	
	            classes[this.props.size] = !!this.props.size;
	
	            return classes;
	        }
	    }]);
	
	    return Modal;
	}(_react2.default.Component), _class.propTypes = {
	    active: _react2.default.PropTypes.bool,
	    basic: _react2.default.PropTypes.bool,
	    blurring: _react2.default.PropTypes.bool,
	    children: _react2.default.PropTypes.node,
	    component: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.func, _react2.default.PropTypes.string]),
	    disabled: _react2.default.PropTypes.bool,
	    enterAnimation: _react2.default.PropTypes.shape({
	        duration: _react2.default.PropTypes.number,
	        easing: _react2.default.PropTypes.string,
	        from: _react2.default.PropTypes.object,
	        to: _react2.default.PropTypes.object
	    }),
	    fullscreen: _react2.default.PropTypes.bool,
	    inverted: _react2.default.PropTypes.bool,
	    leaveAnimation: _react2.default.PropTypes.shape({
	        duration: _react2.default.PropTypes.number,
	        easing: _react2.default.PropTypes.string,
	        from: _react2.default.PropTypes.object,
	        to: _react2.default.PropTypes.object
	    }),
	    offset: _react2.default.PropTypes.number,
	    onComplete: _react2.default.PropTypes.func,
	    outsideClickClose: _react2.default.PropTypes.bool,
	    padding: _react2.default.PropTypes.number,
	    page: _react2.default.PropTypes.bool,
	    size: _react2.default.PropTypes.string
	}, _class.defaultProps = {
	    component: 'div',
	    enterAnimation: {
	        duration: 500,
	        easing: 'in-ease',
	        from: {
	            opacity: 0,
	            transform: 'scale(0,0)',
	            WebkitTransform: 'scale(0,0)'
	        },
	        to: {
	            opacity: 1,
	            transform: 'scale(1,1)',
	            WebkitTransform: 'scale(1,1)'
	        }
	    },
	    leaveAnimation: {
	        duration: 500,
	        easing: 'in-ease',
	        from: {
	            opacity: 1,
	            transform: 'scale(1,1)',
	            WebkitTransform: 'scale(1,1)'
	        },
	        to: {
	            opacity: 0,
	            transform: 'scale(0,0)',
	            WebkitTransform: 'scale(0,0)'
	        }
	    },
	    onComplete: function noop() {},
	    outsideClickClose: true,
	    page: true
	}, _temp);
	
	// Need this trick for react-docgen
	
	Modal = (0, _decorator2.default)(Modal);
	exports.default = Modal;

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(3);
	var objectAssign = __webpack_require__(116);
	var OnClickOutsideMixin = __webpack_require__(117);
	
	
	function addClickOutsideListener(Component) {
	
	  return React.createClass({
	
	    displayName: (Component.displayName || Component.name) + 'ClickOutside',
	
	    mixins: [OnClickOutsideMixin],
	
	    handleClickOutside: function(event) {
	      if (this.refs.inner.handleClickOutside) {
	        this.refs.inner.handleClickOutside(event);
	      }
	      else if (this.props.onClickOutside) {
	        this.props.onClickOutside(event);
	      }
	    },
	
	    render: function render() {
	      return React.createElement(Component, objectAssign({
	        enableOnClickOutside: this.enableOnClickOutside,
	        disableOnClickOutside: this.disableOnClickOutside,
	        ref: 'inner'
	      }, this.props));
	    }
	  });
	}
	
	
	/**
	 * @function listensToClickOutside
	 *
	 * A higher-order component for ES6 React classes to use the `handleClickOutside` event handler:
	 *
	 *   import listensToClickOutside from 'react-onclickoutside/decorator';
	 *
	 *   class Es6Component extends React.Component {
	 *     handleClickOutside = (event) => {
	 *       // ...handling code goes here...
	 *     }
	 *   }
	 *
	 *   export default listensToClickOutside(Es6Component);
	 *
	 * Alternatively you can pass the handler down from the parent on an `onClickOutside` prop:
	 *
	 *   class Child extends React.Component {
	 *     // No event handler here, if provided this handler takes precedence and the one passed down
	 *     // is not called automatically. If it should be, call it on the props from the child handler.
	 *   }
	 *
	 *   Child = listenToClickOutside(Child);
	 *
	 *
	 *   class Parent extends React.Component {
	 *     handleClickOutside = (event) => {
	 *       // ...handling code goes here...
	 *     }
	 *
	 *     render() {
	 *       return (
	 *         <Child onClickOutside={this.handleClickOutside}/>
	 *       );
	 *     }
	 *   }
	 *
	 * The [ES7 Decorator Pattern](https://github.com/wycats/javascript-decorators) is also supported
	 * using the same import:
	 *
	 *   import listensToClickOutside from 'react-onclickoutside/decorator';
	 *
	 *   @listensToClickOutside()
	 *   class Es6Component extends React.Component {
	 *     handleClickOutside = (event) => {
	 *       // ...handling code goes here...
	 *     }
	 *   }
	 *
	 * @param {React.Component} [Component] The component outside of which to listen to clicks.
	 * @returns {React.Component} or {Function} if using the decorator pattern.
	 */
	function listensToClickOutside(Component) {
	  // support decorator pattern
	  if (!Component) {
	    return function listensToClickOutsideDecorator(ComponentToDecorate) {
	      return addClickOutsideListener(ComponentToDecorate);
	    };
	  }
	
	  return addClickOutsideListener(Component);
	}
	
	module.exports = listensToClickOutside;


/***/ },
/* 116 */
/***/ function(module, exports) {

	/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule Object.assign
	 */
	
	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-object.assign
	
	'use strict';
	
	function assign(target, sources) {
	  if (target == null) {
	    throw new TypeError('Object.assign target cannot be null or undefined');
	  }
	
	  var to = Object(target);
	  var hasOwnProperty = Object.prototype.hasOwnProperty;
	
	  for (var nextIndex = 1; nextIndex < arguments.length; nextIndex++) {
	    var nextSource = arguments[nextIndex];
	    if (nextSource == null) {
	      continue;
	    }
	
	    var from = Object(nextSource);
	
	    // We don't currently support accessors nor proxies. Therefore this
	    // copy cannot throw. If we ever supported this then we must handle
	    // exceptions and side-effects. We don't support symbols so they won't
	    // be transferred.
	
	    for (var key in from) {
	      if (hasOwnProperty.call(from, key)) {
	        to[key] = from[key];
	      }
	    }
	  }
	
	  return to;
	}
	
	module.exports = assign;

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * A mixin for handling (effectively) onClickOutside for React components.
	 * Note that we're not intercepting any events in this approach, and we're
	 * not using double events for capturing and discarding in layers or wrappers.
	 *
	 * The idea is that components define function
	 *
	 *   handleClickOutside: function() { ... }
	 *
	 * If no such function is defined, an error will be thrown, as this means
	 * either it still needs to be written, or the component should not be using
	 * this mixing since it will not exhibit onClickOutside behaviour.
	 *
	 */
	(function (root, factory) {
	  if (true) {
	    // AMD. Register as an anonymous module.
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(55)], __WEBPACK_AMD_DEFINE_RESULT__ = function(reactDom) {
	      return factory(root, reactDom);
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports === 'object') {
	    // Node. Note that this does not work with strict
	    // CommonJS, but only CommonJS-like environments
	    // that support module.exports
	    module.exports = factory(root, require('react-dom'));
	  } else {
	    // Browser globals (root is window)
	    root.OnClickOutside = factory(root, ReactDOM);
	  }
	}(this, function (root, ReactDOM) {
	  "use strict";
	
	  // Use a parallel array because we can't use
	  // objects as keys, they get toString-coerced
	  var registeredComponents = [];
	  var handlers = [];
	
	  var IGNORE_CLASS = 'ignore-react-onclickoutside';
	
	  var isSourceFound = function(source, localNode) {
	    if (source === localNode) {
	      return true;
	    }
	    // SVG <use/> elements do not technically reside in the rendered DOM, so
	    // they do not have classList directly, but they offer a link to their
	    // corresponding element, which can have classList. This extra check is for
	    // that case.
	    // See: http://www.w3.org/TR/SVG11/struct.html#InterfaceSVGUseElement
	    // Discussion: https://github.com/Pomax/react-onclickoutside/pull/17
	    if (source.correspondingElement) {
	      return source.correspondingElement.classList.contains(IGNORE_CLASS);
	    }
	    return source.classList.contains(IGNORE_CLASS);
	  };
	
	  return {
	    componentDidMount: function() {
	      if(typeof this.handleClickOutside !== "function")
	        throw new Error("Component lacks a handleClickOutside(event) function for processing outside click events.");
	
	      var fn = this.__outsideClickHandler = (function(localNode, eventHandler) {
	        return function(evt) {
	          evt.stopPropagation();
	          var source = evt.target;
	          var found = false;
	          // If source=local then this event came from "somewhere"
	          // inside and should be ignored. We could handle this with
	          // a layered approach, too, but that requires going back to
	          // thinking in terms of Dom node nesting, running counter
	          // to React's "you shouldn't care about the DOM" philosophy.
	          while(source.parentNode) {
	            found = isSourceFound(source, localNode);
	            if(found) return;
	            source = source.parentNode;
	          }
	          eventHandler(evt);
	        }
	      }(ReactDOM.findDOMNode(this), this.handleClickOutside));
	
	      var pos = registeredComponents.length;
	      registeredComponents.push(this);
	      handlers[pos] = fn;
	
	      // If there is a truthy disableOnClickOutside property for this
	      // component, don't immediately start listening for outside events.
	      if (!this.props.disableOnClickOutside) {
	        this.enableOnClickOutside();
	      }
	    },
	
	    componentWillUnmount: function() {
	      this.disableOnClickOutside();
	      this.__outsideClickHandler = false;
	      var pos = registeredComponents.indexOf(this);
	      if( pos>-1) {
	        if (handlers[pos]) {
	          // clean up so we don't leak memory
	          handlers.splice(pos, 1);
	          registeredComponents.splice(pos, 1);
	        }
	      }
	    },
	
	    /**
	     * Can be called to explicitly enable event listening
	     * for clicks and touches outside of this element.
	     */
	    enableOnClickOutside: function() {
	      var fn = this.__outsideClickHandler;
	      if (document != null) {
	        document.addEventListener("mousedown", fn);
	        document.addEventListener("touchstart", fn);
	      }
	    },
	
	    /**
	     * Can be called to explicitly disable event listening
	     * for clicks and touches outside of this element.
	     */
	    disableOnClickOutside: function() {
	      var fn = this.__outsideClickHandler;
	      if (document != null) {
	        document.removeEventListener("mousedown", fn);
	        document.removeEventListener("touchstart", fn);
	      }
	    }
	  };
	
	}));


/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _class, _class2, _temp;
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _modules = __webpack_require__(41);
	
	var _classnames = __webpack_require__(5);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ModalBody = (0, _modules.Animate)(_class = (_temp = _class2 = function (_React$Component) {
	    _inherits(ModalBody, _React$Component);
	
	    function ModalBody(props) {
	        _classCallCheck(this, ModalBody);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(ModalBody).call(this, props));
	    }
	
	    _createClass(ModalBody, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            if (!this.sizes || !this.sizes.height) {
	                var component = (0, _modules.$)(this);
	
	                this.sizes = {
	                    pageHeight: (0, _modules.$)(window).height(),
	                    height: component.height() + this.props.offset,
	                    contextHeight: (0, _modules.$)(window).height()
	                };
	
	                this.forceUpdate();
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            /* eslint-disable no-use-before-define */
	            var _props = this.props;
	            var active = _props.active;
	            var basic = _props.basic;
	            var children = _props.children;
	            var className = _props.className;
	            var component = _props.component;
	            var defaultClasses = _props.defaultClasses;
	            var fullscreen = _props.fullscreen;
	            var offset = _props.offset;
	            var padding = _props.padding;
	            var size = _props.size;
	            var style = _props.style;
	            var start = _props.start;
	            var end = _props.end;
	
	            var other = _objectWithoutProperties(_props, ['active', 'basic', 'children', 'className', 'component', 'defaultClasses', 'fullscreen', 'offset', 'padding', 'size', 'style', 'start', 'end']);
	            /* eslint-enable no-use-before-define */
	
	
	            other.className = (0, _classnames2.default)(this.props.className, this.getClasses());
	
	            if (this.modalFits() && this.props.active) {
	                other.style = Object.assign(this.props.style, {
	                    top: '',
	                    marginTop: -(this.sizes.height / 2)
	                });
	            }
	
	            if (this.props.component == ModalBody) {
	                component = 'div';
	            } else {
	                component = this.props.component;
	            }
	
	            return _react2.default.createElement(component, other, this.props.children);
	        }
	    }, {
	        key: 'modalFits',
	        value: function modalFits() {
	            if (this.sizes != null) {
	                return this.sizes.height + this.props.padding * 2 < this.sizes.contextHeight;
	            } else {
	                return false;
	            }
	        }
	    }, {
	        key: 'getClasses',
	        value: function getClasses() {
	            var classes = {
	                ui: this.props.defaultClasses,
	
	                // visibility
	                visible: this.props.active,
	                active: this.props.active,
	
	                // variations
	                basic: this.props.basic,
	                fullscreen: this.props.fullscreen,
	
	                // component
	                modal: this.props.defaultClasses
	            };
	
	            classes[this.props.size] = !!this.props.size;
	
	            return classes;
	        }
	    }]);
	
	    return ModalBody;
	}(_react2.default.Component), _class2.propTypes = {
	    active: _react2.default.PropTypes.bool,
	    basic: _react2.default.PropTypes.bool,
	    children: _react2.default.PropTypes.node,
	    className: _react2.default.PropTypes.node,
	    component: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.func, _react2.default.PropTypes.string]),
	    defaultClasses: _react2.default.PropTypes.bool,
	    end: _react2.default.PropTypes.shape({
	        duration: _react2.default.PropTypes.number,
	        easing: _react2.default.PropTypes.string,
	        from: _react2.default.PropTypes.object,
	        to: _react2.default.PropTypes.object
	    }),
	    fullscreen: _react2.default.PropTypes.bool,
	    offset: _react2.default.PropTypes.number,
	    padding: _react2.default.PropTypes.number,
	    size: _react2.default.PropTypes.string,
	    start: _react2.default.PropTypes.shape({
	        duration: _react2.default.PropTypes.number,
	        easing: _react2.default.PropTypes.string,
	        from: _react2.default.PropTypes.object,
	        to: _react2.default.PropTypes.object
	    }),
	    style: _react2.default.PropTypes.object
	}, _class2.defaultProps = {
	    component: 'div',
	    defaultClasses: true,
	    offset: 0,
	    padding: 50,
	    style: {}
	}, _temp)) || _class;
	
	exports.default = ModalBody;

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _class, _temp;
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(55);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _reactMotionUiPack = __webpack_require__(59);
	
	var _reactMotionUiPack2 = _interopRequireDefault(_reactMotionUiPack);
	
	var _reactPortal = __webpack_require__(120);
	
	var _reactPortal2 = _interopRequireDefault(_reactPortal);
	
	var _reactEventListener = __webpack_require__(100);
	
	var _reactEventListener2 = _interopRequireDefault(_reactEventListener);
	
	var _lodash = __webpack_require__(98);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _reactAddonsShallowCompare = __webpack_require__(79);
	
	var _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare);
	
	var _popupelement = __webpack_require__(133);
	
	var _popupelement2 = _interopRequireDefault(_popupelement);
	
	var _utilities = __webpack_require__(4);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * Popup with animations
	 */
	var Popup = (_temp = _class = function (_React$Component) {
	    _inherits(Popup, _React$Component);
	
	    function Popup(props) {
	        _classCallCheck(this, Popup);
	
	        // Handle resize / scrolls handler
	
	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Popup).call(this, props));
	
	        _this.handleResize = (0, _lodash2.default)(_this.setPlacement.bind(_this), 100);
	        _this.handleScroll = (0, _lodash2.default)(_this.setPlacement.bind(_this, true), 100);
	
	        /**
	         * Array of current tried positions
	         * @type {Array}
	         */
	        _this.positionsTried = [];
	
	        _this.state = {
	            active: _this.props.active,
	            closing: false,
	            // Need to save position to state, since it could be changed by autoPosition
	            position: props.position, // eslint-disable-line
	            positionStyleTop: '0px',
	            positionStyleLeft: '0px'
	        };
	        return _this;
	    }
	
	    _createClass(Popup, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            if (this.props.active) {
	                // Set initial position for popup
	                this.setPlacement();
	            }
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            var _this2 = this;
	
	            if (nextProps.active !== this.state.active) {
	                if (nextProps.active) {
	                    // Display popup, set active state
	                    this.setState({
	                        active: true,
	                        position: nextProps.position
	                    });
	                } else {
	                    // need to wait to play animation and keep portal active
	                    this.positionsTried = [];
	                    this.setState({
	                        closing: true
	                    });
	                    setTimeout(function () {
	                        // Hide popup
	                        _this2.setState({
	                            active: false,
	                            closing: false
	                        });
	                    }, 500);
	                }
	            }
	        }
	    }, {
	        key: 'shouldComponentUpdate',
	        value: function shouldComponentUpdate(nextProps, nextState) {
	            // since we're changing state immediately after componentDidUpdate we need to prevent re-rendering loop
	            return (0, _reactAddonsShallowCompare2.default)(this, nextProps, nextState);
	        }
	    }, {
	        key: 'componentDidUpdate',
	        value: function componentDidUpdate() {
	            // Set popup position after update
	            this.setPlacement();
	        }
	    }, {
	        key: 'onOutsideClick',
	        value: function onOutsideClick(event) {
	            if (!this.state.active || this.state.closing) {
	                return;
	            }
	            if (!this.refs.popup || !this.refs.popup.refs.popup) {
	                return;
	            }
	            if ((0, _utilities.isNodeInRoot)(event.target, this.refs.popup.refs.popup)) {
	                return;
	            }
	            event.stopPropagation();
	            this.props.onRequestClose(event);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            // consuming position from props here since it's passing it from state
	            /* eslint-disable no-use-before-define, react/prop-types */
	            var _props = this.props;
	            var active = _props.active;
	            var autoPosition = _props.autoPosition;
	            var distanceAway = _props.distanceAway;
	            var lastResortPosition = _props.lastResortPosition;
	            var offset = _props.offset;
	            var startAnimation = _props.startAnimation;
	            var endAnimation = _props.endAnimation;
	            var onRequestClose = _props.onRequestClose;
	            var prefer = _props.prefer;
	            var position = _props.position;
	            var preventElementClicks = _props.preventElementClicks;
	            var requestCloseWhenOffScreen = _props.requestCloseWhenOffScreen;
	            var target = _props.target;
	            var style = _props.style;
	
	            var other = _objectWithoutProperties(_props, ['active', 'autoPosition', 'distanceAway', 'lastResortPosition', 'offset', 'startAnimation', 'endAnimation', 'onRequestClose', 'prefer', 'position', 'preventElementClicks', 'requestCloseWhenOffScreen', 'target', 'style']);
	            /* eslint-enable no-use-before-define, react/prop-types */
	
	            // Apply invisible layer to portal if preventElementClicks is true
	
	
	            var portalStyle = {
	                position: 'fixed',
	                top: 0,
	                bottom: 0,
	                left: 0,
	                right: 0
	            };
	
	            // Create style for popup
	            var positionStyle = {
	                left: this.state.positionStyleLeft,
	                top: this.state.positionStyleTop,
	                bottom: 'auto',
	                right: 'auto',
	                display: 'block',
	                position: 'fixed' // need it to be fixed to avoid it with bloating code with many checks
	            };
	
	            var popupStyle = style ? _extends({}, style, positionStyle) : positionStyle;
	
	            return _react2.default.createElement(
	                _reactPortal2.default,
	                { isOpened: this.state.active || !this.state.active && this.state.closing,
	                    style: this.props.preventElementClicks ? portalStyle : {}
	                },
	                _react2.default.createElement(
	                    'noscript',
	                    null,
	                    _react2.default.createElement(_reactEventListener2.default, { elementName: 'document',
	                        onMouseDown: this.onOutsideClick.bind(this),
	                        onTouchStart: this.onOutsideClick.bind(this) }),
	                    _react2.default.createElement(_reactEventListener2.default, { elementName: 'window',
	                        onResize: this.handleResize,
	                        onScroll: this.handleScroll }),
	                    _react2.default.createElement(
	                        _reactMotionUiPack2.default,
	                        {
	                            component: false,
	                            enter: startAnimation,
	                            leave: endAnimation
	                        },
	                        this.state.active && !this.state.closing && _react2.default.createElement(_popupelement2.default, _extends({}, other, {
	                            key: 'popup',
	                            position: this.state.position,
	                            style: popupStyle,
	                            ref: 'popup' }))
	                    )
	                )
	            );
	        }
	
	        /**
	         * Return target element boundaries
	         * @param element {HTMLElement}
	         */
	
	    }, {
	        key: 'getTargetPosition',
	        value: function getTargetPosition(element) {
	            var rect = element.getBoundingClientRect();
	            var left = rect.left;
	            var top = rect.top;
	
	            return {
	                top: top,
	                left: left,
	                right: left + element.offsetWidth,
	                bottom: top + element.offsetHeight,
	                width: element.offsetWidth,
	                height: element.offsetHeight,
	                center: left + element.offsetWidth / 2,
	                middle: top + element.offsetHeight / 2
	            };
	        }
	
	        /**
	         * Return popup element boundaries
	         * @param element {HTMLElement}
	         */
	
	    }, {
	        key: 'getPopupDimensions',
	        value: function getPopupDimensions(element) {
	            return {
	                width: element.offsetWidth,
	                height: element.offsetHeight,
	                center: element.offsetWidth / 2,
	                middle: element.offsetHeight / 2
	            };
	        }
	
	        /**
	         * Set popup position
	         */
	
	    }, {
	        key: 'setPlacement',
	        value: function setPlacement() {
	            var scrolling = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];
	
	            if (!this.state.active || this.state.closing) {
	                return;
	            }
	            if (!this.refs.popup || !this.refs.popup.refs || !this.refs.popup.refs.popup) {
	                return;
	            }
	            var popupHTMLElement = this.refs.popup.refs.popup;
	
	            // If target wasn't provided, then assuming that popup used as child of element, we can obtain target then
	            var targetEl = this.props.target || _reactDom2.default.findDOMNode(this);
	            if (!targetEl) {
	                return;
	            }
	
	            // mark current position as tried
	            this.positionsTried.push(this.state.position);
	
	            var targetElementPosition = this.getTargetPosition(targetEl);
	            var popupDimensions = this.getPopupDimensions(popupHTMLElement);
	
	            if (scrolling && this.props.requestCloseWhenOffScreen) {
	                this.requestCloseWhenOffScreen(targetElementPosition);
	            }
	
	            // need to know margins
	            var computedStyle = window.getComputedStyle(popupHTMLElement);
	            var margins = {
	                top: parseFloat(computedStyle.marginTop),
	                bottom: parseFloat(computedStyle.marginBottom),
	                left: parseFloat(computedStyle.marginLeft),
	                right: parseFloat(computedStyle.marginRight)
	            };
	            // assuming that all margins should be equal, using it because if popup will be autopositioned to opposite direction, then
	            // getComputedStyle will not return correct margin, since it could be not-rerendered yet
	            var margin = margins.bottom || margins.right || margins.left || margins.top || 0;
	            // calculate popup position
	            var finalPosition = this.calculatePopupPosition(this.state.position, targetElementPosition, popupDimensions, margin);
	            // Recalculate position if needed
	            var nextPosition = null;
	            if (this.props.autoPosition && this.positionsTried.length <= _popupelement.POSITIONS.length) {
	                nextPosition = this.autoPosition(finalPosition, popupDimensions);
	                if (nextPosition) {
	                    finalPosition = this.calculatePopupPosition(nextPosition, targetElementPosition, popupDimensions, margin);
	                }
	            }
	
	            this.setState({
	                position: nextPosition ? nextPosition : this.state.position, // eslint-disable-line
	                positionStyleTop: finalPosition.top + 'px',
	                positionStyleLeft: finalPosition.left + 'px'
	            });
	
	            // apply position to popup
	            /*        popupHTMLElement.style.left = `${finalPosition.left}px`;
	                    popupHTMLElement.style.top = `${finalPosition.top}px`;
	                    popupHTMLElement.style.bottom = 'auto';
	                    popupHTMLElement.style.right = 'auto';
	                    popupHTMLElement.style.display = 'block';*/
	        }
	
	        /**
	         * Attempt to auto-position popup
	         */
	
	    }, {
	        key: 'autoPosition',
	        value: function autoPosition(finalPosition, popupDimensions) {
	            if (finalPosition.top < 0 || finalPosition.top + popupDimensions.height > window.innerHeight || finalPosition.left < 0 || finalPosition.left + popupDimensions.width > window.innerWidth) {
	                // obtain next position
	                var nextPosition = this.getNextPosition();
	                // if every position tried set to lastResortPosition if given
	                if (!nextPosition) {
	                    // in case of prefer=opposite fill positionsTried array manually
	                    this.positionsTried = [].concat(_toConsumableArray(_popupelement.POSITIONS));
	                    if (this.props.lastResortPosition) {
	                        nextPosition = this.props.lastResortPosition;
	                    } else {
	                        nextPosition = this.state.position;
	                    }
	                }
	                return nextPosition;
	            } else {
	                // looks like we found a good position reset lastPositions list
	                this.positionsTried = [];
	            }
	            return null;
	        }
	
	        /**
	         * Return next popup position to try depending of current prefer style, or null if every position was tried
	         */
	
	    }, {
	        key: 'getNextPosition',
	        value: function getNextPosition() {
	            if (this.positionsTried.length >= _popupelement.POSITIONS.length) {
	                return null;
	            }
	            var currentPositionIndex = _popupelement.POSITIONS.indexOf(this.state.position);
	            if (currentPositionIndex === -1) {
	                return null;
	            }
	
	            switch (this.props.prefer) {
	                case 'adjacent':
	                default:
	                    var nextPosition = null;
	                    // We know now that at least one untried position should be available here
	                    /* eslint-disable */
	                    while (true) {
	                        // Reset index if we're off from array
	                        if (currentPositionIndex + 1 > _popupelement.POSITIONS.length) {
	                            currentPositionIndex = 0;
	                        }
	                        nextPosition = _popupelement.POSITIONS[currentPositionIndex];
	                        if (this.positionsTried.indexOf(nextPosition) === -1) {
	                            break;
	                        }
	                        currentPositionIndex++;
	                    }
	                    /* eslint-enable */
	                    return nextPosition;
	                case 'opposite':
	                    // just return opposite direction
	                    switch (this.state.position) {
	                        case 'left center':
	                            return this.positionsTried.indexOf('right center') === -1 ? 'right center' : null;
	                        case 'right center':
	                            return this.positionsTried.indexOf('left center') === -1 ? 'left center' : null;
	                        case 'top left':
	                            return this.positionsTried.indexOf('bottom left') === -1 ? 'bottom left' : null;
	                        case 'top center':
	                            return this.positionsTried.indexOf('bottom center') === -1 ? 'bottom center' : null;
	                        case 'top right':
	                            return this.positionsTried.indexOf('bottom right') === -1 ? 'bottom right' : null;
	                        case 'bottom left':
	                            return this.positionsTried.indexOf('top left') === -1 ? 'top left' : null;
	                        case 'bottom center':
	                            return this.positionsTried.indexOf('top center') === -1 ? 'top center' : null;
	                        case 'bottom right':
	                            return this.positionsTried.indexOf('top right') === -1 ? 'top right' : null;
	                        default:
	                            return null;
	                    }
	            }
	        }
	
	        /**
	         * Return true if element is off screen
	         * @param targetPosition
	         */
	
	    }, {
	        key: 'requestCloseWhenOffScreen',
	        value: function requestCloseWhenOffScreen(targetPosition) {
	            if (targetPosition.top < 0 || targetPosition.top > window.innerHeight || targetPosition.left < 0 || targetPosition.left > window.innerWidth) {
	                this.props.onRequestClose();
	            }
	        }
	
	        /**
	         * Return popup position by taking account of elements boundaries and current this.state.position
	         * @param position
	         * @param targetPosition
	         * @param popupDimensions
	         * @param margin {number}
	         */
	
	    }, {
	        key: 'calculatePopupPosition',
	        value: function calculatePopupPosition(position, targetPosition, popupDimensions, margin) {
	            var offset = this.props.offset;
	            var distanceAway = this.props.distanceAway;
	
	            switch (position) {
	                case 'top left':
	                    return {
	                        left: targetPosition.left + offset,
	                        top: targetPosition.top - popupDimensions.height - margin - distanceAway
	                    };
	                case 'top center':
	                    return {
	                        left: targetPosition.center - popupDimensions.center + offset,
	                        top: targetPosition.top - popupDimensions.height - margin - distanceAway
	                    };
	                case 'top right':
	                    return {
	                        left: targetPosition.right - popupDimensions.width - offset,
	                        top: targetPosition.top - popupDimensions.height - margin - distanceAway
	                    };
	                case 'left center':
	                    return {
	                        left: targetPosition.left - popupDimensions.width - margin - distanceAway,
	                        top: targetPosition.middle - popupDimensions.middle + offset
	                    };
	                case 'right center':
	                    // not needed here to take margins into account
	                    return {
	                        left: targetPosition.right + distanceAway,
	                        top: targetPosition.middle - popupDimensions.middle + offset
	                    };
	                case 'bottom left':
	                    return {
	                        left: targetPosition.left + offset,
	                        top: targetPosition.bottom + distanceAway
	                    };
	                case 'bottom center':
	                    return {
	                        left: targetPosition.center - popupDimensions.center + offset,
	                        top: targetPosition.bottom + distanceAway
	                    };
	                case 'bottom right':
	                    return {
	                        left: targetPosition.right - popupDimensions.width - offset,
	                        top: targetPosition.bottom + distanceAway
	                    };
	            }
	        }
	    }]);
	
	    return Popup;
	}(_react2.default.Component), _class.propTypes = _extends({}, _popupelement2.default.propTypes, {
	    /**
	     * True to display the popup. If false will be hidden
	     */
	    active: _react2.default.PropTypes.bool,
	    /**
	     * Auto position popup when needed
	     */
	    autoPosition: _react2.default.PropTypes.bool,
	    /**
	     * Offset for distance of popup from element
	     */
	    distanceAway: _react2.default.PropTypes.number,
	    /**
	     * End animation
	     */
	    endAnimation: _react2.default.PropTypes.object,
	    /**
	     * Use this position when element fails to fit on screen in all tried positions
	     * If omitted, the last tried position will be used instead
	     */
	    lastResortPosition: _react2.default.PropTypes.string,
	    /**
	     * Offset in pixels from calculated position
	     */
	    offset: _react2.default.PropTypes.number,
	    /**
	     * Callback when popup wants to be closed (i.e. when offscreen or clicked outside)
	     */
	    onRequestClose: _react2.default.PropTypes.func,
	    /**
	     * When auto-positioning popup use opposite direction or adjacent as next position
	     */
	    prefer: _react2.default.PropTypes.oneOf(['adjacent', 'opposite']),
	    /**
	     * If true will prevent clicking on the other elements
	     */
	    preventElementClicks: _react2.default.PropTypes.bool,
	    /**
	     * Hide popup when target element scrolls off the screen
	     */
	    requestCloseWhenOffScreen: _react2.default.PropTypes.bool,
	    /**
	     * Start animation
	     */
	    startAnimation: _react2.default.PropTypes.object,
	    /**
	     * Target element to apply popup
	     */
	    target: _react2.default.PropTypes.object
	}), _class.defaultProps = _extends({}, _popupelement2.default.defaultProps, {
	    requestCloseWhenOffScreen: true,
	    autoPosition: true,
	    active: false,
	    distanceAway: 0,
	    offset: 0,
	    startAnimation: {
	        scale: 1
	    },
	    endAnimation: {
	        scale: 0
	    },
	    onRequestClose: function onRequestClose() {},
	    preventElementClicks: true,
	    prefer: 'adjacent'
	}), _temp);
	exports.default = Popup;

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(55);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _CSSPropertyOperations = __webpack_require__(121);
	
	var _CSSPropertyOperations2 = _interopRequireDefault(_CSSPropertyOperations);
	
	var _shallowCompare = __webpack_require__(80);
	
	var _shallowCompare2 = _interopRequireDefault(_shallowCompare);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var KEYCODES = {
	  ESCAPE: 27
	};
	
	var Portal = function (_React$Component) {
	  _inherits(Portal, _React$Component);
	
	  function Portal() {
	    _classCallCheck(this, Portal);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Portal).call(this));
	
	    _this.state = { active: false };
	    _this.handleWrapperClick = _this.handleWrapperClick.bind(_this);
	    _this.closePortal = _this.closePortal.bind(_this);
	    _this.handleOutsideMouseClick = _this.handleOutsideMouseClick.bind(_this);
	    _this.handleKeydown = _this.handleKeydown.bind(_this);
	    _this.portal = null;
	    _this.node = null;
	    return _this;
	  }
	
	  _createClass(Portal, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      if (this.props.closeOnEsc) {
	        document.addEventListener('keydown', this.handleKeydown);
	      }
	
	      if (this.props.closeOnOutsideClick) {
	        document.addEventListener('mousedown', this.handleOutsideMouseClick);
	        document.addEventListener('touchstart', this.handleOutsideMouseClick);
	      }
	
	      if (this.props.isOpened) {
	        this.openPortal();
	      }
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(newProps) {
	      // portal's 'is open' state is handled through the prop isOpened
	      if (typeof newProps.isOpened !== 'undefined') {
	        if (newProps.isOpened) {
	          if (this.state.active) {
	            this.renderPortal(newProps);
	          } else {
	            this.openPortal(newProps);
	          }
	        }
	        if (!newProps.isOpened && this.state.active) {
	          this.closePortal();
	        }
	      }
	
	      // portal handles its own 'is open' state
	      if (typeof newProps.isOpened === 'undefined' && this.state.active) {
	        this.renderPortal(newProps);
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      if (this.props.closeOnEsc) {
	        document.removeEventListener('keydown', this.handleKeydown);
	      }
	
	      if (this.props.closeOnOutsideClick) {
	        document.removeEventListener('mousedown', this.handleOutsideMouseClick);
	        document.removeEventListener('touchstart', this.handleOutsideMouseClick);
	      }
	
	      this.closePortal();
	    }
	  }, {
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps, nextState) {
	      return (0, _shallowCompare2.default)(this, nextProps, nextState);
	    }
	  }, {
	    key: 'renderPortal',
	    value: function renderPortal(props) {
	      if (!this.node) {
	        this.node = document.createElement('div');
	        if (props.className) {
	          this.node.className = props.className;
	        }
	        if (props.style) {
	          _CSSPropertyOperations2.default.setValueForStyles(this.node, props.style);
	        }
	        document.body.appendChild(this.node);
	      }
	      this.portal = _reactDom2.default.unstable_renderSubtreeIntoContainer(this, _react2.default.cloneElement(props.children, { closePortal: this.closePortal }), this.node, this.props.onUpdate);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      if (this.props.openByClickOn) {
	        return _react2.default.cloneElement(this.props.openByClickOn, { onClick: this.handleWrapperClick });
	      } else {
	        return null;
	      }
	    }
	  }, {
	    key: 'handleWrapperClick',
	    value: function handleWrapperClick(e) {
	      e.preventDefault();
	      e.stopPropagation();
	      this.openPortal();
	    }
	  }, {
	    key: 'openPortal',
	    value: function openPortal() {
	      var props = arguments.length <= 0 || arguments[0] === undefined ? this.props : arguments[0];
	
	      this.setState({ active: true });
	      this.renderPortal(props);
	
	      this.props.onOpen(this.node);
	    }
	  }, {
	    key: 'closePortal',
	    value: function closePortal() {
	      var _this2 = this;
	
	      var resetPortalState = function resetPortalState() {
	        if (_this2.node) {
	          _reactDom2.default.unmountComponentAtNode(_this2.node);
	          document.body.removeChild(_this2.node);
	        }
	        _this2.portal = null;
	        _this2.node = null;
	        _this2.setState({ active: false });
	      };
	
	      if (this.state.active) {
	        if (this.props.beforeClose) {
	          this.props.beforeClose(this.node, resetPortalState);
	        } else {
	          resetPortalState();
	        }
	
	        this.props.onClose();
	      }
	    }
	  }, {
	    key: 'handleOutsideMouseClick',
	    value: function handleOutsideMouseClick(e) {
	      if (!this.state.active) {
	        return;
	      }
	
	      var root = (0, _reactDom.findDOMNode)(this.portal);
	      if (root.contains(e.target) || e.target.tagName === 'HTML') {
	        return;
	      }
	
	      e.stopPropagation();
	      this.closePortal();
	    }
	  }, {
	    key: 'handleKeydown',
	    value: function handleKeydown(e) {
	      if (e.keyCode === KEYCODES.ESCAPE && this.state.active) {
	        this.closePortal();
	      }
	    }
	  }]);
	
	  return Portal;
	}(_react2.default.Component);
	
	exports.default = Portal;
	
	Portal.propTypes = {
	  className: _react2.default.PropTypes.string,
	  style: _react2.default.PropTypes.object,
	  children: _react2.default.PropTypes.element.isRequired,
	  openByClickOn: _react2.default.PropTypes.element,
	  closeOnEsc: _react2.default.PropTypes.bool,
	  closeOnOutsideClick: _react2.default.PropTypes.bool,
	  isOpened: _react2.default.PropTypes.bool,
	  onOpen: _react2.default.PropTypes.func,
	  onClose: _react2.default.PropTypes.func,
	  beforeClose: _react2.default.PropTypes.func,
	  onUpdate: _react2.default.PropTypes.func
	};
	
	Portal.defaultProps = {
	  onOpen: function onOpen() {},
	  onClose: function onClose() {},
	  onUpdate: function onUpdate() {}
	};
	module.exports = exports['default'];


/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule CSSPropertyOperations
	 * @typechecks static-only
	 */
	
	'use strict';
	
	var CSSProperty = __webpack_require__(122);
	var ExecutionEnvironment = __webpack_require__(123);
	var ReactPerf = __webpack_require__(124);
	
	var camelizeStyleName = __webpack_require__(125);
	var dangerousStyleValue = __webpack_require__(127);
	var hyphenateStyleName = __webpack_require__(128);
	var memoizeStringOnly = __webpack_require__(130);
	var warning = __webpack_require__(131);
	
	var processStyleName = memoizeStringOnly(function (styleName) {
	  return hyphenateStyleName(styleName);
	});
	
	var hasShorthandPropertyBug = false;
	var styleFloatAccessor = 'cssFloat';
	if (ExecutionEnvironment.canUseDOM) {
	  var tempStyle = document.createElement('div').style;
	  try {
	    // IE8 throws "Invalid argument." if resetting shorthand style properties.
	    tempStyle.font = '';
	  } catch (e) {
	    hasShorthandPropertyBug = true;
	  }
	  // IE8 only supports accessing cssFloat (standard) as styleFloat
	  if (document.documentElement.style.cssFloat === undefined) {
	    styleFloatAccessor = 'styleFloat';
	  }
	}
	
	if (process.env.NODE_ENV !== 'production') {
	  // 'msTransform' is correct, but the other prefixes should be capitalized
	  var badVendoredStyleNamePattern = /^(?:webkit|moz|o)[A-Z]/;
	
	  // style values shouldn't contain a semicolon
	  var badStyleValueWithSemicolonPattern = /;\s*$/;
	
	  var warnedStyleNames = {};
	  var warnedStyleValues = {};
	
	  var warnHyphenatedStyleName = function (name) {
	    if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
	      return;
	    }
	
	    warnedStyleNames[name] = true;
	    process.env.NODE_ENV !== 'production' ? warning(false, 'Unsupported style property %s. Did you mean %s?', name, camelizeStyleName(name)) : undefined;
	  };
	
	  var warnBadVendoredStyleName = function (name) {
	    if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
	      return;
	    }
	
	    warnedStyleNames[name] = true;
	    process.env.NODE_ENV !== 'production' ? warning(false, 'Unsupported vendor-prefixed style property %s. Did you mean %s?', name, name.charAt(0).toUpperCase() + name.slice(1)) : undefined;
	  };
	
	  var warnStyleValueWithSemicolon = function (name, value) {
	    if (warnedStyleValues.hasOwnProperty(value) && warnedStyleValues[value]) {
	      return;
	    }
	
	    warnedStyleValues[value] = true;
	    process.env.NODE_ENV !== 'production' ? warning(false, 'Style property values shouldn\'t contain a semicolon. ' + 'Try "%s: %s" instead.', name, value.replace(badStyleValueWithSemicolonPattern, '')) : undefined;
	  };
	
	  /**
	   * @param {string} name
	   * @param {*} value
	   */
	  var warnValidStyle = function (name, value) {
	    if (name.indexOf('-') > -1) {
	      warnHyphenatedStyleName(name);
	    } else if (badVendoredStyleNamePattern.test(name)) {
	      warnBadVendoredStyleName(name);
	    } else if (badStyleValueWithSemicolonPattern.test(value)) {
	      warnStyleValueWithSemicolon(name, value);
	    }
	  };
	}
	
	/**
	 * Operations for dealing with CSS properties.
	 */
	var CSSPropertyOperations = {
	
	  /**
	   * Serializes a mapping of style properties for use as inline styles:
	   *
	   *   > createMarkupForStyles({width: '200px', height: 0})
	   *   "width:200px;height:0;"
	   *
	   * Undefined values are ignored so that declarative programming is easier.
	   * The result should be HTML-escaped before insertion into the DOM.
	   *
	   * @param {object} styles
	   * @return {?string}
	   */
	  createMarkupForStyles: function (styles) {
	    var serialized = '';
	    for (var styleName in styles) {
	      if (!styles.hasOwnProperty(styleName)) {
	        continue;
	      }
	      var styleValue = styles[styleName];
	      if (process.env.NODE_ENV !== 'production') {
	        warnValidStyle(styleName, styleValue);
	      }
	      if (styleValue != null) {
	        serialized += processStyleName(styleName) + ':';
	        serialized += dangerousStyleValue(styleName, styleValue) + ';';
	      }
	    }
	    return serialized || null;
	  },
	
	  /**
	   * Sets the value for multiple styles on a node.  If a value is specified as
	   * '' (empty string), the corresponding style property will be unset.
	   *
	   * @param {DOMElement} node
	   * @param {object} styles
	   */
	  setValueForStyles: function (node, styles) {
	    var style = node.style;
	    for (var styleName in styles) {
	      if (!styles.hasOwnProperty(styleName)) {
	        continue;
	      }
	      if (process.env.NODE_ENV !== 'production') {
	        warnValidStyle(styleName, styles[styleName]);
	      }
	      var styleValue = dangerousStyleValue(styleName, styles[styleName]);
	      if (styleName === 'float') {
	        styleName = styleFloatAccessor;
	      }
	      if (styleValue) {
	        style[styleName] = styleValue;
	      } else {
	        var expansion = hasShorthandPropertyBug && CSSProperty.shorthandPropertyExpansions[styleName];
	        if (expansion) {
	          // Shorthand property that IE8 won't like unsetting, so unset each
	          // component to placate it
	          for (var individualStyleName in expansion) {
	            style[individualStyleName] = '';
	          }
	        } else {
	          style[styleName] = '';
	        }
	      }
	    }
	  }
	
	};
	
	ReactPerf.measureMethods(CSSPropertyOperations, 'CSSPropertyOperations', {
	  setValueForStyles: 'setValueForStyles'
	});
	
	module.exports = CSSPropertyOperations;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(50)))

/***/ },
/* 122 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule CSSProperty
	 */
	
	'use strict';
	
	/**
	 * CSS properties which accept numbers but are not in units of "px".
	 */
	var isUnitlessNumber = {
	  animationIterationCount: true,
	  boxFlex: true,
	  boxFlexGroup: true,
	  boxOrdinalGroup: true,
	  columnCount: true,
	  flex: true,
	  flexGrow: true,
	  flexPositive: true,
	  flexShrink: true,
	  flexNegative: true,
	  flexOrder: true,
	  fontWeight: true,
	  lineClamp: true,
	  lineHeight: true,
	  opacity: true,
	  order: true,
	  orphans: true,
	  tabSize: true,
	  widows: true,
	  zIndex: true,
	  zoom: true,
	
	  // SVG-related properties
	  fillOpacity: true,
	  stopOpacity: true,
	  strokeDashoffset: true,
	  strokeOpacity: true,
	  strokeWidth: true
	};
	
	/**
	 * @param {string} prefix vendor-specific prefix, eg: Webkit
	 * @param {string} key style name, eg: transitionDuration
	 * @return {string} style name prefixed with `prefix`, properly camelCased, eg:
	 * WebkitTransitionDuration
	 */
	function prefixKey(prefix, key) {
	  return prefix + key.charAt(0).toUpperCase() + key.substring(1);
	}
	
	/**
	 * Support style names that may come passed in prefixed by adding permutations
	 * of vendor prefixes.
	 */
	var prefixes = ['Webkit', 'ms', 'Moz', 'O'];
	
	// Using Object.keys here, or else the vanilla for-in loop makes IE8 go into an
	// infinite loop, because it iterates over the newly added props too.
	Object.keys(isUnitlessNumber).forEach(function (prop) {
	  prefixes.forEach(function (prefix) {
	    isUnitlessNumber[prefixKey(prefix, prop)] = isUnitlessNumber[prop];
	  });
	});
	
	/**
	 * Most style properties can be unset by doing .style[prop] = '' but IE8
	 * doesn't like doing that with shorthand properties so for the properties that
	 * IE8 breaks on, which are listed here, we instead unset each of the
	 * individual properties. See http://bugs.jquery.com/ticket/12385.
	 * The 4-value 'clock' properties like margin, padding, border-width seem to
	 * behave without any problems. Curiously, list-style works too without any
	 * special prodding.
	 */
	var shorthandPropertyExpansions = {
	  background: {
	    backgroundAttachment: true,
	    backgroundColor: true,
	    backgroundImage: true,
	    backgroundPositionX: true,
	    backgroundPositionY: true,
	    backgroundRepeat: true
	  },
	  backgroundPosition: {
	    backgroundPositionX: true,
	    backgroundPositionY: true
	  },
	  border: {
	    borderWidth: true,
	    borderStyle: true,
	    borderColor: true
	  },
	  borderBottom: {
	    borderBottomWidth: true,
	    borderBottomStyle: true,
	    borderBottomColor: true
	  },
	  borderLeft: {
	    borderLeftWidth: true,
	    borderLeftStyle: true,
	    borderLeftColor: true
	  },
	  borderRight: {
	    borderRightWidth: true,
	    borderRightStyle: true,
	    borderRightColor: true
	  },
	  borderTop: {
	    borderTopWidth: true,
	    borderTopStyle: true,
	    borderTopColor: true
	  },
	  font: {
	    fontStyle: true,
	    fontVariant: true,
	    fontWeight: true,
	    fontSize: true,
	    lineHeight: true,
	    fontFamily: true
	  },
	  outline: {
	    outlineWidth: true,
	    outlineStyle: true,
	    outlineColor: true
	  }
	};
	
	var CSSProperty = {
	  isUnitlessNumber: isUnitlessNumber,
	  shorthandPropertyExpansions: shorthandPropertyExpansions
	};
	
	module.exports = CSSProperty;

/***/ },
/* 123 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ExecutionEnvironment
	 */
	
	'use strict';
	
	var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
	
	/**
	 * Simple, lightweight module assisting with the detection and context of
	 * Worker. Helps avoid circular dependencies and allows code to reason about
	 * whether or not they are in a Worker, even if they never include the main
	 * `ReactWorker` dependency.
	 */
	var ExecutionEnvironment = {
	
	  canUseDOM: canUseDOM,
	
	  canUseWorkers: typeof Worker !== 'undefined',
	
	  canUseEventListeners: canUseDOM && !!(window.addEventListener || window.attachEvent),
	
	  canUseViewport: canUseDOM && !!window.screen,
	
	  isInWorker: !canUseDOM // For now, this is true - might change in the future.
	
	};
	
	module.exports = ExecutionEnvironment;

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactPerf
	 * @typechecks static-only
	 */
	
	'use strict';
	
	/**
	 * ReactPerf is a general AOP system designed to measure performance. This
	 * module only has the hooks: see ReactDefaultPerf for the analysis tool.
	 */
	var ReactPerf = {
	  /**
	   * Boolean to enable/disable measurement. Set to false by default to prevent
	   * accidental logging and perf loss.
	   */
	  enableMeasure: false,
	
	  /**
	   * Holds onto the measure function in use. By default, don't measure
	   * anything, but we'll override this if we inject a measure function.
	   */
	  storedMeasure: _noMeasure,
	
	  /**
	   * @param {object} object
	   * @param {string} objectName
	   * @param {object<string>} methodNames
	   */
	  measureMethods: function (object, objectName, methodNames) {
	    if (process.env.NODE_ENV !== 'production') {
	      for (var key in methodNames) {
	        if (!methodNames.hasOwnProperty(key)) {
	          continue;
	        }
	        object[key] = ReactPerf.measure(objectName, methodNames[key], object[key]);
	      }
	    }
	  },
	
	  /**
	   * Use this to wrap methods you want to measure. Zero overhead in production.
	   *
	   * @param {string} objName
	   * @param {string} fnName
	   * @param {function} func
	   * @return {function}
	   */
	  measure: function (objName, fnName, func) {
	    if (process.env.NODE_ENV !== 'production') {
	      var measuredFunc = null;
	      var wrapper = function () {
	        if (ReactPerf.enableMeasure) {
	          if (!measuredFunc) {
	            measuredFunc = ReactPerf.storedMeasure(objName, fnName, func);
	          }
	          return measuredFunc.apply(this, arguments);
	        }
	        return func.apply(this, arguments);
	      };
	      wrapper.displayName = objName + '_' + fnName;
	      return wrapper;
	    }
	    return func;
	  },
	
	  injection: {
	    /**
	     * @param {function} measure
	     */
	    injectMeasure: function (measure) {
	      ReactPerf.storedMeasure = measure;
	    }
	  }
	};
	
	/**
	 * Simply passes through the measured function, without measuring it.
	 *
	 * @param {string} objName
	 * @param {string} fnName
	 * @param {function} func
	 * @return {function}
	 */
	function _noMeasure(objName, fnName, func) {
	  return func;
	}
	
	module.exports = ReactPerf;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(50)))

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule camelizeStyleName
	 * @typechecks
	 */
	
	'use strict';
	
	var camelize = __webpack_require__(126);
	
	var msPattern = /^-ms-/;
	
	/**
	 * Camelcases a hyphenated CSS property name, for example:
	 *
	 *   > camelizeStyleName('background-color')
	 *   < "backgroundColor"
	 *   > camelizeStyleName('-moz-transition')
	 *   < "MozTransition"
	 *   > camelizeStyleName('-ms-transition')
	 *   < "msTransition"
	 *
	 * As Andi Smith suggests
	 * (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
	 * is converted to lowercase `ms`.
	 *
	 * @param {string} string
	 * @return {string}
	 */
	function camelizeStyleName(string) {
	  return camelize(string.replace(msPattern, 'ms-'));
	}
	
	module.exports = camelizeStyleName;

/***/ },
/* 126 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule camelize
	 * @typechecks
	 */
	
	"use strict";
	
	var _hyphenPattern = /-(.)/g;
	
	/**
	 * Camelcases a hyphenated string, for example:
	 *
	 *   > camelize('background-color')
	 *   < "backgroundColor"
	 *
	 * @param {string} string
	 * @return {string}
	 */
	function camelize(string) {
	  return string.replace(_hyphenPattern, function (_, character) {
	    return character.toUpperCase();
	  });
	}
	
	module.exports = camelize;

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule dangerousStyleValue
	 * @typechecks static-only
	 */
	
	'use strict';
	
	var CSSProperty = __webpack_require__(122);
	
	var isUnitlessNumber = CSSProperty.isUnitlessNumber;
	
	/**
	 * Convert a value into the proper css writable value. The style name `name`
	 * should be logical (no hyphens), as specified
	 * in `CSSProperty.isUnitlessNumber`.
	 *
	 * @param {string} name CSS property name such as `topMargin`.
	 * @param {*} value CSS property value such as `10px`.
	 * @return {string} Normalized style value with dimensions applied.
	 */
	function dangerousStyleValue(name, value) {
	  // Note that we've removed escapeTextForBrowser() calls here since the
	  // whole string will be escaped when the attribute is injected into
	  // the markup. If you provide unsafe user data here they can inject
	  // arbitrary CSS which may be problematic (I couldn't repro this):
	  // https://www.owasp.org/index.php/XSS_Filter_Evasion_Cheat_Sheet
	  // http://www.thespanner.co.uk/2007/11/26/ultimate-xss-css-injection/
	  // This is not an XSS hole but instead a potential CSS injection issue
	  // which has lead to a greater discussion about how we're going to
	  // trust URLs moving forward. See #2115901
	
	  var isEmpty = value == null || typeof value === 'boolean' || value === '';
	  if (isEmpty) {
	    return '';
	  }
	
	  var isNonNumeric = isNaN(value);
	  if (isNonNumeric || value === 0 || isUnitlessNumber.hasOwnProperty(name) && isUnitlessNumber[name]) {
	    return '' + value; // cast to string
	  }
	
	  if (typeof value === 'string') {
	    value = value.trim();
	  }
	  return value + 'px';
	}
	
	module.exports = dangerousStyleValue;

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule hyphenateStyleName
	 * @typechecks
	 */
	
	'use strict';
	
	var hyphenate = __webpack_require__(129);
	
	var msPattern = /^ms-/;
	
	/**
	 * Hyphenates a camelcased CSS property name, for example:
	 *
	 *   > hyphenateStyleName('backgroundColor')
	 *   < "background-color"
	 *   > hyphenateStyleName('MozTransition')
	 *   < "-moz-transition"
	 *   > hyphenateStyleName('msTransition')
	 *   < "-ms-transition"
	 *
	 * As Modernizr suggests (http://modernizr.com/docs/#prefixed), an `ms` prefix
	 * is converted to `-ms-`.
	 *
	 * @param {string} string
	 * @return {string}
	 */
	function hyphenateStyleName(string) {
	  return hyphenate(string).replace(msPattern, '-ms-');
	}
	
	module.exports = hyphenateStyleName;

/***/ },
/* 129 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule hyphenate
	 * @typechecks
	 */
	
	'use strict';
	
	var _uppercasePattern = /([A-Z])/g;
	
	/**
	 * Hyphenates a camelcased string, for example:
	 *
	 *   > hyphenate('backgroundColor')
	 *   < "background-color"
	 *
	 * For CSS style names, use `hyphenateStyleName` instead which works properly
	 * with all vendor prefixes, including `ms`.
	 *
	 * @param {string} string
	 * @return {string}
	 */
	function hyphenate(string) {
	  return string.replace(_uppercasePattern, '-$1').toLowerCase();
	}
	
	module.exports = hyphenate;

/***/ },
/* 130 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule memoizeStringOnly
	 * @typechecks static-only
	 */
	
	'use strict';
	
	/**
	 * Memoizes the return value of a function that accepts one string argument.
	 *
	 * @param {function} callback
	 * @return {function}
	 */
	function memoizeStringOnly(callback) {
	  var cache = {};
	  return function (string) {
	    if (!cache.hasOwnProperty(string)) {
	      cache[string] = callback.call(this, string);
	    }
	    return cache[string];
	  };
	}
	
	module.exports = memoizeStringOnly;

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule warning
	 */
	
	'use strict';
	
	var emptyFunction = __webpack_require__(132);
	
	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */
	
	var warning = emptyFunction;
	
	if (process.env.NODE_ENV !== 'production') {
	  warning = function (condition, format) {
	    for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	      args[_key - 2] = arguments[_key];
	    }
	
	    if (format === undefined) {
	      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
	    }
	
	    if (format.indexOf('Failed Composite propType: ') === 0) {
	      return; // Ignore CompositeComponent proptype check.
	    }
	
	    if (!condition) {
	      var argIndex = 0;
	      var message = 'Warning: ' + format.replace(/%s/g, function () {
	        return args[argIndex++];
	      });
	      if (typeof console !== 'undefined') {
	        console.error(message);
	      }
	      try {
	        // --- Welcome to debugging React ---
	        // This error was thrown as a convenience so that you can use this stack
	        // to find the callsite that caused this warning to fire.
	        throw new Error(message);
	      } catch (x) {}
	    }
	  };
	}
	
	module.exports = warning;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(50)))

/***/ },
/* 132 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule emptyFunction
	 */
	
	"use strict";
	
	function makeEmptyFunction(arg) {
	  return function () {
	    return arg;
	  };
	}
	
	/**
	 * This function accepts and discards inputs; it has no side effects. This is
	 * primarily useful idiomatically for overridable function endpoints which
	 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
	 */
	function emptyFunction() {}
	
	emptyFunction.thatReturns = makeEmptyFunction;
	emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
	emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
	emptyFunction.thatReturnsNull = makeEmptyFunction(null);
	emptyFunction.thatReturnsThis = function () {
	  return this;
	};
	emptyFunction.thatReturnsArgument = function (arg) {
	  return arg;
	};
	
	module.exports = emptyFunction;

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = exports.POSITIONS = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _class, _temp;
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(5);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _defaultProps = __webpack_require__(92);
	
	var _defaultProps2 = _interopRequireDefault(_defaultProps);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var POSITIONS = exports.POSITIONS = ['top left', 'top center', 'top right', 'right center', 'bottom right', 'bottom center', 'bottom left', 'left center'];
	
	/**
	 * Popup component without animation transitions
	 */
	var PopupElement = (_temp = _class = function (_React$Component) {
	    _inherits(PopupElement, _React$Component);
	
	    function PopupElement() {
	        _classCallCheck(this, PopupElement);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(PopupElement).apply(this, arguments));
	    }
	
	    _createClass(PopupElement, [{
	        key: 'render',
	        value: function render() {
	            /* eslint-disable no-use-before-define */
	            var _props = this.props;
	            var className = _props.className;
	            var component = _props.component;
	
	            var other = _objectWithoutProperties(_props, ['className', 'component']);
	            /* eslint-enable no-use-before-define */
	            // other.style = Object.assign({}, style, pStyle);
	
	            if (this.props.component === PopupElement) {
	                component = 'div';
	            } else {
	                component = this.props.component;
	            }
	
	            // Save ref to HTML element
	            other.ref = 'popup';
	            other.className = (0, _classnames2.default)(className, this.getClasses());
	
	            return _react2.default.createElement(component, other, this.props.children);
	        }
	    }, {
	        key: 'getClasses',
	        value: function getClasses() {
	            var classes = {
	                ui: this.props.defaultClasses,
	                popup: this.props.defaultClasses,
	                basic: this.props.basic,
	                fluid: this.props.fluid,
	                flowing: this.props.flowing,
	                inverted: this.props.inverted,
	                wide: this.props.wide,
	                visible: true
	            };
	
	            if (this.props.wide) {
	                // very wide
	                if (typeof this.props.wide === 'string') {
	                    classes['very wide'] = true;
	                } else {
	                    classes['wide'] = true;
	                }
	            }
	
	            if (this.props.size) {
	                classes[this.props.size] = true;
	            }
	
	            var position = this.props.position.split(' ');
	
	            position.forEach(function (pos) {
	                classes[pos] = true;
	            });
	
	            return classes;
	        }
	    }]);
	
	    return PopupElement;
	}(_react2.default.Component), _class.propTypes = _extends({}, _defaultProps2.default.propTypes, {
	    /**
	     * Basic popup variation
	     */
	    basic: _react2.default.PropTypes.bool,
	    /**
	     * Fluid popup
	     */
	    fluid: _react2.default.PropTypes.bool,
	    /**
	     * No maximum width and continue to flow to fit its content
	     */
	    flowing: _react2.default.PropTypes.bool,
	    /**
	     * Inverted popup
	     */
	    inverted: _react2.default.PropTypes.bool,
	    /**
	     * Popup size
	     */
	    size: _react2.default.PropTypes.oneOf(['mini', 'tiny', 'small', 'large', 'huge']),
	    /**
	     * Make content of popup wide
	     */
	    wide: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.bool, _react2.default.PropTypes.string]),
	    /**
	     * Popup position
	     */
	    position: _react2.default.PropTypes.oneOf(['top left', 'top center', 'top right', 'right center', 'bottom right', 'bottom center', 'bottom left', 'left center'])
	}), _class.defaultProps = _extends({}, _defaultProps2.default.defaultProps, {
	    position: 'top left'
	}), _temp);
	exports.default = PopupElement;

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _class, _temp;
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(5);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Bar = (_temp = _class = function (_React$Component) {
	    _inherits(Bar, _React$Component);
	
	    function Bar() {
	        _classCallCheck(this, Bar);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Bar).apply(this, arguments));
	    }
	
	    _createClass(Bar, [{
	        key: 'renderProgress',
	        value: function renderProgress() {
	            return _react2.default.createElement(
	                'div',
	                {
	                    className: 'progress',
	                    key: 'progressPercentage'
	                },
	                typeof this.props.style.width === 'string' ? parseInt(this.props.style.width) + '%' : this.props.progress + '%'
	            );
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            /* eslint-disable no-use-before-define */
	            var _props = this.props;
	            var defaultClasses = _props.defaultClasses;
	            var progress = _props.progress;
	            var showPercentage = _props.showPercentage;
	            var component = _props.component;
	
	            var other = _objectWithoutProperties(_props, ['defaultClasses', 'progress', 'showPercentage', 'component']);
	            /* eslint-enable no-use-before-define */
	
	            // add classnames
	
	
	            other.className = (0, _classnames2.default)(this.props.className, this.getClasses());
	            other.style = { width: progress + '%', transitionDuration: this.props.duration + 'ms' };
	
	            return _react2.default.createElement(this.props.component, other, this.props.showPercentage ? this.renderProgress() : []);
	        }
	    }, {
	        key: 'getClasses',
	        value: function getClasses() {
	            return {
	                bar: true
	            };
	        }
	    }]);
	
	    return Bar;
	}(_react2.default.Component), _class.propTypes = {
	    children: _react2.default.PropTypes.node,
	    className: _react2.default.PropTypes.any,
	    component: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.element, _react2.default.PropTypes.string]),
	    defaultClasses: _react2.default.PropTypes.bool,
	    duration: _react2.default.PropTypes.number,
	    progress: _react2.default.PropTypes.number,
	    showPercentage: _react2.default.PropTypes.bool,
	    style: _react2.default.PropTypes.object
	}, _class.defaultProps = {
	    component: 'div',
	    defaultClasses: true
	}, _temp);
	exports.default = Bar;

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _class, _temp;
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(5);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _modules = __webpack_require__(41);
	
	var _utilities = __webpack_require__(4);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var validProps = {
	    attached: ['top', 'bottom']
	};
	
	var Progress = (_temp = _class = function (_React$Component) {
	    _inherits(Progress, _React$Component);
	
	    function Progress() {
	        _classCallCheck(this, Progress);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Progress).apply(this, arguments));
	    }
	
	    _createClass(Progress, [{
	        key: 'getChildContext',
	        value: function getChildContext() {
	            return {
	                isProgressChild: true
	            };
	        }
	    }, {
	        key: 'renderBar',
	        value: function renderBar() {
	            /* eslint-disable no-use-before-define */
	            var _props = this.props;
	            var active = _props.active;
	            var attached = _props.attached;
	            var children = _props.children;
	            var color = _props.color;
	            var component = _props.component;
	            var defaultClasses = _props.defaultClasses;
	            var disabled = _props.disabled;
	            var error = _props.error;
	            var indicating = _props.indicating;
	            var inverted = _props.inverted;
	            var size = _props.size;
	            var success = _props.success;
	            var warning = _props.warning;
	
	            var other = _objectWithoutProperties(_props, ['active', 'attached', 'children', 'color', 'component', 'defaultClasses', 'disabled', 'error', 'indicating', 'inverted', 'size', 'success', 'warning']);
	            /* eslint-enable no-use-before-define */
	
	
	            other.progress = this.getProgress(other.progress);
	
	            return _react2.default.createElement(_modules.Bar, _extends({
	                key: 'progressBar'
	            }, other));
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            /* eslint-disable no-use-before-define */
	            var _props2 = this.props;
	            var active = _props2.active;
	            var attached = _props2.attached;
	            var children = _props2.children;
	            var color = _props2.color;
	            var component = _props2.component;
	            var defaultClasses = _props2.defaultClasses;
	            var disabled = _props2.disabled;
	            var duration = _props2.duration;
	            var error = _props2.error;
	            var indicating = _props2.indicating;
	            var inverted = _props2.inverted;
	            var size = _props2.size;
	            var success = _props2.success;
	            var warning = _props2.warning;
	            var progress = _props2.progress;
	
	            var other = _objectWithoutProperties(_props2, ['active', 'attached', 'children', 'color', 'component', 'defaultClasses', 'disabled', 'duration', 'error', 'indicating', 'inverted', 'size', 'success', 'warning', 'progress']);
	            /* eslint-enable no-use-before-define */
	
	            // add classnames
	
	
	            other.className = (0, _classnames2.default)(this.props.className, this.getClasses());
	
	            return _react2.default.createElement(this.props.component, other, [this.renderBar(), this.props.children]);
	        }
	    }, {
	        key: 'getClasses',
	        value: function getClasses() {
	            var classes = {
	                // default
	                ui: this.props.defaultClasses,
	
	                // position based props
	                attached: this.props.attached,
	
	                // types
	
	                // states
	                active: this.props.active,
	                disabled: this.props.disabled,
	                error: this.props.error,
	                success: this.props.success,
	                warning: this.props.warning,
	
	                // variations
	                indicating: this.props.indicating,
	                inverted: this.props.inverted,
	
	                // component
	                progress: this.props.defaultClasses
	            };
	
	            // string types
	            classes[this.props.color] = !!this.props.color;
	            classes[this.props.size] = !!this.props.size;
	
	            return (0, _utilities.validateClassProps)(classes, this.props, validProps);
	        }
	    }, {
	        key: 'getProgress',
	        value: function getProgress(progress) {
	            if (progress > 100) {
	                return 100;
	            } else if (progress < 0) {
	                return 0;
	            } else {
	                return progress;
	            }
	        }
	    }]);
	
	    return Progress;
	}(_react2.default.Component), _class.propTypes = {
	    active: _react2.default.PropTypes.bool,
	    attached: _react2.default.PropTypes.oneOf(['top', 'bottom']),
	    children: _react2.default.PropTypes.node,
	    className: _react2.default.PropTypes.any,
	    color: _react2.default.PropTypes.string,
	    component: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.element, _react2.default.PropTypes.string]),
	    defaultClasses: _react2.default.PropTypes.bool,
	    disabled: _react2.default.PropTypes.bool,
	    duration: _react2.default.PropTypes.number,
	    error: _react2.default.PropTypes.bool,
	    indicating: _react2.default.PropTypes.bool,
	    inverted: _react2.default.PropTypes.bool,
	    progress: _react2.default.PropTypes.number,
	    size: _react2.default.PropTypes.string,
	    success: _react2.default.PropTypes.bool,
	    warning: _react2.default.PropTypes.bool
	}, _class.childContextTypes = {
	    isProgressChild: _react2.default.PropTypes.bool
	}, _class.defaultProps = {
	    component: 'div',
	    defaultClasses: true,
	    duration: 300
	}, _temp);
	exports.default = Progress;

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _class, _temp;
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(5);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Rating = (_temp = _class = function (_React$Component) {
	    _inherits(Rating, _React$Component);
	
	    function Rating(props) {
	        _classCallCheck(this, Rating);
	
	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Rating).call(this, props));
	
	        _this.state = {
	            active: null
	        };
	        return _this;
	    }
	
	    _createClass(Rating, [{
	        key: 'onIconClick',
	        value: function onIconClick(index) {
	            // no need to reset it when it hasn't changed
	            if (index === this.state.active) return;
	            this.setState({
	                active: index
	            });
	        }
	    }, {
	        key: 'renderChildren',
	        value: function renderChildren() {
	            var children = [];
	            var classes = {
	                icon: true,
	                active: false
	            };
	
	            for (var i = 0; i < this.props.max; i++) {
	                if (this.state.active !== null && this.state.active >= i) {
	                    classes.active = true;
	                } else {
	                    classes.active = false;
	                }
	
	                children.push(_react2.default.createElement('i', {
	                    className: (0, _classnames2.default)(classes),
	                    key: i,
	                    onClick: this.onIconClick.bind(this, i) }));
	            }
	
	            return children;
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            /* eslint-disable no-use-before-define */
	            var _props = this.props;
	            var defaultClasses = _props.defaultClasses;
	            var heart = _props.heart;
	            var max = _props.max;
	            var size = _props.size;
	            var star = _props.star;
	
	            var other = _objectWithoutProperties(_props, ['defaultClasses', 'heart', 'max', 'size', 'star']);
	            /* eslint-enable no-use-before-define */
	
	            other.className = (0, _classnames2.default)(this.props.className, this.getClasses());
	
	            return _react2.default.createElement(this.props.component, other, this.renderChildren());
	        }
	    }, {
	        key: 'getClasses',
	        value: function getClasses() {
	            var classes = {
	                ui: this.props.defaultClasses,
	
	                size: _react2.default.PropTypes.string,
	
	                // variations
	                star: this.props.star,
	                heart: this.props.heart,
	
	                rating: this.props.defaultClasses
	            };
	
	            classes[this.props.size] = !!this.props.size;
	            return classes;
	        }
	    }]);
	
	    return Rating;
	}(_react2.default.Component), _class.propTypes = {
	    children: _react2.default.PropTypes.node,
	    className: _react2.default.PropTypes.any,
	    component: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.element, _react2.default.PropTypes.string]),
	    defaultClasses: _react2.default.PropTypes.bool,
	    heart: _react2.default.PropTypes.bool,
	    max: _react2.default.PropTypes.number,
	    size: _react2.default.PropTypes.string,
	    star: _react2.default.PropTypes.bool
	}, _class.defaultProps = {
	    children: null,
	    component: 'div',
	    defaultClasses: true,
	    max: 5
	}, _temp);
	exports.default = Rating;

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _class, _temp;
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _elements = __webpack_require__(1);
	
	var _classnames = __webpack_require__(5);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Results = (_temp = _class = function (_React$Component) {
	    _inherits(Results, _React$Component);
	
	    function Results() {
	        _classCallCheck(this, Results);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Results).apply(this, arguments));
	    }
	
	    _createClass(Results, [{
	        key: 'onClick',
	        value: function onClick(child, e) {
	            this.props.onSearchClick(e, child);
	        }
	    }, {
	        key: 'renderChildren',
	        value: function renderChildren() {
	            if (this.props.results.length === 0) {
	                return this.renderEmpty();
	            } else if (Array.isArray(this.props.results)) {
	                return this.renderArray();
	            } else if (_typeof(this.props.results) === 'object') {
	                return this.renderObject();
	            } else {
	                return false;
	            }
	        }
	    }, {
	        key: 'renderArray',
	        value: function renderArray() {
	            var _this2 = this;
	
	            var results = arguments[0] || this.props.results;
	
	            return results.map(function (child) {
	                var description = null;
	                var title = (typeof child === 'undefined' ? 'undefined' : _typeof(child)) === 'object' ? child.title : child;
	
	                // use title and description
	                if ((typeof child === 'undefined' ? 'undefined' : _typeof(child)) === 'object' && child.description) {
	                    description = _react2.default.createElement(
	                        'div',
	                        { className: 'description' },
	                        child.description
	                    );
	                }
	
	                return _react2.default.createElement(
	                    'a',
	                    { className: 'result',
	                        onMouseDown: _this2.onClick.bind(_this2, title)
	                    },
	                    _react2.default.createElement(
	                        _elements.Content,
	                        null,
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'title' },
	                            title
	                        ),
	                        description
	                    )
	                );
	            });
	        }
	    }, {
	        key: 'renderObject',
	        value: function renderObject() {
	            var _this3 = this;
	
	            var children = [];
	
	            Object.keys(this.props.results).map(function (child) {
	                children.push(_react2.default.createElement(
	                    'div',
	                    { className: 'category' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'name' },
	                        child
	                    ),
	                    _this3.renderArray(_this3.props.results[child])
	                ));
	            });
	
	            return children;
	        }
	    }, {
	        key: 'renderEmpty',
	        value: function renderEmpty() {
	            return _react2.default.createElement(
	                'div',
	                { className: 'message empty' },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'header' },
	                    this.props.emptyHeader
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'description' },
	                    this.props.emptyMessage
	                )
	            );
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            /* eslint-disable no-use-before-define */
	            var _props = this.props;
	            var children = _props.children;
	            var className = _props.className;
	            var component = _props.component;
	            var defaultClasses = _props.defaultClasses;
	            var emptyHeader = _props.emptyHeader;
	            var emptyMessage = _props.emptyMessage;
	            var onSearchClick = _props.onSearchClick;
	            var results = _props.results;
	            var search = _props.search;
	            var style = _props.style;
	
	            var other = _objectWithoutProperties(_props, ['children', 'className', 'component', 'defaultClasses', 'emptyHeader', 'emptyMessage', 'onSearchClick', 'results', 'search', 'style']);
	            /* eslint-enable no-use-before-define */
	
	            other.className = (0, _classnames2.default)(this.props.className, this.getClasses());
	            other.style = this.props.style;
	
	            return _react2.default.createElement(this.props.component, other, this.renderChildren());
	        }
	    }, {
	        key: 'getClasses',
	        value: function getClasses() {
	            return {
	                results: this.props.defaultClasses,
	
	                transition: this.props.defaultClasses,
	                visible: this.props.defaultClasses
	            };
	        }
	    }]);
	
	    return Results;
	}(_react2.default.Component), _class.propTypes = {
	    children: _react2.default.PropTypes.node,
	    className: _react2.default.PropTypes.any,
	    component: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.func, _react2.default.PropTypes.string]),
	    defaultClasses: _react2.default.PropTypes.bool,
	    emptyHeader: _react2.default.PropTypes.string,
	    emptyMessage: _react2.default.PropTypes.string,
	    onSearchClick: _react2.default.PropTypes.func,
	    results: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.array, _react2.default.PropTypes.object]),
	    search: _react2.default.PropTypes.string,
	    style: _react2.default.PropTypes.object
	}, _class.defaultProps = {
	    component: 'div',
	    defaultClasses: true,
	    emptyHeader: 'No Results',
	    emptyMessage: 'Your search returned no results'
	}, _temp);
	exports.default = Results;

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _class, _temp;
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _elements = __webpack_require__(1);
	
	var _reactMotionUiPack = __webpack_require__(59);
	
	var _reactMotionUiPack2 = _interopRequireDefault(_reactMotionUiPack);
	
	var _results = __webpack_require__(137);
	
	var _results2 = _interopRequireDefault(_results);
	
	var _classnames = __webpack_require__(5);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/*
	3 support results types:
	
	{
	    title: 'test',
	    description: 'testing'
	}
	
	{
	    animal: ['cat', 'dog']
	}
	
	['test', 'test']
	*/
	var Search = (_temp = _class = function (_React$Component) {
	    _inherits(Search, _React$Component);
	
	    function Search(props) {
	        _classCallCheck(this, Search);
	
	        // see shouldComponentUpdate
	
	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Search).call(this, props));
	
	        _this.results = false;
	
	        _this.state = {
	            focus: false
	        };
	        return _this;
	    }
	
	    _createClass(Search, [{
	        key: 'shouldComponentUpdate',
	        value: function shouldComponentUpdate(props, state) {
	            // if the results are identical, don't rerender
	            // if the new state is inactive, we may be trying to blur
	            if (this.props.results === props.results && state.active) {
	                return false;
	            }
	
	            // if the search box is empty, don't allow re-rendering of results
	            // while the box animates closed
	            if (this.searchInput && this.searchInput.value === '') {
	                this.results = this.props.results;
	            } else {
	                this.results = false;
	            }
	
	            return true;
	        }
	    }, {
	        key: 'onBlur',
	        value: function onBlur() {
	            this.setState({
	                focus: false
	            });
	        }
	    }, {
	        key: 'onChange',
	        value: function onChange(e) {
	            if (e.target.value === '') {
	                this.setState({
	                    focus: false
	                });
	            } else {
	                this.setState({
	                    focus: true
	                });
	                this.props.onChange(e);
	            }
	        }
	    }, {
	        key: 'onFocus',
	        value: function onFocus() {
	            this.setState({
	                focus: true
	            });
	        }
	    }, {
	        key: 'onSearchClick',
	        value: function onSearchClick(e, child) {
	            this.searchInput.value = child;
	
	            this.props.onSearchClick(e, child);
	        }
	    }, {
	        key: 'renderChildren',
	        value: function renderChildren() {
	            if (this.props.icon || this.props.loading) {
	                return this.renderIconInput();
	            } else {
	                return this.renderInput();
	            }
	        }
	    }, {
	        key: 'renderIconInput',
	        value: function renderIconInput() {
	            return _react2.default.createElement(
	                'div',
	                { className: 'ui icon input' },
	                this.renderInput(),
	                _react2.default.createElement(_elements.Icon, { name: this.props.icon || 'search' })
	            );
	        }
	    }, {
	        key: 'renderInput',
	        value: function renderInput() {
	            var _this2 = this;
	
	            return _react2.default.createElement('input', { className: 'prompt',
	                key: 'searchPrompt',
	                onBlur: this.onBlur.bind(this),
	                onChange: this.onChange.bind(this),
	                onFocus: this.onFocus.bind(this),
	                placeholder: this.props.placeholder,
	                ref: function ref(_ref) {
	                    return _this2.searchInput = _ref;
	                },
	                type: 'text' });
	        }
	    }, {
	        key: 'renderResults',
	        value: function renderResults() {
	            var props = {
	                emptyHeader: this.props.emptyHeader,
	                emptyMessage: this.props.emptyMessage,
	                key: 'searchResults',
	                onSearchClick: this.onSearchClick.bind(this),
	                results: this.results || this.props.results,
	                search: this.searchInput ? this.searchInput.value : ''
	            };
	
	            return _react2.default.createElement(
	                _reactMotionUiPack2.default,
	                { component: false,
	                    enter: this.props.enterAnimation,
	                    leave: this.props.leaveAnimation
	                },
	                this.state.focus && this.searchInput.value !== '' && _react2.default.createElement(_results2.default, props)
	            );
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            /* eslint-disable no-use-before-define */
	            var _props = this.props;
	            var children = _props.children;
	            var className = _props.className;
	            var component = _props.component;
	            var defaultClasses = _props.defaultClasses;
	            var emptyHeader = _props.emptyHeader;
	            var emptyMessage = _props.emptyMessage;
	            var enterAnimation = _props.enterAnimation;
	            var icon = _props.icon;
	            var leaveAnimation = _props.leaveAnimation;
	            var loading = _props.loading;
	            var onChange = _props.onChange;
	            var onSearchClick = _props.onSearchClick;
	            var placeholder = _props.placeholder;
	            var results = _props.results;
	
	            var other = _objectWithoutProperties(_props, ['children', 'className', 'component', 'defaultClasses', 'emptyHeader', 'emptyMessage', 'enterAnimation', 'icon', 'leaveAnimation', 'loading', 'onChange', 'onSearchClick', 'placeholder', 'results']);
	            /* eslint-enable no-use-before-define */
	
	            other.className = (0, _classnames2.default)(this.props.className, this.getClasses());
	
	            return _react2.default.createElement(this.props.component, other, [this.renderChildren(), this.renderResults()]);
	        }
	    }, {
	        key: 'getClasses',
	        value: function getClasses() {
	            return {
	                ui: this.props.defaultClasses,
	
	                focus: this.state.focus,
	
	                category: !Array.isArray(this.props.results),
	
	                search: this.props.defaultClasses
	            };
	        }
	    }]);
	
	    return Search;
	}(_react2.default.Component), _class.propTypes = {
	    children: _react2.default.PropTypes.node,
	    className: _react2.default.PropTypes.any,
	    component: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.func, _react2.default.PropTypes.string]),
	    defaultClasses: _react2.default.PropTypes.bool,
	    emptyHeader: _react2.default.PropTypes.string,
	    emptyMessage: _react2.default.PropTypes.string,
	    enterAnimation: _react2.default.PropTypes.object,
	    icon: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.bool]),
	    leaveAnimation: _react2.default.PropTypes.object,
	    loading: _react2.default.PropTypes.bool,
	    onChange: _react2.default.PropTypes.func.isRequired,
	    onSearchClick: _react2.default.PropTypes.func,
	    placeholder: _react2.default.PropTypes.string,
	    results: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.array, _react2.default.PropTypes.object])
	}, _class.defaultProps = {
	    component: 'div',
	    defaultClasses: true,
	    enterAnimation: {
	        opacity: 1,
	        scale: 1
	    },
	    leaveAnimation: {
	        opacity: 0,
	        scale: 0
	    },
	    onSearchClick: function noop() {},
	    placeholder: 'Search...'
	}, _temp);
	exports.default = Search;

/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _class, _temp;
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _tabcontent = __webpack_require__(140);
	
	var _tabcontent2 = _interopRequireDefault(_tabcontent);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Tab = (_temp = _class = function (_React$Component) {
	    _inherits(Tab, _React$Component);
	
	    function Tab() {
	        _classCallCheck(this, Tab);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Tab).apply(this, arguments));
	    }
	
	    _createClass(Tab, [{
	        key: 'render',
	        value: function render() {
	            /* eslint-disable no-use-before-define */
	            var _props = this.props;
	            var children = _props.children;
	            var header = _props.header;
	
	            var other = _objectWithoutProperties(_props, ['children', 'header']);
	            /* eslint-enable no-use-before-define */
	
	            return _react2.default.createElement(
	                _tabcontent2.default,
	                other,
	                this.props.children
	            );
	        }
	    }]);
	
	    return Tab;
	}(_react2.default.Component), _class.propTypes = {
	    children: _react2.default.PropTypes.node,
	    component: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.element, _react2.default.PropTypes.string]),
	    header: _react2.default.PropTypes.string.isRequired
	}, _class.defaultProps = {
	    component: 'div'
	}, _temp);
	exports.default = Tab;

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _class, _temp;
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(5);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var TabContent = (_temp = _class = function (_React$Component) {
	    _inherits(TabContent, _React$Component);
	
	    function TabContent() {
	        _classCallCheck(this, TabContent);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(TabContent).apply(this, arguments));
	    }
	
	    _createClass(TabContent, [{
	        key: 'render',
	        value: function render() {
	            /* eslint-disable no-use-before-define */
	            var _props = this.props;
	            var active = _props.active;
	            var children = _props.children;
	            var className = _props.className;
	            var component = _props.component;
	            var defaultClasses = _props.defaultClasses;
	            var loading = _props.loading;
	            var segment = _props.segment;
	            var type = _props.type;
	
	            var other = _objectWithoutProperties(_props, ['active', 'children', 'className', 'component', 'defaultClasses', 'loading', 'segment', 'type']);
	            /* eslint-enable no-use-before-define */
	
	            other.className = (0, _classnames2.default)(this.props.className, this.getClasses());
	
	            return _react2.default.createElement(this.props.component, other, this.props.children);
	        }
	    }, {
	        key: 'getClasses',
	        value: function getClasses() {
	            return {
	                ui: this.props.defaultClasses,
	
	                // active
	                active: this.props.active,
	
	                // states
	                loading: this.props.loading && this.props.active,
	
	                // position
	                'bottom attached': this.props.type === 'tab',
	
	                tab: this.props.defaultClasses,
	                segment: this.props.defaultClasses && this.props.segment
	            };
	        }
	    }]);
	
	    return TabContent;
	}(_react2.default.Component), _class.propTypes = {
	    active: _react2.default.PropTypes.bool,
	    children: _react2.default.PropTypes.node,
	    className: _react2.default.PropTypes.any,
	    component: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.func, _react2.default.PropTypes.string]),
	    defaultClasses: _react2.default.PropTypes.bool,
	    loading: _react2.default.PropTypes.bool,
	    position: _react2.default.PropTypes.oneOf(['top', 'bottom']),
	    segment: _react2.default.PropTypes.bool,
	    type: _react2.default.PropTypes.oneOf(['tab', 'menu', 'pill'])
	}, _class.defaultProps = {
	    component: 'div',
	    defaultClasses: true,
	    position: 'bottom',
	    segment: true
	}, _temp);
	exports.default = TabContent;

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _class, _temp;
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _tab = __webpack_require__(139);
	
	var _tab2 = _interopRequireDefault(_tab);
	
	var _tabtitle = __webpack_require__(142);
	
	var _tabtitle2 = _interopRequireDefault(_tabtitle);
	
	var _views = __webpack_require__(101);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Tabs = (_temp = _class = function (_React$Component) {
	    _inherits(Tabs, _React$Component);
	
	    function Tabs(props) {
	        _classCallCheck(this, Tabs);
	
	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Tabs).call(this, props));
	
	        _this.state = {
	            active: 0
	        };
	        return _this;
	    }
	
	    _createClass(Tabs, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this.setActiveChild();
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps() {
	            this.setActiveChild();
	        }
	    }, {
	        key: 'onItemClick',
	        value: function onItemClick(index) {
	            this.setState({
	                active: index
	            });
	        }
	    }, {
	        key: 'renderChildren',
	        value: function renderChildren() {
	            var _this2 = this;
	
	            return _react2.default.Children.map(this.props.children, function (child, index) {
	                if (child.type === _tab2.default) {
	                    return _react2.default.cloneElement(child, {
	                        active: _this2.state.active === index,
	                        type: _this2.props.type
	                    }, child.props.children);
	                }
	            });
	        }
	    }, {
	        key: 'renderTitles',
	        value: function renderTitles() {
	            var _this3 = this;
	
	            var tabs = [];
	
	            _react2.default.Children.forEach(this.props.children, function (child, index) {
	                if (child.type == _tab2.default) {
	                    var props = {};
	
	                    props.active = _this3.state.active === index;
	                    props.key = index;
	                    props.onClick = _this3.onItemClick.bind(_this3, index);
	
	                    tabs.push(_react2.default.createElement(_views.Item, props, child.props.header));
	                }
	            });
	
	            return _react2.default.createElement(
	                _tabtitle2.default,
	                {
	                    key: 'titles',
	                    type: this.props.type
	                },
	                tabs
	            );
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            /* eslint-disable no-use-before-define */
	            var _props = this.props;
	            var children = _props.children;
	            var className = _props.className;
	            var component = _props.component;
	            var defaultClasses = _props.defaultClasses;
	            var position = _props.position;
	            var type = _props.type;
	
	            var other = _objectWithoutProperties(_props, ['children', 'className', 'component', 'defaultClasses', 'position', 'type']);
	            /* eslint-enable no-use-before-define */
	
	            return _react2.default.createElement(this.props.component, other, [this.renderTitles(), this.renderChildren()]);
	        }
	    }, {
	        key: 'setActiveChild',
	        value: function setActiveChild() {
	            var _this4 = this;
	
	            _react2.default.Children.forEach(this.props.children, function (child, index) {
	                if (child.type === _tab2.default && child.props.active) {
	                    _this4.setState({
	                        active: index
	                    });
	                }
	            });
	        }
	    }]);
	
	    return Tabs;
	}(_react2.default.Component), _class.propTypes = {
	    children: _react2.default.PropTypes.node,
	    className: _react2.default.PropTypes.any,
	    component: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.func, _react2.default.PropTypes.string]),
	    defaultClasses: _react2.default.PropTypes.bool,
	    position: _react2.default.PropTypes.oneOf(['top', 'bottom']),
	    type: _react2.default.PropTypes.oneOf(['tab', 'menu', 'pill'])
	}, _class.defaultProps = {
	    component: 'div',
	    type: 'tab'
	}, _temp);
	exports.default = Tabs;

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _class, _temp;
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(5);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var TabTitle = (_temp = _class = function (_React$Component) {
	    _inherits(TabTitle, _React$Component);
	
	    function TabTitle() {
	        _classCallCheck(this, TabTitle);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(TabTitle).apply(this, arguments));
	    }
	
	    _createClass(TabTitle, [{
	        key: 'render',
	        value: function render() {
	            /* eslint-disable no-use-before-define */
	            var _props = this.props;
	            var children = _props.children;
	            var className = _props.className;
	            var component = _props.component;
	            var defaultClasses = _props.defaultClasses;
	            var position = _props.position;
	            var title = _props.title;
	            var type = _props.type;
	
	            var other = _objectWithoutProperties(_props, ['children', 'className', 'component', 'defaultClasses', 'position', 'title', 'type']);
	            /* eslint-enable no-use-before-define */
	
	            other.className = (0, _classnames2.default)(this.props.className, this.getClasses());
	
	            return _react2.default.createElement(this.props.component, other, this.props.children);
	        }
	    }, {
	        key: 'getClasses',
	        value: function getClasses() {
	            return {
	                ui: this.props.defaultClasses,
	
	                // position
	                'top attached': this.props.type === 'tab',
	
	                pointing: this.props.type == 'menu',
	                'secondary menu': this.props.type == 'pill' || this.props.type == 'menu',
	                'tabular menu': this.props.type == 'tab'
	            };
	        }
	    }]);
	
	    return TabTitle;
	}(_react2.default.Component), _class.propTypes = {
	    children: _react2.default.PropTypes.node,
	    className: _react2.default.PropTypes.any,
	    component: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.func, _react2.default.PropTypes.string]),
	    defaultClasses: _react2.default.PropTypes.bool,
	    position: _react2.default.PropTypes.oneOf(['top', 'bottom']),
	    title: _react2.default.PropTypes.string,
	    type: _react2.default.PropTypes.oneOf(['tab', 'menu', 'pill'])
	}, _class.defaultProps = {
	    component: 'div',
	    defaultClasses: true,
	    position: 'top'
	}, _temp);
	exports.default = TabTitle;

/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _column = __webpack_require__(144);
	
	Object.defineProperty(exports, 'Column', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_column).default;
	  }
	});
	
	var _row = __webpack_require__(145);
	
	Object.defineProperty(exports, 'Row', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_row).default;
	  }
	});
	
	var _grid = __webpack_require__(146);
	
	Object.defineProperty(exports, 'Grid', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_grid).default;
	  }
	});
	
	var _message = __webpack_require__(147);
	
	Object.defineProperty(exports, 'Message', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_message).default;
	  }
	});
	
	var _table = __webpack_require__(148);
	
	Object.defineProperty(exports, 'Table', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_table).default;
	  }
	});
	
	var _tr = __webpack_require__(149);
	
	Object.defineProperty(exports, 'Tr', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_tr).default;
	  }
	});
	
	var _td = __webpack_require__(150);
	
	Object.defineProperty(exports, 'Td', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_td).default;
	  }
	});
	
	var _form = __webpack_require__(151);
	
	Object.defineProperty(exports, 'Form', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_form).default;
	  }
	});
	
	var _fields = __webpack_require__(152);
	
	Object.defineProperty(exports, 'Fields', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_fields).default;
	  }
	});
	
	var _field = __webpack_require__(153);
	
	Object.defineProperty(exports, 'Field', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_field).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _utilities = __webpack_require__(4);
	
	var _defaultProps = __webpack_require__(92);
	
	var _defaultProps2 = _interopRequireDefault(_defaultProps);
	
	var _classnames = __webpack_require__(5);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var validProps = {
	    aligned: ['right', 'left', 'justified', 'center'],
	    floated: ['right', 'left'],
	    valigned: ['top', 'middle', 'bottom']
	
	};
	
	function getClasses(props) {
	    var classes = {
	        column: props.defaultClasses
	    };
	
	    classes[props.color] = !!props.color;
	
	    // Widths
	    if (props.width && props.width > 0 && props.width <= 16) {
	        classes[_utilities.Numbers[props.width] + ' wide'] = true;
	    }
	
	    if (props.mobileWidth && props.mobileWidth > 0 && props.mobileWidth <= 16) {
	        classes[_utilities.Numbers[props.mobileWidth] + ' wide mobile'] = true;
	    }
	
	    if (props.tabletWidth && props.tabletWidth > 0 && props.tabletWidth <= 16) {
	        classes[_utilities.Numbers[props.tabletWidth] + ' wide tablet'] = true;
	    }
	
	    if (props.computerWidth && props.computerWidth > 0 && props.computerWidth <= 16) {
	        classes[_utilities.Numbers[props.computerWidth] + ' wide computer'] = true;
	    }
	
	    if (props.largeScreenWidth && props.largeScreenWidth > 0 && props.largeScreenWidth <= 16) {
	        classes[_utilities.Numbers[props.largeScreenWidth] + ' wide large screen'] = true;
	    }
	
	    if (props.wideScreenWidth && props.wideScreenWidth > 0 && props.wideScreenWidth <= 16) {
	        classes[_utilities.Numbers[props.wideScreenWidth] + ' wide widescreen'] = true;
	    }
	
	    if (props.only) {
	        var device = undefined;
	        if (Array.isArray(props.only)) {
	            device = props.only.join(' ');
	        } else {
	            device = props.only;
	        }
	        if (device) {
	            classes[device + ' only'] = true;
	        }
	    }
	
	    return (0, _utilities.validateClassProps)(classes, props, validProps, { valigned: 'aligned' });
	}
	
	/**
	 * Grid column
	 * @param props
	 * @returns {JSX.Element}
	 * @constructor
	 */
	var Column = function Column(props) {
	    /* eslint-disable no-use-before-define */
	    var aligned = props.aligned;
	    var component = props.component;
	    var children = props.children;
	    var defaultClasses = props.defaultClasses;
	    var floated = props.floated;
	    var only = props.only;
	    var width = props.width;
	    var mobileWidth = props.mobileWidth;
	    var tabletWidth = props.tabletWidth;
	    var computerWidth = props.computerWidth;
	    var largeScreenWidth = props.largeScreenWidth;
	    var wideScreenWidth = props.wideScreenWidth;
	    var valigned = props.valigned;
	
	    var other = _objectWithoutProperties(props, ['aligned', 'component', 'children', 'defaultClasses', 'floated', 'only', 'width', 'mobileWidth', 'tabletWidth', 'computerWidth', 'largeScreenWidth', 'wideScreenWidth', 'valigned']);
	    /* eslint-enable no-use-before-define */
	
	
	    var Component = component;
	    other.className = (0, _classnames2.default)(other.className, getClasses(props));
	
	    return _react2.default.createElement(
	        Component,
	        other,
	        children
	    );
	};
	
	Column.propTypes = _extends({}, _defaultProps2.default.propTypes, {
	    /**
	     * Horizontal content alignment
	     */
	    aligned: _react2.default.PropTypes.oneOf(['right', 'left', 'center']),
	    /**
	     * Float to the right or left edge of the row
	     */
	    floated: _react2.default.PropTypes.oneOf(['right', 'left']),
	    /**
	     * Only visible for types. Could be single type string or array, i.e. only={["mobile","tablet"]}
	     */
	    only: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.oneOf(['mobile', 'tablet', 'computer', 'large screen', 'widescreen']), _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.oneOf(['mobile', 'tablet', 'computer', 'large screen', 'widescreen']))]),
	    /**
	     * Column color
	     */
	    color: _react2.default.PropTypes.string,
	    /**
	     * Column width for all device types
	     */
	    width: _react2.default.PropTypes.number,
	    /**
	     * Column width for mobile
	     */
	    mobileWidth: _react2.default.PropTypes.number,
	    /**
	     * Column width for tablet
	     */
	    tabletWidth: _react2.default.PropTypes.number,
	    /**
	     * Column width for computer
	     */
	    computerWidth: _react2.default.PropTypes.number,
	    /**
	     * Column width for large screens
	     */
	    largeScreenWidth: _react2.default.PropTypes.number,
	    /**
	     * Column width for wide screens
	     */
	    wideScreenWidth: _react2.default.PropTypes.number,
	    /**
	     * Vertical content alignment
	     */
	    valigned: _react2.default.PropTypes.oneOf(['top', 'middle', 'bottom'])
	});
	
	Column.defaultProps = _extends({}, _defaultProps2.default.defaultProps);
	
	exports.default = Column;

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _utilities = __webpack_require__(4);
	
	var _defaultProps = __webpack_require__(92);
	
	var _defaultProps2 = _interopRequireDefault(_defaultProps);
	
	var _classnames = __webpack_require__(5);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var validProps = {
	    aligned: ['right', 'left', 'center'],
	    valigned: ['top', 'middle', 'bottom']
	};
	
	function getClasses(props) {
	    var classes = {
	        row: props.defaultClasses,
	        centered: props.centered,
	        doubling: props.doubling,
	        stretched: props.stretched,
	        justified: props.justified
	    };
	
	    if (props.columns && props.columns > 0 && props.columns <= 16) {
	        classes[_utilities.Numbers[props.columns] + ' column'] = true;
	    }
	
	    classes[props.color] = !!props.color;
	
	    if (props.equal) {
	        classes['equal width'] = true;
	    }
	
	    if (props.only) {
	        var device = undefined;
	        if (Array.isArray(props.only)) {
	            device = props.only.join(' ');
	        } else {
	            device = props.only;
	        }
	        if (device) {
	            classes[device + ' only'] = true;
	        }
	    }
	
	    return (0, _utilities.validateClassProps)(classes, props, validProps, { valigned: 'aligned' });
	}
	
	/**
	 * Grid row
	 * @param props
	 * @returns {JSX.Element}
	 * @constructor
	 */
	var Row = function Row(props) {
	    /* eslint-disable no-use-before-define */
	    var aligned = props.aligned;
	    var component = props.component;
	    var centered = props.centered;
	    var children = props.children;
	    var columns = props.columns;
	    var defaultClasses = props.defaultClasses;
	    var doubling = props.doubling;
	    var equal = props.equal;
	    var stretched = props.stretched;
	    var color = props.color;
	    var only = props.only;
	    var justified = props.justified;
	
	    var other = _objectWithoutProperties(props, ['aligned', 'component', 'centered', 'children', 'columns', 'defaultClasses', 'doubling', 'equal', 'stretched', 'color', 'only', 'justified']);
	    /* eslint-enable no-use-before-define */
	
	    var Component = component;
	    other.className = (0, _classnames2.default)(other.className, getClasses(props));
	
	    return _react2.default.createElement(
	        Component,
	        other,
	        children
	    );
	};
	
	Row.propTypes = _extends({}, _defaultProps2.default.propTypes, {
	    /**
	     * Horizontal content alignment
	     */
	    aligned: _react2.default.PropTypes.oneOf(['right', 'left', 'center']),
	    /**
	     * Center columns in row
	     */
	    centered: _react2.default.PropTypes.bool,
	    /**
	     * Double column width on tablet and mobile sizes
	     */
	    doubling: _react2.default.PropTypes.bool,
	    /**
	     * Automatically resize elements to split the available width evently
	     */
	    equal: _react2.default.PropTypes.bool,
	    /**
	     * Only visible for types. Could be single type string or array, i.e. only={["mobile","tablet"]}
	     */
	    only: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.oneOf(['mobile', 'tablet', 'computer', 'large screen', 'widescreen']), _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.oneOf(['mobile', 'tablet', 'computer', 'large screen', 'widescreen']))]),
	    /**
	     * Specify row columns count
	     */
	    columns: _react2.default.PropTypes.number,
	    /**
	     * Stretch content to take up the entire column height
	     */
	    stretched: _react2.default.PropTypes.bool,
	    /**
	     * Row color
	     */
	    color: _react2.default.PropTypes.string,
	    /**
	     * Justified content fits exactly inside the grid column, taking up the entire width from one side to the other
	     */
	    justified: _react2.default.PropTypes.bool,
	    /**
	     * Vertical content alignment
	     */
	    valigned: _react2.default.PropTypes.oneOf(['top', 'middle', 'bottom'])
	});
	
	Row.defaultProps = _extends({}, _defaultProps2.default.defaultProps);
	
	exports.default = Row;

/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _utilities = __webpack_require__(4);
	
	var _defaultProps = __webpack_require__(92);
	
	var _defaultProps2 = _interopRequireDefault(_defaultProps);
	
	var _classnames = __webpack_require__(5);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var validProps = {
	    aligned: ['right', 'left', 'center'],
	    celled: ['internally'],
	    divided: ['vertically', 'internally'],
	    padded: ['horizontally', 'vertically'],
	    relaxed: ['very'],
	    reversed: ['mobile', 'mobile vertically', 'tablet', 'tablet vertically', 'computer', 'computer vertically'],
	    valigned: ['top', 'middle', 'bottom']
	};
	
	function getClassNames(props) {
	    var classes = {
	        // Default
	        ui: props.defaultClasses,
	        grid: props.defaultClasses,
	
	        // variations
	        container: props.container,
	        relaxed: props.relaxed,
	        centered: props.centered,
	        stackable: props.stackable,
	        doubling: props.doubling
	    };
	
	    if (props.columns && props.columns > 0 && props.columns <= 16) {
	        classes[_utilities.Numbers[props.columns] + ' column'] = true;
	    }
	
	    if (props.equal) {
	        classes['equal width'] = true;
	    }
	
	    return (0, _utilities.validateClassProps)(classes, props, validProps, { valigned: 'aligned' });
	}
	
	/**
	 * Semantic Grid
	 * @param props
	 * @returns {JSX.Element}
	 * @constructor
	 */
	var Grid = function Grid(props) {
	    // consume props
	    /* eslint-disable no-use-before-define */
	    var aligned = props.aligned;
	    var defaultClasses = props.defaultClasses;
	    var centered = props.centered;
	    var celled = props.celled;
	    var columns = props.columns;
	    var container = props.container;
	    var component = props.component;
	    var children = props.children;
	    var divided = props.divided;
	    var doubling = props.doubling;
	    var equal = props.equal;
	    var padded = props.padded;
	    var relaxed = props.relaxed;
	    var reversed = props.reversed;
	    var stackable = props.stackable;
	    var valigned = props.valigned;
	
	    var other = _objectWithoutProperties(props, ['aligned', 'defaultClasses', 'centered', 'celled', 'columns', 'container', 'component', 'children', 'divided', 'doubling', 'equal', 'padded', 'relaxed', 'reversed', 'stackable', 'valigned']);
	    /* eslint-enable no-use-before-define */
	
	
	    var Component = component;
	    other.className = (0, _classnames2.default)(other.className, getClassNames(props));
	    return _react2.default.createElement(
	        Component,
	        other,
	        children
	    );
	};
	
	Grid.propTypes = _extends({}, _defaultProps2.default.propTypes, {
	    /**
	     * Horizontal content alignment
	     */
	    aligned: _react2.default.PropTypes.oneOf(['right', 'left', 'center']),
	    /**
	     * Center columns
	     */
	    centered: _react2.default.PropTypes.bool,
	    /**
	     * Divide rows into cells
	     */
	    celled: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.oneOf(['internally']), _react2.default.PropTypes.bool]),
	    /**
	     * Grid column count
	     */
	    columns: _react2.default.PropTypes.number,
	    /**
	     * Add container class, i.e. ui grid container
	     */
	    container: _react2.default.PropTypes.bool,
	    /**
	     * Add dividers between ros
	     */
	    divided: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.oneOf(['vertically', 'internally']), _react2.default.PropTypes.bool]),
	    /**
	     * Double column width on tablet and mobile sizes
	     */
	    doubling: _react2.default.PropTypes.bool,
	    /**
	     * Automatically resize elements to split the available width evently
	     */
	    equal: _react2.default.PropTypes.bool,
	    /**
	     * Preserve gutters on first and las columns
	     */
	    padded: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.oneOf(['horizontally', 'vertically']), _react2.default.PropTypes.bool]),
	    /**
	     * Increase size of gutters
	     */
	    relaxed: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.oneOf(['very']), _react2.default.PropTypes.bool]),
	    /**
	     * Reverse the order of columns or rows by device
	     */
	    reversed: _react2.default.PropTypes.oneOfType(['mobile', 'mobile vertically', 'tablet', 'tablet vertically', 'computer', 'computer vertically']),
	    /**
	     * Automatically stack rows into single columns on mobile devices
	     */
	    stackable: _react2.default.PropTypes.bool,
	    /**
	     * Vertical content alignment
	     */
	    valigned: _react2.default.PropTypes.oneOf(['top', 'middle', 'bottom'])
	});
	
	Grid.defaultProps = _extends({}, _defaultProps2.default.defaultProps);
	
	exports.default = Grid;

/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _utilities = __webpack_require__(4);
	
	var _classnames = __webpack_require__(5);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var validProps = {
	    attached: ['bottom', 'top'],
	    type: ['info', 'warning', 'positive', 'negative'],
	    state: ['success', 'error']
	};
	
	function getClasses(props) {
	    var classes = {
	        ui: props.defaultClasses,
	
	        compact: props.compact,
	        floating: props.floating,
	        hidden: props.hidden,
	        icon: props.icon,
	        visible: props.visible,
	
	        info: props.type === 'info' && !props.state,
	        warning: props.type === 'warning' && !props.state,
	        positive: props.type === 'positive' && !props.state,
	        negative: props.type === 'negative' && !props.state,
	
	        success: props.state === 'success',
	        error: props.state === 'error',
	
	        message: props.defaultClasses
	    };
	
	    classes[props.color] = !!props.color;
	    classes[props.size] = !!props.size;
	    return (0, _utilities.validateClassProps)(classes, props, validProps);
	}
	
	var message = function message(props) {
	    /* eslint-disable no-use-before-define */
	    var attached = props.attached;
	    var children = props.children;
	    var className = props.className;
	    var color = props.color;
	    var compact = props.compact;
	    var component = props.component;
	    var defaultClasses = props.defaultClasses;
	    var floating = props.floating;
	    var hidden = props.hidden;
	    var icon = props.icon;
	    var size = props.size;
	    var state = props.state;
	    var type = props.type;
	    var visible = props.visible;
	
	    var other = _objectWithoutProperties(props, ['attached', 'children', 'className', 'color', 'compact', 'component', 'defaultClasses', 'floating', 'hidden', 'icon', 'size', 'state', 'type', 'visible']);
	    /* eslint-enable no-use-before-define */
	
	    other.className = (0, _classnames2.default)(className, getClasses(props));
	
	    return _react2.default.createElement(component, other, children);
	};
	
	message.propTypes = {
	    attached: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.oneOf(['bottom', 'top']), _react2.default.PropTypes.bool]),
	    className: _react2.default.PropTypes.any,
	    color: _react2.default.PropTypes.string,
	    compact: _react2.default.PropTypes.bool,
	    component: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.element, _react2.default.PropTypes.string]),
	    defaultClasses: _react2.default.PropTypes.bool,
	    floating: _react2.default.PropTypes.bool,
	    hidden: _react2.default.PropTypes.bool,
	    icon: _react2.default.PropTypes.bool,
	    size: _react2.default.PropTypes.string,
	    state: _react2.default.PropTypes.oneOf(['success', 'error']),
	    type: _react2.default.PropTypes.oneOf(['info', 'warning', 'positive', 'negative']),
	    visible: _react2.default.PropTypes.bool
	};
	
	message.defaultProps = {
	    component: 'div',
	    defaultClasses: true
	};
	
	exports.default = message;

/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _utilities = __webpack_require__(4);
	
	var _classnames = __webpack_require__(5);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var validProps = {
	    aligned: ['top', 'bottom'],
	    basic: ['very'],
	    padded: ['very'],
	    valigned: ['center', 'right']
	};
	
	function mobileFormat(name, options) {
	    var classes = {};
	
	    Object.keys(options).forEach(function (value) {
	        if (options[value]) classes[value + ' ' + name] = true;
	    });
	
	    // all of the options are true?
	    return classes;
	}
	
	function getClasses(props) {
	    var classes = {
	        ui: props.defaultClasses,
	
	        basic: props.basic,
	        collapsing: props.collapsing,
	        compact: props.compact,
	        celled: props.celled,
	        definition: props.definition,
	        fixed: props.fixed,
	        inverted: props.inverted,
	        selectable: props.selectable,
	        'single line': props.singleLine,
	        striped: props.striped,
	        structured: props.structured,
	
	        table: props.defaultClasses
	    };
	
	    classes[props.color] = !!props.color;
	    classes[props.size] = !!props.size;
	
	    if (props.columns !== false) {
	        if (props.columns > 0 && props.columns <= 16) {
	            classes[_utilities.Numbers[props.columns] + ' column'] = true;
	        }
	    }
	
	    if (props.width !== false) {
	        if (props.width > 0 && props.width <= 16) {
	            classes[_utilities.Numbers[props.width] + ' wide'] = true;
	        }
	    }
	
	    return (0, _utilities.validateClassProps)(classes, props, validProps, { valigned: 'aligned' });
	}
	
	var table = function table(props) {
	    /* eslint-disable no-use-before-define */
	    var basic = props.basic;
	    var celled = props.celled;
	    var children = props.children;
	    var className = props.className;
	    var collapsing = props.collapsing;
	    var compact = props.compact;
	    var component = props.component;
	    var defaultClasses = props.defaultClasses;
	    var definition = props.definition;
	    var fixed = props.fixed;
	    var inverted = props.inverted;
	    var selectable = props.selectable;
	    var singleLine = props.singleLine;
	    var stackable = props.stackable;
	    var striped = props.striped;
	    var structured = props.structured;
	    var unstackable = props.unstackable;
	    var valigned = props.valigned;
	
	    var other = _objectWithoutProperties(props, ['basic', 'celled', 'children', 'className', 'collapsing', 'compact', 'component', 'defaultClasses', 'definition', 'fixed', 'inverted', 'selectable', 'singleLine', 'stackable', 'striped', 'structured', 'unstackable', 'valigned']);
	    /* eslint-enable no-use-before-define */
	
	    other.className = (0, _classnames2.default)(className, getClasses(props), mobileFormat('stackable', stackable), mobileFormat('unstackable', unstackable));
	
	    return _react2.default.createElement(component, other, children);
	};
	
	table.propTypes = {
	    aligned: _react2.default.PropTypes.oneOf(['top', 'bottom']),
	    basic: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.oneOf(['very']), _react2.default.PropTypes.bool]),
	    celled: _react2.default.PropTypes.bool,
	    className: _react2.default.PropTypes.any,
	    collapsing: _react2.default.PropTypes.bool,
	    color: _react2.default.PropTypes.string,
	    columns: _react2.default.PropTypes.number,
	    compact: _react2.default.PropTypes.bool,
	    component: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.element, _react2.default.PropTypes.string]),
	    defaultClasses: _react2.default.PropTypes.bool,
	    definition: _react2.default.PropTypes.bool,
	    fixed: _react2.default.PropTypes.bool,
	    inverted: _react2.default.PropTypes.bool,
	    padded: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.oneOf(['very']), _react2.default.PropTypes.bool]),
	    selectable: _react2.default.PropTypes.bool,
	    singleLine: _react2.default.PropTypes.bool,
	    size: _react2.default.PropTypes.string,
	    stackable: _react2.default.PropTypes.shape({
	        computer: _react2.default.PropTypes.bool,
	        mobile: _react2.default.PropTypes.bool,
	        tablet: _react2.default.PropTypes.bool
	    }),
	    striped: _react2.default.PropTypes.bool,
	    structured: _react2.default.PropTypes.bool,
	    unstackable: _react2.default.PropTypes.shape({
	        computer: _react2.default.PropTypes.bool,
	        mobile: _react2.default.PropTypes.bool,
	        tablet: _react2.default.PropTypes.bool
	    }),
	    valigned: _react2.default.PropTypes.oneOf(['center', 'right']),
	    width: _react2.default.PropTypes.number
	};
	
	table.defaultProps = {
	    component: 'table',
	    defaultClasses: true,
	    stackable: {
	        computer: false,
	        mobile: false,
	        tablet: false
	    },
	    unstackable: {
	        computer: false,
	        mobile: false,
	        tablet: false
	    }
	};
	
	exports.default = table;

/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _td = __webpack_require__(150);
	
	var _td2 = _interopRequireDefault(_td);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var tr = function tr(props) {
	    return _react2.default.createElement(
	        _td2.default,
	        _extends({}, props, {
	            component: props.component
	        }),
	        props.children
	    );
	};
	
	tr.propTypes = {
	    children: _react2.default.PropTypes.node,
	    component: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.element, _react2.default.PropTypes.string])
	};
	
	tr.defaultProps = {
	    component: 'tr'
	};
	
	exports.default = tr;

/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _utilities = __webpack_require__(4);
	
	var _classnames = __webpack_require__(5);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var validProps = {
	    aligned: ['right', 'left', 'center', 'top', 'bottom']
	};
	
	function getClasses(props) {
	    var classes = {
	        collapsing: props.collapsing,
	
	        positive: props.type === 'positive' && !props.state,
	        negative: props.type === 'negative' && !props.state,
	        warning: props.type === 'warning' && !props.state,
	
	        active: props.state === 'active',
	        error: props.state === 'error',
	        disabled: props.state === 'disabled',
	
	        'single line': props.singleLine
	    };
	
	    classes[props.type] = !!props.type;
	
	    return (0, _utilities.validateClassProps)(classes, props, validProps);
	}
	
	var td = function td(props) {
	
	    /* eslint-disable no-use-before-define */
	    var children = props.children;
	    var className = props.className;
	    var collapsing = props.collapsing;
	    var component = props.component;
	    var singleLine = props.singleLine;
	    var state = props.state;
	    var type = props.type;
	
	    var other = _objectWithoutProperties(props, ['children', 'className', 'collapsing', 'component', 'singleLine', 'state', 'type']);
	    /* eslint-enable no-use-before-define */
	
	    other.className = (0, _classnames2.default)(className, getClasses(props));
	
	    return _react2.default.createElement(component, other, children);
	};
	
	td.propTypes = {
	    aligned: _react2.default.PropTypes.oneOf(['right', 'left', 'center', 'top', 'bottom']),
	    className: _react2.default.PropTypes.any,
	    collapsing: _react2.default.PropTypes.bool,
	    component: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.element, _react2.default.PropTypes.string]),
	    singleLine: _react2.default.PropTypes.bool,
	    type: _react2.default.PropTypes.oneOf(['negative', 'positive', 'warning'])
	};
	
	td.defaultProps = {
	    component: 'td'
	};
	
	exports.default = td;

/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(5);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function getClasses(props) {
	    var classes = {
	        ui: props.defaultClasses,
	
	        loading: props.loading,
	
	        error: props.state === 'error',
	        success: props.state === 'success',
	        warning: props.state === 'warning',
	
	        inverted: props.inverted,
	
	        form: props.defaultClasses
	    };
	
	    if (props.equalWidth) {
	        classes['equal width'] = true;
	    }
	
	    classes[props.size] = !!props.size;
	
	    return classes;
	}
	
	var Form = function Form(props) {
	    /* eslint-disable no-use-before-define */
	    var children = props.children;
	    var className = props.className;
	    var component = props.component;
	
	    var other = _objectWithoutProperties(props, ['children', 'className', 'component']);
	    /* eslint-enable no-use-before-define */
	
	
	    other.className = (0, _classnames2.default)(className, getClasses(props));
	
	    return _react2.default.createElement(component, other, children);
	};
	
	Form.propTypes = {
	    children: _react2.default.PropTypes.node,
	    className: _react2.default.PropTypes.any,
	    component: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.element, _react2.default.PropTypes.string]),
	    defaultClasses: _react2.default.PropTypes.bool,
	    equalWidth: _react2.default.PropTypes.bool,
	    inverted: _react2.default.PropTypes.bool,
	    loading: _react2.default.PropTypes.bool,
	    size: _react2.default.PropTypes.string,
	    state: _react2.default.PropTypes.oneOf(['success', 'error', 'warning'])
	};
	
	Form.defaultProps = {
	    component: 'div',
	    defaultClasses: true
	};
	
	exports.default = Form;

/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _utilities = __webpack_require__(4);
	
	var _field = __webpack_require__(153);
	
	var _field2 = _interopRequireDefault(_field);
	
	var _classnames = __webpack_require__(5);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function getClasses(props) {
	    var classes = {
	        grouped: props.grouped,
	        inline: props.inline
	    };
	
	    if (props.fluid) {
	        var childCount = (0, _utilities.countChildren)(props.children, _field2.default);
	
	        if (childCount > 0 && childCount <= 12) {
	            classes[_utilities.Numbers[childCount]] = true;
	        }
	    }
	
	    if (props.equalWidth) {
	        classes['equal width'] = true;
	    }
	
	    classes.fields = props.defaultClasses;
	
	    return classes;
	}
	
	var Fields = function Fields(props) {
	    /* eslint-disable no-use-before-define */
	    var children = props.children;
	    var className = props.className;
	    var component = props.component;
	
	    var other = _objectWithoutProperties(props, ['children', 'className', 'component']);
	    /* eslint-enable no-use-before-define */
	
	
	    other.className = (0, _classnames2.default)(className, getClasses(props));
	
	    return _react2.default.createElement(component, other, children);
	};
	
	Fields.propTypes = {
	    children: _react2.default.PropTypes.node,
	    className: _react2.default.PropTypes.any,
	    component: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.element, _react2.default.PropTypes.string]),
	    defaultClasses: _react2.default.PropTypes.bool,
	    equalWidth: _react2.default.PropTypes.bool,
	    fluid: _react2.default.PropTypes.bool,
	    grouped: _react2.default.PropTypes.bool,
	    inline: _react2.default.PropTypes.bool
	};
	
	Fields.defaultProps = {
	    component: 'div',
	    defaultClasses: true
	};
	
	exports.default = Fields;

/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _utilities = __webpack_require__(4);
	
	var _modules = __webpack_require__(41);
	
	var _classnames = __webpack_require__(5);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function getClasses(props) {
	    var classes = {
	        disabled: props.state === 'disabled',
	        error: props.state === 'error',
	
	        required: props.required,
	        inline: props.inline,
	        grouped: props.grouped
	    };
	
	    if (props.width) {
	        if (props.width > 0 && props.width <= 16) {
	            classes[_utilities.Numbers[props.width] + ' wide'] = true;
	        }
	    }
	
	    classes.field = props.defaultClasses;
	
	    return classes;
	}
	
	// check if child is checkbox first?
	function renderLabel(label) {
	    return _react2.default.createElement(
	        'label',
	        { key: label + 'Label' },
	        label
	    );
	}
	
	var Field = function Field(props) {
	    /* eslint-disable no-use-before-define */
	    var children = props.children;
	    var className = props.className;
	    var component = props.component;
	    var label = props.label;
	    var width = props.width;
	
	    var other = _objectWithoutProperties(props, ['children', 'className', 'component', 'label', 'width']);
	    /* eslint-enable no-use-before-define */
	
	
	    other.className = (0, _classnames2.default)(className, getClasses(props));
	
	    return _react2.default.createElement(component, other, [(0, _utilities.hasFirstChild)(children, _modules.Checkbox) || (0, _utilities.hasFirstChild)(children, _modules.Checkboxes) || !label || label == '' ? null : renderLabel(props.label), children]);
	};
	
	Field.propTypes = {
	    children: _react2.default.PropTypes.node,
	    className: _react2.default.PropTypes.any,
	    component: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.element, _react2.default.PropTypes.string]),
	    defaultClasses: _react2.default.PropTypes.bool,
	    grouped: _react2.default.PropTypes.bool,
	    inline: _react2.default.PropTypes.bool,
	    label: _react2.default.PropTypes.string,
	    required: _react2.default.PropTypes.bool,
	    state: _react2.default.PropTypes.oneOf(['disabled', 'error']),
	    width: _react2.default.PropTypes.number
	};
	
	Field.defaultProps = {
	    component: 'div',
	    defaultClasses: true
	};
	
	exports.default = Field;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=semantic-react.js.map