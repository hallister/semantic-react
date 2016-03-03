(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("radium"), require("react/lib/ReactTransitionGroup"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "radium", "react/lib/ReactTransitionGroup", "react-dom"], factory);
	else if(typeof exports === 'object')
		exports["SemanticReact"] = factory(require("react"), require("radium"), require("react/lib/ReactTransitionGroup"), require("react-dom"));
	else
		root["SemanticReact"] = factory(root["React"], root["Radium"], root["React.addons.ReactTransitionGroup"], root["ReactDOM"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_47__, __WEBPACK_EXTERNAL_MODULE_57__, __WEBPACK_EXTERNAL_MODULE_105__, __WEBPACK_EXTERNAL_MODULE_107__) {
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
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopExportWildcard(obj, defaults) { var newObj = defaults({}, obj); delete newObj['default']; return newObj; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }
	
	var _elements = __webpack_require__(1);
	
	var elements = _interopRequireWildcard(_elements);
	
	var _modules = __webpack_require__(93);
	
	var modules = _interopRequireWildcard(_modules);
	
	var _utilities = __webpack_require__(55);
	
	var utilites = _interopRequireWildcard(_utilities);
	
	var _views = __webpack_require__(150);
	
	var views = _interopRequireWildcard(_views);
	
	var _collections = __webpack_require__(195);
	
	var collections = _interopRequireWildcard(_collections);
	
	exports.elements = elements;
	exports.modules = modules;
	exports.utilites = utilites;
	exports.views = views;
	exports.collections = collections;
	
	_defaults(exports, _interopExportWildcard(_elements, _defaults));

	_defaults(exports, _interopExportWildcard(_modules, _defaults));

	_defaults(exports, _interopExportWildcard(_utilities, _defaults));

	_defaults(exports, _interopExportWildcard(_views, _defaults));

	_defaults(exports, _interopExportWildcard(_collections, _defaults));

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequire(obj) { return obj && obj.__esModule ? obj['default'] : obj; }
	
	var _elementsButtonButton = __webpack_require__(2);
	
	exports.Button = _interopRequire(_elementsButtonButton);
	
	var _elementsButtonButtons = __webpack_require__(58);
	
	exports.Buttons = _interopRequire(_elementsButtonButtons);
	
	var _elementsButtonLabeledbutton = __webpack_require__(59);
	
	exports.LabeledButton = _interopRequire(_elementsButtonLabeledbutton);
	
	var _elementsButtonIconbutton = __webpack_require__(60);
	
	exports.IconButton = _interopRequire(_elementsButtonIconbutton);
	
	var _elementsButtonSocialbutton = __webpack_require__(61);
	
	exports.SocialButton = _interopRequire(_elementsButtonSocialbutton);
	
	var _elementsButtonPrimarybutton = __webpack_require__(62);
	
	exports.PrimaryButton = _interopRequire(_elementsButtonPrimarybutton);
	
	var _elementsButtonSuccessbutton = __webpack_require__(63);
	
	exports.SuccessButton = _interopRequire(_elementsButtonSuccessbutton);
	
	var _elementsButtonWarningbutton = __webpack_require__(64);
	
	exports.WarningButton = _interopRequire(_elementsButtonWarningbutton);
	
	var _elementsButtonDangerbutton = __webpack_require__(65);
	
	exports.DangerButton = _interopRequire(_elementsButtonDangerbutton);
	
	var _elementsDividerDivider = __webpack_require__(66);
	
	exports.Divider = _interopRequire(_elementsDividerDivider);
	
	var _elementsFlagFlag = __webpack_require__(67);
	
	exports.Flag = _interopRequire(_elementsFlagFlag);
	
	var _elementsHeaderHeader = __webpack_require__(68);
	
	exports.Header = _interopRequire(_elementsHeaderHeader);
	
	var _elementsHeaderSubheader = __webpack_require__(69);
	
	exports.SubHeader = _interopRequire(_elementsHeaderSubheader);
	
	var _elementsIconIcon = __webpack_require__(70);
	
	exports.Icon = _interopRequire(_elementsIconIcon);
	
	var _elementsIconIcons = __webpack_require__(71);
	
	exports.Icons = _interopRequire(_elementsIconIcons);
	
	var _elementsImageImage = __webpack_require__(72);
	
	exports.Image = _interopRequire(_elementsImageImage);
	
	var _elementsImageImages = __webpack_require__(73);
	
	exports.Images = _interopRequire(_elementsImageImages);
	
	var _elementsInputInput = __webpack_require__(74);
	
	exports.Input = _interopRequire(_elementsInputInput);
	
	var _elementsLabelDetail = __webpack_require__(75);
	
	exports.Detail = _interopRequire(_elementsLabelDetail);
	
	var _elementsLabelLabel = __webpack_require__(76);
	
	exports.Label = _interopRequire(_elementsLabelLabel);
	
	var _elementsLabelLabels = __webpack_require__(77);
	
	exports.Labels = _interopRequire(_elementsLabelLabels);
	
	var _elementsListList = __webpack_require__(78);
	
	exports.List = _interopRequire(_elementsListList);
	
	var _elementsLoaderLoader = __webpack_require__(79);
	
	exports.Loader = _interopRequire(_elementsLoaderLoader);
	
	var _elementsRailRail = __webpack_require__(80);
	
	exports.Rail = _interopRequire(_elementsRailRail);
	
	var _elementsRevealReveal = __webpack_require__(81);
	
	exports.Reveal = _interopRequire(_elementsRevealReveal);
	
	var _elementsSegmentSegment = __webpack_require__(82);
	
	exports.Segment = _interopRequire(_elementsSegmentSegment);
	
	var _elementsSegmentSegments = __webpack_require__(83);
	
	exports.Segments = _interopRequire(_elementsSegmentSegments);
	
	var _elementsSimpleActions = __webpack_require__(84);
	
	exports.Actions = _interopRequire(_elementsSimpleActions);
	
	var _elementsSimpleAuthor = __webpack_require__(85);
	
	exports.Author = _interopRequire(_elementsSimpleAuthor);
	
	var _elementsSimpleContainer = __webpack_require__(86);
	
	exports.Container = _interopRequire(_elementsSimpleContainer);
	
	var _elementsSimpleContent = __webpack_require__(87);
	
	exports.Content = _interopRequire(_elementsSimpleContent);
	
	var _elementsSimpleDate = __webpack_require__(88);
	
	exports.Date = _interopRequire(_elementsSimpleDate);
	
	var _elementsSimpleDescription = __webpack_require__(89);
	
	exports.Description = _interopRequire(_elementsSimpleDescription);
	
	var _elementsSimpleMeta = __webpack_require__(90);
	
	exports.Meta = _interopRequire(_elementsSimpleMeta);
	
	var _elementsSimpleSummary = __webpack_require__(91);
	
	exports.Summary = _interopRequire(_elementsSimpleSummary);
	
	var _elementsSimpleText = __webpack_require__(92);
	
	exports.Text = _interopRequire(_elementsSimpleText);

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';
	
	var _reactTransformHmr2 = __webpack_require__(4);
	
	var _reactTransformHmr3 = _interopRequireDefault(_reactTransformHmr2);
	
	var _react = __webpack_require__(47);
	
	var _reactTransformCatchErrors2 = __webpack_require__(48);
	
	var _reactTransformCatchErrors3 = _interopRequireDefault(_reactTransformCatchErrors2);
	
	var _redboxReact = __webpack_require__(49);
	
	Object.defineProperty(exports, '__esModule', {
	        value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react2 = _interopRequireDefault(_react);
	
	var _elements = __webpack_require__(1);
	
	var _utilities = __webpack_require__(55);
	
	var _classnames = __webpack_require__(56);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _radium = __webpack_require__(57);
	
	var _radium2 = _interopRequireDefault(_radium);
	
	var _components = {
	        _$Button: {
	                displayName: 'Button'
	        }
	};
	
	var _reactComponentWrapper = (0, _reactTransformHmr3['default'])({
	        filename: 'E:/Work/semantic-react/src/components/elements/button/button.jsx',
	        components: _components,
	        locals: [module],
	        imports: [_react]
	});
	
	var _reactComponentWrapper2 = (0, _reactTransformCatchErrors3['default'])({
	        filename: 'E:/Work/semantic-react/src/components/elements/button/button.jsx',
	        components: _components,
	        locals: [],
	        imports: [_react, _redboxReact]
	});
	
	function _wrapComponent(uniqueId) {
	        return function (ReactClass) {
	                return _reactComponentWrapper2(_reactComponentWrapper(ReactClass, uniqueId), uniqueId);
	        };
	}
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var validProps = {
	        animated: ['vertical', 'fade'],
	        attached: ['left', 'right', 'bottom', 'top'],
	        labeled: ['right', 'left'],
	        floated: ['right', 'left']
	};
	
	var Button = (function (_React$Component) {
	        _inherits(Button, _React$Component);
	
	        function Button() {
	                _classCallCheck(this, _Button);
	
	                _get(Object.getPrototypeOf(_Button.prototype), 'constructor', this).apply(this, arguments);
	        }
	
	        _createClass(Button, [{
	                key: 'render',
	                value: function render() {
	                        var Component = this.props.attached || this.context.isAttached || this.props.animated || _react2['default'].Children.count(this.props.children) > 1 ? 'div' : 'button';
	
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
	                        other.className = (0, _classnames2['default'])(this.props.className, this.getClasses());
	
	                        return _react2['default'].createElement(this.props.component || Component, other, this.props.children);
	                }
	        }, {
	                key: 'isIconButton',
	                value: function isIconButton() {
	                        return (0, _utilities.hasChild)(this.props.children, _elements.Icon) && _react2['default'].Children.count(this.props.children) === 1;
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
	        }], [{
	                key: 'propTypes',
	                value: {
	                        /**
	                         * Adds a fade or slide animation on hover.
	                         */
	                        animated: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.oneOf(['fade', 'vertical']), _react2['default'].PropTypes.bool]),
	
	                        /**
	                         * It's attached to some other attachable component.
	                         */
	                        attached: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.oneOf(['left', 'right', 'bottom', 'top']), _react2['default'].PropTypes.bool]),
	
	                        /**
	                         * Adds simple styling to the component.
	                         */
	                        basic: _react2['default'].PropTypes.bool,
	
	                        /**
	                         * The child nodes of the component.
	                         */
	                        children: _react2['default'].PropTypes.node,
	
	                        /**
	                         * Gives a circular shape to the component.
	                         */
	                        circular: _react2['default'].PropTypes.bool,
	
	                        /**
	                         * Adds additional classes to the component.
	                         */
	                        className: _react2['default'].PropTypes.node,
	
	                        /**
	                         * Adds a SemanticUI color class.
	                         */
	                        color: _react2['default'].PropTypes.string,
	
	                        /**
	                         * Reduces the padding on the component.
	                         */
	                        compact: _react2['default'].PropTypes.bool,
	
	                        /**
	                         * Overrides the component with a custom component string ('div') or ReactElement.
	                         */
	                        component: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.element, _react2['default'].PropTypes.string]),
	
	                        /**
	                         * Adds the default classes for the component.
	                         */
	                        defaultClasses: _react2['default'].PropTypes.bool,
	
	                        /**
	                         * Forces to component to float left or right.
	                         */
	                        floated: _react2['default'].PropTypes.oneOf(['right', 'left']),
	
	                        /**
	                         * The component fills the parent components horizontal space.
	                         */
	                        fluid: _react2['default'].PropTypes.bool,
	
	                        /**
	                         * Overrides default behavior and adds the icon class to the component.
	                         */
	                        icon: _react2['default'].PropTypes.bool,
	
	                        /**
	                         * Styles the component for a dark background.
	                         */
	                        inverted: _react2['default'].PropTypes.bool,
	
	                        /**
	                         * Defines whether the label is to the right or left of the component (LabeledButton).
	                         */
	                        labeled: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.oneOf(['right', 'left']), _react2['default'].PropTypes.bool]),
	
	                        /**
	                         * Displays a loading indicator on the component.
	                         */
	                        loading: _react2['default'].PropTypes.bool,
	
	                        /**
	                         * Adds a SemanticUI size class.
	                         */
	                        size: _react2['default'].PropTypes.string,
	
	                        /**
	                         * Adds a SemanticUI social class (SocialButton).
	                         */
	                        social: _react2['default'].PropTypes.string,
	
	                        /**
	                         * Indicates whether the button is currently highlighted or disabled.
	                         */
	                        state: _react2['default'].PropTypes.oneOf(['active', 'disabled'])
	                },
	                enumerable: true
	        }, {
	                key: 'contextTypes',
	                value: {
	                        isAttached: _react2['default'].PropTypes.bool,
	                        isIconButtons: _react2['default'].PropTypes.bool,
	                        isLabeledButtons: _react2['default'].PropTypes.bool
	                },
	                enumerable: true
	        }, {
	                key: 'defaultProps',
	                value: {
	                        defaultClasses: true
	                },
	                enumerable: true
	        }]);
	
	        var _Button = Button;
	        Button = _wrapComponent('_$Button')(Button) || Button;
	        Button = (0, _radium2['default'])(Button) || Button;
	        return Button;
	})(_react2['default'].Component);
	
	exports['default'] = Button;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)(module)))

/***/ },
/* 3 */
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
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();
	
	exports['default'] = proxyReactComponents;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _reactProxy = __webpack_require__(5);
	
	var _globalWindow = __webpack_require__(46);
	
	var _globalWindow2 = _interopRequireDefault(_globalWindow);
	
	var componentProxies = undefined;
	if (_globalWindow2['default'].__reactComponentProxies) {
	  componentProxies = _globalWindow2['default'].__reactComponentProxies;
	} else {
	  componentProxies = {};
	  Object.defineProperty(_globalWindow2['default'], '__reactComponentProxies', {
	    configurable: true,
	    enumerable: false,
	    writable: false,
	    value: componentProxies
	  });
	}
	
	function proxyReactComponents(_ref) {
	  var filename = _ref.filename;
	  var components = _ref.components;
	  var imports = _ref.imports;
	  var locals = _ref.locals;
	
	  var _imports = _slicedToArray(imports, 1);
	
	  var React = _imports[0];
	
	  var _locals = _slicedToArray(locals, 1);
	
	  var hot = _locals[0].hot;
	
	  if (!React.Component) {
	    throw new Error('imports[0] for react-transform-hmr does not look like React.');
	  }
	
	  if (!hot || typeof hot.accept !== 'function') {
	    throw new Error('locals[0] does not appear to be a `module` object with Hot Module ' + 'replacement API enabled. You should disable react-transform-hmr in ' + 'production by using `env` section in Babel configuration. See the ' + 'example in README: https://github.com/gaearon/react-transform-hmr');
	  }
	
	  if (Object.keys(components).some(function (key) {
	    return !components[key].isInFunction;
	  })) {
	    hot.accept(function (err) {
	      if (err) {
	        console.warn('[React Transform HMR] There was an error updating ' + filename + ':');
	        console.error(err);
	      }
	    });
	  }
	
	  var forceUpdate = (0, _reactProxy.getForceUpdate)(React);
	
	  return function wrapWithProxy(ReactClass, uniqueId) {
	    var _components$uniqueId = components[uniqueId];
	    var _components$uniqueId$isInFunction = _components$uniqueId.isInFunction;
	    var isInFunction = _components$uniqueId$isInFunction === undefined ? false : _components$uniqueId$isInFunction;
	    var _components$uniqueId$displayName = _components$uniqueId.displayName;
	    var displayName = _components$uniqueId$displayName === undefined ? uniqueId : _components$uniqueId$displayName;
	
	    if (isInFunction) {
	      return ReactClass;
	    }
	
	    var globalUniqueId = filename + '$' + uniqueId;
	    if (componentProxies[globalUniqueId]) {
	      (function () {
	        console.info('[React Transform HMR] Patching ' + displayName);
	        var instances = componentProxies[globalUniqueId].update(ReactClass);
	        setTimeout(function () {
	          return instances.forEach(forceUpdate);
	        });
	      })();
	    } else {
	      componentProxies[globalUniqueId] = (0, _reactProxy.createProxy)(ReactClass);
	    }
	
	    return componentProxies[globalUniqueId].get();
	  };
	}
	
	module.exports = exports['default'];

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getForceUpdate = exports.createProxy = undefined;
	
	var _supportsProtoAssignment = __webpack_require__(6);
	
	var _supportsProtoAssignment2 = _interopRequireDefault(_supportsProtoAssignment);
	
	var _createClassProxy = __webpack_require__(7);
	
	var _createClassProxy2 = _interopRequireDefault(_createClassProxy);
	
	var _reactDeepForceUpdate = __webpack_require__(45);
	
	var _reactDeepForceUpdate2 = _interopRequireDefault(_reactDeepForceUpdate);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	if (!(0, _supportsProtoAssignment2.default)()) {
	  console.warn('This JavaScript environment does not support __proto__. ' + 'This means that react-proxy is unable to proxy React components. ' + 'Features that rely on react-proxy, such as react-transform-hmr, ' + 'will not function as expected.');
	}
	
	exports.createProxy = _createClassProxy2.default;
	exports.getForceUpdate = _reactDeepForceUpdate2.default;

/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = supportsProtoAssignment;
	var x = {};
	var y = { supports: true };
	try {
	  x.__proto__ = y;
	} catch (err) {}
	
	function supportsProtoAssignment() {
	  return x.supports || false;
	};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = proxyClass;
	exports.default = createClassProxy;
	
	var _createPrototypeProxy = __webpack_require__(8);
	
	var _createPrototypeProxy2 = _interopRequireDefault(_createPrototypeProxy);
	
	var _bindAutoBindMethods = __webpack_require__(43);
	
	var _bindAutoBindMethods2 = _interopRequireDefault(_bindAutoBindMethods);
	
	var _deleteUnknownAutoBindMethods = __webpack_require__(44);
	
	var _deleteUnknownAutoBindMethods2 = _interopRequireDefault(_deleteUnknownAutoBindMethods);
	
	var _supportsProtoAssignment = __webpack_require__(6);
	
	var _supportsProtoAssignment2 = _interopRequireDefault(_supportsProtoAssignment);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var RESERVED_STATICS = ['length', 'name', 'arguments', 'caller', 'prototype', 'toString'];
	
	function isEqualDescriptor(a, b) {
	  if (!a && !b) {
	    return true;
	  }
	  if (!a || !b) {
	    return false;
	  }
	  for (var key in a) {
	    if (a[key] !== b[key]) {
	      return false;
	    }
	  }
	  return true;
	}
	
	function proxyClass(InitialClass) {
	  // Prevent double wrapping.
	  // Given a proxy class, return the existing proxy managing it.
	  if (Object.prototype.hasOwnProperty.call(InitialClass, '__reactPatchProxy')) {
	    return InitialClass.__reactPatchProxy;
	  }
	
	  var prototypeProxy = (0, _createPrototypeProxy2.default)();
	  var CurrentClass = undefined;
	
	  var staticDescriptors = {};
	  function wasStaticModifiedByUser(key) {
	    // Compare the descriptor with the one we previously set ourselves.
	    var currentDescriptor = Object.getOwnPropertyDescriptor(ProxyClass, key);
	    return !isEqualDescriptor(staticDescriptors[key], currentDescriptor);
	  }
	
	  var ProxyClass = undefined;
	  try {
	    // Create a proxy constructor with matching name
	    ProxyClass = new Function('getCurrentClass', 'return function ' + (InitialClass.name || 'ProxyClass') + '() {\n        return getCurrentClass().apply(this, arguments);\n      }')(function () {
	      return CurrentClass;
	    });
	  } catch (err) {
	    // Some environments may forbid dynamic evaluation
	    ProxyClass = function () {
	      return CurrentClass.apply(this, arguments);
	    };
	  }
	
	  // Point proxy constructor to the proxy prototype
	  ProxyClass.prototype = prototypeProxy.get();
	
	  // Proxy toString() to the current constructor
	  ProxyClass.toString = function toString() {
	    return CurrentClass.toString();
	  };
	
	  function update(NextClass) {
	    if (typeof NextClass !== 'function') {
	      throw new Error('Expected a constructor.');
	    }
	
	    // Prevent proxy cycles
	    if (Object.prototype.hasOwnProperty.call(NextClass, '__reactPatchProxy')) {
	      return update(NextClass.__reactPatchProxy.__getCurrent());
	    }
	
	    // Save the next constructor so we call it
	    CurrentClass = NextClass;
	
	    // Update the prototype proxy with new methods
	    var mountedInstances = prototypeProxy.update(NextClass.prototype);
	
	    // Set up the constructor property so accessing the statics work
	    ProxyClass.prototype.constructor = ProxyClass;
	
	    // Set up the same prototype for inherited statics
	    ProxyClass.__proto__ = NextClass.__proto__;
	
	    // Copy static methods and properties
	    Object.getOwnPropertyNames(NextClass).forEach(function (key) {
	      if (RESERVED_STATICS.indexOf(key) > -1) {
	        return;
	      }
	
	      var staticDescriptor = _extends({}, Object.getOwnPropertyDescriptor(NextClass, key), {
	        configurable: true
	      });
	
	      // Copy static unless user has redefined it at runtime
	      if (!wasStaticModifiedByUser(key)) {
	        Object.defineProperty(ProxyClass, key, staticDescriptor);
	        staticDescriptors[key] = staticDescriptor;
	      }
	    });
	
	    // Remove old static methods and properties
	    Object.getOwnPropertyNames(ProxyClass).forEach(function (key) {
	      if (RESERVED_STATICS.indexOf(key) > -1) {
	        return;
	      }
	
	      // Skip statics that exist on the next class
	      if (NextClass.hasOwnProperty(key)) {
	        return;
	      }
	
	      // Skip non-configurable statics
	      var descriptor = Object.getOwnPropertyDescriptor(ProxyClass, key);
	      if (descriptor && !descriptor.configurable) {
	        return;
	      }
	
	      // Delete static unless user has redefined it at runtime
	      if (!wasStaticModifiedByUser(key)) {
	        delete ProxyClass[key];
	        delete staticDescriptors[key];
	      }
	    });
	
	    // Try to infer displayName
	    ProxyClass.displayName = NextClass.displayName || NextClass.name;
	
	    // We might have added new methods that need to be auto-bound
	    mountedInstances.forEach(_bindAutoBindMethods2.default);
	    mountedInstances.forEach(_deleteUnknownAutoBindMethods2.default);
	
	    // Let the user take care of redrawing
	    return mountedInstances;
	  };
	
	  function get() {
	    return ProxyClass;
	  }
	
	  function getCurrent() {
	    return CurrentClass;
	  }
	
	  update(InitialClass);
	
	  var proxy = { get: get, update: update };
	
	  Object.defineProperty(proxy, '__getCurrent', {
	    configurable: false,
	    writable: false,
	    enumerable: false,
	    value: getCurrent
	  });
	
	  Object.defineProperty(ProxyClass, '__reactPatchProxy', {
	    configurable: false,
	    writable: false,
	    enumerable: false,
	    value: proxy
	  });
	
	  return proxy;
	}
	
	function createFallback(Component) {
	  var CurrentComponent = Component;
	
	  return {
	    get: function get() {
	      return CurrentComponent;
	    },
	    update: function update(NextComponent) {
	      CurrentComponent = NextComponent;
	    }
	  };
	}
	
	function createClassProxy(Component) {
	  return Component.__proto__ && (0, _supportsProtoAssignment2.default)() ? proxyClass(Component) : createFallback(Component);
	}

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = createPrototypeProxy;
	
	var _assign = __webpack_require__(9);
	
	var _assign2 = _interopRequireDefault(_assign);
	
	var _difference = __webpack_require__(33);
	
	var _difference2 = _interopRequireDefault(_difference);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function createPrototypeProxy() {
	  var proxy = {};
	  var current = null;
	  var mountedInstances = [];
	
	  /**
	   * Creates a proxied toString() method pointing to the current version's toString().
	   */
	  function proxyToString(name) {
	    // Wrap to always call the current version
	    return function toString() {
	      if (typeof current[name] === 'function') {
	        return current[name].toString();
	      } else {
	        return '<method was deleted>';
	      }
	    };
	  }
	
	  /**
	   * Creates a proxied method that calls the current version, whenever available.
	   */
	  function proxyMethod(name) {
	    // Wrap to always call the current version
	    var proxiedMethod = function proxiedMethod() {
	      if (typeof current[name] === 'function') {
	        return current[name].apply(this, arguments);
	      }
	    };
	
	    // Copy properties of the original function, if any
	    (0, _assign2.default)(proxiedMethod, current[name]);
	    proxiedMethod.toString = proxyToString(name);
	
	    return proxiedMethod;
	  }
	
	  /**
	   * Augments the original componentDidMount with instance tracking.
	   */
	  function proxiedComponentDidMount() {
	    mountedInstances.push(this);
	    if (typeof current.componentDidMount === 'function') {
	      return current.componentDidMount.apply(this, arguments);
	    }
	  }
	  proxiedComponentDidMount.toString = proxyToString('componentDidMount');
	
	  /**
	   * Augments the original componentWillUnmount with instance tracking.
	   */
	  function proxiedComponentWillUnmount() {
	    var index = mountedInstances.indexOf(this);
	    // Unless we're in a weird environment without componentDidMount
	    if (index !== -1) {
	      mountedInstances.splice(index, 1);
	    }
	    if (typeof current.componentWillUnmount === 'function') {
	      return current.componentWillUnmount.apply(this, arguments);
	    }
	  }
	  proxiedComponentWillUnmount.toString = proxyToString('componentWillUnmount');
	
	  /**
	   * Defines a property on the proxy.
	   */
	  function defineProxyProperty(name, descriptor) {
	    Object.defineProperty(proxy, name, descriptor);
	  }
	
	  /**
	   * Defines a property, attempting to keep the original descriptor configuration.
	   */
	  function defineProxyPropertyWithValue(name, value) {
	    var _ref = Object.getOwnPropertyDescriptor(current, name) || {};
	
	    var _ref$enumerable = _ref.enumerable;
	    var enumerable = _ref$enumerable === undefined ? false : _ref$enumerable;
	    var _ref$writable = _ref.writable;
	    var writable = _ref$writable === undefined ? true : _ref$writable;
	
	    defineProxyProperty(name, {
	      configurable: true,
	      enumerable: enumerable,
	      writable: writable,
	      value: value
	    });
	  }
	
	  /**
	   * Creates an auto-bind map mimicking the original map, but directed at proxy.
	   */
	  function createAutoBindMap() {
	    if (!current.__reactAutoBindMap) {
	      return;
	    }
	
	    var __reactAutoBindMap = {};
	    for (var name in current.__reactAutoBindMap) {
	      if (typeof proxy[name] === 'function' && current.__reactAutoBindMap.hasOwnProperty(name)) {
	        __reactAutoBindMap[name] = proxy[name];
	      }
	    }
	
	    return __reactAutoBindMap;
	  }
	
	  /**
	   * Applies the updated prototype.
	   */
	  function update(next) {
	    // Save current source of truth
	    current = next;
	
	    // Find changed property names
	    var currentNames = Object.getOwnPropertyNames(current);
	    var previousName = Object.getOwnPropertyNames(proxy);
	    var removedNames = (0, _difference2.default)(previousName, currentNames);
	
	    // Remove properties and methods that are no longer there
	    removedNames.forEach(function (name) {
	      delete proxy[name];
	    });
	
	    // Copy every descriptor
	    currentNames.forEach(function (name) {
	      var descriptor = Object.getOwnPropertyDescriptor(current, name);
	      if (typeof descriptor.value === 'function') {
	        // Functions require additional wrapping so they can be bound later
	        defineProxyPropertyWithValue(name, proxyMethod(name));
	      } else {
	        // Other values can be copied directly
	        defineProxyProperty(name, descriptor);
	      }
	    });
	
	    // Track mounting and unmounting
	    defineProxyPropertyWithValue('componentDidMount', proxiedComponentDidMount);
	    defineProxyPropertyWithValue('componentWillUnmount', proxiedComponentWillUnmount);
	    defineProxyPropertyWithValue('__reactAutoBindMap', createAutoBindMap());
	
	    // Set up the prototype chain
	    proxy.__proto__ = next;
	
	    return mountedInstances;
	  }
	
	  /**
	   * Returns the up-to-date proxy prototype.
	   */
	  function get() {
	    return proxy;
	  }
	
	  return {
	    update: update,
	    get: get
	  };
	};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var assignWith = __webpack_require__(10),
	    baseAssign = __webpack_require__(26),
	    createAssigner = __webpack_require__(28);
	
	/**
	 * Assigns own enumerable properties of source object(s) to the destination
	 * object. Subsequent sources overwrite property assignments of previous sources.
	 * If `customizer` is provided it's invoked to produce the assigned values.
	 * The `customizer` is bound to `thisArg` and invoked with five arguments:
	 * (objectValue, sourceValue, key, object, source).
	 *
	 * **Note:** This method mutates `object` and is based on
	 * [`Object.assign`](http://ecma-international.org/ecma-262/6.0/#sec-object.assign).
	 *
	 * @static
	 * @memberOf _
	 * @alias extend
	 * @category Object
	 * @param {Object} object The destination object.
	 * @param {...Object} [sources] The source objects.
	 * @param {Function} [customizer] The function to customize assigned values.
	 * @param {*} [thisArg] The `this` binding of `customizer`.
	 * @returns {Object} Returns `object`.
	 * @example
	 *
	 * _.assign({ 'user': 'barney' }, { 'age': 40 }, { 'user': 'fred' });
	 * // => { 'user': 'fred', 'age': 40 }
	 *
	 * // using a customizer callback
	 * var defaults = _.partialRight(_.assign, function(value, other) {
	 *   return _.isUndefined(value) ? other : value;
	 * });
	 *
	 * defaults({ 'user': 'barney' }, { 'age': 36 }, { 'user': 'fred' });
	 * // => { 'user': 'barney', 'age': 36 }
	 */
	var assign = createAssigner(function(object, source, customizer) {
	  return customizer
	    ? assignWith(object, source, customizer)
	    : baseAssign(object, source);
	});
	
	module.exports = assign;


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var keys = __webpack_require__(11);
	
	/**
	 * A specialized version of `_.assign` for customizing assigned values without
	 * support for argument juggling, multiple sources, and `this` binding `customizer`
	 * functions.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @param {Function} customizer The function to customize assigned values.
	 * @returns {Object} Returns `object`.
	 */
	function assignWith(object, source, customizer) {
	  var index = -1,
	      props = keys(source),
	      length = props.length;
	
	  while (++index < length) {
	    var key = props[index],
	        value = object[key],
	        result = customizer(value, source[key], key, object, source);
	
	    if ((result === result ? (result !== value) : (value === value)) ||
	        (value === undefined && !(key in object))) {
	      object[key] = result;
	    }
	  }
	  return object;
	}
	
	module.exports = assignWith;


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(12),
	    isArrayLike = __webpack_require__(17),
	    isObject = __webpack_require__(15),
	    shimKeys = __webpack_require__(21);
	
	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeKeys = getNative(Object, 'keys');
	
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
	var keys = !nativeKeys ? shimKeys : function(object) {
	  var Ctor = object == null ? undefined : object.constructor;
	  if ((typeof Ctor == 'function' && Ctor.prototype === object) ||
	      (typeof object != 'function' && isArrayLike(object))) {
	    return shimKeys(object);
	  }
	  return isObject(object) ? nativeKeys(object) : [];
	};
	
	module.exports = keys;


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var isNative = __webpack_require__(13);
	
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
	
	module.exports = getNative;


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(14),
	    isObjectLike = __webpack_require__(16);
	
	/** Used to detect host constructors (Safari > 5). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/** Used to resolve the decompiled source of functions. */
	var fnToString = Function.prototype.toString;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  fnToString.call(hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);
	
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
	
	module.exports = isNative;


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(15);
	
	/** `Object#toString` result references. */
	var funcTag = '[object Function]';
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;
	
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
	
	module.exports = isFunction;


/***/ },
/* 15 */
/***/ function(module, exports) {

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
	
	module.exports = isObject;


/***/ },
/* 16 */
/***/ function(module, exports) {

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
	
	module.exports = isObjectLike;


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var getLength = __webpack_require__(18),
	    isLength = __webpack_require__(20);
	
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
	
	module.exports = isArrayLike;


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var baseProperty = __webpack_require__(19);
	
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
	
	module.exports = getLength;


/***/ },
/* 19 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.property` without support for deep paths.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @returns {Function} Returns the new function.
	 */
	function baseProperty(key) {
	  return function(object) {
	    return object == null ? undefined : object[key];
	  };
	}
	
	module.exports = baseProperty;


/***/ },
/* 20 */
/***/ function(module, exports) {

	/**
	 * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
	 * of an array-like value.
	 */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
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
	
	module.exports = isLength;


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var isArguments = __webpack_require__(22),
	    isArray = __webpack_require__(23),
	    isIndex = __webpack_require__(24),
	    isLength = __webpack_require__(20),
	    keysIn = __webpack_require__(25);
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
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
	
	  var allowIndexes = !!length && isLength(length) &&
	    (isArray(object) || isArguments(object));
	
	  var index = -1,
	      result = [];
	
	  while (++index < propsLength) {
	    var key = props[index];
	    if ((allowIndexes && isIndex(key, length)) || hasOwnProperty.call(object, key)) {
	      result.push(key);
	    }
	  }
	  return result;
	}
	
	module.exports = shimKeys;


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var isArrayLike = __webpack_require__(17),
	    isObjectLike = __webpack_require__(16);
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/** Native method references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;
	
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
	  return isObjectLike(value) && isArrayLike(value) &&
	    hasOwnProperty.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
	}
	
	module.exports = isArguments;


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(12),
	    isLength = __webpack_require__(20),
	    isObjectLike = __webpack_require__(16);
	
	/** `Object#toString` result references. */
	var arrayTag = '[object Array]';
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;
	
	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeIsArray = getNative(Array, 'isArray');
	
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
	var isArray = nativeIsArray || function(value) {
	  return isObjectLike(value) && isLength(value.length) && objToString.call(value) == arrayTag;
	};
	
	module.exports = isArray;


/***/ },
/* 24 */
/***/ function(module, exports) {

	/** Used to detect unsigned integer values. */
	var reIsUint = /^\d+$/;
	
	/**
	 * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
	 * of an array-like value.
	 */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  value = (typeof value == 'number' || reIsUint.test(value)) ? +value : -1;
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return value > -1 && value % 1 == 0 && value < length;
	}
	
	module.exports = isIndex;


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var isArguments = __webpack_require__(22),
	    isArray = __webpack_require__(23),
	    isIndex = __webpack_require__(24),
	    isLength = __webpack_require__(20),
	    isObject = __webpack_require__(15);
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
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
	  length = (length && isLength(length) &&
	    (isArray(object) || isArguments(object)) && length) || 0;
	
	  var Ctor = object.constructor,
	      index = -1,
	      isProto = typeof Ctor == 'function' && Ctor.prototype === object,
	      result = Array(length),
	      skipIndexes = length > 0;
	
	  while (++index < length) {
	    result[index] = (index + '');
	  }
	  for (var key in object) {
	    if (!(skipIndexes && isIndex(key, length)) &&
	        !(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
	      result.push(key);
	    }
	  }
	  return result;
	}
	
	module.exports = keysIn;


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var baseCopy = __webpack_require__(27),
	    keys = __webpack_require__(11);
	
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
	  return source == null
	    ? object
	    : baseCopy(source, keys(source), object);
	}
	
	module.exports = baseAssign;


/***/ },
/* 27 */
/***/ function(module, exports) {

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
	
	module.exports = baseCopy;


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var bindCallback = __webpack_require__(29),
	    isIterateeCall = __webpack_require__(31),
	    restParam = __webpack_require__(32);
	
	/**
	 * Creates a `_.assign`, `_.defaults`, or `_.merge` function.
	 *
	 * @private
	 * @param {Function} assigner The function to assign values.
	 * @returns {Function} Returns the new assigner function.
	 */
	function createAssigner(assigner) {
	  return restParam(function(object, sources) {
	    var index = -1,
	        length = object == null ? 0 : sources.length,
	        customizer = length > 2 ? sources[length - 2] : undefined,
	        guard = length > 2 ? sources[2] : undefined,
	        thisArg = length > 1 ? sources[length - 1] : undefined;
	
	    if (typeof customizer == 'function') {
	      customizer = bindCallback(customizer, thisArg, 5);
	      length -= 2;
	    } else {
	      customizer = typeof thisArg == 'function' ? thisArg : undefined;
	      length -= (customizer ? 1 : 0);
	    }
	    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
	      customizer = length < 3 ? undefined : customizer;
	      length = 1;
	    }
	    while (++index < length) {
	      var source = sources[index];
	      if (source) {
	        assigner(object, source, customizer);
	      }
	    }
	    return object;
	  });
	}
	
	module.exports = createAssigner;


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var identity = __webpack_require__(30);
	
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
	    case 1: return function(value) {
	      return func.call(thisArg, value);
	    };
	    case 3: return function(value, index, collection) {
	      return func.call(thisArg, value, index, collection);
	    };
	    case 4: return function(accumulator, value, index, collection) {
	      return func.call(thisArg, accumulator, value, index, collection);
	    };
	    case 5: return function(value, other, key, object, source) {
	      return func.call(thisArg, value, other, key, object, source);
	    };
	  }
	  return function() {
	    return func.apply(thisArg, arguments);
	  };
	}
	
	module.exports = bindCallback;


/***/ },
/* 30 */
/***/ function(module, exports) {

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
	
	module.exports = identity;


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var isArrayLike = __webpack_require__(17),
	    isIndex = __webpack_require__(24),
	    isObject = __webpack_require__(15);
	
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
	  if (type == 'number'
	      ? (isArrayLike(object) && isIndex(index, object.length))
	      : (type == 'string' && index in object)) {
	    var other = object[index];
	    return value === value ? (value === other) : (other !== other);
	  }
	  return false;
	}
	
	module.exports = isIterateeCall;


/***/ },
/* 32 */
/***/ function(module, exports) {

	/** Used as the `TypeError` message for "Functions" methods. */
	var FUNC_ERROR_TEXT = 'Expected a function';
	
	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;
	
	/**
	 * Creates a function that invokes `func` with the `this` binding of the
	 * created function and arguments from `start` and beyond provided as an array.
	 *
	 * **Note:** This method is based on the [rest parameter](https://developer.mozilla.org/Web/JavaScript/Reference/Functions/rest_parameters).
	 *
	 * @static
	 * @memberOf _
	 * @category Function
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @returns {Function} Returns the new function.
	 * @example
	 *
	 * var say = _.restParam(function(what, names) {
	 *   return what + ' ' + _.initial(names).join(', ') +
	 *     (_.size(names) > 1 ? ', & ' : '') + _.last(names);
	 * });
	 *
	 * say('hello', 'fred', 'barney', 'pebbles');
	 * // => 'hello fred, barney, & pebbles'
	 */
	function restParam(func, start) {
	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  start = nativeMax(start === undefined ? (func.length - 1) : (+start || 0), 0);
	  return function() {
	    var args = arguments,
	        index = -1,
	        length = nativeMax(args.length - start, 0),
	        rest = Array(length);
	
	    while (++index < length) {
	      rest[index] = args[start + index];
	    }
	    switch (start) {
	      case 0: return func.call(this, rest);
	      case 1: return func.call(this, args[0], rest);
	      case 2: return func.call(this, args[0], args[1], rest);
	    }
	    var otherArgs = Array(start + 1);
	    index = -1;
	    while (++index < start) {
	      otherArgs[index] = args[index];
	    }
	    otherArgs[start] = rest;
	    return func.apply(this, otherArgs);
	  };
	}
	
	module.exports = restParam;


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var baseDifference = __webpack_require__(34),
	    baseFlatten = __webpack_require__(41),
	    isArrayLike = __webpack_require__(17),
	    isObjectLike = __webpack_require__(16),
	    restParam = __webpack_require__(32);
	
	/**
	 * Creates an array of unique `array` values not included in the other
	 * provided arrays using [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	 * for equality comparisons.
	 *
	 * @static
	 * @memberOf _
	 * @category Array
	 * @param {Array} array The array to inspect.
	 * @param {...Array} [values] The arrays of values to exclude.
	 * @returns {Array} Returns the new array of filtered values.
	 * @example
	 *
	 * _.difference([1, 2, 3], [4, 2]);
	 * // => [1, 3]
	 */
	var difference = restParam(function(array, values) {
	  return (isObjectLike(array) && isArrayLike(array))
	    ? baseDifference(array, baseFlatten(values, false, true))
	    : [];
	});
	
	module.exports = difference;


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	var baseIndexOf = __webpack_require__(35),
	    cacheIndexOf = __webpack_require__(37),
	    createCache = __webpack_require__(38);
	
	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;
	
	/**
	 * The base implementation of `_.difference` which accepts a single array
	 * of values to exclude.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {Array} values The values to exclude.
	 * @returns {Array} Returns the new array of filtered values.
	 */
	function baseDifference(array, values) {
	  var length = array ? array.length : 0,
	      result = [];
	
	  if (!length) {
	    return result;
	  }
	  var index = -1,
	      indexOf = baseIndexOf,
	      isCommon = true,
	      cache = (isCommon && values.length >= LARGE_ARRAY_SIZE) ? createCache(values) : null,
	      valuesLength = values.length;
	
	  if (cache) {
	    indexOf = cacheIndexOf;
	    isCommon = false;
	    values = cache;
	  }
	  outer:
	  while (++index < length) {
	    var value = array[index];
	
	    if (isCommon && value === value) {
	      var valuesIndex = valuesLength;
	      while (valuesIndex--) {
	        if (values[valuesIndex] === value) {
	          continue outer;
	        }
	      }
	      result.push(value);
	    }
	    else if (indexOf(values, value, 0) < 0) {
	      result.push(value);
	    }
	  }
	  return result;
	}
	
	module.exports = baseDifference;


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	var indexOfNaN = __webpack_require__(36);
	
	/**
	 * The base implementation of `_.indexOf` without support for binary searches.
	 *
	 * @private
	 * @param {Array} array The array to search.
	 * @param {*} value The value to search for.
	 * @param {number} fromIndex The index to search from.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function baseIndexOf(array, value, fromIndex) {
	  if (value !== value) {
	    return indexOfNaN(array, fromIndex);
	  }
	  var index = fromIndex - 1,
	      length = array.length;
	
	  while (++index < length) {
	    if (array[index] === value) {
	      return index;
	    }
	  }
	  return -1;
	}
	
	module.exports = baseIndexOf;


/***/ },
/* 36 */
/***/ function(module, exports) {

	/**
	 * Gets the index at which the first occurrence of `NaN` is found in `array`.
	 *
	 * @private
	 * @param {Array} array The array to search.
	 * @param {number} fromIndex The index to search from.
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {number} Returns the index of the matched `NaN`, else `-1`.
	 */
	function indexOfNaN(array, fromIndex, fromRight) {
	  var length = array.length,
	      index = fromIndex + (fromRight ? 0 : -1);
	
	  while ((fromRight ? index-- : ++index < length)) {
	    var other = array[index];
	    if (other !== other) {
	      return index;
	    }
	  }
	  return -1;
	}
	
	module.exports = indexOfNaN;


/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(15);
	
	/**
	 * Checks if `value` is in `cache` mimicking the return signature of
	 * `_.indexOf` by returning `0` if the value is found, else `-1`.
	 *
	 * @private
	 * @param {Object} cache The cache to search.
	 * @param {*} value The value to search for.
	 * @returns {number} Returns `0` if `value` is found, else `-1`.
	 */
	function cacheIndexOf(cache, value) {
	  var data = cache.data,
	      result = (typeof value == 'string' || isObject(value)) ? data.set.has(value) : data.hash[value];
	
	  return result ? 0 : -1;
	}
	
	module.exports = cacheIndexOf;


/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {var SetCache = __webpack_require__(39),
	    getNative = __webpack_require__(12);
	
	/** Native method references. */
	var Set = getNative(global, 'Set');
	
	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeCreate = getNative(Object, 'create');
	
	/**
	 * Creates a `Set` cache object to optimize linear searches of large arrays.
	 *
	 * @private
	 * @param {Array} [values] The values to cache.
	 * @returns {null|Object} Returns the new cache object if `Set` is supported, else `null`.
	 */
	function createCache(values) {
	  return (nativeCreate && Set) ? new SetCache(values) : null;
	}
	
	module.exports = createCache;
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {var cachePush = __webpack_require__(40),
	    getNative = __webpack_require__(12);
	
	/** Native method references. */
	var Set = getNative(global, 'Set');
	
	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeCreate = getNative(Object, 'create');
	
	/**
	 *
	 * Creates a cache object to store unique values.
	 *
	 * @private
	 * @param {Array} [values] The values to cache.
	 */
	function SetCache(values) {
	  var length = values ? values.length : 0;
	
	  this.data = { 'hash': nativeCreate(null), 'set': new Set };
	  while (length--) {
	    this.push(values[length]);
	  }
	}
	
	// Add functions to the `Set` cache.
	SetCache.prototype.push = cachePush;
	
	module.exports = SetCache;
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(15);
	
	/**
	 * Adds `value` to the cache.
	 *
	 * @private
	 * @name push
	 * @memberOf SetCache
	 * @param {*} value The value to cache.
	 */
	function cachePush(value) {
	  var data = this.data;
	  if (typeof value == 'string' || isObject(value)) {
	    data.set.add(value);
	  } else {
	    data.hash[value] = true;
	  }
	}
	
	module.exports = cachePush;


/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	var arrayPush = __webpack_require__(42),
	    isArguments = __webpack_require__(22),
	    isArray = __webpack_require__(23),
	    isArrayLike = __webpack_require__(17),
	    isObjectLike = __webpack_require__(16);
	
	/**
	 * The base implementation of `_.flatten` with added support for restricting
	 * flattening and specifying the start index.
	 *
	 * @private
	 * @param {Array} array The array to flatten.
	 * @param {boolean} [isDeep] Specify a deep flatten.
	 * @param {boolean} [isStrict] Restrict flattening to arrays-like objects.
	 * @param {Array} [result=[]] The initial result value.
	 * @returns {Array} Returns the new flattened array.
	 */
	function baseFlatten(array, isDeep, isStrict, result) {
	  result || (result = []);
	
	  var index = -1,
	      length = array.length;
	
	  while (++index < length) {
	    var value = array[index];
	    if (isObjectLike(value) && isArrayLike(value) &&
	        (isStrict || isArray(value) || isArguments(value))) {
	      if (isDeep) {
	        // Recursively flatten arrays (susceptible to call stack limits).
	        baseFlatten(value, isDeep, isStrict, result);
	      } else {
	        arrayPush(result, value);
	      }
	    } else if (!isStrict) {
	      result[result.length] = value;
	    }
	  }
	  return result;
	}
	
	module.exports = baseFlatten;


/***/ },
/* 42 */
/***/ function(module, exports) {

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


/***/ },
/* 43 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = bindAutoBindMethods;
	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of React source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * Original:
	 * https://github.com/facebook/react/blob/6508b1ad273a6f371e8d90ae676e5390199461b4/src/isomorphic/classic/class/ReactClass.js#L650-L713
	 */
	
	function bindAutoBindMethod(component, method) {
	  var boundMethod = method.bind(component);
	
	  boundMethod.__reactBoundContext = component;
	  boundMethod.__reactBoundMethod = method;
	  boundMethod.__reactBoundArguments = null;
	
	  var componentName = component.constructor.displayName,
	      _bind = boundMethod.bind;
	
	  boundMethod.bind = function (newThis) {
	    var args = Array.prototype.slice.call(arguments, 1);
	    if (newThis !== component && newThis !== null) {
	      console.warn('bind(): React component methods may only be bound to the ' + 'component instance. See ' + componentName);
	    } else if (!args.length) {
	      console.warn('bind(): You are binding a component method to the component. ' + 'React does this for you automatically in a high-performance ' + 'way, so you can safely remove this call. See ' + componentName);
	      return boundMethod;
	    }
	
	    var reboundMethod = _bind.apply(boundMethod, arguments);
	    reboundMethod.__reactBoundContext = component;
	    reboundMethod.__reactBoundMethod = method;
	    reboundMethod.__reactBoundArguments = args;
	
	    return reboundMethod;
	  };
	
	  return boundMethod;
	}
	
	function bindAutoBindMethods(component) {
	  for (var autoBindKey in component.__reactAutoBindMap) {
	    if (!component.__reactAutoBindMap.hasOwnProperty(autoBindKey)) {
	      return;
	    }
	
	    // Tweak: skip methods that are already bound.
	    // This is to preserve method reference in case it is used
	    // as a subscription handler that needs to be detached later.
	    if (component.hasOwnProperty(autoBindKey) && component[autoBindKey].__reactBoundContext === component) {
	      continue;
	    }
	
	    var method = component.__reactAutoBindMap[autoBindKey];
	    component[autoBindKey] = bindAutoBindMethod(component, method);
	  }
	};

/***/ },
/* 44 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = deleteUnknownAutoBindMethods;
	function shouldDeleteClassicInstanceMethod(component, name) {
	  if (component.__reactAutoBindMap.hasOwnProperty(name)) {
	    // It's a known autobound function, keep it
	    return false;
	  }
	
	  if (component[name].__reactBoundArguments !== null) {
	    // It's a function bound to specific args, keep it
	    return false;
	  }
	
	  // It's a cached bound method for a function
	  // that was deleted by user, so we delete it from component.
	  return true;
	}
	
	function shouldDeleteModernInstanceMethod(component, name) {
	  var prototype = component.constructor.prototype;
	
	  var prototypeDescriptor = Object.getOwnPropertyDescriptor(prototype, name);
	
	  if (!prototypeDescriptor || !prototypeDescriptor.get) {
	    // This is definitely not an autobinding getter
	    return false;
	  }
	
	  if (prototypeDescriptor.get().length !== component[name].length) {
	    // The length doesn't match, bail out
	    return false;
	  }
	
	  // This seems like a method bound using an autobinding getter on the prototype
	  // Hopefully we won't run into too many false positives.
	  return true;
	}
	
	function shouldDeleteInstanceMethod(component, name) {
	  var descriptor = Object.getOwnPropertyDescriptor(component, name);
	  if (typeof descriptor.value !== 'function') {
	    // Not a function, or something fancy: bail out
	    return;
	  }
	
	  if (component.__reactAutoBindMap) {
	    // Classic
	    return shouldDeleteClassicInstanceMethod(component, name);
	  } else {
	    // Modern
	    return shouldDeleteModernInstanceMethod(component, name);
	  }
	}
	
	/**
	 * Deletes autobound methods from the instance.
	 *
	 * For classic React classes, we only delete the methods that no longer exist in map.
	 * This means the user actually deleted them in code.
	 *
	 * For modern classes, we delete methods that exist on prototype with the same length,
	 * and which have getters on prototype, but are normal values on the instance.
	 * This is usually an indication that an autobinding decorator is being used,
	 * and the getter will re-generate the memoized handler on next access.
	 */
	function deleteUnknownAutoBindMethods(component) {
	  var names = Object.getOwnPropertyNames(component);
	
	  names.forEach(function (name) {
	    if (shouldDeleteInstanceMethod(component, name)) {
	      delete component[name];
	    }
	  });
	}

/***/ },
/* 45 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	exports["default"] = getForceUpdate;
	function traverseRenderedChildren(internalInstance, callback, argument) {
	  callback(internalInstance, argument);
	
	  if (internalInstance._renderedComponent) {
	    traverseRenderedChildren(internalInstance._renderedComponent, callback, argument);
	  } else {
	    for (var key in internalInstance._renderedChildren) {
	      if (internalInstance._renderedChildren.hasOwnProperty(key)) {
	        traverseRenderedChildren(internalInstance._renderedChildren[key], callback, argument);
	      }
	    }
	  }
	}
	
	function setPendingForceUpdate(internalInstance) {
	  if (internalInstance._pendingForceUpdate === false) {
	    internalInstance._pendingForceUpdate = true;
	  }
	}
	
	function forceUpdateIfPending(internalInstance, React) {
	  if (internalInstance._pendingForceUpdate === true) {
	    var publicInstance = internalInstance._instance;
	    React.Component.prototype.forceUpdate.call(publicInstance);
	  }
	}
	
	function getForceUpdate(React) {
	  return function (instance) {
	    var internalInstance = instance._reactInternalInstance;
	    traverseRenderedChildren(internalInstance, setPendingForceUpdate);
	    traverseRenderedChildren(internalInstance, forceUpdateIfPending, React);
	  };
	}
	
	module.exports = exports["default"];

/***/ },
/* 46 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {if (typeof window !== "undefined") {
	    module.exports = window;
	} else if (typeof global !== "undefined") {
	    module.exports = global;
	} else if (typeof self !== "undefined"){
	    module.exports = self;
	} else {
	    module.exports = {};
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 47 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_47__;

/***/ },
/* 48 */
/***/ function(module, exports) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = catchErrors;
	function catchErrors(_ref) {
	  var filename = _ref.filename;
	  var components = _ref.components;
	  var imports = _ref.imports;
	
	  var _imports = _slicedToArray(imports, 3);
	
	  var React = _imports[0];
	  var ErrorReporter = _imports[1];
	  var reporterOptions = _imports[2];
	
	  if (!React || !React.Component) {
	    throw new Error('imports[0] for react-transform-catch-errors does not look like React.');
	  }
	  if (typeof ErrorReporter !== 'function') {
	    throw new Error('imports[1] for react-transform-catch-errors does not look like a React component.');
	  }
	
	  return function wrapToCatchErrors(ReactClass, componentId) {
	    var originalRender = ReactClass.prototype.render;
	
	    ReactClass.prototype.render = function tryRender() {
	      try {
	        return originalRender.apply(this, arguments);
	      } catch (err) {
	        setTimeout(function () {
	          if (typeof console.reportErrorsAsExceptions !== 'undefined') {
	            var prevReportErrorAsExceptions = console.reportErrorsAsExceptions;
	            // We're in React Native. Don't throw.
	            // Stop react-native from triggering its own error handler
	            console.reportErrorsAsExceptions = false;
	            // Log an error
	            console.error(err);
	            // Reactivate it so other errors are still handled
	            console.reportErrorsAsExceptions = prevReportErrorAsExceptions;
	          } else {
	            throw err;
	          }
	        });
	
	        return React.createElement(ErrorReporter, _extends({
	          error: err,
	          filename: filename
	        }, reporterOptions));
	      }
	    };
	
	    return ReactClass;
	  };
	}

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(47);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _styleJs = __webpack_require__(50);
	
	var _styleJs2 = _interopRequireDefault(_styleJs);
	
	var _errorStackParser = __webpack_require__(51);
	
	var _errorStackParser2 = _interopRequireDefault(_errorStackParser);
	
	var _objectAssign = __webpack_require__(53);
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	var _lib = __webpack_require__(54);
	
	var __$Getters__ = [];
	var __$Setters__ = [];
	var __$Resetters__ = [];
	
	function __GetDependency__(name) {
	  return __$Getters__[name]();
	}
	
	function __Rewire__(name, value) {
	  __$Setters__[name](value);
	}
	
	function __ResetDependency__(name) {
	  __$Resetters__[name]();
	}
	
	var __RewireAPI__ = {
	  '__GetDependency__': __GetDependency__,
	  '__get__': __GetDependency__,
	  '__Rewire__': __Rewire__,
	  '__set__': __Rewire__,
	  '__ResetDependency__': __ResetDependency__
	};
	var React = _react2['default'];
	var Component = _react.Component;
	var PropTypes = _react.PropTypes;
	
	__$Getters__['React'] = function () {
	  return React;
	};
	
	__$Setters__['React'] = function (value) {
	  React = value;
	};
	
	__$Resetters__['React'] = function () {
	  React = _react2['default'];
	};
	
	__$Getters__['Component'] = function () {
	  return Component;
	};
	
	__$Setters__['Component'] = function (value) {
	  Component = value;
	};
	
	__$Resetters__['Component'] = function () {
	  Component = _react.Component;
	};
	
	__$Getters__['PropTypes'] = function () {
	  return PropTypes;
	};
	
	__$Setters__['PropTypes'] = function (value) {
	  PropTypes = value;
	};
	
	__$Resetters__['PropTypes'] = function () {
	  PropTypes = _react.PropTypes;
	};
	
	var style = _styleJs2['default'];
	
	__$Getters__['style'] = function () {
	  return style;
	};
	
	__$Setters__['style'] = function (value) {
	  style = value;
	};
	
	__$Resetters__['style'] = function () {
	  style = _styleJs2['default'];
	};
	
	var ErrorStackParser = _errorStackParser2['default'];
	
	__$Getters__['ErrorStackParser'] = function () {
	  return ErrorStackParser;
	};
	
	__$Setters__['ErrorStackParser'] = function (value) {
	  ErrorStackParser = value;
	};
	
	__$Resetters__['ErrorStackParser'] = function () {
	  ErrorStackParser = _errorStackParser2['default'];
	};
	
	var assign = _objectAssign2['default'];
	
	__$Getters__['assign'] = function () {
	  return assign;
	};
	
	__$Setters__['assign'] = function (value) {
	  assign = value;
	};
	
	__$Resetters__['assign'] = function () {
	  assign = _objectAssign2['default'];
	};
	
	var isFilenameAbsolute = _lib.isFilenameAbsolute;
	var makeUrl = _lib.makeUrl;
	var makeLinkText = _lib.makeLinkText;
	
	__$Getters__['isFilenameAbsolute'] = function () {
	  return isFilenameAbsolute;
	};
	
	__$Setters__['isFilenameAbsolute'] = function (value) {
	  isFilenameAbsolute = value;
	};
	
	__$Resetters__['isFilenameAbsolute'] = function () {
	  isFilenameAbsolute = _lib.isFilenameAbsolute;
	};
	
	__$Getters__['makeUrl'] = function () {
	  return makeUrl;
	};
	
	__$Setters__['makeUrl'] = function (value) {
	  makeUrl = value;
	};
	
	__$Resetters__['makeUrl'] = function () {
	  makeUrl = _lib.makeUrl;
	};
	
	__$Getters__['makeLinkText'] = function () {
	  return makeLinkText;
	};
	
	__$Setters__['makeLinkText'] = function (value) {
	  makeLinkText = value;
	};
	
	__$Resetters__['makeLinkText'] = function () {
	  makeLinkText = _lib.makeLinkText;
	};
	
	var RedBox = (function (_Component) {
	  _inherits(RedBox, _Component);
	
	  function RedBox() {
	    _classCallCheck(this, RedBox);
	
	    _Component.apply(this, arguments);
	  }
	
	  RedBox.prototype.render = function render() {
	    var _props = this.props;
	    var error = _props.error;
	    var filename = _props.filename;
	    var editorScheme = _props.editorScheme;
	    var useLines = _props.useLines;
	    var useColumns = _props.useColumns;
	
	    var _assign = assign({}, style, this.props.style);
	
	    var redbox = _assign.redbox;
	    var message = _assign.message;
	    var stack = _assign.stack;
	    var frame = _assign.frame;
	    var file = _assign.file;
	    var linkToFile = _assign.linkToFile;
	
	    var frames = ErrorStackParser.parse(error).map(function (f, index) {
	      var text = undefined;
	      var url = undefined;
	
	      if (index === 0 && filename && !isFilenameAbsolute(f.fileName)) {
	        url = makeUrl(filename, editorScheme);
	        text = makeLinkText(filename);
	      } else {
	        var lines = useLines ? f.lineNumber : null;
	        var columns = useColumns ? f.columnNumber : null;
	        url = makeUrl(f.fileName, editorScheme, lines, columns);
	        text = makeLinkText(f.fileName, lines, columns);
	      }
	
	      return React.createElement(
	        'div',
	        { style: frame, key: index },
	        React.createElement(
	          'div',
	          null,
	          f.functionName
	        ),
	        React.createElement(
	          'div',
	          { style: file },
	          React.createElement(
	            'a',
	            { href: url, style: linkToFile },
	            text
	          )
	        )
	      );
	    });
	    return React.createElement(
	      'div',
	      { style: redbox },
	      React.createElement(
	        'div',
	        { style: message },
	        error.name,
	        ': ',
	        error.message
	      ),
	      React.createElement(
	        'div',
	        { style: stack },
	        frames
	      )
	    );
	  };
	
	  _createClass(RedBox, null, [{
	    key: 'propTypes',
	    value: {
	      error: PropTypes.instanceOf(Error).isRequired,
	      filename: PropTypes.string,
	      editorScheme: PropTypes.string,
	      useLines: PropTypes.bool,
	      useColumns: PropTypes.bool
	    },
	    enumerable: true
	  }, {
	    key: 'displayName',
	    value: 'RedBox',
	    enumerable: true
	  }, {
	    key: 'defaultProps',
	    value: {
	      useLines: true,
	      useColumns: true
	    },
	    enumerable: true
	  }]);
	
	  return RedBox;
	})(Component);
	
	var _defaultExport = RedBox;
	
	if (typeof _defaultExport === 'object' || typeof _defaultExport === 'function') {
	  Object.defineProperty(_defaultExport, '__Rewire__', {
	    'value': __Rewire__,
	    'enumberable': false
	  });
	  Object.defineProperty(_defaultExport, '__set__', {
	    'value': __Rewire__,
	    'enumberable': false
	  });
	  Object.defineProperty(_defaultExport, '__ResetDependency__', {
	    'value': __ResetDependency__,
	    'enumberable': false
	  });
	  Object.defineProperty(_defaultExport, '__GetDependency__', {
	    'value': __GetDependency__,
	    'enumberable': false
	  });
	  Object.defineProperty(_defaultExport, '__get__', {
	    'value': __GetDependency__,
	    'enumberable': false
	  });
	  Object.defineProperty(_defaultExport, '__RewireAPI__', {
	    'value': __RewireAPI__,
	    'enumberable': false
	  });
	}
	
	exports['default'] = _defaultExport;
	exports.__GetDependency__ = __GetDependency__;
	exports.__get__ = __GetDependency__;
	exports.__Rewire__ = __Rewire__;
	exports.__set__ = __Rewire__;
	exports.__ResetDependency__ = __ResetDependency__;
	exports.__RewireAPI__ = __RewireAPI__;
	module.exports = exports['default'];

/***/ },
/* 50 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	var __$Getters__ = [];
	var __$Setters__ = [];
	var __$Resetters__ = [];
	
	function __GetDependency__(name) {
	  return __$Getters__[name]();
	}
	
	function __Rewire__(name, value) {
	  __$Setters__[name](value);
	}
	
	function __ResetDependency__(name) {
	  __$Resetters__[name]();
	}
	
	var __RewireAPI__ = {
	  '__GetDependency__': __GetDependency__,
	  '__get__': __GetDependency__,
	  '__Rewire__': __Rewire__,
	  '__set__': __Rewire__,
	  '__ResetDependency__': __ResetDependency__
	};
	var _defaultExport = {
	  redbox: {
	    boxSizing: 'border-box',
	    fontFamily: 'sans-serif',
	    position: 'fixed',
	    padding: 10,
	    top: 0,
	    left: 0,
	    bottom: 0,
	    right: 0,
	    width: '100%',
	    background: 'rgb(204, 0, 0)',
	    color: 'white',
	    zIndex: 9999,
	    textAlign: 'left',
	    fontSize: '16px',
	    lineHeight: 1.2
	  },
	  message: {
	    fontWeight: 'bold'
	  },
	  stack: {
	    fontFamily: 'monospace',
	    marginTop: '2em'
	  },
	  frame: {
	    marginTop: '1em'
	  },
	  file: {
	    fontSize: '0.8em',
	    color: 'rgba(255, 255, 255, 0.7)'
	  },
	  linkToFile: {
	    textDecoration: 'none',
	    color: 'rgba(255, 255, 255, 0.7)'
	  }
	};
	
	if (typeof _defaultExport === 'object' || typeof _defaultExport === 'function') {
	  Object.defineProperty(_defaultExport, '__Rewire__', {
	    'value': __Rewire__,
	    'enumberable': false
	  });
	  Object.defineProperty(_defaultExport, '__set__', {
	    'value': __Rewire__,
	    'enumberable': false
	  });
	  Object.defineProperty(_defaultExport, '__ResetDependency__', {
	    'value': __ResetDependency__,
	    'enumberable': false
	  });
	  Object.defineProperty(_defaultExport, '__GetDependency__', {
	    'value': __GetDependency__,
	    'enumberable': false
	  });
	  Object.defineProperty(_defaultExport, '__get__', {
	    'value': __GetDependency__,
	    'enumberable': false
	  });
	  Object.defineProperty(_defaultExport, '__RewireAPI__', {
	    'value': __RewireAPI__,
	    'enumberable': false
	  });
	}
	
	exports['default'] = _defaultExport;
	exports.__GetDependency__ = __GetDependency__;
	exports.__get__ = __GetDependency__;
	exports.__Rewire__ = __Rewire__;
	exports.__set__ = __Rewire__;
	exports.__ResetDependency__ = __ResetDependency__;
	exports.__RewireAPI__ = __RewireAPI__;
	module.exports = exports['default'];

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (root, factory) {
	    'use strict';
	    // Universal Module Definition (UMD) to support AMD, CommonJS/Node.js, Rhino, and browsers.
	
	    /* istanbul ignore next */
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(52)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('stackframe'));
	    } else {
	        root.ErrorStackParser = factory(root.StackFrame);
	    }
	}(this, function ErrorStackParser(StackFrame) {
	    'use strict';
	
	    var FIREFOX_SAFARI_STACK_REGEXP = /(^|@)\S+\:\d+/;
	    var CHROME_IE_STACK_REGEXP = /^\s*at .*(\S+\:\d+|\(native\))/m;
	    var SAFARI_NATIVE_CODE_REGEXP = /^(eval@)?(\[native code\])?$/;
	
	    function _map(array, fn, thisArg) {
	        if (typeof Array.prototype.map === 'function') {
	            return array.map(fn, thisArg);
	        } else {
	            var output = new Array(array.length);
	            for (var i = 0; i < array.length; i++) {
	                output[i] = fn.call(thisArg, array[i]);
	            }
	            return output;
	        }
	    }
	
	    function _filter(array, fn, thisArg) {
	        if (typeof Array.prototype.filter === 'function') {
	            return array.filter(fn, thisArg);
	        } else {
	            var output = [];
	            for (var i = 0; i < array.length; i++) {
	                if (fn.call(thisArg, array[i])) {
	                    output.push(array[i]);
	                }
	            }
	            return output;
	        }
	    }
	
	    return {
	        /**
	         * Given an Error object, extract the most information from it.
	         * @param error {Error}
	         * @return Array[StackFrame]
	         */
	        parse: function ErrorStackParser$$parse(error) {
	            if (typeof error.stacktrace !== 'undefined' || typeof error['opera#sourceloc'] !== 'undefined') {
	                return this.parseOpera(error);
	            } else if (error.stack && error.stack.match(CHROME_IE_STACK_REGEXP)) {
	                return this.parseV8OrIE(error);
	            } else if (error.stack) {
	                return this.parseFFOrSafari(error);
	            } else {
	                throw new Error('Cannot parse given Error object');
	            }
	        },
	
	        /**
	         * Separate line and column numbers from a URL-like string.
	         * @param urlLike String
	         * @return Array[String]
	         */
	        extractLocation: function ErrorStackParser$$extractLocation(urlLike) {
	            // Fail-fast but return locations like "(native)"
	            if (urlLike.indexOf(':') === -1) {
	                return [urlLike];
	            }
	
	            var locationParts = urlLike.replace(/[\(\)\s]/g, '').split(':');
	            var lastNumber = locationParts.pop();
	            var possibleNumber = locationParts[locationParts.length - 1];
	            if (!isNaN(parseFloat(possibleNumber)) && isFinite(possibleNumber)) {
	                var lineNumber = locationParts.pop();
	                return [locationParts.join(':'), lineNumber, lastNumber];
	            } else {
	                return [locationParts.join(':'), lastNumber, undefined];
	            }
	        },
	
	        parseV8OrIE: function ErrorStackParser$$parseV8OrIE(error) {
	            var filtered = _filter(error.stack.split('\n'), function (line) {
	                return !!line.match(CHROME_IE_STACK_REGEXP);
	            }, this);
	
	            return _map(filtered, function (line) {
	                if (line.indexOf('(eval ') > -1) {
	                    // Throw away eval information until we implement stacktrace.js/stackframe#8
	                    line = line.replace(/eval code/g, 'eval').replace(/(\(eval at [^\()]*)|(\)\,.*$)/g, '');
	                }
	                var tokens = line.replace(/^\s+/, '').replace(/\(eval code/g, '(').split(/\s+/).slice(1);
	                var locationParts = this.extractLocation(tokens.pop());
	                var functionName = tokens.join(' ') || undefined;
	                var fileName = locationParts[0] === 'eval' ? undefined : locationParts[0];
	
	                return new StackFrame(functionName, undefined, fileName, locationParts[1], locationParts[2], line);
	            }, this);
	        },
	
	        parseFFOrSafari: function ErrorStackParser$$parseFFOrSafari(error) {
	            var filtered = _filter(error.stack.split('\n'), function (line) {
	                return !line.match(SAFARI_NATIVE_CODE_REGEXP);
	            }, this);
	
	            return _map(filtered, function (line) {
	                // Throw away eval information until we implement stacktrace.js/stackframe#8
	                if (line.indexOf(' > eval') > -1) {
	                    line = line.replace(/ line (\d+)(?: > eval line \d+)* > eval\:\d+\:\d+/g, ':$1');
	                }
	
	                if (line.indexOf('@') === -1 && line.indexOf(':') === -1) {
	                    // Safari eval frames only have function names and nothing else
	                    return new StackFrame(line);
	                } else {
	                    var tokens = line.split('@');
	                    var locationParts = this.extractLocation(tokens.pop());
	                    var functionName = tokens.shift() || undefined;
	                    return new StackFrame(functionName, undefined, locationParts[0], locationParts[1], locationParts[2], line);
	                }
	            }, this);
	        },
	
	        parseOpera: function ErrorStackParser$$parseOpera(e) {
	            if (!e.stacktrace || (e.message.indexOf('\n') > -1 &&
	                e.message.split('\n').length > e.stacktrace.split('\n').length)) {
	                return this.parseOpera9(e);
	            } else if (!e.stack) {
	                return this.parseOpera10(e);
	            } else {
	                return this.parseOpera11(e);
	            }
	        },
	
	        parseOpera9: function ErrorStackParser$$parseOpera9(e) {
	            var lineRE = /Line (\d+).*script (?:in )?(\S+)/i;
	            var lines = e.message.split('\n');
	            var result = [];
	
	            for (var i = 2, len = lines.length; i < len; i += 2) {
	                var match = lineRE.exec(lines[i]);
	                if (match) {
	                    result.push(new StackFrame(undefined, undefined, match[2], match[1], undefined, lines[i]));
	                }
	            }
	
	            return result;
	        },
	
	        parseOpera10: function ErrorStackParser$$parseOpera10(e) {
	            var lineRE = /Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i;
	            var lines = e.stacktrace.split('\n');
	            var result = [];
	
	            for (var i = 0, len = lines.length; i < len; i += 2) {
	                var match = lineRE.exec(lines[i]);
	                if (match) {
	                    result.push(new StackFrame(match[3] || undefined, undefined, match[2], match[1], undefined, lines[i]));
	                }
	            }
	
	            return result;
	        },
	
	        // Opera 10.65+ Error.stack very similar to FF/Safari
	        parseOpera11: function ErrorStackParser$$parseOpera11(error) {
	            var filtered = _filter(error.stack.split('\n'), function (line) {
	                return !!line.match(FIREFOX_SAFARI_STACK_REGEXP) &&
	                    !line.match(/^Error created at/);
	            }, this);
	
	            return _map(filtered, function (line) {
	                var tokens = line.split('@');
	                var locationParts = this.extractLocation(tokens.pop());
	                var functionCall = (tokens.shift() || '');
	                var functionName = functionCall
	                        .replace(/<anonymous function(: (\w+))?>/, '$2')
	                        .replace(/\([^\)]*\)/g, '') || undefined;
	                var argsRaw;
	                if (functionCall.match(/\(([^\)]*)\)/)) {
	                    argsRaw = functionCall.replace(/^[^\(]+\(([^\)]*)\)$/, '$1');
	                }
	                var args = (argsRaw === undefined || argsRaw === '[arguments not available]') ? undefined : argsRaw.split(',');
	                return new StackFrame(functionName, args, locationParts[0], locationParts[1], locationParts[2], line);
	            }, this);
	        }
	    };
	}));
	


/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (root, factory) {
	    'use strict';
	    // Universal Module Definition (UMD) to support AMD, CommonJS/Node.js, Rhino, and browsers.
	
	    /* istanbul ignore next */
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if (typeof exports === 'object') {
	        module.exports = factory();
	    } else {
	        root.StackFrame = factory();
	    }
	}(this, function () {
	    'use strict';
	    function _isNumber(n) {
	        return !isNaN(parseFloat(n)) && isFinite(n);
	    }
	
	    function StackFrame(functionName, args, fileName, lineNumber, columnNumber, source) {
	        if (functionName !== undefined) {
	            this.setFunctionName(functionName);
	        }
	        if (args !== undefined) {
	            this.setArgs(args);
	        }
	        if (fileName !== undefined) {
	            this.setFileName(fileName);
	        }
	        if (lineNumber !== undefined) {
	            this.setLineNumber(lineNumber);
	        }
	        if (columnNumber !== undefined) {
	            this.setColumnNumber(columnNumber);
	        }
	        if (source !== undefined) {
	            this.setSource(source);
	        }
	    }
	
	    StackFrame.prototype = {
	        getFunctionName: function () {
	            return this.functionName;
	        },
	        setFunctionName: function (v) {
	            this.functionName = String(v);
	        },
	
	        getArgs: function () {
	            return this.args;
	        },
	        setArgs: function (v) {
	            if (Object.prototype.toString.call(v) !== '[object Array]') {
	                throw new TypeError('Args must be an Array');
	            }
	            this.args = v;
	        },
	
	        // NOTE: Property name may be misleading as it includes the path,
	        // but it somewhat mirrors V8's JavaScriptStackTraceApi
	        // https://code.google.com/p/v8/wiki/JavaScriptStackTraceApi and Gecko's
	        // http://mxr.mozilla.org/mozilla-central/source/xpcom/base/nsIException.idl#14
	        getFileName: function () {
	            return this.fileName;
	        },
	        setFileName: function (v) {
	            this.fileName = String(v);
	        },
	
	        getLineNumber: function () {
	            return this.lineNumber;
	        },
	        setLineNumber: function (v) {
	            if (!_isNumber(v)) {
	                throw new TypeError('Line Number must be a Number');
	            }
	            this.lineNumber = Number(v);
	        },
	
	        getColumnNumber: function () {
	            return this.columnNumber;
	        },
	        setColumnNumber: function (v) {
	            if (!_isNumber(v)) {
	                throw new TypeError('Column Number must be a Number');
	            }
	            this.columnNumber = Number(v);
	        },
	
	        getSource: function () {
	            return this.source;
	        },
	        setSource: function (v) {
	            this.source = String(v);
	        },
	
	        toString: function() {
	            var functionName = this.getFunctionName() || '{anonymous}';
	            var args = '(' + (this.getArgs() || []).join(',') + ')';
	            var fileName = this.getFileName() ? ('@' + this.getFileName()) : '';
	            var lineNumber = _isNumber(this.getLineNumber()) ? (':' + this.getLineNumber()) : '';
	            var columnNumber = _isNumber(this.getColumnNumber()) ? (':' + this.getColumnNumber()) : '';
	            return functionName + args + fileName + lineNumber + columnNumber;
	        }
	    };
	
	    return StackFrame;
	}));


/***/ },
/* 53 */
/***/ function(module, exports) {

	/* eslint-disable no-unused-vars */
	'use strict';
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;
	
	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}
	
		return Object(val);
	}
	
	module.exports = Object.assign || function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;
	
		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);
	
			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}
	
			if (Object.getOwnPropertySymbols) {
				symbols = Object.getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}
	
		return to;
	};


/***/ },
/* 54 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	var __$Getters__ = [];
	var __$Setters__ = [];
	var __$Resetters__ = [];
	
	function __GetDependency__(name) {
	  return __$Getters__[name]();
	}
	
	function __Rewire__(name, value) {
	  __$Setters__[name](value);
	}
	
	function __ResetDependency__(name) {
	  __$Resetters__[name]();
	}
	
	var __RewireAPI__ = {
	  '__GetDependency__': __GetDependency__,
	  '__get__': __GetDependency__,
	  '__Rewire__': __Rewire__,
	  '__set__': __Rewire__,
	  '__ResetDependency__': __ResetDependency__
	};
	var filenameWithoutLoaders = function filenameWithoutLoaders() {
	  var filename = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];
	
	  var index = filename.lastIndexOf('!');
	
	  return index < 0 ? filename : filename.substr(index + 1);
	};
	
	var _filenameWithoutLoaders = filenameWithoutLoaders;
	
	__$Getters__['filenameWithoutLoaders'] = function () {
	  return filenameWithoutLoaders;
	};
	
	__$Setters__['filenameWithoutLoaders'] = function (value) {
	  exports.filenameWithoutLoaders = filenameWithoutLoaders = value;
	};
	
	__$Resetters__['filenameWithoutLoaders'] = function () {
	  exports.filenameWithoutLoaders = filenameWithoutLoaders = _filenameWithoutLoaders;
	};
	
	exports.filenameWithoutLoaders = _filenameWithoutLoaders;
	var filenameHasLoaders = function filenameHasLoaders(filename) {
	  var actualFilename = filenameWithoutLoaders(filename);
	
	  return actualFilename !== filename;
	};
	
	var _filenameHasLoaders = filenameHasLoaders;
	
	__$Getters__['filenameHasLoaders'] = function () {
	  return filenameHasLoaders;
	};
	
	__$Setters__['filenameHasLoaders'] = function (value) {
	  exports.filenameHasLoaders = filenameHasLoaders = value;
	};
	
	__$Resetters__['filenameHasLoaders'] = function () {
	  exports.filenameHasLoaders = filenameHasLoaders = _filenameHasLoaders;
	};
	
	exports.filenameHasLoaders = _filenameHasLoaders;
	var filenameHasSchema = function filenameHasSchema(filename) {
	  return (/^[\w]+\:/.test(filename)
	  );
	};
	
	var _filenameHasSchema = filenameHasSchema;
	
	__$Getters__['filenameHasSchema'] = function () {
	  return filenameHasSchema;
	};
	
	__$Setters__['filenameHasSchema'] = function (value) {
	  exports.filenameHasSchema = filenameHasSchema = value;
	};
	
	__$Resetters__['filenameHasSchema'] = function () {
	  exports.filenameHasSchema = filenameHasSchema = _filenameHasSchema;
	};
	
	exports.filenameHasSchema = _filenameHasSchema;
	var isFilenameAbsolute = function isFilenameAbsolute(filename) {
	  var actualFilename = filenameWithoutLoaders(filename);
	
	  if (actualFilename.indexOf('/') === 0) {
	    return true;
	  }
	
	  return false;
	};
	
	var _isFilenameAbsolute = isFilenameAbsolute;
	
	__$Getters__['isFilenameAbsolute'] = function () {
	  return isFilenameAbsolute;
	};
	
	__$Setters__['isFilenameAbsolute'] = function (value) {
	  exports.isFilenameAbsolute = isFilenameAbsolute = value;
	};
	
	__$Resetters__['isFilenameAbsolute'] = function () {
	  exports.isFilenameAbsolute = isFilenameAbsolute = _isFilenameAbsolute;
	};
	
	exports.isFilenameAbsolute = _isFilenameAbsolute;
	var makeUrl = function makeUrl(filename, scheme, line, column) {
	  var actualFilename = filenameWithoutLoaders(filename);
	
	  if (filenameHasSchema(filename)) {
	    return actualFilename;
	  }
	
	  var url = 'file://' + actualFilename;
	
	  if (scheme) {
	    url = scheme + '://open?url=' + url;
	
	    if (line && actualFilename === filename) {
	      url = url + '&line=' + line;
	
	      if (column) {
	        url = url + '&column=' + column;
	      }
	    }
	  }
	
	  return url;
	};
	
	var _makeUrl = makeUrl;
	
	__$Getters__['makeUrl'] = function () {
	  return makeUrl;
	};
	
	__$Setters__['makeUrl'] = function (value) {
	  exports.makeUrl = makeUrl = value;
	};
	
	__$Resetters__['makeUrl'] = function () {
	  exports.makeUrl = makeUrl = _makeUrl;
	};
	
	exports.makeUrl = _makeUrl;
	var makeLinkText = function makeLinkText(filename, line, column) {
	  var text = filenameWithoutLoaders(filename);
	
	  if (line && text === filename) {
	    text = text + ':' + line;
	
	    if (column) {
	      text = text + ':' + column;
	    }
	  }
	
	  return text;
	};
	var _makeLinkText = makeLinkText;
	
	__$Getters__['makeLinkText'] = function () {
	  return makeLinkText;
	};
	
	__$Setters__['makeLinkText'] = function (value) {
	  exports.makeLinkText = makeLinkText = value;
	};
	
	__$Resetters__['makeLinkText'] = function () {
	  exports.makeLinkText = makeLinkText = _makeLinkText;
	};
	
	exports.makeLinkText = _makeLinkText;
	exports.__GetDependency__ = __GetDependency__;
	exports.__get__ = __GetDependency__;
	exports.__Rewire__ = __Rewire__;
	exports.__set__ = __Rewire__;
	exports.__ResetDependency__ = __ResetDependency__;
	exports.__RewireAPI__ = __RewireAPI__;
	exports['default'] = __RewireAPI__;

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	// DFS for recursive seaarching of a specific child component
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
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
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(47);
	
	var _react2 = _interopRequireDefault(_react);
	
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
	            if (!_iteratorNormalCompletion && _iterator['return']) {
	                _iterator['return']();
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
	
	    _react2['default'].Children.forEach(children, function (child) {
	        if (child.type === component) {
	            count++;
	        }
	    });
	
	    return count;
	}
	
	function hasChild(children, component) {
	    children = _react2['default'].Children.toArray(children);
	
	    var _iteratorNormalCompletion2 = true;
	    var _didIteratorError2 = false;
	    var _iteratorError2 = undefined;
	
	    try {
	        for (var _iterator2 = children[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	            var child = _step2.value;
	
	            if (child.type && child.type == component) {
	                return true;
	            } else if (component === typeof child) {
	                return true;
	            }
	        }
	    } catch (err) {
	        _didIteratorError2 = true;
	        _iteratorError2 = err;
	    } finally {
	        try {
	            if (!_iteratorNormalCompletion2 && _iterator2['return']) {
	                _iterator2['return']();
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
	    children = _react2['default'].Children.toArray(children);
	
	    var _iteratorNormalCompletion3 = true;
	    var _didIteratorError3 = false;
	    var _iteratorError3 = undefined;
	
	    try {
	        for (var _iterator3 = children[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	            var child = _step3.value;
	
	            if (child.type && child.type == component) {
	                return true;
	            } else if (_react2['default'].Children.count(child.props.children) > 0) {
	                return hasDescendant(child.props.children, component);
	            }
	        }
	    } catch (err) {
	        _didIteratorError3 = true;
	        _iteratorError3 = err;
	    } finally {
	        try {
	            if (!_iteratorNormalCompletion3 && _iterator3['return']) {
	                _iterator3['return']();
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
	
	    if (_react2['default'].Children.count(children) === 1) {
	        return _react2['default'].Children.only(children).type === component;
	    } else {
	        return children[0].type === component;
	    }
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
	            if (!_iteratorNormalCompletion4 && _iterator4['return']) {
	                _iterator4['return']();
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
	    children = _react2['default'].Children.toArray(children);
	
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
	    children = _react2['default'].Children.toArray(children);
	
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
	            if (!_iteratorNormalCompletion5 && _iterator5['return']) {
	                _iterator5['return']();
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
/* 56 */
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
/* 57 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_57__;

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';
	
	var _reactTransformHmr2 = __webpack_require__(4);
	
	var _reactTransformHmr3 = _interopRequireDefault(_reactTransformHmr2);
	
	var _react = __webpack_require__(47);
	
	var _reactTransformCatchErrors2 = __webpack_require__(48);
	
	var _reactTransformCatchErrors3 = _interopRequireDefault(_reactTransformCatchErrors2);
	
	var _redboxReact = __webpack_require__(49);
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react2 = _interopRequireDefault(_react);
	
	var _elements = __webpack_require__(1);
	
	var _utilities = __webpack_require__(55);
	
	var _classnames = __webpack_require__(56);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _radium = __webpack_require__(57);
	
	var _radium2 = _interopRequireDefault(_radium);
	
	var _components = {
	    _$Buttons: {
	        displayName: 'Buttons'
	    }
	};
	
	var _reactComponentWrapper = (0, _reactTransformHmr3['default'])({
	    filename: 'E:/Work/semantic-react/src/components/elements/button/buttons.jsx',
	    components: _components,
	    locals: [module],
	    imports: [_react]
	});
	
	var _reactComponentWrapper2 = (0, _reactTransformCatchErrors3['default'])({
	    filename: 'E:/Work/semantic-react/src/components/elements/button/buttons.jsx',
	    components: _components,
	    locals: [],
	    imports: [_react, _redboxReact]
	});
	
	function _wrapComponent(uniqueId) {
	    return function (ReactClass) {
	        return _reactComponentWrapper2(_reactComponentWrapper(ReactClass, uniqueId), uniqueId);
	    };
	}
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var validProps = {
	    attached: ['bottom', 'top'],
	    floated: ['right', 'left']
	};
	
	var Buttons = (function (_React$Component) {
	    _inherits(Buttons, _React$Component);
	
	    function Buttons() {
	        _classCallCheck(this, _Buttons);
	
	        _get(Object.getPrototypeOf(_Buttons.prototype), 'constructor', this).apply(this, arguments);
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
	
	            other.className = (0, _classnames2['default'])(this.props.className, this.getClasses());
	
	            return _react2['default'].createElement(this.props.component, other, this.props.children);
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
	
	            var childCount = _react2['default'].Children.count(this.props.children);
	
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
	    }], [{
	        key: 'propTypes',
	        value: {
	            /**
	             * It's attached to some other attachable component.
	             */
	            attached: _react2['default'].PropTypes.oneOf(['bottom', 'top']),
	
	            /**
	             * Adds simple styling to the component.
	             */
	            basic: _react2['default'].PropTypes.bool,
	
	            /**
	             * The child nodes of the component.
	             */
	            children: _react2['default'].PropTypes.node,
	
	            /**
	             * Adds additional classes to the component.
	             */
	            className: _react2['default'].PropTypes.node,
	
	            /**
	             * Adds a SemanticUI color class.
	             */
	            color: _react2['default'].PropTypes.string,
	
	            /**
	             * Reduces the padding on the component.
	             */
	            compact: _react2['default'].PropTypes.bool,
	
	            /**
	             * Overrides the component with a custom component string ('div') or
	             * ReactElement.
	             */
	            component: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.element, _react2['default'].PropTypes.string]),
	
	            /**
	             * Adds the default classes for the component.
	             */
	            defaultClasses: _react2['default'].PropTypes.bool,
	
	            /**
	             * Forces all children to an equal width.
	             */
	            equal: _react2['default'].PropTypes.bool,
	
	            /**
	             * Forces to component to float left or right.
	             */
	            floated: _react2['default'].PropTypes.oneOf(['right', 'left']),
	
	            /**
	             * Overrides default behavior and adds the icon class to the component.
	             */
	            icon: _react2['default'].PropTypes.bool,
	
	            /**
	             * Styles the component for a dark background.
	             */
	            inverted: _react2['default'].PropTypes.bool,
	
	            /**
	             * Overrides default behavior and adds the labeled class to the
	             * component.
	             */
	            labeled: _react2['default'].PropTypes.bool,
	
	            /**
	             * Adds a SemanticUI size class.
	             */
	            size: _react2['default'].PropTypes.string,
	
	            /**
	             * Forces child components to render vertically.
	             */
	            vertical: _react2['default'].PropTypes.bool
	        },
	        enumerable: true
	    }, {
	        key: 'childContextTypes',
	        value: {
	            isAttached: _react2['default'].PropTypes.bool,
	            isIconButtons: _react2['default'].PropTypes.bool,
	            isLabeledButtons: _react2['default'].PropTypes.bool
	        },
	        enumerable: true
	    }, {
	        key: 'defaultProps',
	        value: {
	            component: 'div',
	            defaultClasses: true
	        },
	        enumerable: true
	    }]);
	
	    var _Buttons = Buttons;
	    Buttons = _wrapComponent('_$Buttons')(Buttons) || Buttons;
	    Buttons = (0, _radium2['default'])(Buttons) || Buttons;
	    return Buttons;
	})(_react2['default'].Component);
	
	exports['default'] = Buttons;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)(module)))

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';
	
	var _reactTransformHmr2 = __webpack_require__(4);
	
	var _reactTransformHmr3 = _interopRequireDefault(_reactTransformHmr2);
	
	var _react = __webpack_require__(47);
	
	var _reactTransformCatchErrors2 = __webpack_require__(48);
	
	var _reactTransformCatchErrors3 = _interopRequireDefault(_reactTransformCatchErrors2);
	
	var _redboxReact = __webpack_require__(49);
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react2 = _interopRequireDefault(_react);
	
	var _elements = __webpack_require__(1);
	
	var _utilities = __webpack_require__(55);
	
	var _classnames = __webpack_require__(56);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _radium = __webpack_require__(57);
	
	var _radium2 = _interopRequireDefault(_radium);
	
	var _components = {
	    _$LabeledButton: {
	        displayName: 'LabeledButton'
	    }
	};
	
	var _reactComponentWrapper = (0, _reactTransformHmr3['default'])({
	    filename: 'E:/Work/semantic-react/src/components/elements/button/labeledbutton.jsx',
	    components: _components,
	    locals: [module],
	    imports: [_react]
	});
	
	var _reactComponentWrapper2 = (0, _reactTransformCatchErrors3['default'])({
	    filename: 'E:/Work/semantic-react/src/components/elements/button/labeledbutton.jsx',
	    components: _components,
	    locals: [],
	    imports: [_react, _redboxReact]
	});
	
	function _wrapComponent(uniqueId) {
	    return function (ReactClass) {
	        return _reactComponentWrapper2(_reactComponentWrapper(ReactClass, uniqueId), uniqueId);
	    };
	}
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var LabeledButton = (function (_React$Component) {
	    _inherits(LabeledButton, _React$Component);
	
	    function LabeledButton() {
	        _classCallCheck(this, _LabeledButton);
	
	        _get(Object.getPrototypeOf(_LabeledButton.prototype), 'constructor', this).apply(this, arguments);
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
	
	            return _react2['default'].createElement(
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
	
	            other.className = (0, _classnames2['default'])(this.props.className, this.getClasses());
	
	            var icon = _react2['default'].createElement(
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
	
	            other.className = (0, _classnames2['default'])(other.className);
	
	            // if the label was the first child, its direction must be left
	            if ((0, _utilities.hasFirstChild)(this.props.children, _elements.Label)) {
	                other.labeled = 'left';
	
	                // labels are on the right by default
	            } else {
	                    other.labeled = true;
	                }
	
	            return _react2['default'].createElement(
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
	                icon: (0, _utilities.hasChild)(this.props.children, _elements.Icon) && _react2['default'].Children.count(this.props.children) === 2,
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
	    }], [{
	        key: 'propTypes',
	        value: {
	            active: _react2['default'].PropTypes.bool,
	            basic: _react2['default'].PropTypes.bool,
	            children: _react2['default'].PropTypes.node,
	            circular: _react2['default'].PropTypes.bool,
	            className: _react2['default'].PropTypes.node,
	            color: _react2['default'].PropTypes.string,
	            compact: _react2['default'].PropTypes.bool,
	            component: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.element, _react2['default'].PropTypes.string]),
	            defaultClasses: _react2['default'].PropTypes.bool,
	            disabled: _react2['default'].PropTypes.bool,
	            fluid: _react2['default'].PropTypes.bool,
	            icon: _react2['default'].PropTypes.bool,
	            inverted: _react2['default'].PropTypes.bool,
	            labeled: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.string, _react2['default'].PropTypes.bool]),
	            loading: _react2['default'].PropTypes.bool,
	            negative: _react2['default'].PropTypes.bool,
	            positive: _react2['default'].PropTypes.bool,
	            primary: _react2['default'].PropTypes.bool,
	            secondary: _react2['default'].PropTypes.bool,
	            size: _react2['default'].PropTypes.string,
	            social: _react2['default'].PropTypes.string
	        },
	        enumerable: true
	    }, {
	        key: 'contextTypes',
	        value: {
	            isAttached: _react2['default'].PropTypes.bool,
	            hasIconClass: _react2['default'].PropTypes.bool
	        },
	        enumerable: true
	    }, {
	        key: 'defaultProps',
	        value: {
	            defaultClasses: true
	        },
	        enumerable: true
	    }]);
	
	    var _LabeledButton = LabeledButton;
	    LabeledButton = _wrapComponent('_$LabeledButton')(LabeledButton) || LabeledButton;
	    LabeledButton = (0, _radium2['default'])(LabeledButton) || LabeledButton;
	    return LabeledButton;
	})(_react2['default'].Component);
	
	exports['default'] = LabeledButton;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)(module)))

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var _react = __webpack_require__(47);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _elements = __webpack_require__(1);
	
	function renderChildren(children, name, social, iconColor) {
	    var componentChildren = [];
	
	    componentChildren.push(_react2['default'].createElement(_elements.Icon, {
	        color: social ? null : iconColor,
	        key: 'icon',
	        name: name }));
	
	    _react2['default'].Children.forEach(children, function (child) {
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
	
	    return _react2['default'].createElement(
	        _elements.Button,
	        _extends({}, other, {
	            icon: _react2['default'].Children.count(children) === 0,
	            social: social ? name : ''
	        }),
	        renderChildren(children, name, social, iconColor)
	    );
	};
	
	IconButton.propTypes = {
	    /**
	     * The child nodes of the component.
	     */
	    children: _react2['default'].PropTypes.node,
	
	    /**
	     * Adds a SemanticUI color class to the icon.
	     */
	    iconColor: _react2['default'].PropTypes.string,
	
	    /**
	     * Adds a SemanticUI name class to the icon.
	     */
	    name: _react2['default'].PropTypes.string,
	
	    /**
	     * Renders as a social button if true (see SocialButton);
	     */
	    social: _react2['default'].PropTypes.bool
	};
	
	exports['default'] = IconButton;
	module.exports = exports['default'];

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var _react = __webpack_require__(47);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _elements = __webpack_require__(1);
	
	var SocialButton = function SocialButton(_ref) {
	    var children = _ref.children;
	    var name = _ref.name;
	
	    var other = _objectWithoutProperties(_ref, ['children', 'name']);
	
	    return _react2['default'].createElement(
	        _elements.IconButton,
	        _extends({}, other, {
	            icon: _react2['default'].Children.count(children) === 0,
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
	    children: _react2['default'].PropTypes.node,
	
	    /**
	     * Adds a SemanticUI name class to the icon.
	     */
	    name: _react2['default'].PropTypes.string.isRequired
	};
	
	exports['default'] = SocialButton;
	module.exports = exports['default'];

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var _react = __webpack_require__(47);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _elements = __webpack_require__(1);
	
	var PrimaryButton = function PrimaryButton(_ref) {
	    var children = _ref.children;
	
	    var other = _objectWithoutProperties(_ref, ['children']);
	
	    return _react2['default'].createElement(
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
	    children: _react2['default'].PropTypes.node
	};
	
	exports['default'] = PrimaryButton;
	module.exports = exports['default'];

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var _react = __webpack_require__(47);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _elements = __webpack_require__(1);
	
	var SuccessButton = function SuccessButton(_ref) {
	    var children = _ref.children;
	
	    var other = _objectWithoutProperties(_ref, ['children']);
	
	    return _react2['default'].createElement(
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
	    children: _react2['default'].PropTypes.node
	};
	
	exports['default'] = SuccessButton;
	module.exports = exports['default'];

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var _react = __webpack_require__(47);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _elements = __webpack_require__(1);
	
	var WarningButton = function WarningButton(_ref) {
	    var children = _ref.children;
	
	    var other = _objectWithoutProperties(_ref, ['children']);
	
	    return _react2['default'].createElement(
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
	    children: _react2['default'].PropTypes.node
	};
	
	exports['default'] = WarningButton;
	module.exports = exports['default'];

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var _react = __webpack_require__(47);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _elements = __webpack_require__(1);
	
	var DangerButton = function DangerButton(_ref) {
	    var children = _ref.children;
	
	    var other = _objectWithoutProperties(_ref, ['children']);
	
	    return _react2['default'].createElement(
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
	    children: _react2['default'].PropTypes.node
	};
	
	exports['default'] = DangerButton;
	module.exports = exports['default'];

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';
	
	var _reactTransformHmr2 = __webpack_require__(4);
	
	var _reactTransformHmr3 = _interopRequireDefault(_reactTransformHmr2);
	
	var _react = __webpack_require__(47);
	
	var _reactTransformCatchErrors2 = __webpack_require__(48);
	
	var _reactTransformCatchErrors3 = _interopRequireDefault(_reactTransformCatchErrors2);
	
	var _redboxReact = __webpack_require__(49);
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(56);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _radium = __webpack_require__(57);
	
	var _radium2 = _interopRequireDefault(_radium);
	
	// Currently header/dividers are only headers. Maybe do both?
	var _components = {
	    _$Divider: {
	        displayName: 'Divider'
	    }
	};
	
	var _reactComponentWrapper = (0, _reactTransformHmr3['default'])({
	    filename: 'E:/Work/semantic-react/src/components/elements/divider/divider.jsx',
	    components: _components,
	    locals: [module],
	    imports: [_react]
	});
	
	var _reactComponentWrapper2 = (0, _reactTransformCatchErrors3['default'])({
	    filename: 'E:/Work/semantic-react/src/components/elements/divider/divider.jsx',
	    components: _components,
	    locals: [],
	    imports: [_react, _redboxReact]
	});
	
	function _wrapComponent(uniqueId) {
	    return function (ReactClass) {
	        return _reactComponentWrapper2(_reactComponentWrapper(ReactClass, uniqueId), uniqueId);
	    };
	}
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var Divider = (function (_React$Component) {
	    _inherits(Divider, _React$Component);
	
	    function Divider() {
	        _classCallCheck(this, _Divider);
	
	        _get(Object.getPrototypeOf(_Divider.prototype), 'constructor', this).apply(this, arguments);
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
	
	            other.className = (0, _classnames2['default'])(this.props.className, this.getClasses());
	
	            return _react2['default'].createElement(this.props.component, other, this.props.children);
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
	    }], [{
	        key: 'propTypes',
	        value: {
	            aligned: _react2['default'].PropTypes.oneOf(['horizontal', 'vertical']),
	            children: _react2['default'].PropTypes.node,
	            className: _react2['default'].PropTypes.node,
	            clearing: _react2['default'].PropTypes.bool,
	            component: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.element, _react2['default'].PropTypes.string]),
	            defaultClasses: _react2['default'].PropTypes.bool,
	            header: _react2['default'].PropTypes.bool,
	            hidden: _react2['default'].PropTypes.bool,
	            inverted: _react2['default'].PropTypes.bool,
	            spacing: _react2['default'].PropTypes.oneOf(['fitted', 'padded'])
	        },
	        enumerable: true
	    }, {
	        key: 'defaultProps',
	        value: {
	            component: 'div',
	            defaultClasses: true
	        },
	        enumerable: true
	    }]);
	
	    var _Divider = Divider;
	    Divider = _wrapComponent('_$Divider')(Divider) || Divider;
	    Divider = (0, _radium2['default'])(Divider) || Divider;
	    return Divider;
	})(_react2['default'].Component);
	
	exports['default'] = Divider;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)(module)))

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(47);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _elements = __webpack_require__(1);
	
	var Flag = function Flag(props) {
	    var other = Object.assign({}, props);
	    other.className = 'flag';
	    other.defaultClasses = false;
	
	    return _react2['default'].createElement(_elements.Icon, other);
	};
	
	Flag.propTypes = {
	    /**
	     * The country code, name or alias of the flag
	     */
	    name: _react2['default'].PropTypes.string.isRequired
	};
	
	exports['default'] = Flag;
	module.exports = exports['default'];

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';
	
	var _reactTransformHmr2 = __webpack_require__(4);
	
	var _reactTransformHmr3 = _interopRequireDefault(_reactTransformHmr2);
	
	var _react = __webpack_require__(47);
	
	var _reactTransformCatchErrors2 = __webpack_require__(48);
	
	var _reactTransformCatchErrors3 = _interopRequireDefault(_reactTransformCatchErrors2);
	
	var _redboxReact = __webpack_require__(49);
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react2 = _interopRequireDefault(_react);
	
	var _elements = __webpack_require__(1);
	
	var _utilities = __webpack_require__(55);
	
	var _classnames = __webpack_require__(56);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _radium = __webpack_require__(57);
	
	var _radium2 = _interopRequireDefault(_radium);
	
	var _components = {
	    _$Header: {
	        displayName: 'Header'
	    }
	};
	
	var _reactComponentWrapper = (0, _reactTransformHmr3['default'])({
	    filename: 'E:/Work/semantic-react/src/components/elements/header/header.jsx',
	    components: _components,
	    locals: [module],
	    imports: [_react]
	});
	
	var _reactComponentWrapper2 = (0, _reactTransformCatchErrors3['default'])({
	    filename: 'E:/Work/semantic-react/src/components/elements/header/header.jsx',
	    components: _components,
	    locals: [],
	    imports: [_react, _redboxReact]
	});
	
	function _wrapComponent(uniqueId) {
	    return function (ReactClass) {
	        return _reactComponentWrapper2(_reactComponentWrapper(ReactClass, uniqueId), uniqueId);
	    };
	}
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var validProps = {
	    aligned: ['right', 'left', 'justified', 'center'],
	    attached: ['bottom', 'top'],
	    floated: ['right', 'left']
	};
	
	var Header = (function (_React$Component) {
	    _inherits(Header, _React$Component);
	
	    function Header() {
	        _classCallCheck(this, _Header);
	
	        _get(Object.getPrototypeOf(_Header.prototype), 'constructor', this).apply(this, arguments);
	    }
	
	    _createClass(Header, [{
	        key: 'getChildContext',
	        // handles
	        value: function getChildContext() {
	            return {
	                isHeaderChild: true
	            };
	        }
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
	            other.className = (0, _classnames2['default'])(this.props.className, this.getClasses());
	
	            return _react2['default'].createElement(this.props.component || Component, other, this.props.children);
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
	    }], [{
	        key: 'propTypes',
	        value: {
	            aligned: _react2['default'].PropTypes.oneOf(['right', 'left', 'justified', 'center']),
	            attached: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.oneOf(['bottom', 'top']), _react2['default'].PropTypes.bool]),
	            children: _react2['default'].PropTypes.node,
	            className: _react2['default'].PropTypes.node,
	            color: _react2['default'].PropTypes.string,
	            component: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.element, _react2['default'].PropTypes.string]),
	            defaultClasses: _react2['default'].PropTypes.bool,
	            disabled: _react2['default'].PropTypes.bool,
	            divider: _react2['default'].PropTypes.bool,
	            emphasis: _react2['default'].PropTypes.oneOf(['dividing', 'block']),
	            floated: _react2['default'].PropTypes.oneOf(['right', 'left']),
	            horizontal: _react2['default'].PropTypes.bool,
	            inverted: _react2['default'].PropTypes.bool,
	            item: _react2['default'].PropTypes.bool,
	            size: _react2['default'].PropTypes.string
	        },
	
	        // we don't want the ui in these circumstances
	        enumerable: true
	    }, {
	        key: 'contextTypes',
	        value: {
	            isListChild: _react2['default'].PropTypes.bool,
	            isHeaderChild: _react2['default'].PropTypes.bool,
	            isAccordionChild: _react2['default'].PropTypes.bool,
	            isMenuChild: _react2['default'].PropTypes.bool
	        },
	
	        // any header/sub header under a header is a sub header
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
	            defaultClasses: true,
	            item: true },
	        enumerable: true
	    }]);
	
	    var _Header = Header;
	    Header = _wrapComponent('_$Header')(Header) || Header;
	    Header = (0, _radium2['default'])(Header) || Header;
	    return Header;
	})(_react2['default'].Component);
	
	exports['default'] = Header;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)(module)))

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';
	
	var _reactTransformHmr2 = __webpack_require__(4);
	
	var _reactTransformHmr3 = _interopRequireDefault(_reactTransformHmr2);
	
	var _react = __webpack_require__(47);
	
	var _reactTransformCatchErrors2 = __webpack_require__(48);
	
	var _reactTransformCatchErrors3 = _interopRequireDefault(_reactTransformCatchErrors2);
	
	var _redboxReact = __webpack_require__(49);
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react2 = _interopRequireDefault(_react);
	
	var _elements = __webpack_require__(1);
	
	var _classnames = __webpack_require__(56);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _radium = __webpack_require__(57);
	
	var _radium2 = _interopRequireDefault(_radium);
	
	var _components = {
	    _$SubHeader: {
	        displayName: 'SubHeader'
	    }
	};
	
	var _reactComponentWrapper = (0, _reactTransformHmr3['default'])({
	    filename: 'E:/Work/semantic-react/src/components/elements/header/subheader.jsx',
	    components: _components,
	    locals: [module],
	    imports: [_react]
	});
	
	var _reactComponentWrapper2 = (0, _reactTransformCatchErrors3['default'])({
	    filename: 'E:/Work/semantic-react/src/components/elements/header/subheader.jsx',
	    components: _components,
	    locals: [],
	    imports: [_react, _redboxReact]
	});
	
	function _wrapComponent(uniqueId) {
	    return function (ReactClass) {
	        return _reactComponentWrapper2(_reactComponentWrapper(ReactClass, uniqueId), uniqueId);
	    };
	}
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var SubHeader = (function (_React$Component) {
	    _inherits(SubHeader, _React$Component);
	
	    function SubHeader() {
	        _classCallCheck(this, _SubHeader);
	
	        _get(Object.getPrototypeOf(_SubHeader.prototype), 'constructor', this).apply(this, arguments);
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
	
	            other.className = (0, _classnames2['default'])(this.props.className, this.getClasses());
	
	            return _react2['default'].createElement(
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
	    }], [{
	        key: 'propTypes',
	        value: {
	            children: _react2['default'].PropTypes.node,
	            className: _react2['default'].PropTypes.node,
	            component: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.element, _react2['default'].PropTypes.string]),
	            defaultClasses: _react2['default'].PropTypes.bool
	        },
	        enumerable: true
	    }, {
	        key: 'defaultProps',
	        value: {
	            defaultClasses: true
	        },
	        enumerable: true
	    }]);
	
	    var _SubHeader = SubHeader;
	    SubHeader = _wrapComponent('_$SubHeader')(SubHeader) || SubHeader;
	    SubHeader = (0, _radium2['default'])(SubHeader) || SubHeader;
	    return SubHeader;
	})(_react2['default'].Component);
	
	exports['default'] = SubHeader;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)(module)))

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';
	
	var _reactTransformHmr2 = __webpack_require__(4);
	
	var _reactTransformHmr3 = _interopRequireDefault(_reactTransformHmr2);
	
	var _react = __webpack_require__(47);
	
	var _reactTransformCatchErrors2 = __webpack_require__(48);
	
	var _reactTransformCatchErrors3 = _interopRequireDefault(_reactTransformCatchErrors2);
	
	var _redboxReact = __webpack_require__(49);
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react2 = _interopRequireDefault(_react);
	
	var _utilities = __webpack_require__(55);
	
	var _classnames = __webpack_require__(56);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _radium = __webpack_require__(57);
	
	var _radium2 = _interopRequireDefault(_radium);
	
	var _components = {
	    _$Icon: {
	        displayName: 'Icon'
	    }
	};
	
	var _reactComponentWrapper = (0, _reactTransformHmr3['default'])({
	    filename: 'E:/Work/semantic-react/src/components/elements/icon/icon.jsx',
	    components: _components,
	    locals: [module],
	    imports: [_react]
	});
	
	var _reactComponentWrapper2 = (0, _reactTransformCatchErrors3['default'])({
	    filename: 'E:/Work/semantic-react/src/components/elements/icon/icon.jsx',
	    components: _components,
	    locals: [],
	    imports: [_react, _redboxReact]
	});
	
	function _wrapComponent(uniqueId) {
	    return function (ReactClass) {
	        return _reactComponentWrapper2(_reactComponentWrapper(ReactClass, uniqueId), uniqueId);
	    };
	}
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var validProps = {
	    flipped: ['horizontally', 'vertically'],
	    rotated: ['clockwise', 'counterclockwise']
	};
	
	var Icon = (function (_React$Component) {
	    _inherits(Icon, _React$Component);
	
	    function Icon() {
	        _classCallCheck(this, _Icon);
	
	        _get(Object.getPrototypeOf(_Icon.prototype), 'constructor', this).apply(this, arguments);
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
	
	            other.className = (0, _classnames2['default'])(this.props.className, this.getClasses());
	
	            return _react2['default'].createElement(this.props.component, other);
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
	    }], [{
	        key: 'propTypes',
	        value: {
	            bordered: _react2['default'].PropTypes.bool,
	            circular: _react2['default'].PropTypes.bool,
	            className: _react2['default'].PropTypes.node,
	            color: _react2['default'].PropTypes.string,
	            component: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.element, _react2['default'].PropTypes.string]),
	            corner: _react2['default'].PropTypes.bool,
	            defaultClasses: _react2['default'].PropTypes.bool,
	            disabled: _react2['default'].PropTypes.bool,
	            fitted: _react2['default'].PropTypes.bool,
	            flipped: _react2['default'].PropTypes.oneOf(['horizontally', 'vertically']),
	            inverted: _react2['default'].PropTypes.bool,
	            link: _react2['default'].PropTypes.bool,
	            loading: _react2['default'].PropTypes.bool,
	            name: _react2['default'].PropTypes.string.isRequired,
	            onClick: _react2['default'].PropTypes.func,
	            rotated: _react2['default'].PropTypes.oneOf(['clockwise', 'counterclockwise']),
	            size: _react2['default'].PropTypes.string
	        },
	        enumerable: true
	    }, {
	        key: 'defaultProps',
	        value: {
	            component: 'i',
	            defaultClasses: true
	        },
	        enumerable: true
	    }]);
	
	    var _Icon = Icon;
	    Icon = _wrapComponent('_$Icon')(Icon) || Icon;
	    Icon = (0, _radium2['default'])(Icon) || Icon;
	    return Icon;
	})(_react2['default'].Component);
	
	exports['default'] = Icon;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)(module)))

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';
	
	var _reactTransformHmr2 = __webpack_require__(4);
	
	var _reactTransformHmr3 = _interopRequireDefault(_reactTransformHmr2);
	
	var _react = __webpack_require__(47);
	
	var _reactTransformCatchErrors2 = __webpack_require__(48);
	
	var _reactTransformCatchErrors3 = _interopRequireDefault(_reactTransformCatchErrors2);
	
	var _redboxReact = __webpack_require__(49);
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react2 = _interopRequireDefault(_react);
	
	var _icon = __webpack_require__(70);
	
	var _icon2 = _interopRequireDefault(_icon);
	
	var _utilities = __webpack_require__(55);
	
	var _classnames = __webpack_require__(56);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _radium = __webpack_require__(57);
	
	var _radium2 = _interopRequireDefault(_radium);
	
	var _components = {
	    _$Icons: {
	        displayName: 'Icons'
	    }
	};
	
	var _reactComponentWrapper = (0, _reactTransformHmr3['default'])({
	    filename: 'E:/Work/semantic-react/src/components/elements/icon/icons.jsx',
	    components: _components,
	    locals: [module],
	    imports: [_react]
	});
	
	var _reactComponentWrapper2 = (0, _reactTransformCatchErrors3['default'])({
	    filename: 'E:/Work/semantic-react/src/components/elements/icon/icons.jsx',
	    components: _components,
	    locals: [],
	    imports: [_react, _redboxReact]
	});
	
	function _wrapComponent(uniqueId) {
	    return function (ReactClass) {
	        return _reactComponentWrapper2(_reactComponentWrapper(ReactClass, uniqueId), uniqueId);
	    };
	}
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var validProps = {
	    flipped: ['horizontally', 'vertically'],
	    rotated: ['clockwise', 'counterclockwise']
	};
	
	var Icons = (function (_React$Component) {
	    _inherits(Icons, _React$Component);
	
	    function Icons() {
	        _classCallCheck(this, _Icons);
	
	        _get(Object.getPrototypeOf(_Icons.prototype), 'constructor', this).apply(this, arguments);
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
	
	            other.className = (0, _classnames2['default'])(this.props.className, this.getClasses());
	
	            return _react2['default'].createElement(this.props.component, other, this.props.children);
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
	    }], [{
	        key: 'propTypes',
	        value: {
	            bordered: _react2['default'].PropTypes.bool,
	            children: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.instanceOf(_icon2['default']), _react2['default'].PropTypes.arrayOf(_react2['default'].PropTypes.instanceOf(_icon2['default']))]),
	            circular: _react2['default'].PropTypes.bool,
	            className: _react2['default'].PropTypes.node,
	            color: _react2['default'].PropTypes.string,
	            component: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.element, _react2['default'].PropTypes.string]),
	            defaultClasses: _react2['default'].PropTypes.bool,
	            disabled: _react2['default'].PropTypes.bool,
	            fitted: _react2['default'].PropTypes.bool,
	            flipped: _react2['default'].PropTypes.oneOf(['horizontally', 'vertically']),
	            inverted: _react2['default'].PropTypes.bool,
	            link: _react2['default'].PropTypes.bool,
	            loading: _react2['default'].PropTypes.bool,
	            rotated: _react2['default'].PropTypes.oneOf(['clockwise', 'counterclockwise']),
	            size: _react2['default'].PropTypes.string
	        },
	        enumerable: true
	    }, {
	        key: 'defaultProps',
	        value: {
	            defaultClasses: true,
	            component: 'i'
	        },
	        enumerable: true
	    }]);
	
	    var _Icons = Icons;
	    Icons = _wrapComponent('_$Icons')(Icons) || Icons;
	    Icons = (0, _radium2['default'])(Icons) || Icons;
	    return Icons;
	})(_react2['default'].Component);
	
	exports['default'] = Icons;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)(module)))

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';
	
	var _reactTransformHmr2 = __webpack_require__(4);
	
	var _reactTransformHmr3 = _interopRequireDefault(_reactTransformHmr2);
	
	var _react = __webpack_require__(47);
	
	var _reactTransformCatchErrors2 = __webpack_require__(48);
	
	var _reactTransformCatchErrors3 = _interopRequireDefault(_reactTransformCatchErrors2);
	
	var _redboxReact = __webpack_require__(49);
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react2 = _interopRequireDefault(_react);
	
	var _utilities = __webpack_require__(55);
	
	var _classnames = __webpack_require__(56);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _radium = __webpack_require__(57);
	
	var _radium2 = _interopRequireDefault(_radium);
	
	var _components = {
	    _$Image: {
	        displayName: 'Image'
	    }
	};
	
	var _reactComponentWrapper = (0, _reactTransformHmr3['default'])({
	    filename: 'E:/Work/semantic-react/src/components/elements/image/image.jsx',
	    components: _components,
	    locals: [module],
	    imports: [_react]
	});
	
	var _reactComponentWrapper2 = (0, _reactTransformCatchErrors3['default'])({
	    filename: 'E:/Work/semantic-react/src/components/elements/image/image.jsx',
	    components: _components,
	    locals: [],
	    imports: [_react, _redboxReact]
	});
	
	function _wrapComponent(uniqueId) {
	    return function (ReactClass) {
	        return _reactComponentWrapper2(_reactComponentWrapper(ReactClass, uniqueId), uniqueId);
	    };
	}
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var validProps = {
	    aligned: ['top', 'middle', 'bottom'],
	    floated: ['right', 'left'],
	    spaced: ['right', 'left']
	};
	
	// can't do SVG since JSX/React breaks on SVG images
	
	var Image = (function (_React$Component) {
	    _inherits(Image, _React$Component);
	
	    function Image() {
	        _classCallCheck(this, _Image);
	
	        _get(Object.getPrototypeOf(_Image.prototype), 'constructor', this).apply(this, arguments);
	    }
	
	    _createClass(Image, [{
	        key: 'renderComponent',
	        value: function renderComponent(other) {
	            var imageDiv = _react2['default'].createElement('img', {
	                key: 'image',
	                src: this.props.src });
	
	            return _react2['default'].createElement(this.props.component || 'div', other, [this.props.children, imageDiv]);
	        }
	    }, {
	        key: 'renderImg',
	        value: function renderImg(other) {
	            return _react2['default'].createElement('img', _extends({ src: this.props.src
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
	
	            other.className = (0, _classnames2['default'])(this.props.className, this.getClasses());
	
	            // if a custom tag or a child is passed, it will always render
	            // a custom tag/div
	            return _react2['default'].Children.count(this.props.children) > 0 || this.props.component || this.props.avatar ? this.renderComponent(other) : this.renderImg(other);
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
	    }], [{
	        key: 'propTypes',
	        value: {
	            aligned: _react2['default'].PropTypes.oneOf(['top', 'middle', 'bottom']),
	            avatar: _react2['default'].PropTypes.bool,
	            bordered: _react2['default'].PropTypes.bool,
	            centered: _react2['default'].PropTypes.bool,
	            children: _react2['default'].PropTypes.node,
	            className: _react2['default'].PropTypes.node,
	            component: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.element, _react2['default'].PropTypes.string]),
	            content: _react2['default'].PropTypes.bool,
	            defaultClasses: _react2['default'].PropTypes.bool,
	            disabled: _react2['default'].PropTypes.bool,
	            floated: _react2['default'].PropTypes.oneOf(['right', 'left']),
	            fluid: _react2['default'].PropTypes.bool,
	            shape: _react2['default'].PropTypes.oneOf(['circular', 'rounded']),
	            size: _react2['default'].PropTypes.string,
	            spaced: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.oneOf(['right', 'left']), _react2['default'].PropTypes.bool]),
	            src: _react2['default'].PropTypes.string.isRequired,
	            visible: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.oneOf(['hidden', 'visible']), _react2['default'].PropTypes.bool])
	        },
	
	        // we don't want the ui in these circumstances
	        enumerable: true
	    }, {
	        key: 'contextTypes',
	        value: {
	            isLabelChild: _react2['default'].PropTypes.bool,
	            isCommentsChild: _react2['default'].PropTypes.bool
	        },
	        enumerable: true
	    }, {
	        key: 'defaultProps',
	        value: {
	            defaultClasses: true
	        },
	        enumerable: true
	    }]);
	
	    var _Image = Image;
	    Image = _wrapComponent('_$Image')(Image) || Image;
	    Image = (0, _radium2['default'])(Image) || Image;
	    return Image;
	})(_react2['default'].Component);
	
	exports['default'] = Image;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)(module)))

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';
	
	var _reactTransformHmr2 = __webpack_require__(4);
	
	var _reactTransformHmr3 = _interopRequireDefault(_reactTransformHmr2);
	
	var _react = __webpack_require__(47);
	
	var _reactTransformCatchErrors2 = __webpack_require__(48);
	
	var _reactTransformCatchErrors3 = _interopRequireDefault(_reactTransformCatchErrors2);
	
	var _redboxReact = __webpack_require__(49);
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(56);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _radium = __webpack_require__(57);
	
	var _radium2 = _interopRequireDefault(_radium);
	
	var _components = {
	    _$Images: {
	        displayName: 'Images'
	    }
	};
	
	var _reactComponentWrapper = (0, _reactTransformHmr3['default'])({
	    filename: 'E:/Work/semantic-react/src/components/elements/image/images.jsx',
	    components: _components,
	    locals: [module],
	    imports: [_react]
	});
	
	var _reactComponentWrapper2 = (0, _reactTransformCatchErrors3['default'])({
	    filename: 'E:/Work/semantic-react/src/components/elements/image/images.jsx',
	    components: _components,
	    locals: [],
	    imports: [_react, _redboxReact]
	});
	
	function _wrapComponent(uniqueId) {
	    return function (ReactClass) {
	        return _reactComponentWrapper2(_reactComponentWrapper(ReactClass, uniqueId), uniqueId);
	    };
	}
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var Images = (function (_React$Component) {
	    _inherits(Images, _React$Component);
	
	    function Images() {
	        _classCallCheck(this, _Images);
	
	        _get(Object.getPrototypeOf(_Images.prototype), 'constructor', this).apply(this, arguments);
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
	
	            other.className = (0, _classnames2['default'])(this.props.className, this.getClasses());
	
	            return _react2['default'].createElement(this.props.component, other, this.props.children);
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
	    }], [{
	        key: 'propTypes',
	        value: {
	            avatar: _react2['default'].PropTypes.bool,
	            bordered: _react2['default'].PropTypes.bool,
	            children: _react2['default'].PropTypes.node,
	            className: _react2['default'].PropTypes.node,
	            component: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.element, _react2['default'].PropTypes.string]),
	            defaultClasses: _react2['default'].PropTypes.bool,
	            disabled: _react2['default'].PropTypes.bool,
	            shape: _react2['default'].PropTypes.oneOf(['circular', 'rounded']),
	            size: _react2['default'].PropTypes.string,
	            visible: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.oneOf(['hidden', 'visible']), _react2['default'].PropTypes.bool])
	        },
	        enumerable: true
	    }, {
	        key: 'defaultProps',
	        value: {
	            component: 'div',
	            defaultClasses: true
	        },
	        enumerable: true
	    }]);
	
	    var _Images = Images;
	    Images = _wrapComponent('_$Images')(Images) || Images;
	    Images = (0, _radium2['default'])(Images) || Images;
	    return Images;
	})(_react2['default'].Component);
	
	exports['default'] = Images;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)(module)))

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';
	
	var _reactTransformHmr2 = __webpack_require__(4);
	
	var _reactTransformHmr3 = _interopRequireDefault(_reactTransformHmr2);
	
	var _react = __webpack_require__(47);
	
	var _reactTransformCatchErrors2 = __webpack_require__(48);
	
	var _reactTransformCatchErrors3 = _interopRequireDefault(_reactTransformCatchErrors2);
	
	var _redboxReact = __webpack_require__(49);
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react2 = _interopRequireDefault(_react);
	
	var _elements = __webpack_require__(1);
	
	var _classnames = __webpack_require__(56);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _radium = __webpack_require__(57);
	
	var _radium2 = _interopRequireDefault(_radium);
	
	var _components = {
	    _$Input: {
	        displayName: 'Input'
	    }
	};
	
	var _reactComponentWrapper = (0, _reactTransformHmr3['default'])({
	    filename: 'E:/Work/semantic-react/src/components/elements/input/input.jsx',
	    components: _components,
	    locals: [module],
	    imports: [_react]
	});
	
	var _reactComponentWrapper2 = (0, _reactTransformCatchErrors3['default'])({
	    filename: 'E:/Work/semantic-react/src/components/elements/input/input.jsx',
	    components: _components,
	    locals: [],
	    imports: [_react, _redboxReact]
	});
	
	function _wrapComponent(uniqueId) {
	    return function (ReactClass) {
	        return _reactComponentWrapper2(_reactComponentWrapper(ReactClass, uniqueId), uniqueId);
	    };
	}
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var Input = (function (_React$Component) {
	    _inherits(Input, _React$Component);
	
	    function Input() {
	        _classCallCheck(this, _Input);
	
	        _get(Object.getPrototypeOf(_Input.prototype), 'constructor', this).apply(this, arguments);
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
	
	            other.className = (0, _classnames2['default'])(this.props.className, this.getLabelClasses(), this.getIconClasses(), this.getClasses());
	
	            return _react2['default'].createElement(this.props.component, other, this.prepareInput());
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
	            var inputHTML = _react2['default'].createElement('input', {
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
	
	            _react2['default'].Children.forEach(this.props.children, function (child) {
	                if (child.type === _elements.Icon && typeof child.type !== 'undefined') {
	                    children.icon = child;
	                } else if (child.type === _elements.Label && typeof child.type !== 'undefined') {
	                    children.label = child;
	                }
	            });
	
	            this.children = children;
	        }
	    }], [{
	        key: 'propTypes',
	        value: {
	            action: _react2['default'].PropTypes.bool,
	            children: _react2['default'].PropTypes.node,
	            className: _react2['default'].PropTypes.node,
	            component: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.element, _react2['default'].PropTypes.string]),
	            defaultClasses: _react2['default'].PropTypes.bool,
	            fluid: _react2['default'].PropTypes.bool,
	            focus: _react2['default'].PropTypes.bool,
	            icon: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.string, _react2['default'].PropTypes.bool]),
	            inverted: _react2['default'].PropTypes.bool,
	            labeled: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.string, _react2['default'].PropTypes.bool]),
	            loading: _react2['default'].PropTypes.bool,
	            name: _react2['default'].PropTypes.string,
	            placeholder: _react2['default'].PropTypes.string,
	            size: _react2['default'].PropTypes.string,
	            state: _react2['default'].PropTypes.oneOf(['disabled', 'error']),
	            transparent: _react2['default'].PropTypes.bool
	        },
	        enumerable: true
	    }, {
	        key: 'defaultProps',
	        value: {
	            component: 'div',
	            defaultClasses: true,
	            loading: false,
	            placeholder: 'Search...'
	        },
	        enumerable: true
	    }]);
	
	    var _Input = Input;
	    Input = _wrapComponent('_$Input')(Input) || Input;
	    Input = (0, _radium2['default'])(Input) || Input;
	    return Input;
	})(_react2['default'].Component);
	
	exports['default'] = Input;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)(module)))

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';
	
	var _reactTransformHmr2 = __webpack_require__(4);
	
	var _reactTransformHmr3 = _interopRequireDefault(_reactTransformHmr2);
	
	var _react = __webpack_require__(47);
	
	var _reactTransformCatchErrors2 = __webpack_require__(48);
	
	var _reactTransformCatchErrors3 = _interopRequireDefault(_reactTransformCatchErrors2);
	
	var _redboxReact = __webpack_require__(49);
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(56);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _radium = __webpack_require__(57);
	
	var _radium2 = _interopRequireDefault(_radium);
	
	var _components = {
	    _$Detail: {
	        displayName: 'Detail'
	    }
	};
	
	var _reactComponentWrapper = (0, _reactTransformHmr3['default'])({
	    filename: 'E:/Work/semantic-react/src/components/elements/label/detail.jsx',
	    components: _components,
	    locals: [module],
	    imports: [_react]
	});
	
	var _reactComponentWrapper2 = (0, _reactTransformCatchErrors3['default'])({
	    filename: 'E:/Work/semantic-react/src/components/elements/label/detail.jsx',
	    components: _components,
	    locals: [],
	    imports: [_react, _redboxReact]
	});
	
	function _wrapComponent(uniqueId) {
	    return function (ReactClass) {
	        return _reactComponentWrapper2(_reactComponentWrapper(ReactClass, uniqueId), uniqueId);
	    };
	}
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var Detail = (function (_React$Component) {
	    _inherits(Detail, _React$Component);
	
	    function Detail() {
	        _classCallCheck(this, _Detail);
	
	        _get(Object.getPrototypeOf(_Detail.prototype), 'constructor', this).apply(this, arguments);
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
	
	            other.className = (0, _classnames2['default'])(this.props.className, this.getClasses());
	
	            return _react2['default'].createElement(this.props.component || Component, other, this.props.children);
	        }
	    }, {
	        key: 'getClasses',
	        value: function getClasses() {
	            return {
	                // default
	                detail: this.props.defaultClasses
	            };
	        }
	    }], [{
	        key: 'propTypes',
	        value: {
	            children: _react2['default'].PropTypes.node,
	            className: _react2['default'].PropTypes.node,
	            component: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.element, _react2['default'].PropTypes.string]),
	            defaultClasses: _react2['default'].PropTypes.bool,
	            onClick: _react2['default'].PropTypes.func
	        },
	        enumerable: true
	    }, {
	        key: 'defaultProps',
	        value: {
	            defaultClasses: true
	        },
	        enumerable: true
	    }]);
	
	    var _Detail = Detail;
	    Detail = _wrapComponent('_$Detail')(Detail) || Detail;
	    Detail = (0, _radium2['default'])(Detail) || Detail;
	    return Detail;
	})(_react2['default'].Component);
	
	exports['default'] = Detail;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)(module)))

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';
	
	var _reactTransformHmr2 = __webpack_require__(4);
	
	var _reactTransformHmr3 = _interopRequireDefault(_reactTransformHmr2);
	
	var _react = __webpack_require__(47);
	
	var _reactTransformCatchErrors2 = __webpack_require__(48);
	
	var _reactTransformCatchErrors3 = _interopRequireDefault(_reactTransformCatchErrors2);
	
	var _redboxReact = __webpack_require__(49);
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react2 = _interopRequireDefault(_react);
	
	var _utilities = __webpack_require__(55);
	
	var _elements = __webpack_require__(1);
	
	var _classnames = __webpack_require__(56);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _radium = __webpack_require__(57);
	
	var _radium2 = _interopRequireDefault(_radium);
	
	var _components = {
	    _$Label: {
	        displayName: 'Label'
	    }
	};
	
	var _reactComponentWrapper = (0, _reactTransformHmr3['default'])({
	    filename: 'E:/Work/semantic-react/src/components/elements/label/label.jsx',
	    components: _components,
	    locals: [module],
	    imports: [_react]
	});
	
	var _reactComponentWrapper2 = (0, _reactTransformCatchErrors3['default'])({
	    filename: 'E:/Work/semantic-react/src/components/elements/label/label.jsx',
	    components: _components,
	    locals: [],
	    imports: [_react, _redboxReact]
	});
	
	function _wrapComponent(uniqueId) {
	    return function (ReactClass) {
	        return _reactComponentWrapper2(_reactComponentWrapper(ReactClass, uniqueId), uniqueId);
	    };
	}
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var validProps = {
	    attached: ['top', 'bottom', 'top right', 'top left', 'bottom left', 'bottom right'],
	    corner: ['left', 'right'],
	    pointing: ['below', 'left', 'right'],
	    ribbon: ['right']
	};
	
	var Label = (function (_React$Component) {
	    _inherits(Label, _React$Component);
	
	    function Label() {
	        _classCallCheck(this, _Label);
	
	        _get(Object.getPrototypeOf(_Label.prototype), 'constructor', this).apply(this, arguments);
	    }
	
	    _createClass(Label, [{
	        key: 'getChildContext',
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
	
	            other.className = (0, _classnames2['default'])(this.props.className, this.getClasses());
	
	            return _react2['default'].createElement(this.props.component || Component, other, this.props.children);
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
	    }], [{
	        key: 'propTypes',
	        value: {
	            attached: _react2['default'].PropTypes.oneOf(['top', 'bottom', 'top right', 'top left', 'bottom left', 'bottom right']),
	            basic: _react2['default'].PropTypes.bool,
	            children: _react2['default'].PropTypes.node,
	            circular: _react2['default'].PropTypes.bool,
	            className: _react2['default'].PropTypes.node,
	            color: _react2['default'].PropTypes.string,
	            component: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.element, _react2['default'].PropTypes.string]),
	            corner: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.oneOf(['left', 'right']), _react2['default'].PropTypes.bool]),
	            defaultClasses: _react2['default'].PropTypes.bool,
	            floating: _react2['default'].PropTypes.bool,
	            image: _react2['default'].PropTypes.bool,
	            label: _react2['default'].PropTypes.bool,
	            left: _react2['default'].PropTypes.bool,
	            link: _react2['default'].PropTypes.bool,
	            onClick: _react2['default'].PropTypes.func,
	            pointing: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.oneOf(['below', 'left', 'right']), _react2['default'].PropTypes.bool]),
	            ribbon: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.oneOf(['right']), _react2['default'].PropTypes.bool]),
	            right: _react2['default'].PropTypes.bool,
	            size: _react2['default'].PropTypes.string,
	            tag: _react2['default'].PropTypes.bool
	        },
	        enumerable: true
	    }, {
	        key: 'contextTypes',
	        value: {
	            isCardsChild: _react2['default'].PropTypes.bool,
	            isProgressChild: _react2['default'].PropTypes.bool
	        },
	
	        // any header/sub header under a header is a sub header
	        enumerable: true
	    }, {
	        key: 'childContextTypes',
	        value: {
	            isLabelChild: _react2['default'].PropTypes.bool
	        },
	        enumerable: true
	    }, {
	        key: 'defaultProps',
	        value: {
	            corner: false,
	            defaultClasses: true,
	            pointing: false,
	            ribbon: false
	        },
	        enumerable: true
	    }]);
	
	    var _Label = Label;
	    Label = _wrapComponent('_$Label')(Label) || Label;
	    Label = (0, _radium2['default'])(Label) || Label;
	    return Label;
	})(_react2['default'].Component);
	
	exports['default'] = Label;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)(module)))

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';
	
	var _reactTransformHmr2 = __webpack_require__(4);
	
	var _reactTransformHmr3 = _interopRequireDefault(_reactTransformHmr2);
	
	var _react = __webpack_require__(47);
	
	var _reactTransformCatchErrors2 = __webpack_require__(48);
	
	var _reactTransformCatchErrors3 = _interopRequireDefault(_reactTransformCatchErrors2);
	
	var _redboxReact = __webpack_require__(49);
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(56);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _radium = __webpack_require__(57);
	
	var _radium2 = _interopRequireDefault(_radium);
	
	var _components = {
	    _$Labels: {
	        displayName: 'Labels'
	    }
	};
	
	var _reactComponentWrapper = (0, _reactTransformHmr3['default'])({
	    filename: 'E:/Work/semantic-react/src/components/elements/label/labels.jsx',
	    components: _components,
	    locals: [module],
	    imports: [_react]
	});
	
	var _reactComponentWrapper2 = (0, _reactTransformCatchErrors3['default'])({
	    filename: 'E:/Work/semantic-react/src/components/elements/label/labels.jsx',
	    components: _components,
	    locals: [],
	    imports: [_react, _redboxReact]
	});
	
	function _wrapComponent(uniqueId) {
	    return function (ReactClass) {
	        return _reactComponentWrapper2(_reactComponentWrapper(ReactClass, uniqueId), uniqueId);
	    };
	}
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var Labels = (function (_React$Component) {
	    _inherits(Labels, _React$Component);
	
	    function Labels() {
	        _classCallCheck(this, _Labels);
	
	        _get(Object.getPrototypeOf(_Labels.prototype), 'constructor', this).apply(this, arguments);
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
	
	            other.className = (0, _classnames2['default'])(this.props.className, this.getClasses());
	
	            return _react2['default'].createElement(this.props.component, other, this.props.children);
	        }
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
	    }], [{
	        key: 'propTypes',
	        value: {
	            children: _react2['default'].PropTypes.node,
	            circular: _react2['default'].PropTypes.bool,
	            className: _react2['default'].PropTypes.node,
	            color: _react2['default'].PropTypes.string,
	            component: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.element, _react2['default'].PropTypes.string]),
	            defaultClasses: _react2['default'].PropTypes.bool,
	            size: _react2['default'].PropTypes.string,
	            tag: _react2['default'].PropTypes.bool
	        },
	
	        // we only set defaults for props that can be both bool and string + the defaultClasses
	        enumerable: true
	    }, {
	        key: 'defaultProps',
	        value: {
	            component: 'div',
	            defaultClasses: true
	        },
	        enumerable: true
	    }]);
	
	    var _Labels = Labels;
	    Labels = _wrapComponent('_$Labels')(Labels) || Labels;
	    Labels = (0, _radium2['default'])(Labels) || Labels;
	    return Labels;
	})(_react2['default'].Component);
	
	exports['default'] = Labels;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)(module)))

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';
	
	var _reactTransformHmr2 = __webpack_require__(4);
	
	var _reactTransformHmr3 = _interopRequireDefault(_reactTransformHmr2);
	
	var _react = __webpack_require__(47);
	
	var _reactTransformCatchErrors2 = __webpack_require__(48);
	
	var _reactTransformCatchErrors3 = _interopRequireDefault(_reactTransformCatchErrors2);
	
	var _redboxReact = __webpack_require__(49);
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react2 = _interopRequireDefault(_react);
	
	var _utilities = __webpack_require__(55);
	
	var _classnames = __webpack_require__(56);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _radium = __webpack_require__(57);
	
	var _radium2 = _interopRequireDefault(_radium);
	
	var _components = {
	    _$List: {
	        displayName: 'List'
	    }
	};
	
	var _reactComponentWrapper = (0, _reactTransformHmr3['default'])({
	    filename: 'E:/Work/semantic-react/src/components/elements/list/list.jsx',
	    components: _components,
	    locals: [module],
	    imports: [_react]
	});
	
	var _reactComponentWrapper2 = (0, _reactTransformCatchErrors3['default'])({
	    filename: 'E:/Work/semantic-react/src/components/elements/list/list.jsx',
	    components: _components,
	    locals: [],
	    imports: [_react, _redboxReact]
	});
	
	function _wrapComponent(uniqueId) {
	    return function (ReactClass) {
	        return _reactComponentWrapper2(_reactComponentWrapper(ReactClass, uniqueId), uniqueId);
	    };
	}
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var validProps = {
	    aligned: ['top', 'middle', 'bottom'],
	    floated: ['right', 'left']
	};
	
	var List = (function (_React$Component) {
	    _inherits(List, _React$Component);
	
	    function List() {
	        _classCallCheck(this, _List);
	
	        _get(Object.getPrototypeOf(_List.prototype), 'constructor', this).apply(this, arguments);
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
	
	            other.className = (0, _classnames2['default'])(this.props.className, this.getClasses());
	
	            return _react2['default'].createElement(this.props.component, other, this.props.children);
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
	    }], [{
	        key: 'propTypes',
	        value: {
	            aligned: _react2['default'].PropTypes.oneOf(['top', 'middle', 'bottom']),
	            animated: _react2['default'].PropTypes.bool,
	            celled: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.oneOf(['divided']), _react2['default'].PropTypes.bool]),
	            children: _react2['default'].PropTypes.node,
	            className: _react2['default'].PropTypes.node,
	            component: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.element, _react2['default'].PropTypes.string]),
	            defaultClasses: _react2['default'].PropTypes.bool,
	            floated: _react2['default'].PropTypes.oneOf(['right', 'left']),
	            horizontal: _react2['default'].PropTypes.bool,
	            inverted: _react2['default'].PropTypes.bool,
	            link: _react2['default'].PropTypes.bool,
	            relaxed: _react2['default'].PropTypes.bool,
	            selection: _react2['default'].PropTypes.bool,
	            size: _react2['default'].PropTypes.string,
	            type: _react2['default'].PropTypes.oneOf(['bulleted', 'ordered'])
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
	            component: 'div',
	            defaultClasses: true
	        },
	        enumerable: true
	    }]);
	
	    var _List = List;
	    List = _wrapComponent('_$List')(List) || List;
	    List = (0, _radium2['default'])(List) || List;
	    return List;
	})(_react2['default'].Component);
	
	exports['default'] = List;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)(module)))

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';
	
	var _reactTransformHmr2 = __webpack_require__(4);
	
	var _reactTransformHmr3 = _interopRequireDefault(_reactTransformHmr2);
	
	var _react = __webpack_require__(47);
	
	var _reactTransformCatchErrors2 = __webpack_require__(48);
	
	var _reactTransformCatchErrors3 = _interopRequireDefault(_reactTransformCatchErrors2);
	
	var _redboxReact = __webpack_require__(49);
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react2 = _interopRequireDefault(_react);
	
	var _utilities = __webpack_require__(55);
	
	var _classnames = __webpack_require__(56);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _radium = __webpack_require__(57);
	
	var _radium2 = _interopRequireDefault(_radium);
	
	var _components = {
	    _$Loader: {
	        displayName: 'Loader'
	    }
	};
	
	var _reactComponentWrapper = (0, _reactTransformHmr3['default'])({
	    filename: 'E:/Work/semantic-react/src/components/elements/loader/loader.jsx',
	    components: _components,
	    locals: [module],
	    imports: [_react]
	});
	
	var _reactComponentWrapper2 = (0, _reactTransformCatchErrors3['default'])({
	    filename: 'E:/Work/semantic-react/src/components/elements/loader/loader.jsx',
	    components: _components,
	    locals: [],
	    imports: [_react, _redboxReact]
	});
	
	function _wrapComponent(uniqueId) {
	    return function (ReactClass) {
	        return _reactComponentWrapper2(_reactComponentWrapper(ReactClass, uniqueId), uniqueId);
	    };
	}
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var Loader = (function (_React$Component) {
	    _inherits(Loader, _React$Component);
	
	    function Loader() {
	        _classCallCheck(this, _Loader);
	
	        _get(Object.getPrototypeOf(_Loader.prototype), 'constructor', this).apply(this, arguments);
	    }
	
	    _createClass(Loader, [{
	        key: 'render',
	        value: function render() {
	            /* eslint-disable no-use-before-define */
	
	            var other = _objectWithoutProperties(this.props, []);
	
	            /* eslint-enable no-use-before-define */
	
	            other.className = (0, _classnames2['default'])(this.props.className, this.getClasses());
	
	            return _react2['default'].createElement(this.props.component, other, this.props.children);
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
	    }], [{
	        key: 'propTypes',
	        value: {
	            centered: _react2['default'].PropTypes.bool,
	            children: _react2['default'].PropTypes.node,
	            className: _react2['default'].PropTypes.node,
	            component: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.element, _react2['default'].PropTypes.string]),
	            defaultClasses: _react2['default'].PropTypes.bool,
	            inline: _react2['default'].PropTypes.bool,
	            inverted: _react2['default'].PropTypes.bool,
	            size: _react2['default'].PropTypes.string,
	            state: _react2['default'].PropTypes.oneOf(['active', 'indeterminate', 'disabled']),
	            text: _react2['default'].PropTypes.bool
	        },
	        enumerable: true
	    }, {
	        key: 'defaultProps',
	        value: {
	            defaultClasses: true,
	            component: 'div'
	        },
	        enumerable: true
	    }]);
	
	    var _Loader = Loader;
	    Loader = _wrapComponent('_$Loader')(Loader) || Loader;
	    Loader = (0, _radium2['default'])(Loader) || Loader;
	    return Loader;
	})(_react2['default'].Component);
	
	exports['default'] = Loader;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)(module)))

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';
	
	var _reactTransformHmr2 = __webpack_require__(4);
	
	var _reactTransformHmr3 = _interopRequireDefault(_reactTransformHmr2);
	
	var _react = __webpack_require__(47);
	
	var _reactTransformCatchErrors2 = __webpack_require__(48);
	
	var _reactTransformCatchErrors3 = _interopRequireDefault(_reactTransformCatchErrors2);
	
	var _redboxReact = __webpack_require__(49);
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(56);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _radium = __webpack_require__(57);
	
	var _radium2 = _interopRequireDefault(_radium);
	
	var _components = {
	    _$Rail: {
	        displayName: 'Rail'
	    }
	};
	
	var _reactComponentWrapper = (0, _reactTransformHmr3['default'])({
	    filename: 'E:/Work/semantic-react/src/components/elements/rail/rail.jsx',
	    components: _components,
	    locals: [module],
	    imports: [_react]
	});
	
	var _reactComponentWrapper2 = (0, _reactTransformCatchErrors3['default'])({
	    filename: 'E:/Work/semantic-react/src/components/elements/rail/rail.jsx',
	    components: _components,
	    locals: [],
	    imports: [_react, _redboxReact]
	});
	
	function _wrapComponent(uniqueId) {
	    return function (ReactClass) {
	        return _reactComponentWrapper2(_reactComponentWrapper(ReactClass, uniqueId), uniqueId);
	    };
	}
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var Rail = (function (_React$Component) {
	    _inherits(Rail, _React$Component);
	
	    function Rail() {
	        _classCallCheck(this, _Rail);
	
	        _get(Object.getPrototypeOf(_Rail.prototype), 'constructor', this).apply(this, arguments);
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
	
	            other.className = (0, _classnames2['default'])(this.props.className, this.getClasses());
	
	            return _react2['default'].createElement(this.props.component, other, this.props.children);
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
	    }], [{
	        key: 'propTypes',
	        value: {
	            attached: _react2['default'].PropTypes.bool,
	            children: _react2['default'].PropTypes.any,
	            className: _react2['default'].PropTypes.node,
	            close: _react2['default'].PropTypes.bool,
	            closer: _react2['default'].PropTypes.bool,
	            component: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.element, _react2['default'].PropTypes.string]),
	            defaultClasses: _react2['default'].PropTypes.bool,
	            dividing: _react2['default'].PropTypes.bool,
	            floated: _react2['default'].PropTypes.oneOf(['right', 'left']).isRequired,
	            internal: _react2['default'].PropTypes.bool
	        },
	        enumerable: true
	    }, {
	        key: 'defaultProps',
	        value: {
	            component: 'div',
	            close: false,
	            defaultClasses: true
	        },
	        enumerable: true
	    }]);
	
	    var _Rail = Rail;
	    Rail = _wrapComponent('_$Rail')(Rail) || Rail;
	    Rail = (0, _radium2['default'])(Rail) || Rail;
	    return Rail;
	})(_react2['default'].Component);
	
	exports['default'] = Rail;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)(module)))

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';
	
	var _reactTransformHmr2 = __webpack_require__(4);
	
	var _reactTransformHmr3 = _interopRequireDefault(_reactTransformHmr2);
	
	var _react = __webpack_require__(47);
	
	var _reactTransformCatchErrors2 = __webpack_require__(48);
	
	var _reactTransformCatchErrors3 = _interopRequireDefault(_reactTransformCatchErrors2);
	
	var _redboxReact = __webpack_require__(49);
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react2 = _interopRequireDefault(_react);
	
	var _elements = __webpack_require__(1);
	
	var _utilities = __webpack_require__(55);
	
	var _classnames = __webpack_require__(56);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _radium = __webpack_require__(57);
	
	var _radium2 = _interopRequireDefault(_radium);
	
	var _components = {
	    _$Reveal: {
	        displayName: 'Reveal'
	    }
	};
	
	var _reactComponentWrapper = (0, _reactTransformHmr3['default'])({
	    filename: 'E:/Work/semantic-react/src/components/elements/reveal/reveal.jsx',
	    components: _components,
	    locals: [module],
	    imports: [_react]
	});
	
	var _reactComponentWrapper2 = (0, _reactTransformCatchErrors3['default'])({
	    filename: 'E:/Work/semantic-react/src/components/elements/reveal/reveal.jsx',
	    components: _components,
	    locals: [],
	    imports: [_react, _redboxReact]
	});
	
	function _wrapComponent(uniqueId) {
	    return function (ReactClass) {
	        return _reactComponentWrapper2(_reactComponentWrapper(ReactClass, uniqueId), uniqueId);
	    };
	}
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var validProps = {
	    move: ['right', 'up', 'down'],
	    rotate: ['left']
	};
	
	var Reveal = (function (_React$Component) {
	    _inherits(Reveal, _React$Component);
	
	    function Reveal() {
	        _classCallCheck(this, _Reveal);
	
	        _get(Object.getPrototypeOf(_Reveal.prototype), 'constructor', this).apply(this, arguments);
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
	
	            other.className = (0, _classnames2['default'])(this.props.className, this.getClasses());
	
	            return _react2['default'].createElement(this.props.component, other, this.props.children);
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
	    }], [{
	        key: 'propTypes',
	        value: {
	            active: _react2['default'].PropTypes.bool,
	            children: _react2['default'].PropTypes.node,
	            circular: _react2['default'].PropTypes.bool,
	            className: _react2['default'].PropTypes.node,
	            component: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.element, _react2['default'].PropTypes.string]),
	            defaultClasses: _react2['default'].PropTypes.bool,
	            disabled: _react2['default'].PropTypes.bool,
	            fade: _react2['default'].PropTypes.bool,
	            image: _react2['default'].PropTypes.bool,
	            instant: _react2['default'].PropTypes.bool,
	            move: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.oneOf(['right', 'up', 'down']), _react2['default'].PropTypes.bool]),
	            rotate: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.oneOf(['left']), _react2['default'].PropTypes.bool]),
	            // required?
	            size: _react2['default'].PropTypes.string,
	            type: _react2['default'].PropTypes.string
	        },
	        enumerable: true
	    }, {
	        key: 'defaultProps',
	        value: {
	            component: 'div',
	            defaultClasses: true,
	            image: false,
	            move: false,
	            rotate: false,
	            size: 'small'
	        },
	        enumerable: true
	    }]);
	
	    var _Reveal = Reveal;
	    Reveal = _wrapComponent('_$Reveal')(Reveal) || Reveal;
	    Reveal = (0, _radium2['default'])(Reveal) || Reveal;
	    return Reveal;
	})(_react2['default'].Component);
	
	exports['default'] = Reveal;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)(module)))

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';
	
	var _reactTransformHmr2 = __webpack_require__(4);
	
	var _reactTransformHmr3 = _interopRequireDefault(_reactTransformHmr2);
	
	var _react = __webpack_require__(47);
	
	var _reactTransformCatchErrors2 = __webpack_require__(48);
	
	var _reactTransformCatchErrors3 = _interopRequireDefault(_reactTransformCatchErrors2);
	
	var _redboxReact = __webpack_require__(49);
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react2 = _interopRequireDefault(_react);
	
	var _utilities = __webpack_require__(55);
	
	var _classnames = __webpack_require__(56);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _radium = __webpack_require__(57);
	
	var _radium2 = _interopRequireDefault(_radium);
	
	var _components = {
	    _$Segment: {
	        displayName: 'Segment'
	    }
	};
	
	var _reactComponentWrapper = (0, _reactTransformHmr3['default'])({
	    filename: 'E:/Work/semantic-react/src/components/elements/segment/segment.jsx',
	    components: _components,
	    locals: [module],
	    imports: [_react]
	});
	
	var _reactComponentWrapper2 = (0, _reactTransformCatchErrors3['default'])({
	    filename: 'E:/Work/semantic-react/src/components/elements/segment/segment.jsx',
	    components: _components,
	    locals: [],
	    imports: [_react, _redboxReact]
	});
	
	function _wrapComponent(uniqueId) {
	    return function (ReactClass) {
	        return _reactComponentWrapper2(_reactComponentWrapper(ReactClass, uniqueId), uniqueId);
	    };
	}
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var validProps = {
	    aligned: ['right', 'left', 'center'],
	    attached: ['bottom', 'top'],
	    floated: ['right', 'left']
	};
	
	var Segment = (function (_React$Component) {
	    _inherits(Segment, _React$Component);
	
	    function Segment() {
	        _classCallCheck(this, _Segment);
	
	        _get(Object.getPrototypeOf(_Segment.prototype), 'constructor', this).apply(this, arguments);
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
	
	            other.className = (0, _classnames2['default'])(this.props.className, this.getClasses());
	            other.style = this.getStyle();
	
	            if (typeof this.props.component == 'function' && this.props.component.displayName == 'Segment') {
	                component = 'div';
	            } else {
	                component = this.props.component;
	            }
	
	            return _react2['default'].createElement(component, other, this.props.children);
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
	    }], [{
	        key: 'propTypes',
	        value: {
	            aligned: _react2['default'].PropTypes.oneOf(['right', 'left', 'center']),
	            attached: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.oneOf(['bottom', 'top']), _react2['default'].PropTypes.bool]),
	            basic: _react2['default'].PropTypes.bool,
	            blurring: _react2['default'].PropTypes.bool,
	            children: _react2['default'].PropTypes.any,
	            className: _react2['default'].PropTypes.node,
	            clearing: _react2['default'].PropTypes.bool,
	            color: _react2['default'].PropTypes.string,
	            component: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.element, _react2['default'].PropTypes.string]),
	            container: _react2['default'].PropTypes.bool,
	            defaultClasses: _react2['default'].PropTypes.bool,
	            disabled: _react2['default'].PropTypes.bool,
	            emphasis: _react2['default'].PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
	            floated: _react2['default'].PropTypes.oneOf(['right', 'left']),
	            index: _react2['default'].PropTypes.number,
	            inverted: _react2['default'].PropTypes.bool,
	            loading: _react2['default'].PropTypes.bool,
	            spacing: _react2['default'].PropTypes.oneOf(['fitted', 'padded']),
	            style: _react2['default'].PropTypes.object,
	            type: _react2['default'].PropTypes.oneOf(['raised', 'stacked', 'piled']),
	            vertical: _react2['default'].PropTypes.bool,
	            zIndex: _react2['default'].PropTypes.number
	        },
	        enumerable: true
	    }, {
	        key: 'defaultProps',
	        value: {
	            component: 'div',
	            defaultClasses: true,
	            attached: false,
	            style: {}
	        },
	        enumerable: true
	    }]);
	
	    var _Segment = Segment;
	    Segment = _wrapComponent('_$Segment')(Segment) || Segment;
	    Segment = (0, _radium2['default'])(Segment) || Segment;
	    return Segment;
	})(_react2['default'].Component);
	
	exports['default'] = Segment;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)(module)))

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';
	
	var _reactTransformHmr2 = __webpack_require__(4);
	
	var _reactTransformHmr3 = _interopRequireDefault(_reactTransformHmr2);
	
	var _react = __webpack_require__(47);
	
	var _reactTransformCatchErrors2 = __webpack_require__(48);
	
	var _reactTransformCatchErrors3 = _interopRequireDefault(_reactTransformCatchErrors2);
	
	var _redboxReact = __webpack_require__(49);
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(56);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _radium = __webpack_require__(57);
	
	var _radium2 = _interopRequireDefault(_radium);
	
	var _components = {
	    _$Segments: {
	        displayName: 'Segments'
	    }
	};
	
	var _reactComponentWrapper = (0, _reactTransformHmr3['default'])({
	    filename: 'E:/Work/semantic-react/src/components/elements/segment/segments.jsx',
	    components: _components,
	    locals: [module],
	    imports: [_react]
	});
	
	var _reactComponentWrapper2 = (0, _reactTransformCatchErrors3['default'])({
	    filename: 'E:/Work/semantic-react/src/components/elements/segment/segments.jsx',
	    components: _components,
	    locals: [],
	    imports: [_react, _redboxReact]
	});
	
	function _wrapComponent(uniqueId) {
	    return function (ReactClass) {
	        return _reactComponentWrapper2(_reactComponentWrapper(ReactClass, uniqueId), uniqueId);
	    };
	}
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var Segments = (function (_React$Component) {
	    _inherits(Segments, _React$Component);
	
	    function Segments() {
	        _classCallCheck(this, _Segments);
	
	        _get(Object.getPrototypeOf(_Segments.prototype), 'constructor', this).apply(this, arguments);
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
	
	            other.className = (0, _classnames2['default'])(this.props.className, this.getClasses());
	
	            return _react2['default'].createElement(this.props.component, other, this.props.children);
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
	    }], [{
	        key: 'propTypes',
	        value: {
	            children: _react2['default'].PropTypes.node,
	            className: _react2['default'].PropTypes.node,
	            compact: _react2['default'].PropTypes.bool,
	            component: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.element, _react2['default'].PropTypes.string]),
	            defaultClasses: _react2['default'].PropTypes.bool,
	            horizontal: _react2['default'].PropTypes.bool,
	            inverted: _react2['default'].PropTypes.bool,
	            piled: _react2['default'].PropTypes.bool,
	            raised: _react2['default'].PropTypes.bool,
	            stacked: _react2['default'].PropTypes.bool
	        },
	        enumerable: true
	    }, {
	        key: 'defaultProps',
	        value: {
	            component: 'div',
	            defaultClasses: true
	        },
	        enumerable: true
	    }]);
	
	    var _Segments = Segments;
	    Segments = _wrapComponent('_$Segments')(Segments) || Segments;
	    Segments = (0, _radium2['default'])(Segments) || Segments;
	    return Segments;
	})(_react2['default'].Component);
	
	exports['default'] = Segments;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)(module)))

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var _react = __webpack_require__(47);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(56);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _radium = __webpack_require__(57);
	
	var _radium2 = _interopRequireDefault(_radium);
	
	var Actions = function Actions(_ref) {
	    var children = _ref.children;
	    var className = _ref.className;
	    var component = _ref.component;
	
	    var other = _objectWithoutProperties(_ref, ['children', 'className', 'component']);
	
	    other.className = (0, _classnames2['default'])(className, { actions: true });
	
	    return _react2['default'].createElement(component, other, children);
	};
	
	Actions.propTypes = {
	    children: _react2['default'].PropTypes.node,
	    className: _react2['default'].PropTypes.any,
	    component: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.element, _react2['default'].PropTypes.string])
	};
	
	Actions.defaultProps = {
	    component: 'div'
	};
	
	exports['default'] = (0, _radium2['default'])(Actions);
	module.exports = exports['default'];

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var _react = __webpack_require__(47);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(56);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _radium = __webpack_require__(57);
	
	var _radium2 = _interopRequireDefault(_radium);
	
	var Author = function Author(_ref) {
	    var children = _ref.children;
	    var className = _ref.className;
	    var component = _ref.component;
	
	    var other = _objectWithoutProperties(_ref, ['children', 'className', 'component']);
	
	    other.className = (0, _classnames2['default'])(className, { author: true });
	
	    return _react2['default'].createElement(component, other, children);
	};
	
	Author.propTypes = {
	    children: _react2['default'].PropTypes.node,
	    className: _react2['default'].PropTypes.any,
	    component: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.element, _react2['default'].PropTypes.string])
	};
	
	Author.defaultProps = {
	    component: 'a'
	};
	
	exports['default'] = (0, _radium2['default'])(Author);
	module.exports = exports['default'];

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var _react = __webpack_require__(47);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(56);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _utilities = __webpack_require__(55);
	
	var _radium = __webpack_require__(57);
	
	var _radium2 = _interopRequireDefault(_radium);
	
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
	
	    other.className = (0, _classnames2['default'])(className, getClasses(other));
	
	    return _react2['default'].createElement(component, other, children);
	};
	
	Container.propTypes = {
	    aligned: _react2['default'].PropTypes.oneOf(['right', 'left', 'justified', 'center']),
	    children: _react2['default'].PropTypes.node,
	    className: _react2['default'].PropTypes.any,
	    component: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.element, _react2['default'].PropTypes.string]),
	    fluid: _react2['default'].PropTypes.bool
	};
	
	Container.defaultProps = {
	    component: 'div'
	};
	
	exports['default'] = (0, _radium2['default'])(Container);
	module.exports = exports['default'];

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';
	
	var _reactTransformHmr2 = __webpack_require__(4);
	
	var _reactTransformHmr3 = _interopRequireDefault(_reactTransformHmr2);
	
	var _react = __webpack_require__(47);
	
	var _reactTransformCatchErrors2 = __webpack_require__(48);
	
	var _reactTransformCatchErrors3 = _interopRequireDefault(_reactTransformCatchErrors2);
	
	var _redboxReact = __webpack_require__(49);
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react2 = _interopRequireDefault(_react);
	
	var _utilities = __webpack_require__(55);
	
	var _classnames = __webpack_require__(56);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _radium = __webpack_require__(57);
	
	var _radium2 = _interopRequireDefault(_radium);
	
	var _components = {
	    _$Content: {
	        displayName: 'Content'
	    }
	};
	
	var _reactComponentWrapper = (0, _reactTransformHmr3['default'])({
	    filename: 'E:/Work/semantic-react/src/components/elements/simple/content.jsx',
	    components: _components,
	    locals: [module],
	    imports: [_react]
	});
	
	var _reactComponentWrapper2 = (0, _reactTransformCatchErrors3['default'])({
	    filename: 'E:/Work/semantic-react/src/components/elements/simple/content.jsx',
	    components: _components,
	    locals: [],
	    imports: [_react, _redboxReact]
	});
	
	function _wrapComponent(uniqueId) {
	    return function (ReactClass) {
	        return _reactComponentWrapper2(_reactComponentWrapper(ReactClass, uniqueId), uniqueId);
	    };
	}
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var validProps = {
	    aligned: ['top', 'middle', 'bottom'],
	    floated: ['right', 'left']
	};
	
	var Content = (function (_React$Component) {
	    _inherits(Content, _React$Component);
	
	    function Content() {
	        _classCallCheck(this, _Content);
	
	        _get(Object.getPrototypeOf(_Content.prototype), 'constructor', this).apply(this, arguments);
	    }
	
	    _createClass(Content, [{
	        key: 'renderDimmerChild',
	        value: function renderDimmerChild() {
	            return _react2['default'].createElement(
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
	
	            other.className = (0, _classnames2['default'])(this.props.className, this.getClasses());
	
	            return _react2['default'].createElement(this.props.component, other, children);
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
	    }], [{
	        key: 'propTypes',
	        value: {
	            active: _react2['default'].PropTypes.bool,
	            aligned: _react2['default'].PropTypes.string,
	            children: _react2['default'].PropTypes.node,
	            className: _react2['default'].PropTypes.node,
	            component: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.element, _react2['default'].PropTypes.string]),
	            defaultClasses: _react2['default'].PropTypes.bool,
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
	    }, {
	        key: 'defaultProps',
	        value: {
	            component: 'div',
	            defaultClasses: true,
	            floated: false
	        },
	        enumerable: true
	    }]);
	
	    var _Content = Content;
	    Content = _wrapComponent('_$Content')(Content) || Content;
	    Content = (0, _radium2['default'])(Content) || Content;
	    return Content;
	})(_react2['default'].Component);
	
	exports['default'] = Content;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)(module)))

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var _react = __webpack_require__(47);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(56);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _radium = __webpack_require__(57);
	
	var _radium2 = _interopRequireDefault(_radium);
	
	var Date = function Date(_ref) {
	    var children = _ref.children;
	    var className = _ref.className;
	    var component = _ref.component;
	
	    var other = _objectWithoutProperties(_ref, ['children', 'className', 'component']);
	
	    other.className = (0, _classnames2['default'])(className, { date: true });
	
	    return _react2['default'].createElement(component, other, children);
	};
	
	Date.propTypes = {
	    children: _react2['default'].PropTypes.node,
	    className: _react2['default'].PropTypes.any,
	    component: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.element, _react2['default'].PropTypes.string])
	};
	
	Date.defaultProps = {
	    component: 'div'
	};
	
	exports['default'] = (0, _radium2['default'])(Date);
	module.exports = exports['default'];

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';
	
	var _reactTransformHmr2 = __webpack_require__(4);
	
	var _reactTransformHmr3 = _interopRequireDefault(_reactTransformHmr2);
	
	var _react = __webpack_require__(47);
	
	var _reactTransformCatchErrors2 = __webpack_require__(48);
	
	var _reactTransformCatchErrors3 = _interopRequireDefault(_reactTransformCatchErrors2);
	
	var _redboxReact = __webpack_require__(49);
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(56);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _radium = __webpack_require__(57);
	
	var _radium2 = _interopRequireDefault(_radium);
	
	var _components = {
	    _$Description: {
	        displayName: 'Description'
	    }
	};
	
	var _reactComponentWrapper = (0, _reactTransformHmr3['default'])({
	    filename: 'E:/Work/semantic-react/src/components/elements/simple/description.jsx',
	    components: _components,
	    locals: [module],
	    imports: [_react]
	});
	
	var _reactComponentWrapper2 = (0, _reactTransformCatchErrors3['default'])({
	    filename: 'E:/Work/semantic-react/src/components/elements/simple/description.jsx',
	    components: _components,
	    locals: [],
	    imports: [_react, _redboxReact]
	});
	
	function _wrapComponent(uniqueId) {
	    return function (ReactClass) {
	        return _reactComponentWrapper2(_reactComponentWrapper(ReactClass, uniqueId), uniqueId);
	    };
	}
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var Description = (function (_React$Component) {
	    _inherits(Description, _React$Component);
	
	    function Description() {
	        _classCallCheck(this, _Description);
	
	        _get(Object.getPrototypeOf(_Description.prototype), 'constructor', this).apply(this, arguments);
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
	
	            other.className = (0, _classnames2['default'])(this.props.className, this.getClasses());
	
	            return _react2['default'].createElement(this.props.component, other, this.props.children);
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
	    }], [{
	        key: 'propTypes',
	        value: {
	            children: _react2['default'].PropTypes.node,
	            className: _react2['default'].PropTypes.node,
	            component: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.element, _react2['default'].PropTypes.string]),
	            defaultClasses: _react2['default'].PropTypes.bool,
	            hidden: _react2['default'].PropTypes.bool,
	            visible: _react2['default'].PropTypes.bool
	        },
	        enumerable: true
	    }, {
	        key: 'defaultProps',
	        value: {
	            component: 'div',
	            defaultClasses: true
	        },
	        enumerable: true
	    }]);
	
	    var _Description = Description;
	    Description = _wrapComponent('_$Description')(Description) || Description;
	    Description = (0, _radium2['default'])(Description) || Description;
	    return Description;
	})(_react2['default'].Component);
	
	exports['default'] = Description;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)(module)))

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var _react = __webpack_require__(47);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(56);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _radium = __webpack_require__(57);
	
	var _radium2 = _interopRequireDefault(_radium);
	
	var Meta = function Meta(_ref) {
	    var children = _ref.children;
	    var className = _ref.className;
	    var component = _ref.component;
	
	    var other = _objectWithoutProperties(_ref, ['children', 'className', 'component']);
	
	    other.className = (0, _classnames2['default'])(className, { metadata: true });
	
	    return _react2['default'].createElement(component, other, children);
	};
	
	Meta.propTypes = {
	    children: _react2['default'].PropTypes.node,
	    className: _react2['default'].PropTypes.any,
	    component: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.element, _react2['default'].PropTypes.string])
	};
	
	Meta.defaultProps = {
	    component: 'div'
	};
	
	exports['default'] = (0, _radium2['default'])(Meta);
	module.exports = exports['default'];

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var _react = __webpack_require__(47);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(56);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _radium = __webpack_require__(57);
	
	var _radium2 = _interopRequireDefault(_radium);
	
	var Summary = function Summary(_ref) {
	    var children = _ref.children;
	    var className = _ref.className;
	    var component = _ref.component;
	
	    var other = _objectWithoutProperties(_ref, ['children', 'className', 'component']);
	
	    other.className = (0, _classnames2['default'])(className, { summary: true });
	
	    return _react2['default'].createElement(component, other, children);
	};
	
	Summary.propTypes = {
	    children: _react2['default'].PropTypes.node,
	    className: _react2['default'].PropTypes.any,
	    component: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.element, _react2['default'].PropTypes.string])
	};
	
	Summary.defaultProps = {
	    component: 'div'
	};
	
	exports['default'] = (0, _radium2['default'])(Summary);
	module.exports = exports['default'];

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var _react = __webpack_require__(47);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(56);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _radium = __webpack_require__(57);
	
	var _radium2 = _interopRequireDefault(_radium);
	
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
	
	    other.className = (0, _classnames2['default'])(className, getClasses(props));
	
	    return _react2['default'].createElement(component, other, children);
	};
	
	Text.propTypes = {
	    children: _react2['default'].PropTypes.node,
	    className: _react2['default'].PropTypes.any,
	    component: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.element, _react2['default'].PropTypes.string]),
	    defaultClasses: _react2['default'].PropTypes.bool,
	    extra: _react2['default'].PropTypes.bool
	};
	
	Text.defaultProps = {
	    component: 'div',
	    defaultClasses: true
	};
	
	exports['default'] = (0, _radium2['default'])(Text);
	module.exports = exports['default'];

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopExportWildcard(obj, defaults) { var newObj = defaults({}, obj); delete newObj['default']; return newObj; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	var _modulesAccordionAccordion = __webpack_require__(94);
	
	_defaults(exports, _interopExportWildcard(_modulesAccordionAccordion, _defaults));
	
	var _modulesAccordionAccordionbody = __webpack_require__(95);
	
	_defaults(exports, _interopExportWildcard(_modulesAccordionAccordionbody, _defaults));
	
	var _modulesAccordionAccordiontitle = __webpack_require__(96);
	
	_defaults(exports, _interopExportWildcard(_modulesAccordionAccordiontitle, _defaults));
	
	var _modulesAnimateAnimate = __webpack_require__(97);
	
	_defaults(exports, _interopExportWildcard(_modulesAnimateAnimate, _defaults));
	
	var _modulesAnimateAnimations = __webpack_require__(103);
	
	_defaults(exports, _interopExportWildcard(_modulesAnimateAnimations, _defaults));
	
	var _modulesAnimateRquery = __webpack_require__(106);
	
	_defaults(exports, _interopExportWildcard(_modulesAnimateRquery, _defaults));
	
	var _modulesCheckboxCheckbox = __webpack_require__(108);
	
	_defaults(exports, _interopExportWildcard(_modulesCheckboxCheckbox, _defaults));
	
	var _modulesCheckboxCheckboxfields = __webpack_require__(109);
	
	_defaults(exports, _interopExportWildcard(_modulesCheckboxCheckboxfields, _defaults));
	
	var _modulesDimmerDimmer = __webpack_require__(110);
	
	_defaults(exports, _interopExportWildcard(_modulesDimmerDimmer, _defaults));
	
	var _modulesDimmerDimmable = __webpack_require__(147);
	
	_defaults(exports, _interopExportWildcard(_modulesDimmerDimmable, _defaults));
	
	var _modulesDropdownDropdown = __webpack_require__(148);
	
	_defaults(exports, _interopExportWildcard(_modulesDropdownDropdown, _defaults));
	
	var _modulesDropdownSelect = __webpack_require__(149);
	
	_defaults(exports, _interopExportWildcard(_modulesDropdownSelect, _defaults));
	
	var _modulesDropdownOption = __webpack_require__(164);
	
	_defaults(exports, _interopExportWildcard(_modulesDropdownOption, _defaults));
	
	var _modulesDropdownDropdownmenu = __webpack_require__(165);
	
	_defaults(exports, _interopExportWildcard(_modulesDropdownDropdownmenu, _defaults));
	
	var _modulesModalModal = __webpack_require__(166);
	
	_defaults(exports, _interopExportWildcard(_modulesModalModal, _defaults));
	
	var _modulesModalModalbody = __webpack_require__(167);
	
	_defaults(exports, _interopExportWildcard(_modulesModalModalbody, _defaults));
	
	var _modulesPopupPopup = __webpack_require__(168);
	
	_defaults(exports, _interopExportWildcard(_modulesPopupPopup, _defaults));
	
	var _modulesPopupPopupelement = __webpack_require__(185);
	
	_defaults(exports, _interopExportWildcard(_modulesPopupPopupelement, _defaults));
	
	var _modulesProgressBar = __webpack_require__(186);
	
	_defaults(exports, _interopExportWildcard(_modulesProgressBar, _defaults));
	
	var _modulesProgressProgress = __webpack_require__(187);
	
	_defaults(exports, _interopExportWildcard(_modulesProgressProgress, _defaults));
	
	var _modulesRatingRating = __webpack_require__(188);
	
	_defaults(exports, _interopExportWildcard(_modulesRatingRating, _defaults));
	
	var _modulesSearchResults = __webpack_require__(189);
	
	_defaults(exports, _interopExportWildcard(_modulesSearchResults, _defaults));
	
	var _modulesSearchSearch = __webpack_require__(190);
	
	_defaults(exports, _interopExportWildcard(_modulesSearchSearch, _defaults));
	
	var _modulesTabTab = __webpack_require__(191);
	
	_defaults(exports, _interopExportWildcard(_modulesTabTab, _defaults));
	
	var _modulesTabTabs = __webpack_require__(193);
	
	_defaults(exports, _interopExportWildcard(_modulesTabTabs, _defaults));
	
	var _modulesTabTabtitle = __webpack_require__(194);
	
	_defaults(exports, _interopExportWildcard(_modulesTabTabtitle, _defaults));
	
	var _modulesTabTabcontent = __webpack_require__(192);
	
	_defaults(exports, _interopExportWildcard(_modulesTabTabcontent, _defaults));

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';
	
	var _reactTransformHmr2 = __webpack_require__(4);
	
	var _reactTransformHmr3 = _interopRequireDefault(_reactTransformHmr2);
	
	var _react = __webpack_require__(47);
	
	var _reactTransformCatchErrors2 = __webpack_require__(48);
	
	var _reactTransformCatchErrors3 = _interopRequireDefault(_reactTransformCatchErrors2);
	
	var _redboxReact = __webpack_require__(49);
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react2 = _interopRequireDefault(_react);
	
	var _modules = __webpack_require__(93);
	
	var _classnames = __webpack_require__(56);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _radium = __webpack_require__(57);
	
	var _radium2 = _interopRequireDefault(_radium);
	
	var _components = {
	    _$Accordion: {
	        displayName: 'Accordion'
	    }
	};
	
	var _reactComponentWrapper = (0, _reactTransformHmr3['default'])({
	    filename: 'E:/Work/semantic-react/src/components/modules/accordion/accordion.jsx',
	    components: _components,
	    locals: [module],
	    imports: [_react]
	});
	
	var _reactComponentWrapper2 = (0, _reactTransformCatchErrors3['default'])({
	    filename: 'E:/Work/semantic-react/src/components/modules/accordion/accordion.jsx',
	    components: _components,
	    locals: [],
	    imports: [_react, _redboxReact]
	});
	
	function _wrapComponent(uniqueId) {
	    return function (ReactClass) {
	        return _reactComponentWrapper2(_reactComponentWrapper(ReactClass, uniqueId), uniqueId);
	    };
	}
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var Accordion = (function (_Component) {
	    _inherits(Accordion, _Component);
	
	    _createClass(Accordion, null, [{
	        key: 'propTypes',
	        value: {
	            children: _react2['default'].PropTypes.node,
	            className: _react2['default'].PropTypes.node,
	            defaultClasses: _react2['default'].PropTypes.bool,
	            fluid: _react2['default'].PropTypes.bool,
	            inverted: _react2['default'].PropTypes.bool,
	            styled: _react2['default'].PropTypes.bool
	        },
	        enumerable: true
	    }, {
	        key: 'defaultProps',
	        value: {
	            defaultClasses: true
	        },
	        enumerable: true
	    }]);
	
	    function Accordion(props) {
	        _classCallCheck(this, _Accordion);
	
	        _get(Object.getPrototypeOf(_Accordion.prototype), 'constructor', this).call(this, props);
	
	        this.state = {
	            currentActive: null
	        };
	    }
	
	    _createClass(Accordion, [{
	        key: 'renderChildren',
	        value: function renderChildren() {
	            var index = 0;
	            var element = null;
	
	            return _react2['default'].Children.map(this.props.children, (function (child) {
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
	                { className: (0, _classnames2['default'])(this.props.className, classes) },
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
	
	    var _Accordion = Accordion;
	    Accordion = _wrapComponent('_$Accordion')(Accordion) || Accordion;
	    Accordion = (0, _radium2['default'])(Accordion) || Accordion;
	    return Accordion;
	})(_react.Component);

	exports.Accordion = Accordion;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)(module)))

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';
	
	var _reactTransformHmr2 = __webpack_require__(4);
	
	var _reactTransformHmr3 = _interopRequireDefault(_reactTransformHmr2);
	
	var _react = __webpack_require__(47);
	
	var _reactTransformCatchErrors2 = __webpack_require__(48);
	
	var _reactTransformCatchErrors3 = _interopRequireDefault(_reactTransformCatchErrors2);
	
	var _redboxReact = __webpack_require__(49);
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react2 = _interopRequireDefault(_react);
	
	var _modules = __webpack_require__(93);
	
	var _classnames = __webpack_require__(56);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	// TODO: image and horizontal list examples
	
	var _components = {
	    _$AccordionBody: {
	        displayName: 'AccordionBody'
	    }
	};
	
	var _reactComponentWrapper = (0, _reactTransformHmr3['default'])({
	    filename: 'E:/Work/semantic-react/src/components/modules/accordion/accordionbody.jsx',
	    components: _components,
	    locals: [module],
	    imports: [_react]
	});
	
	var _reactComponentWrapper2 = (0, _reactTransformCatchErrors3['default'])({
	    filename: 'E:/Work/semantic-react/src/components/modules/accordion/accordionbody.jsx',
	    components: _components,
	    locals: [],
	    imports: [_react, _redboxReact]
	});
	
	function _wrapComponent(uniqueId) {
	    return function (ReactClass) {
	        return _reactComponentWrapper2(_reactComponentWrapper(ReactClass, uniqueId), uniqueId);
	    };
	}
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var AccordionBody = (function (_Component) {
	    _inherits(AccordionBody, _Component);
	
	    _createClass(AccordionBody, null, [{
	        key: 'propTypes',
	        value: {
	            active: _react2['default'].PropTypes.bool,
	            children: _react2['default'].PropTypes.node,
	            defaultClasses: _react2['default'].PropTypes.bool
	        },
	        enumerable: true
	    }, {
	        key: 'defaultProps',
	        value: {
	            defaultClasses: true
	        },
	        enumerable: true
	    }]);
	
	    function AccordionBody(props) {
	        _classCallCheck(this, _AccordionBody);
	
	        _get(Object.getPrototypeOf(_AccordionBody.prototype), 'constructor', this).call(this, props);
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
	            return _react2['default'].createElement(
	                _modules.Animate,
	                {
	                    animation: animation,
	                    className: (0, _classnames2['default'])(classes),
	                    key: 'animate'
	                },
	                _react2['default'].createElement(
	                    _modules.Animate,
	                    { animation: childAnimation },
	                    this.props.children
	                )
	            );
	        }
	    }]);
	
	    var _AccordionBody = AccordionBody;
	    AccordionBody = _wrapComponent('_$AccordionBody')(AccordionBody) || AccordionBody;
	    return AccordionBody;
	})(_react.Component);

	exports.AccordionBody = AccordionBody;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)(module)))

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';
	
	var _reactTransformHmr2 = __webpack_require__(4);
	
	var _reactTransformHmr3 = _interopRequireDefault(_reactTransformHmr2);
	
	var _react = __webpack_require__(47);
	
	var _reactTransformCatchErrors2 = __webpack_require__(48);
	
	var _reactTransformCatchErrors3 = _interopRequireDefault(_reactTransformCatchErrors2);
	
	var _redboxReact = __webpack_require__(49);
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react2 = _interopRequireDefault(_react);
	
	var _elements = __webpack_require__(1);
	
	var _classnames = __webpack_require__(56);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _components = {
	    _$AccordionTitle: {
	        displayName: 'AccordionTitle'
	    }
	};
	
	var _reactComponentWrapper = (0, _reactTransformHmr3['default'])({
	    filename: 'E:/Work/semantic-react/src/components/modules/accordion/accordiontitle.jsx',
	    components: _components,
	    locals: [module],
	    imports: [_react]
	});
	
	var _reactComponentWrapper2 = (0, _reactTransformCatchErrors3['default'])({
	    filename: 'E:/Work/semantic-react/src/components/modules/accordion/accordiontitle.jsx',
	    components: _components,
	    locals: [],
	    imports: [_react, _redboxReact]
	});
	
	function _wrapComponent(uniqueId) {
	    return function (ReactClass) {
	        return _reactComponentWrapper2(_reactComponentWrapper(ReactClass, uniqueId), uniqueId);
	    };
	}
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var AccordionTitle = (function (_Component) {
	    _inherits(AccordionTitle, _Component);
	
	    _createClass(AccordionTitle, null, [{
	        key: 'propTypes',
	        value: {
	            active: _react2['default'].PropTypes.bool,
	            children: _react2['default'].PropTypes.node,
	            className: _react2['default'].PropTypes.node,
	            defaultClasses: _react2['default'].PropTypes.bool,
	            icon: _react2['default'].PropTypes.bool,
	            onClick: _react2['default'].PropTypes.func
	
	        },
	        enumerable: true
	    }, {
	        key: 'defaultProps',
	        value: {
	            defaultClasses: true,
	            icon: 'dropdown'
	        },
	        enumerable: true
	    }]);
	
	    function AccordionTitle(props) {
	        _classCallCheck(this, _AccordionTitle);
	
	        _get(Object.getPrototypeOf(_AccordionTitle.prototype), 'constructor', this).call(this, props);
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
	                {
	                    className: (0, _classnames2['default'])(this.props.className, classes),
	                    onClick: this.props.onClick
	                },
	                _react2['default'].createElement(_elements.Icon, { name: this.props.icon }),
	                this.props.children
	            );
	        }
	    }]);
	
	    var _AccordionTitle = AccordionTitle;
	    AccordionTitle = _wrapComponent('_$AccordionTitle')(AccordionTitle) || AccordionTitle;
	    return AccordionTitle;
	})(_react.Component);

	exports.AccordionTitle = AccordionTitle;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)(module)))

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';
	
	var _reactTransformHmr2 = __webpack_require__(4);
	
	var _reactTransformHmr3 = _interopRequireDefault(_reactTransformHmr2);
	
	var _react = __webpack_require__(47);
	
	var _reactTransformCatchErrors2 = __webpack_require__(48);
	
	var _reactTransformCatchErrors3 = _interopRequireDefault(_reactTransformCatchErrors2);
	
	var _redboxReact = __webpack_require__(49);
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	exports.Animate = Animate;
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react2 = _interopRequireDefault(_react);
	
	var _curves = __webpack_require__(98);
	
	var _easings = __webpack_require__(99);
	
	var _easings2 = _interopRequireDefault(_easings);
	
	var _raf = __webpack_require__(100);
	
	var _raf2 = _interopRequireDefault(_raf);
	
	var _components = {
	    _$animation: {
	        displayName: 'animation',
	        isInFunction: true
	    }
	};
	
	var _reactComponentWrapper = (0, _reactTransformHmr3['default'])({
	    filename: 'E:/Work/semantic-react/src/components/modules/animate/animate.jsx',
	    components: _components,
	    locals: [module],
	    imports: [_react]
	});
	
	var _reactComponentWrapper2 = (0, _reactTransformCatchErrors3['default'])({
	    filename: 'E:/Work/semantic-react/src/components/modules/animate/animate.jsx',
	    components: _components,
	    locals: [],
	    imports: [_react, _redboxReact]
	});
	
	function _wrapComponent(uniqueId) {
	    return function (ReactClass) {
	        return _reactComponentWrapper2(_reactComponentWrapper(ReactClass, uniqueId), uniqueId);
	    };
	}
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var noop = function noop() {};
	
	function Animate(ComposedComponent) {
	    return (function (_React$Component) {
	        _inherits(animation, _React$Component);
	
	        _createClass(animation, null, [{
	            key: 'animatable',
	            value: true,
	            enumerable: true
	        }, {
	            key: 'displayName',
	            value: ComposedComponent.displayName || ComposedComponent.name,
	            enumerable: true
	        }, {
	            key: 'propTypes',
	            value: {
	                animate: _react2['default'].PropTypes.bool,
	                cancel: _react2['default'].PropTypes.bool,
	                cancelDuration: _react2['default'].PropTypes.number,
	                component: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.element, _react2['default'].PropTypes.string]),
	                duration: _react2['default'].PropTypes.number,
	                ease: _react2['default'].PropTypes.string,
	                end: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.bool, _react2['default'].PropTypes.shape({
	                    ease: _react2['default'].PropTypes.string,
	                    duration: _react2['default'].PropTypes.number,
	                    from: _react2['default'].PropTypes.object,
	                    to: _react2['default'].PropTypes.object
	                })]),
	                enter: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.bool, _react2['default'].PropTypes.shape({
	                    ease: _react2['default'].PropTypes.string,
	                    duration: _react2['default'].PropTypes.number,
	                    from: _react2['default'].PropTypes.object,
	                    to: _react2['default'].PropTypes.object
	                })]),
	                leave: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.bool, _react2['default'].PropTypes.shape({
	                    ease: _react2['default'].PropTypes.string,
	                    duration: _react2['default'].PropTypes.number,
	                    from: _react2['default'].PropTypes.object,
	                    to: _react2['default'].PropTypes.object
	                })]),
	                onComplete: _react2['default'].PropTypes.func,
	                start: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.bool, _react2['default'].PropTypes.shape({
	                    ease: _react2['default'].PropTypes.string,
	                    duration: _react2['default'].PropTypes.number,
	                    from: _react2['default'].PropTypes.object,
	                    to: _react2['default'].PropTypes.object
	                })]),
	                style: _react2['default'].PropTypes.object
	            },
	            enumerable: true
	        }, {
	            key: 'defaultProps',
	            value: {
	                cancelDuration: 200,
	                duration: 500,
	                ease: 'ease',
	                end: false,
	                enter: false,
	                leave: false,
	                onComplete: noop,
	                start: false
	            },
	            enumerable: true
	        }]);
	
	        function animation(props) {
	            _classCallCheck(this, _animation);
	
	            _get(Object.getPrototypeOf(_animation.prototype), 'constructor', this).call(this, props);
	
	            this.animation = null;
	            this.animating = false;
	            this.callback = noop;
	            this.animatingDOM = false;
	
	            this.state = {
	                animating: false,
	                canceling: false,
	                style: props.start ? this.parseProperties(this.props.start.from) : {}
	            };
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
	
	                return _react2['default'].createElement(ComposedComponent, _extends({}, other, {
	                    style: style }));
	            }
	        }, {
	            key: 'stringifyProperties',
	            value: function stringifyProperties(anim) {
	                var _this = this;
	
	                Object.keys(anim).forEach(function (prop) {
	                    // handle function properties: translateX(3)
	                    if (typeof anim[prop] === 'object' && _this.start[prop].type == 'function') {
	                        anim[prop] = anim[prop].name + '(' + anim[prop].params.join(',') + ')';
	                        // handle units: { value: 0, units: '%'}
	                    } else if (typeof anim[prop] === 'object' && _this.start[prop].type == 'unit') {
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
	                    if (typeof anim[prop] === 'object' && anim[prop].units) {
	                        anim[prop].type = 'unit';
	                        /*
	                            handles case where the value is a CSS function
	                            {
	                                width: transformX(3)
	                            }
	                        */
	                    } else if (func) {
	                            var _name = func[1];
	                            var params = func[2].split(',');
	
	                            params = params.map(function (item) {
	                                return parseInt(item.trim());
	                            });
	
	                            anim[prop] = {
	                                name: _name,
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
	                this.animation = (0, _raf2['default'])(this.animator.bind(this));
	            }
	        }, {
	            key: 'animator',
	            value: function animator() {
	                var _this2 = this;
	
	                var ease = undefined;
	                var time = new Date().getTime();
	                var delta = (time - this.startTime) / (this.duration || this.props.duration);
	                var deltaState = {};
	
	                // linear, swing and spring are seperate functions
	                if (this.ease == 'linear' || this.ease == 'swing' || this.ease == 'spring') {
	                    ease = _easings2['default'][this.ease];
	                    // otherwise use the curve generator
	                } else {
	                        ease = _curves.bezier.apply(this, _easings2['default'][this.ease]);
	                    }
	
	                delta = delta > 1 ? 1 : delta;
	
	                Object.keys(this.start).forEach(function (prop) {
	
	                    // handle function values: translateX(3)
	                    if (typeof _this2.start[prop] === 'object' && _this2.start[prop].type == 'function') {
	                        deltaState[prop] = Object.assign({}, _this2.start[prop]);
	
	                        deltaState[prop].params = _this2.start[prop].params.map(function (item, index) {
	                            return item + (_this2.end[prop].params[index] - item) * ease(delta);
	                        });
	
	                        // handles unit values: width: { value: 0, units: '%' }
	                    } else if (typeof _this2.start[prop] === 'object' && _this2.start[prop].type == 'unit') {
	                            deltaState[prop] = Object.assign({}, _this2.start[prop]);
	                            deltaState[prop].value = _this2.start[prop].value + (_this2.end[prop].value - _this2.start[prop].value) * ease(delta);
	
	                            // handles numeric values { width: 0 }
	                        } else if (typeof _this2.start[prop] !== 'string') {
	                                deltaState[prop] = _this2.start[prop] + (_this2.end[prop] - _this2.start[prop]) * ease(delta);
	
	                                // anything else we just leave alone
	                            } else {
	                                    deltaState[prop] = _this2.start[prop];
	                                }
	                });
	
	                this.setState({
	                    style: this.stringifyProperties(deltaState)
	                });
	
	                // we can only cancel if we aren't already
	                if (this.props.cancel && !this.state.canceling && !this.animatingDOM) {
	                    _raf2['default'].cancel(this.animation);
	
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
	                    _raf2['default'].cancel(this.animation);
	
	                    this.onComplete();
	                } else {
	                    this.animation = (0, _raf2['default'])(this.animator.bind(this));
	                }
	            }
	        }]);
	
	        var _animation = animation;
	        animation = _wrapComponent('_$animation')(animation) || animation;
	        return animation;
	    })(_react2['default'].Component);
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)(module)))

/***/ },
/* 98 */
/***/ function(module, exports) {

	/*eslint-disable */
	/* Bezier curve function generator. Copyright Gaetan Renaudeau. MIT License:
	 http://en.wikipedia.org/wiki/MIT_License */
	"use strict";
	
	exports.bezier = function (mX1, mY1, mX2, mY2) {
	    var NEWTON_ITERATIONS = 4,
	        NEWTON_MIN_SLOPE = 0.001,
	        SUBDIVISION_PRECISION = 0.0000001,
	        SUBDIVISION_MAX_ITERATIONS = 10,
	        kSplineTableSize = 11,
	        kSampleStepSize = 1.0 / (kSplineTableSize - 1.0),
	        float32ArraySupported = ("Float32Array" in window);
	
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
	exports.spring = (function () {
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
	})();
	/*eslint-enable */

/***/ },
/* 99 */
/***/ function(module, exports) {

	/* Velocity.js */
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	exports['default'] = {
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
	module.exports = exports['default'];

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {var now = __webpack_require__(101)
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
/* 101 */
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
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(102)))

/***/ },
/* 102 */
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
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';
	
	var _reactTransformHmr2 = __webpack_require__(4);
	
	var _reactTransformHmr3 = _interopRequireDefault(_reactTransformHmr2);
	
	var _react = __webpack_require__(47);
	
	var _reactTransformCatchErrors2 = __webpack_require__(48);
	
	var _reactTransformCatchErrors3 = _interopRequireDefault(_reactTransformCatchErrors2);
	
	var _redboxReact = __webpack_require__(49);
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactAddonsTransitionGroup = __webpack_require__(104);
	
	var _reactAddonsTransitionGroup2 = _interopRequireDefault(_reactAddonsTransitionGroup);
	
	var _components = {
	    _$Animations: {
	        displayName: 'Animations'
	    }
	};
	
	var _reactComponentWrapper = (0, _reactTransformHmr3['default'])({
	    filename: 'E:/Work/semantic-react/src/components/modules/animate/animations.jsx',
	    components: _components,
	    locals: [module],
	    imports: [_react]
	});
	
	var _reactComponentWrapper2 = (0, _reactTransformCatchErrors3['default'])({
	    filename: 'E:/Work/semantic-react/src/components/modules/animate/animations.jsx',
	    components: _components,
	    locals: [],
	    imports: [_react, _redboxReact]
	});
	
	function _wrapComponent(uniqueId) {
	    return function (ReactClass) {
	        return _reactComponentWrapper2(_reactComponentWrapper(ReactClass, uniqueId), uniqueId);
	    };
	}
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var Animations = (function (_React$Component) {
	    _inherits(Animations, _React$Component);
	
	    function Animations() {
	        _classCallCheck(this, _Animations);
	
	        _get(Object.getPrototypeOf(_Animations.prototype), 'constructor', this).apply(this, arguments);
	    }
	
	    _createClass(Animations, [{
	        key: 'renderChildren',
	        value: function renderChildren() {
	            var _this = this;
	
	            return _react2['default'].Children.map(this.props.children, function (child) {
	                var props = {};
	                props.enter = _this.props.enter !== false ? _this.props.enter : false;
	                props.leave = _this.props.leave !== false ? _this.props.leave : false;
	
	                // ReactTransitionGroup will error on free-floating text.
	                if (typeof child === 'string') {
	                    return _react2['default'].createElement(
	                        'span',
	                        null,
	                        child
	                    );
	                }
	
	                if (props.enter === false && props.leave === false || child.props.noAnimate === true) {
	                    return child;
	                } else {
	                    return _react2['default'].cloneElement(child, props);
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
	
	            return _react2['default'].createElement(
	                _reactAddonsTransitionGroup2['default'],
	                other,
	                children
	            );
	        }
	    }], [{
	        key: 'propTypes',
	        value: {
	            children: _react2['default'].PropTypes.node,
	            enter: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.bool, _react2['default'].PropTypes.shape({
	                ease: _react2['default'].PropTypes.string,
	                duration: _react2['default'].PropTypes.number,
	                from: _react2['default'].PropTypes.object,
	                to: _react2['default'].PropTypes.object
	            })]),
	            leave: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.bool, _react2['default'].PropTypes.shape({
	                ease: _react2['default'].PropTypes.string,
	                duration: _react2['default'].PropTypes.number,
	                from: _react2['default'].PropTypes.object,
	                to: _react2['default'].PropTypes.object
	            })])
	        },
	        enumerable: true
	    }, {
	        key: 'defaultProps',
	        value: {
	            enter: false,
	            leave: false
	        },
	        enumerable: true
	    }]);
	
	    var _Animations = Animations;
	    Animations = _wrapComponent('_$Animations')(Animations) || Animations;
	    return Animations;
	})(_react2['default'].Component);
	
	exports.Animations = Animations;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)(module)))

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(105);

/***/ },
/* 105 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_105__;

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _reactDom = __webpack_require__(107);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	// this is a minimalist implementation of Zepto. We are only using $ functions
	// that are neccesary to implement Semantic UI. None of these functions allow
	// for SETTING properties.
	
	var rQuery = (function () {
	    var rquery = {},
	        $ = undefined,
	        emptyArray = [],
	        uniq = undefined,
	        filter = emptyArray.filter,
	        camelize = undefined,
	        class2type = {},
	        rootNodeRE = /^(?:body|html)$/i;
	
	    camelize = function (str) {
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
	            selector = _reactDom2['default'].findDOMNode(selector);
	            dom = [selector], selector = null;
	        }
	
	        return rquery.R(dom, selector);
	    };
	
	    uniq = function (array) {
	        return filter.call(array, function (item, idx) {
	            return array.indexOf(item) == idx;
	        });
	    };
	
	    $ = function (selector) {
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
	            for (i = 0; i < elements.length; i++) if (callback.call(elements[i], i, elements[i]) === false) return elements;
	        } else {
	            for (key in elements) if (callback.call(elements[key], key, elements[key]) === false) return elements;
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
	                while (parent && !rootNodeRE.test(parent.nodeName) && $(parent).css('position') == 'static') parent = parent.offsetParent;
	
	                return parent;
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
	            var hasScrollTop = ('scrollTop' in this[0]);
	            return hasScrollTop ? this[0].scrollTop : this[0].pageYOffset;
	        },
	        scrollLeft: function scrollLeft() {
	            if (!this.length) return;
	            var hasScrollLeft = ('scrollLeft' in this[0]);
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
	})();
	
	exports.$ = rQuery;

/***/ },
/* 107 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_107__;

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';
	
	var _reactTransformHmr2 = __webpack_require__(4);
	
	var _reactTransformHmr3 = _interopRequireDefault(_reactTransformHmr2);
	
	var _react = __webpack_require__(47);
	
	var _reactTransformCatchErrors2 = __webpack_require__(48);
	
	var _reactTransformCatchErrors3 = _interopRequireDefault(_reactTransformCatchErrors2);
	
	var _redboxReact = __webpack_require__(49);
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(56);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _radium = __webpack_require__(57);
	
	var _radium2 = _interopRequireDefault(_radium);
	
	var _components = {
	    _$Checkbox: {
	        displayName: 'Checkbox'
	    }
	};
	
	var _reactComponentWrapper = (0, _reactTransformHmr3['default'])({
	    filename: 'E:/Work/semantic-react/src/components/modules/checkbox/checkbox.jsx',
	    components: _components,
	    locals: [module],
	    imports: [_react]
	});
	
	var _reactComponentWrapper2 = (0, _reactTransformCatchErrors3['default'])({
	    filename: 'E:/Work/semantic-react/src/components/modules/checkbox/checkbox.jsx',
	    components: _components,
	    locals: [],
	    imports: [_react, _redboxReact]
	});
	
	function _wrapComponent(uniqueId) {
	    return function (ReactClass) {
	        return _reactComponentWrapper2(_reactComponentWrapper(ReactClass, uniqueId), uniqueId);
	    };
	}
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var Checkbox = (function (_Component) {
	    _inherits(Checkbox, _Component);
	
	    _createClass(Checkbox, null, [{
	        key: 'propTypes',
	        value: {
	            checked: _react2['default'].PropTypes.bool,
	            children: _react2['default'].PropTypes.node,
	            className: _react2['default'].PropTypes.any,
	            component: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.element, _react2['default'].PropTypes.string]),
	            defaultClasses: _react2['default'].PropTypes.bool,
	            disabled: _react2['default'].PropTypes.bool,
	            fitted: _react2['default'].PropTypes.bool,
	            indeterminate: _react2['default'].PropTypes.bool,
	            name: _react2['default'].PropTypes.string,
	            onClick: _react2['default'].PropTypes.func,
	            radio: _react2['default'].PropTypes.bool,
	            readOnly: _react2['default'].PropTypes.bool,
	            slider: _react2['default'].PropTypes.bool,
	            toggle: _react2['default'].PropTypes.bool
	        },
	        enumerable: true
	    }, {
	        key: 'defaultProps',
	        value: {
	            component: 'div',
	            defaultClasses: true
	        },
	        enumerable: true
	    }]);
	
	    function Checkbox(props) {
	        _classCallCheck(this, _Checkbox);
	
	        _get(Object.getPrototypeOf(_Checkbox.prototype), 'constructor', this).call(this, props);
	
	        this.state = {
	            active: this.props.checked
	        };
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
	
	            var childElements = [_react2['default'].DOM.input(_extends({
	                type: 'checkbox',
	                key: 'input',
	                className: 'hidden',
	                checked: this.state.active || this.props.checked,
	                readOnly: true
	            }, other)), _react2['default'].DOM.label({
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
	
	            other.className = (0, _classnames2['default'])(this.props.className, this.getClasses());
	            other.onClick = typeof this.props.onClick === 'function' ? this.props.onClick : this.onClick.bind(this);
	
	            return _react2['default'].createElement(this.props.component, other, this.renderChildren());
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
	
	    var _Checkbox = Checkbox;
	    Checkbox = _wrapComponent('_$Checkbox')(Checkbox) || Checkbox;
	    Checkbox = (0, _radium2['default'])(Checkbox) || Checkbox;
	    return Checkbox;
	})(_react.Component);

	exports.Checkbox = Checkbox;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)(module)))

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';
	
	var _reactTransformHmr2 = __webpack_require__(4);
	
	var _reactTransformHmr3 = _interopRequireDefault(_reactTransformHmr2);
	
	var _react = __webpack_require__(47);
	
	var _reactTransformCatchErrors2 = __webpack_require__(48);
	
	var _reactTransformCatchErrors3 = _interopRequireDefault(_reactTransformCatchErrors2);
	
	var _redboxReact = __webpack_require__(49);
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react2 = _interopRequireDefault(_react);
	
	var _modules = __webpack_require__(93);
	
	var _classnames = __webpack_require__(56);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _radium = __webpack_require__(57);
	
	var _radium2 = _interopRequireDefault(_radium);
	
	var _components = {
	    _$CheckboxFields: {
	        displayName: 'CheckboxFields'
	    }
	};
	
	var _reactComponentWrapper = (0, _reactTransformHmr3['default'])({
	    filename: 'E:/Work/semantic-react/src/components/modules/checkbox/checkboxfields.jsx',
	    components: _components,
	    locals: [module],
	    imports: [_react]
	});
	
	var _reactComponentWrapper2 = (0, _reactTransformCatchErrors3['default'])({
	    filename: 'E:/Work/semantic-react/src/components/modules/checkbox/checkboxfields.jsx',
	    components: _components,
	    locals: [],
	    imports: [_react, _redboxReact]
	});
	
	function _wrapComponent(uniqueId) {
	    return function (ReactClass) {
	        return _reactComponentWrapper2(_reactComponentWrapper(ReactClass, uniqueId), uniqueId);
	    };
	}
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var CheckboxFields = (function (_Component) {
	    _inherits(CheckboxFields, _Component);
	
	    _createClass(CheckboxFields, null, [{
	        key: 'propTypes',
	        value: {
	            children: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.array, _react2['default'].PropTypes.node]),
	            className: _react2['default'].PropTypes.node,
	            component: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.element, _react2['default'].PropTypes.string]),
	            defaultClasses: _react2['default'].PropTypes.bool,
	            disabled: _react2['default'].PropTypes.bool,
	            name: _react2['default'].PropTypes.string.isRequired,
	            onClick: _react2['default'].PropTypes.func,
	            radio: _react2['default'].PropTypes.bool,
	            readOnly: _react2['default'].PropTypes.bool,
	            type: _react2['default'].PropTypes.oneOf(['grouped', 'inline']).isRequired
	        },
	        enumerable: true
	    }, {
	        key: 'defaultProps',
	        value: {
	            component: 'div',
	            defaultClasses: true
	        },
	        enumerable: true
	    }]);
	
	    function CheckboxFields(props) {
	        _classCallCheck(this, _CheckboxFields);
	
	        _get(Object.getPrototypeOf(_CheckboxFields.prototype), 'constructor', this).call(this, props);
	
	        var active = this.props.radio ? -1 : [];
	
	        this.state = {
	            active: active
	        };
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
	            var _this = this;
	
	            var index = 0;
	            var element = null;
	
	            if (_react2['default'].Children.count(this.props.children) === 1) {
	                return this.cloneChild(index, _react2['default'].Children.only(this.props.children));
	            } else {
	                return _react2['default'].Children.map(this.props.children, function (child) {
	                    if (child.type == _modules.Checkbox) {
	                        element = _this.cloneChild(index, child);
	
	                        element = _react2['default'].DOM.div({
	                            key: index,
	                            className: 'field'
	                        }, element);
	
	                        index++;
	                    } else if (typeof child === 'string') {
	                        return _react2['default'].createElement(
	                            'label',
	                            { htmlFor: _this.props.name },
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
	            other.className = (0, _classnames2['default'])(this.props.className, this.getClasses());
	
	            return _react2['default'].createElement(this.props.component, other, this.renderChildren());
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
	
	            return _react2['default'].cloneElement(child, _extends({
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
	                fields: _react2['default'].Children.count(this.props.children) > 1
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
	
	    var _CheckboxFields = CheckboxFields;
	    CheckboxFields = _wrapComponent('_$CheckboxFields')(CheckboxFields) || CheckboxFields;
	    CheckboxFields = (0, _radium2['default'])(CheckboxFields) || CheckboxFields;
	    return CheckboxFields;
	})(_react.Component);

	exports.CheckboxFields = CheckboxFields;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)(module)))

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';
	
	var _reactTransformHmr2 = __webpack_require__(4);
	
	var _reactTransformHmr3 = _interopRequireDefault(_reactTransformHmr2);
	
	var _react = __webpack_require__(47);
	
	var _reactTransformCatchErrors2 = __webpack_require__(48);
	
	var _reactTransformCatchErrors3 = _interopRequireDefault(_reactTransformCatchErrors2);
	
	var _redboxReact = __webpack_require__(49);
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactMotionUiPack = __webpack_require__(111);
	
	var _reactMotionUiPack2 = _interopRequireDefault(_reactMotionUiPack);
	
	var _utilities = __webpack_require__(55);
	
	var _elements = __webpack_require__(1);
	
	var _classnames = __webpack_require__(56);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _defaultProps = __webpack_require__(146);
	
	var _radium = __webpack_require__(57);
	
	var _radium2 = _interopRequireDefault(_radium);
	
	var _components = {
	    _$Dimmer: {
	        displayName: 'Dimmer'
	    }
	};
	
	var _reactComponentWrapper = (0, _reactTransformHmr3['default'])({
	    filename: 'E:/Work/semantic-react/src/components/modules/dimmer/dimmer.jsx',
	    components: _components,
	    locals: [module],
	    imports: [_react]
	});
	
	var _reactComponentWrapper2 = (0, _reactTransformCatchErrors3['default'])({
	    filename: 'E:/Work/semantic-react/src/components/modules/dimmer/dimmer.jsx',
	    components: _components,
	    locals: [],
	    imports: [_react, _redboxReact]
	});
	
	function _wrapComponent(uniqueId) {
	    return function (ReactClass) {
	        return _reactComponentWrapper2(_reactComponentWrapper(ReactClass, uniqueId), uniqueId);
	    };
	}
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var Dimmer = (function (_React$Component) {
	    _inherits(Dimmer, _React$Component);
	
	    function Dimmer() {
	        _classCallCheck(this, _Dimmer);
	
	        _get(Object.getPrototypeOf(_Dimmer.prototype), 'constructor', this).apply(this, arguments);
	    }
	
	    _createClass(Dimmer, [{
	        key: 'getChildContext',
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
	            other.className = (0, _classnames2['default'])(other.className, this.getClasses());
	            return _react2['default'].createElement(
	                _reactMotionUiPack2['default'],
	                { component: false,
	                    enter: enterAnimation,
	                    leave: leaveAnimation
	                },
	                active && _react2['default'].createElement(
	                    Component,
	                    _extends({}, other, {
	                        key: 'dimmer'
	                    }),
	                    (0, _utilities.hasChild)(children, _elements.Loader) ? children : _react2['default'].createElement(
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
	    }], [{
	        key: 'propTypes',
	        value: _extends({}, _defaultProps.defaultPropTypes, {
	            /**
	             * Hide/Display dimmer
	             */
	            active: _react2['default'].PropTypes.bool,
	            /**
	             * Enter animation
	             */
	            enterAnimation: _react2['default'].PropTypes.object,
	            /**
	             * Leave animation
	             */
	            leaveAnimation: _react2['default'].PropTypes.object,
	            /**
	             * Page dimmer. Doesn't require dimmable section
	             */
	            page: _react2['default'].PropTypes.bool,
	            /**
	             * Inverted dimmer
	             */
	            inverted: _react2['default'].PropTypes.bool
	        }),
	
	        // This forces <Content> to add a centered div below it.
	        enumerable: true
	    }, {
	        key: 'childContextTypes',
	        value: {
	            isDimmerChild: _react2['default'].PropTypes.bool
	        },
	        enumerable: true
	    }, {
	        key: 'defaultProps',
	        value: _extends({}, _defaultProps.defaultPropValues, {
	            active: false,
	            enterAnimation: {
	                opacity: 1
	            },
	            leaveAnimation: {
	                opacity: 0
	            },
	            page: false,
	            inverted: false
	        }),
	        enumerable: true
	    }]);
	
	    var _Dimmer = Dimmer;
	    Dimmer = _wrapComponent('_$Dimmer')(Dimmer) || Dimmer;
	    Dimmer = (0, _radium2['default'])(Dimmer) || Dimmer;
	    return Dimmer;
	})(_react2['default'].Component);
	
	exports.Dimmer = Dimmer;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)(module)))

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _Transition = __webpack_require__(112);
	
	var _Transition2 = _interopRequireDefault(_Transition);
	
	exports['default'] = _Transition2['default'];
	module.exports = exports['default'];

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(47);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactMotion = __webpack_require__(113);
	
	var _reactPropTypesLibElementType = __webpack_require__(125);
	
	var _reactPropTypesLibElementType2 = _interopRequireDefault(_reactPropTypesLibElementType);
	
	var _cloneStyles = __webpack_require__(127);
	
	var _cloneStyles2 = _interopRequireDefault(_cloneStyles);
	
	var _toRMStyles = __webpack_require__(128);
	
	var _toRMStyles2 = _interopRequireDefault(_toRMStyles);
	
	var _fromRMStyles = __webpack_require__(129);
	
	var _fromRMStyles2 = _interopRequireDefault(_fromRMStyles);
	
	var _configToStyle = __webpack_require__(130);
	
	var _configToStyle2 = _interopRequireDefault(_configToStyle);
	
	var _TransitionChild = __webpack_require__(132);
	
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
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      var _this2 = this;
	
	      var _props5 = this.props;
	      var children = _props5.children;
	      var runOnMount = _props5.runOnMount;
	
	      if (runOnMount) return;
	
	      // render things instantly when runOnMount is set to `false`
	      _react.Children.forEach(children, function (child) {
	        if (!child) return;
	        var key = child.key || _this2._onlyKey;
	        _this2._instant[key] = true;
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this3 = this;
	
	      // consume component property to not pass it again to custom component
	      var _props6 = this.props;
	      var component = _props6.component;
	
	      var other = _objectWithoutProperties(_props6, ['component']);
	
	      return _react2['default'].createElement(
	        _reactMotion.TransitionMotion,
	        {
	          defaultStyles: this._getDefaultStyles(),
	          styles: this._getStyles(),
	          willEnter: this._willEnter,
	          willLeave: this._willLeave
	        },
	        function (currValues) {
	          var children = _this3._childrenToRender(currValues);
	          var wrapper = null;
	
	          if (!component || component === 'false') {
	            if (_react.Children.count(children) === 1) {
	              wrapper = _react.Children.only(children[0]);
	            } else {
	              wrapper = (0, _react.createElement)('span', { style: { display: 'none' } });
	            }
	          } else {
	            wrapper = (0, _react.createElement)(component, other, children);
	          }
	
	          return wrapper;
	        }
	      );
	    }
	  }], [{
	    key: 'propTypes',
	    value: {
	      component: _react.PropTypes.oneOfType([_reactPropTypesLibElementType2['default'], _react.PropTypes.bool]),
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
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequire(obj) { return obj && obj.__esModule ? obj['default'] : obj; }
	
	var _Motion = __webpack_require__(114);
	
	exports.Motion = _interopRequire(_Motion);
	
	var _StaggeredMotion = __webpack_require__(119);
	
	exports.StaggeredMotion = _interopRequire(_StaggeredMotion);
	
	var _TransitionMotion = __webpack_require__(120);
	
	exports.TransitionMotion = _interopRequire(_TransitionMotion);
	
	var _spring = __webpack_require__(122);
	
	exports.spring = _interopRequire(_spring);
	
	var _presets = __webpack_require__(123);
	
	exports.presets = _interopRequire(_presets);
	
	// deprecated, dummy warning function
	
	var _reorderKeys = __webpack_require__(124);
	
	exports.reorderKeys = _interopRequire(_reorderKeys);

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _mapToZero = __webpack_require__(115);
	
	var _mapToZero2 = _interopRequireDefault(_mapToZero);
	
	var _stripStyle = __webpack_require__(116);
	
	var _stripStyle2 = _interopRequireDefault(_stripStyle);
	
	var _stepper3 = __webpack_require__(117);
	
	var _stepper4 = _interopRequireDefault(_stepper3);
	
	var _performanceNow = __webpack_require__(101);
	
	var _performanceNow2 = _interopRequireDefault(_performanceNow);
	
	var _raf = __webpack_require__(100);
	
	var _raf2 = _interopRequireDefault(_raf);
	
	var _shouldStopAnimation = __webpack_require__(118);
	
	var _shouldStopAnimation2 = _interopRequireDefault(_shouldStopAnimation);
	
	var _react = __webpack_require__(47);
	
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
/* 115 */
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
/* 116 */
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
/* 117 */
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
/* 118 */
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
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _mapToZero = __webpack_require__(115);
	
	var _mapToZero2 = _interopRequireDefault(_mapToZero);
	
	var _stripStyle = __webpack_require__(116);
	
	var _stripStyle2 = _interopRequireDefault(_stripStyle);
	
	var _stepper3 = __webpack_require__(117);
	
	var _stepper4 = _interopRequireDefault(_stepper3);
	
	var _performanceNow = __webpack_require__(101);
	
	var _performanceNow2 = _interopRequireDefault(_performanceNow);
	
	var _raf = __webpack_require__(100);
	
	var _raf2 = _interopRequireDefault(_raf);
	
	var _shouldStopAnimation = __webpack_require__(118);
	
	var _shouldStopAnimation2 = _interopRequireDefault(_shouldStopAnimation);
	
	var _react = __webpack_require__(47);
	
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
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _mapToZero = __webpack_require__(115);
	
	var _mapToZero2 = _interopRequireDefault(_mapToZero);
	
	var _stripStyle = __webpack_require__(116);
	
	var _stripStyle2 = _interopRequireDefault(_stripStyle);
	
	var _stepper3 = __webpack_require__(117);
	
	var _stepper4 = _interopRequireDefault(_stepper3);
	
	var _mergeDiff = __webpack_require__(121);
	
	var _mergeDiff2 = _interopRequireDefault(_mergeDiff);
	
	var _performanceNow = __webpack_require__(101);
	
	var _performanceNow2 = _interopRequireDefault(_performanceNow);
	
	var _raf = __webpack_require__(100);
	
	var _raf2 = _interopRequireDefault(_raf);
	
	var _shouldStopAnimation = __webpack_require__(118);
	
	var _shouldStopAnimation2 = _interopRequireDefault(_shouldStopAnimation);
	
	var _react = __webpack_require__(47);
	
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
/* 121 */
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
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports['default'] = spring;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _presets = __webpack_require__(123);
	
	var _presets2 = _interopRequireDefault(_presets);
	
	var defaultConfig = _extends({}, _presets2['default'].noWobble, {
	  precision: 0.01
	});
	
	function spring(val, config) {
	  return _extends({}, defaultConfig, config, { val: val });
	}
	
	module.exports = exports['default'];

/***/ },
/* 123 */
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
/* 124 */
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(102)))

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(47);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _common = __webpack_require__(126);
	
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
/* 126 */
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
/* 127 */
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
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports['default'] = toRMStyles;
	
	var _reactMotion = __webpack_require__(113);
	
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
/* 129 */
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
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var TRANSFORM = __webpack_require__(131)('transform');
	var UNIT_TRANSFORMS = ['translateX', 'translateY', 'translateZ', 'transformPerspective'];
	var DEGREE_TRANFORMS = ['rotate', 'rotateX', 'rotateY', 'rotateZ', 'skewX', 'skewY', 'scaleZ'];
	var UNITLESS_TRANSFORMS = ['scale', 'scaleX', 'scaleY'];
	var TRANSFORMS = UNIT_TRANSFORMS.concat(DEGREE_TRANFORMS, UNITLESS_TRANSFORMS);
	
	exports['default'] = function (configs) {
	  var styles = {};
	
	  Object.keys(configs).map(function (key) {
	    var isTransform = TRANSFORMS.indexOf(key) > -1;
	    var value = configs[key].toFixed ? configs[key].toFixed(4) : configs[key];
	
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
/* 131 */
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
/* 132 */
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
	
	var _react = __webpack_require__(47);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactMeasure = __webpack_require__(133);
	
	var _reactMeasure2 = _interopRequireDefault(_reactMeasure);
	
	var TransitionChild = (function (_Component) {
	  _inherits(TransitionChild, _Component);
	
	  function TransitionChild() {
	    _classCallCheck(this, TransitionChild);
	
	    _get(Object.getPrototypeOf(TransitionChild.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _createClass(TransitionChild, [{
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
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _Measure = __webpack_require__(134);
	
	var _Measure2 = _interopRequireDefault(_Measure);
	
	exports['default'] = _Measure2['default'];
	module.exports = exports['default'];

/***/ },
/* 134 */
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
	
	var _react = __webpack_require__(47);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(107);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _reactAddonsShallowCompare = __webpack_require__(135);
	
	var _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare);
	
	var _ResizeHandler = __webpack_require__(138);
	
	var _ResizeHandler2 = _interopRequireDefault(_ResizeHandler);
	
	var _diffConfig = __webpack_require__(141);
	
	var _diffConfig2 = _interopRequireDefault(_diffConfig);
	
	var _getNodeDimensions = __webpack_require__(142);
	
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
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(136);

/***/ },
/* 136 */
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
	
	var shallowEqual = __webpack_require__(137);
	
	/**
	 * Does a shallow comparison for props and state.
	 * See ReactComponentWithPureRenderMixin
	 */
	function shallowCompare(instance, nextProps, nextState) {
	  return !shallowEqual(instance.props, nextProps) || !shallowEqual(instance.state, nextState);
	}
	
	module.exports = shallowCompare;

/***/ },
/* 137 */
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
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _lodashDebounce = __webpack_require__(139);
	
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
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * lodash 3.1.1 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	var getNative = __webpack_require__(140);
	
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
/* 140 */
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
/* 141 */
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
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = getNodeDimensions;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _accurateHeight = __webpack_require__(143);
	
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
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = accurateHeight;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _dataStore = __webpack_require__(144);
	
	var _dataStore2 = _interopRequireDefault(_dataStore);
	
	var _getCloneHeight = __webpack_require__(145);
	
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
/* 144 */
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
/* 145 */
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
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Default prop types
	 */
	
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(47);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactPropTypesLibElementType = __webpack_require__(125);
	
	var _reactPropTypesLibElementType2 = _interopRequireDefault(_reactPropTypesLibElementType);
	
	/**
	 * Default component propTypes applied almost to every component
	 */
	var defaultPropTypes = {
	  /**
	   * Children nodes
	   */
	  children: _react2['default'].PropTypes.node,
	  /**
	   * Use other component for composing results
	   * @example
	   * <Grid component={Container}>...</Grid>
	   */
	  component: _reactPropTypesLibElementType2['default'],
	  /**
	   * Apply default semantic UI classes for component, for example ui button
	   */
	  defaultClasses: _react2['default'].PropTypes.bool,
	  /**
	   * Additional CSS ui classes
	   */
	  className: _react2['default'].PropTypes.string
	};
	
	exports.defaultPropTypes = defaultPropTypes;
	/**
	 * Default Prop values
	 */
	var defaultPropValues = {
	  component: 'div',
	  defaultClasses: true
	};
	exports.defaultPropValues = defaultPropValues;

/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var _react = __webpack_require__(47);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(56);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _defaultProps = __webpack_require__(146);
	
	var _radium = __webpack_require__(57);
	
	var _radium2 = _interopRequireDefault(_radium);
	
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
	
	    other.className = (0, _classnames2['default'])(other.className, classes);
	    var Component = component;
	    return _react2['default'].createElement(Component, other);
	};
	
	Dimmable.propTypes = _extends({}, _defaultProps.defaultPropTypes, {
	    /**
	     * Blur dimmer
	     */
	    blurring: _react2['default'].PropTypes.bool,
	    /**
	     * Add dimmed class to dimmable. This could be omitted and you can instead set overflow: hidden instead
	     */
	    dimmed: _react2['default'].PropTypes.bool
	});
	
	Dimmable.defaultProps = _extends({}, _defaultProps.defaultPropValues, {
	    dimmed: false,
	    blurring: false
	});
	
	exports.Dimmable = Dimmable = (0, _radium2['default'])(Dimmable);
	
	exports.Dimmable = Dimmable;

/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';
	
	var _reactTransformHmr2 = __webpack_require__(4);
	
	var _reactTransformHmr3 = _interopRequireDefault(_reactTransformHmr2);
	
	var _react = __webpack_require__(47);
	
	var _reactTransformCatchErrors2 = __webpack_require__(48);
	
	var _reactTransformCatchErrors3 = _interopRequireDefault(_reactTransformCatchErrors2);
	
	var _redboxReact = __webpack_require__(49);
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(56);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _utilities = __webpack_require__(55);
	
	var _radium = __webpack_require__(57);
	
	var _radium2 = _interopRequireDefault(_radium);
	
	var _components = {
	    _$Dropdown: {
	        displayName: 'Dropdown'
	    }
	};
	
	var _reactComponentWrapper = (0, _reactTransformHmr3['default'])({
	    filename: 'E:/Work/semantic-react/src/components/modules/dropdown/dropdown.jsx',
	    components: _components,
	    locals: [module],
	    imports: [_react]
	});
	
	var _reactComponentWrapper2 = (0, _reactTransformCatchErrors3['default'])({
	    filename: 'E:/Work/semantic-react/src/components/modules/dropdown/dropdown.jsx',
	    components: _components,
	    locals: [],
	    imports: [_react, _redboxReact]
	});
	
	function _wrapComponent(uniqueId) {
	    return function (ReactClass) {
	        return _reactComponentWrapper2(_reactComponentWrapper(ReactClass, uniqueId), uniqueId);
	    };
	}
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var validProps = {
	    pointing: ['left', 'right', 'bottom left', 'bottom right', 'top left', 'top right']
	};
	
	var Dropdown = (function (_React$Component) {
	    _inherits(Dropdown, _React$Component);
	
	    _createClass(Dropdown, null, [{
	        key: 'propTypes',
	        value: {
	            active: _react2['default'].PropTypes.bool,
	            children: _react2['default'].PropTypes.node,
	            className: _react2['default'].PropTypes.node,
	            compact: _react2['default'].PropTypes.bool,
	            component: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.element, _react2['default'].PropTypes.string, _react2['default'].PropTypes.func]),
	            defaultClasses: _react2['default'].PropTypes.bool,
	            disabled: _react2['default'].PropTypes.bool,
	            error: _react2['default'].PropTypes.bool,
	            floating: _react2['default'].PropTypes.bool,
	            fluid: _react2['default'].PropTypes.bool,
	            inline: _react2['default'].PropTypes.bool,
	            inverted: _react2['default'].PropTypes.bool,
	            labeled: _react2['default'].PropTypes.bool,
	            multiple: _react2['default'].PropTypes.bool,
	            pointing: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.bool, _react2['default'].PropTypes.string]),
	            scrolling: _react2['default'].PropTypes.bool,
	            search: _react2['default'].PropTypes.bool,
	            selection: _react2['default'].PropTypes.bool,
	            visible: _react2['default'].PropTypes.bool
	        },
	        enumerable: true
	    }, {
	        key: 'childContextTypes',
	        value: {
	            isDropdownChild: _react2['default'].PropTypes.bool
	        },
	        enumerable: true
	    }, {
	        key: 'defaultProps',
	        value: {
	            component: 'div',
	            defaultClasses: true
	        },
	        enumerable: true
	    }]);
	
	    function Dropdown(props) {
	        _classCallCheck(this, _Dropdown);
	
	        _get(Object.getPrototypeOf(_Dropdown.prototype), 'constructor', this).call(this, props);
	    }
	
	    _createClass(Dropdown, [{
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
	            var active = _props.active;
	            var component = _props.component;
	            var defaultClasses = _props.defaultClasses;
	            var disabled = _props.disabled;
	            var inverted = _props.inverted;
	            var multiple = _props.multiple;
	
	            var other = _objectWithoutProperties(_props, ['active', 'component', 'defaultClasses', 'disabled', 'inverted', 'multiple']);
	
	            /* eslint-enable no-use-before-define */
	            other.className = (0, _classnames2['default'])(this.props.className, this.getClasses());
	
	            if (this.props.component == Dropdown) {
	                component = 'div';
	            } else {
	                component = this.props.component;
	            }
	
	            return _react2['default'].createElement(component, other, [this.props.children]);
	        }
	    }, {
	        key: 'getClasses',
	        value: function getClasses() {
	            var classes = {
	                // default
	                ui: this.props.defaultClasses,
	
	                // positioning
	
	                // types
	                inline: this.props.inline,
	                compact: this.props.compact,
	                scrolling: this.props.scrolling,
	                selection: this.props.selection,
	                floating: this.props.floating,
	                fluid: this.props.fluid,
	                labeled: this.props.labeled,
	                search: this.props.search,
	                multiple: this.props.multiple,
	                pointing: this.props.pointing,
	
	                // state
	                active: this.props.active,
	                visible: this.props.visible,
	                error: this.props.error,
	                disabled: this.props.disabled,
	
	                // component
	                dropdown: this.props.defaultClasses
	
	                // variations
	            };
	            return (0, _utilities.validateClassProps)(classes, this.props, validProps);
	        }
	    }]);
	
	    var _Dropdown = Dropdown;
	    Dropdown = _wrapComponent('_$Dropdown')(Dropdown) || Dropdown;
	    Dropdown = (0, _radium2['default'])(Dropdown) || Dropdown;
	    return Dropdown;
	})(_react2['default'].Component);
	
	exports.Dropdown = Dropdown;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)(module)))

/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';
	
	var _reactTransformHmr2 = __webpack_require__(4);
	
	var _reactTransformHmr3 = _interopRequireDefault(_reactTransformHmr2);
	
	var _react = __webpack_require__(47);
	
	var _reactTransformCatchErrors2 = __webpack_require__(48);
	
	var _reactTransformCatchErrors3 = _interopRequireDefault(_reactTransformCatchErrors2);
	
	var _redboxReact = __webpack_require__(49);
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(107);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _elements = __webpack_require__(1);
	
	var _views = __webpack_require__(150);
	
	var _modules = __webpack_require__(93);
	
	var _reactMotionUiPack = __webpack_require__(111);
	
	var _reactMotionUiPack2 = _interopRequireDefault(_reactMotionUiPack);
	
	var _classnames = __webpack_require__(56);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _reactOnclickoutsideDecorator = __webpack_require__(161);
	
	var _reactOnclickoutsideDecorator2 = _interopRequireDefault(_reactOnclickoutsideDecorator);
	
	/**
	 * A dropdown component intended to behave exactly as the
	 * HTML select component.
	 */
	var _components = {
	    _$Select: {
	        displayName: 'Select'
	    }
	};
	
	var _reactComponentWrapper = (0, _reactTransformHmr3['default'])({
	    filename: 'E:/Work/semantic-react/src/components/modules/dropdown/select.jsx',
	    components: _components,
	    locals: [module],
	    imports: [_react]
	});
	
	var _reactComponentWrapper2 = (0, _reactTransformCatchErrors3['default'])({
	    filename: 'E:/Work/semantic-react/src/components/modules/dropdown/select.jsx',
	    components: _components,
	    locals: [],
	    imports: [_react, _redboxReact]
	});
	
	function _wrapComponent(uniqueId) {
	    return function (ReactClass) {
	        return _reactComponentWrapper2(_reactComponentWrapper(ReactClass, uniqueId), uniqueId);
	    };
	}
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var Select = (function (_React$Component) {
	    _inherits(Select, _React$Component);
	
	    _createClass(Select, null, [{
	        key: 'propTypes',
	        value: {
	            active: _react2['default'].PropTypes.bool,
	            children: _react2['default'].PropTypes.node,
	            className: _react2['default'].PropTypes.node,
	            defaultClasses: _react2['default'].PropTypes.bool,
	            enterAnimation: _react2['default'].PropTypes.object,
	            fluid: _react2['default'].PropTypes.bool,
	            glyphWidth: _react2['default'].PropTypes.number,
	            ignoreCase: _react2['default'].PropTypes.bool,
	            leaveAnimation: _react2['default'].PropTypes.object,
	            multiple: _react2['default'].PropTypes.bool,
	            name: _react2['default'].PropTypes.string,
	            noResults: _react2['default'].PropTypes.string,
	            placeholder: _react2['default'].PropTypes.string,
	            search: _react2['default'].PropTypes.bool
	        },
	        enumerable: true
	    }, {
	        key: 'defaultProps',
	        value: {
	            ignoreCase: true,
	            defaultClasses: true,
	            glyphWidth: 1.0714,
	            noResults: 'No results found...',
	            enterAnimation: {
	                height: 'auto'
	            },
	            leaveAnimation: {
	                height: 0
	            }
	        },
	        enumerable: true
	    }]);
	
	    function Select(props) {
	        _classCallCheck(this, _Select);
	
	        _get(Object.getPrototypeOf(_Select.prototype), 'constructor', this).call(this, props);
	
	        // we don't want this modifying state
	        this.validOptions = {};
	
	        this.state = {
	            active: false,
	            error: false,
	            selected: props.multiple ? [] : null,
	            visible: false
	        };
	    }
	
	    // Need this trick for react-docgen
	
	    _createClass(Select, [{
	        key: 'componentWillMount',
	        value: function componentWillMount() {
	            var _this = this;
	
	            // adds all child values to the validOptions array
	            _react2['default'].Children.forEach(this.props.children, function (child) {
	                _this.validOptions[child.props.children] = child.props.value;
	            });
	        }
	    }, {
	        key: 'shouldComponentUpdate',
	        value: function shouldComponentUpdate(props, state) {
	            // prevents duplicate states from rerendering. happens frequently with
	            // this many onclick handlers, and the only expected prop change that
	            // would warrant a re-render is the child length
	            if (this.state === state) {
	                // children remain the same.
	                if (props.children.length === this.props.children.length) {
	                    return false;
	                } else {
	                    return true;
	                }
	            }
	
	            return true;
	        }
	    }, {
	        key: 'onClick',
	        value: function onClick(e) {
	            // clicking the arrow/search box or dropdown area
	            e.stopPropagation();
	            e.nativeEvent.stopImmediatePropagation();
	
	            this.setFocus();
	
	            if (!this.state.active) {
	                this.setState({
	                    active: true,
	                    visible: true
	                });
	            }
	        }
	    }, {
	        key: 'onCloseOption',
	        value: function onCloseOption(name, e) {
	            // pressing the x on a multiple select
	            e.stopPropagation();
	            e.nativeEvent.stopImmediatePropagation();
	
	            var selected = this.getSelected(name);
	
	            if (this.refs.search) {
	                this.refs.search.value = '';
	            }
	
	            this.setState({
	                selected: selected
	            });
	        }
	    }, {
	        key: 'onLabelClick',
	        value: function onLabelClick(name, e) {
	            // clicking the label of a multiple select
	            e.stopPropagation();
	            e.nativeEvent.stopImmediatePropagation();
	        }
	    }, {
	        key: 'onOptionClick',
	        value: function onOptionClick(name, e) {
	            // click an option
	            e.stopPropagation();
	            e.nativeEvent.stopImmediatePropagation();
	
	            var selected = this.getSelected(name);
	
	            if (this.refs.search) {
	                this.refs.search.value = '';
	            }
	
	            // if it's multiple, don't close it just set the state and refocus the element
	            if (this.props.multiple) {
	                this.setState({
	                    selected: selected
	                });
	
	                this.setFocus();
	            } else {
	                this.setState({
	                    active: false,
	                    selected: selected
	                });
	            }
	        }
	    }, {
	        key: 'onSearchKeyDown',
	        value: function onSearchKeyDown(e) {
	            // pressing the enter key when a multiple select
	            if (e.which === 13 && this.props.multiple) {
	                var match = this.isMatch();
	
	                // target matches a valid select
	                if (match) {
	                    if (this.props.multiple) {
	                        this.refs.search.value = '';
	                    }
	
	                    this.setState({
	                        error: false,
	                        selected: this.getSelected(match)
	                    });
	                } else {
	                    // not match, error
	                    this.setState({
	                        error: true
	                    });
	                }
	
	                // pressing delete when there is an empty search box using a multiple select
	            } else if (e.which === 8 && this.refs.search.value == '' && this.props.multiple) {
	                    var selected = this.popSelected();
	
	                    if (selected) {
	                        this.setState({
	                            selected: selected
	                        });
	                    }
	                }
	        }
	    }, {
	        key: 'onSearchChange',
	        value: function onSearchChange() {
	            // anytime we modify the text box, remove the error
	            this.setState({
	                error: false
	            });
	        }
	    }, {
	        key: 'renderChildren',
	        value: function renderChildren() {
	            var _this2 = this;
	
	            var search = this.refs.search ? this.refs.search.value : null;
	            var flags = this.props.ignoreCase ? 'gi' : 'g';
	            var newChildren = [];
	
	            // we can't map children because we need to know when length is zero
	            _react2['default'].Children.forEach(this.props.children, function (child) {
	                if (child.type === _modules.Option) {
	                    var match = true;
	                    var selected = false;
	
	                    // search box handling
	                    if (search) {
	                        var regex = new RegExp(search, flags);
	
	                        if (!regex.test(child.props.children)) {
	                            match = false;
	                        }
	                    }
	
	                    // check if this child is in the selection array
	                    if (_this2.props.multiple) {
	                        // is this value in the selected array of a multiple select
	                        if (_this2.state.selected.indexOf(child.props.children) > -1) {
	                            selected = true;
	                        }
	                    }
	
	                    if (match && !selected) {
	                        newChildren.push(_react2['default'].cloneElement(child, {
	                            key: child.props.children,
	                            active: _this2.state.selected == child.props.children && !_this2.props.search,
	                            onClick: _this2.onOptionClick.bind(_this2, child.props.children)
	                        }, child.props.children));
	                    }
	                }
	            });
	
	            return newChildren;
	        }
	    }, {
	        key: 'renderLabels',
	        value: function renderLabels() {
	            var _this3 = this;
	
	            // can't animate while ReactTransitionGroup
	            if (this.props.multiple) {
	                return this.state.selected.map(function (label) {
	                    /*                return (
	                                        <Label
	                                            component="a"
	                                            key={label}
	                                            onClick={this.onLabelClick.bind(this, label)}
	                                            style={{ display: 'inline-block' }}
	                                        >
	                                            {label}
	                                            <Icon
	                                                name="close"
	                                                onClick={this.onCloseOption.bind(this, label)}/>
	                                        </Label>
	                                    );*/
	                    return _react2['default'].createElement(
	                        _reactMotionUiPack2['default'],
	                        {
	                            component: false,
	                            enter: { scale: 1, opacity: 1 },
	                            leave: { scale: 0, opacity: 0 },
	                            style: { display: 'inline-block' }
	                        },
	                        _react2['default'].createElement(
	                            _elements.Label,
	                            {
	                                component: 'a',
	                                key: label,
	                                onClick: _this3.onLabelClick.bind(_this3, label),
	                                style: { display: 'inline-block' }
	                            },
	                            label,
	                            _react2['default'].createElement(_elements.Icon, {
	                                name: 'close',
	                                onClick: _this3.onCloseOption.bind(_this3, label) })
	                        )
	                    );
	                });
	            }
	        }
	    }, {
	        key: 'renderSearch',
	        value: function renderSearch() {
	            var style = {};
	
	            // expand the width of the search box as you type. no max?
	            var width = this.refs.search ? this.refs.search.value.length * this.props.glyphWidth : null;
	
	            if (width) {
	                style.width = width + 'em';
	            }
	
	            return this.props.search ? _react2['default'].createElement('input', {
	                className: 'search',
	                onChange: this.onSearchChange.bind(this),
	                onKeyDown: this.onSearchKeyDown.bind(this),
	                ref: 'search',
	                style: style,
	                tabIndex: '0' }) : false;
	        }
	    }, {
	        key: 'renderText',
	        value: function renderText() {
	            return _react2['default'].createElement(
	                'div',
	                { className: (0, _classnames2['default'])(this.getTextClasses()) },
	                this.state.selected && !this.props.multiple ? this.state.selected : this.props.placeholder
	            );
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            /* eslint-disable no-use-before-define */
	            var _props = this.props;
	            var active = _props.active;
	            var multiple = _props.multiple;
	            var search = _props.search;
	            var ignoreCase = _props.ignoreCase;
	            var name = _props.name;
	            var placeholder = _props.placeholder;
	            var glyphWidth = _props.glyphWidth;
	            var defaultClasses = _props.defaultClasses;
	            var noResults = _props.noResults;
	
	            var other = _objectWithoutProperties(_props, ['active', 'multiple', 'search', 'ignoreCase', 'name', 'placeholder', 'glyphWidth', 'defaultClasses', 'noResults']);
	
	            /* eslint-enable no-use-before-define */
	
	            other.className = (0, _classnames2['default'])(this.props.className, this.getClasses());
	            other.onClick = this.onClick.bind(this);
	
	            var children = this.renderChildren();
	
	            if (_react2['default'].Children.count(children) == 0) {
	                children = _react2['default'].createElement(
	                    'div',
	                    {
	                        className: 'message'
	                    },
	                    this.props.noResults
	                );
	            }
	
	            return _react2['default'].createElement(
	                _modules.Dropdown,
	                _extends({}, other, {
	                    active: this.state.active,
	                    visible: this.state.visible
	                }),
	                _react2['default'].createElement('input', {
	                    name: this.props.name,
	                    type: 'hidden',
	                    value: this.formatValue() }),
	                _react2['default'].createElement(_elements.Icon, {
	                    name: 'dropdown' }),
	                this.renderLabels(),
	                this.renderSearch(),
	                this.renderText(),
	                _react2['default'].createElement(
	                    _reactMotionUiPack2['default'],
	                    {
	                        component: false,
	                        enter: this.props.enterAnimation,
	                        leave: this.props.leaveAnimation
	                    },
	                    this.state.active && _react2['default'].createElement(
	                        _views.Menu,
	                        { key: 'menu',
	                            style: { overflow: 'hidden' }
	                        },
	                        children
	                    )
	                )
	            );
	        }
	    }, {
	        key: 'handleClickOutside',
	        value: function handleClickOutside() {
	            // this should be doing the same thing as the enter key before it closes
	
	            var match = this.isMatch();
	
	            // the text box itself is a match
	            if (match) {
	                if (this.props.multiple) {
	                    this.refs.search.value = '';
	                }
	
	                this.setState({
	                    active: false,
	                    error: false,
	                    selected: this.getSelected(match)
	                });
	                // if the search value is non-empty and the state is active but there's no valid selection, it's an error
	            } else if (this.refs.search && this.refs.search.value && this.state.active && !this.state.error && this.state.selected.length == 0) {
	                    this.setState({
	                        error: true
	                    });
	                    // if the state is active and there is no error we can close it
	                } else if (this.state.active && !this.state.error) {
	                        this.setState({
	                            active: false
	                        });
	                    }
	        }
	
	        // value formating for the hidden input box
	    }, {
	        key: 'formatValue',
	        value: function formatValue() {
	            var _this4 = this;
	
	            if (this.props.multiple) {
	                var _ret = (function () {
	                    var selected = [];
	
	                    // maybe just string and slice it instead of allocating an array
	                    _this4.state.selected.forEach(function (item) {
	                        selected.push(_this4.validOptions[item]);
	                    });
	
	                    return {
	                        v: selected.join(', ')
	                    };
	                })();
	
	                if (typeof _ret === 'object') return _ret.v;
	            } else {
	                return this.validOptions[this.state.selected];
	            }
	        }
	    }, {
	        key: 'getTextClasses',
	        value: function getTextClasses() {
	            return {
	                'default': !this.state.selected || this.props.multiple,
	                filtered: this.refs.search && this.refs.search.value.length > 0,
	                text: true
	            };
	        }
	    }, {
	        key: 'getClasses',
	        value: function getClasses() {
	            return {
	                // default
	                active: this.props.active,
	                // positioning
	
	                // types
	                selection: true,
	                search: this.props.search,
	                fluid: this.props.fluid,
	
	                // state
	                error: this.state.error,
	
	                // component
	                multiple: this.props.multiple
	
	                // variations
	            };
	        }
	    }, {
	        key: 'getSelected',
	        value: function getSelected(name) {
	            var clone = name;
	
	            if (this.props.multiple) {
	                var index = this.state.selected.indexOf(name);
	                clone = this.state.selected.slice(0);
	
	                if (index > -1) {
	                    clone.splice(index, 1);
	                } else {
	                    clone.push(name);
	                }
	            }
	
	            return clone;
	        }
	    }, {
	        key: 'isMatch',
	        value: function isMatch() {
	            var match = false;
	            if (this.refs.search) {
	                var _target = this.props.ignoreCase ? this.refs.search.value.toLowerCase() : this.refs.search.value;
	
	                for (var _name in this.validOptions) {
	                    var text = this.props.ignoreCase ? _name.toLowerCase() : _name;
	
	                    if (text == _target) {
	                        match = _name;
	                        break;
	                    }
	                }
	            }
	
	            return match;
	        }
	    }, {
	        key: 'popSelected',
	        value: function popSelected() {
	            var clone = this.state.selected.splice(0);
	
	            if (clone.length == 0 || !this.props.multiple) {
	                return false;
	            } else {
	                clone.pop();
	                return clone;
	            }
	        }
	    }, {
	        key: 'setFocus',
	        value: function setFocus() {
	            if (this.props.search) {
	                _reactDom2['default'].findDOMNode(this.refs.search).focus();
	            }
	        }
	    }]);
	
	    var _Select = Select;
	    Select = _wrapComponent('_$Select')(Select) || Select;
	    return Select;
	})(_react2['default'].Component);
	
	exports.Select = Select = (0, _reactOnclickoutsideDecorator2['default'])(Select);
	exports.Select = Select;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)(module)))

/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopExportWildcard(obj, defaults) { var newObj = defaults({}, obj); delete newObj['default']; return newObj; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	var _viewsCardCard = __webpack_require__(151);
	
	_defaults(exports, _interopExportWildcard(_viewsCardCard, _defaults));
	
	var _viewsCardCards = __webpack_require__(152);
	
	_defaults(exports, _interopExportWildcard(_viewsCardCards, _defaults));
	
	var _viewsMenuMenu = __webpack_require__(153);
	
	_defaults(exports, _interopExportWildcard(_viewsMenuMenu, _defaults));
	
	var _viewsMenuMenuitem = __webpack_require__(154);
	
	_defaults(exports, _interopExportWildcard(_viewsMenuMenuitem, _defaults));
	
	var _viewsCommentComments = __webpack_require__(156);
	
	_defaults(exports, _interopExportWildcard(_viewsCommentComments, _defaults));
	
	var _viewsCommentComment = __webpack_require__(157);
	
	_defaults(exports, _interopExportWildcard(_viewsCommentComment, _defaults));
	
	var _viewsFeedFeed = __webpack_require__(158);
	
	_defaults(exports, _interopExportWildcard(_viewsFeedFeed, _defaults));
	
	var _viewsFeedEvent = __webpack_require__(159);
	
	_defaults(exports, _interopExportWildcard(_viewsFeedEvent, _defaults));
	
	var _viewsItemItem = __webpack_require__(155);
	
	_defaults(exports, _interopExportWildcard(_viewsItemItem, _defaults));
	
	var _viewsItemItems = __webpack_require__(160);
	
	_defaults(exports, _interopExportWildcard(_viewsItemItems, _defaults));

/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';
	
	var _reactTransformHmr2 = __webpack_require__(4);
	
	var _reactTransformHmr3 = _interopRequireDefault(_reactTransformHmr2);
	
	var _react = __webpack_require__(47);
	
	var _reactTransformCatchErrors2 = __webpack_require__(48);
	
	var _reactTransformCatchErrors3 = _interopRequireDefault(_reactTransformCatchErrors2);
	
	var _redboxReact = __webpack_require__(49);
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(56);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _radium = __webpack_require__(57);
	
	var _radium2 = _interopRequireDefault(_radium);
	
	var _components = {
	    _$Card: {
	        displayName: 'Card'
	    }
	};
	
	var _reactComponentWrapper = (0, _reactTransformHmr3['default'])({
	    filename: 'E:/Work/semantic-react/src/components/views/card/card.jsx',
	    components: _components,
	    locals: [module],
	    imports: [_react]
	});
	
	var _reactComponentWrapper2 = (0, _reactTransformCatchErrors3['default'])({
	    filename: 'E:/Work/semantic-react/src/components/views/card/card.jsx',
	    components: _components,
	    locals: [],
	    imports: [_react, _redboxReact]
	});
	
	function _wrapComponent(uniqueId) {
	    return function (ReactClass) {
	        return _reactComponentWrapper2(_reactComponentWrapper(ReactClass, uniqueId), uniqueId);
	    };
	}
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var Card = (function (_React$Component) {
	    _inherits(Card, _React$Component);
	
	    _createClass(Card, null, [{
	        key: 'propTypes',
	        value: {
	            centered: _react2['default'].PropTypes.bool,
	            children: _react2['default'].PropTypes.node,
	            className: _react2['default'].PropTypes.node,
	            col: _react2['default'].PropTypes.string,
	            color: _react2['default'].PropTypes.string,
	            component: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.element, _react2['default'].PropTypes.string]),
	            defaultClasses: _react2['default'].PropTypes.bool,
	            doubling: _react2['default'].PropTypes.string,
	            fluid: _react2['default'].PropTypes.bool,
	            link: _react2['default'].PropTypes.bool,
	            onClick: _react2['default'].PropTypes.func
	        },
	        enumerable: true
	    }, {
	        key: 'contextTypes',
	        value: {
	            isCardChild: _react2['default'].PropTypes.bool
	        },
	        enumerable: true
	    }, {
	        key: 'childContextTypes',
	        value: {
	            isCardChild: _react2['default'].PropTypes.bool
	        },
	        enumerable: true
	    }, {
	        key: 'defaultProps',
	        value: {
	            component: 'div',
	            defaultClasses: true
	        },
	        enumerable: true
	    }]);
	
	    function Card(props) {
	        _classCallCheck(this, _Card);
	
	        _get(Object.getPrototypeOf(_Card.prototype), 'constructor', this).call(this, props);
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
	
	            other.className = (0, _classnames2['default'])(this.props.className, this.getClasses());
	
	            return _react2['default'].createElement(this.props.component, other, this.props.children);
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
	
	    var _Card = Card;
	    Card = _wrapComponent('_$Card')(Card) || Card;
	    Card = (0, _radium2['default'])(Card) || Card;
	    return Card;
	})(_react2['default'].Component);
	
	exports.Card = Card;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)(module)))

/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';
	
	var _reactTransformHmr2 = __webpack_require__(4);
	
	var _reactTransformHmr3 = _interopRequireDefault(_reactTransformHmr2);
	
	var _react = __webpack_require__(47);
	
	var _reactTransformCatchErrors2 = __webpack_require__(48);
	
	var _reactTransformCatchErrors3 = _interopRequireDefault(_reactTransformCatchErrors2);
	
	var _redboxReact = __webpack_require__(49);
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(56);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _radium = __webpack_require__(57);
	
	var _radium2 = _interopRequireDefault(_radium);
	
	var _components = {
	    _$Cards: {
	        displayName: 'Cards'
	    }
	};
	
	var _reactComponentWrapper = (0, _reactTransformHmr3['default'])({
	    filename: 'E:/Work/semantic-react/src/components/views/card/cards.jsx',
	    components: _components,
	    locals: [module],
	    imports: [_react]
	});
	
	var _reactComponentWrapper2 = (0, _reactTransformCatchErrors3['default'])({
	    filename: 'E:/Work/semantic-react/src/components/views/card/cards.jsx',
	    components: _components,
	    locals: [],
	    imports: [_react, _redboxReact]
	});
	
	function _wrapComponent(uniqueId) {
	    return function (ReactClass) {
	        return _reactComponentWrapper2(_reactComponentWrapper(ReactClass, uniqueId), uniqueId);
	    };
	}
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var Cards = (function (_Component) {
	    _inherits(Cards, _Component);
	
	    _createClass(Cards, null, [{
	        key: 'propTypes',
	        value: {
	            children: _react2['default'].PropTypes.node,
	            className: _react2['default'].PropTypes.node,
	            defaultClasses: _react2['default'].PropTypes.bool,
	            link: _react2['default'].PropTypes.bool,
	            onClick: _react2['default'].PropTypes.func
	        },
	        enumerable: true
	    }, {
	        key: 'childContextTypes',
	        value: {
	            isCardsChild: _react2['default'].PropTypes.bool
	        },
	        enumerable: true
	    }, {
	        key: 'defaultProps',
	        value: {
	            defaultClasses: true
	        },
	        enumerable: true
	    }]);
	
	    function Cards(props) {
	        _classCallCheck(this, _Cards);
	
	        _get(Object.getPrototypeOf(_Cards.prototype), 'constructor', this).call(this, props);
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
	
	            return _react2['default'].createElement(
	                'div',
	                { className: (0, _classnames2['default'])(this.props.className, classes) },
	                this.props.children
	            );
	        }
	    }]);
	
	    var _Cards = Cards;
	    Cards = _wrapComponent('_$Cards')(Cards) || Cards;
	    Cards = (0, _radium2['default'])(Cards) || Cards;
	    return Cards;
	})(_react.Component);

	exports.Cards = Cards;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)(module)))

/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';
	
	var _reactTransformHmr2 = __webpack_require__(4);
	
	var _reactTransformHmr3 = _interopRequireDefault(_reactTransformHmr2);
	
	var _react = __webpack_require__(47);
	
	var _reactTransformCatchErrors2 = __webpack_require__(48);
	
	var _reactTransformCatchErrors3 = _interopRequireDefault(_reactTransformCatchErrors2);
	
	var _redboxReact = __webpack_require__(49);
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react2 = _interopRequireDefault(_react);
	
	var _utilities = __webpack_require__(55);
	
	var _classnames = __webpack_require__(56);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _radium = __webpack_require__(57);
	
	var _radium2 = _interopRequireDefault(_radium);
	
	var _defaultProps = __webpack_require__(146);
	
	var _components = {
	    _$Menu: {
	        displayName: 'Menu'
	    }
	};
	
	var _reactComponentWrapper = (0, _reactTransformHmr3['default'])({
	    filename: 'E:/Work/semantic-react/src/components/views/menu/menu.jsx',
	    components: _components,
	    locals: [module],
	    imports: [_react]
	});
	
	var _reactComponentWrapper2 = (0, _reactTransformCatchErrors3['default'])({
	    filename: 'E:/Work/semantic-react/src/components/views/menu/menu.jsx',
	    components: _components,
	    locals: [],
	    imports: [_react, _redboxReact]
	});
	
	function _wrapComponent(uniqueId) {
	    return function (ReactClass) {
	        return _reactComponentWrapper2(_reactComponentWrapper(ReactClass, uniqueId), uniqueId);
	    };
	}
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var validProps = {
	    attached: ['top', 'bottom'],
	    fitted: ['horizontally', 'vertically']
	};
	
	/**
	 * Menu. Could be simple or controlled. Controlled menu will be activated by providing value property and will manage
	 * current active item and fire onChange callback when value was changed
	 */
	
	var Menu = (function (_React$Component) {
	    _inherits(Menu, _React$Component);
	
	    _createClass(Menu, null, [{
	        key: 'propTypes',
	        value: _extends({}, _defaultProps.defaultPropTypes, {
	            /**
	             * A menu may be attached to other content segments
	             */
	            attached: _react2['default'].PropTypes.oneOf(['top', 'bottom']),
	            /**
	             * A menu item or menu can have no borders
	             */
	            borderless: _react2['default'].PropTypes.bool,
	            /**
	             * Use equal width for menu items
	             */
	            even: _react2['default'].PropTypes.bool,
	            /**
	             * A menu item or menu can remove element padding, vertically or horizontally
	             */
	            fitted: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.bool, _react2['default'].PropTypes.oneOf(['horizontally', 'vertically'])]),
	            /**
	             * A menu can be fixed to a side of its context
	             */
	            fixed: _react2['default'].PropTypes.bool,
	            /**
	             * A vertical menu may take the size of its container. (A horizontal menu does this by default) 
	             */
	            fluid: _react2['default'].PropTypes.bool,
	            /**
	             * A menu may have its colors inverted to show greater contrast
	             */
	            inverted: _react2['default'].PropTypes.bool,
	            /**
	             * Menu active value
	             */
	            menuValue: _react2['default'].PropTypes.any,
	            /**
	             * Callback for active item change. It will not fire if clicking at already active item
	             */
	            onMenuChange: _react2['default'].PropTypes.func,
	            /**
	             * Callback for menu item click (regardless active or not active)
	             */
	            onMenuItemClick: _react2['default'].PropTypes.func,
	            /**
	             * A pagination menu is specially formatted to present links to pages of content 
	             */
	            pagination: _react2['default'].PropTypes.bool,
	            /**
	             * A menu can point to show its relationship to nearby content
	             */
	            pointing: _react2['default'].PropTypes.bool,
	            /**
	             * A menu can be formatted to float right
	             */
	            right: _react2['default'].PropTypes.bool,
	            /**
	             * A menu can adjust its appearance to de-emphasize its contents
	             */
	            secondary: _react2['default'].PropTypes.bool,
	            /**
	             * A menu can be formatted to show tabs of information
	             */
	            tabular: _react2['default'].PropTypes.bool,
	            /**
	             * A menu can be formatted for text content
	             */
	            text: _react2['default'].PropTypes.bool,
	            /**
	             * A vertical menu displays elements vertically..
	             */
	            vertical: _react2['default'].PropTypes.bool
	        }),
	        enumerable: true
	    }, {
	        key: 'contextTypes',
	        value: {
	            isMenuChild: _react2['default'].PropTypes.bool,
	            isDropdownChild: _react2['default'].PropTypes.bool
	        },
	        enumerable: true
	    }, {
	        key: 'childContextTypes',
	        value: {
	            isMenuChild: _react2['default'].PropTypes.bool
	        },
	        enumerable: true
	    }, {
	        key: 'defaultProps',
	        value: _extends({}, _defaultProps.defaultPropValues, {
	            onMenuItemClick: function onMenuItemClick() {},
	            onMenuChange: function onMenuChange() {}
	        }),
	        enumerable: true
	    }]);
	
	    function Menu(props) {
	        _classCallCheck(this, _Menu);
	
	        _get(Object.getPrototypeOf(_Menu.prototype), 'constructor', this).call(this, props);
	        this.state = {
	            activeItem: props.menuValue
	        };
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
	            if (this.state.activeItem !== value) {
	                this.setState({
	                    activeItem: value
	                });
	                this.props.onMenuChange(value);
	            }
	        }
	    }, {
	        key: 'renderChildren',
	        value: function renderChildren() {
	            var _this = this;
	
	            // If this is not controlled menu do not do anything with childs
	            if (typeof this.props.menuValue === 'undefined') {
	                return this.props.children;
	            }
	
	            // should deep traverse?
	            var newChildren = _react2['default'].Children.map(this.props.children, function (child) {
	                // Process if a child has menuValue property
	                if (typeof child.props.menuValue !== 'undefined') {
	                    return _react2['default'].cloneElement(child, {
	                        active: _this.state.activeItem === child.props.menuValue,
	                        key: child.props.menuValue,
	                        onClick: _this.onMenuItemClick.bind(_this, child.props.menuValue)
	                    });
	                } else {
	                    // Menu could contain non items, for example divider, pass it untouched (only add key)
	                    return _react2['default'].cloneElement(child, {
	                        key: typeof child.props.key !== 'undefined' ? child.props.key : child.props.children
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
	
	            other.className = (0, _classnames2['default'])(this.props.className, this.getClasses());
	
	            if (this.props.component == Menu) {
	                component = 'div';
	            } else {
	                component = this.props.component;
	            }
	
	            var children = this.renderChildren();
	
	            return _react2['default'].createElement(component, other, children);
	        }
	    }, {
	        key: 'getClasses',
	        value: function getClasses() {
	            var childCount = _react2['default'].Children.count(this.props.children);
	
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
	
	    var _Menu = Menu;
	    Menu = _wrapComponent('_$Menu')(Menu) || Menu;
	    Menu = (0, _radium2['default'])(Menu) || Menu;
	    return Menu;
	})(_react2['default'].Component);
	
	exports.Menu = Menu;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)(module)))

/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var _react = __webpack_require__(47);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(56);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _itemItem = __webpack_require__(155);
	
	var _radium = __webpack_require__(57);
	
	var _radium2 = _interopRequireDefault(_radium);
	
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
	    other.className = (0, _classnames2['default'])(other.className, classes);
	
	    return _react2['default'].createElement(_itemItem.Item, _extends({}, other, {
	        'data-value': menuValue,
	        link: true }));
	};
	
	MenuItem.propTypes = _extends({}, _itemItem.Item.propTypes, {
	    /**
	     * Is item active
	     */
	    active: _react2['default'].PropTypes.bool,
	    /**
	     * Item color
	     */
	    color: _react2['default'].PropTypes.string,
	    /**
	     * Item value (used in controlled menu)
	     */
	    menuValue: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.number, _react2['default'].PropTypes.string])
	});
	
	MenuItem.defaultProps = _extends({}, _itemItem.Item.defaultProps);
	
	exports.MenuItem = MenuItem = (0, _radium2['default'])(MenuItem);
	
	exports.MenuItem = MenuItem;

/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';
	
	var _reactTransformHmr2 = __webpack_require__(4);
	
	var _reactTransformHmr3 = _interopRequireDefault(_reactTransformHmr2);
	
	var _react = __webpack_require__(47);
	
	var _reactTransformCatchErrors2 = __webpack_require__(48);
	
	var _reactTransformCatchErrors3 = _interopRequireDefault(_reactTransformCatchErrors2);
	
	var _redboxReact = __webpack_require__(49);
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(56);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _radium = __webpack_require__(57);
	
	var _radium2 = _interopRequireDefault(_radium);
	
	var _defaultProps = __webpack_require__(146);
	
	/**
	 * Item is collection of elements. It could be menu/dropdown item or part ofr <Items /> collection
	 */
	var _components = {
	    _$Item: {
	        displayName: 'Item'
	    }
	};
	
	var _reactComponentWrapper = (0, _reactTransformHmr3['default'])({
	    filename: 'E:/Work/semantic-react/src/components/views/item/item.jsx',
	    components: _components,
	    locals: [module],
	    imports: [_react]
	});
	
	var _reactComponentWrapper2 = (0, _reactTransformCatchErrors3['default'])({
	    filename: 'E:/Work/semantic-react/src/components/views/item/item.jsx',
	    components: _components,
	    locals: [],
	    imports: [_react, _redboxReact]
	});
	
	function _wrapComponent(uniqueId) {
	    return function (ReactClass) {
	        return _reactComponentWrapper2(_reactComponentWrapper(ReactClass, uniqueId), uniqueId);
	    };
	}
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var Item = (function (_React$Component) {
	    _inherits(Item, _React$Component);
	
	    function Item() {
	        _classCallCheck(this, _Item);
	
	        _get(Object.getPrototypeOf(_Item.prototype), 'constructor', this).apply(this, arguments);
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
	
	            other.className = (0, _classnames2['default'])(this.props.className, this.getClasses());
	
	            return _react2['default'].createElement(component, other, this.props.children);
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
	    }], [{
	        key: 'propTypes',
	        value: _extends({}, _defaultProps.defaultPropTypes, {
	            /**
	             * Make item clickable
	             */
	            link: _react2['default'].PropTypes.bool,
	            /**
	             * Item click handler
	             */
	            onClick: _react2['default'].PropTypes.func
	        }),
	        enumerable: true
	    }, {
	        key: 'defaultProps',
	        value: _extends({}, _defaultProps.defaultPropValues),
	        enumerable: true
	    }]);
	
	    var _Item = Item;
	    Item = _wrapComponent('_$Item')(Item) || Item;
	    Item = (0, _radium2['default'])(Item) || Item;
	    return Item;
	})(_react2['default'].Component);
	
	exports.Item = Item;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)(module)))

/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var _react = __webpack_require__(47);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _radium = __webpack_require__(57);
	
	var _radium2 = _interopRequireDefault(_radium);
	
	var _classnames = __webpack_require__(56);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
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
	
	    other.className = (0, _classnames2['default'])(className, getClasses(props));
	
	    return _react2['default'].createElement(component, other, children);
	};
	
	comments.propTypes = {
	    children: _react2['default'].PropTypes.node,
	    className: _react2['default'].PropTypes.any,
	    collapsed: _react2['default'].PropTypes.bool,
	    component: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.element, _react2['default'].PropTypes.string]),
	    defaultClasses: _react2['default'].PropTypes.bool,
	    minimal: _react2['default'].PropTypes.bool,
	    threaded: _react2['default'].PropTypes.bool
	};
	
	comments.defaultProps = {
	    component: 'div',
	    defaultClasses: true
	};
	
	exports.Comments = (0, _radium2['default'])(comments);

/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var _react = __webpack_require__(47);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _elements = __webpack_require__(1);
	
	var _classnames = __webpack_require__(56);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _radium = __webpack_require__(57);
	
	var _radium2 = _interopRequireDefault(_radium);
	
	function renderChildren(children) {
	    var commentChildren = [];
	    var contentChildren = [];
	
	    _react2['default'].Children.forEach(children, function (child) {
	        // remove the Image default classes
	        if (child.type === _elements.Image) {
	            commentChildren.push(_react2['default'].cloneElement(child, {
	                component: 'a',
	                avatar: true,
	                key: 'commentAvatar',
	                defaultClasses: false
	            }, child.children));
	        } else {
	            return contentChildren.push(child);
	        }
	    });
	
	    commentChildren.push(_react2['default'].createElement(
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
	
	    other.className = (0, _classnames2['default'])(className, { comment: true });
	
	    return _react2['default'].createElement(component, other, renderChildren(children));
	};
	
	Comment.propTypes = {
	    children: _react2['default'].PropTypes.node,
	    className: _react2['default'].PropTypes.any,
	    component: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.element, _react2['default'].PropTypes.string])
	};
	
	Comment.defaultProps = {
	    component: 'div'
	};
	
	exports.Comment = (0, _radium2['default'])(Comment);

/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var _react = __webpack_require__(47);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(56);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _radium = __webpack_require__(57);
	
	var _radium2 = _interopRequireDefault(_radium);
	
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
	
	    other.className = (0, _classnames2['default'])(className, getClasses(props));
	
	    return _react2['default'].createElement(component, other, children);
	};
	
	Feed.propTypes = {
	    children: _react2['default'].PropTypes.node,
	    className: _react2['default'].PropTypes.any,
	    component: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.element, _react2['default'].PropTypes.string]),
	    defaultClasses: _react2['default'].PropTypes.bool,
	    size: _react2['default'].PropTypes.string
	};
	
	Feed.defaultProps = {
	    component: 'div',
	    defaultClasses: true
	};
	
	exports.Feed = (0, _radium2['default'])(Feed);

/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var _react = __webpack_require__(47);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _elements = __webpack_require__(1);
	
	var _classnames = __webpack_require__(56);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _radium = __webpack_require__(57);
	
	var _radium2 = _interopRequireDefault(_radium);
	
	function renderContent(children) {
	    var contentChildren = [];
	
	    _react2['default'].Children.forEach(children, function (child, index) {
	        if (child.type === _elements.Images) {
	            contentChildren.push(_react2['default'].cloneElement(child, {
	                defaultClasses: false,
	                className: 'extra images'
	            }));
	        } else if (child.type !== _elements.Image && child.type !== _elements.Icon) {
	            contentChildren.push(child);
	        } else if ((child.type === _elements.Image || child.type === _elements.Icon) && index > 0) {
	            contentChildren.push(child);
	        }
	    });
	
	    return _react2['default'].createElement(
	        'div',
	        { className: 'content' },
	        contentChildren
	    );
	}
	
	function renderLabel(children) {
	    var labelChildren = [];
	
	    _react2['default'].Children.forEach(children, function (child, index) {
	        // remove the Image default classes
	        if ((child.type === _elements.Image || child.type === _elements.Icon) && index === 0) {
	            if (child.type === _elements.Image) {
	                labelChildren.push(_react2['default'].cloneElement(child, {
	                    key: 'eventLabel',
	                    image: false,
	                    defaultClasses: false
	                }, child.children));
	            } else {
	                labelChildren.push(child);
	            }
	        }
	    });
	
	    return _react2['default'].createElement(
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
	
	    other.className = (0, _classnames2['default'])(className, { event: true });
	
	    return _react2['default'].createElement(component, other, [renderLabel(children), renderContent(children)]);
	};
	
	Event.propTypes = {
	    children: _react2['default'].PropTypes.node,
	    className: _react2['default'].PropTypes.any,
	    component: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.element, _react2['default'].PropTypes.string])
	};
	
	Event.defaultProps = {
	    component: 'div'
	};
	
	exports.Event = (0, _radium2['default'])(Event);

/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';
	
	var _reactTransformHmr2 = __webpack_require__(4);
	
	var _reactTransformHmr3 = _interopRequireDefault(_reactTransformHmr2);
	
	var _react = __webpack_require__(47);
	
	var _reactTransformCatchErrors2 = __webpack_require__(48);
	
	var _reactTransformCatchErrors3 = _interopRequireDefault(_reactTransformCatchErrors2);
	
	var _redboxReact = __webpack_require__(49);
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(56);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _radium = __webpack_require__(57);
	
	var _radium2 = _interopRequireDefault(_radium);
	
	var _components = {
	    _$Items: {
	        displayName: 'Items'
	    }
	};
	
	var _reactComponentWrapper = (0, _reactTransformHmr3['default'])({
	    filename: 'E:/Work/semantic-react/src/components/views/item/items.jsx',
	    components: _components,
	    locals: [module],
	    imports: [_react]
	});
	
	var _reactComponentWrapper2 = (0, _reactTransformCatchErrors3['default'])({
	    filename: 'E:/Work/semantic-react/src/components/views/item/items.jsx',
	    components: _components,
	    locals: [],
	    imports: [_react, _redboxReact]
	});
	
	function _wrapComponent(uniqueId) {
	    return function (ReactClass) {
	        return _reactComponentWrapper2(_reactComponentWrapper(ReactClass, uniqueId), uniqueId);
	    };
	}
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var Items = (function (_React$Component) {
	    _inherits(Items, _React$Component);
	
	    function Items() {
	        _classCallCheck(this, _Items);
	
	        _get(Object.getPrototypeOf(_Items.prototype), 'constructor', this).apply(this, arguments);
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
	
	            other.className = (0, _classnames2['default'])(this.props.className, this.getClasses());
	
	            return _react2['default'].createElement(this.props.component, other, this.props.children);
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
	    }], [{
	        key: 'propTypes',
	        value: {
	            children: _react2['default'].PropTypes.node,
	            className: _react2['default'].PropTypes.node,
	            component: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.element, _react2['default'].PropTypes.string]),
	            defaultClasses: _react2['default'].PropTypes.bool,
	            divided: _react2['default'].PropTypes.bool,
	            link: _react2['default'].PropTypes.bool,
	            relaxed: _react2['default'].PropTypes.relaxed
	        },
	        enumerable: true
	    }, {
	        key: 'defaultProps',
	        value: {
	            component: 'div',
	            defaultClasses: true
	        },
	        enumerable: true
	    }]);
	
	    var _Items = Items;
	    Items = _wrapComponent('_$Items')(Items) || Items;
	    Items = (0, _radium2['default'])(Items) || Items;
	    return Items;
	})(_react2['default'].Component);
	
	exports.Items = Items;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)(module)))

/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(47);
	var objectAssign = __webpack_require__(162);
	var OnClickOutsideMixin = __webpack_require__(163);
	
	
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
/* 162 */
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
/* 163 */
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
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(107)], __WEBPACK_AMD_DEFINE_RESULT__ = function(reactDom) {
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
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';
	
	var _reactTransformHmr2 = __webpack_require__(4);
	
	var _reactTransformHmr3 = _interopRequireDefault(_reactTransformHmr2);
	
	var _react = __webpack_require__(47);
	
	var _reactTransformCatchErrors2 = __webpack_require__(48);
	
	var _reactTransformCatchErrors3 = _interopRequireDefault(_reactTransformCatchErrors2);
	
	var _redboxReact = __webpack_require__(49);
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(56);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _viewsMenuMenuitem = __webpack_require__(154);
	
	var _radium = __webpack_require__(57);
	
	var _radium2 = _interopRequireDefault(_radium);
	
	/**
	 * Select dropdown option
	 */
	var _components = {
	    _$Option: {
	        displayName: 'Option'
	    }
	};
	
	var _reactComponentWrapper = (0, _reactTransformHmr3['default'])({
	    filename: 'E:/Work/semantic-react/src/components/modules/dropdown/option.jsx',
	    components: _components,
	    locals: [module],
	    imports: [_react]
	});
	
	var _reactComponentWrapper2 = (0, _reactTransformCatchErrors3['default'])({
	    filename: 'E:/Work/semantic-react/src/components/modules/dropdown/option.jsx',
	    components: _components,
	    locals: [],
	    imports: [_react, _redboxReact]
	});
	
	function _wrapComponent(uniqueId) {
	    return function (ReactClass) {
	        return _reactComponentWrapper2(_reactComponentWrapper(ReactClass, uniqueId), uniqueId);
	    };
	}
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var Option = (function (_React$Component) {
	    _inherits(Option, _React$Component);
	
	    function Option() {
	        _classCallCheck(this, _Option);
	
	        _get(Object.getPrototypeOf(_Option.prototype), 'constructor', this).apply(this, arguments);
	    }
	
	    _createClass(Option, [{
	        key: 'render',
	        value: function render() {
	            /* eslint-disable */
	            if (this.props.active) {
	                this.props.className = (0, _classnames2['default'])(this.props.className, { selected: true });
	            }
	            /* eslint-enable */
	            return _react2['default'].createElement(
	                _viewsMenuMenuitem.MenuItem,
	                this.props,
	                this.props.children
	            );
	        }
	    }], [{
	        key: 'propTypes',
	        value: _extends({}, _viewsMenuMenuitem.MenuItem.propTypes, {
	            children: _react2['default'].PropTypes.node,
	            value: _react2['default'].PropTypes.string.isRequired
	        }),
	        enumerable: true
	    }]);
	
	    var _Option = Option;
	    Option = _wrapComponent('_$Option')(Option) || Option;
	    Option = (0, _radium2['default'])(Option) || Option;
	    return Option;
	})(_react2['default'].Component);
	
	exports.Option = Option;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)(module)))

/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';
	
	var _reactTransformHmr2 = __webpack_require__(4);
	
	var _reactTransformHmr3 = _interopRequireDefault(_reactTransformHmr2);
	
	var _react = __webpack_require__(47);
	
	var _reactTransformCatchErrors2 = __webpack_require__(48);
	
	var _reactTransformCatchErrors3 = _interopRequireDefault(_reactTransformCatchErrors2);
	
	var _redboxReact = __webpack_require__(49);
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react2 = _interopRequireDefault(_react);
	
	var _modules = __webpack_require__(93);
	
	var _reactMotionUiPack = __webpack_require__(111);
	
	var _reactMotionUiPack2 = _interopRequireDefault(_reactMotionUiPack);
	
	var _elements = __webpack_require__(1);
	
	var _views = __webpack_require__(150);
	
	var _reactOnclickoutsideDecorator = __webpack_require__(161);
	
	var _reactOnclickoutsideDecorator2 = _interopRequireDefault(_reactOnclickoutsideDecorator);
	
	/**
	 * Dropdown menu with animations
	 */
	var _components = {
	    _$DropdownMenu: {
	        displayName: 'DropdownMenu'
	    }
	};
	
	var _reactComponentWrapper = (0, _reactTransformHmr3['default'])({
	    filename: 'E:/Work/semantic-react/src/components/modules/dropdown/dropdownmenu.jsx',
	    components: _components,
	    locals: [module],
	    imports: [_react]
	});
	
	var _reactComponentWrapper2 = (0, _reactTransformCatchErrors3['default'])({
	    filename: 'E:/Work/semantic-react/src/components/modules/dropdown/dropdownmenu.jsx',
	    components: _components,
	    locals: [],
	    imports: [_react, _redboxReact]
	});
	
	function _wrapComponent(uniqueId) {
	    return function (ReactClass) {
	        return _reactComponentWrapper2(_reactComponentWrapper(ReactClass, uniqueId), uniqueId);
	    };
	}
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var DropdownMenu = (function (_React$Component) {
	    _inherits(DropdownMenu, _React$Component);
	
	    _createClass(DropdownMenu, null, [{
	        key: 'propTypes',
	        value: {
	            /**
	             * Should menu be opened when first rendered
	             */
	            active: _react2['default'].PropTypes.bool,
	            /**
	             * Children nodes
	             */
	            children: _react2['default'].PropTypes.node,
	            /**
	             * Pass additional component to use in dropdown, for example Button.
	             * If you specify it, then default icon and label won't be rendered
	             */
	            dropdownComponent: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.element, _react2['default'].PropTypes.string, _react2['default'].PropTypes.func]),
	            /**
	             * Enter animations transforms
	             */
	            enterAnimation: _react2['default'].PropTypes.object,
	            /**
	             * Menu icon
	             */
	            icon: _react2['default'].PropTypes.string,
	            /**
	             * Menu label
	             */
	            label: _react2['default'].PropTypes.string,
	            /**
	             * Leave animation
	             */
	            leaveAnimation: _react2['default'].PropTypes.object,
	            /**
	             * Specify component to be used as Menu.
	             * Usually is should be menu but with custom options applied (for example inverted)
	             */
	            menuComponent: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.element, _react2['default'].PropTypes.string, _react2['default'].PropTypes.func])
	        },
	        enumerable: true
	    }, {
	        key: 'defaultProps',
	        value: {
	            active: false,
	            icon: 'dropdown',
	            dropdownComponent: 'div',
	            enterAnimation: {
	                height: 'auto'
	            },
	            leaveAnimation: {
	                height: 0
	            }
	        },
	        enumerable: true
	    }]);
	
	    function DropdownMenu(props) {
	        _classCallCheck(this, _DropdownMenu);
	
	        _get(Object.getPrototypeOf(_DropdownMenu.prototype), 'constructor', this).call(this, props);
	
	        this.state = {
	            active: props.active,
	            visible: false
	        };
	    }
	
	    /**
	     * Menu animation completed
	     */
	
	    _createClass(DropdownMenu, [{
	        key: 'onAnimationComplete',
	        value: function onAnimationComplete() {
	            // visible state differs from active in that it
	            // cna only change after completion of the animation
	            if (!this.state.active) {
	                this.setState({
	                    visible: false
	                });
	            }
	        }
	
	        /**
	         * Dropdown click
	         * @param e
	         */
	    }, {
	        key: 'onClick',
	        value: function onClick(e) {
	            // clicking the arrow/search box or dropdown area
	            e.stopPropagation();
	            e.nativeEvent.stopImmediatePropagation();
	
	            if (!this.state.active) {
	                this.setState({
	                    active: true,
	                    visible: true
	                });
	            }
	        }
	
	        /**
	         * Menu item click
	         * @param e
	         */
	    }, {
	        key: 'onMenuItemClick',
	        value: function onMenuItemClick(e) {
	            // click an option
	            e.stopPropagation();
	            e.nativeEvent.stopImmediatePropagation();
	
	            this.setState({
	                active: false
	            });
	        }
	
	        /**
	         * Renders dropdown icon
	         * @returns {*}
	         */
	    }, {
	        key: 'renderMenuIcon',
	        value: function renderMenuIcon() {
	            if (this.props.dropdownComponent !== 'div') {
	                return null;
	            } else {
	                return _react2['default'].createElement(_elements.Icon, { name: this.props.icon });
	            }
	        }
	
	        /**
	         * Renders dropdown text
	         * @returns {*}
	         */
	    }, {
	        key: 'renderMenuText',
	        value: function renderMenuText() {
	            if (this.props.dropdownComponent !== 'div' || !this.props.label) {
	                return null;
	            } else {
	                return _react2['default'].createElement(
	                    _elements.Text,
	                    null,
	                    this.props.label
	                );
	            }
	        }
	
	        /**
	         * Renders children items
	         * @returns {Array}
	         */
	    }, {
	        key: 'renderChildren',
	        value: function renderChildren() {
	            var _this = this;
	
	            var newChildren = [];
	
	            _react2['default'].Children.forEach(this.props.children, function (child) {
	                newChildren.push(_react2['default'].cloneElement(child, {
	                    key: child.props.children,
	                    onClick: _this.onMenuItemClick.bind(_this)
	                }, child.props.children));
	            });
	
	            return newChildren;
	        }
	
	        /**
	         * Render
	         * @returns {XML}
	         */
	    }, {
	        key: 'render',
	        value: function render() {
	            /* eslint-disable no-use-before-define */
	            var _props = this.props;
	            var active = _props.active;
	            var icon = _props.icon;
	            var label = _props.label;
	            var dropdownComponent = _props.dropdownComponent;
	            var menuComponent = _props.menuComponent;
	
	            var other = _objectWithoutProperties(_props, ['active', 'icon', 'label', 'dropdownComponent', 'menuComponent']);
	
	            /* eslint-enable no-use-before-define */
	
	            // other.className = classNames(this.props.className, this.getClasses());
	            other.onClick = this.onClick.bind(this);
	
	            var MenuComponent = menuComponent || _views.Menu;
	
	            var children = this.renderChildren();
	
	            return _react2['default'].createElement(
	                _modules.Dropdown,
	                _extends({}, other, {
	                    active: this.state.active,
	                    component: dropdownComponent,
	                    visible: this.state.visible
	                }),
	                this.renderMenuText(),
	                this.renderMenuIcon(),
	                _react2['default'].createElement(
	                    _reactMotionUiPack2['default'],
	                    {
	                        component: false,
	                        enter: this.props.enterAnimation,
	                        leave: this.props.leaveAnimation
	                    },
	                    this.state.active && _react2['default'].createElement(
	                        MenuComponent,
	                        { key: 'menu',
	                            style: { overflow: 'hidden' }
	                        },
	                        children
	                    )
	                )
	            );
	        }
	
	        /**
	         * Outside click handler
	         */
	    }, {
	        key: 'handleClickOutside',
	        value: function handleClickOutside() {
	            if (this.state.active) {
	                this.setState({
	                    active: false
	                });
	            }
	        }
	    }]);
	
	    var _DropdownMenu = DropdownMenu;
	    DropdownMenu = _wrapComponent('_$DropdownMenu')(DropdownMenu) || DropdownMenu;
	    DropdownMenu = (0, _reactOnclickoutsideDecorator2['default'])(DropdownMenu) || DropdownMenu;
	    return DropdownMenu;
	})(_react2['default'].Component);
	
	exports.DropdownMenu = DropdownMenu;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)(module)))

/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';
	
	var _reactTransformHmr2 = __webpack_require__(4);
	
	var _reactTransformHmr3 = _interopRequireDefault(_reactTransformHmr2);
	
	var _react = __webpack_require__(47);
	
	var _reactTransformCatchErrors2 = __webpack_require__(48);
	
	var _reactTransformCatchErrors3 = _interopRequireDefault(_reactTransformCatchErrors2);
	
	var _redboxReact = __webpack_require__(49);
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react2 = _interopRequireDefault(_react);
	
	var _modules = __webpack_require__(93);
	
	var _reactOnclickoutsideDecorator = __webpack_require__(161);
	
	var _reactOnclickoutsideDecorator2 = _interopRequireDefault(_reactOnclickoutsideDecorator);
	
	var _components = {
	    _$Modal: {
	        displayName: 'Modal'
	    }
	};
	
	var _reactComponentWrapper = (0, _reactTransformHmr3['default'])({
	    filename: 'E:/Work/semantic-react/src/components/modules/modal/modal.jsx',
	    components: _components,
	    locals: [module],
	    imports: [_react]
	});
	
	var _reactComponentWrapper2 = (0, _reactTransformCatchErrors3['default'])({
	    filename: 'E:/Work/semantic-react/src/components/modules/modal/modal.jsx',
	    components: _components,
	    locals: [],
	    imports: [_react, _redboxReact]
	});
	
	function _wrapComponent(uniqueId) {
	    return function (ReactClass) {
	        return _reactComponentWrapper2(_reactComponentWrapper(ReactClass, uniqueId), uniqueId);
	    };
	}
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var Modal = (function (_React$Component) {
	    _inherits(Modal, _React$Component);
	
	    _createClass(Modal, null, [{
	        key: 'propTypes',
	        value: {
	            active: _react2['default'].PropTypes.bool,
	            basic: _react2['default'].PropTypes.bool,
	            blurring: _react2['default'].PropTypes.bool,
	            children: _react2['default'].PropTypes.node,
	            component: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.func, _react2['default'].PropTypes.string]),
	            disabled: _react2['default'].PropTypes.bool,
	            enterAnimation: _react2['default'].PropTypes.shape({
	                duration: _react2['default'].PropTypes.number,
	                easing: _react2['default'].PropTypes.string,
	                from: _react2['default'].PropTypes.object,
	                to: _react2['default'].PropTypes.object
	            }),
	            fullscreen: _react2['default'].PropTypes.bool,
	            inverted: _react2['default'].PropTypes.bool,
	            leaveAnimation: _react2['default'].PropTypes.shape({
	                duration: _react2['default'].PropTypes.number,
	                easing: _react2['default'].PropTypes.string,
	                from: _react2['default'].PropTypes.object,
	                to: _react2['default'].PropTypes.object
	            }),
	            offset: _react2['default'].PropTypes.number,
	            onComplete: _react2['default'].PropTypes.func,
	            outsideClickClose: _react2['default'].PropTypes.bool,
	            padding: _react2['default'].PropTypes.number,
	            page: _react2['default'].PropTypes.bool,
	            size: _react2['default'].PropTypes.string
	        },
	        enumerable: true
	    }, {
	        key: 'defaultProps',
	        value: {
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
	        },
	        enumerable: true
	    }]);
	
	    function Modal(props) {
	        _classCallCheck(this, _Modal);
	
	        _get(Object.getPrototypeOf(_Modal.prototype), 'constructor', this).call(this, props);
	
	        this.state = {
	            active: false,
	            visible: false
	        };
	    }
	
	    // Need this trick for react-docgen
	
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
	
	            return _react2['default'].createElement(_modules.ModalBody, props, this.props.children);
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
	
	            return _react2['default'].createElement(_modules.Dimmer, other, this.renderModalBody());
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
	
	    var _Modal = Modal;
	    Modal = _wrapComponent('_$Modal')(Modal) || Modal;
	    return Modal;
	})(_react2['default'].Component);
	
	exports.Modal = Modal = (0, _reactOnclickoutsideDecorator2['default'])(Modal);
	exports.Modal = Modal;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)(module)))

/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';
	
	var _reactTransformHmr2 = __webpack_require__(4);
	
	var _reactTransformHmr3 = _interopRequireDefault(_reactTransformHmr2);
	
	var _react = __webpack_require__(47);
	
	var _reactTransformCatchErrors2 = __webpack_require__(48);
	
	var _reactTransformCatchErrors3 = _interopRequireDefault(_reactTransformCatchErrors2);
	
	var _redboxReact = __webpack_require__(49);
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react2 = _interopRequireDefault(_react);
	
	var _modules = __webpack_require__(93);
	
	var _classnames = __webpack_require__(56);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _components = {
	    _$ModalBody: {
	        displayName: 'ModalBody'
	    }
	};
	
	var _reactComponentWrapper = (0, _reactTransformHmr3['default'])({
	    filename: 'E:/Work/semantic-react/src/components/modules/modal/modalbody.jsx',
	    components: _components,
	    locals: [module],
	    imports: [_react]
	});
	
	var _reactComponentWrapper2 = (0, _reactTransformCatchErrors3['default'])({
	    filename: 'E:/Work/semantic-react/src/components/modules/modal/modalbody.jsx',
	    components: _components,
	    locals: [],
	    imports: [_react, _redboxReact]
	});
	
	function _wrapComponent(uniqueId) {
	    return function (ReactClass) {
	        return _reactComponentWrapper2(_reactComponentWrapper(ReactClass, uniqueId), uniqueId);
	    };
	}
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var ModalBody = (function (_React$Component) {
	    _inherits(ModalBody, _React$Component);
	
	    _createClass(ModalBody, null, [{
	        key: 'propTypes',
	        value: {
	            active: _react2['default'].PropTypes.bool,
	            basic: _react2['default'].PropTypes.bool,
	            children: _react2['default'].PropTypes.node,
	            className: _react2['default'].PropTypes.node,
	            component: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.func, _react2['default'].PropTypes.string]),
	            defaultClasses: _react2['default'].PropTypes.bool,
	            end: _react2['default'].PropTypes.shape({
	                duration: _react2['default'].PropTypes.number,
	                easing: _react2['default'].PropTypes.string,
	                from: _react2['default'].PropTypes.object,
	                to: _react2['default'].PropTypes.object
	            }),
	            fullscreen: _react2['default'].PropTypes.bool,
	            offset: _react2['default'].PropTypes.number,
	            padding: _react2['default'].PropTypes.number,
	            size: _react2['default'].PropTypes.string,
	            start: _react2['default'].PropTypes.shape({
	                duration: _react2['default'].PropTypes.number,
	                easing: _react2['default'].PropTypes.string,
	                from: _react2['default'].PropTypes.object,
	                to: _react2['default'].PropTypes.object
	            }),
	            style: _react2['default'].PropTypes.object
	        },
	        enumerable: true
	    }, {
	        key: 'defaultProps',
	        value: {
	            component: 'div',
	            defaultClasses: true,
	            offset: 0,
	            padding: 50,
	            style: {}
	        },
	        enumerable: true
	    }]);
	
	    function ModalBody(props) {
	        _classCallCheck(this, _ModalBody);
	
	        _get(Object.getPrototypeOf(_ModalBody.prototype), 'constructor', this).call(this, props);
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
	            other.className = (0, _classnames2['default'])(this.props.className, this.getClasses());
	
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
	
	            return _react2['default'].createElement(component, other, this.props.children);
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
	
	    var _ModalBody = ModalBody;
	    ModalBody = _wrapComponent('_$ModalBody')(ModalBody) || ModalBody;
	    ModalBody = (0, _modules.Animate)(ModalBody) || ModalBody;
	    return ModalBody;
	})(_react2['default'].Component);
	
	exports.ModalBody = ModalBody;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)(module)))

/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';
	
	var _reactTransformHmr2 = __webpack_require__(4);
	
	var _reactTransformHmr3 = _interopRequireDefault(_reactTransformHmr2);
	
	var _react = __webpack_require__(47);
	
	var _reactTransformCatchErrors2 = __webpack_require__(48);
	
	var _reactTransformCatchErrors3 = _interopRequireDefault(_reactTransformCatchErrors2);
	
	var _redboxReact = __webpack_require__(49);
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(107);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _reactMotionUiPack = __webpack_require__(111);
	
	var _reactMotionUiPack2 = _interopRequireDefault(_reactMotionUiPack);
	
	var _reactPortal = __webpack_require__(169);
	
	var _reactPortal2 = _interopRequireDefault(_reactPortal);
	
	var _reactEventListener = __webpack_require__(182);
	
	var _reactEventListener2 = _interopRequireDefault(_reactEventListener);
	
	var _lodashThrottle = __webpack_require__(183);
	
	var _lodashThrottle2 = _interopRequireDefault(_lodashThrottle);
	
	var _reactAddonsShallowCompare = __webpack_require__(135);
	
	var _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare);
	
	var _popupelement = __webpack_require__(185);
	
	var _utilities = __webpack_require__(55);
	
	// const shallowCompare = require('react-addons-shallow-compare');
	
	/**
	 * Popup with animations
	 */
	var _components = {
	    _$Popup: {
	        displayName: 'Popup'
	    }
	};
	
	var _reactComponentWrapper = (0, _reactTransformHmr3['default'])({
	    filename: 'E:/Work/semantic-react/src/components/modules/popup/popup.jsx',
	    components: _components,
	    locals: [module],
	    imports: [_react]
	});
	
	var _reactComponentWrapper2 = (0, _reactTransformCatchErrors3['default'])({
	    filename: 'E:/Work/semantic-react/src/components/modules/popup/popup.jsx',
	    components: _components,
	    locals: [],
	    imports: [_react, _redboxReact]
	});
	
	function _wrapComponent(uniqueId) {
	    return function (ReactClass) {
	        return _reactComponentWrapper2(_reactComponentWrapper(ReactClass, uniqueId), uniqueId);
	    };
	}
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var Popup = (function (_React$Component) {
	    _inherits(Popup, _React$Component);
	
	    _createClass(Popup, null, [{
	        key: 'propTypes',
	        value: _extends({}, _popupelement.PopupElement.propTypes, {
	            /**
	             * True to display the popup. If false will be hidden
	             */
	            active: _react2['default'].PropTypes.bool,
	            /**
	             * Auto position popup when needed
	             */
	            autoPosition: _react2['default'].PropTypes.bool,
	            /**
	             * Offset for distance of popup from element
	             */
	            distanceAway: _react2['default'].PropTypes.number,
	            /**
	             * End animation
	             */
	            endAnimation: _react2['default'].PropTypes.object,
	            /**
	             * Use this position when element fails to fit on screen in all tried positions
	             * If omitted, the last tried position will be used instead
	             */
	            lastResortPosition: _react2['default'].PropTypes.string,
	            /**
	             * Offset in pixels from calculated position
	             */
	            offset: _react2['default'].PropTypes.number,
	            /**
	             * Callback when popup wants to be closed (i.e. when offscreen or clicked outside)
	             */
	            onRequestClose: _react2['default'].PropTypes.func,
	            /**
	             * When auto-positioning popup use opposite direction or adjacent as next position
	             */
	            prefer: _react2['default'].PropTypes.oneOf(['adjacent', 'opposite']),
	            /**
	             * If true will prevent clicking on the other elements
	             */
	            preventElementClicks: _react2['default'].PropTypes.bool,
	            /**
	             * Hide popup when target element scrolls off the screen
	             */
	            requestCloseWhenOffScreen: _react2['default'].PropTypes.bool,
	            /**
	             * Start animation
	             */
	            startAnimation: _react2['default'].PropTypes.object,
	            /**
	             * Target element to apply popup
	             */
	            target: _react2['default'].PropTypes.object
	        }),
	        enumerable: true
	    }, {
	        key: 'defaultProps',
	        value: _extends({}, _popupelement.PopupElement.defaultProps, {
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
	        }),
	        enumerable: true
	    }]);
	
	    function Popup(props) {
	        _classCallCheck(this, _Popup);
	
	        _get(Object.getPrototypeOf(_Popup.prototype), 'constructor', this).call(this, props);
	
	        // Handle resize / scrolls handler
	        this.handleResize = (0, _lodashThrottle2['default'])(this.setPlacement.bind(this), 100);
	        this.handleScroll = (0, _lodashThrottle2['default'])(this.setPlacement.bind(this, true), 100);
	
	        /**
	         * Array of current tried positions
	         * @type {Array}
	         */
	        this.positionsTried = [];
	
	        this.state = {
	            active: this.props.active,
	            closing: false,
	            // Need to save position to state, since it could be changed by autoPosition
	            position: props.position, // eslint-disable-line
	            positionStyleTop: '0px',
	            positionStyleLeft: '0px'
	        };
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
	            var _this = this;
	
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
	                        _this.setState({
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
	            return (0, _reactAddonsShallowCompare2['default'])(this, nextProps, nextState);
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
	
	            var other = _objectWithoutProperties(_props, ['active', 'autoPosition', 'distanceAway', 'lastResortPosition', 'offset', 'startAnimation', 'endAnimation', 'onRequestClose', 'prefer', 'position', 'preventElementClicks', 'requestCloseWhenOffScreen', 'target']);
	
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
	                position: 'fixed !important' // need it to be fixed to avoid it with bloating code with many checks
	            };
	
	            return _react2['default'].createElement(
	                _reactPortal2['default'],
	                { isOpened: this.state.active || !this.state.active && this.state.closing,
	                    style: this.props.preventElementClicks ? portalStyle : {}
	                },
	                _react2['default'].createElement(
	                    'noscript',
	                    null,
	                    _react2['default'].createElement(_reactEventListener2['default'], { elementName: 'document',
	                        onMouseDown: this.onOutsideClick.bind(this),
	                        onTouchStart: this.onOutsideClick.bind(this) }),
	                    _react2['default'].createElement(_reactEventListener2['default'], { elementName: 'window',
	                        onResize: this.handleResize,
	                        onScroll: this.handleScroll }),
	                    _react2['default'].createElement(
	                        _reactMotionUiPack2['default'],
	                        {
	                            component: false,
	                            enter: startAnimation,
	                            leave: endAnimation
	                        },
	                        this.state.active && !this.state.closing && _react2['default'].createElement(_popupelement.PopupElement, _extends({}, other, {
	                            key: 'popup',
	                            position: this.state.position,
	                            style: positionStyle,
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
	            var targetEl = this.props.target || _reactDom2['default'].findDOMNode(this);
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
	
	    var _Popup = Popup;
	    Popup = _wrapComponent('_$Popup')(Popup) || Popup;
	    return Popup;
	})(_react2['default'].Component);
	
	exports.Popup = Popup;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)(module)))

/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(47);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(107);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _CSSPropertyOperations = __webpack_require__(170);
	
	var _CSSPropertyOperations2 = _interopRequireDefault(_CSSPropertyOperations);
	
	var _shallowCompare = __webpack_require__(136);
	
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
/* 170 */
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
	
	var CSSProperty = __webpack_require__(171);
	var ExecutionEnvironment = __webpack_require__(172);
	var ReactPerf = __webpack_require__(173);
	
	var camelizeStyleName = __webpack_require__(174);
	var dangerousStyleValue = __webpack_require__(176);
	var hyphenateStyleName = __webpack_require__(177);
	var memoizeStringOnly = __webpack_require__(179);
	var warning = __webpack_require__(180);
	
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(102)))

/***/ },
/* 171 */
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
/* 172 */
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
/* 173 */
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(102)))

/***/ },
/* 174 */
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
	
	var camelize = __webpack_require__(175);
	
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
/* 175 */
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
/* 176 */
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
	
	var CSSProperty = __webpack_require__(171);
	
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
/* 177 */
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
	
	var hyphenate = __webpack_require__(178);
	
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
/* 178 */
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
/* 179 */
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
/* 180 */
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
	
	var emptyFunction = __webpack_require__(181);
	
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(102)))

/***/ },
/* 181 */
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
/* 182 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(47);
	
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
/* 183 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * lodash 4.0.1 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright 2012-2016 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	var debounce = __webpack_require__(184);
	
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
/* 184 */
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
/* 185 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';
	
	var _reactTransformHmr2 = __webpack_require__(4);
	
	var _reactTransformHmr3 = _interopRequireDefault(_reactTransformHmr2);
	
	var _react = __webpack_require__(47);
	
	var _reactTransformCatchErrors2 = __webpack_require__(48);
	
	var _reactTransformCatchErrors3 = _interopRequireDefault(_reactTransformCatchErrors2);
	
	var _redboxReact = __webpack_require__(49);
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(56);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _defaultProps = __webpack_require__(146);
	
	var _radium = __webpack_require__(57);
	
	var _radium2 = _interopRequireDefault(_radium);
	
	var _components = {
	    _$PopupElement: {
	        displayName: 'PopupElement'
	    }
	};
	
	var _reactComponentWrapper = (0, _reactTransformHmr3['default'])({
	    filename: 'E:/Work/semantic-react/src/components/modules/popup/popupelement.jsx',
	    components: _components,
	    locals: [module],
	    imports: [_react]
	});
	
	var _reactComponentWrapper2 = (0, _reactTransformCatchErrors3['default'])({
	    filename: 'E:/Work/semantic-react/src/components/modules/popup/popupelement.jsx',
	    components: _components,
	    locals: [],
	    imports: [_react, _redboxReact]
	});
	
	function _wrapComponent(uniqueId) {
	    return function (ReactClass) {
	        return _reactComponentWrapper2(_reactComponentWrapper(ReactClass, uniqueId), uniqueId);
	    };
	}
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var POSITIONS = ['top left', 'top center', 'top right', 'right center', 'bottom right', 'bottom center', 'bottom left', 'left center'];
	
	exports.POSITIONS = POSITIONS;
	/**
	 * Popup component without animation transitions
	 */
	
	var PopupElement = (function (_React$Component) {
	    _inherits(PopupElement, _React$Component);
	
	    function PopupElement() {
	        _classCallCheck(this, _PopupElement);
	
	        _get(Object.getPrototypeOf(_PopupElement.prototype), 'constructor', this).apply(this, arguments);
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
	            other.className = (0, _classnames2['default'])(className, this.getClasses());
	
	            return _react2['default'].createElement(component, other, this.props.children);
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
	    }], [{
	        key: 'propTypes',
	        value: _extends({}, _defaultProps.defaultPropTypes, {
	            /**
	             * Basic popup variation
	             */
	            basic: _react2['default'].PropTypes.bool,
	            /**
	             * Fluid popup
	             */
	            fluid: _react2['default'].PropTypes.bool,
	            /**
	             * No maximum width and continue to flow to fit its content
	             */
	            flowing: _react2['default'].PropTypes.bool,
	            /**
	             * Inverted popup
	             */
	            inverted: _react2['default'].PropTypes.bool,
	            /**
	             * Popup size
	             */
	            size: _react2['default'].PropTypes.oneOf(['mini', 'tiny', 'small', 'large', 'huge']),
	            /**
	             * Make content of popup wide
	             */
	            wide: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.bool, _react2['default'].PropTypes.string]),
	            /**
	             * Popup position
	             */
	            position: _react2['default'].PropTypes.oneOf(['top left', 'top center', 'top right', 'right center', 'bottom right', 'bottom center', 'bottom left', 'left center'])
	        }),
	        enumerable: true
	    }, {
	        key: 'defaultProps',
	        value: _extends({}, _defaultProps.defaultPropValues, {
	            position: 'top left'
	        }),
	        enumerable: true
	    }]);
	
	    var _PopupElement = PopupElement;
	    PopupElement = _wrapComponent('_$PopupElement')(PopupElement) || PopupElement;
	    PopupElement = (0, _radium2['default'])(PopupElement) || PopupElement;
	    return PopupElement;
	})(_react2['default'].Component);
	
	exports.PopupElement = PopupElement;

	/**
	 * Default properties
	 */
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)(module)))

/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';
	
	var _reactTransformHmr2 = __webpack_require__(4);
	
	var _reactTransformHmr3 = _interopRequireDefault(_reactTransformHmr2);
	
	var _react = __webpack_require__(47);
	
	var _reactTransformCatchErrors2 = __webpack_require__(48);
	
	var _reactTransformCatchErrors3 = _interopRequireDefault(_reactTransformCatchErrors2);
	
	var _redboxReact = __webpack_require__(49);
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(56);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _radium = __webpack_require__(57);
	
	var _radium2 = _interopRequireDefault(_radium);
	
	var _components = {
	    _$Bar: {
	        displayName: 'Bar'
	    }
	};
	
	var _reactComponentWrapper = (0, _reactTransformHmr3['default'])({
	    filename: 'E:/Work/semantic-react/src/components/modules/progress/bar.jsx',
	    components: _components,
	    locals: [module],
	    imports: [_react]
	});
	
	var _reactComponentWrapper2 = (0, _reactTransformCatchErrors3['default'])({
	    filename: 'E:/Work/semantic-react/src/components/modules/progress/bar.jsx',
	    components: _components,
	    locals: [],
	    imports: [_react, _redboxReact]
	});
	
	function _wrapComponent(uniqueId) {
	    return function (ReactClass) {
	        return _reactComponentWrapper2(_reactComponentWrapper(ReactClass, uniqueId), uniqueId);
	    };
	}
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var Bar = (function (_React$Component) {
	    _inherits(Bar, _React$Component);
	
	    function Bar() {
	        _classCallCheck(this, _Bar);
	
	        _get(Object.getPrototypeOf(_Bar.prototype), 'constructor', this).apply(this, arguments);
	    }
	
	    _createClass(Bar, [{
	        key: 'renderProgress',
	        value: function renderProgress() {
	            return _react2['default'].createElement(
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
	            other.className = (0, _classnames2['default'])(this.props.className, this.getClasses());
	            other.style = { width: progress + '%', transitionDuration: this.props.duration + 'ms' };
	
	            return _react2['default'].createElement(this.props.component, other, this.props.showPercentage ? this.renderProgress() : []);
	        }
	    }, {
	        key: 'getClasses',
	        value: function getClasses() {
	            return {
	                bar: true
	            };
	        }
	    }], [{
	        key: 'propTypes',
	        value: {
	            children: _react2['default'].PropTypes.node,
	            className: _react2['default'].PropTypes.any,
	            component: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.element, _react2['default'].PropTypes.string]),
	            defaultClasses: _react2['default'].PropTypes.bool,
	            duration: _react2['default'].PropTypes.number,
	            progress: _react2['default'].PropTypes.number,
	            showPercentage: _react2['default'].PropTypes.bool,
	            style: _react2['default'].PropTypes.object
	        },
	        enumerable: true
	    }, {
	        key: 'defaultProps',
	        value: {
	            component: 'div',
	            defaultClasses: true
	        },
	        enumerable: true
	    }]);
	
	    var _Bar = Bar;
	    Bar = _wrapComponent('_$Bar')(Bar) || Bar;
	    Bar = (0, _radium2['default'])(Bar) || Bar;
	    return Bar;
	})(_react2['default'].Component);
	
	exports.Bar = Bar;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)(module)))

/***/ },
/* 187 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';
	
	var _reactTransformHmr2 = __webpack_require__(4);
	
	var _reactTransformHmr3 = _interopRequireDefault(_reactTransformHmr2);
	
	var _react = __webpack_require__(47);
	
	var _reactTransformCatchErrors2 = __webpack_require__(48);
	
	var _reactTransformCatchErrors3 = _interopRequireDefault(_reactTransformCatchErrors2);
	
	var _redboxReact = __webpack_require__(49);
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(56);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _modules = __webpack_require__(93);
	
	var _utilities = __webpack_require__(55);
	
	var _radium = __webpack_require__(57);
	
	var _radium2 = _interopRequireDefault(_radium);
	
	var _components = {
	    _$Progress: {
	        displayName: 'Progress'
	    }
	};
	
	var _reactComponentWrapper = (0, _reactTransformHmr3['default'])({
	    filename: 'E:/Work/semantic-react/src/components/modules/progress/progress.jsx',
	    components: _components,
	    locals: [module],
	    imports: [_react]
	});
	
	var _reactComponentWrapper2 = (0, _reactTransformCatchErrors3['default'])({
	    filename: 'E:/Work/semantic-react/src/components/modules/progress/progress.jsx',
	    components: _components,
	    locals: [],
	    imports: [_react, _redboxReact]
	});
	
	function _wrapComponent(uniqueId) {
	    return function (ReactClass) {
	        return _reactComponentWrapper2(_reactComponentWrapper(ReactClass, uniqueId), uniqueId);
	    };
	}
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var validProps = {
	    attached: ['top', 'bottom']
	};
	
	var Progress = (function (_React$Component) {
	    _inherits(Progress, _React$Component);
	
	    function Progress() {
	        _classCallCheck(this, _Progress);
	
	        _get(Object.getPrototypeOf(_Progress.prototype), 'constructor', this).apply(this, arguments);
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
	
	            return _react2['default'].createElement(_modules.Bar, _extends({
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
	            other.className = (0, _classnames2['default'])(this.props.className, this.getClasses());
	
	            return _react2['default'].createElement(this.props.component, other, [this.renderBar(), this.props.children]);
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
	    }], [{
	        key: 'propTypes',
	        value: {
	            active: _react2['default'].PropTypes.bool,
	            attached: _react2['default'].PropTypes.oneOf(['top', 'bottom']),
	            children: _react2['default'].PropTypes.node,
	            className: _react2['default'].PropTypes.any,
	            color: _react2['default'].PropTypes.string,
	            component: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.element, _react2['default'].PropTypes.string]),
	            defaultClasses: _react2['default'].PropTypes.bool,
	            disabled: _react2['default'].PropTypes.bool,
	            duration: _react2['default'].PropTypes.number,
	            error: _react2['default'].PropTypes.bool,
	            indicating: _react2['default'].PropTypes.bool,
	            inverted: _react2['default'].PropTypes.bool,
	            progress: _react2['default'].PropTypes.number,
	            size: _react2['default'].PropTypes.string,
	            success: _react2['default'].PropTypes.bool,
	            warning: _react2['default'].PropTypes.bool
	        },
	        enumerable: true
	    }, {
	        key: 'childContextTypes',
	        value: {
	            isProgressChild: _react2['default'].PropTypes.bool
	        },
	        enumerable: true
	    }, {
	        key: 'defaultProps',
	        value: {
	            component: 'div',
	            defaultClasses: true,
	            duration: 300
	        },
	        enumerable: true
	    }]);
	
	    var _Progress = Progress;
	    Progress = _wrapComponent('_$Progress')(Progress) || Progress;
	    Progress = (0, _radium2['default'])(Progress) || Progress;
	    return Progress;
	})(_react2['default'].Component);
	
	exports.Progress = Progress;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)(module)))

/***/ },
/* 188 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';
	
	var _reactTransformHmr2 = __webpack_require__(4);
	
	var _reactTransformHmr3 = _interopRequireDefault(_reactTransformHmr2);
	
	var _react = __webpack_require__(47);
	
	var _reactTransformCatchErrors2 = __webpack_require__(48);
	
	var _reactTransformCatchErrors3 = _interopRequireDefault(_reactTransformCatchErrors2);
	
	var _redboxReact = __webpack_require__(49);
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(56);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _radium = __webpack_require__(57);
	
	var _radium2 = _interopRequireDefault(_radium);
	
	var _components = {
	    _$Rating: {
	        displayName: 'Rating'
	    }
	};
	
	var _reactComponentWrapper = (0, _reactTransformHmr3['default'])({
	    filename: 'E:/Work/semantic-react/src/components/modules/rating/rating.jsx',
	    components: _components,
	    locals: [module],
	    imports: [_react]
	});
	
	var _reactComponentWrapper2 = (0, _reactTransformCatchErrors3['default'])({
	    filename: 'E:/Work/semantic-react/src/components/modules/rating/rating.jsx',
	    components: _components,
	    locals: [],
	    imports: [_react, _redboxReact]
	});
	
	function _wrapComponent(uniqueId) {
	    return function (ReactClass) {
	        return _reactComponentWrapper2(_reactComponentWrapper(ReactClass, uniqueId), uniqueId);
	    };
	}
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var Rating = (function (_React$Component) {
	    _inherits(Rating, _React$Component);
	
	    _createClass(Rating, null, [{
	        key: 'propTypes',
	        value: {
	            children: _react2['default'].PropTypes.node,
	            className: _react2['default'].PropTypes.any,
	            component: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.element, _react2['default'].PropTypes.string]),
	            defaultClasses: _react2['default'].PropTypes.bool,
	            heart: _react2['default'].PropTypes.bool,
	            max: _react2['default'].PropTypes.number,
	            size: _react2['default'].PropTypes.string,
	            star: _react2['default'].PropTypes.bool
	        },
	        enumerable: true
	    }, {
	        key: 'defaultProps',
	        value: {
	            children: null,
	            component: 'div',
	            defaultClasses: true,
	            max: 5
	        },
	        enumerable: true
	    }]);
	
	    function Rating(props) {
	        _classCallCheck(this, _Rating);
	
	        _get(Object.getPrototypeOf(_Rating.prototype), 'constructor', this).call(this, props);
	
	        this.state = {
	            active: null
	        };
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
	
	                children.push(_react2['default'].createElement('i', {
	                    className: (0, _classnames2['default'])(classes),
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
	
	            other.className = (0, _classnames2['default'])(this.props.className, this.getClasses());
	
	            return _react2['default'].createElement(this.props.component, other, this.renderChildren());
	        }
	    }, {
	        key: 'getClasses',
	        value: function getClasses() {
	            var classes = {
	                ui: this.props.defaultClasses,
	
	                size: _react2['default'].PropTypes.string,
	
	                // variations
	                star: this.props.star,
	                heart: this.props.heart,
	
	                rating: this.props.defaultClasses
	            };
	
	            classes[this.props.size] = !!this.props.size;
	            return classes;
	        }
	    }]);
	
	    var _Rating = Rating;
	    Rating = _wrapComponent('_$Rating')(Rating) || Rating;
	    Rating = (0, _radium2['default'])(Rating) || Rating;
	    return Rating;
	})(_react2['default'].Component);
	
	exports.Rating = Rating;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)(module)))

/***/ },
/* 189 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';
	
	var _reactTransformHmr2 = __webpack_require__(4);
	
	var _reactTransformHmr3 = _interopRequireDefault(_reactTransformHmr2);
	
	var _react = __webpack_require__(47);
	
	var _reactTransformCatchErrors2 = __webpack_require__(48);
	
	var _reactTransformCatchErrors3 = _interopRequireDefault(_reactTransformCatchErrors2);
	
	var _redboxReact = __webpack_require__(49);
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react2 = _interopRequireDefault(_react);
	
	var _modules = __webpack_require__(93);
	
	var _elements = __webpack_require__(1);
	
	var _classnames = __webpack_require__(56);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _radium = __webpack_require__(57);
	
	var _radium2 = _interopRequireDefault(_radium);
	
	var _components = {
	    _$Results: {
	        displayName: 'Results'
	    }
	};
	
	var _reactComponentWrapper = (0, _reactTransformHmr3['default'])({
	    filename: 'E:/Work/semantic-react/src/components/modules/search/results.jsx',
	    components: _components,
	    locals: [module],
	    imports: [_react]
	});
	
	var _reactComponentWrapper2 = (0, _reactTransformCatchErrors3['default'])({
	    filename: 'E:/Work/semantic-react/src/components/modules/search/results.jsx',
	    components: _components,
	    locals: [],
	    imports: [_react, _redboxReact]
	});
	
	function _wrapComponent(uniqueId) {
	    return function (ReactClass) {
	        return _reactComponentWrapper2(_reactComponentWrapper(ReactClass, uniqueId), uniqueId);
	    };
	}
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var Results = (function (_React$Component) {
	    _inherits(Results, _React$Component);
	
	    function Results() {
	        _classCallCheck(this, _Results);
	
	        _get(Object.getPrototypeOf(_Results.prototype), 'constructor', this).apply(this, arguments);
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
	            } else if (typeof this.props.results === 'object') {
	                return this.renderObject();
	            } else {
	                return false;
	            }
	        }
	    }, {
	        key: 'renderArray',
	        value: function renderArray() {
	            var _this = this;
	
	            var results = arguments[0] || this.props.results;
	
	            return results.map(function (child) {
	                var description = null;
	                var title = typeof child === 'object' ? child.title : child;
	
	                // use title and description
	                if (typeof child === 'object' && child.description) {
	                    description = _react2['default'].createElement(
	                        'div',
	                        { className: 'description' },
	                        child.description
	                    );
	                }
	
	                return _react2['default'].createElement(
	                    'a',
	                    { className: 'result',
	                        onMouseDown: _this.onClick.bind(_this, title)
	                    },
	                    _react2['default'].createElement(
	                        _elements.Content,
	                        null,
	                        _react2['default'].createElement(
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
	            var _this2 = this;
	
	            var children = [];
	
	            Object.keys(this.props.results).map(function (child) {
	                children.push(_react2['default'].createElement(
	                    'div',
	                    { className: 'category' },
	                    _react2['default'].createElement(
	                        'div',
	                        { className: 'name' },
	                        child
	                    ),
	                    _this2.renderArray(_this2.props.results[child])
	                ));
	            });
	
	            return children;
	        }
	    }, {
	        key: 'renderEmpty',
	        value: function renderEmpty() {
	            return _react2['default'].createElement(
	                'div',
	                { className: 'message empty' },
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'header' },
	                    this.props.emptyHeader
	                ),
	                _react2['default'].createElement(
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
	
	            other.className = (0, _classnames2['default'])(this.props.className, this.getClasses());
	            other.style = this.props.style;
	
	            return _react2['default'].createElement(this.props.component, other, this.renderChildren());
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
	    }], [{
	        key: 'propTypes',
	        value: {
	            children: _react2['default'].PropTypes.node,
	            className: _react2['default'].PropTypes.any,
	            component: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.func, _react2['default'].PropTypes.string]),
	            defaultClasses: _react2['default'].PropTypes.bool,
	            emptyHeader: _react2['default'].PropTypes.string,
	            emptyMessage: _react2['default'].PropTypes.string,
	            onSearchClick: _react2['default'].PropTypes.func,
	            results: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.array, _react2['default'].PropTypes.object]),
	            search: _react2['default'].PropTypes.string,
	            style: _react2['default'].PropTypes.object
	        },
	        enumerable: true
	    }, {
	        key: 'defaultProps',
	        value: {
	            component: 'div',
	            defaultClasses: true,
	            emptyHeader: 'No Results',
	            emptyMessage: 'Your search returned no results'
	        },
	        enumerable: true
	    }]);
	
	    var _Results = Results;
	    Results = _wrapComponent('_$Results')(Results) || Results;
	    Results = (0, _radium2['default'])(Results) || Results;
	    return Results;
	})(_react2['default'].Component);
	
	exports.Results = Results;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)(module)))

/***/ },
/* 190 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';
	
	var _reactTransformHmr2 = __webpack_require__(4);
	
	var _reactTransformHmr3 = _interopRequireDefault(_reactTransformHmr2);
	
	var _react = __webpack_require__(47);
	
	var _reactTransformCatchErrors2 = __webpack_require__(48);
	
	var _reactTransformCatchErrors3 = _interopRequireDefault(_reactTransformCatchErrors2);
	
	var _redboxReact = __webpack_require__(49);
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react2 = _interopRequireDefault(_react);
	
	var _elements = __webpack_require__(1);
	
	var _reactMotionUiPack = __webpack_require__(111);
	
	var _reactMotionUiPack2 = _interopRequireDefault(_reactMotionUiPack);
	
	var _results = __webpack_require__(189);
	
	var _classnames = __webpack_require__(56);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _radium = __webpack_require__(57);
	
	var _radium2 = _interopRequireDefault(_radium);
	
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
	var _components = {
	    _$Search: {
	        displayName: 'Search'
	    }
	};
	
	var _reactComponentWrapper = (0, _reactTransformHmr3['default'])({
	    filename: 'E:/Work/semantic-react/src/components/modules/search/search.jsx',
	    components: _components,
	    locals: [module],
	    imports: [_react]
	});
	
	var _reactComponentWrapper2 = (0, _reactTransformCatchErrors3['default'])({
	    filename: 'E:/Work/semantic-react/src/components/modules/search/search.jsx',
	    components: _components,
	    locals: [],
	    imports: [_react, _redboxReact]
	});
	
	function _wrapComponent(uniqueId) {
	    return function (ReactClass) {
	        return _reactComponentWrapper2(_reactComponentWrapper(ReactClass, uniqueId), uniqueId);
	    };
	}
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var Search = (function (_React$Component) {
	    _inherits(Search, _React$Component);
	
	    _createClass(Search, null, [{
	        key: 'propTypes',
	        value: {
	            children: _react2['default'].PropTypes.node,
	            className: _react2['default'].PropTypes.any,
	            component: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.func, _react2['default'].PropTypes.string]),
	            defaultClasses: _react2['default'].PropTypes.bool,
	            emptyHeader: _react2['default'].PropTypes.string,
	            emptyMessage: _react2['default'].PropTypes.string,
	            enterAnimation: _react2['default'].PropTypes.object,
	            icon: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.string, _react2['default'].PropTypes.bool]),
	            leaveAnimation: _react2['default'].PropTypes.object,
	            loading: _react2['default'].PropTypes.bool,
	            onChange: _react2['default'].PropTypes.func.isRequired,
	            onSearchClick: _react2['default'].PropTypes.func,
	            placeholder: _react2['default'].PropTypes.string,
	            results: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.array, _react2['default'].PropTypes.object])
	        },
	        enumerable: true
	    }, {
	        key: 'defaultProps',
	        value: {
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
	        },
	        enumerable: true
	    }]);
	
	    function Search(props) {
	        _classCallCheck(this, _Search);
	
	        _get(Object.getPrototypeOf(_Search.prototype), 'constructor', this).call(this, props);
	
	        // see shouldComponentUpdate
	        this.results = false;
	
	        this.state = {
	            focus: false
	        };
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
	            return _react2['default'].createElement(
	                'div',
	                { className: 'ui icon input' },
	                this.renderInput(),
	                _react2['default'].createElement(_elements.Icon, { name: this.props.icon || 'search' })
	            );
	        }
	    }, {
	        key: 'renderInput',
	        value: function renderInput() {
	            var _this = this;
	
	            return _react2['default'].createElement('input', { className: 'prompt',
	                key: 'searchPrompt',
	                onBlur: this.onBlur.bind(this),
	                onChange: this.onChange.bind(this),
	                onFocus: this.onFocus.bind(this),
	                placeholder: this.props.placeholder,
	                ref: function (ref) {
	                    return _this.searchInput = ref;
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
	
	            return _react2['default'].createElement(
	                _reactMotionUiPack2['default'],
	                { component: false,
	                    enter: this.props.enterAnimation,
	                    leave: this.props.leaveAnimation
	                },
	                this.state.focus && this.searchInput.value !== '' && _react2['default'].createElement(_results.Results, props)
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
	
	            other.className = (0, _classnames2['default'])(this.props.className, this.getClasses());
	
	            return _react2['default'].createElement(this.props.component, other, [this.renderChildren(), this.renderResults()]);
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
	
	    var _Search = Search;
	    Search = _wrapComponent('_$Search')(Search) || Search;
	    Search = (0, _radium2['default'])(Search) || Search;
	    return Search;
	})(_react2['default'].Component);
	
	exports.Search = Search;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)(module)))

/***/ },
/* 191 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';
	
	var _reactTransformHmr2 = __webpack_require__(4);
	
	var _reactTransformHmr3 = _interopRequireDefault(_reactTransformHmr2);
	
	var _react = __webpack_require__(47);
	
	var _reactTransformCatchErrors2 = __webpack_require__(48);
	
	var _reactTransformCatchErrors3 = _interopRequireDefault(_reactTransformCatchErrors2);
	
	var _redboxReact = __webpack_require__(49);
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react2 = _interopRequireDefault(_react);
	
	var _tabcontent = __webpack_require__(192);
	
	var _components = {
	    _$Tab: {
	        displayName: 'Tab'
	    }
	};
	
	var _reactComponentWrapper = (0, _reactTransformHmr3['default'])({
	    filename: 'E:/Work/semantic-react/src/components/modules/tab/tab.jsx',
	    components: _components,
	    locals: [module],
	    imports: [_react]
	});
	
	var _reactComponentWrapper2 = (0, _reactTransformCatchErrors3['default'])({
	    filename: 'E:/Work/semantic-react/src/components/modules/tab/tab.jsx',
	    components: _components,
	    locals: [],
	    imports: [_react, _redboxReact]
	});
	
	function _wrapComponent(uniqueId) {
	    return function (ReactClass) {
	        return _reactComponentWrapper2(_reactComponentWrapper(ReactClass, uniqueId), uniqueId);
	    };
	}
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var Tab = (function (_React$Component) {
	    _inherits(Tab, _React$Component);
	
	    function Tab() {
	        _classCallCheck(this, _Tab);
	
	        _get(Object.getPrototypeOf(_Tab.prototype), 'constructor', this).apply(this, arguments);
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
	
	            return _react2['default'].createElement(
	                _tabcontent.TabContent,
	                other,
	                this.props.children
	            );
	        }
	    }], [{
	        key: 'propTypes',
	        value: {
	            children: _react2['default'].PropTypes.node,
	            component: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.element, _react2['default'].PropTypes.string]),
	            header: _react2['default'].PropTypes.string.isRequired
	        },
	        enumerable: true
	    }, {
	        key: 'defaultProps',
	        value: {
	            component: 'div'
	        },
	        enumerable: true
	    }]);
	
	    var _Tab = Tab;
	    Tab = _wrapComponent('_$Tab')(Tab) || Tab;
	    return Tab;
	})(_react2['default'].Component);
	
	exports.Tab = Tab;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)(module)))

/***/ },
/* 192 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';
	
	var _reactTransformHmr2 = __webpack_require__(4);
	
	var _reactTransformHmr3 = _interopRequireDefault(_reactTransformHmr2);
	
	var _react = __webpack_require__(47);
	
	var _reactTransformCatchErrors2 = __webpack_require__(48);
	
	var _reactTransformCatchErrors3 = _interopRequireDefault(_reactTransformCatchErrors2);
	
	var _redboxReact = __webpack_require__(49);
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(56);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _radium = __webpack_require__(57);
	
	var _radium2 = _interopRequireDefault(_radium);
	
	var _components = {
	    _$TabContent: {
	        displayName: 'TabContent'
	    }
	};
	
	var _reactComponentWrapper = (0, _reactTransformHmr3['default'])({
	    filename: 'E:/Work/semantic-react/src/components/modules/tab/tabcontent.jsx',
	    components: _components,
	    locals: [module],
	    imports: [_react]
	});
	
	var _reactComponentWrapper2 = (0, _reactTransformCatchErrors3['default'])({
	    filename: 'E:/Work/semantic-react/src/components/modules/tab/tabcontent.jsx',
	    components: _components,
	    locals: [],
	    imports: [_react, _redboxReact]
	});
	
	function _wrapComponent(uniqueId) {
	    return function (ReactClass) {
	        return _reactComponentWrapper2(_reactComponentWrapper(ReactClass, uniqueId), uniqueId);
	    };
	}
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var TabContent = (function (_React$Component) {
	    _inherits(TabContent, _React$Component);
	
	    function TabContent() {
	        _classCallCheck(this, _TabContent);
	
	        _get(Object.getPrototypeOf(_TabContent.prototype), 'constructor', this).apply(this, arguments);
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
	
	            other.className = (0, _classnames2['default'])(this.props.className, this.getClasses());
	
	            return _react2['default'].createElement(this.props.component, other, this.props.children);
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
	    }], [{
	        key: 'propTypes',
	        value: {
	            active: _react2['default'].PropTypes.bool,
	            children: _react2['default'].PropTypes.node,
	            className: _react2['default'].PropTypes.any,
	            component: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.func, _react2['default'].PropTypes.string]),
	            defaultClasses: _react2['default'].PropTypes.bool,
	            loading: _react2['default'].PropTypes.bool,
	            position: _react2['default'].PropTypes.oneOf(['top', 'bottom']),
	            segment: _react2['default'].PropTypes.bool,
	            type: _react2['default'].PropTypes.oneOf(['tab', 'menu', 'pill'])
	        },
	        enumerable: true
	    }, {
	        key: 'defaultProps',
	        value: {
	            component: 'div',
	            defaultClasses: true,
	            position: 'bottom',
	            segment: true
	        },
	        enumerable: true
	    }]);
	
	    var _TabContent = TabContent;
	    TabContent = _wrapComponent('_$TabContent')(TabContent) || TabContent;
	    TabContent = (0, _radium2['default'])(TabContent) || TabContent;
	    return TabContent;
	})(_react2['default'].Component);
	
	exports.TabContent = TabContent;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)(module)))

/***/ },
/* 193 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';
	
	var _reactTransformHmr2 = __webpack_require__(4);
	
	var _reactTransformHmr3 = _interopRequireDefault(_reactTransformHmr2);
	
	var _react = __webpack_require__(47);
	
	var _reactTransformCatchErrors2 = __webpack_require__(48);
	
	var _reactTransformCatchErrors3 = _interopRequireDefault(_reactTransformCatchErrors2);
	
	var _redboxReact = __webpack_require__(49);
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react2 = _interopRequireDefault(_react);
	
	var _tab = __webpack_require__(191);
	
	var _tabtitle = __webpack_require__(194);
	
	var _views = __webpack_require__(150);
	
	var _radium = __webpack_require__(57);
	
	var _radium2 = _interopRequireDefault(_radium);
	
	var _components = {
	    _$Tabs: {
	        displayName: 'Tabs'
	    }
	};
	
	var _reactComponentWrapper = (0, _reactTransformHmr3['default'])({
	    filename: 'E:/Work/semantic-react/src/components/modules/tab/tabs.jsx',
	    components: _components,
	    locals: [module],
	    imports: [_react]
	});
	
	var _reactComponentWrapper2 = (0, _reactTransformCatchErrors3['default'])({
	    filename: 'E:/Work/semantic-react/src/components/modules/tab/tabs.jsx',
	    components: _components,
	    locals: [],
	    imports: [_react, _redboxReact]
	});
	
	function _wrapComponent(uniqueId) {
	    return function (ReactClass) {
	        return _reactComponentWrapper2(_reactComponentWrapper(ReactClass, uniqueId), uniqueId);
	    };
	}
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var Tabs = (function (_React$Component) {
	    _inherits(Tabs, _React$Component);
	
	    _createClass(Tabs, null, [{
	        key: 'propTypes',
	        value: {
	            children: _react2['default'].PropTypes.node,
	            className: _react2['default'].PropTypes.any,
	            component: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.func, _react2['default'].PropTypes.string]),
	            defaultClasses: _react2['default'].PropTypes.bool,
	            position: _react2['default'].PropTypes.oneOf(['top', 'bottom']),
	            type: _react2['default'].PropTypes.oneOf(['tab', 'menu', 'pill'])
	        },
	        enumerable: true
	    }, {
	        key: 'defaultProps',
	        value: {
	            component: 'div',
	            type: 'tab'
	        },
	        enumerable: true
	    }]);
	
	    function Tabs(props) {
	        _classCallCheck(this, _Tabs);
	
	        _get(Object.getPrototypeOf(_Tabs.prototype), 'constructor', this).call(this, props);
	
	        this.state = {
	            active: 0
	        };
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
	            var _this = this;
	
	            return _react2['default'].Children.map(this.props.children, function (child, index) {
	                if (child.type === _tab.Tab) {
	                    return _react2['default'].cloneElement(child, {
	                        active: _this.state.active === index,
	                        type: _this.props.type
	                    }, child.props.children);
	                }
	            });
	        }
	    }, {
	        key: 'renderTitles',
	        value: function renderTitles() {
	            var _this2 = this;
	
	            var tabs = [];
	
	            _react2['default'].Children.forEach(this.props.children, function (child, index) {
	                if (child.type == _tab.Tab) {
	                    var props = {};
	
	                    props.active = _this2.state.active === index;
	                    props.key = index;
	                    props.onClick = _this2.onItemClick.bind(_this2, index);
	
	                    tabs.push(_react2['default'].createElement(_views.Item, props, child.props.header));
	                }
	            });
	
	            return _react2['default'].createElement(
	                _tabtitle.TabTitle,
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
	
	            return _react2['default'].createElement(this.props.component, other, [this.renderTitles(), this.renderChildren()]);
	        }
	    }, {
	        key: 'setActiveChild',
	        value: function setActiveChild() {
	            var _this3 = this;
	
	            _react2['default'].Children.forEach(this.props.children, function (child, index) {
	                if (child.type === _tab.Tab && child.props.active) {
	                    _this3.setState({
	                        active: index
	                    });
	                }
	            });
	        }
	    }]);
	
	    var _Tabs = Tabs;
	    Tabs = _wrapComponent('_$Tabs')(Tabs) || Tabs;
	    Tabs = (0, _radium2['default'])(Tabs) || Tabs;
	    return Tabs;
	})(_react2['default'].Component);
	
	exports.Tabs = Tabs;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)(module)))

/***/ },
/* 194 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';
	
	var _reactTransformHmr2 = __webpack_require__(4);
	
	var _reactTransformHmr3 = _interopRequireDefault(_reactTransformHmr2);
	
	var _react = __webpack_require__(47);
	
	var _reactTransformCatchErrors2 = __webpack_require__(48);
	
	var _reactTransformCatchErrors3 = _interopRequireDefault(_reactTransformCatchErrors2);
	
	var _redboxReact = __webpack_require__(49);
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(56);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _radium = __webpack_require__(57);
	
	var _radium2 = _interopRequireDefault(_radium);
	
	var _components = {
	    _$TabTitle: {
	        displayName: 'TabTitle'
	    }
	};
	
	var _reactComponentWrapper = (0, _reactTransformHmr3['default'])({
	    filename: 'E:/Work/semantic-react/src/components/modules/tab/tabtitle.jsx',
	    components: _components,
	    locals: [module],
	    imports: [_react]
	});
	
	var _reactComponentWrapper2 = (0, _reactTransformCatchErrors3['default'])({
	    filename: 'E:/Work/semantic-react/src/components/modules/tab/tabtitle.jsx',
	    components: _components,
	    locals: [],
	    imports: [_react, _redboxReact]
	});
	
	function _wrapComponent(uniqueId) {
	    return function (ReactClass) {
	        return _reactComponentWrapper2(_reactComponentWrapper(ReactClass, uniqueId), uniqueId);
	    };
	}
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var TabTitle = (function (_React$Component) {
	    _inherits(TabTitle, _React$Component);
	
	    function TabTitle() {
	        _classCallCheck(this, _TabTitle);
	
	        _get(Object.getPrototypeOf(_TabTitle.prototype), 'constructor', this).apply(this, arguments);
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
	
	            other.className = (0, _classnames2['default'])(this.props.className, this.getClasses());
	
	            return _react2['default'].createElement(this.props.component, other, this.props.children);
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
	    }], [{
	        key: 'propTypes',
	        value: {
	            children: _react2['default'].PropTypes.node,
	            className: _react2['default'].PropTypes.any,
	            component: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.func, _react2['default'].PropTypes.string]),
	            defaultClasses: _react2['default'].PropTypes.bool,
	            position: _react2['default'].PropTypes.oneOf(['top', 'bottom']),
	            title: _react2['default'].PropTypes.string,
	            type: _react2['default'].PropTypes.oneOf(['tab', 'menu', 'pill'])
	        },
	        enumerable: true
	    }, {
	        key: 'defaultProps',
	        value: {
	            component: 'div',
	            defaultClasses: true,
	            position: 'top'
	        },
	        enumerable: true
	    }]);
	
	    var _TabTitle = TabTitle;
	    TabTitle = _wrapComponent('_$TabTitle')(TabTitle) || TabTitle;
	    TabTitle = (0, _radium2['default'])(TabTitle) || TabTitle;
	    return TabTitle;
	})(_react2['default'].Component);
	
	exports.TabTitle = TabTitle;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)(module)))

/***/ },
/* 195 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopExportWildcard(obj, defaults) { var newObj = defaults({}, obj); delete newObj['default']; return newObj; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	var _collectionsGridComputer = __webpack_require__(196);
	
	_defaults(exports, _interopExportWildcard(_collectionsGridComputer, _defaults));
	
	var _collectionsGridTablet = __webpack_require__(198);
	
	_defaults(exports, _interopExportWildcard(_collectionsGridTablet, _defaults));
	
	var _collectionsGridMobile = __webpack_require__(199);
	
	_defaults(exports, _interopExportWildcard(_collectionsGridMobile, _defaults));
	
	var _collectionsGridDevice = __webpack_require__(197);
	
	_defaults(exports, _interopExportWildcard(_collectionsGridDevice, _defaults));
	
	var _collectionsGridColumn = __webpack_require__(200);
	
	_defaults(exports, _interopExportWildcard(_collectionsGridColumn, _defaults));
	
	var _collectionsGridRow = __webpack_require__(201);
	
	_defaults(exports, _interopExportWildcard(_collectionsGridRow, _defaults));
	
	var _collectionsGridGrid = __webpack_require__(202);
	
	_defaults(exports, _interopExportWildcard(_collectionsGridGrid, _defaults));
	
	var _collectionsMessageMessage = __webpack_require__(203);
	
	_defaults(exports, _interopExportWildcard(_collectionsMessageMessage, _defaults));
	
	var _collectionsTableTable = __webpack_require__(204);
	
	_defaults(exports, _interopExportWildcard(_collectionsTableTable, _defaults));
	
	var _collectionsTableTr = __webpack_require__(205);
	
	_defaults(exports, _interopExportWildcard(_collectionsTableTr, _defaults));
	
	var _collectionsTableTd = __webpack_require__(206);
	
	_defaults(exports, _interopExportWildcard(_collectionsTableTd, _defaults));
	
	var _collectionsFormForm = __webpack_require__(207);
	
	_defaults(exports, _interopExportWildcard(_collectionsFormForm, _defaults));
	
	var _collectionsFormFields = __webpack_require__(208);
	
	_defaults(exports, _interopExportWildcard(_collectionsFormFields, _defaults));
	
	var _collectionsFormField = __webpack_require__(209);
	
	_defaults(exports, _interopExportWildcard(_collectionsFormField, _defaults));

/***/ },
/* 196 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(47);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _device = __webpack_require__(197);
	
	var Computer = function Computer(props) {
	    return _react2['default'].createElement(
	        _device.Device,
	        _extends({}, props, {
	            type: 'computer'
	        }),
	        props.children
	    );
	};
	
	Computer.propTypes = {
	    children: _react2['default'].PropTypes.node
	};
	
	exports.Computer = Computer;

/***/ },
/* 197 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';
	
	var _reactTransformHmr2 = __webpack_require__(4);
	
	var _reactTransformHmr3 = _interopRequireDefault(_reactTransformHmr2);
	
	var _react = __webpack_require__(47);
	
	var _reactTransformCatchErrors2 = __webpack_require__(48);
	
	var _reactTransformCatchErrors3 = _interopRequireDefault(_reactTransformCatchErrors2);
	
	var _redboxReact = __webpack_require__(49);
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react2 = _interopRequireDefault(_react);
	
	var _utilities = __webpack_require__(55);
	
	var _radium = __webpack_require__(57);
	
	var _radium2 = _interopRequireDefault(_radium);
	
	var _components = {
	    _$Device: {
	        displayName: 'Device'
	    }
	};
	
	var _reactComponentWrapper = (0, _reactTransformHmr3['default'])({
	    filename: 'E:/Work/semantic-react/src/components/collections/grid/device.jsx',
	    components: _components,
	    locals: [module],
	    imports: [_react]
	});
	
	var _reactComponentWrapper2 = (0, _reactTransformCatchErrors3['default'])({
	    filename: 'E:/Work/semantic-react/src/components/collections/grid/device.jsx',
	    components: _components,
	    locals: [],
	    imports: [_react, _redboxReact]
	});
	
	function _wrapComponent(uniqueId) {
	    return function (ReactClass) {
	        return _reactComponentWrapper2(_reactComponentWrapper(ReactClass, uniqueId), uniqueId);
	    };
	}
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var validProps = {
	    reversed: ['vertically']
	};
	
	var Device = (function (_React$Component) {
	    _inherits(Device, _React$Component);
	
	    function Device() {
	        _classCallCheck(this, _Device);
	
	        _get(Object.getPrototypeOf(_Device.prototype), 'constructor', this).apply(this, arguments);
	    }
	
	    _createClass(Device, [{
	        key: 'renderStyle',
	        value: function renderStyle() {
	            var classes = {};
	
	            if (this.props.width) {
	                if (this.props.width > 0 && this.props.width <= 16) {
	                    classes[_utilities.Numbers[this.props.width] + ' wide'] = true;
	                }
	            }
	
	            if (this.props.only) {
	                classes[this.props.type + ' only'] = true;
	            } else {
	                classes[this.props.type] = true;
	            }
	
	            classes = (0, _utilities.validateClassProps)(classes, this.props, validProps);
	
	            return this.props.callback(classes, this.props.type);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            this.renderStyle();
	            return null;
	        }
	    }], [{
	        key: 'propTypes',
	        value: {
	            callback: _react2['default'].PropTypes.func,
	            children: _react2['default'].PropTypes.node,
	            only: _react2['default'].PropTypes.bool,
	            reversed: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.oneOf(['vertically'])]),
	            type: _react2['default'].PropTypes.oneOf(['mobile', 'computer', 'tablet']).isRequired,
	            width: _react2['default'].PropTypes.number
	        },
	        enumerable: true
	    }]);
	
	    var _Device = Device;
	    Device = _wrapComponent('_$Device')(Device) || Device;
	    Device = (0, _radium2['default'])(Device) || Device;
	    return Device;
	})(_react2['default'].Component);
	
	exports.Device = Device;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)(module)))

/***/ },
/* 198 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(47);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _device = __webpack_require__(197);
	
	var Tablet = function Tablet(props) {
	    return _react2['default'].createElement(
	        _device.Device,
	        _extends({}, props, {
	            type: 'tablet'
	        }),
	        props.children
	    );
	};
	
	Tablet.propTypes = {
	    children: _react2['default'].PropTypes.node
	};
	
	exports.Tablet = Tablet;

/***/ },
/* 199 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(47);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _device = __webpack_require__(197);
	
	var Mobile = function Mobile(props) {
	    return _react2['default'].createElement(
	        _device.Device,
	        _extends({}, props, {
	            type: 'mobile'
	        }),
	        props.children
	    );
	};
	
	Mobile.propTypes = {
	    children: _react2['default'].PropTypes.node
	};
	
	exports.Mobile = Mobile;

/***/ },
/* 200 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';
	
	var _reactTransformHmr2 = __webpack_require__(4);
	
	var _reactTransformHmr3 = _interopRequireDefault(_reactTransformHmr2);
	
	var _react = __webpack_require__(47);
	
	var _reactTransformCatchErrors2 = __webpack_require__(48);
	
	var _reactTransformCatchErrors3 = _interopRequireDefault(_reactTransformCatchErrors2);
	
	var _redboxReact = __webpack_require__(49);
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react2 = _interopRequireDefault(_react);
	
	var _utilities = __webpack_require__(55);
	
	var _collections = __webpack_require__(195);
	
	var _classnames = __webpack_require__(56);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _radium = __webpack_require__(57);
	
	var _radium2 = _interopRequireDefault(_radium);
	
	var _components = {
	    _$Column: {
	        displayName: 'Column'
	    }
	};
	
	var _reactComponentWrapper = (0, _reactTransformHmr3['default'])({
	    filename: 'E:/Work/semantic-react/src/components/collections/grid/column.jsx',
	    components: _components,
	    locals: [module],
	    imports: [_react]
	});
	
	var _reactComponentWrapper2 = (0, _reactTransformCatchErrors3['default'])({
	    filename: 'E:/Work/semantic-react/src/components/collections/grid/column.jsx',
	    components: _components,
	    locals: [],
	    imports: [_react, _redboxReact]
	});
	
	function _wrapComponent(uniqueId) {
	    return function (ReactClass) {
	        return _reactComponentWrapper2(_reactComponentWrapper(ReactClass, uniqueId), uniqueId);
	    };
	}
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var validProps = {
	    aligned: ['right', 'left', 'justified', 'center'],
	    floated: ['right', 'left'],
	    visible: ['large screen', 'wide screen', 'computer', 'mobile', 'tablet'],
	    valigned: ['top', 'middle', 'bottom']
	
	};
	
	var Column = (function (_React$Component) {
	    _inherits(Column, _React$Component);
	
	    _createClass(Column, null, [{
	        key: 'propTypes',
	        value: {
	            aligned: _react2['default'].PropTypes.oneOf(['right', 'left', 'justified', 'center']),
	            children: _react2['default'].PropTypes.node,
	            className: _react2['default'].PropTypes.any,
	            color: _react2['default'].PropTypes.string,
	            component: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.element, _react2['default'].PropTypes.string]),
	            defaultClasses: _react2['default'].PropTypes.bool,
	            floated: _react2['default'].PropTypes.oneOf(['right', 'left']),
	            style: _react2['default'].PropTypes.any,
	            valigned: _react2['default'].PropTypes.oneOf(['top', 'middle', 'bottom']),
	            visible: _react2['default'].PropTypes.oneOf(['large screen', 'wide screen', 'computer', 'mobile', 'tablet']),
	            width: _react2['default'].PropTypes.number
	        },
	        enumerable: true
	    }, {
	        key: 'defaultProps',
	        value: {
	            component: 'div',
	            defaultClasses: true
	        },
	        enumerable: true
	    }]);
	
	    function Column(props) {
	        _classCallCheck(this, _Column);
	
	        _get(Object.getPrototypeOf(_Column.prototype), 'constructor', this).call(this, props);
	
	        this.style = {
	            mobile: {},
	            computer: {},
	            tablet: {}
	        };
	    }
	
	    _createClass(Column, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this.forceUpdate();
	        }
	    }, {
	        key: 'onFoundDevice',
	        value: function onFoundDevice(style, type) {
	            this.style[type] = style;
	        }
	    }, {
	        key: 'renderChildren',
	        value: function renderChildren() {
	            var _this = this;
	
	            var children = [_collections.Device, _collections.Computer, _collections.Tablet, _collections.Mobile];
	            return _react2['default'].Children.map(this.props.children, function (child, index) {
	                if (children.indexOf(child.type) > -1) {
	                    return _react2['default'].cloneElement(child, {
	                        callback: _this.onFoundDevice.bind(_this),
	                        key: index
	                    }, child.children);
	                } else {
	                    return child;
	                }
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            // consume props
	            /* eslint-disable no-use-before-define */
	            var _props = this.props;
	            var aligned = _props.aligned;
	            var color = _props.color;
	            var component = _props.component;
	            var className = _props.className;
	            var children = _props.children;
	            var defaultClasses = _props.defaultClasses;
	            var floated = _props.floated;
	            var valigned = _props.valigned;
	            var width = _props.width;
	
	            var other = _objectWithoutProperties(_props, ['aligned', 'color', 'component', 'className', 'children', 'defaultClasses', 'floated', 'valigned', 'width']);
	
	            /* eslint-enable no-use-before-define */
	
	            // add classnames
	            other.className = (0, _classnames2['default'])(this.props.className, this.getClasses());
	
	            return _react2['default'].createElement(this.props.component, other, _react2['default'].Children.count(this.props.children) !== 0 ? this.renderChildren() : []);
	        }
	    }, {
	        key: 'getClasses',
	        value: function getClasses() {
	            var classes = _extends({}, this.style.computer, this.style.tablet, this.style.mobile, {
	                column: this.props.defaultClasses,
	
	                aligned: this.props.aligned && this.props.aligned !== 'justified'
	            });
	
	            classes[this.props.color] = !!this.props.color;
	
	            if (this.props.width) {
	                if (this.props.width > 0 && this.props.width <= 16) {
	                    classes[_utilities.Numbers[this.props.width] + ' wide'] = true;
	                }
	            }
	
	            return (0, _utilities.validateClassProps)(classes, this.props, validProps, { visible: 'only', valigned: 'aligned' });
	        }
	    }]);
	
	    var _Column = Column;
	    Column = _wrapComponent('_$Column')(Column) || Column;
	    Column = (0, _radium2['default'])(Column) || Column;
	    return Column;
	})(_react2['default'].Component);
	
	exports.Column = Column;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)(module)))

/***/ },
/* 201 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';
	
	var _reactTransformHmr2 = __webpack_require__(4);
	
	var _reactTransformHmr3 = _interopRequireDefault(_reactTransformHmr2);
	
	var _react = __webpack_require__(47);
	
	var _reactTransformCatchErrors2 = __webpack_require__(48);
	
	var _reactTransformCatchErrors3 = _interopRequireDefault(_reactTransformCatchErrors2);
	
	var _redboxReact = __webpack_require__(49);
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react2 = _interopRequireDefault(_react);
	
	var _utilities = __webpack_require__(55);
	
	var _classnames = __webpack_require__(56);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _radium = __webpack_require__(57);
	
	var _radium2 = _interopRequireDefault(_radium);
	
	var _components = {
	    _$Row: {
	        displayName: 'Row'
	    }
	};
	
	var _reactComponentWrapper = (0, _reactTransformHmr3['default'])({
	    filename: 'E:/Work/semantic-react/src/components/collections/grid/row.jsx',
	    components: _components,
	    locals: [module],
	    imports: [_react]
	});
	
	var _reactComponentWrapper2 = (0, _reactTransformCatchErrors3['default'])({
	    filename: 'E:/Work/semantic-react/src/components/collections/grid/row.jsx',
	    components: _components,
	    locals: [],
	    imports: [_react, _redboxReact]
	});
	
	function _wrapComponent(uniqueId) {
	    return function (ReactClass) {
	        return _reactComponentWrapper2(_reactComponentWrapper(ReactClass, uniqueId), uniqueId);
	    };
	}
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var validProps = {
	    aligned: ['right', 'left', 'justified', 'center'],
	    valigned: ['top', 'middle', 'bottom'],
	    visible: ['large screen', 'wide screen', 'computer', 'mobile', 'tablet']
	};
	
	var Row = (function (_React$Component) {
	    _inherits(Row, _React$Component);
	
	    function Row() {
	        _classCallCheck(this, _Row);
	
	        _get(Object.getPrototypeOf(_Row.prototype), 'constructor', this).apply(this, arguments);
	    }
	
	    _createClass(Row, [{
	        key: 'render',
	        value: function render() {
	            // consume props
	            /* eslint-disable no-use-before-define */
	            var _props = this.props;
	            var aligned = _props.aligned;
	            var className = _props.className;
	            var component = _props.component;
	            var children = _props.children;
	            var color = _props.color;
	            var columns = _props.columns;
	            var defaultClasses = _props.defaultClasses;
	            var stretched = _props.stretched;
	            var valigned = _props.valigned;
	            var visible = _props.visible;
	
	            var other = _objectWithoutProperties(_props, ['aligned', 'className', 'component', 'children', 'color', 'columns', 'defaultClasses', 'stretched', 'valigned', 'visible']);
	
	            /* eslint-enable no-use-before-define */
	
	            // add classnames
	            other.className = (0, _classnames2['default'])(this.props.className, this.getClasses());
	
	            return _react2['default'].createElement(this.props.component, other, this.props.children);
	        }
	    }, {
	        key: 'getClasses',
	        value: function getClasses() {
	            var columns = _utilities.Numbers.reduce(function (obj, num) {
	                obj[num + ' column'] = false;
	                return obj;
	            }, {});
	
	            var classes = _extends({}, columns, {
	
	                aligned: this.props.aligned && this.props.aligned !== 'justified',
	
	                only: this.props.visible,
	
	                stretched: this.props.stretched,
	
	                row: this.props.defaultClasses
	            });
	
	            if (this.props.equal) {
	                classes['equal width'] = true;
	            }
	
	            if (this.props.columns !== false) {
	                if (this.props.columns > 0 && this.props.columns <= 16) {
	                    classes[_utilities.Numbers[this.props.columns] + ' column'] = true;
	                }
	            }
	
	            classes[this.props.color] = !!this.props.color;
	
	            return (0, _utilities.validateClassProps)(classes, this.props, validProps, { visible: 'only' });
	        }
	    }], [{
	        key: 'propTypes',
	        value: {
	            aligned: _react2['default'].PropTypes.oneOf(['right', 'left', 'justified', 'center']),
	            children: _react2['default'].PropTypes.node,
	            className: _react2['default'].PropTypes.any,
	            color: _react2['default'].PropTypes.string,
	            columns: _react2['default'].PropTypes.number,
	            component: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.element, _react2['default'].PropTypes.string]),
	            defaultClasses: _react2['default'].PropTypes.bool,
	            equal: _react2['default'].PropTypes.bool,
	            stretched: _react2['default'].PropTypes.bool,
	            valigned: _react2['default'].PropTypes.oneOf(['top', 'middle', 'bottom']),
	            visible: _react2['default'].PropTypes.oneOf(['large screen', 'wide screen', 'computer', 'mobile', 'tablet'])
	        },
	        enumerable: true
	    }, {
	        key: 'defaultProps',
	        value: {
	            component: 'div',
	            defaultClasses: true
	        },
	        enumerable: true
	    }]);
	
	    var _Row = Row;
	    Row = _wrapComponent('_$Row')(Row) || Row;
	    Row = (0, _radium2['default'])(Row) || Row;
	    return Row;
	})(_react2['default'].Component);
	
	exports.Row = Row;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)(module)))

/***/ },
/* 202 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';
	
	var _reactTransformHmr2 = __webpack_require__(4);
	
	var _reactTransformHmr3 = _interopRequireDefault(_reactTransformHmr2);
	
	var _react = __webpack_require__(47);
	
	var _reactTransformCatchErrors2 = __webpack_require__(48);
	
	var _reactTransformCatchErrors3 = _interopRequireDefault(_reactTransformCatchErrors2);
	
	var _redboxReact = __webpack_require__(49);
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react2 = _interopRequireDefault(_react);
	
	var _utilities = __webpack_require__(55);
	
	var _collections = __webpack_require__(195);
	
	var _classnames = __webpack_require__(56);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _radium = __webpack_require__(57);
	
	var _radium2 = _interopRequireDefault(_radium);
	
	var _components = {
	    _$Grid: {
	        displayName: 'Grid'
	    }
	};
	
	var _reactComponentWrapper = (0, _reactTransformHmr3['default'])({
	    filename: 'E:/Work/semantic-react/src/components/collections/grid/grid.jsx',
	    components: _components,
	    locals: [module],
	    imports: [_react]
	});
	
	var _reactComponentWrapper2 = (0, _reactTransformCatchErrors3['default'])({
	    filename: 'E:/Work/semantic-react/src/components/collections/grid/grid.jsx',
	    components: _components,
	    locals: [],
	    imports: [_react, _redboxReact]
	});
	
	function _wrapComponent(uniqueId) {
	    return function (ReactClass) {
	        return _reactComponentWrapper2(_reactComponentWrapper(ReactClass, uniqueId), uniqueId);
	    };
	}
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var validProps = {
	    aligned: ['right', 'left', 'justified', 'center'],
	    celled: ['internally'],
	    divided: ['vertically'],
	    padded: ['horizontally', 'vertically'],
	    relaxed: ['very'],
	    valigned: ['top', 'middle', 'bottom']
	};
	
	var Grid = (function (_React$Component) {
	    _inherits(Grid, _React$Component);
	
	    _createClass(Grid, null, [{
	        key: 'propTypes',
	        value: {
	            aligned: _react2['default'].PropTypes.oneOf(['right', 'left', 'justified', 'center']),
	            celled: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.oneOf(['internally']), _react2['default'].PropTypes.bool]),
	            centered: _react2['default'].PropTypes.bool,
	            children: _react2['default'].PropTypes.node,
	            className: _react2['default'].PropTypes.any,
	            columns: _react2['default'].PropTypes.number,
	            component: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.element, _react2['default'].PropTypes.string]),
	            container: _react2['default'].PropTypes.bool,
	            defaultClasses: _react2['default'].PropTypes.bool,
	            divided: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.oneOf(['vertically']), _react2['default'].PropTypes.bool]),
	            doubling: _react2['default'].PropTypes.bool,
	            equal: _react2['default'].PropTypes.bool,
	            padded: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.oneOf(['horizontally', 'vertically']), _react2['default'].PropTypes.bool]),
	            relaxed: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.oneOf(['very']), _react2['default'].PropTypes.bool]),
	            stackable: _react2['default'].PropTypes.bool,
	            valigned: _react2['default'].PropTypes.oneOf(['top', 'middle', 'bottom'])
	        },
	        enumerable: true
	    }, {
	        key: 'defaultProps',
	        value: {
	            component: 'div',
	            defaultClasses: true
	        },
	        enumerable: true
	    }]);
	
	    function Grid(props) {
	        _classCallCheck(this, _Grid);
	
	        _get(Object.getPrototypeOf(_Grid.prototype), 'constructor', this).call(this, props);
	
	        this.style = {
	            mobile: {},
	            computer: {},
	            tablet: {}
	        };
	    }
	
	    _createClass(Grid, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this.forceUpdate();
	        }
	    }, {
	        key: 'onFoundDevice',
	        value: function onFoundDevice(style, type) {
	            this.style[type] = style;
	        }
	    }, {
	        key: 'renderChildren',
	        value: function renderChildren() {
	            var _this = this;
	
	            var children = [_collections.Device, _collections.Computer, _collections.Tablet, _collections.Mobile];
	            return _react2['default'].Children.map(this.props.children, function (child, index) {
	                if (children.indexOf(child.type) > -1) {
	                    return _react2['default'].cloneElement(child, {
	                        callback: _this.onFoundDevice.bind(_this),
	                        key: index
	                    }, child.children);
	                } else {
	                    return child;
	                }
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            // consume props
	            /* eslint-disable no-use-before-define */
	            var _props = this.props;
	            var aligned = _props.aligned;
	            var celled = _props.celled;
	            var centered = _props.centered;
	            var children = _props.children;
	            var columns = _props.columns;
	            var component = _props.component;
	            var container = _props.container;
	            var className = _props.className;
	            var defaultClasses = _props.defaultClasses;
	            var divided = _props.divided;
	            var doubling = _props.doubling;
	            var equal = _props.equal;
	            var padded = _props.padded;
	            var relaxed = _props.relaxed;
	            var stackable = _props.stackable;
	            var valigned = _props.valigned;
	
	            var other = _objectWithoutProperties(_props, ['aligned', 'celled', 'centered', 'children', 'columns', 'component', 'container', 'className', 'defaultClasses', 'divided', 'doubling', 'equal', 'padded', 'relaxed', 'stackable', 'valigned']);
	
	            /* eslint-enable no-use-before-define */
	
	            // add classnames
	            other.className = (0, _classnames2['default'])(this.props.className, this.getClasses());
	
	            return _react2['default'].createElement(this.props.component, other, this.renderChildren());
	        }
	    }, {
	        key: 'getClasses',
	        value: function getClasses() {
	            var columns = _utilities.Numbers.reduce(function (obj, num) {
	                obj[num + ' column'] = false;
	                return obj;
	            }, {});
	
	            var classes = _extends({
	                ui: this.props.defaultClasses
	            }, this.style.computer, this.style.tablet, this.style.mobile, columns, {
	
	                aligned: this.props.aligned && this.props.aligned !== 'justified',
	                container: this.props.container,
	                centered: this.props.centered,
	                celled: this.props.celled,
	                doubling: this.props.doubling,
	                divided: this.props.divided,
	                padded: this.props.padded,
	                relaxed: this.props.relaxed,
	                stackable: this.props.stackable,
	
	                grid: this.props.defaultClasses
	            });
	
	            if (this.props.equal) {
	                classes['equal width'] = true;
	            }
	
	            if (this.props.columns !== false) {
	                if (this.props.columns > 0 && this.props.columns <= 16) {
	                    classes[_utilities.Numbers[this.props.columns] + ' column'] = true;
	                }
	            }
	
	            return (0, _utilities.validateClassProps)(classes, this.props, validProps, { valigned: 'aligned' });
	        }
	    }]);
	
	    var _Grid = Grid;
	    Grid = _wrapComponent('_$Grid')(Grid) || Grid;
	    Grid = (0, _radium2['default'])(Grid) || Grid;
	    return Grid;
	})(_react2['default'].Component);
	
	exports.Grid = Grid;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)(module)))

/***/ },
/* 203 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var _react = __webpack_require__(47);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _utilities = __webpack_require__(55);
	
	var _classnames = __webpack_require__(56);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _radium = __webpack_require__(57);
	
	var _radium2 = _interopRequireDefault(_radium);
	
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
	
	    other.className = (0, _classnames2['default'])(className, getClasses(props));
	
	    return _react2['default'].createElement(component, other, children);
	};
	
	message.propTypes = {
	    attached: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.oneOf(['bottom', 'top']), _react2['default'].PropTypes.bool]),
	    className: _react2['default'].PropTypes.any,
	    color: _react2['default'].PropTypes.string,
	    compact: _react2['default'].PropTypes.bool,
	    component: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.element, _react2['default'].PropTypes.string]),
	    defaultClasses: _react2['default'].PropTypes.bool,
	    floating: _react2['default'].PropTypes.bool,
	    hidden: _react2['default'].PropTypes.bool,
	    icon: _react2['default'].PropTypes.bool,
	    size: _react2['default'].PropTypes.string,
	    state: _react2['default'].PropTypes.oneOf(['success', 'error']),
	    type: _react2['default'].PropTypes.oneOf(['info', 'warning', 'positive', 'negative']),
	    visible: _react2['default'].PropTypes.bool
	};
	
	message.defaultProps = {
	    component: 'div',
	    defaultClasses: true
	};
	
	exports.Message = (0, _radium2['default'])(message);

/***/ },
/* 204 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var _react = __webpack_require__(47);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _utilities = __webpack_require__(55);
	
	var _classnames = __webpack_require__(56);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _radium = __webpack_require__(57);
	
	var _radium2 = _interopRequireDefault(_radium);
	
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
	
	    other.className = (0, _classnames2['default'])(className, getClasses(props), mobileFormat('stackable', stackable), mobileFormat('unstackable', unstackable));
	
	    return _react2['default'].createElement(component, other, children);
	};
	
	table.propTypes = {
	    aligned: _react2['default'].PropTypes.oneOf(['top', 'bottom']),
	    basic: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.oneOf(['very']), _react2['default'].PropTypes.bool]),
	    celled: _react2['default'].PropTypes.bool,
	    className: _react2['default'].PropTypes.any,
	    collapsing: _react2['default'].PropTypes.bool,
	    color: _react2['default'].PropTypes.string,
	    columns: _react2['default'].PropTypes.number,
	    compact: _react2['default'].PropTypes.bool,
	    component: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.element, _react2['default'].PropTypes.string]),
	    defaultClasses: _react2['default'].PropTypes.bool,
	    definition: _react2['default'].PropTypes.bool,
	    fixed: _react2['default'].PropTypes.bool,
	    inverted: _react2['default'].PropTypes.bool,
	    padded: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.oneOf(['very']), _react2['default'].PropTypes.bool]),
	    selectable: _react2['default'].PropTypes.bool,
	    singleLine: _react2['default'].PropTypes.bool,
	    size: _react2['default'].PropTypes.string,
	    stackable: _react2['default'].PropTypes.shape({
	        computer: _react2['default'].PropTypes.bool,
	        mobile: _react2['default'].PropTypes.bool,
	        tablet: _react2['default'].PropTypes.bool
	    }),
	    striped: _react2['default'].PropTypes.bool,
	    structured: _react2['default'].PropTypes.bool,
	    unstackable: _react2['default'].PropTypes.shape({
	        computer: _react2['default'].PropTypes.bool,
	        mobile: _react2['default'].PropTypes.bool,
	        tablet: _react2['default'].PropTypes.bool
	    }),
	    valigned: _react2['default'].PropTypes.oneOf(['center', 'right']),
	    width: _react2['default'].PropTypes.number
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
	
	exports.Table = (0, _radium2['default'])(table);

/***/ },
/* 205 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(47);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _td = __webpack_require__(206);
	
	var _radium = __webpack_require__(57);
	
	var _radium2 = _interopRequireDefault(_radium);
	
	var tr = function tr(props) {
	    return _react2['default'].createElement(
	        _td.Td,
	        _extends({}, props, {
	            component: props.component
	        }),
	        props.children
	    );
	};
	
	tr.propTypes = {
	    children: _react2['default'].PropTypes.node,
	    component: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.element, _react2['default'].PropTypes.string])
	};
	
	tr.defaultProps = {
	    component: 'tr'
	};
	
	exports.Tr = (0, _radium2['default'])(tr);

/***/ },
/* 206 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var _react = __webpack_require__(47);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _utilities = __webpack_require__(55);
	
	var _classnames = __webpack_require__(56);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _radium = __webpack_require__(57);
	
	var _radium2 = _interopRequireDefault(_radium);
	
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
	
	    other.className = (0, _classnames2['default'])(className, getClasses(props));
	
	    return _react2['default'].createElement(component, other, children);
	};
	
	td.propTypes = {
	    aligned: _react2['default'].PropTypes.oneOf(['right', 'left', 'center', 'top', 'bottom']),
	    className: _react2['default'].PropTypes.any,
	    collapsing: _react2['default'].PropTypes.bool,
	    component: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.element, _react2['default'].PropTypes.string]),
	    singleLine: _react2['default'].PropTypes.bool,
	    type: _react2['default'].PropTypes.oneOf(['negative', 'positive', 'warning'])
	};
	
	td.defaultProps = {
	    component: 'td'
	};
	
	exports.Td = (0, _radium2['default'])(td);

/***/ },
/* 207 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var _react = __webpack_require__(47);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(56);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _radium = __webpack_require__(57);
	
	var _radium2 = _interopRequireDefault(_radium);
	
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
	    other.className = (0, _classnames2['default'])(className, getClasses(props));
	
	    return _react2['default'].createElement(component, other, children);
	};
	
	Form.propTypes = {
	    children: _react2['default'].PropTypes.node,
	    className: _react2['default'].PropTypes.any,
	    component: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.element, _react2['default'].PropTypes.string]),
	    defaultClasses: _react2['default'].PropTypes.bool,
	    equalWidth: _react2['default'].PropTypes.bool,
	    inverted: _react2['default'].PropTypes.bool,
	    loading: _react2['default'].PropTypes.bool,
	    size: _react2['default'].PropTypes.string,
	    state: _react2['default'].PropTypes.oneOf(['success', 'error', 'warning'])
	};
	
	Form.defaultProps = {
	    component: 'div',
	    defaultClasses: true
	};
	
	exports.Form = (0, _radium2['default'])(Form);

/***/ },
/* 208 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var _react = __webpack_require__(47);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _utilities = __webpack_require__(55);
	
	var _field = __webpack_require__(209);
	
	var _classnames = __webpack_require__(56);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _radium = __webpack_require__(57);
	
	var _radium2 = _interopRequireDefault(_radium);
	
	function getClasses(props) {
	    var classes = {
	        grouped: props.grouped,
	        inline: props.inline
	    };
	
	    if (props.fluid) {
	        var childCount = (0, _utilities.countChildren)(props.children, _field.Field);
	
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
	    other.className = (0, _classnames2['default'])(className, getClasses(props));
	
	    return _react2['default'].createElement(component, other, children);
	};
	
	Fields.propTypes = {
	    children: _react2['default'].PropTypes.node,
	    className: _react2['default'].PropTypes.any,
	    component: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.element, _react2['default'].PropTypes.string]),
	    defaultClasses: _react2['default'].PropTypes.bool,
	    equalWidth: _react2['default'].PropTypes.bool,
	    fluid: _react2['default'].PropTypes.bool,
	    grouped: _react2['default'].PropTypes.bool,
	    inline: _react2['default'].PropTypes.bool
	};
	
	Fields.defaultProps = {
	    component: 'div',
	    defaultClasses: true
	};
	
	exports.Fields = (0, _radium2['default'])(Fields);

/***/ },
/* 209 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var _react = __webpack_require__(47);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _utilities = __webpack_require__(55);
	
	var _modules = __webpack_require__(93);
	
	var _classnames = __webpack_require__(56);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _radium = __webpack_require__(57);
	
	var _radium2 = _interopRequireDefault(_radium);
	
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
	    return _react2['default'].createElement(
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
	    other.className = (0, _classnames2['default'])(className, getClasses(props));
	
	    return _react2['default'].createElement(component, other, [(0, _utilities.hasFirstChild)(children, _modules.Checkbox) || (0, _utilities.hasFirstChild)(children, _modules.Checkboxes) || !label || label == '' ? null : renderLabel(props.label), children]);
	};
	
	Field.propTypes = {
	    children: _react2['default'].PropTypes.node,
	    className: _react2['default'].PropTypes.any,
	    component: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.element, _react2['default'].PropTypes.string]),
	    defaultClasses: _react2['default'].PropTypes.bool,
	    grouped: _react2['default'].PropTypes.bool,
	    inline: _react2['default'].PropTypes.bool,
	    label: _react2['default'].PropTypes.string,
	    required: _react2['default'].PropTypes.bool,
	    state: _react2['default'].PropTypes.oneOf(['disabled', 'error']),
	    width: _react2['default'].PropTypes.number
	};
	
	Field.defaultProps = {
	    component: 'div',
	    defaultClasses: true
	};
	
	exports.Field = (0, _radium2['default'])(Field);

/***/ }
/******/ ])
});
;
//# sourceMappingURL=semantic-react.js.map